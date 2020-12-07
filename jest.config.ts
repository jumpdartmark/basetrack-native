// jest.config.ts
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    preset: 'jest-expo',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testMatch: [
        '**/__tests__/**/*.ts?(x)',
        '**/?(*.)+(spec|test).ts?(x)',
    ],
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
    ],
    globals: {
        'ts-jest': {
            tsconfig: {
                jsx: 'react',
            },
        },
    },

};
export default config;
