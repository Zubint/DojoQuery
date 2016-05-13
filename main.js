	(function(window){
		// var $Dojo = {};
		window.$Dojo = function(elementID){
			var el=document.getElementById(elementID);
			// console.log(el);
			el.click = function(callBack){
			// alert("boo!");
					el.addEventListener('click', callBack);
			}

			el.hover=function(mouseEnter, mouseLeave){

				el.addEventListener('mouseenter', mouseEnter);
				el.addEventListener('mouseleave', mouseLeave);

			}
		
			return el;
		}


		console.log(window);
	})(window);

	console.dir ($Dojo('clickMe'));
	$Dojo('clickMe').click(function(){alert("boo!")});
	$Dojo('clickMe').hover(function(){console.log("ON!")}, function(){console.log("OFF")});