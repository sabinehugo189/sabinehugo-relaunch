<template>
  <div class="content">
    <h2>Impressum</h2>

    <h3>Dr. med. Sabine Hugo</h3>

    <address class="h-card">
      <h4>Angaben gemäß § 5 TMG:</h4>
      <p class="p-note">Zahn &amp; Ästhetik</p>
      <p class="p-name">Dr. med. Sabine Hugo</p>
      <p class="h-adr">
        <span class="p-street-address">Berliner Platz 9</span>
        <span>
          <span class="p-postal-code">97080</span>
          <span class="p-locality">Würzburg</span>
        </span>
      </p>
    </address>

    <h4>Vertreten durch:</h4>

    <p>Dr. med. Sabine Hugo, Approbation verliehen in Deutschland</p>

    <address class="h-card">
      <h4>Kontakt:</h4>
      <p class="p-tel">+49 931 99 147 070</p>
      <p class="u-email">info@praxishugo.de</p>
    </address>

    <div class="h-card">
      <h4>Aufsichtsbehörde:</h4>
      <p class="p-name">Bayerische Landeszahnärztekammer</p>
      <p class="h-adr">
        <span class="p-street-address">Fallstraße 34</span>
        <span>
          <span class="p-postal-code">81369</span>
          <span class="p-locality">München</span>
        </span>
      </p>
      <p class="u-email">
        <a href="https://www.blzk.de/">Bayerische Landeszahnärztekammer</a>
      </p>
    </div>

    <h4>Berufsbezeichnung und berufsrechtliche Regelungen:</h4>

    <p>Berufsbezeichnung: Ärzte</p>

    <h4>
      Heilberufsgesetz und Berufsordnung der zuständigen Ärztekammer und
      Zahnärztekammer:
    </h4>

    <ul>
      <li>
        <a href="http://www.kvb.de/">Kassenärztliche Vereinigung Bayern</a>
      </li>
      <li>
        <a href="http://www.kzvb.de/">
          Kassenzahnärztliche Vereinigung Bayern
        </a>
      </li>
      <li>
        <a href="http://www.blaek.de/">Ärztekammer Bayern</a>
      </li>
      <li>
        <a href="http://www.blzk.de/">Zahnärztekammer Bayern</a>
      </li>
    </ul>

    <h3>Streitschlichtung</h3>

    <p>
      Die Europäische Kommission stellt eine Plattform zur
      Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr.
      Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit
      oder verpflichtet, an Streitbeilegungsverfahren vor einer
      Verbraucherschlichtungsstelle teilzunehmen.
    </p>

    <h3>Haftung für Inhalte</h3>

    <p>
      Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf
      diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis
      10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
      übermittelte oder gespeicherte fremde Informationen zu überwachen oder
      nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
      hinweisen.
    </p>

    <p>
      Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen
      nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine
      diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
      konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
      Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
    </p>

    <h3>Haftung für Links</h3>

    <p>
      Unser Angebot enthält Links zu externen Websites Dritter, auf deren
      Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
      Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
      Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
      verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung
      auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
      Zeitpunkt der Verlinkung nicht erkennbar.
    </p>

    <p>
      Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
      ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
      Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend
      entfernen.
    </p>

    <h3>Urheberrecht</h3>

    <p>
      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
      Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
      Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
      des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
      Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den
      privaten, nicht kommerziellen Gebrauch gestattet.
    </p>

    <p>
      Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
      werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
      Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
      Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
      entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
      wir derartige Inhalte umgehend entfernen.
    </p>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default',
});
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  gap: var(--size-10);
}

.content > h2 {
  font-size: var(--font-size-fluid-3);
}

.content > h3 {
  font-size: var(--font-size-fluid-2);
  margin-block-start: var(--size-10);
}

.content > h4 {
  font-size: var(--font-size-fluid-1);
}

.content > h4 + p,
.content > h4 + ul {
  margin-block-start: calc(var(--size-10) * -1);
}

.content > .h-card {
  display: flex;
  flex-direction: column;
  font-style: normal;
}

.content > .h-card > * {
  margin-block: 0;
}

.content > .h-card span {
  display: flex;
  gap: 0.5em;
}
</style>
