(this["webpackJsonppooltogether"] = this["webpackJsonppooltogether"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Home.css":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/Home.css ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Abel);"]);
// Module
exports.push([module.i, ".diamond {\n  height: 150px;\n  width: 150px;\n  background-color: #7fdbff;\n  transform: rotate(45deg);\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --secondary-color: #5f26c0;\n  --contrast-color: #7859be;\n}\n.overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n  z-index: -10;\n  background-color: var(--contrast-color);\n}\n\n.container {\n  display: flex;\n  height: 100vh;\n  justify-content: space-around;\n  align-items: center;\n  color: #fff;\n  animation: expand 0.8s ease forwards;\n  background-color: var(--secondary-color);\n  position: relative;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen,\n    Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  transition: all 0.8s ease;\n}\n\n.container_content {\n  width: 50%;\n}\n\n.container_content_inner {\n  width: 80%;\n  margin-left: 80px;\n}\n\n.container_outer_img {\n  margin: 50px;\n  width: 50%;\n  overflow: hidden;\n}\n\n.container_img {\n  width: 100%;\n  animation: slideIn 1.5s ease-in-out forwards;\n}\n\n.par {\n  height: auto;\n  overflow: hidden;\n}\n\np {\n  line-height: 28px;\n  transform: translateY(300px);\n  animation: slideUp 0.8s ease-in-out forwards 0.8s;\n}\n\n.btns {\n  width: 32rem;\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n}\n\n.btns_more {\n  background: transparent;\n  border: 1px solid var(--contrast-color);\n  border-radius: 50px;\n  padding: 8px 12px;\n  font-size: 16px;\n  text-transform: uppercase;\n  position: relative;\n  margin-top: 15px;\n  outline: none;\n  transform: translateY(50px);\n  animation: slideUp 0.8s ease-in-out forwards 1s;\n}\n\n.title {\n  overflow: hidden;\n  height: auto;\n}\n\nh1 {\n  font-size: 40px;\n  color: var(--contrast-color);\n  margin-bottom: 20px;\n  transform: translateY(100px);\n  animation: slideUp 0.8s ease forwards 0.5s;\n}\n\n@keyframes slideIn {\n  0% {\n    transform: translateX(500px) scale(0.2);\n  }\n  100% {\n    transform: translateX(0px) scale(1);\n  }\n}\n\n@keyframes slideUp {\n  0% {\n    transform: translateY(300px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n\n@keyframes expand {\n  0% {\n    transform: translateX(1400px);\n  }\n  100% {\n    transform: translateX(0px);\n  }\n}\n\n.Image {\n  background-image: linear-gradient(#5f26c0, #371684);\n  height: 45rem;\n  box-shadow: purple;\n}\n\n.Steps {\n  margin-top: 6%;\n  width: 85rem;\n  height: 35rem;\n  align-content: center;\n  border-radius: 2.5%;\n}\n\n.StepImage {\n  height: 30rem;\n  width: 50rem;\n  float: right;\n}\n.StepImage2 {\n  height: 30rem;\n  width: 50rem;\n  float: left;\n}\n.StepImage3 {\n  height: 30rem;\n  width: 50rem;\n  float: right;\n}\n.StepImage4 {\n  height: 30rem;\n  width: 50rem;\n  float: left;\n}\n.Content {\n  float: left;\n  width: 30rem;\n}\n.Content2 {\n  float: right;\n  width: 30rem;\n}\n.Content3 {\n  float: left;\n  width: 30rem;\n}\n.Content4 {\n  float: right;\n  width: 30rem;\n}\n.heading {\n  margin-top: 14%;\n}\n.Para {\n  font-size: larger;\n}\n.Background {\n}\n\n.Logo {\n  width: 18rem;\n  margin-top: 8%;\n}\n\n.TagLine {\n  color: white;\n  margin-top: 4%;\n  font-size: xx-large;\n  font-weight: bolder;\n}\n\n.LearnButton {\n  color: white;\n  font-size: larger;\n  font-weight: bolder;\n  border-width: 0.3rem;\n}\n.LearnButton:hover {\n  background-color: #482299;\n}\n.LearnButton1 {\n  margin-left: 3%;\n  color: white;\n  font-size: larger;\n  font-weight: bolder;\n  border-width: 0.3rem;\n}\n.LearnButton1:hover {\n  background-color: #482299;\n}\n.LearnButton:hover .Space {\n  padding-top: 3%;\n}\n\n.Space2 {\n  margin-top: 3%;\n  width: 85rem;\n  height: 35rem;\n}\n\n.Cards {\n  height: 20rem;\n  width: 45%;\n  display: inline-block;\n  margin-left: 1rem;\n}\n.Cards1 {\n  height: 20rem;\n  width: 45%;\n\n  float: right;\n}\n.Link {\n  color: white;\n  text-decoration: none;\n}\n\n.ModalButton {\n  margin-top: 10%;\n  font-size: larger;\n}\n.ModalBody {\n  height: 30rem;\n}\n\n.Div {\n  margin-bottom: 6%;\n}\n\n.Join {\n  margin-top: 3%;\n  font-size: xx-large;\n}\n.Link2 {\n  text-decoration: none;\n}\n\n.center {\n  position: absolute;\n  top: 250%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n}\n\n.card {\n  width: 75rem;\n  height: 30rem;\n  background-color: #fff;\n  background: linear-gradient(#f8f8f8, #fff);\n  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);\n  border-radius: 6px;\n  overflow: hidden;\n  position: relative;\n  margin: 1.5rem;\n}\n\n.card h1 {\n  text-align: center;\n}\n\n.card .additional {\n  position: absolute;\n  width: 150px;\n  height: 100%;\n  background: linear-gradient(#de685e, #ee786e);\n  transition: width 0.4s;\n  overflow: hidden;\n  z-index: 2;\n}\n\n.card.green .additional {\n  background: linear-gradient(#92bca6, #a2ccb6);\n}\n\n.card:hover .additional {\n  width: 100%;\n  border-radius: 0 5px 5px 0;\n}\n\n.card .additional .user-card {\n  width: 150px;\n  height: 100%;\n  position: relative;\n  float: left;\n}\n\n.card .additional .user-card::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 10%;\n  right: -2px;\n  height: 80%;\n  border-left: 2px solid rgba(0, 0, 0, 0.025);\n}\n\n.card .additional .user-card .level,\n.card .additional .user-card .points {\n  top: 15%;\n  color: #fff;\n  text-transform: uppercase;\n  font-size: 0.75em;\n  font-weight: bold;\n  background: rgba(0, 0, 0, 0.15);\n  padding: 0.125rem 0.75rem;\n  border-radius: 100px;\n  white-space: nowrap;\n}\n\n.card .additional .user-card .points {\n  top: 85%;\n}\n\n.card .additional .user-card svg {\n  top: 50%;\n}\n\n.card .additional .more-info {\n  width: 300px;\n  float: left;\n  position: absolute;\n  left: 150px;\n  height: 100%;\n}\n\n.card .additional .more-info h1 {\n  color: #fff;\n  margin-bottom: 0;\n}\n\n.card.green .additional .more-info h1 {\n  color: #224c36;\n}\n\n.card .additional .coords {\n  margin: 0 1rem;\n  color: #fff;\n  font-size: 1rem;\n}\n\n.card.green .additional .coords {\n  color: #325c46;\n}\n\n.card .additional .coords span + span {\n  float: right;\n}\n\n.card .additional .stats {\n  font-size: 2rem;\n  display: flex;\n  position: absolute;\n  bottom: 1rem;\n  left: 1rem;\n  right: 1rem;\n  top: auto;\n  color: #fff;\n}\n\n.card.green .additional .stats {\n  color: #325c46;\n}\n\n.card .additional .stats > div {\n  flex: 1 1;\n  text-align: center;\n}\n\n.card .additional .stats i {\n  display: block;\n}\n\n.card .additional .stats div.title {\n  font-size: 0.75rem;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n.card .additional .stats div.value {\n  font-size: 1.5rem;\n  font-weight: bold;\n  line-height: 1.5rem;\n}\n\n.card .additional .stats div.value.infinity {\n  font-size: 2.5rem;\n}\n\n.card .general {\n  width: 300px;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 1;\n  box-sizing: border-box;\n  padding: 1rem;\n  padding-top: 0;\n}\n\n.card .general .more {\n  position: absolute;\n  bottom: 1rem;\n  right: 1rem;\n  font-size: 0.9em;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var shards_ui_dist_css_shards_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shards-ui/dist/css/shards.min.css */ "./node_modules/shards-ui/dist/css/shards.min.css");
/* harmony import */ var shards_ui_dist_css_shards_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(shards_ui_dist_css_shards_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Home */ "./src/Home.js");
var _jsxFileName = "/Users/kanikaagrawal/Desktop/pooltogether/src/App.js";






function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Home__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Home.css":
/*!**********************!*\
  !*** ./src/Home.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./Home.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Home.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./Home.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Home.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./Home.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Home.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.css */ "./src/Home.css");
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Home_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Step1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Step1.png */ "./src/Step1.png");
/* harmony import */ var _Step1_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Step1_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Step2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Step2.png */ "./src/Step2.png");
/* harmony import */ var _Step2_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Step2_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Step3_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Step3.png */ "./src/Step3.png");
/* harmony import */ var _Step3_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Step3_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Step4_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Step4.png */ "./src/Step4.png");
/* harmony import */ var _Step4_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Step4_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _pooltogether_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pooltogether.png */ "./src/pooltogether.png");
/* harmony import */ var _pooltogether_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_pooltogether_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var authereum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! authereum */ "./node_modules/authereum/dist/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_spinners_GridLoader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-spinners/GridLoader */ "./node_modules/react-spinners/GridLoader.js");
/* harmony import */ var react_spinners_GridLoader__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_spinners_GridLoader__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_BuyModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/BuyModal */ "./src/components/BuyModal.js");
var _jsxFileName = "/Users/kanikaagrawal/Desktop/pooltogether/src/Home.js";












