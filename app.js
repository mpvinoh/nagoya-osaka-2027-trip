// 2027 大阪・名古屋 阿翰+好姐妹乖乖聽話之旅 - 核心資料與互動邏輯

const ITINERARY_DATA = [
  {
    day: 1,
    date: "1/16 (六)",
    city: "大阪",
    title: "抵達關西 ➔ 入住鶴橋 ➔ 黑門市場美食巡禮",
    stay: "✅ 已訂妥：ESLEAD HOTEL Osaka Tsuruhashi（鶴橋站 4 號出口步行 1 分鐘）",
    highlight: "搭機抵達大阪！從關西機場搭「JR 關空快速」可免轉車直達鶴橋站放行李，再搭地鐵千日前線 2 站（3 分鐘）就到黑門市場＆黑門中川超市買大草莓！",
    note: "出地鐵鶴橋站 4 號出口走 1 分鐘就到飯店，順路就有「FamilyMart 鶴橋駅前店」與「Lawson Store 100」生鮮百元超商可買牛奶早餐。",
    stops: [
      {
        time: "上午 / 中午",
        name: "關西國際機場 (KIX) ➔ 鶴橋站（ESLEAD 飯店寄放行李）",
        desc: "推薦搭「JR 關空快速」一班車免換車直達 JR 鶴橋站（約 65 分鐘），或搭南海 Rapi:t 至難波轉千日前線（3 站即達鶴橋）",
        mapQuery: "ESLEAD HOTEL Osaka Tsuruhashi"
      },
      {
        time: "下午",
        name: "黑門市場 ＆ 黑門中川市場 (24H 生鮮超市)",
        desc: "從鶴橋搭千日前線僅 2 站（3 分鐘）至「日本橋站」！現烤海鮮、和牛串，並在黑門中川買冬季草莓回公寓大冰箱冰",
        mapQuery: "黒門中川"
      },
      {
        time: "晚上",
        name: "返回鶴橋站（大阪知名燒肉／韓式料理街）＆ 超商補給",
        desc: "ESLEAD 全室超過 40㎡ 附廚房與洗衣機，兩個家庭第一晚就能輕鬆洗衣服休息",
        mapQuery: "鶴橋駅"
      }
    ]
  },
  {
    day: 2,
    date: "1/17 (日)",
    city: "京都・大阪",
    title: "One Day Tour：勝尾寺・嵐山・清水寺 ＋ 道頓堀",
    stay: "✅ 已訂妥：ESLEAD HOTEL Osaka Tsuruhashi（第 2 晚）",
    highlight: "從難波／日本橋集合搭一日遊專車（鶴橋搭千日前線 5 分鐘直達集合區），輕鬆跑完勝尾寺達摩、嵐山與清水寺，晚上逛道頓堀！",
    note: "勝尾寺在箕面山區，1 月氣溫比市區低 3–4°C，記得幫 5 位小朋友戴毛帽與手套。",
    stops: [
      {
        time: "上午",
        name: "勝尾寺（滿山滿谷求勝達摩不倒翁）",
        desc: "園區有超有趣的「6 色疊印紀念章明信片」尋寶活動，6～10 歲小朋友邊走邊蓋章超開心！",
        mapQuery: "勝尾寺"
      },
      {
        time: "中午",
        name: "京都 嵐山（渡月橋・竹林小徑）",
        desc: "散步渡月橋與嵐山大街，品嚐熱騰騰湯葉可樂餅、豆腐料理與烤糰子",
        mapQuery: "嵐山 渡月橋"
      },
      {
        time: "下午",
        name: "清水寺 ＆ 二三年坂",
        desc: "世界遺產清水舞台遠眺京都市景，逛石坂老街買京都伴手禮",
        mapQuery: "清水寺"
      },
      {
        time: "晚上",
        name: "道頓堀逛街 ➔ 千日前線 5 分鐘回鶴橋飯店",
        desc: "拍固力果跑跑人、吃章魚燒；回程從「難波站」搭千日前線 3 站（5 分鐘）直達鶴橋站！",
        mapQuery: "道頓堀 グリコサイン"
      }
    ]
  },
  {
    day: 3,
    date: "1/18 (一)",
    city: "大阪",
    title: "心齋橋親子放電日（寶可夢餐廳・中心・扭蛋）",
    stay: "✅ 已訂妥：ESLEAD HOTEL Osaka Tsuruhashi（第 3 晚）",
    highlight: "6～10 歲小朋友最愛的一天！大丸心齋橋 9F 寶可夢中心與餐廳、PARCO 動漫層與大型扭蛋店全在室內不怕冷。",
    note: "⏰ 務必設鬧鐘：2026/12/18 台灣時間 17:00 準時上網搶 1/18 寶可夢咖啡廳（建議分 4人＋5人 兩帳號同時訂）！",
    stops: [
      {
        time: "上午 / 中午",
        name: "大丸心齋橋 9F：寶可夢中心 DX ＆ 寶可夢餐廳",
        desc: "從鶴橋搭千日前線至難波（或長堀鶴見綠地線）即達心齋橋！享用皮卡丘餐點與主廚皮卡丘見面會",
        mapQuery: "ポケモンカフェ 大阪・心斎橋"
      },
      {
        time: "下午",
        name: "心齋橋 PARCO ＆ ガシャポンのデパート扭蛋森林",
        desc: "6F 有吉伊卡哇、橡子共和國、樂高店，還有數百台扭蛋機讓 5 個孩子一次扭個過癮",
        mapQuery: "心斎橋PARCO"
      },
      {
        time: "晚上",
        name: "心齋橋商店街採買 ＆ 回 ESLEAD 整理大行李",
        desc: "今晚在 ESLEAD 把衣服洗烘乾淨、行李打包好，隔天早上前往新大阪搭新幹線去名古屋",
        mapQuery: "ESLEAD HOTEL Osaka Tsuruhashi"
      }
    ]
  },
  {
    day: 4,
    date: "1/19 (二)",
    city: "大阪 ➔ 名古屋",
    title: "新幹線 50 分鐘抵名古屋！名古屋城・味噌豬排・綠洲21",
    stay: "🏨 名古屋第 1 晚（19 間實惠住宿請見「住宿＆地圖」分頁）",
    highlight: "從鶴橋前往新大阪轉乘東海道新幹線 Nozomi 號，50 分鐘抵達 JR 名古屋站！寄放行李後逛名古屋城、吃矢場味噌豬排、看綠洲21夜景。",
    note: "鶴橋 ➔ 新大阪走法：搭地鐵千日前線至難波轉御堂筋線直達「新大阪」（或搭 JR 大阪環狀線至大阪轉 JR 京都線 1 站即達新大阪，約 22 分鐘）。",
    stops: [
      {
        time: "上午",
        name: "鶴橋 ➔ 新大阪 ➔ JR 名古屋站（新幹線 50 分鐘）",
        desc: "抵達 JR 名古屋站後，先走去名古屋站周邊飯店寄放行李（住太閤通口走路僅 3–8 分鐘超輕鬆！）",
        mapQuery: "JR名古屋駅"
      },
      {
        time: "中午前",
        name: "名古屋城（本丸御殿金箔壁畫 ＆ 屋頂金鯱）",
        desc: "日本三大名城之一，金碧輝煌的本丸御殿非常壯觀，戶外廣場平坦寬闊",
        mapQuery: "名古屋城"
      },
      {
        time: "午餐",
        name: "🍽️ 矢場味噌豬排（矢場とん 名古屋城金鯱橫丁店）",
        desc: "走出名古屋城正門就是「金鯱橫丁」！必點鐵板味噌豬排，白飯可免費續碗超適合發育期小朋友",
        mapQuery: "矢場とん 名古屋城金シャチ横丁店"
      },
      {
        time: "傍晚 / 晚上",
        name: "綠洲21（Oasis 21 水之宇宙船）＆ 電視塔夜景",
        desc: "免費登上玻璃屋頂步道欣賞點燈美景，回飯店路上順路逛超商買宵夜點心",
        mapQuery: "オアシス21"
      }
    ]
  },
  {
    day: 5,
    date: "1/20 (三)",
    city: "岐阜・名古屋",
    title: "牧歌之里（冰雪樂園玩雪盆・雪上泛舟・動物互動）",
    stay: "🏨 名古屋第 2 晚",
    highlight: "前往岐阜縣蛭野高原「牧歌之里」玩雪一整天！長距離雪盆滑道、雪地橡皮艇泛舟對 6～10 歲孩子來說好玩又安全。",
    note: "一日遊巴士多在「名古屋站太閤通口（新幹線口）」集合出發，住在名古屋站太閤通口／太閤通站旁早上可以多睡 20 分鐘！",
    stops: [
      {
        time: "08:00 前後",
        name: "JR 名古屋站太閤通口 集合出發",
        desc: "出發前可在飯店 1 樓或順路超商買熱飲與飯糰在車上補充體力（車程約 2 小時）",
        mapQuery: "名古屋駅 太閤通口"
      },
      {
        time: "10:15 – 15:30",
        name: "❄️ 牧歌之里（ひるがの高原 牧歌の里）",
        desc: "打雪仗、堆雪人、滑雪盆、雪上泛舟，園內有熱呼呼澤西牛乳火鍋與溫泉「牧華」",
        mapQuery: "ひるがの高原 牧歌の里"
      },
      {
        time: "18:00 前後",
        name: "返回名古屋站 ＆ 地下街晚餐（手羽先炸雞翅／棊子麵）",
        desc: "在太閤通口地下街「エスカ ESCA」吃名古屋名物，走幾分鐘就回飯店泡澡休息",
        mapQuery: "エスカ地下街 名古屋"
      }
    ]
  },
  {
    day: 6,
    date: "1/21 (四)",
    city: "長久手・名古屋",
    title: "吉卜力公園（大倉庫・魔女之谷・龍貓森林）",
    stay: "🏨 名古屋第 3 晚",
    highlight: "走進宮崎駿動畫世界！6～10 歲正是最有共鳴的年紀：吉卜力大倉庫兒童街與貓巴士、魔女之谷霍爾移動城堡與旋轉木馬。",
    note: "🎫 2027 年 1 月門票已於 11/10 開賣！小學生買兒童票（半價）超划算，記得留意「大倉庫」指定入場時間。",
    stops: [
      {
        time: "08:30",
        name: "名古屋站 ➔ 愛・地球博記念公園（吉卜力公園）",
        desc: "① 名鐵巴士中心搭直達巴士免換車；或 ② 搭地鐵東山線至「藤が丘」轉乘日本少見的磁浮列車 Linimo！",
        mapQuery: "愛・地球博記念公園駅"
      },
      {
        time: "全日",
        name: "🌱 吉卜力公園暢遊",
        desc: "吉卜力大倉庫全室內溫暖舒適；魔女之谷「琪琪麵包店」現烤麵包記得排隊買來當點心",
        mapQuery: "ジブリパーク"
      },
      {
        time: "晚上",
        name: "返回名古屋市區晚餐（備長炭烤鰻魚飯三吃）",
        desc: "推薦名古屋站或榮商圈享用香脆鰻魚飯三吃（ひつまぶし）",
        mapQuery: "名古屋駅"
      }
    ]
  },
  {
    day: 7,
    date: "1/22 (五)",
    city: "名古屋",
    title: "花車本店果醬吐司 ➔ 名古屋海洋博物館 ➔ 榮商圈逛街",
    stay: "🏨 名古屋第 4 晚",
    highlight: "早上吃名古屋名店「KAKO 花車本店」四色果醬鮮奶油紅豆吐司，白天去名古屋港開船模擬＆看破冰船，傍晚榮商圈大採購！",
    note: "KAKO 花車本店座位較溫馨，9 人建議開店 07:00 去或分兩桌（走路 3 分鐘另有座位較多的 KAKO 柳橋店）。",
    stops: [
      {
        time: "早餐",
        name: "🍞 コーヒーハウス かこ 花車本店（Coffee House KAKO）",
        desc: "從名古屋站步行約 9 分鐘（國際中心站走 4 分鐘）！招牌四色自家製水果果醬＋紅豆鮮奶油厚片吐司",
        mapQuery: "コーヒーハウス かこ 花車本店"
      },
      {
        time: "上午 / 下午",
        name: "⚓ 名古屋海洋博物館 ＆ 南極觀測船富士號（名古屋港）",
        desc: "地鐵「名古屋港站」出站即達！6～10 歲小孩超愛大型操船模擬器與登上真實破冰船探險（隔壁就是水族館）",
        mapQuery: "名古屋海洋博物館"
      },
      {
        time: "傍晚 / 晚上",
        name: "🛍️ 市區逛街（榮商圈 Sakae：松坂屋・PARCO・唐吉訶德）",
        desc: "從名古屋港搭地鐵直達「榮站」，採買蝦餅伴手禮、藥妝與小朋友禮物",
        mapQuery: "栄駅 名古屋"
      }
    ]
  },
  {
    day: 8,
    date: "1/23 (六)",
    city: "名古屋 ➔ 台灣",
    title: "名古屋市科學館（世界最大星象儀）➔ 中部國際機場返台",
    stay: "溫暖的家",
    highlight: "小學生免門票的科學天堂！7 層樓互動科學實驗＋龍捲風＆放電秀讓 6～10 歲孩子玩翻，下午搭名鐵 μ-SKY 28 分鐘直達機場！",
    note: "中部國際機場第 1 航廈 4F 超好逛，還能近距離看飛機起降，建議提早 2.5–3 小時到機場慢慢逛。",
    stops: [
      {
        time: "上午",
        name: "🔬 名古屋市科學館（伏見站步行 5 分鐘）",
        desc: "小學生以下展示室與星象儀「免費」！（大人也僅 ¥400–¥800），必看 9 公尺人工龍捲風與極寒實驗室",
        mapQuery: "名古屋市科学館"
      },
      {
        time: "下午",
        name: "名鐵名古屋站 ➔ 中部國際機場 (NGO) ➔ 平安返台",
        desc: "回名古屋站領行李，搭乘全車對號座「名鐵 μ-SKY 特急」最快 28 分鐘直達航廈",
        mapQuery: "中部国際空港 セントレア"
      }
    ]
  }
];

