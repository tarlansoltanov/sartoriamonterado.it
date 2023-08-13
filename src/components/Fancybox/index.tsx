import React, { useRef, useEffect } from "react";

import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import { ComponentOptionsType as FancyboxOptionsType } from "@fancyapps/ui/types/Fancybox/options";

import "@fancyapps/ui/dist/fancybox/fancybox.css";

interface Props {
  className?: string;
  children?: React.ReactNode;
  delegate?: string;
  options?: Partial<FancyboxOptionsType>;
}

function Fancybox({ className, children, delegate, options }: Props) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    delegate = delegate || "[data-fancybox]";
    options = options || {};

    NativeFancybox.bind(container, delegate, options);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  });

  return (
    <div className={className} ref={containerRef}>
      {children}
    </div>
  );
}

export default Fancybox;
