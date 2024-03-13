function tampilkanForm() {
    var namaMesin = document.getElementById("namaMesin").value;
    var namaProduk = document.getElementById("namaProduk").value;
    var batch = document.getElementById("batch").value;
    var jamTransfer = document.getElementById("jamTransfer").value;
    var operatorMixing = document.getElementById("operatorMixing").value;
    var rnd = document.getElementById("rnd").value;
    var qc = document.getElementById("qc").value;
    var note = document.getElementById("note").value;
    
    var hasilForm = "<p><strong>1. Mesin:</strong> " + namaMesin + "</p>" +
                    "<p><strong>- Nama Produk:</strong> " + namaProduk + "</p>" +
                    "<p><strong>- Batch:</strong> " + batch + "</p>" +
                    "<p><strong>- Jam Transfer:</strong> " + jamTransfer + "</p>" +
                    "<p><strong>- Operator Mixing:</strong> " + operatorMixing + "</p>" +
                    "<p><strong>- RnD:</strong> " + rnd + "</p>" +
  if (qc === "Manual") {
        hasilForm += "<p><strong>QC:</strong> " + manualQC + "</p>";
    } else {
        hasilForm += "<p><strong>QC:</strong> " + qc + "</p>";
    }
    hasilForm += "<p><strong>Note:</strong> " + note + "</p>";
    
    document.getElementById("hasilForm").innerHTML = hasilForm;
}

   document.getElementById("hasilForm").innerHTML = hasilForm;
}

function salinHasil() {
    var hasilForm = document.getElementById("hasilForm").innerText;
    navigator.clipboard.writeText(hasilForm)
    .then(() => {
        alert('Hasil berhasil disalin!');
    })
    .catch(err => {
        console.error('Gagal menyalin: ', err);
    });
}

function setJamSekarang() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var jam = hours + ":" + minutes;
    document.getElementById("jamTransfer").value = jam;
}

function toggleInputQC() {
    var qcSelect = document.getElementById("qc");
    var manualQCInput = document.getElementById("manualQC");
    if (qcSelect.value === "Manual") {
        manualQCInput.style.display = "inline-block";
    } else {
        manualQCInput.style.display = "none";
    }
}
