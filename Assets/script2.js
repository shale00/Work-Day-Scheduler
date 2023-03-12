var currentHour = dayjs().hour() //gets current hour
var rootEl = $('#root');
var timeBlocks = rootEl.children('div');

timeBlocks.each(function(i) {
    var hourValue = parseInt(timeBlocks[i].id.split('-')[1]);
    if (hourValue < currentHour) {
        $(timeBlocks[i]).addClass("past");
    } if (hourValue == currentHour) {
        $(timeBlocks[i]).addClass("present");
    } if (hourValue > currentHour) {
        $(timeBlocks[i]).addClass("future");
}});
  




$(document).ready(function(){
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
})

