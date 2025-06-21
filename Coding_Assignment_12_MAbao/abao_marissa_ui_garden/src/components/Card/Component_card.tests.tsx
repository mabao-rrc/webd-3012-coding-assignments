/**
 * Name: Marissa Abao
 * Submission Date: June 30, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_card.test.tsx
 * Description: Unit tests for the Card component using React Testing Library.
 * Tests visibility of title, content, image rendering, and disabled state.
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from './Component_card';

describe('Card', () => {
  it('renders the card title and content', () => {
    render(<Card title="Test Title" content="Test content goes here." />);
    expect(screen.getByText('Test Title')).toBeVisible();
    expect(screen.getByText('Test content goes here.')).toBeVisible();
  });

  it('renders with image if imageUrl is provided', () => {
    render(
      <Card
        title="Card with Image"
        content="Card content"
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/640px-PNG_transparency_demonstration_1.png"
      />
    );
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute(
      'src',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/640px-PNG_transparency_demonstration_1.png'
    );
  });

  it('applies disabled styling when disabled prop is true', () => {
    render(
      <Card title="Disabled Card" content="This card is disabled." disabled />
    );
    const card = screen.getByText('Disabled Card').closest('div');
    expect(card).toHaveStyle('opacity: 0.5');
  });
});
