import Header from '../src/components/header/index';
import Footer from '../src/components/footer/index';
import axios from 'axios';

export default function Home(props) {
  console.warn('props', props);
  return (
    <div>
      <Header />
      <main>
        <h1>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>
        <p className='text-green-500'>Hello</p>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer`
  );

  return {
    props: {
      data: data || {},
    },

    revalidate: 1,
  };
}
