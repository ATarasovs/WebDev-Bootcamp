var choice;
var list = [];
var count = 1;

document.addEventListener("DOMContentLoaded", function(event) {
  toDoList();
});

function toDoList() {
   while (choice != "quit") {
      choice = prompt("What you would like to do?");

      if (choice == "add") {
         addToList();
      }

      else if (choice == "list")
      {
         showList();
      }

      else if (choice == "delete"){
         removeFromList();
      }
   }
}

function addToList() {
      var add = prompt("What you would like to add");
      list.push(add);
      console.log("The item was successfully added");
}

function showList() {
   list.forEach(function(item) {
      console.log("[" + count + ".] " + item);
      count++;
   })
   count = 1;
}

function removeFromList() {
   var element = prompt("What item would you like to remove?");
   element--;
   list.splice(element, 1);
   console.log("The item was successfully removed");
}
