$(document).ready(function () {
    //display current day & time.
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    function hourTracker() {
        //get current number of hours.
        var currentHour = moment().hour();

        // loop over time blocks
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log( blockHour, currentHour)

   
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }

            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }

            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    hourTracker();
})