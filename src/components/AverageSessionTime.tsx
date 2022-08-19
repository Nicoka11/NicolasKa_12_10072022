import { userAverageTimeSession } from "@src/types/endpoints";
import { ResponsiveContainer, LineChart, XAxis, Line, Tooltip } from "recharts";
import CustomTooltip from "@src/components/tooltips/AverageSessionTimeTooltip";
import numberToDay from "@src/utils/numberToDay";
import WrapperBlock from "@src/components/WrapperBlock";
import PropTypes from "prop-types";

interface AverageSessionTimeProps {
  data: userAverageTimeSession[];
}

const AverageSessionTime = ({ data }: AverageSessionTimeProps) => {
  const Wrapper = WrapperBlock("#FF0000");
  return (
    <Wrapper>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 60,
            right: 20,
            left: 20,
            bottom: 20,
          }}
        >
          <XAxis
            tick={{ fillOpacity: 0.5, fontWeight: "600" }}
            tickFormatter={(num) => numberToDay(num - 1).charAt(0)}
            stroke="white"
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tickMargin={20}
          />
          <Tooltip content={<CustomTooltip />} />
          <defs>
            <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="40%" stopColor="rgba(255,255,255,0.3)" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>
          <Line
            dot={false}
            type="natural"
            dataKey="sessionLength"
            stroke="url(#linear)"
            strokeWidth={3}
            activeDot={{ stroke: "white", strokeWidth: 5, r: 3 }}
          />
          <text
            fill="#FFFFFF"
            opacity="0.5"
            fontWeight="500"
            fontSize="1.1rem"
            x="15%"
            y="15%"
          >
            Durée moyenne des
          </text>
          <text
            fill="#FFFFFF"
            opacity="0.5"
            fontWeight="500"
            fontSize="1.1rem"
            x="15%"
            y="24%"
          >
            sessions
          </text>
        </LineChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};

AverageSessionTime.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number,
      sessionLength: PropTypes.number,
    })
  ).isRequired,
};

export default AverageSessionTime;
