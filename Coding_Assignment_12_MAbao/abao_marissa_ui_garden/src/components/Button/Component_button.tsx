/**
 * Name: Marissa Abao
 * Submission Date: June 30, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_button.tsx
 * Description: This file defines the Button component, which supports a label, optional click handler, and a disabled state.
 * Styled-components are used for styling and to ensure responsiveness and reusability.
 */

import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Component_button.types';

// Define a styled button component with conditional styling based on the "disabled" prop
const StyledButton = styled.button<{ disabled?: boolean }>`
  box-sizing: border-box; // Ensures padding and border are included in total width/height
  padding: 10px 20px; // Add padding to make the button more clickable
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#007bff')}; // Gray if disabled, blue otherwise
  color: white; // White text color
  border: none; // No border
  border-radius: 4px; // Slightly rounded corners
  font-size: 1rem; // Standard font size
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')}; // Cursor changes to show interactivity
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)}; // Lower opacity when disabled
  transition: background-color 0.3s ease; // Smooth color transition on hover

  // Change background color on hover, only if the button is not disabled
  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#ccc' : '#0056b3')};
  }
`;

// Functional Button component that takes in props defined in ButtonProps
const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
  return (
    // Render the styled button with props passed down
    <StyledButton onClick={onClick} disabled={disabled}>
      {label}
    </StyledButton>
  );
};

export { Button }; // Export the component so it can be used in other parts of the project
