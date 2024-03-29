import Container from "@src/components/Container";
import Heading from "@src/components/Heading";
import DailyActivity from "@src/components/DailyActivity";
import { ReactComponent as Calories } from "@src/assets/icons/food/calories.svg";
import { ReactComponent as Proteins } from "@src/assets/icons/food/proteins.svg";
import { ReactComponent as CarboHydrate } from "@src/assets/icons/food/carbohydrate.svg";
import { ReactComponent as Lipids } from "@src/assets/icons/food/lipids.svg";
import { ReactComponent as NoConnection } from "@src/assets/icons/no-connection.svg";
import IntakeCard from "@src/components/IntakeCard";
import AverageSessionTime from "@src/components/AverageSessionTime";
import RadarPerformance from "@src/components/RadarPerformance";
import { frenchKinds } from "@src/constants/constants";
import ScoreProgression from "@src/components/ScoreProgression";
import {
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
  USER_PERFORMANCE,
} from "@src/services/mockedData";
import {
  TopFlex,
  Stack,
  LeftPart,
  RowStack,
  NoConnectionBlock,
} from "./Home.styles";
import { useParams } from "react-router-dom";
import getUser, { Endpoints, QueryKeys } from "@src/services/api";
import {
  UserActivityData,
  UserAverageTimeSessions,
  UserData,
  UserPerformanceData,
} from "@src/types/endpoints";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const { id: userId } = useParams();

  if (userId === undefined) {
    return (
      <Container>
        <NoConnection />
        <p>User not found</p>
      </Container>
    );
  }
  const { data: data } = useQuery([QueryKeys.UserData], () =>
    getUser<UserData>({ userId })
  );
  const { data: daily } = useQuery([QueryKeys.Activity], () =>
    getUser<UserActivityData>({ userId, endpoint: Endpoints.Activity })
  );
  const { data: averageTime } = useQuery([QueryKeys.AverageSessions], () =>
    getUser<UserAverageTimeSessions>({
      userId,
      endpoint: Endpoints.AverageSessions,
    })
  );
  const { data: performance } = useQuery([QueryKeys.Performance], () =>
    getUser<UserPerformanceData>({ userId, endpoint: Endpoints.Performance })
  );
  const isDataMocked = import.meta.env.VITE_MOCK_DATA === "true";

  const loadedData = { state: "hasData", data: true };
  const loadedStatus = isDataMocked
    ? { state: "hasData", data: true }
    : loadedData;

  const selectedUserData = isDataMocked ? USER_MAIN_DATA.data : data?.data.data;

  const dailyData = isDataMocked
    ? USER_ACTIVITY.data.sessions
    : daily?.data.data.sessions;

  const averageTimeData = isDataMocked
    ? USER_AVERAGE_SESSIONS.data.sessions
    : averageTime?.data.data.sessions;

  const performanceData = isDataMocked
    ? USER_PERFORMANCE.data.data
    : performance?.data.data.data.sort((a, b) => a.value - b.value);

  return (
    <Container>
      {data?.status === 200 ? (
        <>
          <Heading
            name={selectedUserData?.userInfos.firstName || ""}
            description="Félicitation ! Vous avez explosé vos objectifs hier 👏"
          />
          <TopFlex>
            <LeftPart>
              <DailyActivity data={dailyData || []} />
              <RowStack>
                <AverageSessionTime data={averageTimeData || []} />
                <RadarPerformance
                  data={performanceData || []}
                  // @ts-ignore
                  formatter={(value: string) => frenchKinds[value]}
                />
                <ScoreProgression
                  progression={
                    selectedUserData?.todayScore ||
                    selectedUserData?.score ||
                    10
                  }
                />
              </RowStack>
            </LeftPart>
            <Stack>
              <IntakeCard
                icon={<Calories className="image" />}
                bgIcon="$red3"
                intakeAmount={selectedUserData?.keyData.calorieCount || 1}
                unit="kCal"
                name="Calories"
              />
              <IntakeCard
                icon={<Proteins className="image" />}
                bgIcon="$blue3"
                intakeAmount={selectedUserData?.keyData.proteinCount || 1}
                unit="g"
                name="Proteines"
              />
              <IntakeCard
                icon={<CarboHydrate className="image" />}
                bgIcon="$yellow3"
                intakeAmount={selectedUserData?.keyData.carbohydrateCount || 1}
                unit="g"
                name="Glucides"
              />
              <IntakeCard
                icon={<Lipids className="image" />}
                bgIcon="$pink3"
                intakeAmount={selectedUserData?.keyData.lipidCount || 1}
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
