function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  var node = document.getElementById('grand-node')
  var kind = node.children[0]

  while (kind) {
    node = kind
    kind = node.children[0]
  }
  return node;
}

function increaseRankBy(num) {
  var rank = document.querySelectorAll('.ranked-list')

  for (let i = 0; i < rank.length; i++) {
    var kid = rank[i].children

    for (let k = 0; k < kid.length; k++) {
      kid[k].innerHTML = parseInt(kid[k].innerHTML) + num
    }
  }
}
