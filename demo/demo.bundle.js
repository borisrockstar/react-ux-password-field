!function(e){function n(a){if(t[a])return t[a].exports;var o=t[a]={exports:{},id:a,loaded:!1};return e[a].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var t={};return n.m=e,n.c=t,n.p="",n(0)}([function(module,exports,__webpack_require__){eval('\'use strict\';\n\n// default css\n__webpack_require__(5)\n__webpack_require__(3);\n__webpack_require__(2);\n\n// syntax highlighting\n__webpack_require__(4);\n__webpack_require__(7);\n\n// custom css\n__webpack_require__(6);\n\n/*==========  APP  ==========*/\n\nvar React         = __webpack_require__(1),\n    InputPassword = __webpack_require__(9);\n\nReact.render(\n  React.createElement("form", null, \n    React.createElement("fieldset", null, \n      React.createElement("label", {for: "password1"}, "Password"), \n      React.createElement(InputPassword, {\n        id: "password1", \n        name: "password1", \n        placeholder: "Try me out!  Enter a random password.", \n        minScore: 2, \n        minLength: 5}\n      )\n    )\n  )\n, document.getElementById(\'content\'));\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./demo/src/index.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./demo/src/index.js?')},function(module,exports,__webpack_require__){eval('module.exports = React;\n\n/*****************\n ** WEBPACK FOOTER\n ** external "React"\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%22React%22?')},function(module,exports,__webpack_require__){eval("// removed by extract-text-webpack-plugin\n\n/*****************\n ** WEBPACK FOOTER\n ** ./demo/src/vendor/github.css\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./demo/src/vendor/github.css?")},function(module,exports,__webpack_require__){eval("// removed by extract-text-webpack-plugin\n\n/*****************\n ** WEBPACK FOOTER\n ** ./demo/src/vendor/skeleton.css\n ** module id = 3\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./demo/src/vendor/skeleton.css?")},function(module,exports,__webpack_require__){eval("// removed by extract-text-webpack-plugin\n\n/*****************\n ** WEBPACK FOOTER\n ** ./demo/src/vendor/syntax.css\n ** module id = 4\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./demo/src/vendor/syntax.css?")},function(module,exports,__webpack_require__){eval("// removed by extract-text-webpack-plugin\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/normalize.css/normalize.css\n ** module id = 5\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/normalize.css/normalize.css?")},function(module,exports,__webpack_require__){eval("// removed by extract-text-webpack-plugin\n\n/*****************\n ** WEBPACK FOOTER\n ** ./demo/src/css/style.scss\n ** module id = 6\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./demo/src/css/style.scss?")},function(module,exports,__webpack_require__){eval('/* Rainbow v1.2 rainbowco.de | included languages: generic, shell, javascript, html */\nwindow.Rainbow=function(){function q(a){var b,c=a.getAttribute&&a.getAttribute("data-language")||0;if(!c){a=a.attributes;for(b=0;b<a.length;++b)if("data-language"===a[b].nodeName)return a[b].nodeValue}return c}function B(a){var b=q(a)||q(a.parentNode);if(!b){var c=/\\blang(?:uage)?-(\\w+)/;(a=a.className.match(c)||a.parentNode.className.match(c))&&(b=a[1])}return b}function C(a,b){for(var c in f[d]){c=parseInt(c,10);if(a==c&&b==f[d][c]?0:a<=c&&b>=f[d][c])delete f[d][c],delete j[d][c];if(a>=c&&a<f[d][c]||\nb>c&&b<f[d][c])return!0}return!1}function r(a,b){return\'<span class="\'+a.replace(/\\./g," ")+(l?" "+l:"")+\'">\'+b+"</span>"}function s(a,b,c,i){if("undefined"===typeof a||null===a)i();else{var e=a.exec(c);if(e){++t;!b.name&&"string"==typeof b.matches[0]&&(b.name=b.matches[0],delete b.matches[0]);var k=e[0],g=e.index,u=e[0].length+g,h=function(){function e(){s(a,b,c,i)}t%100>0?e():setTimeout(e,0)};if(C(g,u))h();else{var m=v(b.matches),l=function(a,c,i){if(a>=c.length)i(k);else{var d=e[c[a]];if(d){var g=\nb.matches[c[a]],f=g.language,h=g.name&&g.matches?g.matches:g,j=function(b,d,g){var f;f=0;var h;for(h=1;h<c[a];++h)e[h]&&(f=f+e[h].length);d=g?r(g,d):d;k=k.substr(0,f)+k.substr(f).replace(b,d);l(++a,c,i)};f?n(d,f,function(a){j(d,a)}):typeof g==="string"?j(d,d,g):w(d,h.length?h:[h],function(a){j(d,a,g.matches?g.name:0)})}else l(++a,c,i)}};l(0,m,function(a){b.name&&(a=r(b.name,a));if(!j[d]){j[d]={};f[d]={}}j[d][g]={replace:e[0],"with":a};f[d][g]=u;h()})}}else i()}}function v(a){var b=[],c;for(c in a)a.hasOwnProperty(c)&&\nb.push(c);return b.sort(function(a,b){return b-a})}function w(a,b,c){function i(b,k){k<b.length?s(b[k].pattern,b[k],a,function(){i(b,++k)}):D(a,function(a){delete j[d];delete f[d];--d;c(a)})}++d;i(b,0)}function D(a,b){function c(a,b,i,f){if(i<b.length){++x;var h=b[i],l=j[d][h],a=a.substr(0,h)+a.substr(h).replace(l.replace,l["with"]),h=function(){c(a,b,++i,f)};0<x%250?h():setTimeout(h,0)}else f(a)}var i=v(j[d]);c(a,i,0,b)}function n(a,b,c){var d=m[b]||[],e=m[y]||[],b=z[b]?d:d.concat(e);w(a.replace(/</g,\n"&lt;").replace(/>/g,"&gt;").replace(/&(?![\\w\\#]+;)/g,"&amp;"),b,c)}function o(a,b,c){if(b<a.length){var d=a[b],e=B(d);return!(-1<(" "+d.className+" ").indexOf(" rainbow "))&&e?(e=e.toLowerCase(),d.className+=d.className?" rainbow":"rainbow",n(d.innerHTML,e,function(k){d.innerHTML=k;j={};f={};p&&p(d,e);setTimeout(function(){o(a,++b,c)},0)})):o(a,++b,c)}c&&c()}function A(a,b){var a=a&&"function"==typeof a.getElementsByTagName?a:document,c=a.getElementsByTagName("pre"),d=a.getElementsByTagName("code"),\ne,f=[],g=[];for(e=0;e<c.length;++e)c[e].getElementsByTagName("code").length?c[e].innerHTML=c[e].innerHTML.replace(/^\\s+/,"").replace(/\\s+$/,""):f.push(c[e]);for(e=0;e<d.length;++e)g.push(d[e]);o(g.concat(f),0,b)}var j={},f={},m={},z={},d=0,y=0,t=0,x=0,l,p;return{extend:function(a,b,c){1==arguments.length&&(b=a,a=y);z[a]=c;m[a]=b.concat(m[a]||[])},b:function(a){p=a},a:function(a){l=a},color:function(a,b,c){if("string"==typeof a)return n(a,b,c);if("function"==typeof a)return A(0,a);A(a,b)}}}();\ndocument.addEventListener?document.addEventListener("DOMContentLoaded",Rainbow.color,!1):window.attachEvent("onload",Rainbow.color);Rainbow.onHighlight=Rainbow.b;Rainbow.addClass=Rainbow.a;Rainbow.extend([{matches:{1:[{name:"keyword.operator",pattern:/\\=|\\+/g},{name:"keyword.dot",pattern:/\\./g}],2:{name:"string",matches:{name:"constant.character.escape",pattern:/\\\\(\'|"){1}/g}}},pattern:/(\\(|\\s|\\[|\\=|:|\\+|\\.)((\'|")([^\\\\\\1]|\\\\.)*?(\\3))/gm},{name:"comment",pattern:/\\/\\*[\\s\\S]*?\\*\\/|(\\/\\/|\\#)[\\s\\S]*?$/gm},{name:"constant.numeric",pattern:/\\b(\\d+(\\.\\d+)?(e(\\+|\\-)?\\d+)?(f|d)?|0x[\\da-f]+)\\b/gi},{matches:{1:"keyword"},pattern:/\\b(and|array|as|b(ool(ean)?|reak)|c(ase|atch|har|lass|on(st|tinue))|d(ef|elete|o(uble)?)|e(cho|lse(if)?|xit|xtends|xcept)|f(inally|loat|or(each)?|unction)|global|if|import|int(eger)?|long|new|object|or|pr(int|ivate|otected)|public|return|self|st(ring|ruct|atic)|switch|th(en|is|row)|try|(un)?signed|var|void|while)(?=\\(|\\b)/gi},\n{name:"constant.language",pattern:/true|false|null/g},{name:"keyword.operator",pattern:/\\+|\\!|\\-|&(gt|lt|amp);|\\||\\*|\\=/g},{matches:{1:"function.call"},pattern:/(\\w+?)(?=\\()/g},{matches:{1:"storage.function",2:"entity.name.function"},pattern:/(function)\\s(.*?)(?=\\()/g}]);Rainbow.extend("shell",[{name:"shell",matches:{1:{language:"shell"}},pattern:/\\$\\(([\\s\\S]*?)\\)/gm},{matches:{2:"string"},pattern:/(\\(|\\s|\\[|\\=)((\'|")[\\s\\S]*?(\\3))/gm},{name:"keyword.operator",pattern:/&lt;|&gt;|&amp;/g},{name:"comment",pattern:/\\#[\\s\\S]*?$/gm},{name:"storage.function",pattern:/(.+?)(?=\\(\\)\\s{0,}\\{)/g},{name:"support.command",pattern:/\\b(echo|rm|ls|(mk|rm)dir|cd|find|cp|exit|pwd|exec|trap|source|shift|unset)/g},{matches:{1:"keyword"},pattern:/\\b(break|case|continue|do|done|elif|else|esac|eval|export|fi|for|function|if|in|local|return|set|then|unset|until|while)(?=\\(|\\b)/g}],\n!0);Rainbow.extend("javascript",[{name:"selector",pattern:/(\\s|^)\\$(?=\\.|\\()/g},{name:"support",pattern:/\\b(window|document)\\b/g},{matches:{1:"support.property"},pattern:/\\.(length|node(Name|Value))\\b/g},{matches:{1:"support.function"},pattern:/(setTimeout|setInterval)(?=\\()/g},{matches:{1:"support.method"},pattern:/\\.(getAttribute|push|getElementById|getElementsByClassName|log|setTimeout|setInterval)(?=\\()/g},{name:"string.regexp",matches:{1:"string.regexp.open",2:{name:"constant.regexp.escape",pattern:/\\\\(.){1}/g},\n3:"string.regexp.close",4:"string.regexp.modifier"},pattern:/(\\/)(?!\\*)(.+)(\\/)([igm]{0,3})/g},{matches:{1:"storage",3:"entity.function"},pattern:/(var)?(\\s|^)(\\S*)(?=\\s?=\\s?function\\()/g},{matches:{1:"keyword",2:"entity.function"},pattern:/(new)\\s+(.*)(?=\\()/g},{name:"entity.function",pattern:/(\\w+)(?=:\\s{0,}function)/g}]);Rainbow.extend("html",[{name:"source.php.embedded",matches:{2:{language:"php"}},pattern:/&lt;\\?=?(?!xml)(php)?([\\s\\S]*?)(\\?&gt;)/gm},{name:"source.css.embedded",matches:{1:{matches:{1:"support.tag.style",2:[{name:"entity.tag.style",pattern:/^style/g},{name:"string",pattern:/(\'|")(.*?)(\\1)/g},{name:"entity.tag.style.attribute",pattern:/(\\w+)/g}],3:"support.tag.style"},pattern:/(&lt;\\/?)(style.*?)(&gt;)/g},2:{language:"css"},3:"support.tag.style",4:"entity.tag.style",5:"support.tag.style"},pattern:/(&lt;style.*?&gt;)([\\s\\S]*?)(&lt;\\/)(style)(&gt;)/gm},\n{name:"source.js.embedded",matches:{1:{matches:{1:"support.tag.script",2:[{name:"entity.tag.script",pattern:/^script/g},{name:"string",pattern:/(\'|")(.*?)(\\1)/g},{name:"entity.tag.script.attribute",pattern:/(\\w+)/g}],3:"support.tag.script"},pattern:/(&lt;\\/?)(script.*?)(&gt;)/g},2:{language:"javascript"},3:"support.tag.script",4:"entity.tag.script",5:"support.tag.script"},pattern:/(&lt;script(?! src).*?&gt;)([\\s\\S]*?)(&lt;\\/)(script)(&gt;)/gm},{name:"comment.html",pattern:/&lt;\\!--[\\S\\s]*?--&gt;/g},\n{matches:{1:"support.tag.open",2:"support.tag.close"},pattern:/(&lt;)|(\\/?\\??&gt;)/g},{name:"support.tag",matches:{1:"support.tag",2:"support.tag.special",3:"support.tag-name"},pattern:/(&lt;\\??)(\\/|\\!?)(\\w+)/g},{matches:{1:"support.attribute"},pattern:/([a-z-]+)(?=\\=)/gi},{matches:{1:"support.operator",2:"string.quote",3:"string.value",4:"string.quote"},pattern:/(=)(\'|")(.*?)(\\2)/g},{matches:{1:"support.operator",2:"support.value"},pattern:/(=)([a-zA-Z\\-0-9]*)\\b/g},{matches:{1:"support.attribute"},\npattern:/\\s(\\w+)(?=\\s|&gt;)(?![\\s\\S]*&lt;)/g}],!0);\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./demo/src/vendor/rainbow-custom.min.js\n ** module id = 7\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./demo/src/vendor/rainbow-custom.min.js?')},function(module,exports,__webpack_require__){eval("'use strict';\n\nmodule.exports =  {\n  statusColor: '#5CE592',\n  statusInactiveColor: '#FC6F6F',\n  unMaskColor: '#c7c7c7',\n  unMaskTime: 1400,\n  zxcvbnSrc: 'https://cdnjs.cloudflare.com/ajax/libs/zxcvbn/1.0/zxcvbn.min.js'\n}\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/js/config.js\n ** module id = 8\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/js/config.js?")},function(module,exports,__webpack_require__){eval('\'use strict\';\n\nvar React = __webpack_require__(1),\n    RP    = React.PropTypes,\n    config = __webpack_require__(8),\n    debounce = __webpack_require__(10);\n\n\nvar InputPassword = React.createClass({displayName: "InputPassword",\n\n\n  /*==========  VALIDATE  ==========*/\n\n  propTypes: {\n    infoBar: RP.bool,\n    statusColor: RP.string,\n    statusInactiveColor: RP.string,\n    minScore: RP.number,\n    changeCb: RP.func,\n    toggleMask: RP.bool,\n    minLength: RP.number\n  },\n\n\n  /*==========  DEFAULTS  ==========*/\n\n  getDefaultProps:function() {\n    return {\n      infoBar: true,\n      statusColor: config.statusColor,\n      statusInactiveColor: config.statusInactiveColor,\n      zxcvbn: config.zxcvbnSrc,\n      minScore: 0,\n      toggleMask: true\n    }\n  },\n\n  getInitialState:function() {\n    return {\n      value: \'\',\n      score: 0,\n      entropy: 0,\n      isPassword: true\n    }\n  },\n\n\n  /*==========  STYLES  ==========*/\n\n  getMeterStyle:function(score) {\n    var width = 24 * score + 4;\n    return {\n      width: this.props.zxcvbn ? width + \'%\' : \'100%\',\n      maxWidth: \'96%\',\n      opacity: this.props.zxcvbn ? width * .01 + .5 : \'1\',\n      background: this.state.isValid ?  this.props.statusColor : this.props.statusInactiveColor,\n      height: 5,\n      transition: \'all 400ms linear\',\n      display: \'inline-block\'\n    }\n  },\n\n  unMaskStyle: {\n    color: config.unMaskColor,\n    fontStyle: \'italic\',\n    fontWeight: 200\n  },\n\n  infoStyle: {\n    position: \'absolute\',\n    bottom: -10,\n    width: \'100%\'\n  },\n\n  iconStyle: {\n    display: \'inline-block\',\n    opacity: .25,\n    position: \'relative\',\n    top: 2,\n    width: \'4%\'\n  },\n\n\n  /*==========  METHODS  ==========*/\n\n  addPasswordType:function() {\n    this.setState({\n      isPassword: true\n    });\n  },\n\n  /*==========  HANDLERS  ==========*/\n\n  handleInputType:function() {\n    this.setState({\n      isPassword: !this.state.isPassword\n    });\n  },\n\n  handleChange:function(e) {\n    e.preventDefault();\n    var val = e.target.value;\n\n    this.setState({\n      value: val,\n      isValid: e.target.validity.valid\n    });\n\n\n    if (this.props.toggleMask) {\n      this.handleToggleMask();\n    }\n\n    if (this.props.zxcvbn) {\n      this.handleZxcvbn(val);\n    }\n\n    if (this.props.minLength) {\n      this.handleMinLength(e.target.value.length)\n    }\n\n  },\n\n  handleToggleMask:function() {\n\n    // display password, then\n    this.setState({\n      isPassword: false\n    });\n\n    // debounce remasking password\n    this.maskPassword();\n  },\n\n  handleZxcvbn:function(val) {\n    var stats        = zxcvbn(val),\n        currentScore = stats.score;\n\n    this.setState({\n      score: currentScore,\n      entropy: stats.entropy\n    });\n\n    if (currentScore < this.props.minScore) {\n      this.setState({\n        isValid: false\n      });\n    }\n\n    // if score changed and callback provided\n    if (this.props.changeCb && this.state.score !== currentScore) {\n      this.props.changeCb(this.state.score, currentScore)\n    }\n\n    if (this.props.zxcvbn === \'debug\') {\n      console.debug(stats);\n    }\n  },\n\n  handleMinLength:function(len) {\n    if (len <= this.props.minLength) {\n      this.setState({\n        isValid: false\n      })\n    }\n  },\n\n  componentWillMount:function() {\n    var zxcvbnSrc;\n\n    // Load zxcvbn async if its enabled and doesn\'t already exist\n    if (this.props.zxcvbn && typeof zxcvbn === \'undefined\') {\n\n      zxcvbnSrc = this.props.zxcvbn !== \'debug\' ? this.props.zxcvbn : config.zxcvbnSrc;\n\n    // snippet to async load zxcvbn if enabled\n    (function(){var a;a=function(){var a,b;b=document.createElement("script");b.src=zxcvbnSrc;b.type="text/javascript";b.async=!0;a=document.getElementsByTagName("head")[0];return a.parentNode.insertBefore(b,a)};null!=window.attachEvent?window.attachEvent("onload",a):window.addEventListener("load",a,!1)}).call(this);\n    }\n\n    // set debouncer for password\n    if (this.props.toggleMask) {\n      this.maskPassword = debounce(this.addPasswordType, config.unMaskTime);\n    }\n  },\n\n  render:function() {\n    var infoBar;\n\n    if (this.props.infoBar) {\n      infoBar = React.createElement("div", {className: "passwordField__info", style: this.infoStyle}, \n        React.createElement("span", {style: this.iconStyle, className: "passwordField__icon"}, \n        React.createElement("img", {src: __webpack_require__(12), height: "10", width: "10"})\n        ), \n        React.createElement("span", {style: this.getMeterStyle(this.state.score), className: "passwordField__meter"})\n      )\n    }\n\n    return (\n      React.createElement("div", {\n        style: {position: \'relative\', display: \'inline-block\'}, \n        className: "passwordField", \n        "data-valid": this.state.isValid, \n        "data-score": this.state.score, \n        "data-entropy": this.state.entropy\n        }, \n        React.createElement("input", React.__spread({\n          ref: this.props.id, \n          className: "passwordField__input", \n          type: this.state.isPassword ? \'password\' : \'text\', \n          value: this.state.value, \n          style: this.state.isPassword ? null : this.unMaskStyle, \n          onChange: this.handleChange}, \n          this.props)\n        ), \n        infoBar\n      )\n    );\n  }\n});\n\nmodule.exports = InputPassword;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/js/react-password-field.js\n ** module id = 9\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/js/react-password-field.js?')},function(module,exports,__webpack_require__){eval("/**\n * lodash 3.0.1 (Custom Build) <https://lodash.com/>\n * Build: `lodash modern modularize exports=\"npm\" -o ./`\n * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>\n * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>\n * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n * Available under MIT license <https://lodash.com/license>\n */\nvar isNative = __webpack_require__(11);\n\n/** Used as the `TypeError` message for \"Functions\" methods. */\nvar FUNC_ERROR_TEXT = 'Expected a function';\n\n/* Native method references for those with the same name as other `lodash` methods. */\nvar nativeMax = Math.max,\n    nativeNow = isNative(nativeNow = Date.now) && nativeNow;\n\n/**\n * Gets the number of milliseconds that have elapsed since the Unix epoch\n * (1 January 1970 00:00:00 UTC).\n *\n * @static\n * @memberOf _\n * @category Date\n * @example\n *\n * _.defer(function(stamp) { console.log(_.now() - stamp); }, _.now());\n * // => logs the number of milliseconds it took for the deferred function to be invoked\n */\nvar now = nativeNow || function() {\n  return new Date().getTime();\n};\n\n/**\n * Creates a function that delays invoking `func` until after `wait` milliseconds\n * have elapsed since the last time it was invoked. The created function comes\n * with a `cancel` method to cancel delayed invocations. Provide an options\n * object to indicate that `func` should be invoked on the leading and/or\n * trailing edge of the `wait` timeout. Subsequent calls to the debounced\n * function return the result of the last `func` invocation.\n *\n * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked\n * on the trailing edge of the timeout only if the the debounced function is\n * invoked more than once during the `wait` timeout.\n *\n * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)\n * for details over the differences between `_.debounce` and `_.throttle`.\n *\n * @static\n * @memberOf _\n * @category Function\n * @param {Function} func The function to debounce.\n * @param {number} wait The number of milliseconds to delay.\n * @param {Object} [options] The options object.\n * @param {boolean} [options.leading=false] Specify invoking on the leading\n *  edge of the timeout.\n * @param {number} [options.maxWait] The maximum time `func` is allowed to be\n *  delayed before it is invoked.\n * @param {boolean} [options.trailing=true] Specify invoking on the trailing\n *  edge of the timeout.\n * @returns {Function} Returns the new debounced function.\n * @example\n *\n * // avoid costly calculations while the window size is in flux\n * jQuery(window).on('resize', _.debounce(calculateLayout, 150));\n *\n * // invoke `sendMail` when the click event is fired, debouncing subsequent calls\n * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {\n *   'leading': true,\n *   'trailing': false\n * }));\n *\n * // ensure `batchLog` is invoked once after 1 second of debounced calls\n * var source = new EventSource('/stream');\n * jQuery(source).on('message', _.debounce(batchLog, 250, {\n *   'maxWait': 1000\n * }));\n *\n * // cancel a debounced call\n * var todoChanges = _.debounce(batchLog, 1000);\n * Object.observe(models.todo, todoChanges);\n *\n * Object.observe(models, function(changes) {\n *   if (_.find(changes, { 'user': 'todo', 'type': 'delete'})) {\n *     todoChanges.cancel();\n *   }\n * }, ['delete']);\n *\n * // ...at some point `models.todo` is changed\n * models.todo.completed = true;\n *\n * // ...before 1 second has passed `models.todo` is deleted\n * // which cancels the debounced `todoChanges` call\n * delete models.todo;\n */\nfunction debounce(func, wait, options) {\n  var args,\n      maxTimeoutId,\n      result,\n      stamp,\n      thisArg,\n      timeoutId,\n      trailingCall,\n      lastCalled = 0,\n      maxWait = false,\n      trailing = true;\n\n  if (typeof func != 'function') {\n    throw new TypeError(FUNC_ERROR_TEXT);\n  }\n  wait = wait < 0 ? 0 : wait;\n  if (options === true) {\n    var leading = true;\n    trailing = false;\n  } else if (isObject(options)) {\n    leading = options.leading;\n    maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);\n    trailing = 'trailing' in options ? options.trailing : trailing;\n  }\n\n  function cancel() {\n    if (timeoutId) {\n      clearTimeout(timeoutId);\n    }\n    if (maxTimeoutId) {\n      clearTimeout(maxTimeoutId);\n    }\n    maxTimeoutId = timeoutId = trailingCall = undefined;\n  }\n\n  function delayed() {\n    var remaining = wait - (now() - stamp);\n    if (remaining <= 0 || remaining > wait) {\n      if (maxTimeoutId) {\n        clearTimeout(maxTimeoutId);\n      }\n      var isCalled = trailingCall;\n      maxTimeoutId = timeoutId = trailingCall = undefined;\n      if (isCalled) {\n        lastCalled = now();\n        result = func.apply(thisArg, args);\n        if (!timeoutId && !maxTimeoutId) {\n          args = thisArg = null;\n        }\n      }\n    } else {\n      timeoutId = setTimeout(delayed, remaining);\n    }\n  }\n\n  function maxDelayed() {\n    if (timeoutId) {\n      clearTimeout(timeoutId);\n    }\n    maxTimeoutId = timeoutId = trailingCall = undefined;\n    if (trailing || (maxWait !== wait)) {\n      lastCalled = now();\n      result = func.apply(thisArg, args);\n      if (!timeoutId && !maxTimeoutId) {\n        args = thisArg = null;\n      }\n    }\n  }\n\n  function debounced() {\n    args = arguments;\n    stamp = now();\n    thisArg = this;\n    trailingCall = trailing && (timeoutId || !leading);\n\n    if (maxWait === false) {\n      var leadingCall = leading && !timeoutId;\n    } else {\n      if (!maxTimeoutId && !leading) {\n        lastCalled = stamp;\n      }\n      var remaining = maxWait - (stamp - lastCalled),\n          isCalled = remaining <= 0 || remaining > maxWait;\n\n      if (isCalled) {\n        if (maxTimeoutId) {\n          maxTimeoutId = clearTimeout(maxTimeoutId);\n        }\n        lastCalled = stamp;\n        result = func.apply(thisArg, args);\n      }\n      else if (!maxTimeoutId) {\n        maxTimeoutId = setTimeout(maxDelayed, remaining);\n      }\n    }\n    if (isCalled && timeoutId) {\n      timeoutId = clearTimeout(timeoutId);\n    }\n    else if (!timeoutId && wait !== maxWait) {\n      timeoutId = setTimeout(delayed, wait);\n    }\n    if (leadingCall) {\n      isCalled = true;\n      result = func.apply(thisArg, args);\n    }\n    if (isCalled && !timeoutId && !maxTimeoutId) {\n      args = thisArg = null;\n    }\n    return result;\n  }\n  debounced.cancel = cancel;\n  return debounced;\n}\n\n/**\n * Checks if `value` is the language type of `Object`.\n * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * **Note:** See the [ES5 spec](https://es5.github.io/#x8) for more details.\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(1);\n * // => false\n */\nfunction isObject(value) {\n  // Avoid a V8 JIT bug in Chrome 19-20.\n  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.\n  var type = typeof value;\n  return type == 'function' || (value && type == 'object') || false;\n}\n\nmodule.exports = debounce;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/lodash.debounce/index.js\n ** module id = 10\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/lodash.debounce/index.js?")},function(module,exports,__webpack_require__){eval('/**\n * lodash 3.0.0 (Custom Build) <https://lodash.com/>\n * Build: `lodash modern modularize exports="npm" -o ./`\n * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>\n * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>\n * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n * Available under MIT license <https://lodash.com/license>\n */\n\n/** `Object#toString` result references. */\nvar funcTag = \'[object Function]\';\n\n/** Used to detect host constructors (Safari > 5). */\nvar reHostCtor = /^\\[object .+?Constructor\\]$/;\n\n/**\n * Used to match `RegExp` special characters.\n * See this [article on `RegExp` characters](http://www.regular-expressions.info/characters.html#special)\n * for more details.\n */\nvar reRegExpChars = /[.*+?^${}()|[\\]\\/\\\\]/g,\n    reHasRegExpChars = RegExp(reRegExpChars.source);\n\n/**\n * Converts `value` to a string if it is not one. An empty string is returned\n * for `null` or `undefined` values.\n *\n * @private\n * @param {*} value The value to process.\n * @returns {string} Returns the string.\n */\nfunction baseToString(value) {\n  if (typeof value == \'string\') {\n    return value;\n  }\n  return value == null ? \'\' : (value + \'\');\n}\n\n/**\n * Checks if `value` is object-like.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n */\nfunction isObjectLike(value) {\n  return (value && typeof value == \'object\') || false;\n}\n\n/** Used for native method references. */\nvar objectProto = Object.prototype;\n\n/** Used to resolve the decompiled source of functions. */\nvar fnToString = Function.prototype.toString;\n\n/**\n * Used to resolve the `toStringTag` of values.\n * See the [ES spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)\n * for more details.\n */\nvar objToString = objectProto.toString;\n\n/** Used to detect if a method is native. */\nvar reNative = RegExp(\'^\' +\n  escapeRegExp(objToString)\n  .replace(/toString|(function).*?(?=\\\\\\()| for .+?(?=\\\\\\])/g, \'$1.*?\') + \'$\'\n);\n\n/**\n * Checks if `value` is a native function.\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a native function, else `false`.\n * @example\n *\n * _.isNative(Array.prototype.push);\n * // => true\n *\n * _.isNative(_);\n * // => false\n */\nfunction isNative(value) {\n  if (value == null) {\n    return false;\n  }\n  if (objToString.call(value) == funcTag) {\n    return reNative.test(fnToString.call(value));\n  }\n  return (isObjectLike(value) && reHostCtor.test(value)) || false;\n}\n\n/**\n * Escapes the `RegExp` special characters "\\", "^", "$", ".", "|", "?", "*",\n * "+", "(", ")", "[", "]", "{" and "}" in `string`.\n *\n * @static\n * @memberOf _\n * @category String\n * @param {string} [string=\'\'] The string to escape.\n * @returns {string} Returns the escaped string.\n * @example\n *\n * _.escapeRegExp(\'[lodash](https://lodash.com/)\');\n * // => \'\\[lodash\\]\\(https://lodash\\.com/\\)\'\n */\nfunction escapeRegExp(string) {\n  string = baseToString(string);\n  return (string && reHasRegExpChars.test(string))\n    ? string.replace(reRegExpChars, \'\\\\$&\')\n    : string;\n}\n\nmodule.exports = isNative;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/lodash.debounce/~/lodash.isnative/index.js\n ** module id = 11\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/lodash.debounce/~/lodash.isnative/index.js?')},function(module,exports,__webpack_require__){eval('module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCRkNDMzg4M0FFN0IxMUU0OTE2RkY5MzYyMkI3QTVDMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCRkNDMzg4NEFFN0IxMUU0OTE2RkY5MzYyMkI3QTVDMiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkJGQ0MzODgxQUU3QjExRTQ5MTZGRjkzNjIyQjdBNUMyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkJGQ0MzODgyQUU3QjExRTQ5MTZGRjkzNjIyQjdBNUMyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+NkztvAAAAc9JREFUeNq8lk8oBFEcx2fG5k+0HJRQ/iVy2U1tUsjBzYnI2cUWJyl3XJRSkgOtxEU4keLgQP6kuColoeQgEkXWand8X/3UNM28Z56Z961PO2/fb9535r3f/N7TTdPUnBSLxTSBcsEA6AW1IAw+wD3YAtPg0+1mXdK4DJyAKk7MM+gE506dhuZdleBSYMpUDM5Ah1NnyKOpDnZpWn91C/ZBksZrBhFL/zaopyWQNh4HDZZ2AsQd4kbBFF3ngRnQ8581vgHVdH0M2jgPeWjpz1BePMqscdRiyrQhiF+25VK7bHI12toXgvg9+yTKGpc6TDtPD+DJ0i6RNS6ytZOC+IwtpkA2q1epKLyDb/D2h3uGQQXIBqcyWd1FBeEOZNFM1YEckHYpTGzgKyqbpmWp1kEq9IeCcQRaNP80CZoMQclb8NmUqRys8IxZpenTglHUEOxAhQEZ5/OM01qAMnwah+3Ng2BTpTGr2a1gHnSDCVXGs7Z2QpVxjUNSKjGeo29T+RuHqaRqtOdGVGZ1in6/VH9OYZet01Uhnx5qBLyAIT+MvVQulslLflWuazq+BKFXnvEaWAzI+IA31ezUMEaJE6dDQYb+9yrdMrs7oP9HgAEAXmVa5ulD/g0AAAAASUVORK5CYII="\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/img/lock.png\n ** module id = 12\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/img/lock.png?')}]);