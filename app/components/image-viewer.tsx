import React, { Component, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { Button } from "./button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
export enum ImageLoadingStage { LOADING, LOADED, FAILED };

type ImageViewerProps = {
  imageList: any[],
  initIndex?: number,
  title?: string,
  isMini?: boolean,
  open: boolean,
  onClose: () => any,
};
export const FullScreenImageSwiper = ({ imageList, initIndex = 1, isMini = false, open, onClose }: ImageViewerProps) => {
  const [attachments, setAttachments] = useState<any[]>([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [imageLoadingStage, setImageLoadingStage] = useState<ImageLoadingStage>(ImageLoadingStage.LOADING);
  const [currentIndex, setCurrentIndex] = useState<string>("1");
  const [swiper, setSwiper] = useState(null);

  const prevButtonRef = React.useRef<HTMLButtonElement>(null);
  const nextButtonRef = React.useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) setAttachments(imageList);
    else setSwiper(null);
  }, [open, imageList]);

  useEffect(() => {
    if (swiper && attachments.length > 0) {
      swipeToImgByIndex(initIndex);

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'ArrowLeft') prevButtonRef.current?.click();
        else if (event.key === 'ArrowRight') nextButtonRef.current?.click();
      };

      const handleWheel = (event: WheelEvent) => {
        if (event.deltaY < 0) prevButtonRef.current?.click();
        else if (event.deltaY > 0) nextButtonRef.current?.click();
      };

      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('wheel', handleWheel);

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('wheel', handleWheel);
      };
    }
  }, [swiper, attachments]);


  const swipeToImgByIndex = (index: number) => {
    const clampedIndex = Math.max(1, Math.min(index, attachments.length)); // Clamping index to valid range
    setCurrentIndex(`${clampedIndex}`);
    // @ts-ignore
    if (swiper) swiper.slideToLoop(clampedIndex - 1);
  };



  return open && (
    <>
      <div className="overflow-auto">
        <div className="px-10">
          <div className="text-white flex items-center justify-between py-6">
            <div />
            {/* {!IsEmptyStr(title) ? <p className="text-center text-white text-2xl bg-[#00000096] p-2 rounded-md">{title}</p> : <Box />} */}
            <button className="rounded-full text-white bg-themeGreen p-2 h-14 w-14 flex items-center justify-center can-hover:hover:opacity-75 z-[100]" onClick={onClose}>
              <X fontSize="large" />
            </button>
          </div>
          <div className="absolute top-1/2 translate-y-neg-1/2 left-0 right-0">
            <div className="flex items-center justify-center">
              <button ref={prevButtonRef} className={`text-white bg-[#00000096] rounded-md pr-1 py-6 ${+currentIndex > 1 ? "can-hover:hover:opacity-75" : "opacity-50"}`} onClick={() => swipeToImgByIndex(+currentIndex - 1)}>
                <ChevronLeft />
              </button>
              <Swiper
                style={{ margin: isMini ? "0 1rem" : "0 2rem" }}
                className={`${isMini ? "w-screen" : "w-[40rem]"} h-[85vh]`}
                thumbs={{ swiper: thumbsSwiper }}
                onSlideChangeTransitionEnd={(swiper) => setCurrentIndex(`${swiper.realIndex + 1}`)}
                // @ts-ignore
                onSwiper={setSwiper}
              >
                {attachments.map((img: any, i: number) => (
                  <SwiperSlide key={`img_main_${i}`} className="relative">
                   <img src={img.url} className="h-full w-full object-contain" style={{ filter: "brightness(75%)" }} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <button ref={nextButtonRef} className={`text-white bg-[#00000096] rounded-md pl-1 py-6 ${+currentIndex < attachments.length ? "can-hover:hover:opacity-75" : "opacity-50"} can-hover:hover:opacity-75`}
                onClick={() => swipeToImgByIndex(+currentIndex + 1)}>
                {/* <ChevronRight sx={{ fontSize: isMini ? "1rem" : "3rem" }} /> */}
              </button>

            </div>
            <div className="text-white flex items-center justify-between pt-4">
              <div className="flex justify-center">
                <div className="flex items-center py-2 px-3 bg-[#00000096] text-white w-fit mb-2 rounded-md pagination">
                  <input type="number" value={currentIndex} style={{ paddingBottom: 1 }} onChange={(e) => {
                    let newIndex: any = +e.target.value;
                    if (newIndex <= 0 || newIndex > attachments.length) newIndex = 1;
                    swipeToImgByIndex(newIndex);
                  }} className="text-white bg-transparent rounded-sm text-center border border-white w-8 max-w-fit" />
                  <p className="ml-2" style={{ marginTop: -2 }}>out of {attachments.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};