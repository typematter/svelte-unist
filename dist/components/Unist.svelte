<script lang="ts">
	import setUnistContext from '../contexts/set-unist-context.js';
	import type { UnistContext } from '../types/unist-context.js';
	import Node from './Node.svelte';

	let { ast, ...context }: { ast: import('unist').Node } & Partial<UnistContext> = $props();

	setUnistContext(context);
</script>

<Node {...ast} />
