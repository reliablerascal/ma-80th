var config = {
    style: 'mapbox://styles/robcat26/cllfi4uo901m701qleb6n02ik',
    
    //production access token specific to this project and restricted by URL:
    accessToken: 'pk.eyJ1Ijoicm9iY2F0MjYiLCJhIjoiY2xtNzJyMHR4NDN1bDNkcGdrenJnbHNzdyJ9.6Rihy6JzUdtXBEbhJGABuw',
   
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: '80 Years of Fortitude',
    subtitle: 'Ma Reid\'s First 80 Years on the Planet.',
    byline: 'By Kids | 6 September',
    //footer: 'See GitHub repository for methodology and data.<br>Created based on the <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    //leadPhoto: './images/calumet-park-beach-fence-16-9.jpg',
    // leadParagraph: 'Hegewisch and East Side, Chicago’s southeasternmost neighborhoods, possess an abundance of park space, including Eggers Grove, Wolf Lake, Calumet Park, and Hegewisch Marsh Park. The I-90 expressway and major streets including 106th Street and Ewing Avenue facilitate automobile access for far away visitors. But these resources remain underutilized, in part because access remains treacherous for local residents– especially cyclists.',
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
            image: 'images/olympia-back-yard2.jpg',
            description: 'In a backyard on Olympia Street in the 1940s, Grandparents Ignatz and Theresa stand big-eared and sad, respectively. Cousin Carol was the fun one, with her clarinet and games. And brother Gerry was an early champion of gender noncomformity until their great grandpa told him that only sissies wear short shorts.<br><br>"The houses were so close," Aunt Ann remembered about that block, "you could see what people were cooking for dinner."',
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
            id: 'harry-fran',
            alignment: 'left',
            hidden: false,
            //title: '',
            image: 'images/harry-fran.jpg',
            description: 'Her parents Harry and Fran moved a few times, but the family stayed close together.',
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
            id: 'college-ma',
            alignment: 'left',
            hidden: false,
            //title: '',
            image: 'images/college-ma.jpg',
            description: 'Year by year her feet kept growing bigger and bigger but so too did her brain and then one day she left to go to College.<p>It was there that she met Bon Jovi\'s mom.',
            location: {
                center:[-77.00978692284764, 38.914478205894575],
                zoom: 10,
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
            id: 'college-pa',
            alignment: 'left',
            hidden: false,
            //title: '',
            image: 'images/college-pa.jpg',
            description: 'But she also met Walter L. Reid, a tall dark and lonesome nerd who enjoyed blowing shit up with common homehold chemicals.',
            location: {
                center:[-77.00978692284764, 38.914478205894575],
                zoom: 10,
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
            image: 'images/mattapoisett-hobba.jpg',
            description: 'She tamed the mad scientist, like a horse, and together they moved to a small town by the sea. Walt became a Robot Designer and she ran the household.',
            location: {
                center: [-70.79544473295257, 41.656692358550984],
                zoom: 12,
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
            id: 'brian-teen',
            alignment: 'left',
            hidden: false,
            image: 'images/brian-teen.jpg',
            description: 'It was there that she raised a worry-free son&mdash; worry-free from the point of view of the laid-back and free-spirited son.<p>As all parents learn, even the most meticulously-layered lasagnas turn to spaghetti.',
            location: {
                center: [-70.79544473295257, 41.656692358550984],
                zoom: 12,
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
            description: 'And they tried to temper their hard-working daughter\'s dreams by warning her that buying a horse would cost a thousand dollars. She saved her money and bought a horse anyway.',
            location: {
                center: [-70.79544473295257, 41.656692358550984],
                zoom: 12,
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
            description: 'And then a third child who was weird, like third children tend to be.',
            location: {
                center: [-70.79544473295257, 41.656692358550984],
                zoom: 12,
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
            image: 'images/brian-patagonia.jpg',
            description: 'The worry-free child got away and moved to the mountains.',
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
            id: 'brian-family',
            alignment: 'left',
            hidden: false,
            image: 'images/chilenos-16-9.jpg',
            description: 'Where he met a mountain woman and began raising two children of his own.',
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
            image: 'images/sue-adult.jpg',
            description: 'The daughter stayed up north and exchanged her horse for a horseless carriage.<p>One day after they invented portable telephones that detached from the wall, she moved to the big city.<p>There she got a job yelling at greedy oil executives. Politely.',
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
            id: 'sue-adult2',
            alignment: 'left',
            hidden: false,
            image: 'images/sue-bill-clinton.jpg',
            description: 'She got big things done. For example, she made a former president look like a hobbit.',
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
            image: 'images/rob-chicago.jpg',
            description: 'The youngest child was always thirsty so he moved far away to be next to a big lake.',
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
            id: 'rob-adult2',
            alignment: 'left',
            hidden: false,
            image: 'images/rob-pca.jpg',
            description: 'He brushed his teeth every day, just like his mom taught him. This helped him get acquainted with people who gave him money.',
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
            id: 'mahjong',
            alignment: 'left',
            hidden: false,
            image: 'images/mahjong.jpg',
            description: 'Back on the homefront, Ma Reid hosts Mah Jong games. The hidden agenda of this club is to strengthen the fabric of the Mattapoisett Gossip Network- a key deterrent against crime.',
            location: {
                center: [-70.79544473295257, 41.656692358550984],
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
        },
        
        
        {
            id: 'rowing',
            alignment: 'left',
            hidden: false,
            image: 'images/whaleboat-rowing.jpg',
            description: 'And she propelled whale boats. Just like Queequeg, only better-looking and with fewer tattoos, and in a harbor with no whales.',
            location: {
                center: [-70.91144392146433,41.64131399413769],
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
        },
        


        {
            id: 'nurse',
            alignment: 'left',
            hidden: false,
            image: 'images/center-school.jpg',
            description: 'And she also served the community through volunteer hospice work and substitute school nursing. It was at Center School where she provided emergency psychological support for one of her youngest child\'s classmates, who suffered from getting "air in my eye".',
            location: {
                center: [-70.81369571575591, 41.66070874238411],
                zoom: 15,
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
        },
        

        {
            id: 'library',
            alignment: 'left',
            hidden: false,
            image: 'images/mattapoisett-library.jpg',
            description: 'And to this day she volunteers to share books with the bookless, young and old, at the Mattapoisett Library.',
            location: {
                center: [-70.8129227311001, 41.65934809338627],
                zoom: 15,
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
        },
        
        
        {
            id: 'cisco-80th',
            alignment: 'left',
            hidden: false,
            image: 'images/cisco-80th.jpg',
            description: 'And then one day last summer her three children all came back together to celebrate eighty years of Ma Reid, remembering none of their lives would be possible without her.<p>Happy 80th Birthday, ma!<p>Love,<br>kids',
            location: {
                center: [-70.90582241946332,
                    41.61078652158195],
                zoom: 14,
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
