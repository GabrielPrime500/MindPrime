const button = document.querySelector('.menu-btn');
const navigation = document.querySelector('.main-nav');

if (button) {
    button.addEventListener('click', () => {
        navigation.classList.toggle('open');
    });
}
