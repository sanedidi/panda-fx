function burgerMenu() {
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".header__links");
    const body = document.querySelector("body");
    burger.addEventListener("click", () => {
        if (!menu.classList.contains("active")) {
            menu.classList.add("active");
            burger.classList.add("active-burger");
            body.classList.add("locked");
        } else {
            menu.classList.remove("active");
            burger.classList.remove("active-burger");
            body.classList.remove("locked");
        }
    });
    menu.addEventListener("click", (event) => {
        if (event.target) {
            menu.classList.remove("active");
            burger.classList.remove("active-burger");
            body.classList.remove("locked");
        }
    });
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener("resize", () => {
        if (window.innerWidth > 991.98) {
            menu.classList.remove("active");
            burger.classList.remove("active-burger");
            body.classList.remove("locked");
        }
    });
}
burgerMenu();

function catalogBtnClick() {
    const btn = document.querySelector('.catalog__btn');
    const scls = document.querySelector('.catalog__socials');
    // console.log(btn);

    btn.addEventListener("click", () => {
        scls.classList.add("active");
        document.body.style.overflow = "hidden"
    });

    scls.addEventListener("click", (e) => {
        if (!e.target.classList.contains("catalog__modal")) {
            scls.classList.remove("active");
            document.body.style.overflow = ""
        }
    });


}

// Вызываем функцию
catalogBtnClick();


