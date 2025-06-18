/**
 * Name: Marissa Abao
 * Submission Date: June 25, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_dropdown.tsx
 * Description: This file defines the Dropdown component, a reusable select menu
 * that supports custom options, a default label, and a disabled state.
 */

import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Component_dropdown.types';

// Styled select element with conditional styling for disabled state
const StyledSelect = styled.select<{ disabled?: boolean }>`
  padding: 10px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: ${({ disabled }) => (disabled ? '#eee' : '#fff')};
  color: ${({ disabled }) => (disabled ? '#999' : '#000')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s ease;
`;

// Dropdown functional component
const Dropdown: React.FC<DropdownProps> = ({ options, onSelect, disabled, defaultLabel }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onSelect) {
      onSelect(e.target.value);
    }
  };

  return (
    <StyledSelect onChange={handleChange} disabled={disabled} data-testid="dropdown">
      {defaultLabel && <option value="">{defaultLabel}</option>}
      {options.map((option) => (
        <option key={option.value} value={option.value} data-testid={`option-${option.value}`}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;
