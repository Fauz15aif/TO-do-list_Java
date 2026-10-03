console.log("List dimulai ");

const inputTugas = document.getElementById("tugas-input");
const btnTambah = document.getElementById("btn-tambah");
const daftarTugas = document.getElementById("daftar-tugas");

btnTambah.addEventListener("click", function () {
  const teksTugas = inputTugas.value;
  if (teksTugas === "") {
    alert("Tolong masukkan tugas!");
    return;
  }

  const tugasBaru = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  tugasBaru.appendChild(checkbox);

  const teksTugasBaru = document.createElement("span");
  teksTugasBaru.textContent = teksTugas;
  tugasBaru.appendChild(teksTugasBaru);

  daftarTugas.appendChild(tugasBaru);

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      teksTugasBaru.style.textDecoration = "line-through";
    } else {
      teksTugasBaru.style.textDecoration = "none";
    }
  });

  const tombolHapus = document.createElement("button");
  tombolHapus.textContent = "Hapus";
  tugasBaru.appendChild(tombolHapus);
  
  tombolHapus.addEventListener("click", function () {
    tugasBaru.remove();
  });
  daftarTugas.appendChild(tugasBaru);
});
