import React from "react";

const Rifqi = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-2xl bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <div className="flex justify-center">
            <img
              className="w-32 h-32 rounded-full object-cover"
              src="https://via.placeholder.com/150"
              alt="Foto Profil"
            />
          </div>
          <h1 className="text-2xl font-bold text-center mt-4">Regina Sekar Melati
          </h1>
          <p className="text-center text-gray-600">Universitas Brawijaya | Teknologi Informasi</p>
          <p className="text-center text-gray-600">Domisili: Malang</p>
          <p className="mt-4 text-gray-700 text-justify">
            Saya adalah mahasiswa Teknologi informasi Universitas Brawijaya yang memiliki minat besar dalam pengembangan web. 
            Saya percaya bahwa teknologi dapat memberikan solusi untuk berbagai permasalahan di masyarakat. 
            Selama masa studi, saya aktif dalam berbagai proyek pengembangan aplikasi berbasis web dan mobile. 
            Saya juga senang berkolaborasi dalam tim dan belajar hal-hal baru. 
            Dengan semangat yang tinggi, saya berharap dapat berkontribusi dalam dunia teknologi, 
            terutama dalam bidang front-end development dan user experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rifqi;