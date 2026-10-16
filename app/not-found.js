import Link from 'next/link'

export const metadata = {
  title: { absolute: 'Halaman tidak ditemukan — Positive Crave' },
  robots: { index: false, follow: true },
}

/* 404 versi Amber: nyalanya tidak sampai ke halaman ini. */
export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-night pt-32 pb-24 md:pt-40 md:pb-32">
      <div aria-hidden="true" className="candle absolute inset-x-0 top-0 h-80" />
      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <p className="micro mb-6 text-amber">404</p>
        <h1 className="text-[2.4rem] leading-[1.08] md:text-[3.4rem]">Nyalanya tidak sampai ke halaman ini.</h1>
        <p className="mt-5 max-w-lg leading-relaxed text-smoke">
          Alamatnya mungkin salah ketik, atau halamannya sudah dipindah. Mulai lagi dari tingkat yang paling lembut.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link href="/panduan" className="micro inline-flex items-center justify-center rounded-full bg-amber px-7 py-4 text-night transition-colors hover:bg-cream">
            Mulai dari Panduan
          </Link>
          <Link href="/koleksi" className="micro inline-flex items-center justify-center rounded-full border border-cream/20 px-7 py-4 text-cream transition-colors hover:border-amber hover:text-amber">
            Lihat Koleksi
          </Link>
        </div>
      </div>
    </section>
  )
}
