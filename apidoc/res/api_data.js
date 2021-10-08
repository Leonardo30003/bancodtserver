define({ "api": [
  {
    "type": "post",
    "url": "/a/adicional/editar",
    "title": "editar",
    "group": "A_ADICIONAL",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdicionalProducto",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSucursal",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "adicional",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "descripcion",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: 'Adicional actualizado correctamente.'}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, por favor intenta de nuevo más tarde.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_adicional.js",
    "groupTitle": "A_ADICIONAL",
    "name": "PostAAdicionalEditar"
  },
  {
    "type": "post",
    "url": "/a/adicional/habilitar",
    "title": "habilitar",
    "group": "A_ADICIONAL",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdicionalProducto",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "habilitado",
            "description": "<p>0:Deshabilita, 1:habilitado</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: 'Adicional actualizado correctamente.'}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, por favor intenta de nuevo más tarde.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_adicional.js",
    "groupTitle": "A_ADICIONAL",
    "name": "PostAAdicionalHabilitar"
  },
  {
    "type": "post",
    "url": "/a/adicional/listar-adicional",
    "title": "listar-adicional",
    "group": "A_ADICIONAL",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSucursal",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "desde",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "cuantos",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "parametro",
            "description": "<p>criterio de busqueda</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lS: [{}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, la sucursal no tiene productos.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_adicional.js",
    "groupTitle": "A_ADICIONAL",
    "name": "PostAAdicionalListarAdicional"
  },
  {
    "type": "post",
    "url": "/a/adicional/registrar",
    "title": "registrar",
    "group": "A_ADICIONAL",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSucursal",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "adicional",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "descripcion",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lS: [{}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, la sucursal no tiene productos.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_adicional.js",
    "groupTitle": "A_ADICIONAL",
    "name": "PostAAdicionalRegistrar"
  },
  {
    "type": "post",
    "url": "/a/biblioteca/busqueda",
    "title": "busqueda",
    "group": "A_BIBLIOTECA",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSucursal",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "desde",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "cuantos",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "parametro",
            "description": "<p>criterio de busqueda</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lS: [{}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, la sucursal no tiene productos.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_biblioteca.js",
    "groupTitle": "A_BIBLIOTECA",
    "name": "PostABibliotecaBusqueda"
  },
  {
    "type": "post",
    "url": "/a/biblioteca/get-productos-caracterstica",
    "title": "get-productos-caracterstica",
    "group": "A_BIBLIOTECA",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSucursal",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "desde",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "cuantos",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "parametro",
            "description": "<p>criterio de busqueda</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lS: [{}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, la sucursal no tiene productos.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_biblioteca.js",
    "groupTitle": "A_BIBLIOTECA",
    "name": "PostABibliotecaGetProductosCaracterstica"
  },
  {
    "type": "post",
    "url": "/a/biblioteca/producto-por-caracteristica",
    "title": "producto-por-caracteristica",
    "group": "A_BIBLIOTECA",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCiudad",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSector",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCaracteristica",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSucursal",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "desde",
            "description": "<p>desde que posicion se queire los datos,la primera posicon inicia en 0</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "cuantos",
            "description": "<p>cuantos datos que va a devolver el recurso</p> <p>Parametros adicionales</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: [{idProducto, idProductoEstado, fecha, costo, iva, precio, imgGrande, imgPequenia, descripcionCorta, descripccionLarga, terminos, link, titulo, subTitulo, restricciones, minimo, maximo, stock, fecha_inicio_venta, fecha_maxima_venta, isPromocion, descuento, minimo_stock, codigo, orden, tiempoMinPre, tiempoMaxPre}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, la sucursal no tiene productos.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_biblioteca.js",
    "groupTitle": "A_BIBLIOTECA",
    "name": "PostABibliotecaProductoPorCaracteristica"
  },
  {
    "type": "post",
    "url": "/a/caracteristica/caracteristica-producto",
    "title": "caracteristica-producto",
    "group": "A_CARACTERISTICAS",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idProducto",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: [{}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, el producto no tiene secciones.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_caracteristica.js",
    "groupTitle": "A_CARACTERISTICAS",
    "name": "PostACaracteristicaCaracteristicaProducto"
  },
  {
    "type": "post",
    "url": "/a/caracteristica/get-caracteristica-sucursal",
    "title": "get-caracteristica-sucursal",
    "group": "A_CARACTERISTICAS",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSucursal",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "parametro",
            "description": "<p>criterio de busqueda</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: [{idProducto, idSucursal, idProductoEstado, costo, iva, precio, imgGrande, imgPequenia, descripccionLarga, link, codigo, titulo, subTitulo, restricciones, minimo, maximo, stock, fecha_inicio_venta, fecha_maxima_venta, isPromocion, habilitado, idAdministradorRegistro, fechaRegistro, idAdministradorHabilito, idAdministradorDeshabilito, fechaHabilito, fechaDeshabilito, idAdministradorActualizo, fechaActualizo, orden, ranking, minimoStock, descuento}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, la sucursal no tiene productos.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_caracteristica.js",
    "groupTitle": "A_CARACTERISTICAS",
    "name": "PostACaracteristicaGetCaracteristicaSucursal"
  },
  {
    "type": "post",
    "url": "/a/caracteristica/get-caracteristicas",
    "title": "get-caracteristicas",
    "group": "A_CARACTERISTICAS",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tipo",
            "description": "<p>1:Sucursall, 2:producto</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "parametro",
            "description": "<p>criterio de busqueda</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: [{idProducto, idSucursal, idProductoEstado, costo, iva, precio, imgGrande, imgPequenia, descripccionLarga, link, codigo, titulo, subTitulo, restricciones, minimo, maximo, stock, fecha_inicio_venta, fecha_maxima_venta, isPromocion, habilitado, idAdministradorRegistro, fechaRegistro, idAdministradorHabilito, idAdministradorDeshabilito, fechaHabilito, fechaDeshabilito, idAdministradorActualizo, fechaActualizo, orden, ranking, minimoStock, descuento}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, la sucursal no tiene productos.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_caracteristica.js",
    "groupTitle": "A_CARACTERISTICAS",
    "name": "PostACaracteristicaGetCaracteristicas"
  },
  {
    "type": "post",
    "url": "/a/contacto/registrar",
    "title": "registrar",
    "group": "A_CONTACTO_DENUNCIA",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSucursal",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "nombres",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..20",
            "optional": false,
            "field": "telefono",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..10",
            "optional": false,
            "field": "codigoPais",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, idContactoEncomienda:1, m: 'Contacto registrado correctamente.'}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, por favor intenta de nuevo más tarde.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_contactos.js",
    "groupTitle": "A_CONTACTO_DENUNCIA",
    "name": "PostAContactoRegistrar"
  },
  {
    "type": "post",
    "url": "/a/direccion/obtener-barrio",
    "title": "obtener-barrio",
    "group": "A_DIRECCION",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "dobuble",
            "optional": false,
            "field": "latitud",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "dobuble",
            "optional": false,
            "field": "longitud",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCiudad",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSucursal",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, idContactoEncomienda:1, idDireccion:1, m: 'La dirección se ha registrado en tu lista de lugares.'}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'No se pudo registrar la dirección, intenta nuevamente.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_direccion.js",
    "groupTitle": "A_DIRECCION",
    "name": "PostADireccionObtenerBarrio"
  },
  {
    "type": "post",
    "url": "/a/direccion/registrar-direccion",
    "title": "registrar-direccion",
    "group": "A_DIRECCION",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..250",
            "optional": false,
            "field": "direccion",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..250",
            "optional": false,
            "field": "referencia",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "dobuble",
            "optional": false,
            "field": "latitud",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "dobuble",
            "optional": false,
            "field": "longitud",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCiudad",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSucursal",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, idContactoEncomienda:1, idDireccion:1, m: 'La dirección se ha registrado en tu lista de lugares.'}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'No se pudo registrar la dirección, intenta nuevamente.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_direccion.js",
    "groupTitle": "A_DIRECCION",
    "name": "PostADireccionRegistrarDireccion"
  },
  {
    "type": "post",
    "url": "/a/disponibilidad/eliminar",
    "title": "eliminar",
    "group": "A_DISPONIBILIDAD",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idAdministrdorDisponibilidad",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: 'Contraseña editada corrrectamente'}</p>"
          }
        ],
        "Alterno 1": [
          {
            "group": "Alterno 1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Ups lo sentimos, por favor intenta de nuevo más tarde.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Alterno_1",
          "content": "Flujo alterno de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_disponibilidad.js",
    "groupTitle": "A_DISPONIBILIDAD",
    "name": "PostADisponibilidadEliminar"
  },
  {
    "type": "post",
    "url": "/a/disponibilidad/registrar",
    "title": "registrar",
    "group": "A_DISPONIBILIDAD",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dia",
            "description": "<p>2019-04-23</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desde",
            "description": "<p>08:00:00</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hasta",
            "description": "<p>18:00:00</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: 'Contraseña editada corrrectamente'}</p>"
          }
        ],
        "Alterno 1": [
          {
            "group": "Alterno 1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Ups lo sentimos, por favor intenta de nuevo más tarde.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Alterno_1",
          "content": "Flujo alterno de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_disponibilidad.js",
    "groupTitle": "A_DISPONIBILIDAD",
    "name": "PostADisponibilidadRegistrar"
  },
  {
    "type": "post",
    "url": "/a/disponibilidad/ver",
    "title": "ver",
    "group": "A_DISPONIBILIDAD",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dia",
            "description": "<p>2019-04-23</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: 'Contraseña editada corrrectamente'}</p>"
          }
        ],
        "Alterno 1": [
          {
            "group": "Alterno 1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Ups lo sentimos, por favor intenta de nuevo más tarde.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Alterno_1",
          "content": "Flujo alterno de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_disponibilidad.js",
    "groupTitle": "A_DISPONIBILIDAD",
    "name": "PostADisponibilidadVer"
  },
  {
    "type": "post",
    "url": "/a/encomienda/get-encomienda",
    "title": "get-encomienda",
    "group": "A_ENCOMIENDA",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSucursal",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lS: [{idEncomienda, idUsuario, idAplicativo, idPlataforma, idSucursal, idDireccionOrigen, idDireccionDestino, idContacto, idEstado, idTipoTransporte, costoEnvio, costoPaquete, distancia, tiempo, calles, referencia, observacion, fechaRegistro, titulo, estado, titulo, descripcion, color}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Aún no has realizado ninguna encomienda, ¡Inicia ahora!'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_encomienda.js",
    "groupTitle": "A_ENCOMIENDA",
    "name": "PostAEncomiendaGetEncomienda"
  },
  {
    "type": "post",
    "url": "/a/encomienda/get-encomienda-historial",
    "title": "get-encomienda-historial",
    "group": "A_ENCOMIENDA",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSucursal",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha",
            "description": "<p>(AAAA-MM-DD)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lS: [{idEncomienda, idUsuario, idAplicativo, idPlataforma, idSucursal, idDireccionOrigen, idDireccionDestino, idContacto, idEstado, idTipoTransporte, costoEnvio, costoPaquete, distancia, tiempo, calles, referencia, observacion, fechaRegistro, titulo, estado, titulo, descripcion, color}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Aún no has realizado ninguna encomienda, ¡Inicia ahora!'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_encomienda.js",
    "groupTitle": "A_ENCOMIENDA",
    "name": "PostAEncomiendaGetEncomiendaHistorial"
  },
  {
    "type": "post",
    "url": "/a/encomienda/info-calificacion",
    "title": "info-calificacion",
    "group": "A_ENCOMIENDA",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lS: [{valorCalificacion, titulo, subtitulo, icon, comentario, tags, titulo1, titulo2}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'No se pudo obtener la elementos de calificacion'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_encomienda.js",
    "groupTitle": "A_ENCOMIENDA",
    "name": "PostAEncomiendaInfoCalificacion"
  },
  {
    "type": "post",
    "url": "/a/feedback/enviar-contacto",
    "title": "enviar contacto",
    "group": "A_FEEDBACK",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": "<p>solo envia el has</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idMotivoContacto",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contacto",
            "description": "<p>maximo 800 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "latitud",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "longitud",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "gps",
            "description": "<p>0=&gt;gps indefinido 1=&gt;gps activo 2=&gt;gps inactivo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": "<p>imei del dispositivo que envia el contacto maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>version sistema operativo maximo 20 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version app maximo 20 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tipo",
            "description": "<p>1=&gt;WEB 2=&gt;APP 3=&gt;ADMINISTRADOR</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>1=&gt;iOS 2=&gt;ANDROID 3=&gt;WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>maximo 60 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>maximo 60 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idCiudad",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: 'Contacto enviado correctamente, agradecemos tú tiempo estamos para mejorar'}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Ups lo sentimos, por favor intenta de nuevo más tarde.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_feedback.js",
    "groupTitle": "A_FEEDBACK",
    "name": "PostAFeedbackEnviarContacto"
  },
  {
    "type": "post",
    "url": "/a/feedback/listar-motivos-contacto",
    "title": "lista motivos del contacto",
    "group": "A_FEEDBACK",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lMC: [{idMotivoContacto, motivo, descripcion}]}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_feedback.js",
    "groupTitle": "A_FEEDBACK",
    "name": "PostAFeedbackListarMotivosContacto"
  },
  {
    "type": "post",
    "url": "/a/identificativo/identificativo-tipo",
    "title": "identificativo-tipo",
    "group": "A_IDENTIFICATIVO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tipo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lI: [{}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, no tiene identificativos.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_identificativo.js",
    "groupTitle": "A_IDENTIFICATIVO",
    "name": "PostAIdentificativoIdentificativoTipo"
  },
  {
    "type": "post",
    "url": "/a/identificativo/seccionProducto-tipo",
    "title": "seccionProducto-tipo",
    "group": "A_IDENTIFICATIVO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lI: [{}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, no tiene identificativos.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_identificativo.js",
    "groupTitle": "A_IDENTIFICATIVO",
    "name": "PostAIdentificativoSeccionproductoTipo"
  },
  {
    "type": "post",
    "url": "/a/login/autenticar",
    "title": "autenticar",
    "group": "A_LOGIN",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "usuario",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contrasenia",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token de firebase</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, u: {u.idAdministrador, u.nombres, u.apellidos, u.celular, u.cedula, u.correo, u.imagen}}</p>"
          }
        ],
        "Alterno 1": [
          {
            "group": "Alterno 1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Usuario y/o contraseñas incorrectas!'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Alterno_1",
          "content": "Flujo alterno de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_login.js",
    "groupTitle": "A_LOGIN",
    "name": "PostALoginAutenticar"
  },
  {
    "type": "post",
    "url": "/a/login/cambiar-ambiente",
    "title": "cambiar-ambiente",
    "group": "A_LOGIN",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAmbiente",
            "description": "<p>1:Desarollo, 2:Produccion al cual se queire cambiar</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "contrasenia",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: 'Ingreso a ambiente de desarrollo'}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: 'No autorizado'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_login.js",
    "groupTitle": "A_LOGIN",
    "name": "PostALoginCambiarAmbiente"
  },
  {
    "type": "post",
    "url": "/a/login/cerrar-session",
    "title": "cerrar session",
    "group": "A_LOGIN",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: 'Session cerrada correctamente.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_login.js",
    "groupTitle": "A_LOGIN",
    "name": "PostALoginCerrarSession"
  },
  {
    "type": "post",
    "url": "/a/login/recuperar-contrasenia",
    "title": "recuperar contraseña",
    "group": "A_LOGIN",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cliente",
            "description": "<p>sera el correo electronico o el celular con el que se registro</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: 'Te acabamos de enviar una contraseña temporal al correo de registro, por favor revisa tu bandeja de entrada'}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: 'Te acabamos de enviar una contraseña temporal al correo de registro, por favor revisa tu bandeja de entrada'}</p>"
          }
        ],
        "Execpcional_2": [
          {
            "group": "Execpcional_2",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, pero los datos enviados no están en nuestros registros'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos: Si cambiarClave = 2 se mostrara pantalla de cambio de clave caso contrario se ingresara normalmente.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_2:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_login.js",
    "groupTitle": "A_LOGIN",
    "name": "PostALoginRecuperarContrasenia"
  },
  {
    "type": "post",
    "url": "/a/funcionalidad/get-funcionalidad",
    "title": "get-funcionalidad",
    "group": "A_PEDIDO",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lS: [{}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, la sucursal no tiene productos.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_funcionalidad.js",
    "groupTitle": "A_PEDIDO",
    "name": "PostAFuncionalidadGetFuncionalidad"
  },
  {
    "type": "post",
    "url": "/a/pedido/get-pedidos-finalizados",
    "title": "get-pedidos-finalizados",
    "group": "A_PEDIDO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSucursal",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fecha",
            "description": "<p>AAAA-MM-DD</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "desde",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "cuantos",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lS: [{}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Por ahora no tienes compras finalizadas.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_pedido.js",
    "groupTitle": "A_PEDIDO",
    "name": "PostAPedidoGetPedidosFinalizados"
  },
  {
    "type": "post",
    "url": "/a/perfil/actualizar-token",
    "title": "actualizar token",
    "group": "A_PERFIL",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token de firebase</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: 'Contraseña editada corrrectamente'}</p>"
          }
        ],
        "Alterno 1": [
          {
            "group": "Alterno 1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Ups lo sentimos, por favor intenta de nuevo más tarde.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Alterno_1",
          "content": "Flujo alterno de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_perfil.js",
    "groupTitle": "A_PERFIL",
    "name": "PostAPerfilActualizarToken"
  },
  {
    "type": "post",
    "url": "/a/perfil/cambiar-contrasenia",
    "title": "cambiar contrasenia",
    "group": "A_PERFIL",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contrasenia",
            "description": "<p>se envia la nueva contraseña con un MD5</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: 'Contraseña editada corrrectamente'}</p>"
          }
        ],
        "Alterno 1": [
          {
            "group": "Alterno 1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Ups lo sentimos, por favor intenta de nuevo más tarde.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Alterno_1",
          "content": "Flujo alterno de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_perfil.js",
    "groupTitle": "A_PERFIL",
    "name": "PostAPerfilCambiarContrasenia"
  },
  {
    "type": "post",
    "url": "/a/perfil/recuperar-contrasenia",
    "title": "recuperar contrasenia",
    "group": "A_PERFIL",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "usuario",
            "description": "<p>usuario del adminsitrador que desea se recupere la contraseña</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: 'Contraseña editada corrrectamente'}</p>"
          }
        ],
        "Alterno 1": [
          {
            "group": "Alterno 1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos pero el adminsitrador que proporcionaste no esta en nuestros registros'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Alterno_1",
          "content": "Flujo alterno de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_perfil.js",
    "groupTitle": "A_PERFIL",
    "name": "PostAPerfilRecuperarContrasenia"
  },
  {
    "type": "post",
    "url": "/a/producto/agregar-caracteristica",
    "title": "agregar-caracteristica",
    "group": "A_PRODUCTO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idProducto",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCaracteristica",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: &quot;Registro realizado correctamente&quot;}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, por favor intenta de nuevo más tarde'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_producto.js",
    "groupTitle": "A_PRODUCTO",
    "name": "PostAProductoAgregarCaracteristica"
  },
  {
    "type": "post",
    "url": "/a/producto/agregar-seccionProducto",
    "title": "agregar-seccionProducto",
    "group": "A_PRODUCTO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "seccionProducto",
            "description": "<p>[{idProducto,idSeccionProducto,orden, habilitado}]</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: &quot;Registro realizado correctamente&quot;}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, por favor intenta de nuevo más tarde'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_producto.js",
    "groupTitle": "A_PRODUCTO",
    "name": "PostAProductoAgregarSeccionproducto"
  },
  {
    "type": "post",
    "url": "/a/producto/deshabilitar",
    "title": "deshabilitar los productos",
    "group": "A_PRODUCTO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idProducto",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "habilitar",
            "description": "<p>1 habilitado, 0 deshabilitado</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: &quot;Actulizacion realizado correctamente&quot;}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, por favor intenta de nuevo más tarde'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_producto.js",
    "groupTitle": "A_PRODUCTO",
    "name": "PostAProductoDeshabilitar"
  },
  {
    "type": "post",
    "url": "/a/producto/deshabilitar-caracteristica",
    "title": "deshabilitar-caracteristica",
    "group": "A_PRODUCTO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCaracteristicaProducto",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "habilitar",
            "description": "<p>1 habilitado, 0 deshabilitado</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: &quot;Actulizacion realizado correctamente&quot;}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, por favor intenta de nuevo más tarde'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_producto.js",
    "groupTitle": "A_PRODUCTO",
    "name": "PostAProductoDeshabilitarCaracteristica"
  },
  {
    "type": "post",
    "url": "/a/producto/deshabilitar-seccionProduto",
    "title": "deshabilitar-seccionProduto",
    "group": "A_PRODUCTO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSeccionProductoProducto",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "habilitar",
            "description": "<p>1 habilitado, 0 deshabilitado</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: &quot;Actulizacion realizado correctamente&quot;}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, por favor intenta de nuevo más tarde'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_producto.js",
    "groupTitle": "A_PRODUCTO",
    "name": "PostAProductoDeshabilitarSeccionproduto"
  },
  {
    "type": "post",
    "url": "/a/producto/editar",
    "title": "editar",
    "group": "A_PRODUCTO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idProducto",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idProductoEstado",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "costo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "iva",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "precio",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": false,
            "field": "imgGrande",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": false,
            "field": "imgPequenia",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..500",
            "optional": false,
            "field": "descripccionLarga",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": true,
            "field": "link",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..45",
            "optional": true,
            "field": "codigo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..45",
            "optional": false,
            "field": "titulo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..45",
            "optional": false,
            "field": "subTitulo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..500",
            "optional": true,
            "field": "restricciones",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "size": "..1",
            "optional": false,
            "field": "minimo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "size": "..1",
            "optional": false,
            "field": "maximo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "stock",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Datetime",
            "optional": false,
            "field": "fechaInicioVenta",
            "description": "<p>AAAA-MM-DD Hh:mm:ss</p>"
          },
          {
            "group": "Parameter",
            "type": "Datetime",
            "optional": false,
            "field": "fechaMaximaVenta",
            "description": "<p>AAAA-MM-DD Hh:mm:ss</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "isPromocion",
            "description": "<p>0:Sin promocion, 1:Con promocion</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministradorRegistro",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "orden",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "minimoStock",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "descuento",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "isSubproducto",
            "description": "<p>si va hacer un sub producto 1:NO, 2:SI</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tiempoMinPre",
            "description": "<p>tiempo en minutos</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tiempoMaxPre",
            "description": "<p>tiempo en minutos</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: &quot;Producto actualizado correctamente.&quot;}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, por favor intenta de nuevo más tarde'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_producto.js",
    "groupTitle": "A_PRODUCTO",
    "name": "PostAProductoEditar"
  },
  {
    "type": "post",
    "url": "/a/producto/get-subproductos/",
    "title": "get-subproductos",
    "group": "A_PRODUCTO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idProducto",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "desde",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "cuantos",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lS: [{}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, no existen dubproductos'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_producto.js",
    "groupTitle": "A_PRODUCTO",
    "name": "PostAProductoGetSubproductos"
  },
  {
    "type": "post",
    "url": "/a/producto/habilitar-subProductos",
    "title": "habilitar-subProductos",
    "group": "A_PRODUCTO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idProductoSubproducto",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idProducto",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "habilitado",
            "description": "<p>0:Deshabilita, 1:habilitado,  si se quiere deshabilitar un subproducto</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: &quot;Actuliado realizado correctamente&quot;}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, por favor intenta de nuevo más tarde'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_producto.js",
    "groupTitle": "A_PRODUCTO",
    "name": "PostAProductoHabilitarSubproductos"
  },
  {
    "type": "post",
    "url": "/a/producto/lista-sub-producto",
    "title": "lista-sub-producto",
    "group": "A_PRODUCTO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSucursal",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idProducto",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "parametro",
            "description": "<p>criterio de busqueda</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: [{idProducto, idSucursal, idProductoEstado, costo, iva, precio, imgGrande, imgPequenia, descripccionLarga, link, codigo, titulo, subTitulo, restricciones, minimo, maximo, stock, fecha_inicio_venta, fecha_maxima_venta, isPromocion, habilitado, idAdministradorRegistro, fechaRegistro, idAdministradorHabilito, idAdministradorDeshabilito, fechaHabilito, fechaDeshabilito, idAdministradorActualizo, fechaActualizo, orden, ranking, minimoStock, descuento}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, la sucursal no tiene productos.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_producto.js",
    "groupTitle": "A_PRODUCTO",
    "name": "PostAProductoListaSubProducto"
  },
  {
    "type": "post",
    "url": "/A/producto/modificarStock",
    "title": "subir o disminuir el sctock para los produco",
    "group": "A_PRODUCTO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idProducto",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "stock",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: &quot;Actuliado realizado correctamente&quot;}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, por favor intenta de nuevo más tarde'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_producto.js",
    "groupTitle": "A_PRODUCTO",
    "name": "PostAProductoModificarstock"
  },
  {
    "type": "post",
    "url": "/a/producto/producto-sucursal",
    "title": "producto-sucursal",
    "group": "A_PRODUCTO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSucursal",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "parametro",
            "description": "<p>criterio de busqueda</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: [{idProducto, idSucursal, idProductoEstado, costo, iva, precio, imgGrande, imgPequenia, descripccionLarga, link, codigo, titulo, subTitulo, restricciones, minimo, maximo, stock, fecha_inicio_venta, fecha_maxima_venta, isPromocion, habilitado, idAdministradorRegistro, fechaRegistro, idAdministradorHabilito, idAdministradorDeshabilito, fechaHabilito, fechaDeshabilito, idAdministradorActualizo, fechaActualizo, orden, ranking, minimoStock, descuento}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, la sucursal no tiene productos.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_producto.js",
    "groupTitle": "A_PRODUCTO",
    "name": "PostAProductoProductoSucursal"
  },
  {
    "type": "post",
    "url": "/a/producto/registrar",
    "title": "registrar",
    "group": "A_PRODUCTO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSucursal",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idProductoEstado",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "costo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "iva",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "precio",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": false,
            "field": "imgGrande",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": false,
            "field": "imgPequenia",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..500",
            "optional": false,
            "field": "descripccionLarga",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": true,
            "field": "link",
            "description": "<p>link profundo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..45",
            "optional": true,
            "field": "codigo",
            "description": "<p>codigo del producto</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..45",
            "optional": false,
            "field": "titulo",
            "description": "<p>titulo del producto</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..45",
            "optional": false,
            "field": "subTitulo",
            "description": "<p>subtitulo del producto</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..500",
            "optional": true,
            "field": "restricciones",
            "description": "<p>restricciones del producto, alcohol solo para mayores de edad</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "size": "..1",
            "optional": false,
            "field": "minimo",
            "description": "<p>cantidad minima del pructos que se van a vender</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "size": "..1",
            "optional": false,
            "field": "maximo",
            "description": "<p>cantidad maxima del pructos que se van a vender</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "stock",
            "description": "<p>catitdad de producto que dispone el local</p>"
          },
          {
            "group": "Parameter",
            "type": "Datetime",
            "optional": false,
            "field": "fechaInicioVenta",
            "description": "<p>AAAA-MM-DD Hh:mm:ss fecha desde cuanto esta disponible el producto</p>"
          },
          {
            "group": "Parameter",
            "type": "Datetime",
            "optional": false,
            "field": "fechaMaximaVenta",
            "description": "<p>AAAA-MM-DD Hh:mm:ss fecha hasta cuanto esta disponible el producto</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "isPromocion",
            "description": "<p>0:Sin promocion, 1:Con promocion</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "orden",
            "description": "<p>peso del producto</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "minimoStock",
            "description": "<p>cantidad minima de stock para notificar</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "descuento",
            "description": "<p>porcentaje de descuento</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "isSubproducto",
            "description": "<p>si va hacer un sub producto 1:NO, 2:SI</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tiempoMinPre",
            "description": "<p>tiempo en minutos</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "idBiblioteca",
            "description": "<p>si el producto se hereda de una biblioteca</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": true,
            "field": "caracteristicas",
            "description": "<p>[{idCaracteristica:1, habilitado:1},{idCaracteristica:2, habilitado:0}]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: &quot;Registro realizado correctamente&quot;}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, por favor intenta de nuevo más tarde'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_producto.js",
    "groupTitle": "A_PRODUCTO",
    "name": "PostAProductoRegistrar"
  },
  {
    "type": "post",
    "url": "/a/producto/registrar-subProductos",
    "title": "registrar-subProductos",
    "group": "A_PRODUCTO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idProducto",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSubProducto",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: &quot;Actuliado realizado correctamente&quot;}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, por favor intenta de nuevo más tarde'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_producto.js",
    "groupTitle": "A_PRODUCTO",
    "name": "PostAProductoRegistrarSubproductos"
  },
  {
    "type": "post",
    "url": "/a/rastreo/cercanos",
    "title": "cercanos",
    "group": "A_RASTREO",
    "version": "2.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pl",
            "description": "<p>1 WEB 2 ANDROID 3 iOS</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "fechaInicio",
            "description": "<p>YYYY-MM-DD HH:mm:ss</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "fechaFin",
            "description": "<p>YYYY-MM-DD HH:mm:ss</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idEquipo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "horario",
            "description": "<p>Si se esta en zona horaria -5 enviar 5 si se esta en zona horaria +2 enviar -2 si es cero se enviara cero en otras palabras la zona horaria se multiplica por menos uno</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "columnas",
            "description": "<p>Ejemplo 'p fD v r gm gs in pr'</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "latitud",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "longitud",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "metros",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, rastreo: [{}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'No existen datos de los parametros enviados'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_rastreo.js",
    "groupTitle": "A_RASTREO",
    "name": "PostARastreoCercanos"
  },
  {
    "type": "post",
    "url": "/a/rastreo/cercanos",
    "title": "cercanos",
    "group": "A_RASTREO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "fechaInicio",
            "description": "<p>YYYY-MM-DD HH:mm:ss</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "fechaFin",
            "description": "<p>YYYY-MM-DD HH:mm:ss</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "latitud",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "longitud",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "metros",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "horario",
            "description": "<p>Si se esta en zona horaria -5 enviar 5 si se esta en zona horaria +2 enviar -2 si es cero se enviara cero en otras palabras la zona horaria se multiplica por menos uno</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, rastreo: [{}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'No existen datos de los parametros enviados'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_rastreo.js",
    "groupTitle": "A_RASTREO",
    "name": "PostARastreoCercanos"
  },
  {
    "type": "post",
    "url": "/a/rastreo/consultar",
    "title": "consultar",
    "group": "A_RASTREO",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pl",
            "description": "<p>1 WEB 2 ANDROID 3 iOS</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "fechaInicio",
            "description": "<p>YYYY-MM-DD HH:mm:ss</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "fechaFin",
            "description": "<p>YYYY-MM-DD HH:mm:ss</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idEquipo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "horario",
            "description": "<p>Si se esta en zona horaria -5 enviar 5 si se esta en zona horaria +2 enviar -2 si es cero se enviara cero en otras palabras la zona horaria se multiplica por menos uno</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pr",
            "description": "<p>NONE en caso de desear obtener tramas con todos los eventos caso contrario se pasara los que coicidad, se considera cadena vacia como parametro de consutla</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "columnas",
            "description": "<p>Ejemplo 'p fD v r gm gs in pr'</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, rastreo: [{}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'No existen datos de los parametros enviados'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_rastreo.js",
    "groupTitle": "A_RASTREO",
    "name": "PostARastreoConsultar"
  },
  {
    "type": "post",
    "url": "/a/rastreo/consultar",
    "title": "consultar",
    "group": "A_RASTREO",
    "version": "2.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pl",
            "description": "<p>1 WEB 2 ANDROID 3 iOS</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "fechaInicio",
            "description": "<p>YYYY-MM-DD HH:mm:ss</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "fechaFin",
            "description": "<p>YYYY-MM-DD HH:mm:ss</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idEquipo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "horario",
            "description": "<p>Si se esta en zona horaria -5 enviar 5 si se esta en zona horaria +2 enviar -2 si es cero se enviara cero en otras palabras la zona horaria se multiplica por menos uno</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pr",
            "description": "<p>NONE en caso de desear obtener tramas con todos los eventos caso contrario se pasara los que coicidad, se considera cadena vacia como parametro de consutla</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, rastreo: [{}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'No existen datos de los parametros enviados'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_rastreo.js",
    "groupTitle": "A_RASTREO",
    "name": "PostARastreoConsultar"
  },
  {
    "type": "post",
    "url": "/a/rastreo/consultar",
    "title": "consultar",
    "group": "A_RASTREO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "anio",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "mes",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "dia",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idEquipo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desde",
            "description": "<p>'12:00:00'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hasta",
            "description": "<p>'20:00:00'</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "horario",
            "description": "<p>Si se esta en zona horaria -5 enviar 5 si se esta en zona horaria +2 enviar -2 si es cero se enviara cero en otras palabras la zona horaria se multiplica por menos uno</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, rastreo: [{}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'No existen datos de los parametros enviados'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_rastreo.js",
    "groupTitle": "A_RASTREO",
    "name": "PostARastreoConsultar"
  },
  {
    "type": "post",
    "url": "/a/rastreo/estadistica",
    "title": "estadistica",
    "group": "A_RASTREO",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pl",
            "description": "<p>1 WEB 2 ANDROID 3 iOS</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "fechaInicio",
            "description": "<p>YYYY-MM-DD HH:mm:ss</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "fechaFin",
            "description": "<p>YYYY-MM-DD HH:mm:ss</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "horario",
            "description": "<p>Si se esta en zona horaria -5 enviar 5 si se esta en zona horaria +2 enviar -2 si es cero se enviara cero en otras palabras la zona horaria se multiplica por menos uno</p>"
          },
          {
            "group": "Parameter",
            "type": "Sting",
            "optional": false,
            "field": "equipos",
            "description": "<p>4,5,6</p>"
          },
          {
            "group": "Parameter",
            "type": "Sting",
            "optional": false,
            "field": "placas",
            "description": "<p>LBH988,LBH889,LHG777</p>"
          },
          {
            "group": "Parameter",
            "type": "Sting",
            "optional": false,
            "field": "excesos",
            "description": "<p>50,59;60,79;80,999-50,59;60,79;80,999-50,59;60,79;80,999</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'No existen datos de los parametros enviados'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_rastreo.js",
    "groupTitle": "A_RASTREO",
    "name": "PostARastreoEstadistica"
  },
  {
    "type": "post",
    "url": "/a/rastreo/estadistica",
    "title": "estadistica",
    "group": "A_RASTREO",
    "version": "2.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pl",
            "description": "<p>1 WEB 2 ANDROID 3 iOS</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "fechaInicio",
            "description": "<p>YYYY-MM-DD HH:mm:ss</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "fechaFin",
            "description": "<p>YYYY-MM-DD HH:mm:ss</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "horario",
            "description": "<p>Si se esta en zona horaria -5 enviar 5 si se esta en zona horaria +2 enviar -2 si es cero se enviara cero en otras palabras la zona horaria se multiplica por menos uno</p>"
          },
          {
            "group": "Parameter",
            "type": "Sting",
            "optional": false,
            "field": "equipos",
            "description": "<p>4,5,6</p>"
          },
          {
            "group": "Parameter",
            "type": "Sting",
            "optional": false,
            "field": "placas",
            "description": "<p>LBH988,LBH889,LHG777</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'No existen datos de los parametros enviados'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_rastreo.js",
    "groupTitle": "A_RASTREO",
    "name": "PostARastreoEstadistica"
  },
  {
    "type": "post",
    "url": "/a/rastreo/estadistica",
    "title": "estadistica",
    "group": "A_RASTREO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "anio",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "mes",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "dia",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Sting",
            "optional": false,
            "field": "equipos",
            "description": "<p>4,5,6</p>"
          },
          {
            "group": "Parameter",
            "type": "Sting",
            "optional": false,
            "field": "placas",
            "description": "<p>LBH988,LBH889,LHG777</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desde",
            "description": "<p>'12:00:00'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hasta",
            "description": "<p>'20:00:00'</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "horario",
            "description": "<p>Si se esta en zona horaria -5 enviar 5 si se esta en zona horaria +2 enviar -2 si es cero se enviara cero en otras palabras la zona horaria se multiplica por menos uno</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'No existen datos de los parametros enviados'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_rastreo.js",
    "groupTitle": "A_RASTREO",
    "name": "PostARastreoEstadistica"
  },
  {
    "type": "post",
    "url": "/a/rastreo/estado-encendico-apagado",
    "title": "estado encendido apagado",
    "group": "A_RASTREO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pl",
            "description": "<p>1 WEB 2 ANDROID 3 iOS</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "fechaInicio",
            "description": "<p>YYYY-MM-DD HH:mm:ss</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "fechaFin",
            "description": "<p>YYYY-MM-DD HH:mm:ss</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "horario",
            "description": "<p>Si se esta en zona horaria -5 enviar 5 si se esta en zona horaria +2 enviar -2 si es cero se enviara cero en otras palabras la zona horaria se multiplica por menos uno</p>"
          },
          {
            "group": "Parameter",
            "type": "Sting",
            "optional": false,
            "field": "equipos",
            "description": "<p>4,5,6</p>"
          },
          {
            "group": "Parameter",
            "type": "Sting",
            "optional": false,
            "field": "placas",
            "description": "<p>LBH988,LBH889,LHG777</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'No existen datos de los parametros enviados'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_rastreo.js",
    "groupTitle": "A_RASTREO",
    "name": "PostARastreoEstadoEncendicoApagado"
  },
  {
    "type": "post",
    "url": "/a/rastreo/kilometros-recorridos",
    "title": "kilometros recorridos",
    "group": "A_RASTREO",
    "version": "2.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pl",
            "description": "<p>1 WEB 2 ANDROID 3 iOS</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "fechaInicio",
            "description": "<p>YYYY-MM-DD HH:mm:ss</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "fechaFin",
            "description": "<p>YYYY-MM-DD HH:mm:ss</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "horario",
            "description": "<p>Si se esta en zona horaria -5 enviar 5 si se esta en zona horaria +2 enviar -2 si es cero se enviara cero en otras palabras la zona horaria se multiplica por menos uno</p>"
          },
          {
            "group": "Parameter",
            "type": "Sting",
            "optional": false,
            "field": "equipos",
            "description": "<p>4,5,6</p>"
          },
          {
            "group": "Parameter",
            "type": "Sting",
            "optional": false,
            "field": "placas",
            "description": "<p>LBH988,LBH889,LHG777</p>"
          },
          {
            "group": "Parameter",
            "type": "Sting",
            "optional": false,
            "field": "consumos",
            "description": "<p>0.075,0.077</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'No existen datos de los parametros enviados'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_rastreo.js",
    "groupTitle": "A_RASTREO",
    "name": "PostARastreoKilometrosRecorridos"
  },
  {
    "type": "post",
    "url": "/a/rastreo/kilometros-recorridos",
    "title": "kilometros recorridos",
    "group": "A_RASTREO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "anio",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "mes",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "dia",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "equipos",
            "description": "<p>1,2,3</p>"
          },
          {
            "group": "Parameter",
            "type": "Sting",
            "optional": false,
            "field": "placas",
            "description": "<p>LBH988,LBH889,LHG777</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desde",
            "description": "<p>'12:00:00'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hasta",
            "description": "<p>'20:00:00'</p>"
          },
          {
            "group": "Parameter",
            "type": "Sting",
            "optional": false,
            "field": "consumos",
            "description": "<p>0.075,0.077</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "horario",
            "description": "<p>Si se esta en zona horaria -5 enviar 5 si se esta en zona horaria +2 enviar -2 si es cero se enviara cero en otras palabras la zona horaria se multiplica por menos uno</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, km: 0.000, gl: 0.00}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'No existen datos de los parametros enviados'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_rastreo.js",
    "groupTitle": "A_RASTREO",
    "name": "PostARastreoKilometrosRecorridos"
  },
  {
    "type": "post",
    "url": "/a/saldo/consultar/",
    "title": "consultar saldo",
    "group": "A_SALDO",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lS: [{sr.razon, s.saldo}]}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve has error.",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_saldo.js",
    "groupTitle": "A_SALDO",
    "name": "PostASaldoConsultar"
  },
  {
    "type": "post",
    "url": "/a/saldo/consultar-transacciones/",
    "title": "consultar transacciones",
    "group": "A_SALDO",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "anio",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "mes",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lT: [{t.saldo, t.fecha_registro, te.idTransaccionEstado AS iE, te.estado, tt.idTransaccionTipo AS iT, tt.tipo, sr.idSaldoRazon AS iR, sr.razon}]}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve has error.",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_saldo.js",
    "groupTitle": "A_SALDO",
    "name": "PostASaldoConsultarTransacciones"
  },
  {
    "type": "post",
    "url": "/a/seccionProducto/adicionalProducto-habilitar",
    "title": "adicionalProducto-habilitar",
    "group": "A_SECCIONPRODUCTO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdicionalProducto",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "habilitado",
            "description": "<p>0:Deshabilita, 1:habilitado</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lS: [{}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, la sucursal no tiene productos.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_seccionProducto.js",
    "groupTitle": "A_SECCIONPRODUCTO",
    "name": "PostASeccionproductoAdicionalproductoHabilitar"
  },
  {
    "type": "post",
    "url": "/a/seccionProducto/agregar-adicionalProducto",
    "title": "agregar-adicionalProducto",
    "group": "A_SECCIONPRODUCTO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSeccionProducto",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "identificativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "adicionalProducto",
            "description": "<p>[{idAdicionalProducto:1, orden:1, habilitado:1},{idAdicionalProducto:1, orden:1, habilitado:1}]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lS: [{}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, la sucursal no tiene productos.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_seccionProducto.js",
    "groupTitle": "A_SECCIONPRODUCTO",
    "name": "PostASeccionproductoAgregarAdicionalproducto"
  },
  {
    "type": "post",
    "url": "/a/seccionProducto/editar",
    "title": "editar",
    "group": "A_SECCIONPRODUCTO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSeccionProducto",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSucursal",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "seccion",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "descripcion",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "isObligatorio",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "isCostoAdicional",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "cantidadMaxima",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tipoSeleccion",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "identificativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lS: [{}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, la sucursal no tiene productos.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_seccionProducto.js",
    "groupTitle": "A_SECCIONPRODUCTO",
    "name": "PostASeccionproductoEditar"
  },
  {
    "type": "post",
    "url": "/a/seccionProducto/habilitar",
    "title": "habilitar",
    "group": "A_SECCIONPRODUCTO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSeccionProducto",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "habilitado",
            "description": "<p>0:Deshabilita, 1:habilitado</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lS: [{}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, la sucursal no tiene productos.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_seccionProducto.js",
    "groupTitle": "A_SECCIONPRODUCTO",
    "name": "PostASeccionproductoHabilitar"
  },
  {
    "type": "post",
    "url": "/a/seccionProducto/listar",
    "title": "listar",
    "group": "A_SECCIONPRODUCTO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSucursal",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "desde",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "cuantos",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "parametro",
            "description": "<p>criterio de busqueda</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lS: [{}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, la sucursal no tiene productos.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_seccionProducto.js",
    "groupTitle": "A_SECCIONPRODUCTO",
    "name": "PostASeccionproductoListar"
  },
  {
    "type": "post",
    "url": "/a/seccionProducto/listar-adicionalProducto",
    "title": "listar-adicionalProducto",
    "group": "A_SECCIONPRODUCTO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSeccionProducto",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "identificativo",
            "description": "<p>1:Producto, 2: Adicional</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: [{}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, el producto no tiene secciones.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_seccionProducto.js",
    "groupTitle": "A_SECCIONPRODUCTO",
    "name": "PostASeccionproductoListarAdicionalproducto"
  },
  {
    "type": "post",
    "url": "/a/seccionProducto/registrar",
    "title": "registrar",
    "group": "A_SECCIONPRODUCTO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSucursal",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "seccion",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "descripcion",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "isObligatorio",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "isCostoAdicional",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "cantidadMaxima",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tipoSeleccion",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "identificativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lS: [{}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, la sucursal no tiene productos.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_seccionProducto.js",
    "groupTitle": "A_SECCIONPRODUCTO",
    "name": "PostASeccionproductoRegistrar"
  },
  {
    "type": "post",
    "url": "/a/seccionProducto/seccionProducto-producto",
    "title": "seccionProducto-producto",
    "group": "A_SECCIONPRODUCTO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idProducto",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: [{}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, el producto no tiene secciones.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_seccionProducto.js",
    "groupTitle": "A_SECCIONPRODUCTO",
    "name": "PostASeccionproductoSeccionproductoProducto"
  },
  {
    "type": "post",
    "url": "/a/ventaoff/busqueda",
    "title": "busqueda",
    "group": "A_VENTAOFF",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSucursal",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "desde",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "cuantos",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "parametro",
            "description": "<p>criterio de busqueda</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lP: [{}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, la sucursal no tiene productos.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_ventaoff.js",
    "groupTitle": "A_VENTAOFF",
    "name": "PostAVentaoffBusqueda"
  },
  {
    "type": "post",
    "url": "/a/ventaoff/get-productos-caracterstica",
    "title": "get-productos-caracterstica",
    "group": "A_VENTAOFF",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSucursal",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lC: [{}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, la sucursal no tiene productos.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_ventaoff.js",
    "groupTitle": "A_VENTAOFF",
    "name": "PostAVentaoffGetProductosCaracterstica"
  },
  {
    "type": "post",
    "url": "/a/ventaoff/producto-por-caracteristica",
    "title": "producto-por-caracteristica",
    "group": "A_VENTAOFF",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCaracteristica",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSucursal",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "desde",
            "description": "<p>desde que posicion se queire los datos,la primera posicon inicia en 0</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "cuantos",
            "description": "<p>cuantos datos que va a devolver el recurso</p> <p>Parametros adicionales</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: [{idProducto, idProductoEstado, fecha, costo, iva, precio, imgGrande, imgPequenia, descripcionCorta, descripccionLarga, terminos, link, titulo, subTitulo, restricciones, minimo, maximo, stock, fecha_inicio_venta, fecha_maxima_venta, isPromocion, descuento, minimo_stock, codigo, orden, tiempoMinPre, tiempoMaxPre}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, la sucursal no tiene productos.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_ventaoff.js",
    "groupTitle": "A_VENTAOFF",
    "name": "PostAVentaoffProductoPorCaracteristica"
  },
  {
    "type": "post",
    "url": "/a/ventaoff/registro-venta",
    "title": "registro-venta",
    "group": "A_VENTAOFF",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSucursal",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "desde",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "cuantos",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "parametro",
            "description": "<p>criterio de busqueda</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lP: [{}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, la sucursal no tiene productos.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_ventaoff.js",
    "groupTitle": "A_VENTAOFF",
    "name": "PostAVentaoffRegistroVenta"
  },
  {
    "type": "post",
    "url": "/a/administrador/actuaizar",
    "title": "actuaizar",
    "group": "C_ADMINISTRADOR",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..125",
            "optional": false,
            "field": "nombres",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..125",
            "optional": false,
            "field": "apellidos",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..125",
            "optional": false,
            "field": "correo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..12",
            "optional": false,
            "field": "celular",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..11",
            "optional": false,
            "field": "cedula",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: 'Admiistrador actualizado correctamente.'}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, por favor intenta de nuevo más tarde.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_administrador.js",
    "groupTitle": "C_ADMINISTRADOR",
    "name": "PostAAdministradorActuaizar"
  },
  {
    "type": "post",
    "url": "/c/archivo/foto-perfil/subir",
    "title": "subir foto perfil",
    "group": "C_ARCHIVO",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "file",
            "optional": false,
            "field": "img",
            "description": "<p>foto de perfil a subir</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: '¡Foto almacenada correctamente!', url: '/c/img/foto-perfil/'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo ideal",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "res/r_c_archivo.js",
    "groupTitle": "C_ARCHIVO",
    "name": "PostCArchivoFotoPerfilSubir"
  },
  {
    "type": "post",
    "url": "/c/boleto/comprados",
    "title": "listar boletos comprados",
    "group": "C_BOLETO",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lR: [{r.idReservaEstadoCliente, re.estado,  r.fecha, r.hora, r.tiempo, r.observacion, lc.alias, lc.referencia}]}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_boleto.js",
    "groupTitle": "C_BOLETO",
    "name": "PostCBoletoComprados"
  },
  {
    "type": "post",
    "url": "/c/boleto/comprar-con-saldo",
    "title": "comprar con saldo",
    "group": "C_BOLETO",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSaldoRazon",
            "description": "<p>1: ID_SALDO_RAZON_CLIPP, 2: ID_SALDO_RAZON_FERIA</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lR: [{r.idReservaEstadoCliente, re.estado,  r.fecha, r.hora, r.tiempo, r.observacion, lc.alias, lc.referencia}]}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_boleto.js",
    "groupTitle": "C_BOLETO",
    "name": "PostCBoletoComprarConSaldo"
  },
  {
    "type": "post",
    "url": "/c/boleto/consultar-cliente",
    "title": "consultar cliente",
    "group": "C_BOLETO",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "celular",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lR: [{r.idReservaEstadoCliente, re.estado,  r.fecha, r.hora, r.tiempo, r.observacion, lc.alias, lc.referencia}]}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_boleto.js",
    "groupTitle": "C_BOLETO",
    "name": "PostCBoletoConsultarCliente"
  },
  {
    "type": "post",
    "url": "/c/boleto/disponibles",
    "title": "listar boletos disponibles",
    "group": "C_BOLETO",
    "version": "3.1.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idServicioSectorCategoria",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "fecha",
            "description": "<p>2019-08-14</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lR: [{r.idReservaEstadoCliente, re.estado,  r.fecha, r.hora, r.tiempo, r.observacion, lc.alias, lc.referencia}]}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_boleto.js",
    "groupTitle": "C_BOLETO",
    "name": "PostCBoletoDisponibles"
  },
  {
    "type": "post",
    "url": "/c/boleto/disponibles",
    "title": "listar boletos disponibles",
    "group": "C_BOLETO",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idServicioSectorCategoria",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lR: [{r.idReservaEstadoCliente, re.estado,  r.fecha, r.hora, r.tiempo, r.observacion, lc.alias, lc.referencia}]}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_boleto.js",
    "groupTitle": "C_BOLETO",
    "name": "PostCBoletoDisponibles"
  },
  {
    "type": "post",
    "url": "/c/boleto/sincronizar-ingreso",
    "title": "sincronizar ingreso",
    "group": "C_BOLETO",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idIngreso",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idBoletoCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "ingresos",
            "description": "<p>Numero de pases que ingresaron en esa transaccion</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "boletos",
            "description": "<p>Numero de pases que le quedan a ese boleto</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "meta",
            "description": "<p>{imei: 'imei', fecha_ingreso: '2019-08-07 15:59:55', boleto: 'EL BOLETO QUE SE LEYO EN EL QR'}</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lR: [{r.idReservaEstadoCliente, re.estado,  r.fecha, r.hora, r.tiempo, r.observacion, lc.alias, lc.referencia}]}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_boleto.js",
    "groupTitle": "C_BOLETO",
    "name": "PostCBoletoSincronizarIngreso"
  },
  {
    "type": "post",
    "url": "/c/boleto/transferir-boleto",
    "title": "transferir boleto",
    "group": "C_BOLETO",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idBoletoCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idClienteAtransaferir",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pasesAtrasferir",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lR: [{r.idReservaEstadoCliente, re.estado,  r.fecha, r.hora, r.tiempo, r.observacion, lc.alias, lc.referencia}]}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_boleto.js",
    "groupTitle": "C_BOLETO",
    "name": "PostCBoletoTransferirBoleto"
  },
  {
    "type": "post",
    "url": "/c/boleto/transferir-saldo",
    "title": "transferir saldo",
    "group": "C_BOLETO",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idBoletoCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idClienteAtransaferir",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "saldoAtrasferir",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lR: [{r.idReservaEstadoCliente, re.estado,  r.fecha, r.hora, r.tiempo, r.observacion, lc.alias, lc.referencia}]}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_boleto.js",
    "groupTitle": "C_BOLETO",
    "name": "PostCBoletoTransferirSaldo"
  },
  {
    "type": "post",
    "url": "/c/categoria/listar-botones",
    "title": "listar-botones",
    "group": "C_CATEGORIA",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idServicioSectorCategoria",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lRc: [{e.idServicioSectorCategoria, e.categoria, e.callePrincipal, e.calleSecundaria, e.contacto, e.correo, e.color, e.latitud, e.longitud}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Zona no cubierta por el sistema de CLIPP'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_categoria.js",
    "groupTitle": "C_CATEGORIA",
    "name": "PostCCategoriaListarBotones"
  },
  {
    "type": "post",
    "url": "/c/ciudad/lista-validaciones",
    "title": "lista-validaciones",
    "group": "C_CIUDAD",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCiudad",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tipo",
            "description": "<p>1: Ciudad, 2 Categorias</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lH: [{idValidacionDatosCliente, idLugar, idTipoValidacion, tipo}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos no hay validaciones.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_cliente.js",
    "groupTitle": "C_CIUDAD",
    "name": "PostCCiudadListaValidaciones"
  },
  {
    "type": "post",
    "url": "/c/ciudad/lista-validaciones",
    "title": "lista-validaciones",
    "group": "C_CIUDAD",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCiudad",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tipo",
            "description": "<p>1: Ciudad, 2 Categorias</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lH: [{idValidacionDatosCliente, idLugar, idTipoValidacion, tipo}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos no hay validaciones.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_ciudad.js",
    "groupTitle": "C_CIUDAD",
    "name": "PostCCiudadListaValidaciones"
  },
  {
    "type": "post",
    "url": "/c/codigoqr/crear-codigo",
    "title": "crear-codigo",
    "group": "C_CODIGOQR",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "domain",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "android",
            "description": "<p>androidPackageName</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ios",
            "description": "<p>iosBundleId</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "allowedValues": [
              "1",
              "2"
            ],
            "optional": false,
            "field": "idTipoQR",
            "description": "<p>1:Ktaxi, 2:Clipp</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "idCliente",
            "description": "<p>cuando se asocia link a un cliente</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Json que se va a guardar la data del codigoQR</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "titulo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "descripcion",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSistema",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCiudad",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "urlImagen",
            "description": "<p>URL de la imagen que va en el short link</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lR: [{r.idReservaEstadoCliente, re.estado,  r.fecha, r.hora, r.tiempo, r.observacion, lc.alias, lc.referencia}]}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_codigoqr.js",
    "groupTitle": "C_CODIGOQR",
    "name": "PostCCodigoqrCrearCodigo"
  },
  {
    "type": "post",
    "url": "/c/codigoqr/obtener-data-sistema",
    "title": "obtener-data-sistema",
    "group": "C_CODIGOQR",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "identificador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSistema",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCodigoQRTipo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "latitud",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "longitud",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, c: {data, idCodigoQRTipo, shortLink, dentroZona}}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_codigoqr.js",
    "groupTitle": "C_CODIGOQR",
    "name": "PostCCodigoqrObtenerDataSistema"
  },
  {
    "type": "post",
    "url": "/c/configuracionAplicativo/configuracion-aplicativo",
    "title": "configuracion-aplicativo",
    "group": "C_CONFIGURACION",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCiudad",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lC: [{idCiudad, idAplicativo, nombre, tipo, valor}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos no hay configuraciones.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_configuracionAplicativo.js",
    "groupTitle": "C_CONFIGURACION",
    "name": "PostCConfiguracionaplicativoConfiguracionAplicativo"
  },
  {
    "type": "post",
    "url": "/a/contactodDenuncia/listar",
    "title": "listar",
    "group": "C_CONTACTO_DENUNCIA",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSucursal",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lC: [{idContactoSucursal, idSucursal, nombres, telefono, idAplicativo, idPlataforma, idUsuario, fechaRegistro}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, No hay contactos registrados.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_contactos.js",
    "groupTitle": "C_CONTACTO_DENUNCIA",
    "name": "PostAContactoddenunciaListar"
  },
  {
    "type": "post",
    "url": "/c/coopmego/obtener-ubicacion",
    "title": "obtener-ubicacion obtener-ubicacion",
    "group": "C_COOMEGO",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "ipPublica",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lR: [{r.idReservaEstadoCliente, re.estado,  r.fecha, r.hora, r.tiempo, r.observacion, lc.alias, lc.referencia}]}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_coopmego.js",
    "groupTitle": "C_COOMEGO",
    "name": "PostCCoopmegoObtenerUbicacion"
  },
  {
    "type": "post",
    "url": "/c/cooperativa/listar",
    "title": "listar",
    "group": "C_COOPERATIVA",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "parametro",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "allowedValues": [
              "1",
              "2",
              "3",
              "4",
              "5"
            ],
            "optional": true,
            "field": "idAplicativo",
            "description": "<p>1:CLIPP,2:Puntualidad,3:CLIPP PARNER,4:SCOIT, 5:web cliente</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCiudad",
            "description": "<p>se debe evniar el idCiudad para que filtren las cooperativas</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "idCooperativa",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "limit",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lC: [{idCooperativa, cooperativa, telefono, acronimo}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos la cooperativa no existe.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_cooperativa.js",
    "groupTitle": "C_COOPERATIVA",
    "name": "PostCCooperativaListar"
  },
  {
    "type": "post",
    "url": "/c/cooperativa/listarCiudad",
    "title": "listarCiudad",
    "group": "C_COOPERATIVA",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "parametro",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "allowedValues": [
              "1",
              "2",
              "3",
              "4",
              "5"
            ],
            "optional": false,
            "field": "idAplicativo",
            "description": "<p>1:CLIPP,2:Puntualidad,3:CLIPP PARNER,4:SCOIT, 5:web cliente</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "idCiudad",
            "description": "<p>identificador de la ciudad</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "limit",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lC: [{idCiudad, ciudad, color}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos la ciudad no existe.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_cooperativa.js",
    "groupTitle": "C_COOPERATIVA",
    "name": "PostCCooperativaListarciudad"
  },
  {
    "type": "post",
    "url": "/c/denuncia/registrar",
    "title": "registrar",
    "group": "C_DENUNCIA",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": "<p>idCiente cuando es de clipp cliente</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "idClienteClipp",
            "description": "<p>identificardo del cliente de clipp</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "idConductor",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idVehiculo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fecha",
            "description": "<p>AAAA-MM-DD</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hora",
            "description": "<p>HH:mm:ss</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..200",
            "optional": false,
            "field": "motivo",
            "description": "<p>Motivo de la denucnia</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "allowedValues": [
              "1",
              "2",
              "3",
              "4",
              "5"
            ],
            "optional": false,
            "field": "idAplicativo",
            "description": "<p>1:CLIPP,2:Puntualidad,3:CLIPP PARNER,4:SCOIT, 5:ficha tecnica</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: 'Registro realizado correctamente.', idCliente:idCliente}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, por favor intenta de nuevo más tarde.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_denuncia.js",
    "groupTitle": "C_DENUNCIA",
    "name": "PostCDenunciaRegistrar"
  },
  {
    "type": "post",
    "url": "/c/denuncia/registrar-cliente",
    "title": "registrar-cliente",
    "group": "C_DENUNCIA",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "allowedValues": [
              "1",
              "2",
              "3"
            ],
            "optional": false,
            "field": "tipoDocumento",
            "description": "<p>1: Cedula, 2: Pasaporte</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "idClienteClipp",
            "description": "<p>idCiente cuando es de clipp cliente</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..25",
            "optional": false,
            "field": "documento",
            "description": "<p>cedula, pasaporte o ruc</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..120",
            "optional": false,
            "field": "nombres",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..120",
            "optional": false,
            "field": "correo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..120",
            "optional": false,
            "field": "telefono",
            "description": "<p>celular o numero convencional</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": "<p>1:CLIPP,2:Puntualidad,3:CLIPP PARNER,4:SCOIT, 5:ficha tecnica</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: 'Registro realizado correctamente.', idCliente:idCliente}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, por favor intenta de nuevo más tarde.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_denuncia.js",
    "groupTitle": "C_DENUNCIA",
    "name": "PostCDenunciaRegistrarCliente"
  },
  {
    "type": "post",
    "url": "/c/empresa/contar-vehiculos",
    "title": "contar vehiculos",
    "group": "C_EMPRESA",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "latitud",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "longitud",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "celular",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": "<p>enviar cero si no se posee</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idEmpresa",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, vehiculos: 0}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_empresa.js",
    "groupTitle": "C_EMPRESA",
    "name": "PostCEmpresaContarVehiculos"
  },
  {
    "type": "post",
    "url": "/c/empresa/listar-botones",
    "title": "listar-botones",
    "group": "C_EMPRESA",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idEmpresa",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lRc: [{e.idEmpresa, e.empresa, e.callePrincipal, e.calleSecundaria, e.contacto, e.correo, e.color, e.latitud, e.longitud}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Zona no cubierta por el sistema de CLIPP'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_empresa.js",
    "groupTitle": "C_EMPRESA",
    "name": "PostCEmpresaListarBotones"
  },
  {
    "type": "post",
    "url": "/c/empresa/listar-vehiculos",
    "title": "listar vehiculos",
    "group": "C_EMPRESA",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "latitud",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "longitud",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "celular",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": "<p>enviar cero si no se posee</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idEmpresa",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lRc: [{v.modelo, v.marca, v.placa, v.anio, v.consumo, v.imagen, vt.vehiculoTipo}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Zona no cubierta por el sistema de CLIPP'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_empresa.js",
    "groupTitle": "C_EMPRESA",
    "name": "PostCEmpresaListarVehiculos"
  },
  {
    "type": "post",
    "url": "/c/empresa/localizar",
    "title": "localizar",
    "group": "C_EMPRESA",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "latitud",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "longitud",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "celular",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": "<p>enviar cero si no se posee</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCompaniaTipo",
            "description": "<p>1 Renta CARS, 2 Venta de pasajes, 3 Parqueaderos</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lRc: [{e.idEmpresa, e.empresa, e.callePrincipal, e.calleSecundaria, e.contacto, e.correo, e.color, e.latitud, e.longitud}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Zona no cubierta por el sistema de CLIPP'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_empresa.js",
    "groupTitle": "C_EMPRESA",
    "name": "PostCEmpresaLocalizar"
  },
  {
    "type": "post",
    "url": "/c/evento/asistente",
    "title": "asigna o des asigna asistente",
    "group": "C_EVENTO",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idEvento",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idClienteRegistro",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "habilitar",
            "description": "<p>1 Habilita diferente de uno deshabilita</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lR: [{r.idReservaEstadoCliente, re.estado,  r.fecha, r.hora, r.tiempo, r.observacion, lc.alias, lc.referencia}]}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_evento.js",
    "groupTitle": "C_EVENTO",
    "name": "PostCEventoAsistente"
  },
  {
    "type": "post",
    "url": "/c/evento/consultar-cliente",
    "title": "consultar cliente",
    "group": "C_EVENTO",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "criterio",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lR: [{r.idReservaEstadoCliente, re.estado,  r.fecha, r.hora, r.tiempo, r.observacion, lc.alias, lc.referencia}]}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_evento.js",
    "groupTitle": "C_EVENTO",
    "name": "PostCEventoConsultarCliente"
  },
  {
    "type": "post",
    "url": "/c/evento/crear",
    "title": "crear evento",
    "group": "C_EVENTO",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idServicioSectorCategoria",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "fecha",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "desde",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "hasta",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "imgGrande",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "imgPequenia",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "descripcionCorta",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "descripccionLarga",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "terminos",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "link",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "titulo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "subTitulo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "restricciones",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lR: [{r.idReservaEstadoCliente, re.estado,  r.fecha, r.hora, r.tiempo, r.observacion, lc.alias, lc.referencia}]}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_evento.js",
    "groupTitle": "C_EVENTO",
    "name": "PostCEventoCrear"
  },
  {
    "type": "post",
    "url": "/c/evento/disponibles",
    "title": "listar eventos disponibles",
    "group": "C_EVENTO",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fecha",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idServicioSectorCategoria",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lR: [{r.idReservaEstadoCliente, re.estado,  r.fecha, r.hora, r.tiempo, r.observacion, lc.alias, lc.referencia}]}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_evento.js",
    "groupTitle": "C_EVENTO",
    "name": "PostCEventoDisponibles"
  },
  {
    "type": "post",
    "url": "/c/evento/editar-evento",
    "title": "se editan los datos del evento creado por el usuario",
    "group": "C_EVENTO",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idEvento",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "fecha",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "desde",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "hasta",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "imgGrande",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "imgPequenia",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "descripcionCorta",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "descripccionLarga",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "terminos",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "link",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "titulo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "subTitulo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "restricciones",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lR: [{r.idReservaEstadoCliente, re.estado,  r.fecha, r.hora, r.tiempo, r.observacion, lc.alias, lc.referencia}]}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_evento.js",
    "groupTitle": "C_EVENTO",
    "name": "PostCEventoEditarEvento"
  },
  {
    "type": "post",
    "url": "/c/evento/eliminar",
    "title": "se elimina un evento logicamente, marcando habilitado en cero",
    "group": "C_EVENTO",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idEvento",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lR: [{r.idReservaEstadoCliente, re.estado,  r.fecha, r.hora, r.tiempo, r.observacion, lc.alias, lc.referencia}]}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_evento.js",
    "groupTitle": "C_EVENTO",
    "name": "PostCEventoEliminar"
  },
  {
    "type": "post",
    "url": "/c/evento/listar-asistentes",
    "title": "listar asistentes",
    "group": "C_EVENTO",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idEvento",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lR: [{r.idReservaEstadoCliente, re.estado,  r.fecha, r.hora, r.tiempo, r.observacion, lc.alias, lc.referencia}]}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_evento.js",
    "groupTitle": "C_EVENTO",
    "name": "PostCEventoListarAsistentes"
  },
  {
    "type": "post",
    "url": "/c/evento/marcar-asistencia",
    "title": "marcar- asistencia",
    "group": "C_EVENTO",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idEvento",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idClienteRegistro",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "asistensia",
            "description": "<p>0 Evento registrado 1 A tiempo 2 A trasado</p>"
          },
          {
            "group": "Parameter",
            "type": "time",
            "optional": false,
            "field": "tiempo",
            "description": "<p>01:00:00</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lR: [{r.idReservaEstadoCliente, re.estado,  r.fecha, r.hora, r.tiempo, r.observacion, lc.alias, lc.referencia}]}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_evento.js",
    "groupTitle": "C_EVENTO",
    "name": "PostCEventoMarcarAsistencia"
  },
  {
    "type": "post",
    "url": "/c/evento/registrar-estado",
    "title": "se registra la fecha del evento que envia el cliente: tabla eventoEstado",
    "group": "C_EVENTO",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idEvento",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "estado",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lR: [{r.idReservaEstadoCliente, re.estado,  r.fecha, r.hora, r.tiempo, r.observacion, lc.alias, lc.referencia}]}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_evento.js",
    "groupTitle": "C_EVENTO",
    "name": "PostCEventoRegistrarEstado"
  },
  {
    "type": "post",
    "url": "/c/horario/lista-sucursal",
    "title": "lista-sucursal",
    "group": "C_HORARIO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSucursal",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lH: [{idHorario, horario, numeroDia, idSucursalHorario, desde, hasta, activo}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos el horario no existe.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_horario.js",
    "groupTitle": "C_HORARIO",
    "name": "PostCHorarioListaSucursal"
  },
  {
    "type": "post",
    "url": "/c/horario/registrar-estado",
    "title": "registrar-estado",
    "group": "C_HORARIO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "allowedValues": [
              "6"
            ],
            "optional": false,
            "field": "idAplicacito",
            "description": "<p>6:Clipp Store</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idHorario",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSucursal",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSucursalHorario",
            "description": "<p>cuando ya esta creado el horario</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "activo",
            "description": "<p>0:desactivaod, 1:activado</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: 'Registro Correcto.' }</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, por favor intenta de nuevo más tarde.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_horario.js",
    "groupTitle": "C_HORARIO",
    "name": "PostCHorarioRegistrarEstado"
  },
  {
    "type": "post",
    "url": "/c/horario/registrar-sucursal",
    "title": "registrar-sucursal",
    "group": "C_HORARIO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "allowedValues": [
              "6"
            ],
            "optional": false,
            "field": "idAplicacito",
            "description": "<p>6:Clipp Store</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idHorario",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSucursal",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSucursalHorario",
            "description": "<p>cuando ya esta creado el horario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desde",
            "description": "<p>HH:mm:ss hora que abre la sucursal</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hasta",
            "description": "<p>HH:mm:ss hora que cierra la surcursal</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "activo",
            "description": "<p>0:desactivaod, 1:activado</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "dia",
            "description": "<p>dia del horario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: 'Registro Correcto.' }</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, por favor intenta de nuevo más tarde.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_horario.js",
    "groupTitle": "C_HORARIO",
    "name": "PostCHorarioRegistrarSucursal"
  },
  {
    "type": "post",
    "url": "/c/login/autenticar",
    "title": "autenticar",
    "group": "C_LOGIN",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cliente",
            "description": "<p>sera el correo electronico o el celular con el que se registro</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clave",
            "description": "<p>deberá ser enviada con un MD5</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idFacebook",
            "description": "<p>en caso de autenticarce con facebook, si no se logea con facebook no se enviara la clave idFacebook</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token de firebase</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, cliente: {idCliente, celular, correo, nombres, apellidos, cedula}}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Usuario y/o contraseñas incorrectas'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos: Si cambiarClave = 2 se mostrara pantalla de cambio de clave caso contrario se ingresara normalmente.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_login.js",
    "groupTitle": "C_LOGIN",
    "name": "PostCLoginAutenticar"
  },
  {
    "type": "post",
    "url": "/c/login/autenticar-celular",
    "title": "autenticar-celular",
    "group": "C_LOGIN",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cliente",
            "description": "<p>numero de celular</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>1:iOs, 2:Android, 3:WEB, 4:Portero Android, 5:Boot Facebook, 6:boot watsap</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, cliente: {idCliente, celular, correo, nombres, apellidos, cedula}}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Usuario y/o contraseñas incorrectas'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos: Si cambiarClave = 2 se mostrara pantalla de cambio de clave caso contrario se ingresara normalmente.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_login.js",
    "groupTitle": "C_LOGIN",
    "name": "PostCLoginAutenticarCelular"
  },
  {
    "type": "post",
    "url": "/c/login/autenticar-ktaxi",
    "title": "autenticar ktaxi",
    "group": "C_LOGIN",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "versionKtaxi",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataformaKtaxi",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "versionSo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "nivelBateria",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "operadora",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tipoConexion",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tipoRed",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "usandoGps",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'No existe una sessión activa'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_login.js",
    "groupTitle": "C_LOGIN",
    "name": "PostCLoginAutenticarKtaxi"
  },
  {
    "type": "post",
    "url": "/c/login/cambiar-ambiente",
    "title": "cambiar-ambiente",
    "group": "C_LOGIN",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAmbiente",
            "description": "<p>1:Desarollo, 2:Produccion al cual se queire cambiar</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "contrasenia",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: 'Ingreso a ambiente de desarrollo.'}</p>"
          }
        ],
        "Execpcional_2": [
          {
            "group": "Execpcional_2",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'No autorizado.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_2:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_login.js",
    "groupTitle": "C_LOGIN",
    "name": "PostCLoginCambiarAmbiente"
  },
  {
    "type": "post",
    "url": "/c/login/cerrar-session",
    "title": "cerrar session",
    "group": "C_LOGIN",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: 'Session cerrada correctamente.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_login.js",
    "groupTitle": "C_LOGIN",
    "name": "PostCLoginCerrarSession"
  },
  {
    "type": "post",
    "url": "/c/login/get-cliente",
    "title": "",
    "group": "C_LOGIN",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, cliente: {idCliente, celular, correo, nombres, apellidos, cedula}}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'No se encontro el usuario'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos: .",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_login.js",
    "groupTitle": "C_LOGIN",
    "name": "PostCLoginGetCliente"
  },
  {
    "type": "post",
    "url": "/c/login/ktaxi-autenticar",
    "title": "ktaxi-autenticar",
    "group": "C_LOGIN",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cliente",
            "description": "<p>sera el correo electronico o el celular con el que se registro</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clave",
            "description": "<p>deberá ser enviada con un MD5</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idFacebook",
            "description": "<p>en caso de autenticarce con facebook, si no se logea con facebook no se enviara la clave idFacebook</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token de firebase</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, cliente: {idCliente, celular, correo, nombres, apellidos, cedula}}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Usuario y/o contraseñas incorrectas'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos: Si cambiarClave = 2 se mostrara pantalla de cambio de clave caso contrario se ingresara normalmente.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_login.js",
    "groupTitle": "C_LOGIN",
    "name": "PostCLoginKtaxiAutenticar"
  },
  {
    "type": "post",
    "url": "/c/login/recuperar-contrasenia",
    "title": "recuperar contraseña",
    "group": "C_LOGIN",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cliente",
            "description": "<p>sera el correo electronico o el celular con el que se registro</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: 'Te acabamos de enviar una contraseña temporal al correo de registro, por favor revisa tu bandeja de entrada'}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: 'Te acabamos de enviar una contraseña temporal al correo de registro, por favor revisa tu bandeja de entrada'}</p>"
          }
        ],
        "Execpcional_2": [
          {
            "group": "Execpcional_2",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, pero los datos enviados no están en nuestros registros'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos: Si cambiarClave = 2 se mostrara pantalla de cambio de clave caso contrario se ingresara normalmente.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_2:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_login.js",
    "groupTitle": "C_LOGIN",
    "name": "PostCLoginRecuperarContrasenia"
  },
  {
    "type": "put",
    "url": "/c/login/verificar-datos",
    "title": "verificar datos",
    "group": "C_LOGIN",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "tipo",
            "description": "<p>1 celular, 2 correo, 3 cedula, 4pasaporte</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parametro",
            "description": "<p>Correo celular cedula o pasaporte</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: 'Puedes seguir con el registro.'}</p>"
          }
        ],
        "Execpcional": [
          {
            "group": "Execpcional",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{ en: Enetero menor o igual a cero, m: 'Mensaje flujo alterno!' }</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de eventos.",
          "type": "json"
        },
        {
          "title": "Execpcional:",
          "content": "Flujo alterno de eventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_login.js",
    "groupTitle": "C_LOGIN",
    "name": "PutCLoginVerificarDatos"
  },
  {
    "type": "delete",
    "url": "/c/lugar/eliminar",
    "title": "eliminar",
    "group": "C_LUGAR",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idLugarCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_lugar.js",
    "groupTitle": "C_LUGAR",
    "name": "DeleteCLugarEliminar"
  },
  {
    "type": "post",
    "url": "/c/lugar/ciudad",
    "title": "ciudad",
    "group": "C_LUGAR",
    "version": "1.1.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lL: lugares}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_lugar.js",
    "groupTitle": "C_LUGAR",
    "name": "PostCLugarCiudad"
  },
  {
    "type": "post",
    "url": "/c/lugar/ciudades-web",
    "title": "ciudades",
    "group": "C_LUGAR",
    "version": "1.1.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lL: lugares}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_lugar.js",
    "groupTitle": "C_LUGAR",
    "name": "PostCLugarCiudadesWeb"
  },
  {
    "type": "post",
    "url": "/c/lugar/listar",
    "title": "listar",
    "group": "C_LUGAR",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lL: lugares}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_lugar.js",
    "groupTitle": "C_LUGAR",
    "name": "PostCLugarListar"
  },
  {
    "type": "post",
    "url": "/c/lugar/listar-cantones-fecha",
    "title": "listar-cantones-fecha",
    "group": "C_LUGAR",
    "version": "1.1.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lL: Cantones por fecha}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_lugar.js",
    "groupTitle": "C_LUGAR",
    "name": "PostCLugarListarCantonesFecha"
  },
  {
    "type": "post",
    "url": "/c/lugar/listar-tipo",
    "title": "listar tipo",
    "group": "C_LUGAR",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lLt: lugaresTipos}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_lugar.js",
    "groupTitle": "C_LUGAR",
    "name": "PostCLugarListarTipo"
  },
  {
    "type": "post",
    "url": "/c/lugar/lugares",
    "title": "lugares",
    "group": "C_LUGAR",
    "version": "1.1.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lL: lugares}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_lugar.js",
    "groupTitle": "C_LUGAR",
    "name": "PostCLugarLugares"
  },
  {
    "type": "post",
    "url": "/c/lugar/lugares-entidad",
    "title": "lugares",
    "group": "C_LUGAR",
    "version": "1.1.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lL: lugares}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_lugar.js",
    "groupTitle": "C_LUGAR",
    "name": "PostCLugarLugaresEntidad"
  },
  {
    "type": "post",
    "url": "/c/lugar/lugares-provincia",
    "title": "lugares-provincia",
    "group": "C_LUGAR",
    "version": "1.1.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lL: lugares-provincia}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_lugar.js",
    "groupTitle": "C_LUGAR",
    "name": "PostCLugarLugaresProvincia"
  },
  {
    "type": "post",
    "url": "/c/lugar/lugares-web",
    "title": "lugares-web",
    "group": "C_LUGAR",
    "version": "1.1.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lL: lugares}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_lugar.js",
    "groupTitle": "C_LUGAR",
    "name": "PostCLugarLugaresWeb"
  },
  {
    "type": "post",
    "url": "/c/lugar/registrar",
    "title": "registrar",
    "group": "C_LUGAR",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idLugarTipo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "alias",
            "description": "<p>Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "direccion",
            "description": "<p>Maximo 255 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "referencia",
            "description": "<p>Maximo 255 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "latitud",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "longitud",
            "description": "<p>apiParam {int} idSector</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_lugar.js",
    "groupTitle": "C_LUGAR",
    "name": "PostCLugarRegistrar"
  },
  {
    "type": "post",
    "url": "/c/lugar/reportes",
    "title": "lugar",
    "group": "C_LUGAR",
    "version": "1.1.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lL: lugares}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_lugar.js",
    "groupTitle": "C_LUGAR",
    "name": "PostCLugarReportes"
  },
  {
    "type": "post",
    "url": "/c/lugar/totales-historico",
    "title": "totales-historico",
    "group": "C_LUGAR",
    "version": "1.1.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lL: lugares}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_lugar.js",
    "groupTitle": "C_LUGAR",
    "name": "PostCLugarTotalesHistorico"
  },
  {
    "type": "put",
    "url": "/c/lugar/registrar",
    "title": "editar",
    "group": "C_LUGAR",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idLugarCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idLugarTipo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "alias",
            "description": "<p>Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "direccion",
            "description": "<p>Maximo 255 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "referencia",
            "description": "<p>Maximo 255 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "latitud",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "longitud",
            "description": "<p>apiParam {int} idSector</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_lugar.js",
    "groupTitle": "C_LUGAR",
    "name": "PutCLugarRegistrar"
  },
  {
    "type": "post",
    "url": "/c/mensaje/validar-mensaje",
    "title": "validar mensaje",
    "group": "C_MENSAJE",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idMensaje",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: 'Puedes seguir con el registro.'}</p>"
          }
        ],
        "Execpcional": [
          {
            "group": "Execpcional",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{ en: Enetero menor o igual a cero, m: 'Mensaje flujo alterno!' }</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de eventos.",
          "type": "json"
        },
        {
          "title": "Execpcional:",
          "content": "Flujo alterno de eventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_mensaje.js",
    "groupTitle": "C_MENSAJE",
    "name": "PostCMensajeValidarMensaje"
  },
  {
    "type": "post",
    "url": "/c/mensaje/verificar-mensaje",
    "title": "verificar mensaje",
    "group": "C_MENSAJE",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: 'Puedes seguir con el registro.'}</p>"
          }
        ],
        "Execpcional": [
          {
            "group": "Execpcional",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{ en: Enetero menor o igual a cero, m: 'Mensaje flujo alterno!' }</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de eventos.",
          "type": "json"
        },
        {
          "title": "Execpcional:",
          "content": "Flujo alterno de eventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_mensaje.js",
    "groupTitle": "C_MENSAJE",
    "name": "PostCMensajeVerificarMensaje"
  },
  {
    "type": "post",
    "url": "/c/pago/formas-pago",
    "title": "formas-pago",
    "group": "C_PAGO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idProceso",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, fp: &quot;formas de pago&quot;}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_pago.js",
    "groupTitle": "C_PAGO",
    "name": "PostCPagoFormasPago"
  },
  {
    "type": "post",
    "url": "/c/pago/formas-pago-universal",
    "title": "formas-pago-universal",
    "group": "C_PAGO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPais",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCiudad",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSector",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSucursal",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idProceso",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, fp: &quot;formas de pago&quot;}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_pago.js",
    "groupTitle": "C_PAGO",
    "name": "PostCPagoFormasPagoUniversal"
  },
  {
    "type": "post",
    "url": "/c/pedido/get-pedidos-finalizados",
    "title": "get-pedidos-finalizados",
    "group": "C_PEDIDO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "anio",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "mes",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "desde",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "cuantos",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lS: [{idPedido, idSucursal, estado, idDireccion, fechaReserva, costo, iva, precio, distancia, idFormaPago, tiempo, idTipoEstadoPedido, idClienteFactura, fecha_registro, nota, sucursal, img, contacto, correo, color, url, latitud, longitud, identificativo, orden, descripcionCorta, descripcionLarga, link_profundo, comentario, titulo, descripcionCorta, descripcionLarga, color, idDireccion, direccion, referencia, dlt, dlg, idClienteFactura, cfnom, cfid, cfdir, cftel, cfcorr}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Aún no has realizado ninguna compra, ¡Inicia ahora!'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_pedido.js",
    "groupTitle": "C_PEDIDO",
    "name": "PostCPedidoGetPedidosFinalizados"
  },
  {
    "type": "post",
    "url": "/c/pedido/get-productos-caracterstica",
    "title": "get-productos-caracterstica",
    "group": "C_PEDIDO",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSucursal",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "desde",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "cuantos",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "parametro",
            "description": "<p>criterio de busqueda</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lS: [{}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, la sucursal no tiene productos.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_pedido.js",
    "groupTitle": "C_PEDIDO",
    "name": "PostCPedidoGetProductosCaracterstica"
  },
  {
    "type": "post",
    "url": "/c/pedido/get-productos-sucursal",
    "title": "get-productos-sucursal",
    "group": "C_PEDIDO",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSucursal",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "desde",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "cuantos",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "parametro",
            "description": "<p>criterio de busqueda</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lS: [{}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, la sucursal no tiene productos.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_pedido.js",
    "groupTitle": "C_PEDIDO",
    "name": "PostCPedidoGetProductosSucursal"
  },
  {
    "type": "post",
    "url": "/c/pedido/get-promociones-sucursal",
    "title": "get-promociones-sucursal",
    "group": "C_PEDIDO",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSucursal",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "desde",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "cuantos",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "parametro",
            "description": "<p>criterio de busqueda</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lS: [{}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, la sucursal no tiene productos.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_pedido.js",
    "groupTitle": "C_PEDIDO",
    "name": "PostCPedidoGetPromocionesSucursal"
  },
  {
    "type": "post",
    "url": "/c/pedido/get-subproductos/",
    "title": "get-subproductos",
    "group": "C_PEDIDO",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idProducto",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "desde",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "cuantos",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lS: [{}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, no existen dubproductos'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_pedido.js",
    "groupTitle": "C_PEDIDO",
    "name": "PostCPedidoGetSubproductos"
  },
  {
    "type": "post",
    "url": "/c/pedido/get-sucursal-tipo",
    "title": "get-sucursal-tipo",
    "group": "C_PEDIDO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "idCompaniaTipo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "parametro",
            "description": "<p>criterio de busqueda</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "desde",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "cuantos",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCiudad",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "idSucursal",
            "description": "<p>identificador de la sucursal</p> <p>//Parametros adicionales</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lS: [{idSucursal, idCiudad, sucursal, callePrincipal, calleSecundaria, contacto, correo, color, preferencial, img, url, comentario, latitud, longitud, tipo, identificativo, orden, descripcionCorta, descripcionLarga, totalLikes, idTipoEstadoPedido, isLike, activo}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, la sucursal no tiene productos.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_pedido.js",
    "groupTitle": "C_PEDIDO",
    "name": "PostCPedidoGetSucursalTipo"
  },
  {
    "type": "post",
    "url": "/c/pedido/get-tipo-compania",
    "title": "get-tipo-compania",
    "group": "C_PEDIDO",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "latitud",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "longitud",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCiudad",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lS: [{}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, la sucursal no tiene productos.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_pedido.js",
    "groupTitle": "C_PEDIDO",
    "name": "PostCPedidoGetTipoCompania"
  },
  {
    "type": "post",
    "url": "/c/pedido/sucursal-caracteristica",
    "title": "sucursal-caracteristica",
    "group": "C_PEDIDO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "idCompaniaTipo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "parametro",
            "description": "<p>criterio de busqueda</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "desde",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "cuantos",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCiudad",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "idSucursal",
            "description": "<p>identificador de la sucursal</p> <p>//Parametros adicionales</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lS: [{idSucursal, idCiudad, sucursal, callePrincipal, calleSecundaria, contacto, correo, color, preferencial, img, url, comentario, latitud, longitud, tipo, identificativo, orden, descripcionCorta, descripcionLarga, totalLikes, idTipoEstadoPedido, isLike, activo}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, la sucursal no tiene productos.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_pedido.js",
    "groupTitle": "C_PEDIDO",
    "name": "PostCPedidoSucursalCaracteristica"
  },
  {
    "type": "post",
    "url": "/c/perfil/editar-contrasenia",
    "title": "editar contraseña",
    "group": "C_PERFIL",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clave",
            "description": "<p>deberá ser enviada con un MD5</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: 'Contraseña almacenada correctamente'}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Ups lo sentimos, por favor intenta de nuevo más tarde.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_perfil.js",
    "groupTitle": "C_PERFIL",
    "name": "PostCPerfilEditarContrasenia"
  },
  {
    "type": "put",
    "url": "/c/perfil/actualizar-token",
    "title": "actualizar token",
    "group": "C_PERFIL",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token de firebase</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: 'Contraseña editada corrrectamente'}</p>"
          }
        ],
        "Alterno 1": [
          {
            "group": "Alterno 1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Ups lo sentimos, por favor intenta de nuevo más tarde.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Alterno_1",
          "content": "Flujo alterno de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_perfil.js",
    "groupTitle": "C_PERFIL",
    "name": "PutCPerfilActualizarToken"
  },
  {
    "type": "put",
    "url": "/c/perfil/editar-perfil",
    "title": "editar perfil",
    "group": "C_PERFIL",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "celular",
            "description": "<p>maximo 10 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "correo",
            "description": "<p>maximo 125 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombres",
            "description": "<p>maximo 65 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apellidos",
            "description": "<p>maximo 65 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cedula",
            "description": "<p>maximo 11 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "celularValidado",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "correoValidado",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: 'Perfil editado correctamente'}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Ups lo sentimos, por favor intenta de nuevo más tarde.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_perfil.js",
    "groupTitle": "C_PERFIL",
    "name": "PutCPerfilEditarPerfil"
  },
  {
    "type": "post",
    "url": "/c/pago/realizar-pago",
    "title": "realizar-pago",
    "group": "C_PERSONAS",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idVehiculo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPersona",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: &quot;Registro realizado correctamente&quot;}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_pago.js",
    "groupTitle": "C_PERSONAS",
    "name": "PostCPagoRealizarPago"
  },
  {
    "type": "post",
    "url": "/c/persona/conductorVehiculo",
    "title": "conductorVehiculo",
    "group": "C_PERSONAS",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idVehiculo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPersona",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: &quot;Registro realizado correctamente&quot;}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_persona.js",
    "groupTitle": "C_PERSONAS",
    "name": "PostCPersonaConductorvehiculo"
  },
  {
    "type": "post",
    "url": "/c/persona/listaConductor",
    "title": "listaConductor",
    "group": "C_PERSONAS",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parametro",
            "description": "<p>cedula, apellidos o nombres</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "limit",
            "description": "<p>cuantos datos se van a listar regmunicipal</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lC: [{idPersona, cedula_pasaporte, nombres, fechaNacimiento, genero, telefono, observacion}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos el conductor no existe.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_persona.js",
    "groupTitle": "C_PERSONAS",
    "name": "PostCPersonaListaconductor"
  },
  {
    "type": "post",
    "url": "/c/persona/registrar",
    "title": "registrar",
    "group": "C_PERSONAS",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idVehiculo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "allowedValues": [
              "1"
            ],
            "optional": false,
            "field": "tipo",
            "description": "<p>1: Conductor</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "allowedValues": [
              "1",
              "2",
              "3"
            ],
            "optional": false,
            "field": "tipoDocumento",
            "description": "<p>1: Cedula, 2: Pasaporte</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..5",
            "optional": true,
            "field": "codigoPais",
            "description": "<p>+593</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..12",
            "optional": false,
            "field": "telefono",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..125",
            "optional": false,
            "field": "correo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..120",
            "optional": false,
            "field": "nombres",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "allowedValues": [
              "1",
              "2"
            ],
            "optional": false,
            "field": "genero",
            "description": "<p>1 : Masculino, 2 : Femenino</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..25",
            "optional": false,
            "field": "documento",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fechaNacimiento",
            "description": "<p>AAA-MM-DD</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..250",
            "optional": true,
            "field": "observacion",
            "description": "<p>250 caracteres como maximo</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: &quot;Registro realizado correctamente&quot;, idpersona:idPersona}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_persona.js",
    "groupTitle": "C_PERSONAS",
    "name": "PostCPersonaRegistrar"
  },
  {
    "type": "post",
    "url": "/c/producto/deshabilitar",
    "title": "deshabilitar los productos",
    "group": "C_PRODUCTO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idProducto",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "habilitar",
            "description": "<p>1 habilitado, 0 deshabilitado</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: &quot;Actulizacion realizado correctamente&quot;}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, por favor intenta de nuevo más tarde'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_producto.js",
    "groupTitle": "C_PRODUCTO",
    "name": "PostCProductoDeshabilitar"
  },
  {
    "type": "post",
    "url": "/c/producto/disponibles",
    "title": "listar productos disponibles",
    "group": "C_PRODUCTO",
    "version": "3.1.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idEmpresa",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "fecha",
            "description": "<p>2019-08-14</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lR: [{r.idReservaEstadoCliente, re.estado,  r.fecha, r.hora, r.tiempo, r.observacion, lc.alias, lc.referencia}]}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_producto.js",
    "groupTitle": "C_PRODUCTO",
    "name": "PostCProductoDisponibles"
  },
  {
    "type": "post",
    "url": "/c/producto/editar",
    "title": "editar",
    "group": "C_PRODUCTO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idProducto",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idProductoEstado",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "costo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "iva",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "precio",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": false,
            "field": "imgGrande",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": false,
            "field": "imgPequenia",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..500",
            "optional": false,
            "field": "descripccionLarga",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": true,
            "field": "link",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..45",
            "optional": true,
            "field": "codigo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..45",
            "optional": false,
            "field": "titulo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..45",
            "optional": false,
            "field": "subTitulo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..500",
            "optional": true,
            "field": "restricciones",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "size": "..1",
            "optional": false,
            "field": "minimo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "size": "..1",
            "optional": false,
            "field": "maximo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "stock",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Datetime",
            "optional": false,
            "field": "fechaInicioVenta",
            "description": "<p>AAAA-MM-DD Hh:mm:ss</p>"
          },
          {
            "group": "Parameter",
            "type": "Datetime",
            "optional": false,
            "field": "fechaMaximaVenta",
            "description": "<p>AAAA-MM-DD Hh:mm:ss</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "isPromocion",
            "description": "<p>0:Sin promocion, 1:Con promocion</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministradorRegistro",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "orden",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "minimoStock",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "descuento",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "isSubproducto",
            "description": "<p>si va hacer un sub producto 1:NO, 2:SI</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tiempoMinPre",
            "description": "<p>tiempo en minutos</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tiempoMaxPre",
            "description": "<p>tiempo en minutos</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: &quot;Producto actualizado correctamente.&quot;}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, por favor intenta de nuevo más tarde'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_producto.js",
    "groupTitle": "C_PRODUCTO",
    "name": "PostCProductoEditar"
  },
  {
    "type": "post",
    "url": "/c/producto/get-buscador",
    "title": "get-buscador",
    "group": "C_PRODUCTO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCiudad",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSector",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parametro",
            "description": "<p>criterio de busqueda</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "desde",
            "description": "<p>desde que posicion se queire los datos,la primera posicon inicia en 0</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "cantidad",
            "description": "<p>cantidad de datos que va a devolver el recurso</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "idCompaniaTipo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "identificativo",
            "description": "<p>identificativo del servicio categoria</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "idServicioSectorCategoria",
            "description": "<p>id del servicio categoria</p> <p>Parametros adicionales</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: [{idProducto, idProductoEstado, fecha, costo, iva, precio, imgGrande, imgPequenia, descripcionCorta, descripccionLarga, terminos, link, titulo, subTitulo, restricciones, minimo, maximo, stock, fecha_inicio_venta, fecha_maxima_venta, isPromocion, descuento, minimo_stock, codigo, orden, tiempoMinPre, tiempoMaxPre}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, la sucursal no tiene productos.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_producto.js",
    "groupTitle": "C_PRODUCTO",
    "name": "PostCProductoGetBuscador"
  },
  {
    "type": "post",
    "url": "/c/producto/get-productos-caracteristica",
    "title": "get-productos-caracteristica",
    "group": "C_PRODUCTO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCiudad",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSector",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCaracteristica",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSucursal",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "desde",
            "description": "<p>desde que posicion se queire los datos,la primera posicon inicia en 0</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "cuantos",
            "description": "<p>cuantos datos que va a devolver el recurso</p> <p>Parametros adicionales</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: [{idProducto, idProductoEstado, fecha, costo, iva, precio, imgGrande, imgPequenia, descripcionCorta, descripccionLarga, terminos, link, titulo, subTitulo, restricciones, minimo, maximo, stock, fecha_inicio_venta, fecha_maxima_venta, isPromocion, descuento, minimo_stock, codigo, orden, tiempoMinPre, tiempoMaxPre}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, la sucursal no tiene productos.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_producto.js",
    "groupTitle": "C_PRODUCTO",
    "name": "PostCProductoGetProductosCaracteristica"
  },
  {
    "type": "post",
    "url": "/c/producto/get-subproductos/",
    "title": "get-subproductos",
    "group": "C_PRODUCTO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idProducto",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "desde",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "cuantos",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lS: [{}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, no existen dubproductos'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_producto.js",
    "groupTitle": "C_PRODUCTO",
    "name": "PostCProductoGetSubproductos"
  },
  {
    "type": "post",
    "url": "/c/producto/habilitar-subProductos",
    "title": "habilitar-subProductos",
    "group": "C_PRODUCTO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idProductoSubproducto",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idProducto",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "habilitado",
            "description": "<p>0:Deshabilita, 1:habilitado,  si se quiere deshabilitar un subproducto</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: &quot;Actuliado realizado correctamente&quot;}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, por favor intenta de nuevo más tarde'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_producto.js",
    "groupTitle": "C_PRODUCTO",
    "name": "PostCProductoHabilitarSubproductos"
  },
  {
    "type": "post",
    "url": "/c/producto/lista-estado",
    "title": "lista-estado",
    "group": "C_PRODUCTO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parametro",
            "description": "<p>criterio de busqueda</p> <p>Parametros adicionales</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lPE: [{idProducto, idProductoEstado, fecha, costo, iva, precio, imgGrande, imgPequenia, descripcionCorta, descripccionLarga, terminos, link, titulo, subTitulo, restricciones, minimo, maximo, stock, fecha_inicio_venta, fecha_maxima_venta, isPromocion, descuento, minimo_stock, codigo, orden, tiempoMinPre, tiempoMaxPre}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, no hay resultados.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_producto.js",
    "groupTitle": "C_PRODUCTO",
    "name": "PostCProductoListaEstado"
  },
  {
    "type": "post",
    "url": "/c/producto/lista-estado",
    "title": "lista-estado",
    "group": "C_PRODUCTO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parametro",
            "description": "<p>criterio de busqueda</p> <p>Parametros adicionales</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lPE: [{idProducto, idProductoEstado, fecha, costo, iva, precio, imgGrande, imgPequenia, descripcionCorta, descripccionLarga, terminos, link, titulo, subTitulo, restricciones, minimo, maximo, stock, fecha_inicio_venta, fecha_maxima_venta, isPromocion, descuento, minimo_stock, codigo, orden, tiempoMinPre, tiempoMaxPre}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, no hay resultados.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_producto.js",
    "groupTitle": "C_PRODUCTO",
    "name": "PostCProductoListaEstado"
  },
  {
    "type": "post",
    "url": "/c/producto/lista-sub-producto",
    "title": "lista-sub-producto",
    "group": "C_PRODUCTO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSucursal",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idProducto",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "parametro",
            "description": "<p>criterio de busqueda</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: [{idProducto, idSucursal, idProductoEstado, costo, iva, precio, imgGrande, imgPequenia, descripccionLarga, link, codigo, titulo, subTitulo, restricciones, minimo, maximo, stock, fecha_inicio_venta, fecha_maxima_venta, isPromocion, habilitado, idAdministradorRegistro, fechaRegistro, idAdministradorHabilito, idAdministradorDeshabilito, fechaHabilito, fechaDeshabilito, idAdministradorActualizo, fechaActualizo, orden, ranking, minimoStock, descuento}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, la sucursal no tiene productos.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_producto.js",
    "groupTitle": "C_PRODUCTO",
    "name": "PostCProductoListaSubProducto"
  },
  {
    "type": "post",
    "url": "/c/producto/modificarStock",
    "title": "subir o disminuir el sctock para los produco",
    "group": "C_PRODUCTO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idProducto",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "stock",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: &quot;Actuliado realizado correctamente&quot;}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, por favor intenta de nuevo más tarde'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_producto.js",
    "groupTitle": "C_PRODUCTO",
    "name": "PostCProductoModificarstock"
  },
  {
    "type": "post",
    "url": "/c/producto/producto-sucursal",
    "title": "producto-sucursal",
    "group": "C_PRODUCTO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSucursal",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "parametro",
            "description": "<p>criterio de busqueda</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: [{idProducto, idSucursal, idProductoEstado, costo, iva, precio, imgGrande, imgPequenia, descripccionLarga, link, codigo, titulo, subTitulo, restricciones, minimo, maximo, stock, fecha_inicio_venta, fecha_maxima_venta, isPromocion, habilitado, idAdministradorRegistro, fechaRegistro, idAdministradorHabilito, idAdministradorDeshabilito, fechaHabilito, fechaDeshabilito, idAdministradorActualizo, fechaActualizo, orden, ranking, minimoStock, descuento}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, la sucursal no tiene productos.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_producto.js",
    "groupTitle": "C_PRODUCTO",
    "name": "PostCProductoProductoSucursal"
  },
  {
    "type": "post",
    "url": "/c/producto/registrar",
    "title": "registrar",
    "group": "C_PRODUCTO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSucursal",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idProductoEstado",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "costo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "iva",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "precio",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": false,
            "field": "imgGrande",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": false,
            "field": "imgPequenia",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..500",
            "optional": false,
            "field": "descripccionLarga",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": true,
            "field": "link",
            "description": "<p>link profundo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..45",
            "optional": true,
            "field": "codigo",
            "description": "<p>codigo del producto</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..45",
            "optional": false,
            "field": "titulo",
            "description": "<p>titulo del producto</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..45",
            "optional": false,
            "field": "subTitulo",
            "description": "<p>subtitulo del producto</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..500",
            "optional": true,
            "field": "restricciones",
            "description": "<p>restricciones del producto, alcohol solo para mayores de edad</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "size": "..1",
            "optional": false,
            "field": "minimo",
            "description": "<p>cantidad minima del pructos que se van a vender</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "size": "..1",
            "optional": false,
            "field": "maximo",
            "description": "<p>cantidad maxima del pructos que se van a vender</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "stock",
            "description": "<p>catitdad de producto que dispone el local</p>"
          },
          {
            "group": "Parameter",
            "type": "Datetime",
            "optional": false,
            "field": "fechaInicioVenta",
            "description": "<p>AAAA-MM-DD Hh:mm:ss fecha desde cuanto esta disponible el producto</p>"
          },
          {
            "group": "Parameter",
            "type": "Datetime",
            "optional": false,
            "field": "fechaMaximaVenta",
            "description": "<p>AAAA-MM-DD Hh:mm:ss fecha hasta cuanto esta disponible el producto</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "isPromocion",
            "description": "<p>0:Sin promocion, 1:Con promocion</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "orden",
            "description": "<p>peso del producto</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "minimoStock",
            "description": "<p>cantidad minima de stock para notificar</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "descuento",
            "description": "<p>porcentaje de descuento</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "isSubproducto",
            "description": "<p>si va hacer un sub producto 1:NO, 2:SI</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tiempoMinPre",
            "description": "<p>tiempo en minutos</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "idBiblioteca",
            "description": "<p>si el producto se hereda de una biblioteca</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": true,
            "field": "caracteristicas",
            "description": "<p>[{idCaracteristica:1, habilitado:1},{idCaracteristica:2, habilitado:0}]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: &quot;Registro realizado correctamente&quot;}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, por favor intenta de nuevo más tarde'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_producto.js",
    "groupTitle": "C_PRODUCTO",
    "name": "PostCProductoRegistrar"
  },
  {
    "type": "post",
    "url": "/c/producto/registrar-subProductos",
    "title": "registrar-subProductos",
    "group": "C_PRODUCTO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idProducto",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSubProducto",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: &quot;Actuliado realizado correctamente&quot;}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, por favor intenta de nuevo más tarde'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_producto.js",
    "groupTitle": "C_PRODUCTO",
    "name": "PostCProductoRegistrarSubproductos"
  },
  {
    "type": "post",
    "url": "/c/promocion/canjear-codigo",
    "title": "canjear-codigo",
    "group": "C_PROMOCION",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCiudad",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, fp: &quot;formas de promocion&quot;}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_promocion.js",
    "groupTitle": "C_PROMOCION",
    "name": "PostCPromocionCanjearCodigo"
  },
  {
    "type": "post",
    "url": "/c/pushCliente/envioPush",
    "title": "envioPush",
    "group": "C_PUSH",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliete",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSector",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": "<p>//Parametros adicionales</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lS: [{idSucursal, idCiudad, sucursal, callePrincipal, calleSecundaria, contacto, correo, color, preferencial, img, url, comentario, latitud, longitud, tipo, identificativo, orden, descripcionCorta, descripcionLarga, totalLikes, idTipoEstadoPedido, isLike, activo}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, la sucursal no tiene productos.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_pushCliente.js",
    "groupTitle": "C_PUSH",
    "name": "PostCPushclienteEnviopush"
  },
  {
    "type": "post",
    "url": "/c/registro/registrar",
    "title": "registrar",
    "group": "C_REGISTRO",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "celular",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "correo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clave",
            "description": "<p>deberá ser enviada con un MD5</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombres",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apellidos",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cedula",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "celularValidado",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "correoValidado",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "codigoPais",
            "description": "<p>+593 màximo 5 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token de firebase</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: 'Registro realizado correctamente', idCliente: registro['insertId']}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Ups lo sentimos, por favor intenta de nuevo más tarde.'}</p>"
          }
        ],
        "Execpcional_2": [
          {
            "group": "Execpcional_2",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -2, m: 'Celular ya registrado'}</p>"
          }
        ],
        "Execpcional_3": [
          {
            "group": "Execpcional_3",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -3, m: 'Correo ya registrado'}</p>"
          }
        ],
        "Execpcional_4": [
          {
            "group": "Execpcional_4",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -4, m: 'Número de cédula ya registrado'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_2:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_3:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_4:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_registro.js",
    "groupTitle": "C_REGISTRO",
    "name": "PostCRegistroRegistrar"
  },
  {
    "type": "post",
    "url": "/c/registro/registrar-apple",
    "title": "registrar-apple",
    "group": "C_REGISTRO",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idApple",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "celular",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "correo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombres",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apellidos",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cedula",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "celularValidado",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "correoValidado",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "codigoPais",
            "description": "<p>+593 màximo 5 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token de firebase</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: 'Registro con apple realizado correctamente', idCliente: registro['insertId']}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 2, m: 'La cuenta se vinculó correctamente', idCliente: clientes[0]['idCliente']}</p>"
          }
        ],
        "Execpcional_2": [
          {
            "group": "Execpcional_2",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos pero el Apple con el que intenta registrar se encuentra en uso, porfavor intente loguearse con la red social'}</p>"
          }
        ],
        "Execpcional_3": [
          {
            "group": "Execpcional_3",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -2, m: 'Ups lo sentimos, por favor intenta de nuevo más tarde.'}</p>"
          }
        ],
        "Execpcional_4": [
          {
            "group": "Execpcional_4",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -3, m: 'Ocurrio un probelam y no pudimos vincular la cuenta de apple, intenta de nuevo mas tarde'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_2:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_3:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_4:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_registro.js",
    "groupTitle": "C_REGISTRO",
    "name": "PostCRegistroRegistrarApple"
  },
  {
    "type": "post",
    "url": "/c/registro/registrar-facebook",
    "title": "registrar-facebook",
    "group": "C_REGISTRO",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idFacebook",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "celular",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "correo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombres",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apellidos",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cedula",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "celularValidado",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "correoValidado",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "codigoPais",
            "description": "<p>+593 màximo 5 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token de firebase</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: 'Registro con facebook realizado correctamente', idCliente: registro['insertId']}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 2, m: 'La cuenta se vinculó correctamente', idCliente: clientes[0]['idCliente']}</p>"
          }
        ],
        "Execpcional_2": [
          {
            "group": "Execpcional_2",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos pero el Facebook con el que intenta registrar se encuentra en uso, porfavor intente loguearse con la red social'}</p>"
          }
        ],
        "Execpcional_3": [
          {
            "group": "Execpcional_3",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -2, m: 'Ups lo sentimos, por favor intenta de nuevo más tarde.'}</p>"
          }
        ],
        "Execpcional_4": [
          {
            "group": "Execpcional_4",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -3, m: 'Ocurrio un probelam y no pudimos vincular la cuenta de facebook, intenta de nuevo mas tarde'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_2:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_3:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_4:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_registro.js",
    "groupTitle": "C_REGISTRO",
    "name": "PostCRegistroRegistrarFacebook"
  },
  {
    "type": "post",
    "url": "/c/reserva/listar",
    "title": "listar",
    "group": "C_RESERVA",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lR: [{r.idReservaEstadoCliente, re.estado,  r.fecha, r.hora, r.tiempo, r.observacion, lc.alias, lc.referencia}]}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_reserva.js",
    "groupTitle": "C_RESERVA",
    "name": "PostCReservaListar"
  },
  {
    "type": "post",
    "url": "/c/reserva/registrar-estado",
    "title": "registrar estado",
    "group": "C_RESERVA",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idReserva",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idReservaEstado",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "nota",
            "description": "<p>Máximo 200 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lR: [{r.idReservaEstado, re.estado,  r.fecha, r.hora, r.tiempo, r.observacion, lc.alias, lc.referencia}]}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_reserva.js",
    "groupTitle": "C_RESERVA",
    "name": "PostCReservaRegistrarEstado"
  },
  {
    "type": "post",
    "url": "/c/reserva/reservar",
    "title": "reservar",
    "group": "C_RESERVA",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idServicio",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idServicioSector",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idServicioSectorCategoria",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idFormaPago",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idServicioSectorCategoriaTarifa",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "costo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idLugarCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fecha",
            "description": "<p>2019-04-18</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hora",
            "description": "<p>17:18:57</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tiempo",
            "description": "<p>5</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "observacion",
            "description": "<p>Maximo 300 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "direccion",
            "description": "<p>Maximo 255 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "referencia",
            "description": "<p>Maximo 255 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "latitud",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "longitud",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_reserva.js",
    "groupTitle": "C_RESERVA",
    "name": "PostCReservaReservar"
  },
  {
    "type": "post",
    "url": "/c/reserva/ver",
    "title": "ver",
    "group": "C_RESERVA",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idReserva",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lR: [{r.idReservaEstadoCliente, re.estado,  r.fecha, r.hora, r.tiempo, r.observacion, lc.alias, lc.referencia}]}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_reserva.js",
    "groupTitle": "C_RESERVA",
    "name": "PostCReservaVer"
  },
  {
    "type": "post",
    "url": "/c/salvoconducto/buscar-codigo",
    "title": "buscar-codigo",
    "group": "C_SALVOCONDUCTO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "codigo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "identificacion",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "trama",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "latitud",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "longitud",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lS: [{idSalvoconducto, codigo, idSalvoconducto, codigo, identificacion, razonMovilizacion, fechaEmision, fecha_registro}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos el salvoconducto no existe.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_salvoconducto.js",
    "groupTitle": "C_SALVOCONDUCTO",
    "name": "PostCSalvoconductoBuscarCodigo"
  },
  {
    "type": "post",
    "url": "/c/salvoconducto/lista-historial",
    "title": "lista-historial",
    "group": "C_SALVOCONDUCTO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "codigo",
            "description": "<p>codigo de salvoconducto</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "placa",
            "description": "<p>placa del vehiculo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cedula",
            "description": "<p>cedula del conductor</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lS: [{idSalvoconducto, codigo, idSalvoconducto, codigo, identificacion, razonMovilizacion, fechaEmision, fecha_registro}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: ''}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_salvoconducto.js",
    "groupTitle": "C_SALVOCONDUCTO",
    "name": "PostCSalvoconductoListaHistorial"
  },
  {
    "type": "post",
    "url": "/c/salvoconducto/registrar",
    "title": "registrar",
    "group": "C_SALVOCONDUCTO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "allowedValues": [
              "1",
              "2",
              "3",
              "4",
              "5"
            ],
            "optional": true,
            "field": "idAplicativo",
            "description": "<p>1:CLIPP,2:Puntualidad,3:CLIPP PARNER,4:SCOIT, 5:web cliente</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "codigo",
            "description": "<p>codigo del saloconducto</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "identificacion",
            "description": "<p>identificacion del salvoconducto</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "razonMovilizacion",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "AAAA-MM-DD",
            "optional": true,
            "field": "fechaEmision",
            "description": "<p>si no ingresa fechaEmision se debe enviar la fecha actual</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cedula",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "nombres",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "placa",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "latitud",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "longitud",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "sancionar",
            "description": "<p>0:SIN SANCION, 1:SANCIONADO</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": true,
            "field": "temperatura",
            "description": "<p>temperatura del conductor</p> <p>placa cédula conductor código salvoconducto</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lS: [{idSalvoconducto, codigo, idSalvoconducto, codigo, identificacion, razonMovilizacion, fechaEmision, fecha_registro}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: ''}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_salvoconducto.js",
    "groupTitle": "C_SALVOCONDUCTO",
    "name": "PostCSalvoconductoRegistrar"
  },
  {
    "type": "post",
    "url": "/c/seccion/lista",
    "title": "lista",
    "group": "C_SECCION",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCiudad",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "nivel",
            "description": "<p>1:Vista pricipal cuando ingresa a delivery 2:vista secundaria cuando ya seleciona una categoria</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idServicioSectorCategoria",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "latitud",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "longitud",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lS: [{}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos no hay secciones.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_seccion.js",
    "groupTitle": "C_SECCION",
    "name": "PostCSeccionLista"
  },
  {
    "type": "post",
    "url": "/c/seccion/lista-categoria",
    "title": "lista-categoria",
    "group": "C_SECCION",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCiudad",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "nivel",
            "description": "<p>1:Vista pricipal cuando ingresa a delivery 2:vista secundaria cuando ya seleciona una categoria</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idServicioSectorCategoria",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCompaniaTipo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lS: [{}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos no hay secciones.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_seccion.js",
    "groupTitle": "C_SECCION",
    "name": "PostCSeccionListaCategoria"
  },
  {
    "type": "post",
    "url": "/c/seccion/seccion-data",
    "title": "seccion-data",
    "group": "C_SECCION",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSeccion",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tipoBusqueda",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "isListaPredeterminado",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCiudad",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parametro",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "desde",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "cuantos",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lS: [{}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos no hay secciones.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_seccion.js",
    "groupTitle": "C_SECCION",
    "name": "PostCSeccionSeccionData"
  },
  {
    "type": "post",
    "url": "/c/seccionProducto/lista-producto",
    "title": "lista-producto",
    "group": "C_SECCION",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idProducto",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lS: [{}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos no hay secciones.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_seccionProducto.js",
    "groupTitle": "C_SECCION",
    "name": "PostCSeccionproductoListaProducto"
  },
  {
    "type": "post",
    "url": "/c/sector/formas-pago",
    "title": "listar formas de pago",
    "group": "C_SECTOR",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSector",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lR: [{r.idReservaEstadoCliente, re.estado,  r.fecha, r.hora, r.tiempo, r.observacion, lc.alias, lc.referencia}]}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_sector.js",
    "groupTitle": "C_SECTOR",
    "name": "PostCSectorFormasPago"
  },
  {
    "type": "post",
    "url": "/c/sector/localizar",
    "title": "localizar",
    "group": "C_SECTOR",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "latitud",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "longitud",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "celular",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": "<p>enviar cero si no se posee</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{{en: 1, s: {idSector, idCiudad, sector}}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Zona no cubierta por el sistema de CLIPP'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_sector.js",
    "groupTitle": "C_SECTOR",
    "name": "PostCSectorLocalizar"
  },
  {
    "type": "post",
    "url": "/c/sector/localizar-ubicacion/'",
    "title": "",
    "group": "C_SECTOR",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "latitud",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "longitud",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": "<p>enviar cero si no se posee</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{{en: 1, s: {idSector, idCiudad, sector}}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Zona no cubierta por el sistema de CLIPP'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_sector.js",
    "groupTitle": "C_SECTOR",
    "name": "PostCSectorLocalizarUbicacion"
  },
  {
    "type": "post",
    "url": "/c/sector/servicios",
    "title": "servicios",
    "group": "C_SECTOR",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "latitudOrigen",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "longitudOrigen",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "latitudDestino",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "longitudDestino",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": "<p>enviar cero si no se posee</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSector",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{{en: 1, s: {idSector, idCiudad, sector}}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Zona no cubierta por el sistema de CLIPP'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_sector.js",
    "groupTitle": "C_SECTOR",
    "name": "PostCSectorServicios"
  },
  {
    "type": "post",
    "url": "/c/sector/verificar-servicios/'",
    "title": "",
    "group": "C_SECTOR",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSector",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "latitud",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "longitud",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": "<p>enviar cero si no se posee</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{{en: 1, s: {idSector, idCiudad, sector}}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Zona no cubierta por el sistema de CLIPP'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_sector.js",
    "groupTitle": "C_SECTOR",
    "name": "PostCSectorVerificarServicios"
  },
  {
    "type": "post",
    "url": "/a/desinfeccion/listar-medidas",
    "title": "listar-medidas",
    "group": "C_SERVICIO",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idServicioSectorCategoria",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lB: botones}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_desinfeccion.js",
    "groupTitle": "C_SERVICIO",
    "name": "PostADesinfeccionListarMedidas"
  },
  {
    "type": "post",
    "url": "/a/desinfeccion/listar-medidasExtras",
    "title": "listar-medidasExtras",
    "group": "C_SERVICIO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCiudad",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lE: [{idE,medida,tipo(1:check, 2:valor numerico)}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos. Intenta de nuevo más tarde.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_desinfeccion.js",
    "groupTitle": "C_SERVICIO",
    "name": "PostADesinfeccionListarMedidasextras"
  },
  {
    "type": "post",
    "url": "/a/desinfeccion/registrar",
    "title": "registrar",
    "group": "C_SERVICIO",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idServicioSectorCategoria",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tipo",
            "description": "<p>4:Registro sanitizacion, 6:registro temperatura</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": true,
            "field": "temperatura",
            "description": "<p>temperatura de conductor</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lB: botones}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_desinfeccion.js",
    "groupTitle": "C_SERVICIO",
    "name": "PostADesinfeccionRegistrar"
  },
  {
    "type": "post",
    "url": "/c/desinfeccion/ficha-tecnica",
    "title": "ficha-tecnica",
    "group": "C_SERVICIO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>el tocket se genera con md5(Registro Municipal),md5('KRADAC')</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idVehiculo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "idCliente",
            "description": "<p>identificador del cliente</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": "<p>1:CLIPP,2:Puntualidad,3:CLIPP PARNER,4:SCOIT, 5:ficha tecnica</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, v: {idVehiculo, placa, registroMunicipal, propietario, vehiculoTipo,desinfeccion:{idDesinfeccion, fecha, conductor, temperatura,medidasD:[]}}]</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos el vehiculo no existe.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_desinfeccion.js",
    "groupTitle": "C_SERVICIO",
    "name": "PostCDesinfeccionFichaTecnica"
  },
  {
    "type": "post",
    "url": "/c/desinfeccion/lista-control",
    "title": "lista-control",
    "group": "C_SERVICIO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idVehiculo",
            "description": "<p>idVehiculo</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "desde",
            "description": "<p>inicio de limite, el primer esta en la posicion 0</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "hasta",
            "description": "<p>que posicion del los registros</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "idTipo",
            "description": "<p>tipo 1:Busqueda, 2:Sancion, 3:Preregistro, 4:Sanitizacion, 5 Punto Control, 6 Registro Temperatura</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lV: [{idVehiculo, placa, registroMunicipal, nombres, documento, telefono, observacion, idPersona, documentoC, nombresC, generoC, telefonoC, correoC}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos el vehiculo no existe.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_desinfeccion.js",
    "groupTitle": "C_SERVICIO",
    "name": "PostCDesinfeccionListaControl"
  },
  {
    "type": "post",
    "url": "/c/desinfeccion/lista-limit",
    "title": "lista-limit",
    "group": "C_SERVICIO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idVehiculo",
            "description": "<p>identificador del vehiculo</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idConductor",
            "description": "<p>identificador de la persona que esta de conductor</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": "<p>1:CLIPP,2:Puntualidad,3:CLIPP PARNER,4:SCOIT, 5:web cliente</p>"
          },
          {
            "group": "Parameter",
            "type": "doduble",
            "optional": false,
            "field": "latitud",
            "description": "<p>ubicacion dispositivo</p>"
          },
          {
            "group": "Parameter",
            "type": "doduble",
            "optional": false,
            "field": "longitud",
            "description": "<p>ubicacion dispositivo</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "idDesinfeccion",
            "description": "<p>identificador de la desinfeccion, para buscar una unica desinfeccion</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "limit",
            "description": "<p>cuantos datos se van a listar</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lV: [{idDesinfeccion, fecha, observacion, administrador, conductor, genero, fechaNacimiento, telefono, correo, estadoPreRegistro, idTipo, tipo, color, fecha_registro, temperatura}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos el vehiculo no existe.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_desinfeccion.js",
    "groupTitle": "C_SERVICIO",
    "name": "PostCDesinfeccionListaLimit"
  },
  {
    "type": "post",
    "url": "/c/desinfeccion/registrar-control",
    "title": "registrar-control",
    "group": "C_SERVICIO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idVehiculo",
            "description": "<p>identificador del vehiculo</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idConductor",
            "description": "<p>identificador de la persona que esta de conductor</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": "<p>1:CLIPP,2:Puntualidad,3:CLIPP PARNER,4:SCOIT, 5:web cliente</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "fecha",
            "description": "<p>fecha del dispositivo</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "hora",
            "description": "<p>hora del dispositivo</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tipo",
            "description": "<p>1:Busqueda, 2:Sancion, 3:Preregistro, 4:Sanitizacion, 5 Punto Control, 6 Registro Temperatura</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "sancion",
            "description": "<p>0:Sin sancionar, 1:Sancionado</p>"
          },
          {
            "group": "Parameter",
            "type": "doduble",
            "optional": false,
            "field": "latitud",
            "description": "<p>ubicacion</p>"
          },
          {
            "group": "Parameter",
            "type": "doduble",
            "optional": false,
            "field": "longitud",
            "description": "<p>ubicacion</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: 'Registro realizado correctamente.'}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, por favor intenta de nuevo más tarde.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_a_desinfeccion.js",
    "groupTitle": "C_SERVICIO",
    "name": "PostCDesinfeccionRegistrarControl"
  },
  {
    "type": "post",
    "url": "/c/servicio/listar-botones",
    "title": "listar botones",
    "group": "C_SERVICIO",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idServicioSectorCategoria",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lB: botones}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_servicio.js",
    "groupTitle": "C_SERVICIO",
    "name": "PostCServicioListarBotones"
  },
  {
    "type": "post",
    "url": "/c/servicio/listar-categorias",
    "title": "listar categorias",
    "group": "C_SERVICIO",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idServicioSector",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lS: [{sc.idServicioSectorCategoria, sc.categoria, sc.detalle, sc.imegen, sc.icono, sc.identificativo}]}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_servicio.js",
    "groupTitle": "C_SERVICIO",
    "name": "PostCServicioListarCategorias"
  },
  {
    "type": "post",
    "url": "/c/servicio/listar-servicios",
    "title": "listar servicios",
    "group": "C_SERVICIO",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSector",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lS: [{ss.idServicio, ss.idServicioSector, ss.nombre, ss.descripcionCorta, ss.descripcionLarga, ss.icono, ss.imagen}]}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_servicio.js",
    "groupTitle": "C_SERVICIO",
    "name": "PostCServicioListarServicios"
  },
  {
    "type": "post",
    "url": "/c/sucrsal/formas-pago",
    "title": "formas-pago",
    "group": "C_SUCURSAL",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSucursal",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, fp: &quot;formas de pago&quot;}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_sucursal.js",
    "groupTitle": "C_SUCURSAL",
    "name": "PostCSucrsalFormasPago"
  },
  {
    "type": "post",
    "url": "/c/sucursal/get-horario",
    "title": "",
    "group": "C_SUCURSAL",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSucursal",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lH: [{idHorario, horario, numeroDia, idSucursalHorario, desde, hasta, activo}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos el horario no existe.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_sucursal.js",
    "groupTitle": "C_SUCURSAL",
    "name": "PostCSucursalGetHorario"
  },
  {
    "type": "post",
    "url": "/c/sucursal/obtener-sucursal-cercanas",
    "title": "obtener-sucursal-productos",
    "group": "C_SUCURSAL",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "latitud",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "longitud",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCiudad",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "identificativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idServicioSectorCategoria",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lR: [{r.idReservaEstadoCliente, re.estado,  r.fecha, r.hora, r.tiempo, r.observacion, lc.alias, lc.referencia}]}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_sucursal.js",
    "groupTitle": "C_SUCURSAL",
    "name": "PostCSucursalObtenerSucursalCercanas"
  },
  {
    "type": "post",
    "url": "/c/sucursal/obtener-sucursal-productos",
    "title": "obtener-sucursal-productos",
    "group": "C_SUCURSAL",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idSucursal",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idProducto",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lR: [{r.idReservaEstadoCliente, re.estado,  r.fecha, r.hora, r.tiempo, r.observacion, lc.alias, lc.referencia}]}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_sucursal.js",
    "groupTitle": "C_SUCURSAL",
    "name": "PostCSucursalObtenerSucursalProductos"
  },
  {
    "type": "post",
    "url": "/c/validaciones/registrar-validacion",
    "title": "",
    "group": "C_VALIDACIONES",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idTipoValidacion",
            "description": "<p>1: Numero Telefono, 2 Correo Electronico</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministradorRegistro",
            "description": "<p>, si se hace desde web</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "estado",
            "description": "<p>1:Validod, 2:No validado</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "moduloValidacion",
            "description": "<p>1: Modulo registro 2: Actualizacion de perfil 3: Categoria 4: Administrador Web</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lH: [{idValidacionDatosCliente, idLugar, idTipoValidacion, tipo}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos ocurrió un problema.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_validacion.js",
    "groupTitle": "C_VALIDACIONES",
    "name": "PostCValidacionesRegistrarValidacion"
  },
  {
    "type": "post",
    "url": "/c/preregistroConductor/buscar-vehiculo",
    "title": "buscar-vehiculo",
    "group": "C_VEHICULO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idVehiculo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fecha",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lP: [{idPreregistro, idConductor, idVehiculo, idMedidaDesinfeccionExtra, fecha, fechaRegistro,medidasExtras:[idMedidasDesinfeccionExtra, medida, valor]}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos el salvoconducto no existe.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_preregistroConductor.js",
    "groupTitle": "C_VEHICULO",
    "name": "PostCPreregistroconductorBuscarVehiculo"
  },
  {
    "type": "post",
    "url": "/c/preregistroConductor/lista",
    "title": "lista",
    "group": "C_VEHICULO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idVehiculo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "desde",
            "description": "<p>inicio de limite, el primer esta en la posicion 0</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "hasta",
            "description": "<p>que posicion del los registros</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lP: [{idPreregistro, idConductor, idVehiculo, idMedidaDesinfeccionExtra, fecha, fechaRegistro,medidasExtras:[idMedidasDesinfeccionExtra, medida, valor]}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos el salvoconducto no existe.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_preregistroConductor.js",
    "groupTitle": "C_VEHICULO",
    "name": "PostCPreregistroconductorLista"
  },
  {
    "type": "post",
    "url": "/c/preregistroConductor/registrar",
    "title": "registrar",
    "group": "C_VEHICULO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idConductor",
            "description": "<p>identificador del conductor</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idVehiculo",
            "description": "<p>identificador del vehiculo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fecha",
            "description": "<p>AAAA-MM-DD</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "medidasExtras",
            "description": "<p>[{idMDExtra,valor}]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: 'Registro realizado correctamente'}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, por favor intenta de nuevo más tarde.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_preregistroConductor.js",
    "groupTitle": "C_VEHICULO",
    "name": "PostCPreregistroconductorRegistrar"
  },
  {
    "type": "post",
    "url": "/c/vehiculo/lista",
    "title": "lista",
    "group": "C_VEHICULO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parametro",
            "description": "<p>placa o RegistroMunicipal</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "limit",
            "description": "<p>cuantos datos se van a listar</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lV: [{idVehiculo, placa, registroMunicipal, marcaModelo, nombres, documento, telefono, observacion, idPersona, documentoC, nombresC, generoC, telefonoC, correoC}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos el vehículo no existe.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_vehiculoCovid.js",
    "groupTitle": "C_VEHICULO",
    "name": "PostCVehiculoLista"
  },
  {
    "type": "post",
    "url": "/c/vehiculo/lista-conductor",
    "title": "lista-conductor",
    "group": "C_VEHICULO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parametro",
            "description": "<p>placa, RegistroMunicipal o cedula conductor</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "limit",
            "description": "<p>cuantos datos se van a listar</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lV: [{idVehiculo, placa, registroMunicipal, marcaModelo, nombres, documento, telefono, observacion, idPersona, documentoC, nombresC, generoC, telefonoC, correoC, cooperativa, idCooperativa, estadoBusqueda}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos el vehículo no existe.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_vehiculoCovid.js",
    "groupTitle": "C_VEHICULO",
    "name": "PostCVehiculoListaConductor"
  },
  {
    "type": "post",
    "url": "/c/vehiculo/lista-tipo",
    "title": "lista-tipo",
    "group": "C_VEHICULO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parametro",
            "description": "<p>Ejemplo: Auto,Moto,Bus</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idVehiculoTipo",
            "description": "<p>si se tienen e idVehiculoTipo solo se envia sin parametro</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "limit",
            "description": "<p>cuantos datos se van a listar</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lT: [{idVehiculoTipo, vehiculoTipo}]}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos el vehículo no existe.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_vehiculoCovid.js",
    "groupTitle": "C_VEHICULO",
    "name": "PostCVehiculoListaTipo"
  },
  {
    "type": "post",
    "url": "/c/vehiculo/registrar",
    "title": "registrar",
    "group": "C_VEHICULO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "idAdministrador",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCiudad",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "idCooperativa",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idTipoVehiculo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..10",
            "optional": false,
            "field": "placa",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..10",
            "optional": true,
            "field": "registroMunicipal",
            "description": "<p>registro municipal</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..50",
            "optional": true,
            "field": "marcaModelo",
            "description": "<p>marca y modelo</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "allowedValues": [
              "1",
              "2",
              "3"
            ],
            "optional": false,
            "field": "tipoRegistro",
            "description": "<p>1: Pre_registro, 2: App_Parther, 3 Salvoconducto</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "allowedValues": [
              "1",
              "2"
            ],
            "optional": false,
            "field": "tipoDocumento",
            "description": "<p>1: Cedula, 2: Pasaporte</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..11",
            "optional": false,
            "field": "documento",
            "description": "<p>documento de indetindad</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..120",
            "optional": false,
            "field": "nombres",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..12",
            "optional": false,
            "field": "telefono",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "0..250",
            "optional": true,
            "field": "observacion",
            "description": "<p>250</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: 'Registro realizado correctamente.', idVehiculo:idVehiculo}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Lo sentimos, por favor intenta de nuevo más tarde.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_c_vehiculoCovid.js",
    "groupTitle": "C_VEHICULO",
    "name": "PostCVehiculoRegistrar"
  },
  {
    "type": "post",
    "url": "/reporte-piratas/alamcenar-imagen",
    "title": "alamcenar-imagen",
    "group": "Piratas",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "imagen",
            "description": "<p>imagen que poseera el nombre el id enviado en el rest reportar, sin extencion.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{ en: 1, m: 'Archivo subido corrctamente..'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de eventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "res/r_reporte_piratas.js",
    "groupTitle": "Piratas",
    "name": "PostReportePiratasAlamcenarImagen"
  },
  {
    "type": "post",
    "url": "/reporte-piratas/buscar",
    "title": "buscar",
    "group": "Piratas",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "placa",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lD: [{img, color, denuncia, latitud, longitud, fecha}]}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de eventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "res/r_reporte_piratas.js",
    "groupTitle": "Piratas",
    "name": "PostReportePiratasBuscar"
  },
  {
    "type": "post",
    "url": "/reporte-piratas/reportar",
    "title": "reportar",
    "group": "Piratas",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "idUsuario",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "idVehiculo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "placa",
            "description": "<p>maximo 10 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "color",
            "description": "<p>maximo 15 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "denuncia",
            "description": "<p>maximo 250 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "latitud",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "longitud",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{ en: 1, id: 'Entero con el id unico por reporte que se inserto en base', m: 'Reporte enviado correctamente.'}</p>"
          }
        ],
        "Execpcional": [
          {
            "group": "Execpcional",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m : 'El reporte no se almacenó por favor comunicate con kradac.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de eventos, una vez esto se llamara el rest de almacenamiento de foto enviando \ncomo nombre el id que se pasa aquí.",
          "type": "json"
        },
        {
          "title": "Execpcional:",
          "content": "Flujo alterno de eventos, no se puede llamar el rest de almacenamiento de foto.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "res/r_reporte_piratas.js",
    "groupTitle": "Piratas",
    "name": "PostReportePiratasReportar"
  },
  {
    "type": "delete",
    "url": "/x/describ/eliminar-car/",
    "title": "eliminar-car",
    "group": "R_TK",
    "version": "2.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "con",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "numberCar",
            "description": "<p>base64</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "conCar",
            "description": "<p>base64</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>sha256(timeStanD + md5(imei))</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>md5(imei + idCliente + con)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timeStanD",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de eventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_x_describ.js",
    "groupTitle": "R_TK",
    "name": "DeleteXDescribEliminarCar"
  },
  {
    "type": "post",
    "url": "/x/describ/comprar-boleto/",
    "title": "comprar boleto",
    "group": "R_TK",
    "version": "2.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "idBoleto",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "pases",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "con",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "costo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>sha256(timeStanD + md5(imei))</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>md5(phoneNumber + idCliente + con)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timeStanD",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de eventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_x_describ.js",
    "groupTitle": "R_TK",
    "name": "PostXDescribComprarBoleto"
  },
  {
    "type": "post",
    "url": "/x/describ/listar-car/",
    "title": "listar-car",
    "group": "R_TK",
    "version": "2.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "con",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>sha256(timeStanD + md5(imei))</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>md5(imei + idCliente + con)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timeStanD",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de eventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_x_describ.js",
    "groupTitle": "R_TK",
    "name": "PostXDescribListarCar"
  },
  {
    "type": "post",
    "url": "/x/describ/realizar-pago/",
    "title": "realizar pago",
    "group": "R_TK",
    "version": "2.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "idProceso",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "con",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "costo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>sha256(timeStanD + md5(imei))</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>md5(phoneNumber + idCliente + con)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timeStanD",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de eventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_x_describ.js",
    "groupTitle": "R_TK",
    "name": "PostXDescribRealizarPago"
  },
  {
    "type": "post",
    "url": "/x/describ/registrar-car/",
    "title": "registrar-car",
    "group": "R_TK",
    "version": "2.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "con",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "verificationCode",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>base64</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "expirationMonth",
            "description": "<p>base64</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "expirationYear",
            "description": "<p>base64</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>sha256(timeStanD + md5(imei))</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>md5(phoneNumber + idCliente + expirationYear)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timeStanD",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de eventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_x_describ.js",
    "groupTitle": "R_TK",
    "name": "PostXDescribRegistrarCar"
  },
  {
    "type": "post",
    "url": "/x/describ/solicitar-token/",
    "title": "solicitar-token",
    "group": "R_TK",
    "version": "2.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "correo",
            "description": "<p>base64</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "celular",
            "description": "<p>base64 tal cual esta registrado en el sistema. 0969901641</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombres",
            "description": "<p>base64</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apellidos",
            "description": "<p>base64</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>sha256(timeStanD + md5(imei))</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>md5(celular + idCliente + apellidos)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timeStanD",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: 'Ok'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de eventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_x_describ.js",
    "groupTitle": "R_TK",
    "name": "PostXDescribSolicitarToken"
  },
  {
    "type": "post",
    "url": "/x/fedkack/enviar-contacto",
    "title": "enviar contacto",
    "group": "X_FEDBACK",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idMotivoContacto",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contacto",
            "description": "<p>maximo 800 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "latitud",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "longitud",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "gps",
            "description": "<p>0=&gt;gps indefinido 1=&gt;gps activo 2=&gt;gps inactivo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": "<p>imei del dispositivo que envia el contacto maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>version sistema operativo maximo 20 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version app maximo 20 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tipo",
            "description": "<p>1=&gt;WEB 2=&gt;APP 3=&gt;ADMINISTRADOR</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>1=&gt;iOS 2=&gt;ANDROID 3=&gt;WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>maximo 60 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>maximo 60 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idCiudad",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, m: 'Contacto enviado correctamente, agradecemos tú tiempo estamos para mejorar'}</p>"
          }
        ],
        "Execpcional_1": [
          {
            "group": "Execpcional_1",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: -1, m: 'Ups lo sentimos, por favor intenta de nuevo más tarde.'}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos:",
          "type": "json"
        },
        {
          "title": "Execpcional_1:",
          "content": "Flujo alterno de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "res/r_fedkack.js",
    "groupTitle": "X_FEDBACK",
    "name": "PostXFedkackEnviarContacto"
  },
  {
    "type": "post",
    "url": "/x/fedkack/listar-motivos-contacto",
    "title": "lista motivos del contacto",
    "group": "X_FEDBACK",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tipo",
            "description": "<p>1 cuando es un cliente y 2 cuando es un controlador</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lMC: [{idMotivoContacto, motivo}]}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Fujo normal de eventos:",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "res/r_fedkack.js",
    "groupTitle": "X_FEDBACK",
    "name": "PostXFedkackListarMotivosContacto"
  },
  {
    "type": "post",
    "url": "/x/llave/solicitar-claves",
    "title": "solicitar claves",
    "group": "X_LLAVE",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idServicioSectorCategoria",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "fecha",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lR: [{r.idReservaEstadoCliente, re.estado,  r.fecha, r.hora, r.tiempo, r.observacion, lc.alias, lc.referencia}]}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_x_llave.js",
    "groupTitle": "X_LLAVE",
    "name": "PostXLlaveSolicitarClaves"
  },
  {
    "type": "post",
    "url": "/x/llave/solicitar-token",
    "title": "solicitar token",
    "group": "X_LLAVE",
    "version": "3.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idAplicativo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idCliente",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idPlataforma",
            "description": "<p>iOs, Android, WEB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marca",
            "description": "<p>marca del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>del del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so",
            "description": "<p>sistema operativo del dispositivo. Maximo 45 caracteres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vs",
            "description": "<p>version del APP formato obligatorio (numbre.numbre.number). Maximo 45 caracteres</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{en: 1, lR: [{r.idReservaEstadoCliente, re.estado,  r.fecha, r.hora, r.tiempo, r.observacion, lc.alias, lc.referencia}]}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Flujo normal de enventos.",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "json",
            "description": "<p>{error: CODIGO_ERROR};</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Los errores devuelve desde el estado de error -200 y menores",
          "type": "json"
        }
      ]
    },
    "filename": "res/r_x_llave.js",
    "groupTitle": "X_LLAVE",
    "name": "PostXLlaveSolicitarToken"
  }
] });
