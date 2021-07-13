webpackHotUpdate("rnb",{

/***/ "./packages/default-theme/src/components/heading.js":
/*!**********************************************************!*\
  !*** ./packages/default-theme/src/components/heading.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _frontity_components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/components/link */ \"./node_modules/@frontity/components/link/index.tsx\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list */ \"./packages/default-theme/src/components/list.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}/*\r\n    Plan :\r\n    1. Mendapatkan gambar dari 3 post terakhir\r\n    2. Merubah sesuai dengan desain awal \r\n    Membuat heading news menjadi slideshow -> terutama untuk tampilan hp\r\n*/ //State untuk Judul\nconst Heading=({state})=>{const data=state.source.get(state.router.link);return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(HeadingContainer,{children:data.items.map((list,index)=>{const headingNews=state.source[list.type][list.id];if(index<=4){const fmedia=headingNews.featured_media;if(fmedia>0){const pict=state.source.attachment[fmedia].source_url;return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxs\"])(HeadNews,{link:headingNews.link,children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(ImageNews,{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"img\",{src:pict,alt:\"gambar-heading\"})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(Title,{children:headingNews.title.rendered})]},list.id);}}})});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Heading));const HeadingContainer=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"header\", false?undefined:{target:\"e1ee11if3\",label:\"HeadingContainer\"})( false?undefined:{name:\"11o2425\",styles:\"display:flex;flex-wrap:wrap;justify-content:center;padding-top:128px\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXRUJcXFdlYnNpdGVfMjAyMVxccm5iXFxwYWNrYWdlc1xcZGVmYXVsdC10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxoZWFkaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDc0MiLCJmaWxlIjoiRDpcXFdFQlxcV2Vic2l0ZV8yMDIxXFxybmJcXHBhY2thZ2VzXFxkZWZhdWx0LXRoZW1lXFxzcmNcXGNvbXBvbmVudHNcXGhlYWRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCwgR2xvYmFsLCBzdHlsZWQsIGNzcyB9IGZyb20gXCJmcm9udGl0eVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwiQGZyb250aXR5L2NvbXBvbmVudHMvbGlua1wiO1xyXG5pbXBvcnQgbGlzdCBmcm9tIFwiLi9saXN0XCI7XHJcblxyXG4vKlxyXG4gICAgUGxhbiA6XHJcbiAgICAxLiBNZW5kYXBhdGthbiBnYW1iYXIgZGFyaSAzIHBvc3QgdGVyYWtoaXJcclxuICAgIDIuIE1lcnViYWggc2VzdWFpIGRlbmdhbiBkZXNhaW4gYXdhbCBcclxuICAgIE1lbWJ1YXQgaGVhZGluZyBuZXdzIG1lbmphZGkgc2xpZGVzaG93IC0+IHRlcnV0YW1hIHVudHVrIHRhbXBpbGFuIGhwXHJcbiovXHJcblxyXG4vL1N0YXRlIHVudHVrIEp1ZHVsXHJcblxyXG5jb25zdCBIZWFkaW5nID0gKHsgc3RhdGUgfSkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkaW5nQ29udGFpbmVyPlxyXG4gICAgICB7ZGF0YS5pdGVtcy5tYXAoKGxpc3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGVhZGluZ05ld3MgPSBzdGF0ZS5zb3VyY2VbbGlzdC50eXBlXVtsaXN0LmlkXTtcclxuICAgICAgICBpZiAoaW5kZXggPD0gNCAgKSB7XHJcbiAgICAgICAgICBjb25zdCBmbWVkaWEgPSBoZWFkaW5nTmV3cy5mZWF0dXJlZF9tZWRpYTtcclxuICAgICAgICAgIGlmIChmbWVkaWEgPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBpY3QgPSBzdGF0ZS5zb3VyY2UuYXR0YWNobWVudFtmbWVkaWFdLnNvdXJjZV91cmw7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPEhlYWROZXdzIGtleT17bGlzdC5pZH0gbGluaz17aGVhZGluZ05ld3MubGlua30+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VOZXdzPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGljdH0gYWx0PVwiZ2FtYmFyLWhlYWRpbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9JbWFnZU5ld3M+XHJcbiAgICAgICAgICAgICAgICA8VGl0bGU+e2hlYWRpbmdOZXdzLnRpdGxlLnJlbmRlcmVkfTwvVGl0bGU+XHJcbiAgICAgICAgICAgICAgPC9IZWFkTmV3cz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pfVxyXG4gICAgPC9IZWFkaW5nQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEhlYWRpbmcpO1xyXG5jb25zdCBIZWFkaW5nQ29udGFpbmVyID0gc3R5bGVkLmhlYWRlcmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMTI4cHg7XHJcbmA7XHJcbmNvbnN0IEhlYWROZXdzID0gc3R5bGVkLmFgXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWF4LXdpZHRoOiAzODVweDtcclxuICBoZWlnaHQ6IDI1NnB4O1xyXG4gIG1hcmdpbjogMjRweDtcclxuYDtcclxuY29uc3QgSW1hZ2VOZXdzID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAmID4gaW1nIHtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgcG9zdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgfVxyXG4gICYgPiBpbWc6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgcG9zdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgzYFxyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW4tdG9wOiAtODBweDtcclxuYFxyXG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const HeadNews=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"a\", false?undefined:{target:\"e1ee11if2\",label:\"HeadNews\"})( false?undefined:{name:\"gj5yxg\",styles:\"display:block;max-width:385px;height:256px;margin:24px\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXRUJcXFdlYnNpdGVfMjAyMVxccm5iXFxwYWNrYWdlc1xcZGVmYXVsdC10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxoZWFkaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDeUIiLCJmaWxlIjoiRDpcXFdFQlxcV2Vic2l0ZV8yMDIxXFxybmJcXHBhY2thZ2VzXFxkZWZhdWx0LXRoZW1lXFxzcmNcXGNvbXBvbmVudHNcXGhlYWRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCwgR2xvYmFsLCBzdHlsZWQsIGNzcyB9IGZyb20gXCJmcm9udGl0eVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwiQGZyb250aXR5L2NvbXBvbmVudHMvbGlua1wiO1xyXG5pbXBvcnQgbGlzdCBmcm9tIFwiLi9saXN0XCI7XHJcblxyXG4vKlxyXG4gICAgUGxhbiA6XHJcbiAgICAxLiBNZW5kYXBhdGthbiBnYW1iYXIgZGFyaSAzIHBvc3QgdGVyYWtoaXJcclxuICAgIDIuIE1lcnViYWggc2VzdWFpIGRlbmdhbiBkZXNhaW4gYXdhbCBcclxuICAgIE1lbWJ1YXQgaGVhZGluZyBuZXdzIG1lbmphZGkgc2xpZGVzaG93IC0+IHRlcnV0YW1hIHVudHVrIHRhbXBpbGFuIGhwXHJcbiovXHJcblxyXG4vL1N0YXRlIHVudHVrIEp1ZHVsXHJcblxyXG5jb25zdCBIZWFkaW5nID0gKHsgc3RhdGUgfSkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkaW5nQ29udGFpbmVyPlxyXG4gICAgICB7ZGF0YS5pdGVtcy5tYXAoKGxpc3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGVhZGluZ05ld3MgPSBzdGF0ZS5zb3VyY2VbbGlzdC50eXBlXVtsaXN0LmlkXTtcclxuICAgICAgICBpZiAoaW5kZXggPD0gNCAgKSB7XHJcbiAgICAgICAgICBjb25zdCBmbWVkaWEgPSBoZWFkaW5nTmV3cy5mZWF0dXJlZF9tZWRpYTtcclxuICAgICAgICAgIGlmIChmbWVkaWEgPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBpY3QgPSBzdGF0ZS5zb3VyY2UuYXR0YWNobWVudFtmbWVkaWFdLnNvdXJjZV91cmw7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPEhlYWROZXdzIGtleT17bGlzdC5pZH0gbGluaz17aGVhZGluZ05ld3MubGlua30+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VOZXdzPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGljdH0gYWx0PVwiZ2FtYmFyLWhlYWRpbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9JbWFnZU5ld3M+XHJcbiAgICAgICAgICAgICAgICA8VGl0bGU+e2hlYWRpbmdOZXdzLnRpdGxlLnJlbmRlcmVkfTwvVGl0bGU+XHJcbiAgICAgICAgICAgICAgPC9IZWFkTmV3cz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pfVxyXG4gICAgPC9IZWFkaW5nQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEhlYWRpbmcpO1xyXG5jb25zdCBIZWFkaW5nQ29udGFpbmVyID0gc3R5bGVkLmhlYWRlcmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMTI4cHg7XHJcbmA7XHJcbmNvbnN0IEhlYWROZXdzID0gc3R5bGVkLmFgXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWF4LXdpZHRoOiAzODVweDtcclxuICBoZWlnaHQ6IDI1NnB4O1xyXG4gIG1hcmdpbjogMjRweDtcclxuYDtcclxuY29uc3QgSW1hZ2VOZXdzID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAmID4gaW1nIHtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgcG9zdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgfVxyXG4gICYgPiBpbWc6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgcG9zdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgzYFxyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW4tdG9wOiAtODBweDtcclxuYFxyXG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const ImageNews=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"e1ee11if1\",label:\"ImageNews\"})( false?undefined:{name:\"10eumvb\",styles:\"width:100%;height:100%;postion:relative;border-radius:24px;&>img{object-fit:cover;postion:absolute;width:100%;height:100%;border-radius:24px;}&>img::after{content:\\\"\\\";display:block;left:0;top:0;border-radius:24px;postion:absolute;width:100%;height:100%;background:black;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXRUJcXFdlYnNpdGVfMjAyMVxccm5iXFxwYWNrYWdlc1xcZGVmYXVsdC10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxoZWFkaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFENEIiLCJmaWxlIjoiRDpcXFdFQlxcV2Vic2l0ZV8yMDIxXFxybmJcXHBhY2thZ2VzXFxkZWZhdWx0LXRoZW1lXFxzcmNcXGNvbXBvbmVudHNcXGhlYWRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCwgR2xvYmFsLCBzdHlsZWQsIGNzcyB9IGZyb20gXCJmcm9udGl0eVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwiQGZyb250aXR5L2NvbXBvbmVudHMvbGlua1wiO1xyXG5pbXBvcnQgbGlzdCBmcm9tIFwiLi9saXN0XCI7XHJcblxyXG4vKlxyXG4gICAgUGxhbiA6XHJcbiAgICAxLiBNZW5kYXBhdGthbiBnYW1iYXIgZGFyaSAzIHBvc3QgdGVyYWtoaXJcclxuICAgIDIuIE1lcnViYWggc2VzdWFpIGRlbmdhbiBkZXNhaW4gYXdhbCBcclxuICAgIE1lbWJ1YXQgaGVhZGluZyBuZXdzIG1lbmphZGkgc2xpZGVzaG93IC0+IHRlcnV0YW1hIHVudHVrIHRhbXBpbGFuIGhwXHJcbiovXHJcblxyXG4vL1N0YXRlIHVudHVrIEp1ZHVsXHJcblxyXG5jb25zdCBIZWFkaW5nID0gKHsgc3RhdGUgfSkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkaW5nQ29udGFpbmVyPlxyXG4gICAgICB7ZGF0YS5pdGVtcy5tYXAoKGxpc3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGVhZGluZ05ld3MgPSBzdGF0ZS5zb3VyY2VbbGlzdC50eXBlXVtsaXN0LmlkXTtcclxuICAgICAgICBpZiAoaW5kZXggPD0gNCAgKSB7XHJcbiAgICAgICAgICBjb25zdCBmbWVkaWEgPSBoZWFkaW5nTmV3cy5mZWF0dXJlZF9tZWRpYTtcclxuICAgICAgICAgIGlmIChmbWVkaWEgPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBpY3QgPSBzdGF0ZS5zb3VyY2UuYXR0YWNobWVudFtmbWVkaWFdLnNvdXJjZV91cmw7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPEhlYWROZXdzIGtleT17bGlzdC5pZH0gbGluaz17aGVhZGluZ05ld3MubGlua30+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VOZXdzPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGljdH0gYWx0PVwiZ2FtYmFyLWhlYWRpbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9JbWFnZU5ld3M+XHJcbiAgICAgICAgICAgICAgICA8VGl0bGU+e2hlYWRpbmdOZXdzLnRpdGxlLnJlbmRlcmVkfTwvVGl0bGU+XHJcbiAgICAgICAgICAgICAgPC9IZWFkTmV3cz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pfVxyXG4gICAgPC9IZWFkaW5nQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEhlYWRpbmcpO1xyXG5jb25zdCBIZWFkaW5nQ29udGFpbmVyID0gc3R5bGVkLmhlYWRlcmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMTI4cHg7XHJcbmA7XHJcbmNvbnN0IEhlYWROZXdzID0gc3R5bGVkLmFgXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWF4LXdpZHRoOiAzODVweDtcclxuICBoZWlnaHQ6IDI1NnB4O1xyXG4gIG1hcmdpbjogMjRweDtcclxuYDtcclxuY29uc3QgSW1hZ2VOZXdzID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAmID4gaW1nIHtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgcG9zdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgfVxyXG4gICYgPiBpbWc6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgcG9zdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgzYFxyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW4tdG9wOiAtODBweDtcclxuYFxyXG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const Title=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"h3\", false?undefined:{target:\"e1ee11if0\",label:\"Title\"})( false?undefined:{name:\"12k29dj\",styles:\"font-size:18px;margin-top:-80px\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXRUJcXFdlYnNpdGVfMjAyMVxccm5iXFxwYWNrYWdlc1xcZGVmYXVsdC10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxoZWFkaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThFdUIiLCJmaWxlIjoiRDpcXFdFQlxcV2Vic2l0ZV8yMDIxXFxybmJcXHBhY2thZ2VzXFxkZWZhdWx0LXRoZW1lXFxzcmNcXGNvbXBvbmVudHNcXGhlYWRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCwgR2xvYmFsLCBzdHlsZWQsIGNzcyB9IGZyb20gXCJmcm9udGl0eVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwiQGZyb250aXR5L2NvbXBvbmVudHMvbGlua1wiO1xyXG5pbXBvcnQgbGlzdCBmcm9tIFwiLi9saXN0XCI7XHJcblxyXG4vKlxyXG4gICAgUGxhbiA6XHJcbiAgICAxLiBNZW5kYXBhdGthbiBnYW1iYXIgZGFyaSAzIHBvc3QgdGVyYWtoaXJcclxuICAgIDIuIE1lcnViYWggc2VzdWFpIGRlbmdhbiBkZXNhaW4gYXdhbCBcclxuICAgIE1lbWJ1YXQgaGVhZGluZyBuZXdzIG1lbmphZGkgc2xpZGVzaG93IC0+IHRlcnV0YW1hIHVudHVrIHRhbXBpbGFuIGhwXHJcbiovXHJcblxyXG4vL1N0YXRlIHVudHVrIEp1ZHVsXHJcblxyXG5jb25zdCBIZWFkaW5nID0gKHsgc3RhdGUgfSkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkaW5nQ29udGFpbmVyPlxyXG4gICAgICB7ZGF0YS5pdGVtcy5tYXAoKGxpc3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGVhZGluZ05ld3MgPSBzdGF0ZS5zb3VyY2VbbGlzdC50eXBlXVtsaXN0LmlkXTtcclxuICAgICAgICBpZiAoaW5kZXggPD0gNCAgKSB7XHJcbiAgICAgICAgICBjb25zdCBmbWVkaWEgPSBoZWFkaW5nTmV3cy5mZWF0dXJlZF9tZWRpYTtcclxuICAgICAgICAgIGlmIChmbWVkaWEgPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBpY3QgPSBzdGF0ZS5zb3VyY2UuYXR0YWNobWVudFtmbWVkaWFdLnNvdXJjZV91cmw7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPEhlYWROZXdzIGtleT17bGlzdC5pZH0gbGluaz17aGVhZGluZ05ld3MubGlua30+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VOZXdzPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGljdH0gYWx0PVwiZ2FtYmFyLWhlYWRpbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9JbWFnZU5ld3M+XHJcbiAgICAgICAgICAgICAgICA8VGl0bGU+e2hlYWRpbmdOZXdzLnRpdGxlLnJlbmRlcmVkfTwvVGl0bGU+XHJcbiAgICAgICAgICAgICAgPC9IZWFkTmV3cz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pfVxyXG4gICAgPC9IZWFkaW5nQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEhlYWRpbmcpO1xyXG5jb25zdCBIZWFkaW5nQ29udGFpbmVyID0gc3R5bGVkLmhlYWRlcmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMTI4cHg7XHJcbmA7XHJcbmNvbnN0IEhlYWROZXdzID0gc3R5bGVkLmFgXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWF4LXdpZHRoOiAzODVweDtcclxuICBoZWlnaHQ6IDI1NnB4O1xyXG4gIG1hcmdpbjogMjRweDtcclxuYDtcclxuY29uc3QgSW1hZ2VOZXdzID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAmID4gaW1nIHtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgcG9zdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgfVxyXG4gICYgPiBpbWc6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgcG9zdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgzYFxyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW4tdG9wOiAtODBweDtcclxuYFxyXG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9kZWZhdWx0LXRoZW1lL3NyYy9jb21wb25lbnRzL2hlYWRpbmcuanM/YTcyOCJdLCJuYW1lcyI6WyJIZWFkaW5nIiwic3RhdGUiLCJkYXRhIiwic291cmNlIiwiZ2V0Iiwicm91dGVyIiwibGluayIsIml0ZW1zIiwibWFwIiwibGlzdCIsImluZGV4IiwiaGVhZGluZ05ld3MiLCJ0eXBlIiwiaWQiLCJmbWVkaWEiLCJmZWF0dXJlZF9tZWRpYSIsInBpY3QiLCJhdHRhY2htZW50Iiwic291cmNlX3VybCIsInRpdGxlIiwicmVuZGVyZWQiLCJjb25uZWN0IiwiSGVhZGluZ0NvbnRhaW5lciIsIkhlYWROZXdzIiwiSW1hZ2VOZXdzIiwiVGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O3FSQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFLENBRUE7QUFFQSxLQUFNQSxRQUFPLENBQUcsQ0FBQyxDQUFFQyxLQUFGLENBQUQsR0FBZSxDQUM3QixLQUFNQyxLQUFJLENBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxHQUFiLENBQWlCSCxLQUFLLENBQUNJLE1BQU4sQ0FBYUMsSUFBOUIsQ0FBYixDQUVBLE1BQ0Usd0VBQUMsZ0JBQUQsV0FDR0osSUFBSSxDQUFDSyxLQUFMLENBQVdDLEdBQVgsQ0FBZSxDQUFDQyxJQUFELENBQU9DLEtBQVAsR0FBaUIsQ0FDL0IsS0FBTUMsWUFBVyxDQUFHVixLQUFLLENBQUNFLE1BQU4sQ0FBYU0sSUFBSSxDQUFDRyxJQUFsQixFQUF3QkgsSUFBSSxDQUFDSSxFQUE3QixDQUFwQixDQUNBLEdBQUlILEtBQUssRUFBSSxDQUFiLENBQWtCLENBQ2hCLEtBQU1JLE9BQU0sQ0FBR0gsV0FBVyxDQUFDSSxjQUEzQixDQUNBLEdBQUlELE1BQU0sQ0FBRyxDQUFiLENBQWdCLENBQ2QsS0FBTUUsS0FBSSxDQUFHZixLQUFLLENBQUNFLE1BQU4sQ0FBYWMsVUFBYixDQUF3QkgsTUFBeEIsRUFBZ0NJLFVBQTdDLENBQ0EsTUFDRSx5RUFBQyxRQUFELEVBQXdCLElBQUksQ0FBRVAsV0FBVyxDQUFDTCxJQUExQyxXQUNFLHVFQUFDLFNBQUQsV0FDRSw4RUFBSyxHQUFHLENBQUVVLElBQVYsQ0FBZ0IsR0FBRyxDQUFDLGdCQUFwQixFQURGLEVBREYsQ0FJRSx1RUFBQyxLQUFELFdBQVFMLFdBQVcsQ0FBQ1EsS0FBWixDQUFrQkMsUUFBMUIsRUFKRixHQUFlWCxJQUFJLENBQUNJLEVBQXBCLENBREYsQ0FRRCxDQUNGLENBQ0YsQ0FoQkEsQ0FESCxFQURGLENBcUJELENBeEJELENBMEJlUSx1SEFBTyxDQUFDckIsT0FBRCxDQUF0QixFQUNBLEtBQU1zQixpQkFBZ0IscytHQUF0QixDQU1BLEtBQU1DLFNBQVEsMDhHQUFkLENBTUEsS0FBTUMsVUFBUyx3cUhBQWYsQ0F5QkEsS0FBTUMsTUFBSyxrN0dBQVgiLCJmaWxlIjoiLi9wYWNrYWdlcy9kZWZhdWx0LXRoZW1lL3NyYy9jb21wb25lbnRzL2hlYWRpbmcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCwgR2xvYmFsLCBzdHlsZWQsIGNzcyB9IGZyb20gXCJmcm9udGl0eVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwiQGZyb250aXR5L2NvbXBvbmVudHMvbGlua1wiO1xyXG5pbXBvcnQgbGlzdCBmcm9tIFwiLi9saXN0XCI7XHJcblxyXG4vKlxyXG4gICAgUGxhbiA6XHJcbiAgICAxLiBNZW5kYXBhdGthbiBnYW1iYXIgZGFyaSAzIHBvc3QgdGVyYWtoaXJcclxuICAgIDIuIE1lcnViYWggc2VzdWFpIGRlbmdhbiBkZXNhaW4gYXdhbCBcclxuICAgIE1lbWJ1YXQgaGVhZGluZyBuZXdzIG1lbmphZGkgc2xpZGVzaG93IC0+IHRlcnV0YW1hIHVudHVrIHRhbXBpbGFuIGhwXHJcbiovXHJcblxyXG4vL1N0YXRlIHVudHVrIEp1ZHVsXHJcblxyXG5jb25zdCBIZWFkaW5nID0gKHsgc3RhdGUgfSkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkaW5nQ29udGFpbmVyPlxyXG4gICAgICB7ZGF0YS5pdGVtcy5tYXAoKGxpc3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGVhZGluZ05ld3MgPSBzdGF0ZS5zb3VyY2VbbGlzdC50eXBlXVtsaXN0LmlkXTtcclxuICAgICAgICBpZiAoaW5kZXggPD0gNCAgKSB7XHJcbiAgICAgICAgICBjb25zdCBmbWVkaWEgPSBoZWFkaW5nTmV3cy5mZWF0dXJlZF9tZWRpYTtcclxuICAgICAgICAgIGlmIChmbWVkaWEgPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBpY3QgPSBzdGF0ZS5zb3VyY2UuYXR0YWNobWVudFtmbWVkaWFdLnNvdXJjZV91cmw7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPEhlYWROZXdzIGtleT17bGlzdC5pZH0gbGluaz17aGVhZGluZ05ld3MubGlua30+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VOZXdzPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGljdH0gYWx0PVwiZ2FtYmFyLWhlYWRpbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9JbWFnZU5ld3M+XHJcbiAgICAgICAgICAgICAgICA8VGl0bGU+e2hlYWRpbmdOZXdzLnRpdGxlLnJlbmRlcmVkfTwvVGl0bGU+XHJcbiAgICAgICAgICAgICAgPC9IZWFkTmV3cz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pfVxyXG4gICAgPC9IZWFkaW5nQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEhlYWRpbmcpO1xyXG5jb25zdCBIZWFkaW5nQ29udGFpbmVyID0gc3R5bGVkLmhlYWRlcmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMTI4cHg7XHJcbmA7XHJcbmNvbnN0IEhlYWROZXdzID0gc3R5bGVkLmFgXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWF4LXdpZHRoOiAzODVweDtcclxuICBoZWlnaHQ6IDI1NnB4O1xyXG4gIG1hcmdpbjogMjRweDtcclxuYDtcclxuY29uc3QgSW1hZ2VOZXdzID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAmID4gaW1nIHtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgcG9zdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgfVxyXG4gICYgPiBpbWc6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgcG9zdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgzYFxyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW4tdG9wOiAtODBweDtcclxuYFxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/default-theme/src/components/heading.js\n");

/***/ })

})