requirejs(
	["jquery", "react", "react-dom", "jsx!main"],
	function($, React, ReactDOM, Main) {
	console.log(Main);
	console.log(Main.test);
  $(function() {
    ReactDOM.render(React.createElement(Main.test, null), document.getElementById('container'))
  })
});