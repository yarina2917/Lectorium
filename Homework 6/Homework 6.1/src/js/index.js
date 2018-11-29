let container = document.querySelector('.item-container');
let itemList = document.querySelectorAll('.item');
let itemWidth = itemList[0].clientWidth;
let imgList = document.querySelectorAll('.img');
let countItems = itemList.length - 1;
let leftBtn = document.querySelector('.leftBtn');
let rightBtn = document.querySelector('.rightBtn');
let circleDiv = document.querySelector('.circleDiv');
let circles;

container.style.transform = `translateX(${-(itemWidth)}px)`;

// add ondragstart on img

Array.prototype.forEach.call(imgList, (img, i) => {
    img.ondragstart = function() {
        return false;
    };
});

// create circle navigation

function createCircleNavigation () {
    for (let i = 0; i < itemList.length; i++) {
        let circle = document.createElement('span');
        circle.classList.add('circle');
        circle.setAttribute('data-id', i);
        circleDiv.appendChild(circle);
    }
    circles = document.querySelectorAll('.circle');
    circles[0].classList.add('circleActive');
}

createCircleNavigation();

// remove active class from circle active

function removeActiveClass () {
    let circleActive = document.querySelector('.circleActive');
    circleActive.classList.remove('circleActive');
    return +circleActive.getAttribute('data-id') + 1;
}

// change item on circle click

circleDiv.addEventListener('click', (e) => {
    if (e.target.classList.contains('circle')) {
        removeActiveClass();
        let id = +e.target.getAttribute('data-id');
        e.target.classList.add('circleActive');
        container.style.transform = `translateX(${-((id + 1) * itemWidth)}px)`;
    }
});

// change item on right arrow click

rightBtn.addEventListener('click', () => {
    toRightItem(removeActiveClass());
});

function toRightItem (id, currentX) {
    if (id === countItems + 1) {
        circles[0].classList.add('circleActive');
        animate(id, currentX, 'rightLast');
    } else {
        circles[id].classList.add('circleActive');
        animate(id, currentX, 'right');
    }
}

// change item on left arrow click

leftBtn.addEventListener('click', () => {
    toLeftItem(removeActiveClass());
});

function toLeftItem (id, currentX) {
    if (id === 1) {
        circles[countItems].classList.add('circleActive');
        animate(id, currentX, 'leftLast');
    } else {
        circles[id - 2].classList.add('circleActive');
        animate(id, currentX, 'left');
    }
}

// animate item's move

function animate(id, currentX, direction) {
    let timerId;
    let width = Math.abs(currentX) || itemWidth * id;
    if (direction === 'right' || direction === 'rightLast') {
        timerId = setInterval(() => {
            if (width >= itemWidth * (id + 1)) {
                clearInterval(timerId);
                if (direction === 'rightLast') {
                    container.style.transform = `translateX(${-itemWidth}px)`;
                }
            } else {
                width += itemWidth / 10;
                if (width > itemWidth * (id + 1)) {
                    width = itemWidth * (id + 1);
                }
                container.style.transform = `translateX(${-width}px)`
            }
        }, 40);
    } else {
        timerId = setInterval(() => {
            if (width <= itemWidth * (id - 1)) {
                clearInterval(timerId);
                if (direction === 'leftLast') {
                    container.style.transform = `translateX(${-(itemWidth * (countItems + 1))}px)`;
                }
            } else {
                width -= itemWidth / 10;
                if (width < itemWidth * (id - 1)) {
                    width = itemWidth * (id - 1);
                }
                container.style.transform = `translateX(${-width}px)`;
            }
        }, 40);
    }
}

// Drag'n'Drop

container.addEventListener('mousedown', (e) => {
    let start = e.pageX;
    let id = +document.querySelector('.circleActive').getAttribute('data-id') + 1;

    container.onmousemove = function (e) {
        if (start > e.pageX) {
            container.style.transform = `translateX(${-(itemWidth * id + (start - e.pageX))}px)`;
        } else {
            container.style.transform = `translateX(${-(itemWidth * id - (e.pageX - start))}px)`;
        }
    };
    document.onmouseup = function () {

        // if the shift is small, the active element does not change, else the element changes
        let currentX = +container.style.transform.replace(/\D/g, "");
        if (currentX - 20 > itemWidth * id) {
            removeActiveClass();
            toRightItem(id, currentX);
        } else if (currentX + 20 < itemWidth * id) {
            removeActiveClass();
            toLeftItem(id, currentX);
        } else {
            container.style.transform = `translateX(${-(itemWidth * id)}px)`;
        }

        container.onmousemove = null;
        document.onmouseup = null;
    };
});