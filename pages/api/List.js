const validUrl = require("valid-url");
const urlMetadata = require("url-metadata");
import ShortUniqueId from "short-unique-id";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.supabase_url;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {

  if (req.method === "POST") {
    if (req.body.urls) {
      // Initialize uniqueID generator and create a uid for the list
      const uidGenerator = new ShortUniqueId();
      let uid = uidGenerator();

      // Initialize variables
      const validURLS = [];
      const result = {};

      // For each url, check if it's a valid url, and if it is, add it to the validURLS array
      for (const el of req.body.urls) {
        if (validUrl.isUri(el)) {
          validURLS.push(el);
        } else {
          null;
        }
      }
      console.log(validURLS);
      result.validURLS = validURLS;
      result.name = req.body.name ? req.body.name : null;
      result.uid = uid;

      const { data: checkID, checkIDError } = await supabase
        .from("lists")
        .select("id")
        .filter("id", "eq", uid);

      /*Add the list with the uniqueID, the name, and URLs, in the database
        Check if the ID already exist in the database (low proba). If it is,
        generate a new uid */

      if (checkID.length === 0) {
        const { data, error } = await supabase.from("lists").insert([
          {
            id: uid,
            name: result.name,
            urls: result.validURLS,
          },
        ]);
        console.log({ data, error });
      } else {
        console.log("uid already exist, generate a new one...");
        uid = uidGenerator();
        result.uid = uid;
        const { data, error } = await supabase.from("lists").insert([
          {
            id: uid,
            name: result.name,
            urls: result.validURLS,
          },
        ]);
        console.log({ data, error });
      }

      res.status(200);
      res.send(result);
    }
  }
}
