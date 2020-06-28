const $list = $(".list");
const $input = $("#add-input");
const $add = $("#add-submit");
addStyles();
const todos = [
  {
    text: "Buy milk",
    done: false
  },
  {
    text: "Play with dog",
    done: true
  }
];
localStorage.setItem('todos', JSON.stringify(todos));
let myData = JSON.parse(localStorage.getItem('todos'));
function addTask () {
  let inputValue = $input[0].value.trim();
  if(inputValue.length > 1) {
    let obj = {
      text: inputValue,
      done: false
    };
    myData.push(obj);
    $('form')[0].reset();
    draw(myData)
  }
};
function remove(id) {
  myData.splice(id,1);
  draw(myData);
}
function complete(id) {
 myData[id].done = !myData[id].done;
 draw(myData);
}
function draw(array) {
  $list.empty();
  console.log(array);
  if(array) {
    array.forEach(e => {
       let isDone = e.done ? 'done' : '';
      $('.list').append( `
            <li class="item">
            <span class="item-text ${isDone}">${e.text}</span>
            <button class="item-remove">Remove</button>
            </li>
            `);
    });
  }
  addStyles();
}
$(document).click(function (e) {
  if ($(e.target).attr('id') === 'add-submit') {
    e.preventDefault();
    addTask();
    localStorage.setItem("todos", JSON.stringify(myData));
  }else if ($(e.target).attr('class') === 'item-remove') {
    const clickItem = $(e.target).parent().find('.item-text')[0].innerText;
    let index = myData.findIndex(e => e.text === clickItem);
    remove(index);
    localStorage.setItem("todos", JSON.stringify(myData));
  }else if($(e.target).attr('class') === 'item-text '
      || $(e.target).attr('class') === 'item-text done'){
    const clickItem = $(e.target).parent().find('.item-text')[0].innerText;
    let index = myData.findIndex(e => e.text === clickItem);
    complete(index);
    localStorage.setItem("todos", JSON.stringify(myData));
  }
});
$(document).ready(function(){
  $($input).on("keyup", function() {
    let value = $(this).val().toLowerCase();
    $(".list .item").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

function addStyles () {
  $('body').css({
    'display': 'grid',
    'justifyContent' : 'center',
    'backgroundImage': 'linear-gradient(120deg,#4868b0,#31fb8b)',
    'backgroundRepeat': 'no-repeat',
    'height': '800px',
    'color': 'white'
  });
  $add.css({
    'backgroundColor': '#ffc107',
    'paddingRight': '10px',
    'paddingLeft': '10px',
    'color': '#fff',
    'borderRadius': '15px'
  });
$('.item').css({
  'display': 'grid',
  'gridTemplateColumns': '85% 15%',
  'alignItems' : 'center'
  });
  $('.item-remove').css({
    'color': '#fff',
    'borderRadius': '15px',
    'backgroundColor': 'lightgreen'
  }).mouseenter(function(){
    $(this).css({
      'backgroundColor': 'yellow',
      'color': 'black',
      'cursor': 'pointer'
    });
  }).mouseleave(function () {
    $(this).css({
      'backgroundColor': 'lightgreen',
      'color': 'white'
    });
  });
  $('li').css({
      'cursor': 'pointer',
      'backgroundColor': '#ffffff66',
      'padding': '10px',
      'color': 'black'
    });
  $add.mouseenter(function(){
    $(this).css({
      'backgroundColor': '#FF0034',
      'color': 'black',
      'cursor': 'pointer'
    });
  }).mouseleave(function () {
    $(this).css({
      'backgroundColor': '#ffc107',
      'color': 'white'
    });
  })
};