/**
 * Name: Marissa Abao
 * Submission Date: June 25, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Table.stories.tsx
 * Description: This file contains Storybook stories for the Table component.
 * It showcases how the table appears in different styles such as striped, bordered, and hoverable.
 */

// Import necessary types from Storybook
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Table from './Table';

// Define metadata for the Table component in Storybook
const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    striped: { control: 'boolean' },
    bordered: { control: 'boolean' },
    hoverable: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

const sampleData = {
  headers: ['Name', 'Email', 'Role'],
  rows: [
    ['Alice', 'alice@example.com', 'Admin'],
    ['Bob', 'bob@example.com', 'Editor'],
    ['Charlie', 'charlie@example.com', 'Viewer'],
  ],
  footer: ['Total', '', '3 users'],
};

// Default table story
export const Default: Story = {
  args: {
    headers: sampleData.headers,
    rows: sampleData.rows,
  },
};

// Striped table rows
export const Striped: Story = {
  args: {
    headers: sampleData.headers,
    rows: sampleData.rows,
    striped: true,
  },
};

// Bordered table cells
export const Bordered: Story = {
  args: {
    headers: sampleData.headers,
    rows: sampleData.rows,
    bordered: true,
  },
};

// Hoverable table rows
export const Hoverable: Story = {
  args: {
    headers: sampleData.headers,
    rows: sampleData.rows,
    hoverable: true,
  },
};

// All styles applied
export const AllStyles: Story = {
  args: {
    headers: sampleData.headers,
    rows: sampleData.rows,
    footer: sampleData.footer,
    striped: true,
    bordered: true,
    hoverable: true,
  },
};
