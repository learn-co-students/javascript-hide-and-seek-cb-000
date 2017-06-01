function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  let li = document.querySelectorAll('.ranked-list')

  for(let i=0, l=li.length; i < l; i++){
    li[i].innerHTML = parseInt(li[i].innerHTML) + 1
  }
}

function deepestChild(){
  let current = document.querySelector('div#grand-node')
  let next = current.children[0]

  while(next){
    /*
      while there is a child, the child becomes the node
      and next becomes its first child
      this only goes down one tree, it can't find the longest one out of multiple
      trees
    */
    current = next
    next = current.children[0]
  }

  return current
}
