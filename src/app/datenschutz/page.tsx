import Link from "next/link";
import styles from "./styles.module.css";

export const metadata = {
  title: "Datenschutzerklärung | PrivacyPolicy",
  description: "Informationen zum Datenschutz gemäß DSGVO.",
};

export default function page() {
  const company_name = process.env.COMPANY_NAME ?? "example";
  const company_email = process.env.COMPANY_EMAIL ?? "info@example.de";
  const company_phone = process.env.COMPANY_PHONE ?? "+49-123456";
  const company_address = process.env.COMPANY_ADDRESS ?? "adress";

  return (
    <div className={styles.page}>
      <h1>Datenschutzerklärung</h1>
      <p>
        Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Ihre personenbezogenen Daten werden vertraulich und
        entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung behandelt.
      </p>

      {/* company info */}
      <h2>1. Verantwortliche Stelle</h2>
      <h4>{company_name}</h4>
      <p>Adresse: {company_address}</p>
      <p>
        Telefonnummer: <Link href={`tel:${company_phone}`}> {company_phone}</Link>
      </p>
      <p>
        E-Mail: <Link href={`mailto:${company_email}`}> {company_email}</Link>
      </p>

      <h2>2. Erhebung und Verarbeitung personenbezogener Daten</h2>
      <p>
        Wir erheben und verarbeiten Ihre Daten ausschließlich zur Durchführung und Abwicklung Ihres Umzugsauftrags. Dazu
        gehören z. B. Adresse, Telefonnummer oder E-Mail.
      </p>

      <h2>3. Weitergabe an Dritte</h2>
      <p>
        Eine Weitergabe Ihrer Daten an Dritte erfolgt nur, wenn dies zur Erfüllung des Vertrags erforderlich ist (z. B.
        Partnerunternehmen oder Subunternehmer) oder Sie ausdrücklich eingewilligt haben.
      </p>

      <h2>4. Speicherung der Daten</h2>
      <p>
        Ihre Daten werden nur so lange gespeichert, wie dies zur Vertragserfüllung notwendig ist oder gesetzliche
        Aufbewahrungsfristen es verlangen.
      </p>

      <h2>5. Ihre Rechte</h2>
      <p>
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer gespeicherten
        Daten. Außerdem können Sie der Verarbeitung jederzeit widersprechen.
      </p>
      {/* contact email */}
      <p>
        Bitte wenden Sie sich dazu an:
        <Link href={`mailto:${company_email}`}> {company_email}</Link>
      </p>

      <h2>6. Datensicherheit</h2>
      <p>
        Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten gegen Manipulation, Verlust,
        Zerstörung oder unbefugten Zugriff zu schützen.
      </p>
    </div>
  );
}
