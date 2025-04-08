/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { DependencyList } from "react";
import { useMemo } from "../hooks/useMemo";

export function useCallback<T extends Function>(
  factory: T,
  _deps: DependencyList,
) {
  return useMemo(() => factory, _deps);
}

// useCallback은 함수 자체를 저장한다.
