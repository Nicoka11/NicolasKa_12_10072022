import Container from "@src/components/Container";
import {
  loadableUserData,
  userActivity,
  userAverageSessions,
  userData,
  userPerformance,
} from "@src/store";
import { useAtom } from "jotai";
import Heading from "@src/components/Heading";
import DailyActivity from "@src/components/DailyActivity";
import { ReactComponent as Calories } from "@src/assets/icons/food/calories.svg";
import { ReactComponent as Proteins } from "@src/assets/icons/food/proteins.svg";
import { ReactComponent as CarboHydrate } from "@src/assets/icons/food/carbohydrate.svg";
import { ReactComponent as Lipids } from "@src/assets/icons/food/lipids.svg";
import { ReactComponent as NoConnection } from "@src/assets/icons/no-connection.svg";
import IntakeCard from "@src/components/IntakeCard";
import { styled } from "@src/styles/system-styled";
import AverageSessionTime from "@src/components/AverageSessionTime";
import RadarPerformance from "@src/components/RadarPerformance";
import { frenchKinds } from "@src/constants/constants";
import ScoreProgression from "@src/components/ScoreProgression";

const TopFlex = styled("div", {
  display: "flex",
  gap: "$8",
  flexDirection: "column",
  marginTop: "$16",
  marginBottom: "$16",
  "@desktop": {
    height: "$44rem",
    flexDirection: "row",
  },
});

const Stack = styled("div", {
  display: "flex",
  flexDirection: "row",
  order: "1",
  gap: "$8",
  "@desktop": {
    justifyContent: "space-between",
    flexDirection: "column",
    order: "2",
  },
});

const LeftPart = styled("div", {
  width: "54rem",
  height: "100%",
  display: "flex",
  order: "2",
  flexDirection: "column",
  gap: "$8",
  "@desktop": {
    order: "1",
  },
});

const RowStack = styled("div", {
  height: "100%",
  width: "100%",
  display: "flex",
  gap: "$8",
});

const NoConnectionBlock = styled("section", {
  width: "$full",
  height: "50vh",
  gap: "$6",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const Home = () => {
  const [data] = useAtom(userData);
  const [daily] = useAtom(userActivity);
  const [averageTime] = useAtom(userAverageSessions);
  const [performance] = useAtom(userPerformance);
  const user = data?.data.data;
  const [loadedData] = useAtom(loadableUserData);

  return (
    <Container>
      {loadedData.state === "hasData" && loadedData.data !== undefined ? (
        <>
          <Heading
            name={user?.userInfos.firstName || ""}
            description="Félicitation ! Vous avez explosé vos objectifs hier 👏"
          />
          <TopFlex>
            <LeftPart>
              <DailyActivity data={daily?.data.data.sessions || []} />
              <RowStack>
                <AverageSessionTime
                  data={averageTime?.data.data.sessions || []}
                />
                <RadarPerformance
                  data={
                    performance?.data.data.data.sort(
                      (a, b) => a.value - b.value
                    ) || []
                  }
                  // @ts-ignore
                  formatter={(value: string) => frenchKinds[value]}
                />
                <ScoreProgression
                  progression={user?.todayScore || user?.score || 10}
                />
              </RowStack>
            </LeftPart>
            <Stack>
              <IntakeCard
                icon={<Calories className="image" />}
                bgIcon="$red3"
                intakeAmount={user?.keyData.calorieCount || 1}
                unit="kCal"
                name="Calories"
              />
              <IntakeCard
                icon={<Proteins className="image" />}
                bgIcon="$blue3"
                intakeAmount={user?.keyData.proteinCount || 1}
                unit="g"
                name="Proteines"
              />
              <IntakeCard
                icon={<CarboHydrate className="image" />}
                bgIcon="$yellow3"
                intakeAmount={user?.keyData.carbohydrateCount || 1}
                unit="g"
                name="Glucides"
              />
              <IntakeCard
                icon={<Lipids className="image" />}
                bgIcon="$pink3"
                intakeAmount={user?.keyData.lipidCount || 1}
                unit="g"
                name="Lipides"
              />
            </Stack>
          </TopFlex>
        </>
      ) : (
        <NoConnectionBlock>
          <NoConnection />
          <h1>Server Error</h1>
        </NoConnectionBlock>
      )}
    </Container>
  );
};

export default Home;
