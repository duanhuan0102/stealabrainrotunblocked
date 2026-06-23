interface AdSlotProps {
  label?: string;
  variant?: "banner" | "tower";
}

export function AdSlot({ label = "Advertisement", variant = "banner" }: AdSlotProps) {
  return (
    <div className={`ad-slot ad-slot--${variant}`} aria-label={label}>
      <span>{label}</span>
    </div>
  );
}
