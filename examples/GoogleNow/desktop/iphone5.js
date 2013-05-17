// iPhone
iphone = new ImageView({
  x:-170, y:-390,
  width:764, height:1604
});
iphone.image = "desktop/iphone5.png";
iphone.style.backgroundColor = "transparent";
iphone.scale = 0.50;

// Screen within iPhone container
screen = new View({
  x: 62, y:276,
  width:640, height:1096,
  superView:iphone
});

// Place content into the screen
PSD["Content"].superView = screen;

// Text instructions to encourage mobile viewing
textView = new View({
  x: 430, y: 150,
  width:250, height:300
});

textView.html = "This prototype is best experienced on an iPhone5. Open this page in mobile safari and <a target='_blank' href='https://www.apple.com/ios/add-to-home-screen/images/hero.jpg'>add to home screen</a>."
textView.style = {
  "font-size": "18px",
  "line-height": "22px",
  "text-align": "left",
  "color": "rgba(255,255,255,0.85)",
};