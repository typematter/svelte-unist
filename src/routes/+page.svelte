<script lang="ts">
	import * as Unist from '$lib/components/unist/index.js';
	import type { PageData } from './$types.js';

	let { data }: { data: PageData } = $props();

	let { ast } = $derived(data);
</script>

<Unist.Root {ast} />
