// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { RequestInit, RequestInfo, BodyInit } from './internal/builtin-types';
import type { HTTPMethod, PromiseOrValue, MergedRequestInit, FinalizedRequestInit } from './internal/types';
import { uuid4 } from './internal/utils/uuid';
import { validatePositiveInteger, isAbsoluteURL, safeJSON } from './internal/utils/values';
import { sleep } from './internal/utils/sleep';
export type { Logger, LogLevel } from './internal/utils/log';
import { castToError, isAbortError } from './internal/errors';
import type { APIResponseProps } from './internal/parse';
import { getPlatformHeaders } from './internal/detect-platform';
import * as Shims from './internal/shims';
import * as Opts from './internal/request-options';
import { VERSION } from './version';
import * as Errors from './core/error';
import * as Uploads from './core/uploads';
import * as API from './resources/index';
import { APIPromise } from './core/api-promise';
import {
  Campus,
  CampusCreateParams,
  CampusListParams,
  CampusListResponse,
  CampusRetrieveParams,
  CampusUpdateParams,
  CampusUpdateResponse,
  Campuses,
} from './resources/campuses';
import {
  Complement,
  ComplementCreateParams,
  ComplementDeleteParams,
  ComplementDeleteResponse,
  ComplementListParams,
  ComplementListResponse,
  ComplementRetrieveParams,
  ComplementUpdateParams,
  Complements,
} from './resources/complements';
import {
  Discount,
  DiscountCreateParams,
  DiscountListParams,
  DiscountListResponse,
  DiscountRetrieveParams,
  DiscountUpdateParams,
  Discounts,
} from './resources/discounts';
import {
  Inscription,
  InscriptionCreateParams,
  InscriptionDeleteParams,
  InscriptionDeleteResponse,
  InscriptionListParams,
  InscriptionListResponse,
  InscriptionRetrieveParams,
  InscriptionUpdateParams,
  Inscriptions,
} from './resources/inscriptions';
import {
  Base,
  InvoiceEntry,
  InvoiceListParams,
  InvoiceListResponse,
  InvoiceRetrieveParams,
  Invoices,
} from './resources/invoices';
import {
  Ledger,
  LedgerCreateParams,
  LedgerCreateResponse,
  LedgerEntries,
  LedgerListParams,
  LedgerListResponse,
  LedgerRetrieveParams,
  LedgerUpdateParams,
} from './resources/ledger';
import {
  Membership,
  MembershipCreateParams,
  MembershipDeleteParams,
  MembershipDeleteResponse,
  MembershipListParams,
  MembershipListResponse,
  MembershipRetrieveParams,
  MembershipUpdateParams,
  Memberships,
  Pagination,
} from './resources/memberships';
import {
  PaymentCreateParams,
  PaymentEntry,
  PaymentListParams,
  PaymentListResponse,
  PaymentRetrieveParams,
  Payments,
} from './resources/payments';
import {
  Period,
  PeriodCreate,
  PeriodCreateParams,
  PeriodCreateResponse,
  PeriodDeleteParams,
  PeriodDeleteResponse,
  PeriodListParams,
  PeriodRetrieveParams,
  PeriodUpdateParams,
  Periods,
} from './resources/periods';
import {
  Program,
  ProgramCreateParams,
  ProgramListParams,
  ProgramListResponse,
  ProgramRetrieveParams,
  ProgramUpdateParams,
  Programs,
} from './resources/programs';
import {
  Scholarship,
  ScholarshipCreateParams,
  ScholarshipDeleteParams,
  ScholarshipDeleteResponse,
  ScholarshipListParams,
  ScholarshipListResponse,
  ScholarshipRetrieveParams,
  ScholarshipUpdateParams,
  Scholarships,
} from './resources/scholarships';
import {
  School,
  SchoolListResponse,
  SchoolUpdateParams,
  SchoolUpdateResponse,
  Schools,
} from './resources/schools';
import {
  User,
  UserCreateParams,
  UserCreatePasswordlessParams,
  UserCreatePasswordlessResponse,
  UserCreateResponse,
  UserDeleteParams,
  UserDeleteResponse,
  UserListParams,
  UserListResponse,
  UserRetrieveParams,
  UserRetrieveResponse,
  UserUpdateParams,
  UserUpdateResponse,
  Users,
} from './resources/users';
import {
  Persons,
  Student,
  StudentCreateParams,
  StudentCreateResponse,
  StudentDeleteParams,
  StudentDeleteResponse,
  StudentListParams,
  StudentListResponse,
  StudentRetrieveParams,
  StudentRetrieveResponse,
  StudentUpdateParams,
  Students,
} from './resources/students/students';
import { type Fetch } from './internal/builtin-types';
import { HeadersLike, NullableHeaders, buildHeaders } from './internal/headers';
import { FinalRequestOptions, RequestOptions } from './internal/request-options';
import { readEnv } from './internal/utils/env';
import {
  type LogLevel,
  type Logger,
  formatRequestDetails,
  loggerFor,
  parseLogLevel,
} from './internal/utils/log';
import { isEmptyObj } from './internal/utils/values';

