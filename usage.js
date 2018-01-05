
<div class="ps_flpk">
	<div class="result"></div>
</div>


$('.ps_flpk').ps_flpk({
	// 設定動畫在多久內完成
	speed:1000
});

$('.ps_flpk').ps_flpk('assignPercent', 50, function( progressNumber ) {
	console.log(progressNumber);
});

/*
規則如下(也可參照示意圖)：(100 - 已完成進度百分比) * 0.2 + 已完成的進度百分比 = 進度條要跑到的百分比
例如：
第1次回傳資料：(100-0)*0.2+0=20
第2次回傳資料：(100-20)*0.2+20=36
第3次回傳資料：(100-36)*0.2+36=48.8
第4次以此類推...
 */

$('.ps_flpk').ps_flpk('nextProgress', function( progressNumber ) {
	var x = true;
	console.log(progressNumber, x);
});

$('.ps_flpk').ps_flpk('doneProgress', function( progressNumber ) {
	console.log(progressNumber);
});

$('.ps_flpk').ps_flpk('zeroProgress', function( progressNumber ) {
	console.log(progressNumber);
});


