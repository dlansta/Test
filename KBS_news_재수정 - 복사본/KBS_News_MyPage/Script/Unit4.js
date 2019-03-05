function Test()
{
  
  Browsers.Item(btIExplorer).Run("http://news.kbs.co.kr/news/view.do?ncd=4137511");
  var a;
  a = document.getElementById("wf-content");
  a.innerHTML = "asd";




}