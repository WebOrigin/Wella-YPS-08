// Created by iWeb 2.0.3 local-build-20080716

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:0,offset:new IWPoint(0.0000,0.0000),color:'#000000',opacity:0.050000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Wella_YPS_08_-_VOTE_ONLINE_files/Wella_YPS_08_-_VOTE_ONLINEMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');detectBrowser();adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');fixAllIEPNGs('Media/transparent.gif');Widget.onload();applyEffects()}
function onPageUnload()
{Widget.onunload();}
