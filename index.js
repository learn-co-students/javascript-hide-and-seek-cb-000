function getFirstSelector(selector) {
  var firstElmt = document.querySelector(selector);
  return firstElmt;
}

function nestedTarget() {
  var target = document.querySelector('#nested .target');
  return target;
}

function increaseRankBy(n) {
  var ranked = document.querySelectorAll('.ranked-list li');
  for (let i = 0, l = ranked.length; i < l; i++) {
    ranked[i].innerHTML = (parseInt(ranked[i].innerHTML) + n).toString();
  }
}

function deepestChild() {
  var nodes = document.querySelector('div#grand-node').querySelectorAll('div');
  return nodes[nodes.length - 1];
}
