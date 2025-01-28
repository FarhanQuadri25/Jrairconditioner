import { JSX } from "react";

export default function ArrowDown(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
  ) {
    return (
      <svg
        width={44}
        height={51}
        viewBox="0 0 44 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M42.248 1.64a3.81 3.81 0 00-5.393 0l-14.84 14.8L7.14 1.603a3.813 3.813 0 10-5.393 5.392L19.301 24.55a3.809 3.809 0 005.392 0L42.248 6.994a3.764 3.764 0 000-5.354z"
          fill="url(#paint0_linear_70_25)"
        />
        <path
          d="M42.248 26.843a3.81 3.81 0 00-5.393 0l-14.84 14.801L7.178 26.805a3.813 3.813 0 00-5.393 5.393L19.34 49.752a3.809 3.809 0 005.392 0l17.555-17.554a3.798 3.798 0 00-.038-5.355z"
          fill="url(#paint1_linear_70_25)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_70_25"
            x1={22}
            y1={78.893}
            x2={22}
            y2={-49.3491}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ACACAC" stopOpacity={0.9} />
            <stop offset={1} stopColor="#fff" stopOpacity={0} />
          </linearGradient>
          <linearGradient
            id="paint1_linear_70_25"
            x1={22}
            y1={78.893}
            x2={22}
            y2={-49.3491}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ACACAC" stopOpacity={0.9} />
            <stop offset={1} stopColor="#fff" stopOpacity={0} />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  