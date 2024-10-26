// develepment MODE
const DEBUG=false;

// =============================================== CONFIGURAÇÕES DA SALA
const roomSimbol = "🐱‍👤";

const roomName = `⚡ LGD | X1-DUPLO |⚡`;
const maxPlayers = 30;
const roomPublic = DEBUG ? false : true;
const geo = [{"code": "", "lat": -19.6283, "lon": -46.6409}];

const room = HBInit({
    roomName: roomName,
    maxPlayers: maxPlayers,
    public: roomPublic,
    noPlayer: true,
    geo: geo[0],
    token: "thr1.AAAAAGZzglXq3jUweYugHw.pn1QHHnVqz4",
})

const MasterAuth = ["dP7nhCQfSCewnhVa1XFvtxyiY7y-6gkbG1qwci9WZV4"];

const scoreLimit = 2;
const timeLimit = 2;
const maxTeamSize = 2;
const afkLimit = 12;
const jumpLineTLimit = 30;
const minMute = 1;
const maxMute = 60;
const stoppedLimit = 12;
const maxRecords = 5;
const pauseTime = 15;

room.setTeamsLock(true);
room.setScoreLimit(scoreLimit);
room.setTimeLimit(timeLimit);

const extraTimePos = [1, 2, 3];
let extraTime;
let isRecording = false;
let gs = 0;
let extendedP = [];
let stats = {
    players: {},
    totalGoals: 0,
    totalAssists: 0,
    totalShots: 0,
    totalSaves: 0
};
let bets = {};


let xingo = ["seu preto", "seu macaco", "macaco", "seu negro", "pretinho", "resto de aborto", "seu mcc", "Negrinho", "carvão", "nazista", "Nazista", "macaca", "preta", "MACACO", "Macaco"];
let nazist = ['hitler'];

// =============================================== LINKS
const discordLink = "https://discord.gg/gy5mgbd6JQ";
const disc_roomLink = "https://discord.com/api/webhooks/1205984752608485417/pVJIjQSWmjQwJq_FqHs92BpQkmK6N4n7WQrODyvxRXm85xpBBCI-4oReu6LFXgNefUui";
const disc_Chat = "https://discord.com/api/webhooks/1205986364730900520/N5CIguqBEUuPpNnnEcb5nPnzxGSyiS9Z4LL2Mh6TclVggnsIJvpbdWfXJqAjjj6Vp27L";
const disc_CallAdmin = "https://discord.com/api/webhooks/1205987425705271428/T3WRZvkilo3JR6d_PfiC9VxyVBNK_NTbP3VNO7kysDqNjKnV2Fwy-kP-3jms_F1qyMhB";
const disc_Moderation = "https://discord.com/api/webhooks/1205991456230350849/qxDTkFGLrcgG9qcSG1GNkhJfsO7b5x9vQi17uPmCsL7Pd0pPZjmiNMPj1l6--g1SHeYd";
const disc_Recs = "https://discord.com/api/webhooks/1216078060479053895/OxtdsyBRMZjuMJiKTUf8QlG9_tXlLH95Ts5sqz5lf2FBFwi5ijr82NYxkySq_ysqhEbJ";
const disc_Local = "https://discord.com/api/webhooks/1273835082884321340/FEOgNx9x7RCT3ZjBIaqilAvZ35appymuQgOKJoLwnjLuMa9c468jE-VN4jbTx_N76VX6";
const disc_erros = "https://discord.com/api/webhooks/1276031734483521618/97utdPp3vF040dxUEzq-WUNrjEuc4X5EsFbrecXnYs4I-KY_K7KZrgsnetMn4OPzULh_";
const disc_kick = "https://discord.com/api/webhooks/1275903450756157554/Nb5KuNcr2DQmjssqJv2WRqKEVwfsOOg5HRDoRPiKjdbbV3JpEAOxZ6EtJ6563rn6-WPr";
const disc_Gifs = "https://discord.com/api/webhooks/1276013028458102907/u6SrsT4duOsHasLJ6ad-DE-nQXk9NzLP3d6tKU-UPAHtoIQ31RFVMNJqHJkrNN7nL_kO";
const disc_xingo = "https://discord.com/api/webhooks/1276033401257984060/j6rzGvPefe4iX5fKsn-hrmrsoTJDExe24fkqo3eBWRTznaqyDJU2HgalHdMtIttYGAvp";
const disc_mutes = "https://discord.com/api/webhooks/1276026936623108199/HlZmYOU2ITpH7bTEdXTif5iSLvYSg0aFOfEmTZ7RQFAPOhsINpPlwXuORRAunRy4kX3b";
const disc_color = "https://discord.com/api/webhooks/1276744778264084524/Alw5geEEYX6GsYViMKC7drKhoP047WHgZsQ36RNminfw4bRxlhD22BUrM5TlnvjAxcdm";
const disc_stats = "https://discord.com/api/webhooks/1276748419674804236/yPL2uHHt2dUb4xY2eZoDTT7Mkdn4aONEg2caFHQE6FgGZbd8x4bs0QJ5zwqUnLZtoKFu";
const disc_updates = "https://discord.com/api/webhooks/1276751272640512060/jQzUISPsR2M07Iy70JkI9uCibWa7Qi6DBna7KOs-f9-ZI3hoeSqQZS8xRewCMrzfzOm9";
const disc_feed = "https://discord.com/api/webhooks/1276755382940733551/Js8aY-fA0wPiRbCmSQDnvmom1sHJmOEUrSPuQCChBEQNr-y-Uz8rR1bsyPIlrYuWbP2e";

// =============================================== ARMAZENAMENTO LOCAL
const LS = {
    "PLAYERS": "Players",
    "BANS": "Bans",
    "RECORDS": "Records",
    "SEQUENCE": "Sequence"
}

// =============================================== PADRÕES DE BATE-PAPO
const Color = {
    "white": 16777215,
    "black": 2303786,
    "red": 15548997,
    "darkred": 10038562,
    "green": 5763719,
    "darkgreen": 2067276,
    "aqua": 1752220,
    "darkaqua": 1146986,
    "blue": 3447003,
    "darkblue": 2123412,
    "purple": 10181046,
    "darkpurple": 7419530,
    "pink": 15277667,
    "darkpink": 11342935,
    "gold": 15844367,
    "darkgold": 12745742,
    "orange": 15105570,
    "darkorange": 11027200,
    "gray": 9807270,
    "darkgray": 9936031,
    "darkergray": 8359053,
    "lightgray": 12370112,
    "navy": 3426654,
    "darknavy": 2899536,
    "yellow": 16776960,
    "burple": 5793266,
    "fuschia": 15418782,
    "grayple": 10070709,
    "bronze": 13467442,
    "lightblue": 38655
}

const Colors_Arr = ["white", "black", "red", "darkred", "green", "darkgreen", "aqua", "darkaqua", "blue", "darkblue", "purple", "darkpurple", "pink", "darkpink", "gold",
"darkgold", "orange", "darkorange", "lightgray", "gray", "darkgray", "darkergray", "navy", "darknavy", "yellow", "burple", "fuschia", "grayple", "bronze", "lightblue"]

const vipClassicColor = Color.green;
const vipGoldColor = Color.gold;
const vipPremiumColor = Color.lightblue;
const modColor = Color.blue;
const admColor = Color.bronze;
const devColor = Color.lightgray;
const masterColor = Color.orange;

const welcomeMsgColor = Color.yellow;
const warningPvColor = Color.green;
const warningAllColor = Color.blue;
const provoColor = Color.gold;
const specListColor = Color.green;
const specificHelpMsg = Color.lightgreen;
const warningInvalidCommandColor = Color.red;

const Font = {
    NORMAL: "normal",
    BOLD: "bold",
    ITALIC: "italic",
    SMALL: "small",
    SMALL_BOLD: "small-bold"
}

const HaxNotification = {
    NOSOUND: 0,
    CHAT: 1,
    MENTION: 2
}

// ========================== FRASES
const frasesGols = [" QUE GOL É ESSE, SENHORAS E SENHORES! Você é uma lenda, ",
    " GOOOOOOOOOOL! O MUNDO PRECISA DE MAIS COMO VOCÊ, ",
    " Olha esse gol do(a) ",
    " É GOOOOOL do(a) ",
    " Que golaço do(a) ",
    " GOOOOOOOOOOL! APARECENDO QUANDO MAIS PRECISAMOS, GRAÇAS AO ",
    " MINHA NOSSA SENHORA!!!! O IMPOSSÍVEL ACONTECEU MEU DEUS DO CÉU, É GOL DO(A) ",
    " QUE GOLAÇO DO(A) ",
    " Impresionante a finalização do(a) ",
    " É CAIXA, É CAIXA, É CAIXA, É GOOOOOOOOOL DO(A) "
];

const frasesAssist = [" com o lindo passe de ",
    " acompanhado do belíssimo passe de ",
    " com o bolão na boca do gol de ",
    " com a assistência fenomenal de ",
    " e não podemos esquecer do passe magnífico de"
];

const frasesOwnGoal = [" Tenho certeza que foi sem querer né, ",
    " TÁ JOGANDO NO TIME ERRADO, ",
    " PARABÉNS!! O TIME ADVERSÁRIO AGRADECE, ",
    " É GOOOOOOOOOL... contra do "
];

// ====================================== VARIÁVEIS DE UNIFORMES
const UNIFORMS = {
    /* NATION TEAM */
    "bra": ["do BRASIL", 0, 0x3347B3, [0x018434, 0xf8de2e, 0xf8de2e]],
    "bra2": ["do BRASIL 2° KIT", 0, 0xFFFFFF, [0x121AFF]],
    "ale": ["da ALEMANHA", 90, 0xFFFFFF, [0x121003, 0xC70000, 0xF5C600]],
    "arg": ["da ARGENTINA", 90, 0xE3AC42, [0x74ACDF, 0xFFFFFF, 0x74ACDF]],
    "esp": ["da ESPANHA", 0, 0xDBA640, [0x7B111A, 0x7B111A, 0x7B111A]],
    "por": ["de PORTUGAL", 90, 0xFFFFFF, [0x990000, 0xBA0000]],
    "ita": ["da ITÁLIA", 60, 0xFFFFFF, [0x0249a8, 0x0366EB, 0x0082d3]],
    "uru": ["do URUGUAI", 90, 0xFFFFFF, [0x37AAD4]],
    "fra": ["da FRANÇA", 90, 0xFFFFFF, [0x142A52]],
    "ing": ["da INGLATERRA", 90, 0x0f2544, [0x408CFF, 0xA1C6FF, 0xe0e4e9]],
    "bel": ["da BÉLGICA", 90, 0xD19E1F, [0x000000, 0x7D0000, 0x7A0B0B]],
    "hol": ["da HOLANDA", 90, 0xFFFFFF, [0xB85311]],
    
    /* BRAZILIAN TEAMS */
    "bah": ["do BAHIA", 0, 0xFFFFFF, [0x0A4AE8, 0xF20533, 0x0A4AE8]],
    "vit": ["do VITÓRIA", 90, 0xFFFFFF, [0xFF1D0D, 0x000000]],
    "cor": ["do CORINTHIANS", 90, 0xFFFFFF, [0x000000, 0xFFFFFF]],
    "pal": ["do PALMEIRAS",90, 0xFFFFFF, [0xFFFFFF, 0x006920]],
    "bot": ["do BOTAFOGO", 90, 0xFFFFFF, [0x050200]],
    "cru": ["do CRUZEIRO", 0, 0xFFFFFF, [0xFFFFFF, 0x0600A6]],
    "int": ["do INTERNACIONAL", 90, 0xFFFFFF, [0xFF0808, 0xAB0000]],
    "spfc": ["do SÃO PAULO", 90, 0xFFFFFF, [0xFF0000, 0xFFFFFF]],
    "san": ["do SANTOS", 0, 0xFFFFFF, [0x000000, 0xFFFFFF]],
    "gre": ["do GRÊMIO", 0, 0xFFFFFF, [0x75ACFF, 0x000000, 0x75ACFF]],
    "flu": ["do FLUMINENSE", 0, 0xFFFFFF, [0x2A524F, 0x871F39, 0x2A524F]],
    "fla": ["do FLAMENGO", 0, 0xFFFFFF, [0xFF0000, 0x000000, 0xFF0000]],
    "for": ["do FORTALEZA", 90, 0xFFFFFF, [0x182587, 0xE32026, 0x182587]],
    "cap": ["do ATHLETICO-PR", 45, 0xFFFFFF, [0xE8153F, 0x000000, 0xE8153F]],
    "rem": ["do REMO", 0, 0x000000, [0xFEFFDE]],
    "cui": ["do CUIABÁ", 90, 0xFFFFFF, [0x217430, 0xF4D42F]],
    "jvn": ["do JUVENTUDE", 0, 0x00964B, [0x00964B, 0xFFFFFF, 0x00964B]],
    "spo": ["do SPORT", 0, 0xFFE600, [0xFF0D0D, 0x000000, 0xFF0D0D]],
    "gol": ["do GOIÁS", 90, 0x23CC4A, [0x0C4519]],
    "vas": ["do VASCO", 140, 0xFF1212, [0xFFFFFF, 0x002033, 0xFFFFFF]],

    /* OUTROS */
    "red": ["do RED-DEFAULT", 60, 0xFFFFFF, [0xBD2F2F]],
    "blue": ["do BLUE-DEFAULT", 60, 0xFFFFFF, [0x281796]],
    "utd3": ["do MANCHESTER UNITED 3° KIT", -37, 0xF0CF0D, [0x1E416D, 0x235287, 0x1463A4]],
    "pen": ["do PENHÃROL", 90, 0xFFFFFF, [0xFAC904, 0x000000, 0xFAC904]],
    "psg": ["do PSG", 180, 0xFFFFFF, [0x000080, 0xB22222, 0x000080]],
    "bay": ["do BAYERN", 30, 0xFFFFFF, [0x870505, 0x800B0B, 0x7A0B0B]],
    "chel": ["do CHELSEA", 90, 0xFFFFFF, [0x0000CD, 0x00008D, 0x0000CD]],
    "mil": ["do MILAN", 180, 0xFFFFFF, [0x000000, 0xFF0000, 0x000000]],
    "riv": ["do RIVER PLATE", 45, 0x000000, [0xFFFAFA, 0xFF0000, 0xFFFAFA]],
    "bor": ["do BORUSSIA", 90, 0x000000, [0xEEEE00, 0xFFFF00, 0xFFFF04]],
    "bar": ["do BARCELONA", 0, 0xDEB405, [0xA2214B, 0x00529F]],
    "rmd": ["do REAL MADRID", 0, 0xDAA520, [0xFFFAFA, 0xFFFAFA, 0xFFFAFA]]
}
const UNIFORMS_ARR_NATIONTEAM = ["!bra", "!bra2", "!ale", "!arg", "!!esp", "!por", "!ita", "!uru", "!fra", "!ing", "!bel", "!hol"];
const UNIFORMS_ARR_BRAZILIANTEAMS = ["!bah", "!vit", "!cor", "!pal", "!bot", "!cru", "!int", "!spfc", "!san", "!gre", "!flu", "!fla", "!for", "!cap", "!rem", "!cui", "!jvn", "!spo", "!gol", "!vas"];
const UNIFORMS_ARR_OUTROS = ["!red", "!blue", "!utd3", "!pen", "!psg", "!bay", "!chel", "!mil", "!riv", "!bor", "!bar", "!rmd"]

// ====================================== PROVOCAÇÕES
const PROVOS = {
    "provo1": "MEU CHUTE E QUE NEM UMA BOMBA, BOOM 🤯",
    "provo2": "PEGA TUA AGENDINHA, PQ ISSO FOI UMA AULA 😂 ",
    "provo3": "VC É NARRADOR ??? SAI DO CHAT KRLH !!!",
    "provo4": "IFOOD 🔊 ENDEREÇO DENTRO DA REDE !!!",
    "provo5": "TA PERDIDO ? LIGA O WAZE 🤣",
    "provo6": "AQUI E MURALHA RAPAIZ, PASSA NADA !!!",
    "provo7": "QUEM BOTO OS BOTS NO EZ ???",
    "provo8": "MOFADOR DE BANCO, QUERENDO FALAR DE MIM 🤣",
    "provo9": "PEGA LÁ OBESO KKKKKKKKKKKK ",
    "provo10": "TÁ ACHANDO QUE É RONALDINHO ??? TOCA ISSO !",
    "provo11": "VAI DE TABELA NA CASA DO CARALHO SUA PUTINHA 🤬",
    "provo12": "ISSO Q É UMA DUPLA, cebolinha e cracudo",
    "provo13": "SOU CONHECIDO POR QUEBRAR PANELAS, ESSA EU QUEBRO FÁCIL!",
    "provo14": "DUAS COISAS NA VIDA SÃO CERTAS, A MORTE E O GOL DO KEVINHO!!!⚽",
    "provo15": "TA EM CHOQUE JOGADOR, FICOU PARALIZADO KKKKKKKKK",
    "provo16": "ESSE ERA O RED ???",
    "provo17": "PROCURA-SE RIVAL EM ABF, PROCURA-SE RIVAL EM ABF",
    "provo18": "ISSO TUDO PRA PERDER ? KKKKKKKKK",
    "provo19": "FP COMBINA COM VC, FEIO PACAS KKKKKK",
    "provo20": "SE JOGASSE O QUANTO QUE FALA...",
    "provo21": "ESSE ERA O RED ?",
    "provo22": "ESSE ERA O BLUE ?",
    "provo23": "SAIU, SAIU!! GOL DO KRISTOPHER SAIU!! 🎶",
    "provo24": "QUER CHORAR PEGA UM POTE, PQ AQUI É SÓ BOMBA DO KPOTY 💣 🤯",
    "provo25": "AQUIETE-SE, PQ QUEM TA NA SUA FRENTE E B7 !!!",
    "provo26": "O KONORIUM É A PRÓPRIA MORTE",
    "provo27": "NAO E CREME E MD LO CHEFE !!",
    "provo28": "SENTE-SE NA PRESENÇA DO REI THUNAY 👑",
    "provo29": "SABE QUEM SÓ FICA NO BANCO ??? HNX",
    "provo30": "ISSO É ALFREDO 👽, HUMANOS!",
    "provo31": "JOGO FÁCIL, JOGO FÁCIL HAHA",
    "provo32": "ACHEI QUE SERIA MAIS DIFICIL.",
    "provo33": "O RED FOI DE KPOTA",
    "provo34": "O BLUE FOI DE KPOTA",
    "provo35": "NO RED SÓ TEM PUTAS E VIADOS",
    "provo36": "NO BLUE SÓ TEM PUTAS E VIADOS",
    "provo37": "PUTA QUE PARIU O HNX É O PIOR DO BRASIL",
    "provo38": "SÓ RECLAMA DO PREMIUM QUEM NÃO TEM HAHA",
    "provo39": "MINHA PUTINHA, MINHA PUTINHA!",
    "provo40": "AIAI O CARA RECLAMA MUITO MAS FAZ POUCO",
    "provo41": "TO COMEÇANDO A SENTIR PENA"
}

let PROVOS_ARR = [];
for(let provo in PROVOS) PROVOS_ARR.push(`!${provo}`);

// =============================================== MANIPULADORES DE JOGADORES
const Role = {"PLAYER": 0, "VIP-CLASSIC": 1, "VIP-GOLD": 1.5, "VIP-PREMIUM": 2, "MOD": 3, "ADM": 4, "DEV": 5, "MASTER": 6};

const State = {PLAY: 0, PAUSE: 1, STOP: 2};
const Situation = {VIP_PAUSE: "PAUSED"};
let VIP_PauseSET = new Set();

const Ss = {GAMES: 0, WIN: 1, WINRATE: 2, LOSE: 3, DRAW: 4, GOALS: 5, ASSIST: 6, GK_G: 7, GK_D: 8, GK_CS: 9, OWN_GOAL: 10};
const Records = {GAMES: 0, WINS: 1, GOALS: 2, ASSIST:3, CS: 4, SEQUENCE: 5};

