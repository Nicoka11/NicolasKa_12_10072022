import Container from "@src/components/Container";
import { Suspense } from "react";
import {
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
import IntakeCard from "@src/components/IntakeCard";
import { styled } from "@src/styles/system-styled";
import AverageSessionTime from "@src/components/AverageSessionTime";
import RadarPerformance from "@src/components/RadarPerformance";
import { frenchKinds } from "@src/constants/constants";

const TopFlex = styled("div", {
  display: "flex",
  gap: "$8",
  marginTop: "$16",
});

const Stack = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$8",
});

const LeftPart = styled("div", {
  width: "54rem",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "$8",
});

const RowStack = styled("div", {
  height: "100%",
  width: "100%",
  display: "flex",
  gap: "$8",
});

const Home = () => {
  const [data] = useAtom(userData);
  const [daily] = useAtom(userActivity);
  const [averageTime] = useAtom(userAverageSessions);
  const [performance] = useAtom(userPerformance);
  const user = data?.data.data;
  console.log(performance?.data.data.data.sort((a, b) => b.value - a.value));
  return (
    <Container>
      <Suspense fallback={<p>Waiting for the data to load...</p>}>
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
      </Suspense>
    </Container>
  );
};

export default Home;
