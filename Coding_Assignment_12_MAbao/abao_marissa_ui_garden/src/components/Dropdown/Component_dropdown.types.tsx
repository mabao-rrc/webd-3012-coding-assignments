/**
 * Name: Marissa Abao
 * Submission Date: June 30, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_dropdown.types.tsx
 * Description: Defines the type structure for the Dropdown component,
 * including supported props such as options, onSelect handler, and disabled state.
 */

export interface DropdownOption {
  label: string; // The text to display for this option
  value: string; // The actual value associated with this option
}

export interface DropdownProps {
  options: DropdownOption[]; // Required: array of dropdown options
  onSelect?: (value: string) => void; // Optional: function triggered when an option is selected
  disabled?: boolean; // Optional: disables interaction if true
  defaultLabel?: string; // Optional: placeholder text shown when no selection is made
}