let playersHandler = [];
const pHr = {NAME: 0, ID: 1, AUTH: 2, IP: 3, GK: 4, ACT: 5, AFK: 6, MUTE: 7, ROLE: 8};
const Team = {SPEC: 0, RED: 1, BLUE: 2};

// =============================================== MANIPULADORES DE JOGO
let players;
let teamS = [];
let teamR = []; let allReds = [];
let teamB = []; let allBlues = [];

let gameState = State.STOP;
let gameSituation = "";

let inChooseMode = false;
let checkTimeVariable;
let endGameVariable = false;
let changingTeams = false;

let capLeft = false; redCaptainChoice = ""; blueCaptainChoice = "";
let pickTimeout; let kickTimeout; let chooseTime = 12;

let lastWinner; let streak = 0; let lastSequence = [];
let uniRed = ""; let uniBlue = "";

// ========================== ESTATÍSTICAS DO JOGO
let game;
let GKList = ["", ""];
let Rposs = 0; let Bposs = 0;
let point = [
    { x: 0, y: 0},
    { x: 0, y: 0}
]
let ballSpeed;

let lastTeamTouch;
let lastPlayerTouch;
let countAfk = false;
let activePlay = false;
let goldenGoal = false;

// ========================== ESTÁDIO PADRÃO DO JOGO
const playerRadius = 15;
var ballRadius = 10;
const triggerDistance = playerRadius + ballRadius + 0.01;
var defaultMap = '{"name":"X1 DUPLO | LGD","width":430,"height":430,"bg":{"type":"hockey","width":370,"height":370,"color":"464646"},"vertexes":[{"x":-1,"y":-368,"cMask":[]},{"x":-1,"y":368,"cMask":[]},{"x":1,"y":-368,"cMask":[]},{"x":1,"y":368,"cMask":[]},{"x":-370,"y":0,"bCoef":0,"cMask":["red","blue"],"cGroup":["red","blue"]},{"x":370,"y":0,"bCoef":0,"cMask":["red","blue"],"cGroup":["red","blue"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":370,"y":121,"cMask":["red"],"cGroup":["red"]},{"x":370,"y":249,"cMask":["red"],"cGroup":["red"]},{"x":370,"y":-249,"cMask":["red"],"cGroup":["red"]},{"x":370,"y":-121,"cMask":["blue"],"cGroup":["blue"]},{"x":-370,"y":121,"cMask":["blue"],"cGroup":["blue"]},{"x":-370,"y":249,"cMask":["blue"],"cGroup":["blue"]},{"x":-370,"y":-249,"cMask":["blue"],"cGroup":["blue"]},{"x":-370,"y":-121,"cMask":["blue"],"cGroup":["blue"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":370,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-370,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-370,"y":-370,"cMask":["ball"]},{"x":-370,"y":-249,"cMask":["ball"]},{"x":-370,"y":-121,"cMask":["ball"]},{"x":-370,"y":121,"cMask":["ball"]},{"x":-370,"y":249,"cMask":["ball"]},{"x":-370,"y":370,"cMask":["ball"]},{"x":370,"y":370,"cMask":["ball"]},{"x":370,"y":249,"cMask":["ball"]},{"x":370,"y":121,"cMask":["ball"]},{"x":370,"y":-121,"cMask":["ball"]},{"x":370,"y":-249,"cMask":["ball"]},{"x":370,"y":-370,"cMask":["ball"]},{"x":-370,"y":-249,"cMask":[]},{"x":-370,"y":-121,"cMask":[]},{"x":370,"y":-121,"cMask":[]},{"x":370,"y":-249,"cMask":[]},{"x":-370,"y":121,"cMask":[]},{"x":-370,"y":249,"cMask":[]},{"x":370,"y":249,"cMask":[]},{"x":370,"y":121,"cMask":[]},{"x":-370,"y":-249,"bCoef":0.1,"cMask":["ball"]},{"x":-400,"y":-249,"bCoef":0.1,"cMask":["ball"]},{"x":-400,"y":-250.5,"bCoef":0.1,"cMask":["ball"]},{"x":-400,"y":-119.5,"bCoef":0.1,"cMask":["ball"]},{"x":-400,"y":-121,"bCoef":0.1,"cMask":["ball"]},{"x":-370,"y":-121,"bCoef":0.1,"cMask":["ball"]},{"x":-370,"y":121,"bCoef":0.1,"cMask":["ball"]},{"x":-400,"y":121,"bCoef":0.1,"cMask":["ball"]},{"x":-400,"y":119.5,"bCoef":0.1,"cMask":["ball"]},{"x":-400,"y":250.5,"bCoef":0.1,"cMask":["ball"]},{"x":-400,"y":249,"bCoef":0.1,"cMask":["ball"]},{"x":-370,"y":249,"bCoef":0.1,"cMask":["ball"]},{"x":370,"y":249,"bCoef":0.1,"cMask":["ball"]},{"x":400,"y":249,"bCoef":0.1,"cMask":["ball"]},{"x":400,"y":250.5,"bCoef":0.1,"cMask":["ball"]},{"x":400,"y":119.5,"bCoef":0.1,"cMask":["ball"]},{"x":400,"y":121,"bCoef":0.1,"cMask":["ball"]},{"x":370,"y":121,"bCoef":0.1,"cMask":["ball"]},{"x":370,"y":-121,"bCoef":0.1,"cMask":["ball"]},{"x":400,"y":-121,"bCoef":0.1,"cMask":["ball"]},{"x":400,"y":-119.5,"bCoef":0.1,"cMask":["ball"]},{"x":400,"y":-250.5,"bCoef":0.1,"cMask":["ball"]},{"x":400,"y":-249,"bCoef":0.1,"cMask":["ball"]},{"x":370,"y":-249,"bCoef":0.1,"cMask":["ball"]},{"x":-371.5,"y":-370,"cMask":["ball"]},{"x":-371.5,"y":370,"cMask":["ball"]},{"x":371.5,"y":370,"cMask":["ball"]},{"x":371.5,"y":-370,"cMask":["ball"]},{"x":-80,"y":0,"cMask":[]},{"x":-370,"y":0,"cMask":[]},{"x":0,"y":-80,"cMask":[]},{"x":0,"y":80,"cMask":[]},{"x":0,"y":-370,"cMask":[]},{"x":0,"y":-80,"cMask":[]},{"x":0,"y":80,"cMask":[]},{"x":0,"y":370,"cMask":[]},{"x":80,"y":0,"cMask":[]},{"x":370,"y":0,"cMask":[]}],"segments":[{"v0":0,"v1":1,"cMask":[],"color":"666666"},{"v0":2,"v1":3,"cMask":[],"color":"717171"},{"v0":4,"v1":5,"bCoef":0,"vis":false,"cMask":["red","blue"],"cGroup":["red","blue"],"color":"C7E6BD"},{"v0":18,"v1":19,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"C7E6BD"},{"v0":20,"v1":21,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"C7E6BD"},{"v0":21,"v1":18,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["redKO"],"color":"C7E6BD"},{"v0":18,"v1":21,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["blueKO"],"color":"C7E6BD"},{"v0":22,"v1":23,"bias":30,"cMask":["ball"],"color":"F2F2F2"},{"v0":24,"v1":25,"bias":30,"cMask":["ball"],"color":"F2F2F2"},{"v0":26,"v1":27,"bias":30,"cMask":["ball"],"color":"F2F2F2"},{"v0":28,"v1":29,"bias":30,"cMask":["ball"],"color":"F2F2F2"},{"v0":30,"v1":31,"bias":30,"cMask":["ball"],"color":"F2F2F2"},{"v0":32,"v1":33,"bias":30,"cMask":["ball"],"color":"F2F2F2"},{"v0":34,"v1":35,"cMask":[],"color":"F2F2F2"},{"v0":36,"v1":37,"cMask":[],"color":"F2F2F2"},{"v0":38,"v1":39,"cMask":[],"color":"F2F2F2"},{"v0":40,"v1":41,"cMask":[],"color":"F2F2F2"},{"v0":42,"v1":43,"bias":30,"bCoef":0.1,"cMask":["ball"],"color":"F2F2F2"},{"v0":44,"v1":45,"bias":30,"bCoef":0.1,"cMask":["ball"],"color":"F2F2F2"},{"v0":46,"v1":47,"bias":30,"bCoef":0.1,"cMask":["ball"],"color":"F2F2F2"},{"v0":48,"v1":49,"bias":30,"bCoef":0.1,"cMask":["ball"],"color":"F2F2F2"},{"v0":50,"v1":51,"bias":30,"bCoef":0.1,"cMask":["ball"],"color":"F2F2F2"},{"v0":52,"v1":53,"bias":30,"bCoef":0.1,"cMask":["ball"],"color":"F2F2F2"},{"v0":54,"v1":55,"bias":30,"bCoef":0.1,"cMask":["ball"],"color":"F2F2F2"},{"v0":56,"v1":57,"bias":30,"bCoef":0.1,"cMask":["ball"],"color":"F2F2F2"},{"v0":58,"v1":59,"bias":30,"bCoef":0.1,"cMask":["ball"],"color":"F2F2F2"},{"v0":60,"v1":61,"bias":30,"bCoef":0.1,"cMask":["ball"],"color":"F2F2F2"},{"v0":62,"v1":63,"bias":30,"bCoef":0.1,"cMask":["ball"],"color":"F2F2F2"},{"v0":64,"v1":65,"bias":30,"bCoef":0.1,"cMask":["ball"],"color":"F2F2F2"},{"v0":69,"v1":66,"bias":30,"cMask":["ball"],"color":"F2F2F2"},{"v0":67,"v1":68,"bias":30,"cMask":["ball"],"color":"F2F2F2"},{"v0":70,"v1":71,"cMask":[],"color":"F2F2F2"},{"v0":72,"v1":73,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"F2F2F2"},{"v0":73,"v1":72,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"F2F2F2"},{"v0":74,"v1":75,"cMask":[],"color":"F2F2F2"},{"v0":76,"v1":77,"cMask":[],"color":"F2F2F2"},{"v0":78,"v1":79,"cMask":[],"color":"F2F2F2"}],"planes":[{"normal":[0,1],"dist":-430},{"normal":[0,-1],"dist":-430},{"normal":[1,0],"dist":-430,"bCoef":0.1},{"normal":[-1,0],"dist":-430,"bCoef":0.1}],"goals":[{"p0":[-378.75,-119],"p1":[-378.75,-247],"team":"red"},{"p0":[378.75,-121],"p1":[378.75,-249],"team":"blue"},{"p0":[-378.75,249],"p1":[-378.75,121],"team":"red"},{"p0":[378.75,249],"p1":[378.75,121],"team":"blue"}],"discs":[{"radius":6.25,"bCoef":0.4,"invMass":1.5,"damping":1,"color":"FFCC00","cGroup":["ball","kick","score"]},{"pos":[-370,-121],"radius":5,"invMass":0,"color":"E18977"},{"pos":[-370,-249],"radius":5,"invMass":0,"color":"E18977"},{"pos":[370,-121],"radius":5,"invMass":0,"color":"85ACF3"},{"pos":[370,-249],"radius":5,"invMass":0,"color":"85ACF3"},{"pos":[-370,249],"radius":5,"invMass":0,"color":"E18977"},{"pos":[-370,121],"radius":5,"invMass":0,"color":"E18977"},{"pos":[370,249],"radius":5,"invMass":0,"color":"85ACF3"},{"pos":[370,121],"radius":5,"invMass":0,"color":"85ACF3"}],"playerPhysics":{"bCoef":0,"invMass":1.0e+26,"acceleration":0.11,"kickingAcceleration":0.083},"ballPhysics":"disc0","spawnDistance":170,"redSpawnPoints":[[-185,-170],[-185,170]],"blueSpawnPoints":[[185,170],[185,-170]],"traits":{}}'
room.setCustomStadium(defaultMap, scoreLimit, timeLimit);

// ========================== CLASSES E CONJUNTOS DE JOGADORES
class Player {
    constructor(auth, name, ip) {
        this.auth = auth;
        this.name = name;
        this.ip = ip;

        this.role = Role.PLAYER;
        this.pass = null;
        this.logged = false;

        this.stats = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.color = null;
        this.jumpLineCD = 0;
    }
}

class Ban {
    constructor(auth, name, ip) {
        this.auth = auth;
        this.name = name;
        this.ip = ip;
    }
}

class Goal {
    constructor(time, team, striker, assist, ownGoal) {
        this.time = time;
        this.team = team;
        this.striker = striker;
        this.assist = assist;
        this.ownGoal = ownGoal;
    }
}

class Game {
    constructor(date, scores, goals) {
        this.date = date;
        this.scores = scores;
        this.goals = goals;
    }
}

let AFKSet = new Set();
let JumpLineSet = new Set();
let MuteSet = new Set();
let CmdSet = new Set();

// =============================================== COMANDOS
let passTimeout;
const commands = {
    help: {
        aliases: [],
        role: Role.PLAYER,
        description: "Veja os comandos disponíveis para você. Use !help <comando>, para ver informações sobre o comando!",
        function: helpCommand
    },
    bb: {
        aliases: ["bye", "cya"],
        role: Role.PLAYER,
        description: "Adeus!",
        function: bbCommand
    },
    discord: {
        aliases: ["dc"],
        role: Role.PLAYER,
        description: "Faça parte do nosso servidor no Discord!!!",
        function: discordCommand,
    },
    register: {
        aliases: ["registrar", "reg"],
        role: Role.PLAYER,
        description: "Registre-se usando \"!registrar senha\"",
        function: registerCommand
    },
    login: {
        aliases: [],
        role: Role.PLAYER,
        description: "Faça login em sua conta \"!login <senha>\"",
        function: loginCommand
    },
    calladmin: {
        aliases: [],
        role: Role.PLAYER,
        description: "Chame um admin! !calladmin <motivo>",
        function: callAdminCommand
    },
    me: {
        aliases: ["stats", "status"],
        role: Role.PLAYER,
        description: "Veja seus status",
        function: meCommand
    },
    mostrarme: {
        aliases: ["mostrarstats", "mostrarstatus"], 
        role: Role.PLAYER,
        description: "Mostre seus status",
        function: showMeCommand
    },
    bet: {
    	aliases: ["apostar"],
    	role: Role.PLAYER,
    	description: "HaxBall Bet, Ganhe ou Perca tudo, faça sua fezinha.",
    	function: betCommand
    },
    balance: {
        aliases: ["saldo", "moedas"],
        role: Role.PLAYER,
        description: "Veja o seu saldo atual de kvnCoins.",
        function: balanceCommand
    },
    feedback: {
        aliases: ["feed", "falar"],
        role: Role.PLAYER,
        description: "Envie seu feedback sobre o jogo ou o sistema.",
        function: feedbackCommand
    },
    unis: {
        aliases: [],
        role: Role.PLAYER,
        description: "Veja a lista de uniformes disponíveis!",
        function: unisCommand
    },
    afk: {
        aliases: [],
        role: Role.PLAYER,
        description: `Fique afk! Máx: ${afkLimit}min.`,
        function: afkCommand
    },
    afks: {
        aliases: [],
        role: Role.PLAYER,
        description: `Veja a lista de afks.`,
        function: afkListCommand
    },
    comprar: {
    	aliases: ["buy"],
    	role: Role.PLAYER,
    	description: `Compre o vip que queira, [vip-classic], [vip-gold] e [vip-premium], Compre com seus Coins.`,
    	function: buyVipCommand
    },
    gif: {
    	aliases: [],
    	role: Role.PLAYER,
    	description: `Veja os 15 segundos antes de utilizar este comando.`,
    	function: handleGifCommand
    },
    games: {
        aliases: [],
        role: Role.PLAYER,
        description: `Veja o TOP ${maxRecords} games.`,
        function: gamesCommand
    },
    wins: {
        aliases: [],
        role: Role.PLAYER,
        description: `Veja o TOP ${maxRecords} wins.`,
        function: winsCommand
    },
    goals: {
        aliases: ['gols'],
        role: Role.PLAYER,
        description: `Veja o TOP ${maxRecords} gols.`,
        function: goalsCommand
    },
    assists: {
        aliases: ["assist"],
        role: Role.PLAYER,
        description: `Veja o TOP ${maxRecords} assists.`,
        function: assistsCommand
    },
    cs: {
        aliases: [],
        role: Role.PLAYER,
        description: `Veja o TOP ${maxRecords} cs.`,
        function: csCommand
    },
    sequencia: {
        aliases: ["seq", "sequence"],
        role: Role.PLAYER,
        description: `Veja a maior sequencia de vitórias!`,
        function: sequenceCommand
    },
    ranks: {
        aliases: [],
        role: Role.PLAYER,
        description: `Veja a primeira página de ranks.`,
        function: ranksCommand
    },
    ranks2: {
        aliases: [],
        role: Role.PLAYER,
        description: `Veja a segunda página de ranks.`,
        function: ranks2Command
    },
    pause: {
        aliases: ["p"],
        role: Role["VIP-GOLD"],
        description: `Pause o jogo por ${pauseTime}s`,
        function: pauseCommand
    },    
    furarfila: {
        aliases: [],
        role: Role["VIP-PREMIUM"],
        description: `Vá para 1° lugar na fila! Cooldown = ${jumpLineTLimit}min.`,
        function: jumpLineCommand
    },
    colorlist: {
        aliases: ["cclist"],
        role: Role["VIP-PREMIUM"],
        description: "Veja a lista de cores de chat disponíveis!",
        function: ccListCommand,
    },
    showcolorlist: {
        aliases: ["scclist"],
        role: Role["VIP-PREMIUM"],
        description: "Veja as cores de chat disponíveis! <SPAM>",
        function: showColorListCommand
    },
    changecolor: {
        aliases: ["cc"],
        role: Role["VIP-PREMIUM"],
        description: "Mude a cor de seu chat!",
        function: changeColorCommad
    },
    claim: {
        aliases: [],
        role: Role.MOD,
        description: "Ativa/desativa o admin na sala.",
        function: claimCommand
    },
    kick: {
        aliases: [],
        role: Role.MOD,
        description: "Kicke um player. !kick #id motivo",
        function: kickCommand
    },
    mute: {
        aliases: [],
        role: Role.MOD,
        description: "Force o silêncio. Use !mute #id minutos",
        function: muteCommand
    },
    unmute: {
        aliases: [],
        role: Role.MOD,
        description: "Libere a voz do player. Possibilidade: !unmute #id, !unmute nome, ou !unmute all",
        function: unmuteCommand
    },
    mutelist: {
        aliases: [],
        role: Role.MOD,
        description: "Veja a lista de players mutados.",
        function: muteList
    },
    ban: {
        aliases: [],
        role: Role.MOD,
        description: "Sentencie um player ao exílio.\nOBS: Use o nome do player: !ban <kvn <motivo",
        function: banCommand
    },
    banlist: {
        aliases: [],
        role: Role.ADM,
        description: "Veja a lista de players banidos.",
        function: banlistCommand
    },
    unban: {
        aliases: [],
        role: Role.ADM,
        description: "Permita que o player volte do exílio!\nOBS: Use o nome do player: !unban kvn",
        function: unbanCommand
    },
    test: {
        aliases: ["t"],
        role: Role.DEV,
        description: `Comando de teste.`,
        function: testCommand
    },
    setadm: {
        aliases: [],
        role: Role.MASTER,
        description: "Defina o \"nível\" do player\nPossiveis: [player, vip-classic, vip-gold, vip-premium, mod, adm, dev]\nUso: !setadm #id vip-classic",
        function: setAdmCommand
    }
}

