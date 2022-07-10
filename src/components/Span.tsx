import { Text, TextProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SpanProps extends Omit<TextProps, "as"> {
  children: ReactNode;
}

const Span = ({ children, ...rest }: SpanProps) => {
  return (
    <Text as="span" {...rest}>
      {children}
    </Text>
  );
};

export default Span;
