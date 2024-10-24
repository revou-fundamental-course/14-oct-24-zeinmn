// mengambil input nama
function replaceName() {
  var name = prompt("Hai, silahkan masukkan nama Anda :");
  document.getElementById("name").innerHTML = name;
}
replaceName();

// form
document
  .getElementById("dataForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // mengirim pesan kalau data kosong

    // input data
    const name = document.getElementById("nama").value;
    const gender = document.getElementById("gender").value;
    const tanggal = document.getElementById("tanggal").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("komen").value;

    // output data yang telah diisi
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
        <h3> Hasil Data : </h3>
        <h4><strong>Nama:</strong> ${name}<h4>
        <h4><strong>Jenis Kelamin:</strong> ${gender}<h4>
        <h4><strong>Tanggal Lahir:</strong> ${tanggal}<h4>
        <h4><strong>Email:</strong> ${email}<h4>
        <h4><strong>Komentar:</strong> ${message}</h4>
    `;
    outputDiv.style.display = "block"; // Menampilkan hasil output
  });
