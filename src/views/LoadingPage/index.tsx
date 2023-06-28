import { AnimatedLogoIcon } from "@/components/AnimatedLogoIcon";

export function LoadingPage() {
  return (
    <div className="flex bg-gray-900 h-screen w-screen items-center justify-center">
      <div className="w-[150px] h-[150px]">
        <AnimatedLogoIcon />
      </div>
    </div>
  );
}
