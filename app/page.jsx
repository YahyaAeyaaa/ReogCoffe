import Image from "next/image";

const menu = [
  {
    name: "Supresso",
    desc: "Signature espresso blend hasil sangrai mandiri dengan karakter rasa yang kuat dan mantap.",
    price: "Rp 15k",
    tag: "Signature",
  },
  {
    name: "Es Kop",
    desc: "Es kopi susu kekinian yang creamy, menggunakan biji kopi fresh-roasted pilihan.",
    price: "Rp 15k",
    tag: "Signature",
  },
  {
    name: "Tropicalberry Mocktail",
    desc: "Paduan segar buah beri dengan sentuhan tropis yang memanjakan lidah.",
    price: "Rp 18k",
    tag: "Mocktail",
  },
  {
    name: "Blackpeach Mocktail",
    desc: "Kesegaran buah persik berpadu dengan kopi hitam hasil panggangan sendiri.",
    price: "Rp 18k",
    tag: "Mocktail",
  },
  {
    name: "Strawberry Bomb",
    desc: "Minuman soda rasa stroberi yang segar dan memberikan sensasi ledakan rasa buah.",
    price: "Rp 18k",
    tag: "Flavoured Soda",
  },
  {
    name: "Es Kop Caramelo",
    desc: "Es kopi susu dengan sentuhan sirup karamel manis yang lembut dan aromatik.",
    price: "Rp 18k",
    tag: "Signature",
  },
  {
    name: "Summertimes",
    desc: "Minuman berbasis kopi atau teh yang menyegarkan, cocok untuk menemani siang harimu.",
    price: "Rp 18k",
    tag: "Coffee/Tea Based",
  },
  {
    name: "Passion Fruit Mocktail",
    desc: "Mocktail buah markisa yang asam manis segar untuk membangkitkan semangat.",
    price: "Rp 18k",
    tag: "Mocktail",
  },
  {
    name: "Mix Tropis",
    desc: "Kombinasi soda dengan aneka rasa buah tropis yang super segar.",
    price: "Rp 18k",
    tag: "Flavoured Soda",
  },
];

