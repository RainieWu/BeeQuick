// 热门搜索每行第一个的样式
var ulLists = document.getElementById("hotSearch").getElementsByClassName("mui-table-view");
for(var i = 0; i < ulLists.length; i ++) {
	var liLists = ulLists[i].getElementsByTagName("li");
	for(var j = 1; j < liLists.length; j ++) {
		if(liLists[j].offsetLeft == 0) {
			liLists[j].className = "mui-table-view-cell firstLi";
		}
	}
}


// 清除历史记录功能
var historyList = document.getElementById("historySearch");
var cleanHistory = document.getElementById("cleanHistory");
cleanHistory.addEventListener("tap", function() {
	historyList.innerHTML = "";
});