jQuery(document).ready(function() {

	/*
	*   Examples - images
	*/

	$("a#example1").fancyboxPlus({
		'titleShow'     : false
	});

	$("a#example2").fancyboxPlus({
		'titleShow'     : false,
		'transitionIn'	: 'elastic',
		'transitionOut'	: 'elastic',
		'easingIn'      : 'easeOutBack',
		'easingOut'     : 'easeInBack'
	});

	$("a#example3").fancyboxPlus({
	    'titleShow'     : false,
		'transitionIn'	: 'none',
		'transitionOut'	: 'none'
	});

	$("a#example4").fancyboxPlus();

	$("a#example5").fancyboxPlus({
		'titlePosition'  : 'inside'
	});

	$("a#example6").fancyboxPlus({
		'titlePosition'  : 'over'
	});

	$("a[rel=example_group]").fancyboxPlus({
		'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'titlePosition' 	: 'over',
		'titleFormat'       : function(title, currentArray, currentIndex, currentOpts) {
		    return '<span id="fancybox-title-over">Image ' +  (currentIndex + 1) + ' / ' + currentArray.length + ' ' + title + '</span>';
		}
	});

	/*
	*   Examples - various
	*/

	$(".various").fancyboxPlus({
		'transitionIn'	: 'none',
		'transitionOut'	: 'none'
	});

	$("#various1").fancyboxPlus({
		'titlePosition'		: 'inside',
		'transitionIn'		: 'none',
		'transitionOut'		: 'none'
	});

	$("#various2").fancyboxPlus({
		'modal' : true
	});

	$("#various3").fancyboxPlus({
		ajax : {
		    type	: "POST",
		    data	: 'mydata=test'
		}
	});

	$("#various4").fancyboxPlus({
		ajax : {
		    type	: "POST"
		}
	});

	$("#various5").fancyboxPlus({
		'width'				: '75%',
		'height'			: '75%',
        'autoScale'     	: false,
        'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'type'				: 'iframe'
	});

	$("#various6").fancyboxPlus({
	    'padding'           : 0,
        'autoScale'     	: false,
        'transitionIn'		: 'none',
		'transitionOut'		: 'none'
	});

	$("#various7").fancyboxPlus({
		onStart		:	function() {
			return window.confirm('Continue?');
		},
		onCancel	:	function() {
			alert('Canceled!');
		},
		onComplete	:	function() {
            alert('Completed!');
		},
		onCleanup	:	function() {
            return window.confirm('Close?');
		},
		onClosed	:	function() {
            alert('Closed!');
		}
	});

	$("#various8, #various9").fancyboxPlus();

	/*
	*   Examples - manual call
	*/

	$("#manual1").click(function() {
		$.fancyboxPlus({
			//'orig'			: $(this),
			'padding'		: 0,
			'href'			: 'http://farm9.staticflickr.com/8568/16388772452_f4d77a92c7_b.jpg',
			'title'   		: 'Lorem ipsum dolor sit amet',
			'transitionIn'	: 'elastic',
			'transitionOut'	: 'elastic'
		});
    });

    $("#manual2").click(function() {
		$.fancyboxPlus([
			'http://farm8.staticflickr.com/7308/15783866983_27160395b9_b.jpg',
			'http://farm3.staticflickr.com/2880/10346743894_0cfda8ff7a_b.jpg',
			{
				'href'	: 'http://farm6.staticflickr.com/5612/15344856989_449794889d_b.jpg',
				'title'	: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
			}
		], {
			'padding'			: 0,
			'transitionIn'		: 'none',
			'transitionOut'		: 'none',
			'type'              : 'image',
			'changeFade'        : 0
		});
	});

	/*
	*   Tips & Tricks
	*/

	$("#tip3").fancyboxPlus({
	    'transitionIn'	: 'none',
		'transitionOut'	: 'none',
		'titlePosition'	: 'over',
		'onComplete'	: function() {
			$("#fancybox-wrap").hover(function() {
				$("#fancybox-title").show();
			}, function() {
				$("#fancybox-title").hide();
			});
		}
	});

	$("#tip4").click(function() {
		$.fancyboxPlus({
			'padding'		: 0,
			'autoScale'		: false,
			'transitionIn'	: 'none',
			'transitionOut'	: 'none',
			'title'			: this.title,
			'width'			: 680,
			'height'		: 495,
			'href'			: this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
			'type'			: 'swf',
			'swf'			: {
			    'wmode'				: 'transparent',
				'allowfullscreen'	: 'true'
			}
		});

		return false;
	});

    $("#tip5").fancyboxPlus({
		'scrolling' : 'no',
		'titleShow'	: false,
		'onClosed'	: function() {
		    $("#login_error").hide();
		}
	});

	$("#login_form").bind("submit", function() {

	    if ($("#login_name").val().length < 1 || $("#login_pass").val().length < 1) {
	        $("#login_error").show();
	        $.fancybox.resize();
	        return false;
	    }

	    $.fancybox.showActivity();

		$.ajax({
			type	: "POST",
			cache	: false,
			url		: "/data/login.php",
			data	: $(this).serializeArray(),
			success: function(data) {
				$.fancyboxPlus(data);
			}
		});

		return false;
	});

	$("#tip6").fancyboxPlus({
		'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'autoScale'     	: false,
		'type'				: 'iframe',
		'width'				: 500,
		'height'			: 500,
		'scrolling'   		: 'no'
	});

	function formatTitle(title, currentArray, currentIndex, currentOpts) {
	    return '<div id="tip7-title"><span><a href="javascript:;" onclick="$.fancybox.close();"><img src="/data/closelabel.gif" /></a></span>' + (title && title.length ? '<b>' + title + '</b>' : '' ) + 'Image ' + (currentIndex + 1) + ' of ' + currentArray.length + '</div>';
	}

	$(".tip7").fancyboxPlus({
	    'showCloseButton'   : false,
		'titlePosition' 	: 'inside',
		'titleFormat'		: formatTitle
	});


	// Next JS snippets are only for fancybox.net

	/*
	*   Donate link
	*/
	$("a#donate").bind("click", function() {
		$("#donate_form").submit();
		return false;
	});

	/*
	*   Zebra-stripping table
	*/

	$("table.options tr:even").addClass('even');

});
