const listContainer = document.querySelector(".list-container");
const btn = document.querySelector(".addbtn");

const input = document.querySelector("input");
const form = document.querySelector("form");
let isEdit = false;
let editingId;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = input.value;
  if (value && !isEdit) {
    addList(value);
    input.value = "";
  } else if (value && isEdit) {
    editing();
  } else {
  }
});

function addList(value) {
  const id = new Date().getTime().toString(); // unique id
  console.log(id);
  let element = document.createElement("ul"); // create ul element
  element.classList.add("list"); // add class name to element

  const attr = document.createAttribute("data-id"); // create attribute
  attr.value = id; //assign the value of attribute
  element.setAttributeNode(attr);

  element.innerHTML = ` 
    <li> ${value}</li>
          <div class="btn-container">
            <button class="edit"><i class="fi fi-rr-edit"></i></button>
            <button class="delete"><i class="fi fi-rr-trash"></i></button>
          </div>
    
    `;
  listContainer.appendChild(element);
  const editBtn = element.querySelector(".edit");
  const deleteBtn = element.querySelector(".delete");
  editBtn.addEventListener("click", function (e) {
    isEdit = true;
    btn.textContent = "Edit";
    let list = e.target.parentElement.parentElement.previousElementSibling;
    editingId = Number(
      e.target.parentElement.parentElement.parentElement.dataset.id
    );
    console.log(editing);

    input.value = list.textContent;
  });
}

// editing function

function editing() {
  const value = input.value;
  const todo = document.querySelector(`ul[data-id='${editingId}']`);
  todo.querySelector("li").innerHTML = value;
  defaultState();
}

function defaultState() {
  isEdit = false;
  btn.textContent = "Add";
  input.value = "";
}

function giveAlert(className, msg) {
  let element = document.createElement("p");
  element.classList.add(className);
  element.innerHTML = msg;
  alertParent.appendChild(element);
}

// deleteBtn.addEventListener("click", function (e) {
//     const target = e.target.closest("ul");
//     listContainer.removeChild(target);
//   });
