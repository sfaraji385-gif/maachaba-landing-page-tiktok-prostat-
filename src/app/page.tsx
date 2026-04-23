"use client";

import Image from "next/image";
import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";


export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const router = useRouter();


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowFloatingCTA(true);
      } else {
        setShowFloatingCTA(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToForm = () => {
    document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {


      await fetch(
        `https://script.google.com/macros/s/AKfycbw4r6M8JwNrIp1HtvPlanU6Hzb4p5R66GH-_PuuqCeuJsOS8pfQJWRNVIGoiDc98I_etA/exec?name=${formData.name}&phone=${formData.phone}&city=${formData.city}`,
        {
          method: "POST",
          mode: "no-cors"
        }
      );

      router.push("/thank-you");
      setFormData({ name: "", phone: "", city: "" });

    } catch (error) {
      console.error("Error submitting form", error);
      alert("حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b-2 shadow-sm border-gray-100 py-3 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="شعار معشبة الحاج العروسي" width={60} height={60} className="w-12 h-12 md:w-16 md:h-16 object-contain" />
            <h1 className="text-xl md:text-3xl font-black text-yellow-600 drop-shadow-sm tracking-tight">
              معشبة الحاج العروسي
            </h1>
          </div>
          <div>
            <button
              onClick={handleScrollToForm}
              className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-5 md:px-6 rounded-full text-sm md:text-base transition-colors shadow-md"
            >
              اطلب الآن
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col">
        {/* Hero Section */}
        <section className="w-full pb-12">
          <div className="w-full flex flex-col items-center">
            <Image
              src="/image 1+.png"
              alt="العلاج الطبيعي للبروستاتا"
              width={1500}
              height={1500}
              className="w-full h-auto block m-0 p-0"
              priority
            />

            <div className="mt-10 flex flex-col items-center px-4">
              <button
                onClick={handleScrollToForm}
                className="animate-heartbeat bg-red-600 border-b-[6px] border-red-800 hover:bg-red-700 text-white font-black text-3xl md:text-5xl py-5 px-16 rounded-[40px] shadow-2xl transition-all focus:outline-none focus:ring-4 focus:ring-red-300"
              >
                اشتري الآن
              </button>
              <p className="mt-4 text-sm font-semibold text-gray-500 uppercase tracking-widest hidden md:block">
                الكمية محدودة جداً
              </p>
            </div>
          </div>
        </section>

        {/* Persuasion Sections */}
        <section className="bg-white w-full">
          <div className="w-full flex md:max-w-4xl mx-auto flex-col items-center shadow-lg">
            <Image src="/image 2.png" alt="تفاصيل المنتج" width={1000} height={1000} className="w-full h-auto object-cover block animate-fade-in-up" />
            <Image src="/image 3.png" alt="فوائد المنتج" width={1000} height={1000} className="w-full h-auto object-cover block" />
            <Image src="/image 4.png" alt="مكونات طبيعية" width={1000} height={1000} className="w-full h-auto object-cover block" />
            <Image src="/image 5+.png" alt="آراء الزبائن" width={1000} height={1000} className="w-full h-auto object-cover block" />
          </div>
        </section>

        {/* Premium Offer & Pricing Section */}
        <section className="w-full bg-[#5a001a] py-16 px-4 shadow-inner border-y-8 border-yellow-500" dir="rtl">
          <div className="max-w-3xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02]">
            <div className="bg-yellow-500 py-3 text-center">
              <span className="font-extrabold text-[#5a001a] text-xl md:text-2xl tracking-widest uppercase">
                عرض حصري
              </span>
            </div>
            <div className="p-8 md:p-10 flex flex-col items-center text-center">
              <h2 className="text-3xl md:text-5xl font-black text-yellow-600 mb-6 drop-shadow-sm">
                باقة البروستات المتكاملة
              </h2>
              <p className="text-lg md:text-2xl text-gray-800 font-bold mb-6 leading-relaxed max-w-2xl px-2">
                الحل الطبيعي والفعال لمشاكل البروستات. تحتوي الباقة على:
              </p>

              <ul className="w-full max-w-2xl flex flex-col gap-4 mb-10 px-2 text-right">
                <li className="flex items-center gap-5 bg-[#5a001a]/70 p-4 md:p-5 rounded-xl border border-yellow-500 shadow-lg transition hover:scale-[1.02]">
                  <span className="text-5xl md:text-6xl shrink-0 drop-shadow-md">🍯</span>
                  <span className="text-white font-bold text-lg md:text-xl leading-relaxed">نصف كيلو من العسل الحر بالأعشاب الطبيعية</span>
                </li>
                <li className="flex items-center gap-5 bg-[#5a001a]/70 p-4 md:p-5 rounded-xl border border-yellow-500 shadow-lg transition hover:scale-[1.02]">
                  <span className="text-5xl md:text-6xl shrink-0 drop-shadow-md">🧴</span>
                  <span className="text-white font-bold text-lg md:text-xl leading-relaxed">زيت للدهن لتنشيط الأوعية الدموية</span>
                </li>
                <li className="flex items-center gap-5 bg-[#5a001a]/70 p-4 md:p-5 rounded-xl border border-yellow-500 shadow-lg transition hover:scale-[1.02]">
                  <span className="text-5xl md:text-6xl shrink-0 drop-shadow-md">🍵</span>
                  <span className="text-white font-bold text-lg md:text-xl leading-relaxed">منقوع خاص لتنقية المثانة</span>
                </li>
              </ul>

              <div className="flex flex-col items-center bg-gray-50 w-full py-8 rounded-2xl border-2 border-gray-100 shadow-md">
                <div className="mb-2">
                  <span className="text-2xl md:text-4xl font-bold text-gray-400 line-through decoration-red-600 decoration-4">
                    400 درهم
                  </span>
                </div>
                <div className="flex justify-center items-baseline gap-2">
                  <span className="text-6xl md:text-8xl font-black text-[#5a001a]">
                    249
                  </span>
                  <span className="text-3xl md:text-4xl font-bold text-[#5a001a]">
                    درهم
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Order Form Section */}
        <section id="order-form" className="relative py-20 px-4 bg-maroon-900 flex-grow flex flex-col justify-center">
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 z-0 opacity-25 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: "url('/backrond.png')" }}
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-maroon-900 via-transparent to-maroon-800 opacity-90 mix-blend-multiply" />

          <div className="relative z-10 w-full max-w-lg mx-auto bg-white/10 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-white/20">
            <h2 className="text-3xl md:text-5xl font-black text-yellow-400 mb-4 text-center drop-shadow-md">
              أدخل معلوماتك للطلب
            </h2>
            <p className="text-white text-center mb-10 font-bold text-lg opacity-90">
              الدفع عند الاستلام والتوصيل مجاني
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 relative">
                <label htmlFor="name" className="text-white font-bold text-lg pr-1">الاسم الكامل</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-transparent focus:border-yellow-400 focus:outline-none focus:ring-0 text-gray-900 text-xl font-medium bg-white shadow-inner transition-colors"
                  placeholder="الاسم"
                />
              </div>

              <div className="flex flex-col gap-2 relative">
                <label htmlFor="phone" className="text-white font-bold text-lg pr-1">رقم الهاتف</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  dir="ltr"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-transparent focus:border-yellow-400 focus:outline-none focus:ring-0 text-gray-900 text-xl font-bold bg-white text-right shadow-inner transition-colors"
                  placeholder="06 XX XX XX XX"
                />
              </div>

              <div className="flex flex-col gap-2 relative">
                <label htmlFor="city" className="text-white font-bold text-lg pr-1">المدينة</label>
                <input
                  type="text"
                  id="city"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-transparent focus:border-yellow-400 focus:outline-none focus:ring-0 text-gray-900 text-xl font-medium bg-white shadow-inner transition-colors"
                  placeholder="المدينة التي تقطن بها"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`mt-4 bg-red-600 border-b-4 border-red-800 hover:bg-red-700 text-white font-black text-3xl py-5 rounded-2xl shadow-xl transition-all ${isSubmitting ? 'opacity-75 cursor-not-allowed transform-none' : 'animate-heartbeat active:translate-y-1 active:border-b-0'}`}
              >
                {isSubmitting ? "جاري الإرسال..." : "اشتري الآن"}
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#111111] text-gray-400 pt-12 pb-8 border-t-[6px] border-maroon-800 relative z-10 w-full">
        <div className="max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
          <div className="mb-8 flex justify-center gap-8 font-semibold">
            <a href="#" className="hover:text-yellow-500 transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">شروط الاستخدام</a>
          </div>

          <div className="bg-[#1a1a1a] p-5 rounded-xl border border-gray-800 max-w-2xl shadow-inner mb-8">
            <p className="text-sm md:text-base leading-relaxed text-gray-400 font-medium tracking-wide">
              <strong className="text-yellow-600 block mb-1">تنويه طبي هام</strong>
              هذا المنتج هو مكمل طبيعي. النتائج قد تختلف من شخص لآخر وليس بديلا عن الاستشارة الطبية. يجب استشارة طبيبك قبل استخدامه إذا كنت تعاني من أي أمراض مزمنة.
            </p>
          </div>

          <div className="h-[1px] w-full max-w-md bg-gray-800 mb-6"></div>

          <p className="text-sm font-medium tracking-wide">
            &copy; {new Date().getFullYear()} <span className="text-yellow-600">معشبة الحاج العروسي</span>. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>

      {/* Floating Sticky CTA */}
      <div
        className={`fixed bottom-6 left-6 z-50 transition-all duration-500 transform ${showFloatingCTA ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'}`}
      >
        <button
          onClick={handleScrollToForm}
          className="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-black text-xl px-7 py-4 rounded-full shadow-[0_10px_35px_rgba(220,38,38,0.6)] border-2 border-white animate-bounce focus:outline-none hover:scale-105 active:scale-95 transition-transform"
        >
          <span className="text-2xl drop-shadow-md">🛒</span>
          <span>اطلب الآن</span>
        </button>
      </div>
    </div>
  );
}
