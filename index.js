
function  getFirstSelector(selector) {
  const el = document.querySelector(selector)
  return el
};

function nestedTarget() {
    const el = document.querySelectorAll('#nested .target')
    return el
}


function increaseRankBy(n) {
    var rankedList = document.querySelectorAll('.ranked-list li')
    var i
        for (i=0; i < rankedList.length; i++) {
                var parsed = parseInt(rankedList[i].innerHTML)
                rankedList[i].innerHTML = parsed + n
        }
}

function deepestChild() {
    var grandNode = document.querySelector('div#grand-node')
    var current

    while(grandNode) {
        current = grandNode
        grandNode = grandNode.children[0]
    }
    return current
} 
