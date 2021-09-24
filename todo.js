const addButton = document.querySelector(".addButton");
var input = document.querySelector(".input");
const container = document.querySelector(".container");
const todoOwner = document.querySelector('.todoowner');
const date = document.querySelector('.todoDate')

class item {
  constructor(itemName, name) {
    //Create the item's div
    this.createDiv(itemName);
  }


  createDiv(itemName) {
    let input = document.createElement("input");
    input.value = itemName;
    input.disabled = true;
    input.classList.add("item_input");
    input.type = "text";

    let itemBox = document.createElement("div");
    itemBox.classList.add("item");
    itemBox.classList.add("newClass")

    

    let editButton = document.createElement("button");
    editButton.innerText = "EDIT";
    editButton.classList.add("editButton");

    let removeButton = document.createElement("button");
    removeButton.innerHTML = "REMOVE";
    removeButton.classList.add("removeButton");

    let owner = document.createElement("p");
    let allOwner = todoOwner.value;
    owner.innerHTML = allOwner;


    let todoDate = document.createElement("p");
    let datecreated = date.value;
    todoDate.innerHTML = datecreated;
    


    // let together = document.createElement("q");
    // together.innerHTML = "font";

    container.appendChild(itemBox);

    itemBox.appendChild(input);
    itemBox.appendChild(editButton);
    itemBox.appendChild(removeButton);
    itemBox.appendChild(owner);
    itemBox.appendChild(todoDate);
    // itemBox.appendChild(together)

    editButton.addEventListener("click", () => this.edit(input));

    removeButton.addEventListener("click", () => this.remove(itemBox));

    owner.addEventListener("click", () => this.deji(owner))

    // together.addEventListener("click", () => this.font(together))


  }

  edit(input) {
    input.disabled = !input.disabled;
  }

  remove(me) {
    container.removeChild(me);
  }

  deji(owner){
      owner.style.color = "white";
  }

  font(together){
      together.style = "text-transform: uppercase;";
  }

  
}
// new item("Sport");

function check() {
  if (input.value != "") {
    new item(input.value);
    input.value = "";
  }
}

addButton.addEventListener("click", check);
window.addEventListener("keydown", (e) => {
  if (e.which == 13) {
    check();
  }
});
