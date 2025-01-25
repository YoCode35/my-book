export default function DotsRectangle({
  className = "",
  dotColor = "#fff000",
  rows = 3,
  dotsPerRow = 10,
  width = "100%",
  height = "w-full h-[55px] md:h-[45px]",
}) {
  return (
    <div
      className={`w-full ${className}`}
      style={{ width: width, height: height }}
    >
      <div className="w-full h-full flex flex-col justify-between items-center">
        {[...Array(rows)].map((_, index) => (
          <div key={index} className="flex justify-between w-full">
            {[...Array(dotsPerRow)].map((_, pointIndex) => (
              <span
                key={pointIndex}
                className="w-1 h-1 rounded-full"
                style={{ backgroundColor: dotColor }}
              ></span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

  