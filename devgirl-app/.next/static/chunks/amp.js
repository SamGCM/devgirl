(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["amp"],{

/***/ "./node_modules/next/dist/client/dev/amp-dev.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/dev/amp-dev.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _eventSourcePolyfill = _interopRequireDefault(__webpack_require__(/*! ./event-source-polyfill */ "./node_modules/next/dist/client/dev/event-source-polyfill.js"));

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");

var _onDemandEntriesUtils = __webpack_require__(/*! ./on-demand-entries-utils */ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js");

var _fouc = __webpack_require__(/*! ./fouc */ "./node_modules/next/dist/client/dev/fouc.js");
/* globals __webpack_hash__ */


if (!window.EventSource) {
  window.EventSource = _eventSourcePolyfill["default"];
}

var data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
var assetPrefix = data.assetPrefix,
    page = data.page;
assetPrefix = assetPrefix || '';
var mostRecentHash = null;
/* eslint-disable-next-line */

var curHash = __webpack_require__.h();
var hotUpdatePath = assetPrefix + (assetPrefix.endsWith('/') ? '' : '/') + '_next/static/webpack/'; // Is there a newer version of this code available?

function isUpdateAvailable() {
  // __webpack_hash__ is the hash of the current compilation.
  // It's a global variable injected by Webpack.

  /* eslint-disable-next-line */
  return mostRecentHash !== __webpack_require__.h();
} // Webpack disallows updates in other states.


function canApplyUpdates() {
  return module.hot.status() === 'idle';
} // This function reads code updates on the fly and hard
// reloads the page when it has changed.


function tryApplyUpdates() {
  return _tryApplyUpdates.apply(this, arguments);
}

function _tryApplyUpdates() {
  _tryApplyUpdates = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var res, jsonData, curPage, pageUpdated;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!isUpdateAvailable() || !canApplyUpdates())) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            _context.prev = 2;
            _context.next = 5;
            return fetch(typeof __webpack_require__.j !== 'undefined' ? // eslint-disable-next-line no-undef
            "".concat(hotUpdatePath).concat(curHash, ".").concat(__webpack_require__.j, ".hot-update.json") : "".concat(hotUpdatePath).concat(curHash, ".hot-update.json"));

          case 5:
            res = _context.sent;
            _context.next = 8;
            return res.json();

          case 8:
            jsonData = _context.sent;
            curPage = page === '/' ? 'index' : page; // webpack 5 uses an array instead

            pageUpdated = (Array.isArray(jsonData.c) ? jsonData.c : Object.keys(jsonData.c)).some(function (mod) {
              return mod.indexOf("pages".concat(curPage.substr(0, 1) === '/' ? curPage : "/".concat(curPage))) !== -1 || mod.indexOf("pages".concat(curPage.substr(0, 1) === '/' ? curPage : "/".concat(curPage)).replace(/\//g, '\\')) !== -1;
            });

            if (pageUpdated) {
              document.location.reload(true);
            } else {
              curHash = mostRecentHash;
            }

            _context.next = 18;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](2);
            console.error('Error occurred checking for update', _context.t0);
            document.location.reload(true);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 14]]);
  }));
  return _tryApplyUpdates.apply(this, arguments);
}

(0, _eventsource.addMessageListener)(function (event) {
  if (event.data === "\uD83D\uDC93") {
    return;
  }

  try {
    var message = JSON.parse(event.data);

    if (message.action === 'sync' || message.action === 'built') {
      if (!message.hash) {
        return;
      }

      mostRecentHash = message.hash;
      tryApplyUpdates();
    } else if (message.action === 'reloadPage') {
      document.location.reload(true);
    }
  } catch (ex) {
    console.warn('Invalid HMR message: ' + event.data + '\n' + ex);
  }
});
(0, _onDemandEntriesUtils.setupPing)(assetPrefix, function () {
  return page;
});
(0, _fouc.displayContent)();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/error-overlay/eventsource.js ***!
  \************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.addMessageListener = addMessageListener;
exports.getEventSourceWrapper = getEventSourceWrapper;
var eventCallbacks = [];

function EventSourceWrapper(options) {
  var source;
  var lastActivity = new Date();
  var listeners = [];

  if (!options.timeout) {
    options.timeout = 20 * 1000;
  }

  init();
  var timer = setInterval(function () {
    if (new Date() - lastActivity > options.timeout) {
      handleDisconnect();
    }
  }, options.timeout / 2);

  function init() {
    source = new window.EventSource(options.path);
    source.onopen = handleOnline;
    source.onerror = handleDisconnect;
    source.onmessage = handleMessage;
  }

  function handleOnline() {
    if (options.log) console.log('[HMR] connected');
    lastActivity = new Date();
  }

  function handleMessage(event) {
    lastActivity = new Date();

    for (var i = 0; i < listeners.length; i++) {
      listeners[i](event);
    }

    eventCallbacks.forEach(function (cb) {
      if (!cb.unfiltered && event.data.indexOf('action') === -1) return;
      cb(event);
    });
  }

  function handleDisconnect() {
    clearInterval(timer);
    source.close();
    setTimeout(init, options.timeout);
  }

  return {
    close: function close() {
      clearInterval(timer);
      source.close();
    },
    addMessageListener: function addMessageListener(fn) {
      listeners.push(fn);
    }
  };
}

_c = EventSourceWrapper;

function addMessageListener(cb) {
  eventCallbacks.push(cb);
}

function getEventSourceWrapper(options) {
  return EventSourceWrapper(options);
}

var _c;

$RefreshReg$(_c, "EventSourceWrapper");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/dev/event-source-polyfill.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/event-source-polyfill.js ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.default = void 0;
/* eslint-disable */
// Improved version of https://github.com/Yaffle/EventSource/
// Available under MIT License (MIT)
// Only tries to support IE11 and nothing below

var document = window.document;
var Response = window.Response;
var TextDecoder = window.TextDecoder;
var TextEncoder = window.TextEncoder;
var AbortController = window.AbortController;

if (AbortController == undefined) {
  AbortController = function AbortController() {
    this.signal = null;

    this.abort = function () {};
  };
}

function TextDecoderPolyfill() {
  this.bitsNeeded = 0;
  this.codePoint = 0;
}

_c = TextDecoderPolyfill;

TextDecoderPolyfill.prototype.decode = function (octets) {
  function valid(codePoint, shift, octetsCount) {
    if (octetsCount === 1) {
      return codePoint >= 0x0080 >> shift && codePoint << shift <= 0x07ff;
    }

    if (octetsCount === 2) {
      return codePoint >= 0x0800 >> shift && codePoint << shift <= 0xd7ff || codePoint >= 0xe000 >> shift && codePoint << shift <= 0xffff;
    }

    if (octetsCount === 3) {
      return codePoint >= 0x010000 >> shift && codePoint << shift <= 0x10ffff;
    }

    throw new Error();
  }

  function octetsCount(bitsNeeded, codePoint) {
    if (bitsNeeded === 6 * 1) {
      return codePoint >> 6 > 15 ? 3 : codePoint > 31 ? 2 : 1;
    }

    if (bitsNeeded === 6 * 2) {
      return codePoint > 15 ? 3 : 2;
    }

    if (bitsNeeded === 6 * 3) {
      return 3;
    }

    throw new Error();
  }

  var REPLACER = 0xfffd;
  var string = '';
  var bitsNeeded = this.bitsNeeded;
  var codePoint = this.codePoint;

  for (var i = 0; i < octets.length; i += 1) {
    var octet = octets[i];

    if (bitsNeeded !== 0) {
      if (octet < 128 || octet > 191 || !valid(codePoint << 6 | octet & 63, bitsNeeded - 6, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
        string += String.fromCharCode(codePoint);
      }
    }

    if (bitsNeeded === 0) {
      if (octet >= 0 && octet <= 127) {
        bitsNeeded = 0;
        codePoint = octet;
      } else if (octet >= 192 && octet <= 223) {
        bitsNeeded = 6 * 1;
        codePoint = octet & 31;
      } else if (octet >= 224 && octet <= 239) {
        bitsNeeded = 6 * 2;
        codePoint = octet & 15;
      } else if (octet >= 240 && octet <= 247) {
        bitsNeeded = 6 * 3;
        codePoint = octet & 7;
      } else {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }

      if (bitsNeeded !== 0 && !valid(codePoint, bitsNeeded, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }
    } else {
      bitsNeeded -= 6;
      codePoint = codePoint << 6 | octet & 63;
    }

    if (bitsNeeded === 0) {
      if (codePoint <= 0xffff) {
        string += String.fromCharCode(codePoint);
      } else {
        string += String.fromCharCode(0xd800 + (codePoint - 0xffff - 1 >> 10));
        string += String.fromCharCode(0xdc00 + (codePoint - 0xffff - 1 & 0x3ff));
      }
    }
  }

  this.bitsNeeded = bitsNeeded;
  this.codePoint = codePoint;
  return string;
}; // Firefox < 38 throws an error with stream option


var supportsStreamOption = function supportsStreamOption() {
  try {
    return new TextDecoder().decode(new TextEncoder().encode('test'), {
      stream: true
    }) === 'test';
  } catch (error) {
    console.log(error);
  }

  return false;
}; // IE, Edge


if (TextDecoder == undefined || TextEncoder == undefined || !supportsStreamOption()) {
  TextDecoder = TextDecoderPolyfill;
}

var k = function k() {};

function XHRWrapper(xhr) {
  this.withCredentials = false;
  this.responseType = '';
  this.readyState = 0;
  this.status = 0;
  this.statusText = '';
  this.responseText = '';
  this.onprogress = k;
  this.onreadystatechange = k;
  this._contentType = '';
  this._xhr = xhr;
  this._sendTimeout = 0;
  this._abort = k;
}

_c2 = XHRWrapper;

XHRWrapper.prototype.open = function (method, url) {
  this._abort(true);

  var that = this;
  var xhr = this._xhr;
  var state = 1;
  var timeout = 0;

  this._abort = function (silent) {
    if (that._sendTimeout !== 0) {
      clearTimeout(that._sendTimeout);
      that._sendTimeout = 0;
    }

    if (state === 1 || state === 2 || state === 3) {
      state = 4;
      xhr.onload = k;
      xhr.onerror = k;
      xhr.onabort = k;
      xhr.onprogress = k;
      xhr.onreadystatechange = k; // IE 8 - 9: XDomainRequest#abort() does not fire any event
      // Opera < 10: XMLHttpRequest#abort() does not fire any event

      xhr.abort();

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      if (!silent) {
        that.readyState = 4;
        that.onreadystatechange();
      }
    }

    state = 0;
  };

  var onStart = function onStart() {
    if (state === 1) {
      // state = 2;
      var status = 0;
      var statusText = '';
      var contentType = undefined;

      if (!('contentType' in xhr)) {
        try {
          status = xhr.status;
          statusText = xhr.statusText;
          contentType = xhr.getResponseHeader('Content-Type');
        } catch (error) {
          // IE < 10 throws exception for `xhr.status` when xhr.readyState === 2 || xhr.readyState === 3
          // Opera < 11 throws exception for `xhr.status` when xhr.readyState === 2
          // https://bugs.webkit.org/show_bug.cgi?id=29121
          status = 0;
          statusText = '';
          contentType = undefined; // Firefox < 14, Chrome ?, Safari ?
          // https://bugs.webkit.org/show_bug.cgi?id=29658
          // https://bugs.webkit.org/show_bug.cgi?id=77854
        }
      } else {
        status = 200;
        statusText = 'OK';
        contentType = xhr.contentType;
      }

      if (status !== 0) {
        state = 2;
        that.readyState = 2;
        that.status = status;
        that.statusText = statusText;
        that._contentType = contentType;
        that.onreadystatechange();
      }
    }
  };

  var onProgress = function onProgress() {
    onStart();

    if (state === 2 || state === 3) {
      state = 3;
      var responseText = '';

      try {
        responseText = xhr.responseText;
      } catch (error) {// IE 8 - 9 with XMLHttpRequest
      }

      that.readyState = 3;
      that.responseText = responseText;
      that.onprogress();
    }
  };

  var onFinish = function onFinish() {
    // Firefox 52 fires "readystatechange" (xhr.readyState === 4) without final "readystatechange" (xhr.readyState === 3)
    // IE 8 fires "onload" without "onprogress"
    onProgress();

    if (state === 1 || state === 2 || state === 3) {
      state = 4;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      that.readyState = 4;
      that.onreadystatechange();
    }
  };

  var onReadyStateChange = function onReadyStateChange() {
    if (xhr != undefined) {
      // Opera 12
      if (xhr.readyState === 4) {
        onFinish();
      } else if (xhr.readyState === 3) {
        onProgress();
      } else if (xhr.readyState === 2) {
        onStart();
      }
    }
  };

  var onTimeout = function onTimeout() {
    timeout = setTimeout(function () {
      onTimeout();
    }, 500);

    if (xhr.readyState === 3) {
      onProgress();
    }
  }; // XDomainRequest#abort removes onprogress, onerror, onload


  xhr.onload = onFinish;
  xhr.onerror = onFinish; // improper fix to match Firefox behavior, but it is better than just ignore abort
  // see https://bugzilla.mozilla.org/show_bug.cgi?id=768596
  // https://bugzilla.mozilla.org/show_bug.cgi?id=880200
  // https://code.google.com/p/chromium/issues/detail?id=153570
  // IE 8 fires "onload" without "onprogress

  xhr.onabort = onFinish; // https://bugzilla.mozilla.org/show_bug.cgi?id=736723

  if (!('sendAsBinary' in XMLHttpRequest.prototype) && !('mozAnon' in XMLHttpRequest.prototype)) {
    xhr.onprogress = onProgress;
  } // IE 8 - 9 (XMLHTTPRequest)
  // Opera < 12
  // Firefox < 3.5
  // Firefox 3.5 - 3.6 - ? < 9.0
  // onprogress is not fired sometimes or delayed
  // see also #64


  xhr.onreadystatechange = onReadyStateChange;

  if ('contentType' in xhr) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + 'padding=true';
  }

  xhr.open(method, url, true);

  if ('readyState' in xhr) {
    // workaround for Opera 12 issue with "progress" events
    // #91
    timeout = setTimeout(function () {
      onTimeout();
    }, 0);
  }
};

XHRWrapper.prototype.abort = function () {
  this._abort(false);
};

XHRWrapper.prototype.getResponseHeader = function (name) {
  return this._contentType;
};

XHRWrapper.prototype.setRequestHeader = function (name, value) {
  var xhr = this._xhr;

  if ('setRequestHeader' in xhr) {
    xhr.setRequestHeader(name, value);
  }
};

XHRWrapper.prototype.getAllResponseHeaders = function () {
  return this._xhr.getAllResponseHeaders != undefined ? this._xhr.getAllResponseHeaders() : '';
};

XHRWrapper.prototype.send = function () {
  // loading indicator in Safari < ? (6), Chrome < 14, Firefox
  if (!('ontimeout' in XMLHttpRequest.prototype) && document != undefined && document.readyState != undefined && document.readyState !== 'complete') {
    var that = this;
    that._sendTimeout = setTimeout(function () {
      that._sendTimeout = 0;
      that.send();
    }, 4);
    return;
  }

  var xhr = this._xhr; // withCredentials should be set after "open" for Safari and Chrome (< 19 ?)

  xhr.withCredentials = this.withCredentials;
  xhr.responseType = this.responseType;

  try {
    // xhr.send(); throws "Not enough arguments" in Firefox 3.0
    xhr.send(undefined);
  } catch (error1) {
    // Safari 5.1.7, Opera 12
    throw error1;
  }
};

function toLowerCase(name) {
  return name.replace(/[A-Z]/g, function (c) {
    return String.fromCharCode(c.charCodeAt(0) + 0x20);
  });
}

function HeadersPolyfill(all) {
  // Get headers: implemented according to mozilla's example code: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders#Example
  var map = Object.create(null);
  var array = all.split('\r\n');

  for (var i = 0; i < array.length; i += 1) {
    var line = array[i];
    var parts = line.split(': ');
    var name = parts.shift();
    var value = parts.join(': ');
    map[toLowerCase(name)] = value;
  }

  this._map = map;
}

_c3 = HeadersPolyfill;

HeadersPolyfill.prototype.get = function (name) {
  return this._map[toLowerCase(name)];
};

function XHRTransport() {}

_c4 = XHRTransport;

XHRTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  xhr.open('GET', url);
  var offset = 0;

  xhr.onprogress = function () {
    var responseText = xhr.responseText;
    var chunk = responseText.slice(offset);
    offset += chunk.length;
    onProgressCallback(chunk);
  };

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 2) {
      var status = xhr.status;
      var statusText = xhr.statusText;
      var contentType = xhr.getResponseHeader('Content-Type');
      var headers = xhr.getAllResponseHeaders();
      onStartCallback(status, statusText, contentType, new HeadersPolyfill(headers), function () {
        xhr.abort();
      });
    } else if (xhr.readyState === 4) {
      onFinishCallback();
    }
  };

  xhr.withCredentials = withCredentials;
  xhr.responseType = 'text';

  for (var name in headers) {
    if (Object.prototype.hasOwnProperty.call(headers, name)) {
      xhr.setRequestHeader(name, headers[name]);
    }
  }

  xhr.send();
};

function HeadersWrapper(headers) {
  this._headers = headers;
}

_c5 = HeadersWrapper;

HeadersWrapper.prototype.get = function (name) {
  return this._headers.get(name);
};

function FetchTransport() {}

_c6 = FetchTransport;

FetchTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  var controller = new AbortController();
  var signal = controller.signal; // see #120

  var textDecoder = new TextDecoder();
  fetch(url, {
    headers: headers,
    credentials: withCredentials ? 'include' : 'same-origin',
    signal: signal,
    cache: 'no-store'
  }).then(function (response) {
    var reader = response.body.getReader();
    onStartCallback(response.status, response.statusText, response.headers.get('Content-Type'), new HeadersWrapper(response.headers), function () {
      controller.abort();
      reader.cancel();
    });
    return new Promise(function (resolve, reject) {
      var readNextChunk = function readNextChunk() {
        reader.read().then(function (result) {
          if (result.done) {
            // Note: bytes in textDecoder are ignored
            resolve(undefined);
          } else {
            var chunk = textDecoder.decode(result.value, {
              stream: true
            });
            onProgressCallback(chunk);
            readNextChunk();
          }
        })['catch'](function (error) {
          reject(error);
        });
      };

      readNextChunk();
    });
  }).then(function (result) {
    onFinishCallback();
    return result;
  }, function (error) {
    onFinishCallback();
    return Promise.reject(error);
  });
};

function EventTarget() {
  this._listeners = Object.create(null);
}

_c7 = EventTarget;

function throwError(e) {
  setTimeout(function () {
    throw e;
  }, 0);
}

EventTarget.prototype.dispatchEvent = function (event) {
  event.target = this;
  var typeListeners = this._listeners[event.type];

  if (typeListeners != undefined) {
    var length = typeListeners.length;

    for (var i = 0; i < length; i += 1) {
      var listener = typeListeners[i];

      try {
        if (typeof listener.handleEvent === 'function') {
          listener.handleEvent(event);
        } else {
          listener.call(this, event);
        }
      } catch (e) {
        throwError(e);
      }
    }
  }
};

EventTarget.prototype.addEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners == undefined) {
    typeListeners = [];
    listeners[type] = typeListeners;
  }

  var found = false;

  for (var i = 0; i < typeListeners.length; i += 1) {
    if (typeListeners[i] === listener) {
      found = true;
    }
  }

  if (!found) {
    typeListeners.push(listener);
  }
};

EventTarget.prototype.removeEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners != undefined) {
    var filtered = [];

    for (var i = 0; i < typeListeners.length; i += 1) {
      if (typeListeners[i] !== listener) {
        filtered.push(typeListeners[i]);
      }
    }

    if (filtered.length === 0) {
      delete listeners[type];
    } else {
      listeners[type] = filtered;
    }
  }
};

function Event(type) {
  this.type = type;
  this.target = undefined;
}

_c8 = Event;

function MessageEvent(type, options) {
  Event.call(this, type);
  this.data = options.data;
  this.lastEventId = options.lastEventId;
}

_c9 = MessageEvent;
MessageEvent.prototype = Object.create(Event.prototype);

function ConnectionEvent(type, options) {
  Event.call(this, type);
  this.status = options.status;
  this.statusText = options.statusText;
  this.headers = options.headers;
}

_c10 = ConnectionEvent;
ConnectionEvent.prototype = Object.create(Event.prototype);
var WAITING = -1;
var CONNECTING = 0;
var OPEN = 1;
var CLOSED = 2;
var AFTER_CR = -1;
var FIELD_START = 0;
var FIELD = 1;
var VALUE_START = 2;
var VALUE = 3;
var contentTypeRegExp = /^text\/event\-stream;?(\s*charset\=utf\-8)?$/i;
var MINIMUM_DURATION = 1000;
var MAXIMUM_DURATION = 18000000;

var parseDuration = function parseDuration(value, def) {
  var n = parseInt(value, 10);

  if (n !== n) {
    n = def;
  }

  return clampDuration(n);
};

var clampDuration = function clampDuration(n) {
  return Math.min(Math.max(n, MINIMUM_DURATION), MAXIMUM_DURATION);
};

var fire = function fire(that, f, event) {
  try {
    if (typeof f === 'function') {
      f.call(that, event);
    }
  } catch (e) {
    throwError(e);
  }
};

function EventSourcePolyfill(url, options) {
  EventTarget.call(this);
  this.onopen = undefined;
  this.onmessage = undefined;
  this.onerror = undefined;
  this.url = undefined;
  this.readyState = undefined;
  this.withCredentials = undefined;
  this._close = undefined;
  start(this, url, options);
}

_c11 = EventSourcePolyfill;
var isFetchSupported = fetch != undefined && Response != undefined && 'body' in Response.prototype;

function start(es, url, options) {
  url = String(url);
  var withCredentials = options != undefined && Boolean(options.withCredentials);
  var initialRetry = clampDuration(1000);
  var heartbeatTimeout = options != undefined && options.heartbeatTimeout != undefined ? parseDuration(options.heartbeatTimeout, 45000) : clampDuration(45000);
  var lastEventId = '';
  var retry = initialRetry;
  var wasActivity = false;
  var headers = options != undefined && options.headers != undefined ? JSON.parse(JSON.stringify(options.headers)) : undefined;
  var CurrentTransport = options != undefined && options.Transport != undefined ? options.Transport : XMLHttpRequest;
  var xhr = isFetchSupported && !(options != undefined && options.Transport != undefined) ? undefined : new XHRWrapper(new CurrentTransport());
  var transport = xhr == undefined ? new FetchTransport() : new XHRTransport();
  var cancelFunction = undefined;
  var timeout = 0;
  var currentState = WAITING;
  var dataBuffer = '';
  var lastEventIdBuffer = '';
  var eventTypeBuffer = '';
  var textBuffer = '';
  var state = FIELD_START;
  var fieldStart = 0;
  var valueStart = 0;

  var onStart = function onStart(status, statusText, contentType, headers, cancel) {
    if (currentState === CONNECTING) {
      cancelFunction = cancel;

      if (status === 200 && contentType != undefined && contentTypeRegExp.test(contentType)) {
        currentState = OPEN;
        wasActivity = true;
        retry = initialRetry;
        es.readyState = OPEN;
        var event = new ConnectionEvent('open', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onopen, event);
      } else {
        var message = '';

        if (status !== 200) {
          if (statusText) {
            statusText = statusText.replace(/\s+/g, ' ');
          }

          message = "EventSource's response has a status " + status + ' ' + statusText + ' that is not 200. Aborting the connection.';
        } else {
          message = "EventSource's response has a Content-Type specifying an unsupported type: " + (contentType == undefined ? '-' : contentType.replace(/\s+/g, ' ')) + '. Aborting the connection.';
        }

        throwError(new Error(message));
        close();
        var event = new ConnectionEvent('error', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onerror, event);
      }
    }
  };

  var onProgress = function onProgress(textChunk) {
    if (currentState === OPEN) {
      var n = -1;

      for (var i = 0; i < textChunk.length; i += 1) {
        var c = textChunk.charCodeAt(i);

        if (c === '\n'.charCodeAt(0) || c === '\r'.charCodeAt(0)) {
          n = i;
        }
      }

      var chunk = (n !== -1 ? textBuffer : '') + textChunk.slice(0, n + 1);
      textBuffer = (n === -1 ? textBuffer : '') + textChunk.slice(n + 1);

      if (chunk !== '') {
        wasActivity = true;
      }

      for (var position = 0; position < chunk.length; position += 1) {
        var c = chunk.charCodeAt(position);

        if (state === AFTER_CR && c === '\n'.charCodeAt(0)) {
          state = FIELD_START;
        } else {
          if (state === AFTER_CR) {
            state = FIELD_START;
          }

          if (c === '\r'.charCodeAt(0) || c === '\n'.charCodeAt(0)) {
            if (state !== FIELD_START) {
              if (state === FIELD) {
                valueStart = position + 1;
              }

              var field = chunk.slice(fieldStart, valueStart - 1);
              var value = chunk.slice(valueStart + (valueStart < position && chunk.charCodeAt(valueStart) === ' '.charCodeAt(0) ? 1 : 0), position);

              if (field === 'data') {
                dataBuffer += '\n';
                dataBuffer += value;
              } else if (field === 'id') {
                lastEventIdBuffer = value;
              } else if (field === 'event') {
                eventTypeBuffer = value;
              } else if (field === 'retry') {
                initialRetry = parseDuration(value, initialRetry);
                retry = initialRetry;
              } else if (field === 'heartbeatTimeout') {
                heartbeatTimeout = parseDuration(value, heartbeatTimeout);

                if (timeout !== 0) {
                  clearTimeout(timeout);
                  timeout = setTimeout(function () {
                    onTimeout();
                  }, heartbeatTimeout);
                }
              }
            }

            if (state === FIELD_START) {
              if (dataBuffer !== '') {
                lastEventId = lastEventIdBuffer;

                if (eventTypeBuffer === '') {
                  eventTypeBuffer = 'message';
                }

                var event = new MessageEvent(eventTypeBuffer, {
                  data: dataBuffer.slice(1),
                  lastEventId: lastEventIdBuffer
                });
                es.dispatchEvent(event);

                if (eventTypeBuffer === 'message') {
                  fire(es, es.onmessage, event);
                }

                if (currentState === CLOSED) {
                  return;
                }
              }

              dataBuffer = '';
              eventTypeBuffer = '';
            }

            state = c === '\r'.charCodeAt(0) ? AFTER_CR : FIELD_START;
          } else {
            if (state === FIELD_START) {
              fieldStart = position;
              state = FIELD;
            }

            if (state === FIELD) {
              if (c === ':'.charCodeAt(0)) {
                valueStart = position + 1;
                state = VALUE_START;
              }
            } else if (state === VALUE_START) {
              state = VALUE;
            }
          }
        }
      }
    }
  };

  var onFinish = function onFinish() {
    if (currentState === OPEN || currentState === CONNECTING) {
      currentState = WAITING;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      timeout = setTimeout(function () {
        onTimeout();
      }, retry);
      retry = clampDuration(Math.min(initialRetry * 16, retry * 2));
      es.readyState = CONNECTING;
      var event = new Event('error');
      es.dispatchEvent(event);
      fire(es, es.onerror, event);
    }
  };

  var close = function close() {
    currentState = CLOSED;

    if (cancelFunction != undefined) {
      cancelFunction();
      cancelFunction = undefined;
    }

    if (timeout !== 0) {
      clearTimeout(timeout);
      timeout = 0;
    }

    es.readyState = CLOSED;
  };

  var onTimeout = function onTimeout() {
    timeout = 0;

    if (currentState !== WAITING) {
      if (!wasActivity && cancelFunction != undefined) {
        throwError(new Error('No activity within ' + heartbeatTimeout + ' milliseconds. Reconnecting.'));
        cancelFunction();
        cancelFunction = undefined;
      } else {
        wasActivity = false;
        timeout = setTimeout(function () {
          onTimeout();
        }, heartbeatTimeout);
      }

      return;
    }

    wasActivity = false;
    timeout = setTimeout(function () {
      onTimeout();
    }, heartbeatTimeout);
    currentState = CONNECTING;
    dataBuffer = '';
    eventTypeBuffer = '';
    lastEventIdBuffer = lastEventId;
    textBuffer = '';
    fieldStart = 0;
    valueStart = 0;
    state = FIELD_START; // https://bugzilla.mozilla.org/show_bug.cgi?id=428916
    // Request header field Last-Event-ID is not allowed by Access-Control-Allow-Headers.

    var requestURL = url;

    if (url.slice(0, 5) !== 'data:' && url.slice(0, 5) !== 'blob:') {
      if (lastEventId !== '') {
        requestURL += (url.indexOf('?') === -1 ? '?' : '&') + 'lastEventId=' + encodeURIComponent(lastEventId);
      }
    }

    var requestHeaders = {};
    requestHeaders['Accept'] = 'text/event-stream';

    if (headers != undefined) {
      for (var name in headers) {
        if (Object.prototype.hasOwnProperty.call(headers, name)) {
          requestHeaders[name] = headers[name];
        }
      }
    }

    try {
      transport.open(xhr, onStart, onProgress, onFinish, requestURL, withCredentials, requestHeaders);
    } catch (error) {
      close();
      throw error;
    }
  };

  es.url = url;
  es.readyState = CONNECTING;
  es.withCredentials = withCredentials;
  es._close = close;
  onTimeout();
}

