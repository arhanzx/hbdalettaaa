WEBSITE KADO ULANG TAHUN
========================
Cara pakai
1. Ekstrak zip ini.
2. Buka config.js dengan editor teks (Notepad, VS Code) lalu ubah:
   - name, from : nama penerima & pengirim
   - date       : tanggal hitung mundur (format 2026-12-25T00:00:00)
   - message    : isi ucapan (\n = baris baru)
   - decor : elemen vektor di halaman surat (kue, boneka, bunga, balon, kado, hati) di assets/decor
   - musicPhotos : foto di samping pemutar musik, taruh di assets/photos
   - youtube    : ID video (bagian setelah v= pada link YouTube)
   - giftNote   : tulisan di halaman kue & bunga
3. Buka index.html di browser untuk melihat hasilnya.

Isi folder
- index.html  : struktur halaman
- style.css   : tampilan/warna
- script.js   : animasi & alur
- config.js   : isi yang diedit
- assets/     : gambar kue, bunga, foto

Catatan
- Video YouTube butuh internet. Jika dibuka langsung dari file (file://) dan video error,
  jalankan server lokal (VS Code: ekstensi Live Server) atau upload ke hosting
  gratis (Netlify, GitHub Pages, Vercel) - cukup upload seluruh folder.
- Foto kue & bunga bisa diganti dengan menimpa assets/cake.webp & assets/flower.webp.

Foto di samping musik: timpa assets/photos/music-1.png, music-2.png, music-3.png dengan foto Anda (nama file sama), atau ubah musicPhotos di config.js.
