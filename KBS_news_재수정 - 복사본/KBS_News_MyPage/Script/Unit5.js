function Test()
{

  let url = "http://smartbear.com/";
  // Launches the web browser and opens the web page
  Browsers.Item(btIexplorer).Run(url);
  let page = Sys.Browser().Page("*");

  // Obtains the image of the browser window
  let picture = page.PagePicture();

  // Loads the sought-for image
  let pict = Utils.Picture;
  pict.LoadFromFile("c:\my_image.bmp");

  // Searches for the image within the browser window
  let rect = picture.Find(pict);
  if (strictEqual(rect, null))
  {
    Log.Warning("The image was not found on the page.");
    return;
  }

  // Calculates the coordinates of the image center
  let x = page.ScreenLeft + rect.Left + rect.Width / 2;
  let y = page.ScreenTop + rect.Top + rect.Height / 2;
  // Obtains the IMG object by coordinates
  let img = Sys.Desktop.ObjectFromPoint(x, y);

  // Checks the results and simulates a mouse click over the image
  if (img.Exists)
    img.Click();
  else
    Log.Warning("Unable to simulate the click.");

}