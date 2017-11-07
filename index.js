function getFirstSelector(selector) {
  return document.querySelector(selector); //querySelector() grabs the FIRST element that matches the argument given
}

function nestedTarget() {
  return document.querySelector('#nested .target'); //grabs the id 'nested' with a class of 'target'
}

function deepestChild() {
  var node = document.getElementById('grand-node') //node is being defined as the ID 'grand-node'
  var kind = node.children[0]                      //kind is being defined as the first child element of node[in this case, 'grand-node']

  while (kind) {            //while there is a kind variable
    node = kind             //kind becomes the parent element 'grand-node'
    kind = node.children[0] //the first child of the new 'grand-node' is selected
  }                         //this is repeated until there is no longer a kind variable
  return node;
}

function increaseRankBy(num) {
  var rank = document.querySelectorAll('.ranked-list')//rank is all elements with a class of 'ranked-list'

  for (let i = 0; i < rank.length; i++) {             //loop through each ranked-list and define its children as kid
    var kid = rank[i].children

    for (let k = 0; k < kid.length; k++) {            //loop through each kid
      kid[k].innerHTML = parseInt(kid[k].innerHTML) + num //grab the text of each kid and parse it into an integer then += the num argument
    }
  }
}
