import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "سياسة الخصوصية - معشبة العروسي",
  description: "سياسة الخصوصية الخاصة بموقع معشبة العروسي",
};

export default function Privacy() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b-2 shadow-sm border-gray-100 py-3 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.webp" alt="شعار معشبة العروسي" width={60} height={60} className="w-12 h-12 md:w-16 md:h-16 object-contain" />
            <h1 className="text-xl md:text-3xl font-black text-yellow-600 drop-shadow-sm tracking-tight">
              معشبة العروسي
            </h1>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="flex-grow py-16 px-4" dir="rtl">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <h2 className="text-3xl md:text-4xl font-black text-[#5a001a] mb-8 text-center">
            سياسة الخصوصية
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed text-lg">
            <section>
              <h3 className="text-xl font-bold text-yellow-600 mb-3">المقدمة</h3>
              <p>
                نحن في معشبة العروسي نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح هذه السياسة كيفية جمع واستخدام وحماية المعلومات التي تقدمها لنا عند استخدام موقعنا.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-yellow-600 mb-3">المعلومات التي نجمعها</h3>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>الاسم الكامل</li>
                <li>رقم الهاتف</li>
                <li>المدينة</li>
              </ul>
              <p className="mt-3">
                يتم جمع هذه المعلومات فقط عند تقديم طلب شراء عبر نموذج الطلب على موقعنا.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-yellow-600 mb-3">كيف نستخدم معلوماتك</h3>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>التواصل معك لتأكيد طلبك</li>
                <li>توصيل المنتج إلى عنوانك</li>
                <li>تقديم خدمة العملاء والدعم</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-yellow-600 mb-3">حماية البيانات</h3>
              <p>
                نحن نتخذ إجراءات أمنية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التعديل أو الإفصاح أو الإتلاف. لا نقوم ببيع أو مشاركة بياناتك الشخصية مع أطراف ثالثة لأغراض تسويقية.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-yellow-600 mb-3">ملفات تعريف الارتباط (Cookies)</h3>
              <p>
                قد يستخدم موقعنا ملفات تعريف الارتباط وتقنيات تتبع مشابهة لتحسين تجربة المستخدم وتحليل حركة المرور على الموقع. يمكنك التحكم في إعدادات ملفات تعريف الارتباط من خلال متصفحك.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-yellow-600 mb-3">أدوات التحليل</h3>
              <p>
                نستخدم أدوات تحليل تابعة لجهات خارجية (مثل TikTok Pixel و Microsoft Clarity) لفهم كيفية تفاعل الزوار مع موقعنا. هذه الأدوات قد تجمع معلومات مجهولة الهوية حول زياراتك.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-yellow-600 mb-3">حقوقك</h3>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>طلب الوصول إلى بياناتك الشخصية</li>
                <li>طلب تصحيح أو حذف بياناتك</li>
                <li>الاعتراض على معالجة بياناتك</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-yellow-600 mb-3">التواصل معنا</h3>
              <p>
                إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه، يمكنك التواصل معنا عبر واتساب على الرقم: <a href="https://wa.me/212625384599" className="text-[#5a001a] font-bold underline">212625384599+</a>
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
            &copy; {new Date().getFullYear()} <span className="text-yellow-600">معشبة العروسي</span>. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </div>
  );
}