// ==================== 名古屋 19 間符合條件實惠住宿 ＋ 大阪 1 間已訂妥（共 20 間） ====================
const HOTELS_DATA = [
  // -------------------- ZONE A: 名古屋站・太閤通口／太閤通站／龜島站（共 10 間） --------------------
  {
    id: "comfort",
    recOrder: 1,
    city: "nagoya",
    zone: "taiko",
    category: "hotel",
    minPriceYen: 22000,
    primaryWalkMin: 5,
    rankBadge: "🥇 第 1 推｜含 9 人免費早餐＋新幹線口平路 5 分鐘",
    name: "① Comfort Hotel 名古屋新幹線口",
    jpName: "コンフォートホテル名古屋新幹線口",
    priceRange: "約 ¥22,000–¥30,000 / 晚（約台幣 4,700–6,400 元包 9 人含早！）",
    primaryStation: "🥇 最近優先：JR 名古屋站【太閤通口（西口）】步行 5 分鐘（380m）",
    secondaryStation: "🥈 次近地鐵：東山線【龜島站 3號口】西北走 9 分 ・ 櫻通線【太閤通站 2號口】西南走 10 分",
    stationInfo: "🥇JR名古屋站太閤通口走5分 ｜ 🥈龜島站走9分・太閤通站走10分",
    roomPlan: "照「4大＋2小算佔床＝6人計費」：訂 3 間雙床房（共 6 張 123cm 床，可併成大床）＋ 3 位小學生免費同床！享 3 間獨立衛浴",
    kidRule: "小學 6 年級（12歲）以下同床免費（1床1名），且同床小學生也免費吃自助早餐！",
    konbiniRoute: "出太閤通口順路先經「Lawson 名駅太閤通口店」，飯店斜對面步行 1 分鐘（80m）就是 24H「7-Eleven 名古屋則武1丁目店」與「FamilyMart」！",
    walkSteps: {
      from: "JR名古屋站 太閤通口",
      via: "🏪 7-11 ＆ Lawson (1分)",
      to: "🏨 Comfort 新幹線口 (共5分)"
    },
    embedQuery: "コンフォートホテル名古屋新幹線口",
    walkMapUrl: "https://www.google.com/maps/dir/?api=1&origin=JR名古屋駅太閤通口&destination=コンフォートホテル名古屋新幹線口&waypoints=セブンイレブン名古屋則武1丁目店&travelmode=walking",
    bestAppTip: "首推「飯店日本官網（免費會員現折）」或「12/4 樂天旅遊 Super SALE」，比國際網含早更便宜！",
    links: {
      google: "https://www.google.com/travel/hotels?q=Comfort+Hotel+Nagoya+Shinkansenguchi&hl=zh-TW",
      official: "https://www.choice-hotels.jp/hotel/nagoyashinkansenguchi/",
      rakuten: "https://travel.rakuten.co.jp/HOTEL/176905/176905.html",
      agoda: "https://www.agoda.com/zh-tw/search?city=13740&textToSearch=Comfort%20Hotel%20Nagoya%20Shinkansenguchi",
      trip: "https://tw.trip.com/hotels/list?city=360&keyword=Comfort%20Hotel%20Nagoya%20Shinkansenguchi"
    }
  },
  {
    id: "chisun",
    recOrder: 2,
    city: "nagoya",
    zone: "taiko",
    category: "hotel",
    minPriceYen: 16000,
    primaryWalkMin: 4,
    rankBadge: "💸 極致平價王｜太閤通口 4 分＋兒童上下舖房型",
    name: "② Chisun Inn 名古屋（チサンイン名古屋）",
    jpName: "チサンイン名古屋",
    priceRange: "約 ¥16,000–¥25,000 / 晚（約台幣 3,400–5,300 元 / 3間超殺價！）",
    primaryStation: "🥇 最近優先：JR 名古屋站【太閤通口】步行 4 分鐘（320m，醒目橘色圓柱建築）",
    secondaryStation: "🥈 次近地鐵：東山線【龜島站 3號口】西北走 9 分 ・ 櫻通線【太閤通站 2號口】西南走 10 分",
    stationInfo: "🥇JR名古屋站太閤通口走4分 ｜ 🥈龜島站走9分・太閤通站走10分",
    roomPlan: "招牌「雙人床＋兒童上下舖（Standard Double + Bunk Bed）」孩子超愛！訂 3 間房輕鬆住滿 4大5小，總價常不到台幣 4 千多元！",
    kidRule: "小學生（12歲以下）不佔床免費同住！名古屋站旁預算最低、CP 值爆表的老牌連鎖",
    konbiniRoute: "出太閤通口往北走 3 分鐘，飯店斜對面步行 1 分鐘（70m）就是 24H「7-Eleven 名古屋則武1丁目店」與「Lawson」！",
    walkSteps: {
      from: "JR名古屋站 太閤通口",
      via: "🏪 斜對面 7-11 則武店 (1分)",
      to: "🏨 Chisun Inn 名古屋 (共4分)"
    },
    embedQuery: "チサンイン名古屋",
    walkMapUrl: "https://www.google.com/maps/dir/?api=1&origin=JR名古屋駅太閤通口&destination=チサンイン名古屋&waypoints=セブンイレブン名古屋則武1丁目店&travelmode=walking",
    bestAppTip: "用「Google Maps 飯店比價」點進 Agoda / Trip.com 或「樂天旅遊」常出現每間 ¥5,500 起的超狂早鳥價！",
    links: {
      google: "https://www.google.com/travel/hotels?q=Chisun+Inn+Nagoya&hl=zh-TW",
      official: "https://www.solarehotels.com/hotel/aichi/chisuninn-nagoya/",
      rakuten: "https://travel.rakuten.co.jp/HOTEL/14669/14669.html",
      agoda: "https://www.agoda.com/zh-tw/search?city=13740&textToSearch=Chisun%20Inn%20Nagoya",
      trip: "https://tw.trip.com/hotels/list?city=360&keyword=Chisun%20Inn%20Nagoya"
    }
  },
  {
    id: "toyoko-shinkansen",
    recOrder: 3,
    city: "nagoya",
    zone: "taiko",
    category: "hotel",
    minPriceYen: 19000,
    primaryWalkMin: 4,
    rankBadge: "🍙 國民省錢神店｜JR太閤通口 4 分・太閤通站 6 分＋免費早餐",
    name: "③ 東橫INN 名古屋站新幹線口",
    jpName: "東横INN名古屋駅新幹線口",
    priceRange: "約 ¥19,000–¥26,000 / 晚（約台幣 4,000–5,500 元包 9 人含早！）",
    primaryStation: "🥇 最近優先：JR 名古屋站【太閤通口】步行 4 分鐘（300m）",
    secondaryStation: "🥈 次近地鐵：櫻通線【太閤通站 2號口】沿大馬路西走 6 分鐘 ・ 東山線【龜島站】北走 10 分",
    stationInfo: "🥇JR名古屋站太閤通口走4分 ｜ 🥈地鐵太閤通站走6分",
    roomPlan: "訂 3 間雙床房（共 6 張床＝4大+2小佔床計費，另 3 位小學生免費同床），9 人全部享免費日式飯糰味噌湯早餐！",
    kidRule: "小學生（12歲以下）與大人同床免費（1床1名），且兒童早餐也完全免費！",
    konbiniRoute: "從太閤通口走回飯店順路 1 分鐘即經過「7-Eleven 名古屋椿町店」與「MiniStop」冰淇淋超商！",
    walkSteps: {
      from: "JR名古屋站 太閤通口",
      via: "🏪 7-11 椿町店 (順路1分)",
      to: "🏨 東橫INN 新幹線口 (共4分)"
    },
    embedQuery: "東横INN名古屋駅新幹線口",
    walkMapUrl: "https://www.google.com/maps/dir/?api=1&origin=JR名古屋駅太閤通口&destination=東横INN名古屋駅新幹線口&travelmode=walking",
    bestAppTip: "「東橫INN 官網」加入會員再享 5% 折扣且價格固定不亂漲，熱門日期建議提早卡位 3 間雙床房！",
    links: {
      google: "https://www.google.com/travel/hotels?q=Toyoko+Inn+Nagoya+Station+Shinkansen+Side&hl=zh-TW",
      official: "https://www.toyoko-inn.com/search/detail/00246/",
      rakuten: "https://travel.rakuten.co.jp/HOTEL/147551/147551.html",
      agoda: "https://www.agoda.com/zh-tw/search?city=13740&textToSearch=Toyoko%20Inn%20Nagoya%20Station%20Shinkansen",
      trip: "https://tw.trip.com/hotels/list?city=360&keyword=Toyoko%20Inn%20Nagoya%20Shinkansen"
    }
  },
  {
    id: "sotetsu-shinkansen",
    recOrder: 4,
    city: "nagoya",
    zone: "taiko",
    category: "hotel",
    minPriceYen: 21000,
    primaryWalkMin: 4,
    rankBadge: "🚪 有連通房互通！｜JR太閤通口 4 分・太閤通站 6 分",
    name: "④ 相鐵 Fresa Inn 名古屋站新幹線口",
    jpName: "相鉄フレッサイン 名古屋駅新幹線口",
    priceRange: "約 ¥21,000–¥31,000 / 晚（約台幣 4,500–6,600 元 / 2–3間合計）",
    primaryStation: "🥇 最近優先：JR 名古屋站【太閤通口】步行 4 分鐘（300m）",
    secondaryStation: "🥈 次近地鐵：櫻通線【太閤通站 2號口】西走 6 分鐘 ・ 近鐵【米野站】南走 8 分鐘",
    stationInfo: "🥇JR名古屋站太閤通口走4分 ｜ 🥈地鐵太閤通站走6分",
    roomPlan: "獨家亮點：設有「連通房（Connecting Room，兩間房室內開門互通＋雙衛浴）」！兩家人小朋友串門子超方便又保有各自衛浴",
    kidRule: "小學生（12歲以下）同床免費（1床1名），全館搭載良水工房淨水系統與 Serta 名床",
    konbiniRoute: "飯店隔壁步行 1 分鐘就是「7-Eleven（大和魯內1F）」與正對面「Lawson 椿町店」，機能滿分！",
    walkSteps: {
      from: "JR名古屋站 太閤通口",
      via: "🏪 隔壁 7-11 ＆ Lawson (1分)",
      to: "🏨 相鐵 Fresa 新幹線口 (共4分)"
    },
    embedQuery: "相鉄フレッサイン 名古屋駅新幹線口",
    walkMapUrl: "https://www.google.com/maps/dir/?api=1&origin=JR名古屋駅太閤通口&destination=相鉄フレッサイン名古屋駅新幹線口&travelmode=walking",
    bestAppTip: "想訂「連通房」建議先看「相鐵官網」或「樂天旅遊／Jalan」連通房確約方案，一般雙床用 Google 比價最甜！",
    links: {
      google: "https://www.google.com/travel/hotels?q=Sotetsu+Fresa+Inn+Nagoya+Shinkansenguchi&hl=zh-TW",
      official: "https://sotetsu-hotels.com/fresa-inn/nagoya-shinkansenguchi/",
      rakuten: "https://travel.rakuten.co.jp/HOTEL/177069/177069.html",
      agoda: "https://www.agoda.com/zh-tw/search?city=13740&textToSearch=Sotetsu%20Fresa%20Inn%20Nagoya-Shinkansenguchi",
      trip: "https://tw.trip.com/hotels/list?city=360&keyword=Sotetsu%20Fresa%20Inn%20Nagoya%20Shinkansenguchi"
    }
  },
  {
    id: "daiwa-shinkansen",
    recOrder: 5,
    city: "nagoya",
    zone: "taiko",
    category: "hotel",
    minPriceYen: 24000,
    primaryWalkMin: 3,
    rankBadge: "⚡ 離新幹線口最近僅 3 分鐘｜拖大行李＋5小孩最輕鬆",
    name: "⑤ Daiwa Roynet Hotel 名古屋新幹線口",
    jpName: "ダイワロイネットホテル名古屋新幹線口",
    priceRange: "約 ¥24,000–¥35,000 / 晚（約台幣 5,100–7,400 元 / 2間合計）",
    primaryStation: "🥇 最近優先：JR 名古屋站【太閤通口】步行僅 3 分鐘（220m，Bic Camera 旁！）",
    secondaryStation: "🥈 次近地鐵：東山線【龜島站 3號口】西北走 9 分 ・ 櫻通線【太閤通站 2號口】西南走 9 分",
    stationInfo: "🥇JR名古屋站太閤通口走3分 ｜ 🥈龜島站走9分・太閤通站走9分",
    roomPlan: "訂 2 間（雙床房＋加床三人房，共 5 張床＝僅 1 小算佔床，4 小免費同床）或 3 間雙床房，價格比太閤通口館更親民！",
    kidRule: "小學生（12歲未滿）每張床可免費同睡 1 名！Day 5 去牧歌之里巴士集合下樓 2 分鐘就到",
    konbiniRoute: "走出太閤通口 1 分鐘順路即經過「Lawson 名駅太閤通口店」與「7-Eleven」，買早餐零食零繞路！",
    walkSteps: {
      from: "JR名古屋站 太閤通口",
      via: "🏪 Lawson ＆ 7-11 (順路1分)",
      to: "🏨 大和魯內新幹線口 (共3分)"
    },
    embedQuery: "ダイワロイネットホテル名古屋新幹線口",
    walkMapUrl: "https://www.google.com/maps/dir/?api=1&origin=JR名古屋駅太閤通口&destination=ダイワロイネットホテル名古屋新幹線口&travelmode=walking",
    bestAppTip: "用「Travelko トラベルコ」搜日本樂天／Jalan 常比國際網便宜 10%–15%！",
    links: {
      google: "https://www.google.com/travel/hotels?q=Daiwa+Roynet+Hotel+Nagoya+Shinkansenguchi&hl=zh-TW",
      official: "https://www.daiwaroynet.jp/nagoya-shinkansenguchi/",
      rakuten: "https://travel.rakuten.co.jp/HOTEL/106198/106198.html",
      agoda: "https://www.agoda.com/zh-tw/search?city=13740&textToSearch=Daiwa%20Roynet%20Hotel%20Nagoya-Shinkansenguchi",
      trip: "https://tw.trip.com/hotels/list?city=360&keyword=Daiwa%20Roynet%20Nagoya%20Shinkansenguchi"
    }
  },
  {
    id: "daiwa-taiko",
    recOrder: 6,
    city: "nagoya",
    zone: "taiko",
    category: "hotel",
    minPriceYen: 26000,
    primaryWalkMin: 4,
    rankBadge: "🛁 1樓直通 7-11＋全室日式乾濕分離浴缸｜太閤通口 4 分",
    name: "⑥ Daiwa Roynet Hotel 名古屋太閤通口",
    jpName: "ダイワロイネットホテル名古屋太閤通口",
    priceRange: "約 ¥26,000–¥38,000 / 晚（約台幣 5,500–8,000 元 / 2間合計）",
    primaryStation: "🥇 最近優先：JR 名古屋站【太閤通口】步行 4 分鐘（280m）",
    secondaryStation: "🥈 次近地鐵：櫻通線【太閤通站 2號口】沿大馬路西走 7 分鐘 ・ 近鐵【米野站】南走 9 分",
    stationInfo: "🥇JR名古屋站太閤通口走4分 ｜ 🥈地鐵太閤通站走7分",
    roomPlan: "訂 2 間：1 間標準雙床房（2床＝2大+2小免費）＋ 1 間 Deluxe Twin 三人房（3床＝2大+1小計費+2小免費），僅需 1 小算佔床！",
    kidRule: "小學生（12歲未滿）每張床可免費同睡 1 名！全室 21㎡ 以上、浴室有獨立洗身體區幫小孩洗澡超方便",
    konbiniRoute: "飯店「正 1 樓直接併設 7-Eleven」（室內通道免吹冷風），過馬路對面還有「Lawson 椿町店」與「FamilyMart」！",
    walkSteps: {
      from: "JR名古屋站 太閤通口",
      via: "🏪 飯店 1F 室內直通 7-11",
      to: "🏨 大和魯內太閤通口 (共4分)"
    },
    embedQuery: "ダイワロイネットホテル名古屋太閤通口",
    walkMapUrl: "https://www.google.com/maps/dir/?api=1&origin=JR名古屋駅太閤通口&destination=ダイワロイネットホテル名古屋太閤通口&travelmode=walking",
    bestAppTip: "推薦用「Travelko トラベルコ」與「12/4 樂天旅遊 Super SALE」領優惠券訂連泊方案！",
    links: {
      google: "https://www.google.com/travel/hotels?q=Daiwa+Roynet+Hotel+Nagoya+Taiko+dori+Side&hl=zh-TW",
      official: "https://www.daiwaroynet.jp/nagoya-taikodoriguchi/",
      rakuten: "https://travel.rakuten.co.jp/HOTEL/153417/153417.html",
      agoda: "https://www.agoda.com/zh-tw/daiwa-roynet-hotel-nagoya-taiko-dori-side/hotel/nagoya-jp.html",
      trip: "https://tw.trip.com/hotels/list?city=360&keyword=Daiwa%20Roynet%20Hotel%20Nagoya%20Taiko"
    }
  },
  {
    id: "richmond-shinkansen",
    recOrder: 7,
    city: "nagoya",
    zone: "taiko",
    category: "hotel",
    minPriceYen: 24000,
    primaryWalkMin: 5,
    rankBadge: "⭐ 4.5高分親子口碑｜龜島站 5 分・JR太閤通口直走 7 分",
    name: "⑦ Richmond Hotel 名古屋新幹線口",
    jpName: "リッチモンドホテル名古屋新幹線口",
    priceRange: "約 ¥24,000–¥34,000 / 晚（約台幣 5,100–7,200 元 / 2–3間合計）",
    primaryStation: "🥇 最近優先：地鐵東山線【龜島站 3號出口】步行 5 分鐘（380m，1站直達名古屋站/榮站）",
    secondaryStation: "🥈 次近大站：JR 名古屋站【太閤通口】沿新幹線直走 7 分鐘 ・ 櫻通線【太閤通站】走 12 分",
    stationInfo: "🥇地鐵龜島站3號口走5分 ｜ 🥈JR名古屋站太閤通口走7分",
    roomPlan: "訂 3 間雙床房（6床＝4大+2小佔床＋3小免費同床）或 2 間雙床＋1 間單人，全室「浴廁完全三分離」高質感新穎房型！",
    kidRule: "小學生以下同床免費（雙床房最多免費帶 2 名小學生），贈送兒童專屬盥洗包與繪本借閱",
    konbiniRoute: "從 JR 太閤通口沿新幹線往北走回飯店，順路經過「7-Eleven 名古屋則武1丁目店」與「Daily Yamazaki」現烤麵包超商！",
    walkSteps: {
      from: "龜島站(5分) / JR太閤通口(7分)",
      via: "🏪 7-11 ＆ Daily超商 (順路)",
      to: "🏨 Richmond 新幹線口"
    },
    embedQuery: "リッチモンドホテル名古屋新幹線口",
    walkMapUrl: "https://www.google.com/maps/dir/?api=1&origin=JR名古屋駅太閤通口&destination=リッチモンドホテル名古屋新幹線口&travelmode=walking",
    bestAppTip: "日本「Jalan / 樂天旅遊」評價高達 4.5 分，搭 12/4 樂天大促領券入手超划算！",
    links: {
      google: "https://www.google.com/travel/hotels?q=Richmond+Hotel+Nagoya+Shinkansenguchi&hl=zh-TW",
      official: "https://richmondhotel.jp/nagoya-shinkansenguchi/",
      rakuten: "https://travel.rakuten.co.jp/HOTEL/167365/167365.html",
      agoda: "https://www.agoda.com/zh-tw/search?city=13740&textToSearch=Richmond%20Hotel%20Nagoya%20Shinkansenguchi",
      trip: "https://tw.trip.com/hotels/list?city=360&keyword=Richmond%20Hotel%20Nagoya%20Shinkansenguchi"
    }
  },

  // -------------------- ZONE B: 名古屋站・櫻通口／國際中心站／名駅南（共 5 間） --------------------
  {
    id: "vessel-campana",
    recOrder: 8,
    city: "nagoya",
    zone: "sakura",
    category: "hotel",
    minPriceYen: 24000,
    primaryWalkMin: 4,
    rankBadge: "🥈 舒適 CP 值王｜2 間房搞定＋桑拿大浴場＋脫鞋木地板",
    name: "⑧ Vessel Hotel Campana 名古屋",
    jpName: "ベッセルホテルカンパーナ名古屋",
    priceRange: "約 ¥24,000–¥35,000 / 晚（約台幣 5,100–7,400 元 / 2間合計）",
    primaryStation: "🥇 最近優先：地鐵東山線・櫻通線【名古屋站 1號出口】步行 4 分鐘（JR櫻通口走 9 分）",
    secondaryStation: "🥈 次近地鐵：東山線【龜島站 4號口】西走 8 分鐘 ・ 櫻通線【國際中心站】東南走 10 分鐘",
    stationInfo: "🥇地鐵名古屋站1號口走4分 ｜ 🥈龜島站走8分・國際中心站走10分",
    roomPlan: "訂 2 間即可：1 間雙床房（140cm床×2，付2人費）＋ 1 間三人房（付3人費＝僅1小算佔床），其餘 4 位 6–10 歲小孩全部免費！",
    kidRule: "18 歲以下與父母同床一律免費，且不限同床人數！房內脫鞋木地板＋大浴場泡湯超解乏",
    konbiniRoute: "從地鐵 1 號出口往北走回飯店的正順路上，步行 1–2 分鐘即經過「7-Eleven 名古屋名駅2丁目店」與「Lawson」！",
    walkSteps: {
      from: "地鐵名古屋站 1號出口",
      via: "🏪 7-11 ＆ Lawson 名駅2丁目",
      to: "🏨 Vessel Campana (共4分)"
    },
    embedQuery: "ベッセルホテルカンパーナ名古屋",
    walkMapUrl: "https://www.google.com/maps/dir/?api=1&origin=名古屋駅1番出口&destination=ベッセルホテルカンパーナ名古屋&waypoints=セブンイレブン名古屋名駅2丁目店&travelmode=walking",
    bestAppTip: "強烈推薦「Vessel 日本官網免費會員」：直接選『小學生添い寝 ¥0』不會被誤算大人價，再送 1,000 點現折 ¥1,000！",
    links: {
      google: "https://www.google.com/travel/hotels?q=Vessel+Hotel+Campana+Nagoya&hl=zh-TW",
      official: "https://www.vessel-hotel.jp/campana/nagoya/",
      rakuten: "https://travel.rakuten.co.jp/HOTEL/167499/167499.html",
      agoda: "https://www.agoda.com/zh-tw/vessel-hotel-campana-nagoya/hotel/nagoya-jp.html",
      trip: "https://tw.trip.com/hotels/list?city=360&keyword=Vessel%20Hotel%20Campana%20Nagoya"
    }
  },
  {
    id: "cypress-ekimae",
    recOrder: 9,
    city: "nagoya",
    zone: "sakura",
    category: "hotel",
    minPriceYen: 21000,
    primaryWalkMin: 3,
    rankBadge: "🚉 地鐵出口 3 分・JR櫻通口 5 分｜隔壁就是超商＋有多人房",
    name: "⑨ Cypress Hotel 名古屋駅前",
    jpName: "サイプレスホテル名古屋駅前",
    priceRange: "約 ¥21,000–¥31,000 / 晚（約台幣 4,500–6,600 元 / 2–3間合計）",
    primaryStation: "🥇 最近優先：地鐵【名古屋站 1號/10號口】步行 3 分鐘（JR櫻通口步行 5 分鐘）",
    secondaryStation: "🥈 次近地鐵：東山線【龜島站 4號口】西北走 8 分 ・ 櫻通線【國際中心站】東南走 9 分",
    stationInfo: "🥇地鐵名古屋站1號口走3分(JR櫻通口5分) ｜ 🥈龜島站走8分・國際中心站走9分",
    roomPlan: "擁有寬敞雙床房與三人／四人房型！可訂 2 間三人房（共 6 床＝4大+2小佔床，3小免費同床）或 3 間雙床房",
    kidRule: "小學生（12歲以下）不佔床免費同住，正處名鐵／JR／地鐵交匯核心卻有超實惠房價",
    konbiniRoute: "飯店旁邊步行 1 分鐘內緊鄰「Lawson 名駅二丁目店」與「7-Eleven」，買宵夜牛奶下樓秒到！",
    walkSteps: {
      from: "地鐵名古屋站 1號口 (JR 5分)",
      via: "🏪 緊鄰 Lawson ＆ 7-11 (1分)",
      to: "🏨 Cypress 名古屋駅前 (共3分)"
    },
    embedQuery: "サイプレスホテル名古屋駅前",
    walkMapUrl: "https://www.google.com/maps/dir/?api=1&origin=JR名古屋駅桜通口&destination=サイプレスホテル名古屋駅前&travelmode=walking",
    bestAppTip: "日本「樂天旅遊／Jalan」早鳥連泊方案與「Google Maps 導流 Agoda」價格非常划算！",
    links: {
      google: "https://www.google.com/travel/hotels?q=Cypress+Hotel+Nagoya+eki+Mae&hl=zh-TW",
      official: "https://www.cypresshotels.jp/nagoya/",
      rakuten: "https://travel.rakuten.co.jp/HOTEL/8249/8249.html",
      agoda: "https://www.agoda.com/zh-tw/search?city=13740&textToSearch=Cypress%20Hotel%20Nagoya-eki%20Mae",
      trip: "https://tw.trip.com/hotels/list?city=360&keyword=Cypress%20Hotel%20Nagoya"
    }
  },
  {
    id: "sotetsu-sakura",
    recOrder: 10,
    city: "nagoya",
    zone: "sakura",
    category: "hotel",
    minPriceYen: 22000,
    primaryWalkMin: 4,
    rankBadge: "🍞 地下街出站 4 分＋近 KAKO 吐司｜有連通房雙家庭首選",
    name: "⑩ 相鐵 Fresa Inn 名古屋站櫻通口",
    jpName: "相鉄フレッサイン 名古屋駅桜通口",
    priceRange: "約 ¥22,000–¥32,000 / 晚（約台幣 4,700–6,800 元 / 2–3間合計）",
    primaryStation: "🥇 最近優先：地鐵【名古屋站 7號口 / Unimall U8出口】步行 4 分（JR櫻通口走 4 分）",
    secondaryStation: "🥈 次近地鐵：櫻通線【國際中心站 3號口】東走 5 分鐘（走去 Day 7 KAKO 花車本店僅 4 分鐘！）",
    stationInfo: "🥇名古屋站櫻通口/7號口走4分 ｜ 🥈地鐵國際中心站走5分",
    roomPlan: "可訂「連通房（Connecting Room，室內門互通）」或 3 間雙床房！下雨下雪全程走 Unimall 地下街到 U8 出口幾乎不淋雨",
    kidRule: "小學生（12歲以下）每床免費同睡 1 名，自助入住退房快速、大廳備品自由拿取超貼心",
    konbiniRoute: "從地下街出口走出來 1 分鐘就是「FamilyMart 名駅四丁目店」與「7-Eleven」，順路買完直接上樓！",
    walkSteps: {
      from: "名古屋站 櫻通口/U8出口",
      via: "🏪 全家 名駅四丁目店 (1分)",
      to: "🏨 相鐵 Fresa 櫻通口 (共4分)"
    },
    embedQuery: "相鉄フレッサイン 名古屋駅桜通口",
    walkMapUrl: "https://www.google.com/maps/dir/?api=1&origin=JR名古屋駅桜通口&destination=相鉄フレッサイン名古屋駅桜通口&travelmode=walking",
    bestAppTip: "去名鐵搭機場 μ-SKY 特急或去吉卜力巴士總站走路只要 4–5 分鐘，Google 比價常有好價！",
    links: {
      google: "https://www.google.com/travel/hotels?q=Sotetsu+Fresa+Inn+Nagoya+Sakuradoriguchi&hl=zh-TW",
      official: "https://sotetsu-hotels.com/fresa-inn/nagoya-sakuradoriguchi/",
      rakuten: "https://travel.rakuten.co.jp/HOTEL/168265/168265.html",
      agoda: "https://www.agoda.com/zh-tw/search?city=13740&textToSearch=Sotetsu%20Fresa%20Inn%20Nagoya-Sakuradoriguchi",
      trip: "https://tw.trip.com/hotels/list?city=360&keyword=Sotetsu%20Fresa%20Inn%20Nagoya%20Sakuradoriguchi"
    }
  },
  {
    id: "toyoko-sakura",
    recOrder: 11,
    city: "nagoya",
    zone: "sakura",
    category: "hotel",
    minPriceYen: 19500,
    primaryWalkMin: 4,
    rankBadge: "🧭 雙站正中間（名古屋站 5 分・國際中心站 4 分）＋含9人早餐",
    name: "⑪ 東橫INN 名古屋站櫻通口新館",
    jpName: "東横INN名古屋駅桜通口新館",
    priceRange: "約 ¥19,500–¥27,000 / 晚（約台幣 4,100–5,700 元包 9 人含早！）",
    primaryStation: "🥇 最近優先：地下街 Unimall 出口步行 4 分 ／ JR 名古屋站【櫻通口】步行 5 分鐘",
    secondaryStation: "🥈 次近地鐵：櫻通線【國際中心站 1號口】東走 4 分鐘（去名古屋城、榮商圈都超快！）",
    stationInfo: "🥇JR名古屋站櫻通口走5分 ｜ 🥈地鐵國際中心站1號口走4分",
    roomPlan: "2023 新穎館別！訂 3 間雙床房（共 6 床＝4大+2小佔床＋3小免費同床），含全體 9 人免費豐盛早餐！",
    kidRule: "小學生（12歲以下）同床完全免費＋早餐免費！新館設備新、插座多、花灑水壓強",
    konbiniRoute: "飯店巷口步行 1 分鐘即有「FamilyMart 名駅三丁目店」與「7-Eleven」，走地下街回飯店超溫暖！",
    walkSteps: {
      from: "JR名古屋站櫻通口 (5分)",
      via: "🏪 全家 ＆ 7-11 名駅3丁目 (1分)",
      to: "🏨 東橫INN 櫻通口新館"
    },
    embedQuery: "東横INN名古屋駅桜通口新館",
    walkMapUrl: "https://www.google.com/maps/dir/?api=1&origin=JR名古屋駅桜通口&destination=東横INN名古屋駅桜通口新館&travelmode=walking",
    bestAppTip: "「東橫INN 官網」會員價最穩最省，若新館滿房隔壁 1 分鐘還有『櫻通口本館』可一併查詢！",
    links: {
      google: "https://www.google.com/travel/hotels?q=Toyoko+Inn+Nagoya+Station+Sakura+dori+Side+New&hl=zh-TW",
      official: "https://www.toyoko-inn.com/search/detail/00092/",
      rakuten: "https://travel.rakuten.co.jp/HOTEL/187330/187330.html",
      agoda: "https://www.agoda.com/zh-tw/search?city=13740&textToSearch=Toyoko%20Inn%20Nagoya-eki%20Sakuradori-guchi%20Shinkan",
      trip: "https://tw.trip.com/hotels/list?city=360&keyword=Toyoko%20Inn%20Nagoya%20Sakura%20New"
    }
  },
  {
    id: "comfort-era",
    recOrder: 12,
    city: "nagoya",
    zone: "sakura",
    category: "hotel",
    minPriceYen: 20000,
    primaryWalkMin: 6,
    rankBadge: "✨ 2026年6月全新改裝開幕｜國際中心站 6 分・KAKO吐司 3 分",
    name: "⑫ Comfort Hotel ERA 名古屋名駅南",
    jpName: "コンフォートホテルERA名古屋名駅南",
    priceRange: "約 ¥20,000–¥29,000 / 晚（約台幣 4,200–6,200 元 / 3間雙床合計）",
    primaryStation: "🥇 最近地鐵：櫻通線【國際中心站 3號出口】步行 6 分鐘（走到 KAKO 花車本店僅 3 分鐘！）",
    secondaryStation: "🥈 次近大站：近鐵/名鐵【名古屋站】步行 8 分（JR廣小路口走 9 分）・東山線【伏見站】走 11 分",
    stationInfo: "🥇地鐵國際中心站3號口走6分 ｜ 🥈名鐵/近鐵名古屋站走8分(JR走9分)",
    roomPlan: "2026 年全新升級品牌 ERA！訂 3 間雙床房（4大+2小計費，3位小學生免費同床），大廳 Library Cafe 享免費迎賓甜點與飲品吧！",
    kidRule: "小學 6 年級（12歲）以下同床免費！去名鐵搭機場特急 μ-SKY 直走 8 分鐘就到",
    konbiniRoute: "飯店正對面過馬路 1 分鐘就有「Lawson」與「FamilyMart」，附近還有柳橋中央市場可逛！",
    walkSteps: {
      from: "國際中心站(6分) / 名古屋站(8分)",
      via: "🏪 正對面 Lawson ＆ 全家 (1分)",
      to: "🏨 Comfort ERA 名駅南"
    },
    embedQuery: "コンフォートホテルERA名古屋名駅南",
    walkMapUrl: "https://www.google.com/maps/dir/?api=1&origin=国際センター駅&destination=コンフォートホテルERA名古屋名駅南&travelmode=walking",
    bestAppTip: "2026 新改裝開幕常有促銷價，建議先比「Choice 飯店日本官網」與「樂天旅遊」！",
    links: {
      google: "https://www.google.com/travel/hotels?q=Comfort+Hotel+ERA+Nagoya+Meieki+Minami&hl=zh-TW",
      official: "https://www.choice-hotels.jp/era/nagoyameiekiminami/",
      rakuten: "https://travel.rakuten.co.jp/HOTEL/181242/181242.html",
      agoda: "https://www.agoda.com/zh-tw/search?city=13740&textToSearch=Comfort%20Hotel%20ERA%20Nagoya%20Meieki%20Minami",
      trip: "https://tw.trip.com/hotels/list?city=360&keyword=Comfort%20Hotel%20ERA%20Nagoya"
    }
  },

  // -------------------- ZONE C: 伏見（科學館）・榮商圈・久屋大通（共 4 間） --------------------
  {
    id: "vessel-sakae",
    recOrder: 13,
    city: "nagoya",
    zone: "sakae",
    category: "hotel",
    minPriceYen: 21000,
    primaryWalkMin: 2,
    rankBadge: "🏬 榮商圈第 1 推｜榮站 2 分・久屋大通站 3 分＋正1樓就是 7-11",
    name: "⑬ Vessel Inn 榮站前（名古屋榮）",
    jpName: "ベッセルイン栄駅前",
    priceRange: "約 ¥21,000–¥32,000 / 晚（約台幣 4,500–6,800 元 / 2間合計）",
    primaryStation: "🥇 最近優先：地鐵東山線・名城線【榮站 1號出口】步行 2 分鐘（140m）",
    secondaryStation: "🥈 次近地鐵：櫻通線・名城線【久屋大通站 4號口】北走 3 分鐘（搭櫻通線 5 分直達名古屋站/太閤通站！）",
    stationInfo: "🥇地鐵榮站1號口走2分 ｜ 🥈櫻通線久屋大通站4號口走3分",
    roomPlan: "訂 2 間房（雙床房＋三人房，共付 5 人費或 2 間三人房付 6 人費），6–10 歲小孩同床全部免費！",
    kidRule: "18 歲以下同床不限人數免費！下樓就能逛唐吉訶德、綠洲21與松坂屋寶可夢中心",
    konbiniRoute: "飯店建築「正 1 樓就是 7-Eleven 名古屋錦3丁目店（0分鐘直達）」！半夜買零食牛奶完全不用過馬路吹風！",
    walkSteps: {
      from: "地鐵榮站 1號出口",
      via: "🏪 飯店正 1F 就是 7-11 (0分)",
      to: "🏨 Vessel Inn 榮站前 (共2分)"
    },
    embedQuery: "ベッセルイン栄駅前",
    walkMapUrl: "https://www.google.com/maps/dir/?api=1&origin=栄駅1番出口&destination=ベッセルイン栄駅前&travelmode=walking",
    bestAppTip: "「Vessel 官網會員」或「Google Maps 導流 Agoda / Trip.com」最便宜（記得只輸入佔床人數比價）！",
    links: {
      google: "https://www.google.com/travel/hotels?q=Vessel+Inn+Sakae+Ekimae&hl=zh-TW",
      official: "https://www.vessel-hotel.jp/inn/sakae/",
      rakuten: "https://travel.rakuten.co.jp/HOTEL/167500/167500.html",
      agoda: "https://www.agoda.com/zh-tw/vessel-inn-sakae-ekimae/hotel/nagoya-jp.html",
      trip: "https://tw.trip.com/hotels/list?city=360&keyword=Vessel%20Inn%20Sakae"
    }
  },
  {
    id: "comfort-sakae",
    recOrder: 14,
    city: "nagoya",
    zone: "sakae",
    category: "hotel",
    minPriceYen: 19000,
    primaryWalkMin: 1,
    rankBadge: "⚡ 出站 60 秒秒到！｜榮站 1 分・久屋大通站 4 分＋1樓就是全家",
    name: "⑭ Comfort Inn 名古屋榮站前",
    jpName: "コンフォートイン名古屋栄駅前",
    priceRange: "約 ¥19,000–¥28,000 / 晚（約台幣 4,000–5,900 元 / 3間雙床合計）",
    primaryStation: "🥇 最近優先：地鐵東山線・名城線【榮站 2號出口】步行僅 1 分鐘（80m，出站即達！）",
    secondaryStation: "🥈 次近地鐵：櫻通線・名城線【久屋大通站 3號口】北走 4 分鐘（直通名古屋城站＆名古屋站）",
    stationInfo: "🥇地鐵榮站2號口走1分 ｜ 🥈櫻通線久屋大通站3號口走4分",
    roomPlan: "訂 3 間雙床房（4大+2小佔床計費，另 3 位小學生免費同床），1 月底寒流帶 5 個小孩出地鐵 1 分鐘進飯店超幸福！",
    kidRule: "小學 6 年級（12歲）以下同床免費！全館免費迎賓咖啡茶飲與衣物蒸氣機",
    konbiniRoute: "飯店「正 1 樓直接併設 FamilyMart 全家便利商店（0分鐘）」，部分訂房方案還送樓下全家購物券！",
    walkSteps: {
      from: "地鐵榮站 2號出口",
      via: "🏪 飯店正 1F 就是全家 (0分)",
      to: "🏨 Comfort Inn 榮站前 (1分)"
    },
    embedQuery: "コンフォートイン名古屋栄駅前",
    walkMapUrl: "https://www.google.com/maps/dir/?api=1&origin=栄駅2番出口&destination=コンフォートイン名古屋栄駅前&travelmode=walking",
    bestAppTip: "在「Choice 官網」或「Yahoo! / 一休 / 樂天」素泊方案超便宜，樓下就是全家買早餐超彈性！",
    links: {
      google: "https://www.google.com/travel/hotels?q=Comfort+Inn+Nagoya+Sakae+Ekimae&hl=zh-TW",
      official: "https://www.choice-hotels.jp/inn/nagoyasakae/",
      rakuten: "https://travel.rakuten.co.jp/HOTEL/188251/188251.html",
      agoda: "https://www.agoda.com/zh-tw/search?city=13740&textToSearch=Comfort%20Inn%20Nagoya%20Sakae%20Ekimae",
      trip: "https://tw.trip.com/hotels/list?city=360&keyword=Comfort%20Inn%20Nagoya%20Sakae"
    }
  },
  {
    id: "comfort-fushimi",
    recOrder: 15,
    city: "nagoya",
    zone: "sakae",
    category: "hotel",
    minPriceYen: 20000,
    primaryWalkMin: 4,
    rankBadge: "🔬 科學館散步 6 分鐘｜伏見站 4 分・榮站 7 分＋含9人免費早餐",
    name: "⑮ Comfort Hotel 名古屋伏見",
    jpName: "コンフォートホテル名古屋伏見",
    priceRange: "約 ¥20,000–¥29,000 / 晚（約台幣 4,200–6,200 元包 9 人含早！）",
    primaryStation: "🥇 最近優先：地鐵東山線・鶴舞線【伏見站 3號出口】步行 4 分鐘（名古屋站搭東山線僅 1 站！）",
    secondaryStation: "🥈 次近地鐵：東山線【榮站 8號口】東走 7 分鐘 ・ 櫻通線【丸之內站】北走 6 分鐘",
    stationInfo: "🥇地鐵伏見站3號口走4分 ｜ 🥈榮站走7分・丸之內站走6分",
    roomPlan: "訂 3 間雙床房（共 6 床＝4大+2小佔床＋3小免費同床），全體 9 人免費吃彩り自助早餐，Day 8 走路 6 分鐘就到名古屋市科學館！",
    kidRule: "小學 6 年級（12歲）以下同床免費＋免費早餐！位置剛好夾在名古屋站與榮商圈正中間",
    konbiniRoute: "出伏見站 3 號出口走回飯店順路 1 分鐘即經過「7-Eleven 名古屋錦2丁目店」與「FamilyMart」！",
    walkSteps: {
      from: "地鐵伏見站 3號出口",
      via: "🏪 7-11 ＆ 全家 錦2丁目 (1分)",
      to: "🏨 Comfort 名古屋伏見 (共4分)"
    },
    embedQuery: "コンフォートホテル名古屋伏見",
    walkMapUrl: "https://www.google.com/maps/dir/?api=1&origin=伏見駅3番出口&destination=コンフォートホテル名古屋伏見&travelmode=walking",
    bestAppTip: "比名古屋站分館房價再省約 10%，用「Choice 官網」或「12/4 樂天 Super SALE」最划算！",
    links: {
      google: "https://www.google.com/travel/hotels?q=Comfort+Hotel+Nagoya+Fushimi&hl=zh-TW",
      official: "https://www.choice-hotels.jp/hotel/nagoyafushimi/",
      rakuten: "https://travel.rakuten.co.jp/HOTEL/164855/164855.html",
      agoda: "https://www.agoda.com/zh-tw/search?city=13740&textToSearch=Comfort%20Hotel%20Nagoya%20Fushimi",
      trip: "https://tw.trip.com/hotels/list?city=360&keyword=Comfort%20Hotel%20Nagoya%20Fushimi"
    }
  },
  {
    id: "delstyle-nayabashi",
    recOrder: 16,
    city: "nagoya",
    zone: "sakae",
    category: "hotel",
    minPriceYen: 23000,
    primaryWalkMin: 7,
    rankBadge: "♨️ 大浴場＋連通房＋全室Airweave床墊｜伏見站 7 分・國際中心站 8 分",
    name: "⑯ DEL style 名古屋納屋橋 by Daiwa Roynet",
    jpName: "DEL style 名古屋納屋橋 by Daiwa Roynet Hotel",
    priceRange: "約 ¥23,000–¥35,000 / 晚（約台幣 4,900–7,400 元 / 2–3間合計）",
    primaryStation: "🥇 最近優先：地鐵東山線・鶴舞線【伏見站 6號/8號口】步行 7 分鐘（近科學館＆堀川運河）",
    secondaryStation: "🥈 次近地鐵：櫻通線【國際中心站 3號口】西北走 8 分鐘（走去 KAKO 花車本店約 6 分鐘！）",
    stationInfo: "🥇地鐵伏見站6號口走7分 ｜ 🥈地鐵國際中心站3號口走8分",
    roomPlan: "大和魯內旗下時尚親子飯店！有「確約連通房」與家庭三人房，全室乾濕分離衛浴＋女性/男性大浴場，質感超高房價卻很甜！",
    kidRule: "小學生（12歲未滿）每張床可免費同睡 1 名！對面還有 MEGA 唐吉訶德 UNY 納屋橋店（超市＋藥妝）",
    konbiniRoute: "飯店隔壁步行 1 分鐘就是「Lawson 納屋橋店」與「7-Eleven」，過馬路還有大型生鮮超市買大草莓超方便！",
    walkSteps: {
      from: "伏見站 6號/8號出口",
      via: "🏪 隔壁 Lawson ＆ 唐吉訶德超市",
      to: "🏨 DEL style 納屋橋 (共7分)"
    },
    embedQuery: "DEL style 名古屋納屋橋 by Daiwa Roynet Hotel",
    walkMapUrl: "https://www.google.com/maps/dir/?api=1&origin=伏見駅&destination=DEL+style+名古屋納屋橋&travelmode=walking",
    bestAppTip: "想逛超市買草莓＋泡大浴場大推這間！用「樂天旅遊／Jalan」或「Google 比價」常挖到驚喜特價！",
    links: {
      google: "https://www.google.com/travel/hotels?q=DEL+style+Nagoya+Nayabashi+by+Daiwa+Roynet+Hotel&hl=zh-TW",
      official: "https://www.daiwaroynet.jp/nayabashi/",
      rakuten: "https://travel.rakuten.co.jp/HOTEL/166257/166257.html",
      agoda: "https://www.agoda.com/zh-tw/search?city=13740&textToSearch=DEL%20style%20Nagoya-Nayabashi",
      trip: "https://tw.trip.com/hotels/list?city=360&keyword=DEL%20style%20Nagoya%20Nayabashi"
    }
  },

  // -------------------- ZONE D (also in Taiko): 公寓式飯店／獨棟包棟（附廚房洗衣機，共 3 間） --------------------
  {
    id: "grandbase",
    recOrder: 17,
    city: "nagoya",
    zone: "taiko",
    category: "apartment",
    minPriceYen: 27000,
    primaryWalkMin: 4,
    rankBadge: "🏡 平價大公寓首選｜太閤通站 4 分・JR名古屋站 8 分＋56㎡ 聚會大房",
    name: "⑰ GRAND BASE 名古屋駅西",
    jpName: "グランドベース名古屋駅西",
    priceRange: "約 ¥27,000–¥40,000 / 晚（約台幣 5,700–8,500 元 / 同棟2間合計）",
    primaryStation: "🥇 最近優先：地鐵櫻通線【太閤通站 2號出口】步行 4 分鐘（290m）",
    secondaryStation: "🥈 次近大站：JR 名古屋站【太閤通口】步行 8 分鐘 ・ 東山線【龜島站】北走 11 分鐘",
    stationInfo: "🥇地鐵太閤通站2號口走4分 ｜ 🥈JR名古屋站太閤通口走8分",
    roomPlan: "同棟訂 2 間：1 間「Deluxe B（56㎡・4張雙人床・上限8人）」＋ 1 間「Superior A（40㎡・上限4人）」，想跟大阪 ESLEAD 一樣有廚房洗衣機選這間！",
    kidRule: "公寓式按人數分攤極划算，晚上 9 個人可全部聚在 56㎡ 大客廳吃宵夜聊天，睡覺再回各自房間",
    konbiniRoute: "從名古屋站太閤通口走回飯店順路上，距離飯店步行 2 分鐘（180m）就有 24H「FamilyMart 中村竹橋町店」！",
    walkSteps: {
      from: "太閤通站(4分) / JR名古屋站(8分)",
      via: "🏪 全家 中村竹橋町店 (2分)",
      to: "🏡 GRAND BASE 駅西"
    },
    embedQuery: "グランドベース名古屋駅西",
    walkMapUrl: "https://www.google.com/maps/dir/?api=1&origin=太閤通駅2番出口&destination=グランドベース名古屋駅西&waypoints=ファミリーマート中村竹橋町店&travelmode=walking",
    bestAppTip: "無人公寓在「Booking.com 手機 App（Genius 會員＋手機限定價）」與「Google Maps 點進 Agoda」最便宜！",
    links: {
      google: "https://www.google.com/travel/hotels?q=GRAND+BASE+Nagoya+Ekinishi&hl=zh-TW",
      official: "https://booking.com/hotel/jp/grand-base-nagoyaeki-nishi.zh-tw.html",
      rakuten: "https://travel.rakuten.co.jp/HOTEL/179661/179661.html",
      agoda: "https://www.agoda.com/zh-tw/grand-base-nagoya-ekinishi/hotel/nagoya-jp.html",
      trip: "https://tw.trip.com/hotels/list?city=360&keyword=GRAND%20BASE%20Nagoya"
    }
  },
  {
    id: "samurai-house3",
    recOrder: 18,
    city: "nagoya",
    zone: "taiko",
    category: "apartment",
    minPriceYen: 42000,
    primaryWalkMin: 3,
    rankBadge: "🏯 1間獨棟包棟首選｜太閤通站 3 分・JR名古屋站 7 分（上限13人）",
    name: "⑱ SAMURAI HOUSE Ⅲ（獨棟包棟・一棟貸切）",
    jpName: "SAMURAI HOUSE Ⅲ",
    priceRange: "約 ¥42,000–¥58,000 / 晚（約台幣 8,900–12,300 元 / 9人獨棟全包）",
    primaryStation: "🥇 最近優先：地鐵櫻通線【太閤通站 3號出口】步行僅 3 分鐘（240m）",
    secondaryStation: "🥈 次近大站：JR 名古屋站【太閤通口】步行 7 分鐘 ・ 近鐵【米野站】步行 5 分鐘",
    stationInfo: "🥇地鐵太閤通站3號口走3分 ｜ 🥈JR名古屋站太閤通口走7分・米野站走5分",
    roomPlan: "真正「1 間全包」離名古屋站最近的獨棟別墅！多間獨立臥室＋多套衛浴廁所＋大廚房餐桌＋洗烘衣機，5 個小朋友跑跳也不怕吵到隔壁房客！",
    kidRule: "整棟包棟最多可住 12–13 人，若兩家人最重視同住一棟的歡樂感且離太閤通站＆JR超近，這間是首選（另有同系列 Ⅰ、Ⅱ 號館也在太閤通站旁）",
    konbiniRoute: "地鐵太閤通站出口與走回民宿順路上步行 2 分鐘即有「FamilyMart」與「7-Eleven」，附近還有大型超市 MaxValu 太閤店！",
    walkSteps: {
      from: "地鐵太閤通站 3號口 (3分)",
      via: "🏪 全家 ＆ 7-11 太閤通店 (2分)",
      to: "🏯 SAMURAI HOUSE Ⅲ"
    },
    embedQuery: "SAMURAI HOUSE 3 名古屋市中村区上米野町1-9",
    walkMapUrl: "https://www.google.com/maps/dir/?api=1&origin=太閤通駅3番出口&destination=名古屋市中村区上米野町1-9&travelmode=walking",
    bestAppTip: "獨棟房源全球僅此 1 棟，建議用「樂天旅遊 / Jalan / Travelko」與「Booking.com」同步比價並盡早卡位！",
    links: {
      google: "https://www.google.com/travel/hotels?q=SAMURAI+HOUSE+3+Nagoya&hl=zh-TW",
      official: "https://www.jalan.net/yad358810/",
      rakuten: "https://www.tour.ne.jp/j_hotel/48616/",
      agoda: "https://www.booking.com/hotel/jp/samurai-house-ii.zh-tw.html",
      trip: "https://tw.trip.com/hotels/list?city=360&keyword=SAMURAI%20HOUSE%20Nagoya"
    }
  },
  {
    id: "central-res",
    recOrder: 19,
    city: "nagoya",
    zone: "taiko",
    category: "apartment",
    minPriceYen: 38000,
    primaryWalkMin: 2,
    rankBadge: "🏠 120㎡ 整層包層備案｜地鐵中村公園站 2 分（有電梯）",
    name: "⑲ Central Nagoya Residence（整層 9 人貸切）",
    jpName: "Central Nagoya Residence",
    priceRange: "約 ¥38,000–¥52,000 / 晚（約台幣 8,000–11,000 元 / 9人整層）",
    primaryStation: "🥇 最近優先：地鐵東山線【中村公園站 2號出口】步行 2 分鐘（150m，搭東山線 7 分直達名古屋站）",
    secondaryStation: "🥈 次近地鐵：東山線【中村日赤站】東走 9 分鐘 ・ 【岩塚站】西走 11 分鐘",
    stationInfo: "🥇地鐵中村公園站2號口走2分 ｜ 🥈東山線中村日赤站走9分",
    roomPlan: "單一整層 120㎡ 住滿 9 人（3 間臥室共 5 張雙人床＋大餐桌＋廚房洗烘衣機），大樓有電梯免扛行李（惟僅 1 間浴室，CP 值以訂 2–3 間飯店更高）",
    kidRule: "整層包層上限 9 人，適合作為包層備用名單",
    konbiniRoute: "地鐵中村公園站出口旁步行 30 秒就有「FamilyMart 東山線中村公園駅店」與「7-Eleven 名古屋中村公園駅前店」！",
    walkSteps: {
      from: "地鐵中村公園站 2號口",
      via: "🏪 全家 ＆ 7-11 站前店 (30秒)",
      to: "🏠 Central Residence (共2分)"
    },
    embedQuery: "中村公園駅 名古屋",
    walkMapUrl: "https://www.google.com/maps/dir/?api=1&origin=中村公園駅&destination=ファミリーマート東山線中村公園駅店&travelmode=walking",
    bestAppTip: "包層務必先看「Central Nagoya 官網直訂」，直接免除 Airbnb / Booking 約 14% 平台服務費！",
    links: {
      google: "https://centralnagoya.site/ja/groups/",
      official: "https://centralnagoya.site/ja/groups/",
      rakuten: "https://www.booking.com/searchresults.zh-tw.html?ss=Central+Nagoya+Residence",
      agoda: "https://www.airbnb.com.tw/s/Nakamura-Ward--Nagoya/homes",
      trip: "https://centralnagoya.site/ja/groups/"
    }
  },

  // -------------------- OSAKA CONFIRMED --------------------
  {
    id: "osaka-eslead",
    recOrder: 20,
    city: "osaka",
    zone: "osaka",
    category: "confirmed",
    minPriceYen: 0,
    primaryWalkMin: 1,
    rankBadge: "✅ 大阪前 3 晚已訂妥（1/16–1/19）｜地鐵 1 分鐘大公寓",
    name: "✅ ESLEAD HOTEL Osaka Tsuruhashi（大阪鶴橋）",
    jpName: "エスリードホテル大阪鶴橋",
    priceRange: "✅ 已完成預訂（共 3 晚：1/16、1/17、1/18）",
    primaryStation: "🥇 最近優先：地鐵千日前線【鶴橋站 4號出口】步行 1 分鐘（110m）",
    secondaryStation: "🥈 次近車站：JR大阪環狀線・近鐵【鶴橋站】東走 3 分鐘 ・ 谷町線【谷町九丁目站】西走 10 分",
    stationInfo: "🥇地鐵鶴橋站4號口走1分 ｜ 🥈JR/近鐵鶴橋站走3分・谷町九丁目站走10分",
    roomPlan: "全室 40㎡ 以上新穎公寓式飯店，附設廚房、大冰箱、洗衣機與浴室烘乾設備，去黑門市場僅 2 站（3分鐘）！",
    kidRule: "已訂妥！提醒入住時備妥全體大人與小朋友護照正本辦理登記",
    konbiniRoute: "出鶴橋站 4 號出口走到飯店 1 分鐘內，旁邊就是 24H「FamilyMart 鶴橋駅前店」與生鮮超齊全的「Lawson Store 100 鶴橋駅前店」！",
    walkSteps: {
      from: "地鐵鶴橋站 4號出口",
      via: "🏪 全家 ＆ Lawson 100 (30秒)",
      to: "✅ ESLEAD 大阪鶴橋 (共1分)"
    },
    embedQuery: "ESLEAD HOTEL Osaka Tsuruhashi",
    walkMapUrl: "https://www.google.com/maps/dir/?api=1&origin=鶴橋駅&destination=ESLEAD+HOTEL+Osaka+Tsuruhashi&waypoints=ファミリーマート鶴橋駅前店&travelmode=walking",
    bestAppTip: "大阪住宿已訂妥！同行友人可點地圖熟悉鶴橋站 4 號出口、JR 環狀線與順路超商位置。",
    links: {
      google: "https://www.google.com/maps/search/?api=1&query=ESLEAD+HOTEL+Osaka+Tsuruhashi",
      official: "https://www.google.com/maps/search/?api=1&query=ESLEAD+HOTEL+Osaka+Tsuruhashi",
      rakuten: "https://www.google.com/maps/search/?api=1&query=ファミリーマート鶴橋駅前店",
      agoda: "https://www.google.com/maps/search/?api=1&query=ローソンストア100+鶴橋駅前店",
      trip: "https://www.google.com/maps/dir/?api=1&origin=ESLEAD+HOTEL+Osaka+Tsuruhashi&destination=黒門市場&travelmode=transit"
    }
  }
];

