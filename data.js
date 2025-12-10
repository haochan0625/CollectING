// data.js - 這是唯一的商品資料來源
const productsDB = [
    {
        id: "leica_m3",
        category: "camera", // 分類標籤
        name: "Leica M3 Single Stroke",
        price: 98000,
        stock: 1,
        img: "https://images.unsplash.com/photo-1651804900839-05ae5dd7612a?q=80&w=800",
        desc: "<strong>攝影史上的傳奇。</strong><br>這台 1958 年出產的 Leica M3 狀況極佳。觀景窗明亮無霧化。",
        // 新增這個 specs 物件 (相機專用規格)
        specs: {
            "年份": "1958",
            "序號": "#982xxx",
            "快門": "1s - 1/1000s, B",
            "保固": "6 個月店家保固"
        }
    },
    {
        id: "gameboy_trans",
        category: "game",
        name: "Nintendo GameBoy Transparent",
        price: 4500,
        stock: 0,
        img: "https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?q=80&w=800",
        desc: "<strong>透明殼限量版。</strong><br>90年代最酷的掌機，完全修復螢幕斷線問題。",
        specs: {
            "發行年": "1995",
            "電池": "AA 電池 x4",
            "螢幕": "IPS 改裝螢幕",
            "狀況": "外殼無裂痕"
        }
    },
    {
        id: "vinyl_album",
        category: "av", // 新分類
        name: "Michael Jackson 1982 Thriller Vinyl Album",
        price: 1000,
        stock: 2,
        img: "https://img.ricardostatic.ch/images/f1d13503-b5eb-4e89-a1a3-29ab5cc631e3/t_1000x750/lp-vinyl-michael-jackson-thriller-von-1982",
        desc: "<strong>顫慄黑膠唱片。</strong><br>流行音樂之王，專輯銷售的紀錄保持者。",
        specs: {
            "發行年": "1982",
            "狀況": "無損傷，狀況良好",
        }
    },
    {
        id: "casio_gold",
        category: "watch",
        name: "Casio Vintage Gold",
        price: 2200,
        img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600",
        desc: "<strong>復古電子錶。</strong><br>這不是智能手錶，這是風格。"
    },
    {
        id: "fantasticfour_comic",
        category: "comic",
        name: "Fantastic Four #8 驚奇四超人",
        price: 5000,
        stock: 1,
        img: "https://ccg-imaging-cgc-comics-production.s3.amazonaws.com/17543346-295b-4d07-a117-3f8224047b27/CGC4618420-001_OBV.jpg",
        // ✅ 新增這個陣列，放入該商品的所有照片 (包含封面那張)
        images: [
            "https://ccg-imaging-cgc-comics-production.s3.amazonaws.com/17543346-295b-4d07-a117-3f8224047b27/CGC4618420-001_OBV.jpg",
            "https://ccg-imaging-cgc-comics-production.s3.amazonaws.com/17543346-295b-4d07-a117-3f8224047b27/CGC4618420-001_REV.jpg",
        ],
        desc: "<strong>白銀時代的代表作。</strong><br>漫威超級英雄團隊的起點。",
        specs: {
            "發行年": "1962",
            "關鍵事件": "1st appearance of the Puppet Master",
            "狀況": "CGC 0.5分"
        }
    },
    {
        id: "miami_city",
        category: "jersey", // 新分類
        name: "Nike 2018-19 Miami Heat City Edition Jersey",
        price: 800,
        img: "https://basketballjerseyarchive.com/static/news/2025/08/06/zqXRIGZEmGop13W/leaked-new-pictures-miami-heat-to-bring-back-iconic-black-miami-vice-jerseys.jpg",
        desc: "<strong>城市版的不敗經典。</strong><br>熱銷系列的起點。",
        specs: {
            "發行年": "2018",
        }
    },
    {
        id: "pokemon_card",
        category: "card", // 新分類
        name: "2021 Pokemon Celebration UPC box",
        price: 38000,
        img: "https://img.ricardostatic.ch/images/79a4bf4e-b681-472f-9501-9fd080327548/t_1000x750/pokemon-25th-anniversary-ultra-premium-kollektion-de",
        desc: "<strong>美版25週年紀念卡盒。</strong><br>首次出現金屬卡。",
        specs: {
            "發行年": "2021",
        }
    },
];

// 為了讓這份資料可以在不同頁面被找到，我們不用做任何事，
// 只要在 HTML 引入這個檔案，productsDB 這個變數就是全域的。