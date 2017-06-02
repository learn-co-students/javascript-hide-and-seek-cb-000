function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let list = document.querySelectorAll('ul.ranked-list li');
  list.forEach((listItem) => {
      let rank = listItem.innerHTML;
      listItem.innerHTML = (parseInt(rank, 10) + n);
    }
  );
}

function deepestChild() {
  let nodes = document.querySelectorAll('div#grand-node div')
  let lastNode = nodes[nodes.length - 1]
  return lastNode
}

