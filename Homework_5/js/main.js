let list = document.querySelector('.list');
let inputItem = document.querySelector('.inputItem');
let addItemButton = document.querySelector('.addItemButton');
let addItemSection = document.querySelector('.addItem');
let filterNeedButton = document.querySelector('.filterNeed');
let filterDoneButton = document.querySelector('.filterDone');
let countNeed = document.querySelector('.countNeed');
let countNeedValue = 0;
let countDone = document.querySelector('.countDone');
let countDoneValue = 0;

// get todoList from local storage

function getList () {
    let toDoArray = localStorage.getItem('todo');
    return toDoArray !== null ? JSON.parse(toDoArray) : [];
}

// add item with add button

addItemButton.addEventListener('click', () => {
    if (inputItem.value.trim().length > 0) {
        createNewItem(inputItem.value);
        inputItem.value = '';
    }
});

// add item with enter

inputItem.addEventListener('keypress', (e) =>  {
    if (e.keyCode === 13 && inputItem.value.trim().length > 0) {
        createNewItem(inputItem.value);
        inputItem.value = '';
    }
});

// add item function

function addItem (item) {
    let newItem = document.createElement('li');
    if (item.isDone) {
        newItem.innerHTML = `<span class="text">${item.text}</span><span class="controlItem"></i><i class="fas fa-undo return"></i><i class="far fa-trash-alt remove"></i></span>`;
        newItem.classList.add('check', 'visibility');
        countDoneValue++
    } else {
        newItem.innerHTML = `<span class="text">${item.text}</span><span class="controlItem"></i><i class="far fa-check-circle done"></i><i class="far fa-trash-alt remove"></i></span>`;
        countNeedValue++;
    }
    list.appendChild(newItem);
}

function createNewItem (value) {
    let listArray = getList();
    let item = {
        text: value,
        isDone: false,
    };

    addItem(item);
    listArray.push(item);
    localStorage.setItem('todo', JSON.stringify(listArray));
    changeCount();
}

// show items from local storage

function showStorage () {
    let listArray = getList();
    listArray.forEach((item) => {
        addItem(item);
    });
    changeCount();
}

// edit, done, remove item

list.addEventListener('click', (e) => {
    if (e.target.classList.contains('done')) {

        let itemParent = e.target.parentElement.parentElement;
        itemParent.classList.add('check', 'visibility');

        // replace icon done to icon return
        let returnButton = document.createElement('i');
        returnButton.classList.add('fas', 'fa-undo', 'return');
        e.target.parentElement.replaceChild(returnButton, e.target);

        // count
        countDoneValue++;
        countNeedValue--;
        changeCount();

        // found index of li done element and change in local storage
        let listArray = getList();
        let index = 0;
        while( (itemParent = itemParent.previousSibling) != null ) {
            index++;
        }
        listArray[index].isDone = true;
        localStorage.setItem('todo', JSON.stringify(listArray));
    } else if (e.target.classList.contains('remove')) {

        let itemParent = e.target.parentElement.parentElement;

        // found index of li remove element and remove it from local storage
        let listArray = getList();
        let index = 0;
        let temp = itemParent;
        while( (temp = temp.previousSibling) != null ) {
            index++;
        }
        listArray.splice(index, 1);
        localStorage.setItem('todo', JSON.stringify(listArray));

        // count
        itemParent.classList.contains('check') ? countDoneValue-- : countNeedValue--;
        changeCount();

        // remove from DOM
        list.removeChild(itemParent);
    } else if (e.target.classList.contains('return')) {

        let itemParent = e.target.parentElement.parentElement;
        itemParent.classList.add('visibility');
        itemParent.classList.remove('check');

        // replace icon return to icon done
        let returnButton = document.createElement('i');
        returnButton.classList.add('far', 'fa-check-circle', 'done');
        e.target.parentElement.replaceChild(returnButton, e.target);

        // count
        countDoneValue--;
        countNeedValue++;
        changeCount();

        // found index of li done element and change in local storage
        let listArray = getList();
        let index = 0;
        while( (itemParent = itemParent.previousSibling) != null ) {
            index++;
        }
        listArray[index].isDone = false;
        localStorage.setItem('todo', JSON.stringify(listArray));
    }

});

// filter items, what need to do

function needToDo () {
    if (!filterNeedButton.classList.contains('active')) {
        Array.prototype.slice.call(list.children).forEach((item) => {
            if (item.classList.contains('check')) {
                item.classList.add('visibility')
            } else {
                item.classList.remove('visibility')
            }
        });
        addItemSection.classList.remove('visibility');
        filterNeedButton.classList.add('active');
        filterDoneButton.classList.remove('active');
    }
}

filterNeedButton.addEventListener('click', needToDo);

// filter items, what is done

filterDoneButton.addEventListener('click', () => {
    if (!filterDoneButton.classList.contains('active')) {
        Array.prototype.slice.call(list.children).forEach((item) => {
            if (!item.classList.contains('check')) {
                item.classList.add('visibility')
            } else {
                item.classList.remove('visibility')
            }
        });
        addItemSection.classList.add('visibility');
        filterNeedButton.classList.remove('active');
        filterDoneButton.classList.add('active');
    }
});

function changeCount () {
    countDone.innerHTML = countDoneValue;
    countNeed.innerHTML = countNeedValue;
}

showStorage();
needToDo();