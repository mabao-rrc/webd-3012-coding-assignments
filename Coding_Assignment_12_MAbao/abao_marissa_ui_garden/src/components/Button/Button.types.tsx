/**
 * Name: Marissa Abao
 * Submission Date: June 25, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Button.types.ts
 * Description: Defines the type structure for the Button component, 
 * including supported props such as label, onClick, and disabled state.
 */

export interface ButtonProps {
  label: string; // Required: the button text
  onClick?: () => void; // Optional: a function triggered when the button is clicked
  disabled?: boolean; // Optional: determines if the button is disabled
}

