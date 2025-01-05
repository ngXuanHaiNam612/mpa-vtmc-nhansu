CREATE DATABASE mpa_vitamincode;
USE mpa_vitamincode;

CREATE TABLE VTMC_NHANSU_PHONGBAN(
    ma_phong_ban NVARCHAR(6) PRIMARY KEY,
    ten_phong_ban NVARCHAR(50) NOT NULL,
    ma_truong_phong INT NOT NULL
);

CREATE TABLE VTMC_NHANSU_NHANVIEN(
    ma_nhan_vien INT AUTO_INCREMENT PRIMARY KEY,
    ten_nhan_vien NVARCHAR(50) NOT NULL,
    tuoi INT,
    que_quan NVARCHAR(150),
    ma_phong_ban NVARCHAR(6) NOT NULL,
    FOREIGN KEY (ma_phong_ban) REFERENCES VTMC_NHANSU_PHONGBAN(ma_phong_ban)
);

INSERT INTO VTMC_NHANSU_PHONGBAN (ma_phong_ban, ten_phong_ban, ma_truong_phong) VALUES
('PB001','Phòng IT', 1),
('PB002','Phòng Marketing', 2),
('PB003','Phòng Kế Toán', 3),
('PB004','Phòng Nhân Sự', 4);

INSERT INTO VTMC_NHANSU_NHANVIEN (ma_nhan_vien, ten_nhan_vien, tuoi, que_quan, ma_phong_ban) VALUES 
(1, 'Nguyễn Văn An', 24, 'Cần Thơ', 'PB001'),
(2, 'Trần Thị Bình', 42,'Cần Thơ', 'PB002'),
(3, 'Lê Văn Cường', 37,'Hải Phòng', 'PB003'),
(4, 'Phạm Thị Dung', 46,'Hồ Chí Minh', 'PB004'),
(5,'Hoàng Văn Hải', 54,'Đà Nẵng', 'PB001'),
(6,'Đặng Thị Hương', 55,'Hồ Chí Minh', 'PB004'),
(7,'Bùi Văn Hoàng', 23,'Hồ Chí Minh', 'PB002'),
(8,'Ngô Thị Lan', 51,'Hải Phòng', 'PB004'),
(9,'Vũ Văn Minh', 34,'Cần Thơ', 'PB002'),
(10,'Dương Thị Nga', 49,'Đà Nẵng', 'PB004'),
(11,'Hồ Văn Phong', 53,'Hà Nội', 'PB003'),
(12,'Đỗ Thị Quỳnh', 39,'Hồ Chí Minh', 'PB004'),
(13,'Lý Văn Sơn', 29,'Cần Thơ', 'PB002'),
(14,'Tô Thị Trang', 34,'Hà Nội', 'PB001'),
(15,'Phan Văn Việt', 38,'Hà Nội', 'PB002'),
(16,'Cao Thị Yến', 27,'Đà Nẵng', 'PB001'),
(17,'Lâm Văn Quang', 35,'Cần Thơ', 'PB003'),
(18,'Trịnh Thị Xuân', 30,'Hải Phòng', 'PB003'),
(19,'Võ Văn Khang', 50,'Cần Thơ', 'PB001'),
(20,'Mai Thị Liên', 54,'Cần Thơ', 'PB001'),
(21,'Lương Văn Đạt', 52,'Hồ Chí Minh', 'PB004'),
(22,'Hà Thị Thảo', 36,'Hải Phòng', 'PB003'),
(23,'Châu Văn Khôi', 55,'Cần Thơ', 'PB004'),
(24,'Đinh Thị Thu', 39,'Đà Nẵng', 'PB004'),
(25,'Thái Văn Tài', 36,'Đà Nẵng', 'PB002'),
(26,'Tạ Thị Nhung', 51,'Hải Phòng', 'PB004'),
(27,'Hứa Văn Thành', 50,'Cần Thơ', 'PB004'),
(28,'Đàm Thị Lan Anh', 22,'Hải Phòng', 'PB002'),
(29,'Triệu Văn Kiên', 39,'Cần Thơ', 'PB003');