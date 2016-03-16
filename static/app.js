requirejs(["jquery", "react", "jsx!main"], function($, React, Main) {
	console.log(Main);
  $(function() {
    React.render(React.createElement(Main, null), document.getElementById('container'))
  })
})