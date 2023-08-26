import React from 'react';
import clsx from 'clsx';
import { KTSVG, toAbsoluteUrl } from '../../../helpers';
import {
  HeaderNotificationsMenu,
  HeaderUserMenu,
  Search,
  ThemeModeSwitcher,
} from '../../../partials';
import { useLayout } from '../../core';
import { setLanguage } from '../../../i18n/Metronici18n';
import { useIntl } from 'react-intl';

const itemClass = 'ms-1 ms-lg-3';
const btnClass =
  'btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px !pr-14';
const userAvatarClass = 'symbol-35px symbol-md-40px';
const btnIconClass = 'svg-icon-1';

const Navbar = () => {
  const intl = useIntl();
  const { config } = useLayout();
  return (
    <div className="app-navbar flex-shrink-0">
      {/* <div className={clsx('app-navbar-item align-items-stretch', itemClass)}>
        <Search />
      </div> */}
      {/* 
      <div className={clsx('app-navbar-item', itemClass)}>
        <div id='kt_activities_toggle' className={btnClass}>
          <KTSVG path='/media/icons/duotune/general/gen032.svg' className={btnIconClass} />
        </div>
      </div> */}
      <div className="button flex py-3 gap-4 mr-8">
        <button
          className="px-5 py-2 bg-[#0064FA] text-white rounded-xl flex items-center"
          onClick={() => setLanguage('en')}
        >
          English
        </button>
        <button
          className="px-5 py-2 bg-[#0064FA] text-white rounded-xl flex items-center"
          onClick={() => setLanguage('ar')}
        >
          Arabic
        </button>
        <button
          className="px-5 py-2 bg-[#0064FA] text-white rounded-xl flex items-center"
          onClick={() => setLanguage('de')}
        >
          German
        </button>
      </div>

      <div className={clsx('app-navbar-item', itemClass)}>
        <div
          data-kt-menu-trigger="{default: 'click'}"
          data-kt-menu-attach="parent"
          data-kt-menu-placement="bottom-end"
          className={btnClass}
        >
          <KTSVG
            path="/media/icons/InstantIcons/notifications.svg"
            className={btnIconClass}
          />
        </div>
        <HeaderNotificationsMenu />
      </div>

      {/* <div className={clsx('app-navbar-item', itemClass)}>
        <div className={clsx('position-relative', btnClass)} id='kt_drawer_chat_toggle'>
          <KTSVG path='/media/icons/duotune/communication/com012.svg' className={btnIconClass} />
          <span className='bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink' />
        </div>
      </div> */}

      {/* <div className={clsx('app-navbar-item', itemClass)}>
        <ThemeModeSwitcher toggleBtnClass={clsx('btn-active-light-primary btn-custom')} />
      </div> */}

      <div className={clsx('app-navbar-item', itemClass)}>
        <div className="flex flex-col items-end mr-4">
          <div className="text-black text-lg font-bold">
            {intl.formatMessage({ id: 'Header.Name' })}
          </div>
          <div className="text-gray flex justify-end text-sm mt-[-5px]">
            {intl.formatMessage({ id: 'Header.Designation' })}
          </div>
        </div>
        <div
          className={clsx('cursor-pointer symbol', userAvatarClass)}
          data-kt-menu-trigger="{default: 'click'}"
          data-kt-menu-attach="parent"
          data-kt-menu-placement="bottom-end"
        >
          <img src={toAbsoluteUrl('/media/avatars/300-1.jpg')} alt="" />
        </div>
        <HeaderUserMenu />
      </div>
      {config.app?.header?.default?.menu?.display && (
        <div
          className="app-navbar-item d-lg-none ms-2 me-n3"
          title="Show header menu"
        >
          <div
            className="btn btn-icon btn-active-color-primary w-35px h-35px"
            id="kt_app_header_menu_toggle"
          >
            <KTSVG
              path="/media/icons/duotune/text/txt001.svg"
              className={btnIconClass}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export { Navbar };
