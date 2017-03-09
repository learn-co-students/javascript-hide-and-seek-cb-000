
function getFirstSelector(selector){
  let result = document.querySelector(selector)
  return result
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}
function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}

function increaseRankBy(n){
  let rankedList = document.querySelectorAll('.ranked-list')

  for (let i = 0; i < rankedList.length; i++) {

    let children = rankedList[i].children

    for (let l = 0; l < children.length; l++) {
      children[l].innerHTML = parseInt(children[l].innerHTML) + n
    }
  }
}

function deepestChild(){
  let node = document.getElementById('grand-node')
  let next = node.children[0]

  while (next) {
    node = next
    next = node.children[0]
  }

  return node
}
