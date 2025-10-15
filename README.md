# Svelte Unist

Transform [Unist](https://github.com/syntax-tree/unist) (Universal Syntax Tree) into Svelte 5 components.

This package provides the foundational rendering engine for Unist ASTs. It's designed to be extended by specialised packages like [`@typematter/svelte-hast`](https://github.com/typematter/svelte-hast) for HTML and [`@typematter/svelte-mdast`](https://github.com/typematter/svelte-mdast) for Markdown.

## Features

- **Flexible Rendering**: Default rendering for parent and literal nodes with support for custom components
- **Extensible**: Designed to be extended via custom component maps
- **Error Boundaries**: Built-in error handling with graceful fallbacks
- **Performance Optimised**: Context passed efficiently through the component tree
- **Type Safe**: Full TypeScript support with proper type inference
- **Svelte 5**: Built with modern Svelte 5 runes

## Installing

```sh
npm install @typematter/svelte-unist

# or
yarn add @typematter/svelte-unist

# or
pnpm add @typematter/svelte-unist
```

## Usage

### Basic Usage

```svelte
<script>
	import { Unist } from '@typematter/svelte-unist';

	const ast = {
		type: 'root',
		children: [{ type: 'text', value: 'Hello, World!' }]
	};
</script>

<Unist {ast} />
```

### With Custom Components

Use specialised packages that provide component implementations for specific AST types:

```svelte
<script>
	import { Unist } from '@typematter/svelte-unist';
	import { components } from '@typematter/svelte-hast';

	const ast = /* your HAST tree */;
</script>

<Unist {ast} {components} />
```

### With Error Handling

Catch rendering errors and send them to your error tracking service:

```svelte
<script>
	import { Unist } from '@typematter/svelte-unist';
	import { components } from '@typematter/svelte-mdast';

	const ast = /* your MDAST tree */;

	function handleError(error, reset) {
		console.error('Rendering error:', error);
		// Send to error tracking service
		// Optionally call reset() to retry rendering
	}
</script>

<Unist {ast} {components} onerror={handleError} />
```

When a custom component fails, the error boundary will:

1. Call your `onerror` handler (if provided)
2. Fall back to default rendering (showing children/literal values)
3. Add an HTML comment with error details for debugging

## API

### `<Unist>`

The main component for rendering Unist ASTs.

**Props:**

- `ast` (required): The Unist AST to render
- `components` (optional): Map of node types to Svelte components
- `onerror` (optional): Error handler `(error: unknown, reset: () => void) => void`
- Additional context properties can be added via module augmentation (e.g., `getDefinition` for MDAST)

### Utilities

The package also exports utility functions for working with Unist trees:

```typescript
import { visit, collect } from '@typematter/svelte-unist';
import { isHeading } from '@accuser/unist-util-type-guards';

// Visit all heading nodes
visit(ast, isHeading, (node) => {
	console.log('Heading:', node);
});

// Collect all heading nodes into an array
const headings = collect(ast, isHeading);
```

## Extending

### Creating Custom Components

You can create your own component mappings:

```svelte
<!-- MyParagraph.svelte -->
<script>
	let { node } = $props();
</script>

<p class="custom">
	{#each node.children as child}
		<Node node={child} />
	{/each}
</p>
```

```svelte
<!-- App.svelte -->
<script>
	import { Unist } from '@typematter/svelte-unist';
	import MyParagraph from './MyParagraph.svelte';

	const components = {
		paragraph: MyParagraph
	};

	const ast = /* your AST */;
</script>

<Unist {ast} {components} />
```

### Extending Context

Specialised packages can extend the `UnistContext` interface to add domain-specific functionality:

```typescript
declare module '@typematter/svelte-unist' {
	interface UnistContext {
		// Add custom properties
		getDefinition?: (identifier: string) => Node | undefined;
	}
}
```

## Development

```sh
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Run type checking
pnpm check

# Run tests
pnpm test

# Build and package
pnpm build

# Lint code
pnpm lint

# Format code
pnpm format
```

## License

[MIT](LICENSE)

## Copyright

Copyright &copy; 2025 [Matthew Gibbons](https://github.com/accuser)
