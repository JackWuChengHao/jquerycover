/**
 * 快速创建蒙层
 * 由JackWuChengHao创建
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
		id:null

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
			
		$.cover.appendTo($.container);
		
		
		if(typeof($(element).attr("id")) == "undefined"){
				
		}else{
			
			 options = $.extend({},{id:$(element).attr("id")},$(element).data("options"));
			
		}
		
		this.options = {};
		
		this.options = options;
		
		this.overwrite(this.options);

	};
	
	/**
	 * 组件的功能原型
	 * 
	 */
	quickCover.prototype = {
			constructor: quickCover,
			writecontent:function(id,content){
				var self = this;
				if(id){
					var inid = "#"+id;
					$(".quickcover",$(inid).prev()).html(content);
				}else{
					$(".quickcover").html(content);
				}
			},
			overwrite:function(options){
				var self = this;
				var options = $.extend({},defaultOptions,self.options,options);
				self.clear(options.id);
				self.writecontent(options.id,options.covercontent);
			},
			clear:function(id){
				var self = this;
				if(id){
				var inid = "#"+id;
				$(".quickcover",$(inid).prev()).html(defaultOptions.covercontent);
				}else{
					$(".quickcover").html("");
				}
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

	/**
	 * 默认初始化
	 */
	$(function() {
		$("input[data-role=quickcover]").quickcover();
	});
	
	$.fn.quickcover.Constructor = quickCover;

})(window.jQuery)