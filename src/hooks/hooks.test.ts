import React from 'react';

import { renderHook } from '@testing-library/react-hooks';

import { useTabs } from './index';

const components = {
  Block: 'block',
  Estate: 'estate',
};

type Dispatch<A> = (value: A) => void;
type SetStateAction<S> = S | ((prevState: S) => S);
type MockUseState<S> = (initialState: S) => [S, Dispatch<SetStateAction<S>>];

describe('useTabs', () => {
  it('returns correct tabContent', () => {
    const { result } = renderHook(() => useTabs(components));

    expect(result.current.tabContent).toBe('block');
  });

  it('returns correct tabsProps', () => {
    const setStateMock = jest.fn();
    const useStateMock: MockUseState<unknown> = (state) => [state, setStateMock];

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
