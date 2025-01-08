
function createTable(listUser, listPhongBan){
    try{
        let tbodyString = "";
        //Table User
        let tbodyUser = document.getElementById("tbodyTableUser");
        tbodyUser.innerHTML = "";
        for(let i = 0 ; i < listUser.length ; i++){
            tbodyString += `<tr>`+
                `<td>${listUser[i].maNhanVien}</td>`+
                `<td>${listUser[i].tenNhanVien}</td>`+
                `<td>${listUser[i].tuoi}</td>`+
                `<td>${listUser[i].queQuan}</td>`+
                `</tr>`;
        }
        tbodyUser.innerHTML += tbodyString;

        //Table PhongBan
        let tbodyPhongBan = document.getElementById("tbodyTablePhongBan");
        tbodyPhongBan.innerHTML = "";
        tbodyString = "";
        for(let i = 0 ; i < listPhongBan.length ; i++){
            tbodyString += `<tr>`+
                `<td>${listPhongBan[i].maPhongBan}</td>`+
                `<td>${listPhongBan[i].tenPhongBan}</td>`+
                `<td>${listPhongBan[i].maTP}</td>`+
                `</tr>`;
        }
        tbodyPhongBan.innerHTML += tbodyString;
    } catch (e) {
        console.log(e)
    }
}

async function getAllData(){
    // Gọi cả hai API
    const [userResponse, phongBanResponse] = await Promise.all([
        axios.get("/api/v1/user/get-all-user"),
        axios.get("/api/v1/phong-ban/get-all-phong-ban"),
    ]);

    // Trích xuất dữ liệu
    const userResult = userResponse.data; // Lấy dữ liệu từ API user
    const phongBanResult = phongBanResponse.data; // Lấy dữ liệu từ API phòng ban

    if(userResult.status && phongBanResult.status){
        createTable(userResult.data, phongBanResult.data);
    }
}


// Lắng nghe sự kiện click trên bảng
document.addEventListener("DOMContentLoaded", () => {
    getAllData();
});


