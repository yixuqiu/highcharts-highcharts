Highcharts.mapChart('container', {
    chart: {
        map: 'custom/europe'
    },
    title: {
        text: 'Labels marking POI\'s'
    },
    mapNavigation: {
        enabled: true
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        mappoint: {
            dataLabels: {
                align: 'left',
                x: -12,
                y: -5,
                enabled: true,
                shape: 'callout',
                backgroundColor: 'rgb(0 0 0 / 0.7)',
                borderRadius: 5,
                style: {
                    color: 'white'
                }
            },
            marker: {
                fillColor: '#ffffff',
                lineColor: '#000000',
                lineWidth: 1
            }
        }
    },
    series: [{
        name: 'Basemap',
        borderColor: '#A0A0A0',
        nullColor: 'rgba(0 96 0 / 0.2)'
    }, {
        type: 'mappoint',
        name: 'POI\'s',
        color: Highcharts.getOptions().colors[1],
        data: [{
            name: 'Vik i Sogn',
            lat: 61.087220,
            lon: 6.579700
        }, {
            name: 'Krakow',
            lon: 19.944981,
            lat: 50.064651
        }]
    }]
});