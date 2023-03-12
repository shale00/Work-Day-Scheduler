// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  $('.saveBtn').on('click', function(){
    var id = $(this).parent().attr('id');
    var userText = $(this).siblings('.description').val();
    localStorage.setItem(id, userText);
    });

  $('.description').each(function(){
    var id = $(this).parent().attr('id');
    var savedText = localStorage.getItem(id);
    if (savedText !== null) {
        $(this).val(savedText);
    }
  });
 
});

//Step 1
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
function displayCurrentTime(){
  var time = dayjs().format('dddd, MMMM D, YYYY h:mm:ss A');
  $('#currentDay').text(time);
}
displayCurrentTime();
setInterval(displayCurrentTime,1000);


//Step 2
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// added in html

//Step 3
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

//Get current hour in dayjs
//Create a for loop with an if statement comparing current hour to each time block hour
//if #ID < currentHour, .addClass(past); if #ID = currentHour.... ect.

var currentHour = dayjs().hour() //gets current hour
var rootEl = $('#root');
var timeBlocks = rootEl.children('div');

for (let i = 0; i < timeBlocks.length; i++) {
  var hourValue = parseInt(timeBlocks[i].id.split('-')[1]);
  if (hourValue < currentHour) {
    $(timeBlocks[i]).addClass("past");
  } if (hourValue == currentHour) {
    $(timeBlocks[i]).addClass("present");
  } if (hourValue > currentHour) {
    $(timeBlocks[i]).addClass("future");
}
}

//Step 4
// WHEN I click into a timeblock
// THEN I can enter an event

//this step was working with the starter code

//Step 5
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

// when I click a save btn, I want to get the ID of the timeBlock to save the user input in localStorage

// saveBtn.on('click', '#timeBlock', function (event) {
  
//   var saveText = {
//     hour: parseInt(timeBlocks.id.split('-')[1]),
//     text: userInput.value
//   };

//   var savedInput = localStorage.getItem('savedInput');
//   savedInput = JSON.parse(savedInput);

//   savedInput.push(saveText);
//   var newInput = JSON.stringify(savedInput);
//   localStorage.setItem("savedInput", newInput);

//   } )

// var saveBtn = $('.saveBtn');
// var userInput = $('.description')

// timeBlocks.on('click', '.saveBtn', saveText);

// function saveText (event) {
//   event.preventDefault();
  
  
//   var id = $(this).parent().attr('id');
//   var userText = $(this).prev().val();

//   var savedInput = {
//     hour: id,
//     savedText: userText
//   };
//   console.log(savedInput);

  // localStorage.setItem('storedInput', JSON.stringify(savedInput));
  // renderSavedInput();

//   var storageItems = [];

//   storageItems.push(savedInput);
//   storageItems = storageItems.concat(JSON.parse(localStorage.getItem('storageItems' )||'[]'));
//   console.log(storageItems);

//   localStorage.setItem("storageItems", JSON.stringify(storageItems));

// }


//Step 6
// WHEN I refresh the page
// THEN the saved events persist
