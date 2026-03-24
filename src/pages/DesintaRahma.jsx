import React from 'react'

function DesintaRahma() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full overflow-hidden">
        
        {/* Header / Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-32"></div>

        {/* Profile Section */}
        <div className="px-8 pb-8">
          
          {/* Avatar */}
          <div className="flex justify-between items-end -mt-12 mb-4">
            <div className="w-24 h-24 rounded-full bg-indigo-200 border-4 border-white flex items-center justify-center shadow-md">
              <span className="text-4xl">👩‍💻</span>
            </div>
          </div>

          {/* Name & Info */}
          <h1 className="text-2xl font-bold text-gray-800">Desinta Rahma</h1>
          <p className="text-indigo-600 font-medium mt-1">D3 Teknologi Informasi</p>

          {/* Detail Info */}
          <div className="flex flex-wrap gap-3 mt-3">
            <span className="flex items-center gap-1 text-sm text-gray-500">
              🎓 Kelas T2C
            </span>
            <span className="flex items-center gap-1 text-sm text-gray-500">
              📍 Jawa Timur
            </span>
          </div>

          {/* Divider */}
          <hr className="my-5 border-gray-200" />

          {/* About */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Tentang Saya</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              Halo! Perkenalkan, saya Desinta Rahma, mahasiswi D3 Teknologi Informasi kelas T2C 
              yang berdomisili di Jawa Timur. Saya adalah pribadi yang antusias dalam dunia teknologi, 
              khususnya di bidang pengembangan web dan pemrograman. Sejak awal kuliah, saya mulai 
              mengenal berbagai teknologi seperti HTML, CSS, JavaScript, dan kini tengah mendalami 
              ReactJS sebagai framework frontend modern. Bagi saya, belajar teknologi bukan hanya 
              soal menulis kode, tetapi juga soal memecahkan masalah secara kreatif dan efisien. 
              Saya percaya bahwa kolaborasi dan kerja tim adalah kunci keberhasilan dalam setiap 
              proyek, dan saya selalu berusaha memberikan kontribusi terbaik dalam tim. Di luar 
              akademik, saya senang mengeksplorasi tren teknologi terbaru, menonton tutorial 
              coding, dan berlatih membuat proyek kecil untuk mengasah kemampuan. Saya berharap 
              bisa terus berkembang dan suatu hari berkontribusi nyata di industri teknologi Indonesia.
            </p>
          </div>

          {/* Skills */}
          <div className="mt-5">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Tailwind CSS', 'GitHub'].map((skill) => (
                <span key={skill} className="bg-indigo-100 text-indigo-700 text-xs font-medium px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default DesintaRahma