const SPOTS_DATA = [
  {
    region: "osaka",
    tag: "大阪・美食採買",
    name: "黑門市場 ＆ 黑門中川超市",
    station: "從 ESLEAD 鶴橋搭千日前線 2 站（3分鐘）至「日本橋站」",
    summary: "大阪最熱鬧的拱廊市場，有屋頂不怕冷風！「黑門中川」是 24 小時生鮮超市，冬季日本草莓、蜜柑與熟食便當買回 ESLEAD 飯店吃超享受。",
    kidTip: "現烤干貝、玉子燒與草莓大福是 6–10 歲小朋友最愛。"
  },
  {
    region: "osaka",
    tag: "京都・大阪一日遊",
    name: "勝尾寺・嵐山・清水寺",
    station: "一日遊專車接送（免換車省體力）",
    summary: "一次走訪滿山小達摩不倒翁的「勝尾寺」、竹林搖曳的「嵐山渡月橋」與世界遺產「清水寺」，傍晚回到道頓堀看固力果招牌。",
    kidTip: "勝尾寺「蓋 6 張疊印紀念明信片」超像闖關遊戲，5 個小朋友會超認真找蓋章點！"
  },
  {
    region: "osaka",
    tag: "大阪・親子重頭戲",
    name: "心齋橋寶可夢餐廳 ＆ 寶可夢中心 DX",
    station: "地鐵「心齋橋站」4 號出口直通大丸本館 9F",
    summary: "皮卡丘造型餐點可愛又好拍，用餐時還有皮卡丘本尊出場互動！旁邊就是寶可夢中心與 PARCO 吉伊卡哇、橡子共和國與超大型扭蛋店。",
    kidTip: "12/18 台灣時間 17:00 準時上網預約 1/18 餐廳座位！"
  },
  {
    region: "nagoya",
    tag: "名古屋・名城＆豬排",
    name: "名古屋城 ＆ 矢場味噌豬排",
    station: "地鐵名城線「名古屋城站」7 號出口步行 5 分鐘",
    summary: "欣賞金碧輝煌的「本丸御殿」與金鯱，逛完出正門就是美食街「金鯱橫丁」，直接吃名古屋招牌「矢場とん」鐵板紅味噌炸豬排！",
    kidTip: "甜鹹濃郁的味噌豬排超下飯，店內白飯可免費續碗。"
  },
  {
    region: "nagoya",
    tag: "名古屋・地標夜景",
    name: "綠洲21（Oasis 21）＆ 榮商圈",
    station: "地鐵東山線／名城線「榮站」4A 出口直通",
    summary: "透明玻璃飛碟造型「水之宇宙船」，免費登頂繞行空中步道看中部電力塔點燈夜景，B1 廣場還有動漫與吉卜力周邊店。",
    kidTip: "晚上點燈後像宇宙基地一樣酷炫，拍照非常好看。"
  },
  {
    region: "nagoya",
    tag: "岐阜・冬季限定玩雪",
    name: "牧歌之里（ひるがの高原 牧歌の里）",
    station: "JR 名古屋站太閤通口搭直達巴士約 2 小時",
    summary: "專為家庭打造的冰雪樂園！有超長雪盆滑道、雪地摩托車拉橡皮艇泛舟、堆雪人專區與羊駝小動物互動，安全又刺激。",
    kidTip: "6–10 歲體力最好，記得多帶一雙厚襪子替換，現場可租雪靴與連身雪衣。"
  },
  {
    region: "nagoya",
    tag: "愛知・動畫世界",
    name: "吉卜力公園（Ghibli Park）",
    station: "磁浮線 Linimo「愛・地球博記念公園站」即達",
    summary: "沒有刺激雲霄飛車，而是把龍貓、神隱少女、霍爾移動城堡真實搬進森林！「吉卜力大倉庫」全室內溫暖好逛。",
    kidTip: "大倉庫內的「兒童街（子どもの街）」與軟綿綿貓巴士專屬於小學生（12歲以下）進入遊玩！"
  },
  {
    region: "nagoya",
    tag: "名古屋・經典朝食",
    name: "コーヒーハウス かこ 花車本店（吐司）",
    station: "名古屋站步行約 9 分鐘 ／ 國際中心站步行 4 分鐘",
    summary: "1972 年創立老字號喫茶店！招牌「四色手工果醬＋紅豆泥鮮奶油烤吐司」像珠寶盒一樣漂亮又好吃。",
    kidTip: "若本店排隊人較多，走路 3 分鐘有座位更寬敞的分店「KAKO 柳橋店」。"
  },
  {
    region: "nagoya",
    tag: "名古屋・港灣探險",
    name: "名古屋海洋博物館 ＆ 南極破冰船富士號",
    station: "地鐵名港線「名古屋港站」3 號出口步行 5 分鐘",
    summary: "館內可體驗駕駛大船的「操船模擬器」，買共通券還能實際走進停泊在港邊的橘色南極破冰船「富士號」船艙探險！",
    kidTip: "推薦買 4 設施共通券（大人僅 ¥710、中小學生 ¥400），隔壁就是名古屋港水族館。"
  },
  {
    region: "nagoya",
    tag: "名古屋・互動科學",
    name: "名古屋市科學館",
    station: "地鐵東山線「伏見站」5 號出口步行 5 分鐘",
    summary: "擁有金氏世界紀錄直徑 35 公尺巨蛋星象儀！館內有 9 公尺人工龍捲風、高壓放電秀與極寒體驗室，動手玩科學超精彩。",
    kidTip: "國中生與小學生以下「免門票」免費入場！回台前上午排這裡無敵超值。"
  }
];

const CHECKLIST_ITEMS = [
  { id: "chk_osaka", text: "大阪前 3 晚住宿：ESLEAD HOTEL Osaka Tsuruhashi（已訂妥！）", defaultDone: true },
  { id: "chk_ghibli", text: "搶購 1/21 吉卜力公園門票（4張大人＋5張小學生半價票，11/10 已開賣）", defaultDone: false },
  { id: "chk_nagoya_hotel", text: "從 19 間名古屋精選名單比價並預訂 4 晚住宿（1/19–1/23，鎖定免費取消方案）", defaultDone: false },
  { id: "chk_poke", text: "12/18 台灣時間 17:00 搶 1/18 大丸心齋橋「寶可夢咖啡廳」預約", defaultDone: false },
  { id: "chk_kyoto", text: "預訂 1/17 京都（勝尾寺・嵐山・清水寺）一日遊巴士", defaultDone: false },
  { id: "chk_bokka", text: "預訂 1/20 牧歌之里玩雪一日遊巴士（名古屋站太閤通口出發）", defaultDone: false },
  { id: "chk_shinkansen", text: "購買 1/19 新大阪 ➔ 名古屋 新幹線車票（含小學生兒童票＆特大行李席）", defaultDone: false },
  { id: "chk_winter", text: "準備 5 位小朋友防水玩雪手套、毛帽、發熱衣與護照效期確認", defaultDone: false }
];

