import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link, Navigate } from 'react-router-dom';
import useAuth from '../hook/useAuth';

const meta = {
  title: 'all\u002Dvisitors',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function AllVisitors() {
  // const isAuthenticated = useAuth();

  // if (!isAuthenticated) {
  //   return <Navigate to={'/login'} />;
  // }
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
                  <Link
                    className='flex flex-wrap items-center px-3 text-neutral-50 hover:text-neutral-100 bg-transparent rounded-lg'
                    to='/clearedvisitors'
                  >
                    <img
                      className='mr-3'
                      src='dashy-assets/images/folder-open.svg'
                      alt=''
                    />
                    <p className='font-medium'>Cleared Visitors</p>
                  </Link>
                  {/* <a
                    className='flex flex-wrap items-center px-3 text-neutral-50 hover:text-neutral-100 bg-transparent rounded-lg'
                    href=''
                  >
                    <img
                      className='mr-3'
                      src='dashy-assets/images/folder-open.svg'
                      alt=''
                    />
                    <p className='font-medium'>Cleared Visitors</p>
                  </a> */}
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
                    <div className='py-5 bg-neutral-50 border border-neutral-100 rounded-xl'>
                      <div className='px-6'>
                        <h3 className='font-heading pb-8 text-lg text-neutral-600 font-semibold'>
                          Transaction History
                        </h3>
                        <div className='mb-5 w-full overflow-x-auto'>
                          <table className='w-full min-w-max'>
                            <thead>
                              <tr className='text-left'>
                                <th className='pb-3.5 border-b border-neutral-100'>
                                  <a
                                    className='inline-flex items-center text-sm text-gray-500 font-medium uppercase'
                                    href='#'
                                  >
                                    <span className='mr-1.5'>Id</span>
                                    <svg
                                      width={18}
                                      height={18}
                                      viewBox='0 0 18 18'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'
                                    >
                                      <path
                                        fillRule='evenodd'
                                        clipRule='evenodd'
                                        d='M4.7636 6.56365C5.11508 6.21218 5.68492 6.21218 6.0364 6.56365L9 9.52726L11.9636 6.56365C12.3151 6.21218 12.8849 6.21218 13.2364 6.56365C13.5879 6.91512 13.5879 7.48497 13.2364 7.83645L9.6364 11.4364C9.28492 11.7879 8.71508 11.7879 8.3636 11.4364L4.7636 7.83645C4.41213 7.48497 4.41213 6.91512 4.7636 6.56365Z'
                                        fill='#7F8995'
                                      />
                                    </svg>
                                  </a>
                                </th>
                                <th className='pb-3.5 border-b border-neutral-100'>
                                  <a
                                    className='inline-flex items-center text-sm text-gray-500 font-medium'
                                    href='#'
                                  >
                                    <span className='mr-1.5'>Name</span>
                                    <svg
                                      width={18}
                                      height={18}
                                      viewBox='0 0 18 18'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'
                                    >
                                      <path
                                        fillRule='evenodd'
                                        clipRule='evenodd'
                                        d='M4.7636 6.56365C5.11508 6.21218 5.68492 6.21218 6.0364 6.56365L9 9.52726L11.9636 6.56365C12.3151 6.21218 12.8849 6.21218 13.2364 6.56365C13.5879 6.91512 13.5879 7.48497 13.2364 7.83645L9.6364 11.4364C9.28492 11.7879 8.71508 11.7879 8.3636 11.4364L4.7636 7.83645C4.41213 7.48497 4.41213 6.91512 4.7636 6.56365Z'
                                        fill='#7F8995'
                                      />
                                    </svg>
                                  </a>
                                </th>
                                <th className='pb-3.5 border-b border-neutral-100'>
                                  <a
                                    className='inline-flex items-center text-sm text-gray-500 font-medium'
                                    href='#'
                                  >
                                    <span className='mr-1.5'>Price</span>
                                    <svg
                                      width={18}
                                      height={18}
                                      viewBox='0 0 18 18'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'
                                    >
                                      <path
                                        fillRule='evenodd'
                                        clipRule='evenodd'
                                        d='M4.7636 6.56365C5.11508 6.21218 5.68492 6.21218 6.0364 6.56365L9 9.52726L11.9636 6.56365C12.3151 6.21218 12.8849 6.21218 13.2364 6.56365C13.5879 6.91512 13.5879 7.48497 13.2364 7.83645L9.6364 11.4364C9.28492 11.7879 8.71508 11.7879 8.3636 11.4364L4.7636 7.83645C4.41213 7.48497 4.41213 6.91512 4.7636 6.56365Z'
                                        fill='#7F8995'
                                      />
                                    </svg>
                                  </a>
                                </th>
                                <th className='pb-3.5 border-b border-neutral-100'>
                                  <a
                                    className='inline-flex items-center text-sm text-gray-500 font-medium'
                                    href='#'
                                  >
                                    <span className='mr-1.5'>Product</span>
                                    <svg
                                      width={18}
                                      height={18}
                                      viewBox='0 0 18 18'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'
                                    >
                                      <path
                                        fillRule='evenodd'
                                        clipRule='evenodd'
                                        d='M4.7636 6.56365C5.11508 6.21218 5.68492 6.21218 6.0364 6.56365L9 9.52726L11.9636 6.56365C12.3151 6.21218 12.8849 6.21218 13.2364 6.56365C13.5879 6.91512 13.5879 7.48497 13.2364 7.83645L9.6364 11.4364C9.28492 11.7879 8.71508 11.7879 8.3636 11.4364L4.7636 7.83645C4.41213 7.48497 4.41213 6.91512 4.7636 6.56365Z'
                                        fill='#7F8995'
                                      />
                                    </svg>
                                  </a>
                                </th>
                                <th className='pb-3.5 border-b border-neutral-100'>
                                  <a
                                    className='inline-flex items-center text-sm text-gray-500 font-medium'
                                    href='#'
                                  >
                                    <span className='mr-1.5'>
                                      Purchase Time
                                    </span>
                                    <svg
                                      width={18}
                                      height={18}
                                      viewBox='0 0 18 18'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'
                                    >
                                      <path
                                        fillRule='evenodd'
                                        clipRule='evenodd'
                                        d='M4.7636 6.56365C5.11508 6.21218 5.68492 6.21218 6.0364 6.56365L9 9.52726L11.9636 6.56365C12.3151 6.21218 12.8849 6.21218 13.2364 6.56365C13.5879 6.91512 13.5879 7.48497 13.2364 7.83645L9.6364 11.4364C9.28492 11.7879 8.71508 11.7879 8.3636 11.4364L4.7636 7.83645C4.41213 7.48497 4.41213 6.91512 4.7636 6.56365Z'
                                        fill='#7F8995'
                                      />
                                    </svg>
                                  </a>
                                </th>
                                <th className='pb-3.5 border-b border-neutral-100'>
                                  <a
                                    className='inline-flex items-center text-sm text-gray-500 font-medium'
                                    href='#'
                                  >
                                    <span className='mr-1.5'>Status</span>
                                    <svg
                                      width={18}
                                      height={18}
                                      viewBox='0 0 18 18'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'
                                    >
                                      <path
                                        fillRule='evenodd'
                                        clipRule='evenodd'
                                        d='M4.7636 6.56365C5.11508 6.21218 5.68492 6.21218 6.0364 6.56365L9 9.52726L11.9636 6.56365C12.3151 6.21218 12.8849 6.21218 13.2364 6.56365C13.5879 6.91512 13.5879 7.48497 13.2364 7.83645L9.6364 11.4364C9.28492 11.7879 8.71508 11.7879 8.3636 11.4364L4.7636 7.83645C4.41213 7.48497 4.41213 6.91512 4.7636 6.56365Z'
                                        fill='#7F8995'
                                      />
                                    </svg>
                                  </a>
                                </th>
                                <th className='pb-3.5 border-b border-neutral-100' />
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className='py-2.5 pr-4 border-b border-neutral-100'>
                                  <span className='font-medium'>29506</span>
                                </td>
                                <td className='py-2.5 pr-4 border-b border-neutral-100'>
                                  <div className='flex flex-wrap items-center'>
                                    <img
                                      className='mr-3 h-9'
                                      src='dashy-assets/images/avatar5.png'
                                      alt=''
                                    />
                                    <span className='font-semibold'>
                                      Darrell Steward
                                    </span>
                                  </div>
                                </td>
                                <td className='py-2.5 pr-4 border-b border-neutral-100'>
                                  <span className='font-medium'>$17.84</span>
                                </td>
                                <td className='py-2.5 pr-4 border-b border-neutral-100'>
                                  <span className='font-medium'>
                                    Playstation 4 Limited Edition
                                  </span>
                                </td>
                                <td className='py-2.5 pr-4 border-b border-neutral-100'>
                                  <span className='text-neutral-500 font-medium'>
                                    15 May 2020 9:00 pm
                                  </span>
                                </td>
                                <td className='py-2.5 pr-4 border-b border-neutral-100'>
                                  <span className='px-2.5 py-1 text-sm font-medium text-green-500 bg-green-500 bg-opacity-10 rounded-full'>
                                    Confirmed
                                  </span>
                                </td>
                                <td className='py-2.5 border-b border-neutral-100'>
                                  <a
                                    className='inline-flex py-2.5 pr-0'
                                    href='#'
                                  >
                                    <span className='w-1 h-1 bg-neutral-200 rounded-full' />
                                    <span className='mx-0.5 w-1 h-1 bg-neutral-200 rounded-full' />
                                    <span className='w-1 h-1 bg-neutral-200 rounded-full' />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td className='py-2.5 pr-4 border-b border-neutral-100'>
                                  <span className='font-medium'>29506</span>
                                </td>
                                <td className='py-2.5 pr-4 border-b border-neutral-100'>
                                  <div className='flex flex-wrap items-center'>
                                    <img
                                      className='mr-3 h-9'
                                      src='dashy-assets/images/avatar6.png'
                                      alt=''
                                    />
                                    <span className='font-semibold'>
                                      Bessie Cooper
                                    </span>
                                  </div>
                                </td>
                                <td className='py-2.5 pr-4 border-b border-neutral-100'>
                                  <span className='font-medium'>$17.84</span>
                                </td>
                                <td className='py-2.5 pr-4 border-b border-neutral-100'>
                                  <span className='font-medium'>
                                    Gopro Hero 7
                                  </span>
                                </td>
                                <td className='py-2.5 pr-4 border-b border-neutral-100'>
                                  <span className='text-neutral-500 font-medium'>
                                    15 May 2020 8:00 pm
                                  </span>
                                </td>
                                <td className='py-2.5 pr-4 border-b border-neutral-100'>
                                  <span className='px-2.5 py-1 text-sm font-medium text-red-500 bg-red-500 bg-opacity-10 rounded-full'>
                                    Canceled
                                  </span>
                                </td>
                                <td className='py-2.5 border-b border-neutral-100'>
                                  <a
                                    className='inline-flex py-2.5 pr-0'
                                    href='#'
                                  >
                                    <span className='w-1 h-1 bg-neutral-200 rounded-full' />
                                    <span className='mx-0.5 w-1 h-1 bg-neutral-200 rounded-full' />
                                    <span className='w-1 h-1 bg-neutral-200 rounded-full' />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td className='py-2.5 pr-4 border-b border-neutral-100'>
                                  <span className='font-medium'>29506</span>
                                </td>
                                <td className='py-2.5 pr-4 border-b border-neutral-100'>
                                  <div className='flex flex-wrap items-center'>
                                    <img
                                      className='mr-3 h-9'
                                      src='dashy-assets/images/avatar7.png'
                                      alt=''
                                    />
                                    <span className='font-semibold'>
                                      Annette Black
                                    </span>
                                  </div>
                                </td>
                                <td className='py-2.5 pr-4 border-b border-neutral-100'>
                                  <span className='font-medium'>$6.48</span>
                                </td>
                                <td className='py-2.5 pr-4 border-b border-neutral-100'>
                                  <span className='font-medium'>
                                    DJI Mavic Pro 2
                                  </span>
                                </td>
                                <td className='py-2.5 pr-4 border-b border-neutral-100'>
                                  <span className='text-neutral-500 font-medium'>
                                    15 May 2020 7:00 pm
                                  </span>
                                </td>
                                <td className='py-2.5 pr-4 border-b border-neutral-100'>
                                  <span className='px-2.5 py-1 text-sm font-medium text-green-500 bg-green-500 bg-opacity-10 rounded-full'>
                                    Confirmed
                                  </span>
                                </td>
                                <td className='py-2.5 border-b border-neutral-100'>
                                  <a
                                    className='inline-flex py-2.5 pr-0'
                                    href='#'
                                  >
                                    <span className='w-1 h-1 bg-neutral-200 rounded-full' />
                                    <span className='mx-0.5 w-1 h-1 bg-neutral-200 rounded-full' />
                                    <span className='w-1 h-1 bg-neutral-200 rounded-full' />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td className='py-2.5 pr-4 border-b border-neutral-100'>
                                  <span className='font-medium'>29506</span>
                                </td>
                                <td className='py-2.5 pr-4 border-b border-neutral-100'>
                                  <div className='flex flex-wrap items-center pl-12'>
                                    <span className='font-semibold'>
                                      Darlene Robertson
                                    </span>
                                  </div>
                                </td>
                                <td className='py-2.5 pr-4 border-b border-neutral-100'>
                                  <span className='font-medium'>$14.81</span>
                                </td>
                                <td className='py-2.5 pr-4 border-b border-neutral-100'>
                                  <span className='font-medium'>
                                    Brand New Bike
                                  </span>
                                </td>
                                <td className='py-2.5 pr-4 border-b border-neutral-100'>
                                  <span className='text-neutral-500 font-medium'>
                                    15 May 2020 6:00 pm
                                  </span>
                                </td>
                                <td className='py-2.5 pr-4 border-b border-neutral-100'>
                                  <span className='px-2.5 py-1 text-sm font-medium text-green-500 bg-green-500 bg-opacity-10 rounded-full'>
                                    Confirmed
                                  </span>
                                </td>
                                <td className='py-2.5 border-b border-neutral-100'>
                                  <a
                                    className='inline-flex py-2.5 pr-0'
                                    href='#'
                                  >
                                    <span className='w-1 h-1 bg-neutral-200 rounded-full' />
                                    <span className='mx-0.5 w-1 h-1 bg-neutral-200 rounded-full' />
                                    <span className='w-1 h-1 bg-neutral-200 rounded-full' />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td className='py-2.5 pr-4 border-b border-neutral-100'>
                                  <span className='font-medium'>29506</span>
                                </td>
                                <td className='py-2.5 pr-4 border-b border-neutral-100'>
                                  <div className='flex flex-wrap items-center'>
                                    <img
                                      className='mr-3 h-9'
                                      src='dashy-assets/images/avatar8.png'
                                      alt=''
                                    />
                                    <span className='font-semibold'>
                                      Jane Cooper
                                    </span>
                                  </div>
                                </td>
                                <td className='py-2.5 pr-4 border-b border-neutral-100'>
                                  <span className='font-medium'>$8.99</span>
                                </td>
                                <td className='py-2.5 pr-4 border-b border-neutral-100'>
                                  <span className='font-medium'>
                                    Coach Tabby 26
                                  </span>
                                </td>
                                <td className='py-2.5 pr-4 border-b border-neutral-100'>
                                  <span className='text-neutral-500 font-medium'>
                                    15 May 2020 11:00 pm
                                  </span>
                                </td>
                                <td className='py-2.5 pr-4 border-b border-neutral-100'>
                                  <span className='px-2.5 py-1 text-sm font-medium text-yellow-500 bg-yellow-500 bg-opacity-10 rounded-full'>
                                    Pending
                                  </span>
                                </td>
                                <td className='py-2.5 border-b border-neutral-100'>
                                  <a
                                    className='inline-flex py-2.5 pr-0'
                                    href='#'
                                  >
                                    <span className='w-1 h-1 bg-neutral-200 rounded-full' />
                                    <span className='mx-0.5 w-1 h-1 bg-neutral-200 rounded-full' />
                                    <span className='w-1 h-1 bg-neutral-200 rounded-full' />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td className='py-2.5 pr-4 border-b border-neutral-100'>
                                  <span className='font-medium'>29506</span>
                                </td>
                                <td className='py-2.5 pr-4 border-b border-neutral-100'>
                                  <div className='flex flex-wrap items-center'>
                                    <img
                                      className='mr-3 h-9'
                                      src='dashy-assets/images/avatar9.png'
                                      alt=''
                                    />
                                    <span className='font-semibold'>
                                      Cameron Williamson
                                    </span>
                                  </div>
                                </td>
                                <td className='py-2.5 pr-4 border-b border-neutral-100'>
                                  <span className='font-medium'>$17.84</span>
                                </td>
                                <td className='py-2.5 pr-4 border-b border-neutral-100'>
                                  <span className='font-medium'>
                                    Dell Computer Monitor
                                  </span>
                                </td>
                                <td className='py-2.5 pr-4 border-b border-neutral-100'>
                                  <span className='text-neutral-500 font-medium'>
                                    15 May 2020 5:00 pm
                                  </span>
                                </td>
                                <td className='py-2.5 pr-4 border-b border-neutral-100'>
                                  <span className='px-2.5 py-1 text-sm font-medium text-green-500 bg-green-500 bg-opacity-10 rounded-full'>
                                    Confirmed
                                  </span>
                                </td>
                                <td className='py-2.5 border-b border-neutral-100'>
                                  <a
                                    className='inline-flex py-2.5 pr-0'
                                    href='#'
                                  >
                                    <span className='w-1 h-1 bg-neutral-200 rounded-full' />
                                    <span className='mx-0.5 w-1 h-1 bg-neutral-200 rounded-full' />
                                    <span className='w-1 h-1 bg-neutral-200 rounded-full' />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td className='py-2.5 pr-4'>
                                  <span className='font-medium'>29506</span>
                                </td>
                                <td className='py-2.5 pr-4'>
                                  <div className='flex flex-wrap items-center'>
                                    <img
                                      className='mr-3 h-9'
                                      src='dashy-assets/images/avatar10.png'
                                      alt=''
                                    />
                                    <span className='font-semibold'>
                                      Esther Howard
                                    </span>
                                  </div>
                                </td>
                                <td className='py-2.5 pr-4'>
                                  <span className='font-medium'>$5.22</span>
                                </td>
                                <td className='py-2.5 pr-4'>
                                  <span className='font-medium'>
                                    iPad Pro 2017 Model
                                  </span>
                                </td>
                                <td className='py-2.5 pr-4'>
                                  <span className='text-neutral-500 font-medium'>
                                    15 May 2020 10:00 pm
                                  </span>
                                </td>
                                <td className='py-2.5 pr-4'>
                                  <span className='px-2.5 py-1 text-sm font-medium text-green-500 bg-green-500 bg-opacity-10 rounded-full'>
                                    Confirmed
                                  </span>
                                </td>
                                <td className='py-2.5'>
                                  <a
                                    className='inline-flex py-2.5 pr-0'
                                    href='#'
                                  >
                                    <span className='w-1 h-1 bg-neutral-200 rounded-full' />
                                    <span className='mx-0.5 w-1 h-1 bg-neutral-200 rounded-full' />
                                    <span className='w-1 h-1 bg-neutral-200 rounded-full' />
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className='flex flex-wrap items-center justify-between -m-2'>
                          <div className='w-auto p-2'>
                            <div className='flex flex-wrap -m-0.5'>
                              <div className='w-auto p-0.5'>
                                <a
                                  className='flex items-center justify-center w-9 h-9 border hover:border-neutral-300 rounded-sm'
                                  href='#'
                                >
                                  <svg
                                    width={7}
                                    height={12}
                                    viewBox='0 0 7 12'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      d='M6 10.6666L1.33333 5.99998L6 1.33331'
                                      stroke='#71717A'
                                      strokeWidth='1.5'
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                  </svg>
                                </a>
                              </div>
                              <div className='w-auto p-0.5'>
                                <a
                                  className='flex items-center justify-center w-9 h-9 border hover:border-neutral-300 rounded-sm'
                                  href='#'
                                >
                                  <span className='text-sm text-neutral-400 font-semibold'>
                                    1
                                  </span>
                                </a>
                              </div>
                              <div className='w-auto p-0.5'>
                                <a
                                  className='flex items-center justify-center w-9 h-9 border border-neutral-600 rounded-sm'
                                  href='#'
                                >
                                  <span className='text-sm font-semibold'>
                                    2
                                  </span>
                                </a>
                              </div>
                              <div className='w-auto p-0.5'>
                                <a
                                  className='flex items-center justify-center w-9 h-9 border hover:border-neutral-300 rounded-sm'
                                  href='#'
                                >
                                  <span className='text-sm text-neutral-400 font-semibold'>
                                    3
                                  </span>
                                </a>
                              </div>
                              <div className='w-auto p-0.5'>
                                <a
                                  className='flex items-center justify-center w-9 h-9 border hover:border-neutral-300 rounded-sm'
                                  href='#'
                                >
                                  <span className='text-sm text-neutral-400 font-semibold'>
                                    4
                                  </span>
                                </a>
                              </div>
                              <div className='w-auto p-0.5'>
                                <a
                                  className='flex items-center justify-center w-9 h-9 border hover:border-neutral-300 rounded-sm'
                                  href='#'
                                >
                                  <svg
                                    width={7}
                                    height={12}
                                    viewBox='0 0 7 12'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      d='M1 1.33335L5.66667 6.00002L1 10.6667'
                                      stroke='#71717A'
                                      strokeWidth='1.5'
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                  </svg>
                                </a>
                              </div>
                              <div className='w-auto p-0.5'>
                                <a
                                  className='flex items-center justify-center w-9 h-9 border hover:border-neutral-300 rounded-sm'
                                  href='#'
                                >
                                  <svg
                                    width={7}
                                    height={12}
                                    viewBox='0 0 7 12'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      d='M1 1.33335L5.66667 6.00002L1 10.6667'
                                      stroke='#71717A'
                                      strokeWidth='1.5'
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                  </svg>
                                  <svg
                                    width={7}
                                    height={12}
                                    viewBox='0 0 7 12'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      d='M1 1.33335L5.66667 6.00002L1 10.6667'
                                      stroke='#71717A'
                                      strokeWidth='1.5'
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                  </svg>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className='w-auto p-2'>
                            <p className='text-sm text-neutral-400'>
                              Showing 1 of 20 out of 157 results
                            </p>
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
