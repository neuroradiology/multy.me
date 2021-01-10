import { createClient } from "@supabase/supabase-js";
import Layout from "../components/Layout";

const List = ({ result }) => {
  console.log(result);
  if (result.length > 0) {
    return (
      <Layout>
        <div className="bg-white w-4/6 m-auto p-5 rounded-md">
          <h2 className='text-4xl text-center m-5 font-title'>
            {result[0].name}
          </h2>

          <div className='flex flex-shrink flex-wrap flex-row m-auto justify-evenly'>
            {result[0].urls.map((el, index) => (
              <div key={index} className="max-w-xs py-5">
                <a href={el.url} className='text-blue-600 hover:text-blue-800'>
                  {el.url}
                </a>
              </div>
            ))}
          </div>
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

export default List;
