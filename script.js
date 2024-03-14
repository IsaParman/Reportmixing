function tampilkanForm() {
    var namaMesinPrefix = document.getElementById("namaMesinPrefix").value;
    var namaMesinSuffix = document.getElementById("namaMesinSuffix").value;
    var namaMesin = namaMesinPrefix + " " + namaMesinSuffix;
    var namaProduk = document.getElementById("namaProduk").value;
    var batchPrefix = document.getElementById("batchPrefix").value;
    var batchSuffix = document.getElementById("batchSuffix").value;
    var batch = batchPrefix + batchSuffix; // Menghapus spasi di antara prefix dan suffix
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
                    "<p><strong>- RnD:</strong> " + rnd + "</p>";

    if (qc === "Manual") {
        var manualQC = document.getElementById("manualQC").value;
        hasilForm += "<p><strong>- QC:</strong> " + manualQC + "</p>";
    } else {
        hasilForm += "<p><strong>- QC:</strong> " + qc + "</p>";
    }
    
    hasilForm += "<p><strong>- Note:</strong> " + note + "</p>";
    
    document.getElementById("hasilForm").innerHTML = hasilForm;
    
    // Mengisi textarea pada form Remove Empty Lines from Text
    var hasilFormPlainText = "1. Mesin: " + namaMesin + "\n" +
                             "- Nama Produk: " + namaProduk + "\n" +
                             "- Batch: " + batch + "\n" +
                             "- Jam Transfer: " + jamTransfer + "\n" +
                             "- Operator Mixing: " + operatorMixing + "\n" +
                             "- RnD: " + rnd + "\n";
    
    if (qc === "Manual") {
        hasilFormPlainText += "- QC: " + manualQC + "\n";
    } else {
        hasilFormPlainText += "- QC: " + qc + "\n";
    }
    
    hasilFormPlainText += "- Note: " + note;
    
    document.getElementById("textInput").value = hasilFormPlainText;
}

function pindahHalaman() {
    window.location.href = 'hapusteks.html';
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

function toggleInputRND() {
    var rndSelect = document.getElementById("rnd");
    var manualRNDInput = document.getElementById("manualRND");
    if (rndSelect.value === "Manual") {
        manualRNDInput.style.display = "inline-block";
    } else {
        manualRNDInput.style.display = "none";
    }
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

function updateBatchText() {
    var batchPrefix = document.getElementById("batchPrefix").value;
    var batchSuffix = document.getElementById("batchSuffix").value;
    var batch = batchPrefix + batchSuffix; // Menghapus spasi di antara prefix dan suffix
    document.getElementById("batch").value = batch;
}

function updateNamaMesinText() {
    var namaMesinPrefix = document.getElementById("namaMesinPrefix").value;
    var namaMesinSuffix = document.getElementById("namaMesinSuffix").value;
    var namaMesin = namaMesinPrefix + " " + namaMesinSuffix;
    document.getElementById("namaMesin").value = namaMesin;
}

function removeEmptyLines() {
    var inputText = document.getElementById("textInput").value;
    var lines = inputText.split('\n');
    var nonEmptyLines = lines.filter(function(line) {
      return line.trim() !== '';
    });
    var outputText = nonEmptyLines.join('\n');
    document.getElementById("output").textContent = "" + outputText;
    
    // Salin teks yang telah diproses ke clipboard
    navigator.clipboard.writeText(outputText)
    .then(() => {
        alert('Teks berhasil diproses dan disalin!');
    })
    .catch(err => {
        console.error('Gagal menyalin teks: ', err);
    });
}

