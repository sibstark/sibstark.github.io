const React = require("react");

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents()
  const webMonetizationTag = (
    <meta name="monetization" content="biba" />
  );
  headComponents.push(webMonetizationTag);
  console.log(headComponents)
  replaceHeadComponents(headComponents)
}
