getAllCars();
$("#cmbType").append(`<option>--Select--</option><option>Luxury</option><option>Normal</option><option>Mini</option>`);
$("#btnCarSave").click(function () {
    let carId = $("#txtCarId").val();
    let brand = $("#txtBrand").val();
    let type = $("#cmbType").val();
    let numOfPassenger = $("#txtPassengers").val();
    let transmission = $("#txtTransmission").val();
    let fuel = $("#txtFuel").val();
    let perDay = $("#txtCarPrice").val();
    let status = $("#cmbStatus").val();

    $.ajax({
        url: 'http://localhost:8080/pos/api/v1/car',
        method: 'post',
        async: true,
        contentType: 'application/json',
        data: JSON.stringify({
            carId: carId,
            brand: brand,
            fuel: fuel,
            type: type,
            numOfPassenger: numOfPassenger,
            transmission: transmission,
            perDay: perDay,
            status: status
        }),

        success: function (data) {
            console.log(data);
            getAllCars();
            clearCarFields();
            alert("Car Added...");
        },
        error: function () {
            alert("Already Exist...");
        }
    });
});

$("#btnCarUpdate").click(function () {
    let carId = $("#txtCarId").val();
    let brand = $("#txtBrand").val();
    let type = $("#cmbType").val();
    let numOfPassenger = $("#txtPassengers").val();
    let transmission = $("#txtTransmission").val();
    let fuel = $("#txtFuel").val();
    let perDay = $("#txtCarPrice").val();
    let status = $("#cmbStatus").val();

    $.ajax({
        url: 'http://localhost:8080/pos/api/v1/car',
        method: 'put',
        async: true,
        contentType: 'application/json',
        data: JSON.stringify({
            carId: carId,
            brand: brand,
            fuel: fuel,
            type: type,
            numOfPassenger: numOfPassenger,
            transmission: transmission,
            perDay: perDay,
            status: status
        }),

        success: function (data) {
            console.log(data);
            getAllCars();
            alert("Car Updated...");
            clearCarFields();
        },
        error: function () {
            alert("Update Failed...");
        }
    });
});

$("#btnCarDelete").click(function () {
    let id = $("#txtCarId").val();
    $.ajax({
        url: `http://localhost:8080/pos/api/v1/car/?id=${id}`,
        method: 'delete',
        async: true,
        success: function (data) {
            console.log(data);
            getAllCars();
            alert("Car Deleted...");
            clearCarFields();
        },
        error: function (response) {
            alert("Car Not Found...");
        }
    });
});

$("#btnCarSearch").click(function () {
    let id = $("#txtCarId").val();
    $.ajax({
        url: `http://localhost:8080/pos/api/v1/car/${id}`,
        method: 'get',
        async: true,
        contentType: 'application/json',

        success: function (data) {
            console.log(data);
            $("#txtBrand").val(data.brand);
            $("#txtPassengers").val(data.numOfPassenger);
            $("#txtFuel").val(data.fuel);
            $("#txtTransmission").val(data.transmission);
            $("#txtCarPrice").val(data.perDay);
        },
        error: function () {
            alert("Car Not Found...");
        }
    });
});

$("#btnCarLoad").click(function () {
    getAllCars();
    clearCarFields()
});

function getAllCars() {
    $("#tblCar").empty();
    $.ajax({
        url: 'http://localhost:8080/pos/api/v1/car',
        method: 'get',
        async: true,

        success: function (data) {
            for (let cars of data) {
                let row = `<tr><td>${cars.carId}</td><td>${cars.brand}</td><td>${cars.type}</td><td>${cars.numOfPassenger}</td><td>${cars.transmission}</td><td>${cars.fuel}</td><td>${cars.perDay}</td><td>${cars.status}</td></tr>`;
                $("#tblCar").append(row);
            }
        }
    });
}

