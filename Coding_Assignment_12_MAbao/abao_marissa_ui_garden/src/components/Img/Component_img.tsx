/**
 * Name: Marissa Abao
 * Submission Date: June 30, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_img.tsx
 * Description: Renders an image element with optional styling and a disabled state.
 * The component accepts props such as source, alt text, dimensions, and whether it's disabled.
 */

import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Component_img.types';

// Styled image component that visually changes when disabled
const StyledImage = styled.img<{ disabled?: boolean }>`
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};         // Dim image if disabled
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')}; // Prevent interaction if disabled
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')}; // Show 'not-allowed' cursor if disabled
  display: block;                     // Ensure image doesn't behave like inline element
  max-width: 100%;                   // Make image responsive and scale with container
`;

/**
 * Img functional component
 * @param {string} src - The image source URL
 * @param {string} alt - Alternative text for accessibility
 * @param {string | number} width - Optional fixed width
 * @param {string | number} height - Optional fixed height
 * @param {boolean} disabled - If true, apply disabled visual state
 */
const Img: React.FC<ImgProps> = ({ src, alt, width, height, disabled }) => {
  return (
    <StyledImage
      src={src}             // The image source URL
      alt={alt}             // Alt text for screen readers and fallback
      width={width}         // Optional width (number or string)
      height={height}       // Optional height (number or string)
      disabled={disabled}   // Apply disabled styles if true
    />
  );
};

export default Img;
