/**
 * Name: Marissa Abao
 * Submission Date: June 30, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_button.tests.tsx
 * Description: This file contains unit tests for the Button component using React Testing Library.
 * It checks whether the button is visible and whether it properly reflects the disabled state both visually and functionally.
 */

import React from 'react';
// Importing necessary functions from React Testing Library
import { render, screen } from '@testing-library/react';
// Adds custom matchers like toBeVisible, toBeDisabled, etc.
import '@testing-library/jest-dom';
// Import the Button component we are testing
import { Button } from './Component_button';

describe('Button component', () => {
  // First test: verifies that the button is rendered with the correct label
  it('renders the button with the correct label', () => {
    // Render the Button component with a specific label
    render(<Button label="Click Me" />);
    // Select the button using the label text
    const buttonElement = screen.getByText('Click Me');
    // Assert that the button is present and visible in the document
    expect(buttonElement).toBeVisible();
  });

  // Second test: verifies the button reflects the disabled state correctly
  it('applies disabled styles when the button is disabled', () => {
    // Render the Button component with the disabled prop set to true
    render(<Button label="Disabled" disabled />);
    // Select the button using the label text
    const buttonElement = screen.getByText('Disabled');

    // Assert that the button is functionally disabled (can't be clicked)
    expect(buttonElement).toBeDisabled();

    // Assert that the correct disabled styling is applied
    // This checks for the gray background color and the "not-allowed" cursor
    expect(buttonElement).toHaveStyle('background-color: #ccc');
    expect(buttonElement).toHaveStyle('cursor: not-allowed');
  });
});
