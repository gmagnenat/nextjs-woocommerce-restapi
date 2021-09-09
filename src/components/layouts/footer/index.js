/**
 * Internal Dependencies.
 */
import { sanitize } from '../../../utils/miscelleanous';
import { getIconComponentByName } from '../../../utils/icons-map';

/**
 * External Dependencies.
 */
import { isArray, isEmpty } from 'lodash';
import Link from 'next/link';

export default function Footer({ footer }) {
  const {
    copyrightText,
    footerMenuItems,
    sidebarOne,
    sidebarTwo,
    socialLinks,
  } = footer || {};

  return (
    <>
      <footer className='bg-blue-600 p-6'>
        <div className='container mx-auto'>
          <div className='flex flex-wrap -mx-1 overflow-hidden text-white'>
            {/* Widget One */}
            <div className='my-1 px-1 w-full overflw-hidden sm:w-full lg:w-1/2 xl:w-1/3'>
              <div dangerouslySetInnerHTML={{ __html: sanitize(sidebarOne) }} />
            </div>
            {/* Widget Two */}
            <div className='my-1 px-1 w-full overflw-hidden sm:w-full lg:w-1/2 xl:w-1/3'>
              <div dangerouslySetInnerHTML={{ __html: sanitize(sidebarTwo) }} />
            </div>
            {/* Footer Menus */}
            <div className='my-1 px-1 w-full overflw-hidden sm:w-full lg:w-1/2 xl:w-1/3'>
              {!isEmpty(footerMenuItems) && isArray(footerMenuItems) ? (
                <ul>
                  {footerMenuItems.map((menuItem) => (
                    <li key={menuItem?.ID}>
                      <Link href={menuItem?.url}>
                        <a>{menuItem?.title}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
          {/* Copyright Text */}
          <div className='w-full md:w-1/2 lg:w-1/4 text-white'>
            {copyrightText ? copyrightText : '@ gmagnenat.com 2021'}
          </div>
          <div className='w-full md:w-3/4 flex justify-end'>
            {!isEmpty(socialLinks) && isArray(socialLinks) ? (
              <ul className='flex item-center'>
                {socialLinks.map((socialLink) => (
                  <li key={socialLink?.iconName} className='ml-4'>
                    <a
                      href={socialLink?.iconUrl || '/'}
                      target='_blank'
                      title={socialLink?.iconName}
                      rel='noreferrer'
                    >
                      {getIconComponentByName(socialLink?.iconName)}
                      <span className='sr-only'>{socialLink?.iconName}</span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </footer>
    </>
  );
}
