/**
 * Name: Marissa Abao
 * Submission Date: June 25, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_radio_button.stories.tsx
 * Description: This file defines Storybook stories for the RadioButton component.
 * It includes variations for default, disabled, and preselected states.
 */

// Import necessary types from Storybook for type-safe metadata and story definitions
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Component_radio_button from './Component_radio_button';
import { RadioButtonProps } from './Component_radio_button.types';

const meta: Meta<typeof Component_radio_button> = {
  title: 'Components/RadioButton',
  component: Component_radio_button,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;

type Story = StoryObj<typeof Component_radio_button>;

// Default radio button
export const Default: Story = {
  args: {
    label: 'Option A',
    name: 'radio-group',
    value: 'a',
  },
};

// Checked radio button
export const Checked: Story = {
  args: {
    label: 'Option B',
    name: 'radio-group',
    value: 'b',
    checked: true,
  },
};

// Disabled radio button
export const Disabled: Story = {
  args: {
    label: 'Option C',
    name: 'radio-group',
    value: 'c',
    disabled: true,
  },
};
