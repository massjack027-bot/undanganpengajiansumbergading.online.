const tanggalTujuan = new Date('Dec 22, 2025 18:30:00').getTime();

const hitungMundur = setInterval(function () {
  const sekarang = new Date().getTime();
  const selisih = tanggalTujuan - sekarang;

  // kalau sudah lewat lebih dari 12 jam
  if (selisih <= -43200000) {
    clearInterval(hitungMundur);
    document.getElementById('hari').innerHTML = '00';
    document.getElementById('jam').innerHTML = '00';
    document.getElementById('menit').innerHTML = '00';
    document.getElementById('detik').innerHTML = '00';
    document.getElementById('waktu').innerHTML = 'ACARA SUDAH SELESAI';
    return;
  }

  // kalau waktu sudah habis (acara baru dimulai)
  if (selisih <= 0) {
    clearInterval(hitungMundur);
    document.getElementById('hari').innerHTML = '00';
    document.getElementById('jam').innerHTML = '00';
    document.getElementById('menit').innerHTML = '00';
    document.getElementById('detik').innerHTML = '00';
    document.getElementById('waktu').innerHTML = 'ACARA SUDAH DI MULAI .... !!!';
    return;
  }

  // hitung hari, jam, menit, detik
  const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
  const jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
  const detik = Math.floor((selisih % (1000 * 60)) / 1000);

  document.getElementById('hari').innerHTML = hari;
  document.getElementById('jam').innerHTML = jam;
  document.getElementById('menit').innerHTML = menit;
  document.getElementById('detik').innerHTML = detik;

  if (selisih <= 43200000) {
    // kurang dari 12 jam
    document.getElementById('waktu2').innerHTML = 'ACARA SUDAH DEKAT JANGAN LUPA HADIR';
    document.getElementById('waktu').innerHTML = 'NAKTIK MALAM SISA WAKTU...!!';
  } else if (selisih <= 83200000) {
    // kurang dari 23 jam
    document.getElementById('waktu2').innerHTML = 'ACARA SUDAH DEKAT JANGAN LUPA HADIR';
    document.getElementById('waktu').innerHTML = 'BESOK MALAM SISA WAKTU...!!';
  } else {
    document.getElementById('waktu').innerHTML = 'ACARA AKAN DI MULAI DALAM WAKTU';
  }
}, 1000);

// animasi navbaar
const menuToggle = document.querySelector('.menu-toggle input');
const navUl = document.querySelector('nav ul');

// event listener saat toggle diklik
menuToggle.addEventListener('click', function () {
  navUl.classList.toggle('show'); // tambahkan/hapus class .show
});

