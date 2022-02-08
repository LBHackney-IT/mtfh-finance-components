export const unauthorizedSSR = {
  redirect: {
    destination: '/login',
    permanent: false,
  },
  props: {
    user: { isLoggedIn: false },
  },
};

export default unauthorizedSSR;
