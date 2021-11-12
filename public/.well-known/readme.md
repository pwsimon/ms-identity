# [Configure an application's publisher domain](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-configure-publisher-domain#new-applications)
die `microsoft-identity-association.json` dient der ueberpruefung/Anzeige in der Consent Page ob die App vertrausenwuerdig ist.

Jeder 'Boesewicht' kann eine App schreiben, ins Netz stellen, und beim SignIn eine geklaute/beliebige `applicationId` angeben.
Der Nutzer der App sieht in der [Consent Page](https://identityserver4.readthedocs.io/en/latest/topics/consent.html#consent-page)
dann eine App/Herausgeber der nichts mit dem wahren/echten Herausgeber zu tun hat.

## Ablauf/Verfahren

## Umsetzung
die _default_ route einer Azure static Web App ist der `public` folder.
durch ablegen der _zusaetzlichen_ files unterhalb von `public` sind diese ebenfalls public.  
[Configure Azure Static Web Apps](https://docs.microsoft.com/en-us/azure/static-web-apps/configuration)

