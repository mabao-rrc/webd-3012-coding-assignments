/**
 * Name: Marissa Abao
 * Submission Date: June 30, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_img.stories.tsx
 * Description: This file defines Storybook stories for the Img component,
 * including default and disabled image display examples.
 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Img from './Component_img';

const meta: Meta<typeof Img> = {
  title: 'Components/Img',
  component: Img,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/600px-React-icon.svg.png',
    alt: 'React Logo from Wikimedia',
    width: 300,
    height: 300,
  },
};

export const Disabled: Story = {
  args: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/600px-React-icon.svg.png',
    alt: 'Disabled image',
    width: 300,
    height: 300,
    disabled: true,
  },
};
