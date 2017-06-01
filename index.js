function getFirstSelector(selector) {
	return document.querySelector(selector);
}

function nestedTarget() {
	return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
	const ranks = document.querySelectorAll('.ranked-list li')
	for (var i = 0, l = ranks.length; i < l; i++) {
  	var integer = parseInt(ranks[i].innerHTML) + n;
		ranks[i].innerHTML = integer.toString()
	}
}

function deepestChild(argument) {
	const deepdivs = document.querySelectorAll('#grand-node div');
	return deepdivs[deepdivs.length - 1];
}