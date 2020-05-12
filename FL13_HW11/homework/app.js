const data = [
  {
    'folder': true,
    'title': 'Pictures',
    'children': [
      {
        'title': 'logo.png'
      },
      {
        'folder': true,
        'title': 'Vacations',
        'children': [
          {
            'title': 'spain.jpeg'
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Desktop',
    'children': [
      {
        'folder': true,
        'title': 'screenshots',
        'children': null
      }
    ]
  },
  {
    'folder': true,
    'title': 'Downloads',
    'children': [
      {
        'folder': true,
        'title': 'JS',
        'children': null
      },
      {
        'title': 'nvm-setup.exe'
      },
      {
        'title': 'node.exe'
      }
    ]
  },
  {
    'title': 'credentials.txt'
  }
];

const rootNode = document.getElementById('root');

function createMenu() {
  const menu = document.createElement('div');
  const del = document.createElement('div');
  const edit = document.createElement('div');
  const textD = document.createTextNode('Delete');
  const textE = document.createTextNode('Rename');
  del.appendChild(textD);
  edit.appendChild(textE);
  menu.appendChild(edit);
  menu.appendChild(del);
  menu.classList.add('menu');
  return menu;
}

function folderListener(div, icon){
  const menu = createMenu();
  div.classList.toggle('folder');

  div.addEventListener('click', function() {

    div.classList.toggle('open');
    if(div.classList.contains('open')){
      icon.innerHTML = 'folder_open';
    } else {
      icon.innerHTML = 'folder';
    }
  });
  div.addEventListener('contextmenu', function () {

    div.appendChild(menu);
    console.log(menu);
    if(menu.classList.contains('open')){
      menu.classList.toggle('close');
    }else {
      menu.classList.toggle('open');
    }
  })
}

function fileListener(div) {
  const menu = createMenu();
  div.addEventListener('contextmenu', function () {
    div.appendChild(menu);
    console.log(menu);
    if(menu.classList.contains('open')){
      menu.classList.toggle('close');
    }else {
      menu.classList.toggle('open');

    }
  });
}

function createListFolder(myData, page) {
  document.body.oncontextmenu = function () {
    return false;
  };
  const ul = document.createElement('ul');
  for(let elem of myData){
    const li = document.createElement('li');
    const icon = document.createElement('i');
    icon.classList.add('material-icons');
    const div = document.createElement('div');
    const text = document.createTextNode(elem.title);
    let newLi = ul.appendChild(li);
    div.appendChild(icon);
    div.appendChild(text);
    newLi.appendChild(div);
    if(elem.folder){
      const i = document.createTextNode('folder');
      icon.appendChild(i);
      folderListener(div, icon);

      if(elem.children){
        createListFolder(elem.children, li);
      }else{
        const msg = document.createElement('i');
        msg.innerHTML = 'Folder is empty';
        msg.classList.add('empty');
        li.appendChild(msg);
      }
    }else {
      const i = document.createTextNode('insert_drive_file');
      icon.classList.add('file');
      icon.appendChild(i);
      fileListener(div);
    }

  }
  page.appendChild(ul);
}
createListFolder(data, rootNode);