/*!
 * Copyright (c) 2020-2024 Digital Bazaar, Inc. All rights reserved.
 */
import * as credentialsV2Context from '@digitalbazaar/credentials-v2-context';
import credentialsContext from 'credentials-context';
import {jsonLdDocumentLoader} from '@bedrock/jsonld-document-loader';

const contextModules = [
  credentialsContext,
  credentialsV2Context,
];

// each library should export a contexts Map
for(const {contexts} of contextModules) {
  // each entry in the context maps is contextUrl context json
  for(const [contextUrl, context] of contexts) {
    jsonLdDocumentLoader.addStatic(contextUrl, context);
  }
}

const {constants} = credentialsContext;
export {constants};
