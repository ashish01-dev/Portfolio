"use client";

import Image from "next/image";

export function CloudBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 hidden overflow-hidden 2xl:block dark:hidden">
      {/* Top Left Cluster */}
      <div className="absolute top-[-10%] left-[-15%] h-[600px] w-[800px] opacity-60">
        <div className="relative h-full w-full">
          <Image
            src="/clouds/elipse.svg"
            alt=""
            fill
            sizes="800px"
            className="object-contain"
            priority
          />
          <Image
            src="/clouds/bigCloud.png"
            alt=""
            width={700}
            height={500}
            className="absolute top-[20%] left-[20%] h-auto w-[80%] opacity-80"
          />
        </div>
      </div>

      <div className="absolute top-[-20%] right-[-15%] h-[700px] w-[700px] opacity-60">
        <div className="relative h-full w-full">
          <Image
            src="/clouds/elipse.svg"
            alt=""
            fill
            sizes="700px"
            className="rotate-180 object-contain"
            priority
          />
          <Image
            src="/clouds/bigCloud.png"
            alt=""
            width={700}
            height={500}
            className="absolute top-[20%] left-[20%] h-auto w-[80%] rotate-180 opacity-80"
          />
        </div>
      </div>

      {/* Bottom Right Cluster */}
      <div className="absolute right-[-5%] bottom-[-20%] h-[650px] w-[650px] rotate-[5deg] opacity-50">
        <div className="relative h-full w-full">
          <Image
            src="/clouds/elipse.svg"
            alt=""
            fill
            sizes="650px"
            className="rotate-180 object-contain"
          />
          <Image
            src="/clouds/bigCloud.png"
            alt=""
            width={800}
            height={600}
            className="absolute right-[10%] bottom-[20%] h-auto w-[90%]"
          />
        </div>
      </div>

      {/* Bottom Left Cluster */}
      <div className="absolute bottom-[-10%] left-[-10%] h-[500px] w-[700px] opacity-40">
        <div className="relative h-full w-full">
          <Image
            src="/clouds/elipse.svg"
            alt=""
            fill
            sizes="500px"
            className="object-contain"
          />
          <Image
            src="/clouds/cloud.png"
            alt=""
            width={500}
            height={400}
            className="absolute bottom-[10%] left-[10%] h-auto w-[70%] opacity-60"
          />
        </div>
      </div>
    </div>
  );
}