EventSourcePolyfill.prototype = Object.create(EventTarget.prototype);
EventSourcePolyfill.prototype.CONNECTING = CONNECTING;
EventSourcePolyfill.prototype.OPEN = OPEN;
EventSourcePolyfill.prototype.CLOSED = CLOSED;

EventSourcePolyfill.prototype.close = function () {
  this._close();
};

EventSourcePolyfill.CONNECTING = CONNECTING;
EventSourcePolyfill.OPEN = OPEN;
EventSourcePolyfill.CLOSED = CLOSED;
EventSourcePolyfill.prototype.withCredentials = undefined;
var _default = EventSourcePolyfill;
exports.default = _default;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;

$RefreshReg$(_c, "TextDecoderPolyfill");
$RefreshReg$(_c2, "XHRWrapper");
$RefreshReg$(_c3, "HeadersPolyfill");
$RefreshReg$(_c4, "XHRTransport");
$RefreshReg$(_c5, "HeadersWrapper");
$RefreshReg$(_c6, "FetchTransport");
$RefreshReg$(_c7, "EventTarget");
$RefreshReg$(_c8, "Event");
$RefreshReg$(_c9, "MessageEvent");
$RefreshReg$(_c10, "ConnectionEvent");
$RefreshReg$(_c11, "EventSourcePolyfill");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/dev/fouc.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/client/dev/fouc.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.displayContent = displayContent; // This function is used to remove Next.js' no-FOUC styles workaround for using
// `style-loader` in development. It must be called before hydration, or else
// rendering won't have the correct computed values in effects.

