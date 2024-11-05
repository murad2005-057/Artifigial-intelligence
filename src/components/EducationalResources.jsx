import React from 'react';

const EducationalResources = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#08101d', color: '#fff',marginBottom: '1px' }}>
      <h2 style={{ borderBottom: '2px solid #007BFF', paddingBottom: '10px' }}>Təhsil Materialları</h2>
      <p>Süni intellektin əsasları haqqında faydalı mənbələr:</p>
      <ul>
        <li>
          <strong>Süni İntellektin Tarixi:</strong> 
          1956-cı ildə ilk dəfə "AI" termininin John McCarthy tərəfindən işlədilməsi ilə başladı. AI tədqiqatları 1980-ci illərdə daha da sürətləndi və maşın öyrənmə texnikalarının inkişafı ilə daha geniş yayıldı.
        </li>
        <li>
          <strong>Maşın Öyrənmə:</strong> 
          Bu, AI-nin alt sahəsidir və maşınların verilənlərdən nümunələri öyrənib nəticə çıxarmasına imkan verir. Dərin öyrənmə isə, çox qatlı neyron şəbəkələrinin istifadəsi ilə daha kompleks modellər qurmağa imkan tanıyır.
        </li>
        <li>
          <strong>AI üçün Mətn Dərslikləri:</strong> 
          <ul>
            <li><a href="https://www.deeplearningbook.org/">Deep Learning by Ian Goodfellow</a> - Bu kitab, dərin öyrənmə sahəsində əhəmiyyətli məlumatları əhatə edir.</li>
            <li><a href="https://www.springer.com/gp/book/9783030343918">Artificial Intelligence: A Guide for Thinking Humans</a> - AI-nin əsas anlayışlarını sadə dildə izah edir.</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default EducationalResources;
