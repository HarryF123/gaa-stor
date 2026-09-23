export interface PitchAsset {
  File: string;
  Club: string;
  Colours: { primary: string; secondary: string };
  Crest: string;
  Pitch: string;
  Code: string;
  Latitude: string;
  Longitude: string;
  Province: string;
  Country: string;
  Division: string;
  County: string;
  Twitter: string;
  Wikipedia: string;
}

// Derived shape used once App.tsx parses Latitude/Longitude into numbers
export interface PitchWithCoords extends PitchAsset {
  lat: number;
  lng: number;
}

export const countyPitchAssets: PitchAsset[] = [
  {
    "File": "Ireland",
    "Club": "Allen Gaels GAA, Drumshanbo",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Shane McGettigan Park",
    "Code": "",
    "Latitude": "54.044811",
    "Longitude": "-8.031519",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Leitrim",
    "County": "Leitrim",
    "Twitter": "https://twitter.com/allengaels",
    "Wikipedia": "https://en.wikipedia.org/wiki/Allen_Gaels_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Annaduff GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Stanley Cox Park",
    "Code": "",
    "Latitude": "53.894162",
    "Longitude": "-7.951299",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Leitrim",
    "County": "Leitrim",
    "Twitter": "https://twitter.com/annaduffgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Annaduff_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Aughavas GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Achadh an Mheasa",
    "Code": "",
    "Latitude": "53.959397",
    "Longitude": "-7.723816",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Leitrim",
    "County": "Leitrim",
    "Twitter": "https://twitter.com/gaaaughavas",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Aughawillan GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "54.091455",
    "Longitude": "-7.758502",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Leitrim",
    "County": "Leitrim",
    "Twitter": "https://twitter.com/AughawillanGAA",
    "Wikipedia": "https://en.wikipedia.org/wiki/Aughawillan_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Aughnasheelin GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "54.064787",
    "Longitude": "-7.864618",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Leitrim",
    "County": "Leitrim",
    "Twitter": "https://twitter.com/aughnasheelingc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ballinaglera GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "54.159626",
    "Longitude": "-8.01436",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Leitrim",
    "County": "Leitrim",
    "Twitter": "https://twitter.com/glera_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballinaglera"
  },
  {
    "File": "Ireland",
    "Club": "Bornacoola GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Barr na Cuille",
    "Code": "",
    "Latitude": "53.861108",
    "Longitude": "-7.913206",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Leitrim",
    "County": "Leitrim",
    "Twitter": "https://twitter.com/BornacoolaGAA",
    "Wikipedia": "https://en.wikipedia.org/wiki/Bornacoola"
  },
  {
    "File": "Ireland",
    "Club": "Carrigallen GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.986498",
    "Longitude": "-7.656663",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Leitrim",
    "County": "Leitrim",
    "Twitter": "https://twitter.com/carrigallengfc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Carrigallen_%28barony%29"
  },
  {
    "File": "Ireland",
    "Club": "Cloone GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.934862",
    "Longitude": "-7.787234",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Leitrim",
    "County": "Leitrim",
    "Twitter": "https://twitter.com/cloonegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Cloone_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Drumkeerin GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "54.166444",
    "Longitude": "-8.135",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Leitrim",
    "County": "Leitrim",
    "Twitter": "https://twitter.com/drumkeeringaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Drumreilly GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "54.039262",
    "Longitude": "-7.743773",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Leitrim",
    "County": "Leitrim",
    "Twitter": "https://twitter.com/drumreillygaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Eslin GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.933785",
    "Longitude": "-7.919601",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Leitrim",
    "County": "Leitrim",
    "Twitter": "https://twitter.com/eslin_gaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Glencar Manorhamilton GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Bee Park",
    "Code": "",
    "Latitude": "54.306763",
    "Longitude": "-8.173863",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Leitrim",
    "County": "Leitrim",
    "Twitter": "https://twitter.com/glencarmanorgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Glenfarne Kiltyclogher GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "54.289418",
    "Longitude": "-7.985399",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Leitrim",
    "County": "Leitrim",
    "Twitter": "https://twitter.com/glenfarnekilty",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Gortletteragh  GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Pairc Gortleitreach",
    "Code": "",
    "Latitude": "53.88301",
    "Longitude": "-7.781332",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Leitrim",
    "County": "Leitrim",
    "Twitter": "https://twitter.com/gort_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Gortletteragh_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kiltubrid GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "54.034312",
    "Longitude": "-7.94792",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Leitrim",
    "County": "Leitrim",
    "Twitter": "https://twitter.com/kiltubridgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kiltubrid_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Leitrim Gaels",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Leitrim Gaels Community Field",
    "Code": "",
    "Latitude": "53.997296",
    "Longitude": "-8.0564969",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Leitrim",
    "County": "Leitrim",
    "Twitter": "https://twitter.com/leitrimgaels",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Melvin Gaels GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "54.444329",
    "Longitude": "-8.289629",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Leitrim",
    "County": "Leitrim",
    "Twitter": "https://twitter.com/melvingaels",
    "Wikipedia": "https://en.wikipedia.org/wiki/Melvin_Gaels_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Mohill GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Philly McGuinness Memorial Park",
    "Code": "",
    "Latitude": "53.918548",
    "Longitude": "-7.863659",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Leitrim",
    "County": "Leitrim",
    "Twitter": "https://twitter.com/mohillgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Mohill_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Sean O'Heslin's GAA, Ballinamore",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "54.060111",
    "Longitude": "-7.793332",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Leitrim",
    "County": "Leitrim",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballinamore_Se%C3%A1n_O%27Heslin%27s_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Fenagh St. Caillins GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "54.015256",
    "Longitude": "-7.902072",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Leitrim",
    "County": "Leitrim",
    "Twitter": "https://twitter.com/fenaghgaaclub",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Mary's GAA, Kiltoghert",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Pairc Naoimh Mhuire",
    "Code": "",
    "Latitude": "53.948085",
    "Longitude": "-8.07446224",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Leitrim",
    "County": "Leitrim",
    "Twitter": "https://twitter.com/maryskiltoghert",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Mary%27s_GAA_%28Leitrim%29"
  },
  {
    "File": "Ireland",
    "Club": "St. Osnat's GAA, Glencar",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "54.320993",
    "Longitude": "-8.202059",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Leitrim",
    "County": "Leitrim",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Patrick's GAA, Dromahaire",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Dromahair Park",
    "Code": "",
    "Latitude": "54.233023",
    "Longitude": "-8.310958",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Leitrim",
    "County": "Leitrim",
    "Twitter": "https://twitter.com/dromahairgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Athleague GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Athleague GAA Pitch",
    "Code": "",
    "Latitude": "53.574515",
    "Longitude": "-8.26749",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Roscommon",
    "County": "Roscommon",
    "Twitter": "https://twitter.com/athleaguegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Athleague_HC"
  },
  {
    "File": "Ireland",
    "Club": "Ballinameen GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.907983",
    "Longitude": "-8.302795",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Roscommon",
    "County": "Roscommon",
    "Twitter": "https://twitter.com/Ballinameen_GAA",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballinameen"
  },
  {
    "File": "Ireland",
    "Club": "Boyle GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Abbey Park",
    "Code": "",
    "Latitude": "53.974903",
    "Longitude": "-8.297399",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Roscommon",
    "County": "Roscommon",
    "Twitter": "https://twitter.com/boylegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Boyle_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Clann na nGael GAA, Johnstown",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.368663",
    "Longitude": "-8.021439",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Roscommon",
    "County": "Roscommon",
    "Twitter": "https://twitter.com/clanngaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Clann_na_nGael_GAA_%28Roscommon%29"
  },
  {
    "File": "Ireland",
    "Club": "Creggs GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Creggs GAA Pitch",
    "Code": "",
    "Latitude": "53.592756",
    "Longitude": "-8.366389",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Roscommon",
    "County": "Roscommon",
    "Twitter": "https://twitter.com/GaaCreggs",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Éire Óg GAA, Loughglinn",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "James Timothy Park",
    "Code": "",
    "Latitude": "53.847835",
    "Longitude": "-8.575697",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Roscommon",
    "County": "Roscommon",
    "Twitter": "https://twitter.com/eireogros",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Elphin GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Orchard Park",
    "Code": "",
    "Latitude": "53.847947",
    "Longitude": "-8.192168",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Roscommon",
    "County": "Roscommon",
    "Twitter": "https://twitter.com/elphingaaclub",
    "Wikipedia": "https://en.wikipedia.org/wiki/Elphin_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Four Roads GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Tisrara Community Sports Park",
    "Code": "Hurling",
    "Latitude": "53.51028",
    "Longitude": "-8.223839",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Roscommon",
    "County": "Roscommon",
    "Twitter": "https://twitter.com/fourroadshc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Four_Roads_Hurling_Club"
  },
  {
    "File": "Ireland",
    "Club": "Fuerty GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Mulhern Park",
    "Code": "",
    "Latitude": "53.589854",
    "Longitude": "-8.311494",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Roscommon",
    "County": "Roscommon",
    "Twitter": "https://twitter.com/fuertygaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Kilbride GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.700679",
    "Longitude": "-8.209884",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Roscommon",
    "County": "Roscommon",
    "Twitter": "https://twitter.com/gaakilbride",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Kilglass Gaels",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.826649",
    "Longitude": "-7.970465",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Roscommon",
    "County": "Roscommon",
    "Twitter": "https://twitter.com/kilglass_gaels",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Kilmore GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.8750948",
    "Longitude": "-8.052254",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Roscommon",
    "County": "Roscommon",
    "Twitter": "https://twitter.com/gaakilmore",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kilmore%2C_Victoria"
  },
  {
    "File": "Ireland",
    "Club": "Tulsk Lord Edwards GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.77448",
    "Longitude": "-8.23901",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Roscommon",
    "County": "Roscommon",
    "Twitter": "https://twitter.com/tulskgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Michael Glaveys GAA, Ballinlough",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Peadar Earley Memorial Park",
    "Code": "",
    "Latitude": "53.751708",
    "Longitude": "-8.633543",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Roscommon",
    "County": "Roscommon",
    "Twitter": "https://twitter.com/glaveys",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Oran GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Rockfield",
    "Code": "",
    "Latitude": "53.659391",
    "Longitude": "-8.276803",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Roscommon",
    "County": "Roscommon",
    "Twitter": "https://twitter.com/orangaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Padraig Pearses",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc an Phiarsaigh",
    "Code": "",
    "Latitude": "53.336777",
    "Longitude": "-8.152755",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Roscommon",
    "County": "Roscommon",
    "Twitter": "https://twitter.com/pearsesgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Padraig_Pearses_GAA_Roscommon"
  },
  {
    "File": "Ireland",
    "Club": "Roscommon Gaels",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Dr. Hyde Park",
    "Code": "",
    "Latitude": "53.625055",
    "Longitude": "-8.1811431",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Roscommon",
    "County": "Roscommon",
    "Twitter": "https://twitter.com/roscommongaels",
    "Wikipedia": "https://en.wikipedia.org/wiki/Roscommon_Gaels_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Roscommon Gaels",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Lisnamult",
    "Code": "",
    "Latitude": "53.621402",
    "Longitude": "-8.207772",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Roscommon",
    "County": "Roscommon",
    "Twitter": "https://twitter.com/roscommongaels",
    "Wikipedia": "https://en.wikipedia.org/wiki/Roscommon_Gaels_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Shannon Gaels GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Croghan GAA Pitch",
    "Code": "",
    "Latitude": "53.912818",
    "Longitude": "-8.218032",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Roscommon",
    "County": "Roscommon",
    "Twitter": "https://twitter.com/shannongaelsgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Shannon_Gaels_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Aidan's GAA, Ballyforan",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Naomh Aodain",
    "Code": "",
    "Latitude": "53.47044482",
    "Longitude": "-8.2738261",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Roscommon",
    "County": "Roscommon",
    "Twitter": "https://twitter.com/aidansgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Aidan%27s_C.B.S."
  },
  {
    "File": "Ireland",
    "Club": "St. Barry's GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Naomh Bearraí",
    "Code": "",
    "Latitude": "53.742527",
    "Longitude": "-7.9256454",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Roscommon",
    "County": "Roscommon",
    "Twitter": "https://twitter.com/st_barrys",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Brigid's GAA, Kiltoom",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Kiltoom",
    "Code": "",
    "Latitude": "53.485433",
    "Longitude": "-8.026574",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Roscommon",
    "County": "Roscommon",
    "Twitter": "https://twitter.com/stbrigidsros",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Brigid%27s_GAA_%28Roscommon%29"
  },
  {
    "File": "Ireland",
    "Club": "St. Croans GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.721699",
    "Longitude": "-8.381456",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Roscommon",
    "County": "Roscommon",
    "Twitter": "https://twitter.com/croans",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Dominics GAA, Knockcroghery",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.572243",
    "Longitude": "-8.076381",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Roscommon",
    "County": "Roscommon",
    "Twitter": "https://twitter.com/stdominicsclub",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Dominic%27s_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Faithleachs GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Ballyleague",
    "Code": "",
    "Latitude": "53.6761571",
    "Longitude": "-8.01000103",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Roscommon",
    "County": "Roscommon",
    "Twitter": "https://twitter.com/faithleachsgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Joseph's GAA, Kilteevan",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.634842",
    "Longitude": "-8.125172",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Roscommon",
    "County": "Roscommon",
    "Twitter": "https://twitter.com/stjosephs_ros",
    "Wikipedia": "https://en.wikipedia.org/wiki/St._Joseph%27s%2C_Newfoundland_and_Labrador"
  },
  {
    "File": "Ireland",
    "Club": "St. Kevin's GAA, Castlerea",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "O'Rourke Park",
    "Code": "",
    "Latitude": "53.770402",
    "Longitude": "-8.487095",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Roscommon",
    "County": "Roscommon",
    "Twitter": "https://twitter.com/stkevins",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Michael's GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Ardcarne Park",
    "Code": "",
    "Latitude": "53.992845",
    "Longitude": "-8.173175",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Roscommon",
    "County": "Roscommon",
    "Twitter": "https://twitter.com/michaels_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Michael%27s_Gaelic_Football_Club"
  },
  {
    "File": "Ireland",
    "Club": "St. Ronan's GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Kilronan Park",
    "Code": "",
    "Latitude": "54.072147",
    "Longitude": "-8.200167",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Roscommon",
    "County": "Roscommon",
    "Twitter": "https://twitter.com/stronansgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Saint_Ronan%27s_Well"
  },
  {
    "File": "Ireland",
    "Club": "Strokestown GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Strokestown GAA Grounds",
    "Code": "",
    "Latitude": "53.7784702",
    "Longitude": "-8.1124965",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Roscommon",
    "County": "Roscommon",
    "Twitter": "https://twitter.com/strokestowngaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Strokestown_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Strokestown GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Farnbeg",
    "Code": "",
    "Latitude": "53.767642",
    "Longitude": "-8.104625",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Roscommon",
    "County": "Roscommon",
    "Twitter": "https://twitter.com/strokestowngaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Strokestown_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Tremane Hurling Club",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Tremane GAA Grounds",
    "Code": "Hurling",
    "Latitude": "53.578334",
    "Longitude": "-8.204345",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Roscommon",
    "County": "Roscommon",
    "Twitter": "https://twitter.com/tremanegaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Western Gaels GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Nash Park, Frenchpark",
    "Code": "",
    "Latitude": "53.870701",
    "Longitude": "-8.408104",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Roscommon",
    "County": "Roscommon",
    "Twitter": "https://twitter.com/gaelspro",
    "Wikipedia": "https://en.wikipedia.org/wiki/Western_Gaels_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballisodare GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "54.2134",
    "Longitude": "-8.5214",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Sligo",
    "County": "Sligo",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballisodare_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballymote GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Brother Walfrid/Corran Park",
    "Code": "",
    "Latitude": "54.095545",
    "Longitude": "-8.519518",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Sligo",
    "County": "Sligo",
    "Twitter": "https://twitter.com/gaaballymote",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballymote_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Bunninadden GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Bunninadden Community Park",
    "Code": "",
    "Latitude": "54.039021",
    "Longitude": "-8.574164",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Sligo",
    "County": "Sligo",
    "Twitter": "https://twitter.com/bunninaddengaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Bunninadden_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Joseph's GAA, Calry",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Hazelwood",
    "Code": "",
    "Latitude": "54.269048",
    "Longitude": "-8.417207",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Sligo",
    "County": "Sligo",
    "Twitter": "https://twitter.com/calrystjosephs",
    "Wikipedia": "https://en.wikipedia.org/wiki/Calry%E2%80%93St_Joseph%27s_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Castleconnor GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Brendan's Park",
    "Code": "",
    "Latitude": "54.166087",
    "Longitude": "-9.077638",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Sligo",
    "County": "Sligo",
    "Twitter": "https://twitter.com/castleconnorgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Castleconnor_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Cloonacool GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Cloonacool GAA Community Field",
    "Code": "",
    "Latitude": "54.115352",
    "Longitude": "-8.757838",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Sligo",
    "County": "Sligo",
    "Twitter": "https://twitter.com/cloonacoolgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Cloonacool_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Coolaney/Mullinabreena GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Nace O'Dowd Park",
    "Code": "",
    "Latitude": "54.09545",
    "Longitude": "-8.66044",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Sligo",
    "County": "Sligo",
    "Twitter": "https://twitter.com/CoolMbreenaGAA",
    "Wikipedia": "https://en.wikipedia.org/wiki/Coolaney/Mullinabreena_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Coolera/Strandhill",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Ransboro Park",
    "Code": "",
    "Latitude": "54.24474",
    "Longitude": "-8.5423",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Sligo",
    "County": "Sligo",
    "Twitter": "https://twitter.com/cul_strand_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Coolera%E2%80%93Strandhill_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Curry GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "54.0054",
    "Longitude": "-8.7848",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Sligo",
    "County": "Sligo",
    "Twitter": "https://twitter.com/currygaaclub",
    "Wikipedia": "https://en.wikipedia.org/wiki/Curry_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Drumcliffe/Rosses Point",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Oxfield",
    "Code": "",
    "Latitude": "54.3399",
    "Longitude": "-8.51937",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Sligo",
    "County": "Sligo",
    "Twitter": "https://twitter.com/drumclifferpgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Drumcliffe%E2%80%93Rosses_Point_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Easkey GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "54.289903",
    "Longitude": "-8.978898",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Sligo",
    "County": "Sligo",
    "Twitter": "https://twitter.com/easkeygaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Easkey_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Eastern Harps",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Fr. Kevin Brehony Park",
    "Code": "",
    "Latitude": "54.043981",
    "Longitude": "-8.44655",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Sligo",
    "County": "Sligo",
    "Twitter": "https://twitter.com/EasternHarpsGAA",
    "Wikipedia": "https://en.wikipedia.org/wiki/Eastern_Harps_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Enniscrone/Kilglass",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "54.23885",
    "Longitude": "-9.055",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Sligo",
    "County": "Sligo",
    "Twitter": "https://twitter.com/enniskilgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Geevagh GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "54.1007",
    "Longitude": "-8.24149",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Sligo",
    "County": "Sligo",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Geevagh_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Naomh Eoin Hurling, Sligo",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Dick Kent Park",
    "Code": "Hurling",
    "Latitude": "54.26512",
    "Longitude": "-8.500635",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Sligo",
    "County": "Sligo",
    "Twitter": "https://twitter.com/naomheoinhurl",
    "Wikipedia": "https://en.wikipedia.org/wiki/Naomh_Eoin_GAA_%28Sligo%29"
  },
  {
    "File": "Ireland",
    "Club": "Owenmore Gaels",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "54.1778",
    "Longitude": "-8.4897",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Sligo",
    "County": "Sligo",
    "Twitter": "https://twitter.com/owenmoregaels",
    "Wikipedia": "https://en.wikipedia.org/wiki/Owenmore_Gaels_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Shamrock Gaels",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "54.15705",
    "Longitude": "-8.37211",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Sligo",
    "County": "Sligo",
    "Twitter": "https://twitter.com/shamrockgaels",
    "Wikipedia": "https://en.wikipedia.org/wiki/Shamrock_Gaels_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Farnan's",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Farnan's Park, Templeboy",
    "Code": "",
    "Latitude": "54.2431",
    "Longitude": "-8.81687",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Sligo",
    "County": "Sligo",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Farnan%27s_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. John's GAA, Carraroe",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Stenson Park",
    "Code": "",
    "Latitude": "54.23804",
    "Longitude": "-8.46383",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Sligo",
    "County": "Sligo",
    "Twitter": "https://twitter.com/stjohnsgaasligo",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_John%27s_GAA_%28Sligo%29"
  },
  {
    "File": "Ireland",
    "Club": "St. Mary's GAA, Sligo",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Dick Kent Park",
    "Code": "",
    "Latitude": "54.26503",
    "Longitude": "-8.5008",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Sligo",
    "County": "Sligo",
    "Twitter": "https://twitter.com/StMarysGAASligo",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Michael's GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Ballintogher",
    "Code": "",
    "Latitude": "54.1997",
    "Longitude": "-8.362441",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Sligo",
    "County": "Sligo",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Michael%27s_GAA_%28Sligo%29"
  },
  {
    "File": "Ireland",
    "Club": "St. Molaise Gaels",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Monsignor Hynes Park",
    "Code": "",
    "Latitude": "54.395611",
    "Longitude": "-8.518789",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Sligo",
    "County": "Sligo",
    "Twitter": "https://twitter.com/molaisegaels",
    "Wikipedia": "https://en.wikipedia.org/wiki/Naomh_Molaise_Gaels_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Patrick's GAA, Skreen/Dromard",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Seamie Donegan Memorial Park",
    "Code": "",
    "Latitude": "54.2406251",
    "Longitude": "-8.6795506",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Sligo",
    "County": "Sligo",
    "Twitter": "https://twitter.com/stpatrickssligo",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Patrick%27s_GAA_%28Sligo%29"
  },
  {
    "File": "Ireland",
    "Club": "Tourlestrane GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "54.038426",
    "Longitude": "-8.834148",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Sligo",
    "County": "Sligo",
    "Twitter": "https://twitter.com/tourlestranegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Tourlestrane_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Tubbercurry GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Kilcoyne Park",
    "Code": "",
    "Latitude": "54.05943",
    "Longitude": "-8.722967",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Sligo",
    "County": "Sligo",
    "Twitter": "https://twitter.com/tubbercurry_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Tubbercurry_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Connacht GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Connacht GAA Centre of Excellence",
    "Code": "",
    "Latitude": "53.7755259",
    "Longitude": "-8.8514479",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/ConnachtGAA",
    "Wikipedia": "https://en.wikipedia.org/wiki/Connacht_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Connacht GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Connacht GAA Air Dome",
    "Code": "",
    "Latitude": "53.7742604",
    "Longitude": "-8.8537795",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/ConnachtGAA",
    "Wikipedia": "https://en.wikipedia.org/wiki/Connacht_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Achill GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Davitt Park",
    "Code": "",
    "Latitude": "53.93313",
    "Longitude": "-9.9165",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/clgacla",
    "Wikipedia": "https://en.wikipedia.org/wiki/Achill_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Aghamore GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Aghamore Pitch",
    "Code": "",
    "Latitude": "53.8271",
    "Longitude": "-8.819872",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/AghamoreGAA",
    "Wikipedia": "https://en.wikipedia.org/wiki/Aghamore_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ardagh GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Ardagh",
    "Code": "",
    "Latitude": "54.12397",
    "Longitude": "-9.252555",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/ardagh_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ardagh_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ardnaree Sarsfields",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Sean Duffy Park",
    "Code": "",
    "Latitude": "54.111776",
    "Longitude": "-9.142244",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/ardnareesarsgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ardnaree_Sarsfields_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Balla GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "P W Nally Park",
    "Code": "",
    "Latitude": "53.80312",
    "Longitude": "-9.14206",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/ballagaaclub",
    "Wikipedia": "https://en.wikipedia.org/wiki/Balla_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballaghaderreen GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Ballaghaderreen GAA Park",
    "Code": "",
    "Latitude": "53.8989268",
    "Longitude": "-8.5958359",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/ballagh_gaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ballina Stephenites GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "James Stephens Park",
    "Code": "",
    "Latitude": "54.11122",
    "Longitude": "-9.16223",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/NaStiofanaigh",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballina_Stephenites_GAA"
  },
  {
    "File": "Ireland",
    "Club": "James Stephens Hurling Club",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "James Stephens Park",
    "Code": "Hurling",
    "Latitude": "54.11122",
    "Longitude": "-9.16223",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/NaStiofanaigh",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ballinrobe GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Flanagan Park",
    "Code": "",
    "Latitude": "53.615297",
    "Longitude": "-9.211607",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/ballinrobegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballinrobe_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballintubber GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Ray Prendergast Memorial Park",
    "Code": "",
    "Latitude": "53.757565",
    "Longitude": "-9.307675",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/ballintubberclg",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballintubber_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballycastle GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Tom Langan Park",
    "Code": "",
    "Latitude": "54.288243",
    "Longitude": "-9.35875",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/ballycgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ballycroy GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Ballycroy",
    "Code": "",
    "Latitude": "54.028213",
    "Longitude": "-9.826252",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/ballycroyg",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballycroy_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballyhaunis GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Ballyhaunis GAA Park",
    "Code": "",
    "Latitude": "53.763399",
    "Longitude": "-8.792078",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/ballyhaunisgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballyhaunis_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballyvary Hurling",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Ballyvary",
    "Code": "Hurling",
    "Latitude": "53.88897",
    "Longitude": "-9.16028",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/ballyvaryhc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Belmullet GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Belmullet GAA Pitch, Tallagh",
    "Code": "",
    "Latitude": "54.24866",
    "Longitude": "-9.9979",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/BelmulletGaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Bonniconlon GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Bonniconlon",
    "Code": "",
    "Latitude": "54.108084",
    "Longitude": "-9.02418",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/bonniconlon_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Bonniconlon_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Breaffy GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Breaffy",
    "Code": "",
    "Latitude": "53.845629",
    "Longitude": "-9.233789",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/BreaffyGAA",
    "Wikipedia": "https://en.wikipedia.org/wiki/Breaffy_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Burrishoole GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "McGovern Park, Newport",
    "Code": "",
    "Latitude": "53.888213",
    "Longitude": "-9.540556",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/burrishoolegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Burrishoole_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Caiseal Gaels",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.95612",
    "Longitude": "-8.7034",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/caisealgaels",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Castlebar Mitchels Hurling",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Josie Munnelly",
    "Code": "Hurling",
    "Latitude": "53.8536",
    "Longitude": "-9.28307",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/mitchelsgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Castlebar_Mitchels_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Castlebar Mitchels GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Josie Munnelly",
    "Code": "Football",
    "Latitude": "53.852954",
    "Longitude": "-9.283177",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/MitchelsGaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Castlebar_Mitchels_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Charlestown Sarsfields",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Fr. O'Hara Park",
    "Code": "",
    "Latitude": "53.95883",
    "Longitude": "-8.8054",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/charlestowngaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Charlestown_Sarsfields_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Clare Island GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Fawnglass, Clare Island",
    "Code": "",
    "Latitude": "53.80233",
    "Longitude": "-9.954977",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/clare_island",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Claremorris GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.722382",
    "Longitude": "-8.99457",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/claremorrisgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Claremorris_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Crossmolina Deel Rovers",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Tiernan's Park",
    "Code": "",
    "Latitude": "54.1048294",
    "Longitude": "-9.307209335",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/deelroversgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Crossmolina_Deel_Rovers"
  },
  {
    "File": "Ireland",
    "Club": "Davitts GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Ballindine",
    "Code": "",
    "Latitude": "53.6724",
    "Longitude": "-8.95848",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/Davitts_GAA",
    "Wikipedia": "https://en.wikipedia.org/wiki/Davitts_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Eastern Gaels GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Brickens GAA Pitch",
    "Code": "",
    "Latitude": "53.723978",
    "Longitude": "-8.876388",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Eastern_Gaels_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Garrymore GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Garrymore GAA Pitch",
    "Code": "",
    "Latitude": "53.646872",
    "Longitude": "-9.021174",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/garrymoregaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Garrymore_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Hollymount/Carramore GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Hollymount",
    "Code": "",
    "Latitude": "53.6611",
    "Longitude": "-9.11696",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/holly_carragaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Islandeady GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Islandeady",
    "Code": "",
    "Latitude": "53.826408",
    "Longitude": "-9.404379",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/islandeadygaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Islandeady_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Rossport",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Rossport Pitch (Defunct)",
    "Code": "",
    "Latitude": "54.2846234",
    "Longitude": "-9.7927068",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/cillchomaingaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Cill Chomáin GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc an Phobail, Cill Chomain",
    "Code": "",
    "Latitude": "54.235497",
    "Longitude": "-9.653674",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/cillchomaingaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Kilfian GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Kilfian",
    "Code": "",
    "Latitude": "54.200163",
    "Longitude": "-9.354514",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/KilfianGAAMayo",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kilfian_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Killala GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Gerry Maheady Memorial Park",
    "Code": "",
    "Latitude": "54.202404",
    "Longitude": "-9.240458",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/killalagaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Kilmaine GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Kilmaine",
    "Code": "",
    "Latitude": "53.585553",
    "Longitude": "-9.128521",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/kilmainegaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Kilmeena GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Brendan's Sports Park",
    "Code": "",
    "Latitude": "53.841134",
    "Longitude": "-9.581397",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/kilmeenagaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kilmeena_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kilmovee Shamrocks GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Canon Henry Park",
    "Code": "",
    "Latitude": "53.88605",
    "Longitude": "-8.67848",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/kilmoveegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kilmovee_Shamrocks_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kiltane GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Bangor Erris",
    "Code": "",
    "Latitude": "54.140684",
    "Longitude": "-9.739372",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/kiltanegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kiltane_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kiltimagh GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Gilmartin Park",
    "Code": "",
    "Latitude": "53.849238",
    "Longitude": "-9.010395",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/KiltimaghGAA",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kiltimagh_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Knockmore GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Knockmore",
    "Code": "",
    "Latitude": "54.025504",
    "Longitude": "-9.176225",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/gaa_knockmore",
    "Wikipedia": "https://en.wikipedia.org/wiki/Knockmore_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Lacken Sarsfields GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Lacken",
    "Code": "",
    "Latitude": "54.2619287",
    "Longitude": "-9.2241944",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Lahardane MacHales GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Padraig Garrett Memorial Park, Bofeenaun",
    "Code": "",
    "Latitude": "53.984884",
    "Longitude": "-9.325321",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/lahardanegaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Louisburgh GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Louisburgh",
    "Code": "",
    "Latitude": "53.759035",
    "Longitude": "-9.808046",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/LouisburghGAA",
    "Wikipedia": "https://en.wikipedia.org/wiki/Louisburgh_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Mayo Gaels",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Abbey Park",
    "Code": "",
    "Latitude": "53.763378",
    "Longitude": "-9.118223",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/mayogaelsgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Mayo_Gaels_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Bohola-Moy Davitts, Foxford",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Srath Garbh",
    "Code": "",
    "Latitude": "53.991897",
    "Longitude": "-9.115201",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/moydavitts",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Moygownagh GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Fr Gilroy Memorial Park",
    "Code": "",
    "Latitude": "54.165849",
    "Longitude": "-9.346337",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/moygownaghgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Moygownagh_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Parke-Keelogues-Crimlin GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Parke",
    "Code": "",
    "Latitude": "53.91064",
    "Longitude": "-9.196795",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/parkekcgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Parke-Keelogues-Crimlin_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Shrule-Glencorrib GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Shrule",
    "Code": "",
    "Latitude": "53.529624",
    "Longitude": "-9.080245",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/ShruleGlencorib",
    "Wikipedia": "https://en.wikipedia.org/wiki/Shrule-Glencorrib_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Shrule-Glencorrib GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Glencorrib/Kilroe Community Sports Field",
    "Code": "",
    "Latitude": "53.5116939",
    "Longitude": "-9.170409",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/ShruleGlencorib",
    "Wikipedia": "https://en.wikipedia.org/wiki/Shrule-Glencorrib_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Swinford GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Robert McCallion Memorial Park",
    "Code": "",
    "Latitude": "53.934364",
    "Longitude": "-8.951856",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/swinfordgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Swinford_GAA"
  },
  {
    "File": "Ireland",
    "Club": "The Neale GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Naomh Feichin, Cunga",
    "Code": "",
    "Latitude": "53.537486",
    "Longitude": "-9.273471",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/thenealegaaclub",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Tooreen GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Adrian Freeman Memorial Park",
    "Code": "Hurling",
    "Latitude": "53.8278",
    "Longitude": "-8.76099",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/TooreenHurlers",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Tourmakeady GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Naomh Muire",
    "Code": "",
    "Latitude": "53.663085",
    "Longitude": "-9.352536",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Westport GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Naomh Padraig Cathair Na Mairt, Westport",
    "Code": "",
    "Latitude": "53.808005",
    "Longitude": "-9.521518",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/westportgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Westport_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Hollymount/Carramore GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Carramore",
    "Code": "",
    "Latitude": "53.6863",
    "Longitude": "-9.0846",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "https://twitter.com/holly_carragaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Abbeyknockmoy Hurling",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "Hurling",
    "Latitude": "53.43808",
    "Longitude": "-8.727463",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/Abbey_Hurling",
    "Wikipedia": "https://en.wikipedia.org/wiki/Abbeyknockmoy_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ahascragh/Fohenagh",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Ahascragh",
    "Code": "",
    "Latitude": "53.399613",
    "Longitude": "-8.324904",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/AhasFohGAA",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ardrahan",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.15673",
    "Longitude": "-8.80274",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ardrahan_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballinasloe GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.325106",
    "Longitude": "-8.233546",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/BallinasloeGAA",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballinasloe_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballinderreen GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.18329",
    "Longitude": "-8.90716",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/ballinderreen",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballinderreen_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballygar Hurling",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "Hurling",
    "Latitude": "53.52933",
    "Longitude": "-8.3211",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/ballygarhurling",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Barna GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Barna Pitch (New)",
    "Code": "",
    "Latitude": "53.2676741",
    "Longitude": "-9.1635571",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/BarnaGAA",
    "Wikipedia": "https://en.wikipedia.org/wiki/CLG_Bhearna"
  },
  {
    "File": "Ireland",
    "Club": "Barna GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Barna Pitch",
    "Code": "",
    "Latitude": "53.26802",
    "Longitude": "-9.163018",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/BarnaGAA",
    "Wikipedia": "https://en.wikipedia.org/wiki/CLG_Bhearna"
  },
  {
    "File": "Ireland",
    "Club": "Beagh GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.016497",
    "Longitude": "-8.822829",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/beaghhc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Beagh_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Club Iománaíochta Bearna / Na Forbacha",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.25906",
    "Longitude": "-9.208531",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/barnafurboutd",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Caherlistrane GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.491202",
    "Longitude": "-9.01954",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/_caherlistrane_",
    "Wikipedia": "https://en.wikipedia.org/wiki/Caherlistrane_GAC"
  },
  {
    "File": "Ireland",
    "Club": "Caltra GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.4356",
    "Longitude": "-8.430202",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/caltra_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Caltra_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Cappataggle",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.27078",
    "Longitude": "-8.4088",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/cappataggle",
    "Wikipedia": "https://en.wikipedia.org/wiki/Cappataggle_GAA"
  },
  {
    "File": "Ireland",
    "Club": "CLG Cárna-Caiseal",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.323377",
    "Longitude": "-9.83014",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/clgcarnacaiseal",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Carnmore GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.30687608",
    "Longitude": "-8.906325244",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/carnmoregaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Carnmore_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Castlegar Hurling",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "Hurling",
    "Latitude": "53.276674",
    "Longitude": "-8.976504",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/castlegargaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Castlegar_GAA"
  },
  {
    "File": "Ireland",
    "Club": "CLG an Cheathrú Ruaidh",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc an Chathánaigh",
    "Code": "",
    "Latitude": "53.25718",
    "Longitude": "-9.60288",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/clgancrua",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Cinn Mhara GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Faiche Padraic",
    "Code": "",
    "Latitude": "53.13627",
    "Longitude": "-8.95299",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/kinvaragaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Claregalway GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.36672",
    "Longitude": "-8.91409",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/claregalwaygaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Claregalway_CLG"
  },
  {
    "File": "Ireland",
    "Club": "Clarinbridge GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.23038",
    "Longitude": "-8.876638",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/ClarinbridgeGaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Clarinbridge_GAA"
  },
  {
    "File": "Ireland",
    "Club": "CLG Oileáin Árann",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Peil Inis Oírr",
    "Code": "",
    "Latitude": "53.064163",
    "Longitude": "-9.52225",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/clgoileainarann",
    "Wikipedia": "https://en.wikipedia.org/wiki/CLG_Oile%C3%A1in_%C3%81rann"
  },
  {
    "File": "Ireland",
    "Club": "Naomh Feichin GAA, Clifden",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.49157",
    "Longitude": "-10.0162",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/naomhfeichin",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Clonberne/Kilkerrin",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Fr. Stephen's Park",
    "Code": "",
    "Latitude": "53.557538",
    "Longitude": "-8.64998",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/KilClonGAA",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Leenaun GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Leenaun Pitch (Defunct)",
    "Code": "",
    "Latitude": "53.595162",
    "Longitude": "-9.701598",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Naomh Pádraig GAA, Clonbur",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.54978",
    "Longitude": "-9.37765",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/clonburgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Corofin GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.43737",
    "Longitude": "-8.8605",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/CorofinGAA",
    "Wikipedia": "https://en.wikipedia.org/wiki/Corofin_GAA_%28Galway%29"
  },
  {
    "File": "Ireland",
    "Club": "Cortoon Shamrocks",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Brownsgrove GAA Pitch",
    "Code": "",
    "Latitude": "53.56547",
    "Longitude": "-8.799351",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/cortoonshamrock",
    "Wikipedia": "https://en.wikipedia.org/wiki/Cortoon_Shamrocks_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Craughwell GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.2299",
    "Longitude": "-8.73011",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/craughwellgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Craughwell_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Cumann Peile na bPiarsaigh",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.385932",
    "Longitude": "-9.610174",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/na_piarsaigh",
    "Wikipedia": "https://en.wikipedia.org/wiki/Cumann_Peile_Na_bPiarsaigh_%28Gaillimhe%29"
  },
  {
    "File": "Ireland",
    "Club": "Dunmore MacHales",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.615128",
    "Longitude": "-8.74291",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/machalesdunmore",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Father Griffins/Éire Óg",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "South Park, The Claddagh",
    "Code": "",
    "Latitude": "53.26517",
    "Longitude": "-9.05361",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/griffinseireog",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Father Griffins/Éire Óg",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Crestwood GAA Pitch",
    "Code": "",
    "Latitude": "53.294316",
    "Longitude": "-9.044697",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/griffinseireog",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Gaeil na Gaillimhe",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "South Park, The Claddagh",
    "Code": "",
    "Latitude": "53.2658322",
    "Longitude": "-9.0555133",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Glenamaddy/Glinsk GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.60575501",
    "Longitude": "-8.55273103",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/glinskgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Gort GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "Hurling",
    "Latitude": "53.04448",
    "Longitude": "-8.83554",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/GortGAA",
    "Wikipedia": "https://en.wikipedia.org/wiki/Gort_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Headford GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.47319",
    "Longitude": "-9.09659",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/headfordgaaclub",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Inis Bofin",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Fawnmore",
    "Code": "",
    "Latitude": "53.615728",
    "Longitude": "-10.218058",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Inisturk",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.7024556",
    "Longitude": "-10.1093009",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Inismaan",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.093431",
    "Longitude": "-9.570902",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Kilconieron GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.2280439",
    "Longitude": "-8.62925769",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kilconieron_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kilconly GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.5544",
    "Longitude": "-8.91196",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/kilconlygaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kilconly_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Killannin GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Malonely Park",
    "Code": "",
    "Latitude": "53.38691",
    "Longitude": "-9.226888",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/killanningaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Killererin GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.48176",
    "Longitude": "-8.72234",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Killererin_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Brendan's GAA, Annaghdown",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Cregg",
    "Code": "",
    "Latitude": "53.3886",
    "Longitude": "-8.9592",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Annaghdown_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Killimor GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.17195",
    "Longitude": "-8.29199",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Killimordaly Hurling Club",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "Hurling",
    "Latitude": "53.30247",
    "Longitude": "-8.623015",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/killimordalygaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Kilnadeema - Leitrim",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Cillina Díma",
    "Code": "",
    "Latitude": "53.16398",
    "Longitude": "-8.562984",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Kiltormer GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.2356",
    "Longitude": "-8.2752",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/kiltormer_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kiltormer_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Liam Mellows GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.27091",
    "Longitude": "-9.0223",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/liammellowsgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Liam_Mellows_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Loughrea GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.20246",
    "Longitude": "-8.551932",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/loughreahurling",
    "Wikipedia": "https://en.wikipedia.org/wiki/Loughrea_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Meelick - Eyrecourt",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.211885",
    "Longitude": "-8.09414",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/meelicke",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Menlough GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.423913",
    "Longitude": "-8.589624",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Menlough_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Menlo Emmets Hurling Club",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Crestwood GAA Pitch",
    "Code": "Hurling",
    "Latitude": "53.294316",
    "Longitude": "-9.044697",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "CLG Micháel Breathnach",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.2477",
    "Longitude": "-9.36834",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/clgmb",
    "Wikipedia": "https://en.wikipedia.org/wiki/M%C3%ADche%C3%A1l_Breathnach_CLG"
  },
  {
    "File": "Ireland",
    "Club": "Milltown GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.61458",
    "Longitude": "-8.904468",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/milltown_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Milltown_GAA_%28Galway%29"
  },
  {
    "File": "Ireland",
    "Club": "Monivea - Abbeyknockmoy GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "Football",
    "Latitude": "53.377623",
    "Longitude": "-8.700131",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Mountbellew - Moylough",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.473731",
    "Longitude": "-8.504219",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/mtbmoygaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "CLG Mhaigh Cuilinn",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Mhaigh Cuilinn",
    "Code": "",
    "Latitude": "53.359543",
    "Longitude": "-9.17501",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/maighcuilinn",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "CLG Mhaigh Cuilinn",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Mhaigh Cuilinn",
    "Code": "",
    "Latitude": "53.359543",
    "Longitude": "-9.17508",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/maighcuilinn",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Mullagh GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.223284",
    "Longitude": "-8.397366",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/mullaghgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Mullagh_GAA"
  },
  {
    "File": "Ireland",
    "Club": "CLG Naomh Anna, Leitir Móir",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Cumann Peile Naomh Anna",
    "Code": "",
    "Latitude": "53.278277",
    "Longitude": "-9.660098",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/naomhanna",
    "Wikipedia": "https://en.wikipedia.org/wiki/CLG_Naomh_Anna%2C_Leitir_M%C3%B3ir"
  },
  {
    "File": "Ireland",
    "Club": "CLG Oileáin Árann",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Pairc Einne Inis Mór",
    "Code": "",
    "Latitude": "53.105884",
    "Longitude": "-9.655201",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/clgoileainarann",
    "Wikipedia": "https://en.wikipedia.org/wiki/CLG_Oile%C3%A1in_%C3%81rann"
  },
  {
    "File": "Ireland",
    "Club": "Oranmore-Maree GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.272016",
    "Longitude": "-8.920221",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/gaaoranmaree",
    "Wikipedia": "https://en.wikipedia.org/wiki/Oranmore%E2%80%93Maree_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Padraig Pearses GAA, Ballymacward",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.389977",
    "Longitude": "-8.476561",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/pearsesgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/P%C3%A1draig_Pearse%27s_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Oughterard GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Corribdale",
    "Code": "",
    "Latitude": "53.4288533",
    "Longitude": "-9.316385",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/oughterardgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Oughterard_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Portumna GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.08892",
    "Longitude": "-8.21761",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/portumnagaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Portumna_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Renvyle GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Letterfrack",
    "Code": "",
    "Latitude": "53.5539",
    "Longitude": "-9.944572",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Renvyle GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Old Pitch (Defunct)",
    "Code": "",
    "Latitude": "53.588908",
    "Longitude": "-9.961146",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Rahoon Newcastle GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.290501",
    "Longitude": "-9.122896",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/RahoonNewcastle",
    "Wikipedia": "https://en.wikipedia.org/wiki/Rahoon%E2%80%93Newcastle_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Salthill Knocknacarra",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.26277",
    "Longitude": "-9.08678",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/skgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Salthill%E2%80%93Knocknacarra_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Sarsfields GAA, Castlebin",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.301757",
    "Longitude": "-8.490717",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/sarsfieldsgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Sarsfields_GAA_%28Galway%29"
  },
  {
    "File": "Ireland",
    "Club": "Skehana GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "Hurling",
    "Latitude": "53.423481",
    "Longitude": "-8.589829",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/skehanahc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "CLG An Spidéal",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Pháirc an Athar Mhic Suibhne",
    "Code": "",
    "Latitude": "53.24675",
    "Longitude": "-9.280149",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/clg_anspideal",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St Brendan's Football Club",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Deerpark Ballygar",
    "Code": "Football",
    "Latitude": "53.52933",
    "Longitude": "-8.3214",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/brendans_gaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. James' GAA, Mervue",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.2828397",
    "Longitude": "-9.0168553",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/gaajames",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Michael's GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Westside Playing Fields",
    "Code": "",
    "Latitude": "53.275761",
    "Longitude": "-9.07885752",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/stmichaelsgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Mary's GAA, Athenry",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Raheen Pitch",
    "Code": "",
    "Latitude": "53.305358",
    "Longitude": "-8.75831",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/cumannathanri",
    "Wikipedia": "https://en.wikipedia.org/wiki/Athenry_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Thomas GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Thomáis Naofa, Castleboy",
    "Code": "",
    "Latitude": "53.141415",
    "Longitude": "-8.704836",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/stthomasshc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Sylane Hurling",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "Hurling",
    "Latitude": "53.528871",
    "Longitude": "-8.936906",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/sylanehurling",
    "Wikipedia": "https://en.wikipedia.org/wiki/Sylane_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Tommy Larkins GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.050671",
    "Longitude": "-8.397093",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Tommy_Larkin%27s_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Tuam Stars",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "Football",
    "Latitude": "53.5074749",
    "Longitude": "-8.83814735",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/tuamstars1",
    "Wikipedia": "https://en.wikipedia.org/wiki/Tuam_Stars_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Turloughmore GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.3667876",
    "Longitude": "-8.9049821",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "https://twitter.com/turloughmorehc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Turloughmore_Hurling_Club"
  },
  {
    "File": "Ireland",
    "Club": "Tynagh-Abbey Duniry Hurling Club",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Duniry Pitch",
    "Code": "Hurling",
    "Latitude": "53.13123",
    "Longitude": "-8.408785",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Antrim GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Casement Park",
    "Code": "",
    "Latitude": "54.573306",
    "Longitude": "-5.983986",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Antrim_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Armagh GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Athletic Grounds",
    "Code": "",
    "Latitude": "54.343541",
    "Longitude": "-6.662385",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Armagh_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Carlow GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Dr. Cullen Park",
    "Code": "",
    "Latitude": "52.847063",
    "Longitude": "-6.916446",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Carlow",
    "County": "Carlow",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Carlow_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Cavan GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Breffni Park",
    "Code": "",
    "Latitude": "53.981623",
    "Longitude": "-7.360618",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Cavan",
    "County": "Cavan",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Cavan_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Clare GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Cusack Park (Ennis)",
    "Code": "",
    "Latitude": "52.846651",
    "Longitude": "-8.978495",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Clare_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Cork GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Uí Chaoimh",
    "Code": "",
    "Latitude": "51.899808",
    "Longitude": "-8.435337",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Cork_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Cork GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Uí Rinn",
    "Code": "",
    "Latitude": "51.891391",
    "Longitude": "-8.439308",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Cork_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Derry GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc na gCeilteach",
    "Code": "",
    "Latitude": "54.993153",
    "Longitude": "-7.335791",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Derry",
    "County": "Derry",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Derry_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Donegal GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "MacCumhail Park",
    "Code": "",
    "Latitude": "54.801525",
    "Longitude": "-7.782047",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Donegal_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Donegal GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "O'Donnell Park",
    "Code": "",
    "Latitude": "54.945512",
    "Longitude": "-7.754561",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Donegal_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Donegal GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Fr Tierney Park",
    "Code": "",
    "Latitude": "54.497969",
    "Longitude": "-8.193448",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Donegal_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Down GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Esler",
    "Code": "",
    "Latitude": "54.163068",
    "Longitude": "-6.337124",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Down_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Down GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "McKenna Park",
    "Code": "",
    "Latitude": "54.477827",
    "Longitude": "-5.510035",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Down_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Dublin GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Parnell Park",
    "Code": "",
    "Latitude": "53.37292",
    "Longitude": "-6.218811",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Dublin_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Fermanagh GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Brewster Park",
    "Code": "",
    "Latitude": "54.351139",
    "Longitude": "-7.634813",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Fermanagh",
    "County": "Fermanagh",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Fermanagh_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Dublin GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Croke Park",
    "Code": "",
    "Latitude": "53.360691",
    "Longitude": "-6.2522263",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Dublin_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Galway GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Pearse Stadium",
    "Code": "",
    "Latitude": "53.263168",
    "Longitude": "-9.0864127",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Galway_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Galway GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St Jarlath's Park",
    "Code": "",
    "Latitude": "53.509342",
    "Longitude": "-8.85589",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Galway",
    "County": "Galway",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Galway_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kerry GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Fitzgerald Stadium",
    "Code": "",
    "Latitude": "52.066269",
    "Longitude": "-9.511262",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kerry_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kerry GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Austin Stack Park",
    "Code": "",
    "Latitude": "52.270042",
    "Longitude": "-9.695771",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kerry_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kildare GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St Conleth's Park",
    "Code": "",
    "Latitude": "53.179575",
    "Longitude": "-6.79698",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kildare_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kilkenny GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Nowlan Park",
    "Code": "",
    "Latitude": "52.656324",
    "Longitude": "-7.241951",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kilkenny",
    "County": "Kilkenny",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kilkenny_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Laois GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "O'Moore Park",
    "Code": "",
    "Latitude": "53.026013",
    "Longitude": "-7.304486",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Laois_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Leitrim GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Seán Mac Diarmada",
    "Code": "",
    "Latitude": "53.948019",
    "Longitude": "-8.078249",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Leitrim",
    "County": "Leitrim",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Leitrim_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Limerick GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Gaelic Grounds",
    "Code": "",
    "Latitude": "52.670097",
    "Longitude": "-8.656504",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Limerick_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Longford GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Pearse Park",
    "Code": "",
    "Latitude": "53.739491",
    "Longitude": "-7.807187",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Longford",
    "County": "Longford",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Longford_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Louth GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Gaelic Grounds",
    "Code": "",
    "Latitude": "53.723581",
    "Longitude": "-6.359378",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Louth",
    "County": "Louth",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Louth_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Mayo GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "MacHale Park",
    "Code": "",
    "Latitude": "53.853518",
    "Longitude": "-9.288577",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Mayo",
    "County": "Mayo",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Mayo_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Meath GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Tailteann",
    "Code": "",
    "Latitude": "53.649804",
    "Longitude": "-6.696301",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Meath_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Monaghan GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St Tiernach's Park",
    "Code": "",
    "Latitude": "54.185656",
    "Longitude": "-7.235743",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Monaghan",
    "County": "Monaghan",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Monaghan_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Offaly GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "O'Connor Park",
    "Code": "",
    "Latitude": "53.280228",
    "Longitude": "-7.491666",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Offaly_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Offaly GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St Brendan's Park",
    "Code": "",
    "Latitude": "53.091292",
    "Longitude": "-7.91118",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Offaly_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Roscommon GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Dr. Hyde Park",
    "Code": "",
    "Latitude": "53.624881",
    "Longitude": "-8.183109",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Roscommon",
    "County": "Roscommon",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Roscommon_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Sligo GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Markievicz Park",
    "Code": "",
    "Latitude": "54.257207",
    "Longitude": "-8.468033",
    "Province": "Connacht",
    "Country": "Ireland",
    "Division": "Sligo",
    "County": "Sligo",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Sligo_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Tipperary GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Semple Stadium",
    "Code": "",
    "Latitude": "52.682228",
    "Longitude": "-7.827766",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Tipperary_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Tyrone GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Healy Park",
    "Code": "",
    "Latitude": "54.613948",
    "Longitude": "-7.299232",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Tyrone_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Waterford GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Walsh Park",
    "Code": "",
    "Latitude": "52.254794",
    "Longitude": "-7.130871",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Waterford_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Waterford GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Fraher Field",
    "Code": "",
    "Latitude": "52.096511",
    "Longitude": "-7.626674",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Waterford_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Westmeath GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Cusack Park (Mullingar)",
    "Code": "",
    "Latitude": "53.528193",
    "Longitude": "-7.340186",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Westmeath_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Wexford GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Wexford Park",
    "Code": "",
    "Latitude": "52.332575",
    "Longitude": "-6.478081",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Wexford_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Wicklow GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Aughrim County Ground",
    "Code": "",
    "Latitude": "52.852503",
    "Longitude": "-6.337295",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wicklow",
    "County": "Wicklow",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Wicklow_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. John's GAA, Ballinteer",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Broadford Pitches",
    "Code": "",
    "Latitude": "53.280936",
    "Longitude": "-6.262218",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/gaabsj",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballinteer_St_John%27s_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. John's GAA, Ballinteer",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Loreto Pitches",
    "Code": "",
    "Latitude": "53.289637",
    "Longitude": "-6.269897",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/gaabsj",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballinteer_St_John%27s_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Enda's GAA, Ballyboden",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Uí Mhurchú",
    "Code": "",
    "Latitude": "53.288801",
    "Longitude": "-6.317415",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/bodengaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballyboden_St_Enda%27s_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Enda's GAA, Ballyboden",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Sancta Maria Pitches",
    "Code": "",
    "Latitude": "53.28326",
    "Longitude": "-6.304175",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/bodengaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballyboden_St_Enda%27s_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Enda's GAA, Ballyboden",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Ballycullen",
    "Code": "",
    "Latitude": "53.2768631",
    "Longitude": "-6.3251447",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/bodengaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballyboden_St_Enda%27s_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Enda's GAA, Ballyboden",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Cherryfield",
    "Code": "",
    "Latitude": "53.29018",
    "Longitude": "-6.3174121",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/bodengaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballyboden_St_Enda%27s_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballyboughal GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.525267",
    "Longitude": "-6.269422",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/ballyboughalgfc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballyboughal_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballyfermot De La Salle GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.34348",
    "Longitude": "-6.342198",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballyfermot_Gaels_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballymun Kickhams",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.417334",
    "Longitude": "-6.262884",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/ballymungaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballymun_Kickhams_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Beann Eadair GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.379083",
    "Longitude": "-6.067487",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/beanneadairclg",
    "Wikipedia": "https://en.wikipedia.org/wiki/Beann_Eadair_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Castleknock GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Somerton Park",
    "Code": "",
    "Latitude": "53.364357",
    "Longitude": "-6.387301",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/castleknockgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Castleknock GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Tír na nÓg Pitches",
    "Code": "",
    "Latitude": "53.370971",
    "Longitude": "-6.388988",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/castleknockgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Castleknock GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Catherine's Park",
    "Code": "",
    "Latitude": "53.366298",
    "Longitude": "-6.469896",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/castleknockgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Clanna Gael GAA, Fontenoy",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.337659",
    "Longitude": "-6.216325",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/clannagaelfont",
    "Wikipedia": "https://en.wikipedia.org/wiki/Clanna_Gael_Fontenoy_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Clann Mhuire GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Naul",
    "Code": "",
    "Latitude": "53.586241",
    "Longitude": "-6.29257",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/clannmhuireclg",
    "Wikipedia": "https://en.wikipedia.org/wiki/Clann_Mhuire_CLG"
  },
  {
    "File": "Ireland",
    "Club": "Clontarf GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Pitch 34/35, St. Anne's Park",
    "Code": "",
    "Latitude": "53.369546",
    "Longitude": "-6.184341",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/clontarfgaaclub",
    "Wikipedia": "https://en.wikipedia.org/wiki/Clontarf_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Commercials Hurling Club",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "Hurling",
    "Latitude": "53.285001",
    "Longitude": "-6.459471",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/commercialshur1",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Craobh Chiaráin GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Clonslaugh Pitch",
    "Code": "",
    "Latitude": "53.408895",
    "Longitude": "-6.198839",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/craobhchiarain",
    "Wikipedia": "https://en.wikipedia.org/wiki/Craobh_Chiar%C3%A1in_CLG"
  },
  {
    "File": "Ireland",
    "Club": "Croí Ró Naofa",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.276753",
    "Longitude": "-6.384296",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/croironaofagaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Croi_Ro_Naofa_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Crumlin GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Pearse Park",
    "Code": "",
    "Latitude": "53.323219",
    "Longitude": "-6.315701",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/crumlingaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Crumlin_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Cuala GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Thomastown Park (Shared)",
    "Code": "",
    "Latitude": "53.271477",
    "Longitude": "-6.135358",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/cualaclg",
    "Wikipedia": "https://en.wikipedia.org/wiki/Cuala_G.A.A."
  },
  {
    "File": "Ireland",
    "Club": "Cuala GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Hyde Park",
    "Code": "",
    "Latitude": "53.280118",
    "Longitude": "-6.112511",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/cualaclg",
    "Wikipedia": "https://en.wikipedia.org/wiki/Cuala_G.A.A."
  },
  {
    "File": "Ireland",
    "Club": "Cuala GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Meadowvale",
    "Code": "",
    "Latitude": "53.273141",
    "Longitude": "-6.15803",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/cualaclg",
    "Wikipedia": "https://en.wikipedia.org/wiki/Cuala_G.A.A."
  },
  {
    "File": "Ireland",
    "Club": "Cuala GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Shankhill",
    "Code": "",
    "Latitude": "53.222929",
    "Longitude": "-6.121127",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/cualaclg",
    "Wikipedia": "https://en.wikipedia.org/wiki/Cuala_G.A.A."
  },
  {
    "File": "Ireland",
    "Club": "Erin Go Bragh",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Hazelbury Park",
    "Code": "",
    "Latitude": "53.401091",
    "Longitude": "-6.428092",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/eringobraghgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Erin_go_Bragh_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Erin Go Bragh",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Hunter's Run Park",
    "Code": "",
    "Latitude": "53.406268",
    "Longitude": "-6.421967",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/eringobraghgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Erin_go_Bragh_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Erins Isle GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.384272",
    "Longitude": "-6.297868",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/theislesclg",
    "Wikipedia": "https://en.wikipedia.org/wiki/Erin%27s_Isle_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Faughs GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Tymon Main Pitch",
    "Code": "",
    "Latitude": "53.295837",
    "Longitude": "-6.32946",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/faughsgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Faughs_GAA_Club"
  },
  {
    "File": "Ireland",
    "Club": "Fingallians GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Lawless Memorial Park",
    "Code": "",
    "Latitude": "53.467436",
    "Longitude": "-6.212652",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/fingallians",
    "Wikipedia": "https://en.wikipedia.org/wiki/Fingallians_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Fingal Ravens",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Rolestown",
    "Code": "",
    "Latitude": "53.503759",
    "Longitude": "-6.304899",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/fingalravensgfc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Fingal_Ravens_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Garda",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Westmanstown",
    "Code": "",
    "Latitude": "53.378686",
    "Longitude": "-6.445363",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/gardagaaclub",
    "Wikipedia": "https://en.wikipedia.org/wiki/Garda_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Garristown GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.566302",
    "Longitude": "-6.377074",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/garristowngfc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Garristown_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Geraldine P. Morans GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Cornelscourt",
    "Code": "",
    "Latitude": "53.267361",
    "Longitude": "-6.162816",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Good Counsel GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.335752",
    "Longitude": "-6.306859",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/goodcounselgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Good_Counsel_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Innisfails GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.411121",
    "Longitude": "-6.185112",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/innisfails",
    "Wikipedia": "https://en.wikipedia.org/wiki/Innisfails_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kevins GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Dolphin Park",
    "Code": "Hurling",
    "Latitude": "53.329953",
    "Longitude": "-6.2950785",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/kevinshurling",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Kilmacud Crokes",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Silverpark",
    "Code": "",
    "Latitude": "53.2732983",
    "Longitude": "-6.1933803",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/kcrokesgaaclub",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kilmacud_Crokes_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kilmacud Crokes",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Deer Park Pitches (Shared)",
    "Code": "",
    "Latitude": "53.2940018",
    "Longitude": "-6.218695",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/kcrokesgaaclub",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kilmacud_Crokes_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kilmacud Crokes",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Glenalbyn",
    "Code": "",
    "Latitude": "53.287368",
    "Longitude": "-6.199727",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/kcrokesgaaclub",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kilmacud_Crokes_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Liffey Gaels",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.343187",
    "Longitude": "-6.326573",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/liffeygaelsgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Liffey_Gaels_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Lucan Sarsfields",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Adamstown",
    "Code": "",
    "Latitude": "53.331138",
    "Longitude": "-6.459914",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/GAALucan",
    "Wikipedia": "https://en.wikipedia.org/wiki/Lucan_Sarsfields_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Man-O-War GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.552368",
    "Longitude": "-6.187894",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/mow_gfc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Man-O-War_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Na Dubh Ghall GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.40002",
    "Longitude": "-6.134826",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/nadubhghall",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Na Fianna GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.374769",
    "Longitude": "-6.264319",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/clgNaFianna",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Na Gaeil Óga CLG",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Catherine's Park",
    "Code": "",
    "Latitude": "53.366202",
    "Longitude": "-6.466293",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/nagaeiloga",
    "Wikipedia": "https://en.wikipedia.org/wiki/Na_Gaeil_%C3%93ga_CLG"
  },
  {
    "File": "Ireland",
    "Club": "Naomh Barróg GAA, Kilbarrack",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.389779",
    "Longitude": "-6.151306",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/nbarrog",
    "Wikipedia": "https://en.wikipedia.org/wiki/Naomh_Barr%C3%B3g_CLG"
  },
  {
    "File": "Ireland",
    "Club": "Naomh Fionnbarra GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Pope John Paul Park",
    "Code": "",
    "Latitude": "53.367902",
    "Longitude": "-6.305402",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/naomhfionnbarra",
    "Wikipedia": "https://en.wikipedia.org/wiki/Naomh_Fionnbarra_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Naomh Mearnóg GAA, Portmarnock",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.43781",
    "Longitude": "-6.14438",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/naomhmearnog?",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Naomh Olaf GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.281234",
    "Longitude": "-6.223357",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/NaomhOlaf",
    "Wikipedia": "https://en.wikipedia.org/wiki/Naomh_%C3%93laf_CLG"
  },
  {
    "File": "Ireland",
    "Club": "O'Dwyers, Balbriggan",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.617203",
    "Longitude": "-6.195893",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/odwyersgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/O%27Dwyers_GAA"
  },
  {
    "File": "Ireland",
    "Club": "O'Tooles GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.397917",
    "Longitude": "-6.184501",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/OTooles_GAC",
    "Wikipedia": "https://en.wikipedia.org/wiki/O%27Tooles_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Parnells GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.388375",
    "Longitude": "-6.205854",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Pavee GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Vincent's School",
    "Code": "",
    "Latitude": "53.367244",
    "Longitude": "-6.276467",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Portobello GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Phoenix Park (Camogie)",
    "Code": "",
    "Latitude": "53.3522484",
    "Longitude": "-6.313051",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/portobello_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Portobello_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Portobello GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.325131",
    "Longitude": "-6.271042",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/portobello_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Portobello_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Raheny GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Anne's Park Pitch 12a",
    "Code": "",
    "Latitude": "53.375695",
    "Longitude": "-6.169699",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/rahenygaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Raheny_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ranelagh Gaels",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Bushy Park",
    "Code": "",
    "Latitude": "53.302437",
    "Longitude": "-6.294749",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/ranelaghgaels",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ranelagh_Gaels_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Realt Dearg GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Drimnagh Castle",
    "Code": "",
    "Latitude": "53.325734",
    "Longitude": "-6.334636",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/realtdearg",
    "Wikipedia": "https://en.wikipedia.org/wiki/R%C3%A9alt_Dearg_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Robert Emmets",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Greentrees Park Pitch",
    "Code": "",
    "Latitude": "53.310221",
    "Longitude": "-6.322131",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/robertemmetsgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Robert_Emmets_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Rosmini Gaels",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Plunket College",
    "Code": "",
    "Latitude": "53.377684",
    "Longitude": "-6.249732",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/rosminigaels",
    "Wikipedia": "https://en.wikipedia.org/wiki/Rosmini_Gaels_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Round Towers Clondalkin",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Bushelloaf Park",
    "Code": "",
    "Latitude": "53.317561",
    "Longitude": "-6.383978",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/rtowerstracker",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Round Towers Lusk",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.527932",
    "Longitude": "-6.178255",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/roundtowerslusk",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Samildánach",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.358239",
    "Longitude": "-6.394732",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Scoil Uí Chonaill GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.361669",
    "Longitude": "-6.206339",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/scoilclg",
    "Wikipedia": "https://en.wikipedia.org/wiki/Scoil_U%C3%AD_Chonaill_CLG"
  },
  {
    "File": "Ireland",
    "Club": "Setanta GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.391217",
    "Longitude": "-6.266259",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/setantagaaclub",
    "Wikipedia": "https://en.wikipedia.org/wiki/Setanta_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Shankill GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Shangalagh GAA",
    "Code": "",
    "Latitude": "53.240529",
    "Longitude": "-6.113231",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/shankillgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Shankill_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Skerries Harps",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.577952",
    "Longitude": "-6.113389",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/skerriesharps",
    "Wikipedia": "https://en.wikipedia.org/wiki/Skerries_Harps_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Annes GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.270113",
    "Longitude": "-6.35494",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/stannesgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Anne%27s_GAA_%28Dublin%29"
  },
  {
    "File": "Ireland",
    "Club": "Starlights GFC",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.418026",
    "Longitude": "-6.258731",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Starlights_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Stars of Erin GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.219511",
    "Longitude": "-6.22758",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/starsoferingaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Stars_of_Erin_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Brendans GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Longmeadows",
    "Code": "",
    "Latitude": "53.345737",
    "Longitude": "-6.325107",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/stbrendansdub7",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Brendan%27s_GAA_%28Dublin%29"
  },
  {
    "File": "Ireland",
    "Club": "St. Brigids GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.37672",
    "Longitude": "-6.35321",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/StBrigidsGAA",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Brigid%27s_GAA_%28Dublin%29"
  },
  {
    "File": "Ireland",
    "Club": "St. Colmcilles, Balheary",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.467031",
    "Longitude": "-6.221458",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/stcolmcillesgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Colmcille%27s_%28Balheary%29"
  },
  {
    "File": "Ireland",
    "Club": "St. Finian's GAA, Swords",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.454694",
    "Longitude": "-6.24281",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/stfiniansswords",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Finian%27s_GAA_%28Newcastle%29"
  },
  {
    "File": "Ireland",
    "Club": "St. Finian's GAA, Newcastle",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.302587",
    "Longitude": "-6.486137",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/st_finians",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Finian%27s_GAA_%28Newcastle%29"
  },
  {
    "File": "Ireland",
    "Club": "St. Francis Gaels, Cabinteely",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Kilbogget Park",
    "Code": "",
    "Latitude": "53.260307",
    "Longitude": "-6.140179",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Cabinteely_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Foxrock Cabinteely",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Kilbogget Park",
    "Code": "",
    "Latitude": "53.2597522",
    "Longitude": "-6.1401294",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/officialfoxcab",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Cabinteely GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Kilbogget Park",
    "Code": "",
    "Latitude": "53.260309",
    "Longitude": "-6.14019",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://x.com/cabinteelygaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. James Gaels",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Iveagh Grounds",
    "Code": "",
    "Latitude": "53.329547",
    "Longitude": "-6.306541",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/StJamesGaels",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_James_Gaels_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Joseph's/O'Connell Boys",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Fairview Park",
    "Code": "",
    "Latitude": "53.361968",
    "Longitude": "-6.225072",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/stjosephsocb",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Judes",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Pitch 1, Tymon Park",
    "Code": "",
    "Latitude": "53.295589",
    "Longitude": "-6.330547",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/clgnaomhjude",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Jude%27s_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Kevins Killians",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Ballymount Park",
    "Code": "",
    "Latitude": "53.309623",
    "Longitude": "-6.374888",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/stkevinskillian",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Margarets GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Kilreesk",
    "Code": "",
    "Latitude": "53.441961",
    "Longitude": "-6.301647",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/stmargarets_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Margaret%27s_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Marks",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.288675",
    "Longitude": "-6.388894",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/StMarksGAA",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Mark%27s_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Marys GAA, Saggart",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Mhuire",
    "Code": "",
    "Latitude": "53.279409",
    "Longitude": "-6.441162",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/stmaryssaggart",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Mary%27s_GAA_%28Dublin%29"
  },
  {
    "File": "Ireland",
    "Club": "St. Maurs GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.532509",
    "Longitude": "-6.107058",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/stmaursgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Monicas",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Millwood Park",
    "Code": "",
    "Latitude": "53.388577",
    "Longitude": "-6.177772",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/stmonicasgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Monica%27s_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Oliver Plunkett Eoghan Ruadh",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Phoenix Park Pitch",
    "Code": "",
    "Latitude": "53.3508212",
    "Longitude": "-6.311623",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/plunketts_ie",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Oliver Plunkett Eoghan Ruadh",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.374674",
    "Longitude": "-6.325746",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/plunketts_ie",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Patricks GAA, Donabate",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.485272",
    "Longitude": "-6.131696",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/stpatsdonabate",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Patrick%27s_GAA_%28Palmerstown%29"
  },
  {
    "File": "Ireland",
    "Club": "St. Patricks GAA, Palmerstown",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.347297",
    "Longitude": "-6.363105",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/Palmerstown_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Patrick%27s_GAA_%28Palmerstown%29"
  },
  {
    "File": "Ireland",
    "Club": "St. Peregrines",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.394578",
    "Longitude": "-6.404828",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/peregrinesgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Peregrine%27s_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Sylvesters GAA, Malahide",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Broomfield Pitch",
    "Code": "",
    "Latitude": "53.4385942",
    "Longitude": "-6.149861",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/officialsylsgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Sylvester%27s_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Sylvesters GAA, Malahide",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Malahide Castle",
    "Code": "",
    "Latitude": "53.44135",
    "Longitude": "-6.16168",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/officialsylsgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Sylvester%27s_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Vincents",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.373556",
    "Longitude": "-6.22989",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/StVincentsGAA1",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Vincents_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Templeogue Synge Street",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Dolphin Park",
    "Code": "",
    "Latitude": "53.328594",
    "Longitude": "-6.292737",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/tempsyngest",
    "Wikipedia": "https://en.wikipedia.org/wiki/Templeogue_Synge_Street_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Thomas Davis GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.272239",
    "Longitude": "-6.362916",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/tomasdaibhis",
    "Wikipedia": "https://en.wikipedia.org/wiki/Thomas_Davis_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Trinity Gaels",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.414809",
    "Longitude": "-6.164778",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/trinitygaels1",
    "Wikipedia": "https://en.wikipedia.org/wiki/Trinity_Gaels_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Tyrellstown",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.421478",
    "Longitude": "-6.383366",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/tyrrelsgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "UCD",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.306893",
    "Longitude": "-6.227638",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/ucdgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/UCD_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Wanderers GAA, Ballyboden",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.260105",
    "Longitude": "-6.302656",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/wanderers_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballyboden_Wanderers_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Whitehall Colmcille",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.380772",
    "Longitude": "-6.242804",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/wcolmcille",
    "Wikipedia": "https://en.wikipedia.org/wiki/Whitehall_Colmcille_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Wild Geese GAA, Oldtown",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.526408",
    "Longitude": "-6.315398",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/wildgeesegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Wild_Geese_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Civil Service Football",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Memorial Park",
    "Code": "",
    "Latitude": "53.344911",
    "Longitude": "-6.311863",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Dublin",
    "County": "Dublin",
    "Twitter": "https://twitter.com/civilservicegaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Louth GAA Centre of Excellence",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Cuillenstown",
    "Code": "",
    "Latitude": "53.9321538",
    "Longitude": "-6.4622532",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Louth",
    "County": "Louth",
    "Twitter": "https://twitter.com/louthgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Annaghminnon Rovers GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Annaghminnon",
    "Code": "",
    "Latitude": "53.96569",
    "Longitude": "-6.601979",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Louth",
    "County": "Louth",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Annaghminnon_Rovers_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Clan Na Gael, Dundalk",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "54.011003",
    "Longitude": "-6.413075",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Louth",
    "County": "Louth",
    "Twitter": "https://twitter.com/onceaclan",
    "Wikipedia": "https://en.wikipedia.org/wiki/Clan_Na_Gael_GFC_%28Louth%29"
  },
  {
    "File": "Ireland",
    "Club": "Cooley Kickhams",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Fr. Mc Evoy Park",
    "Code": "",
    "Latitude": "54.010047",
    "Longitude": "-6.169273",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Louth",
    "County": "Louth",
    "Twitter": "https://twitter.com/cooleykickhams",
    "Wikipedia": "https://en.wikipedia.org/wiki/Cooley_Kickhams_G.F.C."
  },
  {
    "File": "Ireland",
    "Club": "Cuchulainn Gaels, Omeath",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "54.082846",
    "Longitude": "-6.256276",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Louth",
    "County": "Louth",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/C%C3%BAchulainn_Gaels_%28Louth%29"
  },
  {
    "File": "Ireland",
    "Club": "St. Bridget's GAA, Dowdallshill",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "54.024022",
    "Longitude": "-6.396879",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Louth",
    "County": "Louth",
    "Twitter": "https://twitter.com/dowdallshillgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Dowdallshill_GF_%26_AC"
  },
  {
    "File": "Ireland",
    "Club": "Dreadnots GAA, Clogherhead",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.778702",
    "Longitude": "-6.247022",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Louth",
    "County": "Louth",
    "Twitter": "https://twitter.com/dreadnotsgfc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Dreadnots_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Dundalks Gaels",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.999074",
    "Longitude": "-6.401148",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Louth",
    "County": "Louth",
    "Twitter": "https://twitter.com/dundalkgaels",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Dundalk Young Irelands",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Eire Óg",
    "Code": "",
    "Latitude": "53.99012",
    "Longitude": "-6.389918",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Louth",
    "County": "Louth",
    "Twitter": "https://twitter.com/dyoungirelands",
    "Wikipedia": "https://en.wikipedia.org/wiki/Dundalk_Young_Irelands_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Geraldines",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "McGeough Park",
    "Code": "",
    "Latitude": "53.96349",
    "Longitude": "-6.403522",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Louth",
    "County": "Louth",
    "Twitter": "https://twitter.com/GeraldinesGFC",
    "Wikipedia": "https://en.wikipedia.org/wiki/Geraldines_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Glen Emmets, Tullyallen",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Cusack",
    "Code": "",
    "Latitude": "53.737838",
    "Longitude": "-6.423145",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Louth",
    "County": "Louth",
    "Twitter": "https://twitter.com/glen_emmets",
    "Wikipedia": "https://en.wikipedia.org/wiki/Glen_Emmets_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Glyde Rangers",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Ui Taibh",
    "Code": "",
    "Latitude": "53.917454",
    "Longitude": "-6.545497",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Louth",
    "County": "Louth",
    "Twitter": "https://twitter.com/glyderangersgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Glyde_Rangers_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Hunterstown Rovers",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Baile Fiach",
    "Code": "",
    "Latitude": "53.825563",
    "Longitude": "-6.531357",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Louth",
    "County": "Louth",
    "Twitter": "https://twitter.com/hunterstowngfc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Hunterstown_Rovers_GAC"
  },
  {
    "File": "Ireland",
    "Club": "John Mitchels",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.879226",
    "Longitude": "-6.52075",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Louth",
    "County": "Louth",
    "Twitter": "https://twitter.com/johnmitchelsgfc",
    "Wikipedia": "https://en.wikipedia.org/wiki/John_Mitchels_GAA_%28Louth%29"
  },
  {
    "File": "Ireland",
    "Club": "Kilkerly Emmets",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "54.008474",
    "Longitude": "-6.466679",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Louth",
    "County": "Louth",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Mary's GAA, Ardee",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.842002",
    "Longitude": "-6.543212",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Louth",
    "County": "Louth",
    "Twitter": "https://twitter.com/ardeestmarysgfc",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Mary%27s_GAA_%28Louth%29"
  },
  {
    "File": "Ireland",
    "Club": "Naomh Mairtin GAA, Monasterboice",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.769148",
    "Longitude": "-6.39743",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Louth",
    "County": "Louth",
    "Twitter": "https://twitter.com/naomhmairtin",
    "Wikipedia": "https://en.wikipedia.org/wiki/Naomh_M%C3%A1irt%C3%ADn_CPG"
  },
  {
    "File": "Ireland",
    "Club": "St. Patrick's GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "54.001185",
    "Longitude": "-6.265549",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Louth",
    "County": "Louth",
    "Twitter": "https://twitter.com/patsgfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Sean O'Mahonys GAA, Dundalk",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "54.006938",
    "Longitude": "-6.375461",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Louth",
    "County": "Louth",
    "Twitter": "https://twitter.com/somlouth",
    "Wikipedia": "https://en.wikipedia.org/wiki/Se%C3%A1n_O%27Mahony%27s_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Newtown Blues GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.726574",
    "Longitude": "-6.32458",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Louth",
    "County": "Louth",
    "Twitter": "https://twitter.com/newtownblues",
    "Wikipedia": "https://en.wikipedia.org/wiki/Newtown_Blues_GAC"
  },
  {
    "File": "Ireland",
    "Club": "St. Brides GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.967123",
    "Longitude": "-6.477932",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Louth",
    "County": "Louth",
    "Twitter": "https://twitter.com/stbridesgfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Naomh Fionnbarra GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "John Markey Park",
    "Code": "",
    "Latitude": "53.872456",
    "Longitude": "-6.344213",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Louth",
    "County": "Louth",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Naomh_Fionnbarra_GAA_%28Louth%29"
  },
  {
    "File": "Ireland",
    "Club": "St. Joseph's GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.932261",
    "Longitude": "-6.409044",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Louth",
    "County": "Louth",
    "Twitter": "https://twitter.com/thejoesgfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Fechin's GAA, Termonfeckin",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Naomh Feichín",
    "Code": "",
    "Latitude": "53.736392",
    "Longitude": "-6.300701",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Louth",
    "County": "Louth",
    "Twitter": "https://twitter.com/stfechins",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "O'Raghallaighs, Drogheda",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.72368",
    "Longitude": "-6.359483",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Louth",
    "County": "Louth",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/O%27Raghallaighs_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Oliver Plunketts GAA, Drogheda",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.722269",
    "Longitude": "-6.381585",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Louth",
    "County": "Louth",
    "Twitter": "https://twitter.com/plunkettsclg",
    "Wikipedia": "https://en.wikipedia.org/wiki/Oliver_Plunketts_GFC"
  },
  {
    "File": "Ireland",
    "Club": "St. Mochtas GAA, Louth",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.949647",
    "Longitude": "-6.548843",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Louth",
    "County": "Louth",
    "Twitter": "https://twitter.com/mochtasgfc1934",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "O'Connell's GAA, Castlebenningham",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.894484",
    "Longitude": "-6.386733",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Louth",
    "County": "Louth",
    "Twitter": "https://twitter.com/gfcoconnells",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Na Piaraigh GAA, Dundalk",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.986357",
    "Longitude": "-6.373212",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Louth",
    "County": "Louth",
    "Twitter": "https://twitter.com/napsofficial",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Roche Emmets GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "54.039322",
    "Longitude": "-6.462998",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Louth",
    "County": "Louth",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Roche_Emmets_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Wolfe Tones GAA, Drogheda",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.704196",
    "Longitude": "-6.359216",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Louth",
    "County": "Louth",
    "Twitter": "https://twitter.com/wolfetonesgfc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Wolfe_Tones_GAA_%28Drogheda%29"
  },
  {
    "File": "Ireland",
    "Club": "St. Nicholas GAA, Drogheda",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Jimmy Pentony Park",
    "Code": "",
    "Latitude": "53.713293",
    "Longitude": "-6.372197",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Louth",
    "County": "Louth",
    "Twitter": "https://twitter.com/stnicholasgfc",
    "Wikipedia": "https://en.wikipedia.org/wiki/St._Nicholas_GFC"
  },
  {
    "File": "Ireland",
    "Club": "St. Kevin's GAA, Dunleer",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.821835",
    "Longitude": "-6.468736",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Louth",
    "County": "Louth",
    "Twitter": "https://twitter.com/stkevinslouth",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Lannleire GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.830233",
    "Longitude": "-6.405965",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Louth",
    "County": "Louth",
    "Twitter": "https://twitter.com/lannleiregaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Sean McDermotts GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Sean Mac Diarmada",
    "Code": "",
    "Latitude": "53.887601",
    "Longitude": "-6.594566",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Louth",
    "County": "Louth",
    "Twitter": "https://twitter.com/seansmcdermotts",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Westerns GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.910503",
    "Longitude": "-6.607847",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Louth",
    "County": "Louth",
    "Twitter": "https://twitter.com/westernsgfc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Westerns_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Stabannon Parnells GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.865227",
    "Longitude": "-6.441036",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Louth",
    "County": "Louth",
    "Twitter": "https://twitter.com/stabooparnells",
    "Wikipedia": "https://en.wikipedia.org/wiki/Stabannon_Parnells_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Naomh Malachi GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "54.045885",
    "Longitude": "-6.563938",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Louth",
    "County": "Louth",
    "Twitter": "https://twitter.com/naomhmalachi",
    "Wikipedia": "https://en.wikipedia.org/wiki/Naomh_Malachi_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Arklow Geraldines Ballymoney GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Ballymoney Pitch",
    "Code": "",
    "Latitude": "52.8209621",
    "Longitude": "-6.1781371",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wicklow",
    "County": "Wicklow",
    "Twitter": "https://twitter.com/agbarklow",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Arklow Geraldines Ballymoney GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Pearse's Park",
    "Code": "",
    "Latitude": "52.801196",
    "Longitude": "-6.169578",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wicklow",
    "County": "Wicklow",
    "Twitter": "https://twitter.com/agbarklow",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Annacurra GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.841607",
    "Longitude": "-6.353948",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wicklow",
    "County": "Wicklow",
    "Twitter": "https://twitter.com/annacurragaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "An Tochar GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.059263",
    "Longitude": "-6.229983",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wicklow",
    "County": "Wicklow",
    "Twitter": "https://twitter.com/antochargaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/An_T%C3%B3char_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Aughrim GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.852554",
    "Longitude": "-6.335164",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wicklow",
    "County": "Wicklow",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Arklow Rock Parnells GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.790124",
    "Longitude": "-6.17628",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wicklow",
    "County": "Wicklow",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Arklow_Rock_Parnells_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ashford GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.012328",
    "Longitude": "-6.109534",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wicklow",
    "County": "Wicklow",
    "Twitter": "https://twitter.com/ashfordgaa1884",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Avoca GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.853743",
    "Longitude": "-6.215919",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wicklow",
    "County": "Wicklow",
    "Twitter": "https://twitter.com/GaaAvoca",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Avondale GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.923067",
    "Longitude": "-6.241915",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wicklow",
    "County": "Wicklow",
    "Twitter": "https://twitter.com/avondale_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Avondale_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballinacor GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.946562",
    "Longitude": "-6.33326",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wicklow",
    "County": "Wicklow",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ballymanus GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.871361",
    "Longitude": "-6.4103",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wicklow",
    "County": "Wicklow",
    "Twitter": "https://twitter.com/ballymanusgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Baltinglass GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.931275",
    "Longitude": "-6.684331",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wicklow",
    "County": "Wicklow",
    "Twitter": "https://twitter.com/baltogaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Baltinglass_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Barndarrig GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.928405",
    "Longitude": "-6.15539",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wicklow",
    "County": "Wicklow",
    "Twitter": "https://twitter.com/barndarriggaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Barndarrig_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Blessington GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.180934",
    "Longitude": "-6.538899",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wicklow",
    "County": "Wicklow",
    "Twitter": "https://twitter.com/blessingtongaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Blessington_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Bray Emmets GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.207746",
    "Longitude": "-6.12736",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wicklow",
    "County": "Wicklow",
    "Twitter": "https://twitter.com/brayemmets",
    "Wikipedia": "https://en.wikipedia.org/wiki/Bray_Emmets_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Carnew Emmets GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.714901",
    "Longitude": "-6.493216",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wicklow",
    "County": "Wicklow",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Carnew_Emmets_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Coolboy GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Coolboy Community Field",
    "Code": "",
    "Latitude": "52.76524",
    "Longitude": "-6.427029",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wicklow",
    "County": "Wicklow",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Coolkenno GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.778053",
    "Longitude": "-6.6228",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wicklow",
    "County": "Wicklow",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Donard Glen GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.02159",
    "Longitude": "-6.619334",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wicklow",
    "County": "Wicklow",
    "Twitter": "https://twitter.com/donardglengaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Dunlavin GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.058605",
    "Longitude": "-6.691434",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wicklow",
    "County": "Wicklow",
    "Twitter": "https://twitter.com/dunlavingaa2015",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Eire Og Greystones",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.132531",
    "Longitude": "-6.066479",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wicklow",
    "County": "Wicklow",
    "Twitter": "https://twitter.com/eireogncl",
    "Wikipedia": "https://en.wikipedia.org/wiki/%C3%89ire_%C3%93g_Greystones_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Enniskerry GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.193215",
    "Longitude": "-6.181433",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wicklow",
    "County": "Wicklow",
    "Twitter": "https://twitter.com/enniskerrygaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Fergal Og GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.186251",
    "Longitude": "-6.126036",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wicklow",
    "County": "Wicklow",
    "Twitter": "https://twitter.com/fergal_ogs_gaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Glenealy GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.968941",
    "Longitude": "-6.14517",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wicklow",
    "County": "Wicklow",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Hollywood GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.090296",
    "Longitude": "-6.611487",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wicklow",
    "County": "Wicklow",
    "Twitter": "https://twitter.com/hollywoodgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Hollywood_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kilbride GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.19752",
    "Longitude": "-6.469276",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wicklow",
    "County": "Wicklow",
    "Twitter": "https://twitter.com/kilbride_gaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Kilcoole GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.094769",
    "Longitude": "-6.070664",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wicklow",
    "County": "Wicklow",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kilcoole_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kilmacanogue GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.162557",
    "Longitude": "-6.142518",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wicklow",
    "County": "Wicklow",
    "Twitter": "https://twitter.com/kilmacgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Knockananna GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.867859",
    "Longitude": "-6.498427",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wicklow",
    "County": "Wicklow",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Lacken GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.177239",
    "Longitude": "-6.511611",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wicklow",
    "County": "Wicklow",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Laragh GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.005433",
    "Longitude": "-6.300923",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wicklow",
    "County": "Wicklow",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Naomh Teagáin GAA, Kiltegan",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.90262",
    "Longitude": "-6.606746",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wicklow",
    "County": "Wicklow",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kiltegan_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Newcastle GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.069956",
    "Longitude": "-6.058177",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wicklow",
    "County": "Wicklow",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Newtown GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.080658",
    "Longitude": "-6.116129",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wicklow",
    "County": "Wicklow",
    "Twitter": "https://twitter.com/newtown_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Newtown_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Rathnew GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.989108",
    "Longitude": "-6.08236",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wicklow",
    "County": "Wicklow",
    "Twitter": "https://twitter.com/rathnewgaa1885",
    "Wikipedia": "https://en.wikipedia.org/wiki/Rathnew_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Shillelagh GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.755555",
    "Longitude": "-6.531104",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wicklow",
    "County": "Wicklow",
    "Twitter": "https://twitter.com/shillelaghgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Patrick's GAA, Wicklow",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.973657",
    "Longitude": "-6.026608",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wicklow",
    "County": "Wicklow",
    "Twitter": "https://twitter.com/stpatsgaawick",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Patrick%27s_GAA_%28Wicklow%29"
  },
  {
    "File": "Ireland",
    "Club": "Stratford Grangecon",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.997147",
    "Longitude": "-6.669908",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wicklow",
    "County": "Wicklow",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Tinahely GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.798814",
    "Longitude": "-6.457501",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wicklow",
    "County": "Wicklow",
    "Twitter": "https://twitter.com/tinahelygaaclub",
    "Wikipedia": "https://en.wikipedia.org/wiki/Tinahely_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Valleymount GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.114238",
    "Longitude": "-6.530901",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wicklow",
    "County": "Wicklow",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Abban's GAA, Adamstown",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.390671",
    "Longitude": "-6.720832",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "https://twitter.com/adamstowngaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Askamore-Kilrush",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.643043",
    "Longitude": "-6.555793",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "https://twitter.com/kilaskgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Realt na Mara GAA, Ballygarrett",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.583622",
    "Longitude": "-6.233145",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "https://twitter.com/realtnamaragaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballygarrett-R%C3%A9alt_na_Mara_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballyhogue GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.431664",
    "Longitude": "-6.605711",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "https://twitter.com/ballyhogueclub",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Bannow Ballymitty GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.256846",
    "Longitude": "-6.733759",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "https://twitter.com/bannowbmittygaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Brigid's GAA, Blackwater",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.443355",
    "Longitude": "-6.353621",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "https://twitter.com/blackwatergaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Buffers Alley",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.56352",
    "Longitude": "-6.327306",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "https://twitter.com/buffersalley",
    "Wikipedia": "https://en.wikipedia.org/wiki/Buffers_Alley_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Castletown Liam Mellows",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Coolgreany Community Field",
    "Code": "",
    "Latitude": "52.7629391",
    "Longitude": "-6.2329428",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "https://twitter.com/castletowngaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Castletown_Liam_Mellows_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Castletown Liam Mellows",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Perry",
    "Code": "",
    "Latitude": "52.710144",
    "Longitude": "-6.204402",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "https://twitter.com/castletowngaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Castletown_Liam_Mellows_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Clonard GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.338369",
    "Longitude": "-6.478375",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "https://twitter.com/clonard_gaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Clonee GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.622628",
    "Longitude": "-6.481072",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Clongeen GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.304883",
    "Longitude": "-6.764832",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Clongeen_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Cloughbawn GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.467568",
    "Longitude": "-6.73189",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "https://twitter.com/cloughbawn",
    "Wikipedia": "https://en.wikipedia.org/wiki/Cloughbawn_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Craanford Fr. O'Regans",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.677789",
    "Longitude": "-6.391762",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "https://twitter.com/froreganscford",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Crossabeg-Ballymurn",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.422311",
    "Longitude": "-6.464413",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "https://twitter.com/Cbeg_Bmurn_GAA",
    "Wikipedia": "https://en.wikipedia.org/wiki/Crossabeg%E2%80%93Ballymurn_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Davidstown-Courtnacuddy GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.46203",
    "Longitude": "-6.662402",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "https://twitter.com/dcgaaclub",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Duffry Rovers",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.552147",
    "Longitude": "-6.700936",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Duffry_Rovers_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Faythe Harriers",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Charman",
    "Code": "",
    "Latitude": "52.351134",
    "Longitude": "-6.484634",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "https://twitter.com/faytheharriers",
    "Wikipedia": "https://en.wikipedia.org/wiki/Faythe_Harriers_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Aidan's GAA, Ferns",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.592817",
    "Longitude": "-6.512791",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "https://twitter.com/fernsgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ferns_St_Aidan%27s_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Mogue's GAA, Fethard on Sea",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.18353",
    "Longitude": "-6.838302",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "https://twitter.com/stmoguesgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Geraldine O'Hanrahans",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "O'Kennedy Park",
    "Code": "",
    "Latitude": "52.404096",
    "Longitude": "-6.933886",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Geraldine_O%27Hanrahans_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Glynn-Barntown",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.374128",
    "Longitude": "-6.569917",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "https://twitter.com/glynnbarntown2",
    "Wikipedia": "https://en.wikipedia.org/wiki/Glynn%E2%80%93Barntown_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Gusserane O'Rahillys GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Tom Somers Park",
    "Code": "",
    "Latitude": "52.308292",
    "Longitude": "-6.855467",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "https://twitter.com/gorahillys",
    "Wikipedia": "https://en.wikipedia.org/wiki/Gusserane_O%27Rahilly%27s_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Horeswood GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.311469",
    "Longitude": "-6.957618",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "https://twitter.com/horeswoodgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Horeswood_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Half Way House Bunclody",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.653368",
    "Longitude": "-6.659245",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "https://twitter.com/officialhwhbun",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Kilanerin-Ballyfad GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.735337",
    "Longitude": "-6.284048",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "https://twitter.com/kilaneringaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Kilmore GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.208361",
    "Longitude": "-6.54651",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "https://twitter.com/kilmoregaawex",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Marshalstown Castledockrell",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.564899",
    "Longitude": "-6.572466",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "https://twitter.com/marshalstowngaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Monageer-Boolavogue",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.525973",
    "Longitude": "-6.476199",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Naomh Eanna GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Uí Shíocháin",
    "Code": "",
    "Latitude": "52.681772",
    "Longitude": "-6.274384",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "https://twitter.com/naomheannagaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Naomh_%C3%89anna_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Oulart The Ballagh",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.504492",
    "Longitude": "-6.388358",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "https://twitter.com/oulartb",
    "Wikipedia": "https://en.wikipedia.org/wiki/Oulart%E2%80%93The_Ballagh_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Our Lady's Island",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.203637",
    "Longitude": "-6.373763",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Oylegate-Glenbrien",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.417011",
    "Longitude": "-6.504244",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Oylegate%E2%80%93Glenbrien_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Rapparees-Starlights GAA, Enniscorthy",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Bellefield",
    "Code": "",
    "Latitude": "52.503268",
    "Longitude": "-6.576653",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "https://twitter.com/rappsstarlights",
    "Wikipedia": "https://en.wikipedia.org/wiki/Rapparees_Starlights_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Rathgarogue-Cushinstown GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.363423",
    "Longitude": "-6.845559",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "https://twitter.com/rathcushgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Anne's GAA, Rathnure",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Nicky Rackard Park",
    "Code": "",
    "Latitude": "52.49732",
    "Longitude": "-6.766104",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "https://twitter.com/rathnuregaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Rathnure_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Sarsfields GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Garman Park",
    "Code": "",
    "Latitude": "52.349868",
    "Longitude": "-6.4855",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Sarsfields_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Shamrocks GAA, Enniscorthy",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.50497",
    "Longitude": "-6.555204",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "https://twitter.com/ShamrocksGAA1",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Shelmaliers",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.38704",
    "Longitude": "-6.427317",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "https://twitter.com/shelmaliers",
    "Wikipedia": "https://en.wikipedia.org/wiki/Shelmaliers_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Anne's GAA, Rathangan",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.234507",
    "Longitude": "-6.615048",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "https://twitter.com/StAnnes_GAA",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Anne%27s_GAA_%28Wexford%29"
  },
  {
    "File": "Ireland",
    "Club": "St. Fintans",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.242927",
    "Longitude": "-6.458186",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "https://twitter.com/officialfintans",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. James' GAA, Ramsgrange",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.239025",
    "Longitude": "-6.930157",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "https://twitter.com/stjamesgaaclub",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Martin's GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.289556",
    "Longitude": "-6.491113",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "https://twitter.com/stmartinsgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Martin%27s_GAA_%28Wexford%29"
  },
  {
    "File": "Ireland",
    "Club": "St. Mary's GAA, Maudlintown",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.328098",
    "Longitude": "-6.454657",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "https://twitter.com/officialmaudgfc",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Mary%27s_Rosslare_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Mary's GAA, Rosslare",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Paddy Roche Centre, Tagoat",
    "Code": "",
    "Latitude": "52.243662",
    "Longitude": "-6.398572",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "https://twitter.com/officialstmarys",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Mary%27s_Rosslare_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Patrick's GAA, Camolin",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.613749",
    "Longitude": "-6.426267",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "https://twitter.com/clgnaomhpadraig",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Taghmon/Camross",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.321484",
    "Longitude": "-6.644345",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "https://twitter.com/taghmoncamross/",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Tara Rocks",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.697776",
    "Longitude": "-6.288466",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "https://twitter.com/tararocksgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Tara_Rocks_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. John's Volunteers",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.351125",
    "Longitude": "-6.484813",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "https://twitter.com/volunteersgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Joseph's GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.320138",
    "Longitude": "-6.473034",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Wexford",
    "County": "Wexford",
    "Twitter": "https://twitter.com/stjosephswexgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Meath GAA Centre of Excellence",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.5780878",
    "Longitude": "-6.721651",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/MeathGAA",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ballinabrackey GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.396387",
    "Longitude": "-7.108494",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/ballinabrackey1",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballinabrackey_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballinlough GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.733882",
    "Longitude": "-7.053707",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/ballinloughgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ballivor GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.53142",
    "Longitude": "-6.966286",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/ballivorf",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Bective GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.61335",
    "Longitude": "-6.669671",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/bectivegfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Blackhall Gaels",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Batterstown",
    "Code": "",
    "Latitude": "53.473157",
    "Longitude": "-6.545263",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/blackhallgaels",
    "Wikipedia": "https://en.wikipedia.org/wiki/Blackhall_Gaels_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Blackhall Gaels",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Kilcloon",
    "Code": "",
    "Latitude": "53.437253",
    "Longitude": "-6.602342",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/blackhallgaels",
    "Wikipedia": "https://en.wikipedia.org/wiki/Blackhall_Gaels_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Boardsmill GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.525985",
    "Longitude": "-6.872563",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/boardsmillgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Carnaross GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.746658",
    "Longitude": "-6.939989",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/carnarossgfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Castletown",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.767342",
    "Longitude": "-6.690196",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/castletowngfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Clann na nGael",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Kells Road, Athboy",
    "Code": "",
    "Latitude": "53.626911",
    "Longitude": "-6.910542",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/clannnangaelgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Clann_na_nGael_GAA_%28Meath%29"
  },
  {
    "File": "Ireland",
    "Club": "Clann na nGael",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Ráth Cairn",
    "Code": "",
    "Latitude": "53.618187",
    "Longitude": "-6.86765",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/clannnangaelgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Clann_na_nGael_GAA_%28Meath%29"
  },
  {
    "File": "Ireland",
    "Club": "Clonard GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Finian's Park",
    "Code": "",
    "Latitude": "53.450314",
    "Longitude": "-7.022092",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/clonardgaameath",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Cortown GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.684191",
    "Longitude": "-6.851621",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/cortowngfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Curraha",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.554103",
    "Longitude": "-6.454578",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/currahagfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Donaghmore/Ashbourne",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.50943",
    "Longitude": "-6.410494",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/donashgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Drumbaragh Emmett's",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.727573",
    "Longitude": "-6.938186",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Drumconrath GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.84201",
    "Longitude": "-6.656773",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/drumconrathgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Drumree GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.501901",
    "Longitude": "-6.584931",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/drumreegaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Dunderry GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.606629",
    "Longitude": "-6.772329",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/dunderry_gaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Dunsany",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.545872",
    "Longitude": "-6.618177",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/dunsanygaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Duleek-Bellewstown",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Duleek",
    "Code": "",
    "Latitude": "53.654461",
    "Longitude": "-6.433657",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/duleekbellewgfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Duleek-Bellewstown",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Bellewstown",
    "Code": "",
    "Latitude": "53.6448196",
    "Longitude": "-6.3531966",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/duleekbellewgfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Dunshaughlin",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.514759",
    "Longitude": "-6.552474",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/dunshaughlingaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Dunshaughlin_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Eastern Gaels GAC",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Réalt Na Mara",
    "Code": "",
    "Latitude": "53.7231401",
    "Longitude": "-6.2690094",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/easterngaelsgac",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Gaeil Colmcille",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Colmcille",
    "Code": "",
    "Latitude": "53.71987",
    "Longitude": "-6.880174",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/gaeilcolmcille",
    "Wikipedia": "https://en.wikipedia.org/wiki/Gaeil_Colmcille_CLG"
  },
  {
    "File": "Ireland",
    "Club": "Gaeil Colmcille",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Grangegodden",
    "Code": "",
    "Latitude": "53.705484",
    "Longitude": "-6.878868",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/gaeilcolmcille",
    "Wikipedia": "https://en.wikipedia.org/wiki/Gaeil_Colmcille_CLG"
  },
  {
    "File": "Ireland",
    "Club": "Kilbride GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.453252",
    "Longitude": "-6.396768",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/kilbridegaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Kildalkey",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Fr. Plunket Park",
    "Code": "",
    "Latitude": "53.570848",
    "Longitude": "-6.902001",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/kildalkeyc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kildalkey_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Killyon",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.484991",
    "Longitude": "-6.97195",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Killyon_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kilmainham",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.710995",
    "Longitude": "-6.827317",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/kilmainhamgfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Kilmainhamwood",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.84595",
    "Longitude": "-6.806986",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Kilmessan",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.566377",
    "Longitude": "-6.647235",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/kilmessanhc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kilmessan_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kilskyre GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.688518",
    "Longitude": "-6.991847",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/kilskyremoylagh",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Kiltale GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.52275",
    "Longitude": "-6.661469",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/kiltalegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kiltale_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Longwood GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.456396",
    "Longitude": "-6.935679",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/gaalongwood",
    "Wikipedia": "https://en.wikipedia.org/wiki/Longwood_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Na Fianna GAA, Enfield",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.410992",
    "Longitude": "-6.822061",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/nafiannameath",
    "Wikipedia": "https://en.wikipedia.org/wiki/Na_Fianna_CLG_%28Meath%29"
  },
  {
    "File": "Ireland",
    "Club": "Na Fianna GAA, Enfield",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Baconstown",
    "Code": "",
    "Latitude": "53.447724",
    "Longitude": "-6.810869",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/nafiannameath",
    "Wikipedia": "https://en.wikipedia.org/wiki/Na_Fianna_CLG_%28Meath%29"
  },
  {
    "File": "Ireland",
    "Club": "Meath Hill",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.887728",
    "Longitude": "-6.713774",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/meathhillgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Meath_Hill_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Moynalty",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.7808",
    "Longitude": "-6.875204",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/moynaltygfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Moynalvey",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.469269",
    "Longitude": "-6.664575",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/moynalveygfc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Moynalvey_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Moylagh",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.720427",
    "Longitude": "-7.145013",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/kilskyremoylagh",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Nobber GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.819211",
    "Longitude": "-6.745727",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/nobbergfc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Nobber_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Oldcastle GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.745702",
    "Longitude": "-7.173826",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/oldcastlegfc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Oldcastle_GAA"
  },
  {
    "File": "Ireland",
    "Club": "O'Mahony's GAA, Navan",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.649641",
    "Longitude": "-6.691038",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/navanomahonys",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Rathkenny GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.742146",
    "Longitude": "-6.616245",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/rathkennygfc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Rathkenny_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Rathmoylon GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.488564",
    "Longitude": "-6.797912",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/rathmolyonhc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ratoath GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Sean Eiffe Park",
    "Code": "",
    "Latitude": "53.510425",
    "Longitude": "-6.478256",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/ratoathgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ratoath_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Seneschalstown GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Fr. Tully Park",
    "Code": "",
    "Latitude": "53.683986",
    "Longitude": "-6.588064",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/seneschalstowng",
    "Wikipedia": "https://en.wikipedia.org/wiki/Seneschalstown_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Simonstown Gaels",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.672473",
    "Longitude": "-6.682418",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/simonstowngaels",
    "Wikipedia": "https://en.wikipedia.org/wiki/Simonstown_Gaels_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Skryne",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.583364",
    "Longitude": "-6.547767",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/skrynegfc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Skryne_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Slane",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.721314",
    "Longitude": "-6.478902",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/slanegfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Brigid's GAA, Ballinacree",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.76196",
    "Longitude": "-7.235007",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/stbrigids_gfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Colmcille's",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Ui Rí",
    "Code": "",
    "Latitude": "53.696083",
    "Longitude": "-6.279859",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/StColmcillesGAA",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Colmcille%27s_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Mary's GAA, Donore",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.693344",
    "Longitude": "-6.445991",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/stmarysgfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Michael's",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.767768",
    "Longitude": "-6.827061",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/stmicksgfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Patrick's GAA, Stamullen",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Cockhill Road",
    "Code": "",
    "Latitude": "53.633309",
    "Longitude": "-6.262855",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/stpatsmeath",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Patrick%27s_GAA_%28Meath%29"
  },
  {
    "File": "Ireland",
    "Club": "St. Paul's",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.433321",
    "Longitude": "-6.47938",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/stpaulsgfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Peter's GAA, Dunboyne",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.410506",
    "Longitude": "-6.474412",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/dunboynegaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Ultan's",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.672183",
    "Longitude": "-6.814886",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/stultansgfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Vincent's GAA, Ardcath",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.602144",
    "Longitude": "-6.38274",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Summerhill GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.483525",
    "Longitude": "-6.738941",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/summerhillgfc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Summerhill_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Syddan GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.796112",
    "Longitude": "-6.637596",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/gfc_syddan",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Trim GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.553324",
    "Longitude": "-6.803895",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/trimgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Trim_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Walterstown GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.624359",
    "Longitude": "-6.609117",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/gfcwalterstown",
    "Wikipedia": "https://en.wikipedia.org/wiki/Walterstown_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Wolfe Tones",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Kilberry",
    "Code": "",
    "Latitude": "53.699722",
    "Longitude": "-6.682203",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/wolfetonesmeath",
    "Wikipedia": "https://en.wikipedia.org/wiki/Wolfe_Tones_GAA_%28Meath%29"
  },
  {
    "File": "Ireland",
    "Club": "Wolfe Tones",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Gibbstown",
    "Code": "",
    "Latitude": "53.710273",
    "Longitude": "-6.759951",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Meath",
    "County": "Meath",
    "Twitter": "https://twitter.com/wolfetonesmeath",
    "Wikipedia": "https://en.wikipedia.org/wiki/Wolfe_Tones_GAA_%28Meath%29"
  },
  {
    "File": "Ireland",
    "Club": "Abbeylara",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Oliver Lynch Park",
    "Code": "Football",
    "Latitude": "53.758594",
    "Longitude": "-7.458023",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Longford",
    "County": "Longford",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Abbeylara_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Ardagh Moydow",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Keenan Park",
    "Code": "Football",
    "Latitude": "53.669649",
    "Longitude": "-7.705963",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Longford",
    "County": "Longford",
    "Twitter": "https://twitter.com/ardaghgfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ballymahon GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Leo Casey Park",
    "Code": "Football",
    "Latitude": "53.569432",
    "Longitude": "-7.76097",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Longford",
    "County": "Longford",
    "Twitter": "https://twitter.com/ballymahon1889",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ballymore",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Ballybrien",
    "Code": "Football",
    "Latitude": "53.77169",
    "Longitude": "-7.537271",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Longford",
    "County": "Longford",
    "Twitter": "https://twitter.com/gaaballymore",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Carrickedmond",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Michael Moran Park",
    "Code": "Football",
    "Latitude": "53.602344",
    "Longitude": "-7.71144",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Longford",
    "County": "Longford",
    "Twitter": "https://twitter.com/carrickedmond",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Cashel",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Chiarán",
    "Code": "Football",
    "Latitude": "53.584544",
    "Longitude": "-7.936965",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Longford",
    "County": "Longford",
    "Twitter": "https://twitter.com/teamcashel",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Clonguish",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Allen Park",
    "Code": "Mixed",
    "Latitude": "53.76046",
    "Longitude": "-7.830908",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Longford",
    "County": "Longford",
    "Twitter": "https://twitter.com/clonguishgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Clonguish_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Colmcille",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Fr. McGee Park",
    "Code": "Football",
    "Latitude": "53.824735",
    "Longitude": "-7.614641",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Longford",
    "County": "Longford",
    "Twitter": "https://twitter.com/colmcillegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Colmcille_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Dromard",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc na nGael",
    "Code": "Football",
    "Latitude": "53.896126",
    "Longitude": "-7.660425",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Longford",
    "County": "Longford",
    "Twitter": "https://twitter.com/dromardgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Fr. Manning Gaels",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Monaduff",
    "Code": "Football",
    "Latitude": "53.837486",
    "Longitude": "-7.740699",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Longford",
    "County": "Longford",
    "Twitter": "https://twitter.com/frmanninggaels",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Grattan Óg",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Dunbeggan",
    "Code": "Football",
    "Latitude": "53.693425",
    "Longitude": "-7.817861",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Longford",
    "County": "Longford",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Kenagh",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "McGann Park",
    "Code": "Football",
    "Latitude": "53.623441",
    "Longitude": "-7.819703",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Longford",
    "County": "Longford",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Killoe Young Emmets",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Emmet Park",
    "Code": "Football",
    "Latitude": "53.762295",
    "Longitude": "-7.734641",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Longford",
    "County": "Longford",
    "Twitter": "https://twitter.com/killoegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Killoe_Young_Emmets"
  },
  {
    "File": "Ireland",
    "Club": "Legan Sarsfields",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Flood Park",
    "Code": "Football",
    "Latitude": "53.623913",
    "Longitude": "-7.632101",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Longford",
    "County": "Longford",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Longford Slashers",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Michael Fay Park",
    "Code": "Mixed",
    "Latitude": "53.716092",
    "Longitude": "-7.800573",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Longford",
    "County": "Longford",
    "Twitter": "https://twitter.com/LDSlashersGAA",
    "Wikipedia": "https://en.wikipedia.org/wiki/Longford_Slashers"
  },
  {
    "File": "Ireland",
    "Club": "Mostrim",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Devine Park",
    "Code": "Mixed",
    "Latitude": "53.692861",
    "Longitude": "-7.615941",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Longford",
    "County": "Longford",
    "Twitter": "https://twitter.com/mostrimgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ardagh Moydow",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Moydow",
    "Code": "Football",
    "Latitude": "53.666695",
    "Longitude": "-7.779911",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Longford",
    "County": "Longford",
    "Twitter": "https://twitter.com/moydowgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Columba's GAA, Mullinalaghta",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "The Laurels",
    "Code": "Football",
    "Latitude": "53.82248",
    "Longitude": "-7.528401",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Longford",
    "County": "Longford",
    "Twitter": "https://twitter.com/thelaurelsm",
    "Wikipedia": "https://en.wikipedia.org/wiki/Mullinalaghta_St_Columba%27s_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Rathcline",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Clonbonny",
    "Code": "Football",
    "Latitude": "53.675491",
    "Longitude": "-7.973552",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Longford",
    "County": "Longford",
    "Twitter": "https://twitter.com/rathclinegaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Sean Connolly's",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Maguire Park",
    "Code": "Football",
    "Latitude": "53.76839",
    "Longitude": "-7.650594",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Longford",
    "County": "Longford",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Shroid Slashers (Disbanded)",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Shroid",
    "Code": "Football",
    "Latitude": "53.71753",
    "Longitude": "-7.728113",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Longford",
    "County": "Longford",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Brigid's GAA, Killashee",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Killashee",
    "Code": "Football",
    "Latitude": "53.690047",
    "Longitude": "-7.884277",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Longford",
    "County": "Longford",
    "Twitter": "https://twitter.com/killasheegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Brigid%27s_GAA_%28Roscommon%29"
  },
  {
    "File": "Ireland",
    "Club": "St. Mary's GAA, Granard",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Higginstown",
    "Code": "Football",
    "Latitude": "53.77244",
    "Longitude": "-7.487026",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Longford",
    "County": "Longford",
    "Twitter": "https://twitter.com/granardgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Munis GAA, Forgney",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Peter Egan Park",
    "Code": "Football",
    "Latitude": "53.556729",
    "Longitude": "-7.721522",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Longford",
    "County": "Longford",
    "Twitter": "https://twitter.com/stmunisgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Athlone",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Chiarán",
    "Code": "",
    "Latitude": "53.428458",
    "Longitude": "-7.926838",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "https://twitter.com/athlonegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Athlone_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballynacargy",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Moynihan Park",
    "Code": "",
    "Latitude": "53.581584",
    "Longitude": "-7.522495",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "https://twitter.com/ballynacargygaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ballymore",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.499917",
    "Longitude": "-7.66169",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballymore_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballinagore",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.414424",
    "Longitude": "-7.447255",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballinagore_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Bunbrosna",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.586223",
    "Longitude": "-7.444925",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "https://twitter.com/bunbrosnagaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ballycomoyle",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.723582",
    "Longitude": "-7.297393",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "https://twitter.com/ballycomoyle",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Brownstown",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Fr Reilly Memorial Park",
    "Code": "",
    "Latitude": "53.662309",
    "Longitude": "-7.10819",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Castledaly",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.374744",
    "Longitude": "-7.796737",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "https://twitter.com/stmalachysgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Castletown Geoghegan",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.448703",
    "Longitude": "-7.482894",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Castletown_Geoghegan_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Castlepollard GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.68095",
    "Longitude": "-7.309868",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Castlepollard_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Caulry",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.431866",
    "Longitude": "-7.797019",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Castletown Finea Coole Whitehall",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Castletown",
    "Code": "",
    "Latitude": "53.753173",
    "Longitude": "-7.333594",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Clonkill",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.572446",
    "Longitude": "-7.273672",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "https://twitter.com/clonkillcc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Clonkill_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Crookedwood",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.602106",
    "Longitude": "-7.283256",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Crookedwood"
  },
  {
    "File": "Ireland",
    "Club": "Coralstown/Kinnegad",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.4611",
    "Longitude": "-7.103726",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "https://twitter.com/crookedwoodgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Delvin",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.603121",
    "Longitude": "-7.105715",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "https://twitter.com/delvingaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Delvin_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Garrycastle",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.424468",
    "Longitude": "-7.895974",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "https://twitter.com/gaagarrycastle",
    "Wikipedia": "https://en.wikipedia.org/wiki/Garrycastle_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Fr. Daltons",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.498426",
    "Longitude": "-7.661308",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Fr._Dalton%27s_Hurling_Club"
  },
  {
    "File": "Ireland",
    "Club": "Killucan",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.511011",
    "Longitude": "-7.135337",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "https://twitter.com/killucangfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Kilbeggan Shamrocks",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.369014",
    "Longitude": "-7.507892",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "https://twitter.com/kshamrocks",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Lough Lene Gaels",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.648995",
    "Longitude": "-7.224898",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "https://twitter.com/loughlene",
    "Wikipedia": "https://en.wikipedia.org/wiki/Lough_Lene_Gaels_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Loughnavalley",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.484713",
    "Longitude": "-7.540992",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "https://twitter.com/lvalleygaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Maryland",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.46979",
    "Longitude": "-7.76433",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "https://twitter.com/marylandgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Maryland_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Milltown GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.537459",
    "Longitude": "-7.546324",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "https://twitter.com/milltownclg",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Moate All Whites",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.390597",
    "Longitude": "-7.698852",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "https://twitter.com/moateallwhites",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Mullingar Shamrocks",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.530709",
    "Longitude": "-7.332154",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "https://twitter.com/mullingarshams",
    "Wikipedia": "https://en.wikipedia.org/wiki/Mullingar_Shamrocks"
  },
  {
    "File": "Ireland",
    "Club": "Milltownpass",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.440946",
    "Longitude": "-7.248656",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "https://twitter.com/milltownpassgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Milltownpass_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Raharney",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "Hurling",
    "Latitude": "53.519857",
    "Longitude": "-7.120767",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "https://twitter.com/raharneyhurling",
    "Wikipedia": "https://en.wikipedia.org/wiki/Raharney_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ringtown",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.643862",
    "Longitude": "-7.301316",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ringtown_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Rosemount GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.427477",
    "Longitude": "-7.642052",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Paul's",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.666795",
    "Longitude": "-7.022662",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "https://twitter.com/stpaulsgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Loman's GAA, Mullingar",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.534709",
    "Longitude": "-7.316355",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "https://twitter.com/stlomansgaaclub",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Loman%27s_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Multyfarnham",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.623845",
    "Longitude": "-7.386133",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "https://twitter.com/multygaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Mary's GAA, Rochfortbridge",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Fr. Eamon O'Brien Park",
    "Code": "",
    "Latitude": "53.41695",
    "Longitude": "-7.302444",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Mary%27s_Rochfortbridge_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Joseph's",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.431679",
    "Longitude": "-7.558314",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "https://twitter.com/thejoesgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. O. Plunkett's",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.53478",
    "Longitude": "-7.340916",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "https://twitter.com/ophcmullingar",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Brigids GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.416809",
    "Longitude": "-7.302724",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Brigid%27s_GAA_%28Roscommon%29"
  },
  {
    "File": "Ireland",
    "Club": "Southern Gaels",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Chiarán",
    "Code": "",
    "Latitude": "53.428041",
    "Longitude": "-7.925549",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "https://twitter.com/southerngaelshc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Shandonagh",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.510113",
    "Longitude": "-7.402833",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "https://twitter.com/shandonaghgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "The Downs",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.507116",
    "Longitude": "-7.241625",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "https://twitter.com/thedownsgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/The_Downs_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Tyrrellspass",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.392822",
    "Longitude": "-7.383439",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Tyrrellspass_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Tubberclair",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.483047",
    "Longitude": "-7.862943",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "https://twitter.com/tubberclairgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Tang",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Joe Fox Park",
    "Code": "",
    "Latitude": "53.523101",
    "Longitude": "-7.779863",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Turin",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "McCabe Park",
    "Code": "Hurling",
    "Latitude": "53.579084",
    "Longitude": "-7.203637",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Westmeath",
    "County": "Westmeath",
    "Twitter": "https://twitter.com/turinhurling",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ballinagar",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.267336",
    "Longitude": "-7.332201",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballinagar_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballinamere",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.292378",
    "Longitude": "-7.564262",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "https://twitter.com/ballinameregaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballinamere_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballycommon",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.283634",
    "Longitude": "-7.365185",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "https://twitter.com/ballycommongaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ballycumber",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.333525",
    "Longitude": "-7.70648",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "https://twitter.com/ballycumber_gaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ballyfore",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.307647",
    "Longitude": "-7.136296",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "https://twitter.com/ballyforegaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ballyskenagh",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.95938",
    "Longitude": "-7.84176",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "https://twitter.com/skenaghvillagaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballyskenagh_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Belmont",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.242465",
    "Longitude": "-7.938551",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "https://twitter.com/belmont_gaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Birr",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Brendan's Park",
    "Code": "",
    "Latitude": "53.091317",
    "Longitude": "-7.908861",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "https://twitter.com/birrclg",
    "Wikipedia": "https://en.wikipedia.org/wiki/Birr_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Bracknagh",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.217184",
    "Longitude": "-7.141327",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "https://twitter.com/bracknaghgaa0",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Brosna Gaels",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.333488",
    "Longitude": "-7.706587",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "https://twitter.com/brosnagaels",
    "Wikipedia": "https://en.wikipedia.org/wiki/Brosna_Gaels_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Cappincur",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.273751",
    "Longitude": "-7.449875",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "https://twitter.com/cappincurgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Carrig/Riverstown",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.058312",
    "Longitude": "-7.980131",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "https://twitter.com/carrigclg",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Clara",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.339565",
    "Longitude": "-7.632382",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "https://twitter.com/Clara_gaa_club",
    "Wikipedia": "https://en.wikipedia.org/wiki/Clara_GAA_%28Offaly%29"
  },
  {
    "File": "Ireland",
    "Club": "Clonbullogue",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.262843",
    "Longitude": "-7.083279",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Clonmore Harps",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.374428",
    "Longitude": "-7.140655",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "https://twitter.com/harpsclonmore",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Coolderry",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.014039",
    "Longitude": "-7.844491",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "https://twitter.com/coolderrygaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Coolderry_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Crinkle",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.076882",
    "Longitude": "-7.891026",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Daingean",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.302024",
    "Longitude": "-7.291894",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "https://twitter.com/daingeangaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Daingean_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Doon",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.331883",
    "Longitude": "-7.830707",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "https://twitter.com/doongaa_offaly",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Drumcullen",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.133569",
    "Longitude": "-7.803453",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "https://twitter.com/drumcullen_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Drumcullen_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Durrow",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.315589",
    "Longitude": "-7.511349",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "https://twitter.com/durrowgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Edenderry",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.35072",
    "Longitude": "-7.052671",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "https://twitter.com/edenderrygaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Edenderry_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Erin Rovers",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.282199",
    "Longitude": "-7.720031",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "https://twitter.com/erinrovers",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ferbane",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.26974",
    "Longitude": "-7.820564",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "https://twitter.com/ferbanegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ferbane_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Gracefield",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.166078",
    "Longitude": "-7.21698",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "https://twitter.com/gracefield_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Gracefield_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kilclonfert",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.328171",
    "Longitude": "-7.347666",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Kilcormac Killoughey",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.176372",
    "Longitude": "-7.732654",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "https://twitter.com/kk_gaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Killavilla",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.960972",
    "Longitude": "-7.732701",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "https://twitter.com/killavillagaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Killavilla_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Killeigh",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.215329",
    "Longitude": "-7.446874",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "https://twitter.com/clodiaghgaels",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Killurin",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.216198",
    "Longitude": "-7.5534",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "https://twitter.com/clodiaghgaels",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Kinnitty",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.100934",
    "Longitude": "-7.709021",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "https://twitter.com/kinnittygaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kinnitty_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Lusmagh",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.172554",
    "Longitude": "-8.018066",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "https://twitter.com/lusmaghgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Lusmagh_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Raheen",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.239227",
    "Longitude": "-7.328747",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "https://twitter.com/raheengaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Raheen_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Rhode",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Fr. Dowling Park",
    "Code": "",
    "Latitude": "53.345141",
    "Longitude": "-7.210732",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "https://twitter.com/rhodegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Rhode_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Seir Kieran",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Clareen",
    "Code": "",
    "Latitude": "53.073868",
    "Longitude": "-7.800836",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Seir_Kieran_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Shamrocks",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.25176",
    "Longitude": "-7.541597",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "https://twitter.com/shamrocksgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Shamrocks_GAA_%28Offaly%29"
  },
  {
    "File": "Ireland",
    "Club": "Shannonbridge",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.265689",
    "Longitude": "-8.004313",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "https://twitter.com/rachragaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Shannonbridge_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Shinrone",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.986716",
    "Longitude": "-7.925193",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "https://twitter.com/shinronegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Shinrone_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St Brigids",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Croghans",
    "Code": "",
    "Latitude": "53.335992",
    "Longitude": "-7.279623",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St Rynaghs Football",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Cloghan",
    "Code": "",
    "Latitude": "53.222159",
    "Longitude": "-7.883934",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "https://twitter.com/strynaghsfoot",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St Rynaghs Hurling",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Rynagh's Park",
    "Code": "Hurling",
    "Latitude": "53.188666",
    "Longitude": "-7.97513",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "https://twitter.com/strynaghs",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Tubber",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.373398",
    "Longitude": "-7.658652",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "https://twitter.com/tubbercooffaly",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Tullamore",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.279975",
    "Longitude": "-7.494021",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "https://twitter.com/tullamoregaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Tullamore_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Walsh Island",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "O'Connor Park",
    "Code": "",
    "Latitude": "53.22904",
    "Longitude": "-7.22579",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Offaly",
    "County": "Offaly",
    "Twitter": "https://twitter.com/walshislandgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Walsh_Island_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Allenwood",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.290002",
    "Longitude": "-6.873511",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "https://twitter.com/allenwood_gfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ardclough",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.297487",
    "Longitude": "-6.56542",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ardclough_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Athgarvan",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.148899",
    "Longitude": "-6.800989",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "https://twitter.com/athgarvan_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Athgarvan_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Athy",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.992993",
    "Longitude": "-6.969735",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "https://twitter.com/athygfc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Athy_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballykelly",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.156792",
    "Longitude": "-7.05305",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballykelly_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Ballymore Eustace",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.129974",
    "Longitude": "-6.587142",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "https://twitter.com/bme_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballymore_Eustace_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballyteague",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.266",
    "Longitude": "-6.865816",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "https://twitter.com/ballyteaguegfc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballyteague_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Broadford",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Balrinnet",
    "Code": "",
    "Latitude": "53.390092",
    "Longitude": "-6.996703",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "https://twitter.com/broadfordhc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Broadford_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Cappagh",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.3967772",
    "Longitude": "-6.7515072",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "https://twitter.com/cappaghgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Cappagh_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Caragh",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Farnan's Park",
    "Code": "",
    "Latitude": "53.283761",
    "Longitude": "-6.762845",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Caragh_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Carbury",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.344435",
    "Longitude": "-6.927296",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "https://twitter.com/gaacarbury",
    "Wikipedia": "https://en.wikipedia.org/wiki/Carbury_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Castledermot",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.910728",
    "Longitude": "-6.844689",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "https://twitter.com/castledermotgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Castledermot_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Castlemitchell",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.022269",
    "Longitude": "-7.032532",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "https://twitter.com/mitchellsgfc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Castlemitchell_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Celbridge",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.331261",
    "Longitude": "-6.528012",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "https://twitter.com/celbridgegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Celbridge_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Clane",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.289259",
    "Longitude": "-6.693907",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "https://twitter.com/clanegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Clane_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Clogherinkoe",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.390088",
    "Longitude": "-6.996707",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "https://twitter.com/clogherinkoegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Clogherinkoe_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Coill Dubh",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.294468",
    "Longitude": "-6.821423",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "https://twitter.com/coilldubhgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Coill_Dubh_HC"
  },
  {
    "File": "Ireland",
    "Club": "Confey",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.374551",
    "Longitude": "-6.481888",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "https://twitter.com/confeygaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Confey_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Eadestown",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.198398",
    "Longitude": "-6.585469",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "https://twitter.com/eadestowngaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Eadestown_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Éire Óg Corra Choill",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "Hurling",
    "Latitude": "53.254828",
    "Longitude": "-6.738619",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "https://twitter.com/eocchurling",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ellistown",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.184792",
    "Longitude": "-6.984758",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "https://twitter.com/ellistowngaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ellistown_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Grangenolvin",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.966296",
    "Longitude": "-6.954673",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Grangenolvin_G.F.C."
  },
  {
    "File": "Ireland",
    "Club": "Johnstownbridge",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.392898",
    "Longitude": "-6.845747",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "https://twitter.com/jtbgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Kilcock",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.394146",
    "Longitude": "-6.667536",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "https://twitter.com/kilcockgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kilcock_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kilcullen",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.126941",
    "Longitude": "-6.75478",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "https://twitter.com/kilcullengaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kilcullen_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kildangan",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.100257",
    "Longitude": "-7.000252",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "https://twitter.com/kildangangaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kildangan_GAA_%28County_Kildare%29"
  },
  {
    "File": "Ireland",
    "Club": "Kill",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.244591",
    "Longitude": "-6.598358",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "https://twitter.com/anchillgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kill_GAA_%28County_Kildare%29"
  },
  {
    "File": "Ireland",
    "Club": "Leixlip",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.36442",
    "Longitude": "-6.502629",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "https://twitter.com/LeixlipGAA",
    "Wikipedia": "https://en.wikipedia.org/wiki/Leixlip_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Maynooth",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.388073",
    "Longitude": "-6.599887",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "https://twitter.com/maynoothgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Maynooth_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Milltown",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.204571",
    "Longitude": "-6.855672",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "https://twitter.com/milltowngaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Milltown_GAA_%28County_Kildare%29"
  },
  {
    "File": "Ireland",
    "Club": "Monasterevan",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Fr. Prendergast Park",
    "Code": "",
    "Latitude": "53.139976",
    "Longitude": "-7.054484",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "https://twitter.com/monasterevangaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Monasterevin_G.F.C."
  },
  {
    "File": "Ireland",
    "Club": "Moorefield",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.172502",
    "Longitude": "-6.851375",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "https://twitter.com/moorefieldgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Moorefield_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Naas",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.229577",
    "Longitude": "-6.663065",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "https://twitter.com/naasgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Naas_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Nurney",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.104164",
    "Longitude": "-6.940144",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "https://twitter.com/nurneygaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Nurney_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Raheens",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.233792",
    "Longitude": "-6.719323",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "https://twitter.com/raheensgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Raheens_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Rathangan",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.226809",
    "Longitude": "-6.989049",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "https://twitter.com/rathangangaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Rathangan_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Rathcoffey",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.332817",
    "Longitude": "-6.691077",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "https://twitter.com/rathcoffeygaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Rathcoffey_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Rheban",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.026596",
    "Longitude": "-6.998186",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "https://twitter.com/rhebangfc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Rheban_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Robertstown",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.277003",
    "Longitude": "-6.820462",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "https://twitter.com/robertstowngfc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Robertstown_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Rosglas",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.135089",
    "Longitude": "-7.042018",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Round Towers",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.160935",
    "Longitude": "-6.9138",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "https://twitter.com/roundtowersgfc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Round_Towers_GAA_%28Kildare%29"
  },
  {
    "File": "Ireland",
    "Club": "Sallins",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.250618",
    "Longitude": "-6.661872",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Sallins_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Sarsfields",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.188192",
    "Longitude": "-6.812509",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "https://twitter.com/sashgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Sarsfields_GAA_%28Newbridge%29"
  },
  {
    "File": "Ireland",
    "Club": "St. Kevin's",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.331027",
    "Longitude": "-6.760959",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "https://twitter.com/stkevinsgfc",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Kevin%27s_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Laurence's",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.042157",
    "Longitude": "-6.857706",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "https://twitter.com/stlaurencesgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Laurence%27s_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Straffan",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.311276",
    "Longitude": "-6.606638",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "https://twitter.com/straffangaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Suncroft",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.10704",
    "Longitude": "-6.857612",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Suncroft_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Twomilehouse",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.160765",
    "Longitude": "-6.690674",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kildare",
    "County": "Kildare",
    "Twitter": "https://twitter.com/twomilehousegaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Annanough",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Ánach na nEach",
    "Code": "",
    "Latitude": "53.051735",
    "Longitude": "-7.091181",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "https://twitter.com/annanoughgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Annanough_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Arles-Kilcruise",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.894883",
    "Longitude": "-7.025899",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Arles-Killeen",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Rossena",
    "Code": "",
    "Latitude": "52.892833",
    "Longitude": "-6.99585",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "https://twitter.com/arleskilleengfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ballinakill",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.880695",
    "Longitude": "-7.308334",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "https://twitter.com/ballinakill_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballinakill_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballyfin",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Cappinrush",
    "Code": "",
    "Latitude": "53.05717",
    "Longitude": "-7.406286",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "https://twitter.com/BallyfinGaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballyfin_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballylinan",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Aughanure",
    "Code": "",
    "Latitude": "52.938777",
    "Longitude": "-7.039226",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballylinan_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballypickas",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Cobbler's Hill",
    "Code": "",
    "Latitude": "52.91321",
    "Longitude": "-7.294574",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "https://twitter.com/ballypickasgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballypickas_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballyroan Abbey",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.943535",
    "Longitude": "-7.293942",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballyroan_Abbey_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Barrowhouse",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.947144",
    "Longitude": "-6.994342",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "https://twitter.com/barrowhousegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Barrowhouse_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Borris in Ossory",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "O'Keefe Park",
    "Code": "",
    "Latitude": "52.941232",
    "Longitude": "-7.618571",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Borris-in-Ossory%E2%80%93Kilcotton_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Camross",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.997237",
    "Longitude": "-7.561707",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Camross_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Castletown",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Daingenroe",
    "Code": "",
    "Latitude": "52.980062",
    "Longitude": "-7.503658",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "https://twitter.com/gaacastletown",
    "Wikipedia": "https://en.wikipedia.org/wiki/Castletown_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Clonad",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.99382",
    "Longitude": "-7.296167",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "https://twitter.com/clonadgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Clonad_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Clonaslee/St Manmans",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.151351",
    "Longitude": "-7.526209",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Clough Ballacolla",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "The Hawthorn",
    "Code": "",
    "Latitude": "52.881749",
    "Longitude": "-7.451694",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "https://twitter.com/clough_bcolla",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Fintan's GAA, Colt",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Sean Ui hUidhrin",
    "Code": "",
    "Latitude": "52.967084",
    "Longitude": "-7.36911",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "https://twitter.com/officialfintans",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Fintan%27s%2C_Mountrath_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Courtwood",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Kilbracken",
    "Code": "",
    "Latitude": "53.103835",
    "Longitude": "-7.083775",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "https://twitter.com/courtwoodgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Courtwood_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Crettyard",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.865801",
    "Longitude": "-7.105656",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "https://twitter.com/gaacrettyard",
    "Wikipedia": "https://en.wikipedia.org/wiki/Crettyard_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Emo",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.099064",
    "Longitude": "-7.207754",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "https://twitter.com/emogaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Emo_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Rathdowney Errill GAA Club",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Eireil",
    "Code": "",
    "Latitude": "52.867401",
    "Longitude": "-7.68154",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "https://twitter.com/re_hurlingclub",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Graiguecullen",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Fr. Maher Park",
    "Code": "",
    "Latitude": "52.841881",
    "Longitude": "-6.942296",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "https://twitter.com/graiguegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Graiguecullen_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kilcavan",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.195351",
    "Longitude": "-7.368801",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kilcavan_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kilcotton",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.931646",
    "Longitude": "-7.577607",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "https://twitter.com/borriskilcotton",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kilcotton_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Killeshin",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Uisean",
    "Code": "",
    "Latitude": "52.854389",
    "Longitude": "-6.997778",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "https://twitter.com/killeshingaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Killeshin_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kyle",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.960107",
    "Longitude": "-7.691114",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kyle_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Mountmellick",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Acragar",
    "Code": "",
    "Latitude": "53.103632",
    "Longitude": "-7.303888",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "https://twitter.com/mountmellickgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Mountmellick_GAA"
  },
  {
    "File": "Ireland",
    "Club": "O Dempseys",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Old Pound",
    "Code": "",
    "Latitude": "53.118471",
    "Longitude": "-7.146399",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "https://twitter.com/odempseysgfc",
    "Wikipedia": "https://en.wikipedia.org/wiki/O%27Dempsey%27s_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Park/Ratheniska GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Ratheniska",
    "Code": "",
    "Latitude": "53.006669",
    "Longitude": "-7.217325",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "https://twitter.com/parkratheniska",
    "Wikipedia": "https://en.wikipedia.org/wiki/Park%E2%80%93Ratheniska_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Portarlington",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "McCann Park",
    "Code": "",
    "Latitude": "53.148912",
    "Longitude": "-7.179322",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "https://twitter.com/portgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Portarlington_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Portlaoise",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.025055",
    "Longitude": "-7.264502",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "https://twitter.com/portlaoisegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Portlaoise_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Rathdowney",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Kelly Daly Park",
    "Code": "",
    "Latitude": "52.853116",
    "Longitude": "-7.587692",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "https://twitter.com/ratherrillgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Rathdowney_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Rosenallis",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.139529",
    "Longitude": "-7.415844",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "https://twitter.com/gaarosenallis",
    "Wikipedia": "https://en.wikipedia.org/wiki/Rosenallis_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Shanahoe",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.909724",
    "Longitude": "-7.406351",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Shanahoe_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Slieve Bloom",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Deerpark",
    "Code": "",
    "Latitude": "53.032579",
    "Longitude": "-7.502013",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Slieve_Bloom_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Spink",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.906705",
    "Longitude": "-7.267546",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Spink_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St Fintans GAA, Mountrath",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Fintan's GAA Grounds",
    "Code": "",
    "Latitude": "53.00238",
    "Longitude": "-7.477547",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "https://twitter.com/stfintansgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Fintan%27s_Hospital_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St Josephs GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Tony Byrne Park",
    "Code": "",
    "Latitude": "52.989329",
    "Longitude": "-7.090436",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "https://twitter.com/Stjosephsgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St Lazerians GAA, Abbeyleix",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Fr. Breen Park",
    "Code": "",
    "Latitude": "52.912785",
    "Longitude": "-7.352875",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Abbeyleix_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Stradbally GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.008704",
    "Longitude": "-7.145755",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "https://twitter.com/stradbally_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Stradbally_GAA_%28Laois%29"
  },
  {
    "File": "Ireland",
    "Club": "The Harps",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.850299",
    "Longitude": "-7.396194",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "https://twitter.com/theharpsgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "The Heath",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.065857",
    "Longitude": "-7.215534",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "https://twitter.com/theheathgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/The_Heath_GAA"
  },
  {
    "File": "Ireland",
    "Club": "The Rock",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.115682",
    "Longitude": "-7.294205",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "https://twitter.com/the_rock_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/The_Rock_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Timahoe",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.969269",
    "Longitude": "-7.212512",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "https://twitter.com/timahoegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Timahoe_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Trumera",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.976093",
    "Longitude": "-7.430269",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Laois",
    "County": "Laois",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Trumera_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Asca",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Presentation College",
    "Code": "",
    "Latitude": "52.838715",
    "Longitude": "-6.907458",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Carlow",
    "County": "Carlow",
    "Twitter": "https://twitter.com/ascajuve",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ballinabranna",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Liam Dobbs",
    "Code": "",
    "Latitude": "52.786211",
    "Longitude": "-6.985106",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Carlow",
    "County": "Carlow",
    "Twitter": "https://twitter.com/ballinabrannagc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ballinkillen",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.648785",
    "Longitude": "-6.927971",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Carlow",
    "County": "Carlow",
    "Twitter": "https://twitter.com/ballinkillenhc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballinkillen_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballon",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.735408",
    "Longitude": "-6.792665",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Carlow",
    "County": "Carlow",
    "Twitter": "https://twitter.com/ballongfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Carlow Town",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.848618",
    "Longitude": "-6.914983",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Carlow",
    "County": "Carlow",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Carlow_Town_Hurling_Club"
  },
  {
    "File": "Ireland",
    "Club": "Clonmore",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.854258",
    "Longitude": "-6.569956",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Carlow",
    "County": "Carlow",
    "Twitter": "https://twitter.com/clonmoregfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Erin's Own, Mhuine Bheag",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.708817",
    "Longitude": "-6.948737",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Carlow",
    "County": "Carlow",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Erin%27s_Own_GAA_%28Carlow%29"
  },
  {
    "File": "Ireland",
    "Club": "Éire Óg",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Uí Bhrian",
    "Code": "",
    "Latitude": "52.83017",
    "Longitude": "-6.917612",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Carlow",
    "County": "Carlow",
    "Twitter": "https://twitter.com/eireogcarlow",
    "Wikipedia": "https://en.wikipedia.org/wiki/%C3%89ire_%C3%93g_GAA_%28Carlow%29"
  },
  {
    "File": "Ireland",
    "Club": "St. Cailins GAA, Fenagh",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.716439",
    "Longitude": "-6.8469",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Carlow",
    "County": "Carlow",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Fenagh%2C_County_Leitrim"
  },
  {
    "File": "Ireland",
    "Club": "Fighting Cocks",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.770065",
    "Longitude": "-6.837975",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Carlow",
    "County": "Carlow",
    "Twitter": "https://twitter.com/fightingcocksie",
    "Wikipedia": "https://en.wikipedia.org/wiki/Fighting_Cocks_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Grange",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.841736",
    "Longitude": "-6.786701",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Carlow",
    "County": "Carlow",
    "Twitter": "https://twitter.com/grange_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Grange_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kilbride",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.719653",
    "Longitude": "-6.721237",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Carlow",
    "County": "Carlow",
    "Twitter": "https://twitter.com/kilbridegfc1",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Kildavin/Clonegal",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.683283",
    "Longitude": "-6.675586",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Carlow",
    "County": "Carlow",
    "Twitter": "https://twitter.com/kc_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kildavin/Clonegal_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Leighlinbridge",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.741804",
    "Longitude": "-6.964656",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Carlow",
    "County": "Carlow",
    "Twitter": "https://twitter.com/leighlingfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Michael Davitt",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Superbowl",
    "Code": "",
    "Latitude": "52.738977",
    "Longitude": "-6.982401",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Carlow",
    "County": "Carlow",
    "Twitter": "https://twitter.com/michaeldavitts",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Mount Leinster Rangers",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.590449",
    "Longitude": "-6.91204",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Carlow",
    "County": "Carlow",
    "Twitter": "https://twitter.com/mlrangers",
    "Wikipedia": "https://en.wikipedia.org/wiki/Mount_Leinster_Rangers_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Naomh Bríd",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Superbowl",
    "Code": "",
    "Latitude": "52.739001",
    "Longitude": "-6.98256",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Carlow",
    "County": "Carlow",
    "Twitter": "https://twitter.com/naomhbridhc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Naomh_Br%C3%ADd_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Naomh Eoin, Myshall",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.687349",
    "Longitude": "-6.7871",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Carlow",
    "County": "Carlow",
    "Twitter": "https://twitter.com/naomheoincarlow",
    "Wikipedia": "https://en.wikipedia.org/wiki/Naomh_Eoin_GAA"
  },
  {
    "File": "Ireland",
    "Club": "O'Hanrahan's",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.846592",
    "Longitude": "-6.912386",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Carlow",
    "County": "Carlow",
    "Twitter": "https://twitter.com/ohanrahans",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Old Leighlin",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Molaise Park",
    "Code": "",
    "Latitude": "52.737925",
    "Longitude": "-7.020453",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Carlow",
    "County": "Carlow",
    "Twitter": "https://twitter.com/oldleighlingfc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Old_Leighlin_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Palatine",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.828711",
    "Longitude": "-6.874939",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Carlow",
    "County": "Carlow",
    "Twitter": "https://twitter.com/palatinegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Palatine_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Rathvilly",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Father Ryan Park",
    "Code": "",
    "Latitude": "52.87785",
    "Longitude": "-6.695365",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Carlow",
    "County": "Carlow",
    "Twitter": "https://twitter.com/rathvillygaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Rathvilly_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Andrew's",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "McGrath Park",
    "Code": "",
    "Latitude": "52.708891",
    "Longitude": "-6.948602",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Carlow",
    "County": "Carlow",
    "Twitter": "https://twitter.com/standrewsgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Mullin's",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Drummond",
    "Code": "",
    "Latitude": "52.510704",
    "Longitude": "-6.922378",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Carlow",
    "County": "Carlow",
    "Twitter": "https://twitter.com/NaomhMoling",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Mullin%27s_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Patrick's GAA, Tullow",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Brother Leo Park",
    "Code": "",
    "Latitude": "52.807953",
    "Longitude": "-6.744771",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Carlow",
    "County": "Carlow",
    "Twitter": "https://twitter.com/stpatricksgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Tinryland",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.799333",
    "Longitude": "-6.880853",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Carlow",
    "County": "Carlow",
    "Twitter": "https://twitter.com/tinryland_gfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Setanta",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Presentation College",
    "Code": "",
    "Latitude": "52.838695",
    "Longitude": "-6.90737",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Carlow",
    "County": "Carlow",
    "Twitter": "https://twitter.com/setantacarlow",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ballyhale Shamrocks",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc na Seamróg",
    "Code": "",
    "Latitude": "52.469664",
    "Longitude": "-7.204296",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kilkenny",
    "County": "Kilkenny",
    "Twitter": "https://twitter.com/ballyhalegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballyhale_Shamrocks_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Barrow Rangers",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc an Phobail",
    "Code": "",
    "Latitude": "52.683692",
    "Longitude": "-7.026966",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kilkenny",
    "County": "Kilkenny",
    "Twitter": "https://twitter.com/barrowrangers",
    "Wikipedia": "https://en.wikipedia.org/wiki/Barrow_Rangers_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Bennettsbridge",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.59514",
    "Longitude": "-7.180986",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kilkenny",
    "County": "Kilkenny",
    "Twitter": "https://twitter.com/thebridgegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Bennettsbridge_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Black and Whites",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Tom Walsh Park",
    "Code": "",
    "Latitude": "52.591726",
    "Longitude": "-6.959316",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kilkenny",
    "County": "Kilkenny",
    "Twitter": "https://twitter.com/black_whitesgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Carrickshock",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.453663",
    "Longitude": "-7.250298",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kilkenny",
    "County": "Kilkenny",
    "Twitter": "https://twitter.com/carrickshockgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Carrickshock_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Carrigeen",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Asper Park",
    "Code": "",
    "Latitude": "52.288315",
    "Longitude": "-7.223781",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kilkenny",
    "County": "Kilkenny",
    "Twitter": "https://twitter.com/clubcarrigeen",
    "Wikipedia": "https://en.wikipedia.org/wiki/Carrigeen_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Clara",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.64507",
    "Longitude": "-7.146446",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kilkenny",
    "County": "Kilkenny",
    "Twitter": "https://twitter.com/claragaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Clara_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Cloneen",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.868445",
    "Longitude": "-7.16704",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kilkenny",
    "County": "Kilkenny",
    "Twitter": "https://twitter.com/cloneengaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Conahy Shamrocks",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.720434",
    "Longitude": "-7.2918",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kilkenny",
    "County": "Kilkenny",
    "Twitter": "https://twitter.com/conahyshamrocks",
    "Wikipedia": "https://en.wikipedia.org/wiki/Conahy_Shamrocks_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Danesfort",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.583603",
    "Longitude": "-7.240626",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kilkenny",
    "County": "Kilkenny",
    "Twitter": "https://twitter.com/danesfortclg",
    "Wikipedia": "https://en.wikipedia.org/wiki/Danesfort_CLG"
  },
  {
    "File": "Ireland",
    "Club": "Dicksboro",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Dicksboro",
    "Code": "",
    "Latitude": "52.656991",
    "Longitude": "-7.273072",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kilkenny",
    "County": "Kilkenny",
    "Twitter": "https://twitter.com/DicksboroGAA",
    "Wikipedia": "https://en.wikipedia.org/wiki/Dicksboro_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Dunnamaggin",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Hayden Park",
    "Code": "",
    "Latitude": "52.499297",
    "Longitude": "-7.291409",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kilkenny",
    "County": "Kilkenny",
    "Twitter": "https://twitter.com/dunnamaggingaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Dunnamaggin_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Emeralds",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Urlingford",
    "Code": "",
    "Latitude": "52.725221",
    "Longitude": "-7.576852",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kilkenny",
    "County": "Kilkenny",
    "Twitter": "https://twitter.com/emeraldsgaaclub",
    "Wikipedia": "https://en.wikipedia.org/wiki/Emeralds_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Erins Own",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.784294",
    "Longitude": "-7.214025",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kilkenny",
    "County": "Kilkenny",
    "Twitter": "https://twitter.com/erinsowngaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Erin%27s_Own_GAA_%28Kilkenny%29"
  },
  {
    "File": "Ireland",
    "Club": "Erins Own",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Prince Grounds",
    "Code": "",
    "Latitude": "52.808206",
    "Longitude": "-7.20819",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kilkenny",
    "County": "Kilkenny",
    "Twitter": "https://twitter.com/erinsowngaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Erin%27s_Own_GAA_%28Kilkenny%29"
  },
  {
    "File": "Ireland",
    "Club": "Fenians GAA, Johnstown",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Jim Maher Memorial Park",
    "Code": "",
    "Latitude": "52.752873",
    "Longitude": "-7.565115",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kilkenny",
    "County": "Kilkenny",
    "Twitter": "https://twitter.com/fenians68",
    "Wikipedia": "https://en.wikipedia.org/wiki/Fenians_Johnstown_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Galmoy",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.791456",
    "Longitude": "-7.569937",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kilkenny",
    "County": "Kilkenny",
    "Twitter": "https://twitter.com/galmoygaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Galmoy_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Glenmore",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.350423",
    "Longitude": "-7.026131",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kilkenny",
    "County": "Kilkenny",
    "Twitter": "https://twitter.com/glenmoregaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Glenmore_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Graignamanagh",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.545976",
    "Longitude": "-6.9608",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kilkenny",
    "County": "Kilkenny",
    "Twitter": "https://twitter.com/graiggaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Graignamanagh_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Graigue Ballycallan",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Tom Ryall Park",
    "Code": "",
    "Latitude": "52.617875",
    "Longitude": "-7.420821",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kilkenny",
    "County": "Kilkenny",
    "Twitter": "https://twitter.com/graiguebcgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Graigue%E2%80%93Ballycallan_GAA"
  },
  {
    "File": "Ireland",
    "Club": "James Stephens, Kilkenny",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Sheamuis Stiophan",
    "Code": "",
    "Latitude": "52.642994",
    "Longitude": "-7.24471",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kilkenny",
    "County": "Kilkenny",
    "Twitter": "https://twitter.com/villagegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/James_Stephens_GAA"
  },
  {
    "File": "Ireland",
    "Club": "John Lockes GAA, Callan",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "John Locke Park",
    "Code": "",
    "Latitude": "52.540144",
    "Longitude": "-7.387126",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kilkenny",
    "County": "Kilkenny",
    "Twitter": "https://twitter.com/JohnLockesGAA",
    "Wikipedia": "https://en.wikipedia.org/wiki/John_Locke%27s_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kilmacow",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Sports Complex",
    "Code": "Hurling",
    "Latitude": "52.310343",
    "Longitude": "-7.173136",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kilkenny",
    "County": "Kilkenny",
    "Twitter": "https://twitter.com/kilmacowhurling",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kilmacow_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kilmoganny",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.466114",
    "Longitude": "-7.327578",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kilkenny",
    "County": "Kilkenny",
    "Twitter": "https://twitter.com/dunnamaggingaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kilmoganny_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Lisdowney",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.790025",
    "Longitude": "-7.38991",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kilkenny",
    "County": "Kilkenny",
    "Twitter": "https://twitter.com/lisdowneygaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Lisdowney_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Mooncoin",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.293973",
    "Longitude": "-7.259106",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kilkenny",
    "County": "Kilkenny",
    "Twitter": "https://twitter.com/mooncoingaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Mooncoin_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Muckalee",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.746345",
    "Longitude": "-7.179606",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kilkenny",
    "County": "Kilkenny",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Muckalee_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Mullinavat",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Mullinavat GAA",
    "Code": "",
    "Latitude": "52.366405",
    "Longitude": "-7.175895",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kilkenny",
    "County": "Kilkenny",
    "Twitter": "https://twitter.com/gaamullinavat",
    "Wikipedia": "https://en.wikipedia.org/wiki/Mullinavat_GAA"
  },
  {
    "File": "Ireland",
    "Club": "O'Loughlin Gaels",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.658583",
    "Longitude": "-7.235611",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kilkenny",
    "County": "Kilkenny",
    "Twitter": "https://twitter.com/oloughlingaels",
    "Wikipedia": "https://en.wikipedia.org/wiki/O%27Loughlin_Gaels_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Piltown",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Piltown Gaa Hurling & Football Pitch",
    "Code": "",
    "Latitude": "52.360108",
    "Longitude": "-7.329881",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kilkenny",
    "County": "Kilkenny",
    "Twitter": "https://twitter.com/gaapiltown",
    "Wikipedia": "https://en.wikipedia.org/wiki/Piltown_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Railyard",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.838245",
    "Longitude": "-7.154363",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kilkenny",
    "County": "Kilkenny",
    "Twitter": "https://twitter.com/railyardgfc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Railyard_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Rower Inistioge",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.489652",
    "Longitude": "-7.063449",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kilkenny",
    "County": "Kilkenny",
    "Twitter": "https://twitter.com/rower_inistioge",
    "Wikipedia": "https://en.wikipedia.org/wiki/Rower%E2%80%93Inistioge_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Slieverue",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.286663",
    "Longitude": "-7.069631",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kilkenny",
    "County": "Kilkenny",
    "Twitter": "https://twitter.com/sliabhruagaacam",
    "Wikipedia": "https://en.wikipedia.org/wiki/Slieverue_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Lachtains",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.730964",
    "Longitude": "-7.393092",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kilkenny",
    "County": "Kilkenny",
    "Twitter": "https://twitter.com/naomhlachtain",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Lachtain%27s_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Martins",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Uí Chomartúin",
    "Code": "",
    "Latitude": "52.789695",
    "Longitude": "-7.120046",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kilkenny",
    "County": "Kilkenny",
    "Twitter": "https://twitter.com/stmartinskk",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Martin%27s_GAA_%28Kilkenny%29"
  },
  {
    "File": "Ireland",
    "Club": "St. Patrick's, Ballyragget",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Ballyragget",
    "Code": "",
    "Latitude": "52.781208",
    "Longitude": "-7.334431",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kilkenny",
    "County": "Kilkenny",
    "Twitter": "https://twitter.com/stpatsbally",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Patrick%27s_GAA_%28Kilkenny%29"
  },
  {
    "File": "Ireland",
    "Club": "Thomastown",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.522908",
    "Longitude": "-7.130235",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kilkenny",
    "County": "Kilkenny",
    "Twitter": "https://twitter.com/thomastowngaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Thomastown_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Threecastles",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Threecastles GAA Pitch",
    "Code": "",
    "Latitude": "52.703787",
    "Longitude": "-7.312646",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kilkenny",
    "County": "Kilkenny",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Threecastles_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Tullaroan",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Tullaroan",
    "Code": "",
    "Latitude": "52.660457",
    "Longitude": "-7.444648",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kilkenny",
    "County": "Kilkenny",
    "Twitter": "https://twitter.com/tullaroanhurlin",
    "Wikipedia": "https://en.wikipedia.org/wiki/Tullaroan_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Tullogher Rosbercon",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.414533",
    "Longitude": "-7.02003",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kilkenny",
    "County": "Kilkenny",
    "Twitter": "https://twitter.com/tulloghergaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Tullogher%E2%80%93Rosbercon_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Windgap",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.462944",
    "Longitude": "-7.396197",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kilkenny",
    "County": "Kilkenny",
    "Twitter": "https://twitter.com/windgapgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Windgap_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Young Irelands GAA, Gowran",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.631439",
    "Longitude": "-7.052133",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Kilkenny",
    "County": "Kilkenny",
    "Twitter": "https://twitter.com/gowrangaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Young_Irelands_GAA_%28Kilkenny%29"
  },
  {
    "File": "Ireland",
    "Club": "Abbeyside / Ballinacourty",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.103529",
    "Longitude": "-7.598938",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "https://twitter.com/abbeycourtygaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ardmore",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.958355",
    "Longitude": "-7.727697",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "https://twitter.com/ardmoregaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ardmore_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballinameela",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.102388",
    "Longitude": "-7.779881",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "https://twitter.com/Ballinameela",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballinameela_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballyduff Lower",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Tom Cheasty Park",
    "Code": "",
    "Latitude": "52.234568",
    "Longitude": "-7.2991",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "https://twitter.com/bdufflwr",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballyduff_Lower_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballyduff Upper",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Ballyduff Community Field",
    "Code": "",
    "Latitude": "52.141407",
    "Longitude": "-8.052022",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "https://twitter.com/BallyduffUpper",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballyduff_Upper_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballygunner",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "James McGinn Park",
    "Code": "",
    "Latitude": "52.227044",
    "Longitude": "-7.065754",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "https://twitter.com/ballygunnerHc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballygunner_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballysaggart",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "The Scrloim",
    "Code": "",
    "Latitude": "52.183902",
    "Longitude": "-7.991842",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "https://twitter.com/ballysaggartgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballysaggart_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Brickey Rangers",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Bushy Park",
    "Code": "",
    "Latitude": "52.088664",
    "Longitude": "-7.690774",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "https://twitter.com/brickeyrangers",
    "Wikipedia": "https://en.wikipedia.org/wiki/Brickey_Rangers_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Bunmahon",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.152653",
    "Longitude": "-7.369354",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "https://twitter.com/bunmahongaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Butlerstown",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.238742",
    "Longitude": "-7.180152",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "https://twitter.com/butlerstowngaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Cappoquin / Affane",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.143862",
    "Longitude": "-7.850779",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "https://twitter.com/CappoquinAffane",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Clashmore / Kinsalebeg",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.00588",
    "Longitude": "-7.820753",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "https://twitter.com/ckgaaclub",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Clonea Power",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.280672",
    "Longitude": "-7.44549",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "https://twitter.com/CloneaGAA",
    "Wikipedia": "https://en.wikipedia.org/wiki/Clonea_Power%E2%80%93Rathgormack_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Colligan / Emmets",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.157802",
    "Longitude": "-7.68594",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "https://twitter.com/colligangaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "De La Salle",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Cleaboy Road",
    "Code": "",
    "Latitude": "52.265668",
    "Longitude": "-7.149002",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "https://twitter.com/DeLaSalleGAA1",
    "Wikipedia": "https://en.wikipedia.org/wiki/De_La_Salle_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Dungarvan",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Dungarbhain",
    "Code": "",
    "Latitude": "52.084622",
    "Longitude": "-7.640967",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "https://twitter.com/clgdungarvan",
    "Wikipedia": "https://en.wikipedia.org/wiki/Dungarvan_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Dunhill",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Ui Bhriain",
    "Code": "",
    "Latitude": "52.175549",
    "Longitude": "-7.249955",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "https://twitter.com/gaadunhill",
    "Wikipedia": "https://en.wikipedia.org/wiki/Dunhill_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Erins Own",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Poleberry Park",
    "Code": "",
    "Latitude": "52.251109",
    "Longitude": "-7.113494",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "https://twitter.com/erinsowngaaclub",
    "Wikipedia": "https://en.wikipedia.org/wiki/Erin%27s_Own_GAA_%28Waterford%29"
  },
  {
    "File": "Ireland",
    "Club": "Fenor",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "William Flynn Park",
    "Code": "",
    "Latitude": "52.160639",
    "Longitude": "-7.223279",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "https://twitter.com/fenorhurlers",
    "Wikipedia": "https://en.wikipedia.org/wiki/Fenor_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ferrybank",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.266311",
    "Longitude": "-7.096725",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "https://twitter.com/ferrybankgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ferrybank_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Fourmilewater/ The Nire",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Millfield",
    "Code": "",
    "Latitude": "52.269843",
    "Longitude": "-7.723907",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "https://twitter.com/NireFourmile",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Gaultier",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Gaultier GAA Club",
    "Code": "",
    "Latitude": "52.158937",
    "Longitude": "-7.01567",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "https://twitter.com/GaultierGAAClub",
    "Wikipedia": "https://en.wikipedia.org/wiki/Gaultier_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Geraldines",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.075073",
    "Longitude": "-7.820307",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Geraldines_GAA"
  },
  {
    "File": "Ireland",
    "Club": "John Mitchels",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.22066",
    "Longitude": "-7.443994",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "https://twitter.com/johnmitwfd",
    "Wikipedia": "https://en.wikipedia.org/wiki/John_Mitchels_GAA_%28Waterford%29"
  },
  {
    "File": "Ireland",
    "Club": "Kilgobnet",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Kilgobinet GAA Pitch",
    "Code": "",
    "Latitude": "52.156284",
    "Longitude": "-7.652759",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Kill",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.178278",
    "Longitude": "-7.336514",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "https://twitter.com/kill_gaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Kilmacthomas",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.202544",
    "Longitude": "-7.424689",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "https://twitter.com/kilmacthomasgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Kilrossanty",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.164734",
    "Longitude": "-7.516851",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "https://twitter.com/kilrossantygaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kilrossanty_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Lismore",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.135019",
    "Longitude": "-7.945557",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "https://twitter.com/LismoreGAA",
    "Wikipedia": "https://en.wikipedia.org/wiki/Lismore_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Melleray/Glen Rovers",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.1852",
    "Longitude": "-7.852449",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "https://twitter.com/mellerayglenrov",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Modeligo",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.144937",
    "Longitude": "-7.745377",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "https://twitter.com/modeligogaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Modeligo_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Mount Sion",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.261241",
    "Longitude": "-7.13261",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "https://twitter.com/mountsiongaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Mount_Sion_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Naomh Pól",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Reinhardt",
    "Code": "",
    "Latitude": "52.250586",
    "Longitude": "-7.132367",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Newtown/Ballydurn",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.23865",
    "Longitude": "-7.393926",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "https://twitter.com/newtownballydur",
    "Wikipedia": "https://en.wikipedia.org/wiki/Newtown/Ballydurn_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Old Parish",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.002069",
    "Longitude": "-7.632852",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Passage GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "Hurling",
    "Latitude": "52.228639",
    "Longitude": "-6.977221",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "https://twitter.com/passagehurling",
    "Wikipedia": "https://en.wikipedia.org/wiki/Passage_GAA_%28Waterford%29"
  },
  {
    "File": "Ireland",
    "Club": "Portlaw",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.301144",
    "Longitude": "-7.309954",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "https://twitter.com/PortlawGAAClub",
    "Wikipedia": "https://en.wikipedia.org/wiki/Portlaw_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Rathgormack",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Curry Park",
    "Code": "",
    "Latitude": "52.304647",
    "Longitude": "-7.497676",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "https://twitter.com/rathgormackgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Rinn Ua gCuanach",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Uí Shíocháin",
    "Code": "",
    "Latitude": "52.043448",
    "Longitude": "-7.57073",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Roanmore",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Ui Mhurchu",
    "Code": "",
    "Latitude": "52.259122",
    "Longitude": "-7.138539",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "https://twitter.com/roanmoreclg",
    "Wikipedia": "https://en.wikipedia.org/wiki/Roanmore_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Shamrocks, Waterford",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "JFK Park",
    "Code": "",
    "Latitude": "52.057788",
    "Longitude": "-7.888284",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "https://twitter.com/kgkshamrocksgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Shamrocks_GAA_%28Waterford%29"
  },
  {
    "File": "Ireland",
    "Club": "Sliabh gCua/St. Mary's",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.213282",
    "Longitude": "-7.712395",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "https://twitter.com/sliabhgcuagaacl",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Mollerans",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.343921",
    "Longitude": "-7.428029",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "https://twitter.com/stmollerans",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Molleran%27s_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Saviours",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.240917",
    "Longitude": "-7.138076",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "https://twitter.com/stsavioursgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Saviour%27s_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Stradbally GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.132969",
    "Longitude": "-7.454574",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "https://twitter.com/stradbally_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Stradbally_GAA_%28Waterford%29"
  },
  {
    "File": "Ireland",
    "Club": "Tallow",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Eamonn De Paor",
    "Code": "",
    "Latitude": "52.094972",
    "Longitude": "-7.99748",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "https://twitter.com/tallowgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Tallow_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Tourin/Ballinwillin",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.12825",
    "Longitude": "-7.869607",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "https://twitter.com/touringaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Tourin%E2%80%93Ballinwillin_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Michael Mac Craith GAA, Tramore",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Michael Mac Craith",
    "Code": "",
    "Latitude": "52.168648",
    "Longitude": "-7.141485",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Waterford",
    "County": "Waterford",
    "Twitter": "https://twitter.com/tramoregaa13",
    "Wikipedia": "https://en.wikipedia.org/wiki/Tramore_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Aherlow",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Lisvernane",
    "Code": "",
    "Latitude": "52.411051",
    "Longitude": "-8.225701",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "https://twitter.com/aherlowgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Aherlow_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ardfinnan",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.318382",
    "Longitude": "-7.864478",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "https://twitter.com/ardfinnangaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ardfinnan_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Arravale Rovers",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Sean Treacy Park",
    "Code": "",
    "Latitude": "52.469007",
    "Longitude": "-8.158535",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "https://twitter.com/arravalerovers",
    "Wikipedia": "https://en.wikipedia.org/wiki/Arravale_Rovers_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballina",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Ballina",
    "Code": "",
    "Latitude": "52.815314",
    "Longitude": "-8.440019",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "https://twitter.com/ballinagaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballina_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballinahinch",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.790298",
    "Longitude": "-8.314469",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "https://twitter.com/ballinahinchgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballinahinch_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballingarry",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "O'Sullivan Park",
    "Code": "",
    "Latitude": "52.586178",
    "Longitude": "-7.544356",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "https://twitter.com/ballingarry_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballingarry_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballybacon / Grange",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Goatenbridge",
    "Code": "",
    "Latitude": "52.273282",
    "Longitude": "-7.871174",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "https://twitter.com/ballybacong",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ballylooby/Castlegrace",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.315865",
    "Longitude": "-8.001302",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "https://twitter.com/ballyloobygaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ballyporeen/Skeheenarinky Juvenile",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Ballyporeen/Skeheenarinky GAA Club",
    "Code": "",
    "Latitude": "52.34894",
    "Longitude": "-7.419763",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "https://twitter.com/ballyporeengaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Boherlahan/Dualla",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.569918",
    "Longitude": "-7.895595",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "https://twitter.com/boherlahandgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Borris-Ileigh",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Bishop Quinlan Park",
    "Code": "",
    "Latitude": "52.749687",
    "Longitude": "-7.953953",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "https://twitter.com/borris_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Borris%E2%80%93Ileigh_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Borrisokane",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Gairnéir",
    "Code": "",
    "Latitude": "52.996104",
    "Longitude": "-8.124933",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Borrisokane_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Burgess",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Kilcolman",
    "Code": "",
    "Latitude": "52.856753",
    "Longitude": "-8.261603",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Burgess_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Cahir",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Cahir GAA Pitch",
    "Code": "",
    "Latitude": "52.372355",
    "Longitude": "-7.924761",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Cahir_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Cappawhite",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.577934",
    "Longitude": "-8.165046",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Cappawhite_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Carrick Davins",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Daibhín",
    "Code": "",
    "Latitude": "52.34892",
    "Longitude": "-7.419838",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Carrick_Davins_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Swan Club, Carrick on Suir",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Davin Memorial Pk",
    "Code": "",
    "Latitude": "52.34891",
    "Longitude": "-7.419763",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Cashel King Cormacs",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Leahy Park",
    "Code": "",
    "Latitude": "52.509618",
    "Longitude": "-7.877735",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Cashel_King_Cormacs_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Clerihan",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.409059",
    "Longitude": "-7.747596",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Clerihan_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Clonakenny",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.886502",
    "Longitude": "-7.818085",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Clonakenny_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Clonmel Commercials",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Clonmel GAA Grounds",
    "Code": "",
    "Latitude": "52.353285",
    "Longitude": "-7.713145",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "https://twitter.com/commercialsgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Clonmel_Commercials"
  },
  {
    "File": "Ireland",
    "Club": "Clonmel Óg",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Ned Hall Park",
    "Code": "",
    "Latitude": "52.362318",
    "Longitude": "-7.706142",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "https://twitter.com/clonmel_og",
    "Wikipedia": "https://en.wikipedia.org/wiki/Clonmel_%C3%93g_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Clonoulty-Rossmore",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.61214",
    "Longitude": "-7.956057",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Clonoulty%E2%80%93Rossmore_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Drom/Inch",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "The Ragg",
    "Code": "",
    "Latitude": "52.718917",
    "Longitude": "-7.914276",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Dúrlas Óg",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.675831",
    "Longitude": "-7.826849",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Durlas_%C3%93g_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Eire Óg Annacarty",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Eire Og GAA Grounds",
    "Code": "",
    "Latitude": "52.564395",
    "Longitude": "-8.111486",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/%C3%89ire_%C3%93g_Annacarty_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Emly",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Ailbe's Park",
    "Code": "",
    "Latitude": "52.464751",
    "Longitude": "-8.347427",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "https://twitter.com/emlygaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Emly_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Fethard",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Barracks Field",
    "Code": "",
    "Latitude": "52.468162",
    "Longitude": "-7.695611",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Fethard_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Fr. Sheehys",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Fr Sheehy Park, Clogheen",
    "Code": "",
    "Latitude": "52.278863",
    "Longitude": "-8.003084",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Fr._Sheehys_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Galtee Rovers",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Canon Hayes Park",
    "Code": "",
    "Latitude": "52.44691",
    "Longitude": "-8.067078",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Galtee_Rovers_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Golden/Kilfeacle",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.500306",
    "Longitude": "-7.977773",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Gortnahoe-Glengoole",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.674159",
    "Longitude": "-7.601641",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Gortnahoe%E2%80%93Glengoole_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Grangemockler / Ballyneale",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.44451",
    "Longitude": "-7.477753",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Holycross/Ballycahill",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Michael's GAA Park",
    "Code": "",
    "Latitude": "52.648559",
    "Longitude": "-7.876497",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Holycross/Ballycahill",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Ballycahill",
    "Code": "",
    "Latitude": "52.688162",
    "Longitude": "-7.910431",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Inane Rovers",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.967308",
    "Longitude": "-7.78725",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Inane_Rovers_GFC"
  },
  {
    "File": "Ireland",
    "Club": "JK Brackens",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Shíleáin",
    "Code": "",
    "Latitude": "52.79883",
    "Longitude": "-7.836861",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Kildangan",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Puckane",
    "Code": "",
    "Latitude": "52.930071",
    "Longitude": "-8.243692",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "https://twitter.com/kiladangangaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kiladangan_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Killea",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Tommy Treacy GAA",
    "Code": "",
    "Latitude": "52.82393",
    "Longitude": "-7.870476",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Killea_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Killenaule",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "James Simpson Memorial Stadium",
    "Code": "",
    "Latitude": "52.563753",
    "Longitude": "-7.669372",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Kilruane MacDonaghs",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "MacDonagh Park",
    "Code": "",
    "Latitude": "52.94125",
    "Longitude": "-8.042781",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kilruane_MacDonagh%27s_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kilsheelan-Kilcash",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Kilsheelan-Kilcash",
    "Code": "",
    "Latitude": "52.363397",
    "Longitude": "-7.583899",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kilsheelan%E2%80%93Kilcash_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Knock",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.844384",
    "Longitude": "-7.764852",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Knock_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Knockavilla-Donaskeigh Kickhams",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Ciocaim, Dundrum",
    "Code": "",
    "Latitude": "52.559725",
    "Longitude": "-8.051841",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Knockavilla%E2%80%93Donaskeigh_Kickhams_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Knockshegowna",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Ballingarry GAA Field",
    "Code": "",
    "Latitude": "53.018927",
    "Longitude": "-8.026612",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Knockshegowna_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Lattin-Cullen",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Hannon GAA Park",
    "Code": "",
    "Latitude": "52.463913",
    "Longitude": "-8.271971",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Lattin%E2%80%93Cullen_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Lorrha and Dorrha",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St Ruadhan's Park",
    "Code": "",
    "Latitude": "53.119495",
    "Longitude": "-8.109044",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Loughmore Castleiney",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc O Riain",
    "Code": "",
    "Latitude": "52.770059",
    "Longitude": "-7.787392",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Loughmore%E2%80%93Castleiney_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Marlfield",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.34548",
    "Longitude": "-7.751742",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Marlfield_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Martin's GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.3454",
    "Longitude": "-7.751742",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Moneygall",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.882729",
    "Longitude": "-7.947806",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Moneygall_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Moycarkey-Borris",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Littleton",
    "Code": "",
    "Latitude": "52.642503",
    "Longitude": "-7.742512",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "https://twitter.com/MoycarkeyBorris",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Moyle Rovers",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.400439",
    "Longitude": "-7.692946",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Moyle_Rovers_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Moyne-Templetuohy",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Templetuohy GAA Pitch",
    "Code": "",
    "Latitude": "52.783884",
    "Longitude": "-7.721736",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Moyne%E2%80%93Templetuohy_GAA"
  },
  {
    "File": "Ireland",
    "Club": "CJ Kickhams Mullinahone",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.514854",
    "Longitude": "-7.501747",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Nenagh Éire Óg",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "MacDonagh Park",
    "Code": "",
    "Latitude": "52.86684",
    "Longitude": "-8.215158",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "https://twitter.com/nenagheireog",
    "Wikipedia": "https://en.wikipedia.org/wiki/Nenagh_%C3%89ire_%C3%93g_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Newcastle",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc O hAilleanain",
    "Code": "",
    "Latitude": "52.271933",
    "Longitude": "-7.80683",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "https://twitter.com/newcastlegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Newcastle_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Newport",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Lacken Park",
    "Code": "",
    "Latitude": "52.707818",
    "Longitude": "-8.395539",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "https://twitter.com/tulachsheasta1",
    "Wikipedia": "https://en.wikipedia.org/wiki/Newport_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Portroe",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.886239",
    "Longitude": "-8.348204",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "https://twitter.com/portroegaacamo",
    "Wikipedia": "https://en.wikipedia.org/wiki/Portroe_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Rockwell Rovers",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc na nGael",
    "Code": "",
    "Latitude": "52.443648",
    "Longitude": "-7.880373",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "https://twitter.com/rockwellgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Rockwell_Rovers_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Roscrea",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Cronan's Park",
    "Code": "Hurling",
    "Latitude": "52.967228",
    "Longitude": "-7.787303",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "https://twitter.com/roscreahurling",
    "Wikipedia": "https://en.wikipedia.org/wiki/Roscrea_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Rosegreen",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.46693",
    "Longitude": "-7.830511",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "https://twitter.com/rosegreengaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Sean Treacy's",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.678535",
    "Longitude": "-8.164292",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "https://twitter.com/seantreacysgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Se%C3%A1n_Treacy%27s_GAA_%28Tipperary%29"
  },
  {
    "File": "Ireland",
    "Club": "Shannon Rovers",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Ballinderry Sports Field",
    "Code": "",
    "Latitude": "53.014984",
    "Longitude": "-8.217536",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "https://twitter.com/sroversgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Shannon_Rovers_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Silvermines",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Dolla",
    "Code": "",
    "Latitude": "52.801072",
    "Longitude": "-8.188428",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "https://twitter.com/silvermines_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Silvermines_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Skeheenarinky",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.272313",
    "Longitude": "-8.097081",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Skeheenarinky_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Solohead",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.511249",
    "Longitude": "-8.213035",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "https://twitter.com/soloheadgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Solohead_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Mary's Clonmel",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.353205",
    "Longitude": "-7.713235",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "https://twitter.com/stmarys_hc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Patricks",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Anner Park",
    "Code": "",
    "Latitude": "52.474503",
    "Longitude": "-7.595447",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "https://twitter.com/gaastpatricks",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Patrick%27s_GAA_%28Tipperary%29"
  },
  {
    "File": "Ireland",
    "Club": "Templederry Kenyons",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Fr. Kenyon Park",
    "Code": "",
    "Latitude": "52.776249",
    "Longitude": "-8.073839",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "https://twitter.com/tdkenyonsgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Templederry_Kenyons_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Thurles Gaels",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Kickham Park",
    "Code": "",
    "Latitude": "52.669488",
    "Longitude": "-7.795087",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "https://twitter.com/thurlesgaels",
    "Wikipedia": "https://en.wikipedia.org/wiki/Thurles_Gaels_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Thurles Sarsfields",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Semple Stadium Pitch",
    "Code": "",
    "Latitude": "52.682287",
    "Longitude": "-7.82338",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "https://twitter.com/thurlessars",
    "Wikipedia": "https://en.wikipedia.org/wiki/Thurles_Sarsfields_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Thurles Sarsfields",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Semple Stadium Pitch",
    "Code": "",
    "Latitude": "52.6870357",
    "Longitude": "-7.8371787",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "https://twitter.com/thurlessars",
    "Wikipedia": "https://en.wikipedia.org/wiki/Thurles_Sarsfields_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Toomevara",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Michael's Park",
    "Code": "",
    "Latitude": "52.850242",
    "Longitude": "-8.041352",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "https://twitter.com/toomegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Toomevara_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Upperchurch Drombane",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.661245",
    "Longitude": "-7.950968",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Tipperary",
    "County": "Tipperary",
    "Twitter": "https://twitter.com/churchdrombane",
    "Wikipedia": "https://en.wikipedia.org/wiki/Upperchurch%E2%80%93Drombane_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Adrigole",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.684475",
    "Longitude": "-9.712323",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/adrigolegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Adrigole_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Aghabullogue",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Coachford",
    "Code": "",
    "Latitude": "51.906736",
    "Longitude": "-8.786975",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/aghabulloguegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Aghabullogue_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Aghada",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Liam Ui Riain",
    "Code": "",
    "Latitude": "51.847754",
    "Longitude": "-8.193244",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/aghadagaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Aghada_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Aghinagh",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.938635",
    "Longitude": "-8.90606",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/aghinaghgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Aghinagh_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Araglen",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.206653",
    "Longitude": "-8.085511",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/araglengaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Araglen_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Argideen Rangers",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Timoleague",
    "Code": "",
    "Latitude": "51.638653",
    "Longitude": "-8.776489",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/argideenrangers",
    "Wikipedia": "https://en.wikipedia.org/wiki/Argideen_Rangers_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballinacurra",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.897048",
    "Longitude": "-8.150477",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/ballinacurragaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballinacurra_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballinascarthy",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Henry Ford Park",
    "Code": "",
    "Latitude": "51.666678",
    "Longitude": "-8.831621",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/bealnascairte",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballinascarthy_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballincollig",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.892668",
    "Longitude": "-8.588427",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/ballincolliggaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballincollig_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballinhassig",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Pitch 1",
    "Code": "",
    "Latitude": "51.811207",
    "Longitude": "-8.52916",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/ballinhassiggaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballinhassig_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballinhassig",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Pitch 2",
    "Code": "",
    "Latitude": "51.8067",
    "Longitude": "-8.53628",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/ballinhassiggaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballinhassig_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballinora GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Ballinora",
    "Code": "",
    "Latitude": "51.853758",
    "Longitude": "-8.566739",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/ballinoragaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballinora_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballinure",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.893837",
    "Longitude": "-8.395312",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballinure_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballyclough",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Dr Croke Park",
    "Code": "",
    "Latitude": "52.177393",
    "Longitude": "-8.728641",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/gaaballyclough",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballyclough_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballydesmond",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.17835",
    "Longitude": "-9.234815",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/desmonds_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballydesmond_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballygarvan",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Liam Mhic Cárthaigh",
    "Code": "",
    "Latitude": "51.824437",
    "Longitude": "-8.456339",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/ballygarvangaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballygarvan_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballygiblin",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.274232",
    "Longitude": "-8.199596",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/ballygiblingaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballygiblin_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballyhea",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.32655",
    "Longitude": "-8.6657",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/ballyheagaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballyhea_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballyhooly",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.149244",
    "Longitude": "-8.394689",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/ballyhoolygaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballyhooly_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballymartle",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.774033",
    "Longitude": "-8.490875",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/ballymartlegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballymartle_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballyphephane",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.878824",
    "Longitude": "-8.475862",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Bandon",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Charlie Hurley Park",
    "Code": "",
    "Latitude": "51.739542",
    "Longitude": "-8.742455",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/bandongaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Bandon_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Banteer",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.127921",
    "Longitude": "-8.898394",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/banteer_lyregaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Banteer_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Bantry Blues",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Wolfe Tone Park",
    "Code": "",
    "Latitude": "51.688064",
    "Longitude": "-9.447689",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/bantryblues",
    "Wikipedia": "https://en.wikipedia.org/wiki/Bantry_Blues_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Barryroe",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.605731",
    "Longitude": "-8.734892",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/barryroegaaclub",
    "Wikipedia": "https://en.wikipedia.org/wiki/Barryroe_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Béal Athan Ghaorthaidh",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.850675",
    "Longitude": "-9.23088",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/bealathanggaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Belgooly",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.733961",
    "Longitude": "-8.486781",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/belgoolygaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Belgooly_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Bere Island",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.631909",
    "Longitude": "-9.820748",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/bereislandgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Bere_Island_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Bishopstown",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.884612",
    "Longitude": "-8.521593",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/gaabishopstown",
    "Wikipedia": "https://en.wikipedia.org/wiki/Bishopstown_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Blackrock",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.893139",
    "Longitude": "-8.418286",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/RockiesCork",
    "Wikipedia": "https://en.wikipedia.org/wiki/Blackrock_National_Hurling_Club"
  },
  {
    "File": "Ireland",
    "Club": "Blarney",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.929099",
    "Longitude": "-8.561236",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/blarneygaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Blarney_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Boherbue",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.153027",
    "Longitude": "-9.07861",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/boherbuegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Boherbue_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Brian Dillons",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Tank Field",
    "Code": "",
    "Latitude": "51.942455",
    "Longitude": "-8.442596",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/briandillonsgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Brian_Dillons_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Bride Rovers",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Rathcormac",
    "Code": "",
    "Latitude": "52.072181",
    "Longitude": "-8.28581",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/brideroversgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Bride_Rovers_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Buttevant",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.236398",
    "Longitude": "-8.673356",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/buttevantgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Buttevant_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Canovee",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.902706",
    "Longitude": "-8.853864",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/canoveegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Canovee_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Carbery Rangers",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.584973",
    "Longitude": "-9.025214",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/carberygaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Carbery_Rangers_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Carbery Rangers",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Rosscarbery Pitch",
    "Code": "",
    "Latitude": "51.5757291",
    "Longitude": "-9.0369467",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/carberygaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Carbery_Rangers_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Carraig na bhFear",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.991618",
    "Longitude": "-8.475924",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/carraiggaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Carrigaline",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.811564",
    "Longitude": "-8.380157",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/carrigalinegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Carrigaline_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Carrigtwohill",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.907886",
    "Longitude": "-8.264133",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/carrig2hillgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Carrigtwohill_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Castlehaven",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Black Field, Union Hall",
    "Code": "",
    "Latitude": "51.5549859",
    "Longitude": "-9.1453135",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/castlehavengaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Castlehaven_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Castlehaven",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Moneyvollahane",
    "Code": "",
    "Latitude": "51.540758",
    "Longitude": "-9.217646",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/castlehavengaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Castlehaven_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Castlelyons",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.088251",
    "Longitude": "-8.231568",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/castlelyonsgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Castlelyons_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Castlemagner",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.1657",
    "Longitude": "-8.823181",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/castlemagnergaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Castlemagner_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Castlemartyr",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.906305",
    "Longitude": "-8.051093",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/castlemartyrgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Castlemartyr_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Castletownbere",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.643635",
    "Longitude": "-9.925679",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/ctb_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Castletownbere_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Castletownroche",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.172422",
    "Longitude": "-8.475187",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/ctr_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Castletownroche_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Charleville",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.351772",
    "Longitude": "-8.678355",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/charlevillegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Charleville_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Churchtown",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.270765",
    "Longitude": "-8.73646",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Churchtown_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Cill na Martra",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Uí Chuana",
    "Code": "",
    "Latitude": "51.899095",
    "Longitude": "-9.083582",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/gaacillnamartra?",
    "Wikipedia": "https://en.wikipedia.org/wiki/Cill_Na_Martra_GFC"
  },
  {
    "File": "Ireland",
    "Club": "CIT",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.885769",
    "Longitude": "-8.540089",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/corkitgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/MTU_Cork_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Clann na nGael",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.658278",
    "Longitude": "-9.261123",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/scorchersgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Clann_na_nGael_GAA_%28Cork%29"
  },
  {
    "File": "Ireland",
    "Club": "Clonakilty",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.621193",
    "Longitude": "-8.925509",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/clongaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Clonakilty_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Clondrohid",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.929723",
    "Longitude": "-9.019467",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/clondrohidgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Clondrohid_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Cloughduv",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.84916",
    "Longitude": "-8.783821",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/cloughduvhurlin",
    "Wikipedia": "https://en.wikipedia.org/wiki/Cloughduv_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Cloyne",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.865344",
    "Longitude": "-8.121082",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/cloynegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Cloyne_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Clyda Rovers",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.082217",
    "Longitude": "-8.629404",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/clydaroversgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Clyda_Rovers_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Cobh",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.856385",
    "Longitude": "-8.285338",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/cobhgaa15",
    "Wikipedia": "https://en.wikipedia.org/wiki/Cobh_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Courcey Rovers",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.663705",
    "Longitude": "-8.594291",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/courceysgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Courcey_Rovers_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Crosshaven",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.807416",
    "Longitude": "-8.281153",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/gaacrosshaven",
    "Wikipedia": "https://en.wikipedia.org/wiki/Crosshaven_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Cullen",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.114469",
    "Longitude": "-9.125352",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/cullengaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Cullen_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Deel Rovers",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.34111",
    "Longitude": "-8.85224",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Delanys",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.92815",
    "Longitude": "-8.471435",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/delanysgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Diarmuid O'Máthúna's",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Coppeen",
    "Code": "",
    "Latitude": "51.772895",
    "Longitude": "-8.973734",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/domathunas",
    "Wikipedia": "https://en.wikipedia.org/wiki/Diarmuid_%C3%93_Math%C3%BAna%27s_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Dohenys",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.714607",
    "Longitude": "-9.110283",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/dohenygaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Dohenys_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Doneraile",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.210808",
    "Longitude": "-8.586944",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/donerailegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Doneraile_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Donoughmore",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.989836",
    "Longitude": "-8.728621",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/DonoughmoreGaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Donoughmore_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Douglas",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.874471",
    "Longitude": "-8.442898",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/douglasgaaclub",
    "Wikipedia": "https://en.wikipedia.org/wiki/Douglas_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Dripsey",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "O'Briens Field",
    "Code": "",
    "Latitude": "51.889501",
    "Longitude": "-8.631098",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/dripseygaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Dripsey_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Dromina",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.310304",
    "Longitude": "-8.806463",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/drominagaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Dromina_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Dromtariffe",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.097898",
    "Longitude": "-8.972873",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/dromtarriffegaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Dungourney",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Jamesy Kelleher Memorial Park",
    "Code": "",
    "Latitude": "51.981524",
    "Longitude": "-8.101679",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/dungourneygaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Dungourney_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Éire Óg",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.875457",
    "Longitude": "-8.669633",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/eireogcork",
    "Wikipedia": "https://en.wikipedia.org/wiki/%C3%89ire_%C3%93g_GAA_%28Cork%29"
  },
  {
    "File": "Ireland",
    "Club": "Erin's Own",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.914485",
    "Longitude": "-8.365089",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/erinsown_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Erin%27s_Own_GAA_%28Cork%29"
  },
  {
    "File": "Ireland",
    "Club": "Fermoy",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.143969",
    "Longitude": "-8.274292",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/fermoygaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Fermoy_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Fr. O' Neills",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.905075",
    "Longitude": "-7.946555",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/froneillsgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Freemount",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.278982",
    "Longitude": "-8.884881",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/freemountgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Freemount_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Gabriel Rangers",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.566264",
    "Longitude": "-9.457202",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/gabrielrgsgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Gabriel_Rangers_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Garnish",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.605408",
    "Longitude": "-10.035986",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/garnishgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Garnish_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Glanmire",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.934896",
    "Longitude": "-8.397989",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/glanmiregaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Glanmire_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Glanworth/Harbour Rovers",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.195434",
    "Longitude": "-8.361423",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/glanworthgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Gleann na Laoi",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Ballycannon Park",
    "Code": "",
    "Latitude": "51.910339",
    "Longitude": "-8.560877",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/gleannnalaoigaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Glen Rovers",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.916453",
    "Longitude": "-8.466171",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/glenrovers_",
    "Wikipedia": "https://en.wikipedia.org/wiki/Glen_Rovers_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Glenbower Rovers",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.94039",
    "Longitude": "-8.00263",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Glenbower_Rovers_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Glengarriff",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Garbh",
    "Code": "",
    "Latitude": "51.752941",
    "Longitude": "-9.531458",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/GlenGAA",
    "Wikipedia": "https://en.wikipedia.org/wiki/Glengarriff_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Glenlara",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.206689",
    "Longitude": "-9.110175",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Glenlara_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Glenville",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.0491",
    "Longitude": "-8.423735",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/glenvillegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Glenville_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Goleen",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.498678",
    "Longitude": "-9.718241",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Goleen_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Grange",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.161714",
    "Longitude": "-8.326866",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/grange_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Grange_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Grenagh",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.010784",
    "Longitude": "-8.61323",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/grenaghgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Grenagh_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ilen Rovers",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Rath, Baltimore",
    "Code": "",
    "Latitude": "51.498446",
    "Longitude": "-9.353486",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/ilenroversgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ilen_Rovers_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ilen Rovers",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc na hAidhlean, Church Cross",
    "Code": "",
    "Latitude": "51.542486",
    "Longitude": "-9.342046",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/ilenroversgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ilen_Rovers_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Inniscarra",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.926349",
    "Longitude": "-8.672977",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/scarragaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Inniscarra_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Iveleary",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.843149",
    "Longitude": "-9.12967",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/U%C3%ADbh_Laoire_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kanturk",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.181691",
    "Longitude": "-8.900043",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/kanturkgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kanturk_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kilbrin",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.210588",
    "Longitude": "-8.837766",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/kilbringaaclub",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kilbrin_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kilbrittain",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.671567",
    "Longitude": "-8.68765",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/kilbrittaingaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kilbrittain_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kildorrery",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.244022",
    "Longitude": "-8.428417",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/kdygaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kildorrery_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Killavullen",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.148761",
    "Longitude": "-8.512461",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/killavullengaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Killavullen_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Killeagh",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Ui Chinneide",
    "Code": "",
    "Latitude": "51.940398",
    "Longitude": "-8.002623",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/killeaghgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Killeagh_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kilmacabea",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.584417",
    "Longitude": "-9.150025",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/kilmacabeagaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kilmacabea_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kilmeen/Kilbree",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Rossmore",
    "Code": "",
    "Latitude": "51.671232",
    "Longitude": "-8.995085",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/kilmeenkilbree",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Kilmichael",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.875956",
    "Longitude": "-8.985467",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/kilmichaelgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kilmichael_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kilmurry",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.834343",
    "Longitude": "-8.877102",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/kilmurrygaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kilmurry_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kilshannig",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.105169",
    "Longitude": "-8.746852",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/kilshanniggaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kilshannig_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kilworth",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Moore Park",
    "Code": "",
    "Latitude": "52.172696",
    "Longitude": "-8.240241",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/kilworthgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kilworth_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kinsale",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.710465",
    "Longitude": "-8.532468",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/KinsaleGaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kinsale_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kiskeam",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "O'Connor-McLoughlin Memorial Park",
    "Code": "",
    "Latitude": "52.178037",
    "Longitude": "-9.155935",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/kiskeamgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kiskeam_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Knocknagree",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.130033",
    "Longitude": "-9.210267",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/knocknagreegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Knocknagree_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Liscarroll",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.26029",
    "Longitude": "-8.800667",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/liscarrollgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Liscarroll_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Lisgoold",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.977783",
    "Longitude": "-8.217295",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/lisgooldclg",
    "Wikipedia": "https://en.wikipedia.org/wiki/Lisgoold_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Lismire",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.229186",
    "Longitude": "-8.947774",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/lismiregaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Lismire_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Lough Rovers",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.893433",
    "Longitude": "-8.519321",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/loughroversgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Lough_Rovers_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Lyre",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.127911",
    "Longitude": "-8.898193",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/banteer_lyregaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Lyre_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Macroom",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Bishop McEgan Park",
    "Code": "",
    "Latitude": "51.903656",
    "Longitude": "-8.962928",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/macroomgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Macroom_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Macroom",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Tom Creedon Park",
    "Code": "",
    "Latitude": "51.902335",
    "Longitude": "-8.973477",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/macroomgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Macroom_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Mallow",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.145254",
    "Longitude": "-8.611229",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/carrigoon",
    "Wikipedia": "https://en.wikipedia.org/wiki/Mallow_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Mayfield",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.910899",
    "Longitude": "-8.416721",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/mayfieldgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Mayfield_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Meelin",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.271122",
    "Longitude": "-9.023985",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/meelingaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Meelin_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Midleton",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.919859",
    "Longitude": "-8.175841",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/midletongaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Midleton_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Milford",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.341111",
    "Longitude": "-8.852239",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/milfordgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Milford_GAA_%28Cork%29"
  },
  {
    "File": "Ireland",
    "Club": "Millstreet",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Duggan Park",
    "Code": "",
    "Latitude": "52.061257",
    "Longitude": "-9.065975",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/millstreetgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Millstreet_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Mitchelstown",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.275887",
    "Longitude": "-8.281469",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/gaamitchelstown",
    "Wikipedia": "https://en.wikipedia.org/wiki/Mitchelstown_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Muintir Bháire",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.619084",
    "Longitude": "-9.526597",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Muintir_Bh%C3%A1ire_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Na Piarsaigh",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.917597",
    "Longitude": "-8.498522",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/NaPiarsaighCork",
    "Wikipedia": "https://en.wikipedia.org/wiki/Na_Piarsaigh_GAA_%28Cork%29"
  },
  {
    "File": "Ireland",
    "Club": "Naomh Abán",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.943705",
    "Longitude": "-9.160974",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/naomhabangaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Naomh_Ab%C3%A1n_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Nemo Rangers",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Trabeg",
    "Code": "",
    "Latitude": "51.875648",
    "Longitude": "-8.451202",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/nemorangersgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Nemo_Rangers_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Newcestown",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.781081",
    "Longitude": "-8.863664",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/newcestowngaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Newcestown_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Newmarket",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.213183",
    "Longitude": "-8.98272",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/newmarketgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Newmarket_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Newtownshandrum",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.345152",
    "Longitude": "-8.769575",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/Newtownshandrum",
    "Wikipedia": "https://en.wikipedia.org/wiki/Newtownshandrum_GAA"
  },
  {
    "File": "Ireland",
    "Club": "O Donovan Rossa",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.554668",
    "Longitude": "-9.271324",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/rossagaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/O%27Donovan_Rossa_GAA_%28Cork%29"
  },
  {
    "File": "Ireland",
    "Club": "Passage West",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.866234",
    "Longitude": "-8.345023",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/passagegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Passage_West_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Randal Óg",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Bunanumera",
    "Code": "",
    "Latitude": "51.708163",
    "Longitude": "-9.029678",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Randal_%C3%93g_CLG"
  },
  {
    "File": "Ireland",
    "Club": "Rathpeacon",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.937159",
    "Longitude": "-8.485368",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/rathpeacongaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Redmonds",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Uí Laoire",
    "Code": "",
    "Latitude": "51.854544",
    "Longitude": "-8.490205",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Redmonds_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Rochestown",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.872988",
    "Longitude": "-8.376033",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/rocogaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Rochestown_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Rockchapel",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.291442",
    "Longitude": "-9.167349",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/rockchapelgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Rockchapel_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Russell Rovers",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.853519",
    "Longitude": "-8.036676",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/rovers_abu",
    "Wikipedia": "https://en.wikipedia.org/wiki/Russell_Rovers_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Sarsfields",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.928283",
    "Longitude": "-8.387852",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/SarsfieldsCork",
    "Wikipedia": "https://en.wikipedia.org/wiki/Sarsfields_GAA_%28Cork%29"
  },
  {
    "File": "Ireland",
    "Club": "Shamrocks",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.830179",
    "Longitude": "-8.357598",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/gaashamrocks",
    "Wikipedia": "https://en.wikipedia.org/wiki/Shamrocks_GAA_%28Cork%29"
  },
  {
    "File": "Ireland",
    "Club": "Shanballymore",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.219178",
    "Longitude": "-8.478217",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/sbmgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Shanballymore_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Catherine's",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.058854",
    "Longitude": "-8.099411",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/stcatherinesgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Catherine%27s_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Colum's",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.742912",
    "Longitude": "-9.412676",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/columsgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Colum%27s_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Finbarr's",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Neenan Park",
    "Code": "",
    "Latitude": "51.877578",
    "Longitude": "-8.498696",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/the_barrs",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Finbarr%27s_National_Hurling_%26_Football_Club"
  },
  {
    "File": "Ireland",
    "Club": "St. Ita's",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.909425",
    "Longitude": "-7.900633",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/stitasgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Ita%27s_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. James'",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.574222",
    "Longitude": "-8.907054",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/stjamesgaa_cork",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. John's",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.06684429",
    "Longitude": "-9.06181278",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://x.com/stjohnsgaaclub",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_John%27s_GAA_%28Cork%29"
  },
  {
    "File": "Ireland",
    "Club": "St. Mary's",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.73542",
    "Longitude": "-8.937359",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/SaintMarysGAA",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Mary%27s_GAA_%28Carbery%29"
  },
  {
    "File": "Ireland",
    "Club": "St. Michael's",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.889803",
    "Longitude": "-8.393282",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/stmichaelscork",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Michael%27s_Gaelic_Football_Club"
  },
  {
    "File": "Ireland",
    "Club": "St. Nicholas",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Glen Field",
    "Code": "",
    "Latitude": "51.916969",
    "Longitude": "-8.462179",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/nicksgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Oliver Plunkett's",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Uinsinn",
    "Code": "",
    "Latitude": "51.709468",
    "Longitude": "-8.897589",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/oliverplunketts",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Vincent's",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.911086",
    "Longitude": "-8.496097",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/stvincentscork",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Vincent%27s_GAA_%28Cork%29"
  },
  {
    "File": "Ireland",
    "Club": "Tadhg Mac Carthaigh",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.653191",
    "Longitude": "-9.340664",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/tadhgmacgaacork",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Tracton",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.761711",
    "Longitude": "-8.380442",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/tractongaaclub",
    "Wikipedia": "https://en.wikipedia.org/wiki/Tracton_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Tullylease",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.312874",
    "Longitude": "-8.936793",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/tullylease_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Tullylease_GAA"
  },
  {
    "File": "Ireland",
    "Club": "UCC",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Curraheen (The Old Farm)",
    "Code": "",
    "Latitude": "51.8760362",
    "Longitude": "-8.5438249",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/ucc_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/UCC_GAA"
  },
  {
    "File": "Ireland",
    "Club": "UCC",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "The Mardyke",
    "Code": "",
    "Latitude": "51.895393",
    "Longitude": "-8.499012",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/ucc_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/UCC_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Urhan",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc na hAoraí",
    "Code": "",
    "Latitude": "51.693214",
    "Longitude": "-9.951671",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/urhan4",
    "Wikipedia": "https://en.wikipedia.org/wiki/Urhan_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Valley Rovers",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.785103",
    "Longitude": "-8.691404",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/valleyroversgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Valley_Rovers_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Watergrasshill",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.021206",
    "Longitude": "-8.337165",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/watergrasshillg",
    "Wikipedia": "https://en.wikipedia.org/wiki/Watergrasshill_GAA"
  },
  {
    "File": "Ireland",
    "Club": "White's Cross",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.953689",
    "Longitude": "-8.44031",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/whitescrossgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/White%27s_Cross_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Whitechurch",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.982503",
    "Longitude": "-8.531731",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/whitechurchgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Whitechurch_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Youghal",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Magners Hill",
    "Code": "",
    "Latitude": "51.952536",
    "Longitude": "-7.860442",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/youghalgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Youghal_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Whitegate",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.951474",
    "Longitude": "-8.375297",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/whitegategaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Whitegate_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Banner",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.839502",
    "Longitude": "-9.020863",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/bannergaaenni",
    "Wikipedia": "https://en.wikipedia.org/wiki/The_Banner_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Scariff",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.91242",
    "Longitude": "-8.533397",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/scariff",
    "Wikipedia": "https://en.wikipedia.org/wiki/Scariff_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Tubber",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.01481",
    "Longitude": "-8.910104",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/tubbergaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Tubber_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Tulla",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc an Dalaigh",
    "Code": "",
    "Latitude": "52.861478",
    "Longitude": "-8.744131",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/tullagaaclub",
    "Wikipedia": "https://en.wikipedia.org/wiki/Tulla_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Broadford",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.803357",
    "Longitude": "-8.634306",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/broadfordgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Broadford_GAA_%28Clare%29"
  },
  {
    "File": "Ireland",
    "Club": "Ballyea",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.787129",
    "Longitude": "-9.028792",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/ballyea_club",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballyea_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballyvaughan-Fanore",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.113502",
    "Longitude": "-9.154916",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Killanena",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.994907",
    "Longitude": "-8.733923",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/killanenagaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Killanena_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kildysart",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.666154",
    "Longitude": "-9.111424",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/kildysartgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Kilfenora",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.994518",
    "Longitude": "-9.234056",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/kilfenoragaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Killimer",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.626305",
    "Longitude": "-9.390048",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/killimergaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Kilmaley",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.813996",
    "Longitude": "-9.096353",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/kilmaleygaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kilmaley_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kilmihil",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.723052",
    "Longitude": "-9.316924",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/kilmihilgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kilmihil_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kilmurry Ibrickane",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.814388",
    "Longitude": "-9.454078",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/kibgaaclub",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kilmurry_Ibrickane_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kilrush Shamrocks",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "The Cricket Field",
    "Code": "",
    "Latitude": "52.629429",
    "Longitude": "-9.472197",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/kilrushshamrock",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Clarecastle",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.816042",
    "Longitude": "-8.972481",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/ClarecastleGAA",
    "Wikipedia": "https://en.wikipedia.org/wiki/Clarecastle_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Clooney Quin",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.836566",
    "Longitude": "-8.856063",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/clonbony_gaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Clonboney",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.797771",
    "Longitude": "-9.413488",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/clooneyquingaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Clondegad",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.720212",
    "Longitude": "-9.06338",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/clondegadf",
    "Wikipedia": "https://en.wikipedia.org/wiki/Clondegad_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Clonlara",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.719602",
    "Longitude": "-8.5576",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/clonlaragaaclub",
    "Wikipedia": "https://en.wikipedia.org/wiki/Clonlara_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Newmarket on Fergus",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.760345",
    "Longitude": "-8.889406",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/nofgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Newmarket-on-Fergus_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Corofin",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.944964",
    "Longitude": "-9.066768",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/corofingaaclub",
    "Wikipedia": "https://en.wikipedia.org/wiki/Corofin_GAA_%28Clare%29"
  },
  {
    "File": "Ireland",
    "Club": "Cratloe",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.696227",
    "Longitude": "-8.761287",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/cratloegaaclub",
    "Wikipedia": "https://en.wikipedia.org/wiki/Cratloe_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Crusheen",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.936025",
    "Longitude": "-8.898595",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/crusheengaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Crusheen_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Cooraclare",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.696885",
    "Longitude": "-9.426514",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/cooraclaregaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Cooraclare_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Coolmeen",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.666744",
    "Longitude": "-9.222128",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/coolmeengaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Coolmeen_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Sixmilebridge",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.744651",
    "Longitude": "-8.777834",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/smbgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Sixmilebridge_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Doonbeg",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Uí Seancháin",
    "Code": "",
    "Latitude": "52.725708",
    "Longitude": "-9.546306",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/doonbegfootball",
    "Wikipedia": "https://en.wikipedia.org/wiki/Doonbeg_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Inagh Kilnamona",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Innagh",
    "Code": "",
    "Latitude": "52.877755",
    "Longitude": "-9.181087",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/inagh_kilnamona",
    "Wikipedia": "https://en.wikipedia.org/wiki/Inagh-Kilnamona_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Éire Óg GAA, Ennis",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.831874",
    "Longitude": "-8.990826",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/eireoginisgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Feakle",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.923569",
    "Longitude": "-8.650527",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/feaklegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Feakle_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Shannon Gaels",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.638657",
    "Longitude": "-9.246618",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/gaeilnasionna",
    "Wikipedia": "https://en.wikipedia.org/wiki/Shannon_Gaels_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ennistymon",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.935971",
    "Longitude": "-9.31969",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/inisdiomainpeil",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ennistymon_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Lissycasey",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.739563",
    "Longitude": "-9.17533",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/lissycasey_gaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Liscannor",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.939438",
    "Longitude": "-9.446972",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/liscannorgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Bodyke",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.923642",
    "Longitude": "-8.650444",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/bodykegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Bodyke_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Smith O'Briens",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.803281",
    "Longitude": "-8.446618",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/sobgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Smith_O%27Brien%27s_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Moy",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.906748",
    "Longitude": "-9.336583",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/moyladiesgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Michael Cusacks",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.079855",
    "Longitude": "-9.073461",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/mlcusacksclare",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Meelick",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.699415",
    "Longitude": "-8.65135",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/meelickgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "O'Callaghans Mills",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.803449",
    "Longitude": "-8.755746",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/ocmillsgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Breckan's, Lisdoonvarna",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "53.026547",
    "Longitude": "-9.292074",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/stbreckansgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Naomh Eoin",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.59626",
    "Longitude": "-9.779033",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/naomheoingaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Joseph's, Milltown Malbay",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.852299",
    "Longitude": "-9.408158",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/miltowngaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Joseph%27s%2C_Miltown_Malbay_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Sennan's, Kilkee",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.679013",
    "Longitude": "-9.639892",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Joseph's, Doora Barefield",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.842715",
    "Longitude": "-8.905845",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/doorabarefield",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Parteen",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.67986",
    "Longitude": "-8.602294",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/gaaparteen",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ruan",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.93292",
    "Longitude": "-8.987153",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/ruangaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ruan_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ogonnelloe",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.872231",
    "Longitude": "-8.457457",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/ogonnelloehc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "O'Currys",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.621806",
    "Longitude": "-9.645829",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/ocurrysgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Wofle Tones Shannon",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.703772",
    "Longitude": "-8.868445",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Clare",
    "County": "Clare",
    "Twitter": "https://twitter.com/wtnsgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Abbey Sarsfields",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Bishop's Fields",
    "Code": "",
    "Latitude": "52.683227",
    "Longitude": "-8.616133",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/abbeysarsfields",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Adare",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.564104",
    "Longitude": "-8.807037",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/adaregaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Adare_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ahane",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Mackey Park",
    "Code": "",
    "Latitude": "52.691457",
    "Longitude": "-8.516196",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/ahanegaaclub",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ahane_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Askeaton",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.599325",
    "Longitude": "-8.967631",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Askeaton_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Athea",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc na nGael",
    "Code": "",
    "Latitude": "52.463088",
    "Longitude": "-9.272761",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/atheagaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ballinacurra Gaels",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.644096",
    "Longitude": "-8.636507",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/ballinacurrag",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ballybricken/Bohermore",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.550429",
    "Longitude": "-8.497288",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ballybrown",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.63149",
    "Longitude": "-8.728777",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/ballybrowngaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballybrown_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballybrown",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.636133",
    "Longitude": "-8.732731",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/ballybrowngaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballybrown_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballylanders",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.370652",
    "Longitude": "-8.351857",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/gaaballylanders",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballylanders_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballysteen",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.64672",
    "Longitude": "-8.937945",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/ballysteengaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballysteen_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Banogue",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.477886",
    "Longitude": "-8.682792",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/banoguegaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Blackrock",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.362586",
    "Longitude": "-8.472891",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/blackrockgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Blackrock_GAA_%28Limerick%29"
  },
  {
    "File": "Ireland",
    "Club": "Bruff",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.475041",
    "Longitude": "-8.540952",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/_bruffgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Bruff_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Bruree",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.421466",
    "Longitude": "-8.649488",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/brureegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Bruree_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Caherline",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.587916",
    "Longitude": "-8.465625",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/caherlinegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Caherline_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Camogue Rovers",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.510576",
    "Longitude": "-8.616398",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Cappagh",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.552233",
    "Longitude": "-8.937941",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Cappamore",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.622188",
    "Longitude": "-8.339085",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/cappamoregaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Cappamore_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Castletown/Ballyagran",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.401517",
    "Longitude": "-8.78527",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/ctbgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Claughaun",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.659329",
    "Longitude": "-8.594507",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/claughaungaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Claughaun_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Crecora/Manister",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.57293",
    "Longitude": "-8.664841",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/crecoragaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Crecora/Manister_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Croagh/Kilfinny",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc an Chrocaigh",
    "Code": "",
    "Latitude": "52.532638",
    "Longitude": "-8.860404",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/croaghkilfnygaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Croom",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Na nGael Cromadh",
    "Code": "",
    "Latitude": "52.513385",
    "Longitude": "-8.729373",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/croomgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Croom_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Doon",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.601038",
    "Longitude": "-8.246355",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/doongaaclub",
    "Wikipedia": "https://en.wikipedia.org/wiki/Doon_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Dromcollogher/Broadford",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.344037",
    "Longitude": "-8.917008",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/drombroafordgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Dromcollogher/Broadford_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Dromin/Athlacca",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.456194",
    "Longitude": "-8.64563",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/drominathlaccag",
    "Wikipedia": "https://en.wikipedia.org/wiki/Dromin/Athlacca_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Effin",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.358089",
    "Longitude": "-8.610064",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/effingaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Effin_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Fedamore",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.543534",
    "Longitude": "-8.612281",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/fedamoregaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Fedamore_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Feenagh/Kilmeedy",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.393035",
    "Longitude": "-8.897506",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/feenaghkilmeedy",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Feohanagh/Castlemahon",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Quaid Park",
    "Code": "",
    "Latitude": "52.412102",
    "Longitude": "-8.969642",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Fr. Casey's",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.388644",
    "Longitude": "-9.305291",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/frcaseysgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Galbally",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.399277",
    "Longitude": "-8.296198",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/galbally_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Galbally_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Galtee Gaels",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.300396",
    "Longitude": "-8.213837",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/galtee_gaelsgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Garryspillane",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Dooley Park",
    "Code": "",
    "Latitude": "52.433272",
    "Longitude": "-8.415793",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/garryspillanega",
    "Wikipedia": "https://en.wikipedia.org/wiki/Garryspillane_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Gerald Griffins",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.562911",
    "Longitude": "-9.167359",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/geraldgriffins",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Glenroe",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.323748",
    "Longitude": "-8.412801",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/glenroegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Glenroe_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Glin",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.563879",
    "Longitude": "-9.280769",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/glingaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Glin_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Granagh/Ballingarry",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.472178",
    "Longitude": "-8.858272",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/gbgaaclublimk",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Hospital/Herbertstown",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. John's Park",
    "Code": "",
    "Latitude": "52.477125",
    "Longitude": "-8.434391",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/hhgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Kidimo",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.614729",
    "Longitude": "-8.809993",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/kenrydimo",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Killeedy",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.377169",
    "Longitude": "-9.042471",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/killeedygaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Killeedy_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kilmallock",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.39793",
    "Longitude": "-8.573637",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/kilmallockgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kilmallock_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kilteely/Dromkeen",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.524525",
    "Longitude": "-8.392413",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/kdgaa/",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Knockaderry",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.462629",
    "Longitude": "-8.968516",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/knockaderrygaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Knockaderry_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Knockainey",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.474181",
    "Longitude": "-8.494795",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Knockainey_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Knockane",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.369068",
    "Longitude": "-9.147217",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Monagea",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc na nGael",
    "Code": "",
    "Latitude": "52.417297",
    "Longitude": "-9.091611",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/monageaclg",
    "Wikipedia": "https://en.wikipedia.org/wiki/Monagea_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Monaleen",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.655666",
    "Longitude": "-8.554464",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/monaleengaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Monaleen_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Mountcollins",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.341461",
    "Longitude": "-8.978799",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/gaamountcollins",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Mungret/St. Pauls",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.634612",
    "Longitude": "-8.688348",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/mungretgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Mungret/St._Paul%27s_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Murroe/Boher",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.651743",
    "Longitude": "-8.4002",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/murroeboher",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Na Piarsaigh",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc na Piarsaigh",
    "Code": "",
    "Latitude": "52.669826",
    "Longitude": "-8.67014",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/NapGAA",
    "Wikipedia": "https://en.wikipedia.org/wiki/Na_Piarsaigh_GAA_%28Limerick%29"
  },
  {
    "File": "Ireland",
    "Club": "Newcastle West",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.452654",
    "Longitude": "-9.06543",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/ncwgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Newcastle_West_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Old Christians",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.645304",
    "Longitude": "-8.624068",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/ocgaaclub",
    "Wikipedia": "https://en.wikipedia.org/wiki/Old_Christians_GAA_Club"
  },
  {
    "File": "Ireland",
    "Club": "Oola",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.528807",
    "Longitude": "-8.263835",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/oolagaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Oola_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Pallasgreen",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.566049",
    "Longitude": "-8.338242",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/pallasgreengaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Pallasgreen_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Pallaskenry",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.641335",
    "Longitude": "-8.865871",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/kenrydimo",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kildimo-Pallaskenry_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Patrickswell",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Antóin Ó Briain",
    "Code": "",
    "Latitude": "52.598954",
    "Longitude": "-8.714449",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/patrickswellgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Patrickswell_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Mary's Sean Finns, Rathkeale",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.527796",
    "Longitude": "-8.948941",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/rathkealegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Rathkeale_GAA"
  },
  {
    "File": "Ireland",
    "Club": "South Liberties",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Dooley Park",
    "Code": "",
    "Latitude": "52.600427",
    "Longitude": "-8.604813",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/southlibertiesg",
    "Wikipedia": "https://en.wikipedia.org/wiki/South_Liberties_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Kieran's",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.529711",
    "Longitude": "-9.015052",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/naomhciarain",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Patrick's",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.669588",
    "Longitude": "-8.597203",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/StPatsGAALimk",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Senan's",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Naomh Seanáin",
    "Code": "",
    "Latitude": "52.608142",
    "Longitude": "-9.103945",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/stsenansgaa1",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Senan%27s_GAA_%28Limerick%29"
  },
  {
    "File": "Ireland",
    "Club": "Staker Wallace",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.408565",
    "Longitude": "-8.507598",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/stakergaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Templeglantine",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.400694",
    "Longitude": "-9.16727",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/glantinegaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Tournafulla",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.369074",
    "Longitude": "-9.147321",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Limerick",
    "County": "Limerick",
    "Twitter": "https://twitter.com/tournafullagaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Tournafulla_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Dr. Crokes",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.067234",
    "Longitude": "-9.504002",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/drcrokesgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "An Ghaeltacht",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Gallarus",
    "Code": "",
    "Latitude": "52.181509",
    "Longitude": "-10.364593",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/anghaeltacht",
    "Wikipedia": "https://en.wikipedia.org/wiki/An_Ghaeltacht_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Rathmore",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.064615",
    "Longitude": "-9.239939",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/rathmoregaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Rathmore_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Glenbeigh-Glencar",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Paírc na nGael",
    "Code": "",
    "Latitude": "52.058259",
    "Longitude": "-9.936538",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/gbeighgcargaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Glenbeigh-Glencar_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Templenoe",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.861086",
    "Longitude": "-9.688363",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/templenoeabu",
    "Wikipedia": "https://en.wikipedia.org/wiki/Templenoe_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Dingle",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.137344",
    "Longitude": "-10.267517",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/DingleGAA",
    "Wikipedia": "https://en.wikipedia.org/wiki/Dingle_GAA"
  },
  {
    "File": "Ireland",
    "Club": "John Mitchels",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.247736",
    "Longitude": "-9.676128",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/johnmitchelsga1",
    "Wikipedia": "https://en.wikipedia.org/wiki/John_Mitchels_GAA_%28Kerry%29"
  },
  {
    "File": "Ireland",
    "Club": "Kerins O'Rahilly's",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.266946",
    "Longitude": "-9.71584",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/korgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kerins_O%27Rahilly%27s_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Mary's GAA, Cahirciveen",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Con Keating Park",
    "Code": "",
    "Latitude": "51.945362",
    "Longitude": "-10.234172",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/stmarysgaaclub",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Mary%27s_GAA_%28Kerry%29"
  },
  {
    "File": "Ireland",
    "Club": "Milltown/Castlemaine",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc de Búrca",
    "Code": "",
    "Latitude": "52.150259",
    "Longitude": "-9.716193",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/milltown_castle",
    "Wikipedia": "https://en.wikipedia.org/wiki/Milltown/Castlemaine_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Austin Stacks",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Connolly Park",
    "Code": "",
    "Latitude": "52.276604",
    "Longitude": "-9.712997",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/austinstacksgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Austin_Stacks_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Castleisland Desmonds",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.23776",
    "Longitude": "-9.464165",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/desmonds_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Castleisland_Desmonds_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Killarney Legion",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.072615",
    "Longitude": "-9.508591",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/legiongaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Killarney_Legion_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Beaufort",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.067931",
    "Longitude": "-9.639333",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/liosaphuca",
    "Wikipedia": "https://en.wikipedia.org/wiki/Beaufort_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Spa",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.070181",
    "Longitude": "-9.467903",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/gaa_spa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Spa_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kenmare Shamrocks",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.880603",
    "Longitude": "-9.569415",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/kenmaregaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kenmare_Shamrocks_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Currow",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.180016",
    "Longitude": "-9.507727",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/currowgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Currow_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Glenflesk",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.014838",
    "Longitude": "-9.362016",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/glenfleskgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Glenflesk_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ardfert",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.331234",
    "Longitude": "-9.778167",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/ardfertgaakerry",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ardfert_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Brendan's Hurling, Ardfert",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "Hurling",
    "Latitude": "52.33123",
    "Longitude": "-9.77817",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/ardfertgaakerry",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ardfert_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kilcummin",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.097933",
    "Longitude": "-9.475604",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/kilcummingaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kilcummin_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Listowel Emmets",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.446928",
    "Longitude": "-9.477364",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/emmetsclg",
    "Wikipedia": "https://en.wikipedia.org/wiki/Listowel_Emmets_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Waterville",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.825796",
    "Longitude": "-10.161726",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/watervillegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Waterville_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Pats Blennerville",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.253721",
    "Longitude": "-9.734663",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/stpatsgaaclub",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Listry",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.104483",
    "Longitude": "-9.631897",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/listrygaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Listry_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballymacelligott",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.252347",
    "Longitude": "-9.597974",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/ballymac_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballymacelligott_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Na Gaeil",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.282301",
    "Longitude": "-9.689736",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/nagaeilgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Na_Gaeil_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Dromid Pearses",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.894283",
    "Longitude": "-10.088164",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/dromidgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Dromid_Pearses_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Finuge",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.424429",
    "Longitude": "-9.532278",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/finugegaaclub",
    "Wikipedia": "https://en.wikipedia.org/wiki/Finuge_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Laune Rangers",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.10535",
    "Longitude": "-9.800296",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/launerangers",
    "Wikipedia": "https://en.wikipedia.org/wiki/Laune_Rangers_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Annascaul",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.153066",
    "Longitude": "-10.047685",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/annascaulgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Annascaul_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Brosna",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.310105",
    "Longitude": "-9.260752",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/BROSNAGAA",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Senan's",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Jackie Finnerty Park",
    "Code": "",
    "Latitude": "52.395871",
    "Longitude": "-9.515667",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/stsenansgaa1",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Senan%27s_GAA_%28Kerry%29"
  },
  {
    "File": "Ireland",
    "Club": "Ballydonoghue",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.485994",
    "Longitude": "-9.520907",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/ballydonoghue",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballydonoghue_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Gneeveguilla",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.119719",
    "Longitude": "-9.271893",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/gneeveguillagaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Gneeveguilla_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Fossa",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.069074",
    "Longitude": "-9.540538",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/FossaGaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Fossa_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St Michael's-Foilmore",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.829137",
    "Longitude": "-10.268529",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Keel",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.172486",
    "Longitude": "-9.773946",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/keelgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Lispole",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Seán Ui Baróid",
    "Code": "",
    "Latitude": "52.142837",
    "Longitude": "-10.144581",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/liospoil_clg",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Skelligs Rangers",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.880861",
    "Longitude": "-10.370082",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/skelligrgsgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Castlegregory",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.259016",
    "Longitude": "-10.01499",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/castlegregorgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Castlegregory_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Firies",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.173213",
    "Longitude": "-9.547032",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/firiesgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Firies_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Renard",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.929805",
    "Longitude": "-10.251918",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/renard_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Renard_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Tarbert",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.570722",
    "Longitude": "-9.373495",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/TarbertGAAClub",
    "Wikipedia": "https://en.wikipedia.org/wiki/Tarbert_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Beale",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.50562",
    "Longitude": "-9.671694",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/bealegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Beale_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Duagh",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.412218",
    "Longitude": "-9.389008",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/duaghgaa1",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Sneem",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.84283",
    "Longitude": "-9.901366",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Sneem_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Derrynane",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.765023",
    "Longitude": "-10.104119",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/doirefhionanclg",
    "Wikipedia": "https://en.wikipedia.org/wiki/Derrynane_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Scartaglin",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.185943",
    "Longitude": "-9.416772",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Scartaglin_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Cordal",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.221787",
    "Longitude": "-9.382273",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/cordalgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ballylongford",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.544152",
    "Longitude": "-9.474968",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/ballylongfordg",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballylongford_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Churchill",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.27494",
    "Longitude": "-9.784067",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/gaachurchill",
    "Wikipedia": "https://en.wikipedia.org/wiki/Churchill_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Cromane",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.103138",
    "Longitude": "-9.899237",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/realtnamaraclg",
    "Wikipedia": "https://en.wikipedia.org/wiki/Cromane_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Moyvane",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.49912",
    "Longitude": "-9.377233",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/moyvanegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Moyvane_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kilgarvan",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Clontoo",
    "Code": "",
    "Latitude": "51.904568",
    "Longitude": "-9.452148",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/kilgarvangaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kilgarvan_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Valentia Young Islanders",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.905559",
    "Longitude": "-10.337565",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/valentiagaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Valentia_Young_Islanders"
  },
  {
    "File": "Ireland",
    "Club": "Asdee",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.540838",
    "Longitude": "-9.55145",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/asdee_gaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Tuosist",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "51.765117",
    "Longitude": "-9.765715",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/tuosistgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Tuosist_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballyduff",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.451307",
    "Longitude": "-9.66994",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/ballyduffgaa1",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballyduff_GAA_%28Kerry%29"
  },
  {
    "File": "Ireland",
    "Club": "Knocknagoshel",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.323099",
    "Longitude": "-9.383051",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/knockgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Lixnaw GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.402527",
    "Longitude": "-9.635222",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/LixnawGAA",
    "Wikipedia": "https://en.wikipedia.org/wiki/Lixnaw_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Clounmacon",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.481912",
    "Longitude": "-9.423117",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Clounmacon_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kilmoyley GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.360755",
    "Longitude": "-9.772962",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/kilmoyleyhc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kilmoyley_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Causeway GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "Hurling",
    "Latitude": "52.410618",
    "Longitude": "-9.736352",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/causewayhurling",
    "Wikipedia": "https://en.wikipedia.org/wiki/Causeway_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Abbeydorney",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.348735",
    "Longitude": "-9.691046",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/odorneygaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Abbeydorney_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Crotta O'Neills",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.36276",
    "Longitude": "-9.63411",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/crottagaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Crotta_O%27Neill%27s"
  },
  {
    "File": "Ireland",
    "Club": "Ballyheigue",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "John Joe O'Sullivan Park",
    "Code": "",
    "Latitude": "52.386642",
    "Longitude": "-9.831511",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/ballyheiguegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballyheigue_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St Patricks East Kerry",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "52.0698183",
    "Longitude": "-9.5673795",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Kerry",
    "County": "Kerry",
    "Twitter": "https://twitter.com/patseastkerry",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Monaghan Centre of Excellence",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Cloghan",
    "Code": "",
    "Latitude": "54.1583951",
    "Longitude": "-6.8044747",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Monaghan",
    "County": "Monaghan",
    "Twitter": "https://twitter.com/monaghangaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Aghabog Emmets",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Emmet",
    "Code": "",
    "Latitude": "54.17118",
    "Longitude": "-7.04587",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Monaghan",
    "County": "Monaghan",
    "Twitter": "https://twitter.com/aghaboggfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Aughnamullen Sarsfields",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Sháirséil",
    "Code": "",
    "Latitude": "54.06228",
    "Longitude": "-6.81379",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Monaghan",
    "County": "Monaghan",
    "Twitter": "https://twitter.com/aughnamullengaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ballybay Pearse Brothers",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Pearse Park",
    "Code": "",
    "Latitude": "54.126254",
    "Longitude": "-6.87646",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Monaghan",
    "County": "Monaghan",
    "Twitter": "https://twitter.com/PearseBrothers",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballybay_Pearse_Brothers_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Blackhill Emeralds",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc na Smaragaidí",
    "Code": "",
    "Latitude": "54.111566",
    "Longitude": "-6.76232",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Monaghan",
    "County": "Monaghan",
    "Twitter": "https://twitter.com/blackhillgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Carrickmacross Emmets",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Emmet Park",
    "Code": "",
    "Latitude": "53.985069",
    "Longitude": "-6.72126",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Monaghan",
    "County": "Monaghan",
    "Twitter": "https://twitter.com/carrickemmets",
    "Wikipedia": "https://en.wikipedia.org/wiki/Carrickmacross_Emmets_GAC"
  },
  {
    "File": "Ireland",
    "Club": "Castleblayney Faughs",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St Mary's Park",
    "Code": "",
    "Latitude": "54.1127",
    "Longitude": "-6.731086",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Monaghan",
    "County": "Monaghan",
    "Twitter": "https://twitter.com/BlayneyFaughs",
    "Wikipedia": "https://en.wikipedia.org/wiki/Castleblayney_Faughs_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Clones",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St Tiernach's Park",
    "Code": "",
    "Latitude": "54.18566",
    "Longitude": "-7.23398",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Monaghan",
    "County": "Monaghan",
    "Twitter": "https://twitter.com/ClonesGAA",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Tiernach%27s_Park"
  },
  {
    "File": "Ireland",
    "Club": "Clontibret O'Neills",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Uí Néill",
    "Code": "",
    "Latitude": "54.21854",
    "Longitude": "-6.844842",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Monaghan",
    "County": "Monaghan",
    "Twitter": "https://twitter.com/clontibretclg",
    "Wikipedia": "https://en.wikipedia.org/wiki/Clontibret_O%27Neills_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Corduff Gaels",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Eoghain Uí Mhearáin",
    "Code": "",
    "Latitude": "54.010197",
    "Longitude": "-6.82086",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Monaghan",
    "County": "Monaghan",
    "Twitter": "https://twitter.com/corduffgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Cremartin Shamrocks",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Na Seamróige",
    "Code": "",
    "Latitude": "54.160081",
    "Longitude": "-6.81535",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Monaghan",
    "County": "Monaghan",
    "Twitter": "https://twitter.com/cremartingaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Currin Sons of St Patrick",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Churraichín",
    "Code": "",
    "Latitude": "54.130753",
    "Longitude": "-7.25743",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Monaghan",
    "County": "Monaghan",
    "Twitter": "https://twitter.com/curringaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Donaghmoyne Fontenoys",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Fontenoy",
    "Code": "",
    "Latitude": "54.01472",
    "Longitude": "-6.69943",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Monaghan",
    "County": "Monaghan",
    "Twitter": "https://twitter.com/DonaghmoyneGaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Doohamlet O'Neills",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Uí Néill",
    "Code": "",
    "Latitude": "54.130414",
    "Longitude": "-6.81889",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Monaghan",
    "County": "Monaghan",
    "Twitter": "https://twitter.com/DoohamletGFC",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Drumhowan Geraldines",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Mhic Eoin",
    "Code": "",
    "Latitude": "54.104848",
    "Longitude": "-6.82205",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Monaghan",
    "County": "Monaghan",
    "Twitter": "https://twitter.com/DrumhowanGAA",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Eire Og Na Mullai",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Railway Park",
    "Code": "",
    "Latitude": "54.222956",
    "Longitude": "-7.098112",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Monaghan",
    "County": "Monaghan",
    "Twitter": "https://twitter.com/oggfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Emyvale",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Naomh Oilibhéar Pluincéid",
    "Code": "",
    "Latitude": "54.33111",
    "Longitude": "-6.947877",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Monaghan",
    "County": "Monaghan",
    "Twitter": "https://twitter.com/emyvalegaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Inniskeen Grattans",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Mhig Reachtain",
    "Code": "",
    "Latitude": "53.992989",
    "Longitude": "-6.604538",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Monaghan",
    "County": "Monaghan",
    "Twitter": "https://twitter.com/inniskeengaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Inniskeen_Grattans_GAC"
  },
  {
    "File": "Ireland",
    "Club": "Kileevan Sarsfields",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Sarsfields Park",
    "Code": "",
    "Latitude": "54.164385",
    "Longitude": "-7.142703",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Monaghan",
    "County": "Monaghan",
    "Twitter": "https://twitter.com/killeevangaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Killanny Geraldines",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Eanna",
    "Code": "",
    "Latitude": "53.963288",
    "Longitude": "-6.64651",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Monaghan",
    "County": "Monaghan",
    "Twitter": "https://twitter.com/killannygfc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Killanny_Geraldines_GAC"
  },
  {
    "File": "Ireland",
    "Club": "Latton O'Rahillys",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc O'Raithile",
    "Code": "",
    "Latitude": "54.07299",
    "Longitude": "-6.94884",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Monaghan",
    "County": "Monaghan",
    "Twitter": "https://twitter.com/LattonGAA",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Magheracloone Mitchells",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Kevin O'Reilly Park (Old)",
    "Code": "",
    "Latitude": "53.94452",
    "Longitude": "-6.769294",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Monaghan",
    "County": "Monaghan",
    "Twitter": "https://twitter.com/mitchellsgaa_",
    "Wikipedia": "https://en.wikipedia.org/wiki/Magheracloone_Mitchells_GAC"
  },
  {
    "File": "Ireland",
    "Club": "Magheracloone Mitchells",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Kevin O'Reilly Park",
    "Code": "",
    "Latitude": "53.93887",
    "Longitude": "-6.771229",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Monaghan",
    "County": "Monaghan",
    "Twitter": "https://twitter.com/mitchellsgaa_",
    "Wikipedia": "https://en.wikipedia.org/wiki/Magheracloone_Mitchells_GAC"
  },
  {
    "File": "Ireland",
    "Club": "Monaghan Harps",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Gavan Duffy Park",
    "Code": "",
    "Latitude": "54.249193",
    "Longitude": "-6.96148",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Monaghan",
    "County": "Monaghan",
    "Twitter": "https://twitter.com/monaghanharps",
    "Wikipedia": "https://en.wikipedia.org/wiki/Monaghan_Harps_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Oram Sarsfields",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Pádraig",
    "Code": "",
    "Latitude": "54.146262",
    "Longitude": "-6.6955",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Monaghan",
    "County": "Monaghan",
    "Twitter": "https://twitter.com/oramgfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Rockcorry",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Muire",
    "Code": "",
    "Latitude": "54.119202",
    "Longitude": "-7.012869",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Monaghan",
    "County": "Monaghan",
    "Twitter": "https://twitter.com/rockcorrygaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Scotstown",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Muire",
    "Code": "",
    "Latitude": "54.282",
    "Longitude": "-7.06101",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Monaghan",
    "County": "Monaghan",
    "Twitter": "https://twitter.com/scotstowngaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Scotstown_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Sean Mac Diarmada",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Sean Mac Diarmada Park",
    "Code": "",
    "Latitude": "54.21586",
    "Longitude": "-7.04148",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Monaghan",
    "County": "Monaghan",
    "Twitter": "https://twitter.com/seanmcdermotts",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Toome St. Victors",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Victors Park",
    "Code": "",
    "Latitude": "54.081805",
    "Longitude": "-6.679173",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Monaghan",
    "County": "Monaghan",
    "Twitter": "https://twitter.com/tuaimclg",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Truagh Gaels",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St Mellans Park",
    "Code": "",
    "Latitude": "54.363855",
    "Longitude": "-6.96471",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Monaghan",
    "County": "Monaghan",
    "Twitter": "https://twitter.com/truaghgaels",
    "Wikipedia": "https://en.wikipedia.org/wiki/Truagh_Gaels_GAC"
  },
  {
    "File": "Ireland",
    "Club": "Tyholland St. Patricks",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Naomh Pádraig",
    "Code": "",
    "Latitude": "54.26807",
    "Longitude": "-6.91867",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Monaghan",
    "County": "Monaghan",
    "Twitter": "https://twitter.com/tyhollandgfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Aodh Ruadh GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Father Tierney Park",
    "Code": "",
    "Latitude": "54.498144",
    "Longitude": "-8.191869",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "https://twitter.com/aodhruadh",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ardara GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Pearse Park",
    "Code": "",
    "Latitude": "54.769722",
    "Longitude": "-8.416487",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "https://twitter.com/ardaragaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/CLG_Ard_an_R%C3%A1tha"
  },
  {
    "File": "Ireland",
    "Club": "Arranmore GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Gairmscoil McDiarmada",
    "Code": "",
    "Latitude": "54.98566",
    "Longitude": "-8.492488",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "https://twitter.com/ArranmoreGAA",
    "Wikipedia": "https://en.wikipedia.org/wiki/Arranmore"
  },
  {
    "File": "Ireland",
    "Club": "Buncrana GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "The Scarvey",
    "Code": "",
    "Latitude": "55.130095",
    "Longitude": "-7.455806",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "https://twitter.com/buncranagaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Buncrana_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Burt GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Hibernian Park",
    "Code": "",
    "Latitude": "55.031659",
    "Longitude": "-7.460402",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Burt_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Carndonagh GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "O'Doherty Park",
    "Code": "",
    "Latitude": "55.25936",
    "Longitude": "-7.245766",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "https://twitter.com/CarnGaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Carndonagh_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Cloughaneely GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Naomh Fionnán",
    "Code": "",
    "Latitude": "55.140639",
    "Longitude": "-8.098203",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "https://twitter.com/clgcloughaneely",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Downings GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc na nDúnaibh",
    "Code": "",
    "Latitude": "55.193302",
    "Longitude": "-7.831668",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "https://twitter.com/clgnadunaibh",
    "Wikipedia": "https://en.wikipedia.org/wiki/Downings"
  },
  {
    "File": "Ireland",
    "Club": "Dungloe GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Rosses Park",
    "Code": "",
    "Latitude": "54.951057",
    "Longitude": "-8.352223",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "https://twitter.com/dungloegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Dungloe_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Fanad Gaels GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Uí Shiadhail",
    "Code": "",
    "Latitude": "55.198566",
    "Longitude": "-7.64377",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "https://twitter.com/gaeilfhanadaclg",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Four Masters GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Thír Chonaill",
    "Code": "",
    "Latitude": "54.655422",
    "Longitude": "-8.122581",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "https://twitter.com/FourMastersCLG",
    "Wikipedia": "https://en.wikipedia.org/wiki/Four_Masters_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Gaoth Dobhair GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Magheragallon",
    "Code": "",
    "Latitude": "55.082695",
    "Longitude": "-8.310726",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "https://twitter.com/gaothdobhairclg",
    "Wikipedia": "https://en.wikipedia.org/wiki/Gweedore"
  },
  {
    "File": "Ireland",
    "Club": "Glenfin GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Thaobhóige",
    "Code": "",
    "Latitude": "54.824338",
    "Longitude": "-7.923301",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "https://twitter.com/glenfingaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Glenfin_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Glenswilly GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Naomh Columba",
    "Code": "",
    "Latitude": "54.941201",
    "Longitude": "-7.839139",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "https://twitter.com/GaaGlenswilly",
    "Wikipedia": "https://en.wikipedia.org/wiki/Glenswilly_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kilcar GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Towney Park",
    "Code": "",
    "Latitude": "54.626195",
    "Longitude": "-8.602701",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "https://twitter.com/KilcarGAA",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Killybegs GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Éamonn Byrne Memorial Park",
    "Code": "",
    "Latitude": "54.638166",
    "Longitude": "-8.485331",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "https://twitter.com/KILLYBEGSGAA",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Letterkenny Gaels GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc na nGael",
    "Code": "",
    "Latitude": "54.950591",
    "Longitude": "-7.693299",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "https://twitter.com/LetterkennyGael",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Milford GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Moyle View Park",
    "Code": "",
    "Latitude": "55.083392",
    "Longitude": "-7.703174",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "https://twitter.com/clgbnag",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Moville GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Carrick Field",
    "Code": "",
    "Latitude": "55.193931",
    "Longitude": "-7.02327",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "https://twitter.com/movillegaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Na Rossa",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Dooey Park",
    "Code": "",
    "Latitude": "54.86595",
    "Longitude": "-8.375999",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "https://twitter.com/narossa76",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Naomh Brd GAA, Ballintra/Laghey",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Naomh Bríd",
    "Code": "",
    "Latitude": "54.599663",
    "Longitude": "-8.101298",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "https://twitter.com/naomhbridgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Naomh Colmcille GAA, Newtowncunningham",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Cholm Cille",
    "Code": "",
    "Latitude": "54.999721",
    "Longitude": "-7.519841",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "https://twitter.com/naomh_colmcille",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Naomh Columba GAA, Glencolumbkille",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc na nGael",
    "Code": "",
    "Latitude": "54.710617",
    "Longitude": "-8.732384",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "https://twitter.com/clgnaomhcolumba",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Naomh Conall GAA, Glenties",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Davy Brennan Memorial Park",
    "Code": "",
    "Latitude": "54.794201",
    "Longitude": "-8.296564",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "https://twitter.com/naomhconaillgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Naomh Muire GAA, Lower Rosses",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "The Banks",
    "Code": "",
    "Latitude": "55.030302",
    "Longitude": "-8.37084",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "https://twitter.com/naomhmuire",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Naomh Pádraig GAA, Lifford",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Bernard McDermott Memorial Park",
    "Code": "",
    "Latitude": "54.838201",
    "Longitude": "-7.47892",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Naomh Pádraig GAA, Malin",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Connolly Park",
    "Code": "",
    "Latitude": "55.297694",
    "Longitude": "-7.262075",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Naomh Pádraig GAA, Muff",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Muff GAA Grounds, Ture",
    "Code": "",
    "Latitude": "55.094599",
    "Longitude": "-7.231127",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "https://twitter.com/naomhpadraiggaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Naomh Ultan GAA, Dunkineely",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Naomh Ultan",
    "Code": "",
    "Latitude": "54.633589",
    "Longitude": "-8.348614",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "https://twitter.com/naomhultangaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Pettigo GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc na Scoile",
    "Code": "",
    "Latitude": "54.545812",
    "Longitude": "-7.838141",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Réalt na Mara GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Gaelic Park",
    "Code": "",
    "Latitude": "54.474555",
    "Longitude": "-8.283204",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "https://twitter.com/realtnamaragaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Red Hugh's GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Aodha Ruadh",
    "Code": "",
    "Latitude": "54.779234",
    "Longitude": "-7.69589",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "https://twitter.com/redhughs",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Robert Emmet's GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Eiméid",
    "Code": "",
    "Latitude": "54.801225",
    "Longitude": "-7.573345",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Seán Mac Cunmaill's GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Mac Cumhaill Park",
    "Code": "",
    "Latitude": "54.801349",
    "Longitude": "-7.777731",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Setanta GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Crossroads",
    "Code": "",
    "Latitude": "54.786475",
    "Longitude": "-7.7023",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Setanta_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Eunan's GAA, Letterkenny",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "O'Donnell Park",
    "Code": "",
    "Latitude": "54.945481",
    "Longitude": "-7.752443",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "https://twitter.com/steunansgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Mary's GAA, Convoy",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Naomh Muire",
    "Code": "",
    "Latitude": "54.859081",
    "Longitude": "-7.679632",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "https://twitter.com/convoygaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Michael's GAA, Creeslough/Dunfanaghy",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Naomh Micheál",
    "Code": "",
    "Latitude": "55.182515",
    "Longitude": "-7.988381",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "https://twitter.com/stmichaels_gaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Naul's GAA, Mountcharles",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Gerald Gallagher Memorial Park",
    "Code": "",
    "Latitude": "54.644605",
    "Longitude": "-8.201164",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "https://twitter.com/clgnaomhnaille",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Termon GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Termon GAA Grounds",
    "Code": "",
    "Latitude": "55.044074",
    "Longitude": "-7.815342",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "https://twitter.com/clgantearmainn",
    "Wikipedia": "https://en.wikipedia.org/wiki/Termon_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Urris GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Uí Chnáimhsí",
    "Code": "",
    "Latitude": "55.263109",
    "Longitude": "-7.427555",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Donegal",
    "County": "Donegal",
    "Twitter": "https://twitter.com/ClgIorras",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Bailieborough Shamrocks",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Ann's Park",
    "Code": "",
    "Latitude": "53.925765",
    "Longitude": "-6.969827",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Cavan",
    "County": "Cavan",
    "Twitter": "https://twitter.com/BailieboroS",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ballinagh GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Ballinagh GAA Grounds",
    "Code": "",
    "Latitude": "53.930673",
    "Longitude": "-7.412008",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Cavan",
    "County": "Cavan",
    "Twitter": "https://twitter.com/Ballinagh",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballinagh_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballyhaise GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Annalee Park",
    "Code": "",
    "Latitude": "54.046253",
    "Longitude": "-7.314709",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Cavan",
    "County": "Cavan",
    "Twitter": "https://twitter.com/ballyhaisegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballyhaise_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballymachugh GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Shíleann",
    "Code": "",
    "Latitude": "53.835841",
    "Longitude": "-7.353148",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Cavan",
    "County": "Cavan",
    "Twitter": "https://twitter.com/ballymachughgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Belturbet Rory O'Moores",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Rory O'Moore Park",
    "Code": "",
    "Latitude": "54.099878",
    "Longitude": "-7.438112",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Cavan",
    "County": "Cavan",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Butlersbridge GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Emmet Park",
    "Code": "",
    "Latitude": "54.047954",
    "Longitude": "-7.375035",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Cavan",
    "County": "Cavan",
    "Twitter": "https://twitter.com/bbridgegaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Castlerahan GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Fay Park",
    "Code": "",
    "Latitude": "53.861232",
    "Longitude": "-7.209929",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Cavan",
    "County": "Cavan",
    "Twitter": "https://twitter.com/castlerahan_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Castlerahan_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Cavan Gaels",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Terry Coyle Park",
    "Code": "",
    "Latitude": "53.988038",
    "Longitude": "-7.363122",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Cavan",
    "County": "Cavan",
    "Twitter": "https://twitter.com/cavangaelsgfc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Cavan_Gaels_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Cootehill Celtic",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Hugh O'Reilly Park",
    "Code": "",
    "Latitude": "54.072479",
    "Longitude": "-7.079643",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Cavan",
    "County": "Cavan",
    "Twitter": "https://twitter.com/cootehill1celt",
    "Wikipedia": "https://en.wikipedia.org/wiki/Cootehill_Celtic_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Corlough GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Chorlaí",
    "Code": "",
    "Latitude": "54.118056",
    "Longitude": "-7.747799",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Cavan",
    "County": "Cavan",
    "Twitter": "https://twitter.com/corloughgfc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Corlough"
  },
  {
    "File": "Ireland",
    "Club": "Cornafean GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Naomh Fionnán",
    "Code": "",
    "Latitude": "53.9504",
    "Longitude": "-7.49461",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Cavan",
    "County": "Cavan",
    "Twitter": "https://twitter.com/cornafeangaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Cornafean_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Crosserlough GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Dr. Plunkett Park",
    "Code": "",
    "Latitude": "53.861975",
    "Longitude": "-7.316331",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Cavan",
    "County": "Cavan",
    "Twitter": "https://twitter.com/CCrosserlough",
    "Wikipedia": "https://en.wikipedia.org/wiki/Crosserlough_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Cuchulainn's GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Edwin Carolan Community Park",
    "Code": "",
    "Latitude": "53.808693",
    "Longitude": "-6.938897",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Cavan",
    "County": "Cavan",
    "Twitter": "https://twitter.com/clgcuchulainn",
    "Wikipedia": "https://en.wikipedia.org/wiki/CLG_Cuchulainn"
  },
  {
    "File": "Ireland",
    "Club": "Denn GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Matthew's Park",
    "Code": "",
    "Latitude": "53.920235",
    "Longitude": "-7.264607",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Cavan",
    "County": "Cavan",
    "Twitter": "https://twitter.com/DennGAA",
    "Wikipedia": "https://en.wikipedia.org/wiki/Denn_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Drumalee GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Phelim's Park",
    "Code": "",
    "Latitude": "53.997988",
    "Longitude": "-7.352844",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Cavan",
    "County": "Cavan",
    "Twitter": "https://twitter.com/drumaleegfc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Drumalee_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Drumgoon Éire Óg GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Uí Bhaoill",
    "Code": "",
    "Latitude": "54.04294",
    "Longitude": "-7.018316",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Cavan",
    "County": "Cavan",
    "Twitter": "https://twitter.com/drumgoongaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Drumlane GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "O'Connell Park",
    "Code": "",
    "Latitude": "54.068624",
    "Longitude": "-7.478328",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Cavan",
    "County": "Cavan",
    "Twitter": "https://twitter.com/drumlanegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Drumlane_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Drung Dalcassians GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Dhroing",
    "Code": "",
    "Latitude": "54.068864",
    "Longitude": "-7.225342",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Cavan",
    "County": "Cavan",
    "Twitter": "https://twitter.com/gfc_drung",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Gowna GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Loch Gamhna",
    "Code": "",
    "Latitude": "53.86601",
    "Longitude": "-7.550067",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Cavan",
    "County": "Cavan",
    "Twitter": "https://twitter.com/GownaGFC",
    "Wikipedia": "https://en.wikipedia.org/wiki/Gowna_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Kildallan GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc na Chéad Ultach",
    "Code": "",
    "Latitude": "54.119597",
    "Longitude": "-7.584639",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Cavan",
    "County": "Cavan",
    "Twitter": "https://twitter.com/kildallangfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Kill Shamrocks",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Rathluden Park",
    "Code": "",
    "Latitude": "54.054796",
    "Longitude": "-7.135233",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Cavan",
    "County": "Cavan",
    "Twitter": "https://twitter.com/killshamrocks",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Killeshandra Leaguers GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Packie Devlin Park",
    "Code": "",
    "Latitude": "54.011024",
    "Longitude": "-7.526885",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Cavan",
    "County": "Cavan",
    "Twitter": "https://twitter.com/killeshandragaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Killinkere GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Jim Smith Memorial Park",
    "Code": "",
    "Latitude": "53.885481",
    "Longitude": "-7.050346",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Cavan",
    "County": "Cavan",
    "Twitter": "https://twitter.com/KillinkereGFC",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Killygarry GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Athletic Grounds, Crubany",
    "Code": "",
    "Latitude": "53.964688",
    "Longitude": "-7.318857",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Cavan",
    "County": "Cavan",
    "Twitter": "https://twitter.com/KillygarryGAA66",
    "Wikipedia": "https://en.wikipedia.org/wiki/Killygarry_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Kingscourt Stars GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "O'Reilly Park",
    "Code": "",
    "Latitude": "53.907118",
    "Longitude": "-6.801545",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Cavan",
    "County": "Cavan",
    "Twitter": "https://twitter.com/starsgaa1890",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kingscourt_Stars_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Knockbride GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Naomh Bríd",
    "Code": "",
    "Latitude": "53.977897",
    "Longitude": "-7.057976",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Cavan",
    "County": "Cavan",
    "Twitter": "https://twitter.com/knockbridegfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Lacken Celtic GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Joe Crowe Park",
    "Code": "",
    "Latitude": "53.920851",
    "Longitude": "-7.426256",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Cavan",
    "County": "Cavan",
    "Twitter": "https://twitter.com/lackengaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Lacken_Celtic_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Laragh United GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "P.J. Duke Park",
    "Code": "",
    "Latitude": "53.983051",
    "Longitude": "-7.237147",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Cavan",
    "County": "Cavan",
    "Twitter": "https://twitter.com/laraghunitedgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Laragh_United_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Erin's Own GAA, Lavey",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Leamhaí",
    "Code": "",
    "Latitude": "53.901499",
    "Longitude": "-7.17445",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Cavan",
    "County": "Cavan",
    "Twitter": "https://twitter.com/gaalavey",
    "Wikipedia": "https://en.wikipedia.org/wiki/Erin%27s_Own_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Maghera MacFinn's GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Mhic Fhinn",
    "Code": "",
    "Latitude": "53.800467",
    "Longitude": "-7.039934",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Cavan",
    "County": "Cavan",
    "Twitter": "https://twitter.com/magheramacfinns",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Mountnugent GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Mountnugent GAA Grounds",
    "Code": "",
    "Latitude": "53.805934",
    "Longitude": "-7.219515",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Cavan",
    "County": "Cavan",
    "Twitter": "https://twitter.com/mountnugentgfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Mullahoran Dreadnoughts",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Our Lady of Lourdes Park",
    "Code": "",
    "Latitude": "53.835173",
    "Longitude": "-7.439166",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Cavan",
    "County": "Cavan",
    "Twitter": "https://twitter.com/mullahorangaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Munterconnacht GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Bartholomew's Park",
    "Code": "",
    "Latitude": "53.793504",
    "Longitude": "-7.066725",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Cavan",
    "County": "Cavan",
    "Twitter": "https://twitter.com/munchiegfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ramor United GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Ramor United Park",
    "Code": "",
    "Latitude": "53.830296",
    "Longitude": "-7.070488",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Cavan",
    "County": "Cavan",
    "Twitter": "https://twitter.com/ramorunited",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ramor_United_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Redhills GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Max McGrath Park",
    "Code": "",
    "Latitude": "54.099834",
    "Longitude": "-7.32191",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Cavan",
    "County": "Cavan",
    "Twitter": "https://twitter.com/RedhillsGAA",
    "Wikipedia": "https://en.wikipedia.org/wiki/Redhills_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Shannon Gaels",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Shannon Gaels' Park",
    "Code": "",
    "Latitude": "54.289898",
    "Longitude": "-7.866955",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Cavan",
    "County": "Cavan",
    "Twitter": "https://twitter.com/shannongaels",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Shercock GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "O'Hagan Park",
    "Code": "",
    "Latitude": "53.980313",
    "Longitude": "-6.88016",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Cavan",
    "County": "Cavan",
    "Twitter": "https://twitter.com/ShercockGFC",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St Joseph's Hurling",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Our Lady of Lourdes Park",
    "Code": "Hurling",
    "Latitude": "53.835179",
    "Longitude": "-7.439169",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Cavan",
    "County": "Cavan",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Aidans GAA, Templeport",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Aidan's Park",
    "Code": "",
    "Latitude": "54.121966",
    "Longitude": "-7.674415",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Cavan",
    "County": "Cavan",
    "Twitter": "https://twitter.com/templeportgfc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Templeport_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Mary's GAA, Swanlinbar",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Mary's Park",
    "Code": "",
    "Latitude": "54.192078",
    "Longitude": "-7.704567",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Cavan",
    "County": "Cavan",
    "Twitter": "https://twitter.com/swanlinbargaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Swanlinbar_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Patricks, Arva",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Michael Cully Memorial Park",
    "Code": "",
    "Latitude": "53.92166",
    "Longitude": "-7.57887",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Cavan",
    "County": "Cavan",
    "Twitter": "https://twitter.com/patscavan",
    "Wikipedia": "https://en.wikipedia.org/wiki/Arva_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Woodford Gaels",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Shíleann",
    "Code": "",
    "Latitude": "53.835696",
    "Longitude": "-7.35338",
    "Province": "Ulster",
    "Country": "Ireland",
    "Division": "Cavan",
    "County": "Cavan",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Armagh Harps",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Abbey Park",
    "Code": "",
    "Latitude": "54.358832",
    "Longitude": "-6.661491",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/ArmaghHarpsGFC",
    "Wikipedia": "https://en.wikipedia.org/wiki/Armagh_Harps_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Ballymacnab Round Towers",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc na nGael",
    "Code": "",
    "Latitude": "54.289793",
    "Longitude": "-6.632396",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/ballymacnab_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballymacnab_Round_Towers_GAC"
  },
  {
    "File": "Ireland",
    "Club": "Clann Éireann GAA, Lurgan",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Clann Eireann Park",
    "Code": "",
    "Latitude": "54.475013",
    "Longitude": "-6.330333",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/clanneireann1",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Clan na Gael GAA, Lurgan",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Davitt Park",
    "Code": "",
    "Latitude": "54.462356",
    "Longitude": "-6.349253",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/clannagael1922",
    "Wikipedia": "https://en.wikipedia.org/wiki/Clan_na_Gael_GAA_%28Armagh%29"
  },
  {
    "File": "Ireland",
    "Club": "Craobh Rua GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Craobh Rua Park",
    "Code": "",
    "Latitude": "54.191814",
    "Longitude": "-6.393125",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/craobh_rua",
    "Wikipedia": "https://en.wikipedia.org/wiki/Craobh_Rua_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Crossmaglen Rangers, GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Oliver Plunket Park",
    "Code": "",
    "Latitude": "54.074906",
    "Longitude": "-6.609043",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/crossrangers",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Cúchulainn's GAA, Armagh",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Pearse Óg Park",
    "Code": "",
    "Latitude": "54.349452",
    "Longitude": "-6.65998",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/cuchulainnsarma",
    "Wikipedia": "https://en.wikipedia.org/wiki/Armagh_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Cúchulainn's GAA, Mullaghbane",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Cúchulainn Park",
    "Code": "",
    "Latitude": "54.109772",
    "Longitude": "-6.487697",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/mullaghbawngaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Culloville Blues GAC",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Top Pitch",
    "Code": "",
    "Latitude": "54.0592757",
    "Longitude": "-6.6382915",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/culloville_gaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Culloville Blues GAC",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Bottom Pitch",
    "Code": "",
    "Latitude": "54.059949",
    "Longitude": "-6.64423495",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/culloville_gaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Davitt's GAA, Ballyhegan",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Ballyhegan Park",
    "Code": "",
    "Latitude": "54.407259",
    "Longitude": "-6.574018",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/ballyhegangac",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Éire Féin GAA, Lissummon",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Lissummon Park",
    "Code": "",
    "Latitude": "54.252195",
    "Longitude": "-6.418559",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/lissummongfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Éire Óg GAA, Craigavon",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Pine Bank",
    "Code": "",
    "Latitude": "54.454205",
    "Longitude": "-6.36235",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/eireogcraigavon",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Emmet's GAA, Dorsey",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Rory Mc Gee Park",
    "Code": "",
    "Latitude": "54.142498",
    "Longitude": "-6.551489",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/dorseyemmetsgac",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Eoghan Rua GAA, Middletown",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "P.J. O'Neill Park",
    "Code": "",
    "Latitude": "54.295445",
    "Longitude": "-6.847434",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/middletowngac",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Lámh Dhearg GAA, Keady",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Gerard Mc Gleenan Park",
    "Code": "",
    "Latitude": "54.256288",
    "Longitude": "-6.702197",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/keadylamhdhearg",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Laurence O'Toole's GAA, Belleek",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Gaelic Park",
    "Code": "",
    "Latitude": "54.172867",
    "Longitude": "-6.488864",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Madden Rapparees GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Rapparee Park",
    "Code": "",
    "Latitude": "54.317243",
    "Longitude": "-6.713616",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/maddenraparees",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Michael Dwyer's GAA, Keady",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Gerard Mc Gleenan Park",
    "Code": "",
    "Latitude": "54.256291",
    "Longitude": "-6.702172",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/dwyerskeady",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Na Fianna GAA, Middletown",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "P.J. O'Neill Park",
    "Code": "",
    "Latitude": "54.296608",
    "Longitude": "-6.847081",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/middletowngac",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "O'Connell's GAA, Tullysaran",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "O'Connell Park",
    "Code": "",
    "Latitude": "54.390982",
    "Longitude": "-6.742078",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "O'Donovan Rossa's GAA, Mullaghbrack",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Pitch Unnamed",
    "Code": "",
    "Latitude": "54.302774",
    "Longitude": "-6.536274",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Mullaghbrack"
  },
  {
    "File": "Ireland",
    "Club": "O'Neill's GAA, An Port Mór",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "O'Neill Park",
    "Code": "",
    "Latitude": "54.414817",
    "Longitude": "-6.702904",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/anportmor1",
    "Wikipedia": "https://en.wikipedia.org/wiki/O%27Neill_%28surname%29"
  },
  {
    "File": "Ireland",
    "Club": "O'Rahilly's GAA, Collegeland",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Father McKnight Park",
    "Code": "",
    "Latitude": "54.44122",
    "Longitude": "-6.679128",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/collegelandgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Peadar Ó Doirnín GAA, Forkhill",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Peader Ó Doirnín Park",
    "Code": "",
    "Latitude": "54.084477",
    "Longitude": "-6.45661",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/forkhill_gaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Pearse Óg GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Pearse Óg Park, Ballycrummy",
    "Code": "",
    "Latitude": "54.352151",
    "Longitude": "-6.677901",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/pearseogarmagh",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Pearse's GAA, Annaghmore",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Pearse Park",
    "Code": "",
    "Latitude": "54.465761",
    "Longitude": "-6.563157",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Phelim Brady's GAA, Darkley",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Darkley school field",
    "Code": "",
    "Latitude": "54.224187",
    "Longitude": "-6.682098",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Darkley"
  },
  {
    "File": "Ireland",
    "Club": "Redmond O'Hanlon's GAA, Poyntzpass",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "O'Hanlon Park",
    "Code": "",
    "Latitude": "54.287984",
    "Longitude": "-6.376069",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/RedmondOHGAC",
    "Wikipedia": "https://en.wikipedia.org/wiki/Poyntzpass"
  },
  {
    "File": "Ireland",
    "Club": "Robert Emmett's GAA, Clonmore",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Robert Emmet Park",
    "Code": "",
    "Latitude": "54.478915",
    "Longitude": "-6.641734",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/clonmore",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Sarsfield's GAA, High Moss",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Father Dan Mc Geown Park",
    "Code": "",
    "Latitude": "54.503226",
    "Longitude": "-6.459335",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/sarsfieldspro",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Sean McDermott's GAA, Maghery",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Felix Hamill Park",
    "Code": "",
    "Latitude": "54.513592",
    "Longitude": "-6.575599",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Seán South's GAA, Clady",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Seán South Park",
    "Code": "",
    "Latitude": "54.251565",
    "Longitude": "-6.565384",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/cladygfc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Clady%2C_County_Londonderry"
  },
  {
    "File": "Ireland",
    "Club": "Seán Treacy GAA, Lurgan",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "The Hurling Field",
    "Code": "",
    "Latitude": "54.477315",
    "Longitude": "-6.330721",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/seantreacys",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Shane O'Neill's GAA, Camloch",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Shane O'Neill's Field",
    "Code": "",
    "Latitude": "54.180022",
    "Longitude": "-6.405246",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/shaneoneillsgfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Silverbridge Harps",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Keeley Park",
    "Code": "",
    "Latitude": "54.096321",
    "Longitude": "-6.538566",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/SilverbridgeGAA",
    "Wikipedia": "https://en.wikipedia.org/wiki/Silverbridge_Harps_GFC"
  },
  {
    "File": "Ireland",
    "Club": "St. Colmcille's GAA, Grange",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc na Gráinsí",
    "Code": "",
    "Latitude": "54.392046",
    "Longitude": "-6.663018",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/grangegfc",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_Colmcille%27s_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Killian's GAA, Whitecross",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Killian's Park",
    "Code": "",
    "Latitude": "54.221327",
    "Longitude": "-6.483997",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/whitecrossgac",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Malachy's GAA, Portadown",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Malachy's Park",
    "Code": "",
    "Latitude": "54.432459",
    "Longitude": "-6.474408",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/stmalachysgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/St._Malachy%27s_Memorial_High_School"
  },
  {
    "File": "Ireland",
    "Club": "St. Mary's GAA, Granemore",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Mary's Park",
    "Code": "",
    "Latitude": "54.251585",
    "Longitude": "-6.653614",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/granemoregfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Michael's GAA, Newtownhamilton",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Michael's Park",
    "Code": "",
    "Latitude": "54.187836",
    "Longitude": "-6.573192",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/baileur",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Mochua's GAA, Derrynoose",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Mochua's Park",
    "Code": "",
    "Latitude": "54.232106",
    "Longitude": "-6.774799",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/derrynoosegac",
    "Wikipedia": "https://en.wikipedia.org/wiki/Derrynoose"
  },
  {
    "File": "Ireland",
    "Club": "St. Moninne's GAA, Killeavy",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Killeavy Memorial Park",
    "Code": "",
    "Latitude": "54.142921",
    "Longitude": "-6.361886",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/killeavygaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Patrick's GAA, Carrickcruppen",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Patrick's Park",
    "Code": "",
    "Latitude": "54.182572",
    "Longitude": "-6.39738",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/carrickcruppen_",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Patrick's GAA, Cullyhanna",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Pádraig",
    "Code": "",
    "Latitude": "54.1246359",
    "Longitude": "-6.585534",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/StPatsChannaGFC",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Patrick's GAA, Dromintee",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Lochrie and Campbell Park",
    "Code": "",
    "Latitude": "54.098003",
    "Longitude": "-6.398717",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/drominteegac",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Paul's GAA, Lurgan",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Taghnevan Playing Fields",
    "Code": "",
    "Latitude": "54.452014",
    "Longitude": "-6.348393",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/naomhpol",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Peter's GAA, Lurgan",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Peter's Park",
    "Code": "",
    "Latitude": "54.467672",
    "Longitude": "-6.328553",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/stpetersgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Thomas Davis' GAA, Corrinshego",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Thomas Davis",
    "Code": "",
    "Latitude": "54.176514",
    "Longitude": "-6.363094",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/corrinshegogfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Tír na nÓg GAA, Portadown",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Father Rafferty Park",
    "Code": "",
    "Latitude": "54.436676",
    "Longitude": "-6.455092",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/tirnanogpdown",
    "Wikipedia": "https://en.wikipedia.org/wiki/T%C3%ADr_na_n%C3%93g_%28band%29"
  },
  {
    "File": "Ireland",
    "Club": "Wolfe Tone GAA, Derrymacash",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Rapparee Park",
    "Code": "",
    "Latitude": "54.477252",
    "Longitude": "-6.396009",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Armagh",
    "County": "Armagh",
    "Twitter": "https://twitter.com/wolfetonegac",
    "Wikipedia": "https://en.wikipedia.org/wiki/Wolfe_Tone_GAA_%28Armagh%29"
  },
  {
    "File": "Ireland",
    "Club": "Derry GAA Centre of Excellence",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Owenbeg, Dungiven",
    "Code": "",
    "Latitude": "54.9241781",
    "Longitude": "-6.9530881",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Derry",
    "County": "Derry",
    "Twitter": "https://twitter.com/doiregaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ballinderry Shamrocks",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Shamrock Park",
    "Code": "",
    "Latitude": "54.659645",
    "Longitude": "-6.558921",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Derry",
    "County": "Derry",
    "Twitter": "https://twitter.com/BallinderryGAC",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballinderry_Shamrocks_GAC"
  },
  {
    "File": "Ireland",
    "Club": "Brian Óg's GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Bhríd",
    "Code": "",
    "Latitude": "55.033214",
    "Longitude": "-7.31057",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Derry",
    "County": "Derry",
    "Twitter": "https://twitter.com/brianogs",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Doire Cholmcille GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Cholm Cille",
    "Code": "",
    "Latitude": "55.00893",
    "Longitude": "-7.337932",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Derry",
    "County": "Derry",
    "Twitter": "https://twitter.com/dcolmcillegaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Eoghan Rua GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Eoghain Rua",
    "Code": "",
    "Latitude": "55.164562",
    "Longitude": "-6.695764",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Derry",
    "County": "Derry",
    "Twitter": "https://twitter.com/eoghanrua",
    "Wikipedia": "https://en.wikipedia.org/wiki/Eoghan_Ruadh%2C_Dungannon_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Erin's Own GAA, Lavey",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Lavey GAA Grounds",
    "Code": "",
    "Latitude": "54.830513",
    "Longitude": "-6.605331",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Derry",
    "County": "Derry",
    "Twitter": "https://twitter.com/gaalavey",
    "Wikipedia": "https://en.wikipedia.org/wiki/Erin%27s_Own_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Henry Joy McCracken's GAA, Moneymore",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "McCracken Park",
    "Code": "",
    "Latitude": "54.690527",
    "Longitude": "-6.659844",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Derry",
    "County": "Derry",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "John Mitchel's GAA, Claudy",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "O'Neill Park",
    "Code": "",
    "Latitude": "54.908988",
    "Longitude": "-7.14671",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Derry",
    "County": "Derry",
    "Twitter": "https://twitter.com/claudygac",
    "Wikipedia": "https://en.wikipedia.org/wiki/John_Mitchel%27s_GAC_Claudy"
  },
  {
    "File": "Ireland",
    "Club": "John Mitchel's GAA, Glenullin",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Sheáin Uí Mhaoláin",
    "Code": "",
    "Latitude": "54.954253",
    "Longitude": "-6.735021",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Derry",
    "County": "Derry",
    "Twitter": "https://twitter.com/glenullingac",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Kevin Lynch's GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Kevin Lynch Park",
    "Code": "",
    "Latitude": "54.922705",
    "Longitude": "-6.904493",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Derry",
    "County": "Derry",
    "Twitter": "https://twitter.com/kevinlynchhc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kevin_Lynch%27s_Hurling_Club"
  },
  {
    "File": "Ireland",
    "Club": "Limavady Wolfhounds GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Wolfhounds Park",
    "Code": "",
    "Latitude": "55.050481",
    "Longitude": "-6.936571",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Derry",
    "County": "Derry",
    "Twitter": "https://twitter.com/nacunnaclg",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Michael Davitt's GAA, Swatragh",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Davitt Park",
    "Code": "",
    "Latitude": "54.916706",
    "Longitude": "-6.66344",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Derry",
    "County": "Derry",
    "Twitter": "https://twitter.com/davittswatragh",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Na Magha GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc na Magha",
    "Code": "",
    "Latitude": "55.034242",
    "Longitude": "-7.299886",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Derry",
    "County": "Derry",
    "Twitter": "https://twitter.com/namaghaclg",
    "Wikipedia": "https://en.wikipedia.org/wiki/Na_Magha_CLG"
  },
  {
    "File": "Ireland",
    "Club": "O'Connor's GAA, Glack",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Brolly Park",
    "Code": "",
    "Latitude": "55.023509",
    "Longitude": "-7.030822",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Derry",
    "County": "Derry",
    "Twitter": "https://twitter.com/glackgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Glack_GAC"
  },
  {
    "File": "Ireland",
    "Club": "O'Donovan Rossa's GAA, Magherafelt",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Rossa Park",
    "Code": "",
    "Latitude": "54.758564",
    "Longitude": "-6.598506",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Derry",
    "County": "Derry",
    "Twitter": "https://twitter.com/rossagaelsderry",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ógra Cholmcille GAA, Drummullan",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Ógra Park",
    "Code": "",
    "Latitude": "54.643899",
    "Longitude": "-6.665948",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Derry",
    "County": "Derry",
    "Twitter": "https://twitter.com/ogracolmcille",
    "Wikipedia": "https://en.wikipedia.org/wiki/CLG_%C3%93gra_Colmcille"
  },
  {
    "File": "Ireland",
    "Club": "Patrick Pearse's GAA, Kilrea",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Pearse Park",
    "Code": "",
    "Latitude": "54.929674",
    "Longitude": "-6.580779",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Derry",
    "County": "Derry",
    "Twitter": "https://twitter.com/kilreagac",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Pearse's GAA, Waterside",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Lisnagelvin",
    "Code": "",
    "Latitude": "54.984291",
    "Longitude": "-7.302588",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Derry",
    "County": "Derry",
    "Twitter": "https://twitter.com/pearsesderry",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Robert Emmet's GAA, Slaughtneil",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Emmet Park",
    "Code": "",
    "Latitude": "54.883566",
    "Longitude": "-6.700523",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Derry",
    "County": "Derry",
    "Twitter": "https://twitter.com/gacslaughtneil",
    "Wikipedia": "https://en.wikipedia.org/wiki/Slaughtneil_GAC"
  },
  {
    "File": "Ireland",
    "Club": "Sarsfield's GAA, Ballerin",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Shamrock Park",
    "Code": "",
    "Latitude": "55.012062",
    "Longitude": "-6.734256",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Derry",
    "County": "Derry",
    "Twitter": "https://twitter.com/balleringaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Seán Dolan's GAA, Creggan",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Piggery Ridge",
    "Code": "",
    "Latitude": "54.994131",
    "Longitude": "-7.352781",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Derry",
    "County": "Derry",
    "Twitter": "https://twitter.com/seandolans",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Seán O'Leary's GAA, Newbridge",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Seán O'Leary Park",
    "Code": "",
    "Latitude": "54.761608",
    "Longitude": "-6.506944",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Derry",
    "County": "Derry",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Newbridge_GAC"
  },
  {
    "File": "Ireland",
    "Club": "St. Aidan's GAA, Magilligan",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Aidan's Park",
    "Code": "",
    "Latitude": "55.151434",
    "Longitude": "-6.913931",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Derry",
    "County": "Derry",
    "Twitter": "https://twitter.com/magilligangac",
    "Wikipedia": "https://en.wikipedia.org/wiki/Magilligan_GAC"
  },
  {
    "File": "Ireland",
    "Club": "St. Canice's GAA, Dungiven",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "O'Cahan Park",
    "Code": "",
    "Latitude": "54.926148",
    "Longitude": "-6.918967",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Derry",
    "County": "Derry",
    "Twitter": "https://twitter.com/stcanicesgac",
    "Wikipedia": "https://en.wikipedia.org/wiki/Dungiven_GAC"
  },
  {
    "File": "Ireland",
    "Club": "St. Colm's GAA, Ballinascreen",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Dean McGlinchey Park",
    "Code": "",
    "Latitude": "54.782805",
    "Longitude": "-6.805583",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Derry",
    "County": "Derry",
    "Twitter": "https://twitter.com/screengaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballinascreen_GAC"
  },
  {
    "File": "Ireland",
    "Club": "St. Joseph's GAA, Craigbane",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Gerard Crossan Park",
    "Code": "",
    "Latitude": "54.867883",
    "Longitude": "-7.14664",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Derry",
    "County": "Derry",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Craigbane_GAC"
  },
  {
    "File": "Ireland",
    "Club": "St. Malachy's GAA, Castledawson",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Malachy's Park (The Broagh)",
    "Code": "",
    "Latitude": "54.767215",
    "Longitude": "-6.536969",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Derry",
    "County": "Derry",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Castledawson_GAC"
  },
  {
    "File": "Ireland",
    "Club": "St. Mary's GAA, Ardmore",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "McCourt's Pitch",
    "Code": "",
    "Latitude": "54.959921",
    "Longitude": "-7.257367",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Derry",
    "County": "Derry",
    "Twitter": "https://twitter.com/officialardmore",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Mary's GAA, Banagher",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Fr. McNally Park",
    "Code": "",
    "Latitude": "54.892357",
    "Longitude": "-7.01412",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Derry",
    "County": "Derry",
    "Twitter": "https://twitter.com/banaghergac",
    "Wikipedia": "https://en.wikipedia.org/wiki/Banagher_GAC"
  },
  {
    "File": "Ireland",
    "Club": "St. Mary's GAA, Faughanvale",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "John McLaughlin Park",
    "Code": "",
    "Latitude": "55.035499",
    "Longitude": "-7.103388",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Derry",
    "County": "Derry",
    "Twitter": "https://twitter.com/faughanvalegaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Faughanvale_GAC"
  },
  {
    "File": "Ireland",
    "Club": "St. Mary's GAA, Slaughtmanus",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Fr. Gallagher Park",
    "Code": "",
    "Latitude": "54.987569",
    "Longitude": "-7.182146",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Derry",
    "County": "Derry",
    "Twitter": "https://twitter.com/slaughtmanusgac",
    "Wikipedia": "https://en.wikipedia.org/wiki/Slaughtmanus_GAC"
  },
  {
    "File": "Ireland",
    "Club": "St. Matthew's GAA, Drumsurn",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Drumsurn GAA Grounds",
    "Code": "",
    "Latitude": "54.988629",
    "Longitude": "-6.865364",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Derry",
    "County": "Derry",
    "Twitter": "https://twitter.com/drumsurngac",
    "Wikipedia": "https://en.wikipedia.org/wiki/Drumsurn_GAC"
  },
  {
    "File": "Ireland",
    "Club": "St. Michael's GAA, Lissan",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Tullynure",
    "Code": "",
    "Latitude": "54.690727",
    "Longitude": "-6.756946",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Derry",
    "County": "Derry",
    "Twitter": "https://twitter.com/lissangaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Lissan_GAC"
  },
  {
    "File": "Ireland",
    "Club": "St. Oliver Plunkett's GAA, Greenlough",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Oliver Plunket Park",
    "Code": "",
    "Latitude": "54.867798",
    "Longitude": "-6.513454",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Derry",
    "County": "Derry",
    "Twitter": "https://twitter.com/greenloughgac",
    "Wikipedia": "https://en.wikipedia.org/wiki/Greenlough_GAC"
  },
  {
    "File": "Ireland",
    "Club": "St. Patrick's GAA, The Loup",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Naomh Pádraig",
    "Code": "",
    "Latitude": "54.702043",
    "Longitude": "-6.589179",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Derry",
    "County": "Derry",
    "Twitter": "https://twitter.com/anlubgac",
    "Wikipedia": "https://en.wikipedia.org/wiki/St._Patrick%27s_GAC_Loup"
  },
  {
    "File": "Ireland",
    "Club": "St. Trea's GAA, Ballymaguigan",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Ballymaguigan GAA Grounds",
    "Code": "",
    "Latitude": "54.742591",
    "Longitude": "-6.523167",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Derry",
    "County": "Derry",
    "Twitter": "https://twitter.com/naomhtreagaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballymaguigan_GAC"
  },
  {
    "File": "Ireland",
    "Club": "Watty Graham's GAA, Glen",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Watty Graham Park",
    "Code": "",
    "Latitude": "54.840171",
    "Longitude": "-6.688647",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Derry",
    "County": "Derry",
    "Twitter": "https://twitter.com/WattyGrahamsGAA",
    "Wikipedia": "https://en.wikipedia.org/wiki/Watty_Graham%27s_GAC%2C_Glen"
  },
  {
    "File": "Ireland",
    "Club": "William O'Brien's GAA, Foreglen",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "O'Brien Park",
    "Code": "",
    "Latitude": "54.927172",
    "Longitude": "-7.023387",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Derry",
    "County": "Derry",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Foreglen_GAC"
  },
  {
    "File": "Ireland",
    "Club": "Wolfe Tones GAA, Bellaghy",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Seán Brown Park",
    "Code": "",
    "Latitude": "54.807106",
    "Longitude": "-6.514772",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Derry",
    "County": "Derry",
    "Twitter": "https://twitter.com/bellaghygac",
    "Wikipedia": "https://en.wikipedia.org/wiki/Wolfe_Tones_GAA_%28Bellaghy%29"
  },
  {
    "File": "Ireland",
    "Club": "Aghaderg-Ballyvarley GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Pearse Park",
    "Code": "",
    "Latitude": "54.34497",
    "Longitude": "-6.326956",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "https://twitter.com/aghaderg_bv",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "An Ríocht GAA, Greencastle",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc na Rochta, Dunavil",
    "Code": "",
    "Latitude": "54.049279",
    "Longitude": "-6.035741",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/An_R%C3%ADocht_GAC"
  },
  {
    "File": "Ireland",
    "Club": "Annaclone GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Gaelic Park",
    "Code": "",
    "Latitude": "54.294965",
    "Longitude": "-6.179847",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "https://twitter.com/annaclonegac",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ardglass GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Ardtole Park",
    "Code": "",
    "Latitude": "54.268025",
    "Longitude": "-5.5938",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "https://twitter.com/ardglassgac",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Atticall GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Holy Cross Park",
    "Code": "",
    "Latitude": "54.10535",
    "Longitude": "-6.062063",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "https://twitter.com/atticallgac",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Aughlisnafin GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Annsborough",
    "Code": "",
    "Latitude": "54.262246",
    "Longitude": "-5.91886",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "https://twitter.com/AughlisnafinGAC",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ballela GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Hillen's Meadow",
    "Code": "",
    "Latitude": "54.354679",
    "Longitude": "-6.148469",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "https://twitter.com/ballelagac",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballela_GAC"
  },
  {
    "File": "Ireland",
    "Club": "Ballyholland Harps",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Fr. Lynch Park",
    "Code": "",
    "Latitude": "54.166128",
    "Longitude": "-6.311919",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "https://twitter.com/harpsgac",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ballykinlar GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Tadhg Barry Memorial Park",
    "Code": "",
    "Latitude": "54.257445",
    "Longitude": "-5.790076",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "https://twitter.com/ballykinlargac",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ballymartin GAA Club",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Joseph's Park",
    "Code": "",
    "Latitude": "54.073515",
    "Longitude": "-5.961816",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "https://twitter.com/ballymartingac",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Beann Dhearg GAA, Kilclief",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Malachy's Park",
    "Code": "",
    "Latitude": "54.341737",
    "Longitude": "-5.544638",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "https://twitter.com/cillcleithe1901",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Bredagh GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Cherryvale",
    "Code": "",
    "Latitude": "54.57344",
    "Longitude": "-5.91051",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "https://twitter.com/BredaghGAC1",
    "Wikipedia": "https://en.wikipedia.org/wiki/Bredagh_GAC"
  },
  {
    "File": "Ireland",
    "Club": "Bright GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Bright GAA Ground",
    "Code": "",
    "Latitude": "54.294031",
    "Longitude": "-5.715156",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "https://twitter.com/brightclubldn",
    "Wikipedia": "https://en.wikipedia.org/wiki/Bright_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Bryansford GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Patrick's Park",
    "Code": "",
    "Latitude": "54.217911",
    "Longitude": "-5.891957",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "https://twitter.com/bryansfordgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Bryansford_GAC"
  },
  {
    "File": "Ireland",
    "Club": "Carryduff GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Aodha Dhuibh",
    "Code": "",
    "Latitude": "54.530779",
    "Longitude": "-5.886732",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "https://twitter.com/CarryduffCLG",
    "Wikipedia": "https://en.wikipedia.org/wiki/Carryduff_GAC"
  },
  {
    "File": "Ireland",
    "Club": "Clann na Banna GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Cottage Park",
    "Code": "",
    "Latitude": "54.349371",
    "Longitude": "-6.282023",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "https://twitter.com/clannnabannaclg",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Clonduff GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Clonduff Park",
    "Code": "",
    "Latitude": "54.200228",
    "Longitude": "-6.135352",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "https://twitter.com/clonduffgac",
    "Wikipedia": "https://en.wikipedia.org/wiki/Clonduff_GAC"
  },
  {
    "File": "Ireland",
    "Club": "Dromara GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Drinn Park",
    "Code": "",
    "Latitude": "54.368806",
    "Longitude": "-5.985304",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Dundrum GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "John Kielty Memorial Park",
    "Code": "",
    "Latitude": "54.262534",
    "Longitude": "-5.838307",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "https://twitter.com/DundrumGAC",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "East Belfast GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Henry Jones Playing Fields",
    "Code": "",
    "Latitude": "54.5684095",
    "Longitude": "-5.87337474",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "https://twitter.com/EastBelfastGAA",
    "Wikipedia": "https://en.wikipedia.org/wiki/East_Belfast_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Fontenoy's GAA. Liatroim",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Fontenoy Park",
    "Code": "",
    "Latitude": "54.285659",
    "Longitude": "-5.994104",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "https://twitter.com/liatroimfgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "John Martin's GAA, Glenn",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "John Martin Park",
    "Code": "",
    "Latitude": "54.2411",
    "Longitude": "-6.3355",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "https://twitter.com/glenngaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "John Mitchel's GAA, Ballygalget",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Mitchel Park",
    "Code": "",
    "Latitude": "54.413253",
    "Longitude": "-5.499707",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballygalget_GAA"
  },
  {
    "File": "Ireland",
    "Club": "John Mitchel's GAA, Newry",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Gerry Brown Park",
    "Code": "",
    "Latitude": "54.153034",
    "Longitude": "-6.324304",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "https://twitter.com/newrymitchels",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Longstone GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Longstone Park",
    "Code": "",
    "Latitude": "54.110249",
    "Longitude": "-5.933245",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "https://twitter.com/longstonegac",
    "Wikipedia": "https://en.wikipedia.org/wiki/Longstone_GAC"
  },
  {
    "File": "Ireland",
    "Club": "Loughinisland",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "McCartan's Park",
    "Code": "",
    "Latitude": "54.350932",
    "Longitude": "-5.81299",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "https://twitter.com/LislandGac",
    "Wikipedia": "https://en.wikipedia.org/wiki/Loughinisland_GAC"
  },
  {
    "File": "Ireland",
    "Club": "Mayobridge GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Patrick's Park",
    "Code": "",
    "Latitude": "54.18296",
    "Longitude": "-6.224988",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "https://twitter.com/MayobridgeGAC",
    "Wikipedia": "https://en.wikipedia.org/wiki/Mayobridge_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Newry Shamrocks",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Esler",
    "Code": "",
    "Latitude": "54.163093",
    "Longitude": "-6.334689",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "https://twitter.com/shamrocksnewry",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Owen Roe's GAA, Kilcoo",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Eoghain Rua",
    "Code": "",
    "Latitude": "54.235819",
    "Longitude": "-6.023384",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "https://twitter.com/kilcoogac",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Russell Gaelic Union, Downpatrick",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Thomas Russell Park",
    "Code": "",
    "Latitude": "54.317274",
    "Longitude": "-5.701665",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "https://twitter.com/rgudownpatrick",
    "Wikipedia": "https://en.wikipedia.org/wiki/Russell_Gaelic_Union"
  },
  {
    "File": "Ireland",
    "Club": "Saval GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Nan Sands Park",
    "Code": "",
    "Latitude": "54.214114",
    "Longitude": "-6.284156",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "https://twitter.com/saval_gac",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Bronagh's GAA, Rostrevor",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Canon Pettit Park",
    "Code": "",
    "Latitude": "54.105386",
    "Longitude": "-6.203355",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "https://twitter.com/rostrevorgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Colman's GAA, Drumaness",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Colman's Park",
    "Code": "",
    "Latitude": "54.364927",
    "Longitude": "-5.848621",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "https://twitter.com/drumanessgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. John Bosco GAA, Newry",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Jennings Park",
    "Code": "",
    "Latitude": "54.180977",
    "Longitude": "-6.347595",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "https://twitter.com/newryboscogfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. John's GAA, Drumnaquoile",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. John's Park",
    "Code": "",
    "Latitude": "54.297345",
    "Longitude": "-5.907541",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "https://twitter.com/stjohnsgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Joseph's GAA, Ballycran",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "McKenna Park",
    "Code": "",
    "Latitude": "54.477829",
    "Longitude": "-5.507836",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "https://twitter.com/bailecrann",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Malachy's GAA. Castlewellan",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Malachy's Park",
    "Code": "",
    "Latitude": "54.255572",
    "Longitude": "-5.941395",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "https://twitter.com/castlewellangac",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Mary's GAA, Burren",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Mary's Park",
    "Code": "",
    "Latitude": "54.137491",
    "Longitude": "-6.262803",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "https://twitter.com/burrengaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Burren_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Mary's GAA, Glasdrumman",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Naomh Muire",
    "Code": "",
    "Latitude": "54.124699",
    "Longitude": "-5.907279",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Michael's GAA, Magheralin",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Michael's GAA Ground",
    "Code": "",
    "Latitude": "54.465105",
    "Longitude": "-6.276598",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Mochhai's GAA, Darragh Cross",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Mochai's Park",
    "Code": "",
    "Latitude": "54.448684",
    "Longitude": "-5.757501",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "https://twitter.com/darraghcrossgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Patrick's GAA, Drumgath",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Drumgath GAA Grounds",
    "Code": "",
    "Latitude": "54.22961",
    "Longitude": "-6.214452",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Drumgath_GAC"
  },
  {
    "File": "Ireland",
    "Club": "St. Patrick's GAA, Portaferry",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Patrick's Park",
    "Code": "",
    "Latitude": "54.373912",
    "Longitude": "-5.532181",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "https://twitter.com/portaferrygac",
    "Wikipedia": "https://en.wikipedia.org/wiki/Portaferry_GAC"
  },
  {
    "File": "Ireland",
    "Club": "St. Patrick's GAA, Saul",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Patrick's Park",
    "Code": "",
    "Latitude": "54.348653",
    "Longitude": "-5.653568",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "https://twitter.com/saulgac_andun",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Paul's GAA, Holywood",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Pádraig McNamee Park",
    "Code": "",
    "Latitude": "54.637267",
    "Longitude": "-5.841064",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "https://twitter.com/naomh_pol",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Peter's GAA, Warrenpoint",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Liam O'Hare Park, Moygannon",
    "Code": "",
    "Latitude": "54.103374",
    "Longitude": "-6.228527",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "https://twitter.com/warrenpointgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Warrenpoint_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Teconnaught GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Aoibh na Ceanna, Rosconnor",
    "Code": "",
    "Latitude": "54.359383",
    "Longitude": "-5.771101",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "https://twitter.com/teconnaughtgfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Tullylish GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc na nÓg",
    "Code": "",
    "Latitude": "54.381373",
    "Longitude": "-6.311648",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "https://twitter.com/tullylishgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Wolfe Tone GAA, Killyleagh",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Wolfe Tone Park",
    "Code": "",
    "Latitude": "54.403911",
    "Longitude": "-5.652938",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Down",
    "County": "Down",
    "Twitter": "https://twitter.com/killyleagh_gac",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Tyrone GAA Garvaghey Centre",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Garvaghey Centre",
    "Code": "",
    "Latitude": "54.4912088",
    "Longitude": "-7.131232",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/tyronegaalive",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Beragh Red Knights",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Mary's Park",
    "Code": "",
    "Latitude": "54.549666",
    "Longitude": "-7.152417",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/beraghgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Beragh_Red_Knights_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Cappagh Gaels",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Ballinamullan",
    "Code": "",
    "Latitude": "54.601477",
    "Longitude": "-7.254738",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Clann na nGael GAA, Donagheady",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "O'Connell Park",
    "Code": "",
    "Latitude": "54.826154",
    "Longitude": "-7.226472",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Clann_na_nGael_GAA_%28Tyrone%29"
  },
  {
    "File": "Ireland",
    "Club": "Derrytresk Fir an Chnoic GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Derrytresk GAA Grounds",
    "Code": "",
    "Latitude": "54.518026",
    "Longitude": "-6.64025",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/derrytreskgac",
    "Wikipedia": "https://en.wikipedia.org/wiki/Derrytresk_Fir_An_Chnoic_GAC"
  },
  {
    "File": "Ireland",
    "Club": "Éire Óg GAA, Carrickmore",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Éire Óg",
    "Code": "",
    "Latitude": "54.59419",
    "Longitude": "-7.046522",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/eireog",
    "Wikipedia": "https://en.wikipedia.org/wiki/%C3%89ire_%C3%93g_Carrickmore"
  },
  {
    "File": "Ireland",
    "Club": "Éire Óg GAA, Clogher",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Patrick's Park",
    "Code": "",
    "Latitude": "54.412092",
    "Longitude": "-7.165559",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/cloghergfc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Clogher_%C3%89ire_%C3%93g_GAC"
  },
  {
    "File": "Ireland",
    "Club": "Emmett's GAA, Eskra",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Emmet Park",
    "Code": "",
    "Latitude": "54.484967",
    "Longitude": "-7.202589",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/eskra_gaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Eskra_Emmetts_GAC"
  },
  {
    "File": "Ireland",
    "Club": "Eoghan Rua GAA, Dungannon",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "The Playing Fields",
    "Code": "",
    "Latitude": "54.508666",
    "Longitude": "-6.787254",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/dgnhurlingclub",
    "Wikipedia": "https://en.wikipedia.org/wiki/Eoghan_Ruadh%2C_Dungannon_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Errigal Ciaran GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Cardinal MacRory Park",
    "Code": "",
    "Latitude": "54.524743",
    "Longitude": "-7.06973",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/ErrigalCiaran1",
    "Wikipedia": "https://en.wikipedia.org/wiki/Errigal_Ciar%C3%A1n_GAC"
  },
  {
    "File": "Ireland",
    "Club": "Fr. Rock's GAA, Cookstown",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Paddy Cullen Park",
    "Code": "",
    "Latitude": "54.642676",
    "Longitude": "-6.75079",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/frrocksgfc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Cookstown_Fr._Rock%27s_GAC"
  },
  {
    "File": "Ireland",
    "Club": "Derrylaughan Kevin Barry's GAC",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Dhoire Locháin",
    "Code": "",
    "Latitude": "54.53633",
    "Longitude": "-6.61058",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/derrylaughangaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Na Fianna GAA, Coalisland",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Fr. Peter Campbell Park",
    "Code": "",
    "Latitude": "54.543273",
    "Longitude": "-6.690517",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/nafianna1903",
    "Wikipedia": "https://en.wikipedia.org/wiki/Coalisland_Na_Fianna_GAC"
  },
  {
    "File": "Ireland",
    "Club": "Naomh Colmcille GAA, Coalisland/Clonoe",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Chlochóg",
    "Code": "",
    "Latitude": "54.53822",
    "Longitude": "-6.649469",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/naomhcolumcille",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "O'Donovan Rossa's GAA, Ardboe",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Michael Coney Park",
    "Code": "",
    "Latitude": "54.614172",
    "Longitude": "-6.551919",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/ardboegfc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ardboe_O%27Donovan_Rossa_GAC"
  },
  {
    "File": "Ireland",
    "Club": "O'Neill's GAA, Aghaloo",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Aghaloo GAA Grounds",
    "Code": "",
    "Latitude": "54.407448",
    "Longitude": "-6.978524",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/aghalooofficial",
    "Wikipedia": "https://en.wikipedia.org/wiki/Aghaloo_O%27Neills_GAC"
  },
  {
    "File": "Ireland",
    "Club": "O'Rahilly's GAA, Clonoe",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "O'Rahilly Park",
    "Code": "",
    "Latitude": "54.533554",
    "Longitude": "-6.677183",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/clonoeorahillys",
    "Wikipedia": "https://en.wikipedia.org/wiki/Clonoe_O%27Rahilly%27s_GAC"
  },
  {
    "File": "Ireland",
    "Club": "Owen Roe's GAA, Brackaville",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Patrick O'Brien Park",
    "Code": "",
    "Latitude": "54.550859",
    "Longitude": "-6.715102",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/brackavillegfc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Brackaville_Owen_Roes_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Owen Roe's GAA, Leckpatrick",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc an Ghleanna",
    "Code": "",
    "Latitude": "54.842718",
    "Longitude": "-7.357853",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/owenroes",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Pearse Óg GAA, Dregish",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Dregish GAA grounds",
    "Code": "",
    "Latitude": "54.667527",
    "Longitude": "-7.460411",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Dregish_Pearse_%C3%93g_GAC"
  },
  {
    "File": "Ireland",
    "Club": "Pearse's GAA, Fintona",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Laurence's Park",
    "Code": "",
    "Latitude": "54.49211",
    "Longitude": "-7.327816",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/fintonapearses",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Pearse's GAA, Galbally",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Pearse Park",
    "Code": "",
    "Latitude": "54.543001",
    "Longitude": "-6.904847",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/galballypearses",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Plunkett's GAA, Pomeroy",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Plunkett Park",
    "Code": "",
    "Latitude": "54.593823",
    "Longitude": "-6.936975",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/theplunkettsgac",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Robert Emmet's GAA, Brockagh",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Fr. McGeough Park",
    "Code": "",
    "Latitude": "54.561066",
    "Longitude": "-6.599255",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Sarsfield's GAA, Drumragh",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Clanabogan",
    "Code": "",
    "Latitude": "54.570499",
    "Longitude": "-7.360705",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/drumraghgac",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Sigerson's GAA, Strabane",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Sigerson Park",
    "Code": "",
    "Latitude": "54.816627",
    "Longitude": "-7.457993",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/sigersonsgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Colmcille's GAA, Carrickmore",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Naomh Colm Cille",
    "Code": "",
    "Latitude": "54.592369",
    "Longitude": "-7.067623",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/carmengaa32",
    "Wikipedia": "https://en.wikipedia.org/wiki/Carrickmore_St_Colmcille%27s_GFC"
  },
  {
    "File": "Ireland",
    "Club": "St. Columba's GAA, Urney",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Cutt Park",
    "Code": "",
    "Latitude": "54.794333",
    "Longitude": "-7.53218",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/urneygaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Urney_St_Columba%27s_GAC"
  },
  {
    "File": "Ireland",
    "Club": "St. Davog's, Aghyaran",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Michael Dolan Park",
    "Code": "",
    "Latitude": "54.677623",
    "Longitude": "-7.704023",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/AghyaranGAA",
    "Wikipedia": "https://en.wikipedia.org/wiki/Aghyaran_St_Davog%27s_GAC"
  },
  {
    "File": "Ireland",
    "Club": "St. Dympna's GAA, Dromore",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Gardrum Park",
    "Code": "",
    "Latitude": "54.51581",
    "Longitude": "-7.45148",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/dromoregfc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Dromore_St_Dympna%27s_GFC"
  },
  {
    "File": "Ireland",
    "Club": "St. Enda's GAA, Omagh",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Healy Park",
    "Code": "",
    "Latitude": "54.613985",
    "Longitude": "-7.296944",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/omaghstendas",
    "Wikipedia": "https://en.wikipedia.org/wiki/Omagh_St_Enda%27s_GAA"
  },
  {
    "File": "Ireland",
    "Club": "St. Eugene's GAA, Castlederg",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Marius McHugh Park",
    "Code": "",
    "Latitude": "54.707328",
    "Longitude": "-7.599265",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Castlederg_St_Eugene%27s_GAC"
  },
  {
    "File": "Ireland",
    "Club": "St. Eugene's GAA, Newtownstewart",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Naomh Eoghan",
    "Code": "",
    "Latitude": "54.718492",
    "Longitude": "-7.371679",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Newtownstewart_St_Eugene%27s_GAC"
  },
  {
    "File": "Ireland",
    "Club": "St. Joseph's GAA, Glenelly",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Glenelly GAA Grounds, Plumbridge",
    "Code": "",
    "Latitude": "54.766177",
    "Longitude": "-7.250513",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Glenelly_St_Joseph%27s_GAC"
  },
  {
    "File": "Ireland",
    "Club": "St. Macartan's GAA, Augher",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Fr. Patrick Hackett Park",
    "Code": "",
    "Latitude": "54.436332",
    "Longitude": "-7.120059",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/aneochair",
    "Wikipedia": "https://en.wikipedia.org/wiki/Augher_St_Macartan%27s_GAC"
  },
  {
    "File": "Ireland",
    "Club": "St. Macartan's GAA, Trillick",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Donnelly Park",
    "Code": "",
    "Latitude": "54.452746",
    "Longitude": "-7.491399",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/trillickgac",
    "Wikipedia": "https://en.wikipedia.org/wiki/Trillick_St_Macartan%27s_GAC"
  },
  {
    "File": "Ireland",
    "Club": "St. Malachy's GAA, Edendork",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Edendork GAA Grounds",
    "Code": "",
    "Latitude": "54.522556",
    "Longitude": "-6.759909",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/edendorkgac",
    "Wikipedia": "https://en.wikipedia.org/wiki/Edendork_St_Malachy%27s_GAC"
  },
  {
    "File": "Ireland",
    "Club": "St. Malachy's GAA, Moortown",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "P.T. Tobin Memorial Park",
    "Code": "",
    "Latitude": "54.637103",
    "Longitude": "-6.516028",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/moortowngac",
    "Wikipedia": "https://en.wikipedia.org/wiki/Moortown_St_Malachy%27s_GAC"
  },
  {
    "File": "Ireland",
    "Club": "St. Mary's GAA, Killeeshil",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Mary's Park",
    "Code": "",
    "Latitude": "54.49185",
    "Longitude": "-6.943026",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Killeeshil_St_Mary%27s_GAC"
  },
  {
    "File": "Ireland",
    "Club": "St. Mary's GAA, Killyclogher",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Ballinamullan",
    "Code": "",
    "Latitude": "54.60123",
    "Longitude": "-7.25474",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/killycloghergaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Killyclogher_St_Mary%27s_GAC"
  },
  {
    "File": "Ireland",
    "Club": "St. Mary's GAA, Killyman",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Mary's Park",
    "Code": "",
    "Latitude": "54.507296",
    "Longitude": "-6.673472",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/killymangac",
    "Wikipedia": "https://en.wikipedia.org/wiki/Killyman_St_Mary%27s_GAC"
  },
  {
    "File": "Ireland",
    "Club": "St. Patrick's GAA, Donaghmore",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Fr. Éamonn Devlin Park",
    "Code": "",
    "Latitude": "54.534032",
    "Longitude": "-6.812071",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/donaghmoregaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Donaghmore_St_Patrick%27s_GAC"
  },
  {
    "File": "Ireland",
    "Club": "St. Patrick's GAA, Eglish",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Fr. Connolly Park",
    "Code": "",
    "Latitude": "54.45196",
    "Longitude": "-6.798555",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Eglish_St_Patrick%27s_GAC"
  },
  {
    "File": "Ireland",
    "Club": "St. Patrick's GAA, Gortin",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Gortin GAA Grounds",
    "Code": "",
    "Latitude": "54.718342",
    "Longitude": "-7.228704",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/gortingaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Gortin_St_Patrick%27s_GAC"
  },
  {
    "File": "Ireland",
    "Club": "St. Patrick's GAA, Greencastle",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Greencastle GAA Grounds",
    "Code": "",
    "Latitude": "54.698255",
    "Longitude": "-7.067184",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/greencastlegaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Patrick's GAA, Tattyreagh",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Darcy Park",
    "Code": "",
    "Latitude": "54.534817",
    "Longitude": "-7.281799",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/tattyreaghgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Tattyreagh_St_Patrick%27s_GAC"
  },
  {
    "File": "Ireland",
    "Club": "St. Patrick's GAA, Rock",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Naomh Pádraig",
    "Code": "",
    "Latitude": "54.599205",
    "Longitude": "-6.831476",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/ancharraig",
    "Wikipedia": "https://en.wikipedia.org/wiki/Rock_St_Patrick%27s_GAC"
  },
  {
    "File": "Ireland",
    "Club": "St. Teresa's GAA, Loughmacrory",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc an Locha",
    "Code": "",
    "Latitude": "54.627368",
    "Longitude": "-7.105762",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Loughmacrory_St_Teresa%27s_GAC"
  },
  {
    "File": "Ireland",
    "Club": "Stewartstown Harps",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Mullaghmoyle",
    "Code": "",
    "Latitude": "54.566203",
    "Longitude": "-6.689505",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/an_chraobh",
    "Wikipedia": "https://en.wikipedia.org/wiki/Stewartstown_Harps_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Strabane Shamrocks",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Sigerson Park",
    "Code": "",
    "Latitude": "54.818395",
    "Longitude": "-7.457211",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/strabashamrocks",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Thomas Clarke's GAA, Dungannon",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "O'Neill Park",
    "Code": "",
    "Latitude": "54.508647",
    "Longitude": "-6.787287",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/dgnclarkegfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Tír na nÓg GAA, The Moy",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Thír na nÓg",
    "Code": "",
    "Latitude": "54.443301",
    "Longitude": "-6.697002",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/anmhaigh",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Wolfe Tone's GAA, Drumquin",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "McGirr Park",
    "Code": "",
    "Latitude": "54.612331",
    "Longitude": "-7.491606",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/drumquingaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Wolfe Tone's GAA, Kildress",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Peter Tierney Park",
    "Code": "",
    "Latitude": "54.64009",
    "Longitude": "-6.924508",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Tyrone",
    "County": "Tyrone",
    "Twitter": "https://twitter.com/kwtgac",
    "Wikipedia": "https://en.wikipedia.org/wiki/Kildress_Wolfe_Tones_GAC"
  },
  {
    "File": "Ireland",
    "Club": "Art McMurrough's GAA, Belnaleck",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Belnaleck GAA Grounds",
    "Code": "",
    "Latitude": "54.290111",
    "Longitude": "-7.672727",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Fermanagh",
    "County": "Fermanagh",
    "Twitter": "https://twitter.com/belnaleckgac",
    "Wikipedia": "https://en.wikipedia.org/wiki/Belnaleck_Art_McMurroughs_GAC"
  },
  {
    "File": "Ireland",
    "Club": "St. Aidan's GAA, Derrylin",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "",
    "Code": "",
    "Latitude": "54.1916067",
    "Longitude": "-7.5684442",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Fermanagh",
    "County": "Fermanagh",
    "Twitter": "https://twitter.com/naomhaodhan",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Brian Boru GAA, Kinawley",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Patrick McManus Park",
    "Code": "",
    "Latitude": "54.217359",
    "Longitude": "-7.676336",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Fermanagh",
    "County": "Fermanagh",
    "Twitter": "https://twitter.com/kinawleygfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Derrygonnelly Harps",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Canon Tom Maguire Park",
    "Code": "",
    "Latitude": "54.421938",
    "Longitude": "-7.827696",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Fermanagh",
    "County": "Fermanagh",
    "Twitter": "https://twitter.com/DgonnellyHarps",
    "Wikipedia": "https://en.wikipedia.org/wiki/Derrygonnelly_Harps_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Emmett's GAA, Lisnaskea",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Emmet Park",
    "Code": "",
    "Latitude": "54.249707",
    "Longitude": "-7.452027",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Fermanagh",
    "County": "Fermanagh",
    "Twitter": "https://twitter.com/lisnaskeaemmett",
    "Wikipedia": "https://en.wikipedia.org/wiki/Lisnaskea_Emmetts_GAC"
  },
  {
    "File": "Ireland",
    "Club": "Enniskillen Gaels",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Brewster Park",
    "Code": "",
    "Latitude": "54.351022",
    "Longitude": "-7.634843",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Fermanagh",
    "County": "Fermanagh",
    "Twitter": "https://twitter.com/enniskillengaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Enniskillen_Gaels_GAC"
  },
  {
    "File": "Ireland",
    "Club": "Erne Gaels, Belleek",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc na hEirne",
    "Code": "",
    "Latitude": "54.48504",
    "Longitude": "-8.088652",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Fermanagh",
    "County": "Fermanagh",
    "Twitter": "https://twitter.com/ernegaelsgac",
    "Wikipedia": "https://en.wikipedia.org/wiki/Erne_Gaels_GAC"
  },
  {
    "File": "Ireland",
    "Club": "First Fermanagh's GAA, Newtownbutler",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Newtownbutler GAA Grounds",
    "Code": "",
    "Latitude": "54.187566",
    "Longitude": "-7.364801",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Fermanagh",
    "County": "Fermanagh",
    "Twitter": "https://twitter.com/firstfermanaghs",
    "Wikipedia": "https://en.wikipedia.org/wiki/Newtownbutler_First_Fermanaghs_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Heber McMahon's GAA, Brookeborough",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Brookeborough GAA Grounds",
    "Code": "",
    "Latitude": "54.312959",
    "Longitude": "-7.39369",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Fermanagh",
    "County": "Fermanagh",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "O'Connell's GAA, Derrylin",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "O'Connell Park",
    "Code": "",
    "Latitude": "54.204195",
    "Longitude": "-7.575962",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Fermanagh",
    "County": "Fermanagh",
    "Twitter": "https://twitter.com/derrylingfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "O'Dwyer's GAA, Coa",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Coa GAA Grounds",
    "Code": "",
    "Latitude": "54.40243",
    "Longitude": "-7.537014",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Fermanagh",
    "County": "Fermanagh",
    "Twitter": "https://twitter.com/coaodwyers",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "O'Rahilly's GAA, Belcoo",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "MacNean Park",
    "Code": "",
    "Latitude": "54.298865",
    "Longitude": "-7.883084",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Fermanagh",
    "County": "Fermanagh",
    "Twitter": "https://twitter.com/belcoogaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Roslea Shamrocks",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Shamrock Park",
    "Code": "",
    "Latitude": "54.240537",
    "Longitude": "-7.169908",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Fermanagh",
    "County": "Fermanagh",
    "Twitter": "https://twitter.com/rosleagfc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Roslea_Shamrocks_GFC"
  },
  {
    "File": "Ireland",
    "Club": "St. Joseph's GAA, Ederney",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Naomh Iósaf",
    "Code": "",
    "Latitude": "54.531447",
    "Longitude": "-7.655133",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Fermanagh",
    "County": "Fermanagh",
    "Twitter": "https://twitter.com/ederneygaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ederney_St_Joseph%27s_GAC"
  },
  {
    "File": "Ireland",
    "Club": "St. Macartan's GAA, Aghadrumsee",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Macartan's Park",
    "Code": "",
    "Latitude": "54.23729",
    "Longitude": "-7.233976",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Fermanagh",
    "County": "Fermanagh",
    "Twitter": "https://twitter.com/stmacartans",
    "Wikipedia": "https://en.wikipedia.org/wiki/Aghadrumsee_St_Macartan%27s_GAC"
  },
  {
    "File": "Ireland",
    "Club": "St. Mary's GAA, Devenish",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Mary's Park",
    "Code": "",
    "Latitude": "54.41029",
    "Longitude": "-8.091314",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Fermanagh",
    "County": "Fermanagh",
    "Twitter": "https://twitter.com/devenishgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Mary's GAA, Maguiresbridge",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc na hÓige",
    "Code": "",
    "Latitude": "54.291314",
    "Longitude": "-7.477572",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Fermanagh",
    "County": "Fermanagh",
    "Twitter": "https://twitter.com/bridgegfc",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Molaise's GAA, Irvinestown",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Molaise's Park",
    "Code": "",
    "Latitude": "54.474998",
    "Longitude": "-7.62985",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Fermanagh",
    "County": "Fermanagh",
    "Twitter": "https://twitter.com/naomhmolaise",
    "Wikipedia": "https://en.wikipedia.org/wiki/Irvinestown_St_Molaise_GFC"
  },
  {
    "File": "Ireland",
    "Club": "St. Patrick's GAA, Donagh",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Louis Leonard Memorial Park",
    "Code": "",
    "Latitude": "54.215802",
    "Longitude": "-7.38902",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Fermanagh",
    "County": "Fermanagh",
    "Twitter": "https://twitter.com/stpatsgfcdonagh",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Patricks GAA, Lisbellaw",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Patrick's Park",
    "Code": "",
    "Latitude": "54.344695",
    "Longitude": "-7.558182",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Fermanagh",
    "County": "Fermanagh",
    "Twitter": "https://twitter.com/lisbellaw_hc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Lisbellaw_St_Patrick%27s_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Teemore Shamrocks",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Mary's Park",
    "Code": "",
    "Latitude": "54.144486",
    "Longitude": "-7.567095",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Fermanagh",
    "County": "Fermanagh",
    "Twitter": "https://twitter.com/teemoregfc",
    "Wikipedia": "https://en.wikipedia.org/wiki/Teemore_Shamrocks_GFC"
  },
  {
    "File": "Ireland",
    "Club": "Tempo Maguires",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Patrick's Park",
    "Code": "",
    "Latitude": "54.381779",
    "Longitude": "-7.460613",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Fermanagh",
    "County": "Fermanagh",
    "Twitter": "https://twitter.com/TempoMaguires",
    "Wikipedia": "https://en.wikipedia.org/wiki/Tempo_Maguires_GAC"
  },
  {
    "File": "Ireland",
    "Club": "All Saints GAA, Ballymena",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Slemish Park",
    "Code": "",
    "Latitude": "54.86743",
    "Longitude": "-6.227189",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "https://twitter.com/allsaintsgac",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Cardinal O'Donnell's, Belfast",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "MacRory Park",
    "Code": "",
    "Latitude": "54.590545",
    "Longitude": "-5.972702",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "https://twitter.com/gacodonnells",
    "Wikipedia": "https://en.wikipedia.org/wiki/Belfast"
  },
  {
    "File": "Ireland",
    "Club": "Carey Faughs GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Patrick's Park, Ballyvoy",
    "Code": "",
    "Latitude": "55.1986",
    "Longitude": "-6.1938",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Clooney Gaels",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Fr. McGuigan Park",
    "Code": "",
    "Latitude": "54.82385",
    "Longitude": "-6.387777",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "https://twitter.com/ahoghillgaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Clooney_Gaels_GAC"
  },
  {
    "File": "Ireland",
    "Club": "Con Magee's GAA, Glenravel",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Fr. Maginn Park",
    "Code": "",
    "Latitude": "54.984596",
    "Longitude": "-6.186593",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "https://twitter.com/con_magee",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Cuchullainn's GAA, Dunloy",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Pearse Park",
    "Code": "",
    "Latitude": "55.007717",
    "Longitude": "-6.41204",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "https://twitter.com/dunloygac",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Éire Óg, Derriaghy",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Woodlands Park",
    "Code": "",
    "Latitude": "54.56853",
    "Longitude": "-5.98518",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "https://twitter.com/eireoggac",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Erin's Own, Cargin",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Cargin GAA Grounds",
    "Code": "",
    "Latitude": "54.749007",
    "Longitude": "-6.458106",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "https://twitter.com/cargin_gac",
    "Wikipedia": "https://en.wikipedia.org/wiki/Erin%27s_Own_GAC%2C_Cargin"
  },
  {
    "File": "Ireland",
    "Club": "Glen Rovers, Armoy",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc an Cromach",
    "Code": "",
    "Latitude": "55.1370902",
    "Longitude": "-6.2955139",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "https://twitter.com/glenroversarmoy",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Gort na Móna",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Mhic Ionnrachtaigh",
    "Code": "",
    "Latitude": "54.5906",
    "Longitude": "-5.995",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "https://twitter.com/gortnamonaclg",
    "Wikipedia": "https://en.wikipedia.org/wiki/Gort_na_M%C3%B3na_GAC"
  },
  {
    "File": "Ireland",
    "Club": "John Mitchel's GAA, Belfast",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Woodlands",
    "Code": "",
    "Latitude": "54.562768",
    "Longitude": "-6.033005",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/John_Mitchel%27s_Hurling_Club"
  },
  {
    "File": "Ireland",
    "Club": "Kickham's GAA, Ardoyne",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Cliftonville Cricket Ground",
    "Code": "",
    "Latitude": "54.6858",
    "Longitude": "-5.9973",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "https://twitter.com/ardoynegac",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ardoyne"
  },
  {
    "File": "Ireland",
    "Club": "Kickham's GAC, Creggan",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Creggan GAA Grounds",
    "Code": "",
    "Latitude": "54.719573",
    "Longitude": "-6.3600587",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "https://twitter.com/kickhamscreggan",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "CLG Laochra Loch Lao",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Spórtlann na hÉireann",
    "Code": "",
    "Latitude": "54.591348",
    "Longitude": "-5.9685765",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "https://twitter.com/lamhdheargclg",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Lámh Dhearg GAA, Hannahstown",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc na Láimhe Deirge",
    "Code": "",
    "Latitude": "54.588335",
    "Longitude": "-6.038245",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "https://twitter.com/lamhdheargclg",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Latharna Óg GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Latharna Óg GAA Grounds",
    "Code": "",
    "Latitude": "54.87706753",
    "Longitude": "-5.85860296",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "https://twitter.com/latharnaog",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Loch Mór Dál gCais GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Crumlin",
    "Code": "",
    "Latitude": "54.621",
    "Longitude": "-6.2141",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "https://twitter.com/lochmordalgcais",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Loughgiel Shamrocks",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Fr. Healy Park",
    "Code": "",
    "Latitude": "55.061282",
    "Longitude": "-6.310512",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "https://twitter.com/loughgielgac",
    "Wikipedia": "https://en.wikipedia.org/wiki/Loughgiel_Shamrocks_GAC"
  },
  {
    "File": "Ireland",
    "Club": "McQuillan's GAA, Ballycastle",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Mhic Uilín",
    "Code": "",
    "Latitude": "55.204051",
    "Longitude": "-6.273102",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "https://twitter.com/mcquillangac",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Michael Davitt's GAC, Belfast",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Poleglass",
    "Code": "",
    "Latitude": "54.57552",
    "Longitude": "-5.97088",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "https://twitter.com/davitts1912",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "O'Donovan Rossa's GAC, Belfast",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Rossa Park",
    "Code": "",
    "Latitude": "54.57464",
    "Longitude": "-6.006294",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "https://twitter.com/RossaGACBelfast",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Oisín's GAA, Glenariffe",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "McAllister/McVeigh Memorial Park",
    "Code": "",
    "Latitude": "55.05484494",
    "Longitude": "-6.05173517",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "https://twitter.com/oisinsclg",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Patrick Pearse's, Belfast",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Cliftonville Cricket Ground",
    "Code": "",
    "Latitude": "54.616736",
    "Longitude": "-5.947392",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "https://twitter.com/patrickpearses",
    "Wikipedia": "https://en.wikipedia.org/wiki/Belfast"
  },
  {
    "File": "Ireland",
    "Club": "Patrick Sarfield's GAA, Belfast",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Phádraig Sáirséil",
    "Code": "",
    "Latitude": "54.574646",
    "Longitude": "-6.006268",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/Belfast"
  },
  {
    "File": "Ireland",
    "Club": "Rathlin Island",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Rathlin Island",
    "Code": "",
    "Latitude": "55.292381",
    "Longitude": "-6.262749",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Robert Emmet's, Cushendun",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Lig An Airgid",
    "Code": "",
    "Latitude": "55.130366",
    "Longitude": "-6.04369",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "https://twitter.com/cushendun_gac",
    "Wikipedia": "https://en.wikipedia.org/wiki/Robert_Emmet_Smith"
  },
  {
    "File": "Ireland",
    "Club": "Roger Casement's GAC, Portglenone",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Ó'Cahan Park",
    "Code": "",
    "Latitude": "54.88252",
    "Longitude": "-6.482781",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "https://twitter.com/casementsgac",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Ruairí Óg's GAA, Cushendall",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Mhuire",
    "Code": "",
    "Latitude": "55.077538",
    "Longitude": "-6.058273",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "https://twitter.com/ruairiogcdall",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "Shane O'Neill's GAA, Glenarm",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Forsyth Park, Feystown",
    "Code": "",
    "Latitude": "54.928236",
    "Longitude": "-5.951509",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "https://twitter.com/shaneuineill",
    "Wikipedia": "https://en.wikipedia.org/wiki/Shane_O%27Neill%27s_GAC"
  },
  {
    "File": "Ireland",
    "Club": "St. Agnes' GAA, Andersontown",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Naomh Úna",
    "Code": "",
    "Latitude": "54.568222",
    "Longitude": "-5.985396",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "https://twitter.com/naomh_una_clg",
    "Wikipedia": "https://en.wikipedia.org/wiki/St._Agnes_Cemetery"
  },
  {
    "File": "Ireland",
    "Club": "St. Brigid's GAC, Belfast",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Musgrave Park",
    "Code": "",
    "Latitude": "54.571242",
    "Longitude": "-5.975754",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "https://twitter.com/naomhbridclg",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Brigid's GAA, Cloughmills",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Fr. Leonard Park",
    "Code": "",
    "Latitude": "55.011488",
    "Longitude": "-6.328958",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "https://twitter.com/stbrigidscmills",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Comgall's GAA, Antrim",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Dunsilly",
    "Code": "",
    "Latitude": "54.721602",
    "Longitude": "-6.219077",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "https://twitter.com/comgallsgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Enda's GAA, Glengormley",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Gerry Devlin Park",
    "Code": "",
    "Latitude": "54.662454",
    "Longitude": "-5.968857",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "https://twitter.com/naomheannaclg",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Ergnat's GAA, Moneyglass",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Ergnat's Park",
    "Code": "",
    "Latitude": "54.779743",
    "Longitude": "-6.423082",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "https://twitter.com/moneyglassgac",
    "Wikipedia": "https://en.wikipedia.org/wiki/Moneyglass"
  },
  {
    "File": "Ireland",
    "Club": "St. Gall's GAA, Belfast",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "De La Salle Park",
    "Code": "",
    "Latitude": "54.584527",
    "Longitude": "-5.96968",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "https://twitter.com/naomhgall",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. James GAA, Aldergrove",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Crumlin",
    "Code": "",
    "Latitude": "54.6164029",
    "Longitude": "-6.22496103",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "https://twitter.com/aldergrovegaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. John's GAA, Belfast",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Corrigan Park",
    "Code": "",
    "Latitude": "54.592333",
    "Longitude": "-5.977393",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "",
    "Wikipedia": "https://en.wikipedia.org/wiki/St_John%27s_GAA_%28Antrim%29"
  },
  {
    "File": "Ireland",
    "Club": "St. Joseph's GAA, Glenavy",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Joseph's Park",
    "Code": "",
    "Latitude": "54.579567",
    "Longitude": "-6.223824",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "https://twitter.com/glenavygaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/St._Joseph%27s%2C_Newfoundland_and_Labrador"
  },
  {
    "File": "Ireland",
    "Club": "St. Malachy's GAC, Belfast",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Cherryvale",
    "Code": "",
    "Latitude": "54.57567",
    "Longitude": "-5.91052",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "https://twitter.com/stmalsbelfast",
    "Wikipedia": "https://en.wikipedia.org/wiki/St._Malachy%27s_Memorial_High_School"
  },
  {
    "File": "Ireland",
    "Club": "St. Mary's GAA, Aghagallon",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Mary's Park",
    "Code": "",
    "Latitude": "54.500464",
    "Longitude": "-6.272927",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "https://twitter.com/aghagallongaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Mary's GAA, Ahoghill",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Fr. McGuigan Park",
    "Code": "",
    "Latitude": "54.823856",
    "Longitude": "-6.387851",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "https://twitter.com/ahoghillgaa",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Mary's GAC, Rasharkin",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Naomh Muire, Dreen",
    "Code": "",
    "Latitude": "54.941544",
    "Longitude": "-6.485376",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "https://twitter.com/rasharkingac",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Patrick's GAA, Lisburn",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Kirkwoods Park",
    "Code": "",
    "Latitude": "54.528101",
    "Longitude": "-6.049427",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "https://twitter.com/stpatricksgac",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Paul's GAC, Belfast",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "St. Paul's Park, Shaws Road",
    "Code": "",
    "Latitude": "54.574727",
    "Longitude": "-6.006261",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "https://twitter.com/stpaulsgac",
    "Wikipedia": ""
  },
  {
    "File": "Ireland",
    "Club": "St. Teresa's GAA, Belfast",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "McDonnell/Doherty Park",
    "Code": "",
    "Latitude": "54.57902",
    "Longitude": "-6.007327",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "https://twitter.com/naomhtreasaclg",
    "Wikipedia": "https://en.wikipedia.org/wiki/St._Teresa_Secondary_School"
  },
  {
    "File": "Ireland",
    "Club": "Tír na nÓg, Randalstown",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Tr na nÓg GAA Grounds, Whitehill",
    "Code": "",
    "Latitude": "54.749254",
    "Longitude": "-6.286166",
    "Province": "Ulster",
    "Country": "United Kingdom",
    "Division": "Antrim",
    "County": "Antrim",
    "Twitter": "https://twitter.com/tirnanoggac",
    "Wikipedia": "https://en.wikipedia.org/wiki/T%C3%ADr_na_n%C3%93g_%28band%29"
  },
  {
    "File": "Ireland",
    "Club": "Mattock Rangers, Collon",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Páirc Maiteoige",
    "Code": "",
    "Latitude": "53.774491",
    "Longitude": "-6.480678",
    "Province": "Leinster",
    "Country": "Ireland",
    "Division": "Louth",
    "County": "Louth",
    "Twitter": "https://twitter.com/mattockrangers",
    "Wikipedia": "https://en.wikipedia.org/wiki/Mattock_Rangers_GAA"
  },
  {
    "File": "Ireland",
    "Club": "Ballinora GAA",
    "Colours": {
      "primary": "",
      "secondary": ""
    },
    "Crest": "",
    "Pitch": "Ballymah",
    "Code": "",
    "Latitude": "51.8641764",
    "Longitude": "-8.5550643",
    "Province": "Munster",
    "Country": "Ireland",
    "Division": "Cork",
    "County": "Cork",
    "Twitter": "https://twitter.com/ballinoragaa",
    "Wikipedia": "https://en.wikipedia.org/wiki/Ballinora_GAA"
  }
];
