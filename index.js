function getFirstSelector(selector) {
  var selected = document.querySelector(selector)
  return selected
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  var ranks = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < ranks.length; i++){
    ranks[i].innerHTML = (i + 1).toString();
  }
}

function deepestChild() {
  var farthest_child = document.getElementById('grand-node').querySelectorAll('div')
  return farthest_child[farthest_child.length - 1]
}
