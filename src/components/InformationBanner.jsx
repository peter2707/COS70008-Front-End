import React from "react";
import { HiInformationCircle } from "react-icons/hi";

export default function InformationBanner({ textBold, text, linkName, href }) {
  return (
    <div className="flex justify-start items-start bg-primaryLight p-6">
      <HiInformationCircle className="text-4xl text-primary mr-2 -mt-1"/>
      <p>
        <span className="font-semibold">{textBold}</span>
        {text}
        <a className="link" href={href} title={linkName}>{linkName}</a>
      </p>
    </div>
  );
}
