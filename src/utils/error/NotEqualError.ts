export class NotEqualError extends Error {
  constructor(paramA: string, paramB: string) {
    super(`${paramA} must be not equal to ${paramB}`);
  }
}
