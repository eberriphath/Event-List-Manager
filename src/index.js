const form = document.getElementById("form");
const guestNameInput = document.getElementById("guest-name");
const guestList = document.getElementById("guest-list");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = guestNameInput.value.trim();
  if (!name) {
    alert("Please enter a name.");
    return;
  }

  if (guestList.children.length >= 10) {
    alert("Guest list limit is 10. Cannot add more guests.");
    return;
  }

  const listItem = document.createElement("li");
  listItem.textContent = name;

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", () => {
    listItem.remove();
  });

  listItem.appendChild(removeButton);
  guestList.appendChild(listItem);

  guestNameInput.value = "";
});

