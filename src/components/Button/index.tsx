import { PropsWithChildren, useEffect, useState } from "react";
import { Container } from "./styles";

interface ButtonProps extends React.ComponentProps<typeof Container> {}

export function Button({ children, ...rest }: ButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Container {...rest} transition={isLoading ? "none" : "default"}>
      {children}
    </Container>
  );
}
