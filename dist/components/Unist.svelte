<script lang="ts">
	import setUnistContext from '../contexts/set-unist-context.js';
	import type { Props } from '../types/unist.js';
	import Node from './Node.svelte';

	let { ast, ...context }: { ast: import('unist').Node } & Props = $props();

	setUnistContext(context);
</script>

<Node {...ast} />
