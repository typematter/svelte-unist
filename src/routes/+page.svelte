<script lang="ts">
	import { Unist } from '$lib/components/unist/index.js';
	import { u } from 'unist-builder';

	let ast = u('root', [u('text', 'Hello, World!')]);
</script>

<Unist {ast} />
