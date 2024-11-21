import React from "react";
import SectionHeader from "../templates/section-header";
import Image from "next/image";
import Link from "next/link";

const CommunityPartner = () => {
  return (
    <SectionHeader
      className="mt-24"
      title="Community Partners"
      description="Komunitas yang saling terhubung">
      <div className="flex gap-4 mt-5 justify-center">
        <Link href={"https://www.instagram.com/tegal.dev/"} target="_blank">
          <Image
            loading="lazy"
            alt="Tegal Dev"
            className="h-20 w-auto rounded-xl"
            src={"/Tegal.dev-BB.png"}
            width={500}
            height={500}
          />
        </Link>
        <Link href={"https://www.instagram.com/meetap_dev/"} target="_blank">
          <Image
            loading="lazy"
            alt="Meetap"
            className="h-20 w-auto rounded-xl"
            src={"/meetap.png"}
            width={500}
            height={500}
          />
        </Link>
        <Link href="https://www.youtube.com/@sandhikagalihWPU" target="_blank">
          <Image
            loading="lazy"
            src={"/wpu-white.png"}
            alt="WPU"
            width={500}
            height={500}
            className="h-20 w-auto hidden dark:block"
          />
          <Image
            loading="lazy"
            src={"/wpu-logo-hitam-polos.png"}
            alt="WPU"
            width={500}
            height={500}
            className="h-20 w-auto block dark:hidden"
          />
        </Link>
      </div>
    </SectionHeader>
  );
};

export default CommunityPartner;
