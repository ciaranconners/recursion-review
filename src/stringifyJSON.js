 // convert different "types" to JSON
  // how to convert the dif 'types'?
    // number - toString();
    // string - string, with '"' around it
    // boolean - toString();
    // null - ('null', but toString() won't work)
    // undefined - undefined if only passed in
    // function defintion - 'null'
    // arrays - entirety becomes string
    // objects
        // undefined/Object as key - skips these pairs if Object, if undefined/function etc found in an array, then becomes null

var stringifyJSON = function(obj) {
  if (typeof obj === 'number') {
    return obj.toString();
  }

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (typeof obj === 'boolean') {
    return obj.toString();
  }

  if (typeof obj === 'function') {
    return 'null';
  }

  if (obj === null) {
    return 'null';
  }

  if (obj === undefined) {
    return undefined;
  }

  if (Array.isArray(obj)) {
    if (obj.length) {
      var stringifiedArray = '[';
      for (let i = 0; i < obj.length; i++) {
        if (obj[i] === undefined || typeof obj === 'function') {
          stringifiedArray += 'null';
        } else {
          stringifiedArray += stringifyJSON(obj[i]) + ',';
        }
      }
      return stringifiedArray.slice(0, stringifiedArray.length - 1) + ']';
    }
    return '[]';
  }

  if (typeof obj === 'object') {
    console.log(obj);
    if (Object.keys(obj).length) {
      var stringifiedObject = '';
      for (let key of Object.keys(obj)) { // for in loop not used because of the possibility of iterating over non-enumberable properties
        if(obj[key] === undefined || typeof obj[key] === 'function') {
          continue;
        } else {
          stringifiedObject += '"' + key + '":' + stringifyJSON(obj[key]) + ',';
        }
      }
      return stringifiedObject ? '{' + stringifiedObject.slice(0, stringifiedObject.length -1) + '}' : '{}';
    }
    return '{}';
  }
};