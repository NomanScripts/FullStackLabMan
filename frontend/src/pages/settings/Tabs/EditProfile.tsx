import defaultProfile from "../../../assets/images/default-profile.png";
import { useState } from "react";

const EditProfile = () => {
  const user = {
    firstName: "John",
    lastName: "Doe",
    username: "johndoe123",
    email: "john.doe@example.com",
    title: "Software Engineer",
    profileImage: defaultProfile
  };

  const [profileImage, setProfileImage] = useState(user.profileImage);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-4">
      <div className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-between gap-6">
        <div className="flex flex-col gap-4">
          <img
            src={profileImage}
            alt="profile"
            className="w-32 h-32 rounded-full"
          />
          <label className="cursor-pointer">
            <span className="text-sm text-primaryOrange-100 ms-3 text-nowrap hover:text-primaryOrange-200 transition-colors">
              Upload Image
            </span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-4">
            <div className="flex flex-col gap-4">
              <label htmlFor="firstName" className="text-sm text-dark-100">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                defaultValue={user.firstName}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="lastName" className="text-sm text-dark-100">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                defaultValue={user.lastName}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="username" className="text-sm text-dark-100">
              Username <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              defaultValue={user.username}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="email" className="text-sm text-dark-100">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              defaultValue={user.email}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="title" className="text-sm text-dark-100">
              Title <span className="text-red-500">*</span>
            </label>
            <textarea
              defaultValue={user.title}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
      </div>
      <div className="h-0.5 w-full bg-gray-100 flex my-4"></div>
      <div className="flex justify-end gap-4 ">
        <button className="bg-white text-primaryOrange-100 px-4 py-2 rounded-md hover:bg-primaryOrange-50 transition-colors">
          Cancel
        </button>
        <button className="bg-primaryOrange-100 text-white px-4 py-2 rounded-md hover:bg-primaryOrange-200 transition-colors">
          Save
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
