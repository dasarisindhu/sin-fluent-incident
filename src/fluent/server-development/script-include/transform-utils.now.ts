import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: 'transform_utils_script_include',
    name: 'TransformUtils',
    apiName: 'x_678067_inciden_0.TransformUtils',
    script: Now.include('./transform-utils.server.js'),
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
    protectionPolicy: 'read',
})
