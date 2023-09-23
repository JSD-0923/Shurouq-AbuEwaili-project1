function darkMode() {
    var element = document.getElementsByTagName("header")[0];
    var btns = document.getElementsByTagName("button");
    var shape_container = document.getElementsByClassName("shape-container")[0];
    var intro_sec = document.getElementsByClassName("d-flex-center")[0];
    var search_sec = document.getElementsByClassName("search-sec")[0];
    var selects = document.getElementsByTagName("select");
    var input_wrapper = document.getElementsByClassName("input-wrapper");
    var main = document.getElementsByClassName("main")[0];
    var cards = document.getElementsByClassName("card");
    var titles = document.getElementsByTagName("a");
    var favourites_section =
        document.getElementsByClassName("favourites-section")[0];
    var fav_card = document.getElementsByClassName("fav-card");
    var bottom_sec = document.getElementsByClassName("bottom-sec")[0];
    var sub_topic = document.getElementsByClassName("sub-topic-sec")[0];
    var sub_topic_divs = document.querySelectorAll(".sub-topic-sec div");

    element.classList.toggle("dark-mode-bg");
    shape_container.classList.toggle("dark-mode-bg");
    intro_sec.classList.toggle("dark-mode-bg");

    favourites_section.classList.toggle("dark-mode-bg");
    favourites_section.classList.toggle("dark-mode-border");
    for (var i = 0; i < 2; i++) {
        btns[i].classList.toggle("dark-mode-bg");
        btns[i].classList.toggle("dark-mode-border");
    }

    try {
        search_sec.classList.toggle("dark-mode-bg");
        search_sec.classList.toggle("dark-mode-border");
        input_wrapper[0].classList.toggle("dark-mode-border");
        input_wrapper[1].classList.toggle("dark-mode-border");
        main.classList.toggle("dark-mode-bg2");
        main.classList.toggle("dark-mode-border");
        Array.from(fav_card).forEach(function(card) {
            card.classList.toggle("dark-mode-bg");
        });
        Array.from(cards).forEach(function(card) {
            card.classList.toggle("dark-mode-bg");
        });
        Array.from(titles).forEach(function(title) {
            title.classList.toggle("dark-mode-bg");
        });
        Array.from(selects).forEach(function(select) {
            select.classList.toggle("dark-mode-bg");
        });
    } catch (error) {}

    try {
        bottom_sec.classList.toggle("dark-mode-bg2");
        sub_topic.classList.toggle("dark-mode-bg");
        sub_topic.classList.toggle("dark-mode-border");
    } catch (error) {}

    Array.from(sub_topic_divs).forEach(function(div) {
        div.classList.toggle("dark-mode-border");
    });
}

// Get references to the button and the section
const toggleButton = document.getElementById("showHideFav");
const favouritesSection = document.querySelector(".favourites-section");

// Add a click event listener to the button
toggleButton.addEventListener("click", () => {
    // Toggle the visibility of the section
    if (
        favouritesSection.style.display === "none" ||
        favouritesSection.style.display === ""
    ) {
        favouritesSection.style.display = "block";
    } else {
        favouritesSection.style.display = "none";
    }
});