// ========================== IMPLEMENTAÇÃO DE COMANDOS
function helpCommand(player, message) {
    if(!checkCanUseCmd(player, commands.help.role)) return warningAll(`NÃO TEM PERMISSÃO PARA USAR O COMANDO!`);
    let msg = message.toLowerCase().trim().split(/ +/);

    if(msg.length >= 2) {
        let cmd = getCommand(msg[1]);
        if(!cmd) return commandDoesntExist(player.id);
        return showCommand(player, cmd);
    }

    let playerCommands = [];
    let vipClassicCommands = [];
    let vipGoldCommands = [];
    let vipPremiumCommands = [];
    let modCommands = [];
    let admCommands = [];
    let devCommands = [];
    let masterCommands = [];

    let level = getLevel(player);

    for(const [key, values] of Object.entries(commands)) {
        if(values.role == Role.PLAYER) playerCommands.push(`!${key}`);
        if(values.role == Role["VIP-CLASSIC"]) vipClassicCommands.push(`!${key}`);
        if(values.role == Role["VIP-GOLD"]) vipGoldCommands.push(`!${key}`);
        if(values.role == Role["VIP-PREMIUM"]) vipPremiumCommands.push(`!${key}`);
        if(values.role == Role.MOD) modCommands.push(`!${key}`);
        if(values.role == Role.ADM) admCommands.push(`!${key}`);
        if(values.role == Role.DEV) devCommands.push(`!${key}`);
        if(values.role == Role.MASTER) masterCommands.push(`!${key}`);
    }
    
    if(level >= Role.PLAYER) room.sendAnnouncement(`[👤] Comandos normais disponíveis: ${playerCommands.join(" ").length != 0 ? playerCommands.join(" ") : "<nenhum comando encontrado>"}`, player.id, Color.gray, Font.BOLD, HaxNotification.CHAT);
    if(level >= Role["VIP-CLASSIC"]) room.sendAnnouncement(`[🧝‍♂️] Comandos VIP-CLASSIC disponíveis: ${vipClassicCommands.join(" ").length != 0 ? vipClassicCommands.join(" ") : "<nenhum comando encontrado>"}`, player.id, vipClassicColor, Font.BOLD, HaxNotification.CHAT);
    if(level >= Role["VIP-GOLD"]) room.sendAnnouncement(`[👳‍♂️] Comandos VIP-GOLD disponíveis: ${vipGoldCommands.join(" ").length != 0 ? vipGoldCommands.join(" ") : "<nenhum comando encontrado>"}`, player.id, vipGoldColor, Font.BOLD, HaxNotification.CHAT);
    if(level >= Role["VIP-PREMIUM"]) room.sendAnnouncement(`[🧞‍♂️] Comandos VIP-PREMIUM disponíveis: ${vipPremiumCommands.join(" ").length != 0 ? vipPremiumCommands.join(" ") : "<nenhum comando encontrado>"}`, player.id, vipPremiumColor, Font.BOLD, HaxNotification.CHAT);
    if(level >= Role.MOD) room.sendAnnouncement(`[👮‍♂️] Comandos MOD disponíveis: ${modCommands.join(" ").length != 0 ? modCommands.join(" ") : "<nenhum comando encontrado>"}`, player.id, modColor, Font.BOLD, HaxNotification.CHAT);
    if(level >= Role.ADM) room.sendAnnouncement(`[👨‍✈️] Comandos ADM disponíveis: ${admCommands.join(" ").length != 0 ? admCommands.join(" ") : "<nenhum comando encontrado>"}`, player.id, admColor, Font.BOLD, HaxNotification.CHAT);
    if(level >= Role.DEV) room.sendAnnouncement(`[👨‍💻] Comandos DEV disponíveis: ${devCommands.join(" ").length != 0 ? devCommands.join(" ") : "<nenhum comando encontrado>"}`, player.id, devColor, Font.BOLD, HaxNotification.CHAT);
    if(level >= Role.MASTER) room.sendAnnouncement(`[👑] Comandos KVN disponíveis: ${masterCommands.join(" ").length != 0 ? masterCommands.join(" ") : "<nenhum comando encontrado>"}`, player.id, masterColor, Font.BOLD, HaxNotification.CHAT);
}

function bbCommand(player, message) {
    room.kickPlayer(player.id, "👋 Até mais! " + player.name + " Volte Sempre.", false);
}

function discordCommand(player, message) {
    room.sendAnnouncement("                                        ▒█▀▀▄ ▀█▀ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▄ ", player.id, 0x9250FD, Font.BOLD)
    room.sendAnnouncement("                                        ▒█░▒█ ▒█░ ░▀▀▀▄▄ ▒█░░░ ▒█░░▒█ ▒█▄▄▀ ▒█░▒█ ", player.id, 0x8466FD, Font.BOLD)
    room.sendAnnouncement("                                        ▒█▄▄▀ ▄█▄ ▒█▄▄▄█ ▒█▄▄█ ▒█▄▄▄█ ▒█░▒█ ▒█▄▄▀ ", player.id, 0x7B73FD, Font.BOLD);
    room.sendAnnouncement(`                                        💬 Discord Link: ➡ ${discordLink} ⬅`, null, 0xF6FF43, Font.BOLD);
}

function registerCommand(player, message) {
    if(checkRegistered(player)) return warningInvalidCommand(player.id, "Este nick já possui um registro!");
    let msg = message.trim().split(/ +/);

    if(1 >= msg.length) return warningInvalidCommand(player.id, "Campos inválidos! Digite !help register, para ver como usar o comando.");

    let ls = getField(LS.PLAYERS);
    let index = LSPlayerPOS(getPlayer(player)[pHr.AUTH]);

    if(index == -1) return;
    if(5 > msg[1].length) return warningPv(player.id, "❌ A senha precisa ter 5 ou mais digitos!");

    ls[index].pass = msg[1];
    ls[index].logged = true;

    warningAll(`${player.name} se registrou!!`);
    setTimeout(() => {
        warningPv(player.id, `[${roomSimbol}] Registro efetuado com sucesso!`);
        warningPv(player.id, `[${roomSimbol}] Nick: ${player.name} | Senha: ${msg[1]}`);
    }, 200)

    setValue(LS.PLAYERS, ls);
}

function loginCommand(player, message) {
    let ls = getField(LS.PLAYERS);
    let index = LSPlayerPOS(getPlayer(player)[pHr.AUTH]);
    
    if(index == -1) index = LSPlayerPOSName(player.name);
    if(ls[index].logged) return warningPv(player.id, `${roomSimbol} Você já está logado!`);

    let msg = message.trim().split(/ +/);

    if(1 >= msg.length) return warningInvalidCommand(player.id, "Por favor, digite uma senha válida!");
    if(ls[index].pass != msg[1]) return warningInvalidCommand(player.id, "Senha incorreta!");

    updateCredentials(player, index);
}

function callAdminCommand(player, message) {
    if(!checkRegistered(player)) return warningOnlyRegisteredCmd(player.id);
    let msg = message.split(/ +/);
    if(msg.length < 2) return warningInvalidCommand(player.id, "Por favor digite o motivo!");

    let reason = message.slice(msg[0].length + 1);
    sendCallAdminAnnouncement(player, reason);
    warningAll(`${player.name} chamou um adm!`);
}

function meCommand(player, message) {
    if(!checkRegistered(player)) return warningOnlyRegisteredCmd(player.id);
    let ls = getField(LS.PLAYERS);
    let index = LSPlayerPOS(getPlayer(player)[pHr.AUTH]);

    let stats = ls[index].stats;

    let msg = `[📝] Seus stats: 🎮 GAMES: ${stats[Ss.GAMES]}, 🥇 WINS: ${stats[Ss.WIN]}, 🤖 WR: ${stats[Ss.WINRATE].toPrecision(3)}%, ⚽ GOLS: ${stats[Ss.GOALS]}, 👟 ASSISTS: ${stats[Ss.ASSIST]}, 🧤 GK: ${stats[Ss.GK_G]}, 🤚 CS: ${stats[Ss.GK_CS]}, 🙅‍♂️ DEFESAS: ${stats[Ss.GK_D]}\n${roomSimbol} Apenas você pode ver essa mensagem! Use !mostrarme, para mostrar os seus status a todos.`;
    warningPv(player.id, msg);
}

function showMeCommand(player, message) {
    if(!checkRegistered(player)) return warningOnlyRegisteredCmd(player.id);
    let ls = getField(LS.PLAYERS);
    let index = LSPlayerPOS(getPlayer(player)[pHr.AUTH]);

    let stats = ls[index].stats;

    let msg = `Stats de ${player.name}: 🎮 GAMES: ${stats[Ss.GAMES]}, 🥇 WINS: ${stats[Ss.WIN]}, 🤖 WR: ${stats[Ss.WINRATE].toPrecision(3)}%, ⚽ GOLS: ${stats[Ss.GOALS]}, 👟 ASSISTS: ${stats[Ss.ASSIST]}, 🧤 GK: ${stats[Ss.GK_G]}, 🤚 CS: ${stats[Ss.GK_CS]}, 🙅‍♂️ DEFESAS: ${stats[Ss.GK_D]}`;
    warningAll(msg);
}

function betCommand(player, message) {
    const betMessage = message.trim().split(/ +/);
    if (betMessage.length < 3) {
        return room.sendAnnouncement("⚠️ Comando inválido! Use: !bet <time> <valor>", player.id, 0xFF0000, "bold", 2);
    }

    const team = betMessage[1].toLowerCase();
    const amount = parseInt(betMessage[2].replace("k", ""));

    if (!["red", "blue"].includes(team)) {
        return room.sendAnnouncement("⚠️ Time inválido! Use 'red' ou 'blue'.", player.id, 0xFF0000, "bold", 2);
    }

    if (isNaN(amount) || amount <= 0 || amount > 5000) {
        return room.sendAnnouncement("⚠️ Valor inválido! Aposta deve ser entre 1 e 5000 moedas.", player.id, 0xFF0000, "bold", 2);
    }

    const playerData = getPlayerData(player.id);
    if (playerData.coins < amount) {
        return room.sendAnnouncement("⚠️ Você não tem moedas suficientes para essa aposta.", player.id, 0xFF0000, "bold", 2);
    }

    // Registra a aposta
    bets[player.id] = { team, amount };

    // Deduz a aposta das moedas do jogador
    playerData.coins -= amount;
    updatePlayerData(player.id, playerData);

    room.sendAnnouncement(`💸 Aposta registrada: ${amount} moedas no time ${team}.`, player.id, 0x00FF00, "bold", 2);
}

function balanceCommand(player, message) {
    if (!checkCanUseCmd(player, commands.balance.role)) {
        return warningCantUseCmd(player.id);
    }

    // Recupera os dados do jogador
    const playerData = getPlayerData(player.id);
    
    // Verifica se os dados do jogador foram recuperados corretamente
    if (!playerData) {
        return room.sendAnnouncement("⚠️ Não foi possível recuperar os dados do jogador. Tente novamente.", player.id, 0xFF0000, "bold", 2);
    }

    // Envia o saldo atual do jogador
    room.sendAnnouncement(`💰 **Seu saldo é:** ${playerData.coins} kvnCoins`, player.id, 0x00FF00, "bold", 2);
}

function feedbackCommand(player, message) {
    let msg = message.trim().split(/ +/);
    if (msg.length < 2) return room.sendAnnouncement("[🚨] Comando de feedback incorreto! Use !feedback <sua mensagem>.", player.id, 0xFF0000, 'bold', 2);
    
    let feedback = msg.slice(1).join(' ');
    
    sendFeedbackMessage(player, feedback);
    room.sendAnnouncement(`[✅] Seu feedback foi enviado com sucesso! Obrigado pela sua contribuição, ${player.name}.`, player.id, 0x00FF00, 'bold', 2);
}

function unisCommand(player, message) {
    let nationTeams = UNIFORMS_ARR_NATIONTEAM.join(", ");
    let brazilianTeams = UNIFORMS_ARR_BRAZILIANTEAMS.join(", ");
    let otherTeams = UNIFORMS_ARR_OUTROS.join(", ");

    room.sendAnnouncement(`[🌎] SELEÇÕES: ${nationTeams}.`, player.id, Color.gold, Font.BOLD, HaxNotification.CHAT);
    room.sendAnnouncement('-----------------------------------------------------------------------', player.id, Color.white, Font.BOLD)
    room.sendAnnouncement(`[🇧🇷] BRASIL: ${brazilianTeams}.`, player.id, Color.green, Font.BOLD, HaxNotification.CHAT);
    room.sendAnnouncement('-----------------------------------------------------------------------', player.id, Color.white, Font.BOLD);
    room.sendAnnouncement(`[🌌] OUTROS: ${otherTeams}.`, player.id, Color.blue, Font.BOLD, HaxNotification.CHAT);
    room.sendAnnouncement('-----------------------------------------------------------------------', player.id, Color.white, Font.BOLD)
}

function afkCommand(player, message) {
    const check = player.team != Team.SPEC 
                  && room.getScores() != null 
                  && players.length > 1;
    
    if(AFKSet.has(player.id)) {
        AFKSet.delete(player.id);
    } else {
        if(check) return warningInvalidCommand(player.id, "Você não pode ficar afk enquanto estiver em um time!");
        if(player.team != Team.SPEC) toTeam(player, Team.SPEC);
        AFKSet.add(player.id);

        setTimeout((p) => {
            AFKSet.has(p.id) ? room.kickPlayer(p.id, "Tempo de AFK excedido!", false) : "";
        }, msToMinute(afkLimit), player)
    }

    AFKSet.has(player.id) ? warningAll(`${player.name} está afk!`) : warningAll(`${player.name} saiu do afk!`);    
    setAfk(player, AFKSet.has(player.id));
    AFKSet.has(player.id) ? handlePlayerLeft() : playerJoined();
}

function afkListCommand(player, message) {
    let afkMsg = '[💤] Lista de AFKs: ';
    for (let i = 0; i < playersHandler.length; i++) {
        if (room.getPlayer(playersHandler[i][pHr.ID]) != null && AFKSet.has(room.getPlayer(playersHandler[i][pHr.ID]).id)) {
            if (140 - afkMsg.length < (`${room.getPlayer(playersHandler[i][pHr.ID]).name}, `).length) {
                room.sendAnnouncement(afkMsg, player.id, Color.aqua, Font.BOLD, HaxNotification.NOSOUND);
                afkMsg = '... ';
            }
            afkMsg += `${room.getPlayer(playersHandler[i][pHr.ID]).name}, `;
        }
    }
    if (afkMsg == '[💤] Lista de AFKs: ') {
        room.sendAnnouncement("[💤] Não tem ninguém AFK!", player.id, Color.aqua, Font.BOLD, HaxNotification.NOSOUND);
        return false;
    }

    afkMsg = afkMsg.substring(0, afkMsg.length - 2);
    afkMsg += '.';
    room.sendAnnouncement(afkMsg, player.id, Color.aqua, Font.BOLD, HaxNotification.NOSOUND);
}

function buyVipCommand(player, message) {
    const vipMessage = message.trim().split(/ +/);
    if (vipMessage.length < 2) {
        return room.sendAnnouncement("⚠️ Comando inválido! Use: !buyvip <vip_type>", player.id, 0xFF0000, "bold", 2);
    }

    const vipType = vipMessage[1].toLowerCase();
    let cost;

    switch (vipType) {
        case 'vip-classic':
            cost = 8500;
            break;
        case 'vip-gold':
            cost = 35000;
            break;
        case 'vip-premium':
            cost = 80000;
            break;
        default:
            return room.sendAnnouncement("⚠️ Tipo de VIP inválido! Use 'classic', 'gold', ou 'premium'.", player.id, 0xFF0000, "bold", 2);
    }

    const playerData = getPlayerData(player.id);
    if (playerData.coins < cost) {
        return room.sendAnnouncement("⚠️ Você não tem moedas suficientes para comprar este VIP.", player.id, 0xFF0000, "bold", 2);
    }

    // Deduz o custo do VIP das moedas do jogador
    playerData.coins -= cost;
    updatePlayerData(player.id, playerData);

    // Adiciona VIP ao jogador
    playerData.vip = vipType;
    updatePlayerData(player.id, playerData);

    room.sendAnnouncement(`🎉 Você comprou o VIP ${vipType.toUpperCase()} com sucesso!`, player.id, 0x00FF00, "bold", 2);
}

function handleGifCommand(player) {
    let recording = frameBuffer.slice();  // Copiar os frames do buffer
    
    // Converte a gravação em um arquivo HBR2
    let rec = HaxballReplay.encode(recording);

    sendGIFrecording(rec);
}

function sendGIFrecording(rec) {
    let form = new FormData();
    let fileName = `gifs-n${gs}.mp4`;

    form.append("file", new File([rec], fileName, {type: "video/mp4"}));

    let xmlh = new XMLHttpRequest();
    xmlh.open("POST", disc_Recs);
    xmlh.send(form);

    room.sendAnnouncement(`A gravação dos últimos 15 segundos foi enviada ao nosso Discord! [${fileName}]`);
    gs++;  // Incrementa o contador para o nome do arquivo
}

function gamesCommand(player, message) {
    updateRecords();
    let ls = getField(LS.RECORDS);
    if(ls[Records.GAMES].length < maxRecords) warningPv(player.id, "❌ Ainda não há players suficientes para o comando.");

    let games = ls[Records.GAMES];
    let msg = [];
    for(let i = 0; i < games.length; i++) {
        switch(i) {
            case 0:
                msg.push(`1° - ${games[i][1]}: ${games[i][0]}`);
                break;
            case 1:
                msg.push(`2° - ${games[i][1]}: ${games[i][0]}`);
                break;
            case 2:
                msg.push(`3° - ${games[i][1]}: ${games[i][0]}`);
                break;
            default:
                msg.push(`${i+1}° - ${games[i][1]}: ${games[i][0]}`);
        }
    }

    room.sendAnnouncement(`🎮 GAMES: ${msg.join("| ")}.`, player.id, Color.gray, Font.SMALL_BOLD);
}
function winsCommand(player, message) {
    updateRecords();
    let ls = getField(LS.RECORDS);
    if(ls[Records.WINS].length < maxRecords) warningPv(player.id, "❌ Ainda não há players suficientes para o comando.");

    let wins = ls[Records.WINS];
    let msg = [];
    for(let i = 0; i < wins.length; i++) {
        switch(i) {
            case 0:
                msg.push(`1° - ${wins[i][1]}: ${wins[i][0]}`);
                break;
            case 1:
                msg.push(`2° - ${wins[i][1]}: ${wins[i][0]}`);
                break;
            case 2:
                msg.push(`3° - ${wins[i][1]}: ${wins[i][0]}`);
                break;
            default:
                msg.push(`${i+1}° - ${wins[i][1]}: ${wins[i][0]}`);
        }
    }

    room.sendAnnouncement(`🥇 WINS: ${msg.join("| ")}.`, player.id, Color.gray, Font.SMALL_BOLD);
}
function goalsCommand(player, message) {
    updateRecords();
    let ls = getField(LS.RECORDS);
    if(ls[Records.GOALS].length < maxRecords) warningPv(player.id, "❌ Ainda não há players suficientes para o comando.");

    let goals = ls[Records.GOALS];
    let msg = [];
    for(let i = 0; i < goals.length; i++) {
        switch(i) {
            case 0:
                msg.push(`1° - ${goals[i][1]}: ${goals[i][0]}`);
                break;
            case 1:
                msg.push(`2° - ${goals[i][1]}: ${goals[i][0]}`);
                break;
            case 2:
                msg.push(`3° - ${goals[i][1]}: ${goals[i][0]}`);
                break;
            default:
                msg.push(`${i+1}° ${goals[i][1]}: ${goals[i][0]}`);
        }
    }

    room.sendAnnouncement(`⚽ GOLS: ${msg.join("| ")}.`, player.id, Color.gray, Font.SMALL_BOLD);
}
function assistsCommand(player, message) {
    updateRecords();
    let ls = getField(LS.RECORDS);
    if(ls[Records.ASSIST].length < maxRecords) warningPv(player.id, "❌ Ainda não há players suficientes para o comando.");

    let assist = ls[Records.ASSIST];
    let msg = [];
    for(let i = 0; i < assist.length; i++) {
        switch(i) {
            case 0:
                msg.push(`1° - ${assist[i][1]}: ${assist[i][0]}`);
                break;
            case 1:
                msg.push(`2° - ${assist[i][1]}: ${assist[i][0]}`);
                break;
            case 2:
                msg.push(`3° - ${assist[i][1]}: ${assist[i][0]}`);
                break;
            default:
                msg.push(`${i+1}° - ${assist[i][1]}: ${assist[i][0]}`);
        }
    }

    room.sendAnnouncement(`👟 ASSISTS: ${msg.join("| ")}.`, player.id, Color.gray, Font.SMALL_BOLD);
}
function csCommand(player, message) {
    updateRecords();
    let ls = getField(LS.RECORDS);
    if(ls[Records.CS].length < maxRecords) warningPv(player.id, "❌ Ainda não há players suficientes para o comando.");

    let cs = ls[Records.CS];
    let msg = [];
    for(let i = 0; i < cs.length; i++) {
        switch(i) {
            case 0:
                msg.push(`1° - ${cs[i][1]}: ${cs[i][0]}`);
                break;
            case 1:
                msg.push(`2° - ${cs[i][1]}: ${cs[i][0]}`);
                break;
            case 2:
                msg.push(`3° - ${cs[i][1]}: ${cs[i][0]}`);
                break;
            default:
                msg.push(`${i+1} - ${cs[i][1]}: ${cs[i][0]}`);
        }
    }

    room.sendAnnouncement(`🤚 CS: ${msg.join("| ")}.`, player.id, Color.gray, Font.SMALL_BOLD);
}

