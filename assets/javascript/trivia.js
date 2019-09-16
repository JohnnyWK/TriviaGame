$(document).ready(function () {


    
    var correct = 0;
    var incorrect = 0;
    var time = 60;
    var intervalId;

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1200);
    }

    function decrement() {
        time--;
        $("#timer").text(time);

        if (time === 0) {
            $("form").css("display", "none");
            $("#gameOver").css("display", "block");
            $("#correctCounter").text(correct);
            $("#incorrectCounter").text(incorrect);
        }
    }

    $("#start").on("click", function () {
        $(this).css("display", "none");
        $("form").css("display", "block");
        run();

    })

    $("#submit").on("click", function (event) {
        event.preventDefault();
        $("form").css("display", "none");
        $("#gameOver").css("display", "block");
        $("#correctCounter").text(correct);
        $("#incorrectCounter").text(incorrect);
        
        
    })

    $("input").on("click", function(){
        var inputValue = $(this);
        if (inputValue.val() === "incorrect"){
            incorrect++;
            $(this).parents("#question").nextAll();
        }
        else {
            correct++;
            $(this).parents("#question").nextAll();''            
        }
       
        
    })





})