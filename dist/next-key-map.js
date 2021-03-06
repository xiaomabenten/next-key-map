(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var OBJECT = 'object';

  nx.keyMap = function (inTarget, inMap) {
    var destKey;
    var result = ( inTarget instanceof Array ) ? [] : {};

    nx.each( inTarget, function(key,value) {
      destKey = inMap[key] || key;
      result[ destKey ] = value;

      if(value && typeof value === OBJECT ){
        result[ destKey ] = nx.keyMap( value, inMap );
      }
    });

    return result;
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.keyMap;
  }

}());
