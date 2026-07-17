"use client";
import { useScroll, motion, useMotionValueEvent } from "motion/react";
import { useRef } from "react";

const DiaRainbow = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const initialScrollPos = useRef(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Store the scroll position when animation starts
    if (latest > 0 && latest < 0.1) {
      initialScrollPos.current = window.scrollY;
    }

    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Only set timeout if we've scrolled past the initial position
    if (latest > 0) {
      timeoutRef.current = setTimeout(() => {
        // Scroll back to the position before the footer
        window.scrollTo({
          top: initialScrollPos.current,
          behavior: "smooth",
        });
      }, 200);
    }
  });

  return (
    <>
      {/* Spacer that creates scroll area */}
      <div ref={targetRef} className="h-[175px] sm:h-[300px] lg:h-[60vh]" />

      {/* Rainbow at bottom */}
      <motion.div
        className="pointer-events-none absolute right-0 bottom-0 left-0 z-20 -mb-[4vh] flex h-[175px] origin-bottom items-end sm:h-[300px] lg:h-[65vh]"
        aria-hidden="true"
        style={{ scaleY: scrollYProgress }}
      >
        <svg
          className="h-full w-full"
          viewBox="0 0 1271 599"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_3283_101175)">
            <rect
              x="1287"
              y="614"
              width="174"
              height="323"
              transform="rotate(180 1287 614)"
              fill="url(#paint0_linear_3283_101175)"
            />
          </g>
          <g filter="url(#filter1_f_3283_101175)">
            <rect
              x="1146"
              y="614"
              width="174"
              height="404"
              transform="rotate(180 1146 614)"
              fill="url(#paint1_linear_3283_101175)"
            />
          </g>
          <g filter="url(#filter2_f_3283_101175)">
            <rect
              x="1005"
              y="614"
              width="174"
              height="478"
              transform="rotate(180 1005 614)"
              fill="url(#paint2_linear_3283_101175)"
            />
          </g>
          <g filter="url(#filter3_f_3283_101175)">
            <rect
              width="174"
              height="323"
              transform="matrix(1 0 -5.78527e-07 -1 -16 614)"
              fill="url(#paint3_linear_3283_101175)"
            />
          </g>
          <g filter="url(#filter4_f_3283_101175)">
            <rect
              width="174"
              height="404"
              transform="matrix(1 0 -6.17385e-07 -1 125 614)"
              fill="url(#paint4_linear_3283_101175)"
            />
          </g>
          <g filter="url(#filter5_f_3283_101175)">
            <rect
              width="174"
              height="478"
              transform="matrix(1 0 -6.17385e-07 -1 266 614)"
              fill="url(#paint5_linear_3283_101175)"
            />
          </g>
          <g filter="url(#filter6_f_3283_101175)">
            <rect
              width="175"
              height="530"
              transform="matrix(1 0 -6.17385e-07 -1 407 614)"
              fill="url(#paint6_linear_3283_101175)"
            />
          </g>
          <g filter="url(#filter7_f_3283_101175)">
            <rect
              x="864"
              y="614"
              width="175"
              height="530"
              transform="rotate(180 864 614)"
              fill="url(#paint7_linear_3283_101175)"
            />
          </g>
          <g filter="url(#filter8_f_3283_101175)">
            <rect
              width="173"
              height="584"
              transform="matrix(1 0 -6.17385e-07 -1 549 614)"
              fill="url(#paint8_linear_3283_101175)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_3283_101175"
              x="1083"
              y="261"
              width="234"
              height="383"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="15"
                result="effect1_foregroundBlur_3283_101175"
              />
            </filter>
            <filter
              id="filter1_f_3283_101175"
              x="942"
              y="180"
              width="234"
              height="464"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="15"
                result="effect1_foregroundBlur_3283_101175"
              />
            </filter>
            <filter
              id="filter2_f_3283_101175"
              x="801"
              y="106"
              width="234"
              height="538"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="15"
                result="effect1_foregroundBlur_3283_101175"
              />
            </filter>
            <filter
              id="filter3_f_3283_101175"
              x="-46"
              y="261"
              width="234"
              height="383"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="15"
                result="effect1_foregroundBlur_3283_101175"
              />
            </filter>
            <filter
              id="filter4_f_3283_101175"
              x="95"
              y="180"
              width="234"
              height="464"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="15"
                result="effect1_foregroundBlur_3283_101175"
              />
            </filter>
            <filter
              id="filter5_f_3283_101175"
              x="236"
              y="106"
              width="234"
              height="538"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="15"
                result="effect1_foregroundBlur_3283_101175"
              />
            </filter>
            <filter
              id="filter6_f_3283_101175"
              x="377"
              y="54"
              width="235"
              height="590"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="15"
                result="effect1_foregroundBlur_3283_101175"
              />
            </filter>
            <filter
              id="filter7_f_3283_101175"
              x="659"
              y="54"
              width="235"
              height="590"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="15"
                result="effect1_foregroundBlur_3283_101175"
              />
            </filter>
            <filter
              id="filter8_f_3283_101175"
              x="519"
              y="0"
              width="233"
              height="644"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="15"
                result="effect1_foregroundBlur_3283_101175"
              />
            </filter>
            <linearGradient
              id="paint0_linear_3283_101175"
              x1="1374"
              y1="614"
              x2="1374"
              y2="937"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#340B05" />
              <stop offset="0.182709" stopColor="#0358F7" />
              <stop offset="0.283673" stopColor="#5092C7" />
              <stop offset="0.413484" stopColor="#E1ECFE" />
              <stop offset="0.586565" stopColor="#FFD400" />
              <stop offset="0.682722" stopColor="#FA3D1D" />
              <stop offset="0.802892" stopColor="#FD02F5" />
              <stop offset="1" stopColor="#FFC0FD" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_3283_101175"
              x1="1233"
              y1="614"
              x2="1233"
              y2="1018"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#340B05" />
              <stop offset="0.182709" stopColor="#0358F7" />
              <stop offset="0.283673" stopColor="#5092C7" />
              <stop offset="0.413484" stopColor="#E1ECFE" />
              <stop offset="0.586565" stopColor="#FFD400" />
              <stop offset="0.682722" stopColor="#FA3D1D" />
              <stop offset="0.802892" stopColor="#FD02F5" />
              <stop offset="1" stopColor="#FFC0FD" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_3283_101175"
              x1="1092"
              y1="614"
              x2="1092"
              y2="1092"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#340B05" />
              <stop offset="0.182709" stopColor="#0358F7" />
              <stop offset="0.283673" stopColor="#5092C7" />
              <stop offset="0.413484" stopColor="#E1ECFE" />
              <stop offset="0.586565" stopColor="#FFD400" />
              <stop offset="0.682722" stopColor="#FA3D1D" />
              <stop offset="0.802892" stopColor="#FD02F5" />
              <stop offset="1" stopColor="#FFC0FD" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_3283_101175"
              x1="87.0001"
              y1="0"
              x2="87.0001"
              y2="323"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#340B05" />
              <stop offset="0.182709" stopColor="#0358F7" />
              <stop offset="0.283673" stopColor="#5092C7" />
              <stop offset="0.413484" stopColor="#E1ECFE" />
              <stop offset="0.586565" stopColor="#FFD400" />
              <stop offset="0.682722" stopColor="#FA3D1D" />
              <stop offset="0.802892" stopColor="#FD02F5" />
              <stop offset="1" stopColor="#FFC0FD" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_3283_101175"
              x1="87.0001"
              y1="0"
              x2="87.0001"
              y2="404"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#340B05" />
              <stop offset="0.182709" stopColor="#0358F7" />
              <stop offset="0.283673" stopColor="#5092C7" />
              <stop offset="0.413484" stopColor="#E1ECFE" />
              <stop offset="0.586565" stopColor="#FFD400" />
              <stop offset="0.682722" stopColor="#FA3D1D" />
              <stop offset="0.802892" stopColor="#FD02F5" />
              <stop offset="1" stopColor="#FFC0FD" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_3283_101175"
              x1="87.0001"
              y1="0"
              x2="87.0001"
              y2="478"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#340B05" />
              <stop offset="0.182709" stopColor="#0358F7" />
              <stop offset="0.283673" stopColor="#5092C7" />
              <stop offset="0.413484" stopColor="#E1ECFE" />
              <stop offset="0.586565" stopColor="#FFD400" />
              <stop offset="0.682722" stopColor="#FA3D1D" />
              <stop offset="0.802892" stopColor="#FD02F5" />
              <stop offset="1" stopColor="#FFC0FD" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_3283_101175"
              x1="87.5002"
              y1="0"
              x2="87.5002"
              y2="530"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#340B05" />
              <stop offset="0.182709" stopColor="#0358F7" />
              <stop offset="0.283673" stopColor="#5092C7" />
              <stop offset="0.413484" stopColor="#E1ECFE" />
              <stop offset="0.586565" stopColor="#FFD400" />
              <stop offset="0.682722" stopColor="#FA3D1D" />
              <stop offset="0.802892" stopColor="#FD02F5" />
              <stop offset="1" stopColor="#FFC0FD" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_3283_101175"
              x1="951.5"
              y1="614"
              x2="951.5"
              y2="1144"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#340B05" />
              <stop offset="0.182709" stopColor="#0358F7" />
              <stop offset="0.283673" stopColor="#5092C7" />
              <stop offset="0.413484" stopColor="#E1ECFE" />
              <stop offset="0.586565" stopColor="#FFD400" />
              <stop offset="0.682722" stopColor="#FA3D1D" />
              <stop offset="0.802892" stopColor="#FD02F5" />
              <stop offset="1" stopColor="#FFC0FD" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_3283_101175"
              x1="86.5002"
              y1="0"
              x2="86.5002"
              y2="584"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#340B05" />
              <stop offset="0.182709" stopColor="#0358F7" />
              <stop offset="0.283673" stopColor="#5092C7" />
              <stop offset="0.413484" stopColor="#E1ECFE" />
              <stop offset="0.586565" stopColor="#FFD400" />
              <stop offset="0.682722" stopColor="#FA3D1D" />
              <stop offset="0.802892" stopColor="#FD02F5" />
              <stop offset="1" stopColor="#FFC0FD" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </>
  );
};

export default DiaRainbow;
