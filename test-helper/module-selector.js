import OPTIONS from './option-types';
import selectedConfigOption from './selected-config-option';

export default ((configOption) => {
  switch (configOption) {
    case OPTIONS.USE_INDEX_BASED_MUTATION:
    case OPTIONS.USE_INDEX_BASED_MUTATION_V15:
      return require('vue-storybook');
    case OPTIONS.USE_RESOURCE_QUERY:
      // return require('vue-storybook-2');
      break; /* eslint-disable-line */
    case OPTIONS.USE_INJECT_UTILITY:
    case OPTIONS.USE_RESOURCE_QUERY_AMOSHYDRA:
    default:
      return require('vue-storybook-3');
  }
})(selectedConfigOption);
