window.__require=function t(i,e,a){function n(s,r){if(!e[s]){if(!i[s]){var h=s.split("/");if(h=h[h.length-1],!i[h]){var c="function"==typeof __require&&__require;if(!r&&c)return c(h,!0);if(o)return o(h,!0);throw new Error("Cannot find module '"+s+"'")}s=h}var u=e[s]={exports:{}};i[s][0].call(u.exports,function(t){return n(i[s][1][t]||t)},u,u.exports,t,i,e,a)}return e[s].exports}for(var o="function"==typeof __require&&__require,s=0;s<a.length;s++)n(a[s]);return n}({blockScore:[function(t,i){"use strict";cc._RF.push(i,"dd0e4kaI4xAzLCFbvK5hnat","blockScore"),cc.Class({extends:cc.Component,properties:{},init:function(t,i,e){var a=this;this.node.getComponent(cc.Label).string=t,cc.tween(this.node).to(i,{position:e,scale:.5}).call(function(){a.node.removeFromParent(),gameDataBind.addScore(t)}).start()}}),cc._RF.pop()},{}],gameScene_Star:[function(t,i){"use strict";cc._RF.push(i,"3d67c4r/AxLTb8mHpA3AkWY","gameScene_Star"),t("AudioManager");var e=t("Common"),a=t("EventManager");cc.Class({extends:cc.Component,properties:{layerGame:{type:cc.Node,default:null},layerZanTing:{type:cc.Node,default:null},layerFaild:{type:cc.Node,default:null},layerWin:{type:cc.Node,default:null},prefab_block:{type:cc.Prefab,default:null},prefab_xing:{type:cc.Prefab,default:null},prefab_blockScore:{type:cc.Prefab,default:null},block_parent:{type:cc.Node,default:null},xingXing_parent:{type:cc.Node,default:null},tx_chuiZi:{type:cc.Node,default:null},tx_biShua:{type:cc.Node,default:null},bg_btn_biShu:{type:cc.Node,default:null},audio_sound:{type:[cc.AudioClip],default:[]},propSpf:{default:[],type:[cc.SpriteFrame]}},onLoad:function(){window.gameDataBind=this,this.initialLayer(),this.isWin=!1,this.time_tiShi=0,this.num_block_wh=64,this.num_jianGe=2,this.num_w=10,this.num_h=10,this.gameType=0,this.numLevel=1,this.numScore_curr=0,this.node_scoreCurr=this.layerGame.getChildByName("label_scoreCurr"),this.node_lianXiao=this.layerGame.getChildByName("label_lianXiao"),this.node_good=this.layerGame.getChildByName("node_good"),this.node_success=this.layerGame.getChildByName("node_success"),this.arr_blocks=[];for(var t=0;t<this.num_h;t++)this.arr_blocks[t]=[];this.setParent(),this.setTouch(),this.arrMuBiao=[0,1e3,3e3,5500,7500,9500,11500,14e3,99999];var i=cc.sys.localStorage.getItem("userData_xmxx");null!=i&&""!=i&&(this.userData=JSON.parse(i),cc.find("bg/numb_high",this.layerFaild).getComponent(cc.Label).string=this.userData.num_score_best),this.saveUserData(),console.log("\u5bbd\uff1a"+cc.winSize.width+" \u9ad8\uff1a"+cc.winSize.height);var e=cc.winSize.width/720;this.block_parent.scale=720*e/this.block_parent.width,this.xingXing_parent.scale=720*e/this.block_parent.width,this.bg_btn_biShu.scale=e,this.changePropCount()},initialLayer:function(){this.layerGame.active=!0,this.layerZanTing.active=!1,this.layerFaild.active=!1,this.layerWin.active=!1},onDestroy:function(){window.gameDataBind=null},changePropCount:function(){cc.find("Canvas/layerGame/btn_shuaXin/icon_video").active=GameData.xmxx_Refresh<1,cc.find("Canvas/layerGame/btn_shuaXin/count").active=GameData.xmxx_Refresh>0,cc.find("Canvas/layerGame/btn_shuaXin/count").getComponent(cc.Label).string=GameData.xmxx_Refresh,cc.find("Canvas/layerGame/btn_biShua/icon_video").active=GameData.xmxx_Pen<1,cc.find("Canvas/layerGame/btn_biShua/count").active=GameData.xmxx_Pen>0,cc.find("Canvas/layerGame/btn_biShua/count").getComponent(cc.Label).string=GameData.xmxx_Pen,cc.find("Canvas/layerGame/btn_chuiZI/icon_video").active=GameData.xmxx_Hammer<1,cc.find("Canvas/layerGame/btn_chuiZI/count").active=GameData.xmxx_Hammer>0,cc.find("Canvas/layerGame/btn_chuiZI/count").getComponent(cc.Label).string=GameData.xmxx_Hammer,console.log("\u9524\u5b50"+GameData.xmxx_Hammer,"\u5237\u65b0"+GameData.xmxx_Refresh,"\u753b\u7b14"+GameData.xmxx_Pen)},start:function(){this.layerGame.active=!0,this.actStart()},setParent:function(){this.block_parent.width=(this.num_block_wh+this.num_jianGe)*this.num_w+this.num_jianGe,this.block_parent.height=(this.num_block_wh+this.num_jianGe)*this.num_h+this.num_jianGe,this.block_parent.y=this.block_parent.height/2-640+175,this.xingXing_parent.width=this.block_parent.width,this.xingXing_parent.height=this.block_parent.height,this.xingXing_parent.y=this.block_parent.y},setTouch:function(){this.block_parent.on("touchstart",function(t){if(1==this.gameType&&!this.is_moveing)for(var i=t.getLocation(),e=this.block_parent.convertToNodeSpaceAR(i),a=this.block_parent.children,n=0;n<a.length;n++)if(a[n].getBoundingBox().contains(e)){if(this.time_tiShi=0,this.quXiaoTiShi(),this.tx_chuiZi.active){if((b=a[n].getComponent("star")).is_chuiZi){this.tx_chuiZi.active=!1;for(var o=a[n].getPosition(),s=a[n].getComponent("star").blockType,r=0;r<3;r++)this.createXing(o,s);return a[n].removeFromParent(),this.shuaXinArr(),void this.moveBlocks_down()}this.quXiaoChuiZi();var h=a[n].getPosition();return this.tx_chuiZi.x=h.x+20,this.tx_chuiZi.y=h.y,void b.chuiZi()}if(this.tx_biShua.active){if(this.isShuaing)return;if((b=a[n].getComponent("star")).is_biShua)return;this.quXiaoBiShua(),this.tx_biShua.stopAllActions(),h=a[n].getPosition(),this.tx_biShua.x=h.x+15,this.tx_biShua.y=h.y+45,cc.tween(this.tx_biShua).repeatForever(cc.tween().by(.2,{y:20}).by(.2,{y:-20})).start(),a[n].getComponent("star").biShua();var c=a[n].getComponent("star").blockType;return void this.shuaXinBgBiShua(c)}this.touchOne(n);for(var u=0,l=this.block_parent.children,_=0;_<l.length;_++)(b=l[_].getComponent("star")).is_xiaoChu&&u++;if(u>1){this.is_moveing=!0,1==GameData.audioSwitch&&cc.audioEngine.play(this.audio_sound[1],!1,1),this.xiaoChuBlocks(),this.node_lianXiao.opacity=255,this.node_lianXiao.stopAllActions(),this.node_lianXiao.scale=0;for(var m=0,d=0;d<u;d++)m=m+5+10*d;if(this.node_lianXiao.getComponent(cc.Label).string="Match-"+u+" for "+m+" points",cc.tween(this.node_lianXiao).to(.2,{scale:1}).to(2,{opacity:0}).start(),u>=6){1==GameData.audioSwitch&&cc.audioEngine.play(this.audio_sound[0],!1,1),this.node_good.opacity=255,this.node_good.stopAllActions(),this.node_good.scale=0,a=this.node_good.children;for(var g=Math.floor(Math.random()*a.length),v=0;v<a.length;v++)a[v].active=v==g;cc.tween(this.node_good).to(.2,{scale:1}).blink(.5,5).to(1.5,{opacity:0}).start()}}else{var b;(b=a[n].getComponent("star")).quXiaoXiaoChu()}this.shuaXinArr(),this.moveBlocks_down()}},this)},saveUserData:function(){this.userData||(this.userData={arr_blocks_save:[],num_level_save:1,num_score_save:0,num_score_fh:0,num_score_best:0}),cc.sys.localStorage.setItem("userData_xmxx",JSON.stringify(this.userData))},actStart:function(){this.isWin=!1,this.gameType=0,this.is_moveing=!1,this.layerGame.getChildByName("btn_zanTing").active=!0,this.node_success.active=!1,this.node_good.opacity=0,this.node_lianXiao.opacity=0;var t=this.layerGame.getChildByName("label_guanQia"),i=this.layerGame.getChildByName("label_muBiao"),e=this.layerGame.getChildByName("label_guanQia_2"),a=this.layerGame.getChildByName("label_muBiao_2");if(cc.tween(i).blink(2,8).start(),this.saveUserData(),this.userData.num_level_save?this.numLevel=this.userData.num_level_save:this.numLevel=1,this.userData.num_score_save?this.numScore_curr=this.userData.num_score_save:this.numScore_curr=0,1==this.numLevel&&(this.userData.num_score_fh=0,this.saveUserData()),t.getComponent(cc.Label).string="Level "+this.numLevel,e.getComponent(cc.Label).string="Current Level "+this.numLevel,i.getComponent(cc.Label).string="Score "+this.arrMuBiao[this.numLevel],a.getComponent(cc.Label).string="Target Score "+this.arrMuBiao[this.numLevel],this.node_scoreCurr.getComponent(cc.Label).string=this.numScore_curr,this.tx_chuiZi.active=!1,this.tx_biShua.active=!1,this.bg_btn_biShu.active=!1,this.block_parent.removeAllChildren(),this.userData.arr_blocks_save.length>0)return this.createBlocksByBenDi(),this.shuaXinArr(),this.gameType=1,void(this.time_tiShi=0);e.x=550,a.x=550,cc.tween(e).to(.5,{x:0},{easing:"cubicOut"}).delay(1.5).to(.3,{x:-550}).start(),cc.tween(a).delay(.5).to(.5,{x:0},{easing:"cubicOut"}).delay(1).to(.3,{x:-550}).start(),this.createBlocks(),this.shuaXinArr();for(var n=this.block_parent.children,o=0;o<n.length;o++)n[o].y=n[o].y+1500,cc.tween(n[o]).delay(2.3).by(.5+.008*o,{x:0,y:-1500}).start();var s=2.8+.008*(n.length-1);this.scheduleOnce(function(){this.gameType=1,this.time_tiShi=0},s+.02)},quXiaoChuiZi:function(){for(var t=this.block_parent.children,i=0;i<t.length;i++)t[i].getComponent("star").quXiaoChuiZi()},quXiaoBiShua:function(){for(var t=this.block_parent.children,i=0;i<t.length;i++)t[i].getComponent("star").quXiaoBiShua()},touchOne:function(t){var i=this.block_parent.children,e=t;i[e].getComponent("star").canXiaoChu();for(var a=i[e].getPosition(),n=i[e].getComponent("star").blockType,o=[],s=this.block_parent.children,r=0;r<s.length;r++)if(e!=r){var h=s[r].getPosition(),c=(a.x-h.x)*(a.x-h.x)+(a.y-h.y)*(a.y-h.y);if((c=Math.sqrt(c))<=this.num_block_wh+this.num_jianGe+10&&n==s[r].getComponent("star").blockType){if(s[r].getComponent("star").is_xiaoChu)continue;s[r].getComponent("star").canXiaoChu(),o.push(r)}}for(var u=0;u<o.length;u++)this.touchOne(o[u])},touchOneTiShi:function(t){var i=this.block_parent.children,e=t;i[e].getComponent("star").canTiShi();for(var a=i[e].getPosition(),n=i[e].getComponent("star").blockType,o=[],s=this.block_parent.children,r=0;r<s.length;r++)if(e!=r){var h=s[r].getPosition(),c=(a.x-h.x)*(a.x-h.x)+(a.y-h.y)*(a.y-h.y);if((c=Math.sqrt(c))<=this.num_block_wh+this.num_jianGe+10&&n==s[r].getComponent("star").blockType){if(s[r].getComponent("star").is_tiShi)continue;s[r].getComponent("star").canTiShi(),o.push(r)}}for(var u=0;u<o.length;u++)this.touchOneTiShi(o[u])},xiaoChuBlocks:function(){for(var t=this.block_parent.children,i=-1,e=t.length-1;e>=0;e--)if(t[e].getComponent("star").is_xiaoChu){var a=t[e].getPosition(),n=t[e].getComponent("star").blockType;t[e].removeFromParent();for(var o=0;o<5;o++)this.createXing(a,n);var s=5+10*++i,r=cc.instantiate(this.prefab_blockScore);r.parent=this.xingXing_parent,r.setPosition(a);var h=.5+.09*i,c=this.layerGame.convertToWorldSpaceAR(this.node_scoreCurr.getPosition()),u=this.xingXing_parent.convertToNodeSpaceAR(c);r.getComponent("blockScore").init(s,h,u)}},addScore:function(t){this.numScore_curr=this.numScore_curr+t,this.userData.num_score_best<this.numScore_curr&&(this.userData.num_score_best=this.numScore_curr,cc.find("bg/numb_high",this.layerFaild).getComponent(cc.Label).string=this.userData.num_score_best),this.userData.num_score_save=this.numScore_curr,this.saveUserData(),this.node_scoreCurr.getComponent(cc.Label).string=this.numScore_curr,this.layerWin.getChildByName("num_now").getComponent(cc.Label).string=this.numScore_curr,cc.find("bg/num_now",this.layerFaild).getComponent(cc.Label).string=this.numScore_curr,0==this.node_success.active&&this.numScore_curr>=this.arrMuBiao[this.numLevel]&&(this.node_success.active=!0,this.node_success.x=560,cc.tween(this.node_success).to(.5,{x:0,y:this.node_success.y}).start())},createXing:function(t,i){var e=cc.instantiate(this.prefab_xing);e.parent=this.xingXing_parent,e.setPosition(t),e.getComponent("xing").init(i),e.scale=.3+.6*Math.random(),Math.random(),Math.random();var a=50+150*Math.random(),n=.3+.4*Math.random();cc.tween(e).delay(.05*Math.random()).by(n,{x:0,y:a},{easing:"cubicOut"}).by(n,{x:0,y:10-a-40*Math.random()},{easing:"cubicIn"}).call(function(){e.destroy()}).start()},createBlocks:function(){for(var t=-this.block_parent.width/2+this.num_block_wh/2+this.num_jianGe,i=-this.block_parent.height/2+this.num_block_wh/2+this.num_jianGe,e=0;e<this.num_h;e++)for(var a=0;a<this.num_w;a++){var n=cc.instantiate(this.prefab_block);n.parent=this.block_parent,n.x=(this.num_block_wh+this.num_jianGe)*a+t,n.y=(this.num_block_wh+this.num_jianGe)*e+i;var o=n.getComponent("star"),s=Math.floor(5*Math.random());o.init(s)}},createBlocksByBenDi:function(){for(var t=-this.block_parent.width/2+this.num_block_wh/2+this.num_jianGe,i=-this.block_parent.height/2+this.num_block_wh/2+this.num_jianGe,e=0;e<this.num_h;e++)for(var a=0;a<this.num_w;a++){var n=this.userData.arr_blocks_save[e][a];if(-1!=n){var o=cc.instantiate(this.prefab_block);o.parent=this.block_parent,o.x=(this.num_block_wh+this.num_jianGe)*a+t,o.y=(this.num_block_wh+this.num_jianGe)*e+i,o.getComponent("star").init(n)}}},getArrByPos:function(t){var i=this.block_parent.width/2+t.x,e=this.block_parent.height/2+t.y,a=Math.floor(e/(this.num_block_wh+this.num_jianGe)),n=Math.floor(i/(this.num_block_wh+this.num_jianGe));return cc.v2(a,n)},shuaXinArr:function(){for(var t=0;t<this.num_h;t++)for(var i=0;i<this.num_w;i++)this.arr_blocks[t][i]=-1;for(var e=this.block_parent.children,a=0;a<e.length;a++){var n=e[a].getComponent("star").blockType,o=e[a].getPosition(),s=this.getArrByPos(o);this.arr_blocks[s.x][s.y]=n}},pdGameOver:function(){for(var t=0;t<this.num_h;t++)for(var i=0;i<this.num_w;i++){if(t+1<this.num_h&&this.arr_blocks[t][i]==this.arr_blocks[t+1][i]&&-1!=this.arr_blocks[t][i])return!1;if(t-1>=0&&this.arr_blocks[t][i]==this.arr_blocks[t-1][i]&&-1!=this.arr_blocks[t][i])return!1;if(i+1<this.num_w&&this.arr_blocks[t][i]==this.arr_blocks[t][i+1]&&-1!=this.arr_blocks[t][i])return!1;if(i-1>=0&&this.arr_blocks[t][i]==this.arr_blocks[t][i-1]&&-1!=this.arr_blocks[t][i])return!1}return!0},actGameOver:function(){for(var t=this,i=this.block_parent.children,e=function(e){cc.tween(i[e]).blink(1.5,4).delay(.03*e).call(function(){for(var a=i[e].getPosition(),n=i[e].getComponent("star").blockType,o=0;o<3;o++)t.createXing(a,n);i[e].active=!1}).start()},a=i.length-1;a>=0;a--)e(a);var n=1.5+.03*(i.length-1);this.node_success.active?this.scheduleOnce(function(){this.layerWin.active=!0,this.isWin=!0,this.pushZaJinDan()},n+1):this.scheduleOnce(function(){this.userData.num_level_save=1,this.userData.num_score_save=0,this.saveUserData(),this.layerFaild.active=!0,this.layerGame.getChildByName("btn_zanTing").active=!1},n+1)},shuaXinBlocks:function(){for(var t=this.block_parent.children,i=function(i){cc.tween(t[i]).to(.2,{scale:0}).call(function(){var e=Math.floor(Math.random()*t.length),a=t[i].getPosition(),n=t[e].getPosition();t[i].setPosition(n),t[e].setPosition(a)}).to(.2,{scale:1}).start()},e=0;e<t.length;e++)i(e)},moveBlocks_down:function(){for(var t=this,i=0,e=this.block_parent.children,a=.08,n=0;n<e.length;n++){for(var o=e[n].getPosition(),s=this.getArrByPos(o),r=0,h=s.x;h>=0;h--)-1==this.arr_blocks[h][s.y]&&r++;var c=.08*r;a<c&&(a=c),cc.tween(e[n]).call(function(){return i++}).by(c,{x:0,y:-(this.num_jianGe+this.num_block_wh)*r}).call(function(){0==--i&&(t.shuaXinArr(),t.moveBlocks_left())}).start()}},moveBlocks_left:function(){for(var t=this,i=0,e=this.block_parent.children,a=.08,n=0;n<e.length;n++){for(var o=e[n].getPosition(),s=this.getArrByPos(o),r=0,h=s.y;h>=0;h--)0==s.x&&-1==this.arr_blocks[s.x][h]&&r++;var c=.08*r;a<c&&(a=c);for(var u=0;u<e.length;u++){var l=e[u].getPosition();this.getArrByPos(l).y==s.y&&cc.tween(e[u]).call(function(){return i++}).by(c,{x:-(this.num_jianGe+this.num_block_wh)*r,y:0}).call(function(){0==--i&&(t.shuaXinArr(),t.userData.arr_blocks_save=t.arr_blocks,t.saveUserData(),t.is_moveing=!1,t.pdGameOver()?(t.gameType=2,t.userData.arr_blocks_save=[],t.saveUserData(),console.log("\u6e38\u620f\u7ed3\u675f"),t.actGameOver()):console.log("\u6ca1\u7ed3\u675f"))}).start()}}},ziDongTiShi:function(){if(!this.tx_biShua.active&&!this.tx_chuiZi.active){for(var t=this.block_parent.children,i=0;i<t.length;i++)if(t[i].getComponent("star").is_tiShi)return;for(var e=0;e<t.length;e++){this.touchOneTiShi(e);for(var a=0,n=this.block_parent.children,o=0;o<n.length;o++)n[o].getComponent("star").is_tiShi&&a++;if(a>1)return void this.jinXingTiShi();t[e].getComponent("star").quXiaoTiShi()}}},jinXingTiShi:function(){for(var t=this.block_parent.children,i=0;i<t.length;i++)t[i].getComponent("star").is_tiShi&&cc.tween(t[i]).repeatForever(cc.tween().to(.4,.8).to(.4,1)).start()},quXiaoTiShi:function(){for(var t=this.block_parent.children,i=0;i<t.length;i++){var e=t[i].getComponent("star");e.is_tiShi&&(e.quXiaoTiShi(),t[i].stopAllActions(),t[i].scale=1)}},gameRestart:function(){this.initialLayer(),this.numLevel=1,this.numScore_curr=0,this.node_scoreCurr.getComponent(cc.Label).string=this.numScore_curr,this.userData.arr_blocks_save=[],this.userData.num_level_save=1,this.userData.num_score_save=0,this.saveUserData(),this.actStart()},btn_callBack:function(t,i){var n=this;if(1==GameData.audioSwitch&&cc.audioEngine.play(this.audio_sound[2],!1,1),"btn_zanTing"==i){if(1!=this.gameType)return;this.layerZanTing.active=!0}else if("btn_home"==i)e.toMenu();else if("btn_rePlay"==i)this.gameRestart();else if("btn_close_zanTing"==i)this.layerZanTing.active=!1;else if("btn_shuaXin"==i){if(1!=this.gameType)return;if(this.tx_biShua.active||this.tx_chuiZi.active)return;var o=function(){n.quXiaoTiShi(),n.shuaXinBlocks()};if(GameData.xmxx_Refresh>0)return o(),GameData.xmxx_Refresh--,GameData.saveData(),void this.changePropCount();a.showRewardedVideo(function(){return o()})}else if("btn_chuiZI"==i){if(1!=this.gameType)return;if(this.tx_biShua.active)return;if(this.quXiaoTiShi(),this.tx_chuiZi.active)return this.tx_chuiZi.active=!1,void this.quXiaoChuiZi();var s=function(){n.tx_chuiZi.active=!0;var t=n.block_parent.children;if(t.length>0){var i=Math.floor(Math.random()*t.length),e=t[i].getPosition();n.tx_chuiZi.x=e.x+20,n.tx_chuiZi.y=e.y,t[i].getComponent("star").chuiZi()}};if(GameData.xmxx_Hammer>0)return s(),GameData.xmxx_Hammer--,GameData.saveData(),void this.changePropCount();a.showRewardedVideo(function(){return s()})}else if("btn_biShua"==i){if(1!=this.gameType)return;if(this.tx_biShua.active||this.tx_chuiZi.active)return;this.quXiaoTiShi();var r=function(){n.tx_biShua.active=!0,n.bg_btn_biShu.active=!0;var t=n.block_parent.children;if(t.length>0){n.tx_biShua.stopAllActions();var i=Math.floor(Math.random()*t.length),e=t[i].getPosition();console.log("\u7b14\u5237\u4f4d\u7f6e\uff1a"+e),n.tx_biShua.x=e.x+15,n.tx_biShua.y=e.y+45,cc.tween(n.tx_biShua).repeatForever(cc.tween().by(.2,{x:0,y:20}).by(.2,{x:0,y:-20})).start(),t[i].getComponent("star").biShua();var a=t[i].getComponent("star").blockType;n.shuaXinBgBiShua(a)}};if(GameData.xmxx_Pen>0)return void r();a.showRewardedVideo(function(){return r()})}else"btn_back_faild"==i?(a.EventInterstitialVideo(),e.toMenu()):"btn_fuHuo"==i?a.showRewardedVideo(function(){return n.fuHuoBtn()}):"btn_restart"==i?(a.EventInterstitialVideo(),this.gameRestart()):"btn_getProp"==i?a.showRewardedVideo(function(){GameData.xmxx_Hammer++,GameData.xmxx_Refresh++,GameData.xmxx_Pen++,GameData.saveData(),n.nextGame()}):"btn_noProp"==i&&(this.nextGame(),a.EventInterstitialVideo())},nextGame:function(){this.numLevel++,this.userData.num_level_save=this.numLevel,this.userData.num_score_fh=this.numScore_curr,this.saveUserData(),this.actStart(),this.layerWin.active=!1},shuaXinBgBiShua:function(t){1==GameData.audioSwitch&&cc.audioEngine.play(this.audio_sound[2],!1,1);for(var i=this.bg_btn_biShu.getChildByName("layout").children,e=0;e<i.length;e++)i[e].active=t!=e},btn_biShua:function(t,i){if("btn_quXiao"==i)this.tx_biShua.active=!1,this.bg_btn_biShu.active=!1,this.quXiaoBiShua();else{GameData.xmxx_Pen--,GameData.xmxx_Pen<0&&(GameData.xmxx_Pen=0),GameData.saveData(),this.changePropCount(),this.isShuaing=!0;for(var e=this.block_parent.children,a=0;a<e.length;a++){var n=e[a].getComponent("star");if(n.is_biShua){var o=parseInt(i);n.init(o),this.bg_btn_biShu.active=!1,this.quXiaoBiShua(),this.tx_biShua.stopAllActions(),this.tx_biShua.y=this.tx_biShua.y-20;var s=this.tx_biShua.getComponent(cc.Animation);return s.biShuaOver=function(){this.tx_biShua.active=!1,this.isShuaing=!1}.bind(this),void s.play()}}}},logArr:function(){for(var t=this.num_h-1;t>=0;t--)console.log(this.arr_blocks[t]);console.log("**************************************")},update:function(t){GameData.isPause||(1==this.gameType&&(this.time_tiShi++,this.time_tiShi>=300&&(this.time_tiShi=0,this.ziDongTiShi())),GameData.pushZJD_autoShow-=t,GameData.pushZJD_autoShow<0&&this.pushZaJinDan())},fuHuoBtn:function(){this.layerFaild.active=!1,this.userData.num_score_save=this.userData.num_score_fh,this.userData.num_level_save=this.numLevel,this.saveUserData(),this.actStart()},shuXinBtn:function(){this.quXiaoTiShi(),this.shuaXinBlocks()},pushZaJinDan:function(){e.pushZaJinDan(this.propSpf)}}),cc._RF.pop()},{AudioManager:void 0,Common:void 0,EventManager:void 0}],star:[function(t,i){"use strict";cc._RF.push(i,"b0b9dVvC7ZGlaFPxZvAlstI","star"),cc.Class({extends:cc.Component,properties:{spf_block:{type:[cc.SpriteFrame],default:[]},node_xiaoChu:{type:cc.Node,default:null}},onLoad:function(){},init:function(t){this.blockType=t,this.is_xiaoChu=!1,this.is_tiShi=!1,this.is_chuiZi=!1,this.is_biShua=!1,this.node_xiaoChu.active=!1,this.node.getComponent(cc.Sprite).spriteFrame=this.spf_block[this.blockType]},canXiaoChu:function(){this.is_xiaoChu=!0,this.node_xiaoChu.active=!0},quXiaoXiaoChu:function(){this.is_xiaoChu=!1,this.node_xiaoChu.active=!1},canTiShi:function(){this.is_tiShi=!0,this.node_xiaoChu.active=!0},quXiaoTiShi:function(){this.is_tiShi=!1,this.node_xiaoChu.active=!1},chuiZi:function(){this.is_chuiZi=!0,this.node_xiaoChu.active=!0},quXiaoChuiZi:function(){this.is_chuiZi=!1,this.node_xiaoChu.active=!1},biShua:function(){this.is_biShua=!0,this.node_xiaoChu.active=!0,this.node.stopAllActions(),this.node.scale=1,cc.tween(this.node).repeatForever(cc.tween().to(.4,{scale:.6}).to(.4,{scale:1})).start()},quXiaoBiShua:function(){this.is_biShua=!1,this.node_xiaoChu.active=!1,this.node.stopAllActions(),this.node.scale=1},start:function(){}}),cc._RF.pop()},{}],xing:[function(t,i){"use strict";cc._RF.push(i,"7dadeB3aOxJCYqAL2d6GCEi","xing"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){},init:function(t){0==t?this.node.color=new cc.Color(68,191,255):1==t?this.node.color=new cc.Color(102,202,28):2==t?this.node.color=new cc.Color(193,60,255):3==t?this.node.color=new cc.Color(226,69,109):4==t&&(this.node.color=new cc.Color(255,184,12))},start:function(){},update:function(){Math.random()>.5?this.node.x=this.node.x+8*Math.random():this.node.x=this.node.x-8*Math.random()}}),cc._RF.pop()},{}]},{},["blockScore","gameScene_Star","star","xing"]);