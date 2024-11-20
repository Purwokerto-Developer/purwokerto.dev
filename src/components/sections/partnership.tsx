import React from "react";
import SectionHeader from "../templates/section-header";
import Image from "next/image";
import Link from "next/link";

const Partnership = () => {
  return (
    <SectionHeader
      className="mt-24"
      title="Partnership"
      description="Kami bekerja sama untuk satu tujuan">
      <div className="flex gap-4 mt-5 justify-center">
        <Link href="https://bappedalitbang.banyumaskab.go.id/" target="_blank">
          <Image
            loading="lazy"
            src={"/banyumas2045 6.png"}
            alt="Bappeda Litbang Banyumas"
            width={500}
            height={500}
            className="h-32 w-auto hidden dark:block"
          />
          <Image
            loading="lazy"
            src={"/banyumas2045 2.png"}
            alt="Bappeda Litbang Banyumas"
            width={500}
            height={500}
            className="h-32 w-auto block dark:hidden"
          />
        </Link>
      </div>
    </SectionHeader>
  );
};

export default Partnership;
