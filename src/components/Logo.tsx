import Image from "next/image";

export function Logo({
  className,
  size = 40,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <span className={className}>
      <Image
        src="/assets/zarair-logo.png"
        alt=""
        width={Math.round(size * 555 / 1053)}
        height={size}
        unoptimized
        style={{ verticalAlign: "middle", marginRight: "8px", objectFit: "contain" }}
      />
      Zar Air
    </span>
  );
}