function sequenceCommand(player, message) {
    let ls = getField(LS.SEQUENCE);

    if(ls[maxTeamSize] == 0) return warningPv(player.id, "❌ Sem sequência disponível!");
    warningPv(player.id, `👑 A maior sequência registrada é de ${ls[maxTeamSize]} vitórias. Os monstros foram: ${ls[0]}, ${ls[1]} e ${ls[2]}.`);
}

function ranksCommand(player, message) {
    room.sendAnnouncement("_______________________________________", player.id, Color.yellow, Font.BOLD);
    room.sendAnnouncement("Ranks por Vitórias:", player.id, Color.yellow, Font.BOLD);
    room.sendAnnouncement("Bronze I - [🏆:4] | Bronze II - [🏆:7] | Bronze III - [🏆:10]", player.id, 0xbc5e00, Font.NORMAL);
    room.sendAnnouncement("Prata I - [🏆:14] | Prata II - [🏆:17] | Prata III - [🏆:20]", player.id, 0xA2A2A2, Font.NORMAL);
    room.sendAnnouncement("Ouro I - [🏆:24] | Ouro II - [🏆:27] | Ouro III - [🏆:30]", player.id, 0xEAC274, Font.NORMAL);
    room.sendAnnouncement("Digite '!ranks2' para ver mais", player.id, Color.yellow, Font.BOLD);
    room.sendAnnouncement("_______________________________________", player.id, Color.yellow, Font.BOLD);
}

function ranks2Command(player, message) {
    room.sendAnnouncement("_______________________________________", player.id, Color.yellow, Font.BOLD);
    room.sendAnnouncement("Ranks por Vitórias (2 página):", player.id, Color.yellow, Font.BOLD);
    room.sendAnnouncement("Platina I - [🏆:34] | Platina II - [🏆:44] | Platina III - [🏆:59]", player.id, 0x62AEE3, Font.NORMAL);
    room.sendAnnouncement("Diamante I - [🏆:69] | Diamante II - [🏆:89] | Diamante III - [🏆:109]", player.id, 0x7cd3fa, Font.NORMAL);
    room.sendAnnouncement("Diamante VI - [🏆:209]", player.id, 0x7cd3fa, Font.NORMAL);
    room.sendAnnouncement("Último rank: Lenda do Futsal - [🏆:399]", player.id, 0xf77104, Font.BOLD);
    room.sendAnnouncement("_______________________________________", player.id, Color.yellow, Font.BOLD); 
}

function pauseCommand(player, message) {
    if(!checkCanUseCmd(player, commands.pause.role)) return warningCantUseCmd(player.id);
    if(player.team == Team.SPEC) return warningInvalidCommand(player.id, "Você precisa estar em um time para usar o comando!");
    if(VIP_PauseSET.has(player.id)) return warningInvalidCommand(player.id, "Comando válido apenas 1x por partida!");
    if(gameState != State.PLAY) return warningInvalidCommand(player.id, "A partida não está rolando!");

    if(gameSituation != Situation.VIP_PAUSE) {
        console.log("INSIDE!");
        pauseGame();
        gameSituation = Situation.VIP_PAUSE;
        VIP_PauseSET.add(player.id);
        warningAll(`${player.name} pediu tempo!`);

        setTimeout(() => {
            if(gameState == State.PAUSE) resumeGame();
            gameSituation = "";
        }, msToSecond(pauseTime))
    }
}

function jumpLineCommand(player, message) {
    if(!checkCanUseCmd(player, commands.furarfila.role)) return warningCantUseCmd(player.id);
    if(player.team != Team.SPEC) return warningInvalidCommand(player.id, "Você precisa estar no spec para usar o comando!");
    if(AFKSet.has(player.id)) return warningInvalidCommand(player.id, "Retire o AFK primeiro!");

    let auth = getPlayer(player)[pHr.AUTH];

    let jumpLineCD = LSGetJLine(player);
    if(JumpLineSet.has(auth)) return warningPv(player.id, `[💤] Comando em cooldown: ${jumpLineCD}min!`);

    if(room.getPlayerList()[teamR.length + teamB.length].id == player.id) return warningPv(player.id, "[1️⃣] Você já está em primeiro!");

    room.reorderPlayers([player.id], true);
    warningAll(`${player.name} furou a fila!`);
    handleJumpTimeCD(player);
}

function ccListCommand(player, message) {
    if(!checkCanUseCmd(player, commands.colorlist.role)) return warningCantUseCmd(player.id);
    let msg = Colors_Arr.join(", ");

    room.sendAnnouncement(`[🎨] Cores disponíveis (obs use !cc cor): ${msg}.`, player.id, Color.gold, Font.SMALL_BOLD, HaxNotification.CHAT);
    room.sendAnnouncement(`[🤖] Caso queira ver uma prévia das cores, use o comando !showcolorlist.`, player.id, Color.green, Font.BOLD, HaxNotification.CHAT);
}

function showColorListCommand(player, message) {
    if(!checkCanUseCmd(player, commands.showcolorlist.role)) return warningCantUseCmd(player.id);

    for(const [key, value] of Object.entries(Color)) {
        room.sendAnnouncement(`➽ ${player.name}: Exemplo da cor ${key}!`, player.id, value, Font.BOLD, HaxNotification.CHAT);
    }
}

function changeColorCommad(player, message) {
    if(!checkCanUseCmd(player, commands.changecolor.role)) return warningCantUseCmd(player.id);
    
    let msg = message.split(/ +/);
    if(msg.length == 1) return warningPv(player.id, `[🎨] Digite uma cor. Caso queira saber as disponíveis, digite !cclist.`);
    if(!Colors_Arr.includes(msg[1].toLowerCase())) return warningPv(player.id, `[🎨] Digite uma cor válida! Caso queira saber as disponíveis, digite !cclist.`);

    let newColor;
    for(const [key, value] of Object.entries(Color)) {
        if(key == msg[1]) {
            newColor = value;
        }
    }

    let ls = getField(LS.PLAYERS)
    let index = LSPlayerPOS(getPlayer(player)[pHr.AUTH]);
    if(index == -1) return;

    ls[index].color = newColor;
    setValue(LS.PLAYERS, ls);
 
    sendColorChangeNotification(player, msg[1].toUpperCase());   
 
    return room.sendAnnouncement(`[🎨] Cor de chat modificada para ${msg[1].toUpperCase()} com sucesso!`, player.id, newColor, Font.BOLD, HaxNotification.CHAT);
}

function claimCommand(player, message) {
    if(!checkCanUseCmd(player, commands.claim.role)) return warningCantUseCmd(player.id);
    room.setPlayerAdmin(player.id, !player.admin);
}

function kickCommand(player, message) {
    if(!checkCanUseCmd(player, commands.kick.role)) return warningCantUseCmd(player.id);
    let msg = message.trim().split(/ +/);
    
    let target = room.getPlayer(msg[1].slice(1));
    if(target == null) return warningInvalidCommand(player.id, "Player não encontrado!");

    if(getLevel(target) > getLevel(player)) return warningInvalidCommand(player.id, "Você não tem permissão para isso!");
    room.kickPlayer(target.id, message.slice(msg[0].length + msg[1].length + 2));
}

function muteCommand(player, message) {
    let msg = message.trim().split(/ +/);

    const targetId = parseInt(msg[1].slice(1), 10); // Extrai o ID do jogador
    const targetPlayer = room.getPlayer(targetId); // Busca o jogador pelo ID
    
    if(!checkCanUseCmd(player, commands.mute.role)) return warningCantUseCmd(player.id);
    
    if(msg.length < 2) return warningInvalidCommand(player.id, "Comando incompleto! Digite !help mute.");
    if (!muteStatus[player.id] || !muteStatus[player.id].muted) {
    muteStatus[player.id] = { muted: true, mutedAt: new Date() };
    }
    let target = room.getPlayer(msg[1].slice(1));
    let muteTime = msg[2];

    if(target == null) return warningInvalidCommand(player.id, "Player não encontrado!");
    if(!msg[1].startsWith("#")) return warningInvalidCommand(player.id, "Comando incorreto. Digite !help mute.");
    if(isNaN(msg[2])) return warningInvalidCommand(player.id, `O tempo precisa ser um número!`);
    if(MuteSet.has(getPlayer(target)[pHr.AUTH])) return warningInvalidCommand(player.id, "Calma calabreso, esse player já está mutado!");

    if(minMute > msg[2]) {
        muteTime = minMute;
    }

    if(msg[2] > maxMute) {
        muteTime = maxMute;
    }

    warningAll(`${target.name} sofreu censura. A liberdade será concedida em: ${muteTime}min.`);
    MuteSet.add(getPlayer(target)[pHr.AUTH]);
    sendMuteUnmuteNotification('mute', player, targetId, targetPlayer.name);
    muteCD(target, muteTime);
    setMute(target, true);
}

function unmuteCommand(player, message) {
    let msg = message.trim().split(/ +/);

    const targetId = parseInt(msg[1].slice(1), 10); // Extrai o ID do jogador
    const targetPlayer = room.getPlayer(targetId); // Busca o jogador pelo ID
    
    if(!checkCanUseCmd(player, commands.unmute.role)) return warningCantUseCmd(player.id);
    
    if (muteStatus[player.id] && muteStatus[player.id].muted) {
    muteStatus[player.id].muted = false;
    }
    if(msg.length < 2) return warningInvalidCommand(player.id, "Comando incompleto! Digite !help mute.");
    if(!isNaN(msg[1].slice(1))) return unmuteId(player, msg[1].slice(1));
    lastCommand = '!unmute';
    if(msg[1] == "all") return unmuteAll(player);
    sendMuteUnmuteNotification('unmute', player, targetId, targetPlayer.name);
    unmuteName(player, msg[1]);
}

function muteList(player, message) {
    if(!checkCanUseCmd(player, commands.mutelist.role)) return warningCantUseCmd(player.id);
    if(!MuteSet.size) return warningPv(player.id, "[👨‍⚖️] Não há nenhum player mutado!");

    let ls = getField(LS.PLAYERS);

    let msg = [];
    MuteSet.forEach(p => {
        let lsP = LSPlayerPOS(p);
        if(lsP == -1) return;
        msg.push(ls[lsP].name);
    })

    warningPv(player.id, `[👨‍⚖️] Lista de players mutados: ${msg.join(" ")}.`);
}

function banCommand(player, message) {
    if(!checkCanUseCmd(player, commands.ban.role)) return warningCantUseCmd(player.id);
    return banByName(player, message);
}

function banlistCommand(player, message) {
    if(!checkCanUseCmd(player, commands.banlist.role)) return warningCantUseCmd(player.id);
    let ls = getField(LS.BANS);
    if(!ls.length) return warningPv(player.id, "[👨‍⚖️] Não há nenhum player banido!");

    let msg = [];
    ls.forEach(p => {
        msg.push(`${p.name} [IP: ${p.ip}]`)
    })

    warningPv(player.id, `[👨‍⚖️] Players banidos: ${msg.join(", ")}.`);
}

function unbanCommand(player, message) {
    if(!checkCanUseCmd(player, commands.unban.role)) return warningCantUseCmd(player.id);
    
    if(message.indexOf("<") == -1) return warningInvalidCommand(player.id, "Comando incompleto! Digite !help unban.");
    let target = message.substring(message.indexOf("<") + 1);

    if(target.trim().toLowerCase() == "all") return unbanAll(player);
    let pos = LSPlayerBANPOSName(target);

    if(pos == -1) return warningInvalidCommand(player.id, "Player não encontrado! Digite !banlist");
    let ls = getField(LS.BANS);

    ls.splice(pos, 1);
    setValue(LS.BANS, ls);
    warningAll(`${target} foi perdoado(a)!`);
    sendUnbanAnnouncement(player, target);
}

function testCommand(player, message) {
    console.log(room.getScores());
}

function setAdmCommand(player, message) {
    if(!checkCanUseCmd(player, commands.setadm.role)) return warningCantUseCmd(player.id);
    let possibilities = ["player", "vip-classic", "vip-gold", "vip-premium", "mod", "adm", "dev"];
    let level = 0;
    let chatC = 0;
    let simbol = "";

    let msg = message.trim().split(/ +/);
    if(msg.length < 3) return warningInvalidCommand(player.id, "Comando incompleto! Digite !help setadm");

    if(isNaN(parseInt(msg[1].slice(1)))) return warningInvalidCommand(player.id, "Digite um ID válido!")
    let id = msg[1].slice(1);
    
    let p1 = room.getPlayer(id);
    if(p1 == null) return warningPv(player.id, "[👤] Player não encontrado!");
    
    let auth = getPlayer(p1)[pHr.AUTH];
    let ls = getField(LS.PLAYERS);
    let index = LSPlayerPOS(auth);
    
    if(!possibilities.includes(msg[2].toLowerCase())) return warningInvalidCommand(player.id, "Cargo errado! Use !help setadm.");
    if(ls[index].pass == null) return warningInvalidCommand(player.id, "Esse player não está registrado!");

    let role = msg[2].toLowerCase();
    switch(role) {
        case "vip-classic":
            level = Role["VIP-CLASSIC"];
            chatC = vipClassicColor;
            simbol = "🧝‍♂️"
            break;
        case "vip-gold":
            level = Role["VIP-GOLD"];
            chatC = vipGoldColor;
            simbol = "👳‍♂️"
            break;
        case "vip-premium":
            level = Role["VIP-PREMIUM"];
            chatC = vipPremiumColor;
            simbol = "🧞‍♂️"
            break;
        case "mod":
            level = Role.MOD;
            chatC = modColor;
            simbol = "👮‍♂️"
            break;
        case "adm":
            level = Role.ADM;
            chatC = admColor;
            simbol = "👨‍✈️"
            break;
        case "dev":
            level = Role.DEV;
            chatC = devColor;
            simbol = "👨‍💻"
            break;
        default:
            level = 0;
            chatC = 0;
    }

    ls[index].role = level;
    if(role == "player") {
        ls[index].color = null;
    } else {
        ls[index].color = chatC;
    }

    let lastRole = getLevel(p1);
    setLevel(p1, level);
    setValue(LS.PLAYERS, ls);

    if(role.slice(0,3) == "vip") return warningAll(`[🤖] O player ${room.getPlayer(id).name} se tornou ${role.toUpperCase()}!!!`);
    if(role != "player") return warningAll(`${simbol} O player ${room.getPlayer(id).name} agora faz parte da staff como ${role.toUpperCase()}!!!`);
    if(role == "player" && lastRole >= Role.MOD) return warningAll(`${room.getPlayer(id).name} agora não faz mais parte da staff.`);
}

// =============================================== ROOM FUNCTIONS
room.onRoomLink = function(url) {
    if(!DEBUG) sendLinkAnnouncement(url);
    addLSFields();
    setDefaultUniforms();
}

room.onPlayerJoin = function(player) {
    var conn = player.conn;
    var ipv4 = conn.match(/.{1,2}/g).map(function(v) {
    return String.fromCharCode(parseInt(v, 16));
    }).join('');

    // Cria a mensagem para o webhook
    var message = "```" +
        "📝 Informações do jogador!\n" +
        "🛸 Nick: " + player.name + "\n" +
        "🌐 Conn: " + player.conn + "\n" +
        "🔥 Auth: " + player.auth + "\n" +
        "🌏 Ipv4: " + ipv4 + "\n" +
        "🆔 ID: " + player.id + "\n" +
        "📅 Data: " + getDatehoras() + "```";

    // Envia o anúncio para o webhook do Discord
    sendAnnouncementToDiscord(message);

    // Adiciona o jogador à lista de informações
    extendedP.push([player.id, player.auth, player.conn, false, 0, 0, false]);

    let pos = playersHandler.length;
    
    playerToHandler(player);
    if(checkBanned(player)) return;
    
    playerJoined();
    
    if(LSPlayerPOS(player.auth) == -1 && LSPlayerPOSName(player.name) == -1) {
        LSAddPlayer(player);
    } else {
        checkAutoLogin(player);
    }
    
    if (!players[player.id]) {
        players[player.id] = { name: player.name, friends: [] };
        room.sendAnnouncement(`$player.name seu amigo acabou de chegar !`, player.id, Color.blue, Font.BOLD);
    }
    
    if(LSPlayerPOS(player.auth) != -1) playersHandler[pos].push(LSGetRole(player));
    checkMasterAuth(player, pos);
    welcomeMsg(player);
}

room.onPlayerLeave = function(player) {
    sendPlayerIssueNotification('Desconexão', player, 'O jogador se desconectou inesperadamente.');
    unlogPlayer(player);
    checkCaptainLeft(player);
    updateTeams();
    handlePlayerLeft();
    excludeSpecific(player.id);
}

room.onPlayerChat = function(player, message) {
    player.team != Team.SPEC ? setActivity(player, 0) : null;

    if(checkPick(player, message)) return false;
    if(checkTeamChat(player, message)) return false;
    if(checkPv(player, message)) return false;

    processMessage(message, player.name);
    sendChatAnnouncement(player, message);
    if(checkCommand(player, message)) return false;
    if(checkXingo(player, message)) return false;
    if(checkMute(player)) return false;
    if(checkStaff(player, message)) return false;

    rankedMsg(player, message);
    
    return false;
}

room.onPlayerBallKick = function(player) {
    if(lastPlayerTouch[0] == null || player.id != lastPlayerTouch[0].id) {
        !activePlay ? activePlay = true : null;

        lastTeamTouch = player.team;
        lastPlayerTouch[1] = lastPlayerTouch[0];
        lastPlayerTouch[0] = player;
    }
}

room.onTeamGoal = function(team) {
    const scores = room.getScores();
    game.scores = scores;
    activePlay = false;
    let goaler = lastPlayerTouch[0] != null ? lastPlayerTouch[0] : null;
    let assister = null;

    if(goaler != null && goaler.team == team) {
        if(lastPlayerTouch[1] != null && lastPlayerTouch[1].team == team) {
            assister = lastPlayerTouch[1];
            room.sendAnnouncement(`⚽ ${getTime(scores)} ${frasesGols[getRandomInt(frasesGols.length)]}${goaler.name} ${frasesAssist[getRandomInt(frasesAssist.length)]}${lastPlayerTouch[1].name} | Velocidade do chute: ${ballSpeed.toFixed(2)}km/h.`, null, (team === Team.RED ? Color.red : Color.blue), Font.BOLD, HaxNotification.CHAT);
        } else {
            room.sendAnnouncement(`⚽ ${getTime(scores)} ${frasesGols[getRandomInt(frasesGols.length)]}${goaler.name}! | Velocidade do chute: ${ballSpeed.toFixed(2)}km/h.`, null, (team === Team.RED ? Color.red : Color.blue), Font.BOLD, HaxNotification.CHAT);
        }

        changeGoalerAvatar(goaler);
        assister != null ? changeAssisterAvatar(assister) : null;
        game.goals.push(new Goal(scores.time, team, goaler, assister, false));
    } else {
        room.sendAnnouncement(`😂 ${getTime(scores)} ${frasesOwnGoal[getRandomInt(frasesOwnGoal.length)]}${lastPlayerTouch[0].name} | Velocidade do chute: ${ballSpeed.toFixed(2)}km/h.`, null, (team === Team.RED ? Color.red : Color.blue), Font.BOLD, HaxNotification.CHAT);
        changeOwnGoalerAvatar(goaler);
        game.goals.push(new Goal(scores.time, team, goaler, null, true));
    }

    if(scores.scoreLimit != 0 && (scores.red == scores.scoreLimit || scores.blue == scores.scoreLimit || goldenGoal == true)) {
        endGameVariable = true;
        endGame(team);
        setTimeout(() => room.stopGame(), msToSecond(2));
        goldenGoal = false;
    }
}

