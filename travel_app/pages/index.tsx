import { GetServerSideProps, NextPage } from 'next';

import { IPlace } from '../app/types/place';

import Layout from '../app/components/common/Layout';

interface IHome {
  places: IPlace[]
}

const Home: NextPage<IHome> = ({ places }) => {
  return (
    <Layout>
      {
        places.map((place) => (
          place.location
        ))
      }
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {

  let result = await fetch('http://localhost:3000/api/places');
  const places = await result.json();

  return {
    props: {
      places,
    }
  }
};

export default Home;
