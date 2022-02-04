import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../app/components/common/Layout';

const Place = () => {

  const { query } = useRouter();

  return (
    <div>
      <Layout>{query.slug}</Layout>
    </div>
  );
};

export default Place;
