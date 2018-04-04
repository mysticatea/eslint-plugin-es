/**
 * @author Yosuke Ota <https://github.com/ota-meshi>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const STRING_METHODS_TO_RETURN_STRING = [
    "charAt",
    "concat",
    "normalize",
    "padEnd",
    "padStart",
    "repeat",
    "replace",
    "slice",
    "substr",
    "substring",
    "toLocaleLowerCase",
    "toLocaleUpperCase",
    "toLowerCase",
    "toString",
    "toUpperCase",
    "trim",
    "trimLeft",
    "trimRight",
    "valueOf",
]
const STRING_METHODS_TO_RETURN_ARRAY = ["match", "split"]
const STRING_METHODS_TO_RETURN_NUMBER = [
    "charCodeAt",
    "codePointAt",
    "indexOf",
    "lastIndexOf",
    "localeCompare",
    "search",
]
const STRING_PROPS_TO_TYPE_NUMBER = ["length"]

const ARRAY_METHODS_TO_RETURN_STRING = ["join"]
const ARRAY_METHODS_TO_RETURN_ARRAY = [
    "concat",
    "copyWithin",
    "fill",
    "filter",
    "flatMap",
    "flatten",
    "map",
    "reverse",
    "slice",
    "sort",
    "splice",
]
const ARRAY_METHODS_TO_RETURN_NUMBER = [
    "findIndex",
    "indexOf",
    "lastIndexOf",
    "push",
]
const ARRAY_PROPS_TO_TYPE_NUMBER = ["length"]

const NUMBER_METHODS_TO_RETURN_STRING = [
    "toExponential",
    "toFixed",
    "toLocaleString",
    "toPrecision",
    "toString",
]
const NUMBER_METHODS_TO_RETURN_NUMBER = ["valueOf"]

const DATE_METHODS_TO_RETURN_STRING = [
    "toDateString",
    "toISOString",
    "toJSON",
    "toLocaleDateString",
    "toLocaleString",
    "toLocaleTimeString",
    "toString",
    "toTimeString",
    "toUTCString",
    "valueOf",
]
const DATE_METHODS_TO_RETURN_NUMBER = [
    "getDate",
    "getDay",
    "getFullYear",
    "getHours",
    "getMilliseconds",
    "getMinutes",
    "getMonth",
    "getSeconds",
    "getTime",
    "getTimezoneOffset",
    "getUTCDate",
    "getUTCDay",
    "getUTCFullYear",
    "getUTCHours",
    "getUTCMilliseconds",
    "getUTCMinutes",
    "getUTCMonth",
    "getUTCSeconds",
]

const INTL_DATETIMEFORMAT_METHODS_TO_RETURN_STRING = ["format"]
const INTL_DATETIMEFORMAT_METHODS_TO_RETURN_ARRAY = ["formatToParts"]

const INTL_NUMBERFORMAT_METHODS_TO_RETURN_STRING = ["format"]
const INTL_NUMBERFORMAT_METHODS_TO_RETURN_ARRAY = ["formatToParts"]

const OBJECT_METHODS_TO_RETURN_STRING = ["toLocaleString", "toString"]

const GLOBAL_OBJECTS_STATIC_METHODS_TO_RETURN_STRING = [
    "String",
    "String.fromCharCode",
    "String.fromCodePoint",
    "String.raw",
    "JSON.stringify",
    "decodeURI",
    "decodeURIComponent",
    "encodeURI",
    "encodeURIComponent",
]
const GLOBAL_OBJECTS_STATIC_METHODS_TO_RETURN_ARRAY = [
    "Array",
    "Object.keys",
    "Array.from",
    "Array.of",
]
const GLOBAL_OBJECTS_STATIC_METHODS_TO_RETURN_NUMBER = [
    "Number",
    "parseFloat",
    "parseInt",
    "Number.parseFloat",
    "Number.parseInt",
    "Date.now",
]
const GLOBAL_OBJECTS_STATIC_METHODS_TO_RETURN_DATE = [
    "Date",
    "Date.UTC",
    "Date.parse",
]

const GLOBAL_OBJECTS_STATIC_PROPS_TO_TYPE_NUMBER = [
    "NaN",
    "Infinity",
    "Number.EPSILON",
    "Number.MAX_SAFE_INTEGER",
    "Number.MAX_VALUE",
    "Number.MIN_SAFE_INTEGER",
    "Number.MIN_VALUE",
    "Number.NEGATIVE_INFINITY",
    "Number.NaN",
    "Number.POSITIVE_INFINITY",
    "Math.E",
    "Math.LN10",
    "Math.LN2",
    "Math.LOG10E",
    "Math.LOG2E",
    "Math.PI",
    "Math.SQRT1_2",
    "Math.SQRT2",
]

/**
 * Get property name.
 * @param  {ASTNode} node MemberExpression node
 * @returns {string} name
 */
