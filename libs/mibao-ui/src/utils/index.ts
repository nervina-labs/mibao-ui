import { useMemo } from 'react';

export function useClassNameArray(classNameString?: string) {
  return useMemo(() => {
    return classNameString?.split(' ').filter(className => className) ?? []
  }, [classNameString])
}