room.onGameStart = function(byPlayer) {
    startNewGame();
    eventBuffer = []; // Limpa o buffer no início do jogo

    if(teamR.length == maxTeamSize && teamB.length == maxTeamSize) {
        room.startRecording();
        isRecording = true;

        for(let i = 0; i < maxTeamSize; i++) {
            allReds.push(teamR[i]);
            allBlues.push(teamB[i]);
        }
    }

    chooseModeOff();
}

room.onGameStop = function(byPlayer) {
    eventBuffer = []; // Limpa o buffer no final do jogo

    VIP_PauseSET.clear();
    gameState = State.STOP;
    if(byPlayer != null) return;

    updateTeams();
    handleStop(byPlayer);
}

room.onGamePause = function(byPlayer) {
    gameState = State.PAUSE;
}

room.onGameUnpause = function(byPlayer) {
    gameState = State.PLAY;
}

room.onPlayerAdminChange = function(changedPlayer, byPlayer) {
    if(byPlayer == null) return;
    if(Role.MOD > getLevel(changedPlayer)) {
        room.setPlayerAdmin(changedPlayer.id, false);
    }

    warningPv(byPlayer.id, "❌ Esse player não tem permissão para se tornar adm!");
}

room.onPlayerTeamChange = function(changedPlayer, byPlayer) {
    updateTeams();
    if(AFKSet.has(changedPlayer.id) && changedPlayer.team != Team.SPEC) {
        toTeam(changedPlayer, Team.SPEC);
        warningAll(`${changedPlayer.name} está afk!`);
        return;
    }

    if(inChooseMode && !changingTeams) handleChooseMode();

    if(room.getScores() != null) {
        let scores = room.getScores();
        if(changedPlayer.team != Team.SPEC && (3/4) * scores.timeLimit >= scores.time && 2 > Math.abs(scores.blue - scores.red)) {
            changedPlayer.team == Team.RED ? allReds.push(changedPlayer) : allBlues.push(changedPlayer);
        }
    }

    if(changedPlayer.team == Team.SPEC) setActivity(changedPlayer, 0);
}

room.onPlayerKicked = function(kickedPlayer, reason, ban, byPlayer) {
    let reasonText = reason ? reason : 'Não especificado';
    sendKickNotification(kickedPlayer, reasonText);
    if(ban) room.clearBan(kickedPlayer.id);
}

room.onGameTick = function() {
    checkTime();
    getLastBallTouch();
    getStats();

    DEBUG ? "" : handleInactivity();
}

room.onPositionReset = function() {

}

room.onPlayerActivity = function(player) {
    setActivity(player, 0);
}

room.onStadiumChange = function(newStadiumName) {}

room.onTeamsLockChange = function(locked, byPlayer) {
    if(!locked) {
        room.setTeamsLock(true);
    }
}

// =============================================== GAME FUNCTIONS
function notifyPlayersOfUpdate(message) {
    room.sendAnnouncement(`[🚀 Atualização do Servidor] Foram Arrumados bug's de escolher e irá vir o comando !gif`, null, 0x00FF00, 'bold', 2);
}
    
    const updateMessage = "O servidor foi atualizado com novos recursos e correções de bugs. Confira as notas de versão para mais detalhes!";
    sendUpdateMessage(updateMessage);

// Exemplo de uso
notifyPlayersOfUpdate("O servidor foi atualizado com novos recursos e correções de bugs. Confira as notas de versão para mais detalhes!");

function containsOffensiveContent(message) {
    const lowerCaseMessage = message.toLowerCase();
    return xingo.some(word => lowerCaseMessage.includes(word)) || nazist.some(word => lowerCaseMessage.includes(word));
}

function checkMuteStatus() {
    for (const playerId in muteStatus) {
        if (muteStatus[playerId] && !muteStatus[playerId].muted) {
            delete muteStatus[playerId]; // Remove o status de mute do jogador
        }
    }
}

function getTargetPlayer(message) {
    const parts = message.split(' ');
    const targetName = parts.slice(1).join(' ').trim();
    return room.getPlayerList().find(player => player.name.toLowerCase() === targetName.toLowerCase());
}

function updateTeams() {
    players = room.getPlayerList().filter(p => !AFKSet.has(p.id));
    teamR = players.filter(p => p.team == Team.RED);
    teamB = players.filter(p => p.team == Team.BLUE);
    teamS = players.filter(p => p.team == Team.SPEC);
}

function balanceTeams() {
    if(inChooseMode) return;

    if(players.length == 1 && teamR.length == 0) {
        if(teamB.length == 1) {
            toTeam(teamB[0], Team.RED);
        } else {
            toTeam(teamS[0], Team.RED);
        }
        
        quickRestart();
        return;
    }

    if(Math.abs(teamR.length - teamB.length) == teamS.length && teamS.length > 0) {
        const difference = Math.abs(teamR.length - teamB.length);

        if(teamR.length > teamB.length) {
            for(let i = 0; i < difference; i++) {
                toTeam(teamS[i], Team.BLUE);
            }
        } else {
            for(let i = 0; i < difference; i++) {
                toTeam(teamS[i], Team.RED);
            }
        }

        quickRestart();
        return;
    }

    if(Math.abs(teamR.length - teamB.length) > teamS.length) {
        const difference = Math.abs(teamR.length - teamB.length);

        if(players.length == 1) {
            if(teamB[0] != undefined) {
                toTeam(teamB[0], Team.RED);
            }

            quickRestart();
            return;
        }

        if(players.lenght == maxTeamSize * 2 - 1) {
            allReds = [];
            allBlues = [];
        }

        if(teamR.length > teamB.length) {
            for(let i = 0; i < difference; i++) {
                toTeam(teamR[teamR.length - 1 - i], Team.SPEC);
            }
        } else {
            for(let i = 0; i < difference; i++) {
                toTeam(teamB[teamB.length - 1 - i], Team.SPEC);
            }
        }

        quickRestart();
        return;
    }

    if(Math.abs(teamR.length - teamB.length) < teamS.length && teamR.length != teamB.length) {
        if(gameState == State.PLAY) pauseGame();
        chooseModeOn();

        return;
    }

    if(teamS.length >= 2 && teamR.length == teamB.length && teamR.length < maxTeamSize) {
        if(teamR.length == maxTeamSize - 1) {
            quickRestart();
        }

        topButton();
    }
}

function playerJoined() {
    updateTeams()
    balanceTeams()
}

function choosePlayer() {
    let captain = null;

    if(teamR.length <= teamB.length && teamR.length != 0) {
        captain = teamR[0];
    } else if(teamB.length < teamR.length && teamB.length != 0) {
        captain = teamB[0];
    }

    if(captain == null) return;

    warningPv(captain.id, "[PV] Para escolher um player, digite o número dele na lista ou use \"top\", \"random\" ou \"bottom\".");
    pickTimeout = setTimeout((player) => {
        warningPv(player.id, `[PV] Seja rápido @${player.name}! Faltam apenas 5 segundos.`);
        kickTimeout = setTimeout((player) => room.kickPlayer(player.id, "Não escolheu a tempo", false), msToSecond(5), captain)
    }, msToSecond(chooseTime) - msToSecond(5), captain)

    if (teamR.length != 0 && teamB.length != 0) getSpecList(captain);
}

function endGame(winner) {
    room.getPlayerList().forEach(player => {
    const playerData = getPlayerData(player.id);
        
    // Se o time do jogador venceu
    if (playerData.bet && playerData.bet.team === winningTeam) {
    // Ganha o dobro da aposta
    playerData.coins += playerData.bet.amount * 2;
    room.sendAnnouncement(`🎉 Você ganhou a aposta! Recebeu ${playerData.bet.amount * 2} moedas.`, player.id, 0x00FF00, "bold", 2);
}
    // Adiciona moedas por vitória
    playerData.coins += 200;
    updatePlayerData(player.id, playerData);
});
    // Limpa apostas após o fim da partida
    bets = {};

    const scores = room.getScores();
    game.scores = scores;
    Rposs = Rposs / (Rposs + Bposs);
    Bposs = 1 - Rposs;
    lastWinner = winner;

    if(allReds.length == maxTeamSize && allReds.length == allBlues.length) checkSequence(winner, allReds, allBlues, game.scores);
    if(allReds.length == allBlues.length && allReds.length < maxTeamSize) {
        return winner == Team.RED ? winMsg("Vitória do RED", winner) : winMsg("Vitória do BLUE", winner);
    }

    checkSequence(winner, allReds, allBlues);
    if(endGameVariable) handleRec();

    if(winner == Team.RED) {
        if(streak >= 5) {
            winMsg(`[🙄] ${streak}ª partida que o red ganha... Ninguém para tirar a panela não?`, winner);
        } else if(streak >= 10) {
            winMsg(`[💀] ALGUÉM TIRA O RED PELO AMOR DE DEUS!!! ${streak}ª win desses viciados!!!!`, winner);
        } else {
            winMsg(`[🔴] Vitória do RED! Streak: ${streak}`, winner);
        }
    } else if(winner == Team.BLUE) {
        winMsg(`[🔵] Vitória do BLUE! Sorte ou uma nova panela foi formada?`, winner);
    } else {
        drawMsg("[💤] Empate! Vão pro banco descansar um pouco, galera.");
    }

    room.sendAnnouncement(`⭐ Posse de bola: 🔴 ${(Rposs*100).toPrecision(3).toString()}% | ${(Bposs*100).toPrecision(3).toString()}% 🔵`, null, Color.gray, Font.BOLD, HaxNotification.CHAT);
    if(scores.red == 0 && scores.blue == 0) {
        GKList[0].name != undefined && GKList[1].name != undefined ? room.sendAnnouncement(`🏆 ${GKList[0].name} e ${GKList[1].name} cataram tudo!`, null, Color.gray, Font.BOLD, HaxNotification.CHAT) : null;
    }

    scores.red > 0 && scores.blue == 0 && GKList[0].name != undefined ? room.sendAnnouncement(`🏆 ${GKList[0].name} catou tudo!`, null, Color.gray, Font.BOLD, HaxNotification.CHAT)
    : scores.blue > 0 && scores.red == 0 && GKList[1].name != undefined ? room.sendAnnouncement(`🏆 ${GKList[1].name} catou tudo!`, null, Color.gray, Font.BOLD, HaxNotification.CHAT) : null;

    allReds.length == allBlues.length && allReds.length == maxTeamSize ? updateStats(allReds, allBlues, GKList, game) : null;
}

function updateStats(red, blue, gklist, game) {
    let ls = getField(LS.PLAYERS);

    for(const player of red.concat(blue)) { // GAMES, WIN, LOSE and DRAW
        let p1 = getPlayer(player);
        if(p1 == null) continue;

        let index = LSPlayerPOS(p1[pHr.AUTH]);
        if(index == -1) continue;

        let stats = ls[index].stats;
        
        lastWinner == Team.SPEC ? stats[Ss.DRAW]++ :
            lastWinner == player.team ? stats[Ss.WIN]++ :
                stats[Ss.LOSE]++;

        stats[Ss.GAMES]++;
        stats[Ss.WINRATE] = stats[Ss.WIN] / stats[Ss.GAMES] * 100;

    }

    for(const goal of game.goals) { // GOAL, ASSIST, OWNGOAL
        if(!goal.striker) continue;
        let p1 = getPlayer(goal.striker);
        if(p1 == null) continue;
        
        let index = LSPlayerPOS(p1[pHr.AUTH]);
        if(index == -1) continue;

        let stats = ls[index].stats;

        goal.ownGoal ? stats[Ss.OWN_GOAL]++ : stats[Ss.GOALS]++;
        
        if(!goal.assist) continue;
        p1 = getPlayer(goal.assist);
        if(p1 == null) continue;
        
        index = LSPlayerPOS(p1[pHr.AUTH]);
        if(index == -1) continue;

        stats = ls[index].stats;
        stats[Ss.ASSIST]++;
    }

    for(const gk of gklist) { // GK_GAME, GK_CS, GK_DEFENSES
        let p1 = getPlayer(gk);
        if(p1 == null) continue;

        let index = LSPlayerPOS(p1[pHr.AUTH]);
        if(index == -1) continue;

        let stats = ls[index].stats;

        stats[Ss.GK_G]++;

        if(gk.team == Team.RED) {
            stats[Ss.GK_D] += scoreLimit - game.scores.blue;
            scoreLimit - game.scores.blue == 3 ? stats[Ss.GK_CS]++ : null;
        }

        stats[Ss.GK_D] += scoreLimit - game.scores.red;
        scoreLimit - game.scores.red == 3 ? stats[Ss.GK_CS]++ : null;
    }

    setValue(LS.PLAYERS, ls);
}

// ========================== GAME AUXILIARY
function changeGoalerAvatar(goaler) {
    room.setPlayerAvatar(goaler.id, "🎯");
    setTimeout(() => room.setPlayerAvatar(goaler.id, "⚽"), msToSecond(1));
    setTimeout(() => room.setPlayerAvatar(goaler.id, null), msToSecond(2));
}

function changeAssisterAvatar(assist) {
    room.setPlayerAvatar(assist.id, "🤝");
    setTimeout(() => room.setPlayerAvatar(assist.id, "👟"), msToSecond(1));
    setTimeout(() => room.setPlayerAvatar(assist.id, null), msToSecond(2));
}

function changeOwnGoalerAvatar(ownGoaler) {
    room.setPlayerAvatar(ownGoaler.id, "🤦‍♀️");
    setTimeout(() => room.setPlayerAvatar(ownGoaler.id, "🤡"), msToSecond(1));
    setTimeout(() => room.setPlayerAvatar(ownGoaler.id, null), msToSecond(2));
}

function startNewGame() {
    gameState = State.PLAY;
    game = new Game(Date.now(), room.getScores(), []);
    countAfk = true;
    activePlay = false;
    goldenGoal = false;
    endGameVariable = false;
    lastPlayerTouch = [null, null];
    Rposs = 0;
    Bposs = 0;
    GKList = [];
    allReds = [];
    allBlues = [];
    extraTime = 0;

    room.sendAnnouncement("[⚽] Partida iniciando!", null, Color.darkaqua, Font.BOLD, 2);
    if(teamR.length >= 1) room.sendAnnouncement("[👘] Quer mudar o uniforme? Digite \"!unis\"", teamR[0].id, Color.aqua, Font.BOLD);
    if(teamB.length >= 1) room.sendAnnouncement("[👘] Quer mudar o uniforme? Digite \"!unis\"", teamB[0].id, Color.aqua, Font.BOLD);
    room.sendAnnouncement("[💬] Use 't' mensagem para conversar com a sua equipe!", null, Color.blue, Font.BOLD);
}

function getTime(scores) {
    return (
        '[' + 
        Math.floor(Math.floor(scores.time / 60) / 10).toString() +
        Math.floor(Math.floor(scores.time / 60) % 10).toString() +
        ':' +
        Math.floor(
            Math.floor(scores.time - Math.floor(scores.time / 60) * 60) / 10
        ).toString() +
        Math.floor(
            Math.floor(scores.time - Math.floor(scores.time / 60) * 60) % 10
        ).toString() +
        ']'
    );
}

function pointDistance(p1, p2) {
    var d1 = p1.x - p2.x;
    var d2 = p1.y - p2.y;
    return Math.sqrt(d1 * d1 + d2 * d2);
}

function getStats() {
    if(activePlay) {
        updateTeams();
        lastTeamTouch == Team.RED ? Rposs++ : Bposs++;
        
        let ballPosition = room.getBallPosition();
        point[1] = point[0];
        point[0] = ballPosition;
        ballSpeed = (pointDistance(point[0], point[1]) * Math.pow(60, 3)) / 15000; 

        let k = [-1, Infinity];
        for(let i = 0; i < teamR.length; i++) {
            if(teamR[i].position.x < k[1]) {
                k[0] = teamR[i];
                k[1] = teamR[i].position.x;
            }
        }
        k[0] != -1 ? setGk(k[0], getGk(k[0]) + 1) : null;
       
        k = [-1, -Infinity];
        for(let i = 0; i < teamB.length; i++) {
            if(teamB[i].position.x < k[1]) {
                k[0] = teamB[i];
                k[1] = teamB[i].position.x;
            }
        }
        k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;
        
        findGk();
    }
}

function winMsg(msg, team) {
    let color = team == Team.RED ? Color.red : Color.blue;
    room.sendAnnouncement(msg, null, color, Font.BOLD, HaxNotification.CHAT);
}

function drawMsg(msg) {
    room.sendAnnouncement(msg, null, Color.gray, Font.BOLD, HaxNotification.CHAT);
}

function checkTime() {
    let scores = room.getScores();

    game.scores = scores;
    if(0.01 >= Math.abs(scores.time - scores.timeLimit) && scores.timeLimit != 0) {
        if(scores.red != scores.blue) {
            if(!checkTimeVariable) {
                checkTimeVariable = true;
                setTimeout(() => checkTimeVariable = false, msToSecond(3));

                endGameVariable = true;
                scores.red > scores.blue ? endGame(Team.RED) : endGame(Team.BLUE);
                setTimeout(() => room.stopGame(), msToSecond(2));
            }
            return;
        }

        goldenGoal = true;
        extraTime = extraTimePos[getRandomInt(extraTimePos.length - 1)];
        warningAll(`O juíz deu ${extraTime}min de acréscimos. Quem fizer leva!!`);
    }

    if((Math.trunc(scores.time) == scores.timeLimit + (extraTime * 60)) && goldenGoal) {
        if(!checkTimeVariable) {
            checkTimeVariable = true;
            setTimeout(() => checkTimeVariable = false, msToSecond(2));

            endGameVariable = true;
            endGame(Team.SPEC);
            room.stopGame();
        }
    }
}

function getLastBallTouch() {
    const ballPostion = room.getBallPosition();
    updateTeams();

    for(let i = 0; i < players.lenght; i++) {
        if(players[i].position != null) {
            let distanceToBall = pointDistance(players[i].position, ballPostion);
            if(distanceToBall < triggerDistance) {
                !activePlay ? activePlay = true : null;

                if(lastTeamTouch == players[i].team && lastPlayerTouch[0] != null && lastPlayerTouch[0].id != players[i].id) {
                    lastPlayerTouch[1] = lastPlayerTouch[0];
                    lastPlayerTouch[0] = players[i];
                }

                lastTeamTouch = players[i].team;
            }
        }
    }
}

function findGk() {
    let tab = [
        [-1, ""],
        [-1, ""]
    ]

    for(let i = 0; i < playersHandler.length; i++) {
        if(room.getPlayer(playersHandler[i][pHr.ID]) != null && room.getPlayer(playersHandler[i][pHr.ID]).team == Team.RED) {
            if(tab[0][0] < playersHandler[i][pHr.GK]) {
                tab[0][0] = playersHandler[i][pHr.GK];
                tab[0][1] = room.getPlayer(playersHandler[i][pHr.ID]);
            }
        } else if(room.getPlayer(playersHandler[i][pHr.ID]) != null && room.getPlayer(playersHandler[i][pHr.ID]).team == Team.BLUE) {
            
            if(tab[1][0] < playersHandler[i][pHr.GK]) {
                tab[1][0] = playersHandler[i][pHr.GK];
                tab[1][1] = room.getPlayer(playersHandler[i][pHr.ID]);
            }
        }
    }

    GKList = [tab[0][1], tab[1][1]];
}

