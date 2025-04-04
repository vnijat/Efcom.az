import Image from 'next/image';
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
       <Image
       src={'/images/logo.png'}
       alt="Logo"
       width={100}
       height={50}
       className="h-15 w-auto"
      />
    </Link>
  )
}
