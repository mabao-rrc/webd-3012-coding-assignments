/**
 * Name: Marissa Abao
 * Submission Date: June 25, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Label.tsx
 * Description: This file defines the Label component, which displays text associated
 * with a form field or element. Styled-components are used for consistent styling
 * and to support reusability and responsiveness.
 */

import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

// Define a styled <label> element with consistent spacing and styling
const StyledLabel = styled.label`
  display: inline-block;         // Allows margin/padding to apply properly
  margin-bottom: 8px;            // Adds space below the label
  font-weight: 500;              // Semi-bold text
  font-size: 1rem;               // Standard font size
  color: #333;                   // Dark gray for accessibility
`;

// Functional Label component that takes in props defined in LabelProps
const Label: React.FC<LabelProps> = ({ htmlFor, text }) => {
  return (
    // Render the styled label and link it to the corresponding input using htmlFor
    <StyledLabel htmlFor={htmlFor}>
      {text}
    </StyledLabel>
  );
};

export default Label; // Export the component so it can be used in other parts of the project
