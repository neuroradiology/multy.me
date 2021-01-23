export default function List(props) {
  return (
    <div className='flex flex-auto flex-shrink flex-wrap flex-row m-auto justify-evenly '>
      {props.result.urls.sort((a, b) => a.id - b.id).map((el,index) => (
        <div key={el.id ? el.id : index} className='w-auto m-5'>
          <a
            href={el.url}
            rel='external nofollow'
            className='text-blue-600 hover:text-blue-800'>
            {el.url}
          </a>
        </div>
      ))}
    </div>
  );
}
