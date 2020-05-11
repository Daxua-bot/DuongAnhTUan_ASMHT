loadNodeSanPham();

function loadNodeSanPham(){

    var dataSanPham = loaddulieu("danhSachSanPham");

    // nếu chưa có giữ liệu thì thêm dữ liệu mẫu
    if(dataSanPham.length == 0){
        
        var danhSachSanPham = new Array();
        var sanPhamLaptop1 = taoSanPham("images/lap4.png"
        ,"Laptop Gaming",500000,15,"Hà Nội");
        var sanPhamLaptop2 = taoSanPham("images/lap5.png"
        ,"Laptop VivoBook",4500000,20,"Hồ Chí Minh");
        var sanPhamLaptop3 = taoSanPham("images/lap6.png"
        ,"Laptop ASUS",6000000,25,"Đà Nẵng");
        var sanPhamLaptop4 = taoSanPham("images/lap4.png"
        ,"Laptop VivoBook",50000000,30,"Hà Nội");

        for(var i = 0; i<5;i++){
        dataSanPham.push(sanPhamLaptop1);
        dataSanPham.push(sanPhamLaptop2);
        dataSanPham.push(sanPhamLaptop3);
        dataSanPham.push(sanPhamLaptop4);
        }
        

        
        ghidulieu(dataSanPham,"danhSachSanPham");
    }

    // thêm function vào sản phẩm
    for(var i = 0 ; i < dataSanPham.length ; i++){
        dataSanPham[i] = taoSanPham(dataSanPham[i].hinhAnh, dataSanPham[i].ten, dataSanPham[i].giaGoc, dataSanPham[i].phanTram, dataSanPham[i].khuVuc, dataSanPham[i].id);
    }

    var html = chuyenDanhSachSanPhamSangHTML(dataSanPham);
    var nodehienThiSanPham =  document.getElementById('hien-thi-san-pham');
    nodehienThiSanPham.innerHTML = html;
}
