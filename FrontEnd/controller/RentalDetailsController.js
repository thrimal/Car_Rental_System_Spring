
getAllRentalDetails();

$('#tblRentalDetail').on('click',function (){
    let id=$('#tblRentalDetail>tr').children('td:eq(0)').text();
    console.log(id);
});

function getAllRentalDetails (){
    $("#tblRentalDetail").empty();
    $.ajax({
        url:'http://localhost:8080/pos/api/v1/rental',
        method:'get',
        async:true,

        success:function (data){
            for (let rentals of data) {
                let row=`<tr><td>${rentals.rentId}</td><td>${rentals.id}</td><td>${rentals.carId}</td><td>${rentals.did}</td><td>${rentals.startDate}</td><td>${rentals.endDate}</td><td>${rentals.price}</td><td>${rentals.extraKM}</td></tr>`;
                $("#tblRentalDetail").append(row);
            }
        }
    });

}

$("#btnDeletePlaceOrder").click(function (){
    let rentId=$("#txtRentId2").val();
    $.ajax({
        url:`http://localhost:8080/pos/api/v1/rental/?id=${rentId}`,
        method:'delete',
        async:true,

        success:function (data){
            alert("Rental Deleted...");
            getAllRentalDetails();
        }
    });
});