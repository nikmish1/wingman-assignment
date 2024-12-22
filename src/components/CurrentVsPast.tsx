const Abbrivations = [
  {
    title: "Consultations",
    color: "bg-[#8A94A6]",
  },
  {
    title: "Order closed",
    color: "bg-[#15B79F]",
  },
];

const CurrentVsPast = () => {
  return (
    <div className="flex flex-row gap-6 mt-4">
      {Abbrivations.map((abbr) => (
        <div
          key={abbr.title}
          className="flex flex-row align-middle justify-start mt-4 gap-2"
        >
          <span className="">{abbr.title}</span>
          <span
            className={`w-7 h-[4px] rounded-lg self-center ${abbr.color}`}
          ></span>
        </div>
      ))}
    </div>
  );
};

export default CurrentVsPast;

{
  /* <div className="flex flex-row gap-6 mt-4">
<div className="flex flex-row align-middle justify-start mt-4 gap-2">
  <span className="">Incoming</span>
  <span className="w-7 h-[4px] rounded-lg self-center bg-slate-400"></span>
</div>
<div className="flex flex-row align-middle justify-start mt-4 gap-2">
  <span className="">Answered</span>
  <span className="w-7 h-[4px] rounded-lg self-center bg-[#15B79F]"></span>
</div>
<div className="flex flex-row align-middle justify-start mt-4 gap-2">
  <span className="">Expert online</span>
  <span className="w-7 h-[4px] rounded-lg self-center bg-[#FFE587]"></span>
</div>
</div> */
}
