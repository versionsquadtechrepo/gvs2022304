import React, { useRef } from 'react';
import SearchIcon from '@components/icons/search-icon';
import { siteSettings } from '@settings/site-settings';
import HeaderMenu from '@components/layout/header/header-menu';
import Logo from '@components/ui/logo';
import { useUI } from '@contexts/ui.context';
import { ROUTES } from '@utils/routes';
import { addActiveScroll } from '@utils/add-active-scroll';
import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import MenuIcon from '@components/icons/menu-icon';
const AuthMenu = dynamic(() => import('./auth-menu'), { ssr: false });
const CartButton = dynamic(() => import('@components/cart/cart-button'), {
  ssr: false,
});


type DivElementRef = React.MutableRefObject<HTMLDivElement>;
const { site_header } = siteSettings;
const Header: React.FC = () => {
  const router = useRouter();
  const headerCss = router.pathname.indexOf('ancient') > 0 ? 'w-full h-28 sm:h-20 lg:h-24 absolute z-20' : 'w-full h-28 sm:h-20 lg:h-24 relative z-20'
  const { openSidebar, openSearch, openModal, setModalView, isAuthorized } = useUI();
  const { t } = useTranslation('common');
  const siteHeaderRef = useRef() as DivElementRef;
  addActiveScroll(siteHeaderRef);

  function handleLogin() {
    setModalView('LOGIN_VIEW');
    return openModal();
  }
  function handleMobileMenu() {
    return openSidebar();
  }

  return (
    <>
      <header id="siteHeader" ref={siteHeaderRef} className={headerCss}>
        <div className={'innerSticky text-gray-700 body-font fixed ' + (router.pathname.indexOf('ancient') > 0 ? '' : 'bg-white') + ' w-full h-16 sm:h-20 lg:h-24 z-20 px-4 md:px-8 lg:px-6 transition duration-200 ease-in-out'}>
          <div className="flex items-center justify-center mx-auto max-w-[1920px] h-full w-full">
            <Logo />

            <HeaderMenu data={site_header.menu} className="hidden lg:flex md:ms-6 xl:ms-10" />

            <div className="flex-shrink-0 ms-auto lg:me-5 xl:me-8 2xl:me-10">
              <button
                aria-label="Menu"
                className="menuBtn flex flex-col items-center justify-center flex-shrink-0 outline-none focus:outline-none"
                onClick={handleMobileMenu}
              >
                <MenuIcon />
              </button>

            </div>

            <div className="hidden lg:flex justify-end items-center space-s-6 lg:space-s-5 xl:space-s-8 2xl:space-s-10 ms-auto flex-shrink-0">
              <button
                className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform"
                onClick={openSearch}
                aria-label="search-button"
              >
                <SearchIcon />
              </button>
              <div className="-mt-0.5 flex-shrink-0">
                <AuthMenu
                  isAuthorized={isAuthorized}
                  href={ROUTES.ACCOUNT}
                  className="text-sm xl:text-base text-heading font-semibold"
                  btnProps={{
                    className: 'text-sm xl:text-base text-heading font-semibold focus:outline-none',
                    // @ts-ignore
                    children: t('text-sign-in'),
                    onClick: handleLogin,
                  }}
                >
                  {t('text-account')}
                </AuthMenu>
              </div>
              <CartButton />
            </div>
          </div>
        </div>
        <div className={'innerSticky text-gray-700 body-font top-16 absolute ' + (router.pathname.indexOf('ancient') > 0 ? '' : 'bg-white') + ' w-full h-16 sm:h-20  px-4 md:px-8 lg:px-6 transition duration-200 ease-in-out '}>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg fill="none" className="w-5 h-5 text-gray-500 dark:text-gray-400" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
              </svg>
            </div>
            <input type="text" id="input-group-1" className="bg-white border h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select City" defaultValue={'Hyderabad, Telangana, India'} />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg fill="#CB2027" className="w-5 h-5 text-red-500 dark:text-gray-400" stroke="#CB2027" stroke-width="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path> </svg>

            </div>
          </div>
        </div>


      </header>
    </>
  );
};

export default Header;
