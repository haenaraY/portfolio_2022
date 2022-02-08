//loading
let Isloader = document.querySelector('.loading_wrap');

function Isloading(){
    setTimeout(function(){
        Isloader.classList.add('active');
    },2000);
}
Isloading();


//앵커기능 부드럽게 스크롤
document.querySelectorAll(".nav_wrap ul li a").forEach(li => {
    li.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(li.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        })
    })
})
                 

