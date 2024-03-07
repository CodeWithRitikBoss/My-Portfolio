// alert("Welcome to My New Website")
// const navLinkEls = document.querySelectorAll('header');
// const windowPathname = window.location.pathname;

// navLinkEls.forEach(navLinkEl => {
//     if(navLinkEl.href.includes(windowPathname)) {
//         navLinkEl.classList.add('active');
//     }
// });

let button1 = document.querySelector(".btn1ForMainPage");
        button1.addEventListener("click",()=>{
            alert("Presently - Avilable on the YouTube Handle.");
            document.body.style.backgroundColor= "white"
        })

let button2 = document.querySelector(".btn2ForMainPage");
button2.addEventListener("click",()=>{
    alert("You can explore everything after Registration.");
    document.body.style.backgroundColor= "pink"
})

let search = document.querySelector(".searchJs");
search.addEventListener("click",()=>{
    alert("Search is not working right now. please can wait for it.");
})