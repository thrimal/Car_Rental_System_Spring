getAllCustomers2();
$("#btnSaveCustomer3").click(function (){

    let id = $("#txtCustomerId3").val();
    let name = $("#txtCustomerName3").val();
    let address = $("#txtCustomerAddress3").val();
    let email = $("#txtEmail3").val();
    let nic = $("#txtNIC3").val();
    let licence = $("#txtDrivingLicence3").val();
    let contact = $("#txtContact3").val();

    $.ajax({
        url:'http://localhost:8080/pos/api/v1/customer',
        method:'post',
        async:true,
        contentType:'application/json',
        data:JSON.stringify({
            id:id,
            name:name,
            address:address,
            email:email,
            nic:nic,
            licence:licence,
            contact:contact
        }),
        success:function (data){
            console.log(data);
            getAllCustomers2();
            alert("Customer Added...");
            clearCustomerFields2();
        },
        error:function (){
            alert("Already Exist...");
        }
    });
});

// $("#btnUpdateCustomer").click(function (){
//     let id = $("#txtCustomerId").val();
//     let name = $("#txtCustomerName").val();
//     let address = $("#txtCustomerAddress").val();
//     let email = $("#txtEmail").val();
//     let nic = $("#txtNIC").val();
//     let licence = $("#txtDrivingLicence").val();
//     let contact = $("#txtContact").val();
//
//     $.ajax({
//         url: 'http://localhost:8080/pos/api/v1/customer',
//         method: 'put',
//         async:true,
//         contentType: 'application/json',
//         data: JSON.stringify({
//             id:id,
//             name:name,
//             address:address,
//             email:email,
//             nic:nic,
//             licence:licence,
//             contact:contact
//         }),
//
//         success:function (data){
//             console.log(data);
//             getAllCustomers2();
//             alert("Customer Updated...");
//             clearCustomerFields2();
//         },
//         error:function (response){
//             alert("Update Failed...");
//         }
//     });
// });

// $("#btnDeleteCustomer3").click(function (){
//     let id = $("#txtCustomerId3").val();
//     $.ajax({
//         url:`http://localhost:8080/pos/api/v1/customer/?id=${id}`,
//         method:'delete',
//         async:true,
//
//         success:function (data){
//             console.log(data);
//             getAllCustomers2();
//             alert("Customer Deleted...");
//             clearCustomerFields2();
//         },
//         error:function (response){
//             alert("Customer Not Found...");
//         }
//
//     });
// });

$("#btnLoad3").click(function (){
    getAllCustomers2();
    clearCustomerFields2();
});

$("#btnCustomerSearch3").click(function (){
    let id=$("#txtCustomerId3").val();
    $.ajax({
        url:`http://localhost:8080/pos/api/v1/customer/${id}`,
        method:'get',
        async:true,
        contentType:'application/json',
        success:function (data){
            console.log(data);
            $("#txtCustomerName3").val(data.name);
            $("#txtCustomerAddress3").val(data.address);
            $("#txtEmail3").val(data.email);
            $("#txtNIC3").val(data.nic);
            $("#txtDrivingLicence3").val(data.licence);
            $("#txtContact3").val(data.contact);
        },
        error:function (response){
            alert("Customer Not Found...");
        }
    });
});

function getAllCustomers2(){
    $("#tblCustomer3").empty();
    $.ajax({
        url:'http://localhost:8080/pos/api/v1/customer',
        method:'get',
        async:true,

        success:function (data,textState, xhr){
            for (var customer of data) {
                console.log(customer);
                let row=`<tr><td>${customer.id}</td></tr>`;
                $("#tblCustomer3").append(row);
            }
        }
    });
}

function clearCustomerFields2(){
    $("#txtCustomerId3").val("");
    $("#txtCustomerName3").val("")
    $("#txtCustomerAddress3").val("");
    $("#txtEmail3").val("");
    $("#txtNIC3").val("");
    $("#txtDrivingLicence3").val("");
    $("#txtContact3").val("");
}

