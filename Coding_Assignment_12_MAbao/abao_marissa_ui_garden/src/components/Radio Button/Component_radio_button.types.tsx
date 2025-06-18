/**
 * Name: Marissa Abao
 * Submission Date: June 25, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_radio_button.types.tsx
 * Description: Defines the type structure for the RadioButton component,
 * including supported props such as label, value, checked state, and change handler.
 */

export interface RadioButtonProps {
  label: string; // The text displayed next to the radio button
  name: string; // The group name for the radio buttons
  value: string; // The value associated with the radio button
  checked?: boolean; // Whether the radio button is currently selected
  disabled?: boolean; // If true, disables interaction with the radio button
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // Called when the radio button state changes
}
