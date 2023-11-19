import { useEffect, useState, ReactNode } from "react";
type variantTypes = "rocket" | "microchip";
type sizeTypes = "sm" | "md" | "lg";
type colorTypes = "light" | "dark";
type positionTypes = "right" | "left" | "up" | "down";

function getIconSize(size: sizeTypes) {
  switch (size) {
    case "sm":
      return 16;
    case "md":
      return 24;
    case "lg":
      return 32;
    default:
      return 16;
  }
}

function getIconColor(color: colorTypes) {
  switch (color) {
    case "light":
      return "#fff";
    case "dark":
      return "#000";
    default:
      return "#fff";
  }
}

function getIconPosition(positionText: positionTypes): string {
  let rotation = 0;
  const xOrigin = 160;
  const yOrigin = 256;

  switch (positionText) {
    case "left":
      rotation = 180;
      break;
    case "up":
      rotation = 270;
      break;
    case "down":
      rotation = 90;
      break;
    default:
      break;
  }

  return `rotate(${rotation} ${xOrigin} ${yOrigin})`;
}

const iconMap = {
  rocket: (size: sizeTypes, color: colorTypes, position: positionTypes) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 640 512"
        fill={color}
        fontSize={size}
        transform={position ? `rotate(${position})` : "rotate(0)"}
      >
        <path d="M130 480c40.6 0 80.4-11 115.2-31.9L352 384l-224 0 0 96h2zM352 128L245.2 63.9C210.4 43 170.6 32 130 32h-2v96l224 0zM96 128l0-96H80C53.5 32 32 53.5 32 80v48h8c-22.1 0-40 17.9-40 40v16V328v16c0 22.1 17.9 40 40 40H32v48c0 26.5 21.5 48 48 48H96l0-96h8c26.2 0 49.4-12.6 64-32H456c69.3 0 135-22.7 179.2-81.6c6.4-8.5 6.4-20.3 0-28.8C591 182.7 525.3 160 456 160H168c-14.6-19.4-37.8-32-64-32l-8 0zM512 243.6v24.9c0 19.6-15.9 35.6-35.6 35.6c-2.5 0-4.4-2-4.4-4.4V212.4c0-2.5 2-4.4 4.4-4.4c19.6 0 35.6 15.9 35.6 35.6z" />
      </svg>
    );
  },
};

export function Icon({
  variant,
  size,
  color,
  position,
}: {
  variant: variantTypes;
  size: sizeTypes;
  color: colorTypes;
  position: positionTypes;
}) {
  const [_size, setSize] = useState(20);
  const [_color, setColor] = useState("white");
  const [_position, setPosition] = useState("");
  const [asset, setAsset] = useState<ReactNode>(null);

  useEffect(() => {
    // Update icon size
    setSize(getIconSize(size as sizeTypes));
    setColor(getIconColor(color as colorTypes));
    setPosition(getIconPosition(position as positionTypes));

    // Update icon asset
    const newVariant = iconMap[asset as variantTypes];
    setAsset(newVariant ? newVariant(_size, _position, _color) : null);
  }, [_size, variant, _position, _color]);

  return <>{asset}</>;
}
