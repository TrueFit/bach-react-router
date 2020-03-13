# @truefit/bach-react-router

## Overview

This set of enhancers exposes the hooks from react router to the bach compose chain.

## Installation

```
npm install @truefit/bach-react-router @truefit/bach
```

or

```
yarn add @truefit/bach-react-router @truefit/bach
```

## Enhancers

### withHistory

Gives you access to the history instance that you may use to navigate.

_Example_

#### Typescript

```Typescript
import React from 'react';
import {compose} from '@truefit/bach';
import {withHistory} from '@truefit/bach-react-router';
import {History, LocationState} from 'history';

type Props = {
  history: History<LocationState>;
  handeClick: () => void;
}

const Component = ({handleClick}: Props) => (
  <div>
    <button onClick={handleClick}>
      Click Me
    </button>
  </div>
);

export default compose<Props>(
  withHistory(),

  withCallback<Props>('handleClick', ({history}) => () => {
    history.push('/home');
  }),
)(Component);
```

#### Javascript

```Javascript
import React from 'react';
import {compose} from '@truefit/bach';
import {withHistory} from '@truefit/bach-react-router';

const Component = ({handleClick}) => (
  <div>
    <button onClick={handleClick}>
      Click Me
    </button>
  </div>
);

export default compose(
  withHistory(),

  withCallback('handleClick', ({history}) => () => {
    history.push('/home');
  }),
)(Component);
```

### withLocation

Returns the location object that represents the current URL. You can think about it like a useState that returns a new location whenever the URL changes.

_Example_

#### Typescript

```Typescript
import React from 'react';
import {compose} from '@truefit/bach';
import {withLocation} from '@truefit/bach-react-router';
import {Location, LocationState} from 'history';

type Props = {
  location: Location<LocationState>;
}

const Component = ({location}: Props) => (
  <div>
    {location.pathname}
  </div>
);

export default compose(
  withLocation()
)(Component);
```

#### Javascript

```Javascript
import React from 'react';
import {compose} from '@truefit/bach';
import {withLocation} from '@truefit/bach-react-router';

const Component = ({location}) => (
  <div>
    {location.pathname}
  </div>
);

export default compose(
  withLocation()
)(Component);
```

### withParams

Returns an object of key/value pairs of URL parameters

_Example_

#### Typescript

```Typescript
import React from 'react';
import {compose} from '@truefit/bach';
import {withParams} from '@truefit/bach-react-router';

type Props = {
  slug: string;
}

const Component = ({slug}: Props) => (
  <div>
    {slug}
  </div>
);

export default compose(
  withParams(['slug'])
)(Component);
```

#### Javascript

```Javascript
import React from 'react';
import {compose} from '@truefit/bach';
import {withParams} from '@truefit/bach-react-router';

const Component = ({slug}) => (
  <div>
    {slug}
  </div>
);

export default compose(
  withParams(['slug'])
)(Component);
```

### withRouteMatch

Attempts to match the current URL in the same way that a <Route> would

_Example_

#### Typescript

```Typescript
import React from 'react';
import {compose} from '@truefit/bach';
import {withRouteMatch} from '@truefit/bach-react-router';
import {match} from 'react-router';

type Props = {
  match: match;
}

const Component = ({match}: Props) => (
  <div>
    {match.path}
  </div>
);

export default compose(
  withRouteMatch('/blog/:slug')
)(Component);
```

#### Javascript

```Javascript
import React from 'react';
import {compose} from '@truefit/bach';
import {withRouteMatch} from '@truefit/bach-react-router';

const Component = ({match}) => (
  <div>
    {match.path}
  </div>
);

export default compose(
  withRouteMatch('/blog/:slug')
)(Component);
```
