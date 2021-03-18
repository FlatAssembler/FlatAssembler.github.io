// Stavimo bazu podataka o etimologijama iz stvarnog svijeta, kao JSON, na
// početak datoteke. JavaScript nema standardne biblioteke za čitanje i pisanje
// iz datoteka, ali, na svu sreću, JSON se lako uključi JavaScript.
const baza_podataka = [
  {
    comment: "Proto-Berber word for number 1",
    root: "yen",
    descendants: ["yun", "yiwen", "yijen", "yan", "iun", "ien"],
  },
  {
    comment: "Proto-Berber word for number 2",
    root: "sen",
    descendants: ["sen", "sme", "sin", "xina", "essin", "exsin"],
  },
  {
    comment: "Proto-Berber word for number 3",
    root: "krad",
    descendants: ["kared", "tlat", "krad", "karat", "kerad"],
  },
  {
    comment: "Proto-Berber word for number 4",
    root: "okkoz",
    descendants: ["aquz", "acodet", "kuz", "akoz", "okoz", "ekoz"],
  },
  {
    comment: "Proto-Berber word for number 10",
    root: "meraw",
    descendants: ["maraw", "marava", "marago", "mraw", "mereg", "meraw"],
  },
  {
    comment: "Ancient Egyptian word for number 1",
    root: "wuhhuw",
    descendants: ["owai", "oua", "ouei"],
  },
  {
    comment: "Ancient Egyptian word for number 2",
    root: "sinuway",
    descendants: ["snau", "sno", "sneu", "snewu"],
  },
  {
    comment: "Ancient Egyptian word for number 3",
    root: "hamtaw",
    descendants: ["xomt", "xamt"],
  },
  {
    comment: "Ancient Egyptian word for number 4",
    root: "yaftaw",
    descendants: ["ftou", "ftau"],
  },
  {
    comment: "Ancient Egyptian word for number 5",
    root: "tiyaw",
    descendants: ["tiou"],
  },
  {
    comment: "Ancient Egyptian word for number 6",
    root: "sarsaw",
    descendants: ["sou", "sau"],
  },
  {
    comment: "Ancient Egyptian word for number 7",
    root: "safhaw",
    descendants: ["xaxf", "xexb"],
  },
  {
    comment: "Ancient Egyptian word for number 8",
    root: "hamanaw",
    descendants: ["xmen", "xmoun", "smoun"],
  },
  {
    comment: "Ancient Egyptian word for number 9",
    root: "pisicaw",
    descendants: ["psit", "psis"],
  },
  {
    comment: "Ancient Egyptian word for number 10",
    root: "mucaw",
    descendants: ["met"],
  },
  {
    comment: "Proto-Semitic word for number 1",
    root: "hahad",
    descendants: [
      "wahid",
      "had",
      "ihad",
      "ahad",
      "wedu",
      "ahadu",
      "hat",
      "and",
      "hade",
      "at",
    ],
  },
  {
    comment: "Proto-Semitic word for number 2",
    root: "tin",
    descendants: [
      "itna",
      "zung",
      "tnei",
      "taren",
      "itr",
      "sene",
      "xetay",
      "exnay",
      "xtay",
      "xnay",
      "xena",
      "xina",
      "tina",
    ],
  },
  {
    comment: "Proto-Semitic word for number 3",
    root: "xalat",
    descendants: [
      "talat",
      "tlat",
      "tliet",
      "tlet",
      "tulat",
      "tlot",
      "salus",
      "xalox",
      "xulox",
      "salats",
      "seles",
      "sots",
      "sihist",
      "talat",
    ],
  },
  {
    comment: "Proto-Semitic word for number 4",
    root: "harbah",
    descendants: [
      "harba",
      "raba",
      "arba",
      "harbha",
      "arpah",
      "hareb",
      "harbo",
      "erbe",
      "arat",
      "arbat",
      "harbah",
    ],
  },
  {
    comment: "Proto-Semitic word for number 5",
    root: "hamx",
    descendants: [
      "hamsa",
      "hamsi",
      "hemsa",
      "amxa",
      "homis",
      "hames",
      "jamix",
      "hamts",
      "hamux",
      "amest",
      "hamixu",
    ],
  },
  {
    comment: "Proto-Semitic word for number 6",
    root: "xidt",
    descendants: [
      "sitta",
      "sitte",
      "setti",
      "sitta",
      "sutte",
      "sith",
      "sis",
      "xex",
      "xexah",
      "ses",
      "tittu",
    ],
  },
  {
    comment: "Proto-Semitic word for number 7",
    root: "xabh",
    descendants: [
      "sabha",
      "sebha",
      "saba",
      "sebah",
      "xabha",
      "xubha",
      "xebhe",
      "seba",
      "xibeh",
      "xivoh",
      "sebe",
    ],
  },
  {
    comment: "Proto-Semitic word for number 8",
    root: "tamaniy",
    descendants: [
      "tamaniya",
      "tmanya",
      "hmenye",
      "tmienya",
      "tumanya",
      "tmonya",
      "xemben",
      "semuni",
      "xemoneh",
      "xemonah",
      "xumona",
      "samane",
      "samantu",
      "summunt",
      "simwot",
      "tamani",
    ],
  },
  {
    comment: "Proto-Semitic word for number 9",
    root: "tixh",
    descendants: [
      "tisha",
      "tesha",
      "teshu",
      "disga",
      "tixha",
      "texha",
      "tuxha",
      "texeh",
      "tisah",
      "texah",
      "tixeh",
      "tixet",
      "tixit",
      "tashatu",
      "sehe",
      "zata",
      "zaxta",
      "jete",
      "tixu",
    ],
  },
  {
    comment: "Proto-Semitic word for number 10",
    root: "hasar",
    descendants: [
      "haxara",
      "haxra",
      "gaxra",
      "hasra",
      "hesra",
      "hexer",
      "hisir",
      "heser",
      "hasara",
      "exer",
      "asara",
      "asar",
      "aser",
      "asur",
      "asir",
      "axaru",
    ],
  },
  {
    comment: "Proto-Austronesian word for number 1",
    root: "isa",
    descendants: [
      "ita",
      "isa",
      "itha",
      "sa",
      "ise",
      "asa",
      "eka",
      "so",
      "iso",
      "usa",
      "ta",
    ],
  },
  {
    comment: "Proto-Austronesian word for number 2",
    root: "duxa",
    descendants: [
      "tosa",
      "drusa",
      "dusa",
      "zuwa",
      "yusu",
      "roxa",
      "tuxa",
      "uzsa",
      "dha",
      "ruha",
      "duha",
      "duwa",
      "dua",
      "dui",
      "rua",
      "dhuwa",
      "duwe",
      "thua",
      "duo",
      "adwa",
      "roa",
      "darua",
      "dalawa",
      "dora",
      "lua",
      "ua",
      "erwuw",
      "ece",
    ],
  },
  {
    comment: "Proto-Austronesian word for number 3",
    root: "telu",
    descendants: [
      "tolo",
      "tielu",
      "tau",
      "tulu",
      "tuyu",
      "tolo",
      "turu",
      "tru",
      "duma",
      "klau",
      "tiga",
      "tri",
      "tallu",
      "tigu",
      "tolu",
      "telo",
      "tige",
      "kiu",
      "atlu",
      "toru",
      "folu",
      "kolu",
    ],
  },
  {
    comment: "Proto-Austronesian word for number 4",
    root: "xepat",
    descendants: [
      "spet",
      "paiat",
      "sepati",
      "paat",
      "pat",
      "supate",
      "suptu",
      "xopat",
      "xpat",
      "uspat",
      "sepats",
      "paha",
      "tapat",
      "sipat",
      "peuet",
      "papat",
      "amapt",
      "opat",
      "empa",
      "paha",
      "pak",
      "empat",
      "sekawan",
      "empah",
      "hat",
      "pa",
      "uppat",
      "fat",
      "vaha",
      "ha",
      "ava",
      "wha",
      "fa",
    ],
  },
  {
    comment: "Proto-Austronesian word for number 5",
    root: "lima",
    descendants: [
      "lima",
      "hima",
      "irima",
      "eimo",
      "arima",
      "rima",
      "limo",
      "lime",
      "nimawa",
      "lale",
      "ima",
      "nima",
    ],
  },
  {
    comment: "Proto-Austronesian word for number 6",
    root: "enem",
    descendants: [
      "enem",
      "nuum",
      "unem",
      "eneme",
      "nomu",
      "nom",
      "lom",
      "hurum",
      "nam",
      "nenem",
      "anam",
      "onom",
      "enneng",
      "noho",
      "anom",
      "unom",
      "anum",
      "innem",
      "enina",
      "unum",
      "ono",
      "ogo",
    ],
  },
  {
    comment: "Proto-Austronesian word for number 7",
    root: "pitu",
    descendants: [
      "pito",
      "mitu",
      "pityu",
      "pitu",
      "uptu",
      "kito",
      "fito",
      "aso",
      "vitu",
      "whitu",
      "itua",
      "hitu",
    ],
  },
  {
    comment: "Proto-Austronesian word for number 8",
    root: "walu",
    descendants: [
      "falo",
      "alu",
      "vau",
      "walu",
      "waru",
      "voyu",
      "uwalu",
      "haru",
      "kutu",
      "arua",
      "oalu",
      "wao",
      "valu",
      "varu",
      "vahu",
      "waha",
    ],
  },
  {
    comment: "Proto-Austronesian word for number 9",
    root: "xiwa",
    descendants: [
      "siwa",
      "siva",
      "iwa",
      "sio",
      "uswa",
      "sia",
      "sanga",
      "sera",
      "siua",
      "sivu",
      "tsiwa",
      "hiva",
      "iva",
      "thiv",
    ],
  },
  {
    comment: "Proto-Austronesian word for number 10",
    root: "puluq",
    descendants: [
      "puw",
      "puluk",
      "puluh",
      "puruku",
      "pulu",
      "apluh",
      "polo",
      "fulu",
      "puloh",
      "nulu",
      "piu",
      "apulu",
      "folo",
      "pu",
      "poo",
      "hulu",
    ],
  },
  {
    comment: "Proto-Hmong-Mien word for number 1",
    root: "hi",
    descendants: ["yi", "i", "ye", "ju", "ting", "a", "hi", "ha", "ik", "ib"],
  },
  {
    comment: "Proto-Hmong-Mien word for number 2",
    root: "hui",
    descendants: [
      "wa",
      "ua",
      "u",
      "uo",
      "yi",
      "ou",
      "ay",
      "au",
      "vi",
      "o",
      "ob",
    ],
  },
  {
    comment: "Proto-Hmong-Mien word for number 3",
    root: "pyou",
    descendants: [
      "po",
      "pye",
      "pei",
      "pa",
      "pe",
      "pi",
      "pu",
      "poi",
      "pai",
      "pyei",
      "pzer",
    ],
  },
  {
    comment: "Proto-Hmong-Mien word for number 4",
    root: "plei",
    descendants: [
      "ti",
      "tsi",
      "puo",
      "tlia",
      "tlou",
      "toa",
      "plar",
      "pe",
      "lu",
      "lo",
      "lei",
      "pzei",
      "pik",
      "plaub",
    ],
  },
  {
    comment: "Proto-Hmong-Mien word for number 5",
    root: "pria",
    descendants: [
      "tia",
      "pia",
      "pi",
      "ptsiu",
      "pya",
      "piu",
      "pu",
      "pio",
      "tsa",
      "ji",
      "pza",
      "pui",
      "pei",
      "tsib",
    ],
  },
  {
    comment: "Proto-Hmong-Mien word for number 6",
    root: "kruk",
    descendants: [
      "ju",
      "tiu",
      "tio",
      "txau",
      "txu",
      "to",
      "txoh",
      "kio",
      "koh",
      "tlau",
      "rau",
      "xo",
    ],
  },
  {
    comment: "Proto-Hmong-Mien word for number 7",
    root: "dzyunh",
    descendants: [
      "txan",
      "txa",
      "son",
      "sa",
      "xon",
      "tsam",
      "zang",
      "zeng",
      "sang",
      "xia",
      "zung",
    ],
  },
  {
    comment: "Proto-Hmong-Mien word for number 8",
    root: "yat",
    descendants: [
      "yi",
      "txi",
      "ya",
      "you",
      "yo",
      "zo",
      "yek",
      "za",
      "zik",
      "zi",
      "yim",
    ],
  },
  {
    comment: "Proto-Hmong-Mien word for number 9",
    root: "nyuo",
    descendants: [
      "ko",
      "kiu",
      "txau",
      "txo",
      "txu",
      "gu",
      "dxu",
      "txhu",
      "giu",
      "cuay",
    ],
  },
  {
    comment: "Proto-Hmong-Mien word for number 10",
    root: "giuep",
    descendants: [
      "ku",
      "khu",
      "kuo",
      "txau",
      "txu",
      "gu",
      "dxok",
      "giok",
      "gau",
      "kaum",
      "ro",
      "xap",
      "xiap",
    ],
  },
  {
    comment: "Proto-Indo-European word for number 2",
    root: "dwoh",
    descendants: [
      "dui",
      "tuwa",
      "an",
      "erkou",
      "yerku",
      "yergu",
      "do",
      "dau",
      "div",
      "dew",
      "diw",
      "dou",
      "deu",
      "dwiu",
      "da",
      "je",
      "tuai",
      "tua",
      "twa",
      "two",
      "tuie",
      "tuo",
      "tou",
      "tue",
      "tsua",
      "tsvai",
      "tsue",
      "tveir",
      "tvair",
      "tueir",
      "to",
      "duo",
      "duos",
      "doi",
      "ruye",
      "duas",
      "dos",
      "deus",
      "dio",
      "du",
      "dva",
      "dve",
      "be",
      "bah",
      "wu",
      "wi",
    ],
  },
  {
    comment: "Proto-Indo-European word for number 3",
    root: "treies",
    descendants: [
      "tre",
      "trei",
      "tarris",
      "erek",
      "yereki",
      "yerek",
      "tri",
      "tiris",
      "teir",
      "tair",
      "tree",
      "threis",
      "tria",
      "thri",
      "thrio",
      "threo",
      "dhree",
      "three",
      "triye",
      "tio",
      "dri",
      "drie",
      "thria",
      "dre",
      "driye",
      "dri",
      "drei",
      "drai",
      "droe",
      "thrir",
      "thrig",
      "thru",
      "tris",
      "tres",
      "tra",
      "trowo",
      "treks",
      "triye",
      "tzi",
      "txi",
      "tao",
      "tin",
      "thuna",
      "xi",
      "hre",
      "tse",
      "su",
    ],
  },
  {
    comment: "Proto-Indo-European word for number 4",
    root: "qetuor",
    descendants: [
      "kater",
      "teter",
      "txor",
      "petor",
      "petguar",
      "pevar",
      "pesuar",
      "petuar",
      "pedair",
      "cethair",
      "cahuri",
      "kiare",
      "fidwor",
      "fider",
      "feower",
      "four",
      "fiuer",
      "vir",
      "fiar",
      "bator",
      "patru",
      "kuatro",
      "kuatri",
      "kater",
      "katr",
      "tettar",
      "tesser",
      "txetri",
      "txetur",
      "xturi",
      "txar",
      "tsar",
      "sari",
      "txadwar",
      "stuar",
      "stuer",
    ],
  },
  {
    comment: "Proto-Indo-European word for number 5",
    root: "penqe",
    descendants: [
      "pesse",
      "pese",
      "hing",
      "hink",
      "pempe",
      "pemp",
      "kuy",
      "fimf",
      "fiuf",
      "fif",
      "five",
      "veeve",
      "funf",
      "fim",
      "fem",
      "pompe",
      "pumpe",
      "kuikue",
      "qinqe",
      "cinqe",
      "kimbe",
      "txinqe",
      "sink",
      "sek",
      "pente",
      "pende",
      "peti",
      "pet",
      "piatx",
      "pec",
      "pantxa",
      "patx",
      "pas",
      "pis",
    ],
  },
  {
    comment: "Proto-Indo-European word for number 6",
    root: "swecs",
    descendants: [
      "giaste",
      "giaxte",
      "vec",
      "vek",
      "suekos",
      "hue",
      "hueg",
      "txueh",
      "se",
      "xe",
      "xei",
      "sia",
      "saihs",
      "seis",
      "seks",
      "sioks",
      "siks",
      "zes",
      "zeks",
      "sei",
      "sis",
      "heks",
      "feks",
      "eksi",
      "xesti",
      "xest",
      "xesc",
      "txa",
      "xax",
      "txe",
      "txo",
    ],
  },
  {
    comment: "Proto-Indo-European word for number 7",
    root: "septm",
    descendants: [
      "state",
      "xtate",
      "xipta",
      "xaptam",
      "eotn",
      "yotx",
      "yot",
      "sekstam",
      "seith",
      "saith",
      "sebun",
      "sibun",
      "seovon",
      "seven",
      "sigun",
      "zeven",
      "zibn",
      "siu",
      "seften",
      "zepten",
      "septem",
      "sette",
      "sapte",
      "sapti",
      "siapto",
      "siete",
      "set",
      "seat",
      "setxi",
      "siete",
      "hepta",
      "efta",
      "septini",
      "sedmi",
      "sem",
      "siem",
      "sim",
      "sedm",
      "txedem",
      "sedam",
      "axta",
      "ath",
      "haf",
      "spat",
      "sukt",
    ],
  },
  {
    comment: "Proto-Indo-European word for number 8",
    root: "hectow",
    descendants: [
      "tete",
      "tetu",
      "aitata",
      "out",
      "utx",
      "ut",
      "okstu",
      "eith",
      "eix",
      "eth",
      "wuth",
      "oht",
      "oahtx",
      "hoht",
      "ahtau",
      "athe",
      "eahta",
      "eiht",
      "ohta",
      "aht",
      "ahto",
      "axt",
      "atta",
      "okto",
      "uhto",
      "oktu",
      "otto",
      "huit",
      "ohto",
      "axto",
      "osmi",
      "osam",
      "vosiem",
      "osm",
      "osem",
      "axta",
      "ath",
      "ata",
      "haxt",
      "atu",
      "hax",
      "okat",
      "okt",
    ],
  },
  {
    comment: "Proto-Indo-European word for number 9",
    root: "hnewn",
    descendants: [
      "nan",
      "nen",
      "inn",
      "inu",
      "nau",
      "nav",
      "naw",
      "noi",
      "naoi",
      "nuy",
      "niun",
      "niyon",
      "nione",
      "nizen",
      "nine",
      "nain",
      "nigun",
      "neun",
      "nege",
      "noin",
      "nin",
      "niu",
      "nio",
      "nigyu",
      "ni",
      "nuven",
      "neven",
      "noven",
      "novem",
      "nove",
      "noe",
      "noua",
      "nu",
      "novi",
      "nuf",
      "neuf",
      "nouv",
      "nau",
      "nuobe",
      "nuebe",
      "muevi",
      "nofe",
      "ennea",
      "devuni",
      "deveni",
      "devini",
      "deveti",
      "dzieviatx",
      "deviat",
      "yevec",
      "devet",
      "nava",
      "no",
      "naum",
    ],
  },
  {
    comment: "Proto-Indo-European word for number 10",
    root: "decm",
    descendants: [
      "ziete",
      "diete",
      "dete",
      "tasn",
      "tasu",
      "dasu",
      "tekam",
      "decam",
      "dek",
      "dec",
      "deg",
      "dekan",
      "deitx",
      "taihun",
      "thiine",
      "tien",
      "ten",
      "tin",
      "tein",
      "tsen",
      "tiu",
      "tio",
      "deken",
      "desem",
      "decem",
      "dece",
      "dege",
      "zeti",
      "dik",
      "jize",
      "dietxi",
      "dez",
      "dekse",
      "dis",
      "deka",
      "deximt",
      "desenti",
      "deset",
      "dziesiatx",
      "yesac",
      "daxa",
      "rasa",
      "lasa",
      "dus",
      "dox",
      "deh",
      "datha",
      "du",
      "xak",
    ],
  },
  {
    comment: "Proto-Mayan word for the number 1",
    root: "juun",
    descendants: ["hun", "jun", "xun"],
  },
  {
    comment: "Proto-Mayan word for the number 2",
    root: "kaab",
    descendants: ["tsab", "kai", "kiep", "kaha", "hib"],
  },
  {
    comment: "Proto-Mayan word for the number 3",
    root: "oohx",
    descendants: ["ox", "oxi", "oxip", "oxeb", "oox"],
  },
  {
    comment: "Proto-Mayan word for the number 4",
    root: "kaang",
    descendants: ["tze", "kaji", "kahup", "kan", "han"],
  },
  {
    comment: "Proto-Mayan word for the number 5",
    root: "hoh",
    descendants: ["bo", "woho", "hop", "oyeb", "hoho", "vohob"],
  },
  {
    comment: "Proto-Mayan word for the number 6",
    root: "wahq",
    descendants: ["acac", "waqih", "wakip", "waqeb", "waak", "vak"],
  },
  {
    comment: "Proto-Mayan word for the number 7",
    root: "huq",
    descendants: ["buc", "wuquh", "uuk", "vuk"],
  },
  {
    comment: "Proto-Mayan word for the number 8",
    root: "waqshaq",
    descendants: ["huaxic", "wakxaqih", "wahxakhip", "waxak"],
  },
  {
    comment: "Proto-Mayan word for the number 9",
    root: "beleng",
    descendants: ["belleuh", "belejeh", "belehep", "balon", "bolon", "balun"],
  },
  {
    comment: "Proto-Mayan word for the number 10",
    root: "laxung",
    descendants: ["lahu", "lahuh", "lahun"],
  },
  {
    comment: "Proto-Sino-Tibetan word for the number 1",
    root: "ktig",
    descendants: [
      "i",
      "yi",
      "iuh",
      "ih",
      "iai",
      "yat",
      "zak",
      "ziet",
      "tsit",
      "tsek",
      "ziak",
      "seoh",
      "jit",
      "tih",
      "pakat",
      "langai",
      "cik",
      "thek",
    ],
  },
  {
    comment: "Proto-Sino-Tibetan word for the number 2",
    root: "knis",
    descendants: [
      "liang",
      "lia",
      "niang",
      "lie",
      "lizu",
      "lian",
      "koou",
      "hnac",
      "sak",
      "patni",
      "nuu",
      "nis",
      "nyih",
      "gnyis",
      "nyu",
    ],
  },
  {
    comment: "Proto-Sino-Tibetan word for the number 3",
    root: "kxum",
    descendants: [
      "san",
      "sa",
      "sae",
      "so",
      "se",
      "xie",
      "sam",
      "lhaam",
      "sang",
      "liom",
      "liam",
      "txu",
      "sa",
      "sum",
      "hsum",
      "ksum",
      "som",
    ],
  },
  {
    comment: "Proto-Sino-Tibetan word for the number 4",
    root: "pli",
    descendants: [
      "si",
      "su",
      "sei",
      "lai",
      "li",
      "lei",
      "ti",
      "xi",
      "le",
      "lue",
      "lui",
      "bisi",
      "bxi",
      "zyi",
      "vxu",
      "bxi",
      "xo",
      "ble",
      "bli",
      "yi",
    ],
  },
  {
    comment:
      "Proto-Sino-Tibetan word for the number 5. I do not know why the 'p' is reconstructed at the beginning.",
    root: "plunga",
    descendants: [
      "wu",
      "u",
      "ou",
      "vu",
      "uoh",
      "eng",
      "ungu",
      "ungau",
      "goo",
      "mu",
      "unga",
      "ungawa",
      "manga",
      "ungah",
      "ingah",
      "yanga",
      "langa",
      "yanga",
    ],
  },
  {
    comment: "Proto-Sino-Tibetan word for the number 6",
    root: "ktiriuk",
    descendants: [
      "liu",
      "lio",
      "lau",
      "luh",
      "luah",
      "loh",
      "noh",
      "lieu",
      "leh",
      "ongok",
      "louk",
      "lek",
      "so",
      "xu",
      "niu",
      "uhkrauk",
      "txauh",
      "paruk",
      "truk",
      "druk",
      "drug",
      "tso",
      "trunk",
    ],
  },
  {
    comment: "Proto-Sino-Tibetan word for the number 7",
    root: "snis",
    descendants: [
      "txi",
      "txie",
      "txih",
      "txieh",
      "txiuh",
      "tsa",
      "tsi",
      "tsai",
      "txat",
      "tsiat",
      "sit",
      "tseih",
      "tsik",
      "hunih",
      "sanit",
      "uvdun",
      "ubdun",
      "dun",
      "din",
      "di",
      "nyit",
      "nis",
      "ni",
    ],
  },
  {
    comment:
      "Proto-Sino-Tibetan word for the number 8. I do not know why it is reconstructed with a 't' at the beginning, when nearly all Sino-Tibetan languages have either 'p' or 'b' at the beginning. I guess it is something similar to why the Proto-Indo-European word for 8 is reconstructed with 'hec-' instead of 'oc-' at the beginning, or why the Proto-Indo-European word for 9 is reconstructed with 'hn' instead of 'n' at the beginning, or why the Proto-Indo-European word for 2 is reconstructed to end with 'h', that is, because of the evidence from the early-splitting (in that case Anatolian) languages. I wonder whether I am biasing the results towards considering early sound changes more probable than they actually are, by including such words here.",
    root: "triat",
    descendants: [
      "pa",
      "ba",
      "paih",
      "peh",
      "poh",
      "pah",
      "baat",
      "pae",
      "vat",
      "pueh",
      "buai",
      "baik",
      "po",
      "hrac",
      "xih",
      "ubgiat",
      "geh",
      "giat",
      "burgiad",
      "zie",
      "jat",
      "get",
      "zat",
      "yat",
    ],
  },
  {
    comment: "Proto-Sino-Tibetan word for the number 9",
    root: "tkua",
    descendants: [
      "jiu",
      "txio",
      "ciu",
      "kiau",
      "txiu",
      "kau",
      "kiau",
      "txau",
      "kiu",
      "keu",
      "kei",
      "kau",
      "ko",
      "txi",
      "kui",
      "pukua",
      "tawa",
      "dikhi",
      "urgu",
      "udgu",
      "gu",
      "go",
      "dogo",
      "dugu",
    ],
  },
  {
    comment:
      "Proto-Sino-Tibetan word for the number 10. I do not know why it is reconstructed with 'n' at the beginning.",
    root: "nitsub",
    descendants: [
      "xi",
      "txi",
      "seh",
      "suh",
      "sih",
      "zeh",
      "zoh",
      "zih",
      "za",
      "sap",
      "sok",
      "xap",
      "sip",
      "siup",
      "sep",
      "tsap",
      "tsa",
      "sek",
      "sik",
      "seik",
      "zuh",
      "txip",
      "tse",
      "se",
      "so",
      "niji",
      "hadi",
      "sio",
      "ufxu",
      "ubku",
      "ufku",
      "txe",
      "kih",
    ],
  },
];
// Kopirano iz "etymology.html", podaci (izmišljeni) koji su potrebni mom
// algoritmu.
const abeceda = "abcdefghijklmnopqrstuvwxyz";
const vowels = "aeiou";
const consonants = "bcdfghjklmnpqrstvwxyz";
const allowed_beginning_consonant_clusters = [
  "sq",
  "st",
  "ts",
  "sk",
  "ks",
  "zd",
  "dz",
  "th",
  "tr",
  "dr",
  "bl",
  "fl",
  "sw",
  "sv",
  "sn",
  "sm",
  "hw",
  "br",
  "pr",
  "tw",
  "dw",
  "wr",
  "vr",
  "kr",
  "pl",
  "fr",
  "gr",
  "xr",
  "xt",
  "sl",
  "sr",
  "tn",
  "pt",
  "pn",
  "pm",
  "pl",
  "ky",
  "ty",
  "gn",
  "bh",
  "ph",
  "dh",
  "zl",
  "zr",
  "tk",
  "kt",
  "sp",
  "zb",
  "kl",
  "ps",
  "tf",
  "by",
  "kn",
  "py",
  "zw",
  "zv",
  "pw",
  "gy",
  "dv",
  "dw",
  "pf",
  "hy",
  "ml",
  "xp",
  "gw",
  "gv",
  "xw",
  "sf",
  "tl",
  "mn",
  "dn",
  "dm",
  "bh",
  "dh",
  "gh",
];
let allowed_ending_consonant_clusters = [];
for (const beginning_consonant_cluster of allowed_beginning_consonant_clusters)
  if (beginning_consonant_cluster[1] !== "q")
    // Da na kraju riječi bude q+suglasnik, što je (po meni) teško za
    // izgovoriti.
    allowed_ending_consonant_clusters.push(
      beginning_consonant_cluster[1] + beginning_consonant_cluster[0]
    );
