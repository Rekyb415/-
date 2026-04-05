// ══════════════════════════════════════════════════════════════
// data.js — Polyphonic Character Database
// ══════════════════════════════════════════════════════════════
//
// HOW TO ADD NEW CHARACTERS:
// 1. Add a row to RAW_DATA below following the same format:
//    { hanzi:"字", pinyin:"pīn/yīn", level:"一级" }
//
// 2. Optionally add enriched meanings/examples to ENRICHED:
//    "字": {
//      readings: {
//        "pīn": { meaning_zh:"拼写", meaning_en:"to spell", example_zh:"拼音", example_en:"pinyin", frequency:"high" },
//        "yīn": { meaning_zh:"声音", meaning_en:"sound",   example_zh:"音乐", example_en:"music",   frequency:"high" },
//      }
//    }
//
// 3. If no enrichment exists the app still works — it shows the
//    pinyin only (no meaning/example) in quiz and flashcard.
//
// LEVEL MAP (matches 国际中文教育中文水平等级标准):
//   一级 → difficulty 1  (HSK-equivalent beginner)
//   二级 → difficulty 2
//   三级 → difficulty 3
//   四级 → difficulty 4
//   五级 → difficulty 5
//   六级 → difficulty 6
//   七-九级 → difficulty 7
// ══════════════════════════════════════════════════════════════

