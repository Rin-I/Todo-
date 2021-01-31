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

        //サブタスク箇所を追加
        const SubTask = document.createElement("div");
            SubTask.style.display = "none";
            SubTask.classList.add("SubT");
            SubTask.innerText = "サブタスク";
            $UL.appendChild(SubTask);
        
        // タスクだんボタン操作
        const $doneButton = document.querySelectorAll("button");
        let TaskIndex = 0;
        let TaskLen = document.querySelectorAll("button.OK").length;

        [$doneButton].forEach((button)=>{
            button.addEventListener("click", ()=> {
                button.closest("li").classList.add("done");
            });            
        })
        // while (TaskIndex < TaskLen) {
        //     $doneButton[TaskIndex].addEventListener("click", (e)=> TaskDone(e));            
        //     TaskIndex++;
        // }
        
        const TaskDone = (e) =>{
            e.preventDefault;
            const $li = e.target.closest("li");
            $li.classList.add("done");
        }
        
    });
    // let $SubT = document.getElementsByTagName("li");

    // $SubT[0].addEventListener("click", () => {
    //     if ($SubT[0].nextElementSibling.style.display === "none") {
    //         $SubT[0].nextElementSibling.style.display = "block";
    //     }else{
    //     $SubT[0].nextElementSibling.style.display = "none";
    //     };
    // });
    // $SubT[1].addEventListener("click", () => {
    //     if ($SubT[1].nextElementSibling.style.display === "none") {
    //         $SubT[1].nextElementSibling.style.display = "block";
    //     }else{
    //     $SubT[1].nextElementSibling.style.display = "none";
    //     };
    // });        


    
})();