$(function() {
	var data = [
		{
			name: "Design", value: 15, color: "#DF7134"
		},
		{
			name: "Acceleration", value: 10, color: "#EFB800"
		},
		{
			name: "Endurance", value: 27.5, color: "#68AB40"
		},
		{
			name: "Skid Pad", value: 7.5, color: "#5E90CA"
		},
		{
			name: "Cost", value: 10, color: "#4B65BB"
		},
		{
			name: "Autocross", value: 22.5, color: "#2E3E73"
		},
		{
			name: "Business Plan Presentation", value: 7.5, color: "#9C9C9C"
		}
	];

	var chart = new iChart.Pie3D({
		render : "canvasDiv",
		data: data,
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
		background_color: null,
		align:"right",
		offsetx:-50,
		offset_angle:-90,
		width : 800,
		height : 400,
		radius:150
	});
	
	chart.draw();
});