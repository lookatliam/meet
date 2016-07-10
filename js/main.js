$(document).ready(function(){

	/*$("input[name='business']").click(function() {
		if($("#lph").prop("checked")) {
			console.log("ye");
			
			$("input[name='ip']").removeAttr("disabled");
		} else {
			console.log("no");
			$("input[name='ip']").attr("disabled", true);
		}
	});*/

	$(".product-name").click(function() {
		$(".product-head").parent(".product-content").parent(".price-product").removeClass("active-product");
		$(this).parent(".product-head").parent(".product-content").parent(".price-product").addClass("active-product");
		$(".product-head").parent(".product-content").parent(".price-product").children(".edit-form").hide();
		$(this).parent(".product-head").parent(".product-content").parent(".price-product").children(".edit-form").show();
	});

	jQuery(function($){
	  $("#phone").mask("8 999 999-99-99");
	  $(".price-edit").mask("99999");
	  $(".price-preorder-edit").mask("99999");
	});

	$(".contact-text-add_contact").click(function() {
		$(".contact-list-add-block").toggle("show");
	});

	$(".contact-list-add-block").children(".close").click(function() {
		$(".contact-list-add-block").hide();
	});


	

	/** Добавление полей контактов начало **/

	$(".add-vk-page").click(function() {
		$(".contact-item-vk-page").clone(withDataAndEvents='true').removeClass("item-hide").removeClass("contact-item-vk-page").appendTo(".contact-list");
		$(".contact-list-add-block").hide();
	});

	$(".add-vk-group").click(function() {
		$(".contact-item-vk-group").clone(withDataAndEvents='true').removeClass("item-hide").removeClass("contact-item-vk-group").appendTo(".contact-list");
		$(".contact-list-add-block").hide();
	});	

	$(".add-email").click(function() {
		$(".contact-item-email").clone(withDataAndEvents='true').removeClass("item-hide").removeClass("contact-item-email").appendTo(".contact-list");
		$(".contact-list-add-block").hide();
	});	

	$(".add-site").click(function() {
		$(".contact-item-site").clone(withDataAndEvents='true').removeClass("item-hide").removeClass("contact-item-site").appendTo(".contact-list");
		$(".contact-list-add-block").hide();
	});

	$(".add-skype").click(function() {
		$(".contact-item-skype").clone(withDataAndEvents='true').removeClass("item-hide").removeClass("contact-item-skype").appendTo(".contact-list");
		$(".contact-list-add-block").hide();
	});


	/** Добавление полей контактов конец **/

	//$(".contact-item-delete").click(function() {
	//	$(this).parent(".contact-item").remove();
	//});

	$(".contact-item-delete").click(function() {
		$(this).parent(".contact-item").addClass("delete-this");
		$(".delete-this").remove();
	});

	$(".contact-text-add_phone").click(function() {
		//$(".data-phones").append('<form action="#" method="post"><input type="text" class="element-text contact-text-phone" id="phone" placeholder="8 ___ ___-__-__"><a href="#" class="contact-text-comment_link">Комментарий</a><input type="text" class="contact-text-comment_text"><input type="submit" class="contact-text-submit" value="Подтвердить"></form><div class="contact-checkbox-container"><div class="contact-checkbox active"><input type="checkbox" id="contact-checkbox-whats_app1" name="business" value="ip"><label for="contact-checkbox-whats_app1"><span>На номере есть Whats App</span></label></div><div class="contact-checkbox active"><input type="checkbox" id="contact-checkbox-viber1" name="business" value="ip"><label for="contact-checkbox-viber1"><span>На номере есть Viber</span></label></div></div>');
		$(".phones-original").clone(withDataAndEvents='true').attr("class", "phones-clone").appendTo(".data-phones");
		//$(".phones-clone").children(".contact-checkbox-container").children(".contact-checkbox").addClass("active");
		$(".phones-clone").children(".contact-checkbox-container").children(".contact-checkbox").children("#contact-checkbox-whats_app").attr("id", "contact-checkbox-whats_app1");
		$(".phones-clone").children(".contact-checkbox-container").children(".contact-checkbox").children("label[for='contact-checkbox-whats_app']").attr("for", "contact-checkbox-whats_app1");
		$(".phones-clone").children(".contact-checkbox-container").children(".contact-checkbox").children("#contact-checkbox-viber").attr("id", "contact-checkbox-viber1");
		$(".phones-clone").children(".contact-checkbox-container").children(".contact-checkbox").children("label[for='contact-checkbox-viber']").attr("for", "contact-checkbox-viber1");
		if($("#contact-checkbox-whats_app").parent(".contact-checkbox").hasClass("active")) {
			$(".phones-clone").children(".contact-checkbox-container").children(".contact-checkbox").children("#contact-checkbox-whats_app1").parent(".contact-checkbox").addClass("active");
		} else {
			$(".phones-clone").children(".contact-checkbox-container").children(".contact-checkbox").children("#contact-checkbox-whats_app1").parent(".contact-checkbox").removeClass("active");
		}

		if($("#contact-checkbox-viber").parent(".contact-checkbox").hasClass("active")) {
			$(".phones-clone").children(".contact-checkbox-container").children(".contact-checkbox").children("#contact-checkbox-viber1").parent(".contact-checkbox").addClass("active");
		} else {
			$(".phones-clone").children(".contact-checkbox-container").children(".contact-checkbox").children("#contact-checkbox-viber1").parent(".contact-checkbox").removeClass("active");
		}
		$(this).remove();
	});

	$("#contact-checkbox-whats_app").change(function() {
		$(this).parent(".contact-checkbox").toggleClass("active");
	});

	$("#contact-checkbox-viber").change(function() {
		$(this).parent(".contact-checkbox").toggleClass("active");
	});

	/*$(".element-button").click(function() {
		$(".element-button").removeClass("active");
		$(this).addClass("active");
	});*/

	$(".add-product").click(function() {
		$(".new-form").show();
		$(".new-form").parent(".price-product").addClass("active-product");
	});

	$(".element-button").click(function() {
		$(this).toggleClass("active");
	});

	$(".price-edit-select").change(function() {
		$(".price-edit-select-double").html($(this).val());
	});

	$(".clarify-link").click(function() {
		$(this).parent(".addition-link").hide();
		$(".addition-text").show();
		return false;
	});

	$(".contact-text-comment_link").click(function() {
		$(this).hide();
		$(".contact-text-comment_text").show();
		return false;
	});

	$(".category-name").click(function() {
		$(this).parent(".price-category").next().toggle("show");
	});

	$(".contact-item-text").keyup(function() {
		if($(this).val() != "") {
			$(this).parent(".contact-item").children(".contact-item-delete").hide("contact-item-delete");
			$(this).parent(".contact-item").children(".contact-item-clear").show();
			//$("contact-item-clear").show();
		} else {
			$(this).parent(".contact-item").children(".contact-item-clear").hide("contact-item-clear");
			$(this).parent(".contact-item").children(".contact-item-delete").show();
		}
	});

	$(".contact-item-clear").click(function() {
		$(this).parent(".contact-item").children(".contact-item-text").val("");
		$(this).parent(".contact-item").children(".contact-item-clear").hide("contact-item-clear");
		$(this).parent(".contact-item").children(".contact-item-delete").show();
	});

	var yesnot = 0;

	$(".preorder-check").change(function() {
		if($(".preorder-not").hasClass("active-order")) {
			$(this).parent(".data").children(".preorder-not").removeClass("active-order");
			$(this).parent(".data").children(".preorder-yes").addClass("active-order");
			console.log("1");
		} else if($(".preorder-yes").hasClass("active-order")) {
			$(this).parent(".data").children(".preorder-yes").removeClass("active-order");
			$(this).parent(".data").children(".preorder-not").addClass("active-order");
			console.log("2");
		}
	});

	$(".tara-check").change(function() {
		if($(".tara-new").hasClass("active-order")) {
			$(this).parent(".options").children(".tara-new").removeClass("active-order");
			$(this).parent(".options").children(".tara-old").addClass("active-order");
			console.log("1");
		} else if($(".tara-old").hasClass("active-order")) {
			$(this).parent(".options").children(".tara-old").removeClass("active-order");
			$(this).parent(".options").children(".tara-new").addClass("active-order");
			console.log("2");
		}
	});

	$(".trader").click(function() {
		if ($(this).hasClass("trader-lph")) {
			$(".trader-check-ip").toggle();
		} else {
			$(".trader-check-ip").hide();
		}
		$(this).toggleClass("active");
		$(".trader").not($(this)).removeClass("active");

		if ($(".company-checkbox").hasClass("active")) {
			$(".trader").removeClass("active");
			$(".trader-check-ip").hide();
		}
	});

	$(".company-checkbox").change(function() {
		if(!$(this).hasClass("active")) {
			$(this).addClass("active");
			$(".trader").removeClass("active");
			$(".trader-check-ip").hide();
		} else {
			$(this).removeClass("active");
		}
	});

	$(".bookmark").click(function() {
		$(this).toggleClass("active");
		return false;
	});

	var nowHeight = $(window).height() - 188;
	$(".onsale").height(nowHeight);
	$(".megachat").height(nowHeight);
	$(".contacts").height(nowHeight);
	$(".goods").height(nowHeight);
	$(".doc-view").height(nowHeight);

	$(".inblock-chat").height(nowHeight - 243);
	$(".inblock-onsale").height(nowHeight - 60);
	$(".inblock-price").height(nowHeight - 108);

	$(window).resize(function() {
		nowHeight = $(window).height() - 188;
		$(".onsale").height(nowHeight);
		$(".megachat").height(nowHeight);
		$(".contacts").height(nowHeight);
		$(".goods").height(nowHeight);
		$(".doc-view").height(nowHeight);

		$(".inblock-chat").height(nowHeight - 243);
		$(".inblock-onsale").height(nowHeight - 60);
		$(".inblock-price").height(nowHeight - 108);
	});

	$(".inblock-chat").niceScroll();
	$(".inblock-onsale").niceScroll();
	$(".inblock-price").niceScroll();

	$(".popup-list").niceScroll();

	$(".bookmark").click(function() {
		$(this).toggleClass("active-bookmark");
	});

	$(".bookmark-switch input").click(function() {
		if(!$(this).hasClass("active")) {
			$(".megachat").toggle();
		$(".contacts").toggle();
		}
	});

	$(".price-buttons input").click(function() {
		$(".price-buttons input").removeClass("active");
		$(this).addClass("active");
	});

	$(".selection input").click(function() {
		$(".selection input").removeClass("active");
		$(this).addClass("active");
	});

	$(".preorder-or-instock input").click(function() {
		$(".preorder-or-instock input").removeClass("active");
		$(this).addClass("active");
	});

	$(".one-or-company input").click(function() {
		$(".one-or-company input").removeClass("active");
		$(this).addClass("active");
	});

	$(".add-med").click(function() {
		$(".popup-plus").hide();
		$(".shadow").show();
		$(".popup-plus-meda").toggle();
	});
	$(".popup-plus-meda .close").click(function() {
		$(".popup-plus-meda").hide();
		$(".shadow").hide();
	});
	$(".popup-plus-meda .popup-list li").click(function() {
		$(this).toggleClass("active");
	});

	$(".add-bee").click(function() {
		$(".popup-plus").hide();
		$(".shadow").show();
		$(".popup-plus-bee").toggle();
	});
	$(".popup-plus-bee .close").click(function() {
		$(".popup-plus-bee").hide();
		$(".shadow").hide();
	});
	$(".popup-plus-bee .popup-list li").click(function() {
		$(this).toggleClass("active");
	});

	$(".add-other").click(function() {
		$(".popup-plus").hide();
		$(".shadow").show();
		$(".popup-plus-other").toggle();
	});
	$(".popup-plus-other .close").click(function() {
		$(".popup-plus-other").hide();
		$(".shadow").hide();
	});
	$(".popup-plus-other .popup-list li").click(function() {
		$(this).toggleClass("active");
	});

	$(".add-region").click(function() {
		$(".popup-plus").hide();
		$(".shadow").show();
		$(".popup-plus-region").toggle();
	});
	$(".popup-plus-region .close").click(function() {
		$(".popup-plus-region").hide();
		$(".shadow").hide();
	});
	$(".popup-plus-region .popup-list li").click(function() {
		$(this).toggleClass("active");
	});

	$(".shadow").click(function() {
		$(".popup-plus").hide();
		$(".shadow").hide();
	});

	$(".delivery-switch").click(function() {
		$(this).toggleClass("active");
	});

	$(".toggleSwitches").click(function() {
		$(this).toggleClass("active");
		$(".switches").toggle();
		$(".filters").toggleClass("activeMargin");
	});

	$(".inblock-onsale .price-product").hover(function() {
		$(this).toggleClass("active");
		$(".buyin", this).toggle();
	});

	$(".order-doc").click(function() {
		$(this).parent(".message").toggleClass("active");
		$(".doc-view").toggle('slow');
		return false;
	});

	$(".doc-view .close").click(function() {
		$(".message").removeClass("active");
		$(".doc-view").hide();
	});

	$(".add-season").click(function() {
		$(this).toggleClass("active");
	});

	$(".number").click(function() {
		$(this).hide();
		$(this).parent(".phone").children(".number-hide").show();
	});

	$(".visiting-cards-link").click(function() {
		$(this).toggleClass("active");
	});

	
});