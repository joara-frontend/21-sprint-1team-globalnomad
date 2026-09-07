import { Skeleton } from "@/components/ui/Skeleton/Skeleton";

export default function ReportListSkeleton() {
  return (
    <div className="flex justify-center items-center flex-col md:flex-row gap-[24px]">
      <Skeleton className="w-full md:max-w-[228px] h-[336px] rounded-2xl md:rounded-3xl" />
      <Skeleton className="w-full md:max-w-[228px] h-[336px] rounded-2xl md:rounded-3xl" />
    </div>
  );
}
