/**
 * Name: Marissa Abao
 * Submission Date: June 30, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_text.types.tsx
 * Description: This file defines the prop types for the Text component,
 * allowing for customizable size, weight, color, and content.
 */

export interface TextProps {
  /**
   * The actual text content to be displayed.
   */
  text: string;

  /**
   * The font size of the text (e.g., '14px', '1rem', 'large').
   */
  size?: string;

  /**
   * The font weight of the text (e.g., 'normal', 'bold', '500').
   */
  weight?: string;

  /**
   * The color of the text (e.g., '#333', 'blue').
   */
  color?: string;
}
