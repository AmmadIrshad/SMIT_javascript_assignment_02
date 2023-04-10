//01
function addNumber(num) {
    return function(x) {
        return x + num;
    };
}
const addFive = addNumber(5);
console.log(addFive(10));
console.log(addFive(20));
console.log(addFive(30));

//02
const arr = [1, 2, 3, 4, 5];

function searchArray(arr, value) {
    if (arr.length === 0) {
        return false;
    }
    if (arr[0] === value) {
        return true;
    }

    return searchArray(arr.slice(1), value);
}
console.log(searchArray(arr, 3));
console.log(searchArray(arr, 6));

//03
function addNewParagraph(text) {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = text;

    const body = document.querySelector("body");
    body.appendChild(newParagraph);
}
addNewParagraph("Adding a new paragraph to the bottom of the html document");

//04
function addNewListItem(text) {
    const newListItem = document.createElement("li");
    newListItem.textContent = text;

    const unorderedList = document.querySelector("ul");
    unorderedList.appendChild(newListItem);
}
addNewListItem("a new unorderedList item");

//05
function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
}

//06
function saveObjectToLocalStorage(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
}
const myObject_1 = { name: "ammad", age: 21 };
saveObjectToLocalStorage("myObjectKey", myObject_1);

//07
function getObjectFromLocalStorage(key) {
    const objectString = localStorage.getItem(key);
    return JSON.parse(objectString);
}
const myObject = getObjectFromLocalStorage("myObjectKey");
console.log(myObject);

//08
function saveObjectPropertiesToLocalStorage(object) {
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            localStorage.setItem(key, JSON.stringify(object[key]));
        }
    }

    const storedObject = {};
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            storedObject[key] = JSON.parse(localStorage.getItem(key));
        }
    }

    return storedObject;
}
const myObject_a = { name: "ammd", age: 21 };
const storedObject = saveObjectPropertiesToLocalStorage(myObject_a);
console.log(storedObject);