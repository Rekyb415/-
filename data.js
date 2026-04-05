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
  "得": { readings: {
    "dé":  { meaning_zh:"得到，获得", meaning_en:"to get, to obtain",      example_zh:"得奖", example_en:"to win an award", frequency:"high" },
    "de":  { meaning_zh:"结构助词",   meaning_en:"structural particle",    example_zh:"跑得快", example_en:"runs fast",     frequency:"high" },
    "děi": { meaning_zh:"必须，需要", meaning_en:"must, need to",           example_zh:"得去",  example_en:"must go",       frequency:"medium" },
  }},
  "地": { readings: {
    "dì": { meaning_zh:"土地，地点", meaning_en:"earth, place",            example_zh:"地球",  example_en:"Earth",         frequency:"high" },
    "de": { meaning_zh:"结构助词",   meaning_en:"structural particle",    example_zh:"慢慢地", example_en:"slowly",        frequency:"high" },
  }},
  "好": { readings: {
    "hǎo": { meaning_zh:"好的，良好", meaning_en:"good, well",             example_zh:"好人",  example_en:"good person",   frequency:"high" },
    "hào": { meaning_zh:"喜好，爱好", meaning_en:"to be fond of",          example_zh:"好学",  example_en:"eager to learn",frequency:"medium" },
  }},
  "和": { readings: {
    "hé":  { meaning_zh:"和平，和睦", meaning_en:"peace, harmony",         example_zh:"和平",  example_en:"peace",         frequency:"high" },
    "hè":  { meaning_zh:"应和，唱和", meaning_en:"to echo, to respond",    example_zh:"和诗",  example_en:"to respond in verse", frequency:"low" },
    "huó": { meaning_zh:"和面，搅拌", meaning_en:"to knead (dough)",       example_zh:"和面",  example_en:"to knead dough",frequency:"medium" },
    "huò": { meaning_zh:"掺和，混合", meaning_en:"to mix together",        example_zh:"和药",  example_en:"to mix medicine",frequency:"low" },
    "hú":  { meaning_zh:"麻将和牌",   meaning_en:"to win (mahjong)",       example_zh:"和了",  example_en:"to win mahjong",frequency:"low" },
  }},
  "教": { readings: {
    "jiāo": { meaning_zh:"教导，教授", meaning_en:"to teach",              example_zh:"教书",  example_en:"to teach",      frequency:"high" },
    "jiào": { meaning_zh:"教育，宗教", meaning_en:"education, religion",   example_zh:"教育",  example_en:"education",     frequency:"high" },
  }},
  "觉": { readings: {
    "jué":  { meaning_zh:"感觉，觉得", meaning_en:"to feel, to sense",     example_zh:"觉得",  example_en:"to feel",       frequency:"high" },
    "jiào": { meaning_zh:"睡觉，午觉", meaning_en:"sleep, nap",            example_zh:"睡觉",  example_en:"to sleep",      frequency:"high" },
  }},
  "少": { readings: {
    "shǎo": { meaning_zh:"少量，稀少", meaning_en:"few, little",           example_zh:"很少",  example_en:"rarely",        frequency:"high" },
    "shào": { meaning_zh:"年少，少年", meaning_en:"young, youth",          example_zh:"少年",  example_en:"youth",         frequency:"medium" },
  }},
  "行": { readings: {
    "xíng": { meaning_zh:"行走，行动", meaning_en:"to walk, to act",       example_zh:"行走",  example_en:"to walk",       frequency:"high" },
    "háng": { meaning_zh:"行业，排列", meaning_en:"profession, row",       example_zh:"银行",  example_en:"bank",          frequency:"high" },
  }},
  "兴": { readings: {
    "xīng": { meaning_zh:"兴起，复兴", meaning_en:"to rise, to revive",    example_zh:"兴起",  example_en:"to rise",       frequency:"high" },
    "xìng": { meaning_zh:"兴趣，兴奋", meaning_en:"interest, excitement",  example_zh:"兴趣",  example_en:"interest",      frequency:"high" },
  }},
  "中": { readings: {
    "zhōng": { meaning_zh:"中间，中心", meaning_en:"middle, center",       example_zh:"中国",  example_en:"China",         frequency:"high" },
    "zhòng": { meaning_zh:"命中，击中", meaning_en:"to hit, to be hit",    example_zh:"中奖",  example_en:"to win a prize",frequency:"medium" },
  }},
  "重": { readings: {
    "zhòng": { meaning_zh:"重量，沉重", meaning_en:"heavy, weight",        example_zh:"体重",  example_en:"body weight",   frequency:"high" },
    "chóng": { meaning_zh:"重复，重新", meaning_en:"again, to repeat",     example_zh:"重来",  example_en:"to redo",       frequency:"high" },
  }},
  "长": { readings: {
    "cháng": { meaning_zh:"长度，长短", meaning_en:"long, length",         example_zh:"长城",  example_en:"Great Wall",    frequency:"high" },
    "zhǎng": { meaning_zh:"成长，增长", meaning_en:"to grow, to increase", example_zh:"成长",  example_en:"to grow up",    frequency:"high" },
  }},
  "差": { readings: {
    "chā":  { meaning_zh:"差别，差异", meaning_en:"difference, gap",       example_zh:"差别",  example_en:"difference",    frequency:"high" },
    "chà":  { meaning_zh:"差劲，欠佳", meaning_en:"poor, inferior",        example_zh:"差劲",  example_en:"poor quality",  frequency:"medium" },
    "chāi": { meaning_zh:"出差，差事", meaning_en:"business trip, errand", example_zh:"出差",  example_en:"business trip", frequency:"medium" },
    "cī":   { meaning_zh:"参差不齐",   meaning_en:"uneven, irregular",     example_zh:"参差",  example_en:"uneven",        frequency:"low" },
  }},
  "发": { readings: {
    "fā": { meaning_zh:"发出，发生", meaning_en:"to send out, to happen",  example_zh:"发现",  example_en:"to discover",   frequency:"high" },
    "fà": { meaning_zh:"头发",       meaning_en:"hair",                    example_zh:"头发",  example_en:"hair",          frequency:"high" },
  }},
  "应": { readings: {
    "yīng": { meaning_zh:"应该，应当", meaning_en:"should, ought to",      example_zh:"应该",  example_en:"should",        frequency:"high" },
    "yìng": { meaning_zh:"回应，响应", meaning_en:"to respond, to answer", example_zh:"回应",  example_en:"to respond",    frequency:"medium" },
  }},
  "乐": { readings: {
    "lè":  { meaning_zh:"快乐，欢乐", meaning_en:"happy, joyful",          example_zh:"快乐",  example_en:"happiness",     frequency:"high" },
    "yuè": { meaning_zh:"音乐",       meaning_en:"music",                  example_zh:"音乐",  example_en:"music",         frequency:"high" },
  }},
  "数": { readings: {
    "shù":  { meaning_zh:"数字，数量", meaning_en:"number, quantity",      example_zh:"数学",  example_en:"mathematics",   frequency:"high" },
    "shǔ":  { meaning_zh:"计数，数数", meaning_en:"to count",              example_zh:"数钱",  example_en:"to count money",frequency:"medium" },
    "shuò": { meaning_zh:"多次，屡次", meaning_en:"frequently, repeatedly", example_zh:"数见不鲜",example_en:"not uncommon",frequency:"low" },
  }},
  "藏": { readings: {
    "cáng": { meaning_zh:"藏匿，储藏", meaning_en:"to hide, to store",     example_zh:"藏宝",  example_en:"hidden treasure",frequency:"medium" },
    "zàng": { meaning_zh:"西藏，宝藏", meaning_en:"Tibet, treasure",       example_zh:"西藏",  example_en:"Tibet",         frequency:"medium" },
  }},
  "朝": { readings: {
    "cháo": { meaning_zh:"朝代，朝廷", meaning_en:"dynasty, imperial court",example_zh:"明朝", example_en:"Ming Dynasty",  frequency:"medium" },
    "zhāo": { meaning_zh:"早晨，朝阳", meaning_en:"morning, morning sun",  example_zh:"朝阳",  example_en:"morning sun",   frequency:"low" },
  }},
  "传": { readings: {
    "chuán": { meaning_zh:"传递，传播", meaning_en:"to pass, to spread",   example_zh:"传说",  example_en:"legend",        frequency:"high" },
    "zhuàn": { meaning_zh:"传记，自传", meaning_en:"biography",            example_zh:"自传",  example_en:"autobiography", frequency:"medium" },
  }},
  "降": { readings: {
    "jiàng": { meaning_zh:"下降，降低", meaning_en:"to descend, to lower", example_zh:"降温",  example_en:"temperature drop",frequency:"high" },
    "xiáng": { meaning_zh:"投降，降服", meaning_en:"to surrender",         example_zh:"投降",  example_en:"to surrender",  frequency:"medium" },
  }},
  "假": { readings: {
    "jiǎ": { meaning_zh:"虚假，假冒", meaning_en:"fake, false",            example_zh:"假装",  example_en:"to pretend",    frequency:"high" },
    "jià": { meaning_zh:"假期，休假", meaning_en:"holiday, vacation",      example_zh:"放假",  example_en:"to have a holiday",frequency:"high" },
  }},
  "参": { readings: {
    "cān":  { meaning_zh:"参加，参与", meaning_en:"to participate",        example_zh:"参加",  example_en:"to join",       frequency:"high" },
    "shēn": { meaning_zh:"人参",       meaning_en:"ginseng",               example_zh:"人参",  example_en:"ginseng",       frequency:"low" },
    "cēn":  { meaning_zh:"参差不齐",   meaning_en:"uneven, irregular",     example_zh:"参差",  example_en:"uneven",        frequency:"low" },
  }},
  "看": { readings: {
    "kàn": { meaning_zh:"看见，观看", meaning_en:"to see, to watch",       example_zh:"看书",  example_en:"to read",       frequency:"high" },
    "kān": { meaning_zh:"看守，照看", meaning_en:"to watch over, to guard",example_zh:"看门",  example_en:"to guard the door",frequency:"medium" },
  }},
  "弹": { readings: {
    "tán": { meaning_zh:"弹琴，弹奏", meaning_en:"to play (instrument)",   example_zh:"弹琴",  example_en:"to play piano", frequency:"high" },
    "dàn": { meaning_zh:"子弹，炸弹", meaning_en:"bullet; bomb",           example_zh:"子弹",  example_en:"bullet",        frequency:"high" },
  }},
  "为": { readings: {
    "wéi": { meaning_zh:"作为，成为", meaning_en:"to be, to act as",       example_zh:"成为",  example_en:"to become",     frequency:"high" },
    "wèi": { meaning_zh:"为了，因为", meaning_en:"for the sake of",        example_zh:"为什么",example_en:"why",           frequency:"high" },
  }},
  // ── 七-九级 ──────────────────────────────────────────────────
  "扒": { readings: {
    "bā":  { meaning_zh:"扒开，抓住",   meaning_en:"to scratch, to cling",    example_zh:"扒开",   example_en:"to pry open",        frequency:"medium" },
    "pá":  { meaning_zh:"扒手，扒窃",   meaning_en:"pickpocket",              example_zh:"扒手",   example_en:"pickpocket",         frequency:"medium" },
  }},
  "柏": { readings: {
    "bǎi": { meaning_zh:"柏树，侧柏",   meaning_en:"cypress tree",            example_zh:"柏树",   example_en:"cypress tree",       frequency:"medium" },
    "bó":  { meaning_zh:"柏林（地名）", meaning_en:"Berlin (place name)",     example_zh:"柏林",   example_en:"Berlin",             frequency:"medium" },
    "bò":  { meaning_zh:"黄柏（中药）", meaning_en:"cork tree bark (medicine)",example_zh:"黄柏",  example_en:"Phellodendron bark", frequency:"low"    },
  }},
  "膀": { readings: {
    "bǎng":{ meaning_zh:"肩膀，翅膀",   meaning_en:"shoulder, wing",          example_zh:"肩膀",   example_en:"shoulder",           frequency:"high"   },
    "páng":{ meaning_zh:"膀胱",         meaning_en:"bladder (in 膀胱)",       example_zh:"膀胱",   example_en:"bladder",            frequency:"medium" },
    "pāng":{ meaning_zh:"滂沱（象声）", meaning_en:"splashing sound",         example_zh:"膀然",   example_en:"spreading wide",     frequency:"low"    },
  }},
  "堡": { readings: {
    "bǎo": { meaning_zh:"堡垒，城堡",   meaning_en:"fort, castle",            example_zh:"城堡",   example_en:"castle",             frequency:"high"   },
    "pù":  { meaning_zh:"十里堡（地名）",meaning_en:"Pu (in place names)",    example_zh:"十里堡", example_en:"Shilipu",            frequency:"low"    },
    "bǔ":  { meaning_zh:"瓦窑堡（地名）",meaning_en:"Bu (in place names)",    example_zh:"瓦窑堡", example_en:"Wayaobu",            frequency:"low"    },
  }},
  "背": { readings: {
    "bēi": { meaning_zh:"背负，背包",   meaning_en:"to carry on back",        example_zh:"背包",   example_en:"backpack",           frequency:"high"   },
    "bèi": { meaning_zh:"背面，背后",   meaning_en:"back (of body/object)",   example_zh:"背后",   example_en:"behind",             frequency:"high"   },
  }},
  "辟": { readings: {
    "bì":  { meaning_zh:"复辟，辟谣",   meaning_en:"to refute, to restore",   example_zh:"辟谣",   example_en:"to refute a rumor",  frequency:"medium" },
    "pì":  { meaning_zh:"开辟，辟地",   meaning_en:"to open up, to develop",  example_zh:"开辟",   example_en:"to open up",         frequency:"medium" },
  }},
  "朴": { readings: {
    "pǔ":  { meaning_zh:"朴素，朴实",   meaning_en:"plain, simple",           example_zh:"朴素",   example_en:"simple and plain",   frequency:"high"   },
    "piáo":{ meaning_zh:"朴刀（古兵器）",meaning_en:"Piao (surname/archaic)", example_zh:"朴刀",   example_en:"broad-bladed sword", frequency:"low"    },
    "pò":  { meaning_zh:"朴树（植物）", meaning_en:"hackberry tree",          example_zh:"朴树",   example_en:"hackberry tree",     frequency:"low"    },
    "pō":  { meaning_zh:"朴硝（矿物）", meaning_en:"mirabilite (mineral)",    example_zh:"朴硝",   example_en:"mirabilite",         frequency:"low"    },
  }},
  "戚": { readings: {
    "qī":  { meaning_zh:"戚戚，悲戚",   meaning_en:"sorrowful, grieved",      example_zh:"悲戚",   example_en:"sorrowful",          frequency:"medium" },
    "qì":  { meaning_zh:"亲戚，外戚",   meaning_en:"relative, kin",           example_zh:"亲戚",   example_en:"relatives",          frequency:"high"   },
  }},
  "纤": { readings: {
    "xiān":{ meaning_zh:"纤维，纤细",   meaning_en:"fiber, slender",          example_zh:"纤维",   example_en:"fiber",              frequency:"high"   },
    "qiàn":{ meaning_zh:"纤夫，拉纤",   meaning_en:"tow rope, boat tracker",  example_zh:"纤夫",   example_en:"boat tracker",       frequency:"low"    },
  }},
  "翘": { readings: {
    "qiáo":{ meaning_zh:"翘首，翘望",   meaning_en:"to raise head, to long for",example_zh:"翘首", example_en:"to eagerly await",   frequency:"medium" },
    "qiào":{ meaning_zh:"翘起，翘尾巴", meaning_en:"to stick up, to tilt",    example_zh:"翘起",   example_en:"to stick up",        frequency:"high"   },
  }},
  "亲": { readings: {
    "qīn": { meaning_zh:"亲人，亲爱",   meaning_en:"dear, close, kin",        example_zh:"亲人",   example_en:"loved ones",         frequency:"high"   },
    "qìng":{ meaning_zh:"亲家，姻亲",   meaning_en:"in-laws, relatives by marriage",example_zh:"亲家",example_en:"in-laws",        frequency:"medium" },
  }},
  "嚷": { readings: {
    "rǎng":{ meaning_zh:"叫嚷，嚷嚷",   meaning_en:"to shout, to yell",       example_zh:"叫嚷",   example_en:"to shout",           frequency:"high"   },
    "rāng":{ meaning_zh:"嚷嚷（口语）", meaning_en:"to make noise (colloq.)", example_zh:"嚷嚷",   example_en:"to make a fuss",     frequency:"medium" },
  }},
  "任": { readings: {
    "rén": { meaning_zh:"任命，担任",   meaning_en:"to appoint, to serve as", example_zh:"任务",   example_en:"task, mission",      frequency:"high"   },
    "rèn": { meaning_zh:"任意，任何",   meaning_en:"any, arbitrary",          example_zh:"任何",   example_en:"any",                frequency:"high"   },
  }},
  "刹": { readings: {
    "chà": { meaning_zh:"古刹，刹那",   meaning_en:"temple; instant",         example_zh:"刹那",   example_en:"an instant",         frequency:"medium" },
    "shā": { meaning_zh:"刹车，刹住",   meaning_en:"to brake, to stop",       example_zh:"刹车",   example_en:"to brake",           frequency:"high"   },
  }},
  "禅": { readings: {
    "chán":{ meaning_zh:"禅宗，禅定",   meaning_en:"Zen Buddhism, meditation",example_zh:"禅宗",   example_en:"Zen Buddhism",       frequency:"medium" },
    "shàn":{ meaning_zh:"禅让，封禅",   meaning_en:"abdication, imperial rite",example_zh:"禅让",  example_en:"abdication",         frequency:"low"    },
  }},
  "匙": { readings: {
    "chí": { meaning_zh:"汤匙，钥匙",   meaning_en:"spoon, key",              example_zh:"钥匙",   example_en:"key",                frequency:"high"   },
    "shi": { meaning_zh:"钥匙（口语）", meaning_en:"key (colloq., unstressed)",example_zh:"钥匙",  example_en:"key",                frequency:"high"   },
  }},
  "畜": { readings: {
    "chù": { meaning_zh:"牲畜，家畜",   meaning_en:"livestock, domestic animal",example_zh:"牲畜", example_en:"livestock",          frequency:"high"   },
    "xù":  { meaning_zh:"畜牧，饲养",   meaning_en:"to raise (animals)",      example_zh:"畜牧",   example_en:"animal husbandry",   frequency:"medium" },
  }},
  "揣": { readings: {
    "chuāi":{ meaning_zh:"揣在怀里",    meaning_en:"to tuck into (pocket)",   example_zh:"揣手",   example_en:"hands in pockets",   frequency:"medium" },
    "chuǎi":{ meaning_zh:"揣测，揣摩",  meaning_en:"to guess, to speculate",  example_zh:"揣测",   example_en:"to speculate",       frequency:"medium" },
    "chuài":{ meaning_zh:"挣揣，挣扎",  meaning_en:"to kick, to struggle",    example_zh:"乱揣",   example_en:"to kick wildly",     frequency:"low"    },
  }},
  "创": { readings: {
    "chuàng":{ meaning_zh:"创造，创建", meaning_en:"to create, to found",     example_zh:"创造",   example_en:"to create",          frequency:"high"   },
    "chuāng":{ meaning_zh:"创伤，创口", meaning_en:"wound, injury",           example_zh:"创伤",   example_en:"wound",              frequency:"medium" },
  }},
  "撮": { readings: {
    "cuō": { meaning_zh:"撮合，撮要",   meaning_en:"to bring together, summary",example_zh:"撮合", example_en:"to matchmake",       frequency:"medium" },
    "zuǒ": { meaning_zh:"一撮盐",       meaning_en:"a pinch of (measure word)",example_zh:"一撮盐",example_en:"a pinch of salt",    frequency:"medium" },
  }},
  "坊": { readings: {
    "fāng":{ meaning_zh:"牌坊，街坊",   meaning_en:"memorial arch, neighborhood",example_zh:"牌坊",example_en:"memorial archway",  frequency:"medium" },
    "fáng":{ meaning_zh:"作坊，磨坊",   meaning_en:"workshop, mill",          example_zh:"作坊",   example_en:"workshop",           frequency:"medium" },
  }},
  "分": { readings: {
    "fēn": { meaning_zh:"分开，分配",   meaning_en:"to divide, to distribute",example_zh:"分开",   example_en:"to separate",        frequency:"high"   },
    "fèn": { meaning_zh:"成分，身份",   meaning_en:"component, identity",     example_zh:"成分",   example_en:"component",          frequency:"high"   },
  }},
  "否": { readings: {
    "fǒu": { meaning_zh:"否定，是否",   meaning_en:"to deny, whether",        example_zh:"是否",   example_en:"whether or not",     frequency:"high"   },
    "pǐ":  { meaning_zh:"否极泰来",     meaning_en:"misfortune turns to fortune",example_zh:"否极泰来",example_en:"after misfortune comes fortune",frequency:"low"},
  }},
  "服": { readings: {
    "fú":  { meaning_zh:"衣服，服从",   meaning_en:"clothes, to obey",        example_zh:"衣服",   example_en:"clothing",           frequency:"high"   },
    "fù":  { meaning_zh:"服药（量词）", meaning_en:"dose of medicine",        example_zh:"一服药", example_en:"a dose of medicine", frequency:"medium" },
  }},
  "杠": { readings: {
    "gàng":{ meaning_zh:"杠铃，单杠",   meaning_en:"barbell, horizontal bar", example_zh:"单杠",   example_en:"horizontal bar",     frequency:"medium" },
    "gāng":{ meaning_zh:"杠夫，抬杠",   meaning_en:"to argue (colloq.)",      example_zh:"抬杠",   example_en:"to argue pointlessly",frequency:"medium"},
  }},
  "膏": { readings: {
    "gāo": { meaning_zh:"膏药，牙膏",   meaning_en:"paste, ointment",         example_zh:"牙膏",   example_en:"toothpaste",         frequency:"high"   },
    "gào": { meaning_zh:"膏土，沃土",   meaning_en:"fertile soil",            example_zh:"膏腴",   example_en:"fertile land",       frequency:"low"    },
  }},
  "搁": { readings: {
    "gē":  { meaning_zh:"搁置，搁下",   meaning_en:"to put down, to shelve",  example_zh:"搁置",   example_en:"to shelve",          frequency:"high"   },
    "gé":  { meaning_zh:"搁不住，受不住",meaning_en:"can't bear / withstand", example_zh:"搁不住", example_en:"can't withstand",    frequency:"medium" },
  }},
  "给": { readings: {
    "gěi": { meaning_zh:"给予，送给",   meaning_en:"to give, for",            example_zh:"给你",   example_en:"here you go",        frequency:"high"   },
    "jǐ":  { meaning_zh:"供给，补给",   meaning_en:"to supply, to provide",   example_zh:"供给",   example_en:"to supply",          frequency:"medium" },
  }},
  "更": { readings: {
    "gēng":{ meaning_zh:"更换，更新",   meaning_en:"to change, to update",    example_zh:"更新",   example_en:"to update",          frequency:"high"   },
    "gèng":{ meaning_zh:"更加，更好",   meaning_en:"even more, even better",  example_zh:"更加",   example_en:"even more",          frequency:"high"   },
  }},
  "勾": { readings: {
    "gōu": { meaning_zh:"勾画，勾勒",   meaning_en:"to sketch, to tick off",  example_zh:"勾画",   example_en:"to sketch",          frequency:"high"   },
    "gòu": { meaning_zh:"勾当，勾结",   meaning_en:"shady dealings, to collude",example_zh:"勾结", example_en:"to collude",         frequency:"medium" },
  }},
  "估": { readings: {
    "gū":  { meaning_zh:"估计，估价",   meaning_en:"to estimate",             example_zh:"估计",   example_en:"to estimate",        frequency:"high"   },
    "gù":  { meaning_zh:"估衣（旧衣）", meaning_en:"secondhand clothes",      example_zh:"估衣",   example_en:"secondhand clothes", frequency:"low"    },
  }},
  "骨": { readings: {
    "gǔ":  { meaning_zh:"骨头，骨骼",   meaning_en:"bone, skeleton",          example_zh:"骨头",   example_en:"bone",               frequency:"high"   },
    "gū":  { meaning_zh:"骨朵，花骨朵", meaning_en:"flower bud",              example_zh:"花骨朵", example_en:"flower bud",         frequency:"medium" },
  }},
  "广": { readings: {
    "guǎng":{ meaning_zh:"广大，广泛",  meaning_en:"vast, wide, broad",       example_zh:"广泛",   example_en:"widespread",         frequency:"high"   },
    "ān":  { meaning_zh:"广州（古称）", meaning_en:"archaic form in place names",example_zh:"广州", example_en:"Guangzhou",          frequency:"low"    },
  }},
  "龟": { readings: {
    "guī": { meaning_zh:"乌龟，龟甲",   meaning_en:"turtle, tortoise",        example_zh:"乌龟",   example_en:"turtle",             frequency:"high"   },
    "jūn": { meaning_zh:"龟裂，皲裂",   meaning_en:"to crack (skin/earth)",   example_zh:"龟裂",   example_en:"cracked skin",       frequency:"medium" },
    "qiū": { meaning_zh:"龟兹（古国）", meaning_en:"Kucha (ancient kingdom)", example_zh:"龟兹",   example_en:"Kucha",              frequency:"low"    },
  }},
  "过": { readings: {
    "guò": { meaning_zh:"经过，过去",   meaning_en:"to pass, past",           example_zh:"经过",   example_en:"to pass by",         frequency:"high"   },
    "guō": { meaning_zh:"姓氏（过）",   meaning_en:"Guo (surname)",           example_zh:"过姓",   example_en:"surname Guo",        frequency:"low"    },
  }},
  "哈": { readings: {
    "hā":  { meaning_zh:"哈哈，哈气",   meaning_en:"ha-ha, to breathe out",   example_zh:"哈哈",   example_en:"ha ha",              frequency:"high"   },
    "hǎ":  { meaning_zh:"哈巴狗",       meaning_en:"Pekingese dog",           example_zh:"哈巴狗", example_en:"Pekingese",          frequency:"medium" },
    "hà":  { meaning_zh:"哈（方言惊叹）",meaning_en:"wow (dialect exclamation)",example_zh:"哈，真的",example_en:"wow, really?",    frequency:"low"    },
  }},
  "汗": { readings: {
    "hàn": { meaning_zh:"汗水，出汗",   meaning_en:"sweat, perspiration",     example_zh:"出汗",   example_en:"to sweat",           frequency:"high"   },
    "hán": { meaning_zh:"可汗，大汗",   meaning_en:"Khan (ruler title)",      example_zh:"可汗",   example_en:"Khan",               frequency:"low"    },
  }},
  "号": { readings: {
    "hào": { meaning_zh:"号码，号令",   meaning_en:"number, order",           example_zh:"号码",   example_en:"number",             frequency:"high"   },
    "háo": { meaning_zh:"号叫，嚎啕",   meaning_en:"to howl, to wail",        example_zh:"号叫",   example_en:"to howl",            frequency:"medium" },
  }},
  "喝": { readings: {
    "hē":  { meaning_zh:"喝水，饮用",   meaning_en:"to drink",                example_zh:"喝水",   example_en:"to drink water",     frequency:"high"   },
    "hè":  { meaning_zh:"喝彩，喝止",   meaning_en:"to cheer, to shout at",   example_zh:"喝彩",   example_en:"to cheer",           frequency:"medium" },
  }},
  "荷": { readings: {
    "hé":  { meaning_zh:"荷花，荷叶",   meaning_en:"lotus flower",            example_zh:"荷花",   example_en:"lotus flower",       frequency:"high"   },
    "hè":  { meaning_zh:"负荷，荷载",   meaning_en:"load, to bear a load",    example_zh:"负荷",   example_en:"load",               frequency:"medium" },
  }},
  "会": { readings: {
    "huì": { meaning_zh:"会议，学会",   meaning_en:"meeting, to be able to",  example_zh:"会议",   example_en:"meeting",            frequency:"high"   },
    "kuài":{ meaning_zh:"会计",         meaning_en:"accounting (in 会计)",    example_zh:"会计",   example_en:"accounting",         frequency:"high"   },
  }},
  "混": { readings: {
    "hùn": { meaning_zh:"混合，混乱",   meaning_en:"to mix, chaos",           example_zh:"混合",   example_en:"to mix",             frequency:"high"   },
    "hún": { meaning_zh:"混沌，浑浊",   meaning_en:"murky, muddy (variant)",  example_zh:"混沌",   example_en:"chaos, murky",       frequency:"medium" },
  }},
  "霍": { readings: {
    "huò": { meaning_zh:"霍然，姓霍",   meaning_en:"suddenly; surname Huo",   example_zh:"霍然",   example_en:"suddenly recovered", frequency:"medium" },
    "huō": { meaning_zh:"霍地（方言）", meaning_en:"swiftly (dialect)",       example_zh:"霍地",   example_en:"swiftly",            frequency:"low"    },
  }},
  "缉": { readings: {
    "jī":  { meaning_zh:"缉捕，通缉",   meaning_en:"to arrest, to pursue",    example_zh:"通缉",   example_en:"wanted notice",      frequency:"medium" },
    "qī":  { meaning_zh:"缉鞋（缝制）", meaning_en:"to sew (shoes)",          example_zh:"缉鞋底", example_en:"to sew shoe soles",  frequency:"low"    },
  }},
  "稽": { readings: {
    "jī":  { meaning_zh:"稽查，无稽",   meaning_en:"to check; unfounded",     example_zh:"无稽之谈",example_en:"groundless talk",   frequency:"medium" },
    "qǐ":  { meaning_zh:"滑稽，可笑",   meaning_en:"funny, ridiculous",       example_zh:"滑稽",   example_en:"funny",              frequency:"high"   },
  }},
  "济": { readings: {
    "jì":  { meaning_zh:"经济，救济",   meaning_en:"economy, to aid",         example_zh:"经济",   example_en:"economy",            frequency:"high"   },
    "jǐ":  { meaning_zh:"人才济济",     meaning_en:"full of talent",          example_zh:"济济一堂",example_en:"a gathering of talents",frequency:"low" },
  }},
  "贾": { readings: {
    "jiǎ": { meaning_zh:"姓贾（人名）", meaning_en:"Jia (surname)",           example_zh:"贾宝玉", example_en:"Jia Baoyu",          frequency:"medium" },
    "gǔ":  { meaning_zh:"商贾，行贾",   meaning_en:"merchant, to trade",      example_zh:"商贾",   example_en:"merchants",          frequency:"low"    },
  }},
  "间": { readings: {
    "jiān":{ meaning_zh:"中间，空间",   meaning_en:"between, space",          example_zh:"中间",   example_en:"in between",         frequency:"high"   },
    "jiàn":{ meaning_zh:"间隔，间谍",   meaning_en:"interval, spy",           example_zh:"间谍",   example_en:"spy",                frequency:"high"   },
  }},
  "槛": { readings: {
    "kǎn": { meaning_zh:"门槛，槛阈",   meaning_en:"threshold, doorstep",     example_zh:"门槛",   example_en:"threshold",          frequency:"high"   },
    "jiàn":{ meaning_zh:"槛车，栅栏",   meaning_en:"cage cart, railing",      example_zh:"槛车",   example_en:"cage cart",          frequency:"low"    },
  }},
  "酵": { readings: {
    "jiào":{ meaning_zh:"发酵，酵母",   meaning_en:"fermentation, yeast",     example_zh:"发酵",   example_en:"to ferment",         frequency:"high"   },
    "xiào":{ meaning_zh:"酵（古音）",   meaning_en:"archaic reading of 酵",   example_zh:"酵素",   example_en:"enzyme",             frequency:"low"    },
  }},
  "藉": { readings: {
    "jiè": { meaning_zh:"凭藉，慰藉",   meaning_en:"to rely on, to console",  example_zh:"慰藉",   example_en:"to console",         frequency:"medium" },
    "jí":  { meaning_zh:"狼藉，杂乱",   meaning_en:"in disorder, scattered",  example_zh:"狼藉",   example_en:"in a mess",          frequency:"medium" },
  }},
  "经": { readings: {
    "jīng":{ meaning_zh:"经过，经济",   meaning_en:"to pass through, classic",example_zh:"经验",   example_en:"experience",         frequency:"high"   },
    "jìng":{ meaning_zh:"经典（古音）", meaning_en:"archaic reading; sutra",  example_zh:"经文",   example_en:"scripture",          frequency:"low"    },
  }},
  "颈": { readings: {
    "jǐng":{ meaning_zh:"脖颈，颈部",   meaning_en:"neck",                    example_zh:"脖颈",   example_en:"neck",               frequency:"high"   },
    "gěng":{ meaning_zh:"颈椎（口语）", meaning_en:"neck (in certain dialects)",example_zh:"项颈", example_en:"nape of the neck",   frequency:"low"    },
  }},
  "句": { readings: {
    "jù":  { meaning_zh:"句子，语句",   meaning_en:"sentence, phrase",        example_zh:"句子",   example_en:"sentence",           frequency:"high"   },
    "gōu": { meaning_zh:"句读，句芒",   meaning_en:"punctuation (archaic)",   example_zh:"句读",   example_en:"punctuation marks",  frequency:"low"    },
  }},
  "据": { readings: {
    "jù":  { meaning_zh:"根据，证据",   meaning_en:"basis, evidence",         example_zh:"根据",   example_en:"basis",              frequency:"high"   },
    "jū":  { meaning_zh:"拮据，窘迫",   meaning_en:"hard up, short of money", example_zh:"拮据",   example_en:"short of money",     frequency:"medium" },
  }},
  "倔": { readings: {
    "jué": { meaning_zh:"倔强，固执",   meaning_en:"stubborn, tenacious",     example_zh:"倔强",   example_en:"stubborn",           frequency:"high"   },
    "juè": { meaning_zh:"倔头倔脑",     meaning_en:"blunt and stubborn",      example_zh:"倔头倔脑",example_en:"bull-headed",       frequency:"medium" },
  }},
  "卡": { readings: {
    "kǎ":  { meaning_zh:"卡片，信用卡", meaning_en:"card, to get stuck",      example_zh:"卡片",   example_en:"card",               frequency:"high"   },
    "qiǎ": { meaning_zh:"卡住，关卡",   meaning_en:"checkpoint, to jam",      example_zh:"关卡",   example_en:"checkpoint",         frequency:"high"   },
  }},
  "扛": { readings: {
    "káng":{ meaning_zh:"扛起，肩扛",   meaning_en:"to carry on shoulder",    example_zh:"扛起",   example_en:"to shoulder",        frequency:"high"   },
    "gāng":{ meaning_zh:"力能扛鼎",     meaning_en:"to lift a tripod (idiom)",example_zh:"扛鼎",   example_en:"to lift a cauldron", frequency:"low"    },
  }},
  "溃": { readings: {
    "kuì": { meaning_zh:"溃败，溃烂",   meaning_en:"to collapse, to fester",  example_zh:"溃败",   example_en:"to be defeated",     frequency:"high"   },
    "huì": { meaning_zh:"溃（水名）",   meaning_en:"Hui (river name)",        example_zh:"溃水",   example_en:"Hui River",          frequency:"low"    },
  }},
  "拉": { readings: {
    "lā":  { meaning_zh:"拉开，拉住",   meaning_en:"to pull, to drag",        example_zh:"拉开",   example_en:"to pull open",       frequency:"high"   },
    "lá":  { meaning_zh:"拉口子，划破", meaning_en:"to cut, to slash (colloq.)",example_zh:"拉口子",example_en:"to make a cut",     frequency:"medium" },
  }},
  "腊": { readings: {
    "là":  { meaning_zh:"腊月，腊肉",   meaning_en:"twelfth lunar month, cured meat",example_zh:"腊肉",example_en:"cured meat",      frequency:"high"   },
    "xī":  { meaning_zh:"腊（古国名）", meaning_en:"Xi (ancient state name)", example_zh:"腊国",   example_en:"ancient state of Xi",frequency:"low"    },
  }},
  "烙": { readings: {
    "lào": { meaning_zh:"烙印，烙饼",   meaning_en:"brand, to bake on griddle",example_zh:"烙印",  example_en:"brand mark",         frequency:"high"   },
    "luò": { meaning_zh:"炮烙（酷刑）", meaning_en:"burning torture (archaic)",example_zh:"炮烙",  example_en:"burning punishment", frequency:"low"    },
  }},
  "勒": { readings: {
    "lè":  { meaning_zh:"勒令，勒索",   meaning_en:"to compel, to extort",    example_zh:"勒索",   example_en:"to extort",          frequency:"high"   },
    "lēi": { meaning_zh:"勒紧，捆绑",   meaning_en:"to tie tight, to strap",  example_zh:"勒紧",   example_en:"to tighten a strap", frequency:"medium" },
  }},
  "棱": { readings: {
    "léng":{ meaning_zh:"棱角，棱形",   meaning_en:"edge, corner, ridge",     example_zh:"棱角",   example_en:"edges and corners",  frequency:"high"   },
    "lēng":{ meaning_zh:"棱（方言）",   meaning_en:"dialect variant",         example_zh:"棱子",   example_en:"edge (dialect)",     frequency:"low"    },
    "líng":{ meaning_zh:"棱（古地名）", meaning_en:"archaic place name",      example_zh:"发棱",   example_en:"archaic usage",      frequency:"low"    },
  }},
  "撩": { readings: {
    "liāo":{ meaning_zh:"撩起，撩开",   meaning_en:"to lift up, to tease",    example_zh:"撩起",   example_en:"to lift up",         frequency:"high"   },
    "liáo":{ meaning_zh:"撩拨，撩人",   meaning_en:"to provoke, to flirt",    example_zh:"撩拨",   example_en:"to tease",           frequency:"high"   },
  }},
  "裂": { readings: {
    "liè": { meaning_zh:"裂开，分裂",   meaning_en:"to split, to crack",      example_zh:"分裂",   example_en:"to split",           frequency:"high"   },
    "liě": { meaning_zh:"咧嘴（方言）", meaning_en:"to grin (dialect usage)", example_zh:"裂嘴",   example_en:"to grin wide",       frequency:"low"    },
  }},
  "淋": { readings: {
    "lín": { meaning_zh:"淋雨，淋浴",   meaning_en:"to get rained on, shower",example_zh:"淋雨",   example_en:"to get rained on",   frequency:"high"   },
    "lìn": { meaning_zh:"淋漓，淋病",   meaning_en:"dripping, gonorrhea",     example_zh:"淋漓",   example_en:"dripping wet",       frequency:"medium" },
  }},
  "溜": { readings: {
    "liū": { meaning_zh:"溜走，溜冰",   meaning_en:"to sneak away, to skate", example_zh:"溜走",   example_en:"to sneak off",       frequency:"high"   },
    "liù": { meaning_zh:"一溜儿，成排", meaning_en:"a row of (measure word)", example_zh:"一溜儿", example_en:"a row of",           frequency:"medium" },
  }},
  "搂": { readings: {
    "lǒu": { meaning_zh:"搂抱，搂住",   meaning_en:"to hug, to embrace",      example_zh:"搂抱",   example_en:"to hug",             frequency:"high"   },
    "lōu": { meaning_zh:"搂钱，搂取",   meaning_en:"to rake in (money)",      example_zh:"搂钱",   example_en:"to rake in money",   frequency:"medium" },
  }},
  "陆": { readings: {
    "lù":  { meaning_zh:"陆地，大陆",   meaning_en:"land, continent",         example_zh:"大陆",   example_en:"mainland",           frequency:"high"   },
    "liù": { meaning_zh:"陆（数字六）", meaning_en:"six (formal/legal form)", example_zh:"陆续",   example_en:"one after another",  frequency:"medium" },
  }},
  "抹": { readings: {
    "mǒ":  { meaning_zh:"抹去，涂抹",   meaning_en:"to wipe, to spread",      example_zh:"抹去",   example_en:"to wipe away",       frequency:"high"   },
    "mò":  { meaning_zh:"抹墙，粉刷",   meaning_en:"to plaster, to coat",     example_zh:"抹墙",   example_en:"to plaster a wall",  frequency:"medium" },
    "mā":  { meaning_zh:"抹布，擦布",   meaning_en:"rag, cleaning cloth",     example_zh:"抹布",   example_en:"rag / cloth",        frequency:"high"   },
  }},
  "埋": { readings: {
    "mái": { meaning_zh:"埋葬，埋藏",   meaning_en:"to bury, to hide",        example_zh:"埋葬",   example_en:"to bury",            frequency:"high"   },
    "mán": { meaning_zh:"埋怨，抱怨",   meaning_en:"to complain, to blame",   example_zh:"埋怨",   example_en:"to complain",        frequency:"high"   },
  }},
  "蔓": { readings: {
    "màn": { meaning_zh:"蔓延，蔓草",   meaning_en:"to spread, trailing plant",example_zh:"蔓延",  example_en:"to spread",          frequency:"high"   },
    "wàn": { meaning_zh:"瓜蔓，藤蔓",   meaning_en:"vine, tendril",           example_zh:"藤蔓",   example_en:"vine",               frequency:"medium" },
    "mán": { meaning_zh:"蔓菁（蔬菜）", meaning_en:"turnip",                  example_zh:"蔓菁",   example_en:"turnip",             frequency:"low"    },
  }},
  "闷": { readings: {
    "mēn": { meaning_zh:"闷热，闷住",   meaning_en:"stuffy, to cover tightly",example_zh:"闷热",   example_en:"muggy",              frequency:"high"   },
    "mèn": { meaning_zh:"烦闷，郁闷",   meaning_en:"bored, depressed",        example_zh:"郁闷",   example_en:"depressed",          frequency:"high"   },
  }},
  "沐": { readings: {
    "mù":  { meaning_zh:"沐浴，沐恩",   meaning_en:"to bathe, to receive favor",example_zh:"沐浴",  example_en:"to bathe",           frequency:"medium" },
    "mò":  { meaning_zh:"沐（古地名）", meaning_en:"Mo (ancient place name)", example_zh:"沐邑",   example_en:"ancient place name", frequency:"low"    },
  }},
  "泥": { readings: {
    "ní":  { meaning_zh:"泥土，泥巴",   meaning_en:"mud, clay",               example_zh:"泥土",   example_en:"soil / mud",         frequency:"high"   },
    "nì":  { meaning_zh:"拘泥，泥古",   meaning_en:"to be rigid, to cling to",example_zh:"拘泥",   example_en:"to be rigid",        frequency:"medium" },
  }},
  "弄": { readings: {
    "nòng":{ meaning_zh:"弄清，摆弄",   meaning_en:"to handle, to figure out",example_zh:"弄清",   example_en:"to clarify",         frequency:"high"   },
    "lòng":{ meaning_zh:"里弄，弄堂",   meaning_en:"alley, lane",             example_zh:"弄堂",   example_en:"alley (Shanghai)",   frequency:"medium" },
  }},
  "拍": { readings: {
    "pāi": { meaning_zh:"拍手，拍照",   meaning_en:"to clap, to take photo",  example_zh:"拍照",   example_en:"to take a photo",    frequency:"high"   },
    "pò":  { meaning_zh:"拍（古音）",   meaning_en:"archaic reading",         example_zh:"迫拍",   example_en:"archaic usage",      frequency:"low"    },
  }},
  "胖": { readings: {
    "pàng":{ meaning_zh:"胖子，肥胖",   meaning_en:"fat, overweight",         example_zh:"胖子",   example_en:"fat person",         frequency:"high"   },
    "pán": { meaning_zh:"心宽体胖",     meaning_en:"content and plump (idiom)",example_zh:"心宽体胖",example_en:"carefree and plump",frequency:"low"   },
  }},
  "刨": { readings: {
    "páo": { meaning_zh:"刨坑，刨土",   meaning_en:"to dig, to scrape",       example_zh:"刨坑",   example_en:"to dig a hole",      frequency:"medium" },
    "bào": { meaning_zh:"刨子，刨木",   meaning_en:"plane (tool), to plane",  example_zh:"刨子",   example_en:"woodworking plane",  frequency:"medium" },
  }},
  "片": { readings: {
    "piàn":{ meaning_zh:"片子，照片",   meaning_en:"piece, photo",            example_zh:"照片",   example_en:"photo",              frequency:"high"   },
    "piān":{ meaning_zh:"片（量词）",   meaning_en:"piece/slice (measure word)",example_zh:"一片地",example_en:"a piece of land",   frequency:"medium" },
  }},
  "撇": { readings: {
    "piē": { meaning_zh:"撇开，撇嘴",   meaning_en:"to cast aside, to curl lip",example_zh:"撇嘴", example_en:"to curl one's lip",  frequency:"medium" },
    "piě": { meaning_zh:"撇（笔画）",   meaning_en:"left-falling stroke",     example_zh:"一撇",   example_en:"a left-falling stroke",frequency:"medium"},
  }},
  "迫": { readings: {
    "pò":  { meaning_zh:"迫切，被迫",   meaning_en:"urgent, to be forced",    example_zh:"被迫",   example_en:"to be forced",       frequency:"high"   },
    "pǎi": { meaning_zh:"迫击炮",       meaning_en:"mortar (in 迫击炮)",      example_zh:"迫击炮", example_en:"mortar cannon",      frequency:"medium" },
  }},
  "栖": { readings: {
    "qī":  { meaning_zh:"栖息，两栖",   meaning_en:"to roost, amphibious",    example_zh:"栖息",   example_en:"to roost",           frequency:"medium" },
    "xī":  { meaning_zh:"栖（同息）",   meaning_en:"variant of 息 (rest)",    example_zh:"栖止",   example_en:"to rest/perch",      frequency:"low"    },
  }},
  "券": { readings: {
    "quàn":{ meaning_zh:"票券，优惠券", meaning_en:"ticket, coupon",          example_zh:"优惠券", example_en:"coupon",             frequency:"high"   },
    "xuàn":{ meaning_zh:"拱券，券洞",   meaning_en:"arch, vault (architecture)",example_zh:"拱券", example_en:"arch",               frequency:"low"    },
  }},
  "色": { readings: {
    "sè":  { meaning_zh:"颜色，色彩",   meaning_en:"color, hue",              example_zh:"颜色",   example_en:"color",              frequency:"high"   },
    "shǎi":{ meaning_zh:"掉色，褪色",   meaning_en:"to fade (colloq.)",       example_zh:"掉色",   example_en:"to fade",            frequency:"medium" },
  }},
  "厦": { readings: {
    "shà": { meaning_zh:"高楼大厦",     meaning_en:"tall building",           example_zh:"大厦",   example_en:"mansion / tower",    frequency:"high"   },
    "xià": { meaning_zh:"厦门",         meaning_en:"Xiamen (city name)",      example_zh:"厦门",   example_en:"Xiamen",             frequency:"high"   },
  }},
  "遂": { readings: {
    "suì": { meaning_zh:"遂愿，顺遂",   meaning_en:"to fulfill, to succeed",  example_zh:"遂愿",   example_en:"to fulfill a wish",  frequency:"medium" },
    "suí": { meaning_zh:"半身不遂",     meaning_en:"paralysis (in 半身不遂)", example_zh:"半身不遂",example_en:"hemiplegia",        frequency:"low"    },
  }},
  "塔": { readings: {
    "tǎ":  { meaning_zh:"宝塔，铁塔",   meaning_en:"pagoda, tower",           example_zh:"宝塔",   example_en:"pagoda",             frequency:"high"   },
    "dá":  { meaning_zh:"佛塔（梵音）", meaning_en:"stupa (Sanskrit origin)", example_zh:"刹那",   example_en:"stupa",              frequency:"low"    },
  }},
  "同": { readings: {
    "tóng":{ meaning_zh:"相同，同学",   meaning_en:"same, classmate",         example_zh:"同学",   example_en:"classmate",          frequency:"high"   },
    "tòng":{ meaning_zh:"胡同，巷道",   meaning_en:"hutong, alley",           example_zh:"胡同",   example_en:"hutong",             frequency:"medium" },
  }},
  "拓": { readings: {
    "tuò": { meaning_zh:"开拓，拓展",   meaning_en:"to pioneer, to expand",   example_zh:"开拓",   example_en:"to pioneer",         frequency:"high"   },
    "tà":  { meaning_zh:"拓印，拓片",   meaning_en:"rubbing, stone-print",    example_zh:"拓印",   example_en:"stone rubbing",      frequency:"medium" },
  }},
  "瓦": { readings: {
    "wǎ":  { meaning_zh:"瓦片，砖瓦",   meaning_en:"tile, roof tile",         example_zh:"瓦片",   example_en:"roof tile",          frequency:"high"   },
    "wà":  { meaning_zh:"瓦刀（瓦工）", meaning_en:"trowel (masonry tool)",   example_zh:"瓦刀",   example_en:"trowel",             frequency:"low"    },
  }},
  "委": { readings: {
    "wěi": { meaning_zh:"委托，委员",   meaning_en:"to entrust, committee",   example_zh:"委托",   example_en:"to entrust",         frequency:"high"   },
    "wēi": { meaning_zh:"委蛇，敷衍",   meaning_en:"to act perfunctorily",    example_zh:"虚与委蛇",example_en:"to go through the motions",frequency:"low"},
  }},
  "吓": { readings: {
    "xià": { meaning_zh:"吓到，惊吓",   meaning_en:"to frighten, to scare",   example_zh:"吓到",   example_en:"to scare",           frequency:"high"   },
    "hè":  { meaning_zh:"恐吓，威吓",   meaning_en:"to intimidate, to threaten",example_zh:"恐吓", example_en:"to threaten",        frequency:"medium" },
  }},
  "肖": { readings: {
    "xiāo":{ meaning_zh:"不肖，无肖",   meaning_en:"unworthy, unlike parent", example_zh:"不肖",   example_en:"unworthy",           frequency:"low"    },
    "xiào":{ meaning_zh:"肖像，相肖",   meaning_en:"portrait, to resemble",   example_zh:"肖像",   example_en:"portrait",           frequency:"medium" },
  }},
  "邪": { readings: {
    "xié": { meaning_zh:"邪恶，邪气",   meaning_en:"evil, wicked",            example_zh:"邪恶",   example_en:"evil",               frequency:"high"   },
    "yá":  { meaning_zh:"莫邪（古剑）", meaning_en:"Moye (famous sword)",     example_zh:"干将莫邪",example_en:"famous swords",     frequency:"low"    },
  }},
  "压": { readings: {
    "yā":  { meaning_zh:"压力，压制",   meaning_en:"pressure, to suppress",   example_zh:"压力",   example_en:"pressure",           frequency:"high"   },
    "yà":  { meaning_zh:"压根儿",       meaning_en:"at all, simply (colloq.)",example_zh:"压根儿", example_en:"not at all",         frequency:"medium" },
  }},
  "燕": { readings: {
    "yàn": { meaning_zh:"燕子，家燕",   meaning_en:"swallow (bird)",          example_zh:"燕子",   example_en:"swallow (bird)",     frequency:"high"   },
    "yān": { meaning_zh:"燕国，燕京",   meaning_en:"Yan state, old name for Beijing",example_zh:"燕京",example_en:"Yanjing (Beijing)", frequency:"medium"},
  }},
  "耶": { readings: {
    "yē":  { meaning_zh:"耶稣，语气词", meaning_en:"Jesus; exclamation particle",example_zh:"耶稣", example_en:"Jesus",              frequency:"high"   },
    "yé":  { meaning_zh:"耶耶（方言）", meaning_en:"dad (dialect)",           example_zh:"耶耶",   example_en:"dad (dialect)",      frequency:"low"    },
  }},
  "叶": { readings: {
    "yè":  { meaning_zh:"叶子，树叶",   meaning_en:"leaf",                    example_zh:"树叶",   example_en:"leaf",               frequency:"high"   },
    "xié": { meaning_zh:"叶韵，叶音",   meaning_en:"rhyme reading (classical)",example_zh:"叶韵",  example_en:"rhyme reading",      frequency:"low"    },
  }},
  "遗": { readings: {
    "yí":  { meaning_zh:"遗留，遗产",   meaning_en:"to leave behind, heritage",example_zh:"遗产",  example_en:"heritage",           frequency:"high"   },
    "wèi": { meaning_zh:"遗赠，馈赠",   meaning_en:"to give as gift (literary)",example_zh:"遗赠", example_en:"to bequeath",        frequency:"low"    },
  }},
  "已": { readings: {
    "yǐ":  { meaning_zh:"已经，已然",   meaning_en:"already, past",           example_zh:"已经",   example_en:"already",            frequency:"high"   },
    "yī":  { meaning_zh:"已（古音）",   meaning_en:"archaic reading of 已",   example_zh:"不得已", example_en:"have no choice",     frequency:"low"    },
  }},
  "佣": { readings: {
    "yōng":{ meaning_zh:"雇佣，佣人",   meaning_en:"to hire, servant",        example_zh:"佣人",   example_en:"servant",            frequency:"high"   },
    "yòng":{ meaning_zh:"佣金，回扣",   meaning_en:"commission, brokerage",   example_zh:"佣金",   example_en:"commission",         frequency:"medium" },
  }},
  "有": { readings: {
    "yǒu": { meaning_zh:"有的，拥有",   meaning_en:"to have, there is",       example_zh:"有用",   example_en:"useful",             frequency:"high"   },
    "yòu": { meaning_zh:"又（古通）",   meaning_en:"archaic variant of 又",   example_zh:"有若",   example_en:"archaic usage",      frequency:"low"    },
  }},
  "予": { readings: {
    "yǔ":  { meaning_zh:"给予，赠予",   meaning_en:"to give, to bestow",      example_zh:"给予",   example_en:"to give",            frequency:"high"   },
    "yú":  { meaning_zh:"我（文言）",   meaning_en:"I/me (classical Chinese)",example_zh:"予以",   example_en:"to give / grant",    frequency:"medium" },
  }},
  "语": { readings: {
    "yǔ":  { meaning_zh:"语言，汉语",   meaning_en:"language, speech",        example_zh:"语言",   example_en:"language",           frequency:"high"   },
    "yù":  { meaning_zh:"不语，默语",   meaning_en:"to speak to (literary)",  example_zh:"默默不语",example_en:"silent",            frequency:"low"    },
  }},
  "晕": { readings: {
    "yūn": { meaning_zh:"头晕，晕倒",   meaning_en:"dizzy, to faint",         example_zh:"头晕",   example_en:"dizziness",          frequency:"high"   },
    "yùn": { meaning_zh:"光晕，月晕",   meaning_en:"halo, aura",              example_zh:"月晕",   example_en:"moon halo",          frequency:"medium" },
  }},
  "脏": { readings: {
    "zāng":{ meaning_zh:"脏乱，污脏",   meaning_en:"dirty, filthy",           example_zh:"脏乱",   example_en:"dirty and messy",    frequency:"high"   },
    "zàng":{ meaning_zh:"五脏，内脏",   meaning_en:"internal organs",         example_zh:"内脏",   example_en:"internal organs",    frequency:"high"   },
  }},
  "凿": { readings: {
    "záo": { meaning_zh:"凿子，凿洞",   meaning_en:"chisel, to chisel",       example_zh:"凿子",   example_en:"chisel",             frequency:"medium" },
    "zuò": { meaning_zh:"凿（古音）",   meaning_en:"archaic reading",         example_zh:"凿凿",   example_en:"clearly evident",    frequency:"low"    },
  }},
  "择": { readings: {
    "zé":  { meaning_zh:"选择，择优",   meaning_en:"to choose, to select",    example_zh:"选择",   example_en:"to choose",          frequency:"high"   },
    "zhái":{ meaning_zh:"择菜，摘拣",   meaning_en:"to pick, to sort (food)", example_zh:"择菜",   example_en:"to pick vegetables", frequency:"medium" },
  }},
  "正": { readings: {
    "zhèng":{ meaning_zh:"正确，正式",  meaning_en:"correct, formal",         example_zh:"正确",   example_en:"correct",            frequency:"high"   },
    "zhēng":{ meaning_zh:"正月，正旦",  meaning_en:"first lunar month",       example_zh:"正月",   example_en:"first lunar month",  frequency:"medium" },
  }},
  "汁": { readings: {
    "zhī": { meaning_zh:"果汁，汁液",   meaning_en:"juice, liquid",           example_zh:"果汁",   example_en:"fruit juice",        frequency:"high"   },
    "zhí": { meaning_zh:"汁（古音）",   meaning_en:"archaic reading",         example_zh:"汁液",   example_en:"juice / sap",        frequency:"low"    },
  }},
  "轴": { readings: {
    "zhóu":{ meaning_zh:"轴心，车轴",   meaning_en:"axis, axle",              example_zh:"轴心",   example_en:"axis",               frequency:"high"   },
    "zhòu":{ meaning_zh:"画轴，装裱",   meaning_en:"scroll, mounted painting",example_zh:"画轴",   example_en:"scroll",             frequency:"medium" },
  }},
  "爪": { readings: {
    "zhǎo":{ meaning_zh:"爪子，指爪",   meaning_en:"claw, talon",             example_zh:"爪子",   example_en:"claw",               frequency:"high"   },
    "zhuǎ":{ meaning_zh:"爪（口语）",   meaning_en:"claw (colloquial)",       example_zh:"猫爪",   example_en:"cat's paw",          frequency:"high"   },
  }},
  "转": { readings: {
    "zhuǎn":{ meaning_zh:"转变，旋转",  meaning_en:"to turn, to change",      example_zh:"转变",   example_en:"to transform",       frequency:"high"   },
    "zhuàn":{ meaning_zh:"转圈，打转",  meaning_en:"to spin, to revolve",     example_zh:"打转",   example_en:"to spin around",     frequency:"high"   },
  }},
  "拽": { readings: {
    "zhuài":{ meaning_zh:"拽住，拖拽",  meaning_en:"to drag, to pull",        example_zh:"拖拽",   example_en:"to drag",            frequency:"high"   },
    "zhuāi":{ meaning_zh:"拽开（方言）",meaning_en:"to fling (dialect)",      example_zh:"拽出去", example_en:"to fling out",       frequency:"medium" },
    "yè":  { meaning_zh:"拽（古字）",   meaning_en:"archaic variant",         example_zh:"拽拉",   example_en:"to drag/pull",       frequency:"low"    },
  }},
  "作": { readings: {
    "zuò": { meaning_zh:"工作，制作",   meaning_en:"to work, to make",        example_zh:"工作",   example_en:"work",               frequency:"high"   },
    "zuō": { meaning_zh:"作坊，小作",   meaning_en:"workshop (colloq.)",      example_zh:"作坊",   example_en:"workshop",           frequency:"medium" },
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
