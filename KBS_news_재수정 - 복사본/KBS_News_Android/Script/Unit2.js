function ChildrenNames()
 {
  var LogsCol = Project.Logs;
  var LogItem = LogsCol.LogItem(0);
  var Num = Aliases.Device.Process_smartbear_smartbearbrowser.RootLayout.WebView_webView.Page_mnkbscokrmobilenewsviewdo.panel.panel.panel.article.panel3.ChildCount;    
  var Name = Aliases.Device.Process_smartbear_smartbearbrowser.RootLayout.WebView_webView.Page_mnkbscokrmobilenewsviewdo.panel.panel.panel.article.panel3.Child(1).Name;
    Log.Message(Name);
 
 }