function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  const lis = document.getElementById('grand-node').querySelectorAll('div')
  var child
  for (var i = 0; i < lis.length; i++) {
    child = lis[i].querySelectorAll('div')
    if (child.length == 1) {
      return lis[i].querySelector('div')
    }
  }
}

function increaseRankBy(n) {

  const rankedLists = document.querySelectorAll('.ranked-list')
  const firstList = rankedLists[0]
  const secondList = rankedLists[1]

  let children = firstList.children
  let start = 1
  for (let i = 0; i < children.length; i++) {
    children[i].innerHTML = start + i + n
  }

  children = secondList.children
  start = 12

  for (let i = 0; i < children.length; i++) {
    children[i].innerHTML = start - i + n
  }

  /* var lists = document.querySelectorAll('.ranked-list')
  var childList
  for (var i = 0; i < lists.length; i++) {
    childList = lists[i]
    for (var j = 0; j < childList.length; j++) {
      childList[i].innerHTML = (parseInt(childList[i].innerHTML) + n)
    }
  } */
  // let rank = 1
  // rank += n
  // return rank
}
