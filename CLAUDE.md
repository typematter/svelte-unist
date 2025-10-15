# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

`@typematter/svelte-unist` is a Svelte 5 library that transforms [Unist](https://github.com/syntax-tree/unist) (Universal Syntax Tree) nodes into Svelte components. It's designed as a SvelteKit package that provides components and utilities for rendering Unist ASTs.

### Package Ecosystem

This is the **base package** in a family of related packages:

- **`@typematter/svelte-unist`** (this package): Core rendering engine for generic Unist nodes
- **`@typematter/svelte-hast`**: Extends this package with specific Svelte components for [HAST](https://github.com/syntax-tree/hast) (HTML AST) nodes
- **`@typematter/svelte-mdast`**: Extends this package with specific Svelte components for [MDAST](https://github.com/syntax-tree/mdast) (Markdown AST) nodes

The architecture is designed so this package provides the foundational rendering system and utilities, while specialized packages build on top by providing node-type-specific components via the `components` prop and `ComponentMap` interface augmentation.

**Usage Pattern**: Specialized packages export a `components` object that must be manually passed to the `Unist` component:

```svelte
<script>
  import { Unist } from '@typematter/svelte-unist';
  import { components } from '@typematter/svelte-hast';
  // or: import { components } from '@typematter/svelte-mdast';

  const ast = /* HAST or MDAST tree */;
</script>

<Unist {ast} {components} />
```

## Development Commands

### Core Commands
- **Development server**: `pnpm dev` - Start the Vite dev server
- **Build**: `pnpm build` - Build the project and package it (runs `vite build && pnpm run package`)
- **Package**: `pnpm package` - Create the distributable package (runs `svelte-kit sync && svelte-package && publint`)
- **Test**: `pnpm test` - Run tests with Vitest
- **Type check**: `pnpm check` - Run svelte-check for type validation
- **Type check (watch)**: `pnpm check:watch` - Run svelte-check in watch mode
- **Lint**: `pnpm lint` - Run Prettier check and ESLint
- **Format**: `pnpm format` - Auto-format code with Prettier

### Important Notes
- This project uses **pnpm** as the package manager
- The build process automatically runs the package step
- Tests use Vitest with jsdom environment and @testing-library/jest-dom matchers

## Architecture

### Core Component System

The library centers around a context-based rendering system that recursively renders Unist nodes:

1. **Entry Point**: `Unist.svelte` ([src/lib/components/unist/unist.svelte](src/lib/components/unist/unist.svelte))
   - Accepts `UnistContext` props (ast + optional components map + optional onerror callback)
   - Sets up Svelte context via `setUnistContext()` for deep tree access
   - Passes context explicitly as a prop to `Node.svelte` for rendering

2. **Recursive Renderer**: `Node.svelte` ([src/lib/components/unist/node.svelte](src/lib/components/unist/node.svelte))
   - Accepts optional `context` prop, with fallback to `getUnistContext()` for flexibility
   - Checks if a custom component exists for the node type
   - Wraps custom components in `<svelte:boundary>` with error handling
   - Falls back to default rendering on error or when no custom component exists:
     - Parent nodes: recursively render children
     - Literal nodes: render the value
     - Unknown nodes: render HTML comment
   - Uses `@accuser/unist-util-type-guards` for type checking
   - Passes context explicitly to child `Node` instances

3. **Context Management**
   - **Hybrid approach**: Context is both passed explicitly as props AND stored in Svelte's context API
   - Context stored using a Symbol ([context.symbol.ts](src/lib/components/unist/context.symbol.ts))
   - `setUnistContext()` ([set-unist-context.ts](src/lib/components/unist/set-unist-context.ts)): Sets context in Svelte's context API
   - `getUnistContext()` ([get-unist-context.ts](src/lib/components/unist/get-unist-context.ts)): Retrieves context from Svelte's context API. Throws an error if called outside a `<Unist>` component.
   - **Context Extension Pattern**: The `UnistContext` interface can be augmented by specialized packages to add domain-specific functionality. For example, `@typematter/svelte-mdast` extends it with a `getDefinition` function used by `ImageReference` and `LinkReference` components:
     ```typescript
     declare module '@typematter/svelte-unist' {
         interface UnistContext {
             getDefinition?: ReturnType<typeof definitionBuilder>;
         }
     }
     ```

4. **Error Handling**
   - Custom components are wrapped in `<svelte:boundary>` for graceful error recovery
   - Optional `onerror` callback in `UnistContext` allows custom error handling
   - On error, falls back to default rendering (children for parent nodes, value for literal nodes, or HTML comment)
   - Unknown node types render as HTML comments for debugging

5. **Component Extension System**
   - `ComponentMap` interface ([component-map.ts](src/lib/components/unist/component-map.ts)): Empty interface for module augmentation
   - `Components` type ([components.ts](src/lib/components/unist/components.ts)): Maps node types to Svelte components
   - Users can provide custom components via the `components` prop to override default rendering
   - **This is how specialized packages like `@typematter/svelte-hast` and `@typematter/svelte-mdast` extend this base**: They augment `ComponentMap` with their node types and provide component implementations

### Utilities

Two helper functions for traversing Unist trees:

- `visit()` ([src/lib/utils/visit.ts](src/lib/utils/visit.ts)): Recursively visit nodes matching a type guard
- `collect()` ([src/lib/utils/collect.ts](src/lib/utils/collect.ts)): Collect all nodes matching a type guard into an array

### Package Structure

- **Source**: `src/lib/` - Library code
- **Distribution**: `dist/` - Built package output (created by svelte-package)
- **Demo**: `src/routes/` - SvelteKit routes for development/demo
- **Exports**: Main entry point is `dist/index.js` with types at `dist/index.d.ts`

## TypeScript Configuration

- Uses strict mode with all checks enabled
- Module resolution: `NodeNext`
- Extends SvelteKit's generated tsconfig
- Includes @testing-library/jest-dom types for testing

## Dependencies

- **Runtime**: `@accuser/unist-util-type-guards` for Unist type guards
- **Peer**: Svelte ^5.39.11 (uses Svelte 5 runes syntax)
- **Dev**: SvelteKit, Vite, Vitest, TypeScript, ESLint, Prettier

## Key Patterns

- **Svelte 5 Runes**: Uses `$props()`, `$derived()`, and modern Svelte 5 syntax
- **Svelte 5 Error Boundaries**: Uses `<svelte:boundary>` with `onerror` for graceful error handling
- **Recursive Components**: `Node.svelte` recursively calls itself for tree traversal
- **Hybrid Context Pattern**: Context is both explicitly passed as props (for reliability) and stored in Svelte's context API (for deep access by custom components)
- **Type Safety**: Leverages TypeScript and Unist type guards throughout
- **Module Augmentation**: Users can extend `ComponentMap` and `UnistContext` interfaces to add type-safe custom components and domain-specific functionality
- **Graceful Degradation**: Unknown nodes and errors fall back to safe default rendering
