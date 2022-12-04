module.exports = {
    default: {
        publishQuiet: true,
        requireModule: ['ts-node/register'],
        require: ['src/steps/**/*.ts', 'src/hooks/*.ts'],
    },
};
