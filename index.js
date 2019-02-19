function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')

}

function increaseRankBy(n) {
  var rn = parseInt(n, 10) ;
  var items = document.querySelectorAll(' .ranked-list li') ;
  for (let i = 0 ; i < items.length ; i++) {
    items[i].textContent = parseInt(items[i].textContent, 10) + rn
  }
}

function deepestChild() {
  var kid = document.querySelector(' #grand-node div div div div')
  return kid
}
