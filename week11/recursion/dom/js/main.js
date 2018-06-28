// Write a recursive function to traverse through every element of the DOM


const traverseDOM = (node, depth=0) => {

  const indent = Array(depth+1).join('  ');
  console.log(`${indent}${node.nodeName}: ${node.className}`);
  for (var i = 0; i < node.children.length; i++){

      traverseDOM(node.children[i], depth+1);

  } // end for loop

}; // traverseDOM

// node.nodeName
// node.className
// node.children - array of the child nodes for this current node
// add recursion! - nested structure, perfect for recursion


traverseDOM(document.body);
