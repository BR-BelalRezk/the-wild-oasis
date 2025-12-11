import useDetectOutsideClick from "@/hooks/custom/use-detect-outside-click";
import { cn } from "@repo/ui/utils/cn";
import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";

type MenusType = {
  openId: number | null;
  open: (id: number | null) => void;
  close: () => void;
  position: { right: number; top: number } | null;
  setPosition: (position: { right: number; top: number } | null) => void;
};

const MenusContext = createContext<MenusType | null>(null);
const useMenus = () => {
  const context = useContext(MenusContext);
  if (!context) {
    throw new Error("useMenus must be used within a MenusContext");
  }
  return context;
};

const Menus = ({ children }: { children: React.ReactNode }) => {
  const [openId, setOpenId] = useState<number | null>(null);
  const [position, setPosition] = useState<{
    right: number;
    top: number;
  } | null>(null);
  const close = () => setOpenId(null);
  const open = setOpenId;
  const value = { openId, open, close, position, setPosition };
  return (
    <MenusContext.Provider value={value}>{children}</MenusContext.Provider>
  );
};
const MenusMenu = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center justify-center">{children}</div>;
};
const MenusToggle = ({
  menuId,
  className,
  ...props
}: React.HTMLAttributes<HTMLButtonElement> & {
  menuId: number;
  className?: string;
}) => {
  const { openId, open, close, setPosition } = useMenus();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.closest("button")?.getBoundingClientRect();
    setPosition({
      right: window.innerWidth - rect?.width! - rect?.x!,
      top: rect?.y! + rect?.height! + 8,
    });
    openId === null || openId !== menuId ? open(menuId) : close();
  };
  return (
    <button
      {...props}
      className={cn(
        ` bg-transparent border-0 p-1 rounded-sm
        translate-x-3 transition-all duration-200
        hover:bg-grey-100
        [&>svg]:w-10 [&>svg]:h-10 [&>svg]:text-grey-700`,
        className
      )}
      onClick={handleClick}
    >
      <HiEllipsisVertical />
    </button>
  );
};
const MenusList = ({
  menuId,
  className,
  children,
}: {
  menuId: number;
  className?: string;
  children: React.ReactNode;
}) => {
  const { openId, position, close } = useMenus();
  const { ref } = useDetectOutsideClick<HTMLUListElement>({
    action: close,
    listenCapture: false,
  });
  if (openId !== menuId) return null;
  return createPortal(
    <ul
      ref={ref}
      className={cn("fixed bg-grey-0 shadow-md rounded-md", className)}
      style={{ right: position?.right || 0, top: position?.top || 0 }}
    >
      {children}
    </ul>,
    document.body
  );
};

const MenusButton = ({
  className,
  children,
  icon,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  className?: string;
  icon: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}) => {
  const { close } = useMenus();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClick?.();
    close();
  };
  return (
    <li>
      <button
        disabled={disabled}
        onClick={handleClick}
        className={cn(
          `
        w-full text-left bg-transparent border-0 
        px-6 py-3 text-[1.4rem] transition-all duration-200
        flex items-center gap-4
        hover:bg-grey-50
      `,
          className
        )}
      >
        <span className="flex items-center gap-4 [&>svg]:w-7 [&>svg]:h-7 [&>svg]:text-grey-400 [&>svg]:transition-all [&>svg]:duration-300">
          {icon}
          {children}
        </span>
      </button>
    </li>
  );
};
export { Menus, MenusMenu, MenusToggle, MenusList, MenusButton };
