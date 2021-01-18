import PostPreview from "./post-preview";
import Image from "next/image";

export default function MoreStories({ posts }) {
  return (
    <section className="mt-5">
     <div className="flex flex-col"> <Image src='/type.png' width={112*0.8} height={126*0.8} className="m-auto text-center object-contain" /><h2 className='mb-2 text-3xl md:text-4xl font-base text-center tracking-tighter leading-tight uppercase'>
        Blog {"&"} Changelog
      </h2></div>
      

      <div className='flex flex-col flex-wrap'>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
