import React from 'react';
import Layout from '../../components/Layout';
import AboutPartners from '../../components/AboutPartners';
import PartnersSection from '../../components/Partners';
import partnersArray from '../../api/partners.json';

const Partners = () => (
  <Layout>
    <AboutPartners />
    {partnersArray.map((partner) => {
      return (
        <PartnersSection
          key={partner.id}
          name={partner.name}
          logo={partner.logo}
          description={partner.description}
          images={partner.images}
        />
      );
    })}
  </Layout>
);

export default Partners;
