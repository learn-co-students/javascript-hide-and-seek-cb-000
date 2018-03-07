function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var rankedList = document.querySelectorAll('.ranked-list li')
  for(let i = 0;  i < rankedList.length;  ++i)
  {
    var ranke = parseInt(rankedList[i].innerHTML)
    rankedList[i].innerHTML = ranke + n
  }
}


function deepestChild() {
  var grandNode = document.querySelector('div#grand-node')
  var current = grandNode,
      deepestElement = null ;

  while(true ) {
    current = current.children[0]
    if (typeof(current) == 'undefined') {
      break
    }
    deepestElement = current
  }
  return deepestElement
}
