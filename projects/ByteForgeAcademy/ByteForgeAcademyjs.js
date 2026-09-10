/* =========================================================
   BYTEFORGE ACADEMY
   JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.querySelector(".nav-links");


if (menuBtn) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("active");

    });

}


/* =========================================================
   CLOSE MOBILE MENU AFTER CLICKING A LINK
========================================================= */

const navigationLinks =
    document.querySelectorAll(".nav-links a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


/* =========================================================
   SUBTLE HERO MOUSE PARALLAX
========================================================= */

const heroGraphic =
    document.getElementById("heroGraphic");


if (heroGraphic) {

    document.addEventListener(
        "mousemove",
        function (event) {

            /*
                Calculate mouse position
                from -0.5 to +0.5
            */

            const x =
                (event.clientX /
                    window.innerWidth) - 0.5;

            const y =
                (event.clientY /
                    window.innerHeight) - 0.5;


            /*
                Keep the movement extremely small
                so it doesn't interfere with the
                rotating animation.
            */

            const moveX = x * 8;
            const moveY = y * 8;


            heroGraphic.style.transform =
                `translate(${moveX}px, ${moveY}px)`;

        }
    );


    /*
        Reset the graphic when the mouse
        leaves the browser window.
    */

    document.addEventListener(
        "mouseleave",
        function () {

            heroGraphic.style.transform =
                "translate(0, 0)";

        }
    );

}


/* =========================================================
   VIDEO BUTTON
========================================================= */

const videoButton =
    document.querySelector(".video-play");


if (videoButton) {

    videoButton.addEventListener(
        "click",
        function () {

            alert(
                "ByteForge Academy video will be available here."
            );

        }
    );

}