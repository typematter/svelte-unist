import { getMarkdownContext } from '@accuser/svelte-markdown-provider';
import { describe, expect, it } from 'vitest';

describe('getMarkdownContext', () => {
	it('should be a function', () => {
		expect(getMarkdownContext).toBeInstanceOf(Function);
	});
});
