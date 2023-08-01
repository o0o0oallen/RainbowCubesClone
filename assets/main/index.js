window.__require = function e(t, o, n) {
	function a(r, s) {
		if (!o[r]) {
			if (!t[r]) {
				var c = r.split("/");
				if (c = c[c.length - 1], !t[c]) {
					var l = "function" == typeof __require && __require;
					if (!s && l) return l(c, !0);
					if (i) return i(c, !0);
					throw new Error("Cannot find module '" + r + "'")
				}
				r = c
			}
			var d = o[r] = {
				exports: {}
			};
			t[r][0].call(d.exports, function (e) {
				return a(t[r][1][e] || e)
			}, d, d.exports, e, t, o, n)
		}
		return o[r].exports
	}
	for (var i = "function" == typeof __require && __require, r = 0; r < n.length; r++) a(n[r]);
	return a
}({
	AudioManager: [function (e, t) {
		"use strict";
		var o;
		cc._RF.push(t, "7f56fZcTf5LobdkAiVqmnpT", "AudioManager"), window.AudioID = ((o = {
			ClickMode: "click_mode",
			Combo: "combo",
			LienTemp: "lienTemp",
			LienTempQQ: "qqlienTemp",
			NewScore: "newScore",
			Start: "start"
		}).Start = "start", o.Lost = "lost", o.Time = "time321", o.BSelect = "block_select", o.BDown = "block_down", o.BCrazing = "", o.EndScore = "end_score", o.EndButton = "end_button", o.EndBestScore = "end_best_score", o.Unbelievable = "lienTemp6", o.UnbelievableQQ = "qqlienTemp6", o.Bomb = "prop_boom", o.RainBow = "prop_caiHong", o);
		var n = cc.Class({
			extends: cc.Component,
			properties: {
				bgVolume: 1,
				bgAudioID: -1,
				sfxVolume: 1
			},
			onLoad: function () { },
			init: function () {
				this.audioID = 0
			},
			playBgMusic: function () {
				GameBundle[1].load("Audio/bgm_menu", cc.AudioClip, function (e, t) {
					e ? console.error("load error => " + e) : cc.audioEngine.playMusic(t, !0)
				}.bind(this))
			},
			playBgmMusic: function (e) {
				e && ("string" == typeof e ? cc.resources.load(e, cc.AudioClip, function (e, t) {
					e ? console.error("load error => " + e) : cc.audioEngine.playMusic(t, !0)
				}.bind(this)) : "object" == typeof e && cc.audioEngine.playMusic(e, !0))
			},
			stopBgmMusic: function () {
				cc.audioEngine.stopMusic()
			},
			pauseMusic: function () {
				cc.audioEngine.pauseMusic()
			},
			resumeMusic: function () {
				cc.audioEngine.resumeMusic()
			},
			playSound: function (e, t) {
				0 != GameData.audioSwitch && "" != e && this.getUrl("Audio/" + e, t)
			},
			playAniSound: function (e) {
				this.getUrl("Audio/Animation/" + e)
			},
			playClickSound: function () {
				0 != GameData.audioSwitch && this.getUrl("Audio/click")
			},
			playClickSound2: function () {
				this.getUrl("Audio/click2")
			},
			playAudioClip: function (e, t) {
				void 0 === t && (t = !1), e && cc.audioEngine.play(e, t)
			},
			getUrl: function (e, t) {
				void 0 === t && (t = !1), cc.resources.load(e, cc.AudioClip, function (e, o) {
					e ? console.log("load error => " + e) : this.audioID = cc.audioEngine.playEffect(o, t)
				}.bind(this))
			},
			pauseAll: function () {
				cc.audioEngine.pauseAll()
			},
			resumeAll: function () {
				cc.audioEngine.resumeAll()
			},
			stopAllEffects: function () {
				cc.audioEngine.stopAllEffects()
			},
			pauseEffect: function () {
				cc.audioEngine.pauseEffect(this.audioID)
			},
			resumeEffect: function () {
				cc.audioEngine.resumeEffect(this.audioID)
			},
			setVolume0: function () {
				cc.audioEngine.setMusicVolume(0), cc.audioEngine.setEffectsVolume(0)
			},
			setVolume1: function () {
				cc.audioEngine.setMusicVolume(1), cc.audioEngine.setEffectsVolume(1)
			}
		});
		t.exports = new n, cc._RF.pop()
	}, {}],
	CCEngine: [function (e, t, o) {
		"use strict";
		cc._RF.push(t, "751e74SJz1D7LZJfAyetri3", "CCEngine"), o.__esModule = !0, o.default = void 0;
		var n = function () {
			function e() {
				this.mAutoCloseTimeout = 0, this.autoCloseInterval = null, this.hideShareClose = 0, this.rootNode = null
			}
			var t = e.prototype;
			return t.closeToYou = function () {
				this.rootNode && this.rootNode.removeFromParent(), this.autoCloseInterval && clearInterval(this.autoCloseInterval)
			}, t.createChaping = function (e, t, o) {
				var n = e.imgUrlList && e.imgUrlList[0] ? e.imgUrlList[0] : e.iconUrlList && e.iconUrlList[0] ? e.iconUrlList[0] : null,
					a = e.source,
					i = e.title,
					r = new cc.Node;
				r.width = 10 * cc.winSize.width, r.height = 10 * cc.winSize.height, r.parent = cc.director.getScene(), r.zIndex = cc.macro.MAX_ZINDEX, r.group = lplatform.params.uiGroup;
				var s = function () {
					console.log("ad click"), o && o(), r.removeFromParent(), window.onClickAdCallback = null
				},
					c = function (e) {
						console.log("closeBtn click"), e.stopPropagation(), t && t(), r.removeFromParent(), window.onClickAdCallback = null
					},
					l = new cc.Node;
				l.parent = r;
				var d = Math.min(cc.winSize.width, cc.winSize.height);
				l.width = .8 * d, l.height = 9 * l.width / 16, l.x = cc.winSize.width / 2, l.y = cc.winSize.height / 2 - 1.2 * l.height, l.on("touchend", function () {
					return s()
				});
				var h = new cc.Texture2D;
				h.initWithData(new Uint8Array([0, 0, 0]), cc.Texture2D.PixelFormat.RGB888, 1, 1);
				var u = l.addComponent(cc.Sprite);
				u.sizeMode = cc.Sprite.SizeMode.CUSTOM, u.spriteFrame = new cc.SpriteFrame(h), cc.assetManager && cc.assetManager.loadRemote ? cc.assetManager.loadRemote(n, {
					ext: ".jpg"
				}, function (e, t) {
					e || !t ? (console.log("\u52a0\u8f7d\u5931\u8d25\uff0cext .jpg, \u5c1d\u8bd5png"), cc.assetManager.loadRemote(n, {
						ext: ".png"
					}, function (e, t) {
						e || !t ? console.log("\u52a0\u8f7d\u5931\u8d25\uff0cext .png") : u && (u.spriteFrame = new cc.SpriteFrame(t))
					})) : u && (u.spriteFrame = new cc.SpriteFrame(t))
				}) : cc.loader.load({
					url: n,
					type: "image"
				}, function (e, t) {
					e ? console.log(e) : u && (u.spriteFrame = new cc.SpriteFrame(t))
				}), window.ClickAdCallback = function () {
					return s()
				};
				var m = new cc.Node;
				m.parent = l, m.width = 83, m.height = 31, m.x = -l.width / 2 + m.width / 2, m.y = -l.height / 2 + m.height / 2;
				var f = m.addComponent(cc.Sprite);
				cc.loader.loadRes("nativeAD/native_1.png", function (e, t) {
					e ? console.log(e) : f.spriteFrame = new cc.SpriteFrame(t)
				});
				var p = new cc.Node;
				p.parent = l, p.width = p.height = 50, p.x = l.width / 2 - p.width / 2, p.y = l.height / 2 - p.height / 2, p.on("touchend", function (e) {
					return c(e)
				}), lplatform.plog("lplatform.labData.closeBtnScale:" + lplatform.cparam.closeBtnScale + " "), null != lplatform.labData.closeBtnScale && (p.scale = lplatform.labData.closeBtnScale);
				var g = new cc.Node;
				g.parent = l, g.width = g.height = 50, g.x = l.width / 2 - g.width / 2, g.y = l.height / 2 - g.height / 2;
				var w = g.addComponent(cc.Sprite);
				if (w.sizeMode = cc.Sprite.SizeMode.CUSTOM, cc.loader.loadRes("nativeAD/native_3.png", function (e, t) {
					e ? console.log(e) : w && (w.spriteFrame = new cc.SpriteFrame(t))
				}), a && "undefined" != a) {
					var b = new cc.Node;
					b.x = l.width / 2, b.y = -l.height / 2, b.anchorX = 1, b.anchorY = 0, b.parent = l, b.addComponent(cc.Label).string = a
				}
				if (i && "undefined" != a) {
					var v = new cc.Node;
					v.x = 0, v.y = -l.height / 2, v.anchorY = 0, v.parent = l, v.addComponent(cc.Label).string = i
				}
				return r
			}, t.CreateShareK = function (e, t, o, n, a) {
				void 0 === n && (n = 0), void 0 === a && (a = !1);
				var i = lplatform.systemInfo,
					r = cc.view.getVisibleSize(),
					s = (cc.v2(r.width / 2, r.height / 2), new cc.Node);
				if (this.rootNode = s, s.x = .5 * r.width, s.y = .5 * r.height, s.parent = cc.director.getScene(), s.zIndex = cc.macro.MAX_ZINDEX, s.setContentSize(cc.winSize), s.group = lplatform.params.uiGroup, o) {
					var c = new cc.Node;
					c.zIndex = 1, c.width = r.width, c.height = r.height, c.parent = s;
					var l = lGlobal.nodeShot(c, o, l),
						d = new cc.SpriteFrame(l);
					d.setFlipY(!0), c.addComponent(cc.Sprite).spriteFrame = d, cc.tween(c).to(.5, {
						width: 691.5,
						height: 847.5,
						x: 0,
						y: 112
					}).start()
				}
				var h = new cc.Node;
				h.parent = s, h.opacity = 120, h.scale = 1e3, cc.loader.loadRes("fenxiang/mask.png", function (e, t) {
					h.addComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(t)
				}), s.on("touchstart", function () { }, this, !0), s.on("touchend", function () { }, this, !0);
				var u = new cc.Node;
				u.parent = s, u.x = 0, u.y = 0, u.scale = 1.5, u.zIndex = 2, cc.loader.loadRes("fenxiang/share.png", function (e, t) {
					u.addComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(t)
				});
				var m = new cc.Node;
				m.parent = u, m.x = 0, m.scale = .9, m.y = -295, cc.loader.loadRes("fenxiang/queding.png", function (e, t) {
					m.addComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(t)
				}), m.on(cc.Node.EventType.TOUCH_END, function () {
					e && e(), s.removeFromParent()
				});
				var f = new cc.Node;
				f.parent = u, i.windowWidth > i.windowHeight ? (f.x = 290, f.y = 190) : (f.x = 190, f.y = 310), f.scale = 1, cc.loader.loadRes("fenxiang/close.png", function (e, t) {
					f.addComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(t)
				});
				var p = new cc.Node;
				p.parent = u, p.x = 0, p.y = -240, p.color = cc.color(3, 35, 79, 255);
				var g = p.addComponent(cc.Label);
				if (g.string = "\u79d2\u81ea\u52a8\u5173\u95ed", n ? (p.active = !0, this.mAutoCloseTimeout = n, this.autoCloseInterval = setInterval(function () {
					this.mAutoCloseTimeout -= .016, g.string = Math.ceil(this.mAutoCloseTimeout) + "\u79d2\u81ea\u52a8\u5173\u95ed", this.mAutoCloseTimeout <= 0 && (this.autoCloseInterval && clearInterval(this.autoCloseInterval), console.log("auto close"), t && t(), s.removeFromParent())
				}.bind(this), 16)) : p.active && (p.active = !1), this.hideShareClose = lplatform.cparam.hideShareClose, Math.random() <= this.hideShareClose) f.active = !1;
				else {
					f.scale = 0;
					var w = cc.delayTime(1),
						b = cc.scaleTo(.3, 1, 1).easing(cc.easeBackOut()),
						v = cc.scaleTo(.3, 10, 10).easing(cc.easeBackOut());
					f.runAction(cc.sequence(w, v, b))
				}
				if (f.on(cc.Node.EventType.TOUCH_END, function () {
					console.log("closeBtn click closeShare"), t && t(), s.removeFromParent(), this.autoCloseInterval && clearInterval(this.autoCloseInterval)
				}.bind(this)), u.opacity = 0, cc.tween(u).delay(.3).to(.4, {
					opacity: 255
				}).start(), a && "ios" !== i.platform) {
					var A = new cc.Node;
					A.parent = s, A.x = -.5 * r.width, A.y = .5 * r.height, A.anchorX = 0, A.anchorY = 1, cc.loader.loadRes("fenxiang/adlist.png", function (e, t) {
						A.addComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(t);
						var o = cc.moveTo(6, cc.v2(-.5 * r.width - 1e3 + r.width, .5 * r.height)),
							n = cc.moveTo(6, cc.v2(-.5 * r.width, .5 * r.height));
						A.runAction(cc.repeatForever(cc.sequence(o, n)))
					}), A.on(cc.Node.EventType.TOUCH_END, function () {
						lplatform.goToGameOrGameList(null)
					})
				}
				return s
			}, t.getCanvas = function () {
				return cc.game.canvas
			}, e
		}();
		o.default = n, t.exports = o.default, cc._RF.pop()
	}, {}],
	ChangeAD: [function (e, t) {
		"use strict";
		cc._RF.push(t, "58914SLFnpEyIYKeURv5sqS", "ChangeAD"), cc.Class({
			extends: cc.Component,
			onLoad: function () {
				lplatform.labData.replaceAD && 1 == lplatform.labData.replaceAD ? this.showAd(!0) : this.showAd(!1), lplatform.channel != CHANNEL.oppo && lplatform.channel != CHANNEL.vivo || (this.node.active = !1)
			},
			showAd: function (e) {
				this.node.getChildByName("iconAD") && (this.node.getChildByName("iconAD").active = e, this.node.getComponent(cc.Sprite).enabled = !e)
			}
		}), cc._RF.pop()
	}, {}],
	Common: [function (e, t) {
		"use strict";
		cc._RF.push(t, "99f28bzvQlAb6bIIRqkwO8L", "Common");
		var o = e("AudioManager");
		window.CommonPrefab = {};
		var n = cc.Class({
			extends: cc.Component,
			setBestScore: function () {
				var e = GameData.getBestScore(GameMode),
					t = gameDataBind.fkScore._showBestScore;
				console.log("\u5b58\u6863\u6700\u9ad8\u5206", e, "\u5f53\u524d\u5f97\u5206", t), t > e && GameData.setBestScore(GameMode, t)
			},
			toGame: function () {
				var e = "game_" + GameMode;
				GameData.initialData(), 0 == GameData.oneToGame ? (GameData.oneToGame = 1, GameData.sceneName = e, cc.director.loadScene("LoadingScene")) : cc.director.loadScene(e)
			},
			toMenu: function () {
				cc.director.loadScene("menu")
			},
			showRebornLayer: function () {
				this.addPrefab(gameDataBind.rebornNode)
			},
			showEndScoreLayer: function () {
				this.addPrefab(gameDataBind.endScorePrefab)
			},
			showEndBestScoreLayer: function () {
				this.addPrefab(gameDataBind.endBestScorePrefab)
			},
			showGameWinLayer: function () {
				this.addPrefab(CommonPrefab.endWinPrefab)
			},
			showGameLoseLayer: function () {
				this.addPrefab(CommonPrefab.endLosePrefab)
			},
			showBlockBoom: function (e, t, o) {
				0 == t && (e.active = !1);
				var n = cc.instantiate(CommonPrefab.iceBlock);
				n.parent = cc.find("Canvas/uiRoot/tempNode"), n.position = cc.v2(e.x, e.y);
				var a = n.getChildByName(t + "_xbh_ske").getComponent(dragonBones.ArmatureDisplay);
				a.node.active = !0;
				var i = _.random(1, 4);
				Utils.playAniCall(a, [
					["hua", "hua1", "hua2", "hua3"],
					["bing", "bing1", "bing2", "bing3"],
					["xue", "xue1", "xue2", "xue3"]
				][t][i], function () {
					o && o(), n.destroy()
				})
			},
			showNewScore: function () {
				o.playSound(AudioID.NewScore), this.addPrefab(CommonPrefab.newScore)
			},
			showUnbelievable: function () {
				o.playSound(lplatform.channel == CHANNEL.qq ? AudioID.UnbelievableQQ : AudioID.Unbelievable), this.addPrefab(CommonPrefab.unbelievable)
			},
			pushChangeTime: function () {
				GameData.canShowPush = !1, this.scheduleOnce(function () {
					return GameData.canShowPush = !0
				}, PUSH_TIME_DELAY)
			},
			pushChangeBlock: function (e, t, o) {
				if (GameMode != MODE.TEACH && GameMode != MODE.JIEMI && !(GameData.pushChangeCount > 0)) {
					if (!e) {
						if (GameData.isFail) return;
						if (!GameData.canShowPush) return
					}
					GameData.pause(), GameData.pushChangeCount++, cc.resources.load("prefabs/pushChange", cc.Prefab, function (e, n) {
						if (e) console.error("Common", "\u8f7d\u5165\u9884\u5236\u8d44\u6e90\u5931\u8d25, \u539f\u56e0:" + e);
						else if (n instanceof cc.Prefab) {
							var a = cc.instantiate(n);
							a.name = "pushChange", a.parent = cc.find("Canvas"), a.script.initial(t, o)
						} else console.error("Common", "\u4f60\u8f7d\u5165\u7684\u4e0d\u662f\u9884\u5236\u8d44\u6e90!")
					})
				}
			},
			pushZaJinDan: function () { },
			addPrefab: function (e, t) {
				var o = cc.instantiate(e);
				o.parent = cc.find("Canvas"), t && o.script.initial(t)
			}
		});
		t.exports = new n, cc._RF.pop()
	}, {
		AudioManager: "AudioManager"
	}],
	EventManager: [function (e, t) {
		"use strict";
		cc._RF.push(t, "22ae3eiFtxMn7iijWiLMbZq", "EventManager");
		var o = e("../common/AudioManager"),
			n = cc.Class({
				extends: cc.Component,
				EventLoad: function () {
					switch (lplatform.channel) {
						case CHANNEL.oppo:
						case CHANNEL.qq:
						case CHANNEL.android:
							this.WhileBanner();
							break;
						case CHANNEL.ios:
							window.PUSH_ZJD_TIME_INTERVAL = 180, window.PUSH_ZJD_TIME = 180, this.WhileBanner()
					}
				},
				WhileBanner: function () {
					var e = this;
					console.log("WhileBanner", lplatform.labData.bannerRefresh), this.showBanner(), null != lplatform.labData.bannerRefresh ? this.scheduleOnce(function () {
						return e.WhileBanner()
					}, lplatform.labData.bannerRefresh) : this.scheduleOnce(function () {
						return e.WhileBanner()
					}, 30)
				},
				EventMenu: function () {
					switch (lplatform.channel) {
						case CHANNEL.vivo:
							this.moreGame(), this.showBanner();
							break;
						case CHANNEL.tt:
							this.showBanner();
							break;
						case CHANNEL.miniGame:
							this.hideBanner(), this.showBanner()
					}
				},
				EventMenuToGame: function () {
					switch (lplatform.channel) {
						case CHANNEL.tt:
							this.hideBanner(), this.startRecord();
						case CHANNEL.oppo:
						case CHANNEL.vivo:
						case CHANNEL.qq:
							lplatform.labData.sendToTable && 1 == lplatform.labData.sendToTable && this.showFavoriteGuide()
					}
				},
				EventInterstitial: function () {
					switch (console.log("EventInterstitial"), lplatform.channel) {
						case CHANNEL.oppo:
						case CHANNEL.vivo:
						case CHANNEL.qq:
						case CHANNEL.tt:
						case CHANNEL.android:
						case CHANNEL.android233:
							if (console.log("AllInter", lplatform.labData.allInter), !lplatform.labData.allInter || 1 != lplatform.labData.allInter) return;
							this.showInterstitial();
							break;
						case CHANNEL.ios:
							window.iosInterstitialDelay || (window.iosInterstitialDelay = 0), window.iosInterstitialDelay++, window.iosInterstitialDelay >= 3 && (window.iosInterstitialDelay = 0, lplatform.showInterstitial());
							break;
						case CHANNEL.miniGame:
							this.showInterstitial()
					}
				},
				EventInterstitialVideo: function () {
					switch (console.log("EventManager===>>>", "EventInterstitialVideo"), lplatform.channel) {
						case CHANNEL.android233:
							if (console.log("AllInter", lplatform.labData.allInter), !lplatform.labData.allInter || 1 != lplatform.labData.allInter) return;
							lplatform.showInterstitialVideo();
							break;
						case CHANNEL.ios:
							lplatform.showInterstitial()
					}
				},
				EventWinAndFail: function () {
					switch (lplatform.channel) {
						case CHANNEL.tt:
							this.stopRecord()
					}
				},
				showBanner: function () {
					window.MiniGameAds && (MiniGameAds.isBannerReady() ? MiniGameAds.showBanner().then(function () {
						console.info("\u65b0\u63a5\u53e3\u64ad\u653e\u6a2a\u5e45\u5e7f\u544a: \u6210\u529f")
					}).catch(function (e) {
						console.error("\u65b0\u63a5\u53e3\u64ad\u653e\u6a2a\u5e45\u5e7f\u544a: \u5931\u8d25\uff0c\u539f\u56e0: " + e.message)
					}) : console.info("\u6a2a\u5e45\u5e7f\u544a\u6ca1\u6709\u52a0\u8f7d\u6210\u529f\uff0c\u65e0\u6cd5\u64ad\u653e"))
				},
				hideBanner: function () {
					window.MiniGameAds && MiniGameAds.hideBanner().then(function () {
						console.info("\u65b0\u63a5\u53e3\u9690\u85cf\u6fc0\u52b1\u5e7f\u544a: \u6210\u529f")
					}).catch(function (e) {
						console.error("\u65b0\u63a5\u53e3\u9690\u85cf\u6fc0\u52b1\u5e7f\u544a: \u5931\u8d25\uff0c\u539f\u56e0: " + e.message)
					})
				},
				showInterstitial: function () {
					window.MiniGameAds && (MiniGameAds.isInterstitialReady() ? MiniGameAds.showInterstitial().then(function () {
						console.info("\u65b0\u63a5\u53e3\u64ad\u653e\u63d2\u5c4f\u5e7f\u544a: \u6210\u529f")
					}).catch(function (e) {
						console.error("\u65b0\u63a5\u53e3\u64ad\u653e\u63d2\u5c4f\u5e7f\u544a: \u5931\u8d25\uff0c\u539f\u56e0: " + e.message)
					}) : console.info("\u63d2\u5c4f\u5e7f\u544a\u6ca1\u6709\u52a0\u8f7d\u6210\u529f\uff0c\u65e0\u6cd5\u64ad\u653e"))
				},
				showRewardedVideo: function (e) {
					/*if (!window.MiniGameAds)*/
					return e && e();
					MiniGameAds.isRewardvideoReady() ? (o.pauseMusic(), MiniGameAds.showRewardedVideo().then(function () {
						console.info("\u65b0\u63a5\u53e3\u64ad\u653e\u6fc0\u52b1\u5e7f\u544a: \u6210\u529f"), e && e(), o.resumeMusic()
					}).catch(function (e) {
						console.error("\u65b0\u63a5\u53e3\u64ad\u653e\u6fc0\u52b1\u5e7f\u544a: \u5931\u8d25\uff0c\u539f\u56e0: " + e.message), o.resumeMusic()
					})) : console.info("\u6fc0\u52b1\u89c6\u9891\u6ca1\u6709\u52a0\u8f7d\u6210\u529f\uff0c\u65e0\u6cd5\u64ad\u653e")
				},
				gameEvent: function (e, t) {
					console.log("gameEvent===>>>", e, t), window.MiniGameAnalytics && MiniGameAnalytics.onGameEvent(e, t)
				},
				canRecord: function () {
					lplatform.canRecord()
				},
				startRecord: function () {
					lplatform.startRecord()
				},
				stopRecord: function () {
					lplatform.stopRecord()
				},
				shareRecord: function () {
					lplatform.shareRecord()
				},
				showFavoriteGuide: function () {
					lplatform.showFavoriteGuide()
				}
			});
		t.exports = new n, cc._RF.pop()
	}, {
		"../common/AudioManager": "AudioManager"
	}],
	FitPad: [function (e, t) {
		"use strict";
		cc._RF.push(t, "8fdf65n/IVKp6dWPqfwMcfS", "FitPad"), cc.Class({
			extends: cc.Component,
			properties: {
				channel: "iOS|web",
				cameraBgColor: "#2A1B38",
				camera: cc.Camera
			},
			onLoad: function () {
				if (window.lplatform && this.channel.indexOf(lplatform.channel) >= 0) {
					var e = cc.view.getVisibleSize();
					Math.min(e.width, e.height) / Math.max(e.width, e.height) > 9 / 16 && (this.node.getComponent(cc.Canvas).fitHeight = !0, this.camera && (this.camera.backgroundColor = this.camera.backgroundColor.fromHEX(this.cameraBgColor)))
				}
			},
			start: function () { }
		}), cc._RF.pop()
	}, {}],
	GameData: [function (e, t) {
		"use strict";
		cc._RF.push(t, "2637fz5HMFLEpMQ6XbK0frp", "GameData"), window.GameName = "XiaoXiaoLeKaiHuai_LocalData", window.GameBundle = {}, window.GameData = {
			oneToGame: 0,
			sceneName: null,
			isPause: 0,
			audioSwitch: 1,
			propBomb: 0,
			propRainBow: 0,
			xmxx_Hammer: 0,
			xmxx_Refresh: 0,
			xmxx_Pen: 0,
			teachingXS: 0,
			teaching: 0,
			curScore: 0,
			blockData: [],
			bestScore: {},
			level: {},
			modeLock: {},
			localData: {
				propBomb: 0,
				propRainBow: 0,
				xmxx_Hammer: 0,
				xmxx_Refresh: 0,
				xmxx_Pen: 0,
				teachingXS: 0,
				teaching: 0,
				curScore: 0,
				blockData: [],
				bestScore: {},
				level: {},
				modeLock: {}
			},
			canShowPush: !0,
			pushChangeCount: 0,
			isTouch: 0,
			pushChange_Time: 60,
			pushZJD_autoShow: 60,
			isGetBestScore: 0,
			isWin: !1,
			isFail: !1,
			push_BlockArr: [],
			blockIndex: 0,
			zjd_Score: 0,
			initialData: function () {
				this.pushChangeCount = 0, this.canShowPush = !0, this.isTouch = 0, this.pushChange_Time = PUSH_TIME, this.pushZJD_autoShow = PUSH_ZJD_TIME, this.isGetBestScore = 0, this.isWin = !1, this.isFail = !1, this.push_BlockArr = [], this.zjd_Score = 0, this.blockIndex = 0, this.saveData(), this.resume()
			},
			saveData: function () {
				for (var e in this.localData) this.localData[e] = this[e];
				var t = JSON.stringify(this.localData);
				cc.sys.localStorage.setItem(GameName, t)
			},
			loadData: function (e) {
				var t = cc.sys.localStorage.getItem(GameName);
				if ("" == t || null == t) return GameData.saveData(), void (e && e(!1));
				var o = JSON.parse(t);
				for (var n in o) this[n] = o[n];
				var a = !1;
				if (null == o.propBomb && (this.propBomb = 0, a = !0), null == o.propRainBow && (this.propRainBow = 0, a = !0), null == o.xmxx_Hammer && (this.xmxx_Hammer = 0, a = !0), null == o.xmxx_Refresh && (this.xmxx_Refresh = 0, a = !0), null == o.xmxx_Pen && (this.xmxx_Pen = 0, a = !0), null == o.xmxx_Pen && (this.xmxx_Pen = 0, a = !0), null == o.xmxx_Pen && (this.xmxx_Pen = 0, a = !0), null == o.xmxx_Pen && (this.xmxx_Pen = 0, a = !0), null == o.modeLock[MODE.KILL] && (this.modeLock[MODE.KILL] = 1, a = !0), null == o.modeLock[MODE.JIUJIU2] && (this.modeLock[MODE.JIUJIU2] = 1, a = !0), null == o.modeLock[MODE.STAR2] && (this.modeLock[MODE.STAR2] = 1, a = !0), !this.level[MODE.JIUJIU2]) {
					this.level[MODE.JIUJIU2] = 1, this.bestScore[MODE.JIUJIU2] = {};
					var i = this.level[MODE.JIUJIU2];
					this.bestScore[MODE.JIUJIU2][i] = 0, a = !0
				}
				1 == a && this.saveData(), e && e(!0)
			},
			setBestScore: function (e, t) {
				var o = this.level[e];
				this.bestScore[e][o] = t, this.saveData()
			},
			getBestScore: function (e) {
				var t = this.level[e];
				return this.bestScore[e][t] || 0
			},
			pause: function () {
				this.isPause = !0
			},
			resume: function () {
				this.isPause = !1
			}
		}, cc._RF.pop()
	}, {}],
	GameScene: [function (e, t) {
		"use strict";
		cc._RF.push(t, "8d0e8b9Js1Db6/JzudwzyIP", "GameScene");
		var o = e("AudioManager"),
			n = e("Common"),
			a = e("EventManager");
		cc.Class({
			extends: cc.Component,
			properties: {
				fkFrame: cc.Node,
				fkBg: cc.Node,
				fkScore: cc.Node,
				rebornNode: cc.Prefab,
				endScorePrefab: cc.Prefab,
				endBestScorePrefab: cc.Prefab,
				leafNode: [dragonBones.ArmatureDisplay],
				propSpf: {
					default: [],
					type: [cc.SpriteFrame],
					tooltip: "\u7838\u91d1\u86cb\u5956\u52b1\u56fe\u7247"
				},
				btnBomb: {
					default: null,
					type: cc.Node,
					tooltip: "\u6309\u94ae-\u9053\u5177\u70b8\u5f39"
				},
				btnRainbow: {
					default: null,
					type: cc.Node,
					tooltip: "\u6309\u94ae-\u9053\u5177\u5f69\u8679\u9524"
				}
			},
			onLoad: function () {
				GameData.pause(), window.gameDataBind = this, o.playSound(AudioID.Start), this.boardFrame = this.fkFrame.getComponent("boardFrame"), this.kuaiManager = this.fkBg.getComponent("kuaiManager"), this.fkScore = this.fkScore.getComponent("fkScore"), this.changePropCount()
			},
			onDestroy: function () {
				window.gameDataBind = null
			},
			changePropCount: function () {
				this.isPropFly = !1, this.btnBomb && (cc.find("icon_video", this.btnBomb).active = GameData.propBomb < 1, cc.find("count", this.btnBomb).active = GameData.propBomb > 0, cc.find("count", this.btnBomb).getComponent(cc.Label).string = GameData.propBomb), this.btnRainbow && (cc.find("icon_video", this.btnRainbow).active = GameData.propRainBow < 1, cc.find("count", this.btnRainbow).active = GameData.propRainBow > 0, cc.find("count", this.btnRainbow).getComponent(cc.Label).string = GameData.propRainBow), console.log("\u9053\u5177\u6570\u91cf", GameData.propRainBow, GameData.propBomb)
			},
			start: function () {
				this.isProp = 0, this.propButton = null
			},
			update: function (e) {
				GameData.isPause || (GameData.pushZJD_autoShow -= e, GameData.pushZJD_autoShow < 0 && this.pushZaJinDan())
			},
			restartGame: function () {
				o.playClickSound(), GameMode == MODE.TEACH && 3 == GameData.teachingXS && (GameData.teachingXS = 0, GameData.saveData()), GameData.blockData = [], GameData.curScore = 0, GameData.initialData(), n.toGame()
			},
			pushZaJinDan: function () {
				n.pushZaJinDan(this.propSpf)
			},
			onClickBomb: function (e) {
				var t = this;
				this.isPropFly || (0 == this.getIsProp() ? GameData.propBomb > 0 ? (this.propButton = e.target, this.setIsProp(1)) : a.showRewardedVideo(function () {
					t.propButton = e.target, t.setIsProp(1)
				}) : this.setIsProp(0))
			},
			onClickRainBow: function (e) {
				var t = this;
				this.isPropFly || (0 == this.getIsProp() ? GameData.propRainBow > 0 ? (this.propButton = e.target, this.setIsProp(2)) : a.showRewardedVideo(function () {
					t.propButton = e.target, t.setIsProp(2)
				}) : this.setIsProp(0))
			},
			setIsProp: function (e) {
				this.changePropCount(), this.isProp = e, cc.find("Canvas/btnBomb/image").active = 1 == this.isProp, cc.find("Canvas/btnRainbow/image").active = 2 == this.isProp, 1 == this.isProp && this.btnBomb.getComponent(cc.Animation).play(), 2 == this.isProp && this.btnRainbow.getComponent(cc.Animation).play(), 0 == this.isProp && (this.btnBomb.getComponent(cc.Animation).stop(), this.btnRainbow.getComponent(cc.Animation).stop())
			},
			getIsProp: function () {
				return this.isProp
			},
			vibrates: function (e, t) {
				var o = this;
				e < 2 && t < 2 || (console.log("combo=" + e, "xcNum=" + t), (5 == e || 10 == e || 15 == e || 18 == e || 20 == e || t >= 4) && this.pushZaJinDan(), e < 7 ? this.screenVibrates(function () {
					return t > 1 && o.effectAni(t)
				}) : this.effectAni(e - 5, 1, function (e) {
					1 == e && t > 1 && o.effectAni(t, 2)
				}))
			},
			effectAni: function (e, t, o) {
				if (console.log("num", e), !(e < 2)) {
					e > 6 && (e = 6), this.screenVibrates();
					var n = cc.find("Canvas/uiRoot/ShakeNode");
					if (n) {
						var a = cc.find(e + "rows", n),
							i = cc.instantiate(a);
						i.name = "temp66666", i.parent = n, i.active = !0, Utils.nodePlayAnimationCall(i, "effect_shake_" + e, function () {
							return o && o(t)
						})
					}
					for (var r = function (e, t) {
						return Utils.playAniCall(e, "newAnimation_1", function () {
							return Utils.playAni(e, t)
						})
					}, s = 0; s < 4; s++) "newAnimation_1" != this.leafNode[s].animationName && r(this.leafNode[s], this.leafNode[s].animationName)
				}
			},
			screenVibrates: function (e) {
				var t = cc.find("Canvas/uiRoot"),
					o = t.x,
					n = t.y;
				cc.tween(t).repeat(2, cc.tween().to(.018, {
					x: o + (5 + SCREEN_OFFSET),
					y: n + (7 + SCREEN_OFFSET)
				}).to(.018, {
					x: o - (6 + SCREEN_OFFSET),
					y: n + (7 + SCREEN_OFFSET)
				}).to(.018, {
					x: o - (13 + SCREEN_OFFSET),
					y: n + (3 + SCREEN_OFFSET)
				}).to(.018, {
					x: o + (3 + SCREEN_OFFSET),
					y: n - (6 + SCREEN_OFFSET)
				}).to(.018, {
					x: o - (5 + SCREEN_OFFSET),
					y: n + (5 + SCREEN_OFFSET)
				}).to(.018, {
					x: o + (2 + SCREEN_OFFSET),
					y: n - (8 + SCREEN_OFFSET)
				}).to(.018, {
					x: o - (8 + SCREEN_OFFSET),
					y: n - (10 + SCREEN_OFFSET)
				}).to(.018, {
					x: o + (3 + SCREEN_OFFSET),
					y: n + (10 + SCREEN_OFFSET)
				}).to(.018, {
					x: o + (0 + SCREEN_OFFSET),
					y: n + (0 + SCREEN_OFFSET)
				}).to(.018, {
					x: 0,
					y: 0
				})).call(function () {
					return e && e()
				}).start()
			},
			tempA: function (e, t) {
				this.vibrates(2, t)
			},
			temp_Effect: function () {
				var e = cc.find("Canvas/New EditBox").getComponent(cc.EditBox).string;
				this.vibrates(Number(e), 6)
			}
		}), cc._RF.pop()
	}, {
		AudioManager: "AudioManager",
		Common: "Common",
		EventManager: "EventManager"
	}],
	Launch: [function (e, t) {
		"use strict";
		cc._RF.push(t, "42ceccKnPtHK6I4Pf5KS7sq", "Launch");
		var o, n = (o = e("../script/platformUtil/PlatformA")) && o.__esModule ? o : {
			default: o
		};
		cc.Class({
			extends: cc.Component,
			properties: {
				nextScene: "Menu"
			},
			onLoad: function () {
				window.lplatform = new n.default, cc.director.loadScene(this.nextScene)
			}
		}), cc._RF.pop()
	}, {
		"../script/platformUtil/PlatformA": "PlatformA"
	}],
	LayaEngine: [function (e, t, o) {
		"use strict";
		cc._RF.push(t, "fca51AkAFNJyKMqg7VeicWf", "LayaEngine"), o.__esModule = !0, o.default = void 0;
		var n = function () {
			function e() {
				this.mAutoCloseTimeout = 0, this.autoCloseInterval = null, this.hideShareClose = 0, this.videoAd = null, this.bannerAd = null, this.yuanshengIndex = 0, this.yuanshengADK = null, this.yuanshengADBanner = null
			}
			var t = e.prototype;
			return t.closeToYou = function () {
				this.yuanshengADK && this.yuanshengADK.destroy(), this.yuanshengADBanner && this.yuanshengADBanner.destroy()
			}, t.createChaping = function (e, t, o) {
				var n = e.imgUrlList && e.imgUrlList[0] ? e.imgUrlList[0] : e.iconUrlList && e.iconUrlList[0] ? e.iconUrlList[0] : null,
					a = e.source,
					i = e.title,
					r = new Laya.Box;
				r.left = -10, r.right = -10, r.top = -10, r.bottom = -10, r.zOrder = 1e4, Laya.stage.addChild(r);
				var s = new Laya.Image("res/ysguanggao/native_2.png");
				s.left = -10, s.right = -10, s.top = -10, s.bottom = -10, s.alpha = .7, r.addChild(s), s.on("click", this, function () { });
				var c = new Laya.Image(n);
				c.centerX = 0, c.centerY = 0, c.width = 360, c.height = 240;
				var l = (Laya.stage.width - 50) / c.width;
				c.scaleX = l, c.scaleY = l, r.addChild(c);
				var d = function () {
					o && o(), r.destroy(), console.log("ad click")
				}.bind(this);
				c.on("click", this, d);
				var h = new Laya.Image("res/ysguanggao/native_1.png");
				h.anchorX = 1, h.anchorY = 1, h.centerX = 150 * l, h.centerY = 110 * l, r.addChild(h);
				var u = new Laya.Image("res/ysguanggao/native_3.png");
				u.scaleX = lplatform.cparam.closeBtnScale || 1, u.scaleY = lplatform.cparam.closeBtnScale || 1, lplatform.cparam.closeBtnScale < 1 ? (u.centerX = 170 * l, u.centerY = -110 * l) : (u.centerX = 170 * l, u.centerY = -140 * l), u.width = 58, u.height = 58, r.addChild(u), u.on("click", this, function () {
					console.log("ad close"), t && t(), r.destroy()
				});
				var m = new Laya.Image("res/ysguanggao/native_3.png");
				m.centerX = u.centerX, m.centerY = u.centerY, m.width = u.width, m.height = u.height, m.scaleX = 1, m.scaleY = 1, r.addChild(m);
				var f;
				f = e.clickBtnTxt.indexOf("\u4e0b\u8f7d") >= 0 ? "res/ysguanggao/xiazaibg.png" : "res/ysguanggao/dakaibg.png";
				var p = new Laya.Image(f);
				p.centerX = 0 * l, p.centerY = 140 * l, p.on("click", this, d), r.addChild(p);
				var g = new Laya.Label(a || "");
				g.fontSize = 30, g.centerX = -110 * l, g.centerY = 110 * l, r.addChild(g);
				var w = new Laya.Label(i || "");
				return w.fontSize = 30, w.centerX = 0 * l, w.centerY = -130 * l, r.addChild(w), r.alpha = 0, (new Laya.Tween).to(r, {
					alpha: 1
				}, 500, Laya.Ease.backOut), r
			}, t.createBanner = function (e, t, o) {
				var n = e.imgUrlList[0],
					a = e.source,
					i = e.title,
					r = new Laya.Sprite;
				r.width = r.height = 0, r.zOrder = 1e4, Laya.stage.addChild(r), Laya.stage.width;
				var s = new Laya.Image(n);
				s.width = Laya.stage.width - 20, s.height = 240, s.x = 10, s.y = Laya.stage.height - s.height + 0, r.addChild(s);
				var c = function () {
					console.log("ad click"), o && o(), r.destroy()
				}.bind(this);
				s.on("click", this, c);
				var l = new Laya.Image("res/ysguanggao/native_1.png");
				l.width = 83, l.height = 31, l.x = s.width - l.width, l.y = s.height - l.height, s.addChild(l);
				var d = new Laya.Image("res/ysguanggao/native_3.png");
				d.width = 38, d.height = 38, d.x = s.width - d.width - 5, d.y = 5, d.scaleX = lplatform.cparam.closeBtnScale || 1, d.scaleY = lplatform.cparam.closeBtnScale || 1, s.addChild(d), d.on("click", this, function () {
					console.log("ad close"), t && t(), r.destroy()
				});
				var h = new Laya.Image("res/ysguanggao/native_3.png");
				h.width = d.width, h.height = d.height, h.x = d.centerX, h.y = d.centerY, s.addChild(h);
				var u;
				u = e.clickBtnTxt.indexOf("\u4e0b\u8f7d") >= 0 ? "res/ysguanggao/xiazaibg.png" : "res/ysguanggao/dakaibg.png";
				var m = new Laya.Image(u);
				if (m.width = 200, m.height = 70, m.x = s.width / 2 - m.width / 2, m.y = -m.height - 20, m.on("click", this, c), s.addChild(m), a) {
					var f = new Laya.Label(a);
					f.fontSize = 25, f.bgColor = "#ffffffff", f.x = 0, f.y = s.height - f.height, s.addChild(f)
				}
				if (i) {
					var p = new Laya.Label(i);
					p.fontSize = 25, p.bgColor = "#ffffffff", p.x = s.width / 2 - p.width / 2, p.y = 0, s.addChild(p)
				}
				return r.alpha = 0, (new Laya.Tween).to(r, {
					alpha: 1
				}, 500, Laya.Ease.backOut), r
			}, t.CreateShareK = function (e, t, o, n, a) {
				void 0 === n && (n = 0), void 0 === a && (a = !1);
				var i = new Laya.Box;
				i.left = -10, i.right = -10, i.top = -10, i.bottom = -10, i.zOrder = 1e4, Laya.stage.addChild(i);
				var r = new Laya.Image("fenxiang/mask.png");
				r.left = -10, r.right = -10, r.top = -10, r.bottom = -10, r.alpha = .4, i.addChild(r), r.on("click", this, function () { });
				var s = new Laya.Image("fenxiang/share.png");
				s.centerX = 0, s.centerY = 0, i.addChild(s);
				var c = new Laya.Image("fenxiang/queding.png");
				c.centerX = 0, c.centerY = 270, i.addChild(c), c.on("click", this, function () {
					e && e(), i.destroy()
				});
				var l = new Laya.Image("fenxiang/close.png");
				info.windowWidth > info.windowHeight ? (l.centerX = -310, l.centerY = -195) : (l.centerX = -195, l.centerY = -310), i.addChild(l), l.on("click", this, function () {
					console.log("closeBtn click"), t && t(), this.autoCloseInterval && clearInterval(this.autoCloseInterval), i.destroy()
				});
				var d = Math.random();
				if (lplatform.cparam.hideShareClose && d <= lplatform.cparam.hideShareClose ? l.visible = !1 : (l.scaleX = 0, l.scaleY = 0, (new Laya.Tween).to(l, {
					scaleX: 1,
					scaleY: 1
				}, 300, Laya.Ease.backOut, null, 1e3)), i.alpha = 0, (new Laya.Tween).to(i, {
					alpha: 1
				}, 500, Laya.Ease.backOut), a && "ios" !== lplatform.systemInfo.platform) {
					var h = new Laya.Image("fenxiang/adlist" + Math.floor(4 * Math.random()) + ".png");
					h.x = 0, h.y = 0, i.addChild(h), h.on(Laya.Event.CLICK, this, function () {
						lplatform.goToGameOrGameList(null)
					}), this.zuo = function () {
						(new Laya.Tween).to(h, {
							x: Laya.stage.width - 1e3
						}, 3e3, null, Laya.Handler.create(this, function () {
							this.you()
						}))
					}.bind(this), this.you = function () {
						(new Laya.Tween).to(h, {
							x: 0
						}, 3e3, null, Laya.Handler.create(this, function () {
							this.zuo()
						}))
					}.bind(this), this.zuo()
				}
				return i
			}, t.getCanvas = function () {
				return Laya.Render.canvas
			}, e
		}();
		o.default = n, t.exports = o.default, cc._RF.pop()
	}, {}],
	LoadingScene: [function (e, t) {
		"use strict";
		cc._RF.push(t, "361138cGc5GF7anGgRWoaqx", "LoadingScene"), cc.Class({
			extends: cc.Component,
			properties: {},
			onLoad: function () {
				var e = GameData.sceneName;
				cc.director.preloadScene(e, null, function () {
					return cc.director.loadScene(e)
				})
			}
		}), cc._RF.pop()
	}, {}],
	LvData_ChuangGuan: [function (e, t) {
		"use strict";
		cc._RF.push(t, "8a929SFP05IUpW3wqvimRnq", "LvData_ChuangGuan"), window.CG_LEVEL_DATA = {
			1: {
				board: [41],
				color: 3,
				number: [1]
			},
			2: {
				board: [33, 49],
				color: 1,
				number: [1, 1]
			},
			3: {
				board: [39, 40, 41, 42, 43],
				color: 0,
				number: [1, 1, 2, 1, 1]
			},
			4: {
				board: [21, 25, 59],
				color: 5,
				number: [1, 1, 1]
			},
			5: {
				board: [39, 41, 43],
				color: 2,
				number: [1, 1, 1]
			},
			6: {
				board: [1, 9, 73, 81, 41],
				color: 4,
				number: [1, 1, 1, 1, 2]
			},
			7: {
				board: [21, 30, 39, 48, 57, 25, 34, 43, 52, 61],
				color: 3,
				number: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			},
			8: {
				board: [22, 23, 24, 40, 41, 42, 58, 59, 60],
				color: 1,
				number: [1, 1, 1, 1, 1, 1, 1, 1, 1]
			},
			9: {
				board: [30, 34, 48, 52, 41],
				color: 0,
				number: [1, 1, 1, 1, 2]
			},
			10: {
				board: [23, 32, 39, 40, 41, 42, 43, 50, 59],
				color: 5,
				number: [1, 1, 1, 1, 3, 1, 1, 1, 1]
			},
			11: {
				board: [31, 32, 33, 40, 41, 42, 49, 50, 51],
				color: 2,
				number: [1, 2, 1, 1, 2, 1, 1, 2, 1]
			},
			12: {
				board: [39, 43, 49, 51, 59],
				color: 4,
				number: [1, 1, 1, 1, 1]
			},
			13: {
				board: [23, 30, 52, 59],
				color: 3,
				number: [1, 1, 2, 2]
			},
			14: {
				board: [20, 24, 58, 62],
				color: 1,
				number: [2, 2, 2, 2]
			},
			15: {
				board: [31, 33, 41, 49, 51],
				color: 0,
				number: [1, 1, 2, 1, 1]
			},
			16: {
				board: [21, 30, 39, 48, 57, 58, 59, 60],
				color: 5,
				number: [2, 2, 2, 2, 2, 2, 2, 2]
			},
			17: {
				board: [5, 14, 23, 32, 50, 59, 68, 77],
				color: 2,
				number: [3, 3, 3, 3, 3, 3, 3, 3]
			},
			18: {
				board: [31, 32, 33, 40, 41, 42],
				color: 4,
				number: [1, 2, 1, 2, 1, 2]
			},
			19: {
				board: [11, 17, 32, 40, 41, 42, 50, 65, 71],
				color: 3,
				number: [1, 1, 2, 2, 3, 2, 2, 1, 1]
			},
			20: {
				board: [13, 14, 15, 16, 25, 34, 41, 42, 43, 50, 59, 77],
				color: 1,
				number: [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1]
			},
			21: {
				board: [11, 12, 20, 21, 29, 30, 52, 53, 61, 62, 70, 71],
				color: 2,
				number: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
			},
			22: {
				board: [5, 14, 23, 32, 50, 59, 68, 77, 37, 38, 39, 40, 42, 43, 44, 45],
				color: 5,
				number: [1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1]
			},
			23: {
				board: [1, 9, 11, 17, 41, 65, 71, 73, 81],
				color: 3,
				number: [1, 1, 1, 1, 2, 1, 1, 1, 1]
			},
			24: {
				board: [10, 11, 12, 34, 35, 36, 46, 47, 48, 70, 71, 72],
				color: 1,
				number: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
			},
			25: {
				board: [23, 74, 75, 76, 77, 78, 79, 80],
				color: 0,
				number: [3, 2, 2, 2, 2, 2, 2, 2]
			},
			26: {
				board: [30, 39, 48, 34, 43, 52],
				color: 4,
				number: [3, 3, 3, 3, 3, 3]
			},
			27: {
				board: [21, 22, 23, 24, 25, 30, 31, 32, 33, 34, 39, 40, 41, 42, 43, 48, 49, 50, 51, 52, 57, 58, 59, 60, 61],
				color: 2,
				number: [1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 2, 3, 2, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1]
			},
			28: {
				board: [22, 23, 24, 32, 41, 50, 58, 59, 60],
				color: 5,
				number: [1, 1, 1, 2, 3, 2, 1, 1, 1]
			},
			29: {
				board: [1, 2, 8, 9, 10, 18, 32, 40, 41, 42, 50, 64, 72, 73, 74, 80, 81],
				color: 3,
				number: [1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1]
			},
			30: {
				board: [3, 4, 5, 6, 7, 19, 28, 37, 46, 55, 27, 36, 45, 54, 63, 75, 76, 77, 78, 79],
				color: 1,
				number: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
			},
			31: {
				board: [40, 42],
				color: 1,
				number: [2, 2]
			},
			32: {
				board: [32, 40, 50],
				color: 1,
				number: [1, 1, 1]
			},
			33: {
				board: [41],
				color: 1,
				number: [3]
			},
			34: {
				board: [23, 39, 41, 43],
				color: 1,
				number: [1, 1, 2, 1]
			},
			35: {
				board: [32, 40, 41, 42, 50],
				color: 1,
				number: [1, 1, 2, 1, 1]
			},
			36: {
				board: [29, 35, 37, 45, 47, 53],
				color: 1,
				number: [1, 1, 2, 2, 1, 1]
			},
			37: {
				board: [32, 40, 42, 50],
				color: 1,
				number: [2, 2, 2, 2]
			},
			38: {
				board: [4, 5, 6, 76, 77, 78],
				color: 1,
				number: [3, 3, 3, 3, 3, 3]
			},
			39: {
				board: [23, 32, 41, 50, 59],
				color: 1,
				number: [2, 2, 2, 2, 2]
			},
			40: {
				board: [8, 9, 18, 26, 27, 55, 56, 64, 73, 74],
				color: 1,
				number: [1, 2, 2, 1, 2, 2, 1, 2, 2, 1]
			},
			41: {
				board: [37, 38, 39, 40, 42, 43, 44, 45],
				color: 1,
				number: [3, 3, 3, 3, 3, 3, 3, 3]
			},
			42: {
				board: [8, 9, 17, 18, 64, 65, 73, 74],
				color: 1,
				number: [2, 2, 2, 2, 2, 2, 2, 2]
			},
			43: {
				board: [55, 63, 64, 72, 73, 74, 75, 79, 80, 81],
				color: 1,
				number: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
			},
			44: {
				board: [19, 20, 21, 22, 23, 24, 25, 26, 56, 57, 58, 59, 60, 61, 62, 63],
				color: 1,
				number: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
			},
			45: {
				board: [4, 5, 6, 23, 32, 41, 50, 59, 68, 77],
				color: 1,
				number: [3, 3, 3, 2, 2, 2, 2, 2, 2, 2]
			},
			46: {
				board: [13, 14, 15, 22, 23, 24, 31, 32, 33, 40, 41, 42, 49, 50, 51, 58, 59, 60, 67, 68, 69, 76, 77, 78],
				color: 1,
				number: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
			},
			47: {
				board: [22, 23, 24, 58, 59, 60],
				color: 1,
				number: [2, 3, 2, 2, 3, 2]
			},
			48: {
				board: [31, 33, 41, 49, 51],
				color: 1,
				number: [2, 2, 2, 2, 2]
			},
			49: {
				board: [17, 18, 25, 26, 33, 34, 41, 42, 49, 50, 57, 58, 65, 66, 73, 74],
				color: 1,
				number: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			},
			50: {
				board: [16, 17, 25, 26, 56, 57, 65, 66],
				color: 1,
				number: [2, 2, 2, 2, 2, 2, 2, 2]
			}
		}, cc._RF.pop()
	}, {}],
	LvData_JieMi: [function (e, t) {
		"use strict";
		cc._RF.push(t, "dcd81JNHSFAq61ZxuxhXfes", "LvData_JieMi"), window.JM_LEVEL_DATA = {
			1: {
				board: [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 25, 26, 28, 30, 31, 32, 33, 34, 35, 37, 38, 40, 41, 42, 43, 44, 47, 48, 50, 51, 52, 54, 56, 57, 58, 59, 63, 67, 68, 69, 70, 71, 72],
				color: 1,
				block: [32, 26, 12, 28]
			},
			2: {
				board: [5, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21, 22, 23, 24, 27, 30, 31, 32, 33, 36, 38, 39, 40, 41, 42, 43, 44, 45, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 64, 65, 66, 67, 69, 70, 71, 73, 74, 75, 79, 80],
				color: 1,
				block: [24, 16, 34, 25, 15, 15]
			},
			3: {
				board: [1, 3, 4, 5, 6, 7, 9, 10, 11, 13, 14, 15, 17, 18, 19, 20, 21, 23, 25, 26, 27, 28, 29, 30, 31, 33, 34, 35, 36, 38, 39, 43, 44, 45, 47, 48, 49, 50, 51, 52, 53, 54, 56, 57, 58, 59, 60, 61, 62, 65, 66, 67, 68, 69, 70, 71, 74, 75, 76, 77, 78],
				color: 1,
				block: [28, 31, 16, 11, 12]
			},
			4: {
				board: [1, 7, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 40, 42, 43, 44, 45, 46, 47, 48, 49, 51, 52, 53, 54, 58, 60, 61, 62, 63, 65, 66, 67, 68, 69, 70, 71, 72, 74, 75, 76],
				color: 1,
				block: [33, 29, 28, 20, 29]
			},
			5: {
				board: [2, 3, 4, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 29, 30, 34, 35, 36, 38, 39, 43, 44, 46, 47, 48, 52, 53, 55, 56, 57, 58, 59, 60, 61, 62, 64, 65, 66, 67, 68, 69, 70, 71, 78, 79, 80],
				color: 1,
				block: [29, 28, 28, 29, 36]
			},
			6: {
				board: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 14, 16, 17, 18, 19, 20, 22, 23, 24, 26, 27, 28, 30, 31, 32, 33, 34, 36, 37, 38, 40, 41, 42, 44, 45, 46, 47, 48, 50, 52, 53, 54, 55, 56, 57, 58, 60, 61, 62, 63, 64, 65, 71, 72],
				color: 1,
				block: [29, 11, 12, 12, 11]
			},
			7: {
				board: [4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 20, 21, 22, 23, 24, 25, 26, 28, 29, 31, 32, 33, 37, 38, 40, 41, 42, 43, 44, 45, 46, 47, 54, 55, 56, 57, 58, 59, 60, 61, 63, 64, 65, 66, 67, 68, 69, 70, 72, 73, 74, 75, 80, 81],
				color: 1,
				block: [33, 32, 30, 31, 15]
			},
			8: {
				board: [2, 3, 4, 5, 6, 7, 11, 12, 13, 14, 15, 16, 20, 21, 22, 23, 24, 25, 29, 30, 31, 32, 33, 34, 35, 36, 38, 44, 45, 46, 47, 48, 49, 50, 51, 52, 54, 58, 59, 60, 61, 63, 67, 68, 69, 70, 72, 76, 77, 78, 79, 81],
				color: 1,
				block: [36, 28, 34, 14, 29]
			},
			9: {
				board: [4, 8, 9, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 30, 31, 32, 33, 34, 35, 39, 40, 41, 42, 44, 48, 49, 50, 51, 53, 54, 55, 56, 57, 58, 60, 62, 63, 64, 65, 66, 67, 69, 71, 72, 73, 74, 78, 80, 81],
				color: 1,
				block: [35, 30, 34, 31, 6, 28]
			},
			10: {
				board: [2, 3, 4, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 23, 24, 25, 27, 28, 29, 30, 31, 33, 34, 35, 37, 38, 39, 41, 42, 43, 44, 45, 46, 47, 49, 50, 51, 52, 53, 55, 56, 57, 58, 59, 60, 61, 64, 65, 66, 67, 68, 69, 70, 71, 78, 79, 80, 81],
				color: 1,
				block: [12, 11, 4, 6, 29, 18]
			},
			11: {
				board: [1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 13, 14, 15, 16, 17, 19, 21, 22, 23, 24, 25, 27, 28, 29, 31, 32, 33, 35, 36, 37, 38, 40, 41, 42, 44, 45, 46, 48, 49, 50, 51, 52, 54, 55, 56, 57, 61, 62, 63, 65, 66, 67, 68, 69, 70, 71, 72],
				color: 1,
				block: [6, 0, 12, 3, 4, 3, 1]
			},
			12: {
				board: [1, 2, 3, 4, 5, 6, 7, 8, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 25, 26, 28, 29, 34, 35, 38, 39, 40, 41, 42, 43, 44, 46, 48, 54, 56, 57, 58, 59, 60, 61, 62, 63, 65, 66, 67, 68, 69, 70, 71, 72, 76, 77, 78, 79, 80, 81],
				color: 1,
				block: [6, 15, 29, 32, 4, 28]
			},
			13: {
				board: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29, 30, 31, 33, 40, 41, 42, 49, 50, 51, 55, 56, 57, 58, 60, 61, 62, 63, 64, 65, 66, 67, 71, 72, 73, 74, 79, 80, 81],
				color: 1,
				block: [15, 27, 14, 35, 36]
			},
			14: {
				board: [1, 2, 3, 5, 6, 7, 10, 11, 12, 15, 16, 17, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 36, 37, 38, 41, 44, 45, 46, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 60, 61, 62, 63, 65, 66, 69, 70, 71, 72, 75, 77, 78, 79, 80, 81],
				color: 1,
				block: [20, 22, 9, 23, 20, 7]
			},
			15: {
				board: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29, 30, 31, 33, 34, 35, 36, 46, 47, 48, 49, 51, 52, 53, 54, 55, 56, 57, 58, 60, 61, 62, 63, 64, 65, 66, 67, 69, 70, 71, 72, 73, 74, 75, 76, 78, 79, 80, 81],
				color: 1,
				block: [14, 15, 15, 28]
			},
			16: {
				board: [2, 8, 9, 11, 12, 13, 14, 15, 16, 20, 21, 22, 23, 24, 25, 29, 30, 31, 32, 33, 34, 40, 41, 42, 43, 44, 45, 47, 49, 50, 51, 52, 53, 54, 56, 58, 59, 60, 61, 63, 65, 66, 67, 68, 69, 70, 72, 74, 75, 76, 77, 81],
				color: 1,
				block: [24, 34, 31, 29]
			},
			17: {
				board: [3, 4, 5, 6, 7, 12, 13, 14, 15, 16, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 44, 45, 46, 47, 48, 49, 51, 52, 53, 54, 55, 56, 57, 58, 60, 61, 62, 63, 66, 67, 68, 69, 70, 75, 76, 77, 78, 79],
				color: 1,
				block: [13, 13, 2, 2, 13, 13, 28]
			},
			18: {
				board: [2, 3, 4, 5, 6, 7, 8, 10, 12, 13, 14, 15, 16, 18, 19, 20, 22, 23, 24, 26, 27, 28, 29, 30, 34, 35, 36, 37, 38, 39, 43, 44, 45, 46, 47, 48, 52, 53, 54, 55, 56, 58, 59, 60, 62, 63, 64, 66, 67, 68, 69, 70, 72, 74, 75, 76, 77, 78, 79, 80],
				color: 1,
				block: [12, 11, 36, 11, 12]
			},
			19: {
				board: [2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 29, 30, 31, 32, 33, 34, 35, 36, 38, 39, 40, 41, 42, 44, 45, 46, 47, 48, 49, 50, 52, 55, 60, 61, 64, 65, 66, 67, 68, 69, 70, 78, 79, 80, 81],
				color: 1,
				block: [29, 34, 11, 6, 28]
			},
			20: {
				board: [2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 35, 36, 37, 38, 39, 40, 41, 42, 44, 45, 46, 47, 48, 49, 50, 51, 53, 54, 55, 56, 57, 58, 59, 60, 62, 63, 64, 65, 66, 67, 68, 69, 71, 72, 74, 75, 76, 77, 78],
				color: 1,
				block: [14, 29, 28, 6, 0]
			},
			21: {
				board: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 40, 42, 43, 44, 45, 47, 48, 49, 50, 51, 52, 53, 56, 57, 58, 59, 60, 61, 62, 67, 69],
				color: 3,
				block: [32, 0, 6, 1, 28]
			},
			22: {
				board: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 19, 25, 26, 28, 29, 30, 33, 35, 38, 39, 42, 43, 45, 47, 48, 49, 51, 52, 53, 54, 56, 57, 58, 60, 63, 65, 67, 69, 71, 72, 74, 76, 78, 80, 81],
				color: 1,
				block: [28, 30, 1, 12, 5, 25]
			},
			23: {
				board: [1, 2, 3, 5, 6, 7, 8, 12, 14, 15, 16, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 32, 33, 46, 47, 51, 52, 53, 54, 55, 56, 58, 59, 60, 62, 63, 65, 67, 68, 69, 71, 76, 77, 78, 79, 80, 81],
				color: 0,
				block: [27, 33, 1, 0, 14, 8, 2, 6]
			},
			24: {
				board: [10, 11, 12, 15, 16, 17, 18, 19, 20, 22, 24, 25, 26, 27, 28, 30, 31, 33, 34, 35, 36, 37, 39, 40, 42, 43, 44, 45, 46, 47, 49, 51, 52, 53, 54, 55, 56, 57, 60, 61, 62, 64, 65, 66, 67, 69, 70, 72, 73, 81],
				color: 4,
				block: [12, 11, 3, 0, 6, 31, 28]
			},
			25: {
				board: [1, 2, 3, 4, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 22, 23, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35, 46, 52, 53, 54, 57, 58, 59, 60, 61, 62, 63, 66, 70, 71, 72, 75, 79],
				color: 2,
				block: [29, 2, 34, 27, 35, 1, 2, 0]
			},
			26: {
				board: [12, 13, 14, 15, 16, 17, 18, 19, 22, 23, 24, 25, 28, 29, 30, 34, 37, 38, 39, 43, 44, 45, 47, 48, 52, 53, 54, 56, 57, 58, 59, 60, 61, 62, 63, 65, 66, 68, 69, 70, 71, 72, 74, 78],
				color: 5,
				block: [21, 13, 14, 16, 6, 36]
			},
			27: {
				board: [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 28, 29, 30, 31, 32, 33, 34, 35, 37, 38, 39, 44, 46, 47, 48, 53, 55, 56, 57, 62, 64, 65, 66, 71, 73, 74, 75, 76, 77, 78, 79, 80],
				color: 3,
				block: [1, 28, 0, 16, 17, 18, 19]
			},
			28: {
				board: [2, 3, 4, 5, 6, 7, 8, 11, 12, 13, 14, 15, 16, 17, 21, 22, 23, 24, 25, 26, 29, 31, 32, 33, 34, 35, 38, 39, 41, 44, 45, 47, 48, 49, 50, 53, 54, 56, 57, 59, 62, 63, 65, 67, 68, 69, 70, 71, 72, 75, 76, 81],
				color: 1,
				block: [11, 12, 34, 14, 15]
			},
			29: {
				board: [1, 2, 4, 5, 6, 7, 10, 11, 12, 14, 15, 16, 17, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 36, 38, 39, 40, 41, 42, 43, 47, 48, 49, 50, 51, 52, 53, 56, 57, 60, 63, 65, 66, 69, 70, 80, 81],
				color: 0,
				block: [32, 31, 28, 7, 21, 23, 12]
			},
			30: {
				board: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29, 30, 31, 33, 34, 35, 36, 37, 40, 42, 45, 46, 47, 50, 53, 54, 55, 56, 57, 61, 62, 63, 64, 65, 66, 70, 71, 72],
				color: 4,
				block: [35, 20, 21, 28]
			},
			31: {
				board: [5, 6, 12, 13, 14, 15, 16, 17, 21, 22, 23, 24, 25, 26, 29, 30, 31, 32, 34, 35, 36, 38, 39, 40, 44, 45, 47, 48, 49, 50, 52, 53, 54, 57, 58, 59, 60, 61, 62, 66, 67, 68, 69, 70, 71, 77, 78],
				color: 2,
				block: [33, 32, 30, 31, 17, 0]
			},
			32: {
				board: [4, 6, 7, 8, 9, 10, 11, 13, 15, 16, 17, 18, 19, 20, 22, 24, 25, 26, 27, 28, 29, 31, 33, 34, 35, 36, 37, 38, 40, 42, 43, 44, 45, 46, 47, 49, 51, 52, 53, 54, 55, 56, 58, 60, 64, 65, 67, 78, 79, 80],
				color: 1,
				block: [28, 30, 15, 20, 18]
			},
			33: {
				board: [10, 12, 13, 14, 15, 16, 18, 19, 20, 22, 24, 26, 27, 28, 29, 30, 34, 35, 36, 37, 38, 39, 40, 42, 43, 44, 45, 46, 47, 53, 54, 55, 56, 57, 58, 60, 61, 62, 63, 64, 65, 66, 67, 69, 70, 71, 72, 73, 74, 75, 76, 78, 79, 80, 81],
				color: 0,
				block: [11, 12, 1, 28, 2, 2]
			},
			34: {
				board: [1, 2, 3, 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 26, 27, 28, 29, 30, 34, 35, 36, 37, 38, 39, 43, 44, 45, 46, 47, 48, 52, 53, 54, 55, 56, 62, 63, 64, 65, 66, 70, 71, 72],
				color: 4,
				block: [29, 6, 29, 35, 36]
			},
			35: {
				board: [10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23, 27, 28, 29, 30, 34, 35, 36, 37, 38, 39, 42, 43, 44, 45, 46, 47, 48, 50, 51, 52, 53, 54, 56, 57, 59, 62, 63, 65, 66, 68, 71, 72, 77, 80, 81],
				color: 2,
				block: [32, 28, 17, 34, 27]
			},
			36: {
				board: [5, 6, 7, 11, 12, 14, 15, 16, 20, 21, 28, 29, 30, 32, 33, 34, 35, 36, 43, 44, 45, 49, 50, 53, 54, 58, 59, 60, 62, 63, 64, 65, 66, 67, 68, 69, 71, 72, 73, 74, 75, 76, 77, 78],
				color: 5,
				block: [33, 36, 28, 21, 13, 32, 29]
			},
			37: {
				board: [10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29, 30, 34, 35, 36, 37, 38, 44, 45, 46, 47, 48, 49, 51, 52, 53, 54, 55, 56, 57, 58, 60, 61, 62, 63, 64, 65, 66, 67, 69, 70, 71, 72, 73, 74, 75, 76, 78, 79, 80, 81],
				color: 3,
				block: [3, 12, 16, 14, 0]
			},
			38: {
				board: [10, 13, 14, 15, 18, 20, 21, 22, 23, 25, 26, 29, 30, 31, 32, 34, 35, 38, 39, 40, 41, 43, 44, 47, 50, 52, 53, 56, 57, 59, 61, 62, 65, 66, 68, 70, 71, 73, 76, 77, 78, 81],
				color: 1,
				block: [28, 4, 3, 2, 7, 28, 3, 4, 2, 28]
			},
			39: {
				board: [1, 3, 4, 6, 7, 9, 10, 12, 13, 15, 16, 18, 19, 21, 22, 24, 25, 26, 27, 28, 30, 31, 33, 34, 36, 37, 42, 43, 45, 46, 48, 49, 51, 52, 54, 55, 57, 58, 60, 61, 63, 64, 66, 67, 69, 70, 72],
				color: 0,
				block: [19, 1, 5, 18, 1, 5, 28, 1]
			},
			40: {
				board: [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 28, 45, 46, 47, 48, 49, 51, 52, 53, 54, 55, 56, 57, 61, 62, 63, 64, 65, 66, 67, 68, 69, 71, 72],
				color: 4,
				block: [11, 12, 2, 20, 16, 2, 35, 1, 0]
			},
			41: {
				board: [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 16, 17, 19, 20, 22, 24, 26, 28, 30, 34, 37, 38, 40, 42, 44, 46, 47, 48, 52, 53, 55, 56, 57, 58, 60, 61, 62, 65, 66, 67, 68, 69, 70, 76, 77],
				color: 2,
				block: [12, 11, 17, 3, 4, 14, 27, 26]
			},
			42: {
				board: [2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 21, 23, 24, 25, 26, 27, 29, 31, 32, 34, 35, 36, 38, 40, 41, 44, 45, 47, 49, 53, 54, 56, 57, 65, 66, 67, 68, 69, 70, 71, 72, 74, 75, 76, 77, 78, 79, 80, 81],
				color: 5,
				block: [5, 0, 0, 0, 11, 8, 32]
			},
			43: {
				board: [2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 21, 22, 24, 25, 26, 29, 32, 33, 34, 36, 38, 44, 45, 47, 48, 53, 54, 56, 57, 59, 60, 62, 63, 65, 66, 68, 69, 71, 72, 74, 75, 76, 77, 78, 79, 80, 81],
				color: 3,
				block: [0, 0, 28, 1, 1, 3, 35]
			},
			44: {
				board: [2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 14, 15, 16, 17, 18, 19, 21, 24, 25, 26, 27, 28, 29, 32, 35, 36, 37, 38, 40, 43, 44, 45, 46, 47, 48, 52, 53, 54, 55, 56, 57, 59, 60, 62, 63, 64, 65, 66, 67, 68, 69, 70, 72, 73, 74, 75, 76, 77, 78, 79, 80],
				color: 1,
				block: [12, 20, 20, 0, 0, 10, 6, 0]
			},
			45: {
				board: [13, 14, 15, 16, 17, 18, 20, 21, 22, 25, 26, 27, 34, 35, 36, 37, 38, 39, 40, 41, 43, 44, 45, 46, 47, 48, 54, 55, 56, 57, 58, 59, 61, 64, 65, 66, 67, 70, 73, 74, 75, 76, 78, 79],
				color: 0,
				block: [29, 34, 22, 33, 15, 24]
			},
			46: {
				board: [2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 25, 26, 27, 33, 35, 36, 38, 39, 41, 42, 44, 45, 56, 58, 60, 62, 65, 66, 72, 74, 75, 76, 77, 78, 79, 80, 81],
				color: 4,
				block: [29, 31, 7, 10, 17, 0, 6, 0, 0]
			},
			47: {
				board: [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 15, 16, 17, 18, 19, 21, 28, 31, 32, 34, 35, 36, 37, 38, 40, 41, 43, 44, 45, 46, 47, 48, 54, 55, 56, 60, 61, 62, 63, 64, 65, 66, 67, 69, 70, 71, 72, 74, 78, 79, 80, 81],
				color: 2,
				block: [23, 20, 29, 0, 19, 31, 32]
			},
			48: {
				board: [1, 2, 3, 7, 8, 9, 10, 11, 13, 14, 15, 17, 18, 19, 20, 22, 23, 24, 26, 27, 28, 29, 30, 34, 35, 36, 37, 38, 39, 40, 42, 43, 44, 45, 46, 47, 49, 51, 53, 54, 55, 56, 57, 61, 62, 63, 65, 66, 67, 69, 70, 71],
				color: 5,
				block: [29, 4, 3, 6, 6, 1, 1, 9, 8, 14]
			},
			49: {
				board: [10, 12, 13, 14, 15, 17, 18, 19, 22, 23, 26, 27, 28, 30, 33, 35, 36, 37, 38, 40, 41, 43, 44, 45, 46, 47, 49, 50, 52, 53, 54, 55, 56, 63, 64, 65, 66, 67, 69, 70, 73, 74, 75, 77, 78, 79, 80],
				color: 3,
				block: [18, 19, 2, 32, 3, 7, 32]
			},
			50: {
				board: [1, 2, 5, 8, 9, 10, 18, 37, 45, 46, 47, 53, 54, 55, 56, 57, 61, 62, 63, 64, 65, 66, 67, 69, 70, 71, 72],
				color: 1,
				block: [17, 7, 10, 36, 34, 34, 24, 25, 1, 1, 1]
			},
			51: {
				board: [2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 15, 16, 17, 19, 20, 21, 22, 24, 26, 27, 28, 29, 31, 33, 36, 37, 38, 40, 41, 42, 43, 44, 45, 46, 47, 49, 52, 53, 54, 55, 58, 59, 61, 63, 64, 66, 67, 68, 69, 70, 72, 73, 77, 81],
				color: 1,
				block: [1, 0, 32, 9, 31, 24, 7, 14]
			},
			52: {
				board: [1, 2, 3, 4, 5, 7, 8, 9, 13, 14, 15, 17, 18, 20, 21, 22, 24, 25, 27, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 40, 42, 44, 45, 46, 51, 54, 55, 56, 57, 58, 59, 60, 61, 63, 64, 66, 67, 68, 69, 70, 71, 72, 76],
				color: 1,
				block: [12, 33, 23, 29, 15, 16, 5]
			},
			53: {
				board: [1, 2, 3, 7, 8, 9, 10, 12, 13, 14, 15, 18, 19, 20, 22, 23, 24, 25, 26, 27, 29, 30, 34, 35, 38, 39, 43, 44, 47, 48, 52, 53, 55, 56, 57, 58, 59, 60, 62, 63, 64, 67, 68, 69, 70, 72, 73, 74, 75, 79, 80, 81],
				color: 1,
				block: [4, 4, 2, 2, 6, 6, 5, 5, 36]
			},
			54: {
				board: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35, 37, 38, 39, 40, 41, 42, 43, 44, 46, 47, 48, 49, 50, 51, 52, 53, 55, 56, 58, 59, 61, 62, 63, 64, 65, 67, 68, 72, 73, 74, 78, 79, 80, 81],
				color: 1,
				block: [32, 29, 0, 9, 28]
			},
			55: {
				board: [1, 4, 5, 6, 11, 13, 14, 15, 20, 21, 22, 25, 26, 27, 29, 30, 31, 32, 34, 35, 36, 37, 38, 39, 40, 41, 43, 44, 45, 46, 47, 48, 49, 50, 52, 53, 54, 55, 56, 58, 59, 61, 62, 63, 64, 65, 67, 68, 69, 70, 71, 72, 73, 74, 78, 79, 80, 81],
				color: 1,
				block: [5, 7, 32, 1, 24, 35]
			},
			56: {
				board: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 23, 25, 26, 27, 31, 32, 33, 37, 39, 40, 41, 42, 43, 45, 46, 47, 49, 51, 53, 54, 55, 56, 59, 62, 63, 64, 65, 67, 68, 69, 71, 72, 73, 74, 76, 77, 78, 80, 81],
				color: 1,
				block: [0, 11, 12, 2, 7, 4, 0, 25, 14]
			},
			57: {
				board: [2, 3, 7, 8, 11, 12, 13, 14, 15, 16, 17, 19, 21, 22, 23, 24, 25, 29, 31, 32, 33, 36, 41, 44, 47, 49, 50, 51, 58, 59, 60, 63, 65, 66, 67, 68, 69, 70, 71, 74, 75, 76, 77, 78, 79, 80],
				color: 1,
				block: [6, 19, 21, 33, 1, 1, 20, 19, 0, 2, 1, 1]
			},
			58: {
				board: [1, 2, 3, 7, 8, 9, 10, 13, 14, 15, 18, 19, 21, 22, 23, 24, 25, 27, 29, 30, 34, 35, 47, 48, 52, 53, 55, 57, 58, 59, 60, 61, 63, 64, 65, 67, 68, 69, 71, 72, 73, 74, 75, 79, 80, 81],
				color: 1,
				block: [36, 27, 12, 26, 11, 7, 6, 11, 0, 2]
			},
			59: {
				board: [4, 5, 13, 14, 15, 21, 22, 23, 24, 25, 29, 30, 34, 35, 36, 37, 38, 39, 43, 44, 45, 46, 47, 48, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 66, 67, 68, 69, 70, 75, 76, 77, 78],
				color: 1,
				block: [36, 13, 31, 35, 0, 34, 7, 10]
			},
			60: {
				board: [1, 2, 5, 7, 8, 9, 10, 11, 14, 18, 22, 24, 30, 31, 33, 34, 37, 38, 44, 45, 48, 49, 51, 52, 58, 60, 64, 65, 68, 72, 74, 77, 80, 81],
				color: 1,
				block: [0, 13, 27, 0, 9, 20, 2, 13, 13, 4, 11, 0, 13, 0, 3, 4, 30]
			}
		}, cc._RF.pop()
	}, {}],
	MenuScene: [function (e, t) {
		"use strict";
		cc._RF.push(t, "59a03vykgZP4bkni1hbMUa/", "MenuScene");
		var o = e("Common"),
			n = e("AudioManager"),
			a = e("EventManager");
		cc.Class({
			extends: cc.Component,
			properties: {
				modeBestScore: {
					default: [],
					type: cc.Label
				},
				soundSprite: cc.Node
			},
			onLoad: function () {
				this.initialSound(), this.initialModeScore()
			},
			start: function () {
				a.EventMenu(), lplatform.channel == CHANNEL.tt && (cc.find("Canvas/topnode/btn_set/btnPrivacyPolicy").active = !1, cc.find("Canvas/topnode/btn_set/btnUserAgreement").active = !1)
			},
			initialModeScore: function () {
				for (var e = Object.keys(MODE), t = 0; t < this.modeBestScore.length; t++) {
					var o = MODE[e[t]];
					if (o == MODE.JIEMI || o == MODE.CHUANGGUAN) this.modeBestScore[t].string = GameData.level[o] || 1;
					else if (o == MODE.STAR) {
						var n = cc.sys.localStorage.getItem("userData_xmxx");
						if (null != n && "" != n) {
							var a = JSON.parse(n);
							a && a.num_score_best ? this.modeBestScore[t].string = a.num_score_best : this.modeBestScore[t].string = 0
						} else this.modeBestScore[t].string = 0
					} else if (o == MODE.KILL) {
						window.tempFileURL = [];
						for (var i = 1; i < 4; i++) window.tempFileURL.push("");
						var r = cc.sys.localStorage.getItem("guideinfo");
						window.GUIDE_LEVEL = r && "null" != r ? 1 : 0;
						var s = cc.sys.localStorage.getItem(window.GAME_SAVE_HANDLER);
						s ? (window.INIT_GAME_SAVE_DATA = JSON.parse(s), this.modeBestScore[t].string = Number(INIT_GAME_SAVE_DATA.top_level) + 1) : (cc.sys.localStorage.setItem(window.GAME_SAVE_HANDLER, JSON.stringify(window.INIT_GAME_SAVE_DATA)), s = window.INIT_GAME_SAVE_DATA, this.modeBestScore[t].string = 1), GameBundle[3].load("GameRes3/level_config2", function (e, t) {
							e ? cc.error(e.message || e) : window.MAP_CONFIG = t.json
						})
					} else this.modeBestScore[t].string = GameData.getBestScore(o);
					this.modeBestScore[t].node.parent.getChildByName("icon_video") && (this.modeBestScore[t].node.parent.getChildByName("icon_video").active = !GameData.modeLock[o])
				}
			},
			initialSound: function () {
				1 == GameData.audioSwitch && n.playBgMusic(), this.soundSprite.active = 0 == GameData.audioSwitch
			},
			onClickMode: function (e, t) {
				var o = this;
				n.playSound(AudioID.ClickMode),
					GameMode = MODE[Object.keys(MODE)[t]],
					console.log(GameMode),
					GameMode == MODE.TEACH ? (3 == GameData.teachingXS && (GameData.teachingXS = 0,
					GameData.saveData()),
					this.toGame()) : GameMode == MODE.JINGDIAN ? this.toGame() :
					(console.log("GameData.modeLock", GameData.modeLock[GameMode]),
					GameData.modeLock[GameMode] ? this.toGame() : a.showRewardedVideo(function () {
					GameData.modeLock[GameMode] = 1, GameData.teaching = 3, GameData.saveData(), o.toGame()
				}))
			},
			onClickQiDai: function () {
				n.playSound(AudioID.ClickMode), Utils.ShowAsk("Coming Soon...")
			},
			toGame: function () {
				n.pauseMusic(), a.EventMenuToGame(), o.toGame(), a.gameEvent("GameMode", GameMode)
			},
			onClickSetAudio: function () {
				GameData.audioSwitch = 1 ^ GameData.audioSwitch, n.playClickSound(), 0 == GameData.audioSwitch ? n.pauseMusic() : n.resumeMusic(), this.soundSprite.active = 0 == GameData.audioSwitch
			}
		}), cc._RF.pop()
	}, {
		AudioManager: "AudioManager",
		Common: "Common",
		EventManager: "EventManager"
	}],
	PBaiDu: [function (e, t, o) {
		"use strict";
		var n;

		function a(e, t) {
			return (a = Object.setPrototypeOf || function (e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}
		cc._RF.push(t, "2dd722dhfhKlJzJ4fGh5TOz", "PBaiDu"), o.__esModule = !0, o.default = void 0;
		var i = function (e) {
			var t, o;

			function n() {
				return e.call(this) || this
			}
			o = e, (t = n).prototype = Object.create(o.prototype), t.prototype.constructor = t, a(t, o);
			var i = n.prototype;
			return i.init = function () {
				this.env = window.swan, this.info = window.lplatform && lplatform.systemInfo || this.env.getSystemInfoSync(), this.bh = lplatform.cparam.bannerHeight || 170, this.bw = lplatform.cparam.bannerWidth || Math.min(this.info.windowWidth, 16 * this.bh / 9), this.gameRecorderManager = this.env.getVideoRecorderManager(), this.createMoreGameButton(), this.showShareMenu()
			}, i.initAD = function () {
				this.loadBanner(!1), this.createRewardedVideo(!1)
			}, i.loadBanner = function (e) {
				this.hideBanner(!0), this.bannerAd || (this.btop = 0, lplatform.cparam.bannerOnBottom && (this.btop = this.info.windowHeight - this.bh), this.bannerAd = this.env.createBannerAd({
					adUnitId: lplatform.cparam.bannerID,
					appSid: lplatform.cparam.appSid,
					adIntervals: 30,
					style: {
						width: this.bw,
						height: this.bh,
						left: (this.info.windowWidth - this.bw) / 2,
						top: this.btop
					}
				}), this.bannerAd.onLoad(this.onBannerLoad.bind(this)), this.bannerAd.onError(this.onBannerError.bind(this)), this.bannerAd.onResize(this.onBannerResize.bind(this))), this.bannerAutoShow = e
			}, i.onBannerResize = function (e) {
				this.btop = 0, lplatform.cparam.bannerOnBottom && (this.btop = this.info.windowHeight - e.height), this.bannerAd.style.top = this.btop, this.bannerAd.style.left = 0
			}, i.createRewardedVideo = function (e) {
				lplatform.cparam.rewardedVideoID && (this.rewardedVideoAd || "function" != typeof this.env.createRewardedVideoAd || (this.rewardedVideoAd = this.env.createRewardedVideoAd({
					adUnitId: lplatform.cparam.rewardedVideoID,
					appSid: lplatform.cparam.appSid
				}), this.rewardedVideoAd.onError(this.onRewardedVideoError.bind(this)), this.rewardedVideoAd.onClose(this.onRewardedVideoClose.bind(this)), this.rewardedVideoAd.onLoad(this.onRewardedVideoLoad.bind(this))), e && this.showRewardedVideo(window.vcb))
			}, i.showRewardedVideo = function (t) {
				lplatform.pauseGame(), e.prototype.showRewardedVideo.call(this, t)
			}, i.onRewardedVideoError = function (t, o) {
				e.prototype.onRewardedVideoError.call(this, t, o), lplatform.resumeGame()
			}, i.onRewardedVideoClose = function (t) {
				e.prototype.onRewardedVideoClose.call(this, t), lplatform.resumeGame()
			}, i.loadInterstitial = function () { }, i.onInterstitialClose = function () { }, i.showInterstitial = function () { }, i.hideInterstitial = function () { }, i.showFavoriteGuide = function () {
				lplatform.plog("PBaiDu,showFavoriteGuide"), "function" == typeof this.env.showFavoriteGuide && this.env.showFavoriteGuide({
					type: "tip",
					content: "\u4e00\u952e\u6dfb\u52a0\u5230\u6211\u7684\u5c0f\u7a0b\u5e8f"
				})
			}, i.showAddToDesktopGuide = function () {
				"function" == typeof this.env.showAddToDesktopGuide && this.env.showAddToDesktopGuide({
					type: "bar-autohide",
					content: "\u4e00\u952e\u6dfb\u52a0\u5230\u6211\u7684\u684c\u9762",
					success: function (e) {
						console.log("\u6dfb\u52a0\u6210\u529f\uff1a", e)
					},
					fail: function (e) {
						console.log("\u6dfb\u52a0\u5931\u8d25\uff1a", e)
					}
				})
			}, i.showShareMenu = function () {
				"function" == typeof this.env.showShareMenu && this.env.showShareMenu({
					success: function () { },
					fail: function () { },
					complete: function () { }
				}), this.env.onShareAppMessage(function () {
					return {
						title: lplatform.cparam.shareAppTitle,
						imageUrl: lplatform.cparam.shareAppImgUrl,
						query: "key1=1&key2=2&key3=3",
						success: function (e) {
							lplatform.plog("onShareAppMessage share success", JSON.stringify(e))
						},
						fail: function (e) {
							lplatform.plog("onShareAppMessage share fail", JSON.stringify(e))
						}
					}
				})
			}, i.shareAppMessage = function () {
				this.env.shareAppMessage({
					title: lplatform.cparam.shareAppTitle,
					imageUrl: lplatform.cparam.shareAppImgUrl
				})
			}, i.canRecord = function () {
				return !(!this.gameRecorderManager || !lplatform.cparam.canRecord) || (lplatform.plog("PBaiDu,\u4e0d\u652f\u6301\u5f55\u5236\u6e38\u620f\u753b\u9762"), !1)
			}, i.startRecord = function (e) {
				if (this.canRecord()) {
					lplatform.plog("startRecord"), this.recordStartCb = e, this.videoPath = null, this.gameRecorderManager.start({
						duration: 30
					}), this.gameRecorderManager.onStart(this.onGameRecordStart.bind(this)), this.gameRecorderManager.onError(this.onGameRecordError.bind(this)), this.gameRecorderManager.onStop(this.onGameRecordStop.bind(this));
					var t = this;
					this.env.onShow(function () {
						lplatform.plog("startRecord this.env.onShow"), t.resumeRecord()
					}), this.env.onHide(function () {
						lplatform.plog("startRecord this.env.onHide"), t.pauseRecord()
					})
				}
			}, i.onGameRecordStart = function () {
				lplatform.plog("PBaiDu,onGameRecordStart"), this.gameRecordStartTime = Date.now(), this.recordStartCb && (this.recordStartCb(), this.recordStartCb = null)
			}, i.onGameRecordError = function (e) {
				lplatform.plog("onGameRecordError:" + JSON.stringify(e), "error")
			}, i.onGameRecordStop = function (e) {
				lplatform.plog("onGameRecordStop this.recordStopCb:" + this.recordStopCb), this.gameRecordStopTime = Date.now(), this.gameRecordStopTime - this.gameRecordStartTime > 4500 ? this.videoPath = e.videoPath : lplatform.plog("onGameRecordStop \u5b9e\u9645\u5f55\u5c4f\u65f6\u95f4\u5c11\u4e8e5\u79d2\u5c31\u6709\u53ef\u80fd\u5206\u4eab\u5931\u8d25"), this.recordStopCb && (this.recordStopCb(this.videoPath), this.recordStopCb = null)
			}, i.pauseRecord = function () {
				this.gameRecorderManager.pause()
			}, i.resumeRecord = function () {
				this.gameRecorderManager.resume()
			}, i.stopRecord = function (e) {
				lplatform.plog("stopRecord cb:" + e), this.canRecord() && (this.recordStopCb = e, this.gameRecorderManager.stop())
			}, i.shareRecord = function (e, t) {
				lplatform.plog("PBaiDu,shareRecord videoPath:" + this.videoPath), this.canShareRecord() ? this.env.shareVideo({
					videoPath: this.videoPath,
					success: function () {
						e && e()
					},
					fail: function (e) {
						t && t(e)
					}
				}) : this.shareAppMessage()
			}, i.resetRecord = function () {
				this.stopRecord(), this.videoPath = null
			}, i.createMoreGameButton = function () {
				this.createRecommendationButton()
			}, i.createMoreGameBanner = function () { }, i.createMoreGamePortal = function () { }, i.createRecommendationButton = function () {
				if ("function" == typeof this.env.createRecommendationButton)
					if (this.moreGameBtn) this.moreGameBtn.show();
					else {
						this.moreGameBtn = this.env.createRecommendationButton({
							type: "list",
							style: {
								left: lplatform.cparam.moreGameLeft * lplatform.systemInfo.windowWidth,
								top: lplatform.cparam.moreGameTop * lplatform.systemInfo.windowHeight
							}
						});
						var e = this;
						this.moreGameBtn.onLoad(function () {
							e.moreGameBtn.show(), e.moreGameBtn.offLoad(function () { })
						}), this.moreGameBtn.load()
					}
			}, i.makeShareUI = function (e, t, o, n, a) {
				void 0 === n && (n = 0), void 0 === a && (a = !1), lplatform.uiEngine.CreateShareK(function () {
					this.shareRecord(e, t)
				}.bind(this), function () {
					t && t(), this.gameRecordShareBtn && this.gameRecordShareBtn.hide()
				}.bind(this), o, n, a)
			}, i.goToGameOrGameList = function () {
				this.navigateToMiniProgram()
			}, i.navigateToMiniProgram = function (e) {
				this.env.navigateToMiniProgram({
					appKey: e || lplatform.cparam.navigateToId[0],
					path: "/path/page/0",
					extraData: {},
					success: function (e) {
						console.log("navigateToMiniProgram success", e)
					},
					fail: function (e) {
						console.log("navigateToMiniProgram fail", e)
					}
				})
			}, n
		}(((n = e("PWX")) && n.__esModule ? n : {
			default: n
		}).default);
		o.default = i, t.exports = o.default, cc._RF.pop()
	}, {
		PWX: "PWX"
	}],
	PDef: [function (e, t, o) {
		"use strict";
		cc._RF.push(t, "3a28abDjhpBQ6z6Dtv6fG07", "PDef"), o.__esModule = !0, o.default = void 0;
		var n = function () {
			function e() { }
			var t = e.prototype;
			return t.init = function () { }, t.initAD = function () { }, t.release = function () { }, t.loadBanner = function () { }, t.showBanner = function () { }, t.hideBanner = function () { }, t.loadInterstitial = function () { }, t.showInterstitial = function () { }, t.hideInterstitial = function () { }, t.createRewardedVideo = function () { }, t.loadRewardedVideo = function () { }, t.showRewardedVideo = function (e) {
				e && e(!0)
			}, t.hideRewardedVideo = function () { }, t.shareAppMessage = function () { }, t.canRecord = function () {
				return !1
			}, t.canShareRecord = function () {
				return !1
			}, t.startRecord = function () { }, t.pauseRecord = function () { }, t.stopRecord = function () { }, t.shareRecord = function () { }, t.resetRecord = function () { }, t.shareInnerRecord = function () { }, t.createMoreGameButton = function () { }, t.createMoreGameBanner = function () { }, t.createMoreGamePortal = function () { }, t.goToGameOrGameList = function () { }, t.showFavoriteGuide = function () { }, t.followAccount = function () { }, t.openAwemeUserProfile = function () { }, t.analytics = function () { }, t.showLoading = function () {
				this.hideLoading()
			}, t.hideLoading = function () { }, t.createGameClub = function () { }, t.navigateToMiniProgram = function () { }, t.shareMessageToFriend = function () { }, t.sendMsgToOpenDataProject = function () { }, t.makeShareUI = function (e, t, o, n, a) {
				void 0 === n && (n = 0), void 0 === a && (a = !1), e && e()
			}, e
		}();
		o.default = n, t.exports = o.default, cc._RF.pop()
	}, {}],
	PGameBox4399: [function (e, t, o) {
		"use strict";
		var n;

		function a(e, t) {
			return (a = Object.setPrototypeOf || function (e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}
		cc._RF.push(t, "e34e4kA3xJLgLc+b3Qsng9p", "PGameBox4399"), o.__esModule = !0, o.default = void 0;
		var i = function (e) {
			var t, o;

			function n() {
				return e.call(this) || this
			}
			o = e, (t = n).prototype = Object.create(o.prototype), t.prototype.constructor = t, a(t, o);
			var i = n.prototype;
			return i.init = function () {
				this.env = window.gamebox, this.info = window.lplatform && lplatform.systemInfo || this.env.getSystemInfoSync(), this.bh = lplatform.cparam.bannerHeight || 170, this.bw = lplatform.cparam.bannerWidth || Math.min(this.info.windowWidth, 16 * this.bh / 9), gamebox.login()
			}, i.initAD = function () {
				this.loadBanner(!1), this.loadInterstitial(!1), this.createRewardedVideo(!1)
			}, i.loadBanner = function (e) {
				this.hideBanner(!0), this.bannerAd || (this.btop = 0, lplatform.cparam.bannerOnBottom && (this.btop = this.info.windowHeight - this.bh), lplatform.plog("loadBanner this.bh:" + this.bh + " this.btop:" + this.btop + " this.bw:" + this.bw), this.bannerAd = this.env.createBannerAd({
					style: {
						width: this.bw,
						height: this.bh,
						left: (this.info.windowWidth - this.bw) / 2,
						top: this.btop
					}
				}), this.bannerAd.onLoad(this.onBannerLoad.bind(this)), this.bannerAd.onError(this.onBannerError.bind(this))), this.bannerAutoShow = e
			}, i.loadInterstitial = function (e) {
				this.hideInterstitial(), this.insterstitialAd ? this.insterstitialAd.load() : (this.insterstitialAd = this.env.createInterstitialAd(), this.insterstitialAd.onLoad(this.onInterstitialLoad.bind(this)), this.insterstitialAd.onError(this.onInterstitialError.bind(this)), this.insterstitialAd.onClose(this.onInterstitialClose.bind(this))), e && this.showInterstitial()
			}, i.createRewardedVideo = function (e) {
				lplatform.cparam.rewardedVideoID && (this.rewardedVideoAd || "function" != typeof this.env.createRewardedVideoAd || (this.rewardedVideoAd = this.env.createRewardedVideoAd(), this.rewardedVideoAd.onError(this.onRewardedVideoError.bind(this)), this.rewardedVideoAd.onClose(this.onRewardedVideoClose.bind(this)), this.rewardedVideoAd.onLoad(this.onRewardedVideoLoad.bind(this))), e && this.showRewardedVideo(window.vcb))
			}, i.shareAppMessage = function () {
				this.env.shareMessageToFriend({
					type: 1,
					success: function () { },
					fail: function () { },
					complete: function () { }
				})
			}, i.makeShareUI = function (e, t, o, n, a) {
				void 0 === n && (n = 0), void 0 === a && (a = !1), lplatform.uiEngine.CreateShareK(function () {
					this.shareRecord(e, t)
				}.bind(this), function () {
					t && t(), this.gameRecordShareBtn && this.gameRecordShareBtn.hide()
				}.bind(this), o, n, a)
			}, i.analytics = function () { }, n
		}(((n = e("PWX")) && n.__esModule ? n : {
			default: n
		}).default);
		o.default = i, t.exports = o.default, cc._RF.pop()
	}, {
		PWX: "PWX"
	}],
	PH54399: [function (e, t, o) {
		"use strict";
		var n;

		function a(e, t) {
			return (a = Object.setPrototypeOf || function (e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}
		cc._RF.push(t, "b374dW22s9HSoFGZ32pNSnX", "PH54399"), o.__esModule = !0, o.default = void 0;
		var i = function (e) {
			var t, o;

			function n() {
				return e.call(this) || this
			}
			o = e, (t = n).prototype = Object.create(o.prototype), t.prototype.constructor = t, a(t, o);
			var i = n.prototype;
			return i.init = function () {
				this.env = window.h5api
			}, i.initAD = function () {
				this.createRewardedVideo(!1)
			}, i.loadBanner = function () { }, i.showBanner = function () { }, i.hideBanner = function () { }, i.loadInterstitial = function () { }, i.showInterstitial = function () { }, i.hideInterstitial = function () { }, i.createRewardedVideo = function () { }, i.loadRewardedVideo = function () { }, i.showRewardedVideo = function (e) {
				this.env.canPlayAd(function (t) {
					console.log("\u662f\u5426\u53ef\u64ad\u653e\u5e7f\u544a", t.canPlayAd, "\u5269\u4f59\u6b21\u6570", t.remain), t.canPlayAd, this.env.playAd(function (t) {
						console.log("\u4ee3\u7801:" + t.code + ",\u6d88\u606f:" + t.message), 1e4 === t.code || (10001 === t.code ? e && e(!0) : console.log("\u5e7f\u544a\u5f02\u5e38"))
					})
				}.bind(this))
			}, i.hideRewardedVideo = function () { }, i.shareAppMessage = function () { }, i.makeShareUI = function (e, t, o, n, a) {
				void 0 === n && (n = 0), void 0 === a && (a = !1), t && t()
			}, i.analytics = function () { }, i.httpRequest = function (e, t) {
				t && t("h54399\u4e0d\u5141\u8bb8\u5916\u7f51\u8fde\u63a5", null, null)
			}, n
		}(((n = e("PGameBox4399")) && n.__esModule ? n : {
			default: n
		}).default);
		o.default = i, t.exports = o.default, cc._RF.pop()
	}, {
		PGameBox4399: "PGameBox4399"
	}],
	PHuaWei: [function (e, t, o) {
		"use strict";
		var n;

		function a(e, t) {
			return (a = Object.setPrototypeOf || function (e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}
		cc._RF.push(t, "7f3c3pQsX9OU6X0gR4dcV+Y", "PHuaWei"), o.__esModule = !0, o.default = void 0;
		var i = function (e) {
			var t, o;

			function n() {
				return e.call(this) || this
			}
			o = e, (t = n).prototype = Object.create(o.prototype), t.prototype.constructor = t, a(t, o);
			var i = n.prototype;
			return i.init = function () {
				this.env = window.qg, this.info = window.lplatform && lplatform.systemInfo || this.env.getSystemInfoSync(), this.bh = lplatform.cparam.bannerHeight || 170, this.bw = lplatform.cparam.bannerWidth || Math.min(this.info.windowWidth, 16 * this.bh / 9)
			}, i.initAD = function () {
				lplatform.plog("PHuaWei constructor initAD"), qg.setUnderAgeOfPromise(!1), qg.setNonPersonalizedAd(!1), this.createRewardedVideo(!1)
			}, i.loadBanner = function () {
				this.hideBanner(!1), this.bannerAd || (this.btop = 0, lplatform.cparam.bannerOnBottom && (this.btop = this.info.windowHeight - this.bh), lplatform.plog("loadBanner this.bh:" + this.bh + " this.btop:" + this.btop + " this.bw:" + this.bw), this.bannerAd = this.env.createBannerAd({
					adUnitId: lplatform.cparam.bannerID,
					adIntervals: 60,
					style: {
						width: this.bw,
						height: this.bh,
						left: 0,
						top: 720
					}
				}), this.bannerAd.onError(function (e) {
					console.log("bannerAd \u5e7f\u544a\u52a0\u8f7d\u51fa\u9519", e)
				}), this.bannerAd.onLoad(function () {
					console.log("bannerAd \u5e7f\u544a\u52a0\u8f7d\u6210\u529f")
				}), this.bannerAd.onClose(function () {
					console.log("bannerAd \u5e7f\u544a\u5173\u95ed")
				})), this.bannerAd.show()
			}, i.showBanner = function () {
				this.hideBanner(), lplatform.labData.mainSwitch && this.loadBanner(!0)
			}, i.hideBanner = function (e) {
				void 0 === e && (e = !1), this.bannerAd && (this.bannerAd.hide(), e && (this.bannerAd.offLoad(this.onBannerLoad), this.bannerAd.offError(this.onBannerError), this.bannerAd.offResize(this.onBannerResize), this.bannerAd.destroy(), this.bannerAd = null)), this.moreGameBanner && this.moreGameBanner.hide()
			}, i.loadInterstitial = function () {
				var e = this;
				this.createMoreGamePortal(!1, !0), lplatform.plog("createNativeAd lplatform.cparam.nativeID:" + lplatform.cparam.nativeID);
				var t = lplatform.cparam.nativeID;
				this.yuanshengIndex += 1, this.yuanshengIndex >= t.length && (this.yuanshengIndex = 0);
				var o = qg.createNativeAd({
					adUnitId: t[this.yuanshengIndex],
					success: function (e) {
						console.log("loadNativeAd loadNativeAd : success " + e)
					},
					fail: function (e, t) {
						console.log("loadNativeAd loadNativeAd fail: " + e + "," + t)
					},
					complete: function () {
						o.load()
					}
				});
				o.onLoad(function (t) {
					lplatform.plog("nativeAd.onLoad:" + JSON.stringify(t)), o.reportAdShow({
						adId: t.adList[0].adId
					}), e.yuanshengADK && (lplatform.plog("this.yuanshengADK.destroy:" + e.yuanshengADK.destroy), e.yuanshengADK.destroy()), e.yuanshengADK = lplatform.uiEngine.createChaping(t.adList[0], function () {
						e.yuanshengADK = null
					}.bind(e), function () {
						o.reportAdClick({
							adId: t.adList[0].adId
						}), e.yuanshengADK = null
					}.bind(e)), qg.onShow(function (n) {
						console.log("lyn qg.onShow:" + JSON.stringify(n) + " nativeAd:" + o + " ts.yuanshengADK:" + e.yuanshengADK), o && e.yuanshengADK && (console.log("qg.onShow reportAdShow:" + t.adList[0].adId), o.reportAdShow({
							adId: t.adList[0].adId
						}))
					}), qg.onHide(function () { })
				}.bind(e)), o.onError(function (t) {
					console.log("nativeAd.onError:" + JSON.stringify(t)), e.showBanner()
				}.bind(this))
			}, i.createRewardedVideo = function (e) {
				var t = this;
				if (lplatform.cparam.rewardedVideoID) {
					var o = this;
					this.rewardedVideoAd || "function" != typeof this.env.createRewardedVideoAd || (this.rewardedVideoAd = this.env.createRewardedVideoAd({
						adUnitId: lplatform.cparam.rewardedVideoID,
						success: function () { },
						fail: function (e, t) {
							console.log("loadAndShowVideoAd createRewardedVideoAd fail: " + e + "," + t), o.onRewardedVideoError && o.onRewardedVideoError({
								msg: "createRewardedVideoAd fail"
							}, "createRewardedVideoAd fail")
						},
						complete: function () {
							o.rewardedVideoAd.load(), e && t.showRewardedVideo(window.vcb)
						}
					}), this.rewardedVideoAd.onError(this.onRewardedVideoError.bind(this)), this.rewardedVideoAd.onClose(this.onRewardedVideoClose.bind(this)), this.rewardedVideoAd.onLoad(this.onRewardedVideoLoad.bind(this)))
				}
			}, i.canRecord = function () {
				return !(!this.gameRecorderManager || !lplatform.cparam.canRecord) || (lplatform.plog("huaWei,\u4e0d\u652f\u6301\u5f55\u5236\u6e38\u620f\u753b\u9762"), !1)
			}, i.shareAppMessage = function () {
				qg.serviceShare({
					shareType: 0,
					title: lplatform.cparam.shareAppTitle,
					summary: lplatform.cparam.shareAppTitle,
					imagePath: lplatform.cparam.shareAppImgUrl,
					targetUrl: lplatform.cparam.shareAppImgUrl,
					mediaUrl: lplatform.cparam.shareAppImgUrl,
					platforms: "",
					fail: function (e, t) {
						console.log("service share fail:" + t + e)
					},
					cancel: function () {
						console.log("cancel")
					}
				})
			}, i.makeShareUI = function (e, t, o, n, a) {
				void 0 === n && (n = 0), void 0 === a && (a = !1), lplatform.uiEngine.CreateShareK(function () {
					this.shareRecord(e, t)
				}.bind(this), function () {
					t && t(), this.gameRecordShareBtn && this.gameRecordShareBtn.hide()
				}.bind(this), o, n, a)
			}, i.shareRecord = function () {
				this.shareAppMessage(null)
			}, i.createMoreGameButton = function () { }, i.createMoreGameBanner = function () { }, i.createMoreGamePortal = function () { }, i.goToGameOrGameList = function () {
				lplatform.plog("huaWei\u672a\u5b9e\u73b0 goToGameOrGameList")
			}, n
		}(((n = e("POppo")) && n.__esModule ? n : {
			default: n
		}).default);
		o.default = i, t.exports = o.default, cc._RF.pop()
	}, {
		POppo: "POppo"
	}],
	PKuaiShou: [function (e, t, o) {
		"use strict";
		var n;

		function a(e, t) {
			return (a = Object.setPrototypeOf || function (e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}
		cc._RF.push(t, "505b14+x5hBNKDM+ansp8N9", "PKuaiShou"), o.__esModule = !0, o.default = void 0;
		var i = function (e) {
			var t, o;

			function n() {
				var t;
				return (t = e.call(this) || this).gameRecordShareBtn = null, t.moreGamePortal = null, t
			}
			o = e, (t = n).prototype = Object.create(o.prototype), t.prototype.constructor = t, a(t, o);
			var i = n.prototype;
			return i.init = function () {
				this.env = window.ks || window.kwaigame || window.wx, this.info = window.lplatform && lplatform.systemInfo || this.env.getSystemInfoSync(), this.bh = lplatform.cparam.bannerHeight || 170, this.bw = lplatform.cparam.bannerWidth || Math.min(this.info.windowWidth, 16 * this.bh / 9), "function" == typeof this.env.getGameRecorder && (this.gameRecorderManager = this.env.getGameRecorder())
			}, i.initAD = function () {
				this.createRewardedVideo(!1)
			}, i.createGameClub = function () { }, i.showShareMenu = function () { }, i.shareAppMessage = function () { }, i.navigateToMiniProgram = function () { }, i.shareMessageToFriend = function () { }, i.showFavoriteGuide = function () {
				console.log("\u5feb\u624b\u672a\u5b9e\u73b0showFavoriteGuide")
			}, i.sendMsgToOpenDataProject = function () { }, i.canRecord = function () {
				return !!this.gameRecorderManager || (console.log("\u4e0d\u652f\u6301\u5f55\u5236\u6e38\u620f\u753b\u9762"), !1)
			}, i.startRecord = function (e) {
				lplatform.plog("startRecord"), this.recordStartCb = e, this.videoPath = null, this.gameRecorderManager.start({
					duration: 30
				}), this.gameRecorderManager.on("start", this.onGameRecordStart.bind(this)), this.gameRecorderManager.on("error", this.onGameRecordError.bind(this)), this.gameRecorderManager.on("stop", this.onGameRecordStop.bind(this));
				var t = this;
				this.env.onShow(function () {
					lplatform.plog("startRecord this.env.onShow"), t.resumeRecord()
				}), this.env.onHide(function () {
					lplatform.plog("startRecord this.env.onHide"), t.pauseRecord()
				})
			}, i.onGameRecordStart = function () {
				this.gameRecordStartTime = Date.now(), this.recordStartCb && (this.recordStartCb(), this.recordStartCb = null)
			}, i.onGameRecordError = function (e) {
				lplatform.plog("onGameRecordError:" + JSON.stringify(e), "error")
			}, i.onGameRecordStop = function () {
				lplatform.plog("onGameRecordStop this.recordStopCb:" + this.recordStopCb), this.gameRecordStopTime = Date.now(), this.gameRecordStopTime - this.gameRecordStartTime > 4500 ? this.videoPath = "res.videoPath" : lplatform.plog("onGameRecordStop \u5b9e\u9645\u5f55\u5c4f\u65f6\u95f4\u5c11\u4e8e5\u79d2\u5c31\u6709\u53ef\u80fd\u5206\u4eab\u5931\u8d25"), this.recordStopCb && (this.recordStopCb(this.videoPath), this.recordStopCb = null)
			}, i.pauseRecord = function () {
				this.gameRecorderManager.pause()
			}, i.resumeRecord = function () {
				this.gameRecorderManager.resume()
			}, i.stopRecord = function (e) {
				this.canRecord() && (lplatform.plog("stopRecord cb:" + e), this.recordStopCb = e, this.gameRecorderManager.stop())
			}, i.shareRecord = function (e, t) {
				this.gameRecorderManager.publishVideo({
					callback: function (o) {
						null != o && null != o ? (console.log("\u5206\u4eab\u5f55\u5c4f\u5931\u8d25: " + JSON.stringify(o)), t && t()) : (console.log("\u5206\u4eab\u5f55\u5c4f\u6210\u529f"), e && e())
					}
				})
			}, i.resetRecord = function () {
				this.stopRecord(), this.videoPath = null
			}, i.shareInnerRecord = function () { }, i.makeShareUI = function (e, t, o, n, a) {
				void 0 === n && (n = 0), void 0 === a && (a = !1), this.canRecord() ? lplatform.uiEngine.CreateShareK(function () {
					this.shareRecord(e, t)
				}.bind(this), function () {
					t && t()
				}.bind(this), o, n, a) : t && t()
			}, i.loadBanner = function () { }, i.onBannerLoad = function () { }, i.onBannerError = function () { }, i.onBannerResize = function () { }, i.showBanner = function () { }, i.hideBanner = function (e) {
				void 0 === e && (e = !1)
			}, i.loadInterstitial = function (e) {
				this.hideInterstitial(), console.log("KS loadInterstitial:" + lplatform.cparam.interstitialID), this.insterstitialAd = this.env.createInterstitialAd({
					adUnitId: lplatform.cparam.interstitialID
				}), this.insterstitialAd.onError(this.onInterstitialError.bind(this)), this.insterstitialAd.onClose(this.onInterstitialClose.bind(this)), e && this.insterstitialAd && (console.log("KS insterstitialAd show"), this.insterstitialAd.show().catch(function (e) {
					console.log("KS insterstitialAd show error:" + JSON.stringify(e))
				}))
			}, i.onInterstitialLoad = function () { }, i.onInterstitialError = function (e, t) {
				lplatform.plog("onInterstitialError code:" + JSON.stringify(e) + " msg:" + t)
			}, i.onInterstitialClose = function () {
				this.loadInterstitial(!1)
			}, i.showInterstitial = function () {
				this.loadInterstitial(!0)
			}, i.hideInterstitial = function () {
				this.insterstitialAd && (this.insterstitialAd.offError(this.onInterstitialError), this.insterstitialAd.offClose(this.onInterstitialClose), this.insterstitialAd.destroy(), this.insterstitialAd = null)
			}, i.createMoreGameBanner = function () { }, i.createMoreGamePortal = function (e, t) {
				void 0 === e && (e = !1), void 0 === t && (t = !1)
			}, i.goToGameOrGameList = function () {
				this.createMoreGamePortal()
			}, i.analytics = function () { }, i.httpRequest = function (e, t, o, n, a, i, r) {
				this.env.request({
					url: e,
					data: a,
					header: i,
					timeout: o,
					method: n,
					dataType: r,
					success: function (e) {
						t(null, e.data, e.data)
					},
					fail: function (e) {
						t(e, null, null)
					}
				})
			}, n
		}(((n = e("PTT")) && n.__esModule ? n : {
			default: n
		}).default);
		o.default = i, t.exports = o.default, cc._RF.pop()
	}, {
		PTT: "PTT"
	}],
	PNative: [function (e, t, o) {
		"use strict";
		var n;

		function a(e, t) {
			return (a = Object.setPrototypeOf || function (e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}
		cc._RF.push(t, "4ad5coCGmJC0oTFqmeedD/p", "PNative"), o.__esModule = !0, o.default = void 0;
		var i = function (e) {
			var t, o;

			function n() {
				return e.call(this) || this
			}
			o = e, (t = n).prototype = Object.create(o.prototype), t.prototype.constructor = t, a(t, o);
			var i = n.prototype;
			return i.init = function () { }, i.initAD = function () { }, i.release = function () { }, i.loadBanner = function () { }, i.onBannerLoad = function () { }, i.onBannerError = function () { }, i.onBannerResize = function () { }, i.showBanner = function () {
				var e = {
					name: "showBanner",
					data: {}
				};
				e = JSON.stringify(e), lplatform.js2NativeEvent(e)
			}, i.hideBanner = function (e) {
				void 0 === e && (e = !1);
				var t = {
					name: "closeBanner",
					data: {}
				};
				t = JSON.stringify(t), lplatform.js2NativeEvent(t)
			}, i.loadInterstitial = function () { }, i.onInterstitialLoad = function () { }, i.onInterstitialError = function () { }, i.onInterstitialClose = function () { }, i.showInterstitial = function () {
				var e = {
					name: "showChaPing",
					data: {}
				};
				e = JSON.stringify(e), lplatform.js2NativeEvent(e)
			}, i.hideInterstitial = function () { }, i.showInterstitialVideo = function () {
				console.log("PNative===>>>showRewardedVideo");
				var e = {
					name: "showVideoChaPing",
					data: {}
				};
				e = JSON.stringify(e), lplatform.js2NativeEvent(e)
			}, i.createRewardedVideo = function () { }, i.loadRewardedVideo = function () { }, i.onRewardedVideoLoad = function () { }, i.onRewardedVideoError = function () { }, i.onRewardedVideoClose = function () { }, i.showRewardedVideo = function (e) {
				console.log("PNative===>>>", "showRewardedVideo"), e && (window.vcb = e, window.android && (window.android.videoRewardCb = function () {
					lplatform.resumeGame(), e(!0)
				}, window.android.videoFailCb = function () {
					lplatform.resumeGame(), e(!1)
				}));
				var t = {
					name: "showvideoAD",
					data: {}
				};
				t = JSON.stringify(t), lplatform.js2NativeEvent(t), lplatform.pauseGame()
			}, i.resetRewardedVideo = function (e, t) {
				void 0 === e && (e = !1), void 0 === t && (t = !1)
			}, i.shareAppMessage = function () { }, i.canRecord = function () {
				return !1
			}, i.canShareRecord = function () {
				return !1
			}, i.startRecord = function () { }, i.onGameRecordStart = function () { }, i.onGameRecordError = function () { }, i.onGameRecordStop = function () { }, i.pauseRecord = function () { }, i.resumeRecord = function () { }, i.stopRecord = function () { }, i.shareRecord = function () { }, i.resetRecord = function () { }, i.shareInnerRecord = function () { }, i.createMoreGameButton = function () { }, i.showFavoriteGuide = function () { }, i.followAccount = function () { }, i.goToGameOrGameList = function () {
				this.env.showMoreGamesModal({
					appLaunchOptions: [],
					success: function (e) {
						console.log("success", e.errMsg)
					},
					fail: function (e) {
						console.log("fail", e.errMsg)
					}
				})
			}, i.openAwemeUserProfile = function () { }, i.createMoreGameBanner = function () { }, i.createMoreGamePortal = function () { }, i.analytics = function (e, t) {
				var o = {
					name: e,
					data: t
				};
				lplatform.js2NativeEvent(JSON.stringify(o))
			}, i.showLoading = function () { }, i.hideLoading = function () { }, i.createGameClub = function () { }, i.navigateToMiniProgram = function () { }, i.shareMessageToFriend = function () { }, i.sendMsgToOpenDataProject = function () { }, i.makeShareUI = function (e, t, o, n, a) {
				void 0 === n && (n = 0), void 0 === a && (a = !1), t && t()
			}, i.httpRequest = function (e, t, o, n, a) {
				var i = new XMLHttpRequest;
				i.timeout = o, i.onreadystatechange = function () {
					4 == i.readyState && (i.status >= 200 && i.status < 400 ? t(null, i.response, i.responseText) : t(i.status, null, null))
				}, i.open(n || "GET", e, !0), i.send(a)
			}, n
		}(((n = e("PWX")) && n.__esModule ? n : {
			default: n
		}).default);
		o.default = i, t.exports = o.default, cc._RF.pop()
	}, {
		PWX: "PWX"
	}],
	POppo: [function (e, t, o) {
		"use strict";
		var n;

		function a(e, t) {
			return (a = Object.setPrototypeOf || function (e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}
		cc._RF.push(t, "8add3dR9wxLv593AV5OWcma", "POppo"), o.__esModule = !0, o.default = void 0;
		var i = function (e) {
			var t, o;

			function n() {
				var t;
				return (t = e.call(this) || this).yuanshengIndex = 0, t.yuanshengADK = null, t
			}
			o = e, (t = n).prototype = Object.create(o.prototype), t.prototype.constructor = t, a(t, o);
			var i = n.prototype;
			return i.init = function () {
				this.env = window.qg, this.info = window.lplatform && lplatform.systemInfo || this.env.getSystemInfoSync(), this.bh = lplatform.cparam.bannerHeight || 170, this.bw = lplatform.cparam.bannerWidth || Math.min(this.info.windowWidth, 16 * this.bh / 9), "function" == typeof this.env.getGameRecorder && (this.gameRecorderManager = this.env.getGameRecorder())
			}, i.initAD = function () {
				this.loadBanner(!1), this.createRewardedVideo(!1), this.loadMoreGamePortal(!1)
			}, i.createRewardedVideo = function (e) {
				lplatform.cparam.rewardedVideoID && (this.rewardedVideoAd || "function" != typeof this.env.createRewardedVideoAd || (this.rewardedVideoAd = this.env.createRewardedVideoAd({
					adUnitId: lplatform.cparam.rewardedVideoID
				}), this.rewardedVideoAd.onError(this.onRewardedVideoError.bind(this)), this.rewardedVideoAd.onClose(this.onRewardedVideoClose.bind(this)), this.rewardedVideoAd.onLoad(this.onRewardedVideoLoad.bind(this))), e && this.showRewardedVideo(window.vcb))
			}, i.showRewardedVideo = function (e) {
				var t = this;
				e && (window.vcb = e), this.rewardedVideoAd ? (lplatform.plog("showRewardedVideo this.rewardedVideoIsLoaded:" + this.rewardedVideoIsLoaded), this.rewardedVideoAd.show().then(function () {
					lplatform.plog("oppo\u7684rewardedVideo.show().then()\u5728\u89c6\u9891\u7ed3\u675f\u65f6\u624d\u8c03\u7528\uff0cshit.")
				}).catch(function (e) {
					lplatform.plog("showRewardedVideo catch:" + JSON.stringify(e)), t.rewardedVideoAd.load().then(function () {
						t.rewardedVideoAd.show()
					}).catch(function () {
						t.loadRewardedVideo(!1)
					})
				})) : this.createRewardedVideo(!0)
			}, i.onRewardedVideoError = function (t, o) {
				e.prototype.onRewardedVideoError.call(this, t, o), this.env.showToast({
					message: "\u5e7f\u544a\u5c55\u793a\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5\uff01"
				})
			}, i.onRewardedVideoClose = function (t) {
				e.prototype.onRewardedVideoClose.call(this, t)
			}, i.showFavoriteGuide = function () {
				var e = this;
				e.env.hasShortcutInstalled({
					success: function (t) {
						0 == t ? e.env.installShortcut({
							success: function () {
								e.showToast("\u6dfb\u52a0\u6210\u529f\uff01")
							},
							fail: function () {
								e.showToast("\u6dfb\u52a0\u5931\u8d25\uff01\u8bf7\u7a0d\u540e\u518d\u8bd5\uff01")
							},
							complete: function () { }
						}) : e.showToast("\u684c\u9762\u56fe\u6807\u5df2\u5b58\u5728\uff01\u8bf7\u52ff\u91cd\u590d\u521b\u5efa")
					},
					fail: function () {
						e.showToast("\u6dfb\u52a0\u5931\u8d25\uff01\u8bf7\u7a0d\u540e\u518d\u8bd5\uff01")
					},
					complete: function () { }
				})
			}, i.showToast = function (e) {
				this.env.showToast({
					title: e,
					icon: "none"
				})
			}, i.createMoreGamePortal = function (e, t) {
				var o = this;
				void 0 === e && (e = !1), void 0 === t && (t = !1), this.moreGamePortal ? (console.log("\u76f4\u63a5\u663e\u793a", JSON.stringify(this.moreGamePortal)), this.moreGamePortal.show().then(function () {
					console.log("show success")
				}).catch(function (e) {
					console.log("show fail with:" + e.errCode + "," + e.errMsg), window.moreGameButton && (window.moreGameButton.active = !1), o.moreGamePortal.destroy(), o.loadMoreGamePortal(!0)
				})) : (console.log("\u52a0\u8f7d\u540e\u76f4\u63a5\u663e\u793a"), this.loadMoreGamePortal(!0))
			}, i.loadMoreGamePortal = function (e) {
				var t = this;
				this.moreGamePortal && (this.moreGamePortal.destroy(), this.moreGamePortal = null), this.moreGamePortal = qg.createGamePortalAd({
					adUnitId: lplatform.cparam.spreadBoxID[0]
				}), this.moreGamePortal.onLoad(function () {
					console.log("\u4e92\u63a8\u76d2\u5b50\u4e5d\u5bab\u683c\u5e7f\u544a\u52a0\u8f7d\u6210\u529f"), window.moreGameButton && (window.moreGameButton.active = !0), e && t.moreGamePortal.show().then(function () {
						console.log("show success")
					}).catch(function (e) {
						console.log("show fail with:" + e.errCode + "," + e.errMsg), window.moreGameButton && (window.moreGameButton.active = !1)
					})
				}), this.moreGamePortal.onClose(function () {
					console.log("\u4e92\u63a8\u76d2\u5b50\u4e5d\u5bab\u683c\u5e7f\u544a\u5173\u95ed"), t.moreGamePortal.destroy().then(function () {
						console.log("destroy success")
					}).catch(function (e) {
						console.log("destroy fail with:" + e.errCode + "," + e.errMsg)
					}), t.loadMoreGamePortal(!1)
				}), this.moreGamePortal.onError(function (e) {
					window.moreGameButton && (window.moreGameButton.active = !1), console.log("\u4e92\u63a8\u76d2\u5b50\u4e5d\u5bab\u683c\u52a0\u8f7d\u5931\u8d25" + JSON.stringify(e))
				})
			}, i.createMoreGameButton = function () { }, i.createMoreGameBanner = function () {
				if (lplatform.cparam.moreGameBannerId) {
					if (!this.moreGameBanner) {
						lplatform.cparam.moreGameBannerWidth;
						var e = lplatform.cparam.moreGameBannerHeight;
						this.btop = 0, lplatform.cparam.bannerOnBottom && (this.btop = this.info.windowHeight - e), this.moreGameBanner = this.env.createGameBannerAd({
							adUnitId: lplatform.cparam.moreGameBannerId
						}), this.moreGameBanner.onError(function (e, t) {
							lplatform.plog("\u76d1\u542c\u4e8b\u4ef6:" + JSON.stringify(e) + " " + JSON.stringify(t))
						})
					}
					this.moreGameBanner.show(), lplatform.cparam.moreGameBannerAutoCloseTime > 0 && setTimeout(function () {
						this.moreGameBanner.hide()
					}.bind(this), lplatform.cparam.moreGameBannerAutoCloseTime)
				}
			}, i.showShareMenu = function () { }, i.shareAppMessage = function () { }, i.canRecord = function () {
				return !(!this.gameRecorderManager || !lplatform.cparam.canRecord) || (lplatform.plog("POppo,\u4e0d\u652f\u6301\u5f55\u5236\u6e38\u620f\u753b\u9762"), !1)
			}, i.canShareRecord = function () {
				return !1
			}, i.startRecord = function () { }, i.onGameRecordStart = function () { }, i.onGameRecordError = function () { }, i.pauseRecord = function () { }, i.resumeRecord = function () { }, i.stopRecord = function () { }, i.resetRecord = function () { }, i.shareInnerRecord = function () { }, i.showBanner = function () {
				e.prototype.showBanner.call(this)
			}, i.loadInterstitial = function () {
				var e = this;
				lplatform.plog("createNativeAd lplatform.cparam.nativeID:" + lplatform.cparam.nativeID);
				var t = lplatform.cparam.nativeID;
				this.yuanshengIndex += 1, this.yuanshengIndex >= t.length && (this.yuanshengIndex = 0), e.nativeAd && (e.nativeAd.destroy(), e.nativeAd = null);
				var o = qg.createNativeAd({
					adUnitId: t[this.yuanshengIndex]
				});
				e.nativeAd = o, o.onLoad(function (t) {
					lplatform.plog("nativeAd.onLoad:" + JSON.stringify(t)), o.reportAdShow({
						adId: t.adList[0].adId
					}), e.yuanshengADK && e.yuanshengADK.destroy && (lplatform.plog("onLoad this.yuanshengADK.destroy:" + e.yuanshengADK.destroy), e.yuanshengADK.destroy()), lplatform.labData.mainSwitch && (e.yuanshengADK = lplatform.uiEngine.createChaping(t.adList[0], function () {
						e.yuanshengADK = null
					}.bind(e), function () {
						o.reportAdClick({
							adId: t.adList[0].adId
						}), e.yuanshengADK = null
					}.bind(e)))
				}.bind(e)), o.onError(function (t) {
					console.log("nativeAd.onError:" + JSON.stringify(t)), e.loadNativeTemplate(!0), o.destroy(), e.yuanshengADK && e.yuanshengADK.destroy && (lplatform.plog("onError this.yuanshengADK.destroy:" + e.yuanshengADK.destroy), e.yuanshengADK.destroy())
				}.bind(this)), o.load()
			}, i.loadNativeTemplate = function (e) {
				if (lplatform.cparam.nativeTemplateID) {
					var t = Math.min(this.info.windowWidth, this.info.windowHeight),
						o = 9 * t / 16,
						n = this.info.windowWidth,
						a = qg.createCustomAd({
							adUnitId: lplatform.cparam.nativeTemplateID,
							style: {
								top: (this.info.windowHeight - o) / 2,
								left: .5 * n - .8 * t / 2,
								width: .8 * t
							}
						});
					this.customAd = a, e && a.show().then(function () {
						console.log("show success")
					}).catch(function (e) {
						console.log("show fail with:" + e.errCode + "," + e.errMsg)
					})
				}
			}, i.onInterstitialLoad = function () { }, i.onInterstitialError = function (e, t) {
				lplatform.plog("onInterstitialError code:" + e + " msg:" + t)
			}, i.onInterstitialClose = function () { }, i.showInterstitial = function () {
				lplatform.labData.mainSwitch && 1 == lplatform.labData.mainSwitch && this.loadInterstitial(!0)
			}, i.hideInterstitial = function () { }, i.onGameRecordStop = function (t) {
				e.prototype.onGameRecordStop.call(this, t), this.gameRecorderManager.saveToAlbum()
			}, i.shareRecord = function () { }, i.makeShareUI = function (e, t, o, n, a) {
				void 0 === n && (n = 0), void 0 === a && (a = !1), t && t()
			}, i.analytics = function () { }, i.httpRequest = function (e, t, o, n, a) {
				var i = new XMLHttpRequest;
				i.timeout = o, i.onreadystatechange = function () {
					4 == i.readyState && (i.status >= 200 && i.status < 400 ? t(null, i.response, i.responseText) : t(i.status, null, null))
				}, i.open(n || "GET", e, !0), i.send(a)
			}, i.goToGameOrGameList = function () {
				lplatform.plog("Oppo\u672a\u5b9e\u73b0 goToGameOrGameList")
			}, n
		}(((n = e("PTT")) && n.__esModule ? n : {
			default: n
		}).default);
		o.default = i, t.exports = o.default, cc._RF.pop()
	}, {
		PTT: "PTT"
	}],
	PQQ: [function (e, t, o) {
		"use strict";
		var n;

		function a(e, t) {
			return (a = Object.setPrototypeOf || function (e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}
		cc._RF.push(t, "d0a47b6/21CYp6NiQOfqsVc", "PQQ"), o.__esModule = !0, o.default = void 0;
		var i = function (e) {
			var t, o;

			function n() {
				var t;
				return (t = e.call(this) || this).moreGamePortal = null, t.moreGameBanner = null, t.moreGameBannerLeft = 16, t.moreGameBannerTop = 16, t.multiMoreGameBanner = [], t
			}
			o = e, (t = n).prototype = Object.create(o.prototype), t.prototype.constructor = t, a(t, o);
			var i = n.prototype;
			return i.init = function () {
				this.env = window.qq, this.info = window.lplatform && lplatform.systemInfo || this.env.getSystemInfoSync(), this.sceneID = this.env.getLaunchOptionsSync().scene, this.bh = lplatform.cparam.bannerHeight || 170, this.bw = lplatform.cparam.bannerWidth || Math.min(this.info.windowWidth, 16 * this.bh / 9), this.logined = !1, this.showShareMenu(), this.checkLogin()
			}, i.initAD = function () {
				this.loadBanner(!1), this.loadInterstitial(!1), this.createRewardedVideo(!1)
			}, i.checkLogin = function () {
				var e = this;
				e.env.checkSession({
					success: function () {
						e.logined = !0
					},
					fail: function () {
						e.env.login({
							success: function (t) {
								t.code ? e.logined = !0 : console.log("\u767b\u5f55\u5931\u8d25\uff01" + t.errMsg)
							}
						})
					}
				})
			}, i.showFavoriteGuide = function () {
				this.env.addToFavorites({
					title: "\u52a0\u5173\u6ce8\uff0c\u4e0d\u8ff7\u8def\u3002",
					imageUrl: "",
					query: "a=1&b=2",
					success: function () { },
					fail: function (e) {
						console.log("addToFavorites fail", e)
					},
					complete: function () { }
				}), setTimeout(function () {
					this.saveAppToDesktop()
				}.bind(this), 15e3), setTimeout(function () {
					this.addRecentColorSign()
				}.bind(this), 1e5)
			}, i.showShareMenu = function () {
				"function" == typeof this.env.showShareMenu && this.env.showShareMenu({
					showShareItems: ["qq", "qzone", "wechatFriends", "wechatMoment"]
				}), this.env.onShareAppMessage(function () {
					return lplatform.plog("onShareAppMessage lplatform.cparam.shareAppImgUrl:" + lplatform.cparam.shareAppImgUrl), {
						title: lplatform.cparam.shareAppTitle,
						imageUrl: lplatform.cparam.shareAppImgUrl
					}
				})
			}, i.shareAppMessage = function (e, t) {
				lplatform.plog("shareAppMessage lplatform.cparam.shareAppImgUrl:" + lplatform.cparam.shareAppImgUrl), this.env.shareAppMessage({
					title: lplatform.cparam.shareAppTitle,
					imageUrl: lplatform.cparam.shareAppImgUrl,
					success: function () {
						e && e()
					},
					fail: function () {
						t && t()
					}
				})
			}, i.shareRecord = function (e, t) {
				this.shareAppMessage(e, t)
			}, i.makeShareUI = function (e, t, o, n, a) {
				void 0 === n && (n = 0), void 0 === a && (a = !1), lplatform.uiEngine.CreateShareK(function () {
					this.shareRecord(e, t)
				}.bind(this), function () {
					t && t(), this.gameRecordShareBtn && this.gameRecordShareBtn.hide()
				}.bind(this), o, n, !1)
			}, i.showInterstitial = function () {
				var e = this;
				lplatform.labData.mainSwitch && 1 == lplatform.labData.mainSwitch && (this.insterstitialAd ? this.insterstitialAd.show().catch(function (t) {
					lplatform.plog("showInterstitial cache:" + JSON.stringify(t)), e.createMoreGamePortal(!0, !0)
				}) : this.loadInterstitial(!0))
			}, i.hideInterstitial = function () {
				this.insterstitialAd, this.moreGamePortal && this.moreGamePortal.destroy()
			}, i.createMoreGamePortal = function (e, t) {
				var o = this;
				if (void 0 === e && (e = !1), void 0 === t && (t = !0), lplatform.plog("QQ createMoreGamePortal typeof this.env.createAppBox:" + typeof this.env.createAppBox), "function" == typeof this.env.createAppBox && lplatform.cparam.moreGamePortalAppId && lplatform.cparam.moreGamePortalAppId.length > 0) {
					if (e && this.moreGamePortal && (this.moreGamePortal.destroy(), this.moreGamePortal = null), lplatform.plog("QQ createMoreGamePortal this.moreGamePortal:" + this.moreGamePortal), !this.moreGamePortal) {
						var n = Math.floor(Math.random() * lplatform.cparam.moreGamePortalAppId.length),
							a = lplatform.cparam.moreGamePortalAppId[n];
						lplatform.plog("QQ createMoreGamePortal baid:" + a), this.moreGamePortal = this.env.createAppBox({
							adUnitId: a
						})
					}
					lplatform.plog("QQ createMoreGamePortal autoShow:" + t);
					var i = this;
					this.moreGamePortal.load().then(function () {
						t && i.moreGamePortal.show()
					}).catch(function (e) {
						lplatform.plog("moreGamePortal load catch:" + JSON.stringify(e)), o.env.showToast({
							title: "\u6682\u65e0\u5e7f\u544a",
							icon: "none",
							duration: 2e3
						})
					})
				}
			}, i.showRealBanner = function () {
				this.bannerAd ? (console.log("is have Banner"), this.bannerAd.show()) : (console.log("no Banner"), this.loadBanner(!0))
			}, i.showBanner = function () {
				this.hideBanner(), lplatform.labData.mainSwitch && (Math.random() <= lplatform.cparam.moreGameBannerPercent ? this.createMoreGameBanner(!0, !0) : this.showRealBanner())
			}, i.hideBanner = function (e) {
				void 0 === e && (e = !1), this.bannerAd && (this.bannerAd.hide(), e && (this.bannerAd.offLoad(this.onBannerLoad), this.bannerAd.offError(this.onBannerError), this.bannerAd.offResize(this.onBannerResize), this.bannerAd.destroy(), this.bannerAd = null)), this.moreGameBanner && this.moreGameBanner.hide()
			}, i.hideMoreGameBanner = function () {
				this.moreGameBanner && (this.moreGameBanner.offResize(function () { }), this.moreGameBanner.offLoad(function () { }), this.moreGameBanner.offError(function () { }), this.moreGameBanner.destroy(), this.moreGameBanner = null)
			}, i.createMoreGameBanner = function (e, t) {
				if (void 0 === e && (e = !1), void 0 === t && (t = !1), lplatform.plog("QQ createMoreGameBanner typeof this.env.createBlockAd:" + typeof this.env.createBlockAd), "function" == typeof this.env.createBlockAd) {
					var o = this;
					if (lplatform.cparam.moreGameBannerAppId && (e && this.moreGameBanner && (this.moreGameBanner.offResize(function () { }), this.moreGameBanner.offLoad(function () { }), this.moreGameBanner.offError(function () { }), this.moreGameBanner.destroy(), this.moreGameBanner = null), !this.moreGameBanner)) {
						var n = Math.floor(Math.random() * lplatform.cparam.moreGameBannerAppId.length),
							a = lplatform.cparam.moreGameBannerAppId[n];
						lplatform.plog("QQ createMoreGameBanner baid:" + a + " this.moreGameBannerLeft:" + this.moreGameBannerLeft + " this.moreGameBannerTop:" + this.moreGameBannerTop), this.moreGameBanner = this.env.createBlockAd({
							adUnitId: a,
							style: {
								left: Math.max(0, this.moreGameBannerLeft),
								top: Math.max(0, this.moreGameBannerTop)
							},
							size: 5,
							orientation: "vertical"
						}), this.moreGameBanner.onResize(function (e) {
							o.moreGameBannerTop = 0, o.moreGameBanner.style.top = Math.max(0, (o.info.windowHeight - e.height) / 2), o.moreGameBanner.style.left = 10, lplatform.plog("QQ createMoreGameBanner onResize size:" + JSON.stringify(e) + " top:" + o.moreGameBanner.style.top + " left:" + o.moreGameBanner.style.left)
						}), this.moreGameBanner.onLoad(function () {
							lplatform.plog("QQ createMoreGameBanner onLoad autoShow:" + t), t && o.moreGameBanner.show()
						}), this.moreGameBanner.onError(function (e) {
							lplatform.plog("QQ createmoreGameBanner onError res:" + JSON.stringify(e))
						})
					}
				}
			}, i.createOutMoreGameBanner = function (e, t, o, n) {
				var a = e.x,
					i = e.y,
					r = this.env.createBlockAd({
						adUnitId: n,
						style: {
							left: a,
							top: i
						},
						size: t || 1,
						orientation: o || "vertical"
					});
				return r.onResize(function (t) {
					r.style.left = Math.max(0, e.x - t.width / 2 / 1), r.style.top = 10
				}), r.onLoad(function () {
					r.show()
				}), r.onError(function (e) {
					lplatform.plog("QQ createOutMoreGameBanner onError res:" + JSON.stringify(e))
				}), r
			}, i.createMultiMoreGameBanner = function () {
				for (var e = 0; e < lplatform.cparam.mmgPos.length; e++)
					if (this.multiMoreGameBanner[e] && (this.multiMoreGameBanner[e].offResize(function () { }), this.multiMoreGameBanner[e].offLoad(function () { }), this.multiMoreGameBanner[e].offError(function () { }), this.multiMoreGameBanner[e].destroy(), this.multiMoreGameBanner[e] = null), !this.multiMoreGameBanner[e]) {
						var t = {
							x: this.info.windowWidth * lplatform.cparam.mmgPos[e].x,
							y: this.info.windowHeight * lplatform.cparam.mmgPos[e].y
						},
							o = lplatform.cparam.mmgSize[e],
							n = lplatform.cparam.mmgOrientation[e],
							a = lplatform.cparam.mmgId[e];
						this.multiMoreGameBanner[e] = this.createOutMoreGameBanner(t, o, n, a)
					}
			}, i.canRecord = function () {
				return console.log("\u4e0d\u652f\u6301\u5f55\u5236\u6e38\u620f\u753b\u9762"), !1
			}, i.canShareRecord = function () {
				return !0
			}, i.goToGameOrGameList = function () {
				lplatform.plog("qq\u672a\u5b9e\u73b0 goToGameOrGameList")
			}, i.shareMessageToFriend = function () { }, i.saveAppToDesktop = function () {
				this.env.saveAppToDesktop({
					success: function () { },
					fail: function () { },
					complete: function () { }
				})
			}, i.subscribeAppMsg = function () {
				this.env.subscribeAppMsg({
					tmplIds: lplatform.cparam.tmplIds,
					subscribe: !0,
					success: function (e) {
						console.log("----subscribeAppMsg----success", e)
					},
					fail: function (e) {
						console.log("----subscribeAppMsg----fail", e)
					}
				})
			}, i.sendMsgToOpenDataProject = function (t) {
				this.logined ? e.prototype.sendMsgToOpenDataProject.call(this, t) : this.checkLogin()
			}, i.setUserCloudStorage = function (e) {
				this.sendMsgToOpenDataProject({
					name: "setUserCloudStorage",
					kvdata: e
				})
			}, i.addRecentColorSign = function () {
				this.env.addRecentColorSign({
					query: "a=1&b=2",
					success: function () { },
					fail: function (e) {
						console.log("addRecentColorSign fail: ", e)
					},
					complete: function () { }
				})
			}, n
		}(((n = e("./PWX")) && n.__esModule ? n : {
			default: n
		}).default);
		o.default = i, t.exports = o.default, cc._RF.pop()
	}, {
		"./PWX": "PWX"
	}],
	PTT: [function (e, t, o) {
		"use strict";
		var n;

		function a(e, t) {
			return (a = Object.setPrototypeOf || function (e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}
		cc._RF.push(t, "8971a6ThYhClIAqyFTnFgGU", "PTT"), o.__esModule = !0, o.default = void 0;
		var i = function (e) {
			var t, o;

			function n() {
				var t;
				return (t = e.call(this) || this).bannerAd = null, t.insterstitialAd = null, t.rewardedVideoAd = null, t.gameRecorderManager = null, t.info = null, t.bw = 0, t.bh = 0, t.btop = 0, t.videoPath = null, t.gameRecordStartTime = 0, t.gameRecordStopTime = 0, t.recordStartCb = null, t.recordStopCb = null, t.rewardedVideoTimeMax = 5e3, t.rewardedVideoLoadTimeout = null, t.rewardedVideoIsLoaded = !1, t.moreGameBanner = null, t.moreGameBtn = null, t.followBtn = null, t.env = null, t.init(), t
			}
			o = e, (t = n).prototype = Object.create(o.prototype), t.prototype.constructor = t, a(t, o);
			var i = n.prototype;
			return i.init = function () {
				this.env = tt, this.info = window.lplatform && lplatform.systemInfo || this.env.getSystemInfoSync(), this.bh = lplatform.cparam.bannerHeight || 170, this.bw = lplatform.cparam.bannerWidth || Math.min(this.info.windowWidth, 16 * this.bh / 9), this.gameRecorderManager = this.env.getGameRecorderManager()
			}, i.initAD = function () {
				this.loadBanner(!1), this.loadInterstitial(!1), this.createRewardedVideo(!1), lplatform.labData.openVideo && 1 == lplatform.labData.openVideo && ("023001" != this.env.getLaunchOptionsSync().scene && "023002" != this.env.getLaunchOptionsSync().scene && "013002" != this.env.getLaunchOptionsSync().scene && "013003" != this.env.getLaunchOptionsSync().scene || this.showRewardedVideo())
			}, i.checkOpenSceneValue = function () {
				var e = !0;
				if ("function" == typeof this.env.getLaunchOptionsSync) {
					var t = this.env.getLaunchOptionsSync().scene;
					console.log("sceneValue:" + t), this.recordSceneValue(t), (!lplatform.labData.openSceneValues || lplatform.labData.openSceneValues.indexOf(t) < 0) && (e = !1)
				}
				return e
			}, i.release = function () {
				this.hideBanner(!0), this.hideInterstitial(), this.hideRewardedVideo(), this.hideLoading(), this.moreGameBanner && this.moreGameBanner.destroy(), this.followBtn && this.followBtn.destroy()
			}, i.loadBanner = function (e) {
				this.hideBanner(!0), this.bannerAd || (this.btop = 0, lplatform.cparam.bannerOnBottom && (this.btop = this.info.windowHeight - this.bh), lplatform.plog("loadBanner this.bh:" + this.bh + " this.btop:" + this.btop + " this.bw:" + this.bw), this.bannerAd = this.env.createBannerAd({
					adUnitId: lplatform.cparam.bannerID,
					adIntervals: 30,
					style: {
						width: this.bw,
						height: this.bh,
						left: (this.info.windowWidth - this.bw) / 2,
						top: this.btop
					}
				}), this.bannerAd.onLoad(this.onBannerLoad.bind(this)), this.bannerAd.onError(this.onBannerError.bind(this)), this.bannerAd.onResize(this.onBannerResize.bind(this))), this.bannerAutoShow = e, this.bannerAutoShow && this.bannerAd.show()
			}, i.onBannerLoad = function () { }, i.onBannerError = function (e, t) {
				lplatform.plog("onBannerError code:" + JSON.stringify(e) + " msg:" + t)
			}, i.onBannerResize = function (e) {
				this.btop = 0, lplatform.cparam.bannerOnBottom && (this.btop = this.info.windowHeight - e.height), this.bannerAd.style.top = this.btop, this.bannerAd.style.left = (this.info.windowWidth - e.width) / 2, lplatform.plog("onBannerResize this.bannerAd.style.top:" + this.bannerAd.style.top + " .left:" + this.bannerAd.style.left + " lplatform.cparam.bannerOnBottom:" + lplatform.cparam.bannerOnBottom)
			}, i.showBanner = function () {
				this.bannerAd ? this.bannerAd.show().then(function () { }).catch(function (e) {
					lplatform.plog(e)
				}) : this.loadBanner(!0)
			}, i.hideBanner = function (e) {
				void 0 === e && (e = !1), this.bannerAd && (this.bannerAd.hide(), e && (this.bannerAd.offLoad(this.onBannerLoad), this.bannerAd.offError(this.onBannerError), this.bannerAd.offResize(this.onBannerResize), this.bannerAd.destroy(), this.bannerAd = null)), this.moreGameBanner && (this.moreGameBanner.hide(), e && "function" == typeof this.moreGameBanner.destroy && this.moreGameBanner.destroy())
			}, i.showCenterBanner = function () {
				if (!this.centerBanner) {
					this.btop = 0, lplatform.cparam.bannerOnBottom && (this.btop = this.info.windowHeight - this.bh), this.centerBanner = this.env.createBannerAd({
						adUnitId: lplatform.cparam.bannerID,
						adIntervals: 30,
						style: {
							width: this.bw,
							height: this.bh,
							left: 0,
							top: this.btop
						}
					});
					var e = this;
					this.centerBanner.onLoad(function () { }), this.centerBanner.onError(function (e, t) {
						lplatform.plog("centerBanner code:" + JSON.stringify(e) + " msg:" + t)
					}), this.centerBanner.onResize(function (t) {
						e.centerBanner.style.left = 0, e.centerBanner.style.top = e.info.windowHeight - t.height
					})
				}
				this.centerBanner.show()
			}, i.hideCenterBanner = function (e) {
				void 0 === e && (e = !1), this.centerBanner && (this.centerBanner.hide(), e && (this.centerBanner.offLoad(function () { }), this.centerBanner.offError(function () { }), this.centerBanner.offResize(function () { }), this.centerBanner.destroy(), this.centerBanner = null))
			}, i.loadInterstitial = function (e) {
				this.hideInterstitial(), this.insterstitialAd = this.env.createInterstitialAd({
					adUnitId: lplatform.cparam.interstitialID
				}), this.insterstitialAd.onLoad(this.onInterstitialLoad.bind(this)), this.insterstitialAd.onError(this.onInterstitialError.bind(this)), this.insterstitialAd.onClose(this.onInterstitialClose.bind(this)), this.insterstitialAd.load(), e && this.showInterstitial()
			}, i.onInterstitialLoad = function () { }, i.onInterstitialError = function (e, t) {
				lplatform.plog("onInterstitialError code:" + e + " msg:" + t)
			}, i.onInterstitialClose = function () {
				this.loadInterstitial(!1)
			}, i.showInterstitial = function () {
				this.insterstitialAd ? this.insterstitialAd.show() : this.loadInterstitial(!0)
			}, i.hideInterstitial = function () {
				this.insterstitialAd && (this.insterstitialAd.offLoad(this.onInterstitialLoad), this.insterstitialAd.offError(this.onInterstitialError), this.insterstitialAd.offClose(this.onInterstitialClose), this.insterstitialAd.destroy())
			}, i.createRewardedVideo = function (e) {
				lplatform.cparam.rewardedVideoID && (this.rewardedVideoAd || "function" != typeof this.env.createRewardedVideoAd || (this.rewardedVideoAd = this.env.createRewardedVideoAd({
					adUnitId: lplatform.cparam.rewardedVideoID
				}), this.rewardedVideoAd.onError(this.onRewardedVideoError.bind(this)), this.rewardedVideoAd.onClose(this.onRewardedVideoClose.bind(this)), this.rewardedVideoAd.onLoad(this.onRewardedVideoLoad.bind(this))), e && this.showRewardedVideo(window.vcb))
			}, i.loadRewardedVideo = function (e) {
				this.createRewardedVideo(e), lplatform.plog("loadRewardedVideo this.rewardedVideoAd.load()"), this.rewardedVideoAd.load()
			}, i.onRewardedVideoLoad = function () {
				lplatform.plog("onRewardedVideoLoad this.rewardedVideoIAutoShow:" + this.rewardedVideoIAutoShow)
			}, i.onRewardedVideoError = function (e, t) {
				lplatform.plog("onRewardedVideoError code:" + JSON.stringify(e) + " msg:" + t), cc.audioEngine.setMusicVolume(1), cc.audioEngine.setEffectsVolume(1), this.resetRewardedVideo()
			}, i.onRewardedVideoClose = function (e) {
				if (lplatform.plog("onRewardedVideoClose res.isEnded:" + e.isEnded), e.isEnded) window.vcb && window.vcb(e.isEnded), this.resetRewardedVideo(!1, !0), this.loadRewardedVideo(!1);
				else if (lplatform.labData.openSecondTipVideo) {
					var t = this;
					t.env.showModal({
						title: "\u7ee7\u7eed\u5417",
						content: "\u89c2\u770b\u5b8c\u89c6\u9891\u624d\u80fd\u83b7\u5f97\u5956\u52b1\u54e6",
						success: function (e) {
							e.confirm ? t.showRewardedVideo(window.vcb) : e.cancel && (window.vcb && window.vcb(e.isEnded), this.resetRewardedVideo(!1, !0), this.loadRewardedVideo(!1))
						}
					})
				} else window.vcb && window.vcb(e.isEnded);
				cc.audioEngine.setMusicVolume(1), cc.audioEngine.setEffectsVolume(1)
			}, i.showRewardedVideo = function (e) {
				var t = this;
				e && (window.vcb = e), this.rewardedVideoAd ? (this.showLoading(), this.rewardedVideoLoadTimeout = setTimeout(function () {
					lplatform.plog("rewardedVideoLoadTimeout \u5e7f\u544a\u8d85\u65f6 timeMax:" + this.rewardedVideoTimeMax), clearTimeout(this.rewardedVideoLoadTimeout), window.vcb && window.vcb(!1, "\u5e7f\u544a\u8d85\u65f6"), this.resetRewardedVideo(!0, !0)
				}.bind(this), this.rewardedVideoTimeMax), lplatform.plog("showRewardedVideo this.rewardedVideoIsLoaded:" + this.rewardedVideoIsLoaded), this.rewardedVideoAd.show().then(function () {
					lplatform.plog("showRewardedVideo then "), t.hideLoading(), clearTimeout(t.rewardedVideoLoadTimeout)
				}).catch(function (e) {
					lplatform.plog("showRewardedVideo catch:" + JSON.stringify(e)), t.hideLoading(), clearTimeout(t.rewardedVideoLoadTimeout), t.rewardedVideoAd.load().then(function () {
						t.rewardedVideoAd.show()
					}).catch(function () {
						t.loadRewardedVideo(!1)
					})
				})) : this.createRewardedVideo(!0)
			}, i.resetRewardedVideo = function (e, t) {
				void 0 === e && (e = !1), void 0 === t && (t = !1), this.rewardedVideoAd && e && (this.rewardedVideoAd.offLoad(this.onRewardedVideoLoad), this.rewardedVideoAd.offError(this.onRewardedVideoError), this.rewardedVideoAd.offClose(this.onRewardedVideoClose), this.rewardedVideoAd.destroy(), this.rewardedVideoAd = null), t && (window.vcb = null), this.rewardedVideoLoadTimeout && clearTimeout(this.rewardedVideoLoadTimeout), this.hideLoading()
			}, i.shareAppMessage = function () {
				this.env.shareAppMessage({
					templateId: lplatform.cparam.shareID,
					query: "",
					success: function () { },
					fail: function (e) {
						lplatform.plog("\u5206\u4eab\u5931\u8d25:" + e)
					}
				})
			}, i.canRecord = function () {
				return !!this.gameRecorderManager
			}, i.canShareRecord = function () {
				return !!this.videoPath
			}, i.startRecord = function (e) {
				lplatform.plog("startRecord"), this.recordStartCb = e, this.videoPath = null, this.gameRecorderManager.start({
					duration: 30
				}), this.gameRecorderManager.onStart(this.onGameRecordStart.bind(this)), this.gameRecorderManager.onError(this.onGameRecordError.bind(this)), this.gameRecorderManager.onStop(this.onGameRecordStop.bind(this));
				var t = this;
				this.env.onShow(function () {
					lplatform.plog("startRecord this.env.onShow"), t.resumeRecord()
				}), this.env.onHide(function () {
					lplatform.plog("startRecord this.env.onHide"), t.pauseRecord()
				})
			}, i.onGameRecordStart = function () {
				this.gameRecordStartTime = Date.now(), this.recordStartCb && (this.recordStartCb(), this.recordStartCb = null)
			}, i.onGameRecordError = function (e) {
				lplatform.plog("onGameRecordError:" + e, "error")
			}, i.onGameRecordStop = function (e) {
				lplatform.plog("onGameRecordStop this.recordStopCb:" + this.recordStopCb), this.gameRecordStopTime = Date.now(), this.gameRecordStopTime - this.gameRecordStartTime > 4500 ? this.videoPath = e.videoPath : (lplatform.plog("onGameRecordStop \u5b9e\u9645\u5f55\u5c4f\u65f6\u95f4\u5c11\u4e8e5\u79d2\u5c31\u6709\u53ef\u80fd\u5206\u4eab\u5931\u8d25"), this.env.showToast({
					title: "\u5f55\u5236\u65f6\u95f4\u592a\u77ed\uff0c\u53ef\u80fd\u65e0\u6cd5\u5206\u4eab\u3002",
					icon: "none",
					duration: 1e3,
					mask: !1,
					success: function () { },
					fail: function (e) {
						lplatform.plog(e)
					}
				})), this.recordStopCb && (this.recordStopCb(this.videoPath), this.recordStopCb = null)
			}, i.pauseRecord = function () {
				this.gameRecorderManager.pause()
			}, i.resumeRecord = function () {
				this.gameRecorderManager.resume()
			}, i.stopRecord = function (e) {
				lplatform.plog("stopRecord cb:" + e), this.recordStopCb = e, this.gameRecorderManager.stop()
			}, i.shareRecord = function (e, t) {
				if (this.videoPath) {
					var o = this;
					this.env.shareAppMessage({
						channel: "video",
						extra: {
							videoPath: this.videoPath,
							videoTopics: lplatform.cparam.videoTopics,
							hashtag_list: lplatform.cparam.videoTopics,
							createChallenge: !0
						},
						success: function () {
							e && e()
						},
						fail: function (e) {
							var n = null,
								a = JSON.stringify(e);
							a.indexOf("cancel") >= 0 ? n = "\u60a8\u53d6\u6d88\u4e86\u672c\u6b21\u5206\u4eab" : a.indexOf("21105") >= 0 && (n = "\u89c6\u9891\u592a\u77ed\uff0c\u65e0\u6cd5\u8fdb\u884c\u5206\u4eab"), n && o.env.showToast({
								title: n,
								icon: "none",
								duration: 1e3,
								mask: !1,
								success: function () { },
								fail: function (e) {
									lplatform.plog(e)
								}
							}), t && t()
						}
					})
				} else this.env.showToast({
					title: "\u6682\u65e0\u53ef\u5206\u4eab\u7684\u89c6\u9891",
					icon: "none",
					duration: 1e3,
					mask: !1,
					success: function () { },
					fail: function (e) {
						lplatform.plog(e)
					}
				}), t && t()
			}, i.resetRecord = function () {
				this.stopRecord(), this.videoPath = null
			}, i.shareInnerRecord = function () { }, i.createMoreGameButton = function () {
				this.moreGameBtn = this.env.createMoreGamesButton({
					type: "image",
					image: "moreGame.png",
					actionType: "box",
					style: {
						left: lplatform.cparam.moreGameLeft * lplatform.systemInfo.windowWidth,
						top: lplatform.cparam.moreGameTop * lplatform.systemInfo.windowHeight,
						width: 49.5,
						height: 39.9,
						lineHeight: 1,
						backgroundColor: "#00000000",
						textColor: "#ffffff",
						textAlign: "center",
						fontSize: 16,
						borderRadius: 1,
						borderWidth: 0,
						borderColor: "#ff0000"
					},
					appLaunchOptions: [],
					onNavigateToMiniGame: function (e) {
						lplatform.plog("\u8df3\u8f6c\u5176\u4ed6\u5c0f\u6e38\u620f", e)
					}
				}), this.moreGameBtn.onTap(function () {
					lplatform.plog("\u70b9\u51fb\u66f4\u591a\u6e38\u620f")
				})
			}, i.showFavoriteGuide = function () {
				this.env.showFavoriteGuide({
					type: "bar",
					content: "\u4e00\u952e\u52a0\u5173\u6ce8\uff0c\u4ece\u6b64\u4e0d\u8ff7\u8def!",
					position: "bottom",
					success: function () { },
					fail: function (e) {
						lplatform.plog("showFavoriteGuide fail:" + e)
					}
				})
			}, i.followAccount = function () {
				if ("function" == typeof this.env.checkFollowState) {
					var e = this;
					e.env.checkFollowState({
						success: function (t) {
							t.errMsg && lplatform.plog("checkFollowState success, but has errMsg:" + t.errMsg), t.result || e.env.createFollowButton && (e.followBtn = e.env.createFollowButton({
								type: "image",
								image: "follow_btn.png",
								style: {
									left: lplatform.cparam.followBtnLeft * lplatform.systemInfo.windowWidth,
									top: lplatform.cparam.followBtnTop * lplatform.systemInfo.windowHeight,
									width: 49.5,
									height: 39.9,
									lineHeight: 40,
									backgroundColor: "#ff0000",
									textColor: "#ffffff",
									textAlign: "center",
									fontSize: 16,
									borderRadius: 4,
									borderWidth: 1,
									borderColor: "#ff0000"
								}
							}))
						},
						fail: function (e) {
							lplatform.plog("followAccount fail:" + e)
						}
					})
				} else "function" == typeof this.env.openAwemeUserProfile && this.env.openAwemeUserProfile()
			}, i.goToGameOrGameList = function () {
				this.env.showMoreGamesModal({
					appLaunchOptions: [],
					success: function (e) {
						console.log("success", e.errMsg)
					},
					fail: function (e) {
						console.log("fail", e.errMsg)
					}
				})
			}, i.openAwemeUserProfile = function () { }, i.createMoreGameBanner = function () {
				if (lplatform.cparam.moreGameBannerAppId) {
					var e = Math.floor(Math.random() * lplatform.cparam.moreGameBannerAppId.length),
						t = lplatform.cparam.moreGameBannerAppId[e];
					if (!this.moreGameBanner) {
						this.btop = 0, lplatform.cparam.bannerOnBottom && (this.btop = this.info.windowHeight - 104), this.moreGameBanner = this.env.createMoreGamesBanner({
							style: {
								width: 300,
								height: 104,
								left: 0,
								top: this.btop
							},
							appLaunchOptions: [{
								appId: t,
								query: "foo=bar&baz=qux",
								extraData: {}
							}]
						});
						var o = function (e, t) {
							lplatform.plog("\u76d1\u542c\u4e8b\u4ef6:" + JSON.stringify(e) + " " + JSON.stringify(t))
						};
						this.moreGameBanner.onResize(function (e) {
							this.moreGameBanner.style.top = this.info.windowHeight - 104, this.moreGameBanner.style.left = (this.info.windowWidth - 300) / 2, lplatform.plog("moreGameBanner size.width:" + e.width + " size.height:" + e.height + " lplatform.cparam.bannerOnBottom:" + lplatform.cparam.bannerOnBottom)
						}.bind(this)), this.moreGameBanner.onTap(o), this.moreGameBanner.onError(o)
					}
					this.moreGameBanner.show(), lplatform.cparam.moreGameBannerAutoCloseTime > 0 && setTimeout(function () {
						this.moreGameBanner.hide()
					}.bind(this), lplatform.cparam.moreGameBannerAutoCloseTime)
				}
			}, i.createMoreGamePortal = function () {
				"ios" !== this.info.platform ? tt.showMoreGamesModal({
					appLaunchOptions: [{
						appId: "ttXXXXXX",
						query: "foo=bar&baz=qux",
						extraData: {}
					}],
					success: function (e) {
						console.log("success", e.errMsg)
					},
					fail: function (e) {
						console.log("fail", e.errMsg)
					}
				}) : tt.showToast({
					title: " iOS\u4e0d\u652f\u6301\u6b64\u529f\u80fd"
				})
			}, i.analytics = function (e, t) {
				"function" == typeof this.env.reportAnalytics && this.env.reportAnalytics(e, t)
			}, i.showLoading = function (e) {
				this.hideLoading(), "function" == typeof this.env.showLoading && this.env.showLoading({
					title: e || "\u5904\u7406\u4e2d\uff0c\u8bf7\u7a0d\u5019...",
					success: function () { },
					fail: function (e) {
						lplatform.plog("showLoading\u8c03\u7528\u5931\u8d25:" + e)
					}
				})
			}, i.hideLoading = function () {
				var e = this;
				"function" == typeof this.env.hideLoading && this.env.hideLoading({
					success: function () { },
					fail: function (t) {
						lplatform.plog("hideLoading\u8c03\u7528\u5931\u8d25:" + t), setTimeout(function () {
							e.env.hideLoading({
								success: function () { },
								fail: function (e) {
									lplatform.plog("hideLoading\u4e8c\u6b21\u8c03\u7528\u5931\u8d25:" + e)
								}
							})
						}.bind(this), 1e3)
					}
				})
			}, i.createGameClub = function () { }, i.navigateToMiniProgram = function () { }, i.shareMessageToFriend = function () { }, i.sendMsgToOpenDataProject = function () { }, i.makeShareUI = function (e, t, o, n, a) {
				void 0 === n && (n = 0), void 0 === a && (a = !1), lplatform.uiEngine.CreateShareK(function () {
					this.shareRecord(e, t)
				}.bind(this), function () {
					t && t()
				}.bind(this), o, n, a)
			}, i.httpRequest = function (e, t, o, n, a) {
				var i = new XMLHttpRequest;
				i.timeout = o, i.onreadystatechange = function () {
					4 == i.readyState && (i.status >= 200 && i.status < 400 ? t(null, i.response, i.responseText) : t(i.status, null, null))
				}, i.open(n || "GET", e, !0), i.send(a)
			}, i.recordSceneValue = function (e) {
				lplatform.labData.recordSceneValue && this.env.request({
					data: {
						sceneValue: e
					},
					header: {
						"content-type": "application/json"
					},
					success: function () { },
					fail: function () { }
				})
			}, n
		}(((n = e("PDef")) && n.__esModule ? n : {
			default: n
		}).default);
		o.default = i, t.exports = o.default, cc._RF.pop()
	}, {
		PDef: "PDef"
	}],
	PUC: [function (e, t, o) {
		"use strict";
		var n;

		function a(e, t) {
			return (a = Object.setPrototypeOf || function (e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}
		cc._RF.push(t, "71dd7suQUVNC4AhBjAmQsb9", "PUC"), o.__esModule = !0, o.default = void 0;
		var i = function (e) {
			var t, o;

			function n() {
				return e.call(this) || this
			}
			o = e, (t = n).prototype = Object.create(o.prototype), t.prototype.constructor = t, a(t, o);
			var i = n.prototype;
			return i.init = function () {
				this.env = uc
			}, i.initAD = function () { }, i.loadBanner = function (e) {
				if (!this.bannerAd) {
					var t = {
						style: {
							width: lplatform.cparam.bannerWidth,
							height: lplatform.cparam.bannerHeight,
							gravity: 7
						}
					};
					this.bannerAd = uc.createBannerAd(t), this.bannerAd.onLoad(function () { }.bind(this)), this.bannerAd.onError(function () { }.bind(this)), e && this.bannerAd.show()
				}
			}, i.showBanner = function () {
				this.hideBanner(), this.bannerAd ? this.bannerAd.show() : this.loadBanner(!0)
			}, i.hideBanner = function () {
				this.bannerAd && (this.bannerAd.destroy(), this.bannerAd = null)
			}, i.hideInterstitial = function () { }, i.createRewardedVideo = function (e) {
				lplatform.cparam.rewardedVideoID && (this.rewardedVideoAd || "function" != typeof this.env.createRewardedVideoAd || (this.rewardedVideoAd = this.env.createRewardedVideoAd({
					adUnitId: lplatform.cparam.rewardedVideoID
				}), this.rewardedVideoAd.onError(this.onRewardedVideoError.bind(this)), this.rewardedVideoAd.onClose(this.onRewardedVideoClose.bind(this)), this.rewardedVideoAd.onLoad(this.onRewardedVideoLoad.bind(this))), e && this.showRewardedVideo(window.vcb))
			}, i.loadRewardedVideo = function (e) {
				this.createRewardedVideo(e), lplatform.plog("loadRewardedVideo this.rewardedVideoAd.load()")
			}, i.onRewardedVideoLoad = function () {
				lplatform.plog("onRewardedVideoLoad this.rewardedVideoIAutoShow:" + this.rewardedVideoIAutoShow)
			}, i.onRewardedVideoError = function (e, t) {
				lplatform.plog("onRewardedVideoError code:" + JSON.stringify(e) + " msg:" + t), this.resetRewardedVideo()
			}, i.onRewardedVideoClose = function (e) {
				if (lplatform.plog("onRewardedVideoClose res.isEnded:" + e.isEnded), e.isEnded) lplatform.plog("onRewardedVideoClose window.vcb:" + window.vcb), window.vcb && window.vcb(e.isEnded), this.resetRewardedVideo(!1, !0), this.loadRewardedVideo(!1);
				else if (lplatform.labData.openSecondTipVideo) {
					var t = this;
					t.env.showModal({
						title: "\u7ee7\u7eed\u5417",
						content: "\u89c2\u770b\u5b8c\u89c6\u9891\u624d\u80fd\u83b7\u5f97\u5956\u52b1\u54e6",
						success: function (e) {
							e.confirm ? t.showRewardedVideo(window.vcb) : e.cancel && (window.vcb && window.vcb(e.isEnded), this.resetRewardedVideo(!1, !0), this.loadRewardedVideo(!1))
						}
					})
				}
			}, i.showRewardedVideo = function (e) {
				var t = this;
				lplatform.plog("showRewardedVideo vcb:" + e), e && (window.vcb = e), this.rewardedVideoAd ? (this.showLoading(), this.rewardedVideoLoadTimeout = setTimeout(function () {
					lplatform.plog("rewardedVideoLoadTimeout \u5e7f\u544a\u8d85\u65f6 timeMax:" + this.rewardedVideoTimeMax), clearTimeout(this.rewardedVideoLoadTimeout), window.vcb && window.vcb(!1, "\u5e7f\u544a\u8d85\u65f6"), this.resetRewardedVideo(!0, !0)
				}.bind(this), this.rewardedVideoTimeMax), lplatform.plog("showRewardedVideo this.rewardedVideoIsLoaded:" + this.rewardedVideoIsLoaded), this.rewardedVideoAd.show().then(function () {
					lplatform.plog("showRewardedVideo then "), t.hideLoading(), clearTimeout(t.rewardedVideoLoadTimeout)
				}).catch(function (e) {
					lplatform.plog("showRewardedVideo catch:" + JSON.stringify(e)), t.hideLoading(), clearTimeout(t.rewardedVideoLoadTimeout), t.rewardedVideoAd.load().then(function () {
						t.rewardedVideoAd.show()
					}).catch(function () {
						t.loadRewardedVideo(!1)
					})
				})) : this.createRewardedVideo(!0)
			}, i.resetRewardedVideo = function (e, t) {
				void 0 === e && (e = !1), void 0 === t && (t = !1), this.rewardedVideoAd && e && (this.rewardedVideoAd.offLoad(this.onRewardedVideoLoad), this.rewardedVideoAd.offError(this.onRewardedVideoError), this.rewardedVideoAd.offClose(this.onRewardedVideoClose), this.rewardedVideoAd = null), t && (window.vcb = null), this.rewardedVideoLoadTimeout && clearTimeout(this.rewardedVideoLoadTimeout), this.hideLoading()
			}, i.shareAppMessage = function () { }, i.makeShareUI = function (e, t, o, n, a) {
				void 0 === n && (n = 0), void 0 === a && (a = !1), t && t()
			}, i.analytics = function () { }, i.showFavoriteGuide = function () { }, i.canRecord = function () {
				return !1
			}, i.canShareRecord = function () {
				return !1
			}, i.startRecord = function () { }, i.pauseRecord = function () { }, i.resumeRecord = function () { }, i.stopRecord = function () { }, i.shareRecord = function (e, t) {
				t && t()
			}, i.resetRecord = function () { }, n
		}(((n = e("PTT")) && n.__esModule ? n : {
			default: n
		}).default);
		o.default = i, t.exports = o.default, cc._RF.pop()
	}, {
		PTT: "PTT"
	}],
	PVivo: [function (e, t, o) {
		"use strict";
		var n;

		function a(e, t) {
			return (a = Object.setPrototypeOf || function (e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}
		cc._RF.push(t, "df065fJ6gJAfYuO6WT4CNps", "PVivo"), o.__esModule = !0, o.default = void 0;
		var i = function (e) {
			var t, o;

			function n() {
				return e.call(this) || this
			}
			o = e, (t = n).prototype = Object.create(o.prototype), t.prototype.constructor = t, a(t, o);
			var i = n.prototype;
			return i.init = function () {
				this.env = window.qg, this.info = window.lplatform && lplatform.systemInfo || this.env.getSystemInfoSync(), this.bh = lplatform.cparam.bannerHeight || 170, this.bw = lplatform.cparam.bannerWidth || Math.min(this.info.windowWidth, 16 * this.bh / 9)
			}, i.initAD = function () {
				this.loadInterstitial(!1), this.createRewardedVideo(!1), setTimeout(function () {
					this.createMoreGamePortal(!1, !0)
				}.bind(this), 1e4)
			}, i.loadBanner = function (e) {
				this.hideBanner(!0), this.bannerAd || (this.btop = 0, lplatform.cparam.bannerOnBottom && (this.btop = this.info.windowHeight - this.bh), lplatform.plog("loadBanner this.bh:" + this.bh + " this.btop:" + this.btop + " this.bw:" + this.bw + " lplatform.cparam.bannerID:" + lplatform.cparam.bannerID), this.bannerAd = this.env.createBannerAd({
					posId: lplatform.cparam.bannerID,
					adIntervals: 30,
					style: {}
				}), this.bannerAd.onLoad(this.onBannerLoad.bind(this)), this.bannerAd.onError(this.onBannerError.bind(this)), this.bannerAd.onSize(this.onBannerResize.bind(this))), this.bannerAutoShow = e, e && this.bannerAd.show()
			}, i.showBanner = function () {
				this.loadBanner(!0)
			}, i.showVivoInterstitial = function () {
				var e = this;
				console.log("showVivoInterstitial");
				var t = qg.createInterstitialAd({
					posId: lplatform.cparam.interstitialID
				});
				t.onError(function (e) {
					console.log("\u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25", JSON.stringify(e))
				}), t.show().then(function () {
					console.log("\u63d2\u5c4f\u5e7f\u544a\u5c55\u793a\u5b8c\u6210"), e.customAd && e.customAd.destroy()
				}).catch(function (e) {
					console.log("\u63d2\u5c4f\u5e7f\u544a\u5c55\u793a\u5931\u8d25", JSON.stringify(e))
				})
			}, i.loadInterstitial = function (e) {
				var t = this;
				this.customAd && this.customAd.destroy();
				var o = this.env.createCustomAd({
					posId: lplatform.cparam.nativeID[0],
					style: {
						left: (this.info.windowWidth - 1080) / 2,
						top: (this.info.windowHeight - 720) / 2
					}
				});
				o.onLoad(function () { }.bind(this)), o.onError(function (e) {
					console.log("createCustomAd Error", JSON.stringify(e)), t.showVivoInterstitial()
				}.bind(this)), o.onClose(function () {
					this.loadInterstitial(!1)
				}.bind(this)), this.customAd = o, e && this.customAd.show()
			}, i.showInterstitial = function () {
				this.loadInterstitial(!0)
			}, i.createMoreGameBanner = function () {
				lplatform.cparam.moreGameBannerId && (this.moreGameBanner || (this.moreGameBanner = this.env.createBoxBannerAd({
					posId: lplatform.cparam.moreGameBannerId
				}), this.moreGameBanner.onError(function (e, t) {
					lplatform.plog("\u76d1\u542c\u4e8b\u4ef6:" + JSON.stringify(e) + " " + JSON.stringify(t))
				})), this.moreGameBanner.show(), lplatform.cparam.moreGameBannerAutoCloseTime > 0 && setTimeout(function () {
					this.moreGameBanner.hide()
				}.bind(this), lplatform.cparam.moreGameBannerAutoCloseTime))
			}, i.createMoreGamePortal = function (e, t) {
				if (void 0 === e && (e = !1), void 0 === t && (t = !1), "function" == typeof this.env.createBoxPortalAd) {
					if (e && this.moreGamePortal && (lplatform.plog("createMoreGamePortal destroyPrev"), this.moreGamePortal.destroy(), this.moreGamePortal = null), !this.moreGamePortal) {
						var o = Math.floor(Math.random() * lplatform.cparam.spreadBoxID.length),
							n = lplatform.cparam.spreadBoxID[o];
						lplatform.plog("createMoreGamePortal:" + n), this.moreGamePortal = this.env.createBoxPortalAd({
							posId: n,
							image: lplatform.cparam.moreGamePortalIconUrl,
							marginTop: lplatform.cparam.moreGamePortalMarginTop
						})
					}
					t && this.moreGamePortal.show().then(function () { }).catch(function (e) {
						lplatform.plog("createMoreGamePortal show fail:" + JSON.stringify(e))
					})
				}
			}, i.createRewardedVideo = function (e) {
				lplatform.cparam.rewardedVideoID && (this.rewardedVideoAd || "function" != typeof this.env.createRewardedVideoAd || (this.rewardedVideoAd = this.env.createRewardedVideoAd({
					posId: lplatform.cparam.rewardedVideoID
				}), this.rewardedVideoAd.onError(this.onRewardedVideoError.bind(this)), this.rewardedVideoAd.onClose(this.onRewardedVideoClose.bind(this)), this.rewardedVideoAd.onLoad(this.onRewardedVideoLoad.bind(this))), e && (this.showRewardedVideo(window.vcb), cc.audioEngine.setMusicVolume(0), cc.audioEngine.setEffectsVolume(0)))
			}, i.goToGameOrGameList = function () {
				lplatform.plog("vivoGame\u672a\u5b9e\u73b0 goToGameOrGameList")
			}, i.showFavoriteGuide = function () {
				var e = this;
				e.env.hasShortcutInstalled({
					success: function (t) {
						0 == t ? e.env.installShortcut({
							success: function () { },
							fail: function () { },
							complete: function () { }
						}) : e.env.showToast({
							message: "\u5df2\u521b\u5efa\u684c\u9762\u56fe\u6807"
						})
					},
					fail: function () { },
					complete: function () { }
				})
			}, i.canRecord = function () {
				return !1
			}, i.canShareRecord = function () {
				return !1
			}, i.startRecord = function () { }, i.pauseRecord = function () { }, i.resumeRecord = function () { }, i.stopRecord = function () { }, i.shareRecord = function (e, t) {
				t && t()
			}, i.resetRecord = function () { }, i.httpRequest = function (e, t, o, n, a, i, r) {
				void 0 === r && (r = "text"), this.env.request({
					url: e,
					data: a,
					header: i,
					timeout: o,
					method: n,
					dataType: r,
					success: function (e) {
						t(null, e.data, e.data)
					},
					fail: function (e) {
						t(e, null, null)
					}
				})
			}, n
		}(((n = e("POppo")) && n.__esModule ? n : {
			default: n
		}).default);
		o.default = i, t.exports = o.default, cc._RF.pop()
	}, {
		POppo: "POppo"
	}],
	PWX: [function (e, t, o) {
		"use strict";
		var n;

		function a(e, t) {
			return (a = Object.setPrototypeOf || function (e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}
		cc._RF.push(t, "9bc97JVGh5NF70TK2Dfj/eK", "PWX"), o.__esModule = !0, o.default = void 0;
		var i = function (e) {
			var t, o;

			function n() {
				var t;
				return (t = e.call(this) || this).gameRecordShareBtn = null, t.moreGamePortal = null, t
			}
			o = e, (t = n).prototype = Object.create(o.prototype), t.prototype.constructor = t, a(t, o);
			var i = n.prototype;
			return i.init = function () {
				this.env = window.wx, this.info = window.lplatform && lplatform.systemInfo || this.env.getSystemInfoSync(), this.bh = lplatform.cparam.bannerHeight || 170, this.bw = lplatform.cparam.bannerWidth || Math.min(this.info.windowWidth, 16 * this.bh / 9), this.gameRecorderManager = this.env.getGameRecorder(), this.createGameClub(), this.showShareMenu(), this.checkLogin()
			}, i.initAD = function () {
				this.loadBanner(!1), this.loadInterstitial(!1), this.createRewardedVideo(!1)
			}, i.checkLogin = function () {
				var e = this;
				e.env.checkSession({
					success: function () {
						e.logined = !0
					},
					fail: function () {
						e.env.login({
							success: function (t) {
								t.code ? e.logined = !0 : console.log("\u767b\u5f55\u5931\u8d25\uff01" + t.errMsg)
							}
						})
					}
				})
			}, i.loadInterstitial = function (e) {
				this.hideInterstitial(), this.insterstitialAd ? this.insterstitialAd.load() : (this.insterstitialAd = this.env.createInterstitialAd({
					adUnitId: lplatform.cparam.interstitialID
				}), this.insterstitialAd.onLoad(this.onInterstitialLoad.bind(this)), this.insterstitialAd.onError(this.onInterstitialError.bind(this)), this.insterstitialAd.onClose(this.onInterstitialClose.bind(this))), e && this.showInterstitial()
			}, i.onInterstitialError = function () { }, i.onInterstitialClose = function () { }, i.showInterstitial = function () {
				var e = this;
				this.insterstitialAd ? this.insterstitialAd.show().catch(function (t) {
					lplatform.plog("showInterstitial cache:" + JSON.stringify(t)), e.createMoreGamePortal(!0, !0)
				}) : this.loadInterstitial(!0), this.createNativeGridAd()
			}, i.hideInterstitial = function () {
				this.insterstitialAd, this.nativeGridAd && this.nativeGridAd.hide()
			}, i.createGridAd = function () {
				this.gridAd && this.gridAd.destroy();
				var e = this.info.windowWidth - 100,
					t = this.info.windowWidth / 2 - e / 2,
					o = this.info.windowHeight / 2 - e / 2;
				this.gridAd = this.env.createGridAd({
					adUnitId: lplatform.cparam.gridID,
					adIntervals: 30,
					gridCount: 5,
					style: {
						left: t,
						top: o,
						width: e,
						opacity: .8
					}
				}), this.gridAd.show()
			}, i.showGridAd = function () {
				this.gridAd ? this.gridAd.show() : this.createGridAd()
			}, i.createNativeGridAd = function () {
				this.nativeGridAd && this.nativeGridAd.destroy();
				var e = this.info.windowWidth,
					t = this.info.windowWidth / 2 - e / 2;
				this.nativeGridAd = wx.createCustomAd({
					adUnitId: lplatform.cparam.nativeID,
					style: {
						left: t,
						top: 0,
						width: e,
						fixed: !0
					}
				}), this.nativeGridAd.show()
			}, i.showNativeGridAd = function () {
				this.nativeGridAd ? this.nativeGridAd.show() : this.createNativeGridAd()
			}, i.createGameClub = function () {
				this.env.createGameClubButton({
					icon: "green",
					style: {
						left: lplatform.cparam.gameClubLeft * lplatform.systemInfo.windowWidth,
						top: lplatform.cparam.gameClubTop * lplatform.systemInfo.windowHeight,
						width: 40,
						height: 40
					}
				})
			}, i.showShareMenu = function () {
				"function" == typeof this.env.showShareMenu && this.env.showShareMenu({
					withShareTicket: !0,
					menus: ["shareAppMessage", "shareTimeline"]
				}), this.env.onShareAppMessage(function () {
					return {
						title: lplatform.cparam.shareAppTitle,
						imageUrl: lplatform.uiEngine.getCanvas().toTempFilePathSync({
							destWidth: 500,
							destHeight: 400
						})
					}
				})
			}, i.shareAppMessage = function () {
				this.env.shareAppMessage({
					title: lplatform.cparam.shareAppTitle
				})
			}, i.navigateToMiniProgram = function () { }, i.shareMessageToFriend = function () { }, i.showFavoriteGuide = function () {
				console.log("\u5fae\u4fe1\u672a\u5b9e\u73b0showFavoriteGuide")
			}, i.subscribeAppMsg = function () {
				this.env.subscribeAppMsg({
					tmplIds: lplatform.cparam.tmplIds,
					subscribe: !0,
					success: function (e) {
						console.log("----subscribeAppMsg----success", e)
					},
					fail: function (e) {
						console.log("----subscribeAppMsg----fail", e)
					}
				})
			}, i.sendMsgToOpenDataProject = function (e) {
				this.logined ? this.env.getOpenDataContext().postMessage(e) : this.checkLogin()
			}, i.setUserCloudStorage = function (e) {
				this.sendMsgToOpenDataProject({
					name: "setUserCloudStorage",
					kvdata: e
				})
			}, i.canRecord = function () {
				return !(!this.gameRecorderManager || !this.gameRecorderManager.isFrameSupported()) || (console.log("\u4e0d\u652f\u6301\u5f55\u5236\u6e38\u620f\u753b\u9762"), !1)
			}, i.startRecord = function (e) {
				if (this.canRecord()) {
					lplatform.plog("startRecord"), this.recordStartCb = e, this.videoPath = null, this.gameRecorderManager.start({
						fps: 24,
						bitrate: 1e3,
						hookBgm: !1,
						duration: 30
					}), this.gameRecorderManager.on("start", this.onGameRecordStart.bind(this)), this.gameRecorderManager.on("error", this.onGameRecordError.bind(this)), this.gameRecorderManager.on("stop", this.onGameRecordStop.bind(this));
					var t = this;
					this.env.onShow(function () {
						lplatform.plog("startRecord this.env.onShow"), t.resumeRecord()
					}), this.env.onHide(function () {
						lplatform.plog("startRecord this.env.onHide"), t.pauseRecord()
					})
				}
			}, i.onGameRecordStart = function () {
				this.gameRecordStartTime = Date.now(), this.recordStartCb && (this.recordStartCb(), this.recordStartCb = null)
			}, i.onGameRecordError = function (e) {
				lplatform.plog("onGameRecordError:" + JSON.stringify(e), "error")
			}, i.onGameRecordStop = function () {
				lplatform.plog("onGameRecordStop this.recordStopCb:" + this.recordStopCb), this.gameRecordStopTime = Date.now(), this.gameRecordStopTime - this.gameRecordStartTime > 4500 ? this.videoPath = "res.videoPath" : lplatform.plog("onGameRecordStop \u5b9e\u9645\u5f55\u5c4f\u65f6\u95f4\u5c11\u4e8e5\u79d2\u5c31\u6709\u53ef\u80fd\u5206\u4eab\u5931\u8d25"), this.recordStopCb && (this.recordStopCb(this.videoPath), this.recordStopCb = null)
			}, i.pauseRecord = function () {
				this.gameRecorderManager.pause()
			}, i.resumeRecord = function () {
				this.gameRecorderManager.resume()
			}, i.stopRecord = function (e) {
				this.canRecord() && (lplatform.plog("stopRecord cb:" + e), this.recordStopCb = e, this.gameRecorderManager.stop())
			}, i.shareRecord = function () {
				this.shareAppMessage(null)
			}, i.resetRecord = function () {
				this.stopRecord(), this.videoPath = null
			}, i.shareInnerRecord = function () { }, i.makeShareUI = function (e, t, o, n, a) {
				if (void 0 === n && (n = 0), void 0 === a && (a = !1), lplatform.uiEngine.CreateShareK(function () {
					this.shareRecord(e, t)
				}.bind(this), function () {
					t && t(), this.gameRecordShareBtn && this.gameRecordShareBtn.hide()
				}.bind(this), o, n, a), !this.gameRecordShareBtn) {
					this.gameRecordShareBtn = this.env.createGameRecorderShareButton({
						style: {
							left: lplatform.cparam.shareRecordBtnLeft * lplatform.systemInfo.windowWidth - lplatform.systemInfo.windowWidth / 3.5,
							top: lplatform.cparam.shareRecordBtnTop * lplatform.systemInfo.windowHeight - lplatform.cparam.shareRecordBtnHeight / 2,
							height: lplatform.cparam.shareRecordBtnHeight,
							color: "#ffffff",
							textAlign: "center",
							fontSize: 16,
							borderRadius: 4,
							iconMarginRight: 16,
							paddingLeft: 1,
							paddingRight: 30
						},
						text: "\u5206\u4eab\u4f60\u7684\u795e\u64cd\u4f5c",
						share: {
							query: "a=1&b=2",
							bgm: "bgm.mp3",
							timeRange: [
								[0, 3e4]
							]
						}
					});
					var i = this;
					this.gameRecordShareBtn.onTap(function (e) {
						console.error(JSON.stringify(e)), lplatform.uiEngine.closeToYou(), i.gameRecordShareBtn.hide()
					})
				}
				lplatform.cparam.showVideoShareBtn ? this.gameRecordShareBtn.show() : this.gameRecordShareBtn.hide()
			}, i.showBanner = function () {
				this.hideBanner(), lplatform.labData.mainSwitch && (Math.random() <= lplatform.cparam.moreGameBannerPercent ? this.createMoreGameBanner() : this.bannerAd ? this.bannerAd.show().then(function () { }).catch(function (e) {
					lplatform.plog(e)
				}) : this.loadBanner(!0))
			}, i.createMoreGameBanner = function () {
				if ("function" == typeof this.env.createGameBanner) {
					var e = Math.floor(Math.random() * lplatform.cparam.moreGameBannerAppId.length),
						t = lplatform.cparam.moreGameBannerAppId[e];
					this.btop = 0, lplatform.cparam.bannerOnBottom && (this.btop = this.info.windowHeight - 104), this.moreGameBanner && this.moreGameBanner.destroy(), this.moreGameBanner = this.env.createGameBanner({
						adUnitId: t,
						style: {
							left: (this.info.windowWidth - 300) / 2,
							top: this.btop
						}
					}), this.moreGameBanner.show()
				}
			}, i.createMoreGamePortal = function (e, t) {
				void 0 === e && (e = !1), void 0 === t && (t = !1)
			}, i.goToGameOrGameList = function () {
				this.createMoreGamePortal(!0, !0)
			}, i.httpRequest = function (e, t, o, n, a, i, r) {
				this.env.request({
					url: e,
					data: a,
					header: i,
					timeout: o,
					method: n,
					dataType: r,
					success: function (e) {
						t(null, e.data, e.data)
					},
					fail: function (e) {
						t(e, null, null)
					}
				})
			}, n
		}(((n = e("./PTT")) && n.__esModule ? n : {
			default: n
		}).default);
		o.default = i, t.exports = o.default, cc._RF.pop()
	}, {
		"./PTT": "PTT"
	}],
	Params: [function (e, t, o) {
		"use strict";
		var n;
		cc._RF.push(t, "6ef35KKigpOB4NmE8DbjhiF", "Params"), o.__esModule = !0, o.default = void 0;
		var a = {
			tdappid: "09CC7809F76E43F792CF421D91D2E1A1",
			AreaUrl: "",
			llabHost: "",
			llabName: "CaiHongFangKuaiXiao",
			web: {
				showLog: !0
			},
			oppo: {
				appName: "\u5f69\u8679\u65b9\u5757\u6d88",
				llabVer: "100",
				packageName: "com.twgame.chfkx.nearme.gamecenter",
				bannerID: "670827",
				nativeTemplateID: "670830",
				rewardedVideoID: "670823",
				nativeID: ["670826", "670828", "670829"],
				spreadBoxID: ["670825"],
				moreGameBannerId: "670824",
				useNativeAd: !0,
				showLog: !0,
				bannerWidth: 1080,
				bannerHeight: 300,
				nativeInterstitialLeft: 0,
				nativeInterstitialTop: 0,
				nativeInterstitialWidth: 600,
				nativeInterstitialHeight: 200,
				bannerOnBottom: !0,
				canRecord: !1,
				closeBtnScale: 1,
				moreGameBannerPercent: 0,
				moreGamePortalPercent: 0,
				canShareReward: !1,
				moreGameBannerWidth: 720,
				moreGameBannerHeight: 260
			},
			vivo: {
				appName: "\u5f69\u8679\u65b9\u5757\u6d88",
				llabVer: "100",
				package: "com.twgame.chfkx.vivominigame",
				bannerID: "cbb6758f159e4542b484393f1d1b81fc",
				interstitialID: "df57d31e2eb449c898f3e4b7a5cdcc24",
				rewardedVideoID: "b33d72bdb94b43b59eb769584e387536",
				nativeID: ["de2adae36df94361bb248d84d047be48"],
				spreadBoxID: ["9821d4362b0348278533840099c62113"],
				moreGameBannerId: "",
				showLog: !0,
				bannerWidth: 1080,
				bannerHeight: 0,
				bannerOnBottom: !0,
				canRecord: !1,
				closeBtnScale: 1,
				moreGameBannerPercent: 0,
				moreGamePortalPercent: 0,
				moreGameBannerWidth: 720,
				moreGameBannerHeight: 0,
				moreGamePortalIconUrl: null,
				moreGamePortalMarginTop: 100,
				needPushPrivacy: !0
			},
			wx: {
				llabVer: "103",
				bannerID: "",
				interstitialID: "",
				rewardedVideoID: "",
				nativeID: "",
				useNativeAd: !1,
				showLog: !0,
				bannerOnBottom: !0,
				gameClubLeft: .85,
				gameClubTop: .12,
				shareRecordBtnHeight: 50,
				shareRecordBtnLeft: .5,
				shareRecordBtnTop: .695,
				shareAppTitle: "",
				showVideoShareBtn: !1,
				moreGameBannerAppId: ["wx5ef5327220364198"],
				moreGameBannerPercent: 0,
				moreGamePortalAppId: ["wx5ef5327220364198"],
				moreGamePortalPercent: 0,
				canShareReward: !1,
				needPushPrivacy: !1
			},
			qq: {
				appid: "1112144849",
				llabVer: "111",
				bannerID: "2a739ffe46554d06b4f3c520d65eeea4",
				interstitialID: "4f3c877c3954e216de769d4ad6a587a2",
				rewardedVideoID: "4053940546efa98136bde8de1cc9e805",
				nativeID: "",
				useNativeAd: !1,
				showLog: !0,
				bannerOnBottom: !0,
				gameClubLeft: .85,
				gameClubTop: .12,
				shareRecordBtnHeight: 50,
				shareRecordBtnLeft: .5,
				shareRecordBtnTop: .695,
				shareAppTitle: "\u8981\u5f00\u5c0f\u8f66\u8f66",
				showVideoShareBtn: !1,
				moreGameBannerAppId: ["68e41ac54765cc61920556694be7c558"],
				moreGameBannerPercent: 0,
				moreGamePortalAppId: ["71d86d1ee2b922f08094997f85d9d6f6"],
				moreGamePortalPercent: 0,
				shareAppImgUrl: "",
				startVideoSceneID: ["2054", "1001", "1037", "3001", "3002", "3003", "1023", "3026"],
				mmgPos: [{
					x: .1,
					y: .35
				}],
				mmgSize: [3],
				mmgOrientation: ["vertical"],
				mmgId: [""],
				tmplIds: [""],
				canShareReward: !0,
				needPushPrivacy: !1
			},
			tt: {
				llabVer: "100",
				ttID: "ttd6a4a019499ab35e02",
				bannerID: "2fbmlobn7j519ai6il",
				interstitialID: "1ycujxjjw72pg8tead",
				rewardedVideoID: "16h427j12h7jf283i4",
				shareID: "",
				videoTopics: ["\u6d88\u6d88\u4e50\u5f00\u6000", "\u4fc4\u7f57\u65af\u6d88\u9664", "\u65b9\u5757", "\u5b9d\u77f3"],
				useNativeAd: !1,
				showLog: !0,
				bannerHeight: 70,
				bannerOnBottom: !0,
				followBtnLeft: 0,
				followBtnTop: .15,
				moreGameLeft: 0,
				moreGameTop: .23,
				moreGameBannerAppId: ["tt026c74d19d551c7502"],
				moreGameBannerAutoCloseTime: 0,
				moreGameBannerPercent: 0,
				moreGamePortalPercent: 0,
				canShareReward: !0,
				needPushPrivacy: !1
			},
			huawei: (n = {
				llabVer: "100",
				bannerID: "j1pcnpx5tu",
				interstitialID: "testb4znbuh3n2",
				rewardedVideoID: "u2k89ub7vq",
				nativeID: ["u7m3hc4gvm"],
				spreadBoxID: [""],
				shareAppTitle: "\u8111\u6d1e\u8001\u53f8\u673a\u53d1\u8f66\u4e86",
				shareAppImgUrl: "",
				useNativeAd: !0,
				showLog: !0,
				bannerOnBottom: !0,
				closeBtnScale: 1,
				moreGameBannerPercent: 0,
				moreGamePortalPercent: 0,
				bannerWidth: 360,
				bannerHeight: 57,
				nativeInterstitialWidth: 600,
				nativeInterstitialHeight: 372,
				canRecord: !1
			}, n.closeBtnScale = 1, n.moreGameBannerPercent = 0, n.moreGamePortalPercent = 0, n.canShareReward = !0, n.needPushPrivacy = !0, n),
			baidu: {
				llabVer: "100",
				bannerOnBottom: !0,
				appSid: "b8553a99",
				bannerID: "7586383",
				interstitialID: "",
				rewardedVideoID: "7586384",
				moreGameLeft: .85,
				moreGameTop: .12,
				bannerHeight: 100,
				shareAppImgUrl: "",
				showLog: !0,
				canRecord: !1,
				moreGameBannerPercent: 0,
				moreGamePortalPercent: 0,
				navigateToId: ["WP08D3oQRkDHAGlycfiejknIAQA1uopf"],
				canShareReward: !0,
				needPushPrivacy: !0
			},
			native: {
				llabVer: "100",
				bannerOnBottom: !0,
				showLog: !0,
				moreGameBannerPercent: 0,
				moreGamePortalPercent: 0,
				canShareReward: !1
			},
			gb4399: {
				llabVer: "100",
				bannerID: "noNeed",
				interstitialID: "noNeed",
				rewardedVideoID: "noNeed",
				nativeID: "noNeed",
				useNativeAd: !1,
				showLog: !0,
				bannerOnBottom: !0,
				gameClubLeft: 0,
				gameClubTop: .23,
				shareRecordBtnHeight: 50,
				shareRecordBtnLeft: .5,
				shareRecordBtnTop: .695,
				shareAppTitle: "\u8111\u6d1e\u8001\u53f8\u673a\u53d1\u8f66\u4e86",
				showVideoShareBtn: !1,
				moreGameBannerAppId: ["noNeed"],
				moreGameBannerPercent: 0,
				moreGamePortalAppId: ["noNeed"],
				moreGamePortalPercent: 0,
				canShareReward: !1,
				needPushPrivacy: !0
			},
			h54399: {
				llabVer: "noNeed",
				bannerID: "noNeed",
				interstitialID: "noNeed",
				rewardedVideoID: "noNeed",
				nativeID: "noNeed",
				useNativeAd: !1,
				showLog: !0,
				bannerOnBottom: !0,
				gameClubLeft: 0,
				gameClubTop: .23,
				shareRecordBtnHeight: 50,
				shareRecordBtnLeft: .5,
				shareRecordBtnTop: .695,
				shareAppTitle: "\u8111\u6d1e\u8001\u53f8\u673a\u53d1\u8f66\u4e86",
				showVideoShareBtn: !1,
				moreGameBannerAppId: ["noNeed"],
				moreGameBannerPercent: 0,
				moreGamePortalAppId: ["noNeed"],
				moreGamePortalPercent: 0,
				canShareReward: !1,
				needPushPrivacy: !0
			},
			ks: {
				llabVer: "100",
				bannerID: "",
				interstitialID: "2300002190_02",
				rewardedVideoID: "2300002190_01",
				shareID: "",
				videoTopics: [""],
				useNativeAd: !1,
				showLog: !0,
				bannerHeight: 70,
				bannerOnBottom: !0,
				followBtnLeft: 0,
				followBtnTop: .15,
				moreGameLeft: -1,
				moreGameTop: .23,
				moreGameBannerAppId: [""],
				moreGameBannerAutoCloseTime: 0,
				moreGameBannerPercent: 0,
				moreGamePortalPercent: 0,
				canShareReward: !0,
				needPushPrivacy: !1
			},
			uc: {
				llabVer: "100",
				bannerID: "noNeed",
				interstitialID: "noNeed",
				rewardedVideoID: "noNeed",
				nativeID: "noNeed",
				showLog: !0,
				bannerWidth: 1080,
				bannerHeight: 200,
				needPushPrivacy: !0
			},
			loadLLabTryCount: 3,
			randVideoLoopCountMax: 0,
			randVideoLoopCount: 0,
			bannerWidth: 640,
			defBannerMoveDelay: 1200,
			defInterstitialDelay: 1200,
			usrClickDelay: 1200,
			autoShareOnLttrStop: !1,
			autoStartOnLttrClose: !1,
			followBtnLeft: 0,
			followBtnTop: 0,
			showRecordBtn: !1,
			uiGroupIndex: 0,
			uiGroup: "default"
		};
		o.default = a, t.exports = o.default, cc._RF.pop()
	}, {}],
	PlatformA: [function (e, t, o) {
		"use strict";
		cc._RF.push(t, "4c69551bKhIqb8Ybwu0g5ZA", "PlatformA"), o.__esModule = !0, o.default = void 0;
		var n = v(e("Params")),
			a = v(e("PDef")),
			i = v(e("PTT")),
			r = v(e("CCEngine")),
			s = v(e("LayaEngine")),
			c = v(e("PWX")),
			l = v(e("PQQ")),
			d = v(e("PBaiDu")),
			h = v(e("POppo")),
			u = v(e("PVivo")),
			m = v(e("PHuaWei")),
			f = v(e("PNative")),
			p = v(e("PGameBox4399")),
			g = v(e("PKuaiShou")),
			w = v(e("PH54399")),
			b = v(e("PUC"));

		function v(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		window.CHANNEL = {
			web: "web",
			oppo: "Oppo",
			vivo: "vivoGame",
			tt: "TT",
			qq: "qq",
			w4399: "h54399",
			uc: "uc",
			android: "Android",
			android233: "Android233",
			ios: "iOS",
			miniGame: "MiniGame"
		};
		var A = "PlatForm===>>>",
			S = function () {
				function e() {
					this.androidChannel = "233", this.channel = CHANNEL.web, this.engine = "egret", this.label = null, this.area = null, this.platform = new a.default, this.wx = null, this.systemInfo = {
						appName: "Platform.systemInfo default",
						windowWidth: 720,
						windowHeight: 1280,
						platform: window.cc ? "creator" : window.Laya || window.laya ? "laya" : "none"
					}, this.llaburl = null, this.myLocation = null, this.params = n.default, this.cparam = n.default.web, this.labData = {}, this.initChannelTimeout = null, window.lplatform = this, lplatform.plog("plog open"), this.checkEngine(), this.checkChannel(), this.gameStartMS = Date.now(), this.adSecondMax = 90, this.adSecondNow = this.adSecondMax, this.outRewardVideoCb = null, this.resetInterstitialPer60Second()
				}
				var t = e.prototype;
				return t.checkSystemInfoAndAppName = function (e) {
					this.wx = e, this.wx && "function" == typeof this.wx.getSystemInfoSync && (this.systemInfo = this.wx.getSystemInfoSync()), this.wx && "function" == typeof this.wx.getLaunchOptionsSync && (this.launchOptions = this.wx.getLaunchOptionsSync())
				}, t.checkEngine = function () {
					window.cc && window.cc.director ? (this.engine = "cc", this.uiEngine = new r.default) : (window.Laya || window.laya) && (this.engine = "laya", this.uiEngine = new s.default)
				}, t.checkChannel = function () {
					if (window.tt) this.checkSystemInfoAndAppName(window.tt), this.channel = "TT", this.cparam = n.default.tt;
					else if (window.qg) {
						this.checkSystemInfoAndAppName(window.qg);
						var e = this.wx.getSystemInfoSync().brand;
						e && (e = e.toLowerCase(), this.channel = "Oppo", this.cparam = n.default.oppo, e.indexOf("oppo") >= 0 || e.indexOf("OPPO") >= 0 || e.indexOf("Oppo") >= 0 || e.indexOf("REALME") >= 0 || e.indexOf("Realme") >= 0 ? (this.channel = "Oppo", this.cparam = n.default.oppo) : e.indexOf("vivo") >= 0 || e.indexOf("Vivo") >= 0 || e.indexOf("VIVO") >= 0 || e.indexOf("iqoo") >= 0 || e.indexOf("IQOO") >= 0 ? (this.channel = "vivoGame", this.cparam = n.default.vivo) : (e.indexOf("huawei") >= 0 || e.indexOf("honor") >= 0 || e.indexOf("Huawei") >= 0 || e.indexOf("HuaWei") >= 0 || e.indexOf("HONOR") >= 0) && (this.channel = "huaWei", this.cparam = n.default.huawei))
					} else window.swan ? (this.checkSystemInfoAndAppName(window.swan), this.channel = "BaiDu", this.cparam = n.default.baidu) : window.qq ? (this.checkSystemInfoAndAppName(window.qq), this.channel = "qq", this.cparam = n.default.qq) : window.hasOwnProperty("gamebox") ? (this.checkSystemInfoAndAppName(window.gamebox), this.channel = "gb4399", this.cparam = n.default.gb4399) : window.h5api ? (this.checkSystemInfoAndAppName(window.h5api), this.channel = "h54399", this.cparam = n.default.h54399) : window.ks || window.kwaigame ? (this.checkSystemInfoAndAppName(window.ks), this.channel = "ks", this.cparam = n.default.ks) : "undefined" != typeof uc ? (this.checkSystemInfoAndAppName(uc), this.channel = "uc", this.cparam = n.default.uc) : window.wx ? (this.checkSystemInfoAndAppName(window.wx), this.channel = "wx", this.cparam = n.default.wx) : "cc" == this.engine || "laya" == this.engine && (Laya.Browser.onAndroid ? (this.channel = "Android", this.cparam = n.default.native) : Laya.Browser.onIOS && (this.channel = "iOS", this.cparam = n.default.native));
					"web" == this.channel && (window.android ? (this.channel = "Android", this.cparam = n.default.native) : window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.jsToOcWithPrams && window.webkit.messageHandlers.jsToOcWithPrams.postMessage ? (window.ios = {}, this.channel = "iOS", this.cparam = n.default.native) : window.minigame && (this.channel = "MiniGame")), this.channel == CHANNEL.android && (this.channel += this.androidChannel), lplatform.plog("checkChannel:" + this.channel)
				}, t.initChannel = function () {
					this.platform && (this.platform.release(), this.platform = null), "TT" == this.channel ? this.platform = new i.default : "gb4399" == this.channel ? this.platform = new p.default : "h54399" == this.channel ? this.platform = new w.default : "ks" == this.channel ? this.platform = new g.default : "wx" == this.channel ? this.platform = new c.default : "qq" == this.channel ? this.platform = new l.default : "BaiDu" == this.channel ? this.platform = new d.default : "Oppo" == this.channel ? this.platform = new h.default : "vivoGame" == this.channel ? this.platform = new u.default : "huaWei" == this.channel ? this.platform = new m.default : "uc" == this.channel ? this.platform = new b.default : "web" == this.channel ? this.platform = new a.default : "Android" == this.channel || this.channel == CHANNEL.android233 ? this.platform = new f.default : "cc" == this.engine ? (console.log("cocos web\u5185\u5d4c"), this.platform = new f.default) : "laya" == this.engine && (Laya.Browser.onAndroid ? this.platform = new f.default : Laya.Browser.onIOS ? this.platform = new f.default : (console.log("\u4f7f\u7528laya web\u5185\u5d4c"), this.platform = new f.default))
				}, t.getArea = function () {
					var e = this;
					this.plog(A, "getArea", n.default.AreaUrl), "" != n.default.AreaUrl && this.httpRequest(n.default.AreaUrl, function (t, o, n) {
						if (t) lplatform.plog("getArea res:" + t);
						else {
							var a = e.channel == CHANNEL.qq ? n : JSON.parse(n);
							a && (e.myLocation = a.cityCode + "," + a.proCode), lplatform.plog("getArea this.myLocation:" + e.myLocation)
						}
						e.getLabel()
					})
				}, t.getLabel = function () {
					var e = this,
						t = n.default.llabHost + n.default.llabName + "/lab" + this.channel + this.cparam.llabVer + ".json";
					lplatform.plog("getLabel llaburl:" + t), this.httpRequest(t, function (t, o, n) {
						if (t) lplatform.plog("getLabel error:" + JSON.stringify(t));
						else {
							var a = e.channel == CHANNEL.qq ? n : JSON.parse(n);
							e.labData = a || {}, lplatform.plog("getLabel this.labData:" + JSON.stringify(e.labData))
						}
						e.initChannelTimeout && clearTimeout(e.initChannelTimeout), e.startLabWhenGet(), e.platform.initAD(), e.ipReg()
					})
				}, t.startLabWhenGet = function () {
					if (this.labData) {
						var e = !1;
						if (this.labData.locationList || this.labData.province) {
							this.labData.locationList = this.labData.province;
							for (var t = 0; t < this.labData.locationList.length; t++)
								if (this.myLocation && this.myLocation.indexOf(this.labData.locationList[t]) >= 0) {
									e = !0;
									break
								}
						}
						e && (this.labData = {});
						var o = new Date,
							n = o.getHours(),
							a = o.getMinutes();
						if (this.labData.time) {
							var i = !1;
							for (var r in this.labData.time) {
								var s = this.labData.time[r][0].split(":"),
									c = this.labData.time[r][1].split(":");
								if (n >= s[0] && n < c[0] && a >= s[1]) {
									i = !0;
									break
								}
								if (n >= s[0] && n == c[0] && a >= s[1] && a < c[1]) {
									i = !0;
									break
								}
							}
							i || (this.labData = {})
						}
						if (this.labData.mainSwitch || (this.labData = {}), this.labData.openVideo && 1 == this.labData.openVideo)
							if (this.channel == CHANNEL.uc) this.showRewardedVideo();
							else if (this.channel == CHANNEL.qq)
								for (var l = 0; l < this.cparam.startVideoSceneID.length; l++)
									if (this.launchOptions.scene == this.cparam.startVideoSceneID[l]) {
										console.log("scene hit startVideo"), this.showRewardedVideo();
										break
									} if (this.labData.lockLocation) e && this.startLabWhenGet();
						else
							for (var d in this.labData.openIntervalBanner && setInterval(function () {
								this.showBanner()
							}.bind(this), 1e3 * openIntervalBanner), this.labData.openIntervalInterstitial && setInterval(function () {
								this.showInterstitial()
							}.bind(this), 1e3 * openIntervalInterstitial), this.labData.openIntervalVideo && setInterval(function () {
								this.showRewardedVideo()
							}.bind(this), 1e3 * openIntervalVideo), this.labData) void 0 !== lplatform.cparam[d] && (this.labData[d] || 0 == this.labData[d]) && (lplatform.cparam[d] = this.labData[d]);
						if (null != this.labData.pushDelay && (window.PUSH_TIME_DELAY = this.labData.pushDelay), null != this.labData.pushDelay_zjd && (window.PUSH_ZJD_TIME_INTERVAL = this.labData.pushDelay_zjd), null != this.labData.pushTime_zjd && (window.PUSH_ZJD_TIME = this.labData.pushTime_zjd), this.channel == CHANNEL.qq) {
							var h = this.launchOptions.scene;
							if (console.log(A, "Scene" + h), null != this.labData.zjd_AD_Progress && (window.ZJD_AD_PROGRESS = this.labData.zjd_AD_Progress), null != this.labData.scene_zjd && null != this.labData.openZjd && 1 == this.labData.openZjd)
								for (var u = 0; u < this.labData.scene_zjd.length; u++)
									if (this.launchOptions.scene == this.labData.scene_zjd[u]) {
										console.log("sceneID hit zjd");
										break
									}
						}
						this.resetTimeVideoAd()
					}
					lplatform.plog("Over---labData:" + JSON.stringify(this.labData))
				}, t.httpRequest = function (e, t, o, n, a, i, r) {
					if (void 0 === o && (o = 3e3), "function" == typeof this.platform.httpRequest) this.platform.httpRequest(e, t, o, n, a, i, r);
					else {
						var s = new XMLHttpRequest;
						s.timeout = o, s.onreadystatechange = function () {
							4 == s.readyState && (s.status >= 200 && s.status < 400 ? t(null, s.response, s.responseText) : t(s.status, null, null))
						}, s.open(n || "GET", e, !0), s.send(a)
					}
				}, t.native2JsEvent = function (e) {
					lplatform.plog("native2JsEvent str:" + e + " window.vcb:" + window.vcb), "playADSuccess" == e ? (window.vcb && (window.vcb(!0), window.vcb = null), lplatform.resumeGame()) : "playADFailed" == e && (window.vcb && (window.vcb(!1), window.vcb = null), lplatform.resumeGame())
				}, t.js2NativeEvent = function (e) {
					console.log(A, "js2NativeEvent", e);
					var t = !0;
					return window.android ? (console.log(A, "is Have window.android"), window.android.js2NativeEvent(e)) : window.ios ? window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.jsToOcWithPrams && window.webkit.messageHandlers.jsToOcWithPrams.postMessage ? window.webkit.messageHandlers.jsToOcWithPrams.postMessage({
						params: e
					}) : console.error(this.engine + "ios\u5fae\u7aef \u672a\u5b9e\u73b0webkit.messageHandlers\u4ee5\u5916\uff0c\u5176\u4ed6\u7684js-\u539f\u751f\u901a\u4fe1\u65b9\u5f0f") : "cc" == this.engine ? (Tools.Log("CC_JSB or jsb.reflection is undefined"), t = !1) : "laya" == this.engine ? window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.jsToOcWithPrams && window.webkit.messageHandlers.jsToOcWithPrams.postMessage ? window.webkit.messageHandlers.jsToOcWithPrams.postMessage({
						params: e
					}) : console.error(this.engine + " \u672a\u5b9e\u73b0webkit.messageHandlers\u4ee5\u5916\uff0c\u5176\u4ed6\u7684js-\u539f\u751f\u901a\u4fe1\u65b9\u5f0f") : console.error(this.engine + " \u672a\u5b9e\u73b0js2NativeEvent"), t
				}, t.pauseGame = function () {
					window.cc ? (cc.audioEngine.pauseAll(), cc.director.pause()) : window.Laya && (Laya.SoundManager.setMusicVolume(0), Laya.SoundManager.setSoundVolume(0))
				}, t.resumeGame = function () {
					window.cc ? (cc.audioEngine.resumeAll(), cc.director.resume()) : window.Laya && (Laya.SoundManager.setMusicVolume(1), Laya.SoundManager.setSoundVolume(1))
				}, t.analytics = function (e, t) {
					this.platform.analytics(e, t), this.engine
				}, t.showFavoriteGuide = function () {
					this.platform.showFavoriteGuide()
				}, t.showBanner = function () {
					this.platform.showBanner()
				}, t.showDelayBanner = function (e) {
					return e = e || 2e3, setTimeout(function () {
						this.showBanner()
					}.bind(this), e)
				}, t.hideBanner = function () {
					this.platform.hideBanner()
				}, t.showInterstitial = function () {
					this.resetInterstitialPer60Second(), this.platform.showInterstitial()
				}, t.showDelayInterstitial = function (e) {
					return e = e || 2e3, setTimeout(function () {
						this.showInterstitial()
					}.bind(this), e)
				}, t.showInterstitialPer60Second = function () {
					this.canShowInterstitial60Second && this.showInterstitial()
				}, t.showDelayInterstitialPer60Second = function (e) {
					return this.canShowInterstitial60Second ? this.showDelayInterstitial(e) : null
				}, t.resetInterstitialPer60Second = function (e) {
					var t = this;
					void 0 === e && (e = 10), this.canShowInterstitial60Second = !1, this.interstitial60Timeout && (clearTimeout(this.interstitial60Timeout), this.interstitial60Timeout = null), this.interstitial60Timeout = setTimeout(function () {
						t.canShowInterstitial60Second = !0
					}, 1e3 * e)
				}, t.hideInterstitial = function () {
					this.platform.hideInterstitial()
				}, t.showInterstitialVideo = function () {
					this.channel == CHANNEL.android233 && this.platform.showInterstitialVideo()
				}, t.showRanRewardedVideo = function (e, t) {
					if (this.plog(A, "showRanRewardedVideo", this.labData.playVideo), null != this.labData.playVideo) {
						var o = Math.random();
						console.log("ran=" + o), o < this.labData.playVideo ? this.showRewardedVideo(e) : e && e()
					} else this.showRewardedVideo(e, t)
				}, t.showRewardedVideo = function (e, t) {
					var o = this;
					this.plog(A, "showRewardedVideo"), this.platform.showRewardedVideo(function (n) {
						o.plog(A, "Video Close", n ? "finish" : "no-finish "), n ? (e && e(), o.resetTimeVideoAd()) : t && t()
					})
				}, t.hideRewardedVideo = function () {
					this.platform.hideRewardedVideo()
				}, t.createMoreGamePortal = function () {
					this.platform.createMoreGamePortal()
				}, t.createMoreGameBanner = function () {
					this.platform.createMoreGameBanner(!0, !0)
				}, t.canRecord = function () {
					return this.platform.canRecord()
				}, t.canShareRecord = function () {
					return this.platform.canShareRecord()
				}, t.makeShareUI = function (e, t, o, n, a) {
					void 0 === n && (n = 0), void 0 === a && (a = !1), this.platform.makeShareUI(e, t, o, n, a)
				}, t.startRecord = function (e) {
					this.platform.startRecord(e)
				}, t.pauseRecord = function () {
					this.platform.pauseRecord()
				}, t.stopRecord = function (e) {
					this.platform.stopRecord(e)
				}, t.shareRecord = function (e, t) {
					this.platform.shareRecord(e, t)
				}, t.resetRecord = function () {
					this.platform.resetRecord()
				}, t.shareInnerRecord = function (e, t) {
					this.platform.shareInnerRecord(e, t)
				}, t.createMoreGameButton = function () {
					this.platform.createMoreGameButton()
				}, t.goToGameOrGameList = function (e) {
					this.platform.goToGameOrGameList(e)
				}, t.followAccount = function () {
					this.platform.followAccount()
				}, t.openAwemeUserProfile = function () {
					this.platform.openAwemeUserProfile()
				}, t.createGameClub = function () {
					this.platform.createGameClub()
				}, t.navigateToMiniProgram = function (e) {
					this.platform.navigateToMiniProgram(e)
				}, t.shareMessageToFriend = function () {
					this.platform.shareMessageToFriend()
				}, t.sendMsgToOpenDataProject = function (e) {
					this.platform.sendMsgToOpenDataProject(e)
				}, t.plog = function () {
					var e;
					this.cparam.showLog && (e = console).log.apply(e, arguments)
				}, t.showLoading = function (e) {
					this.platform.showLoading(e)
				}, t.hideLoading = function () {
					this.platform.hideLoading()
				}, t.pRewradVideoCb = function (e) {
					this.outRewardVideoCb && (this.outRewardVideoCb(e), this.outRewardVideoCb = null), this.resetTimeVideoAd()
				}, t.timeVideoAd = function (e) {
					var t = !1;
					return this.adSecondMax = lplatform.labData.interstitial90RealTime || this.adSecondMax, console.log("timeVideoAd adSecondNow:" + this.adSecondNow + " this.adSecondMax:" + this.adSecondMax), lplatform.labData.interstitial90RealTime && 0 == this.adSecondNow ? (this.resetTimeVideoAd(), "iOS" == lplatform.channel || "Android" == lplatform.channel ? (lplatform.showInterstitial(), e(!1)) : lplatform.showRewardedVideo(e || function () { }.bind(this)), t = !0, lplatform.analytics("timeVideoAd", {})) : e(!1), t
				}, t.resetTimeVideoAd = function () {
					this.adSecondMax = lplatform.labData.interstitial90RealTime || this.adSecondMax, console.log("resetTimeVideoAd adSecondMax:" + this.adSecondMax), this.adSecondNow = this.adSecondMax, this.adTimeout && clearTimeout(this.adTimeout), this.adTimeout = setTimeout(function () {
						this.adSecondNow = 0
					}.bind(this), 1e3 * this.adSecondMax)
				}, t.showRandVideo = function (e, t) {
					this.labData.playVideo && Math.random() <= this.labData.playVideo ? this.showRewardedVideo(function (o) {
						o ? e && e() : t && t()
					}) : t && t()
				}, t.ipReg = function () {
					this.labData.getIP && window.wx && wx.request({
						url: "",
						data: {},
						header: {
							"content-type": "application/json"
						},
						success: function () { },
						fail: function () { }
					})
				}, e
			}();
		o.default = S, t.exports = o.default, cc._RF.pop()
	}, {
		CCEngine: "CCEngine",
		LayaEngine: "LayaEngine",
		PBaiDu: "PBaiDu",
		PDef: "PDef",
		PGameBox4399: "PGameBox4399",
		PH54399: "PH54399",
		PHuaWei: "PHuaWei",
		PKuaiShou: "PKuaiShou",
		PNative: "PNative",
		POppo: "POppo",
		PQQ: "PQQ",
		PTT: "PTT",
		PUC: "PUC",
		PVivo: "PVivo",
		PWX: "PWX",
		Params: "Params"
	}],
	Prefab: [function (e, t) {
		"use strict";
		cc._RF.push(t, "ecdb7ecphdJJY1C8vxcKRPl", "Prefab"), cc.Class({
			extends: cc.Component,
			properties: {
				endWinPrefab: cc.Prefab,
				endLosePrefab: cc.Prefab,
				iceBlock: cc.Prefab,
				newScore: cc.Prefab,
				unbelievable: cc.Prefab,
				boomPrefab: cc.Prefab,
				rainbowPrefab: cc.Prefab
			},
			onLoad: function () {
				!CommonPrefab.endWinPrefab && (CommonPrefab.endWinPrefab = this.endWinPrefab), !CommonPrefab.endLosePrefab && (CommonPrefab.endLosePrefab = this.endLosePrefab), !CommonPrefab.iceBlock && (CommonPrefab.iceBlock = this.iceBlock), !CommonPrefab.newScore && (CommonPrefab.newScore = this.newScore), !CommonPrefab.unbelievable && (CommonPrefab.unbelievable = this.unbelievable), !CommonPrefab.boomPrefab && (CommonPrefab.boomPrefab = this.boomPrefab), !CommonPrefab.rainbowPrefab && (CommonPrefab.rainbowPrefab = this.rainbowPrefab)
			}
		}), cc._RF.pop()
	}, {}],
	Property: [function (e, t, o) {
		"use strict";
		cc._RF.push(t, "0439cNpduRHibS9/0NOMxfG", "Property"), o.__esModule = !0, o.PROP_STATE = void 0, window.MODE = {
			TEACH: "teaching",
			JINGDIAN: "jingdian",
			JIUJIU: "jiujiu",
			JIUGONG: "jiugong",
			JIEMI: "jiemi",
			CHUANGGUAN: "chuangguan",
			STAR: "xiaomiexingxing",
			KILL: "killMonster",
			JIUJIU2: "jiujiu2",
			STAR2: "xiaomiexingxing2"
		}, window.GameMode = MODE.NORMAL, window.BlockConfig = {
			normalWH: 80,
			upH: 150,
			scaleParam: .5,
			blockScale: .9,
			desc: {
				row: "\u6a21\u5f0f\u884c\u6570\u91cf",
				col: "\u6a21\u5f0f\u5217\u6570\u91cf",
				wh: "\u6bcf\u4e2a\u5757\u7684\u5bbd\u9ad8",
				comboStep: "\u8fde\u51fb\u5224\u65ad\u6b65\u6570"
			},
			teaching: {
				row: 8,
				col: 8,
				wh: 80,
				comboStep: 3
			},
			jingdian: {
				row: 8,
				col: 8,
				wh: 80,
				comboStep: 3
			},
			jiujiu: {
				row: 9,
				col: 9,
				wh: 70,
				comboStep: 4
			},
			jiugong: {
				row: 9,
				col: 9,
				wh: 70,
				comboStep: 4
			},
			jiemi: {
				row: 9,
				col: 9,
				wh: 70,
				comboStep: 3
			},
			chuangguan: {
				row: 9,
				col: 9,
				wh: 70,
				comboStep: 3
			},
			jiujiu2: {
				row: 9,
				col: 9,
				wh: 70,
				comboStep: 4
			}
		}, window.ZJD_AD_PROGRESS = .5, window.ZJD_COUNT = 3, window.PUSH_NONE = 10, window.PUSH_NONE_CLOSE = 3, window.PUSH_TIME = 30, window.PUSH_NOT_PUT = 0, window.PUSH_TIME_DELAY = 10, window.PUSH_ZJD_TIME_INTERVAL = 20, window.PUSH_ZJD_TIME = 31, window.LINE_SCORE = [10, 20, 60, 120, 200, 600], window.XC_DELAY_TIME = .05, window.GRAY_DELAY_TIME = .04, window.RESUME_BLOCK_ARR = [0, 0, 0], window.REBORN_TIME = 7, window.CHANGE_SCORE = 100, window.CHANGE_TIME = .032, window.BOARD_CLEAN_ANI_SCORE = 300, window.DELAY_TIME = {
			combo: .5,
			flatter: 1.5,
			clean: 2,
			score: 2.1
		}, window.SCREEN_OFFSET = 3, o.PROP_STATE = {
			NORMAL: 0,
			SELECT_BOMB: 1,
			SELECT_RAINBOW: 2
		}, window.TEACHING = {
			BLOCK: [6, 5, 13],
			BLOCK_COLOR: [6, 6, 2],
			BOARD: [
				[2, 4, 5, 6, 10, 12, 13, 14, 18, 20, 21, 22, 26, 28, 29, 30, 35, 39, 42, 44, 45, 46, 50, 52, 53, 54, 58, 60, 61, 62],
				[11, 17, 18, 20, 21, 22, 23, 24, 25, 26, 28, 29, 30, 31, 32, 33, 34, 36, 37, 38, 39, 40, 49, 50, 43, 52, 53, 54, 55, 56],
				[4, 5, 12, 13, 20, 21, 25, 26, 27, 30, 31, 32, 33, 34, 35, 38, 39, 40, 44, 45, 52, 53, 60, 61]
			],
			COLOR: [
				[-1, 0, 0, 0, -1, 6, 6, 6, -1, 1, 1, 1, -1, 3, 3, 3, -1, -1, -1, 5, 5, 5, -1, 2, 2, 2, -1, 4, 4, 4],
				[-1, 0, 6, 1, 3, 5, 2, 4, 0, 6, 1, 3, 5, 2, 4, 0, 6, 1, 3, 5, 2, 4, -1, -1, -1, -1, -1, -1, -1, -1],
				[0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0]
			]
		}, window.BLOCK_WEIGHT_SCORE = [500, 1e3], window.BlockWeight = {
			teaching: [
				[10, 0, 10, 0, 0, 10, 10, 0, 0, 0, 0, 0, 0, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[10, 0, 10, 0, 0, 10, 10, 1, 1, 1, 1, 0, 0, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[10, 0, 10, 0, 0, 10, 10, 1, 1, 1, 1, 0, 0, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 5, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			],
			jingdian: [
				[10, 0, 10, 0, 0, 10, 10, 0, 0, 0, 0, 0, 0, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[10, 10, 10, 0, 0, 10, 10, 1, 1, 1, 1, 0, 0, 10, 10, 10, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[5, 10, 20, 0, 0, 20, 20, 2, 2, 2, 2, 0, 0, 20, 20, 20, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			],
			jiujiu: [
				[5, 0, 10, 0, 0, 10, 10, 0, 0, 0, 0, 0, 0, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[5, 10, 10, 0, 0, 10, 10, 1, 1, 1, 1, 0, 0, 10, 10, 10, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[5, 10, 20, 0, 0, 20, 20, 2, 2, 2, 2, 0, 0, 20, 20, 20, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]
			],
			jiugong: [
				[5, 0, 10, 0, 0, 10, 10, 0, 0, 0, 0, 0, 0, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[5, 10, 10, 0, 0, 10, 10, 1, 1, 1, 1, 0, 0, 10, 10, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[10, 15, 30, 1, 1, 30, 30, 1, 1, 1, 1, 1, 1, 30, 30, 30, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 30, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			],
			chuangguan: [
				[10, 15, 30, 1, 1, 30, 30, 1, 1, 1, 1, 1, 1, 30, 30, 30, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 30, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[10, 15, 30, 1, 1, 30, 30, 1, 1, 1, 1, 1, 1, 30, 30, 30, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 30, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[10, 15, 30, 1, 1, 30, 30, 1, 1, 1, 1, 1, 1, 30, 30, 30, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 30, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			],
			jiujiu2: [
				[5, 0, 10, 0, 0, 10, 10, 0, 0, 0, 0, 0, 0, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[5, 10, 10, 0, 0, 10, 10, 1, 1, 1, 1, 0, 0, 10, 10, 10, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[5, 10, 20, 0, 0, 20, 20, 2, 2, 2, 2, 0, 0, 20, 20, 20, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]
			]
		}, window.PROP_BOMB = [cc.v2(-1, -1), cc.v2(-1, 0), cc.v2(-1, 1), cc.v2(0, -1), cc.v2(0, 0), cc.v2(0, 1), cc.v2(1, -1), cc.v2(1, 0), cc.v2(1, 1)], window.PROP_RAINBOW = [cc.v2(0, -1), cc.v2(0, -2), cc.v2(0, -3), cc.v2(0, -4), cc.v2(0, -5), cc.v2(0, -6), cc.v2(0, -7), cc.v2(0, -8), cc.v2(0, 1), cc.v2(0, 2), cc.v2(0, 3), cc.v2(0, 4), cc.v2(0, 5), cc.v2(0, 6), cc.v2(0, 7), cc.v2(0, 8), cc.v2(0, 0), cc.v2(-1, 0), cc.v2(-2, 0), cc.v2(-3, 0), cc.v2(-4, 0), cc.v2(-5, 0), cc.v2(-6, 0), cc.v2(-7, 0), cc.v2(-8, 0), cc.v2(1, 0), cc.v2(2, 0), cc.v2(3, 0), cc.v2(4, 0), cc.v2(5, 0), cc.v2(6, 0), cc.v2(7, 0), cc.v2(8, 0)], window.DIS_LIST_8X8 = [
			[1, 2, 3, 4, 5, 6, 7, 8],
			[9, 10, 11, 12, 13, 14, 15, 16],
			[17, 18, 19, 20, 21, 22, 23, 24],
			[25, 26, 27, 28, 29, 30, 31, 32],
			[33, 34, 35, 36, 37, 38, 39, 40],
			[41, 42, 43, 44, 45, 46, 47, 48],
			[49, 50, 51, 52, 53, 54, 55, 56],
			[57, 58, 59, 60, 61, 62, 63, 64],
			[1, 9, 17, 25, 33, 41, 49, 57],
			[2, 10, 18, 26, 34, 42, 50, 58],
			[3, 11, 19, 27, 35, 43, 51, 59],
			[4, 12, 20, 28, 36, 44, 52, 60],
			[5, 13, 21, 29, 37, 45, 53, 61],
			[6, 14, 22, 30, 38, 46, 54, 62],
			[7, 15, 23, 31, 39, 47, 55, 63],
			[8, 16, 24, 32, 40, 48, 56, 64]
		], window.DIS_LIST_9X9 = [
			[1, 2, 3, 4, 5, 6, 7, 8, 9],
			[10, 11, 12, 13, 14, 15, 16, 17, 18],
			[19, 20, 21, 22, 23, 24, 25, 26, 27],
			[28, 29, 30, 31, 32, 33, 34, 35, 36],
			[37, 38, 39, 40, 41, 42, 43, 44, 45],
			[46, 47, 48, 49, 50, 51, 52, 53, 54],
			[55, 56, 57, 58, 59, 60, 61, 62, 63],
			[64, 65, 66, 67, 68, 69, 70, 71, 72],
			[73, 74, 75, 76, 77, 78, 79, 80, 81],
			[1, 10, 19, 28, 37, 46, 55, 64, 73],
			[2, 11, 20, 29, 38, 47, 56, 65, 74],
			[3, 12, 21, 30, 39, 48, 57, 66, 75],
			[4, 13, 22, 31, 40, 49, 58, 67, 76],
			[5, 14, 23, 32, 41, 50, 59, 68, 77],
			[6, 15, 24, 33, 42, 51, 60, 69, 78],
			[7, 16, 25, 34, 43, 52, 61, 70, 79],
			[8, 17, 26, 35, 44, 53, 62, 71, 80],
			[9, 18, 27, 36, 45, 54, 63, 72, 81]
		], window.DIS_LIST_9G = [
			[1, 2, 3, 4, 5, 6, 7, 8, 9],
			[10, 11, 12, 13, 14, 15, 16, 17, 18],
			[19, 20, 21, 22, 23, 24, 25, 26, 27],
			[28, 29, 30, 31, 32, 33, 34, 35, 36],
			[37, 38, 39, 40, 41, 42, 43, 44, 45],
			[46, 47, 48, 49, 50, 51, 52, 53, 54],
			[55, 56, 57, 58, 59, 60, 61, 62, 63],
			[64, 65, 66, 67, 68, 69, 70, 71, 72],
			[73, 74, 75, 76, 77, 78, 79, 80, 81],
			[1, 10, 19, 28, 37, 46, 55, 64, 73],
			[2, 11, 20, 29, 38, 47, 56, 65, 74],
			[3, 12, 21, 30, 39, 48, 57, 66, 75],
			[4, 13, 22, 31, 40, 49, 58, 67, 76],
			[5, 14, 23, 32, 41, 50, 59, 68, 77],
			[6, 15, 24, 33, 42, 51, 60, 69, 78],
			[7, 16, 25, 34, 43, 52, 61, 70, 79],
			[8, 17, 26, 35, 44, 53, 62, 71, 80],
			[9, 18, 27, 36, 45, 54, 63, 72, 81],
			[1, 2, 3, 10, 11, 12, 19, 20, 21],
			[4, 5, 6, 13, 14, 15, 22, 23, 24],
			[7, 8, 9, 16, 17, 18, 25, 26, 27],
			[28, 29, 30, 37, 38, 39, 46, 47, 48],
			[31, 32, 33, 40, 41, 42, 49, 50, 51],
			[34, 35, 36, 43, 44, 45, 52, 53, 54],
			[55, 56, 57, 64, 65, 66, 73, 74, 75],
			[58, 59, 60, 67, 68, 69, 76, 77, 78],
			[61, 62, 63, 70, 71, 72, 79, 80, 81]
		], cc._RF.pop()
	}, {}],
	StartScene: [function (e, t) {
		"use strict";
		cc._RF.push(t, "3b9d306MUxALZoKHJkreFDT", "StartScene");
		var o, n = (o = e("../platformUtil/EventManager")) && o.__esModule ? o : {
			default: o
		},
			a = e("Common");
		cc.Class({
			extends: cc.Component,
			properties: {
				subPackCount: {
					default: 2,
					tooltip: "\u5206\u5305\u4e2a\u6570"
				}
			},
			onLoad: function () {
				this.subPackIndex = 0, GameData.loadData(function (e) {
					if (!e) {
						for (var t in MODE) GameData.bestScore[MODE[t]] = {}, GameData.level[MODE[t]] = 1;
						GameData.modeLock[MODE.JINGDIAN] = 1, lplatform.channel != CHANNEL.oppo && lplatform.channel != CHANNEL.vivo || (GameData.modeLock[MODE.JIUJIU] = 1, GameData.modeLock[MODE.JIUGONG] = 1, GameData.modeLock[MODE.JIEMI] = 1, GameData.modeLock[MODE.CHUANGGUAN] = 1, GameData.modeLock[MODE.STAR] = 1), GameData.saveData()
					}
				}), this.loadSubPack(this.subPackIndex)
			},
			loadSubPack: function (e) {
				var t = this;
				cc.assetManager.loadBundle("GameRes" + (e + 1), function (e, o) {
					e && console.log(e), GameBundle[t.subPackIndex + 1] = o, t.subPackIndex++, t.subPackIndex == t.subPackCount ? t.loadFinish() : t.loadSubPack(t.subPackIndex), cc.director.preloadScene("game_jingdian")
				})
			},
			loadFinish: function () {
				n.default.EventLoad(), a.toMenu()
			}
		}), cc._RF.pop()
	}, {
		"../platformUtil/EventManager": "EventManager",
		Common: "Common"
	}],
	UiSdk: [function (e, t) {
		"use strict";
		cc._RF.push(t, "7f04ddukd9GuqyIjLPfRcSl", "UiSdk"), cc.Class({
			extends: cc.Component,
			properties: {},
			onLoad: function () {
				"btnCloseQQ" == this.node.name && (this.node.active = lplatform.channel == CHANNEL.qq), "btnClose" == this.node.name && (this.node.active = lplatform.channel != CHANNEL.qq), "btnLookAD" == this.node.name && (this.node.active = lplatform.channel == CHANNEL.oppo), "btnShare" == this.node.name && (this.node.active = lplatform.channel == CHANNEL.tt), "4399sy" == this.node.name && (this.node.active = lplatform.channel == CHANNEL.w4399)
			}
		}), cc._RF.pop()
	}, {}],
	Utils: [function (e, t) {
		"use strict";
		cc._RF.push(t, "c3f67KYBfNPO5FlU48DhlXF", "Utils");
		var o = e("AudioManager"),
			n = "Utils===>>>";
		window.Utils = {
			nodePlayAnimation: function (e, t) {
				var o = e.getComponent(cc.Animation);
				o && (t ? o.play(t) : o.play())
			},
			nodePlayAnimationCall: function (e, t, o) {
				var n = e.getComponent(cc.Animation);
				n && (e.stopAllActions(), t ? n.play(t) : n.play(), n.once("finished", function () {
					return o && o()
				}))
			},
			addSoundEvent: function (e) {
				e.on(dragonBones.EventObject.SOUND_EVENT, function (e) {
					return o.playAniSound(e.name)
				})
			},
			playAni: function (e, t, o) {
				void 0 === o && (o = -1), e.playAnimation(t, o)
			},
			playAniCall: function (e, t, o) {
				e.once(dragonBones.EventObject.COMPLETE, function (e) {
					return o && o(e.animationState.name)
				}, this), e.playAnimation(t, 1)
			},
			setSolt: function (e, t, o) {
				e.getComponent(dragonBones.ArmatureDisplay).armature().getSlot(t).displayIndex = o
			},
			loadDragonBones: function (e, t, o, n, a, i) {
				cc.resources.loadDir(t, function (t, r) {
					t || r.length < 0 ? console.err(t) : (r.forEach(function (t) {
						t instanceof dragonBones.DragonBonesAsset && (e.dragonAsset = t), t instanceof dragonBones.DragonBonesAtlasAsset && (e.dragonAtlasAsset = t)
					}), e.armatureName = o, e.playAnimation(n, -1), a && e.addEventListener(dragonBones.EventObject.COMPLETE, a), i && i())
				})
			},
			getAngle: function (e, t) {
				return Math.atan(t.y - e.y / t.x - e.x)
			},
			getDistance: function (e, t) {
				return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
			},
			getProbability: function (e) {
				return 100 * Math.random() < e
			},
			getRandom: function (e, t) {
				return Math.floor(Math.random() * (t - e) + e)
			},
			replaceString: function (e, t, o) {
				return e.replace(new RegExp(t, "g"), o)
			},
			getArrayMax: function (e) {
				var t = Math.max.apply(Math, e);
				return e.indexOf(t)
			},
			getArrayMin: function (e) {
				var t = Math.min.apply(Math, e);
				return e.indexOf(t)
			},
			strToJson: function (e) {
				for (var t = {}, o = e.split(","), n = 0; n < o.length; n++) {
					var a = o[n].split(":");
					t[a[0]] = a[1]
				}
				return t
			},
			getJsonCount: function (e) {
				return Object.keys(e).length
			},
			equalItemNum: function (e, t) {
				for (var o = 0, n = 0; n < e.length; n++) t == e[n] && o++;
				return o
			},
			uniqueArray: function (e) {
				return Array.from(new Set(e))
			},
			getArrRandomIndex: function (e, t) {
				for (var o = [], n = 0; n < e.length; n++) o.push(n);
				for (var a = [], i = 0; i < t; i++) {
					var r = this.getRandom(0, o.length);
					a.push(o[r]), o.splice(r, 1)
				}
				return a
			},
			get2AryIntersect: function (e, t) {
				for (var o = [], n = 0; n < e.length; n++)
					for (var a = 0; a < t.length; a++) t[a] == e[n] && o.push(t[a]);
				return o
			},
			check2AryIsEqual: function (e, t) {
				for (var o = 0; o < e.length; o++)
					if (t[o] != e[o]) return !1;
				return !0
			},
			check4AryIsEqual: function (e, t) {
				if (e.length != t.length) return !1;
				for (var o = 0; o < e.length; o++)
					if (t[o][0] != e[o][0]) return !1;
				return !0
			},
			angleToVectos: function (e, t) {
				var o = cc.misc.degreesToRadians(e),
					n = t.rotate(-o);
				return cc.v2(n.x, n.y)
			},
			vectosToAngle: function (e, t) {
				var o = e.signAngle(t);
				return cc.misc.radiansToDegrees(o)
			},
			exchangePosition: function (e, t) {
				var o = cc.v2(e.x, e.y);
				e.position = cc.v2(t.x, t.y), t.position = o
			},
			loadPrefab: function (e, t, o) {
				void 0 === o && (o = !0), cc.resources.load(e + "/" + t, function (e, a) {
					if (e) console.error(n, "\u8f7d\u5165\u9884\u5236\u8d44\u6e90\u5931\u8d25, \u539f\u56e0:" + e);
					else if (a instanceof cc.Prefab) {
						if (1 == o) {
							var i = cc.instantiate(a);
							i.name = t, cc.find("Canvas").addChild(i)
						}
					} else console.error(n, "\u4f60\u8f7d\u5165\u7684\u4e0d\u662f\u9884\u5236\u8d44\u6e90!")
				})
			},
			ShowAsk: function (e) {
				var t = new cc.Node;
				t.parent = cc.director.getScene();
				var o = t.addComponent(cc.Sprite);
				cc.resources.load("public/fj_tishidi", cc.SpriteFrame, function (e, t) {
					o.spriteFrame = t
				}), cc.tween(t).set({
					scale: .6,
					x: cc.winSize.width / 2,
					y: cc.winSize.height / 2 - 200,
					zIndex: cc.macro.MAX_ZINDEX
				}).to(.5, {
					x: cc.winSize.width / 2,
					y: cc.winSize.height / 2
				}, {
					easing: "backOut"
				}).delay(.5).call(function () {
					return t.destroy()
				}).start();
				var n = new cc.Node;
				n.parent = t;
				var a = n.addComponent(cc.Label),
					i = cc.js.formatStr("%s", e);
				a.string = i, a.fontSize = 50, a.lineHeight = 60
			}
		}, cc._RF.pop()
	}, {
		AudioManager: "AudioManager"
	}],
	WeightRandom: [function (e, t, o) {
		"use strict";
		cc._RF.push(t, "2a4c40xPIBI6ZaeACUuktz7", "WeightRandom"), o.__esModule = !0, o.default = void 0;
		var n = function () {
			function e() {
				this.weightArr = []
			}
			var t = e.prototype;
			return t.weightAdd = function (e, t) {
				if (0 != t)
					for (var o = 0; o < t; o++) this.weightArr[this.weightArr.length] = e
			}, t.weightDeleteAll = function (e) {
				for (var t = -1, o = 0, n = 0; n < this.weightArr.length; n++) e == this.weightArr[n] && (o++, -1 == t && (t = n));
				this.weightArr.splice(t, o)
			}, t.weightDeleteSingle = function (e) {
				for (var t = 0; t < this.weightArr.length; t++)
					if (e == this.weightArr[t]) {
						this.weightArr.splice(t, 1);
						break
					}
			}, t.weightNext = function () {
				return this.weightArr[Math.floor(Math.random() * this.weightArr.length)]
			}, e
		}();
		o.default = n, t.exports = o.default, cc._RF.pop()
	}, {}],
	block: [function (e, t) {
		"use strict";
		cc._RF.push(t, "6eeb1lVKgBJcJEF3HO3dkhw", "block");
		var o = e("resourceUtil"),
			n = e("clientEvent"),
			a = e("AudioManager"),
			i = e("Common");
		cc.Class({
			extends: Script,
			properties: {
				_move: 0,
				_cType: -1,
				iceNum: 1,
				iceSprite: cc.Sprite,
				cgSpf: [cc.SpriteFrame]
			},
			initial: function (e) {
				this.index = 0, this._cType = e, this.isChange = !1, this.setSprite(e)
			},
			modeCGInitial: function (e) {
				this.isChange = !1, this.iceNum = e.num, this.isIceBlock = !0, this.setSprite("_cg_flower"), this.setIceSprite(e.num - 1)
			},
			getIsIce: function () {
				return this.isIceBlock
			},
			getXcNumber: function () {
				return this.iceNum
			},
			setIceSprite: function (e) {
				this.iceSprite.spriteFrame = this.cgSpf[e]
			},
			setIceNumber: function (e, t) {
				var o = this;
				this.isChange = !1, this.iceNum = e, e > 0 && this.setIceSprite(e - 1), i.showBlockBoom(this.node, this.getXcNumber(), function () {
					e > 0 || (t && t(), o.clean())
				})
			},
			setSprite: function (e) {
				if (null != e) {
					var t = this.node.getComponent(cc.Sprite); - 1 == e ? t.enabled = !1 : o.setSpriteFrame("kuai/k" + e, t)
				}
			},
			setGray: function (e) {
				var t = this.node.getComponent(cc.Sprite);
				this.scheduleOnce(function () {
					o.setSpriteFrame("kuai/huiKuai", t), n.dispatchEvent("setGray")
				}, e)
			},
			setChange: function (e) {
				if (this.isChange = !0, !(GameMode == MODE.CHUANGGUAN && this.iceNum >= 2)) {
					var t = this.node.getComponent(cc.Sprite);
					o.setSpriteFrame("kuai/k" + e, t)
				}
			},
			playDragon: function (e, t) {
				var o = this;
				this.isChange = !1, this.scheduleOnce(function () {
					return o.playAni(e)
				}, t)
			},
			playAni: function (e) {
				var t = this;
				a.playSound(AudioID.BCrazing);
				var o = this.node.parent.convertToWorldSpaceAR(cc.v2(0, 0));
				this.node.parent = cc.find("Canvas/uiRoot/tempNode"), this.node.position = cc.find("Canvas/uiRoot/tempNode").convertToNodeSpaceAR(o), this.node.getComponent(cc.Sprite).spriteFrame = null;
				var n = this.node.getChildByName("db").getComponent(dragonBones.ArmatureDisplay);
				n.node.active = !0;
				for (var i = ["x1", "s15", "s11", "s13", "s12", "s14", "g1", "x11", "x12", "s141", "s151", "s111", "x121", "x111", "x13"], r = 0; r < i.length; r++) Utils.setSolt(n, i[r], e);
				var s = _.random(1, 4);
				Utils.addSoundEvent(n), Utils.playAniCall(n, "newAnimation" + s, function () {
					return t.clean()
				})
			},
			clean: function () {
				this.node.destroy()
			}
		}), cc._RF.pop()
	}, {
		AudioManager: "AudioManager",
		Common: "Common",
		clientEvent: "clientEvent",
		resourceUtil: "resourceUtil"
	}],
	boardFrame: [function (e, t) {
		"use strict";
		cc._RF.push(t, "a6f096gxj1NXpLHJe1jtVa4", "boardFrame");
		var o = e("clientEvent"),
			n = e("AudioManager"),
			a = e("Common");
		cc.Class({
			extends: cc.Component,
			properties: {
				kFramePrefab: cc.Prefab,
				blockPrefab: cc.Prefab,
				dragonEage: dragonBones.ArmatureDisplay
			},
			onLoad: function () {
				this.playEffect = this.node.getComponent("playEffect"), this.frameList = [], this.xcList = [], this.xcListClone = [], this.lastLength = 1e4, this.grayNum = 0, this.putNum = 0, this.score = 0, this.resetParame(), this.initialBoard(), this.playBoardAimation("kaichang", function () { }), o.on("blockPut", this.checkbloackPut, this), o.on("curCickKuaiM", this.getCurClickKuaiM, this), o.on("setGray", this.grayCount, this), o.on("reviveEvent", this.reviveEvent, this), GameData.resume()
			},
			resetParame: function () {
				this.comboStep = BlockConfig[GameMode].comboStep, this.comboTimes = -1, this.effectPos = 0
			},
			initialBoard: function () {
				switch (GameMode) {
					case MODE.TEACH:
						this.disArr = DIS_LIST_8X8, this.initCheckBoard(), this.defaultCheckBoard(TEACHING.BOARD[GameData.teachingXS], TEACHING.COLOR[GameData.teachingXS]), this.showTeaching();
						break;
					case MODE.JINGDIAN:
						this.disArr = DIS_LIST_8X8, GameData.teaching < 3 ? (this.initCheckBoard(), this.defaultCheckBoard(TEACHING.BOARD[GameData.teaching], TEACHING.COLOR[GameData.teaching]), this.showTeaching()) : this.revertEight();
						break;
					case MODE.JIUJIU:
					case MODE.JIUJIU2:
						this.disArr = DIS_LIST_9X9, this.initCheckBoard();
						break;
					case MODE.JIUGONG:
						this.disArr = DIS_LIST_9G, this.initCheckBoard();
						break;
					case MODE.JIEMI:
						this.disArr = DIS_LIST_9X9, this.initCheckBoard(), this.defaultCheckBoard(JM_LEVEL_DATA[GameData.level[GameMode]].board, JM_LEVEL_DATA[GameData.level[GameMode]].color);
						break;
					case MODE.CHUANGGUAN:
						this.disArr = DIS_LIST_9X9, this.iceBlockNum = CG_LEVEL_DATA[GameData.level[GameMode]].board.length, this.initCheckBoard(), this.defaultCheckBoard(CG_LEVEL_DATA[GameData.level[GameMode]].board, CG_LEVEL_DATA[GameData.level[GameMode]].color)
				}
			},
			showTeaching: function (e) {
				void 0 === e && (e = !0), cc.find("Canvas/teaching/teach_di").active = e, GameMode == MODE.JINGDIAN ? cc.find("Canvas/teaching/" + GameData.teaching).active = e : GameMode == MODE.TEACH && (cc.find("Canvas/teaching/" + GameData.teachingXS).active = e)
			},
			playBoardAimation: function (e, t) {
				var o = this;
				this.dragonEage.node.active = !0, Utils.playAniCall(this.dragonEage, e, function () {
					t && t(), o.dragonEage.node.active = !1
				})
			},
			onDestroy: function () {
				o.off("blockPut", this.checkbloackPut, this), o.off("curCickKuaiM", this.getCurClickKuaiM, this), o.off("setGray", this.grayCount, this), o.off("reviveEvent", this.reviveEvent, this)
			},
			initCheckBoard: function () {
				for (var e = 0, t = [], o = this.node.width / 2 - BlockConfig[GameMode].wh / 2, n = 0; n < BlockConfig[GameMode].col; n++)
					for (var a = 0; a < BlockConfig[GameMode].row; a++) {
						var i = {
							row: a,
							col: n,
							index: ++e,
							fristPos: o,
							wh: BlockConfig[GameMode].wh
						};
						t.push(this.createKFrame(i))
					}
				this.frameList = t
			},
			defaultCheckBoard: function (e, t) {
				for (var o = 0; o < e.length; o++) {
					var n = e[o] - 1,
						a = cc.instantiate(this.blockPrefab);
					a.parent = this.frameList[n], a.width = BlockConfig[GameMode].wh, a.height = BlockConfig[GameMode].wh, a.script.initial(Array.isArray(t) ? t[o] : t), GameMode == MODE.CHUANGGUAN && a.script.modeCGInitial({
						num: CG_LEVEL_DATA[GameData.level[GameMode]].number[o]
					}), this.frameList[n].getComponent("kuaiFrame").isHaveFK = !0, this.frameList[n].getComponent("kuaiFrame").simulateFK = !0
				}
			},
			revertEight: function () {
				for (var e = 0, t = [], o = this.node.width / 2 - BlockConfig[GameMode].wh / 2, n = 0; n < BlockConfig[GameMode].col; n++)
					for (var a = 0; a < BlockConfig[GameMode].row; a++) {
						var i = {
							row: a,
							col: n,
							index: ++e,
							fristPos: o,
							wh: BlockConfig[GameMode].wh
						};
						t.push(this.createKFrame(i, !0))
					}
				this.frameList = t, this.score = GameData.curScore, gameDataBind.fkScore.setBoardScore(this.score, 1)
			},
			createKFrame: function (e, t) {
				var o = cc.instantiate(this.kFramePrefab);
				return o.parent = this.node, o.script.initial(e), t && null != GameData.blockData[e.index] && o.script.revertData(this.blockPrefab, GameData.blockData[e.index]), o
			},
			checkPutPos: function (e) {
				for (var t = 0; t < e.length; t++) {
					var o = e[t] - 1;
					if (this.frameList[o].getComponent("kuaiFrame").putState) return t
				}
			},
			setEffectPos: function () {
				var e = this.xcList[0],
					t = e[this.checkPutPos(e)] - 1;
				this.effectPos = this.frameList[t].getPosition();
				var o = this.kkuaiM._width,
					n = this.kkuaiM._height;
				this.effectPos2 = cc.v2(this.effectPos.x + o / 2 - 40, this.effectPos.y - n / 2 + 40)
			},
			getEffectPos: function () {
				return cc.v2(this.effectPos.x, this.effectPos.y)
			},
			cleanBlock: function (e, t, o) {
				var n = this;
				if (GameMode == MODE.JIEMI) 0 == e.script._move && (gameDataBind.fkScore._nowTaskNum++, gameDataBind.fkScore.setTaskNumber());
				else if (GameMode == MODE.CHUANGGUAN && 1 == e.script.getIsIce()) {
					var i = e.script.getXcNumber();
					return --i < 1 && (gameDataBind.fkScore._nowTaskNum++, gameDataBind.fkScore.setTaskNumber()), void e.script.setIceNumber(i, function () {
						n.cleanBoardFrame(t), n.iceBlockNum--, n.iceBlockNum <= 0 && a.showGameWinLayer()
					})
				}
				e.script.playDragon(this.kkuaiM._colorType, o), this.cleanBoardFrame(t)
			},
			cleanBoardFrame: function (e) {
				this.frameList[e - 1].getComponent("kuaiFrame").simulateFK = null, this.frameList[e - 1].getComponent("kuaiFrame").isHaveFK = null, GameMode == MODE.JINGDIAN && (GameData.blockData[e] = null, GameData.saveData())
			},
			checkbloackPut: function () {
				this.score += this.kkuaiM.checkFKlist.length, gameDataBind.fkScore.setBoardScore(this.score);
				var e = 0;
				if (this.xcList.length > 0) {
					this.setEffectPos();
					for (var t = 0; t < this.xcList.length; t++) {
						e = 0;
						for (var o = this.xcList[t], n = this.checkPutPos(o), a = n; a >= 0; a--) {
							var i = o[a],
								r = this.frameList[i - 1].getChildByName("kn");
							r && (e += XC_DELAY_TIME, this.cleanBlock(r, i, e))
						}
						e = 0;
						for (var s = n + 1; s < o.length; s++) {
							var c = o[s],
								l = this.frameList[c - 1].getChildByName("kn");
							l && (e += XC_DELAY_TIME, this.cleanBlock(l, c, e))
						}
					}
					this.checkScore(this.xcList.length)
				} else this.comboStep--, this.comboStep <= 0 && (this.comboStep = 0, gameDataBind.fkScore.hideHeatBeat());
				for (var d = [], h = 0; h < this.frameList.length; h++) this.frameList[h].script.isHaveFK || d.push(h);
				for (var u = d.length < PUSH_NONE, m = [], f = 0; f < this.frameList.length; f++) this.frameList[f].script.isHaveFK || 1 == this.checkHaveFK(f) && m.push(f);
				var p = m.length > PUSH_NONE_CLOSE;
				(u || p) && gameDataBind.kuaiManager.showRefreshBlock()
			},
			checkHaveFK: function (e) {
				for (var t = [], o = [e - 1, e + 1, e - BlockConfig[GameMode].row, e + BlockConfig[GameMode].row], n = 0; n < o.length; n++) null == this.frameList[o[n]] ? t[n] = 1 : t[n] = null == this.frameList[o[n]].script.isHaveFK ? 0 : 1;
				for (var a = 0; a < t.length; a++)
					if (0 == t[a]) return !1;
				return !0
			},
			checkScore: function (e, t, o) {
				var i = this;
				void 0 === t && (t = !1), this.comboStep > 0 || -1 == this.comboTimes ? this.comboTimes++ : this.comboTimes = 0, this.comboStep = BlockConfig[GameMode].comboStep, n.playSound(AudioID.Combo + (this.comboTimes > 10 ? 10 : this.comboTimes)), this.comboTimes >= 2 && gameDataBind.fkScore.playSke();
				var r = LINE_SCORE[e - 1];
				this.scheduleOnce(function () {
					if (i.comboTimes > 0) {
						var n = r * (i.comboTimes + 1);
						if (i.score += n, t) {
							var a = {
								comTimes: i.comboTimes,
								pos: o,
								score: n,
								pos2: o
							};
							i.playEffect.playCombo(a)
						} else {
							var s = {
								comTimes: i.comboTimes,
								pos: i.getEffectPos(),
								score: n,
								pos2: i.effectPos2
							};
							i.playEffect.playCombo(s)
						}
					} else if (i.score += r, t) {
						var c = {
							pos: o,
							disLine: e,
							colorType: 0
						};
						i.playEffect.playEliminate(c)
					} else {
						var l = {
							pos: i.getEffectPos(),
							disLine: e,
							colorType: i.kkuaiM._colorType
						};
						i.playEffect.playEliminate(l)
					}
				}, DELAY_TIME.combo), e > 1 && this.scheduleOnce(function () {
					n.playSound((lplatform.channel == CHANNEL.qq ? AudioID.LienTempQQ : AudioID.LienTemp) + e), t ? i.playEffect.playMultiRow(e, o) : i.playEffect.playMultiRow(e, i.getEffectPos())
				}, DELAY_TIME.flatter), this.isClearBoard() && (GameMode == MODE.JIEMI && (console.log("\u89e3\u8c1c\u6a21\u5f0f\u80dc\u5229"), GameData.isWin = !0), this.scheduleOnce(function () {
					GameMode == MODE.JIEMI ? (i.score += 300, a.showUnbelievable(), i.scheduleOnce(function () {
						return gameDataBind.kuaiManager.getBlockNum() <= 0 && a.showGameWinLayer()
					}, 3)) : i.score >= BOARD_CLEAN_ANI_SCORE && (i.score += 300, i.playBoardAimation("quanxiao"), a.showUnbelievable())
				}, DELAY_TIME.clean)), this.scheduleOnce(function () {
					gameDataBind.fkScore.setBoardScore(i.score), i.score > 1e3 && Math.floor(i.score / 1e3) != GameData.zjd_Score && (GameData.zjd_Score = Math.floor(i.score / 1e3), gameDataBind.pushZaJinDan())
				}, DELAY_TIME.score), gameDataBind.vibrates(this.comboTimes, e)
			},
			isClearBoard: function () {
				for (var e = 0; e < this.frameList.length; e++)
					if (this.frameList[e].getComponent("kuaiFrame").isHaveFK) return !1;
				return !0
			},
			checkXC: function () {
				for (var e = [], t = 0; t < this.frameList.length; t++) this.frameList[t].getComponent("kuaiFrame").simulateFK && e.push(this.frameList[t].getComponent("kuaiFrame").index);
				e.sort(function (e, t) {
					return e - t
				}), this.xcListClone = this.xcList.concat(), this.xcList = [];
				for (var o = 0; o < this.disArr.length; o++) {
					var n = this.disArr[o],
						a = Utils.get2AryIntersect(e, n);
					a.length > 0 && Utils.check2AryIsEqual(n, a) && this.xcList.push(n)
				}
				if (!Utils.check4AryIsEqual(this.xcListClone, this.xcList)) {
					for (var i = 0; i < this.frameList.length; i++) {
						var r = this.frameList[i].getChildByName("kn");
						if (r) {
							var s = r.getComponent("block");
							s.isChange && (s.setSprite(s._cType), s.isChange = !1)
						}
					}
					for (var c = 0; c < this.kkuaiM.node.children.length; c++) GameMode == MODE.JINGDIAN ? this.kkuaiM.node.children[c].scale = BlockConfig.blockScale : this.kkuaiM.node.children[c].scale = BlockConfig[GameMode].wh / BlockConfig.normalWH;
					if (this.xcList.length > 0)
						for (var l = 0; l < this.xcList.length; l++)
							for (var d = this.xcList[l], h = 0; h < d.length; h++) {
								var u = d[h],
									m = this.frameList[u - 1].getChildByName("kn");
								m && m.getComponent("block").setChange(this.kkuaiM._colorType);
								for (var f = 0; f < this.kkuaiM.node.children.length; f++) this.kkuaiM.node.children[f].getComponent("block").index === this.frameList[u - 1].getComponent("kuaiFrame").index && (this.kkuaiM.node.children[f].scale = 1)
							} else {
						for (var p = 0; p < this.frameList.length; p++) {
							var g = this.frameList[p].getChildByName("kn");
							if (g) {
								var w = g.getComponent("block");
								w.isChange && (w.setSprite(w._cType), w.isChange = !1)
							}
						}
						for (var b = 0; b < this.kkuaiM.node.children.length; b++) GameMode == MODE.JINGDIAN ? this.kkuaiM.node.children[b].scale = BlockConfig.blockScale : this.kkuaiM.node.children[b].scale = BlockConfig[GameMode].wh / BlockConfig.normalWH
					}
				}
			},
			getCurClickKuaiM: function (e) {
				this.kkuaiM = e, GameMode == MODE.JINGDIAN ? GameData.teaching < 3 && this.showTeaching(!1) : GameMode == MODE.TEACH && GameData.teachingXS < 3 && this.showTeaching(!1)
			},
			gameLose: function () {
				cc.find("Canvas").pauseSystemEvents(!0);
				var e = this.frameList.concat();
				this.frameList.sort(function () {
					return .5 - Math.random()
				});
				for (var t = .08, o = 0; o < this.frameList.length; o++)
					if (this.frameList[o].getComponent("kuaiFrame").isHaveFK) {
						var n = this.frameList[o].getChildByName("kn");
						if (n) {
							Math.random() < .5 && (t += GRAY_DELAY_TIME);
							var a = n.getComponent("block");
							this.putNum++, a.setGray(t)
						}
					} this.frameList = e
			},
			grayCount: function () {
				this.grayNum++, this.grayNum === this.putNum && (this.putNum = 0, this.grayNum = 0, GameMode == MODE.JIEMI ? this.scheduleOnce(function () {
					a.showGameLoseLayer()
				}, 1) : a.showRebornLayer())
			},
			reviveEvent: function () {
				cc.find("Canvas").resumeSystemEvents(!0);
				for (var e = 0; e < this.frameList.length; e++)
					if (this.frameList[e].getComponent("kuaiFrame").isHaveFK) {
						var t = this.frameList[e].getChildByName("kn");
						if (t) {
							var o = t.getComponent("block");
							o.setSprite(o._cType)
						}
					}
			}
		}), cc._RF.pop()
	}, {
		AudioManager: "AudioManager",
		Common: "Common",
		clientEvent: "clientEvent"
	}],
	clientEvent: [function (e, t) {
		"use strict";
		cc._RF.push(t, "f13ecoUF+ZBaJD94VitFsXq", "clientEvent");
		var o = e("eventListener").getBaseClass("multi"),
			n = new (cc.Class({
				extends: o,
				properties: {},
				onLoad: function () {
					this._EVENT_TYPE = ["testEvent", "blockPut", "curCickKuaiM", "setGray", "reviveEvent", "useProp"], this.setSupportEventList(this._EVENT_TYPE)
				}
			}));
		n.onLoad(), t.exports = n, cc._RF.pop()
	}, {
		eventListener: "eventListener"
	}],
	effectBomb: [function (e, t) {
		"use strict";
		cc._RF.push(t, "f8831Yjjw9DLoRmy4IDRQGL", "effectBomb");
		cc.Class({
			extends: Script,
			properties: {
				aniNode: {
					default: null,
					type: dragonBones.ArmatureDisplay,
					tiptool: "\u7279\u6548\u9f99\u9aa8\u52a8\u753b"
				}
			},
			initial: function (e, t) {
				var o = this;
				console.log(e, t), 1 == e ? Utils.playAniCall(this.aniNode, "newAnimation", function () {
					o.node.destroy()
				}) : 2 == e ? (Utils.playAniCall(this.aniNode, "newAnimation", function () {
					o.node.destroy()
				}), this.aniNode.node.x = -t.x) : 3 == e && (Utils.playAniCall(this.aniNode, "newAnimation", function () {
					o.node.destroy()
				}), this.aniNode.node.angle = -90, this.aniNode.node.y = -t.y)
			}
		}), cc._RF.pop()
	}, {}],
	eventListener: [function (e, t) {
		"use strict";
		cc._RF.push(t, "cc4098l4AhPvJSimq9NDEJh", "eventListener");
		var o = cc.Class({
			ctor: function () {
				this.supportEvent = null
			},
			on: function (e, t, o) {
				this[e] = {
					handler: t,
					target: o
				}
			},
			off: function (e, t) {
				var o = this[e];
				o && o.handler && o.handler === t && (this[e] = null)
			},
			dispatchEvent: function (e) {
				if (null === this.supportEvent || this.supportEvent.hasOwnProperty(e)) {
					for (var t = this[e], o = [], n = 1; n < arguments.length; n++) o.push(arguments[n]);
					t.handler ? t.handler.apply(t.target, o) : cc.log("not register " + e + "    callback func")
				} else cc.error("please add the event into clientEvent.js")
			},
			setSupportEventList: function (e) {
				if (!(e instanceof Array)) return cc.error("supportEvent was not array"), !1;
				for (var t in this.supportEvent = {}, e) {
					var o = e[t];
					this.supportEvent[o] = t
				}
				return !0
			}
		}),
			n = cc.Class({
				ctor: function () {
					this.handlers = {}, this.supportEvent = null
				},
				on: function (e, t, o) {
					var n = {
						handler: t,
						target: o
					},
						a = this.handlers[e];
					a || (a = [], this.handlers[e] = a);
					for (var i = 0; i < a.length; i++)
						if (!a[i]) return a[i] = n, i;
					return a.push(n), a.length
				},
				off: function (e, t, o) {
					var n = this.handlers[e];
					if (n)
						for (var a = 0; a < n.length; a++) {
							var i = n[a];
							if (i.handler === t && (!o || o === i.target)) {
								n.splice(a, 1);
								break
							}
						}
				},
				dispatchEvent: function (e) {
					if (null === this.supportEvent || this.supportEvent.hasOwnProperty(e)) {
						var t, o = this.handlers[e],
							n = [];
						for (t = 1; t < arguments.length; t++) n.push(arguments[t]);
						if (o)
							for (t = 0; t < o.length; t++) {
								var a = o[t];
								a.handler && a.handler.apply(a.target, n)
							}
					} else cc.error("please add the event into clientEvent.js")
				},
				setSupportEventList: function (e) {
					if (!(e instanceof Array)) return cc.error("supportEvent was not array"), !1;
					for (var t in this.supportEvent = {}, e) {
						var o = e[t];
						this.supportEvent[o] = t
					}
					return !0
				}
			}),
			a = {
				getBaseClass: function (e) {
					return "multi" === e ? n : o
				}
			};
		t.exports = a, cc._RF.pop()
	}, {}],
	fkScore: [function (e, t) {
		"use strict";
		cc._RF.push(t, "0ae97Q6+8NCTYa+AD4XbDUo", "fkScore");
		var o = e("AudioManager"),
			n = e("Common"),
			a = e("resourceUtil");
		cc.Class({
			extends: cc.Component,
			properties: {
				_gameScore: 0,
				_showScore: 0,
				_showBestScore: 0,
				_curScore: 0,
				changeS: 1,
				_nowTaskNum: 0,
				moveParent: cc.Node,
				scoreLab: cc.Label,
				bestScoreLab: cc.Label,
				skeHeart: dragonBones.ArmatureDisplay,
				taskSprite: cc.Sprite,
				nowTaskLabel: cc.Label,
				taskLabel: cc.Label,
				levelLabel: cc.Label
			},
			onLoad: function () {
				this.isEject = !1, this.readBestScore(), this._gameScore = 0, this._showScore = this._gameScore, this.skeHeart && (this.skeHeart.removeEventListener(dragonBones.EventObject.COMPLETE, this.playSkeComplete, this), this.skeHeart.addEventListener(dragonBones.EventObject.COMPLETE, this.playSkeComplete, this)), this.setTaskNumber(), this.setLevelNum()
			},
			readBestScore: function () {
				this._showBestScore = GameData.getBestScore(GameMode), this.bestScoreLab.string = this._showBestScore
			},
			setLevelNum: function () {
				GameMode != MODE.JIEMI && GameMode != MODE.CHUANGGUAN || (this.levelLabel.string = "Current Level " + GameData.level[GameMode])
			},
			setTaskNumber: function () {
				if (GameMode == MODE.JIEMI) this.taskLabel.string = JM_LEVEL_DATA[GameData.level[GameMode]].board.length, a.setSpriteFrame("kuai/k" + JM_LEVEL_DATA[GameData.level[GameMode]].color, this.taskSprite);
				else {
					if (GameMode != MODE.CHUANGGUAN) return;
					this.taskLabel.string = CG_LEVEL_DATA[GameData.level[GameMode]].board.length
				}
				this.nowTaskLabel.string = this._nowTaskNum
			},
			playSke: function () {
				this.skeHeart.node.active = !0, this.skeHeart.playAnimation("newAnimation", 1)
			},
			playSkeComplete: function () {
				this.skeHeart.playAnimation("xunhuan", 1)
			},
			hideHeatBeat: function () {
				this.skeHeart.node.active = !1
			},
			setBoardScore: function (e, t) {
				var o = e - this._curScore;
				if (o > CHANGE_SCORE ? (this.changeS = Math.floor(CHANGE_TIME / (2 / o)), this.changeS = this.changeS < 1 ? 1 : this.changeS) : this.changeS = 1, 1 == t && (this.changeS = o), this._curScore = e, GameMode == MODE.JINGDIAN && (GameData.curScore = e), 0 == GameData.isGetBestScore && 0 != GameData.getBestScore(GameMode)) {
					var a = GameData.getBestScore(GameMode);
					this._showBestScore > a && (GameData.isGetBestScore = 1, n.showNewScore())
				}
			},
			update: function () {
				this.updateScore(), this._curScore > this._showBestScore && this.updateBestScore()
			},
			updateScore: function () {
				this._curScore > this._gameScore ? (this._gameScore += this.changeS, this.scoreLab.string = this._gameScore) : this._gameScore > this._curScore && (this._gameScore = this._curScore, this.scoreLab.string = this._gameScore)
			},
			updateBestScore: function () {
				this._curScore > this._showBestScore && (this._showBestScore += this.changeS, this.bestScoreLab.string = this._showBestScore)
			},
			btnPause: function () {
				var e = this;
				o.playClickSound(), this.isEject ? cc.tween(this.moveParent).call(function () {
					cc.find("moveParent/btnFlush", e.node).active = !1, cc.find("moveParent/btnHome", e.node).active = !1
				}).by(.6, {
					position: cc.v2(-220, 0)
				}, {
					easing: "elasticOut"
				}).start() : cc.tween(this.moveParent).call(function () {
					cc.find("moveParent/btnFlush", e.node).active = !0, cc.find("moveParent/btnHome", e.node).active = !0
				}).by(.6, {
					position: cc.v2(220, 0)
				}, {
					easing: "elasticOut"
				}).start(), this.isEject = !this.isEject
			},
			btnHome: function () {
				o.playClickSound(), n.setBestScore(), n.toMenu()
			},
			btnFlush: function () {
				gameDataBind.restartGame()
			}
		}), cc._RF.pop()
	}, {
		AudioManager: "AudioManager",
		Common: "Common",
		resourceUtil: "resourceUtil"
	}],
	kuaiFrame: [function (e, t) {
		"use strict";
		cc._RF.push(t, "863e3cI9EFE1K37SfSFp0ME", "kuaiFrame");
		var o = e("clientEvent"),
			n = e("AudioManager");
		cc.Class({
			extends: Script,
			properties: {
				ksf: [cc.SpriteFrame],
				ksp: cc.Sprite,
				kOpacity: cc.Node
			},
			onLoad: function () {
				this.isHaveFK = null, this.simulateFK = null, this.index = 0, this.putState = !1
			},
			initial: function (e) {
				this.row = e.row, this.col = e.col, this.index = e.index, this.node.width = e.wh, this.node.height = e.wh, this.node.x = -e.fristPos + e.row * e.wh, this.node.y = e.fristPos - e.col * e.wh
			},
			showOpacity: function () {
				GameMode == MODE.TEACH && GameData.teachingXS < 3 || GameMode == MODE.JINGDIAN && GameData.teaching < 3 || (this.kOpacity.active = !0, this.kOpacity.scale = BlockConfig[GameMode].wh / BlockConfig.normalWH)
			},
			hideOpacity: function () {
				this.kOpacity.active = !1
			},
			showColor: function (e) {
				this.ksp.spriteFrame = this.ksf[e], this.ksp.node.opacity = 100, this.node.scale = BlockConfig[GameMode].wh / BlockConfig.normalWH
			},
			hideColor: function () {
				this.ksp.node.opacity = 0
			},
			revertData: function (e, t) {
				this.isHaveFK = t.isHaveFK, this.index = t.index, this.putState = t.putState, this.simulateFK = t.simulateFK, this.row = t.row, this.col = t.col;
				var o = cc.instantiate(e);
				o.parent = this.node, o.x = t.knData.x, o.y = t.knData.y, o.scale = t.knData.scale, o.zIndex = t.knData.zIndex, o.getComponent("block").initial(t.knData.type)
			},
			getInfo: function () {
				return {
					row: this.row,
					col: this.col,
					index: this.index,
					isHaveFK: this.isHaveFK,
					putState: this.putState,
					spFrameType: this.spFrameType,
					simulateFK: this.simulateFK
				}
			},
			onClickSelf: function () {
				var e = this;
				if (console.log("\u884c=" + this.row, "\u5217=" + this.col, "\u5e8f\u53f7" + this.index), gameDataBind.propButton) {
					var t = cc.instantiate(gameDataBind.propButton);
					t.parent = cc.find("Canvas"), t.removeAllChildren();
					var o = Math.floor(3 * Math.random()),
						n = [cc.v2(0, 0), cc.v2(-360, 360), cc.v2(360, 360)];
					cc.tween(t).bezierTo(1, cc.v2(t.x, t.y), n[o], cc.v2(this.node.x, this.node.y + 137)).call(function () {
						t.destroy(), e.propMoveFinish(gameDataBind.getIsProp())
					}).start(), gameDataBind.propButton = null
				}
			},
			addEffect: function (e, t) {
				var o = cc.instantiate(1 == e ? CommonPrefab.boomPrefab : CommonPrefab.rainbowPrefab);
				o.script.initial(e, t), o.parent = this.node
			},
			propMoveFinish: function (e) {
				1 == gameDataBind.getIsProp() ? (this.addEffect(1, cc.v2(this.node.x, this.node.y)), GameData.propBomb--, GameData.propBomb < 0 && (GameData.propBomb = 0)) : 2 == gameDataBind.getIsProp() && (this.addEffect(2, cc.v2(this.node.x, this.node.y)), this.addEffect(3, cc.v2(this.node.x, this.node.y)), GameData.propRainBow--, GameData.propRainBow < 0 && (GameData.propRainBow = 0)), GameData.saveData(), gameDataBind.changePropCount(), n.playSound(1 == e ? AudioID.Bomb : 2 == e ? AudioID.RainBow : "");
				var t = [],
					a = 1 == gameDataBind.getIsProp() ? PROP_BOMB : 2 == gameDataBind.getIsProp() ? a = PROP_RAINBOW : null;
				if (null != a) {
					for (var i = 0, r = 0; r < a.length; r++) {
						var s = this.col + a[r].x,
							c = this.row + a[r].y;
						t[r] = cc.v2(s, c)
					}
					for (var l = 0; l < t.length; l++)
						if (!(t[l].x < 0 || t[l].x > BlockConfig[GameMode].row - 1 || t[l].y < 0 || t[l].y > BlockConfig[GameMode].col - 1)) {
							var d = t[l].x * BlockConfig[GameMode].row + t[l].y,
								h = gameDataBind.boardFrame.frameList[d].getChildByName("kn");
							h && (h.script.playDragon(h.script._cType, 0), gameDataBind.boardFrame.frameList[d].getComponent("kuaiFrame").simulateFK = null, gameDataBind.boardFrame.frameList[d].getComponent("kuaiFrame").isHaveFK = null, i++)
						} i > 0 && (gameDataBind.boardFrame.kkuaiM = {
							_colorType: 0
						}, gameDataBind.boardFrame.checkScore(1, !0, cc.v2(0, 0)), o.dispatchEvent("useProp")), gameDataBind.setIsProp(0)
				}
			}
		}), cc._RF.pop()
	}, {
		AudioManager: "AudioManager",
		clientEvent: "clientEvent"
	}],
	kuaiManager: [function (e, t) {
		"use strict";
		cc._RF.push(t, "cf49a+OtANAHok379FHG/NR", "kuaiManager");
		var o, n = (o = e("WeightRandom")) && o.__esModule ? o : {
			default: o
		},
			a = e("clientEvent"),
			i = e("AudioManager"),
			r = e("Common");
		cc.Class({
			extends: cc.Component,
			properties: {
				notPlace: cc.Node,
				labshape: cc.Label,
				fkBornPos: {
					default: [],
					type: [cc.Node],
					tooltip: "\u653e\u7f6e\u5757\u7684\u7236\u8282\u70b9"
				},
				fkPrefab: {
					default: [],
					type: [cc.Prefab],
					tooltip: "\u65b9\u5757\u9884\u5236\u4f53"
				}
			},
			onLoad: function () {
				this.surplusKuaiM = 3, this.sendKuaiM(), this.initialMode(), a.on("blockPut", this.checkbloackPut, this), a.on("reviveEvent", this.reviveEvent, this), a.on("useProp", this.usPropFinish, this)
			},
			onDestroy: function () {
				a.off("blockPut", this.checkbloackPut, this), a.off("reviveEvent", this.reviveEvent, this), a.off("useProp", this.usPropFinish, this)
			},
			initialMode: function () {
				this.btnRefreshBlock = this.node.getChildByName("btnRefreshBlock"), this.btnRefreshBlock.active = !1, GameMode == MODE.JIEMI && this.setBlockNum(JM_LEVEL_DATA[GameData.level[GameMode]].block.length)
			},
			checkbloackPut: function () {
				if (GameMode == MODE.JINGDIAN) {
					if (GameData.teaching < 2) return GameData.teaching++, GameData.saveData(), void this.scheduleOnce(function () {
						return r.toGame()
					}, 1.6);
					2 == GameData.teaching && (GameData.teaching = 3, GameData.saveData())
				} else if (GameMode == MODE.TEACH) {
					if (GameData.teachingXS < 2) return GameData.teachingXS++, GameData.saveData(), void this.scheduleOnce(function () {
						return r.toGame()
					}, 1.6);
					2 == GameData.teachingXS && (GameData.teachingXS = 3, GameData.saveData())
				}
				if (GameMode == MODE.JIUJIU2) {
					for (var e = gameDataBind.fkScore._curScore, t = e < BLOCK_WEIGHT_SCORE[0] ? BlockWeight[GameMode][0] : e < BLOCK_WEIGHT_SCORE[1] ? BlockWeight[GameMode][1] : BlockWeight[GameMode][2], o = new n.default, a = 0; a <= t.length; a++) o.weightAdd(a, t[a]);
					var i = o.weightNext();
					this.newNone(GameData.blockIndex, i), o.weightDeleteAll(i)
				} else this.surplusKuaiM--, this.surplusKuaiM <= 0 && (this.surplusKuaiM = 3, this.sendKuaiM());
				this.checkIsLose()
			},
			sendKuaiM: function () {
				if (GameMode == MODE.JINGDIAN && GameData.teaching < 3) this.surplusKuaiM = 1, this.newNone(1, TEACHING.BLOCK[GameData.teaching], TEACHING.BLOCK_COLOR[GameData.teaching]);
				else if (GameMode == MODE.TEACH && GameData.teachingXS < 3) this.surplusKuaiM = 1, this.newNone(1, TEACHING.BLOCK[GameData.teachingXS], TEACHING.BLOCK_COLOR[GameData.teachingXS]);
				else if (GameMode == MODE.JIEMI) {
					!this.blockIndex && (this.blockIndex = 0);
					for (var e = 0; e < 3; e++) {
						if (this.blockIndex >= JM_LEVEL_DATA[GameData.level[GameMode]].block.length) return;
						var t = [0, 1, 2, 3, 4, 5, 6];
						t.splice(JM_LEVEL_DATA[GameData.level[GameMode]].color, 1);
						var o = _.random(0, t.length - 1);
						this.newNone(e, JM_LEVEL_DATA[GameData.level[GameMode]].block[this.blockIndex], t[o]), this.blockIndex++
					}
				} else {
					for (var a = gameDataBind.fkScore._curScore, i = a < BLOCK_WEIGHT_SCORE[0] ? BlockWeight[GameMode][0] : a < BLOCK_WEIGHT_SCORE[1] ? BlockWeight[GameMode][1] : BlockWeight[GameMode][2], r = new n.default, s = 0; s <= i.length; s++) r.weightAdd(s, i[s]);
					for (var c = 0; c < 3; c++) {
						var l = r.weightNext();
						this.newNone(c, l), r.weightDeleteAll(l)
					}
				}
				this.checkIsLose()
			},
			newNone: function (e, t, o) {
				var n = cc.instantiate(this.fkPrefab[t]);
				n.setPosition(0, 0), n.parent = this.fkBornPos[e], n.script.init(null != o ? o : _.random(0, 6), t, !0, e)
			},
			usPropFinish: function () {
				this.checkIsLose()
			},
			checkIsLose: function () {
				if (GameMode != MODE.JIEMI || !GameData.isWin) {
					for (var e = 0, t = 0, o = 0; o < 3; o++) {
						var n = this.fkBornPos[o].children[0];
						if (n) {
							t++;
							var a = n.script;
							a.checkIsLose() ? (e++, a.setGrayKuai()) : a.recoveryKuai()
						}
					}
					e > PUSH_NOT_PUT && this.showRefreshBlock(), e == t && (console.log("lose!!!!!!!!!!!!" + e), i.playSound(AudioID.Lost), GameData.isFail = !0, gameDataBind.boardFrame.gameLose(), GameMode == MODE.JIEMI ? (this.notPlace.getChildByName("sp_outNum").active = this.getBlockNum() <= 0, this.notPlace.getChildByName("sp_noPut").active = this.getBlockNum() > 0, cc.tween(this.notPlace).set({
						opacity: 255
					}).delay(.25).to(.36, {
						opacity: 0
					}).to(.45, {
						opacity: 255
					}).start()) : cc.tween(this.notPlace).set({
						opacity: 255
					}).delay(.25).to(.36, {
						opacity: 0
					}).to(.45, {
						opacity: 255
					}).start())
				}
			},
			reviveEvent: function () {
				this.notPlace.opacity = 0, this.sendKuaiMDefault(RESUME_BLOCK_ARR)
			},
			setBlockNum: function (e) {
				this.blockNum = e, this.labshape.string = this.blockNum + "/" + JM_LEVEL_DATA[GameData.level[GameMode]].block.length
			},
			getBlockNum: function () {
				return this.blockNum
			},
			cleanBlockBoard: function () {
				for (var e = 0; e < this.fkBornPos.length; e++) this.fkBornPos[e].children[0] && this.fkBornPos[e].children[0].script.clean();
				this.surplusKuaiM = 3
			},
			onClickRefreshBlock: function () {
				this.showRefreshBlock(!0)
			},
			showRefreshBlock: function (e) {
				var t = this;
				void 0 === e && (e = !1), r.pushChangeBlock(e, function () {
					var e = [0, _.random(1, 9), 0];
					t.sendKuaiMDefault(e), t.btnRefreshBlock.active = !1
				}, function () {
					return t.btnRefreshBlock.active = !0
				})
			},
			sendKuaiMDefault: function (e) {
				this.cleanBlockBoard();
				for (var t = 0; t < e.length; t++) this.newNone(t, e[t])
			},
			update: function (e) {
				GameData.isPause || (GameData.pushChange_Time -= e, GameData.pushChange_Time < 0 && 0 == GameData.isTouch && this.showRefreshBlock())
			}
		}), cc._RF.pop()
	}, {
		AudioManager: "AudioManager",
		Common: "Common",
		WeightRandom: "WeightRandom",
		clientEvent: "clientEvent"
	}],
	kuaiM: [function (e, t) {
		"use strict";
		cc._RF.push(t, "b2578kr6uhLo5H9W6G1vure", "kuaiM");
		var o = e("resourceUtil"),
			n = e("clientEvent"),
			a = e("AudioManager");
		cc.Class({
			extends: Script,
			properties: {
				_colorType: -1,
				_shapeType: -1,
				_width: 0,
				_height: 0
			},
			onLoad: function () {
				this.touchDate = -1, this.blockPos = []
			},
			init: function (e, t, o, n) {
				var a = this;
				void 0 === o && (o = !0), this.index = n, this.checkFrameList = [], this.checkFKlist = [], this.checkIndex = [], this.checkIndexClone = [], this._colorType = e, this._shapeType = t, cc.tween(this.node).set({
					scale: 0
				}).to(.2, {
					scale: BlockConfig.scaleParam
				}).call(function () {
					return o && a.addTouchEvent()
				}).start();
				for (var i = this.node.children, r = 0; r < i.length; r++) i[r].getComponent("block")._move = 1, i[r].getComponent("block").initial(this._colorType);
				this.ox = this.node.x, this.oy = this.node.y, this._width = this.node.width, this._height = this.node.height, this.node.width = 380, this.node.height = 380
			},
			scaleChildren: function (e) {
				var t = this.node.children;
				if (e) {
					this.checkFrameList = [], this.node.x = this.ox, this.node.y = this.oy, this.node.scale = BlockConfig.scaleParam;
					for (var o = 0; o < t.length; o++) t[o].scale = 1
				} else {
					a.playSound(AudioID.BSelect), this.node.scale = BlockConfig[GameMode].wh / BlockConfig.normalWH;
					for (var n = 0; n < t.length; n++) t[n].scale = GameMode == MODE.JINGDIAN ? BlockConfig.blockScale : BlockConfig[GameMode].wh / BlockConfig.normalWH
				}
			},
			addTouchEvent: function () {
				var e = this;
				this.node.on(cc.Node.EventType.TOUCH_START, function () {
					if (0 == GameData.isTouch && (e.touchDate = (new Date).getTime(), GameData.isTouch = e.touchDate, GameData.blockIndex = e.index, e.node.y += BlockConfig.upH, e.scaleChildren(!1), n.dispatchEvent("curCickKuaiM", e), 1 == e.blockPos.length))
						for (var t = 0; t < e.blockPos[0].length; t++) e.blockPos[0][t].script.showOpacity()
				}, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, function (t) {
					if (GameData.isTouch == e.touchDate) {
						var o = t.touch.getDelta();
						e.node.x += o.x, e.node.y += o.y, e.collisionFunc(), e.checkIsCanDrop() ? e.changeColorDeal() : e.cleanFrameAll(), gameDataBind.boardFrame.checkXC()
					}
				}, this);
				var t = function () {
					if (GameData.isTouch == e.touchDate) {
						if (1 == e.blockPos.length)
							for (var t = 0; t < e.blockPos[0].length; t++) e.blockPos[0][t].script.hideOpacity();
						GameData.isTouch = 0, e.dropDownFunc()
					}
				};
				this.node.on(cc.Node.EventType.TOUCH_CANCEL, function () {
					return t()
				}, this), this.node.on(cc.Node.EventType.TOUCH_END, function () {
					return t()
				}, this)
			},
			checkIsLose: function () {
				this.blockPos = [];
				var e = cc.instantiate(this.node),
					t = e.children;
				e.opacity = 0, e.scale = BlockConfig[GameMode].wh / BlockConfig.normalWH, e.parent = this.node.parent;
				for (var o = t[0].x > 0 ? -t[0].x : t[0].x, n = t[0].y > 0 ? -t[0].y : t[0].y, a = 0; a < t.length; a++) t[a].x += o, t[a].y += n;
				for (var i = 0; i < gameDataBind.boardFrame.frameList.length; i++) {
					var r = gameDataBind.boardFrame.node.convertToWorldSpaceAR(gameDataBind.boardFrame.frameList[i].position),
						s = this.node.parent.convertToNodeSpaceAR(r);
					e.setPosition(s);
					for (var c = [], l = 0; l < t.length; l++) {
						var d = e.convertToWorldSpaceAR(cc.v2(t[l].x, t[l].y)),
							h = gameDataBind.boardFrame.node.convertToNodeSpaceAR(d),
							u = this.checkPosFuncAAA(h);
						u && c.push(u)
					}
					c.length >= t.length && this.blockPos.push(c)
				}
				return this.blockPos.length > 0 ? (e.parent = null, e.destroy(), !1) : (this.blockPos = [], e.parent = null, e.destroy(), !0)
			},
			collisionFunc: function () {
				0 != this.checkIndex.length && (this.checkIndexClone = this.checkIndex.concat()), this.checkFrameList = [], this.checkFKlist = [], this.checkIndex = [];
				for (var e = this.node.children, t = 0; t < e.length; t++) {
					var o = this.node.convertToWorldSpaceAR(cc.v2(e[t].x, e[t].y)),
						n = gameDataBind.boardFrame.node.convertToNodeSpaceAR(o),
						a = this.checkPosFunc(n);
					a && (this.checkFKlist.push(e[t]), this.checkFrameList.push(a), e[t].getComponent("block").index = a.getComponent("kuaiFrame").index, this.checkIndex.push(a.getComponent("kuaiFrame").index))
				}
			},
			checkPosFunc: function (e) {
				for (var t = BlockConfig[GameMode].wh / 2 - .1, o = 0; o < gameDataBind.boardFrame.frameList.length; o++) {
					var n = gameDataBind.boardFrame.frameList[o];
					if (!n.getComponent("kuaiFrame").isHaveFK) {
						var a = Math.abs(n.x - e.x),
							i = Math.abs(n.y - e.y);
						if (a <= t && i < t || i <= t && a < t) return n
					}
				}
			},
			checkPosFuncAAA: function (e) {
				for (var t = BlockConfig[GameMode].wh / 2, o = 0; o < gameDataBind.boardFrame.frameList.length; o++) {
					var n = gameDataBind.boardFrame.frameList[o];
					if (!n.getComponent("kuaiFrame").isHaveFK) {
						var a = Math.abs(n.x - e.x),
							i = Math.abs(n.y - e.y);
						if (a <= t && i < t || i <= t && a < t) return n
					}
				}
			},
			checkIsCanDrop: function () {
				if (0 == this.checkFrameList.length || this.checkFrameList.length != this.node.children.length) return !1;
				for (var e = 0; e < this.checkFrameList.length; e++)
					if (this.checkFrameList[e].getComponent("kuaiFrame").isHaveFK) return !1;
				return !0
			},
			dropDownFunc: function () {
				if (this.cleanFrameAll(), !this.checkIsCanDrop()) return this.scaleChildren(!0), void (GameMode == MODE.JINGDIAN ? GameData.teaching < 3 && gameDataBind.boardFrame.showTeaching(!0) : GameMode == MODE.TEACH && GameData.teachingXS < 3 && gameDataBind.boardFrame.showTeaching(!0));
				a.playSound(AudioID.BDown);
				for (var e = {
					x: 0,
					y: 0,
					zIndex: -1,
					scale: 1
				}, t = 0; t < this.checkFKlist.length; t++)
					if (this.checkFKlist[t].x = e.x, this.checkFKlist[t].y = e.y, this.checkFKlist[t].scale = e.scale, this.checkFKlist[t].zIndex = e.zIndex, this.checkFKlist[t].parent = this.checkFrameList[t], e.type = this.checkFKlist[t].getComponent("block")._cType, this.checkFrameList[t].getComponent("kuaiFrame").isHaveFK = !0, this.checkFrameList[t].getComponent("kuaiFrame").simulateFK = !0, this.checkFrameList[t].getComponent("kuaiFrame").putState = !0, GameMode == MODE.JINGDIAN) {
						var o = this.checkFrameList[t].getComponent("kuaiFrame").getInfo();
						GameData.blockData[o.index] = o, GameData.blockData[o.index].knData = e, GameData.saveData()
					} if (this.node.parent = null, GameMode == MODE.JIEMI) {
						var i = gameDataBind.kuaiManager.getBlockNum();
						i--, gameDataBind.kuaiManager.setBlockNum(i)
					}
				n.dispatchEvent("blockPut"), this.clean()
			},
			changeColorDeal: function () {
				if (!(this.checkIndexClone.length > 0 && Utils.check2AryIsEqual(this.checkIndexClone, this.checkIndex))) {
					this.cleanFrameAll();
					for (var e = 0; e < this.checkFrameList.length; e++) {
						var t = this.checkFrameList[e].getComponent("kuaiFrame");
						t.showColor(this._colorType), t.simulateFK = !0
					}
					for (var o = 0; o < this.checkIndexClone.length; o++) {
						for (var n = !0, a = 0; a < this.checkIndex[a]; a++) this.checkIndexClone[o] === this.checkIndex[a] && (n = !1);
						if (n) {
							var i = gameDataBind.boardFrame.frameList[this.checkIndexClone[o] - 1].getComponent("kuaiFrame");
							i.hideColor(), i.simulateFK = null
						}
					}
				}
			},
			cleanFrameAll: function () {
				this.checkIndexClone = [], this.checkIndex = [];
				for (var e = 0; e < gameDataBind.boardFrame.frameList.length; e++) {
					var t = gameDataBind.boardFrame.frameList[e].getComponent("kuaiFrame");
					t.simulateFK = t.isHaveFK, t.hideColor(), t.putState = !1
				}
			},
			setGrayKuai: function () {
				for (var e = this.node.children, t = 0; t < e.length; t++) o.setSpriteFrame("kuai/huiKuai", e[t].getComponent(cc.Sprite))
			},
			recoveryKuai: function () {
				for (var e = this.node.children, t = 0; t < e.length; t++) o.setSpriteFrame("kuai/k" + this._colorType, e[t].getComponent(cc.Sprite))
			},
			clean: function () {
				this.node.destroy()
			}
		}), cc._RF.pop()
	}, {
		AudioManager: "AudioManager",
		clientEvent: "clientEvent",
		resourceUtil: "resourceUtil"
	}],
	layerBase: [function (e, t) {
		"use strict";
		cc._RF.push(t, "39808dLpURF5YzyHfbmUWVi", "layerBase");
		var o = e("AudioManager"),
			n = e("Common"),
			a = e("../platformUtil/EventManager");
		cc.Class({
			extends: cc.Component,
			properties: {
				isBestScoreLayer: !1,
				crownAni: {
					default: null,
					type: dragonBones.ArmatureDisplay,
					tooltip: "\u7687\u51a0\u9f99\u9aa8"
				},
				guang: {
					default: null,
					type: cc.Node,
					tooltip: "\u5206\u6570\u80cc\u540e\u7684\u5149"
				},
				btnNext: {
					default: null,
					type: cc.Node,
					tooltip: "\u4e0b\u4e00\u5173\u6309\u94ae"
				},
				scoreLab: {
					default: null,
					type: cc.Label,
					tooltip: "\u5f53\u524d\u5f97\u5206"
				},
				bestScoreLab: {
					default: null,
					type: cc.Node,
					tooltip: "\u5f53\u524d\u6700\u9ad8\u5206"
				}
			},
			onLoad: function () {
				var e = this;
				GameData.pause(), this.crownAni && Utils.playAniCall(this.crownAni, "newAnimation", function () {
					return Utils.playAni(e.crownAni, "newAnimation_1")
				}), this.guang && cc.tween(this.guang).repeatForever(cc.tween().by(3, {
					angle: -360
				})).start(), this.btnNext && (this.btnNext.scale = 0), this.bestScoreLab && (this.bestScoreLab = GameData.getBestScore(GameMode))
			},
			start: function () {
				this.isPause = 0, this.curScore = gameDataBind.fkScore._curScore, this.isBestScoreLayer && (this.curScore = GameData.getBestScore(GameMode)), this.gameScore = 0, this.changeS = 1, this.curScore > CHANGE_SCORE && (this.changeS = Math.floor(CHANGE_TIME / (2 / this.curScore)), this.changeS = this.changeS < 1 ? 1 : this.changeS)
			},
			update: function () {
				this.updateScore()
			},
			updateScore: function () {
				this.isPause || (this.gameScore += this.changeS, o.playSound(AudioID.EndScore), this.scoreLab.string = this.gameScore, this.gameScore >= this.curScore && this.scoreAddFinish())
			},
			scoreAddFinish: function () {
				this.isPause = 1, this.guang.stopAllActions(), this.scoreLab.string = this.curScore, o.playSound(AudioID.EndButton), this.btnNext && cc.tween(this.btnNext).to(.6, {
					scale: 1
				}, {
					easing: "elasticOut"
				}).start()
			},
			onClickRestart: function () {
				o.playClickSound(), a.EventInterstitialVideo(), GameData.blockData = [], GameData.curScore = 0, GameMode == MODE.TEACH ? (3 == GameData.teachingXS && (GameData.teachingXS = 0, GameData.saveData()), n.toGame()) : n.toGame()
			},
			onClickShare: function () {
				a.shareRecord()
			},
			onClickNext: function () {
				o.playClickSound(), a.EventInterstitialVideo(), GameData.level[GameMode]++, GameMode == MODE.JIEMI && GameData.level[GameMode] > Object.keys(JM_LEVEL_DATA).length && (GameData.level[GameMode] = 1), GameMode == MODE.CHUANGGUAN && GameData.level[GameMode] > Object.keys(CG_LEVEL_DATA).length && (GameData.level[GameMode] = 1), GameData.saveData(), n.toGame()
			}
		}), cc._RF.pop()
	}, {
		"../platformUtil/EventManager": "EventManager",
		AudioManager: "AudioManager",
		Common: "Common"
	}],
	layerBestScore: [function (e, t) {
		"use strict";
		cc._RF.push(t, "edd5cKYiSxBoZHoCvStATQx", "layerBestScore");
		var o = e("EventManager");
		cc.Class({
			extends: e("layerBase"),
			properties: {},
			onLoad: function () {
				this._super()
			},
			start: function () {
				o.EventInterstitial(), this._super()
			},
			update: function () {
				this._super()
			}
		}), cc._RF.pop()
	}, {
		EventManager: "EventManager",
		layerBase: "layerBase"
	}],
	layerLose: [function (e, t) {
		"use strict";
		cc._RF.push(t, "7b75bxpKUZKRLb+E8C5SVfL", "layerLose");
		var o = e("EventManager");
		cc.Class({
			extends: e("layerBase"),
			properties: {},
			onLoad: function () {
				this._super()
			},
			start: function () {
				o.EventInterstitial(), o.EventWinAndFail(), this._super()
			},
			update: function () {
				this._super()
			}
		}), cc._RF.pop()
	}, {
		EventManager: "EventManager",
		layerBase: "layerBase"
	}],
	layerReborn: [function (e, t) {
		"use strict";
		cc._RF.push(t, "42d27Jni4NIVZUqK6goAH0o", "layerReborn");
		var o = e("clientEvent"),
			n = e("AudioManager"),
			a = e("EventManager"),
			i = e("Common");
		cc.Class({
			extends: cc.Component,
			properties: {
				rebornTimeSke: dragonBones.ArmatureDisplay,
				timeAudio: cc.AudioSource,
				panel: cc.Node,
				btnReborn: cc.Node,
				btnRestart: cc.Node
			},
			onLoad: function () {
				var e = this;
				this.scheduleOnce(function () {
					return e.timeAudio.play()
				}, 1), Utils.playAniCall(this.rebornTimeSke, "newAnimation", function () {
					e.scheduleOnce(function () {
						return e.showLayer()
					}, .8)
				}), i.setBestScore()
			},
			start: function () {
				a.EventInterstitial(), lplatform.channel == CHANNEL.qq && this.btnReborn.getChildByName("iconAD") && (this.btnReborn.getChildByName("iconAD").active = isShow, this.btnReborn.getComponent(cc.Sprite).enabled = !isShow), cc.Animation
			},
			onClickRevive: function () {
				var e = this;
				n.playClickSound(), lplatform.channel == CHANNEL.tt && (this.timeAudio.pause(), this.rebornTimeSke.timeScale = 0, this.panel.getComponent(cc.Animation).pause(), this.btnReborn.getComponent(cc.Animation).pause(), this.btnRestart.getComponent(cc.Animation).pause()), a.showRewardedVideo(function () {
					o.dispatchEvent("reviveEvent"), e.clean()
				}, function () {
					e.timeAudio.resume(), e.rebornTimeSke.timeScale = 1, e.panel.getComponent(cc.Animation).resume(), e.btnReborn.getComponent(cc.Animation).resume(), e.btnRestart.getComponent(cc.Animation).resume()
				})
			},
			onClickRestart: function () {
				n.playClickSound(), GameData.initialData(), GameData.blockData = [], GameData.curScore = 0, GameMode == MODE.TEACH ? (3 == GameData.teachingXS && (GameData.teachingXS = 0, GameData.saveData()), i.toGame(), this.clean()) : (i.toGame(), this.clean())
			},
			showLayer: function () {
				1 == GameData.isGetBestScore ? i.showEndBestScoreLayer() : i.showEndScoreLayer(), this.clean()
			},
			clean: function () {
				this.node.destroy(), this.timeAudio.stop()
			}
		}), cc._RF.pop()
	}, {
		AudioManager: "AudioManager",
		Common: "Common",
		EventManager: "EventManager",
		clientEvent: "clientEvent"
	}],
	layerScore: [function (e, t) {
		"use strict";
		cc._RF.push(t, "0bde9VVbctNKqW0aNYA2C8t", "layerScore");
		var o = e("../platformUtil/EventManager");
		cc.Class({
			extends: e("layerBase"),
			properties: {},
			onLoad: function () {
				this._super()
			},
			start: function () {
				o.EventWinAndFail(), this._super()
			},
			update: function () {
				this._super()
			}
		}), cc._RF.pop()
	}, {
		"../platformUtil/EventManager": "EventManager",
		layerBase: "layerBase"
	}],
	layerWin: [function (e, t) {
		"use strict";
		cc._RF.push(t, "c0cb8zpUNNIfqEsLkv6vXIH", "layerWin");
		var o = e("EventManager");
		cc.Class({
			extends: e("layerBase"),
			properties: {},
			onLoad: function () {
				this._super()
			},
			start: function () {
				o.EventInterstitial(), o.EventWinAndFail(), this._super()
			},
			update: function () {
				this._super()
			}
		}), cc._RF.pop()
	}, {
		EventManager: "EventManager",
		layerBase: "layerBase"
	}],
	lodash: [function (e, t) {
		"use strict";
		cc._RF.push(t, "67b269NslFCBLrF2lI+0l41", "lodash"),
			function () {
				function e(e, o) {
					Array.isArray(e) ? e.forEach(o) : t(e).forEach(function (t) {
						var n = t.key,
							a = t.value;
						o(a, n, e)
					})
				}

				function t(e) {
					var t = [];
					for (var o in e) e.hasOwnProperty(o) && t.push({
						key: o,
						value: e[o]
					});
					return t
				}

				function o(e) {
					var t = [];
					for (var o in e) e.hasOwnProperty(o) && t.push(e[o]);
					return t
				}

				function n(e, t) {
					for (var o, n = e ? t.length : 0, a = n - 1; n--;) {
						var i = t[n];
						n !== a && i === o || (o = i, Array.prototype.splice.call(e, i, 1))
					}
					return e
				}

				function a(e) {
					return "number" == typeof e
				}

				function i(e) {
					return e ? (e = Number(e)) === 1 / 0 || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
				}

				function r(e, t, o, n) {
					for (var a = -1, i = (0, Math.max)((0, Math.ceil)((t - e) / (o || 1)), 0), r = Array(i); i--;) r[n ? i : ++a] = e, e += o;
					return r
				}

				function s(e) {
					var t = typeof e;
					return null !== e && ("object" === t || "function" === t)
				}
				var c = 9007199254740991;

				function l(e) {
					return "number" == typeof e && e > -1 && e % 1 == 0 && e <= c
				}

				function d(e) {
					return null !== e && l(e.length)
				}

				function h(e, t) {
					return e === t || e != e && t != t
				}

				function u(e, t) {
					var o = typeof e;
					return !!(t = null === t ? c : t) && ("number" === o || "symbol" !== o && /^(?:0|[1-9]\d*)$/.test(e)) && e > -1 && e % 1 == 0 && e < t
				}

				function m(e, t, o) {
					if (!s(o)) return !1;
					var n = typeof t;
					return !!("number" === n ? d(o) && u(t, o.length) : "string" === n && t in o) && h(o[t], e)
				}
				var f = {
					find: function (e, t) {
						var n;
						if (Array.isArray(e) || (e = o(e)), (n = e.filter(t)).length) return n[0]
					},
					filter: function (e, t) {
						return Array.isArray(e) || (e = o(e)), e.filter(t)
					}
				};
				f.forEach = e, f.each = e, f.cloneDeep = function e(t) {
					if (null === t || "object" != typeof t) return t;
					var o = {};
					for (var n in t.constructor === Array && (o = []), t) t.hasOwnProperty(n) && (o[n] = e(t[n]));
					return o
				}, f.map = function (e, t) {
					Array.isArray(e) || (e = o(e));
					var n = [];
					return e.forEach(function (e, o, a) {
						n.push(t(e, o, a))
					}), n
				}, f.random = function (e, t) {
					var o = Math.random() * (t - e + 1) + e;
					return Math.floor(o)
				}, f.toArray = o, f.pullAllWith = function (e, t, o) {
					return t.forEach(function (t) {
						e.filter(function (e) {
							return o(e, t)
						}).forEach(function (t) {
							var o = e.indexOf(t); - 1 !== e.indexOf(t) && e.splice(o, 1)
						})
					}), e
				}, f.isEqual = function e(t, o) {
					var n = t instanceof Object,
						a = o instanceof Object;
					if (!n || !a) return t === o;
					if (Object.keys(t).length !== Object.keys(o).length) return !1;
					for (var i in t) {
						var r = t[i] instanceof Object,
							s = o[i] instanceof Object;
						if (r && s) return e(t[i], o[i]);
						if (t[i] !== o[i]) return !1
					}
					return !0
				}, f.now = function () {
					return Date.now()
				}, f.pullAll = function (e, t) {
					return t.forEach(function (t) {
						var o = e.indexOf(t); - 1 !== e.indexOf(t) && e.splice(o, 1)
					}), e
				}, f.forEachRight = function (e, t) {
					Array.isArray(e) || (e = o(e));
					for (var n = e.length - 1; n >= 0 && t(e[n]); n--);
				}, f.startsWith = function (e, t, o) {
					return (e = e.substr(o)).startsWith(t)
				}, f.endsWith = function (e, t, o) {
					return (e = e.substr(o)).endsWith(t)
				}, f.remove = function (e, t) {
					var o = [],
						a = [];
					return e.forEach(function (e, n) {
						t(e) && (o.push(e), a.push(n))
					}), n(e, a), o
				}, f.findIndex = function (e, t, o) {
					var n;
					if (e = e.slice(o), "function" == typeof t) {
						for (n = 0; n < e.length; n++)
							if (t(e[n])) return n
					} else if (Array.isArray(t))
						for (n = 0; n < e.length; n++) {
							var a = t[0],
								i = !0;
							if (t.length > 1 && (i = t[1]), e[n][a] === i) return n
						} else
						for (n = 0; n < e.length; n++)
							if (e[n] === t) return n;
					return -1
				}, f.concat = function () {
					var e = arguments.length;
					if (!e) return [];
					for (var t = arguments[0], o = 1; o < e;) t = t.concat(arguments[o]), o++;
					return t
				}, f.isNumber = a, f.indexOf = function (e, t, o) {
					return (e = e.slice(o)).indexOf(t)
				}, f.join = function (e, t) {
					if (null === e) return "";
					var o = "";
					return e.forEach(function (e) {
						o += e + t
					}), o.substr(0, o.length - 1)
				}, f.split = function (e, t, o) {
					return e.split(t, o)
				}, f.max = function (e) {
					if (e && e.length) {
						for (var t, o = 0; o < e.length; o++) 0 === o ? t = e[0] : t < e[o] && (t = e[o]);
						return t
					}
				}, f.drop = function (e, t) {
					return null !== e && e.length ? e.slice(t) : []
				}, f.flattenDeep = function e(t) {
					return t.reduce(function (t, o) {
						return t.concat(Array.isArray(o) ? e(o) : o)
					}, [])
				}, f.uniq = function (e) {
					var t = [];
					return e.forEach(function (e) {
						-1 === t.indexOf(e) && t.push(e)
					}), t
				}, f.isNaN = function (e) {
					return a(e) && e !== +e
				}, f.chunk = function (e, t) {
					if (null === e || !e.length || t < 1) return [];
					for (var o = []; e.length > t;) o.push(e.slice(0, t)), e = e.slice(t);
					return o.push(e), o
				}, f.maxBy = function (e, t) {
					if (e && e.length) {
						for (var o, n, a = 0; a < e.length; a++) 0 === a ? (o = t(e[0]), n = e[0]) : o < e[a] && (o = e[a], n = e[a]);
						return n
					}
				}, f.minBy = function (e, t) {
					if (e && e.length) {
						for (var o, n, a = 0; a < e.length; a++) 0 === a ? (o = t(e[0]), n = e[0]) : o > e[a] && (o = t(e[a]), n = e[a]);
						return n
					}
				}, f.range = function (e, t, o) {
					return o && "number" != typeof o && m(e, t, o) && (t = o = void 0), e = i(e), void 0 === t ? (t = e, e = 0) : t = i(t), r(e, t, o = void 0 === o ? e < t ? 1 : -1 : i(o), void 0)
				}, f.sumBy = function (e, t) {
					var o = 0;
					for (var n in e) o += t(e[n]);
					return o
				}, f.countBy = function (e) {
					var t = {};
					for (var o in e) {
						var n = e[o];
						t.hasOwnProperty(n) ? t[n] += 1 : t[n] = 1
					}
					return t
				}, f.removeArray = function (e, t) {
					for (var o = e.length, n = 0; n < o; n++)
						if (e[n] == t) return 0 == n ? (e.shift(), e) : n == o - 1 ? (e.pop(), e) : (e.splice(n, 1), e)
				}, window._ = f
			}(), cc._RF.pop()
	}, {}],
	menuSet: [function (e, t) {
		"use strict";
		cc._RF.push(t, "c9031qCz69Pv4tZGodkCAK5", "menuSet");
		var o = e("AudioManager");
		cc.Class({
			extends: Script,
			properties: {},
			onLoad: function () {
				this.isEject = !1
			},
			start: function () {
				if (lplatform.channel == CHANNEL.android || lplatform.channel == CHANNEL.ios) {
					var e = this.node.getChildByName("btnSendDesktop"),
						t = this.node.getChildByName("btnMoreGame"),
						o = this.node.getChildByName("btnPrivacyPolicy"),
						n = this.node.getChildByName("btnUserAgreement");
					e.active = !1, t.active = !1, o.x = e.x, n.x = t.x
				}
			},
			onClickSelf: function () {
				o.playClickSound(), this.isEject ? cc.tween(this.node).by(.6, {
					position: cc.v2(0, 110)
				}, {
					easing: "elasticOut"
				}).start() : cc.tween(this.node).by(.6, {
					position: cc.v2(0, -110)
				}, {
					easing: "elasticOut"
				}).start(), this.isEject = !this.isEject
			}
		}), cc._RF.pop()
	}, {
		AudioManager: "AudioManager"
	}],
	playEffect: [function (e, t) {
		"use strict";
		cc._RF.push(t, "4b9ec99ndxLaog4ptpGfr3U", "playEffect");
		var o = {
			2: "popFlatter1",
			3: "popFlatter2",
			4: "popFlatter3",
			5: "popFlatter4",
			6: "popFlatter5"
		};
		cc.Class({
			extends: cc.Component,
			properties: {
				popFlatter: cc.Prefab,
				popCombo: cc.Prefab,
				popComboScore: cc.Prefab,
				popEliminateScore: cc.Prefab
			},
			playEliminate: function (e) {
				var t = cc.instantiate(this.popEliminateScore),
					o = this,
					n = cc.Class({
						extends: Script,
						onLoad: function () { },
						initial: function (e) {
							var t = this;
							this.node.parent = o.node, this.node.setPosition(e.pos);
							var n = this.node.children[e.disLine - 1];
							n.active = !0;
							for (var a = function (t) {
								var o = n.children[t];
								cc.resources.load("image/number/" + e.colorType + "_" + o.name, cc.SpriteFrame, function (e, t) {
									if (e) return console.log(e);
									o.getComponent(cc.Sprite).spriteFrame = t
								})
							}, i = 0; i < n.children.length; i++) a(i);
							cc.tween(this.node).to(.3, {
								scale: 1
							}).delay(.5).call(function () {
								return t.clean()
							}).start()
						},
						clean: function () {
							this.node.destroy()
						}
					});
				t.addComponent(n), t.script.initial(e)
			},
			playCombo: function (e) {
				var t = this,
					o = cc.instantiate(this.popCombo);
				o.parent = this.node, o.position = e.pos, o.x > 150 && (o.x = 150), o.x < -140 && (o.x = -140), o.getChildByName("combo1").active = e.comTimes < 2, o.getChildByName("combo").active = e.comTimes > 1, o.getChildByName("combo_ske").scale = e.comTimes > 1 ? 1 : 0, o.getChildByName("Label_combo").active = e.comTimes > 1, o.getChildByName("Label_combo").getComponent(cc.Label).string = e.comTimes, this.scheduleOnce(function () {
					o.destroy(), t.playComboScore(e.score, e.pos2)
				}, 1.67)
			},
			playComboScore: function (e, t) {
				var o = cc.instantiate(this.popComboScore);
				o.parent = this.node, o.position = t, o.getChildByName("Label_score").getComponent(cc.Label).string = "+" + e, Utils.nodePlayAnimationCall(o, null, function () {
					return cc.tween(o).to(.2, {
						x: 0,
						y: 410
					}).call(function () {
						return o.destroy()
					}).start()
				})
			},
			playMultiRow: function (e, t) {
				if (!(e < 2)) {
					var n = cc.instantiate(this.popFlatter);
					n.parent = this.node, n.position = t, Utils.nodePlayAnimationCall(n, o[e], function () {
						return n.destroy()
					})
				}
			}
		}), cc._RF.pop()
	}, {}],
	pushChange: [function (e, t) {
		"use strict";
		cc._RF.push(t, "e5686QCEHVDqJkL7XzAd2u2", "pushChange");
		var o = e("EventManager"),
			n = e("../common/Common");
		cc.Class({
			extends: Script,
			properties: {
				btnCloseQQ: cc.Node,
				btn_lookAD: cc.Node,
				btn_change: cc.Node
			},
			onLoad: function () {
				lplatform.channel == CHANNEL.qq && lplatform.labData.changePosition && 1 == lplatform.labData.changePosition && Math.random() > .5 && Utils.exchangePosition(this.btn_change, this.btnCloseQQ), lplatform.channel == CHANNEL.oppo && lplatform.labData.changePosition && 1 == lplatform.labData.changePosition && Math.random() > .5 && Utils.exchangePosition(this.btn_change, this.btn_lookAD)
			},
			start: function () {
				o.EventInterstitial()
			},
			initial: function (e, t) {
				this.callback = e, this.callback2 = t
			},
			onClickChange: function () {
				var e = this;
				lplatform.channel == CHANNEL.oppo || lplatform.channel == CHANNEL.vivo ? this.videoFinish() : o.showRewardedVideo(function () {
					return e.videoFinish()
				})
			},
			videoFinish: function () {
				this.callback && this.callback(this.blockType), this.clean()
			},
			onClickLookAD: function () {
				null != window.ClickAdCallback && window.ClickAdCallback()
			},
			onClickClose: function () {
				this.callback2 && this.callback2(), this.clean()
			},
			clean: function () {
				n.pushChangeTime(), GameData.pushChange_Time = PUSH_TIME, GameData.pushChangeCount--, GameData.resume(), this.node.destroy()
			}
		}), cc._RF.pop()
	}, {
		"../common/Common": "Common",
		EventManager: "EventManager"
	}],
	pushTeach: [function (e, t) {
		"use strict";
		cc._RF.push(t, "5b03cQ7LPdIL4yTcPTyiEUl", "pushTeach");
		var o = e("EventManager"),
			n = e("Common");
		cc.Class({
			extends: Script,
			properties: {
				btnCloseQQ: cc.Node,
				btn_lookAD: cc.Node,
				btn_change: cc.Node
			},
			onLoad: function () {
				this.node.active = !1, lplatform.channel == CHANNEL.qq && lplatform.labData.changePosition && 1 == lplatform.labData.changePosition && Math.random() > .5 && Utils.exchangePosition(this.btn_change, this.btnCloseQQ), lplatform.channel == CHANNEL.oppo && lplatform.labData.changePosition && 1 == lplatform.labData.changePosition && Math.random() > .5 && Utils.exchangePosition(this.btn_change, this.btn_lookAD)
			},
			start: function () {
				o.EventInterstitial()
			},
			initial: function (e) {
				this.callback = e
			},
			onClickBack: function () {
				this.clean(), n.toMenu()
			},
			onClickLookAD: function () {
				null != window.ClickAdCallback && window.ClickAdCallback()
			},
			onClickClose: function () {
				this.callback && this.callback(), this.clean()
			},
			clean: function () {
				this.node.active = !1
			}
		}), cc._RF.pop()
	}, {
		Common: "Common",
		EventManager: "EventManager"
	}],
	resourceUtil: [function (e, t) {
		"use strict";
		cc._RF.push(t, "e1a4aQA36tCJLxKR4eT45IH", "resourceUtil");
		var o = new (cc.Class({
			onLoad: function () { },
			setGray: function (e, t) {
				for (var o = e.getComponentsInChildren(cc.Sprite), n = 0; n < o.length; ++n) {
					var a = o[n];
					t ? a.setState(cc.Sprite.State.GRAY) : a.setState(cc.Sprite.State.NORMAL)
				}
			},
			loadRes: function (e, t, o) {
				cc.resources.load(e, t, function (e, t) {
					if (e) return cc.error(e.message || e), void o(e, t);
					o(e, t)
				})
			},
			setSpriteFrame: function (e, t, o) {
				this.loadRes(e, cc.SpriteFrame, function (n, a) {
					if (n) return console.error("set sprite frame failed! err:", e, n), void o(n);
					t && cc.isValid(t) && (t.spriteFrame = a, o && o(null))
				})
			}
		}));
		o.onLoad(), t.exports = o, cc._RF.pop()
	}, {}]
}, {}, ["Launch", "Property", "block", "boardFrame", "fkScore", "kuaiFrame", "kuaiM", "kuaiManager", "AudioManager", "Common", "GameData", "Prefab", "Utils", "playEffect", "resourceUtil", "effectBomb", "layerBase", "layerBestScore", "layerLose", "layerReborn", "layerScore", "layerWin", "pushChange", "pushTeach", "LvData_ChuangGuan", "LvData_JieMi", "WeightRandom", "clientEvent", "eventListener", "lodash", "CCEngine", "ChangeAD", "EventManager", "FitPad", "LayaEngine", "PBaiDu", "PDef", "PGameBox4399", "PH54399", "PHuaWei", "PKuaiShou", "PNative", "POppo", "PQQ", "PTT", "PUC", "PVivo", "PWX", "Params", "PlatformA", "UiSdk", "GameScene", "LoadingScene", "MenuScene", "StartScene", "menuSet"]);