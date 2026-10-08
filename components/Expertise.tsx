import Services from "./Services";
import EngineeringProcess from "./projects/EngineeringProcess";

export default function Expertise() {
  return (
    <div className="w-full bg-[#081526]">
      <Services />

      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="h-px bg-white/10" />
      </div>

      <EngineeringProcess />
    </div>
  );
}