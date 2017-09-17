function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  let node = document.querySelector('div#grand-node');
  let next;

  while (node) {
    next = node;
    node = node.children[0];
  }
  return next;
}

function increaseRankBy(n) {
  const rank = document.getElementById('app').querySelectorAll('.ranked-list');
  for (let i = 0; i < rank.length; i++) {
    rank[i].innerHTML = parseInt(i + 1);
  }
}
