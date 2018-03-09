(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/js/Users.js":
/*!*************************!*\
  !*** ./src/js/Users.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _jquery = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nvar _users = __webpack_require__(/*! ./views/users.hbs */ \"./src/js/views/users.hbs\");\n\nvar _users2 = _interopRequireDefault(_users);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar API_URL = \"http://jsonplaceholder.typicode.com/users\";\n\nfunction createHTML(data) {\n\n    return (0, _users2.default)({\n        users: data\n    });\n}\n\nfunction getUsers() {\n\n    console.log(\"W funkcji getUsersHTML\");\n\n    return _jquery2.default.getJSON(API_URL).then(function (data) {\n        return createHTML(data);\n    });\n}\n\nfunction getUsersHTML() {\n\n    return getUsers();\n}\n\nexports.default = getUsersHTML;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvVXNlcnMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL1VzZXJzLmpzPzVjODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSBcIi4vdmlld3MvdXNlcnMuaGJzXCI7XHJcblxyXG5jb25zdCBBUElfVVJMID0gXCJodHRwOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vyc1wiO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlSFRNTChkYXRhKSB7XHJcblxyXG4gICAgcmV0dXJuIHRlbXBsYXRlKHtcclxuICAgICAgICB1c2VyczogZGF0YVxyXG4gICAgfSk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRVc2VycygpIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIlcgZnVua2NqaSBnZXRVc2Vyc0hUTUxcIik7XHJcblxyXG4gICAgcmV0dXJuICQuZ2V0SlNPTihBUElfVVJMKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4gY3JlYXRlSFRNTChkYXRhKSk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRVc2Vyc0hUTUwoKSB7XHJcblxyXG4gICAgcmV0dXJuIGdldFVzZXJzKCk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRVc2Vyc0hUTUw7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/Users.js\n");

/***/ }),

/***/ "./src/js/views/users.hbs":
/*!********************************!*\
  !*** ./src/js/views/users.hbs ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Handlebars = __webpack_require__(/*! ./node_modules/handlebars/runtime.js */ \"./node_modules/handlebars/runtime.js\");\nmodule.exports = (Handlebars['default'] || Handlebars).template({\"1\":function(container,depth0,helpers,partials,data) {\n    var stack1;\n\n  return \"<ul class=\\\"users\\\">\\n\"\n    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.users : depth0),{\"name\":\"each\",\"hash\":{},\"fn\":container.program(2, data, 0),\"inverse\":container.noop,\"data\":data})) != null ? stack1 : \"\")\n    + \"</ul>\\n\";\n},\"2\":function(container,depth0,helpers,partials,data) {\n    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=\"function\", alias4=container.escapeExpression;\n\n  return \"    <li class=\\\"user\\\">\\n        <span class=\\\"user__name\\\">\"\n    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"name\",\"hash\":{},\"data\":data}) : helper)))\n    + \"</span>\\n        <span class=\\\"user__email\\\">\"\n    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"email\",\"hash\":{},\"data\":data}) : helper)))\n    + \"</span>\\n        <span class=\\\"user__website\\\"><a href=\\\"http://\"\n    + alias4(((helper = (helper = helpers.website || (depth0 != null ? depth0.website : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"website\",\"hash\":{},\"data\":data}) : helper)))\n    + \"\\\">\"\n    + alias4(((helper = (helper = helpers.website || (depth0 != null ? depth0.website : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"website\",\"hash\":{},\"data\":data}) : helper)))\n    + \"</a></span>\\n    </li>\\n\";\n},\"4\":function(container,depth0,helpers,partials,data) {\n    return \"<p class=\\\"users__empty\\\">Nic nie znaleziono.</p>\\n\";\n},\"compiler\":[7,\">= 4.0.0\"],\"main\":function(container,depth0,helpers,partials,data) {\n    var stack1;\n\n  return ((stack1 = helpers[\"if\"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.users : depth0)) != null ? stack1.length : stack1),{\"name\":\"if\",\"hash\":{},\"fn\":container.program(1, data, 0),\"inverse\":container.program(4, data, 0),\"data\":data})) != null ? stack1 : \"\");\n},\"useData\":true});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdmlld3MvdXNlcnMuaGJzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3ZpZXdzL3VzZXJzLmhicz8wNjQzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBIYW5kbGViYXJzID0gcmVxdWlyZSgnQzovVXNlcnMvbWljaGFsamFua293c2tpL0RvY3VtZW50cy93ZWJwYWNrLXN0YXJ0ZXItZ2l0L3dlYnBhY2svbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qcycpO1xubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1snZGVmYXVsdCddIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiPHVsIGNsYXNzPVxcXCJ1c2Vyc1xcXCI+XFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVycy5lYWNoLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAudXNlcnMgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMiwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiPC91bD5cXG5cIjtcbn0sXCIyXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwgYWxpYXMyPWhlbHBlcnMuaGVscGVyTWlzc2luZywgYWxpYXMzPVwiZnVuY3Rpb25cIiwgYWxpYXM0PWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiBcIiAgICA8bGkgY2xhc3M9XFxcInVzZXJcXFwiPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcInVzZXJfX25hbWVcXFwiPlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5uYW1lIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5uYW1lIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJuYW1lXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIjwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ1c2VyX19lbWFpbFxcXCI+XCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmVtYWlsIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5lbWFpbCA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiZW1haWxcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9zcGFuPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcInVzZXJfX3dlYnNpdGVcXFwiPjxhIGhyZWY9XFxcImh0dHA6Ly9cIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMud2Vic2l0ZSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAud2Vic2l0ZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwid2Vic2l0ZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiPlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy53ZWJzaXRlIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC53ZWJzaXRlIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJ3ZWJzaXRlXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIjwvYT48L3NwYW4+XFxuICAgIDwvbGk+XFxuXCI7XG59LFwiNFwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgcmV0dXJuIFwiPHAgY2xhc3M9XFxcInVzZXJzX19lbXB0eVxcXCI+TmljIG5pZSB6bmFsZXppb25vLjwvcD5cXG5cIjtcbn0sXCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiAoKHN0YWNrMSA9IGhlbHBlcnNbXCJpZlwiXS5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAudXNlcnMgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLmxlbmd0aCA6IHN0YWNrMSkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLnByb2dyYW0oNCwgZGF0YSwgMCksXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIik7XG59LFwidXNlRGF0YVwiOnRydWV9KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/views/users.hbs\n");

/***/ })

}]);