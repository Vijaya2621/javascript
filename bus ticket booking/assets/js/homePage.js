
function Valid() {
        let from = document.getElementById("field").value;
        let to = document.getElementById("field1").value;
        // let date = document.querySelector('input[type="date"]').value;
        // let selectSeat = document.getElementById("goto");
 
      
        // Validation for "Travel From" field
        if (from === "" && to === "") {
            document.getElementById("error").innerHTML = "Please select 'Departure'";
            return false;
        } else {
            document.getElementById("error").innerHTML = "";
        }

        // Validation for "Travel To" field
        if (to === "") {
            document.getElementById("error1").innerHTML = "Please select 'Destination'";
            return false;
        
        } else {
            document.getElementById("error1").innerHTML = "";
        }

        // validation for same places
        if(to == from){
            document.getElementById("error1").innerHTML = "Departure and destination cannot be same";
            return false;
        }
        else{
            document.getElementById("error1").innerHTML = "";
        }
        return true;
       
    }

        let forms = document.getElementById("next");
        forms.addEventListener("submit", function(e){
        e.preventDefault();
        if(Valid())
            window.location.href="./pages/busList.html";
        })



