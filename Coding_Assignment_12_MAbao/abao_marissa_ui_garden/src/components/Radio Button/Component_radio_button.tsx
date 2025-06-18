/**
 * Name: Marissa Abao
 * Submission Date: June 25, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_radio_button.tsx
 * Description: Implements the RadioButton component using Styled Components. 
 * Supports label, value, checked state, change handler, and disabled state.
 */

import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './Component_radio_button.types';

// Styled label to wrap the radio and label text
const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  user-select: none;
  color: #333;

  &:has(input:disabled) {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

// Styled radio input
const StyledRadio = styled.input`
  margin-right: 0.5rem;
  accent-color: #007bff;
`;

// Component definition
const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  checked,
  disabled,
  onChange,
}) => {
  return (
    <StyledLabel>
      <StyledRadio
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        aria-checked={checked}
        aria-disabled={disabled}
      />
      {label}
    </StyledLabel>
  );
};

export default RadioButton;
