"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

declare global {
  interface Window {
    ttq?: { track: (event: string) => void };
  }
}

export default function ThankYou() {
  // Fire TikTok Pixel conversion event
  useEffect(() => {
    if (typeof window !== "undefined" && window.ttq) {
      window.ttq.track("CompleteRegistration");
    }
  }, []);
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b-2 shadow-sm border-gray-100 py-3 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.webp" alt="شعار معشبة الحاج العروسي" width={60} height={60} className="w-12 h-12 md:w-16 md:h-16 object-contain" />
            <h1 className="text-xl md:text-3xl font-black text-yellow-600 drop-shadow-sm tracking-tight">
              معشبة الحاج العروسي
            </h1>
          </div>
        </div>
      </header>

      {/* Thank You Content */}
      <main className="flex-grow flex flex-col items-center justify-center relative" dir="rtl">
        {/* Background */}
        <div
          className="absolute inset-0 z-0 opacity-20 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/backrond.webp')" }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#5a001a] via-[#5a001a]/95 to-[#3a0010]" />

        <div className="relative z-10 w-full max-w-xl mx-auto px-4 py-20 flex flex-col items-center">
          {/* Success Card */}
          <div className="w-full bg-white/10 backdrop-blur-xl p-10 md:p-14 rounded-3xl shadow-2xl border border-white/20 text-center animate-fade-in-up">
            {/* Animated Checkmark */}
            <div className="w-24 h-24 mx-auto mb-8 bg-yellow-500 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(234,179,8,0.4)] animate-[bounceIn_0.6s_ease-out]">
              <svg className="w-14 h-14 text-[#5a001a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-5xl font-black text-yellow-400 mb-5 drop-shadow-lg leading-tight">
              تم تسجيل طلبك بنجاح!
            </h2>

            {/* Subtitle */}
            <p className="text-white text-xl md:text-2xl font-bold opacity-90 leading-relaxed mb-8">
              سنتصل بك قريباً لتأكيد الطلب
            </p>

            {/* Divider */}
            <div className="h-[2px] w-24 mx-auto bg-yellow-500/50 rounded-full mb-8" />

            {/* Details */}
            <div className="flex flex-col gap-4 mb-10">
              <div className="flex items-center justify-center gap-3 text-yellow-300 font-semibold text-lg">
                <span className="text-2xl">📞</span>
                <span>فريقنا سيتواصل معك في أقرب وقت</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-yellow-300/80 font-medium text-base">
                <span className="text-2xl">🚚</span>
                <span>التوصيل مجاني والدفع عند الاستلام</span>
              </div>
            </div>

            {/* Back Button */}
            <Link
              href="/"
              className="inline-block bg-yellow-500 hover:bg-yellow-400 text-[#5a001a] font-black text-xl py-4 px-12 rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95 border-b-4 border-yellow-600"
            >
              العودة للصفحة الرئيسية
            </Link>
          </div>

          {/* Trust Badge */}
          <div className="mt-8 flex items-center gap-3 text-white/60 text-sm font-medium">
            <span>🔒</span>
            <span>معلوماتك محمية وآمنة</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#111111] text-gray-400 pt-8 pb-6 border-t-[6px] border-maroon-800 relative z-10 w-full">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm font-medium tracking-wide">
            &copy; {new Date().getFullYear()} <span className="text-yellow-600">معشبة الحاج العروسي</span>. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </div>
  );
}
