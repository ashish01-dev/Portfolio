"use client"
import Image from "next/image"
import React from "react"

const Button = () => {
  return (
    <div className="select-none flex justify-center items-center w-full h-screen cursor-pointer">
      <div className="relative size-[400px] group">
        <Image
          className="w-full h-full"
          src="/assets/Images/lab/button/base.svg"
          alt="base image"
          width={400}
          height={400}
        />
        <Image
          className="absolute top-0 left-0 w-full h-full brightness-100 transition-all duration-200 ease-[linear(0, 0.008 1.1%, 0.031 2.2%, 0.129 4.8%, 0.257 7.2%, 0.671 14.2%, 0.789 16.5%, 0.881 18.6%, 0.957 20.7%, 1.019 22.9%, 1.063 25.1%, 1.094 27.4%, 1.114 30.7%, 1.112 34.5%, 1.018 49.9%, 0.99 59.1%, 1)] group-hover:mt-[3px] group-active:mt-[40px]"
          src="/assets/Images/lab/button/button.svg"
          alt="button image"
          width={400}
          height={400}
        />
        <svg
          className="absolute top-0 left-0 w-full h-full mix-blend-color transition-all duration-200 ease-[linear(0, 0.008 1.1%, 0.031 2.2%, 0.129 4.8%, 0.257 7.2%, 0.671 14.2%, 0.789 16.5%, 0.881 18.6%, 0.957 20.7%, 1.019 22.9%, 1.063 25.1%, 1.094 27.4%, 1.114 30.7%, 1.112 34.5%, 1.018 49.9%, 0.99 59.1%, 1)] group-hover:mt-[3px] group-active:mt-[40px]"
          width="400"
          height="400"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M165.675 45.467C175.026 44.5675 185.116 47.156 197.282 51.1232C232.426 62.5832 267.932 74.4187 307.642 86.6369C312.212 88.0431 315.403 89.8794 317.44 92.1486C318.511 93.341 319.241 94.6327 319.691 96.0011C319.738 96.0238 319.777 96.0473 319.808 96.0734C323.933 99.6423 327.485 108.542 328.746 112.546C333.559 127.417 343.667 158.667 345.593 164.707C347.829 171.722 351.843 177.846 347.437 185.285C347.318 185.578 347.187 185.873 347.042 186.169L346.987 186.005C346.768 186.338 346.534 186.675 346.28 187.013C340.092 195.249 293.679 246.724 273.395 270.745C253.112 294.767 245.626 307.362 209.871 297.41C174.117 287.459 88.3902 254.694 68.1503 244.665C49.7396 235.543 50.9605 229.908 53.7108 219.613C55.9113 211.377 69.9838 160.36 76.745 135.881C76.8387 135.864 76.9324 135.846 77.0263 135.828C77.2577 135.071 77.5382 134.315 77.8554 133.559C78.637 130.76 80.1703 127.902 81.913 124.901C87.4843 115.306 101.154 100.903 107.267 94.9152L112.901 88.7316C117.228 83.8274 124.233 75.8678 138.572 60.5568C147.707 50.8031 156.252 46.3734 165.675 45.467Z"
            fill="currentColor"
          />
        </svg>
        <Image
          className="absolute top-0 left-0 w-full h-full"
          src="/assets/Images/lab/button/cover.svg"
          alt="cover image"
          width={400}
          height={400}
        />
        <p
          className="font-sans text-[2rem] font-medium text-white whitespace-nowrap absolute w-full h-full top-0 left-0 text-center content-center m-0 p-0 z-10 transition-all duration-200 ease-[linear(0, 0.008 1.1%, 0.031 2.2%, 0.129 4.8%, 0.257 7.2%, 0.671 14.2%, 0.789 16.5%, 0.881 18.6%, 0.957 20.7%, 1.019 22.9%, 1.063 25.1%, 1.094 27.4%, 1.114 30.7%, 1.112 34.5%, 1.018 49.9%, 0.99 59.1%, 1)] group-hover:mt-[3px] group-active:mt-[40px]"
          style={{
            transform:
              "rotateY(0deg) rotateX(52.3deg) rotateZ(29deg) translateY(-28%) translateX(-16%)",
          }}
        >
          Button
        </p>
      </div>
    </div>
  )
}

export default Button
