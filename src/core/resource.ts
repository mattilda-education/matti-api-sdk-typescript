// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Mattil } from '../client';

export abstract class APIResource {
  protected _client: Mattil;

  constructor(client: Mattil) {
    this._client = client;
  }
}
