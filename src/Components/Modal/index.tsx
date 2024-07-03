import React, {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';
import { createPortal } from 'react-dom';
import { HiXMark } from 'react-icons/hi2';

interface WindowProps {
  children: React.ReactNode;
  name: string;
}

interface OpenProps {
  children: React.ReactElement;
  opens: string;
}

interface ModalProps {
  children: React.ReactNode;
}

const ModalCtx = createContext<{
  openName: string;
  close: () => void;
  open: React.Dispatch<React.SetStateAction<string>>;
}>({
  openName: '',
  close: () => {},
  open: () => {}
});

export const Modal = ({ children }: ModalProps) => {
  const [openName, setOpenName] = useState<string>('');
  const close = () => setOpenName('');
  const open = setOpenName;
  return (
    <ModalCtx.Provider value={{ openName, close, open }}>
      {children}
    </ModalCtx.Provider>
  );
};

const Open = ({ children, opens: openWindowName }: OpenProps) => {
  const { open } = useContext(ModalCtx);

  return cloneElement(children, { onClick: () => open(openWindowName) });
};

const Window = ({ children, name }: WindowProps) => {
  const { openName, close } = useContext(ModalCtx);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        close();
      }
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [close]);

  if (name !== openName) {
    // alert("hello world");
    return null;
  }
  return createPortal(
    <div className="fixed left-0 top-0  z-50 h-screen w-full bg-[#00000091]">
      <div
        className="fixed bottom-[50%] right-[50%] z-[1000] flex  translate-x-1/2 translate-y-1/2 flex-col rounded-xl border bg-gray-50 px-6 py-12 shadow-2xl transition-all duration-75 ease-in-out dark:border-none dark:bg-gray-950"
        ref={ref}
      >
        <div className="absolute right-2 top-4 ">
          <button
            onClick={close}
            className="rounded-lg hover:bg-gray-200 dark:hover:bg-[#f3f5f72e]"
            type="button"
          >
            {<HiXMark size={25} /> || 'icon'}
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
};

Modal.Open = Open;
Modal.Window = Window;
