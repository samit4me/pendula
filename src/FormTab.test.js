import React from 'react';
import ReactDOM from 'react-dom';
import FormTab, { computeIconProps } from './FormTab';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormTab />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('computeIconProps()', () => {
  it('returns null if no arguments passed', () => {
    expect(computeIconProps()).toEqual(null);
  });
  it('returns null for unknow status', () => {
    expect(computeIconProps('unknown')).toEqual(null);
  });
  it('returns donut icon for available', () => {
    expect(computeIconProps('available')).toEqual({ icon: 'dot-circle' });
  });
  it('returns a small circle for unavailable', () => {
    expect(computeIconProps('unavailable')).toEqual({ icon: 'circle', size: 'xs' });
  });
  it('returns tick for complete', () => {
    expect(computeIconProps('complete')).toEqual({ icon: 'check-circle' });
  });
  it('returns exclamation for invalid', () => {
    expect(computeIconProps('invalid')).toEqual({ icon: 'exclamation-circle' });
  });
});
