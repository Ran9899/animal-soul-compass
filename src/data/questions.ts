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
    scenario: "深夜，你独自走在一条没有路灯的森林小路上，前方传来低沉的声响。",
    prompt: "你会怎么做？",
    options: [
      { text: "径直走过去，声音越大越说明有值得发现的东西", category: "power" },
      { text: "掏出手机，先给朋友打电话，一边说话一边走", category: "social" },
      { text: "停下来仔细听，分辨声音的来源和规律", category: "wisdom" },
      { text: "离开这条路，找另一条没人走过的方向", category: "freedom" },
    ],
  },
  {
    scenario: "你被邀请加入一个全新的创业团队，创始人非常有魅力，但商业计划还很模糊。",
    prompt: "你最关注什么？",
    options: [
      { text: "我在团队中能不能拥有足够的决策权", category: "power" },
      { text: "团队成员之间的化学反应和信任度", category: "social" },
      { text: "商业逻辑是否经得起推敲", category: "wisdom" },
      { text: "这件事能不能让我脱离现在无聊的生活轨迹", category: "freedom" },
    ],
  },
  {
    scenario: "你在异国旅行时，迷路了，手机没有信号。",
    prompt: "你的第一反应是？",
    options: [
      { text: "相信自己的方向感，大步向前", category: "power" },
      { text: "找到当地人，比划加微笑，总能沟通", category: "social" },
      { text: "观察太阳位置和周围标识，推理方向", category: "wisdom" },
      { text: "太好了，迷路正是旅行最好的部分", category: "freedom" },
    ],
  },
  {
    scenario: "在一场激烈的小组讨论中，你提出的方案被所有人否定了。",
    prompt: "你会怎样？",
    options: [
      { text: "用更强的论据再推一次，直到说服他们", category: "power" },
      { text: "先认同大家的感受，换个角度重新表达", category: "social" },
      { text: "冷静下来分析，也许他们看到了我没注意到的漏洞", category: "wisdom" },
      { text: "放弃说服，按自己的方式悄悄做出来再说", category: "freedom" },
    ],
  },
  {
    scenario: "你最亲密的朋友突然告诉你，ta要搬到地球另一端去生活。",
    prompt: "你内心最真实的感受是？",
    options: [
      { text: "我会主导我们的联系方式，远距离不是问题", category: "power" },
      { text: "有一种被撕裂的感觉，这段关系对我太重要了", category: "social" },
      { text: "有些失落，但我理解每个人都有自己的轨迹", category: "wisdom" },
      { text: "说实话，有一点点羡慕ta的勇气", category: "freedom" },
    ],
  },
  {
    scenario: "你意外获得了一笔不小的奖金。",
    prompt: "你最可能怎么用？",
    options: [
      { text: "投资一个我看好的项目，让钱生钱", category: "power" },
      { text: "请重要的人吃一顿很好的饭", category: "social" },
      { text: "存起来，等到真正需要时再用", category: "wisdom" },
      { text: "来一次说走就走的旅行", category: "freedom" },
    ],
  },
  {
    scenario: "你在公司发现了一个严重的管理漏洞，但揭露它可能得罪上级。",
    prompt: "你会怎么处理？",
    options: [
      { text: "直接向高层指出，问题不解决才是最大的风险", category: "power" },
      { text: "先私下和信任的同事讨论，看大家怎么想", category: "social" },
      { text: "先收集足够的证据和数据，再选择合适的时机", category: "wisdom" },
      { text: "这不是我的战场，我会专注于自己的事", category: "freedom" },
    ],
  },
  {
    scenario: "周末，你独自待在家，外面下着大雨。",
    prompt: "你最想做什么？",
    options: [
      { text: "列出下周的计划，把所有事情安排好", category: "power" },
      { text: "给很久没联系的朋友发一条消息", category: "social" },
      { text: "读一本一直想读但没时间读的书", category: "wisdom" },
      { text: "什么也不做，听雨发呆，享受无所事事", category: "freedom" },
    ],
  },
  {
    scenario: "你被要求在200人面前做一次即兴演讲，没有任何准备时间。",
    prompt: "你的状态是？",
    options: [
      { text: "兴奋，这是证明自己的绝佳机会", category: "power" },
      { text: "紧张但还好，我会用故事和互动来带动气氛", category: "social" },
      { text: "迅速在脑中构建一个框架，然后按逻辑展开", category: "wisdom" },
      { text: "说真话就好，不需要表演", category: "freedom" },
    ],
  },
  {
    scenario: "你在网上看到一个观点，和你一直以来的信念完全矛盾。",
    prompt: "你的反应是？",
    options: [
      { text: "写一段有力的反驳", category: "power" },
      { text: "看看评论区，了解不同人的看法", category: "social" },
      { text: "认真思考，看看自己的信念是否需要更新", category: "wisdom" },
      { text: "无所谓，每个人有自己的世界观", category: "freedom" },
    ],
  },
  {
    scenario: "你和伴侣/好友发生了一次严重的争吵，双方都很受伤。",
    prompt: "冷静下来后，你会？",
    options: [
      { text: "主动找ta谈，把问题摊开说清楚", category: "power" },
      { text: "先释放善意，关系比对错重要", category: "social" },
      { text: "独处一段时间，想清楚问题的根源", category: "wisdom" },
      { text: "如果这段关系让我不自在，也许该重新评估了", category: "freedom" },
    ],
  },
  {
    scenario: "你突然被空降到一个完全陌生的团队，担任负责人。",
    prompt: "你的第一步是？",
    options: [
      { text: "快速了解现状，然后制定行动计划", category: "power" },
      { text: "先和每个成员一对一聊聊，建立信任", category: "social" },
      { text: "观察一段时间，弄清楚团队的真实问题", category: "wisdom" },
      { text: "打破旧有流程，引入一些新鲜的做法", category: "freedom" },
    ],
  },
  {
    scenario: "在一个重要的晚宴上，你发现自己认识的人很少。",
    prompt: "你会怎么做？",
    options: [
      { text: "主动找最重要的那个人搭话", category: "power" },
      { text: "微笑着加入任何看起来热闹的小圈子", category: "social" },
      { text: "找一个安静的角落，先观察整个场的人际关系", category: "wisdom" },
      { text: "按自己的节奏来，不需要为了社交而社交", category: "freedom" },
    ],
  },
  {
    scenario: "你正在做一个很有成就感的项目，但突然接到了一个薪资翻倍的新offer。",
    prompt: "你怎么权衡？",
    options: [
      { text: "哪个能让我更快接近权力和影响力的核心", category: "power" },
      { text: "现在的团队和关系很重要，不想轻易放弃", category: "social" },
      { text: "理性对比两者的长期发展路径", category: "wisdom" },
      { text: "钱不是最重要的，重要的是我有没有自由度", category: "freedom" },
    ],
  },
  {
    scenario: "如果你可以拥有一种超能力。",
    prompt: "你会选择什么？",
    options: [
      { text: "控制时间——暂停、倒退、快进", category: "power" },
      { text: "读心术——知道每个人真正在想什么", category: "social" },
      { text: "全知——瞬间理解任何事物的本质", category: "wisdom" },
      { text: "隐身——去任何地方，不被任何人发现", category: "freedom" },
    ],
  },
  {
    scenario: "你的生活突然被一场意外打乱了所有计划。",
    prompt: "你的核心反应是？",
    options: [
      { text: "马上开始重建，我不允许自己停滞", category: "power" },
      { text: "先和身边的人聚在一起，互相支持", category: "social" },
      { text: "从这次意外中寻找教训和意义", category: "wisdom" },
      { text: "也许这正是重新开始的机会", category: "freedom" },
    ],
  },
  {
    scenario: "你被分配到一个明知会失败的项目。",
    prompt: "你的态度是？",
    options: [
      { text: "失败？那是因为之前没有我来主导", category: "power" },
      { text: "至少可以和这群人一起经历些什么", category: "social" },
      { text: "研究为什么之前会失败，也许能找到突破口", category: "wisdom" },
      { text: "把它当成实验，失败了也是一种经验", category: "freedom" },
    ],
  },
  {
    scenario: "深夜，你躺在床上，脑海中突然浮现一个大胆的想法。",
    prompt: "你会怎么做？",
    options: [
      { text: "立刻起来记录，明天就开始执行", category: "power" },
      { text: "给最懂我的人发消息分享", category: "social" },
      { text: "在脑中反复推演，看看逻辑是否成立", category: "wisdom" },
      { text: "微笑着继续想，但不急着行动，好想法不会逃走", category: "freedom" },
    ],
  },
  {
    scenario: "如果生命只剩最后一天。",
    prompt: "你会怎么度过？",
    options: [
      { text: "完成一件足以被记住的事", category: "power" },
      { text: "和最重要的人在一起", category: "social" },
      { text: "安静地回顾这一生，写下一些东西", category: "wisdom" },
      { text: "去一个从未去过的地方", category: "freedom" },
    ],
  },
  {
    scenario: "回到最初的森林，雾散了，前方出现了四条分岔路。",
    prompt: "你选哪条？",
    options: [
      { text: "最宽最明亮的那条——通往高处", category: "power" },
      { text: "有脚印的那条——说明有人走过", category: "social" },
      { text: "最古老的那条——铺满落叶，藏着秘密", category: "wisdom" },
      { text: "没有路标的那条——因为它才是真正的路", category: "freedom" },
    ],
  },
];
