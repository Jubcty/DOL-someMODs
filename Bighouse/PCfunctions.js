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
    // Store the selected value in the SugarCube State
    State.variables.selectedItem = $("#LiDropdown").val();
  }
  window.setupPurchase = setupPurchase;

  //jq

setup.handlePhotoSelection = function() {
	// 获取被选中的radio按钮的值
	var selectedType = $('input[name="Photoselect"]:checked').val();
	// 设置SugarCube变量$W_phototype
	State.variables.W_phototype = selectedType;
	$('input[name="Photoselect"]').prop('checked', false);
  };

setup.handlePCPhotoSelection = function() {
	// 获取被选中的radio按钮的值
	var selectedType = $('input[name="PCPhotoselect"]:checked').val();
	// 设置SugarCube变量$PC_phototype
	State.variables.PC_phototype = selectedType;
	$('input[name="PCPhotoselect"]').prop('checked', false);
  };

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

/*魔改js*/
function closePhone() {
	wikifier("journalNotesTextareaSave");
	updateOptions();
	delete T.currentOverlay;
	delete V.tempDisable;
	T.buttons.reset();
	$("#PhoneOverlayContainer").css("display", "none");
}
window.closePhone = closePhone;