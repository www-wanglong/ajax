# clean code
https://www.bookstack.cn/read/Clean-Code-zh/docs-README.md
# 1. Clean Code
## 1.1 要有代码
代码呈现了需求的细节。在某些层面上，这些细节无法被忽略或抽象，必须明确之。所以代码永存。
## 1.2 糟糕的代码
稍后等于永不
## 1.3 混乱的代价
赶上期限的唯一方法--就是始终尽可能保持代码的整洁。

编写整洁代码的程序员就像是艺术家，他能用一系列变化把一块白板变作由优雅代码构成的系统。

### 1.3.1 什么整洁代码
优雅

破窗理论：窗户破损了的建筑让人觉得似乎无人照管。于是别人也再不关心。他们放任窗户继续破损。最终自己也参加破坏活动，在外墙上涂鸦，任垃圾堆积。一扇破损的窗户开辟了大厦走向倾颓的道路。

整洁的代码只做好一件事

## 1.6 童子军军规
让营地比你来时更干净
# 2. 有意义的命名

## 2.2 名副其实
好的名称
## 2.3 避免误导
应当避免使用与本意相悖的词
## 2.4 做有意义的区分
`ProductInfo`或`ProductData`类，意义无区别
## 2.5 使用读的出来的名称
bad
```Java
class DtaRcrd102 {
  private Date genymdhms;
  private Date modymdhms;
  private final String pszqint = '102'
}
```
good
```Java
class CUstomer {
  private Date generationTimestamp;
  private Date modificationTimestamp;
  private final String recordId = '102'
}
```

## 2.6 适应可搜索的名称
找 MAX_CLASSES_PER_STUDENT 很容易，但想找数字 7 就麻烦了。
## 2.7 避免使用编码

不必用m_前缀来标明成员变量。应当把类和函数做得足够小，消除对成员前缀的需要。

## 2.8 避免思维映射

专业程序员了解，明确是王道。专业程序员善用其能，编写其他人能理解的代码。

## 2.9 类名
类名和对象名应该是名词或名词短语。如Customer、WikiPage、Account和AddressParser。避免使用Manager、Processor、Data或Info这样的类名。类名不应该的动词。

## 2.10 方法名
方法名应当是动词或动词短语。属性访问器、修改器和断言应该根据其值命名，并依Javabean标准加上get、set和is前缀

## 2.11 别装扮可爱
Say what you mean.Mean what you say.

## 2.12 每个概念对应一个词
对于那些会用到你代码的程序员，一以贯之的命名简直就是天降福音

## 2.13 别用双关语
避免将同一单词用于不同的目的。遵循'一词一意'

## 2.14 使用解决方案领域名称
只有程序员才会读你的代码。给这些事取个技术性的名称。

## 2.15 使用源自所涉及问题领域的名称
如果不能用程序员熟悉的术语来给手头的工作命名，就采用从所涉及问题的领域而来的名称。

## 2.16 添加有意义的语境
需要用有良好命名的类、函数或名称空间来放置名称

## 2.17 不要添加没有用的语境
## 2.18 总结
# 3. 函数
## 3.1 短小
## 3.2 只做一件事

函数应该做一件事。做好一件事。只做一件事。

如果函数只是做了该函数名下**同一抽象层上**的步骤，则函数还是只做了一件事。

所以，要判断函数是否不止做了一件事，就是要看是否能再拆出一个函数，该函数不仅只是单纯地诠释其实现。
```Java
public static String testableHtml(PageData pageData, boolean includeSuiteSetup) throws Exception {
  WikiPage wikiPage = pageData.getWikiPage();
  StringBuffer buffer = new StringBuffer();
  if (pageData.hasAttribute("Test")) {
    if (includeSuiteSetup) {
      WikiPage suiteSetup =PageCrawlerImpl.getInheritedPage(SuiteResponder.SUITE_SETUP_NAME, wikiPage);
      if (suiteSetup != null) {
        WikiPagePath pagePath = suiteSetup.getPageCrawler().getFullPath(suiteSetup);
        String pagePathName = PathParser.render(pagePath);
        buffer.append("!include -setup .")
              .append(pagePathName)
              .append("\n");
      }
    }
    WikiPage setup =PageCrawlerImpl.getInheritedPage("SetUp", wikiPage);
    if (setup != null) {
      WikiPagePath setupPath = wikiPage.getPageCrawler().getFullPath(setup);
      String setupPathName = PathParser.render(setupPath);
      buffer.append("!include -setup .")
            .append(setupPathName)
            .append("\n");
    }
  }
  buffer.append(pageData.getContent());
  if (pageData.hasAttribute("Test")) {
    WikiPage teardown = PageCrawlerImpl.getInheritedPage("TearDown", wikiPage);
    if (teardown != null) {
      WikiPagePath tearDownPath = wikiPage.getPageCrawler().getFullPath(teardown);
      String tearDownPathName = PathParser.render(tearDownPath);
      buffer.append("\n")
            .append("!include -teardown .")
            .append(tearDownPathName)
            .append("\n");
    }
    if (includeSuiteSetup) {
      WikiPage suiteTeardown = PageCrawlerImpl.getInheritedPage(SuiteResponder.SUITE_TEARDOWN_NAME,wikiPage);
      if (suiteTeardown != null) {
        WikiPagePath pagePath = suiteTeardown.getPageCrawler().getFullPath(suiteTeardown);
        String pagePathName = PathParser.render(pagePath);
        buffer.append("!include -teardown .")
              .append(pagePathName)
              .append("\n");
      }
    }
  }
  pageData.setContent(buffer.toString());
  return pageData.getHtml();
}
```

