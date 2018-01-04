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
 			// var  w=this.$bar.width();	
	};

	// Module.prototype.setPercent = function( progressNumber){
	// 	this.addTransition();
	// 	var barWidth=this.$bar.width() / 800 * 100;
	// 	// var progressNumber=this.option.progressNumber;
	// 	console.log( barWidth +'%');
	// }


//處理中 //卡住了,只能去從Default的option中去改變設定
	// Module.prototype.assignPercent = function( progressNumber){
	// 	this.addTransition();
	// 	var progressNumber=this.option.progressNumber;
	// 	console.log(progressNumber +'%');
	// }
	Module.prototype.assignPercent = function( asOpt ,progressNumber){
		this.addTransition();
		var asWidth = asOpt;
		if(asWidth <=100 && asWidth >= 0){
			console.log('現在寬度:'+asWidth + '%');
			this.$bar.width(asWidth + '%');
		}else if( asWidth < 0 ){
			this.$bar.width(0 + '%');
			console.log('現在寬度:'+0+ '%');			
		}else{
			this.$bar.width(100 + '%');
			console.log('現在寬度:'+ 100 + '%');
		}
		
		// var b = this.option.progressNumber = this.assignPercent.option;
		// console.log(b);

		// var progressNumber = this.option.progressNumber;
		// var a =this.assignPercent.options;
		// console.log(a);
		
 		Module.prototype.progressNumber = function(){
			console.log('原設定的寬度'+this.option.progressNumber+'%');
		}
		this.progressNumber();
	}

/////完成80%
	Module.prototype.nextProgress = function(){
		this.addTransition();
		var nowNumber = this.$bar.width() / 800 *100;
		//抓出result的width;
		var nextNumber= ( 100 - nowNumber ) / 5+nowNumber;
		
		var nowNumber= ++nextNumber;
		
		if(nowNumber<100 ){
			this.$bar.width(nowNumber+'%');
		}	
	}


	Module.prototype.doneProgress = function(){
		this.addTransition();
		this.$bar.width(100+'%');  		
	}

	Module.prototype.zeroProgress = function(){
		this.addTransition();
		this.$bar.width(0 +'%');
	}

	Module.prototype.addTransition = function() {
		var x = document.createElement("STYLE");
		var t = document.createTextNode(".result {transition:"+this.option.speed+"ms;}")
		x.appendChild(t);
    	document.head.appendChild(x);
	};

	// if ( ! this.$ele.hasClass('transition') ) {
	// 	this.$ele.addClass('transition');
	// };
	//判斷ele是否有transition,如果沒有則加。



	$.fn[ModuleName] = function ( method, options, options2 ) {
		return this.each(function(){
			var $this = $(this);
			var module = $this.data( ModuleName );
			var opts = null;
			var opts2= null;
			if ( !!module ) {
				if ( typeof method === 'string' &&  typeof options === 'undefined' ) {
					module[method]();
				} else if ( typeof method === 'string' && typeof options === 'object' || typeof options === 'string' || typeof options === 'number' ) {
					module[method](options);
				} else if ( typeof method === 'string' && typeof options === 'object' || typeof options === 'string' || typeof options === 'number' && typeof options2 === 'object' || typeof options2 === 'string' || typeof options2 === 'number') {
					module[method](options)(options2);
				} else {
					console.log('unsupported options!');
				}
			} else {
				opts = $.extend( {}, Module.DEFAULTS, ( typeof method === 'object' && method ), ( typeof options === 'object' && options ), ( typeof options2 === 'object' && options2 ) );
				module = new Module(this, opts, opts2);
				$this.data(ModuleName, module);
				module.init();
				// 執行的function	
		}
		});
	};

})(jQuery);