// Reg Ex
let cusIdRegEx = /^(C00)[0-9]{1,3}$/;
let cusNameRegEx = /^[A-z| ]{5,20}$/;
let cusAddressRegEx = /^[A-z| |0-9|,]{5,}$/;
let email=/^(.+)@(.+)$/;
let nic=/[0-9]{9}(v|V)$/;
let dLicence=/^(B)[0-9]{1,7}$/;
let contact=/^[0-9]{9,10}$/;


$('#txtCustomerId3,#txtCustomerName3,#txtCustomerAddress3,#txtEmail3,#txtNIC3,#txtDrivingLicence3,#txtContact3').on('keyup', function (event) {
    let inputId = $('#txtCustomerId3').val();
    let inputName = $('#txtCustomerName3').val();
    let inputAddress = $('#txtCustomerAddress3').val();
    let inputEmail= $('#txtEmail3').val();
    let inputLicence=$("#txtDrivingLicence3").val();
    let inputNic=$("#txtNIC3").val();
    let inputContact=$("#txtContact3").val();

    if (cusIdRegEx.test(inputId)) {
        $('#txtCustomerId3').css('border', '2px solid green');
        $('#lblCustomerId3').text("");
        if (event.key === "Enter") {
            $('#txtCustomerName3').focus();
        }
        if (cusNameRegEx.test(inputName)) {
            $('#txtCustomerName3').css('border', '2px solid green');
            $('#lblCustomerName3').text("");
            if (event.key === "Enter") {
                $('#txtCustomerAddress3').focus();
            }
            if (cusAddressRegEx.test(inputAddress)) {
                $('#txtCustomerAddress3').css('border', '2px solid green');
                $('#lblCustomerAddress3').text("");
                if (event.key === "Enter") {
                    $('#txtEmail3').focus();
                }
                if (email.test(inputEmail)) {
                    $('#txtEmail3').css('border', '2px solid green');
                    $('#lblEmail3').text("");
                    if (event.key === "Enter") {
                        $('#txtCustomerId3').focus();
                    }
                    if(nic.test(inputNic)){
                        $('#txtNIC3').css('border', '2px solid green');
                        $('#lblNIC3').text("");
                        if (event.key === "Enter") {
                            $('#txtDrivingLicence3').focus();
                        }
                        if (dLicence.test(inputLicence)) {
                            $('#txtDrivingLicence3').css('border', '2px solid green');
                            $('#lblDrivingLicence3').text("");
                            if (event.key === "Enter") {
                                $('#txtContact3').focus();
                            }
                            if (contact.test(inputContact)) {
                                $('#txtContact3').css('border', '2px solid green');
                                $('#lblContact3').text("");
                                if (event.key === "Enter") {
                                    $('#btnSaveDriver3').focus();
                                }
                            }else {
                                $('#txtContact3').css('border', '2px solid red');
                                $('#lblContact3').text("Required field. Pattern:-(0714433555)");
                            }
                        }else {
                            $('#txtDrivingLicence3').css('border', '2px solid red');
                            $('#lblDrivingLicence3').text("Required field. Pattern:-(B8958595)");
                        }
                    }else {
                        $('#txtNIC3').css('border', '2px solid red');
                        $('#lblNIC3').text("Required field. Pattern:-(991241620v)");
                    }
                } else {
                    $('#txtEmail3').css('border', '2px solid red');
                    $('#lblEmail3').text("Required field. Pattern:-(jhon99@gmail.com)");


                }
            } else {
                $('#txtCustomerAddress3').css('border', '2px solid red');
                $('#lblCustomerAddress3').text("Required field. Minimum 5");


            }
        } else {
            $('#txtCustomerName3').css('border', '2px solid red');
            $('#lblCustomerName3').text("Required field. 5 to 20 characters Allowed.");


        }
    } else {
        $('#txtCustomerId3').css('border', '2px solid red');
        $('#lblCustomerId3').text("Required field. Pattern:-(C001)");


    }
});