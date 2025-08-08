export default function HomePage() {
  return (
    <main style={{ maxWidth: 960, margin: '0 auto', padding: '2rem' }}>
      <h1>Bienvenue sur PrintShop</h1>
      <p>Plateforme d&apos;imprimerie en ligne — base sécurisée prête pour l&apos;authentification, la validation et le paiement.</p>
      <ul>
        <li>En-têtes de sécurité activés (CSP, HSTS, etc.).</li>
        <li>Rate limiting sur routes sensibles.</li>
        <li>Structure TypeScript prête pour évoluer (produits, commandes, paiements).</li>
      </ul>
    </main>
  );
}