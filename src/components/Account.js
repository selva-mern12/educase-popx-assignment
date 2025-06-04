import { useEffect } from "react";
import { IoCamera } from "react-icons/io5";

const Account = () => {
  
  useEffect(() => {
    document.title = "Marry Profile";
  })

  return(
  <div className="w-full max-w-[400px] h-screen mx-auto bg-white rounded-2xl shadow-xl animate-fade-in">
    <div className="shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] p-3 mb-5 bg-white animate-fade-in-down">
      <h3 className="text-xl sm:text-2xl text-black">Account Settings</h3>
    </div>

    <div className="flex flex-col gap-4 p-3 border-b border-black/50 border-dashed animate-slide-up">
      <div className="flex items-center gap-4 ml-5">
        <div className="relative w-20 h-20 sm:w-16 sm:h-16 rounded-full bg-gray-200 shadow-md animate-fade-in-down">
          <img
            src="https://i.postimg.cc/QM9cZyK1/552b566f-44ac-40c5-bd3a-c2f88324e5d0.png"
            alt="Profile"
            className="w-full h-full object-cover transform hover:scale-105 transition duration-300 rounded-full"
          />
          <button className="absolute bottom-2 right-2 translate-x-1/2 translate-y-1/2 h-5 w-5 rounded-full bg-violet-500 flex items-center justify-center text-white z-[30] border border-white shadow-sm">
            <IoCamera size={10} />
          </button>
        </div>

        <div className="animate-fade-in-down">
          <h6 className="text-lg font-semibold text-gray-900">Marry Doe</h6>
          <p className="text-sm text-gray-500">Marry@Gmail.Com</p>
        </div>
      </div>

      <p className="text-gray-600 text-sm mt-4 sm:mt-0 sm:ml-6 leading-relaxed text-center sm:text-left animate-slide-up">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      </p>
    </div>
  </div>
)
};

export default Account;
