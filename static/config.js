requirejs.config({
  baseUrl: "/static",
  paths: {
    jquery: "vendors/jquery/dist/jquery",
    jsx: "vendors/jsx-requirejs-plugins/js/jsx",
    JSXTransformer: "vendors/jsx-requirejs-plugins/js/JSXTransformer",
    react: "vendors/react/react-with-addons",
    react_dom: "vendors/react/react-dom",
    bootstrap: "vendors/bootstrap/dist/js/bootstrap",
    react_bootstrap: "vendors/react-bootstrap/react-bootstrap",
    text: "vendors/requirejs-text/text",
  },
  jsx: {
    fileExtension: ".js"
  },
  urlArgs: "bust=" + (new Date()).getTime()
})