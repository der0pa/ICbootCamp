import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'days_to_second' : (arg_0: bigint) => Promise<bigint>,
  'greet' : (arg_0: string) => Promise<string>,
  'increment_counter' : () => Promise<bigint>,
  'sqr' : (arg_0: bigint) => Promise<bigint>,
  'sum' : (arg_0: bigint, arg_1: bigint) => Promise<bigint>,
}
