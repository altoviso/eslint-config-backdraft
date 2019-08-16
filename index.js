module.exports = {
    env: {
        es6: true,
    },
    plugins: [
        'import',
    ],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            generators: false,
            objectLiteralDuplicateProperties: false,
        }
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js'],
            },
        },
        'import/extensions': [
            '.js'
        ],
        'import/core-modules': [],
        'import/ignore': [
            'node_modules',
            '\\.(coffee|scss|css|less|hbs|svg|json)$',
        ],
    },
    rules: {
        'array-bracket-newline': [
            'off',
            'consistent'
        ],
        'array-bracket-spacing': [
            'error',
            'never'
        ],
        'array-callback-return': [
            'error',
            {
                'allowImplicit': true
            }
        ],
        'array-element-newline': [
            'off',
            {
                'multiline': true,
                'minItems': 3
            }
        ],
        'arrow-body-style': [
            'off'
        ],
        'arrow-parens': [
            'error',
            'as-needed'
        ],
        'arrow-spacing': [
            'error',
            {
                'before': true,
                'after': true
            }
        ],
        'block-scoped-var': 'error',
        'block-spacing': [
            'error',
            'always'
        ],
        'brace-style': [
            'error',
            '1tbs',
            {
                'allowSingleLine': true
            }
        ],
        'camelcase': [
            'error',
            {
                'properties': 'never'
            }
        ],
        'capitalized-comments': [
            'off',
            'never',
            {
                'line': {
                    'ignorePattern': '.*',
                    'ignoreInlineComments': true,
                    'ignoreConsecutiveComments': true
                },
                'block': {
                    'ignorePattern': '.*',
                    'ignoreInlineComments': true,
                    'ignoreConsecutiveComments': true
                }
            }
        ],
        'comma-dangle': 'off',
        'comma-spacing': [
            'error',
            {
                'before': false,
                'after': true
            }
        ],
        'comma-style': [
            'error',
            'last',
            {
                'exceptions': {
                    'ArrayExpression': false,
                    'ArrayPattern': false,
                    'ArrowFunctionExpression': false,
                    'CallExpression': false,
                    'FunctionDeclaration': false,
                    'FunctionExpression': false,
                    'ImportDeclaration': false,
                    'ObjectExpression': false,
                    'ObjectPattern': false,
                    'VariableDeclaration': false,
                    'NewExpression': false
                }
            }
        ],
        'complexity': [
            'off',
            11
        ],
        'computed-property-spacing': [
            'error',
            'never'
        ],
        'consistent-return': 'error',
        'constructor-super': 'error',
        'curly': [
            'error',
            'multi-line'
        ],
        'default-case': [
            'error'
        ],
        'dot-location': [
            'error',
            'property'
        ],
        'dot-notation': [
            'error',
            {
                'allowKeywords': true
            }
        ],
        'eol-last': [
            'error',
            'always'
        ],
        'eqeqeq': [
            'error',
            'always'
        ],
        'for-direction': 'error',
        'func-call-spacing': [
            'error',
            'never'
        ],
        'func-name-matching': [
            'off',
            'always',
            {
                'includeCommonJSModuleExports': false
            }
        ],
        'func-names': 'warn',
        'func-style': [
            'off',
            'expression'
        ],
        'function-paren-newline': [
            'error',
            'consistent'
        ],
        'generator-star-spacing': [
            'error',
            {
                'before': false,
                'after': true
            }
        ],
        'getter-return': [
            'error',
            {
                'allowImplicit': true
            }
        ],
        'global-require': 'error',
        'guard-for-in': 'error',
        'import/dynamic-import-chunkname': [
            'off',
            {
                'importFunctions': [],
                'webpackChunknameFormat': '[0-9a-zA-Z-_/.]+'
            }
        ],
        'import/export': 'error',
        'import/first': 'error',
        'import/max-dependencies': [
            'off',
            {
                'max': 10
            }
        ],
        'import/named': 'error',
        'import/newline-after-import': 'error',
        'import/no-absolute-path': 'error',
        'import/no-amd': 'error',
        'import/no-anonymous-default-export': [
            'off',
            {
                'allowArray': false,
                'allowArrowFunction': false,
                'allowAnonymousClass': false,
                'allowAnonymousFunction': false,
                'allowLiteral': false,
                'allowObject': false
            }
        ],
        'import/no-cycle': [
            'error',
        ],
        'import/no-duplicates': 'error',
        'import/no-dynamic-require': 'error',
        'import/no-internal-modules': [
            'off',
            {
                'allow': []
            }
        ],
        'import/no-mutable-exports': 'error',
        'import/no-named-as-default': 'error',
        'import/no-named-as-default-member': 'error',
        'import/no-named-default': 'error',
        'import/no-self-import': 'error',
        'import/no-unresolved': [
            'error',
            {
                'commonjs': true,
                'caseSensitive': true
            }
        ],
        'import/no-useless-path-segments': 'error',
        'import/no-webpack-loader-syntax': 'error',
        'import/order': [
            'error',
            {
                'groups': [
                    [
                        'builtin',
                        'external',
                        'internal'
                    ]
                ]
            }
        ],
        'indent': [
            'error',
            4,
            {
                'SwitchCase': 1
            }
        ],
        'key-spacing': [
            'error',
            {
                'mode': 'minimum'
            }
        ],
        'keyword-spacing': [
            'error',
            {
                'before': true,
                'after': true,
                'overrides': {
                    'return': {
                        'after': true
                    },
                    'throw': {
                        'after': true
                    },
                    'case': {
                        'after': true
                    }
                }
            }
        ],
        'line-comment-position': [
            'off',
            {
                'position': 'above',
                'ignorePattern': "",
                'applyDefaultPatterns': true
            }
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'lines-around-directive': [
            'error',
            {
                'before': 'always',
                'after': 'always'
            }
        ],
        'lines-between-class-members': [
            'error',
            'always',
            {
                'exceptAfterSingleLine': true
            }
        ],
        'max-classes-per-file': [
            'off'
        ],
        'max-depth': [
            'off',
            4
        ],
        'max-len': [
            'warn',
            130,
            2,
            {
                'ignoreUrls': true,
                'ignoreComments': false,
                'ignoreRegExpLiterals': true,
                'ignoreStrings': true,
                'ignoreTemplateLiterals': true
            }
        ],
        'max-lines': [
            'off',
            {
                'max': 300,
                'skipBlankLines': true,
                'skipComments': true
            }
        ],
        'max-lines-per-function': [
            'off',
            {
                'max': 50,
                'skipBlankLines': true,
                'skipComments': true,
                'IIFEs': true
            }
        ],
        'max-params': [
            'off',
            3
        ],
        'max-statements': [
            'off',
            10
        ],
        'max-statements-per-line': [
            'off',
            {
                'max': 1
            }
        ],
        'multiline-comment-style': [
            'off',
            'starred-block'
        ],
        'multiline-ternary': [
            'off',
            'never'
        ],
        'new-cap': [
            'error',
            {
                'newIsCap': true,
                'newIsCapExceptions': [],
                'capIsNew': false,
                'capIsNewExceptions': [
                    'Immutable.Map',
                    'Immutable.Set',
                    'Immutable.List'
                ]
            }
        ],
        'new-parens': 'error',
        'newline-per-chained-call': [
            'error',
            {
                'ignoreChainWithDepth': 4
            }
        ],
        'no-alert': 'warn',
        'no-array-constructor': 'error',
        'no-await-in-loop': 'error',
        'no-bitwise': 'error',
        'no-buffer-constructor': 'error',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-class-assign': 'error',
        'no-compare-neg-zero': 'error',
        'no-cond-assign': [
            'error',
            'except-parens'
        ],
        'no-console': 'warn',
        'no-const-assign': 'error',
        'no-constant-condition': 'warn',
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-delete-var': 'error',
        'no-dupe-args': 'error',
        'no-dupe-class-members': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-else-return': [
            'off'
        ],
        'no-empty': 'error',
        'no-empty-character-class': 'error',
        'no-empty-function': [
            'error'
        ],
        'no-empty-pattern': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-ex-assign': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-label': 'error',
        'no-extra-parens': [
            'off',
            'all',
            {
                'conditionalAssign': true,
                'nestedBinaryExpressions': false,
                'returnAssign': false,
                'enforceForArrowConditionals': false
            }
        ],
        'no-extra-semi': 'error',
        'no-fallthrough': 'error',
        'no-floating-decimal': 'error',
        'no-func-assign': 'error',
        'no-global-assign': [
            'error',
            {
                'exceptions': []
            }
        ],
        'no-implicit-coercion': [
            'off',
            {
                'boolean': false,
                'number': true,
                'string': true,
                'allow': []
            }
        ],
        'no-implied-eval': 'error',
        'no-inner-declarations': 'error',
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-iterator': 'error',
        'no-label-var': 'error',
        'no-labels': [
            'error',
            {
                'allowLoop': false,
                'allowSwitch': false
            }
        ],
        'no-lone-blocks': 'error',
        'no-lonely-if': 'error',
        'no-loop-func': 'error',
        'no-magic-numbers': [
            'off',
            {
                'ignore': [],
                'ignoreArrayIndexes': true,
                'enforceConst': true,
                'detectObjects': false
            }
        ],
        'no-mixed-operators': [
            'error',
            {
                'allowSamePrecedence': true
            }
        ],
        'no-mixed-requires': [
            'off',
            false
        ],
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-assign': [
            'off'
        ],
        'no-multi-spaces': [
            'error',
            {
                'ignoreEOLComments': true,
                'exceptions': {
                    'ArrayExpression': true,
                    'VariableDeclarator': true
                }
            }
        ],
        'no-multi-str': 'error',
        'no-multiple-empty-lines': [
            'error',
            {
                'max': 2,
                'maxEOF': 0
            }
        ],
        'no-nested-ternary': 'off',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-object': 'error',
        'no-new-require': 'error',
        'no-new-symbol': 'error',
        'no-new-wrappers': 'error',
        'no-obj-calls': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': [
            'off'
        ],
        'no-path-concat': 'error',
        'no-plusplus': 'off',
        'no-proto': 'error',
        'no-redeclare': 'error',
        'no-regex-spaces': 'error',
        'no-restricted-globals': [
            'error',
            'isFinite',
            'isNaN',
            'addEventListener',
            'blur',
            'close',
            'closed',
            'confirm',
            'defaultStatus',
            'event',
            'external',
            'defaultstatus',
            'find',
            'focus',
            'frameElement',
            'frames',
            'history',
            'innerHeight',
            'innerWidth',
            'length',
            'location',
            'locationbar',
            'menubar',
            'moveBy',
            'moveTo',
            'name',
            'onblur',
            'onerror',
            'onfocus',
            'onload',
            'onresize',
            'onunload',
            'open',
            'opener',
            'opera',
            'outerHeight',
            'outerWidth',
            'pageXOffset',
            'pageYOffset',
            'parent',
            'print',
            'removeEventListener',
            'resizeBy',
            'resizeTo',
            'screen',
            'screenLeft',
            'screenTop',
            'screenX',
            'screenY',
            'scroll',
            'scrollbars',
            'scrollBy',
            'scrollTo',
            'scrollX',
            'scrollY',
            'self',
            'status',
            'statusbar',
            'stop',
            'toolbar',
            'top'
        ],
        'no-restricted-imports': [
            'off',
            {
                'paths': [],
                'patterns': []
            }
        ],
        'no-restricted-properties': [
            'error',
            {
                'object': 'arguments',
                'property': 'callee',
                'message': 'arguments.callee is deprecated'
            },
            {
                'object': 'global',
                'property': 'isFinite',
                'message': 'Please use Number.isFinite instead'
            },
            {
                'object': 'self',
                'property': 'isFinite',
                'message': 'Please use Number.isFinite instead'
            },
            {
                'object': 'window',
                'property': 'isFinite',
                'message': 'Please use Number.isFinite instead'
            },
            {
                'object': 'global',
                'property': 'isNaN',
                'message': 'Please use Number.isNaN instead'
            },
            {
                'object': 'self',
                'property': 'isNaN',
                'message': 'Please use Number.isNaN instead'
            },
            {
                'object': 'window',
                'property': 'isNaN',
                'message': 'Please use Number.isNaN instead'
            },
            {
                'property': '__defineGetter__',
                'message': 'Please use Object.defineProperty instead.'
            },
            {
                'property': '__defineSetter__',
                'message': 'Please use Object.defineProperty instead.'
            },
            {
                'object': 'Math',
                'property': 'pow',
                'message': 'Use the exponentiation operator (**) instead.'
            }
        ],
        'no-restricted-syntax': [
            'error',
            {
                'selector': 'ForInStatement',
                'message': 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.'
            },
            {
                'selector': 'LabeledStatement',
                'message': 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
            },
            {
                'selector': 'WithStatement',
                'message': '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
            }
        ],
        'no-return-assign': [
            'error',
            'except-parens'
        ],
        'no-return-await': 'error',
        'no-script-url': 'error',
        'no-self-assign': [
            'error',
            {
                'props': false
            }
        ],
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-shadow': 'warn',
        'no-spaced-func': 'error',
        'no-sparse-arrays': 'error',
        'no-tabs': 'error',
        'no-template-curly-in-string': 'error',
        'no-this-before-super': 'error',
        'no-throw-literal': 'error',
        'no-trailing-spaces': [
            'error',
            {
                'skipBlankLines': false,
                'ignoreComments': false
            }
        ],
        'no-undef': 'error',
        'no-undef-init': 'error',
        'no-unexpected-multiline': 'error',
        'no-unneeded-ternary': [
            'error',
            {
                'defaultAssignment': false
            }
        ],
        'no-unreachable': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'no-unused-expressions': [
            'error',
            {
                'allowShortCircuit': true,
                'allowTernary': true,
                'allowTaggedTemplates': false
            }
        ],
        'no-unused-labels': 'error',
        'no-unused-vars': [
            'error',
            {
                'vars': 'all',
                'args': 'after-used',
                'ignoreRestSiblings': true
            }
        ],
        'no-use-before-define': [
            'error',
            {
                'functions': false,
                'classes': true
            }
        ],
        'no-useless-computed-key': 'error',
        'no-useless-concat': 'error',
        'no-useless-constructor': 'error',
        'no-useless-escape': 'error',
        'no-useless-rename': [
            'error',
            {
                'ignoreDestructuring': false,
                'ignoreImport': false,
                'ignoreExport': false
            }
        ],
        'no-useless-return': 'error',
        'no-var': 'error',
        'no-void': 'error',
        'no-warning-comments': [
            'off',
            {
                'terms': [
                    'todo',
                    'fixme',
                    'xxx'
                ],
                'location': 'start'
            }
        ],
        'no-whitespace-before-property': 'error',
        'no-with': 'error',
        'nonblock-statement-body-position': [
            'error',
            'beside',
            {
                'overrides': {}
            }
        ],
        'object-curly-newline': [
            'error',
            {
                'multiline': true,
                'consistent': true
            }
        ],
        // 'object-curly-spacing': [
        //     'error',
        //     'always'
        // ],
        'object-curly-spacing': [
            'off'
        ],
        'object-property-newline': [
            'error',
            {
                'allowAllPropertiesOnSameLine': true
            }
        ],
        'object-shorthand': [
            'error',
            'always',
            {
                'ignoreConstructors': false,
                'avoidQuotes': true
            }
        ],
        'one-var': 'off',
        'one-var-declaration-per-line': [
            'error',
            'always'
        ],
        'operator-assignment': [
            'error',
            'always'
        ],
        'padded-blocks': [
            'error',
            {
                'blocks': 'never',
                'classes': 'never',
                'switches': 'never'
            }
        ],
        'padding-line-between-statements': [
            'off'
        ],
        'prefer-arrow-callback': [
            'error',
            {
                'allowNamedFunctions': false,
                'allowUnboundThis': true
            }
        ],
        'prefer-const': [
            'error',
            {
                'destructuring': 'all'
            }
        ],
        'prefer-numeric-literals': 'error',
        'prefer-object-spread': 'error',
        'prefer-promise-reject-errors': [
            'error',
            {
                'allowEmptyReject': true
            }
        ],
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'quote-props': [
            'error',
            'as-needed',
            {
                'keywords': false,
                'unnecessary': true,
                'numbers': false
            }
        ],
        'quotes': [
            'error',
            'single',
            {
                'avoidEscape': true
            }
        ],
        'radix': 'error',
        'require-yield': 'error',
        'rest-spread-spacing': [
            'error',
            'never'
        ],
        'semi': [
            'error',
            'always'
        ],
        'semi-spacing': [
            'error',
            {
                'before': false,
                'after': true
            }
        ],
        'semi-style': [
            'error',
            'last'
        ],
        'sort-imports': [
            'off',
            {
                'ignoreCase': false,
                'ignoreMemberSort': false,
                'memberSyntaxSortOrder': [
                    'none',
                    'all',
                    'multiple',
                    'single'
                ]
            }
        ],
        'sort-keys': [
            'off',
            'asc',
            {
                'caseSensitive': false,
                'natural': true
            }
        ],
        'sort-vars': 'off',
        'space-before-blocks': 'error',
        'space-before-function-paren': [
            'error',
            {
                'anonymous': 'always',
                'named': 'never',
                'asyncArrow': 'always'
            }
        ],
        'space-in-parens': [
            'error',
            'never'
        ],
        'space-infix-ops': 'error',
        'space-unary-ops': [
            'error',
            {
                'words': true,
                'nonwords': false,
                'overrides': {}
            }
        ],
        'spaced-comment': [
            'error',
            'always',
            {
                'line': {
                    'exceptions': [
                        '-',
                        '+'
                    ],
                    'markers': [
                        '=',
                        '!'
                    ]
                },
                'block': {
                    'exceptions': [
                        '-',
                        '+'
                    ],
                    'markers': [
                        '=',
                        '!'
                    ],
                    'balanced': true
                }
            }
        ],
        'strict': [
            'error',
            'never'
        ],
        'switch-colon-spacing': [
            'error',
            {
                'after': true,
                'before': false
            }
        ],
        'symbol-description': 'error',
        'template-curly-spacing': 'error',
        'template-tag-spacing': [
            'error',
            'never'
        ],
        'unicode-bom': [
            'error',
            'never'
        ],
        'use-isnan': 'error',
        'valid-typeof': [
            'error',
            {
                'requireStringLiterals': true
            }
        ],
        'vars-on-top': 'error',
        'wrap-iife': [
            'error',
            'outside',
            {
                'functionPrototypeMethods': false
            }
        ],
        'yield-star-spacing': [
            'error',
            'after'
        ],
        'yoda': 'error'
    }
};
