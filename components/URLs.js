import axios from "axios";
import { useState } from "react";
import Clipboard from "react-clipboard.js";
import Loader from "react-loader-spinner";
import { toast } from "react-toastify";
import Image from "next/image"

export default function URLs() {
  const [shortURL, setShortURL] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleURLs = () => {
    const URLS = document.getElementById("urls").value;
    const name = document.getElementById("name").value;
    const ArrayofURLs = URLS.split("\n");
    if (document.getElementById("urls").value) {
      setLoading(true);
      axios
        .post("/api/List", { urls: ArrayofURLs, name: name })
        .then((result) => {
          setShortURL(`https://multy.me/${result.data.uid}`);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          toast.error(err.response.data, {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    } else {
      toast.info("Please enter at least one URL", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div className='mt-3'>
      <div className='flex w-screen flex-wrap max-w-3xl m-auto font-light justify-center'>
        <Image src='/bookmark.png' width={125} height={110} className='object-scale-down m-auto sm:m-0' />
        <p className='max-w-lg text-2xl xl:text-3xl grow my-auto ml-8'>
          Create a list of URLs, and share it with your friends with
          <span className='font-bold'> just one link!</span>
        </p>
      </div>
      <div className='flex flex-col justify-center'>
        <div className='bg-panel shadow-md lg:rounded-md w-screen md:w-5/12 3xl:w-4/12 m-auto mt-5 p-8 md:p-8 md:pb-4 pb-4'>
          <div>
            <div className='flex flex-col xl:ml-auto'>
              <p className='font-light mb-2'>
                Create your list by adding one URL per line
              </p>
              <textarea
                className='text-black text-l leading-8 p-2 mb-8 flex-1 resize-none rounded-sm shadow-sm'
                placeholder={`For example\nhttps://www.google.com/\nhttps://www.google.fr/\nhttps://www.google.es/`}
                id='urls'
                name='urls'
                rows='6'></textarea>
              <p className='font-light mb-2'>Name your list (Optional)</p>
              <input
                className='text-black text-xl p-2 mb-5 box-border max-w-screen-xl rounded-sm shadow-sm'
                size='45'
                id='name'
                name='name'></input>
            </div>
          </div>
        </div>
        <div className='w-screen md:w-5/12 3xl:w-4/12  m-auto'>
          <button
            className='bg-btn-100 hover:bg-btn-200 rounded-sm p-2 text-xl mb-5 w-full text-white shadow-sm font-bold mt-4'
            onClick={handleURLs}>
            {loading ? (
              <Loader
                className='flex justify-center'
                type='ThreeDots'
                color='#4ADE80'
                height={50}
                width={50}
              />
            ) : (
              "Create my list!"
            )}
          </button>
          {shortURL ? (
            <div className='flex text-base align-middle'>
              <input
                className='text-black p-2 mr-5'
                id='yourURL'
                size='15'
                readOnly
                value={shortURL}
              />

              <Clipboard
                onClick={() => {
                  toast("📋 Copied to clipboard!", {
                    position: "top-center",
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
