// 2027 大阪・名古屋 雙家庭冬日旅 - 核心資料與互動邏輯

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
    stay: "🏨 名古屋第 1 晚（候選住宿請見「住宿＆地圖」分頁）",
    highlight: "從鶴橋前往新大阪轉乘東海道新幹線 Nozomi 號，50 分鐘抵達 JR 名古屋站！寄放行李後逛名古屋城、吃矢場味噌豬排、看綠洲21夜景。",
    note: "鶴橋 ➔ 新大阪走法：搭地鐵千日前線至難波轉御堂筋線直達「新大阪」（或搭 JR 大阪環狀線至大阪轉 JR 京都線 1 站即達新大阪，約 22 分鐘）。",
    stops: [
      {
        time: "上午",
        name: "鶴橋 ➔ 新大阪 ➔ JR 名古屋站（新幹線 50 分鐘）",
        desc: "抵達 JR 名古屋站後，先走去名古屋站周邊飯店寄放行李（住太閤通口走路僅 4–8 分鐘超輕鬆！）",
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
    note: "一日遊巴士多在「名古屋站太閤通口（新幹線口）」集合出發，住在名古屋站太閤通口旁早上可以多睡 20 分鐘！",
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
        desc: "從名古屋站步行約 9 分鐘！招牌四色自家製水果果醬＋紅豆鮮奶油厚片吐司，小朋友可配牛奶或果汁",
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

// 住宿推薦清單（針對：價格實惠為主 + 4大5小(6~10歲, 當作2小佔床計價) + 順路超商 + Google Map 定位）
const HOTELS_DATA = [
  {
    id: "comfort",
    city: "nagoya",
    category: "hotel",
    rankBadge: "🥇 實惠省錢第 1 推｜含 9 人免費早餐神店",
    name: "Comfort Hotel 名古屋新幹線口",
    jpName: "コンフォートホテル名古屋新幹線口",
    priceRange: "約 ¥22,000–¥30,000 / 晚（約台幣 4,700–6,400 元包 9 人含早！）",
    stationInfo: "JR「名古屋站」太閤通口（新幹線口）步行 5 分鐘",
    roomPlan: "照您「4大＋2小算佔床＝6人計費」：訂 3 間雙床房（共 6 張 123cm 床，可併成 246cm 大床）＋ 3 位小學生免費同床！享 3 間獨立衛浴",
    kidRule: "小學 6 年級（12歲）以下同床免費（1床1名），且同床小學生也免費吃自助早餐！",
    konbiniRoute: "出太閤通口順路先經過「Lawson 名駅太閤通口店」，飯店斜對面步行 1 分鐘（80m）就是 24H「7-Eleven 名古屋則武一丁目店」與「FamilyMart」！",
    walkSteps: {
      from: "JR 名古屋站太閤通口",
      via: "🏪 7-11 / Lawson (步行1分)",
      to: "🏨 Comfort 新幹線口 (總計5分)"
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
    id: "vessel-campana",
    city: "nagoya",
    category: "hotel",
    rankBadge: "🥈 舒適 CP 值第 2 推｜2 間房搞定＋大浴場＋木地板",
    name: "Vessel Hotel Campana 名古屋",
    jpName: "ベッセルホテルカンパーナ名古屋",
    priceRange: "約 ¥24,000–¥35,000 / 晚（約台幣 5,100–7,400 元 / 2間合計）",
    stationInfo: "地鐵「名古屋站」1 號出口步行 4 分鐘 ／ JR「名古屋站」櫻通口步行 9 分鐘",
    roomPlan: "訂 2 間即可：1 間雙床房（140cm床×2，付2人費）＋ 1 間三人房（140cm床×2＋90cm床，付3人費＝僅1小算佔床），其餘 4 位 6–10 歲小孩全部免費！",
    kidRule: "18 歲以下與父母同床一律免費，且不限同床人數！房內脫鞋木地板＋桑拿大浴場",
    konbiniRoute: "從地鐵 1 號出口往北走回飯店的正順路上，步行 1–2 分鐘即經過「7-Eleven 名古屋名駅2丁目店」與「Lawson 名駅二丁目店」！",
    walkSteps: {
      from: "地鐵名古屋站 1號出口",
      via: "🏪 7-11 / Lawson 名駅2丁目",
      to: "🏨 Vessel Campana (總計4分)"
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
    id: "vessel-sakae",
    city: "nagoya",
    category: "hotel",
    rankBadge: "🏬 榮商圈實惠首選｜地鐵 2 分鐘＋1 樓就是 7-11",
    name: "Vessel Inn 榮站前（名古屋榮）",
    jpName: "ベッセルイン栄駅前",
    priceRange: "約 ¥21,000–¥32,000 / 晚（約台幣 4,500–6,800 元 / 2間合計）",
    stationInfo: "地鐵東山線／名城線「榮站」1 號出口步行 2 分鐘（近綠洲21、唐吉訶德）",
    roomPlan: "訂 2 間房（雙床房＋三人房，共付 5 人費或 2 間三人房付 6 人費），6–10 歲小孩同床全部免費！",
    kidRule: "18 歲以下同床不限人數免費！價格比名古屋站分館更甜，下樓就能逛街",
    konbiniRoute: "飯店建築「正 1 樓就是 7-Eleven 名古屋錦3丁目店」！榮站 1 號出口走 2 分鐘經過唐吉訶德就到飯店樓下 7-11，半夜買東西免過馬路！",
    walkSteps: {
      from: "地鐵榮站 1號出口",
      via: "🏪 飯店正 1F 就是 7-11",
      to: "🏨 Vessel Inn 榮站前 (總計2分)"
    },
    embedQuery: "ベッセルイン栄駅前",
    walkMapUrl: "https://www.google.com/maps/dir/?api=1&origin=栄駅1番出口&destination=ベッセルイン栄駅前&travelmode=walking",
    bestAppTip: "「Vessel 官網會員」或「Google Maps 導流 Agoda / Trip.com」最便宜（記得只輸入佔床人數 2人+3人 比價）！",
    links: {
      google: "https://www.google.com/travel/hotels?q=Vessel+Inn+Sakae+Ekimae&hl=zh-TW",
      official: "https://www.vessel-hotel.jp/inn/sakae/",
      rakuten: "https://travel.rakuten.co.jp/HOTEL/167500/167500.html",
      agoda: "https://www.agoda.com/zh-tw/vessel-inn-sakae-ekimae/hotel/nagoya-jp.html",
      trip: "https://tw.trip.com/hotels/list?city=360&keyword=Vessel%20Inn%20Sakae"
    }
  },
  {
    id: "daiwa-taiko",
    city: "nagoya",
    category: "hotel",
    rankBadge: "🥉 新幹線口 4 分鐘｜1 樓直通 7-11＋日式乾濕分離衛浴",
    name: "Daiwa Roynet Hotel 名古屋太閤通口",
    jpName: "ダイワロイネットホテル名古屋太閤通口",
    priceRange: "約 ¥26,000–¥38,000 / 晚（約台幣 5,500–8,000 元 / 2間合計）",
    stationInfo: "JR「名古屋站」太閤通口（新幹線口）步行僅 4 分鐘（牧歌之里巴士集合超近！）",
    roomPlan: "訂 2 間：1 間標準雙床房（2床＝2大+2小免費）＋ 1 間 Deluxe Twin 加床三人房（3床＝2大+1小計費+2小免費），僅需 1 小算佔床！",
    kidRule: "小學生（12歲未滿）每張床可免費同睡 1 名！全室 21㎡ 以上、浴室有獨立洗身體區＋浴缸",
    konbiniRoute: "飯店「正 1 樓直接併設 7-Eleven」（室內通道可達免吹冷風），過馬路對面還有「Lawson 椿町店」與「FamilyMart」！",
    walkSteps: {
      from: "JR 名古屋站太閤通口",
      via: "🏪 飯店 1F 併設 7-11",
      to: "🏨 大和魯內太閤通口 (總計4分)"
    },
    embedQuery: "ダイワロイネットホテル名古屋太閤通口",
    walkMapUrl: "https://www.google.com/maps/dir/?api=1&origin=JR名古屋駅太閤通口&destination=ダイワロイネットホテル名古屋太閤通口&travelmode=walking",
    bestAppTip: "推薦用「Travelko トラベルコ」與「樂天旅遊／Jalan」比價，日本訂房網常有『2連泊以上連住割』優惠！",
    links: {
      google: "https://www.google.com/travel/hotels?q=Daiwa+Roynet+Hotel+Nagoya+Taiko+dori+Side&hl=zh-TW",
      official: "https://www.daiwaroynet.jp/nagoya-taikodoriguchi/",
      rakuten: "https://travel.rakuten.co.jp/HOTEL/153417/153417.html",
      agoda: "https://www.agoda.com/zh-tw/daiwa-roynet-hotel-nagoya-taiko-dori-side/hotel/nagoya-jp.html",
      trip: "https://tw.trip.com/hotels/list?city=360&keyword=Daiwa%20Roynet%20Hotel%20Nagoya%20Taiko"
    }
  },
  {
    id: "grandbase",
    city: "nagoya",
    category: "apartment",
    rankBadge: "🏡 平價大公寓首選｜附廚房洗衣機＋56㎡ 大房可 9 人聚會",
    name: "GRAND BASE 名古屋駅西",
    jpName: "グランドベース名古屋駅西",
    priceRange: "約 ¥27,000–¥40,000 / 晚（約台幣 5,700–8,500 元 / 2間合計）",
    stationInfo: "地鐵櫻通線「太閤通站」步行 4 分鐘 ／ JR「名古屋站」太閤通口步行 8 分鐘",
    roomPlan: "同棟訂 2 間：1 間「Deluxe B（56㎡・4張雙人床・上限8人）」＋ 1 間「Superior A（40㎡・上限4人）」，想跟大阪 ESLEAD 一樣有廚房洗衣機選這間！",
    kidRule: "公寓式按人數分攤極便宜，晚上 9 個人可全部聚在 56㎡ 大房吃宵夜聊天，睡覺再回各自房間",
    konbiniRoute: "從名古屋站太閤通口走回飯店的順路上，距離飯店步行 2 分鐘（180m）就有 24H「FamilyMart 中村竹橋町店」！",
    walkSteps: {
      from: "名古屋站 / 太閤通站",
      via: "🏪 全家 中村竹橋町店 (2分)",
      to: "🏡 GRAND BASE 駅西 (8分)"
    },
    embedQuery: "グランドベース名古屋駅西",
    walkMapUrl: "https://www.google.com/maps/dir/?api=1&origin=JR名古屋駅太閤通口&destination=グランドベース名古屋駅西&waypoints=ファミリーマート中村竹橋町店&travelmode=walking",
    bestAppTip: "這類無人公寓在「Booking.com 手機 App（Genius 會員＋手機限定價）」與「Google Maps 點進 Agoda」通常最便宜！",
    links: {
      google: "https://www.google.com/travel/hotels?q=GRAND+BASE+Nagoya+Ekinishi&hl=zh-TW",
      official: "https://booking.com/hotel/jp/grand-base-nagoyaeki-nishi.zh-tw.html",
      rakuten: "https://travel.rakuten.co.jp/HOTEL/179661/179661.html",
      agoda: "https://www.agoda.com/zh-tw/grand-base-nagoya-ekinishi/hotel/nagoya-jp.html",
      trip: "https://tw.trip.com/hotels/list?city=360&keyword=GRAND%20BASE%20Nagoya"
    }
  },
  {
    id: "central-res",
    city: "nagoya",
    category: "oneunit",
    rankBadge: "🏠 1 間全包代表｜120㎡ 整層包層＋地鐵步行 2 分鐘",
    name: "Central Nagoya Residence（整層 9 人貸切）",
    jpName: "Central Nagoya Residence",
    priceRange: "約 ¥38,000–¥52,000 / 晚（約台幣 8,000–11,000 元 / 9人整層）",
    stationInfo: "地鐵東山線「中村公園站」步行 2 分鐘（搭東山線 7 分鐘直達名古屋站，有電梯）",
    roomPlan: "單一整層 120㎡ 住滿 9 人（3 間臥室共 5 張雙人床＋大餐桌＋廚房洗烘衣機），但注意僅 1 間浴室，以價格與衛浴來說上面訂 2 間飯店更划算",
    kidRule: "整層包層上限 9 人，若堅持 9 人住同一門牌可選這間（或名古屋站旁竹橋町『三木屋 Mikiya』獨棟）",
    konbiniRoute: "地鐵中村公園站出口就有「FamilyMart 東山線中村公園駅店」與「7-Eleven 名古屋中村公園駅前店」，買完走 2 分鐘就到家！",
    walkSteps: {
      from: "地鐵中村公園站",
      via: "🏪 全家 / 7-11 站前店 (出口旁)",
      to: "🏠 Central Residence (步行2分)"
    },
    embedQuery: "中村公園駅 名古屋",
    walkMapUrl: "https://www.google.com/maps/dir/?api=1&origin=中村公園駅&destination=ファミリーマート東山線中村公園駅店&travelmode=walking",
    bestAppTip: "包棟／包層務必先看「Central Nagoya 官網直訂」，直接免除 Airbnb / Booking 約 12%–15% 平台服務費！",
    links: {
      google: "https://centralnagoya.site/ja/groups/",
      official: "https://centralnagoya.site/ja/groups/",
      rakuten: "https://www.booking.com/searchresults.zh-tw.html?ss=Central+Nagoya+Residence",
      agoda: "https://www.airbnb.com.tw/s/Nakamura-Ward--Nagoya/homes",
      trip: "https://centralnagoya.site/ja/groups/"
    }
  },
  {
    id: "osaka-eslead",
    city: "osaka",
    category: "confirmed",
    rankBadge: "✅ 大阪前 3 晚已訂妥（1/16–1/19）｜地鐵 1 分鐘大公寓",
    name: "ESLEAD HOTEL Osaka Tsuruhashi（大阪鶴橋）",
    jpName: "エスリードホテル大阪鶴橋",
    priceRange: "✅ 已完成預訂（共 3 晚：1/16、1/17、1/18）",
    stationInfo: "Osaka Metro 千日前線「鶴橋站」4 號出口步行約 1 分鐘 ／ JR・近鐵「鶴橋站」步行 3 分鐘",
    roomPlan: "全室 40㎡ 以上新穎公寓式飯店，附設廚房、大冰箱、洗衣機與浴室烘乾設備，去黑門市場僅 2 站（3分鐘）！",
    kidRule: "已訂妥！提醒入住時備妥全體大人與小朋友護照正本辦理登記",
    konbiniRoute: "出鶴橋站 4 號出口走到飯店 1 分鐘內，旁邊就是 24H「FamilyMart 鶴橋駅前店（味原町13-8）」與生鮮超齊全的「Lawson Store 100 鶴橋駅前店（味原町14-4）」！",
    walkSteps: {
      from: "地鐵鶴橋站 4號出口",
      via: "🏪 全家 / Lawson 100 (1分)",
      to: "✅ ESLEAD 大阪鶴橋 (1分)"
    },
    embedQuery: "ESLEAD HOTEL Osaka Tsuruhashi",
    walkMapUrl: "https://www.google.com/maps/dir/?api=1&origin=鶴橋駅&destination=ESLEAD+HOTEL+Osaka+Tsuruhashi&waypoints=ファミリーマート鶴橋駅前店&travelmode=walking",
    bestAppTip: "大阪住宿已訂妥！同行友人可點右方地圖熟悉鶴橋站出口與周邊超商位置。",
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
  { id: "chk_nagoya_hotel", text: "比價並預訂名古屋 4 晚住宿（1/19–1/23，鎖定免費取消早鳥方案）", defaultDone: false },
  { id: "chk_poke", text: "12/18 台灣時間 17:00 搶 1/18 大丸心齋橋「寶可夢咖啡廳」預約", defaultDone: false },
  { id: "chk_kyoto", text: "預訂 1/17 京都（勝尾寺・嵐山・清水寺）一日遊巴士", defaultDone: false },
  { id: "chk_bokka", text: "預訂 1/20 牧歌之里玩雪一日遊巴士（名古屋站太閤通口出發）", defaultDone: false },
  { id: "chk_shinkansen", text: "購買 1/19 新大阪 ➔ 名古屋 新幹線車票（含小學生兒童票＆特大行李席）", defaultDone: false },
  { id: "chk_winter", text: "準備 5 位小朋友防水玩雪手套、毛帽、發熱衣與護照效期確認", defaultDone: false }
];

// State
let currentTab = "itinerary";
let selectedDay = 1;
let showAllDays = false;
let hotelFilter = "all";
let selectedHotelId = "comfort";
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

// Tab Switching
function switchTab(tabId) {
  currentTab = tabId;
  const tabs = ["itinerary", "hotels", "apps", "spots"];
  tabs.forEach(t => {
    const panel = document.getElementById(`panel-${t}`);
    const dBtn = document.getElementById(`dnav-${t}`);
    const mBtn = document.getElementById(`mnav-${t}`);
    if (t === tabId) {
      panel.classList.add("active");
      if (dBtn) dBtn.classList.add("active");
      if (mBtn) mBtn.classList.add("active");
    } else {
      panel.classList.remove("active");
      if (dBtn) dBtn.classList.remove("active");
      if (mBtn) mBtn.classList.remove("active");
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

  container.innerHTML = list.map(d => `
    <article class="card" style="margin-bottom: 14px;">
      <div class="trip-meta-row">
        <span class="chip chip-brand">Day ${d.day}・${d.date}</span>
        <span class="chip">📍 ${d.city}</span>
      </div>
      <h2 class="section-title" style="font-size: 19px; margin-top: 4px;">${d.title}</h2>
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
  `).join("");
}

// Render Hotels + Live Google Map
function setHotelFilter(filter) {
  hotelFilter = filter;
  ["all", "hotel", "apartment", "osaka"].forEach(f => {
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

function getFilteredHotels() {
  if (hotelFilter === "all") return HOTELS_DATA;
  if (hotelFilter === "hotel") return HOTELS_DATA.filter(h => h.category === "hotel");
  if (hotelFilter === "apartment") return HOTELS_DATA.filter(h => h.category === "apartment" || h.category === "oneunit");
  if (hotelFilter === "osaka") return HOTELS_DATA.filter(h => h.city === "osaka");
  return HOTELS_DATA;
}

function selectHotelOnMap(hotelId, scrollMapOnMobile) {
  selectedHotelId = hotelId;
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
        <div class="hotel-meta-list">
          <div>🚇 <strong>車站距離：</strong>${h.stationInfo}</div>
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
            🗺️ 在地圖顯示此間
          </button>
          <a class="ota-chip-link" href="${h.walkMapUrl}" target="_blank" rel="noopener noreferrer">
            🚶 車站➔超商➔飯店路線
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

let mapMode = "schematic";

const SCHEMATIC_MAP_SPECS = {
  "comfort": {
    shortPill: "🥇 Comfort (5分)",
    exitBadge: "🚇 認明出口：JR名古屋站【太閤通口】",
    totalWalk: "⏱️ 全程步行 5 分鐘（約 380m）",
    stepSub1: "出站即見",
    stepSub2: "斜對面 80m",
    stepSub3: "平路共 5 分鐘",
    svg: `
      <svg viewBox="0 0 460 264" width="100%" height="auto" role="img" aria-label="Comfort Hotel 周邊關係動畫圖">
        <!-- Compass -->
        <g transform="translate(426, 26)">
          <circle cx="0" cy="0" r="14" fill="#ffffff" stroke="#cbd5e1" />
          <text x="0" y="4" text-anchor="middle" font-size="10.5" font-weight="800" fill="#334155">↑北</text>
        </g>
        <!-- Roads & Rail -->
        <line x1="368" y1="16" x2="368" y2="248" stroke="#cbd5e1" stroke-width="10" stroke-dasharray="8 5" />
        <text x="382" y="42" font-size="10.5" fill="#64748b" font-weight="600">新幹線軌道</text>
        <path d="M 325 196 L 238 196 L 238 82 L 105 82" fill="none" stroke="#e2e8f0" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" />
        <line x1="238" y1="20" x2="238" y2="245" stroke="#e2e8f0" stroke-width="14" />
        <!-- Reference Landmark -->
        <rect x="262" y="128" width="76" height="30" rx="6" fill="#f1f5f9" stroke="#cbd5e1" />
        <text x="300" y="147" text-anchor="middle" font-size="10.5" fill="#64748b" font-weight="600">Bic Camera</text>

        <!-- Animated Walking Path -->
        <path id="walkPath_comfort" d="M 318 196 L 238 196 L 238 82 L 118 82" fill="none" stroke="#2563eb" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="anim-walk-line" />
        <circle r="6.5" fill="#1d4ed8" stroke="#ffffff" stroke-width="2.5">
          <animateMotion dur="3.4s" repeatCount="indefinite" path="M 318 196 L 238 196 L 238 82 L 118 82" />
        </circle>

        <!-- Station & Yellow Exit Plaque -->
        <rect x="332" y="162" width="112" height="58" rx="10" fill="#1e293b" />
        <text x="388" y="184" text-anchor="middle" font-size="12.5" font-weight="800" fill="#ffffff">JR 名古屋站</text>
        <rect x="342" y="191" width="92" height="22" rx="5" fill="#fef08a" stroke="#eab308" stroke-width="1.5" />
        <text x="388" y="206" text-anchor="middle" font-size="11" font-weight="800" fill="#713f12">太閤通口 (西口)</text>

        <!-- Konbini 1: Lawson -->
        <g transform="translate(238, 224)">
          <rect x="-58" y="-13" width="116" height="26" rx="7" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" />
          <text x="0" y="4" text-anchor="middle" font-size="11" font-weight="700" fill="#065f46">🏪 Lawson (出站1分)</text>
        </g>
        <circle cx="238" cy="196" r="6" fill="#10b981" stroke="#ffffff" stroke-width="2" />

        <!-- Konbini 2: 7-11 & FamilyMart -->
        <g transform="translate(268, 44)">
          <rect x="-78" y="-15" width="156" height="30" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" />
          <text x="0" y="4" text-anchor="middle" font-size="11.5" font-weight="800" fill="#065f46">🏪 7-11 ＆ 全家 (斜對面1分)</text>
        </g>
        <circle cx="238" cy="82" r="7" fill="#10b981" stroke="#ffffff" stroke-width="2" />

        <!-- Segment Minute Pills -->
        <g transform="translate(284, 176)">
          <rect x="-26" y="-10" width="52" height="20" rx="10" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5" />
          <text x="0" y="4" text-anchor="middle" font-size="10.5" font-weight="800" fill="#1d4ed8">🚶 1分</text>
        </g>
        <g transform="translate(200, 140)">
          <rect x="-32" y="-11" width="64" height="22" rx="11" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5" />
          <text x="0" y="4" text-anchor="middle" font-size="10.5" font-weight="800" fill="#1d4ed8">🚶 北走3分</text>
        </g>
        <g transform="translate(178, 61)">
          <rect x="-36" y="-10" width="72" height="20" rx="10" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5" />
          <text x="0" y="4" text-anchor="middle" font-size="10.5" font-weight="800" fill="#1d4ed8">🚶 1分(80m)</text>
        </g>

        <!-- Hotel Destination -->
        <circle cx="110" cy="82" r="14" fill="#2563eb" class="anim-pulse-circle" />
        <circle cx="110" cy="82" r="11" fill="#1d4ed8" stroke="#ffffff" stroke-width="2.5" />
        <text x="110" y="86" text-anchor="middle" font-size="11" fill="#ffffff" font-weight="800">★</text>
        <rect x="18" y="102" width="174" height="44" rx="9" fill="#1d4ed8" />
        <text x="105" y="121" text-anchor="middle" font-size="12" font-weight="800" fill="#ffffff">🥇 Comfort 名古屋新幹線口</text>
        <text x="105" y="138" text-anchor="middle" font-size="10.5" fill="#dbeafe">出站總計步行 5 分鐘｜免費早餐</text>
      </svg>
    `
  },
  "vessel-campana": {
    shortPill: "🥈 Vessel名駅 (4分)",
    exitBadge: "🚇 認明出口：地鐵名古屋站【1號出口】",
    totalWalk: "⏱️ 1號出口步行 4 分鐘（JR櫻通口9分）",
    stepSub1: "地下街北側出口",
    stepSub2: "正順路 1–2 分",
    stepSub3: "轉彎即達共 4 分",
    svg: `
      <svg viewBox="0 0 460 264" width="100%" height="auto" role="img" aria-label="Vessel Campana 名古屋周邊關係動畫圖">
        <g transform="translate(426, 26)">
          <circle cx="0" cy="0" r="14" fill="#ffffff" stroke="#cbd5e1" />
          <text x="0" y="4" text-anchor="middle" font-size="10.5" font-weight="800" fill="#334155">↑北</text>
        </g>
        <!-- Roads -->
        <path d="M 255 232 L 255 78 L 135 78" fill="none" stroke="#e2e8f0" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" />
        <!-- Underground link from JR to Subway Exit 1 -->
        <line x1="255" y1="220" x2="255" y2="172" stroke="#64748b" stroke-width="4" stroke-dasharray="4 4" />
        <text x="336" y="202" text-anchor="middle" font-size="10.5" fill="#64748b">地下街連通 (約5分)</text>

        <!-- JR Station Reference -->
        <rect x="195" y="216" width="120" height="34" rx="8" fill="#475569" />
        <text x="255" y="237" text-anchor="middle" font-size="11.5" font-weight="700" fill="#ffffff">JR 名古屋站 (櫻通口)</text>

        <!-- Animated Walk from Subway Exit 1 -->
        <path d="M 255 162 L 255 78 L 140 78" fill="none" stroke="#2563eb" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="anim-walk-line" />
        <circle r="6.5" fill="#1d4ed8" stroke="#ffffff" stroke-width="2.5">
          <animateMotion dur="3.2s" repeatCount="indefinite" path="M 255 162 L 255 78 L 140 78" />
        </circle>

        <!-- Subway Exit 1 Plaque -->
        <rect x="193" y="148" width="124" height="38" rx="8" fill="#1e293b" />
        <text x="255" y="163" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">地鐵東山線 名古屋站</text>
        <rect x="207" y="167" width="96" height="18" rx="4" fill="#fef08a" stroke="#eab308" stroke-width="1.2" />
        <text x="255" y="180" text-anchor="middle" font-size="10.5" font-weight="800" fill="#713f12">1號出口 (近KITTE)</text>

        <!-- Konbini on route -->
        <circle cx="255" cy="116" r="7" fill="#10b981" stroke="#ffffff" stroke-width="2" />
        <g transform="translate(352, 116)">
          <rect x="-82" y="-15" width="164" height="30" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" />
          <text x="0" y="4" text-anchor="middle" font-size="11" font-weight="800" fill="#065f46">🏪 7-11 ＆ Lawson (順路2分)</text>
        </g>

        <!-- Segment Minute Pills -->
        <g transform="translate(212, 122)">
          <rect x="-30" y="-10" width="60" height="20" rx="10" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5" />
          <text x="0" y="4" text-anchor="middle" font-size="10.5" font-weight="800" fill="#1d4ed8">🚶 北走2分</text>
        </g>
        <g transform="translate(200, 56)">
          <rect x="-34" y="-10" width="68" height="20" rx="10" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5" />
          <text x="0" y="4" text-anchor="middle" font-size="10.5" font-weight="800" fill="#1d4ed8">🚶 左轉2分</text>
        </g>

        <!-- Hotel Pin -->
        <circle cx="132" cy="78" r="14" fill="#2563eb" class="anim-pulse-circle" />
        <circle cx="132" cy="78" r="11" fill="#1d4ed8" stroke="#ffffff" stroke-width="2.5" />
        <text x="132" y="82" text-anchor="middle" font-size="11" fill="#ffffff" font-weight="800">★</text>
        <rect x="20" y="98" width="184" height="44" rx="9" fill="#1d4ed8" />
        <text x="112" y="117" text-anchor="middle" font-size="12" font-weight="800" fill="#ffffff">🥈 Vessel Campana 名古屋</text>
        <text x="112" y="134" text-anchor="middle" font-size="10.5" fill="#dbeafe">1號出口步行 4 分｜大浴場・木地板</text>
      </svg>
    `
  },
  "vessel-sakae": {
    shortPill: "🏬 Vessel榮 (2分)",
    exitBadge: "🚇 認明出口：地鐵榮站【1號出口】",
    totalWalk: "⏱️ 全程步行僅 2 分鐘（約 140m）",
    stepSub1: "唐吉訶德旁出口",
    stepSub2: "同棟 0 分鐘直達！",
    stepSub3: "直走 2 分鐘即達",
    svg: `
      <svg viewBox="0 0 460 264" width="100%" height="auto" role="img" aria-label="Vessel Inn 榮站前周邊關係動畫圖">
        <g transform="translate(426, 26)">
          <circle cx="0" cy="0" r="14" fill="#ffffff" stroke="#cbd5e1" />
          <text x="0" y="4" text-anchor="middle" font-size="10.5" font-weight="800" fill="#334155">↑北</text>
        </g>
        <!-- Subway & Main Street -->
        <line x1="40" y1="205" x2="420" y2="205" stroke="#cbd5e1" stroke-width="8" />
        <line x1="225" y1="40" x2="225" y2="235" stroke="#e2e8f0" stroke-width="22" stroke-linecap="round" />

        <!-- Landmarks: Donki & Oasis 21 -->
        <rect x="82" y="152" width="96" height="30" rx="6" fill="#f1f5f9" stroke="#cbd5e1" />
        <text x="130" y="171" text-anchor="middle" font-size="10.5" fill="#475569" font-weight="700">唐吉訶德 榮本店</text>

        <rect x="315" y="166" width="112" height="30" rx="6" fill="#eff6ff" stroke="#93c5fd" />
        <text x="371" y="185" text-anchor="middle" font-size="10.5" fill="#1d4ed8" font-weight="700">✨ 綠洲21 (4A出口)</text>

        <!-- Straight 2-min Animated Walk -->
        <path d="M 225 186 L 225 84" fill="none" stroke="#2563eb" stroke-width="4.5" stroke-linecap="round" class="anim-walk-line" />
        <circle r="6.5" fill="#1d4ed8" stroke="#ffffff" stroke-width="2.5">
          <animateMotion dur="2.4s" repeatCount="indefinite" path="M 225 186 L 225 84" />
        </circle>

        <!-- Segment Pill -->
        <g transform="translate(292, 136)">
          <rect x="-54" y="-12" width="108" height="24" rx="12" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5" />
          <text x="0" y="4" text-anchor="middle" font-size="11" font-weight="800" fill="#1d4ed8">🚶 直走 2 分鐘 (140m)</text>
        </g>

        <!-- Sakae Station Exit 1 -->
        <rect x="160" y="190" width="130" height="52" rx="10" fill="#1e293b" />
        <text x="225" y="210" text-anchor="middle" font-size="12" font-weight="800" fill="#ffffff">地鐵東山線・名城線 榮站</text>
        <rect x="177" y="216" width="96" height="20" rx="5" fill="#fef08a" stroke="#eab308" stroke-width="1.5" />
        <text x="225" y="230" text-anchor="middle" font-size="11" font-weight="800" fill="#713f12">1號出口</text>

        <!-- Combined Hotel + 1F 7-Eleven -->
        <circle cx="225" cy="76" r="14" fill="#2563eb" class="anim-pulse-circle" />
        <circle cx="225" cy="76" r="11" fill="#1d4ed8" stroke="#ffffff" stroke-width="2.5" />
        <text x="225" y="80" text-anchor="middle" font-size="11" fill="#ffffff" font-weight="800">★</text>

        <rect x="115" y="16" width="220" height="46" rx="10" fill="#1d4ed8" />
        <text x="225" y="35" text-anchor="middle" font-size="12.5" font-weight="800" fill="#ffffff">🏬 Vessel Inn 榮站前 (2F櫃檯)</text>
        <rect x="133" y="41" width="184" height="18" rx="4" fill="#ecfdf5" />
        <text x="225" y="54" text-anchor="middle" font-size="10.5" font-weight="800" fill="#065f46">🏪 正 1 樓就是 7-11 (下樓 0 分鐘！)</text>
      </svg>
    `
  },
  "daiwa-taiko": {
    shortPill: "🥉 大和魯內 (4分)",
    exitBadge: "🚇 認明出口：JR名古屋站【太閤通口】",
    totalWalk: "⏱️ 全程步行僅 4 分鐘（約 280m）",
    stepSub1: "新幹線口出站",
    stepSub2: "飯店 1F 室內直通！",
    stepSub3: "平路 4 分鐘即達",
    svg: `
      <svg viewBox="0 0 460 264" width="100%" height="auto" role="img" aria-label="Daiwa Roynet 名古屋太閤通口周邊關係動畫圖">
        <g transform="translate(426, 26)">
          <circle cx="0" cy="0" r="14" fill="#ffffff" stroke="#cbd5e1" />
          <text x="0" y="4" text-anchor="middle" font-size="10.5" font-weight="800" fill="#334155">↑北</text>
        </g>
        <!-- Rail & Roads -->
        <line x1="358" y1="16" x2="358" y2="248" stroke="#cbd5e1" stroke-width="10" stroke-dasharray="8 5" />
        <path d="M 310 74 L 228 74 L 228 188 L 150 188" fill="none" stroke="#e2e8f0" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" />

        <!-- ESCA Underground hint -->
        <rect x="246" y="108" width="88" height="26" rx="6" fill="#f1f5f9" stroke="#cbd5e1" />
        <text x="290" y="125" text-anchor="middle" font-size="10" fill="#475569" font-weight="600">エスカ地下街出口</text>

        <!-- Animated Walk -->
        <path d="M 305 74 L 228 74 L 228 188 L 155 188" fill="none" stroke="#2563eb" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="anim-walk-line" />
        <circle r="6.5" fill="#1d4ed8" stroke="#ffffff" stroke-width="2.5">
          <animateMotion dur="3.0s" repeatCount="indefinite" path="M 305 74 L 228 74 L 228 188 L 155 188" />
        </circle>

        <!-- JR Station Top Right -->
        <rect x="308" y="44" width="122" height="54" rx="10" fill="#1e293b" />
        <text x="369" y="65" text-anchor="middle" font-size="12" font-weight="800" fill="#ffffff">JR 名古屋站</text>
        <rect x="321" y="72" width="96" height="20" rx="5" fill="#fef08a" stroke="#eab308" stroke-width="1.5" />
        <text x="369" y="86" text-anchor="middle" font-size="10.5" font-weight="800" fill="#713f12">太閤通口 (新幹線)</text>

        <!-- Opposite Lawson -->
        <g transform="translate(310, 212)">
          <rect x="-68" y="-13" width="136" height="26" rx="7" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" />
          <text x="0" y="4" text-anchor="middle" font-size="10.5" font-weight="700" fill="#065f46">🏪 對面還有 Lawson (1分)</text>
        </g>

        <!-- Segment Minute Pill -->
        <g transform="translate(172, 128)">
          <rect x="-52" y="-12" width="104" height="24" rx="12" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5" />
          <text x="0" y="4" text-anchor="middle" font-size="10.5" font-weight="800" fill="#1d4ed8">🚶 南走 4 分鐘 (280m)</text>
        </g>

        <!-- Hotel + 1F 7-11 -->
        <circle cx="148" cy="188" r="14" fill="#2563eb" class="anim-pulse-circle" />
        <circle cx="148" cy="188" r="11" fill="#1d4ed8" stroke="#ffffff" stroke-width="2.5" />
        <text x="148" y="192" text-anchor="middle" font-size="11" fill="#ffffff" font-weight="800">★</text>

        <rect x="18" y="204" width="212" height="48" rx="10" fill="#1d4ed8" />
        <text x="124" y="223" text-anchor="middle" font-size="12" font-weight="800" fill="#ffffff">🥉 大和魯內 名古屋太閤通口</text>
        <rect x="32" y="229" width="184" height="18" rx="4" fill="#ecfdf5" />
        <text x="124" y="242" text-anchor="middle" font-size="10.5" font-weight="800" fill="#065f46">🏪 正 1 樓直通 7-11 (免出大門！)</text>
      </svg>
    `
  },
  "grandbase": {
    shortPill: "🏡 GRAND BASE (4–8分)",
    exitBadge: "🚇 認明出口：太閤通站【2號出口】或 JR【太閤通口】",
    totalWalk: "⏱️ 太閤通站步行 4 分 ／ JR名古屋站步行 8 分",
    stepSub1: "雙車站皆可走",
    stepSub2: "距飯店僅 180m",
    stepSub3: "平路 4–8 分鐘",
    svg: `
      <svg viewBox="0 0 460 264" width="100%" height="auto" role="img" aria-label="GRAND BASE 名古屋駅西周邊關係動畫圖">
        <g transform="translate(426, 26)">
          <circle cx="0" cy="0" r="14" fill="#ffffff" stroke="#cbd5e1" />
          <text x="0" y="4" text-anchor="middle" font-size="10.5" font-weight="800" fill="#334155">↑北</text>
        </g>
        <!-- Main Taiko-dori Ave & Side Street -->
        <line x1="40" y1="95" x2="410" y2="95" stroke="#e2e8f0" stroke-width="18" stroke-linecap="round" />
        <line x1="215" y1="95" x2="135" y2="195" stroke="#e2e8f0" stroke-width="16" stroke-linecap="round" />
        <line x1="115" y1="95" x2="135" y2="195" stroke="#cbd5e1" stroke-width="4" stroke-dasharray="4 4" />

        <!-- Subway Taiko-dori Station -->
        <rect x="42" y="46" width="132" height="46" rx="8" fill="#334155" />
        <text x="108" y="65" text-anchor="middle" font-size="11" font-weight="800" fill="#ffffff">地鐵櫻通線 太閤通站</text>
        <rect x="64" y="70" width="88" height="18" rx="4" fill="#fef08a" stroke="#eab308" stroke-width="1.2" />
        <text x="108" y="83" text-anchor="middle" font-size="10" font-weight="800" fill="#713f12">2號出口 (走4分)</text>

        <!-- JR Nagoya Station -->
        <rect x="328" y="66" width="114" height="52" rx="9" fill="#1e293b" />
        <text x="385" y="86" text-anchor="middle" font-size="11.5" font-weight="800" fill="#ffffff">JR 名古屋站</text>
        <rect x="340" y="92" width="90" height="20" rx="5" fill="#fef08a" stroke="#eab308" stroke-width="1.5" />
        <text x="385" y="106" text-anchor="middle" font-size="10.5" font-weight="800" fill="#713f12">太閤通口 (走8分)</text>

        <!-- Animated Walk from JR via FamilyMart -->
        <path d="M 328 95 L 215 95 L 135 195" fill="none" stroke="#2563eb" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="anim-walk-line" />
        <circle r="6.5" fill="#1d4ed8" stroke="#ffffff" stroke-width="2.5">
          <animateMotion dur="3.6s" repeatCount="indefinite" path="M 328 95 L 215 95 L 135 195" />
        </circle>

        <!-- FamilyMart -->
        <circle cx="215" cy="95" r="7" fill="#10b981" stroke="#ffffff" stroke-width="2" />
        <g transform="translate(242, 54)">
          <rect x="-70" y="-14" width="140" height="28" rx="7" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" />
          <text x="0" y="4" text-anchor="middle" font-size="11" font-weight="800" fill="#065f46">🏪 全家 竹橋町店 (順路)</text>
        </g>

        <!-- Segment Minute Pills -->
        <g transform="translate(274, 118)">
          <rect x="-32" y="-10" width="64" height="20" rx="10" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5" />
          <text x="0" y="4" text-anchor="middle" font-size="10" font-weight="800" fill="#1d4ed8">🚶 西走6分</text>
        </g>
        <g transform="translate(226, 156)">
          <rect x="-46" y="-11" width="92" height="22" rx="11" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5" />
          <text x="0" y="4" text-anchor="middle" font-size="10.5" font-weight="800" fill="#1d4ed8">🚶 再2分 (180m)</text>
        </g>
        <text x="76" y="148" font-size="10.5" font-weight="700" fill="#475569">← 太閤通站走 4 分</text>

        <!-- Hotel Pin -->
        <circle cx="135" cy="195" r="14" fill="#2563eb" class="anim-pulse-circle" />
        <circle cx="135" cy="195" r="11" fill="#1d4ed8" stroke="#ffffff" stroke-width="2.5" />
        <text x="135" y="199" text-anchor="middle" font-size="11" fill="#ffffff" font-weight="800">★</text>
        <rect x="38" y="212" width="198" height="42" rx="9" fill="#1d4ed8" />
        <text x="137" y="230" text-anchor="middle" font-size="12" font-weight="800" fill="#ffffff">🏡 GRAND BASE 名古屋駅西</text>
        <text x="137" y="246" text-anchor="middle" font-size="10.5" fill="#dbeafe">56㎡大公寓｜附廚房＆洗衣機</text>
      </svg>
    `
  },
  "central-res": {
    shortPill: "🏠 Central包層 (2分)",
    exitBadge: "🚇 認明出口：地鐵中村公園站【2號 / 3號出口】",
    totalWalk: "⏱️ 出站步行僅 2 分鐘（約 150m・有電梯）",
    stepSub1: "名駅搭地鐵7分",
    stepSub2: "出站口 30 秒",
    stepSub3: "步行 2 分鐘上樓",
    svg: `
      <svg viewBox="0 0 460 264" width="100%" height="auto" role="img" aria-label="Central Nagoya Residence 周邊關係動畫圖">
        <g transform="translate(426, 26)">
          <circle cx="0" cy="0" r="14" fill="#ffffff" stroke="#cbd5e1" />
          <text x="0" y="4" text-anchor="middle" font-size="10.5" font-weight="800" fill="#334155">↑北</text>
        </g>
        <!-- Subway Higashiyama Line -->
        <line x1="40" y1="205" x2="420" y2="205" stroke="#f59e0b" stroke-width="6" />
        <text x="366" y="194" text-anchor="middle" font-size="10.5" font-weight="700" fill="#b45309">地鐵東山線 (7分直達名古屋站) →</text>

        <!-- Road -->
        <path d="M 235 190 L 235 88 L 145 88" fill="none" stroke="#e2e8f0" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" />

        <!-- Animated Walk -->
        <path d="M 235 186 L 235 88 L 148 88" fill="none" stroke="#2563eb" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="anim-walk-line" />
        <circle r="6.5" fill="#1d4ed8" stroke="#ffffff" stroke-width="2.5">
          <animateMotion dur="2.6s" repeatCount="indefinite" path="M 235 186 L 235 88 L 148 88" />
        </circle>

        <!-- Station -->
        <rect x="165" y="190" width="140" height="52" rx="10" fill="#1e293b" />
        <text x="235" y="210" text-anchor="middle" font-size="12" font-weight="800" fill="#ffffff">地鐵 中村公園站</text>
        <rect x="182" y="216" width="106" height="20" rx="5" fill="#fef08a" stroke="#eab308" stroke-width="1.5" />
        <text x="235" y="230" text-anchor="middle" font-size="10.5" font-weight="800" fill="#713f12">2號 / 3號出口</text>

        <!-- Konbini right at exit -->
        <circle cx="235" cy="146" r="7" fill="#10b981" stroke="#ffffff" stroke-width="2" />
        <g transform="translate(338, 146)">
          <rect x="-86" y="-14" width="172" height="28" rx="7" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" />
          <text x="0" y="4" text-anchor="middle" font-size="11" font-weight="800" fill="#065f46">🏪 全家 ＆ 7-11 (出站30秒)</text>
        </g>

        <!-- Segment Minute Pill -->
        <g transform="translate(205, 62)">
          <rect x="-50" y="-11" width="100" height="22" rx="11" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5" />
          <text x="0" y="4" text-anchor="middle" font-size="10.5" font-weight="800" fill="#1d4ed8">🚶 步行 2 分 (150m)</text>
        </g>

        <!-- Residence Pin -->
        <circle cx="140" cy="88" r="14" fill="#2563eb" class="anim-pulse-circle" />
        <circle cx="140" cy="88" r="11" fill="#1d4ed8" stroke="#ffffff" stroke-width="2.5" />
        <text x="140" y="92" text-anchor="middle" font-size="11" fill="#ffffff" font-weight="800">★</text>
        <rect x="24" y="108" width="184" height="44" rx="9" fill="#1d4ed8" />
        <text x="116" y="127" text-anchor="middle" font-size="11.5" font-weight="800" fill="#ffffff">🏠 Central Residence</text>
        <text x="116" y="143" text-anchor="middle" font-size="10.5" fill="#dbeafe">120㎡頂樓包層｜大樓有電梯</text>
      </svg>
    `
  },
  "osaka-eslead": {
    shortPill: "✅ 大阪ESLEAD (1分)",
    exitBadge: "🚇 認明出口：地鐵千日前線 鶴橋站【4號出口】",
    totalWalk: "⏱️ 出站步行僅 1 分鐘（約 110m・已訂妥！）",
    stepSub1: "千日前線4號口",
    stepSub2: "出站 30 秒順路",
    stepSub3: "再 30 秒即達飯店",
    svg: `
      <svg viewBox="0 0 460 264" width="100%" height="auto" role="img" aria-label="ESLEAD HOTEL 大阪鶴橋周邊關係動畫圖">
        <g transform="translate(426, 26)">
          <circle cx="0" cy="0" r="14" fill="#ffffff" stroke="#cbd5e1" />
          <text x="0" y="4" text-anchor="middle" font-size="10.5" font-weight="800" fill="#334155">↑北</text>
        </g>
        <!-- Sennichimae Subway Line & JR Loop -->
        <line x1="30" y1="142" x2="430" y2="142" stroke="#e2e8f0" stroke-width="22" stroke-linecap="round" />
        <line x1="378" y1="24" x2="378" y2="242" stroke="#cbd5e1" stroke-width="9" stroke-dasharray="7 5" />
        <text x="378" y="254" text-anchor="middle" font-size="10" fill="#64748b" font-weight="700">JR大阪環狀線・近鐵鶴橋站</text>
        <text x="148" y="238" text-anchor="middle" font-size="11" fill="#be185d" font-weight="700">← 千日前線：2站(3分)到黑門市場 ／ 3站(5分)到難波</text>

        <!-- Straight 1-min Animated Walk -->
        <path d="M 304 142 L 105 142" fill="none" stroke="#059669" stroke-width="4.5" stroke-linecap="round" class="anim-walk-line" />
        <circle r="6.5" fill="#059669" stroke="#ffffff" stroke-width="2.5">
          <animateMotion dur="2.2s" repeatCount="indefinite" path="M 304 142 L 105 142" />
        </circle>

        <!-- Tsuruhashi Station Exit 4 -->
        <rect x="298" y="108" width="136" height="58" rx="10" fill="#1e293b" />
        <text x="366" y="130" text-anchor="middle" font-size="12" font-weight="800" fill="#ffffff">地鐵千日前線 鶴橋站</text>
        <rect x="314" y="138" width="104" height="21" rx="5" fill="#fef08a" stroke="#eab308" stroke-width="1.5" />
        <text x="366" y="153" text-anchor="middle" font-size="11" font-weight="800" fill="#713f12">4號出口 (走1分)</text>

        <!-- Konbini right on the 1-min path -->
        <circle cx="212" cy="142" r="7.5" fill="#10b981" stroke="#ffffff" stroke-width="2" />
        <g transform="translate(212, 82)">
          <rect x="-86" y="-20" width="172" height="38" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" />
          <text x="0" y="-3" text-anchor="middle" font-size="11" font-weight="800" fill="#065f46">🏪 全家 鶴橋站前店</text>
          <text x="0" y="12" text-anchor="middle" font-size="10.5" font-weight="700" fill="#047857">＋ Lawson 100 生鮮百元超商</text>
        </g>

        <!-- Segment Minute Pills -->
        <g transform="translate(258, 174)">
          <rect x="-28" y="-10" width="56" height="20" rx="10" fill="#ffffff" stroke="#6ee7b7" stroke-width="1.5" />
          <text x="0" y="4" text-anchor="middle" font-size="10" font-weight="800" fill="#059669">🚶 30秒</text>
        </g>
        <g transform="translate(158, 174)">
          <rect x="-32" y="-10" width="64" height="20" rx="10" fill="#ffffff" stroke="#6ee7b7" stroke-width="1.5" />
          <text x="0" y="4" text-anchor="middle" font-size="10" font-weight="800" fill="#059669">🚶 再30秒</text>
        </g>

        <!-- Hotel Pin -->
        <circle cx="96" cy="142" r="14" fill="#10b981" class="anim-pulse-circle" />
        <circle cx="96" cy="142" r="11" fill="#059669" stroke="#ffffff" stroke-width="2.5" />
        <text x="96" y="146" text-anchor="middle" font-size="11" fill="#ffffff" font-weight="800">✓</text>
        <rect x="16" y="34" width="166" height="44" rx="9" fill="#059669" />
        <text x="99" y="53" text-anchor="middle" font-size="11.5" font-weight="800" fill="#ffffff">✅ ESLEAD 大阪鶴橋</text>
        <text x="99" y="69" text-anchor="middle" font-size="10.5" fill="#d1fae5">出站總計步行 1 分鐘！(110m)</text>
      </svg>
    `
  }
};

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
    if (bottomBtn) bottomBtn.textContent = "✨ 切回周邊關係動畫圖";
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
      return `<button type="button" class="q-pill ${activeCls}" onclick="selectHotelOnMap('${item.id}', false)">${label}</button>`;
    }).join("");
  }

  document.getElementById("map-hotel-title").textContent = h.name;
  document.getElementById("map-hotel-sub").textContent = h.stationInfo;

  // Update Schematic Animated View
  document.getElementById("schematic-exit-badge").textContent = spec.exitBadge;
  document.getElementById("schematic-total-walk").textContent = spec.totalWalk;
  document.getElementById("schematic-svg-holder").innerHTML = spec.svg;

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
}

// Price Comparison App Booking Calculator
function updateSearchHelper() {
  const mode = document.getElementById("helper-hotel-select").value;
  const out = document.getElementById("helper-output");

  if (mode === "vessel") {
    out.innerHTML = `
      <strong>🎯 Vessel 系列（Campana 名古屋 / 榮站前）最省搜尋輸入法：</strong>
      <ul style="margin: 6px 0 0; padding-left: 18px;">
        <li><strong>在 Google Maps / Agoda / Trip.com 比價時：</strong>千萬別輸入 5 個小孩！請分開搜「第1間：2位大人（雙床房）」＋「第2間：3位大人（三人房）」（這樣就對應您設定『1～2位小孩算佔床、其餘免費同床』），結帳備註寫明有幾位 6–10 歲添い寝兒童即可。</li>
        <li><strong>最推薦在「Vessel 日本官網」訂：</strong>官網可直接選「大人人數」＋「小學生（添い寝）人數」，系統自動顯示小學生 ¥0 免費，註冊免費會員再拿 <strong>¥1,000 折價點數</strong>！</li>
      </ul>
    `;
  } else if (mode === "comfort") {
    out.innerHTML = `
      <strong>🎯 Comfort Hotel 名古屋新幹線口 最省搜尋輸入法：</strong>
      <ul style="margin: 6px 0 0; padding-left: 18px;">
        <li>因規定「1張床免費帶 1 位小學生」，你們共 9 人（4大＋5位小學生），照您「把 2 位小孩當大人佔床」剛好總共需要 <strong>6 張床</strong>！</li>
        <li><strong>最省訂法：</strong>訂 <strong>3 間雙床房（每間輸入 2 位大人，各帶 1 位免費同床小學生）</strong>，9 個人睡 6 張 123cm 大床＋3 間衛浴＋<strong>9 份免費自助早餐</strong>，1 月底每晚總計才約台幣 5,000 多元！</li>
      </ul>
    `;
  } else if (mode === "daiwa") {
    out.innerHTML = `
      <strong>🎯 Daiwa Roynet 名古屋太閤通口 最省搜尋輸入法：</strong>
      <ul style="margin: 6px 0 0; padding-left: 18px;">
        <li>1 張床可免費帶 1 位小學生（未滿 12 歲）！訂 <strong>1 間標準雙床房（輸入 2 大人 → 免費帶 2 小）＋ 1 間加床三人房（輸入 3 大人 → 等於 2大+1小佔床，再免費帶 2 小）</strong>，共 5 張床剛好合法住滿 9 人！</li>
        <li><strong>比價必看：</strong>先開「Travelko トラベルコ」與「12/4 樂天旅遊 Super SALE」領優惠券，常比 Agoda 再省 15%！</li>
      </ul>
    `;
  } else {
    out.innerHTML = `
      <strong>🎯 公寓式飯店 / 包棟（GRAND BASE / Central Nagoya）搜尋輸入法：</strong>
      <ul style="margin: 6px 0 0; padding-left: 18px;">
        <li>無人公寓與包棟沒有小學生免費同床，需<strong>老實輸入實際總人數（例如 6 人＋3 人，或包棟 9 人）</strong>搜尋。</li>
        <li><strong>最省 App：</strong>GRAND BASE 開手機版「Booking.com（享 Genius 折扣＋手機專屬價）」或從「Google Maps 點進 Agoda」；Central Nagoya 包層務必走「官方網站直訂」省下 14% 平台手續費！</li>
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
  renderHotelsList();
  renderMapPane();
  updateSearchHelper();
  renderSpots();
  renderChecklist();
});
