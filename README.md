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


# Setup
