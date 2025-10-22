import type { SVGProps } from "react";

type SVGPropsType = SVGProps<SVGSVGElement>;

export function Camera(props: SVGPropsType) {
  return (
    <svg width={58} height={58} viewBox="0 0 58 58" fill="none" {...props}>
      <circle cx={29} cy={29} r={29} fill="#3B82F6" />
      <path
        d="M20 24h18a2 2 0 012 2v12a2 2 0 01-2 2H20a2 2 0 01-2-2V26a2 2 0 012-2z"
        fill="#fff"
      />
      <circle cx={29} cy={32} r={4} fill="#3B82F6" />
      <path d="M16 20l4-4h12l4 4" stroke="#fff" strokeWidth={2} fill="none" />
    </svg>
  );
}

export function AI(props: SVGPropsType) {
  return (
    <svg width={58} height={58} viewBox="0 0 58 58" fill="none" {...props}>
      <circle cx={29} cy={29} r={29} fill="#10B981" />
      <path
        d="M29 18l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9l3-9z"
        fill="#fff"
      />
      <circle cx={29} cy={29} r={3} fill="#10B981" />
    </svg>
  );
}

export function Satisfaction(props: SVGPropsType) {
  return (
    <svg width={58} height={58} viewBox="0 0 58 58" fill="none" {...props}>
      <circle cx={29} cy={29} r={29} fill="#F59E0B" />
      <path
        d="M29 20c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm-3 7c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-3 5c-1.66 0-3-1.34-3-3h6c0 1.66-1.34 3-3 3z"
        fill="#fff"
      />
    </svg>
  );
}

export function Quality(props: SVGPropsType) {
  return (
    <svg width={58} height={58} viewBox="0 0 58 58" fill="none" {...props}>
      <circle cx={29} cy={29} r={29} fill="#8B5CF6" />
      <path
        d="M29 18l4 8h8l-6 5 2 8-8-6-8 6 2-8-6-5h8l4-8z"
        fill="#fff"
      />
      <path
        d="M29 25l2 4h4l-3 2 1 4-4-3-4 3 1-4-3-2h4l2-4z"
        fill="#8B5CF6"
      />
    </svg>
  );
}
