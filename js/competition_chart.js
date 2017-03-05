point = null;
var chart = new Highcharts.chart('competitionChart', {
    chart: {
        type: 'pie',
        backgroundColor: '#f3f6fa',  // same as page background
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        }
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },
    series: [{
        type: 'pie',
        name: 'Share',
        data: [
            {
            	name: 'Design',
            	y: 15.0,
            	description: 'Valutazione dell’efficienza, dell’efficacia e del grado di innovazione del progetto'
            },
            {
            	name: 'Acceleration',
            	y: 10.0,
            	description: 'Accelerazione su rettilineo di 75 m'
            },
            {
            	name: 'Endurance',
            	y: 27.5,
            	description: 'Prova di durata in cui la monoposto dovrà percorrere 22 km in maniera efficiente, affidabile e nel minor tempo possibile'
            },
            {
            	name: 'Skid pad',
            	y: 7.5,
            	description: 'Due piloti e due prove di giri a otto ciascuno'
            },
            {
            	name: 'Cost',
            	y: 10.0,
            	description: 'Valutazione del trade off tra costi e performance'
            },
            {
            	name: 'Autocross',
            	y: 22.5,
            	description: 'Un giro di pista alla massima velocità, per testare appieno le prestazioni della macchina'
            },
            {
            	name: 'Business plan presentation',
            	y: 7.5,
            	description: 'Business case per la promozione della propria azienda a potenziali investitori'
            }
        ],
        point: {
        	events: {
        		click: function (event) {
			    	var seriesName = this.name;
			    	var seriesDescription = this.description;
			    	$('#chartTooltip').html('<strong>' + seriesName + '</strong>: ' + seriesDescription);
        		}
        	}
        }
    }]
});
