let container = document.querySelector('.item-container');
let itemList = document.querySelectorAll('.item');
let item = document.querySelector('.item');
let itemWidth = item.clientWidth;
let imgList = document.querySelectorAll('.img');
let countItems = itemList.length - 1;
let leftBtn = document.querySelector('.leftBtn');
let rightBtn = document.querySelector('.rightBtn');
let circleDiv = document.querySelector('.circleDiv');
let circles;

container.style.transform = `translateX(${-(itemWidth)}px)`;

// add ondragstart on img and id to parent element

Array.prototype.forEach.call(imgList, (img, i) => {
    img.ondragstart = function() {
        return false;
    };
    img.parentElement.setAttribute('data-id', i)
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

// remove active class from circle active and item active

function removeActiveClasses () {
    let circleActive = document.querySelector('.circleActive');
    circleActive.classList.remove('circleActive');
    let activeItem = document.querySelector('.activeItem');
    activeItem.classList.remove('activeItem');
    return +activeItem.getAttribute('data-id');
}

// change item on circle click

circleDiv.addEventListener('click', (e) => {
    if (e.target.classList.contains('circle')) {
        removeActiveClasses();
        let id = +e.target.getAttribute('data-id');
        itemList[id].classList.add('activeItem');
        e.target.classList.add('circleActive');
        container.style.transform = `translateX(${-((id + 1) * itemWidth)}px)`;
    }
});

// change item on right arrow click

rightBtn.addEventListener('click', () => {
    toRightItem(removeActiveClasses());
});

function toRightItem (id, currentX) {
    if (id === countItems + 1) {
        itemList[0].classList.add('activeItem');
        circles[0].classList.add('circleActive');
        animate(id, currentX, 'rightLast');
    } else {
        itemList[id].classList.add('activeItem');
        circles[id].classList.add('circleActive');
        animate(id, currentX, 'right');
    }
}

// change item on left arrow click

leftBtn.addEventListener('click', () => {
    toLeftItem(removeActiveClasses());
});

function toLeftItem (id, currentX) {
    if (id === 1) {
        itemList[countItems].classList.add('activeItem');
        circles[countItems].classList.add('circleActive');
        animate(id, currentX, 'leftLast');
    } else {
        itemList[id - 2].classList.add('activeItem');
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
    let id = +document.querySelector('.activeItem').getAttribute('data-id');

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
            removeActiveClasses();
            toRightItem(id, currentX);
        } else if (currentX + 20 < itemWidth * id) {
            removeActiveClasses();
            toLeftItem(id, currentX);
        } else {
            container.style.transform = `translateX(${-(itemWidth * id)}px)`;
        }

        container.onmousemove = null;
        document.onmouseup = null;
    };
});