// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type ClientOptions } from 'matti/client';

import { IncomingMessage } from 'node:http';

export const parseAuthHeaders = (req: IncomingMessage): Partial<ClientOptions> => {
  const apiKey = Array.isArray(req.headers['api_key']) ? req.headers['api_key'][0] : req.headers['api_key'];
  return { apiKey };
};
