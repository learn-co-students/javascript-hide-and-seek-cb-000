function getFirstSelector(selector){
	return document.querySelector(selector)
}

function nestedTarget(){
	return document.querySelector('#nested .target')
}

function increaseRankBy(n){
	var rankedList = document.querySelectorAll('.ranked-list')
	for(var i = 0, l = rankedList.length; i<l; i++){
		var child = rankedList[i].querySelectorAll('li')
		for(var j = 0, k = child.length; j<k; j++){
			child[j].innerHTML = parseInt(child[j].innerHTML)+n
		}
	}
}

function deepestChild(){
	var gn = document.querySelector('#grand-node')
	var c = gn.querySelector('div')
	while(c.querySelector('div')){
		c = c.querySelector('div')
	}
	return c
}