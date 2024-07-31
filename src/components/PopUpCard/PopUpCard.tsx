import CancleButton from "./CancelButton";
import DeleteButton from "./DeleteButton";
const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="fixed inset-0 bg-white bg-opacity-30"></div>
      <div className="bg-gradient-to-b from-[#141517] to-[#232528]  min-w-[443px] min-h-[249px] p-6 rounded-lg shadow-lg z-10">
        <h2 className="text-lg font-semibold mb-4 text-center mt-4">
          Are you sure?
        </h2>
        <p className="mb-8 mt-8 text-center text-gray-300 ">
          Your selected email will be deleted.
        </p>
        <div className="flex justify-between px-12 mt-6">
          <CancleButton />
          <DeleteButton />
        </div>
      </div>
    </div>
  );
};

export default Popup;
