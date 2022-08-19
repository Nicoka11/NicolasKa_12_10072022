import Center from "@src/components/Center";
import WrapperBlock from "@src/components/WrapperBlock";
import PropTypes from "prop-types";

interface ScoreProgressionProps {
  progression?: number;
}

const ScoreProgression = ({ progression = 30 }: ScoreProgressionProps) => {
  const completion = progression * 100;
  // Size of the enclosing square
  const sqSize = 190;
  const strokeWidth = 10;
  // SVG centers the stroke width on the radius, subtract out so circle fits in square
  const radius = (sqSize - strokeWidth) / 2;
  // Enclose cicle in a circumscribing square
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const dashArray = radius * Math.PI * 2;
  // Scale 100% coverage overlay with the actual percent
  const dashOffset = dashArray - (dashArray * completion) / 100;
  const Wrapper = WrapperBlock("$gray2");

  return (
    <Wrapper>
      <Center>
        <svg width={sqSize} height={sqSize} viewBox={viewBox}>
          <circle
            fill="#FFFFFF"
            cx={sqSize / 2}
            cy={sqSize / 2}
            r={radius}
            strokeWidth={`${strokeWidth}px`}
          />
          <circle
            fill="none"
            stroke="#FF0000"
            strokeLinecap="round"
            cx={sqSize / 2}
            cy={sqSize / 2}
            r={radius}
            strokeWidth={`${strokeWidth}px`}
            // Start progress marker at 12 O'Clock
            transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
            style={{
              strokeDasharray: dashArray,
              strokeDashoffset: dashOffset,
            }}
          />
          <text
            fontSize="2rem"
            fontWeight="600"
            x="50%"
            y="40%"
            dy=".3em"
            textAnchor="middle"
          >
            {`${completion}%`}
          </text>
          <text
            fontSize="1.3rem"
            fontWeight="500"
            opacity=".6"
            x="50%"
            y="55%"
            dy=".3em"
            textAnchor="middle"
          >
            de votre
          </text>
          <text
            fontSize="1.3rem"
            fontWeight="500"
            opacity=".6"
            x="50%"
            y="68%"
            dy=".3em"
            textAnchor="middle"
          >
            objectif
          </text>
        </svg>
      </Center>
    </Wrapper>
  );
};

ScoreProgression.propTypes = {
  progression: PropTypes.number,
};

export default ScoreProgression;

// original progress radial bar by Juhaelee -> https://codepen.io/juhaelee/pen/GxymWP.
