import { useState } from "react";

const Socials = () => {
  const [socials, setSocials] = useState({
    twitter: "https://twitter.com/johndoe",
    github: "https://github.com/johndoe",
    facebook: "https://facebook.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    hackerone: "https://hackerone.com/johndoe",
    bugcrowd: "https://bugcrowd.com/johndoe",
    website: "https://johndoe.com"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSocials(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-6">
      <div className="flex flex-col gap-4">
        <p className="text-lg font-semibold text-dark-100">Socials</p>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm text-dark-100">Twitter</label>
            <input
              type="text"
              name="twitter"
              value={socials.twitter}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-dark-100">GitHub</label>
            <input
              type="text"
              name="github"
              value={socials.github}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-dark-100">Facebook</label>
            <input
              type="text"
              name="facebook"
              value={socials.facebook}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-dark-100">LinkedIn</label>
            <input
              type="text"
              name="linkedin"
              value={socials.linkedin}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-dark-100">HackerOne</label>
            <input
              type="text"
              name="hackerone"
              value={socials.hackerone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-dark-100">Bugcrowd</label>
            <input
              type="text"
              name="bugcrowd"
              value={socials.bugcrowd}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-dark-100">Website</label>
            <input
              type="text"
              name="website"
              value={socials.website}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
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
    </div>
  );
};

export default Socials;