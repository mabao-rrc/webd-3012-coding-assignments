/**
 * Name: Marissa Abao
 * Submission Date: June 30, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_card.stories.tsx
 * Description: Defines interactive stories for the Card component using Storybook.
 * Includes default, disabled, and image variation examples.
 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Component_card from './Component_card';

// Default export with metadata
const meta: Meta<typeof Component_card> = {
  title: 'Components/Card',
  component: Component_card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Component_card>;

// Default story for Card
export const Default: Story = {
  args: {
    title: 'Card Title',
    content: 'This is a simple card with title and content.',
  },
};

// Story with image
export const WithImage: Story = {
  args: {
    title: 'Card with Image',
    content: 'Here is a card that includes an image at the top.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/640px-PNG_transparency_demonstration_1.png',
  },
};

// Disabled card story
export const Disabled: Story = {
  args: {
    title: 'Disabled Card',
    content: 'This card is disabled and cannot be interacted with.',
    disabled: true,
  },
};
