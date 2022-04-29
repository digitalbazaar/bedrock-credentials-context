# bedrock-credentials-context ChangeLog

## 3.0.0 - 2022-04-xx

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
