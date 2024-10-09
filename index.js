$(".one").on("mousedown", function(){
    $(".one").removeClass("btn");
    $(".one").addClass("pressed");
});

$(".two").on("mousedown", function(){
    $(".two").removeClass("btn");
    $(".two").addClass("pressed");
});

$(".three").on("mousedown", function(){
    $(".three").removeClass("btn");
    $(".three").addClass("pressed");
});

$(".one").on("mouseup", function(){
    $(".one").removeClass("pressed");
    $(".one").addClass("btn");
    if($("div.billboard").hasClass("color-racers")){
        $("div.billboard").removeClass("color-racers");
    } else if($("div.billboard").hasClass("color-ocean")){
        $("div.billboard").removeClass("color-ocean");
    }
    $("div.billboard").addClass("color-spectrum");
});

$(".two").on("mouseup", function(){
    $(".two").removeClass("pressed");
    $(".two").addClass("btn");
    if($("div.billboard").hasClass("color-spectrum")){
        $("div.billboard").removeClass("color-spectrum");
    } else if($("div.billboard").hasClass("color-ocean")){
        $("div.billboard").removeClass("color-ocean");
    }
    $("div.billboard").addClass("color-racers");
});

$(".three").on("mouseup", function(){
    $(".three").removeClass("pressed");
    $(".three").addClass("btn");
    if($("div.billboard").hasClass("color-racers")){
        $("div.billboard").removeClass("color-racers");
    } else if($("div.billboard").hasClass("color-spectrum")){
        $("div.billboard").removeClass("color-spectrum");
    }
    $("div.billboard").addClass("color-ocean");
});
