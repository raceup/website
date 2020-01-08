/**
 * Checks if current page is the English version
*/
function isEnglishVersion() {
    return window.location.href.includes("/en/");
}

/**
 * Checks if current page is the Italian version
*/
function isItalianVersion() {
    return !isEnglishVersion();
}


/**
 * Gets data about competition for the English version
*/
function getCompetitionDataEnglish() {
    return [
        {
            name: 'Design',
            y: 15.0,
            description: 'Rating efficiency, effectiveness and innovation project degree'
        },
        {
            name: 'Acceleration',
            y: 10.0,
            description: 'Acceleration on a 75 m straight'
        },
        {
            name: 'Endurance',
            y: 27.5,
            description: 'Endurance race where single-seater has to ride 22 km in an efficient, reliable way as fast as possible'
        },
        {
            name: 'Skid pad',
            y: 7.5,
            description: 'Two drivers and two lap trials each in concentric circles in a figure of eight track'
        },
        {
            name: 'Cost',
            y: 10.0,
            description: 'Trade off rating between costs and performance'
        },
        {
            name: 'Autocross',
            y: 22.5,
            description: 'A maximum speed lap, to test the overall car performance'
        },
        {
            name: 'Business plan presentation',
            y: 7.5,
            description: 'Business case to promote our enterprise to potential investors'
        }
    ];
}

/**
 * Gets data about competition for the Italian version
*/
function getCompetitionDataItalian() {
    return [
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
    ];
}

/**
 * Retrieves competition data with the right language
*/
function getCompetitionData() {
    if (isEnglishVersion()) {
        return getCompetitionDataEnglish();
    } else if (isItalianVersion()) {
        return getCompetitionDataItalian();
    } else {
        return null;
    }
}

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
        data: getCompetitionData(),
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