
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model District
 * 
 */
export type District = $Result.DefaultSelection<Prisma.$DistrictPayload>
/**
 * Model Officer
 * 
 */
export type Officer = $Result.DefaultSelection<Prisma.$OfficerPayload>
/**
 * Model FineCategory
 * 
 */
export type FineCategory = $Result.DefaultSelection<Prisma.$FineCategoryPayload>
/**
 * Model Fine
 * 
 */
export type Fine = $Result.DefaultSelection<Prisma.$FinePayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model SMSLog
 * 
 */
export type SMSLog = $Result.DefaultSelection<Prisma.$SMSLogPayload>
/**
 * Model SavedCard
 * 
 */
export type SavedCard = $Result.DefaultSelection<Prisma.$SavedCardPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  OFFICER: 'OFFICER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const FineStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  CANCELLED: 'CANCELLED'
};

export type FineStatus = (typeof FineStatus)[keyof typeof FineStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type FineStatus = $Enums.FineStatus

export const FineStatus: typeof $Enums.FineStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.district`: Exposes CRUD operations for the **District** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Districts
    * const districts = await prisma.district.findMany()
    * ```
    */
  get district(): Prisma.DistrictDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.officer`: Exposes CRUD operations for the **Officer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Officers
    * const officers = await prisma.officer.findMany()
    * ```
    */
  get officer(): Prisma.OfficerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fineCategory`: Exposes CRUD operations for the **FineCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FineCategories
    * const fineCategories = await prisma.fineCategory.findMany()
    * ```
    */
  get fineCategory(): Prisma.FineCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fine`: Exposes CRUD operations for the **Fine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fines
    * const fines = await prisma.fine.findMany()
    * ```
    */
  get fine(): Prisma.FineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sMSLog`: Exposes CRUD operations for the **SMSLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SMSLogs
    * const sMSLogs = await prisma.sMSLog.findMany()
    * ```
    */
  get sMSLog(): Prisma.SMSLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.savedCard`: Exposes CRUD operations for the **SavedCard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedCards
    * const savedCards = await prisma.savedCard.findMany()
    * ```
    */
  get savedCard(): Prisma.SavedCardDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    District: 'District',
    Officer: 'Officer',
    FineCategory: 'FineCategory',
    Fine: 'Fine',
    Payment: 'Payment',
    SMSLog: 'SMSLog',
    SavedCard: 'SavedCard'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "district" | "officer" | "fineCategory" | "fine" | "payment" | "sMSLog" | "savedCard"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      District: {
        payload: Prisma.$DistrictPayload<ExtArgs>
        fields: Prisma.DistrictFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DistrictFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DistrictFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>
          }
          findFirst: {
            args: Prisma.DistrictFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DistrictFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>
          }
          findMany: {
            args: Prisma.DistrictFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>[]
          }
          create: {
            args: Prisma.DistrictCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>
          }
          createMany: {
            args: Prisma.DistrictCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DistrictCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>[]
          }
          delete: {
            args: Prisma.DistrictDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>
          }
          update: {
            args: Prisma.DistrictUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>
          }
          deleteMany: {
            args: Prisma.DistrictDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DistrictUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DistrictUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>[]
          }
          upsert: {
            args: Prisma.DistrictUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>
          }
          aggregate: {
            args: Prisma.DistrictAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDistrict>
          }
          groupBy: {
            args: Prisma.DistrictGroupByArgs<ExtArgs>
            result: $Utils.Optional<DistrictGroupByOutputType>[]
          }
          count: {
            args: Prisma.DistrictCountArgs<ExtArgs>
            result: $Utils.Optional<DistrictCountAggregateOutputType> | number
          }
        }
      }
      Officer: {
        payload: Prisma.$OfficerPayload<ExtArgs>
        fields: Prisma.OfficerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OfficerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OfficerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerPayload>
          }
          findFirst: {
            args: Prisma.OfficerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OfficerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerPayload>
          }
          findMany: {
            args: Prisma.OfficerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerPayload>[]
          }
          create: {
            args: Prisma.OfficerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerPayload>
          }
          createMany: {
            args: Prisma.OfficerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OfficerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerPayload>[]
          }
          delete: {
            args: Prisma.OfficerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerPayload>
          }
          update: {
            args: Prisma.OfficerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerPayload>
          }
          deleteMany: {
            args: Prisma.OfficerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OfficerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OfficerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerPayload>[]
          }
          upsert: {
            args: Prisma.OfficerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerPayload>
          }
          aggregate: {
            args: Prisma.OfficerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOfficer>
          }
          groupBy: {
            args: Prisma.OfficerGroupByArgs<ExtArgs>
            result: $Utils.Optional<OfficerGroupByOutputType>[]
          }
          count: {
            args: Prisma.OfficerCountArgs<ExtArgs>
            result: $Utils.Optional<OfficerCountAggregateOutputType> | number
          }
        }
      }
      FineCategory: {
        payload: Prisma.$FineCategoryPayload<ExtArgs>
        fields: Prisma.FineCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FineCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FineCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FineCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FineCategoryPayload>
          }
          findFirst: {
            args: Prisma.FineCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FineCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FineCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FineCategoryPayload>
          }
          findMany: {
            args: Prisma.FineCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FineCategoryPayload>[]
          }
          create: {
            args: Prisma.FineCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FineCategoryPayload>
          }
          createMany: {
            args: Prisma.FineCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FineCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FineCategoryPayload>[]
          }
          delete: {
            args: Prisma.FineCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FineCategoryPayload>
          }
          update: {
            args: Prisma.FineCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FineCategoryPayload>
          }
          deleteMany: {
            args: Prisma.FineCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FineCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FineCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FineCategoryPayload>[]
          }
          upsert: {
            args: Prisma.FineCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FineCategoryPayload>
          }
          aggregate: {
            args: Prisma.FineCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFineCategory>
          }
          groupBy: {
            args: Prisma.FineCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<FineCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.FineCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<FineCategoryCountAggregateOutputType> | number
          }
        }
      }
      Fine: {
        payload: Prisma.$FinePayload<ExtArgs>
        fields: Prisma.FineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinePayload>
          }
          findFirst: {
            args: Prisma.FineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinePayload>
          }
          findMany: {
            args: Prisma.FineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinePayload>[]
          }
          create: {
            args: Prisma.FineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinePayload>
          }
          createMany: {
            args: Prisma.FineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinePayload>[]
          }
          delete: {
            args: Prisma.FineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinePayload>
          }
          update: {
            args: Prisma.FineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinePayload>
          }
          deleteMany: {
            args: Prisma.FineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinePayload>[]
          }
          upsert: {
            args: Prisma.FineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinePayload>
          }
          aggregate: {
            args: Prisma.FineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFine>
          }
          groupBy: {
            args: Prisma.FineGroupByArgs<ExtArgs>
            result: $Utils.Optional<FineGroupByOutputType>[]
          }
          count: {
            args: Prisma.FineCountArgs<ExtArgs>
            result: $Utils.Optional<FineCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      SMSLog: {
        payload: Prisma.$SMSLogPayload<ExtArgs>
        fields: Prisma.SMSLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SMSLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SMSLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSLogPayload>
          }
          findFirst: {
            args: Prisma.SMSLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SMSLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSLogPayload>
          }
          findMany: {
            args: Prisma.SMSLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSLogPayload>[]
          }
          create: {
            args: Prisma.SMSLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSLogPayload>
          }
          createMany: {
            args: Prisma.SMSLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SMSLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSLogPayload>[]
          }
          delete: {
            args: Prisma.SMSLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSLogPayload>
          }
          update: {
            args: Prisma.SMSLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSLogPayload>
          }
          deleteMany: {
            args: Prisma.SMSLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SMSLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SMSLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSLogPayload>[]
          }
          upsert: {
            args: Prisma.SMSLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSLogPayload>
          }
          aggregate: {
            args: Prisma.SMSLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSMSLog>
          }
          groupBy: {
            args: Prisma.SMSLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<SMSLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.SMSLogCountArgs<ExtArgs>
            result: $Utils.Optional<SMSLogCountAggregateOutputType> | number
          }
        }
      }
      SavedCard: {
        payload: Prisma.$SavedCardPayload<ExtArgs>
        fields: Prisma.SavedCardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavedCardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavedCardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCardPayload>
          }
          findFirst: {
            args: Prisma.SavedCardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavedCardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCardPayload>
          }
          findMany: {
            args: Prisma.SavedCardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCardPayload>[]
          }
          create: {
            args: Prisma.SavedCardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCardPayload>
          }
          createMany: {
            args: Prisma.SavedCardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SavedCardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCardPayload>[]
          }
          delete: {
            args: Prisma.SavedCardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCardPayload>
          }
          update: {
            args: Prisma.SavedCardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCardPayload>
          }
          deleteMany: {
            args: Prisma.SavedCardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavedCardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SavedCardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCardPayload>[]
          }
          upsert: {
            args: Prisma.SavedCardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCardPayload>
          }
          aggregate: {
            args: Prisma.SavedCardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavedCard>
          }
          groupBy: {
            args: Prisma.SavedCardGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavedCardGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavedCardCountArgs<ExtArgs>
            result: $Utils.Optional<SavedCardCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    district?: DistrictOmit
    officer?: OfficerOmit
    fineCategory?: FineCategoryOmit
    fine?: FineOmit
    payment?: PaymentOmit
    sMSLog?: SMSLogOmit
    savedCard?: SavedCardOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    savedCards: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedCards?: boolean | UserCountOutputTypeCountSavedCardsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSavedCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedCardWhereInput
  }


  /**
   * Count Type DistrictCountOutputType
   */

  export type DistrictCountOutputType = {
    officers: number
    users: number
  }

  export type DistrictCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    officers?: boolean | DistrictCountOutputTypeCountOfficersArgs
    users?: boolean | DistrictCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * DistrictCountOutputType without action
   */
  export type DistrictCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistrictCountOutputType
     */
    select?: DistrictCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DistrictCountOutputType without action
   */
  export type DistrictCountOutputTypeCountOfficersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfficerWhereInput
  }

  /**
   * DistrictCountOutputType without action
   */
  export type DistrictCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type OfficerCountOutputType
   */

  export type OfficerCountOutputType = {
    fines: number
  }

  export type OfficerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fines?: boolean | OfficerCountOutputTypeCountFinesArgs
  }

  // Custom InputTypes
  /**
   * OfficerCountOutputType without action
   */
  export type OfficerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficerCountOutputType
     */
    select?: OfficerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OfficerCountOutputType without action
   */
  export type OfficerCountOutputTypeCountFinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FineWhereInput
  }


  /**
   * Count Type FineCategoryCountOutputType
   */

  export type FineCategoryCountOutputType = {
    fines: number
  }

  export type FineCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fines?: boolean | FineCategoryCountOutputTypeCountFinesArgs
  }

  // Custom InputTypes
  /**
   * FineCategoryCountOutputType without action
   */
  export type FineCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FineCategoryCountOutputType
     */
    select?: FineCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FineCategoryCountOutputType without action
   */
  export type FineCategoryCountOutputTypeCountFinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FineWhereInput
  }


  /**
   * Count Type PaymentCountOutputType
   */

  export type PaymentCountOutputType = {
    smsLogs: number
  }

  export type PaymentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    smsLogs?: boolean | PaymentCountOutputTypeCountSmsLogsArgs
  }

  // Custom InputTypes
  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentCountOutputType
     */
    select?: PaymentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeCountSmsLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SMSLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    districtId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    districtId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    phone: string | null
    nic: string | null
    dlNo: string | null
    districtId: number | null
    isActive: boolean | null
    refreshToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    phone: string | null
    nic: string | null
    dlNo: string | null
    districtId: number | null
    isActive: boolean | null
    refreshToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    phone: number
    nic: number
    dlNo: number
    districtId: number
    isActive: number
    refreshToken: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    districtId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    districtId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    phone?: true
    nic?: true
    dlNo?: true
    districtId?: true
    isActive?: true
    refreshToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    phone?: true
    nic?: true
    dlNo?: true
    districtId?: true
    isActive?: true
    refreshToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    phone?: true
    nic?: true
    dlNo?: true
    districtId?: true
    isActive?: true
    refreshToken?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    phone: string | null
    nic: string | null
    dlNo: string | null
    districtId: number | null
    isActive: boolean
    refreshToken: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    phone?: boolean
    nic?: boolean
    dlNo?: boolean
    districtId?: boolean
    isActive?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    district?: boolean | User$districtArgs<ExtArgs>
    officer?: boolean | User$officerArgs<ExtArgs>
    savedCards?: boolean | User$savedCardsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    phone?: boolean
    nic?: boolean
    dlNo?: boolean
    districtId?: boolean
    isActive?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    district?: boolean | User$districtArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    phone?: boolean
    nic?: boolean
    dlNo?: boolean
    districtId?: boolean
    isActive?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    district?: boolean | User$districtArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    phone?: boolean
    nic?: boolean
    dlNo?: boolean
    districtId?: boolean
    isActive?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "phone" | "nic" | "dlNo" | "districtId" | "isActive" | "refreshToken" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    district?: boolean | User$districtArgs<ExtArgs>
    officer?: boolean | User$officerArgs<ExtArgs>
    savedCards?: boolean | User$savedCardsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    district?: boolean | User$districtArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    district?: boolean | User$districtArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      district: Prisma.$DistrictPayload<ExtArgs> | null
      officer: Prisma.$OfficerPayload<ExtArgs> | null
      savedCards: Prisma.$SavedCardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      role: $Enums.Role
      phone: string | null
      nic: string | null
      dlNo: string | null
      districtId: number | null
      isActive: boolean
      refreshToken: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    district<T extends User$districtArgs<ExtArgs> = {}>(args?: Subset<T, User$districtArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    officer<T extends User$officerArgs<ExtArgs> = {}>(args?: Subset<T, User$officerArgs<ExtArgs>>): Prisma__OfficerClient<$Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    savedCards<T extends User$savedCardsArgs<ExtArgs> = {}>(args?: Subset<T, User$savedCardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly phone: FieldRef<"User", 'String'>
    readonly nic: FieldRef<"User", 'String'>
    readonly dlNo: FieldRef<"User", 'String'>
    readonly districtId: FieldRef<"User", 'Int'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly refreshToken: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.district
   */
  export type User$districtArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    where?: DistrictWhereInput
  }

  /**
   * User.officer
   */
  export type User$officerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Officer
     */
    select?: OfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Officer
     */
    omit?: OfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerInclude<ExtArgs> | null
    where?: OfficerWhereInput
  }

  /**
   * User.savedCards
   */
  export type User$savedCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedCard
     */
    select?: SavedCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedCard
     */
    omit?: SavedCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCardInclude<ExtArgs> | null
    where?: SavedCardWhereInput
    orderBy?: SavedCardOrderByWithRelationInput | SavedCardOrderByWithRelationInput[]
    cursor?: SavedCardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedCardScalarFieldEnum | SavedCardScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model District
   */

  export type AggregateDistrict = {
    _count: DistrictCountAggregateOutputType | null
    _avg: DistrictAvgAggregateOutputType | null
    _sum: DistrictSumAggregateOutputType | null
    _min: DistrictMinAggregateOutputType | null
    _max: DistrictMaxAggregateOutputType | null
  }

  export type DistrictAvgAggregateOutputType = {
    id: number | null
  }

  export type DistrictSumAggregateOutputType = {
    id: number | null
  }

  export type DistrictMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type DistrictMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type DistrictCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type DistrictAvgAggregateInputType = {
    id?: true
  }

  export type DistrictSumAggregateInputType = {
    id?: true
  }

  export type DistrictMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type DistrictMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type DistrictCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type DistrictAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which District to aggregate.
     */
    where?: DistrictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Districts to fetch.
     */
    orderBy?: DistrictOrderByWithRelationInput | DistrictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DistrictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Districts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Districts
    **/
    _count?: true | DistrictCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DistrictAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DistrictSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DistrictMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DistrictMaxAggregateInputType
  }

  export type GetDistrictAggregateType<T extends DistrictAggregateArgs> = {
        [P in keyof T & keyof AggregateDistrict]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDistrict[P]>
      : GetScalarType<T[P], AggregateDistrict[P]>
  }




  export type DistrictGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistrictWhereInput
    orderBy?: DistrictOrderByWithAggregationInput | DistrictOrderByWithAggregationInput[]
    by: DistrictScalarFieldEnum[] | DistrictScalarFieldEnum
    having?: DistrictScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DistrictCountAggregateInputType | true
    _avg?: DistrictAvgAggregateInputType
    _sum?: DistrictSumAggregateInputType
    _min?: DistrictMinAggregateInputType
    _max?: DistrictMaxAggregateInputType
  }

  export type DistrictGroupByOutputType = {
    id: number
    name: string
    _count: DistrictCountAggregateOutputType | null
    _avg: DistrictAvgAggregateOutputType | null
    _sum: DistrictSumAggregateOutputType | null
    _min: DistrictMinAggregateOutputType | null
    _max: DistrictMaxAggregateOutputType | null
  }

  type GetDistrictGroupByPayload<T extends DistrictGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DistrictGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DistrictGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DistrictGroupByOutputType[P]>
            : GetScalarType<T[P], DistrictGroupByOutputType[P]>
        }
      >
    >


  export type DistrictSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    officers?: boolean | District$officersArgs<ExtArgs>
    users?: boolean | District$usersArgs<ExtArgs>
    _count?: boolean | DistrictCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["district"]>

  export type DistrictSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["district"]>

  export type DistrictSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["district"]>

  export type DistrictSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type DistrictOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["district"]>
  export type DistrictInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    officers?: boolean | District$officersArgs<ExtArgs>
    users?: boolean | District$usersArgs<ExtArgs>
    _count?: boolean | DistrictCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DistrictIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DistrictIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DistrictPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "District"
    objects: {
      officers: Prisma.$OfficerPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["district"]>
    composites: {}
  }

  type DistrictGetPayload<S extends boolean | null | undefined | DistrictDefaultArgs> = $Result.GetResult<Prisma.$DistrictPayload, S>

  type DistrictCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DistrictFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DistrictCountAggregateInputType | true
    }

  export interface DistrictDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['District'], meta: { name: 'District' } }
    /**
     * Find zero or one District that matches the filter.
     * @param {DistrictFindUniqueArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DistrictFindUniqueArgs>(args: SelectSubset<T, DistrictFindUniqueArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one District that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DistrictFindUniqueOrThrowArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DistrictFindUniqueOrThrowArgs>(args: SelectSubset<T, DistrictFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first District that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictFindFirstArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DistrictFindFirstArgs>(args?: SelectSubset<T, DistrictFindFirstArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first District that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictFindFirstOrThrowArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DistrictFindFirstOrThrowArgs>(args?: SelectSubset<T, DistrictFindFirstOrThrowArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Districts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Districts
     * const districts = await prisma.district.findMany()
     * 
     * // Get first 10 Districts
     * const districts = await prisma.district.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const districtWithIdOnly = await prisma.district.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DistrictFindManyArgs>(args?: SelectSubset<T, DistrictFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a District.
     * @param {DistrictCreateArgs} args - Arguments to create a District.
     * @example
     * // Create one District
     * const District = await prisma.district.create({
     *   data: {
     *     // ... data to create a District
     *   }
     * })
     * 
     */
    create<T extends DistrictCreateArgs>(args: SelectSubset<T, DistrictCreateArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Districts.
     * @param {DistrictCreateManyArgs} args - Arguments to create many Districts.
     * @example
     * // Create many Districts
     * const district = await prisma.district.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DistrictCreateManyArgs>(args?: SelectSubset<T, DistrictCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Districts and returns the data saved in the database.
     * @param {DistrictCreateManyAndReturnArgs} args - Arguments to create many Districts.
     * @example
     * // Create many Districts
     * const district = await prisma.district.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Districts and only return the `id`
     * const districtWithIdOnly = await prisma.district.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DistrictCreateManyAndReturnArgs>(args?: SelectSubset<T, DistrictCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a District.
     * @param {DistrictDeleteArgs} args - Arguments to delete one District.
     * @example
     * // Delete one District
     * const District = await prisma.district.delete({
     *   where: {
     *     // ... filter to delete one District
     *   }
     * })
     * 
     */
    delete<T extends DistrictDeleteArgs>(args: SelectSubset<T, DistrictDeleteArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one District.
     * @param {DistrictUpdateArgs} args - Arguments to update one District.
     * @example
     * // Update one District
     * const district = await prisma.district.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DistrictUpdateArgs>(args: SelectSubset<T, DistrictUpdateArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Districts.
     * @param {DistrictDeleteManyArgs} args - Arguments to filter Districts to delete.
     * @example
     * // Delete a few Districts
     * const { count } = await prisma.district.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DistrictDeleteManyArgs>(args?: SelectSubset<T, DistrictDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Districts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Districts
     * const district = await prisma.district.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DistrictUpdateManyArgs>(args: SelectSubset<T, DistrictUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Districts and returns the data updated in the database.
     * @param {DistrictUpdateManyAndReturnArgs} args - Arguments to update many Districts.
     * @example
     * // Update many Districts
     * const district = await prisma.district.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Districts and only return the `id`
     * const districtWithIdOnly = await prisma.district.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DistrictUpdateManyAndReturnArgs>(args: SelectSubset<T, DistrictUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one District.
     * @param {DistrictUpsertArgs} args - Arguments to update or create a District.
     * @example
     * // Update or create a District
     * const district = await prisma.district.upsert({
     *   create: {
     *     // ... data to create a District
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the District we want to update
     *   }
     * })
     */
    upsert<T extends DistrictUpsertArgs>(args: SelectSubset<T, DistrictUpsertArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Districts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictCountArgs} args - Arguments to filter Districts to count.
     * @example
     * // Count the number of Districts
     * const count = await prisma.district.count({
     *   where: {
     *     // ... the filter for the Districts we want to count
     *   }
     * })
    **/
    count<T extends DistrictCountArgs>(
      args?: Subset<T, DistrictCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DistrictCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a District.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DistrictAggregateArgs>(args: Subset<T, DistrictAggregateArgs>): Prisma.PrismaPromise<GetDistrictAggregateType<T>>

    /**
     * Group by District.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DistrictGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DistrictGroupByArgs['orderBy'] }
        : { orderBy?: DistrictGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DistrictGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDistrictGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the District model
   */
  readonly fields: DistrictFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for District.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DistrictClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    officers<T extends District$officersArgs<ExtArgs> = {}>(args?: Subset<T, District$officersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends District$usersArgs<ExtArgs> = {}>(args?: Subset<T, District$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the District model
   */
  interface DistrictFieldRefs {
    readonly id: FieldRef<"District", 'Int'>
    readonly name: FieldRef<"District", 'String'>
  }
    

  // Custom InputTypes
  /**
   * District findUnique
   */
  export type DistrictFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * Filter, which District to fetch.
     */
    where: DistrictWhereUniqueInput
  }

  /**
   * District findUniqueOrThrow
   */
  export type DistrictFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * Filter, which District to fetch.
     */
    where: DistrictWhereUniqueInput
  }

  /**
   * District findFirst
   */
  export type DistrictFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * Filter, which District to fetch.
     */
    where?: DistrictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Districts to fetch.
     */
    orderBy?: DistrictOrderByWithRelationInput | DistrictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Districts.
     */
    cursor?: DistrictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Districts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Districts.
     */
    distinct?: DistrictScalarFieldEnum | DistrictScalarFieldEnum[]
  }

  /**
   * District findFirstOrThrow
   */
  export type DistrictFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * Filter, which District to fetch.
     */
    where?: DistrictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Districts to fetch.
     */
    orderBy?: DistrictOrderByWithRelationInput | DistrictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Districts.
     */
    cursor?: DistrictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Districts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Districts.
     */
    distinct?: DistrictScalarFieldEnum | DistrictScalarFieldEnum[]
  }

  /**
   * District findMany
   */
  export type DistrictFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * Filter, which Districts to fetch.
     */
    where?: DistrictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Districts to fetch.
     */
    orderBy?: DistrictOrderByWithRelationInput | DistrictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Districts.
     */
    cursor?: DistrictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Districts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Districts.
     */
    distinct?: DistrictScalarFieldEnum | DistrictScalarFieldEnum[]
  }

  /**
   * District create
   */
  export type DistrictCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * The data needed to create a District.
     */
    data: XOR<DistrictCreateInput, DistrictUncheckedCreateInput>
  }

  /**
   * District createMany
   */
  export type DistrictCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Districts.
     */
    data: DistrictCreateManyInput | DistrictCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * District createManyAndReturn
   */
  export type DistrictCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * The data used to create many Districts.
     */
    data: DistrictCreateManyInput | DistrictCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * District update
   */
  export type DistrictUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * The data needed to update a District.
     */
    data: XOR<DistrictUpdateInput, DistrictUncheckedUpdateInput>
    /**
     * Choose, which District to update.
     */
    where: DistrictWhereUniqueInput
  }

  /**
   * District updateMany
   */
  export type DistrictUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Districts.
     */
    data: XOR<DistrictUpdateManyMutationInput, DistrictUncheckedUpdateManyInput>
    /**
     * Filter which Districts to update
     */
    where?: DistrictWhereInput
    /**
     * Limit how many Districts to update.
     */
    limit?: number
  }

  /**
   * District updateManyAndReturn
   */
  export type DistrictUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * The data used to update Districts.
     */
    data: XOR<DistrictUpdateManyMutationInput, DistrictUncheckedUpdateManyInput>
    /**
     * Filter which Districts to update
     */
    where?: DistrictWhereInput
    /**
     * Limit how many Districts to update.
     */
    limit?: number
  }

  /**
   * District upsert
   */
  export type DistrictUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * The filter to search for the District to update in case it exists.
     */
    where: DistrictWhereUniqueInput
    /**
     * In case the District found by the `where` argument doesn't exist, create a new District with this data.
     */
    create: XOR<DistrictCreateInput, DistrictUncheckedCreateInput>
    /**
     * In case the District was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DistrictUpdateInput, DistrictUncheckedUpdateInput>
  }

  /**
   * District delete
   */
  export type DistrictDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * Filter which District to delete.
     */
    where: DistrictWhereUniqueInput
  }

  /**
   * District deleteMany
   */
  export type DistrictDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Districts to delete
     */
    where?: DistrictWhereInput
    /**
     * Limit how many Districts to delete.
     */
    limit?: number
  }

  /**
   * District.officers
   */
  export type District$officersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Officer
     */
    select?: OfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Officer
     */
    omit?: OfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerInclude<ExtArgs> | null
    where?: OfficerWhereInput
    orderBy?: OfficerOrderByWithRelationInput | OfficerOrderByWithRelationInput[]
    cursor?: OfficerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OfficerScalarFieldEnum | OfficerScalarFieldEnum[]
  }

  /**
   * District.users
   */
  export type District$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * District without action
   */
  export type DistrictDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
  }


  /**
   * Model Officer
   */

  export type AggregateOfficer = {
    _count: OfficerCountAggregateOutputType | null
    _avg: OfficerAvgAggregateOutputType | null
    _sum: OfficerSumAggregateOutputType | null
    _min: OfficerMinAggregateOutputType | null
    _max: OfficerMaxAggregateOutputType | null
  }

  export type OfficerAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    districtId: number | null
  }

  export type OfficerSumAggregateOutputType = {
    id: number | null
    userId: number | null
    districtId: number | null
  }

  export type OfficerMinAggregateOutputType = {
    id: number | null
    userId: number | null
    badgeNo: string | null
    phone: string | null
    districtId: number | null
    createdAt: Date | null
  }

  export type OfficerMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    badgeNo: string | null
    phone: string | null
    districtId: number | null
    createdAt: Date | null
  }

  export type OfficerCountAggregateOutputType = {
    id: number
    userId: number
    badgeNo: number
    phone: number
    districtId: number
    createdAt: number
    _all: number
  }


  export type OfficerAvgAggregateInputType = {
    id?: true
    userId?: true
    districtId?: true
  }

  export type OfficerSumAggregateInputType = {
    id?: true
    userId?: true
    districtId?: true
  }

  export type OfficerMinAggregateInputType = {
    id?: true
    userId?: true
    badgeNo?: true
    phone?: true
    districtId?: true
    createdAt?: true
  }

  export type OfficerMaxAggregateInputType = {
    id?: true
    userId?: true
    badgeNo?: true
    phone?: true
    districtId?: true
    createdAt?: true
  }

  export type OfficerCountAggregateInputType = {
    id?: true
    userId?: true
    badgeNo?: true
    phone?: true
    districtId?: true
    createdAt?: true
    _all?: true
  }

  export type OfficerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Officer to aggregate.
     */
    where?: OfficerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Officers to fetch.
     */
    orderBy?: OfficerOrderByWithRelationInput | OfficerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OfficerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Officers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Officers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Officers
    **/
    _count?: true | OfficerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OfficerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OfficerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OfficerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OfficerMaxAggregateInputType
  }

  export type GetOfficerAggregateType<T extends OfficerAggregateArgs> = {
        [P in keyof T & keyof AggregateOfficer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOfficer[P]>
      : GetScalarType<T[P], AggregateOfficer[P]>
  }




  export type OfficerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfficerWhereInput
    orderBy?: OfficerOrderByWithAggregationInput | OfficerOrderByWithAggregationInput[]
    by: OfficerScalarFieldEnum[] | OfficerScalarFieldEnum
    having?: OfficerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OfficerCountAggregateInputType | true
    _avg?: OfficerAvgAggregateInputType
    _sum?: OfficerSumAggregateInputType
    _min?: OfficerMinAggregateInputType
    _max?: OfficerMaxAggregateInputType
  }

  export type OfficerGroupByOutputType = {
    id: number
    userId: number
    badgeNo: string
    phone: string
    districtId: number
    createdAt: Date
    _count: OfficerCountAggregateOutputType | null
    _avg: OfficerAvgAggregateOutputType | null
    _sum: OfficerSumAggregateOutputType | null
    _min: OfficerMinAggregateOutputType | null
    _max: OfficerMaxAggregateOutputType | null
  }

  type GetOfficerGroupByPayload<T extends OfficerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OfficerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OfficerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OfficerGroupByOutputType[P]>
            : GetScalarType<T[P], OfficerGroupByOutputType[P]>
        }
      >
    >


  export type OfficerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    badgeNo?: boolean
    phone?: boolean
    districtId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    district?: boolean | DistrictDefaultArgs<ExtArgs>
    fines?: boolean | Officer$finesArgs<ExtArgs>
    _count?: boolean | OfficerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["officer"]>

  export type OfficerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    badgeNo?: boolean
    phone?: boolean
    districtId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    district?: boolean | DistrictDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["officer"]>

  export type OfficerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    badgeNo?: boolean
    phone?: boolean
    districtId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    district?: boolean | DistrictDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["officer"]>

  export type OfficerSelectScalar = {
    id?: boolean
    userId?: boolean
    badgeNo?: boolean
    phone?: boolean
    districtId?: boolean
    createdAt?: boolean
  }

  export type OfficerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "badgeNo" | "phone" | "districtId" | "createdAt", ExtArgs["result"]["officer"]>
  export type OfficerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    district?: boolean | DistrictDefaultArgs<ExtArgs>
    fines?: boolean | Officer$finesArgs<ExtArgs>
    _count?: boolean | OfficerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OfficerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    district?: boolean | DistrictDefaultArgs<ExtArgs>
  }
  export type OfficerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    district?: boolean | DistrictDefaultArgs<ExtArgs>
  }

  export type $OfficerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Officer"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      district: Prisma.$DistrictPayload<ExtArgs>
      fines: Prisma.$FinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      badgeNo: string
      phone: string
      districtId: number
      createdAt: Date
    }, ExtArgs["result"]["officer"]>
    composites: {}
  }

  type OfficerGetPayload<S extends boolean | null | undefined | OfficerDefaultArgs> = $Result.GetResult<Prisma.$OfficerPayload, S>

  type OfficerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OfficerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OfficerCountAggregateInputType | true
    }

  export interface OfficerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Officer'], meta: { name: 'Officer' } }
    /**
     * Find zero or one Officer that matches the filter.
     * @param {OfficerFindUniqueArgs} args - Arguments to find a Officer
     * @example
     * // Get one Officer
     * const officer = await prisma.officer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OfficerFindUniqueArgs>(args: SelectSubset<T, OfficerFindUniqueArgs<ExtArgs>>): Prisma__OfficerClient<$Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Officer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OfficerFindUniqueOrThrowArgs} args - Arguments to find a Officer
     * @example
     * // Get one Officer
     * const officer = await prisma.officer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OfficerFindUniqueOrThrowArgs>(args: SelectSubset<T, OfficerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OfficerClient<$Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Officer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficerFindFirstArgs} args - Arguments to find a Officer
     * @example
     * // Get one Officer
     * const officer = await prisma.officer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OfficerFindFirstArgs>(args?: SelectSubset<T, OfficerFindFirstArgs<ExtArgs>>): Prisma__OfficerClient<$Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Officer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficerFindFirstOrThrowArgs} args - Arguments to find a Officer
     * @example
     * // Get one Officer
     * const officer = await prisma.officer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OfficerFindFirstOrThrowArgs>(args?: SelectSubset<T, OfficerFindFirstOrThrowArgs<ExtArgs>>): Prisma__OfficerClient<$Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Officers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Officers
     * const officers = await prisma.officer.findMany()
     * 
     * // Get first 10 Officers
     * const officers = await prisma.officer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const officerWithIdOnly = await prisma.officer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OfficerFindManyArgs>(args?: SelectSubset<T, OfficerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Officer.
     * @param {OfficerCreateArgs} args - Arguments to create a Officer.
     * @example
     * // Create one Officer
     * const Officer = await prisma.officer.create({
     *   data: {
     *     // ... data to create a Officer
     *   }
     * })
     * 
     */
    create<T extends OfficerCreateArgs>(args: SelectSubset<T, OfficerCreateArgs<ExtArgs>>): Prisma__OfficerClient<$Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Officers.
     * @param {OfficerCreateManyArgs} args - Arguments to create many Officers.
     * @example
     * // Create many Officers
     * const officer = await prisma.officer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OfficerCreateManyArgs>(args?: SelectSubset<T, OfficerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Officers and returns the data saved in the database.
     * @param {OfficerCreateManyAndReturnArgs} args - Arguments to create many Officers.
     * @example
     * // Create many Officers
     * const officer = await prisma.officer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Officers and only return the `id`
     * const officerWithIdOnly = await prisma.officer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OfficerCreateManyAndReturnArgs>(args?: SelectSubset<T, OfficerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Officer.
     * @param {OfficerDeleteArgs} args - Arguments to delete one Officer.
     * @example
     * // Delete one Officer
     * const Officer = await prisma.officer.delete({
     *   where: {
     *     // ... filter to delete one Officer
     *   }
     * })
     * 
     */
    delete<T extends OfficerDeleteArgs>(args: SelectSubset<T, OfficerDeleteArgs<ExtArgs>>): Prisma__OfficerClient<$Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Officer.
     * @param {OfficerUpdateArgs} args - Arguments to update one Officer.
     * @example
     * // Update one Officer
     * const officer = await prisma.officer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OfficerUpdateArgs>(args: SelectSubset<T, OfficerUpdateArgs<ExtArgs>>): Prisma__OfficerClient<$Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Officers.
     * @param {OfficerDeleteManyArgs} args - Arguments to filter Officers to delete.
     * @example
     * // Delete a few Officers
     * const { count } = await prisma.officer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OfficerDeleteManyArgs>(args?: SelectSubset<T, OfficerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Officers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Officers
     * const officer = await prisma.officer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OfficerUpdateManyArgs>(args: SelectSubset<T, OfficerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Officers and returns the data updated in the database.
     * @param {OfficerUpdateManyAndReturnArgs} args - Arguments to update many Officers.
     * @example
     * // Update many Officers
     * const officer = await prisma.officer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Officers and only return the `id`
     * const officerWithIdOnly = await prisma.officer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OfficerUpdateManyAndReturnArgs>(args: SelectSubset<T, OfficerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Officer.
     * @param {OfficerUpsertArgs} args - Arguments to update or create a Officer.
     * @example
     * // Update or create a Officer
     * const officer = await prisma.officer.upsert({
     *   create: {
     *     // ... data to create a Officer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Officer we want to update
     *   }
     * })
     */
    upsert<T extends OfficerUpsertArgs>(args: SelectSubset<T, OfficerUpsertArgs<ExtArgs>>): Prisma__OfficerClient<$Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Officers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficerCountArgs} args - Arguments to filter Officers to count.
     * @example
     * // Count the number of Officers
     * const count = await prisma.officer.count({
     *   where: {
     *     // ... the filter for the Officers we want to count
     *   }
     * })
    **/
    count<T extends OfficerCountArgs>(
      args?: Subset<T, OfficerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OfficerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Officer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OfficerAggregateArgs>(args: Subset<T, OfficerAggregateArgs>): Prisma.PrismaPromise<GetOfficerAggregateType<T>>

    /**
     * Group by Officer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OfficerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OfficerGroupByArgs['orderBy'] }
        : { orderBy?: OfficerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OfficerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfficerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Officer model
   */
  readonly fields: OfficerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Officer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OfficerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    district<T extends DistrictDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DistrictDefaultArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fines<T extends Officer$finesArgs<ExtArgs> = {}>(args?: Subset<T, Officer$finesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Officer model
   */
  interface OfficerFieldRefs {
    readonly id: FieldRef<"Officer", 'Int'>
    readonly userId: FieldRef<"Officer", 'Int'>
    readonly badgeNo: FieldRef<"Officer", 'String'>
    readonly phone: FieldRef<"Officer", 'String'>
    readonly districtId: FieldRef<"Officer", 'Int'>
    readonly createdAt: FieldRef<"Officer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Officer findUnique
   */
  export type OfficerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Officer
     */
    select?: OfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Officer
     */
    omit?: OfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerInclude<ExtArgs> | null
    /**
     * Filter, which Officer to fetch.
     */
    where: OfficerWhereUniqueInput
  }

  /**
   * Officer findUniqueOrThrow
   */
  export type OfficerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Officer
     */
    select?: OfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Officer
     */
    omit?: OfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerInclude<ExtArgs> | null
    /**
     * Filter, which Officer to fetch.
     */
    where: OfficerWhereUniqueInput
  }

  /**
   * Officer findFirst
   */
  export type OfficerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Officer
     */
    select?: OfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Officer
     */
    omit?: OfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerInclude<ExtArgs> | null
    /**
     * Filter, which Officer to fetch.
     */
    where?: OfficerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Officers to fetch.
     */
    orderBy?: OfficerOrderByWithRelationInput | OfficerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Officers.
     */
    cursor?: OfficerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Officers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Officers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Officers.
     */
    distinct?: OfficerScalarFieldEnum | OfficerScalarFieldEnum[]
  }

  /**
   * Officer findFirstOrThrow
   */
  export type OfficerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Officer
     */
    select?: OfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Officer
     */
    omit?: OfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerInclude<ExtArgs> | null
    /**
     * Filter, which Officer to fetch.
     */
    where?: OfficerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Officers to fetch.
     */
    orderBy?: OfficerOrderByWithRelationInput | OfficerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Officers.
     */
    cursor?: OfficerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Officers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Officers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Officers.
     */
    distinct?: OfficerScalarFieldEnum | OfficerScalarFieldEnum[]
  }

  /**
   * Officer findMany
   */
  export type OfficerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Officer
     */
    select?: OfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Officer
     */
    omit?: OfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerInclude<ExtArgs> | null
    /**
     * Filter, which Officers to fetch.
     */
    where?: OfficerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Officers to fetch.
     */
    orderBy?: OfficerOrderByWithRelationInput | OfficerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Officers.
     */
    cursor?: OfficerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Officers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Officers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Officers.
     */
    distinct?: OfficerScalarFieldEnum | OfficerScalarFieldEnum[]
  }

  /**
   * Officer create
   */
  export type OfficerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Officer
     */
    select?: OfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Officer
     */
    omit?: OfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerInclude<ExtArgs> | null
    /**
     * The data needed to create a Officer.
     */
    data: XOR<OfficerCreateInput, OfficerUncheckedCreateInput>
  }

  /**
   * Officer createMany
   */
  export type OfficerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Officers.
     */
    data: OfficerCreateManyInput | OfficerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Officer createManyAndReturn
   */
  export type OfficerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Officer
     */
    select?: OfficerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Officer
     */
    omit?: OfficerOmit<ExtArgs> | null
    /**
     * The data used to create many Officers.
     */
    data: OfficerCreateManyInput | OfficerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Officer update
   */
  export type OfficerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Officer
     */
    select?: OfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Officer
     */
    omit?: OfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerInclude<ExtArgs> | null
    /**
     * The data needed to update a Officer.
     */
    data: XOR<OfficerUpdateInput, OfficerUncheckedUpdateInput>
    /**
     * Choose, which Officer to update.
     */
    where: OfficerWhereUniqueInput
  }

  /**
   * Officer updateMany
   */
  export type OfficerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Officers.
     */
    data: XOR<OfficerUpdateManyMutationInput, OfficerUncheckedUpdateManyInput>
    /**
     * Filter which Officers to update
     */
    where?: OfficerWhereInput
    /**
     * Limit how many Officers to update.
     */
    limit?: number
  }

  /**
   * Officer updateManyAndReturn
   */
  export type OfficerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Officer
     */
    select?: OfficerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Officer
     */
    omit?: OfficerOmit<ExtArgs> | null
    /**
     * The data used to update Officers.
     */
    data: XOR<OfficerUpdateManyMutationInput, OfficerUncheckedUpdateManyInput>
    /**
     * Filter which Officers to update
     */
    where?: OfficerWhereInput
    /**
     * Limit how many Officers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Officer upsert
   */
  export type OfficerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Officer
     */
    select?: OfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Officer
     */
    omit?: OfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerInclude<ExtArgs> | null
    /**
     * The filter to search for the Officer to update in case it exists.
     */
    where: OfficerWhereUniqueInput
    /**
     * In case the Officer found by the `where` argument doesn't exist, create a new Officer with this data.
     */
    create: XOR<OfficerCreateInput, OfficerUncheckedCreateInput>
    /**
     * In case the Officer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OfficerUpdateInput, OfficerUncheckedUpdateInput>
  }

  /**
   * Officer delete
   */
  export type OfficerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Officer
     */
    select?: OfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Officer
     */
    omit?: OfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerInclude<ExtArgs> | null
    /**
     * Filter which Officer to delete.
     */
    where: OfficerWhereUniqueInput
  }

  /**
   * Officer deleteMany
   */
  export type OfficerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Officers to delete
     */
    where?: OfficerWhereInput
    /**
     * Limit how many Officers to delete.
     */
    limit?: number
  }

  /**
   * Officer.fines
   */
  export type Officer$finesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fine
     */
    omit?: FineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
    where?: FineWhereInput
    orderBy?: FineOrderByWithRelationInput | FineOrderByWithRelationInput[]
    cursor?: FineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FineScalarFieldEnum | FineScalarFieldEnum[]
  }

  /**
   * Officer without action
   */
  export type OfficerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Officer
     */
    select?: OfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Officer
     */
    omit?: OfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerInclude<ExtArgs> | null
  }


  /**
   * Model FineCategory
   */

  export type AggregateFineCategory = {
    _count: FineCategoryCountAggregateOutputType | null
    _avg: FineCategoryAvgAggregateOutputType | null
    _sum: FineCategorySumAggregateOutputType | null
    _min: FineCategoryMinAggregateOutputType | null
    _max: FineCategoryMaxAggregateOutputType | null
  }

  export type FineCategoryAvgAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type FineCategorySumAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type FineCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    amount: number | null
    isActive: boolean | null
  }

  export type FineCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    amount: number | null
    isActive: boolean | null
  }

  export type FineCategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    amount: number
    isActive: number
    _all: number
  }


  export type FineCategoryAvgAggregateInputType = {
    id?: true
    amount?: true
  }

  export type FineCategorySumAggregateInputType = {
    id?: true
    amount?: true
  }

  export type FineCategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    amount?: true
    isActive?: true
  }

  export type FineCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    amount?: true
    isActive?: true
  }

  export type FineCategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    amount?: true
    isActive?: true
    _all?: true
  }

  export type FineCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FineCategory to aggregate.
     */
    where?: FineCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FineCategories to fetch.
     */
    orderBy?: FineCategoryOrderByWithRelationInput | FineCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FineCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FineCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FineCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FineCategories
    **/
    _count?: true | FineCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FineCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FineCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FineCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FineCategoryMaxAggregateInputType
  }

  export type GetFineCategoryAggregateType<T extends FineCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateFineCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFineCategory[P]>
      : GetScalarType<T[P], AggregateFineCategory[P]>
  }




  export type FineCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FineCategoryWhereInput
    orderBy?: FineCategoryOrderByWithAggregationInput | FineCategoryOrderByWithAggregationInput[]
    by: FineCategoryScalarFieldEnum[] | FineCategoryScalarFieldEnum
    having?: FineCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FineCategoryCountAggregateInputType | true
    _avg?: FineCategoryAvgAggregateInputType
    _sum?: FineCategorySumAggregateInputType
    _min?: FineCategoryMinAggregateInputType
    _max?: FineCategoryMaxAggregateInputType
  }

  export type FineCategoryGroupByOutputType = {
    id: number
    name: string
    description: string | null
    amount: number
    isActive: boolean
    _count: FineCategoryCountAggregateOutputType | null
    _avg: FineCategoryAvgAggregateOutputType | null
    _sum: FineCategorySumAggregateOutputType | null
    _min: FineCategoryMinAggregateOutputType | null
    _max: FineCategoryMaxAggregateOutputType | null
  }

  type GetFineCategoryGroupByPayload<T extends FineCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FineCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FineCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FineCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], FineCategoryGroupByOutputType[P]>
        }
      >
    >


  export type FineCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    amount?: boolean
    isActive?: boolean
    fines?: boolean | FineCategory$finesArgs<ExtArgs>
    _count?: boolean | FineCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fineCategory"]>

  export type FineCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    amount?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["fineCategory"]>

  export type FineCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    amount?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["fineCategory"]>

  export type FineCategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    amount?: boolean
    isActive?: boolean
  }

  export type FineCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "amount" | "isActive", ExtArgs["result"]["fineCategory"]>
  export type FineCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fines?: boolean | FineCategory$finesArgs<ExtArgs>
    _count?: boolean | FineCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FineCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FineCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FineCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FineCategory"
    objects: {
      fines: Prisma.$FinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      amount: number
      isActive: boolean
    }, ExtArgs["result"]["fineCategory"]>
    composites: {}
  }

  type FineCategoryGetPayload<S extends boolean | null | undefined | FineCategoryDefaultArgs> = $Result.GetResult<Prisma.$FineCategoryPayload, S>

  type FineCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FineCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FineCategoryCountAggregateInputType | true
    }

  export interface FineCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FineCategory'], meta: { name: 'FineCategory' } }
    /**
     * Find zero or one FineCategory that matches the filter.
     * @param {FineCategoryFindUniqueArgs} args - Arguments to find a FineCategory
     * @example
     * // Get one FineCategory
     * const fineCategory = await prisma.fineCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FineCategoryFindUniqueArgs>(args: SelectSubset<T, FineCategoryFindUniqueArgs<ExtArgs>>): Prisma__FineCategoryClient<$Result.GetResult<Prisma.$FineCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FineCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FineCategoryFindUniqueOrThrowArgs} args - Arguments to find a FineCategory
     * @example
     * // Get one FineCategory
     * const fineCategory = await prisma.fineCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FineCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, FineCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FineCategoryClient<$Result.GetResult<Prisma.$FineCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FineCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FineCategoryFindFirstArgs} args - Arguments to find a FineCategory
     * @example
     * // Get one FineCategory
     * const fineCategory = await prisma.fineCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FineCategoryFindFirstArgs>(args?: SelectSubset<T, FineCategoryFindFirstArgs<ExtArgs>>): Prisma__FineCategoryClient<$Result.GetResult<Prisma.$FineCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FineCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FineCategoryFindFirstOrThrowArgs} args - Arguments to find a FineCategory
     * @example
     * // Get one FineCategory
     * const fineCategory = await prisma.fineCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FineCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, FineCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__FineCategoryClient<$Result.GetResult<Prisma.$FineCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FineCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FineCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FineCategories
     * const fineCategories = await prisma.fineCategory.findMany()
     * 
     * // Get first 10 FineCategories
     * const fineCategories = await prisma.fineCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fineCategoryWithIdOnly = await prisma.fineCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FineCategoryFindManyArgs>(args?: SelectSubset<T, FineCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FineCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FineCategory.
     * @param {FineCategoryCreateArgs} args - Arguments to create a FineCategory.
     * @example
     * // Create one FineCategory
     * const FineCategory = await prisma.fineCategory.create({
     *   data: {
     *     // ... data to create a FineCategory
     *   }
     * })
     * 
     */
    create<T extends FineCategoryCreateArgs>(args: SelectSubset<T, FineCategoryCreateArgs<ExtArgs>>): Prisma__FineCategoryClient<$Result.GetResult<Prisma.$FineCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FineCategories.
     * @param {FineCategoryCreateManyArgs} args - Arguments to create many FineCategories.
     * @example
     * // Create many FineCategories
     * const fineCategory = await prisma.fineCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FineCategoryCreateManyArgs>(args?: SelectSubset<T, FineCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FineCategories and returns the data saved in the database.
     * @param {FineCategoryCreateManyAndReturnArgs} args - Arguments to create many FineCategories.
     * @example
     * // Create many FineCategories
     * const fineCategory = await prisma.fineCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FineCategories and only return the `id`
     * const fineCategoryWithIdOnly = await prisma.fineCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FineCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, FineCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FineCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FineCategory.
     * @param {FineCategoryDeleteArgs} args - Arguments to delete one FineCategory.
     * @example
     * // Delete one FineCategory
     * const FineCategory = await prisma.fineCategory.delete({
     *   where: {
     *     // ... filter to delete one FineCategory
     *   }
     * })
     * 
     */
    delete<T extends FineCategoryDeleteArgs>(args: SelectSubset<T, FineCategoryDeleteArgs<ExtArgs>>): Prisma__FineCategoryClient<$Result.GetResult<Prisma.$FineCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FineCategory.
     * @param {FineCategoryUpdateArgs} args - Arguments to update one FineCategory.
     * @example
     * // Update one FineCategory
     * const fineCategory = await prisma.fineCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FineCategoryUpdateArgs>(args: SelectSubset<T, FineCategoryUpdateArgs<ExtArgs>>): Prisma__FineCategoryClient<$Result.GetResult<Prisma.$FineCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FineCategories.
     * @param {FineCategoryDeleteManyArgs} args - Arguments to filter FineCategories to delete.
     * @example
     * // Delete a few FineCategories
     * const { count } = await prisma.fineCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FineCategoryDeleteManyArgs>(args?: SelectSubset<T, FineCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FineCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FineCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FineCategories
     * const fineCategory = await prisma.fineCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FineCategoryUpdateManyArgs>(args: SelectSubset<T, FineCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FineCategories and returns the data updated in the database.
     * @param {FineCategoryUpdateManyAndReturnArgs} args - Arguments to update many FineCategories.
     * @example
     * // Update many FineCategories
     * const fineCategory = await prisma.fineCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FineCategories and only return the `id`
     * const fineCategoryWithIdOnly = await prisma.fineCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FineCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, FineCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FineCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FineCategory.
     * @param {FineCategoryUpsertArgs} args - Arguments to update or create a FineCategory.
     * @example
     * // Update or create a FineCategory
     * const fineCategory = await prisma.fineCategory.upsert({
     *   create: {
     *     // ... data to create a FineCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FineCategory we want to update
     *   }
     * })
     */
    upsert<T extends FineCategoryUpsertArgs>(args: SelectSubset<T, FineCategoryUpsertArgs<ExtArgs>>): Prisma__FineCategoryClient<$Result.GetResult<Prisma.$FineCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FineCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FineCategoryCountArgs} args - Arguments to filter FineCategories to count.
     * @example
     * // Count the number of FineCategories
     * const count = await prisma.fineCategory.count({
     *   where: {
     *     // ... the filter for the FineCategories we want to count
     *   }
     * })
    **/
    count<T extends FineCategoryCountArgs>(
      args?: Subset<T, FineCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FineCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FineCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FineCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FineCategoryAggregateArgs>(args: Subset<T, FineCategoryAggregateArgs>): Prisma.PrismaPromise<GetFineCategoryAggregateType<T>>

    /**
     * Group by FineCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FineCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FineCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FineCategoryGroupByArgs['orderBy'] }
        : { orderBy?: FineCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FineCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFineCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FineCategory model
   */
  readonly fields: FineCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FineCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FineCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fines<T extends FineCategory$finesArgs<ExtArgs> = {}>(args?: Subset<T, FineCategory$finesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FineCategory model
   */
  interface FineCategoryFieldRefs {
    readonly id: FieldRef<"FineCategory", 'Int'>
    readonly name: FieldRef<"FineCategory", 'String'>
    readonly description: FieldRef<"FineCategory", 'String'>
    readonly amount: FieldRef<"FineCategory", 'Float'>
    readonly isActive: FieldRef<"FineCategory", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * FineCategory findUnique
   */
  export type FineCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FineCategory
     */
    select?: FineCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FineCategory
     */
    omit?: FineCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FineCategory to fetch.
     */
    where: FineCategoryWhereUniqueInput
  }

  /**
   * FineCategory findUniqueOrThrow
   */
  export type FineCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FineCategory
     */
    select?: FineCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FineCategory
     */
    omit?: FineCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FineCategory to fetch.
     */
    where: FineCategoryWhereUniqueInput
  }

  /**
   * FineCategory findFirst
   */
  export type FineCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FineCategory
     */
    select?: FineCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FineCategory
     */
    omit?: FineCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FineCategory to fetch.
     */
    where?: FineCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FineCategories to fetch.
     */
    orderBy?: FineCategoryOrderByWithRelationInput | FineCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FineCategories.
     */
    cursor?: FineCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FineCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FineCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FineCategories.
     */
    distinct?: FineCategoryScalarFieldEnum | FineCategoryScalarFieldEnum[]
  }

  /**
   * FineCategory findFirstOrThrow
   */
  export type FineCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FineCategory
     */
    select?: FineCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FineCategory
     */
    omit?: FineCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FineCategory to fetch.
     */
    where?: FineCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FineCategories to fetch.
     */
    orderBy?: FineCategoryOrderByWithRelationInput | FineCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FineCategories.
     */
    cursor?: FineCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FineCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FineCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FineCategories.
     */
    distinct?: FineCategoryScalarFieldEnum | FineCategoryScalarFieldEnum[]
  }

  /**
   * FineCategory findMany
   */
  export type FineCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FineCategory
     */
    select?: FineCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FineCategory
     */
    omit?: FineCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FineCategories to fetch.
     */
    where?: FineCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FineCategories to fetch.
     */
    orderBy?: FineCategoryOrderByWithRelationInput | FineCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FineCategories.
     */
    cursor?: FineCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FineCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FineCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FineCategories.
     */
    distinct?: FineCategoryScalarFieldEnum | FineCategoryScalarFieldEnum[]
  }

  /**
   * FineCategory create
   */
  export type FineCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FineCategory
     */
    select?: FineCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FineCategory
     */
    omit?: FineCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a FineCategory.
     */
    data: XOR<FineCategoryCreateInput, FineCategoryUncheckedCreateInput>
  }

  /**
   * FineCategory createMany
   */
  export type FineCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FineCategories.
     */
    data: FineCategoryCreateManyInput | FineCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FineCategory createManyAndReturn
   */
  export type FineCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FineCategory
     */
    select?: FineCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FineCategory
     */
    omit?: FineCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many FineCategories.
     */
    data: FineCategoryCreateManyInput | FineCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FineCategory update
   */
  export type FineCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FineCategory
     */
    select?: FineCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FineCategory
     */
    omit?: FineCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a FineCategory.
     */
    data: XOR<FineCategoryUpdateInput, FineCategoryUncheckedUpdateInput>
    /**
     * Choose, which FineCategory to update.
     */
    where: FineCategoryWhereUniqueInput
  }

  /**
   * FineCategory updateMany
   */
  export type FineCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FineCategories.
     */
    data: XOR<FineCategoryUpdateManyMutationInput, FineCategoryUncheckedUpdateManyInput>
    /**
     * Filter which FineCategories to update
     */
    where?: FineCategoryWhereInput
    /**
     * Limit how many FineCategories to update.
     */
    limit?: number
  }

  /**
   * FineCategory updateManyAndReturn
   */
  export type FineCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FineCategory
     */
    select?: FineCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FineCategory
     */
    omit?: FineCategoryOmit<ExtArgs> | null
    /**
     * The data used to update FineCategories.
     */
    data: XOR<FineCategoryUpdateManyMutationInput, FineCategoryUncheckedUpdateManyInput>
    /**
     * Filter which FineCategories to update
     */
    where?: FineCategoryWhereInput
    /**
     * Limit how many FineCategories to update.
     */
    limit?: number
  }

  /**
   * FineCategory upsert
   */
  export type FineCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FineCategory
     */
    select?: FineCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FineCategory
     */
    omit?: FineCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the FineCategory to update in case it exists.
     */
    where: FineCategoryWhereUniqueInput
    /**
     * In case the FineCategory found by the `where` argument doesn't exist, create a new FineCategory with this data.
     */
    create: XOR<FineCategoryCreateInput, FineCategoryUncheckedCreateInput>
    /**
     * In case the FineCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FineCategoryUpdateInput, FineCategoryUncheckedUpdateInput>
  }

  /**
   * FineCategory delete
   */
  export type FineCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FineCategory
     */
    select?: FineCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FineCategory
     */
    omit?: FineCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineCategoryInclude<ExtArgs> | null
    /**
     * Filter which FineCategory to delete.
     */
    where: FineCategoryWhereUniqueInput
  }

  /**
   * FineCategory deleteMany
   */
  export type FineCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FineCategories to delete
     */
    where?: FineCategoryWhereInput
    /**
     * Limit how many FineCategories to delete.
     */
    limit?: number
  }

  /**
   * FineCategory.fines
   */
  export type FineCategory$finesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fine
     */
    omit?: FineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
    where?: FineWhereInput
    orderBy?: FineOrderByWithRelationInput | FineOrderByWithRelationInput[]
    cursor?: FineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FineScalarFieldEnum | FineScalarFieldEnum[]
  }

  /**
   * FineCategory without action
   */
  export type FineCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FineCategory
     */
    select?: FineCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FineCategory
     */
    omit?: FineCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Fine
   */

  export type AggregateFine = {
    _count: FineCountAggregateOutputType | null
    _avg: FineAvgAggregateOutputType | null
    _sum: FineSumAggregateOutputType | null
    _min: FineMinAggregateOutputType | null
    _max: FineMaxAggregateOutputType | null
  }

  export type FineAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
    officerId: number | null
  }

  export type FineSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
    officerId: number | null
  }

  export type FineMinAggregateOutputType = {
    id: number | null
    referenceNo: string | null
    vehicleNo: string | null
    driverName: string | null
    driverPhone: string | null
    driverNIC: string | null
    driverDL: string | null
    driverEmail: string | null
    offenseDate: Date | null
    location: string | null
    categoryId: number | null
    officerId: number | null
    status: $Enums.FineStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FineMaxAggregateOutputType = {
    id: number | null
    referenceNo: string | null
    vehicleNo: string | null
    driverName: string | null
    driverPhone: string | null
    driverNIC: string | null
    driverDL: string | null
    driverEmail: string | null
    offenseDate: Date | null
    location: string | null
    categoryId: number | null
    officerId: number | null
    status: $Enums.FineStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FineCountAggregateOutputType = {
    id: number
    referenceNo: number
    vehicleNo: number
    driverName: number
    driverPhone: number
    driverNIC: number
    driverDL: number
    driverEmail: number
    offenseDate: number
    location: number
    categoryId: number
    officerId: number
    status: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FineAvgAggregateInputType = {
    id?: true
    categoryId?: true
    officerId?: true
  }

  export type FineSumAggregateInputType = {
    id?: true
    categoryId?: true
    officerId?: true
  }

  export type FineMinAggregateInputType = {
    id?: true
    referenceNo?: true
    vehicleNo?: true
    driverName?: true
    driverPhone?: true
    driverNIC?: true
    driverDL?: true
    driverEmail?: true
    offenseDate?: true
    location?: true
    categoryId?: true
    officerId?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FineMaxAggregateInputType = {
    id?: true
    referenceNo?: true
    vehicleNo?: true
    driverName?: true
    driverPhone?: true
    driverNIC?: true
    driverDL?: true
    driverEmail?: true
    offenseDate?: true
    location?: true
    categoryId?: true
    officerId?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FineCountAggregateInputType = {
    id?: true
    referenceNo?: true
    vehicleNo?: true
    driverName?: true
    driverPhone?: true
    driverNIC?: true
    driverDL?: true
    driverEmail?: true
    offenseDate?: true
    location?: true
    categoryId?: true
    officerId?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fine to aggregate.
     */
    where?: FineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fines to fetch.
     */
    orderBy?: FineOrderByWithRelationInput | FineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fines
    **/
    _count?: true | FineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FineMaxAggregateInputType
  }

  export type GetFineAggregateType<T extends FineAggregateArgs> = {
        [P in keyof T & keyof AggregateFine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFine[P]>
      : GetScalarType<T[P], AggregateFine[P]>
  }




  export type FineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FineWhereInput
    orderBy?: FineOrderByWithAggregationInput | FineOrderByWithAggregationInput[]
    by: FineScalarFieldEnum[] | FineScalarFieldEnum
    having?: FineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FineCountAggregateInputType | true
    _avg?: FineAvgAggregateInputType
    _sum?: FineSumAggregateInputType
    _min?: FineMinAggregateInputType
    _max?: FineMaxAggregateInputType
  }

  export type FineGroupByOutputType = {
    id: number
    referenceNo: string
    vehicleNo: string
    driverName: string
    driverPhone: string | null
    driverNIC: string | null
    driverDL: string | null
    driverEmail: string | null
    offenseDate: Date
    location: string
    categoryId: number
    officerId: number
    status: $Enums.FineStatus
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: FineCountAggregateOutputType | null
    _avg: FineAvgAggregateOutputType | null
    _sum: FineSumAggregateOutputType | null
    _min: FineMinAggregateOutputType | null
    _max: FineMaxAggregateOutputType | null
  }

  type GetFineGroupByPayload<T extends FineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FineGroupByOutputType[P]>
            : GetScalarType<T[P], FineGroupByOutputType[P]>
        }
      >
    >


  export type FineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referenceNo?: boolean
    vehicleNo?: boolean
    driverName?: boolean
    driverPhone?: boolean
    driverNIC?: boolean
    driverDL?: boolean
    driverEmail?: boolean
    offenseDate?: boolean
    location?: boolean
    categoryId?: boolean
    officerId?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | FineCategoryDefaultArgs<ExtArgs>
    officer?: boolean | OfficerDefaultArgs<ExtArgs>
    payment?: boolean | Fine$paymentArgs<ExtArgs>
  }, ExtArgs["result"]["fine"]>

  export type FineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referenceNo?: boolean
    vehicleNo?: boolean
    driverName?: boolean
    driverPhone?: boolean
    driverNIC?: boolean
    driverDL?: boolean
    driverEmail?: boolean
    offenseDate?: boolean
    location?: boolean
    categoryId?: boolean
    officerId?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | FineCategoryDefaultArgs<ExtArgs>
    officer?: boolean | OfficerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fine"]>

  export type FineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referenceNo?: boolean
    vehicleNo?: boolean
    driverName?: boolean
    driverPhone?: boolean
    driverNIC?: boolean
    driverDL?: boolean
    driverEmail?: boolean
    offenseDate?: boolean
    location?: boolean
    categoryId?: boolean
    officerId?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | FineCategoryDefaultArgs<ExtArgs>
    officer?: boolean | OfficerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fine"]>

  export type FineSelectScalar = {
    id?: boolean
    referenceNo?: boolean
    vehicleNo?: boolean
    driverName?: boolean
    driverPhone?: boolean
    driverNIC?: boolean
    driverDL?: boolean
    driverEmail?: boolean
    offenseDate?: boolean
    location?: boolean
    categoryId?: boolean
    officerId?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "referenceNo" | "vehicleNo" | "driverName" | "driverPhone" | "driverNIC" | "driverDL" | "driverEmail" | "offenseDate" | "location" | "categoryId" | "officerId" | "status" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["fine"]>
  export type FineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | FineCategoryDefaultArgs<ExtArgs>
    officer?: boolean | OfficerDefaultArgs<ExtArgs>
    payment?: boolean | Fine$paymentArgs<ExtArgs>
  }
  export type FineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | FineCategoryDefaultArgs<ExtArgs>
    officer?: boolean | OfficerDefaultArgs<ExtArgs>
  }
  export type FineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | FineCategoryDefaultArgs<ExtArgs>
    officer?: boolean | OfficerDefaultArgs<ExtArgs>
  }

  export type $FinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fine"
    objects: {
      category: Prisma.$FineCategoryPayload<ExtArgs>
      officer: Prisma.$OfficerPayload<ExtArgs>
      payment: Prisma.$PaymentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      referenceNo: string
      vehicleNo: string
      driverName: string
      driverPhone: string | null
      driverNIC: string | null
      driverDL: string | null
      driverEmail: string | null
      offenseDate: Date
      location: string
      categoryId: number
      officerId: number
      status: $Enums.FineStatus
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fine"]>
    composites: {}
  }

  type FineGetPayload<S extends boolean | null | undefined | FineDefaultArgs> = $Result.GetResult<Prisma.$FinePayload, S>

  type FineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FineCountAggregateInputType | true
    }

  export interface FineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fine'], meta: { name: 'Fine' } }
    /**
     * Find zero or one Fine that matches the filter.
     * @param {FineFindUniqueArgs} args - Arguments to find a Fine
     * @example
     * // Get one Fine
     * const fine = await prisma.fine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FineFindUniqueArgs>(args: SelectSubset<T, FineFindUniqueArgs<ExtArgs>>): Prisma__FineClient<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FineFindUniqueOrThrowArgs} args - Arguments to find a Fine
     * @example
     * // Get one Fine
     * const fine = await prisma.fine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FineFindUniqueOrThrowArgs>(args: SelectSubset<T, FineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FineClient<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FineFindFirstArgs} args - Arguments to find a Fine
     * @example
     * // Get one Fine
     * const fine = await prisma.fine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FineFindFirstArgs>(args?: SelectSubset<T, FineFindFirstArgs<ExtArgs>>): Prisma__FineClient<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FineFindFirstOrThrowArgs} args - Arguments to find a Fine
     * @example
     * // Get one Fine
     * const fine = await prisma.fine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FineFindFirstOrThrowArgs>(args?: SelectSubset<T, FineFindFirstOrThrowArgs<ExtArgs>>): Prisma__FineClient<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fines
     * const fines = await prisma.fine.findMany()
     * 
     * // Get first 10 Fines
     * const fines = await prisma.fine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fineWithIdOnly = await prisma.fine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FineFindManyArgs>(args?: SelectSubset<T, FineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fine.
     * @param {FineCreateArgs} args - Arguments to create a Fine.
     * @example
     * // Create one Fine
     * const Fine = await prisma.fine.create({
     *   data: {
     *     // ... data to create a Fine
     *   }
     * })
     * 
     */
    create<T extends FineCreateArgs>(args: SelectSubset<T, FineCreateArgs<ExtArgs>>): Prisma__FineClient<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fines.
     * @param {FineCreateManyArgs} args - Arguments to create many Fines.
     * @example
     * // Create many Fines
     * const fine = await prisma.fine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FineCreateManyArgs>(args?: SelectSubset<T, FineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fines and returns the data saved in the database.
     * @param {FineCreateManyAndReturnArgs} args - Arguments to create many Fines.
     * @example
     * // Create many Fines
     * const fine = await prisma.fine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fines and only return the `id`
     * const fineWithIdOnly = await prisma.fine.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FineCreateManyAndReturnArgs>(args?: SelectSubset<T, FineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fine.
     * @param {FineDeleteArgs} args - Arguments to delete one Fine.
     * @example
     * // Delete one Fine
     * const Fine = await prisma.fine.delete({
     *   where: {
     *     // ... filter to delete one Fine
     *   }
     * })
     * 
     */
    delete<T extends FineDeleteArgs>(args: SelectSubset<T, FineDeleteArgs<ExtArgs>>): Prisma__FineClient<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fine.
     * @param {FineUpdateArgs} args - Arguments to update one Fine.
     * @example
     * // Update one Fine
     * const fine = await prisma.fine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FineUpdateArgs>(args: SelectSubset<T, FineUpdateArgs<ExtArgs>>): Prisma__FineClient<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fines.
     * @param {FineDeleteManyArgs} args - Arguments to filter Fines to delete.
     * @example
     * // Delete a few Fines
     * const { count } = await prisma.fine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FineDeleteManyArgs>(args?: SelectSubset<T, FineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fines
     * const fine = await prisma.fine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FineUpdateManyArgs>(args: SelectSubset<T, FineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fines and returns the data updated in the database.
     * @param {FineUpdateManyAndReturnArgs} args - Arguments to update many Fines.
     * @example
     * // Update many Fines
     * const fine = await prisma.fine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fines and only return the `id`
     * const fineWithIdOnly = await prisma.fine.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FineUpdateManyAndReturnArgs>(args: SelectSubset<T, FineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fine.
     * @param {FineUpsertArgs} args - Arguments to update or create a Fine.
     * @example
     * // Update or create a Fine
     * const fine = await prisma.fine.upsert({
     *   create: {
     *     // ... data to create a Fine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fine we want to update
     *   }
     * })
     */
    upsert<T extends FineUpsertArgs>(args: SelectSubset<T, FineUpsertArgs<ExtArgs>>): Prisma__FineClient<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FineCountArgs} args - Arguments to filter Fines to count.
     * @example
     * // Count the number of Fines
     * const count = await prisma.fine.count({
     *   where: {
     *     // ... the filter for the Fines we want to count
     *   }
     * })
    **/
    count<T extends FineCountArgs>(
      args?: Subset<T, FineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FineAggregateArgs>(args: Subset<T, FineAggregateArgs>): Prisma.PrismaPromise<GetFineAggregateType<T>>

    /**
     * Group by Fine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FineGroupByArgs['orderBy'] }
        : { orderBy?: FineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fine model
   */
  readonly fields: FineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends FineCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FineCategoryDefaultArgs<ExtArgs>>): Prisma__FineCategoryClient<$Result.GetResult<Prisma.$FineCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    officer<T extends OfficerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OfficerDefaultArgs<ExtArgs>>): Prisma__OfficerClient<$Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payment<T extends Fine$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Fine$paymentArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Fine model
   */
  interface FineFieldRefs {
    readonly id: FieldRef<"Fine", 'Int'>
    readonly referenceNo: FieldRef<"Fine", 'String'>
    readonly vehicleNo: FieldRef<"Fine", 'String'>
    readonly driverName: FieldRef<"Fine", 'String'>
    readonly driverPhone: FieldRef<"Fine", 'String'>
    readonly driverNIC: FieldRef<"Fine", 'String'>
    readonly driverDL: FieldRef<"Fine", 'String'>
    readonly driverEmail: FieldRef<"Fine", 'String'>
    readonly offenseDate: FieldRef<"Fine", 'DateTime'>
    readonly location: FieldRef<"Fine", 'String'>
    readonly categoryId: FieldRef<"Fine", 'Int'>
    readonly officerId: FieldRef<"Fine", 'Int'>
    readonly status: FieldRef<"Fine", 'FineStatus'>
    readonly notes: FieldRef<"Fine", 'String'>
    readonly createdAt: FieldRef<"Fine", 'DateTime'>
    readonly updatedAt: FieldRef<"Fine", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Fine findUnique
   */
  export type FineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fine
     */
    omit?: FineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
    /**
     * Filter, which Fine to fetch.
     */
    where: FineWhereUniqueInput
  }

  /**
   * Fine findUniqueOrThrow
   */
  export type FineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fine
     */
    omit?: FineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
    /**
     * Filter, which Fine to fetch.
     */
    where: FineWhereUniqueInput
  }

  /**
   * Fine findFirst
   */
  export type FineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fine
     */
    omit?: FineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
    /**
     * Filter, which Fine to fetch.
     */
    where?: FineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fines to fetch.
     */
    orderBy?: FineOrderByWithRelationInput | FineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fines.
     */
    cursor?: FineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fines.
     */
    distinct?: FineScalarFieldEnum | FineScalarFieldEnum[]
  }

  /**
   * Fine findFirstOrThrow
   */
  export type FineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fine
     */
    omit?: FineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
    /**
     * Filter, which Fine to fetch.
     */
    where?: FineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fines to fetch.
     */
    orderBy?: FineOrderByWithRelationInput | FineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fines.
     */
    cursor?: FineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fines.
     */
    distinct?: FineScalarFieldEnum | FineScalarFieldEnum[]
  }

  /**
   * Fine findMany
   */
  export type FineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fine
     */
    omit?: FineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
    /**
     * Filter, which Fines to fetch.
     */
    where?: FineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fines to fetch.
     */
    orderBy?: FineOrderByWithRelationInput | FineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fines.
     */
    cursor?: FineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fines.
     */
    distinct?: FineScalarFieldEnum | FineScalarFieldEnum[]
  }

  /**
   * Fine create
   */
  export type FineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fine
     */
    omit?: FineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
    /**
     * The data needed to create a Fine.
     */
    data: XOR<FineCreateInput, FineUncheckedCreateInput>
  }

  /**
   * Fine createMany
   */
  export type FineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fines.
     */
    data: FineCreateManyInput | FineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fine createManyAndReturn
   */
  export type FineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fine
     */
    omit?: FineOmit<ExtArgs> | null
    /**
     * The data used to create many Fines.
     */
    data: FineCreateManyInput | FineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fine update
   */
  export type FineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fine
     */
    omit?: FineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
    /**
     * The data needed to update a Fine.
     */
    data: XOR<FineUpdateInput, FineUncheckedUpdateInput>
    /**
     * Choose, which Fine to update.
     */
    where: FineWhereUniqueInput
  }

  /**
   * Fine updateMany
   */
  export type FineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fines.
     */
    data: XOR<FineUpdateManyMutationInput, FineUncheckedUpdateManyInput>
    /**
     * Filter which Fines to update
     */
    where?: FineWhereInput
    /**
     * Limit how many Fines to update.
     */
    limit?: number
  }

  /**
   * Fine updateManyAndReturn
   */
  export type FineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fine
     */
    omit?: FineOmit<ExtArgs> | null
    /**
     * The data used to update Fines.
     */
    data: XOR<FineUpdateManyMutationInput, FineUncheckedUpdateManyInput>
    /**
     * Filter which Fines to update
     */
    where?: FineWhereInput
    /**
     * Limit how many Fines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fine upsert
   */
  export type FineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fine
     */
    omit?: FineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
    /**
     * The filter to search for the Fine to update in case it exists.
     */
    where: FineWhereUniqueInput
    /**
     * In case the Fine found by the `where` argument doesn't exist, create a new Fine with this data.
     */
    create: XOR<FineCreateInput, FineUncheckedCreateInput>
    /**
     * In case the Fine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FineUpdateInput, FineUncheckedUpdateInput>
  }

  /**
   * Fine delete
   */
  export type FineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fine
     */
    omit?: FineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
    /**
     * Filter which Fine to delete.
     */
    where: FineWhereUniqueInput
  }

  /**
   * Fine deleteMany
   */
  export type FineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fines to delete
     */
    where?: FineWhereInput
    /**
     * Limit how many Fines to delete.
     */
    limit?: number
  }

  /**
   * Fine.payment
   */
  export type Fine$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
  }

  /**
   * Fine without action
   */
  export type FineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fine
     */
    omit?: FineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
    fineId: number | null
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    fineId: number | null
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    fineId: number | null
    amount: number | null
    payerName: string | null
    payerPhone: string | null
    paymentMethod: string | null
    status: string | null
    transactionId: string | null
    receiptNo: string | null
    paidAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    fineId: number | null
    amount: number | null
    payerName: string | null
    payerPhone: string | null
    paymentMethod: string | null
    status: string | null
    transactionId: string | null
    receiptNo: string | null
    paidAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    fineId: number
    amount: number
    payerName: number
    payerPhone: number
    paymentMethod: number
    status: number
    transactionId: number
    receiptNo: number
    paidAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    fineId?: true
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    fineId?: true
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    fineId?: true
    amount?: true
    payerName?: true
    payerPhone?: true
    paymentMethod?: true
    status?: true
    transactionId?: true
    receiptNo?: true
    paidAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    fineId?: true
    amount?: true
    payerName?: true
    payerPhone?: true
    paymentMethod?: true
    status?: true
    transactionId?: true
    receiptNo?: true
    paidAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    fineId?: true
    amount?: true
    payerName?: true
    payerPhone?: true
    paymentMethod?: true
    status?: true
    transactionId?: true
    receiptNo?: true
    paidAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: number
    fineId: number
    amount: number
    payerName: string
    payerPhone: string
    paymentMethod: string
    status: string
    transactionId: string | null
    receiptNo: string
    paidAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fineId?: boolean
    amount?: boolean
    payerName?: boolean
    payerPhone?: boolean
    paymentMethod?: boolean
    status?: boolean
    transactionId?: boolean
    receiptNo?: boolean
    paidAt?: boolean
    fine?: boolean | FineDefaultArgs<ExtArgs>
    smsLogs?: boolean | Payment$smsLogsArgs<ExtArgs>
    _count?: boolean | PaymentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fineId?: boolean
    amount?: boolean
    payerName?: boolean
    payerPhone?: boolean
    paymentMethod?: boolean
    status?: boolean
    transactionId?: boolean
    receiptNo?: boolean
    paidAt?: boolean
    fine?: boolean | FineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fineId?: boolean
    amount?: boolean
    payerName?: boolean
    payerPhone?: boolean
    paymentMethod?: boolean
    status?: boolean
    transactionId?: boolean
    receiptNo?: boolean
    paidAt?: boolean
    fine?: boolean | FineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    fineId?: boolean
    amount?: boolean
    payerName?: boolean
    payerPhone?: boolean
    paymentMethod?: boolean
    status?: boolean
    transactionId?: boolean
    receiptNo?: boolean
    paidAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fineId" | "amount" | "payerName" | "payerPhone" | "paymentMethod" | "status" | "transactionId" | "receiptNo" | "paidAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fine?: boolean | FineDefaultArgs<ExtArgs>
    smsLogs?: boolean | Payment$smsLogsArgs<ExtArgs>
    _count?: boolean | PaymentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fine?: boolean | FineDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fine?: boolean | FineDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      fine: Prisma.$FinePayload<ExtArgs>
      smsLogs: Prisma.$SMSLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fineId: number
      amount: number
      payerName: string
      payerPhone: string
      paymentMethod: string
      status: string
      transactionId: string | null
      receiptNo: string
      paidAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fine<T extends FineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FineDefaultArgs<ExtArgs>>): Prisma__FineClient<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    smsLogs<T extends Payment$smsLogsArgs<ExtArgs> = {}>(args?: Subset<T, Payment$smsLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SMSLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'Int'>
    readonly fineId: FieldRef<"Payment", 'Int'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly payerName: FieldRef<"Payment", 'String'>
    readonly payerPhone: FieldRef<"Payment", 'String'>
    readonly paymentMethod: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'String'>
    readonly transactionId: FieldRef<"Payment", 'String'>
    readonly receiptNo: FieldRef<"Payment", 'String'>
    readonly paidAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment.smsLogs
   */
  export type Payment$smsLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSLog
     */
    select?: SMSLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SMSLog
     */
    omit?: SMSLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SMSLogInclude<ExtArgs> | null
    where?: SMSLogWhereInput
    orderBy?: SMSLogOrderByWithRelationInput | SMSLogOrderByWithRelationInput[]
    cursor?: SMSLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SMSLogScalarFieldEnum | SMSLogScalarFieldEnum[]
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model SMSLog
   */

  export type AggregateSMSLog = {
    _count: SMSLogCountAggregateOutputType | null
    _avg: SMSLogAvgAggregateOutputType | null
    _sum: SMSLogSumAggregateOutputType | null
    _min: SMSLogMinAggregateOutputType | null
    _max: SMSLogMaxAggregateOutputType | null
  }

  export type SMSLogAvgAggregateOutputType = {
    id: number | null
    paymentId: number | null
  }

  export type SMSLogSumAggregateOutputType = {
    id: number | null
    paymentId: number | null
  }

  export type SMSLogMinAggregateOutputType = {
    id: number | null
    paymentId: number | null
    officerPhone: string | null
    message: string | null
    status: string | null
    sid: string | null
    sentAt: Date | null
  }

  export type SMSLogMaxAggregateOutputType = {
    id: number | null
    paymentId: number | null
    officerPhone: string | null
    message: string | null
    status: string | null
    sid: string | null
    sentAt: Date | null
  }

  export type SMSLogCountAggregateOutputType = {
    id: number
    paymentId: number
    officerPhone: number
    message: number
    status: number
    sid: number
    sentAt: number
    _all: number
  }


  export type SMSLogAvgAggregateInputType = {
    id?: true
    paymentId?: true
  }

  export type SMSLogSumAggregateInputType = {
    id?: true
    paymentId?: true
  }

  export type SMSLogMinAggregateInputType = {
    id?: true
    paymentId?: true
    officerPhone?: true
    message?: true
    status?: true
    sid?: true
    sentAt?: true
  }

  export type SMSLogMaxAggregateInputType = {
    id?: true
    paymentId?: true
    officerPhone?: true
    message?: true
    status?: true
    sid?: true
    sentAt?: true
  }

  export type SMSLogCountAggregateInputType = {
    id?: true
    paymentId?: true
    officerPhone?: true
    message?: true
    status?: true
    sid?: true
    sentAt?: true
    _all?: true
  }

  export type SMSLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SMSLog to aggregate.
     */
    where?: SMSLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SMSLogs to fetch.
     */
    orderBy?: SMSLogOrderByWithRelationInput | SMSLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SMSLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SMSLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SMSLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SMSLogs
    **/
    _count?: true | SMSLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SMSLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SMSLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SMSLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SMSLogMaxAggregateInputType
  }

  export type GetSMSLogAggregateType<T extends SMSLogAggregateArgs> = {
        [P in keyof T & keyof AggregateSMSLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSMSLog[P]>
      : GetScalarType<T[P], AggregateSMSLog[P]>
  }




  export type SMSLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SMSLogWhereInput
    orderBy?: SMSLogOrderByWithAggregationInput | SMSLogOrderByWithAggregationInput[]
    by: SMSLogScalarFieldEnum[] | SMSLogScalarFieldEnum
    having?: SMSLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SMSLogCountAggregateInputType | true
    _avg?: SMSLogAvgAggregateInputType
    _sum?: SMSLogSumAggregateInputType
    _min?: SMSLogMinAggregateInputType
    _max?: SMSLogMaxAggregateInputType
  }

  export type SMSLogGroupByOutputType = {
    id: number
    paymentId: number
    officerPhone: string
    message: string
    status: string
    sid: string | null
    sentAt: Date
    _count: SMSLogCountAggregateOutputType | null
    _avg: SMSLogAvgAggregateOutputType | null
    _sum: SMSLogSumAggregateOutputType | null
    _min: SMSLogMinAggregateOutputType | null
    _max: SMSLogMaxAggregateOutputType | null
  }

  type GetSMSLogGroupByPayload<T extends SMSLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SMSLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SMSLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SMSLogGroupByOutputType[P]>
            : GetScalarType<T[P], SMSLogGroupByOutputType[P]>
        }
      >
    >


  export type SMSLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentId?: boolean
    officerPhone?: boolean
    message?: boolean
    status?: boolean
    sid?: boolean
    sentAt?: boolean
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sMSLog"]>

  export type SMSLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentId?: boolean
    officerPhone?: boolean
    message?: boolean
    status?: boolean
    sid?: boolean
    sentAt?: boolean
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sMSLog"]>

  export type SMSLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentId?: boolean
    officerPhone?: boolean
    message?: boolean
    status?: boolean
    sid?: boolean
    sentAt?: boolean
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sMSLog"]>

  export type SMSLogSelectScalar = {
    id?: boolean
    paymentId?: boolean
    officerPhone?: boolean
    message?: boolean
    status?: boolean
    sid?: boolean
    sentAt?: boolean
  }

  export type SMSLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "paymentId" | "officerPhone" | "message" | "status" | "sid" | "sentAt", ExtArgs["result"]["sMSLog"]>
  export type SMSLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }
  export type SMSLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }
  export type SMSLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }

  export type $SMSLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SMSLog"
    objects: {
      payment: Prisma.$PaymentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      paymentId: number
      officerPhone: string
      message: string
      status: string
      sid: string | null
      sentAt: Date
    }, ExtArgs["result"]["sMSLog"]>
    composites: {}
  }

  type SMSLogGetPayload<S extends boolean | null | undefined | SMSLogDefaultArgs> = $Result.GetResult<Prisma.$SMSLogPayload, S>

  type SMSLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SMSLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SMSLogCountAggregateInputType | true
    }

  export interface SMSLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SMSLog'], meta: { name: 'SMSLog' } }
    /**
     * Find zero or one SMSLog that matches the filter.
     * @param {SMSLogFindUniqueArgs} args - Arguments to find a SMSLog
     * @example
     * // Get one SMSLog
     * const sMSLog = await prisma.sMSLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SMSLogFindUniqueArgs>(args: SelectSubset<T, SMSLogFindUniqueArgs<ExtArgs>>): Prisma__SMSLogClient<$Result.GetResult<Prisma.$SMSLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SMSLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SMSLogFindUniqueOrThrowArgs} args - Arguments to find a SMSLog
     * @example
     * // Get one SMSLog
     * const sMSLog = await prisma.sMSLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SMSLogFindUniqueOrThrowArgs>(args: SelectSubset<T, SMSLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SMSLogClient<$Result.GetResult<Prisma.$SMSLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SMSLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SMSLogFindFirstArgs} args - Arguments to find a SMSLog
     * @example
     * // Get one SMSLog
     * const sMSLog = await prisma.sMSLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SMSLogFindFirstArgs>(args?: SelectSubset<T, SMSLogFindFirstArgs<ExtArgs>>): Prisma__SMSLogClient<$Result.GetResult<Prisma.$SMSLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SMSLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SMSLogFindFirstOrThrowArgs} args - Arguments to find a SMSLog
     * @example
     * // Get one SMSLog
     * const sMSLog = await prisma.sMSLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SMSLogFindFirstOrThrowArgs>(args?: SelectSubset<T, SMSLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__SMSLogClient<$Result.GetResult<Prisma.$SMSLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SMSLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SMSLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SMSLogs
     * const sMSLogs = await prisma.sMSLog.findMany()
     * 
     * // Get first 10 SMSLogs
     * const sMSLogs = await prisma.sMSLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sMSLogWithIdOnly = await prisma.sMSLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SMSLogFindManyArgs>(args?: SelectSubset<T, SMSLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SMSLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SMSLog.
     * @param {SMSLogCreateArgs} args - Arguments to create a SMSLog.
     * @example
     * // Create one SMSLog
     * const SMSLog = await prisma.sMSLog.create({
     *   data: {
     *     // ... data to create a SMSLog
     *   }
     * })
     * 
     */
    create<T extends SMSLogCreateArgs>(args: SelectSubset<T, SMSLogCreateArgs<ExtArgs>>): Prisma__SMSLogClient<$Result.GetResult<Prisma.$SMSLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SMSLogs.
     * @param {SMSLogCreateManyArgs} args - Arguments to create many SMSLogs.
     * @example
     * // Create many SMSLogs
     * const sMSLog = await prisma.sMSLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SMSLogCreateManyArgs>(args?: SelectSubset<T, SMSLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SMSLogs and returns the data saved in the database.
     * @param {SMSLogCreateManyAndReturnArgs} args - Arguments to create many SMSLogs.
     * @example
     * // Create many SMSLogs
     * const sMSLog = await prisma.sMSLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SMSLogs and only return the `id`
     * const sMSLogWithIdOnly = await prisma.sMSLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SMSLogCreateManyAndReturnArgs>(args?: SelectSubset<T, SMSLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SMSLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SMSLog.
     * @param {SMSLogDeleteArgs} args - Arguments to delete one SMSLog.
     * @example
     * // Delete one SMSLog
     * const SMSLog = await prisma.sMSLog.delete({
     *   where: {
     *     // ... filter to delete one SMSLog
     *   }
     * })
     * 
     */
    delete<T extends SMSLogDeleteArgs>(args: SelectSubset<T, SMSLogDeleteArgs<ExtArgs>>): Prisma__SMSLogClient<$Result.GetResult<Prisma.$SMSLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SMSLog.
     * @param {SMSLogUpdateArgs} args - Arguments to update one SMSLog.
     * @example
     * // Update one SMSLog
     * const sMSLog = await prisma.sMSLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SMSLogUpdateArgs>(args: SelectSubset<T, SMSLogUpdateArgs<ExtArgs>>): Prisma__SMSLogClient<$Result.GetResult<Prisma.$SMSLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SMSLogs.
     * @param {SMSLogDeleteManyArgs} args - Arguments to filter SMSLogs to delete.
     * @example
     * // Delete a few SMSLogs
     * const { count } = await prisma.sMSLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SMSLogDeleteManyArgs>(args?: SelectSubset<T, SMSLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SMSLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SMSLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SMSLogs
     * const sMSLog = await prisma.sMSLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SMSLogUpdateManyArgs>(args: SelectSubset<T, SMSLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SMSLogs and returns the data updated in the database.
     * @param {SMSLogUpdateManyAndReturnArgs} args - Arguments to update many SMSLogs.
     * @example
     * // Update many SMSLogs
     * const sMSLog = await prisma.sMSLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SMSLogs and only return the `id`
     * const sMSLogWithIdOnly = await prisma.sMSLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SMSLogUpdateManyAndReturnArgs>(args: SelectSubset<T, SMSLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SMSLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SMSLog.
     * @param {SMSLogUpsertArgs} args - Arguments to update or create a SMSLog.
     * @example
     * // Update or create a SMSLog
     * const sMSLog = await prisma.sMSLog.upsert({
     *   create: {
     *     // ... data to create a SMSLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SMSLog we want to update
     *   }
     * })
     */
    upsert<T extends SMSLogUpsertArgs>(args: SelectSubset<T, SMSLogUpsertArgs<ExtArgs>>): Prisma__SMSLogClient<$Result.GetResult<Prisma.$SMSLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SMSLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SMSLogCountArgs} args - Arguments to filter SMSLogs to count.
     * @example
     * // Count the number of SMSLogs
     * const count = await prisma.sMSLog.count({
     *   where: {
     *     // ... the filter for the SMSLogs we want to count
     *   }
     * })
    **/
    count<T extends SMSLogCountArgs>(
      args?: Subset<T, SMSLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SMSLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SMSLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SMSLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SMSLogAggregateArgs>(args: Subset<T, SMSLogAggregateArgs>): Prisma.PrismaPromise<GetSMSLogAggregateType<T>>

    /**
     * Group by SMSLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SMSLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SMSLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SMSLogGroupByArgs['orderBy'] }
        : { orderBy?: SMSLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SMSLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSMSLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SMSLog model
   */
  readonly fields: SMSLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SMSLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SMSLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payment<T extends PaymentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentDefaultArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SMSLog model
   */
  interface SMSLogFieldRefs {
    readonly id: FieldRef<"SMSLog", 'Int'>
    readonly paymentId: FieldRef<"SMSLog", 'Int'>
    readonly officerPhone: FieldRef<"SMSLog", 'String'>
    readonly message: FieldRef<"SMSLog", 'String'>
    readonly status: FieldRef<"SMSLog", 'String'>
    readonly sid: FieldRef<"SMSLog", 'String'>
    readonly sentAt: FieldRef<"SMSLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SMSLog findUnique
   */
  export type SMSLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSLog
     */
    select?: SMSLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SMSLog
     */
    omit?: SMSLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SMSLogInclude<ExtArgs> | null
    /**
     * Filter, which SMSLog to fetch.
     */
    where: SMSLogWhereUniqueInput
  }

  /**
   * SMSLog findUniqueOrThrow
   */
  export type SMSLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSLog
     */
    select?: SMSLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SMSLog
     */
    omit?: SMSLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SMSLogInclude<ExtArgs> | null
    /**
     * Filter, which SMSLog to fetch.
     */
    where: SMSLogWhereUniqueInput
  }

  /**
   * SMSLog findFirst
   */
  export type SMSLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSLog
     */
    select?: SMSLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SMSLog
     */
    omit?: SMSLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SMSLogInclude<ExtArgs> | null
    /**
     * Filter, which SMSLog to fetch.
     */
    where?: SMSLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SMSLogs to fetch.
     */
    orderBy?: SMSLogOrderByWithRelationInput | SMSLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SMSLogs.
     */
    cursor?: SMSLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SMSLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SMSLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SMSLogs.
     */
    distinct?: SMSLogScalarFieldEnum | SMSLogScalarFieldEnum[]
  }

  /**
   * SMSLog findFirstOrThrow
   */
  export type SMSLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSLog
     */
    select?: SMSLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SMSLog
     */
    omit?: SMSLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SMSLogInclude<ExtArgs> | null
    /**
     * Filter, which SMSLog to fetch.
     */
    where?: SMSLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SMSLogs to fetch.
     */
    orderBy?: SMSLogOrderByWithRelationInput | SMSLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SMSLogs.
     */
    cursor?: SMSLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SMSLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SMSLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SMSLogs.
     */
    distinct?: SMSLogScalarFieldEnum | SMSLogScalarFieldEnum[]
  }

  /**
   * SMSLog findMany
   */
  export type SMSLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSLog
     */
    select?: SMSLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SMSLog
     */
    omit?: SMSLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SMSLogInclude<ExtArgs> | null
    /**
     * Filter, which SMSLogs to fetch.
     */
    where?: SMSLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SMSLogs to fetch.
     */
    orderBy?: SMSLogOrderByWithRelationInput | SMSLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SMSLogs.
     */
    cursor?: SMSLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SMSLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SMSLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SMSLogs.
     */
    distinct?: SMSLogScalarFieldEnum | SMSLogScalarFieldEnum[]
  }

  /**
   * SMSLog create
   */
  export type SMSLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSLog
     */
    select?: SMSLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SMSLog
     */
    omit?: SMSLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SMSLogInclude<ExtArgs> | null
    /**
     * The data needed to create a SMSLog.
     */
    data: XOR<SMSLogCreateInput, SMSLogUncheckedCreateInput>
  }

  /**
   * SMSLog createMany
   */
  export type SMSLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SMSLogs.
     */
    data: SMSLogCreateManyInput | SMSLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SMSLog createManyAndReturn
   */
  export type SMSLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSLog
     */
    select?: SMSLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SMSLog
     */
    omit?: SMSLogOmit<ExtArgs> | null
    /**
     * The data used to create many SMSLogs.
     */
    data: SMSLogCreateManyInput | SMSLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SMSLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SMSLog update
   */
  export type SMSLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSLog
     */
    select?: SMSLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SMSLog
     */
    omit?: SMSLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SMSLogInclude<ExtArgs> | null
    /**
     * The data needed to update a SMSLog.
     */
    data: XOR<SMSLogUpdateInput, SMSLogUncheckedUpdateInput>
    /**
     * Choose, which SMSLog to update.
     */
    where: SMSLogWhereUniqueInput
  }

  /**
   * SMSLog updateMany
   */
  export type SMSLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SMSLogs.
     */
    data: XOR<SMSLogUpdateManyMutationInput, SMSLogUncheckedUpdateManyInput>
    /**
     * Filter which SMSLogs to update
     */
    where?: SMSLogWhereInput
    /**
     * Limit how many SMSLogs to update.
     */
    limit?: number
  }

  /**
   * SMSLog updateManyAndReturn
   */
  export type SMSLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSLog
     */
    select?: SMSLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SMSLog
     */
    omit?: SMSLogOmit<ExtArgs> | null
    /**
     * The data used to update SMSLogs.
     */
    data: XOR<SMSLogUpdateManyMutationInput, SMSLogUncheckedUpdateManyInput>
    /**
     * Filter which SMSLogs to update
     */
    where?: SMSLogWhereInput
    /**
     * Limit how many SMSLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SMSLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SMSLog upsert
   */
  export type SMSLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSLog
     */
    select?: SMSLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SMSLog
     */
    omit?: SMSLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SMSLogInclude<ExtArgs> | null
    /**
     * The filter to search for the SMSLog to update in case it exists.
     */
    where: SMSLogWhereUniqueInput
    /**
     * In case the SMSLog found by the `where` argument doesn't exist, create a new SMSLog with this data.
     */
    create: XOR<SMSLogCreateInput, SMSLogUncheckedCreateInput>
    /**
     * In case the SMSLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SMSLogUpdateInput, SMSLogUncheckedUpdateInput>
  }

  /**
   * SMSLog delete
   */
  export type SMSLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSLog
     */
    select?: SMSLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SMSLog
     */
    omit?: SMSLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SMSLogInclude<ExtArgs> | null
    /**
     * Filter which SMSLog to delete.
     */
    where: SMSLogWhereUniqueInput
  }

  /**
   * SMSLog deleteMany
   */
  export type SMSLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SMSLogs to delete
     */
    where?: SMSLogWhereInput
    /**
     * Limit how many SMSLogs to delete.
     */
    limit?: number
  }

  /**
   * SMSLog without action
   */
  export type SMSLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSLog
     */
    select?: SMSLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SMSLog
     */
    omit?: SMSLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SMSLogInclude<ExtArgs> | null
  }


  /**
   * Model SavedCard
   */

  export type AggregateSavedCard = {
    _count: SavedCardCountAggregateOutputType | null
    _avg: SavedCardAvgAggregateOutputType | null
    _sum: SavedCardSumAggregateOutputType | null
    _min: SavedCardMinAggregateOutputType | null
    _max: SavedCardMaxAggregateOutputType | null
  }

  export type SavedCardAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SavedCardSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SavedCardMinAggregateOutputType = {
    id: number | null
    userId: number | null
    cardholderName: string | null
    cardNumber: string | null
    expiry: string | null
    brand: string | null
    createdAt: Date | null
  }

  export type SavedCardMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    cardholderName: string | null
    cardNumber: string | null
    expiry: string | null
    brand: string | null
    createdAt: Date | null
  }

  export type SavedCardCountAggregateOutputType = {
    id: number
    userId: number
    cardholderName: number
    cardNumber: number
    expiry: number
    brand: number
    createdAt: number
    _all: number
  }


  export type SavedCardAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SavedCardSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SavedCardMinAggregateInputType = {
    id?: true
    userId?: true
    cardholderName?: true
    cardNumber?: true
    expiry?: true
    brand?: true
    createdAt?: true
  }

  export type SavedCardMaxAggregateInputType = {
    id?: true
    userId?: true
    cardholderName?: true
    cardNumber?: true
    expiry?: true
    brand?: true
    createdAt?: true
  }

  export type SavedCardCountAggregateInputType = {
    id?: true
    userId?: true
    cardholderName?: true
    cardNumber?: true
    expiry?: true
    brand?: true
    createdAt?: true
    _all?: true
  }

  export type SavedCardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedCard to aggregate.
     */
    where?: SavedCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedCards to fetch.
     */
    orderBy?: SavedCardOrderByWithRelationInput | SavedCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavedCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedCards
    **/
    _count?: true | SavedCardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SavedCardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SavedCardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedCardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedCardMaxAggregateInputType
  }

  export type GetSavedCardAggregateType<T extends SavedCardAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedCard[P]>
      : GetScalarType<T[P], AggregateSavedCard[P]>
  }




  export type SavedCardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedCardWhereInput
    orderBy?: SavedCardOrderByWithAggregationInput | SavedCardOrderByWithAggregationInput[]
    by: SavedCardScalarFieldEnum[] | SavedCardScalarFieldEnum
    having?: SavedCardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedCardCountAggregateInputType | true
    _avg?: SavedCardAvgAggregateInputType
    _sum?: SavedCardSumAggregateInputType
    _min?: SavedCardMinAggregateInputType
    _max?: SavedCardMaxAggregateInputType
  }

  export type SavedCardGroupByOutputType = {
    id: number
    userId: number
    cardholderName: string
    cardNumber: string
    expiry: string
    brand: string
    createdAt: Date
    _count: SavedCardCountAggregateOutputType | null
    _avg: SavedCardAvgAggregateOutputType | null
    _sum: SavedCardSumAggregateOutputType | null
    _min: SavedCardMinAggregateOutputType | null
    _max: SavedCardMaxAggregateOutputType | null
  }

  type GetSavedCardGroupByPayload<T extends SavedCardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavedCardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedCardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedCardGroupByOutputType[P]>
            : GetScalarType<T[P], SavedCardGroupByOutputType[P]>
        }
      >
    >


  export type SavedCardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    cardholderName?: boolean
    cardNumber?: boolean
    expiry?: boolean
    brand?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedCard"]>

  export type SavedCardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    cardholderName?: boolean
    cardNumber?: boolean
    expiry?: boolean
    brand?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedCard"]>

  export type SavedCardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    cardholderName?: boolean
    cardNumber?: boolean
    expiry?: boolean
    brand?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedCard"]>

  export type SavedCardSelectScalar = {
    id?: boolean
    userId?: boolean
    cardholderName?: boolean
    cardNumber?: boolean
    expiry?: boolean
    brand?: boolean
    createdAt?: boolean
  }

  export type SavedCardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "cardholderName" | "cardNumber" | "expiry" | "brand" | "createdAt", ExtArgs["result"]["savedCard"]>
  export type SavedCardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SavedCardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SavedCardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SavedCardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavedCard"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      cardholderName: string
      cardNumber: string
      expiry: string
      brand: string
      createdAt: Date
    }, ExtArgs["result"]["savedCard"]>
    composites: {}
  }

  type SavedCardGetPayload<S extends boolean | null | undefined | SavedCardDefaultArgs> = $Result.GetResult<Prisma.$SavedCardPayload, S>

  type SavedCardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SavedCardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SavedCardCountAggregateInputType | true
    }

  export interface SavedCardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavedCard'], meta: { name: 'SavedCard' } }
    /**
     * Find zero or one SavedCard that matches the filter.
     * @param {SavedCardFindUniqueArgs} args - Arguments to find a SavedCard
     * @example
     * // Get one SavedCard
     * const savedCard = await prisma.savedCard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavedCardFindUniqueArgs>(args: SelectSubset<T, SavedCardFindUniqueArgs<ExtArgs>>): Prisma__SavedCardClient<$Result.GetResult<Prisma.$SavedCardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SavedCard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavedCardFindUniqueOrThrowArgs} args - Arguments to find a SavedCard
     * @example
     * // Get one SavedCard
     * const savedCard = await prisma.savedCard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavedCardFindUniqueOrThrowArgs>(args: SelectSubset<T, SavedCardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavedCardClient<$Result.GetResult<Prisma.$SavedCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedCard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedCardFindFirstArgs} args - Arguments to find a SavedCard
     * @example
     * // Get one SavedCard
     * const savedCard = await prisma.savedCard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavedCardFindFirstArgs>(args?: SelectSubset<T, SavedCardFindFirstArgs<ExtArgs>>): Prisma__SavedCardClient<$Result.GetResult<Prisma.$SavedCardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedCard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedCardFindFirstOrThrowArgs} args - Arguments to find a SavedCard
     * @example
     * // Get one SavedCard
     * const savedCard = await prisma.savedCard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavedCardFindFirstOrThrowArgs>(args?: SelectSubset<T, SavedCardFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavedCardClient<$Result.GetResult<Prisma.$SavedCardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavedCards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedCardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedCards
     * const savedCards = await prisma.savedCard.findMany()
     * 
     * // Get first 10 SavedCards
     * const savedCards = await prisma.savedCard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savedCardWithIdOnly = await prisma.savedCard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SavedCardFindManyArgs>(args?: SelectSubset<T, SavedCardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SavedCard.
     * @param {SavedCardCreateArgs} args - Arguments to create a SavedCard.
     * @example
     * // Create one SavedCard
     * const SavedCard = await prisma.savedCard.create({
     *   data: {
     *     // ... data to create a SavedCard
     *   }
     * })
     * 
     */
    create<T extends SavedCardCreateArgs>(args: SelectSubset<T, SavedCardCreateArgs<ExtArgs>>): Prisma__SavedCardClient<$Result.GetResult<Prisma.$SavedCardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SavedCards.
     * @param {SavedCardCreateManyArgs} args - Arguments to create many SavedCards.
     * @example
     * // Create many SavedCards
     * const savedCard = await prisma.savedCard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavedCardCreateManyArgs>(args?: SelectSubset<T, SavedCardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SavedCards and returns the data saved in the database.
     * @param {SavedCardCreateManyAndReturnArgs} args - Arguments to create many SavedCards.
     * @example
     * // Create many SavedCards
     * const savedCard = await prisma.savedCard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SavedCards and only return the `id`
     * const savedCardWithIdOnly = await prisma.savedCard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SavedCardCreateManyAndReturnArgs>(args?: SelectSubset<T, SavedCardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedCardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SavedCard.
     * @param {SavedCardDeleteArgs} args - Arguments to delete one SavedCard.
     * @example
     * // Delete one SavedCard
     * const SavedCard = await prisma.savedCard.delete({
     *   where: {
     *     // ... filter to delete one SavedCard
     *   }
     * })
     * 
     */
    delete<T extends SavedCardDeleteArgs>(args: SelectSubset<T, SavedCardDeleteArgs<ExtArgs>>): Prisma__SavedCardClient<$Result.GetResult<Prisma.$SavedCardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SavedCard.
     * @param {SavedCardUpdateArgs} args - Arguments to update one SavedCard.
     * @example
     * // Update one SavedCard
     * const savedCard = await prisma.savedCard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavedCardUpdateArgs>(args: SelectSubset<T, SavedCardUpdateArgs<ExtArgs>>): Prisma__SavedCardClient<$Result.GetResult<Prisma.$SavedCardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SavedCards.
     * @param {SavedCardDeleteManyArgs} args - Arguments to filter SavedCards to delete.
     * @example
     * // Delete a few SavedCards
     * const { count } = await prisma.savedCard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavedCardDeleteManyArgs>(args?: SelectSubset<T, SavedCardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedCardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedCards
     * const savedCard = await prisma.savedCard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavedCardUpdateManyArgs>(args: SelectSubset<T, SavedCardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedCards and returns the data updated in the database.
     * @param {SavedCardUpdateManyAndReturnArgs} args - Arguments to update many SavedCards.
     * @example
     * // Update many SavedCards
     * const savedCard = await prisma.savedCard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SavedCards and only return the `id`
     * const savedCardWithIdOnly = await prisma.savedCard.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SavedCardUpdateManyAndReturnArgs>(args: SelectSubset<T, SavedCardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedCardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SavedCard.
     * @param {SavedCardUpsertArgs} args - Arguments to update or create a SavedCard.
     * @example
     * // Update or create a SavedCard
     * const savedCard = await prisma.savedCard.upsert({
     *   create: {
     *     // ... data to create a SavedCard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedCard we want to update
     *   }
     * })
     */
    upsert<T extends SavedCardUpsertArgs>(args: SelectSubset<T, SavedCardUpsertArgs<ExtArgs>>): Prisma__SavedCardClient<$Result.GetResult<Prisma.$SavedCardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SavedCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedCardCountArgs} args - Arguments to filter SavedCards to count.
     * @example
     * // Count the number of SavedCards
     * const count = await prisma.savedCard.count({
     *   where: {
     *     // ... the filter for the SavedCards we want to count
     *   }
     * })
    **/
    count<T extends SavedCardCountArgs>(
      args?: Subset<T, SavedCardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedCardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedCardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SavedCardAggregateArgs>(args: Subset<T, SavedCardAggregateArgs>): Prisma.PrismaPromise<GetSavedCardAggregateType<T>>

    /**
     * Group by SavedCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedCardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SavedCardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedCardGroupByArgs['orderBy'] }
        : { orderBy?: SavedCardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SavedCardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavedCard model
   */
  readonly fields: SavedCardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedCard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavedCardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SavedCard model
   */
  interface SavedCardFieldRefs {
    readonly id: FieldRef<"SavedCard", 'Int'>
    readonly userId: FieldRef<"SavedCard", 'Int'>
    readonly cardholderName: FieldRef<"SavedCard", 'String'>
    readonly cardNumber: FieldRef<"SavedCard", 'String'>
    readonly expiry: FieldRef<"SavedCard", 'String'>
    readonly brand: FieldRef<"SavedCard", 'String'>
    readonly createdAt: FieldRef<"SavedCard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SavedCard findUnique
   */
  export type SavedCardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedCard
     */
    select?: SavedCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedCard
     */
    omit?: SavedCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCardInclude<ExtArgs> | null
    /**
     * Filter, which SavedCard to fetch.
     */
    where: SavedCardWhereUniqueInput
  }

  /**
   * SavedCard findUniqueOrThrow
   */
  export type SavedCardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedCard
     */
    select?: SavedCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedCard
     */
    omit?: SavedCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCardInclude<ExtArgs> | null
    /**
     * Filter, which SavedCard to fetch.
     */
    where: SavedCardWhereUniqueInput
  }

  /**
   * SavedCard findFirst
   */
  export type SavedCardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedCard
     */
    select?: SavedCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedCard
     */
    omit?: SavedCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCardInclude<ExtArgs> | null
    /**
     * Filter, which SavedCard to fetch.
     */
    where?: SavedCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedCards to fetch.
     */
    orderBy?: SavedCardOrderByWithRelationInput | SavedCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedCards.
     */
    cursor?: SavedCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedCards.
     */
    distinct?: SavedCardScalarFieldEnum | SavedCardScalarFieldEnum[]
  }

  /**
   * SavedCard findFirstOrThrow
   */
  export type SavedCardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedCard
     */
    select?: SavedCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedCard
     */
    omit?: SavedCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCardInclude<ExtArgs> | null
    /**
     * Filter, which SavedCard to fetch.
     */
    where?: SavedCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedCards to fetch.
     */
    orderBy?: SavedCardOrderByWithRelationInput | SavedCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedCards.
     */
    cursor?: SavedCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedCards.
     */
    distinct?: SavedCardScalarFieldEnum | SavedCardScalarFieldEnum[]
  }

  /**
   * SavedCard findMany
   */
  export type SavedCardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedCard
     */
    select?: SavedCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedCard
     */
    omit?: SavedCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCardInclude<ExtArgs> | null
    /**
     * Filter, which SavedCards to fetch.
     */
    where?: SavedCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedCards to fetch.
     */
    orderBy?: SavedCardOrderByWithRelationInput | SavedCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedCards.
     */
    cursor?: SavedCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedCards.
     */
    distinct?: SavedCardScalarFieldEnum | SavedCardScalarFieldEnum[]
  }

  /**
   * SavedCard create
   */
  export type SavedCardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedCard
     */
    select?: SavedCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedCard
     */
    omit?: SavedCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCardInclude<ExtArgs> | null
    /**
     * The data needed to create a SavedCard.
     */
    data: XOR<SavedCardCreateInput, SavedCardUncheckedCreateInput>
  }

  /**
   * SavedCard createMany
   */
  export type SavedCardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavedCards.
     */
    data: SavedCardCreateManyInput | SavedCardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavedCard createManyAndReturn
   */
  export type SavedCardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedCard
     */
    select?: SavedCardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedCard
     */
    omit?: SavedCardOmit<ExtArgs> | null
    /**
     * The data used to create many SavedCards.
     */
    data: SavedCardCreateManyInput | SavedCardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedCard update
   */
  export type SavedCardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedCard
     */
    select?: SavedCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedCard
     */
    omit?: SavedCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCardInclude<ExtArgs> | null
    /**
     * The data needed to update a SavedCard.
     */
    data: XOR<SavedCardUpdateInput, SavedCardUncheckedUpdateInput>
    /**
     * Choose, which SavedCard to update.
     */
    where: SavedCardWhereUniqueInput
  }

  /**
   * SavedCard updateMany
   */
  export type SavedCardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavedCards.
     */
    data: XOR<SavedCardUpdateManyMutationInput, SavedCardUncheckedUpdateManyInput>
    /**
     * Filter which SavedCards to update
     */
    where?: SavedCardWhereInput
    /**
     * Limit how many SavedCards to update.
     */
    limit?: number
  }

  /**
   * SavedCard updateManyAndReturn
   */
  export type SavedCardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedCard
     */
    select?: SavedCardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedCard
     */
    omit?: SavedCardOmit<ExtArgs> | null
    /**
     * The data used to update SavedCards.
     */
    data: XOR<SavedCardUpdateManyMutationInput, SavedCardUncheckedUpdateManyInput>
    /**
     * Filter which SavedCards to update
     */
    where?: SavedCardWhereInput
    /**
     * Limit how many SavedCards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedCard upsert
   */
  export type SavedCardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedCard
     */
    select?: SavedCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedCard
     */
    omit?: SavedCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCardInclude<ExtArgs> | null
    /**
     * The filter to search for the SavedCard to update in case it exists.
     */
    where: SavedCardWhereUniqueInput
    /**
     * In case the SavedCard found by the `where` argument doesn't exist, create a new SavedCard with this data.
     */
    create: XOR<SavedCardCreateInput, SavedCardUncheckedCreateInput>
    /**
     * In case the SavedCard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavedCardUpdateInput, SavedCardUncheckedUpdateInput>
  }

  /**
   * SavedCard delete
   */
  export type SavedCardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedCard
     */
    select?: SavedCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedCard
     */
    omit?: SavedCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCardInclude<ExtArgs> | null
    /**
     * Filter which SavedCard to delete.
     */
    where: SavedCardWhereUniqueInput
  }

  /**
   * SavedCard deleteMany
   */
  export type SavedCardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedCards to delete
     */
    where?: SavedCardWhereInput
    /**
     * Limit how many SavedCards to delete.
     */
    limit?: number
  }

  /**
   * SavedCard without action
   */
  export type SavedCardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedCard
     */
    select?: SavedCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedCard
     */
    omit?: SavedCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCardInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    phone: 'phone',
    nic: 'nic',
    dlNo: 'dlNo',
    districtId: 'districtId',
    isActive: 'isActive',
    refreshToken: 'refreshToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DistrictScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type DistrictScalarFieldEnum = (typeof DistrictScalarFieldEnum)[keyof typeof DistrictScalarFieldEnum]


  export const OfficerScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    badgeNo: 'badgeNo',
    phone: 'phone',
    districtId: 'districtId',
    createdAt: 'createdAt'
  };

  export type OfficerScalarFieldEnum = (typeof OfficerScalarFieldEnum)[keyof typeof OfficerScalarFieldEnum]


  export const FineCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    amount: 'amount',
    isActive: 'isActive'
  };

  export type FineCategoryScalarFieldEnum = (typeof FineCategoryScalarFieldEnum)[keyof typeof FineCategoryScalarFieldEnum]


  export const FineScalarFieldEnum: {
    id: 'id',
    referenceNo: 'referenceNo',
    vehicleNo: 'vehicleNo',
    driverName: 'driverName',
    driverPhone: 'driverPhone',
    driverNIC: 'driverNIC',
    driverDL: 'driverDL',
    driverEmail: 'driverEmail',
    offenseDate: 'offenseDate',
    location: 'location',
    categoryId: 'categoryId',
    officerId: 'officerId',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FineScalarFieldEnum = (typeof FineScalarFieldEnum)[keyof typeof FineScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    fineId: 'fineId',
    amount: 'amount',
    payerName: 'payerName',
    payerPhone: 'payerPhone',
    paymentMethod: 'paymentMethod',
    status: 'status',
    transactionId: 'transactionId',
    receiptNo: 'receiptNo',
    paidAt: 'paidAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const SMSLogScalarFieldEnum: {
    id: 'id',
    paymentId: 'paymentId',
    officerPhone: 'officerPhone',
    message: 'message',
    status: 'status',
    sid: 'sid',
    sentAt: 'sentAt'
  };

  export type SMSLogScalarFieldEnum = (typeof SMSLogScalarFieldEnum)[keyof typeof SMSLogScalarFieldEnum]


  export const SavedCardScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    cardholderName: 'cardholderName',
    cardNumber: 'cardNumber',
    expiry: 'expiry',
    brand: 'brand',
    createdAt: 'createdAt'
  };

  export type SavedCardScalarFieldEnum = (typeof SavedCardScalarFieldEnum)[keyof typeof SavedCardScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'FineStatus'
   */
  export type EnumFineStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FineStatus'>
    


  /**
   * Reference to a field of type 'FineStatus[]'
   */
  export type ListEnumFineStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FineStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    phone?: StringNullableFilter<"User"> | string | null
    nic?: StringNullableFilter<"User"> | string | null
    dlNo?: StringNullableFilter<"User"> | string | null
    districtId?: IntNullableFilter<"User"> | number | null
    isActive?: BoolFilter<"User"> | boolean
    refreshToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    district?: XOR<DistrictNullableScalarRelationFilter, DistrictWhereInput> | null
    officer?: XOR<OfficerNullableScalarRelationFilter, OfficerWhereInput> | null
    savedCards?: SavedCardListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    phone?: SortOrderInput | SortOrder
    nic?: SortOrderInput | SortOrder
    dlNo?: SortOrderInput | SortOrder
    districtId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    district?: DistrictOrderByWithRelationInput
    officer?: OfficerOrderByWithRelationInput
    savedCards?: SavedCardOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    nic?: string
    dlNo?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    phone?: StringNullableFilter<"User"> | string | null
    districtId?: IntNullableFilter<"User"> | number | null
    isActive?: BoolFilter<"User"> | boolean
    refreshToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    district?: XOR<DistrictNullableScalarRelationFilter, DistrictWhereInput> | null
    officer?: XOR<OfficerNullableScalarRelationFilter, OfficerWhereInput> | null
    savedCards?: SavedCardListRelationFilter
  }, "id" | "email" | "nic" | "dlNo">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    phone?: SortOrderInput | SortOrder
    nic?: SortOrderInput | SortOrder
    dlNo?: SortOrderInput | SortOrder
    districtId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    nic?: StringNullableWithAggregatesFilter<"User"> | string | null
    dlNo?: StringNullableWithAggregatesFilter<"User"> | string | null
    districtId?: IntNullableWithAggregatesFilter<"User"> | number | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    refreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DistrictWhereInput = {
    AND?: DistrictWhereInput | DistrictWhereInput[]
    OR?: DistrictWhereInput[]
    NOT?: DistrictWhereInput | DistrictWhereInput[]
    id?: IntFilter<"District"> | number
    name?: StringFilter<"District"> | string
    officers?: OfficerListRelationFilter
    users?: UserListRelationFilter
  }

  export type DistrictOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    officers?: OfficerOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
  }

  export type DistrictWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: DistrictWhereInput | DistrictWhereInput[]
    OR?: DistrictWhereInput[]
    NOT?: DistrictWhereInput | DistrictWhereInput[]
    officers?: OfficerListRelationFilter
    users?: UserListRelationFilter
  }, "id" | "name">

  export type DistrictOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: DistrictCountOrderByAggregateInput
    _avg?: DistrictAvgOrderByAggregateInput
    _max?: DistrictMaxOrderByAggregateInput
    _min?: DistrictMinOrderByAggregateInput
    _sum?: DistrictSumOrderByAggregateInput
  }

  export type DistrictScalarWhereWithAggregatesInput = {
    AND?: DistrictScalarWhereWithAggregatesInput | DistrictScalarWhereWithAggregatesInput[]
    OR?: DistrictScalarWhereWithAggregatesInput[]
    NOT?: DistrictScalarWhereWithAggregatesInput | DistrictScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"District"> | number
    name?: StringWithAggregatesFilter<"District"> | string
  }

  export type OfficerWhereInput = {
    AND?: OfficerWhereInput | OfficerWhereInput[]
    OR?: OfficerWhereInput[]
    NOT?: OfficerWhereInput | OfficerWhereInput[]
    id?: IntFilter<"Officer"> | number
    userId?: IntFilter<"Officer"> | number
    badgeNo?: StringFilter<"Officer"> | string
    phone?: StringFilter<"Officer"> | string
    districtId?: IntFilter<"Officer"> | number
    createdAt?: DateTimeFilter<"Officer"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    district?: XOR<DistrictScalarRelationFilter, DistrictWhereInput>
    fines?: FineListRelationFilter
  }

  export type OfficerOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    badgeNo?: SortOrder
    phone?: SortOrder
    districtId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    district?: DistrictOrderByWithRelationInput
    fines?: FineOrderByRelationAggregateInput
  }

  export type OfficerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    badgeNo?: string
    AND?: OfficerWhereInput | OfficerWhereInput[]
    OR?: OfficerWhereInput[]
    NOT?: OfficerWhereInput | OfficerWhereInput[]
    phone?: StringFilter<"Officer"> | string
    districtId?: IntFilter<"Officer"> | number
    createdAt?: DateTimeFilter<"Officer"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    district?: XOR<DistrictScalarRelationFilter, DistrictWhereInput>
    fines?: FineListRelationFilter
  }, "id" | "userId" | "badgeNo">

  export type OfficerOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    badgeNo?: SortOrder
    phone?: SortOrder
    districtId?: SortOrder
    createdAt?: SortOrder
    _count?: OfficerCountOrderByAggregateInput
    _avg?: OfficerAvgOrderByAggregateInput
    _max?: OfficerMaxOrderByAggregateInput
    _min?: OfficerMinOrderByAggregateInput
    _sum?: OfficerSumOrderByAggregateInput
  }

  export type OfficerScalarWhereWithAggregatesInput = {
    AND?: OfficerScalarWhereWithAggregatesInput | OfficerScalarWhereWithAggregatesInput[]
    OR?: OfficerScalarWhereWithAggregatesInput[]
    NOT?: OfficerScalarWhereWithAggregatesInput | OfficerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Officer"> | number
    userId?: IntWithAggregatesFilter<"Officer"> | number
    badgeNo?: StringWithAggregatesFilter<"Officer"> | string
    phone?: StringWithAggregatesFilter<"Officer"> | string
    districtId?: IntWithAggregatesFilter<"Officer"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Officer"> | Date | string
  }

  export type FineCategoryWhereInput = {
    AND?: FineCategoryWhereInput | FineCategoryWhereInput[]
    OR?: FineCategoryWhereInput[]
    NOT?: FineCategoryWhereInput | FineCategoryWhereInput[]
    id?: IntFilter<"FineCategory"> | number
    name?: StringFilter<"FineCategory"> | string
    description?: StringNullableFilter<"FineCategory"> | string | null
    amount?: FloatFilter<"FineCategory"> | number
    isActive?: BoolFilter<"FineCategory"> | boolean
    fines?: FineListRelationFilter
  }

  export type FineCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    amount?: SortOrder
    isActive?: SortOrder
    fines?: FineOrderByRelationAggregateInput
  }

  export type FineCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: FineCategoryWhereInput | FineCategoryWhereInput[]
    OR?: FineCategoryWhereInput[]
    NOT?: FineCategoryWhereInput | FineCategoryWhereInput[]
    description?: StringNullableFilter<"FineCategory"> | string | null
    amount?: FloatFilter<"FineCategory"> | number
    isActive?: BoolFilter<"FineCategory"> | boolean
    fines?: FineListRelationFilter
  }, "id" | "name">

  export type FineCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    amount?: SortOrder
    isActive?: SortOrder
    _count?: FineCategoryCountOrderByAggregateInput
    _avg?: FineCategoryAvgOrderByAggregateInput
    _max?: FineCategoryMaxOrderByAggregateInput
    _min?: FineCategoryMinOrderByAggregateInput
    _sum?: FineCategorySumOrderByAggregateInput
  }

  export type FineCategoryScalarWhereWithAggregatesInput = {
    AND?: FineCategoryScalarWhereWithAggregatesInput | FineCategoryScalarWhereWithAggregatesInput[]
    OR?: FineCategoryScalarWhereWithAggregatesInput[]
    NOT?: FineCategoryScalarWhereWithAggregatesInput | FineCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FineCategory"> | number
    name?: StringWithAggregatesFilter<"FineCategory"> | string
    description?: StringNullableWithAggregatesFilter<"FineCategory"> | string | null
    amount?: FloatWithAggregatesFilter<"FineCategory"> | number
    isActive?: BoolWithAggregatesFilter<"FineCategory"> | boolean
  }

  export type FineWhereInput = {
    AND?: FineWhereInput | FineWhereInput[]
    OR?: FineWhereInput[]
    NOT?: FineWhereInput | FineWhereInput[]
    id?: IntFilter<"Fine"> | number
    referenceNo?: StringFilter<"Fine"> | string
    vehicleNo?: StringFilter<"Fine"> | string
    driverName?: StringFilter<"Fine"> | string
    driverPhone?: StringNullableFilter<"Fine"> | string | null
    driverNIC?: StringNullableFilter<"Fine"> | string | null
    driverDL?: StringNullableFilter<"Fine"> | string | null
    driverEmail?: StringNullableFilter<"Fine"> | string | null
    offenseDate?: DateTimeFilter<"Fine"> | Date | string
    location?: StringFilter<"Fine"> | string
    categoryId?: IntFilter<"Fine"> | number
    officerId?: IntFilter<"Fine"> | number
    status?: EnumFineStatusFilter<"Fine"> | $Enums.FineStatus
    notes?: StringNullableFilter<"Fine"> | string | null
    createdAt?: DateTimeFilter<"Fine"> | Date | string
    updatedAt?: DateTimeFilter<"Fine"> | Date | string
    category?: XOR<FineCategoryScalarRelationFilter, FineCategoryWhereInput>
    officer?: XOR<OfficerScalarRelationFilter, OfficerWhereInput>
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }

  export type FineOrderByWithRelationInput = {
    id?: SortOrder
    referenceNo?: SortOrder
    vehicleNo?: SortOrder
    driverName?: SortOrder
    driverPhone?: SortOrderInput | SortOrder
    driverNIC?: SortOrderInput | SortOrder
    driverDL?: SortOrderInput | SortOrder
    driverEmail?: SortOrderInput | SortOrder
    offenseDate?: SortOrder
    location?: SortOrder
    categoryId?: SortOrder
    officerId?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: FineCategoryOrderByWithRelationInput
    officer?: OfficerOrderByWithRelationInput
    payment?: PaymentOrderByWithRelationInput
  }

  export type FineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    referenceNo?: string
    AND?: FineWhereInput | FineWhereInput[]
    OR?: FineWhereInput[]
    NOT?: FineWhereInput | FineWhereInput[]
    vehicleNo?: StringFilter<"Fine"> | string
    driverName?: StringFilter<"Fine"> | string
    driverPhone?: StringNullableFilter<"Fine"> | string | null
    driverNIC?: StringNullableFilter<"Fine"> | string | null
    driverDL?: StringNullableFilter<"Fine"> | string | null
    driverEmail?: StringNullableFilter<"Fine"> | string | null
    offenseDate?: DateTimeFilter<"Fine"> | Date | string
    location?: StringFilter<"Fine"> | string
    categoryId?: IntFilter<"Fine"> | number
    officerId?: IntFilter<"Fine"> | number
    status?: EnumFineStatusFilter<"Fine"> | $Enums.FineStatus
    notes?: StringNullableFilter<"Fine"> | string | null
    createdAt?: DateTimeFilter<"Fine"> | Date | string
    updatedAt?: DateTimeFilter<"Fine"> | Date | string
    category?: XOR<FineCategoryScalarRelationFilter, FineCategoryWhereInput>
    officer?: XOR<OfficerScalarRelationFilter, OfficerWhereInput>
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }, "id" | "referenceNo">

  export type FineOrderByWithAggregationInput = {
    id?: SortOrder
    referenceNo?: SortOrder
    vehicleNo?: SortOrder
    driverName?: SortOrder
    driverPhone?: SortOrderInput | SortOrder
    driverNIC?: SortOrderInput | SortOrder
    driverDL?: SortOrderInput | SortOrder
    driverEmail?: SortOrderInput | SortOrder
    offenseDate?: SortOrder
    location?: SortOrder
    categoryId?: SortOrder
    officerId?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FineCountOrderByAggregateInput
    _avg?: FineAvgOrderByAggregateInput
    _max?: FineMaxOrderByAggregateInput
    _min?: FineMinOrderByAggregateInput
    _sum?: FineSumOrderByAggregateInput
  }

  export type FineScalarWhereWithAggregatesInput = {
    AND?: FineScalarWhereWithAggregatesInput | FineScalarWhereWithAggregatesInput[]
    OR?: FineScalarWhereWithAggregatesInput[]
    NOT?: FineScalarWhereWithAggregatesInput | FineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Fine"> | number
    referenceNo?: StringWithAggregatesFilter<"Fine"> | string
    vehicleNo?: StringWithAggregatesFilter<"Fine"> | string
    driverName?: StringWithAggregatesFilter<"Fine"> | string
    driverPhone?: StringNullableWithAggregatesFilter<"Fine"> | string | null
    driverNIC?: StringNullableWithAggregatesFilter<"Fine"> | string | null
    driverDL?: StringNullableWithAggregatesFilter<"Fine"> | string | null
    driverEmail?: StringNullableWithAggregatesFilter<"Fine"> | string | null
    offenseDate?: DateTimeWithAggregatesFilter<"Fine"> | Date | string
    location?: StringWithAggregatesFilter<"Fine"> | string
    categoryId?: IntWithAggregatesFilter<"Fine"> | number
    officerId?: IntWithAggregatesFilter<"Fine"> | number
    status?: EnumFineStatusWithAggregatesFilter<"Fine"> | $Enums.FineStatus
    notes?: StringNullableWithAggregatesFilter<"Fine"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Fine"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Fine"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: IntFilter<"Payment"> | number
    fineId?: IntFilter<"Payment"> | number
    amount?: FloatFilter<"Payment"> | number
    payerName?: StringFilter<"Payment"> | string
    payerPhone?: StringFilter<"Payment"> | string
    paymentMethod?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    transactionId?: StringNullableFilter<"Payment"> | string | null
    receiptNo?: StringFilter<"Payment"> | string
    paidAt?: DateTimeFilter<"Payment"> | Date | string
    fine?: XOR<FineScalarRelationFilter, FineWhereInput>
    smsLogs?: SMSLogListRelationFilter
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    fineId?: SortOrder
    amount?: SortOrder
    payerName?: SortOrder
    payerPhone?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    receiptNo?: SortOrder
    paidAt?: SortOrder
    fine?: FineOrderByWithRelationInput
    smsLogs?: SMSLogOrderByRelationAggregateInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    fineId?: number
    transactionId?: string
    receiptNo?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    amount?: FloatFilter<"Payment"> | number
    payerName?: StringFilter<"Payment"> | string
    payerPhone?: StringFilter<"Payment"> | string
    paymentMethod?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    paidAt?: DateTimeFilter<"Payment"> | Date | string
    fine?: XOR<FineScalarRelationFilter, FineWhereInput>
    smsLogs?: SMSLogListRelationFilter
  }, "id" | "fineId" | "transactionId" | "receiptNo">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    fineId?: SortOrder
    amount?: SortOrder
    payerName?: SortOrder
    payerPhone?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    receiptNo?: SortOrder
    paidAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payment"> | number
    fineId?: IntWithAggregatesFilter<"Payment"> | number
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    payerName?: StringWithAggregatesFilter<"Payment"> | string
    payerPhone?: StringWithAggregatesFilter<"Payment"> | string
    paymentMethod?: StringWithAggregatesFilter<"Payment"> | string
    status?: StringWithAggregatesFilter<"Payment"> | string
    transactionId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    receiptNo?: StringWithAggregatesFilter<"Payment"> | string
    paidAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type SMSLogWhereInput = {
    AND?: SMSLogWhereInput | SMSLogWhereInput[]
    OR?: SMSLogWhereInput[]
    NOT?: SMSLogWhereInput | SMSLogWhereInput[]
    id?: IntFilter<"SMSLog"> | number
    paymentId?: IntFilter<"SMSLog"> | number
    officerPhone?: StringFilter<"SMSLog"> | string
    message?: StringFilter<"SMSLog"> | string
    status?: StringFilter<"SMSLog"> | string
    sid?: StringNullableFilter<"SMSLog"> | string | null
    sentAt?: DateTimeFilter<"SMSLog"> | Date | string
    payment?: XOR<PaymentScalarRelationFilter, PaymentWhereInput>
  }

  export type SMSLogOrderByWithRelationInput = {
    id?: SortOrder
    paymentId?: SortOrder
    officerPhone?: SortOrder
    message?: SortOrder
    status?: SortOrder
    sid?: SortOrderInput | SortOrder
    sentAt?: SortOrder
    payment?: PaymentOrderByWithRelationInput
  }

  export type SMSLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SMSLogWhereInput | SMSLogWhereInput[]
    OR?: SMSLogWhereInput[]
    NOT?: SMSLogWhereInput | SMSLogWhereInput[]
    paymentId?: IntFilter<"SMSLog"> | number
    officerPhone?: StringFilter<"SMSLog"> | string
    message?: StringFilter<"SMSLog"> | string
    status?: StringFilter<"SMSLog"> | string
    sid?: StringNullableFilter<"SMSLog"> | string | null
    sentAt?: DateTimeFilter<"SMSLog"> | Date | string
    payment?: XOR<PaymentScalarRelationFilter, PaymentWhereInput>
  }, "id">

  export type SMSLogOrderByWithAggregationInput = {
    id?: SortOrder
    paymentId?: SortOrder
    officerPhone?: SortOrder
    message?: SortOrder
    status?: SortOrder
    sid?: SortOrderInput | SortOrder
    sentAt?: SortOrder
    _count?: SMSLogCountOrderByAggregateInput
    _avg?: SMSLogAvgOrderByAggregateInput
    _max?: SMSLogMaxOrderByAggregateInput
    _min?: SMSLogMinOrderByAggregateInput
    _sum?: SMSLogSumOrderByAggregateInput
  }

  export type SMSLogScalarWhereWithAggregatesInput = {
    AND?: SMSLogScalarWhereWithAggregatesInput | SMSLogScalarWhereWithAggregatesInput[]
    OR?: SMSLogScalarWhereWithAggregatesInput[]
    NOT?: SMSLogScalarWhereWithAggregatesInput | SMSLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SMSLog"> | number
    paymentId?: IntWithAggregatesFilter<"SMSLog"> | number
    officerPhone?: StringWithAggregatesFilter<"SMSLog"> | string
    message?: StringWithAggregatesFilter<"SMSLog"> | string
    status?: StringWithAggregatesFilter<"SMSLog"> | string
    sid?: StringNullableWithAggregatesFilter<"SMSLog"> | string | null
    sentAt?: DateTimeWithAggregatesFilter<"SMSLog"> | Date | string
  }

  export type SavedCardWhereInput = {
    AND?: SavedCardWhereInput | SavedCardWhereInput[]
    OR?: SavedCardWhereInput[]
    NOT?: SavedCardWhereInput | SavedCardWhereInput[]
    id?: IntFilter<"SavedCard"> | number
    userId?: IntFilter<"SavedCard"> | number
    cardholderName?: StringFilter<"SavedCard"> | string
    cardNumber?: StringFilter<"SavedCard"> | string
    expiry?: StringFilter<"SavedCard"> | string
    brand?: StringFilter<"SavedCard"> | string
    createdAt?: DateTimeFilter<"SavedCard"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SavedCardOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    cardholderName?: SortOrder
    cardNumber?: SortOrder
    expiry?: SortOrder
    brand?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SavedCardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SavedCardWhereInput | SavedCardWhereInput[]
    OR?: SavedCardWhereInput[]
    NOT?: SavedCardWhereInput | SavedCardWhereInput[]
    userId?: IntFilter<"SavedCard"> | number
    cardholderName?: StringFilter<"SavedCard"> | string
    cardNumber?: StringFilter<"SavedCard"> | string
    expiry?: StringFilter<"SavedCard"> | string
    brand?: StringFilter<"SavedCard"> | string
    createdAt?: DateTimeFilter<"SavedCard"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SavedCardOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    cardholderName?: SortOrder
    cardNumber?: SortOrder
    expiry?: SortOrder
    brand?: SortOrder
    createdAt?: SortOrder
    _count?: SavedCardCountOrderByAggregateInput
    _avg?: SavedCardAvgOrderByAggregateInput
    _max?: SavedCardMaxOrderByAggregateInput
    _min?: SavedCardMinOrderByAggregateInput
    _sum?: SavedCardSumOrderByAggregateInput
  }

  export type SavedCardScalarWhereWithAggregatesInput = {
    AND?: SavedCardScalarWhereWithAggregatesInput | SavedCardScalarWhereWithAggregatesInput[]
    OR?: SavedCardScalarWhereWithAggregatesInput[]
    NOT?: SavedCardScalarWhereWithAggregatesInput | SavedCardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SavedCard"> | number
    userId?: IntWithAggregatesFilter<"SavedCard"> | number
    cardholderName?: StringWithAggregatesFilter<"SavedCard"> | string
    cardNumber?: StringWithAggregatesFilter<"SavedCard"> | string
    expiry?: StringWithAggregatesFilter<"SavedCard"> | string
    brand?: StringWithAggregatesFilter<"SavedCard"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SavedCard"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    role: $Enums.Role
    phone?: string | null
    nic?: string | null
    dlNo?: string | null
    isActive?: boolean
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    district?: DistrictCreateNestedOneWithoutUsersInput
    officer?: OfficerCreateNestedOneWithoutUserInput
    savedCards?: SavedCardCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    phone?: string | null
    nic?: string | null
    dlNo?: string | null
    districtId?: number | null
    isActive?: boolean
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    officer?: OfficerUncheckedCreateNestedOneWithoutUserInput
    savedCards?: SavedCardUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    nic?: NullableStringFieldUpdateOperationsInput | string | null
    dlNo?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    district?: DistrictUpdateOneWithoutUsersNestedInput
    officer?: OfficerUpdateOneWithoutUserNestedInput
    savedCards?: SavedCardUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    nic?: NullableStringFieldUpdateOperationsInput | string | null
    dlNo?: NullableStringFieldUpdateOperationsInput | string | null
    districtId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    officer?: OfficerUncheckedUpdateOneWithoutUserNestedInput
    savedCards?: SavedCardUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    phone?: string | null
    nic?: string | null
    dlNo?: string | null
    districtId?: number | null
    isActive?: boolean
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    nic?: NullableStringFieldUpdateOperationsInput | string | null
    dlNo?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    nic?: NullableStringFieldUpdateOperationsInput | string | null
    dlNo?: NullableStringFieldUpdateOperationsInput | string | null
    districtId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistrictCreateInput = {
    name: string
    officers?: OfficerCreateNestedManyWithoutDistrictInput
    users?: UserCreateNestedManyWithoutDistrictInput
  }

  export type DistrictUncheckedCreateInput = {
    id?: number
    name: string
    officers?: OfficerUncheckedCreateNestedManyWithoutDistrictInput
    users?: UserUncheckedCreateNestedManyWithoutDistrictInput
  }

  export type DistrictUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    officers?: OfficerUpdateManyWithoutDistrictNestedInput
    users?: UserUpdateManyWithoutDistrictNestedInput
  }

  export type DistrictUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    officers?: OfficerUncheckedUpdateManyWithoutDistrictNestedInput
    users?: UserUncheckedUpdateManyWithoutDistrictNestedInput
  }

  export type DistrictCreateManyInput = {
    id?: number
    name: string
  }

  export type DistrictUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DistrictUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OfficerCreateInput = {
    badgeNo: string
    phone: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutOfficerInput
    district: DistrictCreateNestedOneWithoutOfficersInput
    fines?: FineCreateNestedManyWithoutOfficerInput
  }

  export type OfficerUncheckedCreateInput = {
    id?: number
    userId: number
    badgeNo: string
    phone: string
    districtId: number
    createdAt?: Date | string
    fines?: FineUncheckedCreateNestedManyWithoutOfficerInput
  }

  export type OfficerUpdateInput = {
    badgeNo?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOfficerNestedInput
    district?: DistrictUpdateOneRequiredWithoutOfficersNestedInput
    fines?: FineUpdateManyWithoutOfficerNestedInput
  }

  export type OfficerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    badgeNo?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    districtId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fines?: FineUncheckedUpdateManyWithoutOfficerNestedInput
  }

  export type OfficerCreateManyInput = {
    id?: number
    userId: number
    badgeNo: string
    phone: string
    districtId: number
    createdAt?: Date | string
  }

  export type OfficerUpdateManyMutationInput = {
    badgeNo?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfficerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    badgeNo?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    districtId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FineCategoryCreateInput = {
    name: string
    description?: string | null
    amount: number
    isActive?: boolean
    fines?: FineCreateNestedManyWithoutCategoryInput
  }

  export type FineCategoryUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    amount: number
    isActive?: boolean
    fines?: FineUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type FineCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    fines?: FineUpdateManyWithoutCategoryNestedInput
  }

  export type FineCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    fines?: FineUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type FineCategoryCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    amount: number
    isActive?: boolean
  }

  export type FineCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FineCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FineCreateInput = {
    referenceNo: string
    vehicleNo: string
    driverName: string
    driverPhone?: string | null
    driverNIC?: string | null
    driverDL?: string | null
    driverEmail?: string | null
    offenseDate: Date | string
    location: string
    status?: $Enums.FineStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: FineCategoryCreateNestedOneWithoutFinesInput
    officer: OfficerCreateNestedOneWithoutFinesInput
    payment?: PaymentCreateNestedOneWithoutFineInput
  }

  export type FineUncheckedCreateInput = {
    id?: number
    referenceNo: string
    vehicleNo: string
    driverName: string
    driverPhone?: string | null
    driverNIC?: string | null
    driverDL?: string | null
    driverEmail?: string | null
    offenseDate: Date | string
    location: string
    categoryId: number
    officerId: number
    status?: $Enums.FineStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutFineInput
  }

  export type FineUpdateInput = {
    referenceNo?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    driverName?: StringFieldUpdateOperationsInput | string
    driverPhone?: NullableStringFieldUpdateOperationsInput | string | null
    driverNIC?: NullableStringFieldUpdateOperationsInput | string | null
    driverDL?: NullableStringFieldUpdateOperationsInput | string | null
    driverEmail?: NullableStringFieldUpdateOperationsInput | string | null
    offenseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumFineStatusFieldUpdateOperationsInput | $Enums.FineStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: FineCategoryUpdateOneRequiredWithoutFinesNestedInput
    officer?: OfficerUpdateOneRequiredWithoutFinesNestedInput
    payment?: PaymentUpdateOneWithoutFineNestedInput
  }

  export type FineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    referenceNo?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    driverName?: StringFieldUpdateOperationsInput | string
    driverPhone?: NullableStringFieldUpdateOperationsInput | string | null
    driverNIC?: NullableStringFieldUpdateOperationsInput | string | null
    driverDL?: NullableStringFieldUpdateOperationsInput | string | null
    driverEmail?: NullableStringFieldUpdateOperationsInput | string | null
    offenseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    officerId?: IntFieldUpdateOperationsInput | number
    status?: EnumFineStatusFieldUpdateOperationsInput | $Enums.FineStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutFineNestedInput
  }

  export type FineCreateManyInput = {
    id?: number
    referenceNo: string
    vehicleNo: string
    driverName: string
    driverPhone?: string | null
    driverNIC?: string | null
    driverDL?: string | null
    driverEmail?: string | null
    offenseDate: Date | string
    location: string
    categoryId: number
    officerId: number
    status?: $Enums.FineStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FineUpdateManyMutationInput = {
    referenceNo?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    driverName?: StringFieldUpdateOperationsInput | string
    driverPhone?: NullableStringFieldUpdateOperationsInput | string | null
    driverNIC?: NullableStringFieldUpdateOperationsInput | string | null
    driverDL?: NullableStringFieldUpdateOperationsInput | string | null
    driverEmail?: NullableStringFieldUpdateOperationsInput | string | null
    offenseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumFineStatusFieldUpdateOperationsInput | $Enums.FineStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    referenceNo?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    driverName?: StringFieldUpdateOperationsInput | string
    driverPhone?: NullableStringFieldUpdateOperationsInput | string | null
    driverNIC?: NullableStringFieldUpdateOperationsInput | string | null
    driverDL?: NullableStringFieldUpdateOperationsInput | string | null
    driverEmail?: NullableStringFieldUpdateOperationsInput | string | null
    offenseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    officerId?: IntFieldUpdateOperationsInput | number
    status?: EnumFineStatusFieldUpdateOperationsInput | $Enums.FineStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    amount: number
    payerName: string
    payerPhone: string
    paymentMethod?: string
    status?: string
    transactionId?: string | null
    receiptNo: string
    paidAt?: Date | string
    fine: FineCreateNestedOneWithoutPaymentInput
    smsLogs?: SMSLogCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: number
    fineId: number
    amount: number
    payerName: string
    payerPhone: string
    paymentMethod?: string
    status?: string
    transactionId?: string | null
    receiptNo: string
    paidAt?: Date | string
    smsLogs?: SMSLogUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    payerName?: StringFieldUpdateOperationsInput | string
    payerPhone?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    receiptNo?: StringFieldUpdateOperationsInput | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fine?: FineUpdateOneRequiredWithoutPaymentNestedInput
    smsLogs?: SMSLogUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fineId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    payerName?: StringFieldUpdateOperationsInput | string
    payerPhone?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    receiptNo?: StringFieldUpdateOperationsInput | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    smsLogs?: SMSLogUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentCreateManyInput = {
    id?: number
    fineId: number
    amount: number
    payerName: string
    payerPhone: string
    paymentMethod?: string
    status?: string
    transactionId?: string | null
    receiptNo: string
    paidAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    payerName?: StringFieldUpdateOperationsInput | string
    payerPhone?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    receiptNo?: StringFieldUpdateOperationsInput | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fineId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    payerName?: StringFieldUpdateOperationsInput | string
    payerPhone?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    receiptNo?: StringFieldUpdateOperationsInput | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SMSLogCreateInput = {
    officerPhone: string
    message: string
    status: string
    sid?: string | null
    sentAt?: Date | string
    payment: PaymentCreateNestedOneWithoutSmsLogsInput
  }

  export type SMSLogUncheckedCreateInput = {
    id?: number
    paymentId: number
    officerPhone: string
    message: string
    status: string
    sid?: string | null
    sentAt?: Date | string
  }

  export type SMSLogUpdateInput = {
    officerPhone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sid?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUpdateOneRequiredWithoutSmsLogsNestedInput
  }

  export type SMSLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    paymentId?: IntFieldUpdateOperationsInput | number
    officerPhone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sid?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SMSLogCreateManyInput = {
    id?: number
    paymentId: number
    officerPhone: string
    message: string
    status: string
    sid?: string | null
    sentAt?: Date | string
  }

  export type SMSLogUpdateManyMutationInput = {
    officerPhone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sid?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SMSLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    paymentId?: IntFieldUpdateOperationsInput | number
    officerPhone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sid?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedCardCreateInput = {
    cardholderName: string
    cardNumber: string
    expiry: string
    brand: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSavedCardsInput
  }

  export type SavedCardUncheckedCreateInput = {
    id?: number
    userId: number
    cardholderName: string
    cardNumber: string
    expiry: string
    brand: string
    createdAt?: Date | string
  }

  export type SavedCardUpdateInput = {
    cardholderName?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    expiry?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSavedCardsNestedInput
  }

  export type SavedCardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    cardholderName?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    expiry?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedCardCreateManyInput = {
    id?: number
    userId: number
    cardholderName: string
    cardNumber: string
    expiry: string
    brand: string
    createdAt?: Date | string
  }

  export type SavedCardUpdateManyMutationInput = {
    cardholderName?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    expiry?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedCardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    cardholderName?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    expiry?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DistrictNullableScalarRelationFilter = {
    is?: DistrictWhereInput | null
    isNot?: DistrictWhereInput | null
  }

  export type OfficerNullableScalarRelationFilter = {
    is?: OfficerWhereInput | null
    isNot?: OfficerWhereInput | null
  }

  export type SavedCardListRelationFilter = {
    every?: SavedCardWhereInput
    some?: SavedCardWhereInput
    none?: SavedCardWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SavedCardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    nic?: SortOrder
    dlNo?: SortOrder
    districtId?: SortOrder
    isActive?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    districtId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    nic?: SortOrder
    dlNo?: SortOrder
    districtId?: SortOrder
    isActive?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    nic?: SortOrder
    dlNo?: SortOrder
    districtId?: SortOrder
    isActive?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    districtId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type OfficerListRelationFilter = {
    every?: OfficerWhereInput
    some?: OfficerWhereInput
    none?: OfficerWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type OfficerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DistrictCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DistrictAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DistrictMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DistrictMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DistrictSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DistrictScalarRelationFilter = {
    is?: DistrictWhereInput
    isNot?: DistrictWhereInput
  }

  export type FineListRelationFilter = {
    every?: FineWhereInput
    some?: FineWhereInput
    none?: FineWhereInput
  }

  export type FineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OfficerCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    badgeNo?: SortOrder
    phone?: SortOrder
    districtId?: SortOrder
    createdAt?: SortOrder
  }

  export type OfficerAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    districtId?: SortOrder
  }

  export type OfficerMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    badgeNo?: SortOrder
    phone?: SortOrder
    districtId?: SortOrder
    createdAt?: SortOrder
  }

  export type OfficerMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    badgeNo?: SortOrder
    phone?: SortOrder
    districtId?: SortOrder
    createdAt?: SortOrder
  }

  export type OfficerSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    districtId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FineCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    isActive?: SortOrder
  }

  export type FineCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type FineCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    isActive?: SortOrder
  }

  export type FineCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    isActive?: SortOrder
  }

  export type FineCategorySumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumFineStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FineStatus | EnumFineStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FineStatus[] | ListEnumFineStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FineStatus[] | ListEnumFineStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFineStatusFilter<$PrismaModel> | $Enums.FineStatus
  }

  export type FineCategoryScalarRelationFilter = {
    is?: FineCategoryWhereInput
    isNot?: FineCategoryWhereInput
  }

  export type OfficerScalarRelationFilter = {
    is?: OfficerWhereInput
    isNot?: OfficerWhereInput
  }

  export type PaymentNullableScalarRelationFilter = {
    is?: PaymentWhereInput | null
    isNot?: PaymentWhereInput | null
  }

  export type FineCountOrderByAggregateInput = {
    id?: SortOrder
    referenceNo?: SortOrder
    vehicleNo?: SortOrder
    driverName?: SortOrder
    driverPhone?: SortOrder
    driverNIC?: SortOrder
    driverDL?: SortOrder
    driverEmail?: SortOrder
    offenseDate?: SortOrder
    location?: SortOrder
    categoryId?: SortOrder
    officerId?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FineAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    officerId?: SortOrder
  }

  export type FineMaxOrderByAggregateInput = {
    id?: SortOrder
    referenceNo?: SortOrder
    vehicleNo?: SortOrder
    driverName?: SortOrder
    driverPhone?: SortOrder
    driverNIC?: SortOrder
    driverDL?: SortOrder
    driverEmail?: SortOrder
    offenseDate?: SortOrder
    location?: SortOrder
    categoryId?: SortOrder
    officerId?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FineMinOrderByAggregateInput = {
    id?: SortOrder
    referenceNo?: SortOrder
    vehicleNo?: SortOrder
    driverName?: SortOrder
    driverPhone?: SortOrder
    driverNIC?: SortOrder
    driverDL?: SortOrder
    driverEmail?: SortOrder
    offenseDate?: SortOrder
    location?: SortOrder
    categoryId?: SortOrder
    officerId?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FineSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    officerId?: SortOrder
  }

  export type EnumFineStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FineStatus | EnumFineStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FineStatus[] | ListEnumFineStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FineStatus[] | ListEnumFineStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFineStatusWithAggregatesFilter<$PrismaModel> | $Enums.FineStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFineStatusFilter<$PrismaModel>
    _max?: NestedEnumFineStatusFilter<$PrismaModel>
  }

  export type FineScalarRelationFilter = {
    is?: FineWhereInput
    isNot?: FineWhereInput
  }

  export type SMSLogListRelationFilter = {
    every?: SMSLogWhereInput
    some?: SMSLogWhereInput
    none?: SMSLogWhereInput
  }

  export type SMSLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    fineId?: SortOrder
    amount?: SortOrder
    payerName?: SortOrder
    payerPhone?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    transactionId?: SortOrder
    receiptNo?: SortOrder
    paidAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    fineId?: SortOrder
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    fineId?: SortOrder
    amount?: SortOrder
    payerName?: SortOrder
    payerPhone?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    transactionId?: SortOrder
    receiptNo?: SortOrder
    paidAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    fineId?: SortOrder
    amount?: SortOrder
    payerName?: SortOrder
    payerPhone?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    transactionId?: SortOrder
    receiptNo?: SortOrder
    paidAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
    fineId?: SortOrder
    amount?: SortOrder
  }

  export type PaymentScalarRelationFilter = {
    is?: PaymentWhereInput
    isNot?: PaymentWhereInput
  }

  export type SMSLogCountOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    officerPhone?: SortOrder
    message?: SortOrder
    status?: SortOrder
    sid?: SortOrder
    sentAt?: SortOrder
  }

  export type SMSLogAvgOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
  }

  export type SMSLogMaxOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    officerPhone?: SortOrder
    message?: SortOrder
    status?: SortOrder
    sid?: SortOrder
    sentAt?: SortOrder
  }

  export type SMSLogMinOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    officerPhone?: SortOrder
    message?: SortOrder
    status?: SortOrder
    sid?: SortOrder
    sentAt?: SortOrder
  }

  export type SMSLogSumOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
  }

  export type SavedCardCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cardholderName?: SortOrder
    cardNumber?: SortOrder
    expiry?: SortOrder
    brand?: SortOrder
    createdAt?: SortOrder
  }

  export type SavedCardAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SavedCardMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cardholderName?: SortOrder
    cardNumber?: SortOrder
    expiry?: SortOrder
    brand?: SortOrder
    createdAt?: SortOrder
  }

  export type SavedCardMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cardholderName?: SortOrder
    cardNumber?: SortOrder
    expiry?: SortOrder
    brand?: SortOrder
    createdAt?: SortOrder
  }

  export type SavedCardSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DistrictCreateNestedOneWithoutUsersInput = {
    create?: XOR<DistrictCreateWithoutUsersInput, DistrictUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DistrictCreateOrConnectWithoutUsersInput
    connect?: DistrictWhereUniqueInput
  }

  export type OfficerCreateNestedOneWithoutUserInput = {
    create?: XOR<OfficerCreateWithoutUserInput, OfficerUncheckedCreateWithoutUserInput>
    connectOrCreate?: OfficerCreateOrConnectWithoutUserInput
    connect?: OfficerWhereUniqueInput
  }

  export type SavedCardCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedCardCreateWithoutUserInput, SavedCardUncheckedCreateWithoutUserInput> | SavedCardCreateWithoutUserInput[] | SavedCardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedCardCreateOrConnectWithoutUserInput | SavedCardCreateOrConnectWithoutUserInput[]
    createMany?: SavedCardCreateManyUserInputEnvelope
    connect?: SavedCardWhereUniqueInput | SavedCardWhereUniqueInput[]
  }

  export type OfficerUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<OfficerCreateWithoutUserInput, OfficerUncheckedCreateWithoutUserInput>
    connectOrCreate?: OfficerCreateOrConnectWithoutUserInput
    connect?: OfficerWhereUniqueInput
  }

  export type SavedCardUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedCardCreateWithoutUserInput, SavedCardUncheckedCreateWithoutUserInput> | SavedCardCreateWithoutUserInput[] | SavedCardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedCardCreateOrConnectWithoutUserInput | SavedCardCreateOrConnectWithoutUserInput[]
    createMany?: SavedCardCreateManyUserInputEnvelope
    connect?: SavedCardWhereUniqueInput | SavedCardWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DistrictUpdateOneWithoutUsersNestedInput = {
    create?: XOR<DistrictCreateWithoutUsersInput, DistrictUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DistrictCreateOrConnectWithoutUsersInput
    upsert?: DistrictUpsertWithoutUsersInput
    disconnect?: DistrictWhereInput | boolean
    delete?: DistrictWhereInput | boolean
    connect?: DistrictWhereUniqueInput
    update?: XOR<XOR<DistrictUpdateToOneWithWhereWithoutUsersInput, DistrictUpdateWithoutUsersInput>, DistrictUncheckedUpdateWithoutUsersInput>
  }

  export type OfficerUpdateOneWithoutUserNestedInput = {
    create?: XOR<OfficerCreateWithoutUserInput, OfficerUncheckedCreateWithoutUserInput>
    connectOrCreate?: OfficerCreateOrConnectWithoutUserInput
    upsert?: OfficerUpsertWithoutUserInput
    disconnect?: OfficerWhereInput | boolean
    delete?: OfficerWhereInput | boolean
    connect?: OfficerWhereUniqueInput
    update?: XOR<XOR<OfficerUpdateToOneWithWhereWithoutUserInput, OfficerUpdateWithoutUserInput>, OfficerUncheckedUpdateWithoutUserInput>
  }

  export type SavedCardUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedCardCreateWithoutUserInput, SavedCardUncheckedCreateWithoutUserInput> | SavedCardCreateWithoutUserInput[] | SavedCardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedCardCreateOrConnectWithoutUserInput | SavedCardCreateOrConnectWithoutUserInput[]
    upsert?: SavedCardUpsertWithWhereUniqueWithoutUserInput | SavedCardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedCardCreateManyUserInputEnvelope
    set?: SavedCardWhereUniqueInput | SavedCardWhereUniqueInput[]
    disconnect?: SavedCardWhereUniqueInput | SavedCardWhereUniqueInput[]
    delete?: SavedCardWhereUniqueInput | SavedCardWhereUniqueInput[]
    connect?: SavedCardWhereUniqueInput | SavedCardWhereUniqueInput[]
    update?: SavedCardUpdateWithWhereUniqueWithoutUserInput | SavedCardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedCardUpdateManyWithWhereWithoutUserInput | SavedCardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedCardScalarWhereInput | SavedCardScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OfficerUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<OfficerCreateWithoutUserInput, OfficerUncheckedCreateWithoutUserInput>
    connectOrCreate?: OfficerCreateOrConnectWithoutUserInput
    upsert?: OfficerUpsertWithoutUserInput
    disconnect?: OfficerWhereInput | boolean
    delete?: OfficerWhereInput | boolean
    connect?: OfficerWhereUniqueInput
    update?: XOR<XOR<OfficerUpdateToOneWithWhereWithoutUserInput, OfficerUpdateWithoutUserInput>, OfficerUncheckedUpdateWithoutUserInput>
  }

  export type SavedCardUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedCardCreateWithoutUserInput, SavedCardUncheckedCreateWithoutUserInput> | SavedCardCreateWithoutUserInput[] | SavedCardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedCardCreateOrConnectWithoutUserInput | SavedCardCreateOrConnectWithoutUserInput[]
    upsert?: SavedCardUpsertWithWhereUniqueWithoutUserInput | SavedCardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedCardCreateManyUserInputEnvelope
    set?: SavedCardWhereUniqueInput | SavedCardWhereUniqueInput[]
    disconnect?: SavedCardWhereUniqueInput | SavedCardWhereUniqueInput[]
    delete?: SavedCardWhereUniqueInput | SavedCardWhereUniqueInput[]
    connect?: SavedCardWhereUniqueInput | SavedCardWhereUniqueInput[]
    update?: SavedCardUpdateWithWhereUniqueWithoutUserInput | SavedCardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedCardUpdateManyWithWhereWithoutUserInput | SavedCardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedCardScalarWhereInput | SavedCardScalarWhereInput[]
  }

  export type OfficerCreateNestedManyWithoutDistrictInput = {
    create?: XOR<OfficerCreateWithoutDistrictInput, OfficerUncheckedCreateWithoutDistrictInput> | OfficerCreateWithoutDistrictInput[] | OfficerUncheckedCreateWithoutDistrictInput[]
    connectOrCreate?: OfficerCreateOrConnectWithoutDistrictInput | OfficerCreateOrConnectWithoutDistrictInput[]
    createMany?: OfficerCreateManyDistrictInputEnvelope
    connect?: OfficerWhereUniqueInput | OfficerWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutDistrictInput = {
    create?: XOR<UserCreateWithoutDistrictInput, UserUncheckedCreateWithoutDistrictInput> | UserCreateWithoutDistrictInput[] | UserUncheckedCreateWithoutDistrictInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDistrictInput | UserCreateOrConnectWithoutDistrictInput[]
    createMany?: UserCreateManyDistrictInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type OfficerUncheckedCreateNestedManyWithoutDistrictInput = {
    create?: XOR<OfficerCreateWithoutDistrictInput, OfficerUncheckedCreateWithoutDistrictInput> | OfficerCreateWithoutDistrictInput[] | OfficerUncheckedCreateWithoutDistrictInput[]
    connectOrCreate?: OfficerCreateOrConnectWithoutDistrictInput | OfficerCreateOrConnectWithoutDistrictInput[]
    createMany?: OfficerCreateManyDistrictInputEnvelope
    connect?: OfficerWhereUniqueInput | OfficerWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutDistrictInput = {
    create?: XOR<UserCreateWithoutDistrictInput, UserUncheckedCreateWithoutDistrictInput> | UserCreateWithoutDistrictInput[] | UserUncheckedCreateWithoutDistrictInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDistrictInput | UserCreateOrConnectWithoutDistrictInput[]
    createMany?: UserCreateManyDistrictInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type OfficerUpdateManyWithoutDistrictNestedInput = {
    create?: XOR<OfficerCreateWithoutDistrictInput, OfficerUncheckedCreateWithoutDistrictInput> | OfficerCreateWithoutDistrictInput[] | OfficerUncheckedCreateWithoutDistrictInput[]
    connectOrCreate?: OfficerCreateOrConnectWithoutDistrictInput | OfficerCreateOrConnectWithoutDistrictInput[]
    upsert?: OfficerUpsertWithWhereUniqueWithoutDistrictInput | OfficerUpsertWithWhereUniqueWithoutDistrictInput[]
    createMany?: OfficerCreateManyDistrictInputEnvelope
    set?: OfficerWhereUniqueInput | OfficerWhereUniqueInput[]
    disconnect?: OfficerWhereUniqueInput | OfficerWhereUniqueInput[]
    delete?: OfficerWhereUniqueInput | OfficerWhereUniqueInput[]
    connect?: OfficerWhereUniqueInput | OfficerWhereUniqueInput[]
    update?: OfficerUpdateWithWhereUniqueWithoutDistrictInput | OfficerUpdateWithWhereUniqueWithoutDistrictInput[]
    updateMany?: OfficerUpdateManyWithWhereWithoutDistrictInput | OfficerUpdateManyWithWhereWithoutDistrictInput[]
    deleteMany?: OfficerScalarWhereInput | OfficerScalarWhereInput[]
  }

  export type UserUpdateManyWithoutDistrictNestedInput = {
    create?: XOR<UserCreateWithoutDistrictInput, UserUncheckedCreateWithoutDistrictInput> | UserCreateWithoutDistrictInput[] | UserUncheckedCreateWithoutDistrictInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDistrictInput | UserCreateOrConnectWithoutDistrictInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDistrictInput | UserUpsertWithWhereUniqueWithoutDistrictInput[]
    createMany?: UserCreateManyDistrictInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDistrictInput | UserUpdateWithWhereUniqueWithoutDistrictInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDistrictInput | UserUpdateManyWithWhereWithoutDistrictInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type OfficerUncheckedUpdateManyWithoutDistrictNestedInput = {
    create?: XOR<OfficerCreateWithoutDistrictInput, OfficerUncheckedCreateWithoutDistrictInput> | OfficerCreateWithoutDistrictInput[] | OfficerUncheckedCreateWithoutDistrictInput[]
    connectOrCreate?: OfficerCreateOrConnectWithoutDistrictInput | OfficerCreateOrConnectWithoutDistrictInput[]
    upsert?: OfficerUpsertWithWhereUniqueWithoutDistrictInput | OfficerUpsertWithWhereUniqueWithoutDistrictInput[]
    createMany?: OfficerCreateManyDistrictInputEnvelope
    set?: OfficerWhereUniqueInput | OfficerWhereUniqueInput[]
    disconnect?: OfficerWhereUniqueInput | OfficerWhereUniqueInput[]
    delete?: OfficerWhereUniqueInput | OfficerWhereUniqueInput[]
    connect?: OfficerWhereUniqueInput | OfficerWhereUniqueInput[]
    update?: OfficerUpdateWithWhereUniqueWithoutDistrictInput | OfficerUpdateWithWhereUniqueWithoutDistrictInput[]
    updateMany?: OfficerUpdateManyWithWhereWithoutDistrictInput | OfficerUpdateManyWithWhereWithoutDistrictInput[]
    deleteMany?: OfficerScalarWhereInput | OfficerScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutDistrictNestedInput = {
    create?: XOR<UserCreateWithoutDistrictInput, UserUncheckedCreateWithoutDistrictInput> | UserCreateWithoutDistrictInput[] | UserUncheckedCreateWithoutDistrictInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDistrictInput | UserCreateOrConnectWithoutDistrictInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDistrictInput | UserUpsertWithWhereUniqueWithoutDistrictInput[]
    createMany?: UserCreateManyDistrictInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDistrictInput | UserUpdateWithWhereUniqueWithoutDistrictInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDistrictInput | UserUpdateManyWithWhereWithoutDistrictInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOfficerInput = {
    create?: XOR<UserCreateWithoutOfficerInput, UserUncheckedCreateWithoutOfficerInput>
    connectOrCreate?: UserCreateOrConnectWithoutOfficerInput
    connect?: UserWhereUniqueInput
  }

  export type DistrictCreateNestedOneWithoutOfficersInput = {
    create?: XOR<DistrictCreateWithoutOfficersInput, DistrictUncheckedCreateWithoutOfficersInput>
    connectOrCreate?: DistrictCreateOrConnectWithoutOfficersInput
    connect?: DistrictWhereUniqueInput
  }

  export type FineCreateNestedManyWithoutOfficerInput = {
    create?: XOR<FineCreateWithoutOfficerInput, FineUncheckedCreateWithoutOfficerInput> | FineCreateWithoutOfficerInput[] | FineUncheckedCreateWithoutOfficerInput[]
    connectOrCreate?: FineCreateOrConnectWithoutOfficerInput | FineCreateOrConnectWithoutOfficerInput[]
    createMany?: FineCreateManyOfficerInputEnvelope
    connect?: FineWhereUniqueInput | FineWhereUniqueInput[]
  }

  export type FineUncheckedCreateNestedManyWithoutOfficerInput = {
    create?: XOR<FineCreateWithoutOfficerInput, FineUncheckedCreateWithoutOfficerInput> | FineCreateWithoutOfficerInput[] | FineUncheckedCreateWithoutOfficerInput[]
    connectOrCreate?: FineCreateOrConnectWithoutOfficerInput | FineCreateOrConnectWithoutOfficerInput[]
    createMany?: FineCreateManyOfficerInputEnvelope
    connect?: FineWhereUniqueInput | FineWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutOfficerNestedInput = {
    create?: XOR<UserCreateWithoutOfficerInput, UserUncheckedCreateWithoutOfficerInput>
    connectOrCreate?: UserCreateOrConnectWithoutOfficerInput
    upsert?: UserUpsertWithoutOfficerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOfficerInput, UserUpdateWithoutOfficerInput>, UserUncheckedUpdateWithoutOfficerInput>
  }

  export type DistrictUpdateOneRequiredWithoutOfficersNestedInput = {
    create?: XOR<DistrictCreateWithoutOfficersInput, DistrictUncheckedCreateWithoutOfficersInput>
    connectOrCreate?: DistrictCreateOrConnectWithoutOfficersInput
    upsert?: DistrictUpsertWithoutOfficersInput
    connect?: DistrictWhereUniqueInput
    update?: XOR<XOR<DistrictUpdateToOneWithWhereWithoutOfficersInput, DistrictUpdateWithoutOfficersInput>, DistrictUncheckedUpdateWithoutOfficersInput>
  }

  export type FineUpdateManyWithoutOfficerNestedInput = {
    create?: XOR<FineCreateWithoutOfficerInput, FineUncheckedCreateWithoutOfficerInput> | FineCreateWithoutOfficerInput[] | FineUncheckedCreateWithoutOfficerInput[]
    connectOrCreate?: FineCreateOrConnectWithoutOfficerInput | FineCreateOrConnectWithoutOfficerInput[]
    upsert?: FineUpsertWithWhereUniqueWithoutOfficerInput | FineUpsertWithWhereUniqueWithoutOfficerInput[]
    createMany?: FineCreateManyOfficerInputEnvelope
    set?: FineWhereUniqueInput | FineWhereUniqueInput[]
    disconnect?: FineWhereUniqueInput | FineWhereUniqueInput[]
    delete?: FineWhereUniqueInput | FineWhereUniqueInput[]
    connect?: FineWhereUniqueInput | FineWhereUniqueInput[]
    update?: FineUpdateWithWhereUniqueWithoutOfficerInput | FineUpdateWithWhereUniqueWithoutOfficerInput[]
    updateMany?: FineUpdateManyWithWhereWithoutOfficerInput | FineUpdateManyWithWhereWithoutOfficerInput[]
    deleteMany?: FineScalarWhereInput | FineScalarWhereInput[]
  }

  export type FineUncheckedUpdateManyWithoutOfficerNestedInput = {
    create?: XOR<FineCreateWithoutOfficerInput, FineUncheckedCreateWithoutOfficerInput> | FineCreateWithoutOfficerInput[] | FineUncheckedCreateWithoutOfficerInput[]
    connectOrCreate?: FineCreateOrConnectWithoutOfficerInput | FineCreateOrConnectWithoutOfficerInput[]
    upsert?: FineUpsertWithWhereUniqueWithoutOfficerInput | FineUpsertWithWhereUniqueWithoutOfficerInput[]
    createMany?: FineCreateManyOfficerInputEnvelope
    set?: FineWhereUniqueInput | FineWhereUniqueInput[]
    disconnect?: FineWhereUniqueInput | FineWhereUniqueInput[]
    delete?: FineWhereUniqueInput | FineWhereUniqueInput[]
    connect?: FineWhereUniqueInput | FineWhereUniqueInput[]
    update?: FineUpdateWithWhereUniqueWithoutOfficerInput | FineUpdateWithWhereUniqueWithoutOfficerInput[]
    updateMany?: FineUpdateManyWithWhereWithoutOfficerInput | FineUpdateManyWithWhereWithoutOfficerInput[]
    deleteMany?: FineScalarWhereInput | FineScalarWhereInput[]
  }

  export type FineCreateNestedManyWithoutCategoryInput = {
    create?: XOR<FineCreateWithoutCategoryInput, FineUncheckedCreateWithoutCategoryInput> | FineCreateWithoutCategoryInput[] | FineUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FineCreateOrConnectWithoutCategoryInput | FineCreateOrConnectWithoutCategoryInput[]
    createMany?: FineCreateManyCategoryInputEnvelope
    connect?: FineWhereUniqueInput | FineWhereUniqueInput[]
  }

  export type FineUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<FineCreateWithoutCategoryInput, FineUncheckedCreateWithoutCategoryInput> | FineCreateWithoutCategoryInput[] | FineUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FineCreateOrConnectWithoutCategoryInput | FineCreateOrConnectWithoutCategoryInput[]
    createMany?: FineCreateManyCategoryInputEnvelope
    connect?: FineWhereUniqueInput | FineWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FineUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<FineCreateWithoutCategoryInput, FineUncheckedCreateWithoutCategoryInput> | FineCreateWithoutCategoryInput[] | FineUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FineCreateOrConnectWithoutCategoryInput | FineCreateOrConnectWithoutCategoryInput[]
    upsert?: FineUpsertWithWhereUniqueWithoutCategoryInput | FineUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: FineCreateManyCategoryInputEnvelope
    set?: FineWhereUniqueInput | FineWhereUniqueInput[]
    disconnect?: FineWhereUniqueInput | FineWhereUniqueInput[]
    delete?: FineWhereUniqueInput | FineWhereUniqueInput[]
    connect?: FineWhereUniqueInput | FineWhereUniqueInput[]
    update?: FineUpdateWithWhereUniqueWithoutCategoryInput | FineUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: FineUpdateManyWithWhereWithoutCategoryInput | FineUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: FineScalarWhereInput | FineScalarWhereInput[]
  }

  export type FineUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<FineCreateWithoutCategoryInput, FineUncheckedCreateWithoutCategoryInput> | FineCreateWithoutCategoryInput[] | FineUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FineCreateOrConnectWithoutCategoryInput | FineCreateOrConnectWithoutCategoryInput[]
    upsert?: FineUpsertWithWhereUniqueWithoutCategoryInput | FineUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: FineCreateManyCategoryInputEnvelope
    set?: FineWhereUniqueInput | FineWhereUniqueInput[]
    disconnect?: FineWhereUniqueInput | FineWhereUniqueInput[]
    delete?: FineWhereUniqueInput | FineWhereUniqueInput[]
    connect?: FineWhereUniqueInput | FineWhereUniqueInput[]
    update?: FineUpdateWithWhereUniqueWithoutCategoryInput | FineUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: FineUpdateManyWithWhereWithoutCategoryInput | FineUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: FineScalarWhereInput | FineScalarWhereInput[]
  }

  export type FineCategoryCreateNestedOneWithoutFinesInput = {
    create?: XOR<FineCategoryCreateWithoutFinesInput, FineCategoryUncheckedCreateWithoutFinesInput>
    connectOrCreate?: FineCategoryCreateOrConnectWithoutFinesInput
    connect?: FineCategoryWhereUniqueInput
  }

  export type OfficerCreateNestedOneWithoutFinesInput = {
    create?: XOR<OfficerCreateWithoutFinesInput, OfficerUncheckedCreateWithoutFinesInput>
    connectOrCreate?: OfficerCreateOrConnectWithoutFinesInput
    connect?: OfficerWhereUniqueInput
  }

  export type PaymentCreateNestedOneWithoutFineInput = {
    create?: XOR<PaymentCreateWithoutFineInput, PaymentUncheckedCreateWithoutFineInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutFineInput
    connect?: PaymentWhereUniqueInput
  }

  export type PaymentUncheckedCreateNestedOneWithoutFineInput = {
    create?: XOR<PaymentCreateWithoutFineInput, PaymentUncheckedCreateWithoutFineInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutFineInput
    connect?: PaymentWhereUniqueInput
  }

  export type EnumFineStatusFieldUpdateOperationsInput = {
    set?: $Enums.FineStatus
  }

  export type FineCategoryUpdateOneRequiredWithoutFinesNestedInput = {
    create?: XOR<FineCategoryCreateWithoutFinesInput, FineCategoryUncheckedCreateWithoutFinesInput>
    connectOrCreate?: FineCategoryCreateOrConnectWithoutFinesInput
    upsert?: FineCategoryUpsertWithoutFinesInput
    connect?: FineCategoryWhereUniqueInput
    update?: XOR<XOR<FineCategoryUpdateToOneWithWhereWithoutFinesInput, FineCategoryUpdateWithoutFinesInput>, FineCategoryUncheckedUpdateWithoutFinesInput>
  }

  export type OfficerUpdateOneRequiredWithoutFinesNestedInput = {
    create?: XOR<OfficerCreateWithoutFinesInput, OfficerUncheckedCreateWithoutFinesInput>
    connectOrCreate?: OfficerCreateOrConnectWithoutFinesInput
    upsert?: OfficerUpsertWithoutFinesInput
    connect?: OfficerWhereUniqueInput
    update?: XOR<XOR<OfficerUpdateToOneWithWhereWithoutFinesInput, OfficerUpdateWithoutFinesInput>, OfficerUncheckedUpdateWithoutFinesInput>
  }

  export type PaymentUpdateOneWithoutFineNestedInput = {
    create?: XOR<PaymentCreateWithoutFineInput, PaymentUncheckedCreateWithoutFineInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutFineInput
    upsert?: PaymentUpsertWithoutFineInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutFineInput, PaymentUpdateWithoutFineInput>, PaymentUncheckedUpdateWithoutFineInput>
  }

  export type PaymentUncheckedUpdateOneWithoutFineNestedInput = {
    create?: XOR<PaymentCreateWithoutFineInput, PaymentUncheckedCreateWithoutFineInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutFineInput
    upsert?: PaymentUpsertWithoutFineInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutFineInput, PaymentUpdateWithoutFineInput>, PaymentUncheckedUpdateWithoutFineInput>
  }

  export type FineCreateNestedOneWithoutPaymentInput = {
    create?: XOR<FineCreateWithoutPaymentInput, FineUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: FineCreateOrConnectWithoutPaymentInput
    connect?: FineWhereUniqueInput
  }

  export type SMSLogCreateNestedManyWithoutPaymentInput = {
    create?: XOR<SMSLogCreateWithoutPaymentInput, SMSLogUncheckedCreateWithoutPaymentInput> | SMSLogCreateWithoutPaymentInput[] | SMSLogUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: SMSLogCreateOrConnectWithoutPaymentInput | SMSLogCreateOrConnectWithoutPaymentInput[]
    createMany?: SMSLogCreateManyPaymentInputEnvelope
    connect?: SMSLogWhereUniqueInput | SMSLogWhereUniqueInput[]
  }

  export type SMSLogUncheckedCreateNestedManyWithoutPaymentInput = {
    create?: XOR<SMSLogCreateWithoutPaymentInput, SMSLogUncheckedCreateWithoutPaymentInput> | SMSLogCreateWithoutPaymentInput[] | SMSLogUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: SMSLogCreateOrConnectWithoutPaymentInput | SMSLogCreateOrConnectWithoutPaymentInput[]
    createMany?: SMSLogCreateManyPaymentInputEnvelope
    connect?: SMSLogWhereUniqueInput | SMSLogWhereUniqueInput[]
  }

  export type FineUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<FineCreateWithoutPaymentInput, FineUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: FineCreateOrConnectWithoutPaymentInput
    upsert?: FineUpsertWithoutPaymentInput
    connect?: FineWhereUniqueInput
    update?: XOR<XOR<FineUpdateToOneWithWhereWithoutPaymentInput, FineUpdateWithoutPaymentInput>, FineUncheckedUpdateWithoutPaymentInput>
  }

  export type SMSLogUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<SMSLogCreateWithoutPaymentInput, SMSLogUncheckedCreateWithoutPaymentInput> | SMSLogCreateWithoutPaymentInput[] | SMSLogUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: SMSLogCreateOrConnectWithoutPaymentInput | SMSLogCreateOrConnectWithoutPaymentInput[]
    upsert?: SMSLogUpsertWithWhereUniqueWithoutPaymentInput | SMSLogUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: SMSLogCreateManyPaymentInputEnvelope
    set?: SMSLogWhereUniqueInput | SMSLogWhereUniqueInput[]
    disconnect?: SMSLogWhereUniqueInput | SMSLogWhereUniqueInput[]
    delete?: SMSLogWhereUniqueInput | SMSLogWhereUniqueInput[]
    connect?: SMSLogWhereUniqueInput | SMSLogWhereUniqueInput[]
    update?: SMSLogUpdateWithWhereUniqueWithoutPaymentInput | SMSLogUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: SMSLogUpdateManyWithWhereWithoutPaymentInput | SMSLogUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: SMSLogScalarWhereInput | SMSLogScalarWhereInput[]
  }

  export type SMSLogUncheckedUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<SMSLogCreateWithoutPaymentInput, SMSLogUncheckedCreateWithoutPaymentInput> | SMSLogCreateWithoutPaymentInput[] | SMSLogUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: SMSLogCreateOrConnectWithoutPaymentInput | SMSLogCreateOrConnectWithoutPaymentInput[]
    upsert?: SMSLogUpsertWithWhereUniqueWithoutPaymentInput | SMSLogUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: SMSLogCreateManyPaymentInputEnvelope
    set?: SMSLogWhereUniqueInput | SMSLogWhereUniqueInput[]
    disconnect?: SMSLogWhereUniqueInput | SMSLogWhereUniqueInput[]
    delete?: SMSLogWhereUniqueInput | SMSLogWhereUniqueInput[]
    connect?: SMSLogWhereUniqueInput | SMSLogWhereUniqueInput[]
    update?: SMSLogUpdateWithWhereUniqueWithoutPaymentInput | SMSLogUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: SMSLogUpdateManyWithWhereWithoutPaymentInput | SMSLogUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: SMSLogScalarWhereInput | SMSLogScalarWhereInput[]
  }

  export type PaymentCreateNestedOneWithoutSmsLogsInput = {
    create?: XOR<PaymentCreateWithoutSmsLogsInput, PaymentUncheckedCreateWithoutSmsLogsInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutSmsLogsInput
    connect?: PaymentWhereUniqueInput
  }

  export type PaymentUpdateOneRequiredWithoutSmsLogsNestedInput = {
    create?: XOR<PaymentCreateWithoutSmsLogsInput, PaymentUncheckedCreateWithoutSmsLogsInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutSmsLogsInput
    upsert?: PaymentUpsertWithoutSmsLogsInput
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutSmsLogsInput, PaymentUpdateWithoutSmsLogsInput>, PaymentUncheckedUpdateWithoutSmsLogsInput>
  }

  export type UserCreateNestedOneWithoutSavedCardsInput = {
    create?: XOR<UserCreateWithoutSavedCardsInput, UserUncheckedCreateWithoutSavedCardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedCardsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSavedCardsNestedInput = {
    create?: XOR<UserCreateWithoutSavedCardsInput, UserUncheckedCreateWithoutSavedCardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedCardsInput
    upsert?: UserUpsertWithoutSavedCardsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSavedCardsInput, UserUpdateWithoutSavedCardsInput>, UserUncheckedUpdateWithoutSavedCardsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumFineStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FineStatus | EnumFineStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FineStatus[] | ListEnumFineStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FineStatus[] | ListEnumFineStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFineStatusFilter<$PrismaModel> | $Enums.FineStatus
  }

  export type NestedEnumFineStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FineStatus | EnumFineStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FineStatus[] | ListEnumFineStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FineStatus[] | ListEnumFineStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFineStatusWithAggregatesFilter<$PrismaModel> | $Enums.FineStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFineStatusFilter<$PrismaModel>
    _max?: NestedEnumFineStatusFilter<$PrismaModel>
  }

  export type DistrictCreateWithoutUsersInput = {
    name: string
    officers?: OfficerCreateNestedManyWithoutDistrictInput
  }

  export type DistrictUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    officers?: OfficerUncheckedCreateNestedManyWithoutDistrictInput
  }

  export type DistrictCreateOrConnectWithoutUsersInput = {
    where: DistrictWhereUniqueInput
    create: XOR<DistrictCreateWithoutUsersInput, DistrictUncheckedCreateWithoutUsersInput>
  }

  export type OfficerCreateWithoutUserInput = {
    badgeNo: string
    phone: string
    createdAt?: Date | string
    district: DistrictCreateNestedOneWithoutOfficersInput
    fines?: FineCreateNestedManyWithoutOfficerInput
  }

  export type OfficerUncheckedCreateWithoutUserInput = {
    id?: number
    badgeNo: string
    phone: string
    districtId: number
    createdAt?: Date | string
    fines?: FineUncheckedCreateNestedManyWithoutOfficerInput
  }

  export type OfficerCreateOrConnectWithoutUserInput = {
    where: OfficerWhereUniqueInput
    create: XOR<OfficerCreateWithoutUserInput, OfficerUncheckedCreateWithoutUserInput>
  }

  export type SavedCardCreateWithoutUserInput = {
    cardholderName: string
    cardNumber: string
    expiry: string
    brand: string
    createdAt?: Date | string
  }

  export type SavedCardUncheckedCreateWithoutUserInput = {
    id?: number
    cardholderName: string
    cardNumber: string
    expiry: string
    brand: string
    createdAt?: Date | string
  }

  export type SavedCardCreateOrConnectWithoutUserInput = {
    where: SavedCardWhereUniqueInput
    create: XOR<SavedCardCreateWithoutUserInput, SavedCardUncheckedCreateWithoutUserInput>
  }

  export type SavedCardCreateManyUserInputEnvelope = {
    data: SavedCardCreateManyUserInput | SavedCardCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DistrictUpsertWithoutUsersInput = {
    update: XOR<DistrictUpdateWithoutUsersInput, DistrictUncheckedUpdateWithoutUsersInput>
    create: XOR<DistrictCreateWithoutUsersInput, DistrictUncheckedCreateWithoutUsersInput>
    where?: DistrictWhereInput
  }

  export type DistrictUpdateToOneWithWhereWithoutUsersInput = {
    where?: DistrictWhereInput
    data: XOR<DistrictUpdateWithoutUsersInput, DistrictUncheckedUpdateWithoutUsersInput>
  }

  export type DistrictUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    officers?: OfficerUpdateManyWithoutDistrictNestedInput
  }

  export type DistrictUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    officers?: OfficerUncheckedUpdateManyWithoutDistrictNestedInput
  }

  export type OfficerUpsertWithoutUserInput = {
    update: XOR<OfficerUpdateWithoutUserInput, OfficerUncheckedUpdateWithoutUserInput>
    create: XOR<OfficerCreateWithoutUserInput, OfficerUncheckedCreateWithoutUserInput>
    where?: OfficerWhereInput
  }

  export type OfficerUpdateToOneWithWhereWithoutUserInput = {
    where?: OfficerWhereInput
    data: XOR<OfficerUpdateWithoutUserInput, OfficerUncheckedUpdateWithoutUserInput>
  }

  export type OfficerUpdateWithoutUserInput = {
    badgeNo?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    district?: DistrictUpdateOneRequiredWithoutOfficersNestedInput
    fines?: FineUpdateManyWithoutOfficerNestedInput
  }

  export type OfficerUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    badgeNo?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    districtId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fines?: FineUncheckedUpdateManyWithoutOfficerNestedInput
  }

  export type SavedCardUpsertWithWhereUniqueWithoutUserInput = {
    where: SavedCardWhereUniqueInput
    update: XOR<SavedCardUpdateWithoutUserInput, SavedCardUncheckedUpdateWithoutUserInput>
    create: XOR<SavedCardCreateWithoutUserInput, SavedCardUncheckedCreateWithoutUserInput>
  }

  export type SavedCardUpdateWithWhereUniqueWithoutUserInput = {
    where: SavedCardWhereUniqueInput
    data: XOR<SavedCardUpdateWithoutUserInput, SavedCardUncheckedUpdateWithoutUserInput>
  }

  export type SavedCardUpdateManyWithWhereWithoutUserInput = {
    where: SavedCardScalarWhereInput
    data: XOR<SavedCardUpdateManyMutationInput, SavedCardUncheckedUpdateManyWithoutUserInput>
  }

  export type SavedCardScalarWhereInput = {
    AND?: SavedCardScalarWhereInput | SavedCardScalarWhereInput[]
    OR?: SavedCardScalarWhereInput[]
    NOT?: SavedCardScalarWhereInput | SavedCardScalarWhereInput[]
    id?: IntFilter<"SavedCard"> | number
    userId?: IntFilter<"SavedCard"> | number
    cardholderName?: StringFilter<"SavedCard"> | string
    cardNumber?: StringFilter<"SavedCard"> | string
    expiry?: StringFilter<"SavedCard"> | string
    brand?: StringFilter<"SavedCard"> | string
    createdAt?: DateTimeFilter<"SavedCard"> | Date | string
  }

  export type OfficerCreateWithoutDistrictInput = {
    badgeNo: string
    phone: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutOfficerInput
    fines?: FineCreateNestedManyWithoutOfficerInput
  }

  export type OfficerUncheckedCreateWithoutDistrictInput = {
    id?: number
    userId: number
    badgeNo: string
    phone: string
    createdAt?: Date | string
    fines?: FineUncheckedCreateNestedManyWithoutOfficerInput
  }

  export type OfficerCreateOrConnectWithoutDistrictInput = {
    where: OfficerWhereUniqueInput
    create: XOR<OfficerCreateWithoutDistrictInput, OfficerUncheckedCreateWithoutDistrictInput>
  }

  export type OfficerCreateManyDistrictInputEnvelope = {
    data: OfficerCreateManyDistrictInput | OfficerCreateManyDistrictInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutDistrictInput = {
    name: string
    email: string
    password: string
    role: $Enums.Role
    phone?: string | null
    nic?: string | null
    dlNo?: string | null
    isActive?: boolean
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    officer?: OfficerCreateNestedOneWithoutUserInput
    savedCards?: SavedCardCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDistrictInput = {
    id?: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    phone?: string | null
    nic?: string | null
    dlNo?: string | null
    isActive?: boolean
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    officer?: OfficerUncheckedCreateNestedOneWithoutUserInput
    savedCards?: SavedCardUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDistrictInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDistrictInput, UserUncheckedCreateWithoutDistrictInput>
  }

  export type UserCreateManyDistrictInputEnvelope = {
    data: UserCreateManyDistrictInput | UserCreateManyDistrictInput[]
    skipDuplicates?: boolean
  }

  export type OfficerUpsertWithWhereUniqueWithoutDistrictInput = {
    where: OfficerWhereUniqueInput
    update: XOR<OfficerUpdateWithoutDistrictInput, OfficerUncheckedUpdateWithoutDistrictInput>
    create: XOR<OfficerCreateWithoutDistrictInput, OfficerUncheckedCreateWithoutDistrictInput>
  }

  export type OfficerUpdateWithWhereUniqueWithoutDistrictInput = {
    where: OfficerWhereUniqueInput
    data: XOR<OfficerUpdateWithoutDistrictInput, OfficerUncheckedUpdateWithoutDistrictInput>
  }

  export type OfficerUpdateManyWithWhereWithoutDistrictInput = {
    where: OfficerScalarWhereInput
    data: XOR<OfficerUpdateManyMutationInput, OfficerUncheckedUpdateManyWithoutDistrictInput>
  }

  export type OfficerScalarWhereInput = {
    AND?: OfficerScalarWhereInput | OfficerScalarWhereInput[]
    OR?: OfficerScalarWhereInput[]
    NOT?: OfficerScalarWhereInput | OfficerScalarWhereInput[]
    id?: IntFilter<"Officer"> | number
    userId?: IntFilter<"Officer"> | number
    badgeNo?: StringFilter<"Officer"> | string
    phone?: StringFilter<"Officer"> | string
    districtId?: IntFilter<"Officer"> | number
    createdAt?: DateTimeFilter<"Officer"> | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutDistrictInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutDistrictInput, UserUncheckedUpdateWithoutDistrictInput>
    create: XOR<UserCreateWithoutDistrictInput, UserUncheckedCreateWithoutDistrictInput>
  }

  export type UserUpdateWithWhereUniqueWithoutDistrictInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutDistrictInput, UserUncheckedUpdateWithoutDistrictInput>
  }

  export type UserUpdateManyWithWhereWithoutDistrictInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutDistrictInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    phone?: StringNullableFilter<"User"> | string | null
    nic?: StringNullableFilter<"User"> | string | null
    dlNo?: StringNullableFilter<"User"> | string | null
    districtId?: IntNullableFilter<"User"> | number | null
    isActive?: BoolFilter<"User"> | boolean
    refreshToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserCreateWithoutOfficerInput = {
    name: string
    email: string
    password: string
    role: $Enums.Role
    phone?: string | null
    nic?: string | null
    dlNo?: string | null
    isActive?: boolean
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    district?: DistrictCreateNestedOneWithoutUsersInput
    savedCards?: SavedCardCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOfficerInput = {
    id?: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    phone?: string | null
    nic?: string | null
    dlNo?: string | null
    districtId?: number | null
    isActive?: boolean
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    savedCards?: SavedCardUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOfficerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOfficerInput, UserUncheckedCreateWithoutOfficerInput>
  }

  export type DistrictCreateWithoutOfficersInput = {
    name: string
    users?: UserCreateNestedManyWithoutDistrictInput
  }

  export type DistrictUncheckedCreateWithoutOfficersInput = {
    id?: number
    name: string
    users?: UserUncheckedCreateNestedManyWithoutDistrictInput
  }

  export type DistrictCreateOrConnectWithoutOfficersInput = {
    where: DistrictWhereUniqueInput
    create: XOR<DistrictCreateWithoutOfficersInput, DistrictUncheckedCreateWithoutOfficersInput>
  }

  export type FineCreateWithoutOfficerInput = {
    referenceNo: string
    vehicleNo: string
    driverName: string
    driverPhone?: string | null
    driverNIC?: string | null
    driverDL?: string | null
    driverEmail?: string | null
    offenseDate: Date | string
    location: string
    status?: $Enums.FineStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: FineCategoryCreateNestedOneWithoutFinesInput
    payment?: PaymentCreateNestedOneWithoutFineInput
  }

  export type FineUncheckedCreateWithoutOfficerInput = {
    id?: number
    referenceNo: string
    vehicleNo: string
    driverName: string
    driverPhone?: string | null
    driverNIC?: string | null
    driverDL?: string | null
    driverEmail?: string | null
    offenseDate: Date | string
    location: string
    categoryId: number
    status?: $Enums.FineStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutFineInput
  }

  export type FineCreateOrConnectWithoutOfficerInput = {
    where: FineWhereUniqueInput
    create: XOR<FineCreateWithoutOfficerInput, FineUncheckedCreateWithoutOfficerInput>
  }

  export type FineCreateManyOfficerInputEnvelope = {
    data: FineCreateManyOfficerInput | FineCreateManyOfficerInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOfficerInput = {
    update: XOR<UserUpdateWithoutOfficerInput, UserUncheckedUpdateWithoutOfficerInput>
    create: XOR<UserCreateWithoutOfficerInput, UserUncheckedCreateWithoutOfficerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOfficerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOfficerInput, UserUncheckedUpdateWithoutOfficerInput>
  }

  export type UserUpdateWithoutOfficerInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    nic?: NullableStringFieldUpdateOperationsInput | string | null
    dlNo?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    district?: DistrictUpdateOneWithoutUsersNestedInput
    savedCards?: SavedCardUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOfficerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    nic?: NullableStringFieldUpdateOperationsInput | string | null
    dlNo?: NullableStringFieldUpdateOperationsInput | string | null
    districtId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedCards?: SavedCardUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DistrictUpsertWithoutOfficersInput = {
    update: XOR<DistrictUpdateWithoutOfficersInput, DistrictUncheckedUpdateWithoutOfficersInput>
    create: XOR<DistrictCreateWithoutOfficersInput, DistrictUncheckedCreateWithoutOfficersInput>
    where?: DistrictWhereInput
  }

  export type DistrictUpdateToOneWithWhereWithoutOfficersInput = {
    where?: DistrictWhereInput
    data: XOR<DistrictUpdateWithoutOfficersInput, DistrictUncheckedUpdateWithoutOfficersInput>
  }

  export type DistrictUpdateWithoutOfficersInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutDistrictNestedInput
  }

  export type DistrictUncheckedUpdateWithoutOfficersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutDistrictNestedInput
  }

  export type FineUpsertWithWhereUniqueWithoutOfficerInput = {
    where: FineWhereUniqueInput
    update: XOR<FineUpdateWithoutOfficerInput, FineUncheckedUpdateWithoutOfficerInput>
    create: XOR<FineCreateWithoutOfficerInput, FineUncheckedCreateWithoutOfficerInput>
  }

  export type FineUpdateWithWhereUniqueWithoutOfficerInput = {
    where: FineWhereUniqueInput
    data: XOR<FineUpdateWithoutOfficerInput, FineUncheckedUpdateWithoutOfficerInput>
  }

  export type FineUpdateManyWithWhereWithoutOfficerInput = {
    where: FineScalarWhereInput
    data: XOR<FineUpdateManyMutationInput, FineUncheckedUpdateManyWithoutOfficerInput>
  }

  export type FineScalarWhereInput = {
    AND?: FineScalarWhereInput | FineScalarWhereInput[]
    OR?: FineScalarWhereInput[]
    NOT?: FineScalarWhereInput | FineScalarWhereInput[]
    id?: IntFilter<"Fine"> | number
    referenceNo?: StringFilter<"Fine"> | string
    vehicleNo?: StringFilter<"Fine"> | string
    driverName?: StringFilter<"Fine"> | string
    driverPhone?: StringNullableFilter<"Fine"> | string | null
    driverNIC?: StringNullableFilter<"Fine"> | string | null
    driverDL?: StringNullableFilter<"Fine"> | string | null
    driverEmail?: StringNullableFilter<"Fine"> | string | null
    offenseDate?: DateTimeFilter<"Fine"> | Date | string
    location?: StringFilter<"Fine"> | string
    categoryId?: IntFilter<"Fine"> | number
    officerId?: IntFilter<"Fine"> | number
    status?: EnumFineStatusFilter<"Fine"> | $Enums.FineStatus
    notes?: StringNullableFilter<"Fine"> | string | null
    createdAt?: DateTimeFilter<"Fine"> | Date | string
    updatedAt?: DateTimeFilter<"Fine"> | Date | string
  }

  export type FineCreateWithoutCategoryInput = {
    referenceNo: string
    vehicleNo: string
    driverName: string
    driverPhone?: string | null
    driverNIC?: string | null
    driverDL?: string | null
    driverEmail?: string | null
    offenseDate: Date | string
    location: string
    status?: $Enums.FineStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    officer: OfficerCreateNestedOneWithoutFinesInput
    payment?: PaymentCreateNestedOneWithoutFineInput
  }

  export type FineUncheckedCreateWithoutCategoryInput = {
    id?: number
    referenceNo: string
    vehicleNo: string
    driverName: string
    driverPhone?: string | null
    driverNIC?: string | null
    driverDL?: string | null
    driverEmail?: string | null
    offenseDate: Date | string
    location: string
    officerId: number
    status?: $Enums.FineStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutFineInput
  }

  export type FineCreateOrConnectWithoutCategoryInput = {
    where: FineWhereUniqueInput
    create: XOR<FineCreateWithoutCategoryInput, FineUncheckedCreateWithoutCategoryInput>
  }

  export type FineCreateManyCategoryInputEnvelope = {
    data: FineCreateManyCategoryInput | FineCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type FineUpsertWithWhereUniqueWithoutCategoryInput = {
    where: FineWhereUniqueInput
    update: XOR<FineUpdateWithoutCategoryInput, FineUncheckedUpdateWithoutCategoryInput>
    create: XOR<FineCreateWithoutCategoryInput, FineUncheckedCreateWithoutCategoryInput>
  }

  export type FineUpdateWithWhereUniqueWithoutCategoryInput = {
    where: FineWhereUniqueInput
    data: XOR<FineUpdateWithoutCategoryInput, FineUncheckedUpdateWithoutCategoryInput>
  }

  export type FineUpdateManyWithWhereWithoutCategoryInput = {
    where: FineScalarWhereInput
    data: XOR<FineUpdateManyMutationInput, FineUncheckedUpdateManyWithoutCategoryInput>
  }

  export type FineCategoryCreateWithoutFinesInput = {
    name: string
    description?: string | null
    amount: number
    isActive?: boolean
  }

  export type FineCategoryUncheckedCreateWithoutFinesInput = {
    id?: number
    name: string
    description?: string | null
    amount: number
    isActive?: boolean
  }

  export type FineCategoryCreateOrConnectWithoutFinesInput = {
    where: FineCategoryWhereUniqueInput
    create: XOR<FineCategoryCreateWithoutFinesInput, FineCategoryUncheckedCreateWithoutFinesInput>
  }

  export type OfficerCreateWithoutFinesInput = {
    badgeNo: string
    phone: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutOfficerInput
    district: DistrictCreateNestedOneWithoutOfficersInput
  }

  export type OfficerUncheckedCreateWithoutFinesInput = {
    id?: number
    userId: number
    badgeNo: string
    phone: string
    districtId: number
    createdAt?: Date | string
  }

  export type OfficerCreateOrConnectWithoutFinesInput = {
    where: OfficerWhereUniqueInput
    create: XOR<OfficerCreateWithoutFinesInput, OfficerUncheckedCreateWithoutFinesInput>
  }

  export type PaymentCreateWithoutFineInput = {
    amount: number
    payerName: string
    payerPhone: string
    paymentMethod?: string
    status?: string
    transactionId?: string | null
    receiptNo: string
    paidAt?: Date | string
    smsLogs?: SMSLogCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutFineInput = {
    id?: number
    amount: number
    payerName: string
    payerPhone: string
    paymentMethod?: string
    status?: string
    transactionId?: string | null
    receiptNo: string
    paidAt?: Date | string
    smsLogs?: SMSLogUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutFineInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutFineInput, PaymentUncheckedCreateWithoutFineInput>
  }

  export type FineCategoryUpsertWithoutFinesInput = {
    update: XOR<FineCategoryUpdateWithoutFinesInput, FineCategoryUncheckedUpdateWithoutFinesInput>
    create: XOR<FineCategoryCreateWithoutFinesInput, FineCategoryUncheckedCreateWithoutFinesInput>
    where?: FineCategoryWhereInput
  }

  export type FineCategoryUpdateToOneWithWhereWithoutFinesInput = {
    where?: FineCategoryWhereInput
    data: XOR<FineCategoryUpdateWithoutFinesInput, FineCategoryUncheckedUpdateWithoutFinesInput>
  }

  export type FineCategoryUpdateWithoutFinesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FineCategoryUncheckedUpdateWithoutFinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OfficerUpsertWithoutFinesInput = {
    update: XOR<OfficerUpdateWithoutFinesInput, OfficerUncheckedUpdateWithoutFinesInput>
    create: XOR<OfficerCreateWithoutFinesInput, OfficerUncheckedCreateWithoutFinesInput>
    where?: OfficerWhereInput
  }

  export type OfficerUpdateToOneWithWhereWithoutFinesInput = {
    where?: OfficerWhereInput
    data: XOR<OfficerUpdateWithoutFinesInput, OfficerUncheckedUpdateWithoutFinesInput>
  }

  export type OfficerUpdateWithoutFinesInput = {
    badgeNo?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOfficerNestedInput
    district?: DistrictUpdateOneRequiredWithoutOfficersNestedInput
  }

  export type OfficerUncheckedUpdateWithoutFinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    badgeNo?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    districtId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpsertWithoutFineInput = {
    update: XOR<PaymentUpdateWithoutFineInput, PaymentUncheckedUpdateWithoutFineInput>
    create: XOR<PaymentCreateWithoutFineInput, PaymentUncheckedCreateWithoutFineInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutFineInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutFineInput, PaymentUncheckedUpdateWithoutFineInput>
  }

  export type PaymentUpdateWithoutFineInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    payerName?: StringFieldUpdateOperationsInput | string
    payerPhone?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    receiptNo?: StringFieldUpdateOperationsInput | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    smsLogs?: SMSLogUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutFineInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    payerName?: StringFieldUpdateOperationsInput | string
    payerPhone?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    receiptNo?: StringFieldUpdateOperationsInput | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    smsLogs?: SMSLogUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type FineCreateWithoutPaymentInput = {
    referenceNo: string
    vehicleNo: string
    driverName: string
    driverPhone?: string | null
    driverNIC?: string | null
    driverDL?: string | null
    driverEmail?: string | null
    offenseDate: Date | string
    location: string
    status?: $Enums.FineStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: FineCategoryCreateNestedOneWithoutFinesInput
    officer: OfficerCreateNestedOneWithoutFinesInput
  }

  export type FineUncheckedCreateWithoutPaymentInput = {
    id?: number
    referenceNo: string
    vehicleNo: string
    driverName: string
    driverPhone?: string | null
    driverNIC?: string | null
    driverDL?: string | null
    driverEmail?: string | null
    offenseDate: Date | string
    location: string
    categoryId: number
    officerId: number
    status?: $Enums.FineStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FineCreateOrConnectWithoutPaymentInput = {
    where: FineWhereUniqueInput
    create: XOR<FineCreateWithoutPaymentInput, FineUncheckedCreateWithoutPaymentInput>
  }

  export type SMSLogCreateWithoutPaymentInput = {
    officerPhone: string
    message: string
    status: string
    sid?: string | null
    sentAt?: Date | string
  }

  export type SMSLogUncheckedCreateWithoutPaymentInput = {
    id?: number
    officerPhone: string
    message: string
    status: string
    sid?: string | null
    sentAt?: Date | string
  }

  export type SMSLogCreateOrConnectWithoutPaymentInput = {
    where: SMSLogWhereUniqueInput
    create: XOR<SMSLogCreateWithoutPaymentInput, SMSLogUncheckedCreateWithoutPaymentInput>
  }

  export type SMSLogCreateManyPaymentInputEnvelope = {
    data: SMSLogCreateManyPaymentInput | SMSLogCreateManyPaymentInput[]
    skipDuplicates?: boolean
  }

  export type FineUpsertWithoutPaymentInput = {
    update: XOR<FineUpdateWithoutPaymentInput, FineUncheckedUpdateWithoutPaymentInput>
    create: XOR<FineCreateWithoutPaymentInput, FineUncheckedCreateWithoutPaymentInput>
    where?: FineWhereInput
  }

  export type FineUpdateToOneWithWhereWithoutPaymentInput = {
    where?: FineWhereInput
    data: XOR<FineUpdateWithoutPaymentInput, FineUncheckedUpdateWithoutPaymentInput>
  }

  export type FineUpdateWithoutPaymentInput = {
    referenceNo?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    driverName?: StringFieldUpdateOperationsInput | string
    driverPhone?: NullableStringFieldUpdateOperationsInput | string | null
    driverNIC?: NullableStringFieldUpdateOperationsInput | string | null
    driverDL?: NullableStringFieldUpdateOperationsInput | string | null
    driverEmail?: NullableStringFieldUpdateOperationsInput | string | null
    offenseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumFineStatusFieldUpdateOperationsInput | $Enums.FineStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: FineCategoryUpdateOneRequiredWithoutFinesNestedInput
    officer?: OfficerUpdateOneRequiredWithoutFinesNestedInput
  }

  export type FineUncheckedUpdateWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    referenceNo?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    driverName?: StringFieldUpdateOperationsInput | string
    driverPhone?: NullableStringFieldUpdateOperationsInput | string | null
    driverNIC?: NullableStringFieldUpdateOperationsInput | string | null
    driverDL?: NullableStringFieldUpdateOperationsInput | string | null
    driverEmail?: NullableStringFieldUpdateOperationsInput | string | null
    offenseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    officerId?: IntFieldUpdateOperationsInput | number
    status?: EnumFineStatusFieldUpdateOperationsInput | $Enums.FineStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SMSLogUpsertWithWhereUniqueWithoutPaymentInput = {
    where: SMSLogWhereUniqueInput
    update: XOR<SMSLogUpdateWithoutPaymentInput, SMSLogUncheckedUpdateWithoutPaymentInput>
    create: XOR<SMSLogCreateWithoutPaymentInput, SMSLogUncheckedCreateWithoutPaymentInput>
  }

  export type SMSLogUpdateWithWhereUniqueWithoutPaymentInput = {
    where: SMSLogWhereUniqueInput
    data: XOR<SMSLogUpdateWithoutPaymentInput, SMSLogUncheckedUpdateWithoutPaymentInput>
  }

  export type SMSLogUpdateManyWithWhereWithoutPaymentInput = {
    where: SMSLogScalarWhereInput
    data: XOR<SMSLogUpdateManyMutationInput, SMSLogUncheckedUpdateManyWithoutPaymentInput>
  }

  export type SMSLogScalarWhereInput = {
    AND?: SMSLogScalarWhereInput | SMSLogScalarWhereInput[]
    OR?: SMSLogScalarWhereInput[]
    NOT?: SMSLogScalarWhereInput | SMSLogScalarWhereInput[]
    id?: IntFilter<"SMSLog"> | number
    paymentId?: IntFilter<"SMSLog"> | number
    officerPhone?: StringFilter<"SMSLog"> | string
    message?: StringFilter<"SMSLog"> | string
    status?: StringFilter<"SMSLog"> | string
    sid?: StringNullableFilter<"SMSLog"> | string | null
    sentAt?: DateTimeFilter<"SMSLog"> | Date | string
  }

  export type PaymentCreateWithoutSmsLogsInput = {
    amount: number
    payerName: string
    payerPhone: string
    paymentMethod?: string
    status?: string
    transactionId?: string | null
    receiptNo: string
    paidAt?: Date | string
    fine: FineCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutSmsLogsInput = {
    id?: number
    fineId: number
    amount: number
    payerName: string
    payerPhone: string
    paymentMethod?: string
    status?: string
    transactionId?: string | null
    receiptNo: string
    paidAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutSmsLogsInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutSmsLogsInput, PaymentUncheckedCreateWithoutSmsLogsInput>
  }

  export type PaymentUpsertWithoutSmsLogsInput = {
    update: XOR<PaymentUpdateWithoutSmsLogsInput, PaymentUncheckedUpdateWithoutSmsLogsInput>
    create: XOR<PaymentCreateWithoutSmsLogsInput, PaymentUncheckedCreateWithoutSmsLogsInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutSmsLogsInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutSmsLogsInput, PaymentUncheckedUpdateWithoutSmsLogsInput>
  }

  export type PaymentUpdateWithoutSmsLogsInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    payerName?: StringFieldUpdateOperationsInput | string
    payerPhone?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    receiptNo?: StringFieldUpdateOperationsInput | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fine?: FineUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutSmsLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fineId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    payerName?: StringFieldUpdateOperationsInput | string
    payerPhone?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    receiptNo?: StringFieldUpdateOperationsInput | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutSavedCardsInput = {
    name: string
    email: string
    password: string
    role: $Enums.Role
    phone?: string | null
    nic?: string | null
    dlNo?: string | null
    isActive?: boolean
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    district?: DistrictCreateNestedOneWithoutUsersInput
    officer?: OfficerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSavedCardsInput = {
    id?: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    phone?: string | null
    nic?: string | null
    dlNo?: string | null
    districtId?: number | null
    isActive?: boolean
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    officer?: OfficerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSavedCardsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSavedCardsInput, UserUncheckedCreateWithoutSavedCardsInput>
  }

  export type UserUpsertWithoutSavedCardsInput = {
    update: XOR<UserUpdateWithoutSavedCardsInput, UserUncheckedUpdateWithoutSavedCardsInput>
    create: XOR<UserCreateWithoutSavedCardsInput, UserUncheckedCreateWithoutSavedCardsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSavedCardsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSavedCardsInput, UserUncheckedUpdateWithoutSavedCardsInput>
  }

  export type UserUpdateWithoutSavedCardsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    nic?: NullableStringFieldUpdateOperationsInput | string | null
    dlNo?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    district?: DistrictUpdateOneWithoutUsersNestedInput
    officer?: OfficerUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSavedCardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    nic?: NullableStringFieldUpdateOperationsInput | string | null
    dlNo?: NullableStringFieldUpdateOperationsInput | string | null
    districtId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    officer?: OfficerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type SavedCardCreateManyUserInput = {
    id?: number
    cardholderName: string
    cardNumber: string
    expiry: string
    brand: string
    createdAt?: Date | string
  }

  export type SavedCardUpdateWithoutUserInput = {
    cardholderName?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    expiry?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedCardUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    cardholderName?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    expiry?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedCardUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    cardholderName?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    expiry?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfficerCreateManyDistrictInput = {
    id?: number
    userId: number
    badgeNo: string
    phone: string
    createdAt?: Date | string
  }

  export type UserCreateManyDistrictInput = {
    id?: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    phone?: string | null
    nic?: string | null
    dlNo?: string | null
    isActive?: boolean
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OfficerUpdateWithoutDistrictInput = {
    badgeNo?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOfficerNestedInput
    fines?: FineUpdateManyWithoutOfficerNestedInput
  }

  export type OfficerUncheckedUpdateWithoutDistrictInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    badgeNo?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fines?: FineUncheckedUpdateManyWithoutOfficerNestedInput
  }

  export type OfficerUncheckedUpdateManyWithoutDistrictInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    badgeNo?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutDistrictInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    nic?: NullableStringFieldUpdateOperationsInput | string | null
    dlNo?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    officer?: OfficerUpdateOneWithoutUserNestedInput
    savedCards?: SavedCardUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDistrictInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    nic?: NullableStringFieldUpdateOperationsInput | string | null
    dlNo?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    officer?: OfficerUncheckedUpdateOneWithoutUserNestedInput
    savedCards?: SavedCardUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutDistrictInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    nic?: NullableStringFieldUpdateOperationsInput | string | null
    dlNo?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FineCreateManyOfficerInput = {
    id?: number
    referenceNo: string
    vehicleNo: string
    driverName: string
    driverPhone?: string | null
    driverNIC?: string | null
    driverDL?: string | null
    driverEmail?: string | null
    offenseDate: Date | string
    location: string
    categoryId: number
    status?: $Enums.FineStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FineUpdateWithoutOfficerInput = {
    referenceNo?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    driverName?: StringFieldUpdateOperationsInput | string
    driverPhone?: NullableStringFieldUpdateOperationsInput | string | null
    driverNIC?: NullableStringFieldUpdateOperationsInput | string | null
    driverDL?: NullableStringFieldUpdateOperationsInput | string | null
    driverEmail?: NullableStringFieldUpdateOperationsInput | string | null
    offenseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumFineStatusFieldUpdateOperationsInput | $Enums.FineStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: FineCategoryUpdateOneRequiredWithoutFinesNestedInput
    payment?: PaymentUpdateOneWithoutFineNestedInput
  }

  export type FineUncheckedUpdateWithoutOfficerInput = {
    id?: IntFieldUpdateOperationsInput | number
    referenceNo?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    driverName?: StringFieldUpdateOperationsInput | string
    driverPhone?: NullableStringFieldUpdateOperationsInput | string | null
    driverNIC?: NullableStringFieldUpdateOperationsInput | string | null
    driverDL?: NullableStringFieldUpdateOperationsInput | string | null
    driverEmail?: NullableStringFieldUpdateOperationsInput | string | null
    offenseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    status?: EnumFineStatusFieldUpdateOperationsInput | $Enums.FineStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutFineNestedInput
  }

  export type FineUncheckedUpdateManyWithoutOfficerInput = {
    id?: IntFieldUpdateOperationsInput | number
    referenceNo?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    driverName?: StringFieldUpdateOperationsInput | string
    driverPhone?: NullableStringFieldUpdateOperationsInput | string | null
    driverNIC?: NullableStringFieldUpdateOperationsInput | string | null
    driverDL?: NullableStringFieldUpdateOperationsInput | string | null
    driverEmail?: NullableStringFieldUpdateOperationsInput | string | null
    offenseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    status?: EnumFineStatusFieldUpdateOperationsInput | $Enums.FineStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FineCreateManyCategoryInput = {
    id?: number
    referenceNo: string
    vehicleNo: string
    driverName: string
    driverPhone?: string | null
    driverNIC?: string | null
    driverDL?: string | null
    driverEmail?: string | null
    offenseDate: Date | string
    location: string
    officerId: number
    status?: $Enums.FineStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FineUpdateWithoutCategoryInput = {
    referenceNo?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    driverName?: StringFieldUpdateOperationsInput | string
    driverPhone?: NullableStringFieldUpdateOperationsInput | string | null
    driverNIC?: NullableStringFieldUpdateOperationsInput | string | null
    driverDL?: NullableStringFieldUpdateOperationsInput | string | null
    driverEmail?: NullableStringFieldUpdateOperationsInput | string | null
    offenseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumFineStatusFieldUpdateOperationsInput | $Enums.FineStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    officer?: OfficerUpdateOneRequiredWithoutFinesNestedInput
    payment?: PaymentUpdateOneWithoutFineNestedInput
  }

  export type FineUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    referenceNo?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    driverName?: StringFieldUpdateOperationsInput | string
    driverPhone?: NullableStringFieldUpdateOperationsInput | string | null
    driverNIC?: NullableStringFieldUpdateOperationsInput | string | null
    driverDL?: NullableStringFieldUpdateOperationsInput | string | null
    driverEmail?: NullableStringFieldUpdateOperationsInput | string | null
    offenseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    officerId?: IntFieldUpdateOperationsInput | number
    status?: EnumFineStatusFieldUpdateOperationsInput | $Enums.FineStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutFineNestedInput
  }

  export type FineUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    referenceNo?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    driverName?: StringFieldUpdateOperationsInput | string
    driverPhone?: NullableStringFieldUpdateOperationsInput | string | null
    driverNIC?: NullableStringFieldUpdateOperationsInput | string | null
    driverDL?: NullableStringFieldUpdateOperationsInput | string | null
    driverEmail?: NullableStringFieldUpdateOperationsInput | string | null
    offenseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    officerId?: IntFieldUpdateOperationsInput | number
    status?: EnumFineStatusFieldUpdateOperationsInput | $Enums.FineStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SMSLogCreateManyPaymentInput = {
    id?: number
    officerPhone: string
    message: string
    status: string
    sid?: string | null
    sentAt?: Date | string
  }

  export type SMSLogUpdateWithoutPaymentInput = {
    officerPhone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sid?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SMSLogUncheckedUpdateWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    officerPhone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sid?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SMSLogUncheckedUpdateManyWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    officerPhone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sid?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}