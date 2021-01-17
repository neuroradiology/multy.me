import Link from "next/link";
import Image from "next/image";
export default function Nav() {
  return (
    <nav className='font-title flex flex-row flex-wrap mx-5 '>
      
        <Link href='/' >
          <a>
            <Image className="ml-5" src='/logo.svg' alt='multy.me' width={252} height={103.7} />
          </a>
        </Link>
        
      
    </nav>
  );
}
