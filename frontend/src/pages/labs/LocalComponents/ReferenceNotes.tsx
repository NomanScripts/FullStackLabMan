import { ClipboardIcon, CogIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
const ReferenceNotes = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2 gap-2 bg-white p-4 lg:rounded-md border border-gray-200 shadow-md">
        <div className="flex items-center gap-2">
          <ClipboardIcon className="w-5 h-5 text-dark-100" />
          <p className="text-dark-100 text-sm font-semibold ">Notes</p>
        </div>
        <textarea 
          className="text-dark-70 text-sm w-full py-1 px-2 focus:outline-none focus:ring-1 focus:ring-primaryOrange-100"
          placeholder="Jot down your notes here..."
          rows={1}
        />
      </div>
      <div className="flex flex-col gap-2 bg-white p-4 lg:rounded-md border border-gray-200 shadow-md">
        <div className="flex items-center gap-2">
          <CogIcon className="w-5 h-5 text-dark-100" />
          <p className="text-dark-100 text-sm font-semibold">References</p>
        </div>
        <div className="flex items-center gap-2">
        
          <p className="text-dark-70 text-sm">
            Reprehenderit in voluptate
          </p>
          <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5 text-dark-100 " />
        </div>
        <div className="flex items-center gap-2">
          <p className="text-dark-70 text-sm">
            Voluptate velit esse cillum dolore
          </p>
          <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5 text-dark-100 " />
        </div>
      </div>
    </div>
  );
};

export default ReferenceNotes;
