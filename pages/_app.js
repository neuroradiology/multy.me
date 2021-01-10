import '../style/main.css'
import { usePanelbear } from "./../hooks/panelbear";

function CustomApp({ Component, pageProps }) {
  // Load Panelbear only once during the app lifecycle
  usePanelbear("I7onXLRKXb2", {
    // Uncomment to allow sending events on localhost, and log to console too.
    // debug: true
  });

  return <Component {...pageProps} />;
}

export default CustomApp;


