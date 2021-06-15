import {EnhancerContext, EnhancerResult, generateAssignments} from '@truefit/bach';
import {useParams} from 'react-router';

export default <T>(params: Array<keyof T>) =>
  ({generateNewVariable}: EnhancerContext): EnhancerResult => {
    const paramsAlias = generateNewVariable();
    const assignments = generateAssignments(params as string[], paramsAlias);

    return {
      dependencies: {
        useParams,
      },
      initialize: `
      const ${paramsAlias} = useParams();

      ${assignments}
    `,
      props: params as string[],
    };
  };
