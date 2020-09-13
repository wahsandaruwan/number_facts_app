// Run when page loads
window.onload = function(){
    // Clear input
    document.getElementById("ui").value = "";
    // Reset radio to default
    document.getElementById("trivia").checked = true;
    // Reset input and output elements when radio check
    clearInputOutput();
    // Set placeholder of input when radio check
    setPlaceholder();
    // Get letters while typing
    document.getElementById("ui").addEventListener("keyup", function(event){
        // If not empty
        if(document.getElementById("ui").value != ""){
            // Get user input
            let userInput = event.target.value;
            // Get type
            let type = document.querySelector('input[name="radio"]:checked').value;
            
            // Send a request using AJAX to get Number Facst (http://numbersapi.com/number/type)
            let xhr = new XMLHttpRequest();
            xhr.open("GET", "http://numbersapi.com/"+userInput+"/"+type+"", true);
            xhr.onload = function(){
                if(this.status == 200){
                    // Update out element
                    document.getElementById("out").style.color = "#2c3e50";
                    document.getElementById("out").innerHTML = this.responseText;
                }
                // For invalid inputs
                else{
                    document.getElementById("out").style.color = "#b8322d";
                    document.getElementById("out").innerHTML = "Invalid input, Please check your input!";
                }
            }
            xhr.send();
        }
        // If Empty
        else{
            document.getElementById("out").style.color = "#2c3e50";
            document.getElementById("out").innerHTML = "Your Input related Fact will be available here!";
        }
    })
}

// Function to reset input and output when radio check
function clearInputOutput(){
    if (document.querySelector('input[name="radio"]')) {
        document.querySelectorAll('input[name="radio"]').forEach((element) => {
            element.addEventListener("change", function(event) {
            document.getElementById("ui").value = "";
            document.getElementById("out").style.color = "#2c3e50";
            document.getElementById("out").innerHTML = "Your Input related Fact will be available here!";
            setPlaceholder();
          });
        });
    }
}

// Function to set input placeholder according to radio
function setPlaceholder(){
    let type = document.querySelector('input[name="radio"]:checked').value;
    if(type == "date"){
        document.getElementById("ui").placeholder = "Enter any Date(mm/dd)";
    }
    else if(type == "trivia" || type == "math"){
        document.getElementById("ui").placeholder = "Enter any Number";
    }
    else{
        document.getElementById("ui").placeholder = "Enter any Year(yyyy)";
    }
}