let objectUser = [
    {
        "id": 1,
        "userName": "Trà My",
        "age": 21,
        "hometown": "DakLak"
    },
    {
        "id": 2,
        "userName": "Dũng Bug",
        "age": 21,
        "hometown": "Quận 4"
    },
    {
        "id": 3,
        "userName": "Gia Minh",
        "age": 24,
        "hometown": "HCM"
    }
]
function createTable() {
    let tbodyString = "";
    for (let i = 0; i < objectUser.length; i++) {
        tbodyString += `<tr>
                    <td>${objectUser[i].id}</td>
                    <td>${objectUser[i].userName}</td>
                    <td>${objectUser[i].age}</td>
                    <td>${objectUser[i].hometown}</td>
                  </tr>`
    };
    $("#tbodyTableUser").append(tbodyString);
};
// tìm user theo id
function findUserById() {
    let userId = $("#userIdTxt").val();
    let obj = objectUser.find((e) => e.age == userId);
    //let obj = objectUser.filter((e) => e.id == userId);
    console.log(obj);
}