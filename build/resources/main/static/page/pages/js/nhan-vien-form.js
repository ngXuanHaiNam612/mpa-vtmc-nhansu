async function addUser() {
    let listUser = {
        'fullName': document.getElementById("txtFullName").value,
        'age': document.getElementById("txtAge").value,
        'hometown': document.getElementById("txtHometown").value
    };
    await insertUser(listUser);
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

        //Combo box
        let selectString = '';
        // let {data: result} = await axios.get("/api/v1/phong-ban/get-all-phong-ban");

        for(let i = 0 ; i < listPhongBan.length ; i++ ){
            selectString += `<option value="${listPhongBan[i].maPhongBan}">${listPhongBan[i].tenPhongBan}</option>`;
        }

        selectString += `</select>`;
        let tSelect = document.getElementById("cbxPhongBanSelect");
        tSelect.innerHTML += selectString;

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

insertUser = async (user) => {
    let result = await axios.post("/api/v1/user/save-user", user);
    if(result.status){
        getAllData();
    }
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



// Lắng nghe sự kiện click trên bảng
document.addEventListener("DOMContentLoaded", () => {
    getAllData();
    document.getElementById("tableUser").addEventListener("click", fillUserFormWithRowData);
});


