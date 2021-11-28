type GetUserTokenResult = string | null;

export class LocalStorageService {
  private static readonly USER_TOKEN_KEY: string = "token";

  public static getUserToken(): GetUserTokenResult {
    return localStorage.getItem(this.USER_TOKEN_KEY);
  }

  public static saveUserToken(token: string): void {
    localStorage.setItem(this.USER_TOKEN_KEY, token);
  }
}
