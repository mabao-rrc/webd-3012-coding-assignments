/**
 * Name: Marissa Abao
 * Submission Date: June 30, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_img.types.tsx
 * Description: Defines the type structure for the Img component,
 * including props such as src, alt text, width, height, and disabled state.
 */

export interface ImgProps {
  src: string; // Required: image source URL
  alt: string; // Required: alternative text for accessibility
  width?: string | number; // Optional: image width
  height?: string | number; // Optional: image height
  disabled?: boolean; // Optional: if true, the image is visually dimmed and non-interactive
}
