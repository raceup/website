$(function() {
	var data = [
		{
			name: "Design", value: 15, description: "Valutazione dell’efficienza, dell’efficacia e del grado di innovazione del progetto ", color: "#DF7134"
		},
		{
			name: "Acceleration", value: 10, description: "Accelerazione su rettilineo di 75 m", color: "#EFB800"
		},
		{
			name: "Endurance", value: 27.5, description: "Prova di durata in cui la monoposto dovrà percorrere 22 km in maniera efficiente, affidabile e nel minor tempo possibile", color: "#68AB40"
		},
		{
			name: "Skid pad", value: 7.5, description: "Due piloti e due prove di giri a otto ciascuno", color: "#5E90CA"
		},
		{
			name: "Cost", value: 10, description: "Valutazione del trade off tra costi e performance", color: "#4B65BB"
		},
		{
			name: "Autocross", value: 22.5, description: "Un giro di pista alla massima velocità, per testare appieno le prestazioni della macchina", color: "#2E3E73"
		},
		{
			name: "Business plan presentation", value: 7.5, description: "Business case per la promozione della propria azienda a potenziali investitori", color: "#9C9C9C"
		}
	];

	var chart = new iChart.Pie3D({
		render : "canvasDiv",
		data: data,
		sub_option : {
			mini_label_threshold_angle : 40,
			mini_label:{
				font: "Arial",
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
				font: "Arial",
				fontsize:11,
				fontweight:600,
				color : "#4572a7"
			},
			border : {
				width : 2,
				color : "#ffffff"
			},
			listeners:{
				parseText: function(d, t) {
					return d.get("value")+"%";
				},
				click: function(d, t) {
					var text = "<strong>" + d.get("name") + "</strong>: " + d.get("description");
					document.getElementById("chartDescription").innerHTML = text;
				}
			} 
		},
		legend:{
			font: "Arial",
			enable: true,
			padding:0,
			color:"#3e576f",
			fontsize:20,
			sign_size:20,
			line_height:28,
			offsetx:20,
			sign_space:10,
			border:false,
			align:"center",
			background_color : null
		},
		shadow : true,
		shadow_blur : 6,
		shadow_color : "#aaaaaa",
		shadow_offsetx : 0,
		shadow_offsety : 0,
		offsetx:0,
		background_color: null,
		align:"center",
		offset_angle:-90,
		width: 400,
		height: 800,
		radius: 130
	});

	chart.plugin(new iChart.Custom({
		drawFn:function(){
			chart.target.textAlign('start')
			.textBaseline('top')
			.textFont('600 20px Arial')
		}
	}));
	
	chart.draw();
});