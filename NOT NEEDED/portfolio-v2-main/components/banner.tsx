"use client";

import Image from "next/image";
import Container from "./container";

interface BannerSectionProps {
  quote?: string;
  bannerImage?: string;
}

export function Banner({
  quote = "I am gonna be hokage one day.",
  bannerImage = "/naruto.jpg",
}: BannerSectionProps) {
  return (
    <Container className="py-0">
      <div className="relative mb-2 w-full mask-x-from-90% mask-b-from-95% mask-radial-from-75%">
        <div className="relative" style={{ height: "auto" }}>
          <Image
            alt="Banner"
            width={1240}
            height={900}
            className="h-[200px] w-full rounded-none object-cover sm:h-[270px]"
            src={bannerImage}
            style={{ color: "transparent", minHeight: "100px" }}
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <p className="text-center font-serif text-base text-white italic sm:text-xl">
              {quote}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
