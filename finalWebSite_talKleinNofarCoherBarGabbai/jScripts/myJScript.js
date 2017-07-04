//הנגשת תפריט
function tab_nav() {
    var navA = document.querySelectorAll("ul li>a");
    var navInner = document.querySelectorAll("li ul li>a");

    for (var i = 0, len = navA.length; i < len; i++) {
        navA[i].addEventListener("focus", function (event) {
            var innerUl = event.target.parentElement.querySelector("ul")
            if (innerUl) innerUl.style.display = "inline-block";
        }, true);
    }

    for (var i = 0, len = navInner.length; i < len; i++) {
        if (navInner[i].parentElement.nextElementSibling === null) {
            navInner[i].addEventListener("blur", function (event) {
                event.target.parentElement.parentElement.style.display = "none"
            }, true);
        }
    }
}
//הופעת אלמנטים סוגי ביטוח וטיפים נוספים
function show_hide(element) {
    var con = element.parentElement.querySelector(".contantBG");
    var elements = $('.contantBG');


    elements.each(function () {
        if ($(this).siblings('h2').hasClass('activeContant')) {
            $(this).siblings('h2').removeClass('activeContant');
            $(this).siblings('h2').addClass('unActiveContant');
        }
    })

    if (con.style.display == "block") {
        elements.each(function () {
            $(this).hide();
        });
        con.style.display = "none";

        $(element).removeClass('activeContant');
        $(element).addClass('unActiveContant');

    } else {
        elements.each(function () {
            $(this).hide();
        });
        con.style.display = "block";
        $(element).addClass('activeContant');
        $(element).removeClass('unActiveContant');
    } console.log(con.style.display)

}
//תפריט אקורדיון שאלות תשובות
function show_hide_qa(element) {
    var con = element.querySelector(".answer");
    var elements = $('.answer');


    if (con.style.display == "block") {
        elements.each(function () {
            $(this).hide();
        });
        con.style.display = "none";

    } else {
        elements.each(function () {
            $(this).hide();
        });
        con.style.display = "block";
    } console.log(con.style.display)
    //element.classList.toggle('activeContant');
    //element.classList.toggle('unActiveContant');
}

var sectionsH2;
var sectionH2a;
function dictionaryHover() {
    sectionsH2 = $('.dictionaryDiv section');
    sectionsH2.each(function () {
        $(this).hover(function () {
            sectionsH2.each(function () {
                $(this).removeClass('activeTerm');
            })
            $(this).addClass('activeTerm');
        }, function () {
            $(this).removeClass('activeTerm');
        })
    })
}

$(function () {
    dictionaryHover();
})