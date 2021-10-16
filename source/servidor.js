/* global ID_APP, ID_APP_CLIPP, MYSQL, PORT_SERVER_HTTP, IS_DESARROLLO, HOST_REDIS, PORT_REDIS, EMIT, IP_SERVIDOR_NODE, URI_MONGO, VERSION, __dirname, LLAVE_ECRIP, IMPUESTOS, MYSQL_DISCONNECT */
require('./VAR_COBROS.js');
require('./VAR_APP.js');
const expressip = require('express-ip');
global.VERSION = '0.0.1';
global.MOMENT = require('moment-timezone');

global.IS_DESARROLLO = (process.argv[2] ? (process.argv[2] === 'true') : false);
global.IP_SERVIDOR_NODE = (process.argv[3] ? process.argv[3] : '-.-.-.-');
global.PORT_SERVER_HTTP = (process.argv[4] ? parseInt(process.argv[4]) : -1);
global.PORT_REDIS = (process.argv[5] ? parseInt(process.argv[5]) : -1);
global.HOST_REDIS = (process.argv[6] ? process.argv[6] : '-.-.-.-');
let TOKEN_SIDER = (process.argv[7] ? process.argv[7] : 'LKJjhKJHBJHGjgVJHGHGvjhgvjhg67431Hj');

////if (TOKEN_SIDER === 'LKJjhKJHBJHGjgVJHGHGvjhgvjhg67431Hj')
////    throw "ERROR PARAMETROS ENVIADOS INCORRECTOS TOKEN_SIDER";
//
//if (LLAVE_ECRIP === 'LKJjhKJHBJHGjgVJHGHGvjhgvjhg67431Hj')
//    throw "ERROR PARAMETROS ENVIADOS INCORRECTOS LLAVE_ECRIP";

global._BD_;
global._BDH_;
ID_APP = 1;
ID_APP_CLIPP = 1;
require('./VAR_GLOBAL.js');

_BD_ = 'bancodt';
_BDH_ = 'clipphistoricok';

var administrador = require('./administrador_functions');
administrador.imprimirOneLogs('Param: ' + process.argv);
administrador.imprimirOneLogs('IS_DESARROLLO: ' + IS_DESARROLLO);
administrador.imprimirOneLogs('IP_SERVIDOR_NODE: ' + IP_SERVIDOR_NODE);
administrador.imprimirOneLogs('PORT_SERVER_HTTP: ' + PORT_SERVER_HTTP);
administrador.imprimirOneLogs('ID_APP: ' + ID_APP);
administrador.imprimirOneLogs('PORT_REDIS: ' + PORT_REDIS);
administrador.imprimirOneLogs('HOST_REDIS: ' + HOST_REDIS);

var http = require('http');

var configuraciones = require('./config.js');
//var monitoreador = require('./monitoreador');
var IO = require('socket.io-client');
//var configuraciones_mongo = require('./config_mongo.js');

configuraciones.on(function (activar) {
    if (activar) {
        administrador.imprimirOneLogs('DELETE BASURA...');
        setTimeout(function () {
            var express = require('express');
            var app = express();
            var bodyParser = require('body-parser');
            var serveStatic = require('serve-static');
            app.use(bodyParser.json({
                limit: "1mb"
            }));
//            app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
            app.use(bodyParser.urlencoded({
                limit: "1mb",
                extended: true,
                parameterLimit: 50
            }));
            app.use(bodyParser.json());
            app.use(require('./r_a_adicional'));
            app.use(require('./r_a_espacios'));
            app.use(require('./r_a_accesos'));
            app.use(require('./r_a_ticket'));
            app.use(require('./r_a_lugar'));
            app.use(require('./r_a_lugar_equipo'));
            app.use(require('./r_c_login'));
            app.use(require('./r_a_login'));
            app.get('/', function (req, res) {
                res.status(200).send({
                    EC: 'ECUADOR',
                    ENVIRONMENT: IS_DESARROLLO,
                    IDENTIFICADOR: ID_APP,
                    VERSION: VERSION,
                    BY: 'kradac',
                    PROJECT: 'Banco del Tiempo',
                    ARCHITECT: ''
                });
            });
            app.use(express.static(__dirname + '/public'));
            app.use(expressip().getIpInfoMiddleware);
            var http = require('http').Server(app);


            http.listen(PORT_SERVER_HTTP, function () {
                administrador.imprimirOneLogs('Server escuchando el puerto :' + PORT_SERVER_HTTP);
            });

            var compression = require('compression');
            app.use(compression());
            if (IS_DESARROLLO) {
                app.use('/api/bnl', serveStatic('../apidoc/rest/api', {
                    'index': ['index.html']
                }));
                app.use('/doc/api', serveStatic('../apidoc/api', {
                    'index': ['index.html']
                }));
                app.use('/doc/res', serveStatic('../apidoc/res', {
                    'index': ['index.html']
                }));
                app.use('/doc/sokect', serveStatic('../apidoc/sokect', {
                    'index': ['index.html']
                }));
            }

            app.use('/adicional', require('./r_a_adicional'));
            app.use('/oferta', require('./r_a_oferta'));
            app.use('/control', require('./r_a_accesos'));
            app.use('/ticket', require('./r_a_ticket'));
            app.use('/lugar', require('./r_a_lugar'));
            app.use('/lugar/equipo', require('./r_a_lugar_equipo'));
            app.use('/usuario', require('./r_c_login'));
            app.use('/admin', require('./r_a_login'));
            
//            global.EMIT = require('socket.io')(http, {'pingInterval': 50000000, 'pingTimeout': 50000000});
//
//            EMIT.on('connection', function (socket) {
//                console.log('Nnevo cliente conectado');
////                listener_autenticar.on(socket);
////                listener_server.on(socket);
//                //TERMINACION CONEXION CON SERVICDOR NODE JS
//                socket.on('disconnect', function () {
//                    console.log('cliente desconectado');
//                });
//
//            });


        }, 0); //Se retarla el levantado del servidor durante dos segundos para evitar bloqueos en el servidor.
    } else {
        administrador.imprimirErrLogs('EL SERVIDOR NO SE PUDO LEVANTAR POR PROBLEMAS CON LA BASE DE DATOS.');
        setTimeout(function () {
            throw "ERROR GRAVE...";
        }, 10000);
    }
});


var exec = require('child_process').exec,
        child;

setTimeout(function () {
    setInterval(function () {
        liberarMemoria();
    }, 1000 * 60 * 45);
}, 30000);

function liberarMemoria() {
    child = exec('sync && sudo sysctl -w vm.drop_caches=3', function (error, stdout) {
        administrador.imprimirOneLogs(stdout);
        if (error !== null)
            administrador.imprimirErrLogs('liberarMemoria error: ' + error);
    });
}



//function conectarSocketTaxi() {
//    //var http = 'https://ktaxifacilsegurorapido.kradac.com/';
//    var http = 'http://169.62.217.189:8080';
//    socket = require('socket.io-client')(http, {
//        'forceNew': false,
//        autoConnect: true
//    });
//
//    /* var listener_ktaxi = require('./listener_ktaxi');
//     listener_ktaxi.setSocket(socket); */
//
//    socket.on('connect', function () {
//        console.log("CONECTADO: conexión correcta a sistema KTAXI");
//    });
//
//
//}


//coneccion Mongo db
//administrador.imprimirOneLogs('on mongo');
//var configuraciones_mongo = require('./config_mongo.js');
//configuraciones_mongo.on(function (activar) {
//    if (!activar)
//        return console.log('Error en mongo MONGO');
//});