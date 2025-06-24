//
// First step form data type
export type AuszugortType = {
  plz?: string;
  street?: string;
  streetNumber?: string;
  ausZugAus: {
    homeType?: "wohnung" | "haus" | "zimmer"; // radio group
    livingSpace?: string; // input max 4
    rooms?: string; // select
    floor?: string; // select
    degreeOfFurnishing?: "low" | "mid" | "high"; // radio group
    storageAreas?: string; // input max 4
  };
  laufweg: {
    parkzone?: string; //select
  };
  zusatzleistungen: {
    packing: boolean;
    dismantlingFurniture: boolean;
    dismantlingKitchen: boolean;
    provisionBoxes: boolean;
    storageFurniture: boolean;
    disposalFurniture: boolean;
    finalCleaning: boolean;
    furnitureLift: boolean;
    establishParkingZone: boolean;
  };
};

//
// Second step form data type
export type EinzugortType = {
  einzugPLZ?: string;
  einzugStreet?: string;
  einzugStreetNumber?: string;
};
