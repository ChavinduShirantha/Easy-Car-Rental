
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

$(document).ready(function() {
    $("#homeBtn>a").css("color", "#00a26e");
    $("#aboutBtn>a").css("color", "#ffffff");
    $("#serviceBtn>a").css("color", "#ffffff");
    $("#carsBtn>a").css("color", "#ffffff");
    $("#clientBtn>a").css("color", "#ffffff");
    $("#contactBtn>a").css("color", "#ffffff");
});


$("#homeBtn").click(function() {
    $("#homeBtn>a").css("color", "#00a26e");
    $("#aboutBtn>a").css("color", "#ffffff");
    $("#serviceBtn>a").css("color", "#ffffff");
    $("#carsBtn>a").css("color", "#ffffff");
    $("#clientBtn>a").css("color", "#ffffff");
    $("#contactBtn>a").css("color", "#ffffff");
});

$("#aboutBtn").click(function() {
    $("#homeBtn>a").css("color", "#ffffff");
    $("#aboutBtn>a").css("color", "#00a26e");
    $("#serviceBtn>a").css("color", "#ffffff");
    $("#carsBtn>a").css("color", "#ffffff");
    $("#clientBtn>a").css("color", "#ffffff");
    $("#contactBtn>a").css("color", "#ffffff");
});

$("#serviceBtn").click(function() {
    $("#homeBtn>a").css("color", "#ffffff");
    $("#aboutBtn>a").css("color", "#ffffff");
    $("#serviceBtn>a").css("color", "#00a26e");
    $("#carsBtn>a").css("color", "#ffffff");
    $("#clientBtn>a").css("color", "#ffffff");
    $("#contactBtn>a").css("color", "#ffffff");
});

$("#carsBtn").click(function() {
    $("#homeBtn>a").css("color", "#ffffff");
    $("#aboutBtn>a").css("color", "#ffffff");
    $("#serviceBtn>a").css("color", "#ffffff");
    $("#carsBtn>a").css("color", "#00a26e");
    $("#clientBtn>a").css("color", "#ffffff");
    $("#contactBtn>a").css("color", "#ffffff");
});

$("#clientBtn").click(function() {
    $("#homeBtn>a").css("color", "#ffffff");
    $("#aboutBtn>a").css("color", "#ffffff");
    $("#serviceBtn>a").css("color", "#ffffff");
    $("#carsBtn>a").css("color", "#ffffff");
    $("#clientBtn>a").css("color", "#00a26e");
    $("#contactBtn>a").css("color", "#ffffff");
});

$("#contactBtn").click(function() {
    $("#homeBtn>a").css("color", "#ffffff");
    $("#aboutBtn>a").css("color", "#ffffff");
    $("#serviceBtn>a").css("color", "#ffffff");
    $("#carsBtn>a").css("color", "#ffffff");
    $("#clientBtn>a").css("color", "#ffffff");
    $("#contactBtn>a").css("color", "#00a26e");
});


(function ($) {
    $.fn.countTo = function (options) {
        options = options || {};

        return $(this).each(function () {
            // set options for current element
            var settings = $.extend({}, $.fn.countTo.defaults, {
                from:            $(this).data('from'),
                to:              $(this).data('to'),
                speed:           $(this).data('speed'),
                refreshInterval: $(this).data('refresh-interval'),
                decimals:        $(this).data('decimals')
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

                if (typeof(settings.onUpdate) == 'function') {
                    settings.onUpdate.call(self, value);
                }

                if (loopCount >= loops) {
                    // remove the interval
                    $self.removeData('countTo');
                    clearInterval(data.interval);
                    value = settings.to;

                    if (typeof(settings.onComplete) == 'function') {
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
