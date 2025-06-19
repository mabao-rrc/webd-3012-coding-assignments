/**
 * Name: Marissa Abao
 * Submission Date: June 30, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_label.types.tsx
 * Description: This file defines the prop types for the Label component,
 * specifying the expected structure and data types for Label props.
 */

export interface LabelProps {
  /** 
   * The ID of the form element that this label is associated with. 
   * This helps screen readers and improves accessibility.
   */
  htmlFor: string;

  /**
   * The text content that will appear inside the label.
   */
  text: string;
}
