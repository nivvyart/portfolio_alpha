$(".mainbag").viewScroller({
  // Animation
  animSpeedMainView: 700, // Animation speed of mainviews: 0 - fastest
  animSpeedSubView: 700, // Animation speed of subviews: 0 - fastest
  animEffectMainView: "easeInOutCubic", // Animation effect of mainviews change - jQuery (easing)
  animEffectSubView: "easeInOutCubic", // Animation effect of subviews change - jQuery (easing)
  animEffectMainViewCss3: "ease", // Animation effect of mainviews change - CSS3 (easing)
  animEffectSubViewCss3: "ease", // Animation effect of subviews change - CSS3 (easing)

  // Steering
  useKeyboard: true, // Use keyboard to change views
  useScrollbar: false, // Use scrollbar to change views
  changeWhenAnim: true, // Change views when they are changing
  loopMainViews: false, // Change horizontal views (mainviews) in loop mode
  loopSubViews: false, // Change vertical views (subviews) in loop mode
  fitToView: true, // Will the browser fit to the closest view (works if the useScrollbar option is true)
  timeToFit: 1000, // Time between stop scrolling and start fitting to the closest view

  // Mainbag dimension
  fixedWidth: 0, // (in px) width of the mainbag - if 0 - then width = 100% of window (in px) = .mainbag { width: XXX }
  spaceMainBag: 0, // (in px) a total value of the right and the left CSS margin dimensions of the .mainbag, for example: if .mainbag { left: XXX, right: YYY} then spaceMainBag = XXX + YYY

  // Callbacks
  beforeChange: null, // Callback which is called before views change
  afterChange: null, // Callback which is called after views change
  beforeResize: null, // Callback which is called before browser window resize
  afterResize: null // Callback which is called after browser window resize
});