// ==================== 多車站方向感小動畫 SVG 產生器（最近站＋次近地鐵站＋超商＋步行分鐘） ====================
const SCHEMATIC_MAP_SPECS = {
  "comfort": {
    layout: "taiko-north",
    shortPill: "① Comfort新幹線(5分)",
    exitBadge: "🥇 最近優先：JR名古屋站【太閤通口】",
    totalWalk: "⏱️ 最近步行 5 分鐘（約 380m）",
    subStationsBar: "🧭 周邊方向參考：↖ 西北【龜島站 3號口】走 9 分 ｜ ↙ 西南【太閤通站 2號口】走 10 分",
    stepSub1: "出站即見超商",
    stepSub2: "斜對面 80m",
    stepSub3: "平路共 5 分鐘",
    pTitle: "JR 名古屋站",
    pExit: "太閤通口 (西口)",
    subNW: "🥈 東山線 龜島站",
    subNWSub: "3號口｜西北走 9 分",
    subSW: "🥈 櫻通線 太閤通站",
    subSWSub: "2號口｜西南走 10 分",
    konbini1: "🏪 7-11 ＆ 全家 (斜對面1分)",
    konbini2: "🏪 Lawson (出站1分)",
    seg1: "🚶 北走3分",
    seg2: "🚶 1分(80m)",
    hTitle: "① Comfort 名古屋新幹線口",
    hSub: "太閤通口走 5 分｜含 9 人免費早餐"
  },
  "chisun": {
    layout: "taiko-north",
    shortPill: "② Chisun平價王(4分)",
    exitBadge: "🥇 最近優先：JR名古屋站【太閤通口】",
    totalWalk: "⏱️ 最近步行 4 分鐘（約 320m）",
    subStationsBar: "🧭 周邊方向參考：↖ 西北【龜島站 3號口】走 9 分 ｜ ↙ 西南【太閤通站 2號口】走 10 分",
    stepSub1: "往北平路直走",
    stepSub2: "斜對面 70m",
    stepSub3: "橘色圓柱大樓 4分",
    pTitle: "JR 名古屋站",
    pExit: "太閤通口 (西口)",
    subNW: "🥈 東山線 龜島站",
    subNWSub: "3號口｜西北走 9 分",
    subSW: "🥈 櫻通線 太閤通站",
    subSWSub: "2號口｜西南走 10 分",
    konbini1: "🏪 7-11 則武1丁目店 (1分)",
    konbini2: "🏪 Lawson (出站1分)",
    seg1: "🚶 北走3分",
    seg2: "🚶 1分(70m)",
    hTitle: "② Chisun Inn 名古屋",
    hSub: "太閤通口走 4 分｜平價王・上下舖"
  },
  "daiwa-shinkansen": {
    layout: "taiko-north",
    shortPill: "⑤ 大和新幹線口(3分)",
    exitBadge: "🥇 最近優先：JR名古屋站【太閤通口】",
    totalWalk: "⏱️ 最近步行僅 3 分鐘（約 220m）",
    subStationsBar: "🧭 周邊方向參考：↖ 西北【龜島站 3號口】走 9 分 ｜ ↙ 西南【太閤通站 2號口】走 9 分",
    stepSub1: "Bic Camera 旁",
    stepSub2: "正順路 1 分鐘",
    stepSub3: "超近僅 3 分鐘！",
    pTitle: "JR 名古屋站",
    pExit: "太閤通口 (新幹線)",
    subNW: "🥈 東山線 龜島站",
    subNWSub: "3號口｜西北走 9 分",
    subSW: "🥈 櫻通線 太閤通站",
    subSWSub: "2號口｜西南走 9 分",
    konbini1: "🏪 Lawson ＆ 7-11 (順路1分)",
    konbini2: "🏪 Bic Camera 就在隔壁",
    seg1: "🚶 北走2分",
    seg2: "🚶 轉彎1分",
    hTitle: "⑤ 大和魯內 名古屋新幹線口",
    hSub: "太閤通口走 3 分｜離新幹線口最近"
  },
  "richmond-shinkansen": {
    layout: "kamejima-richmond",
    shortPill: "⑦ Richmond(5–7分)",
    exitBadge: "🥇 最近優先：地鐵東山線【龜島站 3號口】",
    totalWalk: "⏱️ 龜島站走 5 分 ／ JR太閤通口走 7 分",
    subStationsBar: "🧭 周邊方向參考：↘ 東南【JR名古屋站太閤通口】直走 7 分 ｜ ↙ 西南【太閤通站】走 12 分",
    stepSub1: "雙車站直線可達",
    stepSub2: "沿線順路 1–2 分",
    stepSub3: "浴廁三分離高評分",
    pTitle: "地鐵東山線 龜島站",
    pExit: "3號出口 (走5分)",
    subSE: "🥈 JR名古屋站 太閤通口",
    subSESub: "沿新幹線直走 7 分",
    subSW: "🥈 櫻通線 太閤通站",
    subSWSub: "2號口｜南走 12 分",
    konbini1: "🏪 7-11 ＆ Daily超商 (順路)",
    seg1: "🚶 東南走5分",
    hTitle: "⑦ Richmond 名古屋新幹線口",
    hSub: "龜島站 5 分・JR太閤通口 7 分"
  },
  "toyoko-shinkansen": {
    layout: "taiko-south",
    shortPill: "③ 東橫新幹線(4分)",
    exitBadge: "🥇 最近優先：JR名古屋站【太閤通口】",
    totalWalk: "⏱️ JR走 4 分鐘 ／ 太閤通站走 6 分鐘",
    subStationsBar: "🧭 周邊方向參考：← 西側【地鐵太閤通站 2號口】直走 6 分 ｜ ↑ 北側【龜島站】走 10 分",
    stepSub1: "太閤通大馬路旁",
    stepSub2: "順路 1 分鐘",
    stepSub3: "夾在JR與太閤通間",
    pTitle: "JR 名古屋站",
    pExit: "太閤通口 (走4分)",
    subW: "🥈 櫻通線 太閤通站",
    subWSub: "2號口｜西走 6 分",
    subN: "🥈 東山線 龜島站 (北走10分)",
    konbini1: "🏪 7-11 椿町店 ＆ MiniStop (1分)",
    seg1: "🚶 西南走 4 分",
    subWalkW: "← 往太閤通站 6分",
    hTitle: "③ 東橫INN 名古屋站新幹線口",
    hSub: "JR走 4 分・太閤通站 6 分｜含免費早餐"
  },
  "sotetsu-shinkansen": {
    layout: "taiko-south",
    shortPill: "④ 相鐵新幹線(4分)",
    exitBadge: "🥇 最近優先：JR名古屋站【太閤通口】",
    totalWalk: "⏱️ JR走 4 分鐘 ／ 太閤通站走 6 分鐘",
    subStationsBar: "🧭 周邊方向參考：← 西側【地鐵太閤通站 2號口】走 6 分 ｜ ↓ 南側【近鐵米野站】走 8 分",
    stepSub1: "新幹線西口出站",
    stepSub2: "隔壁與對面皆超商",
    stepSub3: "有連通房雙衛浴",
    pTitle: "JR 名古屋站",
    pExit: "太閤通口 (走4分)",
    subW: "🥈 櫻通線 太閤通站",
    subWSub: "2號口｜西走 6 分",
    subN: "🥈 東山線 龜島站 (北走11分)",
    konbini1: "🏪 隔壁 7-11 ＆ 對面 Lawson (1分)",
    seg1: "🚶 南走 4 分 (300m)",
    subWalkW: "← 往太閤通站 6分",
    hTitle: "④ 相鐵 Fresa 名古屋新幹線口",
    hSub: "JR走 4 分・太閤通站 6 分｜有連通房"
  },
  "daiwa-taiko": {
    layout: "taiko-south",
    shortPill: "⑥ 大和太閤通(4分)",
    exitBadge: "🥇 最近優先：JR名古屋站【太閤通口】",
    totalWalk: "⏱️ JR走 4 分鐘 ／ 太閤通站走 7 分鐘",
    subStationsBar: "🧭 周邊方向參考：← 西側【地鐵太閤通站 2號口】走 7 分 ｜ ↓ 南側【近鐵米野站】走 9 分",
    stepSub1: "新幹線西口出站",
    stepSub2: "1F 室內直通 7-11",
    stepSub3: "平路 4 分鐘即達",
    pTitle: "JR 名古屋站",
    pExit: "太閤通口 (走4分)",
    subW: "🥈 櫻通線 太閤通站",
    subWSub: "2號口｜西走 7 分",
    subN: "🥈 東山線 龜島站 (北走11分)",
    konbini1: "🏪 正1F直通 7-11 ＋對面Lawson",
    seg1: "🚶 南走 4 分 (280m)",
    subWalkW: "← 往太閤通站 7分",
    hTitle: "⑥ 大和魯內 名古屋太閤通口",
    hSub: "1F直通 7-11｜全室日式乾濕分離"
  },
  "grandbase": {
    layout: "taiko-west-apt",
    shortPill: "⑰ GRAND BASE(4分)",
    exitBadge: "🥇 最近優先：地鐵櫻通線【太閤通站 2號口】",
    totalWalk: "⏱️ 太閤通站走 4 分 ／ JR名古屋站走 8 分",
    subStationsBar: "🧭 周邊方向參考：→ 東側【JR名古屋站太閤通口】直走 8 分 ｜ ↑ 北側【龜島站】走 11 分",
    stepSub1: "太閤通站2號口",
    stepSub2: "距公寓 180m",
    stepSub3: "56㎡大房附廚洗",
    pTitle: "地鐵櫻通線 太閤通站",
    pExit: "2號出口 (走4分)",
    subE: "🥈 JR名古屋站 太閤通口",
    subESub: "東走 8 分鐘 (順路)",
    subN: "🥈 東山線 龜島站 (北走11分)",
    konbini1: "🏪 全家 中村竹橋町店 (順路2分)",
    seg1: "🚶 步行 4 分",
    subWalkE: "JR走來 8 分 →",
    hTitle: "⑰ GRAND BASE 名古屋駅西",
    hSub: "太閤通站 4 分・JR 8 分｜附廚房洗衣機"
  },
  "samurai-house3": {
    layout: "taiko-west-apt",
    shortPill: "⑱ SAMURAI獨棟(3分)",
    exitBadge: "🥇 最近優先：地鐵櫻通線【太閤通站 3號口】",
    totalWalk: "⏱️ 太閤通站走 3 分 ／ JR名古屋站走 7 分",
    subStationsBar: "🧭 周邊方向參考：→ 東北【JR名古屋站太閤通口】走 7 分 ｜ ↓ 南側【近鐵米野站】走 5 分",
    stepSub1: "太閤通站3號口",
    stepSub2: "順路 2 分有超商",
    stepSub3: "9人一棟全包別墅",
    pTitle: "地鐵櫻通線 太閤通站",
    pExit: "3號出口 (走3分)",
    subE: "🥈 JR名古屋站 太閤通口",
    subESub: "東北走 7 分鐘",
    subN: "🥈 近鐵 米野站 (南側走5分)",
    konbini1: "🏪 全家 ＆ 7-11 太閤通店 (2分)",
    seg1: "🚶 步行 3 分",
    subWalkE: "JR走來 7 分 →",
    hTitle: "⑱ SAMURAI HOUSE Ⅲ (獨棟包棟)",
    hSub: "太閤通站 3 分・JR 7 分｜1間全包13人"
  },
  "vessel-campana": {
    layout: "sakura-north",
    shortPill: "⑧ Vessel名駅(4分)",
    exitBadge: "🥇 最近優先：地鐵名古屋站【1號出口】",
    totalWalk: "⏱️ 1號口步行 4 分（JR櫻通口走 9 分）",
    subStationsBar: "🧭 周邊方向參考：↖ 西北【東山線 龜島站】走 8 分 ｜ ↘ 東南【櫻通線 國際中心站】走 10 分",
    stepSub1: "地下街北側出口",
    stepSub2: "正順路 1–2 分",
    stepSub3: "大浴場＋脫鞋木地板",
    pTitle: "地鐵東山線 名古屋站",
    pExit: "1號出口 (JR走9分)",
    subNW: "🥈 東山線 龜島站",
    subNWSub: "4號口｜西走 8 分",
    subSE: "🥈 櫻通線 國際中心站",
    subSESub: "東南走 10 分鐘",
    konbini1: "🏪 7-11 ＆ Lawson 名駅2丁目 (順路)",
    seg1: "🚶 北走4分",
    hTitle: "⑧ Vessel Campana 名古屋",
    hSub: "1號口走 4 分｜18歲以下免費・大浴場"
  },
  "cypress-ekimae": {
    layout: "sakura-north",
    shortPill: "⑨ Cypress駅前(3分)",
    exitBadge: "🥇 最近優先：地鐵名古屋站【1號/10號口】",
    totalWalk: "⏱️ 地鐵口走 3 分（JR櫻通口走 5 分）",
    subStationsBar: "🧭 周邊方向參考：↖ 西北【東山線 龜島站】走 8 分 ｜ ↘ 東南【櫻通線 國際中心站】走 9 分",
    stepSub1: "JR櫻通口走5分",
    stepSub2: "飯店隔壁即超商",
    stepSub3: "有寬敞3–4人房",
    pTitle: "地鐵/JR 名古屋站",
    pExit: "1號口3分 / 櫻通口5分",
    subNW: "🥈 東山線 龜島站",
    subNWSub: "4號口｜西北走 8 分",
    subSE: "🥈 櫻通線 國際中心站",
    subSESub: "東南走 9 分鐘",
    konbini1: "🏪 隔壁 Lawson ＆ 7-11 (1分內)",
    seg1: "🚶 步行 3–5 分",
    hTitle: "⑨ Cypress Hotel 名古屋駅前",
    hSub: "地鐵 3 分・JR櫻通口 5 分｜緊鄰超商"
  },
  "sotetsu-sakura": {
    layout: "sakura-east",
    shortPill: "⑩ 相鐵櫻通口(4分)",
    exitBadge: "🥇 最近優先：名古屋站【櫻通口 / U8出口】",
    totalWalk: "⏱️ 名古屋站走 4 分 ／ 國際中心站走 5 分",
    subStationsBar: "🧭 周邊方向參考：→ 東側【地鐵國際中心站 3號口】走 5 分 ｜ 🍞 KAKO花車本店走路 4 分鐘！",
    stepSub1: "Unimall 地下街直通",
    stepSub2: "出口旁 1 分全家",
    stepSub3: "雙車站正中間",
    pTitle: "JR/地鐵 名古屋站",
    pExit: "櫻通口 / U8出口 (4分)",
    subE: "🥈 櫻通線 國際中心站",
    subESub: "3號口｜東走 5 分",
    landmarkTop: "🍞 KAKO花車本店 (東走4分)",
    konbini1: "🏪 全家 名駅四丁目店 ＆ 7-11 (1分)",
    seg1: "🚶 步行 4 分",
    subWalkE: "→ 國際中心站 5分",
    hTitle: "⑩ 相鐵 Fresa 名古屋櫻通口",
    hSub: "櫻通口 4 分・國際中心站 5 分｜有連通房"
  },
  "toyoko-sakura": {
    layout: "sakura-east",
    shortPill: "⑪ 東橫櫻通新館(4分)",
    exitBadge: "🥇 最近優先：JR名古屋站【櫻通口 / U1出口】",
    totalWalk: "⏱️ JR櫻通口走 5 分 ／ 國際中心站走 4 分",
    subStationsBar: "🧭 周邊方向參考：→ 東側【地鐵國際中心站 1號口】走 4 分 ｜ ← 西側【JR名古屋站】走 5 分",
    stepSub1: "地下街出站超近",
    stepSub2: "巷口 1 分全家",
    stepSub3: "2023新館含9人早",
    pTitle: "JR/地鐵 名古屋站",
    pExit: "櫻通口走5分 / U1走4分",
    subE: "🥈 櫻通線 國際中心站",
    subESub: "1號口｜東走 4 分",
    landmarkTop: "🏯 櫻通線直達名古屋城・久屋大通",
    konbini1: "🏪 全家 名駅三丁目店 ＆ 7-11 (1分)",
    seg1: "🚶 步行 4–5 分",
    subWalkE: "→ 國際中心站 4分",
    hTitle: "⑪ 東橫INN 名古屋站櫻通口新館",
    hSub: "雙站皆 4–5 分｜含 9 人免費早餐"
  },
  "comfort-era": {
    layout: "sakura-east",
    shortPill: "⑫ Comfort ERA(6分)",
    exitBadge: "🥇 最近優先：地鐵櫻通線【國際中心站 3號口】",
    totalWalk: "⏱️ 國際中心站走 6 分 ／ 名古屋站走 8 分",
    subStationsBar: "🧭 周邊方向參考：← 西北【名鐵/近鐵/JR名古屋站】走 8–9 分 ｜ → 東側【伏見站】走 11 分",
    stepSub1: "國際中心站3號口",
    stepSub2: "正對面 1 分超商",
    stepSub3: "2026改裝新開幕",
    pTitle: "名鐵/近鐵/JR 名古屋站",
    pExit: "廣小路口 (走8–9分)",
    subE: "🥇 櫻通線 國際中心站",
    subESub: "3號口｜最近走 6 分！",
    landmarkTop: "🍞 KAKO花車本店走路僅 3 分鐘！",
    konbini1: "🏪 正對面 Lawson ＆ 全家 (1分)",
    seg1: "🚶 步行 6–8 分",
    subWalkE: "↗ 國際中心站 6分",
    hTitle: "⑫ Comfort ERA 名古屋名駅南",
    hSub: "國際中心站 6 分・名駅 8 分｜2026新改裝"
  },
  "vessel-sakae": {
    layout: "sakae-hisaya",
    shortPill: "⑬ Vessel榮(2分)",
    exitBadge: "🥇 最近優先：地鐵東山線・名城線【榮站 1號口】",
    totalWalk: "⏱️ 榮站走 2 分鐘 ／ 久屋大通站走 3 分鐘",
    subStationsBar: "🧭 周邊方向參考：↑ 北側【櫻通線 久屋大通站 4號口】走 3 分（5分直達名古屋站/太閤通站！）",
    stepSub1: "榮站1號口 140m",
    stepSub2: "正1F就是 7-11 (0分)",
    stepSub3: "南北雙地鐵包夾",
    pTitle: "地鐵東山線・名城線 榮站",
    pExit: "1號出口 (北走2分)",
    subN: "🥈 櫻通線・名城線 久屋大通站",
    subNSub: "4號口｜北走 3 分 (直達名駅/太閤通)",
    seg1: "🚶 直走 2 分 (140m)",
    subWalkN: "↑ 往久屋大通站 3分",
    hTitle: "⑬ Vessel Inn 榮站前 (2F櫃檯)",
    konbini1F: "🏪 正 1 樓就是 7-11 (下樓 0 分鐘！)"
  },
  "comfort-sakae": {
    layout: "sakae-hisaya",
    shortPill: "⑭ Comfort榮(1分)",
    exitBadge: "🥇 最近優先：地鐵東山線・名城線【榮站 2號口】",
    totalWalk: "⏱️ 榮站走 1 分鐘(80m) ／ 久屋大通站走 4 分",
    subStationsBar: "🧭 周邊方向參考：↑ 北側【櫻通線 久屋大通站 3號口】走 4 分 ｜ → 東側就是綠洲21夜景！",
    stepSub1: "榮站2號口 80m",
    stepSub2: "正1F就是全家 (0分)",
    stepSub3: "出地鐵 60 秒進門",
    pTitle: "地鐵東山線・名城線 榮站",
    pExit: "2號出口 (出站1分！)",
    subN: "🥈 櫻通線・名城線 久屋大通站",
    subNSub: "3號口｜北走 4 分 (直達名古屋城/名駅)",
    seg1: "🚶 秒到 1 分 (80m)",
    subWalkN: "↑ 往久屋大通站 4分",
    hTitle: "⑭ Comfort Inn 名古屋榮站前",
    konbini1F: "🏪 正 1 樓併設 全家便利商店 (0分！)"
  },
  "comfort-fushimi": {
    layout: "fushimi-hub",
    shortPill: "⑮ Comfort伏見(4分)",
    exitBadge: "🥇 最近優先：地鐵東山線・鶴舞線【伏見站 3號口】",
    totalWalk: "⏱️ 伏見站走 4 分 ／ 榮站走 7 分・丸之內站 6 分",
    subStationsBar: "🧭 周邊方向參考：→ 東側【榮站 8號口】走 7 分 ｜ ↑ 北側【櫻通線 丸之內站】走 6 分 ｜ ↓ 科學館走 6 分",
    stepSub1: "名駅搭地鐵1站",
    stepSub2: "順路 1 分雙超商",
    stepSub3: "走路6分到科學館",
    pTitle: "地鐵東山線 伏見站",
    pExit: "3號出口 (走4分)",
    subRight: "🥈 東山線 榮站",
    subRightSub: "8號口｜東走 7 分",
    subTop: "🥈 櫻通線 丸之內站 (北走6分)",
    landmarkBot: "🔬 名古屋市科學館 (南走6分)",
    konbini1: "🏪 7-11 ＆ 全家 錦2丁目 (順路1分)",
    seg1: "🚶 步行 4 分",
    hTitle: "⑮ Comfort Hotel 名古屋伏見",
    hSub: "伏見站 4 分・榮站 7 分｜含 9 人早餐"
  },
  "delstyle-nayabashi": {
    layout: "fushimi-hub",
    shortPill: "⑯ DEL納屋橋(7分)",
    exitBadge: "🥇 最近優先：地鐵東山線【伏見站 6號/8號口】",
    totalWalk: "⏱️ 伏見站走 7 分 ／ 國際中心站走 8 分",
    subStationsBar: "🧭 周邊方向參考：↖ 西北【櫻通線 國際中心站 3號口】走 8 分 ｜ 🍞 KAKO吐司走 6 分 ｜ 🔬 科學館走 9 分",
    stepSub1: "伏見站6號/8號口",
    stepSub2: "隔壁Lawson+唐吉超市",
    stepSub3: "大浴場＋連通房",
    pTitle: "地鐵東山線 伏見站",
    pExit: "6號/8號口 (走7分)",
    subRight: "🥈 櫻通線 國際中心站",
    subRightSub: "3號口｜西北走 8 分",
    subTop: "🍞 KAKO花車本店 (北走6分)",
    landmarkBot: "🛒 對面 MEGA唐吉訶德生鮮超市",
    konbini1: "🏪 隔壁 Lawson ＆ 7-11 (步行1分)",
    seg1: "🚶 步行 7 分",
    hTitle: "⑯ DEL style 名古屋納屋橋",
    hSub: "伏見站 7 分・國際中心 8 分｜大浴場"
  },
  "central-res": {
    layout: "nakamura-koen",
    shortPill: "⑲ Central包層(2分)",
    exitBadge: "🥇 最近優先：地鐵東山線【中村公園站 2號口】",
    totalWalk: "⏱️ 出站步行僅 2 分鐘（約 150m・有電梯）",
    subStationsBar: "🧭 周邊方向參考：→ 東側【東山線 中村日赤站】走 9 分（搭地鐵 7 分直達名古屋站）",
    stepSub1: "名駅搭地鐵7分",
    stepSub2: "出站口 30 秒雙超商",
    stepSub3: "120㎡整層包層"
  },
  "osaka-eslead": {
    layout: "osaka-tsuruhashi",
    shortPill: "✅ 大阪ESLEAD(1分)",
    exitBadge: "🥇 最近優先：地鐵千日前線 鶴橋站【4號出口】",
    totalWalk: "⏱️ 出站步行僅 1 分鐘（110m・已訂妥！）",
    subStationsBar: "🧭 周邊方向參考：→ 東側【JR大阪環狀線・近鐵 鶴橋站】走 3 分 ｜ ← 西側【谷町九丁目站】走 10 分",
    stepSub1: "千日前線4號口",
    stepSub2: "出站 30 秒雙超商",
    stepSub3: "再 30 秒即達飯店"
  }
};

