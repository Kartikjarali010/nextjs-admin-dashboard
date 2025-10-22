export function Logo() {
  return (
    <div className="flex items-center gap-2">
      {/* Eye icon to match HumanStudio brand */}
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M1.5 12s3.5-6 10.5-6 10.5 6 10.5 6-3.5 6-10.5 6S1.5 12 1.5 12z"
          className="fill-[#C07A00] dark:fill-[#F4B544]"
        />
        <circle cx="12" cy="12" r="3.5" className="fill-white" />
        <circle cx="12" cy="12" r="1.75" className="fill-[#C07A00] dark:fill-[#F4B544]" />
      </svg>
      <span className="text-xl font-extrabold tracking-tight text-dark dark:text-white">
        HumanStudio
      </span>
    </div>
  );
}
