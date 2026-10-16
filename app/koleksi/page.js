import Link from 'next/link'
import Koleksi from '@/components/Koleksi'
import { PRODUK } from '@/lib/katalog'
import { meta, SITE } from '@/lib/seo'

export const metadata = meta({
  title: 'Koleksi menurut Tingkat',
  description:
    'Delapan barang Positive Crave disusun dari yang paling lembut sampai paling kuat. Geser nyalanya, lihat apa yang cocok untuk tingkat Anda sekarang.',
  path: '/koleksi',
})

const itemList = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Koleksi Positive Crave menurut tingkat intensitas',
  itemListElement: PRODUK.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE}/produk/${p.slug}`, name: p.nama })),
}

export default function KoleksiPage() {
  return (
    <section className="relative overflow-hidden bg-night pt-28 pb-20 md:pt-36 md:pb-28">
      <div aria-hidden="true" className="candle absolute inset-x-0 top-0 h-[32rem]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="micro mb-5 text-amber">Koleksi · {PRODUK.length} barang</p>
          <h1 className="text-[2.4rem] leading-[1.06] md:text-[3.3rem]">
            Satu pita, dari yang paling pelan
            <br className="hidden sm:block" /> <span className="text-amber">sampai yang paling menyala.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-smoke">
            Geser sampai tingkat yang terasa nyaman. Barang di atasnya tetap terlihat, hanya diredupkan —
            supaya Anda tahu jalan di depan, tanpa merasa harus ke sana sekarang. Belum yakin?{' '}
            <Link href="/panduan" className="text-cream underline decoration-amber underline-offset-4 hover:text-amber">
              Coba kuis tiga pertanyaan
            </Link>
            .
          </p>
        </div>

        <div className="mt-14">
          <Koleksi />
        </div>

        <p className="micro mt-14 text-center leading-[1.7] text-smoke">
          Nama, harga, dan spesifikasi adalah contoh untuk keperluan purwarupa desain.
        </p>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
    </section>
  )
}
