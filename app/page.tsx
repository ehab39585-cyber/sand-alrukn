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
    title: "التقارير والقوائم المالية",
    description:
      "إعداد تقارير مالية دورية والقوائم المالية التي تساعد الإدارة على متابعة الأداء واتخاذ القرارات.",
  },
  {
    number: "03",
    title: "ضريبة القيمة المضافة (VAT)",
    description:
      "المساعدة في تنظيم البيانات الضريبية وإعداد ومتابعة متطلبات ضريبة القيمة المضافة وفق الأنظمة المعمول بها.",
  },
  {
    number: "04",
    title: "الإقرارات الضريبية والزكوية",
    description:
      "تنظيم البيانات والحسابات اللازمة لدعم إعداد ومتابعة الإقرارات الضريبية والزكوية.",
  },
  {
    number: "05",
    title: "المحاسب عن بُعد",
    description:
      "احصل على خدمات محاسبية مستمرة دون الحاجة إلى توظيف فريق محاسبي كامل داخل منشأتك.",
  },
  {
    number: "06",
    title: "المدير المالي عن بُعد – CFO",
    description:
      "خدمة مخصصة لأصحاب المنشآت الذين يحتاجون إلى خبرة مالية وإدارية تساعدهم في التخطيط، تحليل الأداء وإدارة السيولة.",
  },
  {
    number: "07",
    title: "مراجعة وتحليل الحسابات",
    description:
      "نراجع حسابات منشأتك ونحدد الأخطاء والملاحظات ونقاط التحسين، مع تقديم توصيات عملية للإدارة.",
  },
  {
    number: "08",
    title: "إعداد الميزانيات والخطط المالية",
    description:
      "متابعة المصروفات والإيرادات والتدفقات النقدية وإعداد الميزانيات التقديرية.",
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
                  سند الركن
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
                عن سند الركن
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
                محاسبتك تحت السيطرة… وأرقامك في الصورة.
              </span>
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.25] text-white sm:text-6xl lg:text-7xl">
              محاسبتك
              <span className="text-[#d6b477]"> تحت السيطرة </span>
              وأرقامك في الصورة
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-9 text-white/75">
              نقدم حلولًا محاسبية ومالية متكاملة للمنشآت الصغيرة والمتوسطة، لتساعد أصحاب الأعمال على معرفة نتائج أعمالهم، تنظيم حساباتهم، ومتابعة الأداء المالي.
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
                <div className="text-2xl font-bold text-[#d6b477]">08+</div>
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
                  VAT & ZATCA
                </div>
                <div className="mt-1 text-sm text-white/55">
                  حلول ضريبية وزكوية
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
              سند الركن
            </span>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-white lg:text-5xl">
              شريكك المالي
              <br />
              <span className="text-[#d6b477]">في كل خطوة</span>
            </h2>
          </div>

          <div>
            <p className="text-lg leading-9 text-white/75">
              نحن لا نقدم مجرد تسجيل للقيود والفواتير، بل نساعدك على فهم أرقام منشأتك واتخاذ قرارات مالية أفضل عبر حلول متكاملة للمنشآت في المملكة العربية السعودية.
            </p>

            <p className="mt-5 text-lg leading-9 text-white/60">
              من مسك الحسابات والقوائم المالية، إلى ضريبة القيمة المضافة، الإقرارات الزكوية، وخدمات المدير المحاسبي والمالي عن بُعد.
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
                خدماتنا
              </span>

              <h2 className="mt-4 text-4xl font-bold text-[#102a43] lg:text-5xl">
                ماذا نقدم؟
              </h2>
            </div>

            <p className="max-w-md leading-8 text-[#526477]">
              خدمات محاسبية ومالية متكاملة مصممة لتلبية احتياجات منشأتك بدقة.
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
                لماذا سند الركن؟
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight text-white lg:text-5xl">
                لأنك تحتاج إلى
                <br />
                أكثر من <span className="text-[#d6b477]">محاسب</span>
              </h2>

              <p className="mt-7 text-base leading-9 text-white/65">
                نعمل معك على تحويل البيانات المالية إلى معلومات تساعدك في إدارة نشاطك. نراجع الأرقام، نوضح نقاط القوة والضعف، ونقدم لك توصيات عملية تساعدك على تحسين الأداء المالي وتقليل الهدر.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "حسابات منشأتك محدثة ومنظمة باستمرار",
                  "معرفة الإيرادات وحجم المصروفات بدقة",
                  "تحديد ربحيتك الفعلية وأين تذهب أموالك",
                  "توصيات عملية لتحسين الأداء واتخاذ القرار",
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
                القطاعات
              </span>

              <h2 className="mt-4 text-4xl font-bold leading-tight text-white lg:text-5xl">
                لمن تناسب
                <br />
                <span className="text-[#d6b477]">خدماتنا؟</span>
              </h2>

              <p className="mt-6 max-w-md leading-8 text-white/60">
                نقدم حلولًا متخصصة تلائم طبيعة الأنشطة المختلفة لمساعدتك على معرفة ربحيتك الحقيقية.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {sectors.map((sector, index) => (
                <div
                  key={sector}
                  className="group flex min-h-[140px] items-end justify-between rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#d6b477]/50 hover:bg-white/15"
                >
                  <div>
                    <span className="text-xs text-[#d6b477]">
                      0{index + 1}
                    </span>

                    <h3 className="mt-3 text-lg font-bold text-white">
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
              فريق مالى متكامل بدون تكلفة كاملة
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-white lg:text-6xl">
              أنت تدير نشاطك…
              <br />
              <span className="text-[#d6b477]">ونحن نهتم بأرقامك</span>
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-9 text-white/65">
              مع سند الركن يمكنك الحصول على خدمات محاسبية ومالية مستمرة بتكلفة مناسبة، دون تحمل تكلفة توظيف فريق كامل داخل المنشأة.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#d6b477] px-7 py-4 font-semibold text-[#102a43] transition hover:bg-[#e4c78e]"
            >
              تحدث معنا الآن
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
                أرقام أوضح، قرارات أفضل، ونمو مستدام.
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-[#102a43]/70">
                هل تريد معرفة الوضع المالي الحقيقي لمنشأتك؟ تواصل معنا اليوم للحصول على استشارة أولية.
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
                  <div className="font-bold">سند الركن</div>

                  <div className="text-[10px] tracking-[0.15em] text-[#d6b477]">
                    للمحاسبة والاستشارات المالية
                  </div>
                </div>
              </div>

              <p className="mt-6 max-w-sm text-sm leading-7 text-white/45">
                حلول محاسبية ومالية تساعد منشأتك على وضوح الأرقام ودعم القرار.
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
                  عن سند الركن
                </a>

                <a
                  className="block transition hover:text-white"
                  href="#sectors"
                >
                  القطاعات
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

                <div>المملكة العربية السعودية</div>
              </div>
            </div>
          </div>

          <div className="mt-14 border-t border-white/10 pt-6 text-center text-xs text-white/35">
            © {new Date().getFullYear()} سند الركن — للمحاسبة والاستشارات المالية
          </div>
        </div>
      </footer>
    </main>
  );
}