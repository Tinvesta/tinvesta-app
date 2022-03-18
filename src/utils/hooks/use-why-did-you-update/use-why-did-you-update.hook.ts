import { useEffect, useRef } from 'react';

export const useWhyDidYouUpdate = (componentName: string, props: Record<string, unknown>) => {
  const previousProps = useRef<Record<string, unknown>>();

  useEffect(() => {
    if (previousProps.current) {
      const changedObject: Record<string, unknown> = {};
      const allKeys = Object.keys({ ...previousProps.current, ...props });

      for (const _key of allKeys) {
        if (previousProps.current && previousProps.current[_key] !== props[_key]) {
          changedObject[_key] = {
            to: props[_key],
            from: previousProps.current[_key],
          };
        }
      }

      if (Object.keys(changedObject).length > 0) {
        console.log(`[use-why-did-you-update] (${componentName})`, changedObject);
      }
    }

    previousProps.current = props;
  });
};
