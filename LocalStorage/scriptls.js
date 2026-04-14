let NamaBarang = document.getElementById("Nama Barang");
let JumlahBarang = document.getElementById("Jumlah Barang");
let KeteranganBarang = document.getElementById("Keterangan Barang");

function simpan() {
    console.log(NamaBarang.value);
    console.log(JumlahBarang.value);

    if (localStorage.getItem("Barang") === null) {
        localStorage.setItem("Barang", "[]");
    }

    let data = JSON.parse(localStorage.getItem("Barang"));
    console.log(data);

    data.push({
        NamaBarang: NamaBarang.value, 
        JumlahBarang: JumlahBarang.value,
        Keterangan: KeteranganBarang.value
    });
    console.log(data);

    localStorage.setItem("Barang", JSON.stringify(data));

    tampil();
}

function tampil() {
    let hasil = JSON.parse(localStorage.getItem("Barang") || "[]");

    document.getElementById("list-Barang").innerHTML = "";

    hasil.forEach(element => {
        document.getElementById("list-Barang").innerHTML += `<div class="col-lg-4 col-md-6 mt-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${element.NamaBarang}</h5>
                    <p class="card-text">Jumlah: ${element.JumlahBarang}</p>
                    <p class="card-text">Keterangan: ${element.Keterangan}</p>
                </div>
            </div>
        </div>`;
    });
}

tampil();