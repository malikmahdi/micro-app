type PropsType = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const ModalLogin: React.FC<PropsType> = ({ open, onClose, children }) => {
  return (
    <div
      onClick={onClose}
      className={`
            fixed inset-0 flex justify-center items-center transition-colors z-50
            ${open ? "visible bg-black/50" : "invisible"}
          `}
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
              bg-white rounded-xl shadow p-6 transition-all
              ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
            `}
      >
        <button
          onClick={onClose}
          className="text-[20px] absolute font-[700] top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-200 "
        >
          &#10006;
        </button>
        {children}
      </div>
    </div>
  );
};
export default ModalLogin;
