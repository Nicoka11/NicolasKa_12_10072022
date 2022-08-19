import {
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import CustomTooltip from "@src/components/tooltips/DailyActivityTooltip";
import { userActivitySession } from "@src/types/endpoints";
import PropTypes from "prop-types";
import { styled } from "@src/styles/system-styled";

interface DailyActivityProps {
  data: userActivitySession[];
}

const Box = styled("section", {
  width: "$full",
  backgroundColor: "$gray2",
  padding: "$4",
  borderRadius: "$md",
});

const DailyActivity = ({ data }: DailyActivityProps) => {
  return (
    <Box>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={data}
          barCategoryGap={54}
          margin={{
            top: 20,
            right: 8,
            left: 20,
            bottom: 2,
          }}
          barGap={8}
          barSize={7}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis
            tickLine={false}
            dataKey="day"
            stroke="#9B9EAC"
            tickFormatter={(data) =>
              parseInt(data.split("-").slice(-1)).toString()
            }
          />
          <YAxis
            domain={["dataMin - 100", "dataMax + 100"]}
            hide={true}
            yAxisId="left"
            orientation="left"
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            domain={["dataMin - 1", "dataMax + 1"]}
            yAxisId="right"
            orientation="right"
            stroke="#9B9EAC"
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            height={100}
            iconSize={8}
            iconType="circle"
            align="right"
            color="#OOOOOO"
            formatter={(value) => (
              <span style={{ color: "gray" }}>{value}</span>
            )}
            verticalAlign="top"
          />
          <Bar
            radius={[10, 10, 0, 0]}
            yAxisId="right"
            dataKey="kilogram"
            name="Poids (kg)"
            fill="#282D30"
          />
          <Bar
            radius={[10, 10, 0, 0]}
            yAxisId="left"
            dataKey="calories"
            name="Calories brûlées (kCal)"
            fill="#E60000"
          />
          <text
            x={120}
            y={35}
            fontWeight="600"
            textAnchor="middle"
            fill="black"
          >
            Activité quotidienne
          </text>
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

DailyActivity.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      kilogram: PropTypes.number,
      calories: PropTypes.number,
    })
  ).isRequired,
};

export default DailyActivity;
