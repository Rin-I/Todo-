(() => {
    console.log("aaa");
    const $elm = document.getElementById("js-accordion");

    //新しいタスクとボタンで追加
    const $Button = document.querySelector("button");
    $Button.addEventListener("click",() =>{

        // タスク追加
        const $NewTask = document.getElementById("New");
        const aAdd = document.createElement("a");
        aAdd.innerText = $NewTask.value;
        aAdd.classList.add("accordion-trigger")
        $elm.appendChild(aAdd);
        const divAdd = document.createElement("div.accordion-contents");
        divAdd.classList.add("accordion-contents")
        divAdd.innerText = "うんこ"
        $elm.appendChild(aAdd);
        $elm.appendChild(divAdd);

        // Accordion追加
        // const $NewTask = document.getElementById("New");
        // const divAdd = document.createElement("div");
        // divAdd.innerText = $NewTask.value;
        // divAdd.classList.add("accordion-contents")
        // $elm.appendChild(aAdd);
        // const divAdd = document.createElement("div.accordion-contents");
        // $elm.appendChild(aAdd);
        // $elm.appendChild(divAdd);

    })
})();


(() => {
const $elm = document.getElementById("js-accordion");
const $Qin = $elm.getElementsByTagName("a");
const $AddButton = document.querySelector("button");
    $AddButton.addEventListener("click", (e)=>{
        e.preventDefault();
        let AccorLen = $Qin.length;
        let AccorIndex = 0;
        while (AccorIndex < AccorLen) {
            console.log(AccorLen);
            $Qin[AccorIndex].addEventListener("click",(e)=>ChangeBlock(e));
            AccorIndex++
        }
    });

    // $Qin[0].addEventListener("click",(e)=>ChangeBlock(e));
    // $Qin[1].addEventListener("click",(e)=>ChangeBlock(e));

    const ChangeBlock = (e) =>{
        e.preventDefault();
        const $content = e.target.nextElementSibling;
        if($content.style.display === "block"){
            $content.style.display = "none";
        } else {
            $content.style.display = "block";
        };
    }
})();