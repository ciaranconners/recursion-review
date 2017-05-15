// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // use document.element to get the classList of an element
  // check if the classlist has the className and matches with the passed className
  // if yes, store it in an array(nodelist)
  // move on to check, if the element has any children,
  // if yes, run the function again on it to get the elements with the passed className

  var result = [];

  var getElements = function(element) {
    if (element.classList) {
      if (element.classList.contains(className)) {
        result.push(element);
      }
    }
    for (var i = 0; i < element.childNodes.length; i++) {
      getElements(element.childNodes[i]);
    }
  };
  getElements(document.body);
  return result;
};

// ver 2
// var getElementsByClassName = function(className, node) {
//   var result = [];
//   node = node || document.body;
//   if (node.classList) {
//     if (node.classList.contains(className)) {
//       result.push(node);
//     }
//   }
//   for (var i = 0; i < node.childNodes.length; i++) {
//     result = result.concat(getElementsByClassName(className, node.childNodes[i]));
//   }
//   return result;

// };
