function getFirstSelector(selector) {
  var element;
  //return first element that matches
  element = document.querySelector(selector);
  return element;
}

function nestedTarget() {
  //pulls a .target out of #nestedTarget
  //#nested and .target are div's.
  var target = document.querySelector('#nested .target');
  return target;
}

function increaseRankBy(n) {
  //increases theranks in all of the .ranked-list s by n
  //use parseInt()
  var lis = document.querySelectorAll('li');
  var i = 0;
  while (lis[i]) {
    let nbr = parseInt(lis[i].textContent);
    nbr += n;
    lis[i].textContent = nbr;
    i++
  }
}

function deepestChild() {
  //pulls out the most deeply nested child element from div#grand-node//iterate over elements
  //and call querySelector() and querySelectorAll() on them
  //does not need to be totally generic
  //i.e. : assume there are no sibling nodes
  // recall breadth-first search here
  var myNode = document.getElementById('grand-node');
  var nodeList = myNode.querySelectorAll('div');

  return nodeList[nodeList.length - 1];



}
