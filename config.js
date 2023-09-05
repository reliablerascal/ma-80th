// 9/4/23 recommit after failed build

var config = {
    style: 'mapbox://styles/robcat26/cllfi4uo901m701qleb6n02ik',
    
    //production access token specific to this project and restricted by URL:
    //accessToken: 'pk.eyJ1Ijoicm9iY2F0MjYiLCJhIjoiY2xtMHpwNmtpMGV4ZTNkbTFmazczNXJqNSJ9.l9P-WMfiDKXg4Iv74yVueA',
    //public access token for offline testing:
    accessToken: 'pk.eyJ1Ijoicm9iY2F0MjYiLCJhIjoiY2xtNWF5bGYzMDNkbTNubzhnZTJxZ2x3ZyJ9.s980uralAwWmIhegxpNs2A',
   
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    chapters: [
        {
            id: 'christening',
            alignment: 'left',
            hidden: false,
            image: 'images/christening-madeline-burns.jpg',
            description: '<em>"Let the little children come to me, and do not hinder them, for the kingdom of heaven belongs to such as these."</em><br>-Jesus H. Christ<br><br>The newly christened and still portable Madeline Burns was raised in Detroit by a big extended family including grandpa Ignatz and Aunt Bernadine.',
            location: {
            center: [-83.04919, 42.33124],
            zoom: 11.75,
            pitch: 0.00,
            bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            //callback: 'enterMapTop',
            onChapterEnter: [                  
            ],
            onChapterExit: [
            ]
        },
    
        {
            id: 'olympia-back-yard',
            alignment: 'left',
            hidden: false,
            //title: '',
            image: 'images/olympia-back-yard.jpg',
            description: 'In a backyard on Olympia Street in the 1940s, Grandparents Ignatz and Theresa stand big-eared and sad, respectively. Cousin Carol was the fun one, with her clarinet and games. And brother Gerry was an early champion of gender noncomformity until your great grandpa told him that only sissies wear short shorts.<br><br>"The houses were so close," Aunt Ann remembered about that block, "you could see what people were cooking for dinner."',
            location: {
                center:[-83.01988281756495, 42.39674505093596],
                zoom: 17,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                //{layer: 'map', opacity:1},
                //{layer: 'mapboxgl-canvas', opacity:1},
                // {layer: 'bike-path-dot', opacity:0},
                // {layer: 'mapbox-satellite', opacity:0}
            ],
            onChapterExit: []
        },

        {
            id: 'mattapoisett',
            alignment: 'left',
            hidden: false,
            //title: '',
            //image: 'images/olympia-back-yard.jpg',
            description: 'And then she married a Robot Designer and moved to a small town by the sea. They had three kids of their own.',
            location: {
                center: [-70.79544473295257, 41.656692358550984],
                zoom: 17,
                pitch: 0.00,
                bearing: 0.00,
                speed: 0.5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                //{layer: 'map', opacity:1},
                //{layer: 'mapboxgl-canvas', opacity:1},
                // {layer: 'bike-path-dot', opacity:0},
                // {layer: 'mapbox-satellite', opacity:0}
            ],
            onChapterExit: []
        },

        {
            id: 'disney',
            alignment: 'left',
            hidden: false,
            image: 'images/family-disney.jpg',
            description: 'Once in a while they got away, but brought their responsibilities with them. Cheers to all the mothers who persist through the years when their kids aren\'t "there yet," can\'t stand the cold and rain, and suffer from intersnack ennui.',
            location: {
                center: [-81.58854923290069,28.412160991150028],
                zoom: 12.75,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {layer: 'bike-lanes', opacity:0},
                // {layer: 'bike-path-dot', opacity:0},
                // {layer: 'mapbox-satellite', opacity:0},
                // {layer: 'park-hegewisch', opacity:0.5}
            ],
            onChapterExit: [
                // {layer: 'park-hegewisch', opacity:0}
            ]
        },
        
        
        
        {
            id: 'brian-teen',
            alignment: 'left',
            hidden: false,
            //image: 'images/family-disney.jpg',
            description: 'One child...',
            location: {
                center: [-70.79544473295257, 41.656692358550984],
                zoom: 16,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {layer: 'bike-lanes', opacity:0},
                // {layer: 'bike-path-dot', opacity:0},
                // {layer: 'mapbox-satellite', opacity:0},
                // {layer: 'park-hegewisch', opacity:0.5}
            ],
            onChapterExit: [
                // {layer: 'park-hegewisch', opacity:0}
            ]
        },
        
        
        
        {
            id: 'sue-teen',
            alignment: 'left',
            hidden: false,
            image: 'images/sue-horse.jpg',
            description: 'One got a horse.',
            location: {
                center: [-70.79544473295257, 41.656692358550984],
                zoom: 16,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {layer: 'bike-lanes', opacity:0},
                // {layer: 'bike-path-dot', opacity:0},
                // {layer: 'mapbox-satellite', opacity:0},
                // {layer: 'park-hegewisch', opacity:0.5}
            ],
            onChapterExit: [
                // {layer: 'park-hegewisch', opacity:0}
            ]
        },
        
        
        
        {
            id: 'rob-teen',
            alignment: 'left',
            hidden: false,
            image: 'images/rob-saxophone.jpg',
            description: 'And the youngest one took up the saxophone.',
            location: {
                center: [-70.79544473295257, 41.656692358550984],
                zoom: 16,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {layer: 'bike-lanes', opacity:0},
                // {layer: 'bike-path-dot', opacity:0},
                // {layer: 'mapbox-satellite', opacity:0},
                // {layer: 'park-hegewisch', opacity:0.5}
            ],
            onChapterExit: [
                // {layer: 'park-hegewisch', opacity:0}
            ]
        },
        
        
        
        {
            id: 'brian-adult',
            alignment: 'left',
            hidden: false,
            //image: 'images/family-disney.jpg',
            description: 'And then one child moved to the mountains.',
            location: {
                center: [-72.0692766642197, -45.571012224369944],
                zoom: 11.75,
                pitch: 0.00,
                bearing: 0.00,
                speed: 0.5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {layer: 'bike-lanes', opacity:0},
                // {layer: 'bike-path-dot', opacity:0},
                // {layer: 'mapbox-satellite', opacity:0},
                // {layer: 'park-hegewisch', opacity:0.5}
            ],
            onChapterExit: [
                // {layer: 'park-hegewisch', opacity:0}
            ]
        },
        
        
        
        {
            id: 'sue-adult',
            alignment: 'left',
            hidden: false,
            //image: 'images/family-disney.jpg',
            description: 'One moved to the big city.',
            location: {
                center: [-71.11146103203546, 42.31405083540617],
                zoom: 11.75,
                pitch: 0.00,
                bearing: 0.00,
                speed: 0.5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {layer: 'bike-lanes', opacity:0},
                // {layer: 'bike-path-dot', opacity:0},
                // {layer: 'mapbox-satellite', opacity:0},
                // {layer: 'park-hegewisch', opacity:0.5}
            ],
            onChapterExit: [
                // {layer: 'park-hegewisch', opacity:0}
            ]
        },
        
        
        
        {
            id: 'rob-adult',
            alignment: 'left',
            hidden: false,
            //image: 'images/family-disney.jpg',
            description: 'And the other moved next to a big lake.',
            location: {
                center: [-87.6386467712649, 41.878267783834296],
                zoom: 12.75,
                pitch: 0.00,
                bearing: 0.00,
                speed: 0.5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {layer: 'bike-lanes', opacity:0},
                // {layer: 'bike-path-dot', opacity:0},
                // {layer: 'mapbox-satellite', opacity:0},
                // {layer: 'park-hegewisch', opacity:0.5}
            ],
            onChapterExit: [
                // {layer: 'park-hegewisch', opacity:0}
            ]
        },
        
        
        
        {
            id: 'cisco-80th',
            alignment: 'left',
            hidden: false,
            image: 'images/cisco-80th.jpg',
            description: 'But they all came back together to celebrate Ma Reid.',
            location: {
                center: [-70.90574731761106,
                    41.610746413260415],
                zoom: 12,
                pitch: 0.00,
                bearing: 0.00,
                speed: 0.5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ 
                // {layer: 'bike-lanes', opacity:1},
                // {layer: 'bike-path-dot', opacity:0},
                // {layer: 'mapbox-satellite', opacity:0}
            ],
            onChapterExit: [
            ]
        }
        
        
        
        
        
        
//end chapters


    ]
};