let promjene = [];
promjene[0] = [
  "e",
  "e",
  "ei",
  "ia",
  "o",
  "ua",
  "i",
  "u",
  "ar",
  "er",
  "ia",
  "-",
]; // U koje ce se glasove najvjerojatnije promijeniti 'a'.
promjene[1] = ["p", "p", "p", "v", "v", "v", "f", "f", "f", "d", "-", "-"]; //-||- 'b'
promjene[2] = ["s", "s", "s", "k", "k", "k", "h", "h", "g", "x", "-", "-"]; //-||- 'c'
promjene[3] = ["t", "t", "f", "f", "b", "b", "r", "r", "t", "th", "-", "-"]; //-||- 'd'
promjene[4] = ["i", "i", "ie", "ei", "0", "y", "a", "o", "u", "0", "ei", "-"]; //-||- 'e'
promjene[5] = ["v", "v", "b", "h", "h", "h", "w", "w", "p", "p", "-", "-"]; //-||- 'f'
promjene[6] = ["k", "k", "y", "h", "w", "j", "y", "z", "z", "zy", "-", "-"]; //-||- 'g'
promjene[7] = ["s", "s", "x", "a", "w", "f", "f", "k", "0", "0", "-", "-"]; //-||- 'h'
promjene[8] = ["a", "a", "ai", "yi", "iy", "u", "e", "ie", "ei", "a", "o", "-"]; //-||- 'i'
promjene[9] = ["z", "z", "z", "y", "y", "y", "h", "h", "h", "l", "-", "-"]; //-||- 'j'
promjene[10] = ["c", "c", "p", "s", "s", "p", "g", "h", "h", "qu", "-", "-"]; //-||- 'k'
promjene[11] = ["y", "y", "s", "j", "j", "a", "a", "o", "0", "i", "-", "-"]; //-||- 'l'
promjene[12] = ["n", "n", "n", "b", "b", "bh", "a", "a", "0", "f", "-", "-"]; //-||- 'm'
promjene[13] = ["t", "t", "d", "d", "m", "r", "l", "l", "0", "r", "-", "-"]; //-||- 'n'
promjene[14] = ["u", "u", "ou", "a", "a", "a", "e", "e", "i", "ow", "uo", "-"]; //-||- 'o'
promjene[15] = ["b", "b", "b", "f", "f", "qu", "pf", "pf", "ph", "h", "-", "-"]; //-||- 'p'
promjene[16] = ["h", "h", "k", "k", "w", "w", "v", "z", "s", "g", "-", "-"]; //-||- 'q'
promjene[17] = ["a", "a", "n", "l", "v", "t", "0", "0", "0", "l", "-", "-"]; //-||- 'r'
promjene[18] = ["z", "z", "z", "x", "r", "r", "h", "h", "x", "c", "-", "-"]; //-||- 's'
promjene[19] = ["th", "th", "c", "r", "r", "d", "d", "ts", "0", "ty", "-", "-"]; //-||- 't'
promjene[20] = [
  "wu",
  "uw",
  "iu",
  "yu",
  "vu",
  "o",
  "a",
  "a",
  "-",
  "i",
  "ou",
  "-",
]; //-||- 'u'
promjene[21] = ["w", "w", "w", "u", "u", "u", "b", "b", "p", "l", "-", "-"]; //-||- 'v'
promjene[22] = ["v", "v", "v", "u", "u", "p", "p", "b", "b", "h", "-", "-"]; //-||- 'w'
promjene[23] = ["s", "s", "si", "c", "c", "c", "z", "z", "z", "k", "-", "-"]; //-||- 'x'
promjene[24] = ["j", "j", "u", "e", "z", "dz", "i", "i", "i", "di", "-", "-"]; //-||- 'y'
promjene[25] = ["r", "r", "r", "y", "j", "j", "dz", "dz", "ts", "s", "-", "-"]; //-||- 'z'
// Sada ćemo staviti korijene iz baze podataka u simulirani prajezik (umjesto da
// korijene nasumično generiramo, kao što smo radili u "etymology.html").
let original = [],
  brojPromjenaURijeci = [];
