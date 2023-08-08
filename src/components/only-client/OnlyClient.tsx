import React, { useEffect } from "react";

export type OnlyClientProps = {
  children: React.ReactNode;
};

export function OnlyClient({ children }: OnlyClientProps) {
  const [isMounted, setIsMounted] = React.useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? children : null;
}