function getMemberPropertyName(node) {
    if (!node.computed) {
        return node.property.name
    } else if (node.property.type === "Literal") {
        return node.property.value
    }
    return null
}

/**
 * Checks if Global objects `String`
 * @param  {ASTNode} node any node
 * @returns {boolean} is `String`
 */
function isStringGlobalObjects(node) {
    return node.type === "Identifier" && node.name === "String"
}

/**
 * Checks if Global objects `Array`
 * @param  {ASTNode} node any node
 * @returns {boolean} is `Array`
 */
function isArrayGlobalObjects(node) {
    return node.type === "Identifier" && node.name === "Array"
}

/**
 * Checks if Global objects `Object`
 * @param  {ASTNode} node any node
 * @returns {boolean} is `Object`
 */
function isObjectGlobalObjects(node) {
    return node.type === "Identifier" && node.name === "Object"
}

/**
 * Checks if Global objects `Number`
 * @param  {ASTNode} node any node
 * @returns {boolean} is `Number`
 */
function isNumberGlobalObjects(node) {
    return node.type === "Identifier" && node.name === "Number"
}

/**
 * Checks if Global objects `Date`
 * @param  {ASTNode} node any node
 * @returns {boolean} is `Date`
 */
function isDateGlobalObjects(node) {
    return node.type === "Identifier" && node.name === "Date"
}

/**
 * Checks if Global objects `Math`
 * @param  {ASTNode} node any node
 * @returns {boolean} is `Math`
 */
function isMathGlobalObjects(node) {
    return node.type === "Identifier" && node.name === "Math"
}

/**
 * Checks if Global objects `Intl.DateTimeFormat`
 * @param  {ASTNode} node any node
 * @returns {boolean} is `Intl.DateTimeFormat`
 */
function isIntlDateTimeFormatGlobalObjects(node) {
    return (
        node.type === "MemberExpression" &&
        node.object.type === "Identifier" &&
        node.object.name === "Intl" &&
        node.property.type === "Identifier" &&
        node.property.name === "DateTimeFormat"
    )
}

/**
 * Checks if Global objects `Intl.NumberFormat`
 * @param  {ASTNode} node any node
 * @returns {boolean} is `Intl.NumberFormat`
 */
function isIntlNumberFormatGlobalObjects(node) {
    return (
        node.type === "MemberExpression" &&
        node.object.type === "Identifier" &&
        node.object.name === "Intl" &&
        node.property.type === "Identifier" &&
        node.property.name === "NumberFormat"
    )
}

/**
 * Get prototype method property and owner object
 * @param  {ASTNode}  node CallExpression node
 * @returns {object} property and owner object
 */
function getCallPrototypeInfo(node) {
    // Checked by caller
    // if (
    //     node.type !== "CallExpression" ||
    //     node.callee.type !== "MemberExpression"
    // ) {
    //     return null
    // }
    const callee = node.callee
    // Foo.prototype.bar.call or apply ?
    const propName = getMemberPropertyName(callee)
    if (propName !== "call" && propName !== "apply") {
        return null
    }

    const methodTarget = node.callee.object
    // Foo.prototype.bar ?
    if (methodTarget.type !== "MemberExpression") {
        return null
    }
    const prototypeTarget = methodTarget.object
    // Foo.prototype ?
    if (
        prototypeTarget.type !== "MemberExpression" ||
        getMemberPropertyName(prototypeTarget) !== "prototype"
    ) {
        return null
    }
    return {
        object: prototypeTarget.object,
        property: methodTarget,
    }
}

/**
 * Returns the prototype property visitor.
 * @param {RuleContext} context The rule context to use parser services.
 * @param  {string}   classType Builtin class type
 * @param  {object} defineObject visitor definition
 * @returns {object} visitor
 */
