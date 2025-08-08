# PrintShop Web (Next.js)

Application Next.js (App Router, TypeScript) pour une boutique d'imprimerie avec mesures de sécurité par défaut.

## Sécurité incluse
- En-têtes: CSP, HSTS, X-Frame-Options (DENY), X-Content-Type-Options, Referrer-Policy, Permissions-Policy.
- Rate limiting: middleware Edge (démo) 60 req/min/IP pour `/api/*` et `/login`.
- React Strict Mode, `poweredByHeader` désactivé.

Note: Pour la production, utilisez un stockage externe pour le rate limiting (ex: Upstash Redis) et durcissez la CSP selon vos besoins (nonces/hashes, domaines de paiement, CDN, etc.).

## Démarrage
1. Node 18.18+ requis
2. Installation:
   ```bash
   npm install
   ```
3. Développement:
   ```bash
   npm run dev
   ```
4. Build + start:
   ```bash
   npm run build && npm start
   ```

## Prochaines étapes
- Authentification (par ex. NextAuth, sessions sécurisées, 2FA).
- Base de données (PostgreSQL via Prisma), modèles: produits, commandes, clients, paiements.
- Paiements (Stripe) avec Webhooks signés.
- Validation d'entrée (Zod), sanitization, schemas stricts pour toutes les routes.
- Journalisation et observabilité (OpenTelemetry, logs structurés).
- Tests E2E (Playwright) et unitaires (Vitest/Jest).