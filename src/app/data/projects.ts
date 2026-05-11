export const projects = [
  {
    slug: "smart-parking",
    title: "YOLO Object Detection",
    description:
      "A YOLO-based system for vehicle monitoring in residential areas.",
    image: "/project/yolowebp.webp",
    details: `Sebagai seseorang yang tertarik pada penerapan kecerdasan buatan di dunia nyata, saya mengembangkan Vehicle Access Monitoring System — sebuah sistem berbasis YOLO dan OCR (Pytesseract) yang dirancang untuk memantau jalur masuk kendaraan di area perumahan.
Proyek ini lahir dari ide sederhana: bagaimana jika keamanan perumahan dapat ditingkatkan melalui otomatisasi dan pengenalan plat nomor secara real-time?
Dengan menggabungkan deep learning object detection dan optical character recognition, sistem ini mampu mengenali kendaraan yang masuk dengan cepat dan akurat, sekaligus menyimpan data plat nomor ke dalam database.
Proyek ini menjadi bukti bagaimana AI dan web technology bisa berpadu untuk menghadirkan solusi yang efisien, cerdas, dan bermanfaat langsung bagi lingkungan sekitar.
    `,
    repoUrl: "https://github.com/spaceman1705/tugasakhir",
    screenshots: ["/project/yolowebp.webp","/project/yolowebp.webp","/project/yolowebp.webp"],
    tags: ["Python", "YOLO", "Pytesseract", "OpenCV", "Flask"],
    year: "2024",
  },
  {
    slug: "ppw-platform",
    title: "Personal Profile Website",
    description: "Personal Portofolio Website",
    image: "/project/portofwebp.webp",
    details: `Saya juga membangun personal portfolio website sebagai ruang digital untuk memperkenalkan diri saya sebagai seorang Full Stack Web Developer. Website ini bukan sekadar tempat menampilkan karya, tapi juga cerminan gaya dan filosofi saya dalam membangun sesuatu — clean, fast, dan meaningful.
Dibangun dengan Next.js, Tailwind CSS, dan integrasi beberapa library modern, portofolio ini dirancang agar responsif dan interaktif, sekaligus menampilkan setiap project dengan visual yang engaging.
Melalui website ini, saya ingin menunjukkan perjalanan saya dalam dunia web development — mulai dari eksplorasi teknologi baru, hingga realisasi ide menjadi pengalaman yang bisa dirasakan oleh pengguna.
    `,
    repoUrl: "https://github.com/spaceman1705/my-app",
    deployUrl: "https://my-app-beryl-phi.vercel.app/",
    screenshots: ["/project/portofwebp.webp","/project/portofwebp.webp","/project/portofwebp.webp"],
    tags: ["Python", "YOLO", "Pytesseract", "OpenCV", "Flask"],
    year: "2024",
  },
  {
    slug: "blog-web",
    title: "Blog Website",
    description: "Blog web sederhana yang dibuat sebagai media latihan dan pembelajaran dalam pengembangan web menggunakan Next.js, React, dan Tailwind CSS.",
    image: "/project/blogweb.webp",
    details: `Blog website ini dikembangkan menggunakan Next.js dan React dengan tujuan utama sebagai sarana latihan dan eksplorasi teknologi web modern. Website ini menerapkan konsep komponen, dan pengelolaan state dalam React, serta memanfaatkan fitur Next.js untuk meningkatkan performa dan struktur aplikasi. 
    Proyek ini menjadi bagian dari pengembangan keterampilan pribadi dalam membangun aplikasi web yang terstruktur, mudah dipelihara, dan siap dikembangkan lebih lanjut.
    `,
    repoUrl: "https://github.com/spaceman1705/my-app-blog",
    deployUrl: "https://my-app-blog-ten.vercel.app/",
    screenshots: ["/project/blogweb.webp","/project/blogweb.webp","/project/blogweb.webp"],
    tags: ["Python", "YOLO", "Pytesseract", "OpenCV", "Flask"],
    year: "2024",
  },
  {
    slug: "eventm-web",
    title: "Event Management Platform",
    description: "Event management platform yang dikembangkan secara kolaboratif oleh dua orang sebagai proyek pembelajaran full-stack web development. Aplikasi ini menyediakan fitur pembuatan event, transaksi tiket, referral system, dashboard organizer, dan sistem review menggunakan Next.js dan React.",
    image: "/project/ticketeventweb.webp",
    details: `Project ini merupakan Minimum Viable Product (MVP) dari sebuah sistem manajemen event berbasis web. Aplikasi ini dirancang untuk menghubungkan event organizer dan peserta dalam satu platform terintegrasi.
    Sistem menyediakan fitur pencarian dan penjelajahan event, pembuatan event oleh organizer, transaksi pembelian tiket, sistem referral, dashboard manajemen event, serta sistem ulasan dan rating setelah event berlangsung.
    Pengembangan dilakukan secara kolaboratif oleh dua developer (saya dan Mas Rangga), dengan pembagian tugas pada pengembangan frontend, backend, database, dan integrasi fitur. Project ini digunakan sebagai sarana latihan dalam membangun aplikasi skala menengah dengan arsitektur terstruktur, autentikasi berbasis role, transaksi data, dan pengelolaan state yang kompleks.
    Event Management Platform ini menyediakan fitur pencarian dan penjelajahan event yang responsif dengan dukungan filter kategori, lokasi, serta search bar dengan debounce. Event organizer dapat membuat, mengelola, dan mempromosikan event, termasuk pengaturan harga (gratis atau berbayar), kuota kursi, jenis tiket, serta voucher promo dengan batas waktu tertentu. 
    Pengguna dapat melakukan transaksi pembelian tiket dengan sistem status yang terstruktur, upload bukti pembayaran dengan batas waktu, serta mekanisme pembatalan otomatis dan rollback poin, voucher, dan kursi event. Platform ini juga mendukung sistem poin dan referral, di mana pengguna baru mendapatkan kupon diskon dan referrer memperoleh poin dengan masa berlaku tertentu. 
    Selain itu, tersedia fitur review dan rating yang hanya dapat diberikan setelah event dihadiri, dashboard khusus organizer untuk mengelola event, transaksi, statistik dalam bentuk visualisasi data, daftar peserta, serta sistem autentikasi berbasis role dengan protected routes dan notifikasi email terkait status transaksi.
    `,
    repoUrl: "https://github.com/spaceman1705/mini-project-web",
    deployUrl: "https://mini-project-web-fawn.vercel.app/",
    screenshots: ["/project/ticketeventweb.webp","/project/ticketeventweb.webp"],
    tags: ["Python", "YOLO", "Pytesseract", "OpenCV", "Flask"],
    year: "2024",
  },
  {
    slug: "groceri-web",
    title: "Online Grocery Web App",
    description: "Online Grocery Web App adalah aplikasi e-commerce berbasis lokasi yang dikembangkan oleh tiga orang developer. Saya bertanggung jawab pada Feature 3 yang mencakup shopping cart, checkout process, upload bukti pembayaran, order tracking, dan manajemen status pesanan.",
    image: "/project/groceria.webp",
    details: `
    Project ini masih dalam proses pengerjaan. Project ini dikembangkan sebagai simulasi aplikasi e-commerce skala menengah dengan fokus pada pengelolaan multi-toko, transaksi, dan distribusi pesanan berbasis lokasi. Aplikasi ini memiliki dua jenis pengguna, yaitu user sebagai pembeli dan admin sebagai pengelola toko, yang terdiri dari super admin dan store admin.
    Sistem dirancang untuk menampilkan produk berdasarkan toko terdekat dari lokasi pengguna, mengelola stok per cabang toko, serta mendukung berbagai skema diskon dan promo. Pesanan yang dibuat oleh user akan diproses oleh admin pada toko atau gudang terdekat sesuai alamat pengiriman.
    Project ini dikerjakan secara kolaboratif oleh tiga orang developer dengan pembagian fitur yang jelas. Saya bertanggung jawab mengerjakan Feature 3, yang berfokus pada proses transaksi pengguna, mulai dari shopping cart, checkout, hingga pelacakan dan manajemen status pesanan. Project ini menjadi sarana latihan dalam membangun aplikasi e-commerce yang terstruktur, aman, dan siap dikembangkan lebih lanjut.
    Pada Feature 3, saya mengembangkan alur transaksi pengguna yang mencakup proses penambahan produk ke dalam shopping cart dengan validasi stok dan status akun, pembaruan jumlah produk, serta penghapusan item dari cart. Saya juga mengimplementasikan proses checkout yang mencakup pembuatan pesanan baru berdasarkan alamat pengiriman, penentuan toko terdekat, pengecekan ketersediaan stok, serta perhitungan total pembayaran.
    Selain itu, fitur upload bukti pembayaran dengan batas waktu tertentu diterapkan untuk transaksi manual, termasuk validasi file dan pembatalan otomatis jika pembayaran tidak dilakukan sesuai tenggat waktu. Sistem order tracking memungkinkan user untuk melihat daftar pesanan, melakukan pembatalan sebelum pembayaran, serta mengonfirmasi penerimaan pesanan. Dari sisi admin, tersedia fitur manajemen pesanan seperti konfirmasi pembayaran, pengiriman pesanan, pembatalan pesanan, dan pengembalian stok yang disertai pencatatan riwayat perubahan stok.
    `,
    repoUrl: "https://github.com/spaceman1705/final-project-ecommerce.git",
    deployUrl: "https://final-project-drab-ten.vercel.app/",
    screenshots: ["/project/groceria.webp","/project/groceria.webp","/project/groceria.webp"],
    tags: ["Python", "YOLO", "Pytesseract", "OpenCV", "Flask"],
    year: "2024",
  },
];
