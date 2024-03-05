(function ($) {
    $.fn.cus_toast_auto = function (options) {
        let settings = $.extend(
            {
                cus_toast_time: 5000,
                cus_toast_top: "25px",
                cus_toast_bg: "#f2f2f2",
                cus_toast_border: "#008080",
                cus_toast_check_bg: "#198754",
                cus_toast_check_icon: "#ffffff",
                cus_toast_error_bg: "#dc3545",
                cus_toast_error_icon: "#ffffff",
                cus_toast_text: "#666666",
            },
            options
        );

        let progress_time = 300;
        let end_time = settings.cus_toast_time + progress_time;
        let progress_css_time = settings.cus_toast_time / 1000;
        $(".cus_toast").toggleClass("active");
        $(".progress").toggleClass("active");

        $(":root").css({
            "--cus_toast_time": progress_css_time + "s",
            "--cus_toast_top": settings.cus_toast_top,
            "--cus_toast_bg": settings.cus_toast_bg,
            "--cus_toast_border": settings.cus_toast_border,
            "--cus_toast_check_bg": settings.cus_toast_check_bg,
            "--cus_toast_check_icon": settings.cus_toast_check_icon,
            "--cus_toast_error_bg": settings.cus_toast_error_bg,
            "--cus_toast_error_icon": settings.cus_toast_error_icon,
            "--cus_toast_text": settings.cus_toast_text,
        });
        let action_class = $(".cus_toast");
        let timer1, timer2;
        timer1 = setTimeout(() => {
            $(".cus_toast").removeClass("active");
        }, settings.cus_toast_time); //1s = 1000 milliseconds

        timer2 = setTimeout(() => {
            $(".progress").removeClass("active");
        }, end_time);

        $(".cus_toast").mouseover(function () {
            clearTimeout(timer1);
            clearTimeout(timer2);
            $(".progress").removeClass("active");

        });

        $(".cus_toast").mouseout(function () {
            $(".progress").addClass("active");
            timer1 = setTimeout(() => {
                $(".cus_toast").removeClass("active");
            }, settings.cus_toast_time); //1s = 1000 milliseconds

            timer2 = setTimeout(() => {
                $(".progress").removeClass("active");
            }, end_time);
        });

        $(".sami_close").on("click", function () {
            action_class.removeClass("active");
            setTimeout(() => {
                $(".progress").removeClass("active");
            }, progress_time);

            clearTimeout(timer1);
            clearTimeout(timer2);
        });
    };
})(jQuery);

(function ($) {
    $.fn.cus_toast_btn = function () {
        this.on("click", function (options) {
            let settings = $.extend(
                {
                    time: 3000,
                    top: "25px",
                },
                options
            );

            let progress_time = 300;
            let end_time = settings.time + progress_time;
            let progress_css_time = settings.time / 1000;
            $(".cus_toast").toggleClass("active");
            $(".progress").toggleClass("active");

            $(":root").css({
                "--time": progress_css_time + "s",
                "--top": settings.top,
                "--cus_toast_bg": settings.cus_toast_bg,
                "--cus_toast_border": settings.cus_toast_border,
                "--cus_toast_check_bg": settings.cus_toast_check_bg,
                "--cus_toast_check_icon": settings.cus_toast_check_icon,
                "--cus_toast_error_bg": settings.cus_toast_error_bg,
                "--cus_toast_error_icon": settings.cus_toast_error_icon,
                "--cus_toast_text": settings.cus_toast_text,
            });

            let timer1, timer2;
            timer1 = setTimeout(() => {
                $(".cus_toast").removeClass("active");
            }, settings.time); //1s = 1000 milliseconds

            timer2 = setTimeout(() => {
                $(".progress").removeClass("active");
            }, end_time);

            $(".close").on("click", function () {
                $(".cus_toast").removeClass("active");
                setTimeout(() => {
                    $(".progress").removeClass("active");
                }, progress_time);

                clearTimeout(timer1);
                clearTimeout(timer2);
            });
        });
    };
})(jQuery);

