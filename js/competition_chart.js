$(function() {
	var data = [
		{
			name: "Element 0", value: 10, color: "#4572a7"
		},
		{
			name: "Element 1", value: 20, color: "#aa4643"
		},
		{
			name: "Element 2", value: 30, color: "#89a54e"
		},
		{
			name: "Element 3", value: 20, color: "#80699b"
		},
		{
			name: "Element 4", value: 20, color: "#3d96ae"
		}
	];

	var chart = new iChart.Pie3D({
		render : "canvasDiv",
		data: data,
		title : {
			text : "Title",
			height:40,
			fontsize : 30,
			color : "#282828"
		},
		footnote : {
			text : "footnote",
			color : "#486c8f",
			fontsize : 12,
			padding : "0 38"
		},
		sub_option : {
			mini_label_threshold_angle : 40,
			mini_label:{
				fontsize:20,
				fontweight:600,
				color : "#ffffff"
			},
			label : {
				background_color:null,
				sign:false,
				padding:"0 4",
				border:{
					enable:false,
					color:"#666666"
				},
				fontsize:11,
				fontweight:600,
				color : "#4572a7"
			},
			border : {
				width : 2,
				color : "#ffffff"
			},
			listeners:{
				parseText:function(d, t){
					return d.get("value")+"%";
				}
			} 
		},
		legend:{
			enable:true,
			padding:0,
			offsetx:120,
			offsety:50,
			color:"#3e576f",
			fontsize:20,
			sign_size:20,
			line_height:28,
			sign_space:10,
			border:false,
			align:"left",
			background_color : null
		}, 
		shadow : true,
		shadow_blur : 6,
		shadow_color : "#aaaaaa",
		shadow_offsetx : 0,
		shadow_offsety : 0,
		background_color:"#f1f1f1",
		align:"right",
		offsetx:-100,
		offset_angle:-90,
		width : 800,
		height : 400,
		radius:150
	});
	
	chart.plugin(new iChart.Custom({
		drawFn:function(){
			
			chart.target.textAlign("start")
				.textBaseline("top")
				.textFont("600 20px Verdana")
				.fillText("Market Fragmentation:\nTop Mobile\nOperating Systems",120,80,false,"#be5985",false,24)
				.textFont("600 12px Verdana")
				.fillText("Source:ComScore,2012",120,160,false,"#999999");
		}
	}));
	
	chart.draw();
});