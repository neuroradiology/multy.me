import "../style/main.css";
import { usePanelbear } from "./../hooks/panelbear";
import { DefaultSeo } from "next-seo";

function CustomApp({ Component, pageProps }) {
  // Load Panelbear only once during the app lifecycle
  usePanelbear("I7onXLRKXb2", {
    // Uncomment to allow sending events on localhost, and log to console too.
    // debug: true
  });

  return (
    <>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://www.multy.me/",
          site_name: "Multy.me",
        }}
        twitter={{
          handle: "@michael_webdev",
          site: "@michael_webdev",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default CustomApp;
