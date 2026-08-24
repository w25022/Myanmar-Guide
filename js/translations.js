/**
 * 🇲🇲 MYANMAR GUIDE - Multi-Language UI Translations
 * Supported Languages: English (en), Japanese (ja), Myanmar (my)
 * Strict Language Isolation: All strings are 100% in the selected language.
 */

const uiTranslations = {
  en: {
    nav_brand_title: "MYANMAR GUIDE",
    nav_home: "Home",
    nav_explore: "Explore",
    nav_places: "Places",
    nav_food: "Food",
    nav_adventure: "Adventure",
    nav_culture: "Culture",
    nav_language: "Language",
    nav_money: "Money",
    nav_tips: "Tips",

    hero_badge: "✨ Welcome to the Golden Land",
    hero_title_discover: "Discover",
    hero_title_myanmar: "Myanmar",
    hero_subtitle: "Explore the Golden Land — its beautiful places, delicious food, rich cultures and unforgettable adventures.",

    explore_badge: "Interactive Map",
    explore_title: "Explore Myanmar",
    explore_subtitle: "Discover different regions and experiences across Myanmar.",
    map_selected_region: "Selected Region",

    places_badge: "Must-Visit Destinations",
    places_title: "Famous Places",
    places_subtitle: "Discover ancient temples, golden stupas, tranquil lakes, and sun-kissed beaches.",
    dest_best_time: "Best time",

    food_badge: "Culinary Heritage",
    food_title: "Myanmar Food",
    food_subtitle: "Experience a sublime harmony of savory, sour, spicy, and crunchy flavors.",
    food_spice_level: "Spice",

    adv_badge: "Wild & Untamed",
    adv_title: "Adventure in Myanmar",
    adv_subtitle: "Discover Myanmar beyond the famous tourist destinations.",
    adv_featured_badge: "Featured Expedition",
    adv_location: "Location",
    adv_type: "Type",
    adv_type_val: "Mountain Trekking / Alpine Expedition",
    adv_difficulty: "Difficulty",
    adv_safety_title: "Important Expedition Notice",
    adv_view_btn: "View Expedition Details",

    culture_badge: "Heritage & Diversity",
    culture_title: "Culture & People",
    culture_subtitle: "Discover the traditions, communities and cultural diversity of Myanmar.",

    lang_badge: "Travel Phrasebook",
    lang_title: "Useful Myanmar Language",
    lang_subtitle: "Designed for foreign tourists. Tap 'Copy Script' to copy the authentic Burmese text to your clipboard.",
    lang_copy_btn: "Copy Script",
    lang_copied_btn: "Copied!",

    money_badge: "Financial Planning",
    money_title: "Myanmar Currency Converter",
    money_subtitle: "Calculate estimated costs between Myanmar Kyat (MMK) and major foreign currencies.",
    money_amount_label: "Amount",
    money_from_label: "From Currency",
    money_to_label: "To Currency",
    money_result_label: "Estimated Conversion",
    money_ref_rate: "Ref rate",
    money_notice_title: "Notice:",
    money_notice_text: "Exchange rates shown are example/reference rates and may not reflect current market rates. Always verify official bank and money changer rates upon arrival.",

    tips_badge: "Practical Advice",
    tips_title: "Travel Tips",
    tips_subtitle: "Essential guidelines for a safe, respectful, and enriching journey across Myanmar.",

    footer_desc: "An educational, interactive travel guide curated for international visitors exploring the beauty, heritage, gastronomy, and cultures of the Golden Land.",
    footer_destinations: "Destinations",
    footer_experiences: "Experiences",
    footer_visitor_essentials: "Visitor Essentials",
    footer_essentials_desc: "Built with pure HTML5, CSS3 & Vanilla JavaScript. Designed for modern travel discovery and student portfolio showcase.",
    footer_tips_btn: "View Travel Advice",
    footer_copyright: "© 2026 Myanmar Guide • Preserving Cultural Heritage & Promoting Responsible Tourism",

    // Modal Labels
    modal_region_label: "Region / State",
    modal_best_season_label: "Best Season to Visit",
    modal_things_to_do_label: "Recommended Things to Do",
    modal_origin_label: "Regional Origin",
    modal_flavor_label: "Flavor Profile",
    modal_ingredients_label: "Key Ingredients",
    modal_cultural_context_label: "Cultural Context",
    modal_difficulty_label: "Difficulty Rating",
    modal_highlights_label: "Adventure Highlights",
    modal_safety_label: "Essential Safety Guideline",

    // Categories and Tags
    categories: {
      "Historical": "Historical",
      "Religious": "Religious",
      "Nature": "Nature",
      "Beach": "Beach",
      "Culture": "Culture",
      "City": "City",
      "Noodles": "Noodles",
      "Salad": "Salad",
      "Rice": "Rice",
      "Snack": "Snack",
      "Dessert": "Dessert",
      "Curry": "Curry",
      "Alpine Expedition": "Alpine Expedition",
      "Highland Trekking": "Highland Trekking",
      "Island & Diving": "Island & Diving",
      "Caving & Kayaking": "Caving & Kayaking",
      "Greetings": "Greetings",
      "Politeness": "Politeness",
      "Shopping & Dining": "Shopping & Dining",
      "Food & Dining": "Food & Dining",
      "Dining & Services": "Dining & Services",
      "Directions": "Directions",
      "Emergency & Assistance": "Emergency & Assistance",
      "Social & Connection": "Social & Connection"
    },

    // Spice Levels
    spice_levels: {
      "None": "None",
      "Mild": "Mild",
      "Medium": "Medium",
      "Spicy": "Spicy",
      "Very Spicy": "Very Spicy"
    },

    // Difficulties
    difficulties: {
      "Extreme / Alpine": "Extreme / Alpine",
      "Challenging": "Challenging",
      "Moderate to Challenging": "Moderate to Challenging",
      "Moderate": "Moderate",
      "Easy": "Easy"
    },

    // Currency Names
    currencies: {
      USD: "USD — US Dollar ($)",
      MMK: "MMK — Myanmar Kyat (Ks)",
      JPY: "JPY — Japanese Yen (¥)",
      EUR: "EUR — Euro (€)",
      THB: "THB — Thai Baht (฿)",
      SGD: "SGD — Singapore Dollar (S$)"
    },

    // Region Names for Map Pins & Chips
    regions: {
      mandalay: { chip: "Mandalay", pin: "Mandalay / Bagan" },
      kachin: { chip: "Kachin", pin: "Kachin (Mountains)" },
      shan: { chip: "Shan", pin: "Shan (Inle Lake)" },
      sagaing: { chip: "Sagaing", pin: "Sagaing" },
      chin: { chip: "Chin", pin: "Chin State" },
      rakhine: { chip: "Rakhine", pin: "Rakhine (Ngapali)" },
      yangon: { chip: "Yangon", pin: "Yangon" },
      kayin: { chip: "Kayin", pin: "Kayin (Hpa-An)" },
      mon: { chip: "Mon", pin: "Mon (Golden Rock)" },
      tanintharyi: { chip: "Tanintharyi", pin: "Tanintharyi (Kawthaung)" }
    },

    // Footer links
    footer_places_links: [
      { name: "Bagan Plains", href: "#places" },
      { name: "Shwedagon Pagoda", href: "#places" },
      { name: "Inle Lake", href: "#places" },
      { name: "Ngapali Beach", href: "#places" },
      { name: "Hpa-An Karsts", href: "#places" }
    ],
    footer_exp_links: [
      { name: "Traditional Cuisine", href: "#food" },
      { name: "Hkakabo Razi", href: "#adventure" },
      { name: "Kayan & Chin Heritage", href: "#culture" },
      { name: "Language Phrases", href: "#language" },
      { name: "Currency Converter", href: "#money" }
    ]
  },

  ja: {
    nav_brand_title: "ミャンマー ガイド",
    nav_home: "ホーム",
    nav_explore: "地域マップ",
    nav_places: "観光名所",
    nav_food: "伝統料理",
    nav_adventure: "冒険・自然",
    nav_culture: "文化・民族",
    nav_language: "ミャンマー語",
    nav_money: "為替計算",
    nav_tips: "旅行のコツ",

    hero_badge: "✨ 黄金の国ミャンマーへようこそ",
    hero_title_discover: "ミャンマーを",
    hero_title_myanmar: "発見しよう",
    hero_subtitle: "黄金の国を巡る旅 — 息を呑む絶景、豊かな伝統料理、多彩な民族文化、心躍る冒険へ。",

    explore_badge: "インタラクティブマップ",
    explore_title: "ミャンマーの地域・地図",
    explore_subtitle: "各州・管区をタップして、多様な風土や見どころを体験しましょう。",
    map_selected_region: "選択中の地域",

    places_badge: "必見の観光地",
    places_title: "有名観光名所",
    places_subtitle: "千年の古代寺院、黄金の仏塔、穏やかなインレー湖、そして美しい白砂のビーチ。",
    dest_best_time: "ベストシーズン",

    food_badge: "美食の宝庫",
    food_title: "ミャンマー伝統料理",
    food_subtitle: "旨み、酸味、スパイス、香草が織りなす絶妙なハーモニー。",
    food_spice_level: "辛さ",

    adv_badge: "大自然と未踏の地",
    adv_title: "ミャンマーのアドベンチャー",
    adv_subtitle: "一般的な観光地を超えた、知られざる秘境と大自然の探検へ。",
    adv_featured_badge: "注目アドベンチャー",
    adv_location: "場所",
    adv_type: "タイプ",
    adv_type_val: "高山登山 / アルパイン遠征",
    adv_difficulty: "難易度",
    adv_safety_title: "遠征における重要な注意事項",
    adv_view_btn: "遠征の詳細を見る",

    culture_badge: "伝統と民族の多様性",
    culture_title: "文化と人々",
    culture_subtitle: "ミャンマーに息づく多彩な民族の誇り高き伝統とコミュニティを紹介します。",

    lang_badge: "旅の指さしフレーズ",
    lang_title: "便利なミャンマー語会話",
    lang_subtitle: "外国人観光客向けの実用会話集。「文字をコピー」ボタンでビルマ文字をクリップボードにコピーできます。",
    lang_copy_btn: "文字をコピー",
    lang_copied_btn: "コピー完了！",

    money_badge: "旅行の予算・為替",
    money_title: "ミャンマー通貨（チャット）計算機",
    money_subtitle: "ミャンマーチャット（MMK）と日本円・米ドル等の概算レートを即座に計算します。",
    money_amount_label: "金額",
    money_from_label: "変換元の通貨",
    money_to_label: "変換先の通貨",
    money_result_label: "計算結果（概算）",
    money_ref_rate: "参考レート",
    money_notice_title: "ご注意:",
    money_notice_text: "表示される為替レートは参考値です。実際の両替レートは現地銀行や公認両替所にて最新情報をご確認ください。",

    tips_badge: "役立つ旅の知識",
    tips_title: "ミャンマー旅行のアドバイス",
    tips_subtitle: "安心・安全で心温まる旅にするための基本マナーと実用ガイド。",

    footer_desc: "黄金の国ミャンマーの美しい自然、歴史遺産、美食、そして多彩な民族文化を紹介する旅行・文化ガイドです。",
    footer_destinations: "観光名所",
    footer_experiences: "体験・文化",
    footer_visitor_essentials: "サイトについて",
    footer_essentials_desc: "HTML5、CSS3、Vanilla JavaScriptで構築された軽量かつ快適なポートフォリオ・トラベルサイトです。",
    footer_tips_btn: "旅行の心得を見る",
    footer_copyright: "© 2026 Myanmar Guide • 伝統文化の尊重と持続可能な観光を推進しています",

    // Modal Labels
    modal_region_label: "州・管区",
    modal_best_season_label: "おすすめの訪問時期",
    modal_things_to_do_label: "おすすめの体験・見どころ",
    modal_origin_label: "地域・発祥",
    modal_flavor_label: "味の特徴",
    modal_ingredients_label: "主な食材",
    modal_cultural_context_label: "食文化と食べ方の背景",
    modal_difficulty_label: "難易度レベル",
    modal_highlights_label: "冒険のハイライト",
    modal_safety_label: "安全に関するガイドライン",

    // Categories and Tags
    categories: {
      "Historical": "歴史遺産",
      "Religious": "聖地・仏塔",
      "Nature": "大自然・湖沼",
      "Beach": "ビーチ・海岸",
      "Culture": "伝統文化",
      "City": "都市・街歩き",
      "Noodles": "麺料理",
      "Salad": "和え物（トウッ）",
      "Rice": "ご飯もの",
      "Snack": "軽食・スナック",
      "Dessert": "デザート・甘味",
      "Curry": "カレー・煮込み",
      "Mountain Expedition": "山岳遠征",
      "Alpine Expedition": "山岳遠征・アルパイン",
      "Mountain Hiking": "山岳ハイキング",
      "Highland Trekking": "高地トレッキング",
      "Scenic Railway Journey": "絶景鉄道の旅",
      "Marine Expedition": "海洋探検",
      "Island & Diving": "海洋探検・ダイビング",
      "Caving & Kayaking": "洞窟探検・カヤック",
      "Greetings": "挨拶・歓迎",
      "Politeness": "丁寧・感謝・お詫び",
      "Shopping & Dining": "買い物・値段交渉",
      "Food & Dining": "食事・料理の注文",
      "Dining & Services": "お会計・サービス",
      "Directions": "道案内・施設",
      "Emergency & Assistance": "緊急・助けを求める",
      "Social & Connection": "交流・出会い"
    },

    // Spice Levels
    spice_levels: {
      "None": "辛さなし",
      "Mild": "控えめ（マイルド）",
      "Medium": "普通（中辛）",
      "Spicy": "辛口",
      "Very Spicy": "大辛"
    },

    // Difficulties
    difficulties: {
      "Extreme / Alpine": "最上級（過酷な山岳遠征）",
      "Challenging": "上級（ハード）",
      "Moderate to Challenging": "中上級",
      "Moderate": "中級（適度）",
      "Easy": "初級（易しい）"
    },

    // Currency Names
    currencies: {
      USD: "USD — 米ドル ($)",
      MMK: "MMK — ミャンマーチャット (Ks)",
      JPY: "JPY — 日本円 (¥)",
      EUR: "EUR — ユーロ (€)",
      THB: "THB — タイバーツ (฿)",
      SGD: "SGD — シンガポールドル (S$)"
    },

    // Region Names for Map Pins & Chips
    regions: {
      mandalay: { chip: "マンダレー", pin: "マンダレー / バガン" },
      kachin: { chip: "カチン", pin: "カチン（山岳・氷河）" },
      shan: { chip: "シャン", pin: "シャン（インレー湖）" },
      sagaing: { chip: "ザガイン", pin: "ザガイン" },
      chin: { chip: "チン", pin: "チン州" },
      rakhine: { chip: "ラカイン", pin: "ラカイン（ガパリ）" },
      yangon: { chip: "ヤンゴン", pin: "ヤンゴン" },
      kayin: { chip: "カイン", pin: "カイン（パアン）" },
      mon: { chip: "モン", pin: "モン（ゴールデンロック）" },
      tanintharyi: { chip: "タニンダーリ", pin: "タニンダーリ（コータウン）" }
    },

    // Footer links
    footer_places_links: [
      { name: "バガン古代遺跡群", href: "#places" },
      { name: "シュエダゴン・パゴダ", href: "#places" },
      { name: "インレー湖", href: "#places" },
      { name: "ガパリ・ビーチ", href: "#places" },
      { name: "パアン・カルスト", href: "#places" }
    ],
    footer_exp_links: [
      { name: "ミャンマー伝統料理", href: "#food" },
      { name: "カカボラジ高地遠征", href: "#adventure" },
      { name: "カヤン族・チン族の文化", href: "#culture" },
      { name: "旅行会話フレーズ", href: "#language" },
      { name: "為替・通貨計算機", href: "#money" }
    ]
  },

  my: {
    nav_brand_title: "မြန်မာလမ်းညွှန်",
    nav_home: "ပင်မ",
    nav_explore: "မြေပုံ",
    nav_places: "နေရာများ",
    nav_food: "အစားအစာ",
    nav_adventure: "စွန့်စားမှု",
    nav_culture: "ယဉ်ကျေးမှု",
    nav_language: "စကားပြော",
    nav_money: "ငွေလဲနှုန်း",
    nav_tips: "အကြံပြုချက်",

    hero_badge: "✨ ရွှေရောင်လွှမ်းသောမြန်မာပြည်မှကြိုဆိုပါသည်",
    hero_title_discover: "မြန်မာပြည်ကို",
    hero_title_myanmar: "လေ့လာစူးစမ်းစို့",
    hero_subtitle: "ရွှေရောင်လွှမ်းသော မြန်မာနိုင်ငံ၏ လှပသောနေရာများ၊ အရသာရှိသော ရိုးရာအစားအစာများနှင့် ကြွယ်ဝသော ယဉ်ကျေးမှုများကို ရှာဖွေခံစားလိုက်ပါ။",

    explore_badge: "အပြန်အလှန်မြေပုံ",
    explore_title: "မြန်မာနိုင်ငံမြေပုံ",
    explore_subtitle: "မြန်မာနိုင်ငံ၏ ပြည်နယ်နှင့် တိုင်းဒေသကြီးများကို နှိပ်၍ အချက်အလက်များ လေ့လာပါ။",
    map_selected_region: "ရွေးချယ်ထားသောဒေသ",

    places_badge: "ထင်ရှားကျော်ကြားသောနေရာများ",
    places_title: "လည်ပတ်စရာနေရာများ",
    places_subtitle: "ရှေးဟောင်းစေတီများ၊ ရွှေရောင်ဘုရားများ၊ ငြိမ်းချမ်းသောအင်းလေးကန်နှင့် သာယာသောငပလီကမ်းခြေ။",
    dest_best_time: "လည်ပတ်ရန်အကောင်းဆုံး",

    food_badge: "အစားအသောက်အမွေအနှစ်",
    food_title: "မြန်မာ့ရိုးရာအစားအစာများ",
    food_subtitle: "ချို၊ ချဉ်၊ ငန်၊ စပ် အရသာစုံလင်စွာ ခံစားရရှိနိုင်သော မြန်မာ့ရိုးရာ ဟင်းလျာများ။",
    food_spice_level: "အစပ်",

    adv_badge: "သဘာဝနှင့် စွန့်စားမှု",
    adv_title: "မြန်မာပြည်စွန့်စားခရီးစဉ်",
    adv_subtitle: "လူသိနည်းသော သဘာဝအလှနှင့် တောတောင်စွန့်စားမှုများ။",
    adv_featured_badge: "ထူးခြားသောစွန့်စားခရီးစဉ်",
    adv_location: "တည်နေရာ",
    adv_type: "အမျိုးအစား",
    adv_type_val: "တောင်တက်ခရီးစဉ် / နှင်းဖုံးတောင်စွန့်စားမှု",
    adv_difficulty: "ခက်ခဲမှုအဆင့်",
    adv_safety_title: "အရေးကြီးသော လုံခြုံရေးသတိပေးချက်",
    adv_view_btn: "ခရီးစဉ်အသေးစိတ်ကြည့်ရန်",

    culture_badge: "ယဉ်ကျေးမှုနှင့် မတူကွဲပြားမှု",
    culture_title: "ယဉ်ကျေးမှုနှင့် လူနေမှု",
    culture_subtitle: "မြန်မာနိုင်ငံ၏ တိုင်းရင်းသားရိုးရာဓလေ့များနှင့် ယဉ်ကျေးမှုအမွေအနှစ်များ။",

    lang_badge: "ခရီးသွားစကားပြော",
    lang_title: "အသုံးဝင်သော မြန်မာစကားစုများ",
    lang_subtitle: "နိုင်ငံခြားသားခရီးသွားများအတွက် စကားစုများ။ 'စာသားကူးယူမည်' ကို နှိပ်၍ အလွယ်တကူ ကူးယူအသုံးပြုနိုင်ပါသည်။",
    lang_copy_btn: "စာသားကူးယူမည်",
    lang_copied_btn: "ကူးယူပြီးပါပြီ!",

    money_badge: "ငွေကြေးတွက်ချက်မှု",
    money_title: "မြန်မာကျပ်ငွေ လဲလှယ်မှုတွက်ချက်ရန်",
    money_subtitle: "မြန်မာကျပ်ငွေနှင့် နိုင်ငံခြားငွေများအကြား အလွယ်တကူ တွက်ချက်နိုင်ပါသည်။",
    money_amount_label: "ပမာဏ",
    money_from_label: "လဲလှယ်မည့်ငွေကြေး",
    money_to_label: "ရရှိမည့်ငွေကြေး",
    money_result_label: "ခန့်မှန်းရလဒ်",
    money_ref_rate: "ရည်ညွှန်းနှုန်း",
    money_notice_title: "သတိပြုရန်:",
    money_notice_text: "ဖော်ပြပါ ငွေလဲနှုန်းများသည် ခန့်မှန်းရည်ညွှန်းနှုန်းများသာဖြစ်ပြီး လက်ရှိပေါက်ဈေးနှင့် ကွာခြားနိုင်ပါသည်။ ဘဏ်နှင့် တရားဝင်ငွေလဲကောင်တာများတွင် စစ်ဆေးပါ။",

    tips_badge: "လက်တွေ့အကြံပြုချက်",
    tips_title: "ခရီးသွားအကြံပြုချက်များ",
    tips_subtitle: "မြန်မာနိုင်ငံသို့ အဆင်ပြေချောမွေ့စွာ လည်ပတ်နိုင်ရန် အရေးကြီးသော လမ်းညွှန်ချက်များ။",

    footer_desc: "မြန်မာနိုင်ငံ၏ အလှအပ၊ ယဉ်ကျေးမှု၊ အစားအသောက်နှင့် သဘာဝအလှတရားများကို နိုင်ငံတကာဧည့်သည်များထံ မိတ်ဆက်ပေးသော ဝဘ်ဆိုဒ်။",
    footer_destinations: "လည်ပတ်စရာများ",
    footer_experiences: "အတွေ့အကြုံများ",
    footer_visitor_essentials: "ဝဘ်ဆိုဒ်အကြောင်း",
    footer_essentials_desc: "HTML5, CSS3 နှင့် Vanilla JavaScript တို့ဖြင့် ဖန်တီးထားသော ခရီးသွားလမ်းညွှန် ဝဘ်ဆိုဒ်။",
    footer_tips_btn: "ခရီးသွားအကြံပြုချက်များ ဖတ်ရှုရန်",
    footer_copyright: "© ၂၀၂၆ မြန်မာလမ်းညွှန် • ရိုးရာယဉ်ကျေးမှုထိန်းသိမ်းရေးနှင့် တာဝန်ယူမှုရှိသော ခရီးသွားလုပ်ငန်း",

    // Modal Labels
    modal_region_label: "တိုင်းဒေသကြီး / ပြည်နယ်",
    modal_best_season_label: "သွားရောက်လည်ပတ်ရန် အကောင်းဆုံးရာသီ",
    modal_things_to_do_label: "အကြံပြုလိုသော လှုပ်ရှားမှုများ",
    modal_origin_label: "မူရင်းဒေသ",
    modal_flavor_label: "အရသာနှင့်ထူးခြားချက်",
    modal_ingredients_label: "အဓိကပါဝင်ပစ္စည်းများ",
    modal_cultural_context_label: "ရိုးရာဓလေ့နှင့် သုံးဆောင်ပုံ",
    modal_difficulty_label: "ခက်ခဲမှုအဆင့်",
    modal_highlights_label: "ထူးခြားချက်များ",
    modal_safety_label: "မရှိမဖြစ် လုံခြုံရေးစည်းမျဉ်း",

    // Categories and Tags
    categories: {
      "Historical": "သမိုင်းဝင် အမွေအနှစ်",
      "Religious": "သာသနိက အထွဋ်အမြတ်",
      "Nature": "သဘာဝအလှ",
      "Beach": "ကမ်းခြေ အပန်းဖြေ",
      "Culture": "ရိုးရာယဉ်ကျေးမှု",
      "City": "မြို့ပြအလှ",
      "Noodles": "ခေါက်ဆွဲ/မုန့်ဟင်းခါး",
      "Salad": "အသုပ်",
      "Rice": "ထမင်း/ဒံပေါက်",
      "Snack": "မုန့်/အဆာပြေ",
      "Dessert": "အချိုပွဲ",
      "Curry": "ဟင်းလျာ",
      "Mountain Expedition": "တောင်တက်ခရီးစဉ်",
      "Alpine Expedition": "နှင်းဖုံးတောင်တက် ခရီးစဉ်",
      "Mountain Hiking": "တောင်တက်လမ်းလျှောက်",
      "Highland Trekking": "တောင်ပေါ် တောလမ်းလျှောက်",
      "Scenic Railway Journey": "အလှရှုခင်း ရထားခရီးစဉ်",
      "Marine Expedition": "ပင်လယ်ကမ်းရိုးတန်း စွန့်စားခရီးစဉ်",
      "Island & Diving": "ကျွန်းစုနှင့် ရေငုပ်ခရီးစဉ်",
      "Caving & Kayaking": "ဂူစွန့်စားမှုနှင့် ကယက်လှေ",
      "Greetings": "နှုတ်ဆက်စကား",
      "Politeness": "ယဉ်ကျေးမှုနှင့် ကျေးဇူးတင်စကား",
      "Shopping & Dining": "ဈေးဝယ်ခြင်းနှင့် ဈေးနှုန်း",
      "Food & Dining": "အစားအသောက်နှင့် မှာယူခြင်း",
      "Dining & Services": "ငွေရှင်းခြင်းနှင့် ဝန်ဆောင်မှု",
      "Directions": "လမ်းမေးခြင်းနှင့် အိမ်သာ",
      "Emergency & Assistance": "အရေးပေါ် အကူအညီတောင်းခြင်း",
      "Social & Connection": "မိတ်ဆွေဖွဲ့ခြင်း"
    },

    // Spice Levels
    spice_levels: {
      "None": "လုံးဝမစပ်",
      "Mild": "အစပ်အသင့်အတင့်",
      "Medium": "အစပ်အလယ်အလတ်",
      "Spicy": "အစပ်များ",
      "Very Spicy": "အလွန်စပ်"
    },

    // Difficulties
    difficulties: {
      "Extreme / Alpine": "အလွန်ခက်ခဲ (တောင်တက်ကျွမ်းကျင်)",
      "Challenging": "ခက်ခဲသော ခရီးစဉ်",
      "Moderate to Challenging": "အလယ်အလတ်မှ ခက်ခဲ",
      "Moderate": "အလယ်အလတ်",
      "Easy": "လွယ်ကူသော ခရီးစဉ်"
    },

    // Currency Names
    currencies: {
      USD: "USD — အမေရိကန်ဒေါ်လာ ($)",
      MMK: "MMK — မြန်မာကျပ်ငွေ (Ks)",
      JPY: "JPY — ဂျပန်ယန်း (¥)",
      EUR: "EUR — ယူရို (€)",
      THB: "THB — ထိုင်းဘတ် (฿)",
      SGD: "SGD — စင်ကာပူဒေါ်လာ (S$)"
    },

    // Region Names for Map Pins & Chips
    regions: {
      mandalay: { chip: "မန္တလေး", pin: "မန္တလေး / ပုဂံ" },
      kachin: { chip: "ကချင်", pin: "ကချင် (တောင်တန်းဒေသ)" },
      shan: { chip: "ရှမ်း", pin: "ရှမ်း (အင်းလေးကန်)" },
      sagaing: { chip: "စစ်ကိုင်း", pin: "စစ်ကိုင်း" },
      chin: { chip: "ချင်း", pin: "ချင်းပြည်နယ်" },
      rakhine: { chip: "ရခိုင်", pin: "ရခိုင် (ငပလီ)" },
      yangon: { chip: "ရန်ကုန်", pin: "ရန်ကုန်" },
      kayin: { chip: "ကရင်", pin: "ကရင် (ဘားအံ)" },
      mon: { chip: "မွန်", pin: "မွန် (ကျိုက်ထီးရိုး)" },
      tanintharyi: { chip: "တနင်္သာရီ", pin: "တနင်္သာရီ (ကော့သောင်း)" }
    },

    // Footer links
    footer_places_links: [
      { name: "ပုဂံရှေးဟောင်းဒေသ", href: "#places" },
      { name: "ရွှေတိဂုံစေတီတော်", href: "#places" },
      { name: "အင်းလေးကန်", href: "#places" },
      { name: "ငပလီကမ်းခြေ", href: "#places" },
      { name: "ဘားအံဒေသ", href: "#places" }
    ],
    footer_exp_links: [
      { name: "ရိုးရာအစားအစာများ", href: "#food" },
      { name: "ခါကာဘိုရာဇီ တောင်တက်", href: "#adventure" },
      { name: "ကယန်းနှင့် ချင်းရိုးရာ", href: "#culture" },
      { name: "အသုံးဝင် မြန်မာစကား", href: "#language" },
      { name: "ငွေကြေးလဲလှယ်မှု တွက်ချက်ခြင်း", href: "#money" }
    ]
  }
};
