/**
 * Name: Marissa Abao
 * Submission Date: June 30, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_hero_image.stories.tsx
 * Description: This file defines Storybook stories for the HeroImage component.
 * It includes default and no-overlay variations with background image, headings,
 * and optional overlay styling.
 */

// Import necessary types for Storybook metadata and story definitions
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Component_hero_image from './Component_hero_image';

const meta: Meta<typeof Component_hero_image> = {
  title: "Components/HeroImage",
  component: Component_hero_image,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Component_hero_image>;

export const Basic: Story = {
  args: {
    imageUrl: "https://source.unsplash.com/1600x900/?nature",
    altText: "Nature landscape",
    heading: "Welcome to Nature",
    subheading: "Experience the beauty of the outdoors",
    overlay: true,
    height: "60vh",
  },
};

export const WithoutOverlay: Story = {
  args: {
    imageUrl: "https://source.unsplash.com/1600x900/?city",
    heading: "Urban Adventure",
    subheading: "Explore the city lights",
    overlay: false,
  },
};
