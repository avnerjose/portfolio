import { Heading, Span } from "./styles";

interface NumberedHeadingProps {
  label: string;
  number: number;
}

export function NumberedHeading({ label, number }: NumberedHeadingProps) {
  return (
    <Heading>
      <Span>{number.toString().padStart(2, "0")}</Span> . {label}
    </Heading>
  );
}