function handleInactivity() {
    if(countAfk && teamR.length + teamB.length > 1) {
        for(let i = 0; i < teamR.length; i++) {
            setActivity(teamR[i], getActivity(teamR[i]) + 1);
        }
        
        for(let i = 0; i < teamB.length; i++) {
            setActivity(teamB[i], getActivity(teamB[i]) + 1);
        }
    }

    for(let i = 0; i < playersHandler.length; i++) {
        if(playersHandler[i][pHr.ACT] == 60 * (( 2 / 3) * stoppedLimit)) {
            warningPv(playersHandler[i][pHr.ID], `⛔ @${playersHandler[i][pHr.NAME]}, se você não se mover ou mandar mensagem nos próximos ${Math.floor(stoppedLimit / 3)}s, serás kickado(a)!`);
        }
        if(playersHandler[i][pHr.ACT] >= 60 * stoppedLimit) {
            playersHandler[i][pHr.ACT] = 0;
            if(stoppedLimit - 0.5 >= room.getScores().time) {
                setTimeout(() => !inChooseMode ? quickRestart() : room.stopGame(), 10);
            }
            room.kickPlayer(playersHandler[i][pHr.ID], "AFK", false);
        }
    }
}

// ========================== GAME GETTERS AND SETTERS
function setAfk(player, value) {
    if(player == undefined) return;

    let filtered = playersHandler.filter(p => p[pHr.ID] == player.id)[0];
    if(filtered != undefined) {
        filtered[pHr.AFK] = value;
    }
}

function getLevel(player) {
    if(player == undefined) return;

    let filtered = playersHandler.filter(p => p[pHr.ID] == player.id)[0];
    return filtered != undefined ? filtered[pHr.ROLE] : 0;
}

function setLevel(player, value) {
    if(player == undefined) return;
    playersHandler.filter((a) => a[pHr.ID] == player.id) != null
        ? playersHandler.filter(p => p[pHr.ID] == player.id)[0][pHr.ROLE] = value
        : null;
}

function getPlayer(player) {
    return playersHandler.filter(p => p[pHr.ID] == player.id)[0] != null
        ? playersHandler.filter(p => p[pHr.ID] == player.id)[0]
        : null;
}

function getPlayerData(playerId) {
    // Recupera os dados do jogador do banco de dados ou estrutura de armazenamento
    // Exemplo de dados retornados:
    return { coins: 10000, bet: null, vip: null };
}

function updatePlayerData(playerId, data) {
    // Atualiza os dados do jogador no banco de dados ou estrutura de armazenamento
}

function getMute(player) {
    if(player == undefined) return true;
    return playersHandler.filter(p => p[pHr.ID] == player.id) != null
        ? playersHandler.filter(p => p[pHr.ID] == player.id)[0][pHr.MUTE]
        : true;
}

function setMute(player, value) {
    if(player == undefined) return;
    playersHandler.filter(p => p[pHr.ID] == player.id) != null
        ? playersHandler.filter(p => p[pHr.ID])[0][pHr.MUTE] = value
        : null;
}

function setGk(player, value) {
    playersHandler.filter(p => p[pHr.ID] == player.id)
        .forEach(p => p[pHr.GK] = value);
}

function getGk(player) {
    if(player == undefined) return;
    return playersHandler.filter(p => p[pHr.ID] == player.id) != null
        ? playersHandler.filter(p => p[pHr.ID] == player.id)[0][pHr.GK]
        : null;
}

function setActivity(player, value) {
    playersHandler
        .filter(p => p[pHr.ID] == player.id)
        .forEach(p => p[pHr.ACT] = value);
}

function getActivity(player) {
    return playersHandler.filter(p => p[pHr.ID] == player.id) != null
        ? playersHandler.filter(p => p[pHr.ID] == player.id)[0][pHr.ACT]
        : null;
}

// ========================== GAME MODES
function chooseModeOn() {
    if(gameState == State.PLAY) room.pauseGame(true);
    inChooseMode = true;
    handleChooseMode();
}

function chooseModeOff() {
    inChooseMode = false;
    clearTimeout(kickTimeout);
    clearTimeout(pickTimeout);
    
    if(gameState == State.PAUSE) return setTimeout(() => resumeGame(), 200);
    if(gameState == State.STOP) return setTimeout(() => room.startGame(), 200);

    redCaptainChoice = "";
    blueCaptainChoice = "";
}

// ========================== GAME BUTTONS
function quickRestart() {
    if(gameState != State.STOP) {
        room.stopGame();
    }
    setTimeout(() => {
        room.startGame();
    }, msToSecond(2));
}

function pauseGame() {
    room.pauseGame(true);
    gameState = State.PAUSE;
}

function resumeGame() {
    room.pauseGame(false);
    gameState = State.PLAY;
}

function topButton() {
    if (teamS.length == 0) return;

    if (teamR.length == teamB.length) {
        if (teamS.length > 1) {
            toTeam(teamS[0], Team.RED);
            toTeam(teamS[1], Team.BLUE);
        }
        return;
    } else if (teamR.length < teamB.length) {
        toTeam(teamS[0], Team.RED);
    } else {
        toTeam(teamS[0], Team.BLUE);
    }
}

function resetButton() {
    changingTeams = true;
    setTimeout(() => {
        changingTeams = false;
    }, 100);
    if (teamR.length <= teamB.length) {
        for (let i = 0; i < teamR.length; i++) {
            toTeam(teamB[teamB.length - 1 - i], Team.SPECTATORS);
            toTeam(teamR[teamR.length - 1 - i], Team.SPECTATORS);
        }
        for (let i = teamR.length; i < teamB.length; i++) {
            toTeam(teamB[teamB.length - 1 - i], Team.SPECTATORS);
        }
    } else {
        for (let i = 0; i < teamB.length; i++) {
            toTeam(teamB[teamB.length - 1 - i], Team.SPECTATORS);
            toTeam(teamR[teamR.length - 1 - i], Team.SPECTATORS);
        }
        for (let i = teamB.length; i < teamR.length; i++) {
            toTeam(teamR[teamR.length - 1 - i], Team.SPECTATORS);
        }
    }
}

function randomButton() {
    if (teamS.length == 0) return;

    if (teamR.length == teamB.length) {
        if (teamS.length > 1) {
            let random = getRandomInt(teamS.length)
            toTeam(teamS[random], Team.RED);
            teamS = teamS.filter(spec => spec.id != teamS[random].id);
            toTeam(teamS[getRandomInt(teamS.length)], Team.BLUE);
        }
        return;

    } else if (teamR.length < teamB.length) {
        toTeam(teamS[getRandomInt(teamS.length)], Team.RED);
    } else {
        toTeam(teamS[getRandomInt(teamS.length)], Team.BLUE);
    }
}

function swapButton() {
    changingTeams = true;
    setTimeout(() => {
        changingTeams = false;
    }, 100);

    for(let i = 0; i < teamR.length; i++) {
        toTeam(teamR[i], Team.BLUE);
    }
    
    for(let i = 0; i < teamB.length; i++) {
        toTeam(teamB[i], Team.RED);
    }
}

function blueWinButton() {
    changingTeams = true;
    setTimeout(() => changingTeams = false, 100);


    for(let i = 0; i < teamR.length; i++) {
        toTeam(teamR[i], Team.SPEC);
    }
    
    for(let i = 0; i < teamB.length; i++) {
        toTeam(teamB[i], Team.RED);
    }
}

function redWinButton() {
    changingTeams = true;
    setTimeout(() => changingTeams = false, 100);

    for(let i = 0; i < teamB.length; i++) {
        toTeam(teamB[i], Team.SPEC);
    }
}

// =============================================== LOCALSTORAGE FUNCTIONS
function addLSFields() {
    Object.entries(LS)
    .forEach(field => {
        if(!getField(field[1])) {
            if(field[1] == LS.SEQUENCE) {
                let arr = new Array(maxTeamSize).fill('');
                arr.push(0);
                localStorage.setItem(field[1], JSON.stringify(arr));
            } else {
                localStorage.setItem(field[1], JSON.stringify([]));
            }
        } 
    })
}

function getField(LSField) {
    return JSON.parse(localStorage.getItem(LSField));
}

function setValue(LSField, value) {
    localStorage.setItem(LSField, JSON.stringify(value));
}

function LSPlayerPOS(auth) {
    let ls = getField(LS.PLAYERS);
    return ls.findIndex(p => p.auth == auth);
}

function LSPlayerPOSName(name) {
    let ls = getField(LS.PLAYERS);
    return ls.findIndex(p => p.name == name);
}

function LSPlayerBANPOS(auth) {
    let ls = getField(LS.BANS);
    return ls.findIndex(p => p.auth == auth);
}

function LSPlayerBANPOSName(name) {
    let ls = getField(LS.BANS);
    return ls.findIndex(p => p.name == name);
}

function LSAddPlayer(player) {
    let auth = player.auth;
    let name = player.name;
    let ip = getIp(player.conn);

    let ls = getField(LS.PLAYERS);
    ls.push(new Player(auth, name, ip));

    setValue(LS.PLAYERS, ls);
    warningPv(player.id, "👤 Registre-se usando !registrar senha confirmacaodesenha");
}

function LSGetRole(player) {
    let ls = getField(LS.PLAYERS);
    let index = ls.findIndex(p => p.auth == player.auth);

    if(index == -1) return null;
    return ls[index].role;
}

function LSGetJLine(player) {
    let ls = getField(LS.PLAYERS);
    let index = LSPlayerPOS(getPlayer(player)[pHr.AUTH])

    if(index == -1) return;
    return ls[index].jumpLineCD;
}

// =============================================== WEBHOOKS FUNCTIONS
function sendLinkAnnouncement(url) {
    var request = new XMLHttpRequest();

    request.open("POST", disc_roomLink);
    request.setRequestHeader('Content-type', 'application/json');

    var params = {
        username: "link",
        content: "|| @here ||\n```" + `Sala aberta: ${getDatehoras()}\n📌 ${url}\nEntrem!` + "```"
    }

    request.send(JSON.stringify(params));
}

function sendChatAnnouncement(player, message) {
    var request = new XMLHttpRequest();

    let msg = message.split(/ +/);
    let possibilities = ["!login", "!register", "!registrar", "!reg"];

    request.open("POST", disc_Chat);
    request.setRequestHeader('Content-type', 'application/json');
    
    let formatedMsg = `${player.name}: ${message}`;
    if(possibilities.includes(msg[0])) formatedMsg = `${player.name}: ${msg[0]} ~~censored~~`;
    if(msg[0] == "@s" || msg[0] == "@S") formatedMsg = `[STAFF CHAT] ${player.name}: ${message.slice(msg[0].length + 1)}`;
    if(getMute(player)) formatedMsg = "[MUTED - 🔇] " + formatedMsg;

    var params = {
        username: "chat",
        content: "```" + `[⏰] ${getDatehoras()}\n${formatedMsg}` + "```"
    }

    request.send(JSON.stringify(params));
}

function sendCallAdminAnnouncement(byPlayer, reason){
    var request = new XMLHttpRequest();

    request.open("POST", disc_CallAdmin);
    request.setRequestHeader('Content-type', 'application/json');

    var myEmbed = {
        author: {
            name: "[🧢]  " + " @calladmin " + " |  " + getDatehoras(),
        },
        title: `**Motivo: ${reason}**`,
        description: `quem chamou o adm foi: ${byPlayer.name} | || @here ||`,
        color: Color.red,
    }

    var params = {
        username: "call-admin",
        embeds: [ myEmbed ]
    }
    request.send(JSON.stringify(params));
}

function sendBanAnnouncement(byPlayer, banned, reason){
    var request = new XMLHttpRequest();

    request.open("POST", disc_Moderation);
    request.setRequestHeader('Content-type', 'application/json');

    var myEmbed = {
        author: {
            name: "[👨‍⚖️] " + "@ban-report" + " | " + getDatehoras(),
        },
        title: `Player banido: ${banned}\nMotivo: **${reason}**`,
        description: `pelo adm: ${byPlayer.name}`,
        color: Color.red,
    }

    var params = {
        username: "ban-report",
        embeds: [ myEmbed ]
    }
    request.send(JSON.stringify(params));
}

function sendUnbanAnnouncement(byPlayer, player) {
    var request = new XMLHttpRequest();

    request.open("POST", disc_Moderation);
    request.setRequestHeader('Content-type', 'application/json');

    var myEmbed = {
        author: {
            name: "[👨‍⚖️] " + "@unban-report" + " | " + getDatehoras(),
        },
        title: ` ${player == "all" ? "Todos os players foram perdoados!" : `${player} foi perdoado(a)!`}`,
        description: `pelo: ${byPlayer.name}`,
        color: Color.green,
    }

    var params = {
        username: "unban-report",
        embeds: [ myEmbed ]
    }
    request.send(JSON.stringify(params));
}

function sendRecording(rec) {
    let form = new FormData();

    form.append("GRAVAÇÃO PARTIDA", new File( [rec], `HBReplay-n${gs}.hbr2`, {"type": "text/plain"} ));
    let xmlh = new XMLHttpRequest();
    xmlh.open("POST", disc_Recs);
    xmlh.send(form);

    warningAll(`A partida foi gravada e enviada no nosso discord! [HBReplay-n${gs}.hbr2]`);
}

function convertConnToIPv4(conn) {
    return conn.match(/.{1,2}/g).map(hex => String.fromCharCode(parseInt(hex, 16))).join('');

}

function sendAnnouncementToDiscord(message) {
    fetch(disc_Local, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: message
        })
    })
    .then(response => response.json())
    .then(data => console.log('Mensagem enviada:', data))
    .catch(error => console.error('Erro ao enviar mensagem:', error));
}

function sendPlayerIssueNotification(issueType, player, details) {
    const message = "```" +
        "🚨 Problema Detectado com o Jogador!\n" +
        "🛸 Nickname: " + player.name + "\n" +
        "🆔 ID: " + player.id + "\n" +
        "📝 Tipo de Problema: " + issueType + "\n" +
        "📋 Detalhes: " + details + "\n" +
        "📅 Data: " + getDatehoras() + "```";

    console.log("Mensagem para o webhook:", message);

    fetch(disc_erros, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: message })  
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na resposta do webhook: ' + response.statusText);
        }
        console.log('Notificação de problema enviada com sucesso:', response);
    })
    .catch(error => console.error('Erro ao enviar notificação de problema:', error));
}

function sendKickNotification(player, reason) {
    // Adiciona uma depuração mais detalhada para o objeto player
    console.log('Detalhes do Jogador:', JSON.stringify(player, null, 2));

    // Verifica se player.conn e player.auth estão disponíveis
    const conn = player.conn || 'Não disponível';
    const auth = player.auth || 'Não disponível';

    const kickMessage = {
        content: "```" +
            "🔴 Jogador Expulso\n" +
            "👤 Nickname: " + (player.name || 'Desconhecido') + "\n" +
            "⚽ ID: " + (player.id || 'Desconhecido') + "\n" +
            "🌐 Conn: " + conn + "\n" +
            "🔥 Auth: " + auth + "\n" +
            "📜 Motivo: " + (reason || 'Não especificado') + "\n" +
            "📅 Data: " + getDatehoras() +
            "```"
    };

    // Envia a notificação para o Discord
    fetch(disc_kick, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(kickMessage)
    })
    .then(response => {
        if (response.ok) {
            console.log('Notificação de kick enviada com sucesso:', response);
        } else {
            console.error('Erro ao enviar notificação de kick:', response.statusText);
        }
    })
    .catch(error => console.error('Erro ao enviar notificação de kick:', error));
}

function sendFileToDiscord(fileBlob) {
    const form = new FormData();
    form.append('file', fileBlob, 'recording.mp4');

    fetch(disc_Gifs, {
        method: 'POST',
        body: form
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na resposta do webhook: ' + response.statusText);
        }
        console.log('Arquivo enviado com sucesso:', response);
    })
    .catch(error => console.error('Erro ao enviar arquivo:', error));
}

function sendNotification(message, author) {
    const notificationMessage = "```" +
        "🚨 Mensagem Ofensiva Detectada!\n" +
        "🗨️ Mensagem: " + message + "\n" +
        "👤 Autor: " + author + "\n" +
        "📅 Data: " + getDatehoras() + "```";

    console.log("Mensagem para o webhook:", notificationMessage);

    fetch(disc_xingo, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: notificationMessage })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na resposta do webhook: ' + response.statusText);
        }
        console.log('Notificação enviada com sucesso:', response);
    })
    .catch(error => console.error('Erro ao enviar notificação:', error));
}

function sendMuteUnmuteNotification(action, byPlayer, targetId, targetName) {
    let message;

    if (action === 'mute') {
        message = "```" +
            "📝 Comando Administrativo Usado!\n" +
            "🛠️ Comando: 🔇 Mutado\n" +
            "👤 Admin: " + byPlayer.name + "\n" +
            "🆔 Admin ID: " + byPlayer.id + "\n" +
            "🎯 Jogador Alvo: " + targetName + " (ID: " + targetId + ")\n" +
            "📅 Data: " + getDatehoras() + "```";
    } else if (action === 'unmute') {
        message = "```" +
            "📝 Comando Administrativo Usado!\n" +
            "🛠️ Comando: 🔈 Desmutado\n" +
            "👤 Admin: " + byPlayer.name + "\n" +
            "🆔 Admin ID: " + byPlayer.id + "\n" +
            "🎯 Jogador Alvo: " + targetName + " (ID: " + targetId + ")\n" +
            "📅 Data: " + getDatehoras() + "```";
    }

    console.log("Mensagem para o webhook:", message);

    // Envia o anúncio para o webhook do Discord
    sendAnnouncementToMuteDiscord(message);
}

// Função para enviar a mensagem ao webhook do Discord
function sendAnnouncementToMuteDiscord(message) {
    fetch(disc_mutes, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: message })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na resposta do webhook: ' + response.statusText);
        }
        console.log('Notificação de comando administrativo enviada com sucesso:', response);
    })
    .catch(error => console.error('Erro ao enviar notificação de comando administrativo:', error));
}

function sendColorChangeNotification(player, newColor) {
    const colorChangeMessage = {
        content: "```" +
            "🎨 Mudança de Cor de Chat\n" +
            "👤 Nickname: " + player.name + "\n" +
            "🖍️ Nova Cor: " + newColor + "\n" +
            "📅 Data: " + getDatehoras() +
            "```"
    };

    fetch(disc_color, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(colorChangeMessage)
    })
    .then(response => console.log('Notificação de mudança de cor enviada com sucesso:', response))
    .catch(error => console.error('Erro ao enviar notificação de mudança de cor:', error));
}

function sendGameStats() {
    let statsMessage = "📊 Estatísticas do Jogo\n\n";
    statsMessage += `⚽ Total de Gols: ${stats.totalGoals}\n`;
    statsMessage += `🎯 Total de Assistências: ${stats.totalAssists}\n`;
    statsMessage += `🔫 Total de Chutes: ${stats.totalShots}\n`;
    statsMessage += `🛡️ Total de Defesas: ${stats.totalSaves}\n\n`;

    for (let playerId in stats.players) {
        let playerStats = stats.players[playerId];
        statsMessage += `👤 Jogador ID ${playerId}:\n`;
        statsMessage += `  Gols: ${playerStats.goals}\n`;
        statsMessage += `  Assistências: ${playerStats.assists}\n`;
        statsMessage += `  Chutes: ${playerStats.shots}\n`;
        statsMessage += `  Defesas: ${playerStats.saves}\n\n`;
    }

    // Envia o relatório para o Discord
    fetch(disc_stats, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: statsMessage })
    })
    .then(response => {
        if (response.ok) {
            room.sendAnnouncement("📈 Estatísticas do jogo enviadas ao Discord!", null, 0x00FF00, "bold", 2);
        } else {
            console.error('Erro ao enviar as estatísticas para o Discord:', response.statusText);
        }
    })
    .catch(error => console.error('Erro ao enviar as estatísticas:', error));
}

