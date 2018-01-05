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
		this.progressNumber= function() {
			console.log(progressNumber);
		}
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
	};	
	
	Module.prototype.assignPercent = function( asOpt ,asOpt2 ){

		if(asOpt <=100 && asOpt >= 0){
			this.$bar.width(asOpt + '%');
		}else if( asOpt < 0 ){
			this.$bar.width(0 + '%');
		}else{
			this.$bar.width(100 + '%');
		}
		// console.log(asOpt);
		// console.log(asOpt2);
		// var asOpt2 =function( progressNumber){
		// 	var progressNumber=asOpt;
		// };
		var progressNumber = asOpt;
	
		// var this.asOpt2 = function(progressNumber){
		// 	console.log(progressNumber);
		// };
		// console.log(progressNumber);
	}

	 

/////完成80%
	Module.prototype.nextProgress = function(progressNumber){
		this.addTransition();
		var nowNumber = this.$bar.width() / 800 *100;
		//抓出result的width;
		var nextNumber= ( 100 - nowNumber ) /5 + nowNumber;
		var nowNumber= ++nextNumber;
		if(nowNumber<100 ){
			this.$bar.width(nowNumber+'%');
		}	
	}


	Module.prototype.doneProgress = function(progressNumber){
		this.$bar.width(100+'%');  		
	}

	Module.prototype.zeroProgress = function(progressNumber){
		this.$bar.width(0 +'%');
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
	




	$.fn[ModuleName] = function ( method, options, options2 ) {
		return this.each(function(){
			var $this = $(this);
			var module = $this.data( ModuleName );
			var opts = null;
			var opts2= null;
			if ( !!module ) {
				if ( typeof method === 'string' &&  typeof options === 'undefined' ) {
					module[method]();
				} else if ( typeof method === 'string' && typeof options === 'object' || typeof options === 'string' || typeof options === 'number' ||typeof options === 'function') {
					module[method](options);
				} else if ( typeof method === 'string' && typeof options === 'object' || typeof options === 'string' || typeof options2 === 'string' || typeof options2 === 'number'|| typeof options2 === 'function') {
					module[method](options, options2);
				} else {
					console.log('unsupported options!');
				}
			} else {
				opts = $.extend( {}, Module.DEFAULTS, ( typeof method === 'object' && method ), ( typeof options === 'object' && options ), ( typeof options2 === 'object' && options2 ) );
				module = new Module(this, opts , opts2);
				$this.data(ModuleName, module);
				module.init();
				// 執行的function	
		}
		});
	};
/////////////////////////注意option數量
})(jQuery);