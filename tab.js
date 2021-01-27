(()=> {
    const $TaskName = document.getElementById("TaskName");
    const $Addbutton = document.getElementById("Addbutton");
    const $UL = document.querySelector("ul");
    
    $Addbutton.addEventListener("click", () => {
        const TAG = document.createElement("li");
        TAG.innerText = $TaskName.value;
        const Button = document.createElement("button");
        Button.classList.add("OK");
        Button.innerText = "done";
        TAG.appendChild(Button);
        $UL.appendChild(TAG);
    })

    const $doneButton = document.querySelectorAll("button");

    const TaskDone = (e) =>{
        e.preventDefault;
        const $li = e.target.closest("li");
        $li.classList.add("done");
    }

    let TaskIndex = 0;
    let TaskLen = document.querySelectorAll("button.OK").length;
    while (TaskIndex < TaskLen) {
        $doneButton[TaskIndex].addEventListener("click", (e)=> TaskDone(e));            
        TaskIndex++;
    }
})();