import { Checkbox } from "../../../components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../../components/ui/dialog";
import { useState } from "react";
import shade from "../../../assets/images/4arms-shade.png";
const CompleteProfile = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
  return (
    <div className="flex flex-row justify-between bg-primaryGreen-100  lg:rounded-lg lg:me-3 ">
      <div className="flex flex-col gap-1 mr-4 px-4 py-5">
        <h1 className="text-sm lg:text-xl font-bold text-white">
          Welcome {currentUser?.firstName}, Let's complete your profile
        </h1>
        <p className="text-xs lg:text-sm text-gray-400">
          We auto generated your username, you can customise or keep it. Also
          add a short bio of yourself
        </p>
        <div className="flex flex-row gap-2 lg:gap-6 lg:flex-row flex-col mt-4">
          <div className="flex flex-row gap-2 items-center">
            <Checkbox className="border-primaryOrange-100 data-[state=checked]:bg-primaryOrange-100 data-[state=checked]:text-white data-[state=checked]:border-primaryOrange-100 " />
            <label htmlFor="checkbox1" className="text-sm text-white">
              Username: Mikey99
            </label>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Checkbox className="border-primaryOrange-100 data-[state=checked]:bg-primaryOrange-100 data-[state=checked]:text-white data-[state=checked]:border-primaryOrange-100 " />
            <label htmlFor="checkbox2" className="text-sm text-white">
              Bio: <span className="text-dark-70">Your bio is missing</span>
            </label>
          </div>
        </div>
        <div className="flex lg:hidden mt-4">
          <button
            onClick={() => setIsDialogOpen(true)}
            className="bg-primaryOrange-100 text-white px-4 py-2 rounded-md text-sm w-96"
          >
            Complete Profile
          </button>
        </div>
      </div>
      <div className="flex items-center px-12 relative lg:flex hidden">
        <img
          src={shade}
          alt="profile"
          className="w-32 h-32 "
        />
        <div className="absolute right-20">
          <button
            onClick={() => setIsDialogOpen(true)}
            className="bg-primaryOrange-100 text-white px-4 py-2 rounded-md text-sm"
          >
            Complete Profile
          </button>
        </div>
      </div>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle className="text-dark-100 text-2xl font-bold text-center mb-4">
              Complete Profile
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col">
            <form action="" className="flex flex-col gap-24">
              {currentStep === 1 ? (
                <>
                  <div className="flex flex-col gap-1 py-12 px-16">
                    <label
                      htmlFor="username"
                      className="block text-sm font-semibold text-dark-100 xs:text-xs"
                    >
                      Create Username <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Username"
                      className="mt-1 block w-full rounded border border-gray-300 px-4 py-3 text-dark-100 placeholder-gray-400 focus:border-primaryOrange-100 focus:outline-none xs:text-xs"
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setIsDialogOpen(false)}
                      className="text-primaryOrange-100 bg-white px-4 py-2 rounded-md text-sm"
                    >
                      Save & close
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="bg-primaryOrange-100 text-white px-4 py-2 rounded-md text-sm"
                    >
                      Next
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col gap-1 px-6 py-3">
                    <label
                      htmlFor="bio"
                      className="flex justify-between items-center text-sm font-semibold text-dark-100 xs:text-xs"
                    >
                      <div>
                        Write your Bio <span className="text-red-500">*</span>
                      </div>
                      <p className="text-xs text-dark-70 font-medium">0/100</p>
                    </label>

                    <textarea
                      placeholder="Tell us a little about yourself, keep it short lorem ipsum dolor imit"
                      rows={4}
                      className="mt-1 block w-full rounded border border-gray-300 px-4 py-3 text-dark-100 placeholder-gray-400 focus:border-primaryOrange-100 focus:outline-none xs:text-xs"
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setIsDialogOpen(false);
                        setCurrentStep(1);
                      }}
                      className="bg-primaryOrange-100 text-white px-4 py-2 rounded-md text-sm"
                    >
                      Finish
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CompleteProfile;