function buildSchematicSvg(hotelId) {
  const s = SCHEMATIC_MAP_SPECS[hotelId] || SCHEMATIC_MAP_SPECS["comfort"];
  const compass = `
    <g transform="translate(446, 26)">
      <circle cx="0" cy="0" r="14" fill="#ffffff" stroke="#cbd5e1" />
      <text x="0" y="4" text-anchor="middle" font-size="10.5" font-weight="800" fill="#334155">↑北</text>
    </g>
  `;

  if (s.layout === "taiko-north") {
    return `
      <svg viewBox="0 0 480 288" width="100%" height="auto" role="img" aria-label="${s.hTitle} 周邊雙車站關係動畫圖">
        ${compass}
        <!-- Subway & Rail Reference Lines -->
        <line x1="406" y1="14" x2="406" y2="274" stroke="#cbd5e1" stroke-width="9" stroke-dasharray="8 5" />
        <text x="406" y="136" text-anchor="middle" font-size="9.5" fill="#64748b" font-weight="700">🚄 JR・新幹線軌道</text>
        <!-- Sakuradori Red Line West to Taiko-dori -->
        <line x1="92" y1="252" x2="392" y2="252" stroke="#fda4af" stroke-width="5" />
        <text x="246" y="274" text-anchor="middle" font-size="9.8" fill="#be123c" font-weight="700">← 地鐵櫻通線（直通太閤通站）</text>
        <!-- Higashiyama Yellow Line NW to Kamejima -->
        <path d="M 392 182 Q 290 36 156 36" fill="none" stroke="#fcd34d" stroke-width="4.5" />
        <text x="286" y="32" text-anchor="middle" font-size="9.8" fill="#b45309" font-weight="700">↖ 地鐵東山線</text>

        <!-- Walking Street -->
        <path d="M 332 204 L 258 204 L 258 106 L 166 106" fill="none" stroke="#e2e8f0" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" />

        <!-- Secondary Dashed Connectors from Hotel -->
        <line x1="146" y1="96" x2="106" y2="56" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4 4" />
        <line x1="126" y1="168" x2="102" y2="226" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4 4" />

        <!-- Secondary Station NW: Kamejima -->
        <rect x="20" y="16" width="144" height="40" rx="8" fill="#334155" />
        <text x="92" y="32" text-anchor="middle" font-size="10.8" font-weight="800" fill="#ffffff">${s.subNW}</text>
        <rect x="30" y="36" width="124" height="16" rx="4" fill="#f1f5f9" />
        <text x="92" y="47.5" text-anchor="middle" font-size="9.6" font-weight="800" fill="#0f172a">${s.subNWSub}</text>

        <!-- Secondary Station SW: Taiko-dori -->
        <rect x="20" y="226" width="144" height="42" rx="8" fill="#334155" />
        <text x="92" y="243" text-anchor="middle" font-size="10.8" font-weight="800" fill="#ffffff">${s.subSW}</text>
        <rect x="30" y="247" width="124" height="17" rx="4" fill="#f1f5f9" />
        <text x="92" y="259" text-anchor="middle" font-size="9.6" font-weight="800" fill="#0f172a">${s.subSWSub}</text>

        <!-- Animated Primary Walk Path -->
        <path d="M 332 204 L 258 204 L 258 106 L 172 106" fill="none" stroke="#2563eb" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="anim-walk-line" />
        <circle r="6.5" fill="#1d4ed8" stroke="#ffffff" stroke-width="2.5">
          <animateMotion dur="3.2s" repeatCount="indefinite" path="M 332 204 L 258 204 L 258 106 L 172 106" />
        </circle>

        <!-- Primary Station: JR Nagoya Taiko-dori -->
        <rect x="330" y="176" width="132" height="56" rx="10" fill="#0f172a" />
        <text x="396" y="196" text-anchor="middle" font-size="12" font-weight="800" fill="#ffffff">🥇 ${s.pTitle}</text>
        <rect x="342" y="203" width="108" height="22" rx="5" fill="#fef08a" stroke="#eab308" stroke-width="1.5" />
        <text x="396" y="218" text-anchor="middle" font-size="10.8" font-weight="800" fill="#713f12">${s.pExit}</text>

        <!-- Konbini Nodes -->
        <circle cx="258" cy="106" r="7" fill="#10b981" stroke="#ffffff" stroke-width="2" />
        <g transform="translate(332, 68)">
          <rect x="-82" y="-14" width="164" height="28" rx="7" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" />
          <text x="0" y="4" text-anchor="middle" font-size="10.8" font-weight="800" fill="#065f46">${s.konbini1}</text>
        </g>
        <circle cx="258" cy="204" r="5.5" fill="#10b981" stroke="#ffffff" stroke-width="2" />
        <g transform="translate(254, 232)">
          <rect x="-64" y="-11" width="128" height="22" rx="6" fill="#ecfdf5" stroke="#10b981" stroke-width="1.2" />
          <text x="0" y="4" text-anchor="middle" font-size="10" font-weight="700" fill="#065f46">${s.konbini2}</text>
        </g>

        <!-- Segment Walk Pills -->
        <g transform="translate(292, 156)">
          <rect x="-32" y="-10" width="64" height="20" rx="10" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5" />
          <text x="0" y="4" text-anchor="middle" font-size="10" font-weight="800" fill="#1d4ed8">${s.seg1}</text>
        </g>
        <g transform="translate(212, 84)">
          <rect x="-35" y="-10" width="70" height="20" rx="10" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5" />
          <text x="0" y="4" text-anchor="middle" font-size="10" font-weight="800" fill="#1d4ed8">${s.seg2}</text>
        </g>

        <!-- Hotel Pin & Card -->
        <circle cx="162" cy="106" r="14" fill="#2563eb" class="anim-pulse-circle" />
        <circle cx="162" cy="106" r="11" fill="#1d4ed8" stroke="#ffffff" stroke-width="2.5" />
        <text x="162" y="110" text-anchor="middle" font-size="11" fill="#ffffff" font-weight="800">★</text>
        <rect x="20" y="124" width="194" height="44" rx="9" fill="#1d4ed8" />
        <text x="117" y="143" text-anchor="middle" font-size="11.5" font-weight="800" fill="#ffffff">${s.hTitle}</text>
        <text x="117" y="159" text-anchor="middle" font-size="10" fill="#dbeafe">${s.hSub}</text>
      </svg>
    `;
  }

  if (s.layout === "kamejima-richmond") {
    return `
      <svg viewBox="0 0 480 288" width="100%" height="auto" role="img" aria-label="${s.hTitle} 周邊雙車站關係動畫圖">
        ${compass}
        <!-- Rail & Subway Lines -->
        <line x1="362" y1="16" x2="362" y2="272" stroke="#cbd5e1" stroke-width="9" stroke-dasharray="8 5" />
        <line x1="80" y1="46" x2="380" y2="210" stroke="#fcd34d" stroke-width="4.5" opacity="0.6" />
        <line x1="92" y1="252" x2="392" y2="252" stroke="#fda4af" stroke-width="5" />

        <!-- Walking Street -->
        <path d="M 168 46 L 266 46 L 266 116 L 362 204" fill="none" stroke="#e2e8f0" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" />

        <!-- Secondary Connectors -->
        <line x1="274" y1="126" x2="354" y2="192" stroke="#64748b" stroke-width="2.5" stroke-dasharray="5 4" />
        <line x1="210" y1="168" x2="118" y2="228" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4 4" />

        <!-- Primary Station NW: Kamejima -->
        <rect x="20" y="18" width="148" height="54" rx="10" fill="#0f172a" />
        <text x="94" y="38" text-anchor="middle" font-size="11.5" font-weight="800" fill="#ffffff">🥇 ${s.pTitle}</text>
        <rect x="36" y="45" width="116" height="21" rx="5" fill="#fef08a" stroke="#eab308" stroke-width="1.5" />
        <text x="94" y="59.5" text-anchor="middle" font-size="10.5" font-weight="800" fill="#713f12">${s.pExit}</text>

        <!-- Secondary Station SE: JR Nagoya -->
        <rect x="318" y="190" width="146" height="46" rx="9" fill="#334155" />
        <text x="391" y="208" text-anchor="middle" font-size="11" font-weight="800" fill="#ffffff">${s.subSE}</text>
        <rect x="330" y="213" width="122" height="17" rx="4" fill="#f1f5f9" />
        <text x="391" y="225" text-anchor="middle" font-size="9.8" font-weight="800" fill="#0f172a">${s.subSESub}</text>

        <!-- Secondary Station SW: Taiko-dori -->
        <rect x="20" y="228" width="144" height="42" rx="8" fill="#334155" />
        <text x="92" y="245" text-anchor="middle" font-size="10.8" font-weight="800" fill="#ffffff">${s.subSW}</text>
        <rect x="30" y="249" width="124" height="16" rx="4" fill="#f1f5f9" />
        <text x="92" y="260.5" text-anchor="middle" font-size="9.6" font-weight="800" fill="#0f172a">${s.subSWSub}</text>

        <!-- Animated Walk from Kamejima -->
        <path d="M 168 46 L 266 46 L 266 108" fill="none" stroke="#2563eb" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="anim-walk-line" />
        <circle r="6.5" fill="#1d4ed8" stroke="#ffffff" stroke-width="2.5">
          <animateMotion dur="2.8s" repeatCount="indefinite" path="M 168 46 L 266 46 L 266 108" />
        </circle>

        <!-- Konbini -->
        <circle cx="266" cy="76" r="7" fill="#10b981" stroke="#ffffff" stroke-width="2" />
        <g transform="translate(372, 76)">
          <rect x="-86" y="-14" width="172" height="28" rx="7" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" />
          <text x="0" y="4" text-anchor="middle" font-size="10.5" font-weight="800" fill="#065f46">${s.konbini1}</text>
        </g>

        <!-- Walk Pill -->
        <g transform="translate(216, 26)">
          <rect x="-36" y="-10" width="72" height="20" rx="10" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5" />
          <text x="0" y="4" text-anchor="middle" font-size="10" font-weight="800" fill="#1d4ed8">${s.seg1}</text>
        </g>
        <text x="356" y="162" text-anchor="middle" font-size="10.2" font-weight="800" fill="#334155">↘ 往 JR 名古屋站 7分</text>

        <!-- Hotel Pin & Card -->
        <circle cx="266" cy="116" r="14" fill="#2563eb" class="anim-pulse-circle" />
        <circle cx="266" cy="116" r="11" fill="#1d4ed8" stroke="#ffffff" stroke-width="2.5" />
        <text x="266" y="120" text-anchor="middle" font-size="11" fill="#ffffff" font-weight="800">★</text>
        <rect x="148" y="134" width="204" height="44" rx="9" fill="#1d4ed8" />
        <text x="250" y="153" text-anchor="middle" font-size="11.5" font-weight="800" fill="#ffffff">${s.hTitle}</text>
        <text x="250" y="169" text-anchor="middle" font-size="10" fill="#dbeafe">${s.hSub}</text>
      </svg>
    `;
  }

  if (s.layout === "taiko-south") {
    return `
      <svg viewBox="0 0 480 288" width="100%" height="auto" role="img" aria-label="${s.hTitle} 周邊雙車站關係動畫圖">
        ${compass}
        <!-- Rail & Taiko-dori Sakuradori Red Line -->
        <line x1="418" y1="16" x2="418" y2="272" stroke="#cbd5e1" stroke-width="9" stroke-dasharray="8 5" />
        <line x1="40" y1="116" x2="430" y2="116" stroke="#e2e8f0" stroke-width="20" stroke-linecap="round" />
        <line x1="40" y1="116" x2="400" y2="116" stroke="#fda4af" stroke-width="4.5" />
        <line x1="252" y1="116" x2="252" y2="202" stroke="#e2e8f0" stroke-width="18" stroke-linecap="round" />

        <!-- Secondary Dashed Connectors -->
        <line x1="238" y1="196" x2="128" y2="132" stroke="#64748b" stroke-width="2.2" stroke-dasharray="4 4" />
        <line x1="252" y1="110" x2="236" y2="52" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4 4" />

        <!-- Top Secondary: Kamejima -->
        <rect x="150" y="16" width="176" height="32" rx="7" fill="#334155" />
        <text x="238" y="36" text-anchor="middle" font-size="10.5" font-weight="800" fill="#ffffff">${s.subN}</text>

        <!-- West Secondary: Taiko-dori Station -->
        <rect x="16" y="88" width="144" height="46" rx="9" fill="#334155" />
        <text x="88" y="106" text-anchor="middle" font-size="11" font-weight="800" fill="#ffffff">${s.subW}</text>
        <rect x="28" y="111" width="120" height="17" rx="4" fill="#f1f5f9" />
        <text x="88" y="123" text-anchor="middle" font-size="9.8" font-weight="800" fill="#0f172a">${s.subWSub}</text>
        <text x="166" y="176" text-anchor="middle" font-size="10.2" font-weight="800" fill="#334155">${s.subWalkW}</text>

        <!-- East Primary: JR Nagoya Taiko-dori -->
        <rect x="334" y="86" width="132" height="56" rx="10" fill="#0f172a" />
        <text x="400" y="106" text-anchor="middle" font-size="12" font-weight="800" fill="#ffffff">🥇 ${s.pTitle}</text>
        <rect x="346" y="113" width="108" height="22" rx="5" fill="#fef08a" stroke="#eab308" stroke-width="1.5" />
        <text x="400" y="128" text-anchor="middle" font-size="10.6" font-weight="800" fill="#713f12">${s.pExit}</text>

        <!-- Animated Primary Walk Path -->
        <path d="M 334 116 L 252 116 L 252 194" fill="none" stroke="#2563eb" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="anim-walk-line" />
        <circle r="6.5" fill="#1d4ed8" stroke="#ffffff" stroke-width="2.5">
          <animateMotion dur="2.8s" repeatCount="indefinite" path="M 334 116 L 252 116 L 252 194" />
        </circle>

        <!-- Konbini -->
        <circle cx="252" cy="156" r="7" fill="#10b981" stroke="#ffffff" stroke-width="2" />
        <g transform="translate(376, 174)">
          <rect x="-88" y="-14" width="176" height="28" rx="7" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" />
          <text x="0" y="4" text-anchor="middle" font-size="10.4" font-weight="800" fill="#065f46">${s.konbini1}</text>
        </g>

        <!-- Walk Pill -->
        <g transform="translate(292, 86)">
          <rect x="-48" y="-10" width="96" height="20" rx="10" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5" />
          <text x="0" y="4" text-anchor="middle" font-size="10" font-weight="800" fill="#1d4ed8">${s.seg1}</text>
        </g>

        <!-- Hotel Pin & Card -->
        <circle cx="252" cy="198" r="14" fill="#2563eb" class="anim-pulse-circle" />
        <circle cx="252" cy="198" r="11" fill="#1d4ed8" stroke="#ffffff" stroke-width="2.5" />
        <text x="252" y="202" text-anchor="middle" font-size="11" fill="#ffffff" font-weight="800">★</text>
        <rect x="138" y="218" width="228" height="46" rx="9" fill="#1d4ed8" />
        <text x="252" y="237" text-anchor="middle" font-size="11.5" font-weight="800" fill="#ffffff">${s.hTitle}</text>
        <text x="252" y="254" text-anchor="middle" font-size="10.2" fill="#dbeafe">${s.hSub}</text>
      </svg>
    `;
  }

  if (s.layout === "taiko-west-apt") {
    return `
      <svg viewBox="0 0 480 288" width="100%" height="auto" role="img" aria-label="${s.hTitle} 周邊雙車站關係動畫圖">
        ${compass}
        <line x1="422" y1="16" x2="422" y2="272" stroke="#cbd5e1" stroke-width="9" stroke-dasharray="8 5" />
        <line x1="40" y1="116" x2="430" y2="116" stroke="#e2e8f0" stroke-width="20" stroke-linecap="round" />
        <line x1="40" y1="116" x2="400" y2="116" stroke="#fda4af" stroke-width="4.5" />
        <line x1="226" y1="116" x2="226" y2="202" stroke="#e2e8f0" stroke-width="18" stroke-linecap="round" />

        <!-- Secondary Connector from JR Nagoya -->
        <line x1="330" y1="116" x2="226" y2="116" stroke="#64748b" stroke-width="2.5" stroke-dasharray="5 4" />
        <line x1="226" y1="110" x2="236" y2="50" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4 4" />

        <!-- Top Secondary -->
        <rect x="148" y="16" width="180" height="32" rx="7" fill="#334155" />
        <text x="238" y="36" text-anchor="middle" font-size="10.5" font-weight="800" fill="#ffffff">${s.subN}</text>

        <!-- West Primary: Taiko-dori Station -->
        <rect x="16" y="86" width="146" height="56" rx="10" fill="#0f172a" />
        <text x="89" y="106" text-anchor="middle" font-size="11.2" font-weight="800" fill="#ffffff">🥇 ${s.pTitle}</text>
        <rect x="30" y="113" width="118" height="22" rx="5" fill="#fef08a" stroke="#eab308" stroke-width="1.5" />
        <text x="89" y="128" text-anchor="middle" font-size="10.6" font-weight="800" fill="#713f12">${s.pExit}</text>

        <!-- East Secondary: JR Nagoya -->
        <rect x="328" y="88" width="138" height="46" rx="9" fill="#334155" />
        <text x="397" y="106" text-anchor="middle" font-size="11" font-weight="800" fill="#ffffff">${s.subE}</text>
        <rect x="340" y="111" width="114" height="17" rx="4" fill="#f1f5f9" />
        <text x="397" y="123" text-anchor="middle" font-size="9.8" font-weight="800" fill="#0f172a">${s.subESub}</text>
        <text x="282" y="96" text-anchor="middle" font-size="10" font-weight="800" fill="#334155">${s.subWalkE}</text>

        <!-- Animated Walk from Taiko-dori -->
        <path d="M 162 116 L 226 116 L 226 194" fill="none" stroke="#2563eb" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="anim-walk-line" />
        <circle r="6.5" fill="#1d4ed8" stroke="#ffffff" stroke-width="2.5">
          <animateMotion dur="2.6s" repeatCount="indefinite" path="M 162 116 L 226 116 L 226 194" />
        </circle>

        <!-- Konbini -->
        <circle cx="226" cy="154" r="7" fill="#10b981" stroke="#ffffff" stroke-width="2" />
        <g transform="translate(358, 168)">
          <rect x="-88" y="-14" width="176" height="28" rx="7" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" />
          <text x="0" y="4" text-anchor="middle" font-size="10.4" font-weight="800" fill="#065f46">${s.konbini1}</text>
        </g>

        <g transform="translate(154, 166)">
          <rect x="-36" y="-10" width="72" height="20" rx="10" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5" />
          <text x="0" y="4" text-anchor="middle" font-size="10" font-weight="800" fill="#1d4ed8">${s.seg1}</text>
        </g>

        <!-- Hotel Pin & Card -->
        <circle cx="226" cy="198" r="14" fill="#2563eb" class="anim-pulse-circle" />
        <circle cx="226" cy="198" r="11" fill="#1d4ed8" stroke="#ffffff" stroke-width="2.5" />
        <text x="226" y="202" text-anchor="middle" font-size="11" fill="#ffffff" font-weight="800">★</text>
        <rect x="112" y="218" width="228" height="46" rx="9" fill="#1d4ed8" />
        <text x="226" y="237" text-anchor="middle" font-size="11.5" font-weight="800" fill="#ffffff">${s.hTitle}</text>
        <text x="226" y="254" text-anchor="middle" font-size="10.2" fill="#dbeafe">${s.hSub}</text>
      </svg>
    `;
  }

  if (s.layout === "sakura-north") {
    return `
      <svg viewBox="0 0 480 288" width="100%" height="auto" role="img" aria-label="${s.hTitle} 周邊雙車站關係動畫圖">
        ${compass}
        <!-- Subway Lines -->
        <line x1="60" y1="226" x2="430" y2="226" stroke="#fda4af" stroke-width="4.5" />
        <path d="M 92 200 L 92 52" fill="none" stroke="#fcd34d" stroke-width="4.5" />
        <path d="M 164 206 L 228 206 L 228 96 L 280 96" fill="none" stroke="#e2e8f0" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" />

        <!-- Secondary Connectors -->
        <line x1="268" y1="88" x2="158" y2="42" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4 4" />
        <line x1="296" y1="108" x2="380" y2="210" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4 4" />

        <!-- Secondary NW: Kamejima -->
        <rect x="20" y="16" width="142" height="42" rx="8" fill="#334155" />
        <text x="91" y="33" text-anchor="middle" font-size="10.8" font-weight="800" fill="#ffffff">${s.subNW}</text>
        <rect x="32" y="37" width="118" height="16" rx="4" fill="#f1f5f9" />
        <text x="91" y="48.5" text-anchor="middle" font-size="9.6" font-weight="800" fill="#0f172a">${s.subNWSub}</text>

        <!-- Secondary SE: Kokusai Center -->
        <rect x="318" y="210" width="146" height="44" rx="8" fill="#334155" />
        <text x="391" y="227" text-anchor="middle" font-size="10.8" font-weight="800" fill="#ffffff">${s.subSE}</text>
        <rect x="330" y="232" width="122" height="16" rx="4" fill="#f1f5f9" />
        <text x="391" y="243.5" text-anchor="middle" font-size="9.6" font-weight="800" fill="#0f172a">${s.subSESub}</text>

        <!-- Primary SW: Subway/JR Nagoya -->
        <rect x="18" y="182" width="148" height="56" rx="10" fill="#0f172a" />
        <text x="92" y="202" text-anchor="middle" font-size="11.5" font-weight="800" fill="#ffffff">🥇 ${s.pTitle}</text>
        <rect x="28" y="209" width="128" height="22" rx="5" fill="#fef08a" stroke="#eab308" stroke-width="1.5" />
        <text x="92" y="224" text-anchor="middle" font-size="10.2" font-weight="800" fill="#713f12">${s.pExit}</text>

        <!-- Animated Walk -->
        <path d="M 166 206 L 228 206 L 228 96 L 278 96" fill="none" stroke="#2563eb" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="anim-walk-line" />
        <circle r="6.5" fill="#1d4ed8" stroke="#ffffff" stroke-width="2.5">
          <animateMotion dur="3.0s" repeatCount="indefinite" path="M 166 206 L 228 206 L 228 96 L 278 96" />
        </circle>

        <!-- Konbini -->
        <circle cx="228" cy="154" r="7" fill="#10b981" stroke="#ffffff" stroke-width="2" />
        <g transform="translate(348, 154)">
          <rect x="-92" y="-14" width="184" height="28" rx="7" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" />
          <text x="0" y="4" text-anchor="middle" font-size="10.4" font-weight="800" fill="#065f46">${s.konbini1}</text>
        </g>

        <g transform="translate(182, 136)">
          <rect x="-36" y="-10" width="72" height="20" rx="10" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5" />
          <text x="0" y="4" text-anchor="middle" font-size="10" font-weight="800" fill="#1d4ed8">${s.seg1}</text>
        </g>

        <!-- Hotel Pin & Card -->
        <circle cx="286" cy="96" r="14" fill="#2563eb" class="anim-pulse-circle" />
        <circle cx="286" cy="96" r="11" fill="#1d4ed8" stroke="#ffffff" stroke-width="2.5" />
        <text x="286" y="100" text-anchor="middle" font-size="11" fill="#ffffff" font-weight="800">★</text>
        <rect x="192" y="28" width="218" height="46" rx="9" fill="#1d4ed8" />
        <text x="301" y="47" text-anchor="middle" font-size="11.5" font-weight="800" fill="#ffffff">${s.hTitle}</text>
        <text x="301" y="64" text-anchor="middle" font-size="10" fill="#dbeafe">${s.hSub}</text>
      </svg>
    `;
  }

  if (s.layout === "sakura-east") {
    return `
      <svg viewBox="0 0 480 288" width="100%" height="auto" role="img" aria-label="${s.hTitle} 周邊雙車站關係動畫圖">
        ${compass}
        <!-- Sakura-dori Ave + Unimall Underground + Sakuradori Line -->
        <line x1="40" y1="118" x2="430" y2="118" stroke="#e2e8f0" stroke-width="20" stroke-linecap="round" />
        <line x1="40" y1="118" x2="420" y2="118" stroke="#fda4af" stroke-width="4.5" />
        <line x1="240" y1="118" x2="240" y2="202" stroke="#e2e8f0" stroke-width="18" stroke-linecap="round" />
        <text x="236" y="76" text-anchor="middle" font-size="10" font-weight="700" fill="#be123c">← 櫻通大道・Unimall地下街連通 →</text>

        <!-- Landmark Top -->
        <rect x="140" y="18" width="204" height="30" rx="7" fill="#fffbeb" stroke="#fcd34d" stroke-width="1.5" />
        <text x="242" y="37" text-anchor="middle" font-size="10.5" font-weight="800" fill="#92400e">${s.landmarkTop}</text>

        <!-- Secondary Connector to Kokusai Center -->
        <line x1="240" y1="118" x2="328" y2="118" stroke="#64748b" stroke-width="2.5" stroke-dasharray="5 4" />
        <text x="286" y="142" text-anchor="middle" font-size="9.8" font-weight="800" fill="#334155">${s.subWalkE}</text>

        <!-- West Station: Nagoya Sakura-dori -->
        <rect x="16" y="88" width="150" height="56" rx="10" fill="#0f172a" />
        <text x="91" y="108" text-anchor="middle" font-size="11.2" font-weight="800" fill="#ffffff">${s.pTitle}</text>
        <rect x="26" y="115" width="130" height="22" rx="5" fill="#fef08a" stroke="#eab308" stroke-width="1.5" />
        <text x="91" y="130" text-anchor="middle" font-size="10" font-weight="800" fill="#713f12">${s.pExit}</text>

        <!-- East Station: Kokusai Center -->
        <rect x="326" y="90" width="142" height="48" rx="9" fill="#334155" />
        <text x="397" y="108" text-anchor="middle" font-size="11" font-weight="800" fill="#ffffff">${s.subE}</text>
        <rect x="338" y="114" width="118" height="17" rx="4" fill="#f1f5f9" />
        <text x="397" y="126" text-anchor="middle" font-size="9.8" font-weight="800" fill="#0f172a">${s.subESub}</text>

        <!-- Animated Walk -->
        <path d="M 166 118 L 240 118 L 240 194" fill="none" stroke="#2563eb" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="anim-walk-line" />
        <circle r="6.5" fill="#1d4ed8" stroke="#ffffff" stroke-width="2.5">
          <animateMotion dur="2.8s" repeatCount="indefinite" path="M 166 118 L 240 118 L 240 194" />
        </circle>

        <!-- Konbini -->
        <circle cx="240" cy="156" r="7" fill="#10b981" stroke="#ffffff" stroke-width="2" />
        <g transform="translate(110, 180)">
          <rect x="-88" y="-14" width="176" height="28" rx="7" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" />
          <text x="0" y="4" text-anchor="middle" font-size="10.2" font-weight="800" fill="#065f46">${s.konbini1}</text>
        </g>

        <g transform="translate(202, 98)">
          <rect x="-36" y="-10" width="72" height="20" rx="10" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5" />
          <text x="0" y="4" text-anchor="middle" font-size="10" font-weight="800" fill="#1d4ed8">${s.seg1}</text>
        </g>

        <!-- Hotel Pin & Card -->
        <circle cx="240" cy="198" r="14" fill="#2563eb" class="anim-pulse-circle" />
        <circle cx="240" cy="198" r="11" fill="#1d4ed8" stroke="#ffffff" stroke-width="2.5" />
        <text x="240" y="202" text-anchor="middle" font-size="11" fill="#ffffff" font-weight="800">★</text>
        <rect x="128" y="218" width="224" height="46" rx="9" fill="#1d4ed8" />
        <text x="240" y="237" text-anchor="middle" font-size="11.5" font-weight="800" fill="#ffffff">${s.hTitle}</text>
        <text x="240" y="254" text-anchor="middle" font-size="10.2" fill="#dbeafe">${s.hSub}</text>
      </svg>
    `;
  }

  if (s.layout === "sakae-hisaya") {
    return `
      <svg viewBox="0 0 480 288" width="100%" height="auto" role="img" aria-label="${s.hTitle} 周邊雙車站關係動畫圖">
        ${compass}
        <!-- North Sakuradori Line & South Higashiyama Line -->
        <line x1="40" y1="38" x2="420" y2="38" stroke="#fda4af" stroke-width="4.5" />
        <line x1="40" y1="242" x2="440" y2="242" stroke="#fcd34d" stroke-width="5" />
        <line x1="240" y1="38" x2="240" y2="242" stroke="#e2e8f0" stroke-width="22" stroke-linecap="round" />

        <!-- Top Secondary: Hisaya-odori Station -->
        <rect x="132" y="14" width="216" height="46" rx="9" fill="#334155" />
        <text x="240" y="32" text-anchor="middle" font-size="11" font-weight="800" fill="#ffffff">${s.subN}</text>
        <rect x="144" y="37" width="192" height="17" rx="4" fill="#f1f5f9" />
        <text x="240" y="49" text-anchor="middle" font-size="9.6" font-weight="800" fill="#0f172a">${s.subNSub}</text>

        <!-- Connector North -->
        <line x1="240" y1="92" x2="240" y2="62" stroke="#64748b" stroke-width="2.5" stroke-dasharray="4 4" />
        <text x="314" y="80" text-anchor="middle" font-size="10" font-weight="800" fill="#334155">${s.subWalkN}</text>

        <!-- Landmarks -->
        <rect x="18" y="190" width="118" height="30" rx="6" fill="#f1f5f9" stroke="#cbd5e1" />
        <text x="77" y="209" text-anchor="middle" font-size="10.2" font-weight="700" fill="#475569">🛍️ 唐吉訶德榮本店</text>
        <rect x="342" y="190" width="120" height="30" rx="6" fill="#eff6ff" stroke="#93c5fd" />
        <text x="402" y="209" text-anchor="middle" font-size="10.2" font-weight="700" fill="#1d4ed8">✨ 綠洲21 (4A出口)</text>

        <!-- Animated Walk from Sakae Station -->
        <path d="M 240 218 L 240 154" fill="none" stroke="#2563eb" stroke-width="4.5" stroke-linecap="round" class="anim-walk-line" />
        <circle r="6.5" fill="#1d4ed8" stroke="#ffffff" stroke-width="2.5">
          <animateMotion dur="2.1s" repeatCount="indefinite" path="M 240 218 L 240 154" />
        </circle>

        <g transform="translate(318, 174)">
          <rect x="-52" y="-11" width="104" height="22" rx="11" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5" />
          <text x="0" y="4" text-anchor="middle" font-size="10.5" font-weight="800" fill="#1d4ed8">${s.seg1}</text>
        </g>

        <!-- Primary Bottom: Sakae Station -->
        <rect x="158" y="218" width="164" height="56" rx="10" fill="#0f172a" />
        <text x="240" y="238" text-anchor="middle" font-size="11.5" font-weight="800" fill="#ffffff">🥇 ${s.pTitle}</text>
        <rect x="176" y="245" width="128" height="22" rx="5" fill="#fef08a" stroke="#eab308" stroke-width="1.5" />
        <text x="240" y="260" text-anchor="middle" font-size="10.6" font-weight="800" fill="#713f12">${s.pExit}</text>

        <!-- Combined Hotel + 1F Konbini in Center -->
        <circle cx="240" cy="152" r="14" fill="#2563eb" class="anim-pulse-circle" />
        <circle cx="240" cy="152" r="11" fill="#1d4ed8" stroke="#ffffff" stroke-width="2.5" />
        <text x="240" y="156" text-anchor="middle" font-size="11" fill="#ffffff" font-weight="800">★</text>
        <rect x="122" y="92" width="236" height="48" rx="10" fill="#1d4ed8" />
        <text x="240" y="111" text-anchor="middle" font-size="12" font-weight="800" fill="#ffffff">${s.hTitle}</text>
        <rect x="138" y="117" width="204" height="18" rx="4" fill="#ecfdf5" />
        <text x="240" y="130" text-anchor="middle" font-size="10.4" font-weight="800" fill="#065f46">${s.konbini1F}</text>
      </svg>
    `;
  }

  if (s.layout === "fushimi-hub") {
    return `
      <svg viewBox="0 0 480 288" width="100%" height="auto" role="img" aria-label="${s.hTitle} 周邊雙車站關係動畫圖">
        ${compass}
        <!-- Higashiyama Line Horizontal -->
        <line x1="36" y1="120" x2="444" y2="120" stroke="#e2e8f0" stroke-width="20" stroke-linecap="round" />
        <line x1="36" y1="120" x2="444" y2="120" stroke="#fcd34d" stroke-width="4.5" />
        <line x1="234" y1="120" x2="234" y2="196" stroke="#e2e8f0" stroke-width="18" stroke-linecap="round" />

        <!-- Top Reference -->
        <rect x="148" y="16" width="184" height="32" rx="7" fill="#334155" />
        <text x="240" y="36" text-anchor="middle" font-size="10.5" font-weight="800" fill="#ffffff">${s.subTop}</text>
        <line x1="238" y1="48" x2="234" y2="114" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4 4" />

        <!-- Primary Station Left: Fushimi -->
        <rect x="16" y="88" width="146" height="56" rx="10" fill="#0f172a" />
        <text x="89" y="108" text-anchor="middle" font-size="11.5" font-weight="800" fill="#ffffff">🥇 ${s.pTitle}</text>
        <rect x="30" y="115" width="118" height="22" rx="5" fill="#fef08a" stroke="#eab308" stroke-width="1.5" />
        <text x="89" y="130" text-anchor="middle" font-size="10.5" font-weight="800" fill="#713f12">${s.pExit}</text>

        <!-- Secondary Station Right -->
        <rect x="326" y="90" width="140" height="48" rx="9" fill="#334155" />
        <text x="396" y="108" text-anchor="middle" font-size="11" font-weight="800" fill="#ffffff">${s.subRight}</text>
        <rect x="338" y="114" width="116" height="17" rx="4" fill="#f1f5f9" />
        <text x="396" y="126" text-anchor="middle" font-size="9.8" font-weight="800" fill="#0f172a">${s.subRightSub}</text>
        <line x1="234" y1="120" x2="326" y2="120" stroke="#64748b" stroke-width="2.2" stroke-dasharray="4 4" />

        <!-- Animated Walk -->
        <path d="M 162 120 L 234 120 L 234 192" fill="none" stroke="#2563eb" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="anim-walk-line" />
        <circle r="6.5" fill="#1d4ed8" stroke="#ffffff" stroke-width="2.5">
          <animateMotion dur="2.7s" repeatCount="indefinite" path="M 162 120 L 234 120 L 234 192" />
        </circle>

        <!-- Konbini -->
        <circle cx="234" cy="156" r="7" fill="#10b981" stroke="#ffffff" stroke-width="2" />
        <g transform="translate(366, 168)">
          <rect x="-90" y="-14" width="180" height="28" rx="7" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" />
          <text x="0" y="4" text-anchor="middle" font-size="10.2" font-weight="800" fill="#065f46">${s.konbini1}</text>
        </g>

        <g transform="translate(198, 96)">
          <rect x="-34" y="-10" width="68" height="20" rx="10" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5" />
          <text x="0" y="4" text-anchor="middle" font-size="10" font-weight="800" fill="#1d4ed8">${s.seg1}</text>
        </g>

        <!-- Landmark Note -->
        <rect x="16" y="168" width="166" height="26" rx="6" fill="#fffbeb" stroke="#fcd34d" />
        <text x="99" y="185" text-anchor="middle" font-size="9.8" font-weight="800" fill="#92400e">${s.landmarkBot}</text>

        <!-- Hotel Pin & Card -->
        <circle cx="234" cy="196" r="14" fill="#2563eb" class="anim-pulse-circle" />
        <circle cx="234" cy="196" r="11" fill="#1d4ed8" stroke="#ffffff" stroke-width="2.5" />
        <text x="234" y="200" text-anchor="middle" font-size="11" fill="#ffffff" font-weight="800">★</text>
        <rect x="122" y="216" width="224" height="46" rx="9" fill="#1d4ed8" />
        <text x="234" y="235" text-anchor="middle" font-size="11.5" font-weight="800" fill="#ffffff">${s.hTitle}</text>
        <text x="234" y="252" text-anchor="middle" font-size="10.2" fill="#dbeafe">${s.hSub}</text>
      </svg>
    `;
  }

  if (s.layout === "nakamura-koen") {
    return `
      <svg viewBox="0 0 480 288" width="100%" height="auto" role="img" aria-label="Central Nagoya Residence 周邊雙車站動畫圖">
        ${compass}
        <line x1="36" y1="222" x2="444" y2="222" stroke="#fcd34d" stroke-width="6" />
        <text x="366" y="266" text-anchor="middle" font-size="10" font-weight="800" fill="#b45309">東山線 7 分直達名古屋站 →</text>
        <path d="M 190 206 L 190 96 L 116 96" fill="none" stroke="#e2e8f0" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" />

        <!-- Secondary East: Nakamura Nisseki -->
        <rect x="318" y="196" width="144" height="44" rx="8" fill="#334155" />
        <text x="390" y="213" text-anchor="middle" font-size="10.8" font-weight="800" fill="#ffffff">🥈 東山線 中村日赤站</text>
        <rect x="332" y="218" width="116" height="16" rx="4" fill="#f1f5f9" />
        <text x="390" y="229.5" text-anchor="middle" font-size="9.6" font-weight="800" fill="#0f172a">東側步行 9 分鐘</text>

        <!-- Primary Station -->
        <rect x="116" y="200" width="148" height="54" rx="10" fill="#0f172a" />
        <text x="190" y="220" text-anchor="middle" font-size="11.5" font-weight="800" fill="#ffffff">🥇 地鐵 中村公園站</text>
        <rect x="134" y="227" width="112" height="21" rx="5" fill="#fef08a" stroke="#eab308" stroke-width="1.5" />
        <text x="190" y="241" text-anchor="middle" font-size="10.5" font-weight="800" fill="#713f12">2號出口 (走2分)</text>

        <!-- Animated Walk -->
        <path d="M 190 200 L 190 96 L 120 96" fill="none" stroke="#2563eb" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="anim-walk-line" />
        <circle r="6.5" fill="#1d4ed8" stroke="#ffffff" stroke-width="2.5">
          <animateMotion dur="2.5s" repeatCount="indefinite" path="M 190 200 L 190 96 L 120 96" />
        </circle>

        <circle cx="190" cy="152" r="7" fill="#10b981" stroke="#ffffff" stroke-width="2" />
        <g transform="translate(308, 152)">
          <rect x="-86" y="-14" width="172" height="28" rx="7" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" />
          <text x="0" y="4" text-anchor="middle" font-size="10.5" font-weight="800" fill="#065f46">🏪 全家 ＆ 7-11 (出站30秒)</text>
        </g>

        <g transform="translate(174, 68)">
          <rect x="-46" y="-10" width="92" height="20" rx="10" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5" />
          <text x="0" y="4" text-anchor="middle" font-size="10" font-weight="800" fill="#1d4ed8">🚶 步行 2 分 (150m)</text>
        </g>

        <circle cx="112" cy="96" r="14" fill="#2563eb" class="anim-pulse-circle" />
        <circle cx="112" cy="96" r="11" fill="#1d4ed8" stroke="#ffffff" stroke-width="2.5" />
        <text x="112" y="100" text-anchor="middle" font-size="11" fill="#ffffff" font-weight="800">★</text>
        <rect x="18" y="114" width="160" height="44" rx="9" fill="#1d4ed8" />
        <text x="98" y="133" text-anchor="middle" font-size="11" font-weight="800" fill="#ffffff">⑲ Central Residence</text>
        <text x="98" y="149" text-anchor="middle" font-size="9.8" fill="#dbeafe">120㎡包層｜大樓有電梯</text>
      </svg>
    `;
  }

  // Osaka ESLEAD Tsuruhashi
  return `
    <svg viewBox="0 0 480 288" width="100%" height="auto" role="img" aria-label="ESLEAD HOTEL 大阪鶴橋周邊雙車站動畫圖">
      ${compass}
      <line x1="24" y1="152" x2="452" y2="152" stroke="#e2e8f0" stroke-width="22" stroke-linecap="round" />
      <line x1="24" y1="152" x2="452" y2="152" stroke="#f472b6" stroke-width="4" />
      <line x1="418" y1="24" x2="418" y2="262" stroke="#cbd5e1" stroke-width="9" stroke-dasharray="7 5" />

      <!-- Secondary West: Tanimachi 9-chome -->
      <rect x="18" y="218" width="164" height="42" rx="8" fill="#334155" />
      <text x="100" y="235" text-anchor="middle" font-size="10.5" font-weight="800" fill="#ffffff">🥈 谷町九丁目站 (千日前線)</text>
      <rect x="32" y="239" width="136" height="16" rx="4" fill="#f1f5f9" />
      <text x="100" y="250.5" text-anchor="middle" font-size="9.5" font-weight="800" fill="#0f172a">西走 10 分｜搭車2站到黑門</text>

      <!-- Secondary East: JR & Kintetsu Tsuruhashi -->
      <rect x="322" y="218" width="144" height="42" rx="8" fill="#334155" />
      <text x="394" y="235" text-anchor="middle" font-size="10.5" font-weight="800" fill="#ffffff">🥈 JR環狀線・近鐵 鶴橋站</text>
      <rect x="336" y="239" width="116" height="16" rx="4" fill="#f1f5f9" />
      <text x="394" y="250.5" text-anchor="middle" font-size="9.5" font-weight="800" fill="#0f172a">東走 3 分｜關空快速直達</text>

      <!-- Straight 1-min Animated Walk -->
      <path d="M 304 152 L 106 152" fill="none" stroke="#059669" stroke-width="4.5" stroke-linecap="round" class="anim-walk-line" />
      <circle r="6.5" fill="#059669" stroke="#ffffff" stroke-width="2.5">
        <animateMotion dur="2.1s" repeatCount="indefinite" path="M 304 152 L 106 152" />
      </circle>

      <!-- Primary Station: Subway Tsuruhashi Exit 4 -->
      <rect x="300" y="118" width="146" height="56" rx="10" fill="#0f172a" />
      <text x="373" y="138" text-anchor="middle" font-size="11.5" font-weight="800" fill="#ffffff">🥇 地鐵千日前線 鶴橋站</text>
      <rect x="318" y="145" width="110" height="22" rx="5" fill="#fef08a" stroke="#eab308" stroke-width="1.5" />
      <text x="373" y="160" text-anchor="middle" font-size="10.8" font-weight="800" fill="#713f12">4號出口 (走1分)</text>

      <!-- Konbini -->
      <circle cx="208" cy="152" r="7.5" fill="#10b981" stroke="#ffffff" stroke-width="2" />
      <g transform="translate(212, 88)">
        <rect x="-88" y="-19" width="176" height="36" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" />
        <text x="0" y="-3" text-anchor="middle" font-size="10.8" font-weight="800" fill="#065f46">🏪 全家 鶴橋站前店 (30秒)</text>
        <text x="0" y="11" text-anchor="middle" font-size="10" font-weight="700" fill="#047857">＋ Lawson 100 生鮮百元超商</text>
      </g>

      <g transform="translate(206, 182)">
        <rect x="-52" y="-10" width="104" height="20" rx="10" fill="#ffffff" stroke="#6ee7b7" stroke-width="1.5" />
        <text x="0" y="4" text-anchor="middle" font-size="10" font-weight="800" fill="#059669">🚶 直走 1 分 (110m)</text>
      </g>

      <!-- Hotel Pin -->
      <circle cx="96" cy="152" r="14" fill="#10b981" class="anim-pulse-circle" />
      <circle cx="96" cy="152" r="11" fill="#059669" stroke="#ffffff" stroke-width="2.5" />
      <text x="96" y="156" text-anchor="middle" font-size="11" fill="#ffffff" font-weight="800">✓</text>
      <rect x="16" y="34" width="170" height="44" rx="9" fill="#059669" />
      <text x="101" y="53" text-anchor="middle" font-size="11.5" font-weight="800" fill="#ffffff">✅ ESLEAD 大阪鶴橋</text>
      <text x="101" y="69" text-anchor="middle" font-size="10" fill="#d1fae5">前 3 晚已訂妥｜出站 1 分鐘</text>
    </svg>
  `;
}

