import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import useAuth from '../hook/useAuth';
import { Navigate } from 'react-router-dom';

const meta = {
  title: 'all\u002Dvisitors',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function ClearedVisitors() {
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
        <nav className='flex xl:hidden items-center justify-between py-3.5 px-7 bg-black'>
          <div className='w-full xl:w-auto px-2 xl:mr-10'>
            <div className='flex items-center justify-between'>
              <a className='inline-flex items-center h-7' href='#'>
                <img src='dashy-assets/logos/dashy-circle2-logo.svg' alt='' />
              </a>
              <div className='xl:hidden'>
                <button className='navbar-burger text-gray-400 hover:text-gray-300 focus:outline-none'>
                  <svg
                    width={20}
                    height={12}
                    viewBox='0 0 20 12'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M1 2H19C19.2652 2 19.5196 1.89464 19.7071 1.70711C19.8946 1.51957 20 1.26522 20 1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2ZM19 10H1C0.734784 10 0.48043 10.1054 0.292893 10.2929C0.105357 10.4804 0 10.7348 0 11C0 11.2652 0.105357 11.5196 0.292893 11.7071C0.48043 11.8946 0.734784 12 1 12H19C19.2652 12 19.5196 11.8946 19.7071 11.7071C19.8946 11.5196 20 11.2652 20 11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10ZM19 5H1C0.734784 5 0.48043 5.10536 0.292893 5.29289C0.105357 5.48043 0 5.73478 0 6C0 6.26522 0.105357 6.51957 0.292893 6.70711C0.48043 6.89464 0.734784 7 1 7H19C19.2652 7 19.5196 6.89464 19.7071 6.70711C19.8946 6.51957 20 6.26522 20 6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5Z'
                      fill='currentColor'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
        <div className='navbar-menu relative z-50 hidden xl:flex xl:flex-col'>
          <div className='navbar-backdrop fixed xl:hidden inset-0 bg-gray-800 opacity-10' />
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
                    href='allvisitors'
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
                    href='#'
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
          </div>
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
              <div className='container mx-auto'>
                <section className='py-4 overflow-hidden'>
                  <div className='container px-4 mx-auto'>
                    <div className='pt-5 px-5 pb-6 bg-white border rounded-xl'>
                      <h3 className='mb-7 text-lg font-semibold'>
                        Add All Cleared Visitors
                      </h3>
                      <div className='flex flex-wrap -m-3'>
                        <div className='w-full p-3'>
                          <div className='flex flex-wrap items-center justify-between -m-2'>
                            <div className='w-auto p-2'>
                              <div className='flex flex-wrap items-center -m-1.5'>
                                <div className='w-auto p-1.5'>
                                  <img
                                    className='h-12'
                                    src='dashy-assets/images/avatar37.png'
                                  />
                                </div>
                                <div className='w-auto p-1.5'>
                                  <h3 className='font-heading mb-1 font-semibold'>
                                    Vega-Lite
                                  </h3>
                                  <p className='text-xs text-neutral-500'>
                                    Build visualizations
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className='w-auto p-2'>
                              <a
                                className='inline-flex flex-wrap items-center px-6 py-2.5 text-sm font-medium text-neutral-50 font-medium bg-gradient-purple-left hover:bg-gradient-purple-left-dark rounded-lg transition duration-300'
                                href='#'
                              >
                                Add
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className='w-full p-3'>
                          <div className='flex flex-wrap items-center justify-between -m-2'>
                            <div className='w-auto p-2'>
                              <div className='flex flex-wrap items-center -m-1.5'>
                                <div className='w-auto p-1.5'>
                                  <img
                                    className='h-12'
                                    src='dashy-assets/images/avatar38.png'
                                  />
                                </div>
                                <div className='w-auto p-1.5'>
                                  <h3 className='font-heading mb-1 font-semibold'>
                                    Pivot table
                                  </h3>
                                  <p className='text-xs text-neutral-500'>
                                    Summarize records
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className='w-auto p-2'>
                              <a
                                className='inline-flex flex-wrap items-center px-6 py-2.5 text-sm font-medium border hover:border-neutral-200 rounded-lg'
                                href='#'
                              >
                                Add
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className='w-full p-3'>
                          <div className='flex flex-wrap items-center justify-between -m-2'>
                            <div className='w-auto p-2'>
                              <div className='flex flex-wrap items-center -m-1.5'>
                                <div className='w-auto p-1.5'>
                                  <img
                                    className='h-12'
                                    src='dashy-assets/images/avatar39.png'
                                  />
                                </div>
                                <div className='w-auto p-1.5'>
                                  <h3 className='font-heading mb-1 font-semibold'>
                                    CSV import
                                  </h3>
                                  <p className='text-xs text-neutral-500'>
                                    Import CSV files{' '}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className='w-auto p-2'>
                              <a
                                className='inline-flex flex-wrap items-center px-6 py-2.5 text-sm font-medium border hover:border-neutral-200 rounded-lg'
                                href='#'
                              >
                                Add
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className='w-full p-3'>
                          <div className='flex flex-wrap items-center justify-between -m-2'>
                            <div className='w-auto p-2'>
                              <div className='flex flex-wrap items-center -m-1.5'>
                                <div className='w-auto p-1.5'>
                                  <img
                                    className='h-12'
                                    src='dashy-assets/images/avatar37.png'
                                  />
                                </div>
                                <div className='w-auto p-1.5'>
                                  <h3 className='font-heading mb-1 font-semibold'>
                                    Org chart
                                  </h3>
                                  <p className='text-xs text-neutral-500'>
                                    Visualize hierarchical
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className='w-auto p-2'>
                              <a
                                className='inline-flex flex-wrap items-center px-6 py-2.5 text-sm font-medium border hover:border-neutral-200 rounded-lg'
                                href='#'
                              >
                                Add
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className='container mx-auto'></div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
