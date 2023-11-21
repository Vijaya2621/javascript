let input = document.getElementById("textArea");
let list = document.getElementById("list");
let error = document.getElementById('errorMessage');
function addTask() { 
    let a=document.getElementById("textArea").value; 
    if (textArea.value === "") { 
      error.innerHTML = "Enter your task first...";
  }
  else {
    let b=document.querySelector("#list");
    b.insertAdjacentHTML('afterend',`
    <div class="item d-flex justify-content-between rounded-2 mb-3">
                  <h3 class="text mt-2"> ${
                    document.querySelector("#textArea").value
                  } 
                  </h3>
                  <span>
                    <button class = "done"><i class="fa-regular fa-circle-check fa-xl"></i></button>
                    <button class="remove"><i class="fa-regular fa-circle-xmark fa-xl"></i></button>
                  </span>
                </div>
        `);
    textArea.value = "";
    document.getElementById("errorMessage").innerHTML=""; 
    let removeButtons = document.querySelectorAll(".remove");
    removeButtons.forEach((button) => {
      button.onclick = function () {
        this.parentElement.parentElement.remove();
      };
    });
    let doneButtons = document.querySelectorAll(".done");
    doneButtons.forEach((button) => {
      button.onclick = function () {
        this.parentElement.parentElement
          .querySelector(".text")
          .classList.toggle("workdone");
      };
    });
  }
}