const environments = {
  production: 'https://api.mattilda.school/matti_api/v1',
  environment_1: 'https://api.mattilda.net/matti_api/v1',
  environment_2: 'https://api.mattilda.io/matti_api/v1',
};
type Environment = keyof typeof environments;

export interface ClientOptions {
  /**
   * Defaults to process.env['MATTIL_API_KEY'].
   */
  apiKey?: string | undefined;

  /**
   * Specifies the environment to use for the API.
   *
   * Each environment maps to a different base URL:
   * - `production` corresponds to `https://api.mattilda.school/matti_api/v1`
   * - `environment_1` corresponds to `https://api.mattilda.net/matti_api/v1`
   * - `environment_2` corresponds to `https://api.mattilda.io/matti_api/v1`
   */
  environment?: Environment | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['MATTIL_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   *
   * @unit milliseconds
   */
  timeout?: number | undefined;
  /**
   * Additional `RequestInit` options to be passed to `fetch` calls.
   * Properties will be overridden by per-request `fetchOptions`.
   */
  fetchOptions?: MergedRequestInit | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we expect that `fetch` is defined globally.
   */
  fetch?: Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `null` in request options.
   */
  defaultHeaders?: HeadersLike | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Record<string, string | undefined> | undefined;

  /**
   * Set the log level.
   *
   * Defaults to process.env['MATTIL_LOG'] or 'warn' if it isn't set.
   */
  logLevel?: LogLevel | undefined;

  /**
   * Set the logger.
   *
   * Defaults to globalThis.console.
   */
  logger?: Logger | undefined;
}

/**
 * API Client for interfacing with the Mattil API.
 */
export class Mattil {
  apiKey: string;

  baseURL: string;
  maxRetries: number;
  timeout: number;
  logger: Logger | undefined;
  logLevel: LogLevel | undefined;
  fetchOptions: MergedRequestInit | undefined;

  private fetch: Fetch;
  #encoder: Opts.RequestEncoder;
  protected idempotencyHeader?: string;
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Mattil API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['MATTIL_API_KEY'] ?? undefined]
   * @param {Environment} [opts.environment=production] - Specifies the environment URL to use for the API.
   * @param {string} [opts.baseURL=process.env['MATTIL_BASE_URL'] ?? https://api.mattilda.school/matti_api/v1] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {MergedRequestInit} [opts.fetchOptions] - Additional `RequestInit` options to be passed to `fetch` calls.
   * @param {Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {HeadersLike} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Record<string, string | undefined>} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = readEnv('MATTIL_BASE_URL'),
    apiKey = readEnv('MATTIL_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.MattilError(
        "The MATTIL_API_KEY environment variable is missing or empty; either provide it, or instantiate the Mattil client with an apiKey option, like new Mattil({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL,
      environment: opts.environment ?? 'production',
    };

    if (baseURL && opts.environment) {
      throw new Errors.MattilError(
        'Ambiguous URL; The `baseURL` option (or MATTIL_BASE_URL env var) and the `environment` option are given. If you want to use the environment you must pass baseURL: null',
      );
    }

    this.baseURL = options.baseURL || environments[options.environment || 'production'];
    this.timeout = options.timeout ?? Mattil.DEFAULT_TIMEOUT /* 1 minute */;
    this.logger = options.logger ?? console;
    const defaultLogLevel = 'warn';
    // Set default logLevel early so that we can log a warning in parseLogLevel.
    this.logLevel = defaultLogLevel;
    this.logLevel =
      parseLogLevel(options.logLevel, 'ClientOptions.logLevel', this) ??
      parseLogLevel(readEnv('MATTIL_LOG'), "process.env['MATTIL_LOG']", this) ??
      defaultLogLevel;
    this.fetchOptions = options.fetchOptions;
    this.maxRetries = options.maxRetries ?? 2;
    this.fetch = options.fetch ?? Shims.getDefaultFetch();
    this.#encoder = Opts.FallbackEncoder;

    this._options = options;

    this.apiKey = apiKey;
  }

