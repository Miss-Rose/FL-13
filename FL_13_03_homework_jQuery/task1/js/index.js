// Example: $('#someId').css({'prop' : 'value', 'prop1' : 'value1', ...});

//body: add padding 30px
$('body').css({"padding": '30px'});
// id title: make align center, remove top margin
$('#title').css({"textAlign": 'center', "marginTop": ''});
// div after header: add double border and padding 20px
$('#header').next("div").css({"border": '2px solid black', "padding": '20px'});
// change color for all h2 and set top margin to 0
$('h2').css({'marginTop': '0'});
// set font size 18px for all .list direct children
$('.list').children().css({"fontSize": '18px'});
// in #list-1
  // show all hidden and not cloned li
 $('#list-1 li:hidden:not(.cloned)').css({"display": ''});
  // hide empty li
$('#list-1 li:empty').css({"display": 'none'});
// in #list-3
  // for all even li set margin-left -20px
$('#list-3 li:even').css({"marginLeft": '20px'});
  // for the first li set any different color
$('#list-3 li:first').css({"color": 'blue'});
  // for all li with index > 5 set color to #ccc
$('#list-3 li:gt(5)').css({"color": '#ccc'});
// for li wich has em add red color
$('li:has(em)').css({"color": "red"});
// for li which contains text 'Buratino' set font weight to bold
$('li:contains(Buratino)').css({"fontWeight": "bold"});
// for b in p which is the only child set font size 36px
$('p').children('b:only-of-type').css({"fontSize": '36px'});
// for em in p which is the last child of type set color to green
$('p').children('em:last-of-type').css({"color": 'green'});

// set width 80px for input with attribute name ended by 'age'
$("input[name$='age']").css({"width": '80px'});
// set width 120px for input with attribute name started by 'my'
$("input[name^='my']").css({"width": '120px'});
// console.log checked checkbox
console.log($("input:checked").val());
// show all images with a cat
$("img[alt*='cat']").css({"display": "inline"});
// wrap every image into the div
$('img').wrap( "<div></div>" );
// for .mbox with index 3 set padding-top 50px
$('.mbox:eq(3)').css({"paddingTop": "50px"});
// for first div wraper for img set float left and border red
$('div > img').first().css({"float": 'left', "border": '1px solid red'});
