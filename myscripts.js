let button = document.querySelector(".like-button");

button.addEventListener("click", function (e) {
  e.preventDefault();
  this.classList.toggle("active");
  this.classList.add("animated");
});

function plusOrMinus() {
  return Math.random() < 0.5 ? -1 : 1;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var post = document.getElementById("post");
post.addEventListener("click", function () {
  var commentBoxValue = document.getElementById("comment-box").value;

  var li = document.createElement("li");
  var text = document.createTextNode(commentBoxValue);
  li.appendChild(text);
  document.getElementById("unordered").appendChild(li);
});