  /**
   * Create a new client instance re-using the same options given to the current client with optional overriding.
   */
  withOptions(options: Partial<ClientOptions>): this {
    const client = new (this.constructor as any as new (props: ClientOptions) => typeof this)({
      ...this._options,
      environment: options.environment ? options.environment : undefined,
      baseURL: options.environment ? undefined : this.baseURL,
      maxRetries: this.maxRetries,
      timeout: this.timeout,
      logger: this.logger,
      logLevel: this.logLevel,
      fetch: this.fetch,
      fetchOptions: this.fetchOptions,
      apiKey: this.apiKey,
      ...options,
    });
    return client;
  }

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== environments[this._options.environment || 'production'];
  }

  protected defaultQuery(): Record<string, string | undefined> | undefined {
    return this._options.defaultQuery;
  }

  protected validateHeaders({ values, nulls }: NullableHeaders) {
    return;
  }

  protected async authHeaders(opts: FinalRequestOptions): Promise<NullableHeaders | undefined> {
    return buildHeaders([{ api_key: this.apiKey }]);
  }

  /**
   * Basic re-implementation of `qs.stringify` for primitive types.
   */
  protected stringifyQuery(query: Record<string, unknown>): string {
    return Object.entries(query)
      .filter(([_, value]) => typeof value !== 'undefined')
      .map(([key, value]) => {
        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
          return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        }
        if (value === null) {
          return `${encodeURIComponent(key)}=`;
        }
        throw new Errors.MattilError(
          `Cannot stringify type ${typeof value}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`,
        );
      })
      .join('&');
  }

  private getUserAgent(): string {
    return `${this.constructor.name}/JS ${VERSION}`;
  }

  protected defaultIdempotencyKey(): string {
    return `stainless-node-retry-${uuid4()}`;
  }

  protected makeStatusError(
    status: number,
    error: Object,
    message: string | undefined,
    headers: Headers,
  ): Errors.APIError {
    return Errors.APIError.generate(status, error, message, headers);
  }

  buildURL(
    path: string,
    query: Record<string, unknown> | null | undefined,
    defaultBaseURL?: string | undefined,
  ): string {
    const baseURL = (!this.#baseURLOverridden() && defaultBaseURL) || this.baseURL;
    const url =
      isAbsoluteURL(path) ?
        new URL(path)
      : new URL(baseURL + (baseURL.endsWith('/') && path.startsWith('/') ? path.slice(1) : path));

    const defaultQuery = this.defaultQuery();
    if (!isEmptyObj(defaultQuery)) {
      query = { ...defaultQuery, ...query };
    }

    if (typeof query === 'object' && query && !Array.isArray(query)) {
      url.search = this.stringifyQuery(query as Record<string, unknown>);
    }

    return url.toString();
  }

  /**
   * Used as a callback for mutating the given `FinalRequestOptions` object.
   */
  protected async prepareOptions(options: FinalRequestOptions): Promise<void> {}

  /**
   * Used as a callback for mutating the given `RequestInit` object.
   *
   * This is useful for cases where you want to add certain headers based off of
   * the request properties, e.g. `method` or `url`.
   */
  protected async prepareRequest(
    request: RequestInit,
    { url, options }: { url: string; options: FinalRequestOptions },
  ): Promise<void> {}

  get<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('get', path, opts);
  }

  post<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('post', path, opts);
  }

  patch<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('patch', path, opts);
  }

  put<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('put', path, opts);
  }

  delete<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('delete', path, opts);
  }

  private methodRequest<Rsp>(
    method: HTTPMethod,
    path: string,
    opts?: PromiseOrValue<RequestOptions>,
  ): APIPromise<Rsp> {
    return this.request(
      Promise.resolve(opts).then((opts) => {
        return { method, path, ...opts };
      }),
    );
  }

  request<Rsp>(
    options: PromiseOrValue<FinalRequestOptions>,
    remainingRetries: number | null = null,
  ): APIPromise<Rsp> {
    return new APIPromise(this, this.makeRequest(options, remainingRetries, undefined));
  }

  private async makeRequest(
    optionsInput: PromiseOrValue<FinalRequestOptions>,
    retriesRemaining: number | null,
    retryOfRequestLogID: string | undefined,
  ): Promise<APIResponseProps> {
    const options = await optionsInput;
    const maxRetries = options.maxRetries ?? this.maxRetries;
    if (retriesRemaining == null) {
      retriesRemaining = maxRetries;
    }

    await this.prepareOptions(options);

    const { req, url, timeout } = await this.buildRequest(options, {
      retryCount: maxRetries - retriesRemaining,
    });

    await this.prepareRequest(req, { url, options });

    /** Not an API request ID, just for correlating local log entries. */
    const requestLogID = 'log_' + ((Math.random() * (1 << 24)) | 0).toString(16).padStart(6, '0');
    const retryLogStr = retryOfRequestLogID === undefined ? '' : `, retryOf: ${retryOfRequestLogID}`;
    const startTime = Date.now();

    loggerFor(this).debug(
      `[${requestLogID}] sending request`,
      formatRequestDetails({
        retryOfRequestLogID,
        method: options.method,
        url,
        options,
        headers: req.headers,
      }),
    );

    if (options.signal?.aborted) {
      throw new Errors.APIUserAbortError();
    }

    const controller = new AbortController();
    const response = await this.fetchWithTimeout(url, req, timeout, controller).catch(castToError);
    const headersTime = Date.now();

    if (response instanceof Error) {
      const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;
      if (options.signal?.aborted) {
        throw new Errors.APIUserAbortError();
      }
      // detect native connection timeout errors
      // deno throws "TypeError: error sending request for url (https://example/): client error (Connect): tcp connect error: Operation timed out (os error 60): Operation timed out (os error 60)"
      // undici throws "TypeError: fetch failed" with cause "ConnectTimeoutError: Connect Timeout Error (attempted address: example:443, timeout: 1ms)"
      // others do not provide enough information to distinguish timeouts from other connection errors
      const isTimeout =
        isAbortError(response) ||
        /timed? ?out/i.test(String(response) + ('cause' in response ? String(response.cause) : ''));
      if (retriesRemaining) {
        loggerFor(this).info(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - ${retryMessage}`,
        );
        loggerFor(this).debug(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url,
            durationMs: headersTime - startTime,
            message: response.message,
          }),
        );
        return this.retryRequest(options, retriesRemaining, retryOfRequestLogID ?? requestLogID);
      }
      loggerFor(this).info(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - error; no more retries left`,
      );
      loggerFor(this).debug(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (error; no more retries left)`,
        formatRequestDetails({
          retryOfRequestLogID,
          url,
          durationMs: headersTime - startTime,
          message: response.message,
        }),
      );
      if (isTimeout) {
        throw new Errors.APIConnectionTimeoutError();
      }
      throw new Errors.APIConnectionError({ cause: response });
    }

    const responseInfo = `[${requestLogID}${retryLogStr}] ${req.method} ${url} ${
      response.ok ? 'succeeded' : 'failed'
    } with status ${response.status} in ${headersTime - startTime}ms`;

    if (!response.ok) {
      const shouldRetry = await this.shouldRetry(response);
      if (retriesRemaining && shouldRetry) {
        const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;

        // We don't need the body of this response.
        await Shims.CancelReadableStream(response.body);
        loggerFor(this).info(`${responseInfo} - ${retryMessage}`);
        loggerFor(this).debug(
          `[${requestLogID}] response error (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url: response.url,
            status: response.status,
            headers: response.headers,
            durationMs: headersTime - startTime,
          }),
        );
        return this.retryRequest(
          options,
          retriesRemaining,
          retryOfRequestLogID ?? requestLogID,
          response.headers,
        );
      }

      const retryMessage = shouldRetry ? `error; no more retries left` : `error; not retryable`;

      loggerFor(this).info(`${responseInfo} - ${retryMessage}`);

      const errText = await response.text().catch((err: any) => castToError(err).message);
      const errJSON = safeJSON(errText);
      const errMessage = errJSON ? undefined : errText;

      loggerFor(this).debug(
        `[${requestLogID}] response error (${retryMessage})`,
        formatRequestDetails({
          retryOfRequestLogID,
          url: response.url,
          status: response.status,
          headers: response.headers,
          message: errMessage,
          durationMs: Date.now() - startTime,
        }),
      );

      const err = this.makeStatusError(response.status, errJSON, errMessage, response.headers);
      throw err;
    }

    loggerFor(this).info(responseInfo);
    loggerFor(this).debug(
      `[${requestLogID}] response start`,
      formatRequestDetails({
        retryOfRequestLogID,
        url: response.url,
        status: response.status,
        headers: response.headers,
        durationMs: headersTime - startTime,
      }),
    );

    return { response, options, controller, requestLogID, retryOfRequestLogID, startTime };
  }

  async fetchWithTimeout(
    url: RequestInfo,
    init: RequestInit | undefined,
    ms: number,
    controller: AbortController,
  ): Promise<Response> {
    const { signal, method, ...options } = init || {};
    if (signal) signal.addEventListener('abort', () => controller.abort());

    const timeout = setTimeout(() => controller.abort(), ms);

    const isReadableBody =
      ((globalThis as any).ReadableStream && options.body instanceof (globalThis as any).ReadableStream) ||
      (typeof options.body === 'object' && options.body !== null && Symbol.asyncIterator in options.body);

    const fetchOptions: RequestInit = {
      signal: controller.signal as any,
      ...(isReadableBody ? { duplex: 'half' } : {}),
      method: 'GET',
      ...options,
    };
    if (method) {
      // Custom methods like 'patch' need to be uppercased
      // See https://github.com/nodejs/undici/issues/2294
      fetchOptions.method = method.toUpperCase();
    }

    try {
      // use undefined this binding; fetch errors if bound to something else in browser/cloudflare
      return await this.fetch.call(undefined, url, fetchOptions);
    } finally {
      clearTimeout(timeout);
    }
  }

  private async shouldRetry(response: Response): Promise<boolean> {
    // Note this is not a standard header.
    const shouldRetryHeader = response.headers.get('x-should-retry');

    // If the server explicitly says whether or not to retry, obey.
    if (shouldRetryHeader === 'true') return true;
    if (shouldRetryHeader === 'false') return false;

    // Retry on request timeouts.
    if (response.status === 408) return true;

    // Retry on lock timeouts.
    if (response.status === 409) return true;

    // Retry on rate limits.
    if (response.status === 429) return true;

    // Retry internal errors.
    if (response.status >= 500) return true;

    return false;
  }

  private async retryRequest(
    options: FinalRequestOptions,
    retriesRemaining: number,
    requestLogID: string,
    responseHeaders?: Headers | undefined,
  ): Promise<APIResponseProps> {
    let timeoutMillis: number | undefined;

    // Note the `retry-after-ms` header may not be standard, but is a good idea and we'd like proactive support for it.
    const retryAfterMillisHeader = responseHeaders?.get('retry-after-ms');
    if (retryAfterMillisHeader) {
      const timeoutMs = parseFloat(retryAfterMillisHeader);
      if (!Number.isNaN(timeoutMs)) {
        timeoutMillis = timeoutMs;
      }
    }

    // About the Retry-After header: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After
    const retryAfterHeader = responseHeaders?.get('retry-after');
    if (retryAfterHeader && !timeoutMillis) {
      const timeoutSeconds = parseFloat(retryAfterHeader);
      if (!Number.isNaN(timeoutSeconds)) {
        timeoutMillis = timeoutSeconds * 1000;
      } else {
        timeoutMillis = Date.parse(retryAfterHeader) - Date.now();
      }
    }

    // If the API asks us to wait a certain amount of time (and it's a reasonable amount),
    // just do what it says, but otherwise calculate a default
    if (!(timeoutMillis && 0 <= timeoutMillis && timeoutMillis < 60 * 1000)) {
      const maxRetries = options.maxRetries ?? this.maxRetries;
      timeoutMillis = this.calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries);
    }
    await sleep(timeoutMillis);

    return this.makeRequest(options, retriesRemaining - 1, requestLogID);
  }

  private calculateDefaultRetryTimeoutMillis(retriesRemaining: number, maxRetries: number): number {
    const initialRetryDelay = 0.5;
    const maxRetryDelay = 8.0;

    const numRetries = maxRetries - retriesRemaining;

    // Apply exponential backoff, but not more than the max.
    const sleepSeconds = Math.min(initialRetryDelay * Math.pow(2, numRetries), maxRetryDelay);

    // Apply some jitter, take up to at most 25 percent of the retry time.
    const jitter = 1 - Math.random() * 0.25;

    return sleepSeconds * jitter * 1000;
  }

  async buildRequest(
    inputOptions: FinalRequestOptions,
    { retryCount = 0 }: { retryCount?: number } = {},
  ): Promise<{ req: FinalizedRequestInit; url: string; timeout: number }> {
    const options = { ...inputOptions };
    const { method, path, query, defaultBaseURL } = options;

    const url = this.buildURL(path!, query as Record<string, unknown>, defaultBaseURL);
    if ('timeout' in options) validatePositiveInteger('timeout', options.timeout);
    options.timeout = options.timeout ?? this.timeout;
    const { bodyHeaders, body } = this.buildBody({ options });
    const reqHeaders = await this.buildHeaders({ options: inputOptions, method, bodyHeaders, retryCount });

    const req: FinalizedRequestInit = {
      method,
      headers: reqHeaders,
      ...(options.signal && { signal: options.signal }),
      ...((globalThis as any).ReadableStream &&
        body instanceof (globalThis as any).ReadableStream && { duplex: 'half' }),
      ...(body && { body }),
      ...((this.fetchOptions as any) ?? {}),
      ...((options.fetchOptions as any) ?? {}),
    };

    return { req, url, timeout: options.timeout };
  }

  private async buildHeaders({
    options,
    method,
    bodyHeaders,
    retryCount,
  }: {
    options: FinalRequestOptions;
    method: HTTPMethod;
    bodyHeaders: HeadersLike;
    retryCount: number;
  }): Promise<Headers> {
    let idempotencyHeaders: HeadersLike = {};
    if (this.idempotencyHeader && method !== 'get') {
      if (!options.idempotencyKey) options.idempotencyKey = this.defaultIdempotencyKey();
      idempotencyHeaders[this.idempotencyHeader] = options.idempotencyKey;
    }

    const headers = buildHeaders([
      idempotencyHeaders,
      {
        Accept: 'application/json',
        'User-Agent': this.getUserAgent(),
        'X-Stainless-Retry-Count': String(retryCount),
        ...(options.timeout ? { 'X-Stainless-Timeout': String(Math.trunc(options.timeout / 1000)) } : {}),
        ...getPlatformHeaders(),
      },
      await this.authHeaders(options),
      this._options.defaultHeaders,
      bodyHeaders,
      options.headers,
    ]);

    this.validateHeaders(headers);

    return headers.values;
  }

  private buildBody({ options: { body, headers: rawHeaders } }: { options: FinalRequestOptions }): {
    bodyHeaders: HeadersLike;
    body: BodyInit | undefined;
  } {
    if (!body) {
      return { bodyHeaders: undefined, body: undefined };
    }
    const headers = buildHeaders([rawHeaders]);
    if (
      // Pass raw type verbatim
      ArrayBuffer.isView(body) ||
      body instanceof ArrayBuffer ||
      body instanceof DataView ||
      (typeof body === 'string' &&
        // Preserve legacy string encoding behavior for now
        headers.values.has('content-type')) ||
      // `Blob` is superset of `File`
      body instanceof Blob ||
      // `FormData` -> `multipart/form-data`
      body instanceof FormData ||
      // `URLSearchParams` -> `application/x-www-form-urlencoded`
      body instanceof URLSearchParams ||
      // Send chunked stream (each chunk has own `length`)
      ((globalThis as any).ReadableStream && body instanceof (globalThis as any).ReadableStream)
    ) {
      return { bodyHeaders: undefined, body: body as BodyInit };
    } else if (
      typeof body === 'object' &&
      (Symbol.asyncIterator in body ||
        (Symbol.iterator in body && 'next' in body && typeof body.next === 'function'))
    ) {
      return { bodyHeaders: undefined, body: Shims.ReadableStreamFrom(body as AsyncIterable<Uint8Array>) };
    } else {
      return this.#encoder({ body, headers });
    }
  }

  static Mattil = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static MattilError = Errors.MattilError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;

  schools: API.Schools = new API.Schools(this);
  campuses: API.Campuses = new API.Campuses(this);
  programs: API.Programs = new API.Programs(this);
  inscriptions: API.Inscriptions = new API.Inscriptions(this);
  memberships: API.Memberships = new API.Memberships(this);
  complements: API.Complements = new API.Complements(this);
  scholarships: API.Scholarships = new API.Scholarships(this);
  discounts: API.Discounts = new API.Discounts(this);
  invoices: API.Invoices = new API.Invoices(this);
  payments: API.Payments = new API.Payments(this);
  ledger: API.Ledger = new API.Ledger(this);
  students: API.Students = new API.Students(this);
  users: API.Users = new API.Users(this);
  periods: API.Periods = new API.Periods(this);
}
Mattil.Schools = Schools;
Mattil.Campuses = Campuses;
Mattil.Programs = Programs;
Mattil.Inscriptions = Inscriptions;
Mattil.Memberships = Memberships;
Mattil.Complements = Complements;
Mattil.Scholarships = Scholarships;
Mattil.Discounts = Discounts;
Mattil.Invoices = Invoices;
Mattil.Payments = Payments;
Mattil.Ledger = Ledger;
Mattil.Students = Students;
Mattil.Users = Users;
Mattil.Periods = Periods;
export declare namespace Mattil {
  export type RequestOptions = Opts.RequestOptions;

