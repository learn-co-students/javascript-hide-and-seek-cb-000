function  getFirstSelector(selector){
  return document.querySelector(selector)
}

function  nestedTarget(){
  return document.querySelector('#nested .target')
}

function  increaseRankBy(n){
  const ranked = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < ranked.length; i++) {
    ranked[i].innerHTML = (parseInt(ranked[i].innerHTML) + n).toString();
  }
}

function  deepestChild(){
   const deepest = document.querySelectorAll('#grand-node div');
     return deepest[deepest.length-1]

}
