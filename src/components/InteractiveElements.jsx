import React from 'react';

const InteractiveElements = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#08101d', color: '#fff', marginBottom: '1px' }}>
      <h2 style={{ borderBottom: '2px solid #007BFF', paddingBottom: '10px' }}>İnteraktiv Elementlər</h2>
      <p>Süni intellekt haqqında biliklərinizi təkmilləşdirmək üçün müxtəlif interaktiv resurslardan istifadə edə bilərsiniz:</p>
      <ul>
        <li>
          <strong>AI Dungeon:</strong>
          <p>
            AI Dungeon, OpenAI-nin GPT-3 modelindən istifadə edərək AI ilə interaktiv hekayələr yaratmağa imkan verən bir oyundur. İstifadəçilər öz hekayə xəttlərini yaradır və süni intellekt cavabları təsəvvürə uyğunlaşdırır.
          </p>
          <ul>
            <li><a href="https://play.aidungeon.io/">AI Dungeon</a> - Hekayə xəttinizi AI ilə yazmaq və interaktiv təcrübə yaşamaq üçün.</li>
          </ul>
        </li>
        <li>
          <strong>Quick, Draw!:</strong>
          <p>
            Google tərəfindən hazırlanmış bu interaktiv oyun istifadəçilərə şəkil çəkmə vasitəsilə AI-nin görüntü tanıma qabiliyyətini sınaqdan keçirməyə imkan verir. AI, çəkilən şəkili tanımağa çalışır.
          </p>
          <ul>
            <li><a href="https://quickdraw.withgoogle.com/">Quick, Draw!</a> - AI-nin təsvirləri necə tanıdığını görmək üçün interaktiv təcrübə.</li>
          </ul>
        </li>
        <li>
          <strong>TensorFlow Playground:</strong>
          <p>
            TensorFlow Playground, neyron şəbəkələrinin necə işlədiyini vizual olaraq öyrənmək üçün yaradılmış interaktiv simulyatordur. Burada qatları, neyronları və hiperparametrləri dəyişdirərək modelin davranışını müşahidə edə bilərsiniz.
          </p>
          <ul>
            <li><a href="https://playground.tensorflow.org/">TensorFlow Playground</a> - Neyron şəbəkələrini sınaqdan keçirmək üçün.</li>
          </ul>
        </li>
        <li>
          <strong>AI Experiments:</strong>
          <p>
            Google-un AI Experiments layihəsi ilə süni intellekt əsaslı müxtəlif interaktiv layihələrdə iştirak edə bilərsiniz. Burada maşın öyrənmə və dərin öyrənmə alqoritmləri ilə sınaq keçirmək üçün təcrübələr mövcuddur.
          </p>
          <ul>
            <li><a href="https://experiments.withgoogle.com/collection/ai">AI Experiments</a> - Google-un süni intellekt ilə bağlı layihələri.</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default InteractiveElements;
