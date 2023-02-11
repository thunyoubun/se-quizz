import React, { ChangeEvent, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { getSession } from "next-auth/react";

import axios from "axios";

export default function upload() {
  const [file, setFile] = useState<File>();
  const url = "";
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUploadClick = async () => {
    if (!file) {
      return;
    }

    // 👇 Uploading the file using the fetch API to the server
    // fetch('https://httpbin.org/post', {
    //   method: 'POST',
    //   body: file,
    //   // 👇 Set headers manually for single file upload
    //   headers: {
    //     'content-type': file.type,
    //     'content-length': `${file.size}`, // 👈 Headers need to be a string
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
    //   .catch((err) => console.error(err));
    axios.post(url, file, {}).then((res) => {
      console.log(res);
    });
  };
  return (
    <div className=" flex leading-default bg-gray-100 h-fit min-h-screen   w-full   ">
      <div className=" fixed  bg-y-50 w-full bg-center h-80 top-0 bg-[url('https://www.cmu.ac.th/content/organization/7ae5726e-0c18-45f8-ae3c-cdd52e2afd94/3baedb35-438f-4e0f-8d1d-2b9724d36951.jpg')] min-h-75">
        <span className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-60"></span>
      </div>
      <div id="nav-sidebar" className="z-10 hidden md:flex  md:p-6 mb-2">
        <Sidebar />
      </div>

      <div
        className="z-10 container w-full overflow-y-auto relative
            h-full max-h-screen transition-all duration-200 ease-in-out  rounded-xl "
      >
        <Navbar prePath="Pages" pathName="upload" />

        <div className="w-full   mt-10 px-7 ">
          {/* Upload zone*/}
          <div className="w-full  h-max px-3 mt-2 md:mt-0  ">
            <div className="  rounded-md p-4 overflow-x-auto shadow-xl bg-white">
              <input type="file" onChange={handleFileChange} />

              <div>{file && `${file.name} - ${file.type}`}</div>

              <button onClick={handleUploadClick}>Upload</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permant: false,
      },
    };
  }
  return {
    props: { session: await getSession(context) },
  };
}
