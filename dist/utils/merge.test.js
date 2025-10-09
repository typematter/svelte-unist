import { describe, expect, it } from 'vitest';
import merge from './merge.js';
describe('merge', () => {
    it('should merge two objects with different keys', () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { c: 3, d: 4 };
        const result = merge(obj1, obj2);
        expect(result).toEqual({ a: 1, b: 2, c: 3, d: 4 });
    });
    it('should merge two objects with overlapping keys', () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { b: 3, c: 4 };
        const result = merge(obj1, obj2);
        expect(result).toEqual({ a: 1, b: 3, c: 4 });
    });
    it('should deeply merge nested objects', () => {
        const obj1 = { a: { b: 1 } };
        const obj2 = { a: { c: 2 } };
        const result = merge(obj1, obj2);
        expect(result).toEqual({ a: { b: 1, c: 2 } });
    });
    it('should handle non-object values correctly', () => {
        const obj1 = { a: 1, b: { c: 2 } };
        const obj2 = { b: 3, d: 4 };
        const result = merge(obj1, obj2);
        expect(result).toEqual({ a: 1, b: 3, d: 4 });
    });
    it('should return an empty object when no arguments are provided', () => {
        const result = merge();
        expect(result).toEqual({});
    });
    it('should handle arrays as values', () => {
        const obj1 = { a: [1, 2] };
        const obj2 = { b: [3, 4] };
        const result = merge(obj1, obj2);
        expect(result).toEqual({ a: [1, 2], b: [3, 4] });
    });
});
