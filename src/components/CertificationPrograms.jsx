import React from 'react';

const CertificationPrograms = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#08101d', color: '#fff', marginBottom: '1px' }}>
      <h2 style={{ borderBottom: '2px solid #007BFF', paddingBottom: '10px' }}>Sertifikat Proqramları</h2>
      <p>AI sahəsində tanınmış sertifikat proqramları haqqında məlumat:</p>
      <ul>
        <li>
          <strong>Deep Learning Specialization - Coursera (Andrew Ng):</strong>
          <p>
            Bu kurs, süni intellekt və dərin öyrənmə ilə bağlı fundamental biliklər təqdim edir. Neural Networks və Convolutional Neural Networks kimi mövzular əhatə olunur. Kurs Coursera platformasında Andrew Ng tərəfindən tədris edilir.
          </p>
          <ul>
            <li><a href="https://www.coursera.org/specializations/deep-learning">Coursera: Deep Learning Specialization</a> - AI sahəsində peşəkar səviyyədə bilik əldə etmək üçün məşhur kurs.</li>
          </ul>
        </li>
        <li>
          <strong>Artificial Intelligence Professional Certificate - edX (IBM):</strong>
          <p>
            IBM tərəfindən təqdim olunan bu kurs süni intellektin əsaslarını əhatə edir. Kursun sonunda iştirakçılar IBM-dən rəsmi sertifikat əldə edir və AI tətbiqləri yaratmaq üzrə təcrübə qazanırlar.
          </p>
          <ul>
            <li><a href="https://www.edx.org/professional-certificate/ibm-artificial-intelligence">edX: AI Professional Certificate</a> - IBM-dən süni intellekt üzrə peşəkar sertifikat proqramı.</li>
          </ul>
        </li>
        <li>
          <strong>AI For Everyone - Coursera (Andrew Ng):</strong>
          <p>
            Süni intellektin əsaslarını öyrənmək istəyən hər kəs üçün nəzərdə tutulmuş bu kurs AI-nin təsirini və tətbiq sahələrini izah edir. Proqramlaşdırma biliyi tələb etməyən bu kurs AI sahəsində giriş səviyyəsində bilik verir.
          </p>
          <ul>
            <li><a href="https://www.coursera.org/learn/ai-for-everyone">Coursera: AI For Everyone</a> - Süni intellektin əsas anlayışlarını öyrənmək üçün kurs.</li>
          </ul>
        </li>
        <li>
          <strong>Microsoft Certified: Azure AI Fundamentals:</strong>
          <p>
            Microsoft tərəfindən təqdim olunan bu proqram, Azure platformasında AI əsaslarını öyrənmək üçün nəzərdə tutulub. Bulud əsaslı AI texnologiyaları ilə işləmək və Azure platformasından istifadə etmək bacarıqlarını inkişaf etdirir.
          </p>
          <ul>
            <li><a href="https://learn.microsoft.com/en-us/certifications/azure-ai-fundamentals/">Microsoft Certified: Azure AI Fundamentals</a> - Microsoft-un Azure platforması üzrə AI sertifikat proqramı.</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default CertificationPrograms;
