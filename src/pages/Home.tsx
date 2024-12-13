import CollapsibleAwards from "@/components/CollapsibleAwards.tsx";
import CollapsibleInfo from "@/components/CollapsibleInfo.tsx";
import PupilFeedbackCard from "@/components/PupilFeedbackCard.tsx";
import SchoolFeedbackCard from "@/components/SchoolFeedbackCard.tsx";

function Home() {
  return (
    <>
      <div className="flex container flex-col mt-5 gap-10">
        <p className="mx-auto text-3xl text-center">Леверьева Екатерина Семеновна, учитель русского языка и литературы МБОУ "БУГ им. В.В.Филиппова"</p>
        <div className="flex flex-row flex-wrap justify-evenly gap-[20px]">
          <CollapsibleInfo></CollapsibleInfo>
          <CollapsibleAwards></CollapsibleAwards>
        </div>
        <div className="flex flex-col gap-[20px]">
          <PupilFeedbackCard></PupilFeedbackCard>
          <SchoolFeedbackCard></SchoolFeedbackCard>
        </div>
      </div>
    </>
  )
}

export default Home
