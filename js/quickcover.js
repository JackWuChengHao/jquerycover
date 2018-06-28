/**
 * 快速创建蒙层
 * 
 */
(function( $ ){
	/**
	 * 判断是否加载了jquery
	 */
	if(!$){
		alert("please load jquery");
		return;
	}
	
	
	defaultOptions = {
		
		covercontent: "<h4>quickcover</h4>",
		
	}

	/**
	 * quickcover的构造函数
	 */
	quickCover = function(element,options){

		$.element = $(element);

		$.container = $.element.prev();

		$.container.addClass("quickcovercontainer");

		$.container.height =  $.container.height();

		$.container.width = $.container.width();

		$.cover = $('<div class="quickcover" style="height:'+ $.container.height +'px;width:'
				+ $.container.width  +'px"> </div>');
		
		$.cover.html(defaultOptions.covercontent);
			
		$.cover.appendTo($.container);

	};
	
	/**
	 * 组件的功能原型
	 * 
	 */
	quickCover.prototype = {
			constructor: quickCover,
			writecontent:function(content){
				var self = this;
				$(".quickcover",self.prev).html(content);
			},
			overwrite:function(options){
				var self = this,
				options = $.extend({},defaultOptions,options);
				console.log(options.covercontent);
				self.clear();
				self.writecontent(options.covercontent);
			},
			clear:function(){
				var self = this;
				$(".quickcover",self.prev).html(defaultOptions.covercontent);
			}

	}


	$.fn.quickcover = function(){
		
		var results = [];
		
		this.each(function(arg1,arg2,arg3){

			results.push(new quickCover(this));

		});
		
		if(results.length === 1){
			return results[0];
		}else{
			return results;			
		}

	};


	$(function() {
		$("input[data-role=quickcover]").quickcover();
	});
	
	$.fn.quickcover.Constructor = quickCover;

})(window.jQuery)