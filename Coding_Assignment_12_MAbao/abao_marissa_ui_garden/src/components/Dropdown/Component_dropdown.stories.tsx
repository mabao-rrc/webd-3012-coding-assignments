/**
 * Name: Marissa Abao
 * Submission Date: June 30, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_dropdown.stories.tsx
 * Description: This file defines Storybook stories for the Dropdown component.
 * It includes variations for default, disabled, and custom label states.
 */

// Import necessary types from Storybook for type-safe metadata and story definitions
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Dropdown from './Component_dropdown';
import { DropdownProps } from './Component_dropdown.types';

// Storybook metadata
const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    onSelect: { action: 'selected' },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

// Sample dropdown options
const sampleOptions: DropdownProps['options'] = [
  { label: 'Option 1', value: 'opt1' },
  { label: 'Option 2', value: 'opt2' },
  { label: 'Option 3', value: 'opt3' },
];

// Default dropdown story
export const Default: Story = {
  args: {
    options: sampleOptions,
    defaultLabel: 'Select an option',
  },
};

// Disabled dropdown story
export const Disabled: Story = {
  args: {
    options: sampleOptions,
    defaultLabel: 'Dropdown disabled',
    disabled: true,
  },
};
