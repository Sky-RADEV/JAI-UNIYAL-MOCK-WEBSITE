export default function MolecularNodeSvg({
  className = "w-6 h-6 text-[#38BDE5]",
  variant = "subtle"
}: {
  className?: string;
  variant?: "subtle" | "banner" | "accent";
}) {
  if (variant === "banner") {
    return (
      <svg
        viewBox="0 0 240 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <circle cx="20" cy="40" r="3" fill="#38BDE5" fillOpacity="0.4" />
        <circle cx="65" cy="25" r="4.5" fill="#38BDE5" fillOpacity="0.8" />
        <circle cx="120" cy="50" r="3.5" fill="#8C5A9F" fillOpacity="0.6" />
        <circle cx="175" cy="30" r="4" fill="#38BDE5" fillOpacity="0.9" />
        <circle cx="220" cy="45" r="3" fill="#38BDE5" fillOpacity="0.3" />
        
        {/* Connecting hairline molecular bonds */}
        <line x1="20" y1="40" x2="65" y2="25" stroke="#38BDE5" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 3" />
        <line x1="65" y1="25" x2="120" y2="50" stroke="#38BDE5" strokeWidth="1.2" strokeOpacity="0.4" />
        <line x1="120" y1="50" x2="175" y2="30" stroke="#8C5A9F" strokeWidth="1.2" strokeOpacity="0.4" />
        <line x1="175" y1="30" x2="220" y2="45" stroke="#38BDE5" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 3" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="8" cy="16" r="2.5" fill="currentColor" fillOpacity="0.5" />
      <circle cx="24" cy="10" r="3" fill="currentColor" fillOpacity="0.9" />
      <circle cx="20" cy="24" r="2.5" fill="currentColor" fillOpacity="0.7" />
      <line x1="8" y1="16" x2="24" y2="10" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" />
      <line x1="24" y1="10" x2="20" y2="24" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.5" />
      <line x1="8" y1="16" x2="20" y2="24" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="2 2" />
    </svg>
  );
}
