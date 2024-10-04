<script lang="ts">
	import Unist from '$lib/components/Unist.svelte';
	import type { PageData } from './$types.js';

	let { data }: { data: PageData } = $props();

	let { ast } = $derived(data);
</script>

<Unist {ast} />
