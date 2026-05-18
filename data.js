// ══════════════════════════════════════════════════════════════
// data.js — Polyphonic Character Database
// ══════════════════════════════════════════════════════════════
//
// ĐỒNG NHẤT với index.html (nguồn dữ liệu chuẩn duy nhất).
// Dữ liệu đã được hiệu đính theo:
//   - Phụ lục từ điển 《常见的多音字》 (435 chữ chuẩn)
//   - Tra cứu 《现代汉语词典》 cho từng chữ nghi vấn
// Đã loại bỏ các chữ đơn âm bị gán nhầm; bổ sung bản dịch tiếng Việt.
//
// HOW TO ADD NEW CHARACTERS:
// 1. Add a row to RAW_DATA following the same format:
//    { hanzi:"字", pinyin:"pīn/yīn", level:"一级" }
//
// 2. Optionally add enriched meanings/examples to ENRICHED:
//    "字": { readings: {
//        "pīn": { meaning_zh:"拼写", meaning_en:"to spell", example_zh:"拼音",
//                 example_pinyin:"pīn yīn", example_en:"pinyin",
//                 meaning_vi:"đánh vần", example_vi:"phiên âm", frequency:"high" },
//    } }
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

// ── Raw data (451 chars) ─────────────────────────────────
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
  {hanzi:"裂",pinyin:"liè/liě",level:"四级"},
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
  {hanzi:"夹",pinyin:"jiā/jiá/gā",level:"六级"},
  {hanzi:"监",pinyin:"jiān/jiàn",level:"六级"},
  {hanzi:"角",pinyin:"jiǎo/jué",level:"二级"},
  {hanzi:"结",pinyin:"jiē/jié",level:"二级"},
  {hanzi:"解",pinyin:"jiě/jiè/xiè",level:"三级"},
  {hanzi:"禁",pinyin:"jīn/jìn",level:"六级"},
  {hanzi:"看",pinyin:"kān/kàn",level:"一级"},
  {hanzi:"空",pinyin:"kōng/kòng",level:"二级"},
  {hanzi:"累",pinyin:"lèi/lěi",level:"一级"},
  {hanzi:"量",pinyin:"liáng/liàng",level:"六级"},
  {hanzi:"笼",pinyin:"lóng/lǒng",level:"六级"},
  {hanzi:"绿",pinyin:"lǜ/lù",level:"二级"},
  {hanzi:"论",pinyin:"lùn/lún",level:"二级"},
  {hanzi:"落",pinyin:"luò/lào/là",level:"三级"},
  {hanzi:"泡",pinyin:"pào/pāo",level:"六级"},
  {hanzi:"炮",pinyin:"pào/páo/bāo",level:"六级"},
  {hanzi:"漂",pinyin:"piāo/piǎo/piào",level:"二级"},
  {hanzi:"奇",pinyin:"qí/jī",level:"六级"},
  {hanzi:"丧",pinyin:"sāng/sàng",level:"六级"},
  {hanzi:"石",pinyin:"shí/dàn",level:"三级"},
  {hanzi:"识",pinyin:"shí/zhì",level:"一级"},
  {hanzi:"似",pinyin:"sì/shì",level:"三级"},
  {hanzi:"踏",pinyin:"tā/tà",level:"六级"},
  {hanzi:"帖",pinyin:"tiē/tiě/tiè",level:"六级"},
  {hanzi:"咽",pinyin:"yān/yàn/yè",level:"六级"},
  {hanzi:"饮",pinyin:"yǐn/yìn",level:"六级"},
  {hanzi:"扎",pinyin:"zhā/zā/zhá",level:"六级"},
  {hanzi:"占",pinyin:"zhān/zhàn",level:"二级"},
  {hanzi:"涨",pinyin:"zhǎng/zhàng",level:"六级"},
  {hanzi:"钻",pinyin:"zuān/zuàn",level:"六级"},
  {hanzi:"扒",pinyin:"bā/pá",level:"七-九级"},
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
  {hanzi:"藉",pinyin:"jiè/jí",level:"七-九级"},
  {hanzi:"经",pinyin:"jīng/jìng",level:"二级"},
  {hanzi:"颈",pinyin:"jǐng/gěng",level:"七-九级"},
  {hanzi:"句",pinyin:"jù/gōu",level:"二级"},
  {hanzi:"据",pinyin:"jù/jū",level:"三级"},
  {hanzi:"倔",pinyin:"jué/juè",level:"七-九级"},
  {hanzi:"卡",pinyin:"qiǎ/kǎ",level:"二级"},
  {hanzi:"咯",pinyin:"kǎ/lo/gē",level:"七-九级"},
  {hanzi:"可",pinyin:"kě/kè",level:"一级"},
  {hanzi:"扛",pinyin:"káng/gāng",level:"七-九级"},
  {hanzi:"溃",pinyin:"kuì/huì",level:"七-九级"},
  {hanzi:"拉",pinyin:"lā/lá",level:"二级"},
  {hanzi:"烙",pinyin:"lào/luò",level:"七-九级"},
  {hanzi:"勒",pinyin:"lè/lēi",level:"七-九级"},
  {hanzi:"棱",pinyin:"léng/lēng/líng",level:"七-九级"},
  {hanzi:"撩",pinyin:"liāo/liáo",level:"七-九级"},
  {hanzi:"淋",pinyin:"lín/lìn",level:"七-九级"},
  {hanzi:"溜",pinyin:"liū/liù",level:"七-九级"},
  {hanzi:"搂",pinyin:"lǒu/lōu",level:"七-九级"},
  {hanzi:"陆",pinyin:"lù/liù",level:"三级"},
  {hanzi:"抹",pinyin:"mǒ/mò/mā",level:"七-九级"},
  {hanzi:"蔓",pinyin:"màn/wàn/mán",level:"七-九级"},
  {hanzi:"闷",pinyin:"mēn/mèn",level:"七-九级"},
  {hanzi:"泥",pinyin:"ní/nì",level:"七-九级"},
  {hanzi:"弄",pinyin:"nòng/lòng",level:"二级"},
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
  {hanzi:"同",pinyin:"tóng/tòng",level:"一级"},
  {hanzi:"拓",pinyin:"tuò/tà",level:"七-九级"},
  {hanzi:"瓦",pinyin:"wǎ/wà",level:"七-九级"},
  {hanzi:"委",pinyin:"wěi/wēi",level:"五级"},
  {hanzi:"为",pinyin:"wéi/wèi",level:"二级"},
  {hanzi:"肖",pinyin:"xiāo/xiào",level:"七-九级"},
  {hanzi:"邪",pinyin:"xié/yá",level:"七-九级"},
  {hanzi:"压",pinyin:"yā/yà",level:"三级"},
  {hanzi:"燕",pinyin:"yān/yàn",level:"七-九级"},
  {hanzi:"耶",pinyin:"yē/yé",level:"七-九级"},
  {hanzi:"叶",pinyin:"yè/xié",level:"四级"},
  {hanzi:"遗",pinyin:"yí/wèi",level:"四级"},
  {hanzi:"佣",pinyin:"yōng/yòng",level:"七-九级"},
  {hanzi:"有",pinyin:"yǒu/yòu",level:"一级"},
  {hanzi:"予",pinyin:"yú/yǔ",level:"七-九级"},
  {hanzi:"语",pinyin:"yǔ/yù",level:"一级"},
  {hanzi:"晕",pinyin:"yūn/yùn",level:"七-九级"},
  {hanzi:"脏",pinyin:"zāng/zàng",level:"七-九级"},
  {hanzi:"择",pinyin:"zé/zhái",level:"七-九级"},
  {hanzi:"正",pinyin:"zhēng/zhèng",level:"一级"},
  {hanzi:"轴",pinyin:"zhóu/zhòu",level:"七-九级"},
  {hanzi:"爪",pinyin:"zhǎo/zhuǎ",level:"七-九级"},
  {hanzi:"转",pinyin:"zhuǎn/zhuàn",level:"三级"},
  {hanzi:"拽",pinyin:"zhuài/zhuāi/yè",level:"七-九级"},
  {hanzi:"作",pinyin:"zuò/zuō",level:"一级"},

  // ── New entries from 附录三 images ───────────────────────────
  // A
  {hanzi:"阿",pinyin:"ā/ē",level:"四级"},
  {hanzi:"艾",pinyin:"ài/yì",level:"七-九级"},
  {hanzi:"熬",pinyin:"áo/āo",level:"七-九级"},
  // B
  {hanzi:"吧",pinyin:"bā/ba",level:"一级"},
  {hanzi:"把",pinyin:"bǎ/bà/ba",level:"一级"},
  {hanzi:"耙",pinyin:"bà/pá",level:"七-九级"},
  {hanzi:"蚌",pinyin:"bàng/bèng",level:"七-九级"},
  {hanzi:"磅",pinyin:"bàng/páng",level:"七-九级"},
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
  {hanzi:"六",pinyin:"liù/lù",level:"一级"},
  {hanzi:"络",pinyin:"luò/lào",level:"七-九级"},
  {hanzi:"漫",pinyin:"màn/mán",level:"七-九级"},
  {hanzi:"猫",pinyin:"māo/máo",level:"一级"},
  {hanzi:"冒",pinyin:"mào/mò",level:"七-九级"},
  {hanzi:"么",pinyin:"me/ma",level:"一级"},
  {hanzi:"眯",pinyin:"mí/mī",level:"七-九级"},
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
  {hanzi:"跑",pinyin:"pǎo/páo",level:"一级"},
  {hanzi:"排",pinyin:"pái/pǎi",level:"二级"},
  {hanzi:"劈",pinyin:"pī/pǐ",level:"七-九级"},
  {hanzi:"仆",pinyin:"pū/pú",level:"七-九级"},
  {hanzi:"曝",pinyin:"pù/bào",level:"七-九级"},
  // Q
  {hanzi:"妻",pinyin:"qī/qì",level:"三级"},
  {hanzi:"铅",pinyin:"qiān/yán",level:"七-九级"},
  {hanzi:"浅",pinyin:"qiǎn/jiān",level:"三级"},
  {hanzi:"呛",pinyin:"qiāng/qiàng",level:"七-九级"},
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
  {hanzi:"栅",pinyin:"zhà/shān",level:"七-九级"},
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
  {hanzi:"下",pinyin:"xià/xia",level:"一级"},
  {hanzi:"车",pinyin:"chē/jū",level:"一级"},
  {hanzi:"画",pinyin:"huà/huā",level:"二级"},
  {hanzi:"苦",pinyin:"kǔ/gǔ",level:"四级"},
  {hanzi:"约",pinyin:"yuē/yāo",level:"三级"},
  {hanzi:"装",pinyin:"zhuāng/zhuàng",level:"四级"},
  {hanzi:"著",pinyin:"zhù/zhe/zháo/zhuó",level:"四级"},
  {hanzi:"颤",pinyin:"chàn/zhàn",level:"六级"},
  // ── Newly added polyphones ────────────────────────────────────
  {hanzi:"谁",pinyin:"shéi/shuí",level:"一级"},
  {hanzi:"佛",pinyin:"fó/fú",level:"二级"},
  {hanzi:"率",pinyin:"lǜ/shuài",level:"三级"},
  {hanzi:"剥",pinyin:"bāo/bō",level:"四级"},
  {hanzi:"削",pinyin:"xiāo/xuē",level:"四级"},
  {hanzi:"炸",pinyin:"zhá/zhà",level:"三级"},
  {hanzi:"蒙",pinyin:"mēng/méng/měng",level:"四级"},
  {hanzi:"扇",pinyin:"shān/shàn",level:"三级"},
  {hanzi:"校",pinyin:"xiào/jiào",level:"一级"},
  {hanzi:"脉",pinyin:"mài/mò",level:"五级"},
  {hanzi:"载",pinyin:"zǎi/zài",level:"四级"},
  {hanzi:"抢",pinyin:"qiāng/qiǎng",level:"三级"},
  {hanzi:"埋",pinyin:"mái/mán",level:"四级"},
  {hanzi:"柏",pinyin:"bǎi/bó/bò",level:"五级"},
  {hanzi:"茄",pinyin:"qié/jiā",level:"三级"},
  {hanzi:"缩",pinyin:"suō/sù",level:"四级"},
  {hanzi:"吓",pinyin:"xià/hè",level:"二级"},
  {hanzi:"粘",pinyin:"nián/zhān",level:"四级"},
  {hanzi:"畜",pinyin:"chù/xù",level:"五级"},
  {hanzi:"芥",pinyin:"jiè/gài",level:"六级"},
  {hanzi:"仇",pinyin:"chóu/qiú",level:"五级"},
  {hanzi:"令",pinyin:"lìng/líng",level:"三级"},
  {hanzi:"伺",pinyin:"sì/cì",level:"六级"},
  {hanzi:"侗",pinyin:"dòng/tóng",level:"七-九级"},
  {hanzi:"侥",pinyin:"jiǎo/yáo",level:"六级"},
  {hanzi:"刺",pinyin:"cì/cī",level:"四级"},
  {hanzi:"剿",pinyin:"jiǎo/chāo",level:"七-九级"},
  {hanzi:"厂",pinyin:"chǎng/ān",level:"二级"},
  {hanzi:"吗",pinyin:"ma/má/mǎ",level:"一级"},
  {hanzi:"吭",pinyin:"háng/kēng",level:"六级"},
  {hanzi:"吵",pinyin:"chǎo/chāo",level:"二级"},
  {hanzi:"哦",pinyin:"ó/ò/é",level:"四级"},
  {hanzi:"唬",pinyin:"hǔ/xià",level:"六级"},
  {hanzi:"啦",pinyin:"la/lā",level:"二级"},
  {hanzi:"喳",pinyin:"zhā/chā",level:"七-九级"},
  {hanzi:"嘘",pinyin:"xū/shī",level:"六级"},
  {hanzi:"埔",pinyin:"pǔ/bù",level:"七-九级"},
  {hanzi:"姥",pinyin:"mǔ/lǎo",level:"六级"},
  {hanzi:"尺",pinyin:"chǐ/chě",level:"二级"},
  {hanzi:"尿",pinyin:"niào/suī",level:"五级"},
  {hanzi:"崎",pinyin:"qí/qī",level:"七-九级"},
  {hanzi:"广",pinyin:"guǎng/ān",level:"二级"},
  {hanzi:"待",pinyin:"dài/dāi",level:"二级"},
  {hanzi:"挝",pinyin:"zhuā/wō",level:"七-九级"},
  {hanzi:"擂",pinyin:"léi/lèi",level:"七-九级"},
  {hanzi:"敦",pinyin:"dūn/duì",level:"六级"},
  {hanzi:"柜",pinyin:"guì/jǔ",level:"四级"},
  {hanzi:"查",pinyin:"chá/zhā",level:"二级"},
  {hanzi:"浚",pinyin:"jùn/xùn",level:"七-九级"},
  {hanzi:"溺",pinyin:"nì/niào",level:"六级"},
  {hanzi:"潦",pinyin:"lǎo/liáo",level:"七-九级"},
  {hanzi:"瀑",pinyin:"pù/bào",level:"五级"},
  {hanzi:"牟",pinyin:"móu/mù",level:"六级"},
  {hanzi:"疟",pinyin:"nüè/yào",level:"六级"},
  {hanzi:"瘩",pinyin:"dá/da",level:"七-九级"},
  {hanzi:"碌",pinyin:"lù/liù",level:"六级"},
  {hanzi:"糜",pinyin:"mí/méi",level:"七-九级"},
  {hanzi:"绰",pinyin:"chuò/chāo",level:"六级"},
  {hanzi:"翟",pinyin:"dí/zhái",level:"七-九级"},
  {hanzi:"腊",pinyin:"là/xī",level:"七-九级"},
  {hanzi:"莎",pinyin:"suō/shā",level:"七-九级"},
  {hanzi:"蚂",pinyin:"mǎ/mā/mà",level:"五级"},
  {hanzi:"衰",pinyin:"shuāi/cuī",level:"五级"},
  {hanzi:"裳",pinyin:"shang/cháng",level:"七-九级"},
  {hanzi:"褪",pinyin:"tùn/tuì",level:"七-九级"},
  {hanzi:"豁",pinyin:"huō/huò",level:"六级"},
  {hanzi:"逮",pinyin:"dài/dǎi",level:"五级"},
  {hanzi:"靡",pinyin:"mǐ/mí",level:"七-九级"},
  {hanzi:"馏",pinyin:"liù/liú",level:"七-九级"},
  {hanzi:"魄",pinyin:"pò/tuò/bó",level:"六级"},
];