// ==================== 狀態管理 ====================
let currentTab = "itinerary";
let selectedDay = 1;
let showAllDays = false;
let hotelFilter = "nagoya";
let hotelSort = "rec";
let selectedHotelId = "comfort";
let mapMode = "schematic";
let spotFilter = "all";
let checklistState = loadChecklist();

function loadChecklist() {
  try {
    const saved = localStorage.getItem("nagoya2027_checklist_v2");
    if (saved) return JSON.parse(saved);
  } catch (e) {}
  const init = {};
  CHECKLIST_ITEMS.forEach(item => {
    init[item.id] = item.defaultDone;
  });
  return init;
}

function saveChecklist() {
  try {
    localStorage.setItem("nagoya2027_checklist_v2", JSON.stringify(checklistState));
  } catch (e) {}
}

// ==================== 名古屋全地鐵＋必去景點＋住宿聯動大地圖引擎 ====================
let metroHotelId = "comfort";
let metroSpotId = "castle";
let metroZoomed = false;

const DAY_TO_METRO_SPOT = {
  4: "castle",
  5: "bokka",
  6: "ghibli",
  7: "port",
  8: "science"
};

const METRO_COORDS = {
  shinosaka: [36, 175],
  bokka: [195, 44],
  nakamura: [58, 120],
  kamejima: [132, 120],
  taikodori: [106, 175],
  meieki: [195, 175],
  kokusai: [274, 175],
  marunouchi: [338, 175],
  hisaya: [420, 175],
  castle: [420, 84],
  fushimi: [338, 248],
  sakae: [420, 248],
  fujigaoka: [554, 248],
  ghibli: [662, 248],
  osu: [338, 318],
  kamimaezu: [420, 318],
  kanayama: [420, 374],
  atsuta: [512, 374],
  legoland: [195, 434],
  port: [420, 434],
  airport: [622, 434]
};

const METRO_SPOTS = [
  { id: "castle", pill: "🏯 D4 名古屋城・矢場豬排", name: "名古屋城 ＆ 矢場味噌豬排（金鯱橫丁）", dayTag: "Day 4 必去", mustGo: true, node: "castle" },
  { id: "sakae", pill: "✨ D4/7 綠洲21・榮商圈", name: "綠洲21 水之宇宙船 ＆ 榮商圈逛街", dayTag: "Day 4 & 7 必去", mustGo: true, node: "sakae" },
  { id: "bokka", pill: "❄️ D5 牧歌之里(玩雪)", name: "牧歌之里 冰雪樂園（太閤通口搭直達巴士）", dayTag: "Day 5 必去", mustGo: true, node: "bokka" },
  { id: "ghibli", pill: "🌱 D6 吉卜力公園", name: "吉卜力公園（愛・地球博記念公園）", dayTag: "Day 6 必去", mustGo: true, node: "ghibli" },
  { id: "kako", pill: "🍞 D7 KAKO花車吐司", name: "KAKO 花車本店（四色果醬紅豆鮮奶油吐司）", dayTag: "Day 7 早餐必去", mustGo: true, node: "kokusai" },
  { id: "port", pill: "⚓ D7 海洋博物館・破冰船", name: "名古屋海洋博物館 ＆ 南極破冰船富士號", dayTag: "Day 7 必去", mustGo: true, node: "port" },
  { id: "science", pill: "🔬 D8 名古屋市科學館", name: "名古屋市科學館（世界最大星象儀・小學生免費）", dayTag: "Day 8 必去", mustGo: true, node: "fushimi" },
  { id: "airport", pill: "✈️ D8 中部國際機場", name: "中部國際機場 新特麗亞 (NGO)", dayTag: "Day 8 返台", mustGo: true, node: "airport" },
  { id: "osu", pill: "🏮 順遊：大須觀音商店街", name: "大須觀音 ＆ 大須拱廊商店街（雨天備案首選）", dayTag: "熱門大景點", mustGo: false, node: "osu" },
  { id: "atsuta", pill: "⛩️ 順遊：熱田神宮", name: "熱田神宮（日本三大神宮・蓬萊軒鰻魚飯）", dayTag: "熱門大景點", mustGo: false, node: "atsuta" },
  { id: "legoland", pill: "🧱 順遊：樂高樂園・磁浮館", name: "日本樂高樂園 Legoland ＆ 磁浮鐵道館", dayTag: "熱門大景點", mustGo: false, node: "legoland" },
  { id: "all", pill: "🌟 全地鐵＆全景點總覽", name: "名古屋全地鐵路線與所有景點總覽", dayTag: "全圖亮燈", mustGo: true, node: "meieki" }
];

const HOTEL_METRO_HUB = {
  "comfort": { hub: "meieki_taiko", stNode: "meieki", stLabel: "名古屋站(太閤通口)", walk: 5 },
  "chisun": { hub: "meieki_taiko", stNode: "meieki", stLabel: "名古屋站(太閤通口)", walk: 4 },
  "toyoko-shinkansen": { hub: "meieki_taiko", stNode: "meieki", stLabel: "名古屋站(太閤通口)", walk: 4 },
  "sotetsu-shinkansen": { hub: "meieki_taiko", stNode: "meieki", stLabel: "名古屋站(太閤通口)", walk: 4 },
  "daiwa-shinkansen": { hub: "meieki_taiko", stNode: "meieki", stLabel: "名古屋站(太閤通口)", walk: 3 },
  "daiwa-taiko": { hub: "meieki_taiko", stNode: "meieki", stLabel: "名古屋站(太閤通口)", walk: 4 },
  "richmond-shinkansen": { hub: "kamejima", stNode: "kamejima", stLabel: "龜島站(或走7分至JR名駅)", walk: 5 },
  "vessel-campana": { hub: "meieki_sakura", stNode: "meieki", stLabel: "地鐵名古屋站(1號口)", walk: 4 },
  "cypress-ekimae": { hub: "meieki_sakura", stNode: "meieki", stLabel: "地鐵/JR名古屋站", walk: 3 },
  "sotetsu-sakura": { hub: "meieki_sakura", stNode: "meieki", stLabel: "名古屋站(櫻通口)", walk: 4 },
  "toyoko-sakura": { hub: "meieki_sakura", stNode: "meieki", stLabel: "名古屋站(櫻通口)", walk: 4 },
  "comfort-era": { hub: "kokusai", stNode: "kokusai", stLabel: "國際中心站(或名駅8分)", walk: 6 },
  "vessel-sakae": { hub: "sakae", stNode: "sakae", stLabel: "榮站(2分) / 久屋大通站(3分)", walk: 2 },
  "comfort-sakae": { hub: "sakae", stNode: "sakae", stLabel: "榮站(1分) / 久屋大通站(4分)", walk: 1 },
  "comfort-fushimi": { hub: "fushimi", stNode: "fushimi", stLabel: "伏見站(3號口)", walk: 4 },
  "delstyle-nayabashi": { hub: "fushimi", stNode: "fushimi", stLabel: "伏見站(6號口)", walk: 7 },
  "grandbase": { hub: "taikodori", stNode: "taikodori", stLabel: "太閤通站(4分) / JR名駅(8分)", walk: 4 },
  "samurai-house3": { hub: "taikodori", stNode: "taikodori", stLabel: "太閤通站(3分) / JR名駅(7分)", walk: 3 },
  "central-res": { hub: "nakamura", stNode: "nakamura", stLabel: "中村公園站(2號口)", walk: 2 }
};

function ptsToPath(nodeKeys) {
  return nodeKeys.map((k, idx) => {
    const [x, y] = METRO_COORDS[k];
    return `${idx === 0 ? "M" : "L"} ${x} ${y}`;
  }).join(" ");
}

function computeMetroRoute(hotelId, spotId) {
  const h = HOTELS_DATA.find(x => x.id === hotelId && x.city === "nagoya") || HOTELS_DATA[0];
  const info = HOTEL_METRO_HUB[h.id] || HOTEL_METRO_HUB["comfort"];
  const w = info.walk;
  const hub = info.hub;
  const shortH = h.name.split("（")[0];

  if (spotId === "all") {
    return {
      isAll: true,
      path: "",
      color: "#1d4ed8",
      transferNode: null,
      badge: "🌟 全路線亮燈模式",
      totalMinText: `起點已定位於：${info.stLabel}`,
      steps: [`🏨 起點：${shortH}`, `🚇 最近站：${info.stLabel} (走${w}分)`, "👆 點選上方或圖中任一景點，立即播放專屬搭車動畫！"],
      tip: "地圖上實心色塊為「本次旅遊計畫確定必去 8 大景點」，虛線框為「名古屋熱門順遊大景點」；點選任一景點方塊即可互動！"
    };
  }

  // 1. 名古屋城 ＆ 矢場豬排 (castle)
  if (spotId === "castle") {
    if (hub === "sakae") {
      return {
        path: ptsToPath(["sakae", "hisaya", "castle"]),
        color: "#7c3aed",
        transferNode: null,
        badge: "🟢 免轉車一班直達！",
        totalMinText: `⏱️ 全程約 ${w + 9} 分鐘（飯店走 ${w} 分 ＋ 名城線 4 分 ＋ 出站走 5 分）`,
        steps: [`🏨 ${shortH} (走${w}分)`, "🟣 榮站 / 久屋大通站", "🟣 名城線北上 (1–2站・4分)", "🏯 名古屋城站 7號口 (走5分)"],
        tip: "住榮商圈去名古屋城無敵近！逛完本丸御殿出正門就是「金鯱橫丁」吃矢場味噌豬排。"
      };
    }
    if (hub === "fushimi") {
      return {
        path: ptsToPath(["fushimi", "sakae", "hisaya", "castle"]),
        color: "#7c3aed",
        transferNode: "sakae",
        badge: "🔄 榮站同站轉乘 1 次",
        totalMinText: `⏱️ 全程約 ${w + 15} 分鐘（飯店走 ${w} 分 ＋ 地鐵約 10 分）`,
        steps: [`🏨 ${shortH} (走${w}分)`, "🟡 伏見站 (東山線1站)", "🔄 榮站轉乘", "🟣 名城線 (2站・4分)", "🏯 名古屋城站 7號口"],
        tip: "伏見搭東山線 2 分鐘到榮站轉名城線即達，帶 5 個小朋友轉乘指標非常清楚！"
      };
    }
    if (hub === "kamejima" || hub === "nakamura") {
      const startNodes = hub === "nakamura" ? ["nakamura", "kamejima", "meieki"] : ["kamejima", "meieki"];
      return {
        path: ptsToPath([...startNodes, "kokusai", "marunouchi", "hisaya", "castle"]),
        color: "#7c3aed",
        transferNode: "meieki",
        badge: "🔄 轉乘地鐵前往",
        totalMinText: `⏱️ 全程約 ${w + 19} 分鐘`,
        steps: [`🏨 ${shortH} (走${w}分)`, `🟡 ${info.stLabel}`, "🔴 櫻通線至久屋大通", "🟣 名城線 1 站", "🏯 名古屋城站 7號口"],
        tip: "若住 Richmond 新幹線口，也可直接散步 7 分鐘到名古屋站搭櫻通線！"
      };
    }
    const startChain = hub === "taikodori"
      ? ["taikodori", "meieki", "kokusai", "marunouchi", "hisaya", "castle"]
      : hub === "kokusai"
      ? ["kokusai", "marunouchi", "hisaya", "castle"]
      : ["meieki", "kokusai", "marunouchi", "hisaya", "castle"];
    const rideMin = hub === "taikodori" ? 11 : hub === "kokusai" ? 7 : 9;
    return {
      path: ptsToPath(startChain),
      color: "#e11d48",
      transferNode: "hisaya",
      badge: "🔄 久屋大通站輕鬆轉 1 站",
      totalMinText: `⏱️ 全程約 ${w + rideMin + 5} 分鐘（飯店走 ${w} 分 ＋ 地鐵 ${rideMin} 分 ＋ 出站走 5 分）`,
      steps: [`🏨 ${shortH} (走${w}分)`, `🔴 ${info.stLabel} 搭櫻通線`, "🔄 久屋大通站轉乘", "🟣 名城線僅 1 站 (2分)", "🏯 名古屋城站 7號口"],
      tip: "在「久屋大通站」轉乘比在名古屋站人潮少很多！小學生刷兒童 IC 卡單程僅約 ¥120。"
    };
  }

  // 2. 綠洲21 ＆ 榮商圈 (sakae)
  if (spotId === "sakae") {
    if (hub === "sakae") {
      return {
        path: ptsToPath(["hisaya", "sakae"]),
        color: "#10b981",
        transferNode: null,
        badge: "🚶 不用搭車！下樓散步秒到",
        totalMinText: `⏱️ 步行僅 2～3 分鐘即達綠洲21・唐吉訶德・松坂屋！`,
        steps: [`🏨 ${shortH}`, "🚶 下樓散步 2–3 分鐘", "✨ 綠洲21 水之宇宙船 ＆ 榮商圈"],
        tip: "住榮商圈最大優勢：晚上看完綠洲21夜景、逛完唐吉訶德買大包小包，走 2 分鐘直接回房間！"
      };
    }
    if (hub === "fushimi") {
      return {
        path: ptsToPath(["fushimi", "sakae"]),
        color: "#f59e0b",
        transferNode: null,
        badge: "🟢 東山線 1 站（2分鐘）直達！",
        totalMinText: `⏱️ 全程約 ${w + 3} 分鐘（或直接逛街散步 8 分鐘就到！）`,
        steps: [`🏨 ${shortH} (走${w}分)`, "🟡 伏見站 搭東山線 (1站・2分)", "✨ 榮站 4A出口直通綠洲21"],
        tip: "只有 1 站距離，天氣好邊逛邊走也只要 8–10 分鐘！"
      };
    }
    if (hub === "taikodori" || hub === "kokusai") {
      const chain = hub === "taikodori"
        ? ["taikodori", "meieki", "kokusai", "marunouchi", "hisaya", "sakae"]
        : ["kokusai", "marunouchi", "hisaya", "sakae"];
      const rMin = hub === "taikodori" ? 7 : 4;
      return {
        path: ptsToPath(chain),
        color: "#e11d48",
        transferNode: null,
        badge: "🟢 櫻通線免轉車直達久屋大通（綠洲21旁）！",
        totalMinText: `⏱️ 全程約 ${w + rMin + 3} 分鐘（免轉車直達！）`,
        steps: [`🏨 ${shortH} (走${w}分)`, `🔴 ${info.stLabel} 搭櫻通線 (${rMin}分)`, "✨ 久屋大通站出站走 3 分即達綠洲21"],
        tip: "櫻通線「久屋大通站」跟「榮站」地下街完全相連，免換車直接走到綠洲21超省力！"
      };
    }
    const yChain = hub === "nakamura"
      ? ["nakamura", "kamejima", "meieki", "fushimi", "sakae"]
      : hub === "kamejima"
      ? ["kamejima", "meieki", "fushimi", "sakae"]
      : ["meieki", "fushimi", "sakae"];
    const rMin = hub === "nakamura" ? 12 : hub === "kamejima" ? 7 : 5;
    return {
      path: ptsToPath(yChain),
      color: "#f59e0b",
      transferNode: null,
      badge: "🟢 東山線免轉車一班直達！",
      totalMinText: `⏱️ 全程約 ${w + rMin} 分鐘（東山線 ${rMin} 分直達榮站 4A 出口）`,
      steps: [`🏨 ${shortH} (走${w}分)`, `🟡 ${info.stLabel} 搭東山線 (${rMin}分)`, "✨ 榮站 4A出口直通綠洲21"],
      tip: "東山線班次極密（每 2–4 分鐘一班），完全不用看時刻表！"
    };
  }

  // 3. 牧歌之里 (bokka)
  if (spotId === "bokka") {
    if (hub === "meieki_taiko") {
      return {
        path: ptsToPath(["meieki", "bokka"]),
        color: "#0f766e",
        transferNode: null,
        badge: "🏆 早上集合無敵神位！下樓走 3–5 分即上車",
        totalMinText: `⏱️ 飯店走 ${w} 分即達太閤通口集合點 ＋ 專車約 120 分抵牧歌之里`,
        steps: [`🏨 ${shortH}`, `🚶 平路走 ${w} 分到 JR太閤通口`, "🚌 搭一日遊巴士免換車", "❄️ 牧歌之里玩雪一整天"],
        tip: "Day 5 玩雪巴士 08:00 前後在「太閤通口」集合，住太閤通口這幾間早上可以多睡 20 分鐘！"
      };
    }
    if (hub === "taikodori" || hub === "kamejima" || hub === "meieki_sakura") {
      const walkToTaiko = hub === "meieki_sakura" ? 8 : 7;
      const startN = hub === "taikodori" ? ["taikodori", "meieki", "bokka"] : hub === "kamejima" ? ["kamejima", "meieki", "bokka"] : ["meieki", "bokka"];
      return {
        path: ptsToPath(startN),
        color: "#0f766e",
        transferNode: null,
        badge: "🚶 步行 7–8 分直達太閤通口集合點",
        totalMinText: `⏱️ 步行約 ${walkToTaiko} 分鐘抵達太閤通口巴士集合處 ＋ 專車約 120 分`,
        steps: [`🏨 ${shortH}`, `🚶 散步 ${walkToTaiko} 分至 JR名古屋站太閤通口`, "🚌 搭直達巴士出發", "❄️ 牧歌之里冰雪樂園"],
        tip: "早上不用擠上班尖峰地鐵，直接走平面道路去太閤通口買超商熱飲上巴士超輕鬆！"
      };
    }
    const preChain = hub === "sakae"
      ? ["sakae", "fushimi", "meieki", "bokka"]
      : hub === "fushimi"
      ? ["fushimi", "meieki", "bokka"]
      : hub === "kokusai"
      ? ["kokusai", "meieki", "bokka"]
      : ["nakamura", "kamejima", "meieki", "bokka"];
    return {
      path: ptsToPath(preChain),
      color: "#0f766e",
      transferNode: "meieki",
      badge: "🚇 搭地鐵 1–3 站至名古屋站轉巴士",
      totalMinText: `⏱️ 飯店出發約 15–18 分抵太閤通口集合點 ＋ 巴士約 120 分`,
      steps: [`🏨 ${shortH} (走${w}分)`, `🚇 搭地鐵至名古屋站`, "🔄 穿過車站至太閤通口", "🚌 搭專車往 ❄️ 牧歌之里"],
      tip: "名古屋站很大，從地鐵月台走到太閤通口（新幹線西口）建議預留 7–8 分鐘步行時間喔！"
    };
  }

  // 4. 吉卜力公園 (ghibli)
  if (spotId === "ghibli") {
    if (hub === "sakae" || hub === "fushimi") {
      const startC = hub === "sakae" ? ["sakae", "fujigaoka", "ghibli"] : ["fushimi", "sakae", "fujigaoka", "ghibli"];
      return {
        path: ptsToPath(startC),
        color: "#0284c7",
        transferNode: "fujigaoka",
        badge: "🚝 東山線直達藤が丘 ➔ 體驗日本磁浮列車 Linimo！",
        totalMinText: `⏱️ 全程約 ${w + 46} 分鐘（東山線約 26 分 ＋ Linimo 磁浮線 17 分）`,
        steps: [`🏨 ${shortH} (走${w}分)`, "🟡 東山線直達終點藤が丘站", "🔄 轉乘 🔵 Linimo 磁浮列車 (17分)", "🌱 愛・地球博記念公園站(出站即達)"],
        tip: "6–10 歲小朋友超愛搭懸浮在軌道上的 Linimo 磁浮列車，車頭第一排視野超棒！"
      };
    }
    const toMeieki = hub === "taikodori" ? ["taikodori", "meieki"] : hub === "kokusai" ? ["kokusai", "meieki"] : hub === "kamejima" ? ["kamejima", "meieki"] : hub === "nakamura" ? ["nakamura", "kamejima", "meieki"] : ["meieki"];
    return {
      path: ptsToPath([...toMeieki, "fushimi", "sakae", "fujigaoka", "ghibli"]),
      color: "#0284c7",
      transferNode: "fujigaoka",
      badge: "🚌 名鐵巴士中心一班直達 或 🚝 東山線＋Linimo磁浮線",
      totalMinText: `⏱️ 直達巴士約 40 分免換車 ／ 地鐵＋磁浮線約 50 分鐘`,
      steps: [`🏨 ${shortH}`, "🅰️ 名鐵巴士中心搭直達巴士 (40分免轉車)", "🅱️ 或搭 🟡東山線至藤が丘 ➔ 🔵磁浮線Linimo", "🌱 吉卜力公園"],
      tip: "住名古屋站周邊享雙重選擇：早上想輕鬆坐著睡選「直達巴士」；回程想帶孩子體驗磁浮列車選「Linimo＋東山線」！"
    };
  }

  // 5. KAKO 花車本店吐司 (kako @ kokusai)
  if (spotId === "kako") {
    if (hub === "kokusai") {
      return {
        path: ptsToPath(["kokusai"]),
        color: "#10b981",
        transferNode: null,
        badge: "🚶 下樓散步 3 分鐘就到 KAKO 花車本店！",
        totalMinText: "⏱️ 不用搭車！飯店步行 3 分鐘直達排隊名店",
        steps: [`🏨 ${shortH}`, "🚶 散步 3 分鐘", "🍞 KAKO 花車本店（四色果醬吐司）"],
        tip: "住這間去吃 Day 7 早餐堪稱外掛級地利，大人可先去登記候位！"
      };
    }
    if (hub === "meieki_sakura" || hub === "meieki_taiko") {
      const walkMin = hub === "meieki_sakura" ? 5 : 10;
      return {
        path: ptsToPath(["meieki", "kokusai"]),
        color: "#e11d48",
        transferNode: null,
        badge: `🚶 散步 ${walkMin} 分鐘直達（或走 Unimall 地下街到國際中心站）`,
        totalMinText: `⏱️ 散步約 ${walkMin} 分鐘（或櫻通線 1 站 2 分鐘至國際中心站）`,
        steps: [`🏨 ${shortH}`, `🚶 沿地下街／平面散步 ${walkMin} 分鐘`, "🍞 KAKO 花車本店（或3分旁柳橋店）"],
        tip: "冬天早上走 Unimall 地下街一路溫暖無風，從 U14 出口上來走 2 分鐘就是花車本店！"
      };
    }
    if (hub === "taikodori") {
      return {
        path: ptsToPath(["taikodori", "meieki", "kokusai"]),
        color: "#e11d48",
        transferNode: null,
        badge: "🟢 櫻通線免轉車 2 站（4分鐘）直達！",
        totalMinText: `⏱️ 全程約 ${w + 8} 分鐘（櫻通線 4 分 ＋ 國際中心站走 4 分）`,
        steps: [`🏨 ${shortH} (走${w}分)`, "🔴 太閤通站 搭櫻通線 (2站・4分)", "🚇 國際中心站 3號口 (走4分)", "🍞 KAKO 花車本店"],
        tip: "太閤通站搭櫻通線 2 站直達國際中心站，完全不用換車！"
      };
    }
    if (hub === "fushimi") {
      return {
        path: ptsToPath(["fushimi", "meieki", "kokusai"]),
        color: "#f59e0b",
        transferNode: null,
        badge: "🚶 散步 6–9 分鐘直達（免搭車）！",
        totalMinText: "⏱️ 直接散步約 6–9 分鐘抵達花車本店",
        steps: [`🏨 ${shortH}`, "🚶 沿堀川納屋橋散步 6–9 分鐘", "🍞 KAKO 花車本店"],
        tip: "DEL style 納屋橋走到 KAKO 花車本店僅約 6 分鐘，吃完再搭地鐵去名古屋港超順！"
      };
    }
    if (hub === "sakae") {
      return {
        path: ptsToPath(["sakae", "hisaya", "marunouchi", "kokusai"]),
        color: "#e11d48",
        transferNode: null,
        badge: "🟢 久屋大通搭櫻通線 2 站（3分鐘）直達！",
        totalMinText: `⏱️ 全程約 ${w + 9} 分鐘`,
        steps: [`🏨 ${shortH} (走3分至久屋大通)`, "🔴 櫻通線西行 (2站・3分)", "🚇 國際中心站 (走4分)", "🍞 KAKO 花車本店"],
        tip: "吃完吐司後可直接從國際中心／榮轉往名古屋港海洋博物館！"
      };
    }
    return {
      path: ptsToPath([info.stNode, "meieki", "kokusai"]),
      color: "#e11d48",
      transferNode: "meieki",
      badge: "🚇 經名古屋站 1 站即達國際中心",
      totalMinText: `⏱️ 全程約 ${w + 12} 分鐘`,
      steps: [`🏨 ${shortH} (走${w}分)`, "🟡 東山線至名古屋站", "🚶 走地下街或轉1站至國際中心", "🍞 KAKO 花車本店"],
      tip: "若花車本店客滿，走路 3 分鐘的「KAKO 柳橋店」座位更多更適合 9 人！"
    };
  }

  // 6. 名古屋海洋博物館 ＆ 南極破冰船 (port)
  if (spotId === "port") {
    if (hub === "sakae") {
      return {
        path: ptsToPath(["sakae", "kamimaezu", "kanayama", "port"]),
        color: "#7c3aed",
        transferNode: null,
        badge: "🟢 榮站搭名港線免轉車直達終點名古屋港！",
        totalMinText: `⏱️ 全程約 ${w + 24} 分鐘（一班車坐到底約 19 分 ＋ 出站走 5 分）`,
        steps: [`🏨 ${shortH} (走${w}分)`, "🟣 榮站（搭往『名古屋港』方向列車）", "⚓ 名古屋港站 3號口 (走5分即達)"],
        tip: "回程傍晚一樣一班車直達「榮站」逛街採買，完全符合您 Day 7 行程動線！"
      };
    }
    if (hub === "fushimi") {
      return {
        path: ptsToPath(["fushimi", "sakae", "kamimaezu", "kanayama", "port"]),
        color: "#7c3aed",
        transferNode: "sakae",
        badge: "🔄 搭 1 站至榮站轉名港線直達",
        totalMinText: `⏱️ 全程約 ${w + 27} 分鐘`,
        steps: [`🏨 ${shortH} (走${w}分)`, "🟡 伏見站 1 站至榮站", "🔄 轉乘 🟣 名港線直達", "⚓ 名古屋港站 (海洋博物館)"],
        tip: "買 4 設施共通券（大人¥710／小學生¥400）可一次玩海洋博物館操船模擬器＋南極破冰船＋展望室！"
      };
    }
    const startToMeieki = hub === "taikodori" ? ["taikodori", "meieki"] : hub === "kokusai" ? ["kokusai", "meieki"] : hub === "kamejima" ? ["kamejima", "meieki"] : hub === "nakamura" ? ["nakamura", "kamejima", "meieki"] : ["meieki"];
    return {
      path: ptsToPath([...startToMeieki, "kanayama", "port"]),
      color: "#7c3aed",
      transferNode: "kanayama",
      badge: "🔄 金山站輕鬆轉乘名港線直達終點",
      totalMinText: `⏱️ 全程約 ${w + 23} 分鐘（JR/名鐵 4 分至金山 ＋ 名港線 11 分至名古屋港）`,
      steps: [`🏨 ${shortH} (走${w}分)`, "🚆 名古屋站搭 JR/名鐵 (1站・4分) 或東山線至榮", "🔄 金山站轉乘 🟣 名港線 (11分)", "⚓ 名古屋港站 3號口"],
      tip: "Day 7 傍晚從名古屋港離開時，直接搭名港線免換車就能直達「榮站」逛街吃晚餐！"
    };
  }

  // 7. 名古屋市科學館 (science @ fushimi)
  if (spotId === "science") {
    if (hub === "fushimi") {
      return {
        path: ptsToPath(["fushimi"]),
        color: "#10b981",
        transferNode: null,
        badge: "🏆 下樓散步 6～9 分鐘直接到科學館大球體！",
        totalMinText: "⏱️ 不用搭地鐵！散步 6～9 分鐘直達白川公園科學館",
        steps: [`🏨 ${shortH} 寄放行李`, "🚶 散步 6–9 分鐘", "🔬 名古屋市科學館（小學生免門票！）"],
        tip: "Day 8 回台前住伏見超爽：早上退房把大行李寄放櫃檯，走路去玩完科學館再回來拿行李！"
      };
    }
    if (hub === "sakae") {
      return {
        path: ptsToPath(["sakae", "fushimi"]),
        color: "#f59e0b",
        transferNode: null,
        badge: "🟢 東山線僅 1 站（2分鐘）即達伏見站！",
        totalMinText: `⏱️ 全程約 ${w + 7} 分鐘（地鐵 2 分 ＋ 伏見 5號口走 5 分）`,
        steps: [`🏨 ${shortH} (走${w}分)`, "🟡 榮站搭東山線 (1站・2分)", "🔬 伏見站 5號口走 5 分即達科學館"],
        tip: "小學生展示室與世界最大星象儀全部「免費入場」，記得一早先去抽星象儀場次！"
      };
    }
    if (hub === "taikodori" || hub === "kokusai") {
      const c = hub === "taikodori" ? ["taikodori", "meieki", "fushimi"] : ["kokusai", "marunouchi", "fushimi"];
      const tr = hub === "taikodori" ? "meieki" : "marunouchi";
      return {
        path: ptsToPath(c),
        color: "#2563eb",
        transferNode: tr,
        badge: hub === "kokusai" ? "🚶 散步 12 分或搭地鐵 2 站即達" : "🔄 轉乘 1 次僅 2 站即達伏見",
        totalMinText: `⏱️ 全程約 ${w + 12} 分鐘`,
        steps: [`🏨 ${shortH} (走${w}分)`, `🔴 ${info.stLabel}`, `🔄 轉乘至伏見站`, "🔬 伏見站 5號口走 5 分即達科學館"],
        tip: "Day 8 早上可先把行李寄放在飯店或名古屋站置物櫃，一身輕便帶孩子去玩龍捲風實驗！"
      };
    }
    const yC = hub === "nakamura" ? ["nakamura", "kamejima", "meieki", "fushimi"] : hub === "kamejima" ? ["kamejima", "meieki", "fushimi"] : ["meieki", "fushimi"];
    const rM = hub === "nakamura" ? 10 : hub === "kamejima" ? 5 : 3;
    return {
      path: ptsToPath(yC),
      color: "#f59e0b",
      transferNode: null,
      badge: `🟢 東山線免轉車直達伏見站（車程僅 ${rM} 分鐘！）`,
      totalMinText: `⏱️ 全程約 ${w + rM + 5} 分鐘（東山線 ${rM} 分 ＋ 出站走 5 分）`,
      steps: [`🏨 ${shortH} (走${w}分)`, `🟡 ${info.stLabel} 搭東山線 (${rM}分)`, "🔬 伏見站 5號口走 5 分即達科學館"],
      tip: "從名古屋站搭東山線只要 1 站（3分鐘）！玩完坐 1 站回名古屋站領行李搭 μ-SKY 去機場超順暢！"
    };
  }

  // 8. 中部國際機場 (airport)
  if (spotId === "airport") {
    if (hub === "sakae" || hub === "fushimi") {
      const c = hub === "sakae" ? ["sakae", "kamimaezu", "kanayama", "airport"] : ["fushimi", "sakae", "kamimaezu", "kanayama", "airport"];
      return {
        path: ptsToPath(c),
        color: "#0369a1",
        transferNode: "kanayama",
        badge: "🔄 搭至金山站或名古屋站轉乘「名鐵 μ-SKY 特急」直達航廈！",
        totalMinText: `⏱️ 全程約 ${w + 35} 分鐘（地鐵至金山站 ＋ μ-SKY 特急 24 分直達機場）`,
        steps: [`🏨 ${shortH} 領行李`, "🟣 地鐵至金山站 (或東山線至名古屋站)", "🔄 轉乘 ✈️ 名鐵 μ-SKY 全車對號座 (24分)", "✈️ 中部國際機場"],
        tip: "金山站的名鐵月台與地鐵轉乘距離比名古屋站更短、電梯大，推大行李轉機場特急超輕鬆！"
      };
    }
    const pre = hub === "taikodori" ? ["taikodori", "meieki"] : hub === "kokusai" ? ["kokusai", "meieki"] : hub === "kamejima" ? ["kamejima", "meieki"] : hub === "nakamura" ? ["nakamura", "kamejima", "meieki"] : ["meieki"];
    return {
      path: ptsToPath([...pre, "kanayama", "airport"]),
      color: "#0369a1",
      transferNode: pre.length > 1 ? "meieki" : null,
      badge: pre.length === 1 ? "🏆 名鐵名古屋站一班車 28 分鐘直達航廈！" : "🚇 至名鐵名古屋站搭 μ-SKY 特急 28 分直達",
      totalMinText: `⏱️ 飯店出發約 ${w + (pre.length > 1 ? 8 : 0) + 28} 分鐘抵達中部國際機場`,
      steps: [`🏨 ${shortH} 領行李`, "🚆 名鐵名古屋站", "✈️ 搭全車對號座『μ-SKY 特急』(28分)", "✈️ 中部國際機場第1航廈"],
      tip: "9 人返台行李多，強烈推薦提前在手機買好「μ-SKY 對號座」，保證全團人人有位子＋專屬大型行李架！"
    };
  }

  // 9. 順遊：大須觀音商店街 (osu)
  if (spotId === "osu") {
    if (hub === "fushimi") {
      return {
        path: ptsToPath(["fushimi", "osu"]),
        color: "#2563eb",
        transferNode: null,
        badge: "🟢 伏見站搭鶴舞線僅 1 站（2分鐘）直達！",
        totalMinText: `⏱️ 全程約 ${w + 4} 分鐘（或從科學館散步 8 分鐘就到！）`,
        steps: [`🏨 ${shortH} (走${w}分)`, "🔵 伏見站搭鶴舞線 (1站・2分)", "🏮 大須觀音站 2號口直通商店街"],
        tip: "大須商店街全長有遮雨棚，炸雞、鯛魚燒、二手玩具與扭蛋超多，很適合當雨天或晚上順遊點！"
      };
    }
    if (hub === "sakae") {
      return {
        path: ptsToPath(["sakae", "kamimaezu", "osu"]),
        color: "#7c3aed",
        transferNode: null,
        badge: "🟢 榮站搭名城線 2 站（3分鐘）至上前津即達大須商圈！",
        totalMinText: `⏱️ 全程約 ${w + 5} 分鐘`,
        steps: [`🏨 ${shortH} (走${w}分)`, "🟣 榮站搭名城線南下 (2站・3分)", "🏮 上前津站出站就是大須商店街"],
        tip: "從榮商圈沿久屋大通公園散步過去也只要約 12–15 分鐘！"
      };
    }
    const startN = hub === "taikodori" ? ["taikodori", "meieki", "kokusai", "marunouchi", "fushimi", "osu"]
      : hub === "kokusai" ? ["kokusai", "marunouchi", "fushimi", "osu"]
      : hub === "nakamura" ? ["nakamura", "kamejima", "meieki", "fushimi", "osu"]
      : hub === "kamejima" ? ["kamejima", "meieki", "fushimi", "osu"]
      : ["meieki", "fushimi", "osu"];
    const trN = (hub === "taikodori" || hub === "kokusai") ? "marunouchi" : "fushimi";
    return {
      path: ptsToPath(startN),
      color: "#2563eb",
      transferNode: trN,
      badge: "🔄 轉乘鶴舞線 1 站即達大須觀音",
      totalMinText: `⏱️ 全程約 ${w + 11} 分鐘`,
      steps: [`🏨 ${shortH} (走${w}分)`, `🚇 搭至${trN === "fushimi" ? "伏見站" : "丸之內站"}`, "🔵 轉鶴舞線 (2–4分)", "🏮 大須觀音站 2號口"],
      tip: "大須觀音廣場可以餵鴿子，商店街裡有著名的「水曜日的愛麗絲」小門入口，小朋友超喜歡！"
    };
  }

  // 10. 順遊：熱田神宮 (atsuta)
  if (spotId === "atsuta") {
    if (hub === "sakae" || hub === "fushimi") {
      const c = hub === "sakae" ? ["sakae", "kamimaezu", "kanayama", "atsuta"] : ["fushimi", "sakae", "kamimaezu", "kanayama", "atsuta"];
      return {
        path: ptsToPath(c),
        color: "#7c3aed",
        transferNode: hub === "fushimi" ? "sakae" : null,
        badge: hub === "sakae" ? "🟢 榮站搭名城線免轉車直達熱田神宮西站！" : "🔄 榮站轉名城線直達熱田神宮",
        totalMinText: `⏱️ 全程約 ${w + 15} 分鐘`,
        steps: [`🏨 ${shortH} (走${w}分)`, "🟣 名城線南下經金山", "⛩️ 熱田神宮西站 2號口 (走5分)"],
        tip: "神宮旁邊就是百年名店「あつた蓬萊軒 神宮店」鰻魚飯三吃，抽完號碼牌剛好進神宮參拜！"
      };
    }
    const pre = hub === "taikodori" ? ["taikodori", "meieki"] : hub === "kokusai" ? ["kokusai", "meieki"] : hub === "kamejima" ? ["kamejima", "meieki"] : hub === "nakamura" ? ["nakamura", "kamejima", "meieki"] : ["meieki"];
    return {
      path: ptsToPath([...pre, "kanayama", "atsuta"]),
      color: "#0f766e",
      transferNode: pre.length > 1 ? "meieki" : null,
      badge: "🚆 名鐵／JR 名古屋站直達神宮前站（僅 7 分鐘！）",
      totalMinText: `⏱️ 全程約 ${w + 12} 分鐘`,
      steps: [`🏨 ${shortH}`, "🚆 名鐵名古屋站搭本線 (2站・7分)", "⛩️ 神宮前站出站走 3 分即達熱田神宮東門"],
      tip: "神苑內有免費開放的刀劍館體驗區（草薙館可試拿真刀重量），男孩子們會超興奮！"
    };
  }

  // 11. 順遊：樂高樂園・磁浮鐵道館 (legoland)
  const preL = hub === "sakae" ? ["sakae", "fushimi", "meieki"]
    : hub === "fushimi" ? ["fushimi", "meieki"]
    : hub === "taikodori" ? ["taikodori", "meieki"]
    : hub === "kokusai" ? ["kokusai", "meieki"]
    : hub === "kamejima" ? ["kamejima", "meieki"]
    : hub === "nakamura" ? ["nakamura", "kamejima", "meieki"]
    : ["meieki"];
  return {
    path: ptsToPath([...preL, "legoland"]),
    color: "#0d9488",
    transferNode: preL.length > 1 ? "meieki" : null,
    badge: preL.length === 1 ? "🟢 名古屋站搭青波線（Aonami）24 分鐘免轉車直達終點！" : "🔄 至名古屋站轉青波線 24 分直達",
    totalMinText: `⏱️ 全程約 ${w + (preL.length > 1 ? 8 : 0) + 24} 分鐘`,
    steps: [`🏨 ${shortH}`, "🟢 名古屋站（太閤通口側）青波線月台", "🚆 一班車直達終點金城ふ頭站 (24分)", "🧱 樂高樂園 ＆ JR磁浮鐵道館"],
    tip: "青波線月台就在「名古屋站太閤通口（新幹線口）」旁邊，住太閤通口走過去最近！"
  };
}

