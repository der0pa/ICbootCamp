export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'clear_counter' : IDL.Func([], [], []),
    'days_to_second' : IDL.Func([IDL.Nat], [IDL.Nat], []),
    'greet' : IDL.Func([IDL.Text], [IDL.Text], []),
    'increment_counter' : IDL.Func([], [IDL.Nat], []),
    'sqr' : IDL.Func([IDL.Nat], [IDL.Nat], []),
    'sum' : IDL.Func([IDL.Nat, IDL.Nat], [IDL.Nat], []),
  });
};
export const init = ({ IDL }) => { return []; };