for (const rijec_u_prajeziku of baza_podataka) {
  original.push(rijec_u_prajeziku.root);
  brojPromjenaURijeci.push(0);
}
// Sad ide jezgra algoritma iz "etymology.html".
let language1 = [],
  language2 = [],
  fonologija = [];
const uvjeti = "VCN0-VC0";
function primjeniPromjenu(nakon, prvi, prije, drugi, rijec) {
  for (var i = 0; i < rijec.length; i++) {
    if (
      (nakon !== "0" || i === 0) && // Glasovna promjena zahvaca samo glasove na pocetku rijeci.
      (prije !== "0" || i === rijec.length - 1) && // Samo na kraju rijeci.
      (nakon !== "N" ||
        rijec.charAt(i - 1) === "m" ||
        rijec.charAt(i - 1) === "n") && // Nakon nazalnog suglasnika.
      (prije !== "N" ||
        rijec.charAt(i + 1) === "m" ||
        rijec.charAt(i + 1) === "n") && // Prije nazalnog suglasnika.
      (nakon !== "V" || vowels.search(rijec.charAt(i - 1)) !== -1) && // Nakon samoglasnika
      (prije !== "V" || vowels.search(rijec.charAt(i + 1)) !== -1) && // Prije samoglasnika
      (prije !== "C" || consonants.search(rijec.charAt(i + 1)) !== -1) && // Prije suglasnika
      (nakon !== "C" || consonants.search(rijec.charAt(i - 1)) !== -1) && // Nakon suglasnika
      (nakon === rijec.charAt(i - 1) ||
        nakon === "Z" ||
        nakon === "0" ||
        nakon === "C" ||
        nakon === "N" ||
        nakon === "V") && // Rijetke glasovne promjene koje se dogadaju samo
      // nakon nekog odredenog glasa
      (prije === rijec.charAt(i + 1) ||
        prije === "Z" ||
        prije === "0" ||
        prije === "C" ||
        prije === "N" ||
        prije === "V") && // One koje se dogadaju samo prije tog glasa
      rijec.charAt(i) === prvi
    ) {
      var novi = rijec.slice(0, i);
      if (drugi !== "0") novi += drugi;
      novi += rijec.slice(i + 1);
      if (drugi === "0") i--;
      rijec = novi;
      i += drugi.length - 1;
    }
  }
  return rijec;
}
function simulacija() {
  fonologija[0] = "0[w]C>0, C[w]0>0, 0[y]C>0, C[y]0>0, 0[C1]C1>0 ";
  fonologija[1] = "";
  fonologija[2] = "";
  language1 = [];
  language2 = [];
  for (const prarijec of original) {
    language1.push(prarijec);
    language2.push(prarijec);
  }
  var BrojSimuliranihPromjena = 11;
  for (var i = 0; i < BrojSimuliranihPromjena * 2; i++) {
    var prije;
    if (Math.random() < 0.5) prije = "Z";
    // Bezuvjetna glasovna promjena.
    else prije = uvjeti.charAt(Math.floor(Math.random() * uvjeti.length));
    if (prije === "-")
      prije = abeceda.charAt(Math.floor(Math.random() * abeceda.length));
    var nakon;
    if (
      (prije != "Z" && Math.random() < 0.75) ||
      (prije == "Z" && Math.random() < 0.25)
    )
      nakon = "Z";
    else nakon = uvjeti.charAt(Math.floor(Math.random() * uvjeti.length));
    if (nakon === "-")
      nakon = abeceda.charAt(Math.floor(Math.random() * abeceda.length));
    var prvi = Math.floor(Math.random() * 26);
    var drugi;
    var jesmoLiOdabraliZamijenuZaPrvi = false;
    for (var j = 0; j < 12; j++) {
      var fonem = promjene[prvi][j];
      if (fonem == "-" || fonem == "0") continue;
      var nalaziLiSeFonemUJeziku = false;
      if (i < BrojSimuliranihPromjena) {
        for (var k = 0; k < language1.length; k++)
          if (language1[k].indexOf(fonem) + 1) {
            nalaziLiSeFonemUJeziku = true;
            break;
          }
      } else {
        for (var k = 0; k < language2.length; k++)
          if (language2[k].indexOf(fonem) + 1) {
            nalaziLiSeFonemUJeziku = true;
            break;
          }
      }
      if (nalaziLiSeFonemUJeziku) continue;
      jesmoLiOdabraliZamijenuZaPrvi = true;
      drugi = fonem;
      break;
    }
    if (!jesmoLiOdabraliZamijenuZaPrvi)
      drugi = promjene[prvi][Math.floor(Math.random() * 12)];
    if (drugi === "-") {
      var jeLiFonologijaURavnotezi = true;
      for (var k = 0; k <= abeceda.length; k++) {
        var fonem = abeceda.charAt(k);
        var nalaziLiSeFonemUJeziku = false;
        if (i < BrojSimuliranihPromjena) {
          for (var j = 0; j < language1.length; j++)
            if (language1[j].indexOf(fonem) + 1) {
              nalaziLiSeFonemUJeziku = true;
              break;
            }
        } else {
          for (var j = 0; j < language2.length; j++)
            if (language2[j].indexOf(fonem) + 1) {
              nalaziLiSeFonemUJeziku = true;
              break;
            }
        }
        if (nalaziLiSeFonemUJeziku) continue;
        jeLiFonologijaURavnotezi = false;
        drugi = fonem;
        break;
      }
      if (jeLiFonologijaURavnotezi)
        drugi = abeceda.charAt(Math.floor(Math.random() * abeceda.length));
    }
    prvi = String.fromCharCode(prvi + 97);
    if (
      i >= BrojSimuliranihPromjena &&
      fonologija[1].indexOf(
        (nakon === "Z" ? "" : nakon) +
          "[" +
          prvi +
          "]" +
          (prije === "Z" ? "" : prije) +
          ">" +
          drugi
      ) + 1
    ) {
      // Ne daj da se iste promjene dogode u oba simulirana jezika
      i--;
      continue;
    }
    if (i < BrojSimuliranihPromjena) {
      var promjenjeno = false;
      for (var j = 0; j < language1.length; j++) {
        var prijasnji = language1[j];
        language1[j] = primjeniPromjenu(
          nakon,
          prvi,
          prije,
          drugi,
          language1[j]
        );
        if (language1[j] != prijasnji) {
          promjenjeno = true;
          brojPromjenaURijeci[j]++;
        }
      }
      if (!promjenjeno) i--;
      else
        fonologija[1] +=
          (nakon === "Z" ? "" : nakon) +
          "[" +
          prvi +
          "]" +
          (prije === "Z" ? "" : prije) +
          ">" +
          drugi +
          ", ";
    } else {
      var promjenjeno = false;
      for (var j = 0; j < language2.length; j++) {
        var prijasnji = language2[j];
        language2[j] = primjeniPromjenu(
          nakon,
          prvi,
          prije,
          drugi,
          language2[j]
        );
        if (language2[j] != prijasnji) {
          promjenjeno = true;
          brojPromjenaURijeci[j]++;
        }
      }
      if (!promjenjeno) i--;
      else
        fonologija[2] +=
          (nakon === "Z" ? "" : nakon) +
          "[" +
          prvi +
          "]" +
          (prije === "Z" ? "" : prije) +
          ">" +
          drugi +
          ", ";
    }
  }
  var allowed_beginning_consonant_clusters_in_first_language = [];
  for (var i = 0; i < allowed_beginning_consonant_clusters.length; i++)
    if (Math.random() < 0.5)
      allowed_beginning_consonant_clusters_in_first_language.push(
        allowed_beginning_consonant_clusters[i]
      );
  var allowed_ending_consonant_clusters_in_first_language = [];
  for (var i = 0; i < allowed_ending_consonant_clusters.length; i++)
    if (Math.random() < 0.5)
      allowed_ending_consonant_clusters_in_first_language.push(
        allowed_ending_consonant_clusters[i]
      );
  var allowed_beginning_consonant_clusters_in_second_language = [];
  for (var i = 0; i < allowed_beginning_consonant_clusters.length; i++)
    if (Math.random() < 0.5)
      allowed_beginning_consonant_clusters_in_second_language.push(
        allowed_beginning_consonant_clusters[i]
      );
  var allowed_ending_consonant_clusters_in_second_language = [];
  for (var i = 0; i < allowed_ending_consonant_clusters.length; i++)
    if (Math.random() < 0.5)
      allowed_ending_consonant_clusters_in_second_language.push(
        allowed_ending_consonant_clusters[i]
      );
  var jesmoLiOdabraliEpentetskiVokal = false;
  var epenteza1;
  for (var i = 0; i < vowels.length; i++) {
    var samoglasnik = vowels.charAt(i);
    var nalaziLiSeFonemUJeziku = false;
    for (var j = 0; j < language1.length; j++)
      if (language1[j].indexOf(samoglasnik) + 1) {
        nalaziLiSeFonemUJeziku = true;
        break;
      }
    if (!nalaziLiSeFonemUJeziku) {
      epenteza1 = samoglasnik;
      jesmoLiOdabraliEpentetskiVokal = true;
      break;
    }
  }
  if (!jesmoLiOdabraliEpentetskiVokal)
    epenteza1 = vowels.charAt(Math.floor(Math.random() * vowels.length));
  jesmoLiOdabraliEpentetskiVokal = false;
  var epenteza2;
  for (var i = 0; i < vowels.length; i++) {
    var samoglasnik = vowels.charAt(i);
    var nalaziLiSeFonemUJeziku = false;
    for (var j = 0; j < language2.length; j++)
      if (language2[j].indexOf(samoglasnik) + 1) {
        nalaziLiSeFonemUJeziku = true;
        break;
      }
    if (!nalaziLiSeFonemUJeziku) {
      epenteza2 = samoglasnik;
      jesmoLiOdabraliEpentetskiVokal = true;
      break;
    }
  }
  if (!jesmoLiOdabraliEpentetskiVokal)
    epenteza2 = vowels.charAt(Math.floor(Math.random() * vowels.length));
  fonologija[1] += "CCC>C" + epenteza1 + "CC";
  fonologija[2] += "CCC>C" + epenteza2 + "CC";
  // Jednostavna fonotaktika: ne dopusti tri suglasnika za redom i ne dopusti
  // q+suglasnik.
  for (var i = 0; i < language1.length; i++) {
    if (language1[i].charAt(language1[i].length - 1) == "q")
      language1[i] += epenteza1;
    if (
      consonants.search(language1[i].charAt(0)) !== -1 &&
      consonants.search(language1[i].charAt(1)) !== -1 &&
      allowed_beginning_consonant_clusters_in_first_language.indexOf(
        language1[i].substr(0, 2)
      ) === -1
    )
      language1[i] = epenteza1 + language1[i];
    if (
      consonants.search(language1[i].charAt(language1[i].length - 1)) !== -1 &&
      consonants.search(language1[i].charAt(language1[i].length - 2)) !== -1 &&
      allowed_ending_consonant_clusters_in_first_language.indexOf(
        language1[i].substr(language1[i].length - 2, 2)
      ) === -1
    )
      language1[i] += epenteza1;
    for (var j = 1; j < language1[i].length - 1; j++)
      if (
        (consonants.search(language1[i].charAt(j - 1)) !== -1 &&
          consonants.search(language1[i].charAt(j)) !== -1 &&
          consonants.search(language1[i].charAt(j + 1)) !== -1) ||
        (consonants.search(language1[i].charAt(j)) !== -1 &&
          language1[i].charAt(j - 1) === "q")
      )
        language1[i] =
          language1[i].slice(0, j) + epenteza1 + language1[i].slice(j);
  }
  for (var i = 0; i < language2.length; i++) {
    if (language2[i].charAt(language2[i].length - 1) == "q")
      language2[i] += epenteza2;
    if (
      consonants.search(language2[i].charAt(0)) !== -1 &&
      consonants.search(language2[i].charAt(1)) !== -1 &&
      allowed_beginning_consonant_clusters_in_second_language.indexOf(
        language2[i].substr(0, 2)
      ) === -1
    )
      language2[i] = epenteza2 + language2[i];
    if (
      consonants.search(language2[i].charAt(language2[i].length - 1)) !== -1 &&
      consonants.search(language2[i].charAt(language2[i].length - 2)) !== -1 &&
      allowed_ending_consonant_clusters_in_second_language.indexOf(
        language2[i].substr(language2[i].length - 2, 2)
      ) === -1
    )
      language2[i] += epenteza2;
    for (var j = 1; j < language2[i].length - 1; j++)
      if (
        (consonants.search(language2[i].charAt(j - 1)) !== -1 &&
          consonants.search(language2[i].charAt(j)) !== -1 &&
          consonants.search(language2[i].charAt(j + 1)) !== -1) ||
        (consonants.search(language2[i].charAt(j)) !== -1 &&
          language2[i].charAt(j - 1) === "q")
      )
        language2[i] =
          language2[i].slice(0, j) + epenteza2 + language2[i].slice(j);
  }
  // Redukcija vokala.
  for (var i = 0; i < language1.length; i++) {
    var jaka = false;
    if (language1[i].length > 8) {
      language1[i] = language1[i].replace(/y/g, "i");
      language1[i] = language1[i].replace(/w/g, "u");
      language1[i] = language1[i].replace(/v/g, "u");
      jaka = true;
    }
    for (var j = 0; j < language1[i].length; j++)
      if (
        (vowels.search(language1[i].charAt(j)) !== -1 &&
          language1[i].charAt(j - 1) !== "q" &&
          (!jaka
            ? language1[i].charAt(j) === language1[i].charAt(j - 2)
            : vowels.search(language1[i].charAt(j - 2)) !== -1) &&
          (!jaka
            ? language1[i].charAt(j) === language1[i].charAt(j + 2)
            : vowels.search(language1[i].charAt(j + 2)) !== -1)) ||
        (jaka &&
          vowels.search(language1[i].charAt(j)) !== -1 &&
          language1[i].charAt(j - 1) !== "q" &&
          (vowels.search(language1[i].charAt(j - 1)) !== -1 ||
            vowels.search(language1[i].charAt(j + 1)) !== -1)) ||
        (jaka && language1[i].charAt(j) === language1[i].charAt(j - 1))
      ) {
        language1[i] = language1[i].slice(0, j) + language1[i].slice(j + 1);
        j--;
      }
    if (
      consonants.search(language1[i].charAt(language1[i].length - 1)) !== -1 &&
      consonants.search(language1[i].charAt(language1[i].length - 2)) !== -1 &&
      allowed_ending_consonant_clusters_in_first_language.indexOf(
        language1[i].substr(language1[i].length - 2, 2)
      ) === -1
    )
      language1[i] += epenteza1;
    if (
      consonants.search(language1[i].charAt(0)) !== -1 &&
      consonants.search(language1[i].charAt(1)) !== -1 &&
      allowed_beginning_consonant_clusters_in_first_language.indexOf(
        language1[i].substr(0, 2)
      ) === -1
    )
      language1[i] = epenteza1 + language1[i];
  }
  for (var i = 0; i < language2.length; i++) {
    var jaka = false;
    if (language2[i].length > 8) {
      language2[i] = language2[i].replace(/y/g, "i");
      language2[i] = language2[i].replace(/w/g, "u");
      language2[i] = language2[i].replace(/v/g, "u");
      jaka = true;
    }
    for (var j = 0; j < language2[i].length; j++)
      if (
        (vowels.search(language2[i].charAt(j)) !== -1 &&
          language2[i].charAt(j - 1) !== "q" &&
          (!jaka
            ? language2[i].charAt(j) === language2[i].charAt(j - 2)
            : vowels.search(language2[i].charAt(j - 2)) !== -1) &&
          (!jaka
            ? language2[i].charAt(j) === language2[i].charAt(j + 2)
            : vowels.search(language2[i].charAt(j + 2)) !== -1)) ||
        (jaka &&
          vowels.search(language2[i].charAt(j)) !== -1 &&
          language2[i].charAt(j - 1) !== "q" &&
          (vowels.search(language2[i].charAt(j - 1)) !== -1 ||
            vowels.search(language2[i].charAt(j + 1)) !== -1)) ||
        (jaka && language2[i].charAt(j) === language2[i].charAt(j - 1))
      ) {
        language2[i] = language2[i].slice(0, j) + language2[i].slice(j + 1);
        j--;
      }
    if (
      consonants.search(language2[i].charAt(language2[i].length - 1)) !== -1 &&
      consonants.search(language2[i].charAt(language2[i].length - 2)) !== -1 &&
      allowed_ending_consonant_clusters_in_second_language.indexOf(
        language2[i].substr(language2[i].length - 2, 2)
      ) === -1
    )
      language2[i] += epenteza2;
    if (
      consonants.search(language2[i].charAt(0)) !== -1 &&
      consonants.search(language2[i].charAt(1)) !== -1 &&
      allowed_beginning_consonant_clusters_in_second_language.indexOf(
        language2[i].substr(0, 2)
      ) === -1
    )
      language2[i] = epenteza2 + language2[i];
  }
  for (var i = 0; i < language1.length; i++) {
    for (var j = 0; j < vowels.length; j++)
      language1[i] = language1[i].replace(
        RegExp("ii" + vowels.charAt(j), "g"),
        "iy" + vowels.charAt(j)
      );
    for (var j = 0; j < vowels.length; j++)
      language1[i] = language1[i].replace(
        RegExp(vowels.charAt(j) + "ii", "g"),
        vowels.charAt(j) + "yi"
      );
    for (var j = 0; j < vowels.length; j++)
      language1[i] = language1[i].replace(
        RegExp("uu" + vowels.charAt(j), "g"),
        "uw" + vowels.charAt(j)
      );
    for (var j = 0; j < vowels.length; j++)
      language1[i] = language1[i].replace(
        RegExp(vowels.charAt(j) + "uu", "g"),
        vowels.charAt(j) + "wu"
      );
    language1[i] = language1[i].replace(/yy/g, "iy");
    language1[i] = language1[i].replace(/ww/g, "uw");
  }
  for (var i = 0; i < language2.length; i++) {
    for (var j = 0; j < vowels.length; j++)
      language2[i] = language2[i].replace(
        RegExp("ii" + vowels.charAt(j), "g"),
        "iy" + vowels.charAt(j)
      );
    for (var j = 0; j < vowels.length; j++)
      language2[i] = language2[i].replace(
        RegExp(vowels.charAt(j) + "ii", "g"),
        vowels.charAt(j) + "yi"
      );
    for (var j = 0; j < vowels.length; j++)
      language2[i] = language2[i].replace(
        RegExp("uu" + vowels.charAt(j), "g"),
        "uw" + vowels.charAt(j)
      );
    for (var j = 0; j < vowels.length; j++)
      language2[i] = language2[i].replace(
        RegExp(vowels.charAt(j) + "uu", "g"),
        vowels.charAt(j) + "wu"
      );
    language2[i] = language2[i].replace(/yy/g, "yi");
    language2[i] = language2[i].replace(/ww/g, "wu");
  }
}
// Sada slijedi program za testiranje:
for (let prarijec of baza_podataka) {
  prarijec.broj_pogodenih = 0;
  prarijec.simulirani_potomci = [];
}
let jesmo_li_naletjeli_na_gresku = false;
const koliko_cemo_puta_izvrsiti_simulaciju = 500;
for (let i = 0; i < koliko_cemo_puta_izvrsiti_simulaciju; i++) {
  simulacija();
  for (let i = 0; i < baza_podataka.length; i++) {
    if (baza_podataka[i].root != original[i]) {
      console.log(
        "Neki dio simulacije je promijenio dio originala, prekidamo!"
      );
      jesmo_li_naletjeli_na_gresku = true;
      break;
    }
    if (!baza_podataka[i].simulirani_potomci.includes(language1[i])) {
      baza_podataka[i].simulirani_potomci.push(language1[i]);
      if (baza_podataka[i].descendants.includes(language1[i]))
        baza_podataka[i].broj_pogodenih++;
    }
    if (!baza_podataka[i].simulirani_potomci.includes(language2[i])) {
      baza_podataka[i].simulirani_potomci.push(language2[i]);
      if (baza_podataka[i].descendants.includes(language2[i]))
        baza_podataka[i].broj_pogodenih++;
    }
  }
  if (jesmo_li_naletjeli_na_gresku) break;
}
// Ako nismo naletjeli na gresku, ispisimo rezultat.
if (!jesmo_li_naletjeli_na_gresku) {
  console.log(`<!doctype html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Results of the validation of the simulation in Etymology Game</title>
<style type="text/css">
body {
  font-family: sans-serif;
}
table, tr, td, th {
  border-collapse: collapse;
  border-style: solid;
}
td:nth-child(1), h1 {
  text-align: center;
}
</style>
</head>
<body>
<h1>Results of the simulation</h1>
<p style="text-align: justify">Here are the results of the validation of the historic-phonology-simulation algorithm used in <a href="https://flatassembler.github.io/etymologist.html">Etymology Game</a>:</p>
<table>
<tr style="background-color: #eeeeff">
  <th>ID of the comment</th>
  <th>Parent word</th>
  <th>Success rate</th>
  <th>Child words in the game</th>
  <th>Child words in the real world</th>
</tr>
`);
  let prosjek_uspjeha = 0;
  for (let i = 0; i < baza_podataka.length; i++)
    prosjek_uspjeha +=
      (baza_podataka[i].broj_pogodenih /
        baza_podataka[i].simulirani_potomci.length) *
      100;
  prosjek_uspjeha /= baza_podataka.length;
  for (let i = 0; i < baza_podataka.length; i++) {
    const prarijec = baza_podataka[i];
    const uspjeh =
      (prarijec.broj_pogodenih / prarijec.simulirani_potomci.length) * 100;
    console.log(`
<tr style="background-color: ${
      uspjeh == 0 ? "#ffcccc" : uspjeh > prosjek_uspjeha ? "#ccffcc" : "#ffeecc"
    }">
  <td>${i + 1}</td>
  <td>${prarijec.root}</td>
  <td>${uspjeh.toFixed(3)}%</td>
  <td>${prarijec.simulirani_potomci
    .sort((prva_rijec, druga_rijec) => {
      if (
        prarijec.descendants.includes(prva_rijec) &&
        !prarijec.descendants.includes(druga_rijec)
      )
        return -1;
      if (
        prarijec.descendants.includes(druga_rijec) &&
        !prarijec.descendants.includes(prva_rijec)
      )
        return 1;
      if (prva_rijec < druga_rijec) return -0.5;
      if (prva_rijec == druga_rijec) return 0;
      return 0.5;
    })
    .join(" ")}</td>
  <td>${prarijec.descendants.sort().join(" ")}</td>
</tr>
`);
  }

  console.log(`
</table>
<p>Average success rate: ${prosjek_uspjeha}%</p>
<section>
<h2>Comments:</h2>
<ol>`);
  for (const prarijec of baza_podataka)
    console.log(`<li>${prarijec.comment}</li>`);
  console.log(`
</ol>
</section>
</body>
</html>
`);
}
