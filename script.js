//function for slideshow 
(function() {
	
	function Slideshow( element ) {
		this.el = document.querySelector( element );
		this.init();
	}
	
	Slideshow.prototype = {
		init: function() {
			this.wrapper = this.el.querySelector( ".slider-wrapper" );
			this.slides = this.el.querySelectorAll( ".slide" );
			this.previous = this.el.querySelector( ".slider-previous" );
			this.next = this.el.querySelector( ".slider-next" );
			this.index = 0;
			this.total = this.slides.length;
			this.timer = null;
			
			this.action();
			this.stopStart();	
		},
		_slideTo: function( slide ) {
			var currentSlide = this.slides[slide];
			currentSlide.style.opacity = 1;
			
			for( var i = 0; i < this.slides.length; i++ ) {
				var slide = this.slides[i];
				if( slide !== currentSlide ) {
					slide.style.opacity = 0;
				}
			}
		},
		action: function() {
			var self = this;
			self.timer = setInterval(function() {
				self.index++;
				if( self.index == self.slides.length ) {
					self.index = 0;
				}
				self._slideTo( self.index );
				
			}, 4000);
		},
		stopStart: function() {
			var self = this;
			self.el.addEventListener( "mouseover", function() {
				clearInterval( self.timer );
				self.timer = null;
				
			}, false);
			self.el.addEventListener( "mouseout", function() {
				self.action();
				
			}, false);
		}
		
		
	};
	
	document.addEventListener( "DOMContentLoaded", function() {
		
		var slider = new Slideshow( "#main-slider" );
		
	});
	
	
})();

// window.onload = function(){
// 	document.getElementById('reg-button').onclick = function(){
// 		let nameInput = document.getElementById('name');
// 		let emailInput = document.getElementById('email');
// 		let passwordInput = document.getElementById('pass');
// 		let confPassInput = document.getElementById('confpass');

// 		//checks
// 		if(nameInput.value.length == 0) {
// 			alert('Please fill in your name');
// 		}
// 		else if (passwordInput.value.length == 0 || passwordInput.value.length < 8) {
// 			alert('Please enter a password. Password must be at least 8 characters.');
// 		}
// 		//password confirmation
// 		else if (passwordInput.value != confPassInput.value){
// 			alert('Your password doesn\'t match');
// 		}
// 		else {
// 			document.getElementById('reg-button').type="submit";
// 		}
		
// 	}
// }