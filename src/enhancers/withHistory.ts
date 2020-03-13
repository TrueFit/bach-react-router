import {EnhancerResult} from '@truefit/bach';
import {useHistory} from 'react-router';

export default () => (): EnhancerResult => {
  return {
    dependencies: {
      useHistory,
    },
    initialize: `const history = useHistory();`,
    props: ['history'],
  };
};
