(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('load',function(){
	$('body').css('opacity', 1);

	$('.catalog-filters__block-head').click(function(){
		$(this).parent().find('.catalog-filters__block-body').slideToggle();
		$(this).toggleClass('activee');
	});
	$('.product__name span').click(function(){
		$('.product__inbox').hide();
		$('.product__inbox[data-id="'+ $(this).index() +'"]').fadeIn();
	});


	var header = $('.header'),
		scrollPrev = 0;

		$(window).scroll(function() {
			var scrolled = $(window).scrollTop();
		
			if ( scrolled > 100 && scrolled > scrollPrev && $(window).width() <= 640) {
				header.addClass('out');
				if($('.product-card__btn--buy').length > 0){
					if ($(window).scrollTop() > $('.product-card__btn--buy').offset().top && $(window).width() < 640) { 
						$('.product-card__btn--buy').addClass('fixed');  
					}
				}
			} else {
				header.removeClass('out');
				$('.product-card__btn--buy').removeClass('fixed');  
			}
			scrollPrev = scrolled;
			
		});
	$('.catalog-filters__block--mainlinks').hover(function(){
		$(this).parent().find('.catalog-filters__block-body').slideToggle();
		$(this).parent().find('.catalog-filters__block-head').toggleClass('activee');
	});

	$('.info__changer span').click(function(){
		console.log($(this).index());
		$('.information__item').removeClass('active');
		$('.information__item').eq($(this).index()).addClass('active');
		if($(window).width() <= 1024){
			$('html, body').animate({
				scrollTop: $('.information__item').eq($(this).index()).offset().top - 50
			}, {
				duration: 570,   
				easing: "swing"
			});
		
			return false;
		}
	});

	$('.searchbox button.closer').click(function() {
		console.log('clicked')
		$(this).parent().find('input').val('');
	});
	// $('.mob-select-btn').click(function() {
	// 	console.log('clicked')
	// 	$(this).find('select').show();
	// 	// $(this).find('select').focus();
	// 	$(this).find('select').find('option').prop('selected', true);
				
	// });
	$('.searchbox input').focus(function() {
		$(this).parent().find('.search').hide();
		$(this).parent().find('.closer').fadeIn();
	});
	$('.searchbox input').blur(function() {
		$(this).parent().find('.closer').hide();
		$(this).parent().find('.search').fadeIn();
	});
	


	$('.product-card__description-head').click(function(){
		if ($(window).width() <= 1024) {
			$(this).parent().find('.product-card__description-body').slideToggle();
			$(this).toggleClass('activee');
		}
	});
	$('[data-filters-opener]').click(function(){
			$('.catalog-filters').addClass('active');
	});
	$('[data-filters-closer]').click(function(){
		$('.catalog-filters').removeClass('active');
});

	$('[data-modal-closer]').click(function(){
		$('.modal-box').removeClass('active');
	});
	$('[data-modal-open]').click(function(){
		$('[data-modal-name="'+ $(this).attr('data-modal-open') +'"]').addClass('active');
	});

	let hid = false;
	$('[data-form-opener]').click(function(){
		$(this).toggleClass('activee');
		$('.cart__form--mob').slideToggle({
			start: function() {
				jQuery(this).css('display','flex');
			  }
		});
		$('.cart__form--full').slideToggle({
			start: function() {
				jQuery(this).css('display','flex');
			  }
		});
	});

	$(".phone").mask("+38(999) 999-9999");

	$( "#slider-range" ).slider({
		range: true,
		min: 0,
		max: 9999,
		values: [ 1175, 8500 ],
		slide: function( event, ui ) {
		  $(this).parent().find('.catalog-filters__slider-val--min').text(ui.values[0]);
		  $(this).parent().find('.catalog-filters__slider-val--max').text(ui.values[1]);
		}
	  });


			var newYear = new Date(); 
			newYear = new Date(newYear.getFullYear() + 1, 1 - 1, -6); 
			$('#prod-timer').countdown({until: 12600, format: 'HMS', padZeroes: true}); 
			$('#prod-timer-mob').countdown({until: 12600, format: 'HMS', padZeroes: true}); 

			$('.review__images-slider').each(function() {
				$(this).slick({
					infinite: true,
					slidesToShow: 1,
					slidesToScroll: 1, 
					arrows: false,
					dots: false,
					// prevArrow: '.review__images .prev',
					// nextArrow: '.review__images .next',
				});
			});

			$('.review__images .next').on('click', function() {
				$(this).parent().find('.review__images-slider').slick('slickNext');
			  });
			  $('.review__images .prev').on('click', function() {
				$(this).parent().find('.review__images-slider').slick('slickPrev');
			  });

	  $('.product-card__slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1, 
		arrows: false,
		dots: false,
		asNavFor: '.product-card__slider-nav',
	  });
	  $('.product-card__slider-nav').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1, 
		arrows: true,
		dots: false,
		prevArrow: '.product-card__slider-navbox .prev',
		nextArrow: '.product-card__slider-navbox .next',
		asNavFor: '.product-card__slider',
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 600,
				settings: {
				  slidesToShow: 3,
				  slidesToScroll: 1,
				}
			  },
		  ]
	  });

	  $('.product-more__slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1, 
		dots: false,
		arrows: true,
		dots: false,
		prevArrow: '.product-more__sliderbox .prev',
		nextArrow: '.product-more__sliderbox .next',
		responsive: [
			{
			  breakpoint: 900,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
			  }
			},
			{
				breakpoint: 600,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1,
				  infinite: true,
				}
			  },
		  ]
	  });

	  $('.select').select({
		//options
	 });
	

		const productIteam = document.querySelectorAll('.product__iteam'),
		  introFoto = document.querySelectorAll('.intro__foto'),
		  leftArrow = document.querySelector('.left__arrow'),
		  rightArrow = document.querySelector('.right__arrow'),
		  blogIteam = document.querySelectorAll('.blog__iteam'),
		  blogInner = document.querySelector('.blog__slider'),
		  blogLeft = document.querySelector('.blog__left'),
		  tabs = document.querySelectorAll('.tab'),
		  blogRight = document.querySelector('.blog__right');

	let index = 0;
	let priseKind; 


	if (!Array.from) {
	  Array.from = (function() {
	    var toStr = Object.prototype.toString;
	    var isCallable = function(fn) {
	      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
	    };
	    var toInteger = function (value) {
	      var number = Number(value);
	      if (isNaN(number)) { return 0; }
	      if (number === 0 || !isFinite(number)) { return number; }
	      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
	    };
	    var maxSafeInteger = Math.pow(2, 53) - 1;
	    var toLength = function (value) {
	      var len = toInteger(value);
	      return Math.min(Math.max(len, 0), maxSafeInteger);
	    };

	    // Свойство length метода from равно 1.
	    return function from(arrayLike/*, mapFn, thisArg */) {
	      // 1. Положим C равным значению this.
	      var C = this;

	      // 2. Положим items равным ToObject(arrayLike).
	      var items = Object(arrayLike);

	      // 3. ReturnIfAbrupt(items).
	      if (arrayLike == null) {
	        throw new TypeError('Array.from requires an array-like object - not null or undefined');
	      }

	      // 4. Если mapfn равен undefined, положим mapping равным false.
	      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
	      var T;
	      if (typeof mapFn !== 'undefined') {
	        // 5. иначе
	        // 5. a. Если вызов IsCallable(mapfn) равен false, выкидываем исключение TypeError.
	        if (!isCallable(mapFn)) {
	          throw new TypeError('Array.from: when provided, the second argument must be a function');
	        }

	        // 5. b. Если thisArg присутствует, положим T равным thisArg; иначе положим T равным undefined.
	        if (arguments.length > 2) {
	          T = arguments[2];
	        }
	      }

	      // 10. Положим lenValue равным Get(items, "length").
	      // 11. Положим len равным ToLength(lenValue).
	      var len = toLength(items.length);

	      // 13. Если IsConstructor(C) равен true, то
	      // 13. a. Положим A равным результату вызова внутреннего метода [[Construct]]
	      //     объекта C со списком аргументов, содержащим единственный элемент len.
	      // 14. a. Иначе, положим A равным ArrayCreate(len).
	      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

	      // 16. Положим k равным 0.
	      var k = 0;
	      // 17. Пока k < len, будем повторять... (шаги с a по h)
	      var kValue;
	      while (k < len) {
	        kValue = items[k];
	        if (mapFn) {
	          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
	        } else {
	          A[k] = kValue;
	        }
	        k += 1;
	      }
	      // 18. Положим putStatus равным Put(A, "length", len, true).
	      A.length = len;
	      // 20. Вернём A.
	      return A;
	    };
	  }());
	}
	

	const changeFoto = (iteam) => {
		const clickIteam = document.querySelectorAll(iteam);

		for(let i = 0; i < clickIteam.length; i++){
			clickIteam[i].addEventListener('click', () => {
				change(i)
			});
		}

		function change (index) {
			let parent = clickIteam[index].offsetParent.offsetParent.offsetParent;
			parent.querySelector('img').setAttribute('src', clickIteam[index].src)
		}
	}
	changeFoto('.product__hide_iteam');
	const productSorting = (iteam, iteam2, class1, class2, btn = false) => {
		const title = document.querySelectorAll(iteam),
			  subtitle  = document.querySelectorAll(iteam2);

		for(let i = 0; i < title.length; i++){
			title[i].addEventListener('click', (e) => { 
				changeActive(i,e)
			});
		}

		for(let i = 0; i < subtitle.length; i++){
			subtitle[i].addEventListener('click', (e) => { 
				changeActive(i,e)
			});
		}
		function changeActive (index,e) {
			if(e.target.parentElement.parentElement.classList.contains('product__king') === true){
				for(let i = 0; i < title.length; i++){
					title[i].classList.remove(class1)
				}
				title[index].classList.add(class1)
			}else if(e.target.parentElement.parentElement.classList.contains('product__name') === true || 
				e.target.parentElement.parentElement.classList.contains('blog__subtitle') === true){
				for(let i = 0; i < subtitle.length; i++){
					subtitle[i].classList.remove(class2);
				}
				subtitle[index].classList.add(class2)

				if(btn){
					const button = document.querySelector(btn);
					button.textContent = subtitle[index].textContent
				}
			}
		}
	};

	const checkProducts = (iteam) => {
		// let counter = 5;
		// let start = 2;

		const productInner = document.querySelectorAll(iteam);

		for(let i = 0; i < productInner.length; i++){
			let productColorIteam = productInner[i].querySelectorAll('img:not(.product__hide_icon)');
			if(productColorIteam.length <= 6){
				productInner[i].parentElement.querySelector('.product__hide_icon').style.display = "none";
			}else if(productColorIteam.length >= 7){
				changeProduct(productColorIteam);		
			}
		}
		function changeProduct (iteam) {
			let counter = 5;
			let start = 2;
			for(let i = 0; i < iteam.length; i++){
				if(i >= 5){
					iteam[i].style.display = 'none';
				}
			}
			let div = document.createElement('div');
			div.classList.add('product__icon_box');
			div.classList.add('product__hide_arrow')
			let img = document.createElement('img');
			img.classList.add('product__hide_icon');
			img.src = "img/left.svg";

			div.append(img);
			iteam[0].parentElement.prepend(div)


			let productIcon = iteam[iteam.length - 1].nextElementSibling.querySelector('img');

			productIcon.addEventListener('click',() => {
				changeRight(iteam, productIcon)
			})
			iteam[0].previousElementSibling.addEventListener('click',() => {
				changeLeft(iteam, iteam[0].previousElementSibling)
			});
			function changeRight(iteam,iteam2) {
				if(start <= 0){
					start = 2;
				}
				if(counter <= 4){
					counter = 5;
				}
				for(let i = 0; i < iteam.length; i++){
					iteam[i].style.display = 'none';
				}
				for(let i = counter; i >= start; i--){
					iteam[i].style.display = 'block';
				}
				iteam[0].previousElementSibling.classList.remove('product__hide_arrow');
				
				counter++;
				if(counter >= iteam.length - 1){
					iteam2.parentElement.classList.add('product__hide_arrow')
					iteam[counter].style.display = 'block';
				}
				start++;
			}
			function changeLeft(iteam,iteam2) {
				counter--;
				start--;
				for(let i = 0; i < iteam.length; i++){
					iteam[i].style.display = 'none';
				}
				if(counter <= 5){
					iteam2.classList.add('product__hide_arrow')
					iteam[counter - 1].style.display = 'block';
					counter = 4;
					start = 0;
				}
				for(let i = counter; i >= start; i--){
					iteam[i].style.display = 'block';
				}
				iteam[iteam.length - 1].nextElementSibling.classList.remove('product__hide_arrow');
			}
		}
	}
	checkProducts('.product__hide_colors');
	const sliderr = (iteam, parent) => {
		const sliderIteam = document.querySelectorAll(iteam),
			leftBtn = document.querySelector('.slider_left'),
			rightBtn = document.querySelector('.slider_right'),
			parentElem = document.querySelector(parent);

		let counter = 0;

		for(let i = 0; i < sliderIteam.length; i++){
			if(i === 1){
				sliderIteam[i].classList.add('right_1');
			}
			if(i === 2){
				sliderIteam[i].classList.add('right_2');
			}
			if(i === sliderIteam.length - 1){
				sliderIteam[i].classList.add('left_1');
			}
			if(i === sliderIteam.length - 2){
				sliderIteam[i].classList.add('left_2');
			}
			sliderIteam[i].addEventListener('click',() => {
				clikedElem(i);
			});
		}

		function clikedElem (index) {
			sliderIteam[index].classList.add('center');
			let classIteam = sliderIteam[index].classList[1].split('_');
			if(classIteam.includes('right') === true){
				
				for(let i = 0; i < sliderIteam.length; i++){
					sliderIteam[i].className = 'blog__slider_iteam';
				}

				sliderIteam[index].classList.add('center')

				if (!parentElem.querySelector('.center').nextElementSibling) {
					sliderIteam[0].className = 'blog__slider_iteam right_1'
				}else{
					parentElem.querySelector('.center').nextElementSibling.className = 'blog__slider_iteam right_1';
				}

				if(parentElem.querySelector('.center').nextElementSibling === null){
					sliderIteam[1].className = 'blog__slider_iteam right_2'
				}else{
					if (!parentElem.querySelector('.center').nextElementSibling.nextElementSibling) {
						sliderIteam[0].className = 'blog__slider_iteam right_2'
					}else{
						parentElem.querySelector('.center').nextElementSibling.nextElementSibling.className = 'blog__slider_iteam right_2';
					}
				}
				
				if(!parentElem.querySelector('.center').previousElementSibling){
					sliderIteam[sliderIteam.length - 1].className = 'blog__slider_iteam left_1'
				}else{
					parentElem.querySelector('.center').previousElementSibling.className = 'blog__slider_iteam left_1';
				}

				if(parentElem.querySelector('.center').previousElementSibling === null){
					sliderIteam[sliderIteam.length - 2].className = 'blog__slider_iteam left_2'
				}else{
					if (!parentElem.querySelector('.center').previousElementSibling.previousElementSibling) {
						sliderIteam[sliderIteam.length - 1].className = 'blog__slider_iteam left_2'
					}else{
						parentElem.querySelector('.center').previousElementSibling.previousElementSibling.className = 'blog__slider_iteam left_2';
					}

				}

			}else if (classIteam.includes('left') === true) {
				for(let i = 0; i < sliderIteam.length; i++){
					sliderIteam[i].className = 'blog__slider_iteam';
				}

				sliderIteam[index].classList.add('center')

				if (!parentElem.querySelector('.center').nextElementSibling) {
					sliderIteam[0].className = 'blog__slider_iteam right_1'
				}else{
					parentElem.querySelector('.center').nextElementSibling.className = 'blog__slider_iteam right_1';
				}

				if(parentElem.querySelector('.center').nextElementSibling === null){
					sliderIteam[1].className = 'blog__slider_iteam right_2'
				}else{
					if (!parentElem.querySelector('.center').nextElementSibling.nextElementSibling) {
						sliderIteam[0].className = 'blog__slider_iteam right_2'
					}else{
						parentElem.querySelector('.center').nextElementSibling.nextElementSibling.className = 'blog__slider_iteam right_2';
					}
				}
				
				if(!parentElem.querySelector('.center').previousElementSibling){
					sliderIteam[sliderIteam.length - 1].className = 'blog__slider_iteam left_1'
				}else{
					parentElem.querySelector('.center').previousElementSibling.className = 'blog__slider_iteam left_1';
				}
				
				if(parentElem.querySelector('.center').previousElementSibling === null){
					sliderIteam[sliderIteam.length - 2].className = 'blog__slider_iteam left_2'
				}else{
					if (!parentElem.querySelector('.center').previousElementSibling.previousElementSibling) {
						sliderIteam[sliderIteam.length - 1].className = 'blog__slider_iteam left_2'
					}else{
						parentElem.querySelector('.center').previousElementSibling.previousElementSibling.className = 'blog__slider_iteam left_2';
					}

				}
			}


		}
		function moveRight() {
			
			parentElem.querySelector('.left_2').classList.remove('left_2');

			parentElem.querySelector('.left_1').classList.add('left_2');
			parentElem.querySelector('.left_1').classList.remove('left_1');

			parentElem.querySelector('.center').classList.add('left_1');
			parentElem.querySelector('.center').classList.remove('center');


			parentElem.querySelector('.right_1').classList.add('center');
			parentElem.querySelector('.right_1').classList.remove('right_1');

			parentElem.querySelector('.right_2').classList.add('right_1');

			if(!parentElem.querySelector('.right_2').nextElementSibling){
				parentElem.querySelector('.right_2').classList.remove('right_2');
				parentElem.querySelector('.blog__slider_iteam').classList.add('right_2')
			}else{
				parentElem.querySelector('.right_2').nextElementSibling.classList.add('right_2');
				parentElem.querySelector('.right_2').classList.remove('right_2');
			}
			
		}
		function moveLeft() {
			parentElem.querySelector('.right_2').classList.remove('right_2');

			parentElem.querySelector('.right_1').classList.add('right_2');
			parentElem.querySelector('.right_1').classList.remove('right_1');


			parentElem.querySelector('.center').classList.add('right_1');
			parentElem.querySelector('.center').classList.remove('center');

			parentElem.querySelector('.left_1').classList.add('center');
			parentElem.querySelector('.left_1').classList.remove('left_1');

			parentElem.querySelector('.left_2').classList.add('left_1');

			if(!parentElem.querySelector('.left_2').previousElementSibling){
				parentElem.querySelector('.left_2').classList.remove('left_2');
				sliderIteam[sliderIteam.length - 1].classList.add('left_2')
			}else{
				parentElem.querySelector('.left_2').classList.remove('left_2');
				parentElem.querySelector('.left_1').previousElementSibling.classList.add('left_2');
			}
			
		}

		rightBtn.addEventListener('click', moveRight);
		leftBtn.addEventListener('click', moveLeft);
	};

  	sliderr('.blog__slider_iteam','.blog__slider_center');
	
	
	productSorting('.first__kind pre span', '.product__name pre span', 'product__king_active', 'product__name_active', '.product__btn_box .intro__btn span');
	productSorting('.second__kind pre span', '.blog__subtitle pre span', 'product__king_active', 'blog__subtitle_active');
	
	// if(!leftArrow) return;
	
	for(let i = 0; i < productIteam.length; i++){
		if(productIteam[i].querySelector('.product__prise').classList.length <= 1){
			if(innerWidth >= 660){
				productIteam[i].querySelector('.product__prise').previousElementSibling.style.marginBottom = 'auto';
			}
		}
	}
	if (document.querySelector('.intro__slider_block2')) {
		document.querySelector('.intro__slider_block2').style.display = 'block';
	}
	
	
	for(let i = 0; i < tabs.length; i++){
		tabs[i].addEventListener('click', () => {
			if(i == 0){
				document.querySelector('.intro__slider_block .slick-list .slick-track').classList.remove('hide_slider');
				document.querySelector('.intro__slider_block2 .slick-list .slick-track').classList.add('hide_slider');

				  $('.intro__slider_block').slick('slickPlay');
				  $('.intro__slider_block2').slick('slickPause');

				document.querySelector('.intro__control').classList.remove('hide');
				  document.querySelector('.intro__control2').classList.add('hide');

			}else if( i == 1){
				document.querySelector('.intro__slider_block .slick-list .slick-track').classList.add('hide_slider');
				document.querySelector('.intro__slider_block2 .slick-list .slick-track').classList.remove('hide_slider');

				$('.intro__slider_block').slick('slickPause');
				  $('.intro__slider_block2').slick('slickPlay');

				  document.querySelector('.intro__control2').classList.remove('hide');
				  document.querySelector('.intro__control').classList.add('hide');
			}

		});
	}

	$('.intro__slider_block').slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: true,
		prevArrow: $('.intro__control .left__arrow'),
		nextArrow: $('.intro__control .right__arrow'),
		speed: 600,
		pauseOnHover: true
  	});

  	$('.intro__slider_block2').slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: true,
		prevArrow: $('.intro__control2 .left__arrow2'),
		nextArrow: $('.intro__control2 .right__arrow2'),
		speed: 600,
		pauseOnHover: true
  	});
  	$('.intro__slider_block2').slick('slickPause');

  	if(innerWidth <= 560){
	  	$('.mobile__blog_slide').slick({
			infinite: true,
			arrows: true,
			prevArrow: $('.slider_left'),
			nextArrow: $('.slider_right'),
	  	});
  	}

	  if (document.querySelector('.intro__slider_block2 .slick-list .slick-track')) {
		document.querySelector('.intro__slider_block2 .slick-list .slick-track').classList.add('hide_slider')
	  }

  	
  	
  
  	
  	if(window.innerWidth <= 1800 ||
  		document.querySelector('.brands__slide').clientWidth > document.querySelector('.brands__name').clientWidth){

  		const runLine = (iteam) => {
	  		const brandBlock =  document.querySelector(iteam),
	  			  brandIteam = document.querySelector('.brands__block1');

	  		let counter = 0;
	  		let hovered = false;
	  		let a = 1;
	  		let b = 2;
	  		let a2 = 1;
	  		let b2 = 2;
	  		let array = [];
	  		let cliked = false;
	  		let interatot = 2;

	  		document.querySelector('.brands__name').addEventListener('mouseenter',() => {
	  			hovered = true;
	  		});

	  		document.querySelector('.brands__name').addEventListener('mouseleave',() => {
	  			hovered = false;
	  			brandMove();
	  		});

  			document.querySelector('.brands__name').addEventListener('mousedown',() => {
	  			cliked = true;
  				hovered = true;

	  		});
	  		window.addEventListener('mouseup',() => {
	  			cliked = false;
	  			array = [];
	  		});

	  		window.addEventListener('mousemove',movePosition);

	  		let div = document.createElement('div');
	  		div.classList.add('brands__block2');
	  		div.innerHTML = brandIteam.innerHTML;
	  		brandBlock.append(div);
  			let brandIteam2  = document.querySelector('.brands__block2');
  			let links = brandBlock.querySelectorAll('a');

  			for(let i = 0; i < links.length; i++){
	  			links[i].addEventListener("dragstart", (event) => {
				    event.preventDefault();

	  			});
  			}
  			
  			document.querySelector('.brands__name').addEventListener("touchend", (e) => {
	  			hovered = false;
	  			brandMove();
  			})

	  		document.querySelector('.brands__name').addEventListener("touchmove", (e) => {
	  			hovered = true;
  				array.push(e.touches[0].clientX);

	  			if(counter > (-200)){
	  				brandIteam2.style.transform = 'translateX(' + 0  + 'px)';
	  			}
  				if(counter <=  (brandIteam.clientWidth * -1) * a){
	  				brandIteam.style.transform = 'translateX(' + (brandIteam.clientWidth * 2) * (b / 2) + 'px)';
	  				a += 2
	  			}
	  			if(counter <=  (brandIteam2.clientWidth * -1) * b){
	  				console.log('cvbcvb')
	  				brandIteam2.style.transform = 'translateX(' + brandIteam.clientWidth * 2 * (b / 2)   + 'px)';
	  				b += 2
	  			}
	  			if(counter > 0){
						brandIteam2.style.transform = 'translateX(' + (brandIteam.clientWidth * 2 * -1) * (b2 / 2)   + 'px)';

	  				if(counter >=  (brandIteam.clientWidth) * a2){
		  				console.log('asd')
		  				brandIteam.style.transform = 'translateX(' + (brandIteam.clientWidth * 2 * -1) * (b2 / 2) + 'px)';
		  				a2 += 2
		  			}
		  			if(counter >=  (brandIteam2.clientWidth) * b2){
		  				console.log('cvbcvb')
		  				brandIteam2.style.transform = 'translateX(' + (brandIteam.clientWidth * 2 * -1) * (b2 / 2)   + 'px)';
		  				b2 += 2
		  			}
	  			}

  				if(array[array.length - 2] - e.touches[0].clientX < 0){

  					counter += 7;
  					brandBlock.style.transform = 'translateX(' + counter + 'px)';
  				}else{

  					counter -= 7;
  					brandBlock.style.transform = 'translateX(' + counter + 'px)';
  				}
	  		});

	  		function movePosition(e) {
	  			let a2 = 1;
	  			let b2 = 2;

	  			if(cliked){
	  				hovered = true;
	  				array.push(e.clientX);

		  			if(counter > (-200)){
		  				console.log('dfgdfg')
		  				brandIteam2.style.transform = 'translateX(' + 0  + 'px)';
		  			}
	  				if(counter <=  (brandIteam.clientWidth * -1) * a){
		  				console.log('asd')
		  				brandIteam.style.transform = 'translateX(' + (brandIteam.clientWidth * 2) * (b / 2) + 'px)';
		  				a += 2
		  			}
		  			if(counter <=  (brandIteam2.clientWidth * -1) * b){
		  				console.log('cvbcvb')
		  				brandIteam2.style.transform = 'translateX(' + brandIteam.clientWidth * 2 * (b / 2)   + 'px)';
		  				b += 2
		  			}
		  			if(counter > 0){
  						brandIteam2.style.transform = 'translateX(' + (brandIteam.clientWidth * 2 * -1) * (b2 / 2)   + 'px)';

		  				if(counter >=  (brandIteam.clientWidth) * a2){
			  				console.log('asd')
			  				brandIteam.style.transform = 'translateX(' + (brandIteam.clientWidth * 2 * -1) * (b2 / 2) + 'px)';
			  				a2 += 2
			  			}
			  			if(counter >=  (brandIteam2.clientWidth) * b2){
			  				console.log('cvbcvb')
			  				brandIteam2.style.transform = 'translateX(' + (brandIteam.clientWidth * 2 * -1) * (b2 / 2)   + 'px)';
			  				b2 += 2
			  			}
		  			}

	  				if(array[array.length - 2] - e.clientX < 0){

	  					counter += 7;
	  					brandBlock.style.transform = 'translateX(' + counter + 'px)';
	  				}else{

	  					counter -= 7;
	  					brandBlock.style.transform = 'translateX(' + counter + 'px)';
	  				}
	  			}
	  		}

	  		

	  		function brandMove () {
	  			// console.log(hovered)
	  			let num = ((Math.ceil(brandIteam.clientWidth / interatot)) * interatot) - brandIteam.clientWidth;
	  			if(hovered){
		  			return;
	  			}else{

	  				if(counter > (-200)){
		  				brandIteam2.style.transform = 'translateX(' + 0  + 'px)';
		  			}
		  			if(counter <=  (brandIteam.clientWidth * -1) * a){
		  				console.log('asd')
		  				brandIteam.style.transform = 'translateX(' + (brandIteam.clientWidth * 2) * (b / 2) + 'px)';
		  				a += 2
		  			}
		  			if(counter <=  (brandIteam2.clientWidth * -1) * b){
		  				console.log('cvbcvb')
		  				brandIteam2.style.transform = 'translateX(' + brandIteam.clientWidth * 2 * (b / 2)   + 'px)';
		  				b += 2
		  			}
		  			if(counter > 0){
  						brandIteam2.style.transform = 'translateX(' + (brandIteam.clientWidth * 2 * -1) * (b2 / 2)   + 'px)';

		  				if(counter >=  (brandIteam.clientWidth) * a2){
			  				console.log('asd')
			  				brandIteam.style.transform = 'translateX(' + (brandIteam.clientWidth * 2 * -1) * (b2 / 2) + 'px)';
			  				a2 += 2
			  			}
			  			if(counter >=  (brandIteam2.clientWidth) * b2){
			  				console.log('cvbcvb')
			  				brandIteam2.style.transform = 'translateX(' + (brandIteam.clientWidth * 2 * -1) * (b2 / 2)   + 'px)';
			  				b2 += 2
			  			}
		  			}

		  			counter -= interatot;
	  				brandBlock.style.transform = 'translateX(' + counter + 'px)';

		  			window.requestAnimationFrame(brandMove)
	  			}
	  		}

	  		window.requestAnimationFrame(brandMove)

	  	}
	  	runLine('.brands__slide')
	  }
	  
	
	
	window.addEventListener('resize', () => {
		if(innerWidth <= 560){
		  	$('.mobile__blog_slide').slick({
				infinite: true,
				arrows: true,
				prevArrow: $('.slider_left'),
				nextArrow: $('.slider_right'),
		  	});
	  	}
	});

	
		
});
},{}]},{},[1]);
