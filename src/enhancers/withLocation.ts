import {EnhancerResult} from '@truefit/bach';
import {useLocation} from 'react-router';

export default () => (): EnhancerResult => {
  return {
    dependencies: {
      useLocation,
    },
    initialize: `const location = useLocation();`,
    props: ['location'],
  };
};
