import axios from "axios";
import { useState } from "react";
import Clipboard from "react-clipboard.js";
import Image from "next/image";
import Loader from "react-loader-spinner";
import { toast } from "react-toastify";

export default function URLs() {
  const [shortURL, setShortURL] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleURLs = () => {
    setLoading(true);
    const URLS = document.getElementById("urls").value;
    const name = document.getElementById("name").value;
    const ArrayofURLs = URLS.split("\n");

    axios
      .post("/api/List", { urls: ArrayofURLs, name: name })
      .then((result) => {
        setShortURL(`https://multy.me/${result.data.uid}`);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className='bg-blue-700 mx-auto mt-8 lg:rounded-sm md:px-16 md:py-8  py-4 px-8 text-2xl md:text-4xl text-white max-w-6xl'>
      <div className='w-5/6 m-auto'>
        <div className='flex flex-col'>
          <h2 className='font-main my-5 flex'>
            <Image src='/link.png' width={60} height={60} className='m-auto' />{" "}
            <p className='my-auto ml-2'>
              The URL shortener for
              <span className='text-orange-400'> multiple URLs.</span>
            </p>
          </h2>
          <textarea
            className='text-black text-xl p-2 mb-5 flex-1 resize-none rounded-sm'
            placeholder='One line per URL'
            id='urls'
            name='urls'
            rows='5'></textarea>
          <input
            className='text-black text-xl p-2 mb-5 box-border max-w-screen-xl rounded-sm'
            size='40'
            id='name'
            name='name'
            placeholder='Enter a name for your list (Optional)'></input>

          <button
            className='bg-blue-800 hover:bg-blue-900 rounded-sm p-2 text-xl mb-5'
            onClick={handleURLs}>
            {loading ? (
              <Loader
                className='flex justify-center'
                type='ThreeDots'
                color='#FBBF24'
                height={50}
                width={50}
              />
            ) : (
              "Shorten!"
            )}
          </button>

          {shortURL ? (
            <div className='flex text-base align-middle'>
              <input
                className='text-black p-2 mr-5'
                id='yourURL'
                size='40'
                readOnly
                value={shortURL}
              />

              <Clipboard
                onClick={() => {
                  console.log("test");
                  toast("🦄 Copied to clipboard!", {
                    position: "bottom-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                }}
                className='border-black border-solid border-0 rounded-md p-2 bg-indigo-900 hover:bg-indigo-600'
                data-clipboard-text={shortURL}>
                📋 Copy to clipboard
              </Clipboard>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
