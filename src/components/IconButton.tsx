import { styled } from "@src/styles/system-styled";

interface IconButtonProps {
  href: string;
  icon: { src: string; alt: string; color?: string };
}

const Button = (color = "Red") =>
  styled("a", {
    height: "$16",
    width: "$16",
    padding: "$3",
    borderRadius: "$md",
    backgroundColor: "White",
    color: color,
    boxSizing: "border-box",
    cursor: "pointer",
    transition: "all .3s ease",
    "&:hover": {
      backgroundColor: "$deepblack50",
    },
  });

const IconButton = ({ href, icon }: IconButtonProps) => {
  const Btn = Button(icon.color);
  return (
    <Btn href={href}>
      <img className="image" src={icon.src} alt={icon.alt} />
    </Btn>
  );
};
export default IconButton;
