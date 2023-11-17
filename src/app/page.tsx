import Image from "next/image";
import Input from "postcss/lib/input";
import profilePic from "../app/poster.png";

export default function Home() {
  const content = "📋 What kind of services does ClearShare cover?";
  return (
    <div>
      <div className="w-full bg-whitesmoke  flex justify-center items-center">
        <Image
          className="items-center"
          src={profilePic}
          width={50}
          height={50}
          alt="Picture of the author"
        />
      </div>
      <div id="chatting" className="container  h-max overflow-y-hidden">
        <div className="flex-row m-3 mx-20 ">
          <div className="bg-blue-100 w-max mt-10 rounded-lg p-2">
            Hi there! I'm Osai, dedicated to helping you understand your
            HealthCare Benefits. Let's get started! 🩺📋
          </div>
          <span className="text-neutral-300 text-xs ml-4">Today, 10:38</span>
        </div>
        <div className=" m-3 mx-20 text-right ">
          <div className="ml-96 "></div>
          <div className="bg-gray-400 ml-96 mt-10 rounded-lg p-2 ">
            📋 What kind of services does ClearShare cover?📱 Do I have access
            to Telemedicine? Where can I find it?
          </div>
          <span className="text-neutral-300 text-xs ml-4">Today, 10:40</span>
        </div>
      </div>
      <div className="flex-col mt-72 mb-20 py-10   mx-72 items-center">
        <div id="suggestions" className="flex-row mx-16 ">
          <button className="bg-blue-100  rounded-lg p-1.5 mx-2 my-2">
            🩺 Does my plan cover specialists?
          </button>
          <button
            className={
              "bg-blue-100 rounded-lg p-1.5 mx-2 my-2 w-40 whitespace-nowrap overflow-hidden hover:w-max"
            }
          >
            {content}
          </button>
          <button className="bg-blue-100  rounded-lg p-1.5 mx-2 my-2">
            See more
          </button>
        </div>
        <div
          id="textbox"
          className="w-full mx-20 my-5 items-center justify-center"
        >
          <input
            className="basis-96 mr-1 rounded-lg  h-16 w-4/5 "
            placeholder="Write your Message"
            type={"text"}
            id="name"
          />
        </div>
      </div>
    </div>
  );
}
