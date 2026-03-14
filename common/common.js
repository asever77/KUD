
if (window['console'] === undefined || console.log === undefined){
	console = {
		log : function() {}, 
		info : function() {},
		warn : function() {},
		error : function() {}
	};
}

var getBrowserVer = {
	ie : function(){
		var ieVer = -1; // Return value assumes failure.    
		if (navigator.appName == 'Microsoft Internet Explorer') {        
			var ua = navigator.userAgent;        
			var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");        
			if (re.exec(ua) != null){
				ieVer = parseFloat(RegExp.$1);    
			}          	
		} 
		return ieVer; 
	},
	type : function(){
		var _ua 	= navigator.userAgent,
			rv 		= -1,
			bsType 	= null;
		
		//IE 11,10,9,8
		var trident = _ua.match(/Trident\/(\d.\d)/i);
		
		if(trident != null){
			if(trident[1] == "7.0") return bsType = "IE" + 11;
			if(trident[1] == "6.0") return bsType = "IE" + 10;
			if(trident[1] == "5.0") return bsType = "IE" + 9;
			if(trident[1] == "4.0") return bsType = "IE" + 8;
		}
		 
		//IE 7...
		if(navigator.appName == 'Microsoft Internet Explorer') return bsType = "IE" + 7;
		 
		var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		if(re.exec(_ua) != null) rv = parseFloat(RegExp.$1);
		if(rv == 7) return bsType = "IE" + 7; 
		
		//other
		var agt = _ua.toLowerCase();
		if (agt.indexOf("chrome") != -1) 		{ return bsType = 'Chrome'; }
		if (agt.indexOf("opera") != -1) 		{ return bsType = 'Opera'; }
		if (agt.indexOf("staroffice") != -1) 	{ return bsType = 'Star Office'; }
		if (agt.indexOf("webtv") != -1) 		{ return bsType = 'WebTV'; }
		if (agt.indexOf("beonex") != -1) 		{ return bsType = 'Beonex'; }
		if (agt.indexOf("chimera") != -1) 		{ return bsType = 'Chimera';} 
		if (agt.indexOf("netpositive") != -1) 	{ return bsType = 'NetPositive'; }
		if (agt.indexOf("phoenix") != -1) 		{ return bsType = 'Phoenix'; }
		if (agt.indexOf("firefox") != -1) 		{ return bsType = 'Firefox'; }
		if (agt.indexOf("safari") != -1) 		{ return bsType = 'Safari'; }
		if (agt.indexOf("skipstone") != -1)		{ return bsType = 'SkipStone'; }
		if (agt.indexOf("netscape") != -1) 		{ return bsType = 'Netscape'; }
		if (agt.indexOf("mozilla/5.0") != -1) 	{ return bsType = 'Mozilla';}
	},
	device : function(){
		var isMobile = "web";
			
		// ie7,8 일때 isMobile = "web"
		if (getBrowserVer.ie() > 6 && getBrowserVer.ie() < 9) {
			return isMobile;
		}

		var uAgent = navigator.userAgent.toLowerCase();
		var mobileInfo = new Array('android', 'iphone', 'ipod', 'ipad', 'blackberry', 'windows ce', 'sansung', 'lg', 'mot', 'sonyericsson', 'nokia', 'opeara mini', 'opera mobi', 'webos', 'iemobile', 'kfapwi', 'rim', 'bb10');
		
		var mobileInfoAmount = mobileInfo.lenght;
		
		for (var i = 0; i < mobileInfoAmount; i++) {
			if (uAgent.match(mobileInfo[i]) != null){
				isMobile = mobileInfo[i];
				break;
			}
		}
		(!isMobile) ?  isMobile = 'web' : '';
		
		return isMobile;
	}
}

// ie7,8 indexOf
if (!Array.indexOf) {
  Array.prototype.indexOf = function (obj, start) {
	for (var i = (start || 0); i < this.length; i++) {
	  if (this[i] == obj) {
		return i;
	  }
	}
  }
}

(function($){
	$(document).ready(function(){
		var $body, ieVer, browserType, device;
	
		$body = $('body');
		ieVer = getBrowserVer.ie();
		browserType = getBrowserVer.type();
		device = getBrowserVer.device();

		$body.data('type', browserType);
		$body.data('device', device);
		
		// ieVer
		if(browserType === 'IE11' || ieVer > 0){
			$body.addClass('ie');
			
			switch(ieVer){
				case 7 	: 
					$body.addClass('ie7'); 
					break;
				case 8	: 
					$body.addClass('ie8'); 
					break;
				case 9 	: 
					$body.addClass('ie9'); 
					break;
				case 10 : 
					$body.addClass('ie10'); 
					break;
				default : 
					$body.addClass('ie11');
					break;
			}
		} 
	});
})(jQuery);
