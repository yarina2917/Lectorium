let container = document.querySelector('.tags-container');
let containerCoord = container.getBoundingClientRect();

// create element with random x ang y coordinate

function createElem () {
    let elem = document.createElement('div');
    elem.classList.add('elem');
    let text = document.createElement('span');
    text.classList.add('text', 'noselect');
    text.innerHTML = 'Winter';
    let remove = document.createElement('span');
    remove.classList.add('remove', 'hidden');
    remove.innerHTML = 'X';
    elem.appendChild(text);
    elem.appendChild(remove);
    container.appendChild(elem);

    let x = Math.random() * (container.clientWidth - elem.clientWidth);
    let y = Math.random() * (container.clientHeight - elem.clientHeight);
    elem.style.left = x + 'px';
    elem.style.top = y + 'px';
}

// hide removeBtn in active element and delete active class from this element
// if removeBtn has class removeBtnLeft, shift element to the removeBtn width

function changeActiveElem () {
    let removeBtn = document.querySelector('.remove:not(.hidden)');
    if (removeBtn) {
        let el = removeBtn.parentElement;
        let elCoord = el.getBoundingClientRect();
        if (removeBtn.classList.contains('removeBtnLeft')) {
            el.style.left = elCoord.left + removeBtn.clientWidth - containerCoord.left + 'px';
        }
        removeBtn.classList.add('hidden');
        el.classList.remove('active');
    }
}

// if click on the element with class text, show removeBtn, add class active to it,
// if it is close to the right edge, removeBtn move to the left side of element
// and shift active element to the removeBtn width

container.addEventListener('click', (e) => {
    if (e.target === container) {
        changeActiveElem();
    } else if (e.target.classList.contains('text') && !e.target.parentElement.classList.contains('active')) {
        changeActiveElem();
        let el = e.target.parentElement;
        let removeBtn = el.lastElementChild;
        removeBtn.classList.remove('hidden');
        el.classList.add('active');

        let elCoord = el.getBoundingClientRect();
        if (elCoord.right >= containerCoord.right) {
            removeBtn.classList.add('removeBtnLeft');
            el.style.left = elCoord.left - removeBtn.clientWidth - containerCoord.left + 'px';
        }
    } else if (e.target.classList.contains('remove')) {
        container.removeChild(e.target.parentElement);
    }
});

// function for mousemove event
// if coordinates of the element go beyond, left/top coordinates of the element = container edge coordinates
// if it is close to the right edge, removeBtn move to the left side of the element

function moveAt (e, el) {
    let removeBtn = el.lastElementChild;
    let left = e.pageX - el.offsetWidth / 2;
    if (left < containerCoord.left) {
        left = containerCoord.left;
    } else if (left + el.clientWidth >= containerCoord.right) {
        removeBtn.classList.add('removeBtnLeft');
        left = left - removeBtn.clientWidth;
    } else if (left + el.clientWidth <= containerCoord.right) {
        removeBtn.classList.remove('removeBtnLeft');
    }
    if (left + el.clientWidth > containerCoord.right) {
        left = containerCoord.right - el.clientWidth;
    }
    el.style.left = left - containerCoord.left + 'px';

    let top = e.pageY - el.offsetHeight / 2;
    if (top < containerCoord.top) {
        top = containerCoord.top;
    } else if (top + el.clientHeight > containerCoord.bottom) {
        top = containerCoord.bottom - el.clientHeight;
    }
    el.style.top = top - containerCoord.top + 'px';
}

// drag n drop

container.addEventListener('mousedown', (e) => {
    let el = e.target.parentElement;
    if (el.classList.contains('elem') && el.classList.contains('active')) {
        document.onmousemove = function (e) {
            moveAt(e, el);
        };
        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
        };
    }
});

createElem();
createElem();
createElem();


