import React from 'react';
import type { ReactNode } from 'react';

import { renderHook } from '@testing-library/react-hooks';

import { useTabs } from './index';

const components = {
  Block: 'block',
  Estate: 'estate',
};

describe('useTabs', () => {
  it('returns correct tabContent', () => {
    const { result } = renderHook(() => useTabs(components));

    expect(result.current.tabContent).toBe('block');
  });

  it('returns correct tabsProps', () => {
    const setStateMock = jest.fn();
    const useStateMock = (state: ReactNode) => [state, setStateMock];

    // FIXME Type declaration for jest doesnt match with an original useState
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);

    const { result } = renderHook(() => useTabs(components));

    expect(result.current.tabsProps).toEqual({
      changeTab: setStateMock,
      currentTab: 'Block',
      tabs: ['Block', 'Estate'],
    });
  });
});
