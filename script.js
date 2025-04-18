const swiper = new Swiper('.slide-content', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,
});

document.querySelector('.card-character').addEventListener('click', function () {
        this.classList.toggle('flipped');
    });

