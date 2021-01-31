(() => {
const $elm = document.getElementById("js-accordion");
const $Qin = $elm.getElementsByTagName("a");

    $Qin[0].addEventListener("click",(e)=>ChangeBlock(e));
    $Qin[1].addEventListener("click",(e)=>ChangeBlock(e));

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