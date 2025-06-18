/**
 * Name: Marissa Abao
 * Submission Date: June 25, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Label.stories.tsx
 * Description: This file contains Storybook stories for the Label component.
 * It demonstrates how the Label appears and behaves with different props, including linking to form elements via htmlFor.
 */

// Import necessary types from Storybook for type-safe metadata and story definitions
import type { Meta, StoryObj } from '@storybook/react-webpack5';
// Import the actual Label component
import Label from './Label';

// Define metadata for the Label component in Storybook
const meta: Meta<typeof Label> = {
  title: 'Components/Label',       // How it appears in the Storybook sidebar
  component: Label,                // The actual Label component
  tags: ['autodocs'],              // Enables auto-generated documentation
};

export default meta;

// Define the story type using LabelProps
type Story = StoryObj<typeof Label>;

// Default label story with basic text
export const Default: Story = {
  args: {
    text: 'Username',              // Simple label with no htmlFor
  },
};

// Label linked to an input field using htmlFor
export const WithHtmlFor: Story = {
  args: {
    htmlFor: 'email-input',        // Matches an ID in a hypothetical input field
    text: 'Email Address',
  },
};
