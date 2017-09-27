function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const rank = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < rank.length; i++) {
    let newRanking = parseInt(rank[i].innerHTML)
    rank[i].innerHTML = (newRanking + n).toString()
  }
}

function deepestChild() {
  const grandNode = document.getElementById('grand-node').querySelectorAll('div')

  for (let i = 0; i < grandNode.length; i++) {
    if (i == grandNode.length - 1) {
      return grandNode[i]
    }
  }

}

// function find(array, criteriaFn) {
//   let current = array
//   let next = []
//   while (current) {
//     if (criteriaFn(current)) {
//       return current
//     }
//     if (Array.isArray(current)) {
//       for (let i = 0; i < current.length; i++) {
//         next.push(current[i])
//       }
//     }
//     current = next.shift()
//   }
//   return null
// }