function buildNagoyaMetroBigSvg(hotelId, spotId) {
  const h = HOTELS_DATA.find(x => x.id === hotelId && x.city === "nagoya") || HOTELS_DATA[0];
  const hubInfo = HOTEL_METRO_HUB[h.id] || HOTEL_METRO_HUB["comfort"];
  const route = computeMetroRoute(h.id, spotId);
  const dimOp = route.isAll ? "0.9" : "0.28";
  const [hx, hy] = METRO_COORDS[hubInfo.stNode];
  const spotObj = METRO_SPOTS.find(s => s.id === spotId) || METRO_SPOTS[0];
  const [tx, ty] = METRO_COORDS[spotObj.node];
  const trCoord = route.transferNode ? METRO_COORDS[route.transferNode] : null;

  const isTarget = id => spotId === id;
  const spotStroke = (id, defColor) => isTarget(id) ? "#1d4ed8" : defColor;
  const spotWidth = id => isTarget(id) ? "2.6" : "1.5";

  return `
    <svg viewBox="0 0 720 468" width="100%" height="auto" role="img" aria-label="名古屋全地鐵與必去景點路線動畫大地圖">
      <!-- Subtle Background Grid & Compass -->
      <rect x="0" y="0" width="720" height="468" fill="#f8fafc" />
      <g transform="translate(686, 28)">
        <circle cx="0" cy="0" r="15" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
        <text x="0" y="4" text-anchor="middle" font-size="11" font-weight="800" fill="#334155">↑北</text>
      </g>
      <text x="20" y="26" font-size="11.5" font-weight="800" fill="#475569">🧭 點擊圖中任一「景點卡片」即可切換動畫路線</text>

      <!-- ==================== BASE SUBWAY & RAIL NETWORK ==================== -->
      <g opacity="${dimOp}">
        <!-- Inbound Shinkansen from Shin-Osaka -->
        <line x1="36" y1="175" x2="195" y2="175" stroke="#64748b" stroke-width="5" stroke-dasharray="7 5" />
        <!-- North Highway Bus to Bokka no Sato -->
        <line x1="195" y1="175" x2="195" y2="44" stroke="#0f766e" stroke-width="4.5" stroke-dasharray="6 5" />
        <!-- Aonami Line South to Legoland -->
        <line x1="195" y1="175" x2="195" y2="434" stroke="#0d9488" stroke-width="5" />
        <!-- Meitetsu / JR Diagonal to Kanayama & Airport -->
        <path d="M 195 175 L 420 374 L 622 434" fill="none" stroke="#0369a1" stroke-width="5" stroke-dasharray="8 4" />
        <line x1="420" y1="374" x2="512" y2="374" stroke="#7c3aed" stroke-width="5" />

        <!-- Meijo Loop Eastern Half (Subtle Context Loop) -->
        <path d="M 420 84 L 502 84 L 502 374 L 420 374" fill="none" stroke="#c4b5fd" stroke-width="4" stroke-dasharray="5 5" />

        <!-- Purple Line: Meijo & Meiko (Castle -> Hisaya -> Sakae -> Kamimaezu -> Kanayama -> Port) -->
        <line x1="420" y1="84" x2="420" y2="434" stroke="#7c3aed" stroke-width="6.5" stroke-linecap="round" />

        <!-- Red Line: Sakura-dori (Taiko-dori -> Meieki -> Kokusai -> Marunouchi -> Hisaya) -->
        <line x1="106" y1="175" x2="462" y2="175" stroke="#e11d48" stroke-width="6.5" stroke-linecap="round" />

        <!-- Blue Line: Tsurumai (Marunouchi -> Fushimi -> Osu -> Kamimaezu) -->
        <path d="M 338 145 L 338 318 L 420 318" fill="none" stroke="#2563eb" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />

        <!-- Yellow Line: Higashiyama (Nakamura -> Kamejima -> Meieki -> Fushimi -> Sakae -> Fujigaoka) -->
        <path d="M 58 120 L 132 120 L 195 175 L 338 248 L 554 248" fill="none" stroke="#f59e0b" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />

        <!-- Light Blue Line: Linimo Maglev (Fujigaoka -> Ghibli Park) -->
        <line x1="554" y1="248" x2="662" y2="248" stroke="#0284c7" stroke-width="6" stroke-linecap="round" />
        <!-- Direct Bus Hint Curve Meieki -> Ghibli -->
        <path d="M 195 175 Q 445 112 662 248" fill="none" stroke="#0ea5e9" stroke-width="2.2" stroke-dasharray="4 5" />
      </g>

      <!-- ==================== ACTIVE ANIMATED ROUTE HIGHLIGHT ==================== -->
      ${!route.isAll && route.path ? `
        <path d="${route.path}" fill="none" stroke="#ffffff" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" opacity="0.92" />
        <path d="${route.path}" fill="none" stroke="${route.color}" stroke-width="6.5" stroke-linecap="round" stroke-linejoin="round" class="anim-metro-route" />
        ${route.path.includes("L") ? `
          <circle r="7.5" fill="${route.color}" stroke="#ffffff" stroke-width="2.6">
            <animateMotion dur="2.9s" repeatCount="indefinite" path="${route.path}" />
          </circle>
        ` : ""}
      ` : ""}

      <!-- ==================== STATION DOTS & LABELS ==================== -->
      <!-- Shin-Osaka Inbound Badge -->
      <rect x="10" y="156" width="58" height="36" rx="6" fill="#334155" />
      <text x="39" y="171" text-anchor="middle" font-size="9.5" font-weight="800" fill="#ffffff">🚄新大阪</text>
      <text x="39" y="184" text-anchor="middle" font-size="8.8" font-weight="700" fill="#cbd5e1">50分直達</text>

      <!-- Nakamura Koen -->
      <circle cx="58" cy="120" r="6" fill="#ffffff" stroke="#f59e0b" stroke-width="3" />
      <text x="58" y="106" text-anchor="middle" font-size="10.5" font-weight="800" fill="#334155">中村公園</text>

      <!-- Kamejima -->
      <circle cx="132" cy="120" r="6" fill="#ffffff" stroke="#f59e0b" stroke-width="3" />
      <text x="132" y="106" text-anchor="middle" font-size="10.5" font-weight="800" fill="#334155">龜島站</text>

      <!-- Taiko-dori -->
      <circle cx="106" cy="175" r="6.5" fill="#ffffff" stroke="#e11d48" stroke-width="3" />
      <rect x="74" y="186" width="64" height="20" rx="5" fill="#fff1f2" stroke="#fda4af" />
      <text x="106" y="200" text-anchor="middle" font-size="10.5" font-weight="800" fill="#9f1239">太閤通站</text>

      <!-- NAGOYA STATION MAIN HUB -->
      <circle cx="195" cy="175" r="10.5" fill="#0f172a" stroke="#ffffff" stroke-width="3" />
      <rect x="152" y="140" width="86" height="23" rx="6" fill="#0f172a" />
      <text x="195" y="155.5" text-anchor="middle" font-size="11.5" font-weight="800" fill="#ffffff">🚉 名古屋站</text>

      <!-- Kokusai Center -->
      <circle cx="274" cy="175" r="6" fill="#ffffff" stroke="#e11d48" stroke-width="3" />
      <text x="274" y="194" text-anchor="middle" font-size="10.2" font-weight="800" fill="#334155">國際中心</text>

      <!-- Marunouchi -->
      <circle cx="338" cy="175" r="6" fill="#ffffff" stroke="#475569" stroke-width="2.8" />
      <text x="366" y="164" text-anchor="middle" font-size="10" font-weight="700" fill="#475569">丸之內</text>

      <!-- Hisaya-odori -->
      <circle cx="420" cy="175" r="6.5" fill="#ffffff" stroke="#7c3aed" stroke-width="3" />
      <text x="462" y="179" text-anchor="middle" font-size="10.5" font-weight="800" fill="#4c1d95">久屋大通</text>

      <!-- Fushimi -->
      <circle cx="338" cy="248" r="7" fill="#ffffff" stroke="#f59e0b" stroke-width="3" />
      <text x="358" y="268" text-anchor="middle" font-size="10.5" font-weight="800" fill="#334155">伏見站</text>

      <!-- Sakae -->
      <circle cx="420" cy="248" r="8" fill="#0f172a" stroke="#f59e0b" stroke-width="3" />
      <text x="444" y="266" text-anchor="middle" font-size="11" font-weight="800" fill="#0f172a">榮站</text>

      <!-- Fujigaoka -->
      <circle cx="554" cy="248" r="6" fill="#ffffff" stroke="#0284c7" stroke-width="3" />
      <text x="554" y="268" text-anchor="middle" font-size="10.2" font-weight="800" fill="#0369a1">藤が丘(轉磁浮)</text>

      <!-- Kamimaezu -->
      <circle cx="420" cy="318" r="5.5" fill="#ffffff" stroke="#7c3aed" stroke-width="2.8" />
      <text x="450" y="322" text-anchor="middle" font-size="10" font-weight="700" fill="#475569">上前津</text>

      <!-- Kanayama -->
      <circle cx="420" cy="374" r="7.5" fill="#0f172a" stroke="#ffffff" stroke-width="2.5" />
      <text x="384" y="378" text-anchor="middle" font-size="10.8" font-weight="800" fill="#0f172a">金山站</text>

      <!-- ==================== CLICKABLE ATTRACTION CARDS (8 MUST-GO + 3 OPTIONAL) ==================== -->
      <!-- 1. D5 Bokka no Sato -->
      <g class="metro-click-target" onclick="selectMetroSpot('bokka')">
        <rect x="114" y="14" width="162" height="40" rx="9" fill="${isTarget('bokka') ? '#eff6ff' : '#ffffff'}" stroke="${spotStroke('bokka', '#0f766e')}" stroke-width="${spotWidth('bokka')}" />
        <text x="195" y="31" text-anchor="middle" font-size="11.2" font-weight="800" fill="#0f172a">❄️ D5 牧歌之里 (玩雪)</text>
        <text x="195" y="46" text-anchor="middle" font-size="9.6" font-weight="700" fill="#0f766e">太閤通口直達巴士約 2h</text>
      </g>

      <!-- 2. D4 Nagoya Castle & Yabaton -->
      <g class="metro-click-target" onclick="selectMetroSpot('castle')">
        <circle cx="420" cy="84" r="7" fill="#7c3aed" stroke="#ffffff" stroke-width="2.5" />
        <rect x="332" y="36" width="176" height="40" rx="9" fill="${isTarget('castle') ? '#eff6ff' : '#ffffff'}" stroke="${spotStroke('castle', '#7c3aed')}" stroke-width="${spotWidth('castle')}" />
        <text x="420" y="53" text-anchor="middle" font-size="11.2" font-weight="800" fill="#0f172a">🏯 D4 名古屋城＋矢場豬排</text>
        <text x="420" y="68" text-anchor="middle" font-size="9.6" font-weight="700" fill="#6d28d9">名城線【名古屋城站】7號口</text>
      </g>

      <!-- 3. D7 KAKO Toast -->
      <g class="metro-click-target" onclick="selectMetroSpot('kako')">
        <rect x="214" y="102" width="136" height="36" rx="8" fill="${isTarget('kako') ? '#eff6ff' : '#fffbeb'}" stroke="${spotStroke('kako', '#f59e0b')}" stroke-width="${spotWidth('kako')}" />
        <text x="282" y="118" text-anchor="middle" font-size="10.8" font-weight="800" fill="#78350f">🍞 D7 KAKO花車吐司</text>
        <text x="282" y="131" text-anchor="middle" font-size="9.4" font-weight="700" fill="#b45309">國際中心走4分/名駅走9分</text>
        <line x1="274" y1="138" x2="274" y2="168" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="3 3" />
      </g>

      <!-- 4. D4 & D7 Oasis 21 & Sakae -->
      <g class="metro-click-target" onclick="selectMetroSpot('sakae')">
        <rect x="434" y="196" width="142" height="38" rx="8" fill="${isTarget('sakae') ? '#eff6ff' : '#ffffff'}" stroke="${spotStroke('sakae', '#d97706')}" stroke-width="${spotWidth('sakae')}" />
        <text x="505" y="213" text-anchor="middle" font-size="10.8" font-weight="800" fill="#0f172a">✨ D4/7 綠洲21・榮商圈</text>
        <text x="505" y="227" text-anchor="middle" font-size="9.4" font-weight="700" fill="#b45309">榮站4A直通・久屋大通旁</text>
      </g>

      <!-- 5. D6 Ghibli Park -->
      <g class="metro-click-target" onclick="selectMetroSpot('ghibli')">
        <circle cx="662" cy="248" r="7" fill="#0284c7" stroke="#ffffff" stroke-width="2.5" />
        <rect x="580" y="186" width="130" height="42" rx="9" fill="${isTarget('ghibli') ? '#eff6ff' : '#f0fdf4'}" stroke="${spotStroke('ghibli', '#16a34a')}" stroke-width="${spotWidth('ghibli')}" />
        <text x="645" y="204" text-anchor="middle" font-size="11.2" font-weight="800" fill="#14532d">🌱 D6 吉卜力公園</text>
        <text x="645" y="219" text-anchor="middle" font-size="9.4" font-weight="700" fill="#15803d">磁浮線Linimo / 直達巴士</text>
      </g>

      <!-- 6. D8 Nagoya City Science Museum -->
      <g class="metro-click-target" onclick="selectMetroSpot('science')">
        <rect x="202" y="228" width="124" height="38" rx="8" fill="${isTarget('science') ? '#eff6ff' : '#ffffff'}" stroke="${spotStroke('science', '#2563eb')}" stroke-width="${spotWidth('science')}" />
        <text x="264" y="245" text-anchor="middle" font-size="10.8" font-weight="800" fill="#0f172a">🔬 D8 名古屋市科學館</text>
        <text x="264" y="259" text-anchor="middle" font-size="9.4" font-weight="700" fill="#1d4ed8">伏見站走5分・小學生免費</text>
      </g>

      <!-- 7. Optional: Osu Kannon -->
      <g class="metro-click-target" onclick="selectMetroSpot('osu')">
        <circle cx="338" cy="318" r="6" fill="#2563eb" stroke="#ffffff" stroke-width="2" />
        <rect x="202" y="299" width="124" height="36" rx="8" fill="${isTarget('osu') ? '#eff6ff' : '#f8fafc'}" stroke="${spotStroke('osu', '#94a3b8')}" stroke-width="${spotWidth('osu')}" stroke-dasharray="${isTarget('osu') ? 'none' : '4 3'}" />
        <text x="264" y="315" text-anchor="middle" font-size="10.5" font-weight="800" fill="#334155">🏮 順遊：大須觀音商圈</text>
        <text x="264" y="328" text-anchor="middle" font-size="9.2" font-weight="700" fill="#64748b">鶴舞線大須觀音/上前津</text>
      </g>

      <!-- 8. Optional: Atsuta Shrine -->
      <g class="metro-click-target" onclick="selectMetroSpot('atsuta')">
        <circle cx="512" cy="374" r="6" fill="#7c3aed" stroke="#ffffff" stroke-width="2" />
        <rect x="522" y="352" width="136" height="36" rx="8" fill="${isTarget('atsuta') ? '#eff6ff' : '#f8fafc'}" stroke="${spotStroke('atsuta', '#94a3b8')}" stroke-width="${spotWidth('atsuta')}" stroke-dasharray="${isTarget('atsuta') ? 'none' : '4 3'}" />
        <text x="590" y="368" text-anchor="middle" font-size="10.5" font-weight="800" fill="#334155">⛩️ 順遊：熱田神宮</text>
        <text x="590" y="381" text-anchor="middle" font-size="9.2" font-weight="700" fill="#64748b">神宮前站・蓬萊軒鰻魚飯</text>
      </g>

      <!-- 9. Optional: Legoland -->
      <g class="metro-click-target" onclick="selectMetroSpot('legoland')">
        <circle cx="195" cy="434" r="6.5" fill="#0d9488" stroke="#ffffff" stroke-width="2" />
        <rect x="92" y="414" width="156" height="38" rx="8" fill="${isTarget('legoland') ? '#eff6ff' : '#f8fafc'}" stroke="${spotStroke('legoland', '#94a3b8')}" stroke-width="${spotWidth('legoland')}" stroke-dasharray="${isTarget('legoland') ? 'none' : '4 3'}" />
        <text x="170" y="431" text-anchor="middle" font-size="10.5" font-weight="800" fill="#334155">🧱 順遊：樂高樂園・磁浮館</text>
        <text x="170" y="444" text-anchor="middle" font-size="9.2" font-weight="700" fill="#0f766e">青波線金城ふ頭直達24分</text>
      </g>

      <!-- 10. D7 Nagoya Maritime Museum & Port -->
      <g class="metro-click-target" onclick="selectMetroSpot('port')">
        <circle cx="420" cy="434" r="7" fill="#7c3aed" stroke="#ffffff" stroke-width="2.5" />
        <rect x="304" y="414" width="194" height="40" rx="9" fill="${isTarget('port') ? '#eff6ff' : '#ffffff'}" stroke="${spotStroke('port', '#7c3aed')}" stroke-width="${spotWidth('port')}" />
        <text x="401" y="431" text-anchor="middle" font-size="11" font-weight="800" fill="#0f172a">⚓ D7 名古屋海洋博物館・破冰船</text>
        <text x="401" y="446" text-anchor="middle" font-size="9.5" font-weight="700" fill="#6d28d9">名港線終點【名古屋港站】旁水族館</text>
      </g>

      <!-- 11. D8 Chubu Centrair Airport -->
      <g class="metro-click-target" onclick="selectMetroSpot('airport')">
        <circle cx="622" cy="434" r="7" fill="#0369a1" stroke="#ffffff" stroke-width="2.5" />
        <rect x="530" y="414" width="176" height="40" rx="9" fill="${isTarget('airport') ? '#eff6ff' : '#ffffff'}" stroke="${spotStroke('airport', '#0369a1')}" stroke-width="${spotWidth('airport')}" />
        <text x="618" y="431" text-anchor="middle" font-size="11" font-weight="800" fill="#0f172a">✈️ D8 中部國際機場 (NGO)</text>
        <text x="618" y="446" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0369a1">名鐵 μ-SKY 特急 28 分直達</text>
      </g>

      <!-- ==================== TRANSFER RING & ORIGIN / TARGET PULSING PINS ==================== -->
      ${trCoord ? `
        <g transform="translate(${trCoord[0]}, ${trCoord[1]})">
          <circle r="12" fill="none" stroke="#f59e0b" stroke-width="3" />
          <rect x="-26" y="-27" width="52" height="16" rx="8" fill="#fef08a" stroke="#eab308" stroke-width="1.2" />
          <text x="0" y="-16" text-anchor="middle" font-size="9.2" font-weight="800" fill="#713f12">🔄 轉乘</text>
        </g>
      ` : ""}

      <!-- Selected Hotel Origin Pin -->
      <g transform="translate(${hx}, ${hy})">
        <circle r="14" fill="#2563eb" class="anim-pulse-circle" />
        <circle r="9.5" fill="#1d4ed8" stroke="#ffffff" stroke-width="2.5" />
        <text x="0" y="3.5" text-anchor="middle" font-size="9.5" font-weight="800" fill="#ffffff">🏨</text>
        <rect x="-56" y="13" width="112" height="19" rx="9.5" fill="#1d4ed8" stroke="#ffffff" stroke-width="1.5" />
        <text x="0" y="26" text-anchor="middle" font-size="9.6" font-weight="800" fill="#ffffff">起點(走${hubInfo.walk}分進站)</text>
      </g>

      <!-- Target Destination Halo -->
      ${!route.isAll ? `
        <g transform="translate(${tx}, ${ty})">
          <circle r="14" fill="${route.color}" class="anim-pulse-circle" />
        </g>
      ` : ""}
    </svg>
  `;
}

