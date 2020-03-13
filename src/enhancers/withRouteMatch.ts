import {EnhancerResult} from '@truefit/bach';
import {useRouteMatch} from 'react-router';

export default <T>(route: string) => (): EnhancerResult => {
  return {
    dependencies: {
      useRouteMatch,
    },
    initialize: `
      const match = useRouteMatch('${route}');
    `,
    props: ['match'],
  };
};
