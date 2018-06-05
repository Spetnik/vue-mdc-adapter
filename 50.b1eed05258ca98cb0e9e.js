(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{159:function(t,s,a){t.exports=a(77)},77:function(t,s,a){"use strict";a.r(s);var v=a(0),e=Object(v.a)(null,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("article",[a("h2",[t._v("Usage")]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mdc-button")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"onClick"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":disabled")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"buttonDisabled"')]),t._v(">")]),t._v("click me"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mdc-button")]),t._v(">")]),t._v("\n")])]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{attrs:{class:"hljs-keyword"}},[t._v("var")]),t._v(" vm = "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" Vue({\n  "),a("span",{attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(":{\n    "),a("span",{attrs:{class:"hljs-attr"}},[t._v("buttonDisabled")]),t._v(": "),a("span",{attrs:{class:"hljs-literal"}},[t._v("false")]),t._v("\n  },\n  "),a("span",{attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n    onClick () {...}\n  }\n})\n")])]),t._v(" "),a("h3",[t._v("events")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("event")]),t._v(" "),a("th",[t._v("args")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",{pre:!0},[t._v("@click")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("emitted on click")])])])]),t._v(" "),a("h3",[t._v("props")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("prop")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",{pre:!0},[t._v("disabled")])]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("disable the button")])]),t._v(" "),a("tr",[a("td",[a("code",{pre:!0},[t._v("raised")])]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("a contained button that is elevated upon the surface")])]),t._v(" "),a("tr",[a("td",[a("code",{pre:!0},[t._v("unelevated")])]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("a contained button that is flush with the surface")])]),t._v(" "),a("tr",[a("td",[a("code",{pre:!0},[t._v("outlined")])]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("a contained button that is flush with the surface and has a visible border(*)")])]),t._v(" "),a("tr",[a("td",[a("code",{pre:!0},[t._v("dense")])]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("compresses the button text to make it slightly smaller")])]),t._v(" "),a("tr",[a("td",[a("code",{pre:!0},[t._v("event")])]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("optional")]),t._v(" "),a("td",[t._v("optional event to emit on click")])]),t._v(" "),a("tr",[a("td",[a("code",{pre:!0},[t._v("event-target")])]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[t._v("vm.$root")]),t._v(" "),a("td",[t._v("optional event target, defaults to root bus")])]),t._v(" "),a("tr",[a("td",[a("code",{pre:!0},[t._v("event-args")])]),t._v(" "),a("td",[t._v("Array")]),t._v(" "),a("td",[t._v("[]")]),t._v(" "),a("td",[t._v("optional event args")])]),t._v(" "),a("tr",[a("td",[a("code",{pre:!0},[t._v("href")])]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("link's href, renders anchor (see notes below)")])]),t._v(" "),a("tr",[a("td",[a("code",{pre:!0},[t._v("to")])]),t._v(" "),a("td",[t._v("String, Object")]),t._v(" "),a("td",[t._v("undefined")]),t._v(" "),a("td",[t._v("router-link property "),a("em",[t._v("(*)")])])]),t._v(" "),a("tr",[a("td",[a("code",{pre:!0},[t._v("replace")])]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("router-link property "),a("em",[t._v("(*)")])])]),t._v(" "),a("tr",[a("td",[a("code",{pre:!0},[t._v("append")])]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("router-link property "),a("em",[t._v("(*)")])])]),t._v(" "),a("tr",[a("td",[a("code",{pre:!0},[t._v("exact")])]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("router-link property "),a("em",[t._v("(*)")])])]),t._v(" "),a("tr",[a("td",[a("code",{pre:!0},[t._v("active-class")])]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("router-link-active")]),t._v(" "),a("td",[t._v("router-link property "),a("em",[t._v("(*)")])])]),t._v(" "),a("tr",[a("td",[a("code",{pre:!0},[t._v("exact-active-class")])]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("router-link-exact-active")]),t._v(" "),a("td",[t._v("router-link property "),a("em",[t._v("(*)")])])])])]),t._v(" "),a("blockquote",[a("p",[a("em",[t._v("(*)")]),t._v(" Requires "),a("a",{attrs:{href:"https://router.vuejs.org"}},[t._v("vue-router")])])]),t._v(" "),a("h3",[t._v("text buttons")]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mdc-button")]),t._v(">")]),t._v("Baseline"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mdc-button")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mdc-button")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("dense")]),t._v(">")]),t._v("Dense"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mdc-button")]),t._v(">")]),t._v("\n")])]),t._v(" "),a("h3",[t._v("Raised Button")]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mdc-button")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("raised")]),t._v(">")]),t._v("Baseline"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mdc-button")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mdc-button")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("raised")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("dense")]),t._v(">")]),t._v("Dense"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mdc-button")]),t._v(">")]),t._v("\n")])]),t._v(" "),a("h3",[t._v("Unelevated buttons")]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mdc-button")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("unelevated")]),t._v(">")]),t._v("Baseline"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mdc-button")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mdc-button")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("unelevated")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("dense")]),t._v(">")]),t._v("Dense"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mdc-button")]),t._v(">")]),t._v("\n")])]),t._v(" "),a("h3",[t._v("Icon buttons")]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mdc-button")]),t._v(" >")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("i")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"material-icons mdc-button__icon"')]),t._v(">")]),t._v("favorite"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("i")]),t._v(">")]),t._v("like"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mdc-button")]),t._v(">")]),t._v("\n")])]),t._v(" "),a("p",[t._v("or an SVG button")]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mdc-button")]),t._v(" >")]),t._v("  "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("svg")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"mdc-button__icon"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("xmlns")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"http://www.w3.org/2000/svg"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("viewBox")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"..."')]),t._v(">")]),t._v("\n  ...\n  "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("svg")]),t._v(">")]),t._v("\n  like\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mdc-button")]),t._v(">")]),t._v("\n")])]),t._v(" "),a("blockquote",[a("p",[t._v("Note: "),a("code",{pre:!0},[t._v("mdc-icon")]),t._v(" is not suitable for rendering in an "),a("code",{pre:!0},[t._v("mdc-button")]),t._v(" as it does not set the required "),a("code",{pre:!0},[t._v("mdc-button__icon")]),t._v(" class.")])]),t._v(" "),a("h3",[t._v("Link buttons")]),t._v(" "),a("h4",[t._v("simple Link")]),t._v(" "),a("p",[t._v("Using the href attribute will render "),a("code",{pre:!0},[t._v('<a role="button" href="...">')])]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mdc-button")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("href")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"#"')]),t._v(">")]),t._v("Home"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mdc-button")]),t._v(">")]),t._v("\n")])]),t._v(" "),a("h4",[t._v("router-link")]),t._v(" "),a("p",[t._v("If the "),a("code",{pre:!0},[t._v("to")]),t._v(" property is defined, the item behaves as a\n"),a("a",{attrs:{href:"https://router.vuejs.org/en/api/router-link.html"}},[t._v("router-link")])]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mdc-button")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("to")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"/home"')]),t._v(">")]),t._v("Home"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mdc-button")]),t._v(">")]),t._v("\n")])]),t._v(" "),a("h4",[t._v("Accessibility Warning:")]),t._v(" "),a("blockquote",[a("p",[t._v("Buttons are expected to be triggered using the Space or Enter key,\nwhile links are expected to be triggered using the Enter key.\nAdditionally, button and links have different behaviors on right click.\nsee this "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_button_role#Keyboard_and_focus"}},[t._v("MDN note")])])]),t._v(" "),a("p",[t._v("You might want to keep button behaviour and do the navigation programatically:")]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mdc-button")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v("\"location.href='#'\"")]),t._v(">")]),t._v("Home"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mdc-button")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mdc-button")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"$router.push(...)"')]),t._v(">")]),t._v("Home"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mdc-button")]),t._v(">")]),t._v("\n")])]),t._v(" "),a("h3",[t._v("Triggering events")]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[t._v(" "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mdc-button")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("event")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v("'my-event'")]),t._v(">")]),t._v("Do Something"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mdc-button")]),t._v(">")]),t._v("\n")])]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{attrs:{class:"hljs-comment"}},[t._v("// register event from some component context")]),t._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$root.$on("),a("span",{attrs:{class:"hljs-string"}},[t._v("'my-event'")]),t._v(", () => doSomething())\n")])]),t._v(" "),a("h3",[t._v("Reference")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://material.io/guidelines/components/buttons.html"}},[t._v("https://material.io/guidelines/components/buttons.html")])])])])}],!1,null,null,null);s.default=e.exports}}]);
//# sourceMappingURL=50.b1eed05258ca98cb0e9e.js.map