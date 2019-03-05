function Test2()
{
  var Var1, Var2;
  Var1 = "";
  Var2 = "";
  Var1 = Aliases.browser.pageNewsKbsCoKrNewsViewDoNcd4054.panelWrap.panelContainer.panelContent.panel.panel.panelMsg.panel.panelLvContainer.frameLvComment433.idStr;
  //Posts an information message to the test log.
  Log.Message(Var1, "");
  Var2 = Aliases.browser.pageNewsKbsCoKrNewsViewDoNcd4054.panelWrap.panelContainer.panelContent.baseURI;
  //Posts an information message to the test log.
  Log.Message(Var2, "");
  //Returns an object by the values of the specified properties.
  Aliases.browser.pageNewsKbsCoKrNewsViewDoNcd4054.Find();
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btIExplorer).Run();
}

function Test1()
{
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btChrome).Run("http://news.kbs.co.kr/common/main.html");
  //Clicks the 'linkLoginId' link.
  Aliases.browser.pageNewsKbsCoKrCommonMainHtml.panelWrap.panelContainer.panelHeader.panel.linkLoginId.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageSsoKbsCoKrSso2KbswebLoginCap.Wait();
  //Sets the text 'ssotest' in the 'textboxTxtuserid' text editor.
  Aliases.browser.pageSsoKbsCoKrSso2KbswebLoginCap.panelContent.panel.formMainform.textboxTxtuserid.SetText("ssotest");
  //Enters '[Tab]' in the 'textboxTxtuserid' object.
  Aliases.browser.pageSsoKbsCoKrSso2KbswebLoginCap.panelContent.panel.formMainform.textboxTxtuserid.Keys("[Tab]");
  //Sets the text 'ghldnjs1' in the 'passwordboxTxtpwd' text editor.
  Aliases.browser.pageSsoKbsCoKrSso2KbswebLoginCap.panelContent.panel.formMainform.passwordboxTxtpwd.SetText("ghldnjs1");
  //Clicks the 'link' link.
  Aliases.browser.pageSsoKbsCoKrSso2KbswebLoginCap.panelContent.panel.formMainform.link.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageSsoKbsCoKrSso2KbswebLoginCap.Wait();
  //Clicks at point (452, 27) of the 'textnode112' object.
  Aliases.browser.pageNewsKbsCoKrCommonMainHtml.panelWrap.panelContainer.panelContent.panel.panel.link.textnode112.Click(452, 27);
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageNewsKbsCoKrNewsViewDoNcd4054.Wait();
  //Delays the test execution for the specified time period.
  Delay(1000);
  //Place mouse pointer over the specified control (relative position).
  Aliases.browser.pageNewsKbsCoKrNewsViewDoNcd4054.panelWrap.panelContainer.panelContent.panel.panel.button8.HoverMouse();
  //Delays the test execution for the specified time period.
  Delay(500);
  //Place mouse pointer over the specified control (relative position).
  Aliases.browser.pageNewsKbsCoKrNewsViewDoNcd4054.panelWrap.panelContainer.panelContent.panel.panel.panelMsg.panel.HoverMouse(200, 10);
  //Check whether '*ssotest*' matches the text optically recognized in the image Aliases.browser.pageNewsKbsCoKrNewsViewDoNcd4054.panelWrap.panelContainer.panelContent.panel.panel.panelMsg.panel.panelLvContainer.frameLvComment433.
  OCR.Recognize(Aliases.browser.pageNewsKbsCoKrNewsViewDoNcd4054.panelWrap.panelContainer.panelContent.panel.panel.panelMsg.panel.panelLvContainer.frameLvComment433).CheckText("*ssotest*");
  OCR.Recognize(Aliases.browser.pageNewsKbsCoKrNewsViewDoNcd4054.panelWrap.panelContainer.panelContent.panel.panel.panelMsg.panel.panelLvContainer.frameLvComment433).BlockByText("입력해").Click();
  OCR.Recognize(Aliases.browser.pageNewsKbsCoKrNewsViewDoNcd4054.panelWrap.panelContainer.panelContent.panel.panel.panelMsg.panel.panelLvContainer.frameLvComment433).BlockByText("입력해").Click();
  //Enters 'dkdkdk' in the 'frameLvComment433' object.
  Aliases.browser.pageNewsKbsCoKrNewsViewDoNcd4054.panelWrap.panelContainer.panelContent.panel.panel.panelMsg.panel.panelLvContainer.frameLvComment433.Keys("dkdkdk");
}