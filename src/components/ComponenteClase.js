// src/components/ComponenteClase.js

import React from 'react';
import API_BASE_URL from '../config/Config';

function ComponenteClase({ clase, onClick, manejarIdClaseActual }) {
  const { nombre_clase, id_clase, img_clase, boton_color } = clase;

  return (
    <div
      onClick={() => {
        manejarIdClaseActual(id_clase);  // Llamamos a la función para actualizar el estado en el componente padre
        onClick();  // También llamamos a onClick para cambiar la interfaz
      }}
      style={{
        backgroundColor: boton_color,  // Corregido: eliminamos las comillas alrededor de color_clase
        borderRadius: '10px',
        padding: '1rem',
        textAlign: 'center',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
        width: '250px',
        margin: 'auto',
      }}
    >
      <h2 style={{ fontSize: '1.5rem', margin: 0 }}>{nombre_clase}</h2>
      
      {/* Agregar la imagen aquí */}
      {img_clase && (
        <img
          src={`${API_BASE_URL}/${img_clase}`}
          alt={nombre_clase} 
          style={{
            width: '200px',   // Ancho fijo de 200px
            height: '200px',  // Alto fijo de 200px
            objectFit: 'cover',  // Esto asegura que la imagen se recorte para llenar el espacio
            borderRadius: '5px',
            marginTop: '1rem',
          }}
        />
      )}
    </div>
  );
}

export default ComponenteClase;
