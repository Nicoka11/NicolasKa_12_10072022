import { userPerformance } from "@src/types/endpoints";
import PropTypes from "prop-types";
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  Label,
} from "recharts";
import WrapperBlock from "./WrapperBlock";

interface AverageSessionTimeProps {
  data: userPerformance[];
  formatter: (value: any, index: number) => string;
}

const RadarPerformance = ({ data, formatter }: AverageSessionTimeProps) => {
  const Wrapper = WrapperBlock("#282D30");
  return (
    <Wrapper>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius="50%" data={data}>
          <PolarGrid stroke="white" />
          <PolarAngleAxis
            tickFormatter={formatter}
            dataKey="kind"
            stroke="white"
            axisLine={false}
            tickLine={false}
            orient="inner"
          />
          <Radar dataKey="value" fill="#ff0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};

RadarPerformance.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      kind: PropTypes.number,
    })
  ).isRequired,
  formatter: PropTypes.func.isRequired
};

export default RadarPerformance;
