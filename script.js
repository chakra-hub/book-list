id_index = localStorage.length/3;
let submit_btn = document.getElementById("submit-btn");
submit_btn.addEventListener("click", (e) => {
  e.preventDefault();
  ++id_index;
  let book_name = document.getElementById("book-name").value;
  let author = document.getElementById("author").value;
  let ism = document.getElementById("ism").value;
  if (book_name != '' && author != '' && ism != '') {
    localStorage.setItem(`book_${id_index}`,book_name);
    localStorage.setItem(`author_${id_index}`,author);
    localStorage.setItem(`ism_${id_index}`,ism);
    document.getElementById("book-name").value = "";
    author = document.getElementById("author").value = "";
    ism = document.getElementById("ism").value = "";
    add_to_dom(id_index);
    location.reload();
  }
});

function delete_data(id) {
  content = document.getElementById(id).parentElement.parentElement;
  _id=id.substring(6);
  localStorage.removeItem(`book_${_id}`);
  localStorage.removeItem(`author_${_id}`);
  localStorage.removeItem(`ism_${_id}`);
  content.remove();
  location.reload();
}

function add_to_dom(id){
  if(id>= 0){
  let table = document.createElement("div");
  table.className = "table-content";
  table.innerHTML = `<div class="table-item" id="content_${id}">
    <div class="row">${localStorage.getItem(`book_${id}`)}</div>
    <div class="row">${localStorage.getItem(`author_${id}`)}</div>
    <div class="row">${localStorage.getItem(`ism_${id}`)}<button class="cross-btn" id="cross_${id}" onclick="delete_data(id)">x</button></div>
  </div>`;
  document.getElementById("content").appendChild(table);
  }
}

for(i=1;i<=localStorage.length/3; i++){
    add_to_dom(i);
}