  export {
    Schools as Schools,
    type School as School,
    type SchoolUpdateResponse as SchoolUpdateResponse,
    type SchoolListResponse as SchoolListResponse,
    type SchoolUpdateParams as SchoolUpdateParams,
  };

  export {
    Campuses as Campuses,
    type Campus as Campus,
    type CampusUpdateResponse as CampusUpdateResponse,
    type CampusListResponse as CampusListResponse,
    type CampusCreateParams as CampusCreateParams,
    type CampusRetrieveParams as CampusRetrieveParams,
    type CampusUpdateParams as CampusUpdateParams,
    type CampusListParams as CampusListParams,
  };

  export {
    Programs as Programs,
    type Program as Program,
    type ProgramListResponse as ProgramListResponse,
    type ProgramCreateParams as ProgramCreateParams,
    type ProgramRetrieveParams as ProgramRetrieveParams,
    type ProgramUpdateParams as ProgramUpdateParams,
    type ProgramListParams as ProgramListParams,
  };

  export {
    Inscriptions as Inscriptions,
    type Inscription as Inscription,
    type InscriptionListResponse as InscriptionListResponse,
    type InscriptionDeleteResponse as InscriptionDeleteResponse,
    type InscriptionCreateParams as InscriptionCreateParams,
    type InscriptionRetrieveParams as InscriptionRetrieveParams,
    type InscriptionUpdateParams as InscriptionUpdateParams,
    type InscriptionListParams as InscriptionListParams,
    type InscriptionDeleteParams as InscriptionDeleteParams,
  };

