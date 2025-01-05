async function addUser() {
    let listUser = {
        'fullName': document.getElementById("txtFullName").value,
        'age': document.getElementById("txtAge").value,
        'hometown': document.getElementById("txtHometown").value
    };
    await insertUser(listUser);
}

async function addPhongBan() {
    let listPhongBan = {
        'maPhongBan': document.getElementById("txtMaPhongBan").value,
        'tenPhongBan': document.getElementById("txtTenPhongBan").value,
        'maTP': document.getElementById("txtMaTP").value
    };
    console.log(listPhongBan);
    await insertPhongBan(listPhongBan);
}

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
        createSelectBoxPhongBan();
    }
}

insertUser = async (user) => {
    let result = await axios.post("/api/v1/user/save-user", user);
    if(result.status){
        getAllData();
    }
};

insertPhongBan = async (phongBan) => {
    let result = await axios.post("/api/v1/phong-ban/save-phong-ban", phongBan);
    if(result.status){
        getAllData();
    }
};


createSelectBoxPhongBan = async () =>{
    let selectString = '';
    let {data: result} = await axios.get("/api/v1/phong-ban/get-all-phong-ban");
    if(result.status){
        for(let i = 0 ; i < result.data.length ; i++ ){
            selectString += `<option value="${result.data[i].maPhongBan}">${result.data[i].tenPhongBan}</option>`;
        }
    }
    selectString += `</select>`;
    let tSelect = document.getElementById("cbxPhongBanSelect");
    tSelect.innerHTML += selectString;

};


// xử lý event click table -> fill to form

// Hàm để hiển thị thông tin vào form khi click vào một dòng
function fillUserFormWithRowData(event) {
    console.log("Row clicked:", event.target);
    const row = event.target.closest('tr'); // Lấy dòng được click
    if (!row || row.rowIndex === 0) return;// Nếu không phải dòng, thoát

    // Lấy dữ liệu từ dòng
    const rowData = {
        fullname: row.cells[1]?.textContent.trim(),
        age: row.cells[2]?.textContent.trim(),
        hometown: row.cells[3]?.textContent.trim()
    };

    console.log(rowData);

    // Điền dữ liệu vào form
    document.getElementById("txtFullName").value = rowData.fullname || "";
    document.getElementById("txtAge").value = rowData.age || "";
    document.getElementById("txtHometown").value = rowData.hometown || "";
}

function fillPhongBanFormWithRowData(event) {
    console.log("Row clicked:", event.target);
    const row = event.target.closest('tr'); // Lấy dòng được click
    if (!row || row.rowIndex === 0) return;// Nếu không phải dòng, thoát

    // Lấy dữ liệu từ dòng
    const rowData = {
        maPhongBan: row.cells[0]?.textContent.trim(),
        tenPhongBan: row.cells[1]?.textContent.trim(),
        maTP: row.cells[2]?.textContent.trim(),
    };

    console.log(rowData);

    // Điền dữ liệu vào form
    document.getElementById("txtMaPhongBan").value = rowData.maPhongBan || "";
    document.getElementById("txtTenPhongBan").value = rowData.tenPhongBan || "";
    document.getElementById("txtMaTP").value = rowData.maTP || "";

}

// Lắng nghe sự kiện click trên bảng
document.addEventListener("DOMContentLoaded", () => {
    getAllData();
    document.getElementById("tableUser").addEventListener("click", fillUserFormWithRowData);
    document.getElementById("tablePhongBan").addEventListener("click", fillPhongBanFormWithRowData);
});


