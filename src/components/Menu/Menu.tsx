import { Link, NavLink } from 'react-router-dom';
import { Data, data } from '../../utils/mockData';

interface MenuProps {
  showMenu: boolean;
}

function Menu({ showMenu }: MenuProps) {
  return (
    <div
      className={`h-full bg-dash-sidebar w-52 overflow-auto border-r border-default absolute md:relative md:block bg-main md:bg-none z-10 transition duration-300 ease-in-out ${
        showMenu ? '-translate-x-56 md:translate-x-0' : 'translate-x-0'
      }`}
    >
      <div className="flex h-12 max-h-12 items-center border-b px-6 border-default">
        <Link to="/videos/1">
          <h1 className="font-bold ml-[-4px]">Reach FE Test</h1>
        </Link>
      </div>
      <nav role="menu" aria-orientation="vertical">
        <div className="border-b py-5 px-6 border-default">
          <div className="flex mb-2 font-normal">
            <span className="text-sm text-white text-opacity-50 w-full">
              Videos
            </span>
          </div>
          <div className="flex flex-col gap-2">
            {data.map((item: Data) => (
              <NavLink
                to={`videos/${item.id}`}
                state={{
                  title: item.title,
                }}
                className={({ isActive }) => (isActive ? 'text-blue-400' : '')}
                key={item.slug}
              >
                <div className="cursor-pointer text-sm font-semibold">
                  {item.title}
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