  export {
    Memberships as Memberships,
    type Membership as Membership,
    type Pagination as Pagination,
    type MembershipListResponse as MembershipListResponse,
    type MembershipDeleteResponse as MembershipDeleteResponse,
    type MembershipCreateParams as MembershipCreateParams,
    type MembershipRetrieveParams as MembershipRetrieveParams,
    type MembershipUpdateParams as MembershipUpdateParams,
    type MembershipListParams as MembershipListParams,
    type MembershipDeleteParams as MembershipDeleteParams,
  };

  export {
    Complements as Complements,
    type Complement as Complement,
    type ComplementListResponse as ComplementListResponse,
    type ComplementDeleteResponse as ComplementDeleteResponse,
    type ComplementCreateParams as ComplementCreateParams,
    type ComplementRetrieveParams as ComplementRetrieveParams,
    type ComplementUpdateParams as ComplementUpdateParams,
    type ComplementListParams as ComplementListParams,
    type ComplementDeleteParams as ComplementDeleteParams,
  };

  export {
    Scholarships as Scholarships,
    type Scholarship as Scholarship,
    type ScholarshipListResponse as ScholarshipListResponse,
    type ScholarshipDeleteResponse as ScholarshipDeleteResponse,
    type ScholarshipCreateParams as ScholarshipCreateParams,
    type ScholarshipRetrieveParams as ScholarshipRetrieveParams,
    type ScholarshipUpdateParams as ScholarshipUpdateParams,
    type ScholarshipListParams as ScholarshipListParams,
    type ScholarshipDeleteParams as ScholarshipDeleteParams,
  };

