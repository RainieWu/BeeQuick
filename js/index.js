var marginTop = document.getElementById("carousel").offsetHeight + document.getElementById("menu").offsetHeight;
var windowHeight = document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight;

document.getElementById("pullrefresh").style.marginTop = marginTop + "px";
document.getElementById("pullrefresh").style.height = windowHeight - marginTop - 60 + "px";


mui.init({
	pullRefresh: {
		container: '#pullrefresh',
		up: {
			contentrefresh: '正在加载...',
			callback: pullupRefresh
		}
	}
});
	
var count = 0;
function pullupRefresh() {
	setTimeout(function() {
		mui('#pullrefresh').pullRefresh().endPullupToRefresh((++count > 2));
		var table = document.body.querySelector('.mui-table-view');
		var cells = document.body.querySelectorAll('.mui-table-view-cell');
		for (var i = cells.length, len = i + 5; i < len; i++) {
			if(i % 2 == 1) {
				var li = document.createElement("li");
				li.className = "mui-table-view-cell product1";
				table.appendChild(li);
			} else {
				var li = document.createElement("li");
				li.className = "mui-table-view-cell product2";
				table.appendChild(li);
			}
			
			li.addEventListener("tap", function() {
				window.location.href = "detail.html";
			});
						
			var rowDiv = document.createElement("div");
			rowDiv.className = "mui-row";
			li.appendChild(rowDiv);
						
			var div1 = document.createElement("div");
			div1.className = "mui-col-xs-6 productLeft";
			rowDiv.appendChild(div1);
						
			var title = document.createElement("p");
			title.className = "title";
			title.innerHTML = "Fresh奶";
			div1.appendChild(title);
						
			var detailDiv = document.createElement("div");
			detailDiv.className = "productDetails";
			div1.appendChild(detailDiv);
						
			var price = document.createElement("p");
			price.className = "price";
			price.innerHTML = "光明畅优乳杆菌<span class='priceNum'>6</span>元/<span>2</span>瓶";
			detailDiv.appendChild(price);
						
			var discount = document.createElement("p");
			discount.className = "discount";
			discount.innerHTML = "更多优惠 低至5折";
			detailDiv.appendChild(discount);
						
			if(i % 2 == 1) {
				var div2 = document.createElement("div");
				div2.className = "mui-col-xs-6";
				div2.innerHTML = "<img src='img/home/product1.png' />";
				rowDiv.appendChild(div2);
			} else {
				var div2 = document.createElement("div");
				div2.className = "mui-col-xs-6 imgBox";
				div2.innerHTML = "<img src='img/home/product2.png' />";
				rowDiv.appendChild(div2);
			}
		}
	}, 1000);
}
if (mui.os.plus) {
	mui.plusReady(function() {
		setTimeout(function() {
			mui('#pullrefresh').pullRefresh().pullupLoading();
		}, 1000);
	});
} else {
	mui.ready(function() {
		mui('#pullrefresh').pullRefresh().pullupLoading();
	});
}


var segmentedControlContents = document.getElementById("segmentedControlContents");

for(var i = 1; i <= document.getElementById("segmentedControls").childElementCount; i ++) {
	var content = document.createElement("div");
	content.id = "content" + i;
	if(i == 1) {
		content.className = "mui-control-content mui-active";
	} else {
		content.className = "mui-control-content";
	}
	segmentedControlContents.appendChild(content);
	
	var p = document.createElement("p");
	p.innerHTML = "优选水果" + i;
	content.appendChild(p);
	
	var ul = document.createElement("ul");
	ul.className = "mui-table-view";
	content.appendChild(ul);
	
	for(var j = 1; j <= 10; j ++) {
		var li = document.createElement("li");
		li.className = "mui-table-view-cell";
		ul.appendChild(li);
		
		var rowDiv = document.createElement("div");
		rowDiv.className = "mui-row";
		li.appendChild(rowDiv);
		
		var col4Div = document.createElement("div");
		col4Div.className = "mui-col-xs-4";
		col4Div.innerHTML = "<img src='img/type/pic.jpg' />";
		rowDiv.appendChild(col4Div);
		
		var col8Div = document.createElement("div");
		col8Div.className = "mui-col-xs-8";
		rowDiv.appendChild(col8Div);
		
		var nameP = document.createElement("p");
		nameP.className = "name";
		nameP.innerHTML = "<span>精选</span>爱鲜蜂-佳沛绿奇异果" + i + "-" + j;
		col8Div.appendChild(nameP);
		
		var discount = document.createElement("p");
		discount.className = "discount";
		discount.innerHTML = "买一赠一";
		col8Div.appendChild(discount);
		
		var num = document.createElement("p");
		num.className = "num";
		num.innerHTML = "3粒/盒";
		col8Div.appendChild(num);
		
		var price = document.createElement("p");
		price.className = "price";
		price.innerHTML = "&yen;16.9";
		col8Div.appendChild(price);
		
		var addBtn = document.createElement("a");
		addBtn.className = "addBtn";
		col8Div.appendChild(addBtn);
	}
}

/*
var homePage = document.getElementById("home");
var typePage = document.getElementById("type");
var minePage = document.getElementById("mine");


if(homePage.classList.length == 2) {
	console.log("home");
}
if(typePage.classList.length == 2) {
	console.log("type");
}
if(minePage.classList.length == 2) {
	console.log("mine");
}


var nav = document.getElementsByTagName("nav")[0];
nav.addEventListener("tap", function() {
	//alert("233");
	if(homePage.classList.length == 2) {
	console.log("home");
}
if(typePage.classList.length == 2) {
	console.log("type");
}
if(minePage.classList.length == 2) {
	console.log("mine");
}
});
*/
