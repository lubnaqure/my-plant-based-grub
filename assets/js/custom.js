$(document).ready(function () {
    $(document).on("click", ".navbar-toggler", function (e) {
        e.preventDefault();
        $($(this).data('bs-target')).toggle(200);
    });
});
