"use client";
import React from 'react';

const Starfield = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden">
      {/* Yıldızların ana noktası */}
      <div className="starfield-stars"></div>
      
      {/* Derinlik katmak için üzerine hafif bir yeşil nebula bulanıklığı */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/5 opacity-50" />
    </div>
  );
};

export default Starfield;