// JavaScript Document



	$(document).ready(function() {
		$('.T-H-Menu2-box').click(function() {
			if($('.T-H-Menu2-box-hidden').css('display') == 'none') {
				$('.T-H-Menu2-box-hidden').fadeIn();
				$('.T-H-Menu3-box-hidden').fadeOut();
			} else {
				$('.T-H-Menu2-box-hidden').fadeOut();
			};
		});
	});
	$(document).ready(function() {
		var clicks = 1;
		$('.T-H-Menu3-box').click(function() {
			if($('.T-H-Menu3-box-hidden').css('display') == 'none') {
				$('.T-H-Menu3-box-hidden').fadeIn();
				$('.T-H-Menu2-box-hidden').fadeOut();
			} else {
				$('.T-H-Menu3-box-hidden').fadeOut();
			};
		});
	});
	$(document).ready(function() {
		$('.T-H-search').click(function() {
			$('.T-H-searchbox').fadeIn();
			$('.T-H-Menu2-box-hidden').fadeOut(100);
			$('.T-H-Menu3-box-hidden').fadeOut(100);
		});
		$('.T-H-search-close').click(function() {
			$('.T-H-searchbox').fadeOut();
		});
		$('.signin').click(function() {
			$('.T-H-signin-box').fadeIn();
			$('.T-H-Menu2-box-hidden').fadeOut(100);
			$('.T-H-Menu3-box-hidden').fadeOut(100);
		});
		$('.login').click(function() {
			$('.T-H-login-box').fadeIn();
			$('.T-H-Menu2-box-hidden').fadeOut(100);
			$('.T-H-Menu3-box-hidden').fadeOut(100);
		});
		$('.T-H-signin-close').click(function() {
			$('.T-H-signin-box').fadeOut();
		});
		$('.T-H-login-close').click(function() {
			$('.T-H-login-box').fadeOut();
		});
		$('.T-H-Menu2-box-hidden').click(function() {
			$(this).delay(300).fadeOut();
		});
		$('.T-H-Menu3-box-hidden').click(function() {
			$(this).delay(300).fadeOut();
		});
		$('.addition').click(function() {
			$('.addition').fadeOut(100);
			$('.additioninput').fadeIn(100);
			$('.Subtraction').delay(200).fadeIn(100);
		});
		$('.Subtraction').click(function() {
			$('.additioninput').fadeOut(100);
			$('.addition').delay(200).fadeIn(100);
			$('.Subtraction').fadeOut(100);
		});
		$('.btnPnumber').click(function() {
			$('.SF-Menu1-box-hidden').fadeOut(200);
		});	
	
		

	
		$(document).ready(function() {
			
		$('.SF-Menu1-box').click(function() {
			if($('.SF-Menu1-box-hidden').css('display') == 'none') {
				$('.SF-Menu1-box-hidden').fadeIn();
				$('.SFC-Menu1-box-hidden').fadeOut();
			} else {
				$('.SF-Menu1-box-hidden').fadeOut();
			};
		});
		$('.SFC-Menu1-box').click(function() {
			if($('.SFC-Menu1-box-hidden').css('display') == 'none') {
				$('.SFC-Menu1-box-hidden').fadeIn();
				$('.SF-Menu1-box-hidden').fadeOut();
			} else {
				$('.SFC-Menu1-box-hidden').fadeOut();
			};
		});
	});
		
		
		$("#eco").click(function(){
  $(".FC").text("Economy");
});
				$("#bis").click(function(){
  $(".FC").text("B class");
});
					$("#fir").click(function(){
  $(".FC").text("F class");
});
		
		
	});






	$(document).ready(function() {
		$('.number-spinner1 button').click(function() {
	var btn = $(this),
		oldValue1 = btn.closest('.number-spinner1').find('input').val().trim(),
		newVal1 = 0;
	
	if (btn.attr('data-dir') == 'up') {
		newVal1 = parseInt(oldValue1) + 1;
	} else {
		if (oldValue1 > 1) {
			newVal1 = parseInt(oldValue1) - 1;
		} else {
			newVal1 = 1;
		}
	}
	btn.closest('.number-spinner1').find('input').val(newVal1);
});
	
		$('.number-spinner2 button').click(function() {
	var btn = $(this),
		oldValue2 = btn.closest('.number-spinner2').find('input').val().trim(),
		newVal2 = 0;
	
	if (btn.attr('data-dir') == 'up') {
		newVal2 = parseInt(oldValue2) + 1;
	} else {
		if (oldValue2 > 1) {
			newVal2 = parseInt(oldValue2) - 1;
		} else {
			newVal2 = 0;
		}
	}
	btn.closest('.number-spinner2').find('input').val(newVal2);
});
	
	
			$('.number-spinner3 button').click(function() {
	var btn = $(this),
		oldValue3 = btn.closest('.number-spinner3').find('input').val().trim(),
		newVal3 = 0;
	
	if (btn.attr('data-dir') == 'up') {
		newVal3 = parseInt(oldValue3) + 1;
	} else {
		if (oldValue3 > 1) {
			newVal3 = parseInt(oldValue3) - 1;
		} else {
			newVal3 = 0;
		}
	}
	btn.closest('.number-spinner3').find('input').val(newVal3);
});
	
	
	
			
	$("button").click(function(){
		var bla1 = $('.adultN').val();
		var bla2 = $('.childN').val();
		var bla3 = $('.babyN').val();
		var pasnumber = parseInt(bla2) + parseInt(bla1) + parseInt(bla3);
		    $(".ol").empty();
		    $(".ol").append(pasnumber);

}); 
		
		});



function openCity(cityName) {
		var i;
		var x = document.getElementsByClassName("city");
		for(i = 0; i < x.length; i++) {
			x[i].style.display = "none";
		}
		document.getElementById(cityName).style.display = "block";
	}

	function openCity(evt, cityName) {
		var i, city, tablinks;
		city = document.getElementsByClassName("city");
		for(i = 0; i < city.length; i++) {
			city[i].style.display = "none";
		}
		tablinks = document.getElementsByClassName("tablinks");
		for(i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(" active", "");
		}
		document.getElementById(cityName).style.display = "block";
		evt.currentTarget.className += " active";
	}

	function openCity1(evt1, cityName1) {
		var i, city1, tablinks1;
		city1 = document.getElementsByClassName("city1");
		for(i = 0; i < city1.length; i++) {
			city1[i].style.display = "none";
		}
		tablinks1 = document.getElementsByClassName("tablinks1");
		for(i = 0; i < tablinks1.length; i++) {
			tablinks1[i].className = tablinks1[i].className.replace(" active", "");
		}
		document.getElementById(cityName1).style.display = "block";
		evt1.currentTarget.className += " active";
	}
		