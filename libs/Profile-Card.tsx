import Image from "next/image";
import profile from "../public/profile.jpg";

interface details {
  name: string;
  date: string;
}

export const Profile = ({ name, date }: details) => {
  return (
    <div className="flex mt-5 max-w-fit">
      <Image src={profile} alt="meri photu" className="rounded-full size-10" />
      <div className="flex flex-col gap-0.5 justify-start ml-4">
        <div className="text-[14.5px] text-stone-800 font-medium">
          Written by {name}
        </div>
        <div className="text-[12px] text-gray-500">Last updated on {date}</div>
      </div>
    </div>
  );
};
