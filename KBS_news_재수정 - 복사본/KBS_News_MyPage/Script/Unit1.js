﻿function Test1()
{
  Browsers.Item(btChrome).Navigate("http://news.kbs.co.kr/news/view.do?ncd=4138363");
  var browser = Sys.Browser("chrome");
  var page = browser.Page("http://news.kbs.co.kr/news/view.do?ncd=4138363");
  var b = page.FindId("wf-content");
  Log.Message(b.contentText);
}