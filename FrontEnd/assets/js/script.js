let contents = ["Rent a Car Directly From Owner ", "Rent a Car Anywhere Anytime ", "SRI LANKA’S NO. 1 VEHICLE SHARING NETWORK "];

let charCount = 0;

let wordCount = 0;

setInterval(function () {
    animateText();
}, 400);

function animateText() {

    let content = contents[wordCount].substring(0, charCount) + "|";

    $("#content").text(content);

    charCount++;

    if (charCount == contents[wordCount].length) {

        charCount = 0;

        wordCount++;

        if (wordCount == contents.length) {

            wordCount = 0;

        }

    }

};

function aos_init() {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
}
window.addEventListener('load', () => {
    aos_init();
});

$(document).ready(function () {
    $("#homeBtn>a").css("color", "#00a26e");
    $("#aboutBtn>a").css("color", "#ffffff");
    $("#serviceBtn>a").css("color", "#ffffff");
    $("#carsBtn>a").css("color", "#ffffff");
    $("#clientBtn>a").css("color", "#ffffff");
    $("#contactBtn>a").css("color", "#ffffff");
    $("#registerBtn>a").css("color", "#ffffff");
    $("#loginBtn>a").css("color", "#ffffff");

    $('#container-login').attr('style', 'display : none !important');
    $('#indexContent').attr('style', 'display : block !important');
    $('#header_section').attr('style', 'margin-top : 0 !important');
    $('#login-block').attr('style', 'background : white; !important');

});


$("#homeBtn").click(function () {
    $("#homeBtn>a").css("color", "#00a26e");
    $("#aboutBtn>a").css("color", "#ffffff");
    $("#serviceBtn>a").css("color", "#ffffff");
    $("#carsBtn>a").css("color", "#ffffff");
    $("#clientBtn>a").css("color", "#ffffff");
    $("#contactBtn>a").css("color", "#ffffff");
    $("#registerBtn>a").css("color", "#ffffff");
    $("#loginBtn>a").css("color", "#ffffff");

    $('#container-login').attr('style', 'display : none !important');
    $('#indexContent').attr('style', 'display : block !important');
    $('#header_section').attr('style', 'margin-top : 0 !important');
    $('#login-block').attr('style', 'background : white; !important');

});

$("#aboutBtn").click(function () {
    $("#homeBtn>a").css("color", "#ffffff");
    $("#aboutBtn>a").css("color", "#00a26e");
    $("#serviceBtn>a").css("color", "#ffffff");
    $("#carsBtn>a").css("color", "#ffffff");
    $("#clientBtn>a").css("color", "#ffffff");
    $("#contactBtn>a").css("color", "#ffffff");
    $("#registerBtn>a").css("color", "#ffffff");
    $("#loginBtn>a").css("color", "#ffffff");

    $('#container-login').attr('style', 'display : none !important');
    $('#indexContent').attr('style', 'display : block !important');
    $('#header_section').attr('style', 'margin-top : 0 !important');
    $('#login-block').attr('style', 'background : white; !important');

});

$("#serviceBtn").click(function () {
    $("#homeBtn>a").css("color", "#ffffff");
    $("#aboutBtn>a").css("color", "#ffffff");
    $("#serviceBtn>a").css("color", "#00a26e");
    $("#carsBtn>a").css("color", "#ffffff");
    $("#clientBtn>a").css("color", "#ffffff");
    $("#contactBtn>a").css("color", "#ffffff");
    $("#registerBtn>a").css("color", "#ffffff");
    $("#loginBtn>a").css("color", "#ffffff");

    $('#container-login').attr('style', 'display : none !important');
    $('#indexContent').attr('style', 'display : block !important');
    $('#header_section').attr('style', 'margin-top : 0 !important');
    $('#login-block').attr('style', 'background : white; !important');

});

$("#carsBtn").click(function () {
    $("#homeBtn>a").css("color", "#ffffff");
    $("#aboutBtn>a").css("color", "#ffffff");
    $("#serviceBtn>a").css("color", "#ffffff");
    $("#carsBtn>a").css("color", "#00a26e");
    $("#clientBtn>a").css("color", "#ffffff");
    $("#contactBtn>a").css("color", "#ffffff");
    $("#registerBtn>a").css("color", "#ffffff");
    $("#loginBtn>a").css("color", "#ffffff");

    $('#container-login').attr('style', 'display : none !important');
    $('#indexContent').attr('style', 'display : block !important');
    $('#header_section').attr('style', 'margin-top : 0 !important');
    $('#login-block').attr('style', 'background : white; !important');

});

$("#clientBtn").click(function () {
    $("#homeBtn>a").css("color", "#ffffff");
    $("#aboutBtn>a").css("color", "#ffffff");
    $("#serviceBtn>a").css("color", "#ffffff");
    $("#carsBtn>a").css("color", "#ffffff");
    $("#clientBtn>a").css("color", "#00a26e");
    $("#contactBtn>a").css("color", "#ffffff");
    $("#registerBtn>a").css("color", "#ffffff");
    $("#loginBtn>a").css("color", "#ffffff");

    $('#container-login').attr('style', 'display : none !important');
    $('#indexContent').attr('style', 'display : block !important');
    $('#header_section').attr('style', 'margin-top : 0 !important');
    $('#login-block').attr('style', 'background : white; !important');

});

