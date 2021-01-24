import Image from "next/image";

export default function Footer() {
  return (
    <footer className='flex flex-wrap m-3 justify-around'>
      <div className='m-auto'>
        <a href='https://twitter.com/michael_webdev'>
          Created by Michael Breyton
        </a>
      </div>
      <div className='flex-grow text-center m-auto'>
        <p>© Multy.me</p>
      </div>
      <div className=' object-contain object-right-bottom mr-0 order-last'>
        
      </div>
    </footer>
  );
}
