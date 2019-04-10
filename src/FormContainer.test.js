import { generateSection } from './FormContainer';

describe('generateSection()', () => {
  it('returns section with default values if no arguments passed', () => {
    expect(generateSection()).toEqual({ name: '', status: 'unavailable', isActive: false });
  });
  it('returns section with passed in values', () => {
    const args = { name: 'test', status: 'unknown', isActive: true };
    expect(generateSection(args.name, args.status, args.isActive)).toEqual(args);
  });
});
