const FilmsData = [
    {
        "id": 1,
        "Image": 'assets/starwar.jpg',
        "Title": "Star Wars: Episode IV",
        "Clip": 'https://www.youtube.com/embed/vZ734NWnAHA?si=ZQztXMqSVBSsh6X6',
        "Year": "1977",
        "Nation": "USA",
        "Detail": "Star Wars: Episode IV - A New Hope is a classic space-opera film directed by George Lucas. It follows the journey of Luke Skywalker as he joins forces with a band of rebels to fight against the evil Galactic Empire. The film gained widespread acclaim for its groundbreaking special effects and captivating storyline, making it one of the most iconic and influential films in cinematic history."
    },
    {
        "id": 2,
        "Image": "assets/amelie.jpg",
        "Title": "Amélie",
        "Clip": 'https://www.youtube.com/embed/HUECWi5pX7o?si=zpFzLn10pHDVvXul',
        "Year": "2001",
        "Nation": "France",
        "Detail": "Amélie is a heartwarming French romantic comedy directed by Jean-Pierre Jeunet. It tells the story of a whimsical young woman named Amélie who sets out on a mission to positively impact the lives of those around her. The film's quirky and charming narrative, along with its visually appealing cinematography, has made it a beloved classic among audiences worldwide."
    },
    {
        "id": 3,
        "Image": "assets/CrouchingTiger_HiddenDragon.jpg",
        "Title": "Crouching Tiger",
        "Clip": 'https://www.youtube.com/embed/WdhvxJZDqzU?si=CzSzS5ZBZghA73o_',
        "Year": "2000",
        "Nation": "Taiwan",
        "Detail": "Crouching Tiger, Hidden Dragon is an acclaimed Taiwanese martial arts film directed by Ang Lee. It revolves around the pursuit of a stolen sword in ancient China and showcases breathtaking fight sequences combined with a deeply emotional storyline. The film's stunning cinematography and profound exploration of themes such as love and honor have solidified its place as a masterpiece in the wuxia genre."
    },
    {
        "id": 4,
        "Image": "assets/Pan_Labyrinth.jpg",
        "Title": "Pan's Labyrinth",
        "Clip": 'https://www.youtube.com/embed/jVZRnnVSQ8k?si=bW5GtlwpDLzJypPM',
        "Year": "2006",
        "Nation": "Spain",
        "Detail": "Pan's Labyrinth is a dark fantasy film directed by Guillermo del Toro. Set in post-Civil War Spain, the movie intertwines the real world with a mythical underworld. It tells the tale of a young girl named Ofelia who discovers a mysterious labyrinth and encounters magical creatures. The film's captivating visuals, compelling storytelling, and exploration of themes such as escapism and resistance have earned it critical acclaim and a dedicated fan base."
    },
    {
        "id": 5,
        "Image": "assets/Life_is_Beautiful.jpg",
        "Title": "Life is Beautiful",
        "Clip": 'https://www.youtube.com/embed/8CTjcVr9Iao?si=tm2qkOknLXaDE7O8',
        "Year": "1997",
        "Nation": "Italy",
        "Detail": "Life is Beautiful is an Italian tragicomedy directed by and starring Roberto Benigni. It follows the story of a Jewish Italian bookshop owner who uses his humor and imagination to shield his son from the harsh realities of a Nazi concentration camp. The film delicately balances humor and tragedy, portraying the power of love and the resilience of the human spirit even in the darkest of times."
    },
    {
        "id": 6,
        "Image": "assets/Spirited_Away.jpg",
        "Title": "Spirited Away",
        "Clip": 'https://www.youtube.com/embed/ByXuk9QqQkk?si=05Y-6TDsSfvI3Ek4',
        "Year": "2001",
        "Nation": "Japan",
        "Detail": "Spirited Away, directed by Hayao Miyazaki, is a Japanese animated fantasy film. It tells the story of a young girl named Chihiro who becomes trapped in a spirit world where her parents are transformed into pigs. As she navigates this mystical realm, she encounters various spirits and undergoes a transformative journey of courage and self-discovery. The film's enchanting visuals, rich storytelling, and exploration of themes such as identity and environmentalism have made it a beloved classic worldwide."
    },
    {
        "id": 7,
        "Image": "assets/City_of_God.jpg",
        "Title": "City of God",
        "Clip": 'https://www.youtube.com/embed/dcUOO4Itgmw?si=ysE2BvfjtcNcenQH',
        "Year": "2002",
        "Nation": "Brazil",
        "Detail": "City of God is a Brazilian crime drama film directed by Fernando Meirelles. It portrays the harsh realities of life in the crime-ridden streets of the Cidade de Deus suburb in Rio de Janeiro. The film interweaves multiple narratives to depict the rise of organized crime and the challenges faced by the youth living in the favelas. Its raw portrayal of violence and poverty, coupled with its dynamic storytelling, has solidified its place as one of the most impactful films in Brazilian cinema."
    },
    {
        "id": 8,
        "Image": "assets/La_La_Land.jpg",
        "Title": "La La Land",
        "Clip": 'https://www.youtube.com/embed/0pdqf4P9MB8?si=is1OSUdw_sr0myla',
        "Year": "2016",
        "Nation": "USA",
        "Detail": "La La Land is a modern musical romance film directed by Damien Chazelle. Set in Los Angeles, it follows the love story of a struggling actress and a jazz musician as they chase their dreams in the competitive entertainment industry. The film pays homage to the golden age of Hollywood musicals while offering a contemporary take on the pursuit of passion and success. La La Land received critical acclaim for its engaging performances, vibrant musical numbers, and poignant exploration of love and ambition."
    },
    {
        "id": 9,
        "Image": "assets/Parasite.jpg",
        "Title": "Parasite",
        "Clip": 'https://www.youtube.com/embed/SEUXfv87Wpk?si=f71NoXmedlLDigZW',
        "Year": "2019",
        "Nation": "South Korea",
        "Detail": "Parasite is a South Korean dark comedy thriller directed by Bong Joon-ho. It delves into the socio-economic dynamics between two families, one living in poverty and the other in wealth. As the impoverished family infiltrates the affluent household, a series of unexpected events unfold, revealing the complex layers of human behavior and societal inequalities. The film received widespread critical acclaim for its sharp social commentary, masterful storytelling, and thought-provoking exploration of class divide and human morality."
    },
    {
        "id": "10",
        "Image": "assets/Inception.jpg",
        "Title": "Inception",
        "Clip": "https://www.youtube.com/embed/YoHD9XEInc0?si=WlBBQ-8TQR2A4JY4",
        "Year": "2010",
        "Nation": "USA",
        "Detail": "Inception is a science fiction action film directed by Christopher Nolan. It delves into the concept of dream infiltration, where a skilled thief is tasked with planting an idea into the subconscious of a corporate leader. The film is renowned for its complex narrative, stunning visual effects, and exploration of themes such as reality, memory, and the subconscious mind."
    },    
    {
        "id": "11",
        "Image": "assets/Forrest_Gump.jpg",
        "Title": "Forrest Gump",
        "Clip": "https://www.youtube.com/embed/bLvqoHBptjg?si=n6XPTbX6QG-P14hz",
        "Year": "1994",
        "Nation": "USA",
        "Detail": "Forrest Gump, directed by Robert Zemeckis, is a heartwarming comedy-drama that follows the life journey of a kind-hearted man named Forrest Gump. Despite his low IQ, Forrest finds himself present at many significant historical moments and influences those around him with his pure-hearted nature. The film is known for its endearing characters, emotional storytelling, and reflections on American history and culture."
    },
    {
        "id": "12",
        "Image": "assets/The_Shawshank_Redemption.jpg",
        "Title": "The Shawshank Redemption",
        "Clip": "https://www.youtube.com/embed/NmzuHjWmXOc?si=I6JWkHdmRFSyBrdS",
        "Year": "1994",
        "Nation": "USA",
        "Detail": "The Shawshank Redemption, directed by Frank Darabont, is a gripping drama that revolves around the bond between two imprisoned men, Andy Dufresne and Ellis Boyd 'Red' Redding, in the Shawshank State Penitentiary. The film explores themes of hope, friendship, and the resilience of the human spirit in the face of adversity. It has earned widespread acclaim for its powerful performances and poignant portrayal of the human experience."
    },
    {
        "id": "13",
        "Image": "assets/Interstellar.jpg",
        "Title": "Interstellar",
        "Clip": "https://www.youtube.com/embed/zSWdZVtXT7E?si=0I8i8kMnREi8iHLQ",
        "Year": "2014",
        "Nation": "USA",
        "Detail": "Interstellar, directed by Christopher Nolan, is a thought-provoking science fiction film that follows a group of astronauts tasked with finding a new habitable planet for humanity as Earth becomes increasingly uninhabitable. The film combines intricate theoretical physics with emotional storytelling, exploring themes of love, time, and the fate of humanity. Its breathtaking visuals and ambitious narrative have garnered widespread critical praise."
    },
    {
        "id": "14",
        "Image": "assets/The_Godfather.jpg",
        "Title": "The Godfather",
        "Clip": "https://www.youtube.com/embed/sY1S34973zA?si=Je6TlX-LSiS2Xm2D",
        "Year": "1972",
        "Nation": "USA",
        "Detail": "The Godfather, directed by Francis Ford Coppola, is an iconic crime film that chronicles the powerful Italian-American mafia family, the Corleones. It delves into themes of power, loyalty, and betrayal, depicting the transformation of Michael Corleone from a reluctant family outsider to a ruthless mafia boss. The film's rich character development, masterful direction, and exploration of the American Dream have solidified its place as a cinematic masterpiece."
    },
    {
        "id": "15",
        "Image": "assets/The_Dark_Knight.jpg",
        "Title": "The Dark Knight",
        "Clip": "https://www.youtube.com/embed/EXeTwQWrcwY?si=g5iUaLwMQ6yg5eRf",
        "Year": "2008",
        "Nation": "USA",
        "Detail": "The Dark Knight, directed by Christopher Nolan, is a superhero film that delves into the psychological and moral struggles faced by Batman as he confronts the anarchic and chaotic villain, the Joker. The film is celebrated for its intense performances, complex themes, and gritty portrayal of the battle between good and evil. Heath Ledger's portrayal of the Joker earned posthumous critical acclaim and accolades."
    },
    {
        "id": "16",
        "Image": "assets/Whiplash.jpg",
        "Title": "Whiplash",
        "Clip": "https://www.youtube.com/embed/v8_0sAS3Z2E?si=Y-bc3FbbRl2heh00",
        "Year": "2014",
        "Nation": "USA",
        "Detail": "Whiplash, directed by Damien Chazelle, is an intense drama that revolves around the turbulent relationship between an ambitious jazz drummer and his ruthless music instructor. The film delves into themes of ambition, perfectionism, and the sacrifices one must make to achieve greatness. Whiplash received critical acclaim for its gripping performances and its exploration of the pursuit of excellence in the competitive world of music."
    },
    {
        "id": "17",
        "Image": "assets/Blade_Runner_2049.jpg",
        "Title": "Blade Runner 2049",
        "Clip": "https://www.youtube.com/embed/gCcx85zbxz4?si=IVfMnXycTKOAZiFl",
        "Year": "2017",
        "Nation": "USA",
        "Detail": "Blade Runner 2049, directed by Denis Villeneuve, is a neo-noir science fiction film and a sequel to the 1982 film Blade Runner. Set in a dystopian future, the movie follows a new blade runner, Officer K, as he uncovers a long-buried secret that has the potential to plunge what's left of society into chaos. The film is praised for its stunning visuals, thought-provoking narrative, and thematic exploration of humanity, identity, and the consequences of technological advancement."
    },
    {
        "id": "18",
        "Image": "assets/Avatar.jpg",
        "Title": "Avatar",
        "Clip": "https://www.youtube.com/embed/5PSNL1qE6VY?si=51upj7dCQXuGXVO5",
        "Year": "2009",
        "Nation": "USA",
        "Detail": "Avatar, directed by James Cameron, is a groundbreaking science fiction film set on the distant planet of Pandora. It follows the story of a paraplegic marine dispatched to the planet for a mission that becomes more complex and transformative than he could have ever imagined. The film is renowned for its innovative use of 3D technology, stunning visual effects, and its exploration of themes such as environmentalism, imperialism, and the interconnect"
    }
];

export default FilmsData;
