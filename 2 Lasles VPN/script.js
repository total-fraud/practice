//slider part

let prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    list = document.querySelector('.carousel-list'),
    items = document.querySelectorAll('.carousel-item'),
    itemsCount = items.length,
    slidesToScroll = 2,
    slidesToShow = 3,
    itemWidth = 400,
    movePosition = slidesToScroll * itemWidth,
    position = 0

prev.addEventListener('click', () => {
    position += movePosition;
    setPosition();
    checkBtns();
})

next.addEventListener('click', () => {
    position -= movePosition;
    setPosition();
    checkBtns();
})

const setPosition = () => {
    list.style.transform = `translateX(${position}px)`;
}
const checkBtns = () => {
    prev.disabled = position === 0;
    next.disabled = position <= -(itemsCount - slidesToShow) * (itemWidth + 15);
};
checkBtns();

//map part

let mapPoints = document.querySelectorAll('.map-point');

setInterval(() => {
    let transformedPoint = mapPoints[Math.floor(Math.random() * mapPoints.length)];

    transformedPoint.style.transform = "scale(2, 2)";
    setTimeout(() => {
        transformedPoint.style.transform = "scale(1, 1)";
    }, 1000)

}, 2500);