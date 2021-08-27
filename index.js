document.getElementsByClassName("scroll-top")[0].addEventListener("click", () => {
    if (window.scrollY){
        window.scroll({top:0, behavior: "smooth"});
    }
});