/**
 * Name: Marissa Abao
 * Submission Date: June 30, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_card.types.tsx
 * Description: Defines the type structure for the Card component,
 * including props for title, content, image, footer, and disabled state.
 */

export interface CardProps {
  title: string; // The title displayed at the top of the card
  content: string; // The main content or body text of the card
  imageUrl?: string; // Optional image to display at the top of the card
  footer?: string; // Optional text or elements to display at the bottom of the card
  disabled?: boolean; // If true, the card appears dimmed and is non-interactive
}
