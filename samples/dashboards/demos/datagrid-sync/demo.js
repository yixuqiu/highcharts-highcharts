const csvData = document.getElementById('csv').innerText;

const chartOptions = {
    xAxis: {
        type: 'category'
    },
    chart: {
        animation: false,
        type: 'column'
    },
    title: {
        text: 'Drag points to update the data grid'
    },
    plotOptions: {
        series: {
            dragDrop: {
                draggableY: true,
                dragPrecisionY: 1
            }
        }
    }
};

const board = Dashboards.boardAsync('container', {
    dataPool: {
        connectors: [{
            type: 'CSV',
            name: 'synchro-data',
            options: {
                csv: csvData,
                firstRowAsNames: true
            }
        }]
    },
    gui: {
        layouts: [{
            id: 'layout-1',
            rows: [{
                cells: [{
                    id: 'dashboard-col-0'
                }, {
                    id: 'dashboard-col-1'
                }, {
                    id: 'dashboard-col-2'
                }]
            }]
        }]
    },
    components: [
        {
            cell: 'dashboard-col-0',
            type: 'Highcharts',
            connector: {
                name: 'synchro-data'
            },
            sync: {
                highlight: true
            },
            columnKeyMap: {
                Food: 'x',
                'Vitamin A': 'y'
            },
            title: {
                text: 'allowConnectorUpdate: true',
                style: {
                    textAlign: 'center'
                }
            },
            chartOptions
        }, {
            cell: 'dashboard-col-1',
            connector: {
                name: 'synchro-data'
            },
            type: 'Highcharts',
            sync: {
                highlight: true
            },
            columnKeyMap: {
                Food: 'x',
                'Vitamin A': 'y'
            },
            title: {
                text: 'allowConnectorUpdate: false',
                style: {
                    textAlign: 'center'
                }
            },
            allowConnectorUpdate: false,
            chartOptions
        }, {
            cell: 'dashboard-col-2',
            connector: {
                name: 'synchro-data'
            },
            type: 'DataGrid',
            editable: true,
            sync: {
                highlight: true
            }
        }
    ]
});