function clearCarFields() {
    $("#txtCarId").val("");
    $("#txtBrand").val("");
    $("#txtType").val("");
    $("#txtPassengers").val("");
    $("#txtFuel").val("");
    $("#txtTransmission").val("");
    $("#txtCarPrice").val("");
}

// Reg Ex
let carId = /^(CAR)[0-9]{1,3}$/;
let carBrand = /^[A-z| |0-9|,]{3,}$/;
let carType = /^[A-z| |0-9|,]{3,}$/;
let passengers = /^[0-9]{1,5}$/;
let fuel = /^[A-z| |0-9|,]{5,}$/;
let transmission = /^[A-z| |0-9|,]{3,}$/;
let carPrice = /^\d{1,7}(?:\.\d{0,2})?$/;


$('#txtCarId,#txtBrand,#txtType,#txtPassengers,#txtFuel,#txtTransmission,#txtCarPrice').on('keyup', function (event) {
    let inputCarId = $('#txtCarId').val();
    let inputCarBrand = $('#txtBrand').val();
    let inputCarType = $('#txtType').val();
    let inputPassenger = $('#txtPassengers').val();
    let inputFuel = $("#txtFuel").val();
    let inputTransmission = $("#txtTransmission").val();
    let inputCarPrice = $("#txtCarPrice").val();

    if (carId.test(inputCarId)) {
        $('#txtCarId').css('border', '2px solid green');
        $('#lblCarId').text("");
        if (event.key === "Enter") {
            $('#txtBrand').focus();
        }
        if (carBrand.test(inputCarBrand)) {
            $('#txtBrand').css('border', '2px solid green');
            $('#lblBrand').text("");
            if (event.key === "Enter") {
                $('#txtPassengers').focus();
            }
            // if (carType.test(inputCarType)) {
            //     $('#txtType').css('border', '2px solid green');
            //     $('#lblType').text("");
            //     if (event.key === "Enter") {
            //         $('#txtPassengers').focus();
            //     }
                if (passengers.test(inputPassenger)) {
                    $('#txtPassengers').css('border', '2px solid green');
                    $('#lblPassengers').text("");
                    if (event.key === "Enter") {
                        $('#txtTransmission').focus();
                    }
                    if (transmission.test(inputTransmission)) {
                        $('#txtTransmission').css('border', '2px solid green');
                        $('#lblTransmission').text("");
                        if (event.key === "Enter") {
                            $('#txtFuel').focus();
                        }
                        if (fuel.test(inputFuel)) {
                            $('#txtFuel').css('border', '2px solid green');
                            $('#lblFuel').text("");
                            if (event.key === "Enter") {
                                $('#txtCarPrice').focus();
                            }
                            if (carPrice.test(inputCarPrice)) {
                                $('#txtCarPrice').css('border', '2px solid green');
                                $('#lblCarPrice').text("");
                                if (event.key === "Enter") {
                                    $('#btnCarSave').focus();
                                }
                            } else {
                                $('#txtCarPrice').css('border', '2px solid red');
                                $('#lblCarPrice').text("Required field. 100 or 100.00");
                            }
                        } else {
                            $('#txtFuel').css('border', '2px solid red');
                            $('#lblFuel').text("Required field.  Characters");
                        }
                    } else {
                        $('#txtTransmission').css('border', '2px solid red');
                        $('#lblTransmission').text("Required field. Characters");
                    }
                } else {
                    $('#txtPassengers').css('border', '2px solid red');
                    $('#lblPassengers').text("Required field. Number");


                }
            // } else {
            //     $('#txtType').css('border', '2px solid red');
            //     $('#lblType').text("Required field. Characters");
            //
            //
            // }
        } else {
            $('#txtBrand').css('border', '2px solid red');
            $('#lblBrand').text("Required field. Characters");


        }
    } else {
        $('#txtCarId').css('border', '2px solid red');
        $('#lblCarId').text("Required field. Pattern:-(CAR001)");


    }
});