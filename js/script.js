// jQuery form repeater

$(document).ready(function () {
    $('.repeater').repeater({
        initEmpty: false,
        defaultValues: {
            'text-input': ''
        },
        show: function () {
            $(this).slideDown();
        },
        hide: function (deleteElement) {
            $(this).slideUp(deleteElement);
            setTimeout(() => {
                downloadCV();   // Ensure download triggers when items are deleted
                generateCV();    // Re-generate CV when an item is deleted
            }, 500);
        },
        isFirstItemUndeletable: true
    });
});