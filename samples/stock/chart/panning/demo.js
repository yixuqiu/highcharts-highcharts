(async () => {

    const usdeur = await fetch(
        'https://www.highcharts.com/samples/data/usdeur.json'
    ).then(response => response.json());

    Highcharts.stockChart('container', {

        chart: {
            panning: {
                enabled: true,
                type: 'xy'
            },
            panKey: 'alt',
            zooming: {
                type: 'xy'
            }
        },

        title: {
            text: 'Zooming and panning'
        },

        subtitle: {
            text: 'Click and drag to zoom in. Hold down alt key to pan in ' +
                'both direction.'
        },

        rangeSelector: {
            selected: 1
        },

        series: [{
            name: 'USD to EUR',
            data: usdeur
        }]
    });
})();