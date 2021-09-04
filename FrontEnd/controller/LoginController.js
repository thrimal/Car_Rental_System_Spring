$("#btnSignUp").click(function (){

    let email = $("#txtSignEmail").val();
    let password=$("#txtSignPassword").val();
    let cnfPassword=$("#txtConfirmPassword").val();
    $.ajax({
        url:'http://localhost:8080/pos/api/v1/login',
        method:'post',
        async:true,
        contentType:'application/json',
        data:JSON.stringify({
            email:email,
            password:password,
            cnfPassword:cnfPassword
        }),
        success:function (data){
            alert("User Added Done...");
        },
        error:function (){
            alert("Already Exist...");
        }
    });
});

// $("#btnLogin").click(function (){
//    let loginEmail= $("#txtLoginEmail").val();
//    let loginPassword= $("#txtLoginPassword").val();
//
//     $.ajax({
//         url:`http://localhost:8080/pos/api/v1/login/${loginEmail},${loginPassword}`,
//         method:'get',
//         async:true,
//         contentType:'application/json',
//
//         success:function (data){
//             hideAll();
//             countCar();
//             countCustomer();
//             countDrivers();
//             $("#tab").css('display','');
//             $("#tabLogin").css('display','none');
//             $("#dashboardContent").css('display', 'block');
//             $("#nav").text("Dashboard");
//             text = $('#nav').text();
//         },
//         error:function (){
//             alert("Already Exist...");
//         }
//     });
// });