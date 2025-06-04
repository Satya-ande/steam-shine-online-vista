
import React from 'react';
import ThrishaNavigation from '@/components/ThrishaNavigation';
import ThrishaHero from '@/components/ThrishaHero';
import ThrishaServices from '@/components/ThrishaServices';
import ThrishaContact from '@/components/ThrishaContact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <ThrishaNavigation />
      <ThrishaHero />
      <ThrishaServices />
      <ThrishaContact />
    </div>
  );
};

export default Index;
