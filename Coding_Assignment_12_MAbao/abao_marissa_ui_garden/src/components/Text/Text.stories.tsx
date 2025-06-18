/**
 * Name: Marissa Abao
 * Submission Date: June 25, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Text.stories.tsx
 * Description: This file contains Storybook stories for the Text component.
 * It showcases how the Text component appears with different sizes, weights, and colors.
 */

// Import necessary types from Storybook for type-safe metadata and story definitions
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Text from './Text';

// Define metadata for the Text component in Storybook
const meta: Meta<typeof Text> = {
  title: 'Components/Text',       // How it appears in the Storybook sidebar
  component: Text,                // The actual Text component
  tags: ['autodocs'],             // Enables auto-generated documentation
};

export default meta;

// Define the story type for type-safe usage
type Story = StoryObj<typeof Text>;

// Default text story
export const Default: Story = {
  args: {
    text: 'Hello World',
  },
};

// Custom size and weight
export const CustomSizeWeight: Story = {
  args: {
    text: 'Bold Large Text',
    size: '24px',
    weight: 'bold',
  },
};

// Colored text
export const ColoredText: Story = {
  args: {
    text: 'This is blue text.',
    color: 'blue',
  },
};
