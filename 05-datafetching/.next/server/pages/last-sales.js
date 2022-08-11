module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/last-sales.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/last-sales.js":
/*!*****************************!*\
  !*** ./pages/last-sales.js ***!
  \*****************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/ricardo/Desktop/next-React-udemyCourse/05-datafetching/pages/last-sales.js\";\n\n\n\nfunction LastSalesPage(props) {\n  const {\n    0: sales,\n    1: setSales\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(props.sales); //first state comes from getStatic\n  // const [loading, setLoading] = useState(false)\n\n  const {\n    data,\n    error\n  } = swr__WEBPACK_IMPORTED_MODULE_2___default()(\"https://nextjs-course-f25e2-default-rtdb.firebaseio.com/sales.json\", url => fetch(url).then(res => res.json()));\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    if (!data) return;\n    const transformedSales = [];\n\n    for (const key in data) {\n      transformedSales.push({\n        id: key,\n        username: data[key].username,\n        volume: data[key].volume\n      });\n    }\n\n    setSales(transformedSales);\n  }, [data]); // useEffect(() => {\n  //   setLoading(true);\n  //   fetch(\"https://nextjs-course-f25e2-default-rtdb.firebaseio.com/sales.json\")\n  //     .then((res) => res.json())\n  //     .then((data) => {\n  //       //firebase returns in a form of object. Transform to array\n  //       const transformedSales = [];\n  //       for (const key in data) {\n  //         transformedSales.push({\n  //           id: key,\n  //           username: data[key].username,\n  //           volume: data[key].volume,\n  //         });\n  //       }\n  //       setSales(transformedSales);\n  //       setLoading(false);\n  //     });\n  // }, []);\n\n  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n    children: \"Error\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 21\n  }, this);\n  if (!data && !sales) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n    children: \"Loading ....\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 31\n  }, this);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n    children: sales.map(sale => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: [sale.username, \" - $\", sale.volume]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 11\n      }, this)\n    }, sale.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }, this))\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 52,\n    columnNumber: 5\n  }, this);\n} //combinining getStatic with client side fetching\n\n\nasync function getStaticProps() {\n  const response = await fetch(\"https://nextjs-course-f25e2-default-rtdb.firebaseio.com/sales.json\");\n  const data = response.json(); //firebase returns in a form of object. Transform to array\n\n  const transformedSales = [];\n\n  for (const key in data) {\n    transformedSales.push({\n      id: key,\n      username: data[key].username,\n      volume: data[key].volume\n    });\n  }\n\n  return {\n    props: {\n      sales: transformedSales\n    },\n    revalidate: 10\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (LastSalesPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sYXN0LXNhbGVzLmpzPzA1MWQiXSwibmFtZXMiOlsiTGFzdFNhbGVzUGFnZSIsInByb3BzIiwic2FsZXMiLCJzZXRTYWxlcyIsInVzZVN0YXRlIiwiZGF0YSIsImVycm9yIiwidXNlU1dSIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInVzZUVmZmVjdCIsInRyYW5zZm9ybWVkU2FsZXMiLCJrZXkiLCJwdXNoIiwiaWQiLCJ1c2VybmFtZSIsInZvbHVtZSIsIm1hcCIsInNhbGUiLCJnZXRTdGF0aWNQcm9wcyIsInJlc3BvbnNlIiwicmV2YWxpZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDNUIsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyxzREFBUSxDQUFDSCxLQUFLLENBQUNDLEtBQVAsQ0FBbEMsQ0FENEIsQ0FDcUI7QUFDakQ7O0FBRUEsUUFBTTtBQUFFRyxRQUFGO0FBQVFDO0FBQVIsTUFBa0JDLDBDQUFNLENBQzVCLG9FQUQ0QixFQUUzQkMsR0FBRCxJQUFTQyxLQUFLLENBQUNELEdBQUQsQ0FBTCxDQUFXRSxJQUFYLENBQWlCQyxHQUFELElBQVNBLEdBQUcsQ0FBQ0MsSUFBSixFQUF6QixDQUZtQixDQUE5QjtBQUtBQyx5REFBUyxDQUFDLE1BQU07QUFDZCxRQUFJLENBQUNSLElBQUwsRUFBVztBQUVYLFVBQU1TLGdCQUFnQixHQUFHLEVBQXpCOztBQUNBLFNBQUssTUFBTUMsR0FBWCxJQUFrQlYsSUFBbEIsRUFBd0I7QUFDdEJTLHNCQUFnQixDQUFDRSxJQUFqQixDQUFzQjtBQUNwQkMsVUFBRSxFQUFFRixHQURnQjtBQUVwQkcsZ0JBQVEsRUFBRWIsSUFBSSxDQUFDVSxHQUFELENBQUosQ0FBVUcsUUFGQTtBQUdwQkMsY0FBTSxFQUFFZCxJQUFJLENBQUNVLEdBQUQsQ0FBSixDQUFVSTtBQUhFLE9BQXRCO0FBS0Q7O0FBRURoQixZQUFRLENBQUNXLGdCQUFELENBQVI7QUFDRCxHQWJRLEVBYU4sQ0FBQ1QsSUFBRCxDQWJNLENBQVQsQ0FUNEIsQ0F3QjVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFJQyxLQUFKLEVBQVcsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNYLE1BQUksQ0FBQ0QsSUFBRCxJQUFTLENBQUNILEtBQWQsRUFBcUIsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUVyQixzQkFDRTtBQUFBLGNBQ0dBLEtBQUssQ0FBQ2tCLEdBQU4sQ0FBV0MsSUFBRCxpQkFDVDtBQUFBLDZCQUNFO0FBQUEsbUJBQ0dBLElBQUksQ0FBQ0gsUUFEUixVQUNzQkcsSUFBSSxDQUFDRixNQUQzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixPQUFTRSxJQUFJLENBQUNKLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBV0QsQyxDQUVEOzs7QUFDTyxlQUFlSyxjQUFmLEdBQWdDO0FBQ3JDLFFBQU1DLFFBQVEsR0FBRyxNQUFNZCxLQUFLLENBQzFCLG9FQUQwQixDQUE1QjtBQUdBLFFBQU1KLElBQUksR0FBR2tCLFFBQVEsQ0FBQ1gsSUFBVCxFQUFiLENBSnFDLENBTXJDOztBQUNBLFFBQU1FLGdCQUFnQixHQUFHLEVBQXpCOztBQUNBLE9BQUssTUFBTUMsR0FBWCxJQUFrQlYsSUFBbEIsRUFBd0I7QUFDdEJTLG9CQUFnQixDQUFDRSxJQUFqQixDQUFzQjtBQUNwQkMsUUFBRSxFQUFFRixHQURnQjtBQUVwQkcsY0FBUSxFQUFFYixJQUFJLENBQUNVLEdBQUQsQ0FBSixDQUFVRyxRQUZBO0FBR3BCQyxZQUFNLEVBQUVkLElBQUksQ0FBQ1UsR0FBRCxDQUFKLENBQVVJO0FBSEUsS0FBdEI7QUFLRDs7QUFFRCxTQUFPO0FBQ0xsQixTQUFLLEVBQUU7QUFDTEMsV0FBSyxFQUFFWTtBQURGLEtBREY7QUFJTFUsY0FBVSxFQUFFO0FBSlAsR0FBUDtBQU1EO0FBRWN4Qiw0RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2xhc3Qtc2FsZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcblxuZnVuY3Rpb24gTGFzdFNhbGVzUGFnZShwcm9wcykge1xuICBjb25zdCBbc2FsZXMsIHNldFNhbGVzXSA9IHVzZVN0YXRlKHByb3BzLnNhbGVzKTsgLy9maXJzdCBzdGF0ZSBjb21lcyBmcm9tIGdldFN0YXRpY1xuICAvLyBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXG4gICAgXCJodHRwczovL25leHRqcy1jb3Vyc2UtZjI1ZTItZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tL3NhbGVzLmpzb25cIixcbiAgICAodXJsKSA9PiBmZXRjaCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZGF0YSkgcmV0dXJuO1xuXG4gICAgY29uc3QgdHJhbnNmb3JtZWRTYWxlcyA9IFtdO1xuICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcbiAgICAgIHRyYW5zZm9ybWVkU2FsZXMucHVzaCh7XG4gICAgICAgIGlkOiBrZXksXG4gICAgICAgIHVzZXJuYW1lOiBkYXRhW2tleV0udXNlcm5hbWUsXG4gICAgICAgIHZvbHVtZTogZGF0YVtrZXldLnZvbHVtZSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldFNhbGVzKHRyYW5zZm9ybWVkU2FsZXMpO1xuICB9LCBbZGF0YV0pO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgLy8gICBmZXRjaChcImh0dHBzOi8vbmV4dGpzLWNvdXJzZS1mMjVlMi1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vc2FsZXMuanNvblwiKVxuICAvLyAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgLy8gICAgIC50aGVuKChkYXRhKSA9PiB7XG4gIC8vICAgICAgIC8vZmlyZWJhc2UgcmV0dXJucyBpbiBhIGZvcm0gb2Ygb2JqZWN0LiBUcmFuc2Zvcm0gdG8gYXJyYXlcbiAgLy8gICAgICAgY29uc3QgdHJhbnNmb3JtZWRTYWxlcyA9IFtdO1xuICAvLyAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XG4gIC8vICAgICAgICAgdHJhbnNmb3JtZWRTYWxlcy5wdXNoKHtcbiAgLy8gICAgICAgICAgIGlkOiBrZXksXG4gIC8vICAgICAgICAgICB1c2VybmFtZTogZGF0YVtrZXldLnVzZXJuYW1lLFxuICAvLyAgICAgICAgICAgdm9sdW1lOiBkYXRhW2tleV0udm9sdW1lLFxuICAvLyAgICAgICAgIH0pO1xuICAvLyAgICAgICB9XG5cbiAgLy8gICAgICAgc2V0U2FsZXModHJhbnNmb3JtZWRTYWxlcyk7XG4gIC8vICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAvLyAgICAgfSk7XG4gIC8vIH0sIFtdKTtcblxuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvcjwvcD47XG4gIGlmICghZGF0YSAmJiAhc2FsZXMpIHJldHVybiA8cD5Mb2FkaW5nIC4uLi48L3A+O1xuXG4gIHJldHVybiAoXG4gICAgPHVsPlxuICAgICAge3NhbGVzLm1hcCgoc2FsZSkgPT4gKFxuICAgICAgICA8bGkga2V5PXtzYWxlLmlkfT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIHtzYWxlLnVzZXJuYW1lfSAtICR7c2FsZS52b2x1bWV9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgKTtcbn1cblxuLy9jb21iaW5pbmluZyBnZXRTdGF0aWMgd2l0aCBjbGllbnQgc2lkZSBmZXRjaGluZ1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIFwiaHR0cHM6Ly9uZXh0anMtY291cnNlLWYyNWUyLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS9zYWxlcy5qc29uXCJcbiAgKTtcbiAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKTtcblxuICAvL2ZpcmViYXNlIHJldHVybnMgaW4gYSBmb3JtIG9mIG9iamVjdC4gVHJhbnNmb3JtIHRvIGFycmF5XG4gIGNvbnN0IHRyYW5zZm9ybWVkU2FsZXMgPSBbXTtcbiAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgIHRyYW5zZm9ybWVkU2FsZXMucHVzaCh7XG4gICAgICBpZDoga2V5LFxuICAgICAgdXNlcm5hbWU6IGRhdGFba2V5XS51c2VybmFtZSxcbiAgICAgIHZvbHVtZTogZGF0YVtrZXldLnZvbHVtZSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHNhbGVzOiB0cmFuc2Zvcm1lZFNhbGVzLFxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMTAsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IExhc3RTYWxlc1BhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/last-sales.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"swr\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd3JcIj9jMjg5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InN3ci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3clwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///swr\n");

/***/ })

/******/ });