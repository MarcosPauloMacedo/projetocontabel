let ids = [
    0111301,
    0111302,
    0111303,
    0111399,
    0112101,
    0112102,
    0112199,
    0113000,
    0114800,
    0115600,
    0116401,
    0116402,
    0116403,
    0116499,
    0119901,
    0119902,
    0119903,
    0119904,
    0119905,
    0119906,
    0119907,
    0119908,
    0119909,
    0119999,
    0121101,
    0121102,
    0122900,
    0131800,
    0132600,
    0133401,
    0133402,
    0133403,
    0133404,
    0133405,
    0133406,
    0133407,
    0133408,
    0133409,
    0133410,
    0133411,
    0133499,
    0134200,
    0135100,
    0139301,
    0139302,
    0139303,
    0139304,
    0139305,
    0139306,
    0139399,
    0141501,
    0141502,
    0142300,
    0151201,
    0151202,
    0151203,
    0152101,
    0152102,
    0152103,
    0153901,
    0153902,
    0154700,
    0155501,
    0155502,
    0155503,
    0155504,
    0155505,
    0159801,
    0159802,
    0159803,
    0159804,
    0159899,
    0161001,
    0161002,
    0161003,
    0161099,
    0162801,
    0162802,
    0162803,
    0162899,
    0163600,
    0170900,
    0210101,
    0210102,
    0210103,
    0210104,
    0210105,
    0210106,
    0210107,
    0210108,
    0210109,
    0210199,
    0220901,
    0220902,
    0220903,
    0220904,
    0220905,
    0220906,
    0220999,
    0230600,
    0311601,
    0311602,
    0311603,
    0311604,
    0312401,
    0312402,
    0312403,
    0312404,
    0321301,
    0321302,
    0321303,
    0321304,
    0321305,
    0321399,
    0322101,
    0322102,
    0322103,
    0322104,
    0322105,
    0322106,
    0322107,
    0322199,
    0500301,
    0500302,
    0600001,
    0600002,
    0600003,
    0710301,
    0710302,
    0721901,
    0721902,
    0722701,
    0722702,
    0723501,
    0723502,
    0724301,
    0724302,
    0725100,
    0729401,
    0729402,
    0729403,
    0729404,
    0729405,
    0810001,
    0810002,
    0810003,
    0810004,
    0810005,
    0810006,
    0810007,
    0810008,
    0810009,
    0810010,
    0810099,
    0891600,
    0892401,
    0892402,
    0892403,
    0893200,
    0899101,
    0899102,
    0899103,
    0899199,
    0990401,
    0990402,
    0990403,
    1011201,
    1011202,
    1011203,
    1011204,
    1011205,
    1012101,
    1012102,
    1012103,
    1012104,
    1013901,
    1013902,
    1020101,
    1020102,
    1031700,
    1032501,
    1032599,
    1033301,
    1033302,
    1041400,
    1042200,
    1043100,
    1051100,
    1052000,
    1053800,
    1061901,
    1061902,
    1062700,
    1063500,
    1064300,
    1065101,
    1065102,
    1065103,
    1066000,
    1069400,
    1071600,
    1072401,
    1072402,
    1081301,
    1081302,
    1082100,
    1091101,
    1091102,
    1092900,
    1093701,
    1093702,
    1094500,
    1095300,
    1096100,
    1099601,
    1099602,
    1099603,
    1099604,
    1099605,
    1099606,
    1099607,
    1099699,
    1121600,
    1122404,
    1122409,
    1122401,
    1122402,
    1122403,
    1210700,
    1311100,
    1312000,
    1313800,
    1314600,
    1321900,
    1322700,
    1323500,
    1330800,
    1340501,
    1340502,
    1340599,
    1351100,
    1352900,
    1353700,
    1354500,
    1359600,
    1411801,
    1411802,
    1412601,
    1412602,
    1412603,
    1413401,
    1413402,
    1413403,
    1414200,
    1421500,
    1422300,
    1510600,
    1521100,
    1529700,
    1531901,
    1531902,
    1532700,
    1533500,
    1539400,
    1540800,
    1610203,
    1610204,
    1610205,
    1621800,
    1622601,
    1622602,
    1622699,
    1623400,
    1629301,
    1629302,
    1710900,
    1721400,
    1722200,
    1731100,
    1732000,
    1733800,
    1741901,
    1741902,
    1742701,
    1742702,
    1742799,
    1749400,
    1811301,
    1811302,
    1812100,
    1813001,
    1813099,
    1821100,
    1822901,
    1822999,
    1830001,
    1830002,
    1830003,
    1910100,
    1921700,
    1922501,
    1922502,
    1922599,
    1931400,
    1932200,
    2011800,
    2012600,
    2013401,
    2013402,
    2014200,
    2019301,
    2019399,
    2021500,
    2022300,
    2029100,
    2031200,
    2032100,
    2033900,
    2040100,
    2051700,
    2052500,
    2061400,
    2062200,
    2063100,
    2071100,
    2072000,
    2073800,
    2091600,
    2092401,
    2092402,
    2092403,
    2093200,
    2094100,
    2099199,
    2110600,
    2121101,
    2121102,
    2121103,
    2122000,
    2123800,
    2211100,
    2219600,
    2221800,
    2222600,
    2223400,
    2229301,
    2229302,
    2229303,
    2229399,
    2311700,
    2312500,
    2319200,
    2320600,
    2330301,
    2330302,
    2330303,
    2330304,
    2330305,
    2330399,
    2341900,
    2342701,
    2342702,
    2349401,
    2349499,
    2391501,
    2391502,
    2391503,
    2392300,
    2399101,
    2399102,
    2399199,
    2411300,
    2412100,
    2421100,
    2422901,
    2422902,
    2423701,
    2423702,
    2424501,
    2424502,
    2431800,
    2439300,
    2441501,
    2441502,
    2442300,
    2443100,
    2449101,
    2449102,
    2449103,
    2449199,
    2451200,
    2452100,
    2511000,
    2512800,
    2513600,
    2521700,
    2522500,
    2531401,
    2531402,
    2532201,
    2532202,
    2539001,
    2539002,
    2541100,
    2542000,
    2543800,
    2591800,
    2592601,
    2592602,
    2593400,
    2599301,
    2599302,
    2599399,
    2610800,
    2621300,
    2622100,
    2631100,
    2632900,
    2640000,
    2651500,
    2652300,
    2660400,
    2670101,
    2670102,
    2680900,
    2710401,
    2710402,
    2710403,
    2721000,
    2722801,
    2722802,
    2731700,
    2732500,
    2733300,
    2740601,
    2740602,
    2751100,
    2759701,
    2759799,
    2790201,
    2790202,
    2790299,
    2811900,
    2812700,
    2813500,
    2814301,
    2814302,
    2815101,
    2815102,
    2821601,
    2821602,
    2822401,
    2822402,
    2823200,
    2824101,
    2824102,
    2825900,
    2829101,
    2829199,
    2831300,
    2832100,
    2833000,
    2840200,
    2851800,
    2852600,
    2853400,
    2854200,
    2861500,
    2862300,
    2863100,
    2864000,
    2865800,
    2866600,
    2869100,
    2910701,
    2910702,
    2910703,
    2920401,
    2920402,
    2930101,
    2930102,
    2930103,
    2941700,
    2942500,
    2943300,
    2944100,
    2945000,
    2949201,
    2949299,
    2950600,
    3011301,
    3011302,
    3012100,
    3031800,
    3032600,
    3041500,
    3042300,
    3050400,
    3091101,
    3091102,
    3092000,
    3099700,
    3101200,
    3102100,
    3103900,
    3104700,
    3211601,
    3211602,
    3211603,
    3212400,
    3220500,
    3230200,
    3240001,
    3240002,
    3240003,
    3240099,
    3250701,
    3250702,
    3250703,
    3250704,
    3250705,
    3250706,
    3250707,
    3250709,
    3291400,
    3292201,
    3292202,
    3299001,
    3299002,
    3299003,
    3299004,
    3299005,
    3299006,
    3299099,
    3311200,
    3312102,
    3312103,
    3312104,
    3313901,
    3313902,
    3313999,
    3314701,
    3314702,
    3314703,
    3314704,
    3314705,
    3314706,
    3314707,
    3314708,
    3314709,
    3314799,
    3315500,
    3316301,
    3316302,
    3317101,
    3317102,
    3319800,
    3321000,
    3329501,
    3329599,
    3520401,
    3520402,
    3530100,
    3600602,
    3702900,
    3811400,
    3812200,
    3831901,
    3831999,
    3832700,
    3839401,
    3839499,
    4120400,
    4211101,
    4211102,
    4212000,
    4213800,
    4221901,
    4221902,
    4221903,
    4221904,
    4221905,
    4222701,
    4222702,
    4223500,
    4291000,
    4292801,
    4292802,
    4299501,
    4299599,
    4311801,
    4311802,
    4312600,
    4313400,
    4319300,
    4321500,
    4322301,
    4322302,
    4322303,
    4329101,
    4329102,
    4329103,
    4329104,
    4329105,
    4329199,
    4330401,
    4330402,
    4330403,
    4330404,
    4330405,
    4330499,
    4391600,
    4399102,
    4399103,
    4399104,
    4399105,
    4399199,
    4511101,
    4511102,
    4511103,
    4511104,
    4511105,
    4511106,
    4512901,
    4512902,
    4520001,
    4520002,
    4520003,
    4520004,
    4520005,
    4520006,
    4520007,
    4520008,
    4530701,
    4530702,
    4530703,
    4530704,
    4530705,
    4530706,
    4541201,
    4541202,
    4541203,
    4541204,
    4541206,
    4541207,
    4542101,
    4542102,
    4543900,
    4611700,
    4612500,
    4613300,
    4614100,
    4615000,
    4616800,
    4617600,
    4618401,
    4618402,
    4618403,
    4618499,
    4619200,
    4621400,
    4622200,
    4623101,
    4623102,
    4623103,
    4623104,
    4623105,
    4623106,
    4623107,
    4623108,
    4623109,
    4623199,
    4631100,
    4632001,
    4632002,
    4632003,
    4633801,
    4633802,
    4633803,
    4634601,
    4634602,
    4634603,
    4634699,
    4635401,
    4635402,
    4635403,
    4636201,
    4636202,
    4637101,
    4637102,
    4637103,
    4637104,
    4637105,
    4637106,
    4637107,
    4637199,
    4639701,
    4639702,
    4641901,
    4641902,
    4641903,
    4642701,
    4642702,
    4643501,
    4643502,
    4644301,
    4644302,
    4645101,
    4645102,
    4645103,
    4646001,
    4646002,
    4647801,
    4647802,
    4649401,
    4649402,
    4649403,
    4649404,
    4649405,
    4649406,
    4649407,
    4649408,
    4649409,
    4649499,
    4651601,
    4651602,
    4652400,
    4661300,
    4662100,
    4663000,
    4664800,
    4665600,
    4669901,
    4669999,
    4671100,
    4672900,
    4673700,
    4674500,
    4679601,
    4679602,
    4679603,
    4679604,
    4679699,
    4681801,
    4681802,
    4681803,
    4681804,
    4681805,
    4682600,
    4683400,
    4684201,
    4684202,
    4684299,
    4685100,
    4686901,
    4686902,
    4687701,
    4687702,
    4687703,
    4689301,
    4689302,
    4689399,
    4691500,
    4692300,
    4693100,
    4711301,
    4711302,
    4712100,
    4713002,
    4713004,
    4713005,
    4721102,
    4721103,
    4721104,
    4722901,
    4722902,
    4723700,
    4724500,
    4729601,
    4729602,
    4729699,
    4731800,
    4732600,
    4741500,
    4742300,
    4743100,
    4744001,
    4744002,
    4744003,
    4744004,
    4744005,
    4744006,
    4744099,
    4751202,
    4751200,
    4752100,
    4753900,
    4754701,
    4754702,
    4754703,
    4755501,
    4755502,
    4755503,
    4756300,
    4757100,
    4759801,
    4759899,
    4761001,
    4761002,
    4761003,
    4762800,
    4763601,
    4763602,
    4763603,
    4763604,
    4763605,
    4771701,
    4771702,
    4771703,
    4771704,
    4772500,
    4773300,
    4774100,
    4781400,
    4782201,
    4782202,
    4783101,
    4783102,
    4784900,
    4785701,
    4785799,
    4789001,
    4789002,
    4789003,
    4789004,
    4789005,
    4789006,
    4789007,
    4789008,
    4789009,
    4789099,
    4911600,
    4912401,
    4912402,
    4912403,
    4921301,
    4921302,
    4922103,
    4923001,
    4923002,
    4924800,
    4929901,
    4929902,
    4929903,
    4929904,
    4930201,
    4930202,
    4930203,
    4930204,
    4940000,
    4950700,
    5011401,
    5011402,
    5012201,
    5012202,
    5021101,
    5021102,
    5022001,
    5022002,
    5030101,
    5030102,
    5030103,
    5091201,
    5091202,
    5099801,
    5099899,
    5111100,
    5112901,
    5112999,
    5120000,
    5130700,
    5211701,
    5211702,
    5211799,
    5212500,
    5221400,
    5223100,
    5229001,
    5229002,
    5229099,
    5231101,
    5231102,
    5231103,
    5239701,
    5239799,
    5240199,
    5250801,
    5250802,
    5250803,
    5250804,
    5250805,
    5310502,
    5320201,
    5320202,
    5510801,
    5510802,
    5510803,
    5590601,
    5590602,
    5590603,
    5590699,
    5611201,
    5611203,
    5611205,
    5611204,
    5612100,
    5620101,
    5620102,
    5620103,
    5620104,
    5811500,
    5812301,
    5812302,
    5813100,
    5819100,
    5821200,
    5822101,
    5822102,
    5823900,
    5829800,
    5911101,
    5911102,
    5911199,
    5912001,
    5912002,
    5912099,
    5913800,
    5914600,
    5920100,
    6010100,
    6021700,
    6022501,
    6110801,
    6110802,
    6110803,
    6110899,
    6120501,
    6120502,
    6120599,
    6130200,
    6141800,
    6142600,
    6143400,
    6190601,
    6190602,
    6190699,
    6201501,
    6201502,
    6201500,
    6202300,
    6203100,
    6204000,
    6209100,
    6311900,
    6319400,
    6391700,
    6399200,
    6493000,
    6621501,
    6621502,
    6622300,
    6810201,
    6821801,
    6821802,
    6822600,
    6911701,
    6911703,
    6920601,
    6920602,
    7020400,
    7111100,
    7112000,
    7119701,
    7119702,
    7119703,
    7119704,
    7119799,
    7120100,
    7210000,
    7220700,
    7311400,
    7312200,
    7319001,
    7319002,
    7319003,
    7319004,
    7319099,
    7320300,
    7410202,
    7410203,
    7410299,
    7420001,
    7420002,
    7420003,
    7420004,
    7420005,
    7490101,
    7490102,
    7490103,
    7490104,
    7490105,
    7490199,
    7500100,
    7711000,
    7719501,
    7719502,
    7719599,
    7721700,
    7722500,
    7723300,
    7729201,
    7729202,
    7729203,
    7729299,
    7731400,
    7732201,
    7732202,
    7733100,
    7739001,
    7739002,
    7739003,
    7739099,
    7740300,
    7810800,
    7911200,
    7912100,
    7990200,
    8011101,
    8011102,
    8012900,
    8020001,
    8020002,
    8030700,
    8111700,
    8121400,
    8122200,
    8129000,
    8130300,
    8211300,
    8219901,
    8219999,
    8220200,
    8230001,
    8230002,
    8291100,
    8292000,
    8299701,
    8299703,
    8299706,
    8299707,
    8299799,
    8511200,
    8512100,
    8513900,
    8520100,
    8531700,
    8532500,
    8533300,
    8541400,
    8542200,
    8550302,
    8591100,
    8592901,
    8592902,
    8592903,
    8592999,
    8593700,
    8599601,
    8599602,
    8599603,
    8599604,
    8599605,
    8599699,
    8610101,
    8610102,
    8621601,
    8621602,
    8622400,
    8630501,
    8630502,
    8630503,
    8630504,
    8630506,
    8630507,
    8630599,
    8640201,
    8640202,
    8640203,
    8640204,
    8640205,
    8640206,
    8640207,
    8640208,
    8640209,
    8640299,
    8650001,
    8650002,
    8650003,
    8650004,
    8650005,
    8650006,
    8650007,
    8650099,
    8660700,
    8690901,
    8690902,
    8690903,
    8690904,
    8690999,
    8711501,
    8711502,
    8711503,
    8711504,
    8711505,
    8712300,
    8720401,
    8720499,
    8730101,
    8730102,
    8730199,
    8800600,
    9001901,
    9001902,
    9001903,
    9001904,
    9001905,
    9001906,
    9001999,
    9002701,
    9002702,
    9003500,
    9101500,
    9102301,
    9102302,
    9103100,
    9200301,
    9200302,
    9200399,
    9311500,
    9312300,
    9313100,
    9319101,
    9319199,
    9321200,
    9329801,
    9329802,
    9329803,
    9329804,
    9329899,
    9511800,
    9512600,
    9521500,
    9529101,
    9529102,
    9529103,
    9529104,
    9529105,
    9529106,
    9529199,
    9601701,
    9601702,
    9601703,
    9602501,
    9602502,
    9603301,
    9603302,
    9603303,
    9603304,
    9603305,
    9603399,
    9609202,
    9609204,
    9609205,
    9609206,
    9609207,
    9609208,
    9609299,
    9700500
]

console.log(ids[90])