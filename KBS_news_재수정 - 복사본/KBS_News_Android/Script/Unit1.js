function ChildrenNames()
 {
  // Obtains the number of child elements
  // that belong to the log item
  var Num = Aliases.Device.Process_smartbear_smartbearbrowser.RootLayout.WebView_webView.Page_mnkbscokrmobilenewsviewdo.panel.panel.panel.article.panel3.ChildCount;
  // Iterates through the child items
  for (var i = 0; i < Num; i++)
  {
    // Obtains the name of the current log item
    var Name = Aliases.Device.Process_smartbear_smartbearbrowser.RootLayout.WebView_webView.Page_mnkbscokrmobilenewsviewdo.panel.panel.panel.article.panel3.Child(i).Name;
    Log.Message(Name);
  }
 }