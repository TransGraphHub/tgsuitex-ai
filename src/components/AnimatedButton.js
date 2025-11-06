export default function AnimatedButton({
  title,
  onClick,
  primaryColor,
  secondaryColor,
  textColor,
}) {
  return (
    <button
    onClick={onClick}
      className={`relative overflow-hidden rounded-full px-6 py-3 text-lg font-semibold text-white group hover:cursor-pointer`}
    >
      {/* Default gradient background */}
      <span
        className={`absolute inset-0 bg-[#032dca] transition-all duration-500 group-hover:opacity-0`}
      />

      {/* Black background — now with straight top */}
      <span
        className={`absolute left-0 top-0 h-full w-full bg-black translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out rounded-xl`}
      />

      {/* Button text */}
      <span className="relative flex items-center gap-2">
        {title} <span className="text-md">→</span>
      </span>
    </button>
  );
}
