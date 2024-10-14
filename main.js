// open and close menu bar when click
const toggleBtn = document.querySelector('.toggle_btn')
        const toggleBtnIcon = document.querySelector('.toggle_btn i')
        const dropDownMenu = document.querySelector('.dropdown_menu')

        toggleBtn.onclick = function () {
            dropDownMenu.classList.toggle('open')
            const isOpen = dropDownMenu.classList.contains('open')

            toggleBtnIcon.classList = isOpen
            ? 'fa-solid fa-xmark'
            : 'fa-solid fa-bars'
        }


// dark theme

const darkThemeToggle = document.getElementById('dark-theme-toggle');
const darkThemeToggleImg = document.getElementById('dark-theme-toggle-img');


darkThemeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    // darkThemeToggleImg.src = 'sun.png';
    if ( document.body.classList.contains('dark-theme')) {
        darkThemeToggleImg.src = 'sun.png';
    } else {
        darkThemeToggleImg.src = 'moon.png';
    }

});