"use client";

import React, { useState } from "react";
import Button from "../fragments/button";
import { Input } from "../fragments/input";
import dynamic from "next/dynamic";

const RichEditor = dynamic(() => import("../sections/rich-editor"), {
  ssr: false,
});

const FormCreateArticle = () => {
  const [value, setValue] = useState<string>("");

  return (
    <form className="flex flex-col gap-4">
      <div>
        <Button text="Submit" variant="bg" />
      </div>

      <div>
        <Input placeholder="Title Article" />
      </div>

      <RichEditor value={value} setValue={setValue} />
    </form>
  );
};

export default FormCreateArticle;
