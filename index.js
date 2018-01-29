function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var rankedListElems = document.querySelectorAll('ul.ranked-list li')
  for (var i = 0; i < rankedListElems.length; i++) {
    rankedListElems[i].innerHTML = parseInt(rankedListElems[i].innerHTML, 10) + n
  }
}

function deepestChild() {
  var grandNode = document.querySelector('div#grand-node');

  var deepChildFound = false;
  var deepChild;

  var currentLevel = grandNode;
  while (!deepChildFound) {
    currentLevel = currentLevel.querySelector('div');
    if (currentLevel.innerHTML.indexOf('div') === -1) {
      deepChildFound = true;
      deepChild = currentLevel;
    }
  }
  return deepChild;
}