// ── Enriched meanings & examples ─────────────────────────────
const ENRICHED = {

  "着": { readings: {
    "zhe": { meaning_zh:"动态助词（持续）", meaning_en:"aspect particle (ongoing)", example_zh:"穿着", example_pinyin:"chuān zhe", example_en:"wearing", meaning_vi:"trợ từ thể (đang/tiếp diễn)", example_vi:"mặc (quần áo)", frequency:"high" },
    "zháo": { meaning_zh:"接触到，达到", meaning_en:"to touch, to reach", example_zh:"着急", example_pinyin:"zháo jí", example_en:"anxious", meaning_vi:"chạm tới, gặp phải", example_vi:"sốt ruột", frequency:"high" },
    "zhuó": { meaning_zh:"穿着，附着", meaning_en:"to wear, to be attached to", example_zh:"着装", example_pinyin:"zhuó zhuāng", example_en:"attire", meaning_vi:"mặc, đính kèm", example_vi:"trang phục", frequency:"medium" },
  }},
  "了": { readings: {
    "le": { meaning_zh:"动态助词（完成）", meaning_en:"aspect particle (completed)", example_zh:"吃了", example_pinyin:"chī le", example_en:"ate (completed)", meaning_vi:"trợ từ thể (hoàn thành)", example_vi:"đã ăn", frequency:"high" },
    "liǎo": { meaning_zh:"完结，了解", meaning_en:"to finish, to understand", example_zh:"了解", example_pinyin:"liǎo jiě", example_en:"to understand", meaning_vi:"xong, hiểu rõ", example_vi:"hiểu rõ", frequency:"high" },
  }},
  "干": { readings: {
    "gān": { meaning_zh:"干燥，干净", meaning_en:"dry, clean", example_zh:"干净", example_pinyin:"gān jìng", example_en:"clean", meaning_vi:"khô", example_vi:"sạch sẽ", frequency:"high" },
    "gàn": { meaning_zh:"做，干活", meaning_en:"to do, to work", example_zh:"干活", example_pinyin:"gàn huó", example_en:"to work", meaning_vi:"làm, công việc", example_vi:"làm việc", frequency:"high" },
  }},
  "还": { readings: {
    "hái": { meaning_zh:"还是，还有", meaning_en:"still, also", example_zh:"还有", example_pinyin:"hái yǒu", example_en:"there is still", meaning_vi:"vẫn, còn", example_vi:"vẫn còn", frequency:"high" },
    "huán": { meaning_zh:"归还，还债", meaning_en:"to return, to repay", example_zh:"归还", example_pinyin:"guī huán", example_en:"to return", meaning_vi:"trả lại, hoàn", example_vi:"trả lại", frequency:"high" },
  }},
  "几": { readings: {
    "jǐ": { meaning_zh:"几个，多少", meaning_en:"how many, several", example_zh:"几个", example_pinyin:"jǐ gè", example_en:"how many", meaning_vi:"mấy, vài", example_vi:"mấy cái", frequency:"high" },
    "jī": { meaning_zh:"茶几，窗几", meaning_en:"small table", example_zh:"茶几", example_pinyin:"chá jī", example_en:"tea table", meaning_vi:"bàn nhỏ, bàn trà", example_vi:"bàn trà", frequency:"medium" },
  }},
  "都": { readings: {
    "dōu": { meaning_zh:"都是，全都", meaning_en:"all, both", example_zh:"都好", example_pinyin:"dōu hǎo", example_en:"all good", meaning_vi:"đều, tất cả", example_vi:"đều tốt", frequency:"high" },
    "dū": { meaning_zh:"首都，都市", meaning_en:"capital city, metropolis", example_zh:"首都", example_pinyin:"shǒu dū", example_en:"capital city", meaning_vi:"thủ đô, đô thị", example_vi:"thủ đô", frequency:"high" },
  }},
  "要": { readings: {
    "yào": { meaning_zh:"需要，要求", meaning_en:"to need, to want", example_zh:"需要", example_pinyin:"xū yào", example_en:"to need", meaning_vi:"muốn, cần, sẽ", example_vi:"cần", frequency:"high" },
    "yāo": { meaning_zh:"要求，邀请", meaning_en:"to demand, to invite", example_zh:"要求", example_pinyin:"yāo qiú", example_en:"to demand", meaning_vi:"yêu cầu, đòi hỏi", example_vi:"yêu cầu", frequency:"medium" },
  }},
  "没": { readings: {
    "méi": { meaning_zh:"没有，没关系", meaning_en:"not have, no matter", example_zh:"没有", example_pinyin:"méi yǒu", example_en:"don't have", meaning_vi:"không có, chưa", example_vi:"không có", frequency:"high" },
    "mò": { meaning_zh:"沉没，淹没", meaning_en:"to sink, to submerge", example_zh:"淹没", example_pinyin:"yān mò", example_en:"to submerge", meaning_vi:"chìm, mất hút", example_vi:"nhấn chìm", frequency:"medium" },
  }},
  "难": { readings: {
    "nán": { meaning_zh:"困难，难题", meaning_en:"difficult, hard", example_zh:"困难", example_pinyin:"kùn nán", example_en:"difficulty", meaning_vi:"khó, khó khăn", example_vi:"khó khăn", frequency:"high" },
    "nàn": { meaning_zh:"灾难，难民", meaning_en:"disaster, refugee", example_zh:"灾难", example_pinyin:"zāi nàn", example_en:"disaster", meaning_vi:"tai nạn, hoạn nạn", example_vi:"tai họa", frequency:"high" },
  }},
  "什": { readings: {
    "shén": { meaning_zh:"什么，什么事", meaning_en:"what (in 什么)", example_zh:"什么", example_pinyin:"shén me", example_en:"what", meaning_vi:"gì (trong 什么)", example_vi:"cái gì", frequency:"high" },
    "shí": { meaning_zh:"什物，杂物", meaning_en:"miscellaneous items", example_zh:"什物", example_pinyin:"shí wù", example_en:"odds and ends", meaning_vi:"mười, hỗn tạp", example_vi:"đồ lặt vặt", frequency:"low" },
  }},
  "说": { readings: {
    "shuō": { meaning_zh:"说话，说明", meaning_en:"to speak, to explain", example_zh:"说话", example_pinyin:"shuō huà", example_en:"to speak", meaning_vi:"nói, giảng", example_vi:"nói chuyện", frequency:"high" },
    "shuì": { meaning_zh:"游说，说服", meaning_en:"to persuade, to lobby", example_zh:"游说", example_pinyin:"yóu shuì", example_en:"to lobby", meaning_vi:"thuyết phục", example_vi:"du thuyết", frequency:"low" },
    "yuè": { meaning_zh:"喜悦（古通悦）", meaning_en:"joy (archaic variant of 悦)", example_zh:"不亦说乎", example_pinyin:"bù yì yuè hū", example_en:"isn't that joyful?", meaning_vi:"vui mừng (cổ, thông 悦)", example_vi:"chẳng vui sao", frequency:"low" },
  }},
  "场": { readings: {
    "chǎng": { meaning_zh:"广场，场地", meaning_en:"square, venue", example_zh:"广场", example_pinyin:"guǎng chǎng", example_en:"square", meaning_vi:"nơi, sân, sự việc", example_vi:"quảng trường", frequency:"high" },
    "cháng": { meaning_zh:"场院，打谷场", meaning_en:"threshing floor, field", example_zh:"场院", example_pinyin:"cháng yuàn", example_en:"threshing ground", meaning_vi:"khoảnh, trận (lượng từ)", example_vi:"sân phơi", frequency:"medium" },
  }},
  "当": { readings: {
    "dāng": { meaning_zh:"当然，当时", meaning_en:"should, at that time", example_zh:"当时", example_pinyin:"dāng shí", example_en:"at that time", meaning_vi:"đảm nhận, vào lúc", example_vi:"lúc đó", frequency:"high" },
    "dàng": { meaning_zh:"当作，妥当", meaning_en:"to treat as, appropriate", example_zh:"恰当", example_pinyin:"qià dàng", example_en:"appropriate", meaning_vi:"coi như, thích đáng", example_vi:"thích đáng", frequency:"medium" },
  }},
  "倒": { readings: {
    "dǎo": { meaning_zh:"倒下，跌倒", meaning_en:"to fall, to collapse", example_zh:"跌倒", example_pinyin:"diē dǎo", example_en:"to fall down", meaning_vi:"ngã, đổ", example_vi:"vấp ngã", frequency:"high" },
    "dào": { meaning_zh:"倒车，倒置", meaning_en:"to reverse, upside down", example_zh:"倒车", example_pinyin:"dào chē", example_en:"to reverse a car", meaning_vi:"đảo ngược, lùi", example_vi:"lùi xe", frequency:"high" },
  }},
  "相": { readings: {
    "xiāng": { meaning_zh:"相互，相同", meaning_en:"mutually, each other", example_zh:"相互", example_pinyin:"xiāng hù", example_en:"each other", meaning_vi:"lẫn nhau, cùng", example_vi:"lẫn nhau", frequency:"high" },
    "xiàng": { meaning_zh:"相貌，宰相", meaning_en:"appearance, prime minister", example_zh:"相貌", example_pinyin:"xiàng mào", example_en:"appearance", meaning_vi:"tướng mạo, tể tướng", example_vi:"tướng mạo", frequency:"high" },
  }},
  "称": { readings: {
    "chēng": { meaning_zh:"称呼，称赞", meaning_en:"to call, to praise", example_zh:"称呼", example_pinyin:"chēng hu", example_en:"to address", meaning_vi:"gọi là, khen ngợi", example_vi:"xưng hô", frequency:"high" },
    "chèn": { meaning_zh:"称心，匀称", meaning_en:"to suit, well-proportioned", example_zh:"称心", example_pinyin:"chèn xīn", example_en:"to one's liking", meaning_vi:"vừa ý, cân đối", example_vi:"vừa ý", frequency:"medium" },
    "chèng": { meaning_zh:"称（古，同秤）", meaning_en:"scale (archaic variant)", example_zh:"称杆", example_pinyin:"chèng gǎn", example_en:"scale beam", meaning_vi:"cái cân (cổ, thông 秤)", example_vi:"đòn cân", frequency:"low" },
  }},
  "处": { readings: {
    "chǔ": { meaning_zh:"处理，处置", meaning_en:"to handle, to deal with", example_zh:"处理", example_pinyin:"chǔ lǐ", example_en:"to handle", meaning_vi:"xử lý, giải quyết", example_vi:"xử lý", frequency:"high" },
    "chù": { meaning_zh:"地处，住处", meaning_en:"place, location", example_zh:"住处", example_pinyin:"zhù chù", example_en:"residence", meaning_vi:"nơi chốn, chỗ ở", example_vi:"chỗ ở", frequency:"high" },
  }},
  "熟": { readings: {
    "shú": { meaning_zh:"熟悉，成熟", meaning_en:"familiar, ripe", example_zh:"熟悉", example_pinyin:"shú xī", example_en:"familiar", meaning_vi:"quen thuộc, chín", example_vi:"quen thuộc", frequency:"high" },
    "shóu": { meaning_zh:"饭熟了（口语）", meaning_en:"cooked (colloquial)", example_zh:"饭熟了", example_pinyin:"fàn shóu le", example_en:"the food is cooked", meaning_vi:"chín (khẩu ngữ)", example_vi:"cơm chín rồi", frequency:"medium" },
  }},
  "便": { readings: {
    "biàn": { meaning_zh:"方便，便利", meaning_en:"convenient", example_zh:"方便", example_pinyin:"fāng biàn", example_en:"convenient", meaning_vi:"tiện lợi, thuận tiện", example_vi:"thuận tiện", frequency:"high" },
    "pián": { meaning_zh:"便宜，低价", meaning_en:"cheap, inexpensive", example_zh:"便宜", example_pinyin:"pián yi", example_en:"cheap", meaning_vi:"rẻ, hời", example_vi:"rẻ", frequency:"high" },
  }},
  "卷": { readings: {
    "juǎn": { meaning_zh:"卷起，卷曲", meaning_en:"to roll up, to curl", example_zh:"卷起", example_pinyin:"juǎn qǐ", example_en:"to roll up", meaning_vi:"cuộn lại, xoăn", example_vi:"cuộn lên", frequency:"high" },
    "juàn": { meaning_zh:"试卷，书卷", meaning_en:"exam paper, scroll", example_zh:"试卷", example_pinyin:"shì juàn", example_en:"exam paper", meaning_vi:"bài thi, quyển sách", example_vi:"bài thi", frequency:"high" },
  }},
  "舍": { readings: {
    "shě": { meaning_zh:"舍弃，放弃", meaning_en:"to give up, to abandon", example_zh:"舍弃", example_pinyin:"shě qì", example_en:"to give up", meaning_vi:"bỏ, từ bỏ", example_vi:"từ bỏ", frequency:"high" },
    "shè": { meaning_zh:"宿舍，房舍", meaning_en:"dormitory, dwelling", example_zh:"宿舍", example_pinyin:"sù shè", example_en:"dormitory", meaning_vi:"ký túc xá, nhà ở", example_vi:"ký túc xá", frequency:"high" },
  }},
  "调": { readings: {
    "tiáo": { meaning_zh:"调节，调整", meaning_en:"to adjust, to regulate", example_zh:"调整", example_pinyin:"tiáo zhěng", example_en:"to adjust", meaning_vi:"điều chỉnh, điều tiết", example_vi:"điều chỉnh", frequency:"high" },
    "diào": { meaning_zh:"音调，调动", meaning_en:"tone, to transfer", example_zh:"曲调", example_pinyin:"qǔ diào", example_en:"melody", meaning_vi:"âm điệu, điều động", example_vi:"làn điệu", frequency:"high" },
  }},
  "曾": { readings: {
    "céng": { meaning_zh:"曾经，曾经历过", meaning_en:"once, previously", example_zh:"曾经", example_pinyin:"céng jīng", example_en:"once/previously", meaning_vi:"đã từng, từng trải qua", example_vi:"đã từng", frequency:"high" },
    "zēng": { meaning_zh:"曾祖，曾孙", meaning_en:"great-grandfather/grandson", example_zh:"曾祖父", example_pinyin:"zēng zǔ fù", example_en:"great-grandfather", meaning_vi:"cố (đời thứ ba), chắt", example_vi:"ông cố", frequency:"medium" },
  }},
  "强": { readings: {
    "qiáng": { meaning_zh:"强大，强壮", meaning_en:"strong, powerful", example_zh:"强大", example_pinyin:"qiáng dà", example_en:"powerful", meaning_vi:"mạnh, khỏe, cường", example_vi:"mạnh mẽ", frequency:"high" },
    "qiǎng": { meaning_zh:"勉强，强迫", meaning_en:"to force, reluctantly", example_zh:"强迫", example_pinyin:"qiǎng pò", example_en:"to coerce", meaning_vi:"miễn cưỡng, ép buộc", example_vi:"ép buộc", frequency:"high" },
    "jiàng": { meaning_zh:"倔强，强头倔脑", meaning_en:"stubborn, unyielding", example_zh:"倔强", example_pinyin:"jué jiàng", example_en:"stubborn", meaning_vi:"ương ngạnh, bướng bỉnh", example_vi:"ương ngạnh", frequency:"medium" },
  }},
  "切": { readings: {
    "qiē": { meaning_zh:"切菜，切断", meaning_en:"to cut, to slice", example_zh:"切菜", example_pinyin:"qiē cài", example_en:"to chop vegetables", meaning_vi:"cắt, thái", example_vi:"thái rau", frequency:"high" },
    "qiè": { meaning_zh:"密切，恳切", meaning_en:"close, earnest", example_zh:"密切", example_pinyin:"mì qiè", example_en:"close", meaning_vi:"thân thiết, tha thiết", example_vi:"mật thiết", frequency:"high" },
  }},
  "散": { readings: {
    "sàn": { meaning_zh:"散开，分散", meaning_en:"to scatter, to disperse", example_zh:"散步", example_pinyin:"sàn bù", example_en:"to take a walk", meaning_vi:"tản ra, phân tán", example_vi:"đi dạo", frequency:"high" },
    "sǎn": { meaning_zh:"散漫，松散", meaning_en:"loose, unrestrained", example_zh:"散漫", example_pinyin:"sǎn màn", example_en:"lax, undisciplined", meaning_vi:"tản mạn, rời rạc", example_vi:"buông thả", frequency:"medium" },
  }},
  "血": { readings: {
    "xuè": { meaning_zh:"血液，血型", meaning_en:"blood, blood type", example_zh:"血液", example_pinyin:"xuè yè", example_en:"blood", meaning_vi:"máu, huyết", example_vi:"huyết dịch", frequency:"high" },
    "xiě": { meaning_zh:"流血（口语）", meaning_en:"bleeding (colloquial)", example_zh:"流血了", example_pinyin:"liú xiě le", example_en:"bleeding", meaning_vi:"máu (khẩu ngữ)", example_vi:"chảy máu rồi", frequency:"medium" },
  }},
  "度": { readings: {
    "dù": { meaning_zh:"度过，程度", meaning_en:"to spend (time), degree", example_zh:"程度", example_pinyin:"chéng dù", example_en:"degree / level", meaning_vi:"trải qua, mức độ", example_vi:"mức độ", frequency:"high" },
    "duó": { meaning_zh:"揣度，度量", meaning_en:"to measure, to estimate", example_zh:"揣度", example_pinyin:"chuǎi duó", example_en:"to conjecture", meaning_vi:"đo lường, ước lượng", example_vi:"suy đoán", frequency:"low" },
  }},
  "裂": { readings: {
    "liè": { meaning_zh:"分裂，破裂", meaning_en:"to split, to crack", example_zh:"分裂", example_pinyin:"fēn liè", example_en:"to split", meaning_vi:"phân chia, nứt vỡ", example_vi:"phân chia", frequency:"high" },
    "liě": { meaning_zh:"裂着嘴（向两旁分开）", meaning_en:"to split apart (to the sides)", example_zh:"裂着嘴", example_pinyin:"liě zhe zuǐ", example_en:"grinning, mouth open", meaning_vi:"nhếch, há (sang hai bên)", example_vi:"nhếch miệng", frequency:"medium" },
  }},
  "恶": { readings: {
    "è": { meaning_zh:"恶劣，邪恶", meaning_en:"evil, bad", example_zh:"恶劣", example_pinyin:"è liè", example_en:"terrible", meaning_vi:"ác, xấu xa", example_vi:"tồi tệ", frequency:"high" },
    "wù": { meaning_zh:"厌恶，憎恶", meaning_en:"to detest, to loathe", example_zh:"厌恶", example_pinyin:"yàn wù", example_en:"to detest", meaning_vi:"ghét, chán ghét", example_vi:"chán ghét", frequency:"high" },
    "ě": { meaning_zh:"恶心，反胃", meaning_en:"nauseous, disgusting", example_zh:"恶心", example_pinyin:"ě xin", example_en:"nausea", meaning_vi:"buồn nôn, lợm giọng", example_vi:"buồn nôn", frequency:"medium" },
  }},
  "薄": { readings: {
    "báo": { meaning_zh:"薄片，薄薄的", meaning_en:"thin (colloquial)", example_zh:"薄片", example_pinyin:"báo piàn", example_en:"thin slice", meaning_vi:"mỏng (khẩu ngữ)", example_vi:"lát mỏng", frequency:"high" },
    "bó": { meaning_zh:"薄弱，淡薄", meaning_en:"weak, meager", example_zh:"薄弱", example_pinyin:"bó ruò", example_en:"weak", meaning_vi:"yếu ớt, đạm bạc", example_vi:"yếu kém", frequency:"high" },
    "bò": { meaning_zh:"薄荷（植物）", meaning_en:"mint (in 薄荷)", example_zh:"薄荷", example_pinyin:"bò he", example_en:"mint", meaning_vi:"bạc hà (cây, trong 薄荷)", example_vi:"bạc hà", frequency:"medium" },
  }},
  "折": { readings: {
    "zhé": { meaning_zh:"折断，折扣", meaning_en:"to break, discount", example_zh:"折扣", example_pinyin:"zhé kòu", example_en:"discount", meaning_vi:"gãy, gập; chiết khấu", example_vi:"chiết khấu", frequency:"high" },
    "zhē": { meaning_zh:"折腾，折磨", meaning_en:"to toss about, to torment", example_zh:"折腾", example_pinyin:"zhē teng", example_en:"to toss around", meaning_vi:"lăn lộn, hành hạ", example_vi:"vật vã", frequency:"high" },
    "shé": { meaning_zh:"折本，亏本", meaning_en:"to lose money (colloq.)", example_zh:"折本", example_pinyin:"shé běn", example_en:"to lose capital", meaning_vi:"lỗ vốn, hụt vốn (khẩu ngữ)", example_vi:"lỗ vốn", frequency:"medium" },
  }},
  "冲": { readings: {
    "chōng": { meaning_zh:"冲突，冲洗", meaning_en:"to clash, to rinse", example_zh:"冲洗", example_pinyin:"chōng xǐ", example_en:"to rinse", meaning_vi:"xung đột; xả, rửa", example_vi:"rửa (ảnh/đồ)", frequency:"high" },
    "chòng": { meaning_zh:"呛鼻，力冲", meaning_en:"pungent, forceful", example_zh:"劲儿冲", example_pinyin:"jìn r chòng", example_en:"pungent smell", meaning_vi:"hắc, nồng; mạnh, hăng", example_vi:"mùi hắc", frequency:"medium" },
  }},
  "单": { readings: {
    "dān": { meaning_zh:"单一，单独", meaning_en:"single, alone", example_zh:"单独", example_pinyin:"dān dú", example_en:"alone", meaning_vi:"đơn, một mình", example_vi:"đơn độc", frequency:"high" },
    "shàn": { meaning_zh:"单（姓氏）", meaning_en:"Shan (surname)", example_zh:"单姓", example_pinyin:"shàn xìng", example_en:"surname Shan", meaning_vi:"họ Thiện", example_vi:"họ Thiện", frequency:"low" },
    "chán": { meaning_zh:"单于（古称）", meaning_en:"Chanyu (Xiongnu ruler title)", example_zh:"单于", example_pinyin:"chán yú", example_en:"Chanyu", meaning_vi:"Thiền Vu (vua Hung Nô cổ)", example_vi:"Thiền Vu", frequency:"low" },
  }},
  "担": { readings: {
    "dān": { meaning_zh:"担心，担任", meaning_en:"to worry, to take on", example_zh:"担心", example_pinyin:"dān xīn", example_en:"to worry", meaning_vi:"lo lắng; đảm nhận", example_vi:"lo lắng", frequency:"high" },
    "dàn": { meaning_zh:"担子，重担", meaning_en:"load, burden", example_zh:"重担", example_pinyin:"zhòng dàn", example_en:"heavy burden", meaning_vi:"gánh nặng; gánh", example_vi:"gánh nặng", frequency:"medium" },
  }},
  "系": { readings: {
    "xì": { meaning_zh:"联系，关系", meaning_en:"connection, to tie", example_zh:"关系", example_pinyin:"guān xi", example_en:"relationship", meaning_vi:"hệ thống, khoa", example_vi:"quan hệ", frequency:"high" },
    "jì": { meaning_zh:"系鞋带，打结", meaning_en:"to fasten, to knot", example_zh:"系鞋带", example_pinyin:"jì xié dài", example_en:"to tie shoelaces", meaning_vi:"buộc, thắt", example_vi:"buộc dây giày", frequency:"medium" },
  }},
  "磨": { readings: {
    "mó": { meaning_zh:"磨损，磨合", meaning_en:"to grind, to wear down", example_zh:"磨合", example_pinyin:"mó hé", example_en:"to break in", meaning_vi:"mài, mài giũa; hao mòn", example_vi:"chạy rà (máy móc)", frequency:"high" },
    "mò": { meaning_zh:"磨坊，石磨", meaning_en:"mill, millstone", example_zh:"石磨", example_pinyin:"shí mò", example_en:"millstone", meaning_vi:"cối xay; cối đá", example_vi:"cối đá", frequency:"medium" },
  }},
  "宁": { readings: {
    "níng": { meaning_zh:"安宁，宁静", meaning_en:"peaceful, tranquil", example_zh:"宁静", example_pinyin:"níng jìng", example_en:"tranquil", meaning_vi:"yên bình, tĩnh lặng", example_vi:"tĩnh lặng", frequency:"high" },
    "nìng": { meaning_zh:"宁可，宁愿", meaning_en:"would rather, prefer to", example_zh:"宁可", example_pinyin:"nìng kě", example_en:"would rather", meaning_vi:"thà rằng, thà là", example_vi:"thà rằng", frequency:"high" },
  }},
  "铺": { readings: {
    "pū": { meaning_zh:"铺开，铺设", meaning_en:"to spread out, to lay", example_zh:"铺开", example_pinyin:"pū kāi", example_en:"to spread out", meaning_vi:"trải ra, lát (đường)", example_vi:"trải ra", frequency:"high" },
    "pù": { meaning_zh:"店铺，床铺", meaning_en:"shop, bunk bed", example_zh:"店铺", example_pinyin:"diàn pù", example_en:"shop", meaning_vi:"cửa tiệm; giường (tầng)", example_vi:"cửa tiệm", frequency:"high" },
  }},
  "曲": { readings: {
    "qū": { meaning_zh:"弯曲，曲折", meaning_en:"bent, winding", example_zh:"弯曲", example_pinyin:"wān qū", example_en:"curved", meaning_vi:"cong, quanh co", example_vi:"uốn cong", frequency:"high" },
    "qǔ": { meaning_zh:"歌曲，乐曲", meaning_en:"song, musical piece", example_zh:"歌曲", example_pinyin:"gē qǔ", example_en:"song", meaning_vi:"bài hát, khúc nhạc", example_vi:"bài hát", frequency:"high" },
  }},
  "塞": { readings: {
    "sāi": { meaning_zh:"塞住，堵塞", meaning_en:"to plug, to block", example_zh:"塞住", example_pinyin:"sāi zhù", example_en:"to plug up", meaning_vi:"nhét, bịt; tắc", example_vi:"nhét vào", frequency:"high" },
    "sài": { meaning_zh:"塞外，边塞", meaning_en:"frontier pass, border", example_zh:"边塞", example_pinyin:"biān sài", example_en:"frontier", meaning_vi:"ải, biên ải", example_vi:"biên ải", frequency:"medium" },
    "sè": { meaning_zh:"闭塞，堵塞（书）", meaning_en:"to obstruct (literary)", example_zh:"闭塞", example_pinyin:"bì sè", example_en:"blocked off", meaning_vi:"bế tắc, nghẽn (văn viết)", example_vi:"bế tắc", frequency:"medium" },
  }},
  "省": { readings: {
    "shěng": { meaning_zh:"省份，节省", meaning_en:"province, to save", example_zh:"省钱", example_pinyin:"shěng qián", example_en:"to save money", meaning_vi:"tỉnh, tiết kiệm", example_vi:"tiết kiệm tiền", frequency:"high" },
    "xǐng": { meaning_zh:"反省，省悟", meaning_en:"to reflect, to come to", example_zh:"反省", example_pinyin:"fǎn xǐng", example_en:"to reflect", meaning_vi:"tự xét, tỉnh ngộ", example_vi:"tự kiểm điểm", frequency:"medium" },
  }},
  "泊": { readings: {
    "bó": { meaning_zh:"停泊，漂泊", meaning_en:"to anchor, to drift", example_zh:"停泊", example_pinyin:"tíng bó", example_en:"to anchor", meaning_vi:"đậu, neo (thuyền); phiêu bạt", example_vi:"neo đậu", frequency:"medium" },
    "pō": { meaning_zh:"湖泊，水泊", meaning_en:"lake, pond", example_zh:"湖泊", example_pinyin:"hú pō", example_en:"lake", meaning_vi:"hồ, đầm nước", example_vi:"hồ nước", frequency:"medium" },
  }},
  "盛": { readings: {
    "shèng": { meaning_zh:"盛大，旺盛", meaning_en:"grand, flourishing", example_zh:"盛大", example_pinyin:"shèng dà", example_en:"grand", meaning_vi:"thịnh vượng, long trọng", example_vi:"long trọng", frequency:"high" },
    "chéng": { meaning_zh:"盛饭，盛水", meaning_en:"to fill (bowl/container)", example_zh:"盛饭", example_pinyin:"chéng fàn", example_en:"to serve rice", meaning_vi:"xới, múc (cơm/đồ vào bát)", example_vi:"xới cơm", frequency:"high" },
  }},
  "乘": { readings: {
    "chéng": { meaning_zh:"乘车，搭乘", meaning_en:"to ride, to take", example_zh:"乘车", example_pinyin:"chéng chē", example_en:"to take a vehicle", meaning_vi:"đi (xe), cưỡi; nhân (toán)", example_vi:"đi xe", frequency:"high" },
    "shèng": { meaning_zh:"史乘，记载", meaning_en:"historical records", example_zh:"史乘", example_pinyin:"shǐ shèng", example_en:"historical records", meaning_vi:"sử sách, ghi chép (cổ)", example_vi:"sử sách", frequency:"low" },
  }},
  "斗": { readings: {
    "dǒu": { meaning_zh:"北斗，斗笠", meaning_en:"dipper (constellation), bamboo hat", example_zh:"北斗星", example_pinyin:"běi dǒu xīng", example_en:"Big Dipper", meaning_vi:"đấu (đơn vị đong); chòm sao Bắc Đẩu", example_vi:"sao Bắc Đẩu", frequency:"medium" },
    "dòu": { meaning_zh:"战斗，斗争", meaning_en:"to fight, to struggle", example_zh:"战斗", example_pinyin:"zhàn dòu", example_en:"to fight", meaning_vi:"đấu tranh, chiến đấu", example_vi:"chiến đấu", frequency:"high" },
  }},
  "杆": { readings: {
    "gān": { meaning_zh:"旗杆，电线杆", meaning_en:"flagpole, utility pole", example_zh:"旗杆", example_pinyin:"qí gǎn", example_en:"flagpole", meaning_vi:"cột, sào (dài)", example_vi:"cột cờ", frequency:"medium" },
    "gǎn": { meaning_zh:"笔杆，枪杆", meaning_en:"pen shaft, gun barrel", example_zh:"笔杆", example_pinyin:"bǐ gǎn", example_en:"pen shaft", meaning_vi:"cán, thân (vật nhỏ dài)", example_vi:"cán bút", frequency:"medium" },
  }},
  "冠": { readings: {
    "guān": { meaning_zh:"帽子，皇冠", meaning_en:"hat, crown (noun)", example_zh:"皇冠", example_pinyin:"huáng guān", example_en:"royal crown", meaning_vi:"mũ, vương miện (danh từ)", example_vi:"vương miện", frequency:"high" },
    "guàn": { meaning_zh:"冠军，加冠", meaning_en:"champion; to crown (verb)", example_zh:"冠军", example_pinyin:"guàn jūn", example_en:"champion", meaning_vi:"quán quân; đứng đầu (động từ)", example_vi:"quán quân", frequency:"high" },
  }},
  "划": { readings: {
    "huá": { meaning_zh:"划船，划算", meaning_en:"to row, worthwhile", example_zh:"划船", example_pinyin:"huá chuán", example_en:"to row a boat", meaning_vi:"chèo (thuyền), đáng giá", example_vi:"chèo thuyền", frequency:"high" },
    "huà": { meaning_zh:"计划，规划", meaning_en:"to plan, to delimit", example_zh:"计划", example_pinyin:"jì huà", example_en:"plan", meaning_vi:"kế hoạch, hoạch định", example_vi:"kế hoạch", frequency:"high" },
  }},
  "壳": { readings: {
    "ké": { meaning_zh:"贝壳，蛋壳", meaning_en:"shell, eggshell", example_zh:"贝壳", example_pinyin:"bèi ké", example_en:"seashell", meaning_vi:"vỏ, mai (khẩu ngữ)", example_vi:"vỏ sò", frequency:"high" },
    "qiào": { meaning_zh:"地壳，甲壳", meaning_en:"earth's crust, carapace", example_zh:"地壳", example_pinyin:"dì qiào", example_en:"earth's crust", meaning_vi:"vỏ cứng (văn viết)", example_vi:"vỏ Trái Đất", frequency:"high" },
  }},
  "露": { readings: {
    "lù": { meaning_zh:"露天，露出", meaning_en:"open air, to reveal", example_zh:"露出", example_pinyin:"lù chū", example_en:"to reveal", meaning_vi:"lộ thiên; để lộ ra", example_vi:"lộ ra", frequency:"high" },
    "lòu": { meaning_zh:"露馅，泄露", meaning_en:"to leak out (colloq.)", example_zh:"露馅", example_pinyin:"lòu xiàn", example_en:"to let the cat out", meaning_vi:"lộ tẩy, hớ hênh (khẩu ngữ)", example_vi:"lộ tẩy", frequency:"medium" },
  }},
  "模": { readings: {
    "mó": { meaning_zh:"模仿，模型", meaning_en:"to imitate, model", example_zh:"模型", example_pinyin:"mó xíng", example_en:"model", meaning_vi:"mô phỏng; mô hình", example_vi:"mô hình", frequency:"high" },
    "mú": { meaning_zh:"模样，模具", meaning_en:"appearance, mold", example_zh:"模样", example_pinyin:"mú yàng", example_en:"appearance", meaning_vi:"dáng vẻ; khuôn (đúc)", example_vi:"dáng vẻ", frequency:"high" },
  }},
  "喷": { readings: {
    "pēn": { meaning_zh:"喷水，喷气", meaning_en:"to spray, to jet", example_zh:"喷水", example_pinyin:"pēn shuǐ", example_en:"to spray water", meaning_vi:"phun, phụt", example_vi:"phun nước", frequency:"high" },
    "pèn": { meaning_zh:"喷香（方言）", meaning_en:"fragrant (colloq.)", example_zh:"喷香", example_pinyin:"pèn xiāng", example_en:"fragrant", meaning_vi:"thơm nức (phương ngữ); mùa rộ", example_vi:"thơm nức", frequency:"medium" },
  }},
  "屏": { readings: {
    "píng": { meaning_zh:"屏幕，屏风", meaning_en:"screen, folding screen", example_zh:"屏幕", example_pinyin:"píng mù", example_en:"screen", meaning_vi:"màn hình; bình phong", example_vi:"màn hình", frequency:"high" },
    "bǐng": { meaning_zh:"屏息，屏气", meaning_en:"to hold breath", example_zh:"屏息", example_pinyin:"bǐng xī", example_en:"to hold one's breath", meaning_vi:"nín, nhịn (thở)", example_vi:"nín thở", frequency:"medium" },
  }},
  "悄": { readings: {
    "qiāo": { meaning_zh:"悄悄，悄然", meaning_en:"quietly, silently", example_zh:"悄悄", example_pinyin:"qiāo qiāo", example_en:"quietly", meaning_vi:"lặng lẽ, khe khẽ", example_vi:"lặng lẽ", frequency:"high" },
    "qiǎo": { meaning_zh:"悄怆（忧伤）", meaning_en:"sorrowful (literary)", example_zh:"悄怆幽邃", example_pinyin:"qiǎo chuàng yōu suì", example_en:"deep and sorrowful", meaning_vi:"buồn bã, ưu tư (văn cổ)", example_vi:"u sầu sâu lắng", frequency:"low" },
  }},
  "宿": { readings: {
    "sù": { meaning_zh:"住宿，宿舍", meaning_en:"to stay overnight, dorm", example_zh:"宿舍", example_pinyin:"sù shè", example_en:"dormitory", meaning_vi:"ở trọ, ngủ lại; ký túc xá", example_vi:"ký túc xá", frequency:"high" },
    "xiǔ": { meaning_zh:"一宿（一夜）", meaning_en:"one night (measure word)", example_zh:"一宿", example_pinyin:"yī xiǔ", example_en:"one night", meaning_vi:"đêm (lượng từ, khẩu ngữ)", example_vi:"một đêm", frequency:"medium" },
    "xiù": { meaning_zh:"星宿，二十八宿", meaning_en:"constellation, lunar mansion", example_zh:"星宿", example_pinyin:"xīng xiù", example_en:"constellation", meaning_vi:"tinh tú, chòm sao (cổ)", example_vi:"tinh tú", frequency:"low" },
  }},
  "挑": { readings: {
    "tiāo": { meaning_zh:"挑选，挑剔", meaning_en:"to pick, to be picky", example_zh:"挑选", example_pinyin:"tiāo xuǎn", example_en:"to select", meaning_vi:"chọn lựa; kén chọn", example_vi:"lựa chọn", frequency:"high" },
    "tiǎo": { meaning_zh:"挑战，挑衅", meaning_en:"to challenge, to provoke", example_zh:"挑战", example_pinyin:"tiǎo zhàn", example_en:"to challenge", meaning_vi:"khiêu khích, thách thức", example_vi:"thách thức", frequency:"high" },
  }},
  "吐": { readings: {
    "tǔ": { meaning_zh:"吐出，吐露", meaning_en:"to spit out, to reveal", example_zh:"吐露", example_pinyin:"tǔ lù", example_en:"to reveal", meaning_vi:"nhổ ra; thổ lộ, bày tỏ", example_vi:"thổ lộ", frequency:"high" },
    "tù": { meaning_zh:"呕吐，吐血", meaning_en:"to vomit", example_zh:"呕吐", example_pinyin:"ǒu tù", example_en:"to vomit", meaning_vi:"nôn, mửa", example_vi:"nôn mửa", frequency:"high" },
  }},
  "挨": { readings: {
    "āi": { meaning_zh:"挨着，紧挨", meaning_en:"close to, next to", example_zh:"挨着", example_pinyin:"āi zhe", example_en:"right next to", meaning_vi:"kề sát, sát bên", example_vi:"kề sát", frequency:"high" },
    "ái": { meaning_zh:"挨打，挨骂", meaning_en:"to endure (beating/scolding)", example_zh:"挨打", example_pinyin:"ái dǎ", example_en:"to get beaten", meaning_vi:"chịu, hứng (đòn/mắng)", example_vi:"bị đánh", frequency:"high" },
  }},
  "暴": { readings: {
    "bào": { meaning_zh:"暴力，暴风", meaning_en:"violent, storm", example_zh:"暴风", example_pinyin:"bào fēng", example_en:"storm", meaning_vi:"bạo lực; dữ dội", example_vi:"bão tố", frequency:"high" },
    "pù": { meaning_zh:"暴晒，曝晒", meaning_en:"to expose to sun", example_zh:"暴晒", example_pinyin:"pù shài", example_en:"sun exposure", meaning_vi:"phơi nắng (thông 曝)", example_vi:"phơi nắng", frequency:"medium" },
  }},
  "奔": { readings: {
    "bēn": { meaning_zh:"奔跑，奔波", meaning_en:"to run, to rush about", example_zh:"奔跑", example_pinyin:"bēn pǎo", example_en:"to run", meaning_vi:"chạy nhanh; bôn ba", example_vi:"chạy nhanh", frequency:"high" },
    "bèn": { meaning_zh:"投奔，奔赴", meaning_en:"to head toward, to go to", example_zh:"投奔", example_pinyin:"tóu bèn", example_en:"to seek refuge", meaning_vi:"hướng tới, đi tới (nơi nào)", example_vi:"tìm đến nương nhờ", frequency:"medium" },
  }},
  "扁": { readings: {
    "biǎn": { meaning_zh:"扁平，压扁", meaning_en:"flat, flattened", example_zh:"扁平", example_pinyin:"biǎn píng", example_en:"flat", meaning_vi:"dẹt, bẹp", example_vi:"dẹt phẳng", frequency:"high" },
    "piān": { meaning_zh:"扁舟（小船）", meaning_en:"small boat (literary)", example_zh:"扁舟", example_pinyin:"piān zhōu", example_en:"small boat", meaning_vi:"thuyền con (văn chương)", example_vi:"thuyền nhỏ", frequency:"low" },
  }},
  "卜": { readings: {
    "bǔ": { meaning_zh:"占卜，卜卦", meaning_en:"to divine, to tell fortune", example_zh:"占卜", example_pinyin:"zhān bǔ", example_en:"to divine", meaning_vi:"bói toán, xem quẻ", example_vi:"bói toán", frequency:"medium" },
    "bo": { meaning_zh:"萝卜（蔬菜）", meaning_en:"radish (in 萝卜)", example_zh:"萝卜", example_pinyin:"luó bo", example_en:"radish", meaning_vi:"củ cải (trong 萝卜)", example_vi:"củ cải", frequency:"high" },
  }},
  "臭": { readings: {
    "chòu": { meaning_zh:"臭味，臭气", meaning_en:"stinky, bad smell", example_zh:"臭味", example_pinyin:"chòu wèi", example_en:"bad smell", meaning_vi:"hôi, thối; mùi khó chịu", example_vi:"mùi hôi", frequency:"high" },
    "xiù": { meaning_zh:"无色无臭", meaning_en:"odorless (literary)", example_zh:"无臭", example_pinyin:"wú xiù", example_en:"odorless", meaning_vi:"mùi (trung tính, văn cổ)", example_vi:"không mùi", frequency:"low" },
  }},
  "答": { readings: {
    "dá": { meaning_zh:"回答，答案", meaning_en:"to answer, answer", example_zh:"回答", example_pinyin:"huí dá", example_en:"to answer", meaning_vi:"trả lời, đáp", example_vi:"trả lời", frequency:"high" },
    "dā": { meaning_zh:"答应，答理", meaning_en:"to agree, to acknowledge", example_zh:"答应", example_pinyin:"dā ying", example_en:"to agree", meaning_vi:"đáp lại (trong 答应)", example_vi:"đồng ý", frequency:"high" },
  }},
  "钉": { readings: {
    "dīng": { meaning_zh:"钉子，铁钉", meaning_en:"nail, tack", example_zh:"钉子", example_pinyin:"dīng zi", example_en:"nail", meaning_vi:"cái đinh", example_vi:"cái đinh", frequency:"high" },
    "dìng": { meaning_zh:"钉牢，钉住", meaning_en:"to nail down, to fasten", example_zh:"钉牢", example_pinyin:"dìng láo", example_en:"to nail down", meaning_vi:"đóng đinh, đính chặt", example_vi:"đóng chặt", frequency:"medium" },
  }},
  "缝": { readings: {
    "féng": { meaning_zh:"缝纫，缝合", meaning_en:"to sew, to stitch", example_zh:"缝纫", example_pinyin:"féng rèn", example_en:"to sew", meaning_vi:"khâu, may vá", example_vi:"may vá", frequency:"high" },
    "fèng": { meaning_zh:"裂缝，缝隙", meaning_en:"crack, gap", example_zh:"裂缝", example_pinyin:"liè fèng", example_en:"crack", meaning_vi:"vết nứt, khe hở", example_vi:"vết nứt", frequency:"high" },
  }},
  "横": { readings: {
    "héng": { meaning_zh:"横线，水平", meaning_en:"horizontal, sideways", example_zh:"横线", example_pinyin:"héng xiàn", example_en:"horizontal line", meaning_vi:"ngang, nằm ngang", example_vi:"đường kẻ ngang", frequency:"high" },
    "hèng": { meaning_zh:"蛮横，横行", meaning_en:"unreasonable, domineering", example_zh:"蛮横", example_pinyin:"mán hèng", example_en:"domineering", meaning_vi:"ngang ngược, hung hãn", example_vi:"ngang ngược", frequency:"medium" },
  }},
  "哄": { readings: {
    "hōng": { meaning_zh:"哄堂大笑", meaning_en:"uproarious laughter", example_zh:"哄堂大笑", example_pinyin:"hōng táng dà xiào", example_en:"burst of laughter", meaning_vi:"ồn ào (cả đám cùng lúc)", example_vi:"cười rộ cả phòng", frequency:"medium" },
    "hǒng": { meaning_zh:"哄骗，哄人", meaning_en:"to fool, to coax", example_zh:"哄骗", example_pinyin:"hǒng piàn", example_en:"to deceive", meaning_vi:"dỗ dành; lừa phỉnh", example_vi:"lừa gạt", frequency:"high" },
    "hòng": { meaning_zh:"起哄，哄闹", meaning_en:"to make a ruckus", example_zh:"起哄", example_pinyin:"qǐ hòng", example_en:"to make a scene", meaning_vi:"gây náo loạn, hùa theo", example_vi:"gây náo loạn", frequency:"medium" },
  }},
  "华": { readings: {
    "huá": { meaning_zh:"繁华，华丽", meaning_en:"splendid, flourishing", example_zh:"华丽", example_pinyin:"huá lì", example_en:"gorgeous", meaning_vi:"phồn hoa, lộng lẫy; Trung Hoa", example_vi:"lộng lẫy", frequency:"high" },
    "huà": { meaning_zh:"华山，地名用字", meaning_en:"used in place names (Hua Mt.)", example_zh:"华山", example_pinyin:"Huà Shān", example_en:"Hua Mountain", meaning_vi:"dùng trong địa danh (núi Hoa)", example_vi:"núi Hoa Sơn", frequency:"high" },
  }},
  "晃": { readings: {
    "huǎng": { meaning_zh:"晃眼，闪晃", meaning_en:"to dazzle, to flash past", example_zh:"晃眼", example_pinyin:"huǎng yǎn", example_en:"dazzling", meaning_vi:"lóa mắt; lướt qua nhanh", example_vi:"chói mắt", frequency:"medium" },
    "huàng": { meaning_zh:"摇晃，晃动", meaning_en:"to sway, to shake", example_zh:"摇晃", example_pinyin:"yáo huàng", example_en:"to sway", meaning_vi:"lắc lư, đung đưa", example_vi:"lắc lư", frequency:"high" },
  }},
  "夹": { readings: {
    "jiā": { meaning_zh:"夹住，夹带", meaning_en:"to clamp, to carry between", example_zh:"夹住", example_pinyin:"jiā zhù", example_en:"to clamp", meaning_vi:"kẹp, cặp giữa", example_vi:"kẹp lại", frequency:"high" },
    "jiá": { meaning_zh:"夹克，夹衣", meaning_en:"jacket, lined garment", example_zh:"夹克", example_pinyin:"jiá kè", example_en:"jacket", meaning_vi:"áo kép; áo khoác", example_vi:"áo khoác", frequency:"medium" },
    "gā": { meaning_zh:"夹肢窝（腋下）", meaning_en:"armpit (in 夹肢窝)", example_zh:"夹肢窝", example_pinyin:"gā zhi wō", example_en:"armpit", meaning_vi:"nách (trong 夹肢窝)", example_vi:"nách", frequency:"low" },
  }},
  "监": { readings: {
    "jiān": { meaning_zh:"监视，监督", meaning_en:"to monitor, to supervise", example_zh:"监督", example_pinyin:"jiān dū", example_en:"to supervise", meaning_vi:"giám sát, theo dõi", example_vi:"giám sát", frequency:"high" },
    "jiàn": { meaning_zh:"国子监，太监", meaning_en:"imperial college, eunuch", example_zh:"太监", example_pinyin:"tài jiàn", example_en:"eunuch", meaning_vi:"Quốc Tử Giám; thái giám", example_vi:"thái giám", frequency:"medium" },
  }},
  "角": { readings: {
    "jiǎo": { meaning_zh:"角落，角度", meaning_en:"corner, angle", example_zh:"角落", example_pinyin:"jiǎo luò", example_en:"corner", meaning_vi:"góc, sừng", example_vi:"góc nhà", frequency:"high" },
    "jué": { meaning_zh:"角色，主角", meaning_en:"role, protagonist", example_zh:"角色", example_pinyin:"jué sè", example_en:"role", meaning_vi:"vai diễn, nhân vật chính", example_vi:"vai diễn", frequency:"high" },
  }},
  "结": { readings: {
    "jié": { meaning_zh:"结果，结束", meaning_en:"result, to end", example_zh:"结果", example_pinyin:"jié guǒ", example_en:"result", meaning_vi:"kết quả, kết thúc", example_vi:"kết quả", frequency:"high" },
    "jiē": { meaning_zh:"结实，结巴", meaning_en:"sturdy (colloq.), stutter", example_zh:"结实", example_pinyin:"jiē shi", example_en:"sturdy", meaning_vi:"chắc chắn, nói lắp", example_vi:"chắc chắn", frequency:"medium" },
  }},
  "解": { readings: {
    "jiě": { meaning_zh:"解释，理解", meaning_en:"to explain, to understand", example_zh:"理解", example_pinyin:"lǐ jiě", example_en:"to understand", meaning_vi:"giải thích, hiểu", example_vi:"lý giải", frequency:"high" },
    "jiè": { meaning_zh:"解押，押解", meaning_en:"to escort (prisoner)", example_zh:"押解", example_pinyin:"yā jiè", example_en:"to escort", meaning_vi:"áp giải (tù nhân)", example_vi:"áp giải", frequency:"low" },
    "xiè": { meaning_zh:"解数，姓解", meaning_en:"skill set; surname Xie", example_zh:"浑身解数", example_pinyin:"hún shēn xiè shù", example_en:"all one's skills", meaning_vi:"tài nghệ; họ Giải", example_vi:"trổ hết tài nghệ", frequency:"low" },
  }},
  "禁": { readings: {
    "jìn": { meaning_zh:"禁止，禁忌", meaning_en:"to forbid, taboo", example_zh:"禁止", example_pinyin:"jìn zhǐ", example_en:"forbidden", meaning_vi:"cấm, ngăn cấm; điều kiêng", example_vi:"cấm chỉ", frequency:"high" },
    "jīn": { meaning_zh:"禁不住，经不起", meaning_en:"cannot help but", example_zh:"禁不住", example_pinyin:"jīn bu zhù", example_en:"can't help but", meaning_vi:"không nhịn được; chịu đựng", example_vi:"không nhịn được", frequency:"high" },
  }},
  "空": { readings: {
    "kōng": { meaning_zh:"空气，天空", meaning_en:"air, sky", example_zh:"天空", example_pinyin:"tiān kōng", example_en:"sky", meaning_vi:"không khí, bầu trời", example_vi:"bầu trời", frequency:"high" },
    "kòng": { meaning_zh:"空闲，空缺", meaning_en:"free time, vacancy", example_zh:"空闲", example_pinyin:"kòng xián", example_en:"free time", meaning_vi:"thời gian rảnh, chỗ trống", example_vi:"thời gian rảnh", frequency:"high" },
  }},
  "累": { readings: {
    "lèi": { meaning_zh:"疲累，劳累", meaning_en:"tired, exhausted", example_zh:"疲累", example_pinyin:"pí lèi", example_en:"tired", meaning_vi:"mệt mỏi", example_vi:"mệt mỏi", frequency:"high" },
    "lěi": { meaning_zh:"积累，累积", meaning_en:"to accumulate", example_zh:"积累", example_pinyin:"jī lěi", example_en:"to accumulate", meaning_vi:"tích lũy, chồng chất", example_vi:"tích lũy", frequency:"high" },
  }},
  "量": { readings: {
    "liàng": { meaning_zh:"数量，容量", meaning_en:"quantity, capacity", example_zh:"数量", example_pinyin:"shù liàng", example_en:"quantity", meaning_vi:"số lượng, dung lượng", example_vi:"số lượng", frequency:"high" },
    "liáng": { meaning_zh:"测量，量体温", meaning_en:"to measure", example_zh:"量体温", example_pinyin:"liáng tǐ wēn", example_en:"to take temperature", meaning_vi:"đo, đo lường", example_vi:"đo thân nhiệt", frequency:"high" },
  }},
  "笼": { readings: {
    "lóng": { meaning_zh:"笼子，鸟笼", meaning_en:"cage, bird cage", example_zh:"鸟笼", example_pinyin:"niǎo lóng", example_en:"bird cage", meaning_vi:"lồng, cũi", example_vi:"lồng chim", frequency:"high" },
    "lǒng": { meaning_zh:"笼罩，笼统", meaning_en:"to envelop, vague", example_zh:"笼罩", example_pinyin:"lǒng zhào", example_en:"to envelop", meaning_vi:"bao trùm; chung chung", example_vi:"bao trùm", frequency:"medium" },
  }},
  "绿": { readings: {
    "lǜ": { meaning_zh:"绿色，绿地", meaning_en:"green, green space", example_zh:"绿色", example_pinyin:"lǜ sè", example_en:"green color", meaning_vi:"màu xanh lá", example_vi:"màu xanh lá", frequency:"high" },
    "lù": { meaning_zh:"绿林，绿营", meaning_en:"greenwood (outlaws), Green Standard Army", example_zh:"绿林", example_pinyin:"lù lín", example_en:"greenwood", meaning_vi:"lục lâm, lục doanh (lịch sử)", example_vi:"lục lâm", frequency:"low" },
  }},
  "论": { readings: {
    "lùn": { meaning_zh:"讨论，理论", meaning_en:"to discuss, theory", example_zh:"讨论", example_pinyin:"tǎo lùn", example_en:"to discuss", meaning_vi:"thảo luận, lý luận", example_vi:"thảo luận", frequency:"high" },
    "lún": { meaning_zh:"论语，语论", meaning_en:"The Analects", example_zh:"论语", example_pinyin:"Lún Yǔ", example_en:"The Analects", meaning_vi:"Luận Ngữ (sách của Khổng Tử)", example_vi:"Luận Ngữ", frequency:"medium" },
  }},
  "落": { readings: {
    "luò": { meaning_zh:"落下，落地", meaning_en:"to fall, to land", example_zh:"落下", example_pinyin:"luò xià", example_en:"to fall", meaning_vi:"rơi, rớt xuống", example_vi:"rơi xuống", frequency:"high" },
    "lào": { meaning_zh:"落枕，落炕", meaning_en:"stiff neck (colloq.)", example_zh:"落枕", example_pinyin:"lào zhěn", example_en:"stiff neck", meaning_vi:"vẹo (cổ), trật (khẩu ngữ)", example_vi:"vẹo cổ (do ngủ)", frequency:"medium" },
    "là": { meaning_zh:"丢落，落下（遗漏）", meaning_en:"to leave behind, to miss", example_zh:"丢三落四", example_pinyin:"diū sān là sì", example_en:"to be forgetful, to forget things", meaning_vi:"bỏ sót, để quên", example_vi:"đầu óc hay quên", frequency:"high" },
  }},
  "泡": { readings: {
    "pào": { meaning_zh:"泡沫，气泡", meaning_en:"bubble, foam", example_zh:"泡沫", example_pinyin:"pào mò", example_en:"foam", meaning_vi:"bọt, bong bóng; ngâm", example_vi:"bọt nước", frequency:"high" },
    "pāo": { meaning_zh:"虚松，眼泡", meaning_en:"puffy, spongy", example_zh:"眼泡", example_pinyin:"yǎn pāo", example_en:"puffy eyelid", meaning_vi:"phồng, xốp; bọng (mắt)", example_vi:"bọng mắt", frequency:"medium" },
  }},
  "炮": { readings: {
    "pào": { meaning_zh:"大炮，炮弹", meaning_en:"cannon, cannonball", example_zh:"大炮", example_pinyin:"dà pào", example_en:"cannon", meaning_vi:"đại bác; đạn pháo", example_vi:"đại bác", frequency:"high" },
    "páo": { meaning_zh:"炮制，炮烙", meaning_en:"to prepare (medicine), to roast", example_zh:"炮制", example_pinyin:"páo zhì", example_en:"to prepare herbs", meaning_vi:"bào chế (thuốc); nướng", example_vi:"bào chế thuốc", frequency:"medium" },
    "bāo": { meaning_zh:"炮羊肉（爆炒）", meaning_en:"quick-fried mutton", example_zh:"炮羊肉", example_pinyin:"bāo yáng ròu", example_en:"quick-fried mutton", meaning_vi:"xào nhanh lửa to", example_vi:"thịt dê xào", frequency:"low" },
  }},
  "漂": { readings: {
    "piāo": { meaning_zh:"漂流，漂浮", meaning_en:"to float, to drift", example_zh:"漂流", example_pinyin:"piāo liú", example_en:"to drift", meaning_vi:"trôi nổi, phiêu bạt", example_vi:"trôi nổi", frequency:"high" },
    "piǎo": { meaning_zh:"漂白，漂洗", meaning_en:"to bleach, to rinse", example_zh:"漂白", example_pinyin:"piǎo bái", example_en:"to bleach", meaning_vi:"tẩy trắng, giũ", example_vi:"tẩy trắng", frequency:"medium" },
    "piào": { meaning_zh:"漂亮，好漂亮", meaning_en:"beautiful, pretty", example_zh:"漂亮", example_pinyin:"piào liang", example_en:"beautiful", meaning_vi:"đẹp, xinh", example_vi:"đẹp", frequency:"high" },
  }},
  "奇": { readings: {
    "qí": { meaning_zh:"奇怪，奇特", meaning_en:"strange, unusual", example_zh:"奇怪", example_pinyin:"qí guài", example_en:"strange", meaning_vi:"kỳ lạ, lạ thường", example_vi:"kỳ lạ", frequency:"high" },
    "jī": { meaning_zh:"奇数，奇偶", meaning_en:"odd number", example_zh:"奇数", example_pinyin:"jī shù", example_en:"odd number", meaning_vi:"số lẻ (toán học)", example_vi:"số lẻ", frequency:"medium" },
  }},
  "丧": { readings: {
    "sāng": { meaning_zh:"丧事，葬丧", meaning_en:"funeral, mourning rites", example_zh:"丧事", example_pinyin:"sāng shì", example_en:"funeral", meaning_vi:"tang lễ, việc tang", example_vi:"việc tang", frequency:"medium" },
    "sàng": { meaning_zh:"丧失，丧气", meaning_en:"to lose, discouraged", example_zh:"丧失", example_pinyin:"sàng shī", example_en:"to lose", meaning_vi:"mất đi; chán nản", example_vi:"đánh mất", frequency:"high" },
  }},
  "石": { readings: {
    "shí": { meaning_zh:"石头，岩石", meaning_en:"stone, rock", example_zh:"石头", example_pinyin:"shí tou", example_en:"stone", meaning_vi:"đá, hòn đá", example_vi:"hòn đá", frequency:"high" },
    "dàn": { meaning_zh:"石（重量单位）", meaning_en:"dan (unit of weight, ~50kg)", example_zh:"万石", example_pinyin:"wàn dàn", example_en:"ten-thousand dan", meaning_vi:"thạch (đơn vị trọng lượng, ~50kg)", example_vi:"vạn thạch", frequency:"low" },
  }},
  "识": { readings: {
    "shí": { meaning_zh:"认识，知识", meaning_en:"to know, knowledge", example_zh:"知识", example_pinyin:"zhī shi", example_en:"knowledge", meaning_vi:"biết, nhận biết", example_vi:"kiến thức", frequency:"high" },
    "zhì": { meaning_zh:"标识，博闻强识", meaning_en:"to record, good memory", example_zh:"博闻强识", example_pinyin:"bó wén qiáng zhì", example_en:"vast knowledge", meaning_vi:"ghi nhớ (cổ, thông 志)", example_vi:"học rộng nhớ nhiều", frequency:"low" },
  }},
  "似": { readings: {
    "sì": { meaning_zh:"似乎，相似", meaning_en:"to seem, similar", example_zh:"似乎", example_pinyin:"sì hū", example_en:"it seems", meaning_vi:"dường như, giống", example_vi:"dường như", frequency:"high" },
    "shì": { meaning_zh:"似的，像似的", meaning_en:"like, as if (colloquial)", example_zh:"风似的", example_pinyin:"fēng shì de", example_en:"like the wind", meaning_vi:"giống như (khẩu ngữ)", example_vi:"như gió", frequency:"high" },
  }},
  "踏": { readings: {
    "tà": { meaning_zh:"踩踏，踏步", meaning_en:"to step on, to tread", example_zh:"踏步", example_pinyin:"tà bù", example_en:"to march in place", meaning_vi:"giẫm, đạp lên", example_vi:"giậm chân tại chỗ", frequency:"high" },
    "tā": { meaning_zh:"踏实，脚踏实地", meaning_en:"down-to-earth, practical", example_zh:"踏实", example_pinyin:"tā shi", example_en:"grounded/practical", meaning_vi:"vững chắc, thiết thực (踏实)", example_vi:"vững vàng", frequency:"high" },
  }},
  "帖": { readings: {
    "tiē": { meaning_zh:"妥帖，服帖（顺从、稳妥）", meaning_en:"submissive; proper, settled", example_zh:"妥帖", example_pinyin:"tuǒ tiē", example_en:"proper, settled", meaning_vi:"phục tùng; ổn thỏa, thỏa đáng", example_vi:"thỏa đáng", frequency:"medium" },
    "tiě": { meaning_zh:"请帖，帖子", meaning_en:"invitation card, note", example_zh:"请帖", example_pinyin:"qǐng tiě", example_en:"invitation card", meaning_vi:"thiếp mời; mảnh giấy", example_vi:"thiệp mời", frequency:"high" },
    "tiè": { meaning_zh:"字帖，临帖", meaning_en:"model calligraphy, copybook", example_zh:"字帖", example_pinyin:"zì tiè", example_en:"calligraphy copybook", meaning_vi:"bản mẫu chữ (để tập viết)", example_vi:"bản mẫu thư pháp", frequency:"medium" },
  }},
  "咽": { readings: {
    "yān": { meaning_zh:"咽喉，咽部", meaning_en:"throat, pharynx", example_zh:"咽喉", example_pinyin:"yān hóu", example_en:"throat", meaning_vi:"yết hầu, cổ họng", example_vi:"yết hầu", frequency:"high" },
    "yàn": { meaning_zh:"吞咽，咽下", meaning_en:"to swallow", example_zh:"吞咽", example_pinyin:"tūn yàn", example_en:"to swallow", meaning_vi:"nuốt", example_vi:"nuốt vào", frequency:"high" },
    "yè": { meaning_zh:"哽咽，呜咽", meaning_en:"to choke (with emotion)", example_zh:"哽咽", example_pinyin:"gěng yè", example_en:"to choke up", meaning_vi:"nghẹn ngào (xúc động)", example_vi:"nghẹn ngào", frequency:"medium" },
  }},
  "饮": { readings: {
    "yǐn": { meaning_zh:"饮水，饮料", meaning_en:"to drink, beverage", example_zh:"饮料", example_pinyin:"yǐn liào", example_en:"beverage", meaning_vi:"uống; đồ uống", example_vi:"đồ uống", frequency:"high" },
    "yìn": { meaning_zh:"饮马，喂水", meaning_en:"to water (an animal)", example_zh:"饮马", example_pinyin:"yìn mǎ", example_en:"to water a horse", meaning_vi:"cho (gia súc) uống nước", example_vi:"cho ngựa uống nước", frequency:"low" },
  }},
  "扎": { readings: {
    "zhā": { meaning_zh:"扎针，刺扎", meaning_en:"to prick, to stab", example_zh:"扎针", example_pinyin:"zhā zhēn", example_en:"to give an injection", meaning_vi:"đâm, châm (kim)", example_vi:"tiêm (châm kim)", frequency:"high" },
    "zā": { meaning_zh:"扎紧，捆扎", meaning_en:"to bind, to tie up", example_zh:"捆扎", example_pinyin:"kǔn zā", example_en:"to bundle up", meaning_vi:"buộc, bó chặt", example_vi:"bó lại", frequency:"medium" },
    "zhá": { meaning_zh:"挣扎，扑腾", meaning_en:"to struggle", example_zh:"挣扎", example_pinyin:"zhēng zhá", example_en:"to struggle", meaning_vi:"vùng vẫy, giãy giụa (挣扎)", example_vi:"vùng vẫy", frequency:"high" },
  }},
  "占": { readings: {
    "zhān": { meaning_zh:"占卜，占卦", meaning_en:"to divine, to tell fortune", example_zh:"占卜", example_pinyin:"zhān bǔ", example_en:"to divine", meaning_vi:"bói toán, xem quẻ", example_vi:"bói toán", frequency:"medium" },
    "zhàn": { meaning_zh:"占领，占有", meaning_en:"to occupy, to possess", example_zh:"占领", example_pinyin:"zhàn lǐng", example_en:"to occupy", meaning_vi:"chiếm, sở hữu", example_vi:"chiếm lĩnh", frequency:"high" },
  }},
  "涨": { readings: {
    "zhǎng": { meaning_zh:"涨潮，水涨", meaning_en:"to rise (water), high tide", example_zh:"涨潮", example_pinyin:"zhǎng cháo", example_en:"high tide", meaning_vi:"dâng lên (nước); thủy triều", example_vi:"thủy triều dâng", frequency:"high" },
    "zhàng": { meaning_zh:"涨价，膨胀", meaning_en:"price rise, to swell", example_zh:"涨价", example_pinyin:"zhàng jià", example_en:"price increase", meaning_vi:"tăng giá; phồng lên", example_vi:"tăng giá", frequency:"high" },
  }},
  "钻": { readings: {
    "zuān": { meaning_zh:"钻研，钻探", meaning_en:"to drill into, to study hard", example_zh:"钻研", example_pinyin:"zuān yán", example_en:"to study diligently", meaning_vi:"khoan; nghiên cứu sâu", example_vi:"nghiên cứu sâu", frequency:"high" },
    "zuàn": { meaning_zh:"钻石，电钻", meaning_en:"diamond, drill (tool)", example_zh:"钻石", example_pinyin:"zuàn shí", example_en:"diamond", meaning_vi:"kim cương; mũi khoan", example_vi:"kim cương", frequency:"high" },
  }},
  "得": { readings: {
    "dé": { meaning_zh:"得到，获得", meaning_en:"to get, to obtain", example_zh:"得奖", example_pinyin:"dé jiǎng", example_en:"to win an award", meaning_vi:"được, đạt được", example_vi:"đoạt giải", frequency:"high" },
    "de": { meaning_zh:"结构助词", meaning_en:"structural particle", example_zh:"跑得快", example_pinyin:"pǎo de kuài", example_en:"runs fast", meaning_vi:"trợ từ kết cấu (sau động từ)", example_vi:"chạy nhanh", frequency:"high" },
    "děi": { meaning_zh:"必须，需要", meaning_en:"must, need to", example_zh:"得去", example_pinyin:"děi qù", example_en:"must go", meaning_vi:"phải, cần", example_vi:"phải đi", frequency:"medium" },
  }},
  "地": { readings: {
    "dì": { meaning_zh:"土地，地点", meaning_en:"earth, place", example_zh:"地球", example_pinyin:"dì qiú", example_en:"Earth", meaning_vi:"đất, địa điểm", example_vi:"trái đất", frequency:"high" },
    "de": { meaning_zh:"结构助词", meaning_en:"structural particle", example_zh:"慢慢地", example_pinyin:"màn màn de", example_en:"slowly", meaning_vi:"trợ từ kết cấu (sau trạng ngữ)", example_vi:"chầm chậm", frequency:"high" },
  }},
  "好": { readings: {
    "hǎo": { meaning_zh:"好的，良好", meaning_en:"good, well", example_zh:"好人", example_pinyin:"hǎo rén", example_en:"good person", meaning_vi:"tốt, được", example_vi:"người tốt", frequency:"high" },
    "hào": { meaning_zh:"喜好，爱好", meaning_en:"to be fond of", example_zh:"好学", example_pinyin:"hào xué", example_en:"eager to learn", meaning_vi:"thích, ham", example_vi:"ham học", frequency:"medium" },
  }},
  "和": { readings: {
    "hé": { meaning_zh:"和平，和睦", meaning_en:"peace, harmony", example_zh:"和平", example_pinyin:"hé píng", example_en:"peace", meaning_vi:"và, hòa hợp", example_vi:"hòa bình", frequency:"high" },
    "hè": { meaning_zh:"应和，唱和", meaning_en:"to echo, to respond", example_zh:"和诗", example_pinyin:"hè shī", example_en:"to respond in verse", meaning_vi:"phụ họa, hưởng ứng", example_vi:"họa thơ", frequency:"low" },
    "huó": { meaning_zh:"和面，搅拌", meaning_en:"to knead (dough)", example_zh:"和面", example_pinyin:"huó miàn", example_en:"to knead dough", meaning_vi:"trộn, nhào (bột)", example_vi:"nhào bột", frequency:"medium" },
    "huò": { meaning_zh:"掺和，混合", meaning_en:"to mix together", example_zh:"和药", example_pinyin:"huò yào", example_en:"to mix medicine", meaning_vi:"pha, hòa lẫn", example_vi:"pha thuốc", frequency:"low" },
    "hú": { meaning_zh:"麻将和牌", meaning_en:"to win (mahjong)", example_zh:"和了", example_pinyin:"hú le", example_en:"to win mahjong", meaning_vi:"ù, thắng (bài mạt chược)", example_vi:"ù bài", frequency:"low" },
  }},
  "教": { readings: {
    "jiāo": { meaning_zh:"教导，教授", meaning_en:"to teach", example_zh:"教书", example_pinyin:"jiāo shū", example_en:"to teach", meaning_vi:"dạy", example_vi:"dạy học", frequency:"high" },
    "jiào": { meaning_zh:"教育，宗教", meaning_en:"education, religion", example_zh:"教育", example_pinyin:"jiào yù", example_en:"education", meaning_vi:"giáo dục, tôn giáo", example_vi:"giáo dục", frequency:"high" },
  }},
  "觉": { readings: {
    "jué": { meaning_zh:"感觉，觉得", meaning_en:"to feel, to sense", example_zh:"觉得", example_pinyin:"jué de", example_en:"to feel", meaning_vi:"cảm thấy, ý thức", example_vi:"cảm thấy", frequency:"high" },
    "jiào": { meaning_zh:"睡觉，午觉", meaning_en:"sleep, nap", example_zh:"睡觉", example_pinyin:"shuì jiào", example_en:"to sleep", meaning_vi:"giấc ngủ", example_vi:"ngủ", frequency:"high" },
  }},
  "少": { readings: {
    "shǎo": { meaning_zh:"少量，稀少", meaning_en:"few, little", example_zh:"很少", example_pinyin:"hěn shǎo", example_en:"rarely", meaning_vi:"ít, thiếu", example_vi:"rất ít", frequency:"high" },
    "shào": { meaning_zh:"年少，少年", meaning_en:"young, youth", example_zh:"少年", example_pinyin:"shào nián", example_en:"youth", meaning_vi:"trẻ, thiếu niên", example_vi:"thiếu niên", frequency:"medium" },
  }},
  "行": { readings: {
    "xíng": { meaning_zh:"行走，行动", meaning_en:"to walk, to act", example_zh:"行走", example_pinyin:"xíng zǒu", example_en:"to walk", meaning_vi:"đi, được, hành động", example_vi:"đi bộ", frequency:"high" },
    "háng": { meaning_zh:"行业，排列", meaning_en:"profession, row", example_zh:"银行", example_pinyin:"yín háng", example_en:"bank", meaning_vi:"hàng (dãy), nghề", example_vi:"ngân hàng", frequency:"high" },
  }},
  "兴": { readings: {
    "xīng": { meaning_zh:"兴起，复兴", meaning_en:"to rise, to revive", example_zh:"兴起", example_pinyin:"xīng qǐ", example_en:"to rise", meaning_vi:"hưng thịnh, phát đạt", example_vi:"trỗi dậy", frequency:"high" },
    "xìng": { meaning_zh:"兴趣，兴奋", meaning_en:"interest, excitement", example_zh:"兴趣", example_pinyin:"xìng qù", example_en:"interest", meaning_vi:"hứng thú, hứng khởi", example_vi:"hứng thú", frequency:"high" },
  }},
  "中": { readings: {
    "zhōng": { meaning_zh:"中间，中心", meaning_en:"middle, center", example_zh:"中国", example_pinyin:"zhōng guó", example_en:"China", meaning_vi:"giữa, trong, Trung Quốc", example_vi:"Trung Quốc", frequency:"high" },
    "zhòng": { meaning_zh:"命中，击中", meaning_en:"to hit, to be hit", example_zh:"中奖", example_pinyin:"zhòng jiǎng", example_en:"to win a prize", meaning_vi:"trúng, đúng", example_vi:"trúng thưởng", frequency:"medium" },
  }},
  "重": { readings: {
    "zhòng": { meaning_zh:"重量，沉重", meaning_en:"heavy, weight", example_zh:"体重", example_pinyin:"tǐ zhòng", example_en:"body weight", meaning_vi:"nặng, quan trọng", example_vi:"cân nặng", frequency:"high" },
    "chóng": { meaning_zh:"重复，重新", meaning_en:"again, to repeat", example_zh:"重来", example_pinyin:"chóng lái", example_en:"to redo", meaning_vi:"lặp lại, lần nữa", example_vi:"làm lại", frequency:"high" },
  }},
  "长": { readings: {
    "cháng": { meaning_zh:"长度，长短", meaning_en:"long, length", example_zh:"长城", example_pinyin:"cháng chéng", example_en:"Great Wall", meaning_vi:"dài, lâu", example_vi:"Vạn Lý Trường Thành", frequency:"high" },
    "zhǎng": { meaning_zh:"成长，增长", meaning_en:"to grow, to increase", example_zh:"成长", example_pinyin:"chéng zhǎng", example_en:"to grow up", meaning_vi:"lớn lên, trưởng", example_vi:"trưởng thành", frequency:"high" },
  }},
  "差": { readings: {
    "chā": { meaning_zh:"差别，差异", meaning_en:"difference, gap", example_zh:"差别", example_pinyin:"chā bié", example_en:"difference", meaning_vi:"chênh lệch, sai khác", example_vi:"khác biệt", frequency:"high" },
    "chà": { meaning_zh:"差劲，欠佳", meaning_en:"poor, inferior", example_zh:"差劲", example_pinyin:"chà jìn", example_en:"poor quality", meaning_vi:"kém, thiếu, khác", example_vi:"kém cỏi", frequency:"medium" },
    "chāi": { meaning_zh:"出差，差事", meaning_en:"business trip, errand", example_zh:"出差", example_pinyin:"chū chāi", example_en:"business trip", meaning_vi:"phái đi, công vụ", example_vi:"công tác", frequency:"medium" },
    "cī": { meaning_zh:"参差不齐", meaning_en:"uneven, irregular", example_zh:"参差", example_pinyin:"cēn cī", example_en:"uneven", meaning_vi:"không đều, so le", example_vi:"so le", frequency:"low" },
  }},
  "发": { readings: {
    "fā": { meaning_zh:"发出，发生", meaning_en:"to send out, to happen", example_zh:"发现", example_pinyin:"fā xiàn", example_en:"to discover", meaning_vi:"phát ra, xảy ra", example_vi:"phát hiện", frequency:"high" },
    "fà": { meaning_zh:"头发", meaning_en:"hair", example_zh:"头发", example_pinyin:"tóu fà", example_en:"hair", meaning_vi:"tóc", example_vi:"tóc", frequency:"high" },
  }},
  "应": { readings: {
    "yīng": { meaning_zh:"应该，应当", meaning_en:"should, ought to", example_zh:"应该", example_pinyin:"yīng gāi", example_en:"should", meaning_vi:"nên, phải", example_vi:"nên", frequency:"high" },
    "yìng": { meaning_zh:"回应，响应", meaning_en:"to respond, to answer", example_zh:"回应", example_pinyin:"huí yìng", example_en:"to respond", meaning_vi:"đáp lại, hưởng ứng", example_vi:"đáp lại", frequency:"medium" },
  }},
  "乐": { readings: {
    "lè": { meaning_zh:"快乐，欢乐", meaning_en:"happy, joyful", example_zh:"快乐", example_pinyin:"kuài lè", example_en:"happiness", meaning_vi:"vui, vui sướng", example_vi:"vui vẻ", frequency:"high" },
    "yuè": { meaning_zh:"音乐", meaning_en:"music", example_zh:"音乐", example_pinyin:"yīn yuè", example_en:"music", meaning_vi:"âm nhạc", example_vi:"âm nhạc", frequency:"high" },
  }},
  "数": { readings: {
    "shù": { meaning_zh:"数字，数量", meaning_en:"number, quantity", example_zh:"数学", example_pinyin:"shù xué", example_en:"mathematics", meaning_vi:"con số, số lượng", example_vi:"toán học", frequency:"high" },
    "shǔ": { meaning_zh:"计数，数数", meaning_en:"to count", example_zh:"数钱", example_pinyin:"shǔ qián", example_en:"to count money", meaning_vi:"đếm, kể ra", example_vi:"đếm tiền", frequency:"medium" },
    "shuò": { meaning_zh:"多次，屡次", meaning_en:"frequently, repeatedly", example_zh:"数见不鲜", example_pinyin:"shuò jiàn bù xiān", example_en:"not uncommon", meaning_vi:"nhiều lần, thường xuyên", example_vi:"thường thấy", frequency:"low" },
  }},
  "藏": { readings: {
    "cáng": { meaning_zh:"藏匿，储藏", meaning_en:"to hide, to store", example_zh:"藏宝", example_pinyin:"cáng bǎo", example_en:"hidden treasure", meaning_vi:"giấu, cất giữ", example_vi:"giấu báu vật", frequency:"medium" },
    "zàng": { meaning_zh:"西藏，宝藏", meaning_en:"Tibet, treasure", example_zh:"西藏", example_pinyin:"Xī Zàng", example_en:"Tibet", meaning_vi:"Tây Tạng; kho báu", example_vi:"Tây Tạng", frequency:"medium" },
  }},
  "朝": { readings: {
    "cháo": { meaning_zh:"朝代，朝廷", meaning_en:"dynasty, imperial court", example_zh:"明朝", example_pinyin:"míng cháo", example_en:"Ming Dynasty", meaning_vi:"triều đại, triều đình", example_vi:"nhà Minh", frequency:"medium" },
    "zhāo": { meaning_zh:"早晨，朝阳", meaning_en:"morning, morning sun", example_zh:"朝阳", example_pinyin:"zhāo yáng", example_en:"morning sun", meaning_vi:"buổi sáng, mặt trời mọc", example_vi:"mặt trời mọc", frequency:"low" },
  }},
  "传": { readings: {
    "chuán": { meaning_zh:"传递，传播", meaning_en:"to pass, to spread", example_zh:"传说", example_pinyin:"chuán shuō", example_en:"legend", meaning_vi:"truyền, lan truyền", example_vi:"truyền thuyết", frequency:"high" },
    "zhuàn": { meaning_zh:"传记，自传", meaning_en:"biography", example_zh:"自传", example_pinyin:"zì zhuàn", example_en:"autobiography", meaning_vi:"truyện ký, tiểu sử", example_vi:"tự truyện", frequency:"medium" },
  }},
  "降": { readings: {
    "jiàng": { meaning_zh:"下降，降低", meaning_en:"to descend, to lower", example_zh:"降温", example_pinyin:"jiàng wēn", example_en:"temperature drop", meaning_vi:"hạ xuống, giảm", example_vi:"giảm nhiệt độ", frequency:"high" },
    "xiáng": { meaning_zh:"投降，降服", meaning_en:"to surrender", example_zh:"投降", example_pinyin:"tóu xiáng", example_en:"to surrender", meaning_vi:"đầu hàng, hàng phục", example_vi:"đầu hàng", frequency:"medium" },
  }},
  "假": { readings: {
    "jiǎ": { meaning_zh:"虚假，假冒", meaning_en:"fake, false", example_zh:"假装", example_pinyin:"jiǎ zhuāng", example_en:"to pretend", meaning_vi:"giả, không thật", example_vi:"giả vờ", frequency:"high" },
    "jià": { meaning_zh:"假期，休假", meaning_en:"holiday, vacation", example_zh:"放假", example_pinyin:"fàng jià", example_en:"to have a holiday", meaning_vi:"kỳ nghỉ", example_vi:"nghỉ lễ", frequency:"high" },
  }},
  "参": { readings: {
    "cān": { meaning_zh:"参加，参与", meaning_en:"to participate", example_zh:"参加", example_pinyin:"cān jiā", example_en:"to join", meaning_vi:"tham gia, tham dự", example_vi:"tham gia", frequency:"high" },
    "shēn": { meaning_zh:"人参", meaning_en:"ginseng", example_zh:"人参", example_pinyin:"rén shēn", example_en:"ginseng", meaning_vi:"nhân sâm", example_vi:"nhân sâm", frequency:"low" },
    "cēn": { meaning_zh:"参差不齐", meaning_en:"uneven, irregular", example_zh:"参差", example_pinyin:"cēn cī", example_en:"uneven", meaning_vi:"so le, không đều", example_vi:"so le", frequency:"low" },
  }},
  "看": { readings: {
    "kàn": { meaning_zh:"看见，观看", meaning_en:"to see, to watch", example_zh:"看书", example_pinyin:"kàn shū", example_en:"to read", meaning_vi:"nhìn, xem", example_vi:"đọc sách", frequency:"high" },
    "kān": { meaning_zh:"看守，照看", meaning_en:"to watch over, to guard", example_zh:"看门", example_pinyin:"kān mén", example_en:"to guard the door", meaning_vi:"trông, canh giữ", example_vi:"canh cửa", frequency:"medium" },
  }},
  "弹": { readings: {
    "tán": { meaning_zh:"弹琴，弹奏", meaning_en:"to play (instrument)", example_zh:"弹琴", example_pinyin:"tán qín", example_en:"to play piano", meaning_vi:"gảy, đánh (đàn); bật", example_vi:"đánh đàn", frequency:"high" },
    "dàn": { meaning_zh:"子弹，炸弹", meaning_en:"bullet; bomb", example_zh:"子弹", example_pinyin:"zǐ dàn", example_en:"bullet", meaning_vi:"đạn; bom", example_vi:"viên đạn", frequency:"high" },
  }},
  "为": { readings: {
    "wéi": { meaning_zh:"作为，成为", meaning_en:"to be, to act as", example_zh:"成为", example_pinyin:"chéng wéi", example_en:"to become", meaning_vi:"làm, trở thành", example_vi:"trở thành", frequency:"high" },
    "wèi": { meaning_zh:"为了，因为", meaning_en:"for the sake of", example_zh:"为什么", example_pinyin:"wèi shén me", example_en:"why", meaning_vi:"vì, để cho", example_vi:"tại sao", frequency:"high" },
  }},
  "扒": { readings: {
    "bā": { meaning_zh:"扒开，抓住", meaning_en:"to scratch, to cling", example_zh:"扒开", example_pinyin:"bā kāi", example_en:"to pry open", meaning_vi:"cạy, bới ra; bám", example_vi:"cạy ra", frequency:"medium" },
    "pá": { meaning_zh:"扒手，扒窃", meaning_en:"pickpocket", example_zh:"扒手", example_pinyin:"pá shǒu", example_en:"pickpocket", meaning_vi:"móc túi; cào", example_vi:"kẻ móc túi", frequency:"medium" },
  }},
  "膀": { readings: {
    "bǎng": { meaning_zh:"肩膀，翅膀", meaning_en:"shoulder, wing", example_zh:"肩膀", example_pinyin:"jiān bǎng", example_en:"shoulder", meaning_vi:"vai; cánh", example_vi:"bờ vai", frequency:"high" },
    "páng": { meaning_zh:"膀胱", meaning_en:"bladder (in 膀胱)", example_zh:"膀胱", example_pinyin:"páng guāng", example_en:"bladder", meaning_vi:"bàng quang (膀胱)", example_vi:"bàng quang", frequency:"medium" },
    "pāng": { meaning_zh:"滂沱（象声）", meaning_en:"splashing sound", example_zh:"膀然", example_pinyin:"pāng rán", example_en:"spreading wide", meaning_vi:"phù, sưng (膀肿)", example_vi:"phù nề", frequency:"low" },
  }},
  "堡": { readings: {
    "bǎo": { meaning_zh:"堡垒，城堡", meaning_en:"fort, castle", example_zh:"城堡", example_pinyin:"chéng bǎo", example_en:"castle", meaning_vi:"pháo đài, thành lũy", example_vi:"lâu đài", frequency:"high" },
    "pù": { meaning_zh:"十里堡（地名）", meaning_en:"Pu (in place names)", example_zh:"十里堡", example_pinyin:"shí lǐ pù", example_en:"Shilipu", meaning_vi:"trạm dịch (địa danh, 十里堡)", example_vi:"Thập Lý Bảo", frequency:"low" },
    "bǔ": { meaning_zh:"瓦窑堡（地名）", meaning_en:"Bu (in place names)", example_zh:"瓦窑堡", example_pinyin:"Wǎ yáo bǔ", example_en:"Wayaobu", meaning_vi:"bảo (địa danh, 瓦窑堡)", example_vi:"Ngõa Diêu Bảo", frequency:"low" },
  }},
  "背": { readings: {
    "bēi": { meaning_zh:"背负，背包", meaning_en:"to carry on back", example_zh:"背包", example_pinyin:"bēi bāo", example_en:"backpack", meaning_vi:"cõng, đeo (sau lưng)", example_vi:"ba lô", frequency:"high" },
    "bèi": { meaning_zh:"背面，背后", meaning_en:"back (of body/object)", example_zh:"背后", example_pinyin:"bèi hòu", example_en:"behind", meaning_vi:"mặt lưng, phía sau", example_vi:"phía sau", frequency:"high" },
  }},
  "辟": { readings: {
    "bì": { meaning_zh:"复辟，辟谣", meaning_en:"to refute, to restore", example_zh:"复辟", example_pinyin:"fù bì", example_en:"to restore (a monarchy)", meaning_vi:"phục bích; bác bỏ tin đồn", example_vi:"phục bích", frequency:"medium" },
    "pì": { meaning_zh:"开辟，辟地", meaning_en:"to open up, to develop", example_zh:"开辟", example_pinyin:"kāi pì", example_en:"to open up", meaning_vi:"khai phá, mở mang", example_vi:"khai phá", frequency:"medium" },
  }},
  "朴": { readings: {
    "pǔ": { meaning_zh:"朴素，朴实", meaning_en:"plain, simple", example_zh:"朴素", example_pinyin:"pǔ sù", example_en:"simple and plain", meaning_vi:"giản dị, mộc mạc", example_vi:"giản dị", frequency:"high" },
    "piáo": { meaning_zh:"朴刀（古兵器）", meaning_en:"Piao (surname/archaic)", example_zh:"姓朴", example_pinyin:"xìng Piáo", example_en:"Park (Korean surname)", meaning_vi:"họ Phác (Triều Tiên)", example_vi:"họ Phác", frequency:"low" },
    "pò": { meaning_zh:"朴树（植物）", meaning_en:"hackberry tree", example_zh:"朴硝", example_pinyin:"pò xiāo", example_en:"natural soda, Glauber's salt", meaning_vi:"phác tiêu (khoáng vật)", example_vi:"phác tiêu", frequency:"low" },
    "pō": { meaning_zh:"朴硝（矿物）", meaning_en:"mirabilite (mineral)", example_zh:"朴硝", example_pinyin:"pò xiāo", example_en:"mirabilite", meaning_vi:"đao phác (binh khí cổ)", example_vi:"đao phác", frequency:"low" },
  }},
  "戚": { readings: {
    "qī": { meaning_zh:"戚戚，悲戚", meaning_en:"sorrowful, grieved", example_zh:"悲戚", example_pinyin:"bēi qī", example_en:"sorrowful", meaning_vi:"buồn rầu, sầu muộn", example_vi:"buồn bã", frequency:"medium" },
    "qì": { meaning_zh:"亲戚，外戚", meaning_en:"relative, kin", example_zh:"亲戚", example_pinyin:"qīn qi", example_en:"relatives", meaning_vi:"họ hàng, thân thích", example_vi:"họ hàng", frequency:"high" },
  }},
  "纤": { readings: {
    "xiān": { meaning_zh:"纤维，纤细", meaning_en:"fiber, slender", example_zh:"纤维", example_pinyin:"xiān wéi", example_en:"fiber", meaning_vi:"sợi; mảnh, nhỏ", example_vi:"sợi (xenlulô)", frequency:"high" },
    "qiàn": { meaning_zh:"纤夫，拉纤", meaning_en:"tow rope, boat tracker", example_zh:"纤夫", example_pinyin:"qiàn fū", example_en:"boat tracker", meaning_vi:"dây kéo thuyền; người kéo thuyền", example_vi:"phu kéo thuyền", frequency:"low" },
  }},
  "翘": { readings: {
    "qiáo": { meaning_zh:"翘首，翘望", meaning_en:"to raise head, to long for", example_zh:"翘首", example_pinyin:"qiáo shǒu", example_en:"to eagerly await", meaning_vi:"ngẩng, ngóng (đầu)", example_vi:"ngóng trông", frequency:"medium" },
    "qiào": { meaning_zh:"翘起，翘尾巴", meaning_en:"to stick up, to tilt", example_zh:"翘起", example_pinyin:"qiào qǐ", example_en:"to stick up", meaning_vi:"vểnh, cong lên", example_vi:"vểnh lên", frequency:"high" },
  }},
  "亲": { readings: {
    "qīn": { meaning_zh:"亲人，亲爱", meaning_en:"dear, close, kin", example_zh:"亲人", example_pinyin:"qīn rén", example_en:"loved ones", meaning_vi:"người thân, thân yêu", example_vi:"người thân", frequency:"high" },
    "qìng": { meaning_zh:"亲家，姻亲", meaning_en:"in-laws, relatives by marriage", example_zh:"亲家", example_pinyin:"qìng jia", example_en:"in-laws", meaning_vi:"thông gia, sui gia", example_vi:"thông gia", frequency:"medium" },
  }},
  "嚷": { readings: {
    "rǎng": { meaning_zh:"叫嚷，嚷嚷", meaning_en:"to shout, to yell", example_zh:"叫嚷", example_pinyin:"jiào rǎng", example_en:"to shout", meaning_vi:"la hét, kêu to", example_vi:"la hét", frequency:"high" },
    "rāng": { meaning_zh:"嚷嚷（口语）", meaning_en:"to make noise (colloq.)", example_zh:"嚷嚷", example_pinyin:"rāng rang", example_en:"to make a fuss", meaning_vi:"làm ầm ĩ (khẩu ngữ)", example_vi:"làm ầm ĩ", frequency:"medium" },
  }},
  "任": { readings: {
    "rén": { meaning_zh:"任命，担任", meaning_en:"to appoint, to serve as", example_zh:"任务", example_pinyin:"rèn wu", example_en:"task, mission", meaning_vi:"họ Nhậm", example_vi:"họ Nhậm", frequency:"high" },
    "rèn": { meaning_zh:"任意，任何", meaning_en:"any, arbitrary", example_zh:"任何", example_pinyin:"rèn hé", example_en:"any", meaning_vi:"nhiệm vụ; đảm nhận; mặc kệ", example_vi:"nhiệm vụ", frequency:"high" },
  }},
  "刹": { readings: {
    "chà": { meaning_zh:"古刹，刹那", meaning_en:"temple; instant", example_zh:"古刹", example_pinyin:"gǔ chà", example_en:"ancient temple", meaning_vi:"chùa, sát-na (đơn vị thời gian rất ngắn)", example_vi:"ngôi chùa cổ", frequency:"medium" },
    "shā": { meaning_zh:"刹车，刹住", meaning_en:"to brake, to stop", example_zh:"刹车", example_pinyin:"shā chē", example_en:"to brake", meaning_vi:"phanh, thắng (xe)", example_vi:"phanh xe", frequency:"high" },
  }},
  "禅": { readings: {
    "chán": { meaning_zh:"禅宗，禅定", meaning_en:"Zen Buddhism, meditation", example_zh:"禅宗", example_pinyin:"Chán zōng", example_en:"Zen Buddhism", meaning_vi:"thiền, Thiền tông", example_vi:"Thiền tông", frequency:"medium" },
    "shàn": { meaning_zh:"禅让，封禅", meaning_en:"abdication, imperial rite", example_zh:"禅让", example_pinyin:"shàn ràng", example_en:"abdication", meaning_vi:"nhường ngôi (thiện nhượng)", example_vi:"nhường ngôi", frequency:"low" },
  }},
  "匙": { readings: {
    "chí": { meaning_zh:"汤匙，钥匙", meaning_en:"spoon, key", example_zh:"汤匙", example_pinyin:"tāng chí", example_en:"spoon", meaning_vi:"thìa, muỗng", example_vi:"thìa canh", frequency:"high" },
    "shi": { meaning_zh:"钥匙（口语）", meaning_en:"key (colloq., unstressed)", example_zh:"钥匙", example_pinyin:"yào shi", example_en:"key", meaning_vi:"chìa khóa (trong 钥匙)", example_vi:"chìa khóa", frequency:"high" },
  }},
  "揣": { readings: {
    "chuāi": { meaning_zh:"揣在怀里", meaning_en:"to tuck into (pocket)", example_zh:"揣手", example_pinyin:"chuāi shǒu", example_en:"hands in pockets", meaning_vi:"nhét vào (trong ngực/túi)", example_vi:"thọc tay (vào túi)", frequency:"medium" },
    "chuǎi": { meaning_zh:"揣测，揣摩", meaning_en:"to guess, to speculate", example_zh:"揣测", example_pinyin:"chuǎi cè", example_en:"to speculate", meaning_vi:"phỏng đoán, suy xét", example_vi:"phỏng đoán", frequency:"medium" },
    "chuài": { meaning_zh:"挣揣，挣扎", meaning_en:"to kick, to struggle", example_zh:"乱揣", example_pinyin:"luàn chuài", example_en:"to kick wildly", meaning_vi:"giãy giụa (挣揣)", example_vi:"giãy đạp loạn xạ", frequency:"low" },
  }},
  "创": { readings: {
    "chuàng": { meaning_zh:"创造，创建", meaning_en:"to create, to found", example_zh:"创造", example_pinyin:"chuàng zào", example_en:"to create", meaning_vi:"sáng tạo, sáng lập", example_vi:"sáng tạo", frequency:"high" },
    "chuāng": { meaning_zh:"创伤，创口", meaning_en:"wound, injury", example_zh:"创伤", example_pinyin:"chuāng shāng", example_en:"wound", meaning_vi:"vết thương, vết rách", example_vi:"vết thương", frequency:"medium" },
  }},
  "撮": { readings: {
    "cuō": { meaning_zh:"撮合，撮要", meaning_en:"to bring together, summary", example_zh:"撮合", example_pinyin:"cuō hé", example_en:"to matchmake", meaning_vi:"se duyên; tóm tắt; nhúm", example_vi:"mai mối", frequency:"medium" },
    "zuǒ": { meaning_zh:"一撮盐", meaning_en:"a pinch of (measure word)", example_zh:"一撮毛", example_pinyin:"yī zuǒ máo", example_en:"a tuft of hair", meaning_vi:"túm, nhúm (lượng từ tóc)", example_vi:"một túm lông", frequency:"medium" },
  }},
  "坊": { readings: {
    "fāng": { meaning_zh:"牌坊，街坊", meaning_en:"memorial arch, neighborhood", example_zh:"牌坊", example_pinyin:"pái fāng", example_en:"memorial archway", meaning_vi:"cổng làng; phố phường", example_vi:"cổng chào", frequency:"medium" },
    "fáng": { meaning_zh:"作坊，磨坊", meaning_en:"workshop, mill", example_zh:"作坊", example_pinyin:"zuō fang", example_en:"workshop", meaning_vi:"xưởng nhỏ (作坊, 磨坊)", example_vi:"xưởng thủ công", frequency:"medium" },
  }},
  "分": { readings: {
    "fēn": { meaning_zh:"分开，分配", meaning_en:"to divide, to distribute", example_zh:"分开", example_pinyin:"fēn kāi", example_en:"to separate", meaning_vi:"chia, phân, phút", example_vi:"chia ra", frequency:"high" },
    "fèn": { meaning_zh:"成分，身份", meaning_en:"component, identity", example_zh:"成分", example_pinyin:"chéng fèn", example_en:"component", meaning_vi:"phần, bổn phận, chức phận", example_vi:"thành phần", frequency:"high" },
  }},
  "否": { readings: {
    "fǒu": { meaning_zh:"否定，是否", meaning_en:"to deny, whether", example_zh:"是否", example_pinyin:"shì fǒu", example_en:"whether or not", meaning_vi:"phủ định; hay không", example_vi:"hay không", frequency:"high" },
    "pǐ": { meaning_zh:"否极泰来", meaning_en:"misfortune turns to fortune", example_zh:"否极泰来", example_pinyin:"pǐ jí tài lái", example_en:"after misfortune comes fortune", meaning_vi:"bĩ cực thái lai", example_vi:"hết khổ tới sướng", frequency:"low" },
  }},
  "服": { readings: {
    "fú": { meaning_zh:"衣服，服从", meaning_en:"clothes, to obey", example_zh:"衣服", example_pinyin:"yī fu", example_en:"clothing", meaning_vi:"quần áo, phục tùng, uống thuốc", example_vi:"quần áo", frequency:"high" },
    "fù": { meaning_zh:"服药（量词）", meaning_en:"dose of medicine", example_zh:"一服药", example_pinyin:"yī fù yào", example_en:"a dose of medicine", meaning_vi:"liều, thang (lượng từ thuốc)", example_vi:"một thang thuốc", frequency:"medium" },
  }},
  "杠": { readings: {
    "gàng": { meaning_zh:"杠铃，单杠", meaning_en:"barbell, horizontal bar", example_zh:"单杠", example_pinyin:"dān gàng", example_en:"horizontal bar", meaning_vi:"đòn tạ; xà đơn", example_vi:"xà đơn", frequency:"medium" },
    "gāng": { meaning_zh:"杠夫，抬杠", meaning_en:"to argue (colloq.)", example_zh:"抬杠", example_pinyin:"tái gàng", example_en:"to argue pointlessly", meaning_vi:"cãi cùn (抬杠); khiêng", example_vi:"cãi cùn vô ích", frequency:"medium" },
  }},
  "膏": { readings: {
    "gāo": { meaning_zh:"膏药，牙膏", meaning_en:"paste, ointment", example_zh:"牙膏", example_pinyin:"yá gāo", example_en:"toothpaste", meaning_vi:"cao, thuốc cao; mỡ", example_vi:"kem đánh răng", frequency:"high" },
    "gào": { meaning_zh:"膏土，沃土", meaning_en:"fertile soil", example_zh:"膏腴", example_pinyin:"gāo yú", example_en:"fertile land", meaning_vi:"đất màu mỡ; tra dầu", example_vi:"đất phì nhiêu", frequency:"low" },
  }},
  "搁": { readings: {
    "gē": { meaning_zh:"搁置，搁下", meaning_en:"to put down, to shelve", example_zh:"搁置", example_pinyin:"gē zhì", example_en:"to shelve", meaning_vi:"đặt, gác lại; để đó", example_vi:"gác lại", frequency:"high" },
    "gé": { meaning_zh:"搁不住，受不住", meaning_en:"can't bear / withstand", example_zh:"搁不住", example_pinyin:"gē bu zhù", example_en:"can't withstand", meaning_vi:"chịu đựng, kham nổi (khẩu ngữ)", example_vi:"không chịu nổi", frequency:"medium" },
  }},
  "给": { readings: {
    "gěi": { meaning_zh:"给予，送给", meaning_en:"to give, for", example_zh:"给你", example_pinyin:"gěi nǐ", example_en:"here you go", meaning_vi:"cho, đưa", example_vi:"đưa cho bạn", frequency:"high" },
    "jǐ": { meaning_zh:"供给，补给", meaning_en:"to supply, to provide", example_zh:"供给", example_pinyin:"gōng jǐ", example_en:"to supply", meaning_vi:"cung cấp, cấp phát", example_vi:"cung cấp", frequency:"medium" },
  }},
  "更": { readings: {
    "gēng": { meaning_zh:"更换，更新", meaning_en:"to change, to update", example_zh:"更新", example_pinyin:"gēng xīn", example_en:"to update", meaning_vi:"thay đổi, đổi mới", example_vi:"cập nhật", frequency:"high" },
    "gèng": { meaning_zh:"更加，更好", meaning_en:"even more, even better", example_zh:"更加", example_pinyin:"gèng jiā", example_en:"even more", meaning_vi:"hơn nữa, càng", example_vi:"càng thêm", frequency:"high" },
  }},
  "勾": { readings: {
    "gōu": { meaning_zh:"勾画，勾勒", meaning_en:"to sketch, to tick off", example_zh:"勾画", example_pinyin:"gōu huà", example_en:"to sketch", meaning_vi:"vẽ phác; móc nối", example_vi:"phác họa", frequency:"high" },
    "gòu": { meaning_zh:"勾当，勾结", meaning_en:"shady dealings, to collude", example_zh:"勾结", example_pinyin:"gòu jié", example_en:"to collude", meaning_vi:"việc mờ ám; cấu kết", example_vi:"cấu kết", frequency:"medium" },
  }},
  "估": { readings: {
    "gū": { meaning_zh:"估计，估价", meaning_en:"to estimate", example_zh:"估计", example_pinyin:"gū jì", example_en:"to estimate", meaning_vi:"ước lượng, định giá", example_vi:"ước tính", frequency:"high" },
    "gù": { meaning_zh:"估衣（旧衣）", meaning_en:"secondhand clothes", example_zh:"估衣", example_pinyin:"gù yi", example_en:"secondhand clothes", meaning_vi:"quần áo cũ (估衣)", example_vi:"quần áo cũ", frequency:"low" },
  }},
  "骨": { readings: {
    "gǔ": { meaning_zh:"骨头，骨骼", meaning_en:"bone, skeleton", example_zh:"骨头", example_pinyin:"gǔ tou", example_en:"bone", meaning_vi:"xương, bộ xương", example_vi:"khúc xương", frequency:"high" },
    "gū": { meaning_zh:"骨朵，花骨朵", meaning_en:"flower bud", example_zh:"花骨朵", example_pinyin:"huā gū duo", example_en:"flower bud", meaning_vi:"nụ hoa (trong 花骨朵)", example_vi:"nụ hoa", frequency:"medium" },
  }},
  "龟": { readings: {
    "guī": { meaning_zh:"乌龟，龟甲", meaning_en:"turtle, tortoise", example_zh:"乌龟", example_pinyin:"wū guī", example_en:"turtle", meaning_vi:"con rùa", example_vi:"con rùa", frequency:"high" },
    "jūn": { meaning_zh:"龟裂，皲裂", meaning_en:"to crack (skin/earth)", example_zh:"龟裂", example_pinyin:"jūn liè", example_en:"cracked skin", meaning_vi:"nứt nẻ (da, đất)", example_vi:"da nứt nẻ", frequency:"medium" },
    "qiū": { meaning_zh:"龟兹（古国）", meaning_en:"Kucha (ancient kingdom)", example_zh:"龟兹", example_pinyin:"Qiū cí", example_en:"Kucha", meaning_vi:"Quy Tư (nước cổ Tây Vực)", example_vi:"nước Quy Tư", frequency:"low" },
  }},
  "过": { readings: {
    "guò": { meaning_zh:"经过，过去", meaning_en:"to pass, past", example_zh:"经过", example_pinyin:"jīng guò", example_en:"to pass by", meaning_vi:"qua, đã từng", example_vi:"đi qua", frequency:"high" },
    "guō": { meaning_zh:"姓氏（过）", meaning_en:"Guo (surname)", example_zh:"过姓", example_pinyin:"Guō xìng", example_en:"surname Guo", meaning_vi:"họ Quách", example_vi:"họ Quách", frequency:"low" },
  }},
  "哈": { readings: {
    "hā": { meaning_zh:"哈哈，哈气", meaning_en:"ha-ha, to breathe out", example_zh:"哈哈", example_pinyin:"hā hā", example_en:"ha ha", meaning_vi:"ha ha, hà hơi", example_vi:"ha ha", frequency:"high" },
    "hǎ": { meaning_zh:"哈巴狗", meaning_en:"Pekingese dog", example_zh:"哈巴狗", example_pinyin:"hǎ ba gǒu", example_en:"Pekingese", meaning_vi:"chó Bắc Kinh (哈巴狗)", example_vi:"chó cảnh Bắc Kinh", frequency:"medium" },
    "hà": { meaning_zh:"哈（方言惊叹）", meaning_en:"wow (dialect exclamation)", example_zh:"哈，真的", example_pinyin:"hà zhēn de", example_en:"wow, really?", meaning_vi:"ồ (cảm thán phương ngữ)", example_vi:"ồ, thật à", frequency:"low" },
  }},
  "汗": { readings: {
    "hàn": { meaning_zh:"汗水，出汗", meaning_en:"sweat, perspiration", example_zh:"出汗", example_pinyin:"chū hàn", example_en:"to sweat", meaning_vi:"mồ hôi, ra mồ hôi", example_vi:"ra mồ hôi", frequency:"high" },
    "hán": { meaning_zh:"可汗，大汗", meaning_en:"Khan (ruler title)", example_zh:"可汗", example_pinyin:"kè hán", example_en:"Khan", meaning_vi:"Hãn (tước hiệu vua du mục)", example_vi:"Khả Hãn", frequency:"low" },
  }},
  "号": { readings: {
    "hào": { meaning_zh:"号码，号令", meaning_en:"number, order", example_zh:"号码", example_pinyin:"hào mǎ", example_en:"number", meaning_vi:"số, hiệu, ngày", example_vi:"số (mã số)", frequency:"high" },
    "háo": { meaning_zh:"号叫，嚎啕", meaning_en:"to howl, to wail", example_zh:"号叫", example_pinyin:"háo jiào", example_en:"to howl", meaning_vi:"gào, kêu lớn", example_vi:"gào thét", frequency:"medium" },
  }},
  "喝": { readings: {
    "hē": { meaning_zh:"喝水，饮用", meaning_en:"to drink", example_zh:"喝水", example_pinyin:"hē shuǐ", example_en:"to drink water", meaning_vi:"uống", example_vi:"uống nước", frequency:"high" },
    "hè": { meaning_zh:"喝彩，喝止", meaning_en:"to cheer, to shout at", example_zh:"喝彩", example_pinyin:"hè cǎi", example_en:"to cheer", meaning_vi:"quát, hô lớn", example_vi:"hoan hô", frequency:"medium" },
  }},
  "荷": { readings: {
    "hé": { meaning_zh:"荷花，荷叶", meaning_en:"lotus flower", example_zh:"荷花", example_pinyin:"hé huā", example_en:"lotus flower", meaning_vi:"hoa sen", example_vi:"hoa sen", frequency:"high" },
    "hè": { meaning_zh:"负荷，荷载", meaning_en:"load, to bear a load", example_zh:"负荷", example_pinyin:"fù hè", example_en:"load", meaning_vi:"gánh vác; phụ tải", example_vi:"phụ tải", frequency:"medium" },
  }},
  "会": { readings: {
    "huì": { meaning_zh:"会议，学会", meaning_en:"meeting, to be able to", example_zh:"会议", example_pinyin:"huì yì", example_en:"meeting", meaning_vi:"biết, sẽ, cuộc họp", example_vi:"hội nghị", frequency:"high" },
    "kuài": { meaning_zh:"会计", meaning_en:"accounting (in 会计)", example_zh:"会计", example_pinyin:"kuài jì", example_en:"accounting", meaning_vi:"kế toán (trong 会计)", example_vi:"kế toán", frequency:"high" },
  }},
  "混": { readings: {
    "hùn": { meaning_zh:"混合，混乱", meaning_en:"to mix, chaos", example_zh:"混合", example_pinyin:"hùn hé", example_en:"to mix", meaning_vi:"trộn lẫn; hỗn loạn", example_vi:"trộn lẫn", frequency:"high" },
    "hún": { meaning_zh:"混沌，浑浊", meaning_en:"murky, muddy (variant)", example_zh:"混沌", example_pinyin:"hùn dùn", example_en:"chaos, murky", meaning_vi:"hỗn độn; đục (浑)", example_vi:"hỗn độn", frequency:"medium" },
  }},
  "霍": { readings: {
    "huò": { meaning_zh:"霍然，姓霍", meaning_en:"suddenly; surname Huo", example_zh:"霍然", example_pinyin:"huò rán", example_en:"suddenly recovered", meaning_vi:"thoắt, đột nhiên; họ Hoắc", example_vi:"khỏi bệnh nhanh chóng", frequency:"medium" },
    "huō": { meaning_zh:"霍地（方言）", meaning_en:"swiftly (dialect)", example_zh:"霍地", example_pinyin:"huō de", example_en:"swiftly", meaning_vi:"vụt, nhanh (phương ngữ)", example_vi:"vụt một cái", frequency:"low" },
  }},
  "缉": { readings: {
    "jī": { meaning_zh:"缉捕，通缉", meaning_en:"to arrest, to pursue", example_zh:"通缉", example_pinyin:"tōng jī", example_en:"wanted notice", meaning_vi:"truy bắt, truy nã", example_vi:"truy nã", frequency:"medium" },
    "qī": { meaning_zh:"缉鞋（缝制）", meaning_en:"to sew (shoes)", example_zh:"缉鞋底", example_pinyin:"qī xié dǐ", example_en:"to sew shoe soles", meaning_vi:"may, khâu (đế giày)", example_vi:"khâu đế giày", frequency:"low" },
  }},
  "稽": { readings: {
    "jī": { meaning_zh:"稽查，无稽", meaning_en:"to check; unfounded", example_zh:"无稽之谈", example_pinyin:"wú jī zhī tán", example_en:"groundless talk", meaning_vi:"tra xét; vô căn cứ (无稽)", example_vi:"lời nói vô căn cứ", frequency:"medium" },
    "qǐ": { meaning_zh:"滑稽，可笑", meaning_en:"funny, ridiculous", example_zh:"稽首", example_pinyin:"qǐ shǒu", example_en:"to kowtow", meaning_vi:"khấu đầu (稽首)", example_vi:"khấu đầu lạy", frequency:"high" },
  }},
  "济": { readings: {
    "jì": { meaning_zh:"经济，救济", meaning_en:"economy, to aid", example_zh:"经济", example_pinyin:"jīng jì", example_en:"economy", meaning_vi:"kinh tế, cứu trợ", example_vi:"kinh tế", frequency:"high" },
    "jǐ": { meaning_zh:"人才济济", meaning_en:"full of talent", example_zh:"济济一堂", example_pinyin:"jǐ jǐ yī táng", example_en:"a gathering of talents", meaning_vi:"đông đảo (nhân tài)", example_vi:"nhân tài tụ hội", frequency:"low" },
  }},
  "贾": { readings: {
    "jiǎ": { meaning_zh:"姓贾（人名）", meaning_en:"Jia (surname)", example_zh:"贾宝玉", example_pinyin:"Jiǎ Bǎo yù", example_en:"Jia Baoyu", meaning_vi:"họ Giả", example_vi:"Giả Bảo Ngọc", frequency:"medium" },
    "gǔ": { meaning_zh:"商贾，行贾", meaning_en:"merchant, to trade", example_zh:"商贾", example_pinyin:"shāng gǔ", example_en:"merchants", meaning_vi:"thương nhân, buôn bán", example_vi:"thương nhân", frequency:"low" },
  }},
  "间": { readings: {
    "jiān": { meaning_zh:"中间，空间", meaning_en:"between, space", example_zh:"中间", example_pinyin:"zhōng jiān", example_en:"in between", meaning_vi:"giữa, gian, phòng", example_vi:"ở giữa", frequency:"high" },
    "jiàn": { meaning_zh:"间隔，间谍", meaning_en:"interval, spy", example_zh:"间谍", example_pinyin:"jiàn dié", example_en:"spy", meaning_vi:"khe hở, ly gián", example_vi:"gián điệp", frequency:"high" },
  }},
  "槛": { readings: {
    "kǎn": { meaning_zh:"门槛，槛阈", meaning_en:"threshold, doorstep", example_zh:"门槛", example_pinyin:"mén kǎn", example_en:"threshold", meaning_vi:"ngưỡng cửa, bậc cửa", example_vi:"ngưỡng cửa", frequency:"high" },
    "jiàn": { meaning_zh:"槛车，栅栏", meaning_en:"cage cart, railing", example_zh:"槛车", example_pinyin:"jiàn chē", example_en:"cage cart", meaning_vi:"xe tù; lan can, cũi", example_vi:"xe tù", frequency:"low" },
  }},
  "藉": { readings: {
    "jiè": { meaning_zh:"凭藉，慰藉", meaning_en:"to rely on, to console", example_zh:"慰藉", example_pinyin:"wèi jiè", example_en:"to console", meaning_vi:"nhờ vào; an ủi (慰藉)", example_vi:"an ủi", frequency:"medium" },
    "jí": { meaning_zh:"狼藉，杂乱", meaning_en:"in disorder, scattered", example_zh:"狼藉", example_pinyin:"láng jí", example_en:"in a mess", meaning_vi:"bừa bộn, lộn xộn (狼藉)", example_vi:"bừa bãi", frequency:"medium" },
  }},
  "经": { readings: {
    "jīng": { meaning_zh:"经过，经济", meaning_en:"to pass through, classic", example_zh:"经验", example_pinyin:"jīng yàn", example_en:"experience", meaning_vi:"trải qua, kinh tế", example_vi:"kinh nghiệm", frequency:"high" },
    "jìng": { meaning_zh:"经典（古音）", meaning_en:"archaic reading; sutra", example_zh:"经文", example_pinyin:"jìng wén", example_en:"scripture", meaning_vi:"kinh sách (âm cổ)", example_vi:"kinh văn", frequency:"low" },
  }},
  "颈": { readings: {
    "jǐng": { meaning_zh:"脖颈，颈部", meaning_en:"neck", example_zh:"脖颈", example_pinyin:"bó jǐng", example_en:"neck", meaning_vi:"cổ, gáy", example_vi:"cổ", frequency:"high" },
    "gěng": { meaning_zh:"颈椎（口语）", meaning_en:"neck (in certain dialects)", example_zh:"脖颈儿", example_pinyin:"bó gěngr", example_en:"neck (colloquial)", meaning_vi:"cổ (khẩu ngữ, 脖颈儿)", example_vi:"cái cổ (khẩu ngữ)", frequency:"low" },
  }},
  "句": { readings: {
    "jù": { meaning_zh:"句子，语句", meaning_en:"sentence, phrase", example_zh:"句子", example_pinyin:"jù zi", example_en:"sentence", meaning_vi:"câu, câu nói", example_vi:"câu", frequency:"high" },
    "gōu": { meaning_zh:"句读，句芒", meaning_en:"punctuation (archaic)", example_zh:"高句丽", example_pinyin:"Gāo gōu lí", example_en:"Goguryeo (ancient Korean kingdom)", meaning_vi:"chấm câu (cổ, trong 句读)", example_vi:"Cao Câu Ly", frequency:"low" },
  }},
  "据": { readings: {
    "jù": { meaning_zh:"根据，证据", meaning_en:"basis, evidence", example_zh:"根据", example_pinyin:"gēn jù", example_en:"basis", meaning_vi:"căn cứ, bằng chứng", example_vi:"căn cứ", frequency:"high" },
    "jū": { meaning_zh:"拮据，窘迫", meaning_en:"hard up, short of money", example_zh:"拮据", example_pinyin:"jié jū", example_en:"short of money", meaning_vi:"túng thiếu (拮据)", example_vi:"túng quẫn", frequency:"medium" },
  }},
  "倔": { readings: {
    "jué": { meaning_zh:"倔强，固执", meaning_en:"stubborn, tenacious", example_zh:"倔强", example_pinyin:"jué jiàng", example_en:"stubborn", meaning_vi:"ương ngạnh, cố chấp", example_vi:"ương ngạnh", frequency:"high" },
    "juè": { meaning_zh:"倔头倔脑", meaning_en:"blunt and stubborn", example_zh:"倔头倔脑", example_pinyin:"jué tóu jué nǎo", example_en:"bull-headed", meaning_vi:"cộc cằn, bướng bỉnh", example_vi:"cộc cằn ương bướng", frequency:"medium" },
  }},
  "卡": { readings: {
    "kǎ": { meaning_zh:"卡片，信用卡", meaning_en:"card, to get stuck", example_zh:"卡片", example_pinyin:"kǎ piàn", example_en:"card", meaning_vi:"thẻ, kẹt", example_vi:"tấm thẻ", frequency:"high" },
    "qiǎ": { meaning_zh:"卡住，关卡", meaning_en:"checkpoint, to jam", example_zh:"关卡", example_pinyin:"guān qiǎ", example_en:"checkpoint", meaning_vi:"trạm kiểm soát, mắc kẹt", example_vi:"trạm gác", frequency:"high" },
  }},
  "咯": { readings: {
    "kǎ": { meaning_zh:"咯血（咳血）", meaning_en:"to cough up blood", example_zh:"咯血", example_pinyin:"kǎ xiě", example_en:"to cough up blood", meaning_vi:"khạc, ho ra (máu)", example_vi:"ho ra máu", frequency:"medium" },
    "lo": { meaning_zh:"咯（语气助词，同“喽”）", meaning_en:"modal particle (like 喽)", example_zh:"好咯", example_pinyin:"hǎo lo", example_en:"OK then! (particle)", meaning_vi:"trợ từ ngữ khí (như 喽)", example_vi:"được rồi nhé", frequency:"high" },
    "gē": { meaning_zh:"咯吱，咯噔（拟声词）", meaning_en:"creak, clunk (onomatopoeia)", example_zh:"咯吱", example_pinyin:"gē zhī", example_en:"creaking sound", meaning_vi:"kẽo kẹt, lắc cắc (tượng thanh)", example_vi:"tiếng kẽo kẹt", frequency:"medium" },
  }},
  "可": { readings: {
    "kě": { meaning_zh:"可以，可能", meaning_en:"can, may; to be able to", example_zh:"可以", example_pinyin:"kě yǐ", example_en:"can, may", meaning_vi:"có thể, được", example_vi:"có thể", frequency:"high" },
    "kè": { meaning_zh:"可汗（古代北方少数民族君主称号）", meaning_en:"Khan (title of nomadic ruler, in 可汗)", example_zh:"可汗", example_pinyin:"kè hán", example_en:"Khan (ruler title)", meaning_vi:"Khắc (trong 可汗 — vua du mục)", example_vi:"Khả Hãn", frequency:"low" },
  }},
  "扛": { readings: {
    "káng": { meaning_zh:"扛起，肩扛", meaning_en:"to carry on shoulder", example_zh:"扛起", example_pinyin:"káng qǐ", example_en:"to shoulder", meaning_vi:"vác (trên vai)", example_vi:"vác lên vai", frequency:"high" },
    "gāng": { meaning_zh:"力能扛鼎", meaning_en:"to lift a tripod (idiom)", example_zh:"扛鼎", example_pinyin:"gāng dǐng", example_en:"to lift a cauldron", meaning_vi:"nâng, giơ (vật nặng)", example_vi:"nâng đỉnh", frequency:"low" },
  }},
  "溃": { readings: {
    "kuì": { meaning_zh:"溃败，溃烂", meaning_en:"to collapse, to fester", example_zh:"溃败", example_pinyin:"kuì bài", example_en:"to be defeated", meaning_vi:"thua tan tác; vỡ loét", example_vi:"thua tan tác", frequency:"high" },
    "huì": { meaning_zh:"溃（水名）", meaning_en:"Hui (river name)", example_zh:"溃脓", example_pinyin:"huì nóng", example_en:"to fester (of a sore)", meaning_vi:"vỡ mủ, mưng mủ", example_vi:"vỡ mủ", frequency:"low" },
  }},
  "拉": { readings: {
    "lā": { meaning_zh:"拉开，拉住", meaning_en:"to pull, to drag", example_zh:"拉开", example_pinyin:"lā kāi", example_en:"to pull open", meaning_vi:"kéo, lôi", example_vi:"kéo ra", frequency:"high" },
    "lá": { meaning_zh:"拉口子，划破", meaning_en:"to cut, to slash (colloq.)", example_zh:"拉口子", example_pinyin:"lá kǒu zi", example_en:"to make a cut", meaning_vi:"rạch, cắt (khẩu ngữ)", example_vi:"rạch một đường", frequency:"medium" },
  }},
  "烙": { readings: {
    "lào": { meaning_zh:"烙印，烙饼", meaning_en:"brand, to bake on griddle", example_zh:"烙印", example_pinyin:"lào yìn", example_en:"brand mark", meaning_vi:"hằn dấu; nướng (bánh)", example_vi:"dấu ấn (in sâu)", frequency:"high" },
    "luò": { meaning_zh:"炮烙（酷刑）", meaning_en:"burning torture (archaic)", example_zh:"炮烙", example_pinyin:"páo luò", example_en:"burning punishment", meaning_vi:"bào lạc (cực hình cổ)", example_vi:"cực hình bào lạc", frequency:"low" },
  }},
  "勒": { readings: {
    "lè": { meaning_zh:"勒令，勒索", meaning_en:"to compel, to extort", example_zh:"勒索", example_pinyin:"lè suǒ", example_en:"to extort", meaning_vi:"ra lệnh; tống tiền", example_vi:"tống tiền", frequency:"high" },
    "lēi": { meaning_zh:"勒紧，捆绑", meaning_en:"to tie tight, to strap", example_zh:"勒紧", example_pinyin:"lēi jǐn", example_en:"to tighten a strap", meaning_vi:"siết, thắt chặt", example_vi:"siết chặt", frequency:"medium" },
  }},
  "棱": { readings: {
    "léng": { meaning_zh:"棱角，棱形", meaning_en:"edge, corner, ridge", example_zh:"棱角", example_pinyin:"léng jiǎo", example_en:"edges and corners", meaning_vi:"cạnh, góc cạnh", example_vi:"góc cạnh", frequency:"high" },
    "lēng": { meaning_zh:"棱（方言）", meaning_en:"dialect variant", example_zh:"棱子", example_pinyin:"lèng zi", example_en:"edge (dialect)", meaning_vi:"cạnh (phương ngữ)", example_vi:"cạnh (khẩu ngữ)", frequency:"low" },
    "líng": { meaning_zh:"棱（古地名）", meaning_en:"archaic place name", example_zh:"穆棱", example_pinyin:"Mù líng", example_en:"Muling (city in Heilongjiang)", meaning_vi:"Mục Lăng (địa danh, Hắc Long Giang)", example_vi:"thành phố Mục Lăng", frequency:"low" },
  }},
  "撩": { readings: {
    "liāo": { meaning_zh:"撩起，撩开", meaning_en:"to lift up, to tease", example_zh:"撩起", example_pinyin:"liāo qǐ", example_en:"to lift up", meaning_vi:"vén, hất lên", example_vi:"vén lên", frequency:"high" },
    "liáo": { meaning_zh:"撩拨，撩人", meaning_en:"to provoke, to flirt", example_zh:"撩拨", example_pinyin:"liáo bō", example_en:"to tease", meaning_vi:"trêu chọc, khêu gợi", example_vi:"trêu chọc", frequency:"high" },
  }},
  "淋": { readings: {
    "lín": { meaning_zh:"淋雨，淋浴", meaning_en:"to get rained on, shower", example_zh:"淋雨", example_pinyin:"lín yǔ", example_en:"to get rained on", meaning_vi:"dầm (mưa); dội (nước)", example_vi:"dầm mưa", frequency:"high" },
    "lìn": { meaning_zh:"淋漓，淋病", meaning_en:"dripping, gonorrhea", example_zh:"淋漓", example_pinyin:"lín lí", example_en:"dripping wet", meaning_vi:"đầm đìa; bệnh lậu (淋病)", example_vi:"đầm đìa", frequency:"medium" },
  }},
  "溜": { readings: {
    "liū": { meaning_zh:"溜走，溜冰", meaning_en:"to sneak away, to skate", example_zh:"溜走", example_pinyin:"liū zǒu", example_en:"to sneak off", meaning_vi:"chuồn, lẻn; trượt", example_vi:"lẻn đi", frequency:"high" },
    "liù": { meaning_zh:"一溜儿，成排", meaning_en:"a row of (measure word)", example_zh:"一溜儿", example_pinyin:"yī liùr", example_en:"a row of", meaning_vi:"dãy, hàng (lượng từ)", example_vi:"một dãy", frequency:"medium" },
  }},
  "搂": { readings: {
    "lǒu": { meaning_zh:"搂抱，搂住", meaning_en:"to hug, to embrace", example_zh:"搂抱", example_pinyin:"lǒu bào", example_en:"to hug", meaning_vi:"ôm, ghì", example_vi:"ôm chặt", frequency:"high" },
    "lōu": { meaning_zh:"搂钱，搂取", meaning_en:"to rake in (money)", example_zh:"搂钱", example_pinyin:"lōu qián", example_en:"to rake in money", meaning_vi:"vơ vét; gom", example_vi:"vơ vét tiền", frequency:"medium" },
  }},
  "陆": { readings: {
    "lù": { meaning_zh:"陆地，大陆", meaning_en:"land, continent", example_zh:"大陆", example_pinyin:"dà lù", example_en:"mainland", meaning_vi:"đất liền, đại lục", example_vi:"đại lục", frequency:"high" },
    "liù": { meaning_zh:"陆（数字六的大写）", meaning_en:"six (formal/legal form)", example_zh:"陆万元", example_pinyin:"liù wàn yuán", example_en:"60,000 yuan (formal)", meaning_vi:"lục (chữ đại của số 6)", example_vi:"sáu vạn đồng", frequency:"medium" },
  }},
  "抹": { readings: {
    "mǒ": { meaning_zh:"抹去，涂抹", meaning_en:"to wipe, to spread", example_zh:"抹去", example_pinyin:"mǒ qù", example_en:"to wipe away", meaning_vi:"bôi, xóa; chùi", example_vi:"xóa đi", frequency:"high" },
    "mò": { meaning_zh:"抹墙，粉刷", meaning_en:"to plaster, to coat", example_zh:"抹墙", example_pinyin:"mò qiáng", example_en:"to plaster a wall", meaning_vi:"trát (tường)", example_vi:"trát tường", frequency:"medium" },
    "mā": { meaning_zh:"抹布，擦布", meaning_en:"rag, cleaning cloth", example_zh:"抹布", example_pinyin:"mā bu", example_en:"rag / cloth", meaning_vi:"lau, chùi", example_vi:"giẻ lau", frequency:"high" },
  }},
  "蔓": { readings: {
    "màn": { meaning_zh:"蔓延，蔓草", meaning_en:"to spread, trailing plant", example_zh:"蔓延", example_pinyin:"màn yán", example_en:"to spread", meaning_vi:"lan tràn, bò lan (văn viết)", example_vi:"lan tràn", frequency:"high" },
    "wàn": { meaning_zh:"瓜蔓，藤蔓", meaning_en:"vine, tendril", example_zh:"藤蔓", example_pinyin:"téng wàn", example_en:"vine", meaning_vi:"dây leo (khẩu ngữ)", example_vi:"dây leo", frequency:"medium" },
    "mán": { meaning_zh:"蔓菁（蔬菜）", meaning_en:"turnip", example_zh:"蔓菁", example_pinyin:"mán jing", example_en:"turnip", meaning_vi:"củ cải (蔓菁)", example_vi:"củ cải", frequency:"low" },
  }},
  "闷": { readings: {
    "mēn": { meaning_zh:"闷热，闷住", meaning_en:"stuffy, to cover tightly", example_zh:"闷热", example_pinyin:"mēn rè", example_en:"muggy", meaning_vi:"ngột ngạt, oi bức; đậy kín", example_vi:"oi bức", frequency:"high" },
    "mèn": { meaning_zh:"烦闷，郁闷", meaning_en:"bored, depressed", example_zh:"郁闷", example_pinyin:"yù mèn", example_en:"depressed", meaning_vi:"buồn bực, u uất", example_vi:"u uất", frequency:"high" },
  }},
  "泥": { readings: {
    "ní": { meaning_zh:"泥土，泥巴", meaning_en:"mud, clay", example_zh:"泥土", example_pinyin:"ní tǔ", example_en:"soil / mud", meaning_vi:"bùn, đất sét", example_vi:"đất bùn", frequency:"high" },
    "nì": { meaning_zh:"拘泥，泥古", meaning_en:"to be rigid, to cling to", example_zh:"拘泥", example_pinyin:"jū nì", example_en:"to be rigid", meaning_vi:"câu nệ, cố chấp (拘泥)", example_vi:"câu nệ", frequency:"medium" },
  }},
  "弄": { readings: {
    "nòng": { meaning_zh:"弄清，摆弄", meaning_en:"to handle, to figure out", example_zh:"弄清", example_pinyin:"nòng qīng", example_en:"to clarify", meaning_vi:"làm, sửa, đùa", example_vi:"làm rõ", frequency:"high" },
    "lòng": { meaning_zh:"里弄，弄堂", meaning_en:"alley, lane", example_zh:"弄堂", example_pinyin:"lòng táng", example_en:"alley (Shanghai)", meaning_vi:"ngõ, hẻm (phương ngữ)", example_vi:"ngõ hẻm", frequency:"medium" },
  }},
  "胖": { readings: {
    "pàng": { meaning_zh:"胖子，肥胖", meaning_en:"fat, overweight", example_zh:"胖子", example_pinyin:"pàng zi", example_en:"fat person", meaning_vi:"béo, mập", example_vi:"người béo", frequency:"high" },
    "pán": { meaning_zh:"心宽体胖", meaning_en:"content and plump (idiom)", example_zh:"心宽体胖", example_pinyin:"xīn kuān tǐ pán", example_en:"carefree and plump", meaning_vi:"thư thái, khỏe khoắn (心宽体胖)", example_vi:"lòng thanh thản người mập ra", frequency:"low" },
  }},
  "刨": { readings: {
    "páo": { meaning_zh:"刨坑，刨土", meaning_en:"to dig, to scrape", example_zh:"刨坑", example_pinyin:"páo kēng", example_en:"to dig a hole", meaning_vi:"đào, bới (đất)", example_vi:"đào hố", frequency:"medium" },
    "bào": { meaning_zh:"刨子，刨木", meaning_en:"plane (tool), to plane", example_zh:"刨子", example_pinyin:"bào zi", example_en:"woodworking plane", meaning_vi:"cái bào; bào (gỗ)", example_vi:"cái bào gỗ", frequency:"medium" },
  }},
  "片": { readings: {
    "piàn": { meaning_zh:"片子，照片", meaning_en:"piece, photo", example_zh:"照片", example_pinyin:"zhào piàn", example_en:"photo", meaning_vi:"miếng, mảnh, ảnh", example_vi:"tấm ảnh", frequency:"high" },
    "piān": { meaning_zh:"片（量词）", meaning_en:"piece/slice (measure word)", example_zh:"片儿", example_pinyin:"piānr", example_en:"thin piece (colloquial)", meaning_vi:"mảnh (lượng từ)", example_vi:"một mảnh đất", frequency:"medium" },
  }},
  "撇": { readings: {
    "piē": { meaning_zh:"撇开，撇嘴", meaning_en:"to cast aside, to curl lip", example_zh:"撇嘴", example_pinyin:"piě zuǐ", example_en:"to curl one's lip", meaning_vi:"vứt bỏ; gạt ra", example_vi:"gạt sang một bên", frequency:"medium" },
    "piě": { meaning_zh:"撇（笔画）", meaning_en:"left-falling stroke", example_zh:"一撇", example_pinyin:"yī piě", example_en:"a left-falling stroke", meaning_vi:"bĩu (môi); nét phẩy", example_vi:"bĩu môi", frequency:"medium" },
  }},
  "迫": { readings: {
    "pò": { meaning_zh:"迫切，被迫", meaning_en:"urgent, to be forced", example_zh:"被迫", example_pinyin:"bèi pò", example_en:"to be forced", meaning_vi:"cấp bách; bị ép buộc", example_vi:"bị ép buộc", frequency:"high" },
    "pǎi": { meaning_zh:"迫击炮", meaning_en:"mortar (in 迫击炮)", example_zh:"迫击炮", example_pinyin:"pǎi jī pào", example_en:"mortar cannon", meaning_vi:"súng cối (trong 迫击炮)", example_vi:"súng cối", frequency:"medium" },
  }},
  "栖": { readings: {
    "qī": { meaning_zh:"栖息，两栖", meaning_en:"to roost, amphibious", example_zh:"栖息", example_pinyin:"qī xī", example_en:"to roost", meaning_vi:"đậu, trú (chim); cư ngụ", example_vi:"đậu (cây)", frequency:"medium" },
    "xī": { meaning_zh:"栖（同息）", meaning_en:"variant of 息 (rest)", example_zh:"栖止", example_pinyin:"xī zhǐ", example_en:"to rest/perch", meaning_vi:"nghỉ, dừng (栖栖, văn cổ)", example_vi:"dừng nghỉ", frequency:"low" },
  }},
  "券": { readings: {
    "quàn": { meaning_zh:"票券，优惠券", meaning_en:"ticket, coupon", example_zh:"优惠券", example_pinyin:"yōu huì quàn", example_en:"coupon", meaning_vi:"phiếu, vé, chứng từ", example_vi:"phiếu giảm giá", frequency:"high" },
    "xuàn": { meaning_zh:"拱券，券洞", meaning_en:"arch, vault (architecture)", example_zh:"拱券", example_pinyin:"gǒng xuàn", example_en:"arch", meaning_vi:"vòm cuốn (kiến trúc)", example_vi:"vòm cuốn", frequency:"low" },
  }},
  "色": { readings: {
    "sè": { meaning_zh:"颜色，色彩", meaning_en:"color, hue", example_zh:"颜色", example_pinyin:"yán sè", example_en:"color", meaning_vi:"màu sắc", example_vi:"màu sắc", frequency:"high" },
    "shǎi": { meaning_zh:"掉色，褪色", meaning_en:"to fade (colloq.)", example_zh:"掉色", example_pinyin:"diào shǎi", example_en:"to fade", meaning_vi:"phai màu (khẩu ngữ)", example_vi:"phai màu", frequency:"medium" },
  }},
  "厦": { readings: {
    "shà": { meaning_zh:"高楼大厦", meaning_en:"tall building", example_zh:"大厦", example_pinyin:"dà shà", example_en:"mansion / tower", meaning_vi:"tòa nhà cao tầng", example_vi:"tòa nhà lớn", frequency:"high" },
    "xià": { meaning_zh:"厦门", meaning_en:"Xiamen (city name)", example_zh:"厦门", example_pinyin:"Xià mén", example_en:"Xiamen", meaning_vi:"Hạ Môn (địa danh)", example_vi:"Hạ Môn", frequency:"high" },
  }},
  "遂": { readings: {
    "suì": { meaning_zh:"遂愿，顺遂", meaning_en:"to fulfill, to succeed", example_zh:"遂愿", example_pinyin:"suì yuàn", example_en:"to fulfill a wish", meaning_vi:"toại nguyện; thuận lợi", example_vi:"toại nguyện", frequency:"medium" },
    "suí": { meaning_zh:"半身不遂", meaning_en:"paralysis (in 半身不遂)", example_zh:"半身不遂", example_pinyin:"bàn shēn bù suí", example_en:"hemiplegia", meaning_vi:"bán thân bất toại (liệt nửa người)", example_vi:"liệt nửa người", frequency:"low" },
  }},
  "同": { readings: {
    "tóng": { meaning_zh:"相同，同学", meaning_en:"same, classmate", example_zh:"同学", example_pinyin:"tóng xué", example_en:"classmate", meaning_vi:"cùng, giống", example_vi:"bạn học", frequency:"high" },
    "tòng": { meaning_zh:"胡同，巷道", meaning_en:"hutong, alley", example_zh:"胡同", example_pinyin:"hú tòng", example_en:"hutong", meaning_vi:"ngõ, hẻm (trong 胡同)", example_vi:"ngõ hẻm", frequency:"medium" },
  }},
  "拓": { readings: {
    "tuò": { meaning_zh:"开拓，拓展", meaning_en:"to pioneer, to expand", example_zh:"开拓", example_pinyin:"kāi tuò", example_en:"to pioneer", meaning_vi:"khai thác, mở rộng", example_vi:"khai phá", frequency:"high" },
    "tà": { meaning_zh:"拓印，拓片", meaning_en:"rubbing, stone-print", example_zh:"拓印", example_pinyin:"tà yìn", example_en:"stone rubbing", meaning_vi:"rập, in (bia đá)", example_vi:"rập bia", frequency:"medium" },
  }},
  "瓦": { readings: {
    "wǎ": { meaning_zh:"瓦片，砖瓦", meaning_en:"tile, roof tile", example_zh:"瓦片", example_pinyin:"wǎ piàn", example_en:"roof tile", meaning_vi:"ngói", example_vi:"viên ngói", frequency:"high" },
    "wà": { meaning_zh:"瓦刀（瓦工）", meaning_en:"trowel (masonry tool)", example_zh:"瓦刀", example_pinyin:"wǎ dāo", example_en:"trowel", meaning_vi:"lợp ngói; bay thợ nề (瓦刀)", example_vi:"bay thợ nề", frequency:"low" },
  }},
  "委": { readings: {
    "wěi": { meaning_zh:"委托，委员", meaning_en:"to entrust, committee", example_zh:"委托", example_pinyin:"wěi tuō", example_en:"to entrust", meaning_vi:"ủy thác, ủy ban; ủy viên", example_vi:"ủy thác", frequency:"high" },
    "wēi": { meaning_zh:"委蛇，敷衍", meaning_en:"to act perfunctorily", example_zh:"虚与委蛇", example_pinyin:"xū yǔ wēi yí", example_en:"to go through the motions", meaning_vi:"qua loa, chiếu lệ (委蛇)", example_vi:"làm cho qua chuyện", frequency:"low" },
  }},
  "肖": { readings: {
    "xiāo": { meaning_zh:"不肖，无肖", meaning_en:"unworthy, unlike parent", example_zh:"不肖", example_pinyin:"bù xiào", example_en:"unworthy", meaning_vi:"bất tiếu (不肖, không ra gì); họ Tiêu", example_vi:"bất tài kém cỏi", frequency:"low" },
    "xiào": { meaning_zh:"肖像，相肖", meaning_en:"portrait, to resemble", example_zh:"肖像", example_pinyin:"xiào xiàng", example_en:"portrait", meaning_vi:"giống; chân dung", example_vi:"chân dung", frequency:"medium" },
  }},
  "邪": { readings: {
    "xié": { meaning_zh:"邪恶，邪气", meaning_en:"evil, wicked", example_zh:"邪恶", example_pinyin:"xié è", example_en:"evil", meaning_vi:"tà ác, gian tà", example_vi:"tà ác", frequency:"high" },
    "yá": { meaning_zh:"莫邪（古剑）", meaning_en:"Moye (famous sword)", example_zh:"莫邪", example_pinyin:"Mò yá", example_en:"Moye (legendary sword)", meaning_vi:"Mạc Da (tên kiếm cổ)", example_vi:"kiếm Mạc Da", frequency:"low" },
  }},
  "压": { readings: {
    "yā": { meaning_zh:"压力，压制", meaning_en:"pressure, to suppress", example_zh:"压力", example_pinyin:"yā lì", example_en:"pressure", meaning_vi:"áp lực, đè nén", example_vi:"áp lực", frequency:"high" },
    "yà": { meaning_zh:"压根儿", meaning_en:"at all, simply (colloq.)", example_zh:"压根儿", example_pinyin:"yà gēn r", example_en:"not at all", meaning_vi:"hoàn toàn (压根儿, khẩu ngữ)", example_vi:"vốn dĩ", frequency:"medium" },
  }},
  "燕": { readings: {
    "yàn": { meaning_zh:"燕子，家燕", meaning_en:"swallow (bird)", example_zh:"燕子", example_pinyin:"yàn zi", example_en:"swallow (bird)", meaning_vi:"chim én", example_vi:"chim én", frequency:"high" },
    "yān": { meaning_zh:"燕国，燕京", meaning_en:"Yan state, old name for Beijing", example_zh:"燕京", example_pinyin:"Yān jīng", example_en:"Yanjing (Beijing)", meaning_vi:"nước Yên; Yên Kinh (Bắc Kinh)", example_vi:"Yên Kinh", frequency:"medium" },
  }},
  "耶": { readings: {
    "yē": { meaning_zh:"耶稣，语气词", meaning_en:"Jesus; exclamation particle", example_zh:"耶稣", example_pinyin:"Yē sū", example_en:"Jesus", meaning_vi:"Giê-su (耶稣); trợ từ", example_vi:"Giê-su", frequency:"high" },
    "yé": { meaning_zh:"耶耶（方言）", meaning_en:"dad (dialect)", example_zh:"耶耶", example_pinyin:"yé ye", example_en:"dad (dialect)", meaning_vi:"cha, bố (phương ngữ)", example_vi:"bố (phương ngữ)", frequency:"low" },
  }},
  "叶": { readings: {
    "yè": { meaning_zh:"叶子，树叶", meaning_en:"leaf", example_zh:"树叶", example_pinyin:"shù yè", example_en:"leaf", meaning_vi:"lá, lá cây", example_vi:"lá cây", frequency:"high" },
    "xié": { meaning_zh:"叶韵，叶音", meaning_en:"rhyme reading (classical)", example_zh:"叶韵", example_pinyin:"xié yùn", example_en:"rhyme reading", meaning_vi:"gieo vần, hợp vần (văn cổ)", example_vi:"gieo vần", frequency:"low" },
  }},
  "遗": { readings: {
    "yí": { meaning_zh:"遗留，遗产", meaning_en:"to leave behind, heritage", example_zh:"遗产", example_pinyin:"yí chǎn", example_en:"heritage", meaning_vi:"để lại, di sản", example_vi:"di sản", frequency:"high" },
    "wèi": { meaning_zh:"遗赠，馈赠", meaning_en:"to give as gift (literary)", example_zh:"遗赠", example_pinyin:"wèi zèng", example_en:"to bequeath, to bestow", meaning_vi:"tặng, biếu (văn viết)", example_vi:"di tặng", frequency:"low" },
  }},
  "佣": { readings: {
    "yōng": { meaning_zh:"雇佣，佣人", meaning_en:"to hire, servant", example_zh:"佣人", example_pinyin:"yōng rén", example_en:"servant", meaning_vi:"thuê mướn; người hầu", example_vi:"người làm thuê", frequency:"high" },
    "yòng": { meaning_zh:"佣金，回扣", meaning_en:"commission, brokerage", example_zh:"佣金", example_pinyin:"yòng jīn", example_en:"commission", meaning_vi:"tiền hoa hồng", example_vi:"tiền hoa hồng", frequency:"medium" },
  }},
  "有": { readings: {
    "yǒu": { meaning_zh:"有的，拥有", meaning_en:"to have, there is", example_zh:"有用", example_pinyin:"yǒu yòng", example_en:"useful", meaning_vi:"có", example_vi:"hữu ích", frequency:"high" },
    "yòu": { meaning_zh:"又（古通）", meaning_en:"archaic variant of 又", example_zh:"有若", example_pinyin:"yòu ruò", example_en:"archaic usage", meaning_vi:"lại (cổ, thông 又)", example_vi:"Hữu Nhược (tên người)", frequency:"low" },
  }},
  "予": { readings: {
    "yǔ": { meaning_zh:"给予，赠予", meaning_en:"to give, to bestow", example_zh:"给予", example_pinyin:"jǐ yǔ", example_en:"to give", meaning_vi:"cho, ban cho", example_vi:"cho phép", frequency:"high" },
    "yú": { meaning_zh:"我（文言）", meaning_en:"I/me (classical Chinese)", example_zh:"予以", example_pinyin:"yǔ yǐ", example_en:"to give / grant", meaning_vi:"ta, tôi (văn ngôn)", example_vi:"ta (cổ văn)", frequency:"medium" },
  }},
  "语": { readings: {
    "yǔ": { meaning_zh:"语言，汉语", meaning_en:"language, speech", example_zh:"语言", example_pinyin:"yǔ yán", example_en:"language", meaning_vi:"ngôn ngữ, lời nói", example_vi:"ngôn ngữ", frequency:"high" },
    "yù": { meaning_zh:"不语，默语", meaning_en:"to speak to (literary)", example_zh:"默默不语", example_pinyin:"mò mò bù yù", example_en:"silent", meaning_vi:"nói cho biết, bảo", example_vi:"lặng thinh", frequency:"low" },
  }},
  "晕": { readings: {
    "yūn": { meaning_zh:"头晕，晕倒", meaning_en:"dizzy, to faint", example_zh:"头晕", example_pinyin:"tóu yūn", example_en:"dizziness", meaning_vi:"choáng, ngất", example_vi:"chóng mặt", frequency:"high" },
    "yùn": { meaning_zh:"光晕，月晕", meaning_en:"halo, aura", example_zh:"月晕", example_pinyin:"yuè yùn", example_en:"moon halo", meaning_vi:"quầng (sáng); say (xe)", example_vi:"quầng trăng", frequency:"medium" },
  }},
  "脏": { readings: {
    "zāng": { meaning_zh:"脏乱，污脏", meaning_en:"dirty, filthy", example_zh:"脏乱", example_pinyin:"zāng luàn", example_en:"dirty and messy", meaning_vi:"bẩn, dơ", example_vi:"bẩn thỉu", frequency:"high" },
    "zàng": { meaning_zh:"五脏，内脏", meaning_en:"internal organs", example_zh:"内脏", example_pinyin:"nèi zàng", example_en:"internal organs", meaning_vi:"nội tạng, phủ tạng", example_vi:"nội tạng", frequency:"high" },
  }},
  "择": { readings: {
    "zé": { meaning_zh:"选择，择优", meaning_en:"to choose, to select", example_zh:"选择", example_pinyin:"xuǎn zé", example_en:"to choose", meaning_vi:"lựa chọn", example_vi:"lựa chọn", frequency:"high" },
    "zhái": { meaning_zh:"择菜，摘拣", meaning_en:"to pick, to sort (food)", example_zh:"择菜", example_pinyin:"zhái cài", example_en:"to pick vegetables", meaning_vi:"nhặt, lựa (rau)", example_vi:"nhặt rau", frequency:"medium" },
  }},
  "正": { readings: {
    "zhèng": { meaning_zh:"正确，正式", meaning_en:"correct, formal", example_zh:"正确", example_pinyin:"zhèng què", example_en:"correct", meaning_vi:"đúng, chính, thẳng", example_vi:"chính xác", frequency:"high" },
    "zhēng": { meaning_zh:"正月，正旦", meaning_en:"first lunar month", example_zh:"正月", example_pinyin:"zhēng yuè", example_en:"first lunar month", meaning_vi:"tháng giêng (trong 正月)", example_vi:"tháng giêng", frequency:"medium" },
  }},
  "轴": { readings: {
    "zhóu": { meaning_zh:"轴心，车轴", meaning_en:"axis, axle", example_zh:"轴心", example_pinyin:"zhóu xīn", example_en:"axis", meaning_vi:"trục, trục xe", example_vi:"trục tâm", frequency:"high" },
    "zhòu": { meaning_zh:"画轴，装裱", meaning_en:"scroll, mounted painting", example_zh:"画轴", example_pinyin:"huà zhóu", example_en:"scroll", meaning_vi:"trục tranh (画轴); màn cuối", example_vi:"trục cuộn tranh", frequency:"medium" },
  }},
  "爪": { readings: {
    "zhǎo": { meaning_zh:"爪子，指爪", meaning_en:"claw, talon", example_zh:"鹰爪", example_pinyin:"yīng zhǎo", example_en:"eagle's talon", meaning_vi:"vuốt, móng (văn viết)", example_vi:"vuốt đại bàng", frequency:"high" },
    "zhuǎ": { meaning_zh:"爪（口语）", meaning_en:"claw (colloquial)", example_zh:"猫爪", example_pinyin:"māo zhuǎ", example_en:"cat's paw", meaning_vi:"móng (khẩu ngữ)", example_vi:"vuốt mèo", frequency:"high" },
  }},
  "转": { readings: {
    "zhuǎn": { meaning_zh:"转变，旋转", meaning_en:"to turn, to change", example_zh:"转变", example_pinyin:"zhuǎn biàn", example_en:"to transform", meaning_vi:"chuyển biến, xoay chuyển", example_vi:"chuyển biến", frequency:"high" },
    "zhuàn": { meaning_zh:"转圈，打转", meaning_en:"to spin, to revolve", example_zh:"打转", example_pinyin:"dǎ zhuàn", example_en:"to spin around", meaning_vi:"xoay vòng, quay tròn", example_vi:"xoay vòng", frequency:"high" },
  }},
  "拽": { readings: {
    "zhuài": { meaning_zh:"拽住，拖拽", meaning_en:"to drag, to pull", example_zh:"拖拽", example_pinyin:"tuō zhuài", example_en:"to drag", meaning_vi:"kéo, lôi", example_vi:"lôi kéo", frequency:"high" },
    "zhuāi": { meaning_zh:"拽开（方言）", meaning_en:"to fling (dialect)", example_zh:"拽出去", example_pinyin:"zhuāi chū qù", example_en:"to fling out", meaning_vi:"ném, quăng (phương ngữ)", example_vi:"quăng ra ngoài", frequency:"medium" },
    "yè": { meaning_zh:"拽（同\"曳\"，拖拉）", meaning_en:"to drag (variant of 曳)", example_zh:"弃甲拽兵", example_pinyin:"qì jiǎ yè bīng", example_en:"to flee in defeat", meaning_vi:"kéo lê (như chữ 曳)", example_vi:"vứt giáp kéo binh khí", frequency:"low" },
  }},
  "作": { readings: {
    "zuò": { meaning_zh:"工作，制作", meaning_en:"to work, to make", example_zh:"工作", example_pinyin:"gōng zuò", example_en:"work", meaning_vi:"làm, sáng tác", example_vi:"công việc", frequency:"high" },
    "zuō": { meaning_zh:"作坊，小作", meaning_en:"workshop (colloq.)", example_zh:"作坊", example_pinyin:"zuō fang", example_en:"workshop", meaning_vi:"xưởng, lò (trong 作坊)", example_vi:"xưởng thợ", frequency:"medium" },
  }},
  "阿": { readings: {
    "ā": { meaning_zh:"阿姨，阿哥（称呼前缀）", meaning_en:"prefix for titles/names (e.g. auntie)", example_zh:"阿姨", example_pinyin:"ā yí", example_en:"auntie", meaning_vi:"tiền tố xưng hô (như cô, anh)", example_vi:"dì (a di)", frequency:"high" },
    "ē": { meaning_zh:"阿谀，奉承", meaning_en:"to flatter, to fawn", example_zh:"阿胶", example_pinyin:"ē jiāo", example_en:"donkey-hide gelatin (TCM)", meaning_vi:"nịnh nọt, a dua", example_vi:"a giao (thuốc bắc)", frequency:"low" },
  }},
  "艾": { readings: {
    "ài": { meaning_zh:"方兴未艾，停止", meaning_en:"to stop, not yet over", example_zh:"方兴未艾", example_pinyin:"fāng xīng wèi ài", example_en:"still going strong", meaning_vi:"ngải cứu; ngừng (方兴未艾)", example_vi:"đang lúc hưng thịnh", frequency:"medium" },
    "yì": { meaning_zh:"自怨自艾，悔恨", meaning_en:"to repent, to reproach oneself", example_zh:"自怨自艾", example_pinyin:"zì yuàn zì yì", example_en:"to blame oneself", meaning_vi:"hối hận, sửa lỗi (自怨自艾)", example_vi:"tự trách hối hận", frequency:"low" },
  }},
  "熬": { readings: {
    "áo": { meaning_zh:"熬夜，坚持，熬粥", meaning_en:"to endure; to stay up; to simmer", example_zh:"熬夜", example_pinyin:"áo yè", example_en:"to stay up late", meaning_vi:"thức khuya; ninh, hầm; chịu đựng", example_vi:"thức khuya", frequency:"high" },
    "āo": { meaning_zh:"熬（方言，煮炖）", meaning_en:"to boil/stew (dialectal)", example_zh:"熬白菜", example_pinyin:"āo bái cài", example_en:"stewed cabbage", meaning_vi:"ninh, hầm rau (phương ngữ)", example_vi:"hầm cải thảo", frequency:"low" },
  }},
  "吧": { readings: {
    "bā": { meaning_zh:"酒吧，吧台", meaning_en:"bar (establishment)", example_zh:"酒吧", example_pinyin:"jiǔ bā", example_en:"bar", meaning_vi:"tiếng bốp, lốp (tượng thanh)", example_vi:"quán bar", frequency:"high" },
    "ba": { meaning_zh:"语气助词", meaning_en:"modal particle (suggestion/supposition)", example_zh:"走吧", example_pinyin:"zǒu ba", example_en:"let's go", meaning_vi:"trợ từ ngữ khí (cuối câu)", example_vi:"đi thôi", frequency:"high" },
  }},
  "把": { readings: {
    "bǎ": { meaning_zh:"把握，抓住", meaning_en:"to hold, to grasp", example_zh:"把握", example_pinyin:"bǎ wò", example_en:"to grasp", meaning_vi:"cầm, nắm, cái (lượng từ)", example_vi:"nắm chắc", frequency:"high" },
    "bà": { meaning_zh:"刀把儿，柄", meaning_en:"handle, grip", example_zh:"刀把", example_pinyin:"dāo bà", example_en:"knife handle", meaning_vi:"cán, tay nắm", example_vi:"cán dao", frequency:"high" },
    "ba": { meaning_zh:"语气助词", meaning_en:"modal particle (informal)", example_zh:"把", example_pinyin:"ba", example_en:"modal particle", meaning_vi:"trợ từ ngữ khí (cuối câu)", example_vi:"trợ từ ngữ khí", frequency:"low" },
  }},
  "耙": { readings: {
    "bà": { meaning_zh:"耙地，翻土", meaning_en:"to rake (soil)", example_zh:"钉耙", example_pinyin:"dīng bà", example_en:"rake (tool)", meaning_vi:"cái bừa; bừa đất", example_vi:"cái cào (đinh ba)", frequency:"medium" },
    "pá": { meaning_zh:"耙子，农具", meaning_en:"rake (farm tool)", example_zh:"耙子", example_pinyin:"pá zi", example_en:"rake", meaning_vi:"cái cào (耙子)", example_vi:"cái cào", frequency:"medium" },
  }},
  "蚌": { readings: {
    "bàng": { meaning_zh:"河蚌，贝类", meaning_en:"freshwater mussel", example_zh:"河蚌", example_pinyin:"hé bàng", example_en:"river mussel", meaning_vi:"con trai (sò nước ngọt)", example_vi:"trai sông", frequency:"medium" },
    "bèng": { meaning_zh:"蚌埠（地名）", meaning_en:"Bengbu (city name)", example_zh:"蚌埠", example_pinyin:"Bèng bù", example_en:"Bengbu city", meaning_vi:"Bạng Phụ (địa danh)", example_vi:"Bạng Phụ", frequency:"medium" },
  }},
  "磅": { readings: {
    "bàng": { meaning_zh:"磅秤，重量", meaning_en:"pound (weight); scale", example_zh:"磅秤", example_pinyin:"bàng chèng", example_en:"weighing scale", meaning_vi:"cân (bàn); pound (đơn vị)", example_vi:"cân bàn", frequency:"high" },
    "páng": { meaning_zh:"磅礴，气势", meaning_en:"majestic, overwhelming", example_zh:"磅礴", example_pinyin:"páng bó", example_en:"majestic", meaning_vi:"bàng bạc, hùng vĩ (磅礴)", example_vi:"hùng vĩ", frequency:"medium" },
  }},
  "绷": { readings: {
    "bēng": { meaning_zh:"绷带，紧绷", meaning_en:"bandage; to stretch tight", example_zh:"绷带", example_pinyin:"bēng dài", example_en:"bandage", meaning_vi:"băng; căng chặt", example_vi:"băng gạc", frequency:"high" },
    "běng": { meaning_zh:"绷着个脸", meaning_en:"to keep a straight face", example_zh:"绷着脸", example_pinyin:"běng zhe liǎn", example_en:"straight face", meaning_vi:"sa sầm (mặt)", example_vi:"sa sầm mặt", frequency:"medium" },
    "bèng": { meaning_zh:"绷（方言跑）", meaning_en:"to run away (dialect)", example_zh:"绷了", example_pinyin:"bèng le", example_en:"ran away", meaning_vi:"chạy biến (phương ngữ)", example_vi:"chạy mất", frequency:"low" },
  }},
  "臂": { readings: {
    "bì": { meaning_zh:"臂膀，手臂", meaning_en:"arm", example_zh:"臂膀", example_pinyin:"bì bǎng", example_en:"arm", meaning_vi:"cánh tay; bắp tay", example_vi:"cánh tay", frequency:"high" },
    "bei": { meaning_zh:"胳臂（口语）", meaning_en:"arm (colloquial)", example_zh:"胳臂", example_pinyin:"gē bei", example_en:"arm (colloq.)", meaning_vi:"cánh tay (khẩu ngữ, 胳臂)", example_vi:"cánh tay (khẩu ngữ)", frequency:"medium" },
  }},
  "别": { readings: {
    "bié": { meaning_zh:"分别，区别", meaning_en:"to part, difference", example_zh:"分别", example_pinyin:"fēn bié", example_en:"to part", meaning_vi:"đừng, khác, chia ly", example_vi:"chia tay", frequency:"high" },
    "biè": { meaning_zh:"别扭，扭别", meaning_en:"awkward, stiff", example_zh:"别扭", example_pinyin:"biè niu", example_en:"awkward", meaning_vi:"ương ngạnh, khó chiều", example_vi:"ương ngạnh", frequency:"medium" },
  }},
  "瘪": { readings: {
    "biě": { meaning_zh:"干瘪，瘪了", meaning_en:"shriveled, deflated", example_zh:"干瘪", example_pinyin:"gān biě", example_en:"shriveled", meaning_vi:"lép, teo, xẹp", example_vi:"khô lép", frequency:"medium" },
    "biē": { meaning_zh:"瘪三（方言）", meaning_en:"bum, vagrant (dialect)", example_zh:"瘪三", example_pinyin:"biē sān", example_en:"bum (dialect)", meaning_vi:"kẻ bần cùng (瘪三, phương ngữ)", example_vi:"kẻ lang thang", frequency:"low" },
  }},
  "并": { readings: {
    "bìng": { meaning_zh:"合并，并排", meaning_en:"to merge, side by side", example_zh:"合并", example_pinyin:"hé bìng", example_en:"to merge", meaning_vi:"hợp nhất, song song", example_vi:"sáp nhập", frequency:"high" },
    "bīng": { meaning_zh:"太原市别称", meaning_en:"old name for Taiyuan city", example_zh:"并州", example_pinyin:"Bīng zhōu", example_en:"Bingzhou", meaning_vi:"tên gọi cũ của Thái Nguyên", example_vi:"Tinh Châu", frequency:"low" },
  }},
  "伯": { readings: {
    "bó": { meaning_zh:"伯父，伯伯", meaning_en:"father's elder brother, uncle", example_zh:"伯父", example_pinyin:"bó fù", example_en:"uncle", meaning_vi:"bác (anh của cha)", example_vi:"bác trai", frequency:"high" },
    "bǎi": { meaning_zh:"大伯子", meaning_en:"husband's elder brother", example_zh:"大伯子", example_pinyin:"dà bǎi zi", example_en:"husband's elder brother", meaning_vi:"anh chồng (大伯子)", example_vi:"anh chồng", frequency:"medium" },
  }},
  "侧": { readings: {
    "cè": { meaning_zh:"侧面，旁侧", meaning_en:"side, flank", example_zh:"侧面", example_pinyin:"cè miàn", example_en:"side", meaning_vi:"bên, mặt bên", example_vi:"mặt bên", frequency:"high" },
    "zhāi": { meaning_zh:"侧歪，倾斜", meaning_en:"tilted, slanted", example_zh:"侧歪", example_pinyin:"zhāi wāi", example_en:"tilted", meaning_vi:"nghiêng, lệch (侧歪)", example_vi:"nghiêng vẹo", frequency:"low" },
  }},
  "叉": { readings: {
    "chā": { meaning_zh:"叉子，交叉", meaning_en:"fork; to cross", example_zh:"叉子", example_pinyin:"chā zi", example_en:"fork", meaning_vi:"cái nĩa; chéo nhau", example_vi:"cái nĩa", frequency:"high" },
    "chá": { meaning_zh:"叉住，卡住", meaning_en:"to block, to jam", example_zh:"叉住", example_pinyin:"chā zhù", example_en:"to jam", meaning_vi:"chặn, kẹt lại", example_vi:"mắc kẹt", frequency:"medium" },
    "chǎ": { meaning_zh:"叉腿，张开", meaning_en:"to spread apart (legs)", example_zh:"叉腿", example_pinyin:"chǎ tuǐ", example_en:"to spread legs", meaning_vi:"dạng, xoạc (chân)", example_vi:"dạng chân", frequency:"medium" },
  }},
  "澄": { readings: {
    "chéng": { meaning_zh:"澄清，澄澈", meaning_en:"to clarify, clear", example_zh:"澄清", example_pinyin:"chéng qīng", example_en:"to clarify", meaning_vi:"trong vắt; làm rõ", example_vi:"làm rõ", frequency:"high" },
    "dèng": { meaning_zh:"水澄清再喝", meaning_en:"to let (liquid) settle clear", example_zh:"澄一澄", example_pinyin:"dèng yi dèng", example_en:"let it settle", meaning_vi:"lắng (cặn) rồi uống", example_vi:"để lắng cặn", frequency:"medium" },
  }},
  "挡": { readings: {
    "dǎng": { meaning_zh:"阻挡，挡住", meaning_en:"to block, to obstruct", example_zh:"阻挡", example_pinyin:"zǔ dǎng", example_en:"to block", meaning_vi:"chặn, ngăn cản", example_vi:"ngăn chặn", frequency:"high" },
    "dàng": { meaning_zh:"摆挡，拨挡", meaning_en:"to shift gear; deflect", example_zh:"换挡", example_pinyin:"huàn dǎng", example_en:"to shift gear", meaning_vi:"số (xe); che chắn", example_vi:"sang số", frequency:"medium" },
  }},
  "的": { readings: {
    "de": { meaning_zh:"结构助词", meaning_en:"structural particle (possessive/modifier)", example_zh:"我的书", example_pinyin:"wǒ de shū", example_en:"my book", meaning_vi:"trợ từ kết cấu (sở hữu/định ngữ)", example_vi:"sách của tôi", frequency:"high" },
    "dì": { meaning_zh:"目的，的确", meaning_en:"target; indeed", example_zh:"目的", example_pinyin:"mù dì", example_en:"purpose/target", meaning_vi:"mục tiêu, đích", example_vi:"mục đích", frequency:"high" },
    "dí": { meaning_zh:"的确，真的", meaning_en:"indeed, really", example_zh:"的确", example_pinyin:"dí què", example_en:"indeed", meaning_vi:"thật, đích thực", example_vi:"thật sự", frequency:"high" },
  }},
  "丁": { readings: {
    "dīng": { meaning_zh:"壮丁，钉子", meaning_en:"adult male; nail", example_zh:"壮丁", example_pinyin:"zhuàng dīng", example_en:"able-bodied man", meaning_vi:"tráng đinh; cái đinh", example_vi:"trai tráng", frequency:"high" },
    "zhēng": { meaning_zh:"丁丁声，伐木", meaning_en:"sound of chopping wood", example_zh:"丁丁", example_pinyin:"zhēng zhēng", example_en:"chopping sound", meaning_vi:"chan chát (tiếng chặt cây, 丁丁)", example_vi:"tiếng chặt cây", frequency:"low" },
  }},
  "读": { readings: {
    "dú": { meaning_zh:"读书，阅读", meaning_en:"to read", example_zh:"读书", example_pinyin:"dú shū", example_en:"to read", meaning_vi:"đọc, học", example_vi:"đọc sách", frequency:"high" },
    "dòu": { meaning_zh:"句读，标点", meaning_en:"punctuation pause (classical)", example_zh:"句读", example_pinyin:"jù dòu", example_en:"punctuation", meaning_vi:"ngắt câu (cổ, trong 句读)", example_vi:"ngắt câu", frequency:"low" },
  }},
  "肚": { readings: {
    "dù": { meaning_zh:"肚子，腹部", meaning_en:"belly, abdomen", example_zh:"肚子", example_pinyin:"dù zi", example_en:"belly", meaning_vi:"bụng", example_vi:"cái bụng", frequency:"high" },
    "dǔ": { meaning_zh:"羊肚儿，胃", meaning_en:"stomach (of animal)", example_zh:"羊肚", example_pinyin:"yáng dǔ", example_en:"sheep stomach", meaning_vi:"dạ dày (động vật, làm món ăn)", example_vi:"dạ dày dê", frequency:"medium" },
  }},
  "顿": { readings: {
    "dùn": { meaning_zh:"停顿，顿时", meaning_en:"to pause; suddenly", example_zh:"停顿", example_pinyin:"tíng dùn", example_en:"to pause", meaning_vi:"dừng lại; bỗng nhiên; bữa (ăn)", example_vi:"ngừng lại", frequency:"high" },
    "dú": { meaning_zh:"冒顿（古人名）", meaning_en:"Modu (historical name)", example_zh:"冒顿", example_pinyin:"Mò dú", example_en:"Modu (Xiongnu ruler)", meaning_vi:"Mặc Đốn (tên thủ lĩnh Hung Nô)", example_vi:"Mặc Đốn", frequency:"low" },
  }},
  "囤": { readings: {
    "dùn": { meaning_zh:"粮囤，存粮", meaning_en:"grain bin, storage", example_zh:"粮囤", example_pinyin:"liáng dùn", example_en:"grain bin", meaning_vi:"bồ, vựa (chứa lương thực)", example_vi:"vựa lúa", frequency:"medium" },
    "tún": { meaning_zh:"囤积，积聚", meaning_en:"to hoard, to stockpile", example_zh:"囤积", example_pinyin:"tún jī", example_en:"to hoard", meaning_vi:"tích trữ, đầu cơ", example_vi:"tích trữ", frequency:"high" },
  }},
  "垛": { readings: {
    "duǒ": { meaning_zh:"门垛子，砖垛", meaning_en:"pier; stack", example_zh:"门垛", example_pinyin:"mén duǒ", example_en:"door pier", meaning_vi:"trụ tường, mố (门垛)", example_vi:"trụ cửa", frequency:"medium" },
    "duò": { meaning_zh:"麦垛，草垛", meaning_en:"haystack, straw stack", example_zh:"麦垛", example_pinyin:"mài duò", example_en:"haystack", meaning_vi:"đống, đụn (rơm/lúa)", example_vi:"đống lúa", frequency:"medium" },
  }},
  "番": { readings: {
    "fān": { meaning_zh:"三番五次，轮番", meaning_en:"times, turn", example_zh:"三番五次", example_pinyin:"sān fān wǔ cì", example_en:"time and again", meaning_vi:"lần, lượt; phen", example_vi:"nhiều lần", frequency:"high" },
    "pān": { meaning_zh:"番禺（地名）", meaning_en:"Panyu (place name)", example_zh:"番禺", example_pinyin:"Pān yú", example_en:"Panyu district", meaning_vi:"Phiên Ngung (địa danh)", example_vi:"Phiên Ngung", frequency:"low" },
  }},
  "繁": { readings: {
    "fán": { meaning_zh:"繁华，繁忙", meaning_en:"prosperous, busy", example_zh:"繁华", example_pinyin:"fán huá", example_en:"prosperous", meaning_vi:"phồn hoa; bận rộn; phức tạp", example_vi:"phồn hoa", frequency:"high" },
    "pó": { meaning_zh:"姓繁", meaning_en:"surname Pó", example_zh:"姓繁", example_pinyin:"xìng Pó", example_en:"surname", meaning_vi:"họ Bà", example_vi:"họ Bà", frequency:"low" },
  }},
  "菲": { readings: {
    "fēi": { meaning_zh:"芳菲，花草", meaning_en:"fragrant flowers", example_zh:"芳菲", example_pinyin:"fāng fēi", example_en:"fragrant flowers", meaning_vi:"thơm ngát (hoa cỏ, 芳菲)", example_vi:"hoa cỏ thơm ngát", frequency:"medium" },
    "fěi": { meaning_zh:"菲薄，微薄", meaning_en:"meager, humble", example_zh:"菲薄", example_pinyin:"fěi bó", example_en:"meager", meaning_vi:"ít ỏi, đạm bạc (菲薄)", example_vi:"đạm bạc", frequency:"medium" },
  }},
  "夫": { readings: {
    "fū": { meaning_zh:"夫人，丈夫", meaning_en:"husband; man", example_zh:"夫人", example_pinyin:"fū rén", example_en:"wife/Mrs.", meaning_vi:"phu nhân, chồng", example_vi:"phu nhân", frequency:"high" },
    "fú": { meaning_zh:"句首语气词（文言）", meaning_en:"sentence-initial particle (classical Chinese)", example_zh:"夫战", example_pinyin:"fú zhàn", example_en:"now, as for war (classical)", meaning_vi:"trợ từ đầu câu (văn ngôn cổ)", example_vi:"phù chiến (mở đầu nghị luận)", frequency:"low" },
  }},
  "父": { readings: {
    "fù": { meaning_zh:"父亲，父母", meaning_en:"father, parent", example_zh:"父亲", example_pinyin:"fù qīn", example_en:"father", meaning_vi:"cha, bố", example_vi:"cha", frequency:"high" },
    "fǔ": { meaning_zh:"田父（古称）", meaning_en:"elder/senior (classical)", example_zh:"田父", example_pinyin:"tián fǔ", example_en:"old farmer", meaning_vi:"đàn ông, lão (cổ, thông 甫)", example_vi:"lão nông", frequency:"low" },
  }},
  "脯": { readings: {
    "fǔ": { meaning_zh:"肉脯，胸脯", meaning_en:"dried meat; breast", example_zh:"肉脯", example_pinyin:"ròu fǔ", example_en:"dried meat", meaning_vi:"thịt khô, mứt khô", example_vi:"thịt khô", frequency:"medium" },
    "pú": { meaning_zh:"胸脯（口语）", meaning_en:"chest (colloquial)", example_zh:"胸脯", example_pinyin:"xiōng pú", example_en:"chest", meaning_vi:"ngực (khẩu ngữ, 胸脯)", example_vi:"lồng ngực", frequency:"medium" },
  }},
  "蛤": { readings: {
    "gé": { meaning_zh:"蛤蚧，爬行动物", meaning_en:"gecko", example_zh:"蛤蚧", example_pinyin:"gé jiè", example_en:"gecko", meaning_vi:"tắc kè (蛤蚧)", example_vi:"tắc kè", frequency:"medium" },
    "há": { meaning_zh:"蛤蟆，青蛙", meaning_en:"toad, frog", example_zh:"蛤蟆", example_pinyin:"há ma", example_en:"toad", meaning_vi:"con cóc (蛤蟆)", example_vi:"con cóc", frequency:"high" },
  }},
  "葛": { readings: {
    "gé": { meaning_zh:"葛藤，植物", meaning_en:"kudzu vine", example_zh:"葛藤", example_pinyin:"gé téng", example_en:"kudzu", meaning_vi:"dây sắn; rắc rối", example_vi:"dây sắn", frequency:"medium" },
    "gě": { meaning_zh:"姓葛", meaning_en:"surname Gě", example_zh:"姓葛", example_pinyin:"xìng Gě", example_en:"surname", meaning_vi:"họ Cát", example_vi:"họ Cát", frequency:"medium" },
  }},
  "个": { readings: {
    "gè": { meaning_zh:"个体，个人", meaning_en:"individual; measure word", example_zh:"一个", example_pinyin:"yī gè", example_en:"one (measure word)", meaning_vi:"cái (lượng từ thông dụng)", example_vi:"một cái", frequency:"high" },
    "gě": { meaning_zh:"自个儿（方言）", meaning_en:"oneself (dialect)", example_zh:"自个儿", example_pinyin:"zì gěr", example_en:"oneself", meaning_vi:"tự, riêng (trong 自个儿)", example_vi:"tự mình", frequency:"medium" },
  }},
  "供": { readings: {
    "gōng": { meaning_zh:"供给，提供", meaning_en:"to supply, to provide", example_zh:"供给", example_pinyin:"gōng jǐ", example_en:"to supply", meaning_vi:"cung cấp, cung ứng", example_vi:"cung cấp", frequency:"high" },
    "gòng": { meaning_zh:"供认，供奉", meaning_en:"to confess; to offer", example_zh:"供认", example_pinyin:"gòng rèn", example_en:"to confess", meaning_vi:"khai nhận; cúng tế", example_vi:"khai nhận", frequency:"high" },
  }},
  "谷": { readings: {
    "gǔ": { meaning_zh:"山谷，谷物", meaning_en:"valley; grain", example_zh:"山谷", example_pinyin:"shān gǔ", example_en:"valley", meaning_vi:"thung lũng; ngũ cốc", example_vi:"thung lũng", frequency:"high" },
    "yù": { meaning_zh:"吐谷浑（古族名）", meaning_en:"Tuyuhun (ancient ethnic group)", example_zh:"吐谷浑", example_pinyin:"Tǔ yù hún", example_en:"Tuyuhun", meaning_vi:"Thổ Cốc Hồn (tộc cổ)", example_vi:"tộc Thổ Cốc Hồn", frequency:"low" },
  }},
  "观": { readings: {
    "guān": { meaning_zh:"观看，观察", meaning_en:"to observe, to watch", example_zh:"观看", example_pinyin:"guān kàn", example_en:"to watch", meaning_vi:"quan sát, xem", example_vi:"xem", frequency:"high" },
    "guàn": { meaning_zh:"寺观，道观", meaning_en:"Taoist temple", example_zh:"道观", example_pinyin:"dào guàn", example_en:"Taoist temple", meaning_vi:"đạo quán, miếu", example_vi:"đạo quán", frequency:"medium" },
  }},
  "合": { readings: {
    "hé": { meaning_zh:"合作，合并", meaning_en:"to cooperate, to combine", example_zh:"合作", example_pinyin:"hé zuò", example_en:"to cooperate", meaning_vi:"hợp tác, hợp nhất", example_vi:"hợp tác", frequency:"high" },
    "gě": { meaning_zh:"一升的十分之一", meaning_en:"gě (unit of volume, 1/10 sheng)", example_zh:"一合", example_pinyin:"yī gě", example_en:"one gě", meaning_vi:"cáp (đơn vị thể tích, 1/10 thăng)", example_vi:"một cáp", frequency:"low" },
  }},
  "核": { readings: {
    "hé": { meaning_zh:"核心，核实", meaning_en:"core; to verify", example_zh:"核心", example_pinyin:"hé xīn", example_en:"core", meaning_vi:"hạt nhân, cốt lõi; thẩm tra", example_vi:"cốt lõi", frequency:"high" },
    "hú": { meaning_zh:"核儿，果核", meaning_en:"pit, stone (of fruit)", example_zh:"核儿", example_pinyin:"húr", example_en:"pit, stone (of fruit)", meaning_vi:"hạt, hột (quả) — khẩu ngữ", example_vi:"hạt (quả)", frequency:"medium" },
  }},
  "貉": { readings: {
    "hé": { meaning_zh:"一丘之貉", meaning_en:"birds of a feather", example_zh:"一丘之貉", example_pinyin:"yī qiū zhī hé", example_en:"same ilk", meaning_vi:"cùng một giuộc (一丘之貉)", example_vi:"cùng một giuộc", frequency:"medium" },
    "háo": { meaning_zh:"貉子，动物", meaning_en:"raccoon dog", example_zh:"貉子", example_pinyin:"háo zi", example_en:"raccoon dog", meaning_vi:"con lửng (貉子)", example_vi:"con lửng", frequency:"medium" },
  }},
  "哼": { readings: {
    "hēng": { meaning_zh:"哼歌，哼声", meaning_en:"to hum; to grunt", example_zh:"哼歌", example_pinyin:"hēng gē", example_en:"to hum a tune", meaning_vi:"ngân nga; rên", example_vi:"ngân nga", frequency:"high" },
    "hng": { meaning_zh:"哼（叹词）", meaning_en:"hmph! (exclamation)", example_zh:"哼！", example_pinyin:"hng", example_en:"hmph!", meaning_vi:"hừ (cảm thán khinh bỉ)", example_vi:"hừ!", frequency:"medium" },
  }},
  "红": { readings: {
    "hóng": { meaning_zh:"红色，红旗", meaning_en:"red", example_zh:"红色", example_pinyin:"hóng sè", example_en:"red color", meaning_vi:"màu đỏ", example_vi:"màu đỏ", frequency:"high" },
    "gōng": { meaning_zh:"女红，刺绣", meaning_en:"needlework, embroidery", example_zh:"女红", example_pinyin:"nǚ gōng", example_en:"needlework", meaning_vi:"công việc nữ (cổ, thông 工)", example_vi:"nữ công", frequency:"low" },
  }},
  "虹": { readings: {
    "hóng": { meaning_zh:"彩虹，虹霓", meaning_en:"rainbow", example_zh:"彩虹", example_pinyin:"cǎi hóng", example_en:"rainbow", meaning_vi:"cầu vồng", example_vi:"cầu vồng", frequency:"high" },
    "jiàng": { meaning_zh:"出虹了", meaning_en:"rainbow appeared (dialect)", example_zh:"出虹", example_pinyin:"chū jiàng", example_en:"rainbow", meaning_vi:"cầu vồng (khẩu ngữ)", example_vi:"có cầu vồng", frequency:"low" },
  }},
  "侯": { readings: {
    "hóu": { meaning_zh:"封侯，诸侯", meaning_en:"marquis, feudal lord", example_zh:"封侯", example_pinyin:"fēng hóu", example_en:"to be ennobled", meaning_vi:"tước hầu; chư hầu", example_vi:"phong tước hầu", frequency:"medium" },
    "hòu": { meaning_zh:"闽侯（地名）", meaning_en:"Minhou (place name)", example_zh:"闽侯", example_pinyin:"Mǐn hòu", example_en:"Minhou county", meaning_vi:"Mân Hầu (địa danh)", example_vi:"huyện Mân Hầu", frequency:"low" },
  }},
  "糊": { readings: {
    "hú": { meaning_zh:"糊涂，含糊", meaning_en:"muddled, vague", example_zh:"糊涂", example_pinyin:"hú tu", example_en:"muddled", meaning_vi:"hồ dán; mơ hồ, lẫn lộn", example_vi:"lẩm cẩm", frequency:"high" },
    "hù": { meaning_zh:"糊弄，糊墙", meaning_en:"to paste, to plaster", example_zh:"糊墙", example_pinyin:"hú qiáng", example_en:"to plaster wall", meaning_vi:"trát, phết; lừa phỉnh", example_vi:"trát tường", frequency:"medium" },
    "hū": { meaning_zh:"糊糊（粥）", meaning_en:"porridge, paste (colloq.)", example_zh:"糊糊", example_pinyin:"hū hu", example_en:"porridge", meaning_vi:"cháo đặc, bột hồ", example_vi:"cháo bột", frequency:"medium" },
  }},
  "哗": { readings: {
    "huá": { meaning_zh:"哗众取宠", meaning_en:"to show off, to pander to", example_zh:"哗众取宠", example_pinyin:"huá zhòng qǔ chǒng", example_en:"to court popularity", meaning_vi:"mua chuộc lòng người (哗众取宠)", example_vi:"lấy lòng đám đông", frequency:"medium" },
    "huā": { meaning_zh:"水哗哗地流", meaning_en:"sound of rushing water", example_zh:"哗哗", example_pinyin:"huā huā", example_en:"rushing sound", meaning_vi:"róc rách, ào ào (nước chảy)", example_vi:"nước chảy ào ào", frequency:"high" },
  }},
  "纪": { readings: {
    "jì": { meaning_zh:"纪念，世纪", meaning_en:"to commemorate; century", example_zh:"纪念", example_pinyin:"jì niàn", example_en:"to commemorate", meaning_vi:"kỷ niệm, thế kỷ", example_vi:"kỷ niệm", frequency:"high" },
    "jǐ": { meaning_zh:"姓纪", meaning_en:"surname Jǐ", example_zh:"姓纪", example_pinyin:"xìng Jǐ", example_en:"surname", meaning_vi:"họ Kỷ", example_vi:"họ Kỷ", frequency:"low" },
  }},
  "家": { readings: {
    "jiā": { meaning_zh:"家庭，回家", meaning_en:"home, family", example_zh:"家庭", example_pinyin:"jiā tíng", example_en:"family", meaning_vi:"nhà, gia đình", example_vi:"gia đình", frequency:"high" },
    "jie": { meaning_zh:"整天家（口语）", meaning_en:"all day long (colloq.)", example_zh:"姑娘家", example_pinyin:"gū niang jie", example_en:"girl (with suffix)", meaning_vi:"hậu tố danh từ (trong 大家)", example_vi:"con gái (cách nói)", frequency:"medium" },
  }},
  "渐": { readings: {
    "jiàn": { meaning_zh:"逐渐，渐进", meaning_en:"gradually, progressive", example_zh:"逐渐", example_pinyin:"zhú jiàn", example_en:"gradually", meaning_vi:"dần dần, từ từ", example_vi:"dần dần", frequency:"high" },
    "jiān": { meaning_zh:"东渐于海", meaning_en:"to flow eastward to sea (classical)", example_zh:"东渐于海", example_pinyin:"dōng jiān yú hǎi", example_en:"flows eastward", meaning_vi:"thấm, chảy vào (东渐于海, văn cổ)", example_vi:"chảy về biển đông", frequency:"low" },
  }},
  "将": { readings: {
    "jiāng": { meaning_zh:"将来，将军", meaning_en:"will; general", example_zh:"将来", example_pinyin:"jiāng lái", example_en:"future", meaning_vi:"sắp, sẽ, tướng quân", example_vi:"tương lai", frequency:"high" },
    "jiàng": { meaning_zh:"将领，降将", meaning_en:"military officer", example_zh:"将领", example_pinyin:"jiàng lǐng", example_en:"military officer", meaning_vi:"tướng lĩnh, võ tướng", example_vi:"tướng lĩnh", frequency:"high" },
  }},
  "嚼": { readings: {
    "jiáo": { meaning_zh:"咀嚼，嚼碎", meaning_en:"to chew", example_zh:"嚼碎", example_pinyin:"jiáo suì", example_en:"to chew up", meaning_vi:"nhai (khẩu ngữ)", example_vi:"nhai nát", frequency:"high" },
    "jué": { meaning_zh:"倒嚼（反刍）", meaning_en:"to ruminate (chew cud)", example_zh:"咀嚼", example_pinyin:"jǔ jué", example_en:"to chew (formal)", meaning_vi:"nhai (văn viết, 咀嚼)", example_vi:"nhai (văn viết)", frequency:"low" },
    "jiào": { meaning_zh:"倒嚼（方言）", meaning_en:"ruminating (dialect)", example_zh:"倒嚼", example_pinyin:"dào jiào", example_en:"ruminating", meaning_vi:"nhai lại (倒嚼, phương ngữ)", example_vi:"nhai lại", frequency:"low" },
  }},
  "节": { readings: {
    "jié": { meaning_zh:"季节，节日", meaning_en:"season; festival", example_zh:"节日", example_pinyin:"jié rì", example_en:"holiday", meaning_vi:"mùa, lễ tết, tiết", example_vi:"ngày lễ", frequency:"high" },
    "jiē": { meaning_zh:"节骨眼（口语）", meaning_en:"critical juncture (colloq.)", example_zh:"节骨眼", example_pinyin:"jiē gu yǎn", example_en:"critical moment", meaning_vi:"thời điểm then chốt (khẩu ngữ)", example_vi:"lúc gay cấn", frequency:"medium" },
  }},
  "尽": { readings: {
    "jìn": { meaning_zh:"尽力，尽管", meaning_en:"to exhaust; despite", example_zh:"尽力", example_pinyin:"jìn lì", example_en:"to try one's best", meaning_vi:"dốc hết, tận lực", example_vi:"dốc sức", frequency:"high" },
    "jǐn": { meaning_zh:"尽管，仅", meaning_en:"despite; as much as", example_zh:"尽管", example_pinyin:"jǐn guǎn", example_en:"despite", meaning_vi:"mặc dù; tối đa", example_vi:"mặc dù", frequency:"high" },
  }},
  "劲": { readings: {
    "jìn": { meaning_zh:"劲头，使劲", meaning_en:"strength, energy", example_zh:"使劲", example_pinyin:"shǐ jìn", example_en:"to exert force", meaning_vi:"sức lực, hứng thú", example_vi:"dùng sức", frequency:"high" },
    "jìng": { meaning_zh:"劲敌，强劲", meaning_en:"powerful, strong", example_zh:"劲敌", example_pinyin:"jìng dí", example_en:"powerful enemy", meaning_vi:"mạnh mẽ, kiên cường", example_vi:"đối thủ mạnh", frequency:"high" },
  }},
  "菌": { readings: {
    "jùn": { meaning_zh:"香菌，蘑菇", meaning_en:"mushroom, fungus", example_zh:"香菌", example_pinyin:"xiāng jùn", example_en:"mushroom", meaning_vi:"nấm (ăn được)", example_vi:"nấm hương", frequency:"medium" },
    "jūn": { meaning_zh:"细菌，病菌", meaning_en:"bacteria, germ", example_zh:"细菌", example_pinyin:"xì jūn", example_en:"bacteria", meaning_vi:"vi khuẩn, vi trùng", example_vi:"vi khuẩn", frequency:"high" },
  }},
  "咳": { readings: {
    "ké": { meaning_zh:"咳嗽，咳痰", meaning_en:"to cough", example_zh:"咳嗽", example_pinyin:"ké sou", example_en:"to cough", meaning_vi:"ho", example_vi:"ho hen", frequency:"high" },
    "hāi": { meaning_zh:"咳声叹气", meaning_en:"to sigh deeply", example_zh:"咳声叹气", example_pinyin:"hāi shēng tàn qì", example_en:"to sigh", meaning_vi:"chậc (than thở, 咳声叹气)", example_vi:"thở than", frequency:"medium" },
  }},
  "肋": { readings: {
    "lèi": { meaning_zh:"肋骨，肋条", meaning_en:"rib", example_zh:"肋骨", example_pinyin:"lèi gǔ", example_en:"rib", meaning_vi:"xương sườn", example_vi:"xương sườn", frequency:"high" },
    "lē": { meaning_zh:"肋肢（方言）", meaning_en:"armpit/side (dialect)", example_zh:"肋肢", example_pinyin:"lé zhi", example_en:"armpit (dialect)", meaning_vi:"nách (方言, 肋肢)", example_vi:"nách (phương ngữ)", frequency:"low" },
  }},
  "丽": { readings: {
    "lì": { meaning_zh:"美丽，秀丽", meaning_en:"beautiful", example_zh:"美丽", example_pinyin:"měi lì", example_en:"beautiful", meaning_vi:"đẹp, mỹ lệ", example_vi:"xinh đẹp", frequency:"high" },
    "lí": { meaning_zh:"丽水（地名）", meaning_en:"Lishui (place name)", example_zh:"丽水", example_pinyin:"Lí shuǐ", example_en:"Lishui city", meaning_vi:"Lệ Thủy (địa danh)", example_vi:"Lệ Thủy", frequency:"low" },
  }},
  "俩": { readings: {
    "liǎ": { meaning_zh:"咱俩，两人", meaning_en:"us two, a pair", example_zh:"咱俩", example_pinyin:"zán liǎ", example_en:"the two of us", meaning_vi:"hai người, cả hai", example_vi:"hai chúng tôi", frequency:"high" },
    "liǎng": { meaning_zh:"夫妇俩", meaning_en:"the couple (formal)", example_zh:"伎俩", example_pinyin:"jì liǎng", example_en:"trick, ruse", meaning_vi:"mánh khóe, thủ đoạn (伎俩)", example_vi:"mánh khóe", frequency:"medium" },
  }},
  "凉": { readings: {
    "liáng": { meaning_zh:"凉快，凉爽", meaning_en:"cool, refreshing", example_zh:"凉快", example_pinyin:"liáng kuai", example_en:"cool and refreshing", meaning_vi:"mát, mát mẻ", example_vi:"mát mẻ", frequency:"high" },
    "liàng": { meaning_zh:"凉一凉，晾", meaning_en:"to cool down, to air out", example_zh:"凉一凉", example_pinyin:"liàng yi liàng", example_en:"let it cool", meaning_vi:"để nguội, hong khô", example_vi:"để cho nguội", frequency:"medium" },
  }},
  "燎": { readings: {
    "liáo": { meaning_zh:"燎原，大火", meaning_en:"prairie fire; to scorch", example_zh:"燎原", example_pinyin:"liáo yuán", example_en:"prairie fire", meaning_vi:"cháy lan, đốt (燎原)", example_vi:"lửa cháy lan đồng", frequency:"medium" },
    "liǎo": { meaning_zh:"把头发燎了", meaning_en:"to singe (hair, colloq.)", example_zh:"燎了头发", example_pinyin:"liǎo le tóu fà", example_en:"singed hair", meaning_vi:"cháy sém (tóc, lông)", example_vi:"cháy sém tóc", frequency:"low" },
  }},
  "六": { readings: {
    "liù": { meaning_zh:"第六，六个", meaning_en:"six", example_zh:"六个", example_pinyin:"liù gè", example_en:"six", meaning_vi:"sáu (số 6)", example_vi:"sáu cái", frequency:"high" },
    "lù": { meaning_zh:"六合（地名）", meaning_en:"Liuhe (place name)", example_zh:"六合", example_pinyin:"Lù hé", example_en:"Liuhe district", meaning_vi:"tên đất (Lục An, An Huy)", example_vi:"Lục Hợp", frequency:"low" },
  }},
  "络": { readings: {
    "luò": { meaning_zh:"脉络，网络", meaning_en:"network, web", example_zh:"网络", example_pinyin:"wǎng luò", example_en:"network", meaning_vi:"mạch lạc; mạng lưới", example_vi:"mạng lưới", frequency:"high" },
    "lào": { meaning_zh:"络子（方言）", meaning_en:"net bag (dialect)", example_zh:"络子", example_pinyin:"lào zi", example_en:"net bag", meaning_vi:"túi lưới (phương ngữ, 络子)", example_vi:"túi lưới", frequency:"low" },
  }},
  "漫": { readings: {
    "màn": { meaning_zh:"漫骂，漫长", meaning_en:"to rant; long/vast", example_zh:"漫骂", example_pinyin:"màn mà", example_en:"to scold wildly", meaning_vi:"chửi bới lung tung; dài dằng dặc", example_vi:"chửi rủa lung tung", frequency:"high" },
    "mán": { meaning_zh:"漫漶（模糊）", meaning_en:"blurred, illegible", example_zh:"漫漶", example_pinyin:"màn huàn", example_en:"blurred", meaning_vi:"mờ nhòe (漫漶)", example_vi:"mờ nhòe", frequency:"low" },
  }},
  "猫": { readings: {
    "māo": { meaning_zh:"小猫，猫咪", meaning_en:"cat", example_zh:"猫咪", example_pinyin:"māo mī", example_en:"kitty", meaning_vi:"con mèo", example_vi:"mèo con", frequency:"high" },
    "máo": { meaning_zh:"猫腰（弓腰）", meaning_en:"to stoop, to bend down", example_zh:"猫腰", example_pinyin:"máo yāo", example_en:"to stoop", meaning_vi:"cúi, khom (khẩu ngữ Bắc Kinh)", example_vi:"khom lưng", frequency:"medium" },
  }},
  "冒": { readings: {
    "mào": { meaning_zh:"冒险，冒烟", meaning_en:"to brave; to emit", example_zh:"冒险", example_pinyin:"mào xiǎn", example_en:"to take a risk", meaning_vi:"mạo hiểm; bốc (khói)", example_vi:"mạo hiểm", frequency:"high" },
    "mò": { meaning_zh:"冒顿（古匈奴君主名）", meaning_en:"Modu (Xiongnu ruler)", example_zh:"冒顿", example_pinyin:"Mò dú", example_en:"Modu", meaning_vi:"Mặc Đốn (vua Hung Nô)", example_vi:"Mặc Đốn", frequency:"low" },
  }},
  "么": { readings: {
    "me": { meaning_zh:"什么，这么", meaning_en:"what; so (modal)", example_zh:"什么", example_pinyin:"shén me", example_en:"what", meaning_vi:"trợ từ (trong 什么, 怎么)", example_vi:"cái gì", frequency:"high" },
    "ma": { meaning_zh:"语气助词", meaning_en:"modal particle", example_zh:"嘛", example_pinyin:"ma", example_en:"modal particle", meaning_vi:"trợ từ ngữ khí (hỏi)", example_vi:"trợ từ ngữ khí", frequency:"high" },
  }},
  "眯": { readings: {
    "mí": { meaning_zh:"沙子眯了眼", meaning_en:"(dust) got in the eye", example_zh:"眯眼", example_pinyin:"mī yǎn", example_en:"eye got in dust", meaning_vi:"(bụi) vào mắt", example_vi:"bụi vào mắt", frequency:"medium" },
    "mī": { meaning_zh:"眯缝，眯眯", meaning_en:"to squint", example_zh:"眯缝", example_pinyin:"mī feng", example_en:"to squint", meaning_vi:"nheo, lim dim (mắt)", example_vi:"nheo mắt", frequency:"medium" },
  }},
  "泌": { readings: {
    "mì": { meaning_zh:"分泌，泌尿", meaning_en:"to secrete", example_zh:"分泌", example_pinyin:"fēn mì", example_en:"to secrete", meaning_vi:"tiết ra, bài tiết", example_vi:"bài tiết", frequency:"high" },
    "bì": { meaning_zh:"泌阳（地名）", meaning_en:"Biyang (place name)", example_zh:"泌阳", example_pinyin:"Bì yáng", example_en:"Biyang county", meaning_vi:"Bí Dương (địa danh)", example_vi:"huyện Bí Dương", frequency:"low" },
  }},
  "秘": { readings: {
    "mì": { meaning_zh:"秘密，神秘", meaning_en:"secret, mysterious", example_zh:"秘密", example_pinyin:"mì mì", example_en:"secret", meaning_vi:"bí mật, thần bí", example_vi:"bí mật", frequency:"high" },
    "bì": { meaning_zh:"秘鲁（国名）", meaning_en:"Peru (country name)", example_zh:"秘鲁", example_pinyin:"Bì lǔ", example_en:"Peru", meaning_vi:"Pê-ru (tên nước, 秘鲁)", example_vi:"Pê-ru", frequency:"medium" },
  }},
  "摩": { readings: {
    "mó": { meaning_zh:"摩擦，按摩", meaning_en:"to rub, to massage", example_zh:"摩擦", example_pinyin:"mó cā", example_en:"friction", meaning_vi:"ma sát; xoa bóp", example_vi:"ma sát", frequency:"high" },
    "mā": { meaning_zh:"摩掌（摩挲）", meaning_en:"to stroke gently", example_zh:"摩挲", example_pinyin:"mā sa", example_en:"to stroke", meaning_vi:"vuốt ve, xoa nhẹ (摩挲)", example_vi:"vuốt ve", frequency:"low" },
  }},
  "哪": { readings: {
    "nǎ": { meaning_zh:"哪儿，哪里", meaning_en:"where, which", example_zh:"哪里", example_pinyin:"nǎ lǐ", example_en:"where", meaning_vi:"nào, ở đâu", example_vi:"ở đâu", frequency:"high" },
    "nèi": { meaning_zh:"哪（一）年", meaning_en:"which year (spoken)", example_zh:"哪年", example_pinyin:"nèi nián", example_en:"which year", meaning_vi:"nào (= 哪一)", example_vi:"năm nào", frequency:"medium" },
    "na": { meaning_zh:"语气助词", meaning_en:"modal particle", example_zh:"好哪", example_pinyin:"hǎo na", example_en:"oh good (sentence particle)", meaning_vi:"trợ từ ngữ khí (cuối câu)", example_vi:"tốt nha", frequency:"medium" },
    "né": { meaning_zh:"哪吒（人名）", meaning_en:"Nezha (mythical figure)", example_zh:"哪吒", example_pinyin:"Né zhā", example_en:"Nezha", meaning_vi:"Na (trong 哪吒 — tên thần)", example_vi:"Na Tra", frequency:"low" },
  }},
  "那": { readings: {
    "nà": { meaning_zh:"那里，那个", meaning_en:"that", example_zh:"那个", example_pinyin:"nà ge", example_en:"that", meaning_vi:"kia, đó", example_vi:"cái kia", frequency:"high" },
    "nèi": { meaning_zh:"那个（口语）", meaning_en:"that (spoken form)", example_zh:"那个", example_pinyin:"nèi ge", example_en:"that (spoken)", meaning_vi:"kia (= 那一, khẩu ngữ)", example_vi:"cái kia", frequency:"high" },
    "nā": { meaning_zh:"姓那", meaning_en:"surname Nā", example_zh:"姓那", example_pinyin:"xìng Nā", example_en:"surname", meaning_vi:"họ Na", example_vi:"họ Na", frequency:"low" },
  }},
  "娜": { readings: {
    "nà": { meaning_zh:"用于人名", meaning_en:"used in personal names", example_zh:"娜娜", example_pinyin:"Nà nà", example_en:"Nana (name)", meaning_vi:"dùng trong tên người", example_vi:"tên Na Na", frequency:"medium" },
    "nuó": { meaning_zh:"袅娜，婀娜", meaning_en:"graceful, willowy", example_zh:"袅娜", example_pinyin:"niǎo nuó", example_en:"willowy", meaning_vi:"yểu điệu, mềm mại (婀娜)", example_vi:"yểu điệu", frequency:"medium" },
  }},
  "囊": { readings: {
    "náng": { meaning_zh:"囊括，口袋", meaning_en:"to include; bag", example_zh:"囊括", example_pinyin:"náng kuò", example_en:"to encompass", meaning_vi:"bao, túi; thâu tóm", example_vi:"thâu tóm hết", frequency:"high" },
    "nāng": { meaning_zh:"囊肿（软包）", meaning_en:"cyst; soft swelling", example_zh:"囊肿", example_pinyin:"náng zhǒng", example_en:"cyst", meaning_vi:"u nang, bọc mềm (囊肿)", example_vi:"u nang", frequency:"medium" },
  }},
  "呢": { readings: {
    "ní": { meaning_zh:"呢子，毛料", meaning_en:"woolen cloth", example_zh:"呢子", example_pinyin:"ní zi", example_en:"woolen cloth", meaning_vi:"len, dạ (vải)", example_vi:"vải dạ", frequency:"medium" },
    "ne": { meaning_zh:"语气助词", meaning_en:"modal particle (continuing)", example_zh:"你呢", example_pinyin:"nǐ ne", example_en:"what about you", meaning_vi:"trợ từ ngữ khí (cuối câu)", example_vi:"còn bạn thì sao", frequency:"high" },
  }},
  "拧": { readings: {
    "níng": { meaning_zh:"拧螺丝，拧紧", meaning_en:"to screw, to tighten", example_zh:"拧螺丝", example_pinyin:"níng luó sī", example_en:"to screw in", meaning_vi:"vặn, xoáy (ốc vít)", example_vi:"vặn ốc vít", frequency:"high" },
    "nǐng": { meaning_zh:"拧毛巾，扭", meaning_en:"to wring (a towel)", example_zh:"拧毛巾", example_pinyin:"nǐng máo jīn", example_en:"to wring a towel", meaning_vi:"vắt, xoắn (khăn)", example_vi:"vắt khăn", frequency:"medium" },
    "nìng": { meaning_zh:"拧牌气，固执", meaning_en:"stubborn, wrongheaded", example_zh:"拧脾气", example_pinyin:"nìng pí qi", example_en:"stubborn", meaning_vi:"bướng bỉnh, ương ngạnh", example_vi:"tính bướng bỉnh", frequency:"medium" },
  }},
  "跑": { readings: {
    "pǎo": { meaning_zh:"跑步，奔跑", meaning_en:"to run", example_zh:"跑步", example_pinyin:"pǎo bù", example_en:"to run", meaning_vi:"chạy", example_vi:"chạy bộ", frequency:"high" },
    "páo": { meaning_zh:"虎跑泉（地名）", meaning_en:"Hupao Spring (place)", example_zh:"虎跑", example_pinyin:"Hǔ páo", example_en:"Hupao Spring", meaning_vi:"đào, bới (móng vuốt)", example_vi:"suối Hổ Bào", frequency:"low" },
  }},
  "排": { readings: {
    "pái": { meaning_zh:"排列，排队", meaning_en:"to arrange, to line up", example_zh:"排列", example_pinyin:"pái liè", example_en:"to arrange", meaning_vi:"sắp xếp, xếp hàng", example_vi:"sắp xếp", frequency:"high" },
    "pǎi": { meaning_zh:"排子车", meaning_en:"flatbed handcart", example_zh:"排子车", example_pinyin:"pǎi zi chē", example_en:"flatbed handcart", meaning_vi:"xe ba gác (kéo tay)", example_vi:"xe ba gác", frequency:"low" },
  }},
  "劈": { readings: {
    "pī": { meaning_zh:"劈开，劈柴", meaning_en:"to chop, to split", example_zh:"劈柴", example_pinyin:"pī chái", example_en:"to chop wood", meaning_vi:"bổ, chẻ (củi)", example_vi:"chẻ củi", frequency:"high" },
    "pǐ": { meaning_zh:"劈好了的柴", meaning_en:"split firewood", example_zh:"劈柴", example_pinyin:"pī chái", example_en:"firewood", meaning_vi:"củi đã chẻ; tách ra", example_vi:"củi đã chẻ", frequency:"medium" },
  }},
  "仆": { readings: {
    "pū": { meaning_zh:"前仆后继", meaning_en:"to fall forward; to throw oneself into", example_zh:"前仆后继", example_pinyin:"qián pū hòu jì", example_en:"one after another", meaning_vi:"ngã sấp (前仆后继)", example_vi:"lớp trước ngã lớp sau tiến lên", frequency:"medium" },
    "pú": { meaning_zh:"仆从，仆人", meaning_en:"servant", example_zh:"仆人", example_pinyin:"pú rén", example_en:"servant", meaning_vi:"đầy tớ, người hầu", example_vi:"người hầu", frequency:"high" },
  }},
  "曝": { readings: {
    "pù": { meaning_zh:"一曝十寒", meaning_en:"to work in fits and starts", example_zh:"一曝十寒", example_pinyin:"yī pù shí hán", example_en:"inconsistent effort", meaning_vi:"phơi (一曝十寒, văn cổ)", example_vi:"bữa làm bữa nghỉ", frequency:"medium" },
    "bào": { meaning_zh:"曝光，曝晒", meaning_en:"exposure (photo/sun)", example_zh:"曝光", example_pinyin:"bào guāng", example_en:"exposure", meaning_vi:"phơi sáng; phơi bày", example_vi:"phơi sáng", frequency:"high" },
  }},
  "妻": { readings: {
    "qī": { meaning_zh:"妻子，妻儿", meaning_en:"wife", example_zh:"妻子", example_pinyin:"qī zi", example_en:"wife", meaning_vi:"vợ", example_vi:"vợ", frequency:"high" },
    "qì": { meaning_zh:"以女嫁人", meaning_en:"to marry off a daughter (classical)", example_zh:"妻之", example_pinyin:"qì zhī", example_en:"to marry off", meaning_vi:"gả con gái cho (văn cổ)", example_vi:"gả con gái", frequency:"low" },
  }},
  "铅": { readings: {
    "qiān": { meaning_zh:"铅笔，铅块", meaning_en:"lead (metal); pencil", example_zh:"铅笔", example_pinyin:"qiān bǐ", example_en:"pencil", meaning_vi:"chì; bút chì", example_vi:"bút chì", frequency:"high" },
    "yán": { meaning_zh:"铅山（地名）", meaning_en:"Yanshan (place name)", example_zh:"铅山", example_pinyin:"Yán shān", example_en:"Yanshan county", meaning_vi:"Diên Sơn (địa danh)", example_vi:"huyện Diên Sơn", frequency:"low" },
  }},
  "浅": { readings: {
    "qiǎn": { meaning_zh:"浅近，浅显", meaning_en:"shallow, simple", example_zh:"浅显", example_pinyin:"qiǎn xiǎn", example_en:"easy to understand", meaning_vi:"nông, cạn; đơn giản", example_vi:"dễ hiểu", frequency:"high" },
    "jiān": { meaning_zh:"浅浅（流水声）", meaning_en:"sound of shallow water", example_zh:"浅浅", example_pinyin:"jiān jiān", example_en:"babbling sound", meaning_vi:"tiếng nước chảy (浅浅, cổ)", example_vi:"róc rách (tiếng nước)", frequency:"low" },
  }},
  "呛": { readings: {
    "qiāng": { meaning_zh:"呛着了，呛到", meaning_en:"to choke (on food/smoke)", example_zh:"呛着", example_pinyin:"qiàng zhe", example_en:"to choke", meaning_vi:"sặc, nghẹn", example_vi:"bị sặc", frequency:"high" },
    "qiàng": { meaning_zh:"够呛，厉害", meaning_en:"terrific; overwhelming (colloq.)", example_zh:"够呛", example_pinyin:"gòu qiàng", example_en:"overwhelming", meaning_vi:"khó chịu, dữ dội (够呛)", example_vi:"vất vả lắm", frequency:"medium" },
  }},
  "区": { readings: {
    "qū": { meaning_zh:"区别，地区", meaning_en:"area, district", example_zh:"地区", example_pinyin:"dì qū", example_en:"region", meaning_vi:"khu vực, phân biệt", example_vi:"khu vực", frequency:"high" },
    "ōu": { meaning_zh:"姓区", meaning_en:"surname Ōu", example_zh:"姓区", example_pinyin:"xìng Ōu", example_en:"surname", meaning_vi:"họ Khu", example_vi:"họ Khu", frequency:"low" },
  }},
  "圈": { readings: {
    "quān": { meaning_zh:"圆圈，圈子", meaning_en:"circle, ring", example_zh:"圆圈", example_pinyin:"yuán quān", example_en:"circle", meaning_vi:"vòng tròn; giới (giới hạn)", example_vi:"vòng tròn", frequency:"high" },
    "juàn": { meaning_zh:"猪圈，牲口圈", meaning_en:"animal pen, sty", example_zh:"猪圈", example_pinyin:"zhū juàn", example_en:"pig pen", meaning_vi:"chuồng (gia súc)", example_vi:"chuồng lợn", frequency:"medium" },
    "juān": { meaning_zh:"圈住，围圈", meaning_en:"to corral, to enclose", example_zh:"猪圈起来", example_pinyin:"zhū juān qǐ lái", example_en:"to corral the pigs", meaning_vi:"nhốt, quây lại", example_vi:"nhốt lợn lại", frequency:"medium" },
  }},
  "雀": { readings: {
    "qué": { meaning_zh:"麻雀，雀鸟", meaning_en:"sparrow", example_zh:"麻雀", example_pinyin:"má què", example_en:"sparrow", meaning_vi:"chim sẻ", example_vi:"chim sẻ", frequency:"high" },
    "qiāo": { meaning_zh:"雀子（雀斑）", meaning_en:"freckle", example_zh:"雀斑", example_pinyin:"qiāo zi", example_en:"freckle", meaning_vi:"tàn nhang (雀斑)", example_vi:"tàn nhang", frequency:"medium" },
    "qiǎo": { meaning_zh:"雀盲眼", meaning_en:"night blindness", example_zh:"雀盲", example_pinyin:"qiǎo máng", example_en:"night blindness", meaning_vi:"quáng gà (雀盲眼)", example_vi:"bệnh quáng gà", frequency:"low" },
  }},
  "撒": { readings: {
    "sā": { meaning_zh:"撒网，撒手", meaning_en:"to cast (net); to let go", example_zh:"撒网", example_pinyin:"sā wǎng", example_en:"to cast a net", meaning_vi:"tung, thả ra; buông", example_vi:"quăng lưới", frequency:"high" },
    "sǎ": { meaning_zh:"撒种，播撒", meaning_en:"to scatter, to sow", example_zh:"撒种", example_pinyin:"sǎ zhǒng", example_en:"to sow seeds", meaning_vi:"gieo, rắc, vãi", example_vi:"gieo hạt", frequency:"high" },
  }},
  "扫": { readings: {
    "sǎo": { meaning_zh:"扫地，扫描", meaning_en:"to sweep, to scan", example_zh:"扫地", example_pinyin:"sǎo dì", example_en:"to sweep", meaning_vi:"quét, quét (chữ)", example_vi:"quét nhà", frequency:"high" },
    "sào": { meaning_zh:"扫帚，笤帚", meaning_en:"broom", example_zh:"扫帚", example_pinyin:"sào zhou", example_en:"broom", meaning_vi:"cái chổi", example_vi:"cái chổi", frequency:"medium" },
  }},
  "煞": { readings: {
    "shà": { meaning_zh:"煞费苦心", meaning_en:"to take great pains", example_zh:"煞费苦心", example_pinyin:"shā fèi kǔ xīn", example_en:"painstaking", meaning_vi:"hao tâm tổn trí (煞费苦心)", example_vi:"dốc hết tâm sức", frequency:"medium" },
    "shā": { meaning_zh:"煞车，刹车", meaning_en:"to brake, to stop", example_zh:"煞车", example_pinyin:"shā chē", example_en:"to brake", meaning_vi:"phanh, hãm; kết thúc", example_vi:"phanh xe", frequency:"high" },
  }},
  "杉": { readings: {
    "shān": { meaning_zh:"杉树，林木", meaning_en:"fir tree", example_zh:"杉树", example_pinyin:"shān shù", example_en:"fir tree", meaning_vi:"cây sa mộc", example_vi:"cây sa mộc", frequency:"medium" },
    "shā": { meaning_zh:"杉木（建材）", meaning_en:"fir wood (timber)", example_zh:"杉木", example_pinyin:"shā mù", example_en:"fir timber", meaning_vi:"gỗ sa mộc (vật liệu)", example_vi:"gỗ sa mộc", frequency:"medium" },
  }},
  "苫": { readings: {
    "shān": { meaning_zh:"草苫子，草帘", meaning_en:"straw mat/thatch", example_zh:"草苫", example_pinyin:"cǎo shān", example_en:"straw mat", meaning_vi:"tấm rơm phủ (草苫子)", example_vi:"chiếu rơm", frequency:"low" },
    "shàn": { meaning_zh:"苫布，遮盖", meaning_en:"to cover with straw/canvas", example_zh:"苫布", example_pinyin:"shàn bù", example_en:"tarpaulin", meaning_vi:"tấm bạt che, phủ", example_vi:"tấm bạt che", frequency:"low" },
  }},
  "上": { readings: {
    "shàng": { meaning_zh:"上面，上去", meaning_en:"above, to go up", example_zh:"上面", example_pinyin:"shàng miàn", example_en:"above", meaning_vi:"lên, trên", example_vi:"phía trên", frequency:"high" },
    "shǎng": { meaning_zh:"上声，声调", meaning_en:"rising tone (3rd tone)", example_zh:"上声", example_pinyin:"shǎng shēng", example_en:"rising tone", meaning_vi:"thanh trắc (cổ, trong 上声)", example_vi:"thượng thanh", frequency:"medium" },
  }},
  "稍": { readings: {
    "shāo": { meaning_zh:"稍微，稍等", meaning_en:"slightly, a little", example_zh:"稍微", example_pinyin:"shāo wēi", example_en:"slightly", meaning_vi:"hơi, một chút", example_vi:"hơi hơi", frequency:"high" },
    "shào": { meaning_zh:"稍息（军令）", meaning_en:"stand at ease (military)", example_zh:"稍息", example_pinyin:"shào xī", example_en:"stand at ease", meaning_vi:"nghỉ (khẩu lệnh quân sự, 稍息)", example_vi:"nghỉ (khẩu lệnh)", frequency:"medium" },
  }},
  "蛇": { readings: {
    "shé": { meaning_zh:"毒蛇，蛇类", meaning_en:"snake", example_zh:"毒蛇", example_pinyin:"dú shé", example_en:"venomous snake", meaning_vi:"con rắn", example_vi:"rắn độc", frequency:"high" },
    "yí": { meaning_zh:"委蛇，敷衍", meaning_en:"to act perfunctorily (literary)", example_zh:"委蛇", example_pinyin:"wēi yí", example_en:"evasive", meaning_vi:"uốn lượn; qua loa (委蛇)", example_vi:"ngoằn ngoèo", frequency:"low" },
  }},
  "食": { readings: {
    "shí": { meaning_zh:"食品，食物", meaning_en:"food, to eat", example_zh:"食品", example_pinyin:"shí pǐn", example_en:"food", meaning_vi:"ăn, thức ăn", example_vi:"thực phẩm", frequency:"high" },
    "sì": { meaning_zh:"拿东西给人吃", meaning_en:"to feed (others), causative eat", example_zh:"食马", example_pinyin:"sì mǎ", example_en:"to feed a horse", meaning_vi:"cho ăn (cổ, thông 饲)", example_vi:"cho ngựa ăn", frequency:"low" },
  }},
  "氏": { readings: {
    "shì": { meaning_zh:"姓氏，氏族", meaning_en:"clan name, surname", example_zh:"姓氏", example_pinyin:"xìng shì", example_en:"surname", meaning_vi:"họ; thị tộc", example_vi:"họ tên", frequency:"high" },
    "zhī": { meaning_zh:"月氏（汉朝西域国名）", meaning_en:"Yuezhi (ancient people)", example_zh:"月氏", example_pinyin:"Yuè zhī", example_en:"Yuezhi", meaning_vi:"Nguyệt Chi (nước Tây Vực thời Hán)", example_vi:"nước Nguyệt Chi", frequency:"low" },
  }},
  "属": { readings: {
    "shǔ": { meaning_zh:"属于，归属", meaning_en:"to belong to", example_zh:"属于", example_pinyin:"shǔ yú", example_en:"to belong to", meaning_vi:"thuộc về, thuộc loại", example_vi:"thuộc về", frequency:"high" },
    "zhǔ": { meaning_zh:"属望，嘱托", meaning_en:"to entrust; to hope (classical)", example_zh:"属望", example_pinyin:"zhǔ wàng", example_en:"to pin hopes on", meaning_vi:"gửi gắm, kỳ vọng (văn cổ)", example_vi:"đặt kỳ vọng", frequency:"low" },
  }},
  "术": { readings: {
    "shù": { meaning_zh:"技术，艺术", meaning_en:"technique, art", example_zh:"技术", example_pinyin:"jì shù", example_en:"technology", meaning_vi:"kỹ thuật; nghệ thuật", example_vi:"kỹ thuật", frequency:"high" },
    "zhú": { meaning_zh:"白术（中药）", meaning_en:"Atractylodes (herb)", example_zh:"白术", example_pinyin:"bái zhú", example_en:"Atractylodes", meaning_vi:"bạch truật (vị thuốc bắc)", example_vi:"bạch truật", frequency:"low" },
  }},
  "刷": { readings: {
    "shuā": { meaning_zh:"刷子，刷牙", meaning_en:"brush; to brush", example_zh:"刷牙", example_pinyin:"shuā yá", example_en:"to brush teeth", meaning_vi:"bàn chải; chải, đánh", example_vi:"đánh răng", frequency:"high" },
    "shuà": { meaning_zh:"刷白（颜色）", meaning_en:"brushed white, whitewash", example_zh:"刷白", example_pinyin:"shuà bái", example_en:"to whitewash", meaning_vi:"trắng bệch (刷白)", example_vi:"quét vôi trắng", frequency:"low" },
  }},
  "台": { readings: {
    "tái": { meaning_zh:"台上，台子", meaning_en:"platform, stage", example_zh:"台上", example_pinyin:"tái shàng", example_en:"on stage", meaning_vi:"đài, sân khấu, bục", example_vi:"trên bục", frequency:"high" },
    "tāi": { meaning_zh:"天台（地名）", meaning_en:"Tiantai (place name)", example_zh:"天台", example_pinyin:"Tiān tāi", example_en:"Tiantai county", meaning_vi:"Thiên Thai (địa danh)", example_vi:"Thiên Thai", frequency:"low" },
  }},
  "苔": { readings: {
    "tái": { meaning_zh:"青苔，苔藓", meaning_en:"moss", example_zh:"青苔", example_pinyin:"qīng tái", example_en:"moss", meaning_vi:"rêu", example_vi:"rêu xanh", frequency:"medium" },
    "tāi": { meaning_zh:"舌苔，苔膜", meaning_en:"tongue coating", example_zh:"舌苔", example_pinyin:"shé tāi", example_en:"tongue coating", meaning_vi:"bựa lưỡi (舌苔)", example_vi:"bựa lưỡi", frequency:"medium" },
  }},
  "陶": { readings: {
    "táo": { meaning_zh:"陶冶，陶器", meaning_en:"pottery; to cultivate (character)", example_zh:"陶瓷", example_pinyin:"táo cí", example_en:"pottery", meaning_vi:"hun đúc; đồ gốm", example_vi:"đồ gốm sứ", frequency:"high" },
    "yáo": { meaning_zh:"皋陶（古人名）", meaning_en:"Gaoyao (ancient person)", example_zh:"皋陶", example_pinyin:"Gāo Yáo", example_en:"Gaoyao", meaning_vi:"Cao Dao (tên người thời cổ)", example_vi:"Cao Dao", frequency:"low" },
  }},
  "提": { readings: {
    "tí": { meaning_zh:"提升，提问", meaning_en:"to lift; to raise (question)", example_zh:"提升", example_pinyin:"tí shēng", example_en:"to promote", meaning_vi:"nâng, xách, nêu (vấn đề)", example_vi:"nâng cao", frequency:"high" },
    "dī": { meaning_zh:"提防，留意", meaning_en:"to be on guard against", example_zh:"提防", example_pinyin:"dī fang", example_en:"to be wary of", meaning_vi:"đề phòng, cảnh giác", example_vi:"đề phòng", frequency:"medium" },
  }},
  "体": { readings: {
    "tǐ": { meaning_zh:"身体，体育", meaning_en:"body; physical", example_zh:"身体", example_pinyin:"shēn tǐ", example_en:"body", meaning_vi:"thân thể, cơ thể", example_vi:"cơ thể", frequency:"high" },
    "tī": { meaning_zh:"体己，体贴", meaning_en:"personal savings; considerate", example_zh:"体己", example_pinyin:"tī ji", example_en:"personal savings", meaning_vi:"thể diện (trong 体己)", example_vi:"tiền riêng", frequency:"low" },
  }},
  "通": { readings: {
    "tōng": { meaning_zh:"通过，通知", meaning_en:"to pass through; to notify", example_zh:"通过", example_pinyin:"tōng guò", example_en:"to pass", meaning_vi:"thông qua, thông báo", example_vi:"thông qua", frequency:"high" },
    "tòng": { meaning_zh:"说了一通", meaning_en:"a stretch of speech (measure word)", example_zh:"说一通", example_pinyin:"shuō yī tòng", example_en:"a stretch", meaning_vi:"trận, hồi (lượng từ cho lời nói)", example_vi:"nói một hồi", frequency:"medium" },
  }},
  "驮": { readings: {
    "tuó": { meaning_zh:"驮粮食，驮载", meaning_en:"to carry on the back (animal)", example_zh:"驮粮", example_pinyin:"tuó liáng", example_en:"to carry grain", meaning_vi:"cõng, thồ (chở trên lưng)", example_vi:"thồ lương thực", frequency:"medium" },
    "duò": { meaning_zh:"驮子（驮物）", meaning_en:"pack (goods on animal)", example_zh:"驮子", example_pinyin:"duò zi", example_en:"pack/bundle", meaning_vi:"kiện hàng thồ (驮子)", example_vi:"kiện hàng thồ", frequency:"low" },
  }},
  "万": { readings: {
    "wàn": { meaning_zh:"万岁，万里", meaning_en:"ten thousand; myriad", example_zh:"万岁", example_pinyin:"wàn suì", example_en:"long live", meaning_vi:"vạn, mười nghìn", example_vi:"vạn tuế", frequency:"high" },
    "mò": { meaning_zh:"万俟（复姓）", meaning_en:"Moqi (compound surname)", example_zh:"万俟", example_pinyin:"Mò qí", example_en:"Moqi (surname)", meaning_vi:"Mặc (họ kép Mặc Kỳ)", example_vi:"Mặc Kỳ", frequency:"low" },
  }},
  "尾": { readings: {
    "wěi": { meaning_zh:"尾巴，末尾", meaning_en:"tail; end", example_zh:"尾巴", example_pinyin:"wěi ba", example_en:"tail", meaning_vi:"đuôi; phần cuối", example_vi:"cái đuôi", frequency:"high" },
    "yǐ": { meaning_zh:"马尾儿（口语）", meaning_en:"horsetail (colloq.)", example_zh:"马尾儿", example_pinyin:"mǎ yǐr", example_en:"ponytail", meaning_vi:"đuôi ngựa (khẩu ngữ, 马尾儿)", example_vi:"tóc đuôi ngựa", frequency:"medium" },
  }},
  "尉": { readings: {
    "wèi": { meaning_zh:"尉官，将尉", meaning_en:"military officer", example_zh:"尉官", example_pinyin:"wèi guān", example_en:"military officer", meaning_vi:"sĩ quan cấp úy", example_vi:"sĩ quan úy", frequency:"medium" },
    "yù": { meaning_zh:"尉迟（复姓）", meaning_en:"Yuchi (compound surname)", example_zh:"尉迟", example_pinyin:"Yù chí", example_en:"Yuchi", meaning_vi:"Uất Trì (họ kép)", example_vi:"họ Uất Trì", frequency:"low" },
  }},
  "蔚": { readings: {
    "wèi": { meaning_zh:"蔚蓝，蔚然", meaning_en:"azure; lush and grand", example_zh:"蔚蓝", example_pinyin:"wèi lán", example_en:"azure blue", meaning_vi:"xanh biếc; rực rỡ (蔚然)", example_vi:"xanh biếc", frequency:"high" },
    "yù": { meaning_zh:"河北蔚县", meaning_en:"Yu county, Hebei", example_zh:"蔚县", example_pinyin:"Yù xiàn", example_en:"Yu county", meaning_vi:"huyện Úy (Hà Bắc)", example_vi:"huyện Úy", frequency:"low" },
  }},
  "涡": { readings: {
    "wō": { meaning_zh:"旋涡，涡流", meaning_en:"whirlpool, vortex", example_zh:"旋涡", example_pinyin:"xuán wō", example_en:"whirlpool", meaning_vi:"xoáy nước", example_vi:"xoáy nước", frequency:"high" },
    "guō": { meaning_zh:"涡河（水名）", meaning_en:"Guo River (river name)", example_zh:"涡河", example_pinyin:"Guō hé", example_en:"Guo River", meaning_vi:"sông Oa (tên sông)", example_vi:"sông Oa", frequency:"low" },
  }},
  "乌": { readings: {
    "wū": { meaning_zh:"乌鸦，乌黑", meaning_en:"crow; black", example_zh:"乌鸦", example_pinyin:"wū yā", example_en:"crow", meaning_vi:"quạ; đen nhánh", example_vi:"con quạ", frequency:"high" },
    "wù": { meaning_zh:"乌拉草（植物）", meaning_en:"Ula sedge (plant)", example_zh:"乌拉草", example_pinyin:"wū la cǎo", example_en:"Ula sedge", meaning_vi:"cỏ Ula (乌拉草)", example_vi:"cỏ Ula", frequency:"low" },
  }},
  "洗": { readings: {
    "xǐ": { meaning_zh:"洗涤，洗澡", meaning_en:"to wash", example_zh:"洗澡", example_pinyin:"xǐ zǎo", example_en:"to bathe", meaning_vi:"rửa, giặt", example_vi:"tắm", frequency:"high" },
    "xiǎn": { meaning_zh:"姓洗", meaning_en:"surname Xiǎn", example_zh:"姓洗", example_pinyin:"xìng Xiǎn", example_en:"surname", meaning_vi:"họ Tiển", example_vi:"họ Tiển", frequency:"low" },
  }},
  "鲜": { readings: {
    "xiān": { meaning_zh:"新鲜，鲜花", meaning_en:"fresh, new", example_zh:"新鲜", example_pinyin:"xīn xiān", example_en:"fresh", meaning_vi:"tươi, mới", example_vi:"tươi mới", frequency:"high" },
    "xiǎn": { meaning_zh:"鲜见，鲜有", meaning_en:"rarely, seldom", example_zh:"鲜见", example_pinyin:"xiǎn jiàn", example_en:"rarely seen", meaning_vi:"hiếm, ít khi", example_vi:"hiếm thấy", frequency:"medium" },
  }},
  "铣": { readings: {
    "xiǎn": { meaning_zh:"铣铁，生铁", meaning_en:"pig iron (metallurgy)", example_zh:"铣铁", example_pinyin:"xiǎn tiě", example_en:"pig iron", meaning_vi:"gang (铣铁)", example_vi:"gang đúc", frequency:"low" },
    "xǐ": { meaning_zh:"铣床，铣削", meaning_en:"milling machine", example_zh:"铣床", example_pinyin:"xǐ chuáng", example_en:"milling machine", meaning_vi:"máy phay; phay (gia công)", example_vi:"máy phay", frequency:"medium" },
  }},
  "巷": { readings: {
    "xiàng": { meaning_zh:"小巷，巷子", meaning_en:"alley, lane", example_zh:"小巷", example_pinyin:"xiǎo xiàng", example_en:"alley", meaning_vi:"ngõ, hẻm", example_vi:"con hẻm nhỏ", frequency:"high" },
    "hàng": { meaning_zh:"巷道（矿洞）", meaning_en:"mine tunnel, shaft", example_zh:"巷道", example_pinyin:"hàng dào", example_en:"mine tunnel", meaning_vi:"đường lò (hầm mỏ)", example_vi:"đường lò", frequency:"medium" },
  }},
  "芯": { readings: {
    "xīn": { meaning_zh:"灯芯，芯片", meaning_en:"wick; core chip", example_zh:"芯片", example_pinyin:"xīn piàn", example_en:"chip (semiconductor)", meaning_vi:"bấc đèn; chip vi mạch", example_vi:"chip vi mạch", frequency:"high" },
    "xìn": { meaning_zh:"芯子（弹芯）", meaning_en:"bullet core, cartridge core", example_zh:"芯子", example_pinyin:"xìn zi", example_en:"bullet core", meaning_vi:"lõi (đạn, vật)", example_vi:"lõi đạn", frequency:"low" },
  }},
  "吁": { readings: {
    "xū": { meaning_zh:"长吁短叹", meaning_en:"to heave sighs", example_zh:"长吁", example_pinyin:"cháng xū", example_en:"to heave a sigh", meaning_vi:"thở dài (长吁短叹)", example_vi:"thở vắn than dài", frequency:"medium" },
    "yù": { meaning_zh:"呼吁，吁求", meaning_en:"to appeal, to call for", example_zh:"呼吁", example_pinyin:"hū yù", example_en:"to appeal", meaning_vi:"kêu gọi, hô hào (呼吁)", example_vi:"kêu gọi", frequency:"high" },
  }},
  "旋": { readings: {
    "xuán": { meaning_zh:"旋转，旋风", meaning_en:"to revolve; whirlwind", example_zh:"旋转", example_pinyin:"xuán zhuǎn", example_en:"to revolve", meaning_vi:"xoay, quay tròn", example_vi:"xoay tròn", frequency:"high" },
    "xuàn": { meaning_zh:"旋儿，旋涡状（口语）", meaning_en:"swirl pattern; spinning (colloq.)", example_zh:"旋儿", example_pinyin:"xuànr", example_en:"swirl/whorl", meaning_vi:"xoáy, vòng xoáy (khẩu ngữ)", example_vi:"vòng xoáy", frequency:"medium" },
  }},
  "呀": { readings: {
    "yā": { meaning_zh:"叹词，哎呀", meaning_en:"ah! (exclamation)", example_zh:"哎呀", example_pinyin:"āi yā", example_en:"oh dear!", meaning_vi:"ôi, chao (tượng thanh kinh ngạc)", example_vi:"ối chao", frequency:"high" },
    "ya": { meaning_zh:"语气助词", meaning_en:"modal particle", example_zh:"好呀", example_pinyin:"hǎo ya", example_en:"great! (modal)", meaning_vi:"trợ từ ngữ khí (= 啊)", example_vi:"tốt đấy", frequency:"high" },
  }},
  "轧": { readings: {
    "yà": { meaning_zh:"轧棉花，轧制", meaning_en:"to gin (cotton); to roll", example_zh:"轧棉花", example_pinyin:"yà mián huā", example_en:"to gin cotton", meaning_vi:"cán (bông); nghiến", example_vi:"cán bông", frequency:"medium" },
    "zhá": { meaning_zh:"轧钢，轧制", meaning_en:"to roll (steel)", example_zh:"轧钢", example_pinyin:"zhá gāng", example_en:"to roll steel", meaning_vi:"cán (thép)", example_vi:"cán thép", frequency:"high" },
  }},
  "殷": { readings: {
    "yīn": { meaning_zh:"殷勤，热情", meaning_en:"attentive, eager to serve", example_zh:"殷勤", example_pinyin:"yīn qín", example_en:"attentive", meaning_vi:"ân cần, niềm nở", example_vi:"ân cần", frequency:"high" },
    "yān": { meaning_zh:"殷红，深红", meaning_en:"dark red, crimson", example_zh:"殷红", example_pinyin:"yān hóng", example_en:"crimson", meaning_vi:"đỏ thẫm (殷红)", example_vi:"đỏ thẫm", frequency:"medium" },
    "yǐn": { meaning_zh:"殷（雷声）", meaning_en:"rumbling (of thunder)", example_zh:"殷殷", example_pinyin:"yīn yīn", example_en:"rumbling sound", meaning_vi:"ầm ầm (tiếng sấm, 殷殷)", example_vi:"sấm rền", frequency:"low" },
  }},
  "与": { readings: {
    "yǔ": { meaning_zh:"给予，赠与", meaning_en:"to give; and (conjunction)", example_zh:"与其", example_pinyin:"yǔ qí", example_en:"rather than", meaning_vi:"cho, tặng; và (liên từ)", example_vi:"thà rằng", frequency:"high" },
    "yù": { meaning_zh:"参与，与会", meaning_en:"to participate", example_zh:"参与", example_pinyin:"cān yù", example_en:"to participate", meaning_vi:"tham gia, dự", example_vi:"tham dự", frequency:"high" },
    "yú": { meaning_zh:"同（古语）", meaning_en:"same as (archaic)", example_zh:"与其", example_pinyin:"yú qí", example_en:"rather than (classical)", meaning_vi:"giống như (âm cổ)", example_vi:"với (âm cổ)", frequency:"low" },
  }},
  "雨": { readings: {
    "yǔ": { meaning_zh:"下雨，雨水", meaning_en:"rain", example_zh:"雨水", example_pinyin:"yǔ shuǐ", example_en:"rainwater", meaning_vi:"mưa", example_vi:"nước mưa", frequency:"high" },
    "yù": { meaning_zh:"雨雪（动词）", meaning_en:"to rain; to snow (verb, classical)", example_zh:"雨雪", example_pinyin:"yù xuě", example_en:"to snow/rain", meaning_vi:"rơi xuống như mưa (cổ)", example_vi:"mưa tuyết", frequency:"low" },
  }},
  "钥": { readings: {
    "yuè": { meaning_zh:"锁钥，关键", meaning_en:"key (to lock); key factor", example_zh:"锁钥", example_pinyin:"suǒ yuè", example_en:"key (to lock)", meaning_vi:"then khóa; mấu chốt (锁钥)", example_vi:"then chốt", frequency:"medium" },
    "yào": { meaning_zh:"钥匙", meaning_en:"key (physical key)", example_zh:"钥匙", example_pinyin:"yào shi", example_en:"key", meaning_vi:"chìa khóa (钥匙)", example_vi:"chìa khóa", frequency:"high" },
  }},
  "攒": { readings: {
    "zǎn": { meaning_zh:"积攒，攒钱", meaning_en:"to save up, to accumulate", example_zh:"积攒", example_pinyin:"jī zǎn", example_en:"to save up", meaning_vi:"tích cóp, dành dụm", example_vi:"dành dụm", frequency:"high" },
    "cuán": { meaning_zh:"攒聚，凑拢", meaning_en:"to gather together", example_zh:"攒聚", example_pinyin:"cuán jù", example_en:"to crowd together", meaning_vi:"tụ họp, dồn lại", example_vi:"xúm lại", frequency:"medium" },
  }},
  "栅": { readings: {
    "zhà": { meaning_zh:"栅栏，围栅", meaning_en:"fence, railing", example_zh:"栅栏", example_pinyin:"zhà lan", example_en:"fence", meaning_vi:"hàng rào", example_vi:"hàng rào", frequency:"high" },
    "shān": { meaning_zh:"栅极（电子）", meaning_en:"grid (electronics)", example_zh:"栅极", example_pinyin:"shān jí", example_en:"grid electrode", meaning_vi:"cực lưới (điện tử, 栅极)", example_vi:"cực lưới", frequency:"low" },
  }},
  "召": { readings: {
    "zhào": { meaning_zh:"召开，召集", meaning_en:"to convene, to summon", example_zh:"召开", example_pinyin:"zhào kāi", example_en:"to convene", meaning_vi:"triệu tập, mở (hội)", example_vi:"triệu tập họp", frequency:"high" },
    "shào": { meaning_zh:"姓召", meaning_en:"surname Shào", example_zh:"姓召", example_pinyin:"xìng Shào", example_en:"surname", meaning_vi:"họ Thiệu", example_vi:"họ Thiệu", frequency:"low" },
  }},
  "这": { readings: {
    "zhè": { meaning_zh:"这个，这里", meaning_en:"this", example_zh:"这个", example_pinyin:"zhè ge", example_en:"this", meaning_vi:"này, đây", example_vi:"cái này", frequency:"high" },
    "zhèi": { meaning_zh:"这（一）个", meaning_en:"this (spoken form)", example_zh:"这（一）个", example_pinyin:"zhèi ( yī ) ge", example_en:"this one", meaning_vi:"này (= 这一, khẩu ngữ)", example_vi:"cái này", frequency:"high" },
  }},
  "症": { readings: {
    "zhèng": { meaning_zh:"急症，症状", meaning_en:"symptom, ailment", example_zh:"急症", example_pinyin:"jí zhèng", example_en:"acute illness", meaning_vi:"bệnh, triệu chứng", example_vi:"bệnh cấp tính", frequency:"high" },
    "zhēng": { meaning_zh:"症结，问题", meaning_en:"crux, underlying cause", example_zh:"症结", example_pinyin:"zhēng jié", example_en:"crux of problem", meaning_vi:"chỗ bế tắc, nút thắt (症结)", example_vi:"nút thắt vấn đề", frequency:"high" },
  }},
  "挣": { readings: {
    "zhèng": { meaning_zh:"挣钱，挣得", meaning_en:"to earn (money)", example_zh:"挣钱", example_pinyin:"zhèng qián", example_en:"to earn money", meaning_vi:"kiếm (tiền); giành được", example_vi:"kiếm tiền", frequency:"high" },
    "zhēng": { meaning_zh:"挣扎，扑打", meaning_en:"to struggle, to thrash", example_zh:"挣扎", example_pinyin:"zhēng zhá", example_en:"to struggle", meaning_vi:"giãy giụa, vùng vẫy (挣扎)", example_vi:"vùng vẫy", frequency:"high" },
  }},
  "殖": { readings: {
    "zhí": { meaning_zh:"繁殖，殖民", meaning_en:"to reproduce; colony", example_zh:"繁殖", example_pinyin:"fán zhí", example_en:"to reproduce", meaning_vi:"sinh sản; thực dân", example_vi:"sinh sản", frequency:"high" },
    "shí": { meaning_zh:"骨殖（骨头）", meaning_en:"remains, bones (literary)", example_zh:"骨殖", example_pinyin:"gǔ shí", example_en:"remains", meaning_vi:"hài cốt, xương (骨殖)", example_vi:"hài cốt", frequency:"low" },
  }},
  "只": { readings: {
    "zhī": { meaning_zh:"只有，量词", meaning_en:"only; measure word (animals/objects)", example_zh:"一只猫", example_pinyin:"yī zhī māo", example_en:"one cat", meaning_vi:"con, chiếc (lượng từ)", example_vi:"một con mèo", frequency:"high" },
    "zhǐ": { meaning_zh:"只是，仅仅", meaning_en:"only, just", example_zh:"只是", example_pinyin:"zhǐ shì", example_en:"but, only", meaning_vi:"chỉ, chỉ có", example_vi:"chỉ là", frequency:"high" },
  }},
  "峙": { readings: {
    "zhì": { meaning_zh:"对峙，屹立", meaning_en:"to stand face-to-face; to stand firm", example_zh:"对峙", example_pinyin:"duì zhì", example_en:"standoff", meaning_vi:"đối lập, sừng sững (对峙)", example_vi:"đối đầu", frequency:"medium" },
    "shì": { meaning_zh:"繁峙（地名）", meaning_en:"Fanshi (place name)", example_zh:"繁峙", example_pinyin:"Fán shì", example_en:"Fanshi county", meaning_vi:"Phồn Trĩ (địa danh)", example_vi:"huyện Phồn Trĩ", frequency:"low" },
  }},
  "种": { readings: {
    "zhǒng": { meaning_zh:"种子，种类", meaning_en:"seed; species; kind", example_zh:"种子", example_pinyin:"zhǒng zi", example_en:"seed", meaning_vi:"loại, giống, hạt giống", example_vi:"hạt giống", frequency:"high" },
    "zhòng": { meaning_zh:"种田，种植", meaning_en:"to plant, to cultivate", example_zh:"种田", example_pinyin:"zhòng tián", example_en:"to farm", meaning_vi:"trồng, gieo", example_vi:"trồng ruộng", frequency:"high" },
    "chóng": { meaning_zh:"姓种", meaning_en:"surname Chóng", example_zh:"姓种", example_pinyin:"xìng Chóng", example_en:"surname", meaning_vi:"họ Trùng (họ Trung Quốc)", example_vi:"họ Trùng", frequency:"low" },
  }},
  "椎": { readings: {
    "zhuī": { meaning_zh:"脊椎骨，椎骨", meaning_en:"vertebra, spine", example_zh:"脊椎", example_pinyin:"jǐ zhuī", example_en:"spine", meaning_vi:"đốt sống", example_vi:"cột sống", frequency:"high" },
    "chuí": { meaning_zh:"铁椎，锤击", meaning_en:"mace; to hammer", example_zh:"铁椎", example_pinyin:"tiě chuí", example_en:"iron mace", meaning_vi:"búa, chùy sắt", example_vi:"chùy sắt", frequency:"medium" },
  }},
  "仔": { readings: {
    "zǐ": { meaning_zh:"仔细，仔肩", meaning_en:"careful; to shoulder (responsibility)", example_zh:"仔细", example_pinyin:"zǐ xī", example_en:"careful", meaning_vi:"tỉ mỉ, kỹ lưỡng", example_vi:"tỉ mỉ", frequency:"high" },
    "zǎi": { meaning_zh:"牛仔，小崽", meaning_en:"calf; young (Cantonese-influenced)", example_zh:"牛仔", example_pinyin:"niú zǎi", example_en:"cowboy/calf", meaning_vi:"chàng (cao bồi); con (thú nhỏ)", example_vi:"cao bồi", frequency:"high" },
    "zī": { meaning_zh:"仔肩（担负）", meaning_en:"to shoulder (formal/classical)", example_zh:"仔肩", example_pinyin:"zī jiān", example_en:"to bear a burden", meaning_vi:"gánh vác (仔肩, văn cổ)", example_vi:"gánh vác trọng trách", frequency:"low" },
  }},
  "大": { readings: {
    "dà": { meaning_zh:"大小，巨大", meaning_en:"big, large", example_zh:"大家", example_pinyin:"dà jiā", example_en:"everyone", meaning_vi:"to, lớn", example_vi:"mọi người", frequency:"high" },
    "dài": { meaning_zh:"大夫（医生）", meaning_en:"doctor (archaic/formal)", example_zh:"大夫", example_pinyin:"dài fu", example_en:"doctor", meaning_vi:"lớn (trong 大夫 — bác sĩ)", example_vi:"thầy thuốc", frequency:"medium" },
  }},
  "打": { readings: {
    "dǎ": { meaning_zh:"打击，打电话", meaning_en:"to hit, to make a call", example_zh:"打电话", example_pinyin:"dǎ diàn huà", example_en:"to make a phone call", meaning_vi:"đánh, gọi (điện thoại)", example_vi:"gọi điện thoại", frequency:"high" },
    "dá": { meaning_zh:"一打（十二个）", meaning_en:"a dozen", example_zh:"一打", example_pinyin:"yī dá", example_en:"a dozen", meaning_vi:"tá (12 cái — phiên âm dozen)", example_vi:"một tá", frequency:"medium" },
  }},
  "下": { readings: {
    "xià": { meaning_zh:"下面，下去", meaning_en:"below, to go down", example_zh:"下面", example_pinyin:"xià miàn", example_en:"below, underneath", meaning_vi:"dưới, đi xuống", example_vi:"phía dưới", frequency:"high" },
    "xia": { meaning_zh:"下（轻声，动态助词）", meaning_en:"(light tone particle after verbs)", example_zh:"坐下", example_pinyin:"zuò xia", example_en:"sit down", meaning_vi:"(khinh thanh — sau động từ)", example_vi:"ngồi xuống", frequency:"high" },
  }},
  "车": { readings: {
    "chē": { meaning_zh:"汽车，车辆", meaning_en:"vehicle, car", example_zh:"汽车", example_pinyin:"qì chē", example_en:"car, automobile", meaning_vi:"xe, xe cộ", example_vi:"ô tô", frequency:"high" },
    "jū": { meaning_zh:"象棋中的车", meaning_en:"chariot (in Chinese chess)", example_zh:"车马", example_pinyin:"jū mǎ", example_en:"chariot and horse (chess)", meaning_vi:"quân xe (trong cờ tướng)", example_vi:"xe (cờ tướng)", frequency:"low" },
  }},
  "画": { readings: {
    "huà": { meaning_zh:"画画，图画", meaning_en:"to draw, picture", example_zh:"画画", example_pinyin:"huà huà", example_en:"to draw a picture", meaning_vi:"vẽ, bức tranh", example_vi:"vẽ tranh", frequency:"high" },
    "huā": { meaning_zh:"画十字（古语）", meaning_en:"to make a cross mark (classical)", example_zh:"画十字", example_pinyin:"huā shí zì", example_en:"to make a cross", meaning_vi:"vẽ chữ thập (cổ)", example_vi:"vạch chữ thập", frequency:"low" },
  }},
  "苦": { readings: {
    "kǔ": { meaning_zh:"痛苦，苦味", meaning_en:"bitter, suffering", example_zh:"痛苦", example_pinyin:"tòng kǔ", example_en:"pain, suffering", meaning_vi:"đắng; khổ, đau khổ", example_vi:"đau khổ", frequency:"high" },
    "gǔ": { meaning_zh:"苦（古音，地名用）", meaning_en:"archaic reading in place names", example_zh:"苦县", example_pinyin:"gǔ xiàn", example_en:"Guxian (ancient place name)", meaning_vi:"âm cổ dùng trong địa danh", example_vi:"huyện Khổ (cổ)", frequency:"low" },
  }},
  "约": { readings: {
    "yuē": { meaning_zh:"约定，大约", meaning_en:"approximately, to agree", example_zh:"约定", example_pinyin:"yuē dìng", example_en:"to agree upon, appointment", meaning_vi:"hẹn ước, khoảng chừng", example_vi:"hẹn ước", frequency:"high" },
    "yāo": { meaning_zh:"约束，用秤称量", meaning_en:"to restrain, to weigh (classical)", example_zh:"约束", example_pinyin:"yāo shù", example_en:"to restrain (classical)", meaning_vi:"ràng buộc; cân (đo trọng lượng)", example_vi:"ràng buộc", frequency:"low" },
  }},
  "装": { readings: {
    "zhuāng": { meaning_zh:"装扮，衣装", meaning_en:"to dress up, clothing", example_zh:"服装", example_pinyin:"fú zhuāng", example_en:"clothing, costume", meaning_vi:"trang điểm; trang phục", example_vi:"trang phục", frequency:"high" },
    "zhuàng": { meaning_zh:"装（方言/旧音）", meaning_en:"dialectal/archaic variant", example_zh:"行装", example_pinyin:"xíng zhuàng", example_en:"travel luggage (variant)", meaning_vi:"biến thể phương ngữ/âm cũ", example_vi:"hành trang (biến thể)", frequency:"low" },
  }},
  "著": { readings: {
    "zhù": { meaning_zh:"著作，著名", meaning_en:"to write, famous", example_zh:"著名", example_pinyin:"zhù míng", example_en:"famous, well-known", meaning_vi:"trước tác; nổi tiếng", example_vi:"nổi tiếng", frequency:"high" },
    "zhe": { meaning_zh:"看着，走着", meaning_en:"(progressive/state particle)", example_zh:"看着", example_pinyin:"kàn zhe", example_en:"watching", meaning_vi:"trợ từ thể (đang/tiếp diễn)", example_vi:"đang nhìn", frequency:"high" },
    "zháo": { meaning_zh:"着火，着急", meaning_en:"to catch (fire/cold), anxious", example_zh:"着火", example_pinyin:"zháo huǒ", example_en:"to catch fire", meaning_vi:"bắt (lửa); sốt ruột", example_vi:"bắt lửa", frequency:"medium" },
    "zhuó": { meaning_zh:"着手，着力", meaning_en:"to apply, to set about", example_zh:"着手", example_pinyin:"zhuó shǒu", example_en:"to set about doing", meaning_vi:"bắt tay vào, dồn sức", example_vi:"bắt tay vào", frequency:"medium" },
  }},
  "颤": { readings: {
    "chàn": { meaning_zh:"颤抖，颤动", meaning_en:"to tremble, to shiver", example_zh:"颤抖", example_pinyin:"chàn dǒu", example_en:"to tremble, to shiver", meaning_vi:"run rẩy, rung động", example_vi:"run rẩy", frequency:"high" },
    "zhàn": { meaning_zh:"颤（多用于颤栗）", meaning_en:"to shudder (used in 颤栗)", example_zh:"颤栗", example_pinyin:"zhàn lì", example_en:"to shudder with fear", meaning_vi:"run sợ (dùng trong 颤栗)", example_vi:"run sợ", frequency:"medium" },
  }},

  // ── Newly added polyphones (enriched) ───────────────────────
  "谁": { readings: {
    "shéi": { meaning_zh:"谁（口语常用）",     meaning_en:"who (colloquial)",            example_zh:"是谁？", example_pinyin:"shì shéi", example_en:"who is it?", meaning_vi:"ai (khẩu ngữ)", example_vi:"là ai?", frequency:"high"   },
    "shuí": { meaning_zh:"谁（书面语/正式）",   meaning_en:"who (formal/literary)",       example_zh:"舍我其谁", example_pinyin:"shě wǒ qí shuí", example_en:"who but me (idiom)", meaning_vi:"ai (văn viết, trang trọng)", example_vi:"ngoài ta còn ai", frequency:"medium" },
  }},
  "佛": { readings: {
    "fó": { meaning_zh:"佛陀，佛教",           meaning_en:"Buddha; Buddhism",            example_zh:"佛教", example_pinyin:"fó jiào", example_en:"Buddhism", meaning_vi:"Phật, đạo Phật", example_vi:"đạo Phật", frequency:"high"   },
    "fú": { meaning_zh:"仿佛，似乎",           meaning_en:"seemingly (in 仿佛)",         example_zh:"仿佛", example_pinyin:"fǎng fú", example_en:"as if, seemingly", meaning_vi:"phảng phất, dường như (trong 仿佛)", example_vi:"phảng phất", frequency:"high"   },
  }},
  "率": { readings: {
    "lǜ":    { meaning_zh:"比率，效率",       meaning_en:"rate, ratio",                 example_zh:"效率", example_pinyin:"xiào lǜ", example_en:"efficiency", meaning_vi:"tỉ lệ, hiệu suất", example_vi:"hiệu suất", frequency:"high"   },
    "shuài": { meaning_zh:"率领，坦率",       meaning_en:"to lead; frank",              example_zh:"率领", example_pinyin:"shuài lǐng", example_en:"to lead, to command", meaning_vi:"dẫn dắt; thẳng thắn", example_vi:"dẫn dắt", frequency:"high"   },
  }},
  "剥": { readings: {
    "bāo": { meaning_zh:"剥（口语，剥皮）",    meaning_en:"to peel (colloquial)",        example_zh:"剥皮", example_pinyin:"bāo pí", example_en:"to peel (the skin)", meaning_vi:"lột, bóc vỏ (khẩu ngữ)", example_vi:"lột da", frequency:"high"   },
    "bō":  { meaning_zh:"剥削，剥夺（书面）",  meaning_en:"to exploit, to deprive (formal)", example_zh:"剥削", example_pinyin:"bō xuē", example_en:"to exploit", meaning_vi:"bóc lột, tước đoạt (văn viết)", example_vi:"bóc lột", frequency:"high"   },
  }},
  "削": { readings: {
    "xiāo": { meaning_zh:"削（口语，削皮）",   meaning_en:"to pare, to peel (colloquial)", example_zh:"削苹果", example_pinyin:"xiāo píng guǒ", example_en:"to peel an apple", meaning_vi:"gọt, vót (khẩu ngữ)", example_vi:"gọt táo", frequency:"high" },
    "xuē":  { meaning_zh:"削减，剥削（书面）", meaning_en:"to cut down; to exploit (formal)", example_zh:"削减", example_pinyin:"xuē jiǎn", example_en:"to reduce, to cut", meaning_vi:"cắt giảm; bóc lột (văn viết)", example_vi:"cắt giảm", frequency:"high" },
  }},
  "炸": { readings: {
    "zhá": { meaning_zh:"油炸（烹饪）",        meaning_en:"to deep-fry",                 example_zh:"炸鸡", example_pinyin:"zhá jī", example_en:"fried chicken", meaning_vi:"rán, chiên ngập dầu", example_vi:"gà rán", frequency:"high"   },
    "zhà": { meaning_zh:"爆炸，炸弹",          meaning_en:"to explode; bomb",            example_zh:"爆炸", example_pinyin:"bào zhà", example_en:"explosion", meaning_vi:"nổ, bom", example_vi:"nổ tung", frequency:"high"   },
  }},
  "蒙": { readings: {
    "mēng": { meaning_zh:"蒙骗，蒙人",         meaning_en:"to cheat, to deceive",        example_zh:"蒙骗", example_pinyin:"mēng piàn", example_en:"to deceive", meaning_vi:"lừa gạt, lừa dối", example_vi:"lừa gạt", frequency:"high"   },
    "méng": { meaning_zh:"蒙受，蒙古",         meaning_en:"to cover; to suffer; Mongolia", example_zh:"蒙古", example_pinyin:"méng gǔ", example_en:"Mongolia", meaning_vi:"che; chịu (ơn); Mông Cổ", example_vi:"Mông Cổ", frequency:"high"   },
    "měng": { meaning_zh:"蒙古族（专用）",     meaning_en:"Mongolian (ethnic, specific reading)", example_zh:"蒙族", example_pinyin:"měng zú", example_en:"Mongolian ethnicity", meaning_vi:"dân tộc Mông (âm chuyên dụng)", example_vi:"dân tộc Mông", frequency:"medium" },
  }},
  "扇": { readings: {
    "shān": { meaning_zh:"扇（动作，煽动）",   meaning_en:"to fan (verb); to incite",    example_zh:"扇风", example_pinyin:"shān fēng", example_en:"to fan", meaning_vi:"quạt (động từ); kích động", example_vi:"quạt gió", frequency:"high"   },
    "shàn": { meaning_zh:"扇子（名词）",       meaning_en:"a fan (noun)",                example_zh:"扇子", example_pinyin:"shàn zi", example_en:"hand fan", meaning_vi:"cái quạt (danh từ)", example_vi:"cái quạt", frequency:"high"   },
  }},
  "校": { readings: {
    "xiào": { meaning_zh:"学校，校园",         meaning_en:"school",                      example_zh:"学校", example_pinyin:"xué xiào", example_en:"school", meaning_vi:"trường học", example_vi:"trường học", frequency:"high"   },
    "jiào": { meaning_zh:"校对，校正",         meaning_en:"to proofread, to check",      example_zh:"校对", example_pinyin:"jiào duì", example_en:"to proofread", meaning_vi:"đối chiếu, hiệu đính", example_vi:"hiệu đính", frequency:"medium" },
  }},
  "脉": { readings: {
    "mài": { meaning_zh:"脉搏，山脉",          meaning_en:"pulse; vein; mountain range", example_zh:"脉搏", example_pinyin:"mài bó", example_en:"pulse (heartbeat)", meaning_vi:"mạch (máu); mạch núi; nhịp đập", example_vi:"mạch đập", frequency:"high"   },
    "mò":  { meaning_zh:"脉脉（含情）",        meaning_en:"in 脉脉 — expressing affection silently", example_zh:"脉脉含情", example_pinyin:"mò mò hán qíng", example_en:"full of silent affection", meaning_vi:"đắm đuối, trìu mến (脉脉)", example_vi:"đắm đuối tình cảm", frequency:"medium" },
  }},
  "载": { readings: {
    "zǎi": { meaning_zh:"年，记载",            meaning_en:"year; to record",             example_zh:"记载", example_pinyin:"jì zǎi", example_en:"to record, record", meaning_vi:"năm; ghi chép", example_vi:"ghi chép", frequency:"high"   },
    "zài": { meaning_zh:"载货，装载",          meaning_en:"to carry, to load",           example_zh:"装载", example_pinyin:"zhuāng zài", example_en:"to load (cargo)", meaning_vi:"chở, chuyên chở", example_vi:"chất hàng", frequency:"high"   },
  }},
  "抢": { readings: {
    "qiāng": { meaning_zh:"抢（呛、撞，古/方言）", meaning_en:"to bump against (rare/classical)", example_zh:"呼天抢地", example_pinyin:"hū tiān qiāng dì", example_en:"to wail in grief (idiom)", meaning_vi:"đập, đâm vào (cổ/phương ngữ)", example_vi:"kêu trời than đất", frequency:"low" },
    "qiǎng": { meaning_zh:"抢夺，抢救",        meaning_en:"to rob, to rush to",          example_zh:"抢救", example_pinyin:"qiǎng jiù", example_en:"to rescue", meaning_vi:"cướp, giành; cấp cứu", example_vi:"cấp cứu", frequency:"high"   },
  }},
  "埋": { readings: {
    "mái": { meaning_zh:"埋藏，埋葬",          meaning_en:"to bury",                     example_zh:"埋葬", example_pinyin:"mái zàng", example_en:"to bury", meaning_vi:"chôn, vùi lấp", example_vi:"chôn cất", frequency:"high"   },
    "mán": { meaning_zh:"埋怨（抱怨）",        meaning_en:"to complain (in 埋怨)",       example_zh:"埋怨", example_pinyin:"mán yuàn", example_en:"to complain, to blame", meaning_vi:"oán trách (trong 埋怨)", example_vi:"oán trách", frequency:"high"   },
  }},
  "柏": { readings: {
    "bǎi": { meaning_zh:"柏树，松柏",          meaning_en:"cypress tree",                example_zh:"松柏", example_pinyin:"sōng bǎi", example_en:"pine and cypress", meaning_vi:"cây bách (tùng bách)", example_vi:"tùng bách", frequency:"high"   },
    "bó":  { meaning_zh:"柏林（地名）",        meaning_en:"used in 柏林 (Berlin)",       example_zh:"柏林", example_pinyin:"bó lín", example_en:"Berlin", meaning_vi:"Béc (trong Béc-lin)", example_vi:"Béc-lin", frequency:"medium" },
    "bò":  { meaning_zh:"黄柏（中药）",        meaning_en:"Amur cork tree (herbal medicine)", example_zh:"黄柏", example_pinyin:"huáng bò", example_en:"Amur cork (TCM)", meaning_vi:"hoàng bá (vị thuốc bắc)", example_vi:"hoàng bá (thuốc)", frequency:"low"    },
  }},
  "茄": { readings: {
    "qié": { meaning_zh:"茄子，番茄",          meaning_en:"eggplant; tomato",            example_zh:"茄子", example_pinyin:"qié zi", example_en:"eggplant", meaning_vi:"cà, cà chua", example_vi:"cà tím", frequency:"high"   },
    "jiā": { meaning_zh:"雪茄（音译）",        meaning_en:"used in 雪茄 (cigar, loanword)", example_zh:"雪茄", example_pinyin:"xuě jiā", example_en:"cigar", meaning_vi:"xì gà (phiên âm, 雪茄)", example_vi:"xì gà", frequency:"medium" },
  }},
  "缩": { readings: {
    "suō": { meaning_zh:"缩小，收缩",          meaning_en:"to shrink, to contract",      example_zh:"缩小", example_pinyin:"suō xiǎo", example_en:"to reduce, to shrink", meaning_vi:"thu nhỏ, co lại", example_vi:"thu nhỏ", frequency:"high"   },
    "sù":  { meaning_zh:"缩砂（中药名）",      meaning_en:"used in 缩砂 (medicinal herb)", example_zh:"缩砂", example_pinyin:"sù shā", example_en:"Amomum (TCM)", meaning_vi:"súc sa (vị thuốc bắc)", example_vi:"súc sa (thuốc)", frequency:"low"    },
  }},
  "吓": { readings: {
    "xià": { meaning_zh:"吓唬，吓人",          meaning_en:"to scare, to frighten",       example_zh:"吓人", example_pinyin:"xià rén", example_en:"scary, frightening", meaning_vi:"dọa, làm sợ", example_vi:"đáng sợ", frequency:"high"   },
    "hè":  { meaning_zh:"恐吓，威吓（书面）",  meaning_en:"to threaten (formal)",        example_zh:"恐吓", example_pinyin:"kǒng hè", example_en:"to intimidate, to threaten", meaning_vi:"đe dọa (văn viết)", example_vi:"hăm dọa", frequency:"medium" },
  }},
  "粘": { readings: {
    "nián": { meaning_zh:"粘稠，粘性（形容词）", meaning_en:"sticky, viscous (adj.)",    example_zh:"粘稠", example_pinyin:"nián chóu", example_en:"viscous, sticky", meaning_vi:"dính, sánh (tính từ)", example_vi:"đặc sánh", frequency:"high"   },
    "zhān": { meaning_zh:"粘贴，粘住（动词）",  meaning_en:"to stick, to paste (verb)",  example_zh:"粘贴", example_pinyin:"zhān tiē", example_en:"to paste, to stick", meaning_vi:"dán, dính vào (động từ)", example_vi:"dán lên", frequency:"high"   },
  }},
  "畜": { readings: {
    "chù": { meaning_zh:"家畜，牲畜（名词）",  meaning_en:"livestock, domestic animal (noun)", example_zh:"家畜", example_pinyin:"jiā chù", example_en:"livestock", meaning_vi:"gia súc, vật nuôi (danh từ)", example_vi:"gia súc", frequency:"high"   },
    "xù":  { meaning_zh:"畜养，畜牧（动词）",  meaning_en:"to raise (animals); husbandry (verb)", example_zh:"畜牧", example_pinyin:"xù mù", example_en:"animal husbandry", meaning_vi:"chăn nuôi (động từ)", example_vi:"chăn nuôi", frequency:"high"   },
  }},
  "芥": { readings: {
    "jiè": { meaning_zh:"芥菜，芥末",          meaning_en:"mustard plant; mustard",      example_zh:"芥末", example_pinyin:"jiè mò", example_en:"mustard (condiment)", meaning_vi:"cây cải; mù tạt", example_vi:"mù tạt", frequency:"high"   },
    "gài": { meaning_zh:"芥蓝（蔬菜）",        meaning_en:"used in 芥蓝 (Chinese kale)", example_zh:"芥蓝", example_pinyin:"gài lán", example_en:"Chinese kale", meaning_vi:"cải làn (trong 芥蓝)", example_vi:"cải làn", frequency:"medium" },
  }},

  "仇": { readings: {
    "chóu": { meaning_zh:"仇敌，仇恨", meaning_en:"enemy, hatred", example_zh:"仇敌", example_pinyin:"chóu dí", example_en:"enemy", meaning_vi:"kẻ thù, thù hận", example_vi:"kẻ thù", frequency:"medium" },
    "qiú": { meaning_zh:"姓仇", meaning_en:"surname Qiu", example_zh:"姓仇", example_pinyin:"xìng Qiú", example_en:"surname Qiu", meaning_vi:"họ Cừu", example_vi:"họ Cừu", frequency:"medium" },
  }},
  "令": { readings: {
    "lìng": { meaning_zh:"命令，口令", meaning_en:"order, command", example_zh:"命令", example_pinyin:"mìng lìng", example_en:"order", meaning_vi:"mệnh lệnh", example_vi:"mệnh lệnh", frequency:"medium" },
    "líng": { meaning_zh:"一令纸（量词）", meaning_en:"ream (of paper)", example_zh:"一令纸", example_pinyin:"yī líng zhǐ", example_en:"a ream of paper", meaning_vi:"ream giấy (lượng từ)", example_vi:"một ream giấy", frequency:"medium" },
  }},
  "伺": { readings: {
    "sì": { meaning_zh:"伺机，窥伺", meaning_en:"to watch for, to spy", example_zh:"伺机", example_pinyin:"sì jī", example_en:"to watch for a chance", meaning_vi:"rình, chờ cơ hội", example_vi:"chờ thời cơ", frequency:"medium" },
    "cì": { meaning_zh:"伺候", meaning_en:"to wait upon, to serve", example_zh:"伺候", example_pinyin:"cì hou", example_en:"to wait upon", meaning_vi:"hầu hạ, phục vụ", example_vi:"hầu hạ", frequency:"medium" },
  }},
  "侗": { readings: {
    "dòng": { meaning_zh:"侗族", meaning_en:"Dong ethnic group", example_zh:"侗族", example_pinyin:"Dòng zú", example_en:"Dong ethnic group", meaning_vi:"dân tộc Đồng", example_vi:"dân tộc Đồng", frequency:"medium" },
    "tóng": { meaning_zh:"幼稚无知（倥侗）", meaning_en:"ignorant, childish", example_zh:"倥侗", example_pinyin:"kōng tóng", example_en:"ignorant", meaning_vi:"ngây ngô, vô tri", example_vi:"ngây ngô", frequency:"medium" },
  }},
  "侥": { readings: {
    "jiǎo": { meaning_zh:"侥幸", meaning_en:"lucky, by fluke", example_zh:"侥幸", example_pinyin:"jiǎo xìng", example_en:"by luck", meaning_vi:"may mắn (cầu may)", example_vi:"may mắn", frequency:"medium" },
    "yáo": { meaning_zh:"僬侥（古代传说矮人）", meaning_en:"Jiaoyao (legendary dwarf)", example_zh:"僬侥", example_pinyin:"jiāo yáo", example_en:"legendary dwarf", meaning_vi:"người lùn (truyền thuyết)", example_vi:"người lùn cổ", frequency:"medium" },
  }},
  "刺": { readings: {
    "cì": { meaning_zh:"刺杀，讽刺", meaning_en:"to stab, to satirize", example_zh:"刺杀", example_pinyin:"cì shā", example_en:"to assassinate", meaning_vi:"đâm; châm biếm", example_vi:"ám sát", frequency:"medium" },
    "cī": { meaning_zh:"刺溜（象声词）", meaning_en:"(sound of slipping)", example_zh:"刺溜", example_pinyin:"cī liū", example_en:"(slipping sound)", meaning_vi:"soạt (tượng thanh trượt)", example_vi:"tiếng soạt", frequency:"medium" },
  }},
  "剿": { readings: {
    "jiǎo": { meaning_zh:"剿匪，围剿", meaning_en:"to suppress, to exterminate", example_zh:"剿匪", example_pinyin:"jiǎo fěi", example_en:"to suppress bandits", meaning_vi:"tiễu trừ, dẹp loạn", example_vi:"tiễu phỉ", frequency:"medium" },
    "chāo": { meaning_zh:"剿说（抄袭别人言论）", meaning_en:"to plagiarize", example_zh:"剿说", example_pinyin:"chāo shuō", example_en:"to plagiarize words", meaning_vi:"đạo lời người khác", example_vi:"đạo lời", frequency:"medium" },
  }},
  "厂": { readings: {
    "chǎng": { meaning_zh:"工厂，厂房", meaning_en:"factory", example_zh:"工厂", example_pinyin:"gōng chǎng", example_en:"factory", meaning_vi:"nhà máy, xưởng", example_vi:"nhà máy", frequency:"medium" },
    "ān": { meaning_zh:"同\"庵\"，多用于人名", meaning_en:"(variant of 庵, used in names)", example_zh:"（人名用）", example_pinyin:"ān", example_en:"(used in names)", meaning_vi:"như chữ 庵 (dùng trong tên)", example_vi:"dùng trong tên người", frequency:"medium" },
  }},
  "吗": { readings: {
    "ma": { meaning_zh:"语气助词（疑问）", meaning_en:"question particle", example_zh:"是吗", example_pinyin:"shì ma", example_en:"is it?", meaning_vi:"trợ từ nghi vấn", example_vi:"phải không", frequency:"medium" },
    "má": { meaning_zh:"有吗事（方言：什么）", meaning_en:"what (dialect)", example_zh:"干吗", example_pinyin:"gàn má", example_en:"what for (dialect)", meaning_vi:"gì (phương ngữ)", example_vi:"làm gì", frequency:"medium" },
    "mǎ": { meaning_zh:"吗啡", meaning_en:"morphine", example_zh:"吗啡", example_pinyin:"mǎ fēi", example_en:"morphine", meaning_vi:"moóc-phin", example_vi:"moóc-phin", frequency:"medium" },
  }},
  "吭": { readings: {
    "háng": { meaning_zh:"引吭高歌", meaning_en:"throat (to sing loudly)", example_zh:"引吭高歌", example_pinyin:"yǐn háng gāo gē", example_en:"to sing loudly", meaning_vi:"cổ họng (cất cao giọng)", example_vi:"cất cao giọng hát", frequency:"medium" },
    "kēng": { meaning_zh:"一声不吭", meaning_en:"to utter (a sound)", example_zh:"一声不吭", example_pinyin:"yī shēng bù kēng", example_en:"not to utter a word", meaning_vi:"thốt ra (tiếng)", example_vi:"không nói một lời", frequency:"medium" },
  }},
  "吵": { readings: {
    "chǎo": { meaning_zh:"争吵，吵闹", meaning_en:"to quarrel, noisy", example_zh:"争吵", example_pinyin:"zhēng chǎo", example_en:"to quarrel", meaning_vi:"cãi nhau, ồn ào", example_vi:"cãi nhau", frequency:"medium" },
    "chāo": { meaning_zh:"吵吵（方言：喧哗）", meaning_en:"to make noise (dialect)", example_zh:"吵吵", example_pinyin:"chāo chao", example_en:"to clamor (dialect)", meaning_vi:"la ó (phương ngữ)", example_vi:"nhốn nháo", frequency:"medium" },
  }},
  "哦": { readings: {
    "ó": { meaning_zh:"叹词（疑问语气）", meaning_en:"oh? (questioning)", example_zh:"哦，是吗", example_pinyin:"ó, shì ma", example_en:"oh, really?", meaning_vi:"ồ? (nghi vấn)", example_vi:"ồ, vậy à", frequency:"medium" },
    "ò": { meaning_zh:"叹词（领悟语气）", meaning_en:"oh! (realization)", example_zh:"哦，知道了", example_pinyin:"ò, zhī dào le", example_en:"oh, I see", meaning_vi:"à (hiểu ra)", example_vi:"à, hiểu rồi", frequency:"medium" },
    "é": { meaning_zh:"吟哦（吟咏）", meaning_en:"to chant (poetry)", example_zh:"吟哦", example_pinyin:"yín é", example_en:"to chant poetry", meaning_vi:"ngâm vịnh (thơ)", example_vi:"ngâm thơ", frequency:"medium" },
  }},
  "唬": { readings: {
    "hǔ": { meaning_zh:"唬人（吓唬）", meaning_en:"to scare, to bluff", example_zh:"唬人", example_pinyin:"hǔ rén", example_en:"to scare people", meaning_vi:"dọa nạt", example_vi:"dọa người", frequency:"medium" },
    "xià": { meaning_zh:"同\"吓\"xià", meaning_en:"(variant of 吓)", example_zh:"唬一跳", example_pinyin:"xià yī tiào", example_en:"to startle", meaning_vi:"như chữ 吓 (dọa)", example_vi:"giật mình", frequency:"medium" },
  }},
  "啦": { readings: {
    "la": { meaning_zh:"语气助词", meaning_en:"sentence-final particle", example_zh:"好啦", example_pinyin:"hǎo la", example_en:"ok then", meaning_vi:"trợ từ ngữ khí", example_vi:"được rồi nhé", frequency:"medium" },
    "lā": { meaning_zh:"哩哩啦啦（象声）", meaning_en:"(scattered, sporadic)", example_zh:"哩哩啦啦", example_pinyin:"lī li lā lā", example_en:"scattered, sporadic", meaning_vi:"lác đác, rải rác", example_vi:"lác đác", frequency:"medium" },
  }},
  "喳": { readings: {
    "zhā": { meaning_zh:"喳喳叫（鸟声）", meaning_en:"chirp (bird sound)", example_zh:"喳喳叫", example_pinyin:"zhā zhā jiào", example_en:"to chirp", meaning_vi:"ríu rít (tiếng chim)", example_vi:"chim ríu rít", frequency:"medium" },
    "chā": { meaning_zh:"打喳喳（低声说话）", meaning_en:"to whisper", example_zh:"打喳喳", example_pinyin:"dǎ chā cha", example_en:"to whisper", meaning_vi:"thì thầm", example_vi:"nói thì thầm", frequency:"medium" },
  }},
  "嘘": { readings: {
    "xū": { meaning_zh:"嘘唏，叹气", meaning_en:"to sigh, to exhale", example_zh:"嘘唏", example_pinyin:"xū xī", example_en:"to sob, to sigh", meaning_vi:"thở dài, sụt sùi", example_vi:"thở dài", frequency:"medium" },
    "shī": { meaning_zh:"叹词（制止声）", meaning_en:"shh! (interjection)", example_zh:"嘘，别说话", example_pinyin:"shī, bié shuō huà", example_en:"shh, be quiet", meaning_vi:"suỵt (ra hiệu im)", example_vi:"suỵt, đừng nói", frequency:"medium" },
  }},
  "埔": { readings: {
    "pǔ": { meaning_zh:"黄埔（地名）", meaning_en:"Huangpu (place name)", example_zh:"黄埔", example_pinyin:"Huáng pǔ", example_en:"Huangpu", meaning_vi:"Hoàng Phố (địa danh)", example_vi:"Hoàng Phố", frequency:"medium" },
    "bù": { meaning_zh:"大埔（地名）", meaning_en:"Dabu (place name)", example_zh:"大埔", example_pinyin:"Dà bù", example_en:"Dabu", meaning_vi:"Đại Bộ (địa danh)", example_vi:"Đại Bộ", frequency:"medium" },
  }},
  "姥": { readings: {
    "mǔ": { meaning_zh:"老妇（褓姆）", meaning_en:"old woman", example_zh:"姥姆", example_pinyin:"mǔ mǔ", example_en:"old woman", meaning_vi:"bà lão", example_vi:"bà lão", frequency:"medium" },
    "lǎo": { meaning_zh:"姥姥（外婆）", meaning_en:"maternal grandmother", example_zh:"姥姥", example_pinyin:"lǎo lao", example_en:"grandma (maternal)", meaning_vi:"bà ngoại", example_vi:"bà ngoại", frequency:"medium" },
  }},
  "尺": { readings: {
    "chǐ": { meaning_zh:"尺寸，尺子", meaning_en:"ruler, a foot (unit)", example_zh:"尺寸", example_pinyin:"chǐ cùn", example_en:"size, measurement", meaning_vi:"thước, kích thước", example_vi:"kích thước", frequency:"medium" },
    "chě": { meaning_zh:"乐谱记音符号之一", meaning_en:"a note in gongche notation", example_zh:"工尺谱", example_pinyin:"gōng chě pǔ", example_en:"gongche notation", meaning_vi:"ký hiệu nhạc phổ cổ", example_vi:"nốt nhạc phổ cổ", frequency:"medium" },
  }},
  "尿": { readings: {
    "niào": { meaning_zh:"撒尿，尿液", meaning_en:"urine, to urinate", example_zh:"撒尿", example_pinyin:"sā niào", example_en:"to urinate", meaning_vi:"đi tiểu, nước tiểu", example_vi:"đi tiểu", frequency:"medium" },
    "suī": { meaning_zh:"尿脬（膀胱）", meaning_en:"bladder (colloquial)", example_zh:"尿脬", example_pinyin:"suī pao", example_en:"bladder", meaning_vi:"bàng quang (khẩu ngữ)", example_vi:"bàng quang", frequency:"medium" },
  }},
  "崎": { readings: {
    "qí": { meaning_zh:"崎岖（山路不平）", meaning_en:"rugged, rough", example_zh:"崎岖", example_pinyin:"qí qū", example_en:"rugged", meaning_vi:"gập ghềnh, khúc khuỷu", example_vi:"gập ghềnh", frequency:"medium" },
    "qī": { meaning_zh:"嵚崎（高峻）", meaning_en:"towering (variant)", example_zh:"嵚崎", example_pinyin:"qīn qī", example_en:"towering", meaning_vi:"cao chót vót (biến âm)", example_vi:"cao chót vót", frequency:"medium" },
  }},
  "广": { readings: {
    "guǎng": { meaning_zh:"广大，广阔", meaning_en:"wide, vast", example_zh:"广大", example_pinyin:"guǎng dà", example_en:"vast", meaning_vi:"rộng lớn", example_vi:"rộng lớn", frequency:"medium" },
    "ān": { meaning_zh:"同\"庵\"，多用于人名", meaning_en:"(variant of 庵, in names)", example_zh:"（人名用）", example_pinyin:"ān", example_en:"(used in names)", meaning_vi:"như chữ 庵 (dùng trong tên)", example_vi:"dùng trong tên", frequency:"medium" },
  }},
  "待": { readings: {
    "dài": { meaning_zh:"等待，对待", meaning_en:"to wait, to treat", example_zh:"等待", example_pinyin:"děng dài", example_en:"to wait", meaning_vi:"chờ đợi; đối đãi", example_vi:"chờ đợi", frequency:"medium" },
    "dāi": { meaning_zh:"待一会儿（停留）", meaning_en:"to stay (colloquial)", example_zh:"待一会儿", example_pinyin:"dāi yī huìr", example_en:"to stay a while", meaning_vi:"ở lại (khẩu ngữ)", example_vi:"ở lại một lát", frequency:"medium" },
  }},
  "挝": { readings: {
    "zhuā": { meaning_zh:"挝鼓（敲打）", meaning_en:"to beat (a drum)", example_zh:"挝鼓", example_pinyin:"zhuā gǔ", example_en:"to beat a drum", meaning_vi:"đánh (trống)", example_vi:"đánh trống", frequency:"medium" },
    "wō": { meaning_zh:"老挝（国家名）", meaning_en:"Laos", example_zh:"老挝", example_pinyin:"Lǎo wō", example_en:"Laos", meaning_vi:"Lào (tên nước)", example_vi:"Lào", frequency:"medium" },
  }},
  "擂": { readings: {
    "léi": { meaning_zh:"擂钵，研磨", meaning_en:"to grind (in a mortar)", example_zh:"擂钵", example_pinyin:"léi bō", example_en:"grinding bowl", meaning_vi:"nghiền (trong cối)", example_vi:"cối nghiền", frequency:"medium" },
    "lèi": { meaning_zh:"擂台（比武台）", meaning_en:"ring (for contest)", example_zh:"擂台", example_pinyin:"lèi tái", example_en:"competition stage", meaning_vi:"đài tỉ võ", example_vi:"đài đấu", frequency:"medium" },
  }},
  "敦": { readings: {
    "dūn": { meaning_zh:"敦厚，敦促", meaning_en:"honest, to urge", example_zh:"敦厚", example_pinyin:"dūn hòu", example_en:"honest and sincere", meaning_vi:"đôn hậu; thúc giục", example_vi:"đôn hậu", frequency:"medium" },
    "duì": { meaning_zh:"古代盛黍稷的器具", meaning_en:"ancient grain vessel", example_zh:"敦（礼器）", example_pinyin:"duì", example_en:"ancient ritual vessel", meaning_vi:"đồ đựng cốc cổ", example_vi:"đồ tế cổ", frequency:"medium" },
  }},
  "柜": { readings: {
    "guì": { meaning_zh:"柜子，橱柜", meaning_en:"cabinet, cupboard", example_zh:"柜子", example_pinyin:"guì zi", example_en:"cabinet", meaning_vi:"tủ", example_vi:"cái tủ", frequency:"medium" },
    "jǔ": { meaning_zh:"柜柳（树名）", meaning_en:"a kind of willow", example_zh:"柜柳", example_pinyin:"jǔ liǔ", example_en:"a willow species", meaning_vi:"cây liễu cử", example_vi:"cây liễu cử", frequency:"medium" },
  }},
  "查": { readings: {
    "chá": { meaning_zh:"检查，调查", meaning_en:"to check, to investigate", example_zh:"检查", example_pinyin:"jiǎn chá", example_en:"to check", meaning_vi:"kiểm tra, điều tra", example_vi:"kiểm tra", frequency:"medium" },
    "zhā": { meaning_zh:"姓查", meaning_en:"surname Zha", example_zh:"姓查", example_pinyin:"xìng Zhā", example_en:"surname Zha", meaning_vi:"họ Tra", example_vi:"họ Tra", frequency:"medium" },
  }},
  "浚": { readings: {
    "jùn": { meaning_zh:"疏浚（挖深河道）", meaning_en:"to dredge", example_zh:"疏浚", example_pinyin:"shū jùn", example_en:"to dredge", meaning_vi:"nạo vét (sông)", example_vi:"nạo vét", frequency:"medium" },
    "xùn": { meaning_zh:"浚县（地名）", meaning_en:"Xunxian (place name)", example_zh:"浚县", example_pinyin:"Xùn xiàn", example_en:"Xun County", meaning_vi:"huyện Tuấn (địa danh)", example_vi:"huyện Tuấn", frequency:"medium" },
  }},
  "溺": { readings: {
    "nì": { meaning_zh:"溺死，溺爱", meaning_en:"to drown, to spoil", example_zh:"溺死", example_pinyin:"nì sǐ", example_en:"to drown", meaning_vi:"chết đuối; nuông chiều", example_vi:"chết đuối", frequency:"medium" },
    "niào": { meaning_zh:"同\"尿\"niào", meaning_en:"(variant of 尿)", example_zh:"溺器", example_pinyin:"niào qì", example_en:"chamber pot", meaning_vi:"như chữ 尿 (tiểu tiện)", example_vi:"bô đi tiểu", frequency:"medium" },
  }},
  "潦": { readings: {
    "lǎo": { meaning_zh:"雨水大（积水）", meaning_en:"flooded, waterlogged", example_zh:"潦水", example_pinyin:"lǎo shuǐ", example_en:"floodwater", meaning_vi:"ngập nước (mưa to)", example_vi:"nước ngập", frequency:"medium" },
    "liáo": { meaning_zh:"潦草，潦倒", meaning_en:"sloppy; frustrated", example_zh:"潦草", example_pinyin:"liáo cǎo", example_en:"careless, sloppy", meaning_vi:"cẩu thả; lận đận", example_vi:"cẩu thả", frequency:"medium" },
  }},
  "瀑": { readings: {
    "pù": { meaning_zh:"瀑布", meaning_en:"waterfall", example_zh:"瀑布", example_pinyin:"pù bù", example_en:"waterfall", meaning_vi:"thác nước", example_vi:"thác nước", frequency:"medium" },
    "bào": { meaning_zh:"瀑河（水名）", meaning_en:"Bao River", example_zh:"瀑河", example_pinyin:"Bào hé", example_en:"Bao River", meaning_vi:"sông Bộc (tên sông)", example_vi:"sông Bộc", frequency:"medium" },
  }},
  "牟": { readings: {
    "móu": { meaning_zh:"牟取，牟利", meaning_en:"to seek (profit)", example_zh:"牟取", example_pinyin:"móu qǔ", example_en:"to seek (gain)", meaning_vi:"mưu cầu (lợi)", example_vi:"mưu lợi", frequency:"medium" },
    "mù": { meaning_zh:"牟平（地名）", meaning_en:"Muping (place name)", example_zh:"牟平", example_pinyin:"Mù píng", example_en:"Muping", meaning_vi:"Mâu Bình (địa danh)", example_vi:"Mâu Bình", frequency:"medium" },
  }},
  "疟": { readings: {
    "nüè": { meaning_zh:"疟疾", meaning_en:"malaria", example_zh:"疟疾", example_pinyin:"nüè jí", example_en:"malaria", meaning_vi:"bệnh sốt rét", example_vi:"sốt rét", frequency:"medium" },
    "yào": { meaning_zh:"发疟子（口语）", meaning_en:"to have malaria (colloquial)", example_zh:"发疟子", example_pinyin:"fā yào zi", example_en:"to have malaria", meaning_vi:"lên cơn sốt rét (khẩu ngữ)", example_vi:"lên cơn sốt rét", frequency:"medium" },
  }},
  "瘩": { readings: {
    "dá": { meaning_zh:"瘩背（病名）", meaning_en:"a back carbuncle", example_zh:"瘩背", example_pinyin:"dá bèi", example_en:"back carbuncle", meaning_vi:"nhọt lưng", example_vi:"nhọt lưng", frequency:"medium" },
    "da": { meaning_zh:"疙瘩", meaning_en:"pimple, lump", example_zh:"疙瘩", example_pinyin:"gē da", example_en:"pimple, lump", meaning_vi:"mụn, cục u", example_vi:"cục u", frequency:"medium" },
  }},
  "碌": { readings: {
    "lù": { meaning_zh:"忙碌，碌碌", meaning_en:"busy; mediocre", example_zh:"忙碌", example_pinyin:"máng lù", example_en:"busy", meaning_vi:"bận rộn", example_vi:"bận rộn", frequency:"medium" },
    "liù": { meaning_zh:"碌碡（农具）", meaning_en:"stone roller (farm tool)", example_zh:"碌碡", example_pinyin:"liù zhou", example_en:"stone roller", meaning_vi:"trục lăn (nông cụ)", example_vi:"trục lăn đá", frequency:"medium" },
  }},
  "糜": { readings: {
    "mí": { meaning_zh:"糜烂，糜费", meaning_en:"rotten; wasteful", example_zh:"糜烂", example_pinyin:"mí làn", example_en:"festering", meaning_vi:"thối rữa; lãng phí", example_vi:"thối rữa", frequency:"medium" },
    "méi": { meaning_zh:"糜子（黍类）", meaning_en:"broomcorn millet", example_zh:"糜子", example_pinyin:"méi zi", example_en:"broomcorn millet", meaning_vi:"hạt kê (loại nếp)", example_vi:"hạt kê", frequency:"medium" },
  }},
  "绰": { readings: {
    "chuò": { meaning_zh:"绰绰有余，宽绰", meaning_en:"ample, spacious", example_zh:"绰绰有余", example_pinyin:"chuò chuò yǒu yú", example_en:"more than enough", meaning_vi:"dư dả, rộng rãi", example_vi:"dư dả", frequency:"medium" },
    "chāo": { meaning_zh:"绰起棍子（抓取）", meaning_en:"to grab (a stick)", example_zh:"绰起棍子", example_pinyin:"chāo qǐ gùn zi", example_en:"to grab a stick", meaning_vi:"vớ lấy (gậy)", example_vi:"vớ lấy gậy", frequency:"medium" },
  }},
  "翟": { readings: {
    "dí": { meaning_zh:"墨翟（人名，墨子）", meaning_en:"Mo Di (philosopher)", example_zh:"墨翟", example_pinyin:"Mò Dí", example_en:"Mo Di (Mozi)", meaning_vi:"Mặc Địch (Mặc Tử)", example_vi:"Mặc Địch", frequency:"medium" },
    "zhái": { meaning_zh:"姓翟", meaning_en:"surname Zhai", example_zh:"姓翟", example_pinyin:"xìng Zhái", example_en:"surname Zhai", meaning_vi:"họ Trạch", example_vi:"họ Trạch", frequency:"medium" },
  }},
  "腊": { readings: {
    "là": { meaning_zh:"腊月，腊肉", meaning_en:"12th lunar month; cured meat", example_zh:"腊月", example_pinyin:"là yuè", example_en:"12th lunar month", meaning_vi:"tháng chạp; thịt muối", example_vi:"tháng chạp", frequency:"medium" },
    "xī": { meaning_zh:"干肉（古义）", meaning_en:"dried meat (archaic)", example_zh:"腊肉（干肉）", example_pinyin:"xī ròu", example_en:"dried meat (archaic)", meaning_vi:"thịt khô (nghĩa cổ)", example_vi:"thịt khô", frequency:"medium" },
  }},
  "莎": { readings: {
    "suō": { meaning_zh:"莎草（植物）", meaning_en:"nutgrass, sedge", example_zh:"莎草", example_pinyin:"suō cǎo", example_en:"sedge grass", meaning_vi:"cỏ gấu", example_vi:"cỏ gấu", frequency:"medium" },
    "shā": { meaning_zh:"用于人名、译名", meaning_en:"(used in names)", example_zh:"莎士比亚", example_pinyin:"Shā shì bǐ yà", example_en:"Shakespeare", meaning_vi:"dùng trong tên (phiên âm)", example_vi:"Shakespeare", frequency:"medium" },
  }},
  "蚂": { readings: {
    "mǎ": { meaning_zh:"蚂蚁", meaning_en:"ant", example_zh:"蚂蚁", example_pinyin:"mǎ yǐ", example_en:"ant", meaning_vi:"con kiến", example_vi:"con kiến", frequency:"medium" },
    "mā": { meaning_zh:"蚂螂（蜻蜓，方言）", meaning_en:"dragonfly (dialect)", example_zh:"蚂螂", example_pinyin:"mā lang", example_en:"dragonfly (dialect)", meaning_vi:"chuồn chuồn (phương ngữ)", example_vi:"chuồn chuồn", frequency:"medium" },
    "mà": { meaning_zh:"蚂蚱（蝗虫）", meaning_en:"locust, grasshopper", example_zh:"蚂蚱", example_pinyin:"mà zha", example_en:"locust", meaning_vi:"châu chấu", example_vi:"châu chấu", frequency:"medium" },
  }},
  "衰": { readings: {
    "shuāi": { meaning_zh:"衰弱，衰老", meaning_en:"to decline, weak", example_zh:"衰弱", example_pinyin:"shuāi ruò", example_en:"weak, feeble", meaning_vi:"suy yếu, già yếu", example_vi:"suy yếu", frequency:"medium" },
    "cuī": { meaning_zh:"等衰（等次差别，古义）", meaning_en:"gradation (archaic)", example_zh:"等衰", example_pinyin:"děng cuī", example_en:"gradation (archaic)", meaning_vi:"thứ bậc (nghĩa cổ)", example_vi:"thứ bậc", frequency:"medium" },
  }},
  "裳": { readings: {
    "shang": { meaning_zh:"衣裳", meaning_en:"clothes", example_zh:"衣裳", example_pinyin:"yī shang", example_en:"clothes", meaning_vi:"quần áo", example_vi:"quần áo", frequency:"medium" },
    "cháng": { meaning_zh:"绿衣黄裳（古代下衣）", meaning_en:"lower garment (archaic)", example_zh:"绿衣黄裳", example_pinyin:"lǜ yī huáng cháng", example_en:"ancient lower garment", meaning_vi:"xiêm (váy cổ)", example_vi:"xiêm y", frequency:"medium" },
  }},
  "褪": { readings: {
    "tùn": { meaning_zh:"把袖子褪下来（脱）", meaning_en:"to slip off (sleeve)", example_zh:"褪下来", example_pinyin:"tùn xià lái", example_en:"to slip off", meaning_vi:"tuột ra (tay áo)", example_vi:"tuột tay áo", frequency:"medium" },
    "tuì": { meaning_zh:"褪色", meaning_en:"to fade (color)", example_zh:"褪色", example_pinyin:"tuì sè", example_en:"to fade", meaning_vi:"phai màu", example_vi:"phai màu", frequency:"medium" },
  }},
  "豁": { readings: {
    "huō": { meaning_zh:"豁口，豁出去", meaning_en:"a gap; to risk all", example_zh:"豁口", example_pinyin:"huō kǒu", example_en:"a gap, opening", meaning_vi:"khe hở; liều", example_vi:"chỗ sứt", frequency:"medium" },
    "huò": { meaning_zh:"豁亮，豁达", meaning_en:"spacious; open-minded", example_zh:"豁亮", example_pinyin:"huò liàng", example_en:"spacious and bright", meaning_vi:"sáng sủa; phóng khoáng", example_vi:"sáng sủa", frequency:"medium" },
  }},
  "逮": { readings: {
    "dài": { meaning_zh:"逮捕", meaning_en:"to arrest", example_zh:"逮捕", example_pinyin:"dài bǔ", example_en:"to arrest", meaning_vi:"bắt giữ", example_vi:"bắt giữ", frequency:"medium" },
    "dǎi": { meaning_zh:"逮老鼠（口语：捉）", meaning_en:"to catch (colloquial)", example_zh:"逮老鼠", example_pinyin:"dǎi lǎo shǔ", example_en:"to catch mice", meaning_vi:"bắt (khẩu ngữ)", example_vi:"bắt chuột", frequency:"medium" },
  }},
  "靡": { readings: {
    "mǐ": { meaning_zh:"靡费，奢靡", meaning_en:"wasteful, extravagant", example_zh:"靡费", example_pinyin:"mǐ fèi", example_en:"to waste", meaning_vi:"lãng phí, xa xỉ", example_vi:"lãng phí", frequency:"medium" },
    "mí": { meaning_zh:"风靡（一时盛行）", meaning_en:"to become fashionable", example_zh:"风靡", example_pinyin:"fēng mí", example_en:"fashionable", meaning_vi:"phong trào rầm rộ", example_vi:"thịnh hành", frequency:"medium" },
  }},
  "馏": { readings: {
    "liù": { meaning_zh:"馏馒头（蒸热）", meaning_en:"to steam again", example_zh:"馏馒头", example_pinyin:"liù mán tou", example_en:"to resteam buns", meaning_vi:"hấp lại (bánh bao)", example_vi:"hấp lại bánh bao", frequency:"medium" },
    "liú": { meaning_zh:"蒸馏", meaning_en:"to distill", example_zh:"蒸馏", example_pinyin:"zhēng liú", example_en:"to distill", meaning_vi:"chưng cất", example_vi:"chưng cất", frequency:"medium" },
  }},
  "魄": { readings: {
    "pò": { meaning_zh:"气魄，魄力", meaning_en:"spirit, courage", example_zh:"气魄", example_pinyin:"qì pò", example_en:"boldness", meaning_vi:"khí phách, bản lĩnh", example_vi:"khí phách", frequency:"medium" },
    "tuò": { meaning_zh:"落魄（潦倒，又作拓）", meaning_en:"down and out (variant)", example_zh:"落魄", example_pinyin:"luò tuò", example_en:"down and out", meaning_vi:"sa cơ lỡ vận (biến âm)", example_vi:"sa cơ lỡ vận", frequency:"medium" },
    "bó": { meaning_zh:"落魄（同泊，漂泊）", meaning_en:"wandering (variant)", example_zh:"落魄", example_pinyin:"luò bó", example_en:"wandering", meaning_vi:"phiêu bạt (biến âm)", example_vi:"phiêu bạt", frequency:"medium" },
  }},
};

