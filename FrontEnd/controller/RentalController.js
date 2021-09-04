clearRentalAllFields();
loadCustomersId();
loadAllDriversId();
getAllCarsByType();
getCarById();
getCustomerById();
getDriverById();

// function generateOrderId() {
//     if (orderDB.length == 0) {
//         $('#txtOrderID').val("OR-001");
//     } else {
//         let lastOrderId = orderDB[orderDB.length - 1].getOrderId();
//         let newId = Number.parseInt(lastOrderId.substring(3, 6)) + 1;
//         if (newId < 10) {
//             newId = "OR-00" + newId;
//         } else if (newId < 100) {
//             newId = "OR-0" + newId;
//         }
//         $('#txtOrderID').val(newId);
//     }
// }

function generateDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    console.log(today);
    $("#txtStartDate").val(today);
}

function loadCustomersId() {
    $("#cmbCustomerId").children().remove();
    $.ajax({
        url: 'http://localhost:8080/pos/api/v1/customer',
        method: 'get',
        async: true,

        success: function (data) {
            $('#cmbCustomerId').append("<option>--Select--</option>");
            for (let all of data) {
                let row = `<option>${all.id}</option>`;
                $("#cmbCustomerId").append(row);
            }
        }
    });
}

function getCustomerById(){
    $("#cmbCustomerId").on("change",function (){
        let id=$("#cmbCustomerId").val();
        $.ajax({
            url:`http://localhost:8080/pos/api/v1/customer/${id}`,
            method:'get',
            async:true,
            contentType:'application/json',
            success:function (data){
                console.log(data);
                $("#txtCustomerId2").val(data.id);
                $("#txtCustomerName2").val(data.name);
                $("#txtCustomerAddress2").val(data.address);
                $("#txtEmail2").val(data.email);
                $("#txtNIC2").val(data.nic);
                $("#txtDrivingLicence2").val(data.licence);
                $("#txtContact2").val(data.contact);
            },
            error:function (response){
                alert("Customer Not Found...");
            }
        });
    });
}

function loadAllDriversId() {
    $("#cmbDriverId").children().remove();
    $.ajax({
        url: 'http://localhost:8080/pos/api/v1/driver',
        method: 'get',
        async: true,

        success: function (data) {
            $('#cmbDriverId').append("<option>--Select--</option>");
            for (let all of data) {
                let row = `<option>${all.id}</option>`;
                $("#cmbDriverId").append(row);
            }
        }
    });
}

function getDriverById(){
    $("#cmbDriverId").on("change",function (){
        let id=$("#cmbDriverId").val();
        $.ajax({
            url:`http://localhost:8080/pos/api/v1/driver/${id}`,
            method:'get',
            async:true,
            contentType:'application/json',
            success:function (data){
                console.log(data);
                $("#txtDriverId2").val(data.id);
                $("#txtDriverName2").val(data.name);
                $("#txtDriverAddress2").val(data.address);
                $("#txtDriverLicence2").val(data.licence);
                $("#txtDriverContact2").val(data.contact);
            },
            error:function (){
                alert("Driver Not Found...");
            }
        });
    });
}

function getAllCarsByType() {
    $('#cmbCarType').append("<option>--Select--</option><option>Luxury</option><option>Normal</option><option>Mini</option>");
    $("#cmbCarType").on('change', function () {
        clearRentalCarFields();
        let type = $("#cmbCarType").val();
        $('#cmbCarId').children().remove();
        $('#cmbCarId').append("<option>--Select--</option>");
        $.ajax({
            url: `http://localhost:8080/pos/api/v1/car/byType/?type=${type}`,
            method: 'get',
            async: true,
            success: function (data) {
                for (let all of data) {
                    let row = `<option>${all.carId}</option>`;
                    $("#cmbCarId").append(row);
                }
            }
        });
    });
}

