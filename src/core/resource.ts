// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Matti } from '../client';

export abstract class APIResource {
  protected _client: Matti;

  constructor(client: Matti) {
    this._client = client;
  }
}
