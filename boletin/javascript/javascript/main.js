let links = document.querySelectorAll(".close");

links.forEach(function(link){
    link.addEventListener("click",function(ev){
        ev.preventDefault();
        let content = document.querySelector('.content');

        content.classList.remove("animate__backInLeft");
        content.classList.remove("animate__animated");

        content.classList.add("animate__backOutRight");
        content.classList.add("animate__animated");

        setTimeout(function(){
            location.href="/";
        },1000);

        return false;
    });
});
