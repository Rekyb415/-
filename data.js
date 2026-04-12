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
  {hanzi:"卷",pinyin:"juǎn/juàn",level:"四级"},
  {hanzi:"藏",pinyin:"cáng/zàng",level:"六级"},
  {hanzi:"舍",pinyin:"shě/shè",level:"二级"},
  {hanzi:"调",pinyin:"tiáo/diào",level:"三级"},
  {hanzi:"曾",pinyin:"céng/zēng",level:"三级"},
  {hanzi:"朝",pinyin:"cháo/zhāo",level:"三级"},
  {hanzi:"强",pinyin:"qiáng/qiǎng/jiàng",level:"三级"},
  {hanzi:"切",pinyin:"qiē/qiè",level:"三级"},
  {hanzi:"散",pinyin:"sàn/sǎn",level:"三级"},
  {hanzi:"血",pinyin:"xuè/xiě",level:"三级"},
  {hanzi:"传",pinyin:"chuán/zhuàn",level:"三级"},
  {hanzi:"度",pinyin:"dù/duó",level:"二级"},
  {hanzi:"恶",pinyin:"è/wù/ě",level:"三级"},
  {hanzi:"薄",pinyin:"báo/bó/bò",level:"四级"},
  {hanzi:"折",pinyin:"zhē/zhé/shé",level:"四级"},
  {hanzi:"冲",pinyin:"chōng/chòng",level:"四级"},
  {hanzi:"单",pinyin:"dān/shàn/chán",level:"二级"},
  {hanzi:"担",pinyin:"dān/dàn",level:"四级"},
  {hanzi:"降",pinyin:"jiàng/xiáng",level:"四级"},
  {hanzi:"系",pinyin:"xì/jì",level:"一级"},
  {hanzi:"磨",pinyin:"mó/mò",level:"六级"},
  {hanzi:"宁",pinyin:"níng/nìng",level:"四级"},
  {hanzi:"铺",pinyin:"pū/pù",level:"四级"},
  {hanzi:"曲",pinyin:"qū/qǔ",level:"四级"},
  {hanzi:"塞",pinyin:"sāi/sài/sè",level:"四级"},
  {hanzi:"省",pinyin:"shěng/xǐng",level:"二级"},
  {hanzi:"泊",pinyin:"bó/pō",level:"五级"},
  {hanzi:"参",pinyin:"cān/shēn/cēn",level:"二级"},
  {hanzi:"盛",pinyin:"shèng/chéng",level:"六级"},
  {hanzi:"乘",pinyin:"chéng/shèng",level:"五级"},
  {hanzi:"斗",pinyin:"dǒu/dòu",level:"五级"},
  {hanzi:"杆",pinyin:"gān/gǎn",level:"五级"},
  {hanzi:"冠",pinyin:"guān/guàn",level:"五级"},
  {hanzi:"划",pinyin:"huá/huà",level:"二级"},
  {hanzi:"假",pinyin:"jiǎ/jià",level:"一级"},
  {hanzi:"壳",pinyin:"ké/qiào",level:"五级"},
  {hanzi:"露",pinyin:"lù/lòu",level:"六级"},
  {hanzi:"模",pinyin:"mó/mú",level:"四级"},
  {hanzi:"喷",pinyin:"pēn/pèn",level:"五级"},
  {hanzi:"屏",pinyin:"píng/bǐng",level:"六级"},
  {hanzi:"悄",pinyin:"qiāo/qiǎo",level:"五级"},
  {hanzi:"宿",pinyin:"sù/xiǔ/xiù",level:"五级"},
  {hanzi:"挑",pinyin:"tiāo/tiǎo",level:"四级"},
  {hanzi:"吐",pinyin:"tǔ/tù",level:"五级"},
  {hanzi:"挨",pinyin:"āi/ái",level:"六级"},
  {hanzi:"暴",pinyin:"bào/pù",level:"六级"},
  {hanzi:"奔",pinyin:"bēn/bèn",level:"六级"},
  {hanzi:"扁",pinyin:"biǎn/piān",level:"六级"},
  {hanzi:"卜",pinyin:"bǔ/bo",level:"六级"},
  {hanzi:"臭",pinyin:"chòu/xiù",level:"五级"},
  {hanzi:"答",pinyin:"dā/dá",level:"一级"},
  {hanzi:"弹",pinyin:"dàn/tán",level:"六级"},
  {hanzi:"钉",pinyin:"dīng/dìng",level:"六级"},
  {hanzi:"缝",pinyin:"féng/fèng",level:"六级"},
  {hanzi:"横",pinyin:"héng/hèng",level:"六级"},
  {hanzi:"哄",pinyin:"hōng/hǒng/hòng",level:"六级"},
  {hanzi:"华",pinyin:"huá/huà",level:"六级"},
  {hanzi:"晃",pinyin:"huǎng/huàng",level:"六级"},
  {hanzi:"夹",pinyin:"jiā/jiá/ga",level:"六级"},
  {hanzi:"监",pinyin:"jiān/jiàn",level:"六级"},
  {hanzi:"角",pinyin:"jiǎo/jué",level:"二级"},
  {hanzi:"结",pinyin:"jiē/jié",level:"二级"},
  {hanzi:"解",pinyin:"jiě/jiè/xiè",level:"三级"},
  {hanzi:"禁",pinyin:"jīn/jìn",level:"六级"},
  {hanzi:"看",pinyin:"kān/kàn",level:"一级"},
  {hanzi:"空",pinyin:"kōng/kòng",level:"二级"},
  {hanzi:"累",pinyin:"léi/lěi/lèi",level:"一级"},
  {hanzi:"量",pinyin:"liáng/liàng",level:"六级"},
  {hanzi:"笼",pinyin:"lóng/lǒng",level:"六级"},
  {hanzi:"绿",pinyin:"lǜ/lù",level:"二级"},
  {hanzi:"论",pinyin:"lùn/lún",level:"二级"},
  {hanzi:"落",pinyin:"luò/lào/là",level:"三级"},
  {hanzi:"脉",pinyin:"mài/mò",level:"六级"},
  {hanzi:"泡",pinyin:"pào/pāo",level:"六级"},
  {hanzi:"炮",pinyin:"pào/páo/bāo",level:"六级"},
  {hanzi:"漂",pinyin:"piāo/piǎo/piào",level:"二级"},
  {hanzi:"奇",pinyin:"qí/jī",level:"六级"},
  {hanzi:"丧",pinyin:"sāng/sàng",level:"六级"},
  {hanzi:"扇",pinyin:"shān/shàn",level:"六级"},
  {hanzi:"石",pinyin:"shí/dàn",level:"三级"},
  {hanzi:"识",pinyin:"shí/zhì",level:"一级"},
  {hanzi:"似",pinyin:"sì/shì",level:"三级"},
  {hanzi:"踏",pinyin:"tā/tà",level:"六级"},
  {hanzi:"帖",pinyin:"tiē/tiě/tiè",level:"六级"},
  {hanzi:"校",pinyin:"xiào/jiào",level:"一级"},
  {hanzi:"咽",pinyin:"yān/yàn/yè",level:"六级"},
  {hanzi:"饮",pinyin:"yǐn/yìn",level:"六级"},
  {hanzi:"载",pinyin:"zǎi/zài",level:"六级"},
  {hanzi:"扎",pinyin:"zhā/zā/zhá",level:"六级"},
  {hanzi:"占",pinyin:"zhān/zhàn",level:"二级"},
  {hanzi:"涨",pinyin:"zhǎng/zhàng",level:"六级"},
  {hanzi:"钻",pinyin:"zuān/zuàn",level:"六级"},
  {hanzi:"扒",pinyin:"bā/pá",level:"七-九级"},
  {hanzi:"柏",pinyin:"bǎi/bó/bò",level:"七-九级"},
  {hanzi:"膀",pinyin:"bǎng/páng/pāng",level:"七-九级"},
  {hanzi:"堡",pinyin:"bǎo/pù/bǔ",level:"七-九级"},
  {hanzi:"背",pinyin:"bēi/bèi",level:"二级"},
  {hanzi:"辟",pinyin:"bì/pì",level:"七-九级"},
  {hanzi:"朴",pinyin:"pǔ/piáo/pò/pō",level:"七-九级"},
  {hanzi:"戚",pinyin:"qī/qì",level:"七-九级"},
  {hanzi:"纤",pinyin:"xiān/qiàn",level:"七-九级"},
  {hanzi:"翘",pinyin:"qiáo/qiào",level:"七-九级"},
  {hanzi:"亲",pinyin:"qīn/qìng",level:"三级"},
  {hanzi:"嚷",pinyin:"rǎng/rāng",level:"七-九级"},
  {hanzi:"任",pinyin:"rén/rèn",level:"七-九级"},
  {hanzi:"刹",pinyin:"chà/shā",level:"七-九级"},
  {hanzi:"禅",pinyin:"chán/shàn",level:"七-九级"},
  {hanzi:"匙",pinyin:"chí/shi",level:"七-九级"},
  {hanzi:"畜",pinyin:"chù/xù",level:"七-九级"},
  {hanzi:"揣",pinyin:"chuāi/chuǎi/chuài",level:"七-九级"},
  {hanzi:"创",pinyin:"chuàng/chuāng",level:"三级"},
  {hanzi:"撮",pinyin:"cuō/zuǒ",level:"七-九级"},
  {hanzi:"坊",pinyin:"fāng/fáng",level:"七-九级"},
  {hanzi:"分",pinyin:"fēn/fèn",level:"一级"},
  {hanzi:"否",pinyin:"fǒu/pǐ",level:"七-九级"},
  {hanzi:"服",pinyin:"fú/fù",level:"一级"},
  {hanzi:"杠",pinyin:"gàng/gāng",level:"七-九级"},
  {hanzi:"膏",pinyin:"gāo/gào",level:"七-九级"},
  {hanzi:"搁",pinyin:"gē/gé",level:"七-九级"},
  {hanzi:"给",pinyin:"gěi/jǐ",level:"一级"},
  {hanzi:"更",pinyin:"gēng/gèng",level:"二级"},
  {hanzi:"勾",pinyin:"gōu/gòu",level:"七-九级"},
  {hanzi:"估",pinyin:"gū/gù",level:"五级"},
  {hanzi:"骨",pinyin:"gǔ/gū",level:"四级"},
  {hanzi:"广",pinyin:"guǎng/ān",level:"二级"},
  {hanzi:"龟",pinyin:"guī/jūn/qiū",level:"七-九级"},
  {hanzi:"过",pinyin:"guò/guō",level:"一级"},
  {hanzi:"哈",pinyin:"hā/hǎ/hà",level:"三级"},
  {hanzi:"汗",pinyin:"hán/hàn",level:"五级"},
  {hanzi:"号",pinyin:"háo/hào",level:"一级"},
  {hanzi:"喝",pinyin:"hē/hè",level:"一级"},
  {hanzi:"荷",pinyin:"hé/hè",level:"七-九级"},
  {hanzi:"会",pinyin:"huì/kuài",level:"一级"},
  {hanzi:"混",pinyin:"hùn/hún",level:"七-九级"},
  {hanzi:"霍",pinyin:"huò/huō",level:"七-九级"},
  {hanzi:"缉",pinyin:"jī/qī",level:"七-九级"},
  {hanzi:"稽",pinyin:"jī/qǐ",level:"七-九级"},
  {hanzi:"济",pinyin:"jì/jǐ",level:"三级"},
  {hanzi:"贾",pinyin:"jiǎ/gǔ",level:"七-九级"},
  {hanzi:"间",pinyin:"jiān/jiàn",level:"一级"},
  {hanzi:"槛",pinyin:"kǎn/jiàn",level:"七-九级"},
  {hanzi:"酵",pinyin:"jiào/xiào",level:"七-九级"},
  {hanzi:"藉",pinyin:"jiè/jí",level:"七-九级"},
  {hanzi:"经",pinyin:"jīng/jìng",level:"二级"},
  {hanzi:"颈",pinyin:"jǐng/gěng",level:"七-九级"},
  {hanzi:"句",pinyin:"jù/gōu",level:"二级"},
  {hanzi:"据",pinyin:"jù/jū",level:"三级"},
  {hanzi:"倔",pinyin:"jué/juè",level:"七-九级"},
  {hanzi:"卡",pinyin:"qiǎ/kǎ",level:"二级"},
  {hanzi:"扛",pinyin:"káng/gāng",level:"七-九级"},
  {hanzi:"溃",pinyin:"kuì/huì",level:"七-九级"},
  {hanzi:"拉",pinyin:"lā/lá",level:"二级"},
  {hanzi:"腊",pinyin:"là/xī",level:"七-九级"},
  {hanzi:"烙",pinyin:"lào/luò",level:"七-九级"},
  {hanzi:"勒",pinyin:"lè/lēi",level:"七-九级"},
  {hanzi:"棱",pinyin:"léng/lēng/líng",level:"七-九级"},
  {hanzi:"撩",pinyin:"liāo/liáo",level:"七-九级"},
  {hanzi:"裂",pinyin:"liè/liě",level:"七-九级"},
  {hanzi:"淋",pinyin:"lín/lìn",level:"七-九级"},
  {hanzi:"溜",pinyin:"liū/liù",level:"七-九级"},
  {hanzi:"搂",pinyin:"lǒu/lōu",level:"七-九级"},
  {hanzi:"陆",pinyin:"lù/liù",level:"三级"},
  {hanzi:"抹",pinyin:"mǒ/mò/mā",level:"七-九级"},
  {hanzi:"埋",pinyin:"mái/mán",level:"七-九级"},
  {hanzi:"蔓",pinyin:"màn/wàn/mán",level:"七-九级"},
  {hanzi:"闷",pinyin:"mēn/mèn",level:"七-九级"},
  {hanzi:"沐",pinyin:"mù/mò",level:"七-九级"},
  {hanzi:"泥",pinyin:"ní/nì",level:"七-九级"},
  {hanzi:"弄",pinyin:"nòng/lòng",level:"二级"},
  {hanzi:"拍",pinyin:"pāi/pò",level:"三级"},
  {hanzi:"胖",pinyin:"pàng/pán",level:"三级"},
  {hanzi:"刨",pinyin:"páo/bào",level:"七-九级"},
  {hanzi:"片",pinyin:"piàn/piān",level:"二级"},
  {hanzi:"撇",pinyin:"piē/piě",level:"七-九级"},
  {hanzi:"迫",pinyin:"pò/pǎi",level:"四级"},
  {hanzi:"栖",pinyin:"qī/xī",level:"七-九级"},
  {hanzi:"券",pinyin:"quàn/xuàn",level:"七-九级"},
  {hanzi:"色",pinyin:"sè/shǎi",level:"二级"},
  {hanzi:"厦",pinyin:"shà/xià",level:"七-九级"},
  {hanzi:"遂",pinyin:"suì/suí",level:"七-九级"},
  {hanzi:"塔",pinyin:"tǎ/dá",level:"七-九级"},
  {hanzi:"同",pinyin:"tóng/tòng",level:"一级"},
  {hanzi:"拓",pinyin:"tuò/tà",level:"七-九级"},
  {hanzi:"瓦",pinyin:"wǎ/wà",level:"七-九级"},
  {hanzi:"委",pinyin:"wěi/wēi",level:"五级"},
  {hanzi:"为",pinyin:"wéi/wèi",level:"二级"},
  {hanzi:"吓",pinyin:"xià/hè",level:"五级"},
  {hanzi:"肖",pinyin:"xiāo/xiào",level:"七-九级"},
  {hanzi:"邪",pinyin:"xié/yá",level:"七-九级"},
  {hanzi:"压",pinyin:"yā/yà",level:"三级"},
  {hanzi:"燕",pinyin:"yān/yàn",level:"七-九级"},
  {hanzi:"耶",pinyin:"yē/yé",level:"七-九级"},
  {hanzi:"叶",pinyin:"yè/xié",level:"四级"},
  {hanzi:"遗",pinyin:"yí/wèi",level:"四级"},
  {hanzi:"已",pinyin:"yǐ/yī",level:"二级"},
  {hanzi:"佣",pinyin:"yōng/yòng",level:"七-九级"},
  {hanzi:"有",pinyin:"yǒu/yòu",level:"一级"},
  {hanzi:"予",pinyin:"yú/yǔ",level:"七-九级"},
  {hanzi:"语",pinyin:"yǔ/yù",level:"一级"},
  {hanzi:"晕",pinyin:"yūn/yùn",level:"七-九级"},
  {hanzi:"脏",pinyin:"zāng/zàng",level:"七-九级"},
  {hanzi:"凿",pinyin:"záo/zuò",level:"七-九级"},
  {hanzi:"择",pinyin:"zé/zhái",level:"七-九级"},
  {hanzi:"正",pinyin:"zhēng/zhèng",level:"一级"},
  {hanzi:"汁",pinyin:"zhī/zhí",level:"七-九级"},
  {hanzi:"轴",pinyin:"zhóu/zhòu",level:"七-九级"},
  {hanzi:"爪",pinyin:"zhǎo/zhuǎ",level:"七-九级"},
  {hanzi:"转",pinyin:"zhuǎn/zhuàn",level:"三级"},
  {hanzi:"拽",pinyin:"zhuài/zhuāi/yè",level:"七-九级"},
  {hanzi:"作",pinyin:"zuò/zuō",level:"一级"},

  // ── New entries from 附录三 images ───────────────────────────
  // A
  {hanzi:"阿",pinyin:"ā/ē",level:"四级"},
  {hanzi:"艾",pinyin:"ài/yì",level:"七-九级"},
  {hanzi:"熬",pinyin:"āo/áo",level:"七-九级"},
  // B
  {hanzi:"吧",pinyin:"bā/ba",level:"一级"},
  {hanzi:"把",pinyin:"bǎ/bà/bā",level:"一级"},
  {hanzi:"耙",pinyin:"bà/pá",level:"七-九级"},
  {hanzi:"蚌",pinyin:"bàng/bèng",level:"七-九级"},
  {hanzi:"磅",pinyin:"bàng/páng/pāng",level:"七-九级"},
  {hanzi:"剥",pinyin:"bāo/bō",level:"七-九级"},
  {hanzi:"绷",pinyin:"bēng/běng/bèng",level:"七-九级"},
  {hanzi:"臂",pinyin:"bì/bei",level:"七-九级"},
  {hanzi:"别",pinyin:"bié/biè",level:"一级"},
  {hanzi:"瘪",pinyin:"biě/biē",level:"七-九级"},
  {hanzi:"并",pinyin:"bìng/bīng",level:"三级"},
  {hanzi:"伯",pinyin:"bó/bǎi",level:"三级"},
  // C
  {hanzi:"侧",pinyin:"cè/zhāi",level:"七-九级"},
  {hanzi:"叉",pinyin:"chā/chá/chǎ",level:"七-九级"},
  {hanzi:"澄",pinyin:"chéng/dèng",level:"七-九级"},
  // D
  {hanzi:"挡",pinyin:"dǎng/dàng",level:"七-九级"},
  {hanzi:"的",pinyin:"dì/dí/de",level:"一级"},
  {hanzi:"丁",pinyin:"dīng/zhēng",level:"七-九级"},
  {hanzi:"读",pinyin:"dú/dòu",level:"一级"},
  {hanzi:"肚",pinyin:"dù/dǔ",level:"七-九级"},
  {hanzi:"顿",pinyin:"dùn/dú",level:"三级"},
  {hanzi:"囤",pinyin:"dùn/tún",level:"七-九级"},
  {hanzi:"垛",pinyin:"duǒ/duò",level:"七-九级"},
  // F
  {hanzi:"番",pinyin:"fān/pān",level:"七-九级"},
  {hanzi:"繁",pinyin:"fán/pó",level:"七-九级"},
  {hanzi:"菲",pinyin:"fēi/fěi",level:"七-九级"},
  {hanzi:"佛",pinyin:"fó/fú",level:"七-九级"},
  {hanzi:"夫",pinyin:"fū/fú",level:"二级"},
  {hanzi:"父",pinyin:"fù/fǔ",level:"一级"},
  {hanzi:"脯",pinyin:"fǔ/pú",level:"七-九级"},
  // G
  {hanzi:"蛤",pinyin:"gé/há",level:"七-九级"},
  {hanzi:"葛",pinyin:"gé/gě",level:"七-九级"},
  {hanzi:"个",pinyin:"gè/gě",level:"一级"},
  {hanzi:"供",pinyin:"gōng/gòng",level:"四级"},
  {hanzi:"谷",pinyin:"gǔ/yù",level:"七-九级"},
  {hanzi:"观",pinyin:"guān/guàn",level:"二级"},
  // H
  {hanzi:"合",pinyin:"hé/gě",level:"二级"},
  {hanzi:"核",pinyin:"hé/hú",level:"五级"},
  {hanzi:"貉",pinyin:"hé/háo",level:"七-九级"},
  {hanzi:"哼",pinyin:"hēng/hng",level:"七-九级"},
  {hanzi:"红",pinyin:"hóng/gōng",level:"一级"},
  {hanzi:"虹",pinyin:"hóng/jiàng",level:"七-九级"},
  {hanzi:"侯",pinyin:"hóu/hòu",level:"七-九级"},
  {hanzi:"糊",pinyin:"hú/hù/hū",level:"七-九级"},
  {hanzi:"哗",pinyin:"huá/huā",level:"七-九级"},
  // J
  {hanzi:"纪",pinyin:"jì/jǐ",level:"三级"},
  {hanzi:"家",pinyin:"jiā/jie",level:"一级"},
  {hanzi:"渐",pinyin:"jiàn/jiān",level:"七-九级"},
  {hanzi:"将",pinyin:"jiāng/jiàng",level:"二级"},
  {hanzi:"嚼",pinyin:"jiáo/jué/jiào",level:"七-九级"},
  {hanzi:"节",pinyin:"jié/jiē",level:"二级"},
  {hanzi:"芥",pinyin:"jiè/gài",level:"七-九级"},
  {hanzi:"尽",pinyin:"jìn/jǐn",level:"三级"},
  {hanzi:"劲",pinyin:"jìn/jìng",level:"四级"},
  {hanzi:"菌",pinyin:"jùn/jūn",level:"七-九级"},
  {hanzi:"咳",pinyin:"ké/hāi",level:"七-九级"},
  // L
  {hanzi:"肋",pinyin:"lèi/lē",level:"七-九级"},
  {hanzi:"丽",pinyin:"lì/lí",level:"三级"},
  {hanzi:"俩",pinyin:"liǎ/liǎng",level:"七-九级"},
  {hanzi:"凉",pinyin:"liáng/liàng",level:"三级"},
  {hanzi:"燎",pinyin:"liáo/liǎo",level:"七-九级"},
  {hanzi:"令",pinyin:"lìng/líng",level:"三级"},
  {hanzi:"六",pinyin:"liù/lù",level:"一级"},
  {hanzi:"络",pinyin:"luò/lào",level:"七-九级"},
  {hanzi:"漫",pinyin:"màn/mán",level:"七-九级"},
  {hanzi:"猫",pinyin:"māo/máo",level:"一级"},
  {hanzi:"冒",pinyin:"mào/mò",level:"七-九级"},
  {hanzi:"么",pinyin:"me/ma",level:"一级"},
  {hanzi:"蒙",pinyin:"méng/mēng/měng",level:"七-九级"},
  {hanzi:"眯",pinyin:"mí/mī",level:"七-九级"},
  {hanzi:"廛",pinyin:"mí/méi",level:"七-九级"},
  {hanzi:"泌",pinyin:"mì/bì",level:"七-九级"},
  {hanzi:"秘",pinyin:"mì/bì",level:"四级"},
  {hanzi:"摩",pinyin:"mó/mā",level:"七-九级"},
  // N
  {hanzi:"哪",pinyin:"nǎ/nèi/na/né",level:"一级"},
  {hanzi:"那",pinyin:"nà/nèi/nā",level:"一级"},
  {hanzi:"娜",pinyin:"nà/nuó",level:"七-九级"},
  {hanzi:"囊",pinyin:"náng/nāng",level:"七-九级"},
  {hanzi:"呢",pinyin:"ní/ne",level:"一级"},
  {hanzi:"拧",pinyin:"níng/nǐng/nìng",level:"七-九级"},
  // P
  {hanzi:"排",pinyin:"pái/pǎi",level:"二级"},
  {hanzi:"跑",pinyin:"pǎo/páo",level:"一级"},
  {hanzi:"劈",pinyin:"pī/pǐ",level:"七-九级"},
  {hanzi:"仆",pinyin:"pū/pú",level:"七-九级"},
  {hanzi:"曝",pinyin:"pù/bào",level:"七-九级"},
  // Q
  {hanzi:"妻",pinyin:"qī/qì",level:"三级"},
  {hanzi:"铅",pinyin:"qiān/yán",level:"七-九级"},
  {hanzi:"浅",pinyin:"qiǎn/jiān",level:"三级"},
  {hanzi:"呛",pinyin:"qiāng/qiàng",level:"七-九级"},
  {hanzi:"茄",pinyin:"qié/jiā",level:"七-九级"},
  {hanzi:"区",pinyin:"qū/ōu",level:"二级"},
  {hanzi:"圈",pinyin:"quān/juàn/juān",level:"四级"},
  {hanzi:"雀",pinyin:"qué/qiāo/qiǎo",level:"七-九级"},
  // S
  {hanzi:"撒",pinyin:"sā/sǎ",level:"七-九级"},
  {hanzi:"扫",pinyin:"sǎo/sào",level:"二级"},
  {hanzi:"煞",pinyin:"shà/shā",level:"七-九级"},
  {hanzi:"杉",pinyin:"shān/shā",level:"七-九级"},
  {hanzi:"苫",pinyin:"shān/shàn",level:"七-九级"},
  {hanzi:"上",pinyin:"shàng/shǎng",level:"一级"},
  {hanzi:"稍",pinyin:"shāo/shào",level:"七-九级"},
  {hanzi:"蛇",pinyin:"shé/yí",level:"五级"},
  {hanzi:"食",pinyin:"shí/sì",level:"一级"},
  {hanzi:"氏",pinyin:"shì/zhī",level:"七-九级"},
  {hanzi:"属",pinyin:"shǔ/zhǔ",level:"五级"},
  {hanzi:"术",pinyin:"shù/zhú",level:"七-九级"},
  {hanzi:"刷",pinyin:"shuā/shuà",level:"七-九级"},
  {hanzi:"率",pinyin:"shuài/lǜ",level:"六级"},
  // T
  {hanzi:"台",pinyin:"tái/tāi",level:"二级"},
  {hanzi:"苔",pinyin:"tái/tāi",level:"七-九级"},
  {hanzi:"陶",pinyin:"táo/yáo",level:"七-九级"},
  {hanzi:"提",pinyin:"tí/dī",level:"二级"},
  {hanzi:"体",pinyin:"tǐ/tī",level:"一级"},
  {hanzi:"通",pinyin:"tōng/tòng",level:"二级"},
  {hanzi:"驮",pinyin:"tuó/duò",level:"七-九级"},
  // W
  {hanzi:"万",pinyin:"wàn/mò",level:"一级"},
  {hanzi:"尾",pinyin:"wěi/yǐ",level:"四级"},
  {hanzi:"尉",pinyin:"wèi/yù",level:"七-九级"},
  {hanzi:"蔚",pinyin:"wèi/yù",level:"七-九级"},
  {hanzi:"涡",pinyin:"wō/guō",level:"七-九级"},
  {hanzi:"乌",pinyin:"wū/wù",level:"七-九级"},
  // X
  {hanzi:"洗",pinyin:"xǐ/xiǎn",level:"一级"},
  {hanzi:"鲜",pinyin:"xiān/xiǎn",level:"四级"},
  {hanzi:"铣",pinyin:"xiǎn/xǐ",level:"七-九级"},
  {hanzi:"巷",pinyin:"xiàng/hàng",level:"七-九级"},
  {hanzi:"削",pinyin:"xiāo/xuē",level:"六级"},
  {hanzi:"芯",pinyin:"xīn/xìn",level:"七-九级"},
  // Y
  {hanzi:"吁",pinyin:"xū/yù",level:"七-九级"},
  {hanzi:"旋",pinyin:"xuán/xuàn",level:"七-九级"},
  {hanzi:"呀",pinyin:"yā/ya",level:"一级"},
  {hanzi:"轧",pinyin:"yà/zhá",level:"七-九级"},
  {hanzi:"殷",pinyin:"yīn/yān/yǐn",level:"七-九级"},
  {hanzi:"与",pinyin:"yǔ/yù/yú",level:"二级"},
  {hanzi:"雨",pinyin:"yǔ/yù",level:"一级"},
  {hanzi:"钥",pinyin:"yuè/yào",level:"七-九级"},
  // Z
  {hanzi:"攒",pinyin:"zǎn/cuán",level:"七-九级"},
  {hanzi:"炸",pinyin:"zhà/zhá",level:"六级"},
  {hanzi:"栅",pinyin:"zhà/shān",level:"七-九级"},
  {hanzi:"粘",pinyin:"zhān/nián",level:"七-九级"},
  {hanzi:"召",pinyin:"zhào/shào",level:"七-九级"},
  {hanzi:"这",pinyin:"zhè/zhèi",level:"一级"},
  {hanzi:"症",pinyin:"zhèng/zhēng",level:"七-九级"},
  {hanzi:"挣",pinyin:"zhèng/zhēng",level:"七-九级"},
  {hanzi:"殖",pinyin:"zhí/shí",level:"七-九级"},
  {hanzi:"只",pinyin:"zhī/zhǐ",level:"一级"},
  {hanzi:"峙",pinyin:"zhì/shì",level:"七-九级"},
  {hanzi:"种",pinyin:"zhǒng/zhòng",level:"一级"},
  {hanzi:"椎",pinyin:"zhuī/chuí",level:"七-九级"},
  {hanzi:"仔",pinyin:"zǐ/zǎi/zī",level:"七-九级"},
  {hanzi:"大",pinyin:"dà/dài",level:"一级"},
  {hanzi:"打",pinyin:"dǎ/dá",level:"一级"},
  {hanzi:"出",pinyin:"chū/chù",level:"一级"},
  {hanzi:"下",pinyin:"xià/xia",level:"一级"},
  {hanzi:"车",pinyin:"chē/jū",level:"二级"},
  {hanzi:"画",pinyin:"huà/huā",level:"二级"},
  {hanzi:"飞",pinyin:"fēi/fěi",level:"二级"},
  {hanzi:"鱼",pinyin:"yú/yǔ",level:"二级"},
  {hanzi:"带",pinyin:"dài/dǎi",level:"三级"},
  {hanzi:"断",pinyin:"duàn/duǎn",level:"三级"},
  {hanzi:"极",pinyin:"jí/jì",level:"三级"},
  {hanzi:"近",pinyin:"jìn/jǐn",level:"三级"},
  {hanzi:"苦",pinyin:"kǔ/gǔ",level:"三级"},
  {hanzi:"木",pinyin:"mù/mò",level:"三级"},
  {hanzi:"约",pinyin:"yuē/yāo",level:"三级"},
  {hanzi:"装",pinyin:"zhuāng/zhuàng",level:"三级"},
  {hanzi:"著",pinyin:"zhù/zhe/zháo/zhuó",level:"四级"},
  {hanzi:"拨",pinyin:"bō/bǒ",level:"五级"},
  {hanzi:"跌",pinyin:"diē/dié",level:"五级"},
  {hanzi:"纯",pinyin:"chún/zhǔn",level:"五级"},
  {hanzi:"颤",pinyin:"chàn/zhàn",level:"六级"},
  {hanzi:"稿",pinyin:"gǎo/hào",level:"七-九级"},
];

