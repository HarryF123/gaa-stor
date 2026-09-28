interface CountyColourPatternProps {
  id: string;
  colours?: string[];
}

export function CountyColourPattern({ id, colours = [] }: CountyColourPatternProps) {
  if (!colours || colours.length === 0) {
    return null;
  }

  const stripeWidth = 16;
  const totalWidth = stripeWidth * colours.length;

  return (
    <pattern
      id={id}
      width={totalWidth}
      height={totalWidth}
      patternUnits="userSpaceOnUse"
    >
      {colours.map((colour, index) => (
        <rect
          key={index}
          x={index * stripeWidth}
          width={stripeWidth}
          height={totalWidth}
          fill={colour}
        />
      ))}
    </pattern>
  );
}