/**
 * Name: Marissa Abao
 * Submission Date: June 25, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Label.tests.tsx
 * Description: This file contains unit tests for the Label component using React Testing Library.
 * The tests verify that the label renders correctly and is associated with a form field when the htmlFor prop is provided.
 */

import React from 'react';
// Import testing utilities from React Testing Library
import { render, screen } from '@testing-library/react';
// Import custom Jest matchers for better assertions
import '@testing-library/jest-dom';
// Import the Label component to test
import Label from './Label';

describe('Label component', () => {
  // Test that the label renders with the correct text
  it('renders the label with the correct text', () => {
    render(<Label htmlFor="fullName" text="Full Name" />);
    const labelElement = screen.getByText('Full Name');
    expect(labelElement).toBeVisible(); // Assert that the label is visible
  });

  // Test that the label is properly associated with an input field using htmlFor
  it('links to the correct input field when htmlFor is provided', () => {
    render(<Label htmlFor="email" text="Email Address" />);
    const labelElement = screen.getByText('Email Address');
    expect(labelElement).toHaveAttribute('for', 'email'); // Checks if the "for" attribute is correctly set
  });
});