function initMetroControls() {
  const sel = document.getElementById("metro-hotel-select");
  if (!sel) return;
  const groups = [
    { label: "🚄 名古屋站・太閤通口／太閤通站區 (10間)", zone: "taiko" },
    { label: "🚇 名古屋站・櫻通口／國際中心站區 (5間)", zone: "sakura" },
    { label: "🛍️ 伏見（科學館）・榮・久屋大通區 (4間)", zone: "sakae" }
  ];
  sel.innerHTML = groups.map(g => {
    const items = HOTELS_DATA.filter(h => h.city === "nagoya" && h.zone === g.zone)
      .sort((a, b) => a.recOrder - b.recOrder);
    return `<optgroup label="${g.label}">` + items.map(h =>
      `<option value="${h.id}">${h.name}（${h.stationInfo.split("｜")[0].replace("🥇", "")}）</option>`
    ).join("") + `</optgroup>`;
  }).join("");
}

function renderMetroPanel() {
  const nagoyaHotels = HOTELS_DATA.filter(h => h.city === "nagoya");
  if (!nagoyaHotels.some(h => h.id === metroHotelId)) {
    metroHotelId = "comfort";
  }
  const h = nagoyaHotels.find(x => x.id === metroHotelId) || nagoyaHotels[0];
  const spec = SCHEMATIC_MAP_SPECS[h.id] || SCHEMATIC_MAP_SPECS["comfort"];

  const sel = document.getElementById("metro-hotel-select");
  if (sel) sel.value = h.id;

  const pillsWrap = document.getElementById("metro-spot-pills");
  if (pillsWrap) {
    pillsWrap.innerHTML = METRO_SPOTS.map(sp => {
      const cls = [
        "spot-pill",
        !sp.mustGo ? "spot-optional" : "",
        sp.id === metroSpotId ? "active" : ""
      ].filter(Boolean).join(" ");
      return `<button type="button" class="${cls}" onclick="selectMetroSpot('${sp.id}')">${sp.pill}</button>`;
    }).join("");
  }

  // Render Macro Big Metro SVG
  const svgHolder = document.getElementById("metro-big-svg-holder");
  if (svgHolder) {
    svgHolder.innerHTML = buildNagoyaMetroBigSvg(h.id, metroSpotId);
  }

  // Render Route Breakdown Card
  const route = computeMetroRoute(h.id, metroSpotId);
  const spotObj = METRO_SPOTS.find(s => s.id === metroSpotId) || METRO_SPOTS[0];
  const routeCard = document.getElementById("metro-route-card");
  if (routeCard) {
    routeCard.innerHTML = `
      <div class="metro-route-top">
        <div class="metro-route-headline">🎯 目的地：${spotObj.name}</div>
        <span class="chip chip-green">${route.badge}</span>
      </div>
      <div style="font-size: 13.5px; font-weight: 800; color: var(--text-primary); margin-bottom: 6px;">
        ${route.totalMinText}
      </div>
      <div class="metro-step-flow">
        ${route.steps.map((st, idx) =>
          `<span class="m-step-chip">${st}</span>${idx < route.steps.length - 1 ? '<span class="m-step-arrow">➔</span>' : ''}`
        ).join("")}
      </div>
      <div style="font-size: 12.8px; color: #1e3a8a; background: rgba(255,255,255,0.72); border-radius: 8px; padding: 8px 11px;">
        💡 <strong>雙家庭動線小撇步：</strong>${route.tip}
      </div>
    `;
  }

  // Render Synchronized Micro Hotel Neighborhood Map on Right Pane
  const mTitle = document.getElementById("metro-micro-title");
  if (mTitle) {
    mTitle.textContent = h.name;
    document.getElementById("metro-micro-sub").textContent = `${h.priceRange}`;
    document.getElementById("metro-micro-exit").textContent = spec.exitBadge;
    document.getElementById("metro-micro-walk").textContent = spec.totalWalk;
    document.getElementById("metro-micro-subbar").textContent = spec.subStationsBar;
    document.getElementById("metro-micro-svg").innerHTML = buildSchematicSvg(h.id);
    document.getElementById("metro-micro-konbini").innerHTML = `🏪 <strong>順路超商：</strong>${h.konbiniRoute}`;
    document.getElementById("metro-micro-walk-btn").href = h.walkMapUrl;
  }
}

function selectMetroHotel(hId) {
  metroHotelId = hId;
  selectedHotelId = hId;
  renderMetroPanel();
  renderHotelsList();
  renderMapPane();
}

function stepMetroHotel(delta) {
  const list = HOTELS_DATA.filter(h => h.city === "nagoya").sort((a, b) => a.recOrder - b.recOrder);
  const idx = list.findIndex(h => h.id === metroHotelId);
  const next = list[(idx + delta + list.length) % list.length];
  selectMetroHotel(next.id);
}

function selectMetroSpot(spotId) {
  metroSpotId = spotId;
  renderMetroPanel();
}

function toggleMetroZoom() {
  metroZoomed = !metroZoomed;
  const sc = document.getElementById("metro-svg-scroll");
  const btn = document.getElementById("btn-metro-zoom");
  if (sc) sc.classList.toggle("zoomed", metroZoomed);
  if (btn) btn.textContent = metroZoomed ? "📐 縮回符合螢幕寬度" : "🔍 手機放大滑動檢視";
}

function openHotelInMetroMap(hotelId) {
  const target = HOTELS_DATA.find(h => h.id === hotelId && h.city === "nagoya");
  if (target) {
    metroHotelId = target.id;
  }
  renderMetroPanel();
  switchTab("metro");
}

function openSpotInMetroMap(spotId) {
  metroSpotId = spotId;
  renderMetroPanel();
  switchTab("metro");
}

function jumpToHotelFromMetro() {
  if (hotelFilter === "osaka") {
    setHotelFilter("nagoya");
  } else {
    const filtered = getFilteredHotels();
    if (!filtered.some(h => h.id === metroHotelId)) {
      setHotelFilter("nagoya");
    }
  }
  selectedHotelId = metroHotelId;
  renderHotelsList();
  renderMapPane();
  switchTab("hotels");
}

// Tab Switching
function switchTab(tabId) {
  currentTab = tabId;
  const tabs = ["itinerary", "metro", "hotels", "apps", "spots"];
  tabs.forEach(t => {
    const panel = document.getElementById(`panel-${t}`);
    const dBtn = document.getElementById(`dnav-${t}`);
    const mBtn = document.getElementById(`mnav-${t}`);
    if (panel) {
      if (t === tabId) panel.classList.add("active");
      else panel.classList.remove("active");
    }
    if (dBtn) {
      if (t === tabId) dBtn.classList.add("active");
      else dBtn.classList.remove("active");
    }
    if (mBtn) {
      if (t === tabId) mBtn.classList.add("active");
      else mBtn.classList.remove("active");
    }
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Render Itinerary
function renderDaySelector() {
  const wrap = document.getElementById("day-selector");
  wrap.innerHTML = ITINERARY_DATA.map(d => {
    const active = !showAllDays && d.day === selectedDay ? "active" : "";
    return `
      <button class="day-btn ${active}" onclick="selectDay(${d.day})">
        <div class="day-btn-top">Day ${d.day}｜${d.date}</div>
        <div class="day-btn-sub">${d.city}・${d.title.split("！")[0].slice(0, 11)}</div>
      </button>
    `;
  }).join("");
}

function selectDay(dayNum) {
  selectedDay = dayNum;
  showAllDays = false;
  document.getElementById("btn-toggle-all-days").textContent = "展開全部 8 天總覽";
  renderDaySelector();
  renderDayCards();
}

function toggleAllDays() {
  showAllDays = !showAllDays;
  document.getElementById("btn-toggle-all-days").textContent = showAllDays
    ? "切換回單日檢視"
    : "展開全部 8 天總覽";
  renderDaySelector();
  renderDayCards();
}

function renderDayCards() {
  const container = document.getElementById("itinerary-cards");
  const list = showAllDays
    ? ITINERARY_DATA
    : ITINERARY_DATA.filter(d => d.day === selectedDay);

  container.innerHTML = list.map(d => {
    const metroSpot = DAY_TO_METRO_SPOT[d.day];
    return `
      <article class="card" style="margin-bottom: 14px;">
        <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 8px;">
          <div class="trip-meta-row" style="margin-bottom: 0;">
            <span class="chip chip-brand">Day ${d.day}・${d.date}</span>
            <span class="chip">📍 ${d.city}</span>
          </div>
          ${metroSpot ? `
            <button type="button" class="btn-outline" onclick="openSpotInMetroMap('${metroSpot}')">
              🚇 在名古屋全地鐵圖看本日動畫路線
            </button>
          ` : ""}
        </div>
        <h2 class="section-title" style="font-size: 19px; margin-top: 8px;">${d.title}</h2>
        <p style="margin: 6px 0 10px; font-size: 13px; color: var(--green); font-weight: 600;">
          ${d.stay}
        </p>
        <p style="margin: 0; font-size: 14.5px; color: var(--text-primary);">
          ${d.highlight}
        </p>

        <div class="stop-list">
          ${d.stops.map(s => `
            <div class="stop-item">
              <div>
                <div>
                  <span class="stop-time">${s.time}</span>
                  <span class="stop-name">${s.name}</span>
                </div>
                <p class="stop-desc">${s.desc}</p>
              </div>
              <a class="btn-outline" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.mapQuery)}" target="_blank" rel="noopener noreferrer">
                📍 Google 地圖
              </a>
            </div>
          `).join("")}
        </div>

        <div class="notice-bar">
          <span>💡</span>
          <div><strong>同行提醒：</strong>${d.note}</div>
        </div>
      </article>
    `;
  }).join("");
}

// ==================== 住宿篩選、排序與雙模式地圖渲染 ====================
function setHotelFilter(filter) {
  hotelFilter = filter;
  ["nagoya", "taiko", "sakura", "sakae", "apartment", "osaka"].forEach(f => {
    const btn = document.getElementById(`hfilter-${f}`);
    if (btn) {
      if (f === filter) btn.classList.add("active");
      else btn.classList.remove("active");
    }
  });

  const filtered = getFilteredHotels();
  if (filtered.length > 0 && !filtered.some(h => h.id === selectedHotelId)) {
    selectedHotelId = filtered[0].id;
  }
  renderHotelsList();
  renderMapPane();
}

function setHotelSort(sortVal) {
  hotelSort = sortVal;
  const filtered = getFilteredHotels();
  if (filtered.length > 0) {
    selectedHotelId = filtered[0].id;
  }
  renderHotelsList();
  renderMapPane();
}

function getFilteredHotels() {
  let base = HOTELS_DATA;
  if (hotelFilter === "nagoya") {
    base = HOTELS_DATA.filter(h => h.city === "nagoya");
  } else if (hotelFilter === "taiko") {
    base = HOTELS_DATA.filter(h => h.zone === "taiko");
  } else if (hotelFilter === "sakura") {
    base = HOTELS_DATA.filter(h => h.zone === "sakura");
  } else if (hotelFilter === "sakae") {
    base = HOTELS_DATA.filter(h => h.zone === "sakae");
  } else if (hotelFilter === "apartment") {
    base = HOTELS_DATA.filter(h => h.category === "apartment");
  } else if (hotelFilter === "osaka") {
    base = HOTELS_DATA.filter(h => h.city === "osaka");
  }

  const sorted = [...base];
  if (hotelSort === "price") {
    sorted.sort((a, b) => a.minPriceYen - b.minPriceYen || a.recOrder - b.recOrder);
  } else if (hotelSort === "walk") {
    sorted.sort((a, b) => a.primaryWalkMin - b.primaryWalkMin || a.minPriceYen - b.minPriceYen);
  } else {
    sorted.sort((a, b) => a.recOrder - b.recOrder);
  }
  return sorted;
}

function stepHotel(delta) {
  const list = getFilteredHotels();
  if (list.length === 0) return;
  const idx = list.findIndex(h => h.id === selectedHotelId);
  const nextIdx = idx === -1 ? 0 : (idx + delta + list.length) % list.length;
  selectHotelOnMap(list[nextIdx].id, false);
}

function selectHotelOnMap(hotelId, scrollMapOnMobile) {
  selectedHotelId = hotelId;
  if (HOTELS_DATA.some(h => h.id === hotelId && h.city === "nagoya")) {
    metroHotelId = hotelId;
    renderMetroPanel();
  }
  renderHotelsList();
  renderMapPane();
  if (scrollMapOnMobile && window.innerWidth < 980) {
    const mapEl = document.getElementById("hotel-map-card");
    if (mapEl) mapEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

function renderHotelsList() {
  const container = document.getElementById("hotels-cards-container");
  const list = getFilteredHotels();
  const countLabel = document.getElementById("hotels-count-label");
  if (countLabel) {
    countLabel.textContent = `📋 目前顯示 ${list.length} 間符合條件住宿（點選卡片可切換街區小圖，或點「🚇 看去各景點地鐵動畫」跳至全區大地圖）`;
  }

  container.innerHTML = list.map(h => {
    const isSelected = h.id === selectedHotelId ? "selected" : "";
    const isOsaka = h.city === "osaka";
    return `
      <article class="hotel-card ${isSelected}" onclick="selectHotelOnMap('${h.id}', false)">
        <div class="hotel-rank-row">
          <span class="chip ${isOsaka ? "chip-green" : "chip-brand"}">${h.rankBadge}</span>
          <span class="hotel-price-tag">${h.priceRange}</span>
        </div>
        <h3 class="hotel-name">${h.name}</h3>

        <div class="station-dual-box">
          <div class="st-line-primary">${h.primaryStation}</div>
          <div class="st-line-secondary">${h.secondaryStation}</div>
        </div>

        <div class="hotel-meta-list">
          <div>🛏️ <strong>4大5小（6–10歲）配法：</strong>${h.roomPlan}</div>
          <div>👧 <strong>兒童優惠規定：</strong>${h.kidRule}</div>
        </div>

        <div class="konbini-highlight">
          🏪 <strong>地鐵回住宿順路超商：</strong>${h.konbiniRoute}
        </div>

        <div style="font-size: 12.5px; color: var(--text-secondary); margin-bottom: 10px;">
          💰 <strong>最划算訂法：</strong>${h.bestAppTip}
        </div>

        <div class="ota-btn-row" onclick="event.stopPropagation()">
          <button type="button" class="ota-chip-link best-ota" onclick="selectHotelOnMap('${h.id}', true)">
            🗺️ 顯示周邊街區小圖
          </button>
          ${!isOsaka ? `
            <button type="button" class="ota-chip-link best-ota" onclick="openHotelInMetroMap('${h.id}')">
              🚇 看去各景點地鐵動畫
            </button>
          ` : ""}
          <a class="ota-chip-link" href="${h.walkMapUrl}" target="_blank" rel="noopener noreferrer">
            🚶 車站➔超商➔飯店導航
          </a>
          ${!isOsaka ? `
            <a class="ota-chip-link best-ota" href="${h.links.google}" target="_blank" rel="noopener noreferrer">
              🔍 Google全網比價
            </a>
            <a class="ota-chip-link" href="${h.links.official}" target="_blank" rel="noopener noreferrer">
              🏨 飯店官網/直訂
            </a>
            <a class="ota-chip-link" href="${h.links.rakuten}" target="_blank" rel="noopener noreferrer">
              🇯🇵 樂天旅遊
            </a>
            <a class="ota-chip-link" href="${h.links.agoda}" target="_blank" rel="noopener noreferrer">
              Agoda
            </a>
            <a class="ota-chip-link" href="${h.links.trip}" target="_blank" rel="noopener noreferrer">
              Trip.com
            </a>
          ` : `
            <a class="ota-chip-link best-ota" href="${h.links.trip}" target="_blank" rel="noopener noreferrer">
              🚇 查看去黑門市場路線
            </a>
          `}
        </div>
      </article>
    `;
  }).join("");
}

function setMapMode(mode) {
  mapMode = mode;
  const sWrap = document.getElementById("schematic-map-wrap");
  const gWrap = document.getElementById("google-map-wrap");
  const bSchem = document.getElementById("btn-mode-schematic");
  const bGmap = document.getElementById("btn-mode-gmap");
  const bottomBtn = document.getElementById("btn-toggle-detail-bottom");

  if (mode === "schematic") {
    sWrap.style.display = "block";
    gWrap.style.display = "none";
    bSchem.classList.add("active");
    bGmap.classList.remove("active");
    if (bottomBtn) bottomBtn.textContent = "🗺️ 看 Google 仔細地圖";
  } else {
    sWrap.style.display = "none";
    gWrap.style.display = "block";
    bSchem.classList.remove("active");
    bGmap.classList.add("active");
    if (bottomBtn) bottomBtn.textContent = "✨ 切回周邊雙車站動畫圖";
  }
}

function toggleMapMode() {
  setMapMode(mapMode === "schematic" ? "gmap" : "schematic");
}

function renderMapPane() {
  const h = HOTELS_DATA.find(item => item.id === selectedHotelId) || HOTELS_DATA[0];
  const spec = SCHEMATIC_MAP_SPECS[h.id] || SCHEMATIC_MAP_SPECS["comfort"];
  const embedSrc = `https://www.google.com/maps/embed?hl=zh-TW&origin=mfe&pb=!1m3!2m1!1s${encodeURIComponent(h.embedQuery)}!6i16`;

  // Render Quick Switcher Pills at top of map card
  const pillsWrap = document.getElementById("map-quick-pills");
  if (pillsWrap) {
    const visibleHotels = getFilteredHotels();
    pillsWrap.innerHTML = visibleHotels.map(item => {
      const sp = SCHEMATIC_MAP_SPECS[item.id];
      const label = sp ? sp.shortPill : item.name;
      const activeCls = item.id === h.id ? "active" : "";
      return `<button type="button" id="qpill-${item.id}" class="q-pill ${activeCls}" onclick="selectHotelOnMap('${item.id}', false)">${label}</button>`;
    }).join("");
    const activePill = document.getElementById(`qpill-${h.id}`);
    if (activePill && typeof activePill.scrollIntoView === "function") {
      activePill.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }

  document.getElementById("map-hotel-title").textContent = h.name;
  document.getElementById("map-hotel-sub").textContent = h.stationInfo;

  // Update Schematic Animated View + Secondary Surrounding Stations Bar
  document.getElementById("schematic-exit-badge").textContent = spec.exitBadge;
  document.getElementById("schematic-total-walk").textContent = spec.totalWalk;
  const subBar = document.getElementById("schematic-sub-stations");
  if (subBar) subBar.textContent = spec.subStationsBar;
  document.getElementById("schematic-svg-holder").innerHTML = buildSchematicSvg(h.id);

  // Update Detailed Google Maps Iframe (only reload src when changed to prevent flicker)
  const iframe = document.getElementById("google-map-iframe");
  if (iframe && iframe.getAttribute("data-hotel") !== h.id) {
    iframe.src = embedSrc;
    iframe.setAttribute("data-hotel", h.id);
  }

  document.getElementById("walk-strip-box").innerHTML = `
    <div>
      <div class="walk-node-title">${h.walkSteps.from}</div>
      <div class="walk-node-sub">${spec.stepSub1}</div>
    </div>
    <div class="walk-arrow">➔</div>
    <div>
      <div class="walk-node-title">${h.walkSteps.via}</div>
      <div class="walk-node-sub">${spec.stepSub2}</div>
    </div>
    <div class="walk-arrow">➔</div>
    <div>
      <div class="walk-node-title">${h.walkSteps.to}</div>
      <div class="walk-node-sub">${spec.stepSub3}</div>
    </div>
  `;

  document.getElementById("map-open-walk-btn").href = h.walkMapUrl;
  const jumpMetroBtn = document.getElementById("btn-jump-metro-from-map");
  if (jumpMetroBtn) {
    jumpMetroBtn.style.display = h.city === "nagoya" ? "inline-flex" : "none";
  }
}

// Price Comparison App Booking Calculator
function updateSearchHelper() {
  const mode = document.getElementById("helper-hotel-select").value;
  const out = document.getElementById("helper-output");

  if (mode === "vessel") {
    out.innerHTML = `
      <strong>🎯 Vessel 系列（Campana 名古屋 / 榮站前）最省搜尋輸入法：</strong>
      <ul style="margin: 6px 0 0; padding-left: 18px;">
        <li><strong>在 Google Maps / Agoda / Trip.com 比價時：</strong>千萬別輸入 5 個小孩！請分開搜「第1間：2位大人（雙床房）」＋「第2間：3位大人（三人房）」（對應『1～2位小孩算佔床、其餘免費同床』），結帳備註寫明有幾位 6–10 歲添い寝兒童即可。</li>
        <li><strong>最推薦在「Vessel 日本官網」訂：</strong>官網可直接選「大人人數」＋「小學生（添い寝）人數」，系統自動顯示小學生 ¥0 免費，註冊免費會員再拿 <strong>¥1,000 折價點數</strong>！</li>
      </ul>
    `;
  } else if (mode === "comfort") {
    out.innerHTML = `
      <strong>🎯 Comfort 系列 / 東橫INN / Chisun Inn 最省搜尋輸入法：</strong>
      <ul style="margin: 6px 0 0; padding-left: 18px;">
        <li>規定「1張床免費帶 1 位小學生（12歲以下）」，你們共 9 人（4大＋5位小學生），把 2 位小孩當大人佔床剛好總共需要 <strong>6 張床</strong>！</li>
        <li><strong>最省訂法：</strong>訂 <strong>3 間雙床房（每間輸入 2 位大人，各帶 1 位免費同床小學生）</strong>，9 人睡 6 張床＋3 間衛浴＋<strong>Comfort / 東橫INN 全體 9 份免費早餐</strong>，每晚總計才約台幣 4,000–5,500 元！</li>
      </ul>
    `;
  } else if (mode === "daiwa") {
    out.innerHTML = `
      <strong>🎯 大和魯內 / 相鐵 Fresa / Richmond / Cypress 最省搜尋輸入法：</strong>
      <ul style="margin: 6px 0 0; padding-left: 18px;">
        <li>1 張床可免費帶 1 位小學生！可訂 <strong>1 間雙床房（輸入 2 大人 → 免費帶 2 小）＋ 1 間三人房（輸入 3 大人 → 免費帶 2 小）</strong>，或訂 <strong>相鐵／DEL style 的「連通房（Connecting Room）」</strong>讓兩家人室內互通！</li>
        <li><strong>比價必看：</strong>先開「Travelko トラベルコ」與「12/4 樂天旅遊 Super SALE」領優惠券，常比國際訂房網再省 15%！</li>
      </ul>
    `;
  } else {
    out.innerHTML = `
      <strong>🎯 公寓式飯店 / 獨棟包棟（GRAND BASE / SAMURAI HOUSE Ⅲ）搜尋輸入法：</strong>
      <ul style="margin: 6px 0 0; padding-left: 18px;">
        <li>無人公寓與獨棟民宿沒有小學生免費同床，需<strong>老實輸入實際總人數（例如 6人＋3人，或獨棟包棟 9 人）</strong>搜尋。</li>
        <li><strong>最省 App：</strong>GRAND BASE 開手機版「Booking.com（享 Genius 折扣＋手機專屬價）」；SAMURAI HOUSE Ⅲ 獨棟用「Jalan / 樂天旅遊 / Travelko」比價並盡早卡位！</li>
      </ul>
    `;
  }
}

// Render Spots & Checklist
function setSpotFilter(region) {
  spotFilter = region;
  ["all", "osaka", "nagoya"].forEach(r => {
    const btn = document.getElementById(`sfilter-${r}`);
    if (btn) {
      if (r === region) btn.classList.add("active");
      else btn.classList.remove("active");
    }
  });
  renderSpots();
}

function renderSpots() {
  const container = document.getElementById("spots-container");
  const list = spotFilter === "all"
    ? SPOTS_DATA
    : SPOTS_DATA.filter(s => s.region === spotFilter);

  container.innerHTML = list.map(s => `
    <article class="card" style="display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <span class="chip chip-brand" style="margin-bottom: 8px;">${s.tag}</span>
        <h3 style="margin: 0 0 4px; font-size: 16.5px; font-weight: 800;">${s.name}</h3>
        <div style="font-size: 12.5px; color: var(--text-muted); margin-bottom: 10px;">🚇 ${s.station}</div>
        <p style="margin: 0 0 12px; font-size: 13.8px; color: var(--text-secondary);">${s.summary}</p>
      </div>
      <div style="padding-top: 10px; border-top: 1px solid var(--border-light); font-size: 12.8px; color: var(--text-primary);">
        <strong>👦 6–10 歲看點：</strong>${s.kidTip}
      </div>
    </article>
  `).join("");
}

function toggleCheckItem(id) {
  checklistState[id] = !checklistState[id];
  saveChecklist();
  renderChecklist();
}

function renderChecklist() {
  const container = document.getElementById("checklist-box");
  const doneCount = CHECKLIST_ITEMS.filter(i => checklistState[i.id]).length;
  document.getElementById("header-progress").textContent = `已完成 ${doneCount} / ${CHECKLIST_ITEMS.length} 項行前準備`;

  container.innerHTML = CHECKLIST_ITEMS.map(item => {
    const done = !!checklistState[item.id];
    return `
      <label class="check-row ${done ? "done" : ""}">
        <input type="checkbox" ${done ? "checked" : ""} onchange="toggleCheckItem('${item.id}')" />
        <span>${item.text}</span>
      </label>
    `;
  }).join("");
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderDaySelector();
  renderDayCards();
  initMetroControls();
  renderMetroPanel();
  renderHotelsList();
  renderMapPane();
  updateSearchHelper();
  renderSpots();
  renderChecklist();
});
