/*!
 * Copyright (c) 2020-2022 Digital Bazaar, Inc. All rights reserved.
 */
import credentialsContext from 'credentials-context';
import {jsonLdDocumentLoader} from '@bedrock/jsonld-document-loader';

const contextModules = [
  credentialsContext
];

for(const {contexts} of contextModules) {
  for(const [contextUrl, context] of contexts) {
    jsonLdDocumentLoader.addStatic(contextUrl, context);
  }
}

const {constants} = credentialsContext;
export {constants};
