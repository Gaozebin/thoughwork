/**
	添加表单元素
*/
$("#submitSelect").click(function(){
	var selectValue = $("#selectValue").val();
	if(selectValue != ""){
		$("#wordList").append(`
 			<tr>
		         <td>`+ selectValue +`</td>
		         <td>
		         	<button class="deleteTheWord">删除</button>
			    	
		         </td>
	      	</tr>
		`);
		$(".deleteTheWord").click(function(){
			$(this).parent().parent("tr").remove();
		});
	} else{
		alert("添加不能为空！！！！！");
	}
	$("#cancleSelect").click();
});

/**
	切换显示
*/
$("#seeAll").click(function(){
	var seeAll = $("#seeAll").text();
	if (seeAll == "预览") {
		$("#seeAll").text("编辑");
	
	} else{
		$("#seeAll").text("预览");
	}
	$("#addText1").toggle();
	$(".deleteTheWord").toggle();
});