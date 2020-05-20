import {EnhancerResult} from '@truefit/bach';
import {useRouteMatch} from 'react-router';

export default <T>(route?: string) => (): EnhancerResult => {
  const arg = route ? `'${route}'` : '';

  return {
    dependencies: {
      useRouteMatch,
    },
    initialize: `
      const match = useRouteMatch(${arg});
    `,
    props: ['match'],
  };
};
