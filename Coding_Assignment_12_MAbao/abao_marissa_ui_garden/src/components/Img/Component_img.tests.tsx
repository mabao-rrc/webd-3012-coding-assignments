/**
 * Name: Marissa Abao
 * Submission Date: June 30, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_img.tests.tsx
 * Description: This file contains unit tests for the Img component using React Testing Library.
 * It verifies that the image is visible and properly styled when disabled.
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Img from './Component_img';

// A sample image source for testing
const testSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/600px-React-icon.svg.png';

describe('Img component', () => {
  // Test: The image should be rendered and visible
  it('renders the image and makes it visible', () => {
    render(<Img src={testSrc} alt="Test image" width={300} height={300} />);
    const imgElement = screen.getByAltText('Test image');
    expect(imgElement).toBeVisible();
    expect(imgElement).toHaveAttribute('src', testSrc);
  });

  // Test: The image should apply grayscale styling when disabled
  it('applies grayscale styling when disabled is true', () => {
    render(<Img src={testSrc} alt="Disabled image" width={300} height={300} disabled />);
    const imgElement = screen.getByAltText('Disabled image');
    expect(imgElement).toHaveStyle('filter: grayscale(100%)');
  });
});
