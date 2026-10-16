'use client'

import { useState } from 'react'
import Link from 'next/link'

/* Bantuan versi Amber: ceritakan sejauh mana Anda berdua sudah melangkah, lalu
   kami sarankan satu titik mulai. Kanal resmi klien (chat, surel, telepon) belum
   ada di brief, jadi tidak ada jam layanan, alamat, atau nomor karangan di sini. */
const PERNAH = ['Belum pernah', 'Tingkat I', 'Tingkat II', 'Tingkat III']

export default function ContactSupport() {
  const [pernah, setPernah] = useState(PERNAH[0])
  const [terkirim, setTerkirim] = useState(false)

  return (
    <section id="kontak" className="relative overflow-hidden bg-night py-16 md:py-28">
      <div aria-hidden="true" className="candle absolute inset-x-0 bottom-0 h-80" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <p className="micro mb-5 text-amber">Bantuan</p>
            <h2 className="text-[2rem] leading-[1.12] md:text-[2.7rem]">Ceritakan saja yang Anda cari</h2>
            <p className="mt-5 max-w-md leading-relaxed text-smoke">
              Sebutkan sedikit soal pengalaman Anda berdua sejauh ini, dan kami sarankan satu titik
              mulai — bukan daftar belanja. Kalau menurut kami belum perlu membeli apa pun, itu
              juga yang kami sampaikan.
            </p>
            <Link
              href="/panduan"
              className="micro mt-8 inline-flex items-center justify-center rounded-full border border-amber/50 px-7 py-3.5 text-amber transition-colors duration-300 hover:bg-amber hover:text-night"
            >
              Atau ikuti kuis tiga pertanyaan
            </Link>
          </div>

          <div className="rounded-[var(--radius-soft)] border border-cream/12 bg-night-2/80 p-6 sm:p-8">
            {terkirim ? (
              <div role="status" className="py-4">
                <p className="micro text-amber">Tercatat</p>
                <p className="mt-3 text-xl font-bold text-cream">Terima kasih sudah bercerita.</p>
                <p className="mt-3 text-sm leading-relaxed text-smoke">
                  Ini purwarupa desain untuk kontes, jadi ceritanya tidak terkirim ke mana pun.
                  Sementara itu, kuis panduan bisa memberi satu titik mulai sekarang juga.
                </p>
                <div className="mt-6 flex flex-wrap gap-5">
                  <Link href="/panduan" className="micro rounded-full bg-amber px-6 py-3 text-night transition-colors hover:bg-cream">
                    Buka kuis panduan
                  </Link>
                  <button type="button" onClick={() => setTerkirim(false)} className="micro border-b border-cream/30 pb-1 text-cream hover:border-cream">
                    Tulis lagi
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setTerkirim(true)
                }}
                className="space-y-6"
              >
                <fieldset>
                  <legend className="micro mb-3 text-smoke">Sejauh ini sudah sampai mana?</legend>
                  <div className="flex flex-wrap gap-2">
                    {PERNAH.map((x) => (
                      <label
                        key={x}
                        className={`micro cursor-pointer rounded-full border px-4 py-2.5 transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-amber ${
                          pernah === x ? 'border-amber bg-amber text-night' : 'border-cream/20 text-cream hover:border-amber/60'
                        }`}
                      >
                        <input type="radio" name="pernah" value={x} checked={pernah === x} onChange={() => setPernah(x)} className="sr-only" />
                        {x}
                      </label>
                    ))}
                  </div>
                </fieldset>
                <div>
                  <label htmlFor="cerita" className="micro mb-2.5 block text-smoke">
                    Ceritakan singkat
                  </label>
                  <textarea
                    id="cerita"
                    name="cerita"
                    required
                    rows={4}
                    placeholder="Mis. kami ingin mencoba sesuatu yang dipakai berdua, tapi belum tahu mulai dari mana."
                    className="w-full resize-y rounded-2xl border border-cream/15 bg-night px-4 py-3 text-sm text-cream placeholder:text-smoke focus:border-amber focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="surel-amber" className="micro mb-2.5 block text-smoke">
                    Surel untuk balasan <span className="normal-case tracking-normal">(boleh dikosongkan)</span>
                  </label>
                  <input
                    id="surel-amber"
                    name="surel"
                    type="email"
                    autoComplete="email"
                    className="w-full rounded-full border border-cream/15 bg-night px-5 py-3 text-sm text-cream focus:border-amber focus:outline-none"
                  />
                </div>
                <button type="submit" className="micro w-full rounded-full bg-amber py-4 text-night transition-colors duration-300 hover:bg-cream">
                  Minta satu titik mulai
                </button>
                <p className="text-xs leading-relaxed text-smoke">Purwarupa desain — formulir ini tidak mengirim data.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
