import { FinalFormDataType } from "@/app/apply/types";

function EmailTemplate({ firstName, data }: { firstName: string; data: FinalFormDataType }) {
  const date = new Date();

  const options: any = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    time: {
      timeZone: "UTC",
      hour: "2-digit",
      minute: "2-digit",
    },
  };

  return (
    <div style={{ border: "1px solid #f2f2f2", padding: "24px" }}>
      <div style={{ marginInline: "auto", maxWidth: 500 }}>
        <div style={{ marginBottom: 24, padding: 12 }}>
          <p>Hallo {firstName},</p>
          {/* <div style={{ display: "flex", gap: 12 }}> */}
          {/* <p>am {date.toLocaleDateString("de-DE", options)}</p>
            <p>um {date.toLocaleTimeString("de-DE", options.time)} Uhr</p> */}
          {/* </div> */}
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            padding: "35px 16px",
            boxShadow: "0 0px 34px rgba(0, 0, 0, 0.05)",
            borderRadius: 12,
            marginBottom: 34,
          }}
        >
          <h1>Auszug</h1>
          <p>PLZ: {data.auszugort?.plz}</p>
          <p>Straße: {data.auszugort?.street}</p>
          <p>Nr: {data.auszugort?.streetNumber}</p>
          <br />
          <h3>Auszug aus</h3>
          <p>Aus: {data.auszugort?.ausZugAus.homeType}</p>
          <p>Zimmerzahl: {data.auszugort?.ausZugAus.rooms}</p>
          <p>Wohnfläche: {data.auszugort?.ausZugAus.livingSpace} m²</p>
          <p>Etage: {data.auszugort?.ausZugAus.floor}</p>
          <p>Möblierungsgrad: {data.auszugort?.ausZugAus.degreeOfFurnishing}</p>
          <p>Lagerflächen: {data.auszugort?.ausZugAus.storageAreas}</p>
          <br />
          <h3>Laufweg</h3>
          <p>Aufzug vorhanden: {data.auszugort?.laufweg.elevatorAvailable && "Ja"}</p>
          <p>Laufweg von Parkzone: {data.auszugort?.laufweg.parkzone}</p>
          <br />
          <h3>Zusatzleistungen</h3>
          <p>Einpackservice von Umzugskartons: {data.auszugort?.zusatzleistungen.packing && "Ja"}</p>
          <p>Abbau von Möbeln: {data.auszugort?.zusatzleistungen.dismantlingFurniture && "Ja"}</p>
          <p>Abbau von Küche: {data.auszugort?.zusatzleistungen.dismantlingKitchen && "Ja"}</p>
          <p>Bereitstellung von Umzugskartons: {data.auszugort?.zusatzleistungen.provisionBoxes && "Ja"}</p>
          <p>Einlagerung von Möbeln: {data.auszugort?.zusatzleistungen.storageFurniture && "Ja"}</p>
          <p>Entsorgung von Möbeln: {data.auszugort?.zusatzleistungen.disposalFurniture && "Ja"}</p>
          <p>Endreinigung: {data.auszugort?.zusatzleistungen.finalCleaning && "Ja"}</p>
          <p>Verladung mit Möbellift: {data.auszugort?.zusatzleistungen.furnitureLift && "Ja"}</p>
          <p>Einrichtung Halteverbotszone: {data.auszugort?.zusatzleistungen.establishParkingZone && "Ja"}</p>
        </div>

        <div style={box}>
          <h1>Einzug</h1>
          <p>PLZ: {data.einzugort?.plz}</p>
          <p>Straße: {data.einzugort?.street}</p>
          <p>Nr: {data.einzugort?.streetNumber}</p>
          <br />
          <h3>Einzug in</h3>
          <p>Einzug in: {data.einzugort?.ausZugIn.homeType}</p>
          <p>Etage: {data.einzugort?.ausZugIn.floor}</p>
          <br />
          <h3>Aufzug & Laufweg</h3>
          <p>Aufzug vorhanden: {data.einzugort?.laufweg.elevatorAvailable && "Ja"}</p>
          <p>Laufweg von Parkzone: {data.einzugort?.laufweg.parkzone}</p>
          <br />
          <h3>Zusatzleistungen</h3>
          <p>Auspackservice von Umzugskartons: {data.einzugort?.zusatzleistungen.packing && "Ja"}</p>
          <p>Aufbau von Möbeln: {data.einzugort?.zusatzleistungen.dismantlingFurniture && "Ja"}</p>
          <p>Aufbau von Küche: {data.einzugort?.zusatzleistungen.dismantlingKitchen && "Ja"}</p>
          <p>Anschluss von Waschmaschine: {data.einzugort?.zusatzleistungen.connectingWashingMachine && "Ja"}</p>
          <p>Bohr- und Dübelarbeiten: {data.einzugort?.zusatzleistungen.drillingDowelingWork && "Ja"}</p>
          <p>Verladung mit Möbellift: {data.einzugort?.zusatzleistungen.furnitureLift && "Ja"}</p>
          <p>Einrichtung Halteverbotszone: {data.einzugort?.zusatzleistungen.establishParkingZone && "Ja"}</p>
        </div>

        <div style={box}>
          <h1>Kundeninformationen</h1>
          <a
            style={{ display: "block", marginBottom: 12, padding: 12, borderBottom: "1px solid" }}
            href='mailto:test@email.com'
          >
            E-Mail: test@email.com
          </a>
          <a style={link} href='tel:+4900123456789'>
            Phone: 123456789
          </a>
        </div>
      </div>
    </div>
  );
}

export default EmailTemplate;

const link = { display: "block", marginBottom: 12, padding: 12 };
const box = {
  backgroundColor: "#fff",
  padding: "35px 16px",
  boxShadow: "0 0px 34px rgba(0, 0, 0, 0.05)",
  borderRadius: 12,
  marginBottom: 34,
};
