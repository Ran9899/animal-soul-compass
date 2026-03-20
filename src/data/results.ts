import type { Category } from './questions';
export type { Category };

export interface AnimalResult {
  emoji: string;
  name: string;
  englishName: string;
  statement: string;
  rarity: string;
  outer: string;
  social: string;
  inner: string;
  values: string;
  blindspot: string;
  quote: string;
}

export interface CategoryGroup {
  animals: AnimalResult[];
}

export const categoryGroups: Record<Category, CategoryGroup> = {
  power: {
    animals: [
      {
        emoji: "🦁",
        name: "狮子型人格",
        englishName: "The Sovereign Force",
        statement: "你不是在争夺什么，\n而是在用存在本身定义秩序。",
        rarity: "约 12%",
        outer: "你身上有一种不需要解释的权威感。人们在你面前会不自觉地让出空间。",
        social: "你不社交——你建立联盟。每一段关系，你都在评估信任和价值的交换。",
        inner: "你需要意义，而且是由你定义的意义。平庸是你最大的恐惧。",
        values: "你相信力量不是用来碾压的，而是用来守护的。",
        blindspot: "你可能忽视了，不是所有人都需要被保护。有些人只是想被看见。",
        quote: "秩序不是被服从的，而是被创造的",
      },
      {
        emoji: "🦅",
        name: "鹰型人格",
        englishName: "The Strategic Eye",
        statement: "你从不盲目出击，\n你在高处看清一切，然后精准降落。",
        rarity: "约 9%",
        outer: "冷静、锐利、不露声色。你给人的感觉是——危险但可靠。",
        social: "你选择盟友而不是朋友。你的圈子小，但每个人都经过你的审视。",
        inner: "你渴望掌控全局的感觉，但不是为了权力本身——而是为了安全感。",
        values: "精准是你的信仰。浪费，无论是时间还是情感，都是你无法容忍的。",
        blindspot: "你可能把所有关系都当成了棋局。有时候，失控才是亲密的开始。",
        quote: "最危险的不是行动，而是在错误的时机行动",
      },
      {
        emoji: "🐆",
        name: "猎豹型人格",
        englishName: "The Decisive Strike",
        statement: "你不等待机会，\n你在别人还在犹豫时已经冲了出去。",
        rarity: "约 7%",
        outer: "你的速度和果断让人惊叹，但也让人紧张。你总是在行动。",
        social: "你尊重同样快的人，对犹豫不决的人缺乏耐心。",
        inner: "你害怕停下来。因为一旦停下，你就得面对内心的不安。",
        values: "你相信行动本身就是答案。想太多是弱者的特权。",
        blindspot: "你可能错过了慢下来才能看见的风景。不是所有的胜利都需要速度。",
        quote: "犹豫是唯一真正的失败",
      },
      {
        emoji: "🐺",
        name: "狼型人格",
        englishName: "The Pack Commander",
        statement: "你不是独行侠，\n你是那个在暴风雪中为团队找到方向的人。",
        rarity: "约 11%",
        outer: "忠诚、坚韧、有一股不服输的劲。你是天生的战友。",
        social: "你的社交围绕着使命展开。没有共同目标的关系，你很难维持。",
        inner: "你需要归属感，但不是被动的——你要成为被依赖的那个人。",
        values: "你相信团队的力量大于个人，但前提是你要在前方带路。",
        blindspot: "你可能把所有关系都变成了战场。休息不是示弱，而是蓄力。",
        quote: "风暴来临时，狼群不散",
      },
    ],
  },
  social: {
    animals: [
      {
        emoji: "🐬",
        name: "海豚型人格",
        englishName: "The Emotional Architect",
        statement: "你不只是在沟通，\n你在为每个人创造被理解的瞬间。",
        rarity: "约 14%",
        outer: "温暖、灵动、让人放松。你是那种一出现气氛就变好的人。",
        social: "你本能地调节群体的情绪温度。别人可能没意识到，但你一直在做这件事。",
        inner: "你害怕被孤立，更害怕自己的真实情感不被接纳。",
        values: "连接是你的信仰。你相信没有什么问题是真诚的对话解决不了的。",
        blindspot: "你可能在照顾所有人的过程中，忘了照顾自己。",
        quote: "理解不是技巧，是勇气",
      },
      {
        emoji: "🐕",
        name: "犬型人格",
        englishName: "The Loyal Guardian",
        statement: "你的忠诚不是盲目的，\n而是一种你选择坚守的信念。",
        rarity: "约 15%",
        outer: "可靠、热情、让人安心。你是每个团队里那个不可替代的存在。",
        social: "你投入的关系都是全情投入。你不懂什么叫'随便处处'。",
        inner: "你需要被需要。这既是你的力量，也是你的软肋。",
        values: "承诺对你来说是神圣的。你无法理解为什么有人会轻易食言。",
        blindspot: "你可能把忠诚变成了负担。不是所有人都值得你守护。",
        quote: "被需要不是软弱，是选择",
      },
      {
        emoji: "🐴",
        name: "马型人格",
        englishName: "The Spirited Companion",
        statement: "你不是被驯服的，\n你是选择与人并肩的。",
        rarity: "约 10%",
        outer: "昂扬、优雅、有感染力。你在人群中自然成为焦点。",
        social: "你喜欢和人一起奔跑——不是竞争，而是共同经历。",
        inner: "你需要自由，但又渴望陪伴。这两者之间的平衡是你一生的课题。",
        values: "你相信生命应该是壮烈的，而不是安全的。",
        blindspot: "你可能高估了自己的承受力。奔跑太久，也需要停下来喝水。",
        quote: "真正的自由，是选择和谁同行",
      },
      {
        emoji: "🦚",
        name: "孔雀型人格",
        englishName: "The Magnetic Presence",
        statement: "你不是在表演，\n你只是无法隐藏自己的光芒。",
        rarity: "约 6%",
        outer: "引人注目、自信、有艺术感。你的存在本身就是一种表达。",
        social: "你需要舞台，但不是因为虚荣——而是因为你相信美应该被看见。",
        inner: "你内心比外表敏感得多。当掌声消失，你会怀疑自己的价值。",
        values: "美和表达是你的核心驱动力。平庸的生活对你来说是一种刑罚。",
        blindspot: "你可能把关注等同于爱。有时候，最深的连接发生在无人注视的时刻。",
        quote: "光芒不是为了被看见，而是因为无法熄灭",
      },
    ],
  },
  wisdom: {
    animals: [
      {
        emoji: "🦉",
        name: "猫头鹰型人格",
        englishName: "The Silent Observer",
        statement: "你不需要参与混乱，\n你在黑暗中看得比任何人都清楚。",
        rarity: "约 10%",
        outer: "沉静、深邃、不容易被读懂。你的安静让人敬畏。",
        social: "你偏好深度对话而不是闲聊。你的社交很少，但每一次都有意义。",
        inner: "你对理解的渴望超过一切。你最怕的不是孤独，而是肤浅。",
        values: "真相是你的信仰，即使它令人不舒服。",
        blindspot: "你可能把理解当作了连接的替代品。知道一个人和靠近一个人是两回事。",
        quote: "真正的智慧，是知道何时沉默",
      },
      {
        emoji: "🦌",
        name: "鹿型人格",
        englishName: "The Gentle Perceiver",
        statement: "你不是脆弱的，\n你只是感知到了别人忽略的一切。",
        rarity: "约 11%",
        outer: "温柔、敏感、有一种不被打扰的美。你像是从另一个世界来的。",
        social: "你在安全的关系中才会打开自己。信任对你来说需要时间。",
        inner: "你的内心世界极其丰富，但你很少向人展示。",
        values: "你相信温柔是一种力量，而不是软弱。",
        blindspot: "你可能把退缩当成了保护。有时候，被看见才是真正的安全。",
        quote: "敏感不是伤口，是天赋",
      },
      {
        emoji: "🐍",
        name: "蛇型人格",
        englishName: "The Deep Strategist",
        statement: "你不是冷血的，\n你只是不会浪费温度在不值得的地方。",
        rarity: "约 5%",
        outer: "神秘、沉着、有穿透力。你的目光让人不安，因为你总能看到真相。",
        social: "你很少主动社交，但你的洞察力让每次互动都有分量。",
        inner: "你追求深刻，厌恶表面。你宁愿孤独也不愿虚假。",
        values: "你相信脱胎换骨——不断蜕皮是成长的必经之路。",
        blindspot: "你可能把深刻当成了冷漠的借口。有些人值得你展示温度。",
        quote: "蜕皮不是抛弃过去，是拥抱新的自己",
      },
      {
        emoji: "🐈",
        name: "猫型人格",
        englishName: "The Independent Mind",
        statement: "你不是不在乎，\n你只是拒绝用别人的标准来衡量自己。",
        rarity: "约 13%",
        outer: "独立、从容、有一种不急不躁的优雅。你做自己的方式让人羡慕。",
        social: "你的社交完全按自己的节奏来。你可以很亲密，也可以瞬间消失。",
        inner: "你比看起来更需要温暖，但你不会主动索取。",
        values: "你相信每个人都应该按照自己的方式活着。",
        blindspot: "你可能把独立变成了防御。让人走近不等于失去自我。",
        quote: "不需要被理解，但值得被尊重",
      },
    ],
  },
  freedom: {
    animals: [
      {
        emoji: "🦊",
        name: "狐狸型人格",
        englishName: "The Chaos Adapter",
        statement: "你不是在适应环境，\n而是在变化中寻找空间。",
        rarity: "约 8%",
        outer: "你看起来灵活、轻松，但始终在观察变化。",
        social: "你更倾向阶段性连接，而不是长期依附。",
        inner: "你需要空间，而不是稳定。",
        values: "你相信边界是可以被打破的。",
        blindspot: "你可能在变化中失去长期连接。",
        quote: "你在混乱中生存，而不是逃离",
      },
      {
        emoji: "🐦‍⬛",
        name: "乌鸦型人格",
        englishName: "The Edge Walker",
        statement: "你不是叛逆的，\n你只是比大多数人更早看到了规则的荒谬。",
        rarity: "约 6%",
        outer: "锋利、另类、不合群。你的存在本身就是一种质疑。",
        social: "你吸引同样边缘的灵魂。你的圈子不大，但每个人都很有趣。",
        inner: "你渴望真实，厌恶伪装。你宁愿被误解也不愿迎合。",
        values: "你相信打破规则才能创造新的可能。",
        blindspot: "你可能把对抗当成了个性。有时候，融入也是一种智慧。",
        quote: "不被理解是自由的代价，但不是借口",
      },
      {
        emoji: "🕊️",
        name: "鹤型人格",
        englishName: "The Quiet Wanderer",
        statement: "你不是在逃避什么，\n你只是在寻找一个值得停留的地方。",
        rarity: "约 7%",
        outer: "优雅、超脱、有一种不属于这个时代的气质。",
        social: "你在人群中可以很自在，但你更享受独处。",
        inner: "你追求一种精神上的自由，而不仅仅是物理上的。",
        values: "你相信人生的意义不在于拥有，而在于经历。",
        blindspot: "你可能把超脱当成了逃避。有些东西值得你用根去连接。",
        quote: "真正的自由不是无所牵挂，而是知道何时落脚",
      },
      {
        emoji: "🐇",
        name: "兔子型人格",
        englishName: "The Gentle Rebel",
        statement: "你不是胆小的，\n你只是知道什么时候该跑，什么时候该停。",
        rarity: "约 9%",
        outer: "柔和、低调、让人忽略你的锋芒。但你的速度和直觉让人惊讶。",
        social: "你在安全的环境中是最可爱的存在，但你一感到威胁就会消失。",
        inner: "你渴望平静，但你的灵魂里有一股不安分的力量。",
        values: "你相信生存本身就是一种胜利。",
        blindspot: "你可能把逃避当成了保护。有时候，留下来才是最勇敢的选择。",
        quote: "温柔不是退让，是知道何时前进",
      },
    ],
  },
};

export function getResult(answers: number[]): {
  main: AnimalResult;
  secondary: AnimalResult;
  mainCategory: Category;
  secondaryCategory: Category;
} {
  const counts: Record<Category, number> = { power: 0, social: 0, wisdom: 0, freedom: 0 };
  const categoryMap: Category[] = ['power', 'social', 'wisdom', 'freedom'];

  answers.forEach((answerIdx) => {
    const cat = categoryMap[answerIdx];
    if (cat) counts[cat]++;
  });

  const sorted = (Object.entries(counts) as [Category, number][]).sort((a, b) => b[1] - a[1]);
  const mainCat = sorted[0][0];
  const secondaryCat = sorted[1][0];

  // Deterministic animal selection based on answer pattern
  const mainAnimals = categoryGroups[mainCat].animals;
  const secondaryAnimals = categoryGroups[secondaryCat].animals;
  
  const mainHash = answers.reduce((a, b) => a + b, 0);
  const main = mainAnimals[mainHash % mainAnimals.length];
  const secondary = secondaryAnimals[(mainHash + 1) % secondaryAnimals.length];

  return { main, secondary, mainCategory: mainCat, secondaryCategory: secondaryCat };
}