(function ($) {
    $.fn.sami_Toast_Append = function (options) {
        let settings = $.extend(
            {
                cus_toast_status : 'success',
                cus_toast_time: 5000,
                cus_toast_msg: "Hello",
            },
            options
        );
        if(settings.cus_toast_status == 'success'){
            $("body").prepend(
                '\
                    <div class="cus_toast1">\
                        <div class="cus_toast-content">\
                            <i class="fas fa-solid fa-check check"></i>\
                            <div class="message">\
                                <span class="cus_success">Success</span>\
                                <span class="text text-2">' +settings.cus_toast_msg+'</span>\
                            </div>\
                        </div>\
                        <i class="fa-solid fa-xmark sami_close1"></i>\
                        <div class="progress"></div>\
                    </div>\
                '
            );
        }else{
            $("body").prepend(
                '\
                    <div class="cus_toast1">\
                        <div class="cus_toast-content">\
                            <i class="fas fa-solid fa-xmark error"></i>\
                            <div class="message">\
                                <span class="cus_error">Error</span>\
                                <span class="text text-2">' +settings.cus_toast_msg+'</span>\
                            </div>\
                        </div>\
                        <i class="fa-solid fa-xmark sami_close1"></i>\
                        <div class="progress"></div>\
                    </div>\
                '
            );
        }
        $(".cus_toast1").toggleClass("active");
        $(".progress").toggleClass("active");

        let progress_time = 300;
        let end_time = settings.cus_toast_time + progress_time;
        let progress_css_time = settings.cus_toast_time / 1000;

        $(":root").css({
            "--cus_toast_time": progress_css_time + "s",
        });
        let t_timer1, t_timer2;
        t_timer1 = setTimeout(() => {
            $(".cus_toast1").removeClass("active");
            $(".cus_toast1").remove();
        }, settings.cus_toast_time); //1s = 1000 milliseconds

        t_timer2 = setTimeout(() => {
            $(".progress").removeClass("active");
        }, end_time);

        $(".cus_toast1").mouseover(function () {
            clearTimeout(t_timer1);
            clearTimeout(t_timer2);
            $(".progress").removeClass("active");
        });

        $(".cus_toast1").mouseout(function () {
            $(".progress").addClass("active");
            t_timer1 = setTimeout(() => {
                $(".cus_toast1").removeClass("active");
                $(".cus_toast1").remove();
            }, settings.cus_toast_time); //1s = 1000 milliseconds

            t_timer2 = setTimeout(() => {
                $(".progress").removeClass("active");
            }, end_time);
        });

        $(".sami_close1").on("click", function () {
            $(".cus_toast1").removeClass("active");
            $(".cus_toast1").remove();
            setTimeout(() => {
                $(".progress").removeClass("active");
            }, progress_time);

            clearTimeout(t_timer1);
            clearTimeout(t_timer2);
        });
    };
})(jQuery);

(function ($) {
    $.fn.image_preview = function () {
        this.on("click", function (options) {
            $("body,html").append(
                '\
                <div id="FullImageView">\
                    <img id="FullImage" />\
                    <span id="CloseBtn" onclick="FullViewClose()">&times;</span>\
                </div>\
            '
            );
            let img_src = $(this).attr("src");
            $("#FullImage").attr("src", img_src);
            $("#FullImageView").css("display", "flex");

            $("#CloseBtn").on("click", function () {
                $("#FullImageView").css("display", "none");
            });
        });
    };
})(jQuery);

(function ($) {
    $.fn.modal_image_preview = function () {
        $("body,html").append(
            '\
            <div id="FullImageView">\
                <img id="FullImage" />\
                <span id="CloseBtn">&times;</span>\
            </div>\
        '
        );
        let img_src = $(this).attr("src");
        $("#FullImage").attr("src", img_src);
        $("#FullImageView").css("display", "flex");

        $("#CloseBtn").on("click", function () {
            $("#FullImageView").css("display", "none");
        });
    };
})(jQuery);