// ── Enriched meanings & examples (optional per-character) ────
// Keys are hanzi. Each reading key is the exact pinyin string.
// Characters without an entry here still work in the app —
// they just show pinyin only with no meaning/example text.
const ENRICHED = {

  // ── 一级 (missing) ──────────────────────────────────────────
  "着": { readings: {
    "zhe": { meaning_zh:"动态助词（持续）", meaning_en:"aspect particle (ongoing)",   example_zh:"穿着",   example_en:"wearing",            frequency:"high"   },
    "zháo":{ meaning_zh:"接触到，达到",     meaning_en:"to touch, to reach",          example_zh:"着急",   example_en:"anxious",            frequency:"high"   },
    "zhuó":{ meaning_zh:"穿着，附着",       meaning_en:"to wear, to be attached to",  example_zh:"着装",   example_en:"attire",             frequency:"medium" },
  }},
  "了": { readings: {
    "le":   { meaning_zh:"动态助词（完成）", meaning_en:"aspect particle (completed)", example_zh:"吃了",   example_en:"ate (completed)",    frequency:"high"   },
    "liǎo": { meaning_zh:"完结，了解",       meaning_en:"to finish, to understand",    example_zh:"了解",   example_en:"to understand",      frequency:"high"   },
  }},
  "干": { readings: {
    "gān":  { meaning_zh:"干燥，干净",       meaning_en:"dry, clean",                  example_zh:"干净",   example_en:"clean",              frequency:"high"   },
    "gàn":  { meaning_zh:"做，干活",         meaning_en:"to do, to work",              example_zh:"干活",   example_en:"to work",            frequency:"high"   },
  }},
  "还": { readings: {
    "hái":  { meaning_zh:"还是，还有",       meaning_en:"still, also",                 example_zh:"还有",   example_en:"there is still",     frequency:"high"   },
    "huán": { meaning_zh:"归还，还债",       meaning_en:"to return, to repay",         example_zh:"归还",   example_en:"to return",          frequency:"high"   },
  }},
  "几": { readings: {
    "jǐ":   { meaning_zh:"几个，多少",       meaning_en:"how many, several",           example_zh:"几个",   example_en:"how many",           frequency:"high"   },
    "jī":   { meaning_zh:"茶几，窗几",       meaning_en:"small table",                 example_zh:"茶几",   example_en:"tea table",          frequency:"medium" },
  }},
  "都": { readings: {
    "dōu":  { meaning_zh:"都是，全都",       meaning_en:"all, both",                   example_zh:"都好",   example_en:"all good",           frequency:"high"   },
    "dū":   { meaning_zh:"首都，都市",       meaning_en:"capital city, metropolis",    example_zh:"首都",   example_en:"capital city",       frequency:"high"   },
  }},
  "要": { readings: {
    "yào":  { meaning_zh:"需要，要求",       meaning_en:"to need, to want",            example_zh:"需要",   example_en:"to need",            frequency:"high"   },
    "yāo":  { meaning_zh:"要求，邀请",       meaning_en:"to demand, to invite",        example_zh:"要求",   example_en:"to demand",          frequency:"medium" },
  }},
  "没": { readings: {
    "méi":  { meaning_zh:"没有，没关系",     meaning_en:"not have, no matter",         example_zh:"没有",   example_en:"don't have",         frequency:"high"   },
    "mò":   { meaning_zh:"沉没，淹没",       meaning_en:"to sink, to submerge",        example_zh:"淹没",   example_en:"to submerge",        frequency:"medium" },
  }},
  "难": { readings: {
    "nán":  { meaning_zh:"困难，难题",       meaning_en:"difficult, hard",             example_zh:"困难",   example_en:"difficulty",         frequency:"high"   },
    "nàn":  { meaning_zh:"灾难，难民",       meaning_en:"disaster, refugee",           example_zh:"灾难",   example_en:"disaster",           frequency:"high"   },
  }},
  "什": { readings: {
    "shén": { meaning_zh:"什么，什么事",     meaning_en:"what (in 什么)",              example_zh:"什么",   example_en:"what",               frequency:"high"   },
    "shí":  { meaning_zh:"什物，杂物",       meaning_en:"miscellaneous items",         example_zh:"什物",   example_en:"odds and ends",      frequency:"low"    },
  }},
  "说": { readings: {
    "shuō": { meaning_zh:"说话，说明",       meaning_en:"to speak, to explain",        example_zh:"说话",   example_en:"to speak",           frequency:"high"   },
    "shuì": { meaning_zh:"游说，说服",       meaning_en:"to persuade, to lobby",       example_zh:"游说",   example_en:"to lobby",           frequency:"low"    },
    "yuè":  { meaning_zh:"喜悦（古通悦）",   meaning_en:"joy (archaic variant of 悦)", example_zh:"不亦说乎",example_en:"isn't that joyful?", frequency:"low"    },
  }},
  "场": { readings: {
    "chǎng":{ meaning_zh:"广场，场地",       meaning_en:"square, venue",               example_zh:"广场",   example_en:"square",             frequency:"high"   },
    "cháng":{ meaning_zh:"场院，打谷场",     meaning_en:"threshing floor, field",      example_zh:"场院",   example_en:"threshing ground",   frequency:"medium" },
  }},
  // ── 二级 (missing) ──────────────────────────────────────────
  "当": { readings: {
    "dāng": { meaning_zh:"当然，当时",       meaning_en:"should, at that time",        example_zh:"当时",   example_en:"at that time",       frequency:"high"   },
    "dàng": { meaning_zh:"当作，妥当",       meaning_en:"to treat as, appropriate",    example_zh:"恰当",   example_en:"appropriate",        frequency:"medium" },
  }},
  "倒": { readings: {
    "dǎo":  { meaning_zh:"倒下，跌倒",       meaning_en:"to fall, to collapse",        example_zh:"跌倒",   example_en:"to fall down",       frequency:"high"   },
    "dào":  { meaning_zh:"倒车，倒置",       meaning_en:"to reverse, upside down",     example_zh:"倒车",   example_en:"to reverse a car",   frequency:"high"   },
  }},
  "相": { readings: {
    "xiāng":{ meaning_zh:"相互，相同",       meaning_en:"mutually, each other",        example_zh:"相互",   example_en:"each other",         frequency:"high"   },
    "xiàng":{ meaning_zh:"相貌，宰相",       meaning_en:"appearance, prime minister",  example_zh:"相貌",   example_en:"appearance",         frequency:"high"   },
  }},
  "称": { readings: {
    "chēng":{ meaning_zh:"称呼，称赞",       meaning_en:"to call, to praise",          example_zh:"称呼",   example_en:"to address",         frequency:"high"   },
    "chèn": { meaning_zh:"称心，匀称",       meaning_en:"to suit, well-proportioned",  example_zh:"称心",   example_en:"to one's liking",    frequency:"medium" },
    "chèng":{ meaning_zh:"称（古，同秤）",   meaning_en:"scale (archaic variant)",     example_zh:"称杆",   example_en:"scale beam",         frequency:"low"    },
  }},
  "处": { readings: {
    "chǔ":  { meaning_zh:"处理，处置",       meaning_en:"to handle, to deal with",     example_zh:"处理",   example_en:"to handle",          frequency:"high"   },
    "chù":  { meaning_zh:"地处，住处",       meaning_en:"place, location",             example_zh:"住处",   example_en:"residence",          frequency:"high"   },
  }},
  "熟": { readings: {
    "shú":  { meaning_zh:"熟悉，成熟",       meaning_en:"familiar, ripe",              example_zh:"熟悉",   example_en:"familiar",           frequency:"high"   },
    "shóu": { meaning_zh:"饭熟了（口语）",   meaning_en:"cooked (colloquial)",         example_zh:"饭熟了", example_en:"the food is cooked", frequency:"medium" },
  }},
  "便": { readings: {
    "biàn": { meaning_zh:"方便，便利",       meaning_en:"convenient",                  example_zh:"方便",   example_en:"convenient",         frequency:"high"   },
    "pián": { meaning_zh:"便宜，低价",       meaning_en:"cheap, inexpensive",          example_zh:"便宜",   example_en:"cheap",              frequency:"high"   },
  }},
  "卷": { readings: {
    "juǎn": { meaning_zh:"卷起，卷曲",       meaning_en:"to roll up, to curl",         example_zh:"卷起",   example_en:"to roll up",         frequency:"high"   },
    "juàn": { meaning_zh:"试卷，书卷",       meaning_en:"exam paper, scroll",          example_zh:"试卷",   example_en:"exam paper",         frequency:"high"   },
  }},
  "舍": { readings: {
    "shě":  { meaning_zh:"舍弃，放弃",       meaning_en:"to give up, to abandon",      example_zh:"舍弃",   example_en:"to give up",         frequency:"high"   },
    "shè":  { meaning_zh:"宿舍，房舍",       meaning_en:"dormitory, dwelling",         example_zh:"宿舍",   example_en:"dormitory",          frequency:"high"   },
  }},
  // ── 三级 (missing) ──────────────────────────────────────────
  "调": { readings: {
    "tiáo": { meaning_zh:"调节，调整",       meaning_en:"to adjust, to regulate",      example_zh:"调整",   example_en:"to adjust",          frequency:"high"   },
    "diào": { meaning_zh:"音调，调动",       meaning_en:"tone, to transfer",           example_zh:"曲调",   example_en:"melody",             frequency:"high"   },
  }},
  "曾": { readings: {
    "céng": { meaning_zh:"曾经，曾经历过",   meaning_en:"once, previously",            example_zh:"曾经",   example_en:"once/previously",    frequency:"high"   },
    "zēng": { meaning_zh:"曾祖，曾孙",       meaning_en:"great-grandfather/grandson",  example_zh:"曾祖父", example_en:"great-grandfather",  frequency:"medium" },
  }},
  "强": { readings: {
    "qiáng":{ meaning_zh:"强大，强壮",       meaning_en:"strong, powerful",            example_zh:"强大",   example_en:"powerful",           frequency:"high"   },
    "qiǎng":{ meaning_zh:"勉强，强迫",       meaning_en:"to force, reluctantly",       example_zh:"强迫",   example_en:"to coerce",          frequency:"high"   },
    "jiàng":{ meaning_zh:"倔强，强头倔脑",   meaning_en:"stubborn, unyielding",        example_zh:"倔强",   example_en:"stubborn",           frequency:"medium" },
  }},
  "切": { readings: {
    "qiē":  { meaning_zh:"切菜，切断",       meaning_en:"to cut, to slice",            example_zh:"切菜",   example_en:"to chop vegetables", frequency:"high"   },
    "qiè":  { meaning_zh:"密切，恳切",       meaning_en:"close, earnest",              example_zh:"密切",   example_en:"close",              frequency:"high"   },
  }},
  "散": { readings: {
    "sàn":  { meaning_zh:"散开，分散",       meaning_en:"to scatter, to disperse",     example_zh:"散步",   example_en:"to take a walk",     frequency:"high"   },
    "sǎn":  { meaning_zh:"散漫，松散",       meaning_en:"loose, unrestrained",         example_zh:"散漫",   example_en:"lax, undisciplined", frequency:"medium" },
  }},
  "血": { readings: {
    "xuè":  { meaning_zh:"血液，血型",       meaning_en:"blood, blood type",           example_zh:"血液",   example_en:"blood",              frequency:"high"   },
    "xiě":  { meaning_zh:"流血（口语）",     meaning_en:"bleeding (colloquial)",       example_zh:"流血了", example_en:"bleeding",           frequency:"medium" },
  }},
  "度": { readings: {
    "dù":   { meaning_zh:"度过，程度",       meaning_en:"to spend (time), degree",     example_zh:"程度",   example_en:"degree / level",     frequency:"high"   },
    "duó":  { meaning_zh:"揣度，度量",       meaning_en:"to measure, to estimate",     example_zh:"揣度",   example_en:"to conjecture",      frequency:"low"    },
  }},
  "恶": { readings: {
    "è":    { meaning_zh:"恶劣，邪恶",       meaning_en:"evil, bad",                   example_zh:"恶劣",   example_en:"terrible",           frequency:"high"   },
    "wù":   { meaning_zh:"厌恶，憎恶",       meaning_en:"to detest, to loathe",        example_zh:"厌恶",   example_en:"to detest",          frequency:"high"   },
    "ě":    { meaning_zh:"恶心，反胃",       meaning_en:"nauseous, disgusting",        example_zh:"恶心",   example_en:"nausea",             frequency:"medium" },
  }},
  // ── 四级 (missing) ──────────────────────────────────────────
  "薄": { readings: {
    "báo":  { meaning_zh:"薄片，薄薄的",     meaning_en:"thin (colloquial)",           example_zh:"薄片",   example_en:"thin slice",         frequency:"high"   },
    "bó":   { meaning_zh:"薄弱，淡薄",       meaning_en:"weak, meager",                example_zh:"薄弱",   example_en:"weak",               frequency:"high"   },
    "bò":   { meaning_zh:"薄荷（植物）",     meaning_en:"mint (in 薄荷)",              example_zh:"薄荷",   example_en:"mint",               frequency:"medium" },
  }},
  "折": { readings: {
    "zhé":  { meaning_zh:"折断，折扣",       meaning_en:"to break, discount",          example_zh:"折扣",   example_en:"discount",           frequency:"high"   },
    "zhē":  { meaning_zh:"折腾，折磨",       meaning_en:"to toss about, to torment",   example_zh:"折腾",   example_en:"to toss around",     frequency:"high"   },
    "shé":  { meaning_zh:"折本，亏本",       meaning_en:"to lose money (colloq.)",     example_zh:"折本",   example_en:"to lose capital",    frequency:"medium" },
  }},
  "冲": { readings: {
    "chōng":{ meaning_zh:"冲突，冲洗",       meaning_en:"to clash, to rinse",          example_zh:"冲洗",   example_en:"to rinse",           frequency:"high"   },
    "chòng":{ meaning_zh:"呛鼻，力冲",       meaning_en:"pungent, forceful",           example_zh:"劲儿冲", example_en:"pungent smell",      frequency:"medium" },
  }},
  "单": { readings: {
    "dān":  { meaning_zh:"单一，单独",       meaning_en:"single, alone",               example_zh:"单独",   example_en:"alone",              frequency:"high"   },
    "shàn": { meaning_zh:"单（姓氏）",       meaning_en:"Shan (surname)",              example_zh:"单姓",   example_en:"surname Shan",       frequency:"low"    },
    "chán": { meaning_zh:"单于（古称）",     meaning_en:"Chanyu (Xiongnu ruler title)",example_zh:"单于",   example_en:"Chanyu",             frequency:"low"    },
  }},
  "担": { readings: {
    "dān":  { meaning_zh:"担心，担任",       meaning_en:"to worry, to take on",        example_zh:"担心",   example_en:"to worry",           frequency:"high"   },
    "dàn":  { meaning_zh:"担子，扁担",       meaning_en:"carrying pole, load",         example_zh:"扁担",   example_en:"shoulder pole",      frequency:"medium" },
  }},
  "系": { readings: {
    "xì":   { meaning_zh:"联系，关系",       meaning_en:"connection, to tie",          example_zh:"关系",   example_en:"relationship",       frequency:"high"   },
    "jì":   { meaning_zh:"系鞋带，打结",     meaning_en:"to fasten, to knot",          example_zh:"系鞋带", example_en:"to tie shoelaces",   frequency:"medium" },
  }},
  "磨": { readings: {
    "mó":   { meaning_zh:"磨损，磨合",       meaning_en:"to grind, to wear down",      example_zh:"磨合",   example_en:"to break in",        frequency:"high"   },
    "mò":   { meaning_zh:"磨坊，石磨",       meaning_en:"mill, millstone",             example_zh:"石磨",   example_en:"millstone",          frequency:"medium" },
  }},
  "宁": { readings: {
    "níng": { meaning_zh:"安宁，宁静",       meaning_en:"peaceful, tranquil",          example_zh:"宁静",   example_en:"tranquil",           frequency:"high"   },
    "nìng": { meaning_zh:"宁可，宁愿",       meaning_en:"would rather, prefer to",     example_zh:"宁可",   example_en:"would rather",       frequency:"high"   },
  }},
  "铺": { readings: {
    "pū":   { meaning_zh:"铺开，铺设",       meaning_en:"to spread out, to lay",       example_zh:"铺开",   example_en:"to spread out",      frequency:"high"   },
    "pù":   { meaning_zh:"店铺，床铺",       meaning_en:"shop, bunk bed",              example_zh:"店铺",   example_en:"shop",               frequency:"high"   },
  }},
  "曲": { readings: {
    "qū":   { meaning_zh:"弯曲，曲折",       meaning_en:"bent, winding",               example_zh:"弯曲",   example_en:"curved",             frequency:"high"   },
    "qǔ":   { meaning_zh:"歌曲，乐曲",       meaning_en:"song, musical piece",         example_zh:"歌曲",   example_en:"song",               frequency:"high"   },
  }},
  "塞": { readings: {
    "sāi":  { meaning_zh:"塞住，堵塞",       meaning_en:"to plug, to block",           example_zh:"塞住",   example_en:"to plug up",         frequency:"high"   },
    "sài":  { meaning_zh:"塞外，边塞",       meaning_en:"frontier pass, border",       example_zh:"边塞",   example_en:"frontier",           frequency:"medium" },
    "sè":   { meaning_zh:"闭塞，堵塞（书）", meaning_en:"to obstruct (literary)",      example_zh:"闭塞",   example_en:"blocked off",        frequency:"medium" },
  }},
  "省": { readings: {
    "shěng":{ meaning_zh:"省份，节省",       meaning_en:"province, to save",           example_zh:"省钱",   example_en:"to save money",      frequency:"high"   },
    "xǐng": { meaning_zh:"反省，省悟",       meaning_en:"to reflect, to come to",      example_zh:"反省",   example_en:"to reflect",         frequency:"medium" },
  }},
  // ── 五级 (missing) ──────────────────────────────────────────
  "泊": { readings: {
    "bó":   { meaning_zh:"停泊，漂泊",       meaning_en:"to anchor, to drift",         example_zh:"停泊",   example_en:"to anchor",          frequency:"medium" },
    "pō":   { meaning_zh:"湖泊，水泊",       meaning_en:"lake, pond",                  example_zh:"湖泊",   example_en:"lake",               frequency:"medium" },
  }},
  "盛": { readings: {
    "shèng":{ meaning_zh:"盛大，旺盛",       meaning_en:"grand, flourishing",          example_zh:"盛大",   example_en:"grand",              frequency:"high"   },
    "chéng":{ meaning_zh:"盛饭，盛水",       meaning_en:"to fill (bowl/container)",    example_zh:"盛饭",   example_en:"to serve rice",      frequency:"high"   },
  }},
  "乘": { readings: {
    "chéng":{ meaning_zh:"乘车，搭乘",       meaning_en:"to ride, to take",            example_zh:"乘车",   example_en:"to take a vehicle",  frequency:"high"   },
    "shèng":{ meaning_zh:"史乘，记载",       meaning_en:"historical records",          example_zh:"史乘",   example_en:"historical records", frequency:"low"    },
  }},
  "斗": { readings: {
    "dǒu":  { meaning_zh:"北斗，斗笠",       meaning_en:"dipper (constellation), bamboo hat",example_zh:"北斗星",example_en:"Big Dipper",   frequency:"medium" },
    "dòu":  { meaning_zh:"战斗，斗争",       meaning_en:"to fight, to struggle",       example_zh:"战斗",   example_en:"to fight",           frequency:"high"   },
  }},
  "杆": { readings: {
    "gān":  { meaning_zh:"旗杆，电线杆",     meaning_en:"flagpole, utility pole",      example_zh:"旗杆",   example_en:"flagpole",           frequency:"medium" },
    "gǎn":  { meaning_zh:"笔杆，枪杆",       meaning_en:"pen shaft, gun barrel",       example_zh:"笔杆",   example_en:"pen shaft",          frequency:"medium" },
  }},
  "冠": { readings: {
    "guān": { meaning_zh:"皇冠，冠军",       meaning_en:"crown, champion",             example_zh:"冠军",   example_en:"champion",           frequency:"high"   },
    "guàn": { meaning_zh:"冠名，加冠",       meaning_en:"to crown, to top",            example_zh:"冠名",   example_en:"naming rights",      frequency:"medium" },
  }},
  "划": { readings: {
    "huá":  { meaning_zh:"划船，划算",       meaning_en:"to row, worthwhile",          example_zh:"划船",   example_en:"to row a boat",      frequency:"high"   },
    "huà":  { meaning_zh:"计划，规划",       meaning_en:"to plan, to delimit",         example_zh:"计划",   example_en:"plan",               frequency:"high"   },
  }},
  "壳": { readings: {
    "ké":   { meaning_zh:"贝壳，蛋壳",       meaning_en:"shell, eggshell",             example_zh:"贝壳",   example_en:"seashell",           frequency:"high"   },
    "qiào": { meaning_zh:"地壳，甲壳",       meaning_en:"earth's crust, carapace",     example_zh:"地壳",   example_en:"earth's crust",      frequency:"high"   },
  }},
  "露": { readings: {
    "lù":   { meaning_zh:"露天，露出",       meaning_en:"open air, to reveal",         example_zh:"露出",   example_en:"to reveal",          frequency:"high"   },
    "lòu":  { meaning_zh:"露馅，泄露",       meaning_en:"to leak out (colloq.)",       example_zh:"露馅",   example_en:"to let the cat out", frequency:"medium" },
  }},
  "模": { readings: {
    "mó":   { meaning_zh:"模仿，模型",       meaning_en:"to imitate, model",           example_zh:"模型",   example_en:"model",              frequency:"high"   },
    "mú":   { meaning_zh:"模样，模具",       meaning_en:"appearance, mold",            example_zh:"模样",   example_en:"appearance",         frequency:"high"   },
  }},
  "喷": { readings: {
    "pēn":  { meaning_zh:"喷水，喷气",       meaning_en:"to spray, to jet",            example_zh:"喷水",   example_en:"to spray water",     frequency:"high"   },
    "pèn":  { meaning_zh:"喷香（方言）",     meaning_en:"fragrant (colloq.)",          example_zh:"喷香",   example_en:"fragrant",           frequency:"medium" },
  }},
  "屏": { readings: {
    "píng": { meaning_zh:"屏幕，屏风",       meaning_en:"screen, folding screen",      example_zh:"屏幕",   example_en:"screen",             frequency:"high"   },
    "bǐng": { meaning_zh:"屏息，屏气",       meaning_en:"to hold breath",              example_zh:"屏息",   example_en:"to hold one's breath",frequency:"medium"},
  }},
  "悄": { readings: {
    "qiāo": { meaning_zh:"悄悄，悄然",       meaning_en:"quietly, silently",           example_zh:"悄悄",   example_en:"quietly",            frequency:"high"   },
    "qiǎo": { meaning_zh:"悄怆（忧伤）",     meaning_en:"sorrowful (literary)",        example_zh:"悄怆幽邃",example_en:"deep and sorrowful", frequency:"low"    },
  }},
  "宿": { readings: {
    "sù":   { meaning_zh:"住宿，宿舍",       meaning_en:"to stay overnight, dorm",     example_zh:"宿舍",   example_en:"dormitory",          frequency:"high"   },
    "xiǔ":  { meaning_zh:"一宿（一夜）",     meaning_en:"one night (measure word)",    example_zh:"一宿",   example_en:"one night",          frequency:"medium" },
    "xiù":  { meaning_zh:"星宿，二十八宿",   meaning_en:"constellation, lunar mansion",example_zh:"星宿",   example_en:"constellation",      frequency:"low"    },
  }},
  "挑": { readings: {
    "tiāo": { meaning_zh:"挑选，挑剔",       meaning_en:"to pick, to be picky",        example_zh:"挑选",   example_en:"to select",          frequency:"high"   },
    "tiǎo": { meaning_zh:"挑战，挑衅",       meaning_en:"to challenge, to provoke",    example_zh:"挑战",   example_en:"to challenge",       frequency:"high"   },
  }},
  "吐": { readings: {
    "tǔ":   { meaning_zh:"吐出，吐露",       meaning_en:"to spit out, to reveal",      example_zh:"吐露",   example_en:"to reveal",          frequency:"high"   },
    "tù":   { meaning_zh:"呕吐，吐血",       meaning_en:"to vomit",                    example_zh:"呕吐",   example_en:"to vomit",           frequency:"high"   },
  }},
  // ── 六级 (missing) ──────────────────────────────────────────
  "挨": { readings: {
    "āi":   { meaning_zh:"挨着，紧挨",       meaning_en:"close to, next to",           example_zh:"挨着",   example_en:"right next to",      frequency:"high"   },
    "ái":   { meaning_zh:"挨打，挨骂",       meaning_en:"to endure (beating/scolding)",example_zh:"挨打",   example_en:"to get beaten",      frequency:"high"   },
  }},
  "暴": { readings: {
    "bào":  { meaning_zh:"暴力，暴风",       meaning_en:"violent, storm",              example_zh:"暴风",   example_en:"storm",              frequency:"high"   },
    "pù":   { meaning_zh:"暴晒，曝晒",       meaning_en:"to expose to sun",            example_zh:"暴晒",   example_en:"sun exposure",       frequency:"medium" },
  }},
  "奔": { readings: {
    "bēn":  { meaning_zh:"奔跑，奔波",       meaning_en:"to run, to rush about",       example_zh:"奔跑",   example_en:"to run",             frequency:"high"   },
    "bèn":  { meaning_zh:"投奔，奔赴",       meaning_en:"to head toward, to go to",    example_zh:"投奔",   example_en:"to seek refuge",     frequency:"medium" },
  }},
  "扁": { readings: {
    "biǎn": { meaning_zh:"扁平，压扁",       meaning_en:"flat, flattened",             example_zh:"扁平",   example_en:"flat",               frequency:"high"   },
    "piān": { meaning_zh:"扁舟（小船）",     meaning_en:"small boat (literary)",       example_zh:"扁舟",   example_en:"small boat",         frequency:"low"    },
  }},
  "卜": { readings: {
    "bǔ":   { meaning_zh:"占卜，卜卦",       meaning_en:"to divine, to tell fortune",  example_zh:"占卜",   example_en:"to divine",          frequency:"medium" },
    "bo":   { meaning_zh:"萝卜（蔬菜）",     meaning_en:"radish (in 萝卜)",            example_zh:"萝卜",   example_en:"radish",             frequency:"high"   },
  }},
  "臭": { readings: {
    "chòu": { meaning_zh:"臭味，臭气",       meaning_en:"stinky, bad smell",           example_zh:"臭味",   example_en:"bad smell",          frequency:"high"   },
    "xiù":  { meaning_zh:"无色无臭",         meaning_en:"odorless (literary)",         example_zh:"无臭",   example_en:"odorless",           frequency:"low"    },
  }},
  "答": { readings: {
    "dá":   { meaning_zh:"回答，答案",       meaning_en:"to answer, answer",           example_zh:"回答",   example_en:"to answer",          frequency:"high"   },
    "dā":   { meaning_zh:"答应，答理",       meaning_en:"to agree, to acknowledge",    example_zh:"答应",   example_en:"to agree",           frequency:"high"   },
  }},
  "钉": { readings: {
    "dīng": { meaning_zh:"钉子，铁钉",       meaning_en:"nail, tack",                  example_zh:"钉子",   example_en:"nail",               frequency:"high"   },
    "dìng": { meaning_zh:"钉牢，钉住",       meaning_en:"to nail down, to fasten",     example_zh:"钉牢",   example_en:"to nail down",       frequency:"medium" },
  }},
  "缝": { readings: {
    "féng": { meaning_zh:"缝纫，缝合",       meaning_en:"to sew, to stitch",           example_zh:"缝纫",   example_en:"to sew",             frequency:"high"   },
    "fèng": { meaning_zh:"裂缝，缝隙",       meaning_en:"crack, gap",                  example_zh:"裂缝",   example_en:"crack",              frequency:"high"   },
  }},
  "横": { readings: {
    "héng": { meaning_zh:"横线，水平",       meaning_en:"horizontal, sideways",        example_zh:"横线",   example_en:"horizontal line",    frequency:"high"   },
    "hèng": { meaning_zh:"蛮横，横行",       meaning_en:"unreasonable, domineering",   example_zh:"蛮横",   example_en:"domineering",        frequency:"medium" },
  }},
  "哄": { readings: {
    "hōng": { meaning_zh:"哄堂大笑",         meaning_en:"uproarious laughter",         example_zh:"哄堂大笑",example_en:"burst of laughter", frequency:"medium" },
    "hǒng": { meaning_zh:"哄骗，哄人",       meaning_en:"to fool, to coax",            example_zh:"哄骗",   example_en:"to deceive",         frequency:"high"   },
    "hòng": { meaning_zh:"起哄，哄闹",       meaning_en:"to make a ruckus",            example_zh:"起哄",   example_en:"to make a scene",    frequency:"medium" },
  }},
  "华": { readings: {
    "huá":  { meaning_zh:"繁华，华丽",       meaning_en:"splendid, flourishing",       example_zh:"华丽",   example_en:"gorgeous",           frequency:"high"   },
    "huà":  { meaning_zh:"华山，地名用字",   meaning_en:"used in place names (Hua Mt.)", example_zh:"华山",   example_en:"Hua Mountain",       frequency:"high"   },
  }},
  "晃": { readings: {
    "huǎng":{ meaning_zh:"晃眼，闪晃",       meaning_en:"to dazzle, to flash past",    example_zh:"晃眼",   example_en:"dazzling",           frequency:"medium" },
    "huàng":{ meaning_zh:"摇晃，晃动",       meaning_en:"to sway, to shake",           example_zh:"摇晃",   example_en:"to sway",            frequency:"high"   },
  }},
  "夹": { readings: {
    "jiā":  { meaning_zh:"夹住，夹带",       meaning_en:"to clamp, to carry between",  example_zh:"夹住",   example_en:"to clamp",           frequency:"high"   },
    "jiá":  { meaning_zh:"夹克，夹衣",       meaning_en:"jacket, lined garment",       example_zh:"夹克",   example_en:"jacket",             frequency:"medium" },
    "ga":   { meaning_zh:"夹（语气变体）",   meaning_en:"colloquial particle variant", example_zh:"那夹",   example_en:"dialect usage",      frequency:"low"    },
  }},
  "监": { readings: {
    "jiān": { meaning_zh:"监视，监督",       meaning_en:"to monitor, to supervise",    example_zh:"监督",   example_en:"to supervise",       frequency:"high"   },
    "jiàn": { meaning_zh:"国子监，太监",     meaning_en:"imperial college, eunuch",    example_zh:"太监",   example_en:"eunuch",             frequency:"medium" },
  }},
  "角": { readings: {
    "jiǎo": { meaning_zh:"角落，角度",       meaning_en:"corner, angle",               example_zh:"角落",   example_en:"corner",             frequency:"high"   },
    "jué":  { meaning_zh:"角色，主角",       meaning_en:"role, protagonist",           example_zh:"角色",   example_en:"role",               frequency:"high"   },
  }},
  "结": { readings: {
    "jié":  { meaning_zh:"结果，结束",       meaning_en:"result, to end",              example_zh:"结果",   example_en:"result",             frequency:"high"   },
    "jiē":  { meaning_zh:"结实，结巴",       meaning_en:"sturdy (colloq.), stutter",   example_zh:"结实",   example_en:"sturdy",             frequency:"medium" },
  }},
  "解": { readings: {
    "jiě":  { meaning_zh:"解释，理解",       meaning_en:"to explain, to understand",   example_zh:"理解",   example_en:"to understand",      frequency:"high"   },
    "jiè":  { meaning_zh:"解押，押解",       meaning_en:"to escort (prisoner)",        example_zh:"押解",   example_en:"to escort",          frequency:"low"    },
    "xiè":  { meaning_zh:"解数，姓解",       meaning_en:"skill set; surname Xie",      example_zh:"浑身解数",example_en:"all one's skills",   frequency:"low"    },
  }},
  "禁": { readings: {
    "jìn":  { meaning_zh:"禁止，禁忌",       meaning_en:"to forbid, taboo",            example_zh:"禁止",   example_en:"forbidden",          frequency:"high"   },
    "jīn":  { meaning_zh:"禁不住，经不起",   meaning_en:"cannot help but",             example_zh:"禁不住", example_en:"can't help but",     frequency:"high"   },
  }},
  "空": { readings: {
    "kōng": { meaning_zh:"空气，天空",       meaning_en:"air, sky",                    example_zh:"天空",   example_en:"sky",                frequency:"high"   },
    "kòng": { meaning_zh:"空闲，空缺",       meaning_en:"free time, vacancy",          example_zh:"空闲",   example_en:"free time",          frequency:"high"   },
  }},
  "累": { readings: {
    "lèi":  { meaning_zh:"疲累，劳累",       meaning_en:"tired, exhausted",            example_zh:"疲累",   example_en:"tired",              frequency:"high"   },
    "lěi":  { meaning_zh:"积累，累积",       meaning_en:"to accumulate",               example_zh:"积累",   example_en:"to accumulate",      frequency:"high"   },
    "léi":  { meaning_zh:"累赘，连累",       meaning_en:"cumbersome, to implicate",    example_zh:"连累",   example_en:"to implicate",       frequency:"medium" },
  }},
  "量": { readings: {
    "liàng":{ meaning_zh:"数量，容量",       meaning_en:"quantity, capacity",          example_zh:"数量",   example_en:"quantity",           frequency:"high"   },
    "liáng":{ meaning_zh:"测量，量体温",     meaning_en:"to measure",                  example_zh:"量体温", example_en:"to take temperature",frequency:"high"   },
  }},
  "笼": { readings: {
    "lóng": { meaning_zh:"笼子，鸟笼",       meaning_en:"cage, bird cage",             example_zh:"鸟笼",   example_en:"bird cage",          frequency:"high"   },
    "lǒng": { meaning_zh:"笼罩，笼统",       meaning_en:"to envelop, vague",           example_zh:"笼罩",   example_en:"to envelop",         frequency:"medium" },
  }},
  "绿": { readings: {
    "lǜ":   { meaning_zh:"绿色，绿地",       meaning_en:"green, green space",          example_zh:"绿色",   example_en:"green color",        frequency:"high"   },
    "lù":   { meaning_zh:"绿林，绿营",       meaning_en:"greenwood (outlaws), Green Standard Army",example_zh:"绿林",example_en:"greenwood",frequency:"low"    },
  }},
  "论": { readings: {
    "lùn":  { meaning_zh:"讨论，理论",       meaning_en:"to discuss, theory",          example_zh:"讨论",   example_en:"to discuss",         frequency:"high"   },
    "lún":  { meaning_zh:"论语，语论",       meaning_en:"The Analects",                example_zh:"论语",   example_en:"The Analects",       frequency:"medium" },
  }},
  "落": { readings: {
    "luò":  { meaning_zh:"落下，落地",       meaning_en:"to fall, to land",            example_zh:"落下",   example_en:"to fall",            frequency:"high"   },
    "lào":  { meaning_zh:"落枕，落炕",       meaning_en:"stiff neck (colloq.)",        example_zh:"落枕",   example_en:"stiff neck",         frequency:"medium" },
    "là":   { meaning_zh:"丢落，落下（遗漏）",meaning_en:"to leave behind, to miss",   example_zh:"落下",   example_en:"left something behind",frequency:"high" },
  }},
  "脉": { readings: {
    "mài":  { meaning_zh:"脉搏，山脉",       meaning_en:"pulse, mountain range",       example_zh:"脉搏",   example_en:"pulse",              frequency:"high"   },
    "mò":   { meaning_zh:"脉脉，含情脉脉",   meaning_en:"affectionate gaze (literary)",example_zh:"含情脉脉",example_en:"full of tenderness", frequency:"low"    },
  }},
  "泡": { readings: {
    "pào":  { meaning_zh:"泡沫，气泡",       meaning_en:"bubble, foam",                example_zh:"泡沫",   example_en:"foam",               frequency:"high"   },
    "pāo":  { meaning_zh:"泡（动词，口语）", meaning_en:"to soak, to idle (colloq.)", example_zh:"泡澡",   example_en:"to soak in bath",    frequency:"medium" },
  }},
  "炮": { readings: {
    "pào":  { meaning_zh:"大炮，炮弹",       meaning_en:"cannon, cannonball",          example_zh:"大炮",   example_en:"cannon",             frequency:"high"   },
    "páo":  { meaning_zh:"炮制，炮烙",       meaning_en:"to prepare (medicine), to roast",example_zh:"炮制",example_en:"to prepare herbs",  frequency:"medium" },
    "bāo":  { meaning_zh:"炮羊肉（爆炒）",   meaning_en:"quick-fried mutton",          example_zh:"炮羊肉", example_en:"quick-fried mutton", frequency:"low"    },
  }},
  "漂": { readings: {
    "piāo": { meaning_zh:"漂流，漂浮",       meaning_en:"to float, to drift",          example_zh:"漂流",   example_en:"to drift",           frequency:"high"   },
    "piǎo": { meaning_zh:"漂白，漂洗",       meaning_en:"to bleach, to rinse",         example_zh:"漂白",   example_en:"to bleach",          frequency:"medium" },
    "piào": { meaning_zh:"漂亮，好漂亮",     meaning_en:"beautiful, pretty",           example_zh:"漂亮",   example_en:"beautiful",          frequency:"high"   },
  }},
  "奇": { readings: {
    "qí":   { meaning_zh:"奇怪，奇特",       meaning_en:"strange, unusual",            example_zh:"奇怪",   example_en:"strange",            frequency:"high"   },
    "jī":   { meaning_zh:"奇数，奇偶",       meaning_en:"odd number",                  example_zh:"奇数",   example_en:"odd number",         frequency:"medium" },
  }},
  "丧": { readings: {
    "sāng": { meaning_zh:"丧事，葬丧",       meaning_en:"funeral, mourning rites",     example_zh:"丧事",   example_en:"funeral",            frequency:"medium" },
    "sàng": { meaning_zh:"丧失，丧气",       meaning_en:"to lose, discouraged",        example_zh:"丧失",   example_en:"to lose",            frequency:"high"   },
  }},
  "扇": { readings: {
    "shàn": { meaning_zh:"扇子，电扇",       meaning_en:"fan, electric fan",           example_zh:"扇子",   example_en:"fan",                frequency:"high"   },
    "shān": { meaning_zh:"扇动，扇风",       meaning_en:"to fan, to flap",             example_zh:"扇动",   example_en:"to fan",             frequency:"medium" },
  }},
  "石": { readings: {
    "shí":  { meaning_zh:"石头，岩石",       meaning_en:"stone, rock",                 example_zh:"石头",   example_en:"stone",              frequency:"high"   },
    "dàn":  { meaning_zh:"石（重量单位）",   meaning_en:"dan (unit of weight, ~50kg)", example_zh:"万石",   example_en:"ten-thousand dan",   frequency:"low"    },
  }},
  "识": { readings: {
    "shí":  { meaning_zh:"认识，知识",       meaning_en:"to know, knowledge",          example_zh:"知识",   example_en:"knowledge",          frequency:"high"   },
    "zhì":  { meaning_zh:"标识，博闻强识",   meaning_en:"to record, good memory",      example_zh:"博闻强识",example_en:"vast knowledge",     frequency:"low"    },
  }},
  "似": { readings: {
    "sì":   { meaning_zh:"似乎，相似",       meaning_en:"to seem, similar",            example_zh:"似乎",   example_en:"it seems",           frequency:"high"   },
    "shì":  { meaning_zh:"似的，像似的",     meaning_en:"like, as if (colloquial)",    example_zh:"风似的", example_en:"like the wind",      frequency:"high"   },
  }},
  "踏": { readings: {
    "tà":   { meaning_zh:"踩踏，踏步",       meaning_en:"to step on, to tread",        example_zh:"踏步",   example_en:"to march in place",  frequency:"high"   },
    "tā":   { meaning_zh:"踏实，脚踏实地",   meaning_en:"down-to-earth, practical",    example_zh:"踏实",   example_en:"grounded/practical", frequency:"high"   },
  }},
  "帖": { readings: {
    "tiē":  { meaning_zh:"妥帖，安帖",       meaning_en:"proper, fitting",             example_zh:"妥帖",   example_en:"fitting/appropriate",frequency:"medium" },
    "tiě":  { meaning_zh:"请帖，帖子",       meaning_en:"invitation card, note",       example_zh:"请帖",   example_en:"invitation card",    frequency:"high"   },
    "tiè":  { meaning_zh:"字帖，临帖",       meaning_en:"model calligraphy, copybook", example_zh:"字帖",   example_en:"calligraphy copybook",frequency:"medium"},
  }},
  "校": { readings: {
    "xiào": { meaning_zh:"学校，校园",       meaning_en:"school, campus",              example_zh:"学校",   example_en:"school",             frequency:"high"   },
    "jiào": { meaning_zh:"校对，校正",       meaning_en:"to proofread, to correct",    example_zh:"校对",   example_en:"to proofread",       frequency:"medium" },
  }},
  "咽": { readings: {
    "yān":  { meaning_zh:"咽喉，咽部",       meaning_en:"throat, pharynx",             example_zh:"咽喉",   example_en:"throat",             frequency:"high"   },
    "yàn":  { meaning_zh:"吞咽，咽下",       meaning_en:"to swallow",                  example_zh:"吞咽",   example_en:"to swallow",         frequency:"high"   },
    "yè":   { meaning_zh:"哽咽，呜咽",       meaning_en:"to choke (with emotion)",     example_zh:"哽咽",   example_en:"to choke up",        frequency:"medium" },
  }},
  "饮": { readings: {
    "yǐn":  { meaning_zh:"饮水，饮料",       meaning_en:"to drink, beverage",          example_zh:"饮料",   example_en:"beverage",           frequency:"high"   },
    "yìn":  { meaning_zh:"饮马，喂水",       meaning_en:"to water (an animal)",        example_zh:"饮马",   example_en:"to water a horse",   frequency:"low"    },
  }},
  "载": { readings: {
    "zài":  { meaning_zh:"记载，载体",       meaning_en:"to record, carrier",          example_zh:"记载",   example_en:"to record",          frequency:"high"   },
    "zǎi":  { meaning_zh:"一年半载，三年五载",meaning_en:"year(s) (in time expressions)",example_zh:"三年五载",example_en:"several years",     frequency:"medium" },
  }},
  "扎": { readings: {
    "zhā":  { meaning_zh:"扎针，刺扎",       meaning_en:"to prick, to stab",           example_zh:"扎针",   example_en:"to give an injection",frequency:"high"  },
    "zā":   { meaning_zh:"扎紧，捆扎",       meaning_en:"to bind, to tie up",          example_zh:"捆扎",   example_en:"to bundle up",       frequency:"medium" },
    "zhá":  { meaning_zh:"挣扎，扑腾",       meaning_en:"to struggle",                 example_zh:"挣扎",   example_en:"to struggle",        frequency:"high"   },
  }},
  "占": { readings: {
    "zhān": { meaning_zh:"占卜，占卦",       meaning_en:"to divine, to tell fortune",  example_zh:"占卜",   example_en:"to divine",          frequency:"medium" },
    "zhàn": { meaning_zh:"占领，占有",       meaning_en:"to occupy, to possess",       example_zh:"占领",   example_en:"to occupy",          frequency:"high"   },
  }},
  "涨": { readings: {
    "zhǎng":{ meaning_zh:"涨潮，水涨",       meaning_en:"to rise (water), high tide",  example_zh:"涨潮",   example_en:"high tide",          frequency:"high"   },
    "zhàng":{ meaning_zh:"涨价，膨胀",       meaning_en:"price rise, to swell",        example_zh:"涨价",   example_en:"price increase",     frequency:"high"   },
  }},
  "钻": { readings: {
    "zuān": { meaning_zh:"钻研，钻探",       meaning_en:"to drill into, to study hard",example_zh:"钻研",   example_en:"to study diligently",frequency:"high"   },
    "zuàn": { meaning_zh:"钻石，电钻",       meaning_en:"diamond, drill (tool)",       example_zh:"钻石",   example_en:"diamond",            frequency:"high"   },
  }},

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
    "chà": { meaning_zh:"古刹，刹那",   meaning_en:"temple; instant",         example_zh:"古刹",   example_en:"ancient temple",     frequency:"medium" },
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
    "dá":  { meaning_zh:"佛塔（梵音）", meaning_en:"stupa (Sanskrit origin)", example_zh:"",       example_en:"",                   frequency:"low"    },
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

  // ── New enriched entries ──────────────────────────────────────
  "阿": { readings: {
    "ā":  { meaning_zh:"阿姨，阿哥（称呼前缀）", meaning_en:"prefix for titles/names (e.g. auntie)", example_zh:"阿姨", example_en:"auntie",      frequency:"high"   },
    "ē":  { meaning_zh:"阿谀，奉承",             meaning_en:"to flatter, to fawn",                   example_zh:"阿谀", example_en:"to flatter",   frequency:"low"    },
  }},
  "艾": { readings: {
    "ài": { meaning_zh:"方兴未艾，停止",  meaning_en:"to stop, not yet over",  example_zh:"方兴未艾", example_en:"still going strong", frequency:"medium" },
    "yì": { meaning_zh:"自怨自艾，悔恨",  meaning_en:"to repent, to reproach oneself", example_zh:"自怨自艾", example_en:"to blame oneself", frequency:"low" },
  }},
  "熬": { readings: {
    "āo": { meaning_zh:"熬白菜，煮",  meaning_en:"to cook by boiling",  example_zh:"熬白菜", example_en:"stewed cabbage",  frequency:"high"   },
    "áo": { meaning_zh:"熬夜，坚持",  meaning_en:"to endure, to stay up late", example_zh:"熬夜", example_en:"to stay up late", frequency:"high"   },
  }},
  "吧": { readings: {
    "bā": { meaning_zh:"酒吧，吧台",  meaning_en:"bar (establishment)",  example_zh:"酒吧", example_en:"bar",              frequency:"high"   },
    "ba": { meaning_zh:"语气助词",    meaning_en:"modal particle (suggestion/supposition)", example_zh:"走吧", example_en:"let's go", frequency:"high" },
  }},
  "把": { readings: {
    "bǎ": { meaning_zh:"把握，抓住",  meaning_en:"to hold, to grasp",    example_zh:"把握", example_en:"to grasp",         frequency:"high"   },
    "bà": { meaning_zh:"刀把儿，柄",  meaning_en:"handle, grip",         example_zh:"刀把", example_en:"knife handle",     frequency:"high"   },
    "bā": { meaning_zh:"语气助词",    meaning_en:"modal particle (informal)", example_zh:"把", example_en:"modal particle",  frequency:"low"    },
  }},
  "耙": { readings: {
    "bà": { meaning_zh:"耙地，翻土",  meaning_en:"to rake (soil)",       example_zh:"耙地", example_en:"to rake the field", frequency:"medium" },
    "pá": { meaning_zh:"耙子，农具",  meaning_en:"rake (farm tool)",     example_zh:"耙子", example_en:"rake",             frequency:"medium" },
  }},
  "蚌": { readings: {
    "bàng":{ meaning_zh:"河蚌，贝类",  meaning_en:"freshwater mussel",   example_zh:"河蚌", example_en:"river mussel",     frequency:"medium" },
    "bèng":{ meaning_zh:"蚌埠（地名）",meaning_en:"Bengbu (city name)",  example_zh:"蚌埠", example_en:"Bengbu city",      frequency:"medium" },
  }},
  "磅": { readings: {
    "bàng":{ meaning_zh:"磅秤，重量",  meaning_en:"pound (weight); scale", example_zh:"磅秤", example_en:"weighing scale",  frequency:"high"   },
    "páng":{ meaning_zh:"磅礴，气势",  meaning_en:"majestic, overwhelming", example_zh:"磅礴", example_en:"majestic",        frequency:"medium" },
    "pāng":{ meaning_zh:"膀胱（通假）",meaning_en:"variant of 膀",       example_zh:"磅",   example_en:"variant",          frequency:"low"    },
  }},
  "剥": { readings: {
    "bāo": { meaning_zh:"剥皮，去皮",  meaning_en:"to peel, to shell",   example_zh:"剥皮", example_en:"to peel",          frequency:"high"   },
    "bō":  { meaning_zh:"剥削，剥夺",  meaning_en:"to exploit, to deprive", example_zh:"剥削", example_en:"to exploit",     frequency:"high"   },
  }},
  "绷": { readings: {
    "bēng":{ meaning_zh:"绷带，紧绷",  meaning_en:"bandage; to stretch tight", example_zh:"绷带", example_en:"bandage",       frequency:"high"   },
    "běng":{ meaning_zh:"绷着个脸",    meaning_en:"to keep a straight face", example_zh:"绷着脸", example_en:"straight face", frequency:"medium" },
    "bèng":{ meaning_zh:"绷（方言跑）",meaning_en:"to run away (dialect)", example_zh:"绷了", example_en:"ran away",        frequency:"low"    },
  }},
  "臂": { readings: {
    "bì":  { meaning_zh:"臂膀，手臂",  meaning_en:"arm",                  example_zh:"臂膀", example_en:"arm",              frequency:"high"   },
    "bei": { meaning_zh:"胳臂（口语）",meaning_en:"arm (colloquial)",     example_zh:"胳臂", example_en:"arm (colloq.)",    frequency:"medium" },
  }},
  "别": { readings: {
    "bié": { meaning_zh:"分别，区别",  meaning_en:"to part, difference",  example_zh:"分别", example_en:"to part",          frequency:"high"   },
    "biè": { meaning_zh:"别扭，扭别",  meaning_en:"awkward, stiff",       example_zh:"别扭", example_en:"awkward",          frequency:"medium" },
  }},
  "瘪": { readings: {
    "biě": { meaning_zh:"干瘪，瘪了",  meaning_en:"shriveled, deflated",  example_zh:"干瘪", example_en:"shriveled",        frequency:"medium" },
    "biē": { meaning_zh:"瘪三（方言）",meaning_en:"bum, vagrant (dialect)", example_zh:"瘪三", example_en:"bum (dialect)",   frequency:"low"    },
  }},
  "并": { readings: {
    "bìng":{ meaning_zh:"合并，并排",  meaning_en:"to merge, side by side", example_zh:"合并", example_en:"to merge",        frequency:"high"   },
    "bīng":{ meaning_zh:"太原市别称",  meaning_en:"old name for Taiyuan city", example_zh:"并州", example_en:"Bingzhou",      frequency:"low"    },
  }},
  "伯": { readings: {
    "bó":  { meaning_zh:"伯父，伯伯",  meaning_en:"father's elder brother, uncle", example_zh:"伯父", example_en:"uncle",      frequency:"high"   },
    "bǎi": { meaning_zh:"大伯子",      meaning_en:"husband's elder brother", example_zh:"大伯子", example_en:"husband's elder brother", frequency:"medium" },
  }},
  "侧": { readings: {
    "cè":  { meaning_zh:"侧面，旁侧",  meaning_en:"side, flank",          example_zh:"侧面", example_en:"side",             frequency:"high"   },
    "zhāi":{ meaning_zh:"侧歪，倾斜",  meaning_en:"tilted, slanted",      example_zh:"侧歪", example_en:"tilted",           frequency:"low"    },
  }},
  "叉": { readings: {
    "chā": { meaning_zh:"叉子，交叉",  meaning_en:"fork; to cross",       example_zh:"叉子", example_en:"fork",             frequency:"high"   },
    "chá": { meaning_zh:"叉住，卡住",  meaning_en:"to block, to jam",     example_zh:"叉住", example_en:"to jam",           frequency:"medium" },
    "chǎ": { meaning_zh:"叉腿，张开",  meaning_en:"to spread apart (legs)", example_zh:"叉腿", example_en:"to spread legs",  frequency:"medium" },
  }},
  "澄": { readings: {
    "chéng":{ meaning_zh:"澄清，澄澈", meaning_en:"to clarify, clear",    example_zh:"澄清", example_en:"to clarify",       frequency:"high"   },
    "dèng": { meaning_zh:"水澄清再喝", meaning_en:"to let (liquid) settle clear", example_zh:"澄一澄", example_en:"let it settle", frequency:"medium" },
  }},
  "挡": { readings: {
    "dǎng":{ meaning_zh:"阻挡，挡住",  meaning_en:"to block, to obstruct", example_zh:"阻挡", example_en:"to block",        frequency:"high"   },
    "dàng":{ meaning_zh:"摆挡，拨挡",  meaning_en:"to shift gear; deflect", example_zh:"换挡", example_en:"to shift gear",   frequency:"medium" },
  }},
  "的": { readings: {
    "de":  { meaning_zh:"结构助词",    meaning_en:"structural particle (possessive/modifier)", example_zh:"我的书", example_en:"my book", frequency:"high" },
    "dì":  { meaning_zh:"目的，的确",  meaning_en:"target; indeed",       example_zh:"目的", example_en:"purpose/target",   frequency:"high"   },
    "dí":  { meaning_zh:"的确，真的",  meaning_en:"indeed, really",       example_zh:"的确", example_en:"indeed",           frequency:"high"   },
  }},
  "丁": { readings: {
    "dīng":{ meaning_zh:"壮丁，钉子",  meaning_en:"adult male; nail",     example_zh:"壮丁", example_en:"able-bodied man",  frequency:"high"   },
    "zhēng":{ meaning_zh:"丁丁声，伐木", meaning_en:"sound of chopping wood", example_zh:"丁丁", example_en:"chopping sound", frequency:"low"   },
  }},
  "读": { readings: {
    "dú":  { meaning_zh:"读书，阅读",  meaning_en:"to read",              example_zh:"读书", example_en:"to read",          frequency:"high"   },
    "dòu": { meaning_zh:"句读，标点",  meaning_en:"punctuation pause (classical)", example_zh:"句读", example_en:"punctuation", frequency:"low"   },
  }},
  "肚": { readings: {
    "dù":  { meaning_zh:"肚子，腹部",  meaning_en:"belly, abdomen",       example_zh:"肚子", example_en:"belly",            frequency:"high"   },
    "dǔ":  { meaning_zh:"羊肚儿，胃",  meaning_en:"stomach (of animal)",  example_zh:"羊肚", example_en:"sheep stomach",    frequency:"medium" },
  }},
  "顿": { readings: {
    "dùn": { meaning_zh:"停顿，顿时",  meaning_en:"to pause; suddenly",   example_zh:"停顿", example_en:"to pause",         frequency:"high"   },
    "dú":  { meaning_zh:"冒顿（古人名）",meaning_en:"Modu (historical name)", example_zh:"冒顿", example_en:"Modu (Xiongnu ruler)", frequency:"low" },
  }},
  "囤": { readings: {
    "dùn": { meaning_zh:"粮囤，存粮",  meaning_en:"grain bin, storage",   example_zh:"粮囤", example_en:"grain bin",        frequency:"medium" },
    "tún": { meaning_zh:"囤积，积聚",  meaning_en:"to hoard, to stockpile", example_zh:"囤积", example_en:"to hoard",        frequency:"high"   },
  }},
  "垛": { readings: {
    "duǒ": { meaning_zh:"门垛子，砖垛", meaning_en:"pier; stack",         example_zh:"门垛", example_en:"door pier",        frequency:"medium" },
    "duò": { meaning_zh:"麦垛，草垛",   meaning_en:"haystack, straw stack", example_zh:"麦垛", example_en:"haystack",       frequency:"medium" },
  }},
  "番": { readings: {
    "fān": { meaning_zh:"三番五次，轮番", meaning_en:"times, turn",        example_zh:"三番五次", example_en:"time and again", frequency:"high"  },
    "pān": { meaning_zh:"番禺（地名）",  meaning_en:"Panyu (place name)",  example_zh:"番禺", example_en:"Panyu district",   frequency:"low"    },
  }},
  "繁": { readings: {
    "fán": { meaning_zh:"繁华，繁忙",  meaning_en:"prosperous, busy",     example_zh:"繁华", example_en:"prosperous",       frequency:"high"   },
    "pó":  { meaning_zh:"姓繁",        meaning_en:"surname Pó",           example_zh:"姓繁", example_en:"surname",          frequency:"low"    },
  }},
  "菲": { readings: {
    "fēi": { meaning_zh:"芳菲，花草",  meaning_en:"fragrant flowers",     example_zh:"芳菲", example_en:"fragrant flowers", frequency:"medium" },
    "fěi": { meaning_zh:"菲薄，微薄",  meaning_en:"meager, humble",       example_zh:"菲薄", example_en:"meager",           frequency:"medium" },
  }},
  "佛": { readings: {
    "fó":  { meaning_zh:"佛教，佛陀",  meaning_en:"Buddhism, Buddha",     example_zh:"佛教", example_en:"Buddhism",         frequency:"high"   },
    "fú":  { meaning_zh:"仿佛，好像",  meaning_en:"as if, seemingly",     example_zh:"仿佛", example_en:"as if",            frequency:"high"   },
  }},
  "夫": { readings: {
    "fū":  { meaning_zh:"夫人，丈夫",  meaning_en:"husband; man",         example_zh:"夫人", example_en:"wife/Mrs.",        frequency:"high"   },
    "fú":  { meaning_zh:"文言虚词",    meaning_en:"classical modal particle", example_zh:"夫子", example_en:"master (classical)", frequency:"low" },
  }},
  "父": { readings: {
    "fù":  { meaning_zh:"父亲，父母",  meaning_en:"father, parent",       example_zh:"父亲", example_en:"father",           frequency:"high"   },
    "fǔ":  { meaning_zh:"田父（古称）",meaning_en:"elder/senior (classical)", example_zh:"田父", example_en:"old farmer",    frequency:"low"    },
  }},
  "脯": { readings: {
    "fǔ":  { meaning_zh:"肉脯，胸脯",  meaning_en:"dried meat; breast",   example_zh:"胸脯", example_en:"breast/chest",     frequency:"medium" },
    "pú":  { meaning_zh:"胸脯（口语）",meaning_en:"chest (colloquial)",   example_zh:"胸脯", example_en:"chest",            frequency:"medium" },
  }},
  "蛤": { readings: {
    "gé":  { meaning_zh:"蛤蚧，爬行动物", meaning_en:"gecko",             example_zh:"蛤蚧", example_en:"gecko",            frequency:"medium" },
    "há":  { meaning_zh:"蛤蟆，青蛙",   meaning_en:"toad, frog",          example_zh:"蛤蟆", example_en:"toad",             frequency:"high"   },
  }},
  "葛": { readings: {
    "gé":  { meaning_zh:"葛藤，植物",  meaning_en:"kudzu vine",           example_zh:"葛藤", example_en:"kudzu",            frequency:"medium" },
    "gě":  { meaning_zh:"姓葛",        meaning_en:"surname Gě",           example_zh:"姓葛", example_en:"surname",          frequency:"medium" },
  }},
  "个": { readings: {
    "gè":  { meaning_zh:"个体，个人",  meaning_en:"individual; measure word", example_zh:"一个", example_en:"one (measure word)", frequency:"high" },
    "gě":  { meaning_zh:"自个儿（方言）",meaning_en:"oneself (dialect)",  example_zh:"自个儿", example_en:"oneself",         frequency:"medium" },
  }},
  "供": { readings: {
    "gōng":{ meaning_zh:"供给，提供",  meaning_en:"to supply, to provide", example_zh:"供给", example_en:"to supply",       frequency:"high"   },
    "gòng":{ meaning_zh:"供认，供奉",  meaning_en:"to confess; to offer",  example_zh:"供认", example_en:"to confess",      frequency:"high"   },
  }},
  "谷": { readings: {
    "gǔ":  { meaning_zh:"山谷，谷物",  meaning_en:"valley; grain",        example_zh:"山谷", example_en:"valley",           frequency:"high"   },
    "yù":  { meaning_zh:"吐谷浑（古族名）",meaning_en:"Tuyuhun (ancient ethnic group)", example_zh:"吐谷浑", example_en:"Tuyuhun", frequency:"low" },
  }},
  "观": { readings: {
    "guān":{ meaning_zh:"观看，观察",  meaning_en:"to observe, to watch",  example_zh:"观看", example_en:"to watch",        frequency:"high"   },
    "guàn":{ meaning_zh:"寺观，道观",  meaning_en:"Taoist temple",        example_zh:"道观", example_en:"Taoist temple",    frequency:"medium" },
  }},
  "合": { readings: {
    "hé":  { meaning_zh:"合作，合并",  meaning_en:"to cooperate, to combine", example_zh:"合作", example_en:"to cooperate", frequency:"high"   },
    "gě":  { meaning_zh:"一升的十分之一",meaning_en:"gě (unit of volume, 1/10 sheng)", example_zh:"一合", example_en:"one gě", frequency:"low"  },
  }},
  "核": { readings: {
    "hé":  { meaning_zh:"核心，核实",  meaning_en:"core; to verify",      example_zh:"核心", example_en:"core",             frequency:"high"   },
    "hú":  { meaning_zh:"核儿，果核",  meaning_en:"pit, stone (of fruit)", example_zh:"桃核", example_en:"peach pit",       frequency:"medium" },
  }},
  "貉": { readings: {
    "hé":  { meaning_zh:"一丘之貉",    meaning_en:"birds of a feather",   example_zh:"一丘之貉", example_en:"same ilk",     frequency:"medium" },
    "háo": { meaning_zh:"貉子，动物",  meaning_en:"raccoon dog",          example_zh:"貉子", example_en:"raccoon dog",      frequency:"medium" },
  }},
  "哼": { readings: {
    "hēng":{ meaning_zh:"哼歌，哼声",  meaning_en:"to hum; to grunt",     example_zh:"哼歌", example_en:"to hum a tune",   frequency:"high"   },
    "hng": { meaning_zh:"哼（叹词）",  meaning_en:"hmph! (exclamation)",  example_zh:"哼！", example_en:"hmph!",            frequency:"medium" },
  }},
  "红": { readings: {
    "hóng":{ meaning_zh:"红色，红旗",  meaning_en:"red",                  example_zh:"红色", example_en:"red color",        frequency:"high"   },
    "gōng":{ meaning_zh:"女红，刺绣",  meaning_en:"needlework, embroidery", example_zh:"女红", example_en:"needlework",      frequency:"low"    },
  }},
  "虹": { readings: {
    "hóng":{ meaning_zh:"彩虹，虹霓",  meaning_en:"rainbow",              example_zh:"彩虹", example_en:"rainbow",          frequency:"high"   },
    "jiàng":{ meaning_zh:"出虹了",     meaning_en:"rainbow appeared (dialect)", example_zh:"出虹", example_en:"rainbow",     frequency:"low"    },
  }},
  "侯": { readings: {
    "hóu": { meaning_zh:"封侯，诸侯",  meaning_en:"marquis, feudal lord", example_zh:"封侯", example_en:"to be ennobled",   frequency:"medium" },
    "hòu": { meaning_zh:"闽侯（地名）",meaning_en:"Minhou (place name)",  example_zh:"闽侯", example_en:"Minhou county",    frequency:"low"    },
  }},
  "糊": { readings: {
    "hú":  { meaning_zh:"糊涂，含糊",  meaning_en:"muddled, vague",       example_zh:"糊涂", example_en:"muddled",          frequency:"high"   },
    "hù":  { meaning_zh:"糊弄，糊墙",  meaning_en:"to paste, to plaster", example_zh:"糊墙", example_en:"to plaster wall",  frequency:"medium" },
    "hū":  { meaning_zh:"糊糊（粥）",  meaning_en:"porridge, paste (colloq.)", example_zh:"糊糊", example_en:"porridge",    frequency:"medium" },
  }},
  "哗": { readings: {
    "huá": { meaning_zh:"哗众取宠",    meaning_en:"to show off, to pander to", example_zh:"哗众取宠", example_en:"to court popularity", frequency:"medium" },
    "huā": { meaning_zh:"水哗哗地流",  meaning_en:"sound of rushing water", example_zh:"哗哗", example_en:"rushing sound",   frequency:"high"   },
  }},
  "纪": { readings: {
    "jì":  { meaning_zh:"纪念，世纪",  meaning_en:"to commemorate; century", example_zh:"纪念", example_en:"to commemorate", frequency:"high"  },
    "jǐ":  { meaning_zh:"姓纪",        meaning_en:"surname Jǐ",            example_zh:"姓纪", example_en:"surname",         frequency:"low"    },
  }},
  "家": { readings: {
    "jiā": { meaning_zh:"家庭，回家",  meaning_en:"home, family",          example_zh:"家庭", example_en:"family",          frequency:"high"   },
    "jie": { meaning_zh:"整天家（口语）",meaning_en:"all day long (colloq.)", example_zh:"整天家", example_en:"all day long", frequency:"medium" },
  }},
  "渐": { readings: {
    "jiàn":{ meaning_zh:"逐渐，渐进",  meaning_en:"gradually, progressive", example_zh:"逐渐", example_en:"gradually",      frequency:"high"   },
    "jiān":{ meaning_zh:"东渐于海",    meaning_en:"to flow eastward to sea (classical)", example_zh:"东渐于海", example_en:"flows eastward", frequency:"low" },
  }},
  "将": { readings: {
    "jiāng":{ meaning_zh:"将来，将军",  meaning_en:"will; general",        example_zh:"将来", example_en:"future",          frequency:"high"   },
    "jiàng":{ meaning_zh:"将领，降将",  meaning_en:"military officer",     example_zh:"将领", example_en:"military officer", frequency:"high"  },
  }},
  "嚼": { readings: {
    "jiáo":{ meaning_zh:"咀嚼，嚼碎",  meaning_en:"to chew",              example_zh:"嚼碎", example_en:"to chew up",      frequency:"high"   },
    "jué": { meaning_zh:"倒嚼（反刍）",meaning_en:"to ruminate (chew cud)", example_zh:"倒嚼", example_en:"to ruminate",    frequency:"low"    },
    "jiào":{ meaning_zh:"倒嚼（方言）",meaning_en:"ruminating (dialect)",  example_zh:"倒嚼", example_en:"ruminating",      frequency:"low"    },
  }},
  "节": { readings: {
    "jié": { meaning_zh:"季节，节日",  meaning_en:"season; festival",     example_zh:"节日", example_en:"holiday",         frequency:"high"   },
    "jiē": { meaning_zh:"节骨眼（口语）",meaning_en:"critical juncture (colloq.)", example_zh:"节骨眼", example_en:"critical moment", frequency:"medium" },
  }},
  "芥": { readings: {
    "jiè": { meaning_zh:"芥菜，芥末",  meaning_en:"mustard greens; wasabi", example_zh:"芥菜", example_en:"mustard greens", frequency:"high"  },
    "gài": { meaning_zh:"芥蓝菜",      meaning_en:"Chinese broccoli",     example_zh:"芥蓝", example_en:"Chinese broccoli", frequency:"medium" },
  }},
  "尽": { readings: {
    "jìn": { meaning_zh:"尽力，尽管",  meaning_en:"to exhaust; despite",  example_zh:"尽力", example_en:"to try one's best", frequency:"high"  },
    "jǐn": { meaning_zh:"尽管，仅",    meaning_en:"despite; as much as",  example_zh:"尽管", example_en:"despite",          frequency:"high"   },
  }},
  "劲": { readings: {
    "jìn": { meaning_zh:"劲头，使劲",  meaning_en:"strength, energy",     example_zh:"使劲", example_en:"to exert force",  frequency:"high"   },
    "jìng":{ meaning_zh:"劲敌，强劲",  meaning_en:"powerful, strong",     example_zh:"劲敌", example_en:"powerful enemy",  frequency:"high"   },
  }},
  "菌": { readings: {
    "jùn": { meaning_zh:"香菌，蘑菇",  meaning_en:"mushroom, fungus",     example_zh:"香菌", example_en:"mushroom",        frequency:"medium" },
    "jūn": { meaning_zh:"细菌，病菌",  meaning_en:"bacteria, germ",       example_zh:"细菌", example_en:"bacteria",        frequency:"high"   },
  }},
  "咳": { readings: {
    "ké":  { meaning_zh:"咳嗽，咳痰",  meaning_en:"to cough",             example_zh:"咳嗽", example_en:"to cough",        frequency:"high"   },
    "hāi": { meaning_zh:"咳声叹气",    meaning_en:"to sigh deeply",       example_zh:"咳声叹气", example_en:"to sigh",     frequency:"medium" },
  }},
  "肋": { readings: {
    "lèi": { meaning_zh:"肋骨，肋条",  meaning_en:"rib",                  example_zh:"肋骨", example_en:"rib",             frequency:"high"   },
    "lē":  { meaning_zh:"肋肢（方言）",meaning_en:"armpit/side (dialect)", example_zh:"肋肢", example_en:"armpit (dialect)", frequency:"low"   },
  }},
  "丽": { readings: {
    "lì":  { meaning_zh:"美丽，秀丽",  meaning_en:"beautiful",            example_zh:"美丽", example_en:"beautiful",       frequency:"high"   },
    "lí":  { meaning_zh:"丽水（地名）",meaning_en:"Lishui (place name)",  example_zh:"丽水", example_en:"Lishui city",     frequency:"low"    },
  }},
  "俩": { readings: {
    "liǎ": { meaning_zh:"咱俩，两人",  meaning_en:"us two, a pair",       example_zh:"咱俩", example_en:"the two of us",   frequency:"high"   },
    "liǎng":{ meaning_zh:"夫妇俩",     meaning_en:"the couple (formal)",  example_zh:"夫妇俩", example_en:"the couple",    frequency:"medium" },
  }},
  "凉": { readings: {
    "liáng":{ meaning_zh:"凉快，凉爽", meaning_en:"cool, refreshing",     example_zh:"凉快", example_en:"cool and refreshing", frequency:"high" },
    "liàng":{ meaning_zh:"凉一凉，晾", meaning_en:"to cool down, to air out", example_zh:"凉一凉", example_en:"let it cool", frequency:"medium" },
  }},
  "燎": { readings: {
    "liáo":{ meaning_zh:"燎原，大火",  meaning_en:"prairie fire; to scorch", example_zh:"燎原", example_en:"prairie fire",  frequency:"medium" },
    "liǎo":{ meaning_zh:"把头发燎了",  meaning_en:"to singe (hair, colloq.)", example_zh:"燎了头发", example_en:"singed hair", frequency:"low"  },
  }},
  "令": { readings: {
    "lìng":{ meaning_zh:"命令，令牌",  meaning_en:"order, command",       example_zh:"命令", example_en:"order",           frequency:"high"   },
    "líng":{ meaning_zh:"一令纸",      meaning_en:"a ream of paper",      example_zh:"一令", example_en:"a ream",          frequency:"low"    },
  }},
  "六": { readings: {
    "liù": { meaning_zh:"第六，六个",  meaning_en:"six",                  example_zh:"六个", example_en:"six",             frequency:"high"   },
    "lù":  { meaning_zh:"六合（地名）",meaning_en:"Liuhe (place name)",   example_zh:"六合", example_en:"Liuhe district",  frequency:"low"    },
  }},
  "络": { readings: {
    "luò": { meaning_zh:"脉络，网络",  meaning_en:"network, web",         example_zh:"网络", example_en:"network",         frequency:"high"   },
    "lào": { meaning_zh:"络子（方言）",meaning_en:"net bag (dialect)",    example_zh:"络子", example_en:"net bag",         frequency:"low"    },
  }},
  "漫": { readings: {
    "màn": { meaning_zh:"漫骂，漫长",  meaning_en:"to rant; long/vast",   example_zh:"漫骂", example_en:"to scold wildly", frequency:"high"   },
    "mán": { meaning_zh:"漫漶（模糊）",meaning_en:"blurred, illegible",   example_zh:"漫漶", example_en:"blurred",         frequency:"low"    },
  }},
  "猫": { readings: {
    "māo": { meaning_zh:"小猫，猫咪",  meaning_en:"cat",                  example_zh:"猫咪", example_en:"kitty",           frequency:"high"   },
    "máo": { meaning_zh:"猫腰（弓腰）",meaning_en:"to stoop, to bend down", example_zh:"猫腰", example_en:"to stoop",      frequency:"medium" },
  }},
  "冒": { readings: {
    "mào": { meaning_zh:"冒险，冒烟",  meaning_en:"to brave; to emit",    example_zh:"冒险", example_en:"to take a risk",  frequency:"high"   },
    "mò":  { meaning_zh:"冒顿（古匈奴君主名）",meaning_en:"Modu (Xiongnu ruler)", example_zh:"冒顿", example_en:"Modu",      frequency:"low"   },
  }},
  "么": { readings: {
    "me":  { meaning_zh:"什么，这么",  meaning_en:"what; so (modal)",     example_zh:"什么", example_en:"what",            frequency:"high"   },
    "ma":  { meaning_zh:"语气助词",    meaning_en:"modal particle",       example_zh:"嘛",   example_en:"modal particle",  frequency:"high"   },
  }},
  "蒙": { readings: {
    "méng":{ meaning_zh:"启蒙，蒙蔽",  meaning_en:"to enlighten; to deceive", example_zh:"启蒙", example_en:"to enlighten", frequency:"high"  },
    "mēng":{ meaning_zh:"蒙骗，欺蒙",  meaning_en:"to deceive, to fool",  example_zh:"蒙骗", example_en:"to deceive",      frequency:"medium" },
    "měng":{ meaning_zh:"蒙古（地名）",meaning_en:"Mongolia",             example_zh:"蒙古", example_en:"Mongolia",        frequency:"high"   },
  }},
  "眯": { readings: {
    "mí":  { meaning_zh:"沙子眯了眼",  meaning_en:"(dust) got in the eye", example_zh:"眯眼", example_en:"eye got in dust", frequency:"medium" },
    "mī":  { meaning_zh:"眯缝，眯眯",  meaning_en:"to squint",            example_zh:"眯缝", example_en:"to squint",       frequency:"medium" },
  }},
  "泌": { readings: {
    "mì":  { meaning_zh:"分泌，泌尿",  meaning_en:"to secrete",           example_zh:"分泌", example_en:"to secrete",      frequency:"high"   },
    "bì":  { meaning_zh:"泌阳（地名）",meaning_en:"Biyang (place name)",  example_zh:"泌阳", example_en:"Biyang county",   frequency:"low"    },
  }},
  "秘": { readings: {
    "mì":  { meaning_zh:"秘密，神秘",  meaning_en:"secret, mysterious",   example_zh:"秘密", example_en:"secret",          frequency:"high"   },
    "bì":  { meaning_zh:"秘鲁（国名）",meaning_en:"Peru (country name)",  example_zh:"秘鲁", example_en:"Peru",            frequency:"medium" },
  }},
  "摩": { readings: {
    "mó":  { meaning_zh:"摩擦，按摩",  meaning_en:"to rub, to massage",   example_zh:"摩擦", example_en:"friction",        frequency:"high"   },
    "mā":  { meaning_zh:"摩掌（摩挲）",meaning_en:"to stroke gently",     example_zh:"摩挲", example_en:"to stroke",       frequency:"low"    },
  }},
  "哪": { readings: {
    "nǎ":  { meaning_zh:"哪儿，哪里",  meaning_en:"where, which",         example_zh:"哪里", example_en:"where",           frequency:"high"   },
    "nèi": { meaning_zh:"哪（一）年",  meaning_en:"which year (spoken)",  example_zh:"哪年", example_en:"which year",      frequency:"medium" },
    "na":  { meaning_zh:"语气助词",    meaning_en:"modal particle",       example_zh:"哪！", example_en:"modal particle",  frequency:"medium" },
    "né":  { meaning_zh:"哪吒（人名）",meaning_en:"Nezha (mythical figure)", example_zh:"哪吒", example_en:"Nezha",         frequency:"low"    },
  }},
  "那": { readings: {
    "nà":  { meaning_zh:"那里，那个",  meaning_en:"that",                 example_zh:"那个", example_en:"that",            frequency:"high"   },
    "nèi": { meaning_zh:"那个（口语）",meaning_en:"that (spoken form)",   example_zh:"那个", example_en:"that (spoken)",   frequency:"high"   },
    "nā":  { meaning_zh:"姓那",        meaning_en:"surname Nā",           example_zh:"姓那", example_en:"surname",         frequency:"low"    },
  }},
  "娜": { readings: {
    "nà":  { meaning_zh:"用于人名",    meaning_en:"used in personal names", example_zh:"娜娜", example_en:"Nana (name)",    frequency:"medium" },
    "nuó": { meaning_zh:"袅娜，婀娜",  meaning_en:"graceful, willowy",    example_zh:"袅娜", example_en:"willowy",         frequency:"medium" },
  }},
  "囊": { readings: {
    "náng":{ meaning_zh:"囊括，口袋",  meaning_en:"to include; bag",      example_zh:"囊括", example_en:"to encompass",    frequency:"high"   },
    "nāng":{ meaning_zh:"囊肿（软包）",meaning_en:"cyst; soft swelling",  example_zh:"囊肿", example_en:"cyst",            frequency:"medium" },
  }},
  "呢": { readings: {
    "ní":  { meaning_zh:"呢子，毛料",  meaning_en:"woolen cloth",         example_zh:"呢子", example_en:"woolen cloth",    frequency:"medium" },
    "ne":  { meaning_zh:"语气助词",    meaning_en:"modal particle (continuing)", example_zh:"你呢", example_en:"what about you", frequency:"high" },
  }},
  "拧": { readings: {
    "níng":{ meaning_zh:"拧螺丝，拧紧",meaning_en:"to screw, to tighten", example_zh:"拧螺丝", example_en:"to screw in",  frequency:"high"   },
    "nǐng":{ meaning_zh:"拧毛巾，扭",  meaning_en:"to wring (a towel)",   example_zh:"拧毛巾", example_en:"to wring a towel", frequency:"medium" },
    "nìng":{ meaning_zh:"拧牌气，固执",meaning_en:"stubborn, wrongheaded", example_zh:"拧脾气", example_en:"stubborn",     frequency:"medium" },
  }},
  "排": { readings: {
    "pái": { meaning_zh:"排列，排队",  meaning_en:"to arrange, to line up", example_zh:"排队", example_en:"to queue",      frequency:"high"   },
    "pǎi": { meaning_zh:"排子车",      meaning_en:"flatbed cart",         example_zh:"排子车", example_en:"flatbed cart", frequency:"low"    },
  }},
  "跑": { readings: {
    "pǎo": { meaning_zh:"跑步，奔跑",  meaning_en:"to run",               example_zh:"跑步", example_en:"to run",          frequency:"high"   },
    "páo": { meaning_zh:"虎跑泉（地名）",meaning_en:"Hupao Spring (place)", example_zh:"虎跑", example_en:"Hupao Spring",  frequency:"low"    },
  }},
  "劈": { readings: {
    "pī":  { meaning_zh:"劈开，劈柴",  meaning_en:"to chop, to split",    example_zh:"劈柴", example_en:"to chop wood",    frequency:"high"   },
    "pǐ":  { meaning_zh:"劈好了的柴",  meaning_en:"split firewood",       example_zh:"劈柴", example_en:"firewood",        frequency:"medium" },
  }},
  "仆": { readings: {
    "pū":  { meaning_zh:"前仆后继",    meaning_en:"to fall forward; to throw oneself into", example_zh:"前仆后继", example_en:"one after another", frequency:"medium" },
    "pú":  { meaning_zh:"仆从，仆人",  meaning_en:"servant",              example_zh:"仆人", example_en:"servant",         frequency:"high"   },
  }},
  "曝": { readings: {
    "pù":  { meaning_zh:"一曝十寒",    meaning_en:"to work in fits and starts", example_zh:"一曝十寒", example_en:"inconsistent effort", frequency:"medium" },
    "bào": { meaning_zh:"曝光，曝晒",  meaning_en:"exposure (photo/sun)", example_zh:"曝光", example_en:"exposure",        frequency:"high"   },
  }},
  "妻": { readings: {
    "qī":  { meaning_zh:"妻子，妻儿",  meaning_en:"wife",                 example_zh:"妻子", example_en:"wife",            frequency:"high"   },
    "qì":  { meaning_zh:"以女嫁人",    meaning_en:"to marry off a daughter (classical)", example_zh:"妻之", example_en:"to marry off", frequency:"low" },
  }},
  "铅": { readings: {
    "qiān":{ meaning_zh:"铅笔，铅块",  meaning_en:"lead (metal); pencil", example_zh:"铅笔", example_en:"pencil",          frequency:"high"   },
    "yán": { meaning_zh:"铅山（地名）",meaning_en:"Yanshan (place name)", example_zh:"铅山", example_en:"Yanshan county",  frequency:"low"    },
  }},
  "浅": { readings: {
    "qiǎn":{ meaning_zh:"浅近，浅显",  meaning_en:"shallow, simple",      example_zh:"浅显", example_en:"easy to understand", frequency:"high" },
    "jiān":{ meaning_zh:"浅浅（流水声）",meaning_en:"sound of shallow water", example_zh:"浅浅", example_en:"babbling sound", frequency:"low"  },
  }},
  "呛": { readings: {
    "qiāng":{ meaning_zh:"呛着了，呛到", meaning_en:"to choke (on food/smoke)", example_zh:"呛着", example_en:"to choke",   frequency:"high"   },
    "qiàng":{ meaning_zh:"够呛，厉害",  meaning_en:"terrific; overwhelming (colloq.)", example_zh:"够呛", example_en:"overwhelming", frequency:"medium" },
  }},
  "茄": { readings: {
    "qié": { meaning_zh:"茄子，蔬菜",  meaning_en:"eggplant",             example_zh:"茄子", example_en:"eggplant",        frequency:"high"   },
    "jiā": { meaning_zh:"雪茄，烟草",  meaning_en:"cigar",                example_zh:"雪茄", example_en:"cigar",           frequency:"medium" },
  }},
  "区": { readings: {
    "qū":  { meaning_zh:"区别，地区",  meaning_en:"area, district",       example_zh:"地区", example_en:"region",          frequency:"high"   },
    "ōu":  { meaning_zh:"姓区",        meaning_en:"surname Ōu",           example_zh:"姓区", example_en:"surname",         frequency:"low"    },
  }},
  "圈": { readings: {
    "quān":{ meaning_zh:"圆圈，圈子",  meaning_en:"circle, ring",         example_zh:"圆圈", example_en:"circle",          frequency:"high"   },
    "juàn":{ meaning_zh:"猪圈，牲口圈",meaning_en:"animal pen, sty",      example_zh:"猪圈", example_en:"pig pen",         frequency:"medium" },
    "juān":{ meaning_zh:"圈住，围圈",  meaning_en:"to corral, to enclose", example_zh:"圈住", example_en:"to enclose",     frequency:"medium" },
  }},
  "雀": { readings: {
    "qué": { meaning_zh:"麻雀，雀鸟",  meaning_en:"sparrow",              example_zh:"麻雀", example_en:"sparrow",         frequency:"high"   },
    "qiāo":{ meaning_zh:"雀子（雀斑）",meaning_en:"freckle",              example_zh:"雀斑", example_en:"freckle",         frequency:"medium" },
    "qiǎo":{ meaning_zh:"雀盲眼",      meaning_en:"night blindness",      example_zh:"雀盲", example_en:"night blindness", frequency:"low"    },
  }},
  "撒": { readings: {
    "sā":  { meaning_zh:"撒网，撒手",  meaning_en:"to cast (net); to let go", example_zh:"撒网", example_en:"to cast a net", frequency:"high"  },
    "sǎ":  { meaning_zh:"撒种，播撒",  meaning_en:"to scatter, to sow",   example_zh:"撒种", example_en:"to sow seeds",    frequency:"high"   },
  }},
  "扫": { readings: {
    "sǎo": { meaning_zh:"扫地，扫描",  meaning_en:"to sweep, to scan",    example_zh:"扫地", example_en:"to sweep",        frequency:"high"   },
    "sào": { meaning_zh:"扫帚，笤帚",  meaning_en:"broom",                example_zh:"扫帚", example_en:"broom",           frequency:"medium" },
  }},
  "煞": { readings: {
    "shà": { meaning_zh:"煞费苦心",    meaning_en:"to take great pains",  example_zh:"煞费苦心", example_en:"painstaking",  frequency:"medium" },
    "shā": { meaning_zh:"煞车，刹车",  meaning_en:"to brake, to stop",    example_zh:"煞车", example_en:"to brake",        frequency:"high"   },
  }},
  "杉": { readings: {
    "shān":{ meaning_zh:"杉树，林木",  meaning_en:"fir tree",             example_zh:"杉树", example_en:"fir tree",        frequency:"medium" },
    "shā": { meaning_zh:"杉木（建材）",meaning_en:"fir wood (timber)",    example_zh:"杉木", example_en:"fir timber",      frequency:"medium" },
  }},
  "苫": { readings: {
    "shān":{ meaning_zh:"草苫子，草帘",meaning_en:"straw mat/thatch",     example_zh:"草苫", example_en:"straw mat",       frequency:"low"    },
    "shàn":{ meaning_zh:"苫布，遮盖",  meaning_en:"to cover with straw/canvas", example_zh:"苫布", example_en:"tarpaulin",  frequency:"low"    },
  }},
  "上": { readings: {
    "shàng":{ meaning_zh:"上面，上去", meaning_en:"above, to go up",      example_zh:"上面", example_en:"above",           frequency:"high"   },
    "shǎng":{ meaning_zh:"上声，声调", meaning_en:"rising tone (3rd tone)", example_zh:"上声", example_en:"rising tone",   frequency:"medium" },
  }},
  "稍": { readings: {
    "shāo":{ meaning_zh:"稍微，稍等",  meaning_en:"slightly, a little",   example_zh:"稍微", example_en:"slightly",        frequency:"high"   },
    "shào":{ meaning_zh:"稍息（军令）",meaning_en:"stand at ease (military)", example_zh:"稍息", example_en:"stand at ease", frequency:"medium" },
  }},
  "蛇": { readings: {
    "shé": { meaning_zh:"毒蛇，蛇类",  meaning_en:"snake",                example_zh:"毒蛇", example_en:"venomous snake",  frequency:"high"   },
    "yí":  { meaning_zh:"委蛇，敷衍",  meaning_en:"to act perfunctorily (literary)", example_zh:"委蛇", example_en:"evasive", frequency:"low"   },
  }},
  "食": { readings: {
    "shí": { meaning_zh:"食品，食物",  meaning_en:"food, to eat",         example_zh:"食品", example_en:"food",            frequency:"high"   },
    "sì":  { meaning_zh:"拿东西给人吃",meaning_en:"to feed (others), causative eat", example_zh:"食马", example_en:"to feed a horse", frequency:"low" },
  }},
  "氏": { readings: {
    "shì": { meaning_zh:"姓氏，氏族",  meaning_en:"clan name, surname",   example_zh:"姓氏", example_en:"surname",         frequency:"high"   },
    "zhī": { meaning_zh:"月氏（汉朝西域国名）",meaning_en:"Yuezhi (ancient people)", example_zh:"月氏", example_en:"Yuezhi",  frequency:"low"   },
  }},
  "属": { readings: {
    "shǔ": { meaning_zh:"属于，归属",  meaning_en:"to belong to",         example_zh:"属于", example_en:"to belong to",    frequency:"high"   },
    "zhǔ": { meaning_zh:"属望，嘱托",  meaning_en:"to entrust; to hope (classical)", example_zh:"属望", example_en:"to pin hopes on", frequency:"low" },
  }},
  "术": { readings: {
    "shù": { meaning_zh:"技术，艺术",  meaning_en:"technique, art",       example_zh:"技术", example_en:"technology",      frequency:"high"   },
    "zhú": { meaning_zh:"白术（中药）",meaning_en:"Atractylodes (herb)",  example_zh:"白术", example_en:"Atractylodes",    frequency:"low"    },
  }},
  "刷": { readings: {
    "shuā":{ meaning_zh:"刷子，刷牙",  meaning_en:"brush; to brush",      example_zh:"刷牙", example_en:"to brush teeth",  frequency:"high"   },
    "shuà":{ meaning_zh:"刷白（颜色）",meaning_en:"brushed white, whitewash", example_zh:"刷白", example_en:"to whitewash", frequency:"low"   },
  }},
  "率": { readings: {
    "shuài":{ meaning_zh:"率领，率先", meaning_en:"to lead, to pioneer",  example_zh:"率领", example_en:"to lead",         frequency:"high"   },
    "lǜ":   { meaning_zh:"效率，比率", meaning_en:"efficiency; rate/ratio", example_zh:"效率", example_en:"efficiency",    frequency:"high"   },
  }},
  "台": { readings: {
    "tái": { meaning_zh:"台上，台子",  meaning_en:"platform, stage",      example_zh:"台上", example_en:"on stage",        frequency:"high"   },
    "tāi": { meaning_zh:"天台（地名）",meaning_en:"Tiantai (place name)", example_zh:"天台", example_en:"Tiantai county",  frequency:"low"    },
  }},
  "苔": { readings: {
    "tái": { meaning_zh:"青苔，苔藓",  meaning_en:"moss",                 example_zh:"青苔", example_en:"moss",            frequency:"medium" },
    "tāi": { meaning_zh:"舌苔，苔膜",  meaning_en:"tongue coating",       example_zh:"舌苔", example_en:"tongue coating",  frequency:"medium" },
  }},
  "陶": { readings: {
    "táo": { meaning_zh:"陶冶，陶器",  meaning_en:"pottery; to cultivate (character)", example_zh:"陶瓷", example_en:"pottery", frequency:"high" },
    "yáo": { meaning_zh:"皋陶（古人名）",meaning_en:"Gaoyao (ancient person)", example_zh:"皋陶", example_en:"Gaoyao",     frequency:"low"    },
  }},
  "提": { readings: {
    "tí":  { meaning_zh:"提升，提问",  meaning_en:"to lift; to raise (question)", example_zh:"提升", example_en:"to promote", frequency:"high"  },
    "dī":  { meaning_zh:"提防，留意",  meaning_en:"to be on guard against", example_zh:"提防", example_en:"to be wary of", frequency:"medium" },
  }},
  "体": { readings: {
    "tǐ":  { meaning_zh:"身体，体育",  meaning_en:"body; physical",       example_zh:"身体", example_en:"body",            frequency:"high"   },
    "tī":  { meaning_zh:"体己，体贴",  meaning_en:"personal savings; considerate", example_zh:"体己", example_en:"personal savings", frequency:"low" },
  }},
  "通": { readings: {
    "tōng":{ meaning_zh:"通过，通知",  meaning_en:"to pass through; to notify", example_zh:"通过", example_en:"to pass",    frequency:"high"   },
    "tòng":{ meaning_zh:"说了一通",    meaning_en:"a stretch of speech (measure word)", example_zh:"说一通", example_en:"a stretch", frequency:"medium" },
  }},
  "驮": { readings: {
    "tuó": { meaning_zh:"驮粮食，驮载",meaning_en:"to carry on the back (animal)", example_zh:"驮粮", example_en:"to carry grain", frequency:"medium" },
    "duò": { meaning_zh:"驮子（驮物）",meaning_en:"pack (goods on animal)", example_zh:"驮子", example_en:"pack/bundle",    frequency:"low"    },
  }},
  "万": { readings: {
    "wàn": { meaning_zh:"万岁，万里",  meaning_en:"ten thousand; myriad", example_zh:"万岁", example_en:"long live",       frequency:"high"   },
    "mò":  { meaning_zh:"万俟（复姓）",meaning_en:"Moqi (compound surname)", example_zh:"万俟", example_en:"Moqi (surname)", frequency:"low"   },
  }},
  "尾": { readings: {
    "wěi": { meaning_zh:"尾巴，末尾",  meaning_en:"tail; end",            example_zh:"尾巴", example_en:"tail",            frequency:"high"   },
    "yǐ":  { meaning_zh:"马尾儿（口语）",meaning_en:"horsetail (colloq.)",example_zh:"马尾儿", example_en:"ponytail",      frequency:"medium" },
  }},
  "尉": { readings: {
    "wèi": { meaning_zh:"尉官，将尉",  meaning_en:"military officer",     example_zh:"尉官", example_en:"military officer", frequency:"medium" },
    "yù":  { meaning_zh:"尉迟（复姓）",meaning_en:"Yuchi (compound surname)", example_zh:"尉迟", example_en:"Yuchi",        frequency:"low"    },
  }},
  "蔚": { readings: {
    "wèi": { meaning_zh:"蔚蓝，蔚然",  meaning_en:"azure; lush and grand", example_zh:"蔚蓝", example_en:"azure blue",     frequency:"high"   },
    "yù":  { meaning_zh:"河北蔚县",    meaning_en:"Yu county, Hebei",     example_zh:"蔚县", example_en:"Yu county",       frequency:"low"    },
  }},
  "涡": { readings: {
    "wō":  { meaning_zh:"旋涡，涡流",  meaning_en:"whirlpool, vortex",    example_zh:"旋涡", example_en:"whirlpool",       frequency:"high"   },
    "guō": { meaning_zh:"涡河（水名）",meaning_en:"Guo River (river name)", example_zh:"涡河", example_en:"Guo River",     frequency:"low"    },
  }},
  "乌": { readings: {
    "wū":  { meaning_zh:"乌鸦，乌黑",  meaning_en:"crow; black",          example_zh:"乌鸦", example_en:"crow",            frequency:"high"   },
    "wù":  { meaning_zh:"乌拉草（植物）",meaning_en:"Ula sedge (plant)",  example_zh:"乌拉草", example_en:"Ula sedge",    frequency:"low"    },
  }},
  "洗": { readings: {
    "xǐ":  { meaning_zh:"洗涤，洗澡",  meaning_en:"to wash",              example_zh:"洗澡", example_en:"to bathe",        frequency:"high"   },
    "xiǎn":{ meaning_zh:"姓洗",        meaning_en:"surname Xiǎn",         example_zh:"姓洗", example_en:"surname",         frequency:"low"    },
  }},
  "鲜": { readings: {
    "xiān":{ meaning_zh:"新鲜，鲜花",  meaning_en:"fresh, new",           example_zh:"新鲜", example_en:"fresh",           frequency:"high"   },
    "xiǎn":{ meaning_zh:"鲜见，鲜有",  meaning_en:"rarely, seldom",       example_zh:"鲜见", example_en:"rarely seen",     frequency:"medium" },
  }},
  "铣": { readings: {
    "xiǎn":{ meaning_zh:"铣铁，生铁",  meaning_en:"pig iron (metallurgy)", example_zh:"铣铁", example_en:"pig iron",       frequency:"low"    },
    "xǐ":  { meaning_zh:"铣床，铣削",  meaning_en:"milling machine",      example_zh:"铣床", example_en:"milling machine", frequency:"medium" },
  }},
  "巷": { readings: {
    "xiàng":{ meaning_zh:"小巷，巷子", meaning_en:"alley, lane",          example_zh:"小巷", example_en:"alley",           frequency:"high"   },
    "hàng": { meaning_zh:"巷道（矿洞）",meaning_en:"mine tunnel, shaft",  example_zh:"巷道", example_en:"mine tunnel",     frequency:"medium" },
  }},
  "削": { readings: {
    "xiāo":{ meaning_zh:"削皮，削减",  meaning_en:"to peel; to reduce",   example_zh:"削减", example_en:"to cut/reduce",   frequency:"high"   },
    "xuē": { meaning_zh:"剥削，削弱",  meaning_en:"to exploit; to weaken", example_zh:"剥削", example_en:"to exploit",     frequency:"high"   },
  }},
  "芯": { readings: {
    "xīn": { meaning_zh:"灯芯，芯片",  meaning_en:"wick; core chip",      example_zh:"芯片", example_en:"chip (semiconductor)", frequency:"high" },
    "xìn": { meaning_zh:"芯子（弹芯）",meaning_en:"bullet core, cartridge core", example_zh:"芯子", example_en:"bullet core", frequency:"low" },
  }},
  "吁": { readings: {
    "xū":  { meaning_zh:"长吁短叹",    meaning_en:"to heave sighs",       example_zh:"长吁", example_en:"to heave a sigh", frequency:"medium" },
    "yù":  { meaning_zh:"呼吁，吁求",  meaning_en:"to appeal, to call for", example_zh:"呼吁", example_en:"to appeal",     frequency:"high"   },
  }},
  "旋": { readings: {
    "xuán":{ meaning_zh:"旋转，旋风",  meaning_en:"to revolve; whirlwind", example_zh:"旋转", example_en:"to revolve",     frequency:"high"   },
    "xuàn":{ meaning_zh:"旋风，急旋",  meaning_en:"spinning fast",        example_zh:"旋风", example_en:"whirlwind (fast)", frequency:"medium" },
  }},
  "呀": { readings: {
    "yā":  { meaning_zh:"叹词，哎呀",  meaning_en:"ah! (exclamation)",    example_zh:"哎呀", example_en:"oh dear!",        frequency:"high"   },
    "ya":  { meaning_zh:"语气助词",    meaning_en:"modal particle",       example_zh:"好呀", example_en:"great! (modal)",  frequency:"high"   },
  }},
  "轧": { readings: {
    "yà":  { meaning_zh:"轧棉花，轧制",meaning_en:"to gin (cotton); to roll", example_zh:"轧棉花", example_en:"to gin cotton", frequency:"medium" },
    "zhá": { meaning_zh:"轧钢，轧制",  meaning_en:"to roll (steel)",      example_zh:"轧钢", example_en:"to roll steel",   frequency:"high"   },
  }},
  "殷": { readings: {
    "yīn": { meaning_zh:"殷勤，热情",  meaning_en:"attentive, eager to serve", example_zh:"殷勤", example_en:"attentive",   frequency:"high"   },
    "yān": { meaning_zh:"殷红，深红",  meaning_en:"dark red, crimson",    example_zh:"殷红", example_en:"crimson",         frequency:"medium" },
    "yǐn": { meaning_zh:"殷（雷声）",  meaning_en:"rumbling (of thunder)", example_zh:"殷殷", example_en:"rumbling sound", frequency:"low"    },
  }},
  "与": { readings: {
    "yǔ":  { meaning_zh:"给予，赠与",  meaning_en:"to give; and (conjunction)", example_zh:"与其", example_en:"rather than", frequency:"high"  },
    "yù":  { meaning_zh:"参与，与会",  meaning_en:"to participate",       example_zh:"参与", example_en:"to participate",  frequency:"high"   },
    "yú":  { meaning_zh:"同（古语）",  meaning_en:"same as (archaic)",    example_zh:"与",   example_en:"archaic usage",   frequency:"low"    },
  }},
  "雨": { readings: {
    "yǔ":  { meaning_zh:"下雨，雨水",  meaning_en:"rain",                 example_zh:"雨水", example_en:"rainwater",       frequency:"high"   },
    "yù":  { meaning_zh:"雨雪（动词）",meaning_en:"to rain; to snow (verb, classical)", example_zh:"雨雪", example_en:"to snow/rain", frequency:"low" },
  }},
  "钥": { readings: {
    "yuè": { meaning_zh:"锁钥，关键",  meaning_en:"key (to lock); key factor", example_zh:"锁钥", example_en:"key (to lock)", frequency:"medium" },
    "yào": { meaning_zh:"钥匙",        meaning_en:"key (physical key)",   example_zh:"钥匙", example_en:"key",             frequency:"high"   },
  }},
  "攒": { readings: {
    "zǎn": { meaning_zh:"积攒，攒钱",  meaning_en:"to save up, to accumulate", example_zh:"积攒", example_en:"to save up",   frequency:"high"   },
    "cuán":{ meaning_zh:"攒聚，凑拢",  meaning_en:"to gather together",   example_zh:"攒聚", example_en:"to crowd together", frequency:"medium" },
  }},
  "炸": { readings: {
    "zhà": { meaning_zh:"炸弹，爆炸",  meaning_en:"to explode; bomb",     example_zh:"炸弹", example_en:"bomb",            frequency:"high"   },
    "zhá": { meaning_zh:"炸糕，油炸",  meaning_en:"to deep-fry",          example_zh:"炸鱼", example_en:"fried fish",      frequency:"high"   },
  }},
  "栅": { readings: {
    "zhà": { meaning_zh:"栅栏，围栅",  meaning_en:"fence, railing",       example_zh:"栅栏", example_en:"fence",           frequency:"high"   },
    "shān":{ meaning_zh:"栅极（电子）",meaning_en:"grid (electronics)",   example_zh:"栅极", example_en:"grid electrode",  frequency:"low"    },
  }},
  "粘": { readings: {
    "zhān":{ meaning_zh:"粘贴，粘合",  meaning_en:"to stick, to glue",    example_zh:"粘贴", example_en:"to paste",        frequency:"high"   },
    "nián":{ meaning_zh:"姓粘",        meaning_en:"surname Nián",         example_zh:"姓粘", example_en:"surname",         frequency:"low"    },
  }},
  "召": { readings: {
    "zhào":{ meaning_zh:"召开，召集",  meaning_en:"to convene, to summon", example_zh:"召开", example_en:"to convene",     frequency:"high"   },
    "shào":{ meaning_zh:"姓召",        meaning_en:"surname Shào",         example_zh:"姓召", example_en:"surname",         frequency:"low"    },
  }},
  "这": { readings: {
    "zhè": { meaning_zh:"这个，这里",  meaning_en:"this",                 example_zh:"这个", example_en:"this",            frequency:"high"   },
    "zhèi":{ meaning_zh:"这（一）个",  meaning_en:"this (spoken form)",   example_zh:"这个", example_en:"this one",        frequency:"high"   },
  }},
  "症": { readings: {
    "zhèng":{ meaning_zh:"急症，症状", meaning_en:"symptom, ailment",     example_zh:"急症", example_en:"acute illness",   frequency:"high"   },
    "zhēng":{ meaning_zh:"症结，问题", meaning_en:"crux, underlying cause", example_zh:"症结", example_en:"crux of problem", frequency:"high" },
  }},
  "挣": { readings: {
    "zhèng":{ meaning_zh:"挣钱，挣得", meaning_en:"to earn (money)",      example_zh:"挣钱", example_en:"to earn money",   frequency:"high"   },
    "zhēng":{ meaning_zh:"挣扎，扑打", meaning_en:"to struggle, to thrash", example_zh:"挣扎", example_en:"to struggle",   frequency:"high"   },
  }},
  "殖": { readings: {
    "zhí": { meaning_zh:"繁殖，殖民",  meaning_en:"to reproduce; colony", example_zh:"繁殖", example_en:"to reproduce",    frequency:"high"   },
    "shí": { meaning_zh:"骨殖（骨头）",meaning_en:"remains, bones (literary)", example_zh:"骨殖", example_en:"remains",    frequency:"low"    },
  }},
  "只": { readings: {
    "zhī": { meaning_zh:"只有，量词",  meaning_en:"only; measure word (animals/objects)", example_zh:"一只猫", example_en:"one cat", frequency:"high" },
    "zhǐ": { meaning_zh:"只是，仅仅",  meaning_en:"only, just",           example_zh:"只是", example_en:"but, only",       frequency:"high"   },
  }},
  "峙": { readings: {
    "zhì": { meaning_zh:"对峙，屹立",  meaning_en:"to stand face-to-face; to stand firm", example_zh:"对峙", example_en:"standoff", frequency:"medium" },
    "shì": { meaning_zh:"繁峙（地名）",meaning_en:"Fanshi (place name)",  example_zh:"繁峙", example_en:"Fanshi county",   frequency:"low"    },
  }},
  "种": { readings: {
    "zhǒng":{ meaning_zh:"种子，种类", meaning_en:"seed; species; kind",  example_zh:"种子", example_en:"seed",            frequency:"high"   },
    "zhòng":{ meaning_zh:"种田，种植", meaning_en:"to plant, to cultivate", example_zh:"种田", example_en:"to farm",        frequency:"high"   },
    "chóng":{ meaning_zh:"姓种",       meaning_en:"surname Chóng",        example_zh:"姓种", example_en:"surname",         frequency:"low"    },
  }},
  "椎": { readings: {
    "zhuī":{ meaning_zh:"脊椎骨，椎骨",meaning_en:"vertebra, spine",      example_zh:"脊椎", example_en:"spine",           frequency:"high"   },
    "chuí":{ meaning_zh:"铁椎，锤击",  meaning_en:"mace; to hammer",      example_zh:"铁椎", example_en:"iron mace",       frequency:"medium" },
  }},
  "仔": { readings: {
    "zǐ":  { meaning_zh:"仔细，仔肩",  meaning_en:"careful; to shoulder (responsibility)", example_zh:"仔细", example_en:"careful", frequency:"high" },
    "zǎi": { meaning_zh:"牛仔，小崽",  meaning_en:"calf; young (Cantonese-influenced)", example_zh:"牛仔", example_en:"cowboy/calf", frequency:"high" },
    "zī":  { meaning_zh:"仔肩（担负）",meaning_en:"to shoulder (formal/classical)", example_zh:"仔肩", example_en:"to bear a burden", frequency:"low" },
  }},
};

