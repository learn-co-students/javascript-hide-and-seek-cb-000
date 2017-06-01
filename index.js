function getFirstSelector(selector) {
	// body...
	return document.querySelector(selector);
}

function nestedTarget() {
	// body...
	return document.querySelector('#nested .target')
}

function deepestChild() {
  var node = document.querySelector('#grand-node')
  var nextNode = node.children[0]

  while(nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}

// <ul class="ranked-list">
//         <li>1</li>
//         <li>2</li>
//       </ul>

//       <ul class="ranked-list">
//         <li>12</li>
//         <li>11</li>
//         <li>10</li>
//       </ul>


function increaseRankBy(n) {
	var rankedLists = document.querySelectorAll('.ranked-list');
	
	for(let i = 0 ,l = rankedLists.length; i < l; i++) {

		var list = rankedLists[i].children
        
		for(var j = 0; j < list.length; j++) {
            list[j].innerHTML = parseInt(list[j].innerHTML) + n;
		}
	}

}
