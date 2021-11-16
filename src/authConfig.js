/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { LogLevel } from "@azure/msal-browser";

/**
 * Configuration object to be passed to MSAL instance on creation. 
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
 *
 * die "fa6e0bbf-6970-489d-9939-92a1f5c6704a", // CS12 Anwendung
 * die "9553b8b4-ab57-4441-9f0d-60e1d6f4cbf6", // CS13 Anwendung
 * ist eine SingleTenant
 * wir testen deshalb mit: APIScope@psiestos.onmicrosoft.com, passwd: xxxxxxx
 * Manage Consent: https://myapplications.microsoft.com?tenant=5bb8f580-5c3c-4bc2-9271-9558084c4fde
 */
export const msalConfig = {
    auth: {
		clientId: "9553b8b4-ab57-4441-9f0d-60e1d6f4cbf6", // CS13
		authority: "https://login.microsoftonline.com/5bb8f580-5c3c-4bc2-9271-9558084c4fde",
		redirectUri: "http://localhost:3000" // 
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                }
            }
        }
    }
};

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit: 
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 *
 * Aktuell hab ich das Problem das die, Custom, Scopes zwar im Consent angezeigt werden
 * der login (return token) aber letztlich NICHT die Custom, Scopes enthaelt
 * (die standard microsoft Scopes z.B. User.Read sind enthalten???)
 */
export const loginRequest = {
	scopes: [
			"User.Read",
			"api://fa6e0bbf-6970-489d-9939-92a1f5c6704a/ecticlient/Hurts.Read"
		]
};

/**
 * Add here the scopes to request when obtaining an access token for MS Graph API. For more information, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};
