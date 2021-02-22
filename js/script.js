//tabs
let ul = document.querySelector(".our_services_tabs" );

ul.addEventListener("click", function (e) {
 let data = e.target.dataset.tab;
     document.querySelector(".activateTab").classList.remove("activateTab");
        e.target.classList.add("activateTab");
    document.querySelector(".active").classList.remove("active");
    document.querySelector(`[data-content = ${data}]`).classList.add("active");
});

//button load more

let buttonLoadMore = document.getElementById("btn_more");
let imgLoadMore = document.querySelector(".load_tabs");

buttonLoadMore.addEventListener("click", (event) => {
    event.preventDefault();
    imgLoadMore.classList.remove("hidden_block");
    buttonLoadMore.style.display = "none";
});


//tabs gallery 

let Tabs = document.querySelectorAll(".tabs_work"),
    TabsContent = document.querySelectorAll(".data_tabs"), TabsData;

Tabs.forEach(item => {
    item.addEventListener("click", selectTabs)
});

function selectTabs() {
    Tabs.forEach(item => {
        item.classList.remove("active");
    });
    this.classList.add("active");
    TabsData = this.getAttribute("data-tab-name");
    selectTabsContent(TabsData);
}

function selectTabsContent(TabsData) {
    TabsContent.forEach(item => {
        if (item.classList.contains(TabsData) ) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    })
}

//slider

let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function prevSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    const slides = document.querySelectorAll(".slider_block");
    const icons = document.querySelectorAll(".icon_slide");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < icons.length; i++) {
        icons[i].classList.remove('active-icon')
    }
    slides[slideIndex - 1].style.display = "block";
    icons[slideIndex - 1].classList.add("active-icon");
}
document.getElementById('btn_prev').addEventListener('click', prevSlide);
document.getElementById('btn_next').addEventListener('click', nextSlide);