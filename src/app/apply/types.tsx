export type AuszugortType = {
  // location
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
};

export type EinzugortType = {
  einzugPLZ?: string;
  einzugStreet?: string;
  einzugStreetNumber?: string;
};
