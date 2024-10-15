-----5.1.3更新后由于PC位置右移，调整了显示的位置，本体5.1.3以下版本没必要用这个版本的MOD，可能有点不美观-----

在小人贴图右侧新增惠特尼立绘，根据社交栏状态+是否在公园emo+是否为学校事件等添加差分。
可能会与其他修改css添加内容的mod冲突，严重时会造成游戏无法打开。
大概不会因为插拔mod损坏存档。
返图/反馈/联系作者：https://tieba.baidu.com/p/9017371251

【可能不兼容的mod】
Simple Frameworks （简易框架）
i Candy + Robot （爱糖机）
Mea's picvary NPC mod （mea的npc头像mod）
!!同时添加请务必谨慎!!

【修改css但确定可兼容的mod】
LowerSkyBox
ReOverfits

图片绘制/html修改：Jubcty
modloader实现：miyako4828

原代码添加方法：
不想用了给 &lt;&lt;Whitney_state&gt;&gt; 注释掉就行，在这条语句的首尾分别加上/*和*/即可

1、将Whitney_state文件夹移动到游戏文件夹下的img\misc中
2、找到@media screen and (min-color-index: 0) and (-webkit-min-device-pixel-ratio: 0)，在#img,下加入#clothimage,
3、找到@media not all and (min-resolution: 0.001dpcm)，在#img,下加入#clothimage,
4、找到<style id="style-module-skybox" type="text/css">，在上方加入以下代码：
<style "style-module-whitney" type="text/css">
	#clothimage{
		top:0px;
		left: 20px;
	}
</style>

5、找到  &lt;&lt;weatherdisplay&gt;&gt;  ，在上方加入代码：
&lt;&lt;Whitney_state&gt;&gt;

