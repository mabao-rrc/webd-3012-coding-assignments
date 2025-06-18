/**
 * Name: Marissa Abao
 * Submission Date: June 25, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_button.stories.tsx
 * Description: This file contains Storybook stories for the Button component.
 * It demonstrates how the Button behaves in different states like default and disabled.
 */

// Import necessary types from Storybook for type-safe metadata and story definitions
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Button from './Component_button';

// Define metadata for the Button component in Storybook
const meta: Meta<typeof Button> = {
  title: 'Components/Button',      // This defines the folder/component name in Storybook sidebar
  component: Button,               // The component we're creating stories for
  tags: ['autodocs'],              // Enables auto-generated docs if applicable
  argTypes: {
    // This allows us to simulate the onClick event in the Storybook UI
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

// Default button story
export const Default: Story = {
  args: {
    label: 'Click Me',             // Default label text for the button
  },
};

// Disabled button story
export const Disabled: Story = {
  args: {
    label: 'Disabled Button',      // Label for the disabled button
    disabled: true,                // Sets the button to disabled state
  },
};
