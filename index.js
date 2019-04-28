
function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector("div#nested .target")
}

function increaseRankBy(n){
  var ranked_lists = document.querySelectorAll("ul.ranked-list li")
  for(let i = 0; i < ranked_lists.length; i++){
    ranked_lists[i].innerHTML = (parseInt(ranked_lists[i].innerHTML) + n).toString()
  }
}

function deepestChild(){
  return document.querySelector("div#grand-node div div div div")
}
