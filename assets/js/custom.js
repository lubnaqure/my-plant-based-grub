$(document).ready(function () {
    $(document).on("click", ".parentmenu", function (e) {
        e.preventDefault();
        window.open("recipes.html", "_self");
    });
    $(document).on("click", ".submenu", function (e) {
        e.preventDefault();
        window.open("recipes.html", "_self");
    });
    let flag = 0;
    $(".navbar-toggler").click(function (e) {
        e.preventDefault();
        var path = window.location.pathname;
        var pageNameWithExtension = path.substring(path.lastIndexOf('/') + 1);
        var pageName = pageNameWithExtension.split('.')[0];
        if (pageName != "index") {

            if (flag == 0) {
                $($(this).data('bs-target')).show(500);
                flag = 1;
            } else {
                $($(this).data('bs-target')).hide(500);
                flag = 0;
            }
        }
    });
    $(document).on("clcik", '#searchIcon', function () {
        $('#searchInput').toggleClass('show');
    });
    $(document).on("click", ".ic", function (e) {
        e.preventDefault();
        var $clickedStar = $(this);
        var index = $clickedStar.index();
        var isSelected = $clickedStar.hasClass("fas") && $clickedStar.hasClass("text-golden");
        $(".ic").each(function (i) {
            if (i <= index) {
                $(this).removeClass("far").addClass("fas text-golden");
            } else {
                $(this).removeClass("fas text-golden").addClass("far");
            }
        });
        if (isSelected) {
            $(".ic").each(function (i) {
                if (i >= index) {
                    $(this).removeClass("fas text-golden").addClass("far");
                }
            });
        }
    });
});
