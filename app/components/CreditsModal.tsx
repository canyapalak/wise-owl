import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ModalInterface } from "../types";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import HomeIcon from "@mui/icons-material/Home";
import GitHubIcon from "@mui/icons-material/GitHub";
import FaceOutlinedIcon from "@mui/icons-material/FaceOutlined";
import Image from "next/image";
import owlHead from "@/public/favicon.ico";

export default function CreditsModal({ open, setOpen }: ModalInterface) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal open={open} className="modal-main">
        <Box
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
           border-2 border-neutral-600 shadow-md rounded-lg outline-none flex flex-col w-4/6 md:3/6 lg:w-2/6 modal-box"
        >
          <HighlightOffIcon
            className="ml-auto mr-1 mt-1 cursor-pointer text-3xl hover:text-gray-default"
            onClick={handleClose}
          />
          <div
            className="border-dashed 
      border-spacing-20 border-4 border-neutral-600 rounded-xl w-4/5 ml-auto mr-auto mb-8 mt-2 modal-dash"
          >
            <div className="p-4 flex flex-col justify-center items-center">
              <Image src={owlHead} alt="logo" width={36} />
              <p className="text-brick-default text-2xl">Wise Owl</p>
              <p className="text-md">2024</p>
              <p className="text-md">Version: 1.0</p>
              <div className="flex flex-row gap-1">
                <p className="text-md italic">powered by</p>
                <a href="https://openai.com/blog/openai-api" target="_blank">
                  <p className="text-md cursor-pointer text-mustard-default hover:text-mustard-light">
                    OpenAI
                  </p>
                </a>
              </div>
              <div className="flex flex-row text-justify align-middle gap-1">
                <FaceOutlinedIcon className="mt-[26px]" width={36} />
                <p className="text-lg mt-6 mb-1">Can Yapalak</p>
              </div>
              <div className="flex flex-row gap-3 mb-2">
                <a
                  target="_blank"
                  href="https://canyapalak.vercel.app/"
                  title="Portfolio"
                >
                  <HomeIcon className="text-3xl cursor-pointer text-navy-default hover:text-navy-light" />
                </a>
                <a
                  target="_blank"
                  href="https://github.com/canyapalak"
                  title="Github"
                >
                  <GitHubIcon className="text-3xl cursor-pointer text-navy-default hover:text-navy-light" />
                </a>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
