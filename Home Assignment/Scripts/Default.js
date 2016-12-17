$("#LoginButton").click(function () {
    debugger;
    $.ajax({
        url: "Validate", success: function (result) {
            $("#div1").html(result);
        }
    });
});

function validate() {
    $.ajax({
        type: "POST",
        url: "Default/Validate",
        data: {
            username: $("#UserNameInput").val(),
            password: $("#PasswordInput").val()
        },
        dataType: "text",
        success: function (result) {
            if (result === "True") {
                $("#ResultMessage").attr("class", "p-green");
                $("#LoginButton").remove();
                $("#ResultMessage").text("welcome " + $("#UserNameInput").val());
            } else if (result === "False") {
                $("#ResultMessage").attr("class", "p-red");
                $("#ResultMessage").text("looks like one of the fields is incorrect, please try again.").val();
            } else {
                location.href = "Default/Error404";
            }
        }
    });

}

function checkLetter(element) {
    element.value = element.value.replace(/[^A-Za-z]/g, "");
}

function checkNumber(element) {
    element.value = element.value.replace(/[^0-9]/g, "");
}
