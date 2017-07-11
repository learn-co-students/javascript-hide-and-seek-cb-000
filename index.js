function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector("div.target")
}

function deepestChild(){
  var current = document.getElementById("grand-node")
  var child = current.firstElementChild
  while (child) {
    current = child
    child = current.firstElementChild
  }
  return current
}

function increaseRankBy(n){
  var list = document.querySelectorAll(".ranked-list")

  for(let i=0; i < list.length; i++){
    list[i].innerHTML = parseInt(list[i].innerHTML) + n
  }
}
