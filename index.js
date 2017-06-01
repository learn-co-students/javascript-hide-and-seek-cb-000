function getFirstSelector(selector) {
  return document.querySelector(selector);;
}

function nestedTarget() {
  return document.querySelector("div#nested div.target");
}

function deepestChild() {
  let node = document.getElementById('grand-node');
  let next = node.children[0]
  while(next){
    node = next
    next = node.children[0]
  }
  return node;
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');
  for (let x = 0, len = rankedLists.length; x < len; x++){
    let children = rankedLists[x].children;

    for (let i = 0, l = children.length; i < l; i++) {
      children[i].innerHTML = parseInt(children[i].innerHTML) + n;
    }
  }
}
