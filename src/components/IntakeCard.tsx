import { styled } from "@src/styles/system-styled";

interface IntakeCardProps {
  icon: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  bgIcon: string;
  intakeAmount: number;
  unit: string;
  name: string;
}

const Card = styled("div", {
  display: "flex",
  padding: "$10",
  borderRadius: "$md",
  backgroundColor: "$gray2",
  width: "$full",
  gap: "$6",
  alignItems: "center",
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

export default IntakeCard;
