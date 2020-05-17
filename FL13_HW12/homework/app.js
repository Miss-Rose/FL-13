const width = 200;
function createForm() {
    const form = document.createElement('div');
//Title
    const titleLabel = document.createElement('label');
    titleLabel.innerHTML = 'Name';
    titleLabel.setAttribute('for', 'title');
    const titleInput = document.createElement('input');
    titleInput.setAttribute('id', 'title');
    titleInput.setAttribute('type', 'text');
    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.innerHTML += '<br><br>';
//Author
    const authorLabel = document.createElement('label');
    authorLabel.innerHTML = 'Author';
    authorLabel.setAttribute('for', 'author');
    const authorInput = document.createElement('input');
    authorInput.setAttribute('id', 'author');
    authorInput.setAttribute('type', 'text');
    form.appendChild(authorLabel);
    form.appendChild(authorInput);
    form.innerHTML += '<br><br>';
//Plot
    const plotLabel = document.createElement('label');
    plotLabel.innerHTML = 'Plot';
    plotLabel.setAttribute('for', 'plot');
    const plotInput = document.createElement('input');
    plotInput.setAttribute('id', 'plot');
    plotInput.setAttribute('type', 'text');
    form.appendChild(plotLabel);
    form.appendChild(plotInput);
    form.innerHTML += '<br><br>';
//Url
    const urlLabel = document.createElement('label');
    urlLabel.innerHTML = 'URL';
    urlLabel.setAttribute('for', 'url');
    const urlInput = document.createElement('input');
    urlInput.setAttribute('id', 'url');
    urlInput.setAttribute('type', 'text');
    form.appendChild(urlLabel);
    form.appendChild(urlInput);
    form.innerHTML += '<br><br>';
     return form;
}
function addBook(){
    container_list.innerHTML = '';
    let listBook = JSON.parse(localStorage.getItem('booksData'));
    listBook.forEach(({id, title}) => {
        let div = document.createElement('div');
        div.id = id;
        container_list.appendChild(div);
        let idishka = document.createElement('span');
        let pTitle = document.createElement('span');
        pTitle.innerHTML = title + '   ';
        idishka.innerHTML = id+'. ';
        div.appendChild(idishka);
        div.appendChild(pTitle);
        let edit = document.createElement('button');
        edit.innerHTML = 'Edit';
        edit.onclick = () => {
            location.hash = `id=${id}#edit`;
            rightMenu.innerHTML = '';
            const fe = createForm();
            rightMenu.appendChild(fe);
            const rightEdit = document.createElement('button');
            rightEdit.innerText='Edit';
            rightMenu.appendChild(rightEdit);
            let oldMas = JSON.parse(localStorage.getItem('booksData'));
            console.log('old',oldMas);
            rightEdit.onclick = () => {
                const obj = {
                    id: id,
                    title:document.getElementById('title').value,
                    author: document.getElementById('author').value,
                    plot: document.getElementById('plot').value,
                    url: document.getElementById('url').value
                };
                oldMas.splice(id-1, 1, obj);
                console.log('new Old',oldMas);
                console.log('obj',obj);
                localStorage.setItem('booksData', JSON.stringify(oldMas));
                addBook();
            };
        };
        div.appendChild(edit);
        pTitle.onclick = () => {
            location.hash = `id=${id}#preview`;
            rightMenu.innerHTML = '';
            let list = JSON.parse(localStorage.getItem('booksData'))[id-1];
            console.log('li', list);
            rightMenu.innerHTML = '<div><strong>Name</strong></div>';
            rightMenu.innerHTML += `<div>${list.title}</div>`;
            rightMenu.innerHTML += '<div><strong>Author</strong></div>';
            rightMenu.innerHTML += `<div>${list.author}</div>`;
            rightMenu.innerHTML += '<div><strong>Plot</strong></div>';
            rightMenu.innerHTML += `<div>${list.plot}</div>`;
            rightMenu.innerHTML += '<div><strong>Image</strong></div>';
            console.log(list.url);
            let img = new Image(width);
            img.src = decodeURI(`${list.url}`);
            img.setAttribute('alt', 'book_image');

            rightMenu.appendChild(img);
            console.log(img);
        };
    });
}
const root = document.getElementById('root');
const container = document.createElement('div');
container.className = 'container';
root.appendChild(container);
const lefMenu = document.createElement('div');
const rightMenu = document.createElement('div');
const container_list = document.createElement('div');
container.appendChild(lefMenu);
container.appendChild(rightMenu);
const addBtnLeft = document.createElement('button');
addBtnLeft.innerText = 'Add new';
lefMenu.appendChild(container_list);
lefMenu.appendChild(addBtnLeft);
addBtnLeft.onclick = () => {
    location.hash = `add`;
    rightMenu.innerHTML = '';
    let f = createForm();
    rightMenu.appendChild(f);
    const rightAdd = document.createElement('button');
    rightAdd.innerText='Add';
    rightMenu.appendChild(rightAdd);
    let oldMas = JSON.parse(localStorage.getItem('booksData'));
    console.log('old',oldMas);
    rightAdd.onclick = () => {
        const obj = {
            id: oldMas.length+1,
            title:document.getElementById('title').value,
            author: document.getElementById('author').value,
            plot: document.getElementById('plot').value,
            url: document.getElementById('url').value
        };
        oldMas.push(obj);
        console.log('new Old',oldMas);
        console.log('obj',obj);
        localStorage.setItem('booksData', JSON.stringify(oldMas));
        addBook();
    };
};
addBook();
