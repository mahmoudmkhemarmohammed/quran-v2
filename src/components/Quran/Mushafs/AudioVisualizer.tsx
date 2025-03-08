const AudioVisualizer = () => {
  return (
    <>
      <div className="flex items-end gap-1 h-5">
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="w-1 bg-[#2aff00ee] rounded"
            style={{
              height: "30%",
              animation: `barAnimation 1s infinite ease-in-out ${i * 0.2}s`,
            }}
          ></span>
        ))}
      </div>

      <style>
        {`
            @keyframes barAnimation {
              0%, 100% { height: 30%; }
              50% { height: 100%; }
            }
          `}
      </style>
    </>
  );
};

export default AudioVisualizer;
