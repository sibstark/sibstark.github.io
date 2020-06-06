const React = require("react");

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents()
  const description = (
    <meta name="description" content="Oleg Bryukhanov CV" />
  );
  const author = (<meta name="author" content="Oleg Bryukhanov" />);
  const additionHead = [description, author];
  replaceHeadComponents(headComponents.concat(additionHead));
}
