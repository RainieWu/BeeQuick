var ulLists =document.getElementById("hotSearch").getElementsByClassName("mui-table-view");

for(var i = 0; i < ulLists.length; i ++) {
	var liLists = ulLists[i].getElementsByTagName("li");
	for(var j = 1; j < liLists.length; j ++) {
		if(liLists[j].offsetLeft == 0) {
			liLists[j].className = "mui-table-view-cell firstLi";
		}
	}
}