/**
 * Name: Marissa Abao
 * Submission Date: June 25, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: index.ts
 * Description: This file re-exports the Label component and its type definitions
 * to simplify imports from this folder.
 */

// Export the default Label component so it can be imported like:
// import Label from './components/Label';
export { default } from './Label';

// Export the LabelProps type so it can be reused for prop validation or external typing
export type { LabelProps } from './Label.types';
