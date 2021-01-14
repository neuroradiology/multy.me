import Link from "next/link";
import Image from "next/image";
export default function Nav() {
  return (
    <nav className='font-title'>
      <div className='text-2xl text-white object-scale-down  ml-5 mt-3'>
        <Link href='/'>
          <a>
            <Image src='/logo.svg' alt='multy.me' width={280} height={115.2} />
          </a>
        </Link>
      </div>
    </nav>
  );
}
