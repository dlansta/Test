function Test1()
{
  //Launches the specified browser and opens the specified URL in it.
  //Browsers.Item(btChrome).Run(Project.Variables.Main_URL);
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate(Project.Variables.Main_URL);
  //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
  Aliases.browser.pageNewsKbsCoKrCommonMainHtml.panelWrap.panelContainer.panelContent.panel.panel.link.Click();
  //Delays the test execution for the specified time period.
  Delay(500);
  Project.Variables.Height = Aliases.browser.pageNewsKbsCoKrNewsViewDoNcd4054.panelWrap.panelContainer.panelContent.panel.panel.Height;
  //Posts an information message to the test log.
  Log.Message(Project.Variables.Height, "");
  //Moves the mouse pointer over the 'panelGroupCate' control.
  Aliases.browser.pageNewsKbsCoKrNewsViewDoNcd4054.panelWrap.panelContainer.panelFooter.panelNewsMenuWrap.panelGroupCate.HoverMouse();
  //Delays the test execution for the specified time period.
  Delay(1000);
  //Moves the mouse pointer over the 'panelGroupCate' control.
  Aliases.browser.pageNewsKbsCoKrNewsViewDoNcd4054.panelWrap.panelContainer.panelFooter.panelNewsMenuWrap.panelGroupCate.HoverMouse();
  //Delays the test execution for the specified time period.
  Delay(500);
  //Moves the mouse pointer over the 'button8' control.
  Aliases.browser.pageNewsKbsCoKrNewsViewDoNcd4054.panelWrap.panelContainer.panelContent.panel.panel.button8.HoverMouse();
  //Delays the test execution for the specified time period.
  Delay(500);
  //Check whether '*ssotest*' matches the text optically recognized in the image Aliases.browser.pageNewsKbsCoKrNewsViewDoNcd4054.panelWrap.panelContainer.panelContent.panel.panel.panelMsg.panel.panelLvContainer.frameLvComment433.
  OCR.Recognize(Aliases.browser.pageNewsKbsCoKrNewsViewDoNcd4054.panelWrap.panelContainer.panelContent.panel.panel.panelMsg.panel.panelLvContainer.frameLvComment433).CheckText("*ssotest*");
  //Simulates a user action over the area that contains the recognized text.
  OCR.Recognize(Aliases.browser.pageNewsKbsCoKrNewsViewDoNcd4054.panelWrap.panelContainer.panelContent.panel.panel.panelMsg.panel.panelLvContainer.frameLvComment433).BlockByText("입력해").Click();
  //Enters 'asdfsad' in the 'frameLvComment433' object.
  Aliases.browser.pageNewsKbsCoKrNewsViewDoNcd4054.panelWrap.panelContainer.panelContent.panel.panel.panelMsg.panel.panelLvContainer.frameLvComment433.Keys("asdfsad");
}