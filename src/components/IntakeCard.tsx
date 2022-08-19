import { styled } from "@src/styles/system-styled";
import PropTypes from "prop-types";

interface IntakeCardProps {
  icon: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  bgIcon: string;
  intakeAmount: number;
  unit: string;
  name: string;
}

const Card = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "$6",
  borderRadius: "$md",
  backgroundColor: "$gray2",
  gap: "$6",
  alignItems: "center",
  "@desktop": {
    width: "$full",
    padding: "$10",
    flexDirection: "row",
  },
});

const iconContainer = (color: string) =>
  styled("div", {
    display: "flex",
    width: "$16",
    height: "$16",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color,
    borderRadius: "$lg",
    padding: "$5",
    boxSizing: "border-box",
  });

const Title = styled("h3", {
  fontSize: "large",
  fontWeight: "600",
  marginBottom: "$2",
});

const Name = styled("p", {
  fontWeight: "400",
  color: "$gray9",
});
const IntakeCard = ({
  icon,
  bgIcon,
  intakeAmount,
  unit,
  name,
}: IntakeCardProps) => {
  const IconCntr = iconContainer(bgIcon);
  return (
    <Card>
      <IconCntr>{icon}</IconCntr>
      <div>
        <Title>
          {intakeAmount}
          {unit}
        </Title>
        <Name>{name}</Name>
      </div>
    </Card>
  );
};

IntakeCard.propTypes = {
  icon: PropTypes.element.isRequired,
  bgIcon: PropTypes.string.isRequired,
  intakeAmount: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default IntakeCard;
