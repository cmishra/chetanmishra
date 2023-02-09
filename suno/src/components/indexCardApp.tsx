import { useState } from "react";
import { api } from "../utils/api";

export default function IndexCardApp() {
  const [option, setOption] = useState<string>()
  const { data } = api.example.getFlashCardCombo.useQuery()
  console.log({ data })
  const submittedOptionResult = api.example.submitFlashCardOption.useQuery({ prompt: data?.prompt ?? '', option: option! }, { enabled: Boolean(option) })
  console.log({ data: submittedOptionResult.data })
  const generateOnClick = async (option: string) => {
    setOption(option)
  };
  return (
    <div className="flex flex-col items-center justify-center py-56">
      <div className="max-w-sm justify-items-center overflow-hidden rounded-lg bg-gray-100 shadow-lg">
        <div className="px-12 py-8">
          <div className="mb-2 text-2xl font-bold">The Coldest Sunset</div>
          <p className="text-base text-gray-700"></p>
        </div>
      </div>
      <div className="px-6 pt-12 pb-2">
        {data?.options.map(o => {
          return <OptionBackground option={o} onClick={() => generateOnClick(o)} />
        })}
      </div>
    </div>
  );
}

function OptionBackground({
  option,
  onClick,
}: {
  option: string;
  onClick: () => {};
}) {
  return (
    <>
      <button
        onClick={onClick}
        className="text-md mx-6 mb-2 inline-block rounded-full bg-indigo-300 py-2 px-5 font-semibold text-gray-800 shadow-sm hover:bg-yellow-200 hover:shadow-lg"
      >
        {option}
      </button>
    </>
  );
}
