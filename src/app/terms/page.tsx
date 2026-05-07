import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "شروط الاستخدام - معشبة الحاج العروسي",
  description: "شروط الاستخدام الخاصة بموقع معشبة الحاج العروسي",
};

export default function Terms() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b-2 shadow-sm border-gray-100 py-3 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.webp" alt="شعار معشبة الحاج العروسي" width={60} height={60} className="w-12 h-12 md:w-16 md:h-16 object-contain" />
            <h1 className="text-xl md:text-3xl font-black text-yellow-600 drop-shadow-sm tracking-tight">
              معشبة الحاج العروسي
            </h1>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="flex-grow py-16 px-4" dir="rtl">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <h2 className="text-3xl md:text-4xl font-black text-[#5a001a] mb-8 text-center">
            شروط الاستخدام
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed text-lg">
            <section>
              <h3 className="text-xl font-bold text-yellow-600 mb-3">القبول بالشروط</h3>
              <p>
                باستخدامك لموقع معشبة الحاج العروسي، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي من هذه الشروط، يرجى عدم استخدام الموقع.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-yellow-600 mb-3">المنتجات</h3>
              <p>
                جميع المنتجات المعروضة على موقعنا هي مكملات غذائية طبيعية 100%. نحرص على تقديم وصف دقيق للمنتجات، لكن النتائج قد تختلف من شخص لآخر حسب طبيعة الجسم والحالة الصحية.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-yellow-600 mb-3">الطلب والدفع</h3>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>يتم الدفع عند الاستلام</li>
                <li>التوصيل مجاني لجميع أنحاء المملكة المغربية</li>
                <li>بعد تقديم الطلب، سيتصل بك فريقنا لتأكيد الطلب</li>
                <li>يحق لنا رفض أي طلب لأسباب مشروعة</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-yellow-600 mb-3">التوصيل</h3>
              <p>
                نسعى لتوصيل الطلبات في أسرع وقت ممكن. مدة التوصيل تتراوح عادة بين 24 و 72 ساعة حسب المدينة. لا نتحمل مسؤولية التأخير الناتج عن ظروف خارجة عن إرادتنا.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-yellow-600 mb-3">إخلاء المسؤولية الطبية</h3>
              <p>
                منتجاتنا هي مكملات غذائية طبيعية وليست أدوية. لا تُغني عن استشارة الطبيب. نوفر لك استشارة مجانية فور طلبك للمنتج لنتأكد من ملاءمته لحالتك الصحية. إذا كنت تعاني من أي حالة صحية مزمنة أو تتناول أدوية، يرجى استشارة طبيبك قبل الاستخدام.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-yellow-600 mb-3">الملكية الفكرية</h3>
              <p>
                جميع المحتويات على هذا الموقع، بما في ذلك النصوص والصور والشعارات والتصاميم، هي ملكية حصرية لمعشبة الحاج العروسي. يُمنع نسخها أو إعادة استخدامها دون إذن كتابي مسبق.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-yellow-600 mb-3">تعديل الشروط</h3>
              <p>
                نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم نشر أي تغييرات على هذه الصفحة. استمرارك في استخدام الموقع بعد التعديل يعني موافقتك على الشروط الجديدة.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-yellow-600 mb-3">التواصل معنا</h3>
              <p>
                لأي استفسار حول شروط الاستخدام، يمكنك التواصل معنا عبر واتساب على الرقم: <a href="https://wa.me/212625384599" className="text-[#5a001a] font-bold underline">212625384599+</a>
              </p>
            </section>

            <p className="text-sm text-gray-500 pt-4 border-t border-gray-200">
              آخر تحديث: {new Date().toLocaleDateString('ar-MA')}
            </p>
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
