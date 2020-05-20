webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.9d39053d749344026ba5.hot-update.js.map