(function ($) {
    $.fn.handleEdit = function (options) {
        let settings = $.extend({
            editUrl: null,
            modalId: null,
            valuesId: {},
            ReturnFromApi:'',
            imagePrev: false,
            cloudImagePrev: false,
            dbImgColName:''
        }, options);
        let id = $(this).val();
        let url = settings.editUrl.replace(':id', id);
        $('#'+ settings.modalId).modal('show');
        $.ajax({
            type: "GET",
            url: url,
            success: function (response) {
                if(settings.imagePrev == true){
                    $('.prev_image_view').html("");
                    $('.prev_image_view').append('\
                        <img src="/uploads/banner/'+ response[settings.ReturnFromApi][settings.dbImgColName] +'" alt="" class="prev_banner_image w-100">\
                    ');
                }
                if(settings.cloudImagePrev == true){
                    console.log('cloud');
                    $('.prev_image_view').html("");
                    $('.prev_image_view').append('\
                        <img src="'+ response[settings.ReturnFromApi][settings.dbImgColName] +'" alt="" class="prev_banner_image w-100">\
                    ');
                }
                for (let key in settings.valuesId) {
                    if (settings.valuesId.hasOwnProperty(key) && response[settings.ReturnFromApi].hasOwnProperty(key)) {
                        $('#' + settings.valuesId[key]).val(response[settings.ReturnFromApi][key]);
                    }
                }
            }
        });
    };
})(jQuery);

(function ($) {
    $.fn.handleUpdate = function (formData,options) {
        let settings = $.extend({
            modalId: null,
            listName: null,
        }, options);
        let url = $(this).attr('action');
        $.ajax({
            url: url,
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            cache: false,
            success: function(response) {
                $('.error_message').text('');
                if (response.status == 200) {
                    $('#'+settings.modalId).modal('hide');
                    $(document).sami_Toast_Append({
                        cus_toast_status : 'success',
                        cus_toast_time: 3000,
                        cus_toast_msg: response.msg
                    });
                    $('#' + settings.modalId).load(location.href + " #" + settings.modalId + ">*","");
                    $('.' + settings.listName).load(location.href + " ." + settings.listName + ">*","");

                } else {
                    $.each(response.error, function (key, value) {
                        $('.' + key + '_error').text(value);
                    });
                }
            },
        });
    };
})(jQuery);

(function ($) {
    $.fn.handleDelete = function (options) {
        let settings = $.extend({
            editUrl: null,
            deleteUrl: null,
            modalId: null,
            ReturnFromApi:'',
            dbColName: null,
            imagePrev: false,
            dbImgColName:''
        }, options);
        let id = $(this).val();
        let editUrl = settings.editUrl.replace(':id', id);
        let deleteUrl = settings.deleteUrl.replace(':id', id);
        $('#'+ settings.modalId).modal('show');
        $.ajax({
            type: "GET",
            url: editUrl,
            success: function (response) {
                if(settings.imagePrev == true){
                    $('.prev_image_view').html("");
                    $('.prev_image_view').append('\
                        <img src="/uploads/banner/'+ response[settings.ReturnFromApi][settings.dbImgColName] +'" alt="" class="prev_banner_image w-100">\
                    ');
                }
                $('.delete_alert_div').html("");
                if (settings.dbColName !== null) {
                    $('.delete_alert_div').append('\
                        <h5 class="text-danger mb-3">Are You Sure You Want To Delete <span class="text-dark fw-bold">'+ response[settings.ReturnFromApi][settings.dbColName] +'</span> ?</h5>\
                        <button type="button" class="btn btn-secondary delete_alert" data-bs-dismiss="modal">No,Close</button>\
                        <a href="'+ deleteUrl +'" class="btn btn-danger">Yes,Delete</a>\
                    ');
                }else{
                    $('.delete_alert_div').append('\
                        <h5 class="text-danger mb-3">Are You Sure To Delete ?</h5>\
                        <button type="button" class="btn btn-secondary delete_alert" data-bs-dismiss="modal">No,Close</button>\
                        <a href="'+ deleteUrl +'" class="btn btn-danger">Yes,Delete</a>\
                    ');
                }
            }
        });
    };
})(jQuery);



