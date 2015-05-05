$(document).ready(function () {
	displayGrid(16);
	$('.square').mouseenter(function() {
		$(this).css("background", "#E84231");
	});
	$('.clear').click(function() {
		clean();
	});

	$(".normal").click(function() {
		setGrid();
		$(".square").unbind();
		$(".square").mouseenter(function() {
			$(this).css("background", "#E84231");
		});
	});

	$(".random").click(function() {
		setGrid();
		$(".square").unbind();
		$(".square").mouseenter(function () {
			$(this).css("background", randomColor());
		});
	});

	$(".opacity").click(function() {
		setGrid();
		$(".sqaure").unbind();
		$(".square").mouseenter(function() {
			reduceOpacity($(this));
		});
	});

	$(".trail").click(function () {
		setGrid();
		$(".square").unbind();
		$(".square").hover(function() {
			$(this).css("opacity", 0);
		}, function() {
			$(this).fadeTo('fast', 1);
		});
	});
});

function clean() {
	$(".square").css("background", "2c27a6").css('opacity', '1');
}


function displayGrid(n) {
	var size = 1200;
	var boxsize = (1200 - 2*n)/n;
	var wrap = $(".wrap").html("");
	for (var j = 0; j < n; j++) {
		for (var i = 0; i < n; i++) {
			wrap.append( $("<div></div>").addClass("square").height(boxsize).width(boxsize) );
		}
		wrap.append($("<div></div>").css("clear", "both"));
	}
}

function setGrid() {
	var col = prompt("Enter number of colums: ");
	displayGrid(col);
	clean();
}

function randomColor() {
	var red = Math.floor(Math.random()*256)
	var green = Math.floor(Math.random()*256)
	var blue = Math.floor(Math.random()*256)
	return "#" + red.toHex() + green.toHex() + blue.toHex();
}

function reduceOpacity(elem) {
	var opacity = elem.css('opacity');
	var nextOpacity = opacity - 0.1
	if (nextOpacity > 0) { elem.css('opacity', nextOpacity); }
	else { elem.css('opacity', '0'); }
}

Number.prototype.toHex = function() {
	if (this < 16) { return '0' + this.toString(16); }
	return this.toString(16);
}