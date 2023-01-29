class Node {
  constructor() {
    this.next;
    this.prev;
    this.data;
  }
}
class LinkedList {
  constructor() {
    this.end = null;
    this.start = null;
    this.size = 1;
  }
  AddNodeBeginning(data) {
    let newNode = new Node();
    newNode.data = data;
    if (this.start === null) {
      this.start = newNode;
      this.start.next = null;
      return;
    }
    newNode.next = this.start;
    this.start = newNode;
  }
  AddNodeEnd(data) {
    let newNode = new Node();
    newNode.data = data;
    if (this.start === null) {
      this.start = newNode;
      this.start.next = null;
      return;
    }
    let current = this.start;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
    newNode.next = null;
  }
  DeleteNodeStart(data) { 
    if (this.start === null) {
      return
    }
    this.start = this.start.next
  }

  PrintList() {
    if (this.start === null) {
      ll.innerHTML = "START --> END ";
    }

    let current = new Node();
    current = this.start;
    ll.innerHTML = "START <h3> --> </h3>";
    while (current !== null) {
      ll.innerHTML += current.data + " <h3> --> </h3> ";
      current = current.next;
    }
    ll.innerHTML += "END";
  }
}

const ll = document.querySelector("#ll");
const btn_add_start = document.querySelector("#add-start");
const btn_add_end = document.querySelector("#add-end");
const btn_delete_start = document.querySelector("#delete-start");
const text_word = document.querySelector("#input");
let newInput = "";
const list = new LinkedList();
list.PrintList();
text_word.addEventListener("change", (event) => {
  newInput = event.target.value;
});
btn_add_start.addEventListener("click", () => {
  list.AddNodeBeginning(`<h2>${newInput}</h2>`);
  list.PrintList();
});
btn_add_end.addEventListener("click", () => {
  list.AddNodeEnd(`<h2>${newInput}</h2>`);
  list.PrintList();
});
btn_delete_start.addEventListener("click", () => {
  list.DeleteNodeStart(newInput);
  list.PrintList();
});
btn_end.addEventListener("click", () => {
  list.AddNodeEnd(`<h2>${newInput}</h2>`);
  list.PrintList();
});
// list.AddNodeBeginning("<h2>Cats</h2>");
// list.AddNodeBeginning("<h2>Dogs</h2>");
// list.AddNodeEnd("<h2>Hamsters</h2>");
