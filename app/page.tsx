```jsx
const whatsappUrl = "https://wa.me/966538560036";

const services = [
  {
    number: "01",
    title: "مسك وإدارة الحسابات",
    description:
      "تسجيل وتنظيم العمليات المالية اليومية، ومتابعة الإيرادات والمصروفات والمبيعات والمشتريات والحسابات المختلفة.",
  },
  {
    number: "02",
    title: "إعداد التقارير والقوائم المالية",
    description:
      "إعداد تقارير وقوائم مالية دورية تساعد الإدارة على متابعة الأداء وفهم النتائج المالية.",
  },
  {
    number: "03",
    title: "إعداد ومتابعة الإقرارات الضريبية",
    description:
      "تنظيم البيانات وإعداد ومتابعة الإقرارات والمتطلبات الضريبية وفق الأنظمة المعمول بها.",
  },
  {
    number: "04",
    title: "إدارة ضريبة القيمة المضافة VAT",
    description:
      "المساعدة في تنظيم البيانات الضريبية وإدارة متطلبات ضريبة القيمة المضافة ومتابعتها.",
  },
  {
    number: "05",
    title: "مراجعة وتحليل الحسابات",
    description:
      "مراجعة حسابات المنشأة وتحديد الأخطاء والملاحظات ونقاط التحسين مع تقديم توصيات عملية.",
  },
  {
    number: "06",
    title: "المحاسب عن بُعد",
    description:
      "خدمات محاسبية مستمرة دون الحاجة إلى توظيف فريق محاسبي كامل داخل المنشأة.",
  },
  {
    number: "07",
    title: "المدير المالي عن بُعد – CFO",
    description:
      "خبرة مالية وإدارية تساعدك في التخطيط وتحليل الأداء وإدارة السيولة ووضع الخطط المالية.",
  },
  {
    number: "08",
    title: "إعداد الميزانيات والخطط المالية",
    description:
      "إعداد الميزانيات والخطط المالية ومتابعة المصروفات والإيرادات والتدفقات النقدية.",
  },
];

const sectors = [
  "المطاعم والكافيهات",
  "الشركات الصغيرة والمتوسطة",
  "المتاجر",
  "العيادات",
  "الصالونات ومراكز العناية",
  "الأندية والمنشآت الرياضية",
  "الشركات متعددة الفروع",
  "رواد الأعمال والمنشآت الناشئة",
];

function ArrowIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export default function Home() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#f5f2eb] text-[#102a43]">
      {/* ================= HEADER ================= */}
      <header className="absolute left-0 right-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex h-24 items-center justify-between border-b border-white/20">
            {/* Logo */}
            <a href="#home" className="group flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d6b477] bg-[#102a43] text-[#d6b477]">
                <span className="text-xl font-bold">س</span>
              </div>

              <div className="leading-tight">
                <div className="text-lg font-bold tracking-wide text-white">
                  سند ركان
                </div>

                <div className="text-[10px] tracking-[0.18em] text-[#d6b477]">
                  للمحاسبة والاستشارات المالية
                </div>
              </div>
            </a>

            {/* Navigation */}
            <nav className="hidden items-center gap-8 lg:flex">
              <a
                href="#home"
                className="text-sm text-white/90 transition hover:text-[#d6b477]"
              >
                الرئيسية
              </a>

              <a
                href="#services"
                className="text-sm text-white/80 transition hover:text-[#d6b477]"
              >
                خدماتنا
              </a>

              <a
                href="#about"
                className="text-sm text-white/80 transition hover:text-[#d6b477]"
              >
                عن سند ركان
              </a>

              <a
                href="#sectors"
                className="text-sm text-white/80 transition hover:text-[#d6b477]"
              >
                القطاعات
              </a>

              <a
                href="#contact"
                className="text-sm text-white/80 transition hover:text-[#d6b477]"
              >
                تواصل معنا
              </a>
            </nav>

            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full border border-[#d6b477]/70 px-5 py-2.5 text-sm text-[#d6b477] transition hover:bg-[#d6b477] hover:text-[#102a43] sm:flex"
            >
              +966 538 5600 36
            </a>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative min-h-[760px] overflow-hidden bg-[#102a43]"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(16,42,67,.98) 0%, rgba(16,42,67,.90) 42%, rgba(16,42,67,.40) 100%), url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2000&q=85')",
          }}
        />

        <div className="absolute -right-32 top-40 h-96 w-96 rounded-full bg-[#d6b477]/10 blur-3xl" />

        <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-6 pt-28 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-12 bg-[#d6b477]" />

              <span className="text-sm tracking-[0.2em] text-[#d6b477]">
                للمحاسبة والاستشارات المالية
              </span>
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.25] text-white sm:text-6xl lg:text-7xl">
              محاسبتك
              <span className="text-[#d6b477]"> تحت السيطرة… </span>
              وأرقامك في الصورة.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-9 text-white/75">
              خدمات محاسبية ومالية تساعدك على إدارة أعمالك بثقة.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#d6b477] px-7 py-4 font-semibold text-[#102a43] transition hover:bg-[#e4c78e]"
              >
                اكتشف خدماتنا
                <ArrowIcon />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 font-semibold text-white transition hover:border-[#d6b477] hover:text-[#d6b477]"
              >
                تحدث معنا
              </a>
            </div>

            <div className="mt-16 flex flex-wrap gap-10 border-t border-white/15 pt-7">
              <div>
                <div className="text-2xl font-bold text-[#d6b477]">10+</div>
                <div className="mt-1 text-sm text-white/55">
                  خدمات مالية ومحاسبية
                </div>
              </div>

              <div>
                <div className="text-2xl font-bold text-[#d6b477]">08</div>
                <div className="mt-1 text-sm text-white/55">
                  قطاعات نخدمها
                </div>
              </div>

              <div>
                <div className="text-2xl font-bold text-[#d6b477]">
                  VAT
                </div>
                <div className="mt-1 text-sm text-white/55">
                  حلول ومتابعة ضريبية
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#0b2034]/60 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-xs text-white/50 lg:px-10">
            <span>حلول مالية ومحاسبية للأعمال</span>
            <span>المملكة العربية السعودية</span>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="relative overflow-hidden bg-[#102a43] py-24 lg:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2000&q=85')",
          }}
        />

        <div className="absolute inset-0 bg-[#102a43]/90" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.5fr] lg:items-center lg:px-10">
          <div>
            <span className="text-sm font-semibold tracking-[0.15em] text-[#d6b477]">
              سند ركان
            </span>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-white lg:text-5xl">
              شريكك المالي
              <br />
              <span className="text-[#d6b477]">في كل خطوة</span>
            </h2>
          </div>

          <div>
            <p className="text-lg leading-9 text-white/75">
              في سند ركان نقدم حلولًا محاسبية ومالية متكاملة للمنشآت الصغيرة
              والمتوسطة في المملكة العربية السعودية، تساعد أصحاب الأعمال على
              معرفة نتائج أعمالهم، تنظيم حساباتهم، ومتابعة الأداء المالي بشكل
              مستمر.
            </p>

            <p className="mt-5 text-lg leading-9 text-white/60">
              نحن لا نقدم مجرد تسجيل للقيود والفواتير، بل نساعدك على فهم أرقام
              منشأتك واتخاذ قرارات مالية أفضل.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#d6b477]/60 px-6 py-3 text-sm font-semibold text-[#d6b477] transition hover:bg-[#d6b477] hover:text-[#102a43]"
            >
              تواصل معنا
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section
        id="services"
        className="relative overflow-hidden bg-[#102a43] py-24 lg:py-32"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=2000&q=85')",
          }}
        />

        <div className="absolute inset-0 bg-[#f5f2eb]/95" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <span className="text-sm font-semibold tracking-[0.15em] text-[#b28a4a]">
                ماذا نقدم؟
              </span>

              <h2 className="mt-4 text-4xl font-bold text-[#102a43] lg:text-5xl">
                خدمات مالية ومحاسبية متكاملة
              </h2>
            </div>

            <p className="max-w-md leading-8 text-[#526477]">
              نساعدك على تنظيم حساباتك وفهم أرقام منشأتك ومتابعة أدائها المالي
              بشكل مستمر.
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.number}
                className="group rounded-3xl border border-[#ded8cc]/80 bg-white/90 p-7 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:bg-[#102a43]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#b28a4a]">
                    {service.number}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ded8cc] text-[#102a43] transition group-hover:border-[#d6b477] group-hover:text-[#d6b477]">
                    <ArrowIcon />
                  </span>
                </div>

                <h3 className="mt-12 text-xl font-bold leading-8 text-[#102a43] transition group-hover:text-white">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#718096] transition group-hover:text-white/60">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="overflow-hidden bg-[#102a43]">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div
            className="min-h-[500px] bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(16,42,67,.15), rgba(16,42,67,.15)), url('https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1400&q=85')",
            }}
          />

          <div className="flex items-center px-6 py-20 lg:px-16 lg:py-28">
            <div>
              <span className="text-sm font-semibold tracking-[0.15em] text-[#d6b477]">
                لماذا سند ركان؟
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight text-white lg:text-5xl">
                لأنك تحتاج إلى
                <br />
                <span className="text-[#d6b477]">أكثر من محاسب</span>
              </h2>

              <p className="mt-7 text-base leading-9 text-white/65">
                نعمل معك على تحويل البيانات المالية إلى معلومات تساعدك في إدارة
                نشاطك. نراجع الأرقام، نوضح نقاط القوة والضعف، ونقدم لك توصيات
                عملية تساعدك على تحسين الأداء المالي وتقليل الهدر.
              </p>

              <p className="mt-5 text-base leading-9 text-white/60">
                نحرص على أن تكون حسابات منشأتك محدثة ومنظمة، مع تقارير دورية
                تساعدك على معرفة نتائج أعمالك ومتابعة أدائك المالي.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "كم حققت من إيرادات؟",
                  "كم أنفقت؟",
                  "هل تحقق ربحًا فعليًا؟",
                  "أين تذهب أموالك؟",
                  "ما هي أكثر المصروفات تأثيرًا؟",
                  "كيف يتحسن أداء منشأتك من شهر إلى آخر؟",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-white/80"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#d6b477] text-[#102a43]">
                      <CheckIcon />
                    </span>

                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RESTAURANTS ================= */}
      <section className="relative overflow-hidden bg-[#102a43] py-24 lg:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85')",
          }}
        />

        <div className="absolute inset-0 bg-[#102a43]/90" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <span className="text-sm font-semibold tracking-[0.15em] text-[#d6b477]">
                للمطاعم والكافيهات
              </span>

              <h2 className="mt-4 text-4xl font-bold leading-tight text-white lg:text-5xl">
                نعرف تفاصيل
                <br />
                <span className="text-[#d6b477]">نشاطك المالي</span>
              </h2>

              <p className="mt-6 max-w-md leading-8 text-white/60">
                نعرف أن المطاعم والكافيهات تحتاج إلى متابعة دقيقة للأرقام بسبب
                تعدد الفروع وكثرة العمليات اليومية.
              </p>

              <p className="mt-5 max-w-md leading-8 text-white/60">
                هدفنا أن تعرف ربحية نشاطك الحقيقية، وليس فقط حجم مبيعاتك.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "مبيعات الفروع",
                "تكلفة المواد",
                "تكلفة العمالة",
                "المصروفات التشغيلية",
                "الموردين والمشتريات",
                "النقدية والبنوك",
                "ربحية كل فرع",
                "هامش الربح",
                "نقطة التعادل",
                "الأداء الشهري",
              ].map((item, index) => (
                <div
                  key={item}
                  className="group flex min-h-[120px] items-end justify-between rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#d6b477]/50 hover:bg-white/15"
                >
                  <div>
                    <span className="text-xs text-[#d6b477]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-4 text-lg font-bold text-white">
                      {item}
                    </h3>
                  </div>

                  <span className="text-[#d6b477]">
                    <ArrowIcon />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW WE WORK ================= */}
      <section className="relative overflow-hidden bg-[#f5f2eb] py-24 lg:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=80')",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold tracking-[0.15em] text-[#b28a4a]">
              كيف نعمل؟
            </span>

            <h2 className="mt-4 text-4xl font-bold text-[#102a43] lg:text-5xl">
              خطوات واضحة نحو
              <br />
              <span className="text-[#b28a4a]">صورة مالية أفضل</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {[
              {
                number: "01",
                title: "جمع البيانات",
                description:
                  "نبدأ بفهم نشاطك والبيانات المالية المتوفرة لديك.",
              },
              {
                number: "02",
                title: "تنظيم الحسابات",
                description:
                  "نعمل على تنظيم وتسجيل العمليات المالية بطريقة واضحة ومنهجية.",
              },
              {
                number: "03",
                title: "إعداد التقارير",
                description:
                  "نقدم تقارير مالية دورية توضح نتائج أعمالك.",
              },
              {
                number: "04",
                title: "التحليل",
                description:
                  "لا نكتفي بالأرقام، بل نحلل النتائج ونحدد أهم الملاحظات.",
              },
              {
                number: "05",
                title: "التوصيات",
                description:
                  "نقدم توصيات عملية تساعدك على تحسين الأداء واتخاذ قرارات أفضل.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-3xl border border-[#ded8cc] bg-white/80 p-7"
              >
                <span className="text-sm font-bold text-[#b28a4a]">
                  {step.number}
                </span>

                <h3 className="mt-8 text-xl font-bold text-[#102a43]">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#718096]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTORS ================= */}
      <section
        id="sectors"
        className="relative overflow-hidden bg-[#102a43] py-24 lg:py-32"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85')",
          }}
        />

        <div className="absolute inset-0 bg-[#102a43]/90" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <span className="text-sm font-semibold tracking-[0.15em] text-[#d6b477]">
                لمن تناسب خدماتنا؟
              </span>

              <h2 className="mt-4 text-4xl font-bold leading-tight text-white lg:text-5xl">
                حلول تناسب
                <br />
                <span className="text-[#d6b477]">طبيعة أعمالك</span>
              </h2>

              <p className="mt-6 max-w-md leading-8 text-white/60">
                خدماتنا مناسبة لمختلف المنشآت والأنشطة، من المشاريع الناشئة إلى
                الشركات متعددة الفروع.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {sectors.map((sector, index) => (
                <div
                  key={sector}
                  className="group flex min-h-[150px] items-end justify-between rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#d6b477]/50 hover:bg-white/15"
                >
                  <div>
                    <span className="text-xs text-[#d6b477]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-4 text-xl font-bold text-white">
                      {sector}
                    </h3>
                  </div>

                  <span className="text-[#d6b477]">
                    <ArrowIcon />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CFO ================= */}
      <section className="relative overflow-hidden bg-[#0b2034] py-24 lg:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=80')",
          }}
        />

        <div className="absolute inset-0 bg-[#0b2034]/50" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-4xl">
            <span className="text-sm font-semibold tracking-[0.15em] text-[#d6b477]">
              خدمات المدير المالي عن بُعد
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-white lg:text-6xl">
              خبرة مالية
              <br />
              <span className="text-[#d6b477]">عندما تحتاجها</span>
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-9 text-white/65">
              خدمة المدير المالي عن بُعد – CFO لأصحاب المنشآت الذين يحتاجون إلى
              خبرة مالية وإدارية تساعدهم في التخطيط، تحليل الأداء، إدارة
              السيولة، ووضع الخطط المالية.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#d6b477] px-7 py-4 font-semibold text-[#102a43] transition hover:bg-[#e4c78e]"
            >
              تحدث معنا عن الخدمة
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section id="contact" className="relative overflow-hidden bg-[#d6b477]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1800&q=80')",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
            <div>
              <span className="text-sm font-semibold tracking-[0.15em] text-[#102a43]/70">
                تواصل معنا
              </span>

              <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-[#102a43] lg:text-5xl">
                هل تريد معرفة الوضع المالي الحقيقي لمنشأتك؟
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-[#102a43]/70">
                تواصل مع سند ركان اليوم للحصول على استشارة أولية ومعرفة الحل
                المناسب لنشاطك.
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#102a43] px-8 py-4 font-semibold text-white transition hover:bg-[#173b5d]"
            >
              +966 538 5600 36
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#081a2b] text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d6b477] text-xl font-bold text-[#d6b477]">
                  س
                </div>

                <div>
                  <div className="font-bold">سند ركان</div>

                  <div className="text-[10px] tracking-[0.15em] text-[#d6b477]">
                    للمحاسبة والاستشارات المالية
                  </div>
                </div>
              </div>

              <p className="mt-6 max-w-sm text-sm leading-7 text-white/45">
                خدمات محاسبية ومالية تساعدك على إدارة أعمالك بثقة، مع متابعة
                مستمرة للأرقام والأداء المالي.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-semibold text-[#d6b477]">
                روابط سريعة
              </h3>

              <div className="mt-5 space-y-3 text-sm text-white/55">
                <a
                  className="block transition hover:text-white"
                  href="#home"
                >
                  الرئيسية
                </a>

                <a
                  className="block transition hover:text-white"
                  href="#services"
                >
                  خدماتنا
                </a>

                <a
                  className="block transition hover:text-white"
                  href="#about"
                >
                  عن سند ركان
                </a>

                <a
                  className="block transition hover:text-white"
                  href="#sectors"
                >
                  القطاعات
                </a>

                <a
                  className="block transition hover:text-white"
                  href="#contact"
                >
                  تواصل معنا
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-[#d6b477]">
                تواصل معنا
              </h3>

              <div className="mt-5 space-y-4 text-sm text-white/55">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition hover:text-white"
                >
                  +966 538 5600 36
                </a>

                <a
                  href="mailto:mahmoudgooda160@gmail.com"
                  className="block transition hover:text-white"
                >
                  mahmoudgooda160@gmail.com
                </a>

                <div>المملكة العربية السعودية</div>
              </div>
            </div>
          </div>

          <div className="mt-14 border-t border-white/10 pt-6 text-center text-xs text-white/35">
            © {new Date().getFullYear()} سند ركان — للمحاسبة والاستشارات المالية
          </div>
        </div>
      </footer>
    </main>
  );
}
```
