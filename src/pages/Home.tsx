import Container from "@src/components/Container";
import { Suspense } from "react";
import { userActivity, userData } from "@src/store";
import { useAtom } from "jotai";
import Heading from "@src/components/Heading";
import DailyActivity from "@src/components/DailyActivity";
import { ReactComponent as Calories } from "@src/assets/icons/food/calories.svg";
import { ReactComponent as Proteins } from "@src/assets/icons/food/proteins.svg";
import { ReactComponent as CarboHydrate } from "@src/assets/icons/food/carbohydrate.svg";
import { ReactComponent as Lipids } from "@src/assets/icons/food/lipids.svg";
import IntakeCard from "@src/components/IntakeCard";
import { styled } from "@src/styles/system-styled";

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

const Home = () => {
  const [data] = useAtom(userData);
  const [daily] = useAtom(userActivity);
  const user = data?.data.data;
  console.log(daily);
  return (
    <Container>
      <Suspense fallback={<p>Waiting for the data to load...</p>}>
        <Heading
          name={user?.userInfos.firstName || ""}
          description="Félicitation ! Vous avez explosé vos objectifs hier 👏"
        />
        <TopFlex>
          <DailyActivity data={daily?.data.data.sessions || []} />
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
              bgIcon="$yellow2"
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
