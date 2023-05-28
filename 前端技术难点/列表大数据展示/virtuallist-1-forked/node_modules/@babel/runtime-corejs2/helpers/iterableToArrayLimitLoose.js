var _Symbol = require("@babel/runtime-corejs2/core-js/symbol");
var _Symbol$iterator = require("@babel/runtime-corejs2/core-js/symbol/iterator");
function _iterableToArrayLimitLoose(arr, i) {
  var _i = arr && ("undefined" != typeof _Symbol && arr[_Symbol$iterator] || arr["@@iterator"]);
  if (null != _i) {
    var _s,
      _arr = [];
    for (_i = _i.call(arr); arr.length < i && !(_s = _i.next()).done;) _arr.push(_s.value);
    return _arr;
  }
}
module.exports = _iterableToArrayLimitLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;