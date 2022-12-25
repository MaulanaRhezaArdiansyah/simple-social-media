let form = document.getElementById("form");
let input = document.getElementById("input");
let message = document.getElementById("message");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("ok");
  formValidation();
  acceptData();
  // input.value = "";
});

let formValidation = () => {
  if (input.value === "") {
    message.innerHTML = "Post can't be blank!";
  } else {
    message.innerHTML = "";
  }
};

let data = {};

let acceptData = () => {
  // membuat properties ke dalam object data
  data["text"] = input.value;
  console.log(data);
  createPost();
};

let createPost = () => {
  posts.innerHTML += `
                <div>
                  <p>${data.text}</p>
                  <span class="options">
                    <i onclick="editPost(this)" class="fas fa-edit"></i>
                    <i onclick="deletePost(this)" class="fas fa-trash-alt"></i>
                  </span>
                </div>
                `;
  input.value = "";
};

let deletePost = (e) => {
  let text = "Are you sure?";
  if (confirm(text) == true) {
    // mennghapus kakeknya sekaligus dirinya sendiri
    e.parentElement.parentElement.remove();
  }
};

// function deletePost(e) {
//   e.parentElement.parentElement.remove();
// }

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
