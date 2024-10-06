<script lang="ts">
	import setUnistContext from '$lib/contexts/set-unist-context.js';
	import type { Props } from '$lib/types/unist.js';
	import Node from './Node.svelte';

	let { ast, ...context }: { ast: import('unist').Node } & Props = $props();

	setUnistContext(context);
</script>

<Node {...ast} />
