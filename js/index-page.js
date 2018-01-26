$(document).ready(function () {
   $('.open_modal').click(function() {
       $('#agreement-modal').modal('show');
   });

    $('.tel-inp').inputmask({
        "mask": "+7 (999) 999-99-99"
        , "placeholder": "_"
        , showMaskOnHover: false
        , showMaskOnFocus: true
    });

    $('.mail_to button[type=submit]').click(function(e) {
        e.preventDefault();
        var form = $(this).parents('form');
        var name = form.find('input[name=name]');
        var phone = form.find('input[name=phone]');
        if (name.val() != '' && phone.val() != '') {
            name.attr('style', '');
            phone.attr('style', '');

            $.ajax({
                url: 'mail.php',
                method: 'POST',
                data: {
                    'name': name.val(),
                    'phone': phone.val()
                },
                success: function(response) {
                    var res = $.parseJSON(response);
                    if (res['sent'] == true) {
                        form.find('input').val('');
                        $('#thanks_modal').modal('show');
                    }
                }
            });
        }
        else {
            if (name.val() == '') {
                name.css('borderColor', 'red');
            }
            if (phone.val() == '') {
                phone.css('border', '1px solid red');
            }
        }
    });

    $('.mail_to input').keyup(function(e) {
        if ($(this).val() != '') {
            $(this).attr('style', '');
        }
    });
    
    $('.for-scroll').click(function (e) {
     
        
       
        $('body, html').animate({
            scrollTop: $('#form_section .flex_form_block').offset().top
        }, 700);
        return false;
        
    });
    
    
    
     var win = $(window);
    var scrFunc = function () {
        var t = win.scrollTop(),
            e = win.height();
        $("[data-anim], .sec-lvl-2 .for-flex-sec-2, .sec-lvl-3 .mid-sec-3 .flex-text").each(function (n, i) {
            var r = $(i).offset().top,
                s = t + .9 * e;
            s > r ? $(i).attr("data-anim", "true") : true;

        })
    }
    scrFunc();
    
    $(window).scroll(function(){
        scrFunc();
    });
    
    

});