function definePrototypePropertyVisitor(context, classType, defineObject) {
    const variables = []

    const typeIs = (() => {
        /**
         * checked Nodes
         */
        const checked = new Map()

        /**
         * Get already checked result or result of calling `apply`.
         *
         * @param {ASTNode} node - A node to check.
         * @param {string} type - check type.
         * @param {function} apply - callback.
         * @returns {boolean} `true` if the node is a assignd with `type` node.
         */
        function getCheckedOrApply(node, type, apply) {
            if (checked.has(node)) {
                return checked.get(node) === type
            }
            checked.set(node, null) // Prevent circular reference
            if (apply()) {
                checked.set(node, type)
                return true
            }
            checked.delete(node)
            return false
        }

        return {
            // We plan to use it with `no-function-bind`
            // /**
            //  * Checks whether a given node is a assignd with Function node or not.
            //  *
            //  * @param {ASTNode} node - A node to check.
            //  * @returns {boolean} `true` if the node is a assignd with Function node.
            //  */
            // Function(node) {
            //     return getCheckedOrApply(
            //         node,
            //         "Function",
            //         () =>
            //             isFunctionNode(node) ||
            //             isSpecifiedTypeVariable(node, "Function")
            //     )
            // },
            /**
             * Checks whether a given node is a assignd with string node or not.
             *
             * @param {ASTNode} node - A node to check.
             * @returns {boolean} `true` if the node is a assignd with string node.
             */
            String(node) {
                return getCheckedOrApply(
                    node,
                    "String",
                    () =>
                        isStringNode(node) ||
                        isSpecifiedTypeVariable(node, "String")
                )
            },
            /**
             * Checks whether a given node is a assignd with Array node or not.
             *
             * @param {ASTNode} node - A node to check.
             * @returns {boolean} `true` if the node is a assignd with Array node.
             */
            Array(node) {
                return getCheckedOrApply(
                    node,
                    "Array",
                    () =>
                        isArrayNode(node) ||
                        isSpecifiedTypeVariable(node, "Array")
                )
            },
            /**
             * Checks whether a given node is a assignd with number node or not.
             *
             * @param {ASTNode} node - A node to check.
             * @returns {boolean} `true` if the node is a assignd with number node.
             */
            Number(node) {
                return getCheckedOrApply(
                    node,
                    "Number",
                    () =>
                        isNumberNode(node) ||
                        isSpecifiedTypeVariable(node, "Number")
                )
            },
            /**
             * Checks whether a given node is a assignd with Date node or not.
             *
             * @param {ASTNode} node - A node to check.
             * @returns {boolean} `true` if the node is a assignd with Date node.
             */
            Date(node) {
                return getCheckedOrApply(
                    node,
                    "Date",
                    () =>
                        isDateNode(node) ||
                        isSpecifiedTypeVariable(node, "Date")
                )
            },
            /**
             * Checks whether a given node is a assignd with `Intl.DateTimeFormat` node or not.
             *
             * @param {ASTNode} node - A node to check.
             * @returns {boolean} `true` if the node is a assignd with `Intl.DateTimeFormat` node.
             */
            "Intl.DateTimeFormat"(node) {
                return getCheckedOrApply(
                    node,
                    "Intl.DateTimeFormat",
                    () =>
                        isIntlDateTimeFormatNode(node) ||
                        isSpecifiedTypeVariable(node, "Intl.DateTimeFormat")
                )
            },
            // Checks whether a given node is a assignd with `Intl.NumberFormat` node or not.
            // @param {ASTNode} node - A node to check.
            // @returns {boolean} `true` if the node is a assignd with `Intl.NumberFormat` node.
            "Intl.NumberFormat"(node) {
                return getCheckedOrApply(
                    node,
                    "Intl.NumberFormat",
                    () =>
                        isIntlNumberFormatNode(node) ||
                        isSpecifiedTypeVariable(node, "Intl.NumberFormat")
                )
            },
        }
    })()

    const definedInstanceMethodsAndReturnType = [
        {
            METHODS_TO_RETURN_STRING: STRING_METHODS_TO_RETURN_STRING,
            METHODS_TO_RETURN_ARRAY: STRING_METHODS_TO_RETURN_ARRAY,
            METHODS_TO_RETURN_NUMBER: STRING_METHODS_TO_RETURN_NUMBER,
            isTargetGlobalObjects: isStringGlobalObjects,
            isTargetNode: isStringNode,
        },
        {
            METHODS_TO_RETURN_STRING: ARRAY_METHODS_TO_RETURN_STRING,
            METHODS_TO_RETURN_ARRAY: ARRAY_METHODS_TO_RETURN_ARRAY,
            METHODS_TO_RETURN_NUMBER: ARRAY_METHODS_TO_RETURN_NUMBER,
            isTargetGlobalObjects: isArrayGlobalObjects,
            isTargetNode: isArrayNode,
        },
        {
            METHODS_TO_RETURN_STRING: NUMBER_METHODS_TO_RETURN_STRING,
            METHODS_TO_RETURN_ARRAY: [], // NUMBER_METHODS_TO_RETURN_ARRAY,
            METHODS_TO_RETURN_NUMBER: NUMBER_METHODS_TO_RETURN_NUMBER,
            isTargetGlobalObjects: isNumberGlobalObjects,
            isTargetNode: isNumberNode,
        },
        {
            METHODS_TO_RETURN_STRING: DATE_METHODS_TO_RETURN_STRING,
            METHODS_TO_RETURN_ARRAY: [], // DATE_METHODS_TO_RETURN_ARRAY,
            METHODS_TO_RETURN_NUMBER: DATE_METHODS_TO_RETURN_NUMBER,
            isTargetGlobalObjects: isDateGlobalObjects,
            isTargetNode: isDateNode,
        },
        {
            METHODS_TO_RETURN_STRING: INTL_DATETIMEFORMAT_METHODS_TO_RETURN_STRING,
            METHODS_TO_RETURN_ARRAY: INTL_DATETIMEFORMAT_METHODS_TO_RETURN_ARRAY,
            METHODS_TO_RETURN_NUMBER: [], // INTL_DATETIMEFORMAT_METHODS_TO_RETURN_NMBER,
            isTargetGlobalObjects: isIntlNumberFormatGlobalObjects,
            isTargetNode: isIntlDateTimeFormatNode,
        },
        {
            METHODS_TO_RETURN_STRING: INTL_NUMBERFORMAT_METHODS_TO_RETURN_STRING,
            METHODS_TO_RETURN_ARRAY: INTL_NUMBERFORMAT_METHODS_TO_RETURN_ARRAY,
            METHODS_TO_RETURN_NUMBER: [], // INTL_NUMBERFORMAT_METHODS_TO_RETURN_NUMBER,
            isTargetGlobalObjects: isIntlNumberFormatGlobalObjects,
            isTargetNode: isIntlNumberFormatNode,
        },
        {
            METHODS_TO_RETURN_STRING: OBJECT_METHODS_TO_RETURN_STRING,
            METHODS_TO_RETURN_ARRAY: [], // OBJECT_METHODS_TO_RETURN_ARRAY,
            METHODS_TO_RETURN_NUMBER: [], // OBJECT_METHODS_TO_RETURN_NUMBER,
            isTargetGlobalObjects: isObjectGlobalObjects,
            isTargetNode() {
                return true
            },
        },
    ]

    // We plan to use it with `no-function-bind`
    // /**
    //  * Checks whether a given node is a function node or not.
    //  *
    //  * @param {ASTNode} node - A node to check.
    //  * @returns {boolean} `true` if the node is a function node.
    //  */
    // function isFunctionNode(node) {
    //     const anyFunctionPattern = /^(?:Function(?:Declaration|Expression)|ArrowFunctionExpression)$/
    //     return Boolean(node && anyFunctionPattern.test(node.type))
    // }

    /**
     * Checks whether a given node is a string node or not.
     *
     * @param {ASTNode} node - A node to check.
     * @returns {boolean} `true` if the node is a string node.
     */
    function isStringNode(node) {
        /**
         * Checks whether a given prototype property is a string result function call node or not.
         *
         * @param {ASTNode} object - A owner node to check.
         * @param {ASTNode} property - A property node to check.
         * @returns {boolean} `true` if the property is a string result function call node.
         */
        function isStringCallPrototypeProperty(object, property) {
            const propName = getMemberPropertyName(property)
            for (const d of definedInstanceMethodsAndReturnType) {
                if (
                    d.METHODS_TO_RETURN_STRING.includes(propName) &&
                    d.isTargetGlobalObjects(object)
                ) {
                    return true
                }
            }

            return false
        }

        /**
         * Checks whether a given property name is a string result function call node or not.
         *
         * @param {ASTNode} meNode - A MemberExpression node to check.
         * @returns {boolean} `true` if the property name is a string result function call node.
         */
        function isStringCallProperty(meNode) {
            const propName = getMemberPropertyName(meNode)
            for (const d of definedInstanceMethodsAndReturnType) {
                if (
                    d.METHODS_TO_RETURN_STRING.includes(propName) &&
                    d.isTargetNode(meNode.object)
                ) {
                    return true
                }
            }

            if (
                meNode.object.type === "Identifier" &&
                GLOBAL_OBJECTS_STATIC_METHODS_TO_RETURN_STRING.includes(
                    `${meNode.object.name}.${propName}`
                )
            ) {
                return true
            }
            return false
        }

        const isStringByTypes = {
            /**
             * Checks whether a given node is a number node or not.
             *
             * @param {ASTNode} beNode - A BinaryExpression node to check.
             * @returns {boolean} `true` if the node is a number node.
             */
            BinaryExpression(beNode) {
                if (
                    beNode.operator === "+" &&
                    (isStringNode(beNode.left) || isStringNode(beNode.right))
                ) {
                    return true
                }
                return false
            },
            /**
             * Checks whether a given node is a string result function call node or not.
             *
             * @param {ASTNode} ceNode - A CallExpression node to check.
             * @returns {boolean} `true` if the node is a string result function call node.
             */
            CallExpression(ceNode) {
                if (
                    ceNode.callee.type === "Identifier" &&
                    GLOBAL_OBJECTS_STATIC_METHODS_TO_RETURN_STRING.includes(
                        ceNode.callee.name
                    )
                ) {
                    return true
                }
                if (ceNode.callee.type === "MemberExpression") {
                    const proto = getCallPrototypeInfo(ceNode)

                    if (
                        proto &&
                        isStringCallPrototypeProperty(
                            proto.object,
                            proto.property
                        )
                    ) {
                        return true
                    }
                    if (isStringCallProperty(ceNode.callee)) {
                        return true
                    }
                }
                return false
            },
            /**
             * Checks whether a given node is a string node or not.
             *
             * @param {ASTNode} idNode - A Identifier node to check.
             * @returns {boolean} `true` if the node is a string node.
             */
            Identifier(idNode) {
                return typeIs.String(idNode)
            },

            Literal(lNode) {
                return typeof lNode.value === "string"
            },
            TemplateLiteral() {
                return true
            },
            NewExpression(neNode) {
                return isStringGlobalObjects(neNode.callee)
            },
        }

        const isStringByType = isStringByTypes[node.type]
        if (isStringByType && isStringByType(node)) {
            return true
        }

        return false
    }

    /**
     * Checks whether a given node is a Array node or not.
     *
     * @param {ASTNode} node - A node to check.
     * @returns {boolean} `true` if the node is a Array node.
     */
    function isArrayNode(node) {
        /**
         * Checks whether a given prototype property is a Array result function call node or not.
         *
         * @param {ASTNode} object - A owner node to check.
         * @param {ASTNode} property - A property node to check.
         * @returns {boolean} `true` if the property is a Array result function call node.
         */
        function isArrayCallPrototypeProperty(object, property) {
            const propName = getMemberPropertyName(property)
            for (const d of definedInstanceMethodsAndReturnType) {
                if (
                    d.METHODS_TO_RETURN_ARRAY.includes(propName) &&
                    d.isTargetGlobalObjects(object)
                ) {
                    return true
                }
            }
            return false
        }

        /**
         * Checks whether a given property name is a Array result function call node or not.
         *
         * @param {ASTNode} meNode - A MemberExpression node to check.
         * @returns {boolean} `true` if the property name is a Array result function call node.
         */
        function isArrayCallProperty(meNode) {
            const propName = getMemberPropertyName(meNode)
            for (const d of definedInstanceMethodsAndReturnType) {
                if (
                    d.METHODS_TO_RETURN_ARRAY.includes(propName) &&
                    d.isTargetNode(meNode.object)
                ) {
                    return true
                }
            }
            if (
                meNode.object.type === "Identifier" &&
                GLOBAL_OBJECTS_STATIC_METHODS_TO_RETURN_ARRAY.includes(
                    `${meNode.object.name}.${propName}`
                )
            ) {
                return true
            }
            return false
        }

        const isArrayByTypes = {
            /**
             * Checks whether a given node is a Array result function call node or not.
             *
             * @param {ASTNode} ceNode - A CallExpression node to check.
             * @returns {boolean} `true` if the node is a Array result function call node.
             */
            CallExpression(ceNode) {
                if (
                    ceNode.callee.type === "Identifier" &&
                    GLOBAL_OBJECTS_STATIC_METHODS_TO_RETURN_ARRAY.includes(
                        ceNode.callee.name
                    )
                ) {
                    return true
                }
                if (ceNode.callee.type === "MemberExpression") {
                    const proto = getCallPrototypeInfo(ceNode)

                    if (
                        proto &&
                        isArrayCallPrototypeProperty(
                            proto.object,
                            proto.property
                        )
                    ) {
                        return true
                    }
                    if (isArrayCallProperty(ceNode.callee)) {
                        return true
                    }
                }
                return false
            },
            /**
             * Checks whether a given node is a Array node or not.
             *
             * @param {ASTNode} reNode - A RestElement node to check.
             * @returns {boolean} `true` if the node is a Array node.
             */
            RestElement(reNode) {
                const parent = reNode.parent
                if (
                    parent.type === "ArrowFunctionExpression" ||
                    parent.type === "FunctionExpression" ||
                    parent.type === "FunctionDeclaration"
                ) {
                    // rest param
                    return true
                }
                if (parent.type === "ArrayPattern") {
                    // array destructuring
                    return true
                }
                return false
            },

            /**
             * Checks whether a given node is a Array node or not.
             *
             * @param {ASTNode} idNode - A Identifier node to check.
             * @returns {boolean} `true` if the node is a Array node.
             */
            Identifier(idNode) {
                return typeIs.Array(idNode)
            },

            NewExpression(neNode) {
                return isArrayGlobalObjects(neNode.callee)
            },
            ArrayExpression() {
                return true
            },
        }

        const isArrayByType = isArrayByTypes[node.type]
        if (isArrayByType && isArrayByType(node)) {
            return true
        }

        return false
    }

    /**
     * Checks whether a given node is a number node or not.
     *
     * @param {ASTNode} node - A node to check.
     * @returns {boolean} `true` if the node is a number node.
     */
    function isNumberNode(node) {
        /**
         * Checks whether a given prototype property is a number result function call node or not.
         *
         * @param {ASTNode} object - A owner node to check.
         * @param {ASTNode} property - A property node to check.
         * @returns {boolean} `true` if the property is a number result function call node.
         */
        function isNumberCallPrototypeProperty(object, property) {
            const propName = getMemberPropertyName(property)
            for (const d of definedInstanceMethodsAndReturnType) {
                if (
                    d.METHODS_TO_RETURN_NUMBER.includes(propName) &&
                    d.isTargetGlobalObjects(object)
                ) {
                    return true
                }
            }
            return false
        }

        /**
         * Checks whether a given property name is a number result function call node or not.
         *
         * @param {ASTNode} meNode - A MemberExpression node to check.
         * @returns {boolean} `true` if the property name is a number result function call node.
         */
        function isNumberCallProperty(meNode) {
            const propName = getMemberPropertyName(meNode)
            for (const d of definedInstanceMethodsAndReturnType) {
                if (
                    d.METHODS_TO_RETURN_NUMBER.includes(propName) &&
                    d.isTargetNode(meNode.object)
                ) {
                    return true
                }
            }
            if (
                meNode.object.type === "Identifier" &&
                GLOBAL_OBJECTS_STATIC_METHODS_TO_RETURN_NUMBER.includes(
                    `${meNode.object.name}.${propName}`
                )
            ) {
                return true
            }
            if (isMathGlobalObjects(meNode.object)) {
                // This judgment expects that all methods of `Math` will return` Number`
                return true
            }
            return false
        }

        const isNumberByTypes = {
            /**
             * Checks whether a given node is a number node or not.
             *
             * @param {ASTNode} beNode - A BinaryExpression node to check.
             * @returns {boolean} `true` if the node is a number node.
             */
            BinaryExpression(beNode) {
                if (
                    [
                        "<<",
                        ">>",
                        ">>>",
                        "-",
                        "*",
                        "/",
                        "%",
                        "|",
                        "^",
                        "&",
                    ].includes(beNode.operator)
                ) {
                    return true
                } else if (beNode.operator === "+") {
                    if (
                        isNumberNode(beNode.left) &&
                        isNumberNode(beNode.right)
                    ) {
                        return true
                    }
                }
                return false
            },

            /**
             * Checks whether a given property is a number node or not.
             *
             * @param {ASTNode} meNode - A MemberExpression node to check.
             * @returns {boolean} `true` if the property is a number node.
             */
            MemberExpression(meNode) {
                const propName = getMemberPropertyName(meNode)
                if (
                    STRING_PROPS_TO_TYPE_NUMBER.includes(propName) &&
                    isStringNode(meNode.object)
                ) {
                    return true
                }
                if (
                    ARRAY_PROPS_TO_TYPE_NUMBER.includes(propName) &&
                    isArrayNode(meNode.object)
                ) {
                    return true
                }
                if (
                    meNode.object.type === "Identifier" &&
                    GLOBAL_OBJECTS_STATIC_PROPS_TO_TYPE_NUMBER.includes(
                        `${meNode.object.name}.${propName}`
                    )
                ) {
                    return true
                }

                return false
            },

            /**
             * Checks whether a given node is a number result function call node or not.
             *
             * @param {ASTNode} ceNode - A CallExpression node to check.
             * @returns {boolean} `true` if the node is a number result function call node.
             */
            CallExpression(ceNode) {
                if (
                    ceNode.callee.type === "Identifier" &&
                    GLOBAL_OBJECTS_STATIC_METHODS_TO_RETURN_NUMBER.includes(
                        ceNode.callee.name
                    )
                ) {
                    return true
                }
                if (ceNode.callee.type === "MemberExpression") {
                    const proto = getCallPrototypeInfo(ceNode)

                    if (
                        proto &&
                        isNumberCallPrototypeProperty(
                            proto.object,
                            proto.property
                        )
                    ) {
                        return true
                    }
                    if (isNumberCallProperty(ceNode.callee)) {
                        return true
                    }
                }
                return false
            },

            /**
             * Checks whether a given node is a number node or not.
             *
             * @param {ASTNode} idNode - A Identifier node to check.
             * @returns {boolean} `true` if the node is a number node.
             */
            Identifier(idNode) {
                return (
                    GLOBAL_OBJECTS_STATIC_PROPS_TO_TYPE_NUMBER.includes(
                        idNode.name
                    ) || typeIs.Number(idNode)
                )
            },

            Literal(lNode) {
                return typeof lNode.value === "number"
            },
            NewExpression(neNode) {
                return isNumberGlobalObjects(neNode.callee)
            },
        }
        const isNumberByType = isNumberByTypes[node.type]
        if (isNumberByType && isNumberByType(node)) {
            return true
        }

        return false
    }

    /**
     * Checks whether a given node is a Date node or not.
     *
     * @param {ASTNode} node - A node to check.
     * @returns {boolean} `true` if the node is a Date node.
     */
    function isDateNode(node) {
        /**
         * Checks whether a given property name is a Date result function call node or not.
         *
         * @param {ASTNode} meNode - A MemberExpression node to check.
         * @returns {boolean} `true` if the property name is a Date result function call node.
         */
        function isDateCallProperty(meNode) {
            const propName = getMemberPropertyName(meNode)
            if (
                meNode.object.type === "Identifier" &&
                GLOBAL_OBJECTS_STATIC_METHODS_TO_RETURN_DATE.includes(
                    `${meNode.object.name}.${propName}`
                )
            ) {
                return true
            }
            return false
        }

        const isDateByTypes = {
            /**
             * Checks whether a given node is a Date result function call node or not.
             *
             * @param {ASTNode} ceNode - A CallExpression node to check.
             * @returns {boolean} `true` if the node is a Date result function call node.
             */
            CallExpression(ceNode) {
                if (
                    ceNode.callee.type === "Identifier" &&
                    GLOBAL_OBJECTS_STATIC_METHODS_TO_RETURN_DATE.includes(
                        ceNode.callee.name
                    )
                ) {
                    return true
                }
                if (ceNode.callee.type === "MemberExpression") {
                    if (isDateCallProperty(ceNode.callee)) {
                        return true
                    }
                }
                return false
            },

            /**
             * Checks whether a given node is a Date node or not.
             *
             * @param {ASTNode} idNode - A Identifier node to check.
             * @returns {boolean} `true` if the node is a Date node.
             */
            Identifier(idNode) {
                return typeIs.Date(idNode)
            },
            NewExpression(neNode) {
                return isDateGlobalObjects(neNode.callee)
            },
        }
        const isDateByType = isDateByTypes[node.type]
        if (isDateByType && isDateByType(node)) {
            return true
        }

        return false
    }

    /**
     * Checks whether a given node is a `Intl.DateTimeFormat` node or not.
     *
     * @param {ASTNode} node - A node to check.
     * @returns {boolean} `true` if the node is a `Intl.DateTimeFormat` node.
     */
    function isIntlDateTimeFormatNode(node) {
        const isIntlDateTimeFormatByTypes = {
            /**
             * Checks whether a given node is a `Intl.DateTimeFormat` result function call node or not.
             *
             * @param {ASTNode} ceNode - A CallExpression node to check.
             * @returns {boolean} `true` if the node is a `Intl.DateTimeFormat` result function call node.
             */
            CallExpression(ceNode) {
                return isIntlDateTimeFormatGlobalObjects(ceNode.callee)
            },

            /**
             * Checks whether a given node is a `Intl.DateTimeFormat` node or not.
             *
             * @param {ASTNode} idNode - A Identifier node to check.
             * @returns {boolean} `true` if the node is a `Intl.DateTimeFormat` node.
             */
            Identifier(idNode) {
                const type = "Intl.DateTimeFormat"
                return typeIs[type](idNode)
            },
            NewExpression(neNode) {
                return isIntlDateTimeFormatGlobalObjects(neNode.callee)
            },
        }
        const isIntlDateTimeFormatByType =
            isIntlDateTimeFormatByTypes[node.type]
        if (isIntlDateTimeFormatByType && isIntlDateTimeFormatByType(node)) {
            return true
        }

        return false
    }

    /**
     * Checks whether a given node is a `Intl.NumberFormat` node or not.
     *
     * @param {ASTNode} node - A node to check.
     * @returns {boolean} `true` if the node is a `Intl.NumberFormat` node.
     */
    function isIntlNumberFormatNode(node) {
        const isIntlNumberFormatByTypes = {
            /**
             * Checks whether a given node is a `Intl.NumberFormat` result function call node or not.
             *
             * @param {ASTNode} ceNode - A CallExpression node to check.
             * @returns {boolean} `true` if the node is a `Intl.NumberFormat` result function call node.
             */
            CallExpression(ceNode) {
                return isIntlNumberFormatGlobalObjects(ceNode.callee)
            },

            /**
             * Checks whether a given node is a `Intl.NumberFormat` node or not.
             *
             * @param {ASTNode} idNode - A Identifier node to check.
             * @returns {boolean} `true` if the node is a `Intl.NumberFormat` node.
             */
            Identifier(idNode) {
                const type = "Intl.NumberFormat"
                return typeIs[type](idNode)
            },
            NewExpression(neNode) {
                return isIntlNumberFormatGlobalObjects(neNode.callee)
            },
        }

        const isIntlNumberFormatByType = isIntlNumberFormatByTypes[node.type]
        if (isIntlNumberFormatByType && isIntlNumberFormatByType(node)) {
            return true
        }

        return false
    }

    /**
     * Check whether it is a reference initialized with `type` Node
     * @param  {Variable} variable target Variable
     * @param  {Reference} targetReference target Reference
     * @param  {string} type specify type.
     * @returns {boolean} Is a `type` Node initialized
     */
    function isSpecifiedTypeReference(variable, targetReference, type) {
        const targetIndex = variable.references.indexOf(targetReference)
        const targetScope = targetReference.from

        let scopeLastWriteExpr = undefined
        const otherScopeWriteExprs = []
        variable.references.forEach((reference, index) => {
            const writeExpr = reference.writeExpr
            if (!writeExpr || reference.partial) {
                return
            }
            const selfAssignment = variable.references.some(
                ref => writeExpr === ref.identifier
            )
            if (selfAssignment) {
                return
            }
            if (targetScope === reference.from) {
                // scope
                if (index < targetIndex) {
                    scopeLastWriteExpr = writeExpr
                }
            } else {
                // other scope
                otherScopeWriteExprs.push(writeExpr)
            }
        })
        if (!otherScopeWriteExprs.every(writeExpr => typeIs[type](writeExpr))) {
            // has not string
            return false
        }
        if (scopeLastWriteExpr) {
            return typeIs[type](scopeLastWriteExpr)
        }
        return variable.defs.every(def => {
            const parent = def.name.parent
            //
            return typeIs[type](parent)
        })
    }

    /**
     * Find reference
     * @param  {ASTNode} node target identifier Node
     * @returns {object} reference info
     */
    function findReference(node) {
        for (const variable of variables) {
            for (const reference of variable.references) {
                if (reference.identifier === node) {
                    return {
                        variable,
                        reference,
                    }
                }
            }
        }
        return null
    }

    /**
     * Check whether it is a variable initialized with `type` Node
     * @param  {ASTNode} node identifier Node
     * @param  {string} type specify type.
     * @returns {boolean} Is a `type` Node initialized
     */
    function isSpecifiedTypeVariable(node, type) {
        // Checked by caller
        // if (node.type !== "Identifier") {
        //     return false
        // }
        const ref = findReference(node)
        if (!ref) {
            return false
        }
        const { variable, reference } = ref
        return isSpecifiedTypeReference(variable, reference, type)
    }

    const visitor = {
        "VariableDeclarator, VariableDeclaration, FunctionDeclaration, FunctionExpression, ArrowFunctionExpression, ClassDeclaration, ClassExpression, CatchClause, ImportDeclaration, ImportSpecifier, ImportDefaultSpecifier, ImportNamespaceSpecifier"(
            node
        ) {
            const declaredVariables = context.getDeclaredVariables(node)
            variables.push(...declaredVariables)
        },
    }
    for (const name of Object.keys(defineObject)) {
        const fn = defineObject[name]
        visitor[name] = node => {
            const define = fn(node)
            if (!define || !define.propertyNode) {
                return
            }
            const property = define.propertyNode

            // Currently it will not be called with MemberExpression
            // if (property.type !== "MemberExpression") {
            //     return
            // }

            const object = property.object
            if (
                object.type === "MemberExpression" &&
                getMemberPropertyName(object) === "prototype" &&
                (object.object.type === "Identifier" &&
                    object.object.name === classType)
            ) {
                // prototype
                define.applyPropertyNode(property)
            } else if (typeIs[classType](object)) {
                define.applyPropertyNode(property)
            }
        }
    }
    return visitor
}

