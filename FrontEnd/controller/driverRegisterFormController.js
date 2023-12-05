let baseURL = "http://localhost:8080/BackEnd_war/";

$("#btnRegisterDriver").click(function () {
    let driverFormData = new FormData($("#registerForm")[0]);
    $.ajax({
        url: baseURL + "driver",
        method: "post",
        data: driverFormData,
        contentType: false,
        processData: false,
        success: function (res) {
            // alert(res.message)
            saveUpdateAlert("Driver", res.message);
        },
        error: function (error) {
            // alert(error.responseJSON.message);
            unSuccessUpdateAlert("Driver", JSON.parse(error.responseText).message);
        }
    });
});
function loadSelectedImage(divId) {

    $(divId).on("change", function (e) {
        let file = e.target.files;

        if (FileReader && file && file.length) {
            let reader = new FileReader();
            reader.onload = function () {
                $(divId).parent().children(":eq(0)").css({
                    "background": `url(${reader.result})`,
                    "background-size": "cover",
                    "background-position": "center"
                });
            }
            reader.readAsDataURL(file[0]);
        }

    });
}

loadSelectedImage("#nic_Img");
loadSelectedImage("#license_Img");