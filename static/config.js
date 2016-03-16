requirejs.config({
  baseUrl: "/static",
  paths: {
    jquery: "vendors/jquery/dist/jquery",
    jsx: "vendors/jsx-requirejs-plugins/js/jsx",
    JSXTransformer: "vendors/jsx-requirejs-plugins/js/JSXTransformer",
    react: "vendors/react/react-with-addons",
    react_dom: "vendors/react/react-dom",
    text: "vendors/requirejs-text/text",
    more: "more"
  },
  jsx: {
    fileExtension: ".js"
  },
  urlArgs: "bust=" + (new Date()).getTime()
})