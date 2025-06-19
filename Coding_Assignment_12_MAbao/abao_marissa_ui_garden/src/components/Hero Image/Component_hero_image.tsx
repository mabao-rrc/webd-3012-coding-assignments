/**
 * Name: Marissa Abao
 * Submission Date: June 30, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_hero_image.tsx
 * Description: This file implements the HeroImage component. It displays a
 * full-width background image with optional overlay, heading, and subheading.
 */

import React from "react";
import { HeroImageProps } from "./Component_hero_image.types";

const Component_hero_image: React.FC<HeroImageProps> = ({
  imageUrl,
  altText = "",
  heading,
  subheading,
  overlay = false,
  height = "50vh",
}) => {
  return (
    <div
      className="relative w-full"
      style={{
        height,
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label={altText}
      role="img"
    >
      {overlay && (
        <div className="absolute inset-0 bg-black opacity-50"></div>
      )}

      {(heading || subheading) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10 p-4">
          {heading && <h1 className="text-3xl font-bold">{heading}</h1>}
          {subheading && <p className="text-lg mt-2">{subheading}</p>}
        </div>
      )}
    </div>
  );
};

export default Component_hero_image;
