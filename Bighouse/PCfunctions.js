var selectedLi;
function goToSelectedPassage() {
    var dropdown = document.getElementById('LiDropdown');
    var selectedOption = dropdown.options[dropdown.selectedIndex];
    var selectedText = selectedOption.textContent || selectedOption.innerText;
    State.variables.selectedLi = selectedText; // 存储文本到 State 变量
    Engine.play("PCToy_Buy_Finish"); // 跳转到选择的 Passage
  }
  window.goToSelectedPassage = goToSelectedPassage;

  function setupPurchase() {
    State.variables.selectedItem = $("#LiDropdown").val();
  }
  window.setupPurchase = setupPurchase;

/*jq区域*/
setup.handlePhotoSelection = function() {
	var selectedType = $('input[name="Photoselect"]:checked').val();
	State.variables.W_phototype = selectedType;
	$('input[name="Photoselect"]').prop('checked', false);
  };

setup.handlePCPhotoSelection = function() {
	var selectedType = $('input[name="PCPhotoselect"]:checked').val();
	State.variables.PC_phototype = selectedType;
	$('input[name="PCPhotoselect"]').prop('checked', false);
  };
/*三个功能切换*/
$(document).ready(function() {
	var currentP = 1;
    $(document).on('click', '#ContactPhoto', function() {
        $('#BigContainer').hide();
        $('#ChatContainer').show();
		console.log(currentP);
    });

	$(document).ready(function() {
		$(document).on('click', '#ChatB', function() {
			if (currentP == 2){
				$('#SelectContainer').show();
				$('#SelectContainer2').hide();
			}
			else if (currentP == 3){
				$('#ChatOtherContainer').hide();
				$('#PhoneMainContainer').show();
				$('#SelectContainer').show();
			}
			currentP = 1;
		});
	});

	$(document).ready(function() {
		$(document).on('click', '#DataB', function() {
			if (currentP == 1){
				$('#SelectContainer').hide();
				$('#SelectContainer2').show();
			}
			else if (currentP == 3){
				$('#ChatOtherContainer').hide();
				$('#SelectContainer2').show();
				$('#SelectContainer').hide();
				$('#PhoneMainContainer').show();
			}
			currentP = 2;
		});
	});

	$(document).ready(function() {
		$(document).on('click', '#OtherB', function() {
			$('#PhoneMainContainer').hide();
			$('#ChatOtherContainer').show();
			if (currentP == 1){
				$('#SelectContainer').hide();
			}
			else if (currentP == 2){
				$('#SelectContainer2').hide();
			}
			currentP = 3;
		});
	});

});

$(document).ready(function() {
    $(document).on('click', '#PhotoSetting', function() {
        $('#ChatContainer').hide();
        $('#SettingContainer').show();
    });
});

$(document).ready(function() {
    $(document).on('click', '#arrow_ToContact', function() {
        $('#BigContainer').show();
        $('#ChatContainer').hide();
    });
});

$(document).ready(function() {
    $(document).on('click', '#arrow_ToChat', function() {
        $('#ChatContainer').show();
        $('#SettingContainer').hide();
    });
});

/*手机的js区域*/
/*预设对话功能的实现*/
setup.CasualChat = [
    {
        question: "好无聊啊，想做些有意思的事",
        answers: ["你可以加入我的小团体一起找点乐子...但是现在不行", "想玩点刺激的吗，比如在大街上？", "如果是那种有意思的事，随时找我"]
    },
    {
        question: "emmmm没什么事，就是想发消息给你",
        answers: ["我可没工夫陪你浪费时间", "没事就多发点你的涩情照片", "无聊就去找别的骚货玩玩"]
    },
    {
        question: "跟你说啊，我发现一家玩具店卖的毛绒玩具超可爱！",
        answers: ["你他妈的和我说这搞什么？觉得我很感兴趣吗？！", "荡妇，你很喜欢这些？嗯，很符合你", "能比得过我最爱的荡妇的一半吗？嗯？"]
    }
];

