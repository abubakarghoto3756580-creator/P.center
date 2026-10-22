/**
 * Modern Clinical Confidence: original teal/gold clinical emblem for a healthcare editorial homepage.
 */
export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.6 8c5.1 0 8.3 2.4 9.4 7.2.2.8.6 1.2 1.4 1.4C41.2 17.7 44 21 44 26.4c0 4.9-2.2 8-6.7 9.2-.9.3-1.3.7-1.5 1.6C34.6 42.1 31.5 44.5 26.5 44.5c-5.5 0-8.8-2.9-9.9-8.7-.2-.8-.6-1.2-1.4-1.4C10.5 33.2 8 30 8 24.9c0-5.3 2.6-8.4 7.8-9.6.7-.2 1.1-.6 1.3-1.4C18.2 10 21 8 25.6 8Z"
        fill="currentColor"
      />
      <path d="M31.2 23v7.3h7.4v5.4h-7.4V43h-5.5v-7.3h-7.4v-5.4h7.4V23h5.5Z" fill="white" />
      <circle cx="48.4" cy="47.8" r="7.6" fill="#DDB443" />
    </svg>
  );
}
