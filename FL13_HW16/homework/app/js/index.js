const baseUrl = 'http://localhost:3000';
const appContainer = document.getElementById('app-container');
let xhr = new XMLHttpRequest();
const f = document.createElement('form');
const input1 = document.createElement('input');
input1.placeholder = 'Name';
const input2 = document.createElement('input');
input2.placeholder = 'Full Name';
f.appendChild(input1);
f.appendChild(input2);
appContainer.appendChild(f);
const button = document.createElement('button');
button.innerText = 'Add New User';
button.onclick = () => postData();
f.appendChild(button);
input1.setAttribute('name', 'name');
input2.setAttribute('name', 'username');
f.setAttribute('name', 'person');
const form2 = document.createElement('form');
appContainer.appendChild(form2);
const list = document.createElement('table');
form2.appendChild(list);
const bodyT = document.createElement('body');
list.appendChild(bodyT);

function createRow({id, name, username}) {
    const d = document.createElement('tr');
    const userID = document.createElement('td');
    const userName = document.createElement('td');
    const fullName = document.createElement('td');
    const groupBtn = document.createElement('td');
    d.appendChild(userID);
    d.appendChild(userName);
    d.appendChild(fullName);
    d.appendChild(groupBtn);
    bodyT.appendChild(d);
    const updateBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    const inputName = document.createElement('input');
    const inputFullName = document.createElement('input');
    inputName.setAttribute('readonly', null);
    inputFullName.setAttribute('readonly', null);
    userName.appendChild(inputName);
    fullName.appendChild(inputFullName);
    userID.innerText = ' '+id;
    inputName.value = ' ' + name;
    inputFullName.value = ' ' + username;
    userID.className = 'idStyle';
    updateBtn.innerText = 'Update';
    deleteBtn.innerText = 'Delete';
    deleteBtn.onclick = () => {
      deleteItem(id);
    };
    updateBtn.onclick = () => {
       updateItem(id);
    };
    groupBtn.appendChild(updateBtn);
    groupBtn.appendChild(deleteBtn);
}
function postData() {
    let json = JSON.stringify({
        name: input1.value,
        username: input2.value
    });
    console.log(json);
    xhr.open('POST', 'http://localhost:3000/users');
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(json);
}

function updateItem(id) {
    let item = JSON.stringify({
        name: input1.value,
        username: input2.value
    });
    xhr.open('PUT', `http://localhost:3000/users/${id}`);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(item);
}

function deleteItem(id) {
    xhr.open('DELETE', `http://localhost:3000/users/${id}`);
    xhr.setRequestHeader('Authorization', `admin`);
    xhr.send();
}
const hundred = 200;
function getData() {
    xhr.open('GET', 'http://localhost:3000/users');
    xhr.send();
    xhr.onload = function () {
        if (xhr.status !== hundred) {
            alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
        } else {
            JSON.parse(xhr.response).forEach(elem => {
                createRow(elem);
            });
        }
    };
}
getData();