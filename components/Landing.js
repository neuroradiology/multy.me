import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  return (
    <div className='flex flex-col flex-wrap max-w-6xl m-auto mt-10'>
      <div className='flex flex-wrap mb-10 justify-evenly'>
        <div className='flex flex-col mt-10 mb-10 m-auto'>
          <div className='mx-auto'>
            <Image
              src='/sharebook.png'
              width={133 * 0.8}
              height={132 * 0.8}
              alt='bookmark'
              className='text-center'
              layout='intrinsic'
            />
          </div>
          <div className='mx-auto'>
            <h3 className='text-2xl my-7 text-center sm:text-left'>One link can lead to 100 others</h3>
            <p className='w-64 leading-8 text-center sm:text-left m-auto sm:m-0'>
              Share you favorite courses online, Your top 10 best restaurants,
              The most important articles of the day, All with just{" "}
              <span className='font-bold'>one link</span>.
            </p>
          </div>
        </div>
        <div className='shadow-md m-auto'>
          <Image
            src='/screenshot.jpg'
            width={1139 * 0.4}
            height={1180 * 0.4}
            alt='screenshot of the list'
            layout='intrinsic'
          />
        </div>
      </div>
      <div className='flex flex-wrap justify-evenly'>
        <div className='shadow-md m-auto px-12 py-2  border-btn-100 border-2 rounded-2xl '>
          <p className='text-2xl'>
            multy.me/<span className='text-btn-200'>shorts</span>
          </p>
        </div>
        <div className='flex flex-col mt-10 mb-10 m-auto order-first md:order-last'>
          <div className='mx-auto'>
            <Image
              src='/phone.png'
              width={126 * 0.8}
              height={160 * 0.8}
              alt='bookmark'
              className='text-center'
              layout='intrinsic'
            />
          </div>
          <div className='mx-auto'>
            <h3 className='text-2xl my-7 text-center sm:text-left'>A short link that fits everywhere</h3>
            <p className='w-80 leading-8 text-center sm:text-left m-auto sm:m-0'>
              You want to share 30 links in a single Tweet? Multy will give you
              a short link that you can integrate anywhere, even on a paper
              printout:
              <span className='font-bold'> it's easy to remember!</span>.
            </p>
          </div>
        </div>
      </div>
      <hr className="w-5/12 m-auto mt-10 sm:mt-0"/>
      <div className='mx-auto'>
        <h3 className='text-2xl my-7 text-center sm:text-left'>Want to contact us? Don't hesitate!</h3>
        <p className='w-80 leading-8 text-center sm:text-left m-auto sm:m-0'>
          Do you have a question about Multy? A cool feature you'd like us to
          integrate? A bug to report?
        </p>
        <Link href='/contact'>
          <a>Contact us</a>
        </Link>
      </div>
    </div>
  );
}
