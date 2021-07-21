export class NoExistsError extends Error {
  constructor(paramName: string) {
    super(`${paramName} does not exists`);
  }
}
