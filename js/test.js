(function ($) {
    $.fn.handleEdit = function (options) {
        let settings = $.extend({
            url: null,
            modalId: null,
            valuesId: {},
            ReturnFromApi:''
        }, options);
        let id = $(this).val();
        let url = settings.url.replace(':id', id);
        $('#'+ settings.modalId).modal('show');
        $.ajax({
            type: "GET",
            url: url,
            success: function (response) {
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
            // data: new FormData(this),
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
        }, options);
        let id = $(this).val();
        let editUrl = settings.editUrl.replace(':id', id);
        let deleteUrl = settings.deleteUrl.replace(':id', id);
        $('#'+ settings.modalId).modal('show');
        $.ajax({
            type: "GET",
            url: editUrl,
            success: function (response) {
                $('.delete_alert_div').html("");
                $('.delete_alert_div').append('\
                    <h5 class="text-danger mb-3">Are You Sure To Delete <span class="text-dark fw-bold">'+ response.collection.name +'</span> Collection?</h5>\
                    <button type="button" class="btn btn-secondary delete_alert" data-bs-dismiss="modal">No,Close</button>\
                    <a href="'+ deleteUrl +'" class="btn btn-danger">Yes,Delete</a>\
                ');
            }
        });
    };
})(jQuery);


