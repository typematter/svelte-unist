import { Node } from '@accuser/svelte-markdown-provider';
import { mount } from 'svelte';
import { beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('@accuser/svelte-markdown-provider', async () => {
	const actual = await import('@accuser/svelte-markdown-provider');

	return {
		...actual,
		getMarkdownContext: vi.fn().mockReturnValue({})
	};
});

describe('Node.svelte', () => {
	beforeEach(() => {
		document.body = document.createElement('body');
	});

	it('should render literal nodes', () => {
		mount(Node, {
			props: {
				type: 'text',
				value: 'Hello, World!'
			},
			target: document.body
		});

		expect(document.body).toHaveTextContent('Hello, World!');
	});

	it('should render parent nodes', () => {
		mount(Node, {
			props: {
				type: 'paragraph',
				children: [
					{
						type: 'text',
						value: 'Hello, World!'
					}
				]
			},
			target: document.body
		});

		expect(document.body.querySelector('p')).toHaveTextContent('Hello, World!');
	});
});
