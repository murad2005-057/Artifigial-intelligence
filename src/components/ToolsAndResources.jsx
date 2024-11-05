import React from 'react';

const ToolsAndResources = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#08101d', color: '#fff', marginBottom: '1px' }}>
      <h2 style={{ borderBottom: '2px solid #007BFF', paddingBottom: '10px' }}>Alətlər və Resurslar</h2>
      <p>Süni intellekt ilə işləmək üçün məşhur alətlər:</p>
      <ul>
        <li>
          <strong>TensorFlow:</strong> 
          Google tərəfindən hazırlanmış açıq mənbə platforması. Maşın öyrənmə modellərinin hazırlanması və təlimi üçün geniş istifadə edilir. TensorFlow, həmçinin mobil cihazlarda və vebdə işləyə bilən modellər yaratmağa imkan verir.
          <ul>
            <li><a href="https://www.tensorflow.org/tutorials">TensorFlow Dərsləri</a> - Əsas maşın öyrənmə texnikalarını öyrənmək üçün dərslər.</li>
            <li><a href="https://www.tensorflow.org/resources/models">TensorFlow Modelləri</a> - Əvvəlcədən təlim edilmiş modellər kitabxanası.</li>
          </ul>
        </li>
        <li>
          <strong>PyTorch:</strong> 
          Facebook tərəfindən yaradılan PyTorch, dərin öyrənmə modellərinin səmərəli şəkildə hazırlanması üçün istifadə olunur. İstifadəsi sadədir və geniş cəmiyyət tərəfindən dəstəklənir.
          <ul>
            <li><a href="https://pytorch.org/tutorials/">PyTorch Dərsləri</a> - Maşın öyrənmə və dərin öyrənmə üçün ətraflı dərslər.</li>
            <li><a href="https://pytorch.org/hub/">PyTorch Hub</a> - Mövcud modelləri və tətbiqləri öyrənmək üçün mənbə.</li>
          </ul>
        </li>
        <li>
          <strong>Keras:</strong> 
          TensorFlow platforması ilə inteqrasiya edilmiş bir alət. Daha sadə və çevik bir istifadəçi interfeysi ilə dərin öyrənmə modelləri qurmağa imkan verir.
          <ul>
            <li><a href="https://keras.io/getting_started/">Keras Başlanğıc Dərsləri</a> - Keras platforması haqqında əsas məlumatlar.</li>
            <li><a href="https://keras.io/examples/">Keras Nümunələri</a> - Dərin öyrənmə modellərinin istifadəsi üçün nümunələr.</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default ToolsAndResources;
