import React from "react";
import clsx from "classnames";
import texts from "assets/styles/texts";
import gallery1 from "assets/images/gallery/gallery1.png";
import gallery2 from "assets/images/gallery/gallery2.png";
import gallery3 from "assets/images/gallery/gallery3.png";
import gallery4 from "assets/images/gallery/gallery4.jpg";
import gallery5 from "assets/images/gallery/gallery5.png";
import gallery6 from "assets/images/gallery/gallery6.png";
import gallery7 from "assets/images/gallery/gallery7.png";
import gallery8 from "assets/images/gallery/gallery8.jpg";
import largeGallery from "assets/images/gallery-large.webp";

const GalleryImage = ({ src, className }) => {
  return (
    <img
      className={clsx("absolute object-cover", className)}
      src={src}
      alt={"Berks Barber shop"}
    ></img>
  );
};

const Gallery = () => {
  return (
    <div
      className="bg-berk-white pt-[58px] min-h-[850px] xl:pt-[105px] xl:min-h-[1177px]"
      id="gallery"
    >
      <h4
        className={clsx(
          texts.berk_h4_bold,
          "text-berk-black text-center xl:text-[32px] xl:leading-10 mb-10"
        )}
      >
        Gallery
      </h4>
      <div className="xl:hidden relative mx-auto w-full max-w-[337px] xl:max-w-[950px] bg-black">
        <GalleryImage
          src={gallery1}
          className={
            "h-[134.43px] w-[180.49px] top-[82px] left-[13px] xl:top-[41px]"
          }
        />
        <GalleryImage
          src={gallery2}
          className={"h-[92.77px w-[127px] left-[206px] top-[36px]"}
        />
        <GalleryImage
          src={gallery8}
          className={"top-[244px] left-[13px] h-[121px] w-[181px]"}
        />
        <GalleryImage
          src={gallery6}
          className={"top-[153px] left-[230px] h-[65px] w-[90px]"}
        />
        <GalleryImage
          src={gallery3}
          className={"top-[465px] left-0 h-[181px] w-[181px]"}
        />
        <GalleryImage
          src={gallery4}
          className={"top-[256px] left-[230px] h-[97px] w-[110px]"}
        />
        <GalleryImage
          src={gallery7}
          className={"top-[401px] left-[240px] h-[95.23px] w-[110px]"}
        />
        <GalleryImage
          src={gallery5}
          className={"top-[550px]  left-[240px] h-[92px] w-[110px]"}
        />
      </div>
      <div className="hidden xl:flex items-center justify-center ">
        <img src={largeGallery} alt="Berks Gallery" />
      </div>
    </div>
  );
};

export default Gallery;
