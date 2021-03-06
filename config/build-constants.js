const { lstatSync, readdirSync } = require('fs')
const { join } = require('path')

const react = {
    commonjs: 'react',
    commonjs2: 'react',
    amd: 'react',
    root: 'React',
};
  
const reactDom = {
    commonjs: 'react-dom',
    commonjs2: 'react-dom',
    amd: 'react-dom',
    root: 'ReactDOM',
};

const pfReact = {
    commonjs: 'patternfly-react',
    commonjs2: 'patternfly-react',
    amd: 'patternfly-react',
    root: 'PFReact',
};

const pfReactIcons = {
    commonjs: '@patternfly/react-icons',
    commonjs2: '@patternfly/react-icons',
    amd: '@patternfly/react-icons',
    root: 'PFReactIcons',
}

const pfReactCore = {
    commonjs: '@patternfly/react-core',
    commonjs2: '@patternfly/react-core',
    amd: '@patternfly/react-core',
    root: 'PFReactCore',
}

const redux = {
    commonjs: 'redux',
    commonjs2: 'redux',
    amd: 'redux',
    root: 'Redux',
};

const createReactClass = {
    commonjs: 'create-react-class',
    commonjs2: 'create-react-class',
    amd: 'create-react-class',
    root: 'ReactCreateClass',
}

const reactRedux = {
    commonjs: 'react-redux',
    commonjs2: 'react-redux',
    amd: 'react-redux',
    root: 'ReactRedux',
};

const isDirectory = source => lstatSync(source).isDirectory();

const getDirectories = (source, dest) =>
  readdirSync(source)
    .filter(name => name.indexOf('utils') === -1)
    .map(name => {
      const key = `${dest}/${name}`;
      return {
          [key]: './' + join(source, `${name}/index.js`)
        }
    })
    .reduce((acc, curr) => ({...acc, ...curr}), {})
const entries = {
    'Utilities/ReducerRegistry': './src/Utilities/ReducerRegistry.js',
    'Utilities/helpers': './src/Utilities/helpers.js',
    'Utilities/MiddlewareListener': './src/Utilities/MiddlewareListener.js',
    ...getDirectories('./src/PresentationalComponents', 'components'),
    ...getDirectories('./src/SmartComponents', 'components'),
    ...getDirectories('./src/Charts', 'charts')
}

module.exports = {
    entries,
    externals: {
        react,
        redux,
        'create-react-class': createReactClass,
        'patternfly-react': pfReact,
        'react-dom': reactDom,
        'react-redux': reactRedux,
        classnames: 'classnames',
        '@patternfly/react-core': pfReactCore,
        '@patternfly/react-icons': pfReactIcons,
        d3: 'd3',
        c3: 'c3'
    },
};