  export {
    Discounts as Discounts,
    type Discount as Discount,
    type DiscountListResponse as DiscountListResponse,
    type DiscountCreateParams as DiscountCreateParams,
    type DiscountRetrieveParams as DiscountRetrieveParams,
    type DiscountUpdateParams as DiscountUpdateParams,
    type DiscountListParams as DiscountListParams,
  };

  export {
    Invoices as Invoices,
    type Base as Base,
    type InvoiceEntry as InvoiceEntry,
    type InvoiceListResponse as InvoiceListResponse,
    type InvoiceRetrieveParams as InvoiceRetrieveParams,
    type InvoiceListParams as InvoiceListParams,
  };

  export {
    Payments as Payments,
    type PaymentEntry as PaymentEntry,
    type PaymentListResponse as PaymentListResponse,
    type PaymentCreateParams as PaymentCreateParams,
    type PaymentRetrieveParams as PaymentRetrieveParams,
    type PaymentListParams as PaymentListParams,
  };

  export {
    Ledger as Ledger,
    type LedgerEntries as LedgerEntries,
    type LedgerCreateResponse as LedgerCreateResponse,
    type LedgerListResponse as LedgerListResponse,
    type LedgerCreateParams as LedgerCreateParams,
    type LedgerRetrieveParams as LedgerRetrieveParams,
    type LedgerUpdateParams as LedgerUpdateParams,
    type LedgerListParams as LedgerListParams,
  };

