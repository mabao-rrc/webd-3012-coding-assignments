/**
 * Name: Marissa Abao
 * Submission Date: June 30, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_hero_image.types.tsx
 * Description: This file defines prop types for the HeroImage component,
 * including optional settings for overlay, height, and text content.
 */

export interface HeroImageProps {
  imageUrl: string; // URL of the background image
  altText?: string; // Optional alt text for accessibility
  heading?: string; // Optional heading text over the image
  subheading?: string; // Optional subheading text over the image
  overlay?: boolean; // Whether to show a dark overlay
  height?: string; // Custom height (e.g., "60vh", "400px")
}
