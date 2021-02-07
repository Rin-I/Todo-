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

        Button.addEventListener("click", ()=> {
            Button.closest("li").classList.add("done");
        });            
        
        const $SubT = document.getElementsByTagName("li");
        (function(n) {
            $SubT[n].addEventListener("click", () => {
                if ($SubT[n].nextElementSibling.style.display === "none") {
                    $SubT[n].nextElementSibling.style.display = "block";
                } else{
                    $SubT[n].nextElementSibling.style.display = "none";
                };
            })
        })($SubT.length - 1)
    });
})();