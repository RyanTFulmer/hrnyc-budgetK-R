/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/ryanfulmer/Desktop/hrnyc-budgetK-R/client/src/index.jsx: Unexpected token (123:22)\\n\\n\\u001b[0m \\u001b[90m 121 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 122 | \\u001b[39m    \\u001b[36mif\\u001b[39m (budgetFormStatus) {\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 123 | \\u001b[39m      formToBeShown \\u001b[33m=\\u001b[39m \\u001b[33m<\\u001b[39m\\u001b[33mInputBudgetForm\\u001b[39m props\\u001b[33m=\\u001b[39m{props} \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m     | \\u001b[39m                      \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 124 | \\u001b[39m      createNewBudgetButton \\u001b[33m=\\u001b[39m (\\u001b[0m\\n\\u001b[0m \\u001b[90m 125 | \\u001b[39m        \\u001b[33m<\\u001b[39m\\u001b[33mbutton\\u001b[39m onSubmit\\u001b[33m=\\u001b[39m{\\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mhandleNewBudgetSubmit}\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 126 | \\u001b[39m          \\u001b[33mCreate\\u001b[39m a \\u001b[36mnew\\u001b[39m budget \\u001b[36mfor\\u001b[39m \\u001b[36mthis\\u001b[39m month\\u001b[33m!\\u001b[39m\\u001b[0m\\n    at Parser._raise (/Users/ryanfulmer/Desktop/hrnyc-budgetK-R/node_modules/@babel/parser/lib/index.js:723:17)\\n    at Parser.raiseWithData (/Users/ryanfulmer/Desktop/hrnyc-budgetK-R/node_modules/@babel/parser/lib/index.js:716:17)\\n    at Parser.raise (/Users/ryanfulmer/Desktop/hrnyc-budgetK-R/node_modules/@babel/parser/lib/index.js:710:17)\\n    at Parser.unexpected (/Users/ryanfulmer/Desktop/hrnyc-budgetK-R/node_modules/@babel/parser/lib/index.js:8610:16)\\n    at Parser.parseExprAtom (/Users/ryanfulmer/Desktop/hrnyc-budgetK-R/node_modules/@babel/parser/lib/index.js:9893:20)\\n    at Parser.parseExprSubscripts (/Users/ryanfulmer/Desktop/hrnyc-budgetK-R/node_modules/@babel/parser/lib/index.js:9479:23)\\n    at Parser.parseMaybeUnary (/Users/ryanfulmer/Desktop/hrnyc-budgetK-R/node_modules/@babel/parser/lib/index.js:9459:21)\\n    at Parser.parseExprOps (/Users/ryanfulmer/Desktop/hrnyc-budgetK-R/node_modules/@babel/parser/lib/index.js:9329:23)\\n    at Parser.parseMaybeConditional (/Users/ryanfulmer/Desktop/hrnyc-budgetK-R/node_modules/@babel/parser/lib/index.js:9302:23)\\n    at Parser.parseMaybeAssign (/Users/ryanfulmer/Desktop/hrnyc-budgetK-R/node_modules/@babel/parser/lib/index.js:9257:21)\\n    at Parser.parseMaybeAssign (/Users/ryanfulmer/Desktop/hrnyc-budgetK-R/node_modules/@babel/parser/lib/index.js:9289:25)\\n    at Parser.parseExpression (/Users/ryanfulmer/Desktop/hrnyc-budgetK-R/node_modules/@babel/parser/lib/index.js:9209:23)\\n    at Parser.parseStatementContent (/Users/ryanfulmer/Desktop/hrnyc-budgetK-R/node_modules/@babel/parser/lib/index.js:11045:23)\\n    at Parser.parseStatement (/Users/ryanfulmer/Desktop/hrnyc-budgetK-R/node_modules/@babel/parser/lib/index.js:10916:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/ryanfulmer/Desktop/hrnyc-budgetK-R/node_modules/@babel/parser/lib/index.js:11490:25)\\n    at Parser.parseBlockBody (/Users/ryanfulmer/Desktop/hrnyc-budgetK-R/node_modules/@babel/parser/lib/index.js:11477:10)\\n    at Parser.parseBlock (/Users/ryanfulmer/Desktop/hrnyc-budgetK-R/node_modules/@babel/parser/lib/index.js:11461:10)\\n    at Parser.parseStatementContent (/Users/ryanfulmer/Desktop/hrnyc-budgetK-R/node_modules/@babel/parser/lib/index.js:10992:21)\\n    at Parser.parseStatement (/Users/ryanfulmer/Desktop/hrnyc-budgetK-R/node_modules/@babel/parser/lib/index.js:10916:17)\\n    at Parser.parseIfStatement (/Users/ryanfulmer/Desktop/hrnyc-budgetK-R/node_modules/@babel/parser/lib/index.js:11268:28)\\n    at Parser.parseStatementContent (/Users/ryanfulmer/Desktop/hrnyc-budgetK-R/node_modules/@babel/parser/lib/index.js:10961:21)\\n    at Parser.parseStatement (/Users/ryanfulmer/Desktop/hrnyc-budgetK-R/node_modules/@babel/parser/lib/index.js:10916:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/ryanfulmer/Desktop/hrnyc-budgetK-R/node_modules/@babel/parser/lib/index.js:11490:25)\\n    at Parser.parseBlockBody (/Users/ryanfulmer/Desktop/hrnyc-budgetK-R/node_modules/@babel/parser/lib/index.js:11477:10)\\n    at Parser.parseBlock (/Users/ryanfulmer/Desktop/hrnyc-budgetK-R/node_modules/@babel/parser/lib/index.js:11461:10)\\n    at Parser.parseFunctionBody (/Users/ryanfulmer/Desktop/hrnyc-budgetK-R/node_modules/@babel/parser/lib/index.js:10477:24)\\n    at Parser.parseFunctionBodyAndFinish (/Users/ryanfulmer/Desktop/hrnyc-budgetK-R/node_modules/@babel/parser/lib/index.js:10446:10)\\n    at Parser.parseMethod (/Users/ryanfulmer/Desktop/hrnyc-budgetK-R/node_modules/@babel/parser/lib/index.js:10408:10)\\n    at Parser.pushClassMethod (/Users/ryanfulmer/Desktop/hrnyc-budgetK-R/node_modules/@babel/parser/lib/index.js:11896:30)\\n    at Parser.parseClassMemberWithIsStatic (/Users/ryanfulmer/Desktop/hrnyc-budgetK-R/node_modules/@babel/parser/lib/index.js:11813:12)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/index.jsx\n");

/***/ })

/******/ });