import React, { useState } from 'react';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('utama');

  const sidebarItems = [
    { id: 'utama', label: 'Utama' },
    { id: 'dashboard', label: 'Dashboard Pentaksiran' },
    { id: 'pengurusan', label: 'Pengurusan' },
    { id: 'laporan', label: 'Laporan' },
    { id: 'analisis', label: 'Analisis' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'utama':
        return (
          <div style={{ padding: '1rem' }}>
            <div style={{ marginBottom: '1rem', border: '1px solid #ccc', borderRadius: '4px', padding: '1rem' }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>PENGUMUMAN</h2>
              <p>Tiada maklumat untuk dipaparkan</p>
            </div>
            <div style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '1rem' }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>DOKUMEN</h2>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '1px solid #ccc' }}>BIL.</th>
                    <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '1px solid #ccc' }}>NAMA</th>
                    <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '1px solid #ccc' }}>FAIL</th>
                    <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '1px solid #ccc' }}>PAUTAN</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Add your table rows here */}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'pengurusan':
        return (
          <div style={{ padding: '1rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Sistem Pengurusan Pentaksiran Bersepadu</h2>
            <div style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '1rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Senarai Pengurusan Pentaksiran: SEGAK</h3>
              <div style={{ marginBottom: '1rem' }}>
                <input style={{ marginRight: '0.5rem', padding: '0.25rem' }} placeholder="JPN" />
                <input style={{ marginRight: '0.5rem', padding: '0.25rem' }} placeholder="PPD" />
                <button style={{ padding: '0.25rem 0.5rem', backgroundColor: '#4299e1', color: 'white', border: 'none', borderRadius: '4px' }}>Cari</button>
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '1px solid #ccc' }}>BIL.</th>
                    <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '1px solid #ccc' }}>JPN</th>
                    <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '1px solid #ccc' }}>PPD</th>
                    <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '1px solid #ccc' }}>KOD</th>
                    <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '1px solid #ccc' }}>SEKOLAH</th>
                    <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '1px solid #ccc' }}>SESI PERSEKOLAHAN</th>
                    <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '1px solid #ccc' }}>AKTIVITI</th>
                    <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '1px solid #ccc' }}>TAHUN / TINGKATAN</th>
                    <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '1px solid #ccc' }}>KELAS</th>
                    <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '1px solid #ccc' }}>STATUS</th>
                    <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '1px solid #ccc' }}>TINDAKAN</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Add your table rows here */}
                </tbody>
              </table>
            </div>
          </div>
        );
      default:
        return <div style={{ padding: '1rem' }}>Content for {activeTab} goes here</div>;
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '250px', backgroundColor: '#2c5282', color: 'white' }}>
        <div style={{ padding: '1rem' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>SPPB</h1>
        </div>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {sidebarItems.map((item) => (
              <li key={item.id}>
                <button 
                  style={{ 
                    width: '100%', 
                    textAlign: 'left', 
                    padding: '0.5rem 1rem', 
                    backgroundColor: activeTab === item.id ? '#2a4365' : 'transparent',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer'
                  }}
                  onClick={() => setActiveTab(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div style={{ flex: 1, overflow: 'auto' }}>
        <header style={{ backgroundColor: 'white', padding: '1rem', borderBottom: '1px solid #e2e8f0' }}>
          <h2 style={{ fontSize: '1.25rem' }}>MOHD HASRUL BIN RUSLI ()</h2>
        </header>
        <main>
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;