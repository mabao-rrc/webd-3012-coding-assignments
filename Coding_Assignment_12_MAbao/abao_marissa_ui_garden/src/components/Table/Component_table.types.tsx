/**
 * Name: Marissa Abao
 * Submission Date: June 30, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_table.types.tsx
 * Description: This file defines the prop types for the Table component,
 * including options for striped rows, bordered cells, and hoverable rows.
 */

export interface TableProps {
  /**
   * The rows to display, represented as a 2D array where each sub-array is a row.
   */
  rows: string[][];

  /**
   * Whether the table should have alternating row colors.
   */
  striped?: boolean;

  /**
   * Whether the table should have borders around each cell.
   */
  bordered?: boolean;

  /**
   * Whether the table rows should have a hover effect.
   */
  hoverable?: boolean;

  /**
   * Optional header labels for the table.
   */
  headers?: string[];

  /**
   * Optional footer data for the table.
   */
  footer?: string[];
}
