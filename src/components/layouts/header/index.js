import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { isEmpty } from 'lodash';
import { Bag, User, Wishlist } from '../../icons';

export default function Header({ header }) {
  const { headerMenuItems, siteDescription, siteLogoUrl, siteTitle, favicon } =
    header || {};

  const [isMenuVisible, setMenuVisibility] = useState(false);

  return (
    <>
      <Head>
        <title>{siteTitle || 'Nextjs Woocommerce'}</title>
        <link rel='icon' href={favicon || '/favicon.ico'} />
      </Head>
      <div className='header'>
        <nav className='bg-white p-4'>
          <div className='flex items-center justify-between flex-wrap container mx-auto'>
            <div className='flex items-center flex-shrink-0 text-black mr-20'>
              <Link href='/'>
                <a>
                  {siteLogoUrl ? (
                    <img
                      className='mr-2'
                      src={siteLogoUrl}
                      alt={`${siteTitle} logo`}
                      width='80'
                      height='80'
                    />
                  ) : (
                    <svg
                      className='fill-current h-8 w-8 mr-2'
                      width='54'
                      height='54'
                      viewBox='0 0 54 54'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z'></path>
                    </svg>
                  )}
                </a>
              </Link>
              <span>
                <Link href='/'>
                  <a className='font-semibold text-xl tracking-tight'>
                    {siteTitle || 'WooNext'}
                    WooNext
                  </a>
                </Link>
                {siteDescription ? <p>{siteDescription}</p> : null}
              </span>
            </div>
            <div className='block lg:hidden'>
              <button
                onClick={() => setMenuVisibility(!isMenuVisible)}
                className='flex items-center px-3 py-2 border rounded text-black border-black hover:text-black hover:border-black'
              >
                <svg
                  className='fill-current h-3 w-3'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <title>Menu</title>
                  <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
                </svg>
              </button>
            </div>
            <div
              className={`${
                isMenuVisible ? 'max-h-full h-full' : 'h-0'
              } w-full overflow-hidden lg:h-full flex-grow lg:flex lg:items-center lg:w-auto`}
            >
              <div className='text-sm font-medium uppercase lg:flex-grow'>
                {!isEmpty(headerMenuItems) && headerMenuItems.length
                  ? headerMenuItems.map((menuItem) => (
                      <Link key={menuItem?.ID} href={menuItem?.url || '/'}>
                        <a
                          className='block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10'
                          dangerouslySetInnerHTML={{ __html: menuItem?.title }}
                        />
                      </Link>
                    ))
                  : null}
              </div>
              <div className='text-sm font-medium'>
                <a
                  href='#responsive-header'
                  className='block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10'
                >
                  <User />
                  Profile
                </a>
                <a
                  href='#responsive-header'
                  className='flex mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10'
                >
                  <Wishlist />
                  Wishlist
                </a>
                <a
                  className='flex mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10'
                  href='/cart/'
                >
                  <Bag />
                  Bag
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
