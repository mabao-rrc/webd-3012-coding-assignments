/**
 * Name: Marissa Abao
 * Submission Date: June 30, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_text.tsx
 * Description: This file defines the Text component, which renders styled text
 * with customizable size, color, and font weight using styled-components.
 */

import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Component_text.types';

// Define a styled <span> element with only the style-related props
const StyledText = styled.span<{
  size?: string;
  color?: string;
  weight?: string;
}>`
  font-size: ${({ size }) => size || '1rem'};         // Default to 1rem
  color: ${({ color }) => color || '#000'};          // Default to black
  font-weight: ${({ weight }) => weight || 'normal'}; // Default to normal
`;

// Functional Text component that uses the "text" prop for content
const Text: React.FC<TextProps> = ({ text, size, color, weight }) => {
  return <StyledText size={size} color={color} weight={weight}>{text}</StyledText>;
};

export default Text;
