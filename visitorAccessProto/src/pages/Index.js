import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import HorizontalNav from '../components/Header/HorizontalNav';
import useAuth from '../hook/useAuth';
import { Navigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    return <Navigate to={'/login'} />;
  }

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <section className='relative'>
        <HorizontalNav />
        <div className='navbar-menu relative z-50 hidden xl:flex xl:flex-col'>
          <div className='navbar-backdrop fixed xl:hidden inset-0 bg-gray-800 opacity-10' />
          {/* SIDE BAR*/}
          <Sidebar />
          {/* <div className='fixed inset-0 max-w-xss bg-black'>
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
                    <p className='text-sm text-white font-medium'>
                      Add Visitor
                    </p>
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
          </div> */}
        </div>
        <div className='mx-auto xl:ml-xss xl:pl-4'>
          <div className='container mx-auto'>
            <section className='py-4 bg-white overflow-hidden'>
              <div className='container px-4 mx-auto'>
                <h1 className='font-heading mb-1 text-2xl font-semibold'>
                  Receptionist
                </h1>
              </div>
            </section>
            <div className='container mx-auto'>
              <div className='container mx-auto' />
            </div>
            <h2 className='font-heading mb-8 text-4xl font-bold tracking-tight'>
              Are you expecting a visitor today? Please provide your visitor's
              name below
            </h2>
            <div className='container mx-auto'>
              <div className='flex flex-wrap -mx-4 -mb-4 md:mb-0'>
                <div className='w-full md:w-1/2 px-4 mb-4 md:mb-0'>
                  <div className='mb-6'>
                    <label className='block font-heading mb-2.5 text-sm font-semibold'>
                      Visitor's Name
                    </label>
                    <input
                      className='py-2.5 px-3.5 text-sm w-full hover:bg-gray-50 outline-none placeholder-neutral-400 border border-neutral-200 rounded-lg focus-within:border-neutral-600'
                      type='text'
                      placeholder='Write a text'
                    />
                  </div>
                  <div className='mb-6'>
                    <label className='block font-heading mb-2.5 text-sm font-semibold'>
                      To Visit
                    </label>
                    <div className='relative h-full sm:max-w-md'>
                      <select className='appearance-none py-2 pl-3.5 pr-10 text-sm w-full h-full bg-white hover:bg-gray-50 outline-none border border-neutral-200 focus:border-neutral-600 cursor-pointer rounded-lg'>
                        <option value='service'>Option 1</option>
                        <option value='service'>Option 2</option>
                        <option value='service'>Option 3</option>
                        <option value='service'>Option 4</option>
                      </select>
                      <svg
                        className='absolute top-1/2 right-4 transform -translate-y-1/2'
                        width={16}
                        height={22}
                        viewBox='0 0 16 22'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M12.6673 9L8.00065 13.6667L3.33398 9'
                          stroke='#0C1523'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </div>
                  </div>
                  <button
                    className='inline-flex flex-wrap items-center px-5 py-3.5 text-sm text-neutral-50 font-medium bg-gradient-purple-left hover:bg-gradient-purple-left-dark rounded-lg transition duration-300'
                    type='submit'
                  >
                    Submit
                  </button>
                </div>
                <div className='w-full md:w-1/2 px-4 mb-4 md:mb-0'>
                  <div className='mb-6'>
                    <label className='block font-heading mb-2.5 text-sm font-semibold'>
                      Reason For Visiting
                    </label>
                    <textarea
                      className='block px-3.5 pb-3.5 pt-2.5 text-sm w-full sm:max-w-md placeholder-neutral-400 hover:bg-gray-50 outline-none border border-neutral-200 focus:border-neutral-600 rounded-lg'
                      rows={4}
                      placeholder='Write something...'
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
