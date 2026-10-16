import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import { PRODUK } from '@/lib/katalog'

export default function FeaturedProducts() {
  const unggulan = PRODUK.filter((p) => p.unggulan)

  return (
    <section id="produk" className="relative overflow-hidden bg-night-2 py-16 md:py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between md:mb-12">
          <div className="max-w-xl">
            <p className="micro mb-5 text-amber">Paling sering dipesan</p>
            <h2 className="text-[2rem] leading-[1.12] md:text-[2.7rem]">Tiga titik mulai yang paling nyaman</h2>
          </div>
          <Link href="/koleksi" className="micro shrink-0 rounded-full border border-cream/20 px-5 py-3 text-cream transition-colors hover:border-amber hover:text-amber">
            Seluruh pita · {PRODUK.length}
          </Link>
        </div>
        {/* Ponsel: tiga titik mulai dijajar mendatar (geser); kartu ketiga dulu
            melebar dua kolom dan fotonya setinggi satu layar. */}
        <ul className="no-scrollbar -mx-6 flex snap-x snap-mandatory scroll-px-6 gap-3 overflow-x-auto px-6 pb-1 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
          {unggulan.map((p) => (
            <li key={p.slug} className="w-[64%] shrink-0 snap-start md:w-auto"><ProductCard p={p} /></li>
          ))}
        </ul>
        <p className="micro mt-8 leading-[1.7] text-smoke">
          Harga dan nama barang di atas adalah contoh untuk keperluan purwarupa desain.
        </p>
      </div>
    </section>
  )
}
