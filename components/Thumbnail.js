export default function Thumbnail(props) {
  return (
    <div className='flex flex-auto flex-shrink flex-wrap flex-row m-auto justify-evenly '>
      {props.result.urls.map((el, index) => (
        <div key={index} className='w-80 m-5 p-5'>
          <div>
            <span className='block text-center text-lg'>
              <a
                href={el.url}
                rel='external nofollow'
                className='text-blue-600 hover:text-blue-800 '>
                {el.title ? el.title : el.url}
              </a>
            </span>
            {el.image ? (
              <img
                src={el.image}
                className='my-5 mx-auto'
                //replace the image by the placeholder if we cannot reach the server
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/placeholder.png";
                }}
              />
            ) : (
              <img src='/placeholder.png' className='my-5 mx-auto' />
            )}
            <p>{el.description && el.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
