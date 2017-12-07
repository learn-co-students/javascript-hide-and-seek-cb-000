var getFirstSelector = selector => {
  return document.querySelector(selector);
};

var nestedTarget = () => {
  return document.querySelector("#nested .target");
};

var increaseRankBy = n => {
  const uls = document.getElementById("app").querySelectorAll("ul li");
  uls.forEach(li => {
    li.innerHTML = (li + n).toString;
  });
};

var deepestChild = () => {};
