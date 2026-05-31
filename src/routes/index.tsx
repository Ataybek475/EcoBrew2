import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Coffee, Egg, Leaf, Sprout, Recycle, Shield, Bug, FlaskConical,
  TrendingUp, Globe2, Users, ArrowRight, CheckCircle2, AlertTriangle,
  Wind, Droplets, Factory, Sparkles,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import enactusLogo from "../img/Enactus.PNG";
import logo from "../img/logo.png";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";
import processImg from "@/assets/process.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EcoBrew — Удобрение из кофейного жмыха и яичной скорлупы | Бишкек" },
      { name: "description", content: "EcoBrew превращает отходы кофеен и кондитерских Бишкека в 100% натуральное удобрение. Социально-предпринимательский проект Enactus Engineering College." },
      { property: "og:title", content: "EcoBrew — Циркулярная экономика для Бишкека" },
      { property: "og:description", content: "Спасаем столицу от метановой угрозы. 250+ пачек продано, 7.3 тонны органики переработано в год." },
    ],
  }),
  component: Index,
});

function Nav() {
  const links = [
    ["#problem", "Проблема"],
    ["#solution", "Решение"],
    ["#product", "Продукт"],
    ["#impact", "Эффект"],
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display text-xl">
          <img src={logo} alt="EcoBrew logo" className="size-8 rounded-full object-cover" />
          <span className="font-semibold">EcoBrew</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map(([h, t]) => (
            <a key={h} href={h} className="hover:text-foreground transition-colors">{t}</a>
          ))}
        </nav>
        {/* Кнопка 'Заказать' удалена по запросу */}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-hero">
      <div className="absolute inset-0 opacity-40">
        <img src={heroImg} alt="" width={1600} height={1200} className="size-full object-cover mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs uppercase tracking-widest">
            <img src={enactusLogo} alt="Enactus Engineering College" className="h-6" />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95]">
            Превращаем <span className="text-gradient italic">органический мусор</span> в живое удобрение
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Социально-предпринимательский проект из Бишкека. Мы спасаем столицу от метановой угрозы,
            перерабатывая отходы кофеен и кондитерских в 100% натуральное питание для растений.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-medium shadow-glow hover:scale-[1.02] transition">
              Купить EcoBrew <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border hover:bg-card transition">
              Стать партнёром
            </a>
          </div>
          <div className="flex flex-wrap gap-8 pt-6 text-sm">
            {[
              ["250+", "пачек продано"],
              ["10 000", "сом призовой фонд"],
              ["7.3 т", "органики в год"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="text-3xl font-display font-semibold text-gradient">{n}</div>
                <div className="text-muted-foreground mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5 relative hidden lg:block">
          <div className="relative rounded-3xl overflow-hidden shadow-soft border border-border/50">
            <img src={heroImg} alt="Кофейный жмых, яичная скорлупа и мята" width={800} height={1000} className="w-full h-[600px] object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-md border border-border rounded-2xl p-5 shadow-soft max-w-[240px]">
            <div className="flex items-center gap-3">
              <Recycle className="size-8 text-primary" />
              <div>
                <div className="font-semibold">Циркулярная экономика</div>
                <div className="text-xs text-muted-foreground mt-1">Отходы → Удобрение → Урожай</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const stats = [
    { icon: Factory, n: "74 га", t: "площадь свалки Бишкека — 100 футбольных полей" },
    { icon: TrendingUp, n: "12 млн т", t: "накоплено отходов, +1200 тонн ежедневно" },
    { icon: Coffee, n: "2 т / день", t: "кофейного жмыха из 600+ кофеен" },
    { icon: Egg, n: "1 т / день", t: "яичной скорлупы от одного производства" },
  ];
  const dangers = [
    { icon: Wind, title: "Метан — невидимый убийца", text: "В 80 раз сильнее CO₂ удерживает тепло. Провоцирует внутреннее тление свалки." },
    { icon: AlertTriangle, title: "10–15% смога Бишкека", text: "Горение свалки годами отравляло воздух диоксинами и токсинами." },
    { icon: Droplets, title: "Ядовитый фильтрат", text: "Дожди вымывают токсины из гниющей органики в грунтовые воды Чуйской долины." },
  ];
  return (
    <section id="problem" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <div className="text-primary text-sm uppercase tracking-widest mb-4">Проблема</div>
          <h2 className="text-4xl md:text-6xl font-semibold mb-6">
            Бишкекский полигон — <span className="text-gradient italic">бомба замедленного действия</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Органика составляет 40–60% всего мусора Бишкека. Гниющая без кислорода, она выделяет метан и формирует ядовитый фильтрат.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map(({ icon: Icon, n, t }) => (
            <div key={n} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition group">
              <Icon className="size-7 text-primary mb-4 group-hover:scale-110 transition" />
              <div className="text-3xl font-display font-semibold mb-2">{n}</div>
              <div className="text-sm text-muted-foreground">{t}</div>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {dangers.map(({ icon: Icon, title, text }) => (
            <div key={title} className="p-6 rounded-2xl border border-destructive/30 bg-destructive/5">
              <Icon className="size-6 text-destructive mb-4" />
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solution() {
  const steps = [
    { icon: Coffee, t: "Сбор сырья", d: "Свежий жмых из кофеен («Банда Панды») и скорлупа от КД «Куликовский», фабрики «АТА», ОсОО «Ширин ПТК»." },
    { icon: FlaskConical, t: "Обработка и сушка", d: "Тщательная очистка, бережная сушка и измельчение в лаборатории." },
    { icon: Sprout, t: "Эко-продукт", d: "Смешивание с торфом в пропорции 2:1 — готовый сухой концентрат длительного действия." },
  ];
  return (
    <section id="solution" className="relative py-32 px-6 border-t border-border/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <div className="text-primary text-sm uppercase tracking-widest mb-4">Решение</div>
            <h2 className="text-4xl md:text-6xl font-semibold mb-6">
              Цикл <span className="text-gradient italic">циркулярной экономики</span> EcoBrew
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Мы перехватываем отходы до их попадания на свалку и превращаем их в ценный продукт. Три простых шага — и мусор становится жизнью.
            </p>
            <div className="grid grid-cols-3 gap-3 max-w-md">
              <div className="text-center p-4 rounded-xl bg-card border border-border">
                <div className="text-2xl font-display text-primary">70%</div>
                <div className="text-xs text-muted-foreground mt-1">пьют кофе</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-card border border-border">
                <div className="text-2xl font-display text-primary">57%</div>
                <div className="text-xs text-muted-foreground mt-1">поддержат</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-card border border-border">
                <div className="text-2xl font-display text-primary">73%</div>
                <div className="text-xs text-muted-foreground mt-1">купят</div>
              </div>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden border border-border shadow-soft">
            <img src={processImg} alt="Сбор и переработка кофейного жмыха" width={1200} height={800} loading="lazy" className="w-full h-[460px] object-cover" />
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map(({ icon: Icon, t, d }, i) => (
            <div key={t} className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition">
              <div className="absolute top-6 right-6 text-6xl font-display text-primary/15">0{i+1}</div>
              <Icon className="size-10 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-3">{t}</h3>
              <p className="text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Product() {
  const nutrients = [
    { l: "Азот (N)", v: "1350 мг", d: "Рост листьев и фотосинтез" },
    { l: "Калий (K)", v: "400 мг", d: "Иммунитет и устойчивость" },
    { l: "Фосфор (P)", v: "200 мг", d: "Корни и цветение" },
    { l: "Кальций (Ca)", v: "12 500 мг", d: "Прочность клеточных стенок" },
    { l: "Магний (Mg)", v: "135 мг", d: "Хлорофилл" },
    { l: "Железо (Fe)", v: "5 мг", d: "Против пожелтения листьев" },
  ];
  return (
    <section id="product" className="relative py-32 px-6 border-t border-border/40">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="text-primary text-sm uppercase tracking-widest mb-4">Состав</div>
          <h2 className="text-4xl md:text-6xl font-semibold mb-6">
            Натуральная формула <span className="text-gradient italic">идеального роста</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Динамичный pH 6.8–7.5 — кофе (слабокислый) и скорлупа (щелочная) нейтрализуют друг друга, создавая идеальную среду для усвоения питания.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 mb-20">
          {nutrients.map(({ l, v, d }) => (
            <div key={l} className="p-6 rounded-2xl bg-card border border-border flex items-baseline justify-between gap-6 hover:bg-secondary transition">
              <div>
                <div className="font-semibold">{l}</div>
                <div className="text-sm text-muted-foreground mt-1">{d}</div>
              </div>
              <div className="text-2xl font-display text-primary whitespace-nowrap">{v}</div>
            </div>
          ))}
        </div>

        {/* Defense */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          <div className="p-8 rounded-3xl bg-leaf-gradient text-primary-foreground relative overflow-hidden">
            <Bug className="size-10 mb-6" />
            <h3 className="text-2xl font-semibold mb-3">Химический барьер</h3>
            <p className="opacity-90">
              В первые 3–4 дня резкий аромат кофе и кофеин отпугивают муравьёв, тлю, комаров и мошек.
              Когда запах слабеет — состав <span className="font-semibold">100% безопасен для пчёл и шмелей</span>.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-card border border-border">
            <Shield className="size-10 text-primary mb-6" />
            <h3 className="text-2xl font-semibold mb-3">Физический барьер</h3>
            <p className="text-muted-foreground">
              Острые края измельчённой яичной скорлупы создают непреодолимую преграду для слизней
              и улиток, защищая корни и стебли ваших растений.
            </p>
          </div>
        </div>

        {/* Before / After */}
        <div className="rounded-3xl overflow-hidden border border-border bg-card">
          <div className="p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-semibold mb-3">До и после EcoBrew</h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Мягкое пролонгированное действие — питает почву от 3 до 6 месяцев без риска сжечь корни.
            </p>
          </div>
          <BeforeAfter />
        </div>
      </div>
    </section>
  );
}

function BeforeAfter() {
  const [pos, setPos] = useState(50);
  return (
    <div className="relative aspect-[16/9] select-none overflow-hidden">
      <img src={afterImg} alt="После применения EcoBrew" width={1600} height={900} loading="lazy" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={beforeImg} alt="До применения EcoBrew" width={1600} height={900} loading="lazy" className="size-full object-cover" />
      </div>
      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/70 backdrop-blur text-xs uppercase tracking-widest">До</div>
      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs uppercase tracking-widest">После</div>
      <div className="absolute inset-y-0" style={{ left: `${pos}%` }}>
        <div className="absolute inset-y-0 -translate-x-1/2 w-0.5 bg-primary" />
        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 size-10 rounded-full bg-primary grid place-items-center shadow-glow">
          <ArrowRight className="size-4 text-primary-foreground -rotate-180" />
          <ArrowRight className="size-4 text-primary-foreground absolute" />
        </div>
      </div>
      <input
        type="range" min={0} max={100} value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
        aria-label="Слайдер до и после"
      />
    </div>
  );
}

function Impact() {
  const goals = [
    { n: "7.3 т", t: "органики спасено в год", icon: Recycle },
    { n: "547.5 м³", t: "метана не выделено", icon: Wind },
    { n: "150 000 км", t: "пробега авто эквивалент", icon: Globe2 },
  ];
  const plans = [
    "Расширение сети партнёрств с кофейнями и кондитерскими Бишкека",
    "Экспансия в другие города и регионы Кыргызстана",
    "B2B-поставки для ландшафтных дизайнеров и МП «Бишкекзеленхоз»",
  ];
  return (
    <section id="impact" className="relative py-32 px-6 border-t border-border/40">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="text-primary text-sm uppercase tracking-widest mb-4">Эко-эффект</div>
          <h2 className="text-4xl md:text-6xl font-semibold mb-6">
            Забирая всего <span className="text-gradient italic">20 кг жмыха в день</span>, мы меняем климат города
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-20">
          {goals.map(({ n, t, icon: Icon }) => (
            <div key={t} className="p-8 rounded-3xl border border-border bg-card hover:border-primary/50 transition">
              <Icon className="size-8 text-primary mb-6" />
              <div className="text-5xl font-display font-semibold text-gradient mb-2">{n}</div>
              <div className="text-muted-foreground">{t}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">План масштабирования</h3>
            <ol className="space-y-4">
              {plans.map((p, i) => (
                <li key={p} className="flex gap-4 p-5 rounded-2xl bg-card border border-border">
                  <span className="size-8 shrink-0 rounded-full bg-primary text-primary-foreground grid place-items-center font-display font-semibold">{i+1}</span>
                  <span className="text-muted-foreground pt-1">{p}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Цели устойчивого развития ООН</h3>
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-leaf-gradient text-primary-foreground">
                <div className="text-sm uppercase tracking-widest opacity-80">ЦУР 12</div>
                <div className="text-xl font-semibold mt-1">Ответственное потребление и производство</div>
              </div>
              <div className="p-6 rounded-2xl border border-border bg-card">
                <div className="text-sm uppercase tracking-widest text-primary">ЦУР 13</div>
                <div className="text-xl font-semibold mt-1">Борьба с изменением климата</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Usage() {
  const cats = [
    { t: "Овощи", d: "Томаты, перцы, баклажаны, огурцы, кабачки, морковь, редис" },
    { t: "Цветы и кустарники", d: "Розы, пионы, тюльпаны, лилии, сирень, барбарис" },
    { t: "Комнатные", d: "Фикусы, замиокулькас, денежное дерево, герань" },
    { t: "Городские деревья", d: "Павлония, акация, карагач, джида" },
  ];
  return (
    <section className="relative py-32 px-6 border-t border-border/40">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <div className="text-primary text-sm uppercase tracking-widest mb-4">Применение</div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">Кому идеально подходит EcoBrew</h2>
          <p className="text-muted-foreground mb-8">
            Состав снижает кислотность почвы. Не подходит только «кислолюбам»: гортензия, черника, азалия.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {cats.map(({ t, d }) => (
              <div key={t} className="p-5 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-2 font-semibold mb-1">
                  <CheckCircle2 className="size-4 text-primary" /> {t}
                </div>
                <div className="text-sm text-muted-foreground">{d}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="p-8 rounded-3xl bg-card border border-border">
            <div className="text-primary text-sm uppercase tracking-widest mb-2">Норма расхода</div>
            <div className="text-5xl font-display font-semibold mb-3">300 г <span className="text-lg text-muted-foreground font-sans">/ м²</span></div>
            <p className="text-muted-foreground">Обычная подкормка для здоровой почвы.</p>
          </div>
          <div className="p-8 rounded-3xl bg-leaf-gradient text-primary-foreground">
            <div className="text-sm uppercase tracking-widest opacity-80 mb-2">Для истощённой / кислой</div>
            <div className="text-5xl font-display font-semibold mb-3">до 500 г <span className="text-lg opacity-80 font-sans">/ м²</span></div>
            <p className="opacity-90">Для восстановления структуры грунта.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Team() {
// Секция "Команда" и все связанные с ней данные удалены по запросу
}

function Contact() {
// Секция "Связаться" и все связанные с ней элементы удалены по запросу
}

function Footer() {
  return (
    <footer className="border-t border-border/40 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <img src={logo} alt="EcoBrew logo" className="size-7 rounded-full object-cover" />
          <span className="font-display text-foreground">EcoBrew</span>
          <span className="opacity-60">— Enactus Engineering College, Бишкек</span>
        </div>
        <div>© 2026 EcoBrew. Все права защищены.</div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <Product />
      <Impact />
      <Usage />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
