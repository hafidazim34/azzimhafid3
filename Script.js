```javascript
// Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyAiiFpE7oBHxf4bx4IWCBNzz4wRLMegYHQ",
    authDomain: "test-48f30.firebaseapp.com",
    projectId: "test-48f30",
    storageBucket: "test-48f30.firebasestorage.app",
    messagingSenderId: "786505921847",
    appId: "1:786505921847:web:c89ffa187fff33195516b2",
    measurementId: "G-YZXR3GBT3L"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function showMainScreen() {
    const nama = document.getElementById('login-nama').value;
    const deskripsi = document.getElementById('login-deskripsi').value;

    document.getElementById('profile-nama').value = nama;
    document.getElementById('profile-deskripsi').value = deskripsi;

    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('main-screen').classList.remove('hidden');
    showMonitoring();
}

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
}

function showInterface(interfaceId) {
    document.getElementById('monitoring').classList.add('hidden');
    document.getElementById('konfigurasi').classList.add('hidden');
    document.getElementById('pakan-otomatis').classList.add('hidden');
    document.getElementById('pemberian-obat').classList.add('hidden');
    document.getElementById('profile').classList.add('hidden');
    document.getElementById(interfaceId).classList.remove('hidden');
}

function showMonitoring() {
    showInterface('monitoring');
}

function showKonfigurasi() {
    showInterface('konfigurasi');
}

function showPakanOtomatis() {
    showInterface('pakan-otomatis');
}

function showPemberianObat() {
    showInterface('pemberian-obat');
}

function showProfile() {
    showInterface('profile');
}

function saveProfile() {
    const nama = document.getElementById('profile-nama').value;
    const deskripsi = document.getElementById('profile-deskripsi').value;

    document.getElementById('login-nama').value = nama;
    document.getElementById('login-deskripsi').value = deskripsi;

    alert('Profil berhasil disimpan!');
}

// Save configuration to Firebase
function saveConfiguration(collection, data) {
    db.collection(collection).add(data)
        .then(() => {
            alert('Data berhasil disimpan!');
        })
        .catch((error) => {
            console.error('Error writing document: ', error);
        });
}

// Example usage for saving configuration
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', (event) => {
        const parent = event.target.closest('.config-card');
        const inputs = parent.querySelectorAll('input');
        const data = {};

        inputs.forEach(input => {
            data[input.placeholder] = input.value;
        });

        const collection = parent.querySelector('h3').innerText;
        saveConfiguration(collection, data);
    });
});
```