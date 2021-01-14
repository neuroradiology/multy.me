import Image from "next/image"

export default function Footer() {
  return (
    <footer className='flex flex-wrap m-3 justify-around'>
      <div className="m-auto">
        <a href='https://shreyasdeshpande.com/'>
          Designed by Shreyas Deshpande
        </a>
      </div>
      <div  className='flex-grow text-center m-auto'>
        <p>© Multy.me</p>
      </div>
      <div className='max-w-xxs object-contain object-right-bottom mr-0 order-last'>
        <a className='' href='https://ko-fi.com/Y8Y41LNMX'>
          <Image src='/kofi2.png' alt="buy me a coffee" width={160} height={40.3} />
        </a>
      </div>
    </footer>
  );
}
