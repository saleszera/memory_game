declare type AppReducer<S, A extends string> = (
  state: S,
  action: Action<A>,
) => S;
