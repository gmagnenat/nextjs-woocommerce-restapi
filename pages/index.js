import Header from '../src/components/layouts/header';
import Footer from '../src/components/layouts/footer';
import axios from 'axios';

export default function Home({ data }) {
  const { header, footer } = data;
  return (
    <div>
      <Header header={header} />
      <main>
        <h1>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>
        <p className='text-green-500'>Hello</p>
      </main>
      <Footer footer={footer} />
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer`
  );

  return {
    props: data || {},

    revalidate: 1,
  };
}