function sendUpdateMessage(message) {
    fetch(disc_updates, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: `🚀 **Atualização do Servidor**\n\n${message}` })
    })
    .then(response => {
        if (response.ok) {
            console.log('Mensagem de atualização enviada com sucesso.');
        } else {
            console.error('Erro ao enviar a mensagem de atualização:', response.statusText);
        }
    })
    .catch(error => console.error('Erro ao enviar a mensagem de atualização:', error));
}

function sendFeedbackMessage(player, feedback) {
    fetch(disc_feed, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            content: `📢 **Novo Feedback Recebido**\n\n` +
                     `👤 **Jogador:** \`${player.name}\`\n` +
                     `🆔 **ID do Jogador:** \`${player.id}\`\n` +
                     `📝 **Feedback:**\n\`\`\`\n${feedback}\n\`\`\`\n\n` +
                     `📅 **Data:** \`${new Date().toLocaleString()}\``,
            username: 'Feedback Bot' // Opcional: Configura o nome do usuário do webhook
        })
    })
    .then(response => {
        if (response.ok) {
            console.log('Feedback enviado com sucesso.');
        } else {
            console.error('Erro ao enviar o feedback:', response.statusText);
        }
    })
    .catch(error => console.error('Erro ao enviar o feedback:', error));
}
// =============================================== BOT AUXILIAR FUNCTIONS
function welcomeMsg(player) {
    getLevel(player) >= Role.MOD ? admOnline(player) : room.sendAnnouncement(`${roomSimbol} Seja bem-vindo(a), @${player.name}!!`, player.id, welcomeMsgColor, Font.BOLD, HaxNotification.MENTION);
    room.sendAnnouncement(`➺ ${roomName}`, player.id, welcomeMsgColor, Font.BOLD, HaxNotification.MENTION);
}

function admOnline(player) {
    const role = getLevel(player);
    const key = Object.keys(Role).find(key => Role[key] === role);

    room.sendAnnouncement(`O ${key} ${player.name} chegou!`, null, Color.lightblue, Font.BOLD, HaxNotification.MENTION);
}

function warningPv(id, msg) {
    room.sendAnnouncement(msg, id, warningPvColor, Font.BOLD, HaxNotification.MENTION);
}

function warningAll(msg) {
    room.sendAnnouncement(`[📣] ${msg}`, null, warningAllColor, Font.BOLD, HaxNotification.MENTION);
}

function commandDoesntExist(id) {
    room.sendAnnouncement(`[❌] Esse comando não existe! Digite !help, para descobrir os comandos possíveis!`, id, Color.red, Font.BOLD, HaxNotification.MENTION);
}

function warningInvalidCommand(id, msg) {
    room.sendAnnouncement(`[❌] ${msg}`, id, warningInvalidCommandColor, Font.BOLD, HaxNotification.MENTION);
}

function warningOnlyRegisteredCmd(id) {
    room.sendAnnouncement(`[❌] Comando apenas para players registrados!`, id, warningInvalidCommandColor, Font.BOLD, HaxNotification.MENTION);
}

function warningCantUseCmd(id) {
    room.sendAnnouncement(`[❌] Você não tem acesso a esse comando!`, id, warningInvalidCommandColor, Font.BOLD, HaxNotification.MENTION);
}

// =============================================== ROOM AUXILIAR FUNCTIONS
function registerGoal(player) {
    if (!stats.players[player.id]) {
        stats.players[player.id] = { goals: 0, assists: 0, shots: 0, saves: 0 };
    }
    stats.players[player.id].goals += 1;
    stats.totalGoals += 1;
}

function registerAssist(player) {
    if (!stats.players[player.id]) {
        stats.players[player.id] = { goals: 0, assists: 0, shots: 0, saves: 0 };
    }
    stats.players[player.id].assists += 1;
    stats.totalAssists += 1;
}

// Função para registrar chutes
function registerShot(player) {
    if (!stats.players[player.id]) {
        stats.players[player.id] = { goals: 0, assists: 0, shots: 0, saves: 0 };
    }
    stats.players[player.id].shots += 1;
    stats.totalShots += 1;
}

// Função para registrar defesas
function registerSave(player) {
    if (!stats.players[player.id]) {
        stats.players[player.id] = { goals: 0, assists: 0, shots: 0, saves: 0 };
    }
    stats.players[player.id].saves += 1;
    stats.totalSaves += 1;
}

function excludeSpecific(id) {
    let index;
    playersHandler.find((value, pos) => {
        if(value[pHr.ID] == id) {
            return index = pos;
        }
    })

    playersHandler.splice(index, 1);
}

function checkBanned(player) {
    let pos = LSPlayerBANPOS(player.auth);
    if(pos == -1) return false;

    setTimeout(() => {
        room.kickPlayer(player.id, `Você está banido! Saiba mais em: ${discordLink}`, true);
    }, 75)
    return true;
}

function toTeam(player, team) {
    room.setPlayerTeam(player.id, team);
}

function getSpecList(player) {
    let specList = `${roomSimbol} Jogadores disponíveis: `;

    for (let i = 0; i < teamS.length; i++) {
        if (140 - specList.length < (`${teamS[i].name} [${(i + 1)}], `).length) {
            room.sendAnnouncement(specList, player.id, specListColor, Font.BOLD, HaxNotification.MENTION);
            specList = '... ';
        }
        specList += `${teamS[i].name} [${(i + 1)}], `;
    }

    specList = specList.substring(0, specList.length - 2);
    specList += '.';
    room.sendAnnouncement(specList, player.id, specListColor, Font.BOLD, HaxNotification.MENTION);
}

function checkPick(player, msg) {
    if (teamR.length != 0 && teamB.length != 0 && inChooseMode) {
        if ((player.id == teamR[0].id || player.id == teamB[0].id) && (!isNaN(msg) || ["top", "auto", "bot", "bottom", "random", "rand"].includes(msg))) {
            pickCmd(player, msg);
            return true;
        }
        return false;
    }
}

function processMessage(message, author) {
    if (containsOffensiveContent(message)) {
        sendNotification(message, author);
    }
}

function pickCmd(player, message) {
    let msg = message.split(/ +/);
    let pickTeam = teamB.length >= teamR.length ? Team.RED : Team.BLUE;
    let captain = pickTeam == Team.RED ? teamR[0] : teamB[0];

    if(player.id != captain.id) return;
    
    let topMsg = ["top", "auto"];
    let bottomMsg = ["bottom", "bot"];
    let randomMsg = ["rand", "random"];

    if(player.id == captain.id && topMsg.includes(msg[0].toLowerCase())) {
        toTeam(teamS[0], pickTeam);
        pickTeam == Team.RED ? redCaptainChoice = "top" : blueCaptainChoice = "top";
        pickMsg(player, "top");
        return false;
    }

    if(player.id == captain.id && bottomMsg.includes(msg[0].toLowerCase())) {
        toTeam(teamS[teamS.length - 1], pickTeam);
        pickTeam == Team.RED ? redCaptainChoice = "bottom" : blueCaptainChoice = "bottom";
        pickMsg(player, "bottom");
        return false;
    }
    
    if(player.id == captain.id && randomMsg.includes(msg[0].toLowerCase())) {
        toTeam(teamS[getRandomInt(teamS.length)], pickTeam);
        pickTeam == Team.RED ? redCaptainChoice = "random" : blueCaptainChoice = "random";
        pickMsg(player, "random");
        return false;
    }

    if(Number.isNaN(Number.parseInt(msg[0])) || Number.parseInt(msg[0]) > teamS.length) {
        warningPv(player.id, `[❌] Número inválido!`);
        return false;
    }

    toTeam(teamS[Number.parseInt(msg[0]) - 1], pickTeam);
    pickMsg(player, teamS[Number.parseInt(msg[0]) - 1].name);
    return false;
}

function pickMsg(player, choose) {
    clearTimeout(kickTimeout);
    clearTimeout(pickTimeout);

    return room.sendAnnouncement(`${player.name} escolheu ${choose}!`, null, player.team == Team.RED ? Color.red : Color.blue, Font.BOLD, HaxNotification.MENTION);
}

function handleChooseMode() {
    if(teamR.length == 0 || teamB.length == 0) {
        teamR.length == 0 ? toTeam(teamS[0], Team.RED) : toTeam(teamS[0], Team.BLUE);
    }

    if(Math.abs(teamR.length - teamB.length) == teamS.length) {
        chooseModeOff();

        let specs = teamS.length;
        if(teamR.length > teamB.length) {
            for(let i = 0; i < specs; i++) {
                setTimeout(() => toTeam(teamS[0], Team.BLUE), 5 * i);
            }
            return;
        }

        for(let i = 0; i < specs; i++) {
            setTimeout(() => toTeam(teamS[0], Team.RED), 5 * i);
        }
        return;
    }

    if(streak == 0 && room.getScores == null) {
        if(Math.abs(teamR.length - teamB.length) == 2) {
            teamR.length > teamB.length ? toTeam(teamR[teamR.length - 1], Team.SPEC) : toTeam(teamB[teamB.length - 1], Team.SPEC);
        }
        
        return chooseModeOff();
    }

    if((teamR.length == teamB.length && teamS.length < maxTeamSize - 1) || teamR.length == teamB.length && teamR.length == maxTeamSize) {
        return chooseModeOff();
    }

    capLeft ? getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]) : choosePlayer();
}

function handlePlayerLeft() {
    updateTeams();
    if(players.length == 0) {
        setDefaultUniforms();
        room.stopGame();
    }

    let scores = room.getScores();
    if(scores != null) {
        if(players.length >= maxTeamSize * 2 && scores.time >= (5/6) * timeLimit * 60 && teamR.length != teamB.length) {
            if(teamB.length > teamR.length && scores.blue - scores.red == 2) {
                warningAll(`RAGEQUIT por parte do RED! Partida encerrada.`);
                endGame(Team.BLUE);
                return;
            }
    
            if(teamR.length > teamB.length && scores.red - scores.blue == 2) {
                warningAll(`RAGEQUIT por parte do BLUE! Partida encerrada.`);
                endGame(Team.RED);
                return;
            }
            return;
        }
    }

    if(teamR.length != teamB.length && (teamR.length >= 2 || teamB.length >= 2) && teamS.length == 1) return topButton();
    if(inChooseMode) return handleChooseMode();
    balanceTeams();
}

function checkCaptainLeft(player) {
    if ((teamR.findIndex((red) => red.id == player.id) == 0 && inChooseMode && teamR.length <= teamB.length) ||
        (teamB.findIndex((blue) => blue.id == player.id) == 0 && inChooseMode && teamB.length < teamR.length))
    {
        choosePlayer();
        capLeft = true;
        setTimeout(() => capLeft = false, 10);
    }
}

function handleStop(byPlayer) {
    if(byPlayer != null && !endGameVariable) return;

    if(inChooseMode) {
        if(players.length == 2 * maxTeamSize) {
            chooseModeOff();
            resetButton()
    
            for(let i = 0; i < maxTeamSize; i++) {
                setTimeout(() => randomButton(), 400)
            }
            return;
        }
    
        if(lastWinner == Team.RED) {
            redWinButton();
        } else if(lastWinner == Team.BLUE) {
            blueWinButton();
        } else {
            resetButton();
        }

        setTimeout(() => topButton(), msToSecond(1));
        return;
    }

    if(players.length == 1) {
        if(teamR.length == 0) {
            if(teamB.length == 0) {
                toTeam(teamS[0], Team.RED);
                return;
            }
            toTeam(teamB[0], Team.RED);
        }

        setTimeout(() => room.startGame(), 200);
        return;
    }

    if(players.length == 2) {
        if(lastWinner == Team.BLUE) {
            swapButton();
        }
        setTimeout(() => room.startGame(), msToSecond(2));
        return;
    }

    if(players.length == 3) {
        if(lastWinner == Team.RED) {
            redWinButton();
        } else {
            blueWinButton();
        }

        setTimeout(() => topButton(), 200);
        setTimeout(() => room.startGame(), msToSecond(2));
        return;
    }

    if(players.length == 4) {
        resetButton();
        multipleRandom(2)
    
        setTimeout(() => room.startGame(), msToSecond(2));
        return;
    }

    if(players.length == 6) {
        resetButton();
        multipleRandom(3)
        setTimeout(() => room.startGame(), msToSecond(2));
        return;
    }

    if(players.length == 5 || players.length >= 2 * maxTeamSize + 1) {
        if(lastWinner == Team.RED) {
            redWinButton();
        } else {
            blueWinButton();
        }

        multipleFunctions(500, topButton, chooseModeOn);
        return;
    }
}

function getCommand(command) {
    if(commands.hasOwnProperty(command)) return command;
    for(const [key, value] of Object.entries(commands)) {
        for(let i = 0; i < value.aliases.length; i++) {
            if(value.aliases[i] == command) return key;
        }
    }
    return false;
}

function checkCommand(player, message) {
    let msg = message.split(/ +/);
    if(msg[0][0] == "!") {
        let command = getCommand(msg[0].toLowerCase().slice(1));
        if(command == false) {
            if(checkUni(player, msg[0].toLowerCase().slice(1))) return true;
            if(checkProvo(player, msg[0].toLowerCase().slice(1))) return true;

            commandDoesntExist(player.id);
            return true;
        }
        commands[command].function(player, message);
        return true;
    }
    return false;
}

function checkUni(player, uni) {
    if(!UNIFORMS.hasOwnProperty(uni)) return false;
    if(player.team == Team.SPEC || (player.team == Team.RED && teamR[0].id != player.id) || (player.team == Team.BLUE && teamB[0].id != player.id)) {
        warningInvalidCommand(player.id, "Você precisa ser capitão do time para usar esse comando!");
        return true;
    }

    uniCmd(player, uni);
    return true;
}

function uniCmd(player, uni) {
    if((player.team == Team.RED && uniRed == uni) || (player.team == Team.BLUE && uniBlue == uni)) return warningInvalidCommand(player.id, `Daltônico(a)? Seu time já está usando o !${uni}`);
    if((player.team == Team.RED && uniBlue == uni) || (player.team == Team.BLUE && uniRed == uni)) return warningInvalidCommand(player.id, `O ${player.team == Team.RED ? "BLUE" : "RED"} já está usando o !${uni}`);

    room.setTeamColors(player.team, UNIFORMS[uni][1], UNIFORMS[uni][2], UNIFORMS[uni][3]);
    warningAll(`O ${player.team == Team.RED ? "RED" : "BLUE"} vestiu o terno ${UNIFORMS[uni][0]}!`);
    player.team == Team.RED ? uniRed = uni : uniBlue = uni;
}

function checkProvo(player, provo) {
    if(!PROVOS.hasOwnProperty(provo)) return false;
    if(player.team == Team.SPEC){
        warningInvalidCommand(player.id, "Você precisa estar em um time para usar esse comando!");
        return true;
    }

    room.sendAnnouncement(`[🤣] ${player.name} provocou: ${PROVOS[provo]}`, null, provoColor, Font.BOLD, HaxNotification.MENTION);
    return true;
}

function checkMasterAuth(player, pos) {
    if(!MasterAuth.includes(player.auth) || LSGetRole(player) == null || LSGetRole(player) == Role.MASTER) return;
    
    playersHandler[pos][pHr.ROLE] = 6;
    
    let ls = getField(LS.PLAYERS);
    let ppos = LSPlayerPOS(player.auth);
    ls[ppos].role = Role.MASTER;
    ls[ppos].color = masterColor;

    setValue(LS.PLAYERS, ls);
    warningPv(player.id, `${roomSimbol} Você recebeu os privilégios MASTER!`);
}

function checkCanUseCmd(player, commandRole) {
    if(getLevel(player) >= commandRole) return true;
    return false;
}

function playerToHandler(player) {
    let pToHand = [player.name, player.id, player.auth, getIp(player.conn), 0, 0, false, false];
    playersHandler.length == 1 && playersHandler[0] == "" ? playersHandler[0] = pToHand : playersHandler.push(pToHand);
}

function showCommand(player, command) {
    let msgArr = [];
    let msg;
    for(const [key, value] of Object.entries(commands)) {
        if(key == command) {
            msgArr.push([key, value]);
        }
    }

    let aliases = !msgArr[0][1].aliases.length ? null : `${msgArr[0][1].aliases.join(", ")}`;

    msg = `Comando ${msgArr[0][0].toUpperCase()}:` + (aliases == null ? "\n" : `\nAbreviações: [${aliases}]\n`) + `➽ ${msgArr[0][1].description}`;
    room.sendAnnouncement(msg, player.id, specificHelpMsg, Font.BOLD, HaxNotification.MENTION);
}

function checkRegistered(player) {
    let ls = getField(LS.PLAYERS);
    let index = LSPlayerPOS(getPlayer(player)[pHr.AUTH]);

    if(index == -1) return false;
    return ls[index].pass != null ? true : false;
}

function unlogPlayer(player) {
    if(AFKSet.has(player.id)) AFKSet.delete(player.id);
    setLogged(player, false);
}

function setLogged(player, value) {
    let ls = getField(LS.PLAYERS);
    let index = LSPlayerPOS(getPlayer(player)[pHr.AUTH]);

    if(index == -1) return;

    ls[index].logged = value;
    setValue(LS.PLAYERS, ls);
}

function handleJumpTimeCD(player) {
    let ls = getField(LS.PLAYERS);
    let index = LSPlayerPOS(getPlayer(player)[pHr.AUTH]);

    if(index == -1) return;

    ls[index].jumpLineCD = jumpLineTLimit;
    JumpLineSet.add(getPlayer(player)[pHr.AUTH]);
    setValue(LS.PLAYERS, ls);
    jumpTimeCDHandler(player, index);
}

function jumpTimeCDHandler(player, index) {
    let ls;
    let interv;
    let auth = getPlayer(player)[pHr.AUTH];
    interv = setInterval(() => {
        ls = getField(LS.PLAYERS);
        ls[index].jumpLineCD -= 1;
        
        if(ls[index].jumpLineCD <= 0) {
            clearInterval(interv);
            ls[index].jumpLineCD = 0;
            JumpLineSet.delete(auth);

            if(getPlayer(player) != null) {
                warningPv(getPlayer(player)[pHr.ID], `${roomSimbol} Cooldown do !furarfila resetado!`);
            }
        }
        
        setValue(LS.PLAYERS, ls);
    }, msToMinute(1))
}

function muteCD(player, time) {
    let interv;
    let auth = getPlayer(player)[pHr.AUTH];
    let i = 0;
    interv = setInterval(() => {
        i++;
        if(i == time) {
            clearInterval(interv);
            if(MuteSet.has(auth)) {
                MuteSet.delete(auth);
                if(getPlayer(player) != null) {
                    warningAll(`As amordaças que prendiam a voz de ${player.name} foram retiradas. Não permita que calem a sua voz novamente!`);
                    setMute(player, false);
                }
            }

        }
    }, msToMinute(1));
}

function kickPlayerByName(name, reason, ban) {
    let p = room.getPlayerList().filter(p => p.name == name)[0];
    if(p == null) return;

    room.kickPlayer(p.id, !reason.length ? "" : reason, ban);
}

function checkMute(player) {
    if(MuteSet.has(getPlayer(player)[pHr.AUTH])) {
        warningPv(player.id, `[🔇] Os grandes do sistema calaram-te! Guarde o ódio para o momento certo e destrone-os!`);
        return true;
    }
    return false;
}

function unmuteName(player, playerName) {
    if(!MuteSet.size) return warningPv(player.id, "[👨‍⚖️] Não há nenhum player mutado!");
    let target = room.getPlayerList().filter(p => p.name == playerName)[0];

    if(target == null) return warningInvalidCommand(player.id, "Player não encontrado!");
    target = getPlayer(target);

    if(!MuteSet.has(target[pHr.AUTH])) return warningInvalidCommand(player.id, "Esse player não está mutado!");
    MuteSet.delete(target[pHr.AUTH]);

    warningAll(`${target[pHr.NAME]} foi liberto de suas amarras e já pode se expressar. A baixo os ditadores!!`);
}