module.exports = {
    /**
     * Returns the `String.prototype` properties visitor.
     * @param {RuleContext} context The rule context to use parser services.
     * @param  {object} defineObject visitor definition
     * @returns {object} visitor
     */
    defineStringPrototypePropertyVisitor(context, defineObject) {
        return definePrototypePropertyVisitor(context, "String", defineObject)
    },
    // We plan to use it with `no-array-prototype-method-es5`/`no-array-prototype-method-es2015`/`no-array-includes`
    // /**
    //  * Returns the `Array.prototype` properties visitor.
    //  * @param {RuleContext} context The rule context to use parser services.
    //  * @param  {object} defineObject visitor definition
    //  * @returns {object} visitor
    //  */
    // defineArrayPrototypePropertyVisitor(context, defineObject) {
    //     return definePrototypePropertyVisitor(context, "Array", defineObject)
    // },

    // We plan to use it with `no-function-bind`
    // /**
    //  * Returns the `Array.prototype` properties visitor.
    //  * @param {RuleContext} context The rule context to use parser services.
    //  * @param  {object} defineObject visitor definition
    //  * @returns {object} visitor
    //  */
    // defineFunctionPrototypePropertyVisitor(context, defineObject) {
    //     return definePrototypePropertyVisitor(context, "Function", defineObject)
    // },
    getMemberPropertyName,
}
