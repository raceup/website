var data = {
	labels: [
		"Design", "Acceleration", "Endurance", "Skid pad", "Cost", "Autocross", "Bpp"
	],
	series: [
		{
			value: 15,
			meta: "Design"
		},
		{
			value: 10,
			meta: "Acceleration"
		},
		{
			value: 27.5,
			meta: "Endurance"
		},
		{
			value: 7.5,
			meta: "Skid pad"
		},
		{
			value: 10,
			meta: "Cost"
		},
		{
			value: 22.5,
			meta: "Autocross"
		},
		{
			value: 7.5,
			meta: "Business plan presentation"
		}
	]
};

var dataDescription = {
	"Design": "Valutazione dell’efficienza, dell’efficacia e del grado di innovazione del progetto",
	"Acceleration": "Accelerazione su rettilineo di 75 m",
	"Endurance": "Prova di durata in cui la monoposto dovrà percorrere 22 km in maniera efficiente, affidabile e nel minor tempo possibile",
	"Skid pad": "Due piloti e due prove di giri a otto ciascuno",
	"Cost": "Valutazione del trade off tra costi e performance",
	"Autocross": "Un giro di pista alla massima velocità, per testare appieno le prestazioni della macchina",
	"Business plan presentation": "Business case per la promozione della propria azienda a potenziali investitori"
}

var options = {
	labelInterpolationFnc: Chartist.noop
}

var responsiveOptions = [
        [
        	'screen and (min-width: 0px)',
        	{
                labelOffset: 30
	        }
	    ],[
        	'screen and (min-width: 300px)',
        	{
                labelOffset: 40
	        }
	    ],[
        	'screen and (min-width: 400px)',
        	{
                labelOffset: 50,
	        }
	    ],[
        	'screen and (min-width: 500px)',
        	{
                labelOffset: 110,
	        }
	    ],[
        	'screen and (min-width: 600px)',
        	{
                chartPadding: 30,
                labelOffset: 110,
                labelDirection: 'explode',
	        }
	    ],[
        	'screen and (min-width: 700px)',
        	{
                labelOffset: 60,
	        }
	    ],[
        	'screen and (min-width: 900px)',
        	{
                labelOffset: 70,
	        }
	    ],[
        	'screen and (min-width: 1024px)',
        	{
                labelOffset: 80,
                chartPadding: 20
	        }
        ]
];

var chart = new Chartist.Pie('.ct-chart', data, options, responsiveOptions);
chart.on('draw', function() {
    $('.ct-chart').on('click', function(event) {
    	var $point = event.target;
    	var seriesName = $point.getAttribute('ct:meta');
    	var seriesDescription = dataDescription[seriesName];
    	
    	if (seriesName != null) {
    		$('#chartTooltip').html('<strong>' + seriesName + '</strong>: ' + seriesDescription);
    	}
    });
});