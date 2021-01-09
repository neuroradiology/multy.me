import axios from "axios";
export default function URLs() {
  const handleURLs = () => {
    const URLS = document.getElementById("urls").value;
    const name = document.getElementById("name").value;
    const ArrayofURLs = URLS.split("\n");

    axios
      .post("/api/createList", { urls: ArrayofURLs, name: name })
      .then((result) => console.log(result.data));
  };
  return (
    <div className='bg-indigo-500 mx-auto lg:rounded md:px-16 md:py-8  py-4 px-8 text-2xl md:text-4xl text-white max-w-6xl'>
      <div className='flex'>
        <div className='flex flex-col'>
          <h2 className='font-main mb-5'>
            The URL shortener for
            <span className='text-highlight'> multiple URLs.</span>
          </h2>
          <textarea
            className='text-black text-xl p-2 mb-5'
            placeholder='One line per URL'
            id='urls'
            name='urls'
            rows='5'
            cols='40'></textarea>
          <input
            className='text-black text-xl p-2 mb-5'
            size='40'
            id='name'
            name='name'
            placeholder='Enter a name for your list (Optional)'></input>
          <button
            className='bg-indigo-900 rounded-md p-2 text-xl'
            onClick={handleURLs}>
            Short!
          </button>
        </div>
        <img
          className='fluid object-contain ml-auto  md:mr-8'
          src='/link.png'></img>
      </div>
    </div>
  );
}
