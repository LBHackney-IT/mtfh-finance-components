import { useRouter } from 'next/router';

export const useGetQueryId = () => {
  const router = useRouter();
  return router.query.id;
};

export const useGetResidentOrPropertyId = () => {
  const router = useRouter();
  const { residentId, propertyId } = router.query;
  return residentId ?? propertyId;
};
