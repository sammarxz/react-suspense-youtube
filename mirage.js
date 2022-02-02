import { createServer } from "miragejs";

export function makeServer({ env = "test" } = {}) {
  let server = createServer({
    env,
    timing: 750,
    routes() {
      this.namespace = "api";

      this.get(
        "/twitter",
        () => {
          return {
            stat: "71,897",
            change: "122",
            changeType: "increase",
          };
        },
        { timing: 750 }
      );

      this.get(
        "/youtube",
        () => {
          return {
            stat: "33,581",
            change: "412",
            changeType: "decrease",
          };
        },
        { timing: 1750 }
      );

      this.get(
        "/instagram",
        () => {
          return {
            stat: "14,581",
            change: "24",
            changeType: "increase",
          };
        },
        { timing: 500 }
      );

      this.namespace = "";
      this.passthrough();
    },
  });

  // Don't log passthrough
  server.pretender.passthroughRequest = () => {};

  return server;
}
