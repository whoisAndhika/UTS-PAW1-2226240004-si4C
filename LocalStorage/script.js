localStorage.setItem("JumlahBarang", 123);

console.log(localStorage.getItem("JumlahBarang"));

let element = document.getElementById("JumlahBarang");
if (element) {
    element.innerHTML = localStorage.getItem("JumlahBarang") || "Data tidak ditemukan";
} else {
    console.error("Elemen dengan ID 'JumlahBarang' tidak ditemukan.");
}