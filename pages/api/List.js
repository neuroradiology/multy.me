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
      const invalidURLS = [];
      const result = {};
      let error = false;

      // For each url, check if it's a valid url, and if it is, add it to the validURLS array
      for await (const el of req.body.urls) {
        if (validUrl.isWebUri(el)) {
          await urlMetadata(el)
            .then((result) => {
              validURLS.push(result);
            })
            .catch((err) => {
              validURLS.push({ url: el, metadata: null });
              console.log(`The URL ${el} has not metadata `);
            });
        } else {
          if (!el.startsWith("http://") || !el.startsWith("https://")) {
            const httpString = "http://";
            const newURL = httpString.concat(el);
            if (validUrl.isWebUri(newURL)) {
              await urlMetadata(newURL)
                .then((result) => {
                  validURLS.push(result);
                })
                .catch((err) => {
                  validURLS.push({ url: newURL, metadata: null });
                  console.log(`The URL ${el} has not metadata `);
                });
            }
          }
        }
      }
      result.validURLS = validURLS;
      result.invalidURLS = invalidURLS;
      result.name = req.body.name ? req.body.name : null;
      result.uid = uid;
      console.log(result.invalidURLS);

      const { data: checkID, checkIDError } = await supabase
        .from("lists")
        .select("id")
        .filter("id", "eq", uid);

      /*Add the list with the uniqueID, the name, and URLs, in the database
        Check if the ID already exist in the database (low proba). If it is,
        generate a new uid */

      if (validURLS.length > 0 && !error) {
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
      }

      if (validURLS.length > 0) {
        res.status(200);
        res.send(result);
      } else {
        res.status(400);
        res.send("error", { error: 400 });
      }
    }
  }
}
