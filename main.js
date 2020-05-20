jQuery(document).ready(function () {
    "use strict"
    $('.su').ripples({
        dropRadius: 50,
        perturbance: 0.01,

    });

    $('.text').typed({
        strings:["<strong>First </strong><strong>sentence.</strong>","Second sentence."],
        typespeed:0,
        loop:true
    });
});