> 重构之后的代码

```Java
public static String renderPageWith;
SetupsAndTeardowns(
        PageData pageData, boolean isSuite) throws Exception {
    if (isTestPage(pageData))
        includeSetupAndTeardownPages(pageData, isSuite);
    return pageData.getHtml();
}
```

## 3.3 每个函数一个抽象层级
程序就像是一系列TO起头的段落，每一段都描述当前的抽象层级，并引用位于下一抽象层级的后续TO起头段落。

- 要容纳设置和分拆步骤
- 要...

## 3.4 `switch`语句

## 3.5 使用描述性的名称

命名方式要保持一致。使用与模块名一脉相承的短语、名词和动词函数命名

## 3.6 函数参数

参数越少越好

### 3.6.1 一元函数的普通形式

### 3.6.2 表识参数
标识参数丑陋不堪
### 3.6.3 二元函数
尽量利用一些机制将其转换成一元函数
### 3.6.5 参数对象

如果函数看来需要两个、三个或三个以上参数，就说明其中一些参数应该封装为类了。
### 3.6.6 参数列表

### 3.6.7 动词与关键词
函数和参数应该动词和名词形式

## 3.7 无副作用

## 3.8 分割指令和询问
## 3.9 使用异常替代返回错误码
## 3.10 别重复自己
## 3.11 结构化编程

## 3.12 小结
把系统当作故事来讲

# 4. 注释

别给糟糕的代码加注释--重新写吧

如果你发现自己需要写注释，再想想看是否有办法翻盘，用代码来表达。每次用代码表达，你都该夸奖一下自己。每次写注释，你都该做个鬼脸，感受自己在表达能力上的失败。

## 4.1 注释不能美化糟糕的代码
与其花时间编写解释你搞出的糟糕代码的注释，不如花时间清洁那对糟糕的代码。
## 4.2 用代码来阐述
## 4.3 好注释
有些注释是必须的，也是有利的。不过要记住，唯一真正好注释是想办法不去写的注释。
### 4.3.1 法律信息
### 4.3.2 提供信息
### 4.3.2 对意图的解释
### 4.3.6 TODO注释
### 4.3.7 放大
注释可以用来放大某种看来不合理之物的重要性。

## 4.4 坏注释
### 4.4.1 喃喃自语
### 4.4.2 多余的注释
### 4.4.3 误导性注释
### 4.4.4 循规式注释
所谓每个函数都要有 Javadoc 或每个变量都要有注释的规矩全然是愚蠢可笑的。这类注释徒然让代码变得散乱，满口胡言，令人迷惑不解。
### 4.4.5 日志式注释
### 4.4.6 废话注释
用整理代码的决心代替创造废话的冲动。你会发现自己成为更优秀、更快乐的程序员。
### 4.4.7 可怕的废话
```Java
/** The name. */
private String name;
/** The version. */
private String version;
/** The licenceName. */
private String licenceName;
/** The version. */
private String info;
```

### 4.4.8 能用函数或者变量时就别用注释
### 4.4.9 位置标记
### 4.4.10 括号后面的注释
### 4.4.11 归属和署名
### 4.4.12 注释掉的代码
### 4.4.13 html注释

# 5. 格式

## 5.1 格式的目的
代码的可读性会对以后可能发生的修改行为产生深远的影响。即便代码已不存在，你的风格和律条仍存活下来

## 5.2 垂直格式
短文件通常比长文件易与理解。

紧密相关的代码应该相互靠近。

被调用的函数应该放在执行调用的函数下面。

## 5.3 横向风格

### 5.3.1 水平方向上的区隔与靠近
### 5.3.2 水平对齐
不对齐的方式可以指出重点
### 5.3.3 缩进

# 6. 对象和数据结构
## 6.1 数据抽象


### 6.1.2 数据、对象的反对称性

过程式代码难以添加新的数据结构，因为必须修改所有函数。面向对象代码难以添加新函数，因为必需修改所有类。