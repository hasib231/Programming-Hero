let count = 0;
document.getElementById("input-btn").addEventListener("click", function () {
  // console.log("button clicked");
  count += 1;
  const myInputValue = document.getElementById("input-value").value;
  // console.log(myInputValue);

  const parent = document.getElementById("content-container");

  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${count}</td>
    <td>${myInputValue}</td>
    <td>
    <button class='btn btn-danger deletebtn'>Delete</button>
    <button class='btn btn-primary donebtn'>Done</button>
    <p class='doneText' style="display: none;">DONE</p>
    </td>

  
  `;
  parent.appendChild(tr);
  document.getElementById("input-value").value = "";

  const elements = document.querySelectorAll(".deletebtn");

  for (const value of elements) {
    value.addEventListener("click", function (e) {
      // console.log(event.target.parentNode.parentNode);
      e.target.parentNode.parentNode.style.display = "none";
    // document.getElementById('doneText').style.display = "block";
    });
  }




//   for done Button
  const elements2 = document.querySelectorAll(".donebtn");
  
      // const td = document.createElement("td");
      // td.innerText = "DONE";
      
 
  for (const value of elements2) {
    

    value.addEventListener("click", function (e) {
      // console.log(event.target.parentNode.parentNode);

      // x = e.target.parentNode.style.display = "none";
      
      // y = e.target.parentNode.parentNode;
      // y.appendChild(td);
      // console.log(y);

      e.target.style.display = "none";
      e.target.previousElementSibling.style.display = "none";
      y = e.target.nextElementSibling.style.display = "block";
      
      
        
    });
  }

});






document.getElementById("clear-btn").addEventListener("click", function (e) {

     e.target.parentNode.style.display = "none";

    // parent = e.target.parentNode;
    
    // console.log(parent)

    
});