export class AlreadyExistsError extends Error {
  constructor(paramName: string) {
    super(`The ${paramName} already exists`);
    this.name = paramName;
  }
}
