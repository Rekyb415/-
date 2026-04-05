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