function getCarById(){
    $("#cmbCarId").on('change', function () {
        let id = $("#cmbCarId").val();
        $.ajax({
            url: `http://localhost:8080/pos/api/v1/car/${id}`,
            method: 'get',
            async: true,
            contentType: 'application/json',

            success: function (data) {
                console.log(data);
                $("#txtBrand2").val(data.brand);
                $("#txtPassengers2").val(data.numOfPassenger);
                $("#txtFuel2").val(data.fuel);
                $("#txtTransmission2").val(data.transmission);
                $("#txtCarPrice2").val(data.perDay);
                $("#lblTotal").text(data.perDay);
                calculateSubTotal();
            },
            error: function () {
                alert("Car Not Found...");
            }
        });
    });
}
function clearRentalCarFields(){
    $("#txtBrand2").val("");
    $("#txtPassengers2").val("");
    $("#txtFuel2").val("");
    $("#txtTransmission2").val("");
    $("#txtCarPrice2").val("");
}
function clearRentalAllFields(){
    $('#cmbCarType').children().remove();
    $('#cmbCarId').children().remove();
    $('#cmbCustomerId').children().remove();
    $('#cmbDriverId').children().remove();
    $("#txtBrand2").val("");
    $("#txtPassengers2").val("");
    $("#txtFuel2").val("");
    $("#txtTransmission2").val("");
    $("#txtCarPrice2").val("");
    $("#txtDriverId2").val("");
    $("#txtDriverName2").val("");
    $("#txtDriverAddress2").val("");
    $("#txtDriverLicence2").val("");
    $("#txtDriverContact2").val("");
    $("#txtCustomerId2").val("");
    $("#txtCustomerName2").val("");
    $("#txtCustomerAddress2").val("");
    $("#txtEmail2").val("");
    $("#txtNIC2").val("");
    $("#txtDrivingLicence2").val("");
    $("#txtContact2").val("");
    $("#txtPayment").val("");
    $("#txtExtraCost").val("");
    $("#txtExtraKm").val("");
    $("#lblTotal").text("");
    $("#lblSubTotal").text("");
    $("#txtStartDate").val("");
    $("#txtEndDate").val("");
}
$("#btnAddToTable").click(function (){
    let rentId = $("#txtRentalId").val();
    let custId = $("#cmbCustomerId").val();
    let carId = $('#cmbCarId').val();
    let drivId = $('#cmbDriverId').val();
    let sDate = $("#txtStartDate").val();
    let eDate = $("#txtEndDate").val();
    let price = $("#lblSubTotal").text();
    let extra = $("#txtExtraKm").val();
    $("#tblCart").empty();

    let row=`<tr><td>${rentId}</td><td>${custId}</td><td>${carId}</td><td>${drivId}</td><td>${sDate}</td><td>${eDate}</td><td>${price}</td></tr>`;
    $("#tblCart").append(row);

});

$("#btnPlaceOrder").click(function (){
    $("#tblCart>tr").each(function (){
        let rentId = $($(this).children().get(0)).text().toString();
        let id = $($(this).children().get(1)).text().toString();
        let carId = $($(this).children().get(2)).text().toString();
        let did = $($(this).children().get(3)).text().toString();
        let price = $($(this).children().get(6)).text().toString();
        let startDate = $($(this).children().get(4)).text().toString();
        let endDate = $($(this).children().get(5)).text().toString();
        let extraKM = $($(this).children().get(7)).text().toString();


        $.ajax({
            url:'http://localhost:8080/pos/api/v1/rental',
            method:'post',
            async:true,
            contentType:'application/json',
            data:JSON.stringify({
                rentId:rentId,
                id:id,
                did:did,
                carId:carId,
                startDate:startDate,
                endDate:endDate,
                extraKM:extraKM,
                price:price
            }),
            success:function (data){
                console.log(data);
                alert("Rental Added...");
                clearRentalAllFields();
                loadCustomersId();
                loadAllDriversId();
                getAllCarsByType();
                getCarById();
                getCustomerById();
                getDriverById();
                getAllRentalDetails();
            }
        });
    });

});

$("#txtNIC2").on("keyup",function (){
    let id=$("#txtNIC2").val();
    $.ajax({
        url:`http://localhost:8080/pos/api/v1/customer/nic/${id}`,
        method:'get',
        async:true,
        contentType:'application/json',
        success:function (data){
            console.log(data);
            $("#txtCustomerName2").val(data.name);
            $("#txtCustomerAddress2").val(data.address);
            $("#txtEmail2").val(data.email);
            $("#txtCustomerId2").val(data.id);
            $("#txtDrivingLicence2").val(data.licence);
            $("#txtContact2").val(data.contact);
        },
        error:function (response){
            alert("Customer Not Found...");
        }
    });
});

function calculateSubTotal() {
    let dateCount=0;
    let subTot = 0;
    let extra = 0;
    if ($('#txtExtraCost').val() === "") {
        extra = 0;
    } else {
        extra = Number.parseInt($('#txtExtraCost').val());
    }
    if ($('#txtExtraKm').val() === "") {
        dateCount = 1;
    } else {
        dateCount = Number.parseInt($('#txtExtraKm').val());
    }
    subTot = (Number.parseInt($('#lblTotal').text())*dateCount) + extra;

    if (subTot < 0) {
        $('#lblSubTotal').text($('#lblTotal').text());

        $('#txtPayment').attr('min', Number.parseInt($('#lblTotal').text()));
    } else {
        $('#lblSubTotal').text(subTot + ".00");
        $('#txtPayment').val();
        $('#txtPayment').attr('min', subTot);
        calculateBalance();
    }
}

$('#txtPayment').on('change', function () {
    calculateSubTotal();
});

$('#txtPayment').on('keyup', function () {
    calculateSubTotal();
});

$('#txtExtraCost').on('change', function () {
    calculateSubTotal();
});

$('#txtExtraCost').on('keyup', function () {
    calculateSubTotal();
});

$('#txtExtraKm').on('change', function () {
    calculateSubTotal();
});

$('#txtExtraKm').on('keyup', function () {
    calculateSubTotal();
});

function calculateBalance() {
    if ($('#txtPayment').val() === "" || Number.parseInt($('#txtPayment').val()) < Number.parseInt($('#lblSubTotal').text())) {
        //error
        $('#txtBalance').val($('#txtPayment').val() - $('#lblSubTotal').text()+"  Not Enough Money...");

    } else {
        $('#txtBalance').val($('#txtPayment').val() - $('#lblSubTotal').text() + ".00");
    }
}
