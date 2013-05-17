// By Noah Levin www.noahlevin.com

animateSpeed = "300";
animateCurveSpeed = "500";
animateInCurve = "bezier-curve(0.535, 0, 0.135, 1.35)";
animateOutCurve = animateInCurve;
animateOrigin = "50% 50%";
homeCardBorder = "1px solid rgba(0,0,0,.2)";
homeCardShadowSize = "0 1px 2px rgba(0,0,0,.2)";
homeTrafficScale = ".952";
homeTrafficY = "960";
homeMovieScale = ".92";
homeMovieY = "927";
homeTimeScale = ".88";
homeTimeY = "946";
nowTrafficY = "298";
nowMovieY = "795";
nowTimeY = "1380";
nowCardBorder = "1px solid transparent";
nowCardShadowSize = "0 2px 1px rgba(0,0,0,.2)";

PSD["Content"].y += 40

gotoNow = function() {
	
	document.getElementsByTagName('body')[0].className = 'now';
	
	PSD["Logo"].animate({
		properties: {
			y: 17,
			scale: 0.6
		},
		curve: animateInCurve,
		time: animateCurveSpeed
	});
	
	PSD["Searchbox"].animate({
		properties: {
			y: 165,
			scale: 1.05,
			height: 73
		},
		curve: animateInCurve,
		time: animateCurveSpeed
	});
	
	PSD["TrafficCard"].animate({
		properties: {
			y: nowTrafficY,
			scale: 1
		},
		curve: animateInCurve,
		time: animateCurveSpeed
	});
	
	PSD["MovieCard"].animate({
		properties: {
			y: nowMovieY,
			scale: 1
		},
		curve: animateInCurve,
		time: animateCurveSpeed
	});
	
	PSD["TimeCard"].animate({
		properties: {
			y: nowTimeY,
			scale: 1
		},
		curve: animateInCurve,
		time: animateCurveSpeed
	});
	
	PSD["Context"].animate({
		properties: {
			opacity: 1,
			y: -20
		},
		curve: "ease-out",
		time: animateSpeed
	});
	
	PSD["Actions"].animate({
		properties: {
			y: 760,
			opacity: 0
		},
		curve: "ease-out",
		time: animateSpeed
	});
	
	PSD["Top"].animate({
		properties: {
			y: -20,
			opacity: 0
		},
		curve: "ease-out",
		time: animateSpeed
	});
};

gotoHome = function() {
	
	document.getElementsByTagName('body')[0].className = 'home';
	
	PSD["Logo"].animate({
		properties: {
			y: 301,
			scale: 1
		},
		curve: animateOutCurve,
		time: animateCurveSpeed
	});
	
	PSD["Searchbox"].animate({
		properties: {
			y: 470,
			scale: 1,
			height: 93
		},
		curve: animateOutCurve,
		time: animateCurveSpeed
	});
	
	PSD["TrafficCard"].animate({
		properties: {
			y: homeTrafficY,
			scale: homeTrafficScale
		},
		curve: animateOutCurve,
		time: animateCurveSpeed
	});
	
	PSD["MovieCard"].animate({
		properties: {
			y: homeMovieY,
			scale: homeMovieScale
		},
		curve: animateOutCurve,
		time: animateCurveSpeed
	});
	
	PSD["TimeCard"].animate({
		properties: {
			y: homeTimeY,
			scale: homeTimeScale
		},
		curve: animateOutCurve,
		time: animateCurveSpeed
	});
	
	PSD["Actions"].animate({
		properties: {
			y: 820,
			opacity: 1
		},
		curve: "ease-in",
		time: animateSpeed
	});
	
	PSD["Top"].animate({
		properties: {
			y: 22,
			opacity: 1
		},
		curve: "ease-in",
		time: animateSpeed
	});
	
	PSD["Context"].animate({
		properties: {
			opacity: 0,
			y: 0
		},
		curve: "ease-in",
		time: animateSpeed
	});
	
};

isIphone = function() {
	if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)) {
		return true;
	}
};

toggler = utils.toggle(gotoNow, gotoHome);

delay = function(ms, func) {
	return setTimeout(func, ms);
};

gotoHome();

pointerType = "click";

if (isIphone()) {
	pointerType = "touchstart";
}

PSD["Content"].on(pointerType, function(e) {
	var movePage;

	e.preventDefault();
	movePage = toggler();
	return movePage();
});

