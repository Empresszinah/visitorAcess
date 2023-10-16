import React from 'react';

const Sidebar = () => {
  return (
    <div>
      <div className='fixed inset-0 max-w-xss bg-black'>
        <div className='flex flex-wrap items-center justify-between px-7 py-6 pb-0'>
          <div className='w-auto'>
            <a className='inline-block' href='#'>
              <img src='dashy-assets/logos/dashy-logo-light.svg' alt='' />
            </a>
          </div>
        </div>
        <div className='flex-1 flex flex-col justify-between py-7 overflow-x-hidden overflow-y-auto'>
          <div className='flex flex-col flex-wrap px-7 mb-8 -m-3'>
            <div className='w-auto p-3'>
              <a
                className='flex flex-wrap items-center justify-between py-2.5 px-3 text-neutral-50 hover:text-neutral-100 bg-neutral-500 rounded-lg'
                href='#'
              >
                <div className='w-auto flex flex-wrap items-center'>
                  <p className='text-sm font-semibold'>Dashboard</p>
                </div>
                <div className='w-auto'>
                  <svg
                    width={12}
                    height={7}
                    viewBox='0 0 12 7'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M10.6668 1L6.00016 5.66667L1.3335 1'
                      stroke='#B8C1CC'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
              </a>
            </div>
            <div className='w-auto p-3'>
              <a
                className='flex flex-wrap items-center px-3 text-neutral-50 hover:text-neutral-100 bg-transparent rounded-lg'
                href='#'
              >
                <img
                  className='mr-3'
                  src='dashy-assets/images/box-dark.svg'
                  alt=''
                />
                <p className='font-medium'>All Visitors</p>
              </a>
            </div>
            <div className='w-auto p-3'>
              <a
                className='flex flex-wrap items-center px-3 text-neutral-50 hover:text-neutral-100 bg-transparent rounded-lg'
                href='clearedvisitors'
              >
                <img
                  className='mr-3'
                  src='dashy-assets/images/folder-open.svg'
                  alt=''
                />
                <p className='font-medium'>Cleared Visitors</p>
              </a>
            </div>
          </div>
          <div className='block px-7'>
            <a className='inline-block mb-10' href='#'>
              <div className='p-6 bg-neutral-500 bg-opacity-20 rounded-lg'>
                <img
                  className='mb-3.5 mx-auto'
                  src='dashy-assets/images/invite-member.svg'
                  alt=''
                />
                <p className='text-sm text-white font-medium'>Add Visitor</p>
              </div>
            </a>
            <div className='flex flex-wrap -m-3'>
              <div className='w-auto p-3'>
                <div className='flex flex-wrap items-center'>
                  <a
                    className='flex flex-wrap items-center text-neutral-50 hover:text-neutral-100 bg-transparent mr-2.5 rounded-lg'
                    href='#'
                  >
                    <img
                      className='mr-3'
                      src='dashy-assets/images/bell.svg'
                      alt=''
                    />
                    <p className='font-medium'>Notifications</p>
                  </a>
                  <p className='flex items-center justify-center font-semibold text-xs text-white w-4 h-4 bg-red-500 rounded-full'>
                    1
                  </p>
                </div>
              </div>
              <div className='w-auto p-3' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
