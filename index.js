function getAndUpdate(){
    console.log("Updating List...");
    title = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    
    if (localStorage.getItem('ItemsJson') == null) {
      itemJsonArray = [];
      itemJsonArray.push([title, desc]);
      localStorage.setItem("ItemsJson", JSON.stringify(itemJsonArray));
    }
    else{
        itemJsonArrayStr = localStorage.getItem('ItemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([title, desc]);
        localStorage.setItem("ItemsJson", JSON.stringify(itemJsonArray))
    }
    update();
  }
  function update(){
    if (localStorage.getItem('ItemsJson') == null) {
      itemJsonArray = [];
      localStorage.setItem("ItemsJson", JSON.stringify(itemJsonArray));
    }
    else{
        itemJsonArrayStr = localStorage.getItem('ItemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
    }
    // Fill the table
    let tableBody = document.getElementById("tableBody");
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str += `<tr>
          <th scope="row">${index + 1}</th>
          <td>${element[0]}</td>
          <td>${element[1]}</td>
          <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td>
        </tr>`;
    });
    tableBody.innerHTML = str;
  }
  add = document.getElementById("add");
  add.addEventListener("click", getAndUpdate);
  update();
  function deleted(itemIndex){
    console.log("Delete", itemIndex);
    itemJsonArrayStr = localStorage.getItem('ItemsJson')
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    // Delete item index element from the array
    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem('ItemsJson', JSON.stringify(itemJsonArray));
    update();
  }
  function clearStorage(){
    if(confirm("Do you really wamt to clear?")){
      console.log("Clearing Storage");
      localStorage.clear();
      update();
    }  
  }