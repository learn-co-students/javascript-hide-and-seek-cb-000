function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("div#nested div.target");
}

function increaseRankBy(n) {
  var nodes = document.querySelectorAll(".ranked-list");
    for (var i = 0; i < nodes.length; i++) {
	  var lis = nodes[i].querySelectorAll("li");
	    for (var j = 0; j < lis.length; j++) {
			var number = parseInt(lis[j].innerHTML) + n;
			lis[j].innerHTML = number;
        }
    }
}

function deepestChild() {
  var grandNode = document.getElementById("grand-node");
  return grandNode.querySelectorAll("div")[3]; 
}
