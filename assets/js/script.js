    let darkModeOn = false;
    let DarkModeText = document.querySelector('#dark_mode_btn_text');
    let mainSec = document.querySelector('.main')
    let header = document.getElementsByTagName("header")[0];

    function darkMode() {
        if (darkModeOn === false) {
            document.body.classList.remove('light-mode-bg');
            mainSec.classList.remove('light-mode-bg');
            document.body.classList.remove("light-mode-bg2")

            document.body.classList.add("dark-mode-bg");
            mainSec.classList.add('dark-mode-bg');

            DarkModeText.innerHTML = "Light Mode";
            darkModeOn = true;
        } else {
            mainSec.classList.remove('dark-mode-bg');
            document.body.classList.remove("dark-mode-bg");

            document.body.classList.add("light-mode-bg2")
            mainSec.classList.add('light-mode-bg');
            DarkModeText.innerHTML = "Dark Mode";
            darkModeOn = false;
        }
    }