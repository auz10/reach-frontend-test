import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import { Dispatch, SetStateAction } from 'react';

interface HeaderProps {
  title: string;
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
}

function Header({ title, showMenu, setShowMenu }: HeaderProps) {
  return (
    <div className="flex h-12 max-h-12 min-h-12 items-center justify-between py-2 px-5 border-b border-default">
      <span className="font-bold">{title}</span>
      <div
        className="block md:hidden"
        role="button"
        onClick={() => setShowMenu((prev) => !prev)}
      >
        {showMenu ? (
          <Bars3Icon className="size-7 pointer" />
        ) : (
          <XMarkIcon className="size-7 pointer" />
        )}
      </div>
    </div>
  );
}

export default Header;
