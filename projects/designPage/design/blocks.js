var marginX = screen.availWidth/4;
var marginY = screen.availHeight/4;
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

$(document).ready(function () {
    if(width<700){
        $('.cover-heading').text("Please view on a larger screen");
    }
    
    setBlock("#n2");
    setBlock("#n4");
    setBlock("#n8");
    setBlock("#n16");
    setBlock("#n32");
    setBlock("#n64");
    setBlock("#n128");
    setBlock("#n256");
    setBlock("#n512");
    setBlock("#n1024");
    setBlock("#n2048");
	setBlock("#n1");
	setBlock("#n3");
	setBlock("#n5");
    setBlock("#n6");
	setBlock("#n7");
	
	$('.block').click(function(){
		var id = this.id;
		//alert(id);
		var src = ($(this).css('background-image'));
		src = src.replace(/url\(["|']?([^"']*)["|']?\)/, "$1");
		//alert(src);
		
		$('.fade').fadeOut(500, function(){
			$('#currentImg').attr('src', src);
			changeDesc(id);
			$('.fade').fadeIn(500);
		});
	});
	
	$('.block').hover(function() {
        $(this).fadeTo("slow",.5);
    },
	function(){
		$(this).fadeTo("slow",1);
	});
});

function setBlock(tile) {
    var x = genX();
    var y = genY();
	var h = genHeight();
	var w = genWidth();
    //var slideLength = 300;
	
    $(tile).css({
        "left": x,
        "top": y,
		"height": h,
		"width": w
     });
}

/*function moveBlock(tile){
	$(tile).animate({
        left: slideLength,
        opacity: '0'
    }, 10000, "linear");
}*/

function genX() {
    var x = Math.floor(Math.random() * (screen.availWidth-marginX))+marginX/2;
	while(x<screen.availWidth/2+marginX && x>screen.availWidth/2-marginX){
		x = Math.floor(Math.random() * (screen.availWidth-marginX))+marginX/2;
	}
	return x;
}

function genY() {
    var y = Math.floor(Math.random() * (screen.availHeight-marginY));
	return y;
}

function genHeight() {
    return Math.floor(Math.random() * (150))+100;
}

function genWidth() {
    return Math.floor(Math.random() * (150))+100;
}

function changeDesc(id){
	var desc;
	if(id==="n2"){
		desc = "Got an A+ on this diagram"
	}
	else if(id==="n4"){
		desc = "Sadly, this event was cancelled"
	}
	else if(id==="n8"){
		desc = "A blend of a sketch, Minecraft, and an actual photo"
	}
	else if(id==="n16"){
		desc = "Chrome extension that improves the high school's website "
	}
	else if(id==="n32"){
		desc = "Banner for an old Minecraft server"
	}
	else if(id==="n64"){
		desc = "Second banner for an old Minecraft server"
	}
	else if(id==="n128"){
		desc = "UN Club poster design"
	}
	else if(id==="n256"){
		desc = "Start window for a HackBCA2014 project"
	}
	else if(id==="n512"){
		desc = "Chart depicting survey of where students would hide during a zombie apocalypse on my school campus"
	}
	else if(id==="n1024"){
		desc = "Assets for a game I helped with at HackRU 2014"
	}
	else if(id==="n2048"){
		desc = "Two proposed icons for the PhageX engine"
	}
	else if(id==="n1"){
		desc = "Hint: It's suppose to read \"Fiction\""
	}
	else if(id==="n3"){
		desc = "Codeday 2014 project"
	}
	else if(id==="n5"){
		desc = "Logo for friends' project"
	}
    else if(id==="n6"){
		desc = "Banner design for school newspaper"
	}
	else if(id==="n7"){
		desc = "Two designs for literary magazine cover"
	}
	
	$('.cover-heading').text(desc);
}