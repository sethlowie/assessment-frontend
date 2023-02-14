export class UnexpectedCaseException extends Error {
  constructor(key: string) {
    super(
      `Encountered unexpected case: "${key}" 
      Either this is a new case that 
      hasn't been implemented yet, or an 
      invalid value was passed to the function.`,
    );
    this.name = "UnexpectedCaseException";
  }
}

/** assertUnreachable is used to ensure exhaustive switch statements
 * Assuming you have a type like `type Foo = 'bar' | 'baz';`
 *
 * the following will pass
 *
 * ```ts
 * switch (myType) {
 * 	case 'bar':
 * 	case 'baz':
 * 	default:
 * 		assertUnreachable(myType)
 * }
 * ```
 *
 * and this will fail with an error like "type 'string' is not assignable to 'never'"
 *
 * ```ts
 * switch (myType) {
 * 	case 'bar':
 * 	default:
 * 		assertUnreachable(myType)
 * }
 * ```

 * */
export const assertUnreachable = (key: never): never => {
  throw new UnexpectedCaseException(key);
};
