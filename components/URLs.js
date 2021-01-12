import axios from "axios";
import { useState } from "react";
import Clipboard from "react-clipboard.js";
import Loader from "react-loader-spinner";
import { toast } from "react-toastify";

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
    <div className='bg-panel shadow-md lg:rounded-sm text-2xl xl:text-4xl text-gray-500 w-screen xl:w-5/6 2xl:w-4/6  m-auto mt-16 p-8 md:p-16'>
      <div>
        <div className='flex flex-col xl:flex-row'>
          <div className='font-main xl:flex xl:flex-col mr-0 xl:mr-10 ml-10'>
            <p className='xl:max-w-lg'>
              Create a list of URLs, and share it with your friends with
              <span className='text-green-400'> just one link!</span>
            </p>
            <img
              src='/list.png'
              className='m-auto'
            />
          </div>
          <div className='flex flex-col xl:ml-auto'>
            <textarea
              className='text-black text-xl p-2 mb-5 flex-1 resize-none rounded-sm shadow-sm'
              placeholder='One line per URL (Http:// or Https://...)'
              id='urls'
              name='urls'
              rows='5'></textarea>
            <input
              className='text-black text-xl p-2 mb-5 box-border max-w-screen-xl rounded-sm shadow-sm'
              size='45'
              id='name'
              name='name'
              placeholder='Enter a name for your list (Optional)'></input>

            <button
              className='bg-btn-100 hover:bg-btn-200 rounded-sm p-2 text-xl mb-5 text-white shadow-sm'
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
    </div>
  );
}