$("#contactBtn").click(function () {
    $("#homeBtn>a").css("color", "#ffffff");
    $("#aboutBtn>a").css("color", "#ffffff");
    $("#serviceBtn>a").css("color", "#ffffff");
    $("#carsBtn>a").css("color", "#ffffff");
    $("#clientBtn>a").css("color", "#ffffff");
    $("#contactBtn>a").css("color", "#00a26e");
    $("#registerBtn>a").css("color", "#ffffff");
    $("#loginBtn>a").css("color", "#ffffff");

    $('#container-login').attr('style', 'display : none !important');
    $('#indexContent').attr('style', 'display : block !important');
    $('#header_section').attr('style', 'margin-top : 0 !important');
    $('#login-block').attr('style', 'background : white; !important');

});

$("#registerBtn").click(function () {
    $("#homeBtn>a").css("color", "#ffffff");
    $("#aboutBtn>a").css("color", "#ffffff");
    $("#serviceBtn>a").css("color", "#ffffff");
    $("#carsBtn>a").css("color", "#ffffff");
    $("#clientBtn>a").css("color", "#ffffff");
    $("#contactBtn>a").css("color", "#ffffff");
    $("#registerBtn>a").css("color", "#00a26e");
    $("#loginBtn>a").css("color", "#ffffff");

    $('#container-login').attr('style', 'display : none !important');
    $('#login-block').attr('style', 'background : white; !important');
    $('#indexContent').attr('style', 'display : block !important');
    $('#header_section').attr('style', 'margin-top : 0 !important');
});

$("#loginBtn").click(function () {
    $('#container-login').attr('style', 'display : block !important');
    $('#indexContent').attr('style', 'display : none !important');
    $('#login-block').attr('style', 'background : linear-gradient(to bottom, #FFB88C, #DE6262); !important');
    $('#login-block').attr('style', 'margin-top : -50px  !important');
    $('#header_section').attr('style', 'margin-top : -90px !important');

    $("#homeBtn>a").css("color", "#ffffff");
    $("#aboutBtn>a").css("color", "#ffffff");
    $("#serviceBtn>a").css("color", "#ffffff");
    $("#carsBtn>a").css("color", "#ffffff");
    $("#clientBtn>a").css("color", "#ffffff");
    $("#contactBtn>a").css("color", "#ffffff");
    $("#registerBtn>a").css("color", "#ffffff");
    $("#loginBtn>a").css("color", "#00a26e");
});


(function ($) {
    $.fn.countTo = function (options) {
        options = options || {};

        return $(this).each(function () {
            // set options for current element
            var settings = $.extend({}, $.fn.countTo.defaults, {
                from: $(this).data('from'),
                to: $(this).data('to'),
                speed: $(this).data('speed'),
                refreshInterval: $(this).data('refresh-interval'),
                decimals: $(this).data('decimals')
            }, options);

            // how many times to update the value, and how much to increment the value on each update
            var loops = Math.ceil(settings.speed / settings.refreshInterval),
                increment = (settings.to - settings.from) / loops;

            // references & variables that will change with each update
            var self = this,
                $self = $(this),
                loopCount = 0,
                value = settings.from,
                data = $self.data('countTo') || {};

            $self.data('countTo', data);

            // if an existing interval can be found, clear it first
            if (data.interval) {
                clearInterval(data.interval);
            }
            data.interval = setInterval(updateTimer, settings.refreshInterval);

            // initialize the element with the starting value
            render(value);

            function updateTimer() {
                value += increment;
                loopCount++;

                render(value);

                if (typeof (settings.onUpdate) == 'function') {
                    settings.onUpdate.call(self, value);
                }

                if (loopCount >= loops) {
                    // remove the interval
                    $self.removeData('countTo');
                    clearInterval(data.interval);
                    value = settings.to;

                    if (typeof (settings.onComplete) == 'function') {
                        settings.onComplete.call(self, value);
                    }
                }
            }

            function render(value) {
                var formattedValue = settings.formatter.call(self, value, settings);
                $self.html(formattedValue);
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0,               // the number the element should start at
        to: 0,                 // the number the element should end at
        speed: 1000,           // how long it should take to count between the target numbers
        refreshInterval: 100,  // how often the element should be updated
        decimals: 0,           // the number of decimal places to show
        formatter: formatter,  // handler for formatting the value before rendering
        onUpdate: null,        // callback method for every time the element is updated
        onComplete: null       // callback method for when the element finishes updating
    };

    function formatter(value, settings) {
        return value.toFixed(settings.decimals);
    }
}(jQuery));

jQuery(function ($) {
    // custom formatting example
    $('.count-number').data('countToOptions', {
        formatter: function (value, options) {
            return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
        }
    });

    // start all the timers
    $('.timer').each(count);

    function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
    }
});

jQuery(function ($) {
    // Show or hide the sticky footer button
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 200) {
            $(".scroll-to-top").fadeIn(200);
        } else {
            $(".scroll-to-top").fadeOut(200);
        }
    });

    // Animate the scroll to top
    $(".scroll-to-top").on("click", function (event) {
        event.preventDefault();
        $("html, body").animate({scrollTop: 0}, 300);
    });
});
