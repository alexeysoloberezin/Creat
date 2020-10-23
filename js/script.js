// $(document).ready(function () {
//     const track = $('.slider-track');
//     const arPrev = $('.slider-arrow__prev');
//     const arNext = $('.slider-arrow__next');
//     const movePosition = '100%'

//     $('.header-content').removeAttr('id', 'slide2'); //Делит класс
//     $('.header-content').removeAttr('id', 'slide1'); // ie 

//     arPrev.click(function () {
//         track.css({
//             transform: 'translateX(0%)'
//         });
//         $('.slider-arrow__next').removeAttr('id', 'disableArrow');
//         $('.slider-arrow__prev').attr('id', 'disableArrow');
//         arPrev.prop('disabled', true);
//         arNext.prop('disabled', false);
//     });

//     arNext.click(function () {
//         track.css({
//             transform: 'translateX(-100%)',
//         });
//         $('.slider-arrow__prev').removeAttr('id', 'disableArrow');
//         $('.slider-arrow__next').attr('id', 'disableArrow');
//         arNext.prop('disabled', true);
//         arPrev.prop('disabled', false);
//     });
// });

// $('.burger').click(function () {

//     $(this).toggleClass('_active-burger');
//     $('.header-navigation').toggleClass('_active-menu');
//     $('body').toggleClass('lock');
// });

// arm = $('.arm');
// ceaser = $('.caesar');
// sarah = $('.sarah');
// johan = $('.johan');

// circleStats(85, 93, 60, 51);
// scroll('caesar', 75, 40, 55, 70);
// scroll('arm', 85, 93, 60, 51);
// scroll('sarah', 94, 79, 50, 46);
// scroll('johan', 66, 72, 91, 95);

// toggleIdAccordion('one');
// toggleIdAccordion('two');
// toggleIdAccordion('three');

// slideName('one');
// slideName('two');
// slideName('three');

// function toggleIdAccordion(item) {
//     $(`.accordion-inner-${item}`).click(function () {
//         textBlock = $(`.accordion-item__text-${item}`);
//         if (textBlock.hasClass('activeAcord')) {
//             textBlock.removeClass('activeAcord');
//         } else {
//             $(`.accordion-item__text`).removeClass('activeAcord');
//             textBlock.addClass('activeAcord');
//         }
//         activeMenu('1', 'one');
//         activeMenu('2', 'two');
//         activeMenu('3', 'three');
//     });
// }

// function activeMenu(nomber, item) {
//     styleActive = $(`.accordion-item__text-${item}`);
//     if (styleActive.hasClass('activeAcord')) {
//         $(`.accordion-inner__title${nomber}`).css('color', '#ff0036');
//         $(`.icon${nomber}`).css('transform', 'rotate(45deg)');
//         $(`.icon-two${nomber}`).css('background', '#ff0036');
//         $(`.icon-one${nomber}`).css('background', '#ff0036');
//     } else {

//     }
//     if (styleActive.hasClass('activeAcord')) {

//     } else {
//         $(`.accordion-inner__title${nomber}`).css('color', '#262626');
//         $(`.icon${nomber}`).css('transform', 'rotate(90deg)');
//         $(`.icon-one${nomber}`).css('background', '#424242');
//         $(`.icon-two${nomber}`).css('background', '#424242');
//     }
// }

// function slideName(item) {
//     $(`.clints-slide__${item}`).click(function () {
//         $('.clints-slide__spa').removeClass('_active-name');
//         $(`.clints-slide__${item}`).addClass('_active-name');

//         one = $('.clints-slide__one');
//         two = $('.clints-slide__two');
//         three = $('.clints-slide__three');

//         if (two.hasClass('_active-name')) {
//             $('.clints-items__photo').css('transform', 'translateX(-66px)');
//             replaceName('Jordan Peterson');
//         }
//         if (one.hasClass('_active-name')) {
//             $('.clints-items__photo').css('transform', 'translateX(0px)');
//             replaceName('Amr srour');
//         }
//         if (three.hasClass('_active-name')) {
//             $('.clints-items__photo').css('transform', 'translateX(-132px)');
//             replaceName('Ilon Mask');
//         }

//     });
// }

// function replaceName(name) {
//     $('.clints-items__name').text(name);
// }
// function circleStats(value1, value2, value3, value4) {
//     var myCircle = Circles.create({
//         id: 'circles-1',
//         radius: 60,
//         value: value1,
//         maxValue: 100,
//         width: 3,
//         text: function (value) { return value + '%'; },
//         colors: ['#d2b5b5', '#ff0036'],
//         duration: 300,
//         wrpClass: 'circles-wrp',
//         textClass: 'circles-text',
//         valueStrokeClass: 'circles-valueStroke',
//         maxValueStrokeClass: 'circles-maxValueStroke',
//         styleWrapper: true,
//         styleText: true
//     });
//     var myCircle = Circles.create({
//         id: 'circles-2',
//         radius: 60,
//         value: value2,
//         maxValue: 100,
//         width: 3,
//         text: function (value) { return value + '%'; },
//         colors: ['#d2b5b5', '#ff0036'],
//         duration: 300,
//         wrpClass: 'circles-wrp',
//         textClass: 'circles-text',
//         valueStrokeClass: 'circles-valueStroke',
//         maxValueStrokeClass: 'circles-maxValueStroke',
//         styleWrapper: true,
//         styleText: true
//     });
//     var myCircle = Circles.create({
//         id: 'circles-3',
//         radius: 60,
//         value: value3,
//         maxValue: 100,
//         width: 3,
//         text: function (value) { return value + '%'; },
//         colors: ['#d2b5b5', '#ff0036'],
//         duration: 300,
//         wrpClass: 'circles-wrp',
//         textClass: 'circles-text',
//         valueStrokeClass: 'circles-valueStroke',
//         maxValueStrokeClass: 'circles-maxValueStroke',
//         styleWrapper: true,
//         styleText: true
//     });
//     var myCircle = Circles.create({
//         id: 'circles-4',
//         radius: 60,
//         value: value4,
//         maxValue: 100,
//         width: 3,
//         text: function (value) { return value + '%'; },
//         colors: ['#d2b5b5', '#ff0036'],
//         duration: 300,
//         wrpClass: 'circles-wrp',
//         textClass: 'circles-text',
//         valueStrokeClass: 'circles-valueStroke',
//         maxValueStrokeClass: 'circles-maxValueStroke',
//         styleWrapper: true,
//         styleText: true
//     });
// }
// function scroll(name, number1, number2, number3, number4) {
//     $(`.${name}`).click(function () {
//         $('.general').removeClass('activeStats');
//         $(`.${name}`).addClass('activeStats');
//         circleStats(number1, number2, number3, number4);
//     });
// }


