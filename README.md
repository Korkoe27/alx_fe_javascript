# Dynamic Quote Generator Project

## Overview

This project, part of the ALX Frontend Developer Program, focuses on building a **Dynamic Quote Generator** web application to master advanced JavaScript concepts, including DOM manipulation, web storage, JSON data handling, and server synchronization. The application allows users to generate, manage, filter, and sync quotes across sessions, providing hands-on experience with dynamic and persistent web development.

## Goal for the Week

Develop a robust web application that demonstrates proficiency in:

- Advanced DOM manipulation for dynamic content creation.
- Web storage (local and session storage) for data persistence.
- JSON data import/export for state management.
- Dynamic content filtering based on user-selected categories.
- Simulated server synchronization with conflict resolution.

## Tasks for the Week

1. **Building a Dynamic Content Generator with Advanced DOM Manipulation**  
   - Create a "Dynamic Quote Generator" that displays random quotes based on categories.
   - Implement functions (`showRandomQuote`, `createAddQuoteForm`, `addQuote`) to generate and add quotes dynamically.
   - Use JavaScript to manipulate the DOM for real-time updates without frameworks.

2. **Implementing Web Storage and JSON Handling**  
   - Enhance the application to save quotes to local storage and load them on initialization.
   - Optionally use session storage for temporary user preferences (e.g., last viewed quote).
   - Add JSON import/export functionality using `Blob` and `URL.createObjectURL` for data backup and restoration.

3. **Creating a Dynamic Content Filtering System Using Web Storage and JSON**  
   - Implement a category-based filtering system with a dropdown menu (`populateCategories`, `filterQuotes`).
   - Persist the last selected filter in local storage for seamless user experience across sessions.
   - Ensure new categories are dynamically added to the filter dropdown.

4. **Syncing Data with Server and Implementing Conflict Resolution**  
   - Simulate server interaction using a mock API (e.g., JSONPlaceholder) for fetching and posting quotes.
   - Implement periodic data syncing and a conflict resolution strategy prioritizing server data.
   - Add UI notifications for sync updates and manual conflict resolution options.

## Repository

- **GitHub Repository**: alx_fe_javascript
- **Directory**: dom-manipulation

## Learning Objectives

By completing this project, you will:

- Master advanced DOM manipulation for creating interactive web pages.
- Understand and implement web storage (local and session storage) for data persistence.
- Handle JSON data for importing/exporting application state.
- Build a dynamic filtering system based on user input.
- Simulate server synchronization and resolve data conflicts effectively.