// ── Raw SQL data (246 chars) ─────────────────────────────────
// To add more: paste extra rows here in the same format.
const RAW_DATA = [
  {hanzi:"得",pinyin:"dé/děi/de",level:"一级"},
  {hanzi:"地",pinyin:"dì/de",level:"一级"},
  {hanzi:"着",pinyin:"zhe/zháo/zhuó",level:"一级"},
  {hanzi:"了",pinyin:"le/liǎo",level:"一级"},
  {hanzi:"好",pinyin:"hǎo/hào",level:"一级"},
  {hanzi:"和",pinyin:"hé/hè/huó/huò/hú",level:"一级"},
  {hanzi:"干",pinyin:"gān/gàn",level:"一级"},
  {hanzi:"还",pinyin:"hái/huán",level:"一级"},
  {hanzi:"几",pinyin:"jī/jǐ",level:"一级"},
  {hanzi:"教",pinyin:"jiāo/jiào",level:"一级"},
  {hanzi:"觉",pinyin:"jué/jiào",level:"一级"},
  {hanzi:"少",pinyin:"shǎo/shào",level:"一级"},
  {hanzi:"行",pinyin:"xíng/háng",level:"一级"},
  {hanzi:"兴",pinyin:"xīng/xìng",level:"一级"},
  {hanzi:"中",pinyin:"zhōng/zhòng",level:"一级"},
  {hanzi:"重",pinyin:"zhòng/chóng",level:"一级"},
  {hanzi:"都",pinyin:"dōu/dū",level:"一级"},
  {hanzi:"要",pinyin:"yào/yāo",level:"一级"},
  {hanzi:"没",pinyin:"méi/mò",level:"一级"},
  {hanzi:"难",pinyin:"nán/nàn",level:"一级"},
  {hanzi:"什",pinyin:"shí/shén",level:"一级"},
  {hanzi:"说",pinyin:"shuō/shuì/yuè",level:"一级"},
  {hanzi:"长",pinyin:"cháng/zhǎng",level:"一级"},
  {hanzi:"场",pinyin:"chǎng/cháng",level:"一级"},
  {hanzi:"差",pinyin:"chā/chà/chāi/cī",level:"一级"},
  {hanzi:"发",pinyin:"fā/fà",level:"二级"},
  {hanzi:"当",pinyin:"dāng/dàng",level:"二级"},
  {hanzi:"倒",pinyin:"dǎo/dào",level:"二级"},
  {hanzi:"相",pinyin:"xiāng/xiàng",level:"二级"},
  {hanzi:"应",pinyin:"yīng/yìng",level:"二级"},
  {hanzi:"称",pinyin:"chēng/chèn/chèng",level:"二级"},
  {hanzi:"处",pinyin:"chǔ/chù",level:"二级"},
  {hanzi:"乐",pinyin:"lè/yuè",level:"二级"},
  {hanzi:"数",pinyin:"shǔ/shù/shuò",level:"二级"},
  {hanzi:"熟",pinyin:"shú/shóu",level:"二级"},
  {hanzi:"便",pinyin:"biàn/pián",level:"二级"},
  {hanzi:"卷",pinyin:"juǎn/juàn",level:"二级"},
  {hanzi:"藏",pinyin:"cáng/zàng",level:"二级"},
  {hanzi:"舍",pinyin:"shě/shè",level:"二级"},
  {hanzi:"调",pinyin:"tiáo/diào",level:"三级"},
  {hanzi:"曾",pinyin:"céng/zēng",level:"三级"},
  {hanzi:"朝",pinyin:"cháo/zhāo",level:"三级"},
  {hanzi:"强",pinyin:"qiáng/qiǎng/jiàng",level:"三级"},
  {hanzi:"切",pinyin:"qiē/qiè",level:"三级"},
  {hanzi:"散",pinyin:"sàn/sǎn",level:"三级"},
  {hanzi:"血",pinyin:"xuè/xiě",level:"三级"},
  {hanzi:"传",pinyin:"chuán/zhuàn",level:"三级"},
  {hanzi:"度",pinyin:"dù/duó",level:"三级"},
  {hanzi:"恶",pinyin:"è/wù/ě",level:"三级"},
  {hanzi:"薄",pinyin:"báo/bó/bò",level:"四级"},
  {hanzi:"折",pinyin:"zhē/zhé/shé",level:"四级"},
  {hanzi:"冲",pinyin:"chōng/chòng",level:"四级"},
  {hanzi:"单",pinyin:"dān/shàn/chán",level:"四级"},
  {hanzi:"担",pinyin:"dān/dàn",level:"四级"},
  {hanzi:"降",pinyin:"jiàng/xiáng",level:"四级"},
  {hanzi:"系",pinyin:"xì/jì",level:"四级"},
  {hanzi:"磨",pinyin:"mó/mò",level:"四级"},
  {hanzi:"宁",pinyin:"níng/nìng",level:"四级"},
  {hanzi:"铺",pinyin:"pū/pù",level:"四级"},
  {hanzi:"曲",pinyin:"qū/qǔ",level:"四级"},
  {hanzi:"塞",pinyin:"sāi/sài/sè",level:"四级"},
  {hanzi:"省",pinyin:"shěng/xǐng",level:"四级"},
  {hanzi:"泊",pinyin:"bó/pō",level:"五级"},
  {hanzi:"参",pinyin:"cān/shēn/cēn",level:"五级"},
  {hanzi:"盛",pinyin:"shèng/chéng",level:"五级"},
  {hanzi:"乘",pinyin:"chéng/shèng",level:"五级"},
  {hanzi:"斗",pinyin:"dǒu/dòu",level:"五级"},
  {hanzi:"杆",pinyin:"gān/gǎn",level:"五级"},
  {hanzi:"冠",pinyin:"guān/guàn",level:"五级"},
  {hanzi:"划",pinyin:"huá/huà",level:"五级"},
  {hanzi:"假",pinyin:"jiǎ/jià",level:"五级"},
  {hanzi:"壳",pinyin:"ké/qiào",level:"五级"},
  {hanzi:"露",pinyin:"lù/lòu",level:"五级"},
  {hanzi:"模",pinyin:"mó/mú",level:"五级"},
  {hanzi:"喷",pinyin:"pēn/pèn",level:"五级"},
  {hanzi:"屏",pinyin:"píng/bǐng",level:"五级"},
  {hanzi:"悄",pinyin:"qiāo/qiǎo",level:"五级"},
  {hanzi:"宿",pinyin:"sù/xiǔ/xiù",level:"五级"},
  {hanzi:"挑",pinyin:"tiāo/tiǎo",level:"五级"},
  {hanzi:"吐",pinyin:"tǔ/tù",level:"五级"},
  {hanzi:"挨",pinyin:"āi/ái",level:"六级"},
  {hanzi:"暴",pinyin:"bào/pù",level:"六级"},
  {hanzi:"奔",pinyin:"bēn/bèn",level:"六级"},
  {hanzi:"扁",pinyin:"biǎn/piān",level:"六级"},
  {hanzi:"卜",pinyin:"bǔ/bo",level:"六级"},
  {hanzi:"臭",pinyin:"chòu/xiù",level:"六级"},
  {hanzi:"答",pinyin:"dā/dá",level:"六级"},
  {hanzi:"弹",pinyin:"dàn/tán",level:"六级"},
  {hanzi:"钉",pinyin:"dīng/dìng",level:"六级"},
  {hanzi:"缝",pinyin:"féng/fèng",level:"六级"},
  {hanzi:"横",pinyin:"héng/hèng",level:"六级"},
  {hanzi:"哄",pinyin:"hōng/hǒng/hòng",level:"六级"},
  {hanzi:"华",pinyin:"huá/huà",level:"六级"},
  {hanzi:"晃",pinyin:"huǎng/huàng",level:"六级"},
  {hanzi:"夹",pinyin:"jiā/jiá/ga",level:"六级"},
  {hanzi:"监",pinyin:"jiān/jiàn",level:"六级"},
  {hanzi:"角",pinyin:"jiǎo/jué",level:"六级"},
  {hanzi:"结",pinyin:"jiē/jié",level:"六级"},
  {hanzi:"解",pinyin:"jiě/jiè/xiè",level:"六级"},
  {hanzi:"禁",pinyin:"jīn/jìn",level:"六级"},
  {hanzi:"看",pinyin:"kān/kàn",level:"六级"},
  {hanzi:"空",pinyin:"kōng/kòng",level:"六级"},
  {hanzi:"累",pinyin:"léi/lěi/lèi",level:"六级"},
  {hanzi:"量",pinyin:"liáng/liàng",level:"六级"},
  {hanzi:"笼",pinyin:"lóng/lǒng",level:"六级"},
  {hanzi:"绿",pinyin:"lǜ/lù",level:"六级"},
  {hanzi:"论",pinyin:"lùn/lún",level:"六级"},
  {hanzi:"落",pinyin:"luò/lào/là",level:"六级"},
  {hanzi:"脉",pinyin:"mài/mò",level:"六级"},
  {hanzi:"泡",pinyin:"pào/pāo",level:"六级"},
  {hanzi:"炮",pinyin:"pào/páo/bāo",level:"六级"},
  {hanzi:"漂",pinyin:"piāo/piǎo/piào",level:"六级"},
  {hanzi:"奇",pinyin:"qí/jī",level:"六级"},
  {hanzi:"丧",pinyin:"sāng/sàng",level:"六级"},
  {hanzi:"扇",pinyin:"shān/shàn",level:"六级"},
  {hanzi:"石",pinyin:"shí/dàn",level:"六级"},
  {hanzi:"识",pinyin:"shí/zhì",level:"六级"},
  {hanzi:"似",pinyin:"sì/shì",level:"六级"},
  {hanzi:"踏",pinyin:"tā/tà",level:"六级"},
  {hanzi:"帖",pinyin:"tiē/tiě/tiè",level:"六级"},
  {hanzi:"校",pinyin:"xiào/jiào",level:"六级"},
  {hanzi:"咽",pinyin:"yān/yàn/yè",level:"六级"},
  {hanzi:"饮",pinyin:"yǐn/yìn",level:"六级"},
  {hanzi:"载",pinyin:"zǎi/zài",level:"六级"},
  {hanzi:"扎",pinyin:"zhā/zā/zhá",level:"六级"},
  {hanzi:"占",pinyin:"zhān/zhàn",level:"六级"},
  {hanzi:"涨",pinyin:"zhǎng/zhàng",level:"六级"},
  {hanzi:"钻",pinyin:"zuān/zuàn",level:"六级"},
  {hanzi:"扒",pinyin:"bā/pá",level:"七-九级"},
  {hanzi:"柏",pinyin:"bǎi/bó/bò",level:"七-九级"},
  {hanzi:"膀",pinyin:"bǎng/páng/pāng",level:"七-九级"},
  {hanzi:"堡",pinyin:"bǎo/pù/bǔ",level:"七-九级"},
  {hanzi:"背",pinyin:"bēi/bèi",level:"七-九级"},
  {hanzi:"辟",pinyin:"bì/pì",level:"七-九级"},
  {hanzi:"朴",pinyin:"pǔ/piáo/pò/pō",level:"七-九级"},
  {hanzi:"戚",pinyin:"qī/qì",level:"七-九级"},
  {hanzi:"纤",pinyin:"xiān/qiàn",level:"七-九级"},
  {hanzi:"翘",pinyin:"qiáo/qiào",level:"七-九级"},
  {hanzi:"亲",pinyin:"qīn/qìng",level:"七-九级"},
  {hanzi:"嚷",pinyin:"rǎng/rāng",level:"七-九级"},
  {hanzi:"任",pinyin:"rén/rèn",level:"七-九级"},
  {hanzi:"刹",pinyin:"chà/shā",level:"七-九级"},
  {hanzi:"禅",pinyin:"chán/shàn",level:"七-九级"},
  {hanzi:"匙",pinyin:"chí/shi",level:"七-九级"},
  {hanzi:"畜",pinyin:"chù/xù",level:"七-九级"},
  {hanzi:"揣",pinyin:"chuāi/chuǎi/chuài",level:"七-九级"},
  {hanzi:"创",pinyin:"chuàng/chuāng",level:"七-九级"},
  {hanzi:"撮",pinyin:"cuō/zuǒ",level:"七-九级"},
  {hanzi:"坊",pinyin:"fāng/fáng",level:"七-九级"},
  {hanzi:"分",pinyin:"fēn/fèn",level:"七-九级"},
  {hanzi:"否",pinyin:"fǒu/pǐ",level:"七-九级"},
  {hanzi:"服",pinyin:"fú/fù",level:"七-九级"},
  {hanzi:"杠",pinyin:"gàng/gāng",level:"七-九级"},
  {hanzi:"膏",pinyin:"gāo/gào",level:"七-九级"},
  {hanzi:"搁",pinyin:"gē/gé",level:"七-九级"},
  {hanzi:"给",pinyin:"gěi/jǐ",level:"七-九级"},
  {hanzi:"更",pinyin:"gēng/gèng",level:"七-九级"},
  {hanzi:"勾",pinyin:"gōu/gòu",level:"七-九级"},
  {hanzi:"估",pinyin:"gū/gù",level:"七-九级"},
  {hanzi:"骨",pinyin:"gǔ/gū",level:"七-九级"},
  {hanzi:"广",pinyin:"guǎng/ān",level:"七-九级"},
  {hanzi:"龟",pinyin:"guī/jūn/qiū",level:"七-九级"},
  {hanzi:"过",pinyin:"guò/guō",level:"七-九级"},
  {hanzi:"哈",pinyin:"hā/hǎ/hà",level:"七-九级"},
  {hanzi:"汗",pinyin:"hán/hàn",level:"七-九级"},
  {hanzi:"号",pinyin:"háo/hào",level:"七-九级"},
  {hanzi:"喝",pinyin:"hē/hè",level:"七-九级"},
  {hanzi:"荷",pinyin:"hé/hè",level:"七-九级"},
  {hanzi:"会",pinyin:"huì/kuài",level:"七-九级"},
  {hanzi:"混",pinyin:"hùn/hún",level:"七-九级"},
  {hanzi:"霍",pinyin:"huò/huō",level:"七-九级"},
  {hanzi:"缉",pinyin:"jī/qī",level:"七-九级"},
  {hanzi:"稽",pinyin:"jī/qǐ",level:"七-九级"},
  {hanzi:"济",pinyin:"jì/jǐ",level:"七-九级"},
  {hanzi:"贾",pinyin:"jiǎ/gǔ",level:"七-九级"},
  {hanzi:"间",pinyin:"jiān/jiàn",level:"七-九级"},
  {hanzi:"槛",pinyin:"kǎn/jiàn",level:"七-九级"},
  {hanzi:"酵",pinyin:"jiào/xiào",level:"七-九级"},
  {hanzi:"藉",pinyin:"jiè/jí",level:"七-九级"},
  {hanzi:"经",pinyin:"jīng/jìng",level:"七-九级"},
  {hanzi:"颈",pinyin:"jǐng/gěng",level:"七-九级"},
  {hanzi:"句",pinyin:"jù/gōu",level:"七-九级"},
  {hanzi:"据",pinyin:"jù/jū",level:"七-九级"},
  {hanzi:"倔",pinyin:"jué/juè",level:"七-九级"},
  {hanzi:"卡",pinyin:"qiǎ/kǎ",level:"七-九级"},
  {hanzi:"扛",pinyin:"káng/gāng",level:"七-九级"},
  {hanzi:"溃",pinyin:"kuì/huì",level:"七-九级"},
  {hanzi:"拉",pinyin:"lā/lá",level:"七-九级"},
  {hanzi:"腊",pinyin:"là/xī",level:"七-九级"},
  {hanzi:"烙",pinyin:"lào/luò",level:"七-九级"},
  {hanzi:"勒",pinyin:"lè/lēi",level:"七-九级"},
  {hanzi:"棱",pinyin:"léng/lēng/líng",level:"七-九级"},
  {hanzi:"撩",pinyin:"liāo/liáo",level:"七-九级"},
  {hanzi:"裂",pinyin:"liè/liě",level:"七-九级"},
  {hanzi:"淋",pinyin:"lín/lìn",level:"七-九级"},
  {hanzi:"溜",pinyin:"liū/liù",level:"七-九级"},
  {hanzi:"搂",pinyin:"lǒu/lōu",level:"七-九级"},
  {hanzi:"陆",pinyin:"lù/liù",level:"七-九级"},
  {hanzi:"抹",pinyin:"mǒ/mò/mā",level:"七-九级"},
  {hanzi:"埋",pinyin:"mái/mán",level:"七-九级"},
  {hanzi:"蔓",pinyin:"màn/wàn/mán",level:"七-九级"},
  {hanzi:"闷",pinyin:"mēn/mèn",level:"七-九级"},
  {hanzi:"沐",pinyin:"mù/mò",level:"七-九级"},
  {hanzi:"泥",pinyin:"ní/nì",level:"七-九级"},
  {hanzi:"弄",pinyin:"nòng/lòng",level:"七-九级"},
  {hanzi:"拍",pinyin:"pāi/pò",level:"七-九级"},
  {hanzi:"胖",pinyin:"pàng/pán",level:"七-九级"},
  {hanzi:"刨",pinyin:"páo/bào",level:"七-九级"},
  {hanzi:"片",pinyin:"piàn/piān",level:"七-九级"},
  {hanzi:"撇",pinyin:"piē/piě",level:"七-九级"},
  {hanzi:"迫",pinyin:"pò/pǎi",level:"七-九级"},
  {hanzi:"栖",pinyin:"qī/xī",level:"七-九级"},
  {hanzi:"券",pinyin:"quàn/xuàn",level:"七-九级"},
  {hanzi:"色",pinyin:"sè/shǎi",level:"七-九级"},
  {hanzi:"厦",pinyin:"shà/xià",level:"七-九级"},
  {hanzi:"遂",pinyin:"suì/suí",level:"七-九级"},
  {hanzi:"塔",pinyin:"tǎ/dá",level:"七-九级"},
  {hanzi:"同",pinyin:"tóng/tòng",level:"七-九级"},
  {hanzi:"拓",pinyin:"tuò/tà",level:"七-九级"},
  {hanzi:"瓦",pinyin:"wǎ/wà",level:"七-九级"},
  {hanzi:"委",pinyin:"wěi/wēi",level:"七-九级"},
  {hanzi:"为",pinyin:"wéi/wèi",level:"七-九级"},
  {hanzi:"吓",pinyin:"xià/hè",level:"七-九级"},
  {hanzi:"肖",pinyin:"xiāo/xiào",level:"七-九级"},
  {hanzi:"邪",pinyin:"xié/yá",level:"七-九级"},
  {hanzi:"压",pinyin:"yā/yà",level:"七-九级"},
  {hanzi:"燕",pinyin:"yān/yàn",level:"七-九级"},
  {hanzi:"耶",pinyin:"yē/yé",level:"七-九级"},
  {hanzi:"叶",pinyin:"yè/xié",level:"七-九级"},
  {hanzi:"遗",pinyin:"yí/wèi",level:"七-九级"},
  {hanzi:"已",pinyin:"yǐ/yī",level:"七-九级"},
  {hanzi:"佣",pinyin:"yōng/yòng",level:"七-九级"},
  {hanzi:"有",pinyin:"yǒu/yòu",level:"七-九级"},
  {hanzi:"予",pinyin:"yú/yǔ",level:"七-九级"},
  {hanzi:"语",pinyin:"yǔ/yù",level:"七-九级"},
  {hanzi:"晕",pinyin:"yūn/yùn",level:"七-九级"},
  {hanzi:"脏",pinyin:"zāng/zàng",level:"七-九级"},
  {hanzi:"凿",pinyin:"záo/zuò",level:"七-九级"},
  {hanzi:"择",pinyin:"zé/zhái",level:"七-九级"},
  {hanzi:"正",pinyin:"zhēng/zhèng",level:"七-九级"},
  {hanzi:"汁",pinyin:"zhī/zhí",level:"七-九级"},
  {hanzi:"轴",pinyin:"zhóu/zhòu",level:"七-九级"},
  {hanzi:"爪",pinyin:"zhǎo/zhuǎ",level:"七-九级"},
  {hanzi:"转",pinyin:"zhuǎn/zhuàn",level:"七-九级"},
  {hanzi:"拽",pinyin:"zhuài/zhuāi/yè",level:"七-九级"},
  {hanzi:"作",pinyin:"zuò/zuō",level:"七-九级"},
];

// ── Enriched meanings & examples (optional per-character) ────
// Keys are hanzi. Each reading key is the exact pinyin string.
// Characters without an entry here still work in the app —
// they just show pinyin only with no meaning/example text.
const ENRICHED = {
  // ── 一级 ──────────────────────────────────────────────────────
  "得": { readings: {
    "dé":  { meaning_zh:"得到，获得",   meaning_en:"to get, to obtain",       example_zh:"得奖",    example_en:"to win an award",    frequency:"high"   },
    "de":  { meaning_zh:"结构助词",     meaning_en:"structural particle",     example_zh:"跑得快",  example_en:"runs fast",          frequency:"high"   },
    "děi": { meaning_zh:"必须，需要",   meaning_en:"must, need to",           example_zh:"得去",    example_en:"must go",            frequency:"medium" },
  }},
  "地": { readings: {
    "dì":  { meaning_zh:"土地，地点",   meaning_en:"earth, place",            example_zh:"地球",    example_en:"the Earth",          frequency:"high"   },
    "de":  { meaning_zh:"结构助词",     meaning_en:"structural particle",     example_zh:"慢慢地",  example_en:"slowly",             frequency:"high"   },
  }},
  "着": { readings: {
    "zhe": { meaning_zh:"动作持续助词", meaning_en:"ongoing action particle", example_zh:"穿着",    example_en:"wearing",            frequency:"high"   },
    "zháo":{ meaning_zh:"接触到，达到", meaning_en:"to touch, to reach",      example_zh:"着凉",    example_en:"to catch a cold",    frequency:"high"   },
    "zhuó":{ meaning_zh:"穿戴，附着",   meaning_en:"to wear, to attach",      example_zh:"着装",    example_en:"attire",             frequency:"medium" },
  }},
  "了": { readings: {
    "le":   { meaning_zh:"完成助词",    meaning_en:"completion particle",     example_zh:"吃了饭",  example_en:"finished eating",    frequency:"high"   },
    "liǎo": { meaning_zh:"完毕，结束",  meaning_en:"to finish, to complete",  example_zh:"了解",    example_en:"to understand",      frequency:"high"   },
  }},
  "好": { readings: {
    "hǎo": { meaning_zh:"好的，良好",   meaning_en:"good, well",              example_zh:"好人",    example_en:"good person",        frequency:"high"   },
    "hào": { meaning_zh:"喜好，爱好",   meaning_en:"to be fond of",           example_zh:"好学",    example_en:"eager to learn",     frequency:"medium" },
  }},
  "和": { readings: {
    "hé":  { meaning_zh:"和平，与",     meaning_en:"and, peace",              example_zh:"和平",    example_en:"peace",              frequency:"high"   },
    "hè":  { meaning_zh:"应和，唱和",   meaning_en:"to echo, to respond",     example_zh:"附和",    example_en:"to echo sb.",        frequency:"low"    },
    "huó": { meaning_zh:"和面，搅拌",   meaning_en:"to knead (dough)",        example_zh:"和面",    example_en:"to knead dough",     frequency:"medium" },
    "huò": { meaning_zh:"掺和，混合",   meaning_en:"to mix together",         example_zh:"和药",    example_en:"to mix medicine",    frequency:"low"    },
    "hú":  { meaning_zh:"麻将和牌",     meaning_en:"to win (mahjong)",        example_zh:"和牌",    example_en:"to win at mahjong",  frequency:"low"    },
  }},
  "干": { readings: {
    "gān": { meaning_zh:"干燥，干净",   meaning_en:"dry, clean",              example_zh:"干净",    example_en:"clean",              frequency:"high"   },
    "gàn": { meaning_zh:"做，干活",     meaning_en:"to do, to work",          example_zh:"干活",    example_en:"to do work",         frequency:"high"   },
  }},
  "还": { readings: {
    "hái": { meaning_zh:"还是，仍然",   meaning_en:"still, also",             example_zh:"还有",    example_en:"there is also",      frequency:"high"   },
    "huán":{ meaning_zh:"归还，返还",   meaning_en:"to return, to give back", example_zh:"还书",    example_en:"to return a book",   frequency:"high"   },
  }},
  "几": { readings: {
    "jī":  { meaning_zh:"茶几，几案",   meaning_en:"small table",             example_zh:"茶几",    example_en:"tea table",          frequency:"medium" },
    "jǐ":  { meaning_zh:"几个，多少",   meaning_en:"how many, a few",         example_zh:"几个",    example_en:"a few",              frequency:"high"   },
  }},
  "教": { readings: {
    "jiāo":{ meaning_zh:"教导，教授",   meaning_en:"to teach",                example_zh:"教书",    example_en:"to teach",           frequency:"high"   },
    "jiào":{ meaning_zh:"教育，宗教",   meaning_en:"education, religion",     example_zh:"教育",    example_en:"education",          frequency:"high"   },
  }},
  "觉": { readings: {
    "jué": { meaning_zh:"感觉，觉得",   meaning_en:"to feel, to sense",       example_zh:"觉得",    example_en:"to feel",            frequency:"high"   },
    "jiào":{ meaning_zh:"睡觉，午觉",   meaning_en:"sleep, nap",              example_zh:"睡觉",    example_en:"to sleep",           frequency:"high"   },
  }},
  "少": { readings: {
    "shǎo":{ meaning_zh:"少量，稀少",   meaning_en:"few, little",             example_zh:"很少",    example_en:"rarely",             frequency:"high"   },
    "shào":{ meaning_zh:"年少，少年",   meaning_en:"young, youth",            example_zh:"少年",    example_en:"youth",              frequency:"medium" },
  }},
  "行": { readings: {
    "xíng":{ meaning_zh:"行走，行动",   meaning_en:"to walk, to act",         example_zh:"行走",    example_en:"to walk",            frequency:"high"   },
    "háng":{ meaning_zh:"行业，排列",   meaning_en:"profession, row",         example_zh:"银行",    example_en:"bank",               frequency:"high"   },
  }},
  "兴": { readings: {
    "xīng":{ meaning_zh:"兴起，复兴",   meaning_en:"to rise, to revive",      example_zh:"兴起",    example_en:"to rise",            frequency:"high"   },
    "xìng":{ meaning_zh:"兴趣，兴奋",   meaning_en:"interest, excitement",    example_zh:"兴趣",    example_en:"interest",           frequency:"high"   },
  }},
  "中": { readings: {
    "zhōng":{ meaning_zh:"中间，中心",  meaning_en:"middle, center",          example_zh:"中国",    example_en:"China",              frequency:"high"   },
    "zhòng":{ meaning_zh:"命中，击中",  meaning_en:"to hit, to be hit",       example_zh:"中奖",    example_en:"to win a prize",     frequency:"medium" },
  }},
  "重": { readings: {
    "zhòng":{ meaning_zh:"重量，沉重",  meaning_en:"heavy, weight",           example_zh:"体重",    example_en:"body weight",        frequency:"high"   },
    "chóng":{ meaning_zh:"重复，重新",  meaning_en:"again, to repeat",        example_zh:"重来",    example_en:"to redo",            frequency:"high"   },
  }},
  "都": { readings: {
    "dōu": { meaning_zh:"全部，都是",   meaning_en:"all, both",               example_zh:"都是",    example_en:"all are",            frequency:"high"   },
    "dū":  { meaning_zh:"首都，都市",   meaning_en:"capital city",            example_zh:"首都",    example_en:"capital city",       frequency:"high"   },
  }},
  "要": { readings: {
    "yào": { meaning_zh:"需要，想要",   meaning_en:"to want, to need",        example_zh:"要求",    example_en:"requirement",        frequency:"high"   },
    "yāo": { meaning_zh:"要求，要挟",   meaning_en:"to demand, to coerce",    example_zh:"要挟",    example_en:"to coerce",          frequency:"low"    },
  }},
  "没": { readings: {
    "méi": { meaning_zh:"没有，未",     meaning_en:"don't have, not yet",     example_zh:"没有",    example_en:"don't have",         frequency:"high"   },
    "mò":  { meaning_zh:"沉没，淹没",   meaning_en:"to sink, to submerge",    example_zh:"淹没",    example_en:"to submerge",        frequency:"medium" },
  }},
  "难": { readings: {
    "nán": { meaning_zh:"困难，难题",   meaning_en:"difficult, hard",         example_zh:"困难",    example_en:"difficulty",         frequency:"high"   },
    "nàn": { meaning_zh:"灾难，难民",   meaning_en:"disaster, refugee",       example_zh:"灾难",    example_en:"disaster",           frequency:"medium" },
  }},
  "什": { readings: {
    "shí": { meaning_zh:"什么（古）",   meaning_en:"what (archaic)",          example_zh:"什物",    example_en:"sundry items",       frequency:"low"    },
    "shén":{ meaning_zh:"什么",         meaning_en:"what",                    example_zh:"什么",    example_en:"what",               frequency:"high"   },
  }},
  "说": { readings: {
    "shuō":{ meaning_zh:"说话，告诉",   meaning_en:"to speak, to say",        example_zh:"说话",    example_en:"to talk",            frequency:"high"   },
    "shuì":{ meaning_zh:"游说，劝说",   meaning_en:"to persuade",             example_zh:"游说",    example_en:"to lobby",           frequency:"low"    },
    "yuè": { meaning_zh:"喜悦（古）",   meaning_en:"joy (classical)",         example_zh:"不亦说乎",example_en:"isn't that joyful?", frequency:"low"    },
  }},
  "长": { readings: {
    "cháng":{ meaning_zh:"长度，长短",  meaning_en:"long, length",            example_zh:"长城",    example_en:"Great Wall",         frequency:"high"   },
    "zhǎng":{ meaning_zh:"成长，增长",  meaning_en:"to grow, to increase",    example_zh:"成长",    example_en:"to grow up",         frequency:"high"   },
  }},
  "场": { readings: {
    "chǎng":{ meaning_zh:"场地，广场",  meaning_en:"field, place",            example_zh:"广场",    example_en:"plaza",              frequency:"high"   },
    "cháng":{ meaning_zh:"场院（农）",  meaning_en:"threshing ground",        example_zh:"打场",    example_en:"to thresh grain",    frequency:"low"    },
  }},
  "差": { readings: {
    "chā": { meaning_zh:"差别，差异",   meaning_en:"difference, gap",         example_zh:"差别",    example_en:"difference",         frequency:"high"   },
    "chà": { meaning_zh:"差劲，欠佳",   meaning_en:"poor, inferior",          example_zh:"差劲",    example_en:"poor quality",       frequency:"medium" },
    "chāi":{ meaning_zh:"出差，差事",   meaning_en:"business trip, errand",   example_zh:"出差",    example_en:"business trip",      frequency:"medium" },
    "cī":  { meaning_zh:"参差不齐",     meaning_en:"uneven, irregular",       example_zh:"参差",    example_en:"uneven",             frequency:"low"    },
  }},
  // ── 二级 ──────────────────────────────────────────────────────
  "发": { readings: {
    "fā":  { meaning_zh:"发出，发生",   meaning_en:"to send out, to happen",  example_zh:"发现",    example_en:"to discover",        frequency:"high"   },
    "fà":  { meaning_zh:"头发",         meaning_en:"hair",                    example_zh:"头发",    example_en:"hair",               frequency:"high"   },
  }},
  "当": { readings: {
    "dāng":{ meaning_zh:"当作，担当",   meaning_en:"to serve as, to take on", example_zh:"当然",    example_en:"of course",          frequency:"high"   },
    "dàng":{ meaning_zh:"合适，恰当",   meaning_en:"proper, suitable",        example_zh:"当天",    example_en:"that very day",      frequency:"medium" },
  }},
  "倒": { readings: {
    "dǎo": { meaning_zh:"倒下，摔倒",   meaning_en:"to fall, to topple",      example_zh:"倒下",    example_en:"to fall down",       frequency:"high"   },
    "dào": { meaning_zh:"倒水，颠倒",   meaning_en:"to pour, upside-down",    example_zh:"倒水",    example_en:"to pour water",      frequency:"high"   },
  }},
  "相": { readings: {
    "xiāng":{ meaning_zh:"互相，相同",  meaning_en:"mutually, each other",    example_zh:"相同",    example_en:"the same",           frequency:"high"   },
    "xiàng":{ meaning_zh:"相貌，宰相",  meaning_en:"appearance, chancellor",  example_zh:"相貌",    example_en:"appearance",         frequency:"high"   },
  }},
  "应": { readings: {
    "yīng":{ meaning_zh:"应该，应当",   meaning_en:"should, ought to",        example_zh:"应该",    example_en:"should",             frequency:"high"   },
    "yìng":{ meaning_zh:"回应，响应",   meaning_en:"to respond, to answer",   example_zh:"回应",    example_en:"to respond",         frequency:"medium" },
  }},
  "称": { readings: {
    "chēng":{ meaning_zh:"称呼，称赞",  meaning_en:"to call, to praise",      example_zh:"称赞",    example_en:"to praise",          frequency:"high"   },
    "chèn": { meaning_zh:"相称，匀称",  meaning_en:"to match, proportionate", example_zh:"匀称",    example_en:"well-proportioned",  frequency:"medium" },
    "chèng":{ meaning_zh:"秤，称量",    meaning_en:"scale, to weigh",         example_zh:"称重",    example_en:"to weigh",           frequency:"medium" },
  }},
  "处": { readings: {
    "chǔ": { meaning_zh:"处理，相处",   meaning_en:"to handle, to get along", example_zh:"处理",    example_en:"to handle",          frequency:"high"   },
    "chù": { meaning_zh:"地处，处所",   meaning_en:"place, location",         example_zh:"到处",    example_en:"everywhere",         frequency:"high"   },
  }},
  "乐": { readings: {
    "lè":  { meaning_zh:"快乐，欢乐",   meaning_en:"happy, joyful",           example_zh:"快乐",    example_en:"happiness",          frequency:"high"   },
    "yuè": { meaning_zh:"音乐",         meaning_en:"music",                   example_zh:"音乐",    example_en:"music",              frequency:"high"   },
  }},
  "数": { readings: {
    "shù": { meaning_zh:"数字，数量",   meaning_en:"number, quantity",        example_zh:"数学",    example_en:"mathematics",        frequency:"high"   },
    "shǔ": { meaning_zh:"计数，数数",   meaning_en:"to count",                example_zh:"数钱",    example_en:"to count money",     frequency:"medium" },
    "shuò":{ meaning_zh:"多次，屡次",   meaning_en:"frequently, repeatedly",  example_zh:"数见不鲜",example_en:"not uncommon",       frequency:"low"    },
  }},
  "熟": { readings: {
    "shú": { meaning_zh:"成熟，熟悉",   meaning_en:"ripe, familiar",          example_zh:"熟悉",    example_en:"familiar with",      frequency:"high"   },
    "shóu":{ meaning_zh:"煮熟了",       meaning_en:"cooked through (spoken)", example_zh:"饭熟了",  example_en:"rice is cooked",     frequency:"medium" },
  }},
  "便": { readings: {
    "biàn":{ meaning_zh:"方便，便利",   meaning_en:"convenient",              example_zh:"方便",    example_en:"convenient",         frequency:"high"   },
    "pián":{ meaning_zh:"便宜",         meaning_en:"cheap, inexpensive",      example_zh:"便宜",    example_en:"cheap",              frequency:"high"   },
  }},
  "卷": { readings: {
    "juǎn":{ meaning_zh:"卷起，卷曲",   meaning_en:"to roll up, to curl",     example_zh:"卷起",    example_en:"to roll up",         frequency:"high"   },
    "juàn":{ meaning_zh:"试卷，卷子",   meaning_en:"exam paper, scroll",      example_zh:"试卷",    example_en:"exam paper",         frequency:"high"   },
  }},
  "藏": { readings: {
    "cáng":{ meaning_zh:"藏匿，储藏",   meaning_en:"to hide, to store",       example_zh:"藏宝",    example_en:"hidden treasure",    frequency:"medium" },
    "zàng":{ meaning_zh:"西藏，宝藏",   meaning_en:"Tibet, treasure",         example_zh:"西藏",    example_en:"Tibet",              frequency:"medium" },
  }},
  "舍": { readings: {
    "shě": { meaning_zh:"舍弃，放弃",   meaning_en:"to give up, to abandon",  example_zh:"舍弃",    example_en:"to give up",         frequency:"high"   },
    "shè": { meaning_zh:"宿舍，舍堂",   meaning_en:"dormitory, residence",    example_zh:"宿舍",    example_en:"dormitory",          frequency:"high"   },
  }},
  // ── 三级 ──────────────────────────────────────────────────────
  "调": { readings: {
    "tiáo":{ meaning_zh:"调节，调整",   meaning_en:"to adjust, to regulate",  example_zh:"调整",    example_en:"to adjust",          frequency:"high"   },
    "diào":{ meaning_zh:"音调，曲调",   meaning_en:"tone, melody",            example_zh:"音调",    example_en:"tone",               frequency:"high"   },
  }},
  "曾": { readings: {
    "céng":{ meaning_zh:"曾经，曾经",   meaning_en:"once, previously",        example_zh:"曾经",    example_en:"once upon a time",   frequency:"high"   },
    "zēng":{ meaning_zh:"曾祖，曾孙",   meaning_en:"great-grandparent/child", example_zh:"曾祖父",  example_en:"great-grandfather",  frequency:"medium" },
  }},
  "朝": { readings: {
    "cháo":{ meaning_zh:"朝代，朝廷",   meaning_en:"dynasty, imperial court", example_zh:"明朝",    example_en:"Ming Dynasty",       frequency:"medium" },
    "zhāo":{ meaning_zh:"早晨，朝阳",   meaning_en:"morning, morning sun",    example_zh:"朝阳",    example_en:"morning sun",        frequency:"low"    },
  }},
  "强": { readings: {
    "qiáng":{ meaning_zh:"强大，坚强",  meaning_en:"strong, powerful",        example_zh:"强大",    example_en:"powerful",           frequency:"high"   },
    "qiǎng":{ meaning_zh:"强迫，勉强",  meaning_en:"to force, reluctantly",   example_zh:"强迫",    example_en:"to force",           frequency:"medium" },
    "jiàng":{ meaning_zh:"倔强，强硬",  meaning_en:"stubborn, unyielding",    example_zh:"倔强",    example_en:"stubborn",           frequency:"medium" },
  }},
  "切": { readings: {
    "qiē": { meaning_zh:"切割，切断",   meaning_en:"to cut, to slice",        example_zh:"切菜",    example_en:"to chop vegetables", frequency:"high"   },
    "qiè": { meaning_zh:"恳切，切实",   meaning_en:"sincere, practical",      example_zh:"切实",    example_en:"practical",          frequency:"medium" },
  }},
  "散": { readings: {
    "sàn": { meaning_zh:"散开，分散",   meaning_en:"to scatter, to disperse", example_zh:"散步",    example_en:"to take a walk",     frequency:"high"   },
    "sǎn": { meaning_zh:"散漫，散文",   meaning_en:"loose, prose",            example_zh:"散文",    example_en:"prose",              frequency:"medium" },
  }},
  "血": { readings: {
    "xuè": { meaning_zh:"血液，鲜血",   meaning_en:"blood",                   example_zh:"血液",    example_en:"blood",              frequency:"high"   },
    "xiě": { meaning_zh:"流血（口语）", meaning_en:"blood (colloquial)",      example_zh:"流血",    example_en:"to bleed",           frequency:"medium" },
  }},
  "传": { readings: {
    "chuán":{ meaning_zh:"传递，传播",  meaning_en:"to pass, to spread",      example_zh:"传说",    example_en:"legend",             frequency:"high"   },
    "zhuàn":{ meaning_zh:"传记，自传",  meaning_en:"biography",               example_zh:"自传",    example_en:"autobiography",      frequency:"medium" },
  }},
  "度": { readings: {
    "dù":  { meaning_zh:"程度，度过",   meaning_en:"degree, to spend time",   example_zh:"温度",    example_en:"temperature",        frequency:"high"   },
    "duó": { meaning_zh:"揣度，忖度",   meaning_en:"to estimate, to conjecture",example_zh:"揣度",  example_en:"to speculate",       frequency:"low"    },
  }},
  "恶": { readings: {
    "è":   { meaning_zh:"邪恶，罪恶",   meaning_en:"evil, wicked",            example_zh:"恶意",    example_en:"malice",             frequency:"high"   },
    "wù":  { meaning_zh:"厌恶，憎恶",   meaning_en:"to detest, to hate",      example_zh:"厌恶",    example_en:"to detest",          frequency:"high"   },
    "ě":   { meaning_zh:"恶心，作呕",   meaning_en:"nausea, disgusting",      example_zh:"恶心",    example_en:"nauseous",           frequency:"medium" },
  }},
  // ── 四级 ──────────────────────────────────────────────────────
  "薄": { readings: {
    "báo": { meaning_zh:"薄片，薄弱",   meaning_en:"thin (colloquial)",       example_zh:"薄饼",    example_en:"thin pancake",       frequency:"high"   },
    "bó":  { meaning_zh:"淡薄，轻薄",   meaning_en:"meager, frivolous",       example_zh:"单薄",    example_en:"thin & weak",        frequency:"medium" },
    "bò":  { meaning_zh:"薄荷",         meaning_en:"mint (in 薄荷)",          example_zh:"薄荷",    example_en:"mint",               frequency:"medium" },
  }},
  "折": { readings: {
    "zhē": { meaning_zh:"折腾，翻转",   meaning_en:"to toss about",           example_zh:"折腾",    example_en:"to toss about",      frequency:"medium" },
    "zhé": { meaning_zh:"折断，折扣",   meaning_en:"to break, discount",      example_zh:"折扣",    example_en:"discount",           frequency:"high"   },
    "shé": { meaning_zh:"折本，断折",   meaning_en:"to snap, to lose money",  example_zh:"折本",    example_en:"to lose money",      frequency:"medium" },
  }},
  "冲": { readings: {
    "chōng":{ meaning_zh:"冲洗，冲击",  meaning_en:"to rinse, to rush",       example_zh:"冲洗",    example_en:"to rinse",           frequency:"high"   },
    "chòng":{ meaning_zh:"冲劲，直冲",  meaning_en:"forceful, aimed at",      example_zh:"冲劲",    example_en:"drive, enthusiasm",  frequency:"medium" },
  }},
  "单": { readings: {
    "dān": { meaning_zh:"单独，简单",   meaning_en:"single, simple",          example_zh:"单独",    example_en:"alone",              frequency:"high"   },
    "shàn":{ meaning_zh:"单于（匈奴）", meaning_en:"Chanyu (Xiongnu chief)",  example_zh:"单于",    example_en:"Chanyu",             frequency:"low"    },
    "chán":{ meaning_zh:"禅（佛教）",   meaning_en:"Chan/Zen Buddhism",       example_zh:"禅宗",    example_en:"Zen Buddhism",       frequency:"low"    },
  }},
  "担": { readings: {
    "dān": { meaning_zh:"担心，承担",   meaning_en:"to worry, to bear",       example_zh:"担心",    example_en:"to worry",           frequency:"high"   },
    "dàn": { meaning_zh:"担子，扁担",   meaning_en:"carrying pole, burden",   example_zh:"扁担",    example_en:"carrying pole",      frequency:"medium" },
  }},
  "降": { readings: {
    "jiàng":{ meaning_zh:"下降，降低",  meaning_en:"to descend, to lower",    example_zh:"降温",    example_en:"temperature drop",   frequency:"high"   },
    "xiáng":{ meaning_zh:"投降，降服",  meaning_en:"to surrender",            example_zh:"投降",    example_en:"to surrender",       frequency:"medium" },
  }},
  "系": { readings: {
    "xì":  { meaning_zh:"系统，联系",   meaning_en:"system, to connect",      example_zh:"系统",    example_en:"system",             frequency:"high"   },
    "jì":  { meaning_zh:"系鞋带，绑",   meaning_en:"to tie, to fasten",       example_zh:"系鞋带",  example_en:"to tie shoelaces",   frequency:"medium" },
  }},
  "磨": { readings: {
    "mó":  { meaning_zh:"磨损，研磨",   meaning_en:"to grind, to wear down",  example_zh:"磨损",    example_en:"wear and tear",      frequency:"high"   },
    "mò":  { meaning_zh:"磨坊，石磨",   meaning_en:"mill, millstone",         example_zh:"磨坊",    example_en:"mill",               frequency:"medium" },
  }},
  "宁": { readings: {
    "níng":{ meaning_zh:"宁静，安宁",   meaning_en:"peaceful, tranquil",      example_zh:"宁静",    example_en:"peaceful",           frequency:"high"   },
    "nìng":{ meaning_zh:"宁愿，宁可",   meaning_en:"would rather, prefer",    example_zh:"宁愿",    example_en:"would rather",       frequency:"high"   },
  }},
  "铺": { readings: {
    "pū":  { meaning_zh:"铺开，铺设",   meaning_en:"to spread, to lay",       example_zh:"铺路",    example_en:"to pave a road",     frequency:"high"   },
    "pù":  { meaning_zh:"店铺，床铺",   meaning_en:"shop, bunk",              example_zh:"店铺",    example_en:"shop",               frequency:"high"   },
  }},
  "曲": { readings: {
    "qū":  { meaning_zh:"弯曲，曲折",   meaning_en:"curved, winding",         example_zh:"弯曲",    example_en:"curved",             frequency:"high"   },
    "qǔ":  { meaning_zh:"歌曲，曲子",   meaning_en:"song, tune",              example_zh:"歌曲",    example_en:"song",               frequency:"high"   },
  }},
  "塞": { readings: {
    "sāi": { meaning_zh:"塞满，堵塞",   meaning_en:"to stuff, to block",      example_zh:"塞车",    example_en:"traffic jam",        frequency:"high"   },
    "sài": { meaning_zh:"边塞，关塞",   meaning_en:"frontier, border pass",   example_zh:"边塞",    example_en:"frontier",           frequency:"medium" },
    "sè":  { meaning_zh:"闭塞，阻塞",   meaning_en:"blocked, obstructed",     example_zh:"阻塞",    example_en:"obstruction",        frequency:"medium" },
  }},
  "省": { readings: {
    "shěng":{ meaning_zh:"省钱，节省",  meaning_en:"to save, province",       example_zh:"省钱",    example_en:"to save money",      frequency:"high"   },
    "xǐng": { meaning_zh:"反省，省悟",  meaning_en:"to reflect, to realize",  example_zh:"反省",    example_en:"to self-reflect",    frequency:"medium" },
  }},
  // ── 五级 ──────────────────────────────────────────────────────
  "泊": { readings: {
    "bó":  { meaning_zh:"停泊，漂泊",   meaning_en:"to moor, to drift",       example_zh:"停泊",    example_en:"to moor",            frequency:"medium" },
    "pō":  { meaning_zh:"湖泊，水泊",   meaning_en:"lake, pool",              example_zh:"湖泊",    example_en:"lake",               frequency:"medium" },
  }},
  "参": { readings: {
    "cān": { meaning_zh:"参加，参与",   meaning_en:"to participate",          example_zh:"参加",    example_en:"to join",            frequency:"high"   },
    "shēn":{ meaning_zh:"人参",         meaning_en:"ginseng",                 example_zh:"人参",    example_en:"ginseng",            frequency:"low"    },
    "cēn": { meaning_zh:"参差不齐",     meaning_en:"uneven, irregular",       example_zh:"参差",    example_en:"uneven",             frequency:"low"    },
  }},
  "盛": { readings: {
    "shèng":{ meaning_zh:"盛大，兴盛",  meaning_en:"grand, flourishing",      example_zh:"盛大",    example_en:"grand",              frequency:"high"   },
    "chéng":{ meaning_zh:"盛饭，盛水",  meaning_en:"to hold, to fill a bowl", example_zh:"盛饭",    example_en:"to serve rice",      frequency:"high"   },
  }},
  "乘": { readings: {
    "chéng":{ meaning_zh:"乘车，乘坐",  meaning_en:"to ride, to take",        example_zh:"乘车",    example_en:"to take a bus",      frequency:"high"   },
    "shèng":{ meaning_zh:"史乘，千乘",  meaning_en:"historical record (classical)",example_zh:"史乘",example_en:"historical record", frequency:"low"    },
  }},
  "斗": { readings: {
    "dǒu": { meaning_zh:"北斗，斗形",   meaning_en:"dipper, cup-shaped",      example_zh:"北斗星",  example_en:"Big Dipper",         frequency:"medium" },
    "dòu": { meaning_zh:"战斗，斗争",   meaning_en:"to fight, to struggle",   example_zh:"战斗",    example_en:"battle",             frequency:"high"   },
  }},
  "杆": { readings: {
    "gān": { meaning_zh:"旗杆，杆子",   meaning_en:"pole, rod",               example_zh:"旗杆",    example_en:"flagpole",           frequency:"medium" },
    "gǎn": { meaning_zh:"笔杆，枪杆",   meaning_en:"pen/gun barrel, handle",  example_zh:"笔杆",    example_en:"pen barrel",         frequency:"medium" },
  }},
  "冠": { readings: {
    "guān":{ meaning_zh:"皇冠，冠军",   meaning_en:"crown, champion",         example_zh:"冠军",    example_en:"champion",           frequency:"high"   },
    "guàn":{ meaning_zh:"冠以，戴冠",   meaning_en:"to top with, to cap",     example_zh:"冠名",    example_en:"to name/sponsor",    frequency:"medium" },
  }},
  "划": { readings: {
    "huá": { meaning_zh:"划船，划分",   meaning_en:"to row, to stroke",       example_zh:"划船",    example_en:"to row a boat",      frequency:"high"   },
    "huà": { meaning_zh:"计划，规划",   meaning_en:"to plan",                 example_zh:"计划",    example_en:"plan",               frequency:"high"   },
  }},
  "假": { readings: {
    "jiǎ": { meaning_zh:"虚假，假冒",   meaning_en:"fake, false",             example_zh:"假装",    example_en:"to pretend",         frequency:"high"   },
    "jià": { meaning_zh:"假期，休假",   meaning_en:"holiday, vacation",       example_zh:"放假",    example_en:"to have a holiday",  frequency:"high"   },
  }},
  "壳": { readings: {
    "ké":  { meaning_zh:"蛋壳，贝壳",   meaning_en:"shell, husk (colloq.)",   example_zh:"蛋壳",    example_en:"eggshell",           frequency:"high"   },
    "qiào":{ meaning_zh:"地壳，外壳",   meaning_en:"crust, outer shell",      example_zh:"地壳",    example_en:"Earth's crust",      frequency:"medium" },
  }},
  "露": { readings: {
    "lù":  { meaning_zh:"露出，暴露",   meaning_en:"to reveal, to expose",    example_zh:"露出",    example_en:"to reveal",          frequency:"high"   },
    "lòu": { meaning_zh:"露馅，漏出",   meaning_en:"to leak, to show (colloq.)",example_zh:"露馅", example_en:"to let the cat out", frequency:"medium" },
  }},
  "模": { readings: {
    "mó":  { meaning_zh:"模型，模仿",   meaning_en:"model, to imitate",       example_zh:"模型",    example_en:"model",              frequency:"high"   },
    "mú":  { meaning_zh:"模样，模具",   meaning_en:"appearance, mold",        example_zh:"模具",    example_en:"mold",               frequency:"medium" },
  }},
  "喷": { readings: {
    "pēn": { meaning_zh:"喷水，喷射",   meaning_en:"to spray, to spurt",      example_zh:"喷水",    example_en:"to spray water",     frequency:"high"   },
    "pèn": { meaning_zh:"喷香，喷鼻",   meaning_en:"fragrant (colloq.)",      example_zh:"喷香",    example_en:"delicious smell",    frequency:"medium" },
  }},
  "屏": { readings: {
    "píng":{ meaning_zh:"屏幕，屏风",   meaning_en:"screen, partition",       example_zh:"屏幕",    example_en:"screen",             frequency:"high"   },
    "bǐng":{ meaning_zh:"屏气，屏息",   meaning_en:"to hold one's breath",    example_zh:"屏息",    example_en:"to hold breath",     frequency:"medium" },
  }},
  "悄": { readings: {
    "qiāo":{ meaning_zh:"悄悄，轻声",   meaning_en:"quietly, stealthily",     example_zh:"悄悄话",  example_en:"whisper",            frequency:"high"   },
    "qiǎo":{ meaning_zh:"悄然，忧愁",   meaning_en:"sorrowful, silent",       example_zh:"悄然",    example_en:"quietly, silently",  frequency:"medium" },
  }},
  "宿": { readings: {
    "sù":  { meaning_zh:"住宿，宿舍",   meaning_en:"to stay overnight, dorm", example_zh:"宿舍",    example_en:"dormitory",          frequency:"high"   },
    "xiǔ": { meaning_zh:"一宿，整夜",   meaning_en:"one night",               example_zh:"一宿",    example_en:"one night",          frequency:"medium" },
    "xiù": { meaning_zh:"星宿，二十八宿",meaning_en:"constellation",          example_zh:"星宿",    example_en:"constellation",      frequency:"low"    },
  }},
  "挑": { readings: {
    "tiāo":{ meaning_zh:"挑担，挑选",   meaning_en:"to carry on shoulder, to pick",example_zh:"挑选",example_en:"to select",        frequency:"high"   },
    "tiǎo":{ meaning_zh:"挑衅，挑战",   meaning_en:"to provoke, to challenge",example_zh:"挑战",    example_en:"challenge",          frequency:"high"   },
  }},
  "吐": { readings: {
    "tǔ":  { meaning_zh:"吐出，吐露",   meaning_en:"to spit out, to reveal",  example_zh:"吐露",    example_en:"to reveal",          frequency:"high"   },
    "tù":  { meaning_zh:"呕吐，吐血",   meaning_en:"to vomit",                example_zh:"呕吐",    example_en:"to vomit",           frequency:"high"   },
  }},
  // ── 六级 ──────────────────────────────────────────────────────
  "挨": { readings: {
    "āi":  { meaning_zh:"挨近，挨着",   meaning_en:"close to, next to",       example_zh:"挨着",    example_en:"right next to",      frequency:"high"   },
    "ái":  { meaning_zh:"挨打，受苦",   meaning_en:"to suffer, to endure",    example_zh:"挨打",    example_en:"to get beaten",      frequency:"high"   },
  }},
  "暴": { readings: {
    "bào": { meaning_zh:"暴力，暴雨",   meaning_en:"violent, torrential",     example_zh:"暴雨",    example_en:"heavy rain",         frequency:"high"   },
    "pù":  { meaning_zh:"暴露，曝晒",   meaning_en:"to expose to sun",        example_zh:"一暴十寒",example_en:"hot and cold",       frequency:"low"    },
  }},
  "奔": { readings: {
    "bēn": { meaning_zh:"奔跑，奔波",   meaning_en:"to run, to rush about",   example_zh:"奔跑",    example_en:"to run",             frequency:"high"   },
    "bèn": { meaning_zh:"直奔，投奔",   meaning_en:"to head straight for",    example_zh:"投奔",    example_en:"to go to for refuge",frequency:"medium" },
  }},
  "扁": { readings: {
    "biǎn":{ meaning_zh:"扁平，压扁",   meaning_en:"flat, flattened",         example_zh:"扁平",    example_en:"flat",               frequency:"high"   },
    "piān":{ meaning_zh:"扁舟，小船",   meaning_en:"small boat (literary)",   example_zh:"扁舟",    example_en:"small boat",         frequency:"low"    },
  }},
  "卜": { readings: {
    "bǔ":  { meaning_zh:"占卜，预测",   meaning_en:"to divine, to predict",   example_zh:"占卜",    example_en:"to divine",          frequency:"medium" },
    "bo":  { meaning_zh:"萝卜",         meaning_en:"radish (in 萝卜)",        example_zh:"萝卜",    example_en:"radish",             frequency:"high"   },
  }},
  "臭": { readings: {
    "chòu":{ meaning_zh:"臭味，臭气",   meaning_en:"stinky, foul smell",      example_zh:"臭气",    example_en:"foul smell",         frequency:"high"   },
    "xiù": { meaning_zh:"嗅觉，气味",   meaning_en:"smell, odor (literary)",  example_zh:"无色无臭",example_en:"colorless & odorless",frequency:"low"   },
  }},
  "答": { readings: {
    "dā":  { meaning_zh:"答应，答话",   meaning_en:"to respond, to agree",    example_zh:"答应",    example_en:"to agree",           frequency:"high"   },
    "dá":  { meaning_zh:"回答，答案",   meaning_en:"to answer, answer",       example_zh:"回答",    example_en:"to answer",          frequency:"high"   },
  }},
  "弹": { readings: {
    "tán": { meaning_zh:"弹琴，弹奏",   meaning_en:"to play (instrument)",    example_zh:"弹琴",    example_en:"to play piano",      frequency:"high"   },
    "dàn": { meaning_zh:"子弹，炸弹",   meaning_en:"bullet, bomb",            example_zh:"子弹",    example_en:"bullet",             frequency:"high"   },
  }},
  "钉": { readings: {
    "dīng":{ meaning_zh:"钉子，铁钉",   meaning_en:"nail",                    example_zh:"钉子",    example_en:"nail",               frequency:"high"   },
    "dìng":{ meaning_zh:"钉牢，钉住",   meaning_en:"to nail, to fasten",      example_zh:"钉牢",    example_en:"to nail down",       frequency:"medium" },
  }},
  "缝": { readings: {
    "féng":{ meaning_zh:"缝制，缝合",   meaning_en:"to sew, to stitch",       example_zh:"缝衣服",  example_en:"to sew clothes",     frequency:"high"   },
    "fèng":{ meaning_zh:"缝隙，裂缝",   meaning_en:"crack, seam",             example_zh:"裂缝",    example_en:"crack",              frequency:"high"   },
  }},
  "横": { readings: {
    "héng":{ meaning_zh:"横向，横线",   meaning_en:"horizontal",              example_zh:"横线",    example_en:"horizontal line",    frequency:"high"   },
    "hèng":{ meaning_zh:"蛮横，横行",   meaning_en:"overbearing, reckless",   example_zh:"蛮横",    example_en:"overbearing",        frequency:"medium" },
  }},
  "哄": { readings: {
    "hōng":{ meaning_zh:"哄堂大笑",     meaning_en:"uproar of laughter",      example_zh:"哄堂",    example_en:"whole room laughing",frequency:"medium" },
    "hǒng":{ meaning_zh:"哄骗，哄人",   meaning_en:"to coax, to deceive",     example_zh:"哄骗",    example_en:"to coax/deceive",    frequency:"high"   },
    "hòng":{ meaning_zh:"起哄，闹哄",   meaning_en:"to make a commotion",     example_zh:"起哄",    example_en:"to stir up trouble", frequency:"medium" },
  }},
  "华": { readings: {
    "huá": { meaning_zh:"华丽，繁华",   meaning_en:"splendid, prosperous",    example_zh:"繁华",    example_en:"prosperous",         frequency:"high"   },
    "huà": { meaning_zh:"华山",         meaning_en:"Mount Hua (proper noun)", example_zh:"华山",    example_en:"Mount Hua",          frequency:"medium" },
  }},
  "晃": { readings: {
    "huǎng":{ meaning_zh:"明晃晃，耀眼",meaning_en:"dazzling, glittering",    example_zh:"明晃晃",  example_en:"dazzlingly bright",  frequency:"medium" },
    "huàng":{ meaning_zh:"摇晃，晃动",  meaning_en:"to sway, to shake",       example_zh:"摇晃",    example_en:"to sway",            frequency:"high"   },
  }},
  "夹": { readings: {
    "jiā": { meaning_zh:"夹住，夹子",   meaning_en:"to clamp, clip",          example_zh:"夹子",    example_en:"clip",               frequency:"high"   },
    "jiá": { meaning_zh:"夹克，夹层",   meaning_en:"jacket, double-layered",  example_zh:"夹层",    example_en:"double layer",       frequency:"medium" },
    "ga":  { meaning_zh:"夹肢窝（口）", meaning_en:"armpit (colloq.)",        example_zh:"夹肢窝",  example_en:"armpit",             frequency:"low"    },
  }},
  "监": { readings: {
    "jiān":{ meaning_zh:"监督，监控",   meaning_en:"to supervise, to monitor",example_zh:"监控",    example_en:"surveillance",       frequency:"high"   },
    "jiàn":{ meaning_zh:"国子监，太监", meaning_en:"imperial academy, eunuch",example_zh:"太监",    example_en:"eunuch",             frequency:"low"    },
  }},
  "角": { readings: {
    "jiǎo":{ meaning_zh:"角落，角度",   meaning_en:"corner, angle",           example_zh:"角落",    example_en:"corner",             frequency:"high"   },
    "jué": { meaning_zh:"角色，主角",   meaning_en:"role, character",         example_zh:"角色",    example_en:"role",               frequency:"high"   },
  }},
  "结": { readings: {
    "jiē": { meaning_zh:"结果，结实",   meaning_en:"to bear fruit, solid",    example_zh:"结果",    example_en:"result / fruit",     frequency:"high"   },
    "jié": { meaning_zh:"结束，结构",   meaning_en:"to end, structure",       example_zh:"结束",    example_en:"to end",             frequency:"high"   },
  }},
  "解": { readings: {
    "jiě": { meaning_zh:"解决，了解",   meaning_en:"to solve, to understand", example_zh:"解决",    example_en:"to solve",           frequency:"high"   },
    "jiè": { meaning_zh:"押解，解送",   meaning_en:"to escort (prisoner)",    example_zh:"押解",    example_en:"to escort",          frequency:"low"    },
    "xiè": { meaning_zh:"解数，浑身解数",meaning_en:"skill, tricks",          example_zh:"解数",    example_en:"one's skills",       frequency:"low"    },
  }},
  "禁": { readings: {
    "jīn": { meaning_zh:"禁受，不禁",   meaning_en:"to withstand, can't help",example_zh:"不禁",    example_en:"can't help but",     frequency:"medium" },
    "jìn": { meaning_zh:"禁止，禁令",   meaning_en:"to forbid, prohibition",  example_zh:"禁止",    example_en:"forbidden",          frequency:"high"   },
  }},
  "看": { readings: {
    "kàn": { meaning_zh:"看见，观看",   meaning_en:"to see, to watch",        example_zh:"看书",    example_en:"to read",            frequency:"high"   },
    "kān": { meaning_zh:"看守，照看",   meaning_en:"to watch over, to guard", example_zh:"看门",    example_en:"to guard the gate",  frequency:"medium" },
  }},
  "空": { readings: {
    "kōng":{ meaning_zh:"空气，空间",   meaning_en:"air, space, empty",       example_zh:"空气",    example_en:"air",                frequency:"high"   },
    "kòng":{ meaning_zh:"空闲，有空",   meaning_en:"free time, vacancy",      example_zh:"有空",    example_en:"to have free time",  frequency:"high"   },
  }},
  "累": { readings: {
    "léi": { meaning_zh:"累赘，积累",   meaning_en:"to accumulate, burden",   example_zh:"累赘",    example_en:"burden",             frequency:"medium" },
    "lěi": { meaning_zh:"积累，累积",   meaning_en:"to pile up, to accumulate",example_zh:"积累",   example_en:"to accumulate",      frequency:"high"   },
    "lèi": { meaning_zh:"疲劳，劳累",   meaning_en:"tired, fatigued",         example_zh:"疲惫",    example_en:"exhausted",          frequency:"high"   },
  }},
  "量": { readings: {
    "liáng":{ meaning_zh:"测量，量体",  meaning_en:"to measure",              example_zh:"测量",    example_en:"to measure",         frequency:"high"   },
    "liàng":{ meaning_zh:"数量，大量",  meaning_en:"quantity, amount",        example_zh:"数量",    example_en:"quantity",           frequency:"high"   },
  }},
  "笼": { readings: {
    "lóng":{ meaning_zh:"笼子，鸟笼",   meaning_en:"cage",                    example_zh:"鸟笼",    example_en:"birdcage",           frequency:"high"   },
    "lǒng":{ meaning_zh:"笼罩，笼络",   meaning_en:"to envelop, to win over", example_zh:"笼罩",    example_en:"to envelop",         frequency:"medium" },
  }},
  "绿": { readings: {
    "lǜ":  { meaning_zh:"绿色，翠绿",   meaning_en:"green",                   example_zh:"绿色",    example_en:"green color",        frequency:"high"   },
    "lù":  { meaning_zh:"鸭绿江",       meaning_en:"Yalu River (proper noun)",example_zh:"鸭绿江",  example_en:"Yalu River",         frequency:"low"    },
  }},
  "论": { readings: {
    "lùn": { meaning_zh:"讨论，理论",   meaning_en:"to discuss, theory",      example_zh:"讨论",    example_en:"discussion",         frequency:"high"   },
    "lún": { meaning_zh:"论语，伦理",   meaning_en:"Analects, ethics",        example_zh:"论语",    example_en:"Analects",           frequency:"low"    },
  }},
  "落": { readings: {
    "luò": { meaning_zh:"落下，降落",   meaning_en:"to fall, to land",        example_zh:"落下",    example_en:"to fall",            frequency:"high"   },
    "lào": { meaning_zh:"落价，落色",   meaning_en:"to drop in price/color",  example_zh:"落色",    example_en:"to fade",            frequency:"medium" },
    "là":  { meaning_zh:"落后，遗落",   meaning_en:"to fall behind, to omit", example_zh:"落后",    example_en:"to lag behind",      frequency:"high"   },
  }},
  "脉": { readings: {
    "mài": { meaning_zh:"脉搏，血脉",   meaning_en:"pulse, blood vessel",     example_zh:"脉搏",    example_en:"pulse",              frequency:"high"   },
    "mò":  { meaning_zh:"脉脉（含情）", meaning_en:"tenderly (literary)",     example_zh:"脉脉含情",example_en:"tender look",        frequency:"low"    },
  }},
  "泡": { readings: {
    "pào": { meaning_zh:"泡沫，气泡",   meaning_en:"bubble, foam",            example_zh:"泡沫",    example_en:"foam",               frequency:"high"   },
    "pāo": { meaning_zh:"泡汤，虚胖",   meaning_en:"puffy, to fizzle out",    example_zh:"泡汤",    example_en:"to fall through",    frequency:"medium" },
  }},
  "炮": { readings: {
    "pào": { meaning_zh:"大炮，炮火",   meaning_en:"cannon, artillery",       example_zh:"大炮",    example_en:"cannon",             frequency:"high"   },
    "páo": { meaning_zh:"炮制，炮烙",   meaning_en:"to roast, to prepare",    example_zh:"炮制",    example_en:"to concoct",         frequency:"medium" },
    "bāo": { meaning_zh:"炮羊肉（爆）", meaning_en:"to quick-fry (meat)",     example_zh:"炮羊肉",  example_en:"quick-fried mutton", frequency:"low"    },
  }},
  "漂": { readings: {
    "piāo":{ meaning_zh:"漂浮，飘荡",   meaning_en:"to float, to drift",      example_zh:"漂浮",    example_en:"to float",           frequency:"high"   },
    "piǎo":{ meaning_zh:"漂白，漂洗",   meaning_en:"to bleach, to rinse",     example_zh:"漂白",    example_en:"to bleach",          frequency:"medium" },
    "piào":{ meaning_zh:"漂亮，好看",   meaning_en:"beautiful, pretty",       example_zh:"漂亮",    example_en:"beautiful",          frequency:"high"   },
  }},
  "奇": { readings: {
    "qí":  { meaning_zh:"奇怪，奇特",   meaning_en:"strange, unusual",        example_zh:"奇怪",    example_en:"strange",            frequency:"high"   },
    "jī":  { meaning_zh:"奇数，单数",   meaning_en:"odd number",              example_zh:"奇数",    example_en:"odd number",         frequency:"medium" },
  }},
  "丧": { readings: {
    "sāng":{ meaning_zh:"丧事，奔丧",   meaning_en:"funeral, mourning rites", example_zh:"丧事",    example_en:"funeral",            frequency:"medium" },
    "sàng":{ meaning_zh:"丧失，沮丧",   meaning_en:"to lose, dejected",       example_zh:"沮丧",    example_en:"dejected",           frequency:"high"   },
  }},
  "扇": { readings: {
    "shān":{ meaning_zh:"扇风，扇动",   meaning_en:"to fan, to flap",         example_zh:"扇风",    example_en:"to fan",             frequency:"medium" },
    "shàn":{ meaning_zh:"扇子，电扇",   meaning_en:"fan (object)",            example_zh:"扇子",    example_en:"hand fan",           frequency:"high"   },
  }},
  "石": { readings: {
    "shí": { meaning_zh:"石头，岩石",   meaning_en:"stone, rock",             example_zh:"石头",    example_en:"stone",              frequency:"high"   },
    "dàn": { meaning_zh:"一石（容量）", meaning_en:"dan, unit of volume",     example_zh:"一石粮",  example_en:"one dan of grain",   frequency:"low"    },
  }},
  "识": { readings: {
    "shí": { meaning_zh:"认识，知识",   meaning_en:"to know, knowledge",      example_zh:"认识",    example_en:"to know",            frequency:"high"   },
    "zhì": { meaning_zh:"标识，博闻强识",meaning_en:"to mark, great memory",  example_zh:"标识",    example_en:"logo / mark",        frequency:"low"    },
  }},
  "似": { readings: {
    "sì":  { meaning_zh:"似乎，类似",   meaning_en:"seemingly, similar",      example_zh:"似乎",    example_en:"it seems",           frequency:"high"   },
    "shì": { meaning_zh:"似的，好似",   meaning_en:"like, as if (colloq.)",   example_zh:"好似",    example_en:"as if",              frequency:"high"   },
  }},
  "踏": { readings: {
    "tā":  { meaning_zh:"踏实，踏踏实实",meaning_en:"down-to-earth, steady",  example_zh:"踏实",    example_en:"down-to-earth",      frequency:"high"   },
    "tà":  { meaning_zh:"踩踏，步踏",   meaning_en:"to tread, to step on",    example_zh:"踩踏",    example_en:"to step on",         frequency:"high"   },
  }},
  "帖": { readings: {
    "tiē": { meaning_zh:"妥帖，贴切",   meaning_en:"fitting, appropriate",    example_zh:"妥帖",    example_en:"appropriate",        frequency:"medium" },
    "tiě": { meaning_zh:"请帖，帖子",   meaning_en:"invitation, notice",      example_zh:"请帖",    example_en:"invitation",         frequency:"high"   },
    "tiè": { meaning_zh:"字帖，碑帖",   meaning_en:"copybook, rubbing",       example_zh:"字帖",    example_en:"copybook",           frequency:"medium" },
  }},
  "校": { readings: {
    "xiào":{ meaning_zh:"学校，校园",   meaning_en:"school, campus",          example_zh:"学校",    example_en:"school",             frequency:"high"   },
    "jiào":{ meaning_zh:"校对，校正",   meaning_en:"to proofread, to correct",example_zh:"校对",    example_en:"to proofread",       frequency:"medium" },
  }},
  "咽": { readings: {
    "yān": { meaning_zh:"咽喉，喉咙",   meaning_en:"throat, pharynx",         example_zh:"咽喉",    example_en:"throat",             frequency:"high"   },
    "yàn": { meaning_zh:"吞咽，咽下",   meaning_en:"to swallow",              example_zh:"吞咽",    example_en:"to swallow",         frequency:"high"   },
    "yè":  { meaning_zh:"哽咽，呜咽",   meaning_en:"to sob, to choke up",     example_zh:"哽咽",    example_en:"to choke up",        frequency:"medium" },
  }},
  "饮": { readings: {
    "yǐn": { meaning_zh:"饮水，饮料",   meaning_en:"to drink, beverage",      example_zh:"饮料",    example_en:"beverage",           frequency:"high"   },
    "yìn": { meaning_zh:"饮马，给牲畜喝水",meaning_en:"to water animals",     example_zh:"饮马",    example_en:"to water a horse",   frequency:"low"    },
  }},
  "载": { readings: {
    "zǎi": { meaning_zh:"记载，刊载",   meaning_en:"to record, to publish",   example_zh:"记载",    example_en:"to record",          frequency:"medium" },
    "zài": { meaning_zh:"载重，运载",   meaning_en:"to carry, to load",       example_zh:"载重",    example_en:"load capacity",      frequency:"high"   },
  }},
  "扎": { readings: {
    "zhā": { meaning_zh:"扎针，刺扎",   meaning_en:"to prick, to stab",       example_zh:"扎针",    example_en:"to give an injection",frequency:"high"  },
    "zā":  { meaning_zh:"捆扎，包扎",   meaning_en:"to bind, to wrap",        example_zh:"包扎",    example_en:"to bandage",         frequency:"high"   },
    "zhá": { meaning_zh:"挣扎，扑腾",   meaning_en:"to struggle",             example_zh:"挣扎",    example_en:"to struggle",        frequency:"high"   },
  }},
  "占": { readings: {
    "zhān":{ meaning_zh:"占卜，卜占",   meaning_en:"to divine, to foretell",  example_zh:"占卜",    example_en:"to divine",          frequency:"medium" },
    "zhàn":{ meaning_zh:"占领，占有",   meaning_en:"to occupy, to possess",   example_zh:"占领",    example_en:"to occupy",          frequency:"high"   },
  }},
  "涨": { readings: {
    "zhǎng":{ meaning_zh:"涨价，上涨",  meaning_en:"to rise (price/water)",   example_zh:"涨价",    example_en:"price increase",     frequency:"high"   },
    "zhàng":{ meaning_zh:"头涨，肿胀",  meaning_en:"to swell, bloated",       example_zh:"头涨",    example_en:"head feels swollen", frequency:"medium" },
  }},
  "钻": { readings: {
    "zuān":{ meaning_zh:"钻研，钻进",   meaning_en:"to drill, to delve into", example_zh:"钻研",    example_en:"to study diligently",frequency:"high"   },
    "zuàn":{ meaning_zh:"钻石，钻头",   meaning_en:"diamond, drill bit",      example_zh:"钻石",    example_en:"diamond",            frequency:"high"   },
  }},
  // ── 为 (appears in both 七-九级 and with enriched entry) ──────
  "为": { readings: {
    "wéi": { meaning_zh:"作为，成为",   meaning_en:"to be, to act as",        example_zh:"成为",    example_en:"to become",          frequency:"high"   },
    "wèi": { meaning_zh:"为了，因为",   meaning_en:"for the sake of",         example_zh:"为什么",  example_en:"why",                frequency:"high"   },
  }},
};

// ── Level → difficulty number map ────────────────────────────
const LEVEL_MAP = {
  "一级": 1, "二级": 2, "三级": 3, "四级": 4,
  "五级": 5, "六级": 6, "七-九级": 7,
};

// ── Level → UI label map ──────────────────────────────────────
const LEVEL_LABELS = {
  1: "一级", 2: "二级", 3: "三级", 4: "四级",
  5: "五级", 6: "六级", 7: "七-九级",
};

// ── Build POLYPHONES from RAW_DATA + ENRICHED ─────────────────
// This is what the app uses. You never need to edit this function.
const POLYPHONES = RAW_DATA.map(row => {
  const difficulty = LEVEL_MAP[row.level] || 1;
  const enriched = ENRICHED[row.hanzi];
  const pinyinList = row.pinyin.split("/");

  const readings = pinyinList.map(py => {
    const e = enriched?.readings?.[py];
    return {
      pinyin:     py,
      meaning_zh: e?.meaning_zh  || "",
      meaning_en: e?.meaning_en  || "",
      example_zh: e?.example_zh  || "",
      example_en: e?.example_en  || "",
      frequency:  e?.frequency   || "medium",
    };
  });

  return { character: row.hanzi, difficulty, readings };
});
