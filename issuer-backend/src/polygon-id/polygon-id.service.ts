import { render } from "ejs";
const deepLinkTemplate = `
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        font-family: "Roboto", Tahoma, Geneva, Verdana, sans-serif;
      }
      .centered {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }
      button {
        border-radius: 10px;
        font-size: 5vw;
        border: none;
        padding: 10px;
        background-color: #7e56c2;
        color: white;
      }
    </style>
  </head>
  <body>
    <div class="centered">
      <button>
        <a
          style="text-decoration: none; color: white;"
          href="iden3comm://?i_m=<%= uri %>"
          ><b>Open in Polygon ID App</b></a
        >
      </button>
    </div>
  </body>
</html>
 `;

export const renderDeepLink = (uri: string) => {
  const renderedTemplate = render(deepLinkTemplate, { uri: uri });
  return renderedTemplate;
};