  export {
    Students as Students,
    type Persons as Persons,
    type Student as Student,
    type StudentCreateResponse as StudentCreateResponse,
    type StudentRetrieveResponse as StudentRetrieveResponse,
    type StudentListResponse as StudentListResponse,
    type StudentDeleteResponse as StudentDeleteResponse,
    type StudentCreateParams as StudentCreateParams,
    type StudentRetrieveParams as StudentRetrieveParams,
    type StudentUpdateParams as StudentUpdateParams,
    type StudentListParams as StudentListParams,
    type StudentDeleteParams as StudentDeleteParams,
  };

  export {
    Users as Users,
    type User as User,
    type UserCreateResponse as UserCreateResponse,
    type UserRetrieveResponse as UserRetrieveResponse,
    type UserUpdateResponse as UserUpdateResponse,
    type UserListResponse as UserListResponse,
    type UserDeleteResponse as UserDeleteResponse,
    type UserCreatePasswordlessResponse as UserCreatePasswordlessResponse,
    type UserCreateParams as UserCreateParams,
    type UserRetrieveParams as UserRetrieveParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserDeleteParams as UserDeleteParams,
    type UserCreatePasswordlessParams as UserCreatePasswordlessParams,
  };

  export {
    Periods as Periods,
    type Period as Period,
    type PeriodCreate as PeriodCreate,
    type PeriodCreateResponse as PeriodCreateResponse,
    type PeriodDeleteResponse as PeriodDeleteResponse,
    type PeriodCreateParams as PeriodCreateParams,
    type PeriodRetrieveParams as PeriodRetrieveParams,
    type PeriodUpdateParams as PeriodUpdateParams,
    type PeriodListParams as PeriodListParams,
    type PeriodDeleteParams as PeriodDeleteParams,
  };
}
