import { sanitize } from '../../../utils/miscelleanous';

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
        <div className='flex flex-wrap -mx-1 overflow-hidden text-white'>
          <div className='my-1 px-1 w-full overflw-hidden sm:w-full lg:w-1/2 xl:w-1/3'>
            <div
              dangerouslySetInnerHTML={{ __html: sanitize(sidebarOne) }}
            ></div>
          </div>
        </div>
        <div className='flex flex-wrap -mx-1 overflow-hidden text-white'>
          <div className='my-1 px-1 w-full overflw-hidden sm:w-full lg:w-1/2 xl:w-1/3'>
            <div
              dangerouslySetInnerHTML={{ __html: sanitize(sidebarTwo) }}
            ></div>
          </div>
        </div>
      </footer>
    </>
  );
}
