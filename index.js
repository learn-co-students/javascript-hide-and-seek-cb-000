function getFirstSelector(selector){
  var selectors = document.querySelectorAll(selector);
  return selectors[0]
};

function nestedTarget(){
  return document.querySelector('#nested .target');
};

function deepestChild(){
  var child = document.querySelector('#grand-node')
  var nextChild = child.children[0];

  while(nextChild)
  {
    child = nextChild;
    nextChild = child.children[0];
  }
    return child;
};

function increaseRankBy(n){
  var list = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (var i=0; i < list.length; i++){
    list[i].innerHTML = parseInt(list[i].innerHTML) + n;
  }

}
