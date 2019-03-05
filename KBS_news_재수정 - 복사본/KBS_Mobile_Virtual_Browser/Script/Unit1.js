function recoBrowser()
{
  Sys.Browser().Page("*").SendDebuggerCommand('Page.setDeviceMetricsOverride', 
    '{"width":' + VirtualBrowsers.CurrentBrowser.ScreenWidth + 
    ',"height":' + VirtualBrowsers.CurrentBrowser.ScreenHeight + 
    ',"mobile":true' + 
    ',"deviceScaleFactor":' + VirtualBrowsers.CurrentBrowser.DevicePixelRatio + '}');
}