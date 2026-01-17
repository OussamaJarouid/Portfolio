import React from "react";
import { PiPhone } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import SingleContactInfo from "./SingleContactInfo";

const ContactMeInfo = () => {
  const contactInfos = [
    { text: "0621039442", icon: PiPhone },
    { text: "oussamajarouide110@gmail.com", icon: CiMail },
    { text: "Morocco, Agadir, Cité My Rachid ", icon: IoLocationOutline },
  ];
  return (
    <div className="flex flex-col gap-4 text-white mt-7">
      {contactInfos.map((item, idx) => {
        return (
          <SingleContactInfo
            key={idx}
            icon={<item.icon className="text-3xl" />}
            text={item.text}
          />
        );
      })}
    </div>
  );
};

export default ContactMeInfo;
