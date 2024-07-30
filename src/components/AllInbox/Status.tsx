interface PropsTypes {
  status: "Interested" | "Closed" | "Meeting Booked" | "Meeting Completed";
}

const Status = ({ status }: PropsTypes) => {
  const colors = {
    Interested: ["#57E0A6", "#2D3833"],
    Closed: ["#626FE6", "#323440"],
    "Meeting Booked": ["#9C62E6", "#352F3C"],
    "Meeting Completed": ["#E6D162", "#444234"],
  };

  const [smallCircleColor, bigCircleColor] = colors[status];

  return (
    <div
      className="h-5 w-full text-[#57E0A6] bg-[#222426] flex justify-center items-center gap-1 rounded-xl text-[10px]"
      style={{ color: smallCircleColor }}
    >
      <div
        className="h-3 w-3 rounded-full flex justify-center items-center"
        style={{ backgroundColor: bigCircleColor }}
      >
        <div
          className="h-2 w-2 rounded-full glow-effect "
          style={{ backgroundColor: smallCircleColor }}
        ></div>
      </div>
      {status}
    </div>
  );
};

export default Status;
