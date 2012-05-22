// Created by iWeb 2.0.3 local-build-20080716

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_1:new IWShadow({blurRadius:3,offset:new IWPoint(0.0000,0.0000),color:'#800000',opacity:0.700000}),shadow_0:new IWShadow({blurRadius:0,offset:new IWPoint(0.0000,0.0000),color:'#000000',opacity:0.050000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('VOTE_ONLINE_-_Seumus.K.Whalley_-_Waikato_files/VOTE_ONLINE_-_Seumus.K.Whalley_-_WaikatoMoz.css')
detectBrowser();adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
