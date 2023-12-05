let baseURL = "http://localhost:8080/BackEnd_war/";

$("#btnRegisterCustomer").click(function () {
    let customerFormData = new FormData($("#registerForm")[0]);
    $.ajax({
        url: baseURL + "customer",
        method: "post",
        data: customerFormData,
        contentType: false,
        processData: false,
        success: function (res) {
            // alert(res.message)
            saveUpdateAlert("Customer", res.message);
        },
        error: function (error) {
            // alert(error.responseJSON.message);
            unSuccessUpdateAlert("Customer", JSON.parse(error.responseText).message);
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