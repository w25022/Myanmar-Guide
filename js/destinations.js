/**
 * 🇲🇲 MYANMAR GUIDE - Destinations Dataset (12 Major Places)
 * Trilingual: English (en), Japanese (ja), Myanmar (my)
 */

const destinationsData = [
  {
    id: "bagan",
    name: "Bagan",
    nameJa: "バガン古代遺跡",
    myanmarName: "ပုဂံရှေးဟောင်းဒေသ",
    region: { en: "Mandalay Region", ja: "マンダレー地方域", my: "မန္တလေးတိုင်းဒေသကြီး" },
    category: "Historical",
    image: "public/images/locations/bagan.jpg",
    description: {
      en: "The ancient capital of the Pagan Kingdom, home to over 2,000 preserved Buddhist temples, pagodas, and stupas scattered across lush green plains.",
      ja: "世界遺産に登録された古代パガン王朝の都。平原に広がる2,000基以上の寺院や仏塔群が朝霧や夕陽に美しく映えます。",
      my: "မြန်မာ့သမိုင်းတွင် အထင်ကရ အေဒီ ၉ မှ ၁၃ ရာစုအထိ ထွန်းကားခဲ့သော စေတီပုထိုးပေါင်း ၂၀၀၀ ကျော် တည်ရှိရာ ယူနက်စကို ကမ္ဘာ့အမွေအနှစ်ဒေသ။"
    },
    detailedDescription: {
      en: "Bagan is a UNESCO World Heritage Site and one of the world's most astonishing archaeological landscapes. Between the 9th and 13th centuries, over 10,000 Buddhist temples, pagodas, and monasteries were constructed on the plains surrounding the Ayeyarwady River. Today, watching hot air balloons float over golden stupas at sunrise remains one of Southeast Asia's most iconic travel experiences.",
      ja: "バガンはユネスコ世界文化遺産であり、世界有数の壮大な仏教遺跡群です。9世紀から13世紀にかけて1万基以上の寺院・パゴダがエーヤワディー川沿いに建立されました。現在でも朝焼けの中を気球が漂う風景は、東南アジア屈指の絶景体験です。",
      my: "ပုဂံသည် ဧရာဝတီမြစ်ကမ်းဘေးတွင် တည်ရှိပြီး ယူနက်စကို ကမ္ဘာ့အမွေအနှစ်စာရင်းဝင် ဖြစ်ပါသည်။ အနော်ရထာမင်းလက်ထက်မှစ၍ တည်ထားကိုးကွယ်ခဲ့သော စေတီပုထိုးများ၊ နံရံဆေးရေးပန်းချီများနှင့် အနုပညာလက်ရာများသည် ကမ္ဘာကျော်ဖြစ်ပါသည်။"
    },
    bestTime: { en: "November to February", ja: "11月〜2月（乾季で過ごしやすい涼期）", my: "နိုဝင်ဘာလ မှ ဖေဖော်ဝါရီလ" },
    thingsToDo: {
      en: [
        "Sunrise hot air balloon flight over the ancient plains",
        "Rent an e-bike to explore secluded off-the-beaten-track temples",
        "Visit Ananda Temple, Dhammayangyi and Thatbyinnyu Temple",
        "Watch the sunset from Nan Myint Viewing Tower",
        "Visit traditional lacquerware workshops in New Bagan"
      ],
      ja: [
        "早朝の熱気球フライトから眺める幻想的な日の出",
        "電動バイク（E-bike）をレンタルして隠れた寺院を巡る",
        "アーナンダ寺院やダマヤンジー寺院の荘厳な建築を見学",
        "展望タワーから眺める息を呑む夕陽",
        "ニューバガンで伝統的な漆器（ラッカーウェア）工房を訪問"
      ],
      my: [
        "မနက်စောစော မီးပုံးပျံစီးကာ ပုဂံမြေမြင်ကွင်းကို ကြည့်ရှုခြင်း",
        "အီးဘိုက် (E-bike) ဖြင့် စေတီပုထိုးများသို့ လှည့်လည်ကြည့်ရှုခြင်း",
        "အာနန္ဒာဘုရား၊ ဓမ္မရံကြီးဘုရားနှင့် သဗ္ဗညုဘုရားများသို့ သွားရောက်ဖူးမြော်ခြင်း",
        "နန်းမြင့်မျှော်စင်မှ နေဝင်ဆည်းဆာ ကြည့်ရှုခြင်း",
        "ပုဂံရိုးရာ ယွန်းထည်လုပ်ငန်းများကို လေ့လာခြင်း"
      ]
    }
  },
  {
    id: "shwedagon",
    name: "Shwedagon Pagoda",
    nameJa: "シュエダゴン・パゴダ",
    myanmarName: "ရွှေတိဂုံစေတီတော်",
    region: { en: "Yangon Region", ja: "ヤンゴン地方域", my: "ရန်ကုန်တိုင်းဒေသကြီး" },
    category: "Religious",
    image: "public/images/locations/shwedagon pagoda.jpg",
    description: {
      en: "A 99-meter tall golden pagoda encrusted with diamonds and rubies, reigning as Myanmar's most sacred Buddhist site.",
      ja: "高さ99メートル、純金板と数千個のダイヤモンドで覆われたミャンマー最大の仏教の総本山・聖地。",
      my: "ဉာဏ်တော် ၃၂၆ ပေမြင့်ပြီး ရွှေသင်္ကန်းအစစ်များ၊ စိန်ဖူးတော်နှင့် ပတ္တမြားများဖြင့် စီခြယ်ထားသော မြန်မာပြည်၏ အထွဋ်အမြတ်စေတီတော်။"
    },
    detailedDescription: {
      en: "Dominating the Yangon skyline, the Great Dagon Pagoda is believed to enshrine strands of Gautama Buddha's hair alongside relics of three previous Buddhas. The main stupa is plated with solid gold plates, topped with a 76-carat diamond crown, and surrounded by 64 smaller stupas and shrines where devotees light candles and chant evening prayers.",
      ja: "ヤンゴンの中心にそびえ立つシュエダゴン・パゴダは、仏陀の聖髪が納められていると伝えられる信仰の中心です。大パゴダの頂上には76カラットのダイヤモンドが輝き、夜になるとライトアップされ黄金色に輝く荘厳な姿を見せます。",
      my: "ရန်ကုန်မြို့၏ အထင်ကရ အမြင့်ဆုံးနေရာတွင် တည်ရှိပြီး ဂေါတမမြတ်စွာဘုရားရှင်၏ ဆံတော်ရှစ်ဆူ ကိန်းဝပ်စံပယ်တော်မူရာ စေတီတော်ကြီး ဖြစ်ပါသည်။ နိုင်ငံတကာမှ ခရီးသွားဧည့်သည်များ မဖြစ်မနေ လာရောက်ဖူးမြော်ရာ နေရာဖြစ်ပါသည်။"
    },
    bestTime: { en: "October to March", ja: "10月〜3月", my: "အောက်တိုဘာလ မှ မတ်လ" },
    thingsToDo: {
      en: [
        "Walk barefoot around the marble terrace at dusk as lamps are lit",
        "Discover your planetary post based on your day of birth",
        "Admire the gem-encrusted umbrella crown (Hti) through optical telescopes",
        "Experience serene evening meditation with monks and local families"
      ],
      ja: [
        "夕暮れ時に大理石の境内を裸足で歩き、灯明の儀式を体験",
        "生まれた曜日ごとの守護仏（八曜日ポスト）でお参りする",
        "望遠鏡で頂上の宝石とダイヤモンドの傘（ティー）を鑑賞",
        "僧侶や地元の人々と共に心静かな祈りのひとときを過ごす"
      ],
      my: [
        "ညနေဆည်းဆာအချိန် ရင်ပြင်တော်ပေါ်တွင် ဖိနပ်ချွတ်၍ လက်ယာရစ်လှည့်လည်ဖူးမြော်ခြင်း",
        "မိမိမွေးနံထောင့်တွင် ဘုရားရေသပ္ပာယ်ပြီး ဆုတောင်းခြင်း",
        "မှန်ပြောင်းဖြင့် စိန်ဖူးတော်နှင့် ငှက်မြတ်နားတော်ကို ကြည့်ရှုခြင်း",
        "ညနေခင်း ဆီမီးပူဇော်ပွဲကို ကြည်နူးစွာ ပါဝင်ဆင်နွှဲခြင်း"
      ]
    }
  },
  {
    id: "inle-lake",
    name: "Inle Lake",
    nameJa: "インレー湖",
    myanmarName: "အင်းလေးကန်",
    region: { en: "Shan State", ja: "シャン州", my: "ရှမ်းပြည်နယ်" },
    category: "Nature",
    image: "public/images/locations/inle lake.png",
    description: {
      en: "A serene freshwater lake known for traditional leg-rowing fishermen, stilt villages, and floating hydroponic tomato gardens.",
      ja: "独特の片足漕ぎ漁師、水上家屋、湖上に広がる浮き島農園（トマト畑）で知られる高原の穏やかな淡水湖。",
      my: "တစ်မူထူးခြားသော ခြေတစ်ဖက်တည်းဖြင့် လှေလှော်ခတ်သည့် အင်းသားလူမျိုးများနှင့် ရေပေါ်စိုက်ခင်းများ တည်ရှိရာ ရှမ်းပြည်နယ်ရှိ ကမ္ဘာကျော် ရေကန်။"
    },
    detailedDescription: {
      en: "Nestled in the Shan Hills at 880 meters elevation, Inle Lake is famous for the Intha people, who have developed a unique one-legged rowing technique allowing them to navigate reeds while holding fish traps. The lake features entire villages built on stilts, floating monasteries, and traditional artisan workshops.",
      ja: "標高880メートルの山間に位置するインレー湖。先住民族インタ族が片足で櫂を操りながら魚を捕る独特の伝統漁法は必見です。湖上には竹の柱で建てられた集落、水上寺院、ハス糸織物工房などが点在しています。",
      my: "ပင်လယ်ရေမျက်နှာပြင်အထက် ပေ ၂၉၀၀ ကျော်တွင် တည်ရှိပြီး အင်းသားရိုးရာ ယဉ်ကျေးမှု၊ ဖောင်တော်ဦးဘုရား၊ ရေပေါ်ဈေးနှင့် ပိုးထည်/ကြာချည်ရက်လုပ်ငန်းများကို လေ့လာနိုင်ပါသည်။"
    },
    bestTime: { en: "October to February", ja: "10月〜2月", my: "အောက်တိုဘာလ မှ ဖေဖော်ဝါရီလ" },
    thingsToDo: {
      en: [
        "Take a longtail wooden boat tour across the scenic lake channels",
        "Witness traditional leg-rowing Intha fishermen at dawn",
        "Visit Phaung Daw Oo Pagoda and its sacred gilded Buddha images",
        "Explore floating hydroponic tomato and vegetable gardens",
        "Tour lotus silk weaving, silversmith, and cheroot workshops"
      ],
      ja: [
        "木製ロングテールボートで水上水路をクルーズ",
        "早朝の霧の中で片足漕ぎをするインタ族の伝統漁を見学",
        "金箔で覆われた聖なる仏像が安置されたパウンドーウー・パゴダを参拝",
        "湖上に浮かぶトマトや野菜の水上農園を見学",
        "蓮の茎から糸を紡ぐハス織り工房や銀細工工房を見学"
      ],
      my: [
        "မော်တော်ဘုတ်စီး၍ အင်းလေးကန် အလှအပကို ကြည့်ရှုခံစားခြင်း",
        "အင်းသားခြေလှော်လှေသမားများ၏ ငါးဖမ်းပုံကို လေ့လာခြင်း",
        "ဖောင်တော်ဦး စေတီတော်သို့ သွားရောက်ဖူးမြော်ခြင်း",
        "ကျွန်းမျော ရေပေါ်ခရမ်းချဉ်သီးစိုက်ခင်းများကို လေ့လာခြင်း",
        "ကြာချည်ရက်လုပ်ငန်း၊ ငွေထည်လုပ်ငန်းနှင့် ဆေးလိပ်လိပ်လုပ်ငန်းများကို သွားရောက်ကြည့်ရှုခြင်း"
      ]
    }
  },
  {
    id: "ngapali",
    name: "Ngapali Beach",
    nameJa: "ガパリ・ビーチ",
    myanmarName: "ငပလီကမ်းခြေ",
    region: { en: "Rakhine State", ja: "ラカイン州", my: "ရခိုင်ပြည်နယ်" },
    category: "Beach",
    image: "public/images/locations/ngapali beach.jpg",
    description: {
      en: "Myanmar's premier tranquil beach destination featuring pristine turquoise waters, soft white sand, and swaying coconut palms.",
      ja: "ベンガル湾に面したミャンマー随一のリゾートビーチ。透き通る海、白い砂浜、ヤシの木が連なる静寂の楽園。",
      my: "ဘင်္ဂလားပင်လယ်အော်ကမ်းခြေတွင် တည်ရှိပြီး ဖြူဖွေးသော သဲသောင်ပြင်နှင့် ကြည်လင်သော ပင်လယ်ရေပြာတို့ဖြင့် ပြည့်စုံသော မြန်မာ့အလှဆုံး ကမ်းခြေ။"
    },
    detailedDescription: {
      en: "Ngapali Beach stretches along the Bay of Bengal for miles with uncrowded shores, gentle surf, and an authentic fishing village atmosphere. Unlike heavily commercialized resort strips in neighboring countries, Ngapali retains a peaceful, laid-back coastal charm with fresh seafood caught daily by local wooden dhows.",
      ja: "数キロメートルにわたって続く遠浅の白砂海岸。過度な商業化がされておらず、穏やかな波音と地元の素朴な漁村の風景が残っています。毎日水揚げされる新鮮なエビやカニなどのシーフード料理も格別です。",
      my: "ငပလီကမ်းခြေသည် အေးချမ်းဆိတ်ငြိမ်ပြီး သဘာဝအတိုင်း လှပသော ကမ်းခြေတစ်ခုဖြစ်ကာ လတ်ဆတ်သော ပင်လယ်စာများ သုံးဆောင်နိုင်ခြင်း၊ သန္တာကျောက်တန်းများကို ကြည့်ရှုနိုင်ခြင်းတို့ကြောင့် အလွန်လူကြိုက်များပါသည်။"
    },
    bestTime: { en: "October to April", ja: "10月〜4月（晴天が続くベストシーズン）", my: "အောက်တိုဘာလ မှ ဧပြီလ" },
    thingsToDo: {
      en: [
        "Relax on pristine, uncrowded white sand beaches",
        "Savor freshly caught grilled tiger prawns and seafood curries",
        "Snorkel around Pearl Island (Zilone)",
        "Bicycle through nearby rural fishing hamlets and drying racks",
        "Watch dramatic fiery sunsets over the Bay of Bengal"
      ],
      ja: [
        "混雑のない美しい白砂のビーチでのんびり過ごす",
        "獲れたての大エビのグリルや新鮮なシーフードカレーを堪能",
        "パールアイランド（ジローン島）周辺でのシュノーケリング",
        "自転車で近隣の素朴な漁村や魚の天日干し風景を散策",
        "ベンガル湾に沈む壮大な夕日を眺める"
      ],
      my: [
        "သန့်ရှင်းကြည်လင်သော ပင်လယ်သဲသောင်ပြင်တွင် အနားယူခြင်း",
        "လတ်ဆတ်သော ပင်လယ်ငါး၊ ပုစွန်ကင်များနှင့် ရခိုင်ရိုးရာ ဟင်းလျာများ သုံးဆောင်ခြင်း",
        "သန္တာကျွန်းတွင် ရေငုပ်၍ သဘာဝအလှ ကြည့်ရှုခြင်း",
        "စက်ဘီးစီးကာ တံငါရွာများ၏ လူနေမှုဘဝကို လေ့လာခြင်း",
        "ဘင်္ဂလားပင်လယ်အော်၏ နေဝင်ဆည်းဆာ အလှကို ကြည့်ရှုခြင်း"
      ]
    }
  },
  {
    id: "mandalay-palace",
    name: "Mandalay Palace",
    nameJa: "マンダレー王宮",
    myanmarName: "မန္တလေး နန်းတော်",
    region: { en: "Mandalay Region", ja: "マンダレー地方域", my: "မန္တလေးတိုင်းဒေသကြီး" },
    category: "Historical",
    image: "public/images/locations/mandalay palace.jpg",
    description: {
      en: "The last royal palace of the Burmese monarchy, enclosed within a grand 2-kilometer square walled moat.",
      ja: "ミャンマー最後のコンバウン王朝の王宮。一辺2kmの城壁と美しいお堀に囲まれた歴史的遺産。",
      my: "ကုန်းဘောင်ခေတ် မင်းတုန်းမင်းတရားကြီး တည်ထောင်ခဲ့သော နောက်ဆုံးမြန်မာဘုရင်တို့ စံမြန်းရာ ရတနာပုံ နန်းတော်ကြီး။"
    },
    detailedDescription: {
      en: "Constructed between 1857 and 1859 by King Mindon as part of his new royal capital, Mandalay Palace was the seat of the Konbaung Dynasty. The palace complex is surrounded by an imposing brick wall with 48 bastions and a 64-meter-wide moat fed by water from the nearby canals.",
      ja: "1857年にミンドン王によって建設されたコンバウン王朝最後の壮麗な都城。幅64メートルの水堀と城壁に囲まれ、中央には木造の伝統建築群が再現されています。螺旋階段の展望塔からは王宮全景を一望できます。",
      my: "၁၈၅၇ ခုနှစ်တွင် မင်းတုန်းမင်းကြီး တည်ထောင်ခဲ့ပြီး ကျုံးမြို့ရိုး၊ မြနန်းစံကျော် ရွှေနန်းတော်ဆောင်များနှင့် မျှော်စင်တို့ဖြင့် တည်ဆောက်ထားသော သမိုင်းဝင် အထင်ကရ နန်းတော် ဖြစ်ပါသည်။"
    },
    bestTime: { en: "November to February", ja: "11月〜2月", my: "နိုဝင်ဘာလ မှ ဖေဖော်ဝါရီလ" },
    thingsToDo: {
      en: [
        "Climb the spiraling timber watchtower for a panoramic palace view",
        "Walk the vast inner citadel courtyards and royal audience halls",
        "Visit nearby Shwenandaw Golden Teak Monastery",
        "Stroll the peaceful tree-lined perimeter along the outer moat"
      ],
      ja: [
        "木造の展望塔を登り、王宮敷地とマンダレーヒルのパノラマを一望",
        "大殿堂（獅子の座）や歴代の宮殿建築群を見学",
        "見事な木彫り装飾が残るシュエナンドー僧院を訪問",
        "夕暮れ時に水堀沿いの並木道を散歩する"
      ],
      my: [
        "နန်းတော်မျှော်စင်ပေါ်သို့ တက်ရောက်၍ နန်းတွင်းမြင်ကွင်းကို ကြည့်ရှုခြင်း",
        "မြနန်းစံကျော် နန်းမတော်ဆောင်ကြီးများကို လေ့လာခြင်း",
        "ကျွန်းသစ်ပန်းပုလက်ရာများဖြင့် တည်ဆောက်ထားသော ရွှေနန်းတော်ကျောင်းသို့ သွားရောက်လေ့လာခြင်း",
        "ကျုံးမြို့ရိုးပတ်လည် သာယာသော ရှုခင်းကို လည်ပတ်ကြည့်ရှုခြင်း"
      ]
    }
  },
  {
    id: "golden-rock",
    name: "Golden Rock (Kyaiktiyo)",
    nameJa: "ゴールデンロック（チャイティーヨー）",
    myanmarName: "ကျိုက်ထီးရိုးစေတီတော်",
    region: { en: "Mon State", ja: "モン州", my: "မွန်ပြည်နယ်" },
    category: "Religious",
    image: "public/images/locations/kyeik htee yoe.jpg",
    description: {
      en: "A gravity-defying boulder covered in gold leaf perched on the edge of a cliff, crowned by a 7.3-meter stupa.",
      ja: "断崖絶壁の縁に絶妙なバランスで乗る、金箔に覆われた奇跡の巨岩パゴダ。熱心な巡礼者が集まる大聖地。",
      my: "မတ်စောက်သော တောင်စွန်းပေါ်တွင် အံ့ဩဖွယ် ဟန်ချက်ညီစွာ တည်ရှိပြီး ရွှေဆိုင်းများ ကပ်လှူထားသော ဆံတော်ရှင် ကျိုက်ထီးရိုးစေတီတော်။"
    },
    detailedDescription: {
      en: "Kyaiktiyo Pagoda sits atop a granite boulder at an elevation of 1,100 meters. According to Buddhist tradition, the precarious boulder maintains its balance on the cliff edge because it is anchored by a strand of Buddha's hair given to a hermit.",
      ja: "標高1,100メートルの山頂に位置するチャイティーヨー。巨岩の上に仏陀の聖髪が納められているため、崖から落ちることなく絶妙な均衡を保っていると信じられています。巡礼者が金箔を貼り続けることで神々しい金色に輝いています。",
      my: "မွန်ပြည်နယ် ကျိုက်ထိုမြို့အနီး ပေါင်းလောင်းတောင်ပေါ်တွင် တည်ရှိပြီး ဘုရားရှင်၏ ဆံတော်မြတ် ကိန်းဝပ်တော်မူသောကြောင့် ကျောက်တုံးကြီး မပြုတ်ကျဘဲ တည်ရှိနေသည်ဟု ယုံကြည်ကိုးကွယ်ကြပါသည်။"
    },
    bestTime: { en: "November to March", ja: "11月〜3月", my: "နိုဝင်ဘာလ မှ မတ်လ" },
    thingsToDo: {
      en: [
        "Ride the exhilarating mountain open-top truck through scenic misty hills",
        "Take the modern cable car up to the summit ridge",
        "Witness thousands of flickering candles illuminated during night vigils",
        "Enjoy panoramic sunrise views over Mon State valleys"
      ],
      ja: [
        "スリル満点の専用トラックで山道を駆け上がる",
        "最新ロープウェイから山並みの絶景を楽しむ",
        "夜間に数千の灯明が灯る幻想的な巡礼風景を鑑賞",
        "雲海のかなたから昇る朝日のパノラマを満喫"
      ],
      my: [
        "တောင်တက် ကုန်တင်ကားကြီးများဖြင့် တောင်ပေါ်သို့ တက်ရောက်ခြင်း",
        "ကေဘယ်လ်ကား (Cable Car) စီး၍ တောင်တန်းရှုခင်း ကြည့်ရှုခြင်း",
        "ညဘက်တွင် ဆီမီး ကိုးထောင် ပူဇော်ပွဲကို ဖူးမြော်ခြင်း",
        "မနက်စောစော တိမ်ပင်လယ်နှင့် နေထွက်ချိန်ရှုခင်းကို ကြည့်ရှုခြင်း"
      ]
    }
  },
  {
    id: "hpa-an",
    name: "Hpa-An Caves & Karsts",
    nameJa: "パアン（洞窟とカルスト奇岩群）",
    myanmarName: "ဘားအံ သဘာဝဂူများနှင့် ထုံးကျောက်တောင်များ",
    region: { en: "Kayin State", ja: "カイン州", my: "ကရင်ပြည်နယ်" },
    category: "Nature",
    image: "public/images/locations/hpa an.jpg",
    description: {
      en: "Majestic limestone karst pinnacles rising dramatic from emerald paddy fields, harboring sacred cave temples.",
      ja: "緑豊かな水田にそびえ立つ石灰岩のタワーカルスト山群と、千体仏が刻まれた神聖な鍾乳洞。",
      my: "စိမ်းလန်းသော စပါးခင်းများအလယ်တွင် ထီးထီးမားမား တည်ရှိနေသော ထုံးကျောက်တောင်ကြီးများနှင့် သဘာဝဂူဘုရားများ တည်ရှိရာ ဘားအံမြို့။"
    },
    detailedDescription: {
      en: "Hpa-An is the capital of Kayin State, set amidst a landscape of limestone mountains. The area is famous for massive caves like Sadan Cave and Kawgun Cave, adorned with 7th-century terracotta Buddha reliefs, subterranean lakes, and bat caves.",
      ja: "カイン州の州都パアン。7世紀のテラコッタ仏像壁画が残るコーグン洞窟や、巨大な鍾乳洞を通り抜けてボートで隠れ池に出るサダン洞窟など、冒険心を刺激する見どころが満載です。",
      my: "ဇွဲကပင်တောင်၊ ကျောက်ကလပ်စေတီ၊ စဒ္ဒန်ဂူနှင့် ကော့ဂွန်းဂူတို့ တည်ရှိပြီး သဘာဝလှိုဏ်ဂူအတွင်း လှေစီး၍ လေ့လာနိုင်သော သဘာဝအလှတရားများနှင့် ပြည့်စုံပါသည်။"
    },
    bestTime: { en: "November to March", ja: "11月〜3月", my: "နိုဝင်ဘာလ မှ မတ်လ" },
    thingsToDo: {
      en: [
        "Hike through the cavernous chambers of Sadan Cave to the hidden lagoon",
        "Admire 7th-century clay tablets carved into Kawgun Cave walls",
        "Climb Mount Zwegabin for panoramic summit views",
        "Photograph the gravity-defying Kyauk Kalap monastery",
        "Watch millions of bats emerge at dusk from the Bat Cave"
      ],
      ja: [
        "サダン鍾乳洞を歩き抜け、小舟に乗って秘境の湖をめぐる",
        "7世紀の浮き彫り仏像がびっしり並ぶコーグン洞窟を見学",
        "ズウェガビン山を登山し山頂からの大パノラマを堪能",
        "奇岩の頂上に建つチャウッカラッ僧院の写真撮影",
        "夕暮れ時に何百万匹ものコウモリが一斉に飛び立つ蝙蝠洞窟を見学"
      ],
      my: [
        "စဒ္ဒန်ဂူကြီးအတွင်း လမ်းလျှောက်၍ တစ်ဖက်ရှိ ရေကန်တွင် လှေစီးခြင်း",
        "၇ ရာစုလက်ရာ ရှေးဟောင်းရုပ်ကြွများရှိသော ကော့ဂွန်းဂူကို လေ့လာခြင်း",
        "ဇွဲကပင်တောင်ပေါ်သို့ တက်ရောက်၍ တောင်ပေါ်ရှုခင်း ခံစားခြင်း",
        "ကျောက်ကလပ်စေတီတော်သို့ သွားရောက်ဖူးမြော်ခြင်း",
        "လင်းနို့ဂူမှ လင်းနို့များ သန်းချီထွက်ခွာပုံကို ညနေဆည်းဆာတွင် ကြည့်ရှုခြင်း"
      ]
    }
  },
  {
    id: "mrauk-u",
    name: "Mrauk U",
    nameJa: "ミャウー古代石造遺跡",
    myanmarName: "မြောက်ဦး ရှေးဟောင်းမြို့တော်",
    region: { en: "Rakhine State", ja: "ラカイン州", my: "ရခိုင်ပြည်နယ်" },
    category: "Historical",
    image: "public/images/locations/mrauk oo.jpg",
    description: {
      en: "A medieval Arakanese capital featuring fortified stone-carved fortress temples shrouded in rolling morning mist.",
      ja: "朝霧の中に佇む要塞のような堅牢な石造寺院群。15〜18世紀に繁栄したアラカン王国の古都。",
      my: "၁၅ မှ ၁၈ ရာစု ရခိုင်ဘုရင်များ၏ သမိုင်းဝင်မြို့တော်ဖြစ်ပြီး ကျောက်ထွင်းလက်ရာ စေတီပုထိုးပေါင်းများစွာ တည်ရှိရာ ရှေးဟောင်းမြောက်ဦး။"
    },
    detailedDescription: {
      en: "Mrauk U was the flourishing capital of the Arakanese kingdom from the 15th to 18th centuries. Unlike the brick stupas of Bagan, Mrauk U's temples are constructed from thick hewn sandstone blocks designed to withstand sea storms and artillery, resembling fortified medieval castles.",
      ja: "バガンのレンガ造りとは異なり、重厚な砂岩ブロックで築かれた要塞のような外観が特徴の石造仏教都市。シッタウン寺院には8万体の仏像が彫り込まれており、朝霧が立ち込める早朝の光景はまさに神秘的です。",
      my: "မြောက်ဦးဒေသရှိ စေတီများသည် ကျောက်တုံးကျောက်ခဲများဖြင့် ခိုင်ခံ့စွာ တည်ဆောက်ထားပြီး ရှစ်သောင်းဘုရား၊ ကိုးသောင်းဘုရားနှင့် ဒုက္ကန်သိမ်တို့မှာ ထင်ရှားကျော်ကြားလှပါသည်။"
    },
    bestTime: { en: "November to March", ja: "11月〜3月", my: "နိုဝင်ဘာလ မှ မတ်လ" },
    thingsToDo: {
      en: [
        "Explore the stone labyrinth and 80,000 Buddha images of Shite-thaung Temple",
        "Climb Shwe Taung Hill before dawn for iconic misty sunrise photography",
        "Visit fortified Dukkanthein Pagoda bunker temple",
        "Take a riverboat excursion upstream to remote Lay Myo Chin villages"
      ],
      ja: [
        "8万体の仏像が回廊に並ぶシッタウン寺院の石造迷宮を探検",
        "夜明け前にシュエタウンの丘に登り、朝霧に煙る古都の日の出を撮影",
        "要塞バンカーのような外観のドゥッカンティン寺院を参拝",
        "レイミョー川を小舟で遡り、素朴なチン族の村を訪問"
      ],
      my: [
        "ဘုရားပေါင်း ရှစ်သောင်းဆင်းတုတော်များရှိသော ရှစ်သောင်းဘုရားကို လေ့လာဖူးမြော်ခြင်း",
        "ရွှေတောင်ကုန်းပေါ်မှ နံနက်ခင်း မြူခိုးဝေဆာသော ရှေးဟောင်းရှုခင်းကို ကြည့်ရှုခြင်း",
        "ခံတပ်သဖွယ် တည်ဆောက်ထားသော ဒုက္ကန်သိမ်ဘုရားကို လေ့လာခြင်း",
        "လေးမြို့မြစ်တစ်လျှောက် စက်လှေစီး၍ ရိုးရာချင်းရွာများသို့ သွားရောက်လေ့လာခြင်း"
      ]
    }
  },
  {
    id: "pyin-oo-lwin",
    name: "Pyin Oo Lwin",
    nameJa: "ピン・ウー・ルィン（メイミョー）",
    myanmarName: "ပြင်ဦးလွင် (မေမြို့)",
    region: { en: "Mandalay Region", ja: "マンダレー地方域", my: "မန္တလေးတိုင်းဒေသကြီး" },
    category: "Culture",
    image: "public/images/locations/pyinoolwin.jpg",
    description: {
      en: "A refreshing hill station town renowned for Victorian colonial cottages, flower gardens, waterfalls, and coffee plantations.",
      ja: "涼しい気候と英国風の洋館、広大な植物園、いちご畑やコーヒー農園で知られる歴史ある避暑地高原都市。",
      my: "ဗြိတိသျှခေတ် ရှေးဟောင်းအဆောက်အအုံများ၊ အမျိုးသားကန်တော်ကြီး ရုက္ခဗေဒဥယျာဉ်နှင့် ပန်းမျိုးစုံတို့ဖြင့် သာယာလှပသော တောင်ပေါ်မြို့တော်။"
    },
    detailedDescription: {
      en: "Located at an elevation of 1,070 meters in the Shan Hills, Pyin Oo Lwin (formerly Maymyo) served as the summer capital of British Burma. It features colonial-era brick mansions, horse-drawn carriages, and the world-class National Kandawgyi Botanical Gardens.",
      ja: "マンダレーから車で約2時間、標高1,070メートルの高地に開かれた避暑地。英国統治時代のレンガ造りの洋館や、カラフルな馬車、広大なカンドーヂ植物園が広がり、ミャンマー産スペシャリティコーヒーの産地としても有名です。",
      my: "မန္တလေးမြို့မှ ကားဖြင့် ၂ နာရီခန့် မောင်းနှင်ရပြီး အေးချမ်းသော ရာသီဥတု၊ မြင်းလှည်းစီးခြင်း၊ ကော်ဖီစိုက်ခင်းများနှင့် ဓာတ်တော်ချိုင့် ရေတံခွန်တို့ကြောင့် ပြည်တွင်းပြည်ပ ခရီးသွားများ အလွန်သဘောကျသော နေရာဖြစ်ပါသည်။"
    },
    bestTime: { en: "October to April", ja: "10月〜4月", my: "အောက်တိုဘာလ မှ ဧပြီလ" },
    thingsToDo: {
      en: [
        "Stroll through the 435-acre National Kandawgyi Botanical Gardens",
        "Take a nostalgic tour in a colorful horse-drawn carriage",
        "Hike down to the cascading pools of Dat Taw Gyaint Waterfall",
        "Taste locally roasted Shan highland Arabica coffee and strawberries",
        "Cross the famous Gokteik Railway Viaduct on an epic train ride"
      ],
      ja: [
        "広大な国立カンドーヂ植物園でラン園や湖畔の散策を楽しむ",
        "カラフルな幌馬車に乗ってコロニアル調の街並みを巡る",
        "落差のあるダッタウヂャイン滝までハイキング",
        "地元産のシャン高原アラビカコーヒーや完熟いちごを味わう",
        "断崖に架かる世界的に有名なゴッティク鉄橋を列車で渡る"
      ],
      my: [
        "ဧက ၄၃၀ ကျော် ကျယ်ဝန်းသော အမျိုးသား ကန်တော်ကြီး ရုက္ခဗေဒဥယျာဉ်တွင် လည်ပတ်ခြင်း",
        "ရောင်စုံမြင်းလှည်း စီးနင်း၍ မြို့တွင်း လှည့်လည်ကြည့်ရှုခြင်း",
        "ဓာတ်တော်ချိုင့် ရေတံခွန်သို့ သွားရောက်လည်ပတ်ခြင်း",
        "ဒေသထွက် ကော်ဖီနှင့် လတ်ဆတ်သော စတော်ဘယ်ရီသီးများ မြည်းစမ်းခြင်း",
        "ကမ္ဘာကျော် ဂုတ်ထိပ်တံတားကြီးပေါ်မှ ရထားစီးနင်းခြင်း"
      ]
    }
  },
  {
    id: "kalaw",
    name: "Kalaw",
    nameJa: "カロー（トレッキングの拠点）",
    myanmarName: "ကလောမြို့ (တောင်ပေါ်မြို့)",
    region: { en: "Shan State", ja: "シャン州", my: "ရှမ်းပြည်နယ်" },
    category: "Nature",
    image: "public/images/locations/kalaw.jpg",
    description: {
      en: "A tranquil pine-forested hill station serving as Myanmar's premier hub for multi-day trekking to Inle Lake.",
      ja: "松林に囲まれた爽やかな高原の町。インレー湖へと抜ける風光明媚なトレッキングの出発地として大人気。",
      my: "ထင်းရှူးပင်ရနံ့များ သင်းပျံ့နေသော တောင်ပေါ်မြို့လေးဖြစ်ပြီး အင်းလေးကန်သို့ တောလမ်းခရီး ခြေလျင်လျှောက် လမ်းလျှောက်ခရီးစဉ်များဖြင့် ထင်ရှားပါသည်။"
    },
    detailedDescription: {
      en: "Perched at 1,320 meters in the Shan highlands, Kalaw was founded by the British as a cool mountain getaway. Today, it is Myanmar's trekking capital, where travelers embark on 2- to 3-day guided hiking treks traversing Danu, Palaung, and Pa-O hill tribe villages down to Inle Lake.",
      ja: "標高1,320メートルのシャン高原に位置するカロー。ここからインレー湖までの2泊3日トレッキングは、ダヌ族、パラウン族、パオ族などの素朴な少数民族の村々を歩き、ホームステイを体験できる東南アジア有数のハイキングルートです。",
      my: "ရှမ်းပြည်နယ်ရှိ သာယာလှပသော တောင်ပေါ်မြို့ဖြစ်ပြီး ကလောမှ အင်းလေးသို့ ၂ ညအိပ် ၃ ရက် တောတွင်းလမ်းလျှောက်ကာ တိုင်းရင်းသားရွာများ၏ လူနေမှုဘဝကို လေ့လာနိုင်ပါသည်။"
    },
    bestTime: { en: "October to March", ja: "10月〜3月", my: "အောက်တိုဘာလ မှ မတ်လ" },
    thingsToDo: {
      en: [
        "Embark on the multi-day guided trek from Kalaw to Inle Lake",
        "Browse the bustling 5-day rotating ethnic tribal market",
        "Visit Green Hill Valley Elephant Sanctuary for ethical wildlife encounters",
        "Explore Shwe Oo Min Natural Cave Pagoda filled with golden statues",
        "Hike to the pine ridges overlooking the rolling Shan tea hills"
      ],
      ja: [
        "カローからインレー湖への2〜3日間のガイド付きトレッキングに参加",
        "5日ごとに開かれる少数民族の朝市を散策",
        "象を保護するグリーンヒル・バレー・サンクチュアリを訪問",
        "無数の黄金仏が並ぶシュエ・ウー・ミン自然洞窟パゴダを見学",
        "見渡す限りの茶畑と松林の尾根道をハイキング"
      ],
      my: [
        "ကလောမှ အင်းလေးသို့ ခြေလျင်လမ်းလျှောက် ခရီးစဉ် သွားရောက်ခြင်း",
        "ငါးရက်တစ်ဈေး တိုင်းရင်းသားဈေးသို့ သွားရောက်လေ့လာ ဝယ်ယူခြင်း",
        "ဂရင်းဟီးလ်ဗာလီ ဆင်စခန်းသို့ သွားရောက်လေ့လာခြင်း",
        "ရွှေဥမင် သဘာဝလှိုဏ်ဂူဘုရားသို့ သွားရောက်ဖူးမြော်ခြင်း",
        "ရှမ်းတောင်တန်း လက်ဖက်ခင်းများနှင့် ထင်းရှူးတောများတွင် လမ်းလျှောက်ခြင်း"
      ]
    }
  },
  {
    id: "myeik-archipelago",
    name: "Mergui (Myeik) Archipelago",
    nameJa: "メルギー諸島（ミェイク群島）",
    myanmarName: "မြိတ်ကျွန်းစု (တနင်္သာရီ)",
    region: { en: "Tanintharyi Region", ja: "タニンダーリ地方域", my: "တနင်္သာရီတိုင်းဒေသကြီး" },
    category: "Beach",
    image: "public/images/locations/Mergui Archipelago Diving & Kayaking.jpg",
    description: {
      en: "Over 800 untouched tropical islands in the Andaman Sea, home to the sea-nomadic Moken people, coral reefs, and deserted coves.",
      ja: "アンダマン海に浮かぶ800以上の未踏の無人島群。モーケン族（海の民）の文化、極上のサンゴ礁、手つかずの秘境。",
      my: "အက်ဒမန်ပင်လယ်အတွင်း ကျွန်းပေါင်း ၈၀၀ ကျော်ဖြင့် ဖွဲ့စည်းထားပြီး သဘာဝအတိုင်း တည်ရှိနေသော သန္တာကျောက်တန်းများနှင့် ဆလုံလူမျိုးများ နေထိုင်ရာ ဒေသ။"
    },
    detailedDescription: {
      en: "Located in Myanmar's far south, the Mergui Archipelago consists of more than 800 tropical islands scattered across the Andaman Sea. Virtually uninhabited except for the indigenous sea-gypsy Moken people, the archipelago offers world-class diving, limestone cliffs, and mangrove forests.",
      ja: "ミャンマー最南端、アンダマン海に広がる奇跡の秘境群島。海の遊牧民と呼ばれるモーケン族が伝統的な生活を営むこの海域には、世界最高水準のダイビングスポット、無数のエメラルド色のラグーン、白い砂浜が広がっています。",
      my: "မြိတ်ကျွန်းစုသည် မြန်မာနိုင်ငံတောင်ဘက်စွန်းတွင် တည်ရှိပြီး ရေငုပ်ခြင်း၊ ကျွန်းပတ်လည် ခရီးသွားခြင်း၊ ဆလုံတိုင်းရင်းသားတို့၏ ရိုးရာဓလေ့ကို လေ့လာနိုင်ခြင်းတို့ကြောင့် ကမ္ဘာလှည့်ခရီးသည်များ စိတ်ဝင်စားမှု အလွန်မြင့်မားသော နေရာဖြစ်ပါသည်။"
    },
    bestTime: { en: "November to April", ja: "11月〜4月（海が穏やかで透明度が高い）", my: "နိုဝင်ဘာလ မှ ဧပြီလ" },
    thingsToDo: {
      en: [
        "Liveaboard sailing or catamaran island hopping across virgin atolls",
        "World-class scuba diving with manta rays and whale sharks at Black Rock",
        "Kayak through limestone karst sea caves and pristine mangrove lagoons",
        "Learn about sustainable seafaring heritage with the indigenous Moken people",
        "Swim and sunbathe on untouched powder-white beaches of Horseshoe Island"
      ],
      ja: [
        "カタマラン船やクルーズ船で無人の楽園島々をホッピング",
        "ブラックロック等でマンタやジンベエザメと泳ぐダイビング",
        "石灰岩の海中洞窟やマングローブ林をシーカヤックで探検",
        "海の民モーケン族の伝統的な海洋文化を敬意を持って見学",
        "ホースシュー島などの真っ白なプライベートビーチでスイミング"
      ],
      my: [
        "ဇိမ်ခံသင်္ဘော (Liveaboard) စီး၍ ကျွန်းများတစ်လျှောက် အပန်းဖြေခရီးသွားခြင်း",
        "ဘလက်ရော့ခ် (Black Rock) တွင် ရေငုပ်၍ ပင်လယ်သတ္တဝါများနှင့် သန္တာကျောက်တန်းများ ကြည့်ရှုခြင်း",
        "ကာယက်လှေ (Kayak) လှော်ခတ်ကာ လမုတောများနှင့် ပင်လယ်ဂူများကို စူးစမ်းခြင်း",
        "ဆလုံ (မိုကင်) တိုင်းရင်းသားတို့၏ ရိုးရာပင်လယ်ဘဝကို လေ့လာခြင်း",
        "မြင်းခွာကျွန်းကဲ့သို့ လှပသော ကျွန်းများတွင် ရေကူးအပန်းဖြေခြင်း"
      ]
    }
  },
  {
    id: "yangon-heritage",
    name: "Downtown Yangon Heritage",
    nameJa: "ヤンゴン・コロニアル歴史建築街",
    myanmarName: "ရန်ကုန်မြို့တွင်း ရှေးဟောင်းအမွေအနှစ်ဒေသ",
    region: { en: "Yangon Region", ja: "ヤンゴン地方域", my: "ရန်ကုန်တိုင်းဒေသကြီး" },
    category: "City",
    image: "public/images/locations/yangon.jpg",
    description: {
      en: "Southeast Asia's densest concentration of grand colonial architecture, historic tea shops, art galleries, and lively street food alleys.",
      ja: "東南アジアで最も密集した歴史的コロニアル建築群、伝統的な喫茶店、活気あふれる屋台街が融合する大都市。",
      my: "အရှေ့တောင်အာရှတွင် ကိုလိုနီခေတ် ရှေးဟောင်းဗိသုကာ အဆောက်အအုံများ အများဆုံး စုစည်းရာနှင့် လက်ဖက်ရည်ဆိုင်ယဉ်ကျေးမှု ထွန်းကားသော ရန်ကုန်မြို့။"
    },
    detailedDescription: {
      en: "Downtown Yangon boasts a magnificent architectural ensemble of 19th- and early 20th-century Victorian, Edwardian, and Art Deco heritage buildings, including the Old Secretariat, City Hall, and Strand Hotel, alongside sacred pagodas like Sule Pagoda.",
      ja: "旧ビルマの首都ヤンゴンの中心街。英国統治時代の旧高等裁判所や内閣府総理大臣官房（セクレタリアト）、ストランドホテルなど堂々たる歴史的建造物が並びます。地元のティーショップでラペイエ（甘いミルクティー）を飲む文化も必見です。",
      my: "ဗဟန်း၊ ကျောက်တံတား၊ ပန်းဘဲတန်း စသည့် မြို့တွင်းဒေသများတွင် ဝန်ကြီးများရုံး၊ မြို့တော်ခန်းမ၊ စထရင်းဟိုတယ်တို့နှင့်အတူ ဆူးလေစေတီတော်၊ ဗိုလ်ချုပ်ဈေးတို့ တည်ရှိပါသည်။"
    },
    bestTime: { en: "November to March", ja: "11月〜3月", my: "နိုဝင်ဘာလ မှ မတ်လ" },
    thingsToDo: {
      en: [
        "Take a guided architectural heritage walking tour through downtown streets",
        "Visit the historic Secretariat Building where General Aung San was assassinated",
        "Sip sweet Myanmar milk tea (Laphet-yay) at an open-air street tea house",
        "Shop for jade, hand-woven gems, and silk textiles at Bogyoke Aung San Market",
        "Ride the nostalgic Yangon Circular Railway for an authentic local commuter view"
      ],
      ja: [
        "専門ガイドとともに歴史的コロニアル建築を巡るウォーキングツアー",
        "独立の父アウンサン将軍ゆかりの歴史的官房セクレタリアトを見学",
        "路上のローカル喫茶店で名物の甘いミルクティー（ラペイエ）を味わう",
        "ボージョーアウンサン市場で宝石、翡翠、伝統シルク生地をお買い物",
        "ヤンゴン環状線（環状鉄道）に乗って地元の人々の日常風景に出会う"
      ],
      my: [
        "မြို့တွင်း ရှေးဟောင်းဗိသုကာ အမွေအနှစ်များကို လမ်းလျှောက်လေ့လာခြင်း",
        "သမိုင်းဝင် ဝန်ကြီးများရုံးသို့ သွားရောက်လေ့လာခြင်း",
        "ရန်ကုန်လမ်းဘေး လက်ဖက်ရည်ဆိုင်တွင် လက်ဖက်ရည်နှင့် မုန့်များ သုံးဆောင်ခြင်း",
        "ဗိုလ်ချုပ်အောင်ဆန်းဈေးတွင် ကျောက်မျက်ရတနာများနှင့် ရိုးရာပိုးထည်များ ဝယ်ယူခြင်း",
        "ရန်ကုန်မြို့ပတ်ရထား စီးနင်းကာ ဒေသခံပြည်သူတို့၏ လူနေမှုဘဝကို လေ့လာခြင်း"
      ]
    }
  }
];
