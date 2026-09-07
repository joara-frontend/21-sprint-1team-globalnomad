import { useQueries } from "@tanstack/react-query";
import { getMyActivityList } from "@/apis/myActivities.api";
import {
  getMyReservationList,
  MY_DASHBOARD_LIST_SIZE,
} from "@/apis/myReservations.api";
import calculateLevel from "@/app/mypage/_libs/calculateLevel";

export function useUserBadge() {
  const results = useQueries({
    queries: [
      {
        queryKey: ["myActivities", "dashboard"],
        queryFn: () =>
          getMyActivityList({ cursorId: null, size: MY_DASHBOARD_LIST_SIZE }),
        staleTime: 60_000,
      },
      {
        queryKey: ["myReservations", "dashboard"],
        queryFn: () =>
          getMyReservationList({
            cursorId: null,
            size: MY_DASHBOARD_LIST_SIZE,
          }),
        staleTime: 60_000,
      },
    ],
  });

  const isLoading = results.some((result) => result.isLoading);
  const [reviewQuery, activityQuery] = results;
  const totalCount =
    (reviewQuery.data?.totalCount || 0) + (activityQuery.data?.totalCount || 0);

  const { badgeLevel, badgeName } = calculateLevel(totalCount);

  return { badgeLevel, badgeName, isLoading };
}
