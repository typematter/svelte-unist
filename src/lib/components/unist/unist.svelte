<script lang="ts">
	import Node from './node.svelte';
	import { setUnistContext, type UnistContext } from './unist-context.js';

	let context: UnistContext = $props();

	setUnistContext(context);
</script>

<Node {context} node={context.ast} />
