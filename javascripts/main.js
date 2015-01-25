$(window).scroll(function() {
		if ($(window).scrollTop()>=71) {
			$(".wrapper > #scd-nav").css("position","fixed");
			$(".wrapper > #scd-nav").css("top","0");
			$(".guitar-title").css("margin-top","70px");
		} else {
			$(".wrapper > #scd-nav").css("position","relative");
			$(".wrapper > #scd-nav").css("top","auto");
			$(".guitar-title").css("margin-top","0px");
		};
});

// $(window).scroll(function() {
// 	if (document.body.clientWidth<=480) {
// 		if ($(window).scrollTop()>=80) {
// 			$(".menu_second_wrap").css("position","fixed");
// 			$(".menu_second_wrap").css("padding-top","0");
// 			$(".menu_second_wrap").css("top","0");
// 		} else {
// 			$(".menu_second_wrap").css("position","absolute");
// 			$(".menu_second_wrap").css("padding-top","0px");
// 			$(".menu_second_wrap").css("top","0");
// 		};
// 	};

// });

// $(function(){
// 	$(".menu_main li.rss").mouseenter(function(){
//         $(this).addClass("rssactive");
//     }).mouseleave(function(){
//         $(this).removeClass("rssactive"); 
//     });
// });
// 	