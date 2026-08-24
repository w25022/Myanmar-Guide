/**
 * 🇲🇲 MYANMAR GUIDE - Foods Dataset (12 Authentic Dishes)
 * Trilingual: English (en), Japanese (ja), Myanmar (my)
 */

const foodsData = [
  {
    id: "mohinga",
    name: "Mohinga",
    nameJa: "モヒンガー（魚出汁スープ麺）",
    myanmarName: "မုန့်ဟင်းခါး",
    category: "Noodles",
    spicyLevel: "Mild",
    image: "public/images/foods/mohinga.jpg",
    description: {
      en: "Myanmar's unofficial national dish: tender rice noodles immersed in a rich, aromatic catfish and lemongrass broth, garnished with crispy split-pea fritters.",
      ja: "ミャンマーの国民食。ナマズの出汁にレモングラス、バナナの芯、生姜を効かせた濃厚スープに米麺を合わせた香り豊かな一杯。",
      my: "မြန်မာနိုင်ငံ၏ အမျိုးသားအစားအစာဖြစ်ပြီး ငါးခူ၊ စပါးလင်၊ ငှက်ပျောအူတို့ဖြင့် ချက်ပြုတ်ထားသော အရသာရှိလှသည့် မနက်စာ မုန့်ဟင်းခါး။"
    },
    origin: { en: "Lower Myanmar & Ayeyarwady Delta", ja: "下ビルマ・エーヤワディーデルタ地方", my: "အောက်မြန်မာပြည်နှင့် ဧရာဝတီမြစ်ဝကျွန်းပေါ်ဒေသ" },
    ingredients: {
      en: "Rice vermicelli, fresh catfish/carp, lemongrass, banana stem, ginger, garlic, toasted chickpea flour, fish sauce, crispy pea fritters, boiled duck egg, fresh coriander, lime.",
      ja: "米粉麺、ナマズ・川魚、レモングラス、バナナの幹、生姜、にんにく、ひよこ豆粉、魚醤、豆のかき揚げ、ゆで卵、パクチー、ライム。",
      my: "ဆန်မုန့်ဖတ်၊ ငါးခူ/ငါးကြင်း၊ စပါးလင်၊ ငှက်ပျောအူ၊ ဂျင်း၊ ကြက်သွန်ဖြူ/နီ၊ ကုလားပဲမှုန့်၊ ငံပြာရည်၊ ပဲကြော်၊ ဘဲဥပြုတ်၊ နံနံပင်၊ သံပရာသီး။"
    },
    culturalInfo: {
      en: "Mohinga is universally cherished across Myanmar as the definitive breakfast food, served from neighborhood street vendors and morning tea stalls.",
      ja: "朝食として屋台やティーショップで日常的に親しまれるほか、祭りやおもてなしの席でも必ず振る舞われるソウルフードです。",
      my: "မြန်မာလူမျိုးတို့၏ နေ့စဉ် နံနက်စာအဖြစ် အလွန်လူကြိုက်များပြီး အလှူမင်္ဂလာပွဲများတွင်လည်း မပါမဖြစ် ဧည့်ခံကျွေးမွေးသော ရိုးရာအစားအစာ ဖြစ်ပါသည်။"
    }
  },
  {
    id: "laphet-thoke",
    name: "Laphet Thoke (Tea Leaf Salad)",
    nameJa: "ラペッ・トウッ（発酵茶葉のサラダ）",
    myanmarName: "လက်ဖက်သုပ်",
    category: "Salad",
    spicyLevel: "Medium",
    image: "public/images/foods/laphetthoke.jpg",
    description: {
      en: "Fermented tea leaves tossed with crunchy roasted beans, peanuts, toasted sesame, fried garlic, diced tomatoes, bird's eye chilies, and tangy lime juice.",
      ja: "発酵させた茶葉（ラペッ）に、香ばしい揚げ豆、ピーナッツ、揚げにんにく、トマト、唐辛子、ライムを和えた絶品サラダ。",
      my: "ရှမ်းပြည်နယ်ထွက် နှပ်ထားသော လက်ဖက်ညွန့်များကို ပဲကြော်စုံ၊ နှမ်း၊ ကြက်သွန်ဖြူကြော်၊ ငရုတ်သီးစိမ်း၊ ခရမ်းချဉ်သီးတို့ဖြင့် သုပ်ထားသော မြန်မာ့ရိုးရာ လက်ဖက်သုပ်။"
    },
    origin: { en: "Shan Hills (Palaung Highland Tradition)", ja: "シャン高原（パラウン族の伝統）", my: "ရှမ်းကုန်းပြင်မြင့် (ပလောင်ရိုးရာ)" },
    ingredients: {
      en: "Fermented pickled tea leaves, fried crunchy yellow split peas, broad beans, roasted peanuts, toasted sesame seeds, crispy fried garlic chips, shredded cabbage, fresh tomatoes, fresh green chilies, lime juice.",
      ja: "発酵茶葉、揚げひよこ豆、揚げソラ豆、ローストピーナッツ、炒りごま、フライドガーリック、キャベツ、トマト、青唐辛子、ライム果汁。",
      my: "လက်ဖက်အညွန့်၊ နှစ်ပြန်ကြော်ပဲစုံ၊ မြေပဲဆန်၊ နှမ်းလှော်၊ ကြက်သွန်ဖြူကြော်၊ ဂေါ်ဖီထုပ်၊ ခရမ်းချဉ်သီး၊ ငရုတ်သီးစိမ်း၊ သံပရာရည်။"
    },
    culturalInfo: {
      en: "Ancient Burmese peace offering: In royal times, sharing Laphet was used to seal peace treaties between warring kingdoms. Today it is served to esteemed guests as a sign of hospitality.",
      ja: "かつて王族同士の和平調停の儀式で交わされた歴史を持つ格式高い料理。現在もおもてなしやお茶請けとして愛されています。",
      my: "ရှေးမြန်မာဘုရင်များလက်ထက်တွင် စစ်ပြေငြိမ်းခြင်း အထိမ်းအမှတ်အဖြစ် သုံးဆောင်ခဲ့ကြပြီး ယနေ့တိုင် ဧည့်ဝတ်ကျေပွန်မှု၏ ပြယုဂ်အဖြစ် တည်ခင်းဧည့်ခံပါသည်။"
    }
  },
  {
    id: "shan-noodles",
    name: "Shan Noodles (Shan Khao Swe)",
    nameJa: "シャン・カオスエ（シャン風和え麺／汁麺）",
    myanmarName: "ရှမ်းခေါက်ဆွဲ",
    category: "Noodles",
    spicyLevel: "Mild",
    image: "public/images/foods/shan noodle.jpg",
    description: {
      en: "Delicate flat rice noodles paired with savory minced chicken or pork simmered in tomatoes, spiced garlic oil, toasted sesame, and served dry or in clear broth.",
      ja: "モチモチした米麺に、トマトと鶏肉（または豚肉）を甘辛く煮込んだタレ、特製ガーリックオイル、炒りごまを絡めたシャン族の郷土麺。",
      my: "ရှမ်းပြည်နယ် ရိုးရာဆန်ခေါက်ဆွဲဖတ်ကို ခရမ်းချဉ်သီး၊ ကြက်သား/ဝက်သားဟင်းအနှစ်၊ နှမ်းလှော်နှင့် ကြက်သွန်ဖြူဆီချက်တို့ဖြင့် တွဲဖက်သုံးဆောင်ရသော ရှမ်းခေါက်ဆွဲ။"
    },
    origin: { en: "Shan State", ja: "シャン州", my: "ရှမ်းပြည်နယ်" },
    ingredients: {
      en: "Sticky/flat rice noodles, ground chicken or pork, crushed ripe tomatoes, sweet soy sauce, garlic infused oil, toasted sesame seeds, spring onions, pickled mustard greens (Monnyin Jin).",
      ja: "平打ち米麺、鶏ひき肉または豚ひき肉、完熟トマト、甘口醤油、ガーリックオイル、炒りごま、刻みネギ、高菜の漬物（モンニンジン）。",
      my: "ဆန်ခေါက်ဆွဲဖတ်၊ ကြက်သား/ဝက်သားနုပ်နုပ်စင်း၊ ခရမ်းချဉ်သီး၊ ပဲငံပြာရည်အချို၊ ဆီချက်၊ နှမ်းလှော်၊ ကြက်သွန်မြိတ်၊ မုန်ညင်းချဉ်။"
    },
    culturalInfo: {
      en: "Beloved across all regions of Myanmar as a comforting, customizable comfort meal suitable for breakfast, lunch, or a light evening supper.",
      ja: "汁あり（スープ）と汁なし（和え麺）から選べ、酸味のある高菜漬けと一緒に食べるのが本場流です。",
      my: "အရည် (သို့မဟုတ်) အသုပ် အနေဖြင့် နှစ်သက်သလို သုံးဆောင်နိုင်ပြီး မုန်ညင်းချဉ်နှင့် တွဲဖက်စားသုံးပါက အလွန်လိုက်ဖက်လှပါသည်။"
    }
  },
  {
    id: "ohn-no-khao-swe",
    name: "Ohn No Khao Swe",
    nameJa: "オンノ・カオスエ（ココナッツチキンカレー麺）",
    myanmarName: "အုန်းနို့ခေါက်ဆွဲ",
    category: "Noodles",
    spicyLevel: "Mild",
    image: "public/images/foods/Ohnnokhaoswe.jpg",
    description: {
      en: "Silky egg noodles immersed in a creamy, velvety spiced coconut milk and chicken curry broth, topped with shallots and crispy wonton fritters.",
      ja: "濃厚でまろやかなココナッツミルクと鶏肉のカレー風味スープに、卵麺を合わせた贅沢でリッチな味わいの伝統麺料理。",
      my: "အုန်းနို့အနှစ်၊ ကြက်သား၊ ကုလားပဲအနှစ်တို့ဖြင့် မွှေးကြိုင်စွာ ချက်ပြုတ်ထားသော ဟင်းရည်ကို ဂျုံခေါက်ဆွဲဖတ်ဖြင့် တွဲဖက်သုံးဆောင်ရသော အုန်းနို့ခေါက်ဆွဲ။"
    },
    origin: { en: "Central & Lower Myanmar", ja: "中部・下ビルマ地方", my: "အလယ်ပိုင်းနှင့် အောက်မြန်မာပြည်" },
    ingredients: {
      en: "Egg/wheat noodles, fresh pressed coconut milk, diced chicken thighs, chickpea flour broth thickener, turmeric, shallots, fish sauce, crispy fried noodles, hard-boiled egg, lime slices.",
      ja: "卵麺・小麦麺、ココナッツミルク、鶏もも肉、ひよこ豆粉、ターメリック、赤わけぎ、魚醤、揚げワンタン・揚げ麺、ゆで卵、ライム。",
      my: "ဂျုံခေါက်ဆွဲ၊ အုန်းနို့၊ ကြက်သား၊ ကုလားပဲမှုန့်၊ နနွင်းမှုန့်၊ ကြက်သွန်နီ၊ ငံပြာရည်၊ အကြော်၊ ကြက်ဥပြုတ်၊ သံပရာသီး။"
    },
    culturalInfo: {
      en: "This dish was the culinary ancestor and inspiration for Thailand's northern Khao Soi and Malaysia's Laksa styles.",
      ja: "タイ北部の名物料理「カオソーイ」やマレーシアのラクサの原型・ルーツとも言われる歴史ある料理です。",
      my: "ထိုင်းနိုင်ငံမြောက်ပိုင်း ခေါက်ဆွိုင်းနှင့် မလေးရှား လာ့ခ်ဆာတို့၏ မူလအစ ရင်းမြစ်ဟင်းလျာအဖြစ် သတ်မှတ်ကြပါသည်။"
    }
  },
  {
    id: "nan-gyi-thoke",
    name: "Nan Gyi Thoke",
    nameJa: "ナンジートウッ（濃厚鶏カレー和え太麺）",
    myanmarName: "နန်းကြီးသုပ်",
    category: "Noodles",
    spicyLevel: "Mild",
    image: "public/images/foods/nangyithoke.jpg",
    description: {
      en: "Often dubbed the 'Burmese Spaghetti': thick round rice noodles tossed with rich chicken curry gravy, roasted chickpea flour, chili oil, and crispy shallots.",
      ja: "「ビルマ風スパゲッティ」と称される、太い丸米麺に特製チキンカレーソース、ひよこ豆粉、チリオイルを豪快に和えた満足感抜群の一皿。",
      my: "ဆန်နန်းကြီးဖတ်အလုံးကြီးများကို ကြက်သားဟင်းအနှစ်၊ အကြော်၊ ပဲမှုန့်၊ ဆီနီတို့ဖြင့် သမအောင် နယ်ဖတ်ထားသော ရိုးရာ နန်းကြီးသုပ်။"
    },
    origin: { en: "Mandalay Region", ja: "マンダレー地方域", my: "မန္တလေးတိုင်းဒေသကြီး" },
    ingredients: {
      en: "Thick round rice noodles, spiced chicken curry sauce, roasted gram flour, shallots, toasted chili flakes, hard-boiled egg slices, fish cake slices, fresh coriander.",
      ja: "極太丸米麺、特製チキンカレーグレイビー、香ばしいひよこ豆粉、エシャロット、唐辛子油、スライスゆで卵、さつま揚げ、パクチー。",
      my: "နန်းကြီးဆန်ဖတ်၊ ကြက်သားဟင်းနှစ်၊ ပဲကျက်မှုန့်၊ ကြက်သွန်နီ၊ ငရုတ်သီးဆီနီ၊ ဘဲဥပြုတ်၊ ငါးဖယ်ပြား၊ နံနံပင်။"
    },
    culturalInfo: {
      en: "The culinary pride of Mandalay, renowned for hearty texture and the distinctive nutty aroma of roasted chickpea flour.",
      ja: "古都マンダレーを代表する名物料理。濃厚な豆の香りとプリプリとした太麺の食感がやみつきになります。",
      my: "မန္တလေးမြို့၏ အထင်ကရ အစားအစာတစ်ခုဖြစ်ပြီး မနက်စာအဖြစ် အလွန်လူကြိုက်များသော ဟင်းလျာဖြစ်ပါသည်။"
    }
  },
  {
    id: "myanmar-biryani",
    name: "Myanmar Biryani (Danpauk)",
    nameJa: "ダンバウッ（ミャンマー風チキンビリヤニ）",
    myanmarName: "ဒံပေါက်",
    category: "Rice",
    spicyLevel: "Mild",
    image: "public/images/foods/biryani.jpg",
    description: {
      en: "Fragrant basmati rice slow-cooked with whole chicken quarters, saffron, ghee, cashews, raisins, cloves, and cardamom, served with fresh cucumber relish.",
      ja: "サフラン、カルダモン、ギー（澄ましバター）、カシューナッツ、レーズンと共に丸ごと骨付きチキンを炊き込んだ極上のビリヤニ。",
      my: "ဘスマတီဆန်မွှေး၊ ထောပတ်၊ သီဟိုဠ်စေ့၊ စပျစ်ခြောက်၊ သစ်ကြံပိုး၊ ဖာလာတို့ဖြင့် ကြက်သားတစ်ခြမ်းလုံး နှပ်ထားသော မွှေးကြိုင်လှသည့် ဒံပေါက်ထမင်း။"
    },
    origin: { en: "Yangon & Mandalay Royal Traditions", ja: "ヤンゴン・マンダレーの宮廷伝統", my: "ရန်ကုန်နှင့် မန္တလေးမြို့များ" },
    ingredients: {
      en: "Aged Basmati rice, marinated whole chicken thigh/leg, pure ghee, saffron, cinnamon, cloves, bay leaves, roasted cashew nuts, golden raisins, served with spicy mint yogurt sauce and mango pickle.",
      ja: "バスマティ米、骨付きチキン、ギー、サフラン、シナモン、クローブ、カシューナッツ、レーズン、マンゴーの漬物、ミント風味のヨーグルトソース。",
      my: "ဘスマတီဆန်၊ ကြက်ပေါင်သား၊ ထောပတ်စစ်စစ်၊ ဇာတိပ္ဖိုလ်သီး၊ သစ်ကြံပိုးခေါက်၊ ကရဝေးရွက်၊ သီဟိုဠ်စေ့၊ စပျစ်ခြောက်၊ သရက်သီးသနပ်၊ မန်ကျည်းဖျော်ရည်။"
    },
    culturalInfo: {
      en: "The quintessential celebratory feast served during weddings, religious novitiation ceremonies (Shinbyu), and major Buddhist festivals.",
      ja: "結婚式や得度式（シンピュー）、お祝いの祝宴で欠かせないミャンマーのごちそう料理です。",
      my: "ရှင်ပြုမင်္ဂလာပွဲ၊ မင်္ဂလာဆောင်ပွဲများနှင့် ပျော်ပွဲရွှင်ပွဲများတွင် အထူးတလည် တည်ခင်းဧည့်ခံသော မွန်မြတ်သည့် အစားအစာ ဖြစ်ပါသည်။"
    }
  },
  {
    id: "mont-lin-ma-yar",
    name: "Mont Lin Ma Yar (Couple Snack)",
    nameJa: "モン・リンマヤー（夫婦の焼き菓子）",
    myanmarName: "မုန့်လင်မယား",
    category: "Snack",
    spicyLevel: "None",
    image: "public/images/foods/Mont Lin Ma Yar.jpg",
    description: {
      en: "Crispy-shelled street fritters cooked in cast-iron dimpled pans: two halves filled with quail eggs, green onions, and boiled peas are joined together like a couple.",
      ja: "小さなくぼみのある鉄板で香ばしく焼き上げるストリートスナック。ウズラの卵やネギ、豆を入れて二つの半球を夫婦のように貼り合わせます。",
      my: "မုန့်ဗိုင်းတောင့်အိုးတွင် ဆန်မုန့်ရည်ထည့်ကာ ငုံးဥ၊ ကြက်သွန်မြိတ်၊ ပဲပြုတ်တို့ထည့်၍ မုန့်နှစ်ခုကို လင်မယားအဖြစ် ပူးကပ်ကြော်ထားသော မြန်မာ့ရိုးရာ မုန့်လင်မယား။"
    },
    origin: { en: "Street Food Across Myanmar", ja: "ミャンマー全土のストリートフード", my: "မြန်မာနိုင်ငံအနှံ့ လမ်းဘေးမုန့်" },
    ingredients: {
      en: "Rice batter, coconut cream, fresh quail eggs, tender boiled green peas, chopped scallions, toasted sesame salt.",
      ja: "米粉生地、ココナッツミルク、ウズラの卵、茹で豆、刻みネギ、ごま塩。",
      my: "ဆန်မုန့်နှစ်၊ အုန်းနို့၊ ငုံးဥ၊ ပဲပြုတ်၊ ကြက်သွန်မြိတ်၊ နှမ်းဆား။"
    },
    culturalInfo: {
      en: "Its romantic name translates literally to 'Husband and Wife Snack', symbolizing harmony and unity in partnership.",
      ja: "「夫と妻のお菓子」という意味を持ち、2つの半球がぴったり合わさる姿から夫婦円満の縁起物としても親しまれています。",
      my: "မုန့်နှစ်ခြမ်းကို တစ်ခုတည်းအဖြစ် ပူးတွဲပေါင်းစပ်လိုက်သောကြောင့် 'မုန့်လင်မယား' ဟု ချစ်စနိုး ခေါ်ဆိုကြပါသည်။"
    }
  },
  {
    id: "mont-lone-yay-paw",
    name: "Mont Lone Yay Paw (Thingyan Rice Balls)",
    nameJa: "モン・ロン・イェイ・ポー（水祭り名物の白玉団子）",
    myanmarName: "မုန့်လုံးရေပေါ်",
    category: "Dessert",
    spicyLevel: "None",
    image: "public/images/foods/Mont Lone Yay Paw.jpg",
    description: {
      en: "Chewy glutinous rice dumplings stuffed with rich palm sugar jaggery that float to the water's surface when cooked, dusted with fresh grated coconut.",
      ja: "モチモチの米粉団子の中に甘いパームシュガー（ヤシ糖）を包み、茹でて水面に浮かび上がったら新鮮な削りココナッツをまぶしていただきます。",
      my: "ကောက်ညှင်းမုန့်လုံးအတွင်း ထန်းလျက်ခဲ ထည့်သွင်းကာ ရေနွေးဆူဆူတွင် ပြုတ်၍ ရေပေါ်ပေါ်လာမှ ဆယ်ယူကာ အုန်းသီးဆံဖြင့် ဖြူးစားသော သင်္ကြန်ရိုးရာ မုန့်။"
    },
    origin: { en: "Traditional Festive Confectionery", ja: "伝統的なお祝い・水祭り（ティンジャン）", my: "မြန်မာ့ရိုးရာ သင်္ကြန်ပွဲတော်" },
    ingredients: {
      en: "Glutinous rice flour, fragrant Toddy palm jaggery, fresh grated mature coconut meat, pinch of sea salt.",
      ja: "もち米粉、ヤシ糖（ジャガリー）、フレッシュ削りココナッツ、少量の海塩。",
      my: "ကောက်ညှင်းမှုန့်၊ ထန်းလျက်ခဲ၊ အုန်းသီးခြစ်၊ ဆားအနည်းငယ်။"
    },
    culturalInfo: {
      en: "The signature festive treat of Thingyan (Myanmar New Year Water Festival). Friends and family gather together to roll hundreds of dumplings and distribute them freely to neighbors as acts of merit.",
      ja: "ミャンマーのお正月・水祭り（ティンジャン）の時期に、家族や友人が集まって何百個も手作りし、道行く人々に無料で振る舞う温かい伝統があります。",
      my: "သင်္ကြန်ကာလတွင် တစ်အိမ်တက်ဆင်း မုန့်လုံးရေပေါ် ကျွေးမွေးလှူဒါန်းကြသည့် မြန်မာတို့၏ ချစ်စရာကောင်းသော ရိုးရာဓလေ့ ဖြစ်ပါသည်။"
    }
  },
  {
    id: "tohu-thoke",
    name: "Tohu Thoke (Shan Tofu Salad)",
    nameJa: "トーフ・トウッ（ひよこ豆豆腐のサラダ）",
    myanmarName: "တို့ဟူးသုပ်",
    category: "Salad",
    spicyLevel: "Mild",
    image: "public/images/foods/Tohu Thoke.jpg",
    description: {
      en: "Silky, handmade golden tofu crafted from ground yellow chickpeas (not soy), tossed with sweet soy, garlic oil, tamarind dressing, toasted sesame, and fresh herbs.",
      ja: "大豆ではなく「ひよこ豆粉」から手作りする黄金色のなめらか豆腐に、タマリンドソース、ガーリックオイル、炒りごま、香草を和えたヘルシー料理。",
      my: "ကုလားပဲစစ်စစ်ဖြင့် ကျိုချက်ထားသော ရွှေဝါရောင် ရှမ်းတို့ဟူးကို မန်ကျည်းရည်၊ ဆီချက်၊ ပဲငံပြာရည်၊ နှမ်းလှော်တို့ဖြင့် သုပ်ထားသော တို့ဟူးသုပ်။"
    },
    origin: { en: "Shan State", ja: "シャン州", my: "ရှမ်းပြည်နယ်" },
    ingredients: {
      en: "Chickpea flour tofu, tamarind puree, garlic chili oil, dark sweet soy sauce, toasted crushed peanuts, sesame seeds, shredded cabbage, fresh mint.",
      ja: "ひよこ豆粉の手作り豆腐、タマリンドペースト、ガーリックチリオイル、甘口醤油、砕きピーナッツ、炒りごま、キャベツ千切り、ミント。",
      my: "ကုလားပဲတို့ဟူး၊ မန်ကျည်းမှည့်အနှစ်၊ ကြက်သွန်ဖြူဆီချက်၊ ပဲငံပြာရည်အချို၊ မြေပဲထောင်း၊ နှမ်းလှော်၊ ဂေါ်ဖီထုပ်၊ ပူဒီနာရွက်။"
    },
    culturalInfo: {
      en: "Shan tofu is completely soy-free and dairy-free, celebrated worldwide by nutritionists and food enthusiasts for its creamy custard texture.",
      ja: "大豆を使わないため大豆アレルギーの方にも安心。ベジタリアンやビーガンにも大人気のヘルシーフードです。",
      my: "ပဲပုပ်မပါဘဲ ကုလားပဲဖြင့် ပြုလုပ်ထားသဖြင့် ကျန်းမာရေးနှင့် ညီညွတ်ပြီး အသီးအရွက်စားသူများ အထူးနှစ်သက်သော ရှမ်းရိုးရာ အစားအစာ ဖြစ်ပါသည်။"
    }
  },
  {
    id: "burmese-curry",
    name: "Traditional Burmese Curry (Hin)",
    nameJa: "ミャンマー風カレー（シープヤン・ヒン）",
    myanmarName: "မြန်မာ့ရိုးရာ ဆီပြန်ဟင်း",
    category: "Curry",
    spicyLevel: "Medium",
    image: "public/images/foods/Traditional Burmese Curry.jpg",
    description: {
      en: "Slow-simmered pork, mutton, or river prawns in a rich aromatic base of slow-cooked shallots, garlic, ginger, and turmeric until fragrant oil surfaces.",
      ja: "たっぷりの赤わけぎ、生姜、にんにく、ターメリックをじっくり炒め、肉やエビの旨味を凝縮させたミャンマーの家庭料理の王道。",
      my: "ကြက်သွန်နီ၊ ဂျင်း၊ ကြက်သွန်ဖြူ၊ နနွင်းတို့ဖြင့် ဆီသတ်၍ အသားနှင့် ငါးပုစွန်တို့ကို မွှေးပျံ့စွာ ချက်ပြုတ်ထားသော မြန်မာ့ရိုးရာ ဆီပြန်ဟင်း။"
    },
    origin: { en: "Traditional Myanmar Cuisine", ja: "ミャンマー全土の伝統家庭料理", my: "မြန်မာနိုင်ငံတစ်ဝန်း" },
    ingredients: {
      en: "Choice of pork, mutton, or freshwater giant prawns, pounded shallots, garlic, crushed ginger, turmeric, paprika chili paste, fish sauce, lemongrass.",
      ja: "豚肉、マトン、または淡水オニテナガエビ、たっぷりの赤わけぎ、にんにく、生姜、ターメリック、パプリカチリペースト、魚醤、レモングラス。",
      my: "ဝက်သား/ဆိတ်သား/ပုစွန်ထုတ်၊ ကြက်သွန်နီ၊ ကြက်သွန်ဖြူ၊ ဂျင်း၊ နနွင်းမှုန့်၊ ငရုတ်သီးအရောင်တင်မှုန့်၊ ငံပြာရည်၊ စပါးလင်။"
    },
    culturalInfo: {
      en: "Burmese meals are traditionally served family-style with a central curry, a parade of fresh raw vegetables (A-ttoe), and piquant fermented fish dip (Ngapi Yay).",
      ja: "テーブルの中央にカレーが並び、生野菜やハーブ（アトゥ）をンガピチェ（魚醤発酵ディップ）につけて白米と一緒に食べるのがミャンマースタイルです。",
      my: "မြန်မာ့ထမင်းဝိုင်းတွင် ဆီပြန်ဟင်းနှင့်အတူ တို့စရာစုံ၊ ငါးပိရည်ဖျော်၊ ဟင်းချိုတို့ဖြင့် မိသားစု စုံစုံလင်လင် သုံးဆောင်ကြပါသည်။"
    }
  },
  {
    id: "kyay-oh",
    name: "Kyay Oh (Claypot Vermicelli)",
    nameJa: "チェーオー（土鍋仕立ての具だくさん春雨スープ）",
    myanmarName: "ကြေးအိုး",
    category: "Noodles",
    spicyLevel: "Mild",
    image: "public/images/foods/Kyay Oh.jpg",
    description: {
      en: "Nourishing clear soup made with delicate glass noodles, seasoned pork meatballs, tender pork cuts, quail eggs, and mustard greens simmered in traditional brass pots.",
      ja: "真鍮の小鍋で一人前ずつ丁寧に煮込む春雨スープ。手作り肉団子、豚の内臓やスライス肉、ウズラの卵、青菜が入った優しい味。",
      my: "ကြေးအိုးခွက်ငယ်များအတွင်း ကြာဇံ၊ ကြက်သား/ဝက်သားလုံး၊ ငုံးဥနှင့် မုန်ညင်းရွက်တို့ကို ထည့်သွင်းပြုတ်ထားသော အရသာရှိလှသည့် ကြေးအိုး။"
    },
    origin: { en: "Sino-Burmese Heritage (Yangon)", ja: "ヤンゴン・華人系ミャンマー文化", my: "ရန်ကုန်မြို့" },
    ingredients: {
      en: "Mung bean vermicelli, minced seasoned pork/chicken meatballs, quail eggs, pork intestine/liver, bok choy/mustard greens, crushed white pepper, garlic oil, preserved soy bean dipping sauce.",
      ja: "緑豆春雨、特製ポークつみれ、ウズラの卵、豚肉・内臓、チンゲン菜・からし菜、白胡椒、ガーリックオイル、特製ダレ。",
      my: "ပဲကြာဇံ၊ အသားလုံး၊ ငုံးဥ၊ အသည်းအမြစ်၊ မုန်ညင်းစိမ်း၊ ငရုတ်ကောင်း၊ ဆီချက်၊ အချဉ်ရည်။"
    },
    culturalInfo: {
      en: "Originally cooked in heavy copper/brass pots ('Kyay'), it is now one of the country's most popular casual comfort dining experiences.",
      ja: "元々は「チェー（真鍮鍋）」で調理されていたことから名付けられました。スープ仕立てと汁なし和え麺の両方が楽しめます。",
      my: "ကြေးအိုးဖြင့် စတင်ချက်ပြုတ်ခဲ့ရာမှ အမည်တွင်လာခဲ့ပြီး ကြေးအိုးအရည် (သို့မဟုတ်) ကြေးအိုးဆီချက် အဖြစ် သုံးဆောင်နိုင်ပါသည်။"
    }
  },
  {
    id: "mont-pyar-tha-let",
    name: "Mont Pyar Tha Let (Burmese Savory Pancake)",
    nameJa: "モン・ピャータレッ（米粉の厚焼きパンケーキ）",
    myanmarName: "မုန့်ပျားသလက်",
    category: "Snack",
    spicyLevel: "None",
    image: "public/images/foods/Mont Pyar Tha Let.jpg",
    description: {
      en: "A fluffy, golden-crusted griddle pancake with honeycomb pockets, studded with tender boiled yellow peas, spring onions, and roasted sesame seeds.",
      ja: "表面はカリッと中はふっくらモチモチした米粉のお食事系パンケーキ。ホクホクの煮豆と青ネギ、ごまの風味が広がります。",
      my: "အိုးကင်းတွင် ဆန်မုန့်ရည်ထည့်ကာ အပေါ်မှ ပဲပြုတ်၊ ကြက်သွန်မြိတ်နှင့် နှမ်းတို့ ဖြူး၍ ဖုတ်ထားသော အလွန်မွှေးကြိုင်သည့် မုန့်ပျားသလက်။"
    },
    origin: { en: "Upper & Lower Myanmar Traditional Markets", ja: "ミャンマー全土の朝市・屋台", my: "မြန်မာနိုင်ငံအနှံ့" },
    ingredients: {
      en: "Fermented rice batter, boiled yellow peas (Vatana), finely chopped scallions, toasted black sesame, light coconut milk drizzle.",
      ja: "発酵米粉生地、煮ひよこ豆、刻み青ネギ、炒り黒ごま、ココナッツミルク少々。",
      my: "ဆန်မုန့်နှစ်၊ ပဲပြုတ်၊ ကြက်သွန်မြိတ်၊ နှမ်းနက်၊ အုန်းနို့။"
    },
    culturalInfo: {
      en: "Available in both savory (with yellow peas and scallions) and sweet variations (with rich palm jaggery drizzle).",
      ja: "甘いパームシュガーがけの「おやつ版」と、豆とネギをのせた「お食事版」の2種類があり、朝の屋台の定番です。",
      my: "ပဲပြုတ်ပါသော အငန်မုန့် နှင့် ထန်းလျက်ရည်ပါသော အချိုမုန့် ဟူ၍ ၂ မျိုး ရရှိနိုင်ပြီး မနက်ခင်း လက်ဖက်ရည်နှင့် တွဲဖက်စားသုံးကြပါသည်။"
    }
  }
];
