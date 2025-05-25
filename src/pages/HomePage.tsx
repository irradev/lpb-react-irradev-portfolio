import React from 'react';
import { Banner } from '../components/Banner';
import { Skills } from '../components/Skills';

const HomePage: React.FC = () => {
  return (
    <>
      <Banner />
      <Skills />
      {/* Other sections like Projects, Contact will be on their own pages */}
    </>
  );
};

export default HomePage;
