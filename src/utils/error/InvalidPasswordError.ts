export class InvalidPasswordError extends Error {
  constructor() {
    super('Password does not match');
  }
}
