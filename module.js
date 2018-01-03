(function($) {
	
	'use strict';

	var ModuleName='ps_flpk';

	var Module = function ( ele, options ) {
		this.ele = ele;
		this.$ele = $(ele);
		this.option = options;
		this.progressPercent = 0;
		this.result='<div class="result" style="width:'+this.option.progressNumber+'%"></div>';
		this.$result=$('<div class="result" ></div>');
		this.$bar = $('.result');
	};
	
	// 下面是DEFAULTS物件 
	Module.DEFAULTS = {
			speed:1000,
			progressNumber :50,
     }
	


	
	// document.getElementById('result').style.transition=this.option.speed+'ms';
	
	Module.prototype.init = function () {
			var barLenght = this.option.progressNumber;
			this.$bar.width(barLenght+'%');
 			this.addTransition();
 		// 	var progressNumber =0;
 		// 	var progressPercent=this.option.progressNumber;
			// console.log(progressPercent);
			// var a = document.getElementsByClassName('result');
			// console.log(a);
 			// document.getElementById('result').style.width= progressNumber+'%';
	};

	Module.prototype.setPercent = function( progressNumber){
		this.addTransition();
		// document.getElementById('result').style.width= this.option.progressNumber+'%';
		var progressNumber=this.option.progressNumber;
		console.log(progressNumber +'%');
		// return  this.option.progressNumber;
	}


//處理中 //卡住了,只能去從Default的option中去改變設定
	Module.prototype.assignPercent = function( progressNumber){
		this.addTransition();
		// document.getElementById('result').style.width= this.option.progressNumber+'%';
		var progressNumber=this.option.progressNumber;
		console.log(progressNumber +'%');
		// return  this.option.progressNumber;
	}
	// Module.prototype.assignPercent = function(a){
	// 	this.a = a;
	// 	this.addTransition();
	// 	document.getElementById('result').style.width= this.a+'%';
	// 	var a=this.a;
	// 	console.log(a +'%');
	// 	// return  this.option.progressNumber;
	// }

/////完成80%
	Module.prototype.nextProgress = function(){
		
		this.appendChild('<div class="result" style="width:50%"></div>');
		// var nowNumber= (document.getElementsByClassName("result").offsetWidth) / 800*100;
		// console.log(nowNumber);		
		// this.addTransition();
		// // console.log(nowNumber);
		// var nextNumber= ( 100 - nowNumber ) / 5+nowNumber;
		// var nowNumber= ++nextNumber;
		// if(nowNumber<100 ){
		// 	// document.getElementById('result').style.width=(nowNumber)+'%';
		// 	console.log(nowNumber+'%')
		// }
	}


	Module.prototype.doneProgress = function(){
		this.addTransition();
		var barLenght = 100;
		this.$bar.width(barLenght+'%');  		
	}

	Module.prototype.zeroProgress = function(){
		this.addTransition();
		var barLenght = 0;
		this.$bar.width(barLenght+'%');
	}

	Module.prototype.addTransition = function() {
		var x = document.createElement("STYLE");
		var t = document.createTextNode(".result {transition:"+this.option.speed+"ms;}")
		x.appendChild(t);
    	document.head.appendChild(x);
		 // document.getElementById('result').style.transition=this.option.speed+'ms';
	};
	// if ( ! this.$ele.hasClass('transition') ) {
	// 	this.$ele.addClass('transition');
	// };
	//判斷ele是否有transition,如果沒有則加。



	$.fn[ModuleName] = function ( method, options ) {
		return this.each(function(){
			var $this = $(this);
			var module = $this.data( ModuleName );
			var opts = null;
			if ( !!module ) {
				if ( typeof method === 'string' &&  typeof options === 'undefined' ) {
					module[method]();
				} else if ( typeof method === 'string' && typeof options === 'object' || typeof options === 'string' ) {
					module[method](options);
				} else {
					console.log('unsupported options!');
				}
			} else {
				opts = $.extend( {}, Module.DEFAULTS, ( typeof method === 'object' && method ), ( typeof options === 'object' && options ) );
				module = new Module(this, opts);
				$this.data( ModuleName, module );
				module.init();
				// 執行的function	
		}
		});
	};

})(jQuery);