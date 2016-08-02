# architecture-flux
architecture, architecture flux, flux, facebook

# Links
- http://fluxxor.com/what-is-flux.html
- https://medium.com/brigade-engineering/what-is-the-flux-application-architecture-b57ebca85b9e#.c2i7xguu0
- https://egghead.io/articles/gentle-introduction-to-the-react-flux-architecture
- https://egghead.io/courses/react-flux-architecture
- https://facebook.github.io/react/docs/flux-overview.html

# Structure and Data Flow

## Dispatcher
- Central hub that _manages all data flow_
- It is essentially a registry _callbacks_ into the **stores**
- It is a simple mechanism for distributing the **actions** to the **stores**
- When an **action** creator_provides_ the **dispacher** with a _new action_, _all_ **stores** in the application _receive_ the **action** via the _callbacks_ in the _registry_
- This is can be used to _manage_ _deoendencies_ between the **stores** by invoking the registered _callbacks_ in a _specific order_
- **Stores** can declaratively _wait_ for others **stores** to _finish_ _updating_, and then _update_ themselves accordingly.


## Stores
- _Contain_ the application _state_ and _logic_.
- Their _role_ is somewhat _similar_ to a _model_ in tradicional _MVC_, but they _manage_ the _state_ of many objects.
- **Stores** _manage_ the application _state_ for a particular **domain** within the application.
- _Emits_ a _change events_
- _Setup_: _Register_ with the **dispacher**
- _Public_ interfaces, _getters, setters_

## View
- **Controller-View** _listen_ for _change events_, _retrieve_ the _new data_ from the **stores** and _provide_ the _new data_ to the _entire_ tree of their childs **views**


# Observations
- Use the concept of **unidirectional data flow**
  - User _interacts_ with an **View**
    - The **View** _propagates_ an _action_ through a _central_ **Dispatcher**
      - Various **stores** that hold the applications's _data_ and _business logic_, which _updates_ _all_ of the **Views** that are _affected_
- **Controller** _don't exists_ in architecture flux
- **Components** _trigger_ **actions** and _listening_ **stores**
- _Flux Memory Leaks_ quando component for criado de novo da um _removeListener_

# Setup
- gulp
- browserify
- reactify

## Plugins
- Flux

# Code
## Stores
- _Emit_ events for **components** _listen_
  - **this.emit(event)**
```
import { EventEmitter } from 'events';

class ClassName extends EventEmitter{
  constructor(){
    super();

  }
  function(text){
    this.emit(event);
  }
}
const ClassName = new ClassName();
export default ClassName;

```

## Components
- Listen events
  - **Store.on(event, function)**
- Import the **actions**
```
import React from "react";
import * as Actions from "path/Actions";
import Store from "path/Store";

export default class NameComponent extends React.Component {
  constructor() {
    super();
  }

  method() {
    Store.on(event, method);
  }
  render() {}
}
```

## Dispatcher
- Central RECEIVED the _method_ and the _data_
  - **dispatcher.register(store.function)** || With this the dispacher _listen_ the method in store
  - **dispacher.dispatch({type, data})** || Run the method that did registered
```
import { Dispatcher } from "flux";
export default new Dispatcher;
```

## Actions
- Have all functions
- **Components** import the **actions**
```
import dispatcher form 'path/dispatcher';
export function method(text){
  dispatcher.dispatch({
    type,
    text,
  });
}
```
