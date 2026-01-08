import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div>
      <div className=" max-w-full flex flex-col justify-center items-center  mx-auto p-10 py-20 bg-linear-to-br from-warm-write to-warm-write">
        <div className=" text-4xl p-20 font-button font-bold ">
          <div className="p-5">
            <h1>To join a Zoom room, you must enter</h1>
          </div>
          <div className="p-5">
            <p>Meeting ID: 861 8054 1699</p>
          </div>
          <div className="p-5">
            <p>Passcode: Coaching</p>
          </div>
        </div>
        <Link
          href={
            "https://us02web.zoom.us/j/86180541699?pwd=mjVzy7Lnd7iiNltevbZQzU8cujsc22.1"
          }
          className="text-3xl inline-flex items-center justify-center gap-2 px-8 py-4 bg-soft-clay text-gray-900 font-semibold rounded-lg hover:shadow-xl transition-all"
        >
          click here to join
        </Link>
      </div>
    </div>
  );
}
