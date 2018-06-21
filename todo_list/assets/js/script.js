$(document).ready(function() {

    if ($(this).hasClass("crossout")) {
        status = "false";
    }
    else {
        status = "true";
    }

    $("ul").on("click", ".item", function () {
        var url = "updaterecord.php"
        var id = $(this).find("span").attr("data-id");
        var obj = {
            id: id,
            status: status
        };
        ajaxPostRequest(obj, url);
        $(this).toggleClass("crossout");
    });

    $(".itemInput").on("change", function () {
        console.log("hello");
        var value = $(this).val();
        $(this).val("");
        var obj = {item: value};
        var url = "insertrecord.php";
        ajaxPostRequest(obj, url);
        $("ul").empty();
        setTimeout(reloadList, 200);
    });

    $("ul").on("mouseover", ".todo", function () {
        $(this).children(".btn").removeClass("remove");
    });

    $("ul").on("mouseleave", ".todo", function () {
        $(this).children(".btn").addClass("remove");
    });

    $("ul").on("click", ".removeBtn", function () {
        $(this).parent("li").remove();
        var id = $(this).attr("data-id");
        var obj = {id: id};
        var url = "deleterecord.php";
        ajaxPostRequest(obj, url);
    });
});

function ajaxPostRequest(obj, url) {
    $.ajax({
        data: obj,
        type: "POST",
        url: url,
        success: function(data){

        }
    });
}

function ajaxGetRequest() {
    $.ajax({
        type: "GET",
        url: "includes/getrecords.php",
        success: function () {

        }
    });
}

function reloadList() {
    $.get('includes/getrecords.php', function (data) {
        $('.list-group').append(data);
    });
}
