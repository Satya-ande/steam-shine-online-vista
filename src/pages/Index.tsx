
import React from 'react';
import SatyaNavigation from '@/components/SatyaNavigation';
import SatyaHero from '@/components/SatyaHero';
import SatyaServices from '@/components/SatyaServices';
import SatyaContact from '@/components/SatyaContact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <SatyaNavigation />
      <SatyaHero />
      <SatyaServices />
      <SatyaContact />
    </div>
  );
};

export default Index;
