webpackHotUpdate("rnb",{

/***/ "./packages/default-theme/src/components/heading.js":
/*!**********************************************************!*\
  !*** ./packages/default-theme/src/components/heading.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _frontity_components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/components/link */ \"./node_modules/@frontity/components/link/index.tsx\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list */ \"./packages/default-theme/src/components/list.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}/*\r\n    Plan :\r\n    1. Mendapatkan gambar dari 3 post terakhir\r\n    2. Merubah sesuai dengan desain awal \r\n    Membuat heading news menjadi slideshow -> terutama untuk tampilan hp\r\n*/ //State untuk Judul\nconst Heading=({state})=>{const data=state.source.get(state.router.link);return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(HeadingContainer,{children:data.items.map((list,index)=>{const headingNews=state.source[list.type][list.id];if(index<=4){const fmedia=headingNews.featured_media;if(fmedia>0){const pict=state.source.attachment[fmedia].source_url;return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxs\"])(HeadNews,{link:headingNews.link,children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(ImageNews,{class:\"headingImage\",children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"img\",{src:pict,alt:\"gambar-heading\"})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(Title,{children:headingNews.title.rendered})]},list.id);}}})});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Heading));const HeadingContainer=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"header\", false?undefined:{target:\"e1ee11if3\",label:\"HeadingContainer\"})( false?undefined:{name:\"11o2425\",styles:\"display:flex;flex-wrap:wrap;justify-content:center;padding-top:128px\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXRUJcXFdlYnNpdGVfMjAyMVxccm5iXFxwYWNrYWdlc1xcZGVmYXVsdC10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxoZWFkaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDc0MiLCJmaWxlIjoiRDpcXFdFQlxcV2Vic2l0ZV8yMDIxXFxybmJcXHBhY2thZ2VzXFxkZWZhdWx0LXRoZW1lXFxzcmNcXGNvbXBvbmVudHNcXGhlYWRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCwgR2xvYmFsLCBzdHlsZWQsIGNzcyB9IGZyb20gXCJmcm9udGl0eVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwiQGZyb250aXR5L2NvbXBvbmVudHMvbGlua1wiO1xyXG5pbXBvcnQgbGlzdCBmcm9tIFwiLi9saXN0XCI7XHJcblxyXG4vKlxyXG4gICAgUGxhbiA6XHJcbiAgICAxLiBNZW5kYXBhdGthbiBnYW1iYXIgZGFyaSAzIHBvc3QgdGVyYWtoaXJcclxuICAgIDIuIE1lcnViYWggc2VzdWFpIGRlbmdhbiBkZXNhaW4gYXdhbCBcclxuICAgIE1lbWJ1YXQgaGVhZGluZyBuZXdzIG1lbmphZGkgc2xpZGVzaG93IC0+IHRlcnV0YW1hIHVudHVrIHRhbXBpbGFuIGhwXHJcbiovXHJcblxyXG4vL1N0YXRlIHVudHVrIEp1ZHVsXHJcblxyXG5jb25zdCBIZWFkaW5nID0gKHsgc3RhdGUgfSkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkaW5nQ29udGFpbmVyPlxyXG4gICAgICB7ZGF0YS5pdGVtcy5tYXAoKGxpc3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGVhZGluZ05ld3MgPSBzdGF0ZS5zb3VyY2VbbGlzdC50eXBlXVtsaXN0LmlkXTtcclxuICAgICAgICBpZiAoaW5kZXggPD0gNCAgKSB7XHJcbiAgICAgICAgICBjb25zdCBmbWVkaWEgPSBoZWFkaW5nTmV3cy5mZWF0dXJlZF9tZWRpYTtcclxuICAgICAgICAgIGlmIChmbWVkaWEgPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBpY3QgPSBzdGF0ZS5zb3VyY2UuYXR0YWNobWVudFtmbWVkaWFdLnNvdXJjZV91cmw7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPEhlYWROZXdzIGtleT17bGlzdC5pZH0gbGluaz17aGVhZGluZ05ld3MubGlua30+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VOZXdzIGNsYXNzPVwiaGVhZGluZ0ltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwaWN0fSBhbHQ9XCJnYW1iYXItaGVhZGluZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0ltYWdlTmV3cz5cclxuICAgICAgICAgICAgICAgIDxUaXRsZT57aGVhZGluZ05ld3MudGl0bGUucmVuZGVyZWR9PC9UaXRsZT5cclxuICAgICAgICAgICAgICA8L0hlYWROZXdzPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSl9XHJcbiAgICA8L0hlYWRpbmdDb250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoSGVhZGluZyk7XHJcbmNvbnN0IEhlYWRpbmdDb250YWluZXIgPSBzdHlsZWQuaGVhZGVyYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxMjhweDtcclxuYDtcclxuY29uc3QgSGVhZE5ld3MgPSBzdHlsZWQuYWBcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXgtd2lkdGg6IDM4NXB4O1xyXG4gIGhlaWdodDogMjU2cHg7XHJcbiAgbWFyZ2luOiAyNHB4O1xyXG5gO1xyXG5jb25zdCBJbWFnZU5ld3MgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3N0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICYgPiBpbWcge1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBwb3N0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oM2BcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbWFyZ2luOiAtODBweCAyMHB4IDA7XHJcbmBcclxuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const HeadNews=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"a\", false?undefined:{target:\"e1ee11if2\",label:\"HeadNews\"})( false?undefined:{name:\"gj5yxg\",styles:\"display:block;max-width:385px;height:256px;margin:24px\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXRUJcXFdlYnNpdGVfMjAyMVxccm5iXFxwYWNrYWdlc1xcZGVmYXVsdC10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxoZWFkaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDeUIiLCJmaWxlIjoiRDpcXFdFQlxcV2Vic2l0ZV8yMDIxXFxybmJcXHBhY2thZ2VzXFxkZWZhdWx0LXRoZW1lXFxzcmNcXGNvbXBvbmVudHNcXGhlYWRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCwgR2xvYmFsLCBzdHlsZWQsIGNzcyB9IGZyb20gXCJmcm9udGl0eVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwiQGZyb250aXR5L2NvbXBvbmVudHMvbGlua1wiO1xyXG5pbXBvcnQgbGlzdCBmcm9tIFwiLi9saXN0XCI7XHJcblxyXG4vKlxyXG4gICAgUGxhbiA6XHJcbiAgICAxLiBNZW5kYXBhdGthbiBnYW1iYXIgZGFyaSAzIHBvc3QgdGVyYWtoaXJcclxuICAgIDIuIE1lcnViYWggc2VzdWFpIGRlbmdhbiBkZXNhaW4gYXdhbCBcclxuICAgIE1lbWJ1YXQgaGVhZGluZyBuZXdzIG1lbmphZGkgc2xpZGVzaG93IC0+IHRlcnV0YW1hIHVudHVrIHRhbXBpbGFuIGhwXHJcbiovXHJcblxyXG4vL1N0YXRlIHVudHVrIEp1ZHVsXHJcblxyXG5jb25zdCBIZWFkaW5nID0gKHsgc3RhdGUgfSkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkaW5nQ29udGFpbmVyPlxyXG4gICAgICB7ZGF0YS5pdGVtcy5tYXAoKGxpc3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGVhZGluZ05ld3MgPSBzdGF0ZS5zb3VyY2VbbGlzdC50eXBlXVtsaXN0LmlkXTtcclxuICAgICAgICBpZiAoaW5kZXggPD0gNCAgKSB7XHJcbiAgICAgICAgICBjb25zdCBmbWVkaWEgPSBoZWFkaW5nTmV3cy5mZWF0dXJlZF9tZWRpYTtcclxuICAgICAgICAgIGlmIChmbWVkaWEgPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBpY3QgPSBzdGF0ZS5zb3VyY2UuYXR0YWNobWVudFtmbWVkaWFdLnNvdXJjZV91cmw7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPEhlYWROZXdzIGtleT17bGlzdC5pZH0gbGluaz17aGVhZGluZ05ld3MubGlua30+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VOZXdzIGNsYXNzPVwiaGVhZGluZ0ltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwaWN0fSBhbHQ9XCJnYW1iYXItaGVhZGluZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0ltYWdlTmV3cz5cclxuICAgICAgICAgICAgICAgIDxUaXRsZT57aGVhZGluZ05ld3MudGl0bGUucmVuZGVyZWR9PC9UaXRsZT5cclxuICAgICAgICAgICAgICA8L0hlYWROZXdzPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSl9XHJcbiAgICA8L0hlYWRpbmdDb250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoSGVhZGluZyk7XHJcbmNvbnN0IEhlYWRpbmdDb250YWluZXIgPSBzdHlsZWQuaGVhZGVyYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxMjhweDtcclxuYDtcclxuY29uc3QgSGVhZE5ld3MgPSBzdHlsZWQuYWBcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXgtd2lkdGg6IDM4NXB4O1xyXG4gIGhlaWdodDogMjU2cHg7XHJcbiAgbWFyZ2luOiAyNHB4O1xyXG5gO1xyXG5jb25zdCBJbWFnZU5ld3MgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3N0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICYgPiBpbWcge1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBwb3N0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oM2BcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbWFyZ2luOiAtODBweCAyMHB4IDA7XHJcbmBcclxuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const ImageNews=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"e1ee11if1\",label:\"ImageNews\"})( false?undefined:{name:\"k9yka6\",styles:\"width:100%;height:100%;postion:relative;border-radius:24px;&>img{object-fit:cover;postion:absolute;width:100%;height:100%;border-radius:24px;background:red;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXRUJcXFdlYnNpdGVfMjAyMVxccm5iXFxwYWNrYWdlc1xcZGVmYXVsdC10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxoZWFkaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFENEIiLCJmaWxlIjoiRDpcXFdFQlxcV2Vic2l0ZV8yMDIxXFxybmJcXHBhY2thZ2VzXFxkZWZhdWx0LXRoZW1lXFxzcmNcXGNvbXBvbmVudHNcXGhlYWRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCwgR2xvYmFsLCBzdHlsZWQsIGNzcyB9IGZyb20gXCJmcm9udGl0eVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwiQGZyb250aXR5L2NvbXBvbmVudHMvbGlua1wiO1xyXG5pbXBvcnQgbGlzdCBmcm9tIFwiLi9saXN0XCI7XHJcblxyXG4vKlxyXG4gICAgUGxhbiA6XHJcbiAgICAxLiBNZW5kYXBhdGthbiBnYW1iYXIgZGFyaSAzIHBvc3QgdGVyYWtoaXJcclxuICAgIDIuIE1lcnViYWggc2VzdWFpIGRlbmdhbiBkZXNhaW4gYXdhbCBcclxuICAgIE1lbWJ1YXQgaGVhZGluZyBuZXdzIG1lbmphZGkgc2xpZGVzaG93IC0+IHRlcnV0YW1hIHVudHVrIHRhbXBpbGFuIGhwXHJcbiovXHJcblxyXG4vL1N0YXRlIHVudHVrIEp1ZHVsXHJcblxyXG5jb25zdCBIZWFkaW5nID0gKHsgc3RhdGUgfSkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkaW5nQ29udGFpbmVyPlxyXG4gICAgICB7ZGF0YS5pdGVtcy5tYXAoKGxpc3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGVhZGluZ05ld3MgPSBzdGF0ZS5zb3VyY2VbbGlzdC50eXBlXVtsaXN0LmlkXTtcclxuICAgICAgICBpZiAoaW5kZXggPD0gNCAgKSB7XHJcbiAgICAgICAgICBjb25zdCBmbWVkaWEgPSBoZWFkaW5nTmV3cy5mZWF0dXJlZF9tZWRpYTtcclxuICAgICAgICAgIGlmIChmbWVkaWEgPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBpY3QgPSBzdGF0ZS5zb3VyY2UuYXR0YWNobWVudFtmbWVkaWFdLnNvdXJjZV91cmw7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPEhlYWROZXdzIGtleT17bGlzdC5pZH0gbGluaz17aGVhZGluZ05ld3MubGlua30+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VOZXdzIGNsYXNzPVwiaGVhZGluZ0ltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwaWN0fSBhbHQ9XCJnYW1iYXItaGVhZGluZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0ltYWdlTmV3cz5cclxuICAgICAgICAgICAgICAgIDxUaXRsZT57aGVhZGluZ05ld3MudGl0bGUucmVuZGVyZWR9PC9UaXRsZT5cclxuICAgICAgICAgICAgICA8L0hlYWROZXdzPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSl9XHJcbiAgICA8L0hlYWRpbmdDb250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoSGVhZGluZyk7XHJcbmNvbnN0IEhlYWRpbmdDb250YWluZXIgPSBzdHlsZWQuaGVhZGVyYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxMjhweDtcclxuYDtcclxuY29uc3QgSGVhZE5ld3MgPSBzdHlsZWQuYWBcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXgtd2lkdGg6IDM4NXB4O1xyXG4gIGhlaWdodDogMjU2cHg7XHJcbiAgbWFyZ2luOiAyNHB4O1xyXG5gO1xyXG5jb25zdCBJbWFnZU5ld3MgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3N0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICYgPiBpbWcge1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBwb3N0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oM2BcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbWFyZ2luOiAtODBweCAyMHB4IDA7XHJcbmBcclxuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const Title=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"h3\", false?undefined:{target:\"e1ee11if0\",label:\"Title\"})( false?undefined:{name:\"1gy1jui\",styles:\"font-size:18px;margin:-80px 20px 0\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXRUJcXFdlYnNpdGVfMjAyMVxccm5iXFxwYWNrYWdlc1xcZGVmYXVsdC10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxoZWFkaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9FdUIiLCJmaWxlIjoiRDpcXFdFQlxcV2Vic2l0ZV8yMDIxXFxybmJcXHBhY2thZ2VzXFxkZWZhdWx0LXRoZW1lXFxzcmNcXGNvbXBvbmVudHNcXGhlYWRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCwgR2xvYmFsLCBzdHlsZWQsIGNzcyB9IGZyb20gXCJmcm9udGl0eVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwiQGZyb250aXR5L2NvbXBvbmVudHMvbGlua1wiO1xyXG5pbXBvcnQgbGlzdCBmcm9tIFwiLi9saXN0XCI7XHJcblxyXG4vKlxyXG4gICAgUGxhbiA6XHJcbiAgICAxLiBNZW5kYXBhdGthbiBnYW1iYXIgZGFyaSAzIHBvc3QgdGVyYWtoaXJcclxuICAgIDIuIE1lcnViYWggc2VzdWFpIGRlbmdhbiBkZXNhaW4gYXdhbCBcclxuICAgIE1lbWJ1YXQgaGVhZGluZyBuZXdzIG1lbmphZGkgc2xpZGVzaG93IC0+IHRlcnV0YW1hIHVudHVrIHRhbXBpbGFuIGhwXHJcbiovXHJcblxyXG4vL1N0YXRlIHVudHVrIEp1ZHVsXHJcblxyXG5jb25zdCBIZWFkaW5nID0gKHsgc3RhdGUgfSkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkaW5nQ29udGFpbmVyPlxyXG4gICAgICB7ZGF0YS5pdGVtcy5tYXAoKGxpc3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGVhZGluZ05ld3MgPSBzdGF0ZS5zb3VyY2VbbGlzdC50eXBlXVtsaXN0LmlkXTtcclxuICAgICAgICBpZiAoaW5kZXggPD0gNCAgKSB7XHJcbiAgICAgICAgICBjb25zdCBmbWVkaWEgPSBoZWFkaW5nTmV3cy5mZWF0dXJlZF9tZWRpYTtcclxuICAgICAgICAgIGlmIChmbWVkaWEgPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBpY3QgPSBzdGF0ZS5zb3VyY2UuYXR0YWNobWVudFtmbWVkaWFdLnNvdXJjZV91cmw7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPEhlYWROZXdzIGtleT17bGlzdC5pZH0gbGluaz17aGVhZGluZ05ld3MubGlua30+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VOZXdzIGNsYXNzPVwiaGVhZGluZ0ltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwaWN0fSBhbHQ9XCJnYW1iYXItaGVhZGluZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0ltYWdlTmV3cz5cclxuICAgICAgICAgICAgICAgIDxUaXRsZT57aGVhZGluZ05ld3MudGl0bGUucmVuZGVyZWR9PC9UaXRsZT5cclxuICAgICAgICAgICAgICA8L0hlYWROZXdzPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSl9XHJcbiAgICA8L0hlYWRpbmdDb250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoSGVhZGluZyk7XHJcbmNvbnN0IEhlYWRpbmdDb250YWluZXIgPSBzdHlsZWQuaGVhZGVyYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxMjhweDtcclxuYDtcclxuY29uc3QgSGVhZE5ld3MgPSBzdHlsZWQuYWBcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXgtd2lkdGg6IDM4NXB4O1xyXG4gIGhlaWdodDogMjU2cHg7XHJcbiAgbWFyZ2luOiAyNHB4O1xyXG5gO1xyXG5jb25zdCBJbWFnZU5ld3MgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3N0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICYgPiBpbWcge1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBwb3N0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oM2BcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbWFyZ2luOiAtODBweCAyMHB4IDA7XHJcbmBcclxuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9kZWZhdWx0LXRoZW1lL3NyYy9jb21wb25lbnRzL2hlYWRpbmcuanM/YTcyOCJdLCJuYW1lcyI6WyJIZWFkaW5nIiwic3RhdGUiLCJkYXRhIiwic291cmNlIiwiZ2V0Iiwicm91dGVyIiwibGluayIsIml0ZW1zIiwibWFwIiwibGlzdCIsImluZGV4IiwiaGVhZGluZ05ld3MiLCJ0eXBlIiwiaWQiLCJmbWVkaWEiLCJmZWF0dXJlZF9tZWRpYSIsInBpY3QiLCJhdHRhY2htZW50Iiwic291cmNlX3VybCIsInRpdGxlIiwicmVuZGVyZWQiLCJjb25uZWN0IiwiSGVhZGluZ0NvbnRhaW5lciIsIkhlYWROZXdzIiwiSW1hZ2VOZXdzIiwiVGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O3FSQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFLENBRUE7QUFFQSxLQUFNQSxRQUFPLENBQUcsQ0FBQyxDQUFFQyxLQUFGLENBQUQsR0FBZSxDQUM3QixLQUFNQyxLQUFJLENBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxHQUFiLENBQWlCSCxLQUFLLENBQUNJLE1BQU4sQ0FBYUMsSUFBOUIsQ0FBYixDQUVBLE1BQ0Usd0VBQUMsZ0JBQUQsV0FDR0osSUFBSSxDQUFDSyxLQUFMLENBQVdDLEdBQVgsQ0FBZSxDQUFDQyxJQUFELENBQU9DLEtBQVAsR0FBaUIsQ0FDL0IsS0FBTUMsWUFBVyxDQUFHVixLQUFLLENBQUNFLE1BQU4sQ0FBYU0sSUFBSSxDQUFDRyxJQUFsQixFQUF3QkgsSUFBSSxDQUFDSSxFQUE3QixDQUFwQixDQUNBLEdBQUlILEtBQUssRUFBSSxDQUFiLENBQWtCLENBQ2hCLEtBQU1JLE9BQU0sQ0FBR0gsV0FBVyxDQUFDSSxjQUEzQixDQUNBLEdBQUlELE1BQU0sQ0FBRyxDQUFiLENBQWdCLENBQ2QsS0FBTUUsS0FBSSxDQUFHZixLQUFLLENBQUNFLE1BQU4sQ0FBYWMsVUFBYixDQUF3QkgsTUFBeEIsRUFBZ0NJLFVBQTdDLENBQ0EsTUFDRSx5RUFBQyxRQUFELEVBQXdCLElBQUksQ0FBRVAsV0FBVyxDQUFDTCxJQUExQyxXQUNFLHVFQUFDLFNBQUQsRUFBVyxLQUFLLENBQUMsY0FBakIsVUFDRSw4RUFBSyxHQUFHLENBQUVVLElBQVYsQ0FBZ0IsR0FBRyxDQUFDLGdCQUFwQixFQURGLEVBREYsQ0FJRSx1RUFBQyxLQUFELFdBQVFMLFdBQVcsQ0FBQ1EsS0FBWixDQUFrQkMsUUFBMUIsRUFKRixHQUFlWCxJQUFJLENBQUNJLEVBQXBCLENBREYsQ0FRRCxDQUNGLENBQ0YsQ0FoQkEsQ0FESCxFQURGLENBcUJELENBeEJELENBMEJlUSx1SEFBTyxDQUFDckIsT0FBRCxDQUF0QixFQUNBLEtBQU1zQixpQkFBZ0IsMHZHQUF0QixDQU1BLEtBQU1DLFNBQVEsOHRHQUFkLENBTUEsS0FBTUMsVUFBUyx3MEdBQWYsQ0FlQSxLQUFNQyxNQUFLLHlzR0FBWCIsImZpbGUiOiIuL3BhY2thZ2VzL2RlZmF1bHQtdGhlbWUvc3JjL2NvbXBvbmVudHMvaGVhZGluZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCBHbG9iYWwsIHN0eWxlZCwgY3NzIH0gZnJvbSBcImZyb250aXR5XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9saW5rXCI7XHJcbmltcG9ydCBsaXN0IGZyb20gXCIuL2xpc3RcIjtcclxuXHJcbi8qXHJcbiAgICBQbGFuIDpcclxuICAgIDEuIE1lbmRhcGF0a2FuIGdhbWJhciBkYXJpIDMgcG9zdCB0ZXJha2hpclxyXG4gICAgMi4gTWVydWJhaCBzZXN1YWkgZGVuZ2FuIGRlc2FpbiBhd2FsIFxyXG4gICAgTWVtYnVhdCBoZWFkaW5nIG5ld3MgbWVuamFkaSBzbGlkZXNob3cgLT4gdGVydXRhbWEgdW50dWsgdGFtcGlsYW4gaHBcclxuKi9cclxuXHJcbi8vU3RhdGUgdW50dWsgSnVkdWxcclxuXHJcbmNvbnN0IEhlYWRpbmcgPSAoeyBzdGF0ZSB9KSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEhlYWRpbmdDb250YWluZXI+XHJcbiAgICAgIHtkYXRhLml0ZW1zLm1hcCgobGlzdCwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBoZWFkaW5nTmV3cyA9IHN0YXRlLnNvdXJjZVtsaXN0LnR5cGVdW2xpc3QuaWRdO1xyXG4gICAgICAgIGlmIChpbmRleCA8PSA0ICApIHtcclxuICAgICAgICAgIGNvbnN0IGZtZWRpYSA9IGhlYWRpbmdOZXdzLmZlYXR1cmVkX21lZGlhO1xyXG4gICAgICAgICAgaWYgKGZtZWRpYSA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgcGljdCA9IHN0YXRlLnNvdXJjZS5hdHRhY2htZW50W2ZtZWRpYV0uc291cmNlX3VybDtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8SGVhZE5ld3Mga2V5PXtsaXN0LmlkfSBsaW5rPXtoZWFkaW5nTmV3cy5saW5rfT5cclxuICAgICAgICAgICAgICAgIDxJbWFnZU5ld3MgY2xhc3M9XCJoZWFkaW5nSW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3BpY3R9IGFsdD1cImdhbWJhci1oZWFkaW5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvSW1hZ2VOZXdzPlxyXG4gICAgICAgICAgICAgICAgPFRpdGxlPntoZWFkaW5nTmV3cy50aXRsZS5yZW5kZXJlZH08L1RpdGxlPlxyXG4gICAgICAgICAgICAgIDwvSGVhZE5ld3M+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KX1cclxuICAgIDwvSGVhZGluZ0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChIZWFkaW5nKTtcclxuY29uc3QgSGVhZGluZ0NvbnRhaW5lciA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDEyOHB4O1xyXG5gO1xyXG5jb25zdCBIZWFkTmV3cyA9IHN0eWxlZC5hYFxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1heC13aWR0aDogMzg1cHg7XHJcbiAgaGVpZ2h0OiAyNTZweDtcclxuICBtYXJnaW46IDI0cHg7XHJcbmA7XHJcbmNvbnN0IEltYWdlTmV3cyA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc3Rpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgJiA+IGltZyB7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHBvc3Rpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmVkO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgzYFxyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW46IC04MHB4IDIwcHggMDtcclxuYFxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/default-theme/src/components/heading.js\n");

/***/ })

})