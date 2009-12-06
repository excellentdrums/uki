uki([
    { view: 'Base', rect: '0 0 1000 31', autosize: 'width', anchors: 'left top right', background: 'theme(panel)',
        childViews: { view: 'TextField', rect: '800 5 190 20', anchors: 'right', placeholder: 'Search' }
    },
    { view: 'SplitPane', rect: '0 30 1000 600', autosize: 'width height', anchors: 'left top right bottom', 
        handlePosition: 300, autogrowLeft: false, autogrowRight: true, autogrowLeft: false, handleWidth: 1, rightMin: 400, leftMin: 150,
        leftChildViews:
            { view: 'ScrollPane', rect: '0 0 300 600', anchors: 'top left right bottom', autosize: 'width height', background: '#0F0',
                childViews: { view: 'Base', rect: '10 10 280 300', anchors: 'top left right', autosize: 'width', background: '#F00' }
            },
        rightPane: {
            background: '#D0D7E2',
            childViews: { view: 'ScrollPane', rect: '0 0 699 600', anchors: 'top left right bottom', autosize: 'width height',
                scrollableH: true, scrollableV: true,
                childViews: { view: 'Base', rect: '10 10 480 300', anchors: 'top left right', autosize: '', background: '#F00' }
            }
        }
    }
]).attachTo( window, '1000 630' );

// uki('ScrollPane').attr('background', '#D0D7E2')
// uki('ScrollPane').attr('background', '#0F0')
// uki('ScrollPane')[0].dom().className = 'ScrollPane';