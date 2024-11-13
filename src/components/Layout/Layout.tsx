import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header';
import Menu from '../Menu';
import { useState } from 'react';

function Layout() {
  const { state } = useLocation();
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div className="flex h-screen">
      <Menu showMenu={showMenu}/>
      <div className="flex flex-1 flex-col">
        <Header title={state?.title} showMenu={showMenu} setShowMenu={setShowMenu} />
        <div className="h-full w-full overflow-scroll lg:overflow-hidden relative">
          <div className="p-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
