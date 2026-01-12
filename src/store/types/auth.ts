export type LoginVendorPayload = {
  token: string;
};

export type User = {
  id: number;
  email: string;
  name: string | null;
};
