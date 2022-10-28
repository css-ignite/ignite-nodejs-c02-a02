import { Router } from "express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerRoutes = Router();

const swaggerApiDescription = `
  <h1>aa</h1>
  This is a sample Pet Store Server based on the OpenAPI 3.0 specification. \n
  You can find out more about Swagger at [https://swagger.io](https://swagger.io). \n
  In the third iteration of the pet store, we've switched to the design first approach!
  You can now help us improve the API whether it's by making changes to the definition itself or to the code.
  That way, with time, we can improve the API in general, and expose some of the new features in OAS3.\n\n
  If you're looking for the Swagger 2.0/OAS 2.0 version of Petstore, then click:
  [here](https://editor.swagger.io/?url=https://petstore.swagger.io/v2/swagger.yaml).
  Alternatively, you can load via the Edit > Load Petstore OAS 2.0 menu option!_
  Some useful links:
  - [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)
  - [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.ya
  `;

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.3",
    info: {
      title: "SPALLA - Api de Integração 1.0",
      version: "1.0.11",
      description: swaggerApiDescription,
      termsOfService: "http://swagger.io/terms/",
      contact: {
        email: "apiteam@swagger.io",
      },
      license: {
        name: "Apache 2.0",
        url: "http://www.apache.org/licenses/LICENSE-2.0.html",
      },
    },
    externalDocs: {
      description: "Find out more about Swagger",
      url: "http://swagger.io",
    },
    servers: [
      {
        url: "{protocol}://{baseUrl}:{port}/v1",
        variables: {
          protocol: {
            enum: ["http", "https"],
            default: "http",
          },
          baseUrl: {
            default: "localhost",
            description:
              "This value is assigned by the service provider, in this example `gigantic-server.com`",
          },
          port: {
            enum: ["3333", "80", "8080"],
            default: "3333",
          },
        },
      },
    ],
    components: {
      schemas: {
        Category: {
          type: "object",
          properties: {
            id: {
              type: "string",
              example: "0868191f-849a-482c-b0aa-83bd254cdcb5",
            },
            name: {
              type: "string",
              example: "SUV",
            },
            description: {
              type: "string",
              example: "Veículo utilitário esportivo ou Veículo Desportivo",
            },
            shipDate: {
              type: "string",
              format: "date-time",
              example: "2022-10-27T15:00:32.255Z",
            },
          },
          xml: {
            name: "Category",
          },
        },
        Specifications: {
          type: "object",
          properties: {
            id: {
              type: "string",
              example: "0868191f-849a-482c-b0aa-83bd254cdcb5",
            },
            name: {
              type: "string",
              example: "Airbags",
            },
            description: {
              type: "string",
              example:
                "Os airbags são almofadas de enchimento rápido destinadas a proteger os passageiros em caso de colisão.",
            },
            shipDate: {
              type: "string",
              format: "date-time",
              example: "2022-10-27T15:00:32.255Z",
            },
          },
          xml: {
            name: "Category",
          },
        },
        ApiError: {
          type: "object",
          properties: {
            error: {
              type: "string",
            },
          },
          xml: {
            name: "##default",
          },
        },
        ApiResponse: {
          type: "object",
          properties: {
            code: {
              type: "integer",
              format: "int32",
            },
            type: {
              type: "string",
            },
            message: {
              type: "string",
            },
          },
          xml: {
            name: "##default",
          },
        },
      },
    },
  },
  apis: ["**/*.ts"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

// swaggerRoutes.use(
//   "/swagger/default",
//   swaggerUi.serve,
//   swaggerUi.setup(swaggerDocs)
// );

swaggerRoutes.use("/swagger", swaggerUi.serve);

swaggerRoutes.get(
  "/swagger",
  swaggerUi.setup(null, {
    swaggerOptions: {
      url: "/swagger/swagger.json",
    },
  })
);

swaggerRoutes.get("/swagger/swagger.json", (req, res) => res.json(swaggerDocs));

swaggerRoutes.get("/swagger/docs", (request, response) => {
  const { protocol, baseUrl } = request;
  const fullUrl = `${protocol}://${request.get("host")}${baseUrl}`;

  const htmlFile = `
    <body>
      <div id="redoc-container"></div>
      <script src="https://cdn.jsdelivr.net/npm/redoc@2.0.0-rc.55/bundles/redoc.standalone.min.js"> </script>
      <script src="https://cdn.jsdelivr.net/gh/wll8/redoc-try@1.4.1/dist/try.js"></script>
      <script>
        initTry({
          openApi:'${fullUrl}/swagger/swagger.json'
        });
      </script>
    </body>
  `;

  response.send(htmlFile);
});

export { swaggerRoutes };
