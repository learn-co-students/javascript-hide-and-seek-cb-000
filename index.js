function getFirstSelector(selector){
  return document.querySelector(selector);
}

function increaseRankBy(n){
  const rank = document.querySelectorAll('.ranked-list')
  for (let i = 0, l = rank.length; i < l; i++) {
  rank[i].innerHTML = parseInt(i) + n;
  }
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function deepestChild(){
  var arr = document.querySelector('div#grand-node');
  var n;
    while(typeof arr !== "undefined") {
      n = arr;
      arr = arr.children[0];
    }
    return n
  }
