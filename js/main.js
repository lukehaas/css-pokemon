
var docStyle = document.documentElement.style;
var shimmerIndex = 0;

$(window).load(function () {
	
	//$(".shadow").addClass("show");
	setTimeout(build,200);

});

function build() {
	
	for(var i = 0;i < state1.length;i++) {
		
		docStyle.setProperty(state1[i].var, state1[i].property);
	}

	setTimeout(function() {
		$(".wrap").addClass('assembled');
		shimmer();
		setTimeout(buildState2,20);
	},1500);
}

function buildLoop(next,previous) {
	for(var i = 0;i < next.length;i++) {
		if(previous[i].property !== next[i].property) {
			docStyle.setProperty(next[i].var, next[i].property);
		}
	}
}
function buildState2() {
	buildLoop(state2,state1);

	setTimeout(buildState3,2500);
}
function buildState3() {
	buildLoop(state3,state2);

	setTimeout(restore,1500);

}
function restore() {
	buildLoop(state1,state3);
	
	setTimeout(buildState2,2000);
}

function shimmer() {
	
	if(shimmerIndex<state1.length-1) {
		docStyle.setProperty(state1[shimmerIndex].var+"-shine", "rgba(255,255,255,0.2)");
	}
	if(shimmerIndex>15) {
		docStyle.setProperty(state1[shimmerIndex-16].var+"-shine", "rgba(255,255,255,0)");
	}
	
	if(shimmerIndex<state1.length+15) {
		shimmerIndex++;
		setTimeout(shimmer,60);	
	} else {
		shimmerIndex = 0;
		setTimeout(shimmer,15000);	
	}
	
}