const testimonials = [
  {
    name: "Nadia R.",
    role: "Frequent Customer",
    quote:
      "Kopinya konsisten banget. Rasanya nggak kalah sama coffee shop yang lebih mahal.",
  },
  {
    name: "Dimas A.",
    role: "Work From Cafe",
    quote:
      "Tempatnya nyaman buat kerja. Susunya creamy dan cold brew-nya bikin balik lagi.",
  },
  {
    name: "Siti M.",
    role: "Food Blogger",
    quote:
      "Profil rasa yang jelas. Espresso signature jadi favorit aku kalau lagi pengen yang bold.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground dark:bg-black dark:text-white">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur dark:border-border dark:bg-black/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-card">
              <Image
                src="/images/images.png"
                alt="Logo Reog Coffe"
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="leading-tight">
              <p className="text-base font-bold tracking-tight">
                REOG COFFE
              </p>
              <p className="text-xs text-muted-foreground">
                Est. 2015
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#menu"
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors dark:text-white dark:hover:text-accent"
            >
              Menu
            </a>
            <a
              href="#testimonials"
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors dark:text-white dark:hover:text-accent"
            >
              Testimoni
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors dark:text-white dark:hover:text-accent"
            >
              Kontak
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-lg bg-primary px-5 py-2 text-sm font-bold text-primary-foreground transition hover:opacity-90 md:inline-flex"
            >
              Hubungi Kami
            </a>
            <a
              href="#menu"
              className="inline-flex items-center rounded-lg border-2 border-primary bg-transparent px-5 py-2 text-sm font-bold text-primary transition hover:bg-primary hover:text-primary-foreground dark:text-accent dark:border-accent dark:hover:bg-accent dark:hover:text-black"
            >
              Menu
            </a>
          </div>
        </div>
      </header>

      <main id="content">
        {/* HERO */}
        <section className="relative overflow-hidden bg-background dark:bg-black">
          <div className="absolute inset-0 dark:opacity-40">
            <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-lg border-2 border-primary/30 bg-primary/10 px-4 py-2 text-sm font-bold text-primary dark:bg-accent/10 dark:text-accent">
                <span className="inline-flex h-2 w-2 rounded-full bg-primary dark:bg-accent" />
                Dipanggang Setiap Hari
              </div>

              <h1 className="text-balance text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
                Kopi Premium
                <br />
                <span className="text-primary dark:text-accent">untuk Company Profile</span>
              </h1>

              <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground dark:text-gray-300">
                Reog Coffe menghadirkan kopi berkualitas tinggi sejak 2015. Setiap biji dipilih dengan cermat dan disangrai sendiri untuk menjaga konsistensi rasa yang sempurna untuk bisnis Anda.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#menu"
                  className="inline-flex justify-center rounded-lg bg-primary px-8 py-4 text-base font-bold text-primary-foreground transition hover:shadow-lg hover:scale-105 dark:bg-accent dark:text-black"
                >
                  Jelajahi Menu
                </a>
                <a
                  href="#contact"
                  className="inline-flex justify-center rounded-lg border-2 border-primary bg-transparent px-8 py-4 text-base font-bold text-primary transition hover:bg-primary hover:text-primary-foreground dark:text-accent dark:border-accent dark:hover:bg-accent dark:hover:text-black"
                >
                  Hubungi Kami
                </a>
              </div>

              <div className="grid gap-6 sm:grid-cols-3 pt-8">
                <div className="rounded-xl border-2 border-primary/20 bg-card p-6 dark:bg-black/50">
                  <p className="text-4xl font-black text-primary dark:text-accent">10+</p>
                  <p className="mt-2 text-sm font-bold text-muted-foreground">
                    Varian Biji Kopi
                  </p>
                </div>
                <div className="rounded-xl border-2 border-primary/20 bg-card p-6 dark:bg-black/50">
                  <p className="text-4xl font-black text-primary dark:text-accent">16 Jam</p>
                  <p className="mt-2 text-sm font-bold text-muted-foreground">
                    Proses Cold Brew
                  </p>
                </div>
                <div className="rounded-xl border-2 border-primary/20 bg-card p-6 dark:bg-black/50">
                  <p className="text-4xl font-black text-primary dark:text-accent">Daily</p>
                  <p className="mt-2 text-sm font-bold text-muted-foreground">
                    Proses Roasting
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="mb-12 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
              Mengapa Reog Coffe?
            </h2>
            <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground dark:text-gray-300">
              Dari pemilihan biji hingga seduhan terakhir, kami fokus pada kualitas rasa dan pengalaman yang sempurna untuk setiap klien korporat.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Biji Pilihan",
                desc: "Dipilih dengan cermat dari perkebunan terbaik untuk profil rasa yang konsisten.",
              },
              {
                title: "Roasting Harian",
                desc: "Diproses setiap hari untuk menjaga kesegaran dan kualitas rasa optimal.",
              },
              {
                title: "Menu Signature",
                desc: "Kreasi khusus yang konsisten batch ke batch untuk kepuasan klien.",
              },
              {
                title: "Ruang Premium",
                desc: "Tempat nyaman untuk meeting, brainstorming, atau event korporat.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="group rounded-xl border-2 border-primary/20 bg-card p-6 transition hover:border-primary hover:shadow-lg dark:bg-black/50 dark:border-accent/20 dark:hover:border-accent"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 dark:bg-accent/10 dark:group-hover:bg-accent/20">
                  <div className="h-6 w-6 rounded-full bg-primary dark:bg-accent" />
                </div>
                <p className="font-black text-lg mb-2">{f.title}</p>
                <p className="text-sm leading-relaxed text-muted-foreground dark:text-gray-300">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* MENU */}
        <section
          id="menu"
          className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24"
        >
          <div className="mb-12 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
              Menu Signature Kami
            </h2>
            <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground dark:text-gray-300">
              Koleksi kopi pilihan yang dapat disesuaikan dengan kebutuhan corporate event atau bulk order Anda.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {menu.map((item) => (
              <article
                key={item.name}
                className="group relative overflow-hidden rounded-xl border-2 border-primary/20 bg-card p-7 transition hover:border-primary hover:shadow-lg dark:bg-black/50 dark:border-accent/20 dark:hover:border-accent"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <h3 className="text-xl font-black">{item.name}</h3>
                      <span className="rounded-lg bg-primary/10 px-3 py-1 text-xs font-bold text-primary dark:bg-accent/10 dark:text-accent">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground dark:text-gray-300">
                      {item.desc}
                    </p>
                  </div>
                  <p className="shrink-0 text-2xl font-black text-primary dark:text-accent">
                    {item.price}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-muted-foreground dark:text-gray-400">
                    ✓ Tersedia
                  </span>
                  <span className="text-xs font-bold text-muted-foreground dark:text-gray-400">
                    ✓ Roasted Harian
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section
          id="testimonials"
          className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24"
        >
          <div className="mb-12 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
              Apa Kata Mereka
            </h2>
            <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground dark:text-gray-300">
              Testimoni dari pelanggan corporate yang telah merasakan kualitas kopi Reog Coffe.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-xl border-2 border-primary/20 bg-card p-6 transition hover:border-primary hover:shadow-lg dark:bg-black/50 dark:border-accent/20 dark:hover:border-accent"
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <figcaption className="font-black text-lg">
                      {t.name}
                    </figcaption>
                    <p className="text-sm font-semibold text-muted-foreground dark:text-gray-400">
                      {t.role}
                    </p>
                  </div>
                  <div className="text-4xl font-black text-primary/30 dark:text-accent/30">
                    "
                  </div>
                </div>
                <blockquote className="text-base leading-relaxed text-foreground dark:text-gray-200">
                  {t.quote}
                </blockquote>
              </figure>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24"
        >
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
                Hubungi Kami Sekarang
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground dark:text-gray-300">
                Tertarik dengan layanan corporate coffee kami? Hubungi tim Reog Coffe untuk informasi lebih lanjut tentang bulk order, event catering, atau corporate gifting.
              </p>

              <div className="space-y-4">
                <div className="rounded-xl border-2 border-primary/20 bg-card p-6 dark:bg-black/50 dark:border-accent/20">
                  <p className="text-xs font-bold text-muted-foreground dark:text-gray-400 mb-2">
                    Telephone
                  </p>
                  <p className="text-lg font-black text-foreground dark:text-white">
                    <a
                      className="text-primary hover:underline dark:text-accent"
                      href="mailto:hello@coffearoastery.com"
                    >
                      085784994195
                    </a>
                  </p>
                </div>
                <div className="rounded-xl border-2 border-primary/20 bg-card p-6 dark:bg-black/50 dark:border-accent/20">
                  <p className="text-xs font-bold text-muted-foreground dark:text-gray-400 mb-2">
                    JAM OPERASIONAL
                  </p>
                  <p className="text-lg font-black text-foreground dark:text-white">
                    Setiap Hari 08:00 - 23:00
                  </p>
                </div>
                <div className="rounded-xl border-2 border-primary/20 bg-card p-6 dark:bg-black/50 dark:border-accent/20">
                  <p className="text-xs font-bold text-muted-foreground dark:text-gray-400 mb-2">
                    LOKASI
                  </p>
                  <p className="text-lg font-black text-foreground dark:text-white mb-2">
                  Jl. Menur, Sultanagung, Nologaten, Kec. Ponorogo, Kabupaten Ponorogo, Jawa Timur
                  </p>
                  <p className="text-sm text-muted-foreground dark:text-gray-300">
                    Bisa request lokasi meeting atau custom event. Kami siap membantu.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border-2 border-primary bg-card p-8 dark:bg-black/50 dark:border-accent">
              <div className="mb-6">
                <p className="text-sm font-bold text-muted-foreground dark:text-gray-400 mb-1">LAYANAN UNGGULAN</p>
                <h3 className="text-2xl font-black text-foreground dark:text-white">Kerja Sama Corporate</h3>
              </div>

              <div className="space-y-4">
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-4 dark:bg-accent/5 dark:border-accent/20">
                  <p className="font-bold text-foreground dark:text-white">Bulk Order Kopi</p>
                  <p className="text-sm text-muted-foreground dark:text-gray-300">
                    Paket khusus untuk perusahaan dengan harga grosir
                  </p>
                </div>

                <div className="rounded-lg border border-primary/20 bg-primary/5 p-4 dark:bg-accent/5 dark:border-accent/20">
                  <p className="font-bold text-foreground dark:text-white">Event Catering</p>
                  <p className="text-sm text-muted-foreground dark:text-gray-300">
                    Tasting, meeting, atau gathering di outlet kami
                  </p>
                </div>

                <div className="rounded-lg border border-primary/20 bg-primary/5 p-4 dark:bg-accent/5 dark:border-accent/20">
                  <p className="font-bold text-foreground dark:text-white">Corporate Gifting</p>
                  <p className="text-sm text-muted-foreground dark:text-gray-300">
                    Paket hadiah kopi premium untuk klien & partner
                  </p>
                </div>
              </div>

              <a
                href="mailto:hello@coffearoastery.com"
                className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-4 text-base font-bold text-primary-foreground transition hover:shadow-lg hover:scale-105 dark:bg-accent dark:text-black"
              >
                Minta Penawaran
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background dark:border-border dark:bg-black">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-card">
                  <Image
                    src="/images/images.png"
                    alt="Logo Reog Coffe"
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-base font-black">REOG COFFE</p>
                  <p className="text-xs font-semibold text-muted-foreground dark:text-gray-400">
                    Est. 2015
                  </p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground dark:text-gray-300">
                Kopi premium dengan standar kualitas internasional untuk kebutuhan corporate Anda.
              </p>
            </div>

            <div className="space-y-4">
              <p className="font-black text-lg">MENU</p>
              <div className="flex flex-col gap-3">
                <a className="w-fit text-sm font-bold text-foreground hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-accent" href="#menu">
                  Jelajahi Menu
                </a>
                <a className="w-fit text-sm font-bold text-foreground hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-accent" href="#testimonials">
                  Testimoni
                </a>
                <a className="w-fit text-sm font-bold text-foreground hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-accent" href="#contact">
                  Hubungi Kami
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <p className="font-black text-lg">HUBUNGI KAMI</p>
              <div className="space-y-3">
                <p className="text-sm font-bold text-foreground dark:text-white">
                  Instagram:{" "}
                  <a
                    className="text-primary hover:underline dark:text-accent"
                    href="https://instagram.com/reogcoffe2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @reogcoffe2
                  </a>
                </p>
                <p className="text-sm font-bold text-foreground dark:text-white">
                  Telepon:{" "}
                  <span className="text-muted-foreground dark:text-gray-300">
                  085784994195
                  </span>
                </p>
                <div className="text-sm font-bold text-foreground dark:text-white">
                  <p>Alamat</p>
                  <p className="mt-1 text-sm font-semibold text-muted-foreground dark:text-gray-300">
                    4FMG+F4Q, Jl. Menur, Sultanagung, Nologaten, Kec. Ponorogo,
                    Kabupaten Ponorogo, Jawa Timur 63419, Indonesia
                  </p>
                </div>
              </div>
              <p className="text-xs font-bold text-muted-foreground dark:text-gray-400">
                © {new Date().getFullYear()} Reog Coffe. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
