import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  return (
    <div className='flex p-10 bg-gray-500 justify-evenly'>
      <div className='flex  flex-col bg-gray-400 '>
        <Image
          src='/sharebook.png'
          width={133 * 0.8}
          height={132 * 0.8}
          alt='bookmark'
        />
        <p>
          Share you favorite courses online, Your top 10 best restaurants, The
          most important articles of the day, All with just{" "}
          <span className='font-bold'>one link</span>.
        </p>
      </div>
      <div>
        <Image
          src='/screenshot.jpg'
          width={1139 * 0.5}
          height={1180 * 0.5}
          alt='screenshot of the list'
        />
      </div>
    </div>
  );
}
