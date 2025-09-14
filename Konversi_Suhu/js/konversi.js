document.addEventListener('DOMContentLoaded', () => {
    // Fungsi untuk mengonversi suhu
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

        // Logika konversi
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

    function updateInfo() {
        const dariSatuan = document.getElementById('dariSatuan').value;
        const infoBox = document.getElementById('infoBox');
        let info = '';

        if (dariSatuan === 'celsius') {
            info = `
                <h3>Celsius (°C)</h3>
                <p>Juga dikenal sebagai skala sentigrade, Celsius adalah skala suhu yang paling umum digunakan di seluruh dunia. Skala ini didasarkan pada titik beku air pada 0°C dan titik didih air pada 100°C.</p>
                <h4>Rumus Konversi dari Celsius:</h4>
                <ul>
                    <li>Ke Fahrenheit: F = (C × 9/5) + 32</li>
                    <li>Ke Kelvin: K = C + 273.15</li>
                    <li>Ke Rankine: Ra = (C + 273.15) × 9/5</li>
                </ul>
            `;
        } else if (dariSatuan === 'fahrenheit') {
            info = `
                <h3>Fahrenheit (°F)</h3>
                <p>Skala Fahrenheit adalah skala suhu yang digunakan terutama di Amerika Serikat. Pada skala ini, titik beku air adalah 32°F dan titik didihnya adalah 212°F.</p>
                <h4>Rumus Konversi dari Fahrenheit:</h4>
                <ul>
                    <li>Ke Celsius: C = (F - 32) × 5/9</li>
                    <li>Ke Kelvin: K = (F - 32) × 5/9 + 273.15</li>
                    <li>Ke Rankine: Ra = F + 459.67</li>
                </ul>
            `;
        } else if (dariSatuan === 'kelvin') {
            info = `
                <h3>Kelvin (K)</h3>
                <p>Skala Kelvin adalah skala suhu termodinamika absolut yang banyak digunakan dalam sains dan teknik. Pada skala ini, 0 K (nol absolut) adalah suhu terendah yang mungkin, di mana semua gerakan termal molekul berhenti. Skala ini tidak menggunakan simbol derajat (°).</p>
                <h4>Rumus Konversi dari Kelvin:</h4>
                <ul>
                    <li>Ke Celsius: C = K - 273.15</li>
                    <li>Ke Fahrenheit: F = (K - 273.15) × 9/5 + 32</li>
                    <li>Ke Rankine: Ra = K × 9/5</li>
                </ul>
            `;
        } else if (dariSatuan === 'rankine') {
            info = `
                <h3>Rankine (°R atau °Ra)</h3>
                <p>Skala Rankine adalah skala suhu absolut yang serupa dengan Kelvin, tetapi menggunakan interval derajat Fahrenheit. Nol absolut pada skala ini adalah 0°R, yang setara dengan 0 K. Skala ini jarang digunakan di luar bidang teknik tertentu di Amerika Serikat.</p>
                <h4>Rumus Konversi dari Rankine:</h4>
                <ul>
                    <li>Ke Celsius: C = (Ra - 491.67) × 5/9</li>
                    <li>Ke Fahrenheit: F = Ra - 459.67</li>
                    <li>Ke Kelvin: K = Ra × 5/9</li>
                </ul>
            `;
        }

        infoBox.innerHTML = info;
    }

    document.getElementById('dariSatuan').addEventListener('change', updateInfo);
    updateInfo();
});