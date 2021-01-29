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
        
        let $SubT = document.getElementsByTagName("li");
        let $SubTlen = $SubT.length;
        let SubTIndex = 0;
        while (SubTIndex < $SubTlen) {
            $SubT[SubTIndex].addEventListener("click", ()=> {
                if ($SubT[SubTIndex].nextElementSibling.style.display = "none") {
                    $SubT[SubTIndex].nextElementSibling.style.display = "block";
                }else{
                $SubT[SubTIndex].nextElementSibling.style.display = "none";
                }
            });
            SubTIndex++;

        }
        // $SubT[0].addEventListener("click", ()=> {
        //     if ($SubT[0].nextElementSibling.style.display = "none") {
        //         $SubT[0].nextElementSibling.style.display = "block";
        //     }else{
        //     $SubT[0].nextElementSibling.style.display = "none";
        //     }
        // })
    })
    })();