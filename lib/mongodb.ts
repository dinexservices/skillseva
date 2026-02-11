import mongoose from 'mongoose'

const getMongoUri = () => {
  const uri = process.env.MONGODB_URI
  if (!uri) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env')
  }
  return uri
}

interface CachedConnection {
  conn: typeof mongoose | null
  promise: Promise<typeof mongoose> | null
}

declare global {
  var mongoose: CachedConnection | undefined
}

let cached: CachedConnection = global.mongoose || { conn: null, promise: null }

if (!global.mongoose) {
  global.mongoose = cached
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }

    const MONGODB_URI = getMongoUri()
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose
    })
  }

  try {
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null
    throw e
  }

  return cached.conn
}

export default dbConnect
