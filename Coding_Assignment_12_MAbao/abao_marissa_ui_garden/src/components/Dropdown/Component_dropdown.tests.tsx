/**
 * Name: Marissa Abao
 * Submission Date: June 25, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_dropdown.tests.tsx
 * Description: This file contains unit tests for the Dropdown component using React Testing Library.
 * It checks for visibility and verifies visual changes when the component is disabled.
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Dropdown from './Component_dropdown';

// Sample options used across tests
const sampleOptions = [
  { label: 'First', value: 'first' },
  { label: 'Second', value: 'second' },
];

describe('Dropdown component', () => {
  // Test: Dropdown should be visible in the DOM
  it('renders the dropdown and makes it visible', () => {
    render(<Dropdown options={sampleOptions} defaultLabel="Select an item" />);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeVisible();
  });

  // Test: Dropdown should be disabled when the prop is true
  it('applies disabled attribute when disabled prop is passed', () => {
    render(<Dropdown options={sampleOptions} defaultLabel="Disabled dropdown" disabled />);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeDisabled();
  });
});
