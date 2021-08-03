const React = require("react")

exports.wrapRootElement = ({ element }) => {
  return (
    <Provider values={values}>
      {element}
    </Provider>
  )
}