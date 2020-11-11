$(document).ready(function() {
	handleStages();
	
	//handleMouse();
});

function handleStages() {
	var stage = 0;
	$('body').on('click', function() {

		if (stage == 0) {
			$('.outer').addClass('stage-1');
			stage++;

			setTimeout(function() {
				$('.outer').addClass('stage-2');
				stage++;

			}, 900);
		}

		if (stage == 2) {
			$('.outer').addClass('stage-3');
			stage++;

			setTimeout(function() {
				$('.outer').addClass('stage-4');
				stage++;

			}, 900);
		}

		if (stage == 4) {
			$('.outer').removeClass('stage-1 stage-2 stage-3 stage-4');
			stage = 0;
		}

	});

}

function handleMouse() {
	
	$(document).on('mousemove', function(e){
		var cX = e.clientX,
			cY = e.clientY,
			degX = (cX * 0.02) - 12,
			degY = (cY * 0.02) - 12;

		$('.outer').css('transform', 'rotateY('+degX+'deg) rotateX('+degY+'deg)');
		
		
	});
}