import { styled } from "@src/styles/system-styled";
import PropTypes from "prop-types";

const H1 = styled("h1", {
  fontWeight: "500",
  fontSize: "xxx-large",
  marginBottom: "$6",
});

interface HeadingProps {
  name: string;
  description: string;
}

const Heading = ({ name, description }: HeadingProps) => {
  return (
    <header>
      <H1>
        Bonjour <span style={{ color: "red" }}>{name}</span>
      </H1>
      <p>{description}</p>
    </header>
  );
};

Heading.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Heading;
