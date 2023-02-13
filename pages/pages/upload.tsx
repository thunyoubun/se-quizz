import React, { ChangeEvent, useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { getSession } from "next-auth/react";
import axios from "axios";

export default function Upload() {
  const [file, setFile] = useState<File>();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [filetype,setFiletype] = useState<string|undefined>("");
  const url = "";
  function imageLoader(src: string) {
    if(src==="pdf")
    return `/assets/pdf_icon.png`;
    else if(src==="doc"||src==="docx")
    return `/assets/doc_icon.png`;
  }
  const OnDrag = () => {
    console.log("dragenter");
    wrapperRef.current!.classList.add("dragover");
  };
  const OnLeave = () => {
    wrapperRef.current!.classList.remove("dragover");
  };
  const OnDrop = () => {
    wrapperRef.current!.classList.remove("dragover");
    if(file){
      let src=imageLoader(file.type.split("/")[1])
      setFiletype(src)
    }
    
    
  };
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
            <div className="rounded-md p-4 overflow-x-auto shadow-xl bg-white">
              <div
                id="fileuploadzone"
                className="flex flex-col items-center justify-center h-max"
              >
                <div
                  ref={wrapperRef}
                  onDrop={OnDrop}
                  onDragEnter={OnDrag}
                  onDragLeave={OnLeave}
                  className="uploadbox w-64 h-64 flex items-center justify-center"
                >
                  <h1 className="font-bold">
                    Drag and Drop or Click to Browse files
                  </h1>

                  <input type="file" className="" onChange={handleFileChange} />
                </div>
                <div>
                  {file && (
                    <div className="File-preview">
                      <div className="File-preview-item">
                        <img
                          src={filetype}
                          alt={file.name}
                          width={50}
                          height={50}
                        ></img>
                        <p>{file.name}</p>
                        <p>{file.type}</p>
                        <p>{file.size}</p>
                      </div>
                    </div>
                  )}
                </div>

                <button onClick={handleUploadClick}>Upload</button>
              </div>
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
