arm = $('.arm');
ceaser = $('.caesar');
sarah = $('.sarah');
johan = $('.johan');

circleStats(85, 93, 60, 51);
$('.caesar').click(function () {
    $('.general').removeClass('activeStats');
    $('.caesar').addClass('activeStats');
    circleStats(75, 40,55, 70);
}); 
$('.arm').click(function () {
    $('.general').removeClass('activeStats');
    $('.arm').addClass('activeStats');
    circleStats(85, 93,60, 51);
}); 
$('.sarah').click(function () {
    $('.general').removeClass('activeStats');
    $('.sarah').addClass('activeStats');
    circleStats(94, 79,50, 46);
}); 
$('.johan').click(function () {
    $('.general').removeClass('activeStats');
    $('.johan').addClass('activeStats');
    circleStats(66,72,91,95);
}); 
// END Cirlce===============================================
$(document).ready(function(){
    $('.accordion-inner-one').click(function () {
        textBlock = $('.accordion-item__text-one');
    
    
    
        if (textBlock.hasClass('activeAcord')) {
            textBlock.removeClass('activeAcord');
        } else {
            $('.accordion-item__text').removeClass('activeAcord');
            textBlock.addClass('activeAcord');
        }
       
    });
    
    $('.accordion-inner-two').click(function () {
        textBlock = $('.accordion-item__text-two');
    
    
    
        if (textBlock.hasClass('activeAcord')) {
            textBlock.removeClass('activeAcord');
        } else {
            $('.accordion-item__text').removeClass('activeAcord');
            textBlock.addClass('activeAcord');
        }
        
    });
    $('.accordion-inner-three').click(function () {
        textBlock = $('.accordion-item__text-three');
    
    
    
        if (textBlock.hasClass('activeAcord')) {
            textBlock.removeClass('activeAcord');
        } else {
            $('.accordion-item__text').removeClass('activeAcord');
            textBlock.addClass('activeAcord');
        }
        
    });
})






function circleStats(value1, value2, value3, value4) {
    var myCircle = Circles.create({
        id: 'circles-1',
        radius: 60,
        value: value1,
        maxValue: 100,
        width: 3,
        text: function (value) { return value + '%'; },
        colors: ['#d2b5b5', '#ff0036'],
        duration: 300,
        wrpClass: 'circles-wrp',
        textClass: 'circles-text',
        valueStrokeClass: 'circles-valueStroke',
        maxValueStrokeClass: 'circles-maxValueStroke',
        styleWrapper: true,
        styleText: true
    });
    var myCircle = Circles.create({
        id: 'circles-2',
        radius: 60,
        value: value2,
        maxValue: 100,
        width: 3,
        text: function (value) { return value + '%'; },
        colors: ['#d2b5b5', '#ff0036'],
        duration: 300,
        wrpClass: 'circles-wrp',
        textClass: 'circles-text',
        valueStrokeClass: 'circles-valueStroke',
        maxValueStrokeClass: 'circles-maxValueStroke',
        styleWrapper: true,
        styleText: true
    });
    var myCircle = Circles.create({
        id: 'circles-3',
        radius: 60,
        value: value3,
        maxValue: 100,
        width: 3,
        text: function (value) { return value + '%'; },
        colors: ['#d2b5b5', '#ff0036'],
        duration: 300,
        wrpClass: 'circles-wrp',
        textClass: 'circles-text',
        valueStrokeClass: 'circles-valueStroke',
        maxValueStrokeClass: 'circles-maxValueStroke',
        styleWrapper: true,
        styleText: true
    });
    var myCircle = Circles.create({
        id: 'circles-4',
        radius: 60,
        value: value4,
        maxValue: 100,
        width: 3,
        text: function (value) { return value + '%'; },
        colors: ['#d2b5b5', '#ff0036'],
        duration: 300,
        wrpClass: 'circles-wrp',
        textClass: 'circles-text',
        valueStrokeClass: 'circles-valueStroke',
        maxValueStrokeClass: 'circles-maxValueStroke',
        styleWrapper: true,
        styleText: true
    });
}
