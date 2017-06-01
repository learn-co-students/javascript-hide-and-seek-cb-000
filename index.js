function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
    return document.querySelector('#grand-node:last-of-type');
}

function increaseRankBy(n) {
  const number = document.querySelectorAll('.ranked-list');

    for (let i = 0, l = number.length; i < l; i++) {
    number[i].innerHTML = (i + 1).toString();
  }
}