$(document).ready(function(){
	var area = 10;

	var removeGrid = function(){
		$("div.grid").remove();
	};
	var setDimensions = function(area) {
		$("div.grid").height($("div.wrapper").height()/area);
		$("div.grid").width($("div.wrapper").width()/area);
		$("div.grid").hover(function(){
			$(this).css("background-color", "black");
		});
	}
	var makeGrid = function(area) {
		for(var i = 0; i < (area*area); i++) {
			$("div.wrapper").append("<div class='grid'></div>");
		}
		setDimensions(area);
	};


	$("#clearGrid").click(function(){
		removeGrid();
		area = prompt("How many squares per side?");
		makeGrid(area);
	});
	makeGrid(area);

	



});
