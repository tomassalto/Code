import React from "react";
import Image from "next/image";
import Link from "next/link";

const Breadcrumb = ({ breadcrumbs }) => {
  return (
    <nav className="text-[#999] font-poppins font-light leading-[23.96px] text-[13px] flex items-center">
      {breadcrumbs.map((item, index) => (
        <span key={index} className="flex items-center">
          <Link href={item.href} className="hover:text-[#555]">
            {item.name}
          </Link>
          {index < breadcrumbs.length - 1 && (
            <Image
              src="/icons/detail/chevron.svg"
              alt="chevron"
              width={8}
              height={8}
              className="mx-2"
            />
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
