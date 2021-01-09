import axios from "axios";
import { useState } from "react";
import Clipboard from "react-clipboard.js";

export default function URLs() {
  const [shortURL, setShortURL] = useState(null);
  const handleURLs = () => {
    const URLS = document.getElementById("urls").value;
    const name = document.getElementById("name").value;
    const ArrayofURLs = URLS.split("\n");

    axios
      .post("/api/List", { urls: ArrayofURLs, name: name })
      .then((result) => setShortURL(`https://multy.me/${result.data.uid}`))
      .catch((err) => console.log(err));
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
            className='bg-indigo-900 hover:bg-indigo-600 rounded-md p-2 text-xl mb-5'
            onClick={handleURLs}>
            Short!
          </button>
          {shortURL ? (
            <div className='flex text-base align-middle'>
              <input
                className=' text-black p-2 mr-5'
                id='yourURL'
                size='40'
                readOnly
                defaultValue={shortURL}
              />
              
                <Clipboard className="border-black border-solid border-0 rounded-md p-2 bg-indigo-900 hover:bg-indigo-600" data-clipboard-text={shortURL}>
                  📋 Copy to clipboard
                </Clipboard>
              
            </div>
          ) : null}
        </div>
        <img
          className='fluid object-contain ml-auto  md:mr-8'
          src='/link.png'></img>
      </div>
    </div>
  );
}
