/**
 * 🇲🇲 MYANMAR GUIDE - Travel Tips Dataset (6 Essential Guides)
 * Trilingual: English (en), Japanese (ja), Myanmar (my)
 */

const travelTipsData = [
  {
    id: "weather",
    icon: "☀️",
    title: {
      en: "Weather & Climate",
      ja: "気候とベストシーズン",
      my: "ရာသီဥတုနှင့် သွားရောက်သင့်သောအချိန်"
    },
    intro: {
      en: "Myanmar experiences three distinct weather seasons:",
      ja: "ミャンマーには明確な3つの季節（涼期・暑期・雨期）があります:",
      my: "မြန်မာနိုင်ငံတွင် ရာသီဥတု ၃ မျိုး ကွဲပြားစွာ ရှိပါသည်:"
    },
    points: {
      en: [
        "Cool & Dry (Nov – Feb): Best time to visit. Pleasant temperatures (20°C–28°C) and clear skies.",
        "Hot Season (Mar – May): Temperatures can exceed 38°C in central plains (Bagan, Mandalay).",
        "Monsoon Season (Jun – Oct): Heavy rainfall in Yangon and beaches; lush green countryside in Shan hills."
      ],
      ja: [
        "涼期・乾季（11月〜2月）：最も過ごしやすく観光に最適。日中は20℃〜28℃で青空が広がります。",
        "暑期（3月〜5月）：バガンやマンダレーなど中央平野部では最高気温が38℃を超える猛暑となります。",
        "雨期・モンスーン（6月〜10月）：ヤンゴンや海岸部は降水量が多くなりますが、シャン高原は緑が美しく涼やかです。"
      ],
      my: [
        "ဆောင်းရာသီ (နိုဝင်ဘာ - ဖေဖော်ဝါရီ): ခရီးသွားရန် အကောင်းဆုံးအချိန်ဖြစ်ပြီး သာယာအေးချမ်းပါသည်။",
        "နွေရာသီ (မတ် - မေ): ပုဂံနှင့် မန္တလေးကဲ့သို့ အပူပိုင်းဒေသများတွင် အပူချိန် ၃၈ ဒီဂရီစင်တီဂရိတ်အထိ မြင့်တက်နိုင်ပါသည်။",
        "မိုးရာသီ (ဇွန် - အောက်တိုဘာ): ရန်ကုန်နှင့် ကမ်းခြေများတွင် မိုးများသော်လည်း ရှမ်းပြည်နယ်တွင် စိမ်းလန်းစိုပြေလှပပါသည်။"
      ]
    }
  },
  {
    id: "temples",
    icon: "🛕",
    title: {
      en: "Temple Etiquette",
      ja: "寺院・パゴダの参拝マナー",
      my: "ဘုရားကျောင်းကန် ယဉ်ကျေးမှုစည်းကမ်းများ"
    },
    intro: {
      en: "Pagodas and monasteries are sacred living sanctuaries:",
      ja: "寺院やパゴダ、僧院は神聖な信仰の場です:",
      my: "ဘုရား၊ စေတီနှင့် ဘုန်းကြီးကျောင်းများသည် အလွန်မွန်မြတ်သော သာသနိကနယ်မြေများ ဖြစ်ပါသည်:"
    },
    points: {
      en: [
        "Always remove shoes and socks before stepping onto pagoda grounds.",
        "Dress respectfully: ensure shoulders and knees are covered.",
        "Never point feet toward Buddha images or monks when sitting.",
        "Walk clockwise around stupas and pagoda terraces."
      ],
      ja: [
        "寺院やパゴダの敷地に入る際は、靴だけでなく靴下・ストッキングも脱いで完全な裸足になります。",
        "肩や膝が隠れる服装を着用し、露出の多い服やショートパンツは避けましょう。",
        "座る際は、足の裏を仏像や僧侶に向けないよう正座または横座りをします。",
        "仏塔の周囲を巡る際は、時計回り（右回り）に歩行するのが伝統的な礼儀です。"
      ],
      my: [
        "ဘုရားရင်ပြင်တော်သို့ မတက်ရောက်မီ ဖိနပ်နှင့် ခြေအိတ်များကို မဖြစ်မနေ ချွတ်ရပါမည်။",
        "ပခုံးနှင့် ဒူးဖုံးသော ယဉ်ကျေးသည့် အဝတ်အစားများကို ဝတ်ဆင်ရပါမည်။",
        "ထိုင်သည့်အခါ ခြေဖဝါးကို ဘုရားဆင်းတုတော် သို့မဟုတ် သံဃာတော်များဘက်သို့ မျက်နှာမမူရပါ။",
        "စေတီပုထိုးများကို လက်ယာရစ် (နာရီလက်တံအတိုင်း) လှည့်လည်ဖူးမြော်ရပါမည်။"
      ]
    }
  },
  {
    id: "clothing",
    icon: "👕",
    title: {
      en: "What to Wear",
      ja: "服装と持ち物のアドバイス",
      my: "ဝတ်စားဆင်ယင်မှုနှင့် အသုံးအဆောင်များ"
    },
    intro: {
      en: "Practical packing advice for Myanmar's climate:",
      ja: "ミャンマーの気候に合わせた実用的な服装ガイド:",
      my: "မြန်မာ့ရာသီဥတုနှင့် ကိုက်ညီသော ဝတ်စားဆင်ယင်မှု အကြံပြုချက်:"
    },
    points: {
      en: [
        "Lightweight, breathable cotton and linen fabrics.",
        "Easy slip-on sandals or flip-flops for frequent temple visits.",
        "A light jacket or sweater for cool evenings in Shan State (Inle, Kalaw).",
        "Purchasing a local Longyi wrap is both stylish and respectful."
      ],
      ja: [
        "通気性と吸湿性に優れた綿（コットン）や麻（リネン）素材の服が快適です。",
        "寺院の参拝で頻繁に靴を脱ぎ履きするため、脱ぎやすいサンダルやビーチサンダルが便利です。",
        "シャン州（インレー湖・カロー）の朝晩は冷え込むため、薄手の羽織りものを持参しましょう。",
        "現地で伝統の巻きスカート「ロンジー」を購入して着用すると、敬意が伝わり現地の人々にも喜ばれます。"
      ],
      my: [
        "ပေါ့ပါးပြီး လေဝင်လေထွက်ကောင်းသော ချည်ထည်နှင့် ပိတ်စများကို ဝတ်ဆင်သင့်ပါသည်။",
        "ဘုရားကျောင်းကန်များသို့ မကြာခဏ ဝင်ထွက်ရသဖြင့် ချွတ်ရလွယ်ကူသော ဖိနပ် သို့မဟုတ် ညှပ်ဖိနပ် စီးသင့်ပါသည်။",
        "ရှမ်းပြည်နယ် (အင်းလေး၊ ကလော) တွင် ညနေခင်းများ အေးသောကြောင့် အနွေးထည်ပါးပါး ယူဆောင်သင့်ပါသည်။",
        "မြန်မာ့ရိုးရာ လုံချည်ကို ဝယ်ယူဝတ်ဆင်ခြင်းသည် ယဉ်ကျေးမှုအရ အလွန်သင့်တော်ပါသည်။"
      ]
    }
  },
  {
    id: "money",
    icon: "💵",
    title: {
      en: "Money & Payments",
      ja: "両替と支払い・現金事情",
      my: "ငွေကြေးသုံးစွဲမှုနှင့် ငွေပေးချေခြင်း"
    },
    intro: {
      en: "Financial tips for smooth transactions:",
      ja: "快適なお買い物のための通貨・決済アドバイス:",
      my: "အဆင်ပြေစွာ ငွေပေးချေနိုင်ရန် သိထားသင့်သည့် အချက်များ:"
    },
    points: {
      en: [
        "Cash is king: Carry local Myanmar Kyat (MMK) for taxis, markets, and street stalls.",
        "Bring crisp, pristine, uncreased US Dollar banknotes (no tears, stamps, or folds).",
        "ATMs are available in major cities (Yangon, Mandalay), but carry backup cash.",
        "Mobile payments like KBZPay and WavePay are widely used by locals."
      ],
      ja: [
        "現地では現金決済が主流です。タクシーや屋台、市場での買い物用にミャンマーチャット（MMK）を用意しましょう。",
        "米ドル札を持参する場合は、折り目・破れ・スタンプのない新札（ピン札）が必須となります。",
        "ヤンゴンやマンダレーの主要都市にはATMがありますが、予備の現金を常に携帯しておくと安心です。",
        "現地では「KBZPay」や「WavePay」などの電子マネー・モバイル決済が広く普及しています。"
      ],
      my: [
        "တက္ကစီနှင့် ဈေးဆိုင်ငယ်များတွင် အသုံးပြုရန် မြန်မာကျပ်ငွေ အကြွေနှင့် ငွေစက္ကူများကို ဆောင်ထားသင့်ပါသည်။",
        "ဒေါ်လာလဲလှယ်မည်ဆိုပါက မခေါက်ထားသော၊ မစုတ်ပြဲသော ဒေါ်လာသစ်များကို ယူဆောင်လာသင့်ပါသည်။",
        "ရန်ကုန်နှင့် မန္တလေးမြို့ကြီးများတွင် အေတီအမ် (ATM) များ ရှိသော်လည်း ငွေသားအလုံအလောက် ဆောင်ထားပါ။",
        "KBZPay နှင့် WavePay ကဲ့သို့ မိုဘိုင်းငွေပေးချေမှုများကို မြန်မာနိုင်ငံတွင် ကျယ်ပြန့်စွာ အသုံးပြုကြပါသည်။"
      ]
    }
  },
  {
    id: "transport",
    icon: "🚌",
    title: {
      en: "Transportation",
      ja: "国内の交通・移動手段",
      my: "သွားလာရေးနှင့် သယ်ယူပို့ဆောင်ရေး"
    },
    intro: {
      en: "Getting around Myanmar conveniently:",
      ja: "都市間および市内の主な移動方法:",
      my: "မြန်မာနိုင်ငံအတွင်း အဆင်ပြေစွာ သွားလာနိုင်မည့် နည်းလမ်းများ:"
    },
    points: {
      en: [
        "Domestic Flights: Connect major hubs (Yangon, Mandalay, Heho, Bagan).",
        "Express VIP Buses: Comfortable overnight buses (JJ Express) between major cities.",
        "Taxis & Ride-hailing: Grab operates reliably in Yangon.",
        "E-bikes: The most enjoyable way to explore the temple plains of Bagan."
      ],
      ja: [
        "国内線航空機：ヤンゴン、マンダレー、ヘーホー（インレー湖）、ニャウンウー（バガン）間を短時間で結びます。",
        "長距離VIP高速バス：主要都市間を結ぶリクライニング付きの快適な夜行バスが運行しています。",
        "タクシー・配車アプリ：ヤンゴン市内では「Grab」アプリで安心してタクシーを利用できます。",
        "電動バイク（E-bike）：バガンの広大な仏塔平原を自由に観光するのに最もおすすめの乗り物です。"
      ],
      my: [
        "ပြည်တွင်းလေကြောင်းလိုင်းများ: ရန်ကုန်၊ မန္တလေး၊ ဟဲဟိုး (အင်းလေး) နှင့် ပုဂံမြို့များသို့ လျင်မြန်စွာ ပျံသန်းနိုင်ပါသည်။",
        "အဆင့်မြင့် အဝေးပြေးကားများ: မြို့ကြီးများအကြား အဆင်ပြေပြေ သွားလာနိုင်သော ညအိပ်ကားများ ရှိပါသည်။",
        "တက္ကစီနှင့် Grab: ရန်ကုန်မြို့တွင် Grab အက်ပ်ဖြင့် လွယ်ကူစိတ်ချစွာ တက္ကစီခေါ်ယူနိုင်ပါသည်။",
        "အီးဘိုက် (E-bike): ပုဂံရှေးဟောင်းဒေသရှိ ဘုရားများကို စိတ်ကြိုက် လှည့်လည်ကြည့်ရှုရန် အကောင်းဆုံး ဖြစ်ပါသည်။"
      ]
    }
  },
  {
    id: "respect",
    icon: "🤝",
    title: {
      en: "Respect Local Culture",
      ja: "文化の尊重と心温まる交流",
      my: "ဒေသဓလေ့ထုံးတမ်းများကို လေးစားလိုက်နာခြင်း"
    },
    intro: {
      en: "Fostering meaningful cross-cultural connections:",
      ja: "現地の人々と温かい絆を結ぶためのマナー:",
      my: "ဒေသခံပြည်သူများနှင့် နွေးထွေးစွာ ထိတွေ့ဆက်ဆံနိုင်ရန် အကြံပြုချက်များ:"
    },
    points: {
      en: [
        "Always ask politely before photographing locals, especially monks and elders.",
        "Do not touch anyone on the head, as it is considered the most sacred part of the body.",
        "Use your right hand (supported by your left forearm) when giving or receiving items.",
        "A warm smile and 'Mingalaba' will open hearts wherever you go!"
      ],
      ja: [
        "人物（特に僧侶や年配者）の写真を撮る際は、必ず事前に笑顔で許可を得ましょう。",
        "頭は仏教文化において最も神聖な部位とされているため、子どもの頭であっても触れてはいけません。",
        "物の受け渡しをする際は、右手を用い、左手を右肘に軽く添えるのが伝統的な礼儀正しい作法です。",
        "温かい笑顔と「ミンガラバー（こんにちは）」の一言があれば、どこへ行っても温かく迎えられます！"
      ],
      my: [
        "ဒေသခံများ (အထူးသဖြင့် သံဃာတော်များနှင့် လူကြီးသူမများ) အား ဓာတ်ပုံမရိုက်မီ ယဉ်ကျေးစွာ ခွင့်တောင်းပါ။",
        "ဦးခေါင်းသည် အလွန်မြင့်မြတ်သော နေရာဖြစ်သဖြင့် ကလေးများ၏ ဦးခေါင်းကိုပင် ပုတ်ခြင်း၊ ကိုင်တွယ်ခြင်း မပြုရပါ။",
        "ပစ္စည်းများ ပေးကမ်းရာတွင် သို့မဟုတ် လက်ခံရာတွင် ညာလက်ဖြင့် ပေး၍ ဘယ်လက်ဖြင့် ညာတံတောင်ဆစ်ကို ထိန်းပေးခြင်းသည် ယဉ်ကျေးသော အလေ့အထ ဖြစ်ပါသည်။",
        "နွေးထွေးသော အပြုံးနှင့် 'မင်္ဂလာပါ' ဟု နှုတ်ဆက်ခြင်းဖြင့် မည်သည့်နေရာတွင်မဆို မိတ်ဆွေကောင်းများ ရရှိနိုင်ပါသည်။"
      ]
    }
  }
];
