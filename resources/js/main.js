// Run when page loads
window.onload = function(){
    // Set input field empty
    document.getElementById("ui").value = "";
    // Get letters while typing
    document.getElementById("ui").addEventListener("keyup", function(event){
        // If not empty
        if(document.getElementById("ui").value != ""){
            // Get user input
            let userInput = event.target.value;

            // Send a request using AJAX to get Number Facst (http://numbersapi.com/number/type)
            let xhr = new XMLHttpRequest();
            xhr.open("GET", "http://numbersapi.com/"+userInput+"/trivia", true);
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
            document.getElementById("out").innerHTML = "Your Input related Fact will be available here!";
        }
    })
}