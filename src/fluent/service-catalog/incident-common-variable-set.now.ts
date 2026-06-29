import { VariableSet, SingleLineTextVariable, ReferenceVariable } from '@servicenow/sdk/core'

export const incidentCommonVariableSet = VariableSet({
    $id: 'incident_common_variable_set',
    title: 'Incident Requester Info',
    description: 'Reusable requester details for incident-related catalog items.',
    type: 'singleRow',
    layout: 'normal',
    displayTitle: true,
    order: 100,
    variables: {
        requester: ReferenceVariable({
            question: 'Requested For',
            referenceTable: 'sys_user',
            mandatory: true,
            order: 100,
        }),
        contact_number: SingleLineTextVariable({
            question: 'Contact Number',
            mandatory: true,
            order: 200,
        }),
    },
})
