function _0x2189(){const _0x3af746=['pfp_src','imgSrc','getElementById','location','4qNTIKj','clicked','user-uid','shift','json','1790810OGyDQA','11233476KFoHik','8385VOsSQS','getItem','110gjiBYo','random','1919280biDPyP','length','right-text','onload','lname','src','377AMjrzc','index.html','href','uid','left-image','right-image','right','fields','profile-pic','504BhyGFA','addEventListener','application/json','fname','classList','https://sbmmbk.lol/api/v2.1.3/json/skillbasedmatchmake','22848EIjFmx','1sSlrJQ','textContent','click','4366449XNLcye','left','2926298gsrTWq','remove','stringify','left-text','push','add','3198cTkCbW'];_0x2189=function(){return _0x3af746;};return _0x2189();}const _0x2a7855=_0x40e7;(function(_0xd046ad,_0x3a5128){const _0x2db6c5=_0x40e7,_0x2b3e94=_0xd046ad();while(!![]){try{const _0x5cc96f=-parseInt(_0x2db6c5(0x16e))/0x1*(parseInt(_0x2db6c5(0x173))/0x2)+parseInt(_0x2db6c5(0x171))/0x3*(parseInt(_0x2db6c5(0x17e))/0x4)+-parseInt(_0x2db6c5(0x154))/0x5*(parseInt(_0x2db6c5(0x179))/0x6)+-parseInt(_0x2db6c5(0x16d))/0x7*(-parseInt(_0x2db6c5(0x167))/0x8)+-parseInt(_0x2db6c5(0x153))/0x9+parseInt(_0x2db6c5(0x152))/0xa*(-parseInt(_0x2db6c5(0x156))/0xb)+-parseInt(_0x2db6c5(0x158))/0xc*(-parseInt(_0x2db6c5(0x15e))/0xd);if(_0x5cc96f===_0x3a5128)break;else _0x2b3e94['push'](_0x2b3e94['shift']());}catch(_0x220555){_0x2b3e94['push'](_0x2b3e94['shift']());}}}(_0x2189,0xdc8f3));function _0x40e7(_0x6c1985,_0x4a2e20){const _0x218985=_0x2189();return _0x40e7=function(_0x40e785,_0xcceb8f){_0x40e785=_0x40e785-0x150;let _0x1ba8c8=_0x218985[_0x40e785];return _0x1ba8c8;},_0x40e7(_0x6c1985,_0x4a2e20);}const leftImage=document[_0x2a7855(0x17c)](_0x2a7855(0x162)),leftText=document[_0x2a7855(0x17c)](_0x2a7855(0x176)),rightImage=document[_0x2a7855(0x17c)](_0x2a7855(0x163)),rightText=document[_0x2a7855(0x17c)](_0x2a7855(0x15a)),userPicture=document['getElementById'](_0x2a7855(0x166)),uuid=localStorage[_0x2a7855(0x155)](_0x2a7855(0x180)),replaceWinnerChance=0x1,replaceLoserChance=0x1;let queue=[],canClick=!![];function updateImg(_0x9e5b4a){const _0x5a1575=_0x2a7855;if(queue[_0x5a1575(0x159)]>0x0){const _0x412e6a=queue[_0x5a1575(0x150)]();_0x9e5b4a==_0x5a1575(0x172)?(leftImage[_0x5a1575(0x15d)]=_0x412e6a[_0x5a1575(0x17b)],leftText[_0x5a1575(0x16f)]=_0x412e6a['name'],leftText['uid']=_0x412e6a['pk']):(rightImage['src']=_0x412e6a[_0x5a1575(0x17b)],rightText[_0x5a1575(0x16f)]=_0x412e6a['name'],rightText[_0x5a1575(0x161)]=_0x412e6a['pk']);}else fetch(_0x5a1575(0x16c),{'method':'POST','headers':{'Content-Type':_0x5a1575(0x169)},'body':JSON[_0x5a1575(0x175)]({'uuid':uuid})})['then'](_0x200427=>_0x200427[_0x5a1575(0x151)]())['then'](_0x20455d=>{const _0x43fa93=_0x5a1575;for(let _0x317d89=0x0;_0x317d89<_0x20455d[_0x43fa93(0x159)];_0x317d89++){let _0x176fb2=_0x20455d[_0x317d89][_0x43fa93(0x165)];const _0x848524={'imgSrc':_0x176fb2[_0x43fa93(0x17a)],'name':_0x176fb2[_0x43fa93(0x16a)]+'\x20'+_0x176fb2[_0x43fa93(0x15c)],'pk':_0x20455d[_0x317d89]['pk']};queue[_0x43fa93(0x177)](_0x848524);}updateImg(_0x9e5b4a);});}function updateElo(_0x42490e,_0x5c9f07){const _0x3d76fa=_0x2a7855;fetch('https://sbmmbk.lol/api/v2.1.3/json/p/upd',{'method':'POST','headers':{'Content-Type':_0x3d76fa(0x169)},'body':JSON[_0x3d76fa(0x175)]({'winner-id':_0x42490e,'loser-id':_0x5c9f07})});}window[_0x2a7855(0x15b)]=function(){const _0x2703f8=_0x2a7855,_0x485e45=localStorage[_0x2703f8(0x155)](_0x2703f8(0x180));_0x485e45==null&&(window[_0x2703f8(0x17d)][_0x2703f8(0x160)]=_0x2703f8(0x15f)),updateImg('left'),updateImg(_0x2703f8(0x164)),userPicture[_0x2703f8(0x15d)]=localStorage['getItem'](_0x2703f8(0x166));},leftImage['addEventListener'](_0x2a7855(0x170),()=>{const _0x418d2e=_0x2a7855;canClick&&(canClick=![],setTimeout(function(){canClick=!![];},0x3e8),leftImage[_0x418d2e(0x16b)][_0x418d2e(0x178)](_0x418d2e(0x17f)),setTimeout(()=>{const _0x2be3c2=_0x418d2e;leftImage[_0x2be3c2(0x16b)][_0x2be3c2(0x174)]('clicked'),updateElo(leftText[_0x2be3c2(0x161)],rightText[_0x2be3c2(0x161)]);if(Math[_0x2be3c2(0x157)]()<replaceWinnerChance)updateImg(_0x2be3c2(0x172));if(Math[_0x2be3c2(0x157)]()<replaceLoserChance)updateImg('right');},0x1f4));}),rightImage[_0x2a7855(0x168)](_0x2a7855(0x170),()=>{const _0x1fc516=_0x2a7855;canClick&&(canClick=![],setTimeout(function(){canClick=!![];},0x3e8),rightImage[_0x1fc516(0x16b)]['add']('clicked'),setTimeout(()=>{const _0xeb3ac2=_0x1fc516;rightImage[_0xeb3ac2(0x16b)][_0xeb3ac2(0x174)](_0xeb3ac2(0x17f)),updateElo(rightText[_0xeb3ac2(0x161)],leftText[_0xeb3ac2(0x161)]);if(Math[_0xeb3ac2(0x157)]()<replaceWinnerChance)updateImg('right');if(Math[_0xeb3ac2(0x157)]()<replaceLoserChance)updateImg(_0xeb3ac2(0x172));},0x1f4));});
