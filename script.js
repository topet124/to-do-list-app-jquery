function newItem() {

  //javascript
  //1. Adding a new item to the list of items:
  let list = $('#list');
  let li = $('<li></li>');
  let input = $('#input');
  let inputValue = $("#input").val();

  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
    $('#input').val('');
  }

  //2. Crossing out an item from the list of items:
  function crossOut() {
    li.toggleClass("strike");
  }

  li.on('dblclick', crossOut);

  //3(i). Adding the delete button "X":
  let crossOutButton = $('<crossOutButton></crossOutButton>')
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);


  //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
  function deleteListItem() {
    li.addClass('delete');
  }
  crossOutButton.on('click', deleteListItem);

  // 4. Reordering the items:
  $('#list').sortable();

}
