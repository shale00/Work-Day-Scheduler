// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  //Save textarea for corresponding timeblock to localStorage when save button is clicked
  $('.saveBtn').on('click', function(){
    var id = $(this).parent().attr('id');
    var userText = $(this).siblings('.description').val();
    localStorage.setItem(id, userText);
    });

  //If there is a value in localStorage for the respective ID, display savedText after refresh   
  $('.description').each(function(){
    var id = $(this).parent().attr('id');
    var savedText = localStorage.getItem(id);
    if (savedText !== null) {
        $(this).val(savedText);
    }
  });
});

//Display the current time at the top of the calendar
function displayCurrentTime(){
  var time = dayjs().format('dddd, MMMM D, YYYY h:mm:ss A');
  $('#currentDay').text(time);
};
displayCurrentTime();
//Refresh the time every second
setInterval(displayCurrentTime,1000);

//Get current hour and create variable for each timeblock div
var currentHour = dayjs().hour() //gets current hour
var rootEl = $('#root');
var timeBlocks = rootEl.children('div');

//For each timeblock, compare the hour to the current hour and add the 
//  corresponding color-coded css class
timeBlocks.each(function(i) {
  var hourValue = parseInt(timeBlocks[i].id.split('-')[1]);
  if (hourValue < currentHour) {
      $(timeBlocks[i]).addClass("past");
  } if (hourValue == currentHour) {
      $(timeBlocks[i]).addClass("present");
  } if (hourValue > currentHour) {
      $(timeBlocks[i]).addClass("future");
}});