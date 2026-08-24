/**
 * 🇲🇲 MYANMAR GUIDE - Adventures Dataset (5 Expeditions)
 * Trilingual: English (en), Japanese (ja), Myanmar (my)
 */

const adventuresData = [
  {
    id: "hkakabo-razi",
    title: "🏔️ Hkakabo Razi Trekking Expedition",
    titleJa: "🏔️ カカボラジ峰 高地トレッキング遠征",
    titleMy: "🏔️ ခါကာဘိုရာဇီ နှင်းဖုံးတောင်တက်ခရီးစဉ်",
    category: "Mountain Expedition",
    location: { en: "Kachin State (Far Northern Himalayas)", ja: "カチン州（ヒマラヤ東端・最北部）", my: "ကချင်ပြည်နယ် (မြောက်ဖျားဟိမဝန္တာ)" },
    difficulty: { en: "Extreme / Expert Mountaineering", ja: "最上級・エキスパート向け", my: "အလွန်ခက်ခဲ / ကျွမ်းကျင်တောင်တက်သမားများ" },
    badge: "Featured Expedition",
    image: "images/locations/Hkakabo Razi.jpg",
    description: {
      en: "The highest mountain in Southeast Asia (5,881 meters / 19,295 ft), enveloped in permafrost, glaciated peaks, and dense subtropical rainforests.",
      ja: "標高5,881メートルを誇る東南アジア最高峰。万年雪、氷河、そして手つかずの原生林が生息する地球最後の秘境の一つ。",
      my: "အရှေ့တောင်အာရှ၏ အမြင့်ဆုံးတောင်ထွတ် (အမြင့်ပေ ၁၉,၂၉၅ ပေ) ဖြစ်ပြီး နှင်းခဲများ၊ ရေခဲမြစ်များနှင့် မိုးသစ်တောများ တည်ရှိရာ ကမ္ဘာ့အံ့ဖွယ် တောင်ကြီး။"
    },
    detailedDescription: {
      en: "Hkakabo Razi stands on the tri-border of Myanmar, China, and India within the Hkakabo Razi National Park. It is one of the world's least-explored alpine wildernesses. Reaching the base camp requires a grueling multi-week trek through dense temperate rain forests, hanging rope bridges over torrential rivers, and remote Rawang and Tibetan villages before reaching subalpine pine forests and vertical ice walls.",
      ja: "ミャンマー、中国、インドの国境地帯に位置するカカボラジ国立公園。ベースキャンプに到達するだけでも、吊り橋を渡り、ラワン族やチベット系の集落を抜け、何週間もの過酷な熱帯・温帯雨林トレッキングが必要です。登頂には高度な氷雪登攀技術が要求されます。",
      my: "ခါကာဘိုရာဇီသည် ကချင်ပြည်နယ် ပူတာအိုခရိုင်တွင် တည်ရှိပြီး ဇီဝမျိုးစုံမျိုးကွဲများ စုစည်းရာ အမျိုးသားဥယျာဉ် ဖြစ်ပါသည်။ ဤတောင်သို့ တက်ရောက်ရန် သီတင်းပတ်ပေါင်းများစွာ တောတောင်ရေမြေများကို ဖြတ်သန်းရပြီး စိန်ခေါ်မှု အလွန်များပြားလှပါသည်။"
    },
    safetyAdvisory: {
      en: "Strict government permits, professional mountaineering guides, high-altitude expedition gear, satellite SOS communication, and emergency evacuation insurance are mandatory.",
      ja: "入域にはミャンマー政府の特別許可、熟練シェルパ・山岳ガイドの同伴、衛星通信機器、高度救助保険への加入が必須です。",
      my: "အစိုးရ၏ အထူးခွင့်ပြုမိန့်၊ ကျွမ်းကျင် တောင်တက်လမ်းပြ၊ အဆင့်မြင့် တောင်တက်ပစ္စည်းများနှင့် အရေးပေါ် ကယ်ဆယ်ရေး အာမခံများ မဖြစ်မနေ လိုအပ်ပါသည်။"
    },
    highlights: {
      en: [
        "Ascend through 5 distinct ecological climatic zones from jungle to arctic tundra",
        "Encounter rare flora, black orchids, and elusive takins and red pandas",
        "Cross dramatic swinging cane bridges over rushing glacial torrents",
        "Experience isolated Tibetan Buddhist and Rawang highland cultural enclaves"
      ],
      ja: [
        "熱帯雨林からツンドラ・氷河まで5つの気候帯を垂直移動する大自然の旅",
        "幻の黒いラン、ターキンやレッサーパンダなど希少野生生物の生息地",
        "激流に架かる伝統的な籐の吊り橋を渡るスリル",
        "チベット仏教文化や高地先住民族ラワン族との出会い"
      ],
      my: [
        "မိုးသစ်တောမှ ရေခဲပြင်အထိ ရာသီဥတုဇုန် ၅ ခုကို ဖြတ်သန်းတွေ့ကြုံရခြင်း",
        "ရှားပါး သစ်ခွနက်များနှင့် သားငှက်တိရစ္ဆာန်များကို တွေ့မြင်နိုင်ခြင်း",
        "မြစ်ချောင်းများပေါ်ရှိ ကြိမ်ကြိုးတံတားများကို စွန့်စားဖြတ်သန်းခြင်း",
        "ရဝမ်တိုင်းရင်းသားများနှင့် တိဗက်ရိုးရာ ယဉ်ကျေးမှုဓလေ့များကို လေ့လာနိုင်ခြင်း"
      ]
    }
  },
  {
    id: "putao-trekking",
    title: "🌲 Putao Himalayan Foothills Trekking",
    titleJa: "🌲 プタオ・ヒマラヤ山麓トレッキング",
    titleMy: "🌲 ပူတာအို ဟိမဝန္တာ တောင်ခြေ ခြေလျင်ခရီး",
    category: "Highland Trekking",
    location: { en: "Kachin State (Northern Wilderness)", ja: "カチン州プタオ", my: "ကချင်ပြည်နယ် ပူတာအို" },
    difficulty: { en: "Moderate to Challenging", ja: "中級〜上級", my: "အလယ်အလတ် မှ အသင့်အတင့် ခက်ခဲ" },
    image: "images/locations/putao.jpg",
    description: {
      en: "Scenic highland walks through bamboo forests, pristine mountain streams, and remote Lisu and Rawang villages nestled in the snow-capped foothills.",
      ja: "遠くに雪山を望む爽快な高原で、竹林や清流、リス族・ラワン族の村々を訪ねるトレッキングコース。",
      my: "နှင်းဖုံးတောင်တန်းများကို နောက်ခံထားပြီး ဝါးတောများ၊ စမ်းချောင်းများနှင့် လီဆူ၊ ရဝမ်ရွာလေးများသို့ လည်ပတ်လမ်းလျှောက်သည့် ခရီးစဉ်။"
    },
    detailedDescription: {
      en: "Putao is the northernmost town in Kachin State, accessible only by domestic flights. The region features crystalline rivers like the Malikha, snow-capped mountain backdrops (such as Mount Phangran Razi and Mount Phongun Razi), and village homestays.",
      ja: "国内線飛行機でのみアクセス可能な秘境プタオ。マリッカ川の透き通る清流と、ファングランラジ山などの雪峰を背景に、少数民族の温かいもてなしを体験できます。",
      my: "ပူတာအိုမြို့သည် မြန်မာနိုင်ငံ၏ မြောက်ဘက်စွန်းဒေသဖြစ်ပြီး မလိခမြစ်၊ ဖုန်ကန်ရာဇီနှင့် ဖန်ဂရန်ရာဇီ တောင်တန်းများ တည်ရှိရာ သာယာလှပသော နယ်မြေဖြစ်ပါသည်။"
    },
    safetyAdvisory: {
      en: "Requires advance travel permits, warm seasonal gear for cold winter nights, and hiring an authorized local licensed guide.",
      ja: "入域許可証の取得と、朝晩の冷え込みに対応する防寒装備、公認ローカルガイドの手配が必要です。",
      my: "ခရီးသွားခွင့်ပြုချက် ကြိုတင်ရယူရန်နှင့် ဆောင်းရာသီတွင် အနွေးထည်များ ပြည့်စုံစွာ ယူဆောင်သွားရန် လိုအပ်ပါသည်။"
    },
    highlights: {
      en: [
        "Spectacular views of snow-capped Himalayan peaks across Putao Valley",
        "White-water rafting and bamboo rafting along the pristine Malikha River",
        "Taste organic wild honey and fragrant local mountain rice wine",
        "Warm fireside stays in traditional wooden Lisu stilt houses"
      ],
      ja: [
        "プタオ渓谷から望む白銀のヒマラヤ山脈の絶景",
        "透明度抜群のマリッカ川でのホワイトウォーターラフティング",
        "天然のハチミツや地元の特製ライスワイン（米酒）を味わう",
        "リス族の伝統的な高床式木造家屋での温かいホームステイ"
      ],
      my: [
        "ပူတာအိုချိုင့်ဝှမ်းမှ ဟိမဝန္တာ နှင်းတောင်ကြီးများ၏ ရှုခင်းကို ခံစားရခြင်း",
        "မလိခမြစ်အတွင်း ဖောင်စီးခြင်းနှင့် စွန့်စားလှုပ်ရှားမှုများ",
        "ဒေသထွက် သဘာဝတောပျားရည်နှင့် ခေါင်ရည်တို့ကို မြည်းစမ်းနိုင်ခြင်း",
        "လီဆူတိုင်းရင်းသားတို့၏ ရိုးရာသစ်သားအိမ်များတွင် ညအိပ်တည်းခိုခြင်း"
      ]
    }
  },
  {
    id: "chin-hills-victoria",
    title: "🌺 Mount Victoria (Nat Ma Taung) & Chin Hills",
    titleJa: "🌺 ナクマタウン（ビクトリア山）とチン高原",
    titleMy: "🌺 ဝိတိုရိယတောင် (နတ်မတောင်) နှင့် ချင်းတောင်တန်း",
    category: "Mountain Hiking",
    location: { en: "Chin State", ja: "チン州（西部高地）", my: "ချင်းပြည်နယ်" },
    difficulty: { en: "Moderate", ja: "中級（歩きやすい登山道）", my: "အလယ်အလတ် (လမ်းလျှောက်တောင်တက်)" },
    image: "images/locations/Mount Victoria (Nat Ma Taung).jpg",
    description: {
      en: "Ascend Chin State's highest summit (3,053m) through misty pine and rhododendron forests, home to unique indigenous cultures.",
      ja: "標高3,053メートルのチン州最高峰。紅紫色のシャクナゲの花が咲き誇る山道を登り、独自のタトゥー文化を持つチン族の村を訪問。",
      my: "အမြင့်ပေ ၁၀,၀၁၈ ပေရှိသော နတ်မတောင် အမျိုးသားဥယျာဉ်တွင် တောင်ဇလပ်ပန်းနီနီများနှင့် ချင်းရိုးရာ ပါးရဲထိုး ယဉ်ကျေးမှုများကို တွေ့မြင်နိုင်ခြင်း။"
    },
    detailedDescription: {
      en: "Nat Ma Taung National Park is an ASEAN Heritage Park in the rugged Chin Hills. In winter and early spring, the slopes burst into vibrant crimson and white rhododendron blossoms (Taung Zalat). The surrounding villages are home to elder Chin women bearing iconic traditional facial tattoos.",
      ja: "ASEAN遺産公園に指定された豊かな自然環境。冬から春にかけて美しいシャクナゲ（タウ恩ザラッ）が一面に咲き乱れます。麓のカンペトレやミンタッ周辺では、かつて部族の誇りとして顔に幾何学模様のタトゥーを施したチン族の長老女性たちに出会えます。",
      my: "နတ်မတောင်သည် ချင်းပြည်နယ် ကန်ပက်လက်နှင့် မင်းတပ်မြို့အနီးတွင် တည်ရှိပြီး တောင်ဇလပ်ပန်းများ ပွင့်လန်းချိန်တွင် အလွန်လှပကာ ယူနက်စကို ဇီဝအဝန်းအဝိုင်းနယ်မြေ ဖြစ်ပါသည်။"
    },
    safetyAdvisory: {
      en: "Mountain roads can be rough and winding. Respect local customs and always ask permission before taking photographs in villages.",
      ja: "山道は未舗装で曲がりくねっています。村での写真撮影時は必ず事前の礼儀正しい同意を得てください。",
      my: "တောင်တက်ကားလမ်းမှာ ကွေ့ကောက်သဖြင့် သတိထား မောင်းနှင်ရန်နှင့် တိုင်းရင်းသားရွာများတွင် ဓာတ်ပုံရိုက်ပါက ခွင့်တောင်းရန် လိုအပ်ပါသည်။"
    },
    highlights: {
      en: [
        "Hike to the 3,053-meter summit with breathtaking panoramic cloud seas",
        "Witness brilliant wild red and white rhododendrons in bloom (Nov-Feb)",
        "Learn about the intricate historic facial tattoo patterns of Chin elders",
        "Listen to traditional Chin bamboo nose-flute performances"
      ],
      ja: [
        "雲海を眼下に望む3,053メートルの頂上への爽快なハイキング",
        "11月〜2月に見頃を迎える野生シャクナゲの群生",
        "チン族女性の伝統的な幾何学模様フェイスパターンの歴史を学ぶ",
        "息を吹き込んで奏でる伝統的な竹製鼻笛の生演奏を聴く"
      ],
      my: [
        "ပေ ၃၀၀၀ ကျော် တောင်ထွတ်ပေါ်မှ တိမ်ပင်လယ်ရှုခင်းကို ကြည့်ရှုခြင်း",
        "နိုဝင်ဘာလမှ ဖေဖော်ဝါရီလအတွင်း တောင်ဇလပ်ပန်းများ ပွင့်လန်းမှုကို ခံစားရခြင်း",
        "ချင်းအမျိုးသမီးကြီးများ၏ ရိုးရာ ပါးရဲထိုးပုံစံများ၏ သမိုင်းကြောင်းကို လေ့လာခြင်း",
        "ရိုးရာ နှာခေါင်းဖြင့် မှုတ်သော ဝါးပလွေသံကို နားဆင်ခံစားခြင်း"
      ]
    }
  },
  {
    id: "gokteik-viaduct",
    title: "🚂 Gokteik Viaduct Railway Journey",
    titleJa: "🚂 ゴッティク鉄橋 絶景鉄道の旅",
    titleMy: "🚂 ဂုတ်ထိပ်တံတား ရထားလမ်းခရီးစဉ်",
    category: "Scenic Railway Journey",
    location: { en: "Northern Shan State (Mandalay to Lashio Line)", ja: "シャン州北部（マンダレー〜ラーショー間）", my: "ရှမ်းပြည်နယ်မြောက်ပိုင်း" },
    difficulty: { en: "Easy / Sightseeing Adventure", ja: "初級（乗車観光）", my: "လွယ်ကူ / အပန်းဖြေရှုခင်းကြည့်" },
    image: "images/locations/Gokteik Viaduct Railway.jpg",
    description: {
      en: "Ride an open-window historic train across a 100-meter-high steel railway trestle built in 1900 spanning a breathtaking gorge.",
      ja: "1900年に建設された高さ約100メートルの巨大鉄橋。窓全開の列車が深い渓谷の上をゆっくりと渡る大迫力の鉄道体験。",
      my: "၁၉၀၀ ပြည့်နှစ်တွင် တည်ဆောက်ခဲ့သော ပေ ၃၀၀ ကျော်မြင့်သည့် သံမဏိ ဂုတ်ထိပ်တံတားကြီးပေါ်မှ ရထားစီးနင်းကာ ချောက်ကမ်းပါး အလှကို ကြည့်ရှုခြင်း။"
    },
    detailedDescription: {
      en: "Built in 1900 by the Pennsylvania Steel Company for the British Burma Railways, the Gokteik Viaduct spans 689 meters across a deep gorge. When the slow train creeps across the single-track trestle without handrails, looking straight down into the jungle ravine below is an unforgettable adrenaline rush.",
      ja: "1900年に完成した当時世界第2位の高さを誇った鉄道橋。長さ689メートルの鉄橋を列車が時速10kmほどの最徐行で進む際、窓から見下ろす吸い込まれそうな渓谷の眺めはスリル満点です。",
      my: "အလျား ၂,၂၆၀ ပေရှိပြီး ကမ္ဘာ့အံ့ဖွယ် သံမဏိတံတားကြီးတစ်ခု ဖြစ်ပါသည်။ ရထားသည် တံတားပေါ်တွင် အလွန်ဖြည်းညင်းစွာ မောင်းနှင်သဖြင့် ခရီးသွားများ အသည်းယားဖွယ် ဓာတ်ပုံရိုက်ကူးနိုင်ပါသည်။"
    },
    safetyAdvisory: {
      en: "Keep hands and cameras securely inside the carriage when passing trestle steel columns. Carry snacks and water for long train rides.",
      ja: "鉄橋通過時は身を乗り出さず、スマートフォンやカメラの落下にご注意ください。",
      my: "တံတားဖြတ်သန်းချိန်တွင် ပြတင်းပေါက်မှ အပြင်သို့ ကိုယ်လက်မထုတ်ရန်နှင့် ကင်မရာ၊ ဖုန်းများ မပြုတ်ကျစေရန် သတိပြုပါ။"
    },
    highlights: {
      en: [
        "Cross a 125-year-old engineering marvel suspended high above a lush limestone gorge",
        "Buy hot fried snacks, tea, and seasonal fruit from walking train vendors",
        "Experience rhythmic clicking wheels and cool mountain air in open carriages",
        "Combine with stays in colonial Pyin Oo Lwin and Hsipaw Shan villages"
      ],
      ja: [
        "100年以上前に造られた空中鉄橋をゆっくりと渡る圧巻のスリル",
        "車内を行き交う物売りから温かい揚げ物やお茶、旬のフルーツを購入",
        "窓全開のレトロな客車で受ける爽やかな高原の風",
        "ピンウールィン（メイミョー）やシーポーの街巡りとセットで楽しむ"
      ],
      my: [
        "နှစ်ပေါင်း ၁၂၀ ကျော် သက်တမ်းရှိ သမိုင်းဝင် တံတားကြီးပေါ်မှ ဖြတ်သန်းခြင်း",
        "ရထားပေါ်တွင် ရောင်းချသော ရိုးရာအစားအစာများနှင့် သစ်သီးများ ဝယ်ယူစားသုံးခြင်း",
        "သဘာဝလေကောင်းလေသန့် ခံစားရင်း ရထားစီးနင်းရခြင်း",
        "ပြင်ဦးလွင်နှင့် သီပေါမြို့များသို့ ဆက်လက်လည်ပတ်နိုင်ခြင်း"
      ]
    }
  },
  {
    id: "mergui-scuba",
    title: "🤿 Mergui Archipelago Diving & Kayaking",
    titleJa: "🤿 メルギー諸島 ダイビング＆カヤック探検",
    titleMy: "🤿 မြိတ်ကျွန်းစု ရေငုပ်နှင့် ကာယက်စွန့်စားခရီးစဉ်",
    category: "Marine Expedition",
    location: { en: "Tanintharyi Region (Andaman Sea)", ja: "タニンダーリ地方域（アンダマン海）", my: "တနင်္သာရီတိုင်းဒေသကြီး (အက်ဒမန်ပင်လယ်)" },
    difficulty: { en: "Moderate / Scuba Certification", ja: "中級（ダイビングライセンス推奨）", my: "အလယ်အလတ် / ရေငုပ်လက်မှတ်" },
    image: "images/locations/Mergui Archipelago Diving & Kayaking.jpg",
    description: {
      en: "Dive unexplored coral reefs, swim alongside manta rays, and kayak through hidden sea caves in 800 deserted tropical islands.",
      ja: "800以上の無人島が広がるアンダマン海の秘境で、マンタやサメに出会う極上ダイビングと海中洞窟カヤック探検。",
      my: "ကျွန်းပေါင်း ၈၀၀ ကျော်ရှိရာ တနင်္သာရီပင်လယ်ပြင်တွင် သန္တာကျောက်တန်းများ၊ ငါးမန်းများနှင့်အတူ ရေငုပ်ခြင်းနှင့် ပင်လယ်လှိုဏ်ဂူများသို့ သွားရောက်ခြင်း။"
    },
    detailedDescription: {
      en: "The Mergui Archipelago is one of the planet's remaining pristine marine frontiers. Liveaboard dive boats departing from Kawthaung cruise to legendary dive sites like Black Rock, Burma Banks, and Western Rocky, where oceanic manta rays, barracudas, and whale sharks roam.",
      ja: "世界中のダイバーが憧れる秘境メルギー諸島。コータウン（最南端の港町）からダイブクルーズ船（ライブアボード）で出航し、ブラックロックなどの名ポイントで大物海洋生物と遭遇できます。",
      my: "ကော့သောင်းမြို့မှတစ်ဆင့် သင်္ဘောစီးနင်းကာ ဘလက်ရော့ခ် အစရှိသော ကမ္ဘာကျော် ရေငုပ်နေရာများသို့ သွားရောက်နိုင်ပြီး သဘာဝပတ်ဝန်းကျင် အလွန်သန့်ရှင်းသော နေရာဖြစ်ပါသည်။"
    },
    safetyAdvisory: {
      en: "Advanced Open Water certification is recommended due to ocean currents at offshore pinnacles. Follow professional PADI divemaster briefings.",
      ja: "外洋のポイントでは潮流があるためアドバンス以上のダイビングライセンスを推奨。ダイブマスターの指示に従ってください。",
      my: "ပင်လယ်ရေစီးကြောင်းများ ရှိနိုင်သဖြင့် အဆင့်မြင့် ရေငုပ်လက်မှတ်ရှိရန်နှင့် လမ်းပြများ၏ ညွှန်ကြားချက်ကို လိုက်နာရန် လိုအပ်ပါသည်။"
    },
    highlights: {
      en: [
        "Encounter majestic oceanic manta rays and whale sharks in crystal clear waters",
        "Explore limestone sea arches, tunnels, and bio-luminescent night lagoons",
        "Sea kayak through uncharted mangrove estuaries",
        "Witness zero light pollution for unforgettable stargazing from catamaran decks"
      ],
      ja: [
        "透明度抜群の海で巨大なマンタやジンベエザメと泳ぐ感動体験",
        "石灰岩の海中アーチや洞窟、夜光虫が輝く夜のラグーンを探検",
        "未開のマングローブ水路をシーカヤックで巡る",
        "街明かりの一切ない海上デッキから見上げる満天の星空"
      ],
      my: [
        "ကြည်လင်သော ပင်လယ်ရေပြာအတွင်း ငါးမန်းကြီးများနှင့် ရေကူးတွေ့ဆုံရခြင်း",
        "ပင်လယ်ကျောက်ဂူများနှင့် ညဘက် လင်းလက်နေသော ရေညှိအလှကို ကြည့်ရှုခြင်း",
        "လမုတောများအတွင်း ကာယက်လှေ လှော်ခတ်စူးစမ်းခြင်း",
        "သင်္ဘောပေါ်မှ ညအခါ ကြယ်တာရာစုံလင်သော ကောင်းကင်ယံကို ကြည့်ရှုခံစားခြင်း"
      ]
    }
  }
];
