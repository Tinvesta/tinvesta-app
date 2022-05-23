import { useCallback, useEffect, useState } from 'react';
import {
  Props as IReactCopyToClipboardProps,
  CopyToClipboard as ReactCopyToClipboard,
} from 'react-copy-to-clipboard';

export const useCopyToClipboard = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 5000);
    }
  }, [copied]);

  const handleCopy = () => !copied && setCopied(true);

  const CopyToClipboard = (props: Omit<IReactCopyToClipboardProps, 'onCopy'>) => (
    <ReactCopyToClipboard {...props} onCopy={handleCopy} />
  );

  const memoizedCopyToClipboard = useCallback(CopyToClipboard, [CopyToClipboard]);

  return {
    copied,
    CopyToClipboard: memoizedCopyToClipboard,
  };
};
