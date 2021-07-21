export class AlreadyExists extends Error {
  constructor(paramName: string) {
    super(`The ${paramName} already exists`);
    this.name = paramName;
  }
}
