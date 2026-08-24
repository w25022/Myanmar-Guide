/**
 * 🇲🇲 MYANMAR GUIDE - Language Phrasebook Dataset (12 Practical Phrases)
 * Trilingual: English (en), Japanese (ja), Myanmar (my)
 */

const languagePhrasesData = [
  {
    id: "hello",
    category: "Greetings",
    english: "Hello / Welcome",
    japanese: "こんにちは / ようこそ",
    myanmarBurmese: "မင်္ဂလာပါ",
    pronunciation: "Min-ga-la-ba",
    audioText: "မင်္ဂလာပါ",
    usageNote: {
      en: "The universal polite greeting used at any time of day.",
      ja: "一日中いつでも使える最も丁寧な基本の挨拶。",
      my: "အချိန်မရွေး နှုတ်ဆက်နိုင်သော အခြေခံ မင်္ဂလာစကား။"
    }
  },
  {
    id: "thankyou",
    category: "Politeness",
    english: "Thank you very much",
    japanese: "どうもありがとうございます",
    myanmarBurmese: "ကျေးဇူးတင်ပါတယ်",
    pronunciation: "Kyei-zoo tin-ba-deh",
    audioText: "ကျေးဇူးတင်ပါတယ်",
    usageNote: {
      en: "Expresses warm appreciation to locals, drivers, and restaurant staff.",
      ja: "感謝を伝える際の一番大切で温かい表現。",
      my: "ကျေးဇူးစကား ပြောကြားရာတွင် အသုံးပြုသော စကားစု။"
    }
  },
  {
    id: "howmuch",
    category: "Shopping & Dining",
    english: "How much is this?",
    japanese: "これはいくらですか？",
    myanmarBurmese: "ဒါ ဘယ်လောက်လဲ?",
    pronunciation: "Da beh-louk leh?",
    audioText: "ဒါ ဘယ်လောက်လဲ",
    usageNote: {
      en: "Essential phrase when shopping at markets and ordering food.",
      ja: "市場や屋台でお買い物をするときに必須のフレーズ。",
      my: "ဈေးဝယ်ရာတွင် ဈေးနှုန်းမေးမြန်းရာ၌ သုံးသော စကား။"
    }
  },
  {
    id: "tasty",
    category: "Food & Dining",
    english: "It is delicious!",
    japanese: "とても美味しいです！",
    myanmarBurmese: "အရမ်း အရသာရှိတယ်!",
    pronunciation: "A-yann a-yatha shi deh!",
    audioText: "အရမ်း အရသာရှိတယ်",
    usageNote: {
      en: "Guaranteed to bring big smiles to cooks and food stall owners.",
      ja: "屋台やレストランの店員さんに大喜びされる一言。",
      my: "အစားအသောက် ကောင်းမွန်ကြောင်း ချီးကျူးစကား။"
    }
  },
  {
    id: "water",
    category: "Food & Dining",
    english: "Please give me drinking water",
    japanese: "お水をください",
    myanmarBurmese: "သောက်ရေ ပေးပါ",
    pronunciation: "Thauk-yay pay-ba",
    audioText: "သောက်ရေ ပေးပါ",
    usageNote: {
      en: "Used in restaurants to request bottled drinking water.",
      ja: "飲食店でボトル入りの飲料水を注文するときに使います。",
      my: "ရေသန့်တောင်းခံရာတွင် သုံးသော စကား။"
    }
  },
  {
    id: "checkbill",
    category: "Dining & Services",
    english: "Check the bill, please",
    japanese: "お会計をお願いします",
    myanmarBurmese: "ရှင်းမယ်",
    pronunciation: "Shin-meh (or 'Pike-san shin-meh')",
    audioText: "ရှင်းမယ်",
    usageNote: {
      en: "Commonly said at the end of meals at tea houses and restaurants.",
      ja: "食事を終えてお会計をお願いする時の表現。",
      my: "ထမင်းဆိုင်၊ လက်ဖက်ရည်ဆိုင်များတွင် ငွေရှင်းရန် ပြောသော စကား။"
    }
  },
  {
    id: "whereis",
    category: "Directions",
    english: "Where is the restroom / toilet?",
    japanese: "トイレはどこですか？",
    myanmarBurmese: "အိမ်သာ ဘယ်မှာလဲ?",
    pronunciation: "Ein-tha beh-hma-leh?",
    audioText: "အိမ်သာ ဘယ်မှာလဲ",
    usageNote: {
      en: "Useful when visiting pagodas, restaurants, and bus terminals.",
      ja: "観光地や駅・レストランでトイレの場所を尋ねるときに使います。",
      my: "အိမ်သာ မေးမြန်းရာတွင် သုံးသော စကား။"
    }
  },
  {
    id: "notspicy",
    category: "Food & Dining",
    english: "Not spicy, please",
    japanese: "辛くしないでください（辛さ控えめ）",
    myanmarBurmese: "မစပ်ပါနဲ့",
    pronunciation: "Ma-set ba-neh",
    audioText: "မစပ်ပါနဲ့",
    usageNote: {
      en: "Great for travelers sensitive to hot chilies when ordering street food.",
      ja: "辛いものが苦手な方が屋台や食堂で注文する際に重宝します。",
      my: "အစပ် လျှော့ခိုင်းရာတွင် ပြောသော စကား။"
    }
  },
  {
    id: "sorry",
    category: "Politeness",
    english: "Excuse me / I am sorry",
    japanese: "すみません / ごめんなさい",
    myanmarBurmese: "တောင်းပန်ပါတယ်",
    pronunciation: "Taung-pan ba-deh",
    audioText: "တောင်းပန်ပါတယ်",
    usageNote: {
      en: "Used to apologize or politely pass by people in crowded places.",
      ja: "お詫びや、人混みを通る際に丁寧に声をかける言葉。",
      my: "ခွင့်လွှတ်တောင်းပန်ရာတွင် သုံးသော စကား။"
    }
  },
  {
    id: "goodbye",
    category: "Greetings",
    english: "Goodbye / See you again",
    japanese: "さようなら / また会いましょう",
    myanmarBurmese: "သွားပါဦးမယ်",
    pronunciation: "Thwa-ba-ohn-meh",
    audioText: "သွားပါဦးမယ်",
    usageNote: {
      en: "Polite farewell meaning literally 'I shall be going now'.",
      ja: "「お先に失礼します / さようなら」という丁寧なお別れの挨拶。",
      my: "နှုတ်ဆက် ထွက်ခွာရာတွင် ပြောသော ယဉ်ကျေးသည့် စကား။"
    }
  },
  {
    id: "help",
    category: "Emergency & Assistance",
    english: "Please help me!",
    japanese: "助けてください！ / 手伝ってください",
    myanmarBurmese: "ကူညီပါဦး!",
    pronunciation: "Koo-nyi ba-ohn!",
    audioText: "ကူညီပါဦး",
    usageNote: {
      en: "Important phrase if you ever need urgent local assistance.",
      ja: "困ったときや緊急時に周囲の人に助けを求める言葉。",
      my: "အကူအညီ လိုအပ်သည့်အခါ အသုံးပြုရမည့် စကား။"
    }
  },
  {
    id: "friend",
    category: "Social & Connection",
    english: "Nice to meet you (Friend)",
    japanese: "お会いできて嬉しいです（友だち）",
    myanmarBurmese: "တွေ့ရတာ ဝမ်းသာပါတယ်",
    pronunciation: "Twei-ya-da wun-tha ba-deh",
    audioText: "တွေ့ရတာ ဝမ်းသာပါတယ်",
    usageNote: {
      en: "A heartfelt greeting when making new friends across Myanmar.",
      ja: "新しい友人との出会いの挨拶にぴったりの心温まる表現。",
      my: "မိတ်ဆွေသစ် တွေ့ဆုံရာတွင် ပြောသော ကြည်နူးဖွယ် စကား။"
    }
  }
];
