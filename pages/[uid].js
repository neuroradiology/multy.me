import { createClient } from "@supabase/supabase-js";
import Layout from "../components/Layout";

const List = ({ result }) => {
  console.log(result);
  if (result.length > 0) {
    return (
      <Layout>
        <h2 className='text-2xl'>{result[0].name}</h2>
        <div>
          {result[0].urls.map((el, index) => (
            <div key={index}>{el}</div>
          ))}
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
