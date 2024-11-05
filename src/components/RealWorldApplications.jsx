import React from 'react';

const RealWorldApplications = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#08101d', color: '#fff', marginBottom: '1px' }}>
      <h2 style={{ borderBottom: '2px solid #007BFF', paddingBottom: '10px' }}>Real Dünyada Tətbiqlər</h2>
      <p>AI-nin real dünya sahələrində necə istifadə olunduğunu öyrənin:</p>
      <ul>
        <li>
          <strong>Maliyyə Sektoru:</strong> 
          Süni intellekt, maliyyə bazarlarında analiz, risk qiymətləndirməsi və fırıldaqçılığın aşkar edilməsi üçün istifadə olunur. AI modelləri, sürətli alqoritmik ticarət imkanlarını təmin edir və maliyyə qərarlarını optimallaşdırır.
          <ul>
            <li>Həyasiz risk qiymətləndirmə modelləri ilə daha etibarlı kreditlər.</li>
            <li><a href="https://www.investopedia.com/articles/trading/11/machine-learning-algorithmic-trading.asp">Alqoritmik Ticarət və AI</a> - AI alqoritmlərinin maliyyə sektorunda istifadəsi.</li>
          </ul>
        </li>
        <li>
          <strong>Səhiyyə Sahəsi:</strong> 
          Süni intellekt, tibbi görüntüləmə və xəstəliklərin diaqnozu üçün geniş istifadə olunur. AI, həmçinin fərdi müalicə planlarının hazırlanması və tibbi analizlərdə kömək edir.
          <ul>
            <li>Rentgen, MR və CT görüntülərinin avtomatik analizi.</li>
            <li><a href="https://www.healthit.gov/topic/health-it-and-health-information-exchange-basics/artificial-intelligence-healthcare">AI ilə Səhiyyə</a> - Tibbi müayinələrdə AI tətbiqləri.</li>
          </ul>
        </li>
        <li>
          <strong>Təhsil:</strong> 
          Təhsil sahəsində AI fərdi öyrənmə sistemləri yaratmağa imkan verir. Şagirdlərin ehtiyaclarına uyğun proqram təminatı təklif edir və təhsil materiallarını daha əlçatan edir.
          <ul>
            <li>AI əsaslı məsləhətçilər və fərdi dərsliklər.</li>
            <li><a href="https://www.edsurge.com/news/2022-01-13-5-ways-artificial-intelligence-is-transforming-education">AI ilə Təhsildə İnnovasiyalar</a> - Təhsildə AI-dən istifadə yolları.</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default RealWorldApplications;
