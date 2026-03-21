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
    scenario: "月光被云层吞没，你独自走在一条泥泞的林间小路上。脚下的枯枝嘎吱作响，远处传来某种沉闷的、有节奏的敲击声——像心跳，又像什么东西在试探性地靠近。",
    prompt: "你停下脚步。接下来呢？",
    options: [
      { text: "攥紧拳头，朝声音的方向大步走去", category: "power" },
      { text: "拨通手机，让朋友的声音陪着你穿过这片黑暗", category: "social" },
      { text: "屏住呼吸，闭上眼，靠听觉判断它在移动还是静止", category: "wisdom" },
      { text: "转身走进旁边没有路的灌木丛——至少那里没人去过", category: "freedom" },
    ],
  },
  {
    scenario: "一个你崇拜已久的人邀请你加入ta刚创立的团队。办公室还是毛坯房，白板上画满了潦草的箭头，空气里弥漫着咖啡和不确定性。ta看着你说："我不能保证什么，但这会很有意思。"",
    prompt: "你脑子里第一个闪过的念头是？",
    options: [
      { text: "我能不能坐到那张决策桌上", category: "power" },
      { text: "这些人之间有没有那种'能一起扛事'的默契", category: "social" },
      { text: "白板上的逻辑能不能跑通，还是只是一腔热血", category: "wisdom" },
      { text: "这件事能不能把我从现在这条轨道上弹射出去", category: "freedom" },
    ],
  },
  {
    scenario: "你在一个语言不通的小镇迷了路。手机信号消失了，街道两旁是褪色的招牌和紧闭的门。一只野猫蹲在墙头看着你，远处飘来煮食物的香气。",
    prompt: "你的身体先于大脑做出了反应——",
    options: [
      { text: "挺直背，选一个方向，走就是了", category: "power" },
      { text: "循着香气走过去，有烟火的地方就有人", category: "social" },
      { text: "看太阳的位置，回忆来时的方向，在地上画了张简易地图", category: "wisdom" },
      { text: "蹲下来跟那只猫对视，突然觉得迷路也没什么不好", category: "freedom" },
    ],
  },
  {
    scenario: "会议室的空气凝固了。你刚花了三分钟阐述的方案被逐条反驳，PPT还停在第二页。对面的人交叉着手臂，有人已经开始看手机。",
    prompt: "沉默了五秒后，你——",
    options: [
      { text: "重新打开第一页，用更锋利的方式再讲一遍", category: "power" },
      { text: "笑了一下，说'我理解你们的顾虑'，然后换了个故事来讲", category: "social" },
      { text: "合上电脑，认真问了一句：'你们觉得最大的漏洞在哪？'", category: "wisdom" },
      { text: "收起PPT，说'我先做个demo出来，比说的管用'", category: "freedom" },
    ],
  },
  {
    scenario: "你最好的朋友坐在你对面，手里转着一张单程机票。ta说："我下个月就走了，可能很久不回来。"窗外的雨打在玻璃上，咖啡已经凉了。",
    prompt: "你胸口涌上来的感觉是——",
    options: [
      { text: "一种要抓住什么的冲动——我会让这段关系不断掉", category: "power" },
      { text: "鼻子一酸，这个人在我生命里的重量突然变得很具体", category: "social" },
      { text: "一阵平静的惆怅，像看到河水流向大海——自然，但不舍", category: "wisdom" },
      { text: "说不清的复杂——有失落，但更多的是一种隐秘的向往", category: "freedom" },
    ],
  },
  {
    scenario: "银行APP弹出一条通知：一笔意外的奖金到账了，数字比你预想的多了一个零。你盯着屏幕，手指悬在那里。",
    prompt: "你脑中浮现的第一个画面是？",
    options: [
      { text: "一个你一直想投但没底气投的项目", category: "power" },
      { text: "一张大桌子，坐满了你想请的人", category: "social" },
      { text: "什么都没变——这笔钱应该等到最正确的时刻再动", category: "wisdom" },
      { text: "一张没有目的地的机票", category: "freedom" },
    ],
  },
  {
    scenario: "你偶然发现公司财务流程中有一个灰色地带——不违法，但有人在利用它。如果你开口，会让你的直属上级非常难堪。",
    prompt: "你躺在床上想了很久，最后决定——",
    options: [
      { text: "直接捅到更上层去，这种事拖一天就烂一天", category: "power" },
      { text: "先跟最信任的同事通个气，看看是不是只有我觉得不对", category: "social" },
      { text: "把证据整理成一份匿名报告，让数据自己说话", category: "wisdom" },
      { text: "不是我的仗——我的精力应该花在我能控制的事上", category: "freedom" },
    ],
  },
  {
    scenario: "暴雨天，整个世界缩成了你的房间。窗外的水声像白噪音，手机上没有未读消息，时间好像停了。",
    prompt: "你发现自己正在——",
    options: [
      { text: "打开备忘录，把下周每件事排得密不透风", category: "power" },
      { text: "翻到一个很久没说话的人的头像，打了一行字又删掉，最后还是发了出去", category: "social" },
      { text: "从书架上抽出那本读了三分之一就搁下的书", category: "wisdom" },
      { text: "什么也没做，就靠在窗边听雨——这种虚度让你觉得奢侈而完整", category: "freedom" },
    ],
  },
  {
    scenario: "台下两百双眼睛。主持人刚念完你的名字，但你的演讲稿还在酒店房间里。聚光灯已经打在你身上了。",
    prompt: "你感受到的是——",
    options: [
      { text: "肾上腺素飙升——没有稿子反而让你兴奋", category: "power" },
      { text: "紧张，但你决定先讲一个刚刚在后台发生的小故事", category: "social" },
      { text: "大脑自动切换到框架模式：开头、三个论点、结尾", category: "wisdom" },
      { text: "深呼吸，决定说真话——不表演，不包装", category: "freedom" },
    ],
  },
  {
    scenario: "你在深夜刷到一篇文章，里面的观点精准地击中了你一直以来相信的东西——然后把它撕碎了。你读了两遍，心跳有点快。",
    prompt: "你关掉屏幕后——",
    options: [
      { text: "打开评论区准备写一篇有理有据的反驳", category: "power" },
      { text: "截图发给三个朋友：'你们怎么看这个？'", category: "social" },
      { text: "躺在黑暗中，认真地、甚至有点痛苦地重新审视自己的信念", category: "wisdom" },
      { text: "耸耸肩——世界本来就没有标准答案", category: "freedom" },
    ],
  },
  {
    scenario: "一场激烈的争吵刚刚结束。门摔上的声音还在回响。你一个人站在客厅，茶几上是两杯没喝完的水。",
    prompt: "二十分钟后，你——",
    options: [
      { text: "拿起手机拨了过去：'回来，我们把话说清楚'", category: "power" },
      { text: "端起那杯不是你的水，放进水池里洗了——这是你的示好方式", category: "social" },
      { text: "坐下来，试着用对方的视角把刚才的对话重放了一遍", category: "wisdom" },
      { text: "穿上外套出了门——你需要风，需要走路，需要一个人待着", category: "freedom" },
    ],
  },
  {
    scenario: "你被空降到一个士气低落的团队。办公桌上堆着前任留下的烂摊子，团队成员看你的眼神混合着怀疑和期待。",
    prompt: "你做的第一件事是——",
    options: [
      { text: "当天下午就开了一个全员会，亮出你的三步计划", category: "power" },
      { text: "端着咖啡挨个工位聊，先记住每个人的名字和故事", category: "social" },
      { text: "什么都不说，先花一周时间看数据、看流程、看邮件", category: "wisdom" },
      { text: "砍掉两个无意义的周会，跟大家说'先喘口气'", category: "freedom" },
    ],
  },
  {
    scenario: "一场你不太想来的晚宴。水晶灯、香槟、低声的笑。你谁都不认识，入口处的座位表上你的名字被放在了角落。",
    prompt: "你端着酒杯——",
    options: [
      { text: "径直走向看起来最有分量的那个人，伸出手", category: "power" },
      { text: "靠近最近的一圈人，用一句'这香槟不错'打开话题", category: "social" },
      { text: "在角落站了一会儿，默默观察谁和谁在交换眼神", category: "wisdom" },
      { text: "喝完这杯酒就走——你更想去街对面那家亮着暖灯的小酒馆", category: "freedom" },
    ],
  },
  {
    scenario: "你正沉浸在一个让你每天早上都想起床的项目里。突然，猎头打来电话：另一家公司开出了两倍的薪水。",
    prompt: "挂掉电话后，你反复想的是——",
    options: [
      { text: "哪条路能让我更快站到更高的位置", category: "power" },
      { text: "现在这群人——我真的舍得离开吗", category: "social" },
      { text: "拿出纸笔，把两条路的五年轨迹画了出来", category: "wisdom" },
      { text: "钱从来不是问题，问题是哪边能让我不被框住", category: "freedom" },
    ],
  },
  {
    scenario: "一个精灵出现在你面前，说你可以拥有一种能力，但只有一种，而且一旦选择就无法更改。",
    prompt: "你闭上眼，看到的是——",
    options: [
      { text: "时间在你指尖凝固——你可以暂停、倒退、快进整个世界", category: "power" },
      { text: "所有人心底的声音像字幕一样浮现在你眼前", category: "social" },
      { text: "万物的运行规律像水晶一样透明——你一眼就能看穿本质", category: "wisdom" },
      { text: "你的身体变得透明——你可以去任何地方，不被任何人察觉", category: "freedom" },
    ],
  },
  {
    scenario: "一场突如其来的变故把你的生活劈成了两半。昨天还完好的一切，今天全碎了。你站在废墟中间，风很大。",
    prompt: "风停之后，你——",
    options: [
      { text: "开始捡碎片——重建，从现在开始", category: "power" },
      { text: "拨通了那个号码——你知道谁会来", category: "social" },
      { text: "在废墟里坐了很久，试着理解这一切为什么发生", category: "wisdom" },
      { text: "站起来，朝一个完全不同的方向走了出去", category: "freedom" },
    ],
  },
  {
    scenario: "你被分配到一个所有人都说'不可能成功'的项目。之前三个负责人都失败了。文件夹里全是未完成的方案和放弃的邮件。",
    prompt: "你翻完最后一页，合上文件夹，心里想的是——",
    options: [
      { text: "他们失败是因为没人敢真正拍板——我来", category: "power" },
      { text: "失败三次至少说明有人在乎这件事——也许我们能找到对的人", category: "social" },
      { text: "三次失败就是三组数据——答案也许就藏在他们犯过的错里", category: "wisdom" },
      { text: "按旧地图走当然找不到新大陆——得换个完全不同的玩法", category: "freedom" },
    ],
  },
  {
    scenario: "凌晨三点，你突然从梦中惊醒。不是噩梦——是一个异常清晰的念头，像闪电一样击中了你。你盯着天花板，心跳很快。",
    prompt: "你——",
    options: [
      { text: "翻身抓过手机，打开备忘录，十分钟写了一页纸", category: "power" },
      { text: "太想跟人说了，给那个'什么时候找都不会烦'的人发了条语音", category: "social" },
      { text: "强迫自己冷静下来，在脑中从五个角度找这个想法的漏洞", category: "wisdom" },
      { text: "笑了一下，翻了个身——如果明天醒来还记得，那就说明它值得", category: "freedom" },
    ],
  },
  {
    scenario: "如果明天是最后一天。城市还是那个城市，阳光还是那个阳光，但你知道了一件其他人不知道的事。",
    prompt: "你想把这最后的光留给——",
    options: [
      { text: "做完那件你一直在酝酿但从没敢开始的事", category: "power" },
      { text: "把最重要的人叫到一起，什么都不说，就在一起待着", category: "social" },
      { text: "写一封很长的信，把你理解的世界留下来", category: "wisdom" },
      { text: "去一个陌生的地方，以一个没有过去的人的身份，走完最后一段路", category: "freedom" },
    ],
  },
  {
    scenario: "雾散了。你回到了最初的那片森林，但这次前方出现了四条路。每条路的入口都有一种气息：一条散发着篝火和铁的味道；一条传来远处的笑声；一条铺满金色落叶，安静得像图书馆；还有一条——什么都没有，只有风。",
    prompt: "你深吸一口气，走向——",
    options: [
      { text: "篝火与铁——那是力量锻造的方向", category: "power" },
      { text: "笑声——有人的地方，就有故事", category: "social" },
      { text: "落叶——每一片都是一个被遗忘的答案", category: "wisdom" },
      { text: "风——因为只有风知道路在哪里", category: "freedom" },
    ],
  },
];
