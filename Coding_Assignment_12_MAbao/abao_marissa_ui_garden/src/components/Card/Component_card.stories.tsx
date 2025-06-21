/**
 * Name: Marissa Abao
 * Submission Date: June 30, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_card.stories.tsx
 * Description: Storybook stories for the Card component showing default,
 * image, and disabled variations.
 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Card } from './Component_card'; // ⬅️ named import matches `export { Card }`

/* ---------- Storybook metadata ---------- */
const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

/* ---------- Stories ---------- */

// 1️⃣ Default card
export const Default: Story = {
  args: {
    title: 'Card Title',
    content: 'This is a simple card with title and content.',
  },
};

// 2️⃣ Card with a top image
export const WithImage: Story = {
  args: {
    title: 'Card with Image',
    content: 'Here is a card that includes an image at the top.',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/640px-PNG_transparency_demonstration_1.png',
  },
};

// 3️⃣ Disabled (non-interactive) card
export const Disabled: Story = {
  args: {
    title: 'Disabled Card',
    content: 'This card is disabled and cannot be interacted with.',
    disabled: true,
  },
};
