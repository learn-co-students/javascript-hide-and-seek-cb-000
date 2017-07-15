function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
    return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n) {
    const rankClass = document.querySelectorAll('.ranked-list li');
    for (let i = 0; i < rankClass.length; i++) {
        rankClass[i].innerHTML = (parseInt(rankClass[i].innerHTML) + n).toString();
    }
}

function deepestChild() {
    const mainID = document.querySelectorAll('div#grand-node div');
    return mainID[mainID.length - 1];
}