import Link from "next/link";
import Image from "next/image";
export default function Nav() {
  return (
    <nav className='font-title flex flex-row flex-wrap mx-5 content-center '>
      <div className='flex-grow'>
        <Link href='/'>
          <a>
            <Image
              className='ml-5'
              src='/logo.svg'
              alt='multy.me'
              width={252}
              height={103.7}></Image>
          </a>
        </Link>
      </div>
      <div
        id='menu'
        className='uppercase justify-self-end sm:my-auto m-auto sm:m-0  hover:text-blue-600'>
        <Link href='/blog'>
          <a className='my-auto'>Blog</a>
        </Link>
      </div>
    </nav>
  );
}
