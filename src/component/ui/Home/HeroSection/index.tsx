"use client";
import "./HeroSection.css";
import React, { useEffect, useState } from "react";
import slider from "../../../../assets/images/fresh-oil.jpg";
import slider2 from "../../../../assets/images/keya-soap.jpg";
import slider3 from "../../../../assets/images/sunsilk-shampoo.webp";
import slider4 from "../../../../assets/images/lux-soap.jpg";
import slider6 from "../../../../assets/images/salt.jpg";
import { KeenSliderInstance, useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { Button } from "antd";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      const keenSlider = slider as KeenSliderInstance<any, any, any>;
      if (keenSlider.details) {
        setCurrentSlide(keenSlider.details().relativeSlide as number);
      }
      // setCurrentSlide(slider.details().relativeSlide as number);
    },
    created() {
      setLoaded(true);
    },
    loop: true, // Enable looping
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 5000); // Change the interval duration as needed (2000 ms = 2 seconds)

    return () => clearInterval(interval);
  }, [instanceRef]);
  return (
    <div className="heroSectionContainer">
      <div className="flex items-center justify-center py-5" >
        <div className="sliderWrap">
          <div className="navigation-wrapper">
            <div ref={sliderRef} className="keen-slider">
              <div className="keen-slider__slide number-slide1">
                <div className="flex items-center sliderContentWrap">
                  <div className="sliderContent">
                    <h3 className="text-5xl font-semibold uppercase">
                    Fresh Oil
                    </h3>
                    <p className="my-3">very good products, you can buy</p>
                    <small>FROM</small>
                    <div className=" flex items-center ">
                      <sup className="text-2xl font-semibold">$</sup>
                      <span className="text-5xl font-bold">197</span>
                      <sup className="text-xl font-semibold">99</sup>
                    </div>
                    <Button>Start Buying</Button>
                  </div>
                  <Image src={slider} alt="slider" width="500" height="500" />
                </div>
              </div>
              <div className="keen-slider__slide number-slide1">
                <div className="flex items-center sliderContentWrap">
                  <div className="sliderContent">
                    <h3 className="text-5xl font-semibold uppercase">
                      Keya Soap
                    </h3>
                    <p className="my-3">very good products, you can buy</p>
                    <small>FROM</small>
                    <div className=" flex items-center ">
                      <sup className="text-2xl font-semibold">$</sup>
                      <span className="text-5xl font-bold">10</span>
                      <sup className="text-xl font-semibold">99</sup>
                    </div>
                    <button className="px-5 py-2 text-white bg-[#2251CF] border rounded-sm text-xl">
                      {" "}
                      Start Buying
                    </button>
                  </div>
                  <Image src={slider2} alt="slider" width="500" height="500" />
                </div>
              </div>
              <div className="keen-slider__slide number-slide1">
                <div className="flex items-center sliderContentWrap">
                  <div className="sliderContent">
                    <h3 className="text-5xl font-semibold uppercase">
                      Sunsilk Shampoo
                    </h3>
                    <p className="my-3">very good products, you can buy</p>
                    <small>FROM</small>
                    <div className=" flex items-center ">
                      <sup className="text-2xl font-semibold">$</sup>
                      <span className="text-5xl font-bold">7</span>
                      <sup className="text-xl font-semibold">99</sup>
                    </div>
                    <button className="px-5 py-2 text-white bg-[#2251CF] border rounded-sm text-xl">
                      {" "}
                      Start Buying
                    </button>
                  </div>
                  <Image src={slider3} alt="slider" width="500" height="500" />
                </div>
              </div>
              <div className="keen-slider__slide number-slide1">
                <div className="flex items-center sliderContentWrap">
                  <div className="sliderContent">
                    <h3 className="text-5xl font-semibold uppercase">
                      Lux Soap
                    </h3>
                    <p className="my-3">very good products, you can buy</p>
                    <small>FROM</small>
                    <div className=" flex items-center ">
                      <sup className="text-2xl font-semibold">$</sup>
                      <span className="text-5xl font-bold">7</span>
                      <sup className="text-xl font-semibold">99</sup>
                    </div>
                    <button className="px-5 py-2 text-white bg-[#2251CF] border rounded-sm text-xl">
                      {" "}
                      Start Buying
                    </button>
                  </div>
                  <Image src={slider4} alt="slider" width="500" height="500" />
                </div>
              </div>
              <div className="keen-slider__slide number-slide1">
                <div className="flex items-center sliderContentWrap">
                  <div className="sliderContent">
                    <h3 className="text-5xl font-semibold uppercase">
                      fresh salt
                    </h3>
                    <p className="my-3">very good products, you can buy</p>
                    <small>FROM</small>
                    <div className=" flex items-center ">
                      <sup className="text-2xl font-semibold">$</sup>
                      <span className="text-5xl font-bold">9</span>
                      <sup className="text-xl font-semibold">99</sup>
                    </div>
                    <button className="px-5 py-2 text-white bg-[#2251CF] border rounded-sm text-xl">
                      {" "}
                      Start Buying
                    </button>
                  </div>
                  <Image src={slider6} alt="slider" width="500" height="500" />
                </div>
              </div>      
            </div>
            {loaded && instanceRef.current && (
              <>
                <Arrow
                  left
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                  disabled={currentSlide === 0}
                />

                <Arrow
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                  disabled={
                    currentSlide ===
                    instanceRef.current.track.details.slides.length - 1
                  }
                />
              </>
            )}
          </div>
          {loaded && instanceRef.current && (
            // <div className="dots">
            //   {[
            //     ...Array(
            //       instanceRef.current.track.details.slides.length
            //     ).keys(),
            //   ].map((idx) => {
            //     return (
            //       <button
            //         key={idx}
            //         onClick={() => {
            //           instanceRef.current?.moveToIdx(idx);
            //         }}
            //         className={"dot" + (currentSlide === idx ? " active" : "")}
            //       ></button>
            //     );
            //   })}
            // </div>

            <div className="dots">
            {Array.from({ length: instanceRef.current.track.details.slides.length }, (_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            ))}
          </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
