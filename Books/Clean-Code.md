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
