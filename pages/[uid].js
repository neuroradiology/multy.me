import { createClient } from "@supabase/supabase-js";
import Layout from "components/Layout";
import Image from "next/image";
import List from "components/List";
import Thumbnail from "components/Thumbnail";
import { useState } from "react";
import { FiList, FiGrid } from "react-icons/fi";

const ListPage = ({ result }) => {
  const [display, setDisplay] = useState("list");
  if (result.length > 0) {
    return (
      <Layout>
        <div className='bg-panelLight max-w-6xl m-auto p-5 rounded-md shadow-md'>
          <div className='flex text-xl'>
            <div
              className='p-2 bg-btn-200 hover:bg-btn-100 rounded-sm shadow-md mr-5 cursor-pointer'
              onClick={() => {
                setDisplay("list");
              }}>
              <FiList className='text-white' />
            </div>
            <div
              className='p-2 bg-btn-200 hover:bg-btn-100 rounded-sm shadow-md mr-5 cursor-pointer'
              onClick={() => {
                setDisplay("thumbnail");
              }}>
              <FiGrid className='text-white' />
            </div>
          </div>
          <div className='m-auto w-32'>
            <Image
              src='/bookmark.png'
              alt='Image of a bookmark'
              className='m-auto'
              width={125}
              height={110}
            />
          </div>
          <h2 className='text-4xl text-center m-5 font-main uppercase'>
            {result[0].name}
          </h2>
          {display == "list" ? (
            <List result={result[0]} />
          ) : (
            <Thumbnail result={result[0]} />
          )}
        </div>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <p>This url does not exist</p>
      </Layout>
    );
  }
};

export async function getServerSideProps(context) {
  const supabaseUrl = process.env.supabase_url;
  const supabaseKey = process.env.SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);
  // Fetch data from database

  const { data: result, resultError } = await supabase
    .from("lists")
    .select("id, name, urls")
    .filter("id", "eq", context.params.uid);

  // Pass data to the page via props
  return { props: { result } };
}

// Pass data to the page via props

export default ListPage;
