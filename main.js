/** Đề bài 1: Tìm số nguyên dương nhỏ nhất sao cho:
            1 + 2 + ..... + n > 10000
 * input: người dùng nhập vào số (number)
 * output: tính toán và xác định số đó có lớn hơn 10000(number && string)
 * Các bước xử lý:
 */

// gọi DOM .onclick 
document.getElementById('btnNhapSo').onclick = function(){
    //input: number;
    //lấy dữ liệu;
    var soN = document.getElementById('nhapSo').value * 1;
    //output: string && number
    var ketQua1 = 0;

    // khởi tạo biến bước nhảy, tạo điều kiện vòng lặp và thay đổi biến bước nhảy
    for(var i = 0; i <= soN; i++){
        ketQua1 += i
    }
    if(ketQua1 > 10000) {
        ketQua1 = ketQua1 + 'đây là số nguyên dương nhỏ nhất'
    }else {
        ketQua1 = ketQua1 + 'đây không phải số nguyên dương nhỏ nhất'
    }
    // In kết quả ra màn hình
    document.getElementById('ketQua_1').innerHTML = ketQua1;
}


/** Đề bài 2: >Viết chương trình nhập vào 2 số x,n. Tính tổng: S(n) = x + x^2 + x^3 + ..... + x^n 
 * input: người dùng nhập vào 2 số X và N (number);
 * output: Tính tổng S(n) và in ra màn hình (number);
 * Các bước xử lý:
 */

// gọi DOM .onclick;
document.getElementById('btnTinhTong').onclick = function(){
    //input: number;
    //lấy dữ liệu;
    var soX = document.getElementById('nhapSoX_2').value * 1;
    var soN = document.getElementById('nhapSoN_2').value * 1;
    //output: number
    var tongSn = 0;

    //Các bước xử lý:
    // khởi tạo biến bước nhảy, tạo điều kiện vòng lặp và thay đổi biến bước nhảy
    for (var i = 1; i <= soN; i++){
        // tongSn += (Math.pow(soX, i));
        tongSn += hamTinhSoMu(soX, i);
    }
    // In kết quả ra màn hình
    document.getElementById('ketQua_2').innerHTML = 'S(n) = ' +  tongSn;
}
//Viết hàm Math.pow(a, b)
function hamTinhSoMu(a, b){ //input:number
    //output: number
    var ketQuaM = 0;
    //Xử lý:
    ketQuaM = Math.pow(a, b);
    return ketQuaM;
}


/** Đề bài 3: Nhập vào n. Tính giai thừa 1*2*...n
 * input: người dùng nhập và số n (number);
 * output: tính giai thừa và in ra màn hình (number);
 * Các bước xử lý:
 */

// gọi DOM .onclick;
document.getElementById('btnTinhGiaiThua').onclick = function(){
    //input: number;
    //lấy dữ liệu;
    var nNumber = document.getElementById('nhapSoN_3').value * 1;
    //output: number;
    var ketQua_3 = 1;

    //Các bước xử lý:
    // khởi tạo biến bước nhảy, tạo điều kiện vòng lặp và thay đổi biến bước nhảy
    for (var i = 1; i <= nNumber; i++){
        ketQua_3 *= i;
    }
    // In kết quả ra màn hình;
    document.getElementById('ketQua_3').innerHTML = ketQua_3;
}

/** Đề bài 4: Hãy viết chương trình khi click vào button sẽ in ra 10 thẻ div. Nếu div nào vị trí chẵn thì background màu đỏ, lẻ thì background màu xanh.
 * input: Div vị trí chẵn thì nền đỏ, vị trí lẻ thì nền xanh
 * output: in ra 10 thẻ div theo như yêu cầu (string)
 * Các bước xử lý: 
 */

// gọi DOM .onclick;
document.getElementById('btnTaoTheDiv').onclick = function(){
    //output: string;
    var ketQua_4 = '';
    //Các bước xử lý:
    // khởi tạo biến bước nhảy, tạo điều kiện vòng lặp và thay đổi biến bước nhảy
    for(var i = 1; i <= 10; i++){
        if(i % 2 == 0){ // số chẵn
            ketQua_4 += '<div id="ketQua_4" class="bg-danger p-3 mt-3"></div>'
        }else { // số lẻ
            ketQua_4 += '<div id="ketQua_4" class="bg-primary p-3 mt-3"></div>'
        }
    }
    // In kết quả ra màn hình;
    document.getElementById('ketQua_4').innerHTML = ketQua_4;
}


/** Đề bài 5: Viết 1 chương trình có 1 ô input, 1 button. Khi click vào thì in ra các số nguyên tố từ 1 tới giá trị của ô input
 * input: người dùng nhập vào 1 số (number)
 * output: In ra dãy số nguyên tố từ n -> ... (string)
 * Các bước xử lý:
 */

// gọi DOM .onclick;
document.getElementById('btnInCacSoNguyenTo').onclick = function(){
    //input: number;
    //lấy dữ liệu;
    var nhapSo_5 = document.getElementById('nhapSo_5').value * 1;
    //output: string;
    var ketQua_5 = '';

    //Các bước xử lý:
    // khởi tạo biến bước nhảy, tạo điều kiện vòng lặp và thay đổi biến bước nhảy
    for(var iSo  = 2; iSo <= nhapSo_5; iSo++){
        // chạy qua từ 2 đền n kiểm tra xem từng số có phải là số nguyên tố hay không
        var checkSNT = kiemTraSoNguyenTo(iSo)
        // check kết quả. Nếu true thì iSo là số nguyên tố
        if(checkSNT) {
            ketQua_5 += iSo + ', '
        }
        // var checkSNT = true;
        // for(var i = 2; i <= Math.sqrt(iSo); i++){
        //     if(iSo % i === 0){
        //         checkSNT = false;
        //         break;
        //     };
        // }
        //     if(checkSNT){
        //         ketQua_5 += iSo + ',';
        //     }
       document.getElementById('ketQua_5').innerHTML = ketQua_5;
    }
}
//viết hàm check số nguyên tố
function kiemTraSoNguyenTo(so){ //input: number
    //output: true ? false;
    var checkSNT = true;
    for(var i = 2; i <= Math.sqrt(so); i++){
        if(so % i == 0){
            checkSNT = false;
            break;
        }
    }
    return checkSNT;
}