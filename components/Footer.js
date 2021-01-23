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
        <a
          href='https://www.producthunt.com/posts/multy?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-multy'
          target='_blank'>
          <img
            src='https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=281938&theme=dark'
            alt='Multy - Generate a short URL 🔗 to share a list of websites | Product Hunt'
            style={{width: '250px', height: '54px'}}
            width='250'
            height='54'
          />
        </a>
      </div>
    </footer>
  );
}