// ── Level → difficulty number map ────────────────────────────
const LEVEL_MAP = {
  "一级": 1, "二级": 2, "三级": 3, "四级": 4,
  "五级": 5, "六级": 6, "七-九级": 7,
  "大": { readings: {
    "dà":  { meaning_zh:"大小，巨大", meaning_en:"big, large", example_zh:"大家", example_pinyin:"dà jiā", example_en:"everyone", frequency:"high" },
    "dài": { meaning_zh:"大夫（医生）", meaning_en:"doctor (archaic/formal)", example_zh:"大夫", example_pinyin:"dài fu", example_en:"doctor", frequency:"medium" },
  }},
  "打": { readings: {
    "dǎ":  { meaning_zh:"打击，打电话", meaning_en:"to hit, to make a call", example_zh:"打电话", example_pinyin:"dǎ diàn huà", example_en:"to make a phone call", frequency:"high" },
    "dá":  { meaning_zh:"一打（十二个）", meaning_en:"a dozen", example_zh:"一打", example_pinyin:"yī dá", example_en:"a dozen", frequency:"medium" },
  }},
  "出": { readings: {
    "chū": { meaning_zh:"出去，出来", meaning_en:"to go out, to come out", example_zh:"出门", example_pinyin:"chū mén", example_en:"to go out", frequency:"high" },
    "chù": { meaning_zh:"出席（书面语）", meaning_en:"to attend (formal/classical)", example_zh:"出席", example_pinyin:"chū xí", example_en:"to attend", frequency:"low" },
  }},
  "下": { readings: {
    "xià": { meaning_zh:"下面，下去", meaning_en:"below, to go down", example_zh:"下面", example_pinyin:"xià miàn", example_en:"below, underneath", frequency:"high" },
    "xia": { meaning_zh:"下（轻声，动态助词）", meaning_en:"(light tone particle after verbs)", example_zh:"坐下", example_pinyin:"zuò xia", example_en:"sit down", frequency:"high" },
  }},
  "车": { readings: {
    "chē": { meaning_zh:"汽车，车辆", meaning_en:"vehicle, car", example_zh:"汽车", example_pinyin:"qì chē", example_en:"car, automobile", frequency:"high" },
    "jū":  { meaning_zh:"象棋中的车", meaning_en:"chariot (in Chinese chess)", example_zh:"车马", example_pinyin:"jū mǎ", example_en:"chariot and horse (chess)", frequency:"low" },
  }},
  "画": { readings: {
    "huà": { meaning_zh:"画画，图画", meaning_en:"to draw, picture", example_zh:"画画", example_pinyin:"huà huà", example_en:"to draw a picture", frequency:"high" },
    "huā": { meaning_zh:"画十字（古语）", meaning_en:"to make a cross mark (classical)", example_zh:"画十字", example_pinyin:"huā shí zì", example_en:"to make a cross", frequency:"low" },
  }},
  "飞": { readings: {
    "fēi": { meaning_zh:"飞翔，飞机", meaning_en:"to fly, airplane", example_zh:"飞机", example_pinyin:"fēi jī", example_en:"airplane", frequency:"high" },
    "fěi": { meaning_zh:"飞廉（古代神话）", meaning_en:"wind deity (classical/archaic)", example_zh:"飞廉", example_pinyin:"fěi lián", example_en:"wind god (mythology)", frequency:"low" },
  }},
  "鱼": { readings: {
    "yú":  { meaning_zh:"鱼类，鱼肉", meaning_en:"fish", example_zh:"金鱼", example_pinyin:"jīn yú", example_en:"goldfish", frequency:"high" },
    "yǔ":  { meaning_zh:"鱼鲁（形容写错字）", meaning_en:"error in writing characters (classical)", example_zh:"鱼鲁", example_pinyin:"yǔ lǔ", example_en:"writing mistakes (idiom)", frequency:"low" },
  }},
  "带": { readings: {
    "dài": { meaning_zh:"带来，带走", meaning_en:"to bring, to take along", example_zh:"带来", example_pinyin:"dài lái", example_en:"to bring", frequency:"high" },
    "dǎi": { meaning_zh:"带（方言，坏）", meaning_en:"bad (dialectal)", example_zh:"好带坏", example_pinyin:"hǎo dǎi huài", example_en:"good and bad", frequency:"low" },
  }},
  "断": { readings: {
    "duàn": { meaning_zh:"断开，判断", meaning_en:"to break, to judge", example_zh:"断开", example_pinyin:"duàn kāi", example_en:"to disconnect, to break off", frequency:"high" },
    "duǎn": { meaning_zh:"断（古音，通短）", meaning_en:"short (classical variant)", example_zh:"断章", example_pinyin:"duǎn zhāng", example_en:"excerpt (classical)", frequency:"low" },
  }},
  "极": { readings: {
    "jí":  { meaning_zh:"极端，北极", meaning_en:"extreme, pole", example_zh:"北极", example_pinyin:"běi jí", example_en:"North Pole", frequency:"high" },
    "jì":  { meaning_zh:"穷极（古语）", meaning_en:"to exhaust (classical)", example_zh:"极欲", example_pinyin:"jì yù", example_en:"extreme desire (classical)", frequency:"low" },
  }},
  "近": { readings: {
    "jìn": { meaning_zh:"近距离，附近", meaning_en:"near, close", example_zh:"附近", example_pinyin:"fù jìn", example_en:"nearby", frequency:"high" },
    "jǐn": { meaning_zh:"近（古音）", meaning_en:"near (classical pronunciation)", example_zh:"近来", example_pinyin:"jǐn lái", example_en:"recently (classical)", frequency:"low" },
  }},
  "苦": { readings: {
    "kǔ":  { meaning_zh:"痛苦，苦味", meaning_en:"bitter, suffering", example_zh:"痛苦", example_pinyin:"tòng kǔ", example_en:"pain, suffering", frequency:"high" },
    "gǔ":  { meaning_zh:"苦（古音，地名用）", meaning_en:"archaic reading in place names", example_zh:"苦县", example_pinyin:"gǔ xiàn", example_en:"Guxian (ancient place name)", frequency:"low" },
  }},
  "木": { readings: {
    "mù":  { meaning_zh:"木头，木材", meaning_en:"wood, timber", example_zh:"木头", example_pinyin:"mù tou", example_en:"wood, blockhead", frequency:"high" },
    "mò":  { meaning_zh:"木（古音，通"沐"）", meaning_en:"archaic variant reading", example_zh:"木兰", example_pinyin:"mò lán", example_en:"Mulan (classical reading)", frequency:"low" },
  }},
  "约": { readings: {
    "yuē": { meaning_zh:"约定，大约", meaning_en:"approximately, to agree", example_zh:"约定", example_pinyin:"yuē dìng", example_en:"to agree upon, appointment", frequency:"high" },
    "yāo": { meaning_zh:"约束，用秤称量", meaning_en:"to restrain, to weigh (classical)", example_zh:"约束", example_pinyin:"yāo shù", example_en:"to restrain (classical)", frequency:"low" },
  }},
  "装": { readings: {
    "zhuāng": { meaning_zh:"装扮，衣装", meaning_en:"to dress up, clothing", example_zh:"服装", example_pinyin:"fú zhuāng", example_en:"clothing, costume", frequency:"high" },
    "zhuàng": { meaning_zh:"装（方言/旧音）", meaning_en:"dialectal/archaic variant", example_zh:"行装", example_pinyin:"xíng zhuàng", example_en:"travel luggage (variant)", frequency:"low" },
  }},
  "著": { readings: {
    "zhù":  { meaning_zh:"著作，著名", meaning_en:"to write, famous", example_zh:"著名", example_pinyin:"zhù míng", example_en:"famous, well-known", frequency:"high" },
    "zhe":  { meaning_zh:"看着，走着", meaning_en:"(progressive/state particle)", example_zh:"看着", example_pinyin:"kàn zhe", example_en:"watching", frequency:"high" },
    "zháo": { meaning_zh:"着火，着急", meaning_en:"to catch (fire/cold), anxious", example_zh:"着火", example_pinyin:"zháo huǒ", example_en:"to catch fire", frequency:"medium" },
    "zhuó": { meaning_zh:"着手，着力", meaning_en:"to apply, to set about", example_zh:"着手", example_pinyin:"zhuó shǒu", example_en:"to set about doing", frequency:"medium" },
  }},
  "拨": { readings: {
    "bō":  { meaning_zh:"拨打，拨动", meaning_en:"to dial, to stir", example_zh:"拨打", example_pinyin:"bō dǎ", example_en:"to dial (a number)", frequency:"high" },
    "bǒ":  { meaning_zh:"拨（古音）", meaning_en:"archaic reading", example_zh:"拨乱", example_pinyin:"bǒ luàn", example_en:"to restore order from chaos (classical)", frequency:"low" },
  }},
  "跌": { readings: {
    "diē": { meaning_zh:"跌倒，下跌", meaning_en:"to fall, to drop", example_zh:"跌倒", example_pinyin:"diē dǎo", example_en:"to fall down", frequency:"high" },
    "dié": { meaning_zh:"跌（古音）", meaning_en:"archaic variant pronunciation", example_zh:"跌宕", example_pinyin:"dié dàng", example_en:"ups and downs (classical)", frequency:"low" },
  }},
  "纯": { readings: {
    "chún": { meaning_zh:"纯粹，纯洁", meaning_en:"pure, genuine", example_zh:"纯洁", example_pinyin:"chún jié", example_en:"pure, clean", frequency:"high" },
    "zhǔn": { meaning_zh:"纯（古音）", meaning_en:"archaic pronunciation variant", example_zh:"纯粹", example_pinyin:"zhǔn cuì", example_en:"pure, purely (classical)", frequency:"low" },
  }},
  "颤": { readings: {
    "chàn": { meaning_zh:"颤抖，颤动", meaning_en:"to tremble, to shiver", example_zh:"颤抖", example_pinyin:"chàn dǒu", example_en:"to tremble, to shiver", frequency:"high" },
    "zhàn": { meaning_zh:"颤（多用于"颤栗"）", meaning_en:"to shudder (used in 颤栗)", example_zh:"颤栗", example_pinyin:"zhàn lì", example_en:"to shudder with fear", frequency:"medium" },
  }},
  "稿": { readings: {
    "gǎo": { meaning_zh:"稿件，草稿", meaning_en:"manuscript, draft", example_zh:"草稿", example_pinyin:"cǎo gǎo", example_en:"draft, rough copy", frequency:"high" },
    "hào": { meaning_zh:"稿（古音，通"皓"白色）", meaning_en:"white, bright (classical variant)", example_zh:"稿素", example_pinyin:"hào sù", example_en:"plain white (classical)", frequency:"low" },
  }},

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
