getAllDriver();
$("#btnSaveDriver").click(function (){

    let id = $("#txtDriverId").val();
    let name = $("#txtDriverName").val();
    let address = $("#txtDriverAddress").val();
    let licence = $("#txtDriverLicence").val();
    let contact = $("#txtDriverContact").val();

    $.ajax({
        url:'http://localhost:8080/pos/api/v1/driver',
        method:'post',
        async:true,
        contentType:'application/json',
        data:JSON.stringify({
            id:id,
            name:name,
            address:address,
            licence:licence,
            contact:contact
        }),
        success:function (data){
            console.log(data);
            getAllDriver();
            alert("Driver Added...");
            clearDriverFields();
        },
        error:function (){
            alert("Already Exists...");
        }
    });
});

$("#btnUpdateDriver").click(function (){
    let id = $("#txtDriverId").val();
    let name = $("#txtDriverName").val();
    let address = $("#txtDriverAddress").val();
    let licence = $("#txtDriverLicence").val();
    let contact = $("#txtDriverContact").val();

    $.ajax({
        url: 'http://localhost:8080/pos/api/v1/driver',
        method: 'put',
        async:true,
        contentType: 'application/json',
        data: JSON.stringify({
            id:id,
            name:name,
            address:address,
            licence:licence,
            contact:contact
        }),

        success:function (data){
            console.log(data);
            getAllDriver();
            alert("Driver Updated...");
            clearDriverFields();
        },
        error:function (){
            alert("Update Failed...");
        }
    });
});

$("#btnDeleteDriver").click(function (){
    let id = $("#txtDriverId").val();
    $.ajax({
        url:`http://localhost:8080/pos/api/v1/driver/?id=${id}`,
        method:'delete',
        async:true,

        success:function (data){
            console.log(data);
            getAllDriver();
            alert("Driver Deleted...");
            clearDriverFields();
        },
        error:function (response){
            alert("Driver Not Found...");
        }

    });
});

$("#btnDriverLoad").click(function (){
    getAllDriver();
    clearDriverFields();
});

$("#btnDriverSearch").click(function (){
    let id=$("#txtDriverId").val();
    $.ajax({
        url:`http://localhost:8080/pos/api/v1/driver/${id}`,
        method:'get',
        async:true,
        contentType:'application/json',
        success:function (data){
            console.log(data);
            $("#txtDriverName").val(data.name);
            $("#txtDriverAddress").val(data.address);
            $("#txtDriverLicence").val(data.licence);
            $("#txtDriverContact").val(data.contact);
        },
        error:function (){
            alert("Driver Not Found...");
        }
    });
});

function getAllDriver(){
    $("#tblDriver").empty();
    $.ajax({
        url:'http://localhost:8080/pos/api/v1/driver',
        method:'get',
        async:true,

        success:function (data,textState, xhr){
            for (var driver of data) {
                console.log(driver);
                let row=`<tr><td>${driver.id}</td><td>${driver.name}</td><td>${driver.address}</td><td>${driver.licence}</td><td>${driver.contact}</td></tr>`;
                $("#tblDriver").append(row);
            }
        }
    });

}
function clearDriverFields(){
    $("#txtDriverId").val("");
    $("#txtDriverName").val("");
    $("#txtDriverAddress").val("");
    $("#txtDriverLicence").val("");
    $("#txtDriverContact").val("");
}


// Reg Ex
let driverId = /^(D00)[0-9]{1,3}$/;
let driverName = /^[A-z| ]{5,20}$/;
let driverAddress = /^[A-z| |0-9|,]{5,}$/;
let driverLicence=/^(B)[0-9]{1,7}$/;
let driverContact=/^[0-9]{9,10}$/;


$('#txtDriverId,#txtDriverName,#txtDriverAddress,#txtDriverLicence,#txtDriverContact').on('keyup', function (event) {
    let inputDId = $('#txtDriverId').val();
    let inputDName = $('#txtDriverName').val();
    let inputDAddress = $('#txtDriverAddress').val();
    let inputDLicence= $('#txtDriverLicence').val();
    let inputDContact=$("#txtDriverContact").val();


    if (driverId.test(inputDId)) {
        $('#txtDriverId').css('border', '2px solid green');
        $('#lblDriverId').text("");
        if (event.key === "Enter") {
            $('#txtDriverName').focus();
        }
        if (driverName.test(inputDName)) {
            $('#txtDriverName').css('border', '2px solid green');
            $('#lblDriverName').text("");
            if (event.key === "Enter") {
                $('#txtDriverAddress').focus();
            }
            if (driverAddress.test(inputDAddress)) {
                $('#txtDriverAddress').css('border', '2px solid green');
                $('#lblDriverAddress').text("");
                if (event.key === "Enter") {
                    $('#txtDriverLicence').focus();
                }
                if (driverLicence.test(inputDLicence)) {
                    $('#txtDriverLicence').css('border', '2px solid green');
                    $('#lblDriverLicence').text("");
                    if (event.key === "Enter") {
                        $('#txtDriverContact').focus();
                    }
                    if(driverContact.test(inputDContact)){
                        $('#txtDriverContact').css('border', '2px solid green');
                        $('#lblDriverContact').text("");
                        if (event.key === "Enter") {
                            $('#btnSaveDriver').focus();
                        }
                    }else {
                        $('#txtDriverContact').css('border', '2px solid red');
                        $('#lblDriverContact').text("Required field. Pattern:-(0771234555)");
                    }
                } else {
                    $('#txtDriverLicence').css('border', '2px solid red');
                    $('#lblDriverLicence').text("Required field. Pattern:-(B9393939)");


                }
            } else {
                $('#txtDriverAddress').css('border', '2px solid red');
                $('#lblDriverAddress').text("Required field. Characters");


            }
        } else {
            $('#txtDriverName').css('border', '2px solid red');
            $('#lblDriverName').text("Required field. 5 to 20 characters Allowed.");


        }
    } else {
        $('#txtDriverId').css('border', '2px solid red');
        $('#lblDriverId').text("Required field. Pattern:-(D001)");


    }
});