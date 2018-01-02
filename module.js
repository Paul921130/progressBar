(function($) {
	
	'use strict';

	var ModuleName='ps_flpk';

	var Module = function ( ele, options ) {
		this.ele = ele;
		this.$ele = $(ele);
		this.option = options;
		this.satePoint =['zero','done'];
		this.sate= 0;
		this.timer
	};
	
	// 下面是DEFAULTS物件 
	Module.DEFAULTS = {
			speed:3000,
			progressNumber:50,
            radius: '0px',
            height: '3px',
            width: '100%'
     }
	

	
	// document.getElementById('result').style.transition=this.option.speed+'ms';
	
	Module.prototype.init = function () {
 			var progressNumber =0;
 			document.getElementById('result').style.width= progressNumber+'%';
			this.addTransition();
	};





	Module.prototype.assignPercent = function(progressNumber){
		this.addTransition();
		document.getElementById('result').style.width= this.option.progressNumber+'%';
		console.log(progressNumber +'%');
		return  progressNumber;
	}


	Module.prototype.nextProgress = function(progressNumber){
		this.addTransition();
		var progressNumber =(100 - progressNumber ) * 0.2 + progressNumber ;
		document.getElementById('result').style.width=progressNumber+'%';
		console.log(progressNumber+'%');
		return  progressNumber; 
	}

	Module.prototype.doneProgress = function(progressNumber){
		this.addTransition();
		var progressNumber= 100;
		document.getElementById('result').style.width=progressNumber+'%';
		console.log(progressNumber+'%');
		return  progressNumber; 
	}

	Module.prototype.zeroProgress = function(progressNumber){
		this.addTransition();
		var progressNumber= 0;
		document.getElementById('result').style.width=progressNumber+'%';
		console.log(progressNumber+'%');
		return  progressNumber;
	}

	Module.prototype.addTransition = function() {
		// if ( ! this.$ele.hasClass('transition') ) {
		// 	this.$ele.addClass('transition');
		// };
		document.getElementById('result').style.transition=this.option.speed+'ms';
	};//判斷ele是否有transition,如果沒有則加。



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