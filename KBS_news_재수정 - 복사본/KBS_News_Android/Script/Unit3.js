//USEUNIT Unit1
function Test1()
{
  var image_name, childcount, i, Name;
  image_name = "False";
  childcount = 0;
  i = 0;
  Name = "";
  //The beginning of the KBS News 페이지 이동 group
  //Runs the "SmartBearBrowser" tested application.
  //TestedApps.SmartBearBrowser.Run();
  //Simulates a touch on the View control at the specified position in control-relative coordinates. If no coordinates are specified, a touch is simulated in the center of the control.
  //Aliases.Device.Process_smartbear_smartbearbrowser.RootLayout.Layout_NO_ID.EditText_txtUrl.Touch();
  //Enters text in the edit control.
  //Aliases.Device.Process_smartbear_smartbearbrowser.RootLayout.Layout_NO_ID.EditText_txtUrl.SetText(Project.Variables.Main_URL);
  //Performs a single touch on the specified button.
  //Aliases.Device.Process_smartbear_smartbearbrowser.RootLayout.Layout_NO_ID.Button_Go.TouchButton();
  //The end of the KBS News 페이지 이동 group
  //Project.Variables.News_Title_comparison = Aliases.Device.Process_smartbear_smartbearbrowser.RootLayout.WebView_webView.Page_mnkbscokrmobilemainhtml.panel.panel.section.link_8_.textnode_8_.contentText;
  //The beginning of the 뉴스기사 동영상 여부 확인 group
  //Simulates a click on the View control at the specified position using control-relative coordinates. If no coordinates are specified, a click is simulated in the center of the control.
  //Aliases.Device.Process_smartbear_smartbearbrowser.RootLayout.WebView_webView.Page_mnkbscokrmobilemainhtml.panel.panel.section.link_.textnode_.Click();
  //Pauses the script execution until the specified Web page is downloaded or until the specified time limit elapses.
  //Aliases.Device.Process_smartbear_smartbearbrowser.RootLayout.WebView_webView.Page_mnkbscokrmobilemainhtml.Wait();
  //The beginning of the 뉴스기사 스크랩/좋아요/공유하기 버튼 확인 group
  //Checks whether the 'textContent' property of the Aliases.Device.Process_smartbear_smartbearbrowser.RootLayout.WebView_webView.Page_mnkbscokrmobilenewsviewdo.panel.panel.panel.article.panel2.panel.button6 object contains '좋아요'.
  //aqObject.CheckProperty(Aliases.Device.Process_smartbear_smartbearbrowser.RootLayout.WebView_webView.Page_mnkbscokrmobilenewsviewdo.panel.panel.panel.article.panel2.panel.button6, "textContent", cmpContains, "좋아요", false);
  //Checks whether the 'textContent' property of the Aliases.Device.Process_smartbear_smartbearbrowser.RootLayout.WebView_webView.Page_mnkbscokrmobilenewsviewdo.panel.panel.panel.article.panel2.panel.link0 object contains '메시지'.
  //aqObject.CheckProperty(Aliases.Device.Process_smartbear_smartbearbrowser.RootLayout.WebView_webView.Page_mnkbscokrmobilenewsviewdo.panel.panel.panel.article.panel2.panel.link0, "textContent", cmpContains, "메시지", false);
  //Checks whether the 'textContent' property of the Aliases.Device.Process_smartbear_smartbearbrowser.RootLayout.WebView_webView.Page_mnkbscokrmobilenewsviewdo.panel.panel.panel.article.panel2.panel.button object equals '스크랩하기'.
  //aqObject.CheckProperty(Aliases.Device.Process_smartbear_smartbearbrowser.RootLayout.WebView_webView.Page_mnkbscokrmobilenewsviewdo.panel.panel.panel.article.panel2.panel.button, "textContent", cmpEqual, "스크랩하기");
  //Checks whether the 'textContent' property of the Aliases.Device.Process_smartbear_smartbearbrowser.RootLayout.WebView_webView.Page_mnkbscokrmobilenewsviewdo.panel.panel.panel.article.panel2.panel.link object equals '공유하기'.
  //aqObject.CheckProperty(Aliases.Device.Process_smartbear_smartbearbrowser.RootLayout.WebView_webView.Page_mnkbscokrmobilenewsviewdo.panel.panel.panel.article.panel2.panel.link, "textContent", cmpEqual, "공유하기");
  //The end of the 뉴스기사 스크랩/좋아요/공유하기 버튼 확인 group
  //Checks whether the property value matches the specified condition. 
  //aqObject.CompareProperty(Aliases.Device.Process_smartbear_smartbearbrowser.RootLayout.WebView_webView.Page_mnkbscokrmobilenewsviewdo.panel.panel.panel.article.panel.textnode_2.contentText, 0, Project.Variables.News_Title_comparison);
  //The end of the 뉴스기사 동영상 여부 확인 group
  i = 0;
  childcount = Aliases.Device.Process_smartbear_smartbearbrowser.RootLayout.WebView_webView.Page_mnkbscokrmobilenewsviewdo.panel.panel.panel.article.panel3.ChildCount;
  //Runs a script routine.
  ChildrenNames();
  if(Aliases.Device.Process_smartbear_smartbearbrowser.RootLayout.WebView_webView.Page_mnkbscokrmobilenewsviewdo.panel.panel.panel.article.panel3.Child(1).Name == "Image")
  {
    //Simulates a click on the View control at the specified position using control-relative coordinates. If no coordinates are specified, a click is simulated in the center of the control.
    Aliases.Device.Process_smartbear_smartbearbrowser.RootLayout.WebView_webView.Page_mnkbscokrmobilenewsviewdo.panel.panel.header.panel.linkKBS.Click();
  }
  else
  {
    //Simulates a click on the View control at the specified position using control-relative coordinates. If no coordinates are specified, a click is simulated in the center of the control.
    Aliases.Device.Process_smartbear_smartbearbrowser.RootLayout.WebView_webView.Page_mnkbscokrmobilenewsviewdo.panel.panel.panel.article.panel3.link_.Click();
  }
}