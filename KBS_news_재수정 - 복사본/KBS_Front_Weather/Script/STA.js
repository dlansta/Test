function browserAdd()
{
  Sys.Browser().Page("*").SendDebuggerCommand('Page.setDeviceMetricsOverride', '{"width":' + VirtualBrowsers.CurrentBrowser.ScreenWidth + ',"height":' + VirtualBrowsers.CurrentBrowser.ScreenHeight + ',"mobile":true' + ',"deviceScaleFactor":' + VirtualBrowsers.CurrentBrowser.DevicePixelRatio + '}');
}

function browserBack()
{
  var page = Sys.Browser().Page("*");
  page.Keys("[Left]");
}