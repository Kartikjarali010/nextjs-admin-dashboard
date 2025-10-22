export function Logo() {
  return (
    <div className="flex items-center gap-3">
      {/* User Icon */}
      <div className="flex-shrink-0">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-black dark:text-white"
        >
          {/* User head */}
          <circle cx="12" cy="8" r="4" fill="currentColor" />
          {/* User body */}
          <path
            d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Human Studio Text */}
      <div className="flex flex-col">
        <span className="text-xl font-bold text-black dark:text-white leading-tight">
          Human
        </span>
        <span className="text-xl font-bold text-black dark:text-white leading-tight">
          Studio
        </span>
      </div>
    </div>
  );
}