function displayContent(callback) {
  ;
  (window.requestAnimationFrame || setTimeout)(function () {
    for (var x = document.querySelectorAll('[data-next-hide-fouc]'), i = x.length; i--;) {
      x[i].parentNode.removeChild(x[i]);
    }

    if (callback) {
      callback();
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/on-demand-entries-utils.js ***!
  \**********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.closePing = closePing;
exports.setupPing = setupPing;
exports.currentPage = void 0;

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");
/* global location */


var evtSource;
var currentPage;
exports.currentPage = currentPage;

function closePing() {
  if (evtSource) evtSource.close();
  evtSource = null;
}

function setupPing(assetPrefix, pathnameFn, retry) {
  var pathname = pathnameFn(); // Make sure to only create new EventSource request if page has changed

  if (pathname === currentPage && !retry) return;
  exports.currentPage = currentPage = pathname; // close current EventSource connection

  closePing();
  evtSource = (0, _eventsource.getEventSourceWrapper)({
    path: "".concat(assetPrefix, "/_next/webpack-hmr?page=").concat(currentPage),
    timeout: 5000
  });
  evtSource.addMessageListener(function (event) {
    if (event.data.indexOf('{') === -1) return;

    try {
      var payload = JSON.parse(event.data);

      if (payload.invalid) {
        // Payload can be invalid even if the page does not exist.
        // So, we need to make sure it exists before reloading.
        fetch(location.href, {
          credentials: 'same-origin'
        }).then(function (pageRes) {
          if (pageRes.status === 200) {
            location.reload();
          }
        });
      }
    } catch (err) {
      console.error('on-demand-entries failed to parse response', err);
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \***********************************************************************************/
/***/ (function(module) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/regenerator/index.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ // runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/client/dev/amp-dev.js"));
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvZGV2L2FtcC1kZXYuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2Rldi9lcnJvci1vdmVybGF5L2V2ZW50c291cmNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9kZXYvZXZlbnQtc291cmNlLXBvbHlmaWxsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9kZXYvZm91Yy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvZGV2L29uLWRlbWFuZC1lbnRyaWVzLXV0aWxzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyJdLCJuYW1lcyI6WyJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9ldmVudFNvdXJjZVBvbHlmaWxsIiwiX2V2ZW50c291cmNlIiwiX29uRGVtYW5kRW50cmllc1V0aWxzIiwiX2ZvdWMiLCJ3aW5kb3ciLCJFdmVudFNvdXJjZSIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidGV4dENvbnRlbnQiLCJhc3NldFByZWZpeCIsInBhZ2UiLCJtb3N0UmVjZW50SGFzaCIsImN1ckhhc2giLCJfX3dlYnBhY2tfaGFzaF9fIiwiaG90VXBkYXRlUGF0aCIsImVuZHNXaXRoIiwiaXNVcGRhdGVBdmFpbGFibGUiLCJjYW5BcHBseVVwZGF0ZXMiLCJtb2R1bGUiLCJzdGF0dXMiLCJ0cnlBcHBseVVwZGF0ZXMiLCJmZXRjaCIsIl9fd2VicGFja19ydW50aW1lX2lkX18iLCJyZXMiLCJqc29uIiwianNvbkRhdGEiLCJjdXJQYWdlIiwicGFnZVVwZGF0ZWQiLCJBcnJheSIsImlzQXJyYXkiLCJjIiwiT2JqZWN0Iiwia2V5cyIsInNvbWUiLCJtb2QiLCJpbmRleE9mIiwic3Vic3RyIiwicmVwbGFjZSIsImxvY2F0aW9uIiwicmVsb2FkIiwiY29uc29sZSIsImVycm9yIiwiYWRkTWVzc2FnZUxpc3RlbmVyIiwiZXZlbnQiLCJtZXNzYWdlIiwiYWN0aW9uIiwiaGFzaCIsImV4Iiwid2FybiIsInNldHVwUGluZyIsImRpc3BsYXlDb250ZW50IiwiZXhwb3J0cyIsImdldEV2ZW50U291cmNlV3JhcHBlciIsImV2ZW50Q2FsbGJhY2tzIiwiRXZlbnRTb3VyY2VXcmFwcGVyIiwib3B0aW9ucyIsInNvdXJjZSIsImxhc3RBY3Rpdml0eSIsIkRhdGUiLCJsaXN0ZW5lcnMiLCJ0aW1lb3V0IiwiaW5pdCIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJoYW5kbGVEaXNjb25uZWN0IiwicGF0aCIsIm9ub3BlbiIsImhhbmRsZU9ubGluZSIsIm9uZXJyb3IiLCJvbm1lc3NhZ2UiLCJoYW5kbGVNZXNzYWdlIiwibG9nIiwiaSIsImxlbmd0aCIsImZvckVhY2giLCJjYiIsInVuZmlsdGVyZWQiLCJjbGVhckludGVydmFsIiwiY2xvc2UiLCJzZXRUaW1lb3V0IiwiZm4iLCJwdXNoIiwiUmVzcG9uc2UiLCJUZXh0RGVjb2RlciIsIlRleHRFbmNvZGVyIiwiQWJvcnRDb250cm9sbGVyIiwidW5kZWZpbmVkIiwic2lnbmFsIiwiYWJvcnQiLCJUZXh0RGVjb2RlclBvbHlmaWxsIiwiYml0c05lZWRlZCIsImNvZGVQb2ludCIsInByb3RvdHlwZSIsImRlY29kZSIsIm9jdGV0cyIsInZhbGlkIiwic2hpZnQiLCJvY3RldHNDb3VudCIsIkVycm9yIiwiUkVQTEFDRVIiLCJzdHJpbmciLCJvY3RldCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInN1cHBvcnRzU3RyZWFtT3B0aW9uIiwiZW5jb2RlIiwic3RyZWFtIiwiayIsIlhIUldyYXBwZXIiLCJ4aHIiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyZXNwb25zZVR5cGUiLCJyZWFkeVN0YXRlIiwic3RhdHVzVGV4dCIsInJlc3BvbnNlVGV4dCIsIm9ucHJvZ3Jlc3MiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJfY29udGVudFR5cGUiLCJfeGhyIiwiX3NlbmRUaW1lb3V0IiwiX2Fib3J0Iiwib3BlbiIsIm1ldGhvZCIsInVybCIsInRoYXQiLCJzdGF0ZSIsInNpbGVudCIsImNsZWFyVGltZW91dCIsIm9ubG9hZCIsIm9uYWJvcnQiLCJvblN0YXJ0IiwiY29udGVudFR5cGUiLCJnZXRSZXNwb25zZUhlYWRlciIsIm9uUHJvZ3Jlc3MiLCJvbkZpbmlzaCIsIm9uUmVhZHlTdGF0ZUNoYW5nZSIsIm9uVGltZW91dCIsIlhNTEh0dHBSZXF1ZXN0IiwibmFtZSIsInNldFJlcXVlc3RIZWFkZXIiLCJ2YWx1ZSIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsInNlbmQiLCJlcnJvcjEiLCJ0b0xvd2VyQ2FzZSIsImNoYXJDb2RlQXQiLCJIZWFkZXJzUG9seWZpbGwiLCJhbGwiLCJtYXAiLCJjcmVhdGUiLCJhcnJheSIsInNwbGl0IiwibGluZSIsInBhcnRzIiwiam9pbiIsIl9tYXAiLCJnZXQiLCJYSFJUcmFuc3BvcnQiLCJvblN0YXJ0Q2FsbGJhY2siLCJvblByb2dyZXNzQ2FsbGJhY2siLCJvbkZpbmlzaENhbGxiYWNrIiwiaGVhZGVycyIsIm9mZnNldCIsImNodW5rIiwic2xpY2UiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJIZWFkZXJzV3JhcHBlciIsIl9oZWFkZXJzIiwiRmV0Y2hUcmFuc3BvcnQiLCJjb250cm9sbGVyIiwidGV4dERlY29kZXIiLCJjcmVkZW50aWFscyIsImNhY2hlIiwidGhlbiIsInJlc3BvbnNlIiwicmVhZGVyIiwiYm9keSIsImdldFJlYWRlciIsImNhbmNlbCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVhZE5leHRDaHVuayIsInJlYWQiLCJyZXN1bHQiLCJkb25lIiwiRXZlbnRUYXJnZXQiLCJfbGlzdGVuZXJzIiwidGhyb3dFcnJvciIsImUiLCJkaXNwYXRjaEV2ZW50IiwidGFyZ2V0IiwidHlwZUxpc3RlbmVycyIsInR5cGUiLCJsaXN0ZW5lciIsImhhbmRsZUV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImZvdW5kIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImZpbHRlcmVkIiwiRXZlbnQiLCJNZXNzYWdlRXZlbnQiLCJsYXN0RXZlbnRJZCIsIkNvbm5lY3Rpb25FdmVudCIsIldBSVRJTkciLCJDT05ORUNUSU5HIiwiT1BFTiIsIkNMT1NFRCIsIkFGVEVSX0NSIiwiRklFTERfU1RBUlQiLCJGSUVMRCIsIlZBTFVFX1NUQVJUIiwiVkFMVUUiLCJjb250ZW50VHlwZVJlZ0V4cCIsIk1JTklNVU1fRFVSQVRJT04iLCJNQVhJTVVNX0RVUkFUSU9OIiwicGFyc2VEdXJhdGlvbiIsImRlZiIsIm4iLCJwYXJzZUludCIsImNsYW1wRHVyYXRpb24iLCJNYXRoIiwibWluIiwibWF4IiwiZmlyZSIsImYiLCJFdmVudFNvdXJjZVBvbHlmaWxsIiwiX2Nsb3NlIiwic3RhcnQiLCJpc0ZldGNoU3VwcG9ydGVkIiwiZXMiLCJCb29sZWFuIiwiaW5pdGlhbFJldHJ5IiwiaGVhcnRiZWF0VGltZW91dCIsInJldHJ5Iiwid2FzQWN0aXZpdHkiLCJzdHJpbmdpZnkiLCJDdXJyZW50VHJhbnNwb3J0IiwiVHJhbnNwb3J0IiwidHJhbnNwb3J0IiwiY2FuY2VsRnVuY3Rpb24iLCJjdXJyZW50U3RhdGUiLCJkYXRhQnVmZmVyIiwibGFzdEV2ZW50SWRCdWZmZXIiLCJldmVudFR5cGVCdWZmZXIiLCJ0ZXh0QnVmZmVyIiwiZmllbGRTdGFydCIsInZhbHVlU3RhcnQiLCJ0ZXN0IiwidGV4dENodW5rIiwicG9zaXRpb24iLCJmaWVsZCIsInJlcXVlc3RVUkwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXF1ZXN0SGVhZGVycyIsIl9kZWZhdWx0IiwiY2FsbGJhY2siLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ4IiwicXVlcnlTZWxlY3RvckFsbCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImNsb3NlUGluZyIsImV2dFNvdXJjZSIsImN1cnJlbnRQYWdlIiwicGF0aG5hbWVGbiIsInBhdGhuYW1lIiwicGF5bG9hZCIsImludmFsaWQiLCJocmVmIiwicGFnZVJlcyIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOzs7Ozs7QUFBQSxJQUFJQSxzQkFBc0IsR0FBQ0MsbUJBQU8sQ0FBQyxzSUFBRCxDQUFsQzs7QUFBbUYsSUFBSUMsb0JBQW9CLEdBQUNGLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLDZGQUFELENBQVIsQ0FBL0M7O0FBQW9GLElBQUlFLFlBQVksR0FBQ0YsbUJBQU8sQ0FBQyxxR0FBRCxDQUF4Qjs7QUFBd0QsSUFBSUcscUJBQXFCLEdBQUNILG1CQUFPLENBQUMsaUdBQUQsQ0FBakM7O0FBQStELElBQUlJLEtBQUssR0FBQ0osbUJBQU8sQ0FBQywyREFBRCxDQUFqQjtBQUE0Qjs7O0FBQThCLElBQUcsQ0FBQ0ssTUFBTSxDQUFDQyxXQUFYLEVBQXVCO0FBQUNELFFBQU0sQ0FBQ0MsV0FBUCxHQUFtQkwsb0JBQW9CLFdBQXZDO0FBQWlEOztBQUFBLElBQU1NLElBQUksR0FBQ0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixlQUF4QixFQUF5Q0MsV0FBcEQsQ0FBWDtJQUFnRkMsVyxHQUFrQk4sSSxDQUFsQk0sVztJQUFZQyxJLEdBQU1QLEksQ0FBTk8sSTtBQUFXRCxXQUFXLEdBQUNBLFdBQVcsSUFBRSxFQUF6QjtBQUE0QixJQUFJRSxjQUFjLEdBQUMsSUFBbkI7QUFBd0I7O0FBQThCLElBQUlDLE9BQU8sR0FBQ0MsdUJBQVo7QUFBNkIsSUFBTUMsYUFBYSxHQUFDTCxXQUFXLElBQUVBLFdBQVcsQ0FBQ00sUUFBWixDQUFxQixHQUFyQixJQUEwQixFQUExQixHQUE2QixHQUEvQixDQUFYLEdBQStDLHVCQUFuRSxDLENBQTJGOztBQUMvdEIsU0FBU0MsaUJBQVQsR0FBNEI7QUFBQztBQUM3Qjs7QUFDQTtBQUE4QixTQUFPTCxjQUFjLEtBQUdFLHVCQUF4QjtBQUEwQyxDLENBQUE7OztBQUN4RSxTQUFTSSxlQUFULEdBQTBCO0FBQUMsU0FBT0MsVUFBQSxDQUFXQyxNQUFYLE9BQXNCLE1BQTdCO0FBQXFDLEMsQ0FBQTtBQUNoRTs7O1NBQ2VDLGU7Ozs7OzhFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFvQyxDQUFDSixpQkFBaUIsRUFBbEIsSUFBc0IsQ0FBQ0MsZUFBZSxFQUExRTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBMEdJLEtBQUssQ0FBQyxPQUFPQyxxQkFBUCxLQUFnQyxXQUFoQyxHQUE0QztBQUE1QyxzQkFDN0dSLGFBRDZHLFNBQzdGRixPQUQ2RixjQUNsRlUscUJBRGtGLGtDQUN0Q1IsYUFEc0MsU0FDdEJGLE9BRHNCLHFCQUFELENBQS9HOztBQUFBO0FBQWdHVyxlQUFoRztBQUFBO0FBQUEsbUJBQzBJQSxHQUFHLENBQUNDLElBQUosRUFEMUk7O0FBQUE7QUFDMkhDLG9CQUQzSDtBQUMySkMsbUJBRDNKLEdBQ21LaEIsSUFBSSxLQUFHLEdBQVAsR0FBVyxPQUFYLEdBQW1CQSxJQUR0TCxFQUMyTDs7QUFDckxpQix1QkFGTixHQUVrQixDQUFDQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0osUUFBUSxDQUFDSyxDQUF2QixJQUEwQkwsUUFBUSxDQUFDSyxDQUFuQyxHQUFxQ0MsTUFBTSxDQUFDQyxJQUFQLENBQVlQLFFBQVEsQ0FBQ0ssQ0FBckIsQ0FBdEMsRUFBK0RHLElBQS9ELENBQW9FLFVBQUFDLEdBQUcsRUFBRTtBQUFDLHFCQUFPQSxHQUFHLENBQUNDLE9BQUosZ0JBQW9CVCxPQUFPLENBQUNVLE1BQVIsQ0FBZSxDQUFmLEVBQWlCLENBQWpCLE1BQXNCLEdBQXRCLEdBQTBCVixPQUExQixjQUFzQ0EsT0FBdEMsQ0FBcEIsT0FBeUUsQ0FBQyxDQUExRSxJQUE2RVEsR0FBRyxDQUFDQyxPQUFKLENBQVksZUFBUVQsT0FBTyxDQUFDVSxNQUFSLENBQWUsQ0FBZixFQUFpQixDQUFqQixNQUFzQixHQUF0QixHQUEwQlYsT0FBMUIsY0FBc0NBLE9BQXRDLENBQVIsRUFBMERXLE9BQTFELENBQWtFLEtBQWxFLEVBQXdFLElBQXhFLENBQVosTUFBNkYsQ0FBQyxDQUFsTDtBQUFxTCxhQUEvUCxDQUZsQjs7QUFFbVIsZ0JBQUdWLFdBQUgsRUFBZTtBQUFDckIsc0JBQVEsQ0FBQ2dDLFFBQVQsQ0FBa0JDLE1BQWxCLENBQXlCLElBQXpCO0FBQWdDLGFBQWhELE1BQW9EO0FBQUMzQixxQkFBTyxHQUFDRCxjQUFSO0FBQXdCOztBQUZoVztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUU0VzZCLG1CQUFPLENBQUNDLEtBQVIsQ0FBYyxvQ0FBZDtBQUF3RG5DLG9CQUFRLENBQUNnQyxRQUFULENBQWtCQyxNQUFsQixDQUF5QixJQUF6Qjs7QUFGcGE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQUVxYyxDQUFDLEdBQUV6QyxZQUFZLENBQUM0QyxrQkFBaEIsRUFBb0MsVUFBQUMsS0FBSyxFQUFFO0FBQUMsTUFBR0EsS0FBSyxDQUFDeEMsSUFBTixLQUFhLGNBQWhCLEVBQStCO0FBQUM7QUFBUTs7QUFBQSxNQUFHO0FBQUMsUUFBTXlDLE9BQU8sR0FBQ3hDLElBQUksQ0FBQ0MsS0FBTCxDQUFXc0MsS0FBSyxDQUFDeEMsSUFBakIsQ0FBZDs7QUFBcUMsUUFBR3lDLE9BQU8sQ0FBQ0MsTUFBUixLQUFpQixNQUFqQixJQUF5QkQsT0FBTyxDQUFDQyxNQUFSLEtBQWlCLE9BQTdDLEVBQXFEO0FBQUMsVUFBRyxDQUFDRCxPQUFPLENBQUNFLElBQVosRUFBaUI7QUFBQztBQUFROztBQUFBbkMsb0JBQWMsR0FBQ2lDLE9BQU8sQ0FBQ0UsSUFBdkI7QUFBNEIxQixxQkFBZTtBQUFJLEtBQS9ILE1BQW9JLElBQUd3QixPQUFPLENBQUNDLE1BQVIsS0FBaUIsWUFBcEIsRUFBaUM7QUFBQ3ZDLGNBQVEsQ0FBQ2dDLFFBQVQsQ0FBa0JDLE1BQWxCLENBQXlCLElBQXpCO0FBQWdDO0FBQUMsR0FBaFAsQ0FBZ1AsT0FBTVEsRUFBTixFQUFTO0FBQUNQLFdBQU8sQ0FBQ1EsSUFBUixDQUFhLDBCQUF3QkwsS0FBSyxDQUFDeEMsSUFBOUIsR0FBbUMsSUFBbkMsR0FBd0M0QyxFQUFyRDtBQUEwRDtBQUFDLENBQXpZO0FBQTJZLENBQUMsR0FBRWhELHFCQUFxQixDQUFDa0QsU0FBekIsRUFBb0N4QyxXQUFwQyxFQUFnRDtBQUFBLFNBQUlDLElBQUo7QUFBQSxDQUFoRDtBQUEwRCxDQUFDLEdBQUVWLEtBQUssQ0FBQ2tELGNBQVQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUjczQjs7QUFBQUMsa0JBQUEsR0FBbUIsSUFBbkI7QUFBd0JBLDBCQUFBLEdBQTJCVCxrQkFBM0I7QUFBOENTLDZCQUFBLEdBQThCQyxxQkFBOUI7QUFBb0QsSUFBTUMsY0FBYyxHQUFDLEVBQXJCOztBQUF3QixTQUFTQyxrQkFBVCxDQUE0QkMsT0FBNUIsRUFBb0M7QUFBQyxNQUFJQyxNQUFKO0FBQVcsTUFBSUMsWUFBWSxHQUFDLElBQUlDLElBQUosRUFBakI7QUFBNEIsTUFBSUMsU0FBUyxHQUFDLEVBQWQ7O0FBQWlCLE1BQUcsQ0FBQ0osT0FBTyxDQUFDSyxPQUFaLEVBQW9CO0FBQUNMLFdBQU8sQ0FBQ0ssT0FBUixHQUFnQixLQUFHLElBQW5CO0FBQXlCOztBQUFBQyxNQUFJO0FBQUcsTUFBSUMsS0FBSyxHQUFDQyxXQUFXLENBQUMsWUFBVTtBQUFDLFFBQUcsSUFBSUwsSUFBSixLQUFXRCxZQUFYLEdBQXdCRixPQUFPLENBQUNLLE9BQW5DLEVBQTJDO0FBQUNJLHNCQUFnQjtBQUFJO0FBQUMsR0FBN0UsRUFBOEVULE9BQU8sQ0FBQ0ssT0FBUixHQUFnQixDQUE5RixDQUFyQjs7QUFBc0gsV0FBU0MsSUFBVCxHQUFlO0FBQUNMLFVBQU0sR0FBQyxJQUFJdkQsTUFBTSxDQUFDQyxXQUFYLENBQXVCcUQsT0FBTyxDQUFDVSxJQUEvQixDQUFQO0FBQTRDVCxVQUFNLENBQUNVLE1BQVAsR0FBY0MsWUFBZDtBQUEyQlgsVUFBTSxDQUFDWSxPQUFQLEdBQWVKLGdCQUFmO0FBQWdDUixVQUFNLENBQUNhLFNBQVAsR0FBaUJDLGFBQWpCO0FBQWdDOztBQUFBLFdBQVNILFlBQVQsR0FBdUI7QUFBQyxRQUFHWixPQUFPLENBQUNnQixHQUFYLEVBQWUvQixPQUFPLENBQUMrQixHQUFSLENBQVksaUJBQVo7QUFBK0JkLGdCQUFZLEdBQUMsSUFBSUMsSUFBSixFQUFiO0FBQXlCOztBQUFBLFdBQVNZLGFBQVQsQ0FBdUIzQixLQUF2QixFQUE2QjtBQUFDYyxnQkFBWSxHQUFDLElBQUlDLElBQUosRUFBYjs7QUFBd0IsU0FBSSxJQUFJYyxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUNiLFNBQVMsQ0FBQ2MsTUFBeEIsRUFBK0JELENBQUMsRUFBaEMsRUFBbUM7QUFBQ2IsZUFBUyxDQUFDYSxDQUFELENBQVQsQ0FBYTdCLEtBQWI7QUFBcUI7O0FBQUFVLGtCQUFjLENBQUNxQixPQUFmLENBQXVCLFVBQUFDLEVBQUUsRUFBRTtBQUFDLFVBQUcsQ0FBQ0EsRUFBRSxDQUFDQyxVQUFKLElBQWdCakMsS0FBSyxDQUFDeEMsSUFBTixDQUFXZ0MsT0FBWCxDQUFtQixRQUFuQixNQUErQixDQUFDLENBQW5ELEVBQXFEO0FBQU93QyxRQUFFLENBQUNoQyxLQUFELENBQUY7QUFBVyxLQUFuRztBQUFzRzs7QUFBQSxXQUFTcUIsZ0JBQVQsR0FBMkI7QUFBQ2EsaUJBQWEsQ0FBQ2YsS0FBRCxDQUFiO0FBQXFCTixVQUFNLENBQUNzQixLQUFQO0FBQWVDLGNBQVUsQ0FBQ2xCLElBQUQsRUFBTU4sT0FBTyxDQUFDSyxPQUFkLENBQVY7QUFBa0M7O0FBQUEsU0FBTTtBQUFDa0IsU0FBSyxFQUFDLGlCQUFJO0FBQUNELG1CQUFhLENBQUNmLEtBQUQsQ0FBYjtBQUFxQk4sWUFBTSxDQUFDc0IsS0FBUDtBQUFnQixLQUFqRDtBQUFrRHBDLHNCQUFrQixFQUFDLDRCQUFTc0MsRUFBVCxFQUFZO0FBQUNyQixlQUFTLENBQUNzQixJQUFWLENBQWVELEVBQWY7QUFBb0I7QUFBdEcsR0FBTjtBQUErRzs7S0FBMzVCMUIsa0I7O0FBQTI1QixTQUFTWixrQkFBVCxDQUE0QmlDLEVBQTVCLEVBQStCO0FBQUN0QixnQkFBYyxDQUFDNEIsSUFBZixDQUFvQk4sRUFBcEI7QUFBeUI7O0FBQUEsU0FBU3ZCLHFCQUFULENBQStCRyxPQUEvQixFQUF1QztBQUFDLFNBQU9ELGtCQUFrQixDQUFDQyxPQUFELENBQXpCO0FBQW9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBM3JDOztBQUFBSixrQkFBQSxHQUFtQixJQUFuQjtBQUF3QkEsZUFBQSxHQUFnQixLQUFLLENBQXJCO0FBQXVCO0FBQXFCO0FBQ2pGO0FBQ0E7O0FBQ0EsSUFBSTdDLFFBQVEsR0FBQ0wsTUFBTSxDQUFDSyxRQUFwQjtBQUE2QixJQUFJNEUsUUFBUSxHQUFDakYsTUFBTSxDQUFDaUYsUUFBcEI7QUFBNkIsSUFBSUMsV0FBVyxHQUFDbEYsTUFBTSxDQUFDa0YsV0FBdkI7QUFBbUMsSUFBSUMsV0FBVyxHQUFDbkYsTUFBTSxDQUFDbUYsV0FBdkI7QUFBbUMsSUFBSUMsZUFBZSxHQUFDcEYsTUFBTSxDQUFDb0YsZUFBM0I7O0FBQTJDLElBQUdBLGVBQWUsSUFBRUMsU0FBcEIsRUFBOEI7QUFBQ0QsaUJBQWUsR0FBQywyQkFBVTtBQUFDLFNBQUtFLE1BQUwsR0FBWSxJQUFaOztBQUFpQixTQUFLQyxLQUFMLEdBQVcsWUFBVSxDQUFFLENBQXZCO0FBQXlCLEdBQXJFO0FBQXVFOztBQUFBLFNBQVNDLG1CQUFULEdBQThCO0FBQUMsT0FBS0MsVUFBTCxHQUFnQixDQUFoQjtBQUFrQixPQUFLQyxTQUFMLEdBQWUsQ0FBZjtBQUFrQjs7S0FBMURGLG1COztBQUEwREEsbUJBQW1CLENBQUNHLFNBQXBCLENBQThCQyxNQUE5QixHQUFxQyxVQUFTQyxNQUFULEVBQWdCO0FBQUMsV0FBU0MsS0FBVCxDQUFlSixTQUFmLEVBQXlCSyxLQUF6QixFQUErQkMsV0FBL0IsRUFBMkM7QUFBQyxRQUFHQSxXQUFXLEtBQUcsQ0FBakIsRUFBbUI7QUFBQyxhQUFPTixTQUFTLElBQUUsVUFBUUssS0FBbkIsSUFBMEJMLFNBQVMsSUFBRUssS0FBWCxJQUFrQixNQUFuRDtBQUEyRDs7QUFBQSxRQUFHQyxXQUFXLEtBQUcsQ0FBakIsRUFBbUI7QUFBQyxhQUFPTixTQUFTLElBQUUsVUFBUUssS0FBbkIsSUFBMEJMLFNBQVMsSUFBRUssS0FBWCxJQUFrQixNQUE1QyxJQUFvREwsU0FBUyxJQUFFLFVBQVFLLEtBQW5CLElBQTBCTCxTQUFTLElBQUVLLEtBQVgsSUFBa0IsTUFBdkc7QUFBK0c7O0FBQUEsUUFBR0MsV0FBVyxLQUFHLENBQWpCLEVBQW1CO0FBQUMsYUFBT04sU0FBUyxJQUFFLFlBQVVLLEtBQXJCLElBQTRCTCxTQUFTLElBQUVLLEtBQVgsSUFBa0IsUUFBckQ7QUFBK0Q7O0FBQUEsVUFBTSxJQUFJRSxLQUFKLEVBQU47QUFBbUI7O0FBQUEsV0FBU0QsV0FBVCxDQUFxQlAsVUFBckIsRUFBZ0NDLFNBQWhDLEVBQTBDO0FBQUMsUUFBR0QsVUFBVSxLQUFHLElBQUUsQ0FBbEIsRUFBb0I7QUFBQyxhQUFPQyxTQUFTLElBQUUsQ0FBWCxHQUFhLEVBQWIsR0FBZ0IsQ0FBaEIsR0FBa0JBLFNBQVMsR0FBQyxFQUFWLEdBQWEsQ0FBYixHQUFlLENBQXhDO0FBQTJDOztBQUFBLFFBQUdELFVBQVUsS0FBRyxJQUFFLENBQWxCLEVBQW9CO0FBQUMsYUFBT0MsU0FBUyxHQUFDLEVBQVYsR0FBYSxDQUFiLEdBQWUsQ0FBdEI7QUFBeUI7O0FBQUEsUUFBR0QsVUFBVSxLQUFHLElBQUUsQ0FBbEIsRUFBb0I7QUFBQyxhQUFPLENBQVA7QUFBVTs7QUFBQSxVQUFNLElBQUlRLEtBQUosRUFBTjtBQUFtQjs7QUFBQSxNQUFJQyxRQUFRLEdBQUMsTUFBYjtBQUFvQixNQUFJQyxNQUFNLEdBQUMsRUFBWDtBQUFjLE1BQUlWLFVBQVUsR0FBQyxLQUFLQSxVQUFwQjtBQUErQixNQUFJQyxTQUFTLEdBQUMsS0FBS0EsU0FBbkI7O0FBQTZCLE9BQUksSUFBSW5CLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQ3NCLE1BQU0sQ0FBQ3JCLE1BQXJCLEVBQTRCRCxDQUFDLElBQUUsQ0FBL0IsRUFBaUM7QUFBQyxRQUFJNkIsS0FBSyxHQUFDUCxNQUFNLENBQUN0QixDQUFELENBQWhCOztBQUFvQixRQUFHa0IsVUFBVSxLQUFHLENBQWhCLEVBQWtCO0FBQUMsVUFBR1csS0FBSyxHQUFDLEdBQU4sSUFBV0EsS0FBSyxHQUFDLEdBQWpCLElBQXNCLENBQUNOLEtBQUssQ0FBQ0osU0FBUyxJQUFFLENBQVgsR0FBYVUsS0FBSyxHQUFDLEVBQXBCLEVBQXVCWCxVQUFVLEdBQUMsQ0FBbEMsRUFBb0NPLFdBQVcsQ0FBQ1AsVUFBRCxFQUFZQyxTQUFaLENBQS9DLENBQS9CLEVBQXNHO0FBQUNELGtCQUFVLEdBQUMsQ0FBWDtBQUFhQyxpQkFBUyxHQUFDUSxRQUFWO0FBQW1CQyxjQUFNLElBQUVFLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQlosU0FBcEIsQ0FBUjtBQUF3QztBQUFDOztBQUFBLFFBQUdELFVBQVUsS0FBRyxDQUFoQixFQUFrQjtBQUFDLFVBQUdXLEtBQUssSUFBRSxDQUFQLElBQVVBLEtBQUssSUFBRSxHQUFwQixFQUF3QjtBQUFDWCxrQkFBVSxHQUFDLENBQVg7QUFBYUMsaUJBQVMsR0FBQ1UsS0FBVjtBQUFpQixPQUF2RCxNQUE0RCxJQUFHQSxLQUFLLElBQUUsR0FBUCxJQUFZQSxLQUFLLElBQUUsR0FBdEIsRUFBMEI7QUFBQ1gsa0JBQVUsR0FBQyxJQUFFLENBQWI7QUFBZUMsaUJBQVMsR0FBQ1UsS0FBSyxHQUFDLEVBQWhCO0FBQW9CLE9BQTlELE1BQW1FLElBQUdBLEtBQUssSUFBRSxHQUFQLElBQVlBLEtBQUssSUFBRSxHQUF0QixFQUEwQjtBQUFDWCxrQkFBVSxHQUFDLElBQUUsQ0FBYjtBQUFlQyxpQkFBUyxHQUFDVSxLQUFLLEdBQUMsRUFBaEI7QUFBb0IsT0FBOUQsTUFBbUUsSUFBR0EsS0FBSyxJQUFFLEdBQVAsSUFBWUEsS0FBSyxJQUFFLEdBQXRCLEVBQTBCO0FBQUNYLGtCQUFVLEdBQUMsSUFBRSxDQUFiO0FBQWVDLGlCQUFTLEdBQUNVLEtBQUssR0FBQyxDQUFoQjtBQUFtQixPQUE3RCxNQUFpRTtBQUFDWCxrQkFBVSxHQUFDLENBQVg7QUFBYUMsaUJBQVMsR0FBQ1EsUUFBVjtBQUFvQjs7QUFBQSxVQUFHVCxVQUFVLEtBQUcsQ0FBYixJQUFnQixDQUFDSyxLQUFLLENBQUNKLFNBQUQsRUFBV0QsVUFBWCxFQUFzQk8sV0FBVyxDQUFDUCxVQUFELEVBQVlDLFNBQVosQ0FBakMsQ0FBekIsRUFBa0Y7QUFBQ0Qsa0JBQVUsR0FBQyxDQUFYO0FBQWFDLGlCQUFTLEdBQUNRLFFBQVY7QUFBb0I7QUFBQyxLQUE3YSxNQUFpYjtBQUFDVCxnQkFBVSxJQUFFLENBQVo7QUFBY0MsZUFBUyxHQUFDQSxTQUFTLElBQUUsQ0FBWCxHQUFhVSxLQUFLLEdBQUMsRUFBN0I7QUFBaUM7O0FBQUEsUUFBR1gsVUFBVSxLQUFHLENBQWhCLEVBQWtCO0FBQUMsVUFBR0MsU0FBUyxJQUFFLE1BQWQsRUFBcUI7QUFBQ1MsY0FBTSxJQUFFRSxNQUFNLENBQUNDLFlBQVAsQ0FBb0JaLFNBQXBCLENBQVI7QUFBd0MsT0FBOUQsTUFBa0U7QUFBQ1MsY0FBTSxJQUFFRSxNQUFNLENBQUNDLFlBQVAsQ0FBb0IsVUFBUVosU0FBUyxHQUFDLE1BQVYsR0FBaUIsQ0FBakIsSUFBb0IsRUFBNUIsQ0FBcEIsQ0FBUjtBQUE2RFMsY0FBTSxJQUFFRSxNQUFNLENBQUNDLFlBQVAsQ0FBb0IsVUFBUVosU0FBUyxHQUFDLE1BQVYsR0FBaUIsQ0FBakIsR0FBbUIsS0FBM0IsQ0FBcEIsQ0FBUjtBQUFnRTtBQUFDO0FBQUM7O0FBQUEsT0FBS0QsVUFBTCxHQUFnQkEsVUFBaEI7QUFBMkIsT0FBS0MsU0FBTCxHQUFlQSxTQUFmO0FBQXlCLFNBQU9TLE1BQVA7QUFBZSxDQUFyckQsQyxDQUFzckQ7OztBQUMxZ0UsSUFBSUksb0JBQW9CLEdBQUMsU0FBU0Esb0JBQVQsR0FBK0I7QUFBQyxNQUFHO0FBQUMsV0FBTyxJQUFJckIsV0FBSixHQUFrQlUsTUFBbEIsQ0FBeUIsSUFBSVQsV0FBSixHQUFrQnFCLE1BQWxCLENBQXlCLE1BQXpCLENBQXpCLEVBQTBEO0FBQUNDLFlBQU0sRUFBQztBQUFSLEtBQTFELE1BQTJFLE1BQWxGO0FBQTBGLEdBQTlGLENBQThGLE9BQU1qRSxLQUFOLEVBQVk7QUFBQ0QsV0FBTyxDQUFDK0IsR0FBUixDQUFZOUIsS0FBWjtBQUFvQjs7QUFBQSxTQUFPLEtBQVA7QUFBYyxDQUF0TSxDLENBQXVNOzs7QUFDdk0sSUFBRzBDLFdBQVcsSUFBRUcsU0FBYixJQUF3QkYsV0FBVyxJQUFFRSxTQUFyQyxJQUFnRCxDQUFDa0Isb0JBQW9CLEVBQXhFLEVBQTJFO0FBQUNyQixhQUFXLEdBQUNNLG1CQUFaO0FBQWlDOztBQUFBLElBQUlrQixDQUFDLEdBQUMsU0FBU0EsQ0FBVCxHQUFZLENBQUUsQ0FBcEI7O0FBQXFCLFNBQVNDLFVBQVQsQ0FBb0JDLEdBQXBCLEVBQXdCO0FBQUMsT0FBS0MsZUFBTCxHQUFxQixLQUFyQjtBQUEyQixPQUFLQyxZQUFMLEdBQWtCLEVBQWxCO0FBQXFCLE9BQUtDLFVBQUwsR0FBZ0IsQ0FBaEI7QUFBa0IsT0FBSzdGLE1BQUwsR0FBWSxDQUFaO0FBQWMsT0FBSzhGLFVBQUwsR0FBZ0IsRUFBaEI7QUFBbUIsT0FBS0MsWUFBTCxHQUFrQixFQUFsQjtBQUFxQixPQUFLQyxVQUFMLEdBQWdCUixDQUFoQjtBQUFrQixPQUFLUyxrQkFBTCxHQUF3QlQsQ0FBeEI7QUFBMEIsT0FBS1UsWUFBTCxHQUFrQixFQUFsQjtBQUFxQixPQUFLQyxJQUFMLEdBQVVULEdBQVY7QUFBYyxPQUFLVSxZQUFMLEdBQWtCLENBQWxCO0FBQW9CLE9BQUtDLE1BQUwsR0FBWWIsQ0FBWjtBQUFlOztNQUExUEMsVTs7QUFBMFBBLFVBQVUsQ0FBQ2hCLFNBQVgsQ0FBcUI2QixJQUFyQixHQUEwQixVQUFTQyxNQUFULEVBQWdCQyxHQUFoQixFQUFvQjtBQUFDLE9BQUtILE1BQUwsQ0FBWSxJQUFaOztBQUFrQixNQUFJSSxJQUFJLEdBQUMsSUFBVDtBQUFjLE1BQUlmLEdBQUcsR0FBQyxLQUFLUyxJQUFiO0FBQWtCLE1BQUlPLEtBQUssR0FBQyxDQUFWO0FBQVksTUFBSWpFLE9BQU8sR0FBQyxDQUFaOztBQUFjLE9BQUs0RCxNQUFMLEdBQVksVUFBU00sTUFBVCxFQUFnQjtBQUFDLFFBQUdGLElBQUksQ0FBQ0wsWUFBTCxLQUFvQixDQUF2QixFQUF5QjtBQUFDUSxrQkFBWSxDQUFDSCxJQUFJLENBQUNMLFlBQU4sQ0FBWjtBQUFnQ0ssVUFBSSxDQUFDTCxZQUFMLEdBQWtCLENBQWxCO0FBQXFCOztBQUFBLFFBQUdNLEtBQUssS0FBRyxDQUFSLElBQVdBLEtBQUssS0FBRyxDQUFuQixJQUFzQkEsS0FBSyxLQUFHLENBQWpDLEVBQW1DO0FBQUNBLFdBQUssR0FBQyxDQUFOO0FBQVFoQixTQUFHLENBQUNtQixNQUFKLEdBQVdyQixDQUFYO0FBQWFFLFNBQUcsQ0FBQ3pDLE9BQUosR0FBWXVDLENBQVo7QUFBY0UsU0FBRyxDQUFDb0IsT0FBSixHQUFZdEIsQ0FBWjtBQUFjRSxTQUFHLENBQUNNLFVBQUosR0FBZVIsQ0FBZjtBQUFpQkUsU0FBRyxDQUFDTyxrQkFBSixHQUF1QlQsQ0FBdkIsQ0FBbkUsQ0FBNEY7QUFDM3VCOztBQUNBRSxTQUFHLENBQUNyQixLQUFKOztBQUFZLFVBQUc1QixPQUFPLEtBQUcsQ0FBYixFQUFlO0FBQUNtRSxvQkFBWSxDQUFDbkUsT0FBRCxDQUFaO0FBQXNCQSxlQUFPLEdBQUMsQ0FBUjtBQUFXOztBQUFBLFVBQUcsQ0FBQ2tFLE1BQUosRUFBVztBQUFDRixZQUFJLENBQUNaLFVBQUwsR0FBZ0IsQ0FBaEI7QUFBa0JZLFlBQUksQ0FBQ1Isa0JBQUw7QUFBMkI7QUFBQzs7QUFBQVMsU0FBSyxHQUFDLENBQU47QUFBUyxHQUZnWTs7QUFFL1gsTUFBSUssT0FBTyxHQUFDLFNBQVNBLE9BQVQsR0FBa0I7QUFBQyxRQUFHTCxLQUFLLEtBQUcsQ0FBWCxFQUFhO0FBQUM7QUFDOUssVUFBSTFHLE1BQU0sR0FBQyxDQUFYO0FBQWEsVUFBSThGLFVBQVUsR0FBQyxFQUFmO0FBQWtCLFVBQUlrQixXQUFXLEdBQUM3QyxTQUFoQjs7QUFBMEIsVUFBRyxFQUFFLGlCQUFnQnVCLEdBQWxCLENBQUgsRUFBMEI7QUFBQyxZQUFHO0FBQUMxRixnQkFBTSxHQUFDMEYsR0FBRyxDQUFDMUYsTUFBWDtBQUFrQjhGLG9CQUFVLEdBQUNKLEdBQUcsQ0FBQ0ksVUFBZjtBQUEwQmtCLHFCQUFXLEdBQUN0QixHQUFHLENBQUN1QixpQkFBSixDQUFzQixjQUF0QixDQUFaO0FBQW1ELFNBQW5HLENBQW1HLE9BQU0zRixLQUFOLEVBQVk7QUFBQztBQUNwTTtBQUNBO0FBQ0F0QixnQkFBTSxHQUFDLENBQVA7QUFBUzhGLG9CQUFVLEdBQUMsRUFBWDtBQUFja0IscUJBQVcsR0FBQzdDLFNBQVosQ0FINEssQ0FHdEo7QUFDN0M7QUFDQTtBQUNDO0FBQUMsT0FOdUQsTUFNbkQ7QUFBQ25FLGNBQU0sR0FBQyxHQUFQO0FBQVc4RixrQkFBVSxHQUFDLElBQVg7QUFBZ0JrQixtQkFBVyxHQUFDdEIsR0FBRyxDQUFDc0IsV0FBaEI7QUFBNkI7O0FBQUEsVUFBR2hILE1BQU0sS0FBRyxDQUFaLEVBQWM7QUFBQzBHLGFBQUssR0FBQyxDQUFOO0FBQVFELFlBQUksQ0FBQ1osVUFBTCxHQUFnQixDQUFoQjtBQUFrQlksWUFBSSxDQUFDekcsTUFBTCxHQUFZQSxNQUFaO0FBQW1CeUcsWUFBSSxDQUFDWCxVQUFMLEdBQWdCQSxVQUFoQjtBQUEyQlcsWUFBSSxDQUFDUCxZQUFMLEdBQWtCYyxXQUFsQjtBQUE4QlAsWUFBSSxDQUFDUixrQkFBTDtBQUEyQjtBQUFDO0FBQUMsR0FQaEY7O0FBT2lGLE1BQUlpQixVQUFVLEdBQUMsU0FBU0EsVUFBVCxHQUFxQjtBQUFDSCxXQUFPOztBQUFHLFFBQUdMLEtBQUssS0FBRyxDQUFSLElBQVdBLEtBQUssS0FBRyxDQUF0QixFQUF3QjtBQUFDQSxXQUFLLEdBQUMsQ0FBTjtBQUFRLFVBQUlYLFlBQVksR0FBQyxFQUFqQjs7QUFBb0IsVUFBRztBQUFDQSxvQkFBWSxHQUFDTCxHQUFHLENBQUNLLFlBQWpCO0FBQStCLE9BQW5DLENBQW1DLE9BQU16RSxLQUFOLEVBQVksQ0FBQztBQUNyVzs7QUFBQW1GLFVBQUksQ0FBQ1osVUFBTCxHQUFnQixDQUFoQjtBQUFrQlksVUFBSSxDQUFDVixZQUFMLEdBQWtCQSxZQUFsQjtBQUErQlUsVUFBSSxDQUFDVCxVQUFMO0FBQW1CO0FBQUMsR0FENEk7O0FBQzNJLE1BQUltQixRQUFRLEdBQUMsU0FBU0EsUUFBVCxHQUFtQjtBQUFDO0FBQ3hHO0FBQ0FELGNBQVU7O0FBQUcsUUFBR1IsS0FBSyxLQUFHLENBQVIsSUFBV0EsS0FBSyxLQUFHLENBQW5CLElBQXNCQSxLQUFLLEtBQUcsQ0FBakMsRUFBbUM7QUFBQ0EsV0FBSyxHQUFDLENBQU47O0FBQVEsVUFBR2pFLE9BQU8sS0FBRyxDQUFiLEVBQWU7QUFBQ21FLG9CQUFZLENBQUNuRSxPQUFELENBQVo7QUFBc0JBLGVBQU8sR0FBQyxDQUFSO0FBQVc7O0FBQUFnRSxVQUFJLENBQUNaLFVBQUwsR0FBZ0IsQ0FBaEI7QUFBa0JZLFVBQUksQ0FBQ1Isa0JBQUw7QUFBMkI7QUFBQyxHQUZqRjs7QUFFa0YsTUFBSW1CLGtCQUFrQixHQUFDLFNBQVNBLGtCQUFULEdBQTZCO0FBQUMsUUFBRzFCLEdBQUcsSUFBRXZCLFNBQVIsRUFBa0I7QUFBQztBQUNqTyxVQUFHdUIsR0FBRyxDQUFDRyxVQUFKLEtBQWlCLENBQXBCLEVBQXNCO0FBQUNzQixnQkFBUTtBQUFJLE9BQW5DLE1BQXdDLElBQUd6QixHQUFHLENBQUNHLFVBQUosS0FBaUIsQ0FBcEIsRUFBc0I7QUFBQ3FCLGtCQUFVO0FBQUksT0FBckMsTUFBMEMsSUFBR3hCLEdBQUcsQ0FBQ0csVUFBSixLQUFpQixDQUFwQixFQUFzQjtBQUFDa0IsZUFBTztBQUFJO0FBQUM7QUFBQyxHQURtQzs7QUFDbEMsTUFBSU0sU0FBUyxHQUFDLFNBQVNBLFNBQVQsR0FBb0I7QUFBQzVFLFdBQU8sR0FBQ21CLFVBQVUsQ0FBQyxZQUFVO0FBQUN5RCxlQUFTO0FBQUksS0FBekIsRUFBMEIsR0FBMUIsQ0FBbEI7O0FBQWlELFFBQUczQixHQUFHLENBQUNHLFVBQUosS0FBaUIsQ0FBcEIsRUFBc0I7QUFBQ3FCLGdCQUFVO0FBQUk7QUFBQyxHQUExSCxDQWI0VCxDQWFqTTs7O0FBQ2xQeEIsS0FBRyxDQUFDbUIsTUFBSixHQUFXTSxRQUFYO0FBQW9CekIsS0FBRyxDQUFDekMsT0FBSixHQUFZa0UsUUFBWixDQWQrWixDQWMxWTtBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFDQXpCLEtBQUcsQ0FBQ29CLE9BQUosR0FBWUssUUFBWixDQW5CbWIsQ0FtQjlaOztBQUNyQixNQUFHLEVBQUUsa0JBQWlCRyxjQUFjLENBQUM3QyxTQUFsQyxLQUE4QyxFQUFFLGFBQVk2QyxjQUFjLENBQUM3QyxTQUE3QixDQUFqRCxFQUF5RjtBQUFDaUIsT0FBRyxDQUFDTSxVQUFKLEdBQWVrQixVQUFmO0FBQTJCLEdBcEI4VCxDQW9COVQ7QUFDckg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0F4QixLQUFHLENBQUNPLGtCQUFKLEdBQXVCbUIsa0JBQXZCOztBQUEwQyxNQUFHLGlCQUFnQjFCLEdBQW5CLEVBQXVCO0FBQUNjLE9BQUcsSUFBRSxDQUFDQSxHQUFHLENBQUN4RixPQUFKLENBQVksR0FBWixNQUFtQixDQUFDLENBQXBCLEdBQXNCLEdBQXRCLEdBQTBCLEdBQTNCLElBQWdDLGNBQXJDO0FBQXFEOztBQUFBMEUsS0FBRyxDQUFDWSxJQUFKLENBQVNDLE1BQVQsRUFBZ0JDLEdBQWhCLEVBQW9CLElBQXBCOztBQUEwQixNQUFHLGdCQUFlZCxHQUFsQixFQUFzQjtBQUFDO0FBQ3hLO0FBQ0FqRCxXQUFPLEdBQUNtQixVQUFVLENBQUMsWUFBVTtBQUFDeUQsZUFBUztBQUFJLEtBQXpCLEVBQTBCLENBQTFCLENBQWxCO0FBQWdEO0FBQUMsQ0E1Qm9WOztBQTRCblY1QixVQUFVLENBQUNoQixTQUFYLENBQXFCSixLQUFyQixHQUEyQixZQUFVO0FBQUMsT0FBS2dDLE1BQUwsQ0FBWSxLQUFaO0FBQW9CLENBQTFEOztBQUEyRFosVUFBVSxDQUFDaEIsU0FBWCxDQUFxQndDLGlCQUFyQixHQUF1QyxVQUFTTSxJQUFULEVBQWM7QUFBQyxTQUFPLEtBQUtyQixZQUFaO0FBQTBCLENBQWhGOztBQUFpRlQsVUFBVSxDQUFDaEIsU0FBWCxDQUFxQitDLGdCQUFyQixHQUFzQyxVQUFTRCxJQUFULEVBQWNFLEtBQWQsRUFBb0I7QUFBQyxNQUFJL0IsR0FBRyxHQUFDLEtBQUtTLElBQWI7O0FBQWtCLE1BQUcsc0JBQXFCVCxHQUF4QixFQUE0QjtBQUFDQSxPQUFHLENBQUM4QixnQkFBSixDQUFxQkQsSUFBckIsRUFBMEJFLEtBQTFCO0FBQWtDO0FBQUMsQ0FBN0k7O0FBQThJaEMsVUFBVSxDQUFDaEIsU0FBWCxDQUFxQmlELHFCQUFyQixHQUEyQyxZQUFVO0FBQUMsU0FBTyxLQUFLdkIsSUFBTCxDQUFVdUIscUJBQVYsSUFBaUN2RCxTQUFqQyxHQUEyQyxLQUFLZ0MsSUFBTCxDQUFVdUIscUJBQVYsRUFBM0MsR0FBNkUsRUFBcEY7QUFBd0YsQ0FBOUk7O0FBQStJakMsVUFBVSxDQUFDaEIsU0FBWCxDQUFxQmtELElBQXJCLEdBQTBCLFlBQVU7QUFBQztBQUNoZ0IsTUFBRyxFQUFFLGVBQWNMLGNBQWMsQ0FBQzdDLFNBQS9CLEtBQTJDdEYsUUFBUSxJQUFFZ0YsU0FBckQsSUFBZ0VoRixRQUFRLENBQUMwRyxVQUFULElBQXFCMUIsU0FBckYsSUFBZ0doRixRQUFRLENBQUMwRyxVQUFULEtBQXNCLFVBQXpILEVBQW9JO0FBQUMsUUFBSVksSUFBSSxHQUFDLElBQVQ7QUFBY0EsUUFBSSxDQUFDTCxZQUFMLEdBQWtCeEMsVUFBVSxDQUFDLFlBQVU7QUFBQzZDLFVBQUksQ0FBQ0wsWUFBTCxHQUFrQixDQUFsQjtBQUFvQkssVUFBSSxDQUFDa0IsSUFBTDtBQUFhLEtBQTdDLEVBQThDLENBQTlDLENBQTVCO0FBQTZFO0FBQVE7O0FBQUEsTUFBSWpDLEdBQUcsR0FBQyxLQUFLUyxJQUFiLENBRHVSLENBQ3JROztBQUMxUFQsS0FBRyxDQUFDQyxlQUFKLEdBQW9CLEtBQUtBLGVBQXpCO0FBQXlDRCxLQUFHLENBQUNFLFlBQUosR0FBaUIsS0FBS0EsWUFBdEI7O0FBQW1DLE1BQUc7QUFBQztBQUNoRkYsT0FBRyxDQUFDaUMsSUFBSixDQUFTeEQsU0FBVDtBQUFxQixHQUR1RCxDQUN2RCxPQUFNeUQsTUFBTixFQUFhO0FBQUM7QUFDbkMsVUFBTUEsTUFBTjtBQUFjO0FBQUMsQ0FKNGM7O0FBSTNjLFNBQVNDLFdBQVQsQ0FBcUJOLElBQXJCLEVBQTBCO0FBQUMsU0FBT0EsSUFBSSxDQUFDckcsT0FBTCxDQUFhLFFBQWIsRUFBc0IsVUFBU1AsQ0FBVCxFQUFXO0FBQUMsV0FBT3dFLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQnpFLENBQUMsQ0FBQ21ILFVBQUYsQ0FBYSxDQUFiLElBQWdCLElBQXBDLENBQVA7QUFBa0QsR0FBcEYsQ0FBUDtBQUE4Rjs7QUFBQSxTQUFTQyxlQUFULENBQXlCQyxHQUF6QixFQUE2QjtBQUFDO0FBQ3ZLLE1BQUlDLEdBQUcsR0FBQ3JILE1BQU0sQ0FBQ3NILE1BQVAsQ0FBYyxJQUFkLENBQVI7QUFBNEIsTUFBSUMsS0FBSyxHQUFDSCxHQUFHLENBQUNJLEtBQUosQ0FBVSxNQUFWLENBQVY7O0FBQTRCLE9BQUksSUFBSS9FLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQzhFLEtBQUssQ0FBQzdFLE1BQXBCLEVBQTJCRCxDQUFDLElBQUUsQ0FBOUIsRUFBZ0M7QUFBQyxRQUFJZ0YsSUFBSSxHQUFDRixLQUFLLENBQUM5RSxDQUFELENBQWQ7QUFBa0IsUUFBSWlGLEtBQUssR0FBQ0QsSUFBSSxDQUFDRCxLQUFMLENBQVcsSUFBWCxDQUFWO0FBQTJCLFFBQUliLElBQUksR0FBQ2UsS0FBSyxDQUFDekQsS0FBTixFQUFUO0FBQXVCLFFBQUk0QyxLQUFLLEdBQUNhLEtBQUssQ0FBQ0MsSUFBTixDQUFXLElBQVgsQ0FBVjtBQUEyQk4sT0FBRyxDQUFDSixXQUFXLENBQUNOLElBQUQsQ0FBWixDQUFILEdBQXVCRSxLQUF2QjtBQUE4Qjs7QUFBQSxPQUFLZSxJQUFMLEdBQVVQLEdBQVY7QUFBZTs7TUFEbkZGLGU7O0FBQ21GQSxlQUFlLENBQUN0RCxTQUFoQixDQUEwQmdFLEdBQTFCLEdBQThCLFVBQVNsQixJQUFULEVBQWM7QUFBQyxTQUFPLEtBQUtpQixJQUFMLENBQVVYLFdBQVcsQ0FBQ04sSUFBRCxDQUFyQixDQUFQO0FBQXFDLENBQWxGOztBQUFtRixTQUFTbUIsWUFBVCxHQUF1QixDQUFFOztNQUFoQkEsWTs7QUFBZ0JBLFlBQVksQ0FBQ2pFLFNBQWIsQ0FBdUI2QixJQUF2QixHQUE0QixVQUFTWixHQUFULEVBQWFpRCxlQUFiLEVBQTZCQyxrQkFBN0IsRUFBZ0RDLGdCQUFoRCxFQUFpRXJDLEdBQWpFLEVBQXFFYixlQUFyRSxFQUFxRm1ELE9BQXJGLEVBQTZGO0FBQUNwRCxLQUFHLENBQUNZLElBQUosQ0FBUyxLQUFULEVBQWVFLEdBQWY7QUFBb0IsTUFBSXVDLE1BQU0sR0FBQyxDQUFYOztBQUFhckQsS0FBRyxDQUFDTSxVQUFKLEdBQWUsWUFBVTtBQUFDLFFBQUlELFlBQVksR0FBQ0wsR0FBRyxDQUFDSyxZQUFyQjtBQUFrQyxRQUFJaUQsS0FBSyxHQUFDakQsWUFBWSxDQUFDa0QsS0FBYixDQUFtQkYsTUFBbkIsQ0FBVjtBQUFxQ0EsVUFBTSxJQUFFQyxLQUFLLENBQUMxRixNQUFkO0FBQXFCc0Ysc0JBQWtCLENBQUNJLEtBQUQsQ0FBbEI7QUFBMkIsR0FBako7O0FBQWtKdEQsS0FBRyxDQUFDTyxrQkFBSixHQUF1QixZQUFVO0FBQUMsUUFBR1AsR0FBRyxDQUFDRyxVQUFKLEtBQWlCLENBQXBCLEVBQXNCO0FBQUMsVUFBSTdGLE1BQU0sR0FBQzBGLEdBQUcsQ0FBQzFGLE1BQWY7QUFBc0IsVUFBSThGLFVBQVUsR0FBQ0osR0FBRyxDQUFDSSxVQUFuQjtBQUE4QixVQUFJa0IsV0FBVyxHQUFDdEIsR0FBRyxDQUFDdUIsaUJBQUosQ0FBc0IsY0FBdEIsQ0FBaEI7QUFBc0QsVUFBSTZCLE9BQU8sR0FBQ3BELEdBQUcsQ0FBQ2dDLHFCQUFKLEVBQVo7QUFBd0NpQixxQkFBZSxDQUFDM0ksTUFBRCxFQUFROEYsVUFBUixFQUFtQmtCLFdBQW5CLEVBQStCLElBQUllLGVBQUosQ0FBb0JlLE9BQXBCLENBQS9CLEVBQTRELFlBQVU7QUFBQ3BELFdBQUcsQ0FBQ3JCLEtBQUo7QUFBYSxPQUFwRixDQUFmO0FBQXNHLEtBQS9RLE1BQW9SLElBQUdxQixHQUFHLENBQUNHLFVBQUosS0FBaUIsQ0FBcEIsRUFBc0I7QUFBQ2dELHNCQUFnQjtBQUFJO0FBQUMsR0FBbFc7O0FBQW1XbkQsS0FBRyxDQUFDQyxlQUFKLEdBQW9CQSxlQUFwQjtBQUFvQ0QsS0FBRyxDQUFDRSxZQUFKLEdBQWlCLE1BQWpCOztBQUF3QixPQUFJLElBQUkyQixJQUFSLElBQWdCdUIsT0FBaEIsRUFBd0I7QUFBQyxRQUFHbEksTUFBTSxDQUFDNkQsU0FBUCxDQUFpQnlFLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ0wsT0FBckMsRUFBNkN2QixJQUE3QyxDQUFILEVBQXNEO0FBQUM3QixTQUFHLENBQUM4QixnQkFBSixDQUFxQkQsSUFBckIsRUFBMEJ1QixPQUFPLENBQUN2QixJQUFELENBQWpDO0FBQTBDO0FBQUM7O0FBQUE3QixLQUFHLENBQUNpQyxJQUFKO0FBQVksQ0FBbjFCOztBQUFvMUIsU0FBU3lCLGNBQVQsQ0FBd0JOLE9BQXhCLEVBQWdDO0FBQUMsT0FBS08sUUFBTCxHQUFjUCxPQUFkO0FBQXVCOztNQUEvQ00sYzs7QUFBK0NBLGNBQWMsQ0FBQzNFLFNBQWYsQ0FBeUJnRSxHQUF6QixHQUE2QixVQUFTbEIsSUFBVCxFQUFjO0FBQUMsU0FBTyxLQUFLOEIsUUFBTCxDQUFjWixHQUFkLENBQWtCbEIsSUFBbEIsQ0FBUDtBQUFnQyxDQUE1RTs7QUFBNkUsU0FBUytCLGNBQVQsR0FBeUIsQ0FBRTs7TUFBbEJBLGM7O0FBQWtCQSxjQUFjLENBQUM3RSxTQUFmLENBQXlCNkIsSUFBekIsR0FBOEIsVUFBU1osR0FBVCxFQUFhaUQsZUFBYixFQUE2QkMsa0JBQTdCLEVBQWdEQyxnQkFBaEQsRUFBaUVyQyxHQUFqRSxFQUFxRWIsZUFBckUsRUFBcUZtRCxPQUFyRixFQUE2RjtBQUFDLE1BQUlTLFVBQVUsR0FBQyxJQUFJckYsZUFBSixFQUFmO0FBQXFDLE1BQUlFLE1BQU0sR0FBQ21GLFVBQVUsQ0FBQ25GLE1BQXRCLENBQXRDLENBQW1FOztBQUNuZ0QsTUFBSW9GLFdBQVcsR0FBQyxJQUFJeEYsV0FBSixFQUFoQjtBQUFrQzlELE9BQUssQ0FBQ3NHLEdBQUQsRUFBSztBQUFDc0MsV0FBTyxFQUFDQSxPQUFUO0FBQWlCVyxlQUFXLEVBQUM5RCxlQUFlLEdBQUMsU0FBRCxHQUFXLGFBQXZEO0FBQXFFdkIsVUFBTSxFQUFDQSxNQUE1RTtBQUFtRnNGLFNBQUssRUFBQztBQUF6RixHQUFMLENBQUwsQ0FBZ0hDLElBQWhILENBQXFILFVBQVNDLFFBQVQsRUFBa0I7QUFBQyxRQUFJQyxNQUFNLEdBQUNELFFBQVEsQ0FBQ0UsSUFBVCxDQUFjQyxTQUFkLEVBQVg7QUFBcUNwQixtQkFBZSxDQUFDaUIsUUFBUSxDQUFDNUosTUFBVixFQUFpQjRKLFFBQVEsQ0FBQzlELFVBQTFCLEVBQXFDOEQsUUFBUSxDQUFDZCxPQUFULENBQWlCTCxHQUFqQixDQUFxQixjQUFyQixDQUFyQyxFQUEwRSxJQUFJVyxjQUFKLENBQW1CUSxRQUFRLENBQUNkLE9BQTVCLENBQTFFLEVBQStHLFlBQVU7QUFBQ1MsZ0JBQVUsQ0FBQ2xGLEtBQVg7QUFBbUJ3RixZQUFNLENBQUNHLE1BQVA7QUFBaUIsS0FBOUosQ0FBZjtBQUErSyxXQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFTQyxPQUFULEVBQWlCQyxNQUFqQixFQUF3QjtBQUFDLFVBQUlDLGFBQWEsR0FBQyxTQUFTQSxhQUFULEdBQXdCO0FBQUNQLGNBQU0sQ0FBQ1EsSUFBUCxHQUFjVixJQUFkLENBQW1CLFVBQVNXLE1BQVQsRUFBZ0I7QUFBQyxjQUFHQSxNQUFNLENBQUNDLElBQVYsRUFBZTtBQUFDO0FBQ3pnQkwsbUJBQU8sQ0FBQy9GLFNBQUQsQ0FBUDtBQUFvQixXQURxZSxNQUNqZTtBQUFDLGdCQUFJNkUsS0FBSyxHQUFDUSxXQUFXLENBQUM5RSxNQUFaLENBQW1CNEYsTUFBTSxDQUFDN0MsS0FBMUIsRUFBZ0M7QUFBQ2xDLG9CQUFNLEVBQUM7QUFBUixhQUFoQyxDQUFWO0FBQXlEcUQsOEJBQWtCLENBQUNJLEtBQUQsQ0FBbEI7QUFBMEJvQix5QkFBYTtBQUFJO0FBQUMsU0FEdVYsRUFDclYsT0FEcVYsRUFDNVUsVUFBUzlJLEtBQVQsRUFBZTtBQUFDNkksZ0JBQU0sQ0FBQzdJLEtBQUQsQ0FBTjtBQUFlLFNBRDZTO0FBQzFTLE9BRCtQOztBQUM5UDhJLG1CQUFhO0FBQUksS0FEd00sQ0FBUDtBQUM5TCxHQUQ5SixFQUNnS1QsSUFEaEssQ0FDcUssVUFBU1csTUFBVCxFQUFnQjtBQUFDekIsb0JBQWdCO0FBQUcsV0FBT3lCLE1BQVA7QUFBZSxHQUR4TixFQUN5TixVQUFTaEosS0FBVCxFQUFlO0FBQUN1SCxvQkFBZ0I7QUFBRyxXQUFPb0IsT0FBTyxDQUFDRSxNQUFSLENBQWU3SSxLQUFmLENBQVA7QUFBOEIsR0FEMVI7QUFDNlIsQ0FGc2dDOztBQUVyZ0MsU0FBU2tKLFdBQVQsR0FBc0I7QUFBQyxPQUFLQyxVQUFMLEdBQWdCN0osTUFBTSxDQUFDc0gsTUFBUCxDQUFjLElBQWQsQ0FBaEI7QUFBcUM7O01BQW5Ec0MsVzs7QUFBbUQsU0FBU0UsVUFBVCxDQUFvQkMsQ0FBcEIsRUFBc0I7QUFBQy9HLFlBQVUsQ0FBQyxZQUFVO0FBQUMsVUFBTStHLENBQU47QUFBUyxHQUFyQixFQUFzQixDQUF0QixDQUFWO0FBQW9DOztBQUFBSCxXQUFXLENBQUMvRixTQUFaLENBQXNCbUcsYUFBdEIsR0FBb0MsVUFBU3BKLEtBQVQsRUFBZTtBQUFDQSxPQUFLLENBQUNxSixNQUFOLEdBQWEsSUFBYjtBQUFrQixNQUFJQyxhQUFhLEdBQUMsS0FBS0wsVUFBTCxDQUFnQmpKLEtBQUssQ0FBQ3VKLElBQXRCLENBQWxCOztBQUE4QyxNQUFHRCxhQUFhLElBQUUzRyxTQUFsQixFQUE0QjtBQUFDLFFBQUliLE1BQU0sR0FBQ3dILGFBQWEsQ0FBQ3hILE1BQXpCOztBQUFnQyxTQUFJLElBQUlELENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQ0MsTUFBZCxFQUFxQkQsQ0FBQyxJQUFFLENBQXhCLEVBQTBCO0FBQUMsVUFBSTJILFFBQVEsR0FBQ0YsYUFBYSxDQUFDekgsQ0FBRCxDQUExQjs7QUFBOEIsVUFBRztBQUFDLFlBQUcsT0FBTzJILFFBQVEsQ0FBQ0MsV0FBaEIsS0FBOEIsVUFBakMsRUFBNEM7QUFBQ0Qsa0JBQVEsQ0FBQ0MsV0FBVCxDQUFxQnpKLEtBQXJCO0FBQTZCLFNBQTFFLE1BQThFO0FBQUN3SixrQkFBUSxDQUFDN0IsSUFBVCxDQUFjLElBQWQsRUFBbUIzSCxLQUFuQjtBQUEyQjtBQUFDLE9BQS9HLENBQStHLE9BQU1tSixDQUFOLEVBQVE7QUFBQ0Qsa0JBQVUsQ0FBQ0MsQ0FBRCxDQUFWO0FBQWU7QUFBQztBQUFDO0FBQUMsQ0FBcFg7O0FBQXFYSCxXQUFXLENBQUMvRixTQUFaLENBQXNCeUcsZ0JBQXRCLEdBQXVDLFVBQVNILElBQVQsRUFBY0MsUUFBZCxFQUF1QjtBQUFDRCxNQUFJLEdBQUM1RixNQUFNLENBQUM0RixJQUFELENBQVg7QUFBa0IsTUFBSXZJLFNBQVMsR0FBQyxLQUFLaUksVUFBbkI7QUFBOEIsTUFBSUssYUFBYSxHQUFDdEksU0FBUyxDQUFDdUksSUFBRCxDQUEzQjs7QUFBa0MsTUFBR0QsYUFBYSxJQUFFM0csU0FBbEIsRUFBNEI7QUFBQzJHLGlCQUFhLEdBQUMsRUFBZDtBQUFpQnRJLGFBQVMsQ0FBQ3VJLElBQUQsQ0FBVCxHQUFnQkQsYUFBaEI7QUFBK0I7O0FBQUEsTUFBSUssS0FBSyxHQUFDLEtBQVY7O0FBQWdCLE9BQUksSUFBSTlILENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQ3lILGFBQWEsQ0FBQ3hILE1BQTVCLEVBQW1DRCxDQUFDLElBQUUsQ0FBdEMsRUFBd0M7QUFBQyxRQUFHeUgsYUFBYSxDQUFDekgsQ0FBRCxDQUFiLEtBQW1CMkgsUUFBdEIsRUFBK0I7QUFBQ0csV0FBSyxHQUFDLElBQU47QUFBWTtBQUFDOztBQUFBLE1BQUcsQ0FBQ0EsS0FBSixFQUFVO0FBQUNMLGlCQUFhLENBQUNoSCxJQUFkLENBQW1Ca0gsUUFBbkI7QUFBOEI7QUFBQyxDQUE5Vzs7QUFBK1dSLFdBQVcsQ0FBQy9GLFNBQVosQ0FBc0IyRyxtQkFBdEIsR0FBMEMsVUFBU0wsSUFBVCxFQUFjQyxRQUFkLEVBQXVCO0FBQUNELE1BQUksR0FBQzVGLE1BQU0sQ0FBQzRGLElBQUQsQ0FBWDtBQUFrQixNQUFJdkksU0FBUyxHQUFDLEtBQUtpSSxVQUFuQjtBQUE4QixNQUFJSyxhQUFhLEdBQUN0SSxTQUFTLENBQUN1SSxJQUFELENBQTNCOztBQUFrQyxNQUFHRCxhQUFhLElBQUUzRyxTQUFsQixFQUE0QjtBQUFDLFFBQUlrSCxRQUFRLEdBQUMsRUFBYjs7QUFBZ0IsU0FBSSxJQUFJaEksQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDeUgsYUFBYSxDQUFDeEgsTUFBNUIsRUFBbUNELENBQUMsSUFBRSxDQUF0QyxFQUF3QztBQUFDLFVBQUd5SCxhQUFhLENBQUN6SCxDQUFELENBQWIsS0FBbUIySCxRQUF0QixFQUErQjtBQUFDSyxnQkFBUSxDQUFDdkgsSUFBVCxDQUFjZ0gsYUFBYSxDQUFDekgsQ0FBRCxDQUEzQjtBQUFpQztBQUFDOztBQUFBLFFBQUdnSSxRQUFRLENBQUMvSCxNQUFULEtBQWtCLENBQXJCLEVBQXVCO0FBQUMsYUFBT2QsU0FBUyxDQUFDdUksSUFBRCxDQUFoQjtBQUF3QixLQUFoRCxNQUFvRDtBQUFDdkksZUFBUyxDQUFDdUksSUFBRCxDQUFULEdBQWdCTSxRQUFoQjtBQUEwQjtBQUFDO0FBQUMsQ0FBN1g7O0FBQThYLFNBQVNDLEtBQVQsQ0FBZVAsSUFBZixFQUFvQjtBQUFDLE9BQUtBLElBQUwsR0FBVUEsSUFBVjtBQUFlLE9BQUtGLE1BQUwsR0FBWTFHLFNBQVo7QUFBdUI7O01BQWxEbUgsSzs7QUFBa0QsU0FBU0MsWUFBVCxDQUFzQlIsSUFBdEIsRUFBMkIzSSxPQUEzQixFQUFtQztBQUFDa0osT0FBSyxDQUFDbkMsSUFBTixDQUFXLElBQVgsRUFBZ0I0QixJQUFoQjtBQUFzQixPQUFLL0wsSUFBTCxHQUFVb0QsT0FBTyxDQUFDcEQsSUFBbEI7QUFBdUIsT0FBS3dNLFdBQUwsR0FBaUJwSixPQUFPLENBQUNvSixXQUF6QjtBQUFzQzs7TUFBOUdELFk7QUFBOEdBLFlBQVksQ0FBQzlHLFNBQWIsR0FBdUI3RCxNQUFNLENBQUNzSCxNQUFQLENBQWNvRCxLQUFLLENBQUM3RyxTQUFwQixDQUF2Qjs7QUFBc0QsU0FBU2dILGVBQVQsQ0FBeUJWLElBQXpCLEVBQThCM0ksT0FBOUIsRUFBc0M7QUFBQ2tKLE9BQUssQ0FBQ25DLElBQU4sQ0FBVyxJQUFYLEVBQWdCNEIsSUFBaEI7QUFBc0IsT0FBSy9LLE1BQUwsR0FBWW9DLE9BQU8sQ0FBQ3BDLE1BQXBCO0FBQTJCLE9BQUs4RixVQUFMLEdBQWdCMUQsT0FBTyxDQUFDMEQsVUFBeEI7QUFBbUMsT0FBS2dELE9BQUwsR0FBYTFHLE9BQU8sQ0FBQzBHLE9BQXJCO0FBQThCOztPQUFoSjJDLGU7QUFBZ0pBLGVBQWUsQ0FBQ2hILFNBQWhCLEdBQTBCN0QsTUFBTSxDQUFDc0gsTUFBUCxDQUFjb0QsS0FBSyxDQUFDN0csU0FBcEIsQ0FBMUI7QUFBeUQsSUFBSWlILE9BQU8sR0FBQyxDQUFDLENBQWI7QUFBZSxJQUFJQyxVQUFVLEdBQUMsQ0FBZjtBQUFpQixJQUFJQyxJQUFJLEdBQUMsQ0FBVDtBQUFXLElBQUlDLE1BQU0sR0FBQyxDQUFYO0FBQWEsSUFBSUMsUUFBUSxHQUFDLENBQUMsQ0FBZDtBQUFnQixJQUFJQyxXQUFXLEdBQUMsQ0FBaEI7QUFBa0IsSUFBSUMsS0FBSyxHQUFDLENBQVY7QUFBWSxJQUFJQyxXQUFXLEdBQUMsQ0FBaEI7QUFBa0IsSUFBSUMsS0FBSyxHQUFDLENBQVY7QUFBWSxJQUFJQyxpQkFBaUIsR0FBQywrQ0FBdEI7QUFBc0UsSUFBSUMsZ0JBQWdCLEdBQUMsSUFBckI7QUFBMEIsSUFBSUMsZ0JBQWdCLEdBQUMsUUFBckI7O0FBQThCLElBQUlDLGFBQWEsR0FBQyxTQUFTQSxhQUFULENBQXVCN0UsS0FBdkIsRUFBNkI4RSxHQUE3QixFQUFpQztBQUFDLE1BQUlDLENBQUMsR0FBQ0MsUUFBUSxDQUFDaEYsS0FBRCxFQUFPLEVBQVAsQ0FBZDs7QUFBeUIsTUFBRytFLENBQUMsS0FBR0EsQ0FBUCxFQUFTO0FBQUNBLEtBQUMsR0FBQ0QsR0FBRjtBQUFPOztBQUFBLFNBQU9HLGFBQWEsQ0FBQ0YsQ0FBRCxDQUFwQjtBQUF5QixDQUF2SDs7QUFBd0gsSUFBSUUsYUFBYSxHQUFDLFNBQVNBLGFBQVQsQ0FBdUJGLENBQXZCLEVBQXlCO0FBQUMsU0FBT0csSUFBSSxDQUFDQyxHQUFMLENBQVNELElBQUksQ0FBQ0UsR0FBTCxDQUFTTCxDQUFULEVBQVdKLGdCQUFYLENBQVQsRUFBc0NDLGdCQUF0QyxDQUFQO0FBQWdFLENBQTVHOztBQUE2RyxJQUFJUyxJQUFJLEdBQUMsU0FBU0EsSUFBVCxDQUFjckcsSUFBZCxFQUFtQnNHLENBQW5CLEVBQXFCdkwsS0FBckIsRUFBMkI7QUFBQyxNQUFHO0FBQUMsUUFBRyxPQUFPdUwsQ0FBUCxLQUFXLFVBQWQsRUFBeUI7QUFBQ0EsT0FBQyxDQUFDNUQsSUFBRixDQUFPMUMsSUFBUCxFQUFZakYsS0FBWjtBQUFvQjtBQUFDLEdBQW5ELENBQW1ELE9BQU1tSixDQUFOLEVBQVE7QUFBQ0QsY0FBVSxDQUFDQyxDQUFELENBQVY7QUFBZTtBQUFDLENBQWpIOztBQUFrSCxTQUFTcUMsbUJBQVQsQ0FBNkJ4RyxHQUE3QixFQUFpQ3BFLE9BQWpDLEVBQXlDO0FBQUNvSSxhQUFXLENBQUNyQixJQUFaLENBQWlCLElBQWpCO0FBQXVCLE9BQUtwRyxNQUFMLEdBQVlvQixTQUFaO0FBQXNCLE9BQUtqQixTQUFMLEdBQWVpQixTQUFmO0FBQXlCLE9BQUtsQixPQUFMLEdBQWFrQixTQUFiO0FBQXVCLE9BQUtxQyxHQUFMLEdBQVNyQyxTQUFUO0FBQW1CLE9BQUswQixVQUFMLEdBQWdCMUIsU0FBaEI7QUFBMEIsT0FBS3dCLGVBQUwsR0FBcUJ4QixTQUFyQjtBQUErQixPQUFLOEksTUFBTCxHQUFZOUksU0FBWjtBQUFzQitJLE9BQUssQ0FBQyxJQUFELEVBQU0xRyxHQUFOLEVBQVVwRSxPQUFWLENBQUw7QUFBeUI7O09BQXpQNEssbUI7QUFBeVAsSUFBSUcsZ0JBQWdCLEdBQUNqTixLQUFLLElBQUVpRSxTQUFQLElBQWtCSixRQUFRLElBQUVJLFNBQTVCLElBQXVDLFVBQVNKLFFBQVEsQ0FBQ1UsU0FBOUU7O0FBQXdGLFNBQVN5SSxLQUFULENBQWVFLEVBQWYsRUFBa0I1RyxHQUFsQixFQUFzQnBFLE9BQXRCLEVBQThCO0FBQUNvRSxLQUFHLEdBQUNyQixNQUFNLENBQUNxQixHQUFELENBQVY7QUFBZ0IsTUFBSWIsZUFBZSxHQUFDdkQsT0FBTyxJQUFFK0IsU0FBVCxJQUFvQmtKLE9BQU8sQ0FBQ2pMLE9BQU8sQ0FBQ3VELGVBQVQsQ0FBL0M7QUFBeUUsTUFBSTJILFlBQVksR0FBQ1osYUFBYSxDQUFDLElBQUQsQ0FBOUI7QUFBcUMsTUFBSWEsZ0JBQWdCLEdBQUNuTCxPQUFPLElBQUUrQixTQUFULElBQW9CL0IsT0FBTyxDQUFDbUwsZ0JBQVIsSUFBMEJwSixTQUE5QyxHQUF3RG1JLGFBQWEsQ0FBQ2xLLE9BQU8sQ0FBQ21MLGdCQUFULEVBQTBCLEtBQTFCLENBQXJFLEdBQXNHYixhQUFhLENBQUMsS0FBRCxDQUF4STtBQUFnSixNQUFJbEIsV0FBVyxHQUFDLEVBQWhCO0FBQW1CLE1BQUlnQyxLQUFLLEdBQUNGLFlBQVY7QUFBdUIsTUFBSUcsV0FBVyxHQUFDLEtBQWhCO0FBQXNCLE1BQUkzRSxPQUFPLEdBQUMxRyxPQUFPLElBQUUrQixTQUFULElBQW9CL0IsT0FBTyxDQUFDMEcsT0FBUixJQUFpQjNFLFNBQXJDLEdBQStDbEYsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ3lPLFNBQUwsQ0FBZXRMLE9BQU8sQ0FBQzBHLE9BQXZCLENBQVgsQ0FBL0MsR0FBMkYzRSxTQUF2RztBQUFpSCxNQUFJd0osZ0JBQWdCLEdBQUN2TCxPQUFPLElBQUUrQixTQUFULElBQW9CL0IsT0FBTyxDQUFDd0wsU0FBUixJQUFtQnpKLFNBQXZDLEdBQWlEL0IsT0FBTyxDQUFDd0wsU0FBekQsR0FBbUV0RyxjQUF4RjtBQUF1RyxNQUFJNUIsR0FBRyxHQUFDeUgsZ0JBQWdCLElBQUUsRUFBRS9LLE9BQU8sSUFBRStCLFNBQVQsSUFBb0IvQixPQUFPLENBQUN3TCxTQUFSLElBQW1CekosU0FBekMsQ0FBbEIsR0FBc0VBLFNBQXRFLEdBQWdGLElBQUlzQixVQUFKLENBQWUsSUFBSWtJLGdCQUFKLEVBQWYsQ0FBeEY7QUFBK0gsTUFBSUUsU0FBUyxHQUFDbkksR0FBRyxJQUFFdkIsU0FBTCxHQUFlLElBQUltRixjQUFKLEVBQWYsR0FBb0MsSUFBSVosWUFBSixFQUFsRDtBQUFxRSxNQUFJb0YsY0FBYyxHQUFDM0osU0FBbkI7QUFBNkIsTUFBSTFCLE9BQU8sR0FBQyxDQUFaO0FBQWMsTUFBSXNMLFlBQVksR0FBQ3JDLE9BQWpCO0FBQXlCLE1BQUlzQyxVQUFVLEdBQUMsRUFBZjtBQUFrQixNQUFJQyxpQkFBaUIsR0FBQyxFQUF0QjtBQUF5QixNQUFJQyxlQUFlLEdBQUMsRUFBcEI7QUFBdUIsTUFBSUMsVUFBVSxHQUFDLEVBQWY7QUFBa0IsTUFBSXpILEtBQUssR0FBQ3FGLFdBQVY7QUFBc0IsTUFBSXFDLFVBQVUsR0FBQyxDQUFmO0FBQWlCLE1BQUlDLFVBQVUsR0FBQyxDQUFmOztBQUFpQixNQUFJdEgsT0FBTyxHQUFDLFNBQVNBLE9BQVQsQ0FBaUIvRyxNQUFqQixFQUF3QjhGLFVBQXhCLEVBQW1Da0IsV0FBbkMsRUFBK0M4QixPQUEvQyxFQUF1RGtCLE1BQXZELEVBQThEO0FBQUMsUUFBRytELFlBQVksS0FBR3BDLFVBQWxCLEVBQTZCO0FBQUNtQyxvQkFBYyxHQUFDOUQsTUFBZjs7QUFBc0IsVUFBR2hLLE1BQU0sS0FBRyxHQUFULElBQWNnSCxXQUFXLElBQUU3QyxTQUEzQixJQUFzQ2dJLGlCQUFpQixDQUFDbUMsSUFBbEIsQ0FBdUJ0SCxXQUF2QixDQUF6QyxFQUE2RTtBQUFDK0csb0JBQVksR0FBQ25DLElBQWI7QUFBa0I2QixtQkFBVyxHQUFDLElBQVo7QUFBaUJELGFBQUssR0FBQ0YsWUFBTjtBQUFtQkYsVUFBRSxDQUFDdkgsVUFBSCxHQUFjK0YsSUFBZDtBQUFtQixZQUFJcEssS0FBSyxHQUFDLElBQUlpSyxlQUFKLENBQW9CLE1BQXBCLEVBQTJCO0FBQUN6TCxnQkFBTSxFQUFDQSxNQUFSO0FBQWU4RixvQkFBVSxFQUFDQSxVQUExQjtBQUFxQ2dELGlCQUFPLEVBQUNBO0FBQTdDLFNBQTNCLENBQVY7QUFBNEZzRSxVQUFFLENBQUN4QyxhQUFILENBQWlCcEosS0FBakI7QUFBd0JzTCxZQUFJLENBQUNNLEVBQUQsRUFBSUEsRUFBRSxDQUFDckssTUFBUCxFQUFjdkIsS0FBZCxDQUFKO0FBQTBCLE9BQXJTLE1BQXlTO0FBQUMsWUFBSUMsT0FBTyxHQUFDLEVBQVo7O0FBQWUsWUFBR3pCLE1BQU0sS0FBRyxHQUFaLEVBQWdCO0FBQUMsY0FBRzhGLFVBQUgsRUFBYztBQUFDQSxzQkFBVSxHQUFDQSxVQUFVLENBQUM1RSxPQUFYLENBQW1CLE1BQW5CLEVBQTBCLEdBQTFCLENBQVg7QUFBMkM7O0FBQUFPLGlCQUFPLEdBQUMseUNBQXVDekIsTUFBdkMsR0FBOEMsR0FBOUMsR0FBa0Q4RixVQUFsRCxHQUE2RCw0Q0FBckU7QUFBbUgsU0FBOUwsTUFBa007QUFBQ3JFLGlCQUFPLEdBQUMsZ0ZBQThFdUYsV0FBVyxJQUFFN0MsU0FBYixHQUF1QixHQUF2QixHQUEyQjZDLFdBQVcsQ0FBQzlGLE9BQVosQ0FBb0IsTUFBcEIsRUFBMkIsR0FBM0IsQ0FBekcsSUFBMEksNEJBQWxKO0FBQWdMOztBQUFBd0osa0JBQVUsQ0FBQyxJQUFJM0YsS0FBSixDQUFVdEQsT0FBVixDQUFELENBQVY7QUFBK0JrQyxhQUFLO0FBQUcsWUFBSW5DLEtBQUssR0FBQyxJQUFJaUssZUFBSixDQUFvQixPQUFwQixFQUE0QjtBQUFDekwsZ0JBQU0sRUFBQ0EsTUFBUjtBQUFlOEYsb0JBQVUsRUFBQ0EsVUFBMUI7QUFBcUNnRCxpQkFBTyxFQUFDQTtBQUE3QyxTQUE1QixDQUFWO0FBQTZGc0UsVUFBRSxDQUFDeEMsYUFBSCxDQUFpQnBKLEtBQWpCO0FBQXdCc0wsWUFBSSxDQUFDTSxFQUFELEVBQUlBLEVBQUUsQ0FBQ25LLE9BQVAsRUFBZXpCLEtBQWYsQ0FBSjtBQUEyQjtBQUFDO0FBQUMsR0FBcCtCOztBQUFxK0IsTUFBSTBGLFVBQVUsR0FBQyxTQUFTQSxVQUFULENBQW9CcUgsU0FBcEIsRUFBOEI7QUFBQyxRQUFHUixZQUFZLEtBQUduQyxJQUFsQixFQUF1QjtBQUFDLFVBQUlZLENBQUMsR0FBQyxDQUFDLENBQVA7O0FBQVMsV0FBSSxJQUFJbkosQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDa0wsU0FBUyxDQUFDakwsTUFBeEIsRUFBK0JELENBQUMsSUFBRSxDQUFsQyxFQUFvQztBQUFDLFlBQUkxQyxDQUFDLEdBQUM0TixTQUFTLENBQUN6RyxVQUFWLENBQXFCekUsQ0FBckIsQ0FBTjs7QUFBOEIsWUFBRzFDLENBQUMsS0FBRyxLQUFLbUgsVUFBTCxDQUFnQixDQUFoQixDQUFKLElBQXdCbkgsQ0FBQyxLQUFHLEtBQUttSCxVQUFMLENBQWdCLENBQWhCLENBQS9CLEVBQWtEO0FBQUMwRSxXQUFDLEdBQUNuSixDQUFGO0FBQUs7QUFBQzs7QUFBQSxVQUFJMkYsS0FBSyxHQUFDLENBQUN3RCxDQUFDLEtBQUcsQ0FBQyxDQUFMLEdBQU8yQixVQUFQLEdBQWtCLEVBQW5CLElBQXVCSSxTQUFTLENBQUN0RixLQUFWLENBQWdCLENBQWhCLEVBQWtCdUQsQ0FBQyxHQUFDLENBQXBCLENBQWpDO0FBQXdEMkIsZ0JBQVUsR0FBQyxDQUFDM0IsQ0FBQyxLQUFHLENBQUMsQ0FBTCxHQUFPMkIsVUFBUCxHQUFrQixFQUFuQixJQUF1QkksU0FBUyxDQUFDdEYsS0FBVixDQUFnQnVELENBQUMsR0FBQyxDQUFsQixDQUFsQzs7QUFBdUQsVUFBR3hELEtBQUssS0FBRyxFQUFYLEVBQWM7QUFBQ3lFLG1CQUFXLEdBQUMsSUFBWjtBQUFrQjs7QUFBQSxXQUFJLElBQUllLFFBQVEsR0FBQyxDQUFqQixFQUFtQkEsUUFBUSxHQUFDeEYsS0FBSyxDQUFDMUYsTUFBbEMsRUFBeUNrTCxRQUFRLElBQUUsQ0FBbkQsRUFBcUQ7QUFBQyxZQUFJN04sQ0FBQyxHQUFDcUksS0FBSyxDQUFDbEIsVUFBTixDQUFpQjBHLFFBQWpCLENBQU47O0FBQWlDLFlBQUc5SCxLQUFLLEtBQUdvRixRQUFSLElBQWtCbkwsQ0FBQyxLQUFHLEtBQUttSCxVQUFMLENBQWdCLENBQWhCLENBQXpCLEVBQTRDO0FBQUNwQixlQUFLLEdBQUNxRixXQUFOO0FBQW1CLFNBQWhFLE1BQW9FO0FBQUMsY0FBR3JGLEtBQUssS0FBR29GLFFBQVgsRUFBb0I7QUFBQ3BGLGlCQUFLLEdBQUNxRixXQUFOO0FBQW1COztBQUFBLGNBQUdwTCxDQUFDLEtBQUcsS0FBS21ILFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBSixJQUF3Qm5ILENBQUMsS0FBRyxLQUFLbUgsVUFBTCxDQUFnQixDQUFoQixDQUEvQixFQUFrRDtBQUFDLGdCQUFHcEIsS0FBSyxLQUFHcUYsV0FBWCxFQUF1QjtBQUFDLGtCQUFHckYsS0FBSyxLQUFHc0YsS0FBWCxFQUFpQjtBQUFDcUMsMEJBQVUsR0FBQ0csUUFBUSxHQUFDLENBQXBCO0FBQXVCOztBQUFBLGtCQUFJQyxLQUFLLEdBQUN6RixLQUFLLENBQUNDLEtBQU4sQ0FBWW1GLFVBQVosRUFBdUJDLFVBQVUsR0FBQyxDQUFsQyxDQUFWO0FBQStDLGtCQUFJNUcsS0FBSyxHQUFDdUIsS0FBSyxDQUFDQyxLQUFOLENBQVlvRixVQUFVLElBQUVBLFVBQVUsR0FBQ0csUUFBWCxJQUFxQnhGLEtBQUssQ0FBQ2xCLFVBQU4sQ0FBaUJ1RyxVQUFqQixNQUErQixJQUFJdkcsVUFBSixDQUFlLENBQWYsQ0FBcEQsR0FBc0UsQ0FBdEUsR0FBd0UsQ0FBMUUsQ0FBdEIsRUFBbUcwRyxRQUFuRyxDQUFWOztBQUF1SCxrQkFBR0MsS0FBSyxLQUFHLE1BQVgsRUFBa0I7QUFBQ1QsMEJBQVUsSUFBRSxJQUFaO0FBQWlCQSwwQkFBVSxJQUFFdkcsS0FBWjtBQUFtQixlQUF2RCxNQUE0RCxJQUFHZ0gsS0FBSyxLQUFHLElBQVgsRUFBZ0I7QUFBQ1IsaUNBQWlCLEdBQUN4RyxLQUFsQjtBQUF5QixlQUExQyxNQUErQyxJQUFHZ0gsS0FBSyxLQUFHLE9BQVgsRUFBbUI7QUFBQ1AsK0JBQWUsR0FBQ3pHLEtBQWhCO0FBQXVCLGVBQTNDLE1BQWdELElBQUdnSCxLQUFLLEtBQUcsT0FBWCxFQUFtQjtBQUFDbkIsNEJBQVksR0FBQ2hCLGFBQWEsQ0FBQzdFLEtBQUQsRUFBTzZGLFlBQVAsQ0FBMUI7QUFBK0NFLHFCQUFLLEdBQUNGLFlBQU47QUFBb0IsZUFBdkYsTUFBNEYsSUFBR21CLEtBQUssS0FBRyxrQkFBWCxFQUE4QjtBQUFDbEIsZ0NBQWdCLEdBQUNqQixhQUFhLENBQUM3RSxLQUFELEVBQU84RixnQkFBUCxDQUE5Qjs7QUFBdUQsb0JBQUc5SyxPQUFPLEtBQUcsQ0FBYixFQUFlO0FBQUNtRSw4QkFBWSxDQUFDbkUsT0FBRCxDQUFaO0FBQXNCQSx5QkFBTyxHQUFDbUIsVUFBVSxDQUFDLFlBQVU7QUFBQ3lELDZCQUFTO0FBQUksbUJBQXpCLEVBQTBCa0csZ0JBQTFCLENBQWxCO0FBQStEO0FBQUM7QUFBQzs7QUFBQSxnQkFBRzdHLEtBQUssS0FBR3FGLFdBQVgsRUFBdUI7QUFBQyxrQkFBR2lDLFVBQVUsS0FBRyxFQUFoQixFQUFtQjtBQUFDeEMsMkJBQVcsR0FBQ3lDLGlCQUFaOztBQUE4QixvQkFBR0MsZUFBZSxLQUFHLEVBQXJCLEVBQXdCO0FBQUNBLGlDQUFlLEdBQUMsU0FBaEI7QUFBMkI7O0FBQUEsb0JBQUkxTSxLQUFLLEdBQUMsSUFBSStKLFlBQUosQ0FBaUIyQyxlQUFqQixFQUFpQztBQUFDbFAsc0JBQUksRUFBQ2dQLFVBQVUsQ0FBQy9FLEtBQVgsQ0FBaUIsQ0FBakIsQ0FBTjtBQUEwQnVDLDZCQUFXLEVBQUN5QztBQUF0QyxpQkFBakMsQ0FBVjtBQUFxR2Isa0JBQUUsQ0FBQ3hDLGFBQUgsQ0FBaUJwSixLQUFqQjs7QUFBd0Isb0JBQUcwTSxlQUFlLEtBQUcsU0FBckIsRUFBK0I7QUFBQ3BCLHNCQUFJLENBQUNNLEVBQUQsRUFBSUEsRUFBRSxDQUFDbEssU0FBUCxFQUFpQjFCLEtBQWpCLENBQUo7QUFBNkI7O0FBQUEsb0JBQUd1TSxZQUFZLEtBQUdsQyxNQUFsQixFQUF5QjtBQUFDO0FBQVE7QUFBQzs7QUFBQW1DLHdCQUFVLEdBQUMsRUFBWDtBQUFjRSw2QkFBZSxHQUFDLEVBQWhCO0FBQW9COztBQUFBeEgsaUJBQUssR0FBQy9GLENBQUMsS0FBRyxLQUFLbUgsVUFBTCxDQUFnQixDQUFoQixDQUFKLEdBQXVCZ0UsUUFBdkIsR0FBZ0NDLFdBQXRDO0FBQW1ELFdBQTluQyxNQUFrb0M7QUFBQyxnQkFBR3JGLEtBQUssS0FBR3FGLFdBQVgsRUFBdUI7QUFBQ3FDLHdCQUFVLEdBQUNJLFFBQVg7QUFBb0I5SCxtQkFBSyxHQUFDc0YsS0FBTjtBQUFhOztBQUFBLGdCQUFHdEYsS0FBSyxLQUFHc0YsS0FBWCxFQUFpQjtBQUFDLGtCQUFHckwsQ0FBQyxLQUFHLElBQUltSCxVQUFKLENBQWUsQ0FBZixDQUFQLEVBQXlCO0FBQUN1RywwQkFBVSxHQUFDRyxRQUFRLEdBQUMsQ0FBcEI7QUFBc0I5SCxxQkFBSyxHQUFDdUYsV0FBTjtBQUFtQjtBQUFDLGFBQXRGLE1BQTJGLElBQUd2RixLQUFLLEtBQUd1RixXQUFYLEVBQXVCO0FBQUN2RixtQkFBSyxHQUFDd0YsS0FBTjtBQUFhO0FBQUM7QUFBQztBQUFDO0FBQUM7QUFBQyxHQUFoMkQ7O0FBQWkyRCxNQUFJL0UsUUFBUSxHQUFDLFNBQVNBLFFBQVQsR0FBbUI7QUFBQyxRQUFHNEcsWUFBWSxLQUFHbkMsSUFBZixJQUFxQm1DLFlBQVksS0FBR3BDLFVBQXZDLEVBQWtEO0FBQUNvQyxrQkFBWSxHQUFDckMsT0FBYjs7QUFBcUIsVUFBR2pKLE9BQU8sS0FBRyxDQUFiLEVBQWU7QUFBQ21FLG9CQUFZLENBQUNuRSxPQUFELENBQVo7QUFBc0JBLGVBQU8sR0FBQyxDQUFSO0FBQVc7O0FBQUFBLGFBQU8sR0FBQ21CLFVBQVUsQ0FBQyxZQUFVO0FBQUN5RCxpQkFBUztBQUFJLE9BQXpCLEVBQTBCbUcsS0FBMUIsQ0FBbEI7QUFBbURBLFdBQUssR0FBQ2QsYUFBYSxDQUFDQyxJQUFJLENBQUNDLEdBQUwsQ0FBU1UsWUFBWSxHQUFDLEVBQXRCLEVBQXlCRSxLQUFLLEdBQUMsQ0FBL0IsQ0FBRCxDQUFuQjtBQUF1REosUUFBRSxDQUFDdkgsVUFBSCxHQUFjOEYsVUFBZDtBQUF5QixVQUFJbkssS0FBSyxHQUFDLElBQUk4SixLQUFKLENBQVUsT0FBVixDQUFWO0FBQTZCOEIsUUFBRSxDQUFDeEMsYUFBSCxDQUFpQnBKLEtBQWpCO0FBQXdCc0wsVUFBSSxDQUFDTSxFQUFELEVBQUlBLEVBQUUsQ0FBQ25LLE9BQVAsRUFBZXpCLEtBQWYsQ0FBSjtBQUEyQjtBQUFDLEdBQTlXOztBQUErVyxNQUFJbUMsS0FBSyxHQUFDLFNBQVNBLEtBQVQsR0FBZ0I7QUFBQ29LLGdCQUFZLEdBQUNsQyxNQUFiOztBQUFvQixRQUFHaUMsY0FBYyxJQUFFM0osU0FBbkIsRUFBNkI7QUFBQzJKLG9CQUFjO0FBQUdBLG9CQUFjLEdBQUMzSixTQUFmO0FBQTBCOztBQUFBLFFBQUcxQixPQUFPLEtBQUcsQ0FBYixFQUFlO0FBQUNtRSxrQkFBWSxDQUFDbkUsT0FBRCxDQUFaO0FBQXNCQSxhQUFPLEdBQUMsQ0FBUjtBQUFXOztBQUFBMkssTUFBRSxDQUFDdkgsVUFBSCxHQUFjZ0csTUFBZDtBQUFzQixHQUEvTDs7QUFBZ00sTUFBSXhFLFNBQVMsR0FBQyxTQUFTQSxTQUFULEdBQW9CO0FBQUM1RSxXQUFPLEdBQUMsQ0FBUjs7QUFBVSxRQUFHc0wsWUFBWSxLQUFHckMsT0FBbEIsRUFBMEI7QUFBQyxVQUFHLENBQUMrQixXQUFELElBQWNLLGNBQWMsSUFBRTNKLFNBQWpDLEVBQTJDO0FBQUN1RyxrQkFBVSxDQUFDLElBQUkzRixLQUFKLENBQVUsd0JBQXNCd0ksZ0JBQXRCLEdBQXVDLDhCQUFqRCxDQUFELENBQVY7QUFBNkZPLHNCQUFjO0FBQUdBLHNCQUFjLEdBQUMzSixTQUFmO0FBQTBCLE9BQXBMLE1BQXdMO0FBQUNzSixtQkFBVyxHQUFDLEtBQVo7QUFBa0JoTCxlQUFPLEdBQUNtQixVQUFVLENBQUMsWUFBVTtBQUFDeUQsbUJBQVM7QUFBSSxTQUF6QixFQUEwQmtHLGdCQUExQixDQUFsQjtBQUErRDs7QUFBQTtBQUFROztBQUFBRSxlQUFXLEdBQUMsS0FBWjtBQUFrQmhMLFdBQU8sR0FBQ21CLFVBQVUsQ0FBQyxZQUFVO0FBQUN5RCxlQUFTO0FBQUksS0FBekIsRUFBMEJrRyxnQkFBMUIsQ0FBbEI7QUFBOERRLGdCQUFZLEdBQUNwQyxVQUFiO0FBQXdCcUMsY0FBVSxHQUFDLEVBQVg7QUFBY0UsbUJBQWUsR0FBQyxFQUFoQjtBQUFtQkQscUJBQWlCLEdBQUN6QyxXQUFsQjtBQUE4QjJDLGNBQVUsR0FBQyxFQUFYO0FBQWNDLGNBQVUsR0FBQyxDQUFYO0FBQWFDLGNBQVUsR0FBQyxDQUFYO0FBQWEzSCxTQUFLLEdBQUNxRixXQUFOLENBQXZnQixDQUF5aEI7QUFDL3dQOztBQUNBLFFBQUkyQyxVQUFVLEdBQUNsSSxHQUFmOztBQUFtQixRQUFHQSxHQUFHLENBQUN5QyxLQUFKLENBQVUsQ0FBVixFQUFZLENBQVosTUFBaUIsT0FBakIsSUFBMEJ6QyxHQUFHLENBQUN5QyxLQUFKLENBQVUsQ0FBVixFQUFZLENBQVosTUFBaUIsT0FBOUMsRUFBc0Q7QUFBQyxVQUFHdUMsV0FBVyxLQUFHLEVBQWpCLEVBQW9CO0FBQUNrRCxrQkFBVSxJQUFFLENBQUNsSSxHQUFHLENBQUN4RixPQUFKLENBQVksR0FBWixNQUFtQixDQUFDLENBQXBCLEdBQXNCLEdBQXRCLEdBQTBCLEdBQTNCLElBQWdDLGNBQWhDLEdBQStDMk4sa0JBQWtCLENBQUNuRCxXQUFELENBQTdFO0FBQTRGO0FBQUM7O0FBQUEsUUFBSW9ELGNBQWMsR0FBQyxFQUFuQjtBQUFzQkEsa0JBQWMsQ0FBQyxRQUFELENBQWQsR0FBeUIsbUJBQXpCOztBQUE2QyxRQUFHOUYsT0FBTyxJQUFFM0UsU0FBWixFQUFzQjtBQUFDLFdBQUksSUFBSW9ELElBQVIsSUFBZ0J1QixPQUFoQixFQUF3QjtBQUFDLFlBQUdsSSxNQUFNLENBQUM2RCxTQUFQLENBQWlCeUUsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDTCxPQUFyQyxFQUE2Q3ZCLElBQTdDLENBQUgsRUFBc0Q7QUFBQ3FILHdCQUFjLENBQUNySCxJQUFELENBQWQsR0FBcUJ1QixPQUFPLENBQUN2QixJQUFELENBQTVCO0FBQW9DO0FBQUM7QUFBQzs7QUFBQSxRQUFHO0FBQUNzRyxlQUFTLENBQUN2SCxJQUFWLENBQWVaLEdBQWYsRUFBbUJxQixPQUFuQixFQUEyQkcsVUFBM0IsRUFBc0NDLFFBQXRDLEVBQStDdUgsVUFBL0MsRUFBMEQvSSxlQUExRCxFQUEwRWlKLGNBQTFFO0FBQTJGLEtBQS9GLENBQStGLE9BQU10TixLQUFOLEVBQVk7QUFBQ3FDLFdBQUs7QUFBRyxZQUFNckMsS0FBTjtBQUFhO0FBQUMsR0FGc3NOOztBQUVyc044TCxJQUFFLENBQUM1RyxHQUFILEdBQU9BLEdBQVA7QUFBVzRHLElBQUUsQ0FBQ3ZILFVBQUgsR0FBYzhGLFVBQWQ7QUFBeUJ5QixJQUFFLENBQUN6SCxlQUFILEdBQW1CQSxlQUFuQjtBQUFtQ3lILElBQUUsQ0FBQ0gsTUFBSCxHQUFVdEosS0FBVjtBQUFnQjBELFdBQVM7QUFBSTs7QUFBQTJGLG1CQUFtQixDQUFDdkksU0FBcEIsR0FBOEI3RCxNQUFNLENBQUNzSCxNQUFQLENBQWNzQyxXQUFXLENBQUMvRixTQUExQixDQUE5QjtBQUFtRXVJLG1CQUFtQixDQUFDdkksU0FBcEIsQ0FBOEJrSCxVQUE5QixHQUF5Q0EsVUFBekM7QUFBb0RxQixtQkFBbUIsQ0FBQ3ZJLFNBQXBCLENBQThCbUgsSUFBOUIsR0FBbUNBLElBQW5DO0FBQXdDb0IsbUJBQW1CLENBQUN2SSxTQUFwQixDQUE4Qm9ILE1BQTlCLEdBQXFDQSxNQUFyQzs7QUFBNENtQixtQkFBbUIsQ0FBQ3ZJLFNBQXBCLENBQThCZCxLQUE5QixHQUFvQyxZQUFVO0FBQUMsT0FBS3NKLE1BQUw7QUFBZSxDQUE5RDs7QUFBK0RELG1CQUFtQixDQUFDckIsVUFBcEIsR0FBK0JBLFVBQS9CO0FBQTBDcUIsbUJBQW1CLENBQUNwQixJQUFwQixHQUF5QkEsSUFBekI7QUFBOEJvQixtQkFBbUIsQ0FBQ25CLE1BQXBCLEdBQTJCQSxNQUEzQjtBQUFrQ21CLG1CQUFtQixDQUFDdkksU0FBcEIsQ0FBOEJrQixlQUE5QixHQUE4Q3hCLFNBQTlDO0FBQXdELElBQUkwSyxRQUFRLEdBQUM3QixtQkFBYjtBQUFpQ2hMLGVBQUEsR0FBZ0I2TSxRQUFoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDbmpDOztBQUFBN00sa0JBQUEsR0FBbUIsSUFBbkI7QUFBd0JBLHNCQUFBLEdBQXVCRCxjQUF2QixDLENBQXNDO0FBQzNFO0FBQ0E7O0FBQ0EsU0FBU0EsY0FBVCxDQUF3QitNLFFBQXhCLEVBQWlDO0FBQUM7QUFBQyxHQUFDaFEsTUFBTSxDQUFDaVEscUJBQVAsSUFBOEJuTCxVQUEvQixFQUEyQyxZQUFVO0FBQUMsU0FBSSxJQUFJb0wsQ0FBQyxHQUFDN1AsUUFBUSxDQUFDOFAsZ0JBQVQsQ0FBMEIsdUJBQTFCLENBQU4sRUFBeUQ1TCxDQUFDLEdBQUMyTCxDQUFDLENBQUMxTCxNQUFqRSxFQUF3RUQsQ0FBQyxFQUF6RSxHQUE2RTtBQUFDMkwsT0FBQyxDQUFDM0wsQ0FBRCxDQUFELENBQUs2TCxVQUFMLENBQWdCQyxXQUFoQixDQUE0QkgsQ0FBQyxDQUFDM0wsQ0FBRCxDQUE3QjtBQUFtQzs7QUFBQSxRQUFHeUwsUUFBSCxFQUFZO0FBQUNBLGNBQVE7QUFBSTtBQUFDLEdBQWpNO0FBQW9NOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0gxTjs7QUFBQTlNLGtCQUFBLEdBQW1CLElBQW5CO0FBQXdCQSxpQkFBQSxHQUFrQm9OLFNBQWxCO0FBQTRCcE4saUJBQUEsR0FBa0JGLFNBQWxCO0FBQTRCRSxtQkFBQSxHQUFvQixLQUFLLENBQXpCOztBQUEyQixJQUFJckQsWUFBWSxHQUFDRixtQkFBTyxDQUFDLHFHQUFELENBQXhCO0FBQXdEOzs7QUFBcUIsSUFBSTRRLFNBQUo7QUFBYyxJQUFJQyxXQUFKO0FBQWdCdE4sbUJBQUEsR0FBb0JzTixXQUFwQjs7QUFBZ0MsU0FBU0YsU0FBVCxHQUFvQjtBQUFDLE1BQUdDLFNBQUgsRUFBYUEsU0FBUyxDQUFDMUwsS0FBVjtBQUFrQjBMLFdBQVMsR0FBQyxJQUFWO0FBQWdCOztBQUFBLFNBQVN2TixTQUFULENBQW1CeEMsV0FBbkIsRUFBK0JpUSxVQUEvQixFQUEwQy9CLEtBQTFDLEVBQWdEO0FBQUMsTUFBTWdDLFFBQVEsR0FBQ0QsVUFBVSxFQUF6QixDQUFELENBQTZCOztBQUNwWixNQUFHQyxRQUFRLEtBQUdGLFdBQVgsSUFBd0IsQ0FBQzlCLEtBQTVCLEVBQWtDO0FBQU94TCxxQkFBQSxHQUFvQnNOLFdBQVcsR0FBQ0UsUUFBaEMsQ0FEOFUsQ0FDclM7O0FBQ2xGSixXQUFTO0FBQUdDLFdBQVMsR0FBQyxDQUFDLEdBQUUxUSxZQUFZLENBQUNzRCxxQkFBaEIsRUFBdUM7QUFBQ2EsUUFBSSxZQUFJeEQsV0FBSixxQ0FBMENnUSxXQUExQyxDQUFMO0FBQTZEN00sV0FBTyxFQUFDO0FBQXJFLEdBQXZDLENBQVY7QUFBNkg0TSxXQUFTLENBQUM5TixrQkFBVixDQUE2QixVQUFBQyxLQUFLLEVBQUU7QUFBQyxRQUFHQSxLQUFLLENBQUN4QyxJQUFOLENBQVdnQyxPQUFYLENBQW1CLEdBQW5CLE1BQTBCLENBQUMsQ0FBOUIsRUFBZ0M7O0FBQU8sUUFBRztBQUFDLFVBQU15TyxPQUFPLEdBQUN4USxJQUFJLENBQUNDLEtBQUwsQ0FBV3NDLEtBQUssQ0FBQ3hDLElBQWpCLENBQWQ7O0FBQXFDLFVBQUd5USxPQUFPLENBQUNDLE9BQVgsRUFBbUI7QUFBQztBQUNsUjtBQUNBeFAsYUFBSyxDQUFDaUIsUUFBUSxDQUFDd08sSUFBVixFQUFlO0FBQUNsRyxxQkFBVyxFQUFDO0FBQWIsU0FBZixDQUFMLENBQWlERSxJQUFqRCxDQUFzRCxVQUFBaUcsT0FBTyxFQUFFO0FBQUMsY0FBR0EsT0FBTyxDQUFDNVAsTUFBUixLQUFpQixHQUFwQixFQUF3QjtBQUFDbUIsb0JBQVEsQ0FBQ0MsTUFBVDtBQUFtQjtBQUFDLFNBQTdHO0FBQWdIO0FBQUMsS0FGb0csQ0FFcEcsT0FBTXlPLEdBQU4sRUFBVTtBQUFDeE8sYUFBTyxDQUFDQyxLQUFSLENBQWMsNENBQWQsRUFBMkR1TyxHQUEzRDtBQUFpRTtBQUFDLEdBRnJEO0FBRXdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKak07QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsbUM7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7OztBQ05BLGdIQUErQzs7Ozs7Ozs7Ozs7QUNBL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBMEIsb0JBQW9CLENBQUU7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvYW1wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO3ZhciBfZXZlbnRTb3VyY2VQb2x5ZmlsbD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2V2ZW50LXNvdXJjZS1wb2x5ZmlsbFwiKSk7dmFyIF9ldmVudHNvdXJjZT1yZXF1aXJlKFwiLi9lcnJvci1vdmVybGF5L2V2ZW50c291cmNlXCIpO3ZhciBfb25EZW1hbmRFbnRyaWVzVXRpbHM9cmVxdWlyZShcIi4vb24tZGVtYW5kLWVudHJpZXMtdXRpbHNcIik7dmFyIF9mb3VjPXJlcXVpcmUoXCIuL2ZvdWNcIik7LyogZ2xvYmFscyBfX3dlYnBhY2tfaGFzaF9fICovaWYoIXdpbmRvdy5FdmVudFNvdXJjZSl7d2luZG93LkV2ZW50U291cmNlPV9ldmVudFNvdXJjZVBvbHlmaWxsLmRlZmF1bHQ7fWNvbnN0IGRhdGE9SlNPTi5wYXJzZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnX19ORVhUX0RBVEFfXycpLnRleHRDb250ZW50KTtsZXR7YXNzZXRQcmVmaXgscGFnZX09ZGF0YTthc3NldFByZWZpeD1hc3NldFByZWZpeHx8Jyc7bGV0IG1vc3RSZWNlbnRIYXNoPW51bGw7LyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovbGV0IGN1ckhhc2g9X193ZWJwYWNrX2hhc2hfXztjb25zdCBob3RVcGRhdGVQYXRoPWFzc2V0UHJlZml4Kyhhc3NldFByZWZpeC5lbmRzV2l0aCgnLycpPycnOicvJykrJ19uZXh0L3N0YXRpYy93ZWJwYWNrLyc7Ly8gSXMgdGhlcmUgYSBuZXdlciB2ZXJzaW9uIG9mIHRoaXMgY29kZSBhdmFpbGFibGU/XG5mdW5jdGlvbiBpc1VwZGF0ZUF2YWlsYWJsZSgpey8vIF9fd2VicGFja19oYXNoX18gaXMgdGhlIGhhc2ggb2YgdGhlIGN1cnJlbnQgY29tcGlsYXRpb24uXG4vLyBJdCdzIGEgZ2xvYmFsIHZhcmlhYmxlIGluamVjdGVkIGJ5IFdlYnBhY2suXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9yZXR1cm4gbW9zdFJlY2VudEhhc2ghPT1fX3dlYnBhY2tfaGFzaF9fO30vLyBXZWJwYWNrIGRpc2FsbG93cyB1cGRhdGVzIGluIG90aGVyIHN0YXRlcy5cbmZ1bmN0aW9uIGNhbkFwcGx5VXBkYXRlcygpe3JldHVybiBtb2R1bGUuaG90LnN0YXR1cygpPT09J2lkbGUnO30vLyBUaGlzIGZ1bmN0aW9uIHJlYWRzIGNvZGUgdXBkYXRlcyBvbiB0aGUgZmx5IGFuZCBoYXJkXG4vLyByZWxvYWRzIHRoZSBwYWdlIHdoZW4gaXQgaGFzIGNoYW5nZWQuXG5hc3luYyBmdW5jdGlvbiB0cnlBcHBseVVwZGF0ZXMoKXtpZighaXNVcGRhdGVBdmFpbGFibGUoKXx8IWNhbkFwcGx5VXBkYXRlcygpKXtyZXR1cm47fXRyeXtjb25zdCByZXM9YXdhaXQgZmV0Y2godHlwZW9mIF9fd2VicGFja19ydW50aW1lX2lkX18hPT0ndW5kZWZpbmVkJz8vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbmAke2hvdFVwZGF0ZVBhdGh9JHtjdXJIYXNofS4ke19fd2VicGFja19ydW50aW1lX2lkX199LmhvdC11cGRhdGUuanNvbmA6YCR7aG90VXBkYXRlUGF0aH0ke2N1ckhhc2h9LmhvdC11cGRhdGUuanNvbmApO2NvbnN0IGpzb25EYXRhPWF3YWl0IHJlcy5qc29uKCk7Y29uc3QgY3VyUGFnZT1wYWdlPT09Jy8nPydpbmRleCc6cGFnZTsvLyB3ZWJwYWNrIDUgdXNlcyBhbiBhcnJheSBpbnN0ZWFkXG5jb25zdCBwYWdlVXBkYXRlZD0oQXJyYXkuaXNBcnJheShqc29uRGF0YS5jKT9qc29uRGF0YS5jOk9iamVjdC5rZXlzKGpzb25EYXRhLmMpKS5zb21lKG1vZD0+e3JldHVybiBtb2QuaW5kZXhPZihgcGFnZXMke2N1clBhZ2Uuc3Vic3RyKDAsMSk9PT0nLyc/Y3VyUGFnZTpgLyR7Y3VyUGFnZX1gfWApIT09LTF8fG1vZC5pbmRleE9mKGBwYWdlcyR7Y3VyUGFnZS5zdWJzdHIoMCwxKT09PScvJz9jdXJQYWdlOmAvJHtjdXJQYWdlfWB9YC5yZXBsYWNlKC9cXC8vZywnXFxcXCcpKSE9PS0xO30pO2lmKHBhZ2VVcGRhdGVkKXtkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7fWVsc2V7Y3VySGFzaD1tb3N0UmVjZW50SGFzaDt9fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcignRXJyb3Igb2NjdXJyZWQgY2hlY2tpbmcgZm9yIHVwZGF0ZScsZXJyKTtkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7fX0oMCxfZXZlbnRzb3VyY2UuYWRkTWVzc2FnZUxpc3RlbmVyKShldmVudD0+e2lmKGV2ZW50LmRhdGE9PT0nXFx1RDgzRFxcdURDOTMnKXtyZXR1cm47fXRyeXtjb25zdCBtZXNzYWdlPUpTT04ucGFyc2UoZXZlbnQuZGF0YSk7aWYobWVzc2FnZS5hY3Rpb249PT0nc3luYyd8fG1lc3NhZ2UuYWN0aW9uPT09J2J1aWx0Jyl7aWYoIW1lc3NhZ2UuaGFzaCl7cmV0dXJuO31tb3N0UmVjZW50SGFzaD1tZXNzYWdlLmhhc2g7dHJ5QXBwbHlVcGRhdGVzKCk7fWVsc2UgaWYobWVzc2FnZS5hY3Rpb249PT0ncmVsb2FkUGFnZScpe2RvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTt9fWNhdGNoKGV4KXtjb25zb2xlLndhcm4oJ0ludmFsaWQgSE1SIG1lc3NhZ2U6ICcrZXZlbnQuZGF0YSsnXFxuJytleCk7fX0pOygwLF9vbkRlbWFuZEVudHJpZXNVdGlscy5zZXR1cFBpbmcpKGFzc2V0UHJlZml4LCgpPT5wYWdlKTsoMCxfZm91Yy5kaXNwbGF5Q29udGVudCkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFtcC1kZXYuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5hZGRNZXNzYWdlTGlzdGVuZXI9YWRkTWVzc2FnZUxpc3RlbmVyO2V4cG9ydHMuZ2V0RXZlbnRTb3VyY2VXcmFwcGVyPWdldEV2ZW50U291cmNlV3JhcHBlcjtjb25zdCBldmVudENhbGxiYWNrcz1bXTtmdW5jdGlvbiBFdmVudFNvdXJjZVdyYXBwZXIob3B0aW9ucyl7dmFyIHNvdXJjZTt2YXIgbGFzdEFjdGl2aXR5PW5ldyBEYXRlKCk7dmFyIGxpc3RlbmVycz1bXTtpZighb3B0aW9ucy50aW1lb3V0KXtvcHRpb25zLnRpbWVvdXQ9MjAqMTAwMDt9aW5pdCgpO3ZhciB0aW1lcj1zZXRJbnRlcnZhbChmdW5jdGlvbigpe2lmKG5ldyBEYXRlKCktbGFzdEFjdGl2aXR5Pm9wdGlvbnMudGltZW91dCl7aGFuZGxlRGlzY29ubmVjdCgpO319LG9wdGlvbnMudGltZW91dC8yKTtmdW5jdGlvbiBpbml0KCl7c291cmNlPW5ldyB3aW5kb3cuRXZlbnRTb3VyY2Uob3B0aW9ucy5wYXRoKTtzb3VyY2Uub25vcGVuPWhhbmRsZU9ubGluZTtzb3VyY2Uub25lcnJvcj1oYW5kbGVEaXNjb25uZWN0O3NvdXJjZS5vbm1lc3NhZ2U9aGFuZGxlTWVzc2FnZTt9ZnVuY3Rpb24gaGFuZGxlT25saW5lKCl7aWYob3B0aW9ucy5sb2cpY29uc29sZS5sb2coJ1tITVJdIGNvbm5lY3RlZCcpO2xhc3RBY3Rpdml0eT1uZXcgRGF0ZSgpO31mdW5jdGlvbiBoYW5kbGVNZXNzYWdlKGV2ZW50KXtsYXN0QWN0aXZpdHk9bmV3IERhdGUoKTtmb3IodmFyIGk9MDtpPGxpc3RlbmVycy5sZW5ndGg7aSsrKXtsaXN0ZW5lcnNbaV0oZXZlbnQpO31ldmVudENhbGxiYWNrcy5mb3JFYWNoKGNiPT57aWYoIWNiLnVuZmlsdGVyZWQmJmV2ZW50LmRhdGEuaW5kZXhPZignYWN0aW9uJyk9PT0tMSlyZXR1cm47Y2IoZXZlbnQpO30pO31mdW5jdGlvbiBoYW5kbGVEaXNjb25uZWN0KCl7Y2xlYXJJbnRlcnZhbCh0aW1lcik7c291cmNlLmNsb3NlKCk7c2V0VGltZW91dChpbml0LG9wdGlvbnMudGltZW91dCk7fXJldHVybntjbG9zZTooKT0+e2NsZWFySW50ZXJ2YWwodGltZXIpO3NvdXJjZS5jbG9zZSgpO30sYWRkTWVzc2FnZUxpc3RlbmVyOmZ1bmN0aW9uKGZuKXtsaXN0ZW5lcnMucHVzaChmbik7fX07fWZ1bmN0aW9uIGFkZE1lc3NhZ2VMaXN0ZW5lcihjYil7ZXZlbnRDYWxsYmFja3MucHVzaChjYik7fWZ1bmN0aW9uIGdldEV2ZW50U291cmNlV3JhcHBlcihvcHRpb25zKXtyZXR1cm4gRXZlbnRTb3VyY2VXcmFwcGVyKG9wdGlvbnMpO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV2ZW50c291cmNlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7LyogZXNsaW50LWRpc2FibGUgKi8gLy8gSW1wcm92ZWQgdmVyc2lvbiBvZiBodHRwczovL2dpdGh1Yi5jb20vWWFmZmxlL0V2ZW50U291cmNlL1xuLy8gQXZhaWxhYmxlIHVuZGVyIE1JVCBMaWNlbnNlIChNSVQpXG4vLyBPbmx5IHRyaWVzIHRvIHN1cHBvcnQgSUUxMSBhbmQgbm90aGluZyBiZWxvd1xudmFyIGRvY3VtZW50PXdpbmRvdy5kb2N1bWVudDt2YXIgUmVzcG9uc2U9d2luZG93LlJlc3BvbnNlO3ZhciBUZXh0RGVjb2Rlcj13aW5kb3cuVGV4dERlY29kZXI7dmFyIFRleHRFbmNvZGVyPXdpbmRvdy5UZXh0RW5jb2Rlcjt2YXIgQWJvcnRDb250cm9sbGVyPXdpbmRvdy5BYm9ydENvbnRyb2xsZXI7aWYoQWJvcnRDb250cm9sbGVyPT11bmRlZmluZWQpe0Fib3J0Q29udHJvbGxlcj1mdW5jdGlvbigpe3RoaXMuc2lnbmFsPW51bGw7dGhpcy5hYm9ydD1mdW5jdGlvbigpe307fTt9ZnVuY3Rpb24gVGV4dERlY29kZXJQb2x5ZmlsbCgpe3RoaXMuYml0c05lZWRlZD0wO3RoaXMuY29kZVBvaW50PTA7fVRleHREZWNvZGVyUG9seWZpbGwucHJvdG90eXBlLmRlY29kZT1mdW5jdGlvbihvY3RldHMpe2Z1bmN0aW9uIHZhbGlkKGNvZGVQb2ludCxzaGlmdCxvY3RldHNDb3VudCl7aWYob2N0ZXRzQ291bnQ9PT0xKXtyZXR1cm4gY29kZVBvaW50Pj0weDAwODA+PnNoaWZ0JiZjb2RlUG9pbnQ8PHNoaWZ0PD0weDA3ZmY7fWlmKG9jdGV0c0NvdW50PT09Mil7cmV0dXJuIGNvZGVQb2ludD49MHgwODAwPj5zaGlmdCYmY29kZVBvaW50PDxzaGlmdDw9MHhkN2ZmfHxjb2RlUG9pbnQ+PTB4ZTAwMD4+c2hpZnQmJmNvZGVQb2ludDw8c2hpZnQ8PTB4ZmZmZjt9aWYob2N0ZXRzQ291bnQ9PT0zKXtyZXR1cm4gY29kZVBvaW50Pj0weDAxMDAwMD4+c2hpZnQmJmNvZGVQb2ludDw8c2hpZnQ8PTB4MTBmZmZmO310aHJvdyBuZXcgRXJyb3IoKTt9ZnVuY3Rpb24gb2N0ZXRzQ291bnQoYml0c05lZWRlZCxjb2RlUG9pbnQpe2lmKGJpdHNOZWVkZWQ9PT02KjEpe3JldHVybiBjb2RlUG9pbnQ+PjY+MTU/Mzpjb2RlUG9pbnQ+MzE/MjoxO31pZihiaXRzTmVlZGVkPT09NioyKXtyZXR1cm4gY29kZVBvaW50PjE1PzM6Mjt9aWYoYml0c05lZWRlZD09PTYqMyl7cmV0dXJuIDM7fXRocm93IG5ldyBFcnJvcigpO312YXIgUkVQTEFDRVI9MHhmZmZkO3ZhciBzdHJpbmc9Jyc7dmFyIGJpdHNOZWVkZWQ9dGhpcy5iaXRzTmVlZGVkO3ZhciBjb2RlUG9pbnQ9dGhpcy5jb2RlUG9pbnQ7Zm9yKHZhciBpPTA7aTxvY3RldHMubGVuZ3RoO2krPTEpe3ZhciBvY3RldD1vY3RldHNbaV07aWYoYml0c05lZWRlZCE9PTApe2lmKG9jdGV0PDEyOHx8b2N0ZXQ+MTkxfHwhdmFsaWQoY29kZVBvaW50PDw2fG9jdGV0JjYzLGJpdHNOZWVkZWQtNixvY3RldHNDb3VudChiaXRzTmVlZGVkLGNvZGVQb2ludCkpKXtiaXRzTmVlZGVkPTA7Y29kZVBvaW50PVJFUExBQ0VSO3N0cmluZys9U3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQpO319aWYoYml0c05lZWRlZD09PTApe2lmKG9jdGV0Pj0wJiZvY3RldDw9MTI3KXtiaXRzTmVlZGVkPTA7Y29kZVBvaW50PW9jdGV0O31lbHNlIGlmKG9jdGV0Pj0xOTImJm9jdGV0PD0yMjMpe2JpdHNOZWVkZWQ9NioxO2NvZGVQb2ludD1vY3RldCYzMTt9ZWxzZSBpZihvY3RldD49MjI0JiZvY3RldDw9MjM5KXtiaXRzTmVlZGVkPTYqMjtjb2RlUG9pbnQ9b2N0ZXQmMTU7fWVsc2UgaWYob2N0ZXQ+PTI0MCYmb2N0ZXQ8PTI0Nyl7Yml0c05lZWRlZD02KjM7Y29kZVBvaW50PW9jdGV0Jjc7fWVsc2V7Yml0c05lZWRlZD0wO2NvZGVQb2ludD1SRVBMQUNFUjt9aWYoYml0c05lZWRlZCE9PTAmJiF2YWxpZChjb2RlUG9pbnQsYml0c05lZWRlZCxvY3RldHNDb3VudChiaXRzTmVlZGVkLGNvZGVQb2ludCkpKXtiaXRzTmVlZGVkPTA7Y29kZVBvaW50PVJFUExBQ0VSO319ZWxzZXtiaXRzTmVlZGVkLT02O2NvZGVQb2ludD1jb2RlUG9pbnQ8PDZ8b2N0ZXQmNjM7fWlmKGJpdHNOZWVkZWQ9PT0wKXtpZihjb2RlUG9pbnQ8PTB4ZmZmZil7c3RyaW5nKz1TdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGVQb2ludCk7fWVsc2V7c3RyaW5nKz1TdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZDgwMCsoY29kZVBvaW50LTB4ZmZmZi0xPj4xMCkpO3N0cmluZys9U3RyaW5nLmZyb21DaGFyQ29kZSgweGRjMDArKGNvZGVQb2ludC0weGZmZmYtMSYweDNmZikpO319fXRoaXMuYml0c05lZWRlZD1iaXRzTmVlZGVkO3RoaXMuY29kZVBvaW50PWNvZGVQb2ludDtyZXR1cm4gc3RyaW5nO307Ly8gRmlyZWZveCA8IDM4IHRocm93cyBhbiBlcnJvciB3aXRoIHN0cmVhbSBvcHRpb25cbnZhciBzdXBwb3J0c1N0cmVhbU9wdGlvbj1mdW5jdGlvbiBzdXBwb3J0c1N0cmVhbU9wdGlvbigpe3RyeXtyZXR1cm4gbmV3IFRleHREZWNvZGVyKCkuZGVjb2RlKG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZSgndGVzdCcpLHtzdHJlYW06dHJ1ZX0pPT09J3Rlc3QnO31jYXRjaChlcnJvcil7Y29uc29sZS5sb2coZXJyb3IpO31yZXR1cm4gZmFsc2U7fTsvLyBJRSwgRWRnZVxuaWYoVGV4dERlY29kZXI9PXVuZGVmaW5lZHx8VGV4dEVuY29kZXI9PXVuZGVmaW5lZHx8IXN1cHBvcnRzU3RyZWFtT3B0aW9uKCkpe1RleHREZWNvZGVyPVRleHREZWNvZGVyUG9seWZpbGw7fXZhciBrPWZ1bmN0aW9uIGsoKXt9O2Z1bmN0aW9uIFhIUldyYXBwZXIoeGhyKXt0aGlzLndpdGhDcmVkZW50aWFscz1mYWxzZTt0aGlzLnJlc3BvbnNlVHlwZT0nJzt0aGlzLnJlYWR5U3RhdGU9MDt0aGlzLnN0YXR1cz0wO3RoaXMuc3RhdHVzVGV4dD0nJzt0aGlzLnJlc3BvbnNlVGV4dD0nJzt0aGlzLm9ucHJvZ3Jlc3M9azt0aGlzLm9ucmVhZHlzdGF0ZWNoYW5nZT1rO3RoaXMuX2NvbnRlbnRUeXBlPScnO3RoaXMuX3hocj14aHI7dGhpcy5fc2VuZFRpbWVvdXQ9MDt0aGlzLl9hYm9ydD1rO31YSFJXcmFwcGVyLnByb3RvdHlwZS5vcGVuPWZ1bmN0aW9uKG1ldGhvZCx1cmwpe3RoaXMuX2Fib3J0KHRydWUpO3ZhciB0aGF0PXRoaXM7dmFyIHhocj10aGlzLl94aHI7dmFyIHN0YXRlPTE7dmFyIHRpbWVvdXQ9MDt0aGlzLl9hYm9ydD1mdW5jdGlvbihzaWxlbnQpe2lmKHRoYXQuX3NlbmRUaW1lb3V0IT09MCl7Y2xlYXJUaW1lb3V0KHRoYXQuX3NlbmRUaW1lb3V0KTt0aGF0Ll9zZW5kVGltZW91dD0wO31pZihzdGF0ZT09PTF8fHN0YXRlPT09Mnx8c3RhdGU9PT0zKXtzdGF0ZT00O3hoci5vbmxvYWQ9azt4aHIub25lcnJvcj1rO3hoci5vbmFib3J0PWs7eGhyLm9ucHJvZ3Jlc3M9azt4aHIub25yZWFkeXN0YXRlY2hhbmdlPWs7Ly8gSUUgOCAtIDk6IFhEb21haW5SZXF1ZXN0I2Fib3J0KCkgZG9lcyBub3QgZmlyZSBhbnkgZXZlbnRcbi8vIE9wZXJhIDwgMTA6IFhNTEh0dHBSZXF1ZXN0I2Fib3J0KCkgZG9lcyBub3QgZmlyZSBhbnkgZXZlbnRcbnhoci5hYm9ydCgpO2lmKHRpbWVvdXQhPT0wKXtjbGVhclRpbWVvdXQodGltZW91dCk7dGltZW91dD0wO31pZighc2lsZW50KXt0aGF0LnJlYWR5U3RhdGU9NDt0aGF0Lm9ucmVhZHlzdGF0ZWNoYW5nZSgpO319c3RhdGU9MDt9O3ZhciBvblN0YXJ0PWZ1bmN0aW9uIG9uU3RhcnQoKXtpZihzdGF0ZT09PTEpey8vIHN0YXRlID0gMjtcbnZhciBzdGF0dXM9MDt2YXIgc3RhdHVzVGV4dD0nJzt2YXIgY29udGVudFR5cGU9dW5kZWZpbmVkO2lmKCEoJ2NvbnRlbnRUeXBlJ2luIHhocikpe3RyeXtzdGF0dXM9eGhyLnN0YXR1cztzdGF0dXNUZXh0PXhoci5zdGF0dXNUZXh0O2NvbnRlbnRUeXBlPXhoci5nZXRSZXNwb25zZUhlYWRlcignQ29udGVudC1UeXBlJyk7fWNhdGNoKGVycm9yKXsvLyBJRSA8IDEwIHRocm93cyBleGNlcHRpb24gZm9yIGB4aHIuc3RhdHVzYCB3aGVuIHhoci5yZWFkeVN0YXRlID09PSAyIHx8IHhoci5yZWFkeVN0YXRlID09PSAzXG4vLyBPcGVyYSA8IDExIHRocm93cyBleGNlcHRpb24gZm9yIGB4aHIuc3RhdHVzYCB3aGVuIHhoci5yZWFkeVN0YXRlID09PSAyXG4vLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjkxMjFcbnN0YXR1cz0wO3N0YXR1c1RleHQ9Jyc7Y29udGVudFR5cGU9dW5kZWZpbmVkOy8vIEZpcmVmb3ggPCAxNCwgQ2hyb21lID8sIFNhZmFyaSA/XG4vLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Mjk2NThcbi8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD03Nzg1NFxufX1lbHNle3N0YXR1cz0yMDA7c3RhdHVzVGV4dD0nT0snO2NvbnRlbnRUeXBlPXhoci5jb250ZW50VHlwZTt9aWYoc3RhdHVzIT09MCl7c3RhdGU9Mjt0aGF0LnJlYWR5U3RhdGU9Mjt0aGF0LnN0YXR1cz1zdGF0dXM7dGhhdC5zdGF0dXNUZXh0PXN0YXR1c1RleHQ7dGhhdC5fY29udGVudFR5cGU9Y29udGVudFR5cGU7dGhhdC5vbnJlYWR5c3RhdGVjaGFuZ2UoKTt9fX07dmFyIG9uUHJvZ3Jlc3M9ZnVuY3Rpb24gb25Qcm9ncmVzcygpe29uU3RhcnQoKTtpZihzdGF0ZT09PTJ8fHN0YXRlPT09Myl7c3RhdGU9Mzt2YXIgcmVzcG9uc2VUZXh0PScnO3RyeXtyZXNwb25zZVRleHQ9eGhyLnJlc3BvbnNlVGV4dDt9Y2F0Y2goZXJyb3Ipey8vIElFIDggLSA5IHdpdGggWE1MSHR0cFJlcXVlc3Rcbn10aGF0LnJlYWR5U3RhdGU9Mzt0aGF0LnJlc3BvbnNlVGV4dD1yZXNwb25zZVRleHQ7dGhhdC5vbnByb2dyZXNzKCk7fX07dmFyIG9uRmluaXNoPWZ1bmN0aW9uIG9uRmluaXNoKCl7Ly8gRmlyZWZveCA1MiBmaXJlcyBcInJlYWR5c3RhdGVjaGFuZ2VcIiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHdpdGhvdXQgZmluYWwgXCJyZWFkeXN0YXRlY2hhbmdlXCIgKHhoci5yZWFkeVN0YXRlID09PSAzKVxuLy8gSUUgOCBmaXJlcyBcIm9ubG9hZFwiIHdpdGhvdXQgXCJvbnByb2dyZXNzXCJcbm9uUHJvZ3Jlc3MoKTtpZihzdGF0ZT09PTF8fHN0YXRlPT09Mnx8c3RhdGU9PT0zKXtzdGF0ZT00O2lmKHRpbWVvdXQhPT0wKXtjbGVhclRpbWVvdXQodGltZW91dCk7dGltZW91dD0wO310aGF0LnJlYWR5U3RhdGU9NDt0aGF0Lm9ucmVhZHlzdGF0ZWNoYW5nZSgpO319O3ZhciBvblJlYWR5U3RhdGVDaGFuZ2U9ZnVuY3Rpb24gb25SZWFkeVN0YXRlQ2hhbmdlKCl7aWYoeGhyIT11bmRlZmluZWQpey8vIE9wZXJhIDEyXG5pZih4aHIucmVhZHlTdGF0ZT09PTQpe29uRmluaXNoKCk7fWVsc2UgaWYoeGhyLnJlYWR5U3RhdGU9PT0zKXtvblByb2dyZXNzKCk7fWVsc2UgaWYoeGhyLnJlYWR5U3RhdGU9PT0yKXtvblN0YXJ0KCk7fX19O3ZhciBvblRpbWVvdXQ9ZnVuY3Rpb24gb25UaW1lb3V0KCl7dGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7b25UaW1lb3V0KCk7fSw1MDApO2lmKHhoci5yZWFkeVN0YXRlPT09Myl7b25Qcm9ncmVzcygpO319Oy8vIFhEb21haW5SZXF1ZXN0I2Fib3J0IHJlbW92ZXMgb25wcm9ncmVzcywgb25lcnJvciwgb25sb2FkXG54aHIub25sb2FkPW9uRmluaXNoO3hoci5vbmVycm9yPW9uRmluaXNoOy8vIGltcHJvcGVyIGZpeCB0byBtYXRjaCBGaXJlZm94IGJlaGF2aW9yLCBidXQgaXQgaXMgYmV0dGVyIHRoYW4ganVzdCBpZ25vcmUgYWJvcnRcbi8vIHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD03Njg1OTZcbi8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTg4MDIwMFxuLy8gaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTE1MzU3MFxuLy8gSUUgOCBmaXJlcyBcIm9ubG9hZFwiIHdpdGhvdXQgXCJvbnByb2dyZXNzXG54aHIub25hYm9ydD1vbkZpbmlzaDsvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD03MzY3MjNcbmlmKCEoJ3NlbmRBc0JpbmFyeSdpbiBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUpJiYhKCdtb3pBbm9uJ2luIFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZSkpe3hoci5vbnByb2dyZXNzPW9uUHJvZ3Jlc3M7fS8vIElFIDggLSA5IChYTUxIVFRQUmVxdWVzdClcbi8vIE9wZXJhIDwgMTJcbi8vIEZpcmVmb3ggPCAzLjVcbi8vIEZpcmVmb3ggMy41IC0gMy42IC0gPyA8IDkuMFxuLy8gb25wcm9ncmVzcyBpcyBub3QgZmlyZWQgc29tZXRpbWVzIG9yIGRlbGF5ZWRcbi8vIHNlZSBhbHNvICM2NFxueGhyLm9ucmVhZHlzdGF0ZWNoYW5nZT1vblJlYWR5U3RhdGVDaGFuZ2U7aWYoJ2NvbnRlbnRUeXBlJ2luIHhocil7dXJsKz0odXJsLmluZGV4T2YoJz8nKT09PS0xPyc/JzonJicpKydwYWRkaW5nPXRydWUnO314aHIub3BlbihtZXRob2QsdXJsLHRydWUpO2lmKCdyZWFkeVN0YXRlJ2luIHhocil7Ly8gd29ya2Fyb3VuZCBmb3IgT3BlcmEgMTIgaXNzdWUgd2l0aCBcInByb2dyZXNzXCIgZXZlbnRzXG4vLyAjOTFcbnRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe29uVGltZW91dCgpO30sMCk7fX07WEhSV3JhcHBlci5wcm90b3R5cGUuYWJvcnQ9ZnVuY3Rpb24oKXt0aGlzLl9hYm9ydChmYWxzZSk7fTtYSFJXcmFwcGVyLnByb3RvdHlwZS5nZXRSZXNwb25zZUhlYWRlcj1mdW5jdGlvbihuYW1lKXtyZXR1cm4gdGhpcy5fY29udGVudFR5cGU7fTtYSFJXcmFwcGVyLnByb3RvdHlwZS5zZXRSZXF1ZXN0SGVhZGVyPWZ1bmN0aW9uKG5hbWUsdmFsdWUpe3ZhciB4aHI9dGhpcy5feGhyO2lmKCdzZXRSZXF1ZXN0SGVhZGVyJ2luIHhocil7eGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSx2YWx1ZSk7fX07WEhSV3JhcHBlci5wcm90b3R5cGUuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3hoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMhPXVuZGVmaW5lZD90aGlzLl94aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCk6Jyc7fTtYSFJXcmFwcGVyLnByb3RvdHlwZS5zZW5kPWZ1bmN0aW9uKCl7Ly8gbG9hZGluZyBpbmRpY2F0b3IgaW4gU2FmYXJpIDwgPyAoNiksIENocm9tZSA8IDE0LCBGaXJlZm94XG5pZighKCdvbnRpbWVvdXQnaW4gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlKSYmZG9jdW1lbnQhPXVuZGVmaW5lZCYmZG9jdW1lbnQucmVhZHlTdGF0ZSE9dW5kZWZpbmVkJiZkb2N1bWVudC5yZWFkeVN0YXRlIT09J2NvbXBsZXRlJyl7dmFyIHRoYXQ9dGhpczt0aGF0Ll9zZW5kVGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhhdC5fc2VuZFRpbWVvdXQ9MDt0aGF0LnNlbmQoKTt9LDQpO3JldHVybjt9dmFyIHhocj10aGlzLl94aHI7Ly8gd2l0aENyZWRlbnRpYWxzIHNob3VsZCBiZSBzZXQgYWZ0ZXIgXCJvcGVuXCIgZm9yIFNhZmFyaSBhbmQgQ2hyb21lICg8IDE5ID8pXG54aHIud2l0aENyZWRlbnRpYWxzPXRoaXMud2l0aENyZWRlbnRpYWxzO3hoci5yZXNwb25zZVR5cGU9dGhpcy5yZXNwb25zZVR5cGU7dHJ5ey8vIHhoci5zZW5kKCk7IHRocm93cyBcIk5vdCBlbm91Z2ggYXJndW1lbnRzXCIgaW4gRmlyZWZveCAzLjBcbnhoci5zZW5kKHVuZGVmaW5lZCk7fWNhdGNoKGVycm9yMSl7Ly8gU2FmYXJpIDUuMS43LCBPcGVyYSAxMlxudGhyb3cgZXJyb3IxO319O2Z1bmN0aW9uIHRvTG93ZXJDYXNlKG5hbWUpe3JldHVybiBuYW1lLnJlcGxhY2UoL1tBLVpdL2csZnVuY3Rpb24oYyl7cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoYy5jaGFyQ29kZUF0KDApKzB4MjApO30pO31mdW5jdGlvbiBIZWFkZXJzUG9seWZpbGwoYWxsKXsvLyBHZXQgaGVhZGVyczogaW1wbGVtZW50ZWQgYWNjb3JkaW5nIHRvIG1vemlsbGEncyBleGFtcGxlIGNvZGU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9YTUxIdHRwUmVxdWVzdC9nZXRBbGxSZXNwb25zZUhlYWRlcnMjRXhhbXBsZVxudmFyIG1hcD1PYmplY3QuY3JlYXRlKG51bGwpO3ZhciBhcnJheT1hbGwuc3BsaXQoJ1xcclxcbicpO2Zvcih2YXIgaT0wO2k8YXJyYXkubGVuZ3RoO2krPTEpe3ZhciBsaW5lPWFycmF5W2ldO3ZhciBwYXJ0cz1saW5lLnNwbGl0KCc6ICcpO3ZhciBuYW1lPXBhcnRzLnNoaWZ0KCk7dmFyIHZhbHVlPXBhcnRzLmpvaW4oJzogJyk7bWFwW3RvTG93ZXJDYXNlKG5hbWUpXT12YWx1ZTt9dGhpcy5fbWFwPW1hcDt9SGVhZGVyc1BvbHlmaWxsLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24obmFtZSl7cmV0dXJuIHRoaXMuX21hcFt0b0xvd2VyQ2FzZShuYW1lKV07fTtmdW5jdGlvbiBYSFJUcmFuc3BvcnQoKXt9WEhSVHJhbnNwb3J0LnByb3RvdHlwZS5vcGVuPWZ1bmN0aW9uKHhocixvblN0YXJ0Q2FsbGJhY2ssb25Qcm9ncmVzc0NhbGxiYWNrLG9uRmluaXNoQ2FsbGJhY2ssdXJsLHdpdGhDcmVkZW50aWFscyxoZWFkZXJzKXt4aHIub3BlbignR0VUJyx1cmwpO3ZhciBvZmZzZXQ9MDt4aHIub25wcm9ncmVzcz1mdW5jdGlvbigpe3ZhciByZXNwb25zZVRleHQ9eGhyLnJlc3BvbnNlVGV4dDt2YXIgY2h1bms9cmVzcG9uc2VUZXh0LnNsaWNlKG9mZnNldCk7b2Zmc2V0Kz1jaHVuay5sZW5ndGg7b25Qcm9ncmVzc0NhbGxiYWNrKGNodW5rKTt9O3hoci5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtpZih4aHIucmVhZHlTdGF0ZT09PTIpe3ZhciBzdGF0dXM9eGhyLnN0YXR1czt2YXIgc3RhdHVzVGV4dD14aHIuc3RhdHVzVGV4dDt2YXIgY29udGVudFR5cGU9eGhyLmdldFJlc3BvbnNlSGVhZGVyKCdDb250ZW50LVR5cGUnKTt2YXIgaGVhZGVycz14aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCk7b25TdGFydENhbGxiYWNrKHN0YXR1cyxzdGF0dXNUZXh0LGNvbnRlbnRUeXBlLG5ldyBIZWFkZXJzUG9seWZpbGwoaGVhZGVycyksZnVuY3Rpb24oKXt4aHIuYWJvcnQoKTt9KTt9ZWxzZSBpZih4aHIucmVhZHlTdGF0ZT09PTQpe29uRmluaXNoQ2FsbGJhY2soKTt9fTt4aHIud2l0aENyZWRlbnRpYWxzPXdpdGhDcmVkZW50aWFsczt4aHIucmVzcG9uc2VUeXBlPSd0ZXh0Jztmb3IodmFyIG5hbWUgaW4gaGVhZGVycyl7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhlYWRlcnMsbmFtZSkpe3hoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsaGVhZGVyc1tuYW1lXSk7fX14aHIuc2VuZCgpO307ZnVuY3Rpb24gSGVhZGVyc1dyYXBwZXIoaGVhZGVycyl7dGhpcy5faGVhZGVycz1oZWFkZXJzO31IZWFkZXJzV3JhcHBlci5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKG5hbWUpe3JldHVybiB0aGlzLl9oZWFkZXJzLmdldChuYW1lKTt9O2Z1bmN0aW9uIEZldGNoVHJhbnNwb3J0KCl7fUZldGNoVHJhbnNwb3J0LnByb3RvdHlwZS5vcGVuPWZ1bmN0aW9uKHhocixvblN0YXJ0Q2FsbGJhY2ssb25Qcm9ncmVzc0NhbGxiYWNrLG9uRmluaXNoQ2FsbGJhY2ssdXJsLHdpdGhDcmVkZW50aWFscyxoZWFkZXJzKXt2YXIgY29udHJvbGxlcj1uZXcgQWJvcnRDb250cm9sbGVyKCk7dmFyIHNpZ25hbD1jb250cm9sbGVyLnNpZ25hbDsvLyBzZWUgIzEyMFxudmFyIHRleHREZWNvZGVyPW5ldyBUZXh0RGVjb2RlcigpO2ZldGNoKHVybCx7aGVhZGVyczpoZWFkZXJzLGNyZWRlbnRpYWxzOndpdGhDcmVkZW50aWFscz8naW5jbHVkZSc6J3NhbWUtb3JpZ2luJyxzaWduYWw6c2lnbmFsLGNhY2hlOiduby1zdG9yZSd9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXt2YXIgcmVhZGVyPXJlc3BvbnNlLmJvZHkuZ2V0UmVhZGVyKCk7b25TdGFydENhbGxiYWNrKHJlc3BvbnNlLnN0YXR1cyxyZXNwb25zZS5zdGF0dXNUZXh0LHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKSxuZXcgSGVhZGVyc1dyYXBwZXIocmVzcG9uc2UuaGVhZGVycyksZnVuY3Rpb24oKXtjb250cm9sbGVyLmFib3J0KCk7cmVhZGVyLmNhbmNlbCgpO30pO3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLHJlamVjdCl7dmFyIHJlYWROZXh0Q2h1bms9ZnVuY3Rpb24gcmVhZE5leHRDaHVuaygpe3JlYWRlci5yZWFkKCkudGhlbihmdW5jdGlvbihyZXN1bHQpe2lmKHJlc3VsdC5kb25lKXsvLyBOb3RlOiBieXRlcyBpbiB0ZXh0RGVjb2RlciBhcmUgaWdub3JlZFxucmVzb2x2ZSh1bmRlZmluZWQpO31lbHNle3ZhciBjaHVuaz10ZXh0RGVjb2Rlci5kZWNvZGUocmVzdWx0LnZhbHVlLHtzdHJlYW06dHJ1ZX0pO29uUHJvZ3Jlc3NDYWxsYmFjayhjaHVuayk7cmVhZE5leHRDaHVuaygpO319KVsnY2F0Y2gnXShmdW5jdGlvbihlcnJvcil7cmVqZWN0KGVycm9yKTt9KTt9O3JlYWROZXh0Q2h1bmsoKTt9KTt9KS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7b25GaW5pc2hDYWxsYmFjaygpO3JldHVybiByZXN1bHQ7fSxmdW5jdGlvbihlcnJvcil7b25GaW5pc2hDYWxsYmFjaygpO3JldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7fSk7fTtmdW5jdGlvbiBFdmVudFRhcmdldCgpe3RoaXMuX2xpc3RlbmVycz1PYmplY3QuY3JlYXRlKG51bGwpO31mdW5jdGlvbiB0aHJvd0Vycm9yKGUpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXt0aHJvdyBlO30sMCk7fUV2ZW50VGFyZ2V0LnByb3RvdHlwZS5kaXNwYXRjaEV2ZW50PWZ1bmN0aW9uKGV2ZW50KXtldmVudC50YXJnZXQ9dGhpczt2YXIgdHlwZUxpc3RlbmVycz10aGlzLl9saXN0ZW5lcnNbZXZlbnQudHlwZV07aWYodHlwZUxpc3RlbmVycyE9dW5kZWZpbmVkKXt2YXIgbGVuZ3RoPXR5cGVMaXN0ZW5lcnMubGVuZ3RoO2Zvcih2YXIgaT0wO2k8bGVuZ3RoO2krPTEpe3ZhciBsaXN0ZW5lcj10eXBlTGlzdGVuZXJzW2ldO3RyeXtpZih0eXBlb2YgbGlzdGVuZXIuaGFuZGxlRXZlbnQ9PT0nZnVuY3Rpb24nKXtsaXN0ZW5lci5oYW5kbGVFdmVudChldmVudCk7fWVsc2V7bGlzdGVuZXIuY2FsbCh0aGlzLGV2ZW50KTt9fWNhdGNoKGUpe3Rocm93RXJyb3IoZSk7fX19fTtFdmVudFRhcmdldC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcj1mdW5jdGlvbih0eXBlLGxpc3RlbmVyKXt0eXBlPVN0cmluZyh0eXBlKTt2YXIgbGlzdGVuZXJzPXRoaXMuX2xpc3RlbmVyczt2YXIgdHlwZUxpc3RlbmVycz1saXN0ZW5lcnNbdHlwZV07aWYodHlwZUxpc3RlbmVycz09dW5kZWZpbmVkKXt0eXBlTGlzdGVuZXJzPVtdO2xpc3RlbmVyc1t0eXBlXT10eXBlTGlzdGVuZXJzO312YXIgZm91bmQ9ZmFsc2U7Zm9yKHZhciBpPTA7aTx0eXBlTGlzdGVuZXJzLmxlbmd0aDtpKz0xKXtpZih0eXBlTGlzdGVuZXJzW2ldPT09bGlzdGVuZXIpe2ZvdW5kPXRydWU7fX1pZighZm91bmQpe3R5cGVMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7fX07RXZlbnRUYXJnZXQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24odHlwZSxsaXN0ZW5lcil7dHlwZT1TdHJpbmcodHlwZSk7dmFyIGxpc3RlbmVycz10aGlzLl9saXN0ZW5lcnM7dmFyIHR5cGVMaXN0ZW5lcnM9bGlzdGVuZXJzW3R5cGVdO2lmKHR5cGVMaXN0ZW5lcnMhPXVuZGVmaW5lZCl7dmFyIGZpbHRlcmVkPVtdO2Zvcih2YXIgaT0wO2k8dHlwZUxpc3RlbmVycy5sZW5ndGg7aSs9MSl7aWYodHlwZUxpc3RlbmVyc1tpXSE9PWxpc3RlbmVyKXtmaWx0ZXJlZC5wdXNoKHR5cGVMaXN0ZW5lcnNbaV0pO319aWYoZmlsdGVyZWQubGVuZ3RoPT09MCl7ZGVsZXRlIGxpc3RlbmVyc1t0eXBlXTt9ZWxzZXtsaXN0ZW5lcnNbdHlwZV09ZmlsdGVyZWQ7fX19O2Z1bmN0aW9uIEV2ZW50KHR5cGUpe3RoaXMudHlwZT10eXBlO3RoaXMudGFyZ2V0PXVuZGVmaW5lZDt9ZnVuY3Rpb24gTWVzc2FnZUV2ZW50KHR5cGUsb3B0aW9ucyl7RXZlbnQuY2FsbCh0aGlzLHR5cGUpO3RoaXMuZGF0YT1vcHRpb25zLmRhdGE7dGhpcy5sYXN0RXZlbnRJZD1vcHRpb25zLmxhc3RFdmVudElkO31NZXNzYWdlRXZlbnQucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoRXZlbnQucHJvdG90eXBlKTtmdW5jdGlvbiBDb25uZWN0aW9uRXZlbnQodHlwZSxvcHRpb25zKXtFdmVudC5jYWxsKHRoaXMsdHlwZSk7dGhpcy5zdGF0dXM9b3B0aW9ucy5zdGF0dXM7dGhpcy5zdGF0dXNUZXh0PW9wdGlvbnMuc3RhdHVzVGV4dDt0aGlzLmhlYWRlcnM9b3B0aW9ucy5oZWFkZXJzO31Db25uZWN0aW9uRXZlbnQucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoRXZlbnQucHJvdG90eXBlKTt2YXIgV0FJVElORz0tMTt2YXIgQ09OTkVDVElORz0wO3ZhciBPUEVOPTE7dmFyIENMT1NFRD0yO3ZhciBBRlRFUl9DUj0tMTt2YXIgRklFTERfU1RBUlQ9MDt2YXIgRklFTEQ9MTt2YXIgVkFMVUVfU1RBUlQ9Mjt2YXIgVkFMVUU9Mzt2YXIgY29udGVudFR5cGVSZWdFeHA9L150ZXh0XFwvZXZlbnRcXC1zdHJlYW07PyhcXHMqY2hhcnNldFxcPXV0ZlxcLTgpPyQvaTt2YXIgTUlOSU1VTV9EVVJBVElPTj0xMDAwO3ZhciBNQVhJTVVNX0RVUkFUSU9OPTE4MDAwMDAwO3ZhciBwYXJzZUR1cmF0aW9uPWZ1bmN0aW9uIHBhcnNlRHVyYXRpb24odmFsdWUsZGVmKXt2YXIgbj1wYXJzZUludCh2YWx1ZSwxMCk7aWYobiE9PW4pe249ZGVmO31yZXR1cm4gY2xhbXBEdXJhdGlvbihuKTt9O3ZhciBjbGFtcER1cmF0aW9uPWZ1bmN0aW9uIGNsYW1wRHVyYXRpb24obil7cmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG4sTUlOSU1VTV9EVVJBVElPTiksTUFYSU1VTV9EVVJBVElPTik7fTt2YXIgZmlyZT1mdW5jdGlvbiBmaXJlKHRoYXQsZixldmVudCl7dHJ5e2lmKHR5cGVvZiBmPT09J2Z1bmN0aW9uJyl7Zi5jYWxsKHRoYXQsZXZlbnQpO319Y2F0Y2goZSl7dGhyb3dFcnJvcihlKTt9fTtmdW5jdGlvbiBFdmVudFNvdXJjZVBvbHlmaWxsKHVybCxvcHRpb25zKXtFdmVudFRhcmdldC5jYWxsKHRoaXMpO3RoaXMub25vcGVuPXVuZGVmaW5lZDt0aGlzLm9ubWVzc2FnZT11bmRlZmluZWQ7dGhpcy5vbmVycm9yPXVuZGVmaW5lZDt0aGlzLnVybD11bmRlZmluZWQ7dGhpcy5yZWFkeVN0YXRlPXVuZGVmaW5lZDt0aGlzLndpdGhDcmVkZW50aWFscz11bmRlZmluZWQ7dGhpcy5fY2xvc2U9dW5kZWZpbmVkO3N0YXJ0KHRoaXMsdXJsLG9wdGlvbnMpO312YXIgaXNGZXRjaFN1cHBvcnRlZD1mZXRjaCE9dW5kZWZpbmVkJiZSZXNwb25zZSE9dW5kZWZpbmVkJiYnYm9keSdpbiBSZXNwb25zZS5wcm90b3R5cGU7ZnVuY3Rpb24gc3RhcnQoZXMsdXJsLG9wdGlvbnMpe3VybD1TdHJpbmcodXJsKTt2YXIgd2l0aENyZWRlbnRpYWxzPW9wdGlvbnMhPXVuZGVmaW5lZCYmQm9vbGVhbihvcHRpb25zLndpdGhDcmVkZW50aWFscyk7dmFyIGluaXRpYWxSZXRyeT1jbGFtcER1cmF0aW9uKDEwMDApO3ZhciBoZWFydGJlYXRUaW1lb3V0PW9wdGlvbnMhPXVuZGVmaW5lZCYmb3B0aW9ucy5oZWFydGJlYXRUaW1lb3V0IT11bmRlZmluZWQ/cGFyc2VEdXJhdGlvbihvcHRpb25zLmhlYXJ0YmVhdFRpbWVvdXQsNDUwMDApOmNsYW1wRHVyYXRpb24oNDUwMDApO3ZhciBsYXN0RXZlbnRJZD0nJzt2YXIgcmV0cnk9aW5pdGlhbFJldHJ5O3ZhciB3YXNBY3Rpdml0eT1mYWxzZTt2YXIgaGVhZGVycz1vcHRpb25zIT11bmRlZmluZWQmJm9wdGlvbnMuaGVhZGVycyE9dW5kZWZpbmVkP0pTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5oZWFkZXJzKSk6dW5kZWZpbmVkO3ZhciBDdXJyZW50VHJhbnNwb3J0PW9wdGlvbnMhPXVuZGVmaW5lZCYmb3B0aW9ucy5UcmFuc3BvcnQhPXVuZGVmaW5lZD9vcHRpb25zLlRyYW5zcG9ydDpYTUxIdHRwUmVxdWVzdDt2YXIgeGhyPWlzRmV0Y2hTdXBwb3J0ZWQmJiEob3B0aW9ucyE9dW5kZWZpbmVkJiZvcHRpb25zLlRyYW5zcG9ydCE9dW5kZWZpbmVkKT91bmRlZmluZWQ6bmV3IFhIUldyYXBwZXIobmV3IEN1cnJlbnRUcmFuc3BvcnQoKSk7dmFyIHRyYW5zcG9ydD14aHI9PXVuZGVmaW5lZD9uZXcgRmV0Y2hUcmFuc3BvcnQoKTpuZXcgWEhSVHJhbnNwb3J0KCk7dmFyIGNhbmNlbEZ1bmN0aW9uPXVuZGVmaW5lZDt2YXIgdGltZW91dD0wO3ZhciBjdXJyZW50U3RhdGU9V0FJVElORzt2YXIgZGF0YUJ1ZmZlcj0nJzt2YXIgbGFzdEV2ZW50SWRCdWZmZXI9Jyc7dmFyIGV2ZW50VHlwZUJ1ZmZlcj0nJzt2YXIgdGV4dEJ1ZmZlcj0nJzt2YXIgc3RhdGU9RklFTERfU1RBUlQ7dmFyIGZpZWxkU3RhcnQ9MDt2YXIgdmFsdWVTdGFydD0wO3ZhciBvblN0YXJ0PWZ1bmN0aW9uIG9uU3RhcnQoc3RhdHVzLHN0YXR1c1RleHQsY29udGVudFR5cGUsaGVhZGVycyxjYW5jZWwpe2lmKGN1cnJlbnRTdGF0ZT09PUNPTk5FQ1RJTkcpe2NhbmNlbEZ1bmN0aW9uPWNhbmNlbDtpZihzdGF0dXM9PT0yMDAmJmNvbnRlbnRUeXBlIT11bmRlZmluZWQmJmNvbnRlbnRUeXBlUmVnRXhwLnRlc3QoY29udGVudFR5cGUpKXtjdXJyZW50U3RhdGU9T1BFTjt3YXNBY3Rpdml0eT10cnVlO3JldHJ5PWluaXRpYWxSZXRyeTtlcy5yZWFkeVN0YXRlPU9QRU47dmFyIGV2ZW50PW5ldyBDb25uZWN0aW9uRXZlbnQoJ29wZW4nLHtzdGF0dXM6c3RhdHVzLHN0YXR1c1RleHQ6c3RhdHVzVGV4dCxoZWFkZXJzOmhlYWRlcnN9KTtlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtmaXJlKGVzLGVzLm9ub3BlbixldmVudCk7fWVsc2V7dmFyIG1lc3NhZ2U9Jyc7aWYoc3RhdHVzIT09MjAwKXtpZihzdGF0dXNUZXh0KXtzdGF0dXNUZXh0PXN0YXR1c1RleHQucmVwbGFjZSgvXFxzKy9nLCcgJyk7fW1lc3NhZ2U9XCJFdmVudFNvdXJjZSdzIHJlc3BvbnNlIGhhcyBhIHN0YXR1cyBcIitzdGF0dXMrJyAnK3N0YXR1c1RleHQrJyB0aGF0IGlzIG5vdCAyMDAuIEFib3J0aW5nIHRoZSBjb25uZWN0aW9uLic7fWVsc2V7bWVzc2FnZT1cIkV2ZW50U291cmNlJ3MgcmVzcG9uc2UgaGFzIGEgQ29udGVudC1UeXBlIHNwZWNpZnlpbmcgYW4gdW5zdXBwb3J0ZWQgdHlwZTogXCIrKGNvbnRlbnRUeXBlPT11bmRlZmluZWQ/Jy0nOmNvbnRlbnRUeXBlLnJlcGxhY2UoL1xccysvZywnICcpKSsnLiBBYm9ydGluZyB0aGUgY29ubmVjdGlvbi4nO310aHJvd0Vycm9yKG5ldyBFcnJvcihtZXNzYWdlKSk7Y2xvc2UoKTt2YXIgZXZlbnQ9bmV3IENvbm5lY3Rpb25FdmVudCgnZXJyb3InLHtzdGF0dXM6c3RhdHVzLHN0YXR1c1RleHQ6c3RhdHVzVGV4dCxoZWFkZXJzOmhlYWRlcnN9KTtlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtmaXJlKGVzLGVzLm9uZXJyb3IsZXZlbnQpO319fTt2YXIgb25Qcm9ncmVzcz1mdW5jdGlvbiBvblByb2dyZXNzKHRleHRDaHVuayl7aWYoY3VycmVudFN0YXRlPT09T1BFTil7dmFyIG49LTE7Zm9yKHZhciBpPTA7aTx0ZXh0Q2h1bmsubGVuZ3RoO2krPTEpe3ZhciBjPXRleHRDaHVuay5jaGFyQ29kZUF0KGkpO2lmKGM9PT0nXFxuJy5jaGFyQ29kZUF0KDApfHxjPT09J1xccicuY2hhckNvZGVBdCgwKSl7bj1pO319dmFyIGNodW5rPShuIT09LTE/dGV4dEJ1ZmZlcjonJykrdGV4dENodW5rLnNsaWNlKDAsbisxKTt0ZXh0QnVmZmVyPShuPT09LTE/dGV4dEJ1ZmZlcjonJykrdGV4dENodW5rLnNsaWNlKG4rMSk7aWYoY2h1bmshPT0nJyl7d2FzQWN0aXZpdHk9dHJ1ZTt9Zm9yKHZhciBwb3NpdGlvbj0wO3Bvc2l0aW9uPGNodW5rLmxlbmd0aDtwb3NpdGlvbis9MSl7dmFyIGM9Y2h1bmsuY2hhckNvZGVBdChwb3NpdGlvbik7aWYoc3RhdGU9PT1BRlRFUl9DUiYmYz09PSdcXG4nLmNoYXJDb2RlQXQoMCkpe3N0YXRlPUZJRUxEX1NUQVJUO31lbHNle2lmKHN0YXRlPT09QUZURVJfQ1Ipe3N0YXRlPUZJRUxEX1NUQVJUO31pZihjPT09J1xccicuY2hhckNvZGVBdCgwKXx8Yz09PSdcXG4nLmNoYXJDb2RlQXQoMCkpe2lmKHN0YXRlIT09RklFTERfU1RBUlQpe2lmKHN0YXRlPT09RklFTEQpe3ZhbHVlU3RhcnQ9cG9zaXRpb24rMTt9dmFyIGZpZWxkPWNodW5rLnNsaWNlKGZpZWxkU3RhcnQsdmFsdWVTdGFydC0xKTt2YXIgdmFsdWU9Y2h1bmsuc2xpY2UodmFsdWVTdGFydCsodmFsdWVTdGFydDxwb3NpdGlvbiYmY2h1bmsuY2hhckNvZGVBdCh2YWx1ZVN0YXJ0KT09PScgJy5jaGFyQ29kZUF0KDApPzE6MCkscG9zaXRpb24pO2lmKGZpZWxkPT09J2RhdGEnKXtkYXRhQnVmZmVyKz0nXFxuJztkYXRhQnVmZmVyKz12YWx1ZTt9ZWxzZSBpZihmaWVsZD09PSdpZCcpe2xhc3RFdmVudElkQnVmZmVyPXZhbHVlO31lbHNlIGlmKGZpZWxkPT09J2V2ZW50Jyl7ZXZlbnRUeXBlQnVmZmVyPXZhbHVlO31lbHNlIGlmKGZpZWxkPT09J3JldHJ5Jyl7aW5pdGlhbFJldHJ5PXBhcnNlRHVyYXRpb24odmFsdWUsaW5pdGlhbFJldHJ5KTtyZXRyeT1pbml0aWFsUmV0cnk7fWVsc2UgaWYoZmllbGQ9PT0naGVhcnRiZWF0VGltZW91dCcpe2hlYXJ0YmVhdFRpbWVvdXQ9cGFyc2VEdXJhdGlvbih2YWx1ZSxoZWFydGJlYXRUaW1lb3V0KTtpZih0aW1lb3V0IT09MCl7Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO3RpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe29uVGltZW91dCgpO30saGVhcnRiZWF0VGltZW91dCk7fX19aWYoc3RhdGU9PT1GSUVMRF9TVEFSVCl7aWYoZGF0YUJ1ZmZlciE9PScnKXtsYXN0RXZlbnRJZD1sYXN0RXZlbnRJZEJ1ZmZlcjtpZihldmVudFR5cGVCdWZmZXI9PT0nJyl7ZXZlbnRUeXBlQnVmZmVyPSdtZXNzYWdlJzt9dmFyIGV2ZW50PW5ldyBNZXNzYWdlRXZlbnQoZXZlbnRUeXBlQnVmZmVyLHtkYXRhOmRhdGFCdWZmZXIuc2xpY2UoMSksbGFzdEV2ZW50SWQ6bGFzdEV2ZW50SWRCdWZmZXJ9KTtlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtpZihldmVudFR5cGVCdWZmZXI9PT0nbWVzc2FnZScpe2ZpcmUoZXMsZXMub25tZXNzYWdlLGV2ZW50KTt9aWYoY3VycmVudFN0YXRlPT09Q0xPU0VEKXtyZXR1cm47fX1kYXRhQnVmZmVyPScnO2V2ZW50VHlwZUJ1ZmZlcj0nJzt9c3RhdGU9Yz09PSdcXHInLmNoYXJDb2RlQXQoMCk/QUZURVJfQ1I6RklFTERfU1RBUlQ7fWVsc2V7aWYoc3RhdGU9PT1GSUVMRF9TVEFSVCl7ZmllbGRTdGFydD1wb3NpdGlvbjtzdGF0ZT1GSUVMRDt9aWYoc3RhdGU9PT1GSUVMRCl7aWYoYz09PSc6Jy5jaGFyQ29kZUF0KDApKXt2YWx1ZVN0YXJ0PXBvc2l0aW9uKzE7c3RhdGU9VkFMVUVfU1RBUlQ7fX1lbHNlIGlmKHN0YXRlPT09VkFMVUVfU1RBUlQpe3N0YXRlPVZBTFVFO319fX19fTt2YXIgb25GaW5pc2g9ZnVuY3Rpb24gb25GaW5pc2goKXtpZihjdXJyZW50U3RhdGU9PT1PUEVOfHxjdXJyZW50U3RhdGU9PT1DT05ORUNUSU5HKXtjdXJyZW50U3RhdGU9V0FJVElORztpZih0aW1lb3V0IT09MCl7Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO3RpbWVvdXQ9MDt9dGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7b25UaW1lb3V0KCk7fSxyZXRyeSk7cmV0cnk9Y2xhbXBEdXJhdGlvbihNYXRoLm1pbihpbml0aWFsUmV0cnkqMTYscmV0cnkqMikpO2VzLnJlYWR5U3RhdGU9Q09OTkVDVElORzt2YXIgZXZlbnQ9bmV3IEV2ZW50KCdlcnJvcicpO2VzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO2ZpcmUoZXMsZXMub25lcnJvcixldmVudCk7fX07dmFyIGNsb3NlPWZ1bmN0aW9uIGNsb3NlKCl7Y3VycmVudFN0YXRlPUNMT1NFRDtpZihjYW5jZWxGdW5jdGlvbiE9dW5kZWZpbmVkKXtjYW5jZWxGdW5jdGlvbigpO2NhbmNlbEZ1bmN0aW9uPXVuZGVmaW5lZDt9aWYodGltZW91dCE9PTApe2NsZWFyVGltZW91dCh0aW1lb3V0KTt0aW1lb3V0PTA7fWVzLnJlYWR5U3RhdGU9Q0xPU0VEO307dmFyIG9uVGltZW91dD1mdW5jdGlvbiBvblRpbWVvdXQoKXt0aW1lb3V0PTA7aWYoY3VycmVudFN0YXRlIT09V0FJVElORyl7aWYoIXdhc0FjdGl2aXR5JiZjYW5jZWxGdW5jdGlvbiE9dW5kZWZpbmVkKXt0aHJvd0Vycm9yKG5ldyBFcnJvcignTm8gYWN0aXZpdHkgd2l0aGluICcraGVhcnRiZWF0VGltZW91dCsnIG1pbGxpc2Vjb25kcy4gUmVjb25uZWN0aW5nLicpKTtjYW5jZWxGdW5jdGlvbigpO2NhbmNlbEZ1bmN0aW9uPXVuZGVmaW5lZDt9ZWxzZXt3YXNBY3Rpdml0eT1mYWxzZTt0aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtvblRpbWVvdXQoKTt9LGhlYXJ0YmVhdFRpbWVvdXQpO31yZXR1cm47fXdhc0FjdGl2aXR5PWZhbHNlO3RpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe29uVGltZW91dCgpO30saGVhcnRiZWF0VGltZW91dCk7Y3VycmVudFN0YXRlPUNPTk5FQ1RJTkc7ZGF0YUJ1ZmZlcj0nJztldmVudFR5cGVCdWZmZXI9Jyc7bGFzdEV2ZW50SWRCdWZmZXI9bGFzdEV2ZW50SWQ7dGV4dEJ1ZmZlcj0nJztmaWVsZFN0YXJ0PTA7dmFsdWVTdGFydD0wO3N0YXRlPUZJRUxEX1NUQVJUOy8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTQyODkxNlxuLy8gUmVxdWVzdCBoZWFkZXIgZmllbGQgTGFzdC1FdmVudC1JRCBpcyBub3QgYWxsb3dlZCBieSBBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzLlxudmFyIHJlcXVlc3RVUkw9dXJsO2lmKHVybC5zbGljZSgwLDUpIT09J2RhdGE6JyYmdXJsLnNsaWNlKDAsNSkhPT0nYmxvYjonKXtpZihsYXN0RXZlbnRJZCE9PScnKXtyZXF1ZXN0VVJMKz0odXJsLmluZGV4T2YoJz8nKT09PS0xPyc/JzonJicpKydsYXN0RXZlbnRJZD0nK2VuY29kZVVSSUNvbXBvbmVudChsYXN0RXZlbnRJZCk7fX12YXIgcmVxdWVzdEhlYWRlcnM9e307cmVxdWVzdEhlYWRlcnNbJ0FjY2VwdCddPSd0ZXh0L2V2ZW50LXN0cmVhbSc7aWYoaGVhZGVycyE9dW5kZWZpbmVkKXtmb3IodmFyIG5hbWUgaW4gaGVhZGVycyl7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhlYWRlcnMsbmFtZSkpe3JlcXVlc3RIZWFkZXJzW25hbWVdPWhlYWRlcnNbbmFtZV07fX19dHJ5e3RyYW5zcG9ydC5vcGVuKHhocixvblN0YXJ0LG9uUHJvZ3Jlc3Msb25GaW5pc2gscmVxdWVzdFVSTCx3aXRoQ3JlZGVudGlhbHMscmVxdWVzdEhlYWRlcnMpO31jYXRjaChlcnJvcil7Y2xvc2UoKTt0aHJvdyBlcnJvcjt9fTtlcy51cmw9dXJsO2VzLnJlYWR5U3RhdGU9Q09OTkVDVElORztlcy53aXRoQ3JlZGVudGlhbHM9d2l0aENyZWRlbnRpYWxzO2VzLl9jbG9zZT1jbG9zZTtvblRpbWVvdXQoKTt9RXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShFdmVudFRhcmdldC5wcm90b3R5cGUpO0V2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLkNPTk5FQ1RJTkc9Q09OTkVDVElORztFdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5PUEVOPU9QRU47RXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUuQ0xPU0VEPUNMT1NFRDtFdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5jbG9zZT1mdW5jdGlvbigpe3RoaXMuX2Nsb3NlKCk7fTtFdmVudFNvdXJjZVBvbHlmaWxsLkNPTk5FQ1RJTkc9Q09OTkVDVElORztFdmVudFNvdXJjZVBvbHlmaWxsLk9QRU49T1BFTjtFdmVudFNvdXJjZVBvbHlmaWxsLkNMT1NFRD1DTE9TRUQ7RXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUud2l0aENyZWRlbnRpYWxzPXVuZGVmaW5lZDt2YXIgX2RlZmF1bHQ9RXZlbnRTb3VyY2VQb2x5ZmlsbDtleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ldmVudC1zb3VyY2UtcG9seWZpbGwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kaXNwbGF5Q29udGVudD1kaXNwbGF5Q29udGVudDsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gcmVtb3ZlIE5leHQuanMnIG5vLUZPVUMgc3R5bGVzIHdvcmthcm91bmQgZm9yIHVzaW5nXG4vLyBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudC4gSXQgbXVzdCBiZSBjYWxsZWQgYmVmb3JlIGh5ZHJhdGlvbiwgb3IgZWxzZVxuLy8gcmVuZGVyaW5nIHdvbid0IGhhdmUgdGhlIGNvcnJlY3QgY29tcHV0ZWQgdmFsdWVzIGluIGVmZmVjdHMuXG5mdW5jdGlvbiBkaXNwbGF5Q29udGVudChjYWxsYmFjayl7Oyh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxzZXRUaW1lb3V0KShmdW5jdGlvbigpe2Zvcih2YXIgeD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1uZXh0LWhpZGUtZm91Y10nKSxpPXgubGVuZ3RoO2ktLTspe3hbaV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh4W2ldKTt9aWYoY2FsbGJhY2spe2NhbGxiYWNrKCk7fX0pO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdWMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5jbG9zZVBpbmc9Y2xvc2VQaW5nO2V4cG9ydHMuc2V0dXBQaW5nPXNldHVwUGluZztleHBvcnRzLmN1cnJlbnRQYWdlPXZvaWQgMDt2YXIgX2V2ZW50c291cmNlPXJlcXVpcmUoXCIuL2Vycm9yLW92ZXJsYXkvZXZlbnRzb3VyY2VcIik7LyogZ2xvYmFsIGxvY2F0aW9uICovbGV0IGV2dFNvdXJjZTtsZXQgY3VycmVudFBhZ2U7ZXhwb3J0cy5jdXJyZW50UGFnZT1jdXJyZW50UGFnZTtmdW5jdGlvbiBjbG9zZVBpbmcoKXtpZihldnRTb3VyY2UpZXZ0U291cmNlLmNsb3NlKCk7ZXZ0U291cmNlPW51bGw7fWZ1bmN0aW9uIHNldHVwUGluZyhhc3NldFByZWZpeCxwYXRobmFtZUZuLHJldHJ5KXtjb25zdCBwYXRobmFtZT1wYXRobmFtZUZuKCk7Ly8gTWFrZSBzdXJlIHRvIG9ubHkgY3JlYXRlIG5ldyBFdmVudFNvdXJjZSByZXF1ZXN0IGlmIHBhZ2UgaGFzIGNoYW5nZWRcbmlmKHBhdGhuYW1lPT09Y3VycmVudFBhZ2UmJiFyZXRyeSlyZXR1cm47ZXhwb3J0cy5jdXJyZW50UGFnZT1jdXJyZW50UGFnZT1wYXRobmFtZTsvLyBjbG9zZSBjdXJyZW50IEV2ZW50U291cmNlIGNvbm5lY3Rpb25cbmNsb3NlUGluZygpO2V2dFNvdXJjZT0oMCxfZXZlbnRzb3VyY2UuZ2V0RXZlbnRTb3VyY2VXcmFwcGVyKSh7cGF0aDpgJHthc3NldFByZWZpeH0vX25leHQvd2VicGFjay1obXI/cGFnZT0ke2N1cnJlbnRQYWdlfWAsdGltZW91dDo1MDAwfSk7ZXZ0U291cmNlLmFkZE1lc3NhZ2VMaXN0ZW5lcihldmVudD0+e2lmKGV2ZW50LmRhdGEuaW5kZXhPZigneycpPT09LTEpcmV0dXJuO3RyeXtjb25zdCBwYXlsb2FkPUpTT04ucGFyc2UoZXZlbnQuZGF0YSk7aWYocGF5bG9hZC5pbnZhbGlkKXsvLyBQYXlsb2FkIGNhbiBiZSBpbnZhbGlkIGV2ZW4gaWYgdGhlIHBhZ2UgZG9lcyBub3QgZXhpc3QuXG4vLyBTbywgd2UgbmVlZCB0byBtYWtlIHN1cmUgaXQgZXhpc3RzIGJlZm9yZSByZWxvYWRpbmcuXG5mZXRjaChsb2NhdGlvbi5ocmVmLHtjcmVkZW50aWFsczonc2FtZS1vcmlnaW4nfSkudGhlbihwYWdlUmVzPT57aWYocGFnZVJlcy5zdGF0dXM9PT0yMDApe2xvY2F0aW9uLnJlbG9hZCgpO319KTt9fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcignb24tZGVtYW5kLWVudHJpZXMgZmFpbGVkIHRvIHBhcnNlIHJlc3BvbnNlJyxlcnIpO319KTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vbi1kZW1hbmQtZW50cmllcy11dGlscy5qcy5tYXAiLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=