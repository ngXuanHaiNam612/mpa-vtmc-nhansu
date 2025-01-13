async function savePhongBan() {
    let phongBan = {
        'maPhongBan': document.getElementById("txtMaPhongBan").value,
        'tenPhongBan': document.getElementById("txtTenPhongBan").value,
        'maTP': document.getElementById("cbxNhanVienSelect").value
    };
    await insert(phongBan);
}

async function deletePhongBan() {
    let maPhongBan = document.getElementById("txtMaPhongBan").value;
    await deletePhongBanById(maPhongBan);
}

function createTable(listUser, listPhongBan){
    try{

        //Table PhongBan
        let tbodyPhongBan = document.getElementById("tbodyTablePhongBan");
        tbodyPhongBan.innerHTML = "";
        let tbodyString = "";
            for(let i = 0 ; i < listPhongBan.length ; i++){
                tbodyString += `<tr>`+
                    `<td>${listPhongBan[i].maPhongBan}</td>`+
                    `<td>${listPhongBan[i].tenPhongBan}</td>`+
                    `<td>${listPhongBan[i].maTP}</td>`+
                    `</tr>`;
            }
        tbodyPhongBan.innerHTML += tbodyString;

        //Combo box Nhan Vien
        let tSelect = document.getElementById("cbxNhanVienSelect");
        tSelect.innerHTML = "";
        let selectString = '';
        for(let i = 0 ; i < listUser.length ; i++ ){
            selectString += `<option value="${listUser[i].maNhanVien}">${listUser[i].maNhanVien} - ${listUser[i].tenNhanVien}</option>`;
        }

        selectString += `</select>`;

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

insert = async (phongBan) => {
    let result = await axios.post("/api/v1/phong-ban/save-phong-ban", phongBan);
    if(result.status){
        getAllData();
    }
};

deletePhongBanById = async (maPhongBan) => {
    let result = await axios.delete("/api/v1/phong-ban/delete-phong-ban?maPhongBan="+maPhongBan);
    if(result.status){
        getAllData();
    }
};


// xử lý event click table -> fill to form
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
    document.getElementById("cbxNhanVienSelect").value = rowData.maTP || "";


}

// Lắng nghe sự kiện click trên bảng
document.addEventListener("DOMContentLoaded", () => {
    getAllData();
    document.getElementById("tablePhongBan").addEventListener("click", fillPhongBanFormWithRowData);
});


