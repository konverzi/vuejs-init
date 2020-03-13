var ar = ["dist/load.js", "dist/js/chunk-vendors.js"];
ar.forEach(el => {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = el;
  document.getElementsByTagName("head")[0].appendChild(script);
});
var elc = document.createElement("link");
elc.type = "text/css";
elc.rel = "stylesheet";
elc.href = "dist/css/app.css";
document.getElementsByTagName("head")[0].appendChild(elc);