function unmuteId(player, playerId) {
    if(!MuteSet.size) return warningPv(player.id, "[👨‍⚖️] Não há nenhum player mutado!");
    let target = room.getPlayerList().filter(p => p.id == playerId)[0];

    if(target == null) return warningInvalidCommand(player.id, "Player não encontrado!");
    target = getPlayer(target);

    if(!MuteSet.has(target[pHr.AUTH])) return warningInvalidCommand(player.id, "Esse player não está mutado!");
    MuteSet.delete(target[pHr.AUTH]);

    warningAll(`${target[pHr.NAME]} foi liberto de suas amarras e já pode se expressar. A baixo os ditadores!!`);
}

function unmuteAll(player) {
    if(!MuteSet.size) return warningPv(player.id, "[👨‍⚖️] Não há nenhum player mutado!");
    
    MuteSet = new Set();
    warningAll(`Players que foram oprimidos pela ditadura, já podem se expressar novamente! REVOLUÇÃO JÁ.`);
}

function setDefaultUniforms() {
    room.setTeamColors(Team.RED, UNIFORMS["red"][1], UNIFORMS["red"][2], UNIFORMS["red"][3]);
    uniRed = "red";

    room.setTeamColors(Team.BLUE, UNIFORMS["blue"][1], UNIFORMS["blue"][2], UNIFORMS["blue"][3]);
    uniBlue = "blue";
}

function checkTeamChat(player, message) {
    let msg = message.split(/ +/);
    if(msg[0] == "t") {
        teamChat(player, message);
        return true;
    }
    return false;
}

function teamChat(player, message) {
    let team = player.team == Team.RED ? teamR : teamB;

    team.forEach(p => {
        room.sendAnnouncement(`[${player.team == Team.RED ? "🐦" : player.team == Team.BLUE ? "🐬" : "💺"} - TEAM CHAT] ${player.name}: ${message.trim().slice(message[0].split(/ +/).length + 1)}`,
        p.id, (player.team == Team.RED ? Color.red : player.team == Team.BLUE ? Color.blue : Color.gray), Font.BOLD, HaxNotification.CHAT);
    })
}

function checkPv(player, message) {
    let msg = message.split(/ +/);
    if(msg[0][0] == msg[0][1] && msg[0][1] == "@") {
        pvChat(player, message);
        return true;
    }
    return false;
}

function pvChat(player, message) {
    let msg = message.split(/ +/)
    let target = room.getPlayerList().filter(p => p.name == msg[0].slice(2))[0];
    if(target == null) return warningPv(player.id, `[👤] Player "${msg[0].slice(2)}" não encontrado!`);
    if(target.name == player.name) return warningPv(player.id, `${roomSimbol} Conversando solo? Precisar de um amigo pode falar, tá?`);

    room.sendAnnouncement(`[PV com ${target.name}] ${player.name}: ${message.slice(msg[0].length + 1)}`, player.id, Color.darkaqua, Font.BOLD, HaxNotification.MENTION);
    room.sendAnnouncement(`[PV com ${player.name}] ${player.name}: ${message.slice(msg[0].length + 1)}`, target.id, Color.aqua, Font.BOLD, HaxNotification.MENTION);
}

function checkStaff(player, message) {
    if(getLevel(player) < Role.MOD) return false;

    let msg = message.split(/ +/);
    if(msg[0] == "@s" || msg[0] == "@S") {
        staffChat(player, message);
        return true;
    }
    return false;
}

function staffChat(player, message) {
    let msg = message.split(/ +/)

    room.getPlayerList().filter(p => getLevel(p) >= Role.MOD).forEach(p => {
        if(p.id == player.id) room.sendAnnouncement(`[STAFF CHAT] ${player.name}: ${message.slice(msg[0].length + 1)}`, player.id, Color.darkaqua, Font.BOLD, HaxNotification.CHAT);
        if(p.id != player.id) room.sendAnnouncement(`[STAFF CHAT] ${player.name}: ${message.slice(msg[0].length + 1)}`, p.id, Color.aqua, Font.BOLD, HaxNotification.CHAT);
    })
}

function rankedMsg(player, message) {
    let auth = getPlayer(player)[pHr.AUTH];
    let ls = getField(LS.PLAYERS);
    let index = LSPlayerPOS(auth);

    let announcement = "";

    if(index == -1) {
        room.sendAnnouncement(`❌ ${player.name}: ${message}`, null, Color.gray, Font.BOLD, );
        return;
    }

    let msgStats;
    let stats = ls[index].stats;
    let color = ls[index].color;
    let level = getLevel(player);

    if(ls[index].pass == null && message.length >= 51) return;
    if(ls[index].pass != null && message.length >= 71) return;
    if(level >= 1 && message.length >= 80) return;

    let role = "";
    if(level > 0) {
        switch(level) {
            case Role["VIP-CLASSIC"]:
                role = `[VIP]`;
                break;
            case Role["VIP-GOLD"]:
                role = `[💰 GOLD]`;
                break;
            case Role["VIP-PREMIUM"]:
                role = `[💎 PREMIUM]`;
                break;
            case Role.MOD:
                role = `[MOD]`;
                break;
            case Role.ADM:
                role = `[ADM]`;
                break;
            case Role.DEV:
                role = `[DEV]`;
                break;
            case Role.MASTER:
                role = `[👑]`;
                break;
        }

        msgStats = stats[Ss.GOALS] >= stats[Ss.GK_D] ? `[⚽: ${stats[Ss.GOALS]}]` : `[🧤: ${stats[Ss.GK_D]}]`;
        room.sendAnnouncement(`${msgStats} ${role} ${player.name}: ${message}`, null, color, Font.BOLD, HaxNotification.CHAT);
        return false;
    }

    let simbolGoal = '⚽';
    let statsGoals = stats[Ss.GOALS];

    if (stats[Ss.WIN] > 399) {
        announcement += "[🧙‍] - [" + simbolGoal + ": " + statsGoals + "]「ʟᴇɴᴅᴀ ᴅᴏ X1 DUPLO」 "
        chatColor = "0x48D1CC"
    } else if (stats[Ss.WIN] > 209) {
        announcement += "[🔮] - [" + simbolGoal + ": " + statsGoals + "] 「ᴅɪᴀᴍᴀɴᴛᴇ IV」 "
        chatColor = "0x8A2BE2"
    } else if (stats[Ss.WIN] > 109) {
        announcement += "[🔮] - [" + simbolGoal + ": " + statsGoals + "] 「ᴅɪᴀᴍᴀɴᴛᴇ III」 "
        chatColor = "0x8A2BE2"
    } else if (stats[Ss.WIN] > 89) {
        announcement += "[🔮] - [" + simbolGoal + ": " + statsGoals + "] 「ᴅɪᴀᴍᴀɴᴛᴇ II」 "
        chatColor = "0x8A2BE2"
    } else if (stats[Ss.WIN] > 69) {
        announcement += "[🔮] - [" + simbolGoal + ": " + statsGoals + "] 「ᴅɪᴀᴍᴀɴᴛᴇ I」 "
        chatColor = "0x8A2BE2"
    } else if (stats[Ss.WIN] > 59) {
        announcement += "[📱] - [" + simbolGoal + ": " + statsGoals + "] 「ᴘʟᴀᴛɪɴᴀ III」 "
        chatColor = "0xFA58DF"
    } else if (stats[Ss.WIN] > 44) {
        announcement += "[📱] - [" + simbolGoal + ": " + statsGoals + "] 「ᴘʟᴀᴛɪɴᴀ II」 "
        chatColor = "0x73EC59"
    } else if (stats[Ss.WIN] > 34) {
        announcement += "[📱] - [" + simbolGoal + ": " + statsGoals + "] 「ᴘʟᴀᴛɪɴᴀ I」 "
        chatColor = "0xFE2E2E"
    } else if (stats[Ss.WIN] > 30) {
        announcement += "[🥇] - [" + simbolGoal + ": " + statsGoals + "] 「ᴏᴜʀᴏ III」 "
        chatColor = "0x04B404"
    } else if (stats[Ss.WIN] > 27) {
        announcement += "[🥇] - [" + simbolGoal + ": " + statsGoals + "] 「ᴏᴜʀᴏ II」 "
        chatColor = "0x04B404"
    } else if (stats[Ss.WIN] > 24) {
        announcement += "[🥇] - [" + simbolGoal + ": " + statsGoals + "] 「ᴏᴜʀᴏ I」 "
        chatColor = "0x04B404"
    } else if (stats[Ss.WIN] > 20) {
        announcement += "[🥈] - [" + simbolGoal + ": " + statsGoals + "] 「ᴘʀᴀᴛᴀ III」 "
        chatColor = "0x2EFEF7"
    } else if (stats[Ss.WIN] > 17) {
        announcement += "[🥈] - [" + simbolGoal + ": " + statsGoals + "] 「ᴘʀᴀᴛᴀ II」 "
        chatColor = "0x2EFEF7"
    } else if (stats[Ss.WIN] > 14) {
        announcement += "[🥈] - [" + simbolGoal + ": " + statsGoals + "] 「ᴘʀᴀᴛᴀ I」 "
        chatColor = "0x2EFEF7"
    } else if (stats[Ss.WIN] > 10) {
        announcement += "[🥉] - [" + simbolGoal + ": " + statsGoals + "] 「ʙʀᴏɴᴢᴇ III」 "
        chatColor = "0xDDD4DB"
    } else if (stats[Ss.WIN] > 7) {
        announcement += "[🥉] - [" + simbolGoal + ": " + statsGoals + "] 「ʙʀᴏɴᴢᴇ II」 "
        chatColor = "0xDDD4DB"
    } else if (stats[Ss.WIN] > 4) {
        announcement += "[🥉] - [" + simbolGoal + ": " + statsGoals + "] 「ʙʀᴏɴᴢᴇ I」 "
        chatColor = "0xDDD4DB"
    } else {
        announcement += `[${roomSimbol}] - [${simbolGoal}: ${statsGoals}] `;
        chatColor = Color.gray;
    }
        
    room.sendAnnouncement(`${announcement}${player.name}: ${message}`, null, chatColor, Font.BOLD, HaxNotification.CHAT);
    return false;
}

function checkAutoLogin(player) {
    let ls = getField(LS.PLAYERS);
    let indexAuth = LSPlayerPOS(player.auth);
    let indexName = LSPlayerPOSName(player.name);
    if(indexName == -1) {
        return warningPv(player.id, `👤 Você possui uma outra conta aqui, @${ls[indexAuth].name}`);
    }
    
    if(ls[indexName].auth != player.auth) {
        if(ls[indexName].logged) {
            ls[indexName].logged = false;
            setValue(LS.PLAYERS, ls);
        }

        return askPass(player);
    }
    
    if(ls[indexName].name == player.name && ls[indexName].auth == player.auth && ls[indexName].pass != null) return autoLogPlayer(player);
}

function autoLogPlayer(player) {
    setLogged(player, true);
    setTimeout(() => warningAll(`${player.name} confirmou automaticamente!`), 200);
}

function askPass(player) {
    warningPv(player.id, `${roomSimbol} Por favor, faça login em sua conta nos próximos 10 segundos. Use !login senha`);
    passTimeout = setTimeout((p) => room.kickPlayer(p.id, "Não logou", false), msToSecond(10), player);
}

function updateCredentials(player, index) {
    clearTimeout(passTimeout);
    
    let ls = getField(LS.PLAYERS);
    
    ls[index].auth = getPlayer(player)[pHr.AUTH];
    ls[index].ip = getPlayer(player)[pHr.IP];
    setLevel(player, ls[index].role);
    
    setValue(LS.PLAYERS, ls);
    
    warningPv(player.id, `${roomSimbol} Suas credenciais de acesso foram atualizadas!`);
    setLogged(player, true);
    warningAll(`${player.name} confirmou!`);
}

function updateRecords() {
    let lsP = getField(LS.PLAYERS);
    let lsR = getField(LS.RECORDS);

    let games = getGamesRecord(lsP);
    let wins = getWinsRecord(lsP);
    let goals = getGoalsRecord(lsP);
    let assist = getAssistRecord(lsP);
    let cs = getCSRecord(lsP);

    lsR = [games, wins, goals, assist, cs];
    setValue(LS.RECORDS, lsR);
}

function getGamesRecord(lsP) {
    let arr = [];

    lsP.forEach(p => {
        arr.push([p.stats[Ss.GAMES], p.name]);
    })

    return arr.sort((a, b) => b[0] - a[0]).slice(0, maxRecords);
}
function getWinsRecord(lsP) {
    let arr = [];

    lsP.forEach(p => {
        arr.push([p.stats[Ss.WIN], p.name]);
    })

    return arr.sort((a, b) => b[0] - a[0]).slice(0, maxRecords);
}
function getGoalsRecord(lsP) {
    let arr = [];

    lsP.forEach(p => {
        arr.push([p.stats[Ss.GOALS], p.name]);
    })

    return arr.sort((a, b) => b[0] - a[0]).slice(0, maxRecords);
}
function getAssistRecord(lsP) {
    let arr = [];

    lsP.forEach(p => {
        arr.push([p.stats[Ss.ASSIST], p.name]);
    })

    return arr.sort((a, b) => b[0] - a[0]).slice(0, maxRecords);
}
function getCSRecord(lsP) {
    let arr = [];

    lsP.forEach(p => {
        arr.push([p.stats[Ss.GK_CS], p.name]);
    })

    return arr.sort((a, b) => b[0] - a[0]).slice(0, maxRecords);
}

function checkSequence(winner, red, blue, scores) {
    if(winner == Team.SPEC) {
        streak = 0;
        lastSequence = [];
        return;
    }

    let team = winner;

    if(winner == Team.BLUE) {
        streak = 0;
        lastSequence = blue;
    }

    streak++;

    let ls = getField(LS.SEQUENCE);
    if(streak >= ls[maxTeamSize]) {
        for(i = 0; i < maxTeamSize; i++) {
            ls[i] = team[i];
        }

        ls[maxTeamSize] = streak;
        setValue(LS.SEQUENCE, ls);
    }
}

function stopRec() {
    let rec = room.stopRecording();
    if(endGameVariable) gs++;
    sendRecording(rec);
}

function handleRec() {
    if(isRecording) {
        setTimeout(() => isRecording = false);
        stopRec();
    }
}

function unbanAll(player) {
    let ls = getField(LS.BANS);
    if(ls.length == 0) return warningPv(player.id, "👨‍⚖️ Não há nenhum player banido!");

    ls.length = 0;
    setValue(LS.BANS, ls);
    warningAll(`${player.name} perdoou todos os players banidos!`);
    sendUnbanAnnouncement(player, "all");
}

function banByName(player, message) {
    let msg = message;

    let fIndex = msg.indexOf("<");
    let lIndex = msg.lastIndexOf("<");

    if((fIndex == -1 || lIndex == -1) || fIndex == lIndex) return warningInvalidCommand(player.id, "Comando incompleto! Digite !help ban.");

    let parts = [
      msg.substring(fIndex + 1, lIndex),
      msg.substring(lIndex + 1)
    ].map(p => p.trim());

    let bannedName = parts[0];
    let reason = parts[1];

    let target = room.getPlayerList().filter(p => p.name == bannedName)[0];
    if(getLevel(target) >= getLevel(player)) return warningInvalidCommand(player.id, "Você não tem permissão para isso!");

    ban(player, bannedName, reason);
}

function ban(byPlayer, playerName, reason) {
    let pos = LSPlayerBANPOSName(playerName);
    if(pos != -1) return warningInvalidCommand(byPlayer.id, "Tenha calma moreno(a). Esse player já está banido! Digite !banlist.");
    
    let lsP = getField(LS.PLAYERS);
    let target = LSPlayerPOSName(playerName);

    if(target == -1) return warningInvalidCommand(byPlayer.id, "Player não encontrado!");
    let lsB = getField(LS.BANS);

    lsB.push(new Ban(lsP[target].auth, lsP[target].name, lsP[target].ip));
    setValue(LS.BANS, lsB);

    kickPlayerByName(lsP[target].name, `Você foi banido(a)! Saiba mais em: ${discordLink}`, true);
    warningAll(`${lsP[target].name} sentiu o peso do ban.`);
    sendBanAnnouncement(byPlayer, playerName, reason);
}

function checkXingo(player, message) {
    let msg = message.split(/ +/);
    let has = false;
    
    msg.forEach(p => {
        if(xingo.includes(p) || nazist.includes(p)) has = true;
    })

    if(!has) return false;

    let lsB = getField(LS.BANS);
    let lsP = getField(LS.PLAYERS);
    let target = LSPlayerPOSName(player.name);

    lsB.push(new Ban(lsP[target].auth, lsP[target].name, lsP[target].ip));
    setValue(LS.BANS, lsB);
    
    room.sendAnnouncement(`[🔨] O player ${player.name} falou merda`, null, Color.red, Font.BOLD, HaxNotification.MENTION);
    room.kickPlayer(player.id, "❌ O racismo não é tolerado nesta sala.", false);
    return true;
}

// =============================================== OTHER AUXILIAR FUNCTIONS
function msToSecond(ms) {
    return ms * 1_000;
}

function msToMinute(ms) {
    return ms * 60000;
}

function getIp(conn) {
    let ip = conn.match(/.{1,2}/g).map(function(v){
        return String.fromCharCode(parseInt(v, 16));
    }).join('');
    
    return ip;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function multipleRandom(quantity) {
    let time = 400;
    for(let i = 0; i < quantity; i++) {
        setTimeout(() => randomButton(), time);
        time += 150;
    }
}

function multipleFunctions(time, ...funcs) {
    funcs.forEach(f => {
        setTimeout(() => f(), time)
        time += 150;
    })
}

function getDatehoras(){
    let data = new Date(),
    dia=data.getDate().toString().padStart(2, '0'),
    mes=(data.getMonth()+1).toString().padStart(2, '0'),
    horas=data.getHours().toString().padStart(2, '0'),
    minutos=data.getMinutes().toString().padStart(2, '0');
    return `${dia}/${mes}, às ${horas}:${minutos}`;
}

// =============================================== DIVULGATION
setInterval(() => {
    room.sendAnnouncement("                                        ▒█▀▀▄ ▀█▀ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▄ ", null, 0x9250FD, Font.BOLD)
    room.sendAnnouncement("                                        ▒█░▒█ ▒█░ ░▀▀▀▄▄ ▒█░░░ ▒█░░▒█ ▒█▄▄▀ ▒█░▒█ ", null, 0x8466FD, Font.BOLD)
    room.sendAnnouncement("                                        ▒█▄▄▀ ▄█▄ ▒█▄▄▄█ ▒█▄▄█ ▒█▄▄▄█ ▒█░▒█ ▒█▄▄▀ ", null, 0x7B73FD, Font.BOLD);
    room.sendAnnouncement(`                                        💬 Discord Link: ➡ ${discordLink} ⬅`, null, 0xF6FF43, Font.BOLD);
}, msToMinute(15))

setInterval(() => {
	warningAll(`Utilize o Comando !gif e grave 15s`);
	warningAll(`e veja o clipe no nosso Discord`);
}, msToMinute(30));

setInterval(checkMuteStatus, 5 * 60 * 1000); // A cada 5 minutos

setInterval(notifyPlayersOfUpdate, 23 * 60 * 1000);

setInterval(() => {
    warningAll("Discursos de ódio, preconceito, mensagens antiéticas, ⛔");
    warningAll(`tudo pode ser denunciado e será avaliado pelo Discord.\n➡ ${discordLink}`);
}, msToMinute(20))

setInterval(() => {
    warningAll(`Digite !help, para saber os comandos`);
    warningAll(`Para mandar uma mensagem privada basta digitar @@nome mensagem!`);
    warningAll(`Você precisa estar registrado para usar alguns comandos como: !me e !mostrarme`);
}, msToMinute(25));