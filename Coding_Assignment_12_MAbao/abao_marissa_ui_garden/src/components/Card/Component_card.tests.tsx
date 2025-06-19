/**
 * Name: Marissa Abao
 * Submission Date: June 30, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_card.tests.tsx
 * Description: This file contains unit tests for the Card component using React Testing Library.
 * It verifies that the component renders correctly and reflects visual changes when disabled.
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Component_card from './Component_card';

describe('Component_card', () => {
  // Test: Card should be visible with its title and content
  it('renders the card with provided title and content', () => {
    render(<Component_card title="Card Title" content="This is a card content" />);
    expect(screen.getByText('Card Title')).toBeInTheDocument();
    expect(screen.getByText('This is a card content')).toBeInTheDocument();
  });

  // Test: Card should show visual disabled state
  it('has a disabled class when the disabled prop is passed', () => {
    render(<Component_card title="Card Title" content="Disabled content" disabled />);
    const card = screen.getByRole('region'); // Assuming role is set as 'region' in component
    expect(card).toHaveClass('disabled');
  });
});
