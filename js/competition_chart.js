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
	width: '100%',
  	height: '100%',
	labelInterpolationFnc: Chartist.noop
}

var responsiveOptions = [
        [
        	'screen and (min-width: 0px)',
        	{
                labelOffset: 30,
                chartPadding: 10,
	        }
	    ],[
        	'screen and (min-width: 300px)',
        	{
                labelOffset: 40,
                chartPadding: 20,
	        }
	    ],[
        	'screen and (min-width: 400px)',
        	{
                labelOffset: 50,
                chartPadding: 30,
	        }
	    ],[
        	'screen and (min-width: 500px)',
        	{
                labelOffset: 110,
                chartPadding: 40,
	        }
	    ],[
        	'screen and (min-width: 600px)',
        	{
                labelOffset: 90,
                chartPadding: 50,
                labelDirection: 'explode',
	        }
	    ],[
        	'screen and (min-width: 700px)',
        	{
                labelOffset: 60,
                chartPadding: 80,
	        }
	    ],[
        	'screen and (min-width: 900px)',
        	{
                labelOffset: 70,
                chartPadding: 100,
	        }
	    ],[
        	'screen and (min-width: 1024px)',
        	{
                labelOffset: 80,
                chartPadding: 150,
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