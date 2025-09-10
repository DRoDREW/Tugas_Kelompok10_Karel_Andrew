document.addEventListener('DOMContentLoaded', () => {
    window.convertTemp = function() {
        const inputSuhu = parseFloat(document.getElementById('inputSuhu').value);
        const dariSatuan = document.getElementById('dariSatuan').value;
        const keSatuan = document.getElementById('keSatuan').value;
        const hasilElement = document.getElementById('hasilKonversi');

        if (isNaN(inputSuhu)) {
            hasilElement.textContent = 'Masukkan angka yang valid!';
            return;
        }

        let hasilKonversi;

        if (dariSatuan === keSatuan) {
            hasilKonversi = inputSuhu;
        } else if (dariSatuan === 'celsius' && keSatuan === 'fahrenheit') {
            hasilKonversi = (inputSuhu * 9/5) + 32;
        } else if (dariSatuan === 'celsius' && keSatuan === 'kelvin') {
            hasilKonversi = inputSuhu + 273.15;
        } else if (dariSatuan === 'celsius' && keSatuan === 'rankine') {
            hasilKonversi = (inputSuhu + 273.15) * 9/5;
        } else if (dariSatuan === 'fahrenheit' && keSatuan === 'celsius') {
            hasilKonversi = (inputSuhu - 32) * 5/9;
        } else if (dariSatuan === 'fahrenheit' && keSatuan === 'kelvin') {
            hasilKonversi = (inputSuhu - 32) * 5/9 + 273.15;
        } else if (dariSatuan === 'fahrenheit' && keSatuan === 'rankine') {
            hasilKonversi = inputSuhu + 459.67;
        } else if (dariSatuan === 'kelvin' && keSatuan === 'celsius') {
            hasilKonversi = inputSuhu - 273.15;
        } else if (dariSatuan === 'kelvin' && keSatuan === 'fahrenheit') {
            hasilKonversi = (inputSuhu - 273.15) * 9/5 + 32;
        } else if (dariSatuan === 'kelvin' && keSatuan === 'rankine') {
            hasilKonversi = inputSuhu * 9/5;
        } else if (dariSatuan === 'rankine' && keSatuan === 'celsius') {
            hasilKonversi = (inputSuhu - 491.67) * 5/9;
        } else if (dariSatuan === 'rankine' && keSatuan === 'fahrenheit') {
            hasilKonversi = inputSuhu - 459.67;
        } else if (dariSatuan === 'rankine' && keSatuan === 'kelvin') {
            hasilKonversi = inputSuhu * 5/9;
        }

        hasilElement.textContent = `Hasil: ${hasilKonversi.toFixed(2)} ${keSatuan.toUpperCase()}`;
    };

    window.clearForm = function() {
        document.getElementById('inputSuhu').value = '';
        document.getElementById('hasilKonversi').textContent = '';
    };
});