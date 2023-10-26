module.exports = ({ cache }) => {
  cache(true);
  const presets = [
    [
      'next/babel',
      {
        'preset-react': {
          runtime: 'automatic',
        },
      },
    ],
  ];
  const plugins = [
    [
      'formatjs',
      {
        idInterpolationPattern: '[sha512:contenthash:base64:6]',
        ast: true,
      },
    ],
  ];

  return {
    env: {
      development: {
        presets,
        plugins,
      },
      production: {
        presets,
        plugins,
      },
      test: {
        presets,
        plugins,
      },
    },
  };
};
