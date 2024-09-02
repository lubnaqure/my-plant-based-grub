$(document).ready(function () {
    // $(document).on("mouseover", "#navbarDropdown", function (e) {
    //     e.preventDefault();
    //     $(this).closest("li").find(".dropdown-menu").stop(true, true).slideDown(200);
    // });

    // $(document).on("mouseout", "#navbarDropdown", function (e) {
    //     e.preventDefault();
    //     $(this).closest("li").find(".dropdown-menu").stop(true, true).slideUp(200);
    // });
    // $(document).on("mouseover", ".nav-item.dropdown", function (e) {
    //     e.preventDefault();
    //     // Show the top-level dropdown menu
    //     $(this).find(".dropdown-menu").stop(true, true).slideDown(200);
    // });

    // $(document).on("mouseleave", ".nav-item.dropdown", function (e) {
    //     e.preventDefault();
    //     // Hide the top-level dropdown menu
    //     $(this).find(".dropdown-menu").stop(true, true).slideUp(200);
    // });

    // // Handle nested dropdowns
    // $(document).on("mouseover", ".nav-item .dropdown-menu", function (e) {
    //     e.preventDefault();
    //     // Show the nested dropdown menu
    //     $(this).find(".dropdown-menu").stop(true, true).slideDown(200);
    // });

    // $(document).on("mouseleave", ".nav-item .dropdown-menu", function (e) {
    //     e.preventDefault();
    //     // Hide the nested dropdown menu
    //     $(this).find(".dropdown-menu").stop(true, true).slideUp(200);
    // });

    $(document).on("click", ".parentmenu", function (e) {
        e.preventDefault();
        window.open("recipes.html", "_self");
    });
    $(document).on("click", ".submenu", function (e) {
        e.preventDefault();
        window.open("recipes.html", "_self");
    });
    // $(document).on("mouseemove", ".dropdown", function () {
    //     $(this).closest("ul").find(".dropdown-menu").hide(200);
    // });
    $(document).on("click", ".navbar-toggler", function (e) {
        e.preventDefault();
        $($(this).data('bs-target')).toggle(200);
    });
    // $(document).on("click", ".ic", function (e) {
    //     e.preventDefault();
    //     $icon = $(this);
    //     var index = $(this).index();
    //     $(".icons").find(".ic").each(function (i) {
    //         $(".icons").find(".ic").eq(i).addClass("far").removeClass("text-golden fas");
    //     });
    //     $(".icons").find(".ic").each(function (i) {
    //         if (i <= index) {
    //             $(".icons").find(".ic").eq(i).addClass("text-golden fas").removeClass("far");
    //             if (index == i && $icon.hasClass("fas")) {
    //                 $icon.addClass("far").removeClass("text-golden fas");
    //             }
    //         }
    //     });
    // });

    $(document).on("clcik", '#searchIcon', function () {
        $('#searchInput').toggleClass('show');
    });
    // $(document).on("click", ".ic", function (e) {
    //     e.preventDefault();
    //     var $clickedStar = $(this);
    //     var index = $clickedStar.index();

    //     if ($clickedStar.hasClass("fas") && $clickedStar.hasClass("text-golden")) {
    //         // If the clicked star is already selected, deselect it and all subsequent stars
    //         $(".ic").each(function (i) {
    //             if (i >= index) {
    //                 $(this).removeClass("fas text-golden").addClass("far");
    //             }
    //         });
    //     } else {
    //         // Select the clicked star and all previous stars
    //         $(".ic").each(function (i) {
    //             if (i <= index) {
    //                 $(this).removeClass("far").addClass("fas text-golden");
    //             } else {
    //                 $(this).removeClass("fas text-golden").addClass("far");
    //             }
    //         });
    //     }
    // });
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
