$(document).ready(function () {
    $(document).on("click", ".navbar-toggler", function (e) {
        e.preventDefault();
        $($(this).data('bs-target')).toggle(200);
    });
    $(document).on("click", ".ic", function (e) {
        e.preventDefault();
        var index = $(this).index();
        $(".icons").find(".ic").each(function (i) {
            $(".icons").find(".ic").eq(i).addClass("far").removeClass("text-golden fas");
        });
        $(".icons").find(".ic").each(function (i) {
            if (i <= index) {
                $(".icons").find(".ic").eq(i).addClass("text-golden fas").removeClass("far");
            }
        });
    });
});
