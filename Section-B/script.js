// Add task codes


document.querySelector("#button").onclick = function(){



    if(document.querySelector(".add-task input").value.length == 0){
        alert("Please enter an input");
    }else{
       document.querySelector("#userInput").innerHTML +=
        `
            <div id="userInput">
                <div class="taskbg">
                <span id="tasktext">
                <span class="check-box">&#10003</span>
                    ${document.querySelector(".add-task input").value}
                </span>
                <button id="delete">&times;</button>
            </div>
        `;
    
    }
    
    let taskbg = document.querySelectorAll(".taskbg");
        for(let i = 0; i < taskbg.length; i++){
            taskbg[i].onclick = function(){
                this.classList.add("tasks");
        }
    }

    

    let strikeLine = document.querySelectorAll("#tasktext");
    for(let i = 0; i<strikeLine.length; i++){
        strikeLine[i].onclick = function(){
            this.classList.toggle("strikeline");
        }
    }
    

    let currentTask = document.querySelectorAll("#delete");
        for(let i = 0; i < currentTask.length; i++){
            currentTask[i].onclick = function(){
                this.parentNode.remove();
        }
    }
    document.querySelector(".add-task input").value = "";
}


// Remove all codes
const removeButton = document.querySelector("#remove-all");
const entryList = document.querySelector("#userInput");
removeButton.addEventListener("click", function(){
    entryList.remove();
})


