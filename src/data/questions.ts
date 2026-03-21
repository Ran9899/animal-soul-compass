export type Category = 'power' | 'social' | 'wisdom' | 'freedom';

export interface Option {
  text: string;
  category: Category;
}

export interface Question {
  scenario: string;
  prompt: string;
  options: Option[];
}

export const questions: Question[] = [
  {
    scenario: "夜幕低垂，森林深处传来一声低沉的嚎叫。你蹲在一棵倒下的老橡树后面，耳朵竖起，风把陌生的气味送到你鼻尖——那是另一只掠食者的味道。",
    prompt: "你的下一步是？",
    options: [
      { text: "压低身体，朝气味的方向缓缓逼近", category: "power" },
      { text: "发出一声低吼，提醒身后的同伴注意", category: "social" },
      { text: "纹丝不动，用鼻子和耳朵判断对方的体型和距离", category: "wisdom" },
      { text: "无声地转身，消失在灌木丛的另一个方向", category: "freedom" },
    ],
  },
  {
    scenario: "干旱已经持续了很多天。河床龟裂，曾经的水源只剩下一小洼浑浊的泥水。你到达时，已经有三四只动物围在那里，紧张地彼此对峙。",
    prompt: "你会怎么做？",
    options: [
      { text: "大步走上前，用你的存在感清出一个位置", category: "power" },
      { text: "靠近最弱小的那只，用肢体语言示意：我们可以轮流", category: "social" },
      { text: "退到远处观察，等它们散去后再去喝那剩下的", category: "wisdom" },
      { text: "放弃这里，凭直觉去寻找一条还没干涸的溪流", category: "freedom" },
    ],
  },
  {
    scenario: "暴风雨来了。闪电把天空撕成碎片，雨水像瀑布一样砸在你身上。你站在一片开阔的草原上，四周没有遮蔽，远处是一片黑压压的树林。",
    prompt: "雷声震耳欲聋——",
    options: [
      { text: "低头冲进风雨里，朝最近的高地跑去", category: "power" },
      { text: "大声呼唤，确认你的群体还在身边", category: "social" },
      { text: "趴在地上不动——闪电不会劈中最低的东西", category: "wisdom" },
      { text: "转头朝与所有人相反的方向跑——那里也许有洞穴", category: "freedom" },
    ],
  },
  {
    scenario: "清晨，雾气弥漫在山谷中。你嗅到了一群猎物的气息，它们就在前方的矮树丛后面。但风向随时可能变，一旦暴露，机会就没了。",
    prompt: "你屏住呼吸——",
    options: [
      { text: "不等了，直接发起冲锋，用速度压制一切", category: "power" },
      { text: "回头用眼神向同伴发出信号，准备合围", category: "social" },
      { text: "绕到下风口，等风向最有利的那一刻再出手", category: "wisdom" },
      { text: "放弃这群猎物——你更想去看看山谷另一头有什么", category: "freedom" },
    ],
  },
  {
    scenario: "你的族群正在迁徙。走了很长的路，幼崽们已经开始掉队，几只年老的也越来越慢。前方的路还很远，但夜色即将降临。",
    prompt: "你回头看了一眼队伍——",
    options: [
      { text: "走到最前面，加快步伐——必须在天黑前到达安全地带", category: "power" },
      { text: "放慢脚步，走到掉队的幼崽旁边，用身体挡住寒风", category: "social" },
      { text: "停下来查看地形，寻找一个可以临时过夜的庇护点", category: "wisdom" },
      { text: "脱离队伍，先独自去前方探路", category: "freedom" },
    ],
  },
  {
    scenario: "你发现了一个山洞。洞口散发着潮湿的泥土味，里面黑漆漆的，但温暖而干燥。问题是——洞壁上有爪痕，说明这里曾经有主人。",
    prompt: "你站在洞口——",
    options: [
      { text: "走进去，在最深处留下自己的气味标记", category: "power" },
      { text: "在洞口等一会儿，看看有没有其他同伴也需要庇护", category: "social" },
      { text: "仔细嗅那些爪痕——判断原来的主人是否还会回来", category: "wisdom" },
      { text: "看了一眼就离开——你不喜欢住在别人的痕迹里", category: "freedom" },
    ],
  },
  {
    scenario: "你的领地被入侵了。一只陌生的同类出现在你标记过的边界树下，正在用爪子刨土，像在宣告什么。它比你大一圈。",
    prompt: "你从树丛后看着它——",
    options: [
      { text: "从藏身处走出来，挺起胸膛，正面迎上去", category: "power" },
      { text: "发出几声试探性的叫声，看它是敌意还是只是路过", category: "social" },
      { text: "悄悄绕到它身后，观察它的体态和伤痕——知己知彼", category: "wisdom" },
      { text: "转身离开——这片领地不值得一场流血，世界很大", category: "freedom" },
    ],
  },
  {
    scenario: "月圆之夜，整个森林安静得不正常。平时聒噪的虫鸣消失了，连风都屏住了呼吸。空气中有一种说不清的紧绷感。",
    prompt: "你独自站在月光下——",
    options: [
      { text: "爬上最高的岩石，从制高点俯瞰整片区域", category: "power" },
      { text: "循着族群的气味，回到它们身边", category: "social" },
      { text: "贴着地面，把耳朵贴在土壤上，感受大地的震动", category: "wisdom" },
      { text: "朝着月亮的方向走，今晚想走多远就走多远", category: "freedom" },
    ],
  },
  {
    scenario: "一只受伤的幼兽倒在你面前。它不是你的族群，甚至不是你的物种。它用惊恐的眼睛看着你，后腿在流血，完全无法移动。",
    prompt: "你低头看着它——",
    options: [
      { text: "叼起它的后颈，把它拖到灌木下——活着就有用", category: "power" },
      { text: "蹲下来，用鼻子轻轻碰它的额头，发出安慰的低吟", category: "social" },
      { text: "检查伤口的深度，判断它还有没有可能活下去", category: "wisdom" },
      { text: "看了它一眼就走了——大自然有它自己的法则", category: "freedom" },
    ],
  },
  {
    scenario: "你跟着一条从未走过的河流走了很远。河水越来越宽，空气越来越陌生。突然你意识到——你已经离开了任何熟悉的领地。",
    prompt: "你停在河岸边——",
    options: [
      { text: "踏进河水，涉过去——未知的对岸可能有更好的猎场", category: "power" },
      { text: "犹豫了一下，决定回去——你的族群还在等你", category: "social" },
      { text: "沿着河岸走，观察水流、植被和动物足迹来判断对岸的情况", category: "wisdom" },
      { text: "深吸一口气，感到前所未有的自由——这正是你想要的", category: "freedom" },
    ],
  },
  {
    scenario: "一场山火从远处蔓延过来。浓烟已经遮住了半边天，空气中满是焦糊的味道。所有动物都在逃——有的向北，有的向东，一片混乱。",
    prompt: "火光映在你的眼睛里——",
    options: [
      { text: "选定一个方向，全力奔跑，用体力和意志撕开一条路", category: "power" },
      { text: "找到离你最近的几只动物，带着它们一起跑", category: "social" },
      { text: "观察风向和火势，选择火最不可能蔓延的方向", category: "wisdom" },
      { text: "朝河流的方向跑——水火不容，水的那边就是安全", category: "freedom" },
    ],
  },
  {
    scenario: "你找到了一片隐秘的浆果林。果实饱满、甜美，足够一个族群吃上几天。但你是独自发现的，周围暂时没有其他动物。",
    prompt: "你站在满是浆果的树下——",
    options: [
      { text: "先吃饱，然后在入口处留下你的气味——这是你的了", category: "power" },
      { text: "记住位置，赶回去带族群过来一起吃", category: "social" },
      { text: "只吃一点，把大部分藏起来以备将来的荒日", category: "wisdom" },
      { text: "吃了几颗就走了——你不想为了守住什么而停下脚步", category: "freedom" },
    ],
  },
  {
    scenario: "你的族群中出现了一个新的挑战者。它年轻、强壮，开始对你的位置虎视眈眈。其他成员的目光在你们之间游移，空气中弥漫着紧张。",
    prompt: "你感受到了那些目光——",
    options: [
      { text: "直接走到它面前，用姿态和眼神告诉它谁是这里的主人", category: "power" },
      { text: "先去安抚其他成员，让族群保持稳定比争斗更重要", category: "social" },
      { text: "不急着回应，先观察它的弱点和行为模式", category: "wisdom" },
      { text: "无所谓——如果它想要这个位置，你本来也不想被绑在这里", category: "freedom" },
    ],
  },
  {
    scenario: "冬天来了。第一场雪覆盖了整个世界，猎物变得稀少，每一步都要踩进没膝的积雪里。你已经两天没有吃东西了。",
    prompt: "饥饿咬着你的胃——",
    options: [
      { text: "强迫自己站起来，雪再深也得去找食物", category: "power" },
      { text: "靠近族群中最温暖的一只，挤在一起减少能量消耗", category: "social" },
      { text: "回忆上一次看到猎物痕迹的地方，计算最合理的搜寻路线", category: "wisdom" },
      { text: "决定离开这片被雪封住的土地，去寻找一个没有冬天的地方", category: "freedom" },
    ],
  },
  {
    scenario: "黎明时分，你来到一处悬崖边。下方是一片从未见过的广阔平原，金色的阳光铺在无尽的草海上。风从下方吹上来，带着陌生而诱人的味道。",
    prompt: "你站在悬崖边缘——",
    options: [
      { text: "找到一条可以攀下去的路径，第一个踏上那片土地", category: "power" },
      { text: "回头去叫同伴——这样的发现应该一起分享", category: "social" },
      { text: "在崖边观察了很久——记住地形、水源位置和可能的危险", category: "wisdom" },
      { text: "纵身一跃的冲动涌上来——你生来就是为了去远方", category: "freedom" },
    ],
  },
  {
    scenario: "你在溪边饮水时，水面倒映出你身后的阴影——一只比你大得多的掠食者正无声地靠近。你只有几秒钟的时间。",
    prompt: "你的身体瞬间绷紧——",
    options: [
      { text: "猛然转身，用最凶猛的姿态嘶吼——气势可以吓退很多对手", category: "power" },
      { text: "发出尖锐的警告声——即使来不及救自己，至少警告了其他人", category: "social" },
      { text: "一动不动地放低身体，滑入水中——利用地形消除体型劣势", category: "wisdom" },
      { text: "毫不犹豫地朝最陡的斜坡冲下去——它大，但你比它灵活", category: "freedom" },
    ],
  },
  {
    scenario: "连续暴雨之后，你栖息的整片林地被淹了。树根泡在水里，洞穴灌满了泥浆，你熟悉的一切都面目全非。",
    prompt: "你站在一片泥泞中——",
    options: [
      { text: "开始重新标记领地——从零开始，但这里仍然是你的", category: "power" },
      { text: "去寻找失散的族群成员，确保每一只都还活着", category: "social" },
      { text: "检查哪些旧路还能走，哪些必须重新开辟", category: "wisdom" },
      { text: "这是一个信号——是时候迁往新的栖息地了", category: "freedom" },
    ],
  },
  {
    scenario: "夜晚，你在一棵大树的树冠中醒来。星空异常清澈，整个世界像被水洗过一样安静。远处传来同伴的呼唤声，忽远忽近。",
    prompt: "你睁开眼睛——",
    options: [
      { text: "用一声悠长的回应宣告你的位置——让所有人知道你在这里", category: "power" },
      { text: "循着声音的方向走去——夜里应该在一起", category: "social" },
      { text: "安静地倾听，分辨每一个声音的方向和含义", category: "wisdom" },
      { text: "没有回应，继续看着星空——这种独处的夜晚太珍贵了", category: "freedom" },
    ],
  },
  {
    scenario: "你发现了一条穿越山脊的秘密通道。另一边是一个完全未知的山谷——空气温暖、水声清脆，但也可能藏着你从未遇到过的危险。",
    prompt: "通道窄得只能一只动物通过——",
    options: [
      { text: "毫不犹豫地钻了进去——先到者为王", category: "power" },
      { text: "在入口留下标记，回去告诉族群，一起决定要不要过去", category: "social" },
      { text: "先把鼻子伸进去，仔细嗅了很久——判断那边有哪些物种", category: "wisdom" },
      { text: "一阵兴奋涌上来——你活着就是为了发现这样的地方", category: "freedom" },
    ],
  },
  {
    scenario: "大迁徙的终点到了。你和你的族群来到了一片陌生的平原。远处是四个方向：一座烟雾缭绕的火山脚下，一片金色的草原，一个幽深的峡谷，还有一片一望无际的开阔荒野——什么都没有，只有风。",
    prompt: "你深吸一口这片新大陆的空气——",
    options: [
      { text: "走向火山——危险的地方，才有最强大的力量", category: "power" },
      { text: "走向草原——那里足够宽广，能容下整个族群", category: "social" },
      { text: "走向峡谷——隐秘的地方藏着最多的秘密和资源", category: "wisdom" },
      { text: "走向荒野——因为只有风知道路在哪里", category: "freedom" },
    ],
  },
];
