import * as Dialog from '@radix-ui/react-dialog';

type IconProps = {
  isMenuOpen: boolean;
};

const CustomBurgerIcon = ({ isMenuOpen }: IconProps) => {
  return (
    <Dialog.Trigger asChild>
      <button className='burger-icon w-10 h-10 p-2 rounded flex flex-col justify-between items-end cursor-pointer fixed top-6 focus:outline-none'>
        <div
          className={`w-10 h-[1.5px] rounded ${
            isMenuOpen ? 'bg-neutral-900' : 'bg-neutral-50'
          } transform transition-all duration-200 ${
            isMenuOpen ? '-rotate-45 translate-x-1 translate-y-[10px]' : ''
          }`}
        />
        <div
          className={`w-7 h-[1.5px] rounded ${
            isMenuOpen ? 'bg-neutral-900' : 'bg-neutral-50'
          } transform transition-all duration-200 ${
            isMenuOpen ? 'opacity-0 -translate-x-4' : 'opacity-100'
          }`}
        />
        <div
          className={`w-10 h-[1.5px] rounded ${
            isMenuOpen ? 'bg-neutral-900' : 'bg-neutral-50'
          } transform transition-all duration-200 ${
            isMenuOpen ? 'rotate-45 translate-x-1 -translate-y-[11px]' : ''
          }`}
        />
      </button>
    </Dialog.Trigger>
  );
};

export default CustomBurgerIcon;
