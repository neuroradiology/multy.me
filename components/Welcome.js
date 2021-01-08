export default function Welcome() {
    return (
      <div className='bg-indigo-500 mx-auto lg:rounded md:px-16 md:py-8  py-4 px-8 text-2xl md:text-4xl text-white max-w-6xl'>
        <div className='flex'>
          <div className='max-w-md '>
            <h2 className='font-main'>
              Lorem ipsum dolor sit amet
              <span className='text-highlight'> adipiscing elit.</span>
            </h2>
            <p className='mt-8 text-base md:text-xl font-main'>
              Nunc mattis erat dolor, nec feugiat enim vestibulum at. Curabitur a
              blandit leo. In cursus pretium leo sed tempus.
            </p>
          </div>
          <img
            className='fluid object-contain ml-auto  md:mr-8'
            src='/link.png'></img>
        </div>
      </div>
    );
  }
  