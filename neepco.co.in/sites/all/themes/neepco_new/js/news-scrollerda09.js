jQuery(document).ready(function($){
	function n(i) {
		var e = i.height();
		duration = (e + parseInt(i.css("marginTop"))) / .030, i.animate({
			marginTop : -e
		}, duration, "linear", function() {
			i.appendTo(i.parent()).css("marginTop", 6), n(i.parent().children(":first"))
		})
	}

	var i = $("#ticker1"), e = $("#ticker2"), o = $("#ticker3");
	i.children().filter("ul").each(function() {
		var n = $(this), e = $("<div>");
		n.next().appendTo(e), n.prependTo(e), e.appendTo(i)
	}), i.css("overflow", "hidden"), n(i.children(":first"));
	var t = 0;
	$("#stop").click(function() {
		i.children().stop(), t = 1, $("#stop").hide(), $("#play").show()
	}), i.mouseenter(function() {
		i.children().stop()
	}), $("#play").click(function() {
		n(i.children(":first")), t = 0, $("#stop").show(), $("#play").hide()
	}), i.mouseleave(function() {
		0 == t && n(i.children(":first"))
	}), e.children().filter("ul").each(function() {
		var n = $(this), i = $("<div>");
		n.next().appendTo(i), n.prependTo(i), i.appendTo(e)
	}), e.css("overflow", "hidden"), n(e.children(":first"));
	var r = 0;
	$("#stop2").click(function() {
		e.children().stop(), r = 1, $("#stop2").hide(), $("#play2").show()
	}), e.mouseenter(function() {
		e.children().stop()
	}), $("#play2").click(function() {
		n(e.children(":first")), r = 0, $("#stop2").show(), $("#play2").hide()
	}), e.mouseleave(function() {
		0 == r && n(e.children(":first"))
	}), o.children().filter("ul").each(function() {
		var n = $(this), i = $("<div>");
		n.next().appendTo(i), n.prependTo(i), i.appendTo(o)
	}), o.css("overflow", "hidden"), n(o.children(":first"));
	var r = 0;
	$("#stop3").click(function() {
		o.children().stop(), r = 1, $("#stop3").hide(), $("#play3").show()
	}), o.mouseenter(function() {
		o.children().stop()
	}), $("#play3").click(function() {
		n(o.children(":first")), r = 0, $("#stop3").show(), $("#play3").hide()
	}), o.mouseleave(function() {
		0 == r && n(o.children(":first"))
	})
}); 
