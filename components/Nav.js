import Link from "next/link";
import Image from "next/image";
export default function Nav() {
  return (
    <nav className='font-title'>
      <div className='text-2xl text-white'>
        <Link href='/'>
          <a>
            <Image src='/cover.png' alt='multy.me' width={250} height={103} />
          </a>
        </Link>
      </div>
    </nav>
  );
}
