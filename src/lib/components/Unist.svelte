<script lang="ts">
	import setUnistContext from '$lib/contexts/set-unist-context.js';
	import type { UnistContext } from '$lib/types/unist-context.js';
	import Node from './Node.svelte';

	let { ast, ...context }: { ast: import('unist').Node } & Partial<UnistContext> = $props();

	setUnistContext(context);
</script>

<Node {...ast} />
