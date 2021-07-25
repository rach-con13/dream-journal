import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineSetting } from 'react-icons/ai';
import { FiBook } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/Io';
import { useRouter } from 'next/router';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { logoutUser } from '../../lib/firebase/authFunctions';
export default function SettingBar(props) {
  let router = useRouter();
  const logOut = () => {
    logoutUser(router);
  };

  return (
    <div className="h-screen z-10 relative bg-secondary text-secondary-superlight">
      <div className="px-4 mt-4">
        <p className="block text-2xl text-center">
          <CgProfile />
        </p>
        <div className="mt-8 text">
          <p className="block text-2xl text-center">
            <AiOutlineSetting />
          </p>
          <p className="mt-2 text-2xl text-center ">
            <FiBook />
          </p>
          <p className="mt-2 text-2xl text-center ">
            <IoMdNotificationsOutline />
          </p>
        </div>
        <div className="absolute bottom-4  left-1/2 transform -translate-x-1/2">
          <button
            onClick={logOut}
            className="bg-primary-superlight flex items-center text-2xl p-2  rounded-sm display-block w-full text-secondary"
          >
            <RiLogoutBoxLine />
          </button>
        </div>
      </div>
    </div>
  );
}
