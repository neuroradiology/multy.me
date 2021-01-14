import Link from "next/link";
import Image from "next/image";
export default function Nav() {
  return (
    <nav className='font-title'>
      <div className='text-2xl text-white object-scale-down ml-5'>
        <Link href='/'>
          <a>
            <Image src='/logo.svg' alt='multy.me' width={252} height={103.7} />
          </a>
        </Link>
      </div>
    </nav>
  );
}
