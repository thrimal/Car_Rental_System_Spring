hideAll2();
countCar2();
countCustomer2();
countDrivers2();
getAllCars2();
// $("#dashboardContent").css('display', 'block');
// $("#nav").text("Dashboard");

$("#tab2").css('display','none');
$("#loginContent2").css('display', 'block');
$("#nav2").text("Login");

$("#btnSignUp2").click(function (){
    hideAll2();
    $("#tab2").css('display','none')
    $("#signUpContent2").css('display', 'block');
    $("#nav2").text("Sign Up");
    text = $('#nav2').text();
});

$("#btnLogin2").click(function (){
    hideAll2();
    $("#tab2").css('display','');
    $("#tabLogin2").css('display','none');
    $("#dashboardContent2").css('display', 'block');
    $("#nav2").text("Dashboard");
    text = $('#nav2').text();
});

$("#btnBackToLogin2").click(function (){
    hideAll2();
    $("#loginContent2").css('display', 'block');
    $("#nav2").text("Login");
    text = $('#nav2').text();
});

$('#lnkHome2').click(function () {
    hideAll2();
    countCar2();
    countCustomer2();
    countDrivers2();
    getAllCars2();
    $("#tabLogin2").css('display','none');
    $("#dashboardContent2").css('display', 'block');
    $("#nav2").text("Dashboard");
    text = $('#nav2').text();
});


$('#lnkCustomer2').click(function () {
    hideAll2();
    countCar2();
    countCustomer2();
    countDrivers2();
    getAllCustomers2();
    $("#txtCustomerID").focus();
    $("#tabLogin2").css('display','none');
    $("#customerContent2").css('display', 'block');
    $("#nav2").text("Customer Manage");
    text = $('#nav2').text();
});


// $("#lnkCars").click(function () {
//     hideAll();
//     countCar();
//     countCustomer();
//     countDrivers();
//     $("#txtCarId").focus();
//     $("#tabLogin").css('display','none');
//     $("#carContent").css('display', 'block');
//     $("#nav").text("Cars Manage");
//     text = $('#nav').text();
// });

// $("#lnkDriver").click(function (){
//     hideAll();
//     countCar();
//     countCustomer();
//     countDrivers();
//     $("#txtDriverId").focus();
//     $("#tabLogin").css('display','none');
//     $("#driverContent").css('display','block');
//     $("#nav").text("Driver Manage");
//     text=$('#nav').text();
// });

$("#lnkOrders2").click(function () {
    hideAll2();
    countCar2();
    countCustomer2();
    countDrivers2();
    loadCustomersId();
    $("#tabLogin2").css('display','none');
    $("#orderContent2").css('display', 'block');
    $("#nav2").text("Rental Manage");
    text = $('#nav2').text();
});

// $("#lnkOrdersDetail").click(function () {
//     hideAll();
//     countCar();
//     countCustomer();
//     countDrivers();
//     getAllRentalDetails();
//     $("#tabLogin").css('display','none');
//     $("#rentalDetailContent").css('display', 'block');
//     $("#nav").text("Rental Details");
//     text = $('#nav').text();
// });

function hideAll2() {
    $("#loginContent2,#signUpContent2,#dashboardContent2,#customerContent2,#orderContent2").css('display', 'none');
}
function countCustomer2(){
    $.ajax({
        url:'http://localhost:8080/pos/api/v1/customer/count',
        method:'get',
        async:true,

        success:function (data){
            console.log(data);
            $("#customerCount2").text(data);
        }
    });
}
function countCar2(){
    $.ajax({
        url:'http://localhost:8080/pos/api/v1/car/count',
        method:'get',
        async:true,

        success:function (data){
            console.log(data);
            $("#carCount2").text(data);
        }
    });
}

function countDrivers2(){
    $.ajax({
        url:'http://localhost:8080/pos/api/v1/driver/count',
        method:'get',
        async:true,

        success:function (data){
            console.log(data);
            $("#driversCount2").text(data);
        }
    });
}

function getAllCars2() {
    $("#tblCar2").empty();
    $.ajax({
        url: 'http://localhost:8080/pos/api/v1/car',
        method: 'get',
        async: true,

        success: function (data) {
            for (let cars of data) {
                let row = `<tr><td>${cars.carId}</td><td>${cars.brand}</td><td>${cars.type}</td><td>${cars.numOfPassenger}</td><td>${cars.transmission}</td><td>${cars.fuel}</td><td>${cars.perDay}</td><td>${cars.status}</td></tr>`;
                $("#tblCar2").append(row);
            }
        }
    });
}