/**
 * Name: Marissa Abao
 * Submission Date: June 30, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_text.tests.tsx
 * Description: This file contains unit tests for the Text component using React Testing Library.
 * The tests verify correct rendering of the text and styling based on the provided props.
 */

import React from 'react';
// Import testing utilities from React Testing Library
import { render, screen } from '@testing-library/react';
// Import custom Jest matchers for better assertions
import '@testing-library/jest-dom';
// Import the component to test
import Text from './Component_text';

// Group related tests for the Text component
describe('Text component', () => {
  // Test that the text content renders correctly
  it('renders the text content correctly', () => {
    render(<Text text="Hello World" />);
    const textElement = screen.getByText('Hello World');
    expect(textElement).toBeVisible(); // Asserts that the text is visible in the DOM
  });

  // Test custom styling props (size, color, weight)
  it('applies custom font size, color, and weight', () => {
    render(
      <Text
        text="Styled Text"
        size="18px"
        color="#ff6600"
        weight="bold"
      />
    );
    const textElement = screen.getByText('Styled Text');
    expect(textElement).toHaveStyle('font-size: 18px');
    expect(textElement).toHaveStyle('color: #ff6600');
    expect(textElement).toHaveStyle('font-weight: bold');
  });

  // Test that default styles are used if props are not provided
  it('falls back to default styles when no props are provided', () => {
    render(<Text text="Default Text" />);
    const textElement = screen.getByText('Default Text');
    expect(textElement).toHaveStyle('font-size: 1rem');
    expect(textElement).toHaveStyle('color: #000');
    expect(textElement).toHaveStyle('font-weight: normal');
  });
});
