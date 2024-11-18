import React from "react";
import SectionHeader from "../templates/section-header";
import Image from "next/image";
import Link from "next/link";

const CommunityPartner = () => {
  return (
    <SectionHeader
      className="mt-24"
      title="Community partner"
      description="Komunitas yang saling terhubung">
      <div className="flex gap-4 mt-5 justify-center">
        <Link href={"https://www.instagram.com/tegal.dev/"}>
          <Image
            alt="Tegal Dev"
            className="h-20 w-auto rounded-xl"
            src={"/Tegal.dev-BB.png"}
            width={500}
            height={500}
          />
        </Link>
        <Link href={"https://www.instagram.com/meetap_dev/"}>
          <Image
            alt="Meetap"
            className="h-20 w-auto rounded-xl"
            src={"/meetap.png"}
            width={500}
            height={500}
          />
        </Link>
      </div>
    </SectionHeader>
  );
};

export default CommunityPartner;