// ── Level → difficulty map ───────────────────────────────────
const LEVEL_MAP = {
  "一级": 1, "二级": 2, "三级": 3, "四级": 4,
  "五级": 5, "六级": 6, "七-九级": 7,
};

// ── Level → UI label map ─────────────────────────────────────
const LEVEL_LABELS = {
  1: "一级", 2: "二级", 3: "三级", 4: "四级",
  5: "五级", 6: "六级", 7: "七-九级",
};

// ── Build the working POLYPHONES array ───────────────────────
const POLYPHONES = RAW_DATA.map(row => {
  const difficulty = LEVEL_MAP[row.level] || 1;
  const enriched = ENRICHED[row.hanzi];
  const pinyinList = row.pinyin.split("/");

  const readings = pinyinList.map(py => {
    const e = enriched?.readings?.[py];
    return {
      pinyin:        py,
      meaning_zh:    e?.meaning_zh     || "",
      meaning_en:    e?.meaning_en     || "",
      example_zh:    e?.example_zh     || "",
      example_pinyin:e?.example_pinyin || "",
      example_en:    e?.example_en     || "",
      meaning_vi:    e?.meaning_vi     || "",
      example_vi:    e?.example_vi     || "",
      frequency:     e?.frequency      || "medium",
    };
  });

  return { character: row.hanzi, difficulty, readings };
});

// ── Export (CommonJS + browser global) ───────────────────────
if (typeof module !== "undefined" && module.exports) {
  module.exports = { RAW_DATA, ENRICHED, LEVEL_MAP, LEVEL_LABELS, POLYPHONES };
}
if (typeof window !== "undefined") {
  window.RAW_DATA = RAW_DATA;
  window.ENRICHED = ENRICHED;
  window.LEVEL_MAP = LEVEL_MAP;
  window.LEVEL_LABELS = LEVEL_LABELS;
  window.POLYPHONES = POLYPHONES;
}
