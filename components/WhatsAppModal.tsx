'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface WhatsAppModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function WhatsAppModal({ isOpen, onClose }: WhatsAppModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    if (!mounted || !isOpen) return null;

    const whatsappGroupLink = 'https://chat.whatsapp.com/I9HeXlWP75M4trxoG7cITO';

    return createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">

            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

     
            <div className="relative w-full max-w-[480px] bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>

                <div className="p-8 pt-12 flex flex-col items-center text-center">
                
                    <div className="mb-6 relative">
                        <div className="w-20 h-20 rounded-[28px] bg-[#25D366]/10 flex items-center justify-center mb-4 mx-auto">
                            <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="#25D366" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            Join Our Community
                        </h3>
                        <p className="text-gray-500 leading-relaxed max-w-[320px] mx-auto text-[0.95rem]">
                            Connect with fellow learners, get exclusive updates, and stay ahead in your career.
                        </p>
                    </div>

            
                    <div className="w-full bg-gray-50 rounded-2xl p-6 mb-8 space-y-3.5">
                        {[
                            "Daily career tips & insights",
                            "Early access to events & workshops",
                            "Network with industry professionals",
                            "Exclusive job opportunities"
                        ].map((benefit, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-accent/10 flex items-center justify-center">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path d="M10 3L4.5 8.5L2 6" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span className="text-gray-700 font-medium text-[0.9rem]">{benefit}</span>
                            </div>
                        ))}
                    </div>

                
                    <a
                        href={whatsappGroupLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-lg transition-all shadow-lg shadow-[#25D366]/20 hover:shadow-xl hover:shadow-[#25D366]/30 hover:-translate-y-0.5 flex items-center justify-center gap-2.5 group"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:scale-110">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="currentColor" />
                        </svg>
                        Join WhatsApp Group
                    </a>

                    <p className="mt-6 text-xs text-gray-400 font-medium">
                        Your privacy is important to us. We'll never share your number.
                    </p>
                </div>
            </div>
        </div>,
        document.body
    );
}
