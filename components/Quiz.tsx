'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Quiz() {
    return (
        <section className="section section--quiz">
            <div className="v3_padding-global">
                <div className="v3_container">
                    <div className="h_quiz-wrapper">
                        <div className="h_quiz_text-wrapper">
                            <h2 className="v3_heading_h2">Not sure what you are interested in ?</h2>
                            <p className="v3_paragraph_medium">
                                Discover the perfect program for your goals. Whether you're exploring new skills or refining existing ones, we'll help you choose a path that aligns with your ambitions and sets you up for success
                            </p>
                        </div>
                        <Link
                            href="https://form.typeform.com/to/LeUdy7sm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="v3_btn main w-button"
                        >
                            Take a quiz
                        </Link>
                        <Image
                            src="https://cdn.prod.website-files.com/63b304c11504f900a6192a63/6895ca1cde02cdd46bb7b433_lines.svg"
                            alt=""
                            width={200}
                            height={200}
                            className="h_quiz_bg-image"
                            unoptimized
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
