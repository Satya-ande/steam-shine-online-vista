
import React from 'react';
import SatyaNavigation from '@/components/SatyaNavigation';
import SatyaHero from '@/components/SatyaHero';
import SatyaServices from '@/components/SatyaServices';
import SatyaBlogSection from '@/components/SatyaBlogSection';
import SatyaAbout from '@/components/SatyaAbout';
import SatyaContact from '@/components/SatyaContact';
import SatyaFooter from '@/components/SatyaFooter';

const Index = () => {
  return (
    <div className="min-h-screen">
      <SatyaNavigation />
      <SatyaHero />
      <SatyaServices />
      <SatyaBlogSection />
      <SatyaAbout />
      <SatyaContact />
      <SatyaFooter />
    </div>
  );
};

export default Index;
