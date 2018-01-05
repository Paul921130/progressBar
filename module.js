(function($) {
	
	'use strict';

	var ModuleName='ps_flpk';

	var Module = function ( ele, options ,options2) {
		this.ele = ele;
		this.$ele = $(ele);
		this.option = options;
		this.option2 = options2;
		this.progressPercent = 0;
		this.$result=$('<div class="result" ></div>');
		this.$bar = $('.result');
		
		// this.getBarLength=function(barLenght){
		//  	var barLenght = $('.result').width()/800*100;
		//  	console.log( barLenght+'%');
		//  }
		//  this.Time = setInterval(this.getBarLength, 100);

	};
	
	// 下面是DEFAULTS物件 
	Module.DEFAULTS = {
		speed:1000,
		progressNumber : 90,
     }
	
	
	// document.getElementById('result').style.transition=this.option.speed+'ms';
	
	Module.prototype.init = function () {
		
		var progressNumber=this.option.progressNumber;
 		this.addTransition();
 		//設定result長度
 		this.$bar.width(progressNumber + '%');
 		this.clearTimer();
 		// if(this.$barLenght === 50){
 		// 	this.clearTimer();
 		// }
 		var barLenght=$('.result').width()/800*100;
 		console.log(barLenght);
	};
	
	Module.prototype.assignPercent = function( asOpt , asOpt2){
		if(asOpt <= 100 && asOpt >= 0){
			this.$bar.width(asOpt + '%');
		}else if( asOpt < 0){
			this.$bar.width(0 + '%');
		}else{
			this.$bar.width(100 + '%');
		}
		var progressNumber = asOpt2;
		var number=asOpt;
		progressNumber(number+'%')		
	}
/////完成80%
	Module.prototype.nextProgress = function(neOpt){
		this.addTransition();
		var nowNumber = this.$bar.width() / 800 *100;
		//抓出result的width;
		var nextNumber= ( 100 - nowNumber ) /5 + nowNumber;
		var nowNumber =+ nextNumber;
		if( nowNumber < 100 ){
			this.$bar.width(nowNumber+'%');
		}
		if( neOpt!=={} ){
			var progressNumber = neOpt;
			var number = nowNumber;
			progressNumber(number+'%');
		}

		
		// var number=nowNumber;
		// progressNumber(number+'%')	
	}


	Module.prototype.doneProgress = function(dOpt){
		this.$bar.width(100+'%');
		var progressNumber = dOpt;
		progressNumber(100+'%');
		  		
	}

	Module.prototype.zeroProgress = function(zOpt){
		this.$bar.width(0 +'%');
		var progressNumber = zOpt;
		progressNumber(0+'%');
	}

	Module.prototype.addTransition = function() {
		var transtionNumber = this.option.speed+'ms';
		this.$bar.css('transition',transtionNumber);
	};
		// if ( ! this.$bar.hasClass('transition') ) {
		// 	this.$bar.addClass('transition');
		// };
		// var a=$('.result').hasClass('transition'); 
   	 	// console.log(a); 
	
	Module.prototype.clearTimer = function() {
		clearInterval( this.Time );
	}



	$.fn[ModuleName] = function ( method, options, options2 ) {
		return this.each(function(){
			var $this = $(this);
			var module = $this.data( ModuleName );
			var opts = null;
			var opts2= null;
			if ( !!module ) {
				if ( typeof method === 'string' &&  typeof options === 'undefined' ) {
					module[method]();
				} else if ( typeof method === 'string' && typeof options === 'object' || typeof options === 'string' || typeof options === 'function'|| typeof options2 === 'string' || typeof options2 === 'number'|| typeof options2 === 'function') {
					module[method]( options, options2);
				} else {
					console.log('unsupported options!');
				}
			} else {
				opts = $.extend( {}, Module.DEFAULTS, ( typeof method === 'object' && method ), ( typeof options === 'object' && options ), ( typeof options2 === 'object' && options2 ) );
				opts2 =$.extend( {}, Module.DEFAULTS, ( typeof method === 'object' && method ), ( typeof options === 'object' && options ), ( typeof options2 === 'object' && options2 ) );
				module = new Module(this, opts , opts2);
				$this.data(ModuleName, module);
				module.init();
				// 執行的function
			}
		});
	};
/////////////////////////注意option數量
})(jQuery);