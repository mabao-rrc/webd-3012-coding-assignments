/**
 * Name: Marissa Abao
 * Submission Date: June 25, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_table.tests.tsx
 * Description: This file contains unit tests for the Table component using React Testing Library.
 * It checks that the table is visible and that its styling props like hoverable are passed correctly.
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Table from './Component_table';

describe('Table component', () => {
  const headers = ['Name', 'Email'];
  const rows = [
    ['Alice', 'alice@example.com'],
    ['Bob', 'bob@example.com'],
  ];

  // Test: Table should be visible in the DOM
  it('renders the table and makes it visible', () => {
    render(<Table headers={headers} rows={rows} />);
    const tableElement = screen.getByRole('table');
    expect(tableElement).toBeVisible();
  });

  // Test: When hoverable is true, the prop should be passed and render without error
  it('renders table with hoverable prop without crashing', () => {
    render(<Table headers={headers} rows={rows} hoverable />);
    const rowElements = screen.getAllByRole('row');
    expect(rowElements.length).toBeGreaterThan(0);
  });
});
