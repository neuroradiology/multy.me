import Link from "next/link";
export default function Nav() {
  return (
    <nav className='font-title'>
      <div className='text-2xl text-white'>
        <Link href='/'>
          <a>
            <img src='/logo.svg' alt='multy.me' className="object-scale-down max-w-logo ml-5 mt-3"/>
          </a>
        </Link>
      </div>
    </nav>
  );
}
