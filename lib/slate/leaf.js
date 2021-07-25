import PropTypes from 'prop-types';

// text nodes in slate.js are considered leaves .
// create a function called Leaf which will change style of text
import markFormats from '../../components/editor/utils/markFormats';
import renderMarkStyles from './renderStyles/renderMarkStyle';
export const Leaf = (props) => {
  const renderLeafStyles = () => {
    let markStyles = {};
    let mark = props.leaf;

    markFormats.forEach((format) => {
      if (mark[format.format]) {
        let formatStyle = format.style;
        markStyles = { ...markStyles, ...format.style };
      }
    });
    return markStyles;
  };

  return (
    <span {...props.attributes} style={renderLeafStyles()}>
      {props.children}
    </span>
  );
};

Leaf.propTypes = {
  leaf: PropTypes.object,
  children: PropTypes.node,
  attributes: PropTypes.object,
};
