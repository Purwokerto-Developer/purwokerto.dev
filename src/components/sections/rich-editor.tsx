"use client";

import { cn } from "@/lib/cn";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface RichEditorProps {
  value: string;
  setValue: (value: string) => void;
  className?: string;
}

const RichEditor = ({ value, setValue, className }: RichEditorProps) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  return (
    <>
      <ReactQuill
        className={cn("bg-white text-slate-500 h-[300px]", className)}
        modules={modules}
        formats={formats}
        theme="snow"
        value={value}
        onChange={setValue}
      />
    </>
  );
};

export default RichEditor;
