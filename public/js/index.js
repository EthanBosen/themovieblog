// write comment logic here
// need a post and get request from backend
// get and display comments
// post and save new comments
const apiRoute = "/movies/:id";

const userId = "";
if (localStorage.getItem("user_id")) {
  userId = localStorage.getItem("user_id");
}

let storeUserId = () => {
  const fromUrl = new URLSearchParams(window.location.search);
  console.log(fromUrl);
};

const postCommentHandler = async (btn) => {
  const movieId = btn.id.split("-")[1];
  let commentBox = document.getElementById("comment-box").value;
  if (commentBox) {
    const response = await fetch(apiRoute, {
      method: "POST",
      body: JSON.stringify({ movieId, commentBox, userId: userId }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert("Comment Posted!");
      const data = await response.json();
    } else {
      alert("Failed to Comment!");
    }
  }
};
