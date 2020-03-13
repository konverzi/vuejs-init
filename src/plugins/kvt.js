const injectScript = () => {
  /*
  if (!document) return warn("No document defined.");
  const el = document.createElement("script");
  // Uses hello.js for default domain, otherwise uses app.js
  const file = domain === "cdn.simpleanalytics.io" ? "hello" : "app";
  el.type = "text/javascript";
  el.async = true;
  el.src = "https://" + domain + "/" + file + ".js";
  document.head.appendChild(el);
  */
};

export default {
  install(vue, { skip = false }) {
    if (skip === false) return injectScript();
    return injectScript();
  }
};
