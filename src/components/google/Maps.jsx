import React from 'react';

const OpenStreetMap = () => {
  // Substitua LATITUDE e LONGITUDE pelos valores desejados
  const latitude = -23.56434784343609;
  const longitude = -46.65292004525251;

  return (
    <div>
      <iframe
        width="600"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        src={`https://www.openstreetmap.org/export/embed.html?bbox=${longitude},${latitude},${longitude},${latitude}&layer=mapnik`}
        allowFullScreen
        title="OpenStreetMap"
      ></iframe>
    </div>
  );
};

export default OpenStreetMap;