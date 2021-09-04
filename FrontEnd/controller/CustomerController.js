getAllCustomers();
$("#btnSaveCustomer").click(function (){

    let id = $("#txtCustomerId").val();
    let name = $("#txtCustomerName").val();
    let address = $("#txtCustomerAddress").val();
    let email = $("#txtEmail").val();
    let nic = $("#txtNIC").val();
    let licence = $("#txtDrivingLicence").val();
    let contact = $("#txtContact").val();

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
            getAllCustomers();
            alert("Customer Added...");
            clearCustomerFields();
        },
        error:function (){
            alert("Already Exist...");
        }
    });
});

$("#btnUpdateCustomer").click(function (){
    let id = $("#txtCustomerId").val();
    let name = $("#txtCustomerName").val();
    let address = $("#txtCustomerAddress").val();
    let email = $("#txtEmail").val();
    let nic = $("#txtNIC").val();
    let licence = $("#txtDrivingLicence").val();
    let contact = $("#txtContact").val();

   $.ajax({
       url: 'http://localhost:8080/pos/api/v1/customer',
       method: 'put',
       async:true,
       contentType: 'application/json',
       data: JSON.stringify({
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
           getAllCustomers();
           alert("Customer Updated...");
           clearCustomerFields();
       },
       error:function (response){
           alert("Update Failed...");
       }
   });
});

$("#btnDeleteCustomer").click(function (){
    let id = $("#txtCustomerId").val();
    $.ajax({
       url:`http://localhost:8080/pos/api/v1/customer/?id=${id}`,
       method:'delete',
       async:true,

       success:function (data){
           console.log(data);
           getAllCustomers();
           alert("Customer Deleted...");
           clearCustomerFields();
       },
        error:function (response){
            alert("Customer Not Found...");
        }

    });
});

$("#btnLoad").click(function (){
    getAllCustomers();
    clearCustomerFields();
});

$("#btnCustomerSearch").click(function (){
    let id=$("#txtCustomerId").val();
    $.ajax({
        url:`http://localhost:8080/pos/api/v1/customer/${id}`,
        method:'get',
        async:true,
        contentType:'application/json',
        success:function (data){
            console.log(data);
            $("#txtCustomerName").val(data.name);
            $("#txtCustomerAddress").val(data.address);
            $("#txtEmail").val(data.email);
            $("#txtNIC").val(data.nic);
            $("#txtDrivingLicence").val(data.licence);
            $("#txtContact").val(data.contact);
        },
        error:function (response){
            alert("Customer Not Found...");
        }
    });
});

function getAllCustomers(){
    $("#tblCustomer").empty();
    $.ajax({
        url:'http://localhost:8080/pos/api/v1/customer',
        method:'get',
        async:true,

        success:function (data,textState, xhr){
            for (var customer of data) {
                console.log(customer);
                let row=`<tr><td>${customer.id}</td><td>${customer.name}</td><td>${customer.address}</td><td>${customer.email}</td><td>${customer.nic}</td><td>${customer.licence}</td><td>${customer.contact}</td></tr>`;
                $("#tblCustomer").append(row);
            }
        }
    });
}

function clearCustomerFields(){
    $("#txtCustomerId").val("");
    $("#txtCustomerName").val("")
    $("#txtCustomerAddress").val("");
    $("#txtEmail").val("");
    $("#txtNIC").val("");
    $("#txtDrivingLicence").val("");
    $("#txtContact").val("");
}

// Reg Ex
let cusIdRegEx = /^(C00)[0-9]{1,3}$/;
let cusNameRegEx = /^[A-z| ]{5,20}$/;
let cusAddressRegEx = /^[A-z| |0-9|,]{5,}$/;
let email=/^(.+)@(.+)$/;
let nic=/[0-9]{9}(v|V)$/;
let dLicence=/^(B)[0-9]{1,7}$/;
let contact=/^[0-9]{9,10}$/;


$('#txtCustomerId,#txtCustomerName,#txtCustomerAddress,#txtEmail,#txtNIC,#txtDrivingLicence,#txtContact').on('keyup', function (event) {
    let inputId = $('#txtCustomerId').val();
    let inputName = $('#txtCustomerName').val();
    let inputAddress = $('#txtCustomerAddress').val();
    let inputEmail= $('#txtEmail').val();
    let inputLicence=$("#txtDrivingLicence").val();
    let inputNic=$("#txtNIC").val();
    let inputContact=$("#txtContact").val();

    if (cusIdRegEx.test(inputId)) {
        $('#txtCustomerId').css('border', '2px solid green');
        $('#lblCustomerId').text("");
        if (event.key === "Enter") {
            $('#txtCustomerName').focus();
        }
        if (cusNameRegEx.test(inputName)) {
            $('#txtCustomerName').css('border', '2px solid green');
            $('#lblCustomerName').text("");
            if (event.key === "Enter") {
                $('#txtCustomerAddress').focus();
            }
            if (cusAddressRegEx.test(inputAddress)) {
                $('#txtCustomerAddress').css('border', '2px solid green');
                $('#lblCustomerAddress').text("");
                if (event.key === "Enter") {
                    $('#txtEmail').focus();
                }
                if (email.test(inputEmail)) {
                    $('#txtEmail').css('border', '2px solid green');
                    $('#lblEmail').text("");
                    if (event.key === "Enter") {
                        $('#txtCustomerId').focus();
                    }
                    if(nic.test(inputNic)){
                        $('#txtNIC').css('border', '2px solid green');
                        $('#lblNIC').text("");
                        if (event.key === "Enter") {
                            $('#txtDrivingLicence').focus();
                        }
                        if (dLicence.test(inputLicence)) {
                            $('#txtDrivingLicence').css('border', '2px solid green');
                            $('#lblDrivingLicence').text("");
                            if (event.key === "Enter") {
                                $('#txtContact').focus();
                            }
                            if (contact.test(inputContact)) {
                                $('#txtContact').css('border', '2px solid green');
                                $('#lblContact').text("");
                                if (event.key === "Enter") {
                                    $('#btnSaveDriver').focus();
                                }
                            }else {
                                $('#txtContact').css('border', '2px solid red');
                                $('#lblContact').text("Required field. Pattern:-(0714433555)");
                            }
                        }else {
                            $('#txtDrivingLicence').css('border', '2px solid red');
                            $('#lblDrivingLicence').text("Required field. Pattern:-(B8958595)");
                        }
                    }else {
                        $('#txtNIC').css('border', '2px solid red');
                        $('#lblNIC').text("Required field. Pattern:-(991241620v)");
                    }
                } else {
                    $('#txtEmail').css('border', '2px solid red');
                    $('#lblEmail').text("Required field. Pattern:-(jhon99@gmail.com)");


                }
            } else {
                $('#txtCustomerAddress').css('border', '2px solid red');
                $('#lblCustomerAddress').text("Required field. Minimum 5");


            }
        } else {
            $('#txtCustomerName').css('border', '2px solid red');
            $('#lblCustomerName').text("Required field. 5 to 20 characters Allowed.");


        }
    } else {
        $('#txtCustomerId').css('border', '2px solid red');
        $('#lblCustomerId').text("Required field. Pattern:-(C001)");


    }
});