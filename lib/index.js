/*!
 * Copyright (c) 2020-2024 Digital Bazaar, Inc. All rights reserved.
 */
import {contexts} from '@digitalbazaar/credentials-context';
import {jsonLdDocumentLoader} from '@bedrock/jsonld-document-loader';

jsonLdDocumentLoader.addDocuments({documents: contexts});
