const groceryListContainer = document.querySelector(".list-container");
const addButton = document.querySelector("input");

const inputField = document.querySelector("input");
const form = document.querySelector("form");
let isEditing = false;
let editingItemId;
let groceryItems = JSON.parse(localStorage.getItem("groceryItems")) || [];
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// get list from localStorage and load to dom
window.addEventListener("DOMContentLoaded", () => {
  groceryItems.forEach((item) => createGroceryItemElement(item));
});
// add cursor on input after loded
inputField.focus();

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = inputField.value;

  // when is editing is flase add the item and if true then edit the item
  if (value && !isEditing) {
    addGroceryItem(value);
    inputField.value = "";
  } else if (value && isEditing) {
    updateGroceryItem(value);
  } else {
    alert("Please enter an item!");
  }
  // come back to default state
  resetState();
});

// add item
function addGroceryItem(value) {
  const id = new Date().getTime().toString(); // Unique ID for each grocery item
  const groceryItem = { id, value };
  groceryItems.push(groceryItem);
  saveGroceryItemsToLocalStorage();
  createGroceryItemElement(groceryItem);
}

// create grocery item element
function createGroceryItemElement(item) {
  let element = document.createElement("ul");
  element.classList.add("grocery-item");

  const itemIdAttr = document.createAttribute("data-id");
  itemIdAttr.value = item.id;
  element.setAttributeNode(itemIdAttr);

  element.innerHTML = `
    <li> ${item.value}</li>
    <div class="btn-container">
      <button class="edit-button"><i class="fi fi-rr-edit"></i></button>
      <button class="delete-button"><i class="fi fi-rr-trash"></i></button>
    </div>
  `;

  // append the element to the grocery container
  groceryListContainer.appendChild(element);

  // delete event listener
  element
    .querySelector(".delete-button")
    .addEventListener("click", function (e) {
      groceryItems = groceryItems.filter((grocery) => grocery.id !== item.id);
      saveGroceryItemsToLocalStorage();
      const target = e.target.closest("ul");
      groceryListContainer.removeChild(target);
    });
  // edit event listener
  element.querySelector(".edit-button").addEventListener("click", function (e) {
    isEditing = true;
    addButton.textContent = "Edit";
    inputField.focus();
    let list = e.target.parentElement.parentElement.previousElementSibling;

    editingItemId = e.target.closest("ul").dataset.id;
    // getting the edit list text vlaue to input
    inputField.value = list.textContent;
  });
}

// edit functionality
function updateGroceryItem(updatedValue) {
  groceryItems = groceryItems.map((item) => {
    return item.id === editingItemId ? { ...item, value: updatedValue } : item;
  });
  saveGroceryItemsToLocalStorage();
  const groceryItem = document.querySelector(`ul[data-id='${editingItemId}']`);
  if (groceryItem) groceryItem.querySelector("li").innerHTML = updatedValue;
}

// set item to localStorage
function saveGroceryItemsToLocalStorage() {
  localStorage.setItem("groceryItems", JSON.stringify(groceryItems));
}

// set back default
function resetState() {
  isEditing = false;
  addButton.textContent = "Add Item";
  inputField.value = "";
}
