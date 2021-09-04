
hideAll();
countCar();
countCustomer();
countDrivers();

// $("#dashboardContent").css('display', 'block');
// $("#nav").text("Dashboard");

$("#tab").css('display','none');
$("#loginContent").css('display', 'block');
$("#nav").text("Login");

$("#btnSignUp").click(function (){
    hideAll();
    $("#tab").css('display','none')
    $("#signUpContent").css('display', 'block');
    $("#nav").text("Sign Up");
    text = $('#nav').text();
});

$("#btnLogin").click(function (){
    hideAll();
    countCar();
    countCustomer();
    countDrivers();
    $("#tab").css('display','');
    $("#tabLogin").css('display','none');
    $("#dashboardContent").css('display', 'block');
    $("#nav").text("Dashboard");
    text = $('#nav').text();
});

$("#btnBackToLogin").click(function (){
    hideAll();
    $("#loginContent").css('display', 'block');
    $("#nav").text("Login");
    text = $('#nav').text();
});

$('#lnkHome').click(function () {
    hideAll();
    countCar();
    countCustomer();
    countDrivers();
    $("#tabLogin").css('display','none');
    $("#dashboardContent").css('display', 'block');
    $("#nav").text("Dashboard");
    text = $('#nav').text();
});


$('#lnkCustomer').click(function () {
    hideAll();
    getAllCustomers();
    countCar();
    countCustomer();
    countDrivers();
    $("#txtCustomerID").focus();
    $("#tabLogin").css('display','none');
    $("#customerContent").css('display', 'block');
    $("#nav").text("Customer Manage");
    text = $('#nav').text();
});


$("#lnkCars").click(function () {
    hideAll();
    countCar();
    countCustomer();
    countDrivers();
    getAllCars();
    $("#txtCarId").focus();
    $("#tabLogin").css('display','none');
    $("#carContent").css('display', 'block');
    $("#nav").text("Cars Manage");
    text = $('#nav').text();
});

$("#lnkDriver").click(function (){
   hideAll();
    countCar();
    countCustomer();
    countDrivers();
    getAllDriver();
    $("#txtDriverId").focus();
    $("#tabLogin").css('display','none');
   $("#driverContent").css('display','block');
   $("#nav").text("Driver Manage");
   text=$('#nav').text();
});

$("#lnkOrders").click(function () {
    hideAll();
    countCar();
    countCustomer();
    countDrivers();
    $("#tabLogin").css('display','none');
    $("#orderContent").css('display', 'block');
    $("#nav").text("Rental Manage");
    text = $('#nav').text();
});

$("#lnkOrdersDetail").click(function () {
    hideAll();
    countCar();
    countCustomer();
    countDrivers();
    getAllRentalDetails();
    $("#tabLogin").css('display','none');
    $("#rentalDetailContent").css('display', 'block');
    $("#nav").text("Rental Details");
    text = $('#nav').text();
});

function hideAll() {
    $("#loginContent,#signUpContent,#dashboardContent,#customerContent,#carContent,#driverContent,#orderContent,#rentalDetailContent").css('display', 'none');
}

function countCustomer(){
    $.ajax({
        url:'http://localhost:8080/pos/api/v1/customer/count',
        method:'get',
        async:true,

        success:function (data){
            console.log(data);
            $("#customerCount").text(data);
        }
    });
}
function countCar(){
    $.ajax({
        url:'http://localhost:8080/pos/api/v1/car/count',
        method:'get',
        async:true,

        success:function (data){
            console.log(data);
            $("#carCount").text(data);
        }
    });
}

function countDrivers(){
    $.ajax({
        url:'http://localhost:8080/pos/api/v1/driver/count',
        method:'get',
        async:true,

        success:function (data){
            console.log(data);
            $("#driversCount").text(data);
        }
    });
}