class Home extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      accounts: null,
      authereum: null,
      isCreatingAccount: false,
      buyingPoolToken: false
    };
    this.buyToggle = this.buyToggle.bind(this);
    this.createEthAddress = this.createEthAddress.bind(this);
  }

  async createEthAddress() {
    console.log("CLicked");
    let accounts;
    const authereum = new authereum__WEBPACK_IMPORTED_MODULE_8__["default"]("rinkeby");
    console.log("1authereum", authereum);
    const provider = await authereum.getProvider();
    console.log("1privder", provider);
    const web3 = new web3__WEBPACK_IMPORTED_MODULE_9___default.a(provider);
    console.log("1web3", web3);
    window.web3 = web3;
    this.setState({
      isCreatingAccount: true
    });
    web3.currentProvider.enable().then(async () => {
      console.log("provider", provider);
      console.log("Logged In");
      accounts = await web3.eth.getAccounts(); // ['0x...']

      console.log("adress", accounts);
      console.log("Address", accounts);
      console.log("web3", window.web3);
      this.setState({
        accounts: accounts,
        authereum: authereum
      });
    });
  }

  buyToggle() {
    if (!this.state.accounts) {
      return;
    }

    this.setState({
      open: !this.state.open,
      buyingPoolToken: !this.state.buyingPoolToken
    });
    console.log("Toggle", this.state.open);
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Background",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "container_content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "container_content_inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 15
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "par",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "TagLine",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }
    }, "You could win $146 every week just by saving your money")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "btns",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Space",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: "LearnButton btns_more",
      outline: true,
      pill: true,
      theme: "info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 19
      }
    }, "Wanna Learn More"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: "LearnButton1 btns_more",
      outline: true,
      pill: true,
      theme: "info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 19
      }
    }, "Already Know Enough"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "container_outer_img",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "img-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _pooltogether_png__WEBPACK_IMPORTED_MODULE_7___default.a,
      alt: "",
      class: "container_img",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 15
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "overlay",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "Logo",
      src: _pooltogether_png__WEBPACK_IMPORTED_MODULE_7___default.a,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "TagLine",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 13
      }
    }, "You could win $146 every week just by saving your money"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Space",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: "LearnButton",
      outline: true,
      pill: true,
      theme: "info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 15
      }
    }, "Wanna Learn More"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: "LearnButton1",
      outline: true,
      pill: true,
      theme: "info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 15
      }
    }, "Already Know Enough")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      className: "Steps",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 19
      }
    }, "Step 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 19
      }
    }, "Deposit some Dollars with Others"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "Para",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 19
      }
    }, "You have to deposit some Dollar to Pool Together. Meanwhile others also do the same. All this is safely deposited to Pool Together's Contract")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardImg"], {
      className: "StepImage",
      src: _Step1_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 17
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      className: "Steps",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Content2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 19
      }
    }, "Step 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 19
      }
    }, "Sit Back And Relax"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "Para",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 19
      }
    }, "This is all you need to do now. From now on your entry to the next and it's next prize is taken automatically by the system while you can relax and focus on your work.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardImg"], {
      className: "StepImage2",
      src: _Step2_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 17
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      className: "Steps",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Content3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 19
      }
    }, "Step 3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 19
      }
    }, "Get the Prize Results delivered to you"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "Para",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 19
      }
    }, "Every time there is a new draw, the prize result is delivered right to your inbox or you can always visit the Pool Together site to check the prize history.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardImg"], {
      className: "StepImage3",
      src: _Step3_png__WEBPACK_IMPORTED_MODULE_5___default.a,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 17
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      className: "Steps",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Content4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 19
      }
    }, "Step 4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 19
      }
    }, "Don't Worry About your Tickets"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "Para",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 19
      }
    }, "While the winner gets the reward, your tickets are never lost. You can always redeem the initial amount of tokens you deposited to the app. Without ever losing anything.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardImg"], {
      className: "StepImage4",
      src: _Step4_png__WEBPACK_IMPORTED_MODULE_6___default.a,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 17
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Space2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      className: "Cards1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 21
      }
    }), this.state.accounts ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 23
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 27
      }
    }, " Your Ethereum Address ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
      outline: true,
      pill: true,
      theme: "success",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 25
      }
    }, this.state.accounts)) : this.state.isCreatingAccount ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 23
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 27
      }
    }, " Creating Your Account ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spinners_GridLoader__WEBPACK_IMPORTED_MODULE_10___default.a, {
      size: 10,
      color: "#5f26c0",
      loading: this.state.isCreatingAccount,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 25
      }
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 23
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 25
      }
    }, "Create Your Ethereum Account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: "ModalButton",
      outline: true,
      pill: true,
      theme: "info",
      onClick: this.createEthAddress,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 25
      }
    }, "Create Eth Account"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      className: "Cards",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 21
      }
    }, "Buy Some Pool Tokens"), this.state.accounts ? this.state.buyingPoolToken ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spinners_GridLoader__WEBPACK_IMPORTED_MODULE_10___default.a, {
      size: 10,
      color: "#5f26c0",
      loading: this.state.buyingPoolToken,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 25
      }
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: "ModalButton",
      outline: true,
      pill: true,
      theme: "info",
      onClick: this.buyToggle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 27
      }
    }, "Buy Eth")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 23
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 25
      }
    }, "You Need to Login/Create a Ethereum Account First"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: "ModalButton",
      outline: true,
      pill: true,
      theme: "info",
      disabled: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 25
      }
    }, "Buy Eth")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BuyModal__WEBPACK_IMPORTED_MODULE_11__["default"], {
      show: this.state.open,
      toggle: this.buyToggle,
      accounts: this.state.accounts,
      authereumInstance: this.state.authereum,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 21
      }
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Div",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 15
      }
    }, "Ready to Invest Some Money??"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: "Join",
      outline: true,
      pill: true,
      theme: "info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://www.pooltogether.com/",
      className: "Link2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 17
      }
    }, " ", "Join Now"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "additional",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 300,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "user-card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "level center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 17
      }
    }, "Level 13"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "points center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 17
      }
    }, "5,312 Points"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      width: "110",
      height: "110",
      viewBox: "0 0 250 250",
      xmlns: "http://www.w3.org/2000/svg",
      role: "img",
      "aria-labelledby": "title desc",
      class: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
      id: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 19
      }
    }, "Teacher"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("desc", {
      id: "desc",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 19
      }
    }, "Cartoon of a Caucasian woman smiling, and wearing black glasses and a purple shirt with white collar drawn by Alvaro Montoro."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
      id: "scene",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      cx: "125",
      cy: "125",
      r: "115",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 23
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
      id: "lips",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M 106,132 C 113,127 125,128 125,132 125,128 137,127 144,132 141,142  134,146  125,146  116,146 109,142 106,132 Z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325,
        columnNumber: 23
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      cx: "125",
      cy: "125",
      r: "120",
      fill: "rgba(0,0,0,0.15)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328,
        columnNumber: 19
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      stroke: "none",
      "stroke-width": "0",
      "clip-path": "url(#scene)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
      x: "0",
      y: "0",
      width: "250",
      height: "250",
      fill: "#b0d2e5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 330,
        columnNumber: 21
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      id: "head",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 331,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      fill: "none",
      stroke: "#111111",
      "stroke-width": "2",
      d: "M 68,103 83,103.5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      class: "hair",
      d: "M 67,90 67,169 78,164 89,169 100,164 112,169 125,164 138,169 150,164 161,169 172,164 183,169 183,90 Z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      cx: "125",
      cy: "100",
      r: "55",
      class: "skin",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", {
      cx: "102",
      cy: "107",
      rx: "5",
      ry: "5",
      class: "eyes",
      id: "eye-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", {
      cx: "148",
      cy: "107",
      rx: "5",
      ry: "5",
      class: "eyes",
      id: "eye-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
      x: "119",
      y: "140",
      width: "12",
      height: "40",
      class: "skin",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 359,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      class: "line eyebrow",
      d: "M 90,98 C 93,90 103,89 110,94",
      id: "eyebrow-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 366,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      class: "line eyebrow",
      d: "M 160,98 C 157,90 147,89 140,94",
      id: "eyebrow-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 371,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      stroke: "#111111",
      "stroke-width": "4",
      d: "M 68,103 83,102.5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 376,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      stroke: "#111111",
      "stroke-width": "4",
      d: "M 182,103 167,102.5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 381,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      stroke: "#050505",
      "stroke-width": "3",
      fill: "none",
      d: "M 119,102 C 123,99 127,99 131,102",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 386,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      fill: "#050505",
      d: "M 92,97 C 85,97 79,98 80,101 81,104 84,104 85,102",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 392,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      fill: "#050505",
      d: "M 158,97 C 165,97 171,98 170,101 169,104 166,104 165,102",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 396,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      stroke: "#050505",
      "stroke-width": "3",
      fill: "rgba(240,240,255,0.4)",
      d: "M 119,102 C 118,111 115,119 98,117 85,115 84,108 84,104 84,97 94,96 105,97 112,98 117,98 119,102 Z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 400,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      stroke: "#050505",
      "stroke-width": "3",
      fill: "rgba(240,240,255,0.4)",
      d: "M 131,102 C 132,111 135,119 152,117 165,115 166,108 166,104 166,97 156,96 145,97 138,98 133,98 131,102 Z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 406,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      class: "hair",
      d: "M 60,109 C 59,39 118,40 129,40 139,40 187,43 189,99 135,98 115,67 115,67 115,67 108,90 80,109 86,101 91,92 92,87 85,99 65,108 60,109",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 412,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      id: "mouth",
      fill: "#d73e3e",
      d: "M 106,132 C 113,127 125,128 125,132 125,128 137,127 144,132 141,142  134,146  125,146  116,146 109,142 106,132 Z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 416,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      id: "smile",
      fill: "white",
      d: "M125,141 C 140,141 143,132 143,132 143,132 125,133 125,133 125,133 106.5,132 106.5,132 106.5,132 110,141 125,141 Z",
      "clip-path": "url(#lips)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 421,
        columnNumber: 23
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      id: "shirt",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 428,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      fill: "#8665c2",
      d: "M 132,170 C 146,170 154,200 154,200 154,200 158,250 158,250 158,250 92,250 92,250 92,250 96,200 96,200 96,200 104,170 118,170 118,170 125,172 125,172 125,172 132,170 132,170 Z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 429,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      id: "arm-left",
      class: "arm",
      stroke: "#8665c2",
      fill: "none",
      "stroke-width": "14",
      d: "M 118,178 C 94,179 66,220 65,254",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 433,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      id: "arm-right",
      class: "arm",
      stroke: "#8665c2",
      fill: "none",
      "stroke-width": "14",
      d: "M 132,178 C 156,179 184,220 185,254",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 441,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      fill: "white",
      d: "M 117,166 C 117,166 125,172 125,172 125,182 115,182 109,170 Z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 449,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      fill: "white",
      d: "M 133,166 C 133,166 125,172 125,172 125,182 135,182 141,170 Z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 453,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      cx: "125",
      cy: "188",
      r: "4",
      fill: "#5a487b",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 457,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      cx: "125",
      cy: "202",
      r: "4",
      fill: "#5a487b",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 458,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      cx: "125",
      cy: "216",
      r: "4",
      fill: "#5a487b",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 459,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      cx: "125",
      cy: "230",
      r: "4",
      fill: "#5a487b",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 460,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      cx: "125",
      cy: "244",
      r: "4",
      fill: "#5a487b",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 461,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      stroke: "#daa37f",
      "stroke-width": "1",
      class: "skin hand",
      id: "hand-left",
      d: "M 51,270 C 46,263 60,243 63,246 65,247 66,248 61,255 72,243 76,238 79,240 82,243 72,254 69,257 72,254 82,241 86,244 89,247 75,261 73,263 77,258 84,251 86,253 89,256 70,287 59,278",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 462,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      stroke: "#daa37f",
      "stroke-width": "1",
      class: "skin hand",
      id: "hand-right",
      d: "M 199,270 C 204,263 190,243 187,246 185,247 184,248 189,255 178,243 174,238 171,240 168,243 178,254 181,257 178,254 168,241 164,244 161,247 175,261 177,263 173,258 166,251 164,253 161,256 180,287 191,278",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 469,
        columnNumber: 23
      }
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "more-info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 480,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 481,
        columnNumber: 17
      }
    }, "Jane Doe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "coords",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 482,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 483,
        columnNumber: 19
      }
    }, "Group Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 484,
        columnNumber: 19
      }
    }, "Joined January 2019")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "coords",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 486,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 487,
        columnNumber: 19
      }
    }, "Position/Role"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 488,
        columnNumber: 19
      }
    }, "City, Country")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "stats",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 490,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 491,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 492,
        columnNumber: 21
      }
    }, "Awards"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      class: "fa fa-trophy",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 493,
        columnNumber: 21
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "value",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 494,
        columnNumber: 21
      }
    }, "2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 496,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 497,
        columnNumber: 21
      }
    }, "Matches"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      class: "fa fa-gamepad",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 498,
        columnNumber: 21
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "value",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 499,
        columnNumber: 21
      }
    }, "27")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 501,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 502,
        columnNumber: 21
      }
    }, "Pals"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      class: "fa fa-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 503,
        columnNumber: 21
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "value",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 504,
        columnNumber: 21
      }
    }, "123")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 506,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 507,
        columnNumber: 21
      }
    }, "Coffee"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      class: "fa fa-coffee",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 508,
        columnNumber: 21
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "value infinity",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 509,
        columnNumber: 21
      }
    }, "\u221E"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "general",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 514,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 515,
        columnNumber: 15
      }
    }, "Jane Doe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 516,
        columnNumber: 15
      }
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      class: "more",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 521,
        columnNumber: 15
      }
    }, "Mouse over the card for more info"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "card green",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 525,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "additional",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 526,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "user-card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 527,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "level center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 528,
        columnNumber: 17
      }
    }, "Level 13"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "points center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 529,
        columnNumber: 17
      }
    }, "5,312 Points"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      width: "110",
      height: "110",
      viewBox: "0 0 250 250",
      xmlns: "http://www.w3.org/2000/svg",
      role: "img",
      "aria-labelledby": "title desc",
      class: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 530,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
      id: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 539,
        columnNumber: 19
      }
    }, "Teacher"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("desc", {
      id: "desc",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 540,
        columnNumber: 19
      }
    }, "Cartoon of a Caucasian woman smiling, and wearing black glasses and a purple shirt with white collar drawn by Alvaro Montoro."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 546,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
      id: "scene",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 547,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      cx: "125",
      cy: "125",
      r: "115",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 548,
        columnNumber: 23
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
      id: "lips",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 550,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M 106,132 C 113,127 125,128 125,132 125,128 137,127 144,132 141,142  134,146  125,146  116,146 109,142 106,132 Z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 551,
        columnNumber: 23
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      cx: "125",
      cy: "125",
      r: "120",
      fill: "rgba(0,0,0,0.15)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 554,
        columnNumber: 19
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      stroke: "none",
      "stroke-width": "0",
      "clip-path": "url(#scene)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 555,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
      x: "0",
      y: "0",
      width: "250",
      height: "250",
      fill: "#b0d2e5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 556,
        columnNumber: 21
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      id: "head",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 557,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      fill: "none",
      stroke: "#111111",
      "stroke-width": "2",
      d: "M 68,103 83,103.5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 558,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      class: "hair",
      d: "M 67,90 67,169 78,164 89,169 100,164 112,169 125,164 138,169 150,164 161,169 172,164 183,169 183,90 Z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 564,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      cx: "125",
      cy: "100",
      r: "55",
      class: "skin",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 568,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", {
      cx: "102",
      cy: "107",
      rx: "5",
      ry: "5",
      class: "eyes",
      id: "eye-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 569,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", {
      cx: "148",
      cy: "107",
      rx: "5",
      ry: "5",
      class: "eyes",
      id: "eye-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 577,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
      x: "119",
      y: "140",
      width: "12",
      height: "40",
      class: "skin",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 585,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      class: "line eyebrow",
      d: "M 90,98 C 93,90 103,89 110,94",
      id: "eyebrow-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 592,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      class: "line eyebrow",
      d: "M 160,98 C 157,90 147,89 140,94",
      id: "eyebrow-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 597,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      stroke: "#111111",
      "stroke-width": "4",
      d: "M 68,103 83,102.5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 602,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      stroke: "#111111",
      "stroke-width": "4",
      d: "M 182,103 167,102.5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 607,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      stroke: "#050505",
      "stroke-width": "3",
      fill: "none",
      d: "M 119,102 C 123,99 127,99 131,102",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 612,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      fill: "#050505",
      d: "M 92,97 C 85,97 79,98 80,101 81,104 84,104 85,102",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 618,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      fill: "#050505",
      d: "M 158,97 C 165,97 171,98 170,101 169,104 166,104 165,102",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 622,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      stroke: "#050505",
      "stroke-width": "3",
      fill: "rgba(240,240,255,0.4)",
      d: "M 119,102 C 118,111 115,119 98,117 85,115 84,108 84,104 84,97 94,96 105,97 112,98 117,98 119,102 Z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 626,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      stroke: "#050505",
      "stroke-width": "3",
      fill: "rgba(240,240,255,0.4)",
      d: "M 131,102 C 132,111 135,119 152,117 165,115 166,108 166,104 166,97 156,96 145,97 138,98 133,98 131,102 Z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 632,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      class: "hair",
      d: "M 60,109 C 59,39 118,40 129,40 139,40 187,43 189,99 135,98 115,67 115,67 115,67 108,90 80,109 86,101 91,92 92,87 85,99 65,108 60,109",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 638,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      id: "mouth",
      fill: "#d73e3e",
      d: "M 106,132 C 113,127 125,128 125,132 125,128 137,127 144,132 141,142  134,146  125,146  116,146 109,142 106,132 Z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 642,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      id: "smile",
      fill: "white",
      d: "M125,141 C 140,141 143,132 143,132 143,132 125,133 125,133 125,133 106.5,132 106.5,132 106.5,132 110,141 125,141 Z",
      "clip-path": "url(#lips)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 647,
        columnNumber: 23
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      id: "shirt",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 654,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      fill: "#8665c2",
      d: "M 132,170 C 146,170 154,200 154,200 154,200 158,250 158,250 158,250 92,250 92,250 92,250 96,200 96,200 96,200 104,170 118,170 118,170 125,172 125,172 125,172 132,170 132,170 Z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 655,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      id: "arm-left",
      class: "arm",
      stroke: "#8665c2",
      fill: "none",
      "stroke-width": "14",
      d: "M 118,178 C 94,179 66,220 65,254",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 659,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      id: "arm-right",
      class: "arm",
      stroke: "#8665c2",
      fill: "none",
      "stroke-width": "14",
      d: "M 132,178 C 156,179 184,220 185,254",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 667,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      fill: "white",
      d: "M 117,166 C 117,166 125,172 125,172 125,182 115,182 109,170 Z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 675,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      fill: "white",
      d: "M 133,166 C 133,166 125,172 125,172 125,182 135,182 141,170 Z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 679,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      cx: "125",
      cy: "188",
      r: "4",
      fill: "#5a487b",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 683,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      cx: "125",
      cy: "202",
      r: "4",
      fill: "#5a487b",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 684,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      cx: "125",
      cy: "216",
      r: "4",
      fill: "#5a487b",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 685,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      cx: "125",
      cy: "230",
      r: "4",
      fill: "#5a487b",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 686,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      cx: "125",
      cy: "244",
      r: "4",
      fill: "#5a487b",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 687,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      stroke: "#daa37f",
      "stroke-width": "1",
      class: "skin hand",
      id: "hand-left",
      d: "M 51,270 C 46,263 60,243 63,246 65,247 66,248 61,255 72,243 76,238 79,240 82,243 72,254 69,257 72,254 82,241 86,244 89,247 75,261 73,263 77,258 84,251 86,253 89,256 70,287 59,278",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 688,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      stroke: "#daa37f",
      "stroke-width": "1",
      class: "skin hand",
      id: "hand-right",
      d: "M 199,270 C 204,263 190,243 187,246 185,247 184,248 189,255 178,243 174,238 171,240 168,243 178,254 181,257 178,254 168,241 164,244 161,247 175,261 177,263 173,258 166,251 164,253 161,256 180,287 191,278",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 695,
        columnNumber: 23
      }
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "more-info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 706,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 707,
        columnNumber: 17
      }
    }, "Jane Doe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "coords",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 708,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 709,
        columnNumber: 19
      }
    }, "Group Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 710,
        columnNumber: 19
      }
    }, "Joined January 2019")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "coords",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 712,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 713,
        columnNumber: 19
      }
    }, "Position/Role"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 714,
        columnNumber: 19
      }
    }, "City, Country")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "stats",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 716,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 717,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 718,
        columnNumber: 21
      }
    }, "Awards"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      class: "fa fa-trophy",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 719,
        columnNumber: 21
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "value",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 720,
        columnNumber: 21
      }
    }, "2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 722,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 723,
        columnNumber: 21
      }
    }, "Matches"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      class: "fa fa-gamepad",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 724,
        columnNumber: 21
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "value",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 725,
        columnNumber: 21
      }
    }, "27")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 727,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 728,
        columnNumber: 21
      }
    }, "Pals"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      class: "fa fa-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 729,
        columnNumber: 21
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "value",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 730,
        columnNumber: 21
      }
    }, "123")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 732,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 733,
        columnNumber: 21
      }
    }, "Coffee"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      class: "fa fa-coffee",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 734,
        columnNumber: 21
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "value infinity",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 735,
        columnNumber: 21
      }
    }, "\u221E"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "general",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 740,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 741,
        columnNumber: 15
      }
    }, "Jane Doe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 742,
        columnNumber: 15
      }
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      class: "more",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 747,
        columnNumber: 15
      }
    }, "Mouse over the card for more info")))));
  }

}

