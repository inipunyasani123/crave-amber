import { Package, ShieldCheck, Gauge, MessageCircle } from 'lucide-react'

const jaminan = [
  {
    icon: Gauge,
    title: 'Bertingkat, bukan sekaligus',
    desc: 'Katalog disusun dari yang paling lembut ke yang paling kuat, supaya Anda bisa berhenti di tingkat yang terasa pas.',
  },
  {
    icon: Package,
    title: 'Kemasan polos',
    desc: 'Kotak cokelat tanpa cetakan. Nama merek tidak muncul di resi maupun mutasi rekening.',
  },
  {
    icon: ShieldCheck,
    title: 'Material medical-grade',
    desc: 'Silikon tidak berpori dan bebas BPA — tidak menyerap, bisa dibersihkan menyeluruh.',
  },
  {
    icon: MessageCircle,
    title: 'Saran tanpa dorongan',
    desc: 'Kalau menurut kami Anda belum perlu membeli, itu yang akan kami sampaikan.',
  },
]

export default function USPSection() {
  return (
    <section id="jaminan" className="relative overflow-hidden bg-night-2 py-16 md:py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-10 max-w-2xl md:mb-14">
          <p className="micro mb-5 text-amber">Jaminan</p>
          <h2 className="text-[2rem] leading-[1.12] md:text-[2.7rem]">
            Empat hal yang tidak berubah, di tingkat mana pun Anda mulai
          </h2>
        </div>

        <dl className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {jaminan.map((j) => (
            <div
              key={j.title}
              className="warm-edge rounded-[var(--radius-soft)] bg-night p-4 sm:p-7"
            >
              <j.icon className="mb-4 h-5 w-5 text-amber sm:mb-6 sm:h-6 sm:w-6" strokeWidth={1.75} aria-hidden="true" />
              <dt className="text-sm font-bold text-cream sm:text-base">{j.title}</dt>
              <dd className="mt-2 text-[0.8125rem] leading-relaxed text-smoke sm:mt-3 sm:text-sm">{j.desc}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
