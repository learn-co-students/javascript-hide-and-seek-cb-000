function getFirstSelector(selector) {
  console.log(selector);
  var element = document.querySelector(selector);
  return element;
}

function nestedTarget() {
  var element = document.querySelector('div.target');
  return element;
}

function deepestChild(element = "") {
  var element = document.getElementById('grand-node');

  while (element.children[0]) {
    element = element.children[0];

  }
  console.log(element);
  return element;
}

function increaseRankBy(n) {
  var element = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < element.length; i++) {
    var children = element[i].children;

    for (let y = 0; y < children.length; y++) {
      let rank = parseInt(children[y].innerHTML);
      rank += parseInt(n);
      children[y].innerHTML = rank;

    }



  }
  return element;
}
