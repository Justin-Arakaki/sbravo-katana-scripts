export type apiErrorResponse = {
  response: {
    data: {
      error: {
        path: string;
        code: string;
        message: string;
        info: Record<string, unknown>;
      };
    };
  };
};