/***/ }),

/***/ "./src/Step1.png":
/*!***********************!*\
  !*** ./src/Step1.png ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Step1.26c16b9d.png";

/***/ }),

/***/ "./src/Step2.png":
/*!***********************!*\
  !*** ./src/Step2.png ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Step2.5b4ae12b.png";

/***/ }),

/***/ "./src/Step3.png":
/*!***********************!*\
  !*** ./src/Step3.png ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Step3.67556851.png";

/***/ }),

/***/ "./src/Step4.png":
/*!***********************!*\
  !*** ./src/Step4.png ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Step4.ea2342f2.png";

/***/ }),

/***/ "./src/components/BuyModal.js":
/*!************************************!*\
  !*** ./src/components/BuyModal.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");
var _jsxFileName = "/Users/kanikaagrawal/Desktop/pooltogether/src/components/BuyModal.js";



class BuyModal extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      daiAmount: 0
    };
    console.log("props", props);
    this.buyEth = this.buyEth.bind(this);
    this.handlebuyInput = this.handlebuyInput.bind(this);
  }

  async handlebuyInput(e) {
    this.setState({
      daiAmount: e.target.value
    });
  }

  async buyEth() {
    const authereum = this.props.authereumInstance;
    console.log('authereum', authereum);
    this.props.toggle();
    authereum.addFunds({
      options: {
        tokenSymbol: 'DAI'
      }
    }).then(() => {
      console.log('THen');
    }).catch(() => {
      console.log('Ctch');
      this.props.toggle();
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
      open: this.props.show,
      toggle: this.props.toggle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["ModalHeader"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }
    }, "Get PoolTogether Tokens"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }
    }, "One Ticket is Worth 1 Dollar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }
    }, "You can Redeem Your Tokens Any Time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["FormInput"], {
      size: "lg",
      placeholder: "Enter Number of Tickets",
      onChange: this.handlebuyInput,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: "ModalButton",
      outline: true,
      pill: true,
      theme: "info",
      onClick: this.buyEth,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }
    }, "Buy Eth"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (BuyModal);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/kanikaagrawal/Desktop/pooltogether/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
})), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/pooltogether.png":
/*!******************************!*\
  !*** ./src/pooltogether.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/pooltogether.48d059e7.png";

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/kanikaagrawal/Desktop/pooltogether/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/kanikaagrawal/Desktop/pooltogether/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/kanikaagrawal/Desktop/pooltogether/src/index.js */"./src/index.js");


/***/ }),

/***/ 10:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 11:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 12:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 13:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 14:
/*!*************************!*\
  !*** request (ignored) ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 15:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 16:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 17:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 18:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 19:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 20:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 21:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 22:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 23:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 24:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 25:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 26:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 27:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 28:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 29:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 7:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 8:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 9:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map