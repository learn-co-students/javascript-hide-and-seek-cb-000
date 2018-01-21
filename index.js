function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  var current, children;
  var next = [];
  next.push(document.querySelector('div#grand-node'));
  while(next.length > 0){
    current = next.shift();
    if (current.children){
      children = current.children;
      for (let i = 0; i < children.length; i++) {
        next.push(children[i]);
      }
    }
  }
  return current;
}

function increaseRankBy(n) {
  const ranks = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < ranks.length; i++) {
  ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n;
}
}
