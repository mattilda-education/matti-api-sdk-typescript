# Changelog

## 1.2.0 (2025-09-09)

Full Changelog: [v1.1.0...v1.2.0](https://github.com/mattilda-education/matti-api-sdk-typescript/compare/v1.1.0...v1.2.0)

### Features

* **api:** update via SDK Studio ([2a7510a](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/2a7510a8bb44f51707108edd65e4ec4752149cd7))
* **mcp:** add client infer to cloudflare oauth screen ([d311353](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/d31135361cfbdb7c12b3ea9cec5eb74de735c8b2))
* **mcp:** add code execution tool ([6d6ee56](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/6d6ee56c8a15a1cb1589e7f5eb6f494ba6b355ec))
* **mcp:** add logging when environment variable is set ([b466507](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/b466507be8460c379bab205e88ef84648e83d818))
* **mcp:** add option to infer mcp client ([35d35c5](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/35d35c5bc494a09a73bde2a2c0dd5ac60e5e664e))
* **mcp:** add unix socket option for remote MCP ([9b37d4b](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/9b37d4b65f62de18cfe8c6770bc650c993689e70))
* **mcp:** allow setting logging level ([af30927](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/af3092724b07dbe6c5640cc2452fad5ff5fe96a2))
* **mcp:** expose client options in `streamableHTTPApp` ([ab86c37](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/ab86c3718322e516f5d98afa998238b83e695bf7))
* **mcp:** parse query string as mcp client options in mcp server ([3c2748c](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/3c2748c947eddb7092b7e61d6c2716b7191dd162))
* **mcp:** remote server with passthru auth ([7fa2e60](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/7fa2e60f5f1338c049927e92921f8340b82eb3e2))


### Bug Fixes

* coerce nullable values to undefined ([1a8162b](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/1a8162b6c3184f544677a8f506aa972e4fc74e0d))
* **mcp:** avoid sending `jq_filter` to base API ([e9319a3](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/e9319a3468688b2aa69381739946b82f27d7ccc0))
* **mcp:** fix query options parsing ([32bc29d](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/32bc29d7e428fa1710795b873009766b07975206))
* **mcp:** generate additionalProperties=true for map schemas to avoid validation issues ([3c1711e](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/3c1711ec82006e3eedbd5e02fe0ace4dd75066ad))
* **mcp:** include required section for top-level properties and support naming transformations ([c39bc42](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/c39bc424e017fa93f1f6c52e8e44bd29e63a1340))
* **mcp:** reverse validJson capability option and limit scope ([8abef62](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/8abef622c6b14e30fe4826794d118d725499ad96))
* **mcp:** support jq filtering on cloudflare workers ([6ae903a](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/6ae903adb181867ae050576c2d11cac3e273e0fe))


### Chores

* add package to package.json ([a72a6b4](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/a72a6b4fe240b97fa150c463653d22c4df1cc92c))
* **client:** qualify global Blob ([04067e8](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/04067e89aa3bada983616334c03881fcd95063e2))
* **deps:** update dependency @types/node to v20.17.58 ([cab2215](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/cab22156e62c8390257b420b5822d41e1fc0486a))
* **internal:** codegen related update ([bf51a35](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/bf51a354d899eee9b8646169ffada749bb36c5fe))
* **internal:** codegen related update ([ba8e015](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/ba8e0157a54bf2492c6eba1ea470638b44facfe2))
* **internal:** codegen related update ([7fff4f4](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/7fff4f4b9da8e40dc964110d06fa2189ec5dace4))
* **internal:** codegen related update ([e33a3bc](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/e33a3bcadd4ebfe292161050bb4f5fe381cb0b3a))
* **internal:** codegen related update ([cac0f1f](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/cac0f1f9d7789dfdbfb8d1f8584ef343ebaa2a38))
* **internal:** codegen related update ([192f942](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/192f9427e2a9d6e731cd0ec52f812259ac043329))
* **internal:** codegen related update ([35ec05b](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/35ec05b598619c96f315b5f44b1ee8d3526588b1))
* **internal:** formatting change ([12b9eb5](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/12b9eb5e5511f60a864c2d69d99edaf033f4ec1d))
* **internal:** make mcp-server publishing public by defaut ([2b155b5](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/2b155b52c12d7499cd7b09d4fa642b1093573778))
* **internal:** move publish config ([40cbded](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/40cbded95a4d95c84e780ddff88675dff8f8c79a))
* **internal:** refactor array check ([0b71dd6](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/0b71dd6d3428745af008b27f35e4645c8da4d979))
* **internal:** remove redundant imports config ([11dfe82](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/11dfe82915e951b9d370bb4694da4c9e21efdd07))
* **internal:** update comment in script ([b330134](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/b33013457f4fb85746d488960d7e7069963986d3))
* **internal:** update global Error reference ([adffaac](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/adffaac509456671ca0cf24889ce8b979b20df9d))
* **mcp:** add cors to oauth metadata route ([c43db38](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/c43db3827fd9a193f16126d4be5bdc7354462d64))
* **mcp:** document remote server in README.md ([5bcd427](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/5bcd4276342248e1ecd8fb9bf35c5f6ef9eaa2cf))
* **mcp:** formatting ([88e091d](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/88e091db9a1a9213069f2ff6b03d7781d0d07332))
* **mcp:** minor cleanup of types and package.json ([4300711](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/430071167d98aa2ccb23120491d7878b18fa0c6c))
* **mcp:** refactor streamable http transport ([3835251](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/383525182fbab58b8f46b116a73f52e933755260))
* **mcp:** rework imports in tools ([73ca94b](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/73ca94bd4efa4a08afe4bc02a61d1f9757d8cb64))
* **mcp:** update package.json ([d8ba54f](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/d8ba54f7014dbc8483be00177c42623c12fa5ae0))
* **mcp:** update README ([5075339](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/50753393a762185790c98b17aa4019462b3417d7))
* **mcp:** update types ([f8227be](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/f8227be2b9e7f3fbcce8f525681daef2171e95d5))
* **ts:** reorder package.json imports ([36cf95b](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/36cf95b25c5beb78d8d3b267facbcb060214bbdf))
* update @stainless-api/prism-cli to v5.15.0 ([7dff6d2](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/7dff6d2bb15253b3b5547325e4957df56a443604))
* update CI script ([2d5db63](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/2d5db63d7dee7b7fd0bf0c0a5216e3a105cf1975))


### Documentation

* **mcp:** correct instructions for adding to claude web ([7b101f7](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/7b101f7710eed4bba2b3bae500656f9b5db3fb8c))

## 1.1.0 (2025-07-11)

Full Changelog: [v1.0.0...v1.1.0](https://github.com/mattilda-education/matti-api-sdk-typescript/compare/v1.0.0...v1.1.0)

### Features

* **api:** update via SDK Studio ([92ea578](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/92ea578a7664072f7c4087fc8d68d3160cf5f75e))

## 1.0.0 (2025-07-11)

Full Changelog: [v0.1.0-alpha.2...v1.0.0](https://github.com/mattilda-education/matti-api-sdk-typescript/compare/v0.1.0-alpha.2...v1.0.0)

### Features

* **api:** update via SDK Studio ([0770a58](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/0770a585ead553d4d07941b70d83ba634be22856))

## 0.1.0-alpha.2 (2025-07-11)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/mattilda-education/matti-api-sdk-typescript/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

## 0.1.0-alpha.1 (2025-07-11)

Full Changelog: [v0.0.1-alpha.1...v0.1.0-alpha.1](https://github.com/mattilda-education/matti-api-sdk-typescript/compare/v0.0.1-alpha.1...v0.1.0-alpha.1)

### Features

* **api:** update via SDK Studio ([9001a17](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/9001a17dfca7bcd5d7d6af9c12bb80c0e5539bce))

## 0.0.1-alpha.1 (2025-07-11)

Full Changelog: [v0.0.1-alpha.0...v0.0.1-alpha.1](https://github.com/mattilda-education/matti-api-sdk-typescript/compare/v0.0.1-alpha.0...v0.0.1-alpha.1)

### Chores

* configure new SDK language ([394136e](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/394136e3cc031e70cbe6f17eb25fea8ec46fc122))
* update SDK settings ([6ef4074](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/6ef40749366043710cb3de77b10e7d1c077f6e93))
* update SDK settings ([319d96b](https://github.com/mattilda-education/matti-api-sdk-typescript/commit/319d96b3895a6c02e035cc29aef3058b3a6f5781))
