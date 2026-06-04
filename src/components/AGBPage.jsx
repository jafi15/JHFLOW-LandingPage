import { C } from "../theme";
import { Footer } from "./Footer";

const sections = [
  {
    title: "1. Geltungsbereich",
    content:
      "Diese Allgemeinen Geschäftsbedingungen gelten für alle Leistungen von TigerFlow, Jafar Hamzeh, Rendsburger Straße 22, 25746 Heide, gegenüber Unternehmern im Sinne des § 14 BGB. TigerFlow erbringt Leistungen insbesondere in den Bereichen Webdesign, TigerBot, Voice Agents, CRM-Systeme, Lead-Systeme, Workflow Automation, Beratung, Betreuung und Wartung.\n\nEntgegenstehende oder abweichende Geschäftsbedingungen des Kunden gelten nur, wenn TigerFlow ihrer Geltung ausdrücklich schriftlich zustimmt.",
  },
  {
    title: "2. Vertragsschluss",
    content:
      "Angebote von TigerFlow sind, sofern nicht ausdrücklich anders bezeichnet, freibleibend. Ein Vertrag kommt zustande, wenn der Kunde ein Angebot von TigerFlow annimmt oder TigerFlow mit der Leistungserbringung beginnt.\n\nDer konkrete Leistungsumfang, Preise, Fristen, Zahlungsmodalitäten und besondere Vereinbarungen ergeben sich aus dem jeweiligen Angebot, der Auftragsbestätigung oder einer gesonderten Vereinbarung.",
  },
  {
    title: "3. Leistungen von TigerFlow",
    content:
      "TigerFlow entwickelt, gestaltet und implementiert digitale Systeme und Automationen nach dem vereinbarten Leistungsumfang. Dazu können insbesondere Websites, Landingpages, Automations-Workflows, CRM-Strukturen, Chatbot- und Voice-Agent-Konzepte, Lead-Prozesse sowie laufende Betreuung gehören.\n\nEin bestimmter wirtschaftlicher Erfolg, bestimmte Umsätze, Leadzahlen oder Conversion-Raten werden nur geschuldet, wenn dies ausdrücklich schriftlich vereinbart wurde.",
  },
  {
    title: "4. Mitwirkungspflichten des Kunden",
    content:
      "Der Kunde stellt TigerFlow alle für die Leistungserbringung erforderlichen Informationen, Inhalte, Zugänge, Freigaben und Materialien rechtzeitig zur Verfügung. Dazu können insbesondere Texte, Bilder, Markenmaterialien, Zugangsdaten, Tool-Zugriffe, Feedback und fachliche Informationen gehören.\n\nVerzögerungen, die durch fehlende oder verspätete Mitwirkung des Kunden entstehen, verlängern vereinbarte Fristen angemessen. Der Kunde ist dafür verantwortlich, dass bereitgestellte Inhalte frei von Rechten Dritter sind oder entsprechend genutzt werden dürfen.",
  },
  {
    title: "5. Projektablauf, Freigaben und Abnahme",
    content:
      "TigerFlow kann Arbeitsergebnisse in Entwurfs-, Zwischen- oder Finalversionen zur Prüfung bereitstellen. Der Kunde prüft diese innerhalb angemessener Frist und teilt Änderungswünsche oder Freigaben mit.\n\nSoweit eine Abnahme vorgesehen ist, gilt ein Werk als abgenommen, wenn der Kunde die Abnahme erklärt, das Werk produktiv nutzt oder nicht innerhalb einer angemessenen Frist wesentliche Mängel mitteilt.",
  },
  {
    title: "6. Änderungen und Zusatzleistungen",
    content:
      "Änderungen, Erweiterungen oder Zusatzwünsche, die über den vereinbarten Leistungsumfang hinausgehen, gelten als Change Requests und können gesondert angeboten und berechnet werden. TigerFlow wird den Kunden informieren, wenn ein Wunsch voraussichtlich zusätzlichen Aufwand verursacht.",
  },
  {
    title: "7. Vergütung und Zahlungsbedingungen",
    content:
      "Die Vergütung richtet sich nach dem jeweiligen Angebot. Bei Projektaufträgen ist in der Regel eine Anzahlung oder Vorkasse in Höhe von 30 bis 50 Prozent der vereinbarten Gesamtvergütung fällig, abhängig von Umfang und Art des Auftrags. Weitere Zahlungen können nach Meilensteinen, Fertigstellung oder Abnahme vereinbart werden.\n\nLaufende Leistungen wie Betreuung, Wartung oder Retainer werden, sofern nicht anders vereinbart, monatlich im Voraus berechnet. Rechnungen sind ohne Abzug innerhalb der angegebenen Zahlungsfrist zu zahlen.\n\nBei Zahlungsverzug ist TigerFlow berechtigt, Leistungen bis zum Ausgleich offener Forderungen zu pausieren. Nutzungsrechte gehen erst nach vollständiger Zahlung der jeweils geschuldeten Vergütung über.",
  },
  {
    title: "8. Betreuung, Wartung und Retainer",
    content:
      "Betreuung, Wartung und Retainer umfassen nur die ausdrücklich vereinbarten Leistungen. Nicht umfasst sind unbegrenzte Neuentwicklungen, umfassende Designänderungen, neue Funktionsbereiche oder Leistungen außerhalb des vereinbarten Umfangs.\n\nSofern nicht anders vereinbart, laufen Retainer monatlich und können mit einer Frist von 14 Tagen zum Monatsende gekündigt werden. Nicht genutzte Stunden oder Leistungskontingente verfallen zum Monatsende, sofern nicht ausdrücklich etwas anderes vereinbart wurde.\n\nKonkrete Reaktionszeiten oder Service-Level gelten nur, wenn sie schriftlich vereinbart wurden.",
  },
  {
    title: "9. Nutzungsrechte an Websites, Designs und Automationen",
    content:
      "Nach vollständiger Zahlung erhält der Kunde die für sein Unternehmen erforderlichen Nutzungsrechte an der final freigegebenen Website und den final freigegebenen Designs. Der Kunde darf diese Arbeitsergebnisse für den vereinbarten geschäftlichen Zweck nutzen.\n\nNicht angenommene Entwürfe, interne Konzepte, Vorlagen, Komponenten, Arbeitsdateien, Frameworks, Prompt-Strukturen, Automations-Bausteine, allgemeine Logiken und Know-how verbleiben bei TigerFlow, sofern nicht ausdrücklich etwas anderes vereinbart wurde.\n\nBei Automationen und Systemen erhält der Kunde das Recht, die konkret für ihn eingerichteten Workflows und Systeme im vereinbarten Umfang zu nutzen. Allgemeine wiederverwendbare Systemlogiken und Methoden von TigerFlow bleiben Eigentum bzw. Know-how von TigerFlow.",
  },
  {
    title: "10. Hosting, Tools und Drittanbieter",
    content:
      "Soweit TigerFlow Websites, Automationen oder Systeme über Drittanbieter wie Vercel, Supabase, Calendly, CRM-Systeme, AI-Dienste oder andere Tools einrichtet oder betreut, gelten zusätzlich die Bedingungen der jeweiligen Anbieter. Der Kunde ist für die laufenden Kosten, Accounts und rechtliche Zulässigkeit der eingesetzten Drittanbieter verantwortlich, sofern nicht ausdrücklich etwas anderes vereinbart wurde.\n\nTigerFlow haftet nicht für Ausfälle, Änderungen, Preisänderungen oder Einschränkungen von Drittanbietern, soweit diese außerhalb des Einflussbereichs von TigerFlow liegen.",
  },
  {
    title: "11. Gewährleistung und Mängel",
    content:
      "TigerFlow erbringt Leistungen sorgfältig und nach dem vereinbarten Leistungsumfang. Der Kunde hat erkennbare Mängel unverzüglich mitzuteilen. TigerFlow ist berechtigt, berechtigte Mängel durch Nachbesserung zu beheben.\n\nMängelansprüche bestehen nicht für Änderungen, die der Kunde oder Dritte ohne Zustimmung von TigerFlow vorgenommen haben, oder für Fehler, die durch externe Systeme, Drittanbieter, fehlende Mitwirkung oder unsachgemäße Nutzung entstehen.",
  },
  {
    title: "12. Haftung",
    content:
      "TigerFlow haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie bei Verletzung von Leben, Körper oder Gesundheit. Bei einfacher Fahrlässigkeit haftet TigerFlow nur bei Verletzung wesentlicher Vertragspflichten, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags erst ermöglicht und auf deren Einhaltung der Kunde regelmäßig vertrauen darf.\n\nEine Haftung für entgangenen Gewinn, ausgebliebene Umsätze, mittelbare Schäden oder Folgeschäden besteht nur, soweit gesetzlich zwingend vorgeschrieben oder ausdrücklich vereinbart.",
  },
  {
    title: "13. Vertraulichkeit",
    content:
      "Die Parteien verpflichten sich, vertrauliche Informationen, Geschäftsgeheimnisse, Zugangsdaten und interne Unterlagen der jeweils anderen Partei vertraulich zu behandeln und nicht unbefugt an Dritte weiterzugeben.",
  },
  {
    title: "14. Datenschutz",
    content:
      "Informationen zur Verarbeitung personenbezogener Daten finden sich in der Datenschutzerklärung unter /datenschutz. Der Kunde ist für die rechtliche Prüfung und Freigabe eigener Inhalte, Datenschutzhinweise und eingesetzter Tools verantwortlich, soweit diese seinen Geschäftsbetrieb betreffen.",
  },
  {
    title: "15. Schlussbestimmungen",
    content:
      "Es gilt das Recht der Bundesrepublik Deutschland. Soweit gesetzlich zulässig, ist Gerichtsstand der Sitz von TigerFlow. Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.\n\nTigerFlow ist nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
  },
];

