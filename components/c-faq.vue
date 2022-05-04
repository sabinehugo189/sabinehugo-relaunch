<template>
  <section class="container">
    <header>
      <h2>Das werden wir häufig gefragt</h2>
    </header>
    <div class="wrapper">
      <c-toggle-section
        title="Übernimmt die Krankenkasse die Invisalign Behandlung?"
      >
        <p>
          Eine kieferorthopädische Behandlung mit Invisalign wird nicht von den
          gesetzlichen Krankenkassen übernommen. Sie ist eine reine
          Privatleistung. Bei Privatversicherten, deren Versicherung eine
          kieferorthopädische Behandlung inkludiert, werden die Kosten in der
          Regel erstattet.
        </p>
      </c-toggle-section>
      <c-toggle-section
        title="Welche Vorteile hat eine Behandlung mit Invisalign Zahnschienen gegenüber einer festsitzenden Zahnspange?"
      >
        <p>
          Eine Behandlung mit Invisalign Zahnschienen hat viele Vorteile
          gegenüber einer festen Metall-Zahnspange. So ist das Einsetzen und die
          Anpassung einer klassischen Zahnspange sehr viel zeitaufwendiger als
          die maßgeschneiderte Anfertigung der Aligner. Außerdem besteht eine
          festsitzende Metall-Zahnspange aus Brackets und Drähten, die zu
          Irritationen der Schleimhaut und zu erheblichen Schmerzen führen
          können. Eine klassische Zahnspange wird zudem in der Regel als
          unästhetisch wahrgenommen – im Jugendalter wie im Erwachsenenalter.
        </p>
        <p>
          Aligner von Invisalign sind im Vergleich zur klassischen
          Metall-Zahnspange leicht einzusetzen, herauszunehmen und zu reinigen.
          Diese Möglichkeit wird von vielen Patientinnen und Patienten als sehr
          hygienisch erlebt. Außerdem sind Invisalign Aligner aus transparentem
          SmartTrack Material gefertigt und nahezu unsichtbar. Die Aligner
          werden zudem an die individuelle Zahnfleischform und die Zähne
          angepasst. Sie fallen dadurch besonders wenig auf.
        </p>
      </c-toggle-section>
      <c-toggle-section
        title="Wie lange dauert eine Zahnkorrektur mit Invisalign?"
      >
        <p>
          Eine Mehrheit der Patientinnen und Patienten erreichen innerhalb 1
          Jahres das gewünschte Resultat. Mitunter – bei leichteren Fällen –
          sind 3 Monate für die Behandlung ausreichend. Bei komplizierten
          Fehlstellungen lassen sich in der Regel innerhalb von 2 Jahren gute
          Ergebnisse erzielen. Die Fortschritte der Behandlung werden alle 4 bis
          8 Wochen bei individuellen Kontrollterminen in der Praxis überprüft.
        </p>
      </c-toggle-section>
      <c-toggle-section
        title="Kann jede Zahnärztin oder jeder Zahnärztin eine Invisalign Behandlung durchführen?"
      >
        <p>
          Damit eine Zahnärztin oder ein Zahnarzt eine Zahnkorrektur mit
          Invisalign anbieten kann, muss eine spezielle Fortbildung durchlaufen
          werden.
        </p>
      </c-toggle-section>
      <c-toggle-section
        title="Bekomme ich mit der Invisalign Behandlung garantiert geradere Zähne?"
      >
        <p>
          So wie jedes Lächeln einzigartig ist, ist auch jede Zahnstellung
          einzigartig. Aus diesem Grund beginnt die Invisalign Behandlung mit
          einem Beratungsgespräch, in dem wir gemeinsam besprechen, welche
          Ergebnisse Sie sich von Invisalign für Ihr Lachen wünschen und wie wir
          diese umsetzen können. In der Regel lassen sich sehr gute Resultate
          erzielen – auch bei komplizierten Zahnfehlstellungen.
        </p>
      </c-toggle-section>
    </div>
  </section>
</template>

<style scoped>
.container {
  background-color: var(--surface-2);
  border-radius: var(--radius-3);
  display: flex;
  flex-direction: column;
  gap: var(--size-10);
  padding: var(--size-20) var(--size-5);
}

@media (min-width: 1280px) {
  .container {
    gap: var(--size-16);
    padding: var(--size-32) var(--size-8);
  }
}

header {
  display: flex;
  flex-direction: column;
  margin-inline: auto;
  max-inline-size: var(--size-md);
  width: 100%;
}

h2 {
  font-size: var(--font-size-fluid-3);
}

.wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--size-10);
  margin-inline: auto;
  max-inline-size: var(--size-md);
  width: 100%;
}
</style>