setup.CrazyChat = [
    {
		question: "我想当你的狗",
        answers: ["很高兴你有这个觉悟，骚货", "你不一直都是吗？", "很好，送你的项圈有好好戴着吧？"]
    },
    {
        question: "啊啊啊惠特尼！为了你，我变成狼人模样！！！",
        answers: ["......?", "荡妇，你还挺有抽象天赋的？", "狼人？有意思，给我看看"]
    },
    {
        question: "怎么办，好香草泥",
        answers: ["什么是好香草泥？...你以为我会问这个吗？", "我也很想把你草到走不动路，骚货", "你想的话随时可以，当然，是我草你"]
    }
];

setup.AskChat = [
    {
        question: "你在做什么？",
        answers: ["在想今天能换什么花样玩你", "来看看不就知道了？", "当然是在找乐子了"]
    },
    {
        question: "今天有什么打算吗？",
        answers: ["没有，和往常一样", "怎么，是想找我？", "当然是做大人该做的事，你也有这打算吧？"]
    },
    {
        question: "你有没有想我啊",
        answers: ["想操你是真的", "啧，别以为我和你一样喜欢整天腻歪在一块", "没有，毕竟我们每天都能见是吧？"]
    }
];

setup.addRandomChat = function(chatArrayName) {
    var chatArray = setup[chatArrayName];
    var chatArea = document.getElementById("ChatArea");

    var questionIndex = Math.floor(Math.random() * chatArray.length);
    var selectedQuestion = chatArray[questionIndex];

    var pcDiv = document.createElement("div");
    pcDiv.className = "PC-ChatContainer";

	/*为了ml能读图的修改部分，原为直接插入img src，但是读不了图*/
	var PCphotoType = State.variables.PC_phototype;
    var photoContent = "";

	if (PCphotoType === undefined || PCphotoType === "") {
        photoContent = `<div id="PC-ChatPhototype1"></div>`;
    } else {
        photoContent = `<div id="PC-ChatPhoto${PCphotoType}"></div>`;
    }

	pcDiv.innerHTML = `
        <div class="chat-bubble-container">
            <div class="chat-bubble">${selectedQuestion.question}</div>
        </div>
        ${photoContent}
    `;
	/*-------------*/

    chatArea.appendChild(pcDiv);

    var answerIndex = Math.floor(Math.random() * selectedQuestion.answers.length);
    var selectedAnswer = selectedQuestion.answers[answerIndex];

    var wDiv = document.createElement("div");
    wDiv.className = "W-ChatContainer";

	/*修改部分，同上*/
	var WphotoType = State.variables.W_phototype;
    var WphotoContent = "";

	if (WphotoType === undefined || WphotoType === "") {
        WphotoContent = `<div id="W-ChatPhototype1"></div>`;
    } else {
        WphotoContent = `<div id="W-ChatPhoto${WphotoType}"></div>`;
    }

	/*惠惠的活动状态判断,赋值在了widget里*/
	if (State.variables.W_state === "free"){
	wDiv.innerHTML = `
		${WphotoContent}
		<div id="W_chat-bubble-container">
			<div class="W_chat-bubble">${selectedAnswer}</div>
		</div>
        
    `;} else {
		if (State.variables.W_state === "park"){
			wDiv.innerHTML = `
				${WphotoContent}
				<div id="W_chat-bubble-container">
					<div class="W_chat-bubble">[自动回复]别烦我，知道吗？</div>
				</div>`;
		} else if (State.variables.W_state === "pub"){
			wDiv.innerHTML = `
				${WphotoContent}
				<div id="W_chat-bubble-container">
					<div class="W_chat-bubble">[自动回复]在酒吧，没空</div>
				</div>`;
		} else if (State.variables.W_state === "data"){
			wDiv.innerHTML = `
				${WphotoContent}
				<div id="W_chat-bubble-container">
					<div class="W_chat-bubble">是不是有点多此一举啊荡妇？</div>
				</div>`;
		}
	}
	/*-------------*/
    chatArea.appendChild(wDiv);
};

/*关闭手机界面*/
function closePhone() {
	wikifier("journalNotesTextareaSave");
	updateOptions();
	delete T.currentOverlay;
	delete V.tempDisable;
	T.buttons.reset();
	$("#PhoneOverlayContainer").css("display", "none");
}
window.closePhone = closePhone;