export function AGBPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 20% 0%, rgba(255,122,0,0.10), transparent 34%), #070707",
        color: C.textPri,
      }}
    >
      <main
        style={{
          maxWidth: "940px",
          margin: "0 auto",
          padding: "120px 48px 88px",
        }}
      >
        <a
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            color: C.textTer,
            textDecoration: "none",
            fontSize: 13,
            marginBottom: 34,
          }}
        >
          ← Zurück zur Website
        </a>

        <div
          style={{
            border: `.5px solid ${C.borderEm}`,
            borderRadius: 14,
            background: "linear-gradient(145deg, rgba(17,17,17,0.96), rgba(8,8,8,0.98))",
            boxShadow: "0 28px 90px rgba(0,0,0,0.56)",
            overflow: "hidden",
          }}
        >
          <div style={{ padding: "44px 42px 24px", borderBottom: `.5px solid ${C.border}` }}>
            <div
              style={{
                fontSize: 11,
                color: C.accent,
                textTransform: "uppercase",
                letterSpacing: ".13em",
                fontWeight: 700,
                marginBottom: 14,
              }}
            >
              Vertragsbedingungen
            </div>
            <h1
              style={{
                fontSize: "clamp(34px,5vw,54px)",
                lineHeight: 1,
                letterSpacing: "-.035em",
                fontWeight: 600,
                marginBottom: 18,
              }}
            >
              Allgemeine Geschäftsbedingungen
            </h1>
            <p style={{ color: C.textTer, fontSize: 15, lineHeight: 1.7, maxWidth: 680 }}>
              Allgemeine Geschäftsbedingungen für Agentur-, Website- und Automationsleistungen von TigerFlow.
              Stand: Juni 2026.
            </p>
          </div>

          <div style={{ padding: "10px 42px 42px" }}>
            {sections.map(({ title, content }) => (
              <section
                key={title}
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(210px, 0.85fr) 1.55fr",
                  gap: 28,
                  padding: "28px 0",
                  borderBottom: `.5px solid ${C.border}`,
                }}
                className="legal-row"
              >
                <h2 style={{ color: C.textSec, fontSize: 13, fontWeight: 600, letterSpacing: ".02em" }}>
                  {title}
                </h2>
                <p style={{ color: C.textPri, fontSize: 14, lineHeight: 1.75, whiteSpace: "pre-line" }}>
                  {content}
                </p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
