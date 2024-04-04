import React from 'react';

import type { IconModel } from '@/models/common/icon';

export const SvgCommon: React.FC<IconModel> = (props) => {
  return (
    <svg
      width={props.size ? props.size[0] : 0}
      height={props.size ? props.size[1] : 0}
      viewBox={`0 0 ${props.viewBox ? props.viewBox[0] : 0} ${props.viewBox ? props.viewBox[1] : 0}`}
      className={props.className}
      style={props.style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.onClick}
    >
      {props.children}
    </svg>
  );
};
