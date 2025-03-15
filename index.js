let arrNumber = [];
let renderHTML = document.querySelector(".renderNumber");
document.querySelector("#btnAddNumber").onclick = () => {
  let getNumber = document.querySelector("#inputNumber").value * 1;
  console.log(typeof getNumber);
  arrNumber.push(getNumber);

  renderHTML.innerHTML = arrNumber;
  document.querySelector("#inputNumber").value = "";
};

function handleTinhTongSoDuong() {
  let tong = arrNumber
    .filter((item) => item > 0)
    .reduce((acc, curr) => acc + curr, 0);

  document.querySelector("#tongSoDuong").innerHTML = "Tổng là: " + tong;
}
function handleDemSoDuong() {
  let dem = 0;
  arrNumber.filter((item, index) => {
    if (item > 0) {
      return dem++;
    }
  });
  console.log(dem);
  document.querySelector("#demSoDuong").innerHTML = "Số nguyên dương: " + dem;
}

function handleTimSoMin() {
  let min = arrNumber[0];
  arrNumber.filter((item, index) => {
    if (item < min) {
      min = item;
    }
  });
  document.querySelector("#soNhoNhat").innerHTML = "Số nhỏ nhất: " + min;
}

function handleTimSoDuongMin() {
  let min = arrNumber[0];
  arrNumber.filter((item, index) => {
    if (item > 0 && item < min) {
      min = item;
    }
  });
  document.querySelector("#soDuongNhoNhat").innerHTML =
    "Số dương nhỏ nhất: " + min;
}

function handleTimSoChangCuoiCung() {
  let soChanCuoiCung = -1;
  for (let i = arrNumber.length - 1; i >= 0; i--) {
    if (arrNumber[i] % 2 === 0) {
      soChanCuoiCung = arrNumber[i];
      break;
    }
  }
  document.querySelector("#soChanCuoiCung").innerHTML =
    "Số chẳn cuối cùng trong mảng: " + soChanCuoiCung;
}

function handleSwap2So() {
  let index1 = document.querySelector("#vitri1").value * 1;
  let index2 = document.querySelector("#vitri2").value * 1;
  if (index1 == "" || index2 == "") {
    return -1;
  }
  [arrNumber[index1], arrNumber[index2]] = [
    arrNumber[index2],
    arrNumber[index1],
  ];
  document.querySelector("#mangdoicho").innerHTML = "Mảng đã đổi: " + arrNumber;
  console.log(arrNumber);
}

function handleSapXepTang() {
  let arrSort = arrNumber.sort((a, b) => a - b);

  document.querySelector("#sapXepTangDan").innerHTML =
    "Mảng đã sắp xếp: " + arrSort;
}

//Kiem tra so nguyen to
function checkSoNguyenTo(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}
function handleTimSoNguyenTo() {
  let soNT = 0;
  for (let i = 0; i <= arrNumber.length; i++) {
    if (checkSoNguyenTo(arrNumber[i])) {
      soNT = arrNumber[i];
      break;
    }
  }
  document.querySelector("#demSoNguyenTo").innerHTML =
    "Số nguyên tố đầu tiên: " + (soNT != 0 ? soNT : -1);
}
