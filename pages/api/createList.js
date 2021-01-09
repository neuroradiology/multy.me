const validUrl = require("valid-url");

export default function handler(req, res) {
  if (req.method === "POST") {
    if (req.body.urls) {
      const validURLS = [];
      const result = {};
      for (const el of req.body.urls) {
        if (validUrl.isUri(el)) {
          console.log("Looks like an URI");
          validURLS.push(el);
        } else {
          console.log("Not a URI");
        }
      }
      result.validURLS = validURLS;
      result.name = req.body.name ? req.body.name : null;
      res.status(200);
      res.send(result);
    }
  }
}
