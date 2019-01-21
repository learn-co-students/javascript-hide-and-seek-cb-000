
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('div.target')
}

function increaseRankBy(n) {
  var lis=document.getElementById("app").querySelectorAll("ul.ranked-list li");
  for(let i=0;i<lis.length;i++) {
    lis[i].innerHTML=parseInt(lis[i].innerHTML)+n;
  }
}

function deepestChild() {
  var divs = document.getElementById('grand-node').querySelectorAll('div')
  var test
    for (let i = 0; i < divs.length-1; i++) {
      test = divs[i].querySelector('div')
    }
  return test
}
