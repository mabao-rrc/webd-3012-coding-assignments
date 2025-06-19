/**
 * Name: Marissa Abao
 * Submission Date: June 30, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_radio_button.tests.tsx
 * Description: This file contains unit tests for the RadioButton component using React Testing Library.
 * It checks for visibility and verifies the visual state when the component is disabled.
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Component_radio_button from './Component_radio_button';

// Test data for the component
const props = {
  label: 'Option 1',
  name: 'group1',
  value: 'opt1',
};

describe('RadioButton component', () => {
  // Test: Radio button should be visible
  it('renders the radio button and displays the label', () => {
    render(<Component_radio_button {...props} />);
    const radio = screen.getByRole('radio');
    const label = screen.getByText('Option 1');
    expect(radio).toBeVisible();
    expect(label).toBeVisible();
  });

  // Test: Disabled radio button should be visually disabled
  it('disables the radio button when the disabled prop is passed', () => {
    render(<Component_radio_button {...props} disabled />);
    const radio = screen.getByRole('radio');
    expect(radio).toBeDisabled();
  });
});
