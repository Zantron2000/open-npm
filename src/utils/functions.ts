import Ajv, { JSONSchemaType } from "ajv";

type FunctionErrors = {
    name: string;
    import: string;
    github: string;
    description: string;
    examples: {
        name: string;
        value: string;
    }[];
    params: {
        name: string;
        type: string;
        description: string;
        default: string;
        required: string;
    }[];
    returns: {
        required: string;
        type: string;
        description: string;
    };
}

type Function = {
    name: string;
    import: string;
    github: string;
    description: string;
    examples: {
        name: string;
        value: string;
    }[];
    params: {
        name: string;
        type: string;
        description: string;
        default: string;
        required: boolean;
    }[];
    returns: {
        required: boolean;
        type: string;
        description: string;
    };
}

const functionSchema: JSONSchemaType<Function> = {
    type: 'object',
    required: ['name', 'import'],
    properties: {
        name: {
            type: 'string',
            minLength: 1,
        },
        import: {
            type: 'string',
            minLength: 1,
        },
        github: {
            type: 'string',
        },
        description: {
            type: 'string',
        },
        examples: {
            type: 'array',
            items: {
                type: 'object',
                required: ['name', 'value'],
                properties: {
                    name: {
                        type: 'string',
                        minLength: 1,
                    },
                    value: {
                        type: 'string',
                        minLength: 1,
                    },
                },
            },
        },
        params: {
            type: 'array',
            items: {
                type: 'object',
                required: ['name', 'type'],
                properties: {
                    name: {
                        type: 'string',
                        minLength: 1,
                    },
                    type: {
                        type: 'string',
                        minLength: 1,
                    },
                    description: {
                        type: 'string',
                    },
                    default: {
                        type: 'string',
                    },
                    required: {
                        type: 'boolean',
                    },
                },
            },
        },
        returns: {
            type: 'object',
            required: ['required'],
            properties: {
                required: {
                    type: 'boolean',
                },
                type: {
                    type: 'string',
                    minLength: 1,
                },
                description: {
                    type: 'string',
                },
            },
        },
    }
}

export const validateFunction = (data: Function): { errors: FunctionErrors, isValid: Boolean } => {
    if (!data['returns']?.required) {
        data.returns.type = ' ';
    }

    const errors: FunctionErrors = {
        name: "",
        import: "",
        github: "",
        description: "",
        examples: data['examples'].map(() => ({
            name: "",
            value: "",
        })),
        params: data['params'].map(() => ({
            name: "",
            type: "",
            description: "",
            default: "",
            required: "",
        })),
        returns: {
            required: "",
            type: "",
            description: "",
        },
    };
    const ajv = new Ajv({ allErrors: true });
    const validate = ajv.compile(functionSchema);
    const isValid = validate(data);

    validate.errors?.forEach((error) => {
        const paths = error.instancePath.split('/').slice(1);
        let reference: any = errors;

        paths.forEach((path, index) => {
            if (index === paths.length - 1) {
                reference[path] = path + ': ' + error.message;
            } else if (Number.isInteger(parseInt(path))) {
                reference = reference[parseInt(path)];
            } else {
                reference = reference[path];
            }
        });
    });

    if (!data['returns']?.required) {
        errors.returns.type = '';
        errors.returns.description = '';
    }

    return {
        errors,
        isValid,
    };
}