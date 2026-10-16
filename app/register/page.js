import AkunForm from '@/components/AkunForm'
import { meta } from '@/lib/seo'

export const metadata = meta({
  title: 'Daftar',
  description:
    'Buat akun Positive Crave yang mengingat tingkat yang pernah Anda coba. Nama panggilan pun boleh.',
  path: '/register',
  index: false,
})

export default function Page() {
  return <AkunForm mode="daftar" />
}
