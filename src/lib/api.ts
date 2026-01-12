import type { User } from '@/store/types/auth';
import type { LoginVendorPayload } from '@/store/types/auth';

type ApiResponse<T> = {
  data: T;
  statusCode: number;
  message?: string;
};

type AuthResponse = {
  user: User;
};

type VerifyTokenResponse = {
  isValid: boolean;
};

export type UpdateUserPayload = {
  name: string;
  characterId: number;
  focusArea: number;
  insightStyle: number;
  onboardingCompleted: boolean;
  tourCompleted: boolean;
};

class ApiError extends Error {
  constructor(
    message: string,
    public statusCode: number,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export class ApiClient {
  private static async request<ResponseT>(
    endpoint: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    body?: Record<string, unknown>,
  ): Promise<ResponseT> {
    const requestOptions: RequestInit = {
      method,
      body: body && JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    };

    // On server-side, manually pass the cookie, since next js won't do it automatically
    if (typeof window === 'undefined') {
      const { cookies } = await import('next/headers');
      const cookieStore = await cookies();
      const token = cookieStore.get('token')?.value;

      if (token) {
        requestOptions.headers = {
          ...requestOptions.headers,
          Cookie: `token=${token}`,
        };
      }
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`, requestOptions);

    if (!response.ok) {
      const errorData = await response.json();

      throw new ApiError(errorData.error || 'Request failed', response.status);
    }

    const responseData: ApiResponse<ResponseT> = await response.json();

    return responseData.data;
  }

  // Auth endpoints
  public static async verifyToken() {
    const { cookies } = await import('next/headers');
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    return token ? this.request<VerifyTokenResponse>('auth/token-verify', 'POST', { token }) : null;
  }

  public static async loginWithVendor(credentials: LoginVendorPayload) {
    return this.request<AuthResponse>('auth/login/vendor', 'POST', credentials);
  }

  public static async logout() {
    const response = await fetch('/api/auth/logout', {
      method: 'POST',
    });

    return await response.json();
  }
}