6、找到  &lt;&lt;widget &quot;weatherdisplay&quot;&gt;&gt;  ，在上方加入以下代码：
&lt;&lt;widget &quot;Whitney_state&quot;&gt;&gt;
	&lt;&lt;if C.npc.Whitney.state is &quot;dungeon&quot;&gt;&gt;
			&lt;&lt;set _gifWhitney to &#39;img/misc/Whitney_state/others/&#39;&gt;&gt;
			&lt;img id=&quot;clothimage&quot; @src=&quot;_gifWhitney + &#39;dungeon&#39 + &#39;.gif&#39;&quot;&gt;
    &lt;&lt;else&gt;&gt;
		&lt;&lt;if Time.hour gte 21 and Time.weekDay is 1&gt;&gt;
				&lt;&lt;set _gifWhitney to &#39;img/misc/Whitney_state/others/&#39;&gt;&gt;
				&lt;img id=&quot;clothimage&quot; @src=&quot;_gifWhitney + &#39;pub&#39 + &#39;.gif&#39;&quot;&gt;

			&lt;&lt;elseif Time.schoolTime &gt;&gt;
				&lt;&lt;set _gifWhitney to &#39;img/misc/Whitney_state/school/&#39;&gt;&gt;
				&lt;&lt;if C.npc.Whitney.love gte 20 &gt;&gt;
					&lt;&lt;if C.npc.Whitney.lust gte 60 &gt;&gt;
						&lt;img id=&quot;clothimage&quot; @src=&quot;_gifWhitney + &#39;hh&#39 + &#39;.gif&#39;&quot;&gt;
					&lt;&lt;else&gt;&gt;
						&lt;&lt;if C.npc.Whitney.dom gte 20 &gt;&gt;
							&lt;img id=&quot;clothimage&quot; @src=&quot;_gifWhitney + &#39;hlh&#39 + &#39;.gif&#39;&quot;&gt;
						&lt;&lt;elseif C.npc.Whitney.dom lte 8 &gt;&gt;
							&lt;img id=&quot;clothimage&quot; @src=&quot;_gifWhitney + &#39;hll&#39 + &#39;.gif&#39;&quot;&gt;
						&lt;&lt;else&gt;&gt;
							&lt;img id=&quot;clothimage&quot; @src=&quot;_gifWhitney + &#39;hlm&#39 + &#39;.gif&#39;&quot;&gt;
						&lt;&lt;/if&gt;&gt;
					&lt;&lt;/if&gt;&gt;
					
				&lt;&lt;elseif C.npc.Whitney.love lte 5 &gt;&gt;
					&lt;&lt;if C.npc.Whitney.lust gte 60 &gt;&gt;
						&lt;img id=&quot;clothimage&quot; @src=&quot;_gifWhitney + &#39;lh&#39 + &#39;.gif&#39;&quot;&gt;
					&lt;&lt;else&gt;&gt;
						&lt;img id=&quot;clothimage&quot; @src=&quot;_gifWhitney + &#39;ll&#39 + &#39;.gif&#39;&quot;&gt;
					&lt;&lt;/if&gt;&gt;
					
				&lt;&lt;else&gt;&gt;
					&lt;&lt;if C.npc.Whitney.dom lte 8 &gt;&gt;
						&lt;img id=&quot;clothimage&quot; @src=&quot;_gifWhitney + &#39;ml&#39 + &#39;.gif&#39;&quot;&gt;
					&lt;&lt;else&gt;&gt;
						&lt;img id=&quot;clothimage&quot; @src=&quot;_gifWhitney + &#39;m&#39 + &#39;.gif&#39;&quot;&gt;
					&lt;&lt;/if&gt;&gt;
				&lt;&lt;/if&gt;&gt;				

			&lt;&lt;elseif isInPark(&quot;Whitney&quot;) &gt;&gt;
				&lt;&lt;set _gifWhitney to &#39;img/misc/Whitney_state/others/&#39;&gt;&gt;
			    &lt;img id=&quot;clothimage&quot; @src=&quot;_gifWhitney + &#39;smoke&#39 + &#39;.gif&#39;&quot;&gt;

			
				
			&lt;&lt;else&gt;&gt;
				&lt;&lt;set _gifWhitney to &#39;img/misc/Whitney_state/daily/&#39;&gt;&gt;
				&lt;&lt;if C.npc.Whitney.love gte 20 &gt;&gt;
						&lt;&lt;if C.npc.Whitney.lust gte 60 &gt;&gt;
							&lt;img id=&quot;clothimage&quot; @src=&quot;_gifWhitney + &#39;hh&#39 + &#39;.gif&#39;&quot;&gt;
						&lt;&lt;else&gt;&gt;
							&lt;&lt;if C.npc.Whitney.dom gte 20 &gt;&gt;
								&lt;img id=&quot;clothimage&quot; @src=&quot;_gifWhitney + &#39;hlh&#39 + &#39;.gif&#39;&quot;&gt;
							&lt;&lt;elseif C.npc.Whitney.dom lte 8 &gt;&gt;
								&lt;img id=&quot;clothimage&quot; @src=&quot;_gifWhitney + &#39;hll&#39 + &#39;.gif&#39;&quot;&gt;
							&lt;&lt;else&gt;&gt;
								&lt;img id=&quot;clothimage&quot; @src=&quot;_gifWhitney + &#39;hlm&#39 + &#39;.gif&#39;&quot;&gt;
							&lt;&lt;/if&gt;&gt;
						&lt;&lt;/if&gt;&gt;
					
				&lt;&lt;elseif C.npc.Whitney.love lte 5 &gt;&gt;
						&lt;&lt;if C.npc.Whitney.lust gte 60 &gt;&gt;
							&lt;img id=&quot;clothimage&quot; @src=&quot;_gifWhitney + &#39;lh&#39 + &#39;.gif&#39;&quot;&gt;
						&lt;&lt;else&gt;&gt;
							&lt;img id=&quot;clothimage&quot; @src=&quot;_gifWhitney + &#39;ll&#39 + &#39;.gif&#39;&quot;&gt;
						&lt;&lt;/if&gt;&gt;
					
				&lt;&lt;else&gt;&gt;
						&lt;&lt;if C.npc.Whitney.dom lte 8 &gt;&gt;
							&lt;img id=&quot;clothimage&quot; @src=&quot;_gifWhitney + &#39;ml&#39 + &#39;.gif&#39;&quot;&gt;
						&lt;&lt;else&gt;&gt;
							&lt;img id=&quot;clothimage&quot; @src=&quot;_gifWhitney + &#39;m&#39 + &#39;.gif&#39;&quot;&gt;
						&lt;&lt;/if&gt;&gt;
				&lt;&lt;/if&gt;&gt;

			&lt;&lt;/if&gt;&gt;
				
	&lt;&lt;/if&gt;&gt;

&lt;&lt;/widget&gt;&gt;