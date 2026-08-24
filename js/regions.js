/**
 * 🇲🇲 MYANMAR GUIDE - Interactive Map Regions Dataset
 * Trilingual: English (en), Japanese (ja), Myanmar (my)
 */

const regionsData = {
  mandalay: {
    name: { en: "Mandalay Region", ja: "マンダレー地方域", my: "မန္တလေးတိုင်းဒေသကြီး" },
    capital: { en: "Capital / Hub: Mandalay City • Climate: Dry central zone", ja: "中心都市: マンダレー市 • 気候: 熱帯乾燥ステップ気候", my: "မြို့တော်: မန္တလေးမြို့ • ရာသီဥတု: အပူပိုင်း အပူလျော့ဇုန်" },
    image: "images/locations/Mandalay.jpg",
    description: {
      en: "The historical and cultural heartland of Myanmar, containing the thousands of ancient temples across the Bagan plains, U Bein Bridge, and royal capitals.",
      ja: "ミャンマーの歴史と文化の中心地。バガンの古代寺院群、世界最長の木造橋ウーベイン橋、最後の王宮が位置します。",
      my: "မြန်မာနိုင်ငံ၏ သမိုင်းနှင့် ယဉ်ကျေးမှု အချက်အချာဒေသဖြစ်ပြီး ပုဂံရှေးဟောင်းစေတီများ၊ ဦးပိန်တံတားနှင့် မန္တလေးနန်းတော်တို့ တည်ရှိပါသည်။"
    },
    highlights: {
      en: ["Bagan Archaeological Zone", "Mandalay Royal Palace & Mandalay Hill", "U Bein Teak Bridge in Amarapura", "Mahamuni Buddha Temple"],
      ja: ["バガン古代遺跡群", "マンダレー王宮とマンダレーヒル", "アマラプラのウーベイン木造橋", "マハムニ・パゴダ（金箔仏）"],
      my: ["ပုဂံရှေးဟောင်း ယဉ်ကျေးမှုနယ်မြေ", "မန္တလေးနန်းတော်နှင့် မန္တလေးတောင်", "အမရပူရ ဦးပိန်တံတား", "မဟာမုနိ ရုပ်ရှင်တော်မြတ်ကြီး"]
    }
  },
  kachin: {
    name: { en: "Kachin State", ja: "カチン州", my: "ကချင်ပြည်နယ်" },
    capital: { en: "Capital / Hub: Myitkyina & Putao • Climate: Alpine & temperate", ja: "中心都市: ミッチーナ / プタオ • 気候: 高山性・冷涼", my: "မြို့တော်: မြစ်ကြီးနား / ပူတာအို • ရာသီဥတု: အေးမြသော တောင်ပေါ်ဇုန်" },
    image: "images/locations/Hkakabo Razi.jpg",
    description: {
      en: "Northern wilderness featuring snow-capped Himalayan peaks, the confluence of the Ayeyarwady River (Myitsone), and colorful Manaw festival traditions.",
      ja: "白銀のヒマラヤ東端の峰々、母なる大河エーヤワディーの始まりの合流点（ミッソン）、鮮やかなマナウ祭りで知られる最北の秘境。",
      my: "ဟိမဝန္တာ နှင်းဖုံးတောင်တန်းများ၊ ဧရာဝတီမြစ်ဆုံနှင့် ခမ်းနားသော ကချင်ရိုးရာ မနောပွဲတော်တို့ တည်ရှိရာ မြောက်ဖျားဒေသ။"
    },
    highlights: {
      en: ["Hkakabo Razi National Park (5,881m)", "Putao Himalayan Valleys", "Myitsone Ayeyarwady River Confluence", "Indawgyi Lake Wildlife Sanctuary"],
      ja: ["カカボラジ国立公園（東南アジア最高峰）", "プタオ渓谷と先住民族の集落", "ミッソン（エーヤワディー川合流点）", "インドアヂー湖野生生物保護区"],
      my: ["ခါကာဘိုရာဇီ အမျိုးသားဥယျာဉ်", "ပူတာအို တောင်တန်းချိုင့်ဝှမ်း", "မြစ်ကြီးနား မြစ်ဆုံ", "အင်းတော်ကြီး သဘာဝဘေးမဲ့တော"]
    }
  },
  shan: {
    name: { en: "Shan State", ja: "シャン州", my: "ရှမ်းပြည်နယ်" },
    capital: { en: "Capital / Hub: Taunggyi & Inle • Climate: Cool subtropical highland", ja: "中心都市: タウンジー / インレー • 気候: 快適な高原気候", my: "မြို့တော်: တောင်ကြီး / အင်းလေး • ရာသီဥတု: သမပိုင်း ကုန်းမြင့်ဇုန်" },
    image: "images/locations/inle lake.png",
    description: {
      en: "Sprawling rolling highlands with floating gardens at Inle Lake, hill tribe trekking trails around Kalaw, and famous Pindaya limestone caves.",
      ja: "広大な高原地帯。インレー湖の水上集落、カローの絶景トレッキング、数千体の黄金仏が並ぶピンダヤ鍾乳洞など見どころが満載。",
      my: "အင်းလေးကန်၊ ကလောတောင်ပေါ်မြို့၊ ပင်းတယ သဘာဝရွှေဥမင်ဂူနှင့် တိုင်းရင်းသားရိုးရာ ယဉ်ကျေးမှုများ စုံလင်စွာ တည်ရှိသော ပြည်နယ်ကြီး။"
    },
    highlights: {
      en: ["Inle Lake Floating Villages & Phaung Daw Oo Pagoda", "Kalaw to Inle Trekking Routes", "Pindaya Caves (8,000 Buddha Images)", "Kakku Pagoda Complex (2,400 Stupas)"],
      ja: ["インレー湖の水上集落とパウンドーウー・パゴダ", "カロー〜インレー湖トレッキング", "ピンダヤ洞窟（8,000体の黄金仏）", "カックー遺跡（2,400基の仏塔群）"],
      my: ["အင်းလေးကန်နှင့် ဖောင်တော်ဦးဘုရား", "ကလော-အင်းလေး တောတွင်းလမ်းလျှောက်ခရီး", "ပင်းတယ ရွှေဥမင်ဂူဘုရား", "ကက္ကူ ရှေးဟောင်းစေတီများ"]
    }
  },
  yangon: {
    name: { en: "Yangon Region", ja: "ヤンゴン地方域", my: "ရန်ကုန်တိုင်းဒေသကြီး" },
    capital: { en: "Commercial Hub: Yangon City • Climate: Tropical monsoon", ja: "商業都市: ヤンゴン市 • 気候: 熱帯モンスーン気候", my: "စီးပွားရေးဗဟို: ရန်ကုန်မြို့ • ရာသီဥတု: အပူပိုင်း မုတ်သုံဇုန်" },
    image: "images/locations/yangon.jpg",
    description: {
      en: "Myanmar's grand commercial gateway and largest metropolis, home to the sacred Shwedagon Pagoda and rich colonial heritage buildings.",
      ja: "ミャンマー最大の商業都市であり国際的ゲートウェイ。黄金に輝くシュエダゴン・パゴダとレトロな歴史的建築群が魅力。",
      my: "မြန်မာနိုင်ငံ၏ စီးပွားရေးမြို့တော်ဖြစ်ပြီး ရွှေတိဂုံစေတီတော်၊ ဆူးလေစေတီတော်နှင့် ရှေးဟောင်းဗိသုကာ အဆောက်အအုံများ တည်ရှိရာဒေသ။"
    },
    highlights: {
      en: ["Sacred Shwedagon Pagoda", "Downtown Colonial Heritage Walking Trails", "Bogyoke Aung San Market", "Kandawgyi & Inya Lakes"],
      ja: ["黄金のシュエダゴン・パゴダ", "歴史的コロニアル建築群ウォーキング", "ボージョーアウンサン市場", "カンドーヂ湖＆インヤー湖"],
      my: ["ရွှေတိဂုံစေတီတော်မြတ်ကြီး", "ရန်ကုန်မြို့တွင်း ရှေးဟောင်းအမွေအနှစ်ဒေသ", "ဗိုလ်ချုပ်အောင်ဆန်းဈေး", "ကန်တော်ကြီးနှင့် အင်းယားကန်"]
    }
  },
  rakhine: {
    name: { en: "Rakhine State", ja: "ラカイン州", my: "ရခိုင်ပြည်နယ်" },
    capital: { en: "Capital: Sittwe • Key Areas: Ngapali & Mrauk U", ja: "中心都市: シットウェ / ガパリ / ミャウー", my: "မြို့တော်: စစ်တွေ / ငပလီ / မြောက်ဦး" },
    image: "images/locations/mrauk oo.jpg",
    description: {
      en: "Coastal frontier renowned for idyllic tropical beaches at Ngapali and the ancient stone fortress temples of Mrauk U.",
      ja: "ベンガル湾に面した海岸地帯。最高のリゾート地ガパリビーチと、要塞のような石造寺院が連なる古都ミャウーが有名。",
      my: "ဘင်္ဂလားပင်လယ်အော်ကမ်းခြေရှိ သာယာလှပသော ငပလီကမ်းခြေနှင့် သမိုင်းဝင် ကျောက်ဆစ်လက်ရာ မြောက်ဦး ရှေးဟောင်းဒေသ။"
    },
    highlights: {
      en: ["Ngapali Beach Palms & Turquoise Surf", "Mrauk U Ancient Stone Fortresses", "Shite-thaung Pagoda (80,000 Buddhas)", "Fresh Bay of Bengal Seafood Banquets"],
      ja: ["ガパリ・ビーチの白砂と青い海", "ミャウー古代石造要塞寺院群", "シッタウン寺院（8万体仏）", "ベンガル湾の獲れたてシーフード料理"],
      my: ["ငပလီကမ်းခြေ အပန်းဖြေစခန်း", "မြောက်ဦး ရှေးဟောင်းကျောက်ထွင်းဘုရားများ", "ရှစ်သောင်းဘုရားကြီး", "လတ်ဆတ်သော ရခိုင်ပင်လယ်စာများ"]
    }
  },
  kayin: {
    name: { en: "Kayin State", ja: "カイン州", my: "ကရင်ပြည်နယ်" },
    capital: { en: "Capital: Hpa-An • Climate: Tropical limestone valley", ja: "中心都市: パアン • 気候: カルスト山岳・熱帯", my: "မြို့တော်: ဘားအံမြို့ • ရာသီဥတု: ထုံးကျောက်တောင်တန်းဇုန်" },
    image: "images/locations/hpa an.jpg",
    description: {
      en: "Spectacular limestone karst landscapes, sacred temple caves, dramatic Mount Zwegabin, and unique Karen cultural dance traditions.",
      ja: "緑の田園からそびえるタワーカルスト奇岩、千体仏の鍾乳洞、ズウェガビン山、エネルギッシュな竹踊りで知られるカイン州。",
      my: "ထုံးကျောက်တောင်ကြီးများ၊ သဘာဝလှိုဏ်ဂူဘုရားများ၊ ဇွဲကပင်တောင်နှင့် ရိုးရာဝါးညှပ်အကတို့ဖြင့် ထင်ရှားသော ကရင်ပြည်နယ်။"
    },
    highlights: {
      en: ["Sadan Cave & Subterranean Boat Lagoon", "Kawgun Cave Terracotta Buddha Wall", "Mount Zwegabin Hiking", "Kyauk Kalap Monastery Peak"],
      ja: ["サダン鍾乳洞と隠れ湖クルーズ", "コーグン洞窟の7世紀レリーフ仏像壁画", "ズウェガビン山の頂上登山", "チャウッカラッ奇岩僧院"],
      my: ["စဒ္ဒန်ဂူနှင့် သဘာဝရေကန်", "ကော့ဂွန်းဂူ ရှေးဟောင်းရုပ်ကြွများ", "ဇွဲကပင်တောင် တက်ရောက်ခြင်း", "ကျောက်ကလပ် စေတီတော်"]
    }
  },
  mon: {
    name: { en: "Mon State", ja: "モン州", my: "မွန်ပြည်နယ်" },
    capital: { en: "Capital: Mawlamyine • Key Spot: Kyaikhtiyo", ja: "中心都市: モーラミャイン / チャイティーヨー", my: "မြို့တော်: မော်လမြိုင် / ကျိုက်ထို" },
    image: "images/locations/kyeik htee yoe.jpg",
    description: {
      en: "Home to the gravity-defying Golden Rock boulder at Kyaiktiyo, historic port city of Mawlamyine, and giant Win Sein reclining Buddha.",
      ja: "絶壁に立つ奇跡の聖地ゴールデンロック（チャイティーヨー）や、歴史ある港町モーラミャイン、巨大寝釈迦仏を擁する州。",
      my: "ဆံတော်ရှင် ကျိုက်ထီးရိုး စေတီတော်ကြီး၊ သံလွင်မြစ်ကမ်းဘေးရှိ မော်လမြိုင်မြို့နှင့် ကမ္ဘာ့အကြီးဆုံး လျောင်းတော်မူဘုရားကြီး တည်ရှိရာ မွန်ပြည်နယ်။"
    },
    highlights: {
      en: ["Kyaiktiyo Golden Rock Pagoda", "Mawlamyine Colonial Port & Strand", "Win Sein Taw Ya Giant Reclining Buddha", "Setse Beach on the Gulf of Mottama"],
      ja: ["チャイティーヨー・ゴールデンロック", "モーラミャインのコロニアル港湾通り", "ウィンセイントーヤ巨大寝仏", "モッタマ湾のセッセビーチ"],
      my: ["ကျိုက်ထီးရိုး ဆံတော်ရှင်စေတီတော်", "မော်လမြိုင် ကမ်းနားလမ်း", "ဝင်းစိန်တောရ ကမ္ဘာ့အကြီးဆုံး လျောင်းတော်မူဘုရား", "စက်စဲကမ်းခြေ"]
    }
  },
  tanintharyi: {
    name: { en: "Tanintharyi Region", ja: "タニンダーリ地方域", my: "တနင်္သာရီတိုင်းဒေသကြီး" },
    capital: { en: "Hub: Myeik & Kawthaung • Climate: Tropical maritime", ja: "中心都市: ミェイク / コータウン • 気候: 熱帯海洋性", my: "မြို့တော်: မြိတ် / ကော့သောင်း • ရာသီဥတု: အပူပိုင်း ပင်လယ်ဇုန်" },
    image: "images/locations/Mergui Archipelago Diving & Kayaking.jpg",
    description: {
      en: "Southern coastal strip featuring the world-renowned Mergui Archipelago with 800 coral islands, pearling, and sea gypsy culture.",
      ja: "800以上の手つかずの無人島が広がるメルギー諸島（ミェイク群島）と、モーケン族（海の民）が暮らすミャンマー最南端の楽園。",
      my: "မြိတ်ကျွန်းစု ကျွန်းပေါင်း ၈၀၀ ကျော်၊ သန္တာကျောက်တန်းများ၊ ဆလုံ (မိုကင်) တိုင်းရင်းသားများနှင့် ပုလဲမွေးမြူရေးလုပ်ငန်းများ တည်ရှိရာ တောင်ဘက်စွန်းဒေသ။"
    },
    highlights: {
      en: ["Mergui Archipelago (800 Tropical Islands)", "Black Rock Scuba Diving with Manta Rays", "Kawthaung Victoria Point (Southernmost tip)", "Myeik Bird's Nest & Pearl Farming"],
      ja: ["メルギー諸島（800以上の無人島）", "ブラックロックでのマンタダイビング", "コータウン（ミャンマー最南端ビクトリアポイント）", "ミェイクのツバメの巣・真珠養殖"],
      my: ["မြိတ်ကျွန်းစု (ကျွန်းပေါင်း ၈၀၀ ကျော်)", "ဘလက်ရော့ခ် ရေငုပ်စခန်း", "ကော့သောင်း ဘုရင့်နောင်အငူ (တောင်ဘက်စွန်း)", "မြိတ် ငှက်သိုက်နှင့် ပုလဲမွေးမြူရေး"]
    }
  },
  sagaing: {
    name: { en: "Sagaing Region", ja: "ザガイン地方域", my: "စစ်ကိုင်းတိုင်းဒေသကြီး" },
    capital: { en: "Capital: Sagaing & Monywa • Climate: Semi-arid central", ja: "中心都市: ザガイン / モンユワ • 気候: 乾燥ステップ気候", my: "မြို့တော်: စစ်ကိုင်း / မုံရွာ • ရာသီဥတု: အလယ်ပိုင်း အပူပိုင်းဇုန်" },
    image: "images/locations/saging.jpg",
    description: {
      en: "The monastic spiritual center of Myanmar, studded with hundreds of white and golden stupas crowning the green Sagaing Hills and Monywa's caves.",
      ja: "緑の丘に無数の白い仏塔が並ぶミャンマー屈指の仏教瞑想の聖地。モンユワのポーウィンタウン石窟寺院や巨大立仏も有名。",
      my: "စေတီပုထိုးပေါင်းများစွာနှင့် သီလရှင်ကျောင်း၊ ဘုန်းတော်ကြီးကျောင်းများ စုဝေးရာ စစ်ကိုင်းတောင်ရိုးနှင့် မုံရွာ ဖိုဝင်တောင် သဘာဝလှိုဏ်ဂူများ။"
    },
    highlights: {
      en: ["Sagaing Hill Meditation Monasteries", "Mingun Pahtodawgyi & Giant Bell", "Monywa Thanboddhay Pagoda (500,000 Buddhas)", "Po Win Taung Historic Sandstone Caves"],
      ja: ["ザガインヒル瞑想僧院群", "ミングォンの巨大未完仏塔と大梵鐘", "モンユワのタンボッデー寺院（50万体仏）", "ポーウィンタウン石窟遺跡"],
      my: ["စစ်ကိုင်းတောင်ရိုး ဘုရားကျောင်းကန်များ", "မင်းကွန်း ပုထိုးတော်ကြီးနှင့် မင်းကွန်းခေါင်းလောင်းကြီး", "မုံရွာ သမ္ဗုဒ္ဓေစေတီတော်", "ဖိုဝင်တောင် ကျောက်ဆစ်ဂူများ"]
    }
  },
  chin: {
    name: { en: "Chin State", ja: "チン州", my: "ချင်းပြည်နယ်" },
    capital: { en: "Capital: Hakha • Key Area: Mount Victoria", ja: "中心都市: ハッカ / カンペトレ / ミンダッ", my: "မြို့တော်: ဟားခါး / ကန်ပက်လက် / မင်းတပ်" },
    image: "images/locations/Mount Victoria (Nat Ma Taung).jpg",
    description: {
      en: "High-altitude mountain territory renowned for Mount Victoria (Nat Ma Taung), rhododendron blooms, and living facial tattoo cultural traditions.",
      ja: "標高3,000m級の山々が連なるチン高原。シャクナゲの群生、心打つ雲海、伝統の顔タトゥーを受け継ぐ長老たちが暮らす秘境。",
      my: "နတ်မတောင် (ဝိတိုရိယတောင်)၊ တောင်ဇလပ်ပန်းနီနီများ၊ တိမ်ပင်လယ်ရှုခင်းများနှင့် တိုင်းရင်းသား ရိုးရာ ပါးရဲထိုး ယဉ်ကျေးမှုများ တည်ရှိရာ ပြည်နယ်။"
    },
    highlights: {
      en: ["Mount Victoria (Nat Ma Taung) Peak Trekking", "Wild Taung Zalat Rhododendron Blooms", "Historic Chin Facial Tattoo Villages", "Traditional Bamboo Nose Flute Music"],
      ja: ["ナクマタウン（ビクトリア山）トレッキング", "野生シャクナゲ（タウ恩ザラッ）の開花", "伝統的な顔タトゥーを持つ長老の村", "竹製鼻笛の演奏体験"],
      my: ["နတ်မတောင် အမျိုးသားဥယျာဉ် တောင်တက်ခရီး", "သဘာဝတောင်ဇလပ်ပန်း ပွင့်လန်းမှု", "ချင်းရိုးရာ ပါးရဲထိုး ရွာများ", "ရိုးရာ ဝါးနှာခေါင်းပလွေ ဖျော်ဖြေမှု"]
    }
  }
};
