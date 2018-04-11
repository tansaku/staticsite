/* init.js */
/*
 Strongly Typed by HTML5 UP
 html5up.net | @n33co
 Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
 */


(function ($) {

    skel.init({
        reset: 'full',
        breakpoints: {
            'global': {range: '*', href: '/assets/style-5d18df2f088494211c19d042a57401f8fb73abf907501261d6100644ef3ce0ca.css'},
            'desktop': {range: '737-', href: '/assets/style-desktop-42ed5f133cd9e9ba83c1893d488dd1621c03bf6d378df82b0e0572e874276356.css', containers: 1200, grid: {gutters: 50}},
            '1000px': {
                range: '737-1200',
                href: '/assets/style-1000px-e8771b1333bdec4f35e58c7dc6c2fa0b102b9c95ac2d0f2b1fdc523251cecf11.css',
                containers: 960,
                grid: {gutters: 30},
                viewport: {width: 1080}
            },
            'mobile': {
                range: '-736',
                href: '/assets/style-mobile-99b26c3ae01d1361f8afa867454154b098c3359e8306bae1bf1d426fe85827f8.css',
                containers: '100%!',
                grid: {collapse: true, gutters: 20},
                viewport: {scalable: false}
            }
        },
        plugins: {
            layers: {
                config: {
                    mode: 'transform'
                },
                navPanel: {
                    hidden: true,
                    breakpoints: 'mobile',
                    position: 'top-left',
                    side: 'left',
                    animation: 'pushX',
                    width: '80%',
                    height: '100%',
                    clickToHide: true,
                    html: '<div data-action="navList" data-args="nav"></div>',
                    orientation: 'vertical'
                },
                titleBar: {
                    breakpoints: 'mobile',
                    position: 'top-left',
                    side: 'top',
                    height: 44,
                    width: '100%',
                    html: '<span class="toggle" data-action="toggleLayer" data-args="navPanel"></span>'
                }
            }
        }
    });

    $(function () {

        var $window = $(window),
            $body = $('body');

        // Disable animations/transitions until the page has loaded.
        $body.addClass('is-loading');

        $window.on('load', function () {
            $body.removeClass('is-loading');
        });

        // Forms (IE<10).
        var $form = $('form');
        if ($form.length > 0) {

            $form.find('.form-button-submit')
                .on('click', function () {
                    $(this).parents('form').submit();
                    return false;
                });

            if (skel.vars.IEVersion < 10) {
                $.fn.n33_formerize = function () {
                    var _fakes = new Array(), _form = $(this);
                    _form.find('input[type=text],textarea').each(function () {
                        var e = $(this);
                        if (e.val() == '' || e.val() == e.attr('placeholder')) {
                            e.addClass('formerize-placeholder');
                            e.val(e.attr('placeholder'));
                        }
                    }).blur(function () {
                        var e = $(this);
                        if (e.attr('name').match(/_fakeformerizefield$/)) return;
                        if (e.val() == '') {
                            e.addClass('formerize-placeholder');
                            e.val(e.attr('placeholder'));
                        }
                    }).focus(function () {
                        var e = $(this);
                        if (e.attr('name').match(/_fakeformerizefield$/)) return;
                        if (e.val() == e.attr('placeholder')) {
                            e.removeClass('formerize-placeholder');
                            e.val('');
                        }
                    });
                    _form.find('input[type=password]').each(function () {
                        var e = $(this);
                        var x = $($('<div>').append(e.clone()).remove().html().replace(/type="password"/i, 'type="text"').replace(/type=password/i, 'type=text'));
                        if (e.attr('id') != '') x.attr('id', e.attr('id') + '_fakeformerizefield');
                        if (e.attr('name') != '') x.attr('name', e.attr('name') + '_fakeformerizefield');
                        x.addClass('formerize-placeholder').val(x.attr('placeholder')).insertAfter(e);
                        if (e.val() == '') e.hide(); else x.hide();
                        e.blur(function (event) {
                            event.preventDefault();
                            var e = $(this);
                            var x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]');
                            if (e.val() == '') {
                                e.hide();
                                x.show();
                            }
                        });
                        x.focus(function (event) {
                            event.preventDefault();
                            var x = $(this);
                            var e = x.parent().find('input[name=' + x.attr('name').replace('_fakeformerizefield', '') + ']');
                            x.hide();
                            e.show().focus();
                        });
                        x.keypress(function (event) {
                            event.preventDefault();
                            x.val('');
                        });
                    });
                    _form.submit(function () {
                        $(this).find('input[type=text],input[type=password],textarea').each(function (event) {
                            var e = $(this);
                            if (e.attr('name').match(/_fakeformerizefield$/)) e.attr('name', '');
                            if (e.val() == e.attr('placeholder')) {
                                e.removeClass('formerize-placeholder');
                                e.val('');
                            }
                        });
                    }).bind("reset", function (event) {
                        event.preventDefault();
                        $(this).find('select').val($('option:first').val());
                        $(this).find('input,textarea').each(function () {
                            var e = $(this);
                            var x;
                            e.removeClass('formerize-placeholder');
                            switch (this.type) {
                                case 'submit':
                                case 'reset':
                                    break;
                                case 'password':
                                    e.val(e.attr('defaultValue'));
                                    x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]');
                                    if (e.val() == '') {
                                        e.hide();
                                        x.show();
                                    } else {
                                        e.show();
                                        x.hide();
                                    }
                                    break;
                                case 'checkbox':
                                case 'radio':
                                    e.attr('checked', e.attr('defaultValue'));
                                    break;
                                case 'text':
                                case 'textarea':
                                    e.val(e.attr('defaultValue'));
                                    if (e.val() == '') {
                                        e.addClass('formerize-placeholder');
                                        e.val(e.attr('placeholder'));
                                    }
                                    break;
                                default:
                                    e.val(e.attr('defaultValue'));
                                    break;
                            }
                        });
                        window.setTimeout(function () {
                            for (x in _fakes) _fakes[x].trigger('formerize_sync');
                        }, 10);
                    });
                    return _form;
                };
                $form.n33_formerize();
            }

        }

        // CSS polyfills (IE<9).
        if (skel.vars.IEVersion < 9)
            $(':last-child').addClass('last-child');

        // Dropdowns.
        $('#nav > ul').dropotron({
            mode: 'fade',
            noOpenerFade: true,
            hoverDelay: 150,
            hideDelay: 350
        });

    });

})(jQuery);
