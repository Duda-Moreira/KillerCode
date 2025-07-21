const receitas = [
    {
        nome: "Estrogonofe de Palmito",
        ingredientes: ["palmito", "margarina", "cebola", "catchup", "mostarda", "molho inglês", "creme de leite", "champignon"],
        dieta: "vegetariana",       
        modo_preparo: "Refogue a cebola com a margarina, coloque o palmito picado e os cogumelos picados, deixe ferver um pouquinho, acrescente o catchup, mostarda e molho inglês, quando der uma encorpada acrescente o creme de leite, mexa e antes de ferver, desligue",
        imagem: "https://static.itdg.com.br/images/640-440/59000d51ce63916cb70bb1bf5f6de131/306271-original.jpg"
    },

    {
        nome: "Lasanha de Berinjela",
        ingredientes: ["berinjela", "molho de tomate", "coentro", "azeitona", "queijo mussarela", "azeite", "catupiry"],
        dieta: "vegetariana",
        modo_preparo: "Corte as berinjelas em fatias finas, em uma assadeira retangular refratária, coloque no fundo, as duas colheres de azeite e um pouco de molho de tomate, coloque então uma camada de berinjela, cubra com molho de tomate e por cima coloque uma camada de queijo mussarela, repita os passos até cobrir a assadeira, salpique com azeitonas e coentro, coloque por cima da última camada queijo catupiry a gosto e cubra a assadeira com papel alumínio, leve ao forno em temperatura de 180º C graus por cerca de 30 minutos para cozinhar, após isso, retire o papel-alumínio e deixe por mais 5 a 10 minutos para gratinar. Sirva quente.",
        imagem: "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2023/07/17/886559530-lasanha-berinjela-frango.jpg"
    },

    {
        nome: "Moqueca de Banana da Terra",
        ingredientes: ["tomate", "cebola", "alho", "colorau", "azeite", "sal", "banana da terra", "coentro", "água"],
        dieta: "vegetariana",
        modo_preparo: "Pique o tomate sem pele e sem semente e corte a banana da terra em 3 partes, refogue no azeite a metade da cebola, alho e colorau, acrescente metade do tomate, refogue bem e espalhe pelo fundo da panela, coloque as bananas e cubra com o restante do tomate, da cebola e do coentro, arrumando bem, tampe a panela e deixe que ferva até que as bananas estejam macias, sempre verificando a água e acertando o sal se necessário.",
        imagem: "https://bakeandcakegourmet.com.br/uploads/site/receitas/moqueca-de-banana-da-terra-cx7tuusj.jpg"
    },

    {
        "nome": "Escondidinho de Abóbora com Grão-de-bico",
        "ingredientes": ["purê de abóbora", "grão-de-bico", "queijo"],
        "dieta": "vegetariana",
        "modo_preparo": "Cozinhe o grão-de-bico e tempere, faça o purê, refogue o grão-de-bico. Monte o escondidinho com o purê por cima e leve ao forno para gratinar.",
        "imagem": "https://www.mundoboaforma.com.br/wp-content/uploads/2022/09/Escondidinho-de-grao-de-bico.jpg"
    },

    {
        "nome": "Hambúrguer de Lentilha",
        "ingredientes": ["lentilha", "água", "alho", "cheiro-verde", "azeite", "cebola", "sal", "cominho", "farelo de aveia", "farinha de arroz integral"],
        "dieta": "vegetariana",
        "modo_preparo": "Cozinhe a lentilha e coloque-a juntamente com 4 xícaras de água na panela de pressão e deixe cozinhando por mais 15 minutos, escorra e coloque em uma vasilha, adicione o alho, a cebola, o cheiro-verde, azeite, sal, tempere com cominho a gosto e misure, acrescente o farelo de aveia e a farinha de arroz aos poucos até dar o ponto de modelar, divida a massa em 5 partes iguais e passe um fio de óleo nas mãos, modele os hambúrgueres, coloque em uma forma untada ou com papel manteiga e leve ao freezer por 1 hora, retire com cuidado, frite em uma frigideira com um fio de óleo e vire quando estiver bem douradinho, ou asse por cerca de 40 minutos em 180°C, mas vá observando até ele ficar douradinho.",
        "imagem": "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/e9bc354a1dd0aa0008243b83c1cf566a.jpg"
    },

    {
        "nome": "Risoto de Cogumelos",
        "ingredientes": ["arroz arbóreo", "cebola", "cogumelo", "vinho branco seco", "caldo de legumes", "manteiga/margarina", "queijo parmesão ralado"],
        "dieta": "vegetariana",
        "modo_preparo": "Pique e refogue a cebola com 1 colher de manteiga, adicione os cogumelos e refogue até dourar, adicione o arroz e misture por 1 minuto, coloque o vinho branco e mexa até evaporar, vá adicionando o caldo quente aos poucos mexendo sempre, quando o arroz estiver al dente e cremoso desligue o fogo, finalize com uma colher de manteiga e queijo parmesão.",
        "imagem": "https://s2-receitas.glbimg.com/APk8pOrM29fQle4OjOHifg9mUHg=/0x0:1080x608/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2022/2/7/7NkGZzQpWTB3ryM8kEFQ/capa-materia-gshow-2022-01-29t135328.257.png"
    },

    {
        "nome": "Tabule (salada árabe)",
        "ingredientes": ["trigo para quibe", "tomate", "pepino", "cebola roxa", "salsinha", "hortelã", "suco de 1 limão", "azeite", "sal", "pimenta"],
        "dieta": "vegetariana",
        "modo_preparo": "Hidrate o trigo com água quente por 20 minutos, escorra bem, misture o trigo com os demais ingredientes todos picados, tempere com sal, limão e azeite, leve à geladeira por 30 minutos antes de servir.",
        "imagem": "https://receitatodahora.com.br/wp-content/uploads/2024/05/tabule-0905-1200x900.jpg"
    },

    {
        "nome": "Torta de Legumes de Liquidificador",
        "ingredientes": ["farinha de trigo", "leite", "óleo", "ovo", "fermento", "sal", "queijo", "cenoura", "ervilha", "abobrinha"],
        "dieta": "vegetariana",
        "modo_preparo": "Bata a farinha, o leite, o óleo, os ovos, fermento e sal no liquidificador, em uma assadeira untada, despeje metade da massa, coloque o recheio por cima e cubra com o restante da massa, asse em forno pré-aquecido a 180°C por cerca de 40 minutos. ",
        "imagem": "https://sabores-new.s3.amazonaws.com/public/2024/11/torta-cremosa-de-legumes.jpg"
    },

    {
        "nome": "Curry de Grão-de-bico",
        "ingredientes": ["grão-de-bico", "cebola", "alho", "curry em pó", "tomate", "leite de coco", "coentro", "sal", "pimenta"],
        "dieta": "vegetariana",
        "modo_preparo": "Refogue a cebola picada e o alho até dourar, adicione o curry, misture e junte o tomate picado, quando o tomate estiver macio adicione o grão-de-bico cozido, junte o leite de coco e cozinhe por 10 minutos, finalize com coentro picado e sirva com arroz.",
        "imagem": "https://nazareuniluz.org.br/wp-content/uploads/2023/08/institucional-blog-receitas-curry-de-grao-de-bico.jpg"
    },

    {
        "nome": "Macarrão ao Pesto de Espinafre",
        "ingredientes": ["macarrão", "espinafre", "azeite", "alho", "nozes", "suco de limão", "sal", "pimenta", "castanhas"],
        "dieta": "vegetariana",
        "modo_preparo": "Cozinhe o macarrão e reserve, bata no liquidificador o espinafre, alho, castanhas, limão e azeite até formar um molho, tempere com sal e pimenta, misture com o macarrão cozido e sirva.",
        "imagem": "https://www.agendasaudavel.com.br/wp-content/uploads/2019/04/Farfalle-com-pesto-de-espinafre.jpg"
    },

    {
        "nome": "Almôndegas de Lentilha",
        "ingredientes": ["lentilha", "cebola", "alho", "aveia em flocos", "farinha de trigo", "sal", "pimenta", "cominho"],
        "dieta": "vegana",
        "modo_preparo": "Cozinhe e amasse bem a lentilha com um garfo ou processador, misture os ingredientes até formar uma massa moldável, modele as bolinhas e asse a 200°C por 20 minutos (ou frite/airfry), sirva com molho de tomate e arroz",
        "imagem": "https://souvegan.com.br/wp-content/uploads/2025/03/Almondegas-de-Lentilha-com-Molho-1024x683.png"
    },

    {
        "nome": "Bobó de Mandioquinha",
        "ingredientes": ["mandioquinha", "leite de coco", "cebola", "alho", "azeite de dendê", "coentro", "sal"],
        "dieta": "vegana",
        "modo_preparo": "Cozinhe e amasse a mandioquinha, refogue a cebola e alho no azeite, acrescente o purê de mandioquinha e misture, adicione o leite de coco e mexa até ficar cremoso, finalize com coentro e sal.",
        "imagem": "https://s2-receitas.glbimg.com/QH0E_3nTvnciDhOtC5imOmIudEA=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2024/F/M/a5vtg3TCu6SKNy0QT6aQ/bobo-de-mandioquinha.jpg"
    },

    {
        "nome": "Tofu Grelhado com Legumes Salteados",
        "ingredientes": ["tofu", "shoyu", "alho", "limão", "gengibre", "brócolis", "cenoura", "abobrinha"],
        "dieta": "vegana",
        "modo_preparo": "Corte o tofu em cubos e deixe marinando com o shoyu, alho, limão e gengibre por 30 minutos, grelhe o tofu até dourar, salteie os legumes com azeite e um pouco de shoyu.",
        "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWqJv_IamC_CZXsAzH4kg56hLiw4-WmPZWVQ&s"
    },

    {
        "nome": "Arroz de Couve-Flor",
        "ingredientes": ["couve-flor", "azeite", "alho", "sal", "cheiro-verde"],
        "dieta": ["vegana", "low carb"],
        "modo_preparo": "Triture a couve-flor crua no processador até virar grãos, refogue o alho no azeite, adicione a couve-flor e cozinhe por 5 minutos, tempere com sal e cheiro-verde.",
        "imagem": "https://m.ftscrt.com/static/recipe/d3826a3a-ee31-4769-97fd-1271ab986a48_fs2.jpg"
    },

    {
        "nome": "Bolinho de Grão-de-bico (Falafel)",
        "ingredientes": ["grão-de-bico", "cebola", "alho", "coentro", "salsinha", "sal", "cominho", "farinha de trigo"],
        "dieta": "vegana",
        "modo_preparo": "Triture todos os ingredientes até formar uma massa, modele bolinhos e asse ou frite",
        "imagem": "https://chefinhanatural.com.br/wp-content/uploads/2020/12/falafels-30.jpg"
    },

    {
        "nome": "Espaguete de Abobrinha ao Molho Pesto Vegano",
        "ingredientes": ["abobrinha", "manjericão", "castanhas", "alho", "azeite", "limão", "sal"],
        "dieta": "vegana",
        "modo_preparo": "Rale a abobrinha em tiras. Para o pesto, bata no liquidificador o manjericão, as castanhas, alho, azeite, limão e sal. Salteie rapidamente a abobrinha em uma frigideira com azeite, misture com o molho pesto e sirva.",
        "imagem": "https://www.comidanamesa.com.br/wp-content/uploads/2022/05/espaguete-de-abobrinha.jpg"
    },

    {
        "nome": "Panqueca de Aveia com Recheio de Legumes",
        "ingredientes": ["aveia em flocos", "água", "sal", "cúrcuma", "cenoura", "espinafre", "cogumelo"],
        "dieta": "vegana",
        "modo_preparo": "Refogue os legumes para o recheio, bata os ingredientes da massa no liquidificador, unte uma frigideira e cozinhe as panquecas dos dois lados, recheie com os legumes e enrole. Pode cobrir com molho de tomate.",
        "imagem": "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/e2f5a9b5191f3e1d4a5f9ea1ea7a749b.jpg"
    },

    {
        "nome": "Quibe Vegano de Abóbora",
        "ingredientes": ["abóbora", "trigo para quibe", "hortelã", "cebola", "sal", "pimenta síria"],
        "dieta": "vegana",
        "modo_preparo": "Cozinhe a abóbora e amasse, hidrate o trigo por 20 minutos e escorra bem, misture com a abóbora e os temperos, coloque em uma assadeira untada e asse a 200°C por 30 minutos. Pode rechear com tofu ou legumes refogados.",
        "imagem": "https://www.becel.com.br/-/media/Project/Upfield/Brands/Becel-NL/Becel-BR/Assets/Recipes/1f68d1e6-c8da-4a78-9ab5-b6a0c330e9db.jpg?rev=a4adf925c08d45f0ba97bfa715d97873&w=900"
    },

    {
        "nome": "Cuscuz Paulista Vegano",
        "ingredientes": ["farinha de milho flocada", "tomate", "cenoura", "pimentão", "cebola", "azeitona", "milho", "ervilha", "caldo de legumes", "sal", "azeite"],
        "dieta": "vegana",
        "modo_preparo": "Refogue os vegetais no azeite com sal e caldo, adicione a farinha de milho aos poucos, mexendo. Quando desgrudar da panela coloque em uma froma untada, deixe firmar e desenforme.",
        "imagem": "https://img77.uenicdn.com/image/upload/v1611520832/business/3f865f7d5eb44ae9b553cae3d3a1499c.jpg"
    },

    {
        "nome": "Doce de Banana com Cacau (sem açúcar)",
        "ingredientes": ["banana", "cacau em pó", "canela"],
        "dieta": "vegana",
        "modo_preparo": "Amasse as bananas e coloque em uma panela, cozinhe em fogo baixo até virar um creme, adicione o cacau e a canela e misture até incorporar. Deixe esfriar, leve à geladeira e sirva como sobremesa.",
        "imagem": "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/d3c3d4e9888ad888064a55de5337020c.jpg"
    },

    {
        "nome": "Purê de Batata com Leite de Coco",
        "ingredientes": ["batata", "leite de coco", "margarina", "alho", "cebola", "sal"],
        "dieta": "zero-lactose",
        "modo_preparo": "Cozinhe as batatas até ficarem macias, amasse bem e misture com leite de coco, margarina e os temperos, mexa até ficar cremoso e ajuste o sal.",
        "imagem": "https://www.receiteria.com.br/wp-content/uploads/pure-de-batata-com-leite-de-coco-07-730x548.jpg"
    },

    {
        "nome": "Panqueca de Banana com Aveia",
        "ingredientes": ["banana", "aveia", "ovo", "canela"],
        "dieta": "zero-lactose",
        "modo_preparo": "Amasse a banana, misture os outros ingredientes até formar uma massinha, aqueça uma frigideira e coloque porções da massa, doure dos dois lados e sirva com frutas ou melado.",
        "imagem": "https://static.itdg.com.br/images/1200-630/53e47bf452300d58b8e741ae370eae4f/365870-original.jpg"
    },

    {
        "nome": "Arroz Doce com Leite de Amêndoas",
        "ingredientes": ["arroz", "leite de amêndoas", "açúcar demerara", "canela em pau", "casca de limão"],
        "dieta": "zero-lactose",
        "modo_preparo": "Cozinhe o arroz com água até amaciar, escorra e adicione o leite vegetal, açúcar, canela e a casca do limão. Cozinhe mexendo até engrossar.",
        "imagem": "https://receitadaboa.com.br/wp-content/uploads/2024/07/iStock-840279550.jpg"
    },

    {
        "nome": "Pão de Queijo (zero lactose)",
        "ingredientes": ["polvilho doce", "polvilho azedo", "batata-doce", "óleo", "sal"],
        "dieta": "zero-lactose",
        "modo_preparo": "Cozinhe e amasse as batatas, misture com o resto dos ingredientes até formar uma massa, modele bolinhas e asse por 180°C por 30 minutos.",
        "imagem": "https://s2.glbimg.com/RcMQlr5WiBmb140kzK0YfH__c_4=/620x413/smart/e.glbimg.com/og/ed/f/original/2022/07/18/receita-de-pao-de-queijo-sem-lactose.jpg"
    },

    {
        "nome": "Bolo de Cenoura Sem Lactose",
        "ingredientes": ["cenoura", "ovo", "óleo", "açúcar", "farinha de trigo", "fermento"],
        "dieta": "zero-lactose",
        "modo_preparo": "Bata no liquidificador: cenoura, ovos, óleo e açúcar, misture à farinha e ao fermento e asse por 40 minutos a 180°C.",
        "imagem": "https://semglutensemlactose.com/wp-content/uploads/2009/04/dreamstime_m_24113586.jpg"
    },

    {
        "nome": "Escondidinho de Batata com Proteína de Soja",
        "ingredientes": ["batata", "margarina", "leite de coco", "alho", "cebola", "sal", "molho de tomate", "proteína de soja texturizada(PVT)"],
        "dieta": "zero-lactose",
        "modo_preparo": "Cozinhe as batatas até ficarem macias, amasse bem e misture com leite de coco, margarina e os temperos, mexa até ficar cremoso e ajuste o sal. Hidrate a PVT em água quente por 15 minutos e escorra. Refogue com alho, cebola, molho e temperos e monte o escondidinho com purê por cima e leve ao forno. ",
        "imagem": "https://www.agendasaudavel.com.br/wp-content/uploads/2019/07/612_escondidinho-de-pts_39c1d89ddd.jpg"
    },

    {
        "nome": "Tapioca com Recheio Doce ou Salgado",
        "ingredientes": ["goma de tapioca", "banana", "canela", "pasta de amendoim", "tofu", "tomate", "orégano"],
        "dieta": "zero-lactose",
        "modo_preparo": "Aqueça uma frigideira sem óleo, espalhe a goma de tapioca hidratada com uma colher até cobrir o fundo. Cozinhe por cerca de 1 minuto até unir os grãos, vire e adicione os recheios doce ou salgado e dobre ao meio.",
        "imagem": "https://saude.abril.com.br/wp-content/uploads/2016/09/o-que-e-que-a-tapioca-tem.jpg"
    },

    {
        "nome": "Mingau de Aveia com Leite de Coco",
        "ingredientes": ["aveia em flocos finos", "leite de coco", "açúcar", "canela"],
        "dieta": "zero-lactose",
        "modo_preparo": "Coloque tudo em uma panela pequena, leve ao fogo baixo mexendo sempre até engrossar e sirva quente com frutas picadas, castanhas ou coco ralado.",
        "imagem": "https://receitadaboa.com.br/wp-content/uploads/2024/08/Imagem-ilustrativa-de-mingau-de-aveia-1.webp"
    },

    {
        "nome": "Moqueca de Legumes Zero Lactose",
        "ingredientes": ["cenoura", "batata", "abobrinha", "pimentão vermelho", "tomate", "cebola", "leite de coco", "azeite de dendê", "coentro", "sal", "pimenta"],
        "dieta": "zero-lactose",
        "modo_preparo": "Em uma panela refogue a cebola e o pimentão, acrescente os legumes picados, cubra com água e cozinhe até amaciarem, adicione o leite de coco, azeite de dendê e os temperos. Cozinhe por mais 5 minutos e finalize com coentro fresco.",
        "imagem": "https://www.mundoboaforma.com.br/wp-content/uploads/2020/03/Moqueca-vegetariana-de-legumes-com-ovo.jpg"
    },

    {
        "nome": "Sorvete de Banana com Cacau",
        "ingredientes": ["banana", "cacau em pó", "pasta de amendoim"],
        "dieta": "zero-lactose",
        "modo_preparo": "Corte as bananas em rodelas e congele-as. Retire as bananas do congelador e bata no processador até formar um creme, adicione o cacau e a pasta de amendoim e bata até incorporar bem.",
        "imagem": "https://vitat.com.br/receitas/images/recipeshandler.jpg"
    },

    {
        "nome": "Omelete Recheado",
        "ingredientes": ["ovo", "cebola", "tomate", "queijo", "sal", "orégano", "azeite"],
        "dieta": "low-carb",
        "modo_preparo": "Bata os ovos com o sal e o orégano, aqueça uma frigideira com azeite e despeje a mistura, quando firmar a base, adicione os recheios e dobre ao meio, cozinhe até o queijo derreter e sirva com salada.",
        "imagem": "https://www.kitano.com.br/wp-content/uploads/2019/07/SSP_1993-Omelete-de-pizza-mussarela-ore%CC%81gano-e-tomate.jpg"
    },
    
    {
        "nome": "Arroz de Repolho Low Carb",
        "ingredientes": ["repolho", "azeite", "alho", "cebola", "sal", "pimenta-do-reino", "cheiro-verde"],
        "dieta": "low-carb",
        "modo_preparo": "Pique o repolho, a cebola, o alho e o cheiro-verde. Em uma frigideira aqueça p azeite e refogue a cebola até ficar transparente, adicione o alho e deixe dourar, junte o repolho e refogue em fogo médio mexendo bem, coloque sal, pimenta-do-reino e, se quiser, um toque de cúrcuma e/ou páprica, cozinhe por 5 a 8 minutos ou até o repolho murchar e ficar levemente douradinho, finalize com cheiro-verde e sirva.",
        "imagem": "https://lowcarbafrica-com.translate.goog/wp-content/uploads/2019/09/Riced-Cabbage-blog-3.jpg"
    },

    {
        "nome": "Abobrinha Recheada",
        "ingredientes": ["abobrinha", "carne moída", "cebola", "alho", "tomate", "azeite", "orégano", "sal"],
        "dieta": "low-carb",
        "modo_preparo": "Corte as abobrinhas ao meio e retire a parte do miolo, refogue a carne moída com o azeite, cebola, alho, tomate e o sal, recheie as abobrinhas e leve ao forno por 20 minutos a 200°C.",
        "imagem": "https://receitanatureba.com/wp-content/uploads/2017/01/Abobrinha-Recheada-de-Forno.jpg"
    },

    {
        "nome": "Pãozinho de Frigideira Low Carb",
        "ingredientes": ["ovo", "farinha de amêndoas", "fermento", "sal"],
        "dieta": "low-carb",
        "modo_preparo": "Misture todos os ingredientes e coloque em uma frigideira antiaderente untada e deixe cozinhar dos dois lados até dourar. Pode servir com recheios low carb.",
        "imagem": "https://www.adrianalauffer.com.br/wp-content/uploads/2017/12/pao-multigraos-de-frigideira-na-mesa-1024x768.jpg"
    },

    {
        "nome": "Espaguete de Abobrinha ao Alho e Óleo",
        "ingredientes": ["abobrinha", "alho", "azeite", "sal", "pimenta"],
        "dieta": "low-carb",
        "modo_preparo": "Rale a abobrina em tiras e corte em espiral, refogue o alho no azeite, junte a abobrinha e mexa por 3-5 minutos, tempere e sirva.",
        "imagem": "https://catracalivre.com.br/wp-content/uploads/2025/03/macarrao-de-abobrinha-2.png"
    },

    {
        "nome": "Salada de Ovos com Abacate",
        "ingredientes": ["pepino", "ovo", "abacate", "suco de limão", "azeite", "sal", "pimenta"],
        "dieta": "low-carb",
        "modo_preparo": "Corte os ovos, o pepino e o abacate em cubos, misture com o azeite, limão, sal e pimenta. Sirva gelado como acompanhamento ou lanche.",
        "imagem": "https://ogimg.infoglobo.com.br/in/23532019-b6b-fd8/FT1086A/760/81471067_ElSalada-de-abacate-ovo-e-couve-de-bruxelas.-Shutterstock.jpg"
    },

    {
        "nome": "Hambúrguer Low Carb de Frango",
        "ingredientes": ["frango", "ovo", "farelo de aveia", "alho", "cebola", "sal", "coentro", "cheiro-verde"],
        "dieta": "low-carb",
        "modo_preparo": "Desfie o frango e misture com todos os outros ingredientes até formar uma massa moldável, modele os hambúrgueres e grelhe dos dois lados.",
        "imagem": "https://saude.mpu.mp.br/nutricao/receitas/imagens/hamburguerfrango.png"
    },

    {
        "nome": "Pizza Low Carb com Base de Couve-flor",
        "ingredientes": ["couve-flor", "ovo", "farinha de amêndoas", "sal", "orégano"],
        "dieta": "low-carb",
        "modo_preparo": "Rale a couve-flor e cozinhe no vapor, depois esprema bem, misture com o ovo, a farinha e os temperos, modele a base em uma assadeira e asse por 15 minutos, adicione o molho, recheios e leve de volta ao forno até dourar.",
        "imagem": "https://img.cybercook.com.br/receitas/866/pizza-de-couve-flor-low-carb.jpeg"
    },

    {
        "nome": "Panqueca Low Carb de Coco",
        "ingredientes": ["ovo", "coco ralado", "farinha de coco", "canela", "sal", "óleo de coco"],
        "dieta": "low-carb",
        "modo_preparo": "Misture todos os ingredientes até formar uma massa leve, aqueça uma frigideira com óleo de coco e despeje porções, doure dos dois lados e sirva com pasta de amendoim ou frutas low carb.",
        "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShorK8Ei0_BSTS8e_RKO4C7NAtEajDNHsX7w&s"
    },

    {
        "nome": "Pão de Queijo de Tapioca (Sem Glúten)",
        "ingredientes": ["polvilho azedo", "leite", "óleo", "ovo", "queijo ralado", "sal"],
        "dieta": "zero-gluten",
        "modo_preparo": "Misture todos os ingredientes até formar uma massa cremosa, modele bolinhas com a mão untada e asse a 200°C por cerca de 25 minutos ou até dourar.",
        "imagem": "https://guiadacozinha.com.br/wp-content/uploads/2006/01/pao-de-queijo-de-tapioca.jpg"
    },

    {
        "nome": "Crepioca Simples",
        "ingredientes": ["ovo", "goma de tapioca hidratada", "sal", "orégano"],
        "dieta": "zero-gluten",
        "modo_preparo": "Misture bem o ovo com a tapioca e os temperos, despeje em frigideira antiaderente untada e cozinhe dos dois lados. Pode rechear com legumes, frango, tofu, guacamole, etc.",
        "imagem": "https://s2-receitas.glbimg.com/y1OG3_6xsECT8el1j6FiQOTZwa0=/1200x0/filters:format(jpeg)/https://i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2024/R/k/xG8LzGQ0eKYP07rLUvCg/crepioca-simples.jpg"
    },

    {
        "nome": "Bolo de Fubá Sem Glúten",
        "ingredientes": ["fubá", "açúcar", "ovo", "leite vegetal", "óleo", "fermento"],
        "dieta": "zero-gluten",
        "modo_preparo": "Bata tudo no liquidificador (menos o fermento), misture o fermento por último e despeje em forma untada, asse a 180°C por 30 a 35 minutos.",
        "imagem": "https://receitadaboa.com.br/wp-content/uploads/2024/08/Imagem-ilustrativa-de-bolo-de-fuba-2.webp"
    },

    {
        "nome": "Panqueca de Banana com Farinha de Arroz",
        "ingredientes": ["banana", "ovo", "farinha de arroz", "canela"],
        "dieta": "zero-gluten",
        "modo_preparo": "Amasse a banana e misture com todos os outros ingredientes, aqueça uma frigideira antiaderente e cozinhe dos dois lados até dourar. Sirva com frutas ou pasta de amendoim.",
        "imagem": "https://www.rampinelli.com.br/uploads/receita/receita-de-panqueca-de-banana-com-farinha-de-arroz-1688400537.png"
    },

    {
        "nome": "Pizza com Massa de Batata-doce",
        "ingredientes": ["batata-doce", "polvilho doce", "sal", "azeite", "orégano", "molho de tomate"],
        "dieta": "zero-gluten",
        "modo_preparo": "Cozinhe e amasse a batata-doce, misture com o polvilho, sal, azeite e orégano até formar uma massa firme e moldável, abra com as mãos sobre o papel manteiga e asse por 15 minutos, depois adicione o molho de tomate e os recheios e asse por mais 10 minutos",
        "imagem": "https://www.sabornamesa.com.br/media/k2/items/cache/9fadb6d3e28e2be47da4c87e012c5962_XL.jpg"
    },

    {
        "nome": "Cookies Sem Glúten com Amendoim",
        "ingredientes": ["pasta de amendoim", "açúcar mascavo", "ovo", "fermento"],
        "dieta": "zero-gluten",
        "modo_preparo": "Misture tudo até virar uma massa grossa, modele bolinhas e achate em assadeira com papel manteiga, asse a 180°C por 12 a 15 minutos.",
        "imagem": "https://irmaosnacozinha.com/wp-content/uploads/2024/10/Cookie-de-Amendoim-1-scaled.jpg"
    },

    {
        "nome": "Mingau de Polvilho",
        "ingredientes": ["polvilho doce", "leite vegetal", "açúcar", "canela"],
        "dieta": "zero-gluten",
        "modo_preparo": "Dissolva o polvilho no leite frio, leve ao fogo mexendo sempre até engrossar, adicione o açúcar e canela a gosto, sirva quente.",
        "imagem": "https://www.sabornamesa.com.br/media/k2/items/cache/e791ab626e6785062374d45b25cc6e7f_L.jpg"
    },

    {
        "nome": "Quibe de Abóbora com Quinoa",
        "ingredientes": ["abóbora", "quinoa", "cebola", "hortelã", "sal", "azeite", "pimenta síria"],
        "dieta": "zero-gluten",
        "modo_preparo": "Cozinhe e amasse a abóbora, cozinhe a quinoa e misture com o resto dos ingredientes, modele em forma untada e asse a 200°C por 30 minutos. Pode rechear com tofu, legumes ou castanhas.",
        "imagem": "https://i.ytimg.com/vi/3qs3V2jf50k/maxresdefault.jpg"
    },

    {
        "nome": "Bolo de Chocolate com Farinha de Coco",
        "ingredientes": ["ovo", "cacau em pó", "farinha de coco", "açúcar mascavo", "leite vegetal", "fermento"],
        "dieta": "zero-gluten",
        "modo_preparo": "Misture todos os ingredientes (menos o fermento) até formar uma massa homogênea, adicione o fermento e asse a 180°C por 30 minutos.",
        "imagem": "https://receitanatureba.com/wp-content/uploads/2018/02/Bolo-de-Chocolate-com-Farinha-de-Coco.jpg"
    },

    {
        "nome": "Tortinha de Legumes com Massa de Grão-de-bico",
        "ingredientes": ["grão-de-bico", "azeite", "sal", "cenoura", "brócolis", "milho"],
        "dieta": "zero-gluten",
        "modo_preparo": "Refogue os legumes no azeite, cozinhe o grão-de-bico, bata os ingredientes da massa no processador até virar uma pastinha firme, forre forminhas de empada e pré-asse por 10 minutos, recheie com os legumes e asse por mais 15 minutos a 200°C.",
        "imagem": "https://cdn0.tudoreceitas.com/pt/posts/8/1/0/quiche_de_brocolis_com_massa_de_grao_de_bico_7018_orig.jpg"
    },

    {
        "nome": "Ovos mexidos com espinafre e tomate",
        "ingredientes": ["ovo", "tomate", "espinafre", "sal", "pimenta", "azeite"],
        "dieta": "paleolitica",
        "modo_preparo": "Pique o tomate e refogue com o espinafre rapidamente em uma frigideira com azeite, bata os ovos e despeje por cima, mexa em fogo baixo até cozinhar e ficar cremoso, tempere e sirva.",
        "imagem": "https://img.freepik.com/fotos-premium/ovos-mexidos-com-espinafre-e-tomate-em-um-prato-branco-em-uma-mesa-de-madeira_80295-3885.jpg"
    },

    {
        "nome": "Guacamole com chips de cenoura",
        "ingredientes": ["abacate", "cebola roxa", "tomate", "suco de 1 limão", "sal", "pimenta", "cenoura"],
        "dieta": "paleolitica",
        "modo_preparo": "Misture o abacate amassado com os temperos, cebola picada e tomate, corte a cenoura em fatias finas e asse no forno com azeite por 20-25 minutos até ficar crocante.",
        "imagem": "https://s2.glbimg.com/yemtcxJ0270JYqokuHAodcZHqWE=/e.glbimg.com/og/ed/f/original/2015/02/27/untitled-1_4.jpg"
    },

    {
        "nome": "Frango grelhado com crosta de gergelim",
        "ingredientes": ["filé de peito de frango", "gergelim", "alho", "sal", "limão", "azeite"],
        "dieta": "paleolitica",
        "modo_preparo": "Tempere o frango com alho picado, limão e sal, empane no gergelim pressionando bem, grelhe em frigideira antiaderente até dourar os dois lados.",
        "imagem": "https://kifrango.com.br/wp-content/uploads/elementor/thumbs/Receitas_FilePeitoGergilim-qh65r5i7bys3gfo2ekf16dtv9eejs9n4angxuoy3ya.jpg"
    },

    {
        "nome": "Panqueca de banana com ovo e coco",
        "ingredientes": ["banana", "ovo", "coco ralado", "canela", "óleo de coco"],
        "dieta": "paleolitica",
        "modo_preparo": "Amasse a banana e misture com os ovos e o coco ralado, aqueça uma frigideira com óleo de coco e despeje a massa, cozinhe dos dois lados até firmar e dourar.",
        "imagem": "https://vivasaudedigital.com.br/wp-content/uploads/2022/03/banana-com-coco-vira-uma-deliciosa-panqueca-confira-a-receita-4882.jpg"
    },

    {
        "nome": "Carne de panela com legumes",
        "ingredientes": ["carne", "cenoura", "chuchu", "abobrinha", "tomate", "cebola", "alho", "sal", "páprica", "azeite", "cheiro-verde"],
        "dieta": "paleolitica",
        "modo_preparo": "Refogue a carne (pode ser acém, músculo, coxão mole) até dourar, adicione os temperos e a água, cozinhe por 30 minutos na pressão, adicione os legumes e cozinhe até ficarem macios, finalize com cheiro-verde.",
        "imagem": "https://www.minhareceita.com.br/app/uploads/2022/01/ensopado-de-costela-com-ragu-de-legumes-portal-minha-receita.jpg"
    },

    {
        "nome": "Salada morna com ovos e abacate",
        "ingredientes": ["ovo", "abacate", "alface", "manjericão", "rúcula", "agrião", "espinafre", "almeirão", "acelga", "tomate-cereja", "azeite", "sal", "pimenta", "limão"],
        "dieta": "paleolitica",
        "modo_preparo": "Monte sua salada com as folhas, abacate e tomates, fatie os ovos cozidos e arrume por cima, tempere com azeite, limão, sal e pimenta.",
        "imagem": "https://s2.glbimg.com/ZDZpQTMMNptfMfe5RV9WNgKXEvQ=/620x455/e.glbimg.com/og/ed/f/original/2021/10/18/receita-salada-abacate-ovo-tomate-alface-lamare.jpg"
    },

    {
        "nome": "Espaguete de abobrinha com molho bolonhesa paleo",
        "ingredientes": ["abobrinha", "carne moída", "tomate", "extrato de tomate", "alho", "cebola", "orégano"],
        "dieta": "paleolitica",
        "modo_preparo": "Rale o tomate e a abobrinha em tiras, refogue a carne com alho e cebola, adicione o tomate, extrato e temperos, cozinhe a abobrinha por 1-2 minutos no vapor ou água quente, sirva a carne sobre a abobrinha.",
        "imagem": "https://cdn.awsli.com.br/600x450/311/311570/produto/53120112/715cdc53f8.jpg"
    },

    {
        "nome": "Omelete de cogumelos e espinafre",
        "ingredientes": ["ovo", "cogumelo", "espinafre", "sal", "pimenta", "azeite"],
        "dieta": "paleolitica",
        "modo_preparo": "Fatie os cogumelos e refogue com o espinafre no azeite, bata os ovos, tempere e despeje na frigideira, cozinhe tampado em fogo baixo até firmar.",
        "imagem": "https://static.wixstatic.com/media/540f1d_0a656b12aaa145b0ab1472e6a3e8e345~mv2.jpg/v1/fill/w_568,h_340,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/540f1d_0a656b12aaa145b0ab1472e6a3e8e345~mv2.jpg"
    },

    {
        "nome": "Charuto de folha de couve recheado com carne",
        "ingredientes": ["couve-flor", "carne moída", "cebola", "alho", "sal", "páprica", "azeite", "limão"],
        "dieta": "paleolitica",
        "modo_preparo": "Refogue a carne com cebola, alho e temperos, passe as folhas de couve por água quente por 10 segundos para amolecer, recheie e enrole como charuto. Coloque em uma assadeira, regue com azeite e asse por 15-20 minutos.",
        "imagem": "https://s2-receitas.glbimg.com/tlUQoNOwgc0Fg21k8Z_zweFKbqw=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/9/M/85nUQhS3AISsB04pXiHQ/charuto-de-couve-com-linguica-calabresa.jpeg"
    },

    {
        "nome": "Maçã assada com canela e castanhas",
        "ingredientes": ["maçã", "canela", "castanhas"],
        "dieta": "paleolitica",
        "modo_preparo": "Corte a maçã ao meio, retire as sementes, coloque as castanhas no centro, polvilhe canela, leve ao forno a 180°C por 20 minutos.",
        "imagem": "https://i.panelinha.com.br/i1/bk-4305-maca-com-granola.webp"
    },

    {
        "nome": "Pão de micro-ondas Dukan (Ataque)",
        "ingredientes": ["ovo", "farelo de aveia", "iogurte natural desnatado", "fermento", "sal"],
        "dieta": "dukan",
        "modo_preparo": "Misture tudo em uma caneca grande ou potinho, leve ao micro-ondas por 2-3 minutos. Pode cortar ao meio e rechear com presunto magro ou cottage zero",
        "imagem": "https://d2qcpt1idvpipw.cloudfront.net/recipes/2020/10/panini-dukan.jpg"
    },

    {
        "nome": "Omelete de Atum Light (Ataque ou Cruzeiro)",
        "ingredientes": ["ovo", "atum", "sal", "orégano", "páprica", "requeijão zero"],
        "dieta": "dukan",
        "modo_preparo": "Escorra o atum, bata os ovos, misture com o atum escorrido e os temperos, aqueça uma frigideira antiaderente e despeje a mistura, cozinhe dos dois lados e sirva quente.",
        "imagem": "https://receitadaboa.com.br/wp-content/uploads/2024/10/iStock-1438023213.jpg"
    },

    {
        "nome": "Almôndegas Dukan de Carne (Ataque ou Cruzeiro)",
        "ingredientes": ["carne moída", "ovo", "farelo de aveia", "sal", "alho em pó", "salsinha"],
        "dieta": "dukan",
        "modo_preparo": "Misture tudo até dar ponto de enrolar, modele as bolinhas e asse no forno ou air fryer por 20 minutos. Sirva com molho de iogurte ou mostarda Dukan.",
        "imagem": "https://i.ytimg.com/vi/ZyEvhZi-Qao/hq720.jpg"
    },

    {
        "nome": "Frango desfiado com iogurte e ervas (Cruzeiro PP ou PL)",
        "ingredientes": ["peito de frango", "iogurte desnatado", "limão", "orégano", "pimenta", "sal"],
        "dieta": "dukan",
        "modo_preparo": "Cozinhe e desfie o frango, misture com o iogurte, limão, orégano, pimenta e o sal, leve a geladeira por 30 minutos pra pegar gosto. Sirva como recheio de panqueca Dukan ou com salada.",
        "imagem": "https://cdn0.tudoreceitas.com/pt/posts/7/7/3/pate_de_frango_com_creme_de_leite_e_cenoura_5377_600.jpg"
    },

    {
        "nome": "Panqueca Dukan salgada (Cruzeiro)",
        "ingredientes": ["ovo", "farelo de aveia", "iogurte desnatado", "sal", "páprica"],
        "dieta": "dukan",
        "modo_preparo": "Misture bem todos os ingredientes até virar uma massa líquida, despeje em frigideira antiaderente e espalhe, cozinhe dos dois lados. Pode rechar com frango, carne magra ou legumes (fase PL).",
        "imagem": "https://i.ytimg.com/vi/nS4VxZ-DfX4/maxresdefault.jpg"
    },

    {
        "nome": "Pudim Dukan (Ataque)",
        "ingredientes": ["ovo", "leite em pó desnatado", "leite desnatado", "adoçante", "essência de baunilha"],
        "dieta": "dukan",
        "modo_preparo": "Misture tudo muito bem com um fouet ou garfo, coloque em potinhos e leve ao forno em banho-maria por 30 minutos, deixe gelar e desenforme.",
        "imagem": "https://www.mundoboaforma.com.br/wp-content/uploads/2021/03/Pudim-diet.jpg"
    },

    {
        "nome": "Hambúrguer de salmão (Cruzeiro PP/PL)",
        "ingredientes": ["salmão", "farelo de aveia", "ovo", "sal", "cebolinha", "alho"],
        "dieta": "dukan",
        "modo_preparo": "Misture o salmão moído, farelo de aveia, ovo, sal, cebolinha e alho e modele os hambúrgueres, grelhe ou leve à air fryer por 15-20 minutos. Sirva com iogurte temperado ou alface (fase PL).",
        "imagem": "https://i.panelinha.com.br/i1/bk-2479-img-7555.webp"
    },

    {
        "nome": "Sorvete de iogurte com cacau (Cruzeiro)",
        "ingredientes": ["iogurte natural desnatado", "cacau em pó", "adoçante", "essência de baunilha"],
        "dieta": "dukan",
        "modo_preparo": "Misture tudo muito bem, leve ao congelador por 2 horas, mexendo a cada 30 minutos para não cristalizar. Antes de servir bata com colher ou mixer pra ficar cremoso.",
        "imagem": "https://levementenacozinha.com.br/wp-content/uploads/2022/11/20220916_193201200_iOS-scaled-e1667592376671.jpg"
    },

    {
        "nome": "Crepioca de Clara com Farelo (Cruzeiro)",
        "ingredientes": ["ovo", "farelo de aveia", "sal", "orégano", "cúrcuma"],
        "dieta": "dukan",
        "modo_preparo": "Faça uma clara com os ovos e misture bem com o farelo e os temperos em uma tigela, aqueça uma frigideira antiaderente em fogo baixo, despeje a mistura e espalhe como uma panqueca, cozinhe dos dois lados até dourar levemente.",
        "imagem": "https://img-global.cpcdn.com/recipes/e122ca6796163a43/400x400cq80/photo.jpg"
    },

    {
        "nome": "Bolo de Caneca Dukan (Ataque)",
        "ingredientes": ["ovo", "farelo de aveia", "leite em pó desnatado", "cacau em pó", "adoçante", "fermento"],
        "dieta": "dukan",
        "modo_preparo": "Misture todos os ingredientes numa caneca grande, mexa com um garfo até ficar bem homogêneo, leve ao micro-ondas por 2-3 minutos (dependendo da potência), retive, desenforme se quiser e sirva morno.",
        "imagem": "https://www.guiadasemana.com.br/contentFiles/system/pictures/2015/6/137767/original/bolo-caneca-laranja.jpg"
    },

    {
        "nome": "Tabule Mediterrâneo",
        "ingredientes": ["trigo para quibe", "salsinha", "tomate", "pepino", "suco de 1 limão", "azeite", "hortelã", "sal", "pimenta"],
        "dieta": "mediterranea",
        "modo_preparo": "Pique a salsinha, tomate e o pepino e reserve. Hidrate o trigo para quibe com água quente por 20 minutos, escorra e esprema, misture com os demais ingredientes em uma tigela, leve à geladeira por 30 minutos antes de servir.",
        "imagem": "https://flamisbuffet.wordpress.com/wp-content/uploads/2013/05/tabule-lavioletera.jpg"
    },

    {
        "nome": "Salmão ao forno com limão e ervas",
        "ingredientes": ["filé de salmão", "suco de 1 limão", "alecrim", "tomilho", "alho", "sal", "pimenta-do-reino", "azeite"],
        "dieta": "mediterranea",
        "modo_preparo": "Tempere o filé com sal, limão, ervas e alho fatiado, coloque numa assadeira untada com azeite, leve ao forno pré-aquecido a 200°C por 20 minutos.",
        "imagem": "https://www.mareriopescados.com.br/uploads/receitas/2fdae1680c1531884acb1eb96172a0c3.jpg"
    },

    {
        "nome": "Berinjela grelhada com azeite e alho",
        "ingredientes": ["berinjela", "alho", "azeite", "sal", "orégano"],
        "dieta": "mediterranea",
        "modo_preparo": "Corte as berinjelas em rodelas, pincele azeite, grelhe numa frigideira ou grill até dourar, finalize com alho picado e orégano.",
        "imagem": "https://anamariabrogui.com.br/assets/uploads/receitas/fotos/usuario-2256-9e155d0ff11d7de08b47e16800cf68b6.jpg"
    },

    {
        "nome": "Sopa de lentilha com tomate e cenoura",
        "ingredientes": ["lentilha", "cenoura", "tomate", "cebola", "alho", "azeite", "sal", "pimenta"],
        "dieta": "mediterranea",
        "modo_preparo": "Refogue a cebola, alho e tomate picado no azeite, adicione a cenoura em cubos e as lentilhas lavadas, cubra com água e cozinhe até tudo amolecer, tempere.",
        "imagem": "https://www.grupopq.com.br/wp-content/uploads/2020/08/PQ-Sopa-de-lentilha.jpg"
    },

    {
        "nome": "Salada Grega Tradicional",
        "ingredientes": ["hortelã", "pepino", "tomate-cereja", "cebola roxa", "azeitona preta", "queijo feta", "azeite", "orégano", "limão"],
        "dieta": "mediterranea",
        "modo_preparo": "Corte o tomate em cubos, o pepino em rodelas, as azeitonas ao meio e a cebola roxa em tiras, misture tudo em uma saladeira, regue com azeite e suco de limão e finalize com orégano.",
        "imagem": "https://www.estadao.com.br/resizer/xgbdreke8bix84U4ILBWMO_KuX0=/arc-anglerfish-arc2-prod-estadao/public/3K45SRWMQBAMHEOCORS3HY2W5I.jpg"
    },

    {
        "nome": "Pão de grão-de-bico (tipo 'socca')",
        "ingredientes": ["farinha de grão-de-bico", "água", "azeite", "sal", "alecrim", "pimenta"],
        "dieta": "mediterranea",
        "modo_preparo": "Misture os ingredientes e deixe descansar por 20 minutos, despeje numa frigideira antiaderente quente e asse até dourar os dois lados. Sirva como base de sanduíches ou com saladas.",
        "imagem": "https://www.daringgourmet.com/wp-content/uploads/2020/09/Socca-24-square-edited.jpg"
    },

    {
        "nome": "Polvo grelhado com batata e páprica",
        "ingredientes": ["polvo", "batata", "páprica", "alho", "azeite", "salsinha"],
        "dieta": "mediterranea",
        "modo_preparo": "Grelhe o polvo já cozido em azeite com alho, grelhe as batatas também, polvilhe páprica, salsinha e sirva quente.",
        "imagem": "https://frescatto.vtexassets.com/assets/vtex.file-manager-graphql/images/f533ac6b-7676-4f34-8978-038ae305b047___3eb5dc0e033fa61cf52fdcb74f94cbdb.png"
    },

    {
        "nome": "Falafel assado com molho de iogurte",
        "ingredientes": ["grão-de-bico", "cebola", "alho", "salsinha", "cominho", "coentro", "sal", "azeite", "iogurte", "limão", "hortelã"],
        "dieta": "mediterranea",
        "modo_preparo": "Cozinhe o grão-de-bico e bata com todos os outros ingredientes no processador até formar uma massa, modele bolinhas e asse a 200°C por 30 minutos. Sirva com iogurte temperado com limão e hortelã.",
        "imagem": "https://static.tvgazeta.com.br/uploads/2018/10/5-498x500.png"
    },

    {
        "nome": "Espaguete integral com legumes e azeite",
        "ingredientes": ["macarrão integral", "abobrinha", "cenoura", "brócolis", "pimentão", "alho", "azeite", "sal", "manjericão", "tomilho", "alecrim", "salsinha", "coentro"],
        "dieta": "mediterranea",
        "modo_preparo": "Cozinhe o macarrão al dente, refogue os legumes picados e o pimentão em tiras com alho e azeite, misture com o macarrão e finalize com as ervas.",
        "imagem": "https://www.oitedi.com.br/_next/image?url=https%3A%2F%2Ftedi-production.s3.amazonaws.com%2Fcooking_recipes%2Ffood_description%2Fbac88301fde91362d8f4884efcf6e3a4c17d90c2.png&w=1080&q=70"
    },

    {
        "nome": "Ovos mexidos com espinafre e tomate",
        "ingredientes": ["ovo", "espinafre", "tomate-cereja", "sal", "pimenta", "azeite"],
        "dieta": "mediterranea",
        "modo_preparo": "Pique e refogue o espinafre e o tomate cordado ao meio no azeite por 2 minutos, adicione os ovos batidos com sal e pimenta, cozinhe mexendo até os ovos ficarem firmes.",
        "imagem": "https://img.freepik.com/fotos-premium/ovos-mexidos-com-espinafre-e-tomate-em-um-prato-branco-em-uma-mesa-de-madeira_80295-3885.jpg"
    },

    {
        "nome": "Salada de Grão-de-Bico com Legumes e Limão",
        "ingredientes": ["grão-de-bico", "pepino", "pimentão vermelho", "tomate-cereja", "azeite", "suco de limão", "salsa", "sal", "pimenta"],
        "dieta": "dash",
        "modo_preparo": "Corte o pepino em cubos, o tomate ao meio, pique o pimentão e cozinhe o grão-de-bico, misture todos os ingredientes em uma tigela, mexa bem e leve à geladeira por 20 minutos antes de servir.",
        "imagem": "https://guiadacozinha.com.br/wp-content/uploads/2021/08/saladadegraodebicocomlegumes.webp"
    },

    {
        "nome": "Sopa de Lentilha com Cenoura e Alho-Poró",
        "ingredientes": ["lentilha", "cenoura", "alho-poró", "alho", "azeite", "água", "sal", "tomilho", "louro"],
        "dieta": "dash",
        "modo_preparo": "Refogue o alho picado no azeite, adicione a cenoura em rodelas e o alho-poró fatiado, junte a lentilha, água e temperos, cozinhe por 30 minutos ou até ficar macio.",
        "imagem": "https://batepapoveg.com/wp-content/uploads/2024/08/sopa-de-lentilha-com-cenoura-saudavel-e-fitness1-800x530.png"
    },

    {
        "nome": "Arroz Integral com Brócolis e Castanha-do-Pará",
        "ingredientes": ["arroz integral", "brócolis", "castanha-do-pará", "azeite", "sal", "alho"],
        "dieta": "dash",
        "modo_preparo": "Cozinhe o brócolis por 3-5 minutos até ficar 'al dente' e escorra, em uma frigideira aqueça o azeite e refogue o alho até dourar, acrescente o arroz integral já cozido e refogado, mexa bem e adicione o brócolis escorrido ao arroz e misture suavemente, desligue o fogo e salpique as castanhas picadas por cima.",
        "imagem": "https://s2.glbimg.com/K43C1lygWVeNBHpL8rh3AAZ_3n8=/620x455/e.glbimg.com/og/ed/f/original/2021/09/22/receita-arroz-integral-brocolis-maca-castanha-pantera-alimentos.jpg"
    },

    {
        "nome": "Salmão Grelhado com Ervas e Limão",
        "ingredientes": ["filé de salmão", "azeite", "suco de limão", "sal", "pimenta-do-reino", "tomilho", "orégano", "alho"],
        "dieta": "dash",
        "modo_preparo": "Tempere o salmão com o suco de limão, azeite, ervas, pimenta e alho amassado, aqueça uma frigideira antiaderente e grelhe o salmão com a pele virada para baixo por 4-5 minutos, depois vire e deixe mais 2-3 minutos.",
        "imagem": "https://www.oitedi.com.br/_next/image?url=https%3A%2F%2Ftedi-production.s3.amazonaws.com%2Fcooking_recipes%2Ffood_description%2F76bc7aed7faf22a345a88230b2d78dc4edcf40ba.png&w=1080&q=70"
    },

    {
        "nome": "Omelete de Espinafre com Tomate",
        "ingredientes": ["ovo", "espinafre", "tomate-cereja", "sal", "pimenta", "azeite"],
        "dieta": "dash",
        "modo_preparo": "Pique o tomate e o espinafre. Bata os ovos em uma tigela com uma pitada de sal e pimenta, aqueça o azeite em uma frigideira e refogue o espinafre por 1 minuto até murchar, adicione o tomate e mexa por mais 1 minuto, despeje os ovos batidos e abaixe o fogo, tampe e deixe coinhar até firmar.",
        "imagem": "https://nutriumstorageaccount.blob.core.windows.net/rails-active-storage/02m11otk7v5awe0b7f53czlwaauw?sp=r&sv=2018-11-09&se=2025-08-17T18%3A51%3A51Z&rscd=inline%3B+filename%3D%22omelete.avif%22%3B+filename*%3DUTF-8%27%27omelete.avif&rsct=image%2Fjpeg&sr=b&sig=hIv%2BOokUFcU%2FSRg17imlie2bD21sEdmo9OT5DMelmVg%3D"
    },

    {
        "nome": "Quinoa com Abobrinha e Cúrcuma",
        "ingredientes": ["quinoa", "água", "abobrinha", "cebola", "azeite", "cúrcuma", "sal", "pimenta"],
        "dieta": "dash",
        "modo_preparo": "Leve a quinoa ao fogo com 1 xícara de água e uma pitada de sal e cozinhe por 15 minutos ou até secar, aqueça o azeite em uma panela, refogue a cebola, adicione a abobrinha ralada e a cúrcuma, acrescente a quinoa cozida à panela do refogado e mexa bem.",
        "imagem": "https://cozinhadalbo.com.br/wp-content/uploads/2024/01/Salada-de-Quinoa-com-Abobora-Assada-7-480x270.jpg"
    },

    {
        "nome": "Batata-Doce Assada com Alecrim",
        "ingredientes": ["batata-doce", "azeite", "alecrim", "sal", "pimenta-do-reino"],
        "dieta": "dash",
        "modo_preparo": "Descasque e corte a batata-doce em palitos ou rodelas finas, misture os pedaços com o azeite, alecrim, sal e pimenta, coloque em assadeira antiaderente e leve ao forno pré-aquecido (200°C) por 30 minutos, virando na metade.",
        "imagem": "https://cumbucaboa.com.br/cdn/shop/files/37c195a0f9e4aee75605a1cce247246a.png?v=1735226103"
    },

    {
        "nome": "Iogurte Natural com Frutas e Sementes",
        "ingredientes": ["iogurte natural desnatado", "banana", "mamão", "morango", "semente de chia", "canela"],
        "dieta": "dash",
        "modo_preparo": "Adicione o iogurte em uma tigela, acrescente as frutas picadas por cima, polvilhe a chia e, se quiser, um pouco de canela.",
        "imagem": "https://www.oitedi.com.br/_next/image?url=https%3A%2F%2Ftedi-production.s3.amazonaws.com%2Fcooking_recipes%2Ffood_description%2F8dd5149a6834c2346c547c6588599a0bfd5c7e82.png&w=1080&q=70"
    },

    {
        "nome": "Refogado de Couve com Alho",
        "ingredientes": ["couve", "alho", "azeite", "sal"],
        "dieta": "dash",
        "modo_preparo": "Lave e corte a couve em tiras bem fininhas, aqueça o azeite, doure o alho rapidamente e adicione a couve, refogue por 2 minutos no máximo e sirva imediatamente.",
        "imagem": "https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2023/05/08/757891804-couve-alho-refogada.jpg"
    },

    {
        "nome": "Torrada Integral com Abacate Amassado",
        "ingredientes": ["pão integral", "abacate", "sal", "pimenta-do-reino", "limão", "sementes"],
        "dieta": "dash",
        "modo_preparo": "Toste o pão em uma frigideira ou torradeira até ficar crocante, amasse o abacate com algumas gotas de limão, uma pitada de sal e pimenta, espalhe o abacate na torrada e finalize com sementes ou ervas frescas.",
        "imagem": "https://laferretti.com.br/wp-content/uploads/2018/08/Torrada-985x515.webp"
    },

    {
        "nome": "Bolinho de Atum",
        "ingredientes": ["atum", "ovo", "queijo ralado", "cheiro-verde", "sal", "pimenta"],
        "dieta": ["cetogenica", "low carb"],
        "modo_preparo": "Misture tudo em uma tigela até formar uma massa firme, modele bolinhos e leve ao forno a 200°C por 20 minutos, virando na metade.",
        "imagem": "https://blog.gsuplementos.com.br/wp-content/uploads/2022/02/iStock-645777598.jpg"
    },

    {
        "nome": "Frango com Creme de Espinafre",
        "ingredientes": ["filé de peito de frango", "espinafre", "creme de leite", "alho", "sal", "noz-moscada"],
        "dieta": "cetogenica",
        "modo_preparo": "Grelhe o frango com sal e pimenta, em outra panela refogue o espinafre já cozido com o alho e adicione o creme de leite, cozinhe por 3 minutos e sirva sobre o frango.",
        "imagem": "https://blog.ingredientesonline.com.br/wp-content/uploads/2020/12/espinafre.jpg"
    },

    {
        "nome": "Pizza de Berinjela",
        "ingredientes": ["berinjela", "molho de tomate", "queijo mussarela", "orégano", "azeite"],
        "dieta": "cetogenica",
        "modo_preparo": "Corte fatias grossas de berinjela, asse as fatias por 10 minutos, retire e cubra com o molho e queijo, salpique orégano e leve ao forno novamente até gratinar.",
        "imagem": "https://sabores-new.s3.amazonaws.com/public/2024/11/mini-pizza-de-berinjela.jpg"
    },

    {
        "nome": "Sopa Cremosa de Abobrinha com Queijo",
        "ingredientes": ["abobrinha", "creme de leite", "queijo meia cura", "alho", "sal", "pimenta"],
        "dieta": "cetogenica",
        "modo_preparo": "Cozinhe a abobrinha picada com o alho e o sal, bata com o mixer, volte à panela e adicione o creme de leite e o queijo meia cura ralado, mexa atpe derreter.",
        "imagem": "https://sabores-new.s3.amazonaws.com/public/2024/11/creme-de-abobrinha.jpg"
    },

    {
        "nome": "Panqueca de Ovo e Queijo",
        "ingredientes": ["ovo", "queijo parmesão ralado", "pimenta-do-reino", "orégano"],
        "dieta": "cetogenica",
        "modo_preparo": "Bata os ovos com o queijo e os temperos, despeje em frigideira antiaderente e doure dos dois lados como panqueca.",
        "imagem": "https://i.ytimg.com/vi/s7p-Q0qtgnA/hq720.jpg"
    },

    {
        "nome": "Abacate com Limão e Sementes",
        "ingredientes": ["abacate", "suco de limão", "semente de chia", "semente de linhaça"],
        "dieta": "cetogenica",
        "modo_preparo": "Amasse o abacate, misture com o suco do limão e salpique as sementes por cima.",
        "imagem": "https://s2.glbimg.com/AlWdVUL7Y_hnZWFs6En9b07MaFo=/smart/e.glbimg.com/og/ed/f/original/2019/04/10/s-marco-pt2-5_DHiXW5Q.jpg"
    },

    {
        "nome": "Tortinha de Frango com Massa de Queijo",
        "ingredientes": ["ovo", "creme de leite", "queijo ralado", "peito de frango", "alho", "cúrcuma"],
        "dieta": "cetogenica",
        "modo_preparo": "Cozinhe e desfie o frango (refogado com alho e cúrcuma). Misture o ovo, o creme de leite e o queijo para formar uma massa cremosa, coloque em forminhas, adicione o frango por cima e leve ao forno médio por 15-20 minutos até dourar.",
        "imagem": "https://guiadacozinha.com.br/wp-content/uploads/2019/10/torta-de-frango-com-queijo-11482.jpg"
    },

    {
        "nome": "Escondidinho de Couve-Flor com Carne",
        "ingredientes": ["carne moída", "couve-flor", "requeijão", "queijo ralado"],
        "dieta": "cetogenica",
        "modo_preparo": "Refogue a carne moída, cozinhe e amasse o couve-flor. Monte uma camada de carne, cubra com purê de couve-flor misturado ao requeijão, polvilhe queijo e gratine no forno.",
        "imagem": "https://paineirasfit.com.br/wp-content/uploads/2021/05/162-scaled-e1588953929728.jpg"
    },

    {
        "nome": "Omelete Caprese (com tomate e manjericão)",
        "ingredientes": ["ovo", "tomate-cereja", "queijo mussarela de búfala", "manjericão", "sal", "pimenta", "creme de leite"],
        "dieta": "cetogenica",
        "modo_preparo": "Bata os ovos com o creme de leite, tempere e coloque numa frigideira antiaderente, quando começar a firmar adicione o tomate cortado ao meio, o queijo e o manjericão, dobre e sirva ainda cremoso por dentro.",
        "imagem": "https://www.lecreuset.com.br/dw/image/v2/BDRT_PRD/on/demandware.static/-/Sites-le-creuset-br-master/default/dw4870418a/images/SKI_014.jpg"
    },

    {
        "nome": "Brownie de Cacau e Castanhas",
        "ingredientes": ["ovo", "manteiga/margarina", "cacau em pó", "adoçante", "farinha de amêndoas", "castanhas"],
        "dieta": "cetogenica",
        "modo_preparo": "Misture tudo até virar uma massa homogênea, leve a uma forma untada e asse a 180°C por 15 minutos. Fica úmido por dentro e crocante por fora.",
        "imagem": "https://i.ytimg.com/vi/qBsBaZ4RnAk/hq720.jpg"
    } 
];

export default receitas;