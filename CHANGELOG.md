# bedrock-credentials-context ChangeLog

## 5.0.0 - 2024-xx-xx

### Added
- Re-export `contexts`, `metadata`, and `named` from
  `@digitalbazaar/credentials-context`.

### Changed
- Update dependencies.
  - `@bedrock/jsonld-document-loader@5.1.0`.
  - `@digitalbazaar/credentials-context@3.1.0`.
    - Switch from `credentials-context`.
    - Adds VC 2.0 support.

### Removed
- **BREAKING**: Remove export of `constants`. Replaced with `metadata` and/or
  `named` exports.

## 4.0.0 - 2022-09-19

### Changed
- Use `credentials-context@2`.
- **BREAKING**: Update peer deps:
  - Use `@bedrock/jsonld-document-loader@4`.

### Added
- Add test suite.

## 3.0.0 - 2022-04-29

### Changed
- **BREAKING**: Update peer deps:
  - `@bedrock/core@6`
  - `@bedrock/jsonld-document-loader@3`.

## 2.0.0 - 2022-04-03

### Changed
- **BREAKING**: Rename package to `@bedrock/credentials-context`.
- **BREAKING**: Convert to module (ESM).
- **BREAKING**: Remove default export.
- **BREAKING**: Require node 14.x.

### Removed
- **BREAKING**: Remove adding any constants to bedrock config system. If
  constants are needed, import them from `constants`.

## 1.1.0 - 2022-03-29

### Changed
- Update peer deps:
  - `bedrock@4.5`
  - `bedrock-jsonld-document-loader@1.3`.
- Update internals to use esm style and use `esm.js` to
  transpile to CommonJS.

## 1.0.0 - 2020-01-16

